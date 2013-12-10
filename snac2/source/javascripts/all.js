//= require "jquery/jquery"
//= require "jquery/jquery-migrate-1.2.1.min"
//= require "jquery/jquery.hoverIntent"
//= require "jquery/jquery.event.drag-2.2"
//= require "jquery/jquery.jsonp-2.4.min"
//= require "bootstrap/transition.js"
//= require "bootstrap/alert.js"
//= require "bootstrap/button.js"
//= require "bootstrap/carousel.js"
//= require "bootstrap/collapse.js"
//= require "bootstrap/dropdown.js"
//= require "bootstrap/modal.js"
//= require "bootstrap/scrollspy.js"
//= require "bootstrap/tab.js"
//= require "bootstrap/tooltip.js"
//= require "bootstrap/popover.js"
//= require "bootstrap/affix.js"
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
