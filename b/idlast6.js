if (typeof idSetting === 'undefined') {

/* META NOINDEX */
let metaRobots=doc.createElement('meta');
metaRobots.name='robots';
metaRobots.content='noindex, nofollow';
doc.head.appendChild(metaRobots);

/* META REFRESH */
let metaRefresh=doc.createElement('meta');
metaRefresh.setAttribute('http-equiv', 'refresh');
metaRefresh.content='0; url='+tls+hn+'/404';
doc.head.appendChild(metaRefresh);

}

if (typeof idSetting !== 'undefined') {

/* TITLE */
doc.title=idSetting.judul;

/* CONTENT */
let h1='<h1>'+idSetting.judul+'</h1>';
let article=doc.createElement('article');
article.innerHTML=h1+idContent.join('');
kmain.appendChild(article);

let karticle=doc.querySelector("article");

let breadcrumb=doc.createElement('ul');
breadcrumb.className='breadcrumb';
if (typeof idSetting.label !== 'undefined') {
breadcrumb.innerHTML='<li><a href="'+tls+hn+'">Beranda</a></li><li><a href="'+idSetting.label.url+'">'+idSetting.label.name+'</a></li>';
} else {
breadcrumb.innerHTML='<li><a href="'+tls+hn+'">Beranda</a></li>';
};
karticle.insertBefore(breadcrumb,karticle.firstElementChild);

/* META INDEX */
let metaRobots=doc.createElement('meta');
metaRobots.name='robots';
if (idSetting.index === !0) {
  metaRobots.content='index, follow';
} else {
  metaRobots.content='noindex, nofollow';
}
doc.head.appendChild(metaRobots);

/* META DESCRIPTION */
let metaDescription=doc.createElement('meta');
metaDescription.name='description';
metaDescription.content=idSetting.deskripsi;
doc.head.appendChild(metaDescription);

/* CANONICAL */
let linkCanonical=doc.createElement('link');
linkCanonical.rel='canonical';
linkCanonical.href=tls+hn+idSetting.permalink;
doc.head.appendChild(linkCanonical);

/* BREADCRUMBLIST */
if (typeof idSetting.label !== 'undefined') {
let breadcrumbList=doc.createElement('script');
breadcrumbList.setAttribute('type' ,'application/ld+json');
breadcrumbList.textContent='{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Beranda","item":"'+tls+hn+'"},{"@type":"ListItem","position":2,"name":"'+idSetting.label.name+'","item":"'+tls+hn+idSetting.label.url+'"}]}';
doc.head.appendChild(breadcrumbList);
}

}
