$(function(){var e=new Bloodhound({datumTokenizer:function(e){return Bloodhound.tokenizers.whitespace(e.value)},queryTokenizer:Bloodhound.tokenizers.whitespace,local:[{value:"Anthony, Susan B"},{value:"Berkeley Free Church"},{value:"Bernstein, Leonard, 1918-"},{value:"Block, Herbert, 1909-2001"},{value:"Bush, Vannevar, 1890-1974"},{value:"Cha, Theresa Hak Kyung"},{value:"Feynman, Richard Phillips, 1918-1988"},{value:"Fitzgerald, Ella, 1918-1996"},{value:"Frankfurter, Felix, 1882-1965"},{value:"Franklin, Benjamin, 1706-1790"},{value:"Fuller, R. Buckminster (Richard Buckminster), 1895-1983"},{value:"Hamilton, Alexander, 1757-1804"},{value:"Luce, Clare Boothe, 1903-1987"},{value:"Oppenheimer, J. Robert, 1904-1967"},{value:"Patton family"},{value:"Patton, George S. (George Smith), 1885-1945"},{value:"Sontag, Susan, 1933-2004"},{value:"Washington, George, 1732-1799"},{value:"Whitman, Walt, 1819-1892"},{value:"Wright, Lloyd, 1890-1978"},{value:"Yamada, Mitsuye"}],remote:{url:"http://socialarchive.iath.virginia.edu/xtf/search?autocomplete=yes;term=%QUERY",ajax:{dataType:"jsonp"},filter:function(e){return $.map(e,function(e){return{value:e}})}}});e.initialize(),$("#userInput").typeahead({minLength:3,highlight:!0},{source:e.ttAdapter()}),$(".alphascroll a, .alphascroll li").tooltip(),$("label.advancedSearch").hide(),$("form.cpfSearch").hoverIntent(function(){$("label.advancedSearch").css("display","inline")},function(){"cpfdescription"===$("label.advancedSearch select").val()&&$("label.advancedSearch").fadeOut()});var t=!1;document.ontouchmove=function(e){t&&e.preventDefault()};var n=$("[data-snac-grid]");if(n.length){var i=new Slick.Data.RemoteModel(n.first().data("snac-grid")),o=function(e,t,n,i,o){return s="★ <a href='"+o.path.replace("default:","/xtf/view?docId=")+"'>"+o.identity+"</a>"},r=function(e,t,n,i,o){var r=o["facet-entityType"],a="";return"person"==r?a+="&#x1F466; ":"corporateBody"==r?a+="&#x1F3E2; ":"family"==r&&(a+="&#x1F46A; "),"hasBiogHist"==o["facet-recordLevel"]&&(a+="&#x24B7; "),o["facet-Wikipedia"]&&(a+="&#x24CC; "),a},a=function(e,t,n,i,o){return out=o["count-ArchivalResource"].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},l=[{id:"identity",name:"Results",formatter:o,minWidth:400},{id:"icons",name:"",formatter:r,width:100,maxWidth:150},{id:"icons",name:"related collections",formatter:a,width:100,maxWidth:150}],c={editable:!0,enableAddRow:!1,enableColumnReorder:!1,forceFitColumns:!0,enableCellNavigation:!0},u=null;grid=new Slick.Grid("[data-snac-grid]",i.data,l,c),$(window).resize(function(){grid.resizeCanvas()}),grid.onViewportChanged.subscribe(function(){var e=grid.getViewport();i.ensureData(e.top,e.bottom)}),grid.onSort.subscribe(function(e,t){i.setSort(t.sortCol.field,t.sortAsc?1:-1);var n=grid.getViewport();i.ensureData(n.top,n.bottom)}),i.onDataLoading.subscribe(function(){if(!u){u=$("<span class='loading-indicator'><label>Buffering...</label></span>").appendTo(document.body);var e=n;u.css("position","absolute").css("top",e.position().top+e.height()/2-u.height()/2).css("left",e.position().left+e.width()/2-u.width()/2)}u.show()}),i.onDataLoaded.subscribe(function(e,t){for(var n=t.from;n<=t.to;n++)grid.invalidateRow(n);grid.updateRowCount(),grid.render(),u.fadeOut()}),i.setSort("totalDocs",1),grid.onViewportChanged.notify()}});