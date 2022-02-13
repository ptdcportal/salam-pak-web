function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _iterableToArrayLimit(e, t) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o, s = e[Symbol.iterator]();
        !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t);
        r = !0
      );
    } catch (u) {
      (i = !0), (a = u);
    } finally {
      try {
        r || null == s.return || s.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _createSuper(e) {
  var t = _isNativeReflectConstruct();
  return function () {
    var n,
      r = _getPrototypeOf(e);
    if (t) {
      var i = _getPrototypeOf(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _possibleConstructorReturn(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t) ? _assertThisInitialized(e) : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    pxUr: function (e, t, n) {
      'use strict';
      function r(e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function s(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      n.d(t, 'a', function () {
        return ve;
      }),
        n.d(t, 'b', function () {
          return he;
        }),
        n.d(t, 'c', function () {
          return de;
        }),
        n.d(t, 'd', function () {
          return ge;
        });
      var i = n('fXoL'),
        a = n('HDdC'),
        o = n('2Vo4'),
        s = n('Cfvw'),
        u = n('PqYM'),
        c = n('jtHE'),
        l = (n('NHP+'), n('lJxs')),
        h = (n('8Qeq'), n('DH7j'));
      n('z+Ro'), n('LRne'), n('z6cu');
      var f = n('n6bG'),
        d = n('VRyK'),
        p = (n('XNiG'), n('5+tZ')),
        g = n('zx2A'),
        v = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.notifier = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  var n = new _(e),
                    r = t.subscribe(n);
                  return r.add(Object(g.c)(this.notifier, new g.a(n))), r;
                },
              },
            ]),
            e
          );
        })(),
        _ = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            var e;
            return _classCallCheck(this, n), ((e = t.apply(this, arguments)).hasValue = !1), e;
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  (this.value = e), (this.hasValue = !0);
                },
              },
              {
                key: 'notifyNext',
                value: function () {
                  this.emitValue();
                },
              },
              {
                key: 'notifyComplete',
                value: function () {
                  this.emitValue();
                },
              },
              {
                key: 'emitValue',
                value: function () {
                  this.hasValue && ((this.hasValue = !1), this.destination.next(this.value));
                },
              },
            ]),
            n
          );
        })(g.b),
        m = n('eIep'),
        b = n('UXun'),
        y = (n('oB13'), n('JX91')),
        k = n('7o/Q'),
        C = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.total = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new w(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        w = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return _classCallCheck(this, n), ((i = t.call(this, e)).total = r), (i.count = 0), i;
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  ++this.count > this.total && this.destination.next(e);
                },
              },
            ]),
            n
          );
        })(k.a);
      n('/uUt'), n('1G5W');
      var O,
        I,
        M,
        P,
        E,
        W,
        x,
        A,
        S,
        z,
        j = n('ofXK'),
        T = ['*'],
        L =
          (((P = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || P)();
          }),
          (P.ɵprov = i['\u0275\u0275defineInjectable']({ token: P, factory: P.ɵfac })),
          P),
        B =
          (((M = (function () {
            function e(t, n) {
              var r = this;
              _classCallCheck(this, e),
                (this._loader = t),
                (this._zone = n),
                (this._map = new Promise(function (e) {
                  r._mapResolver = e;
                }));
            }
            return (
              _createClass(e, [
                {
                  key: 'createMap',
                  value: function (e, t) {
                    var n = this;
                    return this._zone.runOutsideAngular(function () {
                      return n._loader.load().then(function () {
                        var r = new google.maps.Map(e, t);
                        n._mapResolver(r);
                      });
                    });
                  },
                },
                {
                  key: 'setMapOptions',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      t._map.then(function (t) {
                        t.setOptions(e);
                      });
                    });
                  },
                },
                {
                  key: 'createMarker',
                  value: function () {
                    var e = this,
                      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        return n && (t.map = e), new google.maps.Marker(t);
                      });
                    });
                  },
                },
                {
                  key: 'createInfoWindow',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function () {
                        return new google.maps.InfoWindow(e);
                      });
                    });
                  },
                },
                {
                  key: 'createCircle',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function (t) {
                        return (e.map = t), new google.maps.Circle(e);
                      });
                    });
                  },
                },
                {
                  key: 'createRectangle',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function (t) {
                        return (e.map = t), new google.maps.Rectangle(e);
                      });
                    });
                  },
                },
                {
                  key: 'createPolyline',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t.getNativeMap().then(function (t) {
                        var n = new google.maps.Polyline(e);
                        return n.setMap(t), n;
                      });
                    });
                  },
                },
                {
                  key: 'createPolygon',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t.getNativeMap().then(function (t) {
                        var n = new google.maps.Polygon(e);
                        return n.setMap(t), n;
                      });
                    });
                  },
                },
                {
                  key: 'createDataLayer',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function (t) {
                        var n = new google.maps.Data(e);
                        return n.setMap(t), n;
                      });
                    });
                  },
                },
                {
                  key: 'createTransitLayer',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        var t = new google.maps.TransitLayer();
                        return t.setMap(e), t;
                      });
                    });
                  },
                },
                {
                  key: 'createBicyclingLayer',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        var t = new google.maps.BicyclingLayer();
                        return t.setMap(e), t;
                      });
                    });
                  },
                },
                {
                  key: 'containsLocation',
                  value: function (e, t) {
                    return this._map.then(function () {
                      return google.maps.geometry.poly.containsLocation(e, t);
                    });
                  },
                },
                {
                  key: 'subscribeToMapEvent',
                  value: function (e) {
                    var t = arguments,
                      n = this;
                    return new a.a(function (r) {
                      n._map.then(function (i) {
                        return i.addListener(e, function () {
                          return n._zone.run(function () {
                            return r.next(t[0]);
                          });
                        });
                      });
                    });
                  },
                },
                {
                  key: 'clearInstanceListeners',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      e._map.then(function (e) {
                        google.maps.event.clearInstanceListeners(e);
                      });
                    });
                  },
                },
                {
                  key: 'setCenter',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function (t) {
                        return t.setCenter(e);
                      });
                    });
                  },
                },
                {
                  key: 'getZoom',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        return e.getZoom();
                      });
                    });
                  },
                },
                {
                  key: 'getBounds',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        return e.getBounds();
                      });
                    });
                  },
                },
                {
                  key: 'getMapTypeId',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        return e.getMapTypeId();
                      });
                    });
                  },
                },
                {
                  key: 'setZoom',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function (t) {
                        return t.setZoom(e);
                      });
                    });
                  },
                },
                {
                  key: 'getCenter',
                  value: function () {
                    var e = this;
                    return this._zone.runOutsideAngular(function () {
                      return e._map.then(function (e) {
                        return e.getCenter();
                      });
                    });
                  },
                },
                {
                  key: 'panTo',
                  value: function (e) {
                    var t = this;
                    return this._zone.runOutsideAngular(function () {
                      return t._map.then(function (t) {
                        return t.panTo(e);
                      });
                    });
                  },
                },
                {
                  key: 'panBy',
                  value: function (e, t) {
                    var n = this;
                    return this._zone.runOutsideAngular(function () {
                      return n._map.then(function (n) {
                        return n.panBy(e, t);
                      });
                    });
                  },
                },
                {
                  key: 'fitBounds',
                  value: function (e, t) {
                    var n = this;
                    return this._zone.runOutsideAngular(function () {
                      return n._map.then(function (n) {
                        return n.fitBounds(e, t);
                      });
                    });
                  },
                },
                {
                  key: 'panToBounds',
                  value: function (e, t) {
                    var n = this;
                    return this._zone.runOutsideAngular(function () {
                      return n._map.then(function (n) {
                        return n.panToBounds(e, t);
                      });
                    });
                  },
                },
                {
                  key: 'getNativeMap',
                  value: function () {
                    return this._map;
                  },
                },
                {
                  key: 'triggerMapEvent',
                  value: function (e) {
                    return this._map.then(function (t) {
                      return google.maps.event.trigger(t, e);
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || M)(i['\u0275\u0275inject'](L), i['\u0275\u0275inject'](i.NgZone));
          }),
          (M.ɵprov = i['\u0275\u0275defineInjectable']({ token: M, factory: M.ɵfac })),
          M),
        R =
          (((I = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._apiWrapper = t), (this._zone = n), (this._circles = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'addCircle',
                  value: function (e) {
                    var t = this;
                    this._apiWrapper.getNativeMap().then(function () {
                      return t._circles.set(
                        e,
                        t._apiWrapper.createCircle({
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
                      );
                    });
                  },
                },
                {
                  key: 'removeCircle',
                  value: function (e) {
                    var t = this;
                    return this._circles.get(e).then(function (n) {
                      n.setMap(null), t._circles.delete(e);
                    });
                  },
                },
                {
                  key: 'setOptions',
                  value: function (e, t) {
                    return r(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function n() {
                        return regeneratorRuntime.wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return n.abrupt(
                                    'return',
                                    this._circles.get(e).then(function (e) {
                                      (t.strokePosition = google.maps.StrokePosition[t.strokePosition]),
                                        e.setOptions(t);
                                    })
                                  );
                                case 1:
                                case 'end':
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'getBounds',
                  value: function (e) {
                    return this._circles.get(e).then(function (e) {
                      return e.getBounds();
                    });
                  },
                },
                {
                  key: 'getCenter',
                  value: function (e) {
                    return this._circles.get(e).then(function (e) {
                      return e.getCenter();
                    });
                  },
                },
                {
                  key: 'getRadius',
                  value: function (e) {
                    return this._circles.get(e).then(function (e) {
                      return e.getRadius();
                    });
                  },
                },
                {
                  key: 'setCenter',
                  value: function (e) {
                    return this._circles.get(e).then(function (t) {
                      return t.setCenter({ lat: e.latitude, lng: e.longitude });
                    });
                  },
                },
                {
                  key: 'setEditable',
                  value: function (e) {
                    return this._circles.get(e).then(function (t) {
                      return t.setEditable(e.editable);
                    });
                  },
                },
                {
                  key: 'setDraggable',
                  value: function (e) {
                    return this._circles.get(e).then(function (t) {
                      return t.setDraggable(e.draggable);
                    });
                  },
                },
                {
                  key: 'setVisible',
                  value: function (e) {
                    return this._circles.get(e).then(function (t) {
                      return t.setVisible(e.visible);
                    });
                  },
                },
                {
                  key: 'setRadius',
                  value: function (e) {
                    return this._circles.get(e).then(function (t) {
                      return t.setRadius(e.radius);
                    });
                  },
                },
                {
                  key: 'getNativeCircle',
                  value: function (e) {
                    return this._circles.get(e);
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      var i = null;
                      return (
                        n._circles.get(t).then(function (t) {
                          i = t.addListener(e, function (e) {
                            return n._zone.run(function () {
                              return r.next(e);
                            });
                          });
                        }),
                        function () {
                          null !== i && i.remove();
                        }
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || I)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (I.ɵprov = i['\u0275\u0275defineInjectable']({ token: I, factory: I.ɵfac })),
          I),
        D =
          (((O = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._wrapper = t), (this._zone = n), (this._layers = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'addDataLayer',
                  value: function (e) {
                    var t = this,
                      n = this._wrapper.createDataLayer({ style: e.style }).then(function (n) {
                        return (
                          e.geoJson &&
                            t.getDataFeatures(n, e.geoJson).then(function (e) {
                              return (n.features = e);
                            }),
                          n
                        );
                      });
                    this._layers.set(e, n);
                  },
                },
                {
                  key: 'deleteDataLayer',
                  value: function (e) {
                    var t = this;
                    this._layers.get(e).then(function (n) {
                      n.setMap(null), t._layers.delete(e);
                    });
                  },
                },
                {
                  key: 'updateGeoJson',
                  value: function (e, t) {
                    var n = this;
                    this._layers.get(e).then(function (e) {
                      e.forEach(function (t) {
                        e.remove(t);
                        var n = e.features.indexOf(t, 0);
                        n > -1 && e.features.splice(n, 1);
                      }),
                        n.getDataFeatures(e, t).then(function (t) {
                          return (e.features = t);
                        });
                    });
                  },
                },
                {
                  key: 'setDataOptions',
                  value: function (e, t) {
                    this._layers.get(e).then(function (e) {
                      e.setControlPosition(t.controlPosition),
                        e.setControls(t.controls),
                        e.setDrawingMode(t.drawingMode),
                        e.setStyle(t.style);
                    });
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      n._layers.get(t).then(function (t) {
                        t.addListener(e, function (e) {
                          return n._zone.run(function () {
                            return r.next(e);
                          });
                        });
                      });
                    });
                  },
                },
                {
                  key: 'getDataFeatures',
                  value: function (e, t) {
                    return new Promise(function (n, r) {
                      if ('object' == typeof t)
                        try {
                          n(e.addGeoJson(t));
                        } catch (i) {
                          r(i);
                        }
                      else
                        'string' == typeof t
                          ? e.loadGeoJson(t, null, n)
                          : r('Impossible to extract features from geoJson: wrong argument type');
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || O)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (O.ɵprov = i['\u0275\u0275defineInjectable']({ token: O, factory: O.ɵfac })),
          O),
        N = function e() {
          _classCallCheck(this, e);
        },
        Z =
          (((E = (function () {
            function e(t) {
              var n,
                r = this;
              _classCallCheck(this, e),
                (this._boundsChangeSampleTime$ = new o.a(200)),
                (this._includeInBounds$ = new o.a(new Map())),
                (this.bounds$ = Object(s.a)(t.load()).pipe(
                  Object(p.a)(function () {
                    return r._includeInBounds$;
                  }),
                  ((n = this._boundsChangeSampleTime$.pipe(
                    Object(m.a)(function (e) {
                      return Object(u.a)(0, e);
                    })
                  )),
                  function (e) {
                    return e.lift(new v(n));
                  }),
                  Object(l.a)(function (e) {
                    return r._generateBounds(e);
                  }),
                  Object(b.a)(1)
                ));
            }
            return (
              _createClass(e, [
                {
                  key: '_generateBounds',
                  value: function (e) {
                    var t = new google.maps.LatLngBounds();
                    return (
                      e.forEach(function (e) {
                        return t.extend(e);
                      }),
                      t
                    );
                  },
                },
                {
                  key: 'addToBounds',
                  value: function (e) {
                    var t = this._createIdentifier(e);
                    if (!this._includeInBounds$.value.has(t)) {
                      var n = this._includeInBounds$.value;
                      n.set(t, e), this._includeInBounds$.next(n);
                    }
                  },
                },
                {
                  key: 'removeFromBounds',
                  value: function (e) {
                    var t = this._includeInBounds$.value;
                    t.delete(this._createIdentifier(e)), this._includeInBounds$.next(t);
                  },
                },
                {
                  key: 'changeFitBoundsChangeSampleTime',
                  value: function (e) {
                    this._boundsChangeSampleTime$.next(e);
                  },
                },
                {
                  key: 'getBounds$',
                  value: function () {
                    return this.bounds$;
                  },
                },
                {
                  key: '_createIdentifier',
                  value: function (e) {
                    return ''.concat(e.lat, '+').concat(e.lng);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || E)(i['\u0275\u0275inject'](L));
          }),
          (E.ɵprov = i['\u0275\u0275defineInjectable']({ token: E, factory: E.ɵfac })),
          E),
        V = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'getNativeWindow',
                value: function () {
                  return window;
                },
              },
            ]),
            e
          );
        })(),
        U = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'getNativeDocument',
                value: function () {
                  return document;
                },
              },
            ]),
            e
          );
        })(),
        H = [V, U],
        $ = (function (e) {
          return (e[(e.HTTP = 1)] = 'HTTP'), (e[(e.HTTPS = 2)] = 'HTTPS'), (e[(e.AUTO = 3)] = 'AUTO'), e;
        })({}),
        F = new i.InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG'),
        J =
          (((z = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
              var e,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                i = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 ? arguments[2] : void 0,
                o = arguments.length > 3 ? arguments[3] : void 0;
              return (
                _classCallCheck(this, n),
                ((e = t.call(this)).localeId = o),
                (e._SCRIPT_ID = 'agmGoogleMapsApiScript'),
                (e.callbackName = 'agmLazyMapsAPILoader'),
                (e._config = r || {}),
                (e._windowRef = i),
                (e._documentRef = a),
                e
              );
            }
            return (
              _createClass(n, [
                {
                  key: 'load',
                  value: function () {
                    var e = this._windowRef.getNativeWindow();
                    if (e.google && e.google.maps) return Promise.resolve();
                    if (this._scriptLoadingPromise) return this._scriptLoadingPromise;
                    var t = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
                    if (t) return this._assignScriptLoadingPromise(t), this._scriptLoadingPromise;
                    var n = this._documentRef.getNativeDocument().createElement('script');
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
                  },
                },
                {
                  key: '_assignScriptLoadingPromise',
                  value: function (e) {
                    var t = this;
                    this._scriptLoadingPromise = new Promise(function (n, r) {
                      (t._windowRef.getNativeWindow()[t.callbackName] = function () {
                        n();
                      }),
                        (e.onerror = function (e) {
                          r(e);
                        });
                    });
                  },
                },
                {
                  key: '_getScriptSrc',
                  value: function (e) {
                    var t;
                    switch ((this._config && this._config.protocol) || $.HTTPS) {
                      case $.AUTO:
                        t = '';
                        break;
                      case $.HTTP:
                        t = 'http:';
                        break;
                      case $.HTTPS:
                        t = 'https:';
                    }
                    var n = {
                      v: this._config.apiVersion || 'quarterly',
                      callback: e,
                      key: this._config.apiKey,
                      client: this._config.clientId,
                      channel: this._config.channel,
                      libraries: this._config.libraries,
                      region: this._config.region,
                      language: this._config.language || ('en-US' !== this.localeId ? this.localeId : null),
                    };
                    return ''
                      .concat(t, '//')
                      .concat(this._config.hostAndPath || 'maps.googleapis.com/maps/api/js', '?')
                      .concat(
                        Object.keys(n)
                          .filter(function (e) {
                            return null != n[e];
                          })
                          .filter(function (e) {
                            return !Array.isArray(n[e]) || (Array.isArray(n[e]) && n[e].length > 0);
                          })
                          .map(function (e) {
                            var t = n[e];
                            return Array.isArray(t) ? { key: e, value: t.join(',') } : { key: e, value: n[e] };
                          })
                          .map(function (e) {
                            return ''.concat(e.key, '=').concat(e.value);
                          })
                          .join('&')
                      );
                  },
                },
              ]),
              n
            );
          })(L)).ɵfac = function (e) {
            return new (e || z)(
              i['\u0275\u0275inject'](F, 8),
              i['\u0275\u0275inject'](V),
              i['\u0275\u0275inject'](U),
              i['\u0275\u0275inject'](i.LOCALE_ID)
            );
          }),
          (z.ɵprov = i['\u0275\u0275defineInjectable']({ token: z, factory: z.ɵfac })),
          z),
        Q =
          (((S = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._mapsWrapper = t), (this._zone = n), (this._markers = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'convertAnimation',
                  value: function (e) {
                    return r(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return t.abrupt(
                                    'return',
                                    null === e
                                      ? null
                                      : this._mapsWrapper.getNativeMap().then(function () {
                                          return google.maps.Animation[e];
                                        })
                                  );
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'deleteMarker',
                  value: function (e) {
                    var t = this,
                      n = this._markers.get(e);
                    return null == n
                      ? Promise.resolve()
                      : n.then(function (n) {
                          return t._zone.run(function () {
                            n.setMap(null), t._markers.delete(e);
                          });
                        });
                  },
                },
                {
                  key: 'updateMarkerPosition',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setPosition({ lat: e.latitude, lng: e.longitude });
                    });
                  },
                },
                {
                  key: 'updateTitle',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setTitle(e.title);
                    });
                  },
                },
                {
                  key: 'updateLabel',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      t.setLabel(e.label);
                    });
                  },
                },
                {
                  key: 'updateDraggable',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setDraggable(e.draggable);
                    });
                  },
                },
                {
                  key: 'updateIcon',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setIcon(e.iconUrl);
                    });
                  },
                },
                {
                  key: 'updateOpacity',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setOpacity(e.opacity);
                    });
                  },
                },
                {
                  key: 'updateVisible',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setVisible(e.visible);
                    });
                  },
                },
                {
                  key: 'updateZIndex',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setZIndex(e.zIndex);
                    });
                  },
                },
                {
                  key: 'updateClickable',
                  value: function (e) {
                    return this._markers.get(e).then(function (t) {
                      return t.setClickable(e.clickable);
                    });
                  },
                },
                {
                  key: 'updateAnimation',
                  value: function (e) {
                    return r(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this._markers.get(e);
                                case 2:
                                  return (t.t0 = t.sent), (t.next = 5), this.convertAnimation(e.animation);
                                case 5:
                                  (t.t1 = t.sent), t.t0.setAnimation.call(t.t0, t.t1);
                                case 7:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'addMarker',
                  value: function (e) {
                    var t = this,
                      n = new Promise(function (n) {
                        return r(
                          t,
                          void 0,
                          void 0,
                          regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.t0 = this._mapsWrapper),
                                        (t.t1 = { lat: e.latitude, lng: e.longitude }),
                                        (t.t2 = e.label),
                                        (t.t3 = e.draggable),
                                        (t.t4 = e.iconUrl),
                                        (t.t5 = e.opacity),
                                        (t.t6 = e.visible),
                                        (t.t7 = e.zIndex),
                                        (t.t8 = e.title),
                                        (t.t9 = e.clickable),
                                        (t.next = 12),
                                        this.convertAnimation(e.animation)
                                      );
                                    case 12:
                                      return (
                                        (t.t10 = t.sent),
                                        (t.t11 = {
                                          position: t.t1,
                                          label: t.t2,
                                          draggable: t.t3,
                                          icon: t.t4,
                                          opacity: t.t5,
                                          visible: t.t6,
                                          zIndex: t.t7,
                                          title: t.t8,
                                          clickable: t.t9,
                                          animation: t.t10,
                                        }),
                                        t.abrupt('return', t.t0.createMarker.call(t.t0, t.t11).then(n))
                                      );
                                    case 15:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                      });
                    this._markers.set(e, n);
                  },
                },
                {
                  key: 'getNativeMarker',
                  value: function (e) {
                    return this._markers.get(e);
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      n._markers.get(t).then(function (t) {
                        return t.addListener(e, function (e) {
                          return n._zone.run(function () {
                            return r.next(e);
                          });
                        });
                      });
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || S)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (S.ɵprov = i['\u0275\u0275defineInjectable']({ token: S, factory: S.ɵfac })),
          S),
        q =
          (((A = (function () {
            function e(t, n, r) {
              _classCallCheck(this, e),
                (this._mapsWrapper = t),
                (this._zone = n),
                (this._markerManager = r),
                (this._infoWindows = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'deleteInfoWindow',
                  value: function (e) {
                    var t = this,
                      n = this._infoWindows.get(e);
                    return null == n
                      ? Promise.resolve()
                      : n.then(function (n) {
                          return t._zone.run(function () {
                            n.close(), t._infoWindows.delete(e);
                          });
                        });
                  },
                },
                {
                  key: 'setPosition',
                  value: function (e) {
                    return this._infoWindows.get(e).then(function (t) {
                      return t.setPosition({ lat: e.latitude, lng: e.longitude });
                    });
                  },
                },
                {
                  key: 'setZIndex',
                  value: function (e) {
                    return this._infoWindows.get(e).then(function (t) {
                      return t.setZIndex(e.zIndex);
                    });
                  },
                },
                {
                  key: 'open',
                  value: function (e) {
                    var t = this;
                    return this._infoWindows.get(e).then(function (n) {
                      return null != e.hostMarker
                        ? t._markerManager.getNativeMarker(e.hostMarker).then(function (e) {
                            return t._mapsWrapper.getNativeMap().then(function (t) {
                              return n.open(t, e);
                            });
                          })
                        : t._mapsWrapper.getNativeMap().then(function (e) {
                            return n.open(e);
                          });
                    });
                  },
                },
                {
                  key: 'close',
                  value: function (e) {
                    return this._infoWindows.get(e).then(function (e) {
                      return e.close();
                    });
                  },
                },
                {
                  key: 'setOptions',
                  value: function (e, t) {
                    return this._infoWindows.get(e).then(function (e) {
                      return e.setOptions(t);
                    });
                  },
                },
                {
                  key: 'addInfoWindow',
                  value: function (e) {
                    var t = {
                      content: e.content,
                      maxWidth: e.maxWidth,
                      zIndex: e.zIndex,
                      disableAutoPan: e.disableAutoPan,
                    };
                    'number' == typeof e.latitude &&
                      'number' == typeof e.longitude &&
                      (t.position = { lat: e.latitude, lng: e.longitude });
                    var n = this._mapsWrapper.createInfoWindow(t);
                    this._infoWindows.set(e, n);
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      n._infoWindows.get(t).then(function (t) {
                        t.addListener(e, function (e) {
                          return n._zone.run(function () {
                            return r.next(e);
                          });
                        });
                      });
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || A)(
              i['\u0275\u0275inject'](B),
              i['\u0275\u0275inject'](i.NgZone),
              i['\u0275\u0275inject'](Q)
            );
          }),
          (A.ɵprov = i['\u0275\u0275defineInjectable']({ token: A, factory: A.ɵfac })),
          A),
        G =
          (((x = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._wrapper = t), (this._zone = n), (this._layers = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'addKmlLayer',
                  value: function (e) {
                    var t = this._wrapper.getNativeMap().then(function (t) {
                      return new google.maps.KmlLayer({
                        clickable: e.clickable,
                        map: t,
                        preserveViewport: e.preserveViewport,
                        screenOverlays: e.screenOverlays,
                        suppressInfoWindows: e.suppressInfoWindows,
                        url: e.url,
                        zIndex: e.zIndex,
                      });
                    });
                    this._layers.set(e, t);
                  },
                },
                {
                  key: 'setOptions',
                  value: function (e, t) {
                    this._layers.get(e).then(function (e) {
                      return e.setOptions(t);
                    });
                  },
                },
                {
                  key: 'deleteKmlLayer',
                  value: function (e) {
                    var t = this;
                    this._layers.get(e).then(function (n) {
                      n.setMap(null), t._layers.delete(e);
                    });
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      n._layers.get(t).then(function (t) {
                        t.addListener(e, function (e) {
                          return n._zone.run(function () {
                            return r.next(e);
                          });
                        });
                      });
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || x)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (x.ɵprov = i['\u0275\u0275defineInjectable']({ token: x, factory: x.ɵfac })),
          x),
        K =
          (((W = (function () {
            function e(t) {
              _classCallCheck(this, e), (this._wrapper = t), (this._layers = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'addTransitLayer',
                  value: function (e) {
                    var t = this._wrapper.createTransitLayer();
                    this._layers.set(e, t);
                  },
                },
                {
                  key: 'addBicyclingLayer',
                  value: function (e) {
                    var t = this._wrapper.createBicyclingLayer();
                    this._layers.set(e, t);
                  },
                },
                {
                  key: 'deleteLayer',
                  value: function (e) {
                    var t = this;
                    return this._layers.get(e).then(function (n) {
                      n.setMap(null), t._layers.delete(e);
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || W)(i['\u0275\u0275inject'](B));
          }),
          (W.ɵprov = i['\u0275\u0275defineInjectable']({ token: W, factory: W.ɵfac })),
          W);
      function X(e) {
        var t = ['insert_at', 'remove_at', 'set_at'];
        return (function e(t, n, r) {
          return r
            ? e(t, n).pipe(
                Object(l.a)(function (e) {
                  return Object(h.a)(e) ? r.apply(void 0, _toConsumableArray(e)) : r(e);
                })
              )
            : new a.a(function (e) {
                var r,
                  i = function () {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e.next(1 === n.length ? n[0] : n);
                  };
                try {
                  r = t(i);
                } catch (a) {
                  return void e.error(a);
                }
                if (Object(f.a)(n))
                  return function () {
                    return n(i, r);
                  };
              });
        })(
          function (n) {
            return t.map(function (t) {
              return e.addListener(t, function (r, i) {
                return n.apply(e, [{ newArr: e.getArray(), eventName: t, index: r, previous: i }]);
              });
            });
          },
          function (e, t) {
            return t.forEach(function (e) {
              return e.remove();
            });
          }
        );
      }
      var Y,
        ee,
        te,
        ne,
        re,
        ie,
        ae,
        oe,
        se =
          (((oe = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._mapsWrapper = t), (this._zone = n), (this._polygons = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'addPolygon',
                  value: function (e) {
                    var t = this._mapsWrapper.createPolygon({
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
                  },
                },
                {
                  key: 'updatePolygon',
                  value: function (e) {
                    var t = this,
                      n = this._polygons.get(e);
                    return null == n
                      ? Promise.resolve()
                      : n.then(function (n) {
                          return t._zone.run(function () {
                            n.setPaths(e.paths);
                          });
                        });
                  },
                },
                {
                  key: 'setPolygonOptions',
                  value: function (e, t) {
                    return this._polygons.get(e).then(function (e) {
                      e.setOptions(t);
                    });
                  },
                },
                {
                  key: 'deletePolygon',
                  value: function (e) {
                    var t = this,
                      n = this._polygons.get(e);
                    return null == n
                      ? Promise.resolve()
                      : n.then(function (n) {
                          return t._zone.run(function () {
                            n.setMap(null), t._polygons.delete(e);
                          });
                        });
                  },
                },
                {
                  key: 'getPath',
                  value: function (e) {
                    return this._polygons.get(e).then(function (e) {
                      return e.getPath().getArray();
                    });
                  },
                },
                {
                  key: 'getPaths',
                  value: function (e) {
                    return this._polygons.get(e).then(function (e) {
                      return e
                        .getPaths()
                        .getArray()
                        .map(function (e) {
                          return e.getArray();
                        });
                    });
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      n._polygons.get(t).then(function (t) {
                        t.addListener(e, function (e) {
                          return n._zone.run(function () {
                            return r.next(e);
                          });
                        });
                      });
                    });
                  },
                },
                {
                  key: 'createPathEventObservable',
                  value: function (e) {
                    return r(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function t() {
                        var n;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this._polygons.get(e);
                                case 2:
                                  return (
                                    (n = t.sent.getPaths()),
                                    t.abrupt(
                                      'return',
                                      X(n).pipe(
                                        Object(y.a)({ newArr: n.getArray() }),
                                        Object(m.a)(function (e) {
                                          return Object(d.a)
                                            .apply(
                                              void 0,
                                              _toConsumableArray(
                                                e.newArr.map(function (t, n) {
                                                  return X(t).pipe(
                                                    Object(l.a)(function (t) {
                                                      return { parentMVEvent: e, chMVCEvent: t, pathIndex: n };
                                                    })
                                                  );
                                                })
                                              )
                                            )
                                            .pipe(Object(y.a)({ parentMVEvent: e, chMVCEvent: null, pathIndex: null }));
                                        }),
                                        function (e) {
                                          return e.lift(new C(1));
                                        },
                                        Object(l.a)(function (e) {
                                          var t,
                                            n = e.parentMVEvent,
                                            r = e.chMVCEvent,
                                            i = e.pathIndex;
                                          return (
                                            r
                                              ? ((t = {
                                                  newArr: n.newArr.map(function (e) {
                                                    return e.getArray().map(function (e) {
                                                      return e.toJSON();
                                                    });
                                                  }),
                                                  pathIndex: i,
                                                  eventName: r.eventName,
                                                  index: r.index,
                                                }),
                                                r.previous && (t.previous = r.previous))
                                              : ((t = {
                                                  newArr: n.newArr.map(function (e) {
                                                    return e.getArray().map(function (e) {
                                                      return e.toJSON();
                                                    });
                                                  }),
                                                  eventName: n.eventName,
                                                  index: n.index,
                                                }),
                                                n.previous && (t.previous = n.previous.getArray())),
                                            t
                                          );
                                        })
                                      )
                                    )
                                  );
                                case 4:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || oe)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (oe.ɵprov = i['\u0275\u0275defineInjectable']({ token: oe, factory: oe.ɵfac })),
          oe),
        ue =
          (((ae = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._mapsWrapper = t), (this._zone = n), (this._polylines = new Map());
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: 'addPolyline',
                    value: function (t) {
                      var n = this,
                        r = this._mapsWrapper
                          .getNativeMap()
                          .then(function () {
                            return [e._convertPoints(t), e._convertIcons(t)];
                          })
                          .then(function (e) {
                            var r = _slicedToArray(e, 2),
                              i = r[0],
                              a = r[1];
                            return n._mapsWrapper.createPolyline({
                              clickable: t.clickable,
                              draggable: t.draggable,
                              editable: t.editable,
                              geodesic: t.geodesic,
                              strokeColor: t.strokeColor,
                              strokeOpacity: t.strokeOpacity,
                              strokeWeight: t.strokeWeight,
                              visible: t.visible,
                              zIndex: t.zIndex,
                              path: i,
                              icons: a,
                            });
                          });
                      this._polylines.set(t, r);
                    },
                  },
                  {
                    key: 'updatePolylinePoints',
                    value: function (t) {
                      var n = this,
                        r = e._convertPoints(t),
                        i = this._polylines.get(t);
                      return null == i
                        ? Promise.resolve()
                        : i.then(function (e) {
                            return n._zone.run(function () {
                              return e.setPath(r);
                            });
                          });
                    },
                  },
                  {
                    key: 'updateIconSequences',
                    value: function (t) {
                      return r(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          var r,
                            i,
                            a = this;
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), this._mapsWrapper.getNativeMap();
                                  case 2:
                                    if (((r = e._convertIcons(t)), null == (i = this._polylines.get(t)))) {
                                      n.next = 5;
                                      break;
                                    }
                                    return n.abrupt(
                                      'return',
                                      i.then(function (e) {
                                        return a._zone.run(function () {
                                          return e.setOptions({ icons: r });
                                        });
                                      })
                                    );
                                  case 5:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'setPolylineOptions',
                    value: function (e, t) {
                      return this._polylines.get(e).then(function (e) {
                        e.setOptions(t);
                      });
                    },
                  },
                  {
                    key: 'deletePolyline',
                    value: function (e) {
                      var t = this,
                        n = this._polylines.get(e);
                      return null == n
                        ? Promise.resolve()
                        : n.then(function (n) {
                            return t._zone.run(function () {
                              n.setMap(null), t._polylines.delete(e);
                            });
                          });
                    },
                  },
                  {
                    key: 'getMVCPath',
                    value: function (e) {
                      return r(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function t() {
                          return regeneratorRuntime.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), this._polylines.get(e);
                                  case 2:
                                    return t.abrupt('return', t.sent.getPath());
                                  case 3:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'getPath',
                    value: function (e) {
                      return r(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function t() {
                          return regeneratorRuntime.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), this.getMVCPath(e);
                                  case 2:
                                    return t.abrupt('return', t.sent.getArray());
                                  case 3:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    },
                  },
                  {
                    key: 'createEventObservable',
                    value: function (e, t) {
                      var n = this;
                      return new a.a(function (r) {
                        n._polylines.get(t).then(function (t) {
                          t.addListener(e, function (e) {
                            return n._zone.run(function () {
                              return r.next(e);
                            });
                          });
                        });
                      });
                    },
                  },
                  {
                    key: 'createPathEventObservable',
                    value: function (e) {
                      return r(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function t() {
                          return regeneratorRuntime.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.t0 = X), (t.next = 3), this.getMVCPath(e);
                                  case 3:
                                    return (t.t1 = t.sent), t.abrupt('return', (0, t.t0)(t.t1));
                                  case 5:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                    },
                  },
                ],
                [
                  {
                    key: '_convertPoints',
                    value: function (e) {
                      return e._getPoints().map(function (e) {
                        return { lat: e.latitude, lng: e.longitude };
                      });
                    },
                  },
                  {
                    key: '_convertPath',
                    value: function (e) {
                      var t = google.maps.SymbolPath[e];
                      return 'number' == typeof t ? t : e;
                    },
                  },
                  {
                    key: '_convertIcons',
                    value: function (t) {
                      var n = t._getIcons().map(function (t) {
                        return {
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
                        };
                      });
                      return (
                        n.forEach(function (e) {
                          Object.entries(e).forEach(function (t) {
                            var n = _slicedToArray(t, 2),
                              r = n[0];
                            void 0 === n[1] && delete e[r];
                          }),
                            (void 0 !== e.icon.anchor.x && void 0 !== e.icon.anchor.y) || delete e.icon.anchor;
                        }),
                        n
                      );
                    },
                  },
                ]
              ),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ae)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (ae.ɵprov = i['\u0275\u0275defineInjectable']({ token: ae, factory: ae.ɵfac })),
          ae),
        ce =
          (((ie = (function () {
            function e(t, n) {
              _classCallCheck(this, e), (this._apiWrapper = t), (this._zone = n), (this._rectangles = new Map());
            }
            return (
              _createClass(e, [
                {
                  key: 'addRectangle',
                  value: function (e) {
                    var t = this;
                    this._apiWrapper.getNativeMap().then(function () {
                      return t._rectangles.set(
                        e,
                        t._apiWrapper.createRectangle({
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
                      );
                    });
                  },
                },
                {
                  key: 'removeRectangle',
                  value: function (e) {
                    var t = this;
                    return this._rectangles.get(e).then(function (n) {
                      n.setMap(null), t._rectangles.delete(e);
                    });
                  },
                },
                {
                  key: 'setOptions',
                  value: function (e, t) {
                    return this._rectangles.get(e).then(function (e) {
                      (t.strokePosition = google.maps.StrokePosition[t.strokePosition]), e.setOptions(t);
                    });
                  },
                },
                {
                  key: 'getBounds',
                  value: function (e) {
                    return this._rectangles.get(e).then(function (e) {
                      return e.getBounds();
                    });
                  },
                },
                {
                  key: 'setBounds',
                  value: function (e) {
                    return this._rectangles.get(e).then(function (t) {
                      return t.setBounds({ north: e.north, east: e.east, south: e.south, west: e.west });
                    });
                  },
                },
                {
                  key: 'setEditable',
                  value: function (e) {
                    return this._rectangles.get(e).then(function (t) {
                      return t.setEditable(e.editable);
                    });
                  },
                },
                {
                  key: 'setDraggable',
                  value: function (e) {
                    return this._rectangles.get(e).then(function (t) {
                      return t.setDraggable(e.draggable);
                    });
                  },
                },
                {
                  key: 'setVisible',
                  value: function (e) {
                    return this._rectangles.get(e).then(function (t) {
                      return t.setVisible(e.visible);
                    });
                  },
                },
                {
                  key: 'createEventObservable',
                  value: function (e, t) {
                    var n = this;
                    return new a.a(function (r) {
                      var i = null;
                      return (
                        n._rectangles.get(t).then(function (t) {
                          i = t.addListener(e, function (e) {
                            return n._zone.run(function () {
                              return r.next(e);
                            });
                          });
                        }),
                        function () {
                          null !== i && i.remove();
                        }
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ie)(i['\u0275\u0275inject'](B), i['\u0275\u0275inject'](i.NgZone));
          }),
          (ie.ɵprov = i['\u0275\u0275defineInjectable']({ token: ie, factory: ie.ɵfac })),
          ie),
        le = 0,
        he =
          (((re = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this._infoWindowManager = t),
                (this._el = n),
                (this.isOpen = !1),
                (this.infoWindowClose = new i.EventEmitter()),
                (this._infoWindowAddedToManager = !1),
                (this._id = (le++).toString());
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    (this.content = this._el.nativeElement.querySelector('.agm-info-window-content')),
                      this._infoWindowManager.addInfoWindow(this),
                      (this._infoWindowAddedToManager = !0),
                      this._updateOpenState(),
                      this._registerEventListeners();
                  },
                },
                {
                  key: 'ngOnChanges',
                  value: function (e) {
                    this._infoWindowAddedToManager &&
                      ((e.latitude || e.longitude) &&
                        'number' == typeof this.latitude &&
                        'number' == typeof this.longitude &&
                        this._infoWindowManager.setPosition(this),
                      e.zIndex && this._infoWindowManager.setZIndex(this),
                      e.isOpen && this._updateOpenState(),
                      this._setInfoWindowOptions(e));
                  },
                },
                {
                  key: '_registerEventListeners',
                  value: function () {
                    var e = this;
                    this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
                      (e.isOpen = !1), e.infoWindowClose.emit();
                    });
                  },
                },
                {
                  key: '_updateOpenState',
                  value: function () {
                    this.isOpen ? this.open() : this.close();
                  },
                },
                {
                  key: '_setInfoWindowOptions',
                  value: function (t) {
                    var n = {};
                    Object.keys(t)
                      .filter(function (t) {
                        return -1 !== e._infoWindowOptionsInputs.indexOf(t);
                      })
                      .forEach(function (e) {
                        n[e] = t[e].currentValue;
                      }),
                      this._infoWindowManager.setOptions(this, n);
                  },
                },
                {
                  key: 'open',
                  value: function () {
                    return this._infoWindowManager.open(this);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    var e = this;
                    return this._infoWindowManager.close(this).then(function () {
                      e.infoWindowClose.emit();
                    });
                  },
                },
                {
                  key: 'id',
                  value: function () {
                    return this._id;
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return 'AgmInfoWindow-' + this._id.toString();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this._infoWindowManager.deleteInfoWindow(this);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || re)(i['\u0275\u0275directiveInject'](q), i['\u0275\u0275directiveInject'](i.ElementRef));
          }),
          (re.ɵcmp = i['\u0275\u0275defineComponent']({
            type: re,
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
            features: [i['\u0275\u0275NgOnChangesFeature']],
            ngContentSelectors: T,
            decls: 5,
            vars: 0,
            consts: [[1, 'agm-info-window-content']],
            template: function (e, t) {
              1 & e &&
                (i['\u0275\u0275projectionDef'](),
                i['\u0275\u0275elementStart'](0, 'div', 0),
                i['\u0275\u0275text'](1, '\n      '),
                i['\u0275\u0275projection'](2),
                i['\u0275\u0275text'](3, '\n    '),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275text'](4, '\n  '));
            },
            encapsulation: 2,
          })),
          (re._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth']),
          re),
        fe =
          (((ne = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function (e) {
            return new (e || ne)();
          }),
          (ne.ɵdir = i['\u0275\u0275defineDirective']({ type: ne, inputs: { position: 'position' } })),
          ne),
        de =
          (((te = (function () {
            function e(t, n, r, a, o) {
              _classCallCheck(this, e),
                (this._elem = t),
                (this._mapsWrapper = n),
                (this._platformId = r),
                (this._fitBoundsService = a),
                (this._zone = o),
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
                (this.mapClick = new i.EventEmitter()),
                (this.mapRightClick = new i.EventEmitter()),
                (this.mapDblClick = new i.EventEmitter()),
                (this.centerChange = new i.EventEmitter()),
                (this.boundsChange = new i.EventEmitter()),
                (this.mapTypeIdChange = new i.EventEmitter()),
                (this.idle = new i.EventEmitter()),
                (this.zoomChange = new i.EventEmitter()),
                (this.mapReady = new i.EventEmitter()),
                (this.tilesLoaded = new i.EventEmitter());
            }
            return (
              _createClass(e, [
                {
                  key: 'ngAfterContentInit',
                  value: function () {
                    if (!Object(j.E)(this._platformId)) {
                      var e = this._elem.nativeElement.querySelector('.agm-map-container-inner');
                      this._initMapInstance(e);
                    }
                  },
                },
                {
                  key: '_initMapInstance',
                  value: function (e) {
                    var t = this;
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
                      .then(function () {
                        return t._mapsWrapper.getNativeMap();
                      })
                      .then(function (e) {
                        return t.mapReady.emit(e);
                      }),
                      this._handleMapCenterChange(),
                      this._handleMapZoomChange(),
                      this._handleMapMouseEvents(),
                      this._handleBoundsChange(),
                      this._handleMapTypeIdChange(),
                      this._handleTilesLoadedEvent(),
                      this._handleIdleEvent(),
                      this._handleControlChange();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this._observableSubscriptions.forEach(function (e) {
                      return e.unsubscribe();
                    }),
                      this._mapsWrapper.clearInstanceListeners(),
                      this._fitBoundsSubscription && this._fitBoundsSubscription.unsubscribe();
                  },
                },
                {
                  key: 'ngOnChanges',
                  value: function (e) {
                    this._updateMapOptionsChanges(e), this._updatePosition(e);
                  },
                },
                {
                  key: '_updateMapOptionsChanges',
                  value: function (t) {
                    var n = {};
                    Object.keys(t)
                      .filter(function (t) {
                        return -1 !== e._mapOptionsAttributes.indexOf(t);
                      })
                      .forEach(function (e) {
                        n[e] = t[e].currentValue;
                      }),
                      this._mapsWrapper.setMapOptions(n);
                  },
                },
                {
                  key: 'triggerResize',
                  value: function () {
                    var e = this,
                      t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return new Promise(function (n) {
                      setTimeout(function () {
                        return e._mapsWrapper.triggerMapEvent('resize').then(function () {
                          t && (null != e.fitBounds ? e._fitBounds() : e._setCenter()), n();
                        });
                      });
                    });
                  },
                },
                {
                  key: '_updatePosition',
                  value: function (e) {
                    (null != e.latitude || null != e.longitude || e.fitBounds) &&
                      ('fitBounds' in e
                        ? this._fitBounds()
                        : 'number' == typeof this.latitude && 'number' == typeof this.longitude && this._setCenter());
                  },
                },
                {
                  key: '_setCenter',
                  value: function () {
                    var e = { lat: this.latitude, lng: this.longitude };
                    this.usePanning ? this._mapsWrapper.panTo(e) : this._mapsWrapper.setCenter(e);
                  },
                },
                {
                  key: '_fitBounds',
                  value: function () {
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
                  },
                },
                {
                  key: '_subscribeToFitBoundsUpdates',
                  value: function () {
                    var e = this;
                    this._zone.runOutsideAngular(function () {
                      e._fitBoundsSubscription = e._fitBoundsService.getBounds$().subscribe(function (t) {
                        e._zone.run(function () {
                          return e._updateBounds(t, e.fitBoundsPadding);
                        });
                      });
                    });
                  },
                },
                {
                  key: '_updateBounds',
                  value: function (e, t) {
                    if (e) {
                      if (
                        this._isLatLngBoundsLiteral(e) &&
                        'undefined' != typeof google &&
                        google &&
                        google.maps &&
                        google.maps.LatLngBounds
                      ) {
                        var n = new google.maps.LatLngBounds();
                        n.union(e), (e = n);
                      }
                      this.usePanning ? this._mapsWrapper.panToBounds(e, t) : this._mapsWrapper.fitBounds(e, t);
                    }
                  },
                },
                {
                  key: '_isLatLngBoundsLiteral',
                  value: function (e) {
                    return null != e && void 0 === e.extend;
                  },
                },
                {
                  key: '_handleMapCenterChange',
                  value: function () {
                    var e = this,
                      t = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
                        e._mapsWrapper.getCenter().then(function (t) {
                          (e.latitude = t.lat()),
                            (e.longitude = t.lng()),
                            e.centerChange.emit({ lat: e.latitude, lng: e.longitude });
                        });
                      });
                    this._observableSubscriptions.push(t);
                  },
                },
                {
                  key: '_handleBoundsChange',
                  value: function () {
                    var e = this,
                      t = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
                        e._mapsWrapper.getBounds().then(function (t) {
                          e.boundsChange.emit(t);
                        });
                      });
                    this._observableSubscriptions.push(t);
                  },
                },
                {
                  key: '_handleMapTypeIdChange',
                  value: function () {
                    var e = this,
                      t = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
                        e._mapsWrapper.getMapTypeId().then(function (t) {
                          e.mapTypeIdChange.emit(t);
                        });
                      });
                    this._observableSubscriptions.push(t);
                  },
                },
                {
                  key: '_handleMapZoomChange',
                  value: function () {
                    var e = this,
                      t = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
                        e._mapsWrapper.getZoom().then(function (t) {
                          (e.zoom = t), e.zoomChange.emit(t);
                        });
                      });
                    this._observableSubscriptions.push(t);
                  },
                },
                {
                  key: '_handleIdleEvent',
                  value: function () {
                    var e = this,
                      t = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
                        e.idle.emit(void 0);
                      });
                    this._observableSubscriptions.push(t);
                  },
                },
                {
                  key: '_handleTilesLoadedEvent',
                  value: function () {
                    var e = this,
                      t = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
                        return e.tilesLoaded.emit(void 0);
                      });
                    this._observableSubscriptions.push(t);
                  },
                },
                {
                  key: '_handleMapMouseEvents',
                  value: function () {
                    var e = this;
                    [
                      { name: 'click', emitter: this.mapClick },
                      { name: 'rightclick', emitter: this.mapRightClick },
                      { name: 'dblclick', emitter: this.mapDblClick },
                    ].forEach(function (t) {
                      var n = e._mapsWrapper.subscribeToMapEvent(t.name).subscribe(function (n) {
                        var r = _slicedToArray(n, 1)[0];
                        r.placeId && !e.showDefaultInfoWindow && r.stop(), t.emitter.emit(r);
                      });
                      e._observableSubscriptions.push(n);
                    });
                  },
                },
                {
                  key: '_handleControlChange',
                  value: function () {
                    var e = this;
                    this._setControls(),
                      this.mapControls.changes.subscribe(function () {
                        return e._setControls();
                      });
                  },
                },
                {
                  key: '_setControls',
                  value: function () {
                    var e = this,
                      t = {
                        fullscreenControl: !this.disableDefaultUI,
                        mapTypeControl: !1,
                        panControl: !1,
                        rotateControl: !1,
                        scaleControl: !1,
                        streetViewControl: !this.disableDefaultUI,
                        zoomControl: !this.disableDefaultUI,
                      };
                    this._mapsWrapper.getNativeMap().then(function () {
                      e.mapControls.forEach(function (e) {
                        return Object.assign(t, e.getOptions());
                      }),
                        e._mapsWrapper.setMapOptions(t);
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || te)(
              i['\u0275\u0275directiveInject'](i.ElementRef),
              i['\u0275\u0275directiveInject'](B),
              i['\u0275\u0275directiveInject'](i.PLATFORM_ID),
              i['\u0275\u0275directiveInject'](Z),
              i['\u0275\u0275directiveInject'](i.NgZone)
            );
          }),
          (te.ɵcmp = i['\u0275\u0275defineComponent']({
            type: te,
            selectors: [['agm-map']],
            contentQueries: function (e, t, n) {
              var r;
              1 & e && i['\u0275\u0275contentQuery'](n, fe, !1),
                2 & e && i['\u0275\u0275queryRefresh']((r = i['\u0275\u0275loadQuery']())) && (t.mapControls = r);
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
              i['\u0275\u0275ProvidersFeature']([R, D, D, Z, B, q, G, K, Q, se, ue, ce]),
              i['\u0275\u0275NgOnChangesFeature'],
            ],
            ngContentSelectors: T,
            decls: 8,
            vars: 0,
            consts: [
              [1, 'agm-map-container-inner', 'sebm-google-map-container-inner'],
              [1, 'agm-map-content'],
            ],
            template: function (e, t) {
              1 & e &&
                (i['\u0275\u0275projectionDef'](),
                i['\u0275\u0275text'](0, '\n              '),
                i['\u0275\u0275element'](1, 'div', 0),
                i['\u0275\u0275text'](2, '\n              '),
                i['\u0275\u0275elementStart'](3, 'div', 1),
                i['\u0275\u0275text'](4, '\n                '),
                i['\u0275\u0275projection'](5),
                i['\u0275\u0275text'](6, '\n              '),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275text'](7, '\n  '));
            },
            styles: [
              '.agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }',
            ],
          })),
          (te._mapOptionsAttributes = [
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
          te),
        pe = 0,
        ge =
          (((ee = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this._markerManager = t),
                (this.draggable = !1),
                (this.visible = !0),
                (this.openInfoWindow = !0),
                (this.opacity = 1),
                (this.zIndex = 1),
                (this.clickable = !0),
                (this.animationChange = new i.EventEmitter()),
                (this.markerClick = new i.EventEmitter()),
                (this.markerDblClick = new i.EventEmitter()),
                (this.markerRightClick = new i.EventEmitter()),
                (this.dragStart = new i.EventEmitter()),
                (this.drag = new i.EventEmitter()),
                (this.dragEnd = new i.EventEmitter()),
                (this.mouseOver = new i.EventEmitter()),
                (this.mouseOut = new i.EventEmitter()),
                (this.infoWindow = new i.QueryList()),
                (this._markerAddedToManger = !1),
                (this._observableSubscriptions = []),
                (this._fitBoundsDetails$ = new c.a(1)),
                (this._id = (pe++).toString());
            }
            return (
              _createClass(e, [
                {
                  key: 'ngAfterContentInit',
                  value: function () {
                    var e = this;
                    this.handleInfoWindowUpdate(),
                      this.infoWindow.changes.subscribe(function () {
                        return e.handleInfoWindowUpdate();
                      });
                  },
                },
                {
                  key: 'handleInfoWindowUpdate',
                  value: function () {
                    var e = this;
                    if (this.infoWindow.length > 1) throw new Error('Expected no more than one info window.');
                    this.infoWindow.forEach(function (t) {
                      t.hostMarker = e;
                    });
                  },
                },
                {
                  key: 'ngOnChanges',
                  value: function (e) {
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
                  },
                },
                {
                  key: 'getFitBoundsDetails$',
                  value: function () {
                    return this._fitBoundsDetails$.asObservable();
                  },
                },
                {
                  key: '_updateFitBoundsDetails',
                  value: function () {
                    this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
                  },
                },
                {
                  key: '_addEventListeners',
                  value: function () {
                    var e = this,
                      t = this._markerManager.createEventObservable('click', this).subscribe(function () {
                        e.openInfoWindow &&
                          e.infoWindow.forEach(function (e) {
                            return e.open();
                          }),
                          e.markerClick.emit(e);
                      });
                    this._observableSubscriptions.push(t);
                    var n = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
                      e.markerDblClick.emit(null);
                    });
                    this._observableSubscriptions.push(n);
                    var r = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
                      e.markerRightClick.emit(null);
                    });
                    this._observableSubscriptions.push(r);
                    var i = this._markerManager.createEventObservable('dragstart', this).subscribe(function (t) {
                      return e.dragStart.emit(t);
                    });
                    this._observableSubscriptions.push(i);
                    var a = this._markerManager.createEventObservable('drag', this).subscribe(function (t) {
                      return e.drag.emit(t);
                    });
                    this._observableSubscriptions.push(a);
                    var o = this._markerManager.createEventObservable('dragend', this).subscribe(function (t) {
                      return e.dragEnd.emit(t);
                    });
                    this._observableSubscriptions.push(o);
                    var s = this._markerManager.createEventObservable('mouseover', this).subscribe(function (t) {
                      return e.mouseOver.emit(t);
                    });
                    this._observableSubscriptions.push(s);
                    var u = this._markerManager.createEventObservable('mouseout', this).subscribe(function (t) {
                      return e.mouseOut.emit(t);
                    });
                    this._observableSubscriptions.push(u);
                    var c = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
                      e.animationChange.emit(e.animation);
                    });
                    this._observableSubscriptions.push(c);
                  },
                },
                {
                  key: 'id',
                  value: function () {
                    return this._id;
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return 'AgmMarker-' + this._id.toString();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this._markerManager.deleteMarker(this),
                      this._observableSubscriptions.forEach(function (e) {
                        return e.unsubscribe();
                      });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || ee)(i['\u0275\u0275directiveInject'](Q));
          }),
          (ee.ɵdir = i['\u0275\u0275defineDirective']({
            type: ee,
            selectors: [['agm-marker']],
            contentQueries: function (e, t, n) {
              var r;
              1 & e && i['\u0275\u0275contentQuery'](n, he, !1),
                2 & e && i['\u0275\u0275queryRefresh']((r = i['\u0275\u0275loadQuery']())) && (t.infoWindow = r);
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
              i['\u0275\u0275ProvidersFeature']([
                {
                  provide: N,
                  useExisting: Object(i.forwardRef)(function () {
                    return ee;
                  }),
                },
              ]),
              i['\u0275\u0275NgOnChangesFeature'],
            ],
          })),
          ee),
        ve =
          (((Y = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: 'forRoot',
                  value: function (t) {
                    return {
                      ngModule: e,
                      providers: [].concat(H, [
                        { provide: L, useClass: J },
                        { provide: F, useValue: t },
                      ]),
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = i['\u0275\u0275defineNgModule']({ type: Y })),
          (Y.ɵinj = i['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || Y)();
            },
          })),
          Y);
    },
  },
]);
