$(function () { 

  // this hide the advanced search
  // 
  $("label.advancedSearch").hide();
  $("form.cpfSearch").hoverIntent(function () {
    $("label.advancedSearch").css("display", "inline");
  }, function () {
    if ($("label.advancedSearch select").val() === 'cpfdescription') {
      $("label.advancedSearch").fadeOut();
    }
  });

  //scroll lock via http://stackoverflow.com/a/3656618/1763984 and http://stackoverflow.com/a/10803068/1763984
  var disableScroll = false; // for touch

  function disableScrolling() {
    disableScroll = true;
    // lock scroll position, but retain settings for later http://stackoverflow.com/a/3656618/1763984
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

  function enableScrolling() {
    disableScroll = false;
    // un-lock scroll position
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
  }

  document.ontouchmove = function(e){
    if(disableScroll){
      e.preventDefault();
    }
  }


  // slick grid
  // 
  var thisGrid = $("[data-snac-grid]");
  if (thisGrid.length) {
    // XTF remote data model
    var loader = new Slick.Data.RemoteModel(thisGrid.first().data('snac-grid'));

    // formater functions
    //
    var storyTitleFormatter = function (row, cell, value, columnDef, dataContext) {
      s ="<a href='" + dataContext["path"].replace('default:', '/xtf/view?docId=') + "'>" +
              dataContext["identity"] + "</a>";
      return s;
    };

    var browseFormatter = function (row, cell, value, columnDef, dataContext) {
      s = '';
      if (dataContext['selected']) {
        s = "<b>" + dataContext['value'] + "</b>"; 
      } else {
        s = "<a href='" + dataContext['selectLink'] + "'>" + 
                dataContext['value'] + "</a>";
      }
      return s;
    };

    var entityTypeFormatter = function (row, cell, value, columnDef, dataContext) {
      var type = dataContext['facet-entityType'];
      if (type == 'person') {
          return '&#x1F466'; // 👦' 1F466
      } else if (type == 'corporateBody') {
          return '&#x1F3E2;' // 🏢' 1F3E2
      } else if (type == 'family') {
          return '&#x1F46A;' // 👪' 1F46A
      }
    }

    var check = function () {
      if (Math.floor(Math.random()*2)) {
          return '✓';
      }
    }
  
    var number = function () {
      var rnd = ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
      return parseInt(Math.max(0, rnd * 100));  
    }
  
    var index1 = function (row, cell, value, columnDef, dataContext) {
      s = dataContext['index'] + 1;
      return s;
    };
  
    /* var dateFormatter = function (row, cell, value, columnDef, dataContext) {
      return (value.getMonth()+1) + "/" + value.getDate() + "/" + value.getFullYear();
    }; */

    var columns = [
      // {id: "num", name: "#", formatter: index1, width: 50},
      {id: "identity", name: "Results", width: 300, formatter: storyTitleFormatter},
      {id: "facet-entityType", name: "type", formatter: entityTypeFormatter, width: 100},
      // {id: "fromDate", name: "from", field:"fromDate" , width: 100},
      // {id: "toDate", name: "to", field:"toDate", width: 100},
      {id: "facet-recordLevel", name: "hasBioghist", formatter: check, width: 100},
      {id: "facet-recordLevel", name: "Wikipedia", formatter: check, width: 100},
      {id: "facet-recordLevel", name: "Collections", formatter: number, width: 100}
    ];

    var options = {
      // rowHeight: 64,
      editable: false,
      enableAddRow: false,
      enableColumnReorder: false,
      forceFitColumns: true,
      enableCellNavigation: true
    };

    var loadingIndicator = null;

    grid = new Slick.Grid("[data-snac-grid]", loader.data, columns, options);

    grid.onViewportChanged.subscribe(function (e, args) {
      var vp = grid.getViewport();
      loader.ensureData(vp.top, vp.bottom);
    });

    grid.onSort.subscribe(function (e, args) {
      loader.setSort(args.sortCol.field, args.sortAsc ? 1 : -1);
      var vp = grid.getViewport();
      loader.ensureData(vp.top, vp.bottom);
    });

    loader.onDataLoading.subscribe(function () {
      if (!loadingIndicator) {
        loadingIndicator = $("<span class='loading-indicator'><label>Buffering...</label></span>").appendTo(document.body);
        var $g = thisGrid;

        loadingIndicator
            .css("position", "absolute")
            .css("top", $g.position().top + $g.height() / 2 - loadingIndicator.height() / 2)
            .css("left", $g.position().left + $g.width() / 2 - loadingIndicator.width() / 2);
      }

      loadingIndicator.show();
    });

    loader.onDataLoaded.subscribe(function (e, args) {
      for (var i = args.from; i <= args.to; i++) {
        grid.invalidateRow(i);
      }

      grid.updateRowCount();
      grid.render();

      loadingIndicator.fadeOut();
    });

    // loader.setSearch($("#txtSearch").val());
    loader.setSort("totalDocs", 1);
    // grid.setSortColumn("value", false);

    // load the first page
    grid.onViewportChanged.notify();

  }  // end SlickGrid
});
