import fs from "fs-extra";
import path from "path";
import chokidar from "chokidar";
import { outputPages } from "../../index.js";
import options from "./sassdoc-options.js";

const isWatch = process.argv.includes("--watch");
const outputFolder = path.join(options.dist, options.pathBase);
const watchOptions = { ignoreInitial: true, cwd: options.dir };
let running = false;

async function output() {
  if (!running) {
    running = true;
    cleanOutputDir();
    await outputPages(options);
    running = false;
  }
}
function cleanOutputDir() {
  const dir = fs.readdirSync(outputFolder);
  dir.forEach(item => {
    const fullpath = path.join(outputFolder, item);
    // Delete if directory (was created by sassdoc plugin)
    if (fs.lstatSync(fullpath).isDirectory()) {
      fs.removeSync(fullpath);
    }
  });
}

(async () => {
  try {
    await output();
    if (isWatch) {
      chokidar
        .watch("**/*.scss", watchOptions)
        .on('all', output);
    }
  } catch (error) {
    console.log(error);
  }
})();