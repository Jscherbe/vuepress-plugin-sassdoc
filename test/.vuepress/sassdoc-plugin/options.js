import { resolve } from "path";

export default {
  dir: resolve(__dirname, "../scss/"),
  byType: true,
  pathBase: "/by-type/",
  debug: true,
  debugToDir: __dirname,
  previewMeta: `
    <title>Sassdoc Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/sassdoc-preview.css">
  `,
  previewBodyScripts: `
    <script src="/sassdoc-preview.js"></script>
  `
}