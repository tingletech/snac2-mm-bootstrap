!function(){new List("identity",{valueNames:["name"],plugins:[ListFuzzySearch()]}),$(function(){if(store.enabled){var e="add to list",t="remove from list",n=function(e,t){$(e).attr("title",t).tooltip("fixTitle").data("bs.tooltip").$tip.find(".tooltip-inner").text(t)},o=window.location.pathname;o="localstars."+o;var i=$("h1")[0],r=$('<fieldset class="rating"/>'),s=$('<input type="checkbox" id="localstar" name="localstar"/>'),a=$('<label for="localstar">★</label>');$(a).data("toggle","tooltip"),$(a).data("placement","right"),$(r).append(s),$(r).append(a),$(i).append(r),store.get(o)?($(s).prop("checked",!0),$(a).attr("title",t)):$(a).attr("title",e),$(a).tooltip(),$(s).on("change",function(){$(this).is(":checked")&&!store.get(o)?(store.set(o,"True"),n(a,t)):(store.remove(o),n(a,e))})}})}();