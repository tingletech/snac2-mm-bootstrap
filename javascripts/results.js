$(function(){$(".alphascroll a, .alphascroll li").tooltip(),$("label.advancedSearch").hide(),$("form.cpfSearch").hoverIntent(function(){$("label.advancedSearch").css("display","inline")},function(){"cpfdescription"===$("label.advancedSearch select").val()&&$("label.advancedSearch").fadeOut()});var e=!1;document.ontouchmove=function(t){e&&t.preventDefault()};var t=$("[data-snac-grid]");if(t.length){var n=new Slick.Data.RemoteModel(t.first().data("snac-grid")),o=function(e,t,n,o,i){return s="★ <a href='"+i.path.replace("default:","/xtf/view?docId=")+"'>"+i.identity+"</a>"},i=function(e,t,n,o,i){var r=i["facet-entityType"],a="";return"person"==r?a+="&#x1F466; ":"corporateBody"==r?a+="&#x1F3E2; ":"family"==r&&(a+="&#x1F46A; "),"hasBiogHist"==i["facet-recordLevel"]&&(a+="&#x24B7; "),i["facet-Wikipedia"]&&(a+="&#x24CC; "),a+=i["count-ArchivalResource"].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},r=[{id:"identity",name:"Results",formatter:o,minWidth:300},{id:"icons",name:"",formatter:i,width:100,maxWidth:300}],a={editable:!0,enableAddRow:!1,enableColumnReorder:!1,forceFitColumns:!0,enableCellNavigation:!0},l=null;grid=new Slick.Grid("[data-snac-grid]",n.data,r,a),$(window).resize(function(){grid.resizeCanvas()}),grid.onViewportChanged.subscribe(function(){var e=grid.getViewport();n.ensureData(e.top,e.bottom)}),grid.onSort.subscribe(function(e,t){n.setSort(t.sortCol.field,t.sortAsc?1:-1);var o=grid.getViewport();n.ensureData(o.top,o.bottom)}),n.onDataLoading.subscribe(function(){if(!l){l=$("<span class='loading-indicator'><label>Buffering...</label></span>").appendTo(document.body);var e=t;l.css("position","absolute").css("top",e.position().top+e.height()/2-l.height()/2).css("left",e.position().left+e.width()/2-l.width()/2)}l.show()}),n.onDataLoaded.subscribe(function(e,t){for(var n=t.from;n<=t.to;n++)grid.invalidateRow(n);grid.updateRowCount(),grid.render(),l.fadeOut()}),n.setSort("totalDocs",1),grid.onViewportChanged.notify()}});