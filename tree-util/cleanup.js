/**
 * Applies sort function through all groups
 */
export default function cleanup(tree, options) {
  tree.sort(options.sort);
  tree.forEach(page => {
    const { children } = page;
    if (children?.length) {
      cleanup(children, options);
    }
    delete page.frontmatter;
  });
}