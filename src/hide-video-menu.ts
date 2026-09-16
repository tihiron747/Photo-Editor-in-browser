const hide=()=>document.querySelectorAll('nav a').forEach(a=>{if(a.textContent?.includes('動画'))a.remove()});new MutationObserver(hide).observe(document.body,{childList:true,subtree:true});hide();
