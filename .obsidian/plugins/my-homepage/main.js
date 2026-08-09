// My Homepage — opens wiki/工作台.md as the vault landing note on startup.
// Minimal custom Obsidian community plugin (no external deps).
const obsidian = require('obsidian');

const HOMEPAGE_PATH = 'wiki/工作台.md';

class MyHomepage extends obsidian.Plugin {
  onload() {
    this.app.workspace.onLayoutReady(() => {
      const file = this.app.vault.getAbstractFileByPath(HOMEPAGE_PATH);
      if (!file) return;
      const leaf = this.app.workspace.getLeaf(false);
      leaf.openFile(file);
    });
  }

  onunload() {}
}

module.exports = MyHomepage;
