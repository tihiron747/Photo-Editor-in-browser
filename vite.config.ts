import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Every public tool page loads the same app, while retaining its own static description.
export default defineConfig({plugins:[react(), {
  name: 'tool-page-entry',
  generateBundle(_options, bundle) {
    const entry = Object.values(bundle).find(item => item.type === 'chunk' && item.isEntry);
    if (!entry) throw new Error('Application entry is missing');
    const styles = Object.values(bundle).filter(item => item.fileName.endsWith('.css')).map(item => `<link rel="stylesheet" href="/${item.fileName}">`).join('');
    for (const [route, title] of Object.entries({ 'image-merge': '画像結合', 'image-resize': '画像リサイズ', 'image-tools': '画像編集・EXIF削除', 'image-compress': '画像圧縮・容量削減', about: 'サイトについて', terms: '利用規約', privacy: 'プライバシーポリシー' })) {
      this.emitFile({type:'asset', fileName:`${route}/index.html`, source:`<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}｜toolbox</title><meta name="description" content="${title}。toolboxの画像ツールは端末のブラウザ内で処理します。"><link rel="canonical" href="https://photo-editor-in-browser.pages.dev/${route}/">${styles}</head><body><div id="root"></div><script type="module" src="/${entry.fileName}"></script></body></html>`});
    }
  }
}]});
