import { defineUserConfig } from 'vuepress'
import plugin from '../../index.js'
import options from './sassdoc-plugin/options.js'

export default defineUserConfig({
  lang: 'en-US',
  title: "Test for Plugin",
  description: "Vuepress test site used to test the plugin",
  plugins: [
    plugin(options)
  ]
});