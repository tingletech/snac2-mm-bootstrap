!function(){$(function(){if(store.enabled){var t="add to list",e="remove from list",a=function(t,e){$(t).attr("title",e).tooltip("fixTitle").data("bs.tooltip").$tip.find(".tooltip-inner").text(e)},r=window.location.pathname;r="localstars."+r;var n=$("h1")[0],o=$('<fieldset class="rating"/>'),i=$('<input type="checkbox" id="localstar" name="localstar"/>'),d=$('<label for="localstar">★</label>');$(d).data("toggle","tooltip"),$(d).data("placement","right"),$(o).append(i),$(o).append(d),$(n).append(o),store.get(r)?($(i).prop("checked",!0),$(d).attr("title",e)):$(d).attr("title",t),$(d).tooltip(),$(i).on("change",function(){$(this).is(":checked")&&!store.get(r)?(store.set(r,"True"),a(d,e)):(store.remove(r),a(d,t))})}})}();