

if ('loading' in HTMLImageElement.prototype) {
  let images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  let script = document.createElement('script');
  script.src = tls+'cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/17.3.1/lazyload.min.js';
  document.body.appendChild(script);
}
