function fne(f,n,e){
  var s=doc.createElement('script');
    s.async=!1;
    s.crossOrigin='anonymous';
    s.setAttribute('data-id','fne');
    s.src=tls+kk1+f+'/'+n+e+'.min.js'+ver;
    s.type='text/javascript';
  if(typeof s!=='undefined' && lSearch==='?'+f+'='+n){
    kbody.appendChild(s);
    s.addEventListener('load',function(){
      var id=doc.querySelector('[data-id="fne"]');
      if(id!==null){
        loadynk('b/idexist0','b');
      }
    })
  }
};

function fneLast(){
  var id=doc.querySelector('[data-id="fne"]');
  if(id===null){
    loadynk('b/idnone0','b');
  }
};

fne('p','about',1);
fne('p','layanan',0);
fneLast();
