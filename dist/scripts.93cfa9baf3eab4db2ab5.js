!(function (t, e) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document) throw new Error('jQuery requires a window with a document');
            return e(t);
          })
    : e(t);
})('undefined' != typeof window ? window : this, function (t, e) {
  'use strict';
  var i = [],
    n = t.document,
    o = Object.getPrototypeOf,
    r = i.slice,
    s = i.concat,
    a = i.push,
    l = i.indexOf,
    c = {},
    d = c.toString,
    u = c.hasOwnProperty,
    h = u.toString,
    p = h.call(Object),
    f = {},
    g = function (t) {
      return 'function' == typeof t && 'number' != typeof t.nodeType;
    },
    m = function (t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function y(t, e, i) {
    var o,
      r = (e = e || n).createElement('script');
    if (((r.text = t), i)) for (o in v) i[o] && (r[o] = i[o]);
    e.head.appendChild(r).parentNode.removeChild(r);
  }
  function _(t) {
    return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? c[d.call(t)] || 'object' : typeof t;
  }
  var w = function (t, e) {
      return new w.fn.init(t, e);
    },
    b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function x(t) {
    var e = !!t && 'length' in t && t.length,
      i = _(t);
    return !g(t) && !m(t) && ('array' === i || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t));
  }
  (w.fn = w.prototype = {
    jquery: '3.3.1',
    constructor: w,
    length: 0,
    toArray: function () {
      return r.call(this);
    },
    get: function (t) {
      return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    pushStack: function (t) {
      var e = w.merge(this.constructor(), t);
      return (e.prevObject = this), e;
    },
    each: function (t) {
      return w.each(this, t);
    },
    map: function (t) {
      return this.pushStack(
        w.map(this, function (e, i) {
          return t.call(e, i, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (t) {
      var e = this.length,
        i = +t + (t < 0 ? e : 0);
      return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: i.sort,
    splice: i.splice,
  }),
    (w.extend = w.fn.extend = function () {
      var t,
        e,
        i,
        n,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
          'object' == typeof s || g(s) || (s = {}),
          a === l && ((s = this), a--);
        a < l;
        a++
      )
        if (null != (t = arguments[a]))
          for (e in t)
            (i = s[e]),
              s !== (n = t[e]) &&
                (c && n && (w.isPlainObject(n) || (o = Array.isArray(n)))
                  ? (o ? ((o = !1), (r = i && Array.isArray(i) ? i : [])) : (r = i && w.isPlainObject(i) ? i : {}),
                    (s[e] = w.extend(c, r, n)))
                  : void 0 !== n && (s[e] = n));
      return s;
    }),
    w.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, i;
        return !(
          !t ||
          '[object Object]' !== d.call(t) ||
          ((e = o(t)) && ('function' != typeof (i = u.call(e, 'constructor') && e.constructor) || h.call(i) !== p))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      globalEval: function (t) {
        y(t);
      },
      each: function (t, e) {
        var i,
          n = 0;
        if (x(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? '' : (t + '').replace(b, '');
      },
      makeArray: function (t, e) {
        var i = e || [];
        return null != t && (x(Object(t)) ? w.merge(i, 'string' == typeof t ? [t] : t) : a.call(i, t)), i;
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : l.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
        return (t.length = o), t;
      },
      grep: function (t, e, i) {
        for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) !== s && n.push(t[o]);
        return n;
      },
      map: function (t, e, i) {
        var n,
          o,
          r = 0,
          a = [];
        if (x(t)) for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && a.push(o);
        else for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
        return s.apply([], a);
      },
      guid: 1,
      support: f,
    }),
    'function' == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]),
    w.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (t, e) {
      c['[object ' + e + ']'] = e.toLowerCase();
    });
  var C = (function (t) {
    var e,
      i,
      n,
      o,
      r,
      s,
      a,
      l,
      c,
      d,
      u,
      h,
      p,
      f,
      g,
      m,
      v,
      y,
      _,
      w = 'sizzle' + 1 * new Date(),
      b = t.document,
      x = 0,
      C = 0,
      T = st(),
      S = st(),
      k = st(),
      E = function (t, e) {
        return t === e && (u = !0), 0;
      },
      A = {}.hasOwnProperty,
      $ = [],
      I = $.pop,
      D = $.push,
      O = $.push,
      P = $.slice,
      N = function (t, e) {
        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
        return -1;
      },
      L =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      j = '[\\x20\\t\\r\\n\\f]',
      H = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      M =
        '\\[' +
        j +
        '*(' +
        H +
        ')(?:' +
        j +
        '*([*^$|!~]?=)' +
        j +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        H +
        '))|)' +
        j +
        '*\\]',
      z =
        ':(' +
        H +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        M +
        ')*)|.*)\\)|)',
      q = new RegExp(j + '+', 'g'),
      W = new RegExp('^' + j + '+|((?:^|[^\\\\])(?:\\\\.)*)' + j + '+$', 'g'),
      F = new RegExp('^' + j + '*,' + j + '*'),
      R = new RegExp('^' + j + '*([>+~]|' + j + ')' + j + '*'),
      B = new RegExp('=' + j + '*([^\\]\'"]*?)' + j + '*\\]', 'g'),
      U = new RegExp(z),
      Q = new RegExp('^' + H + '$'),
      Y = {
        ID: new RegExp('^#(' + H + ')'),
        CLASS: new RegExp('^\\.(' + H + ')'),
        TAG: new RegExp('^(' + H + '|[*])'),
        ATTR: new RegExp('^' + M),
        PSEUDO: new RegExp('^' + z),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            j +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            j +
            '*(?:([+-]|)' +
            j +
            '*(\\d+)|))' +
            j +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + L + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            j +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            j +
            '*((?:-\\d)?\\d*)' +
            j +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      K = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      V = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      G = /[+~]/,
      J = new RegExp('\\\\([\\da-f]{1,6}' + j + '?|(' + j + ')|.)', 'ig'),
      tt = function (t, e, i) {
        var n = '0x' + e - 65536;
        return n != n || i
          ? e
          : n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      it = function (t, e) {
        return e
          ? '\0' === t
            ? '�'
            : t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' '
          : '\\' + t;
      },
      nt = function () {
        h();
      },
      ot = yt(
        function (t) {
          return !0 === t.disabled && ('form' in t || 'label' in t);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      O.apply(($ = P.call(b.childNodes)), b.childNodes);
    } catch (t) {
      O = {
        apply: $.length
          ? function (t, e) {
              D.apply(t, P.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function rt(t, e, n, o) {
      var r,
        a,
        c,
        d,
        u,
        f,
        v,
        y = e && e.ownerDocument,
        x = e ? e.nodeType : 9;
      if (((n = n || []), 'string' != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))) return n;
      if (!o && ((e ? e.ownerDocument || e : b) !== p && h(e), (e = e || p), g)) {
        if (11 !== x && (u = Z.exec(t)))
          if ((r = u[1])) {
            if (9 === x) {
              if (!(c = e.getElementById(r))) return n;
              if (c.id === r) return n.push(c), n;
            } else if (y && (c = y.getElementById(r)) && _(e, c) && c.id === r) return n.push(c), n;
          } else {
            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
            if ((r = u[3]) && i.getElementsByClassName && e.getElementsByClassName)
              return O.apply(n, e.getElementsByClassName(r)), n;
          }
        if (i.qsa && !k[t + ' '] && (!m || !m.test(t))) {
          if (1 !== x) (y = e), (v = t);
          else if ('object' !== e.nodeName.toLowerCase()) {
            for (
              (d = e.getAttribute('id')) ? (d = d.replace(et, it)) : e.setAttribute('id', (d = w)),
                a = (f = s(t)).length;
              a--;

            )
              f[a] = '#' + d + ' ' + vt(f[a]);
            (v = f.join(',')), (y = (G.test(t) && gt(e.parentNode)) || e);
          }
          if (v)
            try {
              return O.apply(n, y.querySelectorAll(v)), n;
            } catch (t) {
            } finally {
              d === w && e.removeAttribute('id');
            }
        }
      }
      return l(t.replace(W, '$1'), e, n, o);
    }
    function st() {
      var t = [];
      return function e(i, o) {
        return t.push(i + ' ') > n.cacheLength && delete e[t.shift()], (e[i + ' '] = o);
      };
    }
    function at(t) {
      return (t[w] = !0), t;
    }
    function lt(t) {
      var e = p.createElement('fieldset');
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ct(t, e) {
      for (var i = t.split('|'), o = i.length; o--; ) n.attrHandle[i[o]] = e;
    }
    function dt(t, e) {
      var i = e && t,
        n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ut(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function ht(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ('input' === i || 'button' === i) && e.type === t;
      };
    }
    function pt(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ot(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function ft(t) {
      return at(function (e) {
        return (
          (e = +e),
          at(function (i, n) {
            for (var o, r = t([], i.length, e), s = r.length; s--; ) i[(o = r[s])] && (i[o] = !(n[o] = i[o]));
          })
        );
      });
    }
    function gt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((i = rt.support = {}),
    (r = rt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && 'HTML' !== e.nodeName;
    }),
    (h = rt.setDocument = function (t) {
      var e,
        o,
        s = t ? t.ownerDocument || t : b;
      return s !== p && 9 === s.nodeType && s.documentElement
        ? ((f = (p = s).documentElement),
          (g = !r(p)),
          b !== p &&
            (o = p.defaultView) &&
            o.top !== o &&
            (o.addEventListener
              ? o.addEventListener('unload', nt, !1)
              : o.attachEvent && o.attachEvent('onunload', nt)),
          (i.attributes = lt(function (t) {
            return (t.className = 'i'), !t.getAttribute('className');
          })),
          (i.getElementsByTagName = lt(function (t) {
            return t.appendChild(p.createComment('')), !t.getElementsByTagName('*').length;
          })),
          (i.getElementsByClassName = V.test(p.getElementsByClassName)),
          (i.getById = lt(function (t) {
            return (f.appendChild(t).id = w), !p.getElementsByName || !p.getElementsByName(w).length;
          })),
          i.getById
            ? ((n.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                  return t.getAttribute('id') === e;
                };
              }),
              (n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                  var i = e.getElementById(t);
                  return i ? [i] : [];
                }
              }))
            : ((n.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                  var i = void 0 !== t.getAttributeNode && t.getAttributeNode('id');
                  return i && i.value === e;
                };
              }),
              (n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                  var i,
                    n,
                    o,
                    r = e.getElementById(t);
                  if (r) {
                    if ((i = r.getAttributeNode('id')) && i.value === t) return [r];
                    for (o = e.getElementsByName(t), n = 0; (r = o[n++]); )
                      if ((i = r.getAttributeNode('id')) && i.value === t) return [r];
                  }
                  return [];
                }
              })),
          (n.find.TAG = i.getElementsByTagName
            ? function (t, e) {
                return void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t)
                  : i.qsa
                  ? e.querySelectorAll(t)
                  : void 0;
              }
            : function (t, e) {
                var i,
                  n = [],
                  o = 0,
                  r = e.getElementsByTagName(t);
                if ('*' === t) {
                  for (; (i = r[o++]); ) 1 === i.nodeType && n.push(i);
                  return n;
                }
                return r;
              }),
          (n.find.CLASS =
            i.getElementsByClassName &&
            function (t, e) {
              if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
            }),
          (v = []),
          (m = []),
          (i.qsa = V.test(p.querySelectorAll)) &&
            (lt(function (t) {
              (f.appendChild(t).innerHTML =
                "<a id='" +
                w +
                "'></a><select id='" +
                w +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                t.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + j + '*(?:\'\'|"")'),
                t.querySelectorAll('[selected]').length || m.push('\\[' + j + '*(?:value|' + L + ')'),
                t.querySelectorAll('[id~=' + w + '-]').length || m.push('~='),
                t.querySelectorAll(':checked').length || m.push(':checked'),
                t.querySelectorAll('a#' + w + '+*').length || m.push('.#.+[+~]');
            }),
            lt(function (t) {
              t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var e = p.createElement('input');
              e.setAttribute('type', 'hidden'),
                t.appendChild(e).setAttribute('name', 'D'),
                t.querySelectorAll('[name=d]').length && m.push('name' + j + '*[*^$|!~]?='),
                2 !== t.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                (f.appendChild(t).disabled = !0),
                2 !== t.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                t.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (i.matchesSelector = V.test(
            (y =
              f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)
          )) &&
            lt(function (t) {
              (i.disconnectedMatch = y.call(t, '*')), y.call(t, "[s!='']:x"), v.push('!=', z);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (v = v.length && new RegExp(v.join('|'))),
          (e = V.test(f.compareDocumentPosition)),
          (_ =
            e || V.test(f.contains)
              ? function (t, e) {
                  var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                  return (
                    t === n ||
                    !(
                      !n ||
                      1 !== n.nodeType ||
                      !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))
                    )
                  );
                }
              : function (t, e) {
                  if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                  return !1;
                }),
          (E = e
            ? function (t, e) {
                if (t === e) return (u = !0), 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return (
                  n ||
                  (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) ||
                  (!i.sortDetached && e.compareDocumentPosition(t) === n)
                    ? t === p || (t.ownerDocument === b && _(b, t))
                      ? -1
                      : e === p || (e.ownerDocument === b && _(b, e))
                      ? 1
                      : d
                      ? N(d, t) - N(d, e)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (t, e) {
                if (t === e) return (u = !0), 0;
                var i,
                  n = 0,
                  o = t.parentNode,
                  r = e.parentNode,
                  s = [t],
                  a = [e];
                if (!o || !r) return t === p ? -1 : e === p ? 1 : o ? -1 : r ? 1 : d ? N(d, t) - N(d, e) : 0;
                if (o === r) return dt(t, e);
                for (i = t; (i = i.parentNode); ) s.unshift(i);
                for (i = e; (i = i.parentNode); ) a.unshift(i);
                for (; s[n] === a[n]; ) n++;
                return n ? dt(s[n], a[n]) : s[n] === b ? -1 : a[n] === b ? 1 : 0;
              }),
          p)
        : p;
    }),
    (rt.matches = function (t, e) {
      return rt(t, null, null, e);
    }),
    (rt.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== p && h(t),
        (e = e.replace(B, "='$1']")),
        i.matchesSelector && g && !k[e + ' '] && (!v || !v.test(e)) && (!m || !m.test(e)))
      )
        try {
          var n = y.call(t, e);
          if (n || i.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
        } catch (t) {}
      return rt(e, p, null, [t]).length > 0;
    }),
    (rt.contains = function (t, e) {
      return (t.ownerDocument || t) !== p && h(t), _(t, e);
    }),
    (rt.attr = function (t, e) {
      (t.ownerDocument || t) !== p && h(t);
      var o = n.attrHandle[e.toLowerCase()],
        r = o && A.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
      return void 0 !== r
        ? r
        : i.attributes || !g
        ? t.getAttribute(e)
        : (r = t.getAttributeNode(e)) && r.specified
        ? r.value
        : null;
    }),
    (rt.escape = function (t) {
      return (t + '').replace(et, it);
    }),
    (rt.error = function (t) {
      throw new Error('Syntax error, unrecognized expression: ' + t);
    }),
    (rt.uniqueSort = function (t) {
      var e,
        n = [],
        o = 0,
        r = 0;
      if (((u = !i.detectDuplicates), (d = !i.sortStable && t.slice(0)), t.sort(E), u)) {
        for (; (e = t[r++]); ) e === t[r] && (o = n.push(r));
        for (; o--; ) t.splice(n[o], 1);
      }
      return (d = null), t;
    }),
    (o = rt.getText = function (t) {
      var e,
        i = '',
        n = 0,
        r = t.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ('string' == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) i += o(t);
        } else if (3 === r || 4 === r) return t.nodeValue;
      } else for (; (e = t[n++]); ) i += o(e);
      return i;
    }),
    ((n = rt.selectors = {
      cacheLength: 50,
      createPseudo: at,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' },
      },
      preFilter: {
        ATTR: function (t) {
          return (
            (t[1] = t[1].replace(J, tt)),
            (t[3] = (t[3] || t[4] || t[5] || '').replace(J, tt)),
            '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
            t.slice(0, 4)
          );
        },
        CHILD: function (t) {
          return (
            (t[1] = t[1].toLowerCase()),
            'nth' === t[1].slice(0, 3)
              ? (t[3] || rt.error(t[0]),
                (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3]))),
                (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
              : t[3] && rt.error(t[0]),
            t
          );
        },
        PSEUDO: function (t) {
          var e,
            i = !t[6] && t[2];
          return Y.CHILD.test(t[0])
            ? null
            : (t[3]
                ? (t[2] = t[4] || t[5] || '')
                : i &&
                  U.test(i) &&
                  (e = s(i, !0)) &&
                  (e = i.indexOf(')', i.length - e) - i.length) &&
                  ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
              t.slice(0, 3));
        },
      },
      filter: {
        TAG: function (t) {
          var e = t.replace(J, tt).toLowerCase();
          return '*' === t
            ? function () {
                return !0;
              }
            : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e;
              };
        },
        CLASS: function (t) {
          var e = T[t + ' '];
          return (
            e ||
            ((e = new RegExp('(^|' + j + ')' + t + '(' + j + '|$)')) &&
              T(t, function (t) {
                return e.test(
                  ('string' == typeof t.className && t.className) ||
                    (void 0 !== t.getAttribute && t.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function (t, e, i) {
          return function (n) {
            var o = rt.attr(n, t);
            return null == o
              ? '!=' === e
              : !e ||
                  ((o += ''),
                  '=' === e
                    ? o === i
                    : '!=' === e
                    ? o !== i
                    : '^=' === e
                    ? i && 0 === o.indexOf(i)
                    : '*=' === e
                    ? i && o.indexOf(i) > -1
                    : '$=' === e
                    ? i && o.slice(-i.length) === i
                    : '~=' === e
                    ? (' ' + o.replace(q, ' ') + ' ').indexOf(i) > -1
                    : '|=' === e && (o === i || o.slice(0, i.length + 1) === i + '-'));
          };
        },
        CHILD: function (t, e, i, n, o) {
          var r = 'nth' !== t.slice(0, 3),
            s = 'last' !== t.slice(-4),
            a = 'of-type' === e;
          return 1 === n && 0 === o
            ? function (t) {
                return !!t.parentNode;
              }
            : function (e, i, l) {
                var c,
                  d,
                  u,
                  h,
                  p,
                  f,
                  g = r !== s ? 'nextSibling' : 'previousSibling',
                  m = e.parentNode,
                  v = a && e.nodeName.toLowerCase(),
                  y = !l && !a,
                  _ = !1;
                if (m) {
                  if (r) {
                    for (; g; ) {
                      for (h = e; (h = h[g]); ) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      f = g = 'only' === t && !f && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((f = [s ? m.firstChild : m.lastChild]), s && y)) {
                    for (
                      _ =
                        (p =
                          (c =
                            (d = (u = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] || [])[0] ===
                            x && c[1]) && c[2],
                        h = p && m.childNodes[p];
                      (h = (++p && h && h[g]) || (_ = p = 0) || f.pop());

                    )
                      if (1 === h.nodeType && ++_ && h === e) {
                        d[t] = [x, p, _];
                        break;
                      }
                  } else if (
                    (y &&
                      (_ = p =
                        (c = (d = (u = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] || [])[0] ===
                          x && c[1]),
                    !1 === _)
                  )
                    for (
                      ;
                      (h = (++p && h && h[g]) || (_ = p = 0) || f.pop()) &&
                      ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) ||
                        !++_ ||
                        (y && ((d = (u = h[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] = [x, _]),
                        h !== e));

                    );
                  return (_ -= o) === n || (_ % n == 0 && _ / n >= 0);
                }
              };
        },
        PSEUDO: function (t, e) {
          var i,
            o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error('unsupported pseudo: ' + t);
          return o[w]
            ? o(e)
            : o.length > 1
            ? ((i = [t, t, '', e]),
              n.setFilters.hasOwnProperty(t.toLowerCase())
                ? at(function (t, i) {
                    for (var n, r = o(t, e), s = r.length; s--; ) t[(n = N(t, r[s]))] = !(i[n] = r[s]);
                  })
                : function (t) {
                    return o(t, 0, i);
                  })
            : o;
        },
      },
      pseudos: {
        not: at(function (t) {
          var e = [],
            i = [],
            n = a(t.replace(W, '$1'));
          return n[w]
            ? at(function (t, e, i, o) {
                for (var r, s = n(t, null, o, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
              })
            : function (t, o, r) {
                return (e[0] = t), n(e, null, r, i), (e[0] = null), !i.pop();
              };
        }),
        has: at(function (t) {
          return function (e) {
            return rt(t, e).length > 0;
          };
        }),
        contains: at(function (t) {
          return (
            (t = t.replace(J, tt)),
            function (e) {
              return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
            }
          );
        }),
        lang: at(function (t) {
          return (
            Q.test(t || '') || rt.error('unsupported lang: ' + t),
            (t = t.replace(J, tt).toLowerCase()),
            function (e) {
              var i;
              do {
                if ((i = g ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')))
                  return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + '-');
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var i = t.location && t.location.hash;
          return i && i.slice(1) === e.id;
        },
        root: function (t) {
          return t === f;
        },
        focus: function (t) {
          return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        },
        enabled: pt(!1),
        disabled: pt(!0),
        checked: function (t) {
          var e = t.nodeName.toLowerCase();
          return ('input' === e && !!t.checked) || ('option' === e && !!t.selected);
        },
        selected: function (t) {
          return !0 === t.selected;
        },
        empty: function (t) {
          for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
          return !0;
        },
        parent: function (t) {
          return !n.pseudos.empty(t);
        },
        header: function (t) {
          return X.test(t.nodeName);
        },
        input: function (t) {
          return K.test(t.nodeName);
        },
        button: function (t) {
          var e = t.nodeName.toLowerCase();
          return ('input' === e && 'button' === t.type) || 'button' === e;
        },
        text: function (t) {
          var e;
          return (
            'input' === t.nodeName.toLowerCase() &&
            'text' === t.type &&
            (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase())
          );
        },
        first: ft(function () {
          return [0];
        }),
        last: ft(function (t, e) {
          return [e - 1];
        }),
        eq: ft(function (t, e, i) {
          return [i < 0 ? i + e : i];
        }),
        even: ft(function (t, e) {
          for (var i = 0; i < e; i += 2) t.push(i);
          return t;
        }),
        odd: ft(function (t, e) {
          for (var i = 1; i < e; i += 2) t.push(i);
          return t;
        }),
        lt: ft(function (t, e, i) {
          for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
          return t;
        }),
        gt: ft(function (t, e, i) {
          for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
          return t;
        }),
      },
    }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ut(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ht(e);
    function mt() {}
    function vt(t) {
      for (var e = 0, i = t.length, n = ''; e < i; e++) n += t[e].value;
      return n;
    }
    function yt(t, e, i) {
      var n = e.dir,
        o = e.next,
        r = o || n,
        s = i && 'parentNode' === r,
        a = C++;
      return e.first
        ? function (e, i, o) {
            for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
            return !1;
          }
        : function (e, i, l) {
            var c,
              d,
              u,
              h = [x, a];
            if (l) {
              for (; (e = e[n]); ) if ((1 === e.nodeType || s) && t(e, i, l)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || s)
                  if (
                    ((d = (u = e[w] || (e[w] = {}))[e.uniqueID] || (u[e.uniqueID] = {})),
                    o && o === e.nodeName.toLowerCase())
                  )
                    e = e[n] || e;
                  else {
                    if ((c = d[r]) && c[0] === x && c[1] === a) return (h[2] = c[2]);
                    if (((d[r] = h), (h[2] = t(e, i, l)))) return !0;
                  }
            return !1;
          };
    }
    function _t(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function wt(t, e, i, n, o) {
      for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (r = t[a]) && ((i && !i(r, n, o)) || (s.push(r), c && e.push(a)));
      return s;
    }
    function bt(t, e, i, n, o, r) {
      return (
        n && !n[w] && (n = bt(n)),
        o && !o[w] && (o = bt(o, r)),
        at(function (r, s, a, l) {
          var c,
            d,
            u,
            h = [],
            p = [],
            f = s.length,
            g =
              r ||
              (function (t, e, i) {
                for (var n = 0, o = e.length; n < o; n++) rt(t, e[n], i);
                return i;
              })(e || '*', a.nodeType ? [a] : a, []),
            m = !t || (!r && e) ? g : wt(g, h, t, a, l),
            v = i ? (o || (r ? t : f || n) ? [] : s) : m;
          if ((i && i(m, v, a, l), n))
            for (c = wt(v, p), n(c, [], a, l), d = c.length; d--; ) (u = c[d]) && (v[p[d]] = !(m[p[d]] = u));
          if (r) {
            if (o || t) {
              if (o) {
                for (c = [], d = v.length; d--; ) (u = v[d]) && c.push((m[d] = u));
                o(null, (v = []), c, l);
              }
              for (d = v.length; d--; ) (u = v[d]) && (c = o ? N(r, u) : h[d]) > -1 && (r[c] = !(s[c] = u));
            }
          } else (v = wt(v === s ? v.splice(f, v.length) : v)), o ? o(null, s, v, l) : O.apply(s, v);
        })
      );
    }
    function xt(t) {
      for (
        var e,
          i,
          o,
          r = t.length,
          s = n.relative[t[0].type],
          a = s || n.relative[' '],
          l = s ? 1 : 0,
          d = yt(
            function (t) {
              return t === e;
            },
            a,
            !0
          ),
          u = yt(
            function (t) {
              return N(e, t) > -1;
            },
            a,
            !0
          ),
          h = [
            function (t, i, n) {
              var o = (!s && (n || i !== c)) || ((e = i).nodeType ? d(t, i, n) : u(t, i, n));
              return (e = null), o;
            },
          ];
        l < r;
        l++
      )
        if ((i = n.relative[t[l].type])) h = [yt(_t(h), i)];
        else {
          if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
            for (o = ++l; o < r && !n.relative[t[o].type]; o++);
            return bt(
              l > 1 && _t(h),
              l > 1 && vt(t.slice(0, l - 1).concat({ value: ' ' === t[l - 2].type ? '*' : '' })).replace(W, '$1'),
              i,
              l < o && xt(t.slice(l, o)),
              o < r && xt((t = t.slice(o))),
              o < r && vt(t)
            );
          }
          h.push(i);
        }
      return _t(h);
    }
    function Ct(t, e) {
      var i = e.length > 0,
        o = t.length > 0,
        r = function (r, s, a, l, d) {
          var u,
            f,
            m,
            v = 0,
            y = '0',
            _ = r && [],
            w = [],
            b = c,
            C = r || (o && n.find.TAG('*', d)),
            T = (x += null == b ? 1 : Math.random() || 0.1),
            S = C.length;
          for (d && (c = s === p || s || d); y !== S && null != (u = C[y]); y++) {
            if (o && u) {
              for (f = 0, s || u.ownerDocument === p || (h(u), (a = !g)); (m = t[f++]); )
                if (m(u, s || p, a)) {
                  l.push(u);
                  break;
                }
              d && (x = T);
            }
            i && ((u = !m && u) && v--, r && _.push(u));
          }
          if (((v += y), i && y !== v)) {
            for (f = 0; (m = e[f++]); ) m(_, w, s, a);
            if (r) {
              if (v > 0) for (; y--; ) _[y] || w[y] || (w[y] = I.call(l));
              w = wt(w);
            }
            O.apply(l, w), d && !r && w.length > 0 && v + e.length > 1 && rt.uniqueSort(l);
          }
          return d && ((x = T), (c = b)), _;
        };
      return i ? at(r) : r;
    }
    return (
      (mt.prototype = n.filters = n.pseudos),
      (n.setFilters = new mt()),
      (s = rt.tokenize = function (t, e) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = S[t + ' '];
        if (d) return e ? 0 : d.slice(0);
        for (a = t, l = [], c = n.preFilter; a; ) {
          for (s in ((i && !(o = F.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
          (i = !1),
          (o = R.exec(a)) &&
            ((i = o.shift()), r.push({ value: i, type: o[0].replace(W, ' ') }), (a = a.slice(i.length))),
          n.filter))
            !(o = Y[s].exec(a)) ||
              (c[s] && !(o = c[s](o))) ||
              ((i = o.shift()), r.push({ value: i, type: s, matches: o }), (a = a.slice(i.length)));
          if (!i) break;
        }
        return e ? a.length : a ? rt.error(t) : S(t, l).slice(0);
      }),
      (a = rt.compile = function (t, e) {
        var i,
          n = [],
          o = [],
          r = k[t + ' '];
        if (!r) {
          for (e || (e = s(t)), i = e.length; i--; ) (r = xt(e[i]))[w] ? n.push(r) : o.push(r);
          (r = k(t, Ct(o, n))).selector = t;
        }
        return r;
      }),
      (l = rt.select = function (t, e, i, o) {
        var r,
          l,
          c,
          d,
          u,
          h = 'function' == typeof t && t,
          p = !o && s((t = h.selector || t));
        if (((i = i || []), 1 === p.length)) {
          if (
            (l = p[0] = p[0].slice(0)).length > 2 &&
            'ID' === (c = l[0]).type &&
            9 === e.nodeType &&
            g &&
            n.relative[l[1].type]
          ) {
            if (!(e = (n.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return i;
            h && (e = e.parentNode), (t = t.slice(l.shift().value.length));
          }
          for (r = Y.needsContext.test(t) ? 0 : l.length; r-- && !n.relative[(d = (c = l[r]).type)]; )
            if ((u = n.find[d]) && (o = u(c.matches[0].replace(J, tt), (G.test(l[0].type) && gt(e.parentNode)) || e))) {
              if ((l.splice(r, 1), !(t = o.length && vt(l)))) return O.apply(i, o), i;
              break;
            }
        }
        return (h || a(t, p))(o, e, !g, i, !e || (G.test(t) && gt(e.parentNode)) || e), i;
      }),
      (i.sortStable = w.split('').sort(E).join('') === w),
      (i.detectDuplicates = !!u),
      h(),
      (i.sortDetached = lt(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement('fieldset'));
      })),
      lt(function (t) {
        return (t.innerHTML = "<a href='#'></a>"), '#' === t.firstChild.getAttribute('href');
      }) ||
        ct('type|href|height|width', function (t, e, i) {
          if (!i) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        lt(function (t) {
          return (
            (t.innerHTML = '<input/>'),
            t.firstChild.setAttribute('value', ''),
            '' === t.firstChild.getAttribute('value')
          );
        })) ||
        ct('value', function (t, e, i) {
          if (!i && 'input' === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      lt(function (t) {
        return null == t.getAttribute('disabled');
      }) ||
        ct(L, function (t, e, i) {
          var n;
          if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }),
      rt
    );
  })(t);
  (w.find = C),
    (w.expr = C.selectors),
    (w.expr[':'] = w.expr.pseudos),
    (w.uniqueSort = w.unique = C.uniqueSort),
    (w.text = C.getText),
    (w.isXMLDoc = C.isXML),
    (w.contains = C.contains),
    (w.escapeSelector = C.escape);
  var T = function (t, e, i) {
      for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (o && w(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    S = function (t, e) {
      for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
    k = w.expr.match.needsContext;
  function E(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function $(t, e, i) {
    return g(e)
      ? w.grep(t, function (t, n) {
          return !!e.call(t, n, t) !== i;
        })
      : e.nodeType
      ? w.grep(t, function (t) {
          return (t === e) !== i;
        })
      : 'string' != typeof e
      ? w.grep(t, function (t) {
          return l.call(e, t) > -1 !== i;
        })
      : w.filter(e, t, i);
  }
  (w.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ':not(' + t + ')'),
      1 === e.length && 1 === n.nodeType
        ? w.find.matchesSelector(n, t)
          ? [n]
          : []
        : w.find.matches(
            t,
            w.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (t) {
        var e,
          i,
          n = this.length,
          o = this;
        if ('string' != typeof t)
          return this.pushStack(
            w(t).filter(function () {
              for (e = 0; e < n; e++) if (w.contains(o[e], this)) return !0;
            })
          );
        for (i = this.pushStack([]), e = 0; e < n; e++) w.find(t, o[e], i);
        return n > 1 ? w.uniqueSort(i) : i;
      },
      filter: function (t) {
        return this.pushStack($(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack($(this, t || [], !0));
      },
      is: function (t) {
        return !!$(this, 'string' == typeof t && k.test(t) ? w(t) : t || [], !1).length;
      },
    });
  var I,
    D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (t, e, i) {
    var o, r;
    if (!t) return this;
    if (((i = i || I), 'string' == typeof t)) {
      if (!(o = '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || (!o[1] && e))
        return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
      if (o[1]) {
        if (
          (w.merge(
            this,
            w.parseHTML(o[1], (e = e instanceof w ? e[0] : e) && e.nodeType ? e.ownerDocument || e : n, !0)
          ),
          A.test(o[1]) && w.isPlainObject(e))
        )
          for (o in e) g(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
        return this;
      }
      return (r = n.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this;
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : g(t)
      ? void 0 !== i.ready
        ? i.ready(t)
        : t(w)
      : w.makeArray(t, this);
  }).prototype = w.fn),
    (I = w(n));
  var O = /^(?:parents|prev(?:Until|All))/,
    P = { children: !0, contents: !0, next: !0, prev: !0 };
  function N(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  w.fn.extend({
    has: function (t) {
      var e = w(t, this),
        i = e.length;
      return this.filter(function () {
        for (var t = 0; t < i; t++) if (w.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var i,
        n = 0,
        o = this.length,
        r = [],
        s = 'string' != typeof t && w(t);
      if (!k.test(t))
        for (; n < o; n++)
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && w.find.matchesSelector(i, t))) {
              r.push(i);
              break;
            }
      return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
    },
    index: function (t) {
      return t
        ? 'string' == typeof t
          ? l.call(w(t), this[0])
          : l.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    w.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return T(t, 'parentNode');
        },
        parentsUntil: function (t, e, i) {
          return T(t, 'parentNode', i);
        },
        next: function (t) {
          return N(t, 'nextSibling');
        },
        prev: function (t) {
          return N(t, 'previousSibling');
        },
        nextAll: function (t) {
          return T(t, 'nextSibling');
        },
        prevAll: function (t) {
          return T(t, 'previousSibling');
        },
        nextUntil: function (t, e, i) {
          return T(t, 'nextSibling', i);
        },
        prevUntil: function (t, e, i) {
          return T(t, 'previousSibling', i);
        },
        siblings: function (t) {
          return S((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return S(t.firstChild);
        },
        contents: function (t) {
          return E(t, 'iframe')
            ? t.contentDocument
            : (E(t, 'template') && (t = t.content || t), w.merge([], t.childNodes));
        },
      },
      function (t, e) {
        w.fn[t] = function (i, n) {
          var o = w.map(this, e, i);
          return (
            'Until' !== t.slice(-5) && (n = i),
            n && 'string' == typeof n && (o = w.filter(n, o)),
            this.length > 1 && (P[t] || w.uniqueSort(o), O.test(t) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var L = /[^\x20\t\r\n\f]+/g;
  function j(t) {
    return t;
  }
  function H(t) {
    throw t;
  }
  function M(t, e, i, n) {
    var o;
    try {
      t && g((o = t.promise))
        ? o.call(t).done(e).fail(i)
        : t && g((o = t.then))
        ? o.call(t, e, i)
        : e.apply(void 0, [t].slice(n));
    } catch (t) {
      i.apply(void 0, [t]);
    }
  }
  (w.Callbacks = function (t) {
    t =
      'string' == typeof t
        ? (function (t) {
            var e = {};
            return (
              w.each(t.match(L) || [], function (t, i) {
                e[i] = !0;
              }),
              e
            );
          })(t)
        : w.extend({}, t);
    var e,
      i,
      n,
      o,
      r = [],
      s = [],
      a = -1,
      l = function () {
        for (o = o || t.once, n = e = !0; s.length; a = -1)
          for (i = s.shift(); ++a < r.length; )
            !1 === r[a].apply(i[0], i[1]) && t.stopOnFalse && ((a = r.length), (i = !1));
        t.memory || (i = !1), (e = !1), o && (r = i ? [] : '');
      },
      c = {
        add: function () {
          return (
            r &&
              (i && !e && ((a = r.length - 1), s.push(i)),
              (function e(i) {
                w.each(i, function (i, n) {
                  g(n) ? (t.unique && c.has(n)) || r.push(n) : n && n.length && 'string' !== _(n) && e(n);
                });
              })(arguments),
              i && !e && l()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (t, e) {
              for (var i; (i = w.inArray(e, r, i)) > -1; ) r.splice(i, 1), i <= a && a--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? w.inArray(t, r) > -1 : r.length > 0;
        },
        empty: function () {
          return r && (r = []), this;
        },
        disable: function () {
          return (o = s = []), (r = i = ''), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (o = s = []), i || e || (r = i = ''), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (t, i) {
          return o || ((i = [t, (i = i || []).slice ? i.slice() : i]), s.push(i), e || l()), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return c;
  }),
    w.extend({
      Deferred: function (e) {
        var i = [
            ['notify', 'progress', w.Callbacks('memory'), w.Callbacks('memory'), 2],
            ['resolve', 'done', w.Callbacks('once memory'), w.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', w.Callbacks('once memory'), w.Callbacks('once memory'), 1, 'rejected'],
          ],
          n = 'pending',
          o = {
            state: function () {
              return n;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return o.then(null, t);
            },
            pipe: function () {
              var t = arguments;
              return w
                .Deferred(function (e) {
                  w.each(i, function (i, n) {
                    var o = g(t[n[4]]) && t[n[4]];
                    r[n[1]](function () {
                      var t = o && o.apply(this, arguments);
                      t && g(t.promise)
                        ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject)
                        : e[n[0] + 'With'](this, o ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function (e, n, o) {
              var r = 0;
              function s(e, i, n, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var t, c;
                      if (!(e < r)) {
                        if ((t = n.apply(a, l)) === i.promise()) throw new TypeError('Thenable self-resolution');
                        g((c = t && ('object' == typeof t || 'function' == typeof t) && t.then))
                          ? o
                            ? c.call(t, s(r, i, j, o), s(r, i, H, o))
                            : (r++, c.call(t, s(r, i, j, o), s(r, i, H, o), s(r, i, j, i.notifyWith)))
                          : (n !== j && ((a = void 0), (l = [t])), (o || i.resolveWith)(a, l));
                      }
                    },
                    d = o
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (t) {
                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, d.stackTrace),
                              e + 1 >= r && (n !== H && ((a = void 0), (l = [t])), i.rejectWith(a, l));
                          }
                        };
                  e ? d() : (w.Deferred.getStackHook && (d.stackTrace = w.Deferred.getStackHook()), t.setTimeout(d));
                };
              }
              return w
                .Deferred(function (t) {
                  i[0][3].add(s(0, t, g(o) ? o : j, t.notifyWith)),
                    i[1][3].add(s(0, t, g(e) ? e : j)),
                    i[2][3].add(s(0, t, g(n) ? n : H));
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? w.extend(t, o) : o;
            },
          },
          r = {};
        return (
          w.each(i, function (t, e) {
            var s = e[2],
              a = e[5];
            (o[e[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  i[3 - t][2].disable,
                  i[3 - t][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              s.add(e[3].fire),
              (r[e[0]] = function () {
                return r[e[0] + 'With'](this === r ? void 0 : this, arguments), this;
              }),
              (r[e[0] + 'With'] = s.fireWith);
          }),
          o.promise(r),
          e && e.call(r, r),
          r
        );
      },
      when: function (t) {
        var e = arguments.length,
          i = e,
          n = Array(i),
          o = r.call(arguments),
          s = w.Deferred(),
          a = function (t) {
            return function (i) {
              (n[t] = this), (o[t] = arguments.length > 1 ? r.call(arguments) : i), --e || s.resolveWith(n, o);
            };
          };
        if (e <= 1 && (M(t, s.done(a(i)).resolve, s.reject, !e), 'pending' === s.state() || g(o[i] && o[i].then)))
          return s.then();
        for (; i--; ) M(o[i], a(i), s.reject);
        return s.promise();
      },
    });
  var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (e, i) {
    t.console &&
      t.console.warn &&
      e &&
      z.test(e.name) &&
      t.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, i);
  }),
    (w.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var q = w.Deferred();
  function W() {
    n.removeEventListener('DOMContentLoaded', W), t.removeEventListener('load', W), w.ready();
  }
  (w.fn.ready = function (t) {
    return (
      q.then(t).catch(function (t) {
        w.readyException(t);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0), (!0 !== t && --w.readyWait > 0) || q.resolveWith(n, [w]));
      },
    }),
    (w.ready.then = q.then),
    'complete' === n.readyState || ('loading' !== n.readyState && !n.documentElement.doScroll)
      ? t.setTimeout(w.ready)
      : (n.addEventListener('DOMContentLoaded', W), t.addEventListener('load', W));
  var F = function (t, e, i, n, o, r, s) {
      var a = 0,
        l = t.length,
        c = null == i;
      if ('object' === _(i)) for (a in ((o = !0), i)) F(t, e, a, i[a], !0, r, s);
      else if (
        void 0 !== n &&
        ((o = !0),
        g(n) || (s = !0),
        c &&
          (s
            ? (e.call(t, n), (e = null))
            : ((c = e),
              (e = function (t, e, i) {
                return c.call(w(t), i);
              }))),
        e)
      )
        for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
      return o ? t : c ? e.call(t) : l ? e(t[0], i) : r;
    },
    R = /^-ms-/,
    B = /-([a-z])/g;
  function U(t, e) {
    return e.toUpperCase();
  }
  function Q(t) {
    return t.replace(R, 'ms-').replace(B, U);
  }
  var Y = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };
  function K() {
    this.expando = w.expando + K.uid++;
  }
  (K.uid = 1),
    (K.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Y(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))),
          e
        );
      },
      set: function (t, e, i) {
        var n,
          o = this.cache(t);
        if ('string' == typeof e) o[Q(e)] = i;
        else for (n in e) o[Q(n)] = e[n];
        return o;
      },
      get: function (t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)];
      },
      access: function (t, e, i) {
        return void 0 === e || (e && 'string' == typeof e && void 0 === i)
          ? this.get(t, e)
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n = t[this.expando];
        if (void 0 !== n) {
          if (void 0 !== e) {
            i = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in n ? [e] : e.match(L) || []).length;
            for (; i--; ) delete n[e[i]];
          }
          (void 0 === e || w.isEmptyObject(n)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !w.isEmptyObject(e);
      },
    });
  var X = new K(),
    V = new K(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function J(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
      if (((n = 'data-' + e.replace(G, '-$&').toLowerCase()), 'string' == typeof (i = t.getAttribute(n)))) {
        try {
          i = (function (t) {
            return (
              'true' === t ||
              ('false' !== t && ('null' === t ? null : t === +t + '' ? +t : Z.test(t) ? JSON.parse(t) : t))
            );
          })(i);
        } catch (t) {}
        V.set(t, e, i);
      } else i = void 0;
    return i;
  }
  w.extend({
    hasData: function (t) {
      return V.hasData(t) || X.hasData(t);
    },
    data: function (t, e, i) {
      return V.access(t, e, i);
    },
    removeData: function (t, e) {
      V.remove(t, e);
    },
    _data: function (t, e, i) {
      return X.access(t, e, i);
    },
    _removeData: function (t, e) {
      X.remove(t, e);
    },
  }),
    w.fn.extend({
      data: function (t, e) {
        var i,
          n,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === t) {
          if (this.length && ((o = V.get(r)), 1 === r.nodeType && !X.get(r, 'hasDataAttrs'))) {
            for (i = s.length; i--; )
              s[i] && 0 === (n = s[i].name).indexOf('data-') && ((n = Q(n.slice(5))), J(r, n, o[n]));
            X.set(r, 'hasDataAttrs', !0);
          }
          return o;
        }
        return 'object' == typeof t
          ? this.each(function () {
              V.set(this, t);
            })
          : F(
              this,
              function (e) {
                var i;
                if (r && void 0 === e) {
                  if (void 0 !== (i = V.get(r, t))) return i;
                  if (void 0 !== (i = J(r, t))) return i;
                } else
                  this.each(function () {
                    V.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          V.remove(this, t);
        });
      },
    }),
    w.extend({
      queue: function (t, e, i) {
        var n;
        if (t)
          return (
            (n = X.get(t, (e = (e || 'fx') + 'queue'))),
            i && (!n || Array.isArray(i) ? (n = X.access(t, e, w.makeArray(i))) : n.push(i)),
            n || []
          );
      },
      dequeue: function (t, e) {
        var i = w.queue(t, (e = e || 'fx')),
          n = i.length,
          o = i.shift(),
          r = w._queueHooks(t, e);
        'inprogress' === o && ((o = i.shift()), n--),
          o &&
            ('fx' === e && i.unshift('inprogress'),
            delete r.stop,
            o.call(
              t,
              function () {
                w.dequeue(t, e);
              },
              r
            )),
          !n && r && r.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + 'queueHooks';
        return (
          X.get(t, i) ||
          X.access(t, i, {
            empty: w.Callbacks('once memory').add(function () {
              X.remove(t, [e + 'queue', i]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          'string' != typeof t && ((e = t), (t = 'fx'), i--),
          arguments.length < i
            ? w.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = w.queue(this, t, e);
                w._queueHooks(this, t), 'fx' === t && 'inprogress' !== i[0] && w.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          w.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || 'fx', []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          o = w.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --n || o.resolveWith(r, [r]);
          };
        for ('string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx'; s--; )
          (i = X.get(r[s], t + 'queueHooks')) && i.empty && (n++, i.empty.add(a));
        return a(), o.promise(e);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp('^(?:([+-])=|)(' + tt + ')([a-z%]*)$', 'i'),
    it = ['Top', 'Right', 'Bottom', 'Left'],
    nt = function (t, e) {
      return (
        'none' === (t = e || t).style.display ||
        ('' === t.style.display && w.contains(t.ownerDocument, t) && 'none' === w.css(t, 'display'))
      );
    },
    ot = function (t, e, i, n) {
      var o,
        r,
        s = {};
      for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
      for (r in ((o = i.apply(t, n || [])), e)) t.style[r] = s[r];
      return o;
    };
  function rt(t, e, i, n) {
    var o,
      r,
      s = 20,
      a = n
        ? function () {
            return n.cur();
          }
        : function () {
            return w.css(t, e, '');
          },
      l = a(),
      c = (i && i[3]) || (w.cssNumber[e] ? '' : 'px'),
      d = (w.cssNumber[e] || ('px' !== c && +l)) && et.exec(w.css(t, e));
    if (d && d[3] !== c) {
      for (c = c || d[3], d = +(l /= 2) || 1; s--; )
        w.style(t, e, d + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (d /= r);
      w.style(t, e, (d *= 2) + c), (i = i || []);
    }
    return (
      i &&
        ((d = +d || +l || 0),
        (o = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = c), (n.start = d), (n.end = o))),
      o
    );
  }
  var st = {};
  function at(t) {
    var e,
      i = t.ownerDocument,
      n = t.nodeName,
      o = st[n];
    return (
      o ||
      ((e = i.body.appendChild(i.createElement(n))),
      (o = w.css(e, 'display')),
      e.parentNode.removeChild(e),
      'none' === o && (o = 'block'),
      (st[n] = o),
      o)
    );
  }
  function lt(t, e) {
    for (var i, n, o = [], r = 0, s = t.length; r < s; r++)
      (n = t[r]).style &&
        ((i = n.style.display),
        e
          ? ('none' === i && ((o[r] = X.get(n, 'display') || null), o[r] || (n.style.display = '')),
            '' === n.style.display && nt(n) && (o[r] = at(n)))
          : 'none' !== i && ((o[r] = 'none'), X.set(n, 'display', i)));
    for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
    return t;
  }
  w.fn.extend({
    show: function () {
      return lt(this, !0);
    },
    hide: function () {
      return lt(this);
    },
    toggle: function (t) {
      return 'boolean' == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            nt(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var ct = /^(?:checkbox|radio)$/i,
    dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ut = /^$|^module$|\/(?:java|ecma)script/i,
    ht = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  function pt(t, e) {
    var i;
    return (
      (i =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || '*')
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || '*')
          : []),
      void 0 === e || (e && E(t, e)) ? w.merge([t], i) : i
    );
  }
  function ft(t, e) {
    for (var i = 0, n = t.length; i < n; i++) X.set(t[i], 'globalEval', !e || X.get(e[i], 'globalEval'));
  }
  (ht.optgroup = ht.option), (ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead), (ht.th = ht.td);
  var gt = /<|&#?\w+;/;
  function mt(t, e, i, n, o) {
    for (var r, s, a, l, c, d, u = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++)
      if ((r = t[p]) || 0 === r)
        if ('object' === _(r)) w.merge(h, r.nodeType ? [r] : r);
        else if (gt.test(r)) {
          for (
            s = s || u.appendChild(e.createElement('div')),
              a = (dt.exec(r) || ['', ''])[1].toLowerCase(),
              s.innerHTML = (l = ht[a] || ht._default)[1] + w.htmlPrefilter(r) + l[2],
              d = l[0];
            d--;

          )
            s = s.lastChild;
          w.merge(h, s.childNodes), ((s = u.firstChild).textContent = '');
        } else h.push(e.createTextNode(r));
    for (u.textContent = '', p = 0; (r = h[p++]); )
      if (n && w.inArray(r, n) > -1) o && o.push(r);
      else if (((c = w.contains(r.ownerDocument, r)), (s = pt(u.appendChild(r), 'script')), c && ft(s), i))
        for (d = 0; (r = s[d++]); ) ut.test(r.type || '') && i.push(r);
    return u;
  }
  !(function () {
    var t = n.createDocumentFragment().appendChild(n.createElement('div')),
      e = n.createElement('input');
    e.setAttribute('type', 'radio'),
      e.setAttribute('checked', 'checked'),
      e.setAttribute('name', 't'),
      t.appendChild(e),
      (f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = '<textarea>x</textarea>'),
      (f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var vt = n.documentElement,
    yt = /^key/,
    _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    wt = /^([^.]*)(?:\.(.+)|)/;
  function bt() {
    return !0;
  }
  function xt() {
    return !1;
  }
  function Ct() {
    try {
      return n.activeElement;
    } catch (t) {}
  }
  function Tt(t, e, i, n, o, r) {
    var s, a;
    if ('object' == typeof e) {
      for (a in ('string' != typeof i && ((n = n || i), (i = void 0)), e)) Tt(t, a, i, n, e[a], r);
      return t;
    }
    if (
      (null == n && null == o
        ? ((o = i), (n = i = void 0))
        : null == o && ('string' == typeof i ? ((o = n), (n = void 0)) : ((o = n), (n = i), (i = void 0))),
      !1 === o)
    )
      o = xt;
    else if (!o) return t;
    return (
      1 === r &&
        ((s = o),
        ((o = function (t) {
          return w().off(t), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = w.guid++))),
      t.each(function () {
        w.event.add(this, e, o, n, i);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (t, e, i, n, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        h,
        p,
        f,
        g,
        m = X.get(t);
      if (m)
        for (
          i.handler && ((i = (r = i).handler), (o = r.selector)),
            o && w.find.matchesSelector(vt, o),
            i.guid || (i.guid = w.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle = function (e) {
                return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0;
              }),
            c = (e = (e || '').match(L) || ['']).length;
          c--;

        )
          (p = g = (a = wt.exec(e[c]) || [])[1]),
            (f = (a[2] || '').split('.').sort()),
            p &&
              ((u = w.event.special[p] || {}),
              (u = w.event.special[(p = (o ? u.delegateType : u.bindType) || p)] || {}),
              (d = w.extend(
                {
                  type: p,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: o,
                  needsContext: o && w.expr.match.needsContext.test(o),
                  namespace: f.join('.'),
                },
                r
              )),
              (h = l[p]) ||
                (((h = l[p] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, n, f, s)) || (t.addEventListener && t.addEventListener(p, s))),
              u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)),
              o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
              (w.event.global[p] = !0));
    },
    remove: function (t, e, i, n, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        h,
        p,
        f,
        g,
        m = X.hasData(t) && X.get(t);
      if (m && (l = m.events)) {
        for (c = (e = (e || '').match(L) || ['']).length; c--; )
          if (((p = g = (a = wt.exec(e[c]) || [])[1]), (f = (a[2] || '').split('.').sort()), p)) {
            for (
              u = w.event.special[p] || {},
                h = l[(p = (n ? u.delegateType : u.bindType) || p)] || [],
                a = a[2] && new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = r = h.length;
              r--;

            )
              (d = h[r]),
                (!o && g !== d.origType) ||
                  (i && i.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (n && n !== d.selector && ('**' !== n || !d.selector)) ||
                  (h.splice(r, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(t, d));
            s &&
              !h.length &&
              ((u.teardown && !1 !== u.teardown.call(t, f, m.handle)) || w.removeEvent(t, p, m.handle), delete l[p]);
          } else for (p in l) w.event.remove(t, p + e[c], i, n, !0);
        w.isEmptyObject(l) && X.remove(t, 'handle events');
      }
    },
    dispatch: function (t) {
      var e,
        i,
        n,
        o,
        r,
        s,
        a = w.event.fix(t),
        l = new Array(arguments.length),
        c = (X.get(this, 'events') || {})[a.type] || [],
        d = w.event.special[a.type] || {};
      for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
      if (((a.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, a))) {
        for (s = w.event.handlers.call(this, a, c), e = 0; (o = s[e++]) && !a.isPropagationStopped(); )
          for (a.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !a.isImmediatePropagationStopped(); )
            (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
              (a.data = r.data),
              void 0 !== (n = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) &&
                !1 === (a.result = n) &&
                (a.preventDefault(), a.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        o,
        r,
        s,
        a = [],
        l = e.delegateCount,
        c = t.target;
      if (l && c.nodeType && !('click' === t.type && t.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ('click' !== t.type || !0 !== c.disabled)) {
            for (r = [], s = {}, i = 0; i < l; i++)
              void 0 === s[(o = (n = e[i]).selector + ' ')] &&
                (s[o] = n.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length),
                s[o] && r.push(n);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
    },
    addProp: function (t, e) {
      Object.defineProperty(w.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: g(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        },
      });
    },
    fix: function (t) {
      return t[w.expando] ? t : new w.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Ct() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          if (this === Ct() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && E(this, 'input')) return this.click(), !1;
        },
        _default: function (t) {
          return E(t.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (w.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }),
    (w.Event = function (t, e) {
      if (!(this instanceof w.Event)) return new w.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? bt : xt),
          (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && w.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: xt,
      isPropagationStopped: xt,
      isImmediatePropagationStopped: xt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = bt), t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = bt), t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = bt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
          var e = t.button;
          return null == t.which && yt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && _t.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function (t, e) {
        w.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              o = t.relatedTarget,
              r = t.handleObj;
            return (
              (o && (o === n || w.contains(n, o))) ||
                ((t.type = r.origType), (i = r.handler.apply(this, arguments)), (t.type = e)),
              i
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (t, e, i, n) {
        return Tt(this, t, e, i, n);
      },
      one: function (t, e, i, n) {
        return Tt(this, t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            w(t.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler),
            this
          );
        if ('object' == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this;
        }
        return (
          (!1 !== e && 'function' != typeof e) || ((i = e), (e = void 0)),
          !1 === i && (i = xt),
          this.each(function () {
            w.event.remove(this, t, i, e);
          })
        );
      },
    });
  var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    kt = /<script|<style|<link/i,
    Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function $t(t, e) {
    return (E(t, 'table') && E(11 !== e.nodeType ? e : e.firstChild, 'tr') && w(t).children('tbody')[0]) || t;
  }
  function It(t) {
    return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
  }
  function Dt(t) {
    return 'true/' === (t.type || '').slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute('type'), t;
  }
  function Ot(t, e) {
    var i, n, o, r, s, a, l, c;
    if (1 === e.nodeType) {
      if (X.hasData(t) && ((r = X.access(t)), (s = X.set(e, r)), (c = r.events)))
        for (o in (delete s.handle, (s.events = {}), c))
          for (i = 0, n = c[o].length; i < n; i++) w.event.add(e, o, c[o][i]);
      V.hasData(t) && ((a = V.access(t)), (l = w.extend({}, a)), V.set(e, l));
    }
  }
  function Pt(t, e) {
    var i = e.nodeName.toLowerCase();
    'input' === i && ct.test(t.type)
      ? (e.checked = t.checked)
      : ('input' !== i && 'textarea' !== i) || (e.defaultValue = t.defaultValue);
  }
  function Nt(t, e, i, n) {
    e = s.apply([], e);
    var o,
      r,
      a,
      l,
      c,
      d,
      u = 0,
      h = t.length,
      p = h - 1,
      m = e[0],
      v = g(m);
    if (v || (h > 1 && 'string' == typeof m && !f.checkClone && Et.test(m)))
      return t.each(function (o) {
        var r = t.eq(o);
        v && (e[0] = m.call(this, o, r.html())), Nt(r, e, i, n);
      });
    if (
      h &&
      ((r = (o = mt(e, t[0].ownerDocument, !1, t, n)).firstChild), 1 === o.childNodes.length && (o = r), r || n)
    ) {
      for (l = (a = w.map(pt(o, 'script'), It)).length; u < h; u++)
        (c = o), u !== p && ((c = w.clone(c, !0, !0)), l && w.merge(a, pt(c, 'script'))), i.call(t[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, w.map(a, Dt), u = 0; u < l; u++)
          ut.test((c = a[u]).type || '') &&
            !X.access(c, 'globalEval') &&
            w.contains(d, c) &&
            (c.src && 'module' !== (c.type || '').toLowerCase()
              ? w._evalUrl && w._evalUrl(c.src)
              : y(c.textContent.replace(At, ''), d, c));
    }
    return t;
  }
  function Lt(t, e, i) {
    for (var n, o = e ? w.filter(e, t) : t, r = 0; null != (n = o[r]); r++)
      i || 1 !== n.nodeType || w.cleanData(pt(n)),
        n.parentNode && (i && w.contains(n.ownerDocument, n) && ft(pt(n, 'script')), n.parentNode.removeChild(n));
    return t;
  }
  w.extend({
    htmlPrefilter: function (t) {
      return t.replace(St, '<$1></$2>');
    },
    clone: function (t, e, i) {
      var n,
        o,
        r,
        s,
        a = t.cloneNode(!0),
        l = w.contains(t.ownerDocument, t);
      if (!(f.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || w.isXMLDoc(t)))
        for (s = pt(a), n = 0, o = (r = pt(t)).length; n < o; n++) Pt(r[n], s[n]);
      if (e)
        if (i) for (r = r || pt(t), s = s || pt(a), n = 0, o = r.length; n < o; n++) Ot(r[n], s[n]);
        else Ot(t, a);
      return (s = pt(a, 'script')).length > 0 && ft(s, !l && pt(t, 'script')), a;
    },
    cleanData: function (t) {
      for (var e, i, n, o = w.event.special, r = 0; void 0 !== (i = t[r]); r++)
        if (Y(i)) {
          if ((e = i[X.expando])) {
            if (e.events) for (n in e.events) o[n] ? w.event.remove(i, n) : w.removeEvent(i, n, e.handle);
            i[X.expando] = void 0;
          }
          i[V.expando] && (i[V.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (t) {
        return Lt(this, t, !0);
      },
      remove: function (t) {
        return Lt(this, t);
      },
      text: function (t) {
        return F(
          this,
          function (t) {
            return void 0 === t
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return Nt(this, arguments, function (t) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || $t(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return Nt(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = $t(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return Nt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return Nt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (w.cleanData(pt(t, !1)), (t.textContent = ''));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return w.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return F(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if ('string' == typeof t && !kt.test(t) && !ht[(dt.exec(t) || ['', ''])[1].toLowerCase()]) {
              t = w.htmlPrefilter(t);
              try {
                for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (w.cleanData(pt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return Nt(
          this,
          arguments,
          function (e) {
            var i = this.parentNode;
            w.inArray(this, t) < 0 && (w.cleanData(pt(this)), i && i.replaceChild(e, this));
          },
          t
        );
      },
    }),
    w.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (t, e) {
        w.fn[t] = function (t) {
          for (var i, n = [], o = w(t), r = o.length - 1, s = 0; s <= r; s++)
            (i = s === r ? this : this.clone(!0)), w(o[s])[e](i), a.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var jt = new RegExp('^(' + tt + ')(?!px)[a-z%]+$', 'i'),
    Ht = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(e);
    },
    Mt = new RegExp(it.join('|'), 'i');
  function zt(t, e, i) {
    var n,
      o,
      r,
      s,
      a = t.style;
    return (
      (i = i || Ht(t)) &&
        ('' !== (s = i.getPropertyValue(e) || i[e]) || w.contains(t.ownerDocument, t) || (s = w.style(t, e)),
        !f.pixelBoxStyles() &&
          jt.test(s) &&
          Mt.test(e) &&
          ((n = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = i.width),
          (a.width = n),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + '' : s
    );
  }
  function qt(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (d) {
        (c.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (d.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          vt.appendChild(c).appendChild(d);
        var e = t.getComputedStyle(d);
        (o = '1%' !== e.top),
          (l = 12 === i(e.marginLeft)),
          (d.style.right = '60%'),
          (a = 36 === i(e.right)),
          (r = 36 === i(e.width)),
          (d.style.position = 'absolute'),
          (s = 36 === d.offsetWidth || 'absolute'),
          vt.removeChild(c),
          (d = null);
      }
    }
    function i(t) {
      return Math.round(parseFloat(t));
    }
    var o,
      r,
      s,
      a,
      l,
      c = n.createElement('div'),
      d = n.createElement('div');
    d.style &&
      ((d.style.backgroundClip = 'content-box'),
      (d.cloneNode(!0).style.backgroundClip = ''),
      (f.clearCloneStyle = 'content-box' === d.style.backgroundClip),
      w.extend(f, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), a;
        },
        pixelPosition: function () {
          return e(), o;
        },
        reliableMarginLeft: function () {
          return e(), l;
        },
        scrollboxSize: function () {
          return e(), s;
        },
      }));
  })();
  var Wt = /^(none|table(?!-c[ea]).+)/,
    Ft = /^--/,
    Rt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Bt = { letterSpacing: '0', fontWeight: '400' },
    Ut = ['Webkit', 'Moz', 'ms'],
    Qt = n.createElement('div').style;
  function Yt(t) {
    var e = w.cssProps[t];
    return (
      e ||
        (e = w.cssProps[t] =
          (function (t) {
            if (t in Qt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--; ) if ((t = Ut[i] + e) in Qt) return t;
          })(t) || t),
      e
    );
  }
  function Kt(t, e, i) {
    var n = et.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || 'px') : e;
  }
  function Xt(t, e, i, n, o, r) {
    var s = 'width' === e ? 1 : 0,
      a = 0,
      l = 0;
    if (i === (n ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === i && (l += w.css(t, i + it[s], !0, o)),
        n
          ? ('content' === i && (l -= w.css(t, 'padding' + it[s], !0, o)),
            'margin' !== i && (l -= w.css(t, 'border' + it[s] + 'Width', !0, o)))
          : ((l += w.css(t, 'padding' + it[s], !0, o)),
            'padding' !== i
              ? (l += w.css(t, 'border' + it[s] + 'Width', !0, o))
              : (a += w.css(t, 'border' + it[s] + 'Width', !0, o)));
    return (
      !n && r >= 0 && (l += Math.max(0, Math.ceil(t['offset' + e[0].toUpperCase() + e.slice(1)] - r - l - a - 0.5))), l
    );
  }
  function Vt(t, e, i) {
    var n = Ht(t),
      o = zt(t, e, n),
      r = 'border-box' === w.css(t, 'boxSizing', !1, n),
      s = r;
    if (jt.test(o)) {
      if (!i) return o;
      o = 'auto';
    }
    return (
      (s = s && (f.boxSizingReliable() || o === t.style[e])),
      ('auto' === o || (!parseFloat(o) && 'inline' === w.css(t, 'display', !1, n))) &&
        ((o = t['offset' + e[0].toUpperCase() + e.slice(1)]), (s = !0)),
      (o = parseFloat(o) || 0) + Xt(t, e, i || (r ? 'border' : 'content'), s, n, o) + 'px'
    );
  }
  function Zt(t, e, i, n, o) {
    return new Zt.prototype.init(t, e, i, n, o);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = zt(t, 'opacity');
            return '' === i ? '1' : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          r,
          s,
          a = Q(e),
          l = Ft.test(e),
          c = t.style;
        if ((l || (e = Yt(a)), (s = w.cssHooks[e] || w.cssHooks[a]), void 0 === i))
          return s && 'get' in s && void 0 !== (o = s.get(t, !1, n)) ? o : c[e];
        'string' == (r = typeof i) && (o = et.exec(i)) && o[1] && ((i = rt(t, e, o)), (r = 'number')),
          null != i &&
            i == i &&
            ('number' === r && (i += (o && o[3]) || (w.cssNumber[a] ? '' : 'px')),
            f.clearCloneStyle || '' !== i || 0 !== e.indexOf('background') || (c[e] = 'inherit'),
            (s && 'set' in s && void 0 === (i = s.set(t, i, n))) || (l ? c.setProperty(e, i) : (c[e] = i)));
      }
    },
    css: function (t, e, i, n) {
      var o,
        r,
        s,
        a = Q(e);
      return (
        Ft.test(e) || (e = Yt(a)),
        (s = w.cssHooks[e] || w.cssHooks[a]) && 'get' in s && (o = s.get(t, !0, i)),
        void 0 === o && (o = zt(t, e, n)),
        'normal' === o && e in Bt && (o = Bt[e]),
        '' === i || i ? ((r = parseFloat(o)), !0 === i || isFinite(r) ? r || 0 : o) : o
      );
    },
  }),
    w.each(['height', 'width'], function (t, e) {
      w.cssHooks[e] = {
        get: function (t, i, n) {
          if (i)
            return !Wt.test(w.css(t, 'display')) || (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Vt(t, e, n)
              : ot(t, Rt, function () {
                  return Vt(t, e, n);
                });
        },
        set: function (t, i, n) {
          var o,
            r = Ht(t),
            s = 'border-box' === w.css(t, 'boxSizing', !1, r),
            a = n && Xt(t, e, n, s, r);
          return (
            s &&
              f.scrollboxSize() === r.position &&
              (a -= Math.ceil(
                t['offset' + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Xt(t, e, 'border', !1, r) - 0.5
              )),
            a && (o = et.exec(i)) && 'px' !== (o[3] || 'px') && ((t.style[e] = i), (i = w.css(t, e))),
            Kt(0, i, a)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = qt(f.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(zt(t, 'marginLeft')) ||
            t.getBoundingClientRect().left -
              ot(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    w.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
      (w.cssHooks[t + e] = {
        expand: function (i) {
          for (var n = 0, o = {}, r = 'string' == typeof i ? i.split(' ') : [i]; n < 4; n++)
            o[t + it[n] + e] = r[n] || r[n - 2] || r[0];
          return o;
        },
      }),
        'margin' !== t && (w.cssHooks[t + e].set = Kt);
    }),
    w.fn.extend({
      css: function (t, e) {
        return F(
          this,
          function (t, e, i) {
            var n,
              o,
              r = {},
              s = 0;
            if (Array.isArray(e)) {
              for (n = Ht(t), o = e.length; s < o; s++) r[e[s]] = w.css(t, e[s], !1, n);
              return r;
            }
            return void 0 !== i ? w.style(t, e, i) : w.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
    }),
    (w.Tween = Zt),
    ((Zt.prototype = {
      constructor: Zt,
      init: function (t, e, i, n, o, r) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = o || w.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = r || (w.cssNumber[i] ? '' : 'px'));
      },
      cur: function () {
        var t = Zt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Zt.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = Zt.propHooks[this.prop];
        return (
          (this.pos = e = this.options.duration
            ? w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)
            : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : Zt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Zt.prototype),
    ((Zt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = w.css(t.elem, t.prop, '')) && 'auto' !== e
            ? e
            : 0;
        },
        set: function (t) {
          w.fx.step[t.prop]
            ? w.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType || (null == t.elem.style[w.cssProps[t.prop]] && !w.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : w.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }).scrollTop = Zt.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      },
    }),
    (w.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (w.fx = Zt.prototype.init),
    (w.fx.step = {});
  var Gt,
    Jt,
    te = /^(?:toggle|show|hide)$/,
    ee = /queueHooks$/;
  function ie() {
    Jt &&
      (!1 === n.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ie) : t.setTimeout(ie, w.fx.interval),
      w.fx.tick());
  }
  function ne() {
    return (
      t.setTimeout(function () {
        Gt = void 0;
      }),
      (Gt = Date.now())
    );
  }
  function oe(t, e) {
    var i,
      n = 0,
      o = { height: t };
    for (e = e ? 1 : 0; n < 4; n += 2 - e) o['margin' + (i = it[n])] = o['padding' + i] = t;
    return e && (o.opacity = o.width = t), o;
  }
  function re(t, e, i) {
    for (var n, o = (se.tweeners[e] || []).concat(se.tweeners['*']), r = 0, s = o.length; r < s; r++)
      if ((n = o[r].call(i, e, t))) return n;
  }
  function se(t, e, i) {
    var n,
      o,
      r = 0,
      s = se.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var e = Gt || ne(),
            i = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (i / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(n);
        return (
          a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        );
      },
      c = a.promise({
        elem: t,
        props: w.extend({}, e),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Gt || ne(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = w.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; i < n; i++) c.tweens[i].run(1);
          return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
        },
      }),
      d = c.props;
    for (
      (function (t, e) {
        var i, n, o, r, s;
        for (i in t)
          if (
            ((o = e[(n = Q(i))]),
            (r = t[i]),
            Array.isArray(r) && ((o = r[1]), (r = t[i] = r[0])),
            i !== n && ((t[n] = r), delete t[i]),
            (s = w.cssHooks[n]) && ('expand' in s))
          )
            for (i in ((r = s.expand(r)), delete t[n], r)) (i in t) || ((t[i] = r[i]), (e[i] = o));
          else e[n] = o;
      })(d, c.opts.specialEasing);
      r < s;
      r++
    )
      if ((n = se.prefilters[r].call(c, t, d, c.opts)))
        return g(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
    return (
      w.map(d, re, c),
      g(c.opts.start) && c.opts.start.call(t, c),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(se, {
    tweeners: {
      '*': [
        function (t, e) {
          var i = this.createTween(t, e);
          return rt(i.elem, t, et.exec(e), i), i;
        },
      ],
    },
    tweener: function (t, e) {
      g(t) ? ((e = t), (t = ['*'])) : (t = t.match(L));
      for (var i, n = 0, o = t.length; n < o; n++) (se.tweeners[(i = t[n])] = se.tweeners[i] || []).unshift(e);
    },
    prefilters: [
      function (t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          l,
          c,
          d,
          u = 'width' in e || 'height' in e,
          h = this,
          p = {},
          f = t.style,
          g = t.nodeType && nt(t),
          m = X.get(t, 'fxshow');
        for (n in (i.queue ||
          (null == (s = w._queueHooks(t, 'fx')).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          h.always(function () {
            h.always(function () {
              s.unqueued--, w.queue(t, 'fx').length || s.empty.fire();
            });
          })),
        e))
          if (te.test((o = e[n]))) {
            if ((delete e[n], (r = r || 'toggle' === o), o === (g ? 'hide' : 'show'))) {
              if ('show' !== o || !m || void 0 === m[n]) continue;
              g = !0;
            }
            p[n] = (m && m[n]) || w.style(t, n);
          }
        if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(p))
          for (n in (u &&
            1 === t.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (c = m && m.display) && (c = X.get(t, 'display')),
            'none' === (d = w.css(t, 'display')) &&
              (c ? (d = c) : (lt([t], !0), (c = t.style.display || c), (d = w.css(t, 'display')), lt([t]))),
            ('inline' === d || ('inline-block' === d && null != c)) &&
              'none' === w.css(t, 'float') &&
              (l ||
                (h.done(function () {
                  f.display = c;
                }),
                null == c && (c = 'none' === (d = f.display) ? '' : d)),
              (f.display = 'inline-block'))),
          i.overflow &&
            ((f.overflow = 'hidden'),
            h.always(function () {
              (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (m ? 'hidden' in m && (g = m.hidden) : (m = X.access(t, 'fxshow', { display: c })),
              r && (m.hidden = !g),
              g && lt([t], !0),
              h.done(function () {
                for (n in (g || lt([t]), X.remove(t, 'fxshow'), p)) w.style(t, n, p[n]);
              })),
              (l = re(g ? m[n] : 0, n, h)),
              n in m || ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? se.prefilters.unshift(t) : se.prefilters.push(t);
    },
  })),
    (w.speed = function (t, e, i) {
      var n =
        t && 'object' == typeof t
          ? w.extend({}, t)
          : { complete: i || (!i && e) || (g(t) && t), duration: t, easing: (i && e) || (e && !g(e) && e) };
      return (
        w.fx.off
          ? (n.duration = 0)
          : 'number' != typeof n.duration &&
            (n.duration = n.duration in w.fx.speeds ? w.fx.speeds[n.duration] : w.fx.speeds._default),
        (null != n.queue && !0 !== n.queue) || (n.queue = 'fx'),
        (n.old = n.complete),
        (n.complete = function () {
          g(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue);
        }),
        n
      );
    }),
    w.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(nt).css('opacity', 0).show().end().animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var o = w.isEmptyObject(t),
          r = w.speed(e, i, n),
          s = function () {
            var e = se(this, w.extend({}, t), r);
            (o || X.get(this, 'finish')) && e.stop(!0);
          };
        return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          'string' != typeof t && ((i = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || 'fx', []),
          this.each(function () {
            var e = !0,
              o = null != t && t + 'queueHooks',
              r = w.timers,
              s = X.get(this);
            if (o) s[o] && s[o].stop && n(s[o]);
            else for (o in s) s[o] && s[o].stop && ee.test(o) && n(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this || (null != t && r[o].queue !== t) || (r[o].anim.stop(i), (e = !1), r.splice(o, 1));
            (!e && i) || w.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || 'fx'),
          this.each(function () {
            var e,
              i = X.get(this),
              n = i[t + 'queue'],
              o = i[t + 'queueHooks'],
              r = w.timers,
              s = n ? n.length : 0;
            for (i.finish = !0, w.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--; )
              r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    w.each(['toggle', 'show', 'hide'], function (t, e) {
      var i = w.fn[e];
      w.fn[e] = function (t, n, o) {
        return null == t || 'boolean' == typeof t ? i.apply(this, arguments) : this.animate(oe(e, !0), t, n, o);
      };
    }),
    w.each(
      {
        slideDown: oe('show'),
        slideUp: oe('hide'),
        slideToggle: oe('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (t, e) {
        w.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var t,
        e = 0,
        i = w.timers;
      for (Gt = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      i.length || w.fx.stop(), (Gt = void 0);
    }),
    (w.fx.timer = function (t) {
      w.timers.push(t), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      Jt || ((Jt = !0), ie());
    }),
    (w.fx.stop = function () {
      Jt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (e, i) {
      return (
        (e = (w.fx && w.fx.speeds[e]) || e),
        this.queue((i = i || 'fx'), function (i, n) {
          var o = t.setTimeout(i, e);
          n.stop = function () {
            t.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var t = n.createElement('input'),
        e = n.createElement('select').appendChild(n.createElement('option'));
      (t.type = 'checkbox'),
        (f.checkOn = '' !== t.value),
        (f.optSelected = e.selected),
        ((t = n.createElement('input')).value = 't'),
        (t.type = 'radio'),
        (f.radioValue = 't' === t.value);
    })();
  var ae,
    le = w.expr.attrHandle;
  w.fn.extend({
    attr: function (t, e) {
      return F(this, w.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        w.removeAttr(this, t);
      });
    },
  }),
    w.extend({
      attr: function (t, e, i) {
        var n,
          o,
          r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === t.getAttribute
            ? w.prop(t, e, i)
            : ((1 === r && w.isXMLDoc(t)) ||
                (o = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ae : void 0)),
              void 0 !== i
                ? null === i
                  ? void w.removeAttr(t, e)
                  : o && 'set' in o && void 0 !== (n = o.set(t, i, e))
                  ? n
                  : (t.setAttribute(e, i + ''), i)
                : o && 'get' in o && null !== (n = o.get(t, e))
                ? n
                : null == (n = w.find.attr(t, e))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!f.radioValue && 'radio' === e && E(t, 'input')) {
              var i = t.value;
              return t.setAttribute('type', e), i && (t.value = i), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var i,
          n = 0,
          o = e && e.match(L);
        if (o && 1 === t.nodeType) for (; (i = o[n++]); ) t.removeAttribute(i);
      },
    }),
    (ae = {
      set: function (t, e, i) {
        return !1 === e ? w.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = le[e] || w.find.attr;
      le[e] = function (t, e, n) {
        var o,
          r,
          s = e.toLowerCase();
        return n || ((r = le[s]), (le[s] = o), (o = null != i(t, e, n) ? s : null), (le[s] = r)), o;
      };
    });
  var ce = /^(?:input|select|textarea|button)$/i,
    de = /^(?:a|area)$/i;
  function ue(t) {
    return (t.match(L) || []).join(' ');
  }
  function he(t) {
    return (t.getAttribute && t.getAttribute('class')) || '';
  }
  function pe(t) {
    return Array.isArray(t) ? t : ('string' == typeof t && t.match(L)) || [];
  }
  w.fn.extend({
    prop: function (t, e) {
      return F(this, w.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[w.propFix[t] || t];
      });
    },
  }),
    w.extend({
      prop: function (t, e, i) {
        var n,
          o,
          r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && w.isXMLDoc(t)) || (o = w.propHooks[(e = w.propFix[e] || e)]),
            void 0 !== i
              ? o && 'set' in o && void 0 !== (n = o.set(t, i, e))
                ? n
                : (t[e] = i)
              : o && 'get' in o && null !== (n = o.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = w.find.attr(t, 'tabindex');
            return e ? parseInt(e, 10) : ce.test(t.nodeName) || (de.test(t.nodeName) && t.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    f.optSelected ||
      (w.propHooks.selected = {
        get: function (t) {
          return null;
        },
        set: function (t) {},
      }),
    w.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (t) {
        var e,
          i,
          n,
          o,
          r,
          s,
          a,
          l = 0;
        if (g(t))
          return this.each(function (e) {
            w(this).addClass(t.call(this, e, he(this)));
          });
        if ((e = pe(t)).length)
          for (; (i = this[l++]); )
            if (((o = he(i)), (n = 1 === i.nodeType && ' ' + ue(o) + ' '))) {
              for (s = 0; (r = e[s++]); ) n.indexOf(' ' + r + ' ') < 0 && (n += r + ' ');
              o !== (a = ue(n)) && i.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          n,
          o,
          r,
          s,
          a,
          l = 0;
        if (g(t))
          return this.each(function (e) {
            w(this).removeClass(t.call(this, e, he(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = pe(t)).length)
          for (; (i = this[l++]); )
            if (((o = he(i)), (n = 1 === i.nodeType && ' ' + ue(o) + ' '))) {
              for (s = 0; (r = e[s++]); ) for (; n.indexOf(' ' + r + ' ') > -1; ) n = n.replace(' ' + r + ' ', ' ');
              o !== (a = ue(n)) && i.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var i = typeof t,
          n = 'string' === i || Array.isArray(t);
        return 'boolean' == typeof e && n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : g(t)
          ? this.each(function (i) {
              w(this).toggleClass(t.call(this, i, he(this), e), e);
            })
          : this.each(function () {
              var e, o, r, s;
              if (n)
                for (o = 0, r = w(this), s = pe(t); (e = s[o++]); ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
              else
                (void 0 !== t && 'boolean' !== i) ||
                  ((e = he(this)) && X.set(this, '__className__', e),
                  this.setAttribute &&
                    this.setAttribute('class', e || !1 === t ? '' : X.get(this, '__className__') || ''));
            });
      },
      hasClass: function (t) {
        var e,
          i,
          n = 0;
        for (e = ' ' + t + ' '; (i = this[n++]); )
          if (1 === i.nodeType && (' ' + ue(he(i)) + ' ').indexOf(e) > -1) return !0;
        return !1;
      },
    });
  var fe = /\r/g;
  w.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        o = this[0];
      return arguments.length
        ? ((n = g(t)),
          this.each(function (i) {
            var o;
            1 === this.nodeType &&
              (null == (o = n ? t.call(this, i, w(this).val()) : t)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = w.map(o, function (t) {
                    return null == t ? '' : t + '';
                  })),
              ((e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in e &&
                void 0 !== e.set(this, o, 'value')) ||
                (this.value = o));
          }))
        : o
        ? (e = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
          'get' in e &&
          void 0 !== (i = e.get(o, 'value'))
          ? i
          : 'string' == typeof (i = o.value)
          ? i.replace(fe, '')
          : null == i
          ? ''
          : i
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = w.find.attr(t, 'value');
            return null != e ? e : ue(w.text(t));
          },
        },
        select: {
          get: function (t) {
            var e,
              i,
              n,
              o = t.options,
              r = t.selectedIndex,
              s = 'select-one' === t.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (n = r < 0 ? l : s ? r : 0; n < l; n++)
              if (
                ((i = o[n]).selected || n === r) &&
                !i.disabled &&
                (!i.parentNode.disabled || !E(i.parentNode, 'optgroup'))
              ) {
                if (((e = w(i).val()), s)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (var i, n, o = t.options, r = w.makeArray(e), s = o.length; s--; )
              ((n = o[s]).selected = w.inArray(w.valHooks.option.get(n), r) > -1) && (i = !0);
            return i || (t.selectedIndex = -1), r;
          },
        },
      },
    }),
    w.each(['radio', 'checkbox'], function () {
      (w.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e)) return (t.checked = w.inArray(w(t).val(), e) > -1);
        },
      }),
        f.checkOn ||
          (w.valHooks[this].get = function (t) {
            return null === t.getAttribute('value') ? 'on' : t.value;
          });
    }),
    (f.focusin = 'onfocusin' in t);
  var ge = /^(?:focusinfocus|focusoutblur)$/,
    me = function (t) {
      t.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (e, i, o, r) {
      var s,
        a,
        l,
        c,
        d,
        h,
        p,
        f,
        v = [o || n],
        y = u.call(e, 'type') ? e.type : e,
        _ = u.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((a = f = l = o = o || n),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !ge.test(y + w.event.triggered) &&
          (y.indexOf('.') > -1 && ((y = (_ = y.split('.')).shift()), _.sort()),
          (d = y.indexOf(':') < 0 && 'on' + y),
          ((e = e[w.expando] ? e : new w.Event(y, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = _.join('.')),
          (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + _.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (e.result = void 0),
          e.target || (e.target = o),
          (i = null == i ? [e] : w.makeArray(i, [e])),
          (p = w.event.special[y] || {}),
          r || !p.trigger || !1 !== p.trigger.apply(o, i)))
      ) {
        if (!r && !p.noBubble && !m(o)) {
          for (ge.test((c = p.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (l = a);
          l === (o.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || t);
        }
        for (s = 0; (a = v[s++]) && !e.isPropagationStopped(); )
          (f = a),
            (e.type = s > 1 ? c : p.bindType || y),
            (h = (X.get(a, 'events') || {})[e.type] && X.get(a, 'handle')) && h.apply(a, i),
            (h = d && a[d]) && h.apply && Y(a) && ((e.result = h.apply(a, i)), !1 === e.result && e.preventDefault());
        return (
          (e.type = y),
          r ||
            e.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(v.pop(), i)) ||
            !Y(o) ||
            (d &&
              g(o[y]) &&
              !m(o) &&
              ((l = o[d]) && (o[d] = null),
              (w.event.triggered = y),
              e.isPropagationStopped() && f.addEventListener(y, me),
              o[y](),
              e.isPropagationStopped() && f.removeEventListener(y, me),
              (w.event.triggered = void 0),
              l && (o[d] = l))),
          e.result
        );
      }
    },
    simulate: function (t, e, i) {
      var n = w.extend(new w.Event(), i, { type: t, isSimulated: !0 });
      w.event.trigger(n, null, e);
    },
  }),
    w.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          w.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        if (i) return w.event.trigger(t, e, i, !0);
      },
    }),
    f.focusin ||
      w.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
        var i = function (t) {
          w.event.simulate(e, t.target, w.event.fix(t));
        };
        w.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              o = X.access(n, e);
            o || n.addEventListener(t, i, !0), X.access(n, e, (o || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              o = X.access(n, e) - 1;
            o ? X.access(n, e, o) : (n.removeEventListener(t, i, !0), X.remove(n, e));
          },
        };
      });
  var ve = t.location,
    ye = Date.now(),
    _e = /\?/;
  w.parseXML = function (e) {
    var i;
    if (!e || 'string' != typeof e) return null;
    try {
      i = new t.DOMParser().parseFromString(e, 'text/xml');
    } catch (t) {
      i = void 0;
    }
    return (i && !i.getElementsByTagName('parsererror').length) || w.error('Invalid XML: ' + e), i;
  };
  var we = /\[\]$/,
    be = /\r?\n/g,
    xe = /^(?:submit|button|image|reset|file)$/i,
    Ce = /^(?:input|select|textarea|keygen)/i;
  function Te(t, e, i, n) {
    var o;
    if (Array.isArray(e))
      w.each(e, function (e, o) {
        i || we.test(t) ? n(t, o) : Te(t + '[' + ('object' == typeof o && null != o ? e : '') + ']', o, i, n);
      });
    else if (i || 'object' !== _(e)) n(t, e);
    else for (o in e) Te(t + '[' + o + ']', e[o], i, n);
  }
  (w.param = function (t, e) {
    var i,
      n = [],
      o = function (t, e) {
        var i = g(e) ? e() : e;
        n[n.length] = encodeURIComponent(t) + '=' + encodeURIComponent(null == i ? '' : i);
      };
    if (Array.isArray(t) || (t.jquery && !w.isPlainObject(t)))
      w.each(t, function () {
        o(this.name, this.value);
      });
    else for (i in t) Te(i, t[i], e, o);
    return n.join('&');
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = w.prop(this, 'elements');
          return t ? w.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !w(this).is(':disabled') &&
              Ce.test(this.nodeName) &&
              !xe.test(t) &&
              (this.checked || !ct.test(t))
            );
          })
          .map(function (t, e) {
            var i = w(this).val();
            return null == i
              ? null
              : Array.isArray(i)
              ? w.map(i, function (t) {
                  return { name: e.name, value: t.replace(be, '\r\n') };
                })
              : { name: e.name, value: i.replace(be, '\r\n') };
          })
          .get();
      },
    });
  var Se = /%20/g,
    ke = /#.*$/,
    Ee = /([?&])_=[^&]*/,
    Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    $e = /^(?:GET|HEAD)$/,
    Ie = /^\/\//,
    De = {},
    Oe = {},
    Pe = '*/'.concat('*'),
    Ne = n.createElement('a');
  function Le(t) {
    return function (e, i) {
      'string' != typeof e && ((i = e), (e = '*'));
      var n,
        o = 0,
        r = e.toLowerCase().match(L) || [];
      if (g(i))
        for (; (n = r[o++]); )
          '+' === n[0] ? ((n = n.slice(1) || '*'), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
    };
  }
  function je(t, e, i, n) {
    var o = {},
      r = t === Oe;
    function s(a) {
      var l;
      return (
        (o[a] = !0),
        w.each(t[a] || [], function (t, a) {
          var c = a(e, i, n);
          return 'string' != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (e.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(e.dataTypes[0]) || (!o['*'] && s('*'));
  }
  function He(t, e) {
    var i,
      n,
      o = w.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
    return n && w.extend(!0, t, n), t;
  }
  (Ne.href = ve.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ve.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Pe,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': w.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? He(He(t, w.ajaxSettings), e) : He(w.ajaxSettings, t);
      },
      ajaxPrefilter: Le(De),
      ajaxTransport: Le(Oe),
      ajax: function (e, i) {
        'object' == typeof e && ((i = e), (e = void 0));
        var o,
          r,
          s,
          a,
          l,
          c,
          d,
          u,
          h,
          p,
          f = w.ajaxSetup({}, (i = i || {})),
          g = f.context || f,
          m = f.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          y = w.Callbacks('once memory'),
          _ = f.statusCode || {},
          b = {},
          x = {},
          C = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (d) {
                if (!a) for (a = {}; (e = Ae.exec(s)); ) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return d ? s : null;
            },
            setRequestHeader: function (t, e) {
              return null == d && ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t), (b[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return null == d && (f.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (d) T.always(t[T.status]);
                else for (e in t) _[e] = [_[e], t[e]];
              return this;
            },
            abort: function (t) {
              var e = t || C;
              return o && o.abort(e), S(0, e), this;
            },
          };
        if (
          (v.promise(T),
          (f.url = ((e || f.url || ve.href) + '').replace(Ie, ve.protocol + '//')),
          (f.type = i.method || i.type || f.method || f.type),
          (f.dataTypes = (f.dataType || '*').toLowerCase().match(L) || ['']),
          null == f.crossDomain)
        ) {
          c = n.createElement('a');
          try {
            (c.href = f.url),
              (c.href = c.href),
              (f.crossDomain = Ne.protocol + '//' + Ne.host != c.protocol + '//' + c.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data && f.processData && 'string' != typeof f.data && (f.data = w.param(f.data, f.traditional)),
          je(De, f, i, T),
          d)
        )
          return T;
        for (h in ((u = w.event && f.global) && 0 == w.active++ && w.event.trigger('ajaxStart'),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !$e.test(f.type)),
        (r = f.url.replace(ke, '')),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 === (f.contentType || '').indexOf('application/x-www-form-urlencoded') &&
            (f.data = f.data.replace(Se, '+'))
          : ((p = f.url.slice(r.length)),
            f.data &&
              (f.processData || 'string' == typeof f.data) &&
              ((r += (_e.test(r) ? '&' : '?') + f.data), delete f.data),
            !1 === f.cache && ((r = r.replace(Ee, '$1')), (p = (_e.test(r) ? '&' : '?') + '_=' + ye++ + p)),
            (f.url = r + p)),
        f.ifModified &&
          (w.lastModified[r] && T.setRequestHeader('If-Modified-Since', w.lastModified[r]),
          w.etag[r] && T.setRequestHeader('If-None-Match', w.etag[r])),
        ((f.data && f.hasContent && !1 !== f.contentType) || i.contentType) &&
          T.setRequestHeader('Content-Type', f.contentType),
        T.setRequestHeader(
          'Accept',
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] + ('*' !== f.dataTypes[0] ? ', ' + Pe + '; q=0.01' : '')
            : f.accepts['*']
        ),
        f.headers))
          T.setRequestHeader(h, f.headers[h]);
        if (f.beforeSend && (!1 === f.beforeSend.call(g, T, f) || d)) return T.abort();
        if (((C = 'abort'), y.add(f.complete), T.done(f.success), T.fail(f.error), (o = je(Oe, f, i, T)))) {
          if (((T.readyState = 1), u && m.trigger('ajaxSend', [T, f]), d)) return T;
          f.async &&
            f.timeout > 0 &&
            (l = t.setTimeout(function () {
              T.abort('timeout');
            }, f.timeout));
          try {
            (d = !1), o.send(b, S);
          } catch (t) {
            if (d) throw t;
            S(-1, t);
          }
        } else S(-1, 'No Transport');
        function S(e, i, n, a) {
          var c,
            h,
            p,
            b,
            x,
            C = i;
          d ||
            ((d = !0),
            l && t.clearTimeout(l),
            (o = void 0),
            (s = a || ''),
            (T.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && e < 300) || 304 === e),
            n &&
              (b = (function (t, e, i) {
                for (var n, o, r, s, a = t.contents, l = t.dataTypes; '*' === l[0]; )
                  l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader('Content-Type'));
                if (n)
                  for (o in a)
                    if (a[o] && a[o].test(n)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in i) r = l[0];
                else {
                  for (o in i) {
                    if (!l[0] || t.converters[o + ' ' + l[0]]) {
                      r = o;
                      break;
                    }
                    s || (s = o);
                  }
                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), i[r];
              })(f, T, n)),
            (b = (function (t, e, i, n) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                d = t.dataTypes.slice();
              if (d[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
              for (r = d.shift(); r; )
                if (
                  (t.responseFields[r] && (i[t.responseFields[r]] = e),
                  !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = r),
                  (r = d.shift()))
                )
                  if ('*' === r) r = l;
                  else if ('*' !== l && l !== r) {
                    if (!(s = c[l + ' ' + r] || c['* ' + r]))
                      for (o in c)
                        if ((a = o.split(' '))[1] === r && (s = c[l + ' ' + a[0]] || c['* ' + a[0]])) {
                          !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && t.throws) e = s(e);
                      else
                        try {
                          e = s(e);
                        } catch (t) {
                          return { state: 'parsererror', error: s ? t : 'No conversion from ' + l + ' to ' + r };
                        }
                  }
              return { state: 'success', data: e };
            })(f, b, T, c)),
            c
              ? (f.ifModified &&
                  ((x = T.getResponseHeader('Last-Modified')) && (w.lastModified[r] = x),
                  (x = T.getResponseHeader('etag')) && (w.etag[r] = x)),
                204 === e || 'HEAD' === f.type
                  ? (C = 'nocontent')
                  : 304 === e
                  ? (C = 'notmodified')
                  : ((C = b.state), (h = b.data), (c = !(p = b.error))))
              : ((p = C), (!e && C) || ((C = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (i || C) + ''),
            c ? v.resolveWith(g, [h, C, T]) : v.rejectWith(g, [T, C, p]),
            T.statusCode(_),
            (_ = void 0),
            u && m.trigger(c ? 'ajaxSuccess' : 'ajaxError', [T, f, c ? h : p]),
            y.fireWith(g, [T, C]),
            u && (m.trigger('ajaxComplete', [T, f]), --w.active || w.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (t, e, i) {
        return w.get(t, e, i, 'json');
      },
      getScript: function (t, e) {
        return w.get(t, void 0, e, 'script');
      },
    }),
    w.each(['get', 'post'], function (t, e) {
      w[e] = function (t, i, n, o) {
        return (
          g(i) && ((o = o || n), (n = i), (i = void 0)),
          w.ajax(w.extend({ url: t, type: e, dataType: o, data: i, success: n }, w.isPlainObject(t) && t))
        );
      };
    }),
    (w._evalUrl = function (t) {
      return w.ajax({ url: t, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
    }),
    w.fn.extend({
      wrapAll: function (t) {
        var e;
        return (
          this[0] &&
            (g(t) && (t = t.call(this[0])),
            (e = w(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (t) {
        return g(t)
          ? this.each(function (e) {
              w(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = w(this),
                i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = g(t);
        return this.each(function (i) {
          w(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not('body')
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (t) {
      return !w.expr.pseudos.visible(t);
    }),
    (w.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var Me = { 0: 200, 1223: 204 },
    ze = w.ajaxSettings.xhr();
  (f.cors = !!ze && 'withCredentials' in ze),
    (f.ajax = ze = !!ze),
    w.ajaxTransport(function (e) {
      var i, n;
      if (f.cors || (ze && !e.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = e.xhr();
            if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
              for (s in e.xhrFields) a[s] = e.xhrFields[s];
            for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
            e.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'),
            o))
              a.setRequestHeader(s, o[s]);
            (i = function (t) {
              return function () {
                i &&
                  ((i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  'abort' === t
                    ? a.abort()
                    : 'error' === t
                    ? 'number' != typeof a.status
                      ? r(0, 'error')
                      : r(a.status, a.statusText)
                    : r(
                        Me[a.status] || a.status,
                        a.statusText,
                        'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = i()),
              (n = a.onerror = a.ontimeout = i('error')),
              void 0 !== a.onabort
                ? (a.onabort = n)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      t.setTimeout(function () {
                        i && n();
                      });
                  }),
              (i = i('abort'));
            try {
              a.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (i) throw t;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    w.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (t) {
          return w.globalEval(t), t;
        },
      },
    }),
    w.ajaxPrefilter('script', function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET');
    }),
    w.ajaxTransport('script', function (t) {
      var e, i;
      if (t.crossDomain)
        return {
          send: function (o, r) {
            (e = w('<script>')
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                'load error',
                (i = function (t) {
                  e.remove(), (i = null), t && r('error' === t.type ? 404 : 200, t.type);
                })
              )),
              n.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var qe = [],
    We = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var t = qe.pop() || w.expando + '_' + ye++;
      return (this[t] = !0), t;
    },
  }),
    w.ajaxPrefilter('json jsonp', function (e, i, n) {
      var o,
        r,
        s,
        a =
          !1 !== e.jsonp &&
          (We.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              We.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(We, '$1' + o))
            : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
          (e.converters['script json'] = function () {
            return s || w.error(o + ' was not called'), s[0];
          }),
          (e.dataTypes[0] = 'json'),
          (r = t[o]),
          (t[o] = function () {
            s = arguments;
          }),
          n.always(function () {
            void 0 === r ? w(t).removeProp(o) : (t[o] = r),
              e[o] && ((e.jsonpCallback = i.jsonpCallback), qe.push(o)),
              s && g(r) && r(s[0]),
              (s = r = void 0);
          }),
          'script'
        );
    }),
    (f.createHTMLDocument = (function () {
      var t = n.implementation.createHTMLDocument('').body;
      return (t.innerHTML = '<form></form><form></form>'), 2 === t.childNodes.length;
    })()),
    (w.parseHTML = function (t, e, i) {
      return 'string' != typeof t
        ? []
        : ('boolean' == typeof e && ((i = e), (e = !1)),
          e ||
            (f.createHTMLDocument
              ? (((o = (e = n.implementation.createHTMLDocument('')).createElement('base')).href = n.location.href),
                e.head.appendChild(o))
              : (e = n)),
          (s = !i && []),
          (r = A.exec(t))
            ? [e.createElement(r[1])]
            : ((r = mt([t], e, s)), s && s.length && w(s).remove(), w.merge([], r.childNodes)));
      var o, r, s;
    }),
    (w.fn.load = function (t, e, i) {
      var n,
        o,
        r,
        s = this,
        a = t.indexOf(' ');
      return (
        a > -1 && ((n = ue(t.slice(a))), (t = t.slice(0, a))),
        g(e) ? ((i = e), (e = void 0)) : e && 'object' == typeof e && (o = 'POST'),
        s.length > 0 &&
          w
            .ajax({ url: t, type: o || 'GET', dataType: 'html', data: e })
            .done(function (t) {
              (r = arguments), s.html(n ? w('<div>').append(w.parseHTML(t)).find(n) : t);
            })
            .always(
              i &&
                function (t, e) {
                  s.each(function () {
                    i.apply(this, r || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    w.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (t, e) {
      w.fn[e] = function (t) {
        return this.on(e, t);
      };
    }),
    (w.expr.pseudos.animated = function (t) {
      return w.grep(w.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          l,
          c = w.css(t, 'position'),
          d = w(t),
          u = {};
        'static' === c && (t.style.position = 'relative'),
          (a = d.offset()),
          (r = w.css(t, 'top')),
          (l = w.css(t, 'left')),
          ('absolute' === c || 'fixed' === c) && (r + l).indexOf('auto') > -1
            ? ((s = (n = d.position()).top), (o = n.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          g(e) && (e = e.call(t, i, w.extend({}, a))),
          null != e.top && (u.top = e.top - a.top + s),
          null != e.left && (u.left = e.left - a.left + o),
          'using' in e ? e.using.call(t, u) : d.css(u);
      },
    }),
    w.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                w.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? {
                top: (e = n.getBoundingClientRect()).top + (i = n.ownerDocument.defaultView).pageYOffset,
                left: e.left + i.pageXOffset,
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i,
            n = this[0],
            o = { top: 0, left: 0 };
          if ('fixed' === w.css(n, 'position')) e = n.getBoundingClientRect();
          else {
            for (
              e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement;
              t && (t === i.body || t === i.documentElement) && 'static' === w.css(t, 'position');

            )
              t = t.parentNode;
            t &&
              t !== n &&
              1 === t.nodeType &&
              (((o = w(t).offset()).top += w.css(t, 'borderTopWidth', !0)),
              (o.left += w.css(t, 'borderLeftWidth', !0)));
          }
          return { top: e.top - o.top - w.css(n, 'marginTop', !0), left: e.left - o.left - w.css(n, 'marginLeft', !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent; t && 'static' === w.css(t, 'position'); ) t = t.offsetParent;
          return t || vt;
        });
      },
    }),
    w.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, e) {
      var i = 'pageYOffset' === e;
      w.fn[t] = function (n) {
        return F(
          this,
          function (t, n, o) {
            var r;
            if ((m(t) ? (r = t) : 9 === t.nodeType && (r = t.defaultView), void 0 === o)) return r ? r[e] : t[n];
            r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : (t[n] = o);
          },
          t,
          n,
          arguments.length
        );
      };
    }),
    w.each(['top', 'left'], function (t, e) {
      w.cssHooks[e] = qt(f.pixelPosition, function (t, i) {
        if (i) return (i = zt(t, e)), jt.test(i) ? w(t).position()[e] + 'px' : i;
      });
    }),
    w.each({ Height: 'height', Width: 'width' }, function (t, e) {
      w.each({ padding: 'inner' + t, content: e, '': 'outer' + t }, function (i, n) {
        w.fn[n] = function (o, r) {
          var s = arguments.length && (i || 'boolean' != typeof o),
            a = i || (!0 === o || !0 === r ? 'margin' : 'border');
          return F(
            this,
            function (e, i, o) {
              var r;
              return m(e)
                ? 0 === n.indexOf('outer')
                  ? e['inner' + t]
                  : e.document.documentElement['client' + t]
                : 9 === e.nodeType
                ? ((r = e.documentElement),
                  Math.max(
                    e.body['scroll' + t],
                    r['scroll' + t],
                    e.body['offset' + t],
                    r['offset' + t],
                    r['client' + t]
                  ))
                : void 0 === o
                ? w.css(e, i, a)
                : w.style(e, i, o, a);
            },
            e,
            s ? o : void 0,
            s
          );
        };
      });
    }),
    w.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (t, e) {
        w.fn[e] = function (t, i) {
          return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
      }
    ),
    w.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    w.fn.extend({
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length ? this.off(t, '**') : this.off(e, t || '**', i);
      },
    }),
    (w.proxy = function (t, e) {
      var i, n, o;
      if (('string' == typeof e && ((i = t[e]), (e = t), (t = i)), g(t)))
        return (
          (n = r.call(arguments, 2)),
          ((o = function () {
            return t.apply(e || this, n.concat(r.call(arguments)));
          }).guid = t.guid = t.guid || w.guid++),
          o
        );
    }),
    (w.holdReady = function (t) {
      t ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = E),
    (w.isFunction = g),
    (w.isWindow = m),
    (w.camelCase = Q),
    (w.type = _),
    (w.now = Date.now),
    (w.isNumeric = function (t) {
      var e = w.type(t);
      return ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return w;
      });
  var Fe = t.jQuery,
    Re = t.$;
  return (
    (w.noConflict = function (e) {
      return t.$ === w && (t.$ = Re), e && t.jQuery === w && (t.jQuery = Fe), w;
    }),
    e || (t.jQuery = t.$ = w),
    w
  );
}),
  (function () {
    'use strict';
    function t(n) {
      if (!n) throw new Error('No options passed to Waypoint constructor');
      if (!n.element) throw new Error('No element option passed to Waypoint constructor');
      if (!n.handler) throw new Error('No handler option passed to Waypoint constructor');
      (this.key = 'waypoint-' + e),
        (this.options = t.Adapter.extend({}, t.defaults, n)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = n.handler),
        (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (i[this.key] = this),
        (e += 1);
    }
    var e = 0,
      i = {};
    (t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (t.prototype.next = function () {
        return this.group.next(this);
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (t.invokeAll = function (t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var o = 0, r = e.length; r > o; o++) e[o][t]();
      }),
      (t.destroyAll = function () {
        t.invokeAll('destroy');
      }),
      (t.disableAll = function () {
        t.invokeAll('disable');
      }),
      (t.enableAll = function () {
        for (var e in (t.Context.refreshAll(), i)) i[e].enabled = !0;
        return this;
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll();
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (t.adapters = []),
      (t.defaults = { context: window, continuous: !0, enabled: !0, group: 'default', horizontal: !1, offset: 0 }),
      (t.offsetAliases = {
        'bottom-in-view': function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        'right-in-view': function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = t);
  })(),
  (function () {
    'use strict';
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = o.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (n[t.waypointContextKey] = this),
        (i += 1),
        o.windowContext || ((o.windowContext = !0), (o.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      n = {},
      o = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      (this.waypoints[t.options.horizontal ? 'horizontal' : 'vertical'][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && this.element != this.element.window && (this.adapter.off('.waypoints'), delete n[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on('resize.waypoints', function () {
          e.didResize || ((e.didResize = !0), o.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on('scroll.waypoints', function () {
          (!e.didScroll || o.isTouch) && ((e.didScroll = !0), o.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        o.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
            },
          };
        for (var i in e) {
          var n = e[i],
            o = n.newScroll > n.oldScroll ? n.forward : n.backward;
          for (var r in this.waypoints[i]) {
            var s = this.waypoints[i][r];
            if (null !== s.triggerPoint) {
              var a = n.oldScroll < s.triggerPoint,
                l = n.newScroll >= s.triggerPoint;
              ((a && l) || (!a && !l)) && (s.queueTrigger(o), (t[s.group.id] = s.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, o = t.length; o > n; n++) t[n].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          n = {};
        for (var r in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left',
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top',
          },
        }))) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              c,
              d,
              u = this.waypoints[r][a],
              h = u.options.offset,
              p = u.triggerPoint,
              f = 0,
              g = null == p;
            u.element !== u.element.window && (f = u.adapter.offset()[s.offsetProp]),
              'function' == typeof h
                ? (h = h.apply(u))
                : 'string' == typeof h &&
                  ((h = parseFloat(h)),
                  u.options.offset.indexOf('%') > -1 && (h = Math.ceil((s.contextDimension * h) / 100))),
              (u.triggerPoint = Math.floor(f + (s.contextScroll - s.contextOffset) - h)),
              (c = u.triggerPoint >= s.oldScroll),
              (d = !(l = p < s.oldScroll) && !c),
              !g && l && c
                ? (u.queueTrigger(s.backward), (n[u.group.id] = u.group))
                : ((!g && d) || (g && s.oldScroll >= u.triggerPoint)) &&
                  (u.queueTrigger(s.forward), (n[u.group.id] = u.group));
          }
        }
        return (
          o.requestAnimationFrame(function () {
            for (var t in n) n[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in n) n[t].refresh();
      }),
      (e.findByElement = function (t) {
        return n[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (o.requestAnimationFrame = function (e) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        ).call(window, e);
      }),
      (o.Context = e);
  })(),
  (function () {
    'use strict';
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (n[this.axis][this.name] = this);
    }
    var n = { vertical: {}, horizontal: {} },
      o = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var n = this.triggerQueues[i];
          n.sort('up' === i || 'left' === i ? e : t);
          for (var o = 0, r = n.length; r > o; o += 1) {
            var s = n[o];
            (s.options.continuous || o === n.length - 1) && s.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return n[t.axis][t.name] || new i(t);
      }),
      (o.Group = i);
  })(),
  (function () {
    'use strict';
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      ['innerHeight', 'innerWidth', 'off', 'offset', 'on', 'outerHeight', 'outerWidth', 'scrollLeft', 'scrollTop'],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(['extend', 'inArray', 'isEmptyObject'], function (i, n) {
        t[n] = e[n];
      }),
      i.adapters.push({ name: 'jquery', Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    'use strict';
    function t(t) {
      return function () {
        var i = [],
          n = arguments[0];
        return (
          t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var o = t.extend({}, n, { element: this });
            'string' == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  (function (t) {
    'use strict';
    t.fn.counterUp = function (e) {
      var i = t.extend({ time: 400, delay: 10 }, e);
      return this.each(function () {
        var e = t(this),
          n = i;
        e.waypoint(
          function () {
            var t = [],
              i = n.time / n.delay,
              o = e.text(),
              r = /[0-9]+,[0-9]+/.test(o);
            (o = o.replace(/,/g, '')), /^[0-9]+$/.test(o);
            for (var s = /^[0-9]+\.[0-9]+$/.test(o), a = s ? (o.split('.')[1] || []).length : 0, l = i; l >= 1; l--) {
              var c = parseInt((o / i) * l);
              if ((s && (c = parseFloat((o / i) * l).toFixed(a)), r))
                for (; /(\d+)(\d{3})/.test(c.toString()); ) c = c.toString().replace(/(\d+)(\d{3})/, '$1,$2');
              t.unshift(c);
            }
            e.data('counterup-nums', t),
              e.text('0'),
              e.data('counterup-func', function () {
                e.text(e.data('counterup-nums').shift()),
                  e.data('counterup-nums').length
                    ? setTimeout(e.data('counterup-func'), n.delay)
                    : (e.data('counterup-nums'), e.data('counterup-nums', null), e.data('counterup-func', null));
              }),
              setTimeout(e.data('counterup-func'), n.delay);
          },
          { offset: '100%', triggerOnce: !0 }
        );
      });
    };
  })(jQuery),
  (function () {
    var t = !1;
    (window.JQClass = function () {}),
      (JQClass.classes = {}),
      (JQClass.extend = function e(i) {
        var n = this.prototype;
        t = !0;
        var o = new this();
        for (var r in ((t = !1), i))
          o[r] =
            'function' == typeof i[r] && 'function' == typeof n[r]
              ? (function (t, e) {
                  return function () {
                    var i = this._super;
                    this._super = function (e) {
                      return n[t].apply(this, e || []);
                    };
                    var o = e.apply(this, arguments);
                    return (this._super = i), o;
                  };
                })(r, i[r])
              : i[r];
        function s() {
          !t && this._init && this._init.apply(this, arguments);
        }
        return ((s.prototype = o).constructor = s), (s.extend = e), s;
      });
  })(),
  (function ($) {
    function camelCase(t) {
      return t.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      });
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: 'plugin',
      defaultOptions: {},
      regionalOptions: {},
      _getters: [],
      _getMarker: function () {
        return 'is-' + this.name;
      },
      _init: function () {
        $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
        var t = camelCase(this.name);
        ($[t] = this),
          ($.fn[t] = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return $[t]._isNotChained(e, i)
              ? $[t][e].apply($[t], [this[0]].concat(i))
              : this.each(function () {
                  if ('string' == typeof e) {
                    if ('_' === e[0] || !$[t][e]) throw 'Unknown method: ' + e;
                    $[t][e].apply($[t], [this].concat(i));
                  } else $[t]._attach(this, e);
                });
          });
      },
      setDefaults: function (t) {
        $.extend(this.defaultOptions, t || {});
      },
      _isNotChained: function (t, e) {
        return (
          ('option' === t && (0 === e.length || (1 === e.length && 'string' == typeof e[0]))) ||
          $.inArray(t, this._getters) > -1
        );
      },
      _attach: function (t, e) {
        if (!(t = $(t)).hasClass(this._getMarker())) {
          t.addClass(this._getMarker()), (e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {}));
          var i = $.extend({ name: this.name, elem: t, options: e }, this._instSettings(t, e));
          t.data(this.name, i), this._postAttach(t, i), this.option(t, e);
        }
      },
      _instSettings: function (t, e) {
        return {};
      },
      _postAttach: function (t, e) {},
      _getMetadata: function (d) {
        try {
          var f = d.data(this.name.toLowerCase()) || '';
          for (var g in ((f = f.replace(/'/g, '"')),
          (f = f.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
            var n = f.substring(0, i).match(/"/g);
            return n && n.length % 2 != 0 ? e + ':' : '"' + e + '":';
          })),
          (f = $.parseJSON('{' + f + '}')),
          f)) {
            var h = f[g];
            'string' == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h));
          }
          return f;
        } catch (e) {
          return {};
        }
      },
      _getInst: function (t) {
        return $(t).data(this.name) || {};
      },
      option: function (t, e, i) {
        var n = (t = $(t)).data(this.name);
        if (!e || ('string' == typeof e && null == i)) return (o = (n || {}).options) && e ? o[e] : o;
        if (t.hasClass(this._getMarker())) {
          var o = e || {};
          'string' == typeof e && ((o = {})[e] = i), this._optionsChanged(t, n, o), $.extend(n.options, o);
        }
      },
      _optionsChanged: function (t, e, i) {},
      destroy: function (t) {
        (t = $(t)).hasClass(this._getMarker()) &&
          (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy: function (t, e) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (t, e) {
          'object' == typeof t && ((e = t), (t = 'JQPlugin')), (t = camelCase(t));
          var i = camelCase(e.name);
          (JQClass.classes[i] = JQClass.classes[t].extend(e)), new JQClass.classes[i]();
        },
      });
  })(jQuery),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define(e)
      : (t.Popper = e());
  })(this, function () {
    'use strict';
    function t(t) {
      return t && '[object Function]' === {}.toString.call(t);
    }
    function e(t, e) {
      if (1 !== t.nodeType) return [];
      var i = getComputedStyle(t, null);
      return e ? i[e] : i;
    }
    function i(t) {
      return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
    }
    function n(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case 'HTML':
        case 'BODY':
          return t.ownerDocument.body;
        case '#document':
          return t.body;
      }
      var o = e(t);
      return /(auto|scroll)/.test(o.overflow + o.overflowY + o.overflowX) ? t : n(i(t));
    }
    function o(t) {
      var i = t && t.offsetParent,
        n = i && i.nodeName;
      return n && 'BODY' !== n && 'HTML' !== n
        ? -1 !== ['TD', 'TABLE'].indexOf(i.nodeName) && 'static' === e(i, 'position')
          ? o(i)
          : i
        : t
        ? t.ownerDocument.documentElement
        : document.documentElement;
    }
    function r(t) {
      return null === t.parentNode ? t : r(t.parentNode);
    }
    function s(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
      var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = i ? t : e,
        a = i ? e : t,
        l = document.createRange();
      l.setStart(n, 0), l.setEnd(a, 0);
      var c = l.commonAncestorContainer;
      if ((t !== c && e !== c) || n.contains(a))
        return (function (t) {
          var e = t.nodeName;
          return 'BODY' !== e && ('HTML' === e || o(t.firstElementChild) === t);
        })(c)
          ? c
          : o(c);
      var d = r(t);
      return d.host ? s(d.host, e) : s(t, r(e).host);
    }
    function a(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        i = 'top' === e ? 'scrollTop' : 'scrollLeft',
        n = t.nodeName;
      if ('BODY' === n || 'HTML' === n) {
        var o = t.ownerDocument.documentElement,
          r = t.ownerDocument.scrollingElement || o;
        return r[i];
      }
      return t[i];
    }
    function l(t, e) {
      var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = a(e, 'top'),
        o = a(e, 'left'),
        r = i ? -1 : 1;
      return (t.top += n * r), (t.bottom += n * r), (t.left += o * r), (t.right += o * r), t;
    }
    function c(t, e) {
      var i = 'x' === e ? 'Left' : 'Top',
        n = 'Left' == i ? 'Right' : 'Bottom';
      return parseFloat(t['border' + i + 'Width'], 10) + parseFloat(t['border' + n + 'Width'], 10);
    }
    function d(t, e, i, n) {
      return z(
        e['offset' + t],
        e['scroll' + t],
        i['client' + t],
        i['offset' + t],
        i['scroll' + t],
        Q()
          ? i['offset' + t] +
              n['margin' + ('Height' === t ? 'Top' : 'Left')] +
              n['margin' + ('Height' === t ? 'Bottom' : 'Right')]
          : 0
      );
    }
    function u() {
      var t = document.body,
        e = document.documentElement,
        i = Q() && getComputedStyle(e);
      return { height: d('Height', t, e, i), width: d('Width', t, e, i) };
    }
    function h(t) {
      return V({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function p(t) {
      var i = {};
      if (Q())
        try {
          i = t.getBoundingClientRect();
          var n = a(t, 'top'),
            o = a(t, 'left');
          (i.top += n), (i.left += o), (i.bottom += n), (i.right += o);
        } catch (t) {}
      else i = t.getBoundingClientRect();
      var r = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
        s = 'HTML' === t.nodeName ? u() : {},
        l = t.offsetWidth - (s.width || t.clientWidth || r.right - r.left),
        d = t.offsetHeight - (s.height || t.clientHeight || r.bottom - r.top);
      if (l || d) {
        var p = e(t);
        (l -= c(p, 'x')), (d -= c(p, 'y')), (r.width -= l), (r.height -= d);
      }
      return h(r);
    }
    function f(t, i) {
      var o = Q(),
        r = 'HTML' === i.nodeName,
        s = p(t),
        a = p(i),
        c = n(t),
        d = e(i),
        u = parseFloat(d.borderTopWidth, 10),
        f = parseFloat(d.borderLeftWidth, 10),
        g = h({ top: s.top - a.top - u, left: s.left - a.left - f, width: s.width, height: s.height });
      if (((g.marginTop = 0), (g.marginLeft = 0), !o && r)) {
        var m = parseFloat(d.marginTop, 10),
          v = parseFloat(d.marginLeft, 10);
        (g.top -= u - m),
          (g.bottom -= u - m),
          (g.left -= f - v),
          (g.right -= f - v),
          (g.marginTop = m),
          (g.marginLeft = v);
      }
      return (o ? i.contains(c) : i === c && 'BODY' !== c.nodeName) && (g = l(g, i)), g;
    }
    function g(t) {
      var e = t.ownerDocument.documentElement,
        i = f(t, e),
        n = z(e.clientWidth, window.innerWidth || 0),
        o = z(e.clientHeight, window.innerHeight || 0),
        r = a(e),
        s = a(e, 'left');
      return h({ top: r - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: n, height: o });
    }
    function m(t) {
      var n = t.nodeName;
      return 'BODY' !== n && 'HTML' !== n && ('fixed' === e(t, 'position') || m(i(t)));
    }
    function v(t, e, o, r) {
      var a = { top: 0, left: 0 },
        l = s(t, e);
      if ('viewport' === r) a = g(l);
      else {
        var c;
        'scrollParent' === r
          ? 'BODY' === (c = n(i(e))).nodeName && (c = t.ownerDocument.documentElement)
          : (c = 'window' === r ? t.ownerDocument.documentElement : r);
        var d = f(c, l);
        if ('HTML' !== c.nodeName || m(l)) a = d;
        else {
          var h = u(),
            p = h.height,
            v = h.width;
          (a.top += d.top - d.marginTop),
            (a.bottom = p + d.top),
            (a.left += d.left - d.marginLeft),
            (a.right = v + d.left);
        }
      }
      return (a.left += o), (a.top += o), (a.right -= o), (a.bottom -= o), a;
    }
    function y(t) {
      return t.width * t.height;
    }
    function _(t, e, i, n, o) {
      var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf('auto')) return t;
      var s = v(i, n, r, o),
        a = {
          top: { width: s.width, height: e.top - s.top },
          right: { width: s.right - e.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - e.bottom },
          left: { width: e.left - s.left, height: s.height },
        },
        l = Object.keys(a)
          .map(function (t) {
            return V({ key: t }, a[t], { area: y(a[t]) });
          })
          .sort(function (t, e) {
            return e.area - t.area;
          }),
        c = l.filter(function (t) {
          return t.width >= i.clientWidth && t.height >= i.clientHeight;
        }),
        d = 0 < c.length ? c[0].key : l[0].key,
        u = t.split('-')[1];
      return d + (u ? '-' + u : '');
    }
    function w(t, e, i) {
      return f(i, s(e, i));
    }
    function b(t) {
      var e = getComputedStyle(t),
        i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return { width: t.offsetWidth + n, height: t.offsetHeight + i };
    }
    function x(t) {
      var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t];
      });
    }
    function C(t, e, i) {
      i = i.split('-')[0];
      var n = b(t),
        o = { width: n.width, height: n.height },
        r = -1 !== ['right', 'left'].indexOf(i),
        s = r ? 'top' : 'left',
        a = r ? 'left' : 'top',
        l = r ? 'height' : 'width',
        c = r ? 'width' : 'height';
      return (o[s] = e[s] + e[l] / 2 - n[l] / 2), (o[a] = i === a ? e[a] - n[c] : e[x(a)]), o;
    }
    function T(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function S(e, i, n) {
      return (
        (void 0 === n
          ? e
          : e.slice(
              0,
              (function (t, e, i) {
                if (Array.prototype.findIndex)
                  return t.findIndex(function (t) {
                    return t[e] === i;
                  });
                var n = T(t, function (t) {
                  return t[e] === i;
                });
                return t.indexOf(n);
              })(e, 'name', n)
            )
        ).forEach(function (e) {
          e.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var n = e.function || e.fn;
          e.enabled &&
            t(n) &&
            ((i.offsets.popper = h(i.offsets.popper)), (i.offsets.reference = h(i.offsets.reference)), (i = n(i, e)));
        }),
        i
      );
    }
    function k() {
      if (!this.state.isDestroyed) {
        var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
        (t.offsets.reference = w(0, this.popper, this.reference)),
          (t.placement = _(
            this.options.placement,
            t.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (t.originalPlacement = t.placement),
          (t.offsets.popper = C(this.popper, t.offsets.reference, t.placement)),
          (t.offsets.popper.position = 'absolute'),
          (t = S(this.modifiers, t)),
          this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
      }
    }
    function E(t, e) {
      return t.some(function (t) {
        return t.enabled && t.name === e;
      });
    }
    function A(t) {
      for (
        var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
        n < e.length - 1;
        n++
      ) {
        var o = e[n],
          r = o ? '' + o + i : t;
        if (void 0 !== document.body.style[r]) return r;
      }
      return null;
    }
    function $() {
      return (
        (this.state.isDestroyed = !0),
        E(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.left = ''),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style[A('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function I(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }
    function D() {
      this.state.eventsEnabled ||
        (this.state = (function (t, e, i, o) {
          (i.updateBound = o), I(t).addEventListener('resize', i.updateBound, { passive: !0 });
          var r = n(t);
          return (
            (function t(e, i, o, r) {
              var s = 'BODY' === e.nodeName,
                a = s ? e.ownerDocument.defaultView : e;
              a.addEventListener(i, o, { passive: !0 }), s || t(n(a.parentNode), i, o, r), r.push(a);
            })(r, 'scroll', i.updateBound, i.scrollParents),
            (i.scrollElement = r),
            (i.eventsEnabled = !0),
            i
          );
        })(this.reference, 0, this.state, this.scheduleUpdate));
    }
    function O() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = (function (t, e) {
          return (
            I(t).removeEventListener('resize', e.updateBound),
            e.scrollParents.forEach(function (t) {
              t.removeEventListener('scroll', e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e
          );
        })(this.reference, this.state)));
    }
    function P(t) {
      return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function N(t, e) {
      Object.keys(e).forEach(function (i) {
        var n = '';
        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(i) && P(e[i]) && (n = 'px'),
          (t.style[i] = e[i] + n);
      });
    }
    function L(t, e, i) {
      var n = T(t, function (t) {
          return t.name === e;
        }),
        o =
          !!n &&
          t.some(function (t) {
            return t.name === i && t.enabled && t.order < n.order;
          });
      if (!o) {
        var r = '`' + e + '`';
        console.warn(
          '`' +
            i +
            '` modifier is required by ' +
            r +
            ' modifier in order to work, be sure to include it before ' +
            r +
            '!'
        );
      }
      return o;
    }
    function j(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        i = G.indexOf(t),
        n = G.slice(i + 1).concat(G.slice(0, i));
      return e ? n.reverse() : n;
    }
    for (
      var H = Math.min,
        M = Math.floor,
        z = Math.max,
        q = 'undefined' != typeof window && 'undefined' != typeof document,
        W = ['Edge', 'Trident', 'Firefox'],
        F = 0,
        R = 0;
      R < W.length;
      R += 1
    )
      if (q && 0 <= navigator.userAgent.indexOf(W[R])) {
        F = 1;
        break;
      }
    var B,
      U =
        q && window.Promise
          ? function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function () {
                    (e = !1), t();
                  }));
              };
            }
          : function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  setTimeout(function () {
                    (e = !1), t();
                  }, F));
              };
            },
      Q = function () {
        return null == B && (B = -1 !== navigator.appVersion.indexOf('MSIE 10')), B;
      },
      Y = function (t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      },
      K = (function () {
        function t(t, e) {
          for (var i, n = 0; n < e.length; n++)
            ((i = e[n]).enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      X = function (t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = i),
          t
        );
      },
      V =
        Object.assign ||
        function (t) {
          for (var e, i = 1; i < arguments.length; i++)
            for (var n in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t;
        },
      Z = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      G = Z.slice(3),
      J = (function () {
        function e(i, n) {
          var o = this,
            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          Y(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(o.update);
            }),
            (this.update = U(this.update.bind(this))),
            (this.options = V({}, e.Defaults, r)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = i && i.jquery ? i[0] : i),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(V({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
              o.options.modifiers[t] = V({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {});
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (t) {
                return V({ name: t }, o.options.modifiers[t]);
              })
              .sort(function (t, e) {
                return t.order - e.order;
              })),
            this.modifiers.forEach(function (e) {
              e.enabled && t(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state);
            }),
            this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), (this.state.eventsEnabled = s);
        }
        return (
          K(e, [
            {
              key: 'update',
              value: function () {
                return k.call(this);
              },
            },
            {
              key: 'destroy',
              value: function () {
                return $.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return D.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return O.call(this);
              },
            },
          ]),
          e
        );
      })();
    return (
      (J.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
      (J.placements = Z),
      (J.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
              var e = t.placement,
                i = e.split('-')[0],
                n = e.split('-')[1];
              if (n) {
                var o = t.offsets,
                  r = o.reference,
                  s = o.popper,
                  a = -1 !== ['bottom', 'top'].indexOf(i),
                  l = a ? 'left' : 'top',
                  c = a ? 'width' : 'height',
                  d = { start: X({}, l, r[l]), end: X({}, l, r[l] + r[c] - s[c]) };
                t.offsets.popper = V({}, s, d[n]);
              }
              return t;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (t, e) {
              var i,
                n = e.offset,
                o = t.offsets,
                r = o.popper,
                s = o.reference,
                a = t.placement.split('-')[0];
              return (
                (i = P(+n)
                  ? [+n, 0]
                  : (function (t, e, i, n) {
                      var o = [0, 0],
                        r = -1 !== ['right', 'left'].indexOf(n),
                        s = t.split(/(\+|\-)/).map(function (t) {
                          return t.trim();
                        }),
                        a = s.indexOf(
                          T(s, function (t) {
                            return -1 !== t.search(/,|\s/);
                          })
                        );
                      s[a] &&
                        -1 === s[a].indexOf(',') &&
                        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                      var l = /\s*,\s*|\s+/,
                        c =
                          -1 === a
                            ? [s]
                            : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
                      return (
                        (c = c.map(function (t, n) {
                          var o = (1 === n ? !r : r) ? 'height' : 'width',
                            s = !1;
                          return t
                            .reduce(function (t, e) {
                              return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e)
                                ? ((t[t.length - 1] = e), (s = !0), t)
                                : s
                                ? ((t[t.length - 1] += e), (s = !1), t)
                                : t.concat(e);
                            }, [])
                            .map(function (t) {
                              return (function (t, e, i, n) {
                                var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                  r = +o[1],
                                  s = o[2];
                                if (!r) return t;
                                if (0 === s.indexOf('%')) {
                                  var a;
                                  switch (s) {
                                    case '%p':
                                      a = i;
                                      break;
                                    case '%':
                                    case '%r':
                                    default:
                                      a = n;
                                  }
                                  return (h(a)[e] / 100) * r;
                                }
                                return 'vh' === s || 'vw' === s
                                  ? (('vh' === s
                                      ? z(document.documentElement.clientHeight, window.innerHeight || 0)
                                      : z(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                      100) *
                                      r
                                  : r;
                              })(t, o, e, i);
                            });
                        })).forEach(function (t, e) {
                          t.forEach(function (i, n) {
                            P(i) && (o[e] += i * ('-' === t[n - 1] ? -1 : 1));
                          });
                        }),
                        o
                      );
                    })(n, r, s, a)),
                'left' === a
                  ? ((r.top += i[0]), (r.left -= i[1]))
                  : 'right' === a
                  ? ((r.top += i[0]), (r.left += i[1]))
                  : 'top' === a
                  ? ((r.left += i[0]), (r.top -= i[1]))
                  : 'bottom' === a && ((r.left += i[0]), (r.top += i[1])),
                (t.popper = r),
                t
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (t, e) {
              var i = e.boundariesElement || o(t.instance.popper);
              t.instance.reference === i && (i = o(i));
              var n = v(t.instance.popper, t.instance.reference, e.padding, i);
              e.boundaries = n;
              var r = t.offsets.popper,
                s = {
                  primary: function (t) {
                    var i = r[t];
                    return r[t] < n[t] && !e.escapeWithReference && (i = z(r[t], n[t])), X({}, t, i);
                  },
                  secondary: function (t) {
                    var i = 'right' === t ? 'left' : 'top',
                      o = r[i];
                    return (
                      r[t] > n[t] &&
                        !e.escapeWithReference &&
                        (o = H(r[i], n[t] - ('right' === t ? r.width : r.height))),
                      X({}, i, o)
                    );
                  },
                };
              return (
                e.priority.forEach(function (t) {
                  var e = -1 === ['left', 'top'].indexOf(t) ? 'secondary' : 'primary';
                  r = V({}, r, s[e](t));
                }),
                (t.offsets.popper = r),
                t
              );
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (t) {
              var e = t.offsets,
                i = e.popper,
                n = e.reference,
                o = t.placement.split('-')[0],
                r = M,
                s = -1 !== ['top', 'bottom'].indexOf(o),
                a = s ? 'right' : 'bottom',
                l = s ? 'left' : 'top',
                c = s ? 'width' : 'height';
              return (
                i[a] < r(n[l]) && (t.offsets.popper[l] = r(n[l]) - i[c]),
                i[l] > r(n[a]) && (t.offsets.popper[l] = r(n[a])),
                t
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (t, i) {
              var n;
              if (!L(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
              var o = i.element;
              if ('string' == typeof o) {
                if (!(o = t.instance.popper.querySelector(o))) return t;
              } else if (!t.instance.popper.contains(o))
                return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;
              var r = t.placement.split('-')[0],
                s = t.offsets,
                a = s.popper,
                l = s.reference,
                c = -1 !== ['left', 'right'].indexOf(r),
                d = c ? 'height' : 'width',
                u = c ? 'Top' : 'Left',
                p = u.toLowerCase(),
                f = c ? 'left' : 'top',
                g = c ? 'bottom' : 'right',
                m = b(o)[d];
              l[g] - m < a[p] && (t.offsets.popper[p] -= a[p] - (l[g] - m)),
                l[p] + m > a[g] && (t.offsets.popper[p] += l[p] + m - a[g]),
                (t.offsets.popper = h(t.offsets.popper));
              var v = l[p] + l[d] / 2 - m / 2,
                y = e(t.instance.popper),
                _ = parseFloat(y['margin' + u], 10),
                w = parseFloat(y['border' + u + 'Width'], 10),
                x = v - t.offsets.popper[p] - _ - w;
              return (
                (x = z(H(a[d] - m, x), 0)),
                (t.arrowElement = o),
                (t.offsets.arrow = (X((n = {}), p, Math.round(x)), X(n, f, ''), n)),
                t
              );
            },
            element: '[x-arrow]',
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (t, e) {
              if (E(t.instance.modifiers, 'inner')) return t;
              if (t.flipped && t.placement === t.originalPlacement) return t;
              var i = v(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                n = t.placement.split('-')[0],
                o = x(n),
                r = t.placement.split('-')[1] || '',
                s = [];
              switch (e.behavior) {
                case 'flip':
                  s = [n, o];
                  break;
                case 'clockwise':
                  s = j(n);
                  break;
                case 'counterclockwise':
                  s = j(n, !0);
                  break;
                default:
                  s = e.behavior;
              }
              return (
                s.forEach(function (a, l) {
                  if (n !== a || s.length === l + 1) return t;
                  (n = t.placement.split('-')[0]), (o = x(n));
                  var c = t.offsets.popper,
                    d = t.offsets.reference,
                    u = M,
                    h =
                      ('left' === n && u(c.right) > u(d.left)) ||
                      ('right' === n && u(c.left) < u(d.right)) ||
                      ('top' === n && u(c.bottom) > u(d.top)) ||
                      ('bottom' === n && u(c.top) < u(d.bottom)),
                    p = u(c.left) < u(i.left),
                    f = u(c.right) > u(i.right),
                    g = u(c.top) < u(i.top),
                    m = u(c.bottom) > u(i.bottom),
                    v = ('left' === n && p) || ('right' === n && f) || ('top' === n && g) || ('bottom' === n && m),
                    y = -1 !== ['top', 'bottom'].indexOf(n),
                    _ =
                      !!e.flipVariations &&
                      ((y && 'start' === r && p) ||
                        (y && 'end' === r && f) ||
                        (!y && 'start' === r && g) ||
                        (!y && 'end' === r && m));
                  (h || v || _) &&
                    ((t.flipped = !0),
                    (h || v) && (n = s[l + 1]),
                    _ &&
                      (r = (function (t) {
                        return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
                      })(r)),
                    (t.placement = n + (r ? '-' + r : '')),
                    (t.offsets.popper = V(
                      {},
                      t.offsets.popper,
                      C(t.instance.popper, t.offsets.reference, t.placement)
                    )),
                    (t = S(t.instance.modifiers, t, 'flip')));
                }),
                t
              );
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (t) {
              var e = t.placement,
                i = e.split('-')[0],
                n = t.offsets,
                o = n.popper,
                r = n.reference,
                s = -1 !== ['left', 'right'].indexOf(i),
                a = -1 === ['top', 'left'].indexOf(i);
              return (
                (o[s ? 'left' : 'top'] = r[i] - (a ? o[s ? 'width' : 'height'] : 0)),
                (t.placement = x(e)),
                (t.offsets.popper = h(o)),
                t
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (t) {
              if (!L(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
              var e = t.offsets.reference,
                i = T(t.instance.modifiers, function (t) {
                  return 'preventOverflow' === t.name;
                }).boundaries;
              if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
              }
              return t;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, e) {
              var i = e.x,
                n = e.y,
                r = t.offsets.popper,
                s = T(t.instance.modifiers, function (t) {
                  return 'applyStyle' === t.name;
                }).gpuAcceleration;
              void 0 !== s &&
                console.warn(
                  'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                );
              var a,
                l,
                c = void 0 === s ? e.gpuAcceleration : s,
                d = p(o(t.instance.popper)),
                u = { position: r.position },
                h = { left: M(r.left), top: M(r.top), bottom: M(r.bottom), right: M(r.right) },
                f = 'bottom' === i ? 'top' : 'bottom',
                g = 'right' === n ? 'left' : 'right',
                m = A('transform');
              if (
                ((l = 'bottom' == f ? -d.height + h.bottom : h.top),
                (a = 'right' == g ? -d.width + h.right : h.left),
                c && m)
              )
                (u[m] = 'translate3d(' + a + 'px, ' + l + 'px, 0)'),
                  (u[f] = 0),
                  (u[g] = 0),
                  (u.willChange = 'transform');
              else {
                var v = 'right' == g ? -1 : 1;
                (u[f] = l * ('bottom' == f ? -1 : 1)), (u[g] = a * v), (u.willChange = f + ', ' + g);
              }
              return (
                (t.attributes = V({}, { 'x-placement': t.placement }, t.attributes)),
                (t.styles = V({}, u, t.styles)),
                (t.arrowStyles = V({}, t.offsets.arrow, t.arrowStyles)),
                t
              );
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (t) {
              return (
                N(t.instance.popper, t.styles),
                (function (t, e) {
                  Object.keys(e).forEach(function (i) {
                    !1 === e[i] ? t.removeAttribute(i) : t.setAttribute(i, e[i]);
                  });
                })(t.instance.popper, t.attributes),
                t.arrowElement && Object.keys(t.arrowStyles).length && N(t.arrowElement, t.arrowStyles),
                t
              );
            },
            onLoad: function (t, e, i, n, o) {
              var r = w(0, e, t),
                s = _(i.placement, r, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
              return e.setAttribute('x-placement', s), N(e, { position: 'absolute' }), i;
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      J
    );
  }),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? e(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
  })(this, function (t, e, i) {
    'use strict';
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function o(t, e, i) {
      return e && n(t.prototype, e), i && n(t, i), t;
    }
    function r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
          (n = n.concat(
            Object.getOwnPropertySymbols(i).filter(function (t) {
              return Object.getOwnPropertyDescriptor(i, t).enumerable;
            })
          )),
          n.forEach(function (e) {
            var n, o, r;
            (r = i[(o = e)]),
              o in (n = t)
                ? Object.defineProperty(n, o, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                : (n[o] = r);
          });
      }
      return t;
    }
    (e = e && e.hasOwnProperty('default') ? e.default : e), (i = i && i.hasOwnProperty('default') ? i.default : i);
    var s = 'transitionend',
      a = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute('data-target');
          if (!e || '#' === e) {
            var i = t.getAttribute('href');
            e = i && '#' !== i ? i.trim() : '';
          }
          try {
            return document.querySelector(e) ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var i = e(t).css('transition-duration'),
            n = e(t).css('transition-delay'),
            o = parseFloat(i),
            r = parseFloat(n);
          return o || r ? ((i = i.split(',')[0]), (n = n.split(',')[0]), 1e3 * (parseFloat(i) + parseFloat(n))) : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          e(t).trigger(s);
        },
        supportsTransitionEnd: function () {
          return Boolean(s);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, i) {
          for (var n in i)
            if (Object.prototype.hasOwnProperty.call(i, n)) {
              var o = i[n],
                r = e[n],
                s =
                  r && a.isElement(r)
                    ? 'element'
                    : {}.toString
                        .call(r)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(o).test(s))
                throw new Error(
                  t.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + o + '".'
                );
            }
        },
        findShadowRoot: function (t) {
          if (!document.documentElement.attachShadow) return null;
          if ('function' != typeof t.getRootNode)
            return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null;
          var e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        },
      };
    (e.fn.emulateTransitionEnd = function (t) {
      var i = this,
        n = !1;
      return (
        e(this).one(a.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || a.triggerTransitionEnd(i);
        }, t),
        this
      );
    }),
      (e.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function (t) {
          if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        },
      });
    var l = 'alert',
      c = 'bs.alert',
      d = '.' + c,
      u = e.fn[l],
      h = { CLOSE: 'close' + d, CLOSED: 'closed' + d, CLICK_DATA_API: 'click' + d + '.data-api' },
      p = (function () {
        function t(t) {
          this._element = t;
        }
        var i = t.prototype;
        return (
          (i.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
          }),
          (i.dispose = function () {
            e.removeData(this._element, c), (this._element = null);
          }),
          (i._getRootElement = function (t) {
            var i = a.getSelectorFromElement(t),
              n = !1;
            return i && (n = document.querySelector(i)), n || (n = e(t).closest('.alert')[0]), n;
          }),
          (i._triggerCloseEvent = function (t) {
            var i = e.Event(h.CLOSE);
            return e(t).trigger(i), i;
          }),
          (i._removeElement = function (t) {
            var i = this;
            if ((e(t).removeClass('show'), e(t).hasClass('fade'))) {
              var n = a.getTransitionDurationFromElement(t);
              e(t)
                .one(a.TRANSITION_END, function (e) {
                  return i._destroyElement(t, e);
                })
                .emulateTransitionEnd(n);
            } else this._destroyElement(t);
          }),
          (i._destroyElement = function (t) {
            e(t).detach().trigger(h.CLOSED).remove();
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                o = n.data(c);
              o || ((o = new t(this)), n.data(c, o)), 'close' === i && o[i](this);
            });
          }),
          (t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
          ]),
          t
        );
      })();
    e(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
      (e.fn[l] = p._jQueryInterface),
      (e.fn[l].Constructor = p),
      (e.fn[l].noConflict = function () {
        return (e.fn[l] = u), p._jQueryInterface;
      });
    var f = 'button',
      g = 'bs.button',
      m = '.' + g,
      v = '.data-api',
      y = e.fn[f],
      _ = 'active',
      w = '[data-toggle^="button"]',
      b = '.btn',
      x = { CLICK_DATA_API: 'click' + m + v, FOCUS_BLUR_DATA_API: 'focus' + m + v + ' blur' + m + v },
      C = (function () {
        function t(t) {
          this._element = t;
        }
        var i = t.prototype;
        return (
          (i.toggle = function () {
            var t = !0,
              i = !0,
              n = e(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
              var o = this._element.querySelector('input:not([type="hidden"])');
              if (o) {
                if ('radio' === o.type)
                  if (o.checked && this._element.classList.contains(_)) t = !1;
                  else {
                    var r = n.querySelector('.active');
                    r && e(r).removeClass(_);
                  }
                if (t) {
                  if (
                    o.hasAttribute('disabled') ||
                    n.hasAttribute('disabled') ||
                    o.classList.contains('disabled') ||
                    n.classList.contains('disabled')
                  )
                    return;
                  (o.checked = !this._element.classList.contains(_)), e(o).trigger('change');
                }
                o.focus(), (i = !1);
              }
            }
            i && this._element.setAttribute('aria-pressed', !this._element.classList.contains(_)),
              t && e(this._element).toggleClass(_);
          }),
          (i.dispose = function () {
            e.removeData(this._element, g), (this._element = null);
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(g);
              n || ((n = new t(this)), e(this).data(g, n)), 'toggle' === i && n[i]();
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
          ]),
          t
        );
      })();
    e(document)
      .on(x.CLICK_DATA_API, w, function (t) {
        t.preventDefault();
        var i = t.target;
        e(i).hasClass('btn') || (i = e(i).closest(b)), C._jQueryInterface.call(e(i), 'toggle');
      })
      .on(x.FOCUS_BLUR_DATA_API, w, function (t) {
        var i = e(t.target).closest(b)[0];
        e(i).toggleClass('focus', /^focus(in)?$/.test(t.type));
      }),
      (e.fn[f] = C._jQueryInterface),
      (e.fn[f].Constructor = C),
      (e.fn[f].noConflict = function () {
        return (e.fn[f] = y), C._jQueryInterface;
      });
    var T = 'carousel',
      S = 'bs.carousel',
      k = '.' + S,
      E = '.data-api',
      A = e.fn[T],
      $ = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
      I = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean',
      },
      D = 'next',
      O = 'prev',
      P = {
        SLIDE: 'slide' + k,
        SLID: 'slid' + k,
        KEYDOWN: 'keydown' + k,
        MOUSEENTER: 'mouseenter' + k,
        MOUSELEAVE: 'mouseleave' + k,
        TOUCHSTART: 'touchstart' + k,
        TOUCHMOVE: 'touchmove' + k,
        TOUCHEND: 'touchend' + k,
        POINTERDOWN: 'pointerdown' + k,
        POINTERUP: 'pointerup' + k,
        DRAG_START: 'dragstart' + k,
        LOAD_DATA_API: 'load' + k + E,
        CLICK_DATA_API: 'click' + k + E,
      },
      N = 'active',
      L = '.active.carousel-item',
      j = { TOUCH: 'touch', PEN: 'pen' },
      H = (function () {
        function t(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._indicatorsElement = this._element.querySelector('.carousel-indicators')),
            (this._touchSupported = 'ontouchstart' in document.documentElement || 0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
            this._addEventListeners();
        }
        var i = t.prototype;
        return (
          (i.next = function () {
            this._isSliding || this._slide(D);
          }),
          (i.nextWhenVisible = function () {
            !document.hidden &&
              e(this._element).is(':visible') &&
              'hidden' !== e(this._element).css('visibility') &&
              this.next();
          }),
          (i.prev = function () {
            this._isSliding || this._slide(O);
          }),
          (i.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector('.carousel-item-next, .carousel-item-prev') &&
                (a.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (i.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval && (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                  this._config.interval
                ));
          }),
          (i.to = function (t) {
            var i = this;
            this._activeElement = this._element.querySelector(L);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                e(this._element).one(P.SLID, function () {
                  return i.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                this._slide(n < t ? D : O, this._items[t]);
              }
          }),
          (i.dispose = function () {
            e(this._element).off(k),
              e.removeData(this._element, S),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (i._getConfig = function (t) {
            return (t = r({}, $, t)), a.typeCheckConfig(T, t, I), t;
          }),
          (i._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              0 < e && this.prev(), e < 0 && this.next();
            }
          }),
          (i._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              e(this._element).on(P.KEYDOWN, function (e) {
                return t._keydown(e);
              }),
              'hover' === this._config.pause &&
                e(this._element)
                  .on(P.MOUSEENTER, function (e) {
                    return t.pause(e);
                  })
                  .on(P.MOUSELEAVE, function (e) {
                    return t.cycle(e);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (i._addTouchEventListeners = function () {
            var t = this;
            if (this._touchSupported) {
              var i = function (e) {
                  t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()]
                    ? (t.touchStartX = e.originalEvent.clientX)
                    : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                },
                n = function (e) {
                  t._pointerEvent &&
                    j[e.originalEvent.pointerType.toUpperCase()] &&
                    (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    'hover' === t._config.pause &&
                      (t.pause(),
                      t.touchTimeout && clearTimeout(t.touchTimeout),
                      (t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e);
                      }, 500 + t._config.interval)));
                };
              e(this._element.querySelectorAll('.carousel-item img')).on(P.DRAG_START, function (t) {
                return t.preventDefault();
              }),
                this._pointerEvent
                  ? (e(this._element).on(P.POINTERDOWN, function (t) {
                      return i(t);
                    }),
                    e(this._element).on(P.POINTERUP, function (t) {
                      return n(t);
                    }),
                    this._element.classList.add('pointer-event'))
                  : (e(this._element).on(P.TOUCHSTART, function (t) {
                      return i(t);
                    }),
                    e(this._element).on(P.TOUCHMOVE, function (e) {
                      var i;
                      t.touchDeltaX =
                        (i = e).originalEvent.touches && 1 < i.originalEvent.touches.length
                          ? 0
                          : i.originalEvent.touches[0].clientX - t.touchStartX;
                    }),
                    e(this._element).on(P.TOUCHEND, function (t) {
                      return n(t);
                    }));
            }
          }),
          (i._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (i._getItemIndex = function (t) {
            return (
              (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll('.carousel-item')) : []),
              this._items.indexOf(t)
            );
          }),
          (i._getItemByDirection = function (t, e) {
            var i = t === D,
              n = t === O,
              o = this._getItemIndex(e);
            if (((n && 0 === o) || (i && o === this._items.length - 1)) && !this._config.wrap) return e;
            var r = (o + (t === O ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r];
          }),
          (i._triggerSlideEvent = function (t, i) {
            var n = this._getItemIndex(t),
              o = this._getItemIndex(this._element.querySelector(L)),
              r = e.Event(P.SLIDE, { relatedTarget: t, direction: i, from: o, to: n });
            return e(this._element).trigger(r), r;
          }),
          (i._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var i = [].slice.call(this._indicatorsElement.querySelectorAll('.active'));
              e(i).removeClass(N);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && e(n).addClass(N);
            }
          }),
          (i._slide = function (t, i) {
            var n,
              o,
              r,
              s = this,
              l = this._element.querySelector(L),
              c = this._getItemIndex(l),
              d = i || (l && this._getItemByDirection(t, l)),
              u = this._getItemIndex(d),
              h = Boolean(this._interval);
            if (
              ((r =
                t === D
                  ? ((n = 'carousel-item-left'), (o = 'carousel-item-next'), 'left')
                  : ((n = 'carousel-item-right'), (o = 'carousel-item-prev'), 'right')),
              d && e(d).hasClass(N))
            )
              this._isSliding = !1;
            else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
              (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(d);
              var p = e.Event(P.SLID, { relatedTarget: d, direction: r, from: c, to: u });
              if (e(this._element).hasClass('slide')) {
                e(d).addClass(o), a.reflow(d), e(l).addClass(n), e(d).addClass(n);
                var f = parseInt(d.getAttribute('data-interval'), 10);
                this._config.interval = f
                  ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), f)
                  : this._config.defaultInterval || this._config.interval;
                var g = a.getTransitionDurationFromElement(l);
                e(l)
                  .one(a.TRANSITION_END, function () {
                    e(d)
                      .removeClass(n + ' ' + o)
                      .addClass(N),
                      e(l).removeClass(N + ' ' + o + ' ' + n),
                      (s._isSliding = !1),
                      setTimeout(function () {
                        return e(s._element).trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else e(l).removeClass(N), e(d).addClass(N), (this._isSliding = !1), e(this._element).trigger(p);
              h && this.cycle();
            }
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(S),
                o = r({}, $, e(this).data());
              'object' == typeof i && (o = r({}, o, i));
              var s = 'string' == typeof i ? i : o.slide;
              if ((n || ((n = new t(this, o)), e(this).data(S, n)), 'number' == typeof i)) n.to(i);
              else if ('string' == typeof s) {
                if (void 0 === n[s]) throw new TypeError('No method named "' + s + '"');
                n[s]();
              } else o.interval && o.ride && (n.pause(), n.cycle());
            });
          }),
          (t._dataApiClickHandler = function (i) {
            var n = a.getSelectorFromElement(this);
            if (n) {
              var o = e(n)[0];
              if (o && e(o).hasClass('carousel')) {
                var s = r({}, e(o).data(), e(this).data()),
                  l = this.getAttribute('data-slide-to');
                l && (s.interval = !1), t._jQueryInterface.call(e(o), s), l && e(o).data(S).to(l), i.preventDefault();
              }
            }
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return $;
              },
            },
          ]),
          t
        );
      })();
    e(document).on(P.CLICK_DATA_API, '[data-slide], [data-slide-to]', H._dataApiClickHandler),
      e(window).on(P.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), i = 0, n = t.length;
          i < n;
          i++
        ) {
          var o = e(t[i]);
          H._jQueryInterface.call(o, o.data());
        }
      }),
      (e.fn[T] = H._jQueryInterface),
      (e.fn[T].Constructor = H),
      (e.fn[T].noConflict = function () {
        return (e.fn[T] = A), H._jQueryInterface;
      });
    var M = 'collapse',
      z = 'bs.collapse',
      q = '.' + z,
      W = e.fn[M],
      F = { toggle: !0, parent: '' },
      R = { toggle: 'boolean', parent: '(string|element)' },
      B = {
        SHOW: 'show' + q,
        SHOWN: 'shown' + q,
        HIDE: 'hide' + q,
        HIDDEN: 'hidden' + q,
        CLICK_DATA_API: 'click' + q + '.data-api',
      },
      U = 'show',
      Q = 'collapse',
      Y = 'collapsing',
      K = 'collapsed',
      X = '[data-toggle="collapse"]',
      V = (function () {
        function t(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'
              )
            ));
          for (var i = [].slice.call(document.querySelectorAll(X)), n = 0, o = i.length; n < o; n++) {
            var r = i[n],
              s = a.getSelectorFromElement(r),
              l = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                return e === t;
              });
            null !== s && 0 < l.length && ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var i = t.prototype;
        return (
          (i.toggle = function () {
            e(this._element).hasClass(U) ? this.hide() : this.show();
          }),
          (i.show = function () {
            var i,
              n,
              o = this;
            if (
              !(
                this._isTransitioning ||
                e(this._element).hasClass(U) ||
                (this._parent &&
                  0 ===
                    (i = [].slice.call(this._parent.querySelectorAll('.show, .collapsing')).filter(function (t) {
                      return 'string' == typeof o._config.parent
                        ? t.getAttribute('data-parent') === o._config.parent
                        : t.classList.contains(Q);
                    })).length &&
                  (i = null),
                i && (n = e(i).not(this._selector).data(z)) && n._isTransitioning)
              )
            ) {
              var r = e.Event(B.SHOW);
              if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                i && (t._jQueryInterface.call(e(i).not(this._selector), 'hide'), n || e(i).data(z, null));
                var s = this._getDimension();
                e(this._element).removeClass(Q).addClass(Y),
                  (this._element.style[s] = 0),
                  this._triggerArray.length && e(this._triggerArray).removeClass(K).attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var l = 'scroll' + (s[0].toUpperCase() + s.slice(1)),
                  c = a.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(a.TRANSITION_END, function () {
                    e(o._element).removeClass(Y).addClass(Q).addClass(U),
                      (o._element.style[s] = ''),
                      o.setTransitioning(!1),
                      e(o._element).trigger(B.SHOWN);
                  })
                  .emulateTransitionEnd(c),
                  (this._element.style[s] = this._element[l] + 'px');
              }
            }
          }),
          (i.hide = function () {
            var t = this;
            if (!this._isTransitioning && e(this._element).hasClass(U)) {
              var i = e.Event(B.HIDE);
              if ((e(this._element).trigger(i), !i.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px'),
                  a.reflow(this._element),
                  e(this._element).addClass(Y).removeClass(Q).removeClass(U);
                var o = this._triggerArray.length;
                if (0 < o)
                  for (var r = 0; r < o; r++) {
                    var s = this._triggerArray[r],
                      l = a.getSelectorFromElement(s);
                    null !== l &&
                      (e([].slice.call(document.querySelectorAll(l))).hasClass(U) ||
                        e(s).addClass(K).attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[n] = '');
                var c = a.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(a.TRANSITION_END, function () {
                    t.setTransitioning(!1), e(t._element).removeClass(Y).addClass(Q).trigger(B.HIDDEN);
                  })
                  .emulateTransitionEnd(c);
              }
            }
          }),
          (i.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (i.dispose = function () {
            e.removeData(this._element, z),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (i._getConfig = function (t) {
            return ((t = r({}, F, t)).toggle = Boolean(t.toggle)), a.typeCheckConfig(M, t, R), t;
          }),
          (i._getDimension = function () {
            return e(this._element).hasClass('width') ? 'width' : 'height';
          }),
          (i._getParent = function () {
            var i,
              n = this;
            a.isElement(this._config.parent)
              ? ((i = this._config.parent), void 0 !== this._config.parent.jquery && (i = this._config.parent[0]))
              : (i = document.querySelector(this._config.parent));
            var o = [].slice.call(
              i.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]')
            );
            return (
              e(o).each(function (e, i) {
                n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
              }),
              i
            );
          }),
          (i._addAriaAndCollapsedClass = function (t, i) {
            var n = e(t).hasClass(U);
            i.length && e(i).toggleClass(K, !n).attr('aria-expanded', n);
          }),
          (t._getTargetFromElement = function (t) {
            var e = a.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                o = n.data(z),
                s = r({}, F, n.data(), 'object' == typeof i && i ? i : {});
              if (
                (!o && s.toggle && /show|hide/.test(i) && (s.toggle = !1),
                o || ((o = new t(this, s)), n.data(z, o)),
                'string' == typeof i)
              ) {
                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                o[i]();
              }
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return F;
              },
            },
          ]),
          t
        );
      })();
    e(document).on(B.CLICK_DATA_API, X, function (t) {
      'A' === t.currentTarget.tagName && t.preventDefault();
      var i = e(this),
        n = a.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(n));
      e(o).each(function () {
        var t = e(this),
          n = t.data(z) ? 'toggle' : i.data();
        V._jQueryInterface.call(t, n);
      });
    }),
      (e.fn[M] = V._jQueryInterface),
      (e.fn[M].Constructor = V),
      (e.fn[M].noConflict = function () {
        return (e.fn[M] = W), V._jQueryInterface;
      });
    var Z = 'dropdown',
      G = 'bs.dropdown',
      J = '.' + G,
      tt = '.data-api',
      et = e.fn[Z],
      it = new RegExp('38|40|27'),
      nt = {
        HIDE: 'hide' + J,
        HIDDEN: 'hidden' + J,
        SHOW: 'show' + J,
        SHOWN: 'shown' + J,
        CLICK: 'click' + J,
        CLICK_DATA_API: 'click' + J + tt,
        KEYDOWN_DATA_API: 'keydown' + J + tt,
        KEYUP_DATA_API: 'keyup' + J + tt,
      },
      ot = 'disabled',
      rt = 'show',
      st = 'dropdown-menu-right',
      at = '[data-toggle="dropdown"]',
      lt = '.dropdown-menu',
      ct = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic' },
      dt = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
      },
      ut = (function () {
        function t(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var n = t.prototype;
        return (
          (n.toggle = function () {
            if (!this._element.disabled && !e(this._element).hasClass(ot)) {
              var n = t._getParentFromElement(this._element),
                o = e(this._menu).hasClass(rt);
              if ((t._clearMenus(), !o)) {
                var r = { relatedTarget: this._element },
                  s = e.Event(nt.SHOW, r);
                if ((e(n).trigger(s), !s.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === i)
                      throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    var l = this._element;
                    'parent' === this._config.reference
                      ? (l = n)
                      : a.isElement(this._config.reference) &&
                        ((l = this._config.reference),
                        void 0 !== this._config.reference.jquery && (l = this._config.reference[0])),
                      'scrollParent' !== this._config.boundary && e(n).addClass('position-static'),
                      (this._popper = new i(l, this._menu, this._getPopperConfig()));
                  }
                  'ontouchstart' in document.documentElement &&
                    0 === e(n).closest('.navbar-nav').length &&
                    e(document.body).children().on('mouseover', null, e.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    e(this._menu).toggleClass(rt),
                    e(n).toggleClass(rt).trigger(e.Event(nt.SHOWN, r));
                }
              }
            }
          }),
          (n.show = function () {
            if (!(this._element.disabled || e(this._element).hasClass(ot) || e(this._menu).hasClass(rt))) {
              var i = { relatedTarget: this._element },
                n = e.Event(nt.SHOW, i),
                o = t._getParentFromElement(this._element);
              e(o).trigger(n),
                n.isDefaultPrevented() ||
                  (e(this._menu).toggleClass(rt), e(o).toggleClass(rt).trigger(e.Event(nt.SHOWN, i)));
            }
          }),
          (n.hide = function () {
            if (!this._element.disabled && !e(this._element).hasClass(ot) && e(this._menu).hasClass(rt)) {
              var i = { relatedTarget: this._element },
                n = e.Event(nt.HIDE, i),
                o = t._getParentFromElement(this._element);
              e(o).trigger(n),
                n.isDefaultPrevented() ||
                  (e(this._menu).toggleClass(rt), e(o).toggleClass(rt).trigger(e.Event(nt.HIDDEN, i)));
            }
          }),
          (n.dispose = function () {
            e.removeData(this._element, G),
              e(this._element).off(J),
              (this._element = null),
              (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (n.update = function () {
            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
          }),
          (n._addEventListeners = function () {
            var t = this;
            e(this._element).on(nt.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (n._getConfig = function (t) {
            return (
              (t = r({}, this.constructor.Default, e(this._element).data(), t)),
              a.typeCheckConfig(Z, t, this.constructor.DefaultType),
              t
            );
          }),
          (n._getMenuElement = function () {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(lt));
            }
            return this._menu;
          }),
          (n._getPlacement = function () {
            var t = e(this._element.parentNode),
              i = 'bottom-start';
            return (
              t.hasClass('dropup')
                ? ((i = 'top-start'), e(this._menu).hasClass(st) && (i = 'top-end'))
                : t.hasClass('dropright')
                ? (i = 'right-start')
                : t.hasClass('dropleft')
                ? (i = 'left-start')
                : e(this._menu).hasClass(st) && (i = 'bottom-end'),
              i
            );
          }),
          (n._detectNavbar = function () {
            return 0 < e(this._element).closest('.navbar').length;
          }),
          (n._getOffset = function () {
            var t = this,
              e = {};
            return (
              'function' == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {})), e;
                  })
                : (e.offset = this._config.offset),
              e
            );
          }),
          (n._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return 'static' === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(G);
              if (
                (n || ((n = new t(this, 'object' == typeof i ? i : null)), e(this).data(G, n)), 'string' == typeof i)
              ) {
                if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                n[i]();
              }
            });
          }),
          (t._clearMenus = function (i) {
            if (!i || (3 !== i.which && ('keyup' !== i.type || 9 === i.which)))
              for (var n = [].slice.call(document.querySelectorAll(at)), o = 0, r = n.length; o < r; o++) {
                var s = t._getParentFromElement(n[o]),
                  a = e(n[o]).data(G),
                  l = { relatedTarget: n[o] };
                if ((i && 'click' === i.type && (l.clickEvent = i), a)) {
                  var c = a._menu;
                  if (
                    e(s).hasClass(rt) &&
                    !(
                      i &&
                      (('click' === i.type && /input|textarea/i.test(i.target.tagName)) ||
                        ('keyup' === i.type && 9 === i.which)) &&
                      e.contains(s, i.target)
                    )
                  ) {
                    var d = e.Event(nt.HIDE, l);
                    e(s).trigger(d),
                      d.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          e(document.body).children().off('mouseover', null, e.noop),
                        n[o].setAttribute('aria-expanded', 'false'),
                        e(c).removeClass(rt),
                        e(s).removeClass(rt).trigger(e.Event(nt.HIDDEN, l)));
                  }
                }
              }
          }),
          (t._getParentFromElement = function (t) {
            var e,
              i = a.getSelectorFromElement(t);
            return i && (e = document.querySelector(i)), e || t.parentNode;
          }),
          (t._dataApiKeydownHandler = function (i) {
            if (
              (/input|textarea/i.test(i.target.tagName)
                ? !(
                    32 === i.which ||
                    (27 !== i.which && ((40 !== i.which && 38 !== i.which) || e(i.target).closest(lt).length))
                  )
                : it.test(i.which)) &&
              (i.preventDefault(), i.stopPropagation(), !this.disabled && !e(this).hasClass(ot))
            ) {
              var n = t._getParentFromElement(this),
                o = e(n).hasClass(rt);
              if (o && (!o || (27 !== i.which && 32 !== i.which))) {
                var r = [].slice.call(
                  n.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)')
                );
                if (0 !== r.length) {
                  var s = r.indexOf(i.target);
                  38 === i.which && 0 < s && s--,
                    40 === i.which && s < r.length - 1 && s++,
                    s < 0 && (s = 0),
                    r[s].focus();
                }
              } else {
                if (27 === i.which) {
                  var a = n.querySelector(at);
                  e(a).trigger('focus');
                }
                e(this).trigger('click');
              }
            }
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return ct;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return dt;
              },
            },
          ]),
          t
        );
      })();
    e(document)
      .on(nt.KEYDOWN_DATA_API, at, ut._dataApiKeydownHandler)
      .on(nt.KEYDOWN_DATA_API, lt, ut._dataApiKeydownHandler)
      .on(nt.CLICK_DATA_API + ' ' + nt.KEYUP_DATA_API, ut._clearMenus)
      .on(nt.CLICK_DATA_API, at, function (t) {
        t.preventDefault(), t.stopPropagation(), ut._jQueryInterface.call(e(this), 'toggle');
      })
      .on(nt.CLICK_DATA_API, '.dropdown form', function (t) {
        t.stopPropagation();
      }),
      (e.fn[Z] = ut._jQueryInterface),
      (e.fn[Z].Constructor = ut),
      (e.fn[Z].noConflict = function () {
        return (e.fn[Z] = et), ut._jQueryInterface;
      });
    var ht = 'modal',
      pt = 'bs.modal',
      ft = '.' + pt,
      gt = e.fn[ht],
      mt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      vt = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
      yt = {
        HIDE: 'hide' + ft,
        HIDDEN: 'hidden' + ft,
        SHOW: 'show' + ft,
        SHOWN: 'shown' + ft,
        FOCUSIN: 'focusin' + ft,
        RESIZE: 'resize' + ft,
        CLICK_DISMISS: 'click.dismiss' + ft,
        KEYDOWN_DISMISS: 'keydown.dismiss' + ft,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + ft,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ft,
        CLICK_DATA_API: 'click' + ft + '.data-api',
      },
      _t = 'modal-open',
      wt = 'fade',
      bt = 'show',
      xt = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      Ct = '.sticky-top',
      Tt = (function () {
        function t(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector('.modal-dialog')),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var i = t.prototype;
        return (
          (i.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (i.show = function (t) {
            var i = this;
            if (!this._isShown && !this._isTransitioning) {
              e(this._element).hasClass(wt) && (this._isTransitioning = !0);
              var n = e.Event(yt.SHOW, { relatedTarget: t });
              e(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  e(this._element).on(yt.CLICK_DISMISS, '[data-dismiss="modal"]', function (t) {
                    return i.hide(t);
                  }),
                  e(this._dialog).on(yt.MOUSEDOWN_DISMISS, function () {
                    e(i._element).one(yt.MOUSEUP_DISMISS, function (t) {
                      e(t.target).is(i._element) && (i._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return i._showElement(t);
                  }));
            }
          }),
          (i.hide = function (t) {
            var i = this;
            if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
              var n = e.Event(yt.HIDE);
              if ((e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                this._isShown = !1;
                var o = e(this._element).hasClass(wt);
                if (
                  (o && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  e(document).off(yt.FOCUSIN),
                  e(this._element).removeClass(bt),
                  e(this._element).off(yt.CLICK_DISMISS),
                  e(this._dialog).off(yt.MOUSEDOWN_DISMISS),
                  o)
                ) {
                  var r = a.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(a.TRANSITION_END, function (t) {
                      return i._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (i.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return e(t).off(ft);
            }),
              e(document).off(yt.FOCUSIN),
              e.removeData(this._element, pt),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (i.handleUpdate = function () {
            this._adjustDialog();
          }),
          (i._getConfig = function (t) {
            return (t = r({}, mt, t)), a.typeCheckConfig(ht, t, vt), t;
          }),
          (i._showElement = function (t) {
            var i = this,
              n = e(this._element).hasClass(wt);
            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              e(this._dialog).hasClass('modal-dialog-scrollable')
                ? (this._dialog.querySelector('.modal-body').scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && a.reflow(this._element),
              e(this._element).addClass(bt),
              this._config.focus && this._enforceFocus();
            var o = e.Event(yt.SHOWN, { relatedTarget: t }),
              r = function () {
                i._config.focus && i._element.focus(), (i._isTransitioning = !1), e(i._element).trigger(o);
              };
            if (n) {
              var s = a.getTransitionDurationFromElement(this._dialog);
              e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
            } else r();
          }),
          (i._enforceFocus = function () {
            var t = this;
            e(document)
              .off(yt.FOCUSIN)
              .on(yt.FOCUSIN, function (i) {
                document !== i.target &&
                  t._element !== i.target &&
                  0 === e(t._element).has(i.target).length &&
                  t._element.focus();
              });
          }),
          (i._setEscapeEvent = function () {
            var t = this;
            this._isShown && this._config.keyboard
              ? e(this._element).on(yt.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                })
              : this._isShown || e(this._element).off(yt.KEYDOWN_DISMISS);
          }),
          (i._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? e(window).on(yt.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
              : e(window).off(yt.RESIZE);
          }),
          (i._hideModal = function () {
            var t = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                e(document.body).removeClass(_t),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  e(t._element).trigger(yt.HIDDEN);
              });
          }),
          (i._removeBackdrop = function () {
            this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
          }),
          (i._showBackdrop = function (t) {
            var i = this,
              n = e(this._element).hasClass(wt) ? wt : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                n && this._backdrop.classList.add(n),
                e(this._backdrop).appendTo(document.body),
                e(this._element).on(yt.CLICK_DISMISS, function (t) {
                  i._ignoreBackdropClick
                    ? (i._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget && ('static' === i._config.backdrop ? i._element.focus() : i.hide());
                }),
                n && a.reflow(this._backdrop),
                e(this._backdrop).addClass(bt),
                !t)
              )
                return;
              if (!n) return void t();
              var o = a.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o);
            } else if (!this._isShown && this._backdrop) {
              e(this._backdrop).removeClass(bt);
              var r = function () {
                i._removeBackdrop(), t && t();
              };
              if (e(this._element).hasClass(wt)) {
                var s = a.getTransitionDurationFromElement(this._backdrop);
                e(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
              } else r();
            } else t && t();
          }),
          (i._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px');
          }),
          (i._resetAdjustments = function () {
            (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
          }),
          (i._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (i._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              var i = [].slice.call(document.querySelectorAll(xt)),
                n = [].slice.call(document.querySelectorAll(Ct));
              e(i).each(function (i, n) {
                var o = n.style.paddingRight,
                  r = e(n).css('padding-right');
                e(n)
                  .data('padding-right', o)
                  .css('padding-right', parseFloat(r) + t._scrollbarWidth + 'px');
              }),
                e(n).each(function (i, n) {
                  var o = n.style.marginRight,
                    r = e(n).css('margin-right');
                  e(n)
                    .data('margin-right', o)
                    .css('margin-right', parseFloat(r) - t._scrollbarWidth + 'px');
                });
              var o = document.body.style.paddingRight,
                r = e(document.body).css('padding-right');
              e(document.body)
                .data('padding-right', o)
                .css('padding-right', parseFloat(r) + this._scrollbarWidth + 'px');
            }
            e(document.body).addClass(_t);
          }),
          (i._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(xt));
            e(t).each(function (t, i) {
              var n = e(i).data('padding-right');
              e(i).removeData('padding-right'), (i.style.paddingRight = n || '');
            });
            var i = [].slice.call(document.querySelectorAll('' + Ct));
            e(i).each(function (t, i) {
              var n = e(i).data('margin-right');
              void 0 !== n && e(i).css('margin-right', n).removeData('margin-right');
            });
            var n = e(document.body).data('padding-right');
            e(document.body).removeData('padding-right'), (document.body.style.paddingRight = n || '');
          }),
          (i._getScrollbarWidth = function () {
            var t = document.createElement('div');
            (t.className = 'modal-scrollbar-measure'), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (t._jQueryInterface = function (i, n) {
            return this.each(function () {
              var o = e(this).data(pt),
                s = r({}, mt, e(this).data(), 'object' == typeof i && i ? i : {});
              if ((o || ((o = new t(this, s)), e(this).data(pt, o)), 'string' == typeof i)) {
                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                o[i](n);
              } else s.show && o.show(n);
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return mt;
              },
            },
          ]),
          t
        );
      })();
    e(document).on(yt.CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
      var i,
        n = this,
        o = a.getSelectorFromElement(this);
      o && (i = document.querySelector(o));
      var s = e(i).data(pt) ? 'toggle' : r({}, e(i).data(), e(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
      var l = e(i).one(yt.SHOW, function (t) {
        t.isDefaultPrevented() ||
          l.one(yt.HIDDEN, function () {
            e(n).is(':visible') && n.focus();
          });
      });
      Tt._jQueryInterface.call(e(i), s, this);
    }),
      (e.fn[ht] = Tt._jQueryInterface),
      (e.fn[ht].Constructor = Tt),
      (e.fn[ht].noConflict = function () {
        return (e.fn[ht] = gt), Tt._jQueryInterface;
      });
    var St = 'tooltip',
      kt = 'bs.tooltip',
      Et = '.' + kt,
      At = e.fn[St],
      $t = 'bs-tooltip',
      It = new RegExp('(^|\\s)' + $t + '\\S+', 'g'),
      Dt = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
      },
      Ot = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
      Pt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
      },
      Nt = 'show',
      Lt = {
        HIDE: 'hide' + Et,
        HIDDEN: 'hidden' + Et,
        SHOW: 'show' + Et,
        SHOWN: 'shown' + Et,
        INSERTED: 'inserted' + Et,
        CLICK: 'click' + Et,
        FOCUSIN: 'focusin' + Et,
        FOCUSOUT: 'focusout' + Et,
        MOUSEENTER: 'mouseenter' + Et,
        MOUSELEAVE: 'mouseleave' + Et,
      },
      jt = 'fade',
      Ht = 'show',
      Mt = 'hover',
      zt = 'focus',
      qt = (function () {
        function t(t, e) {
          if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var n = t.prototype;
        return (
          (n.enable = function () {
            this._isEnabled = !0;
          }),
          (n.disable = function () {
            this._isEnabled = !1;
          }),
          (n.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (n.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var i = this.constructor.DATA_KEY,
                  n = e(t.currentTarget).data(i);
                n ||
                  ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                  e(t.currentTarget).data(i, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
              } else {
                if (e(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (n.dispose = function () {
            clearTimeout(this._timeout),
              e.removeData(this.element, this.constructor.DATA_KEY),
              e(this.element).off(this.constructor.EVENT_KEY),
              e(this.element).closest('.modal').off('hide.bs.modal'),
              this.tip && e(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (n.show = function () {
            var t = this;
            if ('none' === e(this.element).css('display')) throw new Error('Please use show on visible elements');
            var n = e.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              e(this.element).trigger(n);
              var o = a.findShadowRoot(this.element),
                r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
              if (n.isDefaultPrevented() || !r) return;
              var s = this.getTipElement(),
                l = a.getUID(this.constructor.NAME);
              s.setAttribute('id', l),
                this.element.setAttribute('aria-describedby', l),
                this.setContent(),
                this.config.animation && e(s).addClass(jt);
              var c =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, s, this.element)
                    : this.config.placement,
                d = this._getAttachment(c);
              this.addAttachmentClass(d);
              var u = this._getContainer();
              e(s).data(this.constructor.DATA_KEY, this),
                e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(u),
                e(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new i(this.element, s, {
                  placement: d,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: '.arrow' },
                    preventOverflow: { boundariesElement: this.config.boundary },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    return t._handlePopperPlacementChange(e);
                  },
                })),
                e(s).addClass(Ht),
                'ontouchstart' in document.documentElement && e(document.body).children().on('mouseover', null, e.noop);
              var h = function () {
                t.config.animation && t._fixTransition();
                var i = t._hoverState;
                (t._hoverState = null),
                  e(t.element).trigger(t.constructor.Event.SHOWN),
                  'out' === i && t._leave(null, t);
              };
              if (e(this.tip).hasClass(jt)) {
                var p = a.getTransitionDurationFromElement(this.tip);
                e(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(p);
              } else h();
            }
          }),
          (n.hide = function (t) {
            var i = this,
              n = this.getTipElement(),
              o = e.Event(this.constructor.Event.HIDE),
              r = function () {
                i._hoverState !== Nt && n.parentNode && n.parentNode.removeChild(n),
                  i._cleanTipClass(),
                  i.element.removeAttribute('aria-describedby'),
                  e(i.element).trigger(i.constructor.Event.HIDDEN),
                  null !== i._popper && i._popper.destroy(),
                  t && t();
              };
            if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
              if (
                (e(n).removeClass(Ht),
                'ontouchstart' in document.documentElement &&
                  e(document.body).children().off('mouseover', null, e.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[zt] = !1),
                (this._activeTrigger[Mt] = !1),
                e(this.tip).hasClass(jt))
              ) {
                var s = a.getTransitionDurationFromElement(n);
                e(n).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
              } else r();
              this._hoverState = '';
            }
          }),
          (n.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (n.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (n.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass($t + '-' + t);
          }),
          (n.getTipElement = function () {
            return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
          }),
          (n.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(e(t.querySelectorAll('.tooltip-inner')), this.getTitle()),
              e(t).removeClass(jt + ' ' + Ht);
          }),
          (n.setElementContent = function (t, i) {
            var n = this.config.html;
            'object' == typeof i && (i.nodeType || i.jquery)
              ? n
                ? e(i).parent().is(t) || t.empty().append(i)
                : t.text(e(i).text())
              : t[n ? 'html' : 'text'](i);
          }),
          (n.getTitle = function () {
            var t = this.element.getAttribute('data-original-title');
            return (
              t ||
                (t = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
              t
            );
          }),
          (n._getOffset = function () {
            var t = this,
              e = {};
            return (
              'function' == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {})), e;
                  })
                : (e.offset = this.config.offset),
              e
            );
          }),
          (n._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : a.isElement(this.config.container)
              ? e(this.config.container)
              : e(document).find(this.config.container);
          }),
          (n._getAttachment = function (t) {
            return Ot[t.toUpperCase()];
          }),
          (n._setListeners = function () {
            var t = this;
            this.config.trigger.split(' ').forEach(function (i) {
              if ('click' === i)
                e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                  return t.toggle(e);
                });
              else if ('manual' !== i) {
                var n = i === Mt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                  o = i === Mt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                e(t.element)
                  .on(n, t.config.selector, function (e) {
                    return t._enter(e);
                  })
                  .on(o, t.config.selector, function (e) {
                    return t._leave(e);
                  });
              }
            }),
              e(this.element)
                .closest('.modal')
                .on('hide.bs.modal', function () {
                  t.element && t.hide();
                }),
              this.config.selector
                ? (this.config = r({}, this.config, { trigger: 'manual', selector: '' }))
                : this._fixTitle();
          }),
          (n._fixTitle = function () {
            var t = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== t) &&
              (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''),
              this.element.setAttribute('title', ''));
          }),
          (n._enter = function (t, i) {
            var n = this.constructor.DATA_KEY;
            (i = i || e(t.currentTarget).data(n)) ||
              ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
              t && (i._activeTrigger['focusin' === t.type ? zt : Mt] = !0),
              e(i.getTipElement()).hasClass(Ht) || i._hoverState === Nt
                ? (i._hoverState = Nt)
                : (clearTimeout(i._timeout),
                  (i._hoverState = Nt),
                  i.config.delay && i.config.delay.show
                    ? (i._timeout = setTimeout(function () {
                        i._hoverState === Nt && i.show();
                      }, i.config.delay.show))
                    : i.show());
          }),
          (n._leave = function (t, i) {
            var n = this.constructor.DATA_KEY;
            (i = i || e(t.currentTarget).data(n)) ||
              ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
              t && (i._activeTrigger['focusout' === t.type ? zt : Mt] = !1),
              i._isWithActiveTrigger() ||
                (clearTimeout(i._timeout),
                (i._hoverState = 'out'),
                i.config.delay && i.config.delay.hide
                  ? (i._timeout = setTimeout(function () {
                      'out' === i._hoverState && i.hide();
                    }, i.config.delay.hide))
                  : i.hide());
          }),
          (n._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (n._getConfig = function (t) {
            return (
              'number' ==
                typeof (t = r({}, this.constructor.Default, e(this.element).data(), 'object' == typeof t && t ? t : {}))
                  .delay && (t.delay = { show: t.delay, hide: t.delay }),
              'number' == typeof t.title && (t.title = t.title.toString()),
              'number' == typeof t.content && (t.content = t.content.toString()),
              a.typeCheckConfig(St, t, this.constructor.DefaultType),
              t
            );
          }),
          (n._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
          }),
          (n._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              i = t.attr('class').match(It);
            null !== i && i.length && t.removeClass(i.join(''));
          }),
          (n._handlePopperPlacementChange = function (t) {
            (this.tip = t.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (n._fixTransition = function () {
            var t = this.getTipElement(),
              i = this.config.animation;
            null === t.getAttribute('x-placement') &&
              (e(t).removeClass(jt),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = i));
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(kt),
                o = 'object' == typeof i && i;
              if (
                (n || !/dispose|hide/.test(i)) &&
                (n || ((n = new t(this, o)), e(this).data(kt, n)), 'string' == typeof i)
              ) {
                if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                n[i]();
              }
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return Pt;
              },
            },
            {
              key: 'NAME',
              get: function () {
                return St;
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return kt;
              },
            },
            {
              key: 'Event',
              get: function () {
                return Lt;
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return Et;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Dt;
              },
            },
          ]),
          t
        );
      })();
    (e.fn[St] = qt._jQueryInterface),
      (e.fn[St].Constructor = qt),
      (e.fn[St].noConflict = function () {
        return (e.fn[St] = At), qt._jQueryInterface;
      });
    var Wt = 'popover',
      Ft = 'bs.popover',
      Rt = '.' + Ft,
      Bt = e.fn[Wt],
      Ut = 'bs-popover',
      Qt = new RegExp('(^|\\s)' + Ut + '\\S+', 'g'),
      Yt = r({}, qt.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      Kt = r({}, qt.DefaultType, { content: '(string|element|function)' }),
      Xt = {
        HIDE: 'hide' + Rt,
        HIDDEN: 'hidden' + Rt,
        SHOW: 'show' + Rt,
        SHOWN: 'shown' + Rt,
        INSERTED: 'inserted' + Rt,
        CLICK: 'click' + Rt,
        FOCUSIN: 'focusin' + Rt,
        FOCUSOUT: 'focusout' + Rt,
        MOUSEENTER: 'mouseenter' + Rt,
        MOUSELEAVE: 'mouseleave' + Rt,
      },
      Vt = (function (t) {
        var i, n;
        function r() {
          return t.apply(this, arguments) || this;
        }
        (n = t), ((i = r).prototype = Object.create(n.prototype)), ((i.prototype.constructor = i).__proto__ = n);
        var s = r.prototype;
        return (
          (s.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass(Ut + '-' + t);
          }),
          (s.getTipElement = function () {
            return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
          }),
          (s.setContent = function () {
            var t = e(this.getTipElement());
            this.setElementContent(t.find('.popover-header'), this.getTitle());
            var i = this._getContent();
            'function' == typeof i && (i = i.call(this.element)),
              this.setElementContent(t.find('.popover-body'), i),
              t.removeClass('fade show');
          }),
          (s._getContent = function () {
            return this.element.getAttribute('data-content') || this.config.content;
          }),
          (s._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              i = t.attr('class').match(Qt);
            null !== i && 0 < i.length && t.removeClass(i.join(''));
          }),
          (r._jQueryInterface = function (t) {
            return this.each(function () {
              var i = e(this).data(Ft),
                n = 'object' == typeof t ? t : null;
              if (
                (i || !/dispose|hide/.test(t)) &&
                (i || ((i = new r(this, n)), e(this).data(Ft, i)), 'string' == typeof t)
              ) {
                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                i[t]();
              }
            });
          }),
          o(r, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return Yt;
              },
            },
            {
              key: 'NAME',
              get: function () {
                return Wt;
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Ft;
              },
            },
            {
              key: 'Event',
              get: function () {
                return Xt;
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return Rt;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Kt;
              },
            },
          ]),
          r
        );
      })(qt);
    (e.fn[Wt] = Vt._jQueryInterface),
      (e.fn[Wt].Constructor = Vt),
      (e.fn[Wt].noConflict = function () {
        return (e.fn[Wt] = Bt), Vt._jQueryInterface;
      });
    var Zt = 'scrollspy',
      Gt = 'bs.scrollspy',
      Jt = '.' + Gt,
      te = e.fn[Zt],
      ee = { offset: 10, method: 'auto', target: '' },
      ie = { offset: 'number', method: 'string', target: '(string|element)' },
      ne = { ACTIVATE: 'activate' + Jt, SCROLL: 'scroll' + Jt, LOAD_DATA_API: 'load' + Jt + '.data-api' },
      oe = 'active',
      re = '.nav, .list-group',
      se = '.nav-link',
      ae = '.list-group-item',
      le = 'position',
      ce = (function () {
        function t(t, i) {
          var n = this;
          (this._element = t),
            (this._scrollElement = 'BODY' === t.tagName ? window : t),
            (this._config = this._getConfig(i)),
            (this._selector =
              this._config.target +
              ' ' +
              se +
              ',' +
              this._config.target +
              ' ' +
              ae +
              ',' +
              this._config.target +
              ' .dropdown-item'),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            e(this._scrollElement).on(ne.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var i = t.prototype;
        return (
          (i.refresh = function () {
            var t = this,
              i =
                'auto' === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? 'offset'
                    : le
                  : this._config.method,
              n = i === le ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var o,
                    r = a.getSelectorFromElement(t);
                  if ((r && (o = document.querySelector(r)), o)) {
                    var s = o.getBoundingClientRect();
                    if (s.width || s.height) return [e(o)[i]().top + n, r];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (i.dispose = function () {
            e.removeData(this._element, Gt),
              e(this._scrollElement).off(Jt),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (i._getConfig = function (t) {
            if ('string' != typeof (t = r({}, ee, 'object' == typeof t && t ? t : {})).target) {
              var i = e(t.target).attr('id');
              i || ((i = a.getUID(Zt)), e(t.target).attr('id', i)), (t.target = '#' + i);
            }
            return a.typeCheckConfig(Zt, t, ie), t;
          }),
          (i._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }),
          (i._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            );
          }),
          (i._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (i._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
              var n = this._targets[this._targets.length - 1];
              this._activeTarget !== n && this._activate(n);
            } else {
              if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
            }
          }),
          (i._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var i = this._selector.split(',').map(function (e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
              }),
              n = e([].slice.call(document.querySelectorAll(i.join(','))));
            n.hasClass('dropdown-item')
              ? (n.closest('.dropdown').find('.dropdown-toggle').addClass(oe), n.addClass(oe))
              : (n.addClass(oe),
                n
                  .parents(re)
                  .prev(se + ', ' + ae)
                  .addClass(oe),
                n.parents(re).prev('.nav-item').children(se).addClass(oe)),
              e(this._scrollElement).trigger(ne.ACTIVATE, { relatedTarget: t });
          }),
          (i._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (t) {
                return t.classList.contains(oe);
              })
              .forEach(function (t) {
                return t.classList.remove(oe);
              });
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(Gt);
              if ((n || ((n = new t(this, 'object' == typeof i && i)), e(this).data(Gt, n)), 'string' == typeof i)) {
                if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                n[i]();
              }
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'Default',
              get: function () {
                return ee;
              },
            },
          ]),
          t
        );
      })();
    e(window).on(ne.LOAD_DATA_API, function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), i = t.length; i--; ) {
        var n = e(t[i]);
        ce._jQueryInterface.call(n, n.data());
      }
    }),
      (e.fn[Zt] = ce._jQueryInterface),
      (e.fn[Zt].Constructor = ce),
      (e.fn[Zt].noConflict = function () {
        return (e.fn[Zt] = te), ce._jQueryInterface;
      });
    var de = 'bs.tab',
      ue = '.' + de,
      he = e.fn.tab,
      pe = {
        HIDE: 'hide' + ue,
        HIDDEN: 'hidden' + ue,
        SHOW: 'show' + ue,
        SHOWN: 'shown' + ue,
        CLICK_DATA_API: 'click' + ue + '.data-api',
      },
      fe = 'active',
      ge = '.active',
      me = '> li > .active',
      ve = (function () {
        function t(t) {
          this._element = t;
        }
        var i = t.prototype;
        return (
          (i.show = function () {
            var t = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  e(this._element).hasClass(fe)) ||
                e(this._element).hasClass('disabled')
              )
            ) {
              var i,
                n,
                o = e(this._element).closest('.nav, .list-group')[0],
                r = a.getSelectorFromElement(this._element);
              if (o) {
                var s = 'UL' === o.nodeName || 'OL' === o.nodeName ? me : ge;
                n = (n = e.makeArray(e(o).find(s)))[n.length - 1];
              }
              var l = e.Event(pe.HIDE, { relatedTarget: this._element }),
                c = e.Event(pe.SHOW, { relatedTarget: n });
              if (
                (n && e(n).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented())
              ) {
                r && (i = document.querySelector(r)), this._activate(this._element, o);
                var d = function () {
                  var i = e.Event(pe.HIDDEN, { relatedTarget: t._element }),
                    o = e.Event(pe.SHOWN, { relatedTarget: n });
                  e(n).trigger(i), e(t._element).trigger(o);
                };
                i ? this._activate(i, i.parentNode, d) : d();
              }
            }
          }),
          (i.dispose = function () {
            e.removeData(this._element, de), (this._element = null);
          }),
          (i._activate = function (t, i, n) {
            var o = this,
              r = (!i || ('UL' !== i.nodeName && 'OL' !== i.nodeName) ? e(i).children(ge) : e(i).find(me))[0],
              s = n && r && e(r).hasClass('fade'),
              l = function () {
                return o._transitionComplete(t, r, n);
              };
            if (r && s) {
              var c = a.getTransitionDurationFromElement(r);
              e(r).removeClass('show').one(a.TRANSITION_END, l).emulateTransitionEnd(c);
            } else l();
          }),
          (i._transitionComplete = function (t, i, n) {
            if (i) {
              e(i).removeClass(fe);
              var o = e(i.parentNode).find('> .dropdown-menu .active')[0];
              o && e(o).removeClass(fe), 'tab' === i.getAttribute('role') && i.setAttribute('aria-selected', !1);
            }
            if (
              (e(t).addClass(fe),
              'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0),
              a.reflow(t),
              t.classList.contains('fade') && t.classList.add('show'),
              t.parentNode && e(t.parentNode).hasClass('dropdown-menu'))
            ) {
              var r = e(t).closest('.dropdown')[0];
              if (r) {
                var s = [].slice.call(r.querySelectorAll('.dropdown-toggle'));
                e(s).addClass(fe);
              }
              t.setAttribute('aria-expanded', !0);
            }
            n && n();
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                o = n.data(de);
              if ((o || ((o = new t(this)), n.data(de, o)), 'string' == typeof i)) {
                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                o[i]();
              }
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
          ]),
          t
        );
      })();
    e(document).on(pe.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
      t.preventDefault(), ve._jQueryInterface.call(e(this), 'show');
    }),
      (e.fn.tab = ve._jQueryInterface),
      (e.fn.tab.Constructor = ve),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = he), ve._jQueryInterface;
      });
    var ye = 'toast',
      _e = 'bs.toast',
      we = '.' + _e,
      be = e.fn[ye],
      xe = {
        CLICK_DISMISS: 'click.dismiss' + we,
        HIDE: 'hide' + we,
        HIDDEN: 'hidden' + we,
        SHOW: 'show' + we,
        SHOWN: 'shown' + we,
      },
      Ce = 'show',
      Te = 'showing',
      Se = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      ke = { animation: !0, autohide: !0, delay: 500 },
      Ee = (function () {
        function t(t, e) {
          (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
        }
        var i = t.prototype;
        return (
          (i.show = function () {
            var t = this;
            e(this._element).trigger(xe.SHOW), this._config.animation && this._element.classList.add('fade');
            var i = function () {
              t._element.classList.remove(Te),
                t._element.classList.add(Ce),
                e(t._element).trigger(xe.SHOWN),
                t._config.autohide && t.hide();
            };
            if ((this._element.classList.remove('hide'), this._element.classList.add(Te), this._config.animation)) {
              var n = a.getTransitionDurationFromElement(this._element);
              e(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(n);
            } else i();
          }),
          (i.hide = function (t) {
            var i = this;
            this._element.classList.contains(Ce) &&
              (e(this._element).trigger(xe.HIDE),
              t
                ? this._close()
                : (this._timeout = setTimeout(function () {
                    i._close();
                  }, this._config.delay)));
          }),
          (i.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(Ce) && this._element.classList.remove(Ce),
              e(this._element).off(xe.CLICK_DISMISS),
              e.removeData(this._element, _e),
              (this._element = null),
              (this._config = null);
          }),
          (i._getConfig = function (t) {
            return (
              (t = r({}, ke, e(this._element).data(), 'object' == typeof t && t ? t : {})),
              a.typeCheckConfig(ye, t, this.constructor.DefaultType),
              t
            );
          }),
          (i._setListeners = function () {
            var t = this;
            e(this._element).on(xe.CLICK_DISMISS, '[data-dismiss="toast"]', function () {
              return t.hide(!0);
            });
          }),
          (i._close = function () {
            var t = this,
              i = function () {
                t._element.classList.add('hide'), e(t._element).trigger(xe.HIDDEN);
              };
            if ((this._element.classList.remove(Ce), this._config.animation)) {
              var n = a.getTransitionDurationFromElement(this._element);
              e(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(n);
            } else i();
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                o = n.data(_e);
              if ((o || ((o = new t(this, 'object' == typeof i && i)), n.data(_e, o)), 'string' == typeof i)) {
                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                o[i](this);
              }
            });
          }),
          o(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.3.0';
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Se;
              },
            },
            {
              key: 'Default',
              get: function () {
                return ke;
              },
            },
          ]),
          t
        );
      })();
    (e.fn[ye] = Ee._jQueryInterface),
      (e.fn[ye].Constructor = Ee),
      (e.fn[ye].noConflict = function () {
        return (e.fn[ye] = be), Ee._jQueryInterface;
      }),
      (function () {
        if (void 0 === e)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = e.fn.jquery.split(' ')[0].split('.');
        if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0])
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      })(),
      (t.Util = a),
      (t.Alert = p),
      (t.Button = C),
      (t.Carousel = H),
      (t.Collapse = V),
      (t.Dropdown = ut),
      (t.Modal = Tt),
      (t.Popover = Vt),
      (t.Scrollspy = ce),
      (t.Tab = ve),
      (t.Toast = Ee),
      (t.Tooltip = qt),
      Object.defineProperty(t, '__esModule', { value: !0 });
  }),
  (function (t, e, i, n) {
    function o(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, o.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: { initializing: ['busy'], animating: ['busy'], dragging: ['interacting'] },
        }),
        t.each(
          ['onResize', 'onThrottledResize'],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          o.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          o.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (o.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: 'swing',
      slideTransition: '',
      info: !1,
      nestedItemSelector: !1,
      itemElement: 'div',
      stageElement: 'div',
      refreshClass: 'owl-refresh',
      loadedClass: 'owl-loaded',
      loadingClass: 'owl-loading',
      rtlClass: 'owl-rtl',
      responsiveClass: 'owl-responsive',
      dragClass: 'owl-drag',
      itemClass: 'owl-item',
      stageClass: 'owl-stage',
      stageOuterClass: 'owl-stage-outer',
      grabClass: 'owl-grab',
    }),
      (o.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
      (o.Type = { Event: 'event', State: 'state' }),
      (o.Plugins = {}),
      (o.Workers = [
        {
          filter: ['width', 'settings'],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ['items', 'settings'],
          run: function () {
            this.$stage.children('.cloned').remove();
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            var e = this.settings.margin || '',
              i = this.settings.rtl,
              n = { width: 'auto', 'margin-left': i ? e : '', 'margin-right': i ? '' : e };
            !!this.settings.autoWidth && this.$stage.children().css(n), (t.css = n);
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
              i = null,
              n = this._items.length,
              o = !this.settings.autoWidth,
              r = [];
            for (t.items = { merge: !1, width: e }; n--; )
              (i = this._mergers[n]),
                (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i),
                (t.items.merge = i > 1 || t.items.merge),
                (r[n] = o ? e * i : this._items[n].width());
            this._widths = r;
          },
        },
        {
          filter: ['items', 'settings'],
          run: function () {
            var e = [],
              i = this._items,
              n = this.settings,
              o = Math.max(2 * n.items, 4),
              r = 2 * Math.ceil(i.length / 2),
              s = n.loop && i.length ? (n.rewind ? o : Math.max(o, r)) : 0,
              a = '',
              l = '';
            for (s /= 2; s > 0; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l),
                (s -= 1);
            (this._clones = e),
              t(a).addClass('cloned').appendTo(this.$stage),
              t(l).addClass('cloned').prependTo(this.$stage);
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                n = 0,
                o = 0,
                r = [];
              ++i < e;

            )
              (n = r[i - 1] || 0), (o = this._widths[this.relative(i)] + this.settings.margin), r.push(n + o * t);
            this._coordinates = r;
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                'padding-left': t || '',
                'padding-right': t || '',
              };
            this.$stage.css(i);
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              n = this.$stage.children();
            if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), n.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), n.css(t.css));
          },
        },
        {
          filter: ['items'],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
          },
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            (t.current = t.current ? this.$stage.children().index(t.current) : 0),
              (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))),
              this.reset(t.current);
          },
        },
        {
          filter: ['position'],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ['width', 'position', 'items', 'settings'],
          run: function () {
            var t,
              e,
              i,
              n,
              o = this.settings.rtl ? 1 : -1,
              r = 2 * this.settings.stagePadding,
              s = this.coordinates(this.current()) + r,
              a = s + this.width() * o,
              l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + r * o),
                ((this.op(t, '<=', s) && this.op(t, '>', a)) || (this.op(e, '<', s) && this.op(e, '>', a))) &&
                  l.push(i);
            this.$stage.children('.active').removeClass('active'),
              this.$stage.children(':eq(' + l.join('), :eq(') + ')').addClass('active'),
              this.$stage.children('.center').removeClass('center'),
              this.settings.center && this.$stage.children().eq(this.current()).addClass('center');
          },
        },
      ]),
      (o.prototype.initializeStage = function () {
        (this.$stage = this.$element.find('.' + this.settings.stageClass)),
          this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = t('<' + this.settings.stageElement + '>', { class: this.settings.stageClass }).wrap(
              t('<div/>', { class: this.settings.stageOuterClass })
            )),
            this.$element.append(this.$stage.parent()));
      }),
      (o.prototype.initializeItems = function () {
        var e = this.$element.find('.owl-item');
        if (e.length)
          return (
            (this._items = e.get().map(function (e) {
              return t(e);
            })),
            (this._mergers = this._items.map(function () {
              return 1;
            })),
            void this.refresh()
          );
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate('width'),
          this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
      }),
      (o.prototype.initialize = function () {
        var t, e;
        this.enter('initializing'),
          this.trigger('initialize'),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth &&
            !this.is('pre-loading') &&
            ((t = this.$element.find('img')),
            (e = this.$element
              .children(this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : n)
              .width()),
            t.length && e <= 0 && this.preloadAutoWidthImages(t)),
          this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave('initializing'),
          this.trigger('initialized');
      }),
      (o.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(':visible');
      }),
      (o.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          n = -1,
          o = null;
        i
          ? (t.each(i, function (t) {
              t <= e && t > n && (n = Number(t));
            }),
            'function' == typeof (o = t.extend({}, this.options, i[n])).stagePadding &&
              (o.stagePadding = o.stagePadding()),
            delete o.responsive,
            o.responsiveClass &&
              this.$element.attr(
                'class',
                this.$element
                  .attr('class')
                  .replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + n)
              ))
          : (o = t.extend({}, this.options)),
          this.trigger('change', { property: { name: 'settings', value: o } }),
          (this._breakpoint = n),
          (this.settings = o),
          this.invalidate('settings'),
          this.trigger('changed', { property: { name: 'settings', value: this.settings } });
      }),
      (o.prototype.optionsLogic = function () {
        this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (o.prototype.prepare = function (e) {
        var i = this.trigger('prepare', { content: e });
        return (
          i.data ||
            (i.data = t('<' + this.settings.itemElement + '/>')
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger('prepared', { content: i.data }),
          i.data
        );
      }),
      (o.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            n = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            o = {};
          e < i;

        )
          (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        (this._invalidated = {}), !this.is('valid') && this.enter('valid');
      }),
      (o.prototype.width = function (t) {
        switch ((t = t || o.Width.Default)) {
          case o.Width.Inner:
          case o.Width.Outer:
            return this._width;
          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin;
        }
      }),
      (o.prototype.refresh = function () {
        this.enter('refreshing'),
          this.trigger('refresh'),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave('refreshing'),
          this.trigger('refreshed');
      }),
      (o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
      }),
      (o.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.isVisible() &&
          (this.enter('resizing'),
          this.trigger('resize').isDefaultPrevented()
            ? (this.leave('resizing'), !1)
            : (this.invalidate('width'), this.refresh(), this.leave('resizing'), void this.trigger('resized')))
        );
      }),
      (o.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(t.support.transition.end + '.owl.core', t.proxy(this.onTransitionEnd, this)),
          !1 !== this.settings.responsive && this.on(e, 'resize', this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on('mousedown.owl.core', t.proxy(this.onDragStart, this)),
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
              return !1;
            })),
          this.settings.touchDrag &&
            (this.$stage.on('touchstart.owl.core', t.proxy(this.onDragStart, this)),
            this.$stage.on('touchcancel.owl.core', t.proxy(this.onDragEnd, this)));
      }),
      (o.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which &&
          (t.support.transform
            ? (n = {
                x: (n = this.$stage
                  .css('transform')
                  .replace(/.*\(|\)| /g, '')
                  .split(','))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5],
              })
            : ((n = this.$stage.position()),
              (n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top,
              })),
          this.is('animating') &&
            (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate('position')),
          this.$element.toggleClass(this.options.grabClass, 'mousedown' === e.type),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = n),
          (this._drag.stage.current = n),
          (this._drag.pointer = this.pointer(e)),
          t(i).on('mouseup.owl.core touchend.owl.core', t.proxy(this.onDragEnd, this)),
          t(i).one(
            'mousemove.owl.core touchmove.owl.core',
            t.proxy(function (e) {
              var n = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on('mousemove.owl.core touchmove.owl.core', t.proxy(this.onDragMove, this)),
                (Math.abs(n.x) < Math.abs(n.y) && this.is('valid')) ||
                  (e.preventDefault(), this.enter('dragging'), this.trigger('drag'));
            }, this)
          ));
      }),
      (o.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          n = null,
          o = this.difference(this._drag.pointer, this.pointer(t)),
          r = this.difference(this._drag.stage.start, o);
        this.is('dragging') &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (r.x = ((((r.x - e) % i) + i) % i) + e))
            : ((e = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum())),
              (i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum())),
              (n = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
              (r.x = Math.max(Math.min(r.x, e + n), i + n))),
          (this._drag.stage.current = r),
          this.animate(r.x));
      }),
      (o.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
          o = this._drag.stage.current,
          r = (n.x > 0) ^ this.settings.rtl ? 'left' : 'right';
        t(i).off('.owl.core'),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== n.x && this.is('dragging')) || !this.is('valid')) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(this.closest(o.x, 0 !== n.x ? r : this._drag.direction)),
            this.invalidate('position'),
            this.update(),
            (this._drag.direction = r),
            (Math.abs(n.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one('click.owl.core', function () {
                return !1;
              })),
          this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'));
      }),
      (o.prototype.closest = function (e, i) {
        var o = -1,
          r = this.width(),
          s = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              s,
              t.proxy(function (t, a) {
                return (
                  'left' === i && e > a - 30 && e < a + 30
                    ? (o = t)
                    : 'right' === i && e > a - r - 30 && e < a - r + 30
                    ? (o = t + 1)
                    : this.op(e, '<', a) &&
                      this.op(e, '>', s[t + 1] !== n ? s[t + 1] : a - r) &&
                      (o = 'left' === i ? t + 1 : t),
                  -1 === o
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, '>', s[this.minimum()])
              ? (o = e = this.minimum())
              : this.op(e, '<', s[this.maximum()]) && (o = e = this.maximum())),
          o
        );
      }),
      (o.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is('animating') && this.onTransitionEnd(),
          i && (this.enter('animating'), this.trigger('translate')),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: 'translate3d(' + e + 'px,0px,0px)',
                transition:
                  this.speed() / 1e3 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''),
              })
            : i
            ? this.$stage.animate(
                { left: e + 'px' },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + 'px' });
      }),
      (o.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (o.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger('change', { property: { name: 'position', value: t } });
          e.data !== n && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate('position'),
            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }
        return this._current;
      }),
      (o.prototype.invalidate = function (e) {
        return (
          'string' === t.type(e) && ((this._invalidated[e] = !0), this.is('valid') && this.leave('valid')),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (o.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(['translate', 'translated']),
          this.animate(this.coordinates(t)),
          this.release(['translate', 'translated']));
      }),
      (o.prototype.normalize = function (t, e) {
        var i = this._items.length,
          o = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1 ? (t = n) : (t < 0 || t >= i + o) && (t = ((((t - o / 2) % i) + i) % i) + o / 2),
          t
        );
      }),
      (o.prototype.relative = function (t) {
        return this.normalize((t -= this._clones.length / 2), !0);
      }),
      (o.prototype.maximum = function (t) {
        var e,
          i,
          n,
          o = this.settings,
          r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
          if ((e = this._items.length))
            for (
              i = this._items[--e].width(), n = this.$element.width();
              e-- && !((i += this._items[e].width() + this.settings.margin) > n);

            );
          r = e + 1;
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0);
      }),
      (o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (o.prototype.items = function (t) {
        return t === n ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (o.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (o.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          o = i + this._items.length,
          r = function (t) {
            return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2;
          };
        return t.map(
          this._clones,
          e === n
            ? function (t, e) {
                return r(e);
              }
            : function (t, i) {
                return t === e ? r(i) : null;
              }
        );
      }),
      (o.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed;
      }),
      (o.prototype.coordinates = function (e) {
        var i,
          o = 1,
          r = e - 1;
        return e === n
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((o = -1), (r = e + 1)),
                (i = this._coordinates[e]),
                (i += ((this.width() - i + (this._coordinates[r] || 0)) / 2) * o))
              : (i = this._coordinates[r] || 0),
            (i = Math.ceil(i)));
      }),
      (o.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
      }),
      (o.prototype.to = function (t, e) {
        var i = this.current(),
          n = null,
          o = t - this.relative(i),
          r = (o > 0) - (o < 0),
          s = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s),
            (n = (((((t = i + o) - a) % s) + s) % s) + a) !== t &&
              n - o <= l &&
              n - o > 0 &&
              ((t = n), this.reset((i = n - o))))
          : (t = this.settings.rewind ? ((t % (l += 1)) + l) % l : Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.isVisible() && this.update();
      }),
      (o.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (o.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (o.prototype.onTransitionEnd = function (t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
          return !1;
        this.leave('animating'), this.trigger('translated');
      }),
      (o.prototype.viewport = function () {
        var n;
        return (
          this.options.responsiveBaseElement !== e
            ? (n = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (n = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (n = i.documentElement.clientWidth)
            : console.warn('Can not detect viewport width.'),
          n
        );
      }),
      (o.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector && (e = e.find('.' + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(1 * e.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1);
              }, this)
            ),
          this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
          this.invalidate('items');
      }),
      (o.prototype.add = function (e, i) {
        var o = this.relative(this._current);
        (i = i === n ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger('add', { content: e, position: i }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(1 * e.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(i, 0, 1 * e.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1)),
          this._items[o] && this.reset(this._items[o].index()),
          this.invalidate('items'),
          this.trigger('added', { content: e, position: i });
      }),
      (o.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n &&
          (this.trigger('remove', { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate('items'),
          this.trigger('removed', { content: null, position: t }));
      }),
      (o.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter('pre-loading'),
              (i = t(i)),
              t(new Image())
                .one(
                  'load',
                  t.proxy(function (t) {
                    i.attr('src', t.target.src),
                      i.css('opacity', 1),
                      this.leave('pre-loading'),
                      !this.is('pre-loading') && !this.is('initializing') && this.refresh();
                  }, this)
                )
                .attr('src', i.attr('src') || i.attr('data-src') || i.attr('data-src-retina'));
          }, this)
        );
      }),
      (o.prototype.destroy = function () {
        for (var n in (this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        t(i).off('.owl.core'),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer), this.off(e, 'resize', this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[n].destroy();
        this.$stage.children('.cloned').remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              'class',
              this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')
            )
            .removeData('owl.carousel');
      }),
      (o.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
          case '<':
            return n ? t > i : t < i;
          case '>':
            return n ? t < i : t > i;
          case '>=':
            return n ? t <= i : t >= i;
          case '<=':
            return n ? t >= i : t <= i;
        }
      }),
      (o.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent('on' + e, i);
      }),
      (o.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent('on' + e, i);
      }),
      (o.prototype.trigger = function (e, i, n, r, s) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(['on', e, n], function (t) {
                return t;
              })
              .join('-')
              .toLowerCase()
          ),
          c = t.Event([e, 'owl', n || 'carousel'].join('.').toLowerCase(), t.extend({ relatedTarget: this }, a, i));
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(c);
            }),
            this.register({ type: o.Type.Event, name: e }),
            this.$element.trigger(c),
            this.settings && 'function' == typeof this.settings[l] && this.settings[l].call(this, c)),
          c
        );
      }),
      (o.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++;
          }, this)
        );
      }),
      (o.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (o.prototype.register = function (e) {
        if (e.type === o.Type.Event) {
          if ((t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl)) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !i || !i.apply || (t.namespace && -1 !== t.namespace.indexOf('owl'))
                ? t.namespace && t.namespace.indexOf('owl') > -1
                : i.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === o.Type.State &&
            ((this._states.tags[e.name] = this._states.tags[e.name]
              ? this._states.tags[e.name].concat(e.tags)
              : e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n;
              }, this)
            )));
      }),
      (o.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (o.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (o.prototype.pointer = function (t) {
        var i = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (o.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (o.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var n = t(this),
            r = n.data('owl.carousel');
          r ||
            ((r = new o(this, 'object' == typeof e && e)),
            n.data('owl.carousel', r),
            t.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (e, i) {
              r.register({ type: o.Type.Event, name: i }),
                r.$element.on(
                  i + '.owl.carousel.core',
                  t.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]));
                  }, r)
                );
            })),
            'string' == typeof e && '_' !== e.charAt(0) && r[e].apply(r, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var o = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (o.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
      }),
      (o.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible && this._core.invalidate('width') && this._core.refresh());
      }),
      (o.prototype.destroy = function () {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) 'function' != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var o = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel': t.proxy(function (e) {
            if (
              e.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((e.property && 'position' == e.property.name) || 'initialized' == e.type)
            ) {
              var i = this._core.settings,
                n = (i.center && Math.ceil(i.items / 2)) || i.items,
                o = (i.center && -1 * n) || 0,
                r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o,
                s = this._core.clones().length,
                a = t.proxy(function (t, e) {
                  this.load(e);
                }, this);
              for (i.lazyLoadEager > 0 && ((n += i.lazyLoadEager), i.loop && ((r -= i.lazyLoadEager), n++)); o++ < n; )
                this.load(s / 2 + this._core.relative(r)),
                  s && t.each(this._core.clones(this._core.relative(r)), a),
                  r++;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (o.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i),
          o = n && n.find('.owl-lazy');
        !o ||
          t.inArray(n.get(0), this._loaded) > -1 ||
          (o.each(
            t.proxy(function (i, n) {
              var o,
                r = t(n),
                s =
                  (e.devicePixelRatio > 1 && r.attr('data-src-retina')) || r.attr('data-src') || r.attr('data-srcset');
              this._core.trigger('load', { element: r, url: s }, 'lazy'),
                r.is('img')
                  ? r
                      .one(
                        'load.owl.lazy',
                        t.proxy(function () {
                          r.css('opacity', 1), this._core.trigger('loaded', { element: r, url: s }, 'lazy');
                        }, this)
                      )
                      .attr('src', s)
                  : r.is('source')
                  ? r
                      .one(
                        'load.owl.lazy',
                        t.proxy(function () {
                          this._core.trigger('loaded', { element: r, url: s }, 'lazy');
                        }, this)
                      )
                      .attr('srcset', s)
                  : (((o = new Image()).onload = t.proxy(function () {
                      r.css({ 'background-image': 'url("' + s + '")', opacity: '1' }),
                        this._core.trigger('loaded', { element: r, url: s }, 'lazy');
                    }, this)),
                    (o.src = s));
            }, this)
          ),
          this._loaded.push(n.get(0)));
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var o = function (i) {
      (this._core = i),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && this.update();
          }, this),
          'changed.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && 'position' === t.property.name && this.update();
          }, this),
          'loaded.owl.lazy': t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest('.' + this._core.settings.itemClass).index() === this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var n = this;
      t(e).on('load', function () {
        n._core.settings.autoHeight && n.update();
      }),
        t(e).resize(function () {
          n._core.settings.autoHeight &&
            (null != n._intervalId && clearTimeout(n._intervalId),
            (n._intervalId = setTimeout(function () {
              n.update();
            }, 250)));
        });
    };
    (o.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (o.prototype.update = function () {
        var e = this._core._current,
          i = e + this._core.settings.items,
          n = this._core.settings.lazyLoad,
          o = this._core.$stage.children().toArray().slice(e, i),
          r = [],
          s = 0;
        t.each(o, function (e, i) {
          r.push(t(i).height());
        }),
          (s = Math.max.apply(null, r)) <= 1 && n && this._previousHeight && (s = this._previousHeight),
          (this._previousHeight = s),
          this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass);
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var o = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
          }, this),
          'resize.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
          }, this),
          'refreshed.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.is('resizing') && this._core.$stage.find('.cloned .owl-video-frame').remove();
          }, this),
          'changed.owl.carousel': t.proxy(function (t) {
            t.namespace && 'position' === t.property.name && this._playing && this.stop();
          }, this),
          'prepared.owl.carousel': t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find('.owl-video');
              i.length && (i.css('display', 'none'), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (o.prototype.fetch = function (t, e) {
        var i = t.attr('data-vimeo-id') ? 'vimeo' : t.attr('data-vzaar-id') ? 'vzaar' : 'youtube',
          n = t.attr('data-vimeo-id') || t.attr('data-youtube-id') || t.attr('data-vzaar-id'),
          o = t.attr('data-width') || this._core.settings.videoWidth,
          r = t.attr('data-height') || this._core.settings.videoHeight,
          s = t.attr('href');
        if (!s) throw new Error('Missing video URL.');
        if (
          (n = s.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf('youtu') > -1
        )
          i = 'youtube';
        else if (n[3].indexOf('vimeo') > -1) i = 'vimeo';
        else {
          if (!(n[3].indexOf('vzaar') > -1)) throw new Error('Video URL not supported.');
          i = 'vzaar';
        }
        (this._videos[s] = { type: i, id: (n = n[6]), width: o, height: r }),
          e.attr('data-video', s),
          this.thumbnail(t, this._videos[s]);
      }),
      (o.prototype.thumbnail = function (e, i) {
        var n,
          o = i.width && i.height ? 'width:' + i.width + 'px;height:' + i.height + 'px;' : '',
          r = e.find('img'),
          s = 'src',
          a = '',
          l = this._core.settings,
          c = function (i) {
            (n = t(
              '<div/>',
              l.lazyLoad
                ? { class: 'owl-video-tn ' + a, srcType: i }
                : { class: 'owl-video-tn', style: 'opacity:1;background-image:url(' + i + ')' }
            )),
              e.after(n),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap(t('<div/>', { class: 'owl-video-wrapper', style: o })),
          this._core.settings.lazyLoad && ((s = 'data-src'), (a = 'owl-lazy')),
          r.length)
        )
          return c(r.attr(s)), r.remove(), !1;
        'youtube' === i.type
          ? c('//img.youtube.com/vi/' + i.id + '/hqdefault.jpg')
          : 'vimeo' === i.type
          ? t.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + i.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (t) {
                c(t[0].thumbnail_large);
              },
            })
          : 'vzaar' === i.type &&
            t.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + i.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (t) {
                c(t.framegrab_url);
              },
            });
      }),
      (o.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video');
      }),
      (o.prototype.play = function (e) {
        var i,
          n = t(e.target).closest('.' + this._core.settings.itemClass),
          o = this._videos[n.attr('data-video')],
          r = o.width || '100%',
          s = o.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr(
            'height',
            s
          ),
          i.attr('width', r),
          'youtube' === o.type
            ? i.attr('src', '//www.youtube.com/embed/' + o.id + '?autoplay=1&rel=0&v=' + o.id)
            : 'vimeo' === o.type
            ? i.attr('src', '//player.vimeo.com/video/' + o.id + '?autoplay=1')
            : 'vzaar' === o.type && i.attr('src', '//view.vzaar.com/' + o.id + '/player?autoplay=true'),
          t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find('.owl-video')),
          (this._playing = n.addClass('owl-video-playing')));
      }),
      (o.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass('owl-video-frame');
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off('click.owl.video'), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var o = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, o.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = n),
        (this.next = n),
        (this.handlers = {
          'change.owl.carousel': t.proxy(function (t) {
            t.namespace &&
              'position' == t.property.name &&
              ((this.previous = this.core.current()), (this.next = t.property.value));
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': t.proxy(function (t) {
            t.namespace && (this.swapping = 'translated' == t.type);
          }, this),
          'translate.owl.carousel': t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (o.Defaults = { animateOut: !1, animateIn: !1 }),
      (o.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            n = this.core.$stage.children().eq(this.previous),
            o = this.core.$stage.children().eq(this.next),
            r = this.core.settings.animateIn,
            s = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (s &&
              ((e = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
              n
                .one(t.support.animation.end, i)
                .css({ left: e + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(s)),
            r && o.one(t.support.animation.end, i).addClass('animated owl-animated-in').addClass(r));
        }
      }),
      (o.prototype.clear = function (e) {
        t(e.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var o = function (e) {
      (this._core = e),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': t.proxy(function (t) {
            t.namespace && 'settings' === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace && 'position' === t.property.name && this._paused && (this._time = 0);
          }, this),
          'initialized.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          'play.owl.autoplay': t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          'stop.owl.autoplay': t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          'mouseover.owl.autoplay': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
          }, this),
          'mouseleave.owl.autoplay': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play();
          }, this),
          'touchstart.owl.core': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
          }, this),
          'touchend.owl.core': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, o.Defaults, this._core.options));
    };
    (o.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
      (o.prototype._next = function (n) {
        (this._call = e.setTimeout(
          t.proxy(this._next, this, n),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        )),
          this._core.is('interacting') || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed);
      }),
      (o.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (o.prototype.play = function (i, n) {
        var o;
        this._core.is('rotating') || this._core.enter('rotating'),
          (i = i || this._core.settings.autoplayTimeout),
          (o = Math.min(this._time % (this._timeout || i), i)),
          this._paused ? ((this._time = this.read()), (this._paused = !1)) : e.clearTimeout(this._call),
          (this._time += (this.read() % i) - o),
          (this._timeout = i),
          (this._call = e.setTimeout(t.proxy(this._next, this, n), i - o));
      }),
      (o.prototype.stop = function () {
        this._core.is('rotating') &&
          ((this._time = 0), (this._paused = !0), e.clearTimeout(this._call), this._core.leave('rotating'));
      }),
      (o.prototype.pause = function () {
        this._core.is('rotating') &&
          !this._paused &&
          ((this._time = this.read()), (this._paused = !0), e.clearTimeout(this._call));
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    'use strict';
    var o = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
        (this._handlers = {
          'prepared.owl.carousel': t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') +
                  '</div>'
              );
          }, this),
          'added.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          'remove.owl.carousel': t.proxy(function (t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
          }, this),
          'changed.owl.carousel': t.proxy(function (t) {
            t.namespace && 'position' == t.property.name && this.draw();
          }, this),
          'initialized.owl.carousel': t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'));
          }, this),
          'refreshed.owl.carousel': t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'));
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (o.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (o.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (i.navContainer
          ? t(i.navContainer)
          : t('<div>').addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
        (this._controls.$previous = t('<' + i.navElement + '>')
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            'click',
            t.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t('<' + i.navElement + '>')
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            'click',
            t.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t('<span>')).prop('outerHTML')]),
        (this._controls.$absolute = (i.dotsContainer
          ? t(i.dotsContainer)
          : t('<div>').addClass(i.dotsClass).appendTo(this.$element)
        ).addClass('disabled')),
        this._controls.$absolute.on(
          'click',
          'button',
          t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (o.prototype.destroy = function () {
        var t, e, i, n, o;
        for (t in ((o = this._core.settings), this._handlers)) this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          '$relative' === e && o.navContainer ? this._controls[e].html('') : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) 'function' != typeof this[i] && (this[i] = null);
      }),
      (o.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          n = i + this._core.items().length,
          o = this._core.maximum(!0),
          r = this._core.settings,
          s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if (('page' !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || 'page' == r.slideBy))
          for (this._pages = [], t = i, e = 0; t < n; t++) {
            if (e >= s || 0 === e) {
              if ((this._pages.push({ start: Math.min(o, t - i), end: t - i + s - 1 }), Math.min(o, t - i) === o))
                break;
              e = 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (o.prototype.draw = function () {
        var e,
          i = this._core.settings,
          n = this._core.items().length <= i.items,
          o = this._core.relative(this._core.current()),
          r = i.loop || i.rewind;
        this._controls.$relative.toggleClass('disabled', !i.nav || n),
          i.nav &&
            (this._controls.$previous.toggleClass('disabled', !r && o <= this._core.minimum(!0)),
            this._controls.$next.toggleClass('disabled', !r && o >= this._core.maximum(!0))),
          this._controls.$absolute.toggleClass('disabled', !i.dots || n),
          i.dots &&
            ((e = this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(''))
              : e > 0
              ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0]))
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass('active'));
      }),
      (o.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (o.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (o.prototype.getPosition = function (e) {
        var i,
          n,
          o = this._core.settings;
        return (
          'page' == o.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              e ? ++i : --i,
              (i = this._pages[((i % (n = this._pages.length)) + n) % n].start))
            : ((i = this._core.relative(this._core.current())),
              (n = this._core.items().length),
              e ? (i += o.slideBy) : (i -= o.slideBy)),
          i
        );
      }),
      (o.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (o.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (o.prototype.to = function (e, i, n) {
        var o;
        !n && this._pages.length
          ? ((o = this._pages.length), t.proxy(this._overrides.to, this._core)(this._pages[((e % o) + o) % o].start, i))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    'use strict';
    var o = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': t.proxy(function (i) {
            i.namespace && 'URLHash' === this._core.settings.startPosition && t(e).trigger('hashchange.owl.navigation');
          }, this),
          'prepared.owl.carousel': t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          'changed.owl.carousel': t.proxy(function (i) {
            if (i.namespace && 'position' === i.property.name) {
              var n = this._core.items(this._core.relative(this._core.current())),
                o = t
                  .map(this._hashes, function (t, e) {
                    return t === n ? e : null;
                  })
                  .join();
              if (!o || e.location.hash.slice(1) === o) return;
              e.location.hash = o;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          'hashchange.owl.navigation',
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              n = this._core.$stage.children(),
              o = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0);
          }, this)
        );
    };
    (o.Defaults = { URLhashListener: !1 }),
      (o.prototype.destroy = function () {
        var i, n;
        for (i in (t(e).off('hashchange.owl.navigation'), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) 'function' != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    function o(e, i) {
      var n = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + ' ' + a.join(o + ' ') + o).split(' '), function (t, e) {
          if (void 0 !== s[e]) return (n = !i || e), !1;
        }),
        n
      );
    }
    function r(t) {
      return o(t, !0);
    }
    var s = t('<support>').get(0).style,
      a = 'Webkit Moz O ms'.split(' '),
      l = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      };
    !!o('transition') &&
      ((t.support.transition = new String(r('transition'))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      !!o('animation') &&
        ((t.support.animation = new String(r('animation'))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      o('transform') &&
        ((t.support.transform = new String(r('transform'))), (t.support.transform3d = !!o('perspective')));
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    'use strict';
    var o = function (e) {
      (this.owl = e),
        (this._thumbcontent = []),
        (this._identifier = 0),
        (this.owl_currentitem = this.owl.options.startPosition),
        (this.$element = this.owl.$element),
        (this._handlers = {
          'prepared.owl.carousel': t.proxy(function (e) {
            if (
              !e.namespace ||
              !this.owl.options.thumbs ||
              this.owl.options.thumbImage ||
              this.owl.options.thumbsPrerendered ||
              this.owl.options.thumbImage
            ) {
              if (e.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                var i = t(e.content).find('img');
                this._thumbcontent.push(i);
              }
            } else void 0 !== t(e.content).find('[data-thumb]').attr('data-thumb') && this._thumbcontent.push(t(e.content).find('[data-thumb]').attr('data-thumb'));
          }, this),
          'initialized.owl.carousel': t.proxy(function (t) {
            t.namespace &&
              this.owl.options.thumbs &&
              (this.render(),
              this.listen(),
              (this._identifier = this.owl.$element.data('slider-id')),
              this.setActive());
          }, this),
          'changed.owl.carousel': t.proxy(function (t) {
            t.namespace &&
              'position' === t.property.name &&
              this.owl.options.thumbs &&
              ((this._identifier = this.owl.$element.data('slider-id')), this.setActive());
          }, this),
        }),
        (this.owl.options = t.extend({}, o.Defaults, this.owl.options)),
        this.owl.$element.on(this._handlers);
    };
    (o.Defaults = {
      thumbs: !0,
      thumbImage: !1,
      thumbContainerClass: 'owl-thumbs',
      thumbItemClass: 'owl-thumb-item',
      moveThumbsInside: !1,
    }),
      (o.prototype.listen = function () {
        var e = this.owl.options;
        e.thumbsPrerendered && (this._thumbcontent._thumbcontainer = t('.' + e.thumbContainerClass)),
          t(this._thumbcontent._thumbcontainer).on(
            'click',
            this._thumbcontent._thumbcontainer.children(),
            t.proxy(function (i) {
              this._identifier = t(i.target)
                .closest('.' + e.thumbContainerClass)
                .data('slider-id');
              var n = t(i.target).parent().is(this._thumbcontent._thumbcontainer)
                ? t(i.target).index()
                : t(i.target)
                    .closest('.' + e.thumbItemClass)
                    .index();
              e.thumbsPrerendered
                ? t('[data-slider-id=' + this._identifier + ']').trigger('to.owl.carousel', [n, e.dotsSpeed, !0])
                : this.owl.to(n, e.dotsSpeed),
                i.preventDefault();
            }, this)
          );
      }),
      (o.prototype.render = function () {
        var e,
          i = this.owl.options;
        if (
          (i.thumbsPrerendered
            ? ((this._thumbcontent._thumbcontainer = t('.' + i.thumbContainerClass)),
              i.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element))
            : (this._thumbcontent._thumbcontainer = t('<div>').addClass(i.thumbContainerClass).appendTo(this.$element)),
          i.thumbImage)
        )
          for (e = 0; e < this._thumbcontent.length; ++e)
            this._thumbcontent._thumbcontainer.append(
              '<button class=' +
                i.thumbItemClass +
                '><img src="' +
                this._thumbcontent[e].attr('src') +
                '" alt="' +
                this._thumbcontent[e].attr('alt') +
                '" /></button>'
            );
        else
          for (e = 0; e < this._thumbcontent.length; ++e)
            this._thumbcontent._thumbcontainer.append(
              '<button class=' + i.thumbItemClass + '>' + this._thumbcontent[e] + '</button>'
            );
      }),
      (o.prototype.setActive = function () {
        (this.owl_currentitem = this.owl._current - this.owl._clones.length / 2),
          this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
        var e = this.owl.options,
          i = e.thumbsPrerendered
            ? t('.' + e.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]')
            : this._thumbcontent._thumbcontainer;
        i.children().filter('.active').removeClass('active'), i.children().eq(this.owl_currentitem).addClass('active');
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this.owl.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Thumbs = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : t('object' == typeof exports ? require('jquery') : window.jQuery || window.Zepto);
  })(function (t) {
    var e,
      i,
      n,
      o,
      r,
      s,
      a = 'Close',
      l = 'BeforeClose',
      c = 'MarkupParse',
      d = 'Open',
      u = 'Change',
      h = '.mfp',
      p = 'mfp-ready',
      f = 'mfp-removing',
      g = 'mfp-prevent-close',
      m = function () {},
      v = !!window.jQuery,
      y = t(window),
      _ = function (t, i) {
        e.ev.on('mfp' + t + h, i);
      },
      w = function (e, i, n, o) {
        var r = document.createElement('div');
        return (
          (r.className = 'mfp-' + e),
          n && (r.innerHTML = n),
          o ? i && i.appendChild(r) : ((r = t(r)), i && r.appendTo(i)),
          r
        );
      },
      b = function (i, n) {
        e.ev.triggerHandler('mfp' + i, n),
          e.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
      },
      x = function (i) {
        return (
          (i === s && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(e.st.closeMarkup.replace('%title%', e.st.tClose))), (s = i)),
          e.currTemplate.closeBtn
        );
      },
      C = function () {
        t.magnificPopup.instance || ((e = new m()).init(), (t.magnificPopup.instance = e));
      };
    (m.prototype = {
      constructor: m,
      init: function () {
        var i = navigator.appVersion;
        (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
          (e.isAndroid = /android/gi.test(i)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (e.supportsTransition = (function () {
            var t = document.createElement('p').style,
              e = ['ms', 'O', 'Moz', 'Webkit'];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + 'Transition' in t) return !0;
            return !1;
          })()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
          (n = t(document)),
          (e.popupsCache = {});
      },
      open: function (i) {
        var o;
        if (!1 === i.isObj) {
          (e.items = i.items.toArray()), (e.index = 0);
          var s,
            a = i.items;
          for (o = 0; o < a.length; o++)
            if (((s = a[o]).parsed && (s = s.el[0]), s === i.el[0])) {
              e.index = o;
              break;
            }
        } else (e.items = t.isArray(i.items) ? i.items : [i.items]), (e.index = i.index || 0);
        if (!e.isOpen) {
          (e.types = []),
            (r = ''),
            (e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos = 'auto' === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = w('bg').on('click' + h, function () {
                e.close();
              })),
              (e.wrap = w('wrap')
                .attr('tabindex', -1)
                .on('click' + h, function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = w('container', e.wrap))),
            (e.contentContainer = w('content')),
            e.st.preloader && (e.preloader = w('preloader', e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (o = 0; o < l.length; o++) {
            var u = l[o];
            (u = u.charAt(0).toUpperCase() + u.slice(1)), e['init' + u].call(e);
          }
          b('BeforeOpen'),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (_(c, function (t, e, i, n) {
                    i.close_replaceWith = x(n.type);
                  }),
                  (r += ' mfp-close-btn-in'))
                : e.wrap.append(x())),
            e.st.alignTop && (r += ' mfp-align-top'),
            e.wrap.css(
              e.fixedContentPos
                ? { overflow: e.st.overflowY, overflowX: 'hidden', overflowY: e.st.overflowY }
                : { top: y.scrollTop(), position: 'absolute' }
            ),
            (!1 === e.st.fixedBgPos || ('auto' === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: n.height(), position: 'absolute' }),
            e.st.enableEscapeKey &&
              n.on('keyup' + h, function (t) {
                27 === t.keyCode && e.close();
              }),
            y.on('resize' + h, function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (r += ' mfp-auto-cursor'),
            r && e.wrap.addClass(r);
          var f = (e.wH = y.height()),
            g = {};
          if (e.fixedContentPos && e._hasScrollBar(f)) {
            var m = e._getScrollbarSize();
            m && (g.marginRight = m);
          }
          e.fixedContentPos && (e.isIE7 ? t('body, html').css('overflow', 'hidden') : (g.overflow = 'hidden'));
          var v = e.st.mainClass;
          return (
            e.isIE7 && (v += ' mfp-ie7'),
            v && e._addClassToMFP(v),
            e.updateItemHTML(),
            b('BuildControls'),
            t('html').css(g),
            e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content ? (e._addClassToMFP(p), e._setFocus()) : e.bgOverlay.addClass(p),
                n.on('focusin' + h, e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(f),
            b(d),
            i
          );
        }
        e.updateItemHTML();
      },
      close: function () {
        e.isOpen &&
          (b(l),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP(f),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        b(a);
        var i = f + ' ' + p + ' ';
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (i += e.st.mainClass + ' '),
          e._removeClassFromMFP(i),
          e.fixedContentPos)
        ) {
          var o = { marginRight: '' };
          e.isIE7 ? t('body, html').css('overflow', '') : (o.overflow = ''), t('html').css(o);
        }
        n.off('keyup.mfp focusin' + h),
          e.ev.off(h),
          e.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
          e.bgOverlay.attr('class', 'mfp-bg'),
          e.container.attr('class', 'mfp-container'),
          !e.st.showCloseBtn ||
            (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
            (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
          e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          b('AfterClose');
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;
          e.wrap.css('height', n), (e.wH = n);
        } else e.wH = t || y.height();
        e.fixedContentPos || e.wrap.css('height', e.wH), b('Resize');
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
        var n = i.type;
        if ((b('BeforeChange', [e.currItem ? e.currItem.type : '', n]), (e.currItem = i), !e.currTemplate[n])) {
          var r = !!e.st[n] && e.st[n].markup;
          b('FirstMarkupParse', r), (e.currTemplate[n] = !r || t(r));
        }
        o && o !== i.type && e.container.removeClass('mfp-' + o + '-holder');
        var s = e['get' + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
        e.appendContent(s, n),
          (i.preloaded = !0),
          b(u, i),
          (o = i.type),
          e.container.prepend(e.contentContainer),
          b('AfterChange');
      },
      appendContent: function (t, i) {
        (e.content = t),
          t
            ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i]
              ? e.content.find('.mfp-close').length || e.content.append(x())
              : (e.content = t)
            : (e.content = ''),
          b('BeforeAppend'),
          e.container.addClass('mfp-' + i + '-holder'),
          e.contentContainer.append(e.content);
      },
      parseEl: function (i) {
        var n,
          o = e.items[i];
        if ((o.tagName ? (o = { el: t(o) }) : ((n = o.type), (o = { data: o, src: o.src })), o.el)) {
          for (var r = e.types, s = 0; s < r.length; s++)
            if (o.el.hasClass('mfp-' + r[s])) {
              n = r[s];
              break;
            }
          (o.src = o.el.attr('data-mfp-src')), o.src || (o.src = o.el.attr('href'));
        }
        return (
          (o.type = n || e.st.type || 'inline'),
          (o.index = i),
          (o.parsed = !0),
          (e.items[i] = o),
          b('ElementParse', o),
          e.items[i]
        );
      },
      addGroup: function (t, i) {
        var n = function (n) {
          (n.mfpEl = this), e._openClick(n, t, i);
        };
        i || (i = {});
        var o = 'click.magnificPopup';
        (i.mainEl = t),
          i.items
            ? ((i.isObj = !0), t.off(o).on(o, n))
            : ((i.isObj = !1), i.delegate ? t.off(o).on(o, i.delegate, n) : ((i.items = t), t.off(o).on(o, n)));
      },
      _openClick: function (i, n, o) {
        if (
          (void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) ||
          !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
        ) {
          var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
          if (r)
            if (t.isFunction(r)) {
              if (!r.call(e)) return !0;
            } else if (y.width() < r) return !0;
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
            (o.el = t(i.mfpEl)),
            o.delegate && (o.items = n.find(o.delegate)),
            e.open(o);
        }
      },
      updateStatus: function (t, n) {
        if (e.preloader) {
          i !== t && e.container.removeClass('mfp-s-' + i), n || 'loading' !== t || (n = e.st.tLoading);
          var o = { status: t, text: n };
          b('UpdateStatus', o),
            (t = o.status),
            e.preloader.html((n = o.text)),
            e.preloader.find('a').on('click', function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass('mfp-s-' + t),
            (i = t);
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass(g)) {
          var n = e.st.closeOnContentClick,
            o = e.st.closeOnBgClick;
          if (n && o) return !0;
          if (!e.content || t(i).hasClass('mfp-close') || (e.preloader && i === e.preloader[0])) return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (n) return !0;
          } else if (o && t.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || y.height());
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (i) {
        return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1);
      },
      _parseMarkup: function (e, i, n) {
        var o;
        n.data && (i = t.extend(n.data, i)),
          b(c, [e, i, n]),
          t.each(i, function (i, n) {
            if (void 0 === n || !1 === n) return !0;
            if ((o = i.split('_')).length > 1) {
              var r = e.find(h + '-' + o[0]);
              if (r.length > 0) {
                var s = o[1];
                'replaceWith' === s
                  ? r[0] !== n[0] && r.replaceWith(n)
                  : 'img' === s
                  ? r.is('img')
                    ? r.attr('src', n)
                    : r.replaceWith(t('<img>').attr('src', n).attr('class', r.attr('class')))
                  : r.attr(o[1], n);
              }
            } else e.find(h + '-' + i).html(n);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement('div');
          (t.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: m.prototype,
        modules: [],
        open: function (e, i) {
          return C(), ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0), (e.index = i || 0), this.instance.open(e);
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, i) {
          i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: '',
          preloader: !0,
          focus: '',
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: 'auto',
          fixedBgPos: 'auto',
          overflowY: 'auto',
          closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: 'Close (Esc)',
          tLoading: 'Loading...',
          autoFocusLast: !0,
        },
      }),
      (t.fn.magnificPopup = function (i) {
        C();
        var n = t(this);
        if ('string' == typeof i)
          if ('open' === i) {
            var o,
              r = v ? n.data('magnificPopup') : n[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            r.items ? (o = r.items[s]) : ((o = n), r.delegate && (o = o.find(r.delegate)), (o = o.eq(s))),
              e._openClick({ mfpEl: o }, n, r);
          } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else (i = t.extend(!0, {}, i)), v ? n.data('magnificPopup', i) : (n[0].magnificPopup = i), e.addGroup(n, i);
        return n;
      });
    var T,
      S,
      k,
      E = 'inline',
      A = function () {
        k && (S.after(k.addClass(T)).detach(), (k = null));
      };
    t.magnificPopup.registerModule(E, {
      options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
      proto: {
        initInline: function () {
          e.types.push(E),
            _(a + '.' + E, function () {
              A();
            });
        },
        getInline: function (i, n) {
          if ((A(), i.src)) {
            var o = e.st.inline,
              r = t(i.src);
            if (r.length) {
              var s = r[0].parentNode;
              s &&
                s.tagName &&
                (S || ((S = w((T = o.hiddenClass))), (T = 'mfp-' + T)), (k = r.after(S).detach().removeClass(T))),
                e.updateStatus('ready');
            } else e.updateStatus('error', o.tNotFound), (r = t('<div>'));
            return (i.inlineElement = r), r;
          }
          return e.updateStatus('ready'), e._parseMarkup(n, {}, i), n;
        },
      },
    });
    var $,
      I = 'ajax',
      D = function () {
        $ && t(document.body).removeClass($);
      },
      O = function () {
        D(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule(I, {
      options: {
        settings: null,
        cursor: 'mfp-ajax-cur',
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push(I), ($ = e.st.ajax.cursor), _(a + '.' + I, O), _('BeforeChange.' + I, O);
        },
        getAjax: function (i) {
          $ && t(document.body).addClass($), e.updateStatus('loading');
          var n = t.extend(
            {
              url: i.src,
              success: function (n, o, r) {
                var s = { data: n, xhr: r };
                b('ParseAjax', s),
                  e.appendContent(t(s.data), I),
                  (i.finished = !0),
                  D(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass(p);
                  }, 16),
                  e.updateStatus('ready'),
                  b('AjaxContentAdded');
              },
              error: function () {
                D(), (i.finished = i.loadError = !0), e.updateStatus('error', e.st.ajax.tError.replace('%url%', i.src));
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(n)), '';
        },
      },
    });
    var P,
      N,
      L = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
          if (t.isFunction(n)) return n.call(e, i);
          if (i.el) return i.el.attr(n) || '';
        }
        return '';
      };
    t.magnificPopup.registerModule('image', {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: 'mfp-zoom-out-cur',
        titleSrc: 'title',
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var i = e.st.image,
            n = '.image';
          e.types.push('image'),
            _(d + n, function () {
              'image' === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor);
            }),
            _(a + n, function () {
              i.cursor && t(document.body).removeClass(i.cursor), y.off('resize' + h);
            }),
            _('Resize' + n, e.resizeImage),
            e.isLowIE && _('AfterChange', e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE && (i = parseInt(t.img.css('padding-top'), 10) + parseInt(t.img.css('padding-bottom'), 10)),
              t.img.css('max-height', e.wH - i);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            P && clearInterval(P),
            (t.isCheckingImgSize = !1),
            b('ImageHasSize', t),
            t.imgHidden && (e.content && e.content.removeClass('mfp-loading'), (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var i = 0,
            n = t.img[0],
            o = function (r) {
              P && clearInterval(P),
                (P = setInterval(function () {
                  return n.naturalWidth > 0
                    ? void e._onImageHasSize(t)
                    : (i > 200 && clearInterval(P), void (3 == ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)));
                }, r));
            };
          o(1);
        },
        getImage: function (i, n) {
          var o = 0,
            r = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off('.mfploader'),
                    i === e.currItem && (e._onImageHasSize(i), e.updateStatus('ready')),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    b('ImageLoadComplete'))
                  : 200 > ++o
                  ? setTimeout(r, 100)
                  : s());
            },
            s = function () {
              i &&
                (i.img.off('.mfploader'),
                i === e.currItem && (e._onImageHasSize(i), e.updateStatus('error', a.tError.replace('%url%', i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            a = e.st.image,
            l = n.find('.mfp-img');
          if (l.length) {
            var c = document.createElement('img');
            (c.className = 'mfp-img'),
              i.el && i.el.find('img').length && (c.alt = i.el.find('img').attr('alt')),
              (i.img = t(c).on('load.mfploader', r).on('error.mfploader', s)),
              (c.src = i.src),
              l.is('img') && (i.img = i.img.clone()),
              (c = i.img[0]).naturalWidth > 0 ? (i.hasSize = !0) : c.width || (i.hasSize = !1);
          }
          return (
            e._parseMarkup(n, { title: L(i), img_replaceWith: i.img }, i),
            e.resizeImage(),
            i.hasSize
              ? (P && clearInterval(P),
                i.loadError
                  ? (n.addClass('mfp-loading'), e.updateStatus('error', a.tError.replace('%url%', i.src)))
                  : (n.removeClass('mfp-loading'), e.updateStatus('ready')),
                n)
              : (e.updateStatus('loading'),
                (i.loading = !0),
                i.hasSize || ((i.imgHidden = !0), n.addClass('mfp-loading'), e.findImageSize(i)),
                n)
          );
        },
      },
    }),
      t.magnificPopup.registerModule('zoom', {
        options: {
          enabled: !1,
          easing: 'ease-in-out',
          duration: 300,
          opener: function (t) {
            return t.is('img') ? t : t.find('img');
          },
        },
        proto: {
          initZoom: function () {
            var t,
              i = e.st.zoom,
              n = '.zoom';
            if (i.enabled && e.supportsTransition) {
              var o,
                r,
                s = i.duration,
                c = function (t) {
                  var e = t.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                    n = { position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden' },
                    o = 'transition';
                  return (
                    (n['-webkit-' + o] = n['-moz-' + o] = n['-o-' + o] = n[o] =
                      'all ' + i.duration / 1e3 + 's ' + i.easing),
                    e.css(n),
                    e
                  );
                },
                d = function () {
                  e.content.css('visibility', 'visible');
                };
              _('BuildControls' + n, function () {
                if (e._allowZoom()) {
                  if ((clearTimeout(o), e.content.css('visibility', 'hidden'), !(t = e._getItemToZoom())))
                    return void d();
                  (r = c(t)).css(e._getOffset()),
                    e.wrap.append(r),
                    (o = setTimeout(function () {
                      r.css(e._getOffset(!0)),
                        (o = setTimeout(function () {
                          d(),
                            setTimeout(function () {
                              r.remove(), (t = r = null), b('ZoomAnimationEnded');
                            }, 16);
                        }, s));
                    }, 16));
                }
              }),
                _(l + n, function () {
                  if (e._allowZoom()) {
                    if ((clearTimeout(o), (e.st.removalDelay = s), !t)) {
                      if (!(t = e._getItemToZoom())) return;
                      r = c(t);
                    }
                    r.css(e._getOffset(!0)),
                      e.wrap.append(r),
                      e.content.css('visibility', 'hidden'),
                      setTimeout(function () {
                        r.css(e._getOffset());
                      }, 16);
                  }
                }),
                _(a + n, function () {
                  e._allowZoom() && (d(), r && r.remove(), (t = null));
                });
            }
          },
          _allowZoom: function () {
            return 'image' === e.currItem.type;
          },
          _getItemToZoom: function () {
            return !!e.currItem.hasSize && e.currItem.img;
          },
          _getOffset: function (i) {
            var n,
              o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
              r = parseInt(n.css('padding-top'), 10),
              s = parseInt(n.css('padding-bottom'), 10);
            o.top -= t(window).scrollTop() - r;
            var a = { width: n.width(), height: (v ? n.innerHeight() : n[0].offsetHeight) - s - r };
            return (
              void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform),
              N
                ? (a['-moz-transform'] = a.transform = 'translate(' + o.left + 'px,' + o.top + 'px)')
                : ((a.left = o.left), (a.top = o.top)),
              a
            );
          },
        },
      });
    var j = 'iframe',
      H = function (t) {
        if (e.currTemplate[j]) {
          var i = e.currTemplate[j].find('iframe');
          i.length && (t || (i[0].src = '//about:blank'), e.isIE8 && i.css('display', t ? 'block' : 'none'));
        }
      };
    t.magnificPopup.registerModule(j, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: 'iframe_src',
        patterns: {
          youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' },
          vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' },
          gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push(j),
            _('BeforeChange', function (t, e, i) {
              e !== i && (e === j ? H() : i === j && H(!0));
            }),
            _(a + '.' + j, function () {
              H();
            });
        },
        getIframe: function (i, n) {
          var o = i.src,
            r = e.st.iframe;
          t.each(r.patterns, function () {
            return o.indexOf(this.index) > -1
              ? (this.id &&
                  (o =
                    'string' == typeof this.id
                      ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length)
                      : this.id.call(this, o)),
                (o = this.src.replace('%id%', o)),
                !1)
              : void 0;
          });
          var s = {};
          return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(n, s, i), e.updateStatus('ready'), n;
        },
      },
    });
    var M = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t;
      },
      z = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
      };
    t.magnificPopup.registerModule('gallery', {
      options: {
        enabled: !1,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: 'Previous (Left arrow key)',
        tNext: 'Next (Right arrow key)',
        tCounter: '%curr% of %total%',
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            o = '.mfp-gallery';
          return (
            (e.direction = !0),
            !(!i || !i.enabled) &&
              ((r += ' mfp-gallery'),
              _(d + o, function () {
                i.navigateByImgClick &&
                  e.wrap.on('click' + o, '.mfp-img', function () {
                    return e.items.length > 1 ? (e.next(), !1) : void 0;
                  }),
                  n.on('keydown' + o, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              _('UpdateStatus' + o, function (t, i) {
                i.text && (i.text = z(i.text, e.currItem.index, e.items.length));
              }),
              _(c + o, function (t, n, o, r) {
                var s = e.items.length;
                o.counter = s > 1 ? z(i.tCounter, r.index, s) : '';
              }),
              _('BuildControls' + o, function () {
                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                  var n = i.arrowMarkup,
                    o = (e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, 'left')).addClass(g)),
                    r = (e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, 'right')).addClass(g));
                  o.click(function () {
                    e.prev();
                  }),
                    r.click(function () {
                      e.next();
                    }),
                    e.container.append(o.add(r));
                }
              }),
              _(u + o, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              void _(a + o, function () {
                n.off(o), e.wrap.off('click' + o), (e.arrowRight = e.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (e.direction = !0), (e.index = M(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = M(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            i = e.st.gallery.preload,
            n = Math.min(i[0], e.items.length),
            o = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t);
        },
        _preloadItem: function (i) {
          if (((i = M(i)), !e.items[i].preloaded)) {
            var n = e.items[i];
            n.parsed || (n = e.parseEl(i)),
              b('LazyLoad', n),
              'image' === n.type &&
                (n.img = t('<img class="mfp-img" />')
                  .on('load.mfploader', function () {
                    n.hasSize = !0;
                  })
                  .on('error.mfploader', function () {
                    (n.hasSize = !0), (n.loadError = !0), b('LazyLoadError', n);
                  })
                  .attr('src', n.src)),
              (n.preloaded = !0);
          }
        },
      },
    });
    var q = 'retina';
    t.magnificPopup.registerModule(q, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return '@2x' + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              (_('ImageHasSize.' + q, function (t, e) {
                e.img.css({ 'max-width': e.img[0].naturalWidth / i, width: '100%' });
              }),
              _('ElementParse.' + q, function (e, n) {
                n.src = t.replaceSrc(n, i);
              }));
          }
        },
      },
    }),
      C();
  }),
  (function (t, e) {
    'use strict';
    (t.MixItUp = function () {
      var e = this;
      e._execAction('_constructor', 0),
        t.extend(e, {
          selectors: { target: '.mix', filter: '.filter', sort: '.sort' },
          animation: {
            enable: !0,
            effects: 'fade scale',
            duration: 600,
            easing: 'ease',
            perspectiveDistance: '3000',
            perspectiveOrigin: '50% 50%',
            queue: !0,
            queueLimit: 1,
            animateChangeLayout: !1,
            animateResizeContainer: !0,
            animateResizeTargets: !1,
            staggerSequence: !1,
            reverseOut: !1,
          },
          callbacks: { onMixLoad: !1, onMixStart: !1, onMixBusy: !1, onMixEnd: !1, onMixFail: !1, _user: !1 },
          controls: { enable: !0, live: !1, toggleFilterButtons: !1, toggleLogic: 'or', activeClass: 'active' },
          layout: { display: 'inline-block', containerClass: '', containerClassFail: 'fail' },
          load: { filter: 'all', sort: !1 },
          _$body: null,
          _$container: null,
          _$targets: null,
          _$parent: null,
          _$sortButtons: null,
          _$filterButtons: null,
          _suckMode: !1,
          _mixing: !1,
          _sorting: !1,
          _clicking: !1,
          _loading: !0,
          _changingLayout: !1,
          _changingClass: !1,
          _changingDisplay: !1,
          _origOrder: [],
          _startOrder: [],
          _newOrder: [],
          _activeFilter: null,
          _toggleArray: [],
          _toggleString: '',
          _activeSort: 'default:asc',
          _newSort: null,
          _startHeight: null,
          _newHeight: null,
          _incPadding: !0,
          _newDisplay: null,
          _newClass: null,
          _targetsBound: 0,
          _targetsDone: 0,
          _queue: [],
          _$show: t(),
          _$hide: t(),
        }),
        e._execAction('_constructor', 1);
    }),
      (t.MixItUp.prototype = {
        constructor: t.MixItUp,
        _instances: {},
        _handled: { _filter: {}, _sort: {} },
        _bound: { _filter: {}, _sort: {} },
        _actions: {},
        _filters: {},
        extend: function (e) {
          for (var i in e) t.MixItUp.prototype[i] = e[i];
        },
        addAction: function (e, i, n, o) {
          t.MixItUp.prototype._addHook('_actions', e, i, n, o);
        },
        addFilter: function (e, i, n, o) {
          t.MixItUp.prototype._addHook('_filters', e, i, n, o);
        },
        _addHook: function (e, i, n, o, r) {
          var s = t.MixItUp.prototype[e],
            a = {};
          (r = 1 === r || 'post' === r ? 'post' : 'pre'),
            (a[i] = {}),
            (a[i][r] = {}),
            (a[i][r][n] = o),
            t.extend(!0, s, a);
        },
        _init: function (e, i) {
          var n = this;
          if (
            (n._execAction('_init', 0, arguments),
            i && t.extend(!0, n, i),
            (n._$body = t('body')),
            (n._domNode = e),
            (n._$container = t(e)),
            n._$container.addClass(n.layout.containerClass),
            (n._id = e.id),
            n._platformDetect(),
            (n._brake = n._getPrefixedCSS('transition', 'none')),
            n._refresh(!0),
            (n._$parent = n._$targets.parent().length ? n._$targets.parent() : n._$container),
            n.load.sort &&
              ((n._newSort = n._parseSort(n.load.sort)),
              (n._newSortString = n.load.sort),
              (n._activeSort = n.load.sort),
              n._sort(),
              n._printSort()),
            (n._activeFilter =
              'all' === n.load.filter ? n.selectors.target : 'none' === n.load.filter ? '' : n.load.filter),
            n.controls.enable && n._bindHandlers(),
            n.controls.toggleFilterButtons)
          ) {
            n._buildToggleArray();
            for (var o = 0; o < n._toggleArray.length; o++)
              n._updateControls({ filter: n._toggleArray[o], sort: n._activeSort }, !0);
          } else n.controls.enable && n._updateControls({ filter: n._activeFilter, sort: n._activeSort });
          n._filter(),
            (n._init = !0),
            n._$container.data('mixItUp', n),
            n._execAction('_init', 1, arguments),
            n._buildState(),
            n._$targets.css(n._brake),
            n._goMix(n.animation.enable);
        },
        _platformDetect: function () {
          var t = this,
            i = ['Webkit', 'Moz', 'O', 'ms'],
            n = ['webkit', 'moz'],
            o = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
            r = 'undefined' != typeof InstallTrigger,
            s = (function (t) {
              for (var e = 0; e < i.length; e++)
                if (i[e] + 'Transition' in t.style) return { prefix: '-' + i[e].toLowerCase() + '-', vendor: i[e] };
              return 'transition' in t.style && '';
            })(t._domNode);
          t._execAction('_platformDetect', 0),
            (t._chrome = !!o && parseInt(o[1], 10)),
            (t._ff = !!r && parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1])),
            (t._prefix = s.prefix),
            (t._vendor = s.vendor),
            (t._suckMode = !window.atob || !t._prefix),
            t._suckMode && (t.animation.enable = !1),
            t._ff && t._ff <= 4 && (t.animation.enable = !1);
          for (var a = 0; a < n.length && !window.requestAnimationFrame; a++)
            window.requestAnimationFrame = window[n[a] + 'RequestAnimationFrame'];
          'function' != typeof Object.getPrototypeOf &&
            (Object.getPrototypeOf =
              'object' == typeof 'test'.__proto__
                ? function (t) {
                    return t.__proto__;
                  }
                : function (t) {
                    return t.constructor.prototype;
                  }),
            t._domNode.nextElementSibling === e &&
              Object.defineProperty(Element.prototype, 'nextElementSibling', {
                get: function () {
                  for (var t = this.nextSibling; t; ) {
                    if (1 === t.nodeType) return t;
                    t = t.nextSibling;
                  }
                  return null;
                },
              }),
            t._execAction('_platformDetect', 1);
        },
        _refresh: function (t, i) {
          var n = this;
          n._execAction('_refresh', 0, arguments), (n._$targets = n._$container.find(n.selectors.target));
          for (var o = 0; o < n._$targets.length; o++) {
            if ((d = n._$targets[o]).dataset === e || i) {
              d.dataset = {};
              for (var r = 0; r < d.attributes.length; r++) {
                var s = d.attributes[r],
                  a = s.name,
                  l = s.value;
                if (a.indexOf('data-') > -1) {
                  var c = n._helpers._camelCase(a.substring(5, a.length));
                  d.dataset[c] = l;
                }
              }
            }
            d.mixParent === e && (d.mixParent = n._id);
          }
          if ((n._$targets.length && t) || (!n._origOrder.length && n._$targets.length))
            for (n._origOrder = [], o = 0; o < n._$targets.length; o++) {
              var d;
              n._origOrder.push((d = n._$targets[o]));
            }
          n._execAction('_refresh', 1, arguments);
        },
        _bindHandlers: function () {
          var i = this,
            n = t.MixItUp.prototype._bound._filter,
            o = t.MixItUp.prototype._bound._sort;
          i._execAction('_bindHandlers', 0),
            i.controls.live
              ? i._$body
                  .on('click.mixItUp.' + i._id, i.selectors.sort, function () {
                    i._processClick(t(this), 'sort');
                  })
                  .on('click.mixItUp.' + i._id, i.selectors.filter, function () {
                    i._processClick(t(this), 'filter');
                  })
              : ((i._$sortButtons = t(i.selectors.sort)),
                (i._$filterButtons = t(i.selectors.filter)),
                i._$sortButtons.on('click.mixItUp.' + i._id, function () {
                  i._processClick(t(this), 'sort');
                }),
                i._$filterButtons.on('click.mixItUp.' + i._id, function () {
                  i._processClick(t(this), 'filter');
                })),
            (n[i.selectors.filter] = n[i.selectors.filter] === e ? 1 : n[i.selectors.filter] + 1),
            (o[i.selectors.sort] = o[i.selectors.sort] === e ? 1 : o[i.selectors.sort] + 1),
            i._execAction('_bindHandlers', 1);
        },
        _processClick: function (i, n) {
          var o = this,
            r = function (i, n, r) {
              var s = t.MixItUp.prototype;
              (s._handled['_' + n][o.selectors[n]] =
                s._handled['_' + n][o.selectors[n]] === e ? 1 : s._handled['_' + n][o.selectors[n]] + 1),
                s._handled['_' + n][o.selectors[n]] === s._bound['_' + n][o.selectors[n]] &&
                  (i[(r ? 'remove' : 'add') + 'Class'](o.controls.activeClass),
                  delete s._handled['_' + n][o.selectors[n]]);
            };
          if (
            (o._execAction('_processClick', 0, arguments),
            !o._mixing || (o.animation.queue && o._queue.length < o.animation.queueLimit))
          ) {
            if (((o._clicking = !0), 'sort' === n)) {
              var s = i.attr('data-sort');
              (!i.hasClass(o.controls.activeClass) || s.indexOf('random') > -1) &&
                (t(o.selectors.sort).removeClass(o.controls.activeClass), r(i, n), o.sort(s));
            }
            if ('filter' === n) {
              var a,
                l = i.attr('data-filter'),
                c = 'or' === o.controls.toggleLogic ? ',' : '';
              o.controls.toggleFilterButtons
                ? (o._buildToggleArray(),
                  i.hasClass(o.controls.activeClass)
                    ? (r(i, n, !0), (a = o._toggleArray.indexOf(l)), o._toggleArray.splice(a, 1))
                    : (r(i, n), o._toggleArray.push(l)),
                  (o._toggleArray = t.grep(o._toggleArray, function (t) {
                    return t;
                  })),
                  (o._toggleString = o._toggleArray.join(c)),
                  o.filter(o._toggleString))
                : i.hasClass(o.controls.activeClass) ||
                  (t(o.selectors.filter).removeClass(o.controls.activeClass), r(i, n), o.filter(l));
            }
            o._execAction('_processClick', 1, arguments);
          } else
            'function' == typeof o.callbacks.onMixBusy && o.callbacks.onMixBusy.call(o._domNode, o._state, o),
              o._execAction('_processClickBusy', 1, arguments);
        },
        _buildToggleArray: function () {
          var t = this,
            e = t._activeFilter.replace(/\s/g, '');
          if ((t._execAction('_buildToggleArray', 0, arguments), 'or' === t.controls.toggleLogic))
            t._toggleArray = e.split(',');
          else {
            (t._toggleArray = e.split('.')), !t._toggleArray[0] && t._toggleArray.shift();
            for (var i, n = 0; (i = t._toggleArray[n]); n++) t._toggleArray[n] = '.' + i;
          }
          t._execAction('_buildToggleArray', 1, arguments);
        },
        _updateControls: function (i, n) {
          var o = this,
            r = { filter: i.filter, sort: i.sort },
            s = function (t, e) {
              try {
                n && 'filter' === a && 'none' !== r.filter && '' !== r.filter
                  ? t.filter(e).addClass(o.controls.activeClass)
                  : t.removeClass(o.controls.activeClass).filter(e).addClass(o.controls.activeClass);
              } catch (i) {}
            },
            a = 'filter',
            l = null;
          o._execAction('_updateControls', 0, arguments),
            i.filter === e && (r.filter = o._activeFilter),
            i.sort === e && (r.sort = o._activeSort),
            r.filter === o.selectors.target && (r.filter = 'all');
          for (var c = 0; 2 > c; c++)
            (l = o.controls.live ? t(o.selectors[a]) : o['_$' + a + 'Buttons']) &&
              s(l, '[data-' + a + '="' + r[a] + '"]'),
              (a = 'sort');
          o._execAction('_updateControls', 1, arguments);
        },
        _filter: function () {
          var e = this;
          e._execAction('_filter', 0);
          for (var i = 0; i < e._$targets.length; i++) {
            var n = t(e._$targets[i]);
            n.is(e._activeFilter) ? (e._$show = e._$show.add(n)) : (e._$hide = e._$hide.add(n));
          }
          e._execAction('_filter', 1);
        },
        _sort: function () {
          var t = this;
          t._execAction('_sort', 0), (t._startOrder = []);
          for (var e = 0; e < t._$targets.length; e++) t._startOrder.push(t._$targets[e]);
          switch (t._newSort[0].sortBy) {
            case 'default':
              t._newOrder = t._origOrder;
              break;
            case 'random':
              t._newOrder = (function (t) {
                for (var e = t.slice(), i = e.length, n = i; n--; ) {
                  var o = parseInt(Math.random() * i),
                    r = e[n];
                  (e[n] = e[o]), (e[o] = r);
                }
                return e;
              })(t._startOrder);
              break;
            case 'custom':
              t._newOrder = t._newSort[0].order;
              break;
            default:
              t._newOrder = t._startOrder.concat().sort(function (e, i) {
                return t._compare(e, i);
              });
          }
          t._execAction('_sort', 1);
        },
        _compare: function (t, e, i) {
          var n = this,
            o = n._newSort[(i = i || 0)].order,
            r = function (t) {
              return t.dataset[n._newSort[i].sortBy] || 0;
            },
            s = isNaN(1 * r(t)) ? r(t).toLowerCase() : 1 * r(t),
            a = isNaN(1 * r(e)) ? r(e).toLowerCase() : 1 * r(e);
          return a > s
            ? 'asc' === o
              ? -1
              : 1
            : s > a
            ? 'asc' === o
              ? 1
              : -1
            : s === a && n._newSort.length > i + 1
            ? n._compare(t, e, i + 1)
            : 0;
        },
        _printSort: function (t) {
          var e = this,
            i = t ? e._startOrder : e._newOrder,
            n = e._$parent[0].querySelectorAll(e.selectors.target),
            o = n.length ? n[n.length - 1].nextElementSibling : null,
            r = document.createDocumentFragment();
          e._execAction('_printSort', 0, arguments);
          for (var s = 0; s < n.length; s++) {
            var a = n[s],
              l = a.nextSibling;
            'absolute' !== a.style.position &&
              (l && '#text' === l.nodeName && e._$parent[0].removeChild(l), e._$parent[0].removeChild(a));
          }
          for (s = 0; s < i.length; s++) {
            var c = i[s];
            if ('default' !== e._newSort[0].sortBy || 'desc' !== e._newSort[0].order || t)
              r.appendChild(c), r.appendChild(document.createTextNode(' '));
            else {
              var d = r.firstChild;
              r.insertBefore(c, d), r.insertBefore(document.createTextNode(' '), c);
            }
          }
          o ? e._$parent[0].insertBefore(r, o) : e._$parent[0].appendChild(r),
            e._execAction('_printSort', 1, arguments);
        },
        _parseSort: function (t) {
          for (var e = this, i = 'string' == typeof t ? t.split(' ') : [t], n = [], o = 0; o < i.length; o++) {
            var r = 'string' == typeof t ? i[o].split(':') : ['custom', i[o]],
              s = { sortBy: e._helpers._camelCase(r[0]), order: r[1] || 'asc' };
            if ((n.push(s), 'default' === s.sortBy || 'random' === s.sortBy)) break;
          }
          return e._execFilter('_parseSort', n, arguments);
        },
        _parseEffects: function () {
          var t = this,
            e = { opacity: '', transformIn: '', transformOut: '', filter: '' },
            i = function (e, i, n) {
              if (t.animation.effects.indexOf(e) > -1) {
                if (i) {
                  var o = t.animation.effects.indexOf(e + '(');
                  if (o > -1) {
                    var r = t.animation.effects.substring(o);
                    return { val: /\(([^)]+)\)/.exec(r)[1] };
                  }
                }
                return !0;
              }
              return !1;
            },
            n = function (t, e) {
              return e ? ('-' === t.charAt(0) ? t.substr(1, t.length) : '-' + t) : t;
            },
            o = function (t, o) {
              for (
                var r = [
                    ['scale', '.01'],
                    ['translateX', '20px'],
                    ['translateY', '20px'],
                    ['translateZ', '20px'],
                    ['rotateX', '90deg'],
                    ['rotateY', '90deg'],
                    ['rotateZ', '180deg'],
                  ],
                  s = 0;
                s < r.length;
                s++
              ) {
                var a = r[s][0],
                  l = r[s][1],
                  c = o && 'scale' !== a;
                e[t] += i(a) ? a + '(' + n(i(a, !0).val || l, c) + ') ' : '';
              }
            };
          return (
            (e.opacity = i('fade') ? i('fade', !0).val || '0' : '1'),
            o('transformIn'),
            t.animation.reverseOut ? o('transformOut', !0) : (e.transformOut = e.transformIn),
            (e.transition = {}),
            (e.transition = t._getPrefixedCSS(
              'transition',
              'all ' +
                t.animation.duration +
                'ms ' +
                t.animation.easing +
                ', opacity ' +
                t.animation.duration +
                'ms linear'
            )),
            (t.animation.stagger = !!i('stagger')),
            (t.animation.staggerDuration = parseInt(i('stagger') && i('stagger', !0).val ? i('stagger', !0).val : 100)),
            t._execFilter('_parseEffects', e)
          );
        },
        _buildState: function (t) {
          var e,
            i = this;
          return (
            i._execAction('_buildState', 0),
            (e = {
              activeFilter: '' === i._activeFilter ? 'none' : i._activeFilter,
              activeSort: t && i._newSortString ? i._newSortString : i._activeSort,
              fail: !i._$show.length && '' !== i._activeFilter,
              $targets: i._$targets,
              $show: i._$show,
              $hide: i._$hide,
              totalTargets: i._$targets.length,
              totalShow: i._$show.length,
              totalHide: i._$hide.length,
              display: t && i._newDisplay ? i._newDisplay : i.layout.display,
            }),
            t ? i._execFilter('_buildState', e) : ((i._state = e), void i._execAction('_buildState', 1))
          );
        },
        _goMix: function (t) {
          var e = this,
            i = function () {
              e._chrome && 31 === e._chrome && r(e._$parent[0]), e._setInter(), n();
            },
            n = function () {
              var t = window.pageYOffset,
                i = window.pageXOffset;
              document,
                e._getInterMixData(),
                e._setFinal(),
                e._getFinalMixData(),
                window.pageYOffset !== t && window.scrollTo(i, t),
                e._prepTargets(),
                window.requestAnimationFrame
                  ? requestAnimationFrame(o)
                  : setTimeout(function () {
                      o();
                    }, 20);
            },
            o = function () {
              e._animateTargets(), 0 === e._targetsBound && e._cleanUp();
            },
            r = function (t) {
              var e = t.parentElement,
                i = document.createElement('div'),
                n = document.createDocumentFragment();
              e.insertBefore(i, t), n.appendChild(t), e.replaceChild(t, i);
            },
            s = e._buildState(!0);
          e._execAction('_goMix', 0, arguments),
            !e.animation.duration && (t = !1),
            (e._mixing = !0),
            e._$container.removeClass(e.layout.containerClassFail),
            'function' == typeof e.callbacks.onMixStart && e.callbacks.onMixStart.call(e._domNode, e._state, s, e),
            e._$container.trigger('mixStart', [e._state, s, e]),
            e._getOrigMixData(),
            t && !e._suckMode ? (window.requestAnimationFrame ? requestAnimationFrame(i) : i()) : e._cleanUp(),
            e._execAction('_goMix', 1, arguments);
        },
        _getTargetData: function (t, e) {
          var i;
          (t.dataset[e + 'PosX'] = t.offsetLeft),
            (t.dataset[e + 'PosY'] = t.offsetTop),
            this.animation.animateResizeTargets &&
              ((i = this._suckMode ? { marginBottom: '', marginRight: '' } : window.getComputedStyle(t)),
              (t.dataset[e + 'MarginBottom'] = parseInt(i.marginBottom)),
              (t.dataset[e + 'MarginRight'] = parseInt(i.marginRight)),
              (t.dataset[e + 'Width'] = t.offsetWidth),
              (t.dataset[e + 'Height'] = t.offsetHeight));
        },
        _getOrigMixData: function () {
          var t = this,
            e = t._suckMode ? { boxSizing: '' } : window.getComputedStyle(t._$parent[0]);
          (t._incPadding = 'border-box' === (e.boxSizing || e[t._vendor + 'BoxSizing'])),
            t._execAction('_getOrigMixData', 0),
            !t._suckMode && (t.effects = t._parseEffects()),
            (t._$toHide = t._$hide.filter(':visible')),
            (t._$toShow = t._$show.filter(':hidden')),
            (t._$pre = t._$targets.filter(':visible')),
            (t._startHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height());
          for (var i = 0; i < t._$pre.length; i++) t._getTargetData(t._$pre[i], 'orig');
          t._execAction('_getOrigMixData', 1);
        },
        _setInter: function () {
          var t = this;
          t._execAction('_setInter', 0),
            t._changingLayout && t.animation.animateChangeLayout
              ? (t._$toShow.css('display', t._newDisplay),
                t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass))
              : t._$toShow.css('display', t.layout.display),
            t._execAction('_setInter', 1);
        },
        _getInterMixData: function () {
          var t = this;
          t._execAction('_getInterMixData', 0);
          for (var e = 0; e < t._$toShow.length; e++) t._getTargetData(t._$toShow[e], 'inter');
          for (e = 0; e < t._$pre.length; e++) t._getTargetData(t._$pre[e], 'inter');
          t._execAction('_getInterMixData', 1);
        },
        _setFinal: function () {
          var t = this;
          t._execAction('_setFinal', 0),
            t._sorting && t._printSort(),
            t._$toHide.removeStyle('display'),
            t._changingLayout && t.animation.animateChangeLayout && t._$pre.css('display', t._newDisplay),
            t._execAction('_setFinal', 1);
        },
        _getFinalMixData: function () {
          var t = this;
          t._execAction('_getFinalMixData', 0);
          for (var e = 0; e < t._$toShow.length; e++) t._getTargetData(t._$toShow[e], 'final');
          for (e = 0; e < t._$pre.length; e++) t._getTargetData(t._$pre[e], 'final');
          (t._newHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height()),
            t._sorting && t._printSort(!0),
            t._$toShow.removeStyle('display'),
            t._$pre.css('display', t.layout.display),
            t._changingClass &&
              t.animation.animateChangeLayout &&
              t._$container.removeClass(t._newClass).addClass(t.layout.containerClass),
            t._execAction('_getFinalMixData', 1);
        },
        _prepTargets: function () {
          var e = this,
            i = {
              _in: e._getPrefixedCSS('transform', e.effects.transformIn),
              _out: e._getPrefixedCSS('transform', e.effects.transformOut),
            };
          e._execAction('_prepTargets', 0),
            e.animation.animateResizeContainer && e._$parent.css('height', e._startHeight + 'px');
          for (var n = 0; n < e._$toShow.length; n++) {
            var o = t((r = e._$toShow[n]));
            (r.style.opacity = e.effects.opacity),
              (r.style.display =
                e._changingLayout && e.animation.animateChangeLayout ? e._newDisplay : e.layout.display),
              o.css(i._in),
              e.animation.animateResizeTargets &&
                ((r.style.width = r.dataset.finalWidth + 'px'),
                (r.style.height = r.dataset.finalHeight + 'px'),
                (r.style.marginRight =
                  1 * r.dataset.finalMarginRight - (r.dataset.finalWidth - r.dataset.interWidth) + 'px'),
                (r.style.marginBottom =
                  1 * r.dataset.finalMarginBottom - (r.dataset.finalHeight - r.dataset.interHeight) + 'px'));
          }
          for (n = 0; n < e._$pre.length; n++) {
            o = t((r = e._$pre[n]));
            var r,
              s = { x: r.dataset.origPosX - r.dataset.interPosX, y: r.dataset.origPosY - r.dataset.interPosY };
            (i = e._getPrefixedCSS('transform', 'translate(' + s.x + 'px,' + s.y + 'px)')),
              o.css(i),
              e.animation.animateResizeTargets &&
                ((r.style.width = r.dataset.origWidth + 'px'),
                (r.style.height = r.dataset.origHeight + 'px'),
                r.dataset.origWidth - r.dataset.finalWidth &&
                  (r.style.marginRight =
                    1 * r.dataset.origMarginRight - (r.dataset.origWidth - r.dataset.interWidth) + 'px'),
                r.dataset.origHeight - r.dataset.finalHeight &&
                  (r.style.marginBottom =
                    1 * r.dataset.origMarginBottom - (r.dataset.origHeight - r.dataset.interHeight) + 'px'));
          }
          e._execAction('_prepTargets', 1);
        },
        _animateTargets: function () {
          var e = this;
          e._execAction('_animateTargets', 0),
            (e._targetsDone = 0),
            (e._targetsBound = 0),
            e._$parent
              .css(e._getPrefixedCSS('perspective', e.animation.perspectiveDistance + 'px'))
              .css(e._getPrefixedCSS('perspective-origin', e.animation.perspectiveOrigin)),
            e.animation.animateResizeContainer &&
              e._$parent
                .css(e._getPrefixedCSS('transition', 'height ' + e.animation.duration + 'ms ease'))
                .css('height', e._newHeight + 'px');
          for (var i = 0; i < e._$toShow.length; i++) {
            var n = t((c = e._$toShow[i])),
              o = { x: c.dataset.finalPosX - c.dataset.interPosX, y: c.dataset.finalPosY - c.dataset.interPosY },
              r = e._getDelay(i),
              s = {};
            c.style.opacity = '';
            for (var a = 0; 2 > a; a++) {
              var l = 0 === a ? (l = e._prefix) : '';
              e._ff &&
                e._ff <= 20 &&
                ((s[l + 'transition-property'] = 'all'),
                (s[l + 'transition-timing-function'] = e.animation.easing + 'ms'),
                (s[l + 'transition-duration'] = e.animation.duration + 'ms')),
                (s[l + 'transition-delay'] = r + 'ms'),
                (s[l + 'transform'] = 'translate(' + o.x + 'px,' + o.y + 'px)');
            }
            (e.effects.transform || e.effects.opacity) && e._bindTargetDone(n),
              e._ff && e._ff <= 20 ? n.css(s) : n.css(e.effects.transition).css(s);
          }
          for (i = 0; i < e._$pre.length; i++)
            (n = t((c = e._$pre[i]))),
              (o = { x: c.dataset.finalPosX - c.dataset.interPosX, y: c.dataset.finalPosY - c.dataset.interPosY }),
              (r = e._getDelay(i)),
              (c.dataset.finalPosX !== c.dataset.origPosX || c.dataset.finalPosY !== c.dataset.origPosY) &&
                e._bindTargetDone(n),
              n.css(
                e._getPrefixedCSS(
                  'transition',
                  'all ' + e.animation.duration + 'ms ' + e.animation.easing + ' ' + r + 'ms'
                )
              ),
              n.css(e._getPrefixedCSS('transform', 'translate(' + o.x + 'px,' + o.y + 'px)')),
              e.animation.animateResizeTargets &&
                (c.dataset.origWidth - c.dataset.finalWidth &&
                  1 * c.dataset.finalWidth &&
                  ((c.style.width = c.dataset.finalWidth + 'px'),
                  (c.style.marginRight =
                    1 * c.dataset.finalMarginRight - (c.dataset.finalWidth - c.dataset.interWidth) + 'px')),
                c.dataset.origHeight - c.dataset.finalHeight &&
                  1 * c.dataset.finalHeight &&
                  ((c.style.height = c.dataset.finalHeight + 'px'),
                  (c.style.marginBottom =
                    1 * c.dataset.finalMarginBottom - (c.dataset.finalHeight - c.dataset.interHeight) + 'px')));
          for (
            e._changingClass && e._$container.removeClass(e.layout.containerClass).addClass(e._newClass), i = 0;
            i < e._$toHide.length;
            i++
          ) {
            (n = t((c = e._$toHide[i]))), (r = e._getDelay(i));
            var c,
              d = {};
            for (a = 0; 2 > a; a++)
              (d[(l = 0 === a ? (l = e._prefix) : '') + 'transition-delay'] = r + 'ms'),
                (d[l + 'transform'] = e.effects.transformOut),
                (d.opacity = e.effects.opacity);
            n.css(e.effects.transition).css(d), (e.effects.transform || e.effects.opacity) && e._bindTargetDone(n);
          }
          e._execAction('_animateTargets', 1);
        },
        _bindTargetDone: function (e) {
          var i = this,
            n = e[0];
          i._execAction('_bindTargetDone', 0, arguments),
            n.dataset.bound ||
              ((n.dataset.bound = !0),
              i._targetsBound++,
              e.on('webkitTransitionEnd.mixItUp transitionend.mixItUp', function (o) {
                (o.originalEvent.propertyName.indexOf('transform') > -1 ||
                  o.originalEvent.propertyName.indexOf('opacity') > -1) &&
                  t(o.originalEvent.target).is(i.selectors.target) &&
                  (e.off('.mixItUp'), (n.dataset.bound = ''), i._targetDone());
              })),
            i._execAction('_bindTargetDone', 1, arguments);
        },
        _targetDone: function () {
          var t = this;
          t._execAction('_targetDone', 0),
            t._targetsDone++,
            t._targetsDone === t._targetsBound && t._cleanUp(),
            t._execAction('_targetDone', 1);
        },
        _cleanUp: function () {
          var e = this,
            i = e.animation.animateResizeTargets
              ? 'transform opacity width height margin-bottom margin-right'
              : 'transform opacity';
          e._execAction('_cleanUp', 0),
            e._$show.css('display', e._changingLayout ? e._newDisplay : e.layout.display),
            e._$targets.css(e._brake),
            e._$targets
              .removeStyle(i, e._prefix)
              .removeAttr(
                'data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom'
              ),
            e._$hide.removeStyle('display'),
            e._$parent.removeStyle(
              'height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin',
              e._prefix
            ),
            e._sorting && (e._printSort(), (e._activeSort = e._newSortString), (e._sorting = !1)),
            e._changingLayout &&
              (e._changingDisplay && ((e.layout.display = e._newDisplay), (e._changingDisplay = !1)),
              e._changingClass &&
                (e._$parent.removeClass(e.layout.containerClass).addClass(e._newClass),
                (e.layout.containerClass = e._newClass),
                (e._changingClass = !1)),
              (e._changingLayout = !1)),
            e._refresh(),
            e._buildState(),
            e._state.fail && e._$container.addClass(e.layout.containerClassFail),
            (e._$show = t()),
            (e._$hide = t()),
            window.requestAnimationFrame &&
              requestAnimationFrame(function () {
                e._$targets.removeStyle('transition', e._prefix);
              }),
            (e._mixing = !1),
            'function' == typeof e.callbacks._user && e.callbacks._user.call(e._domNode, e._state, e),
            'function' == typeof e.callbacks.onMixEnd && e.callbacks.onMixEnd.call(e._domNode, e._state, e),
            e._$container.trigger('mixEnd', [e._state, e]),
            e._state.fail &&
              ('function' == typeof e.callbacks.onMixFail && e.callbacks.onMixFail.call(e._domNode, e._state, e),
              e._$container.trigger('mixFail', [e._state, e])),
            e._loading &&
              ('function' == typeof e.callbacks.onMixLoad && e.callbacks.onMixLoad.call(e._domNode, e._state, e),
              e._$container.trigger('mixLoad', [e._state, e])),
            e._queue.length &&
              (e._execAction('_queue', 0),
              e.multiMix(e._queue[0][0], e._queue[0][1], e._queue[0][2]),
              e._queue.splice(0, 1)),
            e._execAction('_cleanUp', 1),
            (e._loading = !1);
        },
        _getPrefixedCSS: function (t, e, i) {
          var n = this,
            o = {},
            r = '',
            s = -1;
          for (s = 0; 2 > s; s++) o[(r = 0 === s ? n._prefix : '') + t] = i ? r + e : e;
          return n._execFilter('_getPrefixedCSS', o, arguments);
        },
        _getDelay: function (t) {
          var e = this,
            i =
              'function' == typeof e.animation.staggerSequence
                ? e.animation.staggerSequence.call(e._domNode, t, e._state)
                : t,
            n = e.animation.stagger ? i * e.animation.staggerDuration : 0;
          return e._execFilter('_getDelay', n, arguments);
        },
        _parseMultiMixArgs: function (t) {
          for (
            var e = this, i = { command: null, animate: e.animation.enable, callback: null }, n = 0;
            n < t.length;
            n++
          ) {
            var o = t[n];
            null !== o &&
              ('object' == typeof o || 'string' == typeof o
                ? (i.command = o)
                : 'boolean' == typeof o
                ? (i.animate = o)
                : 'function' == typeof o && (i.callback = o));
          }
          return e._execFilter('_parseMultiMixArgs', i, arguments);
        },
        _parseInsertArgs: function (e) {
          for (
            var i = this,
              n = { index: 0, $object: t(), multiMix: { filter: i._state.activeFilter }, callback: null },
              o = 0;
            o < e.length;
            o++
          ) {
            var r = e[o];
            'number' == typeof r
              ? (n.index = r)
              : 'object' == typeof r && r instanceof t
              ? (n.$object = r)
              : 'object' == typeof r && i._helpers._isElement(r)
              ? (n.$object = t(r))
              : 'object' == typeof r && null !== r
              ? (n.multiMix = r)
              : 'boolean' != typeof r || r
              ? 'function' == typeof r && (n.callback = r)
              : (n.multiMix = !1);
          }
          return i._execFilter('_parseInsertArgs', n, arguments);
        },
        _execAction: function (t, e, i) {
          var n = this,
            o = e ? 'post' : 'pre';
          if (!n._actions.isEmptyObject && n._actions.hasOwnProperty(t))
            for (var r in n._actions[t][o]) n._actions[t][o][r].call(n, i);
        },
        _execFilter: function (t, e, i) {
          var n = this;
          if (n._filters.isEmptyObject || !n._filters.hasOwnProperty(t)) return e;
          for (var o in n._filters[t]) return n._filters[t][o].call(n, i);
        },
        _helpers: {
          _camelCase: function (t) {
            return t.replace(/-([a-z])/g, function (t) {
              return t[1].toUpperCase();
            });
          },
          _isElement: function (t) {
            return window.HTMLElement
              ? t instanceof HTMLElement
              : null !== t && 1 === t.nodeType && 'string' === t.nodeName;
          },
        },
        isMixing: function () {
          return this._execFilter('isMixing', this._mixing);
        },
        filter: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t._clicking && (t._toggleString = ''), t.multiMix({ filter: e.command }, e.animate, e.callback);
        },
        sort: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t.multiMix({ sort: e.command }, e.animate, e.callback);
        },
        changeLayout: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t.multiMix({ changeLayout: e.command }, e.animate, e.callback);
        },
        multiMix: function () {
          var t = this,
            i = t._parseMultiMixArgs(arguments);
          if ((t._execAction('multiMix', 0, arguments), t._mixing))
            t.animation.queue && t._queue.length < t.animation.queueLimit
              ? (t._queue.push(arguments),
                t.controls.enable && !t._clicking && t._updateControls(i.command),
                t._execAction('multiMixQueue', 1, arguments))
              : ('function' == typeof t.callbacks.onMixBusy && t.callbacks.onMixBusy.call(t._domNode, t._state, t),
                t._$container.trigger('mixBusy', [t._state, t]),
                t._execAction('multiMixBusy', 1, arguments));
          else {
            t.controls.enable &&
              !t._clicking &&
              (t.controls.toggleFilterButtons && t._buildToggleArray(),
              t._updateControls(i.command, t.controls.toggleFilterButtons)),
              t._queue.length < 2 && (t._clicking = !1),
              delete t.callbacks._user,
              i.callback && (t.callbacks._user = i.callback);
            var n = i.command.sort,
              o = i.command.filter,
              r = i.command.changeLayout;
            t._refresh(),
              n && ((t._newSort = t._parseSort(n)), (t._newSortString = n), (t._sorting = !0), t._sort()),
              o !== e && (t._activeFilter = o = 'all' === o ? t.selectors.target : o),
              t._filter(),
              r &&
                ((t._newDisplay = 'string' == typeof r ? r : r.display || t.layout.display),
                (t._newClass = r.containerClass || ''),
                (t._newDisplay !== t.layout.display || t._newClass !== t.layout.containerClass) &&
                  ((t._changingLayout = !0),
                  (t._changingClass = t._newClass !== t.layout.containerClass),
                  (t._changingDisplay = t._newDisplay !== t.layout.display))),
              t._$targets.css(t._brake),
              t._goMix(i.animate ^ t.animation.enable ? i.animate : t.animation.enable),
              t._execAction('multiMix', 1, arguments);
          }
        },
        insert: function () {
          var t = this,
            e = t._parseInsertArgs(arguments),
            i = 'function' == typeof e.callback ? e.callback : null,
            n = document.createDocumentFragment(),
            o =
              (t._refresh(),
              t._$targets.length
                ? e.index < t._$targets.length || !t._$targets.length
                  ? t._$targets[e.index]
                  : t._$targets[t._$targets.length - 1].nextElementSibling
                : t._$parent[0].children[0]);
          if ((t._execAction('insert', 0, arguments), e.$object)) {
            for (var r = 0; r < e.$object.length; r++) {
              var s = e.$object[r];
              n.appendChild(s), n.appendChild(document.createTextNode(' '));
            }
            t._$parent[0].insertBefore(n, o);
          }
          t._execAction('insert', 1, arguments), 'object' == typeof e.multiMix && t.multiMix(e.multiMix, i);
        },
        prepend: function () {
          var t = this,
            e = t._parseInsertArgs(arguments);
          t.insert(0, e.$object, e.multiMix, e.callback);
        },
        append: function () {
          var t = this,
            e = t._parseInsertArgs(arguments);
          t.insert(t._state.totalTargets, e.$object, e.multiMix, e.callback);
        },
        getOption: function (t) {
          var i = this,
            n = function (t, i) {
              for (var n = i.split('.'), o = n.pop(), r = n.length, s = 1, a = n[0] || i; (t = t[a]) && r > s; )
                (a = n[s]), s++;
              return t !== e ? (t[o] !== e ? t[o] : t) : void 0;
            };
          return t ? i._execFilter('getOption', n(i, t), arguments) : i;
        },
        setOptions: function (e) {
          var i = this;
          i._execAction('setOptions', 0, arguments),
            'object' == typeof e && t.extend(!0, i, e),
            i._execAction('setOptions', 1, arguments);
        },
        getState: function () {
          var t = this;
          return t._execFilter('getState', t._state, t);
        },
        forceRefresh: function () {
          this._refresh(!1, !0);
        },
        destroy: function (e) {
          var i = this,
            n = t.MixItUp.prototype._bound._filter,
            o = t.MixItUp.prototype._bound._sort;
          i._execAction('destroy', 0, arguments),
            i._$body.add(t(i.selectors.sort)).add(t(i.selectors.filter)).off('.mixItUp');
          for (var r = 0; r < i._$targets.length; r++) {
            var s = i._$targets[r];
            e && (s.style.display = ''), delete s.mixParent;
          }
          i._execAction('destroy', 1, arguments),
            n[i.selectors.filter] && n[i.selectors.filter] > 1
              ? n[i.selectors.filter]--
              : 1 === n[i.selectors.filter] && delete n[i.selectors.filter],
            o[i.selectors.sort] && o[i.selectors.sort] > 1
              ? o[i.selectors.sort]--
              : 1 === o[i.selectors.sort] && delete o[i.selectors.sort],
            delete t.MixItUp.prototype._instances[i._id];
        },
      }),
      (t.fn.mixItUp = function () {
        var i,
          n = arguments,
          o = [],
          r = function (e, i) {
            var n = new t.MixItUp(),
              o = function () {
                return ('00000' + ((16777216 * Math.random()) << 0).toString(16)).substr(-6).toUpperCase();
              };
            n._execAction('_instantiate', 0, arguments),
              (e.id = e.id ? e.id : 'MixItUp' + o()),
              n._instances[e.id] || ((n._instances[e.id] = n), n._init(e, i)),
              n._execAction('_instantiate', 1, arguments);
          };
        return (
          (i = this.each(function () {
            if (n && 'string' == typeof n[0]) {
              var i = t.MixItUp.prototype._instances[this.id];
              if ('isLoaded' === n[0]) o.push(!!i);
              else {
                var s = i[n[0]](n[1], n[2], n[3]);
                s !== e && o.push(s);
              }
            } else r(this, n[0]);
          })),
          o.length ? (o.length > 1 ? o : o[0]) : i
        );
      }),
      (t.fn.removeStyle = function (i, n) {
        return (
          (n = n || ''),
          this.each(function () {
            for (var o = this, r = i.split(' '), s = 0; s < r.length; s++)
              for (var a = 0; 4 > a; a++) {
                switch (a) {
                  case 0:
                    var l = r[s];
                    break;
                  case 1:
                    l = t.MixItUp.prototype._helpers._camelCase(l);
                    break;
                  case 2:
                    l = n + r[s];
                    break;
                  case 3:
                    l = t.MixItUp.prototype._helpers._camelCase(n + r[s]);
                }
                if (
                  (o.style[l] !== e && 'unknown' != typeof o.style[l] && o.style[l].length > 0 && (o.style[l] = ''),
                  !n && 1 === a)
                )
                  break;
              }
            o.attributes &&
              o.attributes.style &&
              o.attributes.style !== e &&
              '' === o.attributes.style.value &&
              o.attributes.removeNamedItem('style');
          })
        );
      });
  })(jQuery),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'object' == typeof exports
      ? (module.exports = e(require('jquery')))
      : (t.lightbox = e(t.jQuery));
  })(this, function (t) {
    function e(e) {
      (this.album = []),
        (this.currentImageIndex = void 0),
        this.init(),
        (this.options = t.extend({}, this.constructor.defaults)),
        this.option(e);
    }
    return (
      (e.defaults = {
        albumLabel: 'Image %1 of %2',
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 500,
        fitImagesInViewport: !0,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
      }),
      (e.prototype.option = function (e) {
        t.extend(this.options, e);
      }),
      (e.prototype.imageCountLabel = function (t, e) {
        return this.options.albumLabel.replace(/%1/g, t).replace(/%2/g, e);
      }),
      (e.prototype.init = function () {
        this.enable(), this.build();
      }),
      (e.prototype.enable = function () {
        var e = this;
        t('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function (
          i
        ) {
          return e.start(t(i.currentTarget)), !1;
        });
      }),
      (e.prototype.build = function () {
        var e = this;
        t(
          '<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>'
        ).appendTo(t('body')),
          (this.$lightbox = t('#lightbox')),
          (this.$overlay = t('#lightboxOverlay')),
          (this.$outerContainer = this.$lightbox.find('.lb-outerContainer')),
          (this.$container = this.$lightbox.find('.lb-container')),
          (this.containerTopPadding = parseInt(this.$container.css('padding-top'), 10)),
          (this.containerRightPadding = parseInt(this.$container.css('padding-right'), 10)),
          (this.containerBottomPadding = parseInt(this.$container.css('padding-bottom'), 10)),
          (this.containerLeftPadding = parseInt(this.$container.css('padding-left'), 10)),
          this.$overlay.hide().on('click', function () {
            return e.end(), !1;
          }),
          this.$lightbox.hide().on('click', function (i) {
            return 'lightbox' === t(i.target).attr('id') && e.end(), !1;
          }),
          this.$outerContainer.on('click', function (i) {
            return 'lightbox' === t(i.target).attr('id') && e.end(), !1;
          }),
          this.$lightbox.find('.lb-prev').on('click', function () {
            return e.changeImage(0 === e.currentImageIndex ? e.album.length - 1 : e.currentImageIndex - 1), !1;
          }),
          this.$lightbox.find('.lb-next').on('click', function () {
            return e.changeImage(e.currentImageIndex === e.album.length - 1 ? 0 : e.currentImageIndex + 1), !1;
          }),
          this.$lightbox.find('.lb-loader, .lb-close').on('click', function () {
            return e.end(), !1;
          });
      }),
      (e.prototype.start = function (e) {
        function i(t) {
          n.album.push({ link: t.attr('href'), title: t.attr('data-title') || t.attr('title') });
        }
        var n = this,
          o = t(window);
        o.on('resize', t.proxy(this.sizeOverlay, this)),
          t('select, object, embed').css({ visibility: 'hidden' }),
          this.sizeOverlay(),
          (this.album = []);
        var r,
          s = 0,
          a = e.attr('data-lightbox');
        if (a) {
          r = t(e.prop('tagName') + '[data-lightbox="' + a + '"]');
          for (var l = 0; l < r.length; l = ++l) i(t(r[l])), r[l] === e[0] && (s = l);
        } else if ('lightbox' === e.attr('rel')) i(e);
        else {
          r = t(e.prop('tagName') + '[rel="' + e.attr('rel') + '"]');
          for (var c = 0; c < r.length; c = ++c) i(t(r[c])), r[c] === e[0] && (s = c);
        }
        var d = o.scrollTop() + this.options.positionFromTop,
          u = o.scrollLeft();
        this.$lightbox.css({ top: d + 'px', left: u + 'px' }).fadeIn(this.options.fadeDuration),
          this.options.disableScrolling && t('body').addClass('lb-disable-scrolling'),
          this.changeImage(s);
      }),
      (e.prototype.changeImage = function (e) {
        var i = this;
        this.disableKeyboardNav();
        var n = this.$lightbox.find('.lb-image');
        this.$overlay.fadeIn(this.options.fadeDuration),
          t('.lb-loader').fadeIn('slow'),
          this.$lightbox
            .find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption')
            .hide(),
          this.$outerContainer.addClass('animating');
        var o = new Image();
        (o.onload = function () {
          var r, s, a, l, c, d;
          n.attr('src', i.album[e].link),
            t(o),
            n.width(o.width),
            n.height(o.height),
            i.options.fitImagesInViewport &&
              ((d = t(window).width()),
              (c = t(window).height()),
              (l = d - i.containerLeftPadding - i.containerRightPadding - 20),
              (a = c - i.containerTopPadding - i.containerBottomPadding - 120),
              i.options.maxWidth && i.options.maxWidth < l && (l = i.options.maxWidth),
              i.options.maxHeight && i.options.maxHeight < l && (a = i.options.maxHeight),
              (o.width > l || o.height > a) &&
                (o.width / l > o.height / a
                  ? ((s = l), (r = parseInt(o.height / (o.width / s), 10)), n.width(s), n.height(r))
                  : ((r = a), (s = parseInt(o.width / (o.height / r), 10)), n.width(s), n.height(r)))),
            i.sizeContainer(n.width(), n.height());
        }),
          (o.src = this.album[e].link),
          (this.currentImageIndex = e);
      }),
      (e.prototype.sizeOverlay = function () {
        this.$overlay.width(t(document).width()).height(t(document).height());
      }),
      (e.prototype.sizeContainer = function (t, e) {
        function i() {
          n.$lightbox.find('.lb-dataContainer').width(s),
            n.$lightbox.find('.lb-prevLink').height(a),
            n.$lightbox.find('.lb-nextLink').height(a),
            n.showImage();
        }
        var n = this,
          o = this.$outerContainer.outerWidth(),
          r = this.$outerContainer.outerHeight(),
          s = t + this.containerLeftPadding + this.containerRightPadding,
          a = e + this.containerTopPadding + this.containerBottomPadding;
        o !== s || r !== a
          ? this.$outerContainer.animate({ width: s, height: a }, this.options.resizeDuration, 'swing', function () {
              i();
            })
          : i();
      }),
      (e.prototype.showImage = function () {
        this.$lightbox.find('.lb-loader').stop(!0).hide(),
          this.$lightbox.find('.lb-image').fadeIn('slow'),
          this.updateNav(),
          this.updateDetails(),
          this.preloadNeighboringImages(),
          this.enableKeyboardNav();
      }),
      (e.prototype.updateNav = function () {
        var t = !1;
        try {
          document.createEvent('TouchEvent'), (t = !!this.options.alwaysShowNavOnTouchDevices);
        } catch (e) {}
        this.$lightbox.find('.lb-nav').show(),
          this.album.length > 1 &&
            (this.options.wrapAround
              ? (t && this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1'),
                this.$lightbox.find('.lb-prev, .lb-next').show())
              : (this.currentImageIndex > 0 &&
                  (this.$lightbox.find('.lb-prev').show(), t && this.$lightbox.find('.lb-prev').css('opacity', '1')),
                this.currentImageIndex < this.album.length - 1 &&
                  (this.$lightbox.find('.lb-next').show(), t && this.$lightbox.find('.lb-next').css('opacity', '1'))));
      }),
      (e.prototype.updateDetails = function () {
        var e = this;
        if (
          (void 0 !== this.album[this.currentImageIndex].title &&
            '' !== this.album[this.currentImageIndex].title &&
            this.$lightbox
              .find('.lb-caption')
              .html(this.album[this.currentImageIndex].title)
              .fadeIn('fast')
              .find('a')
              .on('click', function (e) {
                void 0 !== t(this).attr('target')
                  ? window.open(t(this).attr('href'), t(this).attr('target'))
                  : (location.href = t(this).attr('href'));
              }),
          this.album.length > 1 && this.options.showImageNumberLabel)
        ) {
          var i = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
          this.$lightbox.find('.lb-number').text(i).fadeIn('fast');
        } else this.$lightbox.find('.lb-number').hide();
        this.$outerContainer.removeClass('animating'),
          this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function () {
            return e.sizeOverlay();
          });
      }),
      (e.prototype.preloadNeighboringImages = function () {
        this.album.length > this.currentImageIndex + 1 &&
          (new Image().src = this.album[this.currentImageIndex + 1].link),
          this.currentImageIndex > 0 && (new Image().src = this.album[this.currentImageIndex - 1].link);
      }),
      (e.prototype.enableKeyboardNav = function () {
        t(document).on('keyup.keyboard', t.proxy(this.keyboardAction, this));
      }),
      (e.prototype.disableKeyboardNav = function () {
        t(document).off('.keyboard');
      }),
      (e.prototype.keyboardAction = function (t) {
        var e = t.keyCode,
          i = String.fromCharCode(e).toLowerCase();
        27 === e || i.match(/x|o|c/)
          ? this.end()
          : 'p' === i || 37 === e
          ? 0 !== this.currentImageIndex
            ? this.changeImage(this.currentImageIndex - 1)
            : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1)
          : ('n' === i || 39 === e) &&
            (this.currentImageIndex !== this.album.length - 1
              ? this.changeImage(this.currentImageIndex + 1)
              : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
      }),
      (e.prototype.end = function () {
        this.disableKeyboardNav(),
          t(window).off('resize', this.sizeOverlay),
          this.$lightbox.fadeOut(this.options.fadeDuration),
          this.$overlay.fadeOut(this.options.fadeDuration),
          t('select, object, embed').css({ visibility: 'visible' }),
          this.options.disableScrolling && t('body').removeClass('lb-disable-scrolling');
      }),
      new e()
    );
  }),
  (function (t) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : 'undefined' != typeof exports
      ? (module.exports = t(require('jquery')))
      : t(jQuery);
  })(function (t) {
    'use strict';
    var e = window.Slick || {};
    ((e = (function () {
      var e = 0;
      return function (i, n) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function (e, i) {
            return t('<button type="button" />').text(i + 1);
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = 'hidden'),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = t(i)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = 'visibilitychange'),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = t(i).data('slick') || {}),
          (r.options = t.extend({}, r.defaults, n, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = 'mozHidden'), (r.visibilityChange = 'mozvisibilitychange'))
            : void 0 !== document.webkitHidden &&
              ((r.hidden = 'webkitHidden'), (r.visibilityChange = 'webkitvisibilitychange')),
          (r.autoPlay = t.proxy(r.autoPlay, r)),
          (r.autoPlayClear = t.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = t.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = t.proxy(r.changeSlide, r)),
          (r.clickHandler = t.proxy(r.clickHandler, r)),
          (r.selectHandler = t.proxy(r.selectHandler, r)),
          (r.setPosition = t.proxy(r.setPosition, r)),
          (r.swipeHandler = t.proxy(r.swipeHandler, r)),
          (r.dragHandler = t.proxy(r.dragHandler, r)),
          (r.keyHandler = t.proxy(r.keyHandler, r)),
          (r.instanceUid = e++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' });
    }),
      (e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var o = this;
        if ('boolean' == typeof i) (n = i), (i = null);
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(),
          'number' == typeof i
            ? 0 === i && 0 === o.$slides.length
              ? t(e).appendTo(o.$slideTrack)
              : n
              ? t(e).insertBefore(o.$slides.eq(i))
              : t(e).insertAfter(o.$slides.eq(i))
            : !0 === n
            ? t(e).prependTo(o.$slideTrack)
            : t(e).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (e, i) {
            t(i).attr('data-slick-index', e);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
      (e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({ height: e }, t.options.speed);
        }
      }),
      (e.prototype.animateSlide = function (e, i) {
        var n = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
          !1 === o.transformsEnabled
            ? o.$slideTrack.animate(
                !1 === o.options.vertical ? { left: e } : { top: e },
                o.options.speed,
                o.options.easing,
                i
              )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              t({ animStart: o.currentLeft }).animate(
                { animStart: e },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === o.options.vertical
                        ? ((n[o.animType] = 'translate(' + t + 'px, 0px)'), o.$slideTrack.css(n))
                        : ((n[o.animType] = 'translate(0px,' + t + 'px)'), o.$slideTrack.css(n));
                  },
                  complete: function () {
                    i && i.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (e = Math.ceil(e)),
              (n[o.animType] =
                !1 === o.options.vertical ? 'translate3d(' + e + 'px, 0px, 0px)' : 'translate3d(0px,' + e + 'px, 0px)'),
              o.$slideTrack.css(n),
              i &&
                setTimeout(function () {
                  o.disableTransition(), i.call();
                }, o.options.speed));
      }),
      (e.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }),
      (e.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i &&
          'object' == typeof i &&
          i.each(function () {
            var i = t(this).slick('getSlick');
            i.unslicked || i.slideHandler(e, !0);
          });
      }),
      (e.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        (i[e.transitionType] =
          !1 === e.options.fade
            ? e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase
            : 'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
      }),
      (e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (e.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass('slick-arrow')),
          (e.$nextArrow = t(e.options.nextArrow).addClass('slick-arrow')),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              e.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite && e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass('slick-hidden')
                .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
      }),
      (e.prototype.buildDots = function () {
        var e,
          i,
          n = this;
        if (!0 === n.options.dots) {
          for (
            n.$slider.addClass('slick-dotted'), i = t('<ul />').addClass(n.options.dotsClass), e = 0;
            e <= n.getDotCount();
            e += 1
          )
            i.append(t('<li />').append(n.options.customPaging.call(this, n, e)));
          (n.$dots = i.appendTo(n.options.appendDots)), n.$dots.find('li').first().addClass('slick-active');
        }
      }),
      (e.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider.children(e.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, i) {
            t(i)
              .attr('data-slick-index', e)
              .data('originalStyling', t(i).attr('style') || '');
          }),
          e.$slider.addClass('slick-slider'),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css('opacity', 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
          t('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
          !0 === e.options.draggable && e.$list.addClass('draggable');
      }),
      (e.prototype.buildRows = function () {
        var t,
          e,
          i,
          n,
          o,
          r,
          s,
          a = this;
        if (((n = document.createDocumentFragment()), (r = a.$slider.children()), a.options.rows > 1)) {
          for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
            var l = document.createElement('div');
            for (e = 0; e < a.options.rows; e++) {
              var c = document.createElement('div');
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var d = t * s + (e * a.options.slidesPerRow + i);
                r.get(d) && c.appendChild(r.get(d));
              }
              l.appendChild(c);
            }
            n.appendChild(l);
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({ width: 100 / a.options.slidesPerRow + '%', display: 'inline-block' });
        }
      }),
      (e.prototype.checkResponsive = function (e, i) {
        var n,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || t(window).width();
        if (
          ('window' === s.respondTo
            ? (r = c)
            : 'slider' === s.respondTo
            ? (r = l)
            : 'min' === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive && s.options.responsive.length && null !== s.options.responsive)
        ) {
          for (n in ((o = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(n) &&
              (!1 === s.originalSettings.mobileFirst
                ? r < s.breakpoints[n] && (o = s.breakpoints[n])
                : r > s.breakpoints[n] && (o = s.breakpoints[n]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || i) &&
                ((s.activeBreakpoint = o),
                'unslick' === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o])),
                    !0 === e && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (a = o))
              : ((s.activeBreakpoint = o),
                'unslick' === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o])),
                    !0 === e && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === e && (s.currentSlide = s.options.initialSlide),
              s.refresh(e),
              (a = o)),
            e || !1 === a || s.$slider.trigger('breakpoint', [s, a]);
        }
      }),
      (e.prototype.changeSlide = function (e, i) {
        var n,
          o,
          r = this,
          s = t(e.currentTarget);
        switch (
          (s.is('a') && e.preventDefault(),
          s.is('li') || (s = s.closest('li')),
          (n =
            r.slideCount % r.options.slidesToScroll != 0
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          e.data.message)
        ) {
          case 'previous':
            (o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n),
              r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
            break;
          case 'next':
            (o = 0 === n ? r.options.slidesToScroll : n),
              r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
            break;
          case 'index':
            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, i), s.children().trigger('focus');
            break;
          default:
            return;
        }
      }),
      (e.prototype.checkNavigable = function (t) {
        var e, i;
        if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1])) t = e[e.length - 1];
        else
          for (var n in e) {
            if (t < e[n]) {
              t = i;
              break;
            }
            i = e[n];
          }
        return t;
      }),
      (e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (t('li', e.$dots)
            .off('click.slick', e.changeSlide)
            .off('mouseenter.slick', t.proxy(e.interrupt, e, !0))
            .off('mouseleave.slick', t.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility && e.$dots.off('keydown.slick', e.keyHandler)),
          e.$slider.off('focus.slick blur.slick'),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
            e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
              e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
          e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
          e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
          e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
          e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
          e.$list.off('click.slick', e.clickHandler),
          t(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility && e.$list.off('keydown.slick', e.keyHandler),
          !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off('click.slick', e.selectHandler),
          t(window).off('orientationchange.slick.slick-' + e.instanceUid, e.orientationChange),
          t(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
          t('[draggable!=true]', e.$slideTrack).off('dragstart', e.preventDefault),
          t(window).off('load.slick.slick-' + e.instanceUid, e.setPosition);
      }),
      (e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off('mouseenter.slick', t.proxy(e.interrupt, e, !0)),
          e.$list.off('mouseleave.slick', t.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.cleanUpRows = function () {
        var t,
          e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr('style'), e.$slider.empty().append(t));
      }),
      (e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
      }),
      (e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          t('.slick-cloned', i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function () {
                t(this).attr('style', t(this).data('originalStyling'));
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass('slick-slider'),
          i.$slider.removeClass('slick-initialized'),
          i.$slider.removeClass('slick-dotted'),
          (i.unslicked = !0),
          e || i.$slider.trigger('destroy', [i]);
      }),
      (e.prototype.disableTransition = function (t) {
        var e = this,
          i = {};
        (i[e.transitionType] = ''), !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions
          ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
          : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
      }),
      (e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(t).appendTo(e.$slideTrack),
          e.reinit());
      }),
      (e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (i) {
          i.stopImmediatePropagation();
          var n = t(this);
          setTimeout(function () {
            e.options.pauseOnFocus && ((e.focussed = n.is(':focus')), e.autoPlay());
          }, 0);
        });
      }),
      (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }),
      (e.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          i = 0,
          n = 0;
        if (!0 === t.options.infinite)
          if (t.slideCount <= t.options.slidesToShow) ++n;
          else
            for (; e < t.slideCount; )
              ++n,
                (e = i + t.options.slidesToScroll),
                (i +=
                  t.options.slidesToScroll <= t.options.slidesToShow
                    ? t.options.slidesToScroll
                    : t.options.slidesToShow);
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
          for (; e < t.slideCount; )
            ++n,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1;
      }),
      (e.prototype.getLeft = function (t) {
        var e,
          i,
          n,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (i = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow ? (o = -1.5) : 1 === r.options.slidesToShow && (o = -2)),
                (s = i * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                t + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (t > r.slideCount
                  ? ((r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1),
                    (s = (r.options.slidesToShow - (t - r.slideCount)) * i * -1))
                  : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * i * -1))))
            : t + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (t + r.options.slidesToShow - r.slideCount) * i)),
          r.slideCount <= r.options.slidesToShow && ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 - (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + s),
          !0 === r.options.variableWidth &&
            ((n =
              r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite
                ? r.$slideTrack.children('.slick-slide').eq(t)
                : r.$slideTrack.children('.slick-slide').eq(t + r.options.slidesToShow)),
            (e =
              !0 === r.options.rtl
                ? n[0]
                  ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((n =
                r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite
                  ? r.$slideTrack.children('.slick-slide').eq(t)
                  : r.$slideTrack.children('.slick-slide').eq(t + r.options.slidesToShow + 1)),
              (e =
                !0 === r.options.rtl
                  ? n[0]
                    ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (e += (r.$list.width() - n.outerWidth()) / 2))),
          e
        );
      }),
      (e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t];
      }),
      (e.prototype.getNavigableIndexes = function () {
        var t,
          e = this,
          i = 0,
          n = 0,
          o = [];
        for (
          !1 === e.options.infinite
            ? (t = e.slideCount)
            : ((i = -1 * e.options.slidesToScroll), (n = -1 * e.options.slidesToScroll), (t = 2 * e.slideCount));
          i < t;

        )
          o.push(i),
            (i = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        return o;
      }),
      (e.prototype.getSlick = function () {
        return this;
      }),
      (e.prototype.getSlideCount = function () {
        var e,
          i,
          n = this;
        return (
          (i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0),
          !0 === n.options.swipeToSlide
            ? (n.$slideTrack.find('.slick-slide').each(function (o, r) {
                if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft) return (e = r), !1;
              }),
              Math.abs(t(e).attr('data-slick-index') - n.currentSlide) || 1)
            : n.options.slidesToScroll
        );
      }),
      (e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({ data: { message: 'index', index: parseInt(t) } }, e);
      }),
      (e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass('slick-initialized') ||
          (t(i.$slider).addClass('slick-initialized'),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          e && i.$slider.trigger('init', [i]),
          !0 === i.options.accessibility && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay());
      }),
      (e.prototype.initADA = function () {
        var e = this,
          i = Math.ceil(e.slideCount / e.options.slidesToShow),
          n = e.getNavigableIndexes().filter(function (t) {
            return t >= 0 && t < e.slideCount;
          });
        e.$slides
          .add(e.$slideTrack.find('.slick-cloned'))
          .attr({ 'aria-hidden': 'true', tabindex: '-1' })
          .find('a, input, button, select')
          .attr({ tabindex: '-1' }),
          null !== e.$dots &&
            (e.$slides.not(e.$slideTrack.find('.slick-cloned')).each(function (i) {
              var o = n.indexOf(i);
              t(this).attr({ role: 'tabpanel', id: 'slick-slide' + e.instanceUid + i, tabindex: -1 }),
                -1 !== o && t(this).attr({ 'aria-describedby': 'slick-slide-control' + e.instanceUid + o });
            }),
            e.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function (o) {
                var r = n[o];
                t(this).attr({ role: 'presentation' }),
                  t(this)
                    .find('button')
                    .first()
                    .attr({
                      role: 'tab',
                      id: 'slick-slide-control' + e.instanceUid + o,
                      'aria-controls': 'slick-slide' + e.instanceUid + r,
                      'aria-label': o + 1 + ' of ' + i,
                      'aria-selected': null,
                      tabindex: '-1',
                    });
              })
              .eq(e.currentSlide)
              .find('button')
              .attr({ 'aria-selected': 'true', tabindex: '0' })
              .end());
        for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++) e.$slides.eq(o).attr('tabindex', 0);
        e.activateADA();
      }),
      (e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, t.changeSlide),
          t.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, t.changeSlide),
          !0 === t.options.accessibility &&
            (t.$prevArrow.on('keydown.slick', t.keyHandler), t.$nextArrow.on('keydown.slick', t.keyHandler)));
      }),
      (e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          (t('li', e.$dots).on('click.slick', { message: 'index' }, e.changeSlide),
          !0 === e.options.accessibility && e.$dots.on('keydown.slick', e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            t('li', e.$dots)
              .on('mouseenter.slick', t.proxy(e.interrupt, e, !0))
              .on('mouseleave.slick', t.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on('mouseenter.slick', t.proxy(e.interrupt, e, !0)),
          e.$list.on('mouseleave.slick', t.proxy(e.interrupt, e, !1)));
      }),
      (e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, e.swipeHandler),
          e.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, e.swipeHandler),
          e.$list.on('touchend.slick mouseup.slick', { action: 'end' }, e.swipeHandler),
          e.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, e.swipeHandler),
          e.$list.on('click.slick', e.clickHandler),
          t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
          !0 === e.options.accessibility && e.$list.on('keydown.slick', e.keyHandler),
          !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on('click.slick', e.selectHandler),
          t(window).on('orientationchange.slick.slick-' + e.instanceUid, t.proxy(e.orientationChange, e)),
          t(window).on('resize.slick.slick-' + e.instanceUid, t.proxy(e.resize, e)),
          t('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
          t(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
          t(e.setPosition);
      }),
      (e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()),
          !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
      }),
      (e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === t.keyCode && !0 === e.options.accessibility
            ? e.changeSlide({ data: { message: !0 === e.options.rtl ? 'next' : 'previous' } })
            : 39 === t.keyCode &&
              !0 === e.options.accessibility &&
              e.changeSlide({ data: { message: !0 === e.options.rtl ? 'previous' : 'next' } }));
      }),
      (e.prototype.lazyLoad = function () {
        function e(e) {
          t('img[data-lazy]', e).each(function () {
            var e = t(this),
              i = t(this).attr('data-lazy'),
              n = t(this).attr('data-srcset'),
              o = t(this).attr('data-sizes') || r.$slider.attr('data-sizes'),
              s = document.createElement('img');
            (s.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                n && (e.attr('srcset', n), o && e.attr('sizes', o)),
                  e.attr('src', i).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                  }),
                  r.$slider.trigger('lazyLoaded', [r, e, i]);
              });
            }),
              (s.onerror = function () {
                e.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'),
                  r.$slider.trigger('lazyLoadError', [r, e, i]);
              }),
              (s.src = i);
          });
        }
        var i,
          n,
          o,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (o = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2)
              : ((n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))),
                (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide),
              (o = Math.ceil(n + r.options.slidesToShow)),
              !0 === r.options.fade && (n > 0 && n--, o <= r.slideCount && o++)),
          (i = r.$slider.find('.slick-slide').slice(n, o)),
          'anticipated' === r.options.lazyLoad)
        )
          for (var s = n - 1, a = o, l = r.$slider.find('.slick-slide'), c = 0; c < r.options.slidesToScroll; c++)
            s < 0 && (s = r.slideCount - 1), (i = (i = i.add(l.eq(s))).add(l.eq(a))), s--, a++;
        e(i),
          r.slideCount <= r.options.slidesToShow
            ? e(r.$slider.find('.slick-slide'))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? e(r.$slider.find('.slick-cloned').slice(0, r.options.slidesToShow))
            : 0 === r.currentSlide && e(r.$slider.find('.slick-cloned').slice(-1 * r.options.slidesToShow));
      }),
      (e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(),
          t.$slideTrack.css({ opacity: 1 }),
          t.$slider.removeClass('slick-loading'),
          t.initUI(),
          'progressive' === t.options.lazyLoad && t.progressiveLazyLoad();
      }),
      (e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({ data: { message: 'next' } });
      }),
      (e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (e.prototype.pause = e.prototype.slickPause = function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
      (e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
      }),
      (e.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked ||
          (i.$slider.trigger('afterChange', [i, e]),
          (i.animating = !1),
          i.slideCount > i.options.slidesToShow && i.setPosition(),
          (i.swipeLeft = null),
          i.options.autoplay && i.autoPlay(),
          !0 === i.options.accessibility &&
            (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr('tabindex', 0).focus()));
      }),
      (e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: 'previous' } });
      }),
      (e.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i,
          n,
          o,
          r,
          s,
          a = this,
          l = t('img[data-lazy]', a.$slider);
        l.length
          ? ((i = l.first()),
            (n = i.attr('data-lazy')),
            (o = i.attr('data-srcset')),
            (r = i.attr('data-sizes') || a.$slider.attr('data-sizes')),
            ((s = document.createElement('img')).onload = function () {
              o && (i.attr('srcset', o), r && i.attr('sizes', r)),
                i.attr('src', n).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading'),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger('lazyLoaded', [a, i, n]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(e + 1);
                  }, 500)
                : (i.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'),
                  a.$slider.trigger('lazyLoadError', [a, i, n]),
                  a.progressiveLazyLoad());
            }),
            (s.src = n))
          : a.$slider.trigger('allImagesLoaded', [a]);
      }),
      (e.prototype.refresh = function (e) {
        var i,
          n,
          o = this;
        (n = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (i = o.currentSlide),
          o.destroy(!0),
          t.extend(o, o.initials, { currentSlide: i }),
          o.init(),
          e || o.changeSlide({ data: { message: 'index', index: i } }, !1);
      }),
      (e.prototype.registerBreakpoints = function () {
        var e,
          i,
          n,
          o = this,
          r = o.options.responsive || null;
        if ('array' === t.type(r) && r.length) {
          for (e in ((o.respondTo = o.options.respondTo || 'window'), r))
            if (((n = o.breakpoints.length - 1), r.hasOwnProperty(e))) {
              for (i = r[e].breakpoint; n >= 0; )
                o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
              o.breakpoints.push(i), (o.breakpointSettings[i] = r[e].settings);
            }
          o.breakpoints.sort(function (t, e) {
            return o.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (e.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack.children(e.options.slide).addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on('click.slick', e.selectHandler),
          e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger('reInit', [e]);
      }),
      (e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
          }, 50)));
      }),
      (e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        if (
          ((t = 'boolean' == typeof t ? (!0 === (e = t) ? 0 : n.slideCount - 1) : !0 === e ? --t : t),
          n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
        )
          return !1;
        n.unload(),
          !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
          (n.$slides = n.$slideTrack.children(this.options.slide)),
          n.$slideTrack.children(this.options.slide).detach(),
          n.$slideTrack.append(n.$slides),
          (n.$slidesCache = n.$slides),
          n.reinit();
      }),
      (e.prototype.setCSS = function (t) {
        var e,
          i,
          n = this,
          o = {};
        !0 === n.options.rtl && (t = -t),
          (e = 'left' == n.positionProp ? Math.ceil(t) + 'px' : '0px'),
          (i = 'top' == n.positionProp ? Math.ceil(t) + 'px' : '0px'),
          (o[n.positionProp] = t),
          !1 === n.transformsEnabled
            ? n.$slideTrack.css(o)
            : ((o = {}),
              !1 === n.cssTransitions
                ? ((o[n.animType] = 'translate(' + e + ', ' + i + ')'), n.$slideTrack.css(o))
                : ((o[n.animType] = 'translate3d(' + e + ', ' + i + ', 0px)'), n.$slideTrack.css(o)));
      }),
      (e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode && t.$list.css({ padding: '0px ' + t.options.centerPadding })
          : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
            !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + ' 0px' })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children('.slick-slide').length)))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children('.slick-slide').length)
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children('.slick-slide').width(t.slideWidth - e);
      }),
      (e.prototype.setFade = function () {
        var e,
          i = this;
        i.$slides.each(function (n, o) {
          (e = i.slideWidth * n * -1),
            !0 === i.options.rtl
              ? t(o).css({ position: 'relative', right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 })
              : t(o).css({ position: 'relative', left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
        }),
          i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css('height', e);
        }
      }),
      (e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e,
          i,
          n,
          o,
          r,
          s = this,
          a = !1;
        if (
          ('object' === t.type(arguments[0])
            ? ((n = arguments[0]), (a = arguments[1]), (r = 'multiple'))
            : 'string' === t.type(arguments[0]) &&
              ((n = arguments[0]),
              (o = arguments[1]),
              (a = arguments[2]),
              'responsive' === arguments[0] && 'array' === t.type(arguments[1])
                ? (r = 'responsive')
                : void 0 !== arguments[1] && (r = 'single')),
          'single' === r)
        )
          s.options[n] = o;
        else if ('multiple' === r)
          t.each(n, function (t, e) {
            s.options[t] = e;
          });
        else if ('responsive' === r)
          for (i in o)
            if ('array' !== t.type(s.options.responsive)) s.options.responsive = [o[i]];
            else {
              for (e = s.options.responsive.length - 1; e >= 0; )
                s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
              s.options.responsive.push(o[i]);
            }
        a && (s.unload(), s.reinit());
      }),
      (e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(),
          t.setHeight(),
          !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
          t.$slider.trigger('setPosition', [t]);
      }),
      (e.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? 'top' : 'left'),
          'top' === t.positionProp ? t.$slider.addClass('slick-vertical') : t.$slider.removeClass('slick-vertical'),
          (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
          t.options.fade &&
            ('number' == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = 'OTransform'),
            (t.transformType = '-o-transform'),
            (t.transitionType = 'OTransition'),
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = 'MozTransform'),
            (t.transformType = '-moz-transform'),
            (t.transitionType = 'MozTransition'),
            void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = 'webkitTransform'),
            (t.transformType = '-webkit-transform'),
            (t.transitionType = 'webkitTransition'),
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = 'msTransform'),
            (t.transformType = '-ms-transform'),
            (t.transitionType = 'msTransition'),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = 'transform'), (t.transformType = 'transform'), (t.transitionType = 'transition')),
          (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (e.prototype.setSlideClasses = function (t) {
        var e,
          i,
          n,
          o,
          r = this;
        if (
          ((i = r.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true')),
          r.$slides.eq(t).addClass('slick-current'),
          !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (e = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (t >= e && t <= r.slideCount - 1 - e
                ? r.$slides
                    .slice(t - e + s, t + e + 1)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : i
                    .slice((n = r.options.slidesToShow + t) - e + 1 + s, n + e + 2)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false'),
              0 === t
                ? i.eq(i.length - 1 - r.options.slidesToShow).addClass('slick-center')
                : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass('slick-center')),
            r.$slides.eq(t).addClass('slick-center');
        } else
          t >= 0 && t <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(t, t + r.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : i.length <= r.options.slidesToShow
            ? i.addClass('slick-active').attr('aria-hidden', 'false')
            : ((o = r.slideCount % r.options.slidesToShow),
              (n = !0 === r.options.infinite ? r.options.slidesToShow + t : t),
              r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow
                ? i
                    .slice(n - (r.options.slidesToShow - o), n + o)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : i
                    .slice(n, n + r.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false'));
        ('ondemand' !== r.options.lazyLoad && 'anticipated' !== r.options.lazyLoad) || r.lazyLoad();
      }),
      (e.prototype.setupInfinite = function () {
        var e,
          i,
          n,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite && !1 === o.options.fade && ((i = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount;
            e > o.slideCount - n;
            e -= 1
          )
            t(o.$slides[(i = e - 1)])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', i - o.slideCount)
              .prependTo(o.$slideTrack)
              .addClass('slick-cloned');
          for (e = 0; e < n + o.slideCount; e += 1)
            t(o.$slides[(i = e)])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', i + o.slideCount)
              .appendTo(o.$slideTrack)
              .addClass('slick-cloned');
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function () {
              t(this).attr('id', '');
            });
        }
      }),
      (e.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (e.prototype.selectHandler = function (e) {
        var i = this,
          n = t(e.target).is('.slick-slide') ? t(e.target) : t(e.target).parents('.slick-slide'),
          o = parseInt(n.attr('data-slick-index'));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o);
      }),
      (e.prototype.slideHandler = function (t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          l = null,
          c = this;
        if (
          ((e = e || !1),
          !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === t)))
        )
          if (
            (!1 === e && c.asNavFor(t),
            (l = c.getLeft((n = t))),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(s, function () {
                    c.postSlide(n);
                  })
                : c.postSlide(n));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (t < 0 || t > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(s, function () {
                    c.postSlide(n);
                  })
                : c.postSlide(n));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                n < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + n
                  : n >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : n - c.slideCount
                  : n),
              (c.animating = !0),
              c.$slider.trigger('beforeChange', [c, c.currentSlide, o]),
              (r = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick('getSlick')).slideCount <= a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== i
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== i
              ? c.animateSlide(l, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
          !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
          t.$slider.addClass('slick-loading');
      }),
      (e.prototype.swipeDirection = function () {
        var t,
          e,
          i = this;
        return (
          (t = Math.atan2(i.touchObject.startY - i.touchObject.curY, i.touchObject.startX - i.touchObject.curX)),
          (e = Math.round((180 * t) / Math.PI)) < 0 && (e = 360 - Math.abs(e)),
          (e <= 45 && e >= 0) || (e <= 360 && e >= 315)
            ? !1 === i.options.rtl
              ? 'left'
              : 'right'
            : e >= 135 && e <= 225
            ? !1 === i.options.rtl
              ? 'right'
              : 'left'
            : !0 === i.options.verticalSwiping
            ? e >= 35 && e <= 135
              ? 'down'
              : 'up'
            : 'vertical'
        );
      }),
      (e.prototype.swipeEnd = function (t) {
        var e,
          i,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling)) return (n.scrolling = !1), !1;
        if (((n.interrupted = !1), (n.shouldClick = !(n.touchObject.swipeLength > 10)), void 0 === n.touchObject.curX))
          return !1;
        if (
          (!0 === n.touchObject.edgeHit && n.$slider.trigger('edge', [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case 'left':
            case 'down':
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case 'right':
            case 'up':
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          'vertical' != i && (n.slideHandler(e), (n.touchObject = {}), n.$slider.trigger('swipe', [n, i]));
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (e.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ('ontouchend' in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf('mouse'))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case 'start':
              e.swipeStart(t);
              break;
            case 'move':
              e.swipeMove(t);
              break;
            case 'end':
              e.swipeEnd(t);
          }
      }),
      (e.prototype.swipeMove = function (t) {
        var e,
          i,
          n,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((e = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY),
            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
            (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                (i = a.swipeDirection()),
                void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), t.preventDefault()),
                (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && 'right' === i) || (a.currentSlide >= a.getDotCount() && 'left' === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                (a.swipeLeft = !1 === a.options.vertical ? e + n * o : e + n * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
        );
      }),
      (e.prototype.swipeStart = function (t) {
        var e,
          i = this;
        if (((i.interrupted = !0), 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow))
          return (i.touchObject = {}), !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
          (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
          (i.dragging = !0);
      }),
      (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache &&
          (t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.appendTo(t.$slideTrack),
          t.reinit());
      }),
      (e.prototype.unload = function () {
        var e = this;
        t('.slick-cloned', e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
          e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
          e.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
      }),
      (e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger('unslick', [e, t]), e.destroy();
      }),
      (e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            t.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            0 === t.currentSlide
              ? (t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                t.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : ((t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode) ||
                  (t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode)) &&
                (t.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                t.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
      }),
      (e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots &&
          (t.$dots.find('li').removeClass('slick-active').end(),
          t.$dots
            .find('li')
            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
            .addClass('slick-active'));
      }),
      (e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (t.interrupted = !!document[t.hidden]);
      }),
      (t.fn.slick = function () {
        var t,
          i,
          n = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = n.length;
        for (t = 0; t < s; t++)
          if (
            ('object' == typeof o || void 0 === o
              ? (n[t].slick = new e(n[t], o))
              : (i = n[t].slick[o].apply(n[t].slick, r)),
            void 0 !== i)
          )
            return i;
        return n;
      });
  });
