!function(e,t){function a(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function n(e){var t=p[e[h]];return t||(t={},f++,e[h]=f,p[f]=t),t}function r(e,a,r){return a||(a=t),c?a.createElement(e):(r||(r=n(a)),a=r.cache[e]?r.cache[e].cloneNode():u.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),a.canHaveChildren&&!d.test(e)?r.frag.appendChild(a):a)}function o(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(a){return g.shivMethods?r(a,e,t):t.createElem(a)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function i(e){e||(e=t);var a=n(e);if(g.shivCSS&&!l&&!a.hasCSS){var r,i=e;r=i.createElement("p"),i=i.getElementsByTagName("head")[0]||i.documentElement,r.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",r=i.insertBefore(r.lastChild,i.firstChild),a.hasCSS=!!r}return c||o(e,a),e}var l,c,s=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",f=0,p={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e;var a;if(!(a=1==e.childNodes.length)){t.createElement("a");var n=t.createDocumentFragment();a="undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}c=a}catch(r){c=l=!0}}();var g={elements:s.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==s.shivCSS,supportsUnknownElements:c,shivMethods:!1!==s.shivMethods,type:"default",shivDocument:i,createElement:r,createDocumentFragment:function(e,r){if(e||(e=t),c)return e.createDocumentFragment();for(var r=r||n(e),o=r.frag.cloneNode(),i=0,l=a(),s=l.length;s>i;i++)o.createElement(l[i]);return o}};e.html5=g,i(t)}(this,document);