if(typeof idSetting!=='undefined'){

/* TITLE */
doc.title=idSetting.judul;

/* CONTENT */
let h1='<h1><a href="'+idSetting.permalink+'">'+idSetting.judul+'</a></h1>';
let article=doc.createElement('article');
article.innerHTML=h1+idContent.join('');
kmain.appendChild(article);

/* BREADCRUMB */
var breadcrumb1=doc.createElement('ul');
breadcrumb1.className='breadcrumb';
if(typeof idSetting.label!=='undefined'){
  breadcrumb1.innerHTML='<li><a href="'+tls+kk+'">Beranda</a></li><li><a href="'+idSetting.label.url+'">'+idSetting.label.name+'</a></li>';
} else {
  breadcrumb1.innerHTML='<li><a href="'+tls+kk+'">Beranda</a></li>';
};
let karticle=doc.querySelector('article');
karticle.insertBefore(breadcrumb1,karticle.firstElementChild);

/* META INDEX */
var metaRobots=doc.createElement('meta');
metaRobots.name='robots';
if (idSetting.index===!0){
  metaRobots.content='index, follow';
} else {
  metaRobots.content='noindex, nofollow';
}
khead.appendChild(metaRobots);

/* META DESCRIPTION */
let metaDesc=doc.createElement('meta');
metaDesc.name='description';
metaDesc.content=idSetting.deskripsi;
khead.appendChild(metaDesc);

/* CANONICAL */
let linkCanonical=doc.createElement('link');
linkCanonical.rel='canonical';
linkCanonical.href=tls+kk+idSetting.permalink;
khead.appendChild(linkCanonical);

/* BREADCRUMBLIST */
if (typeof idSetting.label!=='undefined'){
  let breadcrumbList=doc.createElement('script');
  breadcrumbList.setAttribute('type' ,'application/ld+json');
  breadcrumbList.textContent='{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Beranda","item":"'+tls+kk+'"},{"@type":"ListItem","position":2,"name":"'+idSetting.label.name+'","item":"'+tls+kk+idSetting.label.url+'"}]}';
  khead.appendChild(breadcrumbList);
}

}
