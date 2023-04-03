
# Output with Watcher/Cleanup (Use with Caution!)

**The script example below is deleting files, it's important to have the directory backed up incase you make any mistake with the paths/setup. Please use caution implementing this.**

The example below watches for changes and rebuilds the directory the outputPages is building into. In the example below your would pass "--watch" to enable the watch and rebuild. 

```js
import fs from "fs-extra";
import path from "path";
import chokidar from "chokidar";
import { outputPages } from "@ulu/vuepress-plugin-sassdoc";
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

// The creation of pages is async
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
```