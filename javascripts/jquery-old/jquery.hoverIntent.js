/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 */
!function(e){e.fn.hoverIntent=function(t,n,o){var i={interval:100,sensitivity:7,timeout:0};i="object"==typeof t?e.extend(i,t):e.isFunction(n)?e.extend(i,{over:t,out:n,selector:o}):e.extend(i,{over:t,out:t,selector:n});var r,a,s,l,c=function(e){r=e.pageX,a=e.pageY},u=function(t,n){return n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.abs(s-r)+Math.abs(l-a)<i.sensitivity?(e(n).off("mousemove.hoverIntent",c),n.hoverIntent_s=1,i.over.apply(n,[t])):(s=r,l=a,n.hoverIntent_t=setTimeout(function(){u(t,n)},i.interval),void 0)},d=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=0,i.out.apply(t,[e])},f=function(t){var n=jQuery.extend({},t),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"==t.type?(s=n.pageX,l=n.pageY,e(o).on("mousemove.hoverIntent",c),1!=o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){u(n,o)},i.interval))):(e(o).off("mousemove.hoverIntent",c),1==o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){d(n,o)},i.timeout)))};return this.on({"mouseenter.hoverIntent":f,"mouseleave.hoverIntent":f},i.selector)}}(jQuery);