$(window).on('load', function() {
  $('.loader').hide();
  $('.main-content').show();
});

$(document).on('click', '#view-more', function(event) {
  event.preventDefault();
  $('.container.more').show();
  $(event.target).text('Hide Courses');
});
