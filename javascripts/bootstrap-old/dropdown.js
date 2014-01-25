/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
+function(e){"use strict";function t(){e(o).remove(),e(i).each(function(t){var o=n(e(this));o.hasClass("open")&&(o.trigger(t=e.Event("hide.bs.dropdown")),t.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown"))})}function n(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var o=n&&e(n);return o&&o.length?o:t.parent()}var o=".dropdown-backdrop",i="[data-toggle=dropdown]",r=function(t){e(t).on("click.bs.dropdown",this.toggle)};r.prototype.toggle=function(o){var i=e(this);if(!i.is(".disabled, :disabled")){var r=n(i),a=r.hasClass("open");if(t(),!a){if("ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",t),r.trigger(o=e.Event("show.bs.dropdown")),o.isDefaultPrevented())return;r.toggleClass("open").trigger("shown.bs.dropdown"),i.focus()}return!1}},r.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var o=e(this);if(t.preventDefault(),t.stopPropagation(),!o.is(".disabled, :disabled")){var r=n(o),a=r.hasClass("open");if(!a||a&&27==t.keyCode)return 27==t.which&&r.find(i).focus(),o.click();var s=e("[role=menu] li:not(.divider):visible a",r);if(s.length){var l=s.index(s.filter(":focus"));38==t.keyCode&&l>0&&l--,40==t.keyCode&&l<s.length-1&&l++,~l||(l=0),s.eq(l).focus()}}}};var a=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),o=n.data("dropdown");o||n.data("dropdown",o=new r(this)),"string"==typeof t&&o[t].call(n)})},e.fn.dropdown.Constructor=r,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",i,r.prototype.toggle).on("keydown.bs.dropdown.data-api",i+", [role=menu]",r.prototype.keydown)}(window.jQuery);