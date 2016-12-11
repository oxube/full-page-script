function oxu_get_url(url){var l=document.createElement("a");l.href=url;return l};function oxu_get_host_name(url){var domain;if(typeof url==='undefined'||url===null||url===''||url.match(/^\#/)){return""}
url=oxu_get_url(url);if(url.href.search(/^http[s]?:\/\//)!==-1){domain=url.href.split('/')[2]}else{return""}
domain=domain.split(':')[0];return domain.toLowerCase()}
window.onload=function(){if(typeof oxu_url==='undefined'){return}
if(typeof oxu_api_token==='undefined'){return}
var advert_type=1;if(typeof oxu_advert!=='undefined'){if(oxu_advert==2){advert_type=2}
if(oxu_advert==0){advert_type=0}}
var anchors=document.getElementsByTagName("a");if(typeof oxu_domains!=='undefined'){for(var i=0;i<anchors.length;i++){var hostname=oxu_get_host_name(anchors[i].getAttribute("href"));if(hostname.length>0&&oxu_domains.indexOf(hostname)>-1){anchors[i].href=oxu_url+"st/?api="+encodeURIComponent(oxu_api_token)+"&url="+encodeURIComponent(anchors[i].href)+"&type="+encodeURIComponent(advert_type)}else{if(anchors[i].protocol==="magnet:"){anchors[i].href=oxu_url+"st/?api="+encodeURIComponent(oxu_api_token)+"&url="+encodeURIComponent(anchors[i].href)+"&type="+encodeURIComponent(advert_type)}}}
return}
if(typeof oxu_exclude_domains!=='undefined'){for(var i=0;i<anchors.length;i++){var hostname=oxu_get_host_name(anchors[i].getAttribute("href"));if(hostname.length>0&&oxu_exclude_domains.indexOf(hostname)===-1){anchors[i].href=oxu_url+"st/?api="+encodeURIComponent(oxu_api_token)+"&url="+encodeURIComponent(anchors[i].href)+"&type="+encodeURIComponent(advert_type)}else{if(anchors[i].protocol==="magnet:"){anchors[i].href=oxu_url+"st/?api="+encodeURIComponent(oxu_api_token)+"&url="+encodeURIComponent(anchors[i].href)+"&type="+encodeURIComponent(advert_type)}}}
return}}