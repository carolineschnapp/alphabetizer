/*
 * Alpha (for jQuery)
 * version: 1.0 (24/05/2011)
 * @requires any version of jQuery
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2011 Caroline Hill [ mllegeorgesand@gmail.com ]
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('#my-list').alpha();
 *  });
 *
 *  The above will sort all the children of #my-list alphabetically.
 *
 *  What is returned is the sorted element.
 *
 */

(function( $ ){
  $.fn.alpha = function() {
    return this.each(function() {
      
      var $this = $(this);
      
      var items = $this.children().get();
      if (items.length <= 1) {
        return;
      }
      
      items.sort(function(a, b) {
         var compA = $(a).text().toLowerCase();
         var compB = $(b).text().toLowerCase();
         return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
      });
      
      for (var i=0; i<items.length; i++) {
        $this.append(items[i]);
      }
      
    });
  };
})( jQuery );