for(let i=0;i<kimgAll.length;i++){
  kimgAll[i].oncontextmenu=function(){return false};
}
if ('loading' in HTMLImageElement.prototype) {
  let i = doc.querySelectorAll('img[loading="lazy"]');
  i.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  let s=doc.createElement('script');
  s.type='text/javascript';
  s.crossOrigin='anonymous';
  s.src=tls+'cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/17.3.1/lazyload.min.js';
  kbody.appendChild(s);
}
