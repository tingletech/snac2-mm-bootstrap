!function(t){function e(){var t=!1,e=!1;this.stopPropagation=function(){t=!0},this.isPropagationStopped=function(){return t},this.stopImmediatePropagation=function(){e=!0},this.isImmediatePropagationStopped=function(){return e}}function a(){var t=[];this.subscribe=function(e){t.push(e)},this.unsubscribe=function(e){for(var a=t.length-1;a>=0;a--)t[a]===e&&t.splice(a,1)},this.notify=function(a,i,n){i=i||new e,n=n||this;for(var o,r=0;r<t.length&&!i.isPropagationStopped()&&!i.isImmediatePropagationStopped();r++)o=t[r].call(n,i,a);return o}}function i(){var t=[];this.subscribe=function(e,a){return t.push({event:e,handler:a}),e.subscribe(a),this},this.unsubscribe=function(e,a){for(var i=t.length;i--;)if(t[i].event===e&&t[i].handler===a)return t.splice(i,1),e.unsubscribe(a),void 0;return this},this.unsubscribeAll=function(){for(var e=t.length;e--;)t[e].event.unsubscribe(t[e].handler);return t=[],this}}function n(t,e,a,i){void 0===a&&void 0===i&&(a=t,i=e),this.fromRow=Math.min(t,a),this.fromCell=Math.min(e,i),this.toRow=Math.max(t,a),this.toCell=Math.max(e,i),this.isSingleRow=function(){return this.fromRow==this.toRow},this.isSingleCell=function(){return this.fromRow==this.toRow&&this.fromCell==this.toCell},this.contains=function(t,e){return t>=this.fromRow&&t<=this.toRow&&e>=this.fromCell&&e<=this.toCell},this.toString=function(){return this.isSingleCell()?"("+this.fromRow+":"+this.fromCell+")":"("+this.fromRow+":"+this.fromCell+" - "+this.toRow+":"+this.toCell+")"}}function o(){this.__nonDataRow=!0}function r(){this.__group=!0,this.__updated=!1,this.count=0,this.value=null,this.title=null,this.collapsed=!1,this.totals=null}function s(){this.__groupTotals=!0,this.group=null}function c(){var t=null;this.isActive=function(e){return e?t===e:null!==t},this.activate=function(e){if(e!==t){if(null!==t)throw"SlickGrid.EditorLock.activate: an editController is still active, can't activate another editController";if(!e.commitCurrentEdit)throw"SlickGrid.EditorLock.activate: editController must implement .commitCurrentEdit()";if(!e.cancelCurrentEdit)throw"SlickGrid.EditorLock.activate: editController must implement .cancelCurrentEdit()";t=e}},this.deactivate=function(e){if(t!==e)throw"SlickGrid.EditorLock.deactivate: specified editController is not the currently active one";t=null},this.commitCurrentEdit=function(){return t?t.commitCurrentEdit():!0},this.cancelCurrentEdit=function(){return t?t.cancelCurrentEdit():!0}}t.extend(!0,window,{Slick:{Event:a,EventData:e,EventHandler:i,Range:n,NonDataRow:o,Group:r,GroupTotals:s,EditorLock:c,GlobalEditorLock:new c}}),r.prototype=new o,r.prototype.equals=function(t){return this.value===t.value&&this.count===t.count&&this.collapsed===t.collapsed},s.prototype=new o}(jQuery);