//= require "jquery/jquery"
//= require "jquery/jquery-migrate"
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
//= require "slickgrid/slick.grid.js"
//= require "slick.snacmodel.js"

  $("label.advancedSearch").hide();
  $("form.cpfSearch").hoverIntent(function () {
    $("label.advancedSearch").css("display", "inline");
  }, function () {
    if ($("label.advancedSearch select").val() === 'cpfdescription') {
      $("label.advancedSearch").fadeOut();
    }
  });
