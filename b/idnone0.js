if(typeof idSetting==='undefined'){

/* META NOINDEX */
let metaRobots=doc.createElement('meta');
metaRobots.name='robots';
metaRobots.content='noindex, nofollow';
khead.appendChild(metaRobots);

/* META REFRESH */
let metaRefresh=doc.createElement('meta');
metaRefresh.setAttribute('http-equiv', 'refresh');
metaRefresh.content='0; url='+tls+kk+'/404';
khead.appendChild(metaRefresh);

}
