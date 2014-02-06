!function(e){function t(){var e=!1,t=!1;this.stopPropagation=function(){e=!0},this.isPropagationStopped=function(){return e},this.stopImmediatePropagation=function(){t=!0},this.isImmediatePropagationStopped=function(){return t}}function o(){var e=[];this.subscribe=function(t){e.push(t)},this.unsubscribe=function(t){for(var o=e.length-1;o>=0;o--)e[o]===t&&e.splice(o,1)},this.notify=function(o,l,n){l=l||new t,n=n||this;for(var i,r=0;r<e.length&&!l.isPropagationStopped()&&!l.isImmediatePropagationStopped();r++)i=e[r].call(n,l,o);return i}}function l(){var e=[];this.subscribe=function(t,o){return e.push({event:t,handler:o}),t.subscribe(o),this},this.unsubscribe=function(t,o){for(var l=e.length;l--;)if(e[l].event===t&&e[l].handler===o)return e.splice(l,1),t.unsubscribe(o),void 0;return this},this.unsubscribeAll=function(){for(var t=e.length;t--;)e[t].event.unsubscribe(e[t].handler);return e=[],this}}function n(e,t,o,l){void 0===o&&void 0===l&&(o=e,l=t),this.fromRow=Math.min(e,o),this.fromCell=Math.min(t,l),this.toRow=Math.max(e,o),this.toCell=Math.max(t,l),this.isSingleRow=function(){return this.fromRow==this.toRow},this.isSingleCell=function(){return this.fromRow==this.toRow&&this.fromCell==this.toCell},this.contains=function(e,t){return e>=this.fromRow&&e<=this.toRow&&t>=this.fromCell&&t<=this.toCell},this.toString=function(){return this.isSingleCell()?"("+this.fromRow+":"+this.fromCell+")":"("+this.fromRow+":"+this.fromCell+" - "+this.toRow+":"+this.toCell+")"}}function i(){this.__nonDataRow=!0}function r(){this.__group=!0,this.__updated=!1,this.count=0,this.value=null,this.title=null,this.collapsed=!1,this.totals=null}function s(){this.__groupTotals=!0,this.group=null}function a(){var e=null;this.isActive=function(t){return t?e===t:null!==e},this.activate=function(t){if(t!==e){if(null!==e)throw"SlickGrid.EditorLock.activate: an editController is still active, can't activate another editController";if(!t.commitCurrentEdit)throw"SlickGrid.EditorLock.activate: editController must implement .commitCurrentEdit()";if(!t.cancelCurrentEdit)throw"SlickGrid.EditorLock.activate: editController must implement .cancelCurrentEdit()";e=t}},this.deactivate=function(t){if(e!==t)throw"SlickGrid.EditorLock.deactivate: specified editController is not the currently active one";e=null},this.commitCurrentEdit=function(){return e?e.commitCurrentEdit():!0},this.cancelCurrentEdit=function(){return e?e.cancelCurrentEdit():!0}}e.extend(!0,window,{Slick:{Event:o,EventData:t,EventHandler:l,Range:n,NonDataRow:i,Group:r,GroupTotals:s,EditorLock:a,GlobalEditorLock:new a}}),r.prototype=new i,r.prototype.equals=function(e){return this.value===e.value&&this.count===e.count&&this.collapsed===e.collapsed},s.prototype=new i}(jQuery);