/*---------------------------
      Table of Contents
    --------------------
    
    01- Mobile Menu
    02- Sticky Navbar
    03- Module Search 
    04- Module Sidenav 
    05- Scroll Top Button
    06- Equal Height Elements
    07- Set Background-img to section 
    08- Add active class to accordions
    09- Load More Items
    10- Add Animation to About Img
    11- Progress bars
    11- Owl Carousel
    12- Popup Video
    13- CounterUp
    14- Projects Filtering and Sorting
    15- lightbox Gallery 
     
 ----------------------------*/

$(function () {
  // Global variables
  var $win = $(window);

  /*==========   Mobile Menu   ==========*/
  // var $navToggler = $('.navbar-toggler');
  // $navToggler.on('click', function () {
  //   $(this).toggleClass('actived');
  // });
  // $navToggler.on('click', function () {
  //   $('.navbar-collapse').toggleClass('menu-opened');
  // });

  /*==========   Sticky Navbar   ==========*/
  // $win.on('scroll', function () {
  //   if ($win.width() >= 992) {
  //     var $navbar = $('.sticky-navbar');
  //     if ($win.scrollTop() > 80) {
  //       $navbar.addClass('fixed-navbar');
  //     } else {
  //       $navbar.removeClass('fixed-navbar');
  //     }
  //   }
  // });

  /*==========  Module Search   ==========*/
  // var $moduleBtnSearch = $('.module__btn-search'),
  //   $moduleSearchContainer = $('.module__search-container');
  // Show Module Search
  // $moduleBtnSearch.on('click', function (e) {
  //   e.preventDefault();
  //   $moduleSearchContainer.toggleClass('active', 'inActive').removeClass('inActive');
  // });
  // Close Module Search
  // $('.close-search').on('click', function () {
  //   $moduleSearchContainer.removeClass('active').addClass('inActive');
  // });

  /*==========   Scroll Top Button   ==========*/
  // var $scrollTopBtn = $('#scrollTopBtn');
  // Show Scroll Top Button
  // $win.on('scroll', function () {
  //   if ($(this).scrollTop() > 700) {
  //     $scrollTopBtn.addClass('actived');
  //   } else {
  //     $scrollTopBtn.removeClass('actived');
  //   }
  // });
  // Animate Body after Clicking on Scroll Top Button
  // $scrollTopBtn.on('click', function () {
  //   $('html, body').animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     500
  //   );
  // });

  /*==========   Equal Height Elements   ==========*/
  var maxHeight = 0;
  $('.equal-height').each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('.equal-height').height(maxHeight);

  /*==========   Set Background-img to section   ==========*/
  // $('.bg-img').each(function () {
  //   var imgSrc = $(this).children('img').attr('src');
  //   $(this)
  //     .parent()
  //     .css({
  //       'background-image': 'url(' + imgSrc + ')',
  //       'background-repeat': 'no-repeat',
  //       'background-position': 'center bottom',
  //     });
  //   $(this).parent().addClass('bg-img');
  //   $(this).remove();
  // });

  /*==========   Add active class to accordions   ==========*/
  // $('.accordion__item-header').on('click', function () {
  //   $(this).addClass('opened');
  //   $(this).parent().siblings().find('.accordion__item-header').removeClass('opened');
  // });
  $('.accordion__item-title').on('click', function (e) {
    e.preventDefault();
  });

  /*==========   Load More Items  ==========*/
  // function loadMore(loadMoreBtn, loadedItem) {
  //   $(loadMoreBtn).on('click', function (e) {
  //     e.preventDefault();
  //     $(this).fadeOut();
  //     $(loadedItem).fadeIn();
  //   });
  // }

  // loadMore('.loadMoreBlog', '.hidden-blog-item');
  // loadMore('.loadMoreServices', '.hidden-service');
  // loadMore('.loadMoreProjects', '.project-hidden > .project-item');

  /*==========   Add Animation to About Img ==========*/
  if ($('.about').length > 0) {
    $(window).on('scroll', function () {
      var skillsOffset = $('.about').offset().top - 200,
        skillsHight = $(this).outerHeight(),
        winScrollTop = $(window).scrollTop();
      if (
        winScrollTop > skillsOffset - 1 &&
        winScrollTop < skillsOffset + skillsHight - 1
      ) {
        $('.about__img').addClass('animate-img');
      }
    });
  }

  /*==========   Progress bars  ==========*/
  // if ($('.skills').length > 0) {
  //   $(window).on('scroll', function () {
  //     var skillsOffset = $('.skills').offset().top - 130,
  //       skillsHight = $(this).outerHeight(),
  //       winScrollTop = $(window).scrollTop();
  //     if (winScrollTop > skillsOffset - 1 && winScrollTop < skillsOffset + skillsHight - 1) {
  //       $('.progress-bar').each(function () {
  //         $(this).width($(this).attr('aria-valuenow') + '%');
  //       });
  //       $('.progress__percentage').each(function () {
  //         $(this).text($(this).siblings().children('.progress-bar').attr('aria-valuenow') + '%');
  //       });
  //     }
  //   });
  // }

  /*==========   Owl Carousel  ==========*/
  // $('.carousel').each(function () {
  //   $(this).owlCarousel({
  //     nav: $(this).data('nav'),
  //     dots: $(this).data('dots'),
  //     loop: $(this).data('loop'),
  //     margin: $(this).data('space'),
  //     center: $(this).data('center'),
  //     dotsSpeed: $(this).data('speed'),
  //     autoplay: $(this).data('autoplay'),
  //     transitionStyle: $(this).data('transition'),
  //     animateOut: $(this).data('animate-out'),
  //     animateIn: $(this).data('animate-in'),
  //     autoplayTimeout: 15000,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       400: {
  //         items: $(this).data('slide-sm'),
  //       },
  //       700: {
  //         items: $(this).data('slide-md'),
  //       },
  //       1000: {
  //         items: $(this).data('slide'),
  //       },
  //     },
  //   });
  // });
  // // Owl Carousel With Thumbnails
  // $('.thumbs-carousel').owlCarousel({
  //   thumbs: true,
  //   thumbsPrerendered: true,
  //   loop: true,
  //   margin: 0,
  //   autoplay: $(this).data('autoplay'),
  //   nav: $(this).data('nav'),
  //   dots: $(this).data('dots'),
  //   dotsSpeed: $(this).data('speed'),
  //   transitionStyle: $(this).data('transition'),
  //   animateOut: $(this).data('animate-out'),
  //   animateIn: $(this).data('animate-in'),
  //   autoplayTimeout: 15000,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //   },
  // });

  /*==========  Popup Video  ==========*/
  // $('.popup-video').magnificPopup({
  //   mainClass: 'mfp-fade',
  //   removalDelay: 0,
  //   preloader: false,
  //   fixedContentPos: false,
  //   type: 'iframe',
  //   iframe: {
  //     markup:
  //       '<div class="mfp-iframe-scaler">' +
  //       '<div class="mfp-close"></div>' +
  //       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
  //       '</div>',
  //     patterns: {
  //       youtube: {
  //         index: 'youtube.com/',
  //         id: 'v=',
  //         src: 'https://www.youtube.com/embed/fW2aPXT2-DE',
  //       },
  //     },
  //     srcAction: 'iframe_src',
  //   },
  // });

  /*==========   counterUp  ==========*/
  // $('.counter').counterUp({
  //   delay: 10,
  //   time: 4000,
  // });

  /*==========   Projects Filtering and Sorting  ==========*/
  // $('#filtered-items-wrap').mixItUp();
  // $('.projects-filter li a').on('click', function (e) {
  //   e.preventDefault();
  // });

  /*==========   lightbox Gallery  ==========*/
  lightbox.option({
    fadeDuration: 300,
  });
});

// jQuery(document).ready(function ($) {
//   var $form_modal = $('.cd-user-modal'),
//     $form_login = $form_modal.find('#cd-login'),
//     $form_signup = $form_modal.find('#cd-signup'),
//     $form_forgot_password = $form_modal.find('#cd-reset-password'),
//     $form_modal_tab = $('.cd-switcher'),
//     $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
//     $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
//     $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
//     $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
//     $main_nav = $('.main-nav');

//open modal
// $main_nav.on('click', function (event) {
//   if ($(event.target).is($main_nav)) {
//     // on mobile open the submenu
//     $(this).children('ul').toggleClass('is-visible');
//   } else {
//     // on mobile close submenu
//     $main_nav.children('ul').removeClass('is-visible');
//     //show modal layer
//     $form_modal.addClass('is-visible');
//     //show the selected form
//     $(event.target).is('.cd-signup') ? signup_selected() : login_selected();
//   }
// });

//close modal
// $('.cd-user-modal').on('click', function (event) {
//   if ($(event.target).is($form_modal) || $(event.target).is('.cd-close-form')) {
//     $form_modal.removeClass('is-visible');
//   }
// });
// //close modal when clicking the esc keyboard button
// $(document).keyup(function (event) {
//   if (event.which == '27') {
//     $form_modal.removeClass('is-visible');
//   }
// });

//switch from a tab to another
// $form_modal_tab.on('click', function (event) {
//   event.preventDefault();
//   $(event.target).is($tab_login) ? login_selected() : signup_selected();
// });

//hide or show password
// $('.hide-password').on('click', function () {
//   var $this = $(this),
//     $password_field = $this.prev('input');

//   'password' == $password_field.attr('type')
//     ? $password_field.attr('type', 'text')
//     : $password_field.attr('type', 'password');
//   'Hide' == $this.text() ? $this.text('Show') : $this.text('Hide');
//   //focus and move cursor to the end of input field
//   $password_field.putCursorAtEnd();
// });

// //show forgot-password form
// $forgot_password_link.on('click', function (event) {
//   event.preventDefault();
//   forgot_password_selected();
// });

// //back to login from the forgot-password form
// $back_to_login_link.on('click', function (event) {
//   event.preventDefault();
//   login_selected();
// });

// function login_selected() {
//   $form_login.addClass('is-selected');
//   $form_signup.removeClass('is-selected');
//   $form_forgot_password.removeClass('is-selected');
//   $tab_login.addClass('selected');
//   $tab_signup.removeClass('selected');
// }

// function signup_selected() {
//   $form_login.removeClass('is-selected');
//   $form_signup.addClass('is-selected');
//   $form_forgot_password.removeClass('is-selected');
//   $tab_login.removeClass('selected');
//   $tab_signup.addClass('selected');
// }

// function forgot_password_selected() {
//   $form_login.removeClass('is-selected');
//   $form_signup.removeClass('is-selected');
//   $form_forgot_password.addClass('is-selected');
// }

// //REMOVE THIS - it's just to show error messages
// $form_login.find('input[type="submit"]').on('click', function (event) {
//   event.preventDefault();
//   $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
// });
// $form_signup.find('input[type="submit"]').on('click', function (event) {
//   event.preventDefault();
//   $form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
// });

//IE9 placeholder fallback
//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
// if (!Modernizr.input.placeholder) {
//   $('[placeholder]')
//     .focus(function () {
//       var input = $(this);
//       if (input.val() == input.attr('placeholder')) {
//         input.val('');
//       }
//     })
//     .blur(function () {
//       var input = $(this);
//       if (input.val() == '' || input.val() == input.attr('placeholder')) {
//         input.val(input.attr('placeholder'));
//       }
//     })
//     .blur();
//   $('[placeholder]')
//     .parents('form')
//     .submit(function () {
//       $(this)
//         .find('[placeholder]')
//         .each(function () {
//           var input = $(this);
//           if (input.val() == input.attr('placeholder')) {
//             input.val('');
//           }
//         });
//     });
// }

//credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
// jQuery.fn.putCursorAtEnd = function () {
//   return this.each(function () {
//     // If this function exists...
//     if (this.setSelectionRange) {
//       // ... then use it (Doesn't work in IE)
//       // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
//       var len = $(this).val().length * 2;
//       this.setSelectionRange(len, len);
//     } else {
//       // ... otherwise replace the contents with itself
//       // (Doesn't work in Google Chrome)
//       $(this).val($(this).val());
//     }
//   });
// };

// jQuery('#cody-info ul li')
//   .eq(1)
//   .on('click', function () {
//     $('#cody-info').hide();
//   });

// $(document).ready(function () {
//   $('#booking-tabs').each(function () {
//     var $active,
//       $content,
//       $links = $(this).find('a');

//     $active = $($links[0]);
//     $active.addClass('active');

//     $content = $($active[0].hash);

//     $links.not($active).each(function () {
//       $(this.hash).hide();
//     });

//     $(this).on('click', 'a', function (e) {
//       $active.removeClass('active');
//       $content.hide();

//       $active = $(this);
//       $content = $(this.hash);

//       $active.addClass('active');
//       $content.show();

//       e.preventDefault();
//     });
//   });
// });
// $(document).ready(function () {
//   $('#trips-tabs').each(function () {
//     var $active,
//       $content,
//       $links = $(this).find('a');

//     $active = $($links[0]);
//     $active.addClass('active');

//     $content = $($active[0].hash);

//     $links.not($active).each(function () {
//       $(this.hash).hide();
//     });

//     $(this).on('click', 'a', function (e) {
//       $active.removeClass('active');
//       $content.hide();

//       $active = $(this);
//       $content = $(this.hash);

//       $active.addClass('active');
//       $content.show();

//       e.preventDefault();
//     });
//   });
// });

// $(document).ready(function () {
//   /* 1. Visualizing things on Hover - See next part for action on click */
//   $('#stars li')
//     .on('mouseover', function () {
//       var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

//       // Now highlight all the stars that's not after the current hovered star
//       $(this)
//         .parent()
//         .children('li.star')
//         .each(function (e) {
//           if (e < onStar) {
//             $(this).addClass('hover');
//           } else {
//             $(this).removeClass('hover');
//           }
//         });
//     })
//     .on('mouseout', function () {
//       $(this)
//         .parent()
//         .children('li.star')
//         .each(function (e) {
//           $(this).removeClass('hover');
//         });
//     });

//   /* 2. Action to perform on click */
//   $('#stars li').on('click', function () {
//     var onStar = parseInt($(this).data('value'), 10); // The star currently selected
//     var stars = $(this).parent().children('li.star');

//     for (i = 0; i < stars.length; i++) {
//       $(stars[i]).removeClass('selected');
//     }

//     for (i = 0; i < onStar; i++) {
//       $(stars[i]).addClass('selected');
//     }

//     // JUST RESPONSE (Not needed)
//     var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
//     var msg = '';
//     if (ratingValue > 1) {
//       msg = 'Thanks! You rated this ' + ratingValue + ' stars.';
//     } else {
//       msg = 'We will improve ourselves. You rated this ' + ratingValue + ' stars.';
//     }
//     responseMessage(msg);
//   });
// });

// $(document).ready(function (e) {
//   $('#sortable').sortable();
//   $('#sortable').disableSelection();
// });

// $(document).ready(function () {
//   $('#plan-show').click(function () {
//     $('.planning-body').show();
//   });
// });

// Count Number //
// $(document).ready(function () {
//   $('.minus').click(function () {
//     var $input = $(this).parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 0 ? 0 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
//   $('.plus').click(function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
//   });
// });

// Weather
// $(document).ready(function () {
//   $.get('https://dataservice.accuweather.com/currentconditions/v1/258278?apikey=AaMR6PRiIau2KQuRub9miP9GlxffqvhS').done(
//     function (response) {
//       $('#current-weather').html((response && response[0] && response[0]['Temperature'].Metric.Value) || 0);
//     }
//   );
// });
// $(document).ready(function () {
//   var $ticker = $('[data-ticker="list"]'),
//     tickerItem = '[data-ticker="item"]';
//   (itemCount = $(tickerItem).length), (viewportWidth = 0);

//   function setupViewport() {
//     $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');

//     for (i = 0; i < itemCount; i++) {
//       var itemWidth = $(tickerItem).eq(i).outerWidth();
//       viewportWidth = viewportWidth + itemWidth;
//     }

//     $ticker.css('width', viewportWidth);
//   }

//   function animateTicker() {
//     $ticker.animate(
//       {
//         marginLeft: -viewportWidth,
//       },
//       30000,
//       'linear',
//       function () {
//         $ticker.css('margin-left', '0');
//         animateTicker();
//       }
//     );
//   }

//   function initializeTicker() {
//     setupViewport();
//     animateTicker();

//     $ticker
//       .on('mouseenter', function () {
//         $(this).stop(true);
//       })
//       .on('mouseout', function () {
//         animateTicker();
//       });
//   }

//   initializeTicker();
// });

// $(document).ready(function () {
//   $('.moreless-button').click(function () {
//     $('.moretext').slideToggle();
//     if ($('.moreless-button').text() == 'Read more') {
//       $(this).text('Read less');
//     } else {
//       $(this).text('Read more');
//     }
//   });
// });

// $(document).ready(function () {
//   $('#event1').click(function () {
//     $('#event-img-season1').show();
//     $('#event-img-season2').hide();
//     $('#event-img-season3').hide();
//     $('#event-img-season4').hide();
//   });

//   $('#event2').click(function () {
//     $('#event-img-season1').hide();
//     $('#event-img-season2').show();
//     $('#event-img-season3').hide();
//     $('#event-img-season4').hide();
//   });
//   $('#event3').click(function () {
//     $('#event-img-season1').hide();
//     $('#event-img-season2').hide();
//     $('#event-img-season3').show();
//     $('#event-img-season4').hide();
//   });
//   $('#event4').click(function () {
//     $('#event-img-season1').hide();
//     $('#event-img-season2').hide();
//     $('#event-img-season3').hide();
//     $('#event-img-season4').show();
//   });
// });
