/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
+function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function n(){r.trigger("closed.bs.alert").remove()}var o=e(this),i=o.attr("data-target");i||(i=o.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var r=e(i);t&&t.preventDefault(),r.length||(r=o.hasClass("alert")?o:o.parent()),r.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one(e.support.transition.end,n).emulateTransitionEnd(150):n())};var o=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var o=e(this),i=o.data("bs.alert");i||o.data("bs.alert",i=new n(this)),"string"==typeof t&&i[t].call(o)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=o,this},e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(window.jQuery);