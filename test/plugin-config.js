const path = require("path");

module.exports = {
  dir: path.resolve(__dirname, "sass/"),
  debug: true,
  debugToDir: path.resolve(__dirname, "logs/"),
  previewMeta: `
    <title>Sassdoc Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/sassdoc-preview.css">
  `,
  previewBodyScripts: `
    <script src="/sassdoc-preview.js"></script>
  `
};