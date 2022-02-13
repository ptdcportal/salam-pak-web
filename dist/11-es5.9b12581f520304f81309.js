function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '9SDK': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'TripModule', function () {
          return z;
        });
      var i,
        r,
        l = n('ofXK'),
        o = n('mzC4'),
        a = n('pxUr'),
        d = n('a6Df'),
        m = n('tyNb'),
        s = n('fTLw'),
        c = n('fXoL'),
        p =
          (((r = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.eventService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'resolve',
                  value: function (t, e) {
                    return this.eventService.getTripDetail(t.params.id);
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || r)(c['\u0275\u0275inject'](s.a));
          }),
          (r.ɵprov = c['\u0275\u0275defineInjectable']({ token: r, factory: r.ɵfac, providedIn: 'root' })),
          r),
        x =
          (((i = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.eventService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'resolve',
                  value: function (t, e) {
                    return this.eventService.getHomeFeaturedEvents();
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || i)(c['\u0275\u0275inject'](s.a));
          }),
          (i.ɵprov = c['\u0275\u0275defineInjectable']({ token: i, factory: i.ɵfac, providedIn: 'root' })),
          i),
        u = n('i6m5'),
        g = n('aFOK'),
        v = n('bqtT'),
        h = n('3Pt+'),
        f = n('AytR'),
        b = n('5eHb'),
        S = n('ucq3');
      function _(t, e) {
        if (1 & t) {
          var n = c['\u0275\u0275getCurrentView']();
          c['\u0275\u0275elementStart'](0, 'a', 63),
            c['\u0275\u0275listener']('click', function () {
              return c['\u0275\u0275restoreView'](n), c['\u0275\u0275nextContext']().addToWishlist();
            }),
            c['\u0275\u0275element'](1, 'i', 64),
            c['\u0275\u0275text'](2, 'add to wishlist'),
            c['\u0275\u0275elementEnd']();
        }
      }
      function E(t, e) {
        if (1 & t) {
          var n = c['\u0275\u0275getCurrentView']();
          c['\u0275\u0275elementStart'](0, 'a', 65),
            c['\u0275\u0275listener']('click', function () {
              return c['\u0275\u0275restoreView'](n), c['\u0275\u0275nextContext']().removeFromWishlist();
            }),
            c['\u0275\u0275element'](1, 'i', 64),
            c['\u0275\u0275text'](2, 'remove from wishlist'),
            c['\u0275\u0275elementEnd']();
        }
      }
      function y(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'li', 68),
            c['\u0275\u0275text'](1, '\n              '),
            c['\u0275\u0275text'](2, '\n              '),
            c['\u0275\u0275elementStart'](3, 'span', 69),
            c['\u0275\u0275text'](4),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](5, '\n              '),
            c['\u0275\u0275elementStart'](6, 'span', 70),
            c['\u0275\u0275text'](7),
            c['\u0275\u0275pipe'](8, 'date'),
            c['\u0275\u0275pipe'](9, 'date'),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](10, '\n              '),
            c['\u0275\u0275elementStart'](11, 'p', 71),
            c['\u0275\u0275text'](12),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](13, '\n              '),
            c['\u0275\u0275text'](14, '\n              '),
            c['\u0275\u0275text'](15, '\n            '),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit,
            i = e.index;
          c['\u0275\u0275advance'](4),
            c['\u0275\u0275textInterpolate1']('day ', i + 1, ''),
            c['\u0275\u0275advance'](3),
            c['\u0275\u0275textInterpolate2'](
              '',
              c['\u0275\u0275pipeBind2'](8, 4, n.timeFrom, 'shortTime'),
              ' - ',
              c['\u0275\u0275pipeBind2'](9, 7, n.timeTo, 'shortTime'),
              ''
            ),
            c['\u0275\u0275advance'](5),
            c['\u0275\u0275textInterpolate'](n.description);
        }
      }
      function C(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'ul', 66),
            c['\u0275\u0275text'](1, '\n            '),
            c['\u0275\u0275template'](2, y, 16, 10, 'li', 67),
            c['\u0275\u0275text'](3, '\n            '),
            c['\u0275\u0275text'](4, '\n          '),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = c['\u0275\u0275nextContext']();
          c['\u0275\u0275advance'](2), c['\u0275\u0275property']('ngForOf', n.trip.itinerary);
        }
      }
      function k(t, e) {
        1 & t &&
          (c['\u0275\u0275elementStart'](0, 'h6', 72),
          c['\u0275\u0275text'](1, 'No items to show!'),
          c['\u0275\u0275elementEnd']());
      }
      function I(t, e) {
        if (
          (1 & t && (c['\u0275\u0275elementStart'](0, 'li'), c['\u0275\u0275text'](1), c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit;
          c['\u0275\u0275advance'](1), c['\u0275\u0275textInterpolate'](n.name);
        }
      }
      function w(t, e) {
        if (
          (1 & t && (c['\u0275\u0275elementStart'](0, 'li'), c['\u0275\u0275text'](1), c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit;
          c['\u0275\u0275advance'](1), c['\u0275\u0275textInterpolate'](n.name);
        }
      }
      function O(t, e) {
        if (
          (1 & t && (c['\u0275\u0275elementStart'](0, 'li'), c['\u0275\u0275text'](1), c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit;
          c['\u0275\u0275advance'](1), c['\u0275\u0275textInterpolate'](n.name);
        }
      }
      function F(t, e) {
        if (
          (1 & t && (c['\u0275\u0275elementStart'](0, 'li'), c['\u0275\u0275text'](1), c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit;
          c['\u0275\u0275advance'](1), c['\u0275\u0275textInterpolate'](n.name);
        }
      }
      function M(t, e) {
        if (1 & t) {
          var n = c['\u0275\u0275getCurrentView']();
          c['\u0275\u0275elementStart'](0, 'a', 63),
            c['\u0275\u0275listener']('click', function () {
              return c['\u0275\u0275restoreView'](n), c['\u0275\u0275nextContext']().addToWishlist();
            }),
            c['\u0275\u0275element'](1, 'i', 64),
            c['\u0275\u0275text'](2, 'add to wishlist'),
            c['\u0275\u0275elementEnd']();
        }
      }
      function P(t, e) {
        if (1 & t) {
          var n = c['\u0275\u0275getCurrentView']();
          c['\u0275\u0275elementStart'](0, 'a', 65),
            c['\u0275\u0275listener']('click', function () {
              return c['\u0275\u0275restoreView'](n), c['\u0275\u0275nextContext']().removeFromWishlist();
            }),
            c['\u0275\u0275element'](1, 'i', 64),
            c['\u0275\u0275text'](2, 'remove from wishlist'),
            c['\u0275\u0275elementEnd']();
        }
      }
      var j,
        B = function (t) {
          return { width: t };
        },
        T =
          (((j = (function () {
            function t(e, n, i, r, l, o, a) {
              _classCallCheck(this, t),
                (this.route = e),
                (this.eventService = n),
                (this.credentialsService = i),
                (this.ngxSmartModalService = r),
                (this.routeLocation = l),
                (this.formBuilder = o),
                (this.toastr = a),
                (this.locations = []),
                (this.userPlans = []),
                (this.isBookRoomClicked = !1),
                (this.isAddToWishlistClicked = !1),
                (this.trip = this.route.snapshot.data.trip),
                (this.userId = localStorage.getItem('userId')),
                (this.isLoggedIn = localStorage.getItem('userId')),
                (this.tripId = this.trip._id),
                (this.redirectUrl = this.generateSocialMediaUrls());
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    var t = this;
                    window.scrollTo({ top: 0, behavior: 'smooth' }),
                      (this.isLoggedIn = localStorage.getItem('userId')),
                      this.credentialsService.currentStatus.subscribe(function (e) {
                        'loggedIn' != e || t.isBookRoomClicked || t.isAddToWishlistClicked
                          ? t.isBookRoomClicked && 'loggedIn' == e
                            ? ((t.userData = JSON.parse(localStorage.getItem('userData'))),
                              (t.isLoggedIn = !0),
                              (t.userId = localStorage.getItem('userId')),
                              t.createBookingForm(),
                              t.openBookingForm())
                            : t.isAddToWishlistClicked && 'loggedIn' == e
                            ? ((t.userId = localStorage.getItem('userId')), (t.isLoggedIn = !0), t.addToWishlist())
                            : (t.isLoggedIn = !1)
                          : t.getWishlist();
                      }),
                      this.createBookingForm();
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
                {
                  key: 'getWishlist',
                  value: function () {
                    var t = this;
                    this.eventService.getUserWishList(this.userId).subscribe(function (e) {
                      var n;
                      e.data.trips.length
                        ? (null === (n = e.data.trips) ||
                            void 0 === n ||
                            n.forEach(function (e) {
                              t.locations.push(e._id);
                            }),
                          t.isInWishlist())
                        : (t.locations = []);
                    });
                  },
                },
                {
                  key: 'removeFromWishlist',
                  value: function () {
                    var t = this;
                    this.eventService.removeTripFromWishlist(this.tripId).subscribe(function (e) {
                      t.locations.splice(t.locations.indexOf(t.tripId), 1);
                    });
                  },
                },
                {
                  key: 'removeFromPlan',
                  value: function () {
                    var t = this;
                    this.eventService.removeTripFromPlan(this.tripId).subscribe(function (e) {
                      t.userPlans.splice(t.userPlans.indexOf(t.tripId), 1);
                    });
                  },
                },
                {
                  key: 'addToWishlist',
                  value: function () {
                    var t = this;
                    (this.isAddToWishlistClicked = !0),
                      this.userId
                        ? this.eventService.addTripToWishlist(this.tripId).subscribe(function (e) {
                            t.getWishlist();
                          })
                        : this.ngxSmartModalService.create('authModal', g.a, { customClass: 'authModalClass' }).open();
                  },
                },
                {
                  key: 'isInWishlist',
                  value: function () {
                    if (this.locations) return this.locations.includes(this.tripId);
                  },
                },
                {
                  key: 'getRatingStars',
                  value: function (t) {
                    return (parseFloat(t) / 5) * 100 + '%';
                  },
                },
                {
                  key: 'generateSocialMediaUrls',
                  value: function () {
                    return ''.concat(f.a.portalUrl, '/').concat(this.routeLocation.path());
                  },
                },
                {
                  key: 'createBookingForm',
                  value: function () {
                    var t, e, n, i, r, l, o;
                    this.bookingForm = this.formBuilder.group({
                      fullName: [
                        null === (e = null === (t = this.userData) || void 0 === t ? void 0 : t.profile) || void 0 === e
                          ? void 0
                          : e.firstName,
                        h.Validators.required,
                      ],
                      email: [
                        null === (n = this.userData) || void 0 === n ? void 0 : n.profile.email,
                        h.Validators.required,
                      ],
                      mobile: [
                        null === (r = null === (i = this.userData) || void 0 === i ? void 0 : i.profile) || void 0 === r
                          ? void 0
                          : r.mobile,
                        h.Validators.required,
                      ],
                      idCard: [
                        null === (o = null === (l = this.userData) || void 0 === l ? void 0 : l.profile) || void 0 === o
                          ? void 0
                          : o.nic,
                        h.Validators.required,
                      ],
                      noOfAdults: [1, h.Validators.required],
                      noOfChildren: [0, h.Validators.required],
                    });
                  },
                },
                {
                  key: 'openBookingForm',
                  value: function () {
                    (this.isBookRoomClicked = !0),
                      this.isLoggedIn
                        ? ((this.userData = JSON.parse(localStorage.getItem('userData'))),
                          this.createBookingForm(),
                          this.ngxSmartModalService.open('bookingModal'))
                        : this.ngxSmartModalService.create('authModal', g.a, { customClass: 'authModalClass' }).open();
                  },
                },
                {
                  key: 'createBooking',
                  value: function () {
                    var t = this,
                      e = Object.assign(Object.assign({}, this.bookingForm.value), {
                        isChild: this.bookingForm.get('noOfChildren').value > 0,
                      });
                    (e = { passengersDetail: e }),
                      console.log(e),
                      this.eventService.createTripBooking(this.tripId, e).subscribe(
                        function (e) {
                          console.log(e),
                            t.ngxSmartModalService.getModal('bookingModal').close(),
                            t.toastr.success('booking created successfully!');
                        },
                        function (e) {
                          t.ngxSmartModalService.getModal('bookingModal').close(),
                            t.toastr.error(e.error.error.message);
                        }
                      );
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || j)(
              c['\u0275\u0275directiveInject'](m.a),
              c['\u0275\u0275directiveInject'](s.a),
              c['\u0275\u0275directiveInject'](u.c),
              c['\u0275\u0275directiveInject'](v.c),
              c['\u0275\u0275directiveInject'](l.j),
              c['\u0275\u0275directiveInject'](h.FormBuilder),
              c['\u0275\u0275directiveInject'](b.b)
            );
          }),
          (j.ɵcmp = c['\u0275\u0275defineComponent']({
            type: j,
            selectors: [['app-trip-detail']],
            decls: 326,
            vars: 45,
            consts: [
              ['id', 'page-title', 1, 'page-title-layout4', 'text-center', 'bg-overlay', 'slider'],
              [1, 'bg-img'],
              [
                'onerror',
                "this.onerror=null;this.src='assets/images/images/fall/fall1.jpg';",
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
              [1, 'info__list'],
              [1, 'slide__desc', 'mb-0'],
              [1, 'my-4', 'price__tag'],
              [1, 'details-review'],
              [1, 'stars', 'align-listing'],
              [3, 'ngStyle'],
              [1, 'stars2', 2, 'display', 'inline-table'],
              [1, 'font-regular'],
              [1, 'btn', 'btn__primary', 'btn__hover2', 'mr-30', 3, 'click'],
              [1, 'fa', 'fa-calendar'],
              ['class', 'btn btn__white', 'style', 'cursor: pointer !important', 3, 'click', 4, 'ngIf'],
              [
                'class',
                'btn btn__white',
                'style',
                'width: 180px !important; background-color: #ff5959 !important; border-color: #ff5959 !important',
                3,
                'click',
                4,
                'ngIf',
              ],
              ['id', 'services', 1, 'services', 'pb-90'],
              ['aria-label', 'breadcrumb'],
              [1, 'breadcrumb'],
              [1, 'breadcrumb-item'],
              ['aria-current', 'page', 1, 'breadcrumb-item', 'active'],
              [1, 'row', 'heading', 'heading-2', 'mb-40'],
              [1, 'col-sm-12', 'col-md-12', 'col-lg-6'],
              [1, 'heading__desc'],
              ['onerror', "this.onerror=null;this.src='assets/images/images/fall/fall1.jpg';", 3, 'src'],
              ['id', 'trip-to-do', 1, 'trip-to-do', 'pb-90'],
              [1, 'trip-body'],
              [1, 'col-md-5', 'row'],
              [1, 'col-md-12'],
              [1, 'heading__title'],
              ['id', 'trip-content'],
              ['id', 'sortable', 'class', 'trip-timeline', 4, 'ngIf'],
              ['class', 'text-muted text-center ml-2', 4, 'ngIf'],
              [1, 'col-md-7'],
              [1, 'facilities-list'],
              [1, 'activities-list'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'cancellation-policy'],
              ['identifier', 'bookingModal', 'escapable', 'true'],
              ['feedbackModal', ''],
              [1, 'col-12', 'col-sm-12', 'col-md-12', 'col-lg-12', 'p-5'],
              [1, 'visa-availabilty__popup', 'p-5', 3, 'formGroup'],
              [1, 'mb-3', 'text-left', 'popup__heading', 'text-center'],
              [1, 'row', 'mt-5'],
              [1, 'col-12', 'col-sm-12', 'col-md-6', 'col-lg-6', 'mt-4'],
              [1, 'image-replace', 'cd-email'],
              [
                'type',
                'text',
                'formControlName',
                'fullName',
                1,
                'full-width',
                'has-padding',
                'has-border',
                'form-control',
                'plan__name',
                3,
                'placeholder',
              ],
              ['translate', '', 1, 'text-danger', 3, 'hidden'],
              [
                'type',
                'text',
                'formControlName',
                'email',
                1,
                'full-width',
                'has-padding',
                'has-border',
                'form-control',
                'plan__name',
                3,
                'placeholder',
              ],
              [
                'type',
                'text',
                'formControlName',
                'mobile',
                1,
                'full-width',
                'has-padding',
                'has-border',
                'form-control',
                'plan__name',
                3,
                'placeholder',
              ],
              [
                'type',
                'text',
                'formControlName',
                'idCard',
                1,
                'full-width',
                'has-padding',
                'has-border',
                'form-control',
                'plan__name',
                3,
                'placeholder',
              ],
              [1, 'col-sm-12', 'col-md-6', 'col-lg-6', 'mt-4'],
              [1, 'form-group'],
              [1, 'booking-count'],
              [1, 'minus', 3, 'disabled', 'click'],
              ['type', 'text', 3, 'value'],
              [1, 'plus', 3, 'click'],
              [1, 'col-12', 'col-sm-12', 'col-md-4', 'col-lg-4', 'mt-4', 'text-center'],
              [
                'type',
                'button',
                'id',
                'trainButton',
                1,
                'btn',
                'btn__primary',
                'submit__button',
                3,
                'disabled',
                'click',
              ],
              [1, 'btn', 'btn__white', 2, 'cursor', 'pointer !important', 3, 'click'],
              [1, 'fa', 'fa-heart'],
              [
                1,
                'btn',
                'btn__white',
                2,
                'width',
                '180px !important',
                'background-color',
                '#ff5959 !important',
                'border-color',
                '#ff5959 !important',
                3,
                'click',
              ],
              ['id', 'sortable', 1, 'trip-timeline'],
              ['class', 'trip-event', 4, 'ngFor', 'ngForOf'],
              [1, 'trip-event'],
              [1, 'itinerary-day__label'],
              [1, 'itinerary-time__label'],
              [1, 'd-block'],
              [1, 'text-muted', 'text-center', 'ml-2'],
            ],
            template: function (t, e) {
              1 & t &&
                (c['\u0275\u0275text'](0, '\n'),
                c['\u0275\u0275elementStart'](1, 'section', 0),
                c['\u0275\u0275text'](2, '\n  '),
                c['\u0275\u0275elementStart'](3, 'div', 1),
                c['\u0275\u0275text'](4, '\n    '),
                c['\u0275\u0275element'](5, 'img', 2),
                c['\u0275\u0275text'](6, '\n  '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](7, '\n  '),
                c['\u0275\u0275elementStart'](8, 'div', 3),
                c['\u0275\u0275text'](9, '\n    '),
                c['\u0275\u0275elementStart'](10, 'div', 4),
                c['\u0275\u0275text'](11, '\n      '),
                c['\u0275\u0275elementStart'](12, 'div', 5),
                c['\u0275\u0275text'](13, '\n        '),
                c['\u0275\u0275elementStart'](14, 'div', 6),
                c['\u0275\u0275text'](15, '\n          '),
                c['\u0275\u0275elementStart'](16, 'h2', 7),
                c['\u0275\u0275text'](17),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](18, '\n\n          '),
                c['\u0275\u0275elementStart'](19, 'div', 8),
                c['\u0275\u0275text'](20, '\n            '),
                c['\u0275\u0275elementStart'](21, 'span'),
                c['\u0275\u0275text'](22),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](23, '\n            '),
                c['\u0275\u0275text'](24, '\n            '),
                c['\u0275\u0275elementStart'](25, 'span'),
                c['\u0275\u0275text'](26),
                c['\u0275\u0275pipe'](27, 'date'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](28, '\n            '),
                c['\u0275\u0275text'](29, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](30, '\n\n          '),
                c['\u0275\u0275elementStart'](31, 'p', 9),
                c['\u0275\u0275text'](32),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](33, '\n\n          '),
                c['\u0275\u0275elementStart'](34, 'p', 10),
                c['\u0275\u0275text'](35),
                c['\u0275\u0275pipe'](36, 'number'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](37, '\n\n          '),
                c['\u0275\u0275elementStart'](38, 'div', 11),
                c['\u0275\u0275text'](39, '\n            '),
                c['\u0275\u0275elementStart'](40, 'span', 12),
                c['\u0275\u0275text'](41, '\n              '),
                c['\u0275\u0275element'](42, 'span', 13),
                c['\u0275\u0275text'](43, '\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](44, '\n\n            '),
                c['\u0275\u0275elementStart'](45, 'span', 14),
                c['\u0275\u0275text'](46, '\n              '),
                c['\u0275\u0275element'](47, 'span', 13),
                c['\u0275\u0275text'](48, '\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](49, '\n\n            '),
                c['\u0275\u0275elementStart'](50, 'span', 15),
                c['\u0275\u0275text'](51),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](52, '\n\n            '),
                c['\u0275\u0275text'](53, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](54, '\n\n          '),
                c['\u0275\u0275elementStart'](55, 'a', 16),
                c['\u0275\u0275listener']('click', function () {
                  return e.openBookingForm();
                }),
                c['\u0275\u0275element'](56, 'i', 17),
                c['\u0275\u0275text'](57, 'Book now'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](58, '\n\n          '),
                c['\u0275\u0275text'](59, '\n\n          '),
                c['\u0275\u0275template'](60, _, 3, 0, 'a', 18),
                c['\u0275\u0275text'](61, '\n          '),
                c['\u0275\u0275template'](62, E, 3, 0, 'a', 19),
                c['\u0275\u0275text'](63, '\n        '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](64, '\n        '),
                c['\u0275\u0275text'](65, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](66, '\n      '),
                c['\u0275\u0275text'](67, '\n    '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](68, '\n    '),
                c['\u0275\u0275text'](69, '\n  '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](70, '\n  '),
                c['\u0275\u0275text'](71, '\n'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](72, '\n'),
                c['\u0275\u0275text'](73, '\n\n'),
                c['\u0275\u0275text'](74, '\n\n'),
                c['\u0275\u0275elementStart'](75, 'section', 20),
                c['\u0275\u0275text'](76, '\n  '),
                c['\u0275\u0275elementStart'](77, 'div', 3),
                c['\u0275\u0275text'](78, '\n    '),
                c['\u0275\u0275elementStart'](79, 'nav', 21),
                c['\u0275\u0275text'](80, '\n      '),
                c['\u0275\u0275elementStart'](81, 'ol', 22),
                c['\u0275\u0275text'](82, '\n        '),
                c['\u0275\u0275elementStart'](83, 'li', 23),
                c['\u0275\u0275elementStart'](84, 'a'),
                c['\u0275\u0275text'](85, 'Home '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](86, '\n        '),
                c['\u0275\u0275elementStart'](87, 'li', 23),
                c['\u0275\u0275elementStart'](88, 'a'),
                c['\u0275\u0275text'](89, 'trip-detail '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](90, '\n        '),
                c['\u0275\u0275elementStart'](91, 'li', 24),
                c['\u0275\u0275text'](92),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](93, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](94, '\n    '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](95, '\n\n    '),
                c['\u0275\u0275elementStart'](96, 'div', 25),
                c['\u0275\u0275text'](97, '\n      '),
                c['\u0275\u0275elementStart'](98, 'div', 26),
                c['\u0275\u0275text'](99, '\n        '),
                c['\u0275\u0275elementStart'](100, 'p', 27),
                c['\u0275\u0275text'](101),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](102, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](103, '\n      '),
                c['\u0275\u0275text'](104, '\n      '),
                c['\u0275\u0275elementStart'](105, 'div', 26),
                c['\u0275\u0275text'](106, '\n        '),
                c['\u0275\u0275element'](107, 'img', 28),
                c['\u0275\u0275text'](108, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](109, '\n      '),
                c['\u0275\u0275text'](110, '\n    '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](111, '\n    '),
                c['\u0275\u0275text'](112, '\n  '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](113, '\n'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](114, '\n'),
                c['\u0275\u0275text'](115, '\n\n'),
                c['\u0275\u0275text'](116, '\n\n'),
                c['\u0275\u0275elementStart'](117, 'div', 29),
                c['\u0275\u0275text'](118, '\n  '),
                c['\u0275\u0275elementStart'](119, 'div', 3),
                c['\u0275\u0275text'](120, '\n    '),
                c['\u0275\u0275elementStart'](121, 'div', 30),
                c['\u0275\u0275text'](122, '\n      '),
                c['\u0275\u0275elementStart'](123, 'div', 31),
                c['\u0275\u0275text'](124, '\n        '),
                c['\u0275\u0275text'](125, '\n        '),
                c['\u0275\u0275elementStart'](126, 'div', 32),
                c['\u0275\u0275text'](127, '\n          '),
                c['\u0275\u0275elementStart'](128, 'h2', 33),
                c['\u0275\u0275text'](129, 'trip itinerary'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](130, '\n        '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](131, '\n        '),
                c['\u0275\u0275text'](132, '\n        '),
                c['\u0275\u0275elementStart'](133, 'div', 34),
                c['\u0275\u0275text'](134, '\n          '),
                c['\u0275\u0275template'](135, C, 5, 1, 'ul', 35),
                c['\u0275\u0275text'](136, '\n          '),
                c['\u0275\u0275template'](137, k, 2, 0, 'h6', 36),
                c['\u0275\u0275text'](138, '\n        '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](139, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](140, '\n      '),
                c['\u0275\u0275elementStart'](141, 'div', 37),
                c['\u0275\u0275text'](142, '\n        '),
                c['\u0275\u0275elementStart'](143, 'div', 4),
                c['\u0275\u0275text'](144, '\n          '),
                c['\u0275\u0275elementStart'](145, 'div', 32),
                c['\u0275\u0275text'](146, '\n            '),
                c['\u0275\u0275elementStart'](147, 'h2', 33),
                c['\u0275\u0275text'](148, 'facilities'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](149, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](150, '\n        '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](151, '\n        '),
                c['\u0275\u0275elementStart'](152, 'div', 38),
                c['\u0275\u0275text'](153, '\n          '),
                c['\u0275\u0275elementStart'](154, 'h6'),
                c['\u0275\u0275text'](155, 'activities'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](156, '\n          '),
                c['\u0275\u0275elementStart'](157, 'ul', 39),
                c['\u0275\u0275text'](158, '\n            '),
                c['\u0275\u0275template'](159, I, 2, 1, 'li', 40),
                c['\u0275\u0275text'](160, '\n            '),
                c['\u0275\u0275text'](161, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](162, '\n          '),
                c['\u0275\u0275elementStart'](163, 'h6'),
                c['\u0275\u0275text'](164, 'categories'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](165, '\n          '),
                c['\u0275\u0275elementStart'](166, 'ul', 39),
                c['\u0275\u0275text'](167, '\n            '),
                c['\u0275\u0275template'](168, w, 2, 1, 'li', 40),
                c['\u0275\u0275text'](169, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](170, '\n          '),
                c['\u0275\u0275elementStart'](171, 'h6'),
                c['\u0275\u0275text'](172, 'services'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](173, '\n          '),
                c['\u0275\u0275elementStart'](174, 'ul', 39),
                c['\u0275\u0275text'](175, '\n            '),
                c['\u0275\u0275template'](176, O, 2, 1, 'li', 40),
                c['\u0275\u0275text'](177, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](178, '\n          '),
                c['\u0275\u0275elementStart'](179, 'h6'),
                c['\u0275\u0275text'](180, 'Locations included:'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](181, '\n          '),
                c['\u0275\u0275elementStart'](182, 'ul', 39),
                c['\u0275\u0275text'](183, '\n            '),
                c['\u0275\u0275template'](184, F, 2, 1, 'li', 40),
                c['\u0275\u0275text'](185, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](186, '\n          '),
                c['\u0275\u0275elementStart'](187, 'h6'),
                c['\u0275\u0275text'](188, 'cancellation policy'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](189, '\n          '),
                c['\u0275\u0275elementStart'](190, 'ul', 41),
                c['\u0275\u0275text'](191, '\n            '),
                c['\u0275\u0275elementStart'](192, 'p'),
                c['\u0275\u0275text'](193),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](194, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](195, '\n          '),
                c['\u0275\u0275text'](196, '\n\n          '),
                c['\u0275\u0275text'](197, '\n\n          '),
                c['\u0275\u0275elementStart'](198, 'a', 16),
                c['\u0275\u0275listener']('click', function () {
                  return e.openBookingForm();
                }),
                c['\u0275\u0275element'](199, 'i', 17),
                c['\u0275\u0275text'](200, 'Book now'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](201, '\n\n          '),
                c['\u0275\u0275template'](202, M, 3, 0, 'a', 18),
                c['\u0275\u0275text'](203, '\n          '),
                c['\u0275\u0275template'](204, P, 3, 0, 'a', 19),
                c['\u0275\u0275text'](205, '\n        '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](206, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](207, '\n    '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](208, '\n  '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](209, '\n'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](210, '\n\n'),
                c['\u0275\u0275element'](211, 'app-vendor-section'),
                c['\u0275\u0275text'](212, '\n\n'),
                c['\u0275\u0275elementStart'](213, 'ngx-smart-modal', 42, 43),
                c['\u0275\u0275text'](215, '\n  '),
                c['\u0275\u0275elementStart'](216, 'div', 4),
                c['\u0275\u0275text'](217, '\n    '),
                c['\u0275\u0275elementStart'](218, 'div', 44),
                c['\u0275\u0275text'](219, '\n      '),
                c['\u0275\u0275elementStart'](220, 'div', 45),
                c['\u0275\u0275text'](221, '\n        '),
                c['\u0275\u0275elementStart'](222, 'h6', 46),
                c['\u0275\u0275text'](223, 'Create Booking'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](224, '\n        '),
                c['\u0275\u0275element'](225, 'hr'),
                c['\u0275\u0275text'](226, '\n\n        '),
                c['\u0275\u0275elementStart'](227, 'div', 47),
                c['\u0275\u0275text'](228, '\n          '),
                c['\u0275\u0275text'](229, '\n          '),
                c['\u0275\u0275elementStart'](230, 'div', 48),
                c['\u0275\u0275text'](231, '\n            '),
                c['\u0275\u0275elementStart'](232, 'label', 49),
                c['\u0275\u0275text'](233, 'full name'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](234, '\n            '),
                c['\u0275\u0275element'](235, 'input', 50),
                c['\u0275\u0275text'](236, '\n            '),
                c['\u0275\u0275elementStart'](237, 'small', 51),
                c['\u0275\u0275text'](238, '\n              Feild is required\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](239, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](240, '\n\n          '),
                c['\u0275\u0275elementStart'](241, 'div', 48),
                c['\u0275\u0275text'](242, '\n            '),
                c['\u0275\u0275elementStart'](243, 'label', 49),
                c['\u0275\u0275text'](244, 'email'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](245, '\n            '),
                c['\u0275\u0275element'](246, 'input', 52),
                c['\u0275\u0275text'](247, '\n            '),
                c['\u0275\u0275elementStart'](248, 'small', 51),
                c['\u0275\u0275text'](249, '\n              Feild is required\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](250, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](251, '\n\n          '),
                c['\u0275\u0275elementStart'](252, 'div', 48),
                c['\u0275\u0275text'](253, '\n            '),
                c['\u0275\u0275elementStart'](254, 'label', 49),
                c['\u0275\u0275text'](255, 'phone no.'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](256, '\n            '),
                c['\u0275\u0275element'](257, 'input', 53),
                c['\u0275\u0275text'](258, '\n            '),
                c['\u0275\u0275elementStart'](259, 'small', 51),
                c['\u0275\u0275text'](260, '\n              Feild is required\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](261, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](262, '\n\n          '),
                c['\u0275\u0275elementStart'](263, 'div', 48),
                c['\u0275\u0275text'](264, '\n            '),
                c['\u0275\u0275elementStart'](265, 'label', 49),
                c['\u0275\u0275text'](266, 'cnic'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](267, '\n            '),
                c['\u0275\u0275element'](268, 'input', 54),
                c['\u0275\u0275text'](269, '\n            '),
                c['\u0275\u0275elementStart'](270, 'small', 51),
                c['\u0275\u0275text'](271, '\n              Feild is required\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](272, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](273, '\n          '),
                c['\u0275\u0275text'](274, '\n\n          '),
                c['\u0275\u0275elementStart'](275, 'div', 55),
                c['\u0275\u0275text'](276, '\n            '),
                c['\u0275\u0275elementStart'](277, 'div', 56),
                c['\u0275\u0275text'](278, '\n              '),
                c['\u0275\u0275elementStart'](279, 'label'),
                c['\u0275\u0275text'](280, 'adults'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](281, '\n              '),
                c['\u0275\u0275elementStart'](282, 'div', 57),
                c['\u0275\u0275text'](283, '\n                '),
                c['\u0275\u0275elementStart'](284, 'button', 58),
                c['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfAdults').patchValue(e.bookingForm.get('noOfAdults').value - 1);
                }),
                c['\u0275\u0275text'](285, '\n                  -\n                '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](286, '\n                '),
                c['\u0275\u0275element'](287, 'input', 59),
                c['\u0275\u0275text'](288, '\n                '),
                c['\u0275\u0275elementStart'](289, 'button', 60),
                c['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfAdults').patchValue(e.bookingForm.get('noOfAdults').value + 1);
                }),
                c['\u0275\u0275text'](290, '\n                  +\n                '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](291, '\n              '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](292, '\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](293, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](294, '\n\n          '),
                c['\u0275\u0275elementStart'](295, 'div', 55),
                c['\u0275\u0275text'](296, '\n            '),
                c['\u0275\u0275elementStart'](297, 'div', 56),
                c['\u0275\u0275text'](298, '\n              '),
                c['\u0275\u0275elementStart'](299, 'label'),
                c['\u0275\u0275text'](300, 'children'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](301, '\n              '),
                c['\u0275\u0275elementStart'](302, 'div', 57),
                c['\u0275\u0275text'](303, '\n                '),
                c['\u0275\u0275elementStart'](304, 'button', 58),
                c['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfChildren').patchValue(e.bookingForm.get('noOfChildren').value - 1);
                }),
                c['\u0275\u0275text'](305, '\n                  -\n                '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](306, '\n                '),
                c['\u0275\u0275element'](307, 'input', 59),
                c['\u0275\u0275text'](308, '\n                '),
                c['\u0275\u0275elementStart'](309, 'button', 60),
                c['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfChildren').patchValue(e.bookingForm.get('noOfChildren').value + 1);
                }),
                c['\u0275\u0275text'](310, '\n                  +\n                '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](311, '\n              '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](312, '\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](313, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](314, '\n\n          '),
                c['\u0275\u0275elementStart'](315, 'div', 61),
                c['\u0275\u0275text'](316, '\n            '),
                c['\u0275\u0275elementStart'](317, 'button', 62),
                c['\u0275\u0275listener']('click', function () {
                  return e.createBooking();
                }),
                c['\u0275\u0275text'](318, '\n              save\n            '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](319, '\n          '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](320, '\n        '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](321, '\n      '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](322, '\n    '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](323, '\n  '),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](324, '\n'),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275text'](325, '\n')),
                2 & t &&
                  (c['\u0275\u0275advance'](5),
                  c['\u0275\u0275property']('src', e.trip.photos[0], c['\u0275\u0275sanitizeUrl']),
                  c['\u0275\u0275advance'](12),
                  c['\u0275\u0275textInterpolate'](e.trip.title),
                  c['\u0275\u0275advance'](5),
                  c['\u0275\u0275textInterpolate1'](
                    'starting from ',
                    null == e.trip || null == e.trip.startLocation ? null : e.trip.startLocation.name,
                    ''
                  ),
                  c['\u0275\u0275advance'](4),
                  c['\u0275\u0275textInterpolate1'](
                    'starting at ',
                    c['\u0275\u0275pipeBind1'](27, 37, null == e.trip ? null : e.trip.date),
                    ''
                  ),
                  c['\u0275\u0275advance'](6),
                  c['\u0275\u0275textInterpolate1']('', e.trip.description.substr(0, 50), ' ...'),
                  c['\u0275\u0275advance'](3),
                  c['\u0275\u0275textInterpolate1'](
                    'PKR ',
                    c['\u0275\u0275pipeBind1'](36, 39, e.trip.price),
                    ' / person'
                  ),
                  c['\u0275\u0275advance'](7),
                  c['\u0275\u0275property'](
                    'ngStyle',
                    c['\u0275\u0275pureFunction1'](
                      41,
                      B,
                      e.getRatingStars((null == e.trip ? null : e.trip.ratingAverage) || 0)
                    )
                  ),
                  c['\u0275\u0275advance'](5),
                  c['\u0275\u0275property']('ngStyle', c['\u0275\u0275pureFunction1'](43, B, e.getRatingStars(5))),
                  c['\u0275\u0275advance'](4),
                  c['\u0275\u0275textInterpolate1']('(', e.trip.reviews ? e.trip.reviews : 0, ') reviews'),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275property']('ngIf', !e.isInWishlist()),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property']('ngIf', e.isInWishlist()),
                  c['\u0275\u0275advance'](30),
                  c['\u0275\u0275textInterpolate1']('\n          ', e.trip.slug, '\n        '),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275textInterpolate'](e.trip.description),
                  c['\u0275\u0275advance'](6),
                  c['\u0275\u0275propertyInterpolate']('src', e.trip.photos[0], c['\u0275\u0275sanitizeUrl']),
                  c['\u0275\u0275advance'](28),
                  c['\u0275\u0275property'](
                    'ngIf',
                    (null == e.trip || null == e.trip.itinerary ? null : e.trip.itinerary.length) > 0
                  ),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property'](
                    'ngIf',
                    0 == (null == e.trip || null == e.trip.itinerary ? null : e.trip.itinerary.length)
                  ),
                  c['\u0275\u0275advance'](22),
                  c['\u0275\u0275property']('ngForOf', e.trip.activities),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275property']('ngForOf', e.trip.categories),
                  c['\u0275\u0275advance'](8),
                  c['\u0275\u0275property']('ngForOf', e.trip.facilities),
                  c['\u0275\u0275advance'](8),
                  c['\u0275\u0275property']('ngForOf', e.trip.Locations),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275textInterpolate1']('\n              ', e.trip.cancellationPolicy, '\n            '),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275property']('ngIf', !e.isInWishlist()),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property']('ngIf', e.isInWishlist()),
                  c['\u0275\u0275advance'](16),
                  c['\u0275\u0275property']('formGroup', e.bookingForm),
                  c['\u0275\u0275advance'](15),
                  c['\u0275\u0275property']('placeholder', 'name'),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.fullName.valid || e.bookingForm.controls.fullName.untouched
                  ),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275property']('placeholder', 'email'),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.email.valid || e.bookingForm.controls.email.untouched
                  ),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275property']('placeholder', 'phone no.'),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.mobile.valid || e.bookingForm.controls.mobile.untouched
                  ),
                  c['\u0275\u0275advance'](9),
                  c['\u0275\u0275property']('placeholder', 'C.N.I.C'),
                  c['\u0275\u0275advance'](2),
                  c['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.idCard.valid || e.bookingForm.controls.idCard.untouched
                  ),
                  c['\u0275\u0275advance'](14),
                  c['\u0275\u0275property']('disabled', 1 == e.bookingForm.get('noOfAdults').value),
                  c['\u0275\u0275advance'](3),
                  c['\u0275\u0275propertyInterpolate']('value', e.bookingForm.get('noOfAdults').value),
                  c['\u0275\u0275advance'](17),
                  c['\u0275\u0275property']('disabled', e.bookingForm.get('noOfChildren').value < 1),
                  c['\u0275\u0275advance'](3),
                  c['\u0275\u0275propertyInterpolate']('value', e.bookingForm.get('noOfChildren').value),
                  c['\u0275\u0275advance'](10),
                  c['\u0275\u0275property']('disabled', e.bookingForm.invalid));
            },
            directives: [
              l.o,
              l.n,
              l.m,
              S.a,
              v.a,
              h.NgControlStatusGroup,
              h.FormGroupDirective,
              h.DefaultValueAccessor,
              h.NgControlStatus,
              h.FormControlName,
            ],
            pipes: [l.e, l.f],
            styles: [
              '.bg-img[_ngcontent-%COMP%]{margin-top:-120px;background-color:#000}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover;opacity:.7!important}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-300px;z-index:1;text-align:left}@media (min-width:768px){#trip-content[_ngcontent-%COMP%]{margin-top:0!important;margin-left:20px}}@media (max-width:767px){#trip-content[_ngcontent-%COMP%]{margin-left:20px}}@media (min-width:768px){ .login-popup__main{margin-top:10em!important;margin-right:unset!important;margin-bottom:unset!important;margin-left:0!important;background-color:#fff;max-width:unset!important}}.itinerary-day__label[_ngcontent-%COMP%]{display:block}ul.trip-timeline[_ngcontent-%COMP%]   li.trip-event[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:-10px;color:#8cc63e}ul.trip-timeline[_ngcontent-%COMP%]   li.trip-event[_ngcontent-%COMP%]   span.itinerary-time__label[_ngcontent-%COMP%]{margin-bottom:10px}@media screen and (max-width:768px){.trip-body[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%]{background:#fafafa;padding:20px 0;margin:0 auto 25px;border-radius:10px}}.facilities-list[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:-2px!important}.visa-availabilty__popup[_ngcontent-%COMP%]{border-radius:10px}.popup__heading[_ngcontent-%COMP%]{color:#8cc63e}.create-plan__checkIn[_ngcontent-%COMP%]{height:30px!important;font-size:12px!important;padding:0 0 0 2px!important}.plan__name[_ngcontent-%COMP%]{height:35px!important;padding:0 0 0 10px!important}.submit__button[_ngcontent-%COMP%]{line-height:unset!important;height:35px!important}.info__list[_ngcontent-%COMP%]{display:flex!important;color:#fff;font-size:2.4vh;margin-bottom:10px}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:sans-serif}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){padding-right:10px!important;padding-left:10px!important}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-right:10px!important}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:nth-child(2)){border-right:2px solid #8cc63e}',
            ],
          })),
          j),
        W = n('oOf3'),
        N = function (t) {
          return { width: t };
        };
      function V(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'div', 30),
            c['\u0275\u0275text'](1, '\n          '),
            c['\u0275\u0275elementStart'](2, 'a', 31),
            c['\u0275\u0275text'](3, '\n            '),
            c['\u0275\u0275elementStart'](4, 'div', 32),
            c['\u0275\u0275text'](5, '\n              '),
            c['\u0275\u0275element'](6, 'img', 33),
            c['\u0275\u0275text'](7, '\n            '),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](8, '\n            '),
            c['\u0275\u0275text'](9, '\n            '),
            c['\u0275\u0275elementStart'](10, 'div', 34),
            c['\u0275\u0275text'](11, '\n              '),
            c['\u0275\u0275elementStart'](12, 'h4', 35),
            c['\u0275\u0275text'](13),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](14, '\n              '),
            c['\u0275\u0275elementStart'](15, 'span', 36),
            c['\u0275\u0275text'](16, '\n                '),
            c['\u0275\u0275element'](17, 'span', 37),
            c['\u0275\u0275text'](18, '\n              '),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](19, '\n\n              '),
            c['\u0275\u0275elementStart'](20, 'span', 38),
            c['\u0275\u0275text'](21, '\n                '),
            c['\u0275\u0275element'](22, 'span', 37),
            c['\u0275\u0275text'](23, '\n              '),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](24, '\n              '),
            c['\u0275\u0275elementStart'](25, 'span', 39),
            c['\u0275\u0275text'](26),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](27, '\n            '),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](28, '\n            '),
            c['\u0275\u0275text'](29, '\n          '),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275text'](30, '\n        '),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = e.$implicit,
            i = c['\u0275\u0275nextContext']();
          c['\u0275\u0275advance'](2),
            c['\u0275\u0275propertyInterpolate2'](
              'href',
              'trip/detail/',
              n._id,
              '/',
              n.slug,
              '',
              c['\u0275\u0275sanitizeUrl']
            ),
            c['\u0275\u0275advance'](4),
            c['\u0275\u0275property']('src', n.thumbnails[0], c['\u0275\u0275sanitizeUrl']),
            c['\u0275\u0275advance'](7),
            c['\u0275\u0275textInterpolate'](n.title),
            c['\u0275\u0275advance'](4),
            c['\u0275\u0275property'](
              'ngStyle',
              c['\u0275\u0275pureFunction1'](7, N, i.getRatingStars((null == n ? null : n.ratingAverage) || 0))
            ),
            c['\u0275\u0275advance'](5),
            c['\u0275\u0275property']('ngStyle', c['\u0275\u0275pureFunction1'](9, N, i.getRatingStars(5))),
            c['\u0275\u0275advance'](4),
            c['\u0275\u0275textInterpolate1'](' (', n.reviews ? n.reviews : 0, ') reviews');
        }
      }
      var A,
        L,
        q,
        D = function (t) {
          return { itemsPerPage: 6, currentPage: t };
        },
        R = [
          { path: 'detail/:id/:slug', resolve: { trip: p }, component: T },
          {
            path: 'listing',
            resolve: { trips: x },
            component:
              ((A = (function () {
                function t(e, n) {
                  _classCallCheck(this, t),
                    (this.route = e),
                    (this.eventService = n),
                    (this.p = 1),
                    (this.trips = []),
                    (this.trips = this.route.snapshot.data.trips);
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
                      key: 'getRatingStars',
                      value: function (t) {
                        return (parseFloat(t) / 5) * 100 + '%';
                      },
                    },
                  ]),
                  t
                );
              })()),
              (A.ɵfac = function (t) {
                return new (t || A)(c['\u0275\u0275directiveInject'](m.a), c['\u0275\u0275directiveInject'](s.a));
              }),
              (A.ɵcmp = c['\u0275\u0275defineComponent']({
                type: A,
                selectors: [['app-trip-listing']],
                decls: 125,
                vars: 7,
                consts: [
                  ['id', 'page-title', 1, 'page-title-layout4', 'text-center', 'bg-overlay', 'slider'],
                  [1, 'bg-img'],
                  [
                    'onerror',
                    "this.onerror=null;this.src='assets/images/home/home-about.webp';",
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
                  [1, 'container-fluid', 'seasons'],
                  [1, 'col-md-8'],
                  [1, 'heading__subtitle'],
                  [1, 'heading__title'],
                  [1, 'col-md-4', 'show-all-btn'],
                  [1, 'masonry-wrapper', 'masonry-style-2'],
                  ['data-column-width', '.col-md-4', 1, 'blog-container'],
                  ['class', 'col-md-4 post-item', 4, 'ngFor', 'ngForOf'],
                  [1, 'col-md-12', 'text-center'],
                  [1, 'my-pagination', 3, 'pageChange'],
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
                  [1, 'stars', 'align-listing'],
                  [3, 'ngStyle'],
                  [1, 'stars2', 2, 'display', 'inline-table'],
                  [1, 'font-regular'],
                ],
                template: function (t, e) {
                  1 & t &&
                    (c['\u0275\u0275text'](0, '\n'),
                    c['\u0275\u0275elementStart'](1, 'section', 0),
                    c['\u0275\u0275text'](2, '\n  '),
                    c['\u0275\u0275elementStart'](3, 'div', 1),
                    c['\u0275\u0275text'](4, '\n    '),
                    c['\u0275\u0275element'](5, 'img', 2),
                    c['\u0275\u0275text'](6, '\n    '),
                    c['\u0275\u0275text'](7, '\n  '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](8, '\n  '),
                    c['\u0275\u0275elementStart'](9, 'div', 3),
                    c['\u0275\u0275text'](10, '\n    '),
                    c['\u0275\u0275elementStart'](11, 'div', 4),
                    c['\u0275\u0275text'](12, '\n      '),
                    c['\u0275\u0275elementStart'](13, 'div', 5),
                    c['\u0275\u0275text'](14, '\n        '),
                    c['\u0275\u0275elementStart'](15, 'div', 6),
                    c['\u0275\u0275text'](16, '\n          '),
                    c['\u0275\u0275elementStart'](17, 'h1', 7),
                    c['\u0275\u0275text'](18, 'trip listing'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](19, '\n          '),
                    c['\u0275\u0275text'](20, '\n        '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](21, '\n        '),
                    c['\u0275\u0275text'](22, '\n      '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](23, '\n      '),
                    c['\u0275\u0275text'](24, '\n    '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](25, '\n    '),
                    c['\u0275\u0275text'](26, '\n  '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](27, '\n  '),
                    c['\u0275\u0275text'](28, '\n'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](29, '\n'),
                    c['\u0275\u0275text'](30, '\n\n'),
                    c['\u0275\u0275text'](31, '\n'),
                    c['\u0275\u0275elementStart'](32, 'div', 8),
                    c['\u0275\u0275text'](33, '\n  '),
                    c['\u0275\u0275elementStart'](34, 'div', 3),
                    c['\u0275\u0275text'](35, '\n    '),
                    c['\u0275\u0275elementStart'](36, 'div', 4),
                    c['\u0275\u0275text'](37, '\n      '),
                    c['\u0275\u0275elementStart'](38, 'div', 9),
                    c['\u0275\u0275text'](39, '\n        '),
                    c['\u0275\u0275elementStart'](40, 'span', 10),
                    c['\u0275\u0275text'](41, 'trips'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](42, '\n        '),
                    c['\u0275\u0275elementStart'](43, 'h2', 11),
                    c['\u0275\u0275text'](44, 'all trips'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](45, '\n      '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](46, '\n      '),
                    c['\u0275\u0275elementStart'](47, 'div', 12),
                    c['\u0275\u0275text'](48, '\n        '),
                    c['\u0275\u0275text'](49, '\n      '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](50, '\n    '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](51, '\n    '),
                    c['\u0275\u0275elementStart'](52, 'div', 13),
                    c['\u0275\u0275text'](53, '\n      '),
                    c['\u0275\u0275elementStart'](54, 'div', 14),
                    c['\u0275\u0275text'](55, '\n        '),
                    c['\u0275\u0275template'](56, V, 31, 11, 'div', 15),
                    c['\u0275\u0275pipe'](57, 'paginate'),
                    c['\u0275\u0275text'](58, '\n        '),
                    c['\u0275\u0275text'](59, '\n      '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](60, '\n      '),
                    c['\u0275\u0275text'](61, '\n    '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](62, '\n  '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](63, '\n  '),
                    c['\u0275\u0275elementStart'](64, 'div', 3),
                    c['\u0275\u0275text'](65, '\n    '),
                    c['\u0275\u0275elementStart'](66, 'div', 4),
                    c['\u0275\u0275text'](67, '\n      '),
                    c['\u0275\u0275elementStart'](68, 'div', 16),
                    c['\u0275\u0275text'](69, '\n        '),
                    c['\u0275\u0275elementStart'](70, 'div'),
                    c['\u0275\u0275text'](71, '\n          '),
                    c['\u0275\u0275elementStart'](72, 'pagination-controls', 17),
                    c['\u0275\u0275listener']('pageChange', function (t) {
                      return (e.p = t);
                    }),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](73, '\n        '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](74, '\n      '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](75, '\n    '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](76, '\n  '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](77, '\n'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](78, '\n\n'),
                    c['\u0275\u0275text'](79, '\n'),
                    c['\u0275\u0275elementStart'](80, 'section', 18),
                    c['\u0275\u0275text'](81, '\n  '),
                    c['\u0275\u0275elementStart'](82, 'div', 3),
                    c['\u0275\u0275text'](83, '\n    '),
                    c['\u0275\u0275elementStart'](84, 'div', 4),
                    c['\u0275\u0275text'](85, '\n      '),
                    c['\u0275\u0275elementStart'](86, 'div', 19),
                    c['\u0275\u0275text'](87, '\n        '),
                    c['\u0275\u0275elementStart'](88, 'div', 20),
                    c['\u0275\u0275text'](89, '\n          '),
                    c['\u0275\u0275elementStart'](90, 'h2', 11),
                    c['\u0275\u0275text'](91, 'Browse trips'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](92, '\n          '),
                    c['\u0275\u0275elementStart'](93, 'form', 21),
                    c['\u0275\u0275text'](94, '\n            '),
                    c['\u0275\u0275element'](95, 'input', 22),
                    c['\u0275\u0275text'](96, '\n            '),
                    c['\u0275\u0275elementStart'](97, 'button', 23),
                    c['\u0275\u0275element'](98, 'i', 24),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](99, '\n          '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](100, '\n        '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](101, '\n        '),
                    c['\u0275\u0275text'](102, '\n        '),
                    c['\u0275\u0275elementStart'](103, 'div', 25),
                    c['\u0275\u0275text'](104, '\n          '),
                    c['\u0275\u0275elementStart'](105, 'div', 26),
                    c['\u0275\u0275text'](106, '\n            '),
                    c['\u0275\u0275elementStart'](107, 'h2', 11),
                    c['\u0275\u0275text'](108, 'Search by Category'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](109, '\n          '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](110, '\n\n          '),
                    c['\u0275\u0275elementStart'](111, 'div', 27),
                    c['\u0275\u0275text'](112, '\n            '),
                    c['\u0275\u0275elementStart'](113, 'span', 28),
                    c['\u0275\u0275elementStart'](114, 'a', 29),
                    c['\u0275\u0275text'](115, 'All'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](116, '\n            '),
                    c['\u0275\u0275text'](117, '\n          '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](118, '\n        '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](119, '\n        '),
                    c['\u0275\u0275text'](120, '\n      '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](121, '\n    '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](122, '\n  '),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](123, '\n'),
                    c['\u0275\u0275elementEnd'](),
                    c['\u0275\u0275text'](124, '\n')),
                    2 & t &&
                      (c['\u0275\u0275advance'](5),
                      c['\u0275\u0275property'](
                        'src',
                        null == e.data ? null : e.data.photos[0],
                        c['\u0275\u0275sanitizeUrl']
                      ),
                      c['\u0275\u0275advance'](51),
                      c['\u0275\u0275property'](
                        'ngForOf',
                        c['\u0275\u0275pipeBind2'](57, 2, e.trips, c['\u0275\u0275pureFunction1'](5, D, e.p))
                      ));
                },
                directives: [
                  l.m,
                  W.c,
                  h['\u0275angular_packages_forms_forms_y'],
                  h.NgControlStatusGroup,
                  h.NgForm,
                  l.o,
                ],
                pipes: [W.b],
                styles: [
                  '.bg-img[_ngcontent-%COMP%]{margin-top:-120px}.bg-img[_ngcontent-%COMP%], .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:200px}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-200px;z-index:1;text-align:left}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.category-btn[_ngcontent-%COMP%]{display:inline-block;margin:3px}.post__content[_ngcontent-%COMP%]{background-color:transparent}',
                ],
              })),
              A),
          },
        ],
        U =
          (((q = function t() {
            _classCallCheck(this, t);
          }).ɵmod = c['\u0275\u0275defineNgModule']({ type: q })),
          (q.ɵinj = c['\u0275\u0275defineInjector']({
            factory: function (t) {
              return new (t || q)();
            },
            providers: [],
            imports: [[m.g.forChild(R)], m.g],
          })),
          q),
        z =
          (((L = function t() {
            _classCallCheck(this, t);
          }).ɵmod = c['\u0275\u0275defineNgModule']({ type: L })),
          (L.ɵinj = c['\u0275\u0275defineInjector']({
            factory: function (t) {
              return new (t || L)();
            },
            imports: [[l.c, d.a, o.b, U, a.a.forRoot({ apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA' })]],
          })),
          L);
    },
    ucq3: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var i = n('fXoL'),
        r = (function () {
          var t = (function () {
            function t() {
              _classCallCheck(this, t);
            }
            return _createClass(t, [{ key: 'ngOnInit', value: function () {} }]), t;
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = i['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['app-vendor-section']],
              decls: 22,
              vars: 0,
              consts: [
                [1, 'row', 'vendor__row'],
                [1, 'col-12', 'col-sm-12', 'col-md-12', 'col-lg-12', 'text-center'],
                [1, 'mb-2'],
                [1, 'vendor__text', 'my-3'],
                ['href', 'https://ptdc-dashboard.interactivegrp.com', 'target', '_blank'],
                ['type', 'submit', 1, 'btn', 'btn-primary', 'w-20', 'vendor__btn'],
                [1, 'pointer'],
              ],
              template: function (t, e) {
                1 & t &&
                  (i['\u0275\u0275elementStart'](0, 'div', 0),
                  i['\u0275\u0275text'](1, '\n  '),
                  i['\u0275\u0275elementStart'](2, 'div', 1),
                  i['\u0275\u0275text'](3, '\n    '),
                  i['\u0275\u0275elementStart'](4, 'h2', 2),
                  i['\u0275\u0275text'](5, 'become a vendor'),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](6, '\n\n    '),
                  i['\u0275\u0275elementStart'](7, 'p', 3),
                  i['\u0275\u0275text'](
                    8,
                    "\n      Become a vendor and register your hotel, event planning service or tour planning and booking service with us today\n      to boost your business' visibility and gain lots of new customers.\n    "
                  ),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](9, '\n    '),
                  i['\u0275\u0275elementStart'](10, 'a', 4),
                  i['\u0275\u0275text'](11, '\n      '),
                  i['\u0275\u0275elementStart'](12, 'button', 5),
                  i['\u0275\u0275text'](13, '\n        '),
                  i['\u0275\u0275text'](14, '\n        '),
                  i['\u0275\u0275elementStart'](15, 'span', 6),
                  i['\u0275\u0275text'](16, 'become a vendor'),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](17, '\n      '),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](18, '\n    '),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](19, '\n  '),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](20, '\n'),
                  i['\u0275\u0275elementEnd'](),
                  i['\u0275\u0275text'](21, '\n'));
              },
              styles: [
                '.vendor__row[_ngcontent-%COMP%]{background-color:#f7f7f7;padding-top:80px;padding-bottom:80px}.vendor__btn[_ngcontent-%COMP%]{background-color:#8cc63e;border-color:#8cc63e}@media (min-width:768px){.vendor__text[_ngcontent-%COMP%]{margin:0 250px}}',
              ],
            })),
            t
          );
        })();
    },
  },
]);
