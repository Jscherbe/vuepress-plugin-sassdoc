const { list, headline } = require("../../template-helpers.js");
module.exports = ({ item, headlineLevel }) => {
  if (item.data.throw) {
    return `
${ headline("Throw", headlineLevel) }

${ list(item.data.throw) }
    `;
  }
}