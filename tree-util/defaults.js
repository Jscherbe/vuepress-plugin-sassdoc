export const defaults = {
  source: null,
  base: null,
  parser: null,
  indexFiles: ["index.md", "README.md"],
  sort(a, b) {
    const getWeight = p => p.frontmatter.order || p.frontmatter.weight || 0;
    return getWeight(a) - getWeight(b) || a.text.localeCompare(b.text);
  }
};

export const parserDefaults = {
  extensions: /\.md$/,
  exclude: /\.vuepress$/,
};