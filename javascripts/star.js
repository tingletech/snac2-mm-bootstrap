!function(){$(function(){if(store.enabled){var t=window.location.pathname;t="localstars."+t;var e=$("h1")[0],o=$('<fieldset class="rating"/>'),n=$('<input type="checkbox" id="localstar" name="localstar"/>'),r=$('<label for="localstar" title="save to list">★ </label>');$(o).append(n),$(o).append(r),$(e).append(o),store.get(t)&&$(n).prop("checked",!0),$(n).on("change",function(){$(this).is(":checked")&&!store.get(t)?store.set(t,"True"):store.remove(t)})}})}();