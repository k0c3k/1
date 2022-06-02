
if ('loading' in HTMLImageElement.prototype) {
  let i = document.querySelectorAll('img[loading="lazy"]');
  i.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  let s = document.createElement('script');
  s.type='text/javascript';
  s.crossOrigin='anonymous';
  s.src = tls+'cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/17.3.1/lazyload.min.js';
  doc.body.appendChild(s);
}
