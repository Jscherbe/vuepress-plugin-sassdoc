const { propertyTable, headline } = require("../../template-helpers.js");
module.exports = ({ item, headlineLevel }) => {
  const { property } = item.data
  if (property) {
    return `
${ headline("Map Properties", headlineLevel) }

${ propertyTable(property) }

    `;
  }
}