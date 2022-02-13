(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    pxUr: function (e, t, n) {
      'use strict';
      function i(e, t, n, i) {
        return new (n || (n = Promise))(function (s, r) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (t) {
              r(t);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (t) {
              r(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      }
      n.d(t, 'a', function () {
        return X;
      }),
        n.d(t, 'b', function () {
          return J;
        }),
        n.d(t, 'c', function () {
          return q;
        }),
        n.d(t, 'd', function () {
          return K;
        });
      var s = n('fXoL'),
        r = n('HDdC'),
        a = n('2Vo4'),
        o = n('Cfvw'),
        l = n('PqYM'),
        h = n('jtHE'),
        c = (n('NHP+'), n('lJxs')),
        u = (n('8Qeq'), n('DH7j'));
      n('z+Ro'), n('LRne'), n('z6cu');
      var d = n('n6bG'),
        p = n('VRyK'),
        g = (n('XNiG'), n('5+tZ')),
        m = n('zx2A');
      class _ {
        constructor(e) {
          this.notifier = e;
        }
        call(e, t) {
          const n = new b(e),
            i = t.subscribe(n);
          return i.add(Object(m.c)(this.notifier, new m.a(n))), i;
        }
      }
      class b extends m.b {
        constructor() {
          super(...arguments), (this.hasValue = !1);
        }
        _next(e) {
          (this.value = e), (this.hasValue = !0);
        }
        notifyNext() {
          this.emitValue();
        }
        notifyComplete() {
          this.emitValue();
        }
        emitValue() {
          this.hasValue && ((this.hasValue = !1), this.destination.next(this.value));
        }
      }
      var f = n('eIep'),
        v = n('UXun'),
        y = (n('oB13'), n('JX91')),
        k = n('7o/Q');
      class w {
        constructor(e) {
          this.total = e;
        }
        call(e, t) {
          return t.subscribe(new C(e, this.total));
        }
      }
      class C extends k.a {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          ++this.count > this.total && this.destination.next(e);
        }
      }
      n('/uUt'), n('1G5W');
      var I = n('ofXK');
      const O = ['*'];
      let M = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        E = (() => {
          class e {
            constructor(e, t) {
              (this._loader = e),
                (this._zone = t),
                (this._map = new Promise((e) => {
                  this._mapResolver = e;
                }));
            }
            createMap(e, t) {
              return this._zone.runOutsideAngular(() =>
                this._loader.load().then(() => {
                  const n = new google.maps.Map(e, t);
                  this._mapResolver(n);
                })
              );
            }
            setMapOptions(e) {
              return this._zone.runOutsideAngular(() => {
                this._map.then((t) => {
                  t.setOptions(e);
                });
              });
            }
            createMarker(e = {}, t = !0) {
              return this._zone.runOutsideAngular(() =>
                this._map.then((n) => (t && (e.map = n), new google.maps.Marker(e)))
              );
            }
            createInfoWindow(e) {
              return this._zone.runOutsideAngular(() => this._map.then(() => new google.maps.InfoWindow(e)));
            }
            createCircle(e) {
              return this._zone.runOutsideAngular(() =>
                this._map.then((t) => ((e.map = t), new google.maps.Circle(e)))
              );
            }
            createRectangle(e) {
              return this._zone.runOutsideAngular(() =>
                this._map.then((t) => ((e.map = t), new google.maps.Rectangle(e)))
              );
            }
            createPolyline(e) {
              return this._zone.runOutsideAngular(() =>
                this.getNativeMap().then((t) => {
                  const n = new google.maps.Polyline(e);
                  return n.setMap(t), n;
                })
              );
            }
            createPolygon(e) {
              return this._zone.runOutsideAngular(() =>
                this.getNativeMap().then((t) => {
                  const n = new google.maps.Polygon(e);
                  return n.setMap(t), n;
                })
              );
            }
            createDataLayer(e) {
              return this._zone.runOutsideAngular(() =>
                this._map.then((t) => {
                  const n = new google.maps.Data(e);
                  return n.setMap(t), n;
                })
              );
            }
            createTransitLayer() {
              return this._zone.runOutsideAngular(() =>
                this._map.then((e) => {
                  const t = new google.maps.TransitLayer();
                  return t.setMap(e), t;
                })
              );
            }
            createBicyclingLayer() {
              return this._zone.runOutsideAngular(() =>
                this._map.then((e) => {
                  const t = new google.maps.BicyclingLayer();
                  return t.setMap(e), t;
                })
              );
            }
            containsLocation(e, t) {
              return this._map.then(() => google.maps.geometry.poly.containsLocation(e, t));
            }
            subscribeToMapEvent(e) {
              return new r.a((t) => {
                this._map.then((n) => n.addListener(e, () => this._zone.run(() => t.next(arguments[0]))));
              });
            }
            clearInstanceListeners() {
              return this._zone.runOutsideAngular(() => {
                this._map.then((e) => {
                  google.maps.event.clearInstanceListeners(e);
                });
              });
            }
            setCenter(e) {
              return this._zone.runOutsideAngular(() => this._map.then((t) => t.setCenter(e)));
            }
            getZoom() {
              return this._zone.runOutsideAngular(() => this._map.then((e) => e.getZoom()));
            }
            getBounds() {
              return this._zone.runOutsideAngular(() => this._map.then((e) => e.getBounds()));
            }
            getMapTypeId() {
              return this._zone.runOutsideAngular(() => this._map.then((e) => e.getMapTypeId()));
            }
            setZoom(e) {
              return this._zone.runOutsideAngular(() => this._map.then((t) => t.setZoom(e)));
            }
            getCenter() {
              return this._zone.runOutsideAngular(() => this._map.then((e) => e.getCenter()));
            }
            panTo(e) {
              return this._zone.runOutsideAngular(() => this._map.then((t) => t.panTo(e)));
            }
            panBy(e, t) {
              return this._zone.runOutsideAngular(() => this._map.then((n) => n.panBy(e, t)));
            }
            fitBounds(e, t) {
              return this._zone.runOutsideAngular(() => this._map.then((n) => n.fitBounds(e, t)));
            }
            panToBounds(e, t) {
              return this._zone.runOutsideAngular(() => this._map.then((n) => n.panToBounds(e, t)));
            }
            getNativeMap() {
              return this._map;
            }
            triggerMapEvent(e) {
              return this._map.then((t) => google.maps.event.trigger(t, e));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](M), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        W = (() => {
          class e {
            constructor(e, t) {
              (this._apiWrapper = e), (this._zone = t), (this._circles = new Map());
            }
            addCircle(e) {
              this._apiWrapper
                .getNativeMap()
                .then(() =>
                  this._circles.set(
                    e,
                    this._apiWrapper.createCircle({
                      center: { lat: e.latitude, lng: e.longitude },
                      clickable: e.clickable,
                      draggable: e.draggable,
                      editable: e.editable,
                      fillColor: e.fillColor,
                      fillOpacity: e.fillOpacity,
                      radius: e.radius,
                      strokeColor: e.strokeColor,
                      strokeOpacity: e.strokeOpacity,
                      strokePosition: google.maps.StrokePosition[e.strokePosition],
                      strokeWeight: e.strokeWeight,
                      visible: e.visible,
                      zIndex: e.zIndex,
                    })
                  )
                );
            }
            removeCircle(e) {
              return this._circles.get(e).then((t) => {
                t.setMap(null), this._circles.delete(e);
              });
            }
            setOptions(e, t) {
              return i(this, void 0, void 0, function* () {
                return this._circles.get(e).then((e) => {
                  (t.strokePosition = google.maps.StrokePosition[t.strokePosition]), e.setOptions(t);
                });
              });
            }
            getBounds(e) {
              return this._circles.get(e).then((e) => e.getBounds());
            }
            getCenter(e) {
              return this._circles.get(e).then((e) => e.getCenter());
            }
            getRadius(e) {
              return this._circles.get(e).then((e) => e.getRadius());
            }
            setCenter(e) {
              return this._circles.get(e).then((t) => t.setCenter({ lat: e.latitude, lng: e.longitude }));
            }
            setEditable(e) {
              return this._circles.get(e).then((t) => t.setEditable(e.editable));
            }
            setDraggable(e) {
              return this._circles.get(e).then((t) => t.setDraggable(e.draggable));
            }
            setVisible(e) {
              return this._circles.get(e).then((t) => t.setVisible(e.visible));
            }
            setRadius(e) {
              return this._circles.get(e).then((t) => t.setRadius(e.radius));
            }
            getNativeCircle(e) {
              return this._circles.get(e);
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                let i = null;
                return (
                  this._circles.get(t).then((t) => {
                    i = t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                  }),
                  () => {
                    null !== i && i.remove();
                  }
                );
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        P = (() => {
          class e {
            constructor(e, t) {
              (this._wrapper = e), (this._zone = t), (this._layers = new Map());
            }
            addDataLayer(e) {
              const t = this._wrapper
                .createDataLayer({ style: e.style })
                .then((t) => (e.geoJson && this.getDataFeatures(t, e.geoJson).then((e) => (t.features = e)), t));
              this._layers.set(e, t);
            }
            deleteDataLayer(e) {
              this._layers.get(e).then((t) => {
                t.setMap(null), this._layers.delete(e);
              });
            }
            updateGeoJson(e, t) {
              this._layers.get(e).then((e) => {
                e.forEach((t) => {
                  e.remove(t);
                  const n = e.features.indexOf(t, 0);
                  n > -1 && e.features.splice(n, 1);
                }),
                  this.getDataFeatures(e, t).then((t) => (e.features = t));
              });
            }
            setDataOptions(e, t) {
              this._layers.get(e).then((e) => {
                e.setControlPosition(t.controlPosition),
                  e.setControls(t.controls),
                  e.setDrawingMode(t.drawingMode),
                  e.setStyle(t.style);
              });
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                this._layers.get(t).then((t) => {
                  t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                });
              });
            }
            getDataFeatures(e, t) {
              return new Promise((n, i) => {
                if ('object' == typeof t)
                  try {
                    n(e.addGeoJson(t));
                  } catch (s) {
                    i(s);
                  }
                else
                  'string' == typeof t
                    ? e.loadGeoJson(t, null, n)
                    : i('Impossible to extract features from geoJson: wrong argument type');
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class z {}
      let x = (() => {
        class e {
          constructor(e) {
            var t;
            (this._boundsChangeSampleTime$ = new a.a(200)),
              (this._includeInBounds$ = new a.a(new Map())),
              (this.bounds$ = Object(o.a)(e.load()).pipe(
                Object(g.a)(() => this._includeInBounds$),
                ((t = this._boundsChangeSampleTime$.pipe(Object(f.a)((e) => Object(l.a)(0, e)))),
                (e) => e.lift(new _(t))),
                Object(c.a)((e) => this._generateBounds(e)),
                Object(v.a)(1)
              ));
          }
          _generateBounds(e) {
            const t = new google.maps.LatLngBounds();
            return e.forEach((e) => t.extend(e)), t;
          }
          addToBounds(e) {
            const t = this._createIdentifier(e);
            if (this._includeInBounds$.value.has(t)) return;
            const n = this._includeInBounds$.value;
            n.set(t, e), this._includeInBounds$.next(n);
          }
          removeFromBounds(e) {
            const t = this._includeInBounds$.value;
            t.delete(this._createIdentifier(e)), this._includeInBounds$.next(t);
          }
          changeFitBoundsChangeSampleTime(e) {
            this._boundsChangeSampleTime$.next(e);
          }
          getBounds$() {
            return this.bounds$;
          }
          _createIdentifier(e) {
            return `${e.lat}+${e.lng}`;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(s['\u0275\u0275inject'](M));
          }),
          (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class S {
        getNativeWindow() {
          return window;
        }
      }
      class j {
        getNativeDocument() {
          return document;
        }
      }
      const A = [S, j];
      var B = (function (e) {
        return (e[(e.HTTP = 1)] = 'HTTP'), (e[(e.HTTPS = 2)] = 'HTTPS'), (e[(e.AUTO = 3)] = 'AUTO'), e;
      })({});
      const L = new s.InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG');
      let T = (() => {
          class e extends M {
            constructor(e = null, t, n, i) {
              super(),
                (this.localeId = i),
                (this._SCRIPT_ID = 'agmGoogleMapsApiScript'),
                (this.callbackName = 'agmLazyMapsAPILoader'),
                (this._config = e || {}),
                (this._windowRef = t),
                (this._documentRef = n);
            }
            load() {
              const e = this._windowRef.getNativeWindow();
              if (e.google && e.google.maps) return Promise.resolve();
              if (this._scriptLoadingPromise) return this._scriptLoadingPromise;
              const t = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
              if (t) return this._assignScriptLoadingPromise(t), this._scriptLoadingPromise;
              const n = this._documentRef.getNativeDocument().createElement('script');
              return (
                (n.type = 'text/javascript'),
                (n.async = !0),
                (n.defer = !0),
                (n.id = this._SCRIPT_ID),
                (n.src = this._getScriptSrc(this.callbackName)),
                this._assignScriptLoadingPromise(n),
                this._documentRef.getNativeDocument().body.appendChild(n),
                this._scriptLoadingPromise
              );
            }
            _assignScriptLoadingPromise(e) {
              this._scriptLoadingPromise = new Promise((t, n) => {
                (this._windowRef.getNativeWindow()[this.callbackName] = () => {
                  t();
                }),
                  (e.onerror = (e) => {
                    n(e);
                  });
              });
            }
            _getScriptSrc(e) {
              let t;
              switch ((this._config && this._config.protocol) || B.HTTPS) {
                case B.AUTO:
                  t = '';
                  break;
                case B.HTTP:
                  t = 'http:';
                  break;
                case B.HTTPS:
                  t = 'https:';
              }
              const n = {
                v: this._config.apiVersion || 'quarterly',
                callback: e,
                key: this._config.apiKey,
                client: this._config.clientId,
                channel: this._config.channel,
                libraries: this._config.libraries,
                region: this._config.region,
                language: this._config.language || ('en-US' !== this.localeId ? this.localeId : null),
              };
              return `${t}//${this._config.hostAndPath || 'maps.googleapis.com/maps/api/js'}?${Object.keys(n)
                .filter((e) => null != n[e])
                .filter((e) => !Array.isArray(n[e]) || (Array.isArray(n[e]) && n[e].length > 0))
                .map((e) => {
                  const t = n[e];
                  return Array.isArray(t) ? { key: e, value: t.join(',') } : { key: e, value: n[e] };
                })
                .map((e) => `${e.key}=${e.value}`)
                .join('&')}`;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                s['\u0275\u0275inject'](L, 8),
                s['\u0275\u0275inject'](S),
                s['\u0275\u0275inject'](j),
                s['\u0275\u0275inject'](s.LOCALE_ID)
              );
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        D = (() => {
          class e {
            constructor(e, t) {
              (this._mapsWrapper = e), (this._zone = t), (this._markers = new Map());
            }
            convertAnimation(e) {
              return i(this, void 0, void 0, function* () {
                return null === e ? null : this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[e]);
              });
            }
            deleteMarker(e) {
              const t = this._markers.get(e);
              return null == t
                ? Promise.resolve()
                : t.then((t) =>
                    this._zone.run(() => {
                      t.setMap(null), this._markers.delete(e);
                    })
                  );
            }
            updateMarkerPosition(e) {
              return this._markers.get(e).then((t) => t.setPosition({ lat: e.latitude, lng: e.longitude }));
            }
            updateTitle(e) {
              return this._markers.get(e).then((t) => t.setTitle(e.title));
            }
            updateLabel(e) {
              return this._markers.get(e).then((t) => {
                t.setLabel(e.label);
              });
            }
            updateDraggable(e) {
              return this._markers.get(e).then((t) => t.setDraggable(e.draggable));
            }
            updateIcon(e) {
              return this._markers.get(e).then((t) => t.setIcon(e.iconUrl));
            }
            updateOpacity(e) {
              return this._markers.get(e).then((t) => t.setOpacity(e.opacity));
            }
            updateVisible(e) {
              return this._markers.get(e).then((t) => t.setVisible(e.visible));
            }
            updateZIndex(e) {
              return this._markers.get(e).then((t) => t.setZIndex(e.zIndex));
            }
            updateClickable(e) {
              return this._markers.get(e).then((t) => t.setClickable(e.clickable));
            }
            updateAnimation(e) {
              return i(this, void 0, void 0, function* () {
                (yield this._markers.get(e)).setAnimation(yield this.convertAnimation(e.animation));
              });
            }
            addMarker(e) {
              const t = new Promise((t) =>
                i(this, void 0, void 0, function* () {
                  return this._mapsWrapper
                    .createMarker({
                      position: { lat: e.latitude, lng: e.longitude },
                      label: e.label,
                      draggable: e.draggable,
                      icon: e.iconUrl,
                      opacity: e.opacity,
                      visible: e.visible,
                      zIndex: e.zIndex,
                      title: e.title,
                      clickable: e.clickable,
                      animation: yield this.convertAnimation(e.animation),
                    })
                    .then(t);
                })
              );
              this._markers.set(e, t);
            }
            getNativeMarker(e) {
              return this._markers.get(e);
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                this._markers.get(t).then((t) => t.addListener(e, (e) => this._zone.run(() => n.next(e))));
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        N = (() => {
          class e {
            constructor(e, t, n) {
              (this._mapsWrapper = e), (this._zone = t), (this._markerManager = n), (this._infoWindows = new Map());
            }
            deleteInfoWindow(e) {
              const t = this._infoWindows.get(e);
              return null == t
                ? Promise.resolve()
                : t.then((t) =>
                    this._zone.run(() => {
                      t.close(), this._infoWindows.delete(e);
                    })
                  );
            }
            setPosition(e) {
              return this._infoWindows.get(e).then((t) => t.setPosition({ lat: e.latitude, lng: e.longitude }));
            }
            setZIndex(e) {
              return this._infoWindows.get(e).then((t) => t.setZIndex(e.zIndex));
            }
            open(e) {
              return this._infoWindows
                .get(e)
                .then((t) =>
                  null != e.hostMarker
                    ? this._markerManager
                        .getNativeMarker(e.hostMarker)
                        .then((e) => this._mapsWrapper.getNativeMap().then((n) => t.open(n, e)))
                    : this._mapsWrapper.getNativeMap().then((e) => t.open(e))
                );
            }
            close(e) {
              return this._infoWindows.get(e).then((e) => e.close());
            }
            setOptions(e, t) {
              return this._infoWindows.get(e).then((e) => e.setOptions(t));
            }
            addInfoWindow(e) {
              const t = {
                content: e.content,
                maxWidth: e.maxWidth,
                zIndex: e.zIndex,
                disableAutoPan: e.disableAutoPan,
              };
              'number' == typeof e.latitude &&
                'number' == typeof e.longitude &&
                (t.position = { lat: e.latitude, lng: e.longitude });
              const n = this._mapsWrapper.createInfoWindow(t);
              this._infoWindows.set(e, n);
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                this._infoWindows.get(t).then((t) => {
                  t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                });
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                s['\u0275\u0275inject'](E),
                s['\u0275\u0275inject'](s.NgZone),
                s['\u0275\u0275inject'](D)
              );
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        R = (() => {
          class e {
            constructor(e, t) {
              (this._wrapper = e), (this._zone = t), (this._layers = new Map());
            }
            addKmlLayer(e) {
              const t = this._wrapper
                .getNativeMap()
                .then(
                  (t) =>
                    new google.maps.KmlLayer({
                      clickable: e.clickable,
                      map: t,
                      preserveViewport: e.preserveViewport,
                      screenOverlays: e.screenOverlays,
                      suppressInfoWindows: e.suppressInfoWindows,
                      url: e.url,
                      zIndex: e.zIndex,
                    })
                );
              this._layers.set(e, t);
            }
            setOptions(e, t) {
              this._layers.get(e).then((e) => e.setOptions(t));
            }
            deleteKmlLayer(e) {
              this._layers.get(e).then((t) => {
                t.setMap(null), this._layers.delete(e);
              });
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                this._layers.get(t).then((t) => {
                  t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                });
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Z = (() => {
          class e {
            constructor(e) {
              (this._wrapper = e), (this._layers = new Map());
            }
            addTransitLayer(e) {
              const t = this._wrapper.createTransitLayer();
              this._layers.set(e, t);
            }
            addBicyclingLayer(e) {
              const t = this._wrapper.createBicyclingLayer();
              this._layers.set(e, t);
            }
            deleteLayer(e) {
              return this._layers.get(e).then((t) => {
                t.setMap(null), this._layers.delete(e);
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function V(e) {
        const t = ['insert_at', 'remove_at', 'set_at'];
        return (function e(t, n, i) {
          return i
            ? e(t, n).pipe(Object(c.a)((e) => (Object(u.a)(e) ? i(...e) : i(e))))
            : new r.a((e) => {
                const i = (...t) => e.next(1 === t.length ? t[0] : t);
                let s;
                try {
                  s = t(i);
                } catch (r) {
                  return void e.error(r);
                }
                if (Object(d.a)(n)) return () => n(i, s);
              });
        })(
          (n) =>
            t.map((t) =>
              e.addListener(t, (i, s) => n.apply(e, [{ newArr: e.getArray(), eventName: t, index: i, previous: s }]))
            ),
          (e, t) => t.forEach((e) => e.remove())
        );
      }
      let U = (() => {
          class e {
            constructor(e, t) {
              (this._mapsWrapper = e), (this._zone = t), (this._polygons = new Map());
            }
            addPolygon(e) {
              const t = this._mapsWrapper.createPolygon({
                clickable: e.clickable,
                draggable: e.draggable,
                editable: e.editable,
                fillColor: e.fillColor,
                fillOpacity: e.fillOpacity,
                geodesic: e.geodesic,
                paths: e.paths,
                strokeColor: e.strokeColor,
                strokeOpacity: e.strokeOpacity,
                strokeWeight: e.strokeWeight,
                visible: e.visible,
                zIndex: e.zIndex,
              });
              this._polygons.set(e, t);
            }
            updatePolygon(e) {
              const t = this._polygons.get(e);
              return null == t
                ? Promise.resolve()
                : t.then((t) =>
                    this._zone.run(() => {
                      t.setPaths(e.paths);
                    })
                  );
            }
            setPolygonOptions(e, t) {
              return this._polygons.get(e).then((e) => {
                e.setOptions(t);
              });
            }
            deletePolygon(e) {
              const t = this._polygons.get(e);
              return null == t
                ? Promise.resolve()
                : t.then((t) =>
                    this._zone.run(() => {
                      t.setMap(null), this._polygons.delete(e);
                    })
                  );
            }
            getPath(e) {
              return this._polygons.get(e).then((e) => e.getPath().getArray());
            }
            getPaths(e) {
              return this._polygons.get(e).then((e) =>
                e
                  .getPaths()
                  .getArray()
                  .map((e) => e.getArray())
              );
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                this._polygons.get(t).then((t) => {
                  t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                });
              });
            }
            createPathEventObservable(e) {
              return i(this, void 0, void 0, function* () {
                const t = (yield this._polygons.get(e)).getPaths();
                return V(t).pipe(
                  Object(y.a)({ newArr: t.getArray() }),
                  Object(f.a)((e) =>
                    Object(p.a)(
                      ...e.newArr.map((t, n) =>
                        V(t).pipe(Object(c.a)((t) => ({ parentMVEvent: e, chMVCEvent: t, pathIndex: n })))
                      )
                    ).pipe(Object(y.a)({ parentMVEvent: e, chMVCEvent: null, pathIndex: null }))
                  ),
                  (e) => e.lift(new w(1)),
                  Object(c.a)(({ parentMVEvent: e, chMVCEvent: t, pathIndex: n }) => {
                    let i;
                    return (
                      t
                        ? ((i = {
                            newArr: e.newArr.map((e) => e.getArray().map((e) => e.toJSON())),
                            pathIndex: n,
                            eventName: t.eventName,
                            index: t.index,
                          }),
                          t.previous && (i.previous = t.previous))
                        : ((i = {
                            newArr: e.newArr.map((e) => e.getArray().map((e) => e.toJSON())),
                            eventName: e.eventName,
                            index: e.index,
                          }),
                          e.previous && (i.previous = e.previous.getArray())),
                      i
                    );
                  })
                );
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        $ = (() => {
          class e {
            constructor(e, t) {
              (this._mapsWrapper = e), (this._zone = t), (this._polylines = new Map());
            }
            static _convertPoints(e) {
              return e._getPoints().map((e) => ({ lat: e.latitude, lng: e.longitude }));
            }
            static _convertPath(e) {
              const t = google.maps.SymbolPath[e];
              return 'number' == typeof t ? t : e;
            }
            static _convertIcons(t) {
              const n = t
                ._getIcons()
                .map((t) => ({
                  fixedRotation: t.fixedRotation,
                  offset: t.offset,
                  repeat: t.repeat,
                  icon: {
                    anchor: new google.maps.Point(t.anchorX, t.anchorY),
                    fillColor: t.fillColor,
                    fillOpacity: t.fillOpacity,
                    path: e._convertPath(t.path),
                    rotation: t.rotation,
                    scale: t.scale,
                    strokeColor: t.strokeColor,
                    strokeOpacity: t.strokeOpacity,
                    strokeWeight: t.strokeWeight,
                  },
                }));
              return (
                n.forEach((e) => {
                  Object.entries(e).forEach(([t, n]) => {
                    void 0 === n && delete e[t];
                  }),
                    (void 0 !== e.icon.anchor.x && void 0 !== e.icon.anchor.y) || delete e.icon.anchor;
                }),
                n
              );
            }
            addPolyline(t) {
              const n = this._mapsWrapper
                .getNativeMap()
                .then(() => [e._convertPoints(t), e._convertIcons(t)])
                .then(([e, n]) =>
                  this._mapsWrapper.createPolyline({
                    clickable: t.clickable,
                    draggable: t.draggable,
                    editable: t.editable,
                    geodesic: t.geodesic,
                    strokeColor: t.strokeColor,
                    strokeOpacity: t.strokeOpacity,
                    strokeWeight: t.strokeWeight,
                    visible: t.visible,
                    zIndex: t.zIndex,
                    path: e,
                    icons: n,
                  })
                );
              this._polylines.set(t, n);
            }
            updatePolylinePoints(t) {
              const n = e._convertPoints(t),
                i = this._polylines.get(t);
              return null == i ? Promise.resolve() : i.then((e) => this._zone.run(() => e.setPath(n)));
            }
            updateIconSequences(t) {
              return i(this, void 0, void 0, function* () {
                yield this._mapsWrapper.getNativeMap();
                const n = e._convertIcons(t),
                  i = this._polylines.get(t);
                if (null != i) return i.then((e) => this._zone.run(() => e.setOptions({ icons: n })));
              });
            }
            setPolylineOptions(e, t) {
              return this._polylines.get(e).then((e) => {
                e.setOptions(t);
              });
            }
            deletePolyline(e) {
              const t = this._polylines.get(e);
              return null == t
                ? Promise.resolve()
                : t.then((t) =>
                    this._zone.run(() => {
                      t.setMap(null), this._polylines.delete(e);
                    })
                  );
            }
            getMVCPath(e) {
              return i(this, void 0, void 0, function* () {
                return (yield this._polylines.get(e)).getPath();
              });
            }
            getPath(e) {
              return i(this, void 0, void 0, function* () {
                return (yield this.getMVCPath(e)).getArray();
              });
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                this._polylines.get(t).then((t) => {
                  t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                });
              });
            }
            createPathEventObservable(e) {
              return i(this, void 0, void 0, function* () {
                return V(yield this.getMVCPath(e));
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        F = (() => {
          class e {
            constructor(e, t) {
              (this._apiWrapper = e), (this._zone = t), (this._rectangles = new Map());
            }
            addRectangle(e) {
              this._apiWrapper
                .getNativeMap()
                .then(() =>
                  this._rectangles.set(
                    e,
                    this._apiWrapper.createRectangle({
                      bounds: { north: e.north, east: e.east, south: e.south, west: e.west },
                      clickable: e.clickable,
                      draggable: e.draggable,
                      editable: e.editable,
                      fillColor: e.fillColor,
                      fillOpacity: e.fillOpacity,
                      strokeColor: e.strokeColor,
                      strokeOpacity: e.strokeOpacity,
                      strokePosition: google.maps.StrokePosition[e.strokePosition],
                      strokeWeight: e.strokeWeight,
                      visible: e.visible,
                      zIndex: e.zIndex,
                    })
                  )
                );
            }
            removeRectangle(e) {
              return this._rectangles.get(e).then((t) => {
                t.setMap(null), this._rectangles.delete(e);
              });
            }
            setOptions(e, t) {
              return this._rectangles.get(e).then((e) => {
                (t.strokePosition = google.maps.StrokePosition[t.strokePosition]), e.setOptions(t);
              });
            }
            getBounds(e) {
              return this._rectangles.get(e).then((e) => e.getBounds());
            }
            setBounds(e) {
              return this._rectangles
                .get(e)
                .then((t) => t.setBounds({ north: e.north, east: e.east, south: e.south, west: e.west }));
            }
            setEditable(e) {
              return this._rectangles.get(e).then((t) => t.setEditable(e.editable));
            }
            setDraggable(e) {
              return this._rectangles.get(e).then((t) => t.setDraggable(e.draggable));
            }
            setVisible(e) {
              return this._rectangles.get(e).then((t) => t.setVisible(e.visible));
            }
            createEventObservable(e, t) {
              return new r.a((n) => {
                let i = null;
                return (
                  this._rectangles.get(t).then((t) => {
                    i = t.addListener(e, (e) => this._zone.run(() => n.next(e)));
                  }),
                  () => {
                    null !== i && i.remove();
                  }
                );
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](E), s['\u0275\u0275inject'](s.NgZone));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        H = 0,
        J = (() => {
          class e {
            constructor(e, t) {
              (this._infoWindowManager = e),
                (this._el = t),
                (this.isOpen = !1),
                (this.infoWindowClose = new s.EventEmitter()),
                (this._infoWindowAddedToManager = !1),
                (this._id = (H++).toString());
            }
            ngOnInit() {
              (this.content = this._el.nativeElement.querySelector('.agm-info-window-content')),
                this._infoWindowManager.addInfoWindow(this),
                (this._infoWindowAddedToManager = !0),
                this._updateOpenState(),
                this._registerEventListeners();
            }
            ngOnChanges(e) {
              this._infoWindowAddedToManager &&
                ((e.latitude || e.longitude) &&
                  'number' == typeof this.latitude &&
                  'number' == typeof this.longitude &&
                  this._infoWindowManager.setPosition(this),
                e.zIndex && this._infoWindowManager.setZIndex(this),
                e.isOpen && this._updateOpenState(),
                this._setInfoWindowOptions(e));
            }
            _registerEventListeners() {
              this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
                (this.isOpen = !1), this.infoWindowClose.emit();
              });
            }
            _updateOpenState() {
              this.isOpen ? this.open() : this.close();
            }
            _setInfoWindowOptions(t) {
              const n = {};
              Object.keys(t)
                .filter((t) => -1 !== e._infoWindowOptionsInputs.indexOf(t))
                .forEach((e) => {
                  n[e] = t[e].currentValue;
                }),
                this._infoWindowManager.setOptions(this, n);
            }
            open() {
              return this._infoWindowManager.open(this);
            }
            close() {
              return this._infoWindowManager.close(this).then(() => {
                this.infoWindowClose.emit();
              });
            }
            id() {
              return this._id;
            }
            toString() {
              return 'AgmInfoWindow-' + this._id.toString();
            }
            ngOnDestroy() {
              this._infoWindowManager.deleteInfoWindow(this);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275directiveInject'](N), s['\u0275\u0275directiveInject'](s.ElementRef));
            }),
            (e.ɵcmp = s['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['agm-info-window']],
              inputs: {
                isOpen: 'isOpen',
                latitude: 'latitude',
                longitude: 'longitude',
                disableAutoPan: 'disableAutoPan',
                zIndex: 'zIndex',
                maxWidth: 'maxWidth',
              },
              outputs: { infoWindowClose: 'infoWindowClose' },
              features: [s['\u0275\u0275NgOnChangesFeature']],
              ngContentSelectors: O,
              decls: 5,
              vars: 0,
              consts: [[1, 'agm-info-window-content']],
              template: function (e, t) {
                1 & e &&
                  (s['\u0275\u0275projectionDef'](),
                  s['\u0275\u0275elementStart'](0, 'div', 0),
                  s['\u0275\u0275text'](1, '\n      '),
                  s['\u0275\u0275projection'](2),
                  s['\u0275\u0275text'](3, '\n    '),
                  s['\u0275\u0275elementEnd'](),
                  s['\u0275\u0275text'](4, '\n  '));
              },
              encapsulation: 2,
            })),
            (e._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth']),
            e
          );
        })(),
        Q = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = s['\u0275\u0275defineDirective']({ type: e, inputs: { position: 'position' } })),
            e
          );
        })(),
        q = (() => {
          class e {
            constructor(e, t, n, i, r) {
              (this._elem = e),
                (this._mapsWrapper = t),
                (this._platformId = n),
                (this._fitBoundsService = i),
                (this._zone = r),
                (this.longitude = 0),
                (this.latitude = 0),
                (this.zoom = 8),
                (this.draggable = !0),
                (this.disableDoubleClickZoom = !1),
                (this.disableDefaultUI = !1),
                (this.scrollwheel = !0),
                (this.keyboardShortcuts = !0),
                (this.styles = []),
                (this.usePanning = !1),
                (this.fitBounds = !1),
                (this.mapTypeId = 'ROADMAP'),
                (this.clickableIcons = !0),
                (this.showDefaultInfoWindow = !0),
                (this.gestureHandling = 'auto'),
                (this.tilt = 0),
                (this._observableSubscriptions = []),
                (this.mapClick = new s.EventEmitter()),
                (this.mapRightClick = new s.EventEmitter()),
                (this.mapDblClick = new s.EventEmitter()),
                (this.centerChange = new s.EventEmitter()),
                (this.boundsChange = new s.EventEmitter()),
                (this.mapTypeIdChange = new s.EventEmitter()),
                (this.idle = new s.EventEmitter()),
                (this.zoomChange = new s.EventEmitter()),
                (this.mapReady = new s.EventEmitter()),
                (this.tilesLoaded = new s.EventEmitter());
            }
            ngAfterContentInit() {
              if (Object(I.E)(this._platformId)) return;
              const e = this._elem.nativeElement.querySelector('.agm-map-container-inner');
              this._initMapInstance(e);
            }
            _initMapInstance(e) {
              this._mapsWrapper
                .createMap(e, {
                  center: { lat: this.latitude || 0, lng: this.longitude || 0 },
                  zoom: this.zoom,
                  minZoom: this.minZoom,
                  maxZoom: this.maxZoom,
                  controlSize: this.controlSize,
                  disableDefaultUI: this.disableDefaultUI,
                  disableDoubleClickZoom: this.disableDoubleClickZoom,
                  scrollwheel: this.scrollwheel,
                  backgroundColor: this.backgroundColor,
                  draggable: this.draggable,
                  draggableCursor: this.draggableCursor,
                  draggingCursor: this.draggingCursor,
                  keyboardShortcuts: this.keyboardShortcuts,
                  styles: this.styles,
                  mapTypeId: this.mapTypeId.toLocaleLowerCase(),
                  clickableIcons: this.clickableIcons,
                  gestureHandling: this.gestureHandling,
                  tilt: this.tilt,
                  restriction: this.restriction,
                })
                .then(() => this._mapsWrapper.getNativeMap())
                .then((e) => this.mapReady.emit(e)),
                this._handleMapCenterChange(),
                this._handleMapZoomChange(),
                this._handleMapMouseEvents(),
                this._handleBoundsChange(),
                this._handleMapTypeIdChange(),
                this._handleTilesLoadedEvent(),
                this._handleIdleEvent(),
                this._handleControlChange();
            }
            ngOnDestroy() {
              this._observableSubscriptions.forEach((e) => e.unsubscribe()),
                this._mapsWrapper.clearInstanceListeners(),
                this._fitBoundsSubscription && this._fitBoundsSubscription.unsubscribe();
            }
            ngOnChanges(e) {
              this._updateMapOptionsChanges(e), this._updatePosition(e);
            }
            _updateMapOptionsChanges(t) {
              const n = {};
              Object.keys(t)
                .filter((t) => -1 !== e._mapOptionsAttributes.indexOf(t))
                .forEach((e) => {
                  n[e] = t[e].currentValue;
                }),
                this._mapsWrapper.setMapOptions(n);
            }
            triggerResize(e = !0) {
              return new Promise((t) => {
                setTimeout(() =>
                  this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    e && (null != this.fitBounds ? this._fitBounds() : this._setCenter()), t();
                  })
                );
              });
            }
            _updatePosition(e) {
              (null != e.latitude || null != e.longitude || e.fitBounds) &&
                ('fitBounds' in e
                  ? this._fitBounds()
                  : 'number' == typeof this.latitude && 'number' == typeof this.longitude && this._setCenter());
            }
            _setCenter() {
              const e = { lat: this.latitude, lng: this.longitude };
              this.usePanning ? this._mapsWrapper.panTo(e) : this._mapsWrapper.setCenter(e);
            }
            _fitBounds() {
              switch (this.fitBounds) {
                case !0:
                  this._subscribeToFitBoundsUpdates();
                  break;
                case !1:
                  this._fitBoundsSubscription && this._fitBoundsSubscription.unsubscribe();
                  break;
                default:
                  this._fitBoundsSubscription && this._fitBoundsSubscription.unsubscribe(),
                    this._updateBounds(this.fitBounds, this.fitBoundsPadding);
              }
            }
            _subscribeToFitBoundsUpdates() {
              this._zone.runOutsideAngular(() => {
                this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe((e) => {
                  this._zone.run(() => this._updateBounds(e, this.fitBoundsPadding));
                });
              });
            }
            _updateBounds(e, t) {
              if (e) {
                if (
                  this._isLatLngBoundsLiteral(e) &&
                  'undefined' != typeof google &&
                  google &&
                  google.maps &&
                  google.maps.LatLngBounds
                ) {
                  const t = new google.maps.LatLngBounds();
                  t.union(e), (e = t);
                }
                this.usePanning ? this._mapsWrapper.panToBounds(e, t) : this._mapsWrapper.fitBounds(e, t);
              }
            }
            _isLatLngBoundsLiteral(e) {
              return null != e && void 0 === e.extend;
            }
            _handleMapCenterChange() {
              const e = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
                this._mapsWrapper.getCenter().then((e) => {
                  (this.latitude = e.lat()),
                    (this.longitude = e.lng()),
                    this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
                });
              });
              this._observableSubscriptions.push(e);
            }
            _handleBoundsChange() {
              const e = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
                this._mapsWrapper.getBounds().then((e) => {
                  this.boundsChange.emit(e);
                });
              });
              this._observableSubscriptions.push(e);
            }
            _handleMapTypeIdChange() {
              const e = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
                this._mapsWrapper.getMapTypeId().then((e) => {
                  this.mapTypeIdChange.emit(e);
                });
              });
              this._observableSubscriptions.push(e);
            }
            _handleMapZoomChange() {
              const e = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
                this._mapsWrapper.getZoom().then((e) => {
                  (this.zoom = e), this.zoomChange.emit(e);
                });
              });
              this._observableSubscriptions.push(e);
            }
            _handleIdleEvent() {
              const e = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => {
                this.idle.emit(void 0);
              });
              this._observableSubscriptions.push(e);
            }
            _handleTilesLoadedEvent() {
              const e = this._mapsWrapper
                .subscribeToMapEvent('tilesloaded')
                .subscribe(() => this.tilesLoaded.emit(void 0));
              this._observableSubscriptions.push(e);
            }
            _handleMapMouseEvents() {
              [
                { name: 'click', emitter: this.mapClick },
                { name: 'rightclick', emitter: this.mapRightClick },
                { name: 'dblclick', emitter: this.mapDblClick },
              ].forEach((e) => {
                const t = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(([t]) => {
                  t.placeId && !this.showDefaultInfoWindow && t.stop(), e.emitter.emit(t);
                });
                this._observableSubscriptions.push(t);
              });
            }
            _handleControlChange() {
              this._setControls(), this.mapControls.changes.subscribe(() => this._setControls());
            }
            _setControls() {
              const e = {
                fullscreenControl: !this.disableDefaultUI,
                mapTypeControl: !1,
                panControl: !1,
                rotateControl: !1,
                scaleControl: !1,
                streetViewControl: !this.disableDefaultUI,
                zoomControl: !this.disableDefaultUI,
              };
              this._mapsWrapper.getNativeMap().then(() => {
                this.mapControls.forEach((t) => Object.assign(e, t.getOptions())), this._mapsWrapper.setMapOptions(e);
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                s['\u0275\u0275directiveInject'](s.ElementRef),
                s['\u0275\u0275directiveInject'](E),
                s['\u0275\u0275directiveInject'](s.PLATFORM_ID),
                s['\u0275\u0275directiveInject'](x),
                s['\u0275\u0275directiveInject'](s.NgZone)
              );
            }),
            (e.ɵcmp = s['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['agm-map']],
              contentQueries: function (e, t, n) {
                var i;
                1 & e && s['\u0275\u0275contentQuery'](n, Q, !1),
                  2 & e && s['\u0275\u0275queryRefresh']((i = s['\u0275\u0275loadQuery']())) && (t.mapControls = i);
              },
              inputs: {
                longitude: 'longitude',
                latitude: 'latitude',
                zoom: 'zoom',
                draggable: ['mapDraggable', 'draggable'],
                disableDoubleClickZoom: 'disableDoubleClickZoom',
                disableDefaultUI: 'disableDefaultUI',
                scrollwheel: 'scrollwheel',
                keyboardShortcuts: 'keyboardShortcuts',
                styles: 'styles',
                usePanning: 'usePanning',
                fitBounds: 'fitBounds',
                mapTypeId: 'mapTypeId',
                clickableIcons: 'clickableIcons',
                showDefaultInfoWindow: 'showDefaultInfoWindow',
                gestureHandling: 'gestureHandling',
                tilt: 'tilt',
                minZoom: 'minZoom',
                maxZoom: 'maxZoom',
                controlSize: 'controlSize',
                backgroundColor: 'backgroundColor',
                draggableCursor: 'draggableCursor',
                draggingCursor: 'draggingCursor',
                fitBoundsPadding: 'fitBoundsPadding',
                restriction: 'restriction',
              },
              outputs: {
                mapClick: 'mapClick',
                mapRightClick: 'mapRightClick',
                mapDblClick: 'mapDblClick',
                centerChange: 'centerChange',
                boundsChange: 'boundsChange',
                mapTypeIdChange: 'mapTypeIdChange',
                idle: 'idle',
                zoomChange: 'zoomChange',
                mapReady: 'mapReady',
                tilesLoaded: 'tilesLoaded',
              },
              features: [
                s['\u0275\u0275ProvidersFeature']([W, P, P, x, E, N, R, Z, D, U, $, F]),
                s['\u0275\u0275NgOnChangesFeature'],
              ],
              ngContentSelectors: O,
              decls: 8,
              vars: 0,
              consts: [
                [1, 'agm-map-container-inner', 'sebm-google-map-container-inner'],
                [1, 'agm-map-content'],
              ],
              template: function (e, t) {
                1 & e &&
                  (s['\u0275\u0275projectionDef'](),
                  s['\u0275\u0275text'](0, '\n              '),
                  s['\u0275\u0275element'](1, 'div', 0),
                  s['\u0275\u0275text'](2, '\n              '),
                  s['\u0275\u0275elementStart'](3, 'div', 1),
                  s['\u0275\u0275text'](4, '\n                '),
                  s['\u0275\u0275projection'](5),
                  s['\u0275\u0275text'](6, '\n              '),
                  s['\u0275\u0275elementEnd'](),
                  s['\u0275\u0275text'](7, '\n  '));
              },
              styles: [
                '.agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }',
              ],
            })),
            (e._mapOptionsAttributes = [
              'disableDoubleClickZoom',
              'scrollwheel',
              'draggable',
              'draggableCursor',
              'draggingCursor',
              'keyboardShortcuts',
              'styles',
              'zoom',
              'minZoom',
              'maxZoom',
              'mapTypeId',
              'clickableIcons',
              'gestureHandling',
              'tilt',
              'restriction',
            ]),
            e
          );
        })(),
        G = 0,
        K = (() => {
          class e {
            constructor(e) {
              (this._markerManager = e),
                (this.draggable = !1),
                (this.visible = !0),
                (this.openInfoWindow = !0),
                (this.opacity = 1),
                (this.zIndex = 1),
                (this.clickable = !0),
                (this.animationChange = new s.EventEmitter()),
                (this.markerClick = new s.EventEmitter()),
                (this.markerDblClick = new s.EventEmitter()),
                (this.markerRightClick = new s.EventEmitter()),
                (this.dragStart = new s.EventEmitter()),
                (this.drag = new s.EventEmitter()),
                (this.dragEnd = new s.EventEmitter()),
                (this.mouseOver = new s.EventEmitter()),
                (this.mouseOut = new s.EventEmitter()),
                (this.infoWindow = new s.QueryList()),
                (this._markerAddedToManger = !1),
                (this._observableSubscriptions = []),
                (this._fitBoundsDetails$ = new h.a(1)),
                (this._id = (G++).toString());
            }
            ngAfterContentInit() {
              this.handleInfoWindowUpdate(), this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
            }
            handleInfoWindowUpdate() {
              if (this.infoWindow.length > 1) throw new Error('Expected no more than one info window.');
              this.infoWindow.forEach((e) => {
                e.hostMarker = this;
              });
            }
            ngOnChanges(e) {
              if (
                ('string' == typeof this.latitude && (this.latitude = Number(this.latitude)),
                'string' == typeof this.longitude && (this.longitude = Number(this.longitude)),
                'number' == typeof this.latitude && 'number' == typeof this.longitude)
              ) {
                if (!this._markerAddedToManger)
                  return (
                    this._markerManager.addMarker(this),
                    this._updateFitBoundsDetails(),
                    (this._markerAddedToManger = !0),
                    void this._addEventListeners()
                  );
                (e.latitude || e.longitude) &&
                  (this._markerManager.updateMarkerPosition(this), this._updateFitBoundsDetails()),
                  e.title && this._markerManager.updateTitle(this),
                  e.label && this._markerManager.updateLabel(this),
                  e.draggable && this._markerManager.updateDraggable(this),
                  e.iconUrl && this._markerManager.updateIcon(this),
                  e.opacity && this._markerManager.updateOpacity(this),
                  e.visible && this._markerManager.updateVisible(this),
                  e.zIndex && this._markerManager.updateZIndex(this),
                  e.clickable && this._markerManager.updateClickable(this),
                  e.animation && this._markerManager.updateAnimation(this);
              }
            }
            getFitBoundsDetails$() {
              return this._fitBoundsDetails$.asObservable();
            }
            _updateFitBoundsDetails() {
              this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
            }
            _addEventListeners() {
              const e = this._markerManager.createEventObservable('click', this).subscribe(() => {
                this.openInfoWindow && this.infoWindow.forEach((e) => e.open()), this.markerClick.emit(this);
              });
              this._observableSubscriptions.push(e);
              const t = this._markerManager.createEventObservable('dblclick', this).subscribe(() => {
                this.markerDblClick.emit(null);
              });
              this._observableSubscriptions.push(t);
              const n = this._markerManager.createEventObservable('rightclick', this).subscribe(() => {
                this.markerRightClick.emit(null);
              });
              this._observableSubscriptions.push(n);
              const i = this._markerManager
                .createEventObservable('dragstart', this)
                .subscribe((e) => this.dragStart.emit(e));
              this._observableSubscriptions.push(i);
              const s = this._markerManager.createEventObservable('drag', this).subscribe((e) => this.drag.emit(e));
              this._observableSubscriptions.push(s);
              const r = this._markerManager
                .createEventObservable('dragend', this)
                .subscribe((e) => this.dragEnd.emit(e));
              this._observableSubscriptions.push(r);
              const a = this._markerManager
                .createEventObservable('mouseover', this)
                .subscribe((e) => this.mouseOver.emit(e));
              this._observableSubscriptions.push(a);
              const o = this._markerManager
                .createEventObservable('mouseout', this)
                .subscribe((e) => this.mouseOut.emit(e));
              this._observableSubscriptions.push(o);
              const l = this._markerManager.createEventObservable('animation_changed', this).subscribe(() => {
                this.animationChange.emit(this.animation);
              });
              this._observableSubscriptions.push(l);
            }
            id() {
              return this._id;
            }
            toString() {
              return 'AgmMarker-' + this._id.toString();
            }
            ngOnDestroy() {
              this._markerManager.deleteMarker(this), this._observableSubscriptions.forEach((e) => e.unsubscribe());
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275directiveInject'](D));
            }),
            (e.ɵdir = s['\u0275\u0275defineDirective']({
              type: e,
              selectors: [['agm-marker']],
              contentQueries: function (e, t, n) {
                var i;
                1 & e && s['\u0275\u0275contentQuery'](n, J, !1),
                  2 & e && s['\u0275\u0275queryRefresh']((i = s['\u0275\u0275loadQuery']())) && (t.infoWindow = i);
              },
              inputs: {
                draggable: ['markerDraggable', 'draggable'],
                visible: 'visible',
                openInfoWindow: 'openInfoWindow',
                opacity: 'opacity',
                zIndex: 'zIndex',
                clickable: ['markerClickable', 'clickable'],
                latitude: 'latitude',
                longitude: 'longitude',
                title: 'title',
                label: 'label',
                iconUrl: 'iconUrl',
                animation: 'animation',
              },
              outputs: {
                animationChange: 'animationChange',
                markerClick: 'markerClick',
                markerDblClick: 'markerDblClick',
                markerRightClick: 'markerRightClick',
                dragStart: 'dragStart',
                drag: 'drag',
                dragEnd: 'dragEnd',
                mouseOver: 'mouseOver',
                mouseOut: 'mouseOut',
              },
              features: [
                s['\u0275\u0275ProvidersFeature']([{ provide: z, useExisting: Object(s.forwardRef)(() => e) }]),
                s['\u0275\u0275NgOnChangesFeature'],
              ],
            })),
            e
          );
        })(),
        X = (() => {
          class e {
            static forRoot(t) {
              return { ngModule: e, providers: [...A, { provide: M, useClass: T }, { provide: L, useValue: t }] };
            }
          }
          return (
            (e.ɵmod = s['\u0275\u0275defineNgModule']({ type: e })),
            (e.ɵinj = s['\u0275\u0275defineInjector']({
              factory: function (t) {
                return new (t || e)();
              },
            })),
            e
          );
        })();
    },
  },
]);
