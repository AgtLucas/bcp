jQuery(function() {

  var isVisible = false;
  var clickedAway = false;

  $('.btn').popover().click(function(e) {
    $(this).popover('show');

    $('.closeb').click(function(e) {
      $('.btn').popover('hide');
    });

    e.preventDefault();

    $('.foo').click(function(e) {
      alert('Yayow');
    });
  });

  $(document).click(function(e) {
    if ( isVisible & clickedAway ) {
      $('.btn').popover('hide');
      isVisible = clickedAway = false;
    } else {
      clickedAway = true;
    }
  });
});
