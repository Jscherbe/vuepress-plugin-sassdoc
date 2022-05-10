const { description } = require('../../package');
const sassdocPlugin = require("../../index.js");
const sassdocPluginOptions = require("./plugin-config.js");

module.exports = {
  title: '@ulu/vuepress-plugin-sassdoc (test)',
  description: description,
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    pluginAutoNav: {
      createSidebar: true,
      createNav: true,
      sidebarAllSections: false
    }
  },
  plugins: [
    [sassdocPlugin, sassdocPluginOptions],
    [sassdocPlugin, {
      ...sassdocPluginOptions,
      byType: false,
      pathBase: "/not-by-type/"
    }],
    "@ulu/vuepress-plugin-auto-nav"
  ]
}