(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    yX1w: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'MapModule', function () {
          return I;
        });
      var a = n('ofXK'),
        i = n('tyNb'),
        o = n('fTLw'),
        l = n('fXoL');
      let r = (() => {
        class t {
          constructor(t) {
            this.eventService = t;
          }
          resolve(t, e) {
            return this.eventService.getLocationDetail(t.params.slug);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(l['\u0275\u0275inject'](o.a));
          }),
          (t.ɵprov = l['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      var s = n('PSy5'),
        c = n('pxUr');
      const d = function (t) {
        return { displayBold: t };
      };
      function m(t, e) {
        if (1 & t) {
          const t = l['\u0275\u0275getCurrentView']();
          l['\u0275\u0275elementStart'](0, 'ul', 20),
            l['\u0275\u0275text'](1, '\n                '),
            l['\u0275\u0275elementStart'](2, 'li'),
            l['\u0275\u0275text'](3, '\n                  '),
            l['\u0275\u0275elementStart'](4, 'a', 21),
            l['\u0275\u0275listener']('click', function () {
              l['\u0275\u0275restoreView'](t);
              const n = e.$implicit;
              return l['\u0275\u0275nextContext']().navigateOnClick(n);
            }),
            l['\u0275\u0275text'](5),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](6, '\n                '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](7, '\n              '),
            l['\u0275\u0275elementEnd']();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = l['\u0275\u0275nextContext']();
          l['\u0275\u0275advance'](4),
            l['\u0275\u0275property']('ngClass', l['\u0275\u0275pureFunction1'](2, d, n.selectedLoc == t.slug)),
            l['\u0275\u0275advance'](1),
            l['\u0275\u0275textInterpolate'](t.name);
        }
      }
      function u(t, e) {
        if (1 & t) {
          const t = l['\u0275\u0275getCurrentView']();
          l['\u0275\u0275elementStart'](0, 'ul', 20),
            l['\u0275\u0275text'](1, '\n                '),
            l['\u0275\u0275elementStart'](2, 'li', 25),
            l['\u0275\u0275listener']('click', function () {
              l['\u0275\u0275restoreView'](t);
              const n = e.$implicit;
              return l['\u0275\u0275nextContext'](2).getSurrounding(n);
            }),
            l['\u0275\u0275text'](3, '\n                  '),
            l['\u0275\u0275elementStart'](4, 'a', 26),
            l['\u0275\u0275text'](5),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](6, '\n                '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](7, '\n                '),
            l['\u0275\u0275text'](8, '\n              '),
            l['\u0275\u0275elementEnd']();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = l['\u0275\u0275nextContext'](2);
          l['\u0275\u0275advance'](4),
            l['\u0275\u0275property']('ngClass', l['\u0275\u0275pureFunction1'](2, d, n.selectedSurr == t.name)),
            l['\u0275\u0275advance'](1),
            l['\u0275\u0275textInterpolate'](t.name);
        }
      }
      function p(t, e) {
        if (
          (1 & t &&
            (l['\u0275\u0275elementStart'](0, 'div', 4),
            l['\u0275\u0275text'](1, '\n          '),
            l['\u0275\u0275elementStart'](2, 'div', 22),
            l['\u0275\u0275text'](3, '\n            '),
            l['\u0275\u0275elementStart'](4, 'a', 6),
            l['\u0275\u0275element'](5, 'img', 23),
            l['\u0275\u0275text'](6, 'where to go'),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](7, '\n          '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](8, '\n          '),
            l['\u0275\u0275text'](9, '\n          '),
            l['\u0275\u0275elementStart'](10, 'div', 24),
            l['\u0275\u0275text'](11, '\n            '),
            l['\u0275\u0275elementStart'](12, 'div', 9),
            l['\u0275\u0275text'](13, '\n              '),
            l['\u0275\u0275template'](14, u, 9, 4, 'ul', 10),
            l['\u0275\u0275text'](15, '\n            '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](16, '\n            '),
            l['\u0275\u0275text'](17, '\n          '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](18, '\n        '),
            l['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = l['\u0275\u0275nextContext']();
          l['\u0275\u0275advance'](14), l['\u0275\u0275property']('ngForOf', t.surroundings);
        }
      }
      const g = function () {
          return { width: 25, height: 25 };
        },
        x = function (t, e) {
          return { url: t, scaledSize: e };
        };
      function h(t, e) {
        if (
          (1 & t &&
            (l['\u0275\u0275elementStart'](0, 'agm-marker', 27),
            l['\u0275\u0275text'](1, '\n        '),
            l['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          l['\u0275\u0275property']('latitude', null == t || null == t.location ? null : t.location.coordinates[1])(
            'longitude',
            null == t || null == t.location ? null : t.location.coordinates[0]
          )('iconUrl', l['\u0275\u0275pureFunction2'](4, x, t.icon, l['\u0275\u0275pureFunction0'](3, g)));
        }
      }
      let f = (() => {
        class t {
          constructor(t, e, n, a, i) {
            (this.shellService = t),
              (this.route = e),
              (this.router = n),
              (this.location = a),
              (this.eventService = i),
              (this.markers = []),
              (this.zoom = 0),
              (this.options = { mapTypeId: 'hybrid', disableDoubleClickZoom: !0, maxZoom: 15, minZoom: 8 }),
              (this.locations = []),
              (this.surroundings = []),
              (this.surroundingMakers = []),
              (this.infoWondowData = { photo: '', alias: '', province: '', redirectLink: '' }),
              (this.getSurrounding = (t) => {
                (this.selectedSurr = t.name),
                  this.eventService.getSurroundings([this.center.lat, this.center.lng], t.typeKey).subscribe((t) => {
                    this.surroundingMakers = t.data;
                  });
              }),
              (this.selectedLoc = this.route.snapshot.paramMap.get('slug'));
          }
          ngAfterContentChecked() {
            this.locations.length > 0 && this.getGeoLoc(this.selectedLoc);
          }
          ngOnInit() {
            window.scrollTo({ top: 0, behavior: 'smooth' }),
              this.eventService.getAllCities().subscribe((t) => {
                t.data.forEach((t) => {
                  'city' === t.locationType && this.locations.push(t);
                });
              }),
              (this.selectedLoc = this.route.snapshot.paramMap.get('slug')),
              this.selectedLoc ||
                ((this.center = { lat: 33.6844, lng: 73.0479 }),
                (this.infoWondowData.photo =
                  'https://production9240.blob.core.windows.net/ptdc-thumbnails/6c4116ee-c183-4ff3-aa67-3519619326dd'),
                (this.infoWondowData.alias = 'Islamabad'),
                (this.infoWondowData.redirectLink = 'where-to-go/category/federal/location/islamabad'));
          }
          getGeoLoc(t) {
            var e, n, a, i;
            if (this.selectedLoc && this.locations) {
              var o = this.locations.filter((e) => e.slug == t);
              (this.center = {
                lat:
                  null === (n = null === (e = o[0]) || void 0 === e ? void 0 : e.location) || void 0 === n
                    ? void 0
                    : n.coordinates[1],
                lng:
                  null === (i = null === (a = o[0]) || void 0 === a ? void 0 : a.location) || void 0 === i
                    ? void 0
                    : i.coordinates[0],
              }),
                (this.surroundings = this.sortSurroundings(o[0].surroundings)),
                (this.infoWondowData.photo = o[0].thumbnail),
                (this.infoWondowData.alias = o[0].alias),
                (this.infoWondowData.redirectLink = `where-to-go/category/${o[0].parentProvince}/${o[0].type}/${o[0].name}`);
            }
          }
          navigateOnClick(t) {
            (this.selectedLoc = t.slug),
              (this.center = { lat: t.location.coordinates[1], lng: t.location.coordinates[0] }),
              this.location.go('/map/cities/' + t.slug),
              this.getGeoLoc(this.selectedLoc);
          }
          sortSurroundings(t) {
            return t.sort((t, e) => {
              let n = t.name.toLowerCase(),
                a = e.name.toLowerCase();
              return n < a ? -1 : n > a ? 1 : 0;
            });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              l['\u0275\u0275directiveInject'](s.a),
              l['\u0275\u0275directiveInject'](i.a),
              l['\u0275\u0275directiveInject'](i.d),
              l['\u0275\u0275directiveInject'](a.j),
              l['\u0275\u0275directiveInject'](o.a)
            );
          }),
          (t.ɵcmp = l['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['app-map']],
            decls: 66,
            vars: 12,
            consts: [
              ['id', 'map', 1, 'map'],
              [1, 'container-fluid'],
              [1, 'col-md-3', 'p-0'],
              ['id', 'accordion'],
              [1, 'accordion-item'],
              ['data-toggle', 'collapse', 'data-target', '#collapse1', 1, 'accordion__item-header', 'opened'],
              [1, 'accordion__item-title'],
              ['src', 'assets/images/icons/building.svg'],
              ['id', 'collapse1', 'data-parent', '#accordion', 1, 'collapse', 'show'],
              [1, 'accordion__item-body'],
              ['class', 'map-list list-unstyled', 4, 'ngFor', 'ngForOf'],
              ['class', 'accordion-item', 4, 'ngIf'],
              [1, 'col-md-9', 'p-0'],
              [3, 'zoom', 'latitude', 'longitude'],
              [3, 'latitude', 'longitude'],
              [3, 'disableAutoPan'],
              [3, 'href'],
              [1, 'info-img', 3, 'src'],
              [1, 'mx-3', 'd-inline', 'info-desc'],
              [3, 'latitude', 'longitude', 'iconUrl', 4, 'ngFor', 'ngForOf'],
              [1, 'map-list', 'list-unstyled'],
              [2, 'cursor', 'pointer', 3, 'ngClass', 'click'],
              ['data-toggle', 'collapse', 'data-target', '#collapse3', 1, 'accordion__item-header'],
              ['src', 'assets/images/icons/pin.svg'],
              ['id', 'collapse3', 'data-parent', '#accordion', 1, 'collapse'],
              [2, 'cursor', 'pointer', 3, 'click'],
              [3, 'ngClass'],
              [3, 'latitude', 'longitude', 'iconUrl'],
            ],
            template: function (t, e) {
              1 & t &&
                (l['\u0275\u0275text'](0, '\n'),
                l['\u0275\u0275elementStart'](1, 'div', 0),
                l['\u0275\u0275text'](2, '\n  '),
                l['\u0275\u0275elementStart'](3, 'div', 1),
                l['\u0275\u0275text'](4, '\n    '),
                l['\u0275\u0275elementStart'](5, 'div', 2),
                l['\u0275\u0275text'](6, '\n      '),
                l['\u0275\u0275elementStart'](7, 'div', 3),
                l['\u0275\u0275text'](8, '\n        '),
                l['\u0275\u0275elementStart'](9, 'div', 4),
                l['\u0275\u0275text'](10, '\n          '),
                l['\u0275\u0275elementStart'](11, 'div', 5),
                l['\u0275\u0275text'](12, '\n            '),
                l['\u0275\u0275elementStart'](13, 'a', 6),
                l['\u0275\u0275element'](14, 'img', 7),
                l['\u0275\u0275text'](15, 'Cities'),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](16, '\n          '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](17, '\n          '),
                l['\u0275\u0275text'](18, '\n          '),
                l['\u0275\u0275elementStart'](19, 'div', 8),
                l['\u0275\u0275text'](20, '\n            '),
                l['\u0275\u0275elementStart'](21, 'div', 9),
                l['\u0275\u0275text'](22, '\n              '),
                l['\u0275\u0275template'](23, m, 8, 4, 'ul', 10),
                l['\u0275\u0275text'](24, '\n            '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](25, '\n            '),
                l['\u0275\u0275text'](26, '\n          '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](27, '\n        '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](28, '\n        '),
                l['\u0275\u0275text'](29, '\n        '),
                l['\u0275\u0275text'](30, '\n        '),
                l['\u0275\u0275text'](31, '\n        '),
                l['\u0275\u0275template'](32, p, 19, 1, 'div', 11),
                l['\u0275\u0275text'](33, '\n        '),
                l['\u0275\u0275text'](34, '\n      '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](35, '\n    '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](36, '\n    '),
                l['\u0275\u0275elementStart'](37, 'div', 12),
                l['\u0275\u0275text'](38, '\n      '),
                l['\u0275\u0275elementStart'](39, 'agm-map', 13),
                l['\u0275\u0275text'](40, '\n        '),
                l['\u0275\u0275elementStart'](41, 'agm-marker', 14),
                l['\u0275\u0275text'](42, '\n          '),
                l['\u0275\u0275elementStart'](43, 'agm-info-window', 15),
                l['\u0275\u0275text'](44, '\n            '),
                l['\u0275\u0275elementStart'](45, 'a', 16),
                l['\u0275\u0275text'](46, '\n              '),
                l['\u0275\u0275elementStart'](47, 'div'),
                l['\u0275\u0275text'](48, '\n                '),
                l['\u0275\u0275element'](49, 'img', 17),
                l['\u0275\u0275text'](50, '\n                '),
                l['\u0275\u0275elementStart'](51, 'b', 18),
                l['\u0275\u0275text'](52),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](53, '\n              '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](54, '\n            '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](55, '\n          '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](56, '\n        '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](57, '\n\n        '),
                l['\u0275\u0275template'](58, h, 2, 7, 'agm-marker', 19),
                l['\u0275\u0275text'](59, '\n      '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](60, '\n    '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](61, '\n  '),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](62, '\n  '),
                l['\u0275\u0275text'](63, '\n'),
                l['\u0275\u0275elementEnd'](),
                l['\u0275\u0275text'](64, '\n'),
                l['\u0275\u0275text'](65, '\n')),
                2 & t &&
                  (l['\u0275\u0275advance'](23),
                  l['\u0275\u0275property']('ngForOf', e.locations),
                  l['\u0275\u0275advance'](9),
                  l['\u0275\u0275property']('ngIf', e.surroundings.length),
                  l['\u0275\u0275advance'](7),
                  l['\u0275\u0275property']('zoom', 13)('latitude', null == e.center ? null : e.center.lat)(
                    'longitude',
                    null == e.center ? null : e.center.lng
                  ),
                  l['\u0275\u0275advance'](2),
                  l['\u0275\u0275property']('latitude', null == e.center ? null : e.center.lat)(
                    'longitude',
                    null == e.center ? null : e.center.lng
                  ),
                  l['\u0275\u0275advance'](2),
                  l['\u0275\u0275property']('disableAutoPan', !0),
                  l['\u0275\u0275advance'](2),
                  l['\u0275\u0275propertyInterpolate'](
                    'href',
                    e.infoWondowData.redirectLink,
                    l['\u0275\u0275sanitizeUrl']
                  ),
                  l['\u0275\u0275advance'](4),
                  l['\u0275\u0275propertyInterpolate'](
                    'src',
                    null == e.infoWondowData ? null : e.infoWondowData.photo,
                    l['\u0275\u0275sanitizeUrl']
                  ),
                  l['\u0275\u0275advance'](3),
                  l['\u0275\u0275textInterpolate'](null == e.infoWondowData ? null : e.infoWondowData.alias),
                  l['\u0275\u0275advance'](6),
                  l['\u0275\u0275property']('ngForOf', e.surroundingMakers));
            },
            directives: [a.m, a.n, c.c, c.d, c.b, a.l],
            styles: ['.info-img[_ngcontent-%COMP%]{width:25vh}.info-desc[_ngcontent-%COMP%]{font-size:14px}'],
          })),
          t
        );
      })();
      const v = function (t) {
        return { ' active': t };
      };
      function b(t, e) {
        if (
          (1 & t &&
            (l['\u0275\u0275elementStart'](0, 'div', 19),
            l['\u0275\u0275text'](1, '\n          '),
            l['\u0275\u0275elementStart'](2, 'iframe', 20),
            l['\u0275\u0275text'](3, ' '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](4, '\n        '),
            l['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = l['\u0275\u0275nextContext']();
          l['\u0275\u0275property']('ngClass', l['\u0275\u0275pureFunction1'](1, v, 1 === t.tab));
        }
      }
      const S = function (t) {
        return { active: t };
      };
      function C(t, e) {
        if (
          (1 & t &&
            (l['\u0275\u0275elementStart'](0, 'div', 21),
            l['\u0275\u0275text'](1, '\n          '),
            l['\u0275\u0275elementStart'](2, 'iframe', 22),
            l['\u0275\u0275text'](3, ' '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](4, '\n        '),
            l['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = l['\u0275\u0275nextContext']();
          l['\u0275\u0275property']('ngClass', l['\u0275\u0275pureFunction1'](1, S, 2 === t.tab));
        }
      }
      function y(t, e) {
        if (
          (1 & t &&
            (l['\u0275\u0275elementStart'](0, 'div', 23),
            l['\u0275\u0275text'](1, '\n          '),
            l['\u0275\u0275elementStart'](2, 'iframe', 24),
            l['\u0275\u0275text'](3, ' '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](4, '\n        '),
            l['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = l['\u0275\u0275nextContext']();
          l['\u0275\u0275property']('ngClass', l['\u0275\u0275pureFunction1'](1, S, 3 === t.tab));
        }
      }
      function E(t, e) {
        if (
          (1 & t &&
            (l['\u0275\u0275elementStart'](0, 'div', 25),
            l['\u0275\u0275text'](1, '\n          '),
            l['\u0275\u0275elementStart'](2, 'iframe', 26),
            l['\u0275\u0275text'](3, ' '),
            l['\u0275\u0275elementEnd'](),
            l['\u0275\u0275text'](4, '\n        '),
            l['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = l['\u0275\u0275nextContext']();
          l['\u0275\u0275property']('ngClass', l['\u0275\u0275pureFunction1'](1, S, 4 === t.tab));
        }
      }
      const w = [
        { path: '', component: f },
        { path: 'cities/:slug', component: f, resolve: { slug: r } },
        { path: 'what-to-do/:slug', component: f, resolve: { slug: r } },
        { path: 'where-to-go/:slug', component: f, resolve: { slug: r } },
        {
          path: '3d-map',
          component: (() => {
            class t {
              constructor() {
                this.tab = 1;
              }
              ngOnInit() {}
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = l['\u0275\u0275defineComponent']({
                type: t,
                selectors: [['app-three-d-map']],
                decls: 68,
                vars: 20,
                consts: [
                  ['id', 'bookingSectionTab', 2, 'padding-top', '80px'],
                  ['id', 'bookingtabs', 1, 'booking-home', 'p-0'],
                  [1, 'container'],
                  [1, 'col-md-12'],
                  ['id', 'booking-tabs'],
                  [1, 'col-md-12', 'p-0'],
                  [1, 'col-md-2', 'p-0', 'pointer'],
                  ['id', 'tab1-tab', 'rel', '#tab1', 3, 'translate', 'ngClass', 'click'],
                  ['src', ''],
                  ['id', 'tab2-tab', 'rel', '#tab2', 3, 'translate', 'ngClass', 'click'],
                  ['id', 'tab3-tab', 'rel', '#tab3', 3, 'translate', 'ngClass', 'click'],
                  ['id', 'tab4-tab', 'rel', '#tab4', 3, 'translate', 'ngClass', 'click'],
                  [1, 'yellow-bar'],
                  [1, 'col-12', 'col-md-12'],
                  [1, 'tab-content'],
                  ['id', 'tab1', 3, 'ngClass', 4, 'ngIf'],
                  ['id', 'tab2', 3, 'ngClass', 4, 'ngIf'],
                  ['id', 'tab3', 3, 'ngClass', 4, 'ngIf'],
                  ['id', 'tab4', 3, 'ngClass', 4, 'ngIf'],
                  ['id', 'tab1', 3, 'ngClass'],
                  ['src', 'https://interactivegrp.com/salam/islamabad', 'title', 'Islamabad 3d map'],
                  ['id', 'tab2', 3, 'ngClass'],
                  ['src', ' https://interactivegrp.com/salam/pakistan', 'title', 'pakistan 3d map'],
                  ['id', 'tab3', 3, 'ngClass'],
                  ['src', 'https://interactivegrp.com/salam/gandhara', 'title', 'gandhara 3d map'],
                  ['id', 'tab4', 3, 'ngClass'],
                  ['src', 'https://interactivegrp.com/salam/gurudwara', 'title', 'gurudwara 3d map'],
                ],
                template: function (t, e) {
                  1 & t &&
                    (l['\u0275\u0275text'](0, '\n'),
                    l['\u0275\u0275element'](1, 'div', 0),
                    l['\u0275\u0275text'](2, '\n'),
                    l['\u0275\u0275elementStart'](3, 'section', 1),
                    l['\u0275\u0275text'](4, '\n  '),
                    l['\u0275\u0275text'](5, '\n  '),
                    l['\u0275\u0275elementStart'](6, 'div', 2),
                    l['\u0275\u0275text'](7, '\n    '),
                    l['\u0275\u0275elementStart'](8, 'div', 3),
                    l['\u0275\u0275text'](9, '\n      '),
                    l['\u0275\u0275text'](10, '\n    '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](11, '\n    '),
                    l['\u0275\u0275elementStart'](12, 'header'),
                    l['\u0275\u0275text'](13, '\n      '),
                    l['\u0275\u0275elementStart'](14, 'div', 4),
                    l['\u0275\u0275text'](15, '\n        '),
                    l['\u0275\u0275elementStart'](16, 'ul', 5),
                    l['\u0275\u0275text'](17, '\n          '),
                    l['\u0275\u0275elementStart'](18, 'li', 6),
                    l['\u0275\u0275text'](19, '\n            '),
                    l['\u0275\u0275elementStart'](20, 'a', 7),
                    l['\u0275\u0275listener']('click', function () {
                      return (e.tab = 1);
                    }),
                    l['\u0275\u0275element'](21, 'img', 8),
                    l['\u0275\u0275text'](22, 'islamabad'),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](23, '\n          '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](24, '\n          '),
                    l['\u0275\u0275elementStart'](25, 'li', 6),
                    l['\u0275\u0275text'](26, '\n            '),
                    l['\u0275\u0275elementStart'](27, 'a', 9),
                    l['\u0275\u0275listener']('click', function () {
                      return (e.tab = 2);
                    }),
                    l['\u0275\u0275element'](28, 'img', 8),
                    l['\u0275\u0275text'](29, 'Pakistan'),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](30, '\n          '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](31, '\n          '),
                    l['\u0275\u0275elementStart'](32, 'li', 6),
                    l['\u0275\u0275text'](33, '\n            '),
                    l['\u0275\u0275elementStart'](34, 'a', 10),
                    l['\u0275\u0275listener']('click', function () {
                      return (e.tab = 3);
                    }),
                    l['\u0275\u0275element'](35, 'img', 8),
                    l['\u0275\u0275text'](36, 'Gandhara'),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](37, '\n          '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](38, '\n          '),
                    l['\u0275\u0275elementStart'](39, 'li', 6),
                    l['\u0275\u0275text'](40, '\n            '),
                    l['\u0275\u0275elementStart'](41, 'a', 11),
                    l['\u0275\u0275listener']('click', function () {
                      return (e.tab = 4);
                    }),
                    l['\u0275\u0275element'](42, 'img', 8),
                    l['\u0275\u0275text'](43, 'Gurdwara'),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](44, '\n          '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](45, '\n        '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](46, '\n        '),
                    l['\u0275\u0275element'](47, 'span', 12),
                    l['\u0275\u0275text'](48, '\n      '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](49, '\n    '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](50, '\n    '),
                    l['\u0275\u0275elementStart'](51, 'div', 13),
                    l['\u0275\u0275text'](52, '\n      '),
                    l['\u0275\u0275elementStart'](53, 'div', 14),
                    l['\u0275\u0275text'](54, '\n        '),
                    l['\u0275\u0275template'](55, b, 5, 3, 'div', 15),
                    l['\u0275\u0275text'](56, '\n\n        '),
                    l['\u0275\u0275template'](57, C, 5, 3, 'div', 16),
                    l['\u0275\u0275text'](58, '\n\n        '),
                    l['\u0275\u0275template'](59, y, 5, 3, 'div', 17),
                    l['\u0275\u0275text'](60, '\n\n        '),
                    l['\u0275\u0275template'](61, E, 5, 3, 'div', 18),
                    l['\u0275\u0275text'](62, '\n      '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](63, '\n    '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](64, '\n  '),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](65, '\n'),
                    l['\u0275\u0275elementEnd'](),
                    l['\u0275\u0275text'](66, '\n'),
                    l['\u0275\u0275text'](67, '\n')),
                    2 & t &&
                      (l['\u0275\u0275advance'](20),
                      l['\u0275\u0275property']('translate', 'BOOKINGOPTION1')(
                        'ngClass',
                        l['\u0275\u0275pureFunction1'](12, v, 1 === e.tab)
                      ),
                      l['\u0275\u0275advance'](7),
                      l['\u0275\u0275property']('translate', 'BOOKINGOPTION2')(
                        'ngClass',
                        l['\u0275\u0275pureFunction1'](14, v, 2 === e.tab)
                      ),
                      l['\u0275\u0275advance'](7),
                      l['\u0275\u0275property']('translate', 'BOOKINGOPTION5')(
                        'ngClass',
                        l['\u0275\u0275pureFunction1'](16, v, 3 === e.tab)
                      ),
                      l['\u0275\u0275advance'](7),
                      l['\u0275\u0275property']('translate', 'BOOKINGOPTION3')(
                        'ngClass',
                        l['\u0275\u0275pureFunction1'](18, v, 4 === e.tab)
                      ),
                      l['\u0275\u0275advance'](14),
                      l['\u0275\u0275property']('ngIf', 1 === e.tab),
                      l['\u0275\u0275advance'](2),
                      l['\u0275\u0275property']('ngIf', 2 === e.tab),
                      l['\u0275\u0275advance'](2),
                      l['\u0275\u0275property']('ngIf', 3 === e.tab),
                      l['\u0275\u0275advance'](2),
                      l['\u0275\u0275property']('ngIf', 4 === e.tab));
                },
                directives: [a.l, a.n],
                styles: [
                  '.booking-home[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{justify-content:space-evenly!important}iframe[_ngcontent-%COMP%]{width:100%!important;height:600px}@media screen and (max-width:767px){iframe[_ngcontent-%COMP%]{height:300px}}',
                ],
              })),
              t
            );
          })(),
        },
      ];
      let k = (() => {
          class t {}
          return (
            (t.ɵmod = l['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = l['\u0275\u0275defineInjector']({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.g.forChild(w)], i.g],
            })),
            t
          );
        })(),
        I = (() => {
          class t {}
          return (
            (t.ɵmod = l['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = l['\u0275\u0275defineInjector']({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[a.c, k, c.a.forRoot({ apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA' })]],
            })),
            t
          );
        })();
    },
  },
]);
