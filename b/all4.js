/* function */
function loadynk(e,t){
  var s;
  if(t=='a'){
    s=doc.createElement('link');
    s.href=tls+kk1+e+'.min.css'+ver;
    s.rel='stylesheet';
    s.type='text/css';
    if(typeof s!=='undefined'){
      khead.appendChild(s);}
  }else if(t=='b'){
    s=doc.createElement('script');
    s.async=!1;
    s.crossOrigin='anonymous';
    s.src=tls+kk1+e+'.min.js'+ver;
    s.type='text/javascript';
    if(typeof s!=='undefined'){
      kbody.appendChild(s);}
  }
};

function inAfter(newNode,existingNode){existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling)}

/* Top info */
var info1='<div class="top-info notranslate" data-nosnippet><p>Status Transaksi: <b class="green">Online</b> / <b class="red">Offline</b><br>Status Layanan: <b class="blue">Semua Normal</b><br>Selamat Hemat :)</p></div>'
let topinfo=doc.createElement('div');
topinfo.innerHTML=info1;
inAfter(topinfo,kheader);

/* Footer */
var kfoot1='<div class="foot-info"><h2><i class="icon-xor"></i>Kocek.co</h2><h3>Situs Finansial Digital Kreatif</h3><ul><li><a href="/id?p=about">Apa itu Kocek.co?</a></li><li><a href="#">Cara Pembayaran</a></li><li><a href="#">Biaya Layanan</a></li><li><a href="#" rel="nofollow noopener">Syarat dan Ketentuan</a></li><li><a href="#" rel="nofollow noopener">Kebijakan Privasi</a></li><li><a href="#">FAQ</a></li></ul><p data-nosnippet>Saat ini Kocek.co merupakan personal business yang tidak berafiliasi dengan platform manapun.</p></div>',
    kfoot2 = '<div class="ongoogle"><a href="https://www.google.com" rel="nofollow noopener" target="_blank"><b>Search on</b><i class="svg-google"></i></a></div>';

let topfoot=doc.createElement('div');
topfoot.innerHTML=kfoot1+kfoot2;
kfooter.insertBefore(topfoot,kfooter.firstElementChild);

doc.querySelector('.footer p:nth-child(1) b').innerHTML='<a href="mailto:business@kocek.co" rel="nofollow noopener" target="_blank">business@kocek.co</a>';