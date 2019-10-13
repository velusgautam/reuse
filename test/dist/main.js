"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* reuse Library version: 1.0.1 */
function t(t, n, e, r) {
  var o, c, i;return function () {
    if (i = this, c = Array.prototype.slice.call(arguments), !o || !e && !r) {
      if (!e) return s(), o = setTimeout(u, n);o = setTimeout(s, n), t.apply(i, c);
    }function u() {
      s(), t.apply(i, c);
    }function s() {
      clearTimeout(o), o = null;
    }
  };
}var n = 9007199254740991,
    e = Object.prototype.hasOwnProperty,
    r = Object.prototype;function o(t) {
  return null != t && "function" != typeof t && function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
  }(t.length);
}function c(t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : toString.call(t);
}function i(t) {
  if (null == t) return !0;if (o(t) && (Array.isArray(t) || "string" == typeof t || "function" == typeof t.splice || function (t) {
    return function (t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
    }(t) && "[object Arguments]" == c(t);
  }(t))) return !t.length;var n = c(t);if ("[object Map]" == n || "[object Set]" == n) return !t.size;if (function (t) {
    var n = t && t.constructor;return t === ("function" == typeof n && n.prototype || r);
  }(t)) return !Object.keys(t).length;for (var _n in t) {
    if (e.call(t, _n)) return !1;
  }return !0;
}var u = 1,
    s = "[object Arguments]",
    l = "[object Array]",
    f = "[object Object]",
    a = Object.prototype.hasOwnProperty,
    p = Object.prototype.propertyIsEnumerable,
    h = Object.getOwnPropertySymbols,
    _ = Object.prototype.toString,
    y = function y() {
  return !1;
},
    b = 9007199254740991,
    d = /^(?:0|[1-9]\d*)$/;function g(t, n) {
  var e = typeof t === "undefined" ? "undefined" : _typeof(t);return !!(n = null == n ? b : n) && ("number" == e || "symbol" != e && d.test(t)) && t > -1 && t % 1 == 0 && t < n;
}function j(t, n) {
  var e = Array.isArray(t),
      r = !e && function (t) {
    return k(t) && "[object Arguments]" == A(t);
  }(t),
      o = !e && !r && y(),
      c = e || r || o,
      i = t.length,
      u = new Array(c ? i : 0);var s = c ? -1 : i;for (; ++s < i;) {
    u[s] = "" + s;
  }for (var _e in t) {
    !n && !a.call(t, _e) || c && ("length" == _e || g(_e, i)) || u.push(_e);
  }return u;
}function A(t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : _.call(t);
}function w(t) {
  return null != t && "function" != typeof t && function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= b;
  }(t.length);
}function O(t) {
  var n = function (t) {
    return w(t) ? j(t) : Object.keys(Object(t));
  }(t);return Array.isArray(t) || n.push.apply(n, _toConsumableArray(function (t) {
    return null == t ? [] : (t = Object(t), h(t).filter(function (n) {
      return p.call(t, n);
    }));
  }(t))), n;
}function m(t, n) {
  var e = t.length;
  for (; e--;) {
    if ((r = t[e][0]) === (o = n) || r != r && o != o) return e;
  }var r, o;return -1;
}
var z = function () {
  function z(t) {
    _classCallCheck(this, z);

    var n = -1;var e = null == t ? 0 : t.length;for (this.clear(); ++n < e;) {
      var _e2 = t[n];this.set(_e2[0], _e2[1]);
    }
  }

  _createClass(z, [{
    key: "clear",
    value: function clear() {
      this.__data__ = [], this.size = 0;
    }
  }, {
    key: "delete",
    value: function _delete(t) {
      var n = this.__data__,
          e = m(n, t);return !(e < 0) && (e == n.length - 1 ? n.pop() : n.splice(e, 1), --this.size, !0);
    }
  }, {
    key: "get",
    value: function get(t) {
      var n = this.__data__,
          e = m(n, t);return e < 0 ? void 0 : n[e][1];
    }
  }, {
    key: "has",
    value: function has(t) {
      return m(this.__data__, t) > -1;
    }
  }, {
    key: "set",
    value: function set(t, n) {
      var e = this.__data__,
          r = m(e, t);return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
    }
  }]);

  return z;
}();

var v = function () {
  function v(t) {
    _classCallCheck(this, v);

    var n = this.__data__ = new z(t);this.size = n.size;
  }

  _createClass(v, [{
    key: "clear",
    value: function clear() {
      this.__data__ = new z(), this.size = 0;
    }
  }, {
    key: "delete",
    value: function _delete(t) {
      var n = this.__data__,
          e = n.delete(t);return this.size = n.size, e;
    }
  }, {
    key: "get",
    value: function get(t) {
      return this.__data__.get(t);
    }
  }, {
    key: "has",
    value: function has(t) {
      return this.__data__.has(t);
    }
  }, {
    key: "set",
    value: function set(t, n) {
      var e = this.__data__;return e.set(t, n), this.size = e.size, this;
    }
  }]);

  return v;
}();

function $(t, n, e, r, o, c) {
  var i = Array.isArray(t);var p = Array.isArray(n);var h = i ? l : A(t),
      _ = p ? l : A(n),
      b = (h = h == s ? f : h) == f;var d = (_ = _ == s ? f : _) == f,
      g = h == _;if (g && y()) return !1;if (g && !b) return c || (c = new v()), function (t, n, e, r, o, c) {
    var i = e & u,
        s = t.length,
        l = n.length;if (s != l && !(i && l > s)) return !1;var f = c.get(t);if (f && c.get(n)) return f == n;var a = -1,
        p = !0;for (c.set(t, n), c.set(n, t); ++a < s;) {
      var _u = void 0;var _s = t[a],
          _l = n[a];if (r && (_u = i ? r(_l, _s, a, n, t, c) : r(_s, _l, a, t, n, c)), void 0 !== _u) {
        if (_u) continue;p = !1;break;
      }if (_s !== _l && !o(_s, _l, e, r, c)) {
        p = !1;break;
      }
    }return c.delete(t), c.delete(n), p;
  }(t, n, e, r, o, c);if (!(e & u)) {
    var _i = b && a.call(t, "__wrapped__"),
        _u2 = d && a.call(n, "__wrapped__");if (_i || _u2) {
      var _s2 = _i ? t.value() : t,
          _l2 = _u2 ? n.value() : n;return c || (c = new v()), o(_s2, _l2, e, r, c);
    }
  }return !!g && (c || (c = new v()), function (t, n, e, r, o, c) {
    var i = e & u,
        s = O(t),
        l = s.length;if (l != O(n).length && !i) return !1;var f = void 0,
        p = l;for (; p--;) {
      if (f = s[p], !(i ? f in n : a.call(n, f))) return !1;
    }var h = c.get(t);if (h && c.get(n)) return h == n;var _ = void 0,
        y = !0;c.set(t, n), c.set(n, t);var b = i;for (; ++p < l;) {
      var _u3 = t[f = s[p]],
          _l3 = n[f];if (r && (_ = i ? r(_l3, _u3, f, n, t, c) : r(_u3, _l3, f, t, n, c)), !(void 0 === _ ? _u3 === _l3 || o(_u3, _l3, e, r, c) : _)) {
        y = !1;break;
      }b || (b = "constructor" == f);
    }if (y && !b) {
      var _e3 = t.constructor,
          _r = n.constructor;_e3 != _r && "constructor" in t && "constructor" in n && !("function" == typeof _e3 && _e3 instanceof _e3 && "function" == typeof _r && _r instanceof _r) && (y = !1);
    }return c.delete(t), c.delete(n), y;
  }(t, n, e, r, o, c));
}function k(t) {
  return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
}function x(t, n, e, r, o) {
  return t === n || (null == t || null == n || !k(t) && !k(n) ? t != t && n != n : $(t, n, e, r, x, o));
}function S(t, n) {
  if ("function" != typeof t || null != n && "function" != typeof n) throw new TypeError("Expected a function");var e = function e() {
    for (var _len = arguments.length, r = Array(_len), _key = 0; _key < _len; _key++) {
      r[_key] = arguments[_key];
    }

    var o = n ? n.apply(this, r) : r[0],
        c = e.cache;if (c.has(o)) return c.get(o);var i = t.apply(this, r);return e.cache = c.set(o, i) || c, i;
  };return e.cache = new (S.Cache || Map)(), e;
}function T(t, n) {
  var e = void 0,
      r = void 0;if (null == t) return e;var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _o = _step.value;
      var _t = n(_o);null != _t && (void 0 === r ? _t == _t : _t < r) && (r = _t, e = _o);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return e;
}S.Cache = Map;var E = {};function M() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "$prefix$";
  E[t] || (E[t] = 0);var n = ++E[t];return "$prefix$" === t ? "" + n : "" + (t + n);
}exports.debounce = t;
exports.isEmpty = i;
exports.isEqual = x;
exports.memoize = S;
exports.minBy = T;
exports.uniqueId = M;
/* follow me on Github! https://github.com/velusgautam */