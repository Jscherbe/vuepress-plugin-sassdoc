import { defineUserConfig } from "vuepress";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defaultTheme } from "@vuepress/theme-default";
import { createTree, toDefaultTheme } from "../../tree-util/index.js";
import { plugin } from "../../index.js";
import sassdocOptions from "./sassdoc-options.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const pageTree = createTree({
  source: resolve(__dirname, "../")
});

export default defineUserConfig({
  lang: "en-US",
  title: "Sassdoc Tests",
  description: "Test plugin in vuepress setup",
  theme: defaultTheme({
    ...toDefaultTheme(pageTree)
  }),
  plugins: [
    plugin(sassdocOptions)
  ]
});