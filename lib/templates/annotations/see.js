const { list, link, headline } = require("../../template-helpers");

module.exports = ({ item, headlineLevel }) => {
  const { see } = item.data;
  if (!see || !see.length) return;
  const links = see.map(item => link(item.$item));
  return `
${ headline("See", headlineLevel) }

${ list(links) }
  `;
}