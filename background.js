const isHttp = (url) => url.startsWith("http://") || url.startsWith("https://");

const collect = (nodes, result = []) =>
  nodes.reduce((all, node) => {
    if (node.url && isHttp(node.url)) all.push(node);
    if (node.children) collect(node.children, all);
    return all;
  }, result);

browser.browserAction.onClicked.addListener(async () => {
  const tree = await browser.bookmarks.getTree();
  const { filters = "", mode = "blacklist" } = await browser.storage.local.get([
    "filters",
    "mode",
  ]);

  const terms = filters
    .split("\n")
    .map((l) => l.trim().toLowerCase())
    .filter(Boolean);

  const bookmarks = collect(tree).filter(({ url }) => {
    const match = terms.some((t) => url.toLowerCase().includes(t));
    return mode === "blacklist" ? !match : match;
  });

  if (bookmarks.length) {
    const { url } = bookmarks[Math.floor(Math.random() * bookmarks.length)];
    browser.tabs.update({ url });
  }
});
