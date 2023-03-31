import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  dist: resolve(__dirname, "../"),
  dir: resolve(__dirname, "scss-tests"),
  pathBase: "/sass/"
}