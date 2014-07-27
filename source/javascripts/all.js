//= require "jquery/jquery"
//= require "jquery-migrate/jquery-migrate"
//= require "jquery-hoverIntent/jquery.hoverIntent"
//= require "jquery/jquery.event.drag-2.2.js"
//= require "jquery-jsonp/src/jquery.jsonp"
//= require "bootstrap/js/transition.js"
//= require "bootstrap/js/alert.js"
//= require "bootstrap/js/button.js"
//= require "bootstrap/js/carousel.js"
//= require "bootstrap/js/collapse.js"
//= require "bootstrap/js/dropdown.js"
//= require "bootstrap/js/modal.js"
//= require "bootstrap/js/scrollspy.js"
//= require "bootstrap/js/tab.js"
//= require "bootstrap/js/tooltip.js"
//= require "bootstrap/js/popover.js"
//= require "bootstrap/js/affix.js"
//= require "slickgrid/slick.core.js"
//= require "slick.snacmodel.js"
//= require "slickgrid/slick.grid.js"
//= require "store.js/store.js"
//= require "enquire/dist/enquire"
//= require "jquery.mobilemenu/jquery.mobilemenu.js"
//= require "typeahead.js/dist/typeahead.bundle.js"
//  require "list.js/dist/list.js"
//= require "qtip2/jquery.qtip.js"

  // swap SNAC logos on bigger screens
  var swapImages = function() {
    function swapNodes(a, b) { // http://stackoverflow.com/a/698440/1763984
      var aparent= a.parentNode;
      var asibling= a.nextSibling===b? a : a.nextSibling;
      b.parentNode.insertBefore(a, b);
      aparent.insertBefore(b, asibling);
    }
    var left = $("#snacnav-logo-left")[0];
    var right = $("#snacnav-logo-right")[0];
    swapNodes(left, right);
  };

$(document).ready(function() {
  // advanced search
  $("label.advancedSearch").hide();
  $("#search_by form").hoverIntent(function () {
    $("label.advancedSearch").css("display", "inline");
  }, function () {
    if ($("label.advancedSearch select").val() === 'cpfdescription') {
      $("label.advancedSearch").fadeOut();
    }
  });

  // off canvas
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

  enquire.register("screen and (min-width: 400px)", {
    match : function() {
      swapImages();
    },
    unmatch : function() {
      swapImages();
    }
  });
  // responsive select
  $('div.filternav ul').mobileMenu({
    "prependTo": $('div.filternav span'),
    "topOptionText" : false,
    "combine" : false
  });

  // qtip2
  $('a.qt-trigger').each(function(){
    $(this).qtip({
      content: $(this).next('.sr-only').html(),
      hide: { fixed: true, delay: 300 },
      position: {
        my: 'bottom center',
        at: 'top center'
      }
    });
  });

  // google event tracking
  // based on https://support.google.com/analytics/answer/1136920?hl=en
  if ('ga' in window){

    // track outbound links
    $("a[href^='http://']").click(function () {
      var url = $(this).attr('href')
      ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
        function () {
          document.location = url;
        }
      });
      return false;
    });

    // track XML views
    $("a[title='raw XML']").click(function () {
      var url = $(this).attr('href')
      ga('send', 'event', 'xml', 'click', url, {'hitCallback':
        function () {
          document.location = url;
        }
      });
      return false;
    });
  }
});
