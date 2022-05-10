const { headline } = require("../../template-helpers.js");

module.exports = ({ item, headlineLevel }) => {
  const { output } = item.data;
  if (output) {
    return `
${ headline("Mixin Output", headlineLevel) }

${ output }

    `
  }
}