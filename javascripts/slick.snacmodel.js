!function(e){function t(){function t(){}function n(e,t){for(var n=e;t>=n;n++)if(void 0==d[n]||null==d[n])return!1;return!0}function o(){for(var e in d)delete d[e];d.length=0}function r(t,n){if(g){g.abort();for(var o=g.fromPage;o<=g.toPage;o++)d[o*c]=void 0}0>t&&(t=0),d.length>0&&(n=Math.min(n,d.length-1));for(var r=Math.floor(t/c),s=Math.floor(n/c);void 0!==d[r*c]&&s>r;)r++;for(;void 0!==d[s*c]&&s>r;)s--;if(r>s||r==s&&void 0!==d[r*c+1])return v.notify({from:t,to:n}),void 0;var l;l=~document.URL.indexOf("?")?"&":"?";var u;u="#"==document.URL.charAt(document.URL.length-1)?document.URL.substring(0,document.URL.length-1):document.URL;var p=u+l+"rmode=slickgrid&startDoc="+(r*c+1);null!=f&&(p=p+"&sortGroupsBy="+f),null!=h&&clearTimeout(h),h=setTimeout(function(){for(var o=r;s>=o;o++)d[o*c]=null;m.notify({from:t,to:n}),g=e.jsonp({url:p,callbackParameter:"callback",cache:!0,success:a,error:function(){i(r,s)}}),g.fromPage=r,g.toPage=s},50)}function i(e,t){alert("error loading pages "+e+" to "+t)}function a(e){var t=e.objset_start-1,n=t+e.results.length;d.length=parseInt(e.objset_total);for(var o=0;o<e.results.length;o++){var r=e.results[o].item;d[t+o]=r,d[t+o].index=t+o}g=null,v.notify({from:t,to:n})}function s(e,t){for(var n=e;t>=n;n++)delete d[n];r(e,t)}function l(e){f=e,p=1,o()}function u(){o()}var c=25,d={length:0},f=null,p=1,h=null,g=null,m=new Slick.Event,v=new Slick.Event;return t(),{data:d,clear:o,isDataLoaded:n,ensureData:r,reloadData:s,setSort:l,setSearch:u,onDataLoading:m,onDataLoaded:v}}e.extend(!0,window,{Slick:{Data:{RemoteModel:t}}})}(jQuery);