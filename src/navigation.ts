const routes:Record<string,string>={'画像結合':'/image-merge/','画像リサイズ':'/image-resize/','動画ツール':'/video-trim/','サイトについて':'/about/','利用規約':'/terms/','プライバシーポリシー':'/privacy/'};
document.addEventListener('click',e=>{const el=(e.target as HTMLElement).closest('a,span');if(!el)return;const path=routes[(el.textContent||'').trim()];if(path){history.pushState({},'',path)}});
window.addEventListener('DOMContentLoaded',()=>{const b=document.createElement('a');b.textContent='English';b.href='/en/';b.className='language-switch';document.querySelector('header')?.appendChild(b)});
