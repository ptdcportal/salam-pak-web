(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    Uo3f: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'WhatToDoModule', function () {
          return K;
        });
      var a = n('ofXK'),
        i = n('tyNb'),
        o = n('SzZM'),
        r = n('NO7T'),
        l = n('fTLw'),
        s = n('nr5L'),
        c = n('44p1'),
        d = n('H9TL'),
        m = n('jK7q'),
        x = n('XTS8'),
        g = n('0yyg'),
        p = n('CQy9'),
        u = n('PSy5'),
        h = n('fXoL'),
        v = n('eSVu'),
        S = n('3Pt+'),
        f = n('oOf3');
      const y = ['slickModal'],
        E = function (t, e) {
          return ['/what-to-do/activity', t, 'location', e];
        };
      function _(t, e) {
        if (
          (1 & t &&
            (h['\u0275\u0275elementStart'](0, 'div', 41),
            h['\u0275\u0275text'](1, '\n          '),
            h['\u0275\u0275text'](2, '\n          '),
            h['\u0275\u0275text'](3, '\n          '),
            h['\u0275\u0275elementStart'](4, 'a', 42),
            h['\u0275\u0275elementStart'](5, 'div', 43),
            h['\u0275\u0275text'](6, '\n              '),
            h['\u0275\u0275element'](7, 'img', 44),
            h['\u0275\u0275text'](8, '\n              '),
            h['\u0275\u0275text'](9, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](10, '\n            '),
            h['\u0275\u0275text'](11, '\n            '),
            h['\u0275\u0275elementStart'](12, 'div', 45),
            h['\u0275\u0275text'](13, '\n              '),
            h['\u0275\u0275elementStart'](14, 'h4', 46),
            h['\u0275\u0275text'](15),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](16, '\n              '),
            h['\u0275\u0275elementStart'](17, 'p', 47),
            h['\u0275\u0275text'](18),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](19, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](20, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](21, '\n        '),
            h['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = h['\u0275\u0275nextContext']();
          h['\u0275\u0275advance'](4),
            h['\u0275\u0275propertyInterpolate2'](
              'href',
              '/what-to-do',
              n.category.url,
              '/location/',
              t.slug,
              '',
              h['\u0275\u0275sanitizeUrl']
            ),
            h['\u0275\u0275property']('routerLink', h['\u0275\u0275pureFunction2'](6, E, n.category.slug, t.slug)),
            h['\u0275\u0275advance'](3),
            h['\u0275\u0275property']('src', t.thumbnail || n.defaultImg, h['\u0275\u0275sanitizeUrl']),
            h['\u0275\u0275advance'](8),
            h['\u0275\u0275textInterpolate'](t.alias),
            h['\u0275\u0275advance'](3),
            h['\u0275\u0275textInterpolate1']('\n                ', t.description, '\n              ');
        }
      }
      function b(t, e) {
        if (1 & t) {
          const t = h['\u0275\u0275getCurrentView']();
          h['\u0275\u0275elementStart'](0, 'div'),
            h['\u0275\u0275text'](1, '\n          '),
            h['\u0275\u0275elementStart'](2, 'pagination-controls', 48),
            h['\u0275\u0275listener']('pageChange', function (e) {
              return h['\u0275\u0275restoreView'](t), (h['\u0275\u0275nextContext']().p = e);
            }),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](3, '\n        '),
            h['\u0275\u0275elementEnd']();
        }
      }
      function w(t, e) {
        if (
          (1 & t &&
            (h['\u0275\u0275elementStart'](0, 'div', 49),
            h['\u0275\u0275text'](1, '\n            '),
            h['\u0275\u0275elementStart'](2, 'a', 22),
            h['\u0275\u0275text'](3, '\n              '),
            h['\u0275\u0275elementStart'](4, 'div', 50),
            h['\u0275\u0275text'](5, '\n                '),
            h['\u0275\u0275element'](6, 'img', 51),
            h['\u0275\u0275text'](7, '\n              '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](8, '\n              '),
            h['\u0275\u0275elementStart'](9, 'div', 52),
            h['\u0275\u0275text'](10, '\n                '),
            h['\u0275\u0275elementStart'](11, 'h6', 53),
            h['\u0275\u0275text'](12),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](13, '\n                '),
            h['\u0275\u0275text'](14, '\n                '),
            h['\u0275\u0275text'](15, '\n                '),
            h['\u0275\u0275text'](16, '\n              '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](17, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](18, '\n          '),
            h['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = h['\u0275\u0275nextContext']();
          h['\u0275\u0275advance'](2),
            h['\u0275\u0275property']('routerLink', h['\u0275\u0275pureFunction2'](3, E, n.category.slug, t.slug)),
            h['\u0275\u0275advance'](4),
            h['\u0275\u0275property']('src', t.thumbnail, h['\u0275\u0275sanitizeUrl']),
            h['\u0275\u0275advance'](6),
            h['\u0275\u0275textInterpolate'](t.alias);
        }
      }
      const C = function (t) {
        return ['/what-to-do/activity', t];
      };
      function O(t, e) {
        if (
          (1 & t &&
            (h['\u0275\u0275elementStart'](0, 'span', 54),
            h['\u0275\u0275text'](1, '\n              '),
            h['\u0275\u0275text'](2, '\n              '),
            h['\u0275\u0275elementStart'](3, 'a', 39),
            h['\u0275\u0275text'](4),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          h['\u0275\u0275advance'](3),
            h['\u0275\u0275property']('routerLink', h['\u0275\u0275pureFunction1'](2, C, t.slug)),
            h['\u0275\u0275advance'](1),
            h['\u0275\u0275textInterpolate'](t.name);
        }
      }
      const I = function (t) {
          return { itemsPerPage: 3, currentPage: t };
        },
        M = function (t) {
          return ['/what-to-do/activity', t, 'listing'];
        },
        P = function () {
          return ['/what-to-do'];
        },
        k = [
          { breakpoint: 1920, settings: { slidesToShow: 4 } },
          { breakpoint: 1042, settings: { slidesToShow: 3 } },
          { breakpoint: 770, settings: { slidesToShow: 2 } },
          { breakpoint: 600, settings: { slidesToShow: 1.5 } },
        ];
      let j = (() => {
        class t {
          constructor(t, e, n, a) {
            (this.route = t),
              (this.shellService = e),
              (this.eventService = n),
              (this.homeService = a),
              (this.defaultImg = x.a),
              (this.p = 1),
              (this.categories = []),
              (this.slideConfig = { slidesToShow: 4.5, slidesToScroll: 4, arrows: !0, infinite: !1, responsive: k }),
              (this.images = [d.a, m.a, x.a, g.a, p.a, d.a]),
              this.route.params.subscribe((t) => {
                this.category = this.route.snapshot.data.category;
              });
          }
          getLocations() {
            this.eventService
              .getActivityLocations(this.category._id)
              .pipe(
                Object(c.finalize)(() => {
                  this.isLoading = !1;
                })
              )
              .subscribe((t) => {
                (this.locations = t.slice(0, 6)), this.locations.filter((t) => {});
              });
          }
          getFilters() {
            this.shellService.currentMessage.subscribe((t) => {
              (this.categories = t.activities), console.log('this.categories', this.categories);
            });
          }
          ngOnInit() {
            window.scrollTo({ top: 0, behavior: 'smooth' }), this.getLocations(), this.getFilters();
          }
          getRatingStars(t) {
            return (parseFloat(t) / 5) * 100 + '%';
          }
          loadScript() {
            let t = document.body,
              e = document.createElement('script');
            (e.innerHTML = ''),
              (e.src = '../../assets/js/where-to-go.js'),
              (e.async = !0),
              (e.defer = !0),
              t.appendChild(e);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              h['\u0275\u0275directiveInject'](i.a),
              h['\u0275\u0275directiveInject'](u.a),
              h['\u0275\u0275directiveInject'](l.a),
              h['\u0275\u0275directiveInject'](s.a)
            );
          }),
          (t.ɵcmp = h['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['app-category']],
            viewQuery: function (t, e) {
              var n;
              1 & t && h['\u0275\u0275viewQuery'](y, !0),
                2 & t && h['\u0275\u0275queryRefresh']((n = h['\u0275\u0275loadQuery']())) && (e.slickModal = n.first);
            },
            decls: 170,
            vars: 23,
            consts: [
              ['id', 'page-title', 1, 'page-title-layout4', 'text-center', 'bg-overlay', 'slider'],
              [1, 'bg-img'],
              [
                'onerror',
                "this.onerror=null;this.src='assets/images/backgrounds/trip.png';",
                'alt',
                'background',
                1,
                'header-image',
                3,
                'src',
              ],
              [1, 'container'],
              [1, 'row'],
              [1, 'col-sm-12', 'col-md-12', 'col-lg-8', 'page'],
              [1, 'slide__content'],
              [1, 'slide__title'],
              [1, 'slide__desc'],
              [1, 'container-fluid', 'seasons'],
              [1, 'col-md-8'],
              [1, 'heading__subtitle'],
              [1, 'heading__title'],
              [1, 'masonry-wrapper', 'masonry-style-2'],
              ['data-column-width', '.col-md-4', 1, 'blog-container'],
              ['class', 'col-md-4 post-item p-4', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-12', 'text-center'],
              [4, 'ngIf'],
              ['id', 'placeCarousel', 1, 'place-carousel'],
              [1, 'col', 'col-md-8'],
              [1, 'heading__title', 'pl-5'],
              [1, 'col-md-4', 'show-all-btn'],
              [3, 'routerLink'],
              ['src', 'assets/images/icons/left-arrow-green.svg', 1, 'iconArrowRightTop'],
              [1, 'col-sm-12', 'col-md-12', 'col-lg-12'],
              [1, 'carousel', 'pl-4', 3, 'config'],
              ['slickModal', 'slick-carousel'],
              ['ngxSlickItem', '', 'class', 'post-item places-item carousel-cell pr-15', 4, 'ngFor', 'ngForOf'],
              [1, 'browse-section'],
              [1, 'col-md-12'],
              [1, 'col-sm-12', 'col-md-6', 'col-lg-6'],
              [1, 'browse-form'],
              ['type', 'text', 'placeholder', 'Type Words Then Enter', 1, 'search__input'],
              [1, 'module__search-btn'],
              [1, 'fa', 'fa-search'],
              [1, 'col-sm-12', 'col-md-6', 'col-lg-6', 'btn-category'],
              [1, 'col-md-12', 'p-0'],
              [1, 'browse-btn-1'],
              [1, 'browse-btn', 'category-btn'],
              [1, 'category-btn', 3, 'routerLink'],
              ['class', 'browse-btn', 4, 'ngFor', 'ngForOf'],
              [1, 'col-md-4', 'post-item', 'p-4'],
              [3, 'href', 'routerLink'],
              [1, 'post__img'],
              [
                'alt',
                'post img',
                'onerror',
                "this.onerror=null;this.src='assets/images/images/fall/fall1.jpg';",
                3,
                'src',
              ],
              [1, 'post__content'],
              [1, 'post__title'],
              [1, 'post__desc'],
              [1, 'my-pagination', 3, 'pageChange'],
              ['ngxSlickItem', '', 1, 'post-item', 'places-item', 'carousel-cell', 'pr-15'],
              [1, 'places__img'],
              [
                'onerror',
                "this.onerror=null;this.src='assets/images/images/fall/fall1.jpg';",
                'alt',
                'post img',
                2,
                'height',
                '205px !important',
                3,
                'src',
              ],
              [1, 'places__content'],
              [1, 'places_sub', 2, 'font-size', '18px'],
              [1, 'browse-btn'],
            ],
            template: function (t, e) {
              1 & t &&
                (h['\u0275\u0275text'](0, '\n'),
                h['\u0275\u0275elementStart'](1, 'section', 0),
                h['\u0275\u0275text'](2, '\n  '),
                h['\u0275\u0275elementStart'](3, 'div', 1),
                h['\u0275\u0275text'](4, '\n    '),
                h['\u0275\u0275text'](5, '\n    '),
                h['\u0275\u0275element'](6, 'img', 2),
                h['\u0275\u0275text'](7, '\n    '),
                h['\u0275\u0275text'](8, '\n  '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](9, '\n  '),
                h['\u0275\u0275elementStart'](10, 'div', 3),
                h['\u0275\u0275text'](11, '\n    '),
                h['\u0275\u0275elementStart'](12, 'div', 4),
                h['\u0275\u0275text'](13, '\n      '),
                h['\u0275\u0275elementStart'](14, 'div', 5),
                h['\u0275\u0275text'](15, '\n        '),
                h['\u0275\u0275elementStart'](16, 'div', 6),
                h['\u0275\u0275text'](17, '\n          '),
                h['\u0275\u0275elementStart'](18, 'h2', 7),
                h['\u0275\u0275text'](19),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](20, '\n          '),
                h['\u0275\u0275elementStart'](21, 'p', 8),
                h['\u0275\u0275text'](22),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](23, '\n          '),
                h['\u0275\u0275text'](24, '\n        '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](25, '\n        '),
                h['\u0275\u0275text'](26, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](27, '\n      '),
                h['\u0275\u0275text'](28, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](29, '\n    '),
                h['\u0275\u0275text'](30, '\n  '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](31, '\n  '),
                h['\u0275\u0275text'](32, '\n'),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](33, '\n'),
                h['\u0275\u0275text'](34, '\n'),
                h['\u0275\u0275text'](35, '\n\n'),
                h['\u0275\u0275text'](36, '\n'),
                h['\u0275\u0275elementStart'](37, 'div', 9),
                h['\u0275\u0275text'](38, '\n  '),
                h['\u0275\u0275elementStart'](39, 'div', 3),
                h['\u0275\u0275text'](40, '\n    '),
                h['\u0275\u0275elementStart'](41, 'div', 4),
                h['\u0275\u0275text'](42, '\n      '),
                h['\u0275\u0275elementStart'](43, 'div', 10),
                h['\u0275\u0275text'](44, '\n        '),
                h['\u0275\u0275elementStart'](45, 'span', 11),
                h['\u0275\u0275text'](46),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](47, '\n        '),
                h['\u0275\u0275elementStart'](48, 'h2', 12),
                h['\u0275\u0275text'](49),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](50, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](51, '\n      '),
                h['\u0275\u0275text'](52, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](53, '\n    '),
                h['\u0275\u0275elementStart'](54, 'div', 13),
                h['\u0275\u0275text'](55, '\n      '),
                h['\u0275\u0275elementStart'](56, 'div', 14),
                h['\u0275\u0275text'](57, '\n        '),
                h['\u0275\u0275template'](58, _, 22, 9, 'div', 15),
                h['\u0275\u0275pipe'](59, 'paginate'),
                h['\u0275\u0275text'](60, '\n        '),
                h['\u0275\u0275text'](61, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](62, '\n      '),
                h['\u0275\u0275text'](63, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](64, '\n  '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](65, '\n  '),
                h['\u0275\u0275elementStart'](66, 'div', 3),
                h['\u0275\u0275text'](67, '\n    '),
                h['\u0275\u0275elementStart'](68, 'div', 4),
                h['\u0275\u0275text'](69, '\n      '),
                h['\u0275\u0275elementStart'](70, 'div', 16),
                h['\u0275\u0275text'](71, '\n        '),
                h['\u0275\u0275template'](72, b, 4, 0, 'div', 17),
                h['\u0275\u0275text'](73, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](74, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](75, '\n  '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](76, '\n'),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](77, '\n\n'),
                h['\u0275\u0275text'](78, '\n'),
                h['\u0275\u0275elementStart'](79, 'section', 18),
                h['\u0275\u0275text'](80, '\n  '),
                h['\u0275\u0275elementStart'](81, 'div', 3),
                h['\u0275\u0275text'](82, '\n    '),
                h['\u0275\u0275elementStart'](83, 'div', 4),
                h['\u0275\u0275text'](84, '\n      '),
                h['\u0275\u0275elementStart'](85, 'div', 19),
                h['\u0275\u0275text'](86, '\n        '),
                h['\u0275\u0275elementStart'](87, 'h2', 20),
                h['\u0275\u0275text'](88),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](89, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](90, '\n\n      '),
                h['\u0275\u0275elementStart'](91, 'div', 21),
                h['\u0275\u0275text'](92, '\n        '),
                h['\u0275\u0275elementStart'](93, 'a', 22),
                h['\u0275\u0275text'](94, 'show all '),
                h['\u0275\u0275element'](95, 'img', 23),
                h['\u0275\u0275text'](96, '\n          '),
                h['\u0275\u0275text'](97, '\n        '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](98, '\n        '),
                h['\u0275\u0275text'](99, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](100, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](101, '\n    '),
                h['\u0275\u0275text'](102, '\n    '),
                h['\u0275\u0275elementStart'](103, 'div', 4),
                h['\u0275\u0275text'](104, '\n      '),
                h['\u0275\u0275elementStart'](105, 'div', 24),
                h['\u0275\u0275text'](106, '\n        '),
                h['\u0275\u0275elementStart'](107, 'ngx-slick-carousel', 25, 26),
                h['\u0275\u0275text'](109, '\n          '),
                h['\u0275\u0275template'](110, w, 19, 6, 'div', 27),
                h['\u0275\u0275text'](111, '\n        '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](112, '\n        '),
                h['\u0275\u0275text'](113, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](114, '\n      '),
                h['\u0275\u0275text'](115, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](116, '\n    '),
                h['\u0275\u0275text'](117, '\n  '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](118, '\n  '),
                h['\u0275\u0275text'](119, '\n'),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](120, '\n'),
                h['\u0275\u0275text'](121, '\n\n'),
                h['\u0275\u0275text'](122, '\n'),
                h['\u0275\u0275elementStart'](123, 'section', 28),
                h['\u0275\u0275text'](124, '\n  '),
                h['\u0275\u0275elementStart'](125, 'div', 3),
                h['\u0275\u0275text'](126, '\n    '),
                h['\u0275\u0275elementStart'](127, 'div', 4),
                h['\u0275\u0275text'](128, '\n      '),
                h['\u0275\u0275elementStart'](129, 'div', 29),
                h['\u0275\u0275text'](130, '\n        '),
                h['\u0275\u0275elementStart'](131, 'div', 30),
                h['\u0275\u0275text'](132, '\n          '),
                h['\u0275\u0275elementStart'](133, 'h2', 12),
                h['\u0275\u0275text'](134),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](135, '\n          '),
                h['\u0275\u0275elementStart'](136, 'form', 31),
                h['\u0275\u0275text'](137, '\n            '),
                h['\u0275\u0275element'](138, 'input', 32),
                h['\u0275\u0275text'](139, '\n            '),
                h['\u0275\u0275elementStart'](140, 'button', 33),
                h['\u0275\u0275element'](141, 'i', 34),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](142, '\n          '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](143, '\n        '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](144, '\n        '),
                h['\u0275\u0275text'](145, '\n        '),
                h['\u0275\u0275elementStart'](146, 'div', 35),
                h['\u0275\u0275text'](147, '\n          '),
                h['\u0275\u0275elementStart'](148, 'div', 36),
                h['\u0275\u0275text'](149, '\n            '),
                h['\u0275\u0275elementStart'](150, 'h2', 12),
                h['\u0275\u0275text'](151, 'Search by Category'),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](152, '\n          '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](153, '\n          '),
                h['\u0275\u0275elementStart'](154, 'div', 37),
                h['\u0275\u0275text'](155, '\n            '),
                h['\u0275\u0275elementStart'](156, 'span', 38),
                h['\u0275\u0275elementStart'](157, 'a', 39),
                h['\u0275\u0275text'](158, 'All'),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](159, '\n\n            '),
                h['\u0275\u0275template'](160, O, 5, 4, 'span', 40),
                h['\u0275\u0275text'](161, '\n          '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](162, '\n          '),
                h['\u0275\u0275text'](163, '\n        '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](164, '\n        '),
                h['\u0275\u0275text'](165, '\n      '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](166, '\n    '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](167, '\n  '),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](168, '\n'),
                h['\u0275\u0275elementEnd'](),
                h['\u0275\u0275text'](169, '\n')),
                2 & t &&
                  (h['\u0275\u0275advance'](6),
                  h['\u0275\u0275property']('src', e.category.photos[0], h['\u0275\u0275sanitizeUrl']),
                  h['\u0275\u0275advance'](13),
                  h['\u0275\u0275textInterpolate'](e.category.name),
                  h['\u0275\u0275advance'](3),
                  h['\u0275\u0275textInterpolate'](e.category.description),
                  h['\u0275\u0275advance'](24),
                  h['\u0275\u0275textInterpolate'](e.category.name),
                  h['\u0275\u0275advance'](3),
                  h['\u0275\u0275textInterpolate1']('featured ', e.category.name, ' events'),
                  h['\u0275\u0275advance'](9),
                  h['\u0275\u0275property'](
                    'ngForOf',
                    h['\u0275\u0275pipeBind2'](59, 15, e.locations, h['\u0275\u0275pureFunction1'](18, I, e.p))
                  ),
                  h['\u0275\u0275advance'](14),
                  h['\u0275\u0275property']('ngIf', (null == e.locations ? null : e.locations.length) > 3),
                  h['\u0275\u0275advance'](16),
                  h['\u0275\u0275textInterpolate1']('all ', e.category.name, ''),
                  h['\u0275\u0275advance'](5),
                  h['\u0275\u0275property']('routerLink', h['\u0275\u0275pureFunction1'](20, M, e.category.slug)),
                  h['\u0275\u0275advance'](14),
                  h['\u0275\u0275property']('config', e.slideConfig),
                  h['\u0275\u0275advance'](3),
                  h['\u0275\u0275property']('ngForOf', e.locations)('ngForOf', e.images),
                  h['\u0275\u0275advance'](24),
                  h['\u0275\u0275textInterpolate1']('Browse ', e.category.slug, ''),
                  h['\u0275\u0275advance'](23),
                  h['\u0275\u0275property']('routerLink', h['\u0275\u0275pureFunction0'](22, P)),
                  h['\u0275\u0275advance'](3),
                  h['\u0275\u0275property']('ngForOf', e.categories));
            },
            directives: [
              a.m,
              a.n,
              i.f,
              v.a,
              S['\u0275angular_packages_forms_forms_y'],
              S.NgControlStatusGroup,
              S.NgForm,
              f.c,
              v.c,
            ],
            pipes: [f.b],
            styles: [
              '.bg-img[_ngcontent-%COMP%]{margin-top:-120px}.bg-img[_ngcontent-%COMP%], .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:200px}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-200px;z-index:1;text-align:left}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.category-btn[_ngcontent-%COMP%]{display:inline-block;margin:3px}.post__content[_ngcontent-%COMP%]{background-color:transparent}.blog-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.blog-container[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]{border:1px solid #e6dbdb;border-radius:18px;max-width:32%;box-shadow:0 3px 10px rgba(0,0,0,.2)}',
            ],
          })),
          t
        );
      })();
      function F(t, e) {
        if (
          (1 & t &&
            (h['\u0275\u0275elementStart'](0, 'div', 31),
            h['\u0275\u0275text'](1, '\n          '),
            h['\u0275\u0275elementStart'](2, 'a', 32),
            h['\u0275\u0275text'](3, '\n            '),
            h['\u0275\u0275elementStart'](4, 'div', 33),
            h['\u0275\u0275text'](5, '\n              '),
            h['\u0275\u0275element'](6, 'img', 34),
            h['\u0275\u0275text'](7, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](8, '\n            '),
            h['\u0275\u0275text'](9, '\n            '),
            h['\u0275\u0275elementStart'](10, 'div', 35),
            h['\u0275\u0275text'](11, '\n              '),
            h['\u0275\u0275elementStart'](12, 'h4', 36),
            h['\u0275\u0275text'](13),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](14, '\n              '),
            h['\u0275\u0275text'](15, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](16, '\n            '),
            h['\u0275\u0275text'](17, '\n          '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](18, '\n        '),
            h['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = h['\u0275\u0275nextContext']();
          h['\u0275\u0275advance'](2),
            h['\u0275\u0275propertyInterpolate2'](
              'href',
              '/where-to-go/category/',
              n.data.slug,
              '/location/',
              t.slug,
              '',
              h['\u0275\u0275sanitizeUrl']
            ),
            h['\u0275\u0275advance'](4),
            h['\u0275\u0275property']('src', t.thumbnail, h['\u0275\u0275sanitizeUrl']),
            h['\u0275\u0275advance'](7),
            h['\u0275\u0275textInterpolate'](t.alias);
        }
      }
      function L(t, e) {
        if (1 & t) {
          const t = h['\u0275\u0275getCurrentView']();
          h['\u0275\u0275elementStart'](0, 'div'),
            h['\u0275\u0275text'](1, '\n          '),
            h['\u0275\u0275elementStart'](2, 'pagination-controls', 37),
            h['\u0275\u0275listener']('pageChange', function (e) {
              return h['\u0275\u0275restoreView'](t), (h['\u0275\u0275nextContext']().p = e);
            }),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](3, '\n        '),
            h['\u0275\u0275elementEnd']();
        }
      }
      const T = function (t) {
        return { itemsPerPage: 6, currentPage: t };
      };
      let z = (() => {
          class t {
            constructor(t, e) {
              (this.route = t),
                (this.eventService = e),
                (this.p = 1),
                (this.data = this.route.snapshot.data.category
                  ? this.route.snapshot.data.category
                  : this.route.snapshot.data.location
                  ? this.route.snapshot.data.location
                  : this.route.snapshot.data.activity),
                (this.slug = this.data.location ? this.data.slug : ''),
                this.route.snapshot.data.category
                  ? this.getCategoryLocations(this.data._id)
                  : this.route.snapshot.data.location
                  ? this.getLocationsListing(this.slug)
                  : this.getActivityLocations(this.data._id);
            }
            ngOnInit() {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            getCategoryLocations(t) {
              this.eventService.getCategoryLocations(t).subscribe((t) => {
                this.filteredRes = t.filter((t) => (t.isFeatured = !0));
              });
            }
            getLocationsListing(t) {
              this.eventService.getTrips(t).subscribe((t) => {
                this.filteredRes = t.filter((t) => (t.isFeatured = !0));
              });
            }
            getActivityLocations(t) {
              this.eventService.getActivityLocations(t).subscribe((t) => {
                this.filteredRes = t.filter((t) => (t.isFeatured = !0));
              });
            }
            getRatingStars(t) {
              return (parseFloat(t) / 5) * 100 + '%';
            }
            loadScript() {
              let t = document.body,
                e = document.createElement('script');
              (e.innerHTML = ''),
                (e.src = '../../assets/js/where-to-go.js'),
                (e.async = !0),
                (e.defer = !0),
                t.appendChild(e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(h['\u0275\u0275directiveInject'](i.a), h['\u0275\u0275directiveInject'](l.a));
            }),
            (t.ɵcmp = h['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['app-listing']],
              decls: 124,
              vars: 12,
              consts: [
                ['id', 'page-title', 1, 'page-title-layout4', 'text-center', 'bg-overlay', 'slider'],
                [1, 'bg-img'],
                ['alt', 'background', 1, 'header-image', 3, 'src'],
                [1, 'container'],
                [1, 'row'],
                [1, 'col-sm-12', 'col-md-12', 'col-lg-8', 'page'],
                [1, 'slide__content'],
                [1, 'slide__title'],
                [1, 'slide__desc'],
                [1, 'container-fluid', 'seasons'],
                [1, 'col-md-8'],
                [1, 'heading__subtitle'],
                [1, 'heading__title'],
                [1, 'col-md-4', 'show-all-btn'],
                [1, 'masonry-wrapper', 'masonry-style-2'],
                ['data-column-width', '.col-md-4', 1, 'blog-container'],
                ['class', 'col-md-4 post-item', 4, 'ngFor', 'ngForOf'],
                [1, 'col-md-12', 'text-center'],
                [4, 'ngIf'],
                [1, 'browse-section'],
                [1, 'col-md-12'],
                [1, 'col-sm-12', 'col-md-6', 'col-lg-6'],
                [1, 'browse-form'],
                ['type', 'text', 'placeholder', 'Type Words Then Enter', 1, 'search__input'],
                [1, 'module__search-btn'],
                [1, 'fa', 'fa-search'],
                [1, 'col-sm-12', 'col-md-6', 'col-lg-6', 'btn-category'],
                [1, 'col-md-12', 'p-0'],
                [1, 'browse-btn-1'],
                [1, 'browse-btn', 'category-btn'],
                ['href', '/where-to-go'],
                [1, 'col-md-4', 'post-item'],
                [3, 'href'],
                [1, 'post__img', 2, 'height', '240px'],
                [
                  'onerror',
                  "this.onerror=null;this.src='assets/images/images/fall/fall1.jpg';",
                  'alt',
                  'post img',
                  3,
                  'src',
                ],
                [1, 'post__content', 2, 'background-color', 'transparent !important'],
                [1, 'post__title'],
                [1, 'my-pagination', 3, 'pageChange'],
              ],
              template: function (t, e) {
                1 & t &&
                  (h['\u0275\u0275text'](0, '\n'),
                  h['\u0275\u0275elementStart'](1, 'section', 0),
                  h['\u0275\u0275text'](2, '\n  '),
                  h['\u0275\u0275elementStart'](3, 'div', 1),
                  h['\u0275\u0275text'](4, '\n    '),
                  h['\u0275\u0275element'](5, 'img', 2),
                  h['\u0275\u0275text'](6, '\n    '),
                  h['\u0275\u0275text'](7, '\n  '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](8, '\n  '),
                  h['\u0275\u0275elementStart'](9, 'div', 3),
                  h['\u0275\u0275text'](10, '\n    '),
                  h['\u0275\u0275elementStart'](11, 'div', 4),
                  h['\u0275\u0275text'](12, '\n      '),
                  h['\u0275\u0275elementStart'](13, 'div', 5),
                  h['\u0275\u0275text'](14, '\n        '),
                  h['\u0275\u0275elementStart'](15, 'div', 6),
                  h['\u0275\u0275text'](16, '\n          '),
                  h['\u0275\u0275elementStart'](17, 'h4', 7),
                  h['\u0275\u0275text'](18),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](19, '\n          '),
                  h['\u0275\u0275elementStart'](20, 'p', 8),
                  h['\u0275\u0275text'](21),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](22, '\n        '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](23, '\n        '),
                  h['\u0275\u0275text'](24, '\n      '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](25, '\n      '),
                  h['\u0275\u0275text'](26, '\n    '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](27, '\n    '),
                  h['\u0275\u0275text'](28, '\n  '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](29, '\n  '),
                  h['\u0275\u0275text'](30, '\n'),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](31, '\n'),
                  h['\u0275\u0275text'](32, '\n\n'),
                  h['\u0275\u0275text'](33, '\n'),
                  h['\u0275\u0275elementStart'](34, 'div', 9),
                  h['\u0275\u0275text'](35, '\n  '),
                  h['\u0275\u0275elementStart'](36, 'div', 3),
                  h['\u0275\u0275text'](37, '\n    '),
                  h['\u0275\u0275elementStart'](38, 'div', 4),
                  h['\u0275\u0275text'](39, '\n      '),
                  h['\u0275\u0275elementStart'](40, 'div', 10),
                  h['\u0275\u0275text'](41, '\n        '),
                  h['\u0275\u0275elementStart'](42, 'span', 11),
                  h['\u0275\u0275text'](43, 'places'),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](44, '\n        '),
                  h['\u0275\u0275elementStart'](45, 'h2', 12),
                  h['\u0275\u0275text'](46),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](47, '\n      '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](48, '\n      '),
                  h['\u0275\u0275elementStart'](49, 'div', 13),
                  h['\u0275\u0275text'](50, '\n        '),
                  h['\u0275\u0275text'](51, '\n      '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](52, '\n    '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](53, '\n    '),
                  h['\u0275\u0275elementStart'](54, 'div', 14),
                  h['\u0275\u0275text'](55, '\n      '),
                  h['\u0275\u0275elementStart'](56, 'div', 15),
                  h['\u0275\u0275text'](57, '\n        '),
                  h['\u0275\u0275template'](58, F, 19, 4, 'div', 16),
                  h['\u0275\u0275pipe'](59, 'paginate'),
                  h['\u0275\u0275text'](60, '\n        '),
                  h['\u0275\u0275text'](61, '\n      '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](62, '\n      '),
                  h['\u0275\u0275text'](63, '\n    '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](64, '\n  '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](65, '\n  '),
                  h['\u0275\u0275elementStart'](66, 'div', 3),
                  h['\u0275\u0275text'](67, '\n    '),
                  h['\u0275\u0275elementStart'](68, 'div', 4),
                  h['\u0275\u0275text'](69, '\n      '),
                  h['\u0275\u0275elementStart'](70, 'div', 17),
                  h['\u0275\u0275text'](71, '\n        '),
                  h['\u0275\u0275template'](72, L, 4, 0, 'div', 18),
                  h['\u0275\u0275text'](73, '\n      '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](74, '\n    '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](75, '\n  '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](76, '\n'),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](77, '\n\n'),
                  h['\u0275\u0275text'](78, '\n'),
                  h['\u0275\u0275elementStart'](79, 'section', 19),
                  h['\u0275\u0275text'](80, '\n  '),
                  h['\u0275\u0275elementStart'](81, 'div', 3),
                  h['\u0275\u0275text'](82, '\n    '),
                  h['\u0275\u0275elementStart'](83, 'div', 4),
                  h['\u0275\u0275text'](84, '\n      '),
                  h['\u0275\u0275elementStart'](85, 'div', 20),
                  h['\u0275\u0275text'](86, '\n        '),
                  h['\u0275\u0275elementStart'](87, 'div', 21),
                  h['\u0275\u0275text'](88, '\n          '),
                  h['\u0275\u0275elementStart'](89, 'h2', 12),
                  h['\u0275\u0275text'](90),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](91, '\n          '),
                  h['\u0275\u0275elementStart'](92, 'form', 22),
                  h['\u0275\u0275text'](93, '\n            '),
                  h['\u0275\u0275element'](94, 'input', 23),
                  h['\u0275\u0275text'](95, '\n            '),
                  h['\u0275\u0275elementStart'](96, 'button', 24),
                  h['\u0275\u0275element'](97, 'i', 25),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](98, '\n          '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](99, '\n        '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](100, '\n        '),
                  h['\u0275\u0275text'](101, '\n        '),
                  h['\u0275\u0275elementStart'](102, 'div', 26),
                  h['\u0275\u0275text'](103, '\n          '),
                  h['\u0275\u0275elementStart'](104, 'div', 27),
                  h['\u0275\u0275text'](105, '\n            '),
                  h['\u0275\u0275elementStart'](106, 'h2', 12),
                  h['\u0275\u0275text'](107, 'Search by Category'),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](108, '\n          '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](109, '\n\n          '),
                  h['\u0275\u0275elementStart'](110, 'div', 28),
                  h['\u0275\u0275text'](111, '\n            '),
                  h['\u0275\u0275elementStart'](112, 'span', 29),
                  h['\u0275\u0275elementStart'](113, 'a', 30),
                  h['\u0275\u0275text'](114, 'All'),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](115, '\n            '),
                  h['\u0275\u0275text'](116, '\n          '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](117, '\n        '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](118, '\n        '),
                  h['\u0275\u0275text'](119, '\n      '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](120, '\n    '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](121, '\n  '),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](122, '\n'),
                  h['\u0275\u0275elementEnd'](),
                  h['\u0275\u0275text'](123, '\n')),
                  2 & t &&
                    (h['\u0275\u0275advance'](5),
                    h['\u0275\u0275property'](
                      'src',
                      null == e.data ? null : e.data.photos[0],
                      h['\u0275\u0275sanitizeUrl']
                    ),
                    h['\u0275\u0275advance'](13),
                    h['\u0275\u0275textInterpolate'](e.data.slug),
                    h['\u0275\u0275advance'](3),
                    h['\u0275\u0275textInterpolate'](e.data.description),
                    h['\u0275\u0275advance'](25),
                    h['\u0275\u0275textInterpolate1']('all ', e.data.name, ''),
                    h['\u0275\u0275advance'](12),
                    h['\u0275\u0275property'](
                      'ngForOf',
                      h['\u0275\u0275pipeBind2'](59, 7, e.filteredRes, h['\u0275\u0275pureFunction1'](10, T, e.p))
                    ),
                    h['\u0275\u0275advance'](14),
                    h['\u0275\u0275property']('ngIf', (null == e.filteredRes ? null : e.filteredRes.length) > 3),
                    h['\u0275\u0275advance'](18),
                    h['\u0275\u0275textInterpolate1']('Browse ', e.data.name, ''));
              },
              directives: [a.m, a.n, S['\u0275angular_packages_forms_forms_y'], S.NgControlStatusGroup, S.NgForm, f.c],
              pipes: [f.b],
              styles: [
                '.bg-img[_ngcontent-%COMP%]{margin-top:-120px}.bg-img[_ngcontent-%COMP%], .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:200px}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-200px;z-index:1;text-align:left}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.category-btn[_ngcontent-%COMP%]{display:inline-block;margin:3px}.post__content[_ngcontent-%COMP%]{background-color:transparent}',
              ],
            })),
            t
          );
        })(),
        A = (() => {
          class t {
            constructor(t) {
              this.eventService = t;
            }
            resolve(t, e) {
              return this.eventService.getActivityDetail(t.params.slug);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(h['\u0275\u0275inject'](l.a));
            }),
            (t.ɵprov = h['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })();
      var R = n('uNBX'),
        U = n('n79M'),
        N = n('8crT'),
        B = n('pxjI'),
        D = n('j60G'),
        H = n('1/BS');
      const Q = function (t) {
        return ['/what-to-do/activity', t];
      };
      function G(t, e) {
        if (
          (1 & t &&
            (h['\u0275\u0275elementStart'](0, 'div', 13),
            h['\u0275\u0275text'](1, '\n          '),
            h['\u0275\u0275elementStart'](2, 'a', 14),
            h['\u0275\u0275text'](3, '\n            '),
            h['\u0275\u0275elementStart'](4, 'div', 15),
            h['\u0275\u0275text'](5, '\n              '),
            h['\u0275\u0275element'](6, 'img', 16),
            h['\u0275\u0275text'](7, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](8, '\n            '),
            h['\u0275\u0275text'](9, '\n            '),
            h['\u0275\u0275elementStart'](10, 'div', 17),
            h['\u0275\u0275text'](11, '\n              '),
            h['\u0275\u0275elementStart'](12, 'h4', 18),
            h['\u0275\u0275text'](13),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](14, '\n              '),
            h['\u0275\u0275text'](15, '\n              '),
            h['\u0275\u0275text'](16, '\n              '),
            h['\u0275\u0275text'](17, '\n\n              '),
            h['\u0275\u0275text'](18, '\n\n              '),
            h['\u0275\u0275elementStart'](19, 'p', 19),
            h['\u0275\u0275text'](20),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](21, '\n            '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](22, '\n            '),
            h['\u0275\u0275text'](23, '\n          '),
            h['\u0275\u0275elementEnd'](),
            h['\u0275\u0275text'](24, '\n        '),
            h['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          h['\u0275\u0275advance'](2),
            h['\u0275\u0275property']('routerLink', h['\u0275\u0275pureFunction1'](4, Q, t.slug)),
            h['\u0275\u0275advance'](4),
            h['\u0275\u0275property']('src', t.thumbnail, h['\u0275\u0275sanitizeUrl']),
            h['\u0275\u0275advance'](7),
            h['\u0275\u0275textInterpolate'](t.name),
            h['\u0275\u0275advance'](7),
            h['\u0275\u0275textInterpolate1']('\n                ', t.description, '\n              ');
        }
      }
      const V = [
        {
          path: '',
          component: (() => {
            class t {
              constructor(t, e) {
                (this.homeService = t),
                  (this.router = e),
                  (this.activities = []),
                  (this.isLoading = !0),
                  (this.images = [R.a, U.a, N.a, B.a, D.a, H.a]);
              }
              getActivities() {
                this.homeService
                  .getActivities('isFeatured=true&pageSize=6')
                  .pipe(
                    Object(c.finalize)(() => {
                      this.isLoading = !1;
                    })
                  )
                  .subscribe((t) => {
                    this.activities = t;
                  });
              }
              ngOnInit() {
                window.scrollTo({ top: 0, behavior: 'smooth' }), this.loadScript(), this.getActivities();
              }
              getRatingStars(t) {
                return (parseFloat(t) / 5) * 100 + '%';
              }
              loadScript() {
                let t = document.body,
                  e = document.createElement('script');
                (e.innerHTML = ''),
                  (e.src = '../../assets/js/where-to-go.js'),
                  (e.async = !0),
                  (e.defer = !0),
                  t.appendChild(e);
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(h['\u0275\u0275directiveInject'](s.a), h['\u0275\u0275directiveInject'](i.d));
              }),
              (t.ɵcmp = h['\u0275\u0275defineComponent']({
                type: t,
                selectors: [['app-what-to-do']],
                decls: 51,
                vars: 3,
                consts: [
                  ['id', 'page-title', 1, 'page-title', 'page-title-layout4', 'text-center', 'bg-overlay', 'slider'],
                  [1, 'bg-img'],
                  ['src', 'assets/images/backgrounds/what-to-doo.png', 'alt', 'background'],
                  [1, 'container'],
                  [1, 'row'],
                  [1, 'col-sm-12', 'col-md-12', 'col-lg-8', 'page'],
                  [1, 'slide__content'],
                  [1, 'slide__title', 3, 'translate'],
                  [1, 'slide__desc'],
                  [1, 'container-fluid'],
                  [1, 'masonry-wrapper', 'masonry-style-2'],
                  ['data-column-width', '.col-md-4', 1, 'blog-container'],
                  ['class', 'col-md-4 post-item', 4, 'ngFor', 'ngForOf'],
                  [1, 'col-md-4', 'post-item'],
                  [3, 'routerLink'],
                  [1, 'post__img'],
                  [
                    'onerror',
                    "this.onerror=null;this.src='assets/images/wheretogo/cities.png';",
                    'alt',
                    'post img',
                    3,
                    'src',
                  ],
                  [1, 'post__content', 2, 'height', '150px'],
                  [1, 'post__title'],
                  [1, 'post__desc'],
                ],
                template: function (t, e) {
                  1 & t &&
                    (h['\u0275\u0275text'](0, '\n'),
                    h['\u0275\u0275elementStart'](1, 'section', 0),
                    h['\u0275\u0275text'](2, '\n  '),
                    h['\u0275\u0275elementStart'](3, 'div', 1),
                    h['\u0275\u0275element'](4, 'img', 2),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](5, '\n  '),
                    h['\u0275\u0275elementStart'](6, 'div', 3),
                    h['\u0275\u0275text'](7, '\n    '),
                    h['\u0275\u0275elementStart'](8, 'div', 4),
                    h['\u0275\u0275text'](9, '\n      '),
                    h['\u0275\u0275elementStart'](10, 'div', 5),
                    h['\u0275\u0275text'](11, '\n        '),
                    h['\u0275\u0275elementStart'](12, 'div', 6),
                    h['\u0275\u0275text'](13, '\n          '),
                    h['\u0275\u0275elementStart'](14, 'h2', 7),
                    h['\u0275\u0275text'](15, 'what to do'),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](16, '\n          '),
                    h['\u0275\u0275elementStart'](17, 'p', 8),
                    h['\u0275\u0275text'](
                      18,
                      '\n            A rush of adrenaline, a relaxing retreat, a culinary awakening \u2014\n            '
                    ),
                    h['\u0275\u0275element'](19, 'br'),
                    h['\u0275\u0275text'](20, '\n            no matter what you seek, it\u2019s all here.\n          '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](21, '\n          '),
                    h['\u0275\u0275text'](22, '\n        '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](23, '\n        '),
                    h['\u0275\u0275text'](24, '\n      '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](25, '\n      '),
                    h['\u0275\u0275text'](26, '\n    '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](27, '\n    '),
                    h['\u0275\u0275text'](28, '\n  '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](29, '\n  '),
                    h['\u0275\u0275text'](30, '\n'),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](31, '\n'),
                    h['\u0275\u0275text'](32, '\n\n'),
                    h['\u0275\u0275text'](33, '\n'),
                    h['\u0275\u0275elementStart'](34, 'div', 9),
                    h['\u0275\u0275text'](35, '\n  '),
                    h['\u0275\u0275elementStart'](36, 'div', 3),
                    h['\u0275\u0275text'](37, '\n    '),
                    h['\u0275\u0275elementStart'](38, 'div', 10),
                    h['\u0275\u0275text'](39, '\n      '),
                    h['\u0275\u0275elementStart'](40, 'div', 11),
                    h['\u0275\u0275text'](41, '\n        '),
                    h['\u0275\u0275template'](42, G, 25, 6, 'div', 12),
                    h['\u0275\u0275text'](43, '\n        '),
                    h['\u0275\u0275text'](44, '\n\n        '),
                    h['\u0275\u0275text'](45, '\n      '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](46, '\n      '),
                    h['\u0275\u0275text'](47, '\n    '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](48, '\n  '),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](49, '\n'),
                    h['\u0275\u0275elementEnd'](),
                    h['\u0275\u0275text'](50, '\n')),
                    2 & t &&
                      (h['\u0275\u0275advance'](14),
                      h['\u0275\u0275property']('translate', 'WHATTODOHEADING'),
                      h['\u0275\u0275advance'](28),
                      h['\u0275\u0275property']('ngForOf', e.activities)('ngForOf', e.images));
                },
                directives: [a.m, i.f],
                styles: [
                  '.bg-img[_ngcontent-%COMP%]{top:-120px}.bg-overlay[_ngcontent-%COMP%]{background-size:cover}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}',
                ],
              })),
              t
            );
          })(),
        },
        { path: 'activity/:slug', component: j, resolve: { category: A } },
        { path: 'activity/:activity/location/:slug', component: o.a, resolve: { location: r.a } },
        { path: 'activity/:slug/listing', component: z, resolve: { activity: A } },
      ];
      let $ = (() => {
        class t {}
        return (
          (t.ɵmod = h['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = h['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[i.g.forChild(V)], i.g],
          })),
          t
        );
      })();
      var q = n('pxUr'),
        W = n('a6Df'),
        X = n('1207');
      let K = (() => {
        class t {}
        return (
          (t.ɵmod = h['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = h['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[a.c, W.a, $, X.a, q.a.forRoot({ apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA' })]],
          })),
          t
        );
      })();
    },
  },
]);
