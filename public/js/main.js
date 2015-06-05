$(function() {
  $('.del').click(function(e) {
    var target = $(e.target);
    var id = target.context.id;
    var div = $('#item_' + id);

    $.ajax({
      type: 'DELETE',
      url: '/todos?id=' + id
    })
    .done(function(results) {
      if (results.success === 1) {
        div.remove();
      }
    });
  });
});