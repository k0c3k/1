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

/* HEADING 1 */
let heading1=doc.createElement('h1');
heading1.innerHTML=idSetting.judul;
kmain.insertBefore(heading1,kmain.firstElementChild);

/* CONTENT */
let divContent=doc.createElement('div');
divContent.innerHTML=idContent.join('');
kmain.appendChild(divContent);

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

}