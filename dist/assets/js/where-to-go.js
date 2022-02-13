$(document).ready(function () {
  $('.bg-img').each(function () {
    var imgSrc = $(this).children('img').attr('src');
    $(this)
      .parent()
      .css({
        'background-image': 'url(' + imgSrc + ')',
        'background-repeat': 'no-repeat',
        'background-position': 'center bottom',
      });
    $(this).parent().addClass('bg-img');
    $(this).remove();
  });
});
