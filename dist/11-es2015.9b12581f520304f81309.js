(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '9SDK': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'TripModule', function () {
          return A;
        });
      var i = n('ofXK'),
        r = n('mzC4'),
        l = n('pxUr'),
        o = n('a6Df'),
        a = n('tyNb'),
        d = n('fTLw'),
        s = n('fXoL');
      let m = (() => {
          class t {
            constructor(t) {
              this.eventService = t;
            }
            resolve(t, e) {
              return this.eventService.getTripDetail(t.params.id);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s['\u0275\u0275inject'](d.a));
            }),
            (t.ɵprov = s['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        c = (() => {
          class t {
            constructor(t) {
              this.eventService = t;
            }
            resolve(t, e) {
              return this.eventService.getHomeFeaturedEvents();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s['\u0275\u0275inject'](d.a));
            }),
            (t.ɵprov = s['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })();
      var p = n('i6m5'),
        x = n('aFOK'),
        g = n('bqtT'),
        u = n('3Pt+'),
        h = n('AytR'),
        v = n('5eHb'),
        f = n('ucq3');
      function b(t, e) {
        if (1 & t) {
          const t = s['\u0275\u0275getCurrentView']();
          s['\u0275\u0275elementStart'](0, 'a', 63),
            s['\u0275\u0275listener']('click', function () {
              return s['\u0275\u0275restoreView'](t), s['\u0275\u0275nextContext']().addToWishlist();
            }),
            s['\u0275\u0275element'](1, 'i', 64),
            s['\u0275\u0275text'](2, 'add to wishlist'),
            s['\u0275\u0275elementEnd']();
        }
      }
      function S(t, e) {
        if (1 & t) {
          const t = s['\u0275\u0275getCurrentView']();
          s['\u0275\u0275elementStart'](0, 'a', 65),
            s['\u0275\u0275listener']('click', function () {
              return s['\u0275\u0275restoreView'](t), s['\u0275\u0275nextContext']().removeFromWishlist();
            }),
            s['\u0275\u0275element'](1, 'i', 64),
            s['\u0275\u0275text'](2, 'remove from wishlist'),
            s['\u0275\u0275elementEnd']();
        }
      }
      function _(t, e) {
        if (
          (1 & t &&
            (s['\u0275\u0275elementStart'](0, 'li', 68),
            s['\u0275\u0275text'](1, '\n              '),
            s['\u0275\u0275text'](2, '\n              '),
            s['\u0275\u0275elementStart'](3, 'span', 69),
            s['\u0275\u0275text'](4),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](5, '\n              '),
            s['\u0275\u0275elementStart'](6, 'span', 70),
            s['\u0275\u0275text'](7),
            s['\u0275\u0275pipe'](8, 'date'),
            s['\u0275\u0275pipe'](9, 'date'),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](10, '\n              '),
            s['\u0275\u0275elementStart'](11, 'p', 71),
            s['\u0275\u0275text'](12),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](13, '\n              '),
            s['\u0275\u0275text'](14, '\n              '),
            s['\u0275\u0275text'](15, '\n            '),
            s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = e.index;
          s['\u0275\u0275advance'](4),
            s['\u0275\u0275textInterpolate1']('day ', n + 1, ''),
            s['\u0275\u0275advance'](3),
            s['\u0275\u0275textInterpolate2'](
              '',
              s['\u0275\u0275pipeBind2'](8, 4, t.timeFrom, 'shortTime'),
              ' - ',
              s['\u0275\u0275pipeBind2'](9, 7, t.timeTo, 'shortTime'),
              ''
            ),
            s['\u0275\u0275advance'](5),
            s['\u0275\u0275textInterpolate'](t.description);
        }
      }
      function E(t, e) {
        if (
          (1 & t &&
            (s['\u0275\u0275elementStart'](0, 'ul', 66),
            s['\u0275\u0275text'](1, '\n            '),
            s['\u0275\u0275template'](2, _, 16, 10, 'li', 67),
            s['\u0275\u0275text'](3, '\n            '),
            s['\u0275\u0275text'](4, '\n          '),
            s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = s['\u0275\u0275nextContext']();
          s['\u0275\u0275advance'](2), s['\u0275\u0275property']('ngForOf', t.trip.itinerary);
        }
      }
      function y(t, e) {
        1 & t &&
          (s['\u0275\u0275elementStart'](0, 'h6', 72),
          s['\u0275\u0275text'](1, 'No items to show!'),
          s['\u0275\u0275elementEnd']());
      }
      function C(t, e) {
        if (
          (1 & t && (s['\u0275\u0275elementStart'](0, 'li'), s['\u0275\u0275text'](1), s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          s['\u0275\u0275advance'](1), s['\u0275\u0275textInterpolate'](t.name);
        }
      }
      function k(t, e) {
        if (
          (1 & t && (s['\u0275\u0275elementStart'](0, 'li'), s['\u0275\u0275text'](1), s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          s['\u0275\u0275advance'](1), s['\u0275\u0275textInterpolate'](t.name);
        }
      }
      function I(t, e) {
        if (
          (1 & t && (s['\u0275\u0275elementStart'](0, 'li'), s['\u0275\u0275text'](1), s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          s['\u0275\u0275advance'](1), s['\u0275\u0275textInterpolate'](t.name);
        }
      }
      function w(t, e) {
        if (
          (1 & t && (s['\u0275\u0275elementStart'](0, 'li'), s['\u0275\u0275text'](1), s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          s['\u0275\u0275advance'](1), s['\u0275\u0275textInterpolate'](t.name);
        }
      }
      function O(t, e) {
        if (1 & t) {
          const t = s['\u0275\u0275getCurrentView']();
          s['\u0275\u0275elementStart'](0, 'a', 63),
            s['\u0275\u0275listener']('click', function () {
              return s['\u0275\u0275restoreView'](t), s['\u0275\u0275nextContext']().addToWishlist();
            }),
            s['\u0275\u0275element'](1, 'i', 64),
            s['\u0275\u0275text'](2, 'add to wishlist'),
            s['\u0275\u0275elementEnd']();
        }
      }
      function F(t, e) {
        if (1 & t) {
          const t = s['\u0275\u0275getCurrentView']();
          s['\u0275\u0275elementStart'](0, 'a', 65),
            s['\u0275\u0275listener']('click', function () {
              return s['\u0275\u0275restoreView'](t), s['\u0275\u0275nextContext']().removeFromWishlist();
            }),
            s['\u0275\u0275element'](1, 'i', 64),
            s['\u0275\u0275text'](2, 'remove from wishlist'),
            s['\u0275\u0275elementEnd']();
        }
      }
      const M = function (t) {
        return { width: t };
      };
      let P = (() => {
        class t {
          constructor(t, e, n, i, r, l, o) {
            (this.route = t),
              (this.eventService = e),
              (this.credentialsService = n),
              (this.ngxSmartModalService = i),
              (this.routeLocation = r),
              (this.formBuilder = l),
              (this.toastr = o),
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
          ngOnInit() {
            window.scrollTo({ top: 0, behavior: 'smooth' }),
              (this.isLoggedIn = localStorage.getItem('userId')),
              this.credentialsService.currentStatus.subscribe((t) => {
                'loggedIn' != t || this.isBookRoomClicked || this.isAddToWishlistClicked
                  ? this.isBookRoomClicked && 'loggedIn' == t
                    ? ((this.userData = JSON.parse(localStorage.getItem('userData'))),
                      (this.isLoggedIn = !0),
                      (this.userId = localStorage.getItem('userId')),
                      this.createBookingForm(),
                      this.openBookingForm())
                    : this.isAddToWishlistClicked && 'loggedIn' == t
                    ? ((this.userId = localStorage.getItem('userId')), (this.isLoggedIn = !0), this.addToWishlist())
                    : (this.isLoggedIn = !1)
                  : this.getWishlist();
              }),
              this.createBookingForm();
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
          getWishlist() {
            this.eventService.getUserWishList(this.userId).subscribe((t) => {
              var e;
              t.data.trips.length
                ? (null === (e = t.data.trips) ||
                    void 0 === e ||
                    e.forEach((t) => {
                      this.locations.push(t._id);
                    }),
                  this.isInWishlist())
                : (this.locations = []);
            });
          }
          removeFromWishlist() {
            this.eventService.removeTripFromWishlist(this.tripId).subscribe((t) => {
              this.locations.splice(this.locations.indexOf(this.tripId), 1);
            });
          }
          removeFromPlan() {
            this.eventService.removeTripFromPlan(this.tripId).subscribe((t) => {
              this.userPlans.splice(this.userPlans.indexOf(this.tripId), 1);
            });
          }
          addToWishlist() {
            (this.isAddToWishlistClicked = !0),
              this.userId
                ? this.eventService.addTripToWishlist(this.tripId).subscribe((t) => {
                    this.getWishlist();
                  })
                : this.ngxSmartModalService.create('authModal', x.a, { customClass: 'authModalClass' }).open();
          }
          isInWishlist() {
            if (this.locations) return this.locations.includes(this.tripId);
          }
          getRatingStars(t) {
            return (parseFloat(t) / 5) * 100 + '%';
          }
          generateSocialMediaUrls() {
            return `${h.a.portalUrl}/${this.routeLocation.path()}`;
          }
          createBookingForm() {
            var t, e, n, i, r, l, o;
            this.bookingForm = this.formBuilder.group({
              fullName: [
                null === (e = null === (t = this.userData) || void 0 === t ? void 0 : t.profile) || void 0 === e
                  ? void 0
                  : e.firstName,
                u.Validators.required,
              ],
              email: [null === (n = this.userData) || void 0 === n ? void 0 : n.profile.email, u.Validators.required],
              mobile: [
                null === (r = null === (i = this.userData) || void 0 === i ? void 0 : i.profile) || void 0 === r
                  ? void 0
                  : r.mobile,
                u.Validators.required,
              ],
              idCard: [
                null === (o = null === (l = this.userData) || void 0 === l ? void 0 : l.profile) || void 0 === o
                  ? void 0
                  : o.nic,
                u.Validators.required,
              ],
              noOfAdults: [1, u.Validators.required],
              noOfChildren: [0, u.Validators.required],
            });
          }
          openBookingForm() {
            (this.isBookRoomClicked = !0),
              this.isLoggedIn
                ? ((this.userData = JSON.parse(localStorage.getItem('userData'))),
                  this.createBookingForm(),
                  this.ngxSmartModalService.open('bookingModal'))
                : this.ngxSmartModalService.create('authModal', x.a, { customClass: 'authModalClass' }).open();
          }
          createBooking() {
            let t = Object.assign(Object.assign({}, this.bookingForm.value), {
              isChild: this.bookingForm.get('noOfChildren').value > 0,
            });
            (t = { passengersDetail: t }),
              console.log(t),
              this.eventService.createTripBooking(this.tripId, t).subscribe(
                (t) => {
                  console.log(t),
                    this.ngxSmartModalService.getModal('bookingModal').close(),
                    this.toastr.success('booking created successfully!');
                },
                (t) => {
                  this.ngxSmartModalService.getModal('bookingModal').close(), this.toastr.error(t.error.error.message);
                }
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              s['\u0275\u0275directiveInject'](a.a),
              s['\u0275\u0275directiveInject'](d.a),
              s['\u0275\u0275directiveInject'](p.c),
              s['\u0275\u0275directiveInject'](g.c),
              s['\u0275\u0275directiveInject'](i.j),
              s['\u0275\u0275directiveInject'](u.FormBuilder),
              s['\u0275\u0275directiveInject'](v.b)
            );
          }),
          (t.ɵcmp = s['\u0275\u0275defineComponent']({
            type: t,
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
                (s['\u0275\u0275text'](0, '\n'),
                s['\u0275\u0275elementStart'](1, 'section', 0),
                s['\u0275\u0275text'](2, '\n  '),
                s['\u0275\u0275elementStart'](3, 'div', 1),
                s['\u0275\u0275text'](4, '\n    '),
                s['\u0275\u0275element'](5, 'img', 2),
                s['\u0275\u0275text'](6, '\n  '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](7, '\n  '),
                s['\u0275\u0275elementStart'](8, 'div', 3),
                s['\u0275\u0275text'](9, '\n    '),
                s['\u0275\u0275elementStart'](10, 'div', 4),
                s['\u0275\u0275text'](11, '\n      '),
                s['\u0275\u0275elementStart'](12, 'div', 5),
                s['\u0275\u0275text'](13, '\n        '),
                s['\u0275\u0275elementStart'](14, 'div', 6),
                s['\u0275\u0275text'](15, '\n          '),
                s['\u0275\u0275elementStart'](16, 'h2', 7),
                s['\u0275\u0275text'](17),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](18, '\n\n          '),
                s['\u0275\u0275elementStart'](19, 'div', 8),
                s['\u0275\u0275text'](20, '\n            '),
                s['\u0275\u0275elementStart'](21, 'span'),
                s['\u0275\u0275text'](22),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](23, '\n            '),
                s['\u0275\u0275text'](24, '\n            '),
                s['\u0275\u0275elementStart'](25, 'span'),
                s['\u0275\u0275text'](26),
                s['\u0275\u0275pipe'](27, 'date'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](28, '\n            '),
                s['\u0275\u0275text'](29, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](30, '\n\n          '),
                s['\u0275\u0275elementStart'](31, 'p', 9),
                s['\u0275\u0275text'](32),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](33, '\n\n          '),
                s['\u0275\u0275elementStart'](34, 'p', 10),
                s['\u0275\u0275text'](35),
                s['\u0275\u0275pipe'](36, 'number'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](37, '\n\n          '),
                s['\u0275\u0275elementStart'](38, 'div', 11),
                s['\u0275\u0275text'](39, '\n            '),
                s['\u0275\u0275elementStart'](40, 'span', 12),
                s['\u0275\u0275text'](41, '\n              '),
                s['\u0275\u0275element'](42, 'span', 13),
                s['\u0275\u0275text'](43, '\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](44, '\n\n            '),
                s['\u0275\u0275elementStart'](45, 'span', 14),
                s['\u0275\u0275text'](46, '\n              '),
                s['\u0275\u0275element'](47, 'span', 13),
                s['\u0275\u0275text'](48, '\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](49, '\n\n            '),
                s['\u0275\u0275elementStart'](50, 'span', 15),
                s['\u0275\u0275text'](51),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](52, '\n\n            '),
                s['\u0275\u0275text'](53, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](54, '\n\n          '),
                s['\u0275\u0275elementStart'](55, 'a', 16),
                s['\u0275\u0275listener']('click', function () {
                  return e.openBookingForm();
                }),
                s['\u0275\u0275element'](56, 'i', 17),
                s['\u0275\u0275text'](57, 'Book now'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](58, '\n\n          '),
                s['\u0275\u0275text'](59, '\n\n          '),
                s['\u0275\u0275template'](60, b, 3, 0, 'a', 18),
                s['\u0275\u0275text'](61, '\n          '),
                s['\u0275\u0275template'](62, S, 3, 0, 'a', 19),
                s['\u0275\u0275text'](63, '\n        '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](64, '\n        '),
                s['\u0275\u0275text'](65, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](66, '\n      '),
                s['\u0275\u0275text'](67, '\n    '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](68, '\n    '),
                s['\u0275\u0275text'](69, '\n  '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](70, '\n  '),
                s['\u0275\u0275text'](71, '\n'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](72, '\n'),
                s['\u0275\u0275text'](73, '\n\n'),
                s['\u0275\u0275text'](74, '\n\n'),
                s['\u0275\u0275elementStart'](75, 'section', 20),
                s['\u0275\u0275text'](76, '\n  '),
                s['\u0275\u0275elementStart'](77, 'div', 3),
                s['\u0275\u0275text'](78, '\n    '),
                s['\u0275\u0275elementStart'](79, 'nav', 21),
                s['\u0275\u0275text'](80, '\n      '),
                s['\u0275\u0275elementStart'](81, 'ol', 22),
                s['\u0275\u0275text'](82, '\n        '),
                s['\u0275\u0275elementStart'](83, 'li', 23),
                s['\u0275\u0275elementStart'](84, 'a'),
                s['\u0275\u0275text'](85, 'Home '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](86, '\n        '),
                s['\u0275\u0275elementStart'](87, 'li', 23),
                s['\u0275\u0275elementStart'](88, 'a'),
                s['\u0275\u0275text'](89, 'trip-detail '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](90, '\n        '),
                s['\u0275\u0275elementStart'](91, 'li', 24),
                s['\u0275\u0275text'](92),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](93, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](94, '\n    '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](95, '\n\n    '),
                s['\u0275\u0275elementStart'](96, 'div', 25),
                s['\u0275\u0275text'](97, '\n      '),
                s['\u0275\u0275elementStart'](98, 'div', 26),
                s['\u0275\u0275text'](99, '\n        '),
                s['\u0275\u0275elementStart'](100, 'p', 27),
                s['\u0275\u0275text'](101),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](102, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](103, '\n      '),
                s['\u0275\u0275text'](104, '\n      '),
                s['\u0275\u0275elementStart'](105, 'div', 26),
                s['\u0275\u0275text'](106, '\n        '),
                s['\u0275\u0275element'](107, 'img', 28),
                s['\u0275\u0275text'](108, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](109, '\n      '),
                s['\u0275\u0275text'](110, '\n    '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](111, '\n    '),
                s['\u0275\u0275text'](112, '\n  '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](113, '\n'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](114, '\n'),
                s['\u0275\u0275text'](115, '\n\n'),
                s['\u0275\u0275text'](116, '\n\n'),
                s['\u0275\u0275elementStart'](117, 'div', 29),
                s['\u0275\u0275text'](118, '\n  '),
                s['\u0275\u0275elementStart'](119, 'div', 3),
                s['\u0275\u0275text'](120, '\n    '),
                s['\u0275\u0275elementStart'](121, 'div', 30),
                s['\u0275\u0275text'](122, '\n      '),
                s['\u0275\u0275elementStart'](123, 'div', 31),
                s['\u0275\u0275text'](124, '\n        '),
                s['\u0275\u0275text'](125, '\n        '),
                s['\u0275\u0275elementStart'](126, 'div', 32),
                s['\u0275\u0275text'](127, '\n          '),
                s['\u0275\u0275elementStart'](128, 'h2', 33),
                s['\u0275\u0275text'](129, 'trip itinerary'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](130, '\n        '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](131, '\n        '),
                s['\u0275\u0275text'](132, '\n        '),
                s['\u0275\u0275elementStart'](133, 'div', 34),
                s['\u0275\u0275text'](134, '\n          '),
                s['\u0275\u0275template'](135, E, 5, 1, 'ul', 35),
                s['\u0275\u0275text'](136, '\n          '),
                s['\u0275\u0275template'](137, y, 2, 0, 'h6', 36),
                s['\u0275\u0275text'](138, '\n        '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](139, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](140, '\n      '),
                s['\u0275\u0275elementStart'](141, 'div', 37),
                s['\u0275\u0275text'](142, '\n        '),
                s['\u0275\u0275elementStart'](143, 'div', 4),
                s['\u0275\u0275text'](144, '\n          '),
                s['\u0275\u0275elementStart'](145, 'div', 32),
                s['\u0275\u0275text'](146, '\n            '),
                s['\u0275\u0275elementStart'](147, 'h2', 33),
                s['\u0275\u0275text'](148, 'facilities'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](149, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](150, '\n        '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](151, '\n        '),
                s['\u0275\u0275elementStart'](152, 'div', 38),
                s['\u0275\u0275text'](153, '\n          '),
                s['\u0275\u0275elementStart'](154, 'h6'),
                s['\u0275\u0275text'](155, 'activities'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](156, '\n          '),
                s['\u0275\u0275elementStart'](157, 'ul', 39),
                s['\u0275\u0275text'](158, '\n            '),
                s['\u0275\u0275template'](159, C, 2, 1, 'li', 40),
                s['\u0275\u0275text'](160, '\n            '),
                s['\u0275\u0275text'](161, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](162, '\n          '),
                s['\u0275\u0275elementStart'](163, 'h6'),
                s['\u0275\u0275text'](164, 'categories'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](165, '\n          '),
                s['\u0275\u0275elementStart'](166, 'ul', 39),
                s['\u0275\u0275text'](167, '\n            '),
                s['\u0275\u0275template'](168, k, 2, 1, 'li', 40),
                s['\u0275\u0275text'](169, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](170, '\n          '),
                s['\u0275\u0275elementStart'](171, 'h6'),
                s['\u0275\u0275text'](172, 'services'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](173, '\n          '),
                s['\u0275\u0275elementStart'](174, 'ul', 39),
                s['\u0275\u0275text'](175, '\n            '),
                s['\u0275\u0275template'](176, I, 2, 1, 'li', 40),
                s['\u0275\u0275text'](177, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](178, '\n          '),
                s['\u0275\u0275elementStart'](179, 'h6'),
                s['\u0275\u0275text'](180, 'Locations included:'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](181, '\n          '),
                s['\u0275\u0275elementStart'](182, 'ul', 39),
                s['\u0275\u0275text'](183, '\n            '),
                s['\u0275\u0275template'](184, w, 2, 1, 'li', 40),
                s['\u0275\u0275text'](185, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](186, '\n          '),
                s['\u0275\u0275elementStart'](187, 'h6'),
                s['\u0275\u0275text'](188, 'cancellation policy'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](189, '\n          '),
                s['\u0275\u0275elementStart'](190, 'ul', 41),
                s['\u0275\u0275text'](191, '\n            '),
                s['\u0275\u0275elementStart'](192, 'p'),
                s['\u0275\u0275text'](193),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](194, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](195, '\n          '),
                s['\u0275\u0275text'](196, '\n\n          '),
                s['\u0275\u0275text'](197, '\n\n          '),
                s['\u0275\u0275elementStart'](198, 'a', 16),
                s['\u0275\u0275listener']('click', function () {
                  return e.openBookingForm();
                }),
                s['\u0275\u0275element'](199, 'i', 17),
                s['\u0275\u0275text'](200, 'Book now'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](201, '\n\n          '),
                s['\u0275\u0275template'](202, O, 3, 0, 'a', 18),
                s['\u0275\u0275text'](203, '\n          '),
                s['\u0275\u0275template'](204, F, 3, 0, 'a', 19),
                s['\u0275\u0275text'](205, '\n        '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](206, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](207, '\n    '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](208, '\n  '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](209, '\n'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](210, '\n\n'),
                s['\u0275\u0275element'](211, 'app-vendor-section'),
                s['\u0275\u0275text'](212, '\n\n'),
                s['\u0275\u0275elementStart'](213, 'ngx-smart-modal', 42, 43),
                s['\u0275\u0275text'](215, '\n  '),
                s['\u0275\u0275elementStart'](216, 'div', 4),
                s['\u0275\u0275text'](217, '\n    '),
                s['\u0275\u0275elementStart'](218, 'div', 44),
                s['\u0275\u0275text'](219, '\n      '),
                s['\u0275\u0275elementStart'](220, 'div', 45),
                s['\u0275\u0275text'](221, '\n        '),
                s['\u0275\u0275elementStart'](222, 'h6', 46),
                s['\u0275\u0275text'](223, 'Create Booking'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](224, '\n        '),
                s['\u0275\u0275element'](225, 'hr'),
                s['\u0275\u0275text'](226, '\n\n        '),
                s['\u0275\u0275elementStart'](227, 'div', 47),
                s['\u0275\u0275text'](228, '\n          '),
                s['\u0275\u0275text'](229, '\n          '),
                s['\u0275\u0275elementStart'](230, 'div', 48),
                s['\u0275\u0275text'](231, '\n            '),
                s['\u0275\u0275elementStart'](232, 'label', 49),
                s['\u0275\u0275text'](233, 'full name'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](234, '\n            '),
                s['\u0275\u0275element'](235, 'input', 50),
                s['\u0275\u0275text'](236, '\n            '),
                s['\u0275\u0275elementStart'](237, 'small', 51),
                s['\u0275\u0275text'](238, '\n              Feild is required\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](239, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](240, '\n\n          '),
                s['\u0275\u0275elementStart'](241, 'div', 48),
                s['\u0275\u0275text'](242, '\n            '),
                s['\u0275\u0275elementStart'](243, 'label', 49),
                s['\u0275\u0275text'](244, 'email'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](245, '\n            '),
                s['\u0275\u0275element'](246, 'input', 52),
                s['\u0275\u0275text'](247, '\n            '),
                s['\u0275\u0275elementStart'](248, 'small', 51),
                s['\u0275\u0275text'](249, '\n              Feild is required\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](250, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](251, '\n\n          '),
                s['\u0275\u0275elementStart'](252, 'div', 48),
                s['\u0275\u0275text'](253, '\n            '),
                s['\u0275\u0275elementStart'](254, 'label', 49),
                s['\u0275\u0275text'](255, 'phone no.'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](256, '\n            '),
                s['\u0275\u0275element'](257, 'input', 53),
                s['\u0275\u0275text'](258, '\n            '),
                s['\u0275\u0275elementStart'](259, 'small', 51),
                s['\u0275\u0275text'](260, '\n              Feild is required\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](261, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](262, '\n\n          '),
                s['\u0275\u0275elementStart'](263, 'div', 48),
                s['\u0275\u0275text'](264, '\n            '),
                s['\u0275\u0275elementStart'](265, 'label', 49),
                s['\u0275\u0275text'](266, 'cnic'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](267, '\n            '),
                s['\u0275\u0275element'](268, 'input', 54),
                s['\u0275\u0275text'](269, '\n            '),
                s['\u0275\u0275elementStart'](270, 'small', 51),
                s['\u0275\u0275text'](271, '\n              Feild is required\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](272, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](273, '\n          '),
                s['\u0275\u0275text'](274, '\n\n          '),
                s['\u0275\u0275elementStart'](275, 'div', 55),
                s['\u0275\u0275text'](276, '\n            '),
                s['\u0275\u0275elementStart'](277, 'div', 56),
                s['\u0275\u0275text'](278, '\n              '),
                s['\u0275\u0275elementStart'](279, 'label'),
                s['\u0275\u0275text'](280, 'adults'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](281, '\n              '),
                s['\u0275\u0275elementStart'](282, 'div', 57),
                s['\u0275\u0275text'](283, '\n                '),
                s['\u0275\u0275elementStart'](284, 'button', 58),
                s['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfAdults').patchValue(e.bookingForm.get('noOfAdults').value - 1);
                }),
                s['\u0275\u0275text'](285, '\n                  -\n                '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](286, '\n                '),
                s['\u0275\u0275element'](287, 'input', 59),
                s['\u0275\u0275text'](288, '\n                '),
                s['\u0275\u0275elementStart'](289, 'button', 60),
                s['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfAdults').patchValue(e.bookingForm.get('noOfAdults').value + 1);
                }),
                s['\u0275\u0275text'](290, '\n                  +\n                '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](291, '\n              '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](292, '\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](293, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](294, '\n\n          '),
                s['\u0275\u0275elementStart'](295, 'div', 55),
                s['\u0275\u0275text'](296, '\n            '),
                s['\u0275\u0275elementStart'](297, 'div', 56),
                s['\u0275\u0275text'](298, '\n              '),
                s['\u0275\u0275elementStart'](299, 'label'),
                s['\u0275\u0275text'](300, 'children'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](301, '\n              '),
                s['\u0275\u0275elementStart'](302, 'div', 57),
                s['\u0275\u0275text'](303, '\n                '),
                s['\u0275\u0275elementStart'](304, 'button', 58),
                s['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfChildren').patchValue(e.bookingForm.get('noOfChildren').value - 1);
                }),
                s['\u0275\u0275text'](305, '\n                  -\n                '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](306, '\n                '),
                s['\u0275\u0275element'](307, 'input', 59),
                s['\u0275\u0275text'](308, '\n                '),
                s['\u0275\u0275elementStart'](309, 'button', 60),
                s['\u0275\u0275listener']('click', function () {
                  return e.bookingForm.get('noOfChildren').patchValue(e.bookingForm.get('noOfChildren').value + 1);
                }),
                s['\u0275\u0275text'](310, '\n                  +\n                '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](311, '\n              '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](312, '\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](313, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](314, '\n\n          '),
                s['\u0275\u0275elementStart'](315, 'div', 61),
                s['\u0275\u0275text'](316, '\n            '),
                s['\u0275\u0275elementStart'](317, 'button', 62),
                s['\u0275\u0275listener']('click', function () {
                  return e.createBooking();
                }),
                s['\u0275\u0275text'](318, '\n              save\n            '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](319, '\n          '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](320, '\n        '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](321, '\n      '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](322, '\n    '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](323, '\n  '),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](324, '\n'),
                s['\u0275\u0275elementEnd'](),
                s['\u0275\u0275text'](325, '\n')),
                2 & t &&
                  (s['\u0275\u0275advance'](5),
                  s['\u0275\u0275property']('src', e.trip.photos[0], s['\u0275\u0275sanitizeUrl']),
                  s['\u0275\u0275advance'](12),
                  s['\u0275\u0275textInterpolate'](e.trip.title),
                  s['\u0275\u0275advance'](5),
                  s['\u0275\u0275textInterpolate1'](
                    'starting from ',
                    null == e.trip || null == e.trip.startLocation ? null : e.trip.startLocation.name,
                    ''
                  ),
                  s['\u0275\u0275advance'](4),
                  s['\u0275\u0275textInterpolate1'](
                    'starting at ',
                    s['\u0275\u0275pipeBind1'](27, 37, null == e.trip ? null : e.trip.date),
                    ''
                  ),
                  s['\u0275\u0275advance'](6),
                  s['\u0275\u0275textInterpolate1']('', e.trip.description.substr(0, 50), ' ...'),
                  s['\u0275\u0275advance'](3),
                  s['\u0275\u0275textInterpolate1'](
                    'PKR ',
                    s['\u0275\u0275pipeBind1'](36, 39, e.trip.price),
                    ' / person'
                  ),
                  s['\u0275\u0275advance'](7),
                  s['\u0275\u0275property'](
                    'ngStyle',
                    s['\u0275\u0275pureFunction1'](
                      41,
                      M,
                      e.getRatingStars((null == e.trip ? null : e.trip.ratingAverage) || 0)
                    )
                  ),
                  s['\u0275\u0275advance'](5),
                  s['\u0275\u0275property']('ngStyle', s['\u0275\u0275pureFunction1'](43, M, e.getRatingStars(5))),
                  s['\u0275\u0275advance'](4),
                  s['\u0275\u0275textInterpolate1']('(', e.trip.reviews ? e.trip.reviews : 0, ') reviews'),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275property']('ngIf', !e.isInWishlist()),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property']('ngIf', e.isInWishlist()),
                  s['\u0275\u0275advance'](30),
                  s['\u0275\u0275textInterpolate1']('\n          ', e.trip.slug, '\n        '),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275textInterpolate'](e.trip.description),
                  s['\u0275\u0275advance'](6),
                  s['\u0275\u0275propertyInterpolate']('src', e.trip.photos[0], s['\u0275\u0275sanitizeUrl']),
                  s['\u0275\u0275advance'](28),
                  s['\u0275\u0275property'](
                    'ngIf',
                    (null == e.trip || null == e.trip.itinerary ? null : e.trip.itinerary.length) > 0
                  ),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property'](
                    'ngIf',
                    0 == (null == e.trip || null == e.trip.itinerary ? null : e.trip.itinerary.length)
                  ),
                  s['\u0275\u0275advance'](22),
                  s['\u0275\u0275property']('ngForOf', e.trip.activities),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275property']('ngForOf', e.trip.categories),
                  s['\u0275\u0275advance'](8),
                  s['\u0275\u0275property']('ngForOf', e.trip.facilities),
                  s['\u0275\u0275advance'](8),
                  s['\u0275\u0275property']('ngForOf', e.trip.Locations),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275textInterpolate1']('\n              ', e.trip.cancellationPolicy, '\n            '),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275property']('ngIf', !e.isInWishlist()),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property']('ngIf', e.isInWishlist()),
                  s['\u0275\u0275advance'](16),
                  s['\u0275\u0275property']('formGroup', e.bookingForm),
                  s['\u0275\u0275advance'](15),
                  s['\u0275\u0275property']('placeholder', 'name'),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.fullName.valid || e.bookingForm.controls.fullName.untouched
                  ),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275property']('placeholder', 'email'),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.email.valid || e.bookingForm.controls.email.untouched
                  ),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275property']('placeholder', 'phone no.'),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.mobile.valid || e.bookingForm.controls.mobile.untouched
                  ),
                  s['\u0275\u0275advance'](9),
                  s['\u0275\u0275property']('placeholder', 'C.N.I.C'),
                  s['\u0275\u0275advance'](2),
                  s['\u0275\u0275property'](
                    'hidden',
                    e.bookingForm.controls.idCard.valid || e.bookingForm.controls.idCard.untouched
                  ),
                  s['\u0275\u0275advance'](14),
                  s['\u0275\u0275property']('disabled', 1 == e.bookingForm.get('noOfAdults').value),
                  s['\u0275\u0275advance'](3),
                  s['\u0275\u0275propertyInterpolate']('value', e.bookingForm.get('noOfAdults').value),
                  s['\u0275\u0275advance'](17),
                  s['\u0275\u0275property']('disabled', e.bookingForm.get('noOfChildren').value < 1),
                  s['\u0275\u0275advance'](3),
                  s['\u0275\u0275propertyInterpolate']('value', e.bookingForm.get('noOfChildren').value),
                  s['\u0275\u0275advance'](10),
                  s['\u0275\u0275property']('disabled', e.bookingForm.invalid));
            },
            directives: [
              i.o,
              i.n,
              i.m,
              f.a,
              g.a,
              u.NgControlStatusGroup,
              u.FormGroupDirective,
              u.DefaultValueAccessor,
              u.NgControlStatus,
              u.FormControlName,
            ],
            pipes: [i.e, i.f],
            styles: [
              '.bg-img[_ngcontent-%COMP%]{margin-top:-120px;background-color:#000}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover;opacity:.7!important}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-300px;z-index:1;text-align:left}@media (min-width:768px){#trip-content[_ngcontent-%COMP%]{margin-top:0!important;margin-left:20px}}@media (max-width:767px){#trip-content[_ngcontent-%COMP%]{margin-left:20px}}@media (min-width:768px){ .login-popup__main{margin-top:10em!important;margin-right:unset!important;margin-bottom:unset!important;margin-left:0!important;background-color:#fff;max-width:unset!important}}.itinerary-day__label[_ngcontent-%COMP%]{display:block}ul.trip-timeline[_ngcontent-%COMP%]   li.trip-event[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:-10px;color:#8cc63e}ul.trip-timeline[_ngcontent-%COMP%]   li.trip-event[_ngcontent-%COMP%]   span.itinerary-time__label[_ngcontent-%COMP%]{margin-bottom:10px}@media screen and (max-width:768px){.trip-body[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%]{background:#fafafa;padding:20px 0;margin:0 auto 25px;border-radius:10px}}.facilities-list[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:-2px!important}.visa-availabilty__popup[_ngcontent-%COMP%]{border-radius:10px}.popup__heading[_ngcontent-%COMP%]{color:#8cc63e}.create-plan__checkIn[_ngcontent-%COMP%]{height:30px!important;font-size:12px!important;padding:0 0 0 2px!important}.plan__name[_ngcontent-%COMP%]{height:35px!important;padding:0 0 0 10px!important}.submit__button[_ngcontent-%COMP%]{line-height:unset!important;height:35px!important}.info__list[_ngcontent-%COMP%]{display:flex!important;color:#fff;font-size:2.4vh;margin-bottom:10px}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:sans-serif}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){padding-right:10px!important;padding-left:10px!important}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-right:10px!important}.info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:nth-child(2)){border-right:2px solid #8cc63e}',
            ],
          })),
          t
        );
      })();
      var j = n('oOf3');
      const B = function (t) {
        return { width: t };
      };
      function T(t, e) {
        if (
          (1 & t &&
            (s['\u0275\u0275elementStart'](0, 'div', 30),
            s['\u0275\u0275text'](1, '\n          '),
            s['\u0275\u0275elementStart'](2, 'a', 31),
            s['\u0275\u0275text'](3, '\n            '),
            s['\u0275\u0275elementStart'](4, 'div', 32),
            s['\u0275\u0275text'](5, '\n              '),
            s['\u0275\u0275element'](6, 'img', 33),
            s['\u0275\u0275text'](7, '\n            '),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](8, '\n            '),
            s['\u0275\u0275text'](9, '\n            '),
            s['\u0275\u0275elementStart'](10, 'div', 34),
            s['\u0275\u0275text'](11, '\n              '),
            s['\u0275\u0275elementStart'](12, 'h4', 35),
            s['\u0275\u0275text'](13),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](14, '\n              '),
            s['\u0275\u0275elementStart'](15, 'span', 36),
            s['\u0275\u0275text'](16, '\n                '),
            s['\u0275\u0275element'](17, 'span', 37),
            s['\u0275\u0275text'](18, '\n              '),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](19, '\n\n              '),
            s['\u0275\u0275elementStart'](20, 'span', 38),
            s['\u0275\u0275text'](21, '\n                '),
            s['\u0275\u0275element'](22, 'span', 37),
            s['\u0275\u0275text'](23, '\n              '),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](24, '\n              '),
            s['\u0275\u0275elementStart'](25, 'span', 39),
            s['\u0275\u0275text'](26),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](27, '\n            '),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](28, '\n            '),
            s['\u0275\u0275text'](29, '\n          '),
            s['\u0275\u0275elementEnd'](),
            s['\u0275\u0275text'](30, '\n        '),
            s['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = s['\u0275\u0275nextContext']();
          s['\u0275\u0275advance'](2),
            s['\u0275\u0275propertyInterpolate2'](
              'href',
              'trip/detail/',
              t._id,
              '/',
              t.slug,
              '',
              s['\u0275\u0275sanitizeUrl']
            ),
            s['\u0275\u0275advance'](4),
            s['\u0275\u0275property']('src', t.thumbnails[0], s['\u0275\u0275sanitizeUrl']),
            s['\u0275\u0275advance'](7),
            s['\u0275\u0275textInterpolate'](t.title),
            s['\u0275\u0275advance'](4),
            s['\u0275\u0275property'](
              'ngStyle',
              s['\u0275\u0275pureFunction1'](7, B, n.getRatingStars((null == t ? null : t.ratingAverage) || 0))
            ),
            s['\u0275\u0275advance'](5),
            s['\u0275\u0275property']('ngStyle', s['\u0275\u0275pureFunction1'](9, B, n.getRatingStars(5))),
            s['\u0275\u0275advance'](4),
            s['\u0275\u0275textInterpolate1'](' (', t.reviews ? t.reviews : 0, ') reviews');
        }
      }
      const W = function (t) {
          return { itemsPerPage: 6, currentPage: t };
        },
        N = [
          { path: 'detail/:id/:slug', resolve: { trip: m }, component: P },
          {
            path: 'listing',
            resolve: { trips: c },
            component: (() => {
              class t {
                constructor(t, e) {
                  (this.route = t),
                    (this.eventService = e),
                    (this.p = 1),
                    (this.trips = []),
                    (this.trips = this.route.snapshot.data.trips);
                }
                ngOnInit() {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                getRatingStars(t) {
                  return (parseFloat(t) / 5) * 100 + '%';
                }
              }
              return (
                (t.ɵfac = function (e) {
                  return new (e || t)(s['\u0275\u0275directiveInject'](a.a), s['\u0275\u0275directiveInject'](d.a));
                }),
                (t.ɵcmp = s['\u0275\u0275defineComponent']({
                  type: t,
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
                      (s['\u0275\u0275text'](0, '\n'),
                      s['\u0275\u0275elementStart'](1, 'section', 0),
                      s['\u0275\u0275text'](2, '\n  '),
                      s['\u0275\u0275elementStart'](3, 'div', 1),
                      s['\u0275\u0275text'](4, '\n    '),
                      s['\u0275\u0275element'](5, 'img', 2),
                      s['\u0275\u0275text'](6, '\n    '),
                      s['\u0275\u0275text'](7, '\n  '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](8, '\n  '),
                      s['\u0275\u0275elementStart'](9, 'div', 3),
                      s['\u0275\u0275text'](10, '\n    '),
                      s['\u0275\u0275elementStart'](11, 'div', 4),
                      s['\u0275\u0275text'](12, '\n      '),
                      s['\u0275\u0275elementStart'](13, 'div', 5),
                      s['\u0275\u0275text'](14, '\n        '),
                      s['\u0275\u0275elementStart'](15, 'div', 6),
                      s['\u0275\u0275text'](16, '\n          '),
                      s['\u0275\u0275elementStart'](17, 'h1', 7),
                      s['\u0275\u0275text'](18, 'trip listing'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](19, '\n          '),
                      s['\u0275\u0275text'](20, '\n        '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](21, '\n        '),
                      s['\u0275\u0275text'](22, '\n      '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](23, '\n      '),
                      s['\u0275\u0275text'](24, '\n    '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](25, '\n    '),
                      s['\u0275\u0275text'](26, '\n  '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](27, '\n  '),
                      s['\u0275\u0275text'](28, '\n'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](29, '\n'),
                      s['\u0275\u0275text'](30, '\n\n'),
                      s['\u0275\u0275text'](31, '\n'),
                      s['\u0275\u0275elementStart'](32, 'div', 8),
                      s['\u0275\u0275text'](33, '\n  '),
                      s['\u0275\u0275elementStart'](34, 'div', 3),
                      s['\u0275\u0275text'](35, '\n    '),
                      s['\u0275\u0275elementStart'](36, 'div', 4),
                      s['\u0275\u0275text'](37, '\n      '),
                      s['\u0275\u0275elementStart'](38, 'div', 9),
                      s['\u0275\u0275text'](39, '\n        '),
                      s['\u0275\u0275elementStart'](40, 'span', 10),
                      s['\u0275\u0275text'](41, 'trips'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](42, '\n        '),
                      s['\u0275\u0275elementStart'](43, 'h2', 11),
                      s['\u0275\u0275text'](44, 'all trips'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](45, '\n      '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](46, '\n      '),
                      s['\u0275\u0275elementStart'](47, 'div', 12),
                      s['\u0275\u0275text'](48, '\n        '),
                      s['\u0275\u0275text'](49, '\n      '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](50, '\n    '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](51, '\n    '),
                      s['\u0275\u0275elementStart'](52, 'div', 13),
                      s['\u0275\u0275text'](53, '\n      '),
                      s['\u0275\u0275elementStart'](54, 'div', 14),
                      s['\u0275\u0275text'](55, '\n        '),
                      s['\u0275\u0275template'](56, T, 31, 11, 'div', 15),
                      s['\u0275\u0275pipe'](57, 'paginate'),
                      s['\u0275\u0275text'](58, '\n        '),
                      s['\u0275\u0275text'](59, '\n      '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](60, '\n      '),
                      s['\u0275\u0275text'](61, '\n    '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](62, '\n  '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](63, '\n  '),
                      s['\u0275\u0275elementStart'](64, 'div', 3),
                      s['\u0275\u0275text'](65, '\n    '),
                      s['\u0275\u0275elementStart'](66, 'div', 4),
                      s['\u0275\u0275text'](67, '\n      '),
                      s['\u0275\u0275elementStart'](68, 'div', 16),
                      s['\u0275\u0275text'](69, '\n        '),
                      s['\u0275\u0275elementStart'](70, 'div'),
                      s['\u0275\u0275text'](71, '\n          '),
                      s['\u0275\u0275elementStart'](72, 'pagination-controls', 17),
                      s['\u0275\u0275listener']('pageChange', function (t) {
                        return (e.p = t);
                      }),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](73, '\n        '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](74, '\n      '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](75, '\n    '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](76, '\n  '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](77, '\n'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](78, '\n\n'),
                      s['\u0275\u0275text'](79, '\n'),
                      s['\u0275\u0275elementStart'](80, 'section', 18),
                      s['\u0275\u0275text'](81, '\n  '),
                      s['\u0275\u0275elementStart'](82, 'div', 3),
                      s['\u0275\u0275text'](83, '\n    '),
                      s['\u0275\u0275elementStart'](84, 'div', 4),
                      s['\u0275\u0275text'](85, '\n      '),
                      s['\u0275\u0275elementStart'](86, 'div', 19),
                      s['\u0275\u0275text'](87, '\n        '),
                      s['\u0275\u0275elementStart'](88, 'div', 20),
                      s['\u0275\u0275text'](89, '\n          '),
                      s['\u0275\u0275elementStart'](90, 'h2', 11),
                      s['\u0275\u0275text'](91, 'Browse trips'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](92, '\n          '),
                      s['\u0275\u0275elementStart'](93, 'form', 21),
                      s['\u0275\u0275text'](94, '\n            '),
                      s['\u0275\u0275element'](95, 'input', 22),
                      s['\u0275\u0275text'](96, '\n            '),
                      s['\u0275\u0275elementStart'](97, 'button', 23),
                      s['\u0275\u0275element'](98, 'i', 24),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](99, '\n          '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](100, '\n        '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](101, '\n        '),
                      s['\u0275\u0275text'](102, '\n        '),
                      s['\u0275\u0275elementStart'](103, 'div', 25),
                      s['\u0275\u0275text'](104, '\n          '),
                      s['\u0275\u0275elementStart'](105, 'div', 26),
                      s['\u0275\u0275text'](106, '\n            '),
                      s['\u0275\u0275elementStart'](107, 'h2', 11),
                      s['\u0275\u0275text'](108, 'Search by Category'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](109, '\n          '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](110, '\n\n          '),
                      s['\u0275\u0275elementStart'](111, 'div', 27),
                      s['\u0275\u0275text'](112, '\n            '),
                      s['\u0275\u0275elementStart'](113, 'span', 28),
                      s['\u0275\u0275elementStart'](114, 'a', 29),
                      s['\u0275\u0275text'](115, 'All'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](116, '\n            '),
                      s['\u0275\u0275text'](117, '\n          '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](118, '\n        '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](119, '\n        '),
                      s['\u0275\u0275text'](120, '\n      '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](121, '\n    '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](122, '\n  '),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](123, '\n'),
                      s['\u0275\u0275elementEnd'](),
                      s['\u0275\u0275text'](124, '\n')),
                      2 & t &&
                        (s['\u0275\u0275advance'](5),
                        s['\u0275\u0275property'](
                          'src',
                          null == e.data ? null : e.data.photos[0],
                          s['\u0275\u0275sanitizeUrl']
                        ),
                        s['\u0275\u0275advance'](51),
                        s['\u0275\u0275property'](
                          'ngForOf',
                          s['\u0275\u0275pipeBind2'](57, 2, e.trips, s['\u0275\u0275pureFunction1'](5, W, e.p))
                        ));
                  },
                  directives: [
                    i.m,
                    j.c,
                    u['\u0275angular_packages_forms_forms_y'],
                    u.NgControlStatusGroup,
                    u.NgForm,
                    i.o,
                  ],
                  pipes: [j.b],
                  styles: [
                    '.bg-img[_ngcontent-%COMP%]{margin-top:-120px}.bg-img[_ngcontent-%COMP%], .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:200px}.bg-img[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%]{width:100%;height:500px;-o-object-fit:cover;object-fit:cover}.slide__content[_ngcontent-%COMP%]{position:absolute;top:-200px;z-index:1;text-align:left}.post__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.category-btn[_ngcontent-%COMP%]{display:inline-block;margin:3px}.post__content[_ngcontent-%COMP%]{background-color:transparent}',
                  ],
                })),
                t
              );
            })(),
          },
        ];
      let V = (() => {
          class t {}
          return (
            (t.ɵmod = s['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = s['\u0275\u0275defineInjector']({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[a.g.forChild(N)], a.g],
            })),
            t
          );
        })(),
        A = (() => {
          class t {}
          return (
            (t.ɵmod = s['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = s['\u0275\u0275defineInjector']({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.c, o.a, r.b, V, l.a.forRoot({ apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA' })]],
            })),
            t
          );
        })();
    },
    ucq3: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var i = n('fXoL');
      let r = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
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
