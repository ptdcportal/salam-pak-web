// $(document).ready(function () {
//   for (let i = 0; i < 10; i++) {
//     $('.hotel-slider-' + i).slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: true,
//       fade: false,
//       asNavFor: '.slider-nav-thumbnails-' + i,
//     });

//     $('.slider-nav-thumbnails-' + i).slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       asNavFor: '.hotel-slider-' + i,
//       dots: true,
//       //	centerMode: true,
//       focusOnSelect: true,
//     });

//     //remove active class from all thumbnail slides
//     $('.slider-nav-thumbnails-' + i + ' .slick-slide').removeClass('slick-active');

//     //set active class to first thumbnail slides
//     $('.slider-nav-thumbnails-' + i + ' .slick-slide')
//       .eq(0)
//       .addClass('slick-active');

//     // On before slide change match active thumbnail to current slide
//     $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//       var mySlideNumber = nextSlide;
//       $('.slider-nav-thumbnails-' + i + ' .slick-slide').removeClass('slick-active');
//       $('.slider-nav-thumbnails-' + i + ' .slick-slide')
//         .eq(mySlideNumber)
//         .addClass('slick-active');
//     });
//   }

//   $(document).on('click', '.dropdown-menu label', function (e) {
//     e.stopPropagation();
//   });
// });
// $(document).ready(function () {
//   $('#hotel-tabs').each(function () {
//     var $active,
//       $links = $(this).find('a');

//     // $active = $($links[0]);
//     //$active.addClass('active');

//     $links.not($active).each(function () {
//       $(this.hash).hide();
//     });

//     $(this).on('click', 'a', function (e) {
//       $active && $active.removeClass('active');

//       $active = $(this);

//       $active.addClass('active');

//       e.preventDefault();
//     });
//   });
// });
