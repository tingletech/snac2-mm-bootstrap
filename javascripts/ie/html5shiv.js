!function(e,t){function a(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function n(e){var t=u[e[h]];return t||(t={},s++,e[h]=s,u[s]=t),t}function r(e,a,r){return a||(a=t),l?a.createElement(e):(r||(r=n(a)),a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),a.canHaveChildren&&!f.test(e)?r.frag.appendChild(a):a)}function i(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(a){return v.shivMethods?r(a,e,t):t.createElem(a)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var a=n(e);if(v.shivCSS&&!o&&!a.hasCSS){var r,c=e;r=c.createElement("p"),c=c.getElementsByTagName("head")[0]||c.documentElement,r.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",r=c.insertBefore(r.lastChild,c.firstChild),a.hasCSS=!!r}return l||i(e,a),e}var o,l,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",s=0,u={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e;var a;if(!(a=1==e.childNodes.length)){t.createElement("a");var n=t.createDocumentFragment();a="undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}l=a}catch(r){l=o=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==d.shivCSS,supportsUnknownElements:l,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:c,createElement:r,createDocumentFragment:function(e,r){if(e||(e=t),l)return e.createDocumentFragment();for(var r=r||n(e),i=r.frag.cloneNode(),c=0,o=a(),d=o.length;d>c;c++)i.createElement(o[c]);return i}};e.html5=v,c(t)}(this,document);