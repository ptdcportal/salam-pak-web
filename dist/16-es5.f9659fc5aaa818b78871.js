function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(t, a.key, a);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    Uo3f: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'WhatToDoModule', function () {
          return nt;
        });
      var a = n('ofXK'),
        i = n('tyNb'),
        r = n('SzZM'),
        o = n('NO7T'),
        l = n('fTLw'),
        s = n('nr5L'),
        c = n('44p1'),
        d = n('H9TL'),
        m = n('jK7q'),
        x = n('XTS8'),
        g = n('0yyg'),
        p = n('CQy9'),
        u = n('PSy5'),
        v = n('fXoL'),
        h = n('eSVu'),
        f = n('3Pt+'),
        S = n('oOf3'),
        y = ['slickModal'],
        _ = function (t, e) {
          return ['/what-to-do/activity', t, 'location', e];
        };
      function b(t, e) {
        if (
          (1 & t &&
            (v['\u0275\u0275elementStart'](0, 'div', 41),
            v['\u0275\u0275text'](1, '\n          '),
            v['\u0275\u0275text'](2, '\n          '),
            v['\u0275\u0275text'](3, '\n          '),
            v['\u0275\u0275elementStart'](4, 'a', 42),
            v['\u0275\u0275elementStart'](5, 'div', 43),
            v['\u0275\u0275text'](6, '\n              '),
            v['\u0275\u0275element'](7, 'img', 44),
            v['\u0275\u0275text'](8, '\n              '),
            v['\u0275\u0275text'](9, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](10, '\n            '),
            v['\u0275\u0275text'](11, '\n            '),
            v['\u0275\u0275elementStart'](12, 'div', 45),
            v['\u0275\u0275text'](13, '\n              '),
            v['\u0275\u0275elementStart'](14, 'h4', 46),
            v['\u0275\u0275text'](15),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](16, '\n              '),
            v['\u0275\u0275elementStart'](17, 'p', 47),
            v['\u0275\u0275text'](18),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](19, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](20, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](21, '\n        '),
            v['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit,
            a = v['\u0275\u0275nextContext']();
          v['\u0275\u0275advance'](4),
            v['\u0275\u0275propertyInterpolate2'](
              'href',
              '/what-to-do',
              a.category.url,
              '/location/',
              n.slug,
              '',
              v['\u0275\u0275sanitizeUrl']
            ),
            v['\u0275\u0275property']('routerLink', v['\u0275\u0275pureFunction2'](6, _, a.category.slug, n.slug)),
            v['\u0275\u0275advance'](3),
            v['\u0275\u0275property']('src', n.thumbnail || a.defaultImg, v['\u0275\u0275sanitizeUrl']),
            v['\u0275\u0275advance'](8),
            v['\u0275\u0275textInterpolate'](n.alias),
            v['\u0275\u0275advance'](3),
            v['\u0275\u0275textInterpolate1']('\n                ', n.description, '\n              ');
        }
      }
      function E(t, e) {
        if (1 & t) {
          var n = v['\u0275\u0275getCurrentView']();
          v['\u0275\u0275elementStart'](0, 'div'),
            v['\u0275\u0275text'](1, '\n          '),
            v['\u0275\u0275elementStart'](2, 'pagination-controls', 48),
            v['\u0275\u0275listener']('pageChange', function (t) {
              return v['\u0275\u0275restoreView'](n), (v['\u0275\u0275nextContext']().p = t);
            }),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](3, '\n        '),
            v['\u0275\u0275elementEnd']();
        }
      }
      function C(t, e) {
        if (
          (1 & t &&
            (v['\u0275\u0275elementStart'](0, 'div', 49),
            v['\u0275\u0275text'](1, '\n            '),
            v['\u0275\u0275elementStart'](2, 'a', 22),
            v['\u0275\u0275text'](3, '\n              '),
            v['\u0275\u0275elementStart'](4, 'div', 50),
            v['\u0275\u0275text'](5, '\n                '),
            v['\u0275\u0275element'](6, 'img', 51),
            v['\u0275\u0275text'](7, '\n              '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](8, '\n              '),
            v['\u0275\u0275elementStart'](9, 'div', 52),
            v['\u0275\u0275text'](10, '\n                '),
            v['\u0275\u0275elementStart'](11, 'h6', 53),
            v['\u0275\u0275text'](12),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](13, '\n                '),
            v['\u0275\u0275text'](14, '\n                '),
            v['\u0275\u0275text'](15, '\n                '),
            v['\u0275\u0275text'](16, '\n              '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](17, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](18, '\n          '),
            v['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit,
            a = v['\u0275\u0275nextContext']();
          v['\u0275\u0275advance'](2),
            v['\u0275\u0275property']('routerLink', v['\u0275\u0275pureFunction2'](3, _, a.category.slug, n.slug)),
            v['\u0275\u0275advance'](4),
            v['\u0275\u0275property']('src', n.thumbnail, v['\u0275\u0275sanitizeUrl']),
            v['\u0275\u0275advance'](6),
            v['\u0275\u0275textInterpolate'](n.alias);
        }
      }
      var w = function (t) {
        return ['/what-to-do/activity', t];
      };
      function k(t, e) {
        if (
          (1 & t &&
            (v['\u0275\u0275elementStart'](0, 'span', 54),
            v['\u0275\u0275text'](1, '\n              '),
            v['\u0275\u0275text'](2, '\n              '),
            v['\u0275\u0275elementStart'](3, 'a', 39),
            v['\u0275\u0275text'](4),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit;
          v['\u0275\u0275advance'](3),
            v['\u0275\u0275property']('routerLink', v['\u0275\u0275pureFunction1'](2, w, n.slug)),
            v['\u0275\u0275advance'](1),
            v['\u0275\u0275textInterpolate'](n.name);
        }
      }
      var O,
        P = function (t) {
          return { itemsPerPage: 3, currentPage: t };
        },
        I = function (t) {
          return ['/what-to-do/activity', t, 'listing'];
        },
        M = function () {
          return ['/what-to-do'];
        },
        j = [
          { breakpoint: 1920, settings: { slidesToShow: 4 } },
          { breakpoint: 1042, settings: { slidesToShow: 3 } },
          { breakpoint: 770, settings: { slidesToShow: 2 } },
          { breakpoint: 600, settings: { slidesToShow: 1.5 } },
        ],
        F =
          (((O = (function () {
            function t(e, n, a, i) {
              var r = this;
              _classCallCheck(this, t),
                (this.route = e),
                (this.shellService = n),
                (this.eventService = a),
                (this.homeService = i),
                (this.defaultImg = x.a),
                (this.p = 1),
                (this.categories = []),
                (this.slideConfig = { slidesToShow: 4.5, slidesToScroll: 4, arrows: !0, infinite: !1, responsive: j }),
                (this.images = [d.a, m.a, x.a, g.a, p.a, d.a]),
                this.route.params.subscribe(function (t) {
                  r.category = r.route.snapshot.data.category;
                });
            }
            return (
              _createClass(t, [
                {
                  key: 'getLocations',
                  value: function () {
                    var t = this;
                    this.eventService
                      .getActivityLocations(this.category._id)
                      .pipe(
                        Object(c.finalize)(function () {
                          t.isLoading = !1;
                        })
                      )
                      .subscribe(function (e) {
                        (t.locations = e.slice(0, 6)), t.locations.filter(function (t) {});
                      });
                  },
                },
                {
                  key: 'getFilters',
                  value: function () {
                    var t = this;
                    this.shellService.currentMessage.subscribe(function (e) {
                      (t.categories = e.activities), console.log('this.categories', t.categories);
                    });
                  },
                },
                {
                  key: 'ngOnInit',
                  value: function () {
                    window.scrollTo({ top: 0, behavior: 'smooth' }), this.getLocations(), this.getFilters();
                  },
                },
                {
                  key: 'getRatingStars',
                  value: function (t) {
                    return (parseFloat(t) / 5) * 100 + '%';
                  },
                },
                {
                  key: 'loadScript',
                  value: function () {
                    var t = document.body,
                      e = document.createElement('script');
                    (e.innerHTML = ''),
                      (e.src = '../../assets/js/where-to-go.js'),
                      (e.async = !0),
                      (e.defer = !0),
                      t.appendChild(e);
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || O)(
              v['\u0275\u0275directiveInject'](i.a),
              v['\u0275\u0275directiveInject'](u.a),
              v['\u0275\u0275directiveInject'](l.a),
              v['\u0275\u0275directiveInject'](s.a)
            );
          }),
          (O.ɵcmp = v['\u0275\u0275defineComponent']({
            type: O,
            selectors: [['app-category']],
            viewQuery: function (t, e) {
              var n;
              1 & t && v['\u0275\u0275viewQuery'](y, !0),
                2 & t && v['\u0275\u0275queryRefresh']((n = v['\u0275\u0275loadQuery']())) && (e.slickModal = n.first);
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
                (v['\u0275\u0275text'](0, '\n'),
                v['\u0275\u0275elementStart'](1, 'section', 0),
                v['\u0275\u0275text'](2, '\n  '),
                v['\u0275\u0275elementStart'](3, 'div', 1),
                v['\u0275\u0275text'](4, '\n    '),
                v['\u0275\u0275text'](5, '\n    '),
                v['\u0275\u0275element'](6, 'img', 2),
                v['\u0275\u0275text'](7, '\n    '),
                v['\u0275\u0275text'](8, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](9, '\n  '),
                v['\u0275\u0275elementStart'](10, 'div', 3),
                v['\u0275\u0275text'](11, '\n    '),
                v['\u0275\u0275elementStart'](12, 'div', 4),
                v['\u0275\u0275text'](13, '\n      '),
                v['\u0275\u0275elementStart'](14, 'div', 5),
                v['\u0275\u0275text'](15, '\n        '),
                v['\u0275\u0275elementStart'](16, 'div', 6),
                v['\u0275\u0275text'](17, '\n          '),
                v['\u0275\u0275elementStart'](18, 'h2', 7),
                v['\u0275\u0275text'](19),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](20, '\n          '),
                v['\u0275\u0275elementStart'](21, 'p', 8),
                v['\u0275\u0275text'](22),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](23, '\n          '),
                v['\u0275\u0275text'](24, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](25, '\n        '),
                v['\u0275\u0275text'](26, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](27, '\n      '),
                v['\u0275\u0275text'](28, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](29, '\n    '),
                v['\u0275\u0275text'](30, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](31, '\n  '),
                v['\u0275\u0275text'](32, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](33, '\n'),
                v['\u0275\u0275text'](34, '\n'),
                v['\u0275\u0275text'](35, '\n\n'),
                v['\u0275\u0275text'](36, '\n'),
                v['\u0275\u0275elementStart'](37, 'div', 9),
                v['\u0275\u0275text'](38, '\n  '),
                v['\u0275\u0275elementStart'](39, 'div', 3),
                v['\u0275\u0275text'](40, '\n    '),
                v['\u0275\u0275elementStart'](41, 'div', 4),
                v['\u0275\u0275text'](42, '\n      '),
                v['\u0275\u0275elementStart'](43, 'div', 10),
                v['\u0275\u0275text'](44, '\n        '),
                v['\u0275\u0275elementStart'](45, 'span', 11),
                v['\u0275\u0275text'](46),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](47, '\n        '),
                v['\u0275\u0275elementStart'](48, 'h2', 12),
                v['\u0275\u0275text'](49),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](50, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](51, '\n      '),
                v['\u0275\u0275text'](52, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](53, '\n    '),
                v['\u0275\u0275elementStart'](54, 'div', 13),
                v['\u0275\u0275text'](55, '\n      '),
                v['\u0275\u0275elementStart'](56, 'div', 14),
                v['\u0275\u0275text'](57, '\n        '),
                v['\u0275\u0275template'](58, b, 22, 9, 'div', 15),
                v['\u0275\u0275pipe'](59, 'paginate'),
                v['\u0275\u0275text'](60, '\n        '),
                v['\u0275\u0275text'](61, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](62, '\n      '),
                v['\u0275\u0275text'](63, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](64, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](65, '\n  '),
                v['\u0275\u0275elementStart'](66, 'div', 3),
                v['\u0275\u0275text'](67, '\n    '),
                v['\u0275\u0275elementStart'](68, 'div', 4),
                v['\u0275\u0275text'](69, '\n      '),
                v['\u0275\u0275elementStart'](70, 'div', 16),
                v['\u0275\u0275text'](71, '\n        '),
                v['\u0275\u0275template'](72, E, 4, 0, 'div', 17),
                v['\u0275\u0275text'](73, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](74, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](75, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](76, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](77, '\n\n'),
                v['\u0275\u0275text'](78, '\n'),
                v['\u0275\u0275elementStart'](79, 'section', 18),
                v['\u0275\u0275text'](80, '\n  '),
                v['\u0275\u0275elementStart'](81, 'div', 3),
                v['\u0275\u0275text'](82, '\n    '),
                v['\u0275\u0275elementStart'](83, 'div', 4),
                v['\u0275\u0275text'](84, '\n      '),
                v['\u0275\u0275elementStart'](85, 'div', 19),
                v['\u0275\u0275text'](86, '\n        '),
                v['\u0275\u0275elementStart'](87, 'h2', 20),
                v['\u0275\u0275text'](88),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](89, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](90, '\n\n      '),
                v['\u0275\u0275elementStart'](91, 'div', 21),
                v['\u0275\u0275text'](92, '\n        '),
                v['\u0275\u0275elementStart'](93, 'a', 22),
                v['\u0275\u0275text'](94, 'show all '),
                v['\u0275\u0275element'](95, 'img', 23),
                v['\u0275\u0275text'](96, '\n          '),
                v['\u0275\u0275text'](97, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](98, '\n        '),
                v['\u0275\u0275text'](99, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](100, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](101, '\n    '),
                v['\u0275\u0275text'](102, '\n    '),
                v['\u0275\u0275elementStart'](103, 'div', 4),
                v['\u0275\u0275text'](104, '\n      '),
                v['\u0275\u0275elementStart'](105, 'div', 24),
                v['\u0275\u0275text'](106, '\n        '),
                v['\u0275\u0275elementStart'](107, 'ngx-slick-carousel', 25, 26),
                v['\u0275\u0275text'](109, '\n          '),
                v['\u0275\u0275template'](110, C, 19, 6, 'div', 27),
                v['\u0275\u0275text'](111, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](112, '\n        '),
                v['\u0275\u0275text'](113, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](114, '\n      '),
                v['\u0275\u0275text'](115, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](116, '\n    '),
                v['\u0275\u0275text'](117, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](118, '\n  '),
                v['\u0275\u0275text'](119, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](120, '\n'),
                v['\u0275\u0275text'](121, '\n\n'),
                v['\u0275\u0275text'](122, '\n'),
                v['\u0275\u0275elementStart'](123, 'section', 28),
                v['\u0275\u0275text'](124, '\n  '),
                v['\u0275\u0275elementStart'](125, 'div', 3),
                v['\u0275\u0275text'](126, '\n    '),
                v['\u0275\u0275elementStart'](127, 'div', 4),
                v['\u0275\u0275text'](128, '\n      '),
                v['\u0275\u0275elementStart'](129, 'div', 29),
                v['\u0275\u0275text'](130, '\n        '),
                v['\u0275\u0275elementStart'](131, 'div', 30),
                v['\u0275\u0275text'](132, '\n          '),
                v['\u0275\u0275elementStart'](133, 'h2', 12),
                v['\u0275\u0275text'](134),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](135, '\n          '),
                v['\u0275\u0275elementStart'](136, 'form', 31),
                v['\u0275\u0275text'](137, '\n            '),
                v['\u0275\u0275element'](138, 'input', 32),
                v['\u0275\u0275text'](139, '\n            '),
                v['\u0275\u0275elementStart'](140, 'button', 33),
                v['\u0275\u0275element'](141, 'i', 34),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](142, '\n          '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](143, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](144, '\n        '),
                v['\u0275\u0275text'](145, '\n        '),
                v['\u0275\u0275elementStart'](146, 'div', 35),
                v['\u0275\u0275text'](147, '\n          '),
                v['\u0275\u0275elementStart'](148, 'div', 36),
                v['\u0275\u0275text'](149, '\n            '),
                v['\u0275\u0275elementStart'](150, 'h2', 12),
                v['\u0275\u0275text'](151, 'Search by Category'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](152, '\n          '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](153, '\n          '),
                v['\u0275\u0275elementStart'](154, 'div', 37),
                v['\u0275\u0275text'](155, '\n            '),
                v['\u0275\u0275elementStart'](156, 'span', 38),
                v['\u0275\u0275elementStart'](157, 'a', 39),
                v['\u0275\u0275text'](158, 'All'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](159, '\n\n            '),
                v['\u0275\u0275template'](160, k, 5, 4, 'span', 40),
                v['\u0275\u0275text'](161, '\n          '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](162, '\n          '),
                v['\u0275\u0275text'](163, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](164, '\n        '),
                v['\u0275\u0275text'](165, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](166, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](167, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](168, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](169, '\n')),
                2 & t &&
                  (v['\u0275\u0275advance'](6),
                  v['\u0275\u0275property']('src', e.category.photos[0], v['\u0275\u0275sanitizeUrl']),
                  v['\u0275\u0275advance'](13),
                  v['\u0275\u0275textInterpolate'](e.category.name),
                  v['\u0275\u0275advance'](3),
                  v['\u0275\u0275textInterpolate'](e.category.description),
                  v['\u0275\u0275advance'](24),
                  v['\u0275\u0275textInterpolate'](e.category.name),
                  v['\u0275\u0275advance'](3),
                  v['\u0275\u0275textInterpolate1']('featured ', e.category.name, ' events'),
                  v['\u0275\u0275advance'](9),
                  v['\u0275\u0275property'](
                    'ngForOf',
                    v['\u0275\u0275pipeBind2'](59, 15, e.locations, v['\u0275\u0275pureFunction1'](18, P, e.p))
                  ),
                  v['\u0275\u0275advance'](14),
                  v['\u0275\u0275property']('ngIf', (null == e.locations ? null : e.locations.length) > 3),
                  v['\u0275\u0275advance'](16),
                  v['\u0275\u0275textInterpolate1']('all ', e.category.name, ''),
                  v['\u0275\u0275advance'](5),
                  v['\u0275\u0275property']('routerLink', v['\u0275\u0275pureFunction1'](20, I, e.category.slug)),
                  v['\u0275\u0275advance'](14),
                  v['\u0275\u0275property']('config', e.slideConfig),
                  v['\u0275\u0275advance'](3),
                  v['\u0275\u0275property']('ngForOf', e.locations)('ngForOf', e.images),
                  v['\u0275\u0275advance'](24),
                  v['\u0275\u0275textInterpolate1']('Browse ', e.category.slug, ''),
                  v['\u0275\u0275advance'](23),
                  v['\u0275\u0275property']('routerLink', v['\u0275\u0275pureFunction0'](22, M)),
                  v['\u0275\u0275advance'](3),
                  v['\u0275\u0275property']('ngForOf', e.categories));
            },
            directives: [
              a.m,
              a.n,
              i.f,
              h.a,
              f['\u0275angular_packages_forms_forms_y'],
              f.NgControlStatusGroup,
              f.NgForm,
              S.c,
              h.c,
            ],
            pipes: [S.b],
            styles: [
              '.bg-img[_ngcontent-%COMP%]{margin-top:-120px}.bg-img[_ngcontent-%COMP%], .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:200px}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-200px;z-index:1;text-align:left}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.category-btn[_ngcontent-%COMP%]{display:inline-block;margin:3px}.post__content[_ngcontent-%COMP%]{background-color:transparent}.blog-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.blog-container[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]{border:1px solid #e6dbdb;border-radius:18px;max-width:32%;box-shadow:0 3px 10px rgba(0,0,0,.2)}',
            ],
          })),
          O);
      function L(t, e) {
        if (
          (1 & t &&
            (v['\u0275\u0275elementStart'](0, 'div', 31),
            v['\u0275\u0275text'](1, '\n          '),
            v['\u0275\u0275elementStart'](2, 'a', 32),
            v['\u0275\u0275text'](3, '\n            '),
            v['\u0275\u0275elementStart'](4, 'div', 33),
            v['\u0275\u0275text'](5, '\n              '),
            v['\u0275\u0275element'](6, 'img', 34),
            v['\u0275\u0275text'](7, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](8, '\n            '),
            v['\u0275\u0275text'](9, '\n            '),
            v['\u0275\u0275elementStart'](10, 'div', 35),
            v['\u0275\u0275text'](11, '\n              '),
            v['\u0275\u0275elementStart'](12, 'h4', 36),
            v['\u0275\u0275text'](13),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](14, '\n              '),
            v['\u0275\u0275text'](15, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](16, '\n            '),
            v['\u0275\u0275text'](17, '\n          '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](18, '\n        '),
            v['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit,
            a = v['\u0275\u0275nextContext']();
          v['\u0275\u0275advance'](2),
            v['\u0275\u0275propertyInterpolate2'](
              'href',
              '/where-to-go/category/',
              a.data.slug,
              '/location/',
              n.slug,
              '',
              v['\u0275\u0275sanitizeUrl']
            ),
            v['\u0275\u0275advance'](4),
            v['\u0275\u0275property']('src', n.thumbnail, v['\u0275\u0275sanitizeUrl']),
            v['\u0275\u0275advance'](7),
            v['\u0275\u0275textInterpolate'](n.alias);
        }
      }
      function T(t, e) {
        if (1 & t) {
          var n = v['\u0275\u0275getCurrentView']();
          v['\u0275\u0275elementStart'](0, 'div'),
            v['\u0275\u0275text'](1, '\n          '),
            v['\u0275\u0275elementStart'](2, 'pagination-controls', 37),
            v['\u0275\u0275listener']('pageChange', function (t) {
              return v['\u0275\u0275restoreView'](n), (v['\u0275\u0275nextContext']().p = t);
            }),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](3, '\n        '),
            v['\u0275\u0275elementEnd']();
        }
      }
      var z,
        A,
        R = function (t) {
          return { itemsPerPage: 6, currentPage: t };
        },
        U =
          (((A = (function () {
            function t(e, n) {
              _classCallCheck(this, t),
                (this.route = e),
                (this.eventService = n),
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
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  },
                },
                {
                  key: 'getCategoryLocations',
                  value: function (t) {
                    var e = this;
                    this.eventService.getCategoryLocations(t).subscribe(function (t) {
                      e.filteredRes = t.filter(function (t) {
                        return (t.isFeatured = !0);
                      });
                    });
                  },
                },
                {
                  key: 'getLocationsListing',
                  value: function (t) {
                    var e = this;
                    this.eventService.getTrips(t).subscribe(function (t) {
                      e.filteredRes = t.filter(function (t) {
                        return (t.isFeatured = !0);
                      });
                    });
                  },
                },
                {
                  key: 'getActivityLocations',
                  value: function (t) {
                    var e = this;
                    this.eventService.getActivityLocations(t).subscribe(function (t) {
                      e.filteredRes = t.filter(function (t) {
                        return (t.isFeatured = !0);
                      });
                    });
                  },
                },
                {
                  key: 'getRatingStars',
                  value: function (t) {
                    return (parseFloat(t) / 5) * 100 + '%';
                  },
                },
                {
                  key: 'loadScript',
                  value: function () {
                    var t = document.body,
                      e = document.createElement('script');
                    (e.innerHTML = ''),
                      (e.src = '../../assets/js/where-to-go.js'),
                      (e.async = !0),
                      (e.defer = !0),
                      t.appendChild(e);
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || A)(v['\u0275\u0275directiveInject'](i.a), v['\u0275\u0275directiveInject'](l.a));
          }),
          (A.ɵcmp = v['\u0275\u0275defineComponent']({
            type: A,
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
                (v['\u0275\u0275text'](0, '\n'),
                v['\u0275\u0275elementStart'](1, 'section', 0),
                v['\u0275\u0275text'](2, '\n  '),
                v['\u0275\u0275elementStart'](3, 'div', 1),
                v['\u0275\u0275text'](4, '\n    '),
                v['\u0275\u0275element'](5, 'img', 2),
                v['\u0275\u0275text'](6, '\n    '),
                v['\u0275\u0275text'](7, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](8, '\n  '),
                v['\u0275\u0275elementStart'](9, 'div', 3),
                v['\u0275\u0275text'](10, '\n    '),
                v['\u0275\u0275elementStart'](11, 'div', 4),
                v['\u0275\u0275text'](12, '\n      '),
                v['\u0275\u0275elementStart'](13, 'div', 5),
                v['\u0275\u0275text'](14, '\n        '),
                v['\u0275\u0275elementStart'](15, 'div', 6),
                v['\u0275\u0275text'](16, '\n          '),
                v['\u0275\u0275elementStart'](17, 'h4', 7),
                v['\u0275\u0275text'](18),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](19, '\n          '),
                v['\u0275\u0275elementStart'](20, 'p', 8),
                v['\u0275\u0275text'](21),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](22, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](23, '\n        '),
                v['\u0275\u0275text'](24, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](25, '\n      '),
                v['\u0275\u0275text'](26, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](27, '\n    '),
                v['\u0275\u0275text'](28, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](29, '\n  '),
                v['\u0275\u0275text'](30, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](31, '\n'),
                v['\u0275\u0275text'](32, '\n\n'),
                v['\u0275\u0275text'](33, '\n'),
                v['\u0275\u0275elementStart'](34, 'div', 9),
                v['\u0275\u0275text'](35, '\n  '),
                v['\u0275\u0275elementStart'](36, 'div', 3),
                v['\u0275\u0275text'](37, '\n    '),
                v['\u0275\u0275elementStart'](38, 'div', 4),
                v['\u0275\u0275text'](39, '\n      '),
                v['\u0275\u0275elementStart'](40, 'div', 10),
                v['\u0275\u0275text'](41, '\n        '),
                v['\u0275\u0275elementStart'](42, 'span', 11),
                v['\u0275\u0275text'](43, 'places'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](44, '\n        '),
                v['\u0275\u0275elementStart'](45, 'h2', 12),
                v['\u0275\u0275text'](46),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](47, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](48, '\n      '),
                v['\u0275\u0275elementStart'](49, 'div', 13),
                v['\u0275\u0275text'](50, '\n        '),
                v['\u0275\u0275text'](51, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](52, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](53, '\n    '),
                v['\u0275\u0275elementStart'](54, 'div', 14),
                v['\u0275\u0275text'](55, '\n      '),
                v['\u0275\u0275elementStart'](56, 'div', 15),
                v['\u0275\u0275text'](57, '\n        '),
                v['\u0275\u0275template'](58, L, 19, 4, 'div', 16),
                v['\u0275\u0275pipe'](59, 'paginate'),
                v['\u0275\u0275text'](60, '\n        '),
                v['\u0275\u0275text'](61, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](62, '\n      '),
                v['\u0275\u0275text'](63, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](64, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](65, '\n  '),
                v['\u0275\u0275elementStart'](66, 'div', 3),
                v['\u0275\u0275text'](67, '\n    '),
                v['\u0275\u0275elementStart'](68, 'div', 4),
                v['\u0275\u0275text'](69, '\n      '),
                v['\u0275\u0275elementStart'](70, 'div', 17),
                v['\u0275\u0275text'](71, '\n        '),
                v['\u0275\u0275template'](72, T, 4, 0, 'div', 18),
                v['\u0275\u0275text'](73, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](74, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](75, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](76, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](77, '\n\n'),
                v['\u0275\u0275text'](78, '\n'),
                v['\u0275\u0275elementStart'](79, 'section', 19),
                v['\u0275\u0275text'](80, '\n  '),
                v['\u0275\u0275elementStart'](81, 'div', 3),
                v['\u0275\u0275text'](82, '\n    '),
                v['\u0275\u0275elementStart'](83, 'div', 4),
                v['\u0275\u0275text'](84, '\n      '),
                v['\u0275\u0275elementStart'](85, 'div', 20),
                v['\u0275\u0275text'](86, '\n        '),
                v['\u0275\u0275elementStart'](87, 'div', 21),
                v['\u0275\u0275text'](88, '\n          '),
                v['\u0275\u0275elementStart'](89, 'h2', 12),
                v['\u0275\u0275text'](90),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](91, '\n          '),
                v['\u0275\u0275elementStart'](92, 'form', 22),
                v['\u0275\u0275text'](93, '\n            '),
                v['\u0275\u0275element'](94, 'input', 23),
                v['\u0275\u0275text'](95, '\n            '),
                v['\u0275\u0275elementStart'](96, 'button', 24),
                v['\u0275\u0275element'](97, 'i', 25),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](98, '\n          '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](99, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](100, '\n        '),
                v['\u0275\u0275text'](101, '\n        '),
                v['\u0275\u0275elementStart'](102, 'div', 26),
                v['\u0275\u0275text'](103, '\n          '),
                v['\u0275\u0275elementStart'](104, 'div', 27),
                v['\u0275\u0275text'](105, '\n            '),
                v['\u0275\u0275elementStart'](106, 'h2', 12),
                v['\u0275\u0275text'](107, 'Search by Category'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](108, '\n          '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](109, '\n\n          '),
                v['\u0275\u0275elementStart'](110, 'div', 28),
                v['\u0275\u0275text'](111, '\n            '),
                v['\u0275\u0275elementStart'](112, 'span', 29),
                v['\u0275\u0275elementStart'](113, 'a', 30),
                v['\u0275\u0275text'](114, 'All'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](115, '\n            '),
                v['\u0275\u0275text'](116, '\n          '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](117, '\n        '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](118, '\n        '),
                v['\u0275\u0275text'](119, '\n      '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](120, '\n    '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](121, '\n  '),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](122, '\n'),
                v['\u0275\u0275elementEnd'](),
                v['\u0275\u0275text'](123, '\n')),
                2 & t &&
                  (v['\u0275\u0275advance'](5),
                  v['\u0275\u0275property'](
                    'src',
                    null == e.data ? null : e.data.photos[0],
                    v['\u0275\u0275sanitizeUrl']
                  ),
                  v['\u0275\u0275advance'](13),
                  v['\u0275\u0275textInterpolate'](e.data.slug),
                  v['\u0275\u0275advance'](3),
                  v['\u0275\u0275textInterpolate'](e.data.description),
                  v['\u0275\u0275advance'](25),
                  v['\u0275\u0275textInterpolate1']('all ', e.data.name, ''),
                  v['\u0275\u0275advance'](12),
                  v['\u0275\u0275property'](
                    'ngForOf',
                    v['\u0275\u0275pipeBind2'](59, 7, e.filteredRes, v['\u0275\u0275pureFunction1'](10, R, e.p))
                  ),
                  v['\u0275\u0275advance'](14),
                  v['\u0275\u0275property']('ngIf', (null == e.filteredRes ? null : e.filteredRes.length) > 3),
                  v['\u0275\u0275advance'](18),
                  v['\u0275\u0275textInterpolate1']('Browse ', e.data.name, ''));
            },
            directives: [a.m, a.n, f['\u0275angular_packages_forms_forms_y'], f.NgControlStatusGroup, f.NgForm, S.c],
            pipes: [S.b],
            styles: [
              '.bg-img[_ngcontent-%COMP%]{margin-top:-120px}.bg-img[_ngcontent-%COMP%], .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:200px}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-200px;z-index:1;text-align:left}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.category-btn[_ngcontent-%COMP%]{display:inline-block;margin:3px}.post__content[_ngcontent-%COMP%]{background-color:transparent}',
            ],
          })),
          A),
        N =
          (((z = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.eventService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'resolve',
                  value: function (t, e) {
                    return this.eventService.getActivityDetail(t.params.slug);
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || z)(v['\u0275\u0275inject'](l.a));
          }),
          (z.ɵprov = v['\u0275\u0275defineInjectable']({ token: z, factory: z.ɵfac, providedIn: 'root' })),
          z),
        B = n('uNBX'),
        D = n('n79M'),
        H = n('8crT'),
        Q = n('pxjI'),
        G = n('j60G'),
        V = n('1/BS'),
        $ = function (t) {
          return ['/what-to-do/activity', t];
        };
      function q(t, e) {
        if (
          (1 & t &&
            (v['\u0275\u0275elementStart'](0, 'div', 13),
            v['\u0275\u0275text'](1, '\n          '),
            v['\u0275\u0275elementStart'](2, 'a', 14),
            v['\u0275\u0275text'](3, '\n            '),
            v['\u0275\u0275elementStart'](4, 'div', 15),
            v['\u0275\u0275text'](5, '\n              '),
            v['\u0275\u0275element'](6, 'img', 16),
            v['\u0275\u0275text'](7, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](8, '\n            '),
            v['\u0275\u0275text'](9, '\n            '),
            v['\u0275\u0275elementStart'](10, 'div', 17),
            v['\u0275\u0275text'](11, '\n              '),
            v['\u0275\u0275elementStart'](12, 'h4', 18),
            v['\u0275\u0275text'](13),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](14, '\n              '),
            v['\u0275\u0275text'](15, '\n              '),
            v['\u0275\u0275text'](16, '\n              '),
            v['\u0275\u0275text'](17, '\n\n              '),
            v['\u0275\u0275text'](18, '\n\n              '),
            v['\u0275\u0275elementStart'](19, 'p', 19),
            v['\u0275\u0275text'](20),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](21, '\n            '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](22, '\n            '),
            v['\u0275\u0275text'](23, '\n          '),
            v['\u0275\u0275elementEnd'](),
            v['\u0275\u0275text'](24, '\n        '),
            v['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit;
          v['\u0275\u0275advance'](2),
            v['\u0275\u0275property']('routerLink', v['\u0275\u0275pureFunction1'](4, $, n.slug)),
            v['\u0275\u0275advance'](4),
            v['\u0275\u0275property']('src', n.thumbnail, v['\u0275\u0275sanitizeUrl']),
            v['\u0275\u0275advance'](7),
            v['\u0275\u0275textInterpolate'](n.name),
            v['\u0275\u0275advance'](7),
            v['\u0275\u0275textInterpolate1']('\n                ', n.description, '\n              ');
        }
      }
      var W,
        X,
        K,
        J = [
          {
            path: '',
            component:
              ((W = (function () {
                function t(e, n) {
                  _classCallCheck(this, t),
                    (this.homeService = e),
                    (this.router = n),
                    (this.activities = []),
                    (this.isLoading = !0),
                    (this.images = [B.a, D.a, H.a, Q.a, G.a, V.a]);
                }
                return (
                  _createClass(t, [
                    {
                      key: 'getActivities',
                      value: function () {
                        var t = this;
                        this.homeService
                          .getActivities('isFeatured=true&pageSize=6')
                          .pipe(
                            Object(c.finalize)(function () {
                              t.isLoading = !1;
                            })
                          )
                          .subscribe(function (e) {
                            t.activities = e;
                          });
                      },
                    },
                    {
                      key: 'ngOnInit',
                      value: function () {
                        window.scrollTo({ top: 0, behavior: 'smooth' }), this.loadScript(), this.getActivities();
                      },
                    },
                    {
                      key: 'getRatingStars',
                      value: function (t) {
                        return (parseFloat(t) / 5) * 100 + '%';
                      },
                    },
                    {
                      key: 'loadScript',
                      value: function () {
                        var t = document.body,
                          e = document.createElement('script');
                        (e.innerHTML = ''),
                          (e.src = '../../assets/js/where-to-go.js'),
                          (e.async = !0),
                          (e.defer = !0),
                          t.appendChild(e);
                      },
                    },
                  ]),
                  t
                );
              })()),
              (W.ɵfac = function (t) {
                return new (t || W)(v['\u0275\u0275directiveInject'](s.a), v['\u0275\u0275directiveInject'](i.d));
              }),
              (W.ɵcmp = v['\u0275\u0275defineComponent']({
                type: W,
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
                    (v['\u0275\u0275text'](0, '\n'),
                    v['\u0275\u0275elementStart'](1, 'section', 0),
                    v['\u0275\u0275text'](2, '\n  '),
                    v['\u0275\u0275elementStart'](3, 'div', 1),
                    v['\u0275\u0275element'](4, 'img', 2),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](5, '\n  '),
                    v['\u0275\u0275elementStart'](6, 'div', 3),
                    v['\u0275\u0275text'](7, '\n    '),
                    v['\u0275\u0275elementStart'](8, 'div', 4),
                    v['\u0275\u0275text'](9, '\n      '),
                    v['\u0275\u0275elementStart'](10, 'div', 5),
                    v['\u0275\u0275text'](11, '\n        '),
                    v['\u0275\u0275elementStart'](12, 'div', 6),
                    v['\u0275\u0275text'](13, '\n          '),
                    v['\u0275\u0275elementStart'](14, 'h2', 7),
                    v['\u0275\u0275text'](15, 'what to do'),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](16, '\n          '),
                    v['\u0275\u0275elementStart'](17, 'p', 8),
                    v['\u0275\u0275text'](
                      18,
                      '\n            A rush of adrenaline, a relaxing retreat, a culinary awakening \u2014\n            '
                    ),
                    v['\u0275\u0275element'](19, 'br'),
                    v['\u0275\u0275text'](20, '\n            no matter what you seek, it\u2019s all here.\n          '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](21, '\n          '),
                    v['\u0275\u0275text'](22, '\n        '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](23, '\n        '),
                    v['\u0275\u0275text'](24, '\n      '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](25, '\n      '),
                    v['\u0275\u0275text'](26, '\n    '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](27, '\n    '),
                    v['\u0275\u0275text'](28, '\n  '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](29, '\n  '),
                    v['\u0275\u0275text'](30, '\n'),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](31, '\n'),
                    v['\u0275\u0275text'](32, '\n\n'),
                    v['\u0275\u0275text'](33, '\n'),
                    v['\u0275\u0275elementStart'](34, 'div', 9),
                    v['\u0275\u0275text'](35, '\n  '),
                    v['\u0275\u0275elementStart'](36, 'div', 3),
                    v['\u0275\u0275text'](37, '\n    '),
                    v['\u0275\u0275elementStart'](38, 'div', 10),
                    v['\u0275\u0275text'](39, '\n      '),
                    v['\u0275\u0275elementStart'](40, 'div', 11),
                    v['\u0275\u0275text'](41, '\n        '),
                    v['\u0275\u0275template'](42, q, 25, 6, 'div', 12),
                    v['\u0275\u0275text'](43, '\n        '),
                    v['\u0275\u0275text'](44, '\n\n        '),
                    v['\u0275\u0275text'](45, '\n      '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](46, '\n      '),
                    v['\u0275\u0275text'](47, '\n    '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](48, '\n  '),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](49, '\n'),
                    v['\u0275\u0275elementEnd'](),
                    v['\u0275\u0275text'](50, '\n')),
                    2 & t &&
                      (v['\u0275\u0275advance'](14),
                      v['\u0275\u0275property']('translate', 'WHATTODOHEADING'),
                      v['\u0275\u0275advance'](28),
                      v['\u0275\u0275property']('ngForOf', e.activities)('ngForOf', e.images));
                },
                directives: [a.m, i.f],
                styles: [
                  '.bg-img[_ngcontent-%COMP%]{top:-120px}.bg-overlay[_ngcontent-%COMP%]{background-size:cover}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}',
                ],
              })),
              W),
          },
          { path: 'activity/:slug', component: F, resolve: { category: N } },
          { path: 'activity/:activity/location/:slug', component: r.a, resolve: { location: o.a } },
          { path: 'activity/:slug/listing', component: U, resolve: { activity: N } },
        ],
        Z =
          (((X = function t() {
            _classCallCheck(this, t);
          }).ɵmod = v['\u0275\u0275defineNgModule']({ type: X })),
          (X.ɵinj = v['\u0275\u0275defineInjector']({
            factory: function (t) {
              return new (t || X)();
            },
            imports: [[i.g.forChild(J)], i.g],
          })),
          X),
        Y = n('pxUr'),
        tt = n('a6Df'),
        et = n('1207'),
        nt =
          (((K = function t() {
            _classCallCheck(this, t);
          }).ɵmod = v['\u0275\u0275defineNgModule']({ type: K })),
          (K.ɵinj = v['\u0275\u0275defineInjector']({
            factory: function (t) {
              return new (t || K)();
            },
            imports: [[a.c, tt.a, Z, et.a, Y.a.forRoot({ apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA' })]],
          })),
          K);
    },
  },
]);
