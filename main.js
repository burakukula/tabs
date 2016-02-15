(function(win, $) {

  'use strict';

  function init() {

    var $currentTab = $('.tab.active');

    updateTiles($currentTab.data('level'));
    toggleTile();


  }

  function toggleTile() {
    $('.tab').on('click', function(e){
      e.preventDefault();
      var $tab = $(this);
      var level = $tab.data('level');

      // update tab state
      $('.tabs .active').removeClass('active');
      $tab.addClass('active')

      updateTiles(level);
    });
  }

  function updateTiles(level) {

    // update tiles state
    $('.tiles .active').removeClass('active');
    $('.tiles').attr('class', 'tiles level-' + level);
    $('.tabs').attr('class', 'tabs level-' + level);

    $('.tiles .tile').each(function(i, item) {

      var $tile = $(item);
      var tileLevels = $tile.data('levels');

      if (tileLevels.indexOf(level) !== -1) {
    	  $tile.addClass('active');
      }

    });
  }

  // bind click event
  $(document).ready(function () {
    init();
  });
}(window, jQuery));
