const { propertyTable, headline } = require("../../template-helpers.js");
module.exports = ({ item, headlineLevel }) => {
  if (item.data.return) {
    return `
${ headline("Returns", headlineLevel) }

${ propertyTable([ item.data.return ]) }

    `;
  }
}