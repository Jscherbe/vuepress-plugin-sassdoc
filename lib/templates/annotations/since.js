const { list, headline } = require("../../template-helpers.js");

module.exports = ({ item, headlineLevel }) => {
  const { since } = item.data;
  if (since) {
    return `
${ headline("Since", headlineLevel) }

${ list(since, s => `\`${ s.version }\` - ${ s.description }`) }

    `;
  }
}