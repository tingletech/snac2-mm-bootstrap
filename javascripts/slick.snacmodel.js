!function(e){function t(t){function a(){}function n(e,t){for(var a=e;t>=a;a++)if(void 0==h[a]||null==h[a])return!1;return!0}function o(){for(var e in h)delete h[e];h.length=0}function r(a,n){if(v){v.abort();for(var o=v.fromPage;o<=v.toPage;o++)h[o*u]=void 0}0>a&&(a=0),h.length>0&&(n=Math.min(n,h.length-1));for(var r=Math.floor(a/u),d=Math.floor(n/u);void 0!==h[r*u]&&d>r;)r++;for(;void 0!==h[d*u]&&d>r;)d--;if(r>d||r==d&&void 0!==h[r*u+1])return y.notify({from:a,to:n}),void 0;var s,c=t.url||document.URL;s=~c.indexOf("?")?"&":"?";var g;g="#"==c.charAt(c.length-1)?c.substring(0,c.length-1):c;var b=g+s+"rmode=slickgrid&startDoc="+(r*u+1);null!=p&&(b=b+"&sortGroupsBy="+p),null!=f&&clearTimeout(f),f=setTimeout(function(){for(var t=r;d>=t;t++)h[t*u]=null;m.notify({from:a,to:n}),v=e.jsonp({url:b,callbackParameter:"callback",cache:!0,success:l,error:function(){i(r,d)}}),v.fromPage=r,v.toPage=d},50)}function i(e,t){alert("error loading pages "+e+" to "+t)}function l(e){var t=e.objset_start-1,a=t+e.results.length;h.length=parseInt(e.objset_total);for(var n=0;n<e.results.length;n++){var o=e.results[n].item;h[t+n]=o,h[t+n].index=t+n}v=null,y.notify({from:t,to:a})}function d(e,t){for(var a=e;t>=a;a++)delete h[a];r(e,t)}function s(e){p=e,g=1,o()}function c(){o()}var u=25,h={length:0},p=null,g=1,f=null,v=null,m=new Slick.Event,y=new Slick.Event;return a(),{data:h,clear:o,isDataLoaded:n,ensureData:r,reloadData:d,setSort:s,setSearch:c,onDataLoading:m,onDataLoaded:y}}e.extend(!0,window,{Slick:{Data:{RemoteModel:t}}})}(jQuery);