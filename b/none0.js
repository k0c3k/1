/* NOINDEX */
let metaRobots=doc.createElement('meta');
metaRobots.name='robots';
metaRobots.content='noindex, nofollow';
doc.head.appendChild(metaRobots);

/* META REFRESH */
let metaRefresh=doc.createElement('meta');
metaRefresh.setAttribute('http-equiv', 'refresh');
metaRefresh.content='0; url='+tls+hn+'/404';
doc.head.appendChild(metaRefresh);
