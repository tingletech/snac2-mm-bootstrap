$(function () { 

  // stars
  if (store.enabled) {
  }

  // example from http://stackoverflow.com/a/21533204/1763984
  // instantiate the bloodhound suggestion engine
  var engine = new Bloodhound({
      datumTokenizer: function (d) {
          return Bloodhound.tokenizers.whitespace(d.value);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: [
        { value: 'Anthony, Susan B'},
        { value: 'Berkeley Free Church'},
        { value: 'Bernstein, Leonard, 1918-'},
        { value: 'Block, Herbert, 1909-2001'},
        { value: 'Bush, Vannevar, 1890-1974'},
        { value: 'Cha, Theresa Hak Kyung'},
        { value: 'Feynman, Richard Phillips, 1918-1988'},
        { value: 'Fitzgerald, Ella, 1918-1996'},
        { value: 'Frankfurter, Felix, 1882-1965'},
        { value: 'Franklin, Benjamin, 1706-1790'},
        { value: 'Fuller, R. Buckminster (Richard Buckminster), 1895-1983'},
        { value: 'Hamilton, Alexander, 1757-1804'},
        { value: 'Luce, Clare Boothe, 1903-1987'},
        { value: 'Oppenheimer, J. Robert, 1904-1967'},
        { value: 'Patton family'},
        { value: 'Patton, George S. (George Smith), 1885-1945'},
        { value: 'Sontag, Susan, 1933-2004'},
        { value: 'Washington, George, 1732-1799'},
        { value: 'Whitman, Walt, 1819-1892'},
        { value: 'Wright, Lloyd, 1890-1978'},
        { value: 'Yamada, Mitsuye'}
      ],
      remote: {
          url: 'http://socialarchive.iath.virginia.edu/xtf/search?autocomplete=yes;term=%QUERY',
          ajax: { dataType: 'jsonp' },
          filter: function (identities) {
              return $.map(identities, function (identity) {
                  return {
                      value: identity
                  };
              });
          }
      }
  });

  // initialize the bloodhound suggestion engine
  engine.initialize();

  // instantiate the typeahead UI
  $('#userInput').typeahead({
      minLength: 3,
      highlight: true,
  },{
      source: engine.ttAdapter()
  });

  $(".alphascroll a, .alphascroll li").tooltip();

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


  // slick grid slickgrid
  // 

  var thisGrid = $("[data-snac-grid]");
  if (thisGrid.length) {
    // XTF remote data model
    var loader = new Slick.Data.RemoteModel(thisGrid.first().data('snac-grid'));

    // formater functions
    //

    var star = '';
    var starCheck = function () {};
    if (store.enabled && false ) {
        star = '<span class="rating"><input type="checkbox"><label>★</label></input></span>';
        // async post render 
        starCheck = function (cellNode, row, dataContext, colDef) {
            // check localstorage to see if this should be checked
            console.log($(cellNode).find('.rating')[0]);
            console.log($(cellNode).find('a').attr('href'));
        }
    }

    var storyTitleFormatter = function (row, cell, value, columnDef, dataContext) {
      s = star + "<a href='" + dataContext["path"].replace('default:', '/xtf/view?docId=') + "'>" +
              dataContext["identity"] + "</a>";
      return s;
    };

    var iconsFormatter = function (row, cell, value, columnDef, dataContext) {
      var type = dataContext['facet-entityType'];
      var out = "";
      if (type == 'person') {
          out = out +  '<span class="icon-ind"></span>';
      } else if (type == 'corporateBody') {
          out = out +  '<span class="icon-org"></span>'
      } else if (type == 'family') {
          out = out + '<span class="icon-fam"></span>'
      }
      if (dataContext['facet-recordLevel'] == 'hasBiogHist') {
          out = out +  '<i class="icon-B"></i>' // Ⓑ 24B7
      }
      if (dataContext['facet-Wikipedia']) {
          out = out +  '<i class="icon-W"></i>' // Ⓦ 24CC 
      }
      return out;
    }

    var collectionCount = function (row, cell, value, columnDef, dataContext) {
      out = dataContext['count-ArchivalResource']
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return out + "&#160;&#160;";
    }
 
    var columns = [
      { id: "icons", name: "Record types", formatter: iconsFormatter, width: 100, maxWidth: 150,
        cssClass: "right"
      },
      { id: "identity", name: "Results", minWidth: 400, sortable: true,
        formatter: storyTitleFormatter, asyncPostRender: starCheck 
      },
      { id: "collections", name: "Related Collections", width: 100, maxWidth: 150,
        formatter: collectionCount, sortable: true, cssClass: "right"
      }
    ];

    var options = {
      editable: true,
      enableAddRow: false,
      enableColumnReorder: false,
      forceFitColumns: true,
      enableCellNavigation: true,
      enableAsyncPostRender: true
    };

    var loadingIndicator = null;

    grid = new Slick.Grid("[data-snac-grid]", loader.data, columns, options);

    $( window ).resize(function() {
      grid.resizeCanvas();
    });

    grid.onViewportChanged.subscribe(function (e, args) {
      var vp = grid.getViewport();
      loader.ensureData(vp.top, vp.bottom);
    });

    grid.onSort.subscribe(function (e, args) {
      loader.setSort(args.sortCol.field, args.sortAsc ? 1 : -1);
      var vp = grid.getViewport();
      loader.ensureData(vp.top, vp.bottom);
    });

    grid.onClick.subscribe(function (e, args) {
        // turns stars on and off and do stuff with local storage
        console.log(e, args);
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
    // loader.setSort("collections", 1);
    grid.setSortColumn("identity", true);

    // load the first page
    grid.onViewportChanged.notify();

  }  // end SlickGrid
});

window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!!t.document.createElementNS&&!!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),A=function(A){var o=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e[A&&n?0:A?1:2],r.parentNode.insertBefore(o,r)},o=new t.Image;o.onerror=function(){A(!1)},o.onload=function(){A(1===o.width&&1===o.height)},o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
grunticon( [ "http://bioghist.s3-website-us-east-1.amazonaws.com/stylesheets/grunticon/icons.data.svg.css", "http://bioghist.s3-website-us-east-1.amazonaws.com/stylesheets/grunticon/icons.data.png.css", "http://bioghist.s3-website-us-east-1.amazonaws.com/stylesheets/grunticon/icons.fallback.css" ] );
