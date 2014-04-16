// http://stackoverflow.com/questions/899812/best-practices-for-writing-javascript-widgets
(function() {
    // search in page
/*
    var monkeyList = new List('identity', { 
        valueNames: ['name'], 
        plugins: [ ListFuzzySearch() ] 
    });
 */   

$(function() {
  values = {};
  $('span.Location').each(function(index, value){
    text = $(value).text();
    if (text in values) {
      values[text]++;
    } else {
      values[text]=1;
    }
  });

  var locations = [];
  for (var key in values) {
    if (values.hasOwnProperty(key)) {
      locations.push({ "location": key, "count": values[key] });
    }
  }

  var options = {
    valueNames: [ 'location', 'count' ],
    item: '<li><span class="location"></span> (<span class="count"></span>)</li>'
  };

  var locationList = new List('location_list', options, locations);
  var relatecCollections = new List('creatorOf', {valueNames: [ 'Collection', 'Location' ]});
});



    // stars and local storage
    $(function() {
        if (store.enabled && 1==2) {
            var state1 = "add to list";
            var state2 = "remove from list";
            // Will be true if bootstrap 3 is loaded, false if bootstrap 2 or no bootstrap
            // http://stackoverflow.com/a/14768682/1763984
            // var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
            var updateTitle = function(element, newTitle) {
                $(element).attr('title', newTitle) // http://stackoverflow.com/a/20713610/1763984
                    .tooltip('fixTitle')
                    .data('bs.tooltip')
                    .$tip.find('.tooltip-inner')
                    .text(newTitle)
            };
            var key = window.location.pathname;
            key = "localstars." + key;
            var starable = $('h1')[0];
            var fieldset = $('<fieldset class="rating"/>');
            var input = $('<input type="checkbox" id="localstar" name="localstar"/>');
            var label = $('<label for="localstar">★</label>');
            $(label).data('toggle', 'tooltip');
            $(label).data('placement', 'right');
            $(fieldset).append(input);
            $(fieldset).append(label);
            $(starable).append(fieldset);
            if (store.get(key)) {
                $(input).prop('checked', true);
                $(label).attr('title', state2);
            } else {
                $(label).attr('title', state1);
            }
            $(label).tooltip();
            $(input).on('change', function(){
                if($(this).is(':checked') && !store.get(key)){
                    store.set(key, 'True');
                    updateTitle(label, state2);
                } else {
                    store.remove(key);
                    updateTitle(label, state1);
                }
            });
        }
    });
})();
/* # License 

Copyright © 2014, Regents of the University of California
All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, 
  this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, 
  this list of conditions and the following disclaimer in the documentation 
  and/or other materials provided with the distribution.
- Neither the name of the University of California nor the names of its
  contributors may be used to endorse or promote products derived from this 
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE. */
