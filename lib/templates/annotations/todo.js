const { list, headline } = require("../../template-helpers.js");

module.exports = ({ item, headlineLevel }) => {
  const { todo } = item.data;
  if (todo) {
    return `
${ headline("Todos", headlineLevel) }

${ list(todo) }
    `;
  }
}