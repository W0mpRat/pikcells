!(function (t, e) {
  "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.configurator = e()) : (t.configurator = e());
})(this, function () {
  return (function (t) {
      var e = {};
      function i(n) {
          if (e[n]) return e[n].exports;
          var r = (e[n] = { i: n, l: !1, exports: {} });
          return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
      }
      return (
          (i.m = t),
          (i.c = e),
          (i.d = function (t, e, n) {
              i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
          }),
          (i.r = function (t) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
          }),
          (i.t = function (t, e) {
              if ((1 & e && (t = i(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var n = Object.create(null);
              if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                  for (var r in t)
                      i.d(
                          n,
                          r,
                          function (e) {
                              return t[e];
                          }.bind(null, r)
                      );
              return n;
          }),
          (i.n = function (t) {
              var e =
                  t && t.__esModule
                      ? function () {
                            return t.default;
                        }
                      : function () {
                            return t;
                        };
              return i.d(e, "a", e), e;
          }),
          (i.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (i.p = ""),
          i((i.s = 165))
      );
  })([
      function (t, e) {
          t.exports = function (t) {
              try {
                  return !!t();
              } catch (t) {
                  return !0;
              }
          };
      },
      function (t, e, i) {
          var n = i(3),
              r = i(44),
              s = i(5),
              o = i(32),
              a = i(48),
              c = i(75),
              l = r("wks"),
              h = n.Symbol,
              u = c ? h : (h && h.withoutSetter) || o;
          t.exports = function (t) {
              return s(l, t) || (a && s(h, t) ? (l[t] = h[t]) : (l[t] = u("Symbol." + t))), l[t];
          };
      },
      function (t, e, i) {
          var n = i(3),
              r = i(21).f,
              s = i(12),
              o = i(15),
              a = i(43),
              c = i(66),
              l = i(72);
          t.exports = function (t, e) {
              var i,
                  h,
                  u,
                  d,
                  m,
                  E = t.target,
                  f = t.global,
                  p = t.stat;
              if ((i = f ? n : p ? n[E] || a(E, {}) : (n[E] || {}).prototype))
                  for (h in e) {
                      if (((d = e[h]), (u = t.noTargetGet ? (m = r(i, h)) && m.value : i[h]), !l(f ? h : E + (p ? "." : "#") + h, t.forced) && void 0 !== u)) {
                          if (typeof d == typeof u) continue;
                          c(d, u);
                      }
                      (t.sham || (u && u.sham)) && s(d, "sham", !0), o(i, h, d, t);
                  }
          };
      },
      function (t, e, i) {
          (function (e) {
              var i = function (t) {
                  return t && t.Math == Math && t;
              };
              t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")();
          }.call(this, i(125)));
      },
      function (t) {
          t.exports = JSON.parse(
              '{"layerMenus":[{"name":"Vanity","layer_name":"Vanity","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Vanity.svg","hotspot":{"x":0.81,"y":1.36},"layer_type":"grouped"},{"name":"Mirrors","layer_name":"Mirrors","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Mirror.svg","hotspot":{"x":0.65,"y":1.82},"layer_type":"grouped"},{"name":"Lighting","layer_name":"Wall Lights","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Lighting.svg","hotspot":{"x":0.87,"y":1.87},"layer_type":"grouped"},{"name":"Fixtures","thumbnail":"Fixture.svg","layer_name":"Shower Fixtures","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","hotspot":{"x":0.77,"y":1.55},"nested_layers":[{"name":"Fixtures","layer_name":"Vanity Faucets","thumbnail":"","layer_type":"grouped","hotspot":{"x":0.77,"y":1.55}}]},{"name":"Toilet","layer_name":"Toilets","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Toilet.svg","hotspot":{"x":2.99,"y":1.21},"layer_type":"grouped"},{"name":"Tub","layer_name":"Tubs","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Tub.svg","hotspot":{"x":1.58,"y":1.3},"layer_type":"grouped"},{"name":"Walls","thumbnail":"Walls.svg","layer_name":"Wall Paint","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","hotspot":{"x":0.9,"y":1.99},"nested_layers":[{"name":"Wall Paint","layer_name":"Wall Paint","thumbnail":"","hotspot":{"x":1.26,"y":1.8}},{"name":"Wallpaper","layer_name":"Wallpaper","thumbnail":"","layer_type":"grouped","hotspot":{"x":0.9,"y":1.99}},{"name":"Tile","layer_name":"Wallpaper","thumbnail":"","layer_type":"grouped","hotspot":{"show":false,"x":0.9,"y":1.99}}]},{"name":"Floor","layer_name":"Floors","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Floors.svg","hotspot":{"x":1.24,"y":1.05},"layer_type":"grouped"},{"name":"Shower Tile","layer_name":"Shower Tiles","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Shower Tile.svg","hotspot":{"x":2.35,"y":1.83},"nested_layers":[{"name":"Wall Tiles","layer_name":"Shower Wall Tiles","thumbnail":"","layer_type":"grouped","hotspot":{"x":2.35,"y":1.83}},{"name":"Floor Tiles","layer_name":"Showers Floor Tiles","thumbnail":"","layer_type":"grouped","hotspot":{"x":2.31,"y":1.15}}]},{"name":"Storage","layer_name":"Floating Shelves","description":"One of the hardest-working pieces of furniture in your home, vanities offer exceptional storage and are the anchor for the overall style of the room.","thumbnail":"Storage.svg","hotspot":{"x":3.03,"y":1.86},"nested_layers":[{"name":"Floating Shelves","layer_name":"Floating Shelves","thumbnail":"","layer_type":"grouped","hotspot":{"x":3.03,"y":1.86}},{"name":"Linen Closets","layer_name":"Linen Closets","thumbnail":"","layer_type":"grouped","hotspot":{"x":-0.01,"y":1.57}}]}]}'
          );
      },
      function (t, e) {
          var i = {}.hasOwnProperty;
          t.exports = function (t, e) {
              return i.call(t, e);
          };
      },
      function (t, e, i) {
          var n = i(0);
          t.exports = !n(function () {
              return (
                  7 !=
                  Object.defineProperty({}, 1, {
                      get: function () {
                          return 7;
                      },
                  })[1]
              );
          });
      },
      function (t, e) {
          t.exports = function (t) {
              return "object" == typeof t ? null !== t : "function" == typeof t;
          };
      },
      function (t, e, i) {
          var n = i(6),
              r = i(62),
              s = i(11),
              o = i(29),
              a = Object.defineProperty;
          e.f = n
              ? a
              : function (t, e, i) {
                    if ((s(t), (e = o(e, !0)), s(i), r))
                        try {
                            return a(t, e, i);
                        } catch (t) {}
                    if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
                    return "value" in i && (t[e] = i.value), t;
                };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(76);
          n({ target: "Array", proto: !0, forced: [].forEach != r }, { forEach: r });
      },
      function (t, e, i) {
          var n = i(3),
              r = i(78),
              s = i(76),
              o = i(12);
          for (var a in r) {
              var c = n[a],
                  l = c && c.prototype;
              if (l && l.forEach !== s)
                  try {
                      o(l, "forEach", s);
                  } catch (t) {
                      l.forEach = s;
                  }
          }
      },
      function (t, e, i) {
          var n = i(7);
          t.exports = function (t) {
              if (!n(t)) throw TypeError(String(t) + " is not an object");
              return t;
          };
      },
      function (t, e, i) {
          var n = i(6),
              r = i(8),
              s = i(22);
          t.exports = n
              ? function (t, e, i) {
                    return r.f(t, e, s(1, i));
                }
              : function (t, e, i) {
                    return (t[e] = i), t;
                };
      },
      function (t, e, i) {
          var n = i(6),
              r = i(8).f,
              s = Function.prototype,
              o = s.toString,
              a = /^\s*function ([^ (]*)/;
          n &&
              !("name" in s) &&
              r(s, "name", {
                  configurable: !0,
                  get: function () {
                      try {
                          return o.call(this).match(a)[1];
                      } catch (t) {
                          return "";
                      }
                  },
              });
      },
      function (t, e, i) {
          var n = i(61),
              r = i(18);
          t.exports = function (t) {
              return n(r(t));
          };
      },
      function (t, e, i) {
          var n = i(3),
              r = i(12),
              s = i(5),
              o = i(43),
              a = i(64),
              c = i(24),
              l = c.get,
              h = c.enforce,
              u = String(String).split("String");
          (t.exports = function (t, e, i, a) {
              var c = !!a && !!a.unsafe,
                  l = !!a && !!a.enumerable,
                  d = !!a && !!a.noTargetGet;
              "function" == typeof i && ("string" != typeof e || s(i, "name") || r(i, "name", e), (h(i).source = u.join("string" == typeof e ? e : ""))),
                  t !== n ? (c ? !d && t[e] && (l = !0) : delete t[e], l ? (t[e] = i) : r(t, e, i)) : l ? (t[e] = i) : o(e, i);
          })(Function.prototype, "toString", function () {
              return ("function" == typeof this && l(this).source) || a(this);
          });
      },
      function (t, e, i) {
          var n = i(33),
              r = Math.min;
          t.exports = function (t) {
              return t > 0 ? r(n(t), 9007199254740991) : 0;
          };
      },
      function (t, e, i) {
          var n = i(6),
              r = i(0),
              s = i(5),
              o = Object.defineProperty,
              a = {},
              c = function (t) {
                  throw t;
              };
          t.exports = function (t, e) {
              if (s(a, t)) return a[t];
              e || (e = {});
              var i = [][t],
                  l = !!s(e, "ACCESSORS") && e.ACCESSORS,
                  h = s(e, 0) ? e[0] : c,
                  u = s(e, 1) ? e[1] : void 0;
              return (a[t] =
                  !!i &&
                  !r(function () {
                      if (l && !n) return !0;
                      var t = { length: -1 };
                      l ? o(t, 1, { enumerable: !0, get: c }) : (t[1] = 1), i.call(t, h, u);
                  }));
          };
      },
      function (t, e) {
          t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on " + t);
              return t;
          };
      },
      function (t, e, i) {
          var n = i(34),
              r = i(61),
              s = i(20),
              o = i(16),
              a = i(74),
              c = [].push,
              l = function (t) {
                  var e = 1 == t,
                      i = 2 == t,
                      l = 3 == t,
                      h = 4 == t,
                      u = 6 == t,
                      d = 5 == t || u;
                  return function (m, E, f, p) {
                      for (var g, T, R = s(m), v = r(R), A = n(E, f, 3), _ = o(v.length), I = 0, O = p || a, C = e ? O(m, _) : i ? O(m, 0) : void 0; _ > I; I++)
                          if ((d || I in v) && ((T = A((g = v[I]), I, R)), t))
                              if (e) C[I] = T;
                              else if (T)
                                  switch (t) {
                                      case 3:
                                          return !0;
                                      case 5:
                                          return g;
                                      case 6:
                                          return I;
                                      case 2:
                                          c.call(C, g);
                                  }
                              else if (h) return !1;
                      return u ? -1 : l || h ? h : C;
                  };
              };
          t.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6) };
      },
      function (t, e, i) {
          var n = i(18);
          t.exports = function (t) {
              return Object(n(t));
          };
      },
      function (t, e, i) {
          var n = i(6),
              r = i(60),
              s = i(22),
              o = i(14),
              a = i(29),
              c = i(5),
              l = i(62),
              h = Object.getOwnPropertyDescriptor;
          e.f = n
              ? h
              : function (t, e) {
                    if (((t = o(t)), (e = a(e, !0)), l))
                        try {
                            return h(t, e);
                        } catch (t) {}
                    if (c(t, e)) return s(!r.f.call(t, e), t[e]);
                };
      },
      function (t, e) {
          t.exports = function (t, e) {
              return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
          };
      },
      function (t, e) {
          var i = {}.toString;
          t.exports = function (t) {
              return i.call(t).slice(8, -1);
          };
      },
      function (t, e, i) {
          var n,
              r,
              s,
              o = i(126),
              a = i(3),
              c = i(7),
              l = i(12),
              h = i(5),
              u = i(30),
              d = i(25),
              m = a.WeakMap;
          if (o) {
              var E = new m(),
                  f = E.get,
                  p = E.has,
                  g = E.set;
              (n = function (t, e) {
                  return g.call(E, t, e), e;
              }),
                  (r = function (t) {
                      return f.call(E, t) || {};
                  }),
                  (s = function (t) {
                      return p.call(E, t);
                  });
          } else {
              var T = u("state");
              (d[T] = !0),
                  (n = function (t, e) {
                      return l(t, T, e), e;
                  }),
                  (r = function (t) {
                      return h(t, T) ? t[T] : {};
                  }),
                  (s = function (t) {
                      return h(t, T);
                  });
          }
          t.exports = {
              set: n,
              get: r,
              has: s,
              enforce: function (t) {
                  return s(t) ? r(t) : n(t, {});
              },
              getterFor: function (t) {
                  return function (e) {
                      var i;
                      if (!c(e) || (i = r(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                      return i;
                  };
              },
          };
      },
      function (t, e) {
          t.exports = {};
      },
      function (t, e, i) {
          var n = i(68),
              r = i(3),
              s = function (t) {
                  return "function" == typeof t ? t : void 0;
              };
          t.exports = function (t, e) {
              return arguments.length < 2 ? s(n[t]) || s(r[t]) : (n[t] && n[t][e]) || (r[t] && r[t][e]);
          };
      },
      function (t, e) {
          t.exports = {};
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(19).findIndex,
              s = i(35),
              o = i(17),
              a = !0,
              c = o("findIndex");
          "findIndex" in [] &&
              Array(1).findIndex(function () {
                  a = !1;
              }),
              n(
                  { target: "Array", proto: !0, forced: a || !c },
                  {
                      findIndex: function (t) {
                          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                      },
                  }
              ),
              s("findIndex");
      },
      function (t, e, i) {
          var n = i(7);
          t.exports = function (t, e) {
              if (!n(t)) return t;
              var i, r;
              if (e && "function" == typeof (i = t.toString) && !n((r = i.call(t)))) return r;
              if ("function" == typeof (i = t.valueOf) && !n((r = i.call(t)))) return r;
              if (!e && "function" == typeof (i = t.toString) && !n((r = i.call(t)))) return r;
              throw TypeError("Can't convert object to primitive value");
          };
      },
      function (t, e, i) {
          var n = i(44),
              r = i(32),
              s = n("keys");
          t.exports = function (t) {
              return s[t] || (s[t] = r(t));
          };
      },
      function (t, e) {
          t.exports = !1;
      },
      function (t, e) {
          var i = 0,
              n = Math.random();
          t.exports = function (t) {
              return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++i + n).toString(36);
          };
      },
      function (t, e) {
          var i = Math.ceil,
              n = Math.floor;
          t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? n : i)(t);
          };
      },
      function (t, e, i) {
          var n = i(73);
          t.exports = function (t, e, i) {
              if ((n(t), void 0 === e)) return t;
              switch (i) {
                  case 0:
                      return function () {
                          return t.call(e);
                      };
                  case 1:
                      return function (i) {
                          return t.call(e, i);
                      };
                  case 2:
                      return function (i, n) {
                          return t.call(e, i, n);
                      };
                  case 3:
                      return function (i, n, r) {
                          return t.call(e, i, n, r);
                      };
              }
              return function () {
                  return t.apply(e, arguments);
              };
          };
      },
      function (t, e, i) {
          var n = i(1),
              r = i(36),
              s = i(8),
              o = n("unscopables"),
              a = Array.prototype;
          null == a[o] && s.f(a, o, { configurable: !0, value: r(null) }),
              (t.exports = function (t) {
                  a[o][t] = !0;
              });
      },
      function (t, e, i) {
          var n,
              r = i(11),
              s = i(128),
              o = i(46),
              a = i(25),
              c = i(129),
              l = i(63),
              h = i(30),
              u = h("IE_PROTO"),
              d = function () {},
              m = function (t) {
                  return "<script>" + t + "</script>";
              },
              E = function () {
                  try {
                      n = document.domain && new ActiveXObject("htmlfile");
                  } catch (t) {}
                  var t, e;
                  E = n
                      ? (function (t) {
                            t.write(m("")), t.close();
                            var e = t.parentWindow.Object;
                            return (t = null), e;
                        })(n)
                      : (((e = l("iframe")).style.display = "none"), c.appendChild(e), (e.src = String("javascript:")), (t = e.contentWindow.document).open(), t.write(m("document.F=Object")), t.close(), t.F);
                  for (var i = o.length; i--; ) delete E.prototype[o[i]];
                  return E();
              };
          (a[u] = !0),
              (t.exports =
                  Object.create ||
                  function (t, e) {
                      var i;
                      return null !== t ? ((d.prototype = r(t)), (i = new d()), (d.prototype = null), (i[u] = t)) : (i = E()), void 0 === e ? i : s(i, e);
                  });
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(3),
              s = i(26),
              o = i(31),
              a = i(6),
              c = i(48),
              l = i(75),
              h = i(0),
              u = i(5),
              d = i(47),
              m = i(7),
              E = i(11),
              f = i(20),
              p = i(14),
              g = i(29),
              T = i(22),
              R = i(36),
              v = i(49),
              A = i(45),
              _ = i(131),
              I = i(71),
              O = i(21),
              C = i(8),
              N = i(60),
              L = i(12),
              y = i(15),
              S = i(44),
              b = i(30),
              M = i(25),
              x = i(32),
              D = i(1),
              P = i(79),
              U = i(80),
              w = i(38),
              F = i(24),
              B = i(19).forEach,
              H = b("hidden"),
              G = D("toPrimitive"),
              k = F.set,
              Y = F.getterFor("Symbol"),
              X = Object.prototype,
              V = r.Symbol,
              j = s("JSON", "stringify"),
              $ = O.f,
              z = C.f,
              W = _.f,
              Z = N.f,
              q = S("symbols"),
              Q = S("op-symbols"),
              K = S("string-to-symbol-registry"),
              J = S("symbol-to-string-registry"),
              tt = S("wks"),
              et = r.QObject,
              it = !et || !et.prototype || !et.prototype.findChild,
              nt =
                  a &&
                  h(function () {
                      return (
                          7 !=
                          R(
                              z({}, "a", {
                                  get: function () {
                                      return z(this, "a", { value: 7 }).a;
                                  },
                              })
                          ).a
                      );
                  })
                      ? function (t, e, i) {
                            var n = $(X, e);
                            n && delete X[e], z(t, e, i), n && t !== X && z(X, e, n);
                        }
                      : z,
              rt = function (t, e) {
                  var i = (q[t] = R(V.prototype));
                  return k(i, { type: "Symbol", tag: t, description: e }), a || (i.description = e), i;
              },
              st = l
                  ? function (t) {
                        return "symbol" == typeof t;
                    }
                  : function (t) {
                        return Object(t) instanceof V;
                    },
              ot = function (t, e, i) {
                  t === X && ot(Q, e, i), E(t);
                  var n = g(e, !0);
                  return E(i), u(q, n) ? (i.enumerable ? (u(t, H) && t[H][n] && (t[H][n] = !1), (i = R(i, { enumerable: T(0, !1) }))) : (u(t, H) || z(t, H, T(1, {})), (t[H][n] = !0)), nt(t, n, i)) : z(t, n, i);
              },
              at = function (t, e) {
                  E(t);
                  var i = p(e),
                      n = v(i).concat(ut(i));
                  return (
                      B(n, function (e) {
                          (a && !ct.call(i, e)) || ot(t, e, i[e]);
                      }),
                      t
                  );
              },
              ct = function (t) {
                  var e = g(t, !0),
                      i = Z.call(this, e);
                  return !(this === X && u(q, e) && !u(Q, e)) && (!(i || !u(this, e) || !u(q, e) || (u(this, H) && this[H][e])) || i);
              },
              lt = function (t, e) {
                  var i = p(t),
                      n = g(e, !0);
                  if (i !== X || !u(q, n) || u(Q, n)) {
                      var r = $(i, n);
                      return !r || !u(q, n) || (u(i, H) && i[H][n]) || (r.enumerable = !0), r;
                  }
              },
              ht = function (t) {
                  var e = W(p(t)),
                      i = [];
                  return (
                      B(e, function (t) {
                          u(q, t) || u(M, t) || i.push(t);
                      }),
                      i
                  );
              },
              ut = function (t) {
                  var e = t === X,
                      i = W(e ? Q : p(t)),
                      n = [];
                  return (
                      B(i, function (t) {
                          !u(q, t) || (e && !u(X, t)) || n.push(q[t]);
                      }),
                      n
                  );
              };
          (c ||
              (y(
                  (V = function () {
                      if (this instanceof V) throw TypeError("Symbol is not a constructor");
                      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                          e = x(t),
                          i = function (t) {
                              this === X && i.call(Q, t), u(this, H) && u(this[H], e) && (this[H][e] = !1), nt(this, e, T(1, t));
                          };
                      return a && it && nt(X, e, { configurable: !0, set: i }), rt(e, t);
                  }).prototype,
                  "toString",
                  function () {
                      return Y(this).tag;
                  }
              ),
              y(V, "withoutSetter", function (t) {
                  return rt(x(t), t);
              }),
              (N.f = ct),
              (C.f = ot),
              (O.f = lt),
              (A.f = _.f = ht),
              (I.f = ut),
              (P.f = function (t) {
                  return rt(D(t), t);
              }),
              a &&
                  (z(V.prototype, "description", {
                      configurable: !0,
                      get: function () {
                          return Y(this).description;
                      },
                  }),
                  o || y(X, "propertyIsEnumerable", ct, { unsafe: !0 }))),
          n({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: V }),
          B(v(tt), function (t) {
              U(t);
          }),
          n(
              { target: "Symbol", stat: !0, forced: !c },
              {
                  for: function (t) {
                      var e = String(t);
                      if (u(K, e)) return K[e];
                      var i = V(e);
                      return (K[e] = i), (J[i] = e), i;
                  },
                  keyFor: function (t) {
                      if (!st(t)) throw TypeError(t + " is not a symbol");
                      if (u(J, t)) return J[t];
                  },
                  useSetter: function () {
                      it = !0;
                  },
                  useSimple: function () {
                      it = !1;
                  },
              }
          ),
          n(
              { target: "Object", stat: !0, forced: !c, sham: !a },
              {
                  create: function (t, e) {
                      return void 0 === e ? R(t) : at(R(t), e);
                  },
                  defineProperty: ot,
                  defineProperties: at,
                  getOwnPropertyDescriptor: lt,
              }
          ),
          n({ target: "Object", stat: !0, forced: !c }, { getOwnPropertyNames: ht, getOwnPropertySymbols: ut }),
          n(
              {
                  target: "Object",
                  stat: !0,
                  forced: h(function () {
                      I.f(1);
                  }),
              },
              {
                  getOwnPropertySymbols: function (t) {
                      return I.f(f(t));
                  },
              }
          ),
          j) &&
              n(
                  {
                      target: "JSON",
                      stat: !0,
                      forced:
                          !c ||
                          h(function () {
                              var t = V();
                              return "[null]" != j([t]) || "{}" != j({ a: t }) || "{}" != j(Object(t));
                          }),
                  },
                  {
                      stringify: function (t, e, i) {
                          for (var n, r = [t], s = 1; arguments.length > s; ) r.push(arguments[s++]);
                          if (((n = e), (m(e) || void 0 !== t) && !st(t)))
                              return (
                                  d(e) ||
                                      (e = function (t, e) {
                                          if (("function" == typeof n && (e = n.call(this, t, e)), !st(e))) return e;
                                      }),
                                  (r[1] = e),
                                  j.apply(null, r)
                              );
                      },
                  }
              );
          V.prototype[G] || L(V.prototype, G, V.prototype.valueOf), w(V, "Symbol"), (M[H] = !0);
      },
      function (t, e, i) {
          var n = i(8).f,
              r = i(5),
              s = i(1)("toStringTag");
          t.exports = function (t, e, i) {
              t && !r((t = i ? t : t.prototype), s) && n(t, s, { configurable: !0, value: e });
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(6),
              s = i(3),
              o = i(5),
              a = i(7),
              c = i(8).f,
              l = i(66),
              h = s.Symbol;
          if (r && "function" == typeof h && (!("description" in h.prototype) || void 0 !== h().description)) {
              var u = {},
                  d = function () {
                      var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                          e = this instanceof d ? new h(t) : void 0 === t ? h() : h(t);
                      return "" === t && (u[e] = !0), e;
                  };
              l(d, h);
              var m = (d.prototype = h.prototype);
              m.constructor = d;
              var E = m.toString,
                  f = "Symbol(test)" == String(h("test")),
                  p = /^Symbol\((.*)\)[^)]+$/;
              c(m, "description", {
                  configurable: !0,
                  get: function () {
                      var t = a(this) ? this.valueOf() : this,
                          e = E.call(t);
                      if (o(u, t)) return "";
                      var i = f ? e.slice(7, -1) : e.replace(p, "$1");
                      return "" === i ? void 0 : i;
                  },
              }),
                  n({ global: !0, forced: !0 }, { Symbol: d });
          }
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(0),
              s = i(47),
              o = i(7),
              a = i(20),
              c = i(16),
              l = i(52),
              h = i(74),
              u = i(51),
              d = i(1),
              m = i(85),
              E = d("isConcatSpreadable"),
              f =
                  m >= 51 ||
                  !r(function () {
                      var t = [];
                      return (t[E] = !1), t.concat()[0] !== t;
                  }),
              p = u("concat"),
              g = function (t) {
                  if (!o(t)) return !1;
                  var e = t[E];
                  return void 0 !== e ? !!e : s(t);
              };
          n(
              { target: "Array", proto: !0, forced: !f || !p },
              {
                  concat: function (t) {
                      var e,
                          i,
                          n,
                          r,
                          s,
                          o = a(this),
                          u = h(o, 0),
                          d = 0;
                      for (e = -1, n = arguments.length; e < n; e++)
                          if (g((s = -1 === e ? o : arguments[e]))) {
                              if (d + (r = c(s.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                              for (i = 0; i < r; i++, d++) i in s && l(u, d, s[i]);
                          } else {
                              if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                              l(u, d++, s);
                          }
                      return (u.length = d), u;
                  },
              }
          );
      },
      function (t, e, i) {
          "use strict";
          var n,
              r,
              s = i(102),
              o = i(156),
              a = RegExp.prototype.exec,
              c = String.prototype.replace,
              l = a,
              h = ((n = /a/), (r = /b*/g), a.call(n, "a"), a.call(r, "a"), 0 !== n.lastIndex || 0 !== r.lastIndex),
              u = o.UNSUPPORTED_Y || o.BROKEN_CARET,
              d = void 0 !== /()??/.exec("")[1];
          (h || d || u) &&
              (l = function (t) {
                  var e,
                      i,
                      n,
                      r,
                      o = this,
                      l = u && o.sticky,
                      m = s.call(o),
                      E = o.source,
                      f = 0,
                      p = t;
                  return (
                      l &&
                          (-1 === (m = m.replace("y", "")).indexOf("g") && (m += "g"),
                          (p = String(t).slice(o.lastIndex)),
                          o.lastIndex > 0 && (!o.multiline || (o.multiline && "\n" !== t[o.lastIndex - 1])) && ((E = "(?: " + E + ")"), (p = " " + p), f++),
                          (i = new RegExp("^(?:" + E + ")", m))),
                      d && (i = new RegExp("^" + E + "$(?!\\s)", m)),
                      h && (e = o.lastIndex),
                      (n = a.call(l ? i : o, p)),
                      l ? (n ? ((n.input = n.input.slice(f)), (n[0] = n[0].slice(f)), (n.index = o.lastIndex), (o.lastIndex += n[0].length)) : (o.lastIndex = 0)) : h && n && (o.lastIndex = o.global ? n.index + n[0].length : e),
                      d &&
                          n &&
                          n.length > 1 &&
                          c.call(n[0], i, function () {
                              for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (n[r] = void 0);
                          }),
                      n
                  );
              }),
              (t.exports = l);
      },
      function (t, e) {
          t.exports =
              "precision highp float;\r\n\r\nuniform mat4 uMVP;\r\n\r\nattribute vec3 aPosition;\r\nattribute vec2 aTexcoord;\r\n\r\nvarying vec3 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\nvoid main() {\r\n\r\n  gl_Position = uMVP * vec4(aPosition.xyz, 1.0);\r\n\r\n  vPosition = aPosition;\r\n  vTexcoord = aTexcoord;\r\n}\r\n";
      },
      function (t, e, i) {
          var n = i(3),
              r = i(12);
          t.exports = function (t, e) {
              try {
                  r(n, t, e);
              } catch (i) {
                  n[t] = e;
              }
              return e;
          };
      },
      function (t, e, i) {
          var n = i(31),
              r = i(65);
          (t.exports = function (t, e) {
              return r[t] || (r[t] = void 0 !== e ? e : {});
          })("versions", []).push({ version: "3.6.4", mode: n ? "pure" : "global", copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)" });
      },
      function (t, e, i) {
          var n = i(69),
              r = i(46).concat("length", "prototype");
          e.f =
              Object.getOwnPropertyNames ||
              function (t) {
                  return n(t, r);
              };
      },
      function (t, e) {
          t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      },
      function (t, e, i) {
          var n = i(23);
          t.exports =
              Array.isArray ||
              function (t) {
                  return "Array" == n(t);
              };
      },
      function (t, e, i) {
          var n = i(0);
          t.exports =
              !!Object.getOwnPropertySymbols &&
              !n(function () {
                  return !String(Symbol());
              });
      },
      function (t, e, i) {
          var n = i(69),
              r = i(46);
          t.exports =
              Object.keys ||
              function (t) {
                  return n(t, r);
              };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(70).includes,
              s = i(35);
          n(
              { target: "Array", proto: !0, forced: !i(17)("indexOf", { ACCESSORS: !0, 1: 0 }) },
              {
                  includes: function (t) {
                      return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                  },
              }
          ),
              s("includes");
      },
      function (t, e, i) {
          var n = i(0),
              r = i(1),
              s = i(85),
              o = r("species");
          t.exports = function (t) {
              return (
                  s >= 51 ||
                  !n(function () {
                      var e = [];
                      return (
                          ((e.constructor = {})[o] = function () {
                              return { foo: 1 };
                          }),
                          1 !== e[t](Boolean).foo
                      );
                  })
              );
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(29),
              r = i(8),
              s = i(22);
          t.exports = function (t, e, i) {
              var o = n(e);
              o in t ? r.f(t, o, s(0, i)) : (t[o] = i);
          };
      },
      function (t, e, i) {
          var n = {};
          (n[i(1)("toStringTag")] = "z"), (t.exports = "[object z]" === String(n));
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(138),
              s = i(93),
              o = i(94),
              a = i(38),
              c = i(12),
              l = i(15),
              h = i(1),
              u = i(31),
              d = i(27),
              m = i(92),
              E = m.IteratorPrototype,
              f = m.BUGGY_SAFARI_ITERATORS,
              p = h("iterator"),
              g = function () {
                  return this;
              };
          t.exports = function (t, e, i, h, m, T, R) {
              r(i, e, h);
              var v,
                  A,
                  _,
                  I = function (t) {
                      if (t === m && y) return y;
                      if (!f && t in N) return N[t];
                      switch (t) {
                          case "keys":
                          case "values":
                          case "entries":
                              return function () {
                                  return new i(this, t);
                              };
                      }
                      return function () {
                          return new i(this);
                      };
                  },
                  O = e + " Iterator",
                  C = !1,
                  N = t.prototype,
                  L = N[p] || N["@@iterator"] || (m && N[m]),
                  y = (!f && L) || I(m),
                  S = ("Array" == e && N.entries) || L;
              if (
                  (S && ((v = s(S.call(new t()))), E !== Object.prototype && v.next && (u || s(v) === E || (o ? o(v, E) : "function" != typeof v[p] && c(v, p, g)), a(v, O, !0, !0), u && (d[O] = g))),
                  "values" == m &&
                      L &&
                      "values" !== L.name &&
                      ((C = !0),
                      (y = function () {
                          return L.call(this);
                      })),
                  (u && !R) || N[p] === y || c(N, p, y),
                  (d[e] = y),
                  m)
              )
                  if (((A = { values: I("values"), keys: T ? y : I("keys"), entries: I("entries") }), R)) for (_ in A) (f || C || !(_ in N)) && l(N, _, A[_]);
                  else n({ target: e, proto: !0, forced: f || C }, A);
              return A;
          };
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nattribute vec2 aPosition;\r\nattribute vec2 aTexcoord;\r\n\r\nvarying vec2 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\nvoid main() {\r\n\r\n  gl_Position = vec4(aPosition.xy, 0.0, 1.0);\r\n\r\n  vPosition = aPosition;\r\n  vTexcoord = aTexcoord;\r\n}";
      },
      function (t, e, i) {
          "use strict";
          var n = i(121),
              r = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
              s = Object.prototype.toString,
              o = Array.prototype.concat,
              a = Object.defineProperty,
              c =
                  a &&
                  (function () {
                      var t = {};
                      try {
                          for (var e in (a(t, "x", { enumerable: !1, value: t }), t)) return !1;
                          return t.x === t;
                      } catch (t) {
                          return !1;
                      }
                  })(),
              l = function (t, e, i, n) {
                  var r;
                  (!(e in t) || ("function" == typeof (r = n) && "[object Function]" === s.call(r) && n())) && (c ? a(t, e, { configurable: !0, enumerable: !1, value: i, writable: !0 }) : (t[e] = i));
              },
              h = function (t, e) {
                  var i = arguments.length > 2 ? arguments[2] : {},
                      s = n(e);
                  r && (s = o.call(s, Object.getOwnPropertySymbols(e)));
                  for (var a = 0; a < s.length; a += 1) l(t, s[a], e[s[a]], i[s[a]]);
              };
          (h.supportsDescriptors = !!c), (t.exports = h);
      },
      function (t, e, i) {
          "use strict";
          var n = Object.prototype.toString;
          t.exports = function (t) {
              var e = n.call(t),
                  i = "[object Arguments]" === e;
              return i || (i = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), i;
          };
      },
      function (t, e, i) {
          "use strict";
          t.exports = function (t) {
              if (arguments.length < 1) throw new TypeError("1 argument is required");
              if ("object" != typeof t) throw new TypeError("Argument 1 (â€otherâ€œ) to Node.contains must be an instance of Node");
              var e = t;
              do {
                  if (this === e) return !0;
                  e && (e = e.parentNode);
              } while (e);
              return !1;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(58);
          t.exports = function () {
              if ("undefined" != typeof document) {
                  if (document.contains) return document.contains;
                  if (document.body && document.body.contains) return document.body.contains;
              }
              return n;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = {}.propertyIsEnumerable,
              r = Object.getOwnPropertyDescriptor,
              s = r && !n.call({ 1: 2 }, 1);
          e.f = s
              ? function (t) {
                    var e = r(this, t);
                    return !!e && e.enumerable;
                }
              : n;
      },
      function (t, e, i) {
          var n = i(0),
              r = i(23),
              s = "".split;
          t.exports = n(function () {
              return !Object("z").propertyIsEnumerable(0);
          })
              ? function (t) {
                    return "String" == r(t) ? s.call(t, "") : Object(t);
                }
              : Object;
      },
      function (t, e, i) {
          var n = i(6),
              r = i(0),
              s = i(63);
          t.exports =
              !n &&
              !r(function () {
                  return (
                      7 !=
                      Object.defineProperty(s("div"), "a", {
                          get: function () {
                              return 7;
                          },
                      }).a
                  );
              });
      },
      function (t, e, i) {
          var n = i(3),
              r = i(7),
              s = n.document,
              o = r(s) && r(s.createElement);
          t.exports = function (t) {
              return o ? s.createElement(t) : {};
          };
      },
      function (t, e, i) {
          var n = i(65),
              r = Function.toString;
          "function" != typeof n.inspectSource &&
              (n.inspectSource = function (t) {
                  return r.call(t);
              }),
              (t.exports = n.inspectSource);
      },
      function (t, e, i) {
          var n = i(3),
              r = i(43),
              s = n["__core-js_shared__"] || r("__core-js_shared__", {});
          t.exports = s;
      },
      function (t, e, i) {
          var n = i(5),
              r = i(67),
              s = i(21),
              o = i(8);
          t.exports = function (t, e) {
              for (var i = r(e), a = o.f, c = s.f, l = 0; l < i.length; l++) {
                  var h = i[l];
                  n(t, h) || a(t, h, c(e, h));
              }
          };
      },
      function (t, e, i) {
          var n = i(26),
              r = i(45),
              s = i(71),
              o = i(11);
          t.exports =
              n("Reflect", "ownKeys") ||
              function (t) {
                  var e = r.f(o(t)),
                      i = s.f;
                  return i ? e.concat(i(t)) : e;
              };
      },
      function (t, e, i) {
          var n = i(3);
          t.exports = n;
      },
      function (t, e, i) {
          var n = i(5),
              r = i(14),
              s = i(70).indexOf,
              o = i(25);
          t.exports = function (t, e) {
              var i,
                  a = r(t),
                  c = 0,
                  l = [];
              for (i in a) !n(o, i) && n(a, i) && l.push(i);
              for (; e.length > c; ) n(a, (i = e[c++])) && (~s(l, i) || l.push(i));
              return l;
          };
      },
      function (t, e, i) {
          var n = i(14),
              r = i(16),
              s = i(127),
              o = function (t) {
                  return function (e, i, o) {
                      var a,
                          c = n(e),
                          l = r(c.length),
                          h = s(o, l);
                      if (t && i != i) {
                          for (; l > h; ) if ((a = c[h++]) != a) return !0;
                      } else for (; l > h; h++) if ((t || h in c) && c[h] === i) return t || h || 0;
                      return !t && -1;
                  };
              };
          t.exports = { includes: o(!0), indexOf: o(!1) };
      },
      function (t, e) {
          e.f = Object.getOwnPropertySymbols;
      },
      function (t, e, i) {
          var n = i(0),
              r = /#|\.prototype\./,
              s = function (t, e) {
                  var i = a[o(t)];
                  return i == l || (i != c && ("function" == typeof e ? n(e) : !!e));
              },
              o = (s.normalize = function (t) {
                  return String(t).replace(r, ".").toLowerCase();
              }),
              a = (s.data = {}),
              c = (s.NATIVE = "N"),
              l = (s.POLYFILL = "P");
          t.exports = s;
      },
      function (t, e) {
          t.exports = function (t) {
              if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
              return t;
          };
      },
      function (t, e, i) {
          var n = i(7),
              r = i(47),
              s = i(1)("species");
          t.exports = function (t, e) {
              var i;
              return r(t) && ("function" != typeof (i = t.constructor) || (i !== Array && !r(i.prototype)) ? n(i) && null === (i = i[s]) && (i = void 0) : (i = void 0)), new (void 0 === i ? Array : i)(0 === e ? 0 : e);
          };
      },
      function (t, e, i) {
          var n = i(48);
          t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      function (t, e, i) {
          "use strict";
          var n = i(19).forEach,
              r = i(77),
              s = i(17),
              o = r("forEach"),
              a = s("forEach");
          t.exports =
              o && a
                  ? [].forEach
                  : function (t) {
                        return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    };
      },
      function (t, e, i) {
          "use strict";
          var n = i(0);
          t.exports = function (t, e) {
              var i = [][t];
              return (
                  !!i &&
                  n(function () {
                      i.call(
                          null,
                          e ||
                              function () {
                                  throw 1;
                              },
                          1
                      );
                  })
              );
          };
      },
      function (t, e) {
          t.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0,
          };
      },
      function (t, e, i) {
          var n = i(1);
          e.f = n;
      },
      function (t, e, i) {
          var n = i(68),
              r = i(5),
              s = i(79),
              o = i(8).f;
          t.exports = function (t) {
              var e = n.Symbol || (n.Symbol = {});
              r(e, t) || o(e, t, { value: s.f(t) });
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(19).find,
              s = i(35),
              o = i(17),
              a = !0,
              c = o("find");
          "find" in [] &&
              Array(1).find(function () {
                  a = !1;
              }),
              n(
                  { target: "Array", proto: !0, forced: a || !c },
                  {
                      find: function (t) {
                          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                      },
                  }
              ),
              s("find");
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(132),
              s = i(18);
          n(
              { target: "String", proto: !0, forced: !i(133)("includes") },
              {
                  includes: function (t) {
                      return !!~String(s(this)).indexOf(r(t), arguments.length > 1 ? arguments[1] : void 0);
                  },
              }
          );
      },
      function (t, e, i) {
          var n = i(7),
              r = i(23),
              s = i(1)("match");
          t.exports = function (t) {
              var e;
              return n(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == r(t));
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(19).filter,
              s = i(51),
              o = i(17),
              a = s("filter"),
              c = o("filter");
          n(
              { target: "Array", proto: !0, forced: !a || !c },
              {
                  filter: function (t) {
                      return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                  },
              }
          );
      },
      function (t, e, i) {
          var n,
              r,
              s = i(3),
              o = i(135),
              a = s.process,
              c = a && a.versions,
              l = c && c.v8;
          l ? (r = (n = l.split("."))[0] + n[1]) : o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (r = n[1]), (t.exports = r && +r);
      },
      function (t, e, i) {
          var n = i(11);
          t.exports = function (t, e, i, r) {
              try {
                  return r ? e(n(i)[0], i[1]) : e(i);
              } catch (e) {
                  var s = t.return;
                  throw (void 0 !== s && n(s.call(t)), e);
              }
          };
      },
      function (t, e, i) {
          var n = i(1),
              r = i(27),
              s = n("iterator"),
              o = Array.prototype;
          t.exports = function (t) {
              return void 0 !== t && (r.Array === t || o[s] === t);
          };
      },
      function (t, e, i) {
          var n = i(89),
              r = i(27),
              s = i(1)("iterator");
          t.exports = function (t) {
              if (null != t) return t[s] || t["@@iterator"] || r[n(t)];
          };
      },
      function (t, e, i) {
          var n = i(53),
              r = i(23),
              s = i(1)("toStringTag"),
              o =
                  "Arguments" ==
                  r(
                      (function () {
                          return arguments;
                      })()
                  );
          t.exports = n
              ? r
              : function (t) {
                    var e, i, n;
                    return void 0 === t
                        ? "Undefined"
                        : null === t
                        ? "Null"
                        : "string" ==
                          typeof (i = (function (t, e) {
                              try {
                                  return t[e];
                              } catch (t) {}
                          })((e = Object(t)), s))
                        ? i
                        : o
                        ? r(e)
                        : "Object" == (n = r(e)) && "function" == typeof e.callee
                        ? "Arguments"
                        : n;
                };
      },
      function (t, e, i) {
          var n = i(1)("iterator"),
              r = !1;
          try {
              var s = 0,
                  o = {
                      next: function () {
                          return { done: !!s++ };
                      },
                      return: function () {
                          r = !0;
                      },
                  };
              (o[n] = function () {
                  return this;
              }),
                  Array.from(o, function () {
                      throw 2;
                  });
          } catch (t) {}
          t.exports = function (t, e) {
              if (!e && !r) return !1;
              var i = !1;
              try {
                  var s = {};
                  (s[n] = function () {
                      return {
                          next: function () {
                              return { done: (i = !0) };
                          },
                      };
                  }),
                      t(s);
              } catch (t) {}
              return i;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(14),
              r = i(35),
              s = i(27),
              o = i(24),
              a = i(54),
              c = o.set,
              l = o.getterFor("Array Iterator");
          (t.exports = a(
              Array,
              "Array",
              function (t, e) {
                  c(this, { type: "Array Iterator", target: n(t), index: 0, kind: e });
              },
              function () {
                  var t = l(this),
                      e = t.target,
                      i = t.kind,
                      n = t.index++;
                  return !e || n >= e.length ? ((t.target = void 0), { value: void 0, done: !0 }) : "keys" == i ? { value: n, done: !1 } : "values" == i ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 };
              },
              "values"
          )),
              (s.Arguments = s.Array),
              r("keys"),
              r("values"),
              r("entries");
      },
      function (t, e, i) {
          "use strict";
          var n,
              r,
              s,
              o = i(93),
              a = i(12),
              c = i(5),
              l = i(1),
              h = i(31),
              u = l("iterator"),
              d = !1;
          [].keys && ("next" in (s = [].keys()) ? (r = o(o(s))) !== Object.prototype && (n = r) : (d = !0)),
              null == n && (n = {}),
              h ||
                  c(n, u) ||
                  a(n, u, function () {
                      return this;
                  }),
              (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d });
      },
      function (t, e, i) {
          var n = i(5),
              r = i(20),
              s = i(30),
              o = i(139),
              a = s("IE_PROTO"),
              c = Object.prototype;
          t.exports = o
              ? Object.getPrototypeOf
              : function (t) {
                    return (t = r(t)), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null;
                };
      },
      function (t, e, i) {
          var n = i(11),
              r = i(140);
          t.exports =
              Object.setPrototypeOf ||
              ("__proto__" in {}
                  ? (function () {
                        var t,
                            e = !1,
                            i = {};
                        try {
                            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), (e = i instanceof Array);
                        } catch (t) {}
                        return function (i, s) {
                            return n(i), r(s), e ? t.call(i, s) : (i.__proto__ = s), i;
                        };
                    })()
                  : void 0);
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(19).map,
              s = i(51),
              o = i(17),
              a = s("map"),
              c = o("map");
          n(
              { target: "Array", proto: !0, forced: !a || !c },
              {
                  map: function (t) {
                      return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                  },
              }
          );
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(3),
              s = i(72),
              o = i(15),
              a = i(97),
              c = i(98),
              l = i(99),
              h = i(7),
              u = i(0),
              d = i(90),
              m = i(38),
              E = i(143);
          t.exports = function (t, e, i) {
              var f = -1 !== t.indexOf("Map"),
                  p = -1 !== t.indexOf("Weak"),
                  g = f ? "set" : "add",
                  T = r[t],
                  R = T && T.prototype,
                  v = T,
                  A = {},
                  _ = function (t) {
                      var e = R[t];
                      o(
                          R,
                          t,
                          "add" == t
                              ? function (t) {
                                    return e.call(this, 0 === t ? 0 : t), this;
                                }
                              : "delete" == t
                              ? function (t) {
                                    return !(p && !h(t)) && e.call(this, 0 === t ? 0 : t);
                                }
                              : "get" == t
                              ? function (t) {
                                    return p && !h(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                                }
                              : "has" == t
                              ? function (t) {
                                    return !(p && !h(t)) && e.call(this, 0 === t ? 0 : t);
                                }
                              : function (t, i) {
                                    return e.call(this, 0 === t ? 0 : t, i), this;
                                }
                      );
                  };
              if (
                  s(
                      t,
                      "function" != typeof T ||
                          !(
                              p ||
                              (R.forEach &&
                                  !u(function () {
                                      new T().entries().next();
                                  }))
                          )
                  )
              )
                  (v = i.getConstructor(e, t, f, g)), (a.REQUIRED = !0);
              else if (s(t, !0)) {
                  var I = new v(),
                      O = I[g](p ? {} : -0, 1) != I,
                      C = u(function () {
                          I.has(1);
                      }),
                      N = d(function (t) {
                          new T(t);
                      }),
                      L =
                          !p &&
                          u(function () {
                              for (var t = new T(), e = 5; e--; ) t[g](e, e);
                              return !t.has(-0);
                          });
                  N ||
                      (((v = e(function (e, i) {
                          l(e, v, t);
                          var n = E(new T(), e, v);
                          return null != i && c(i, n[g], n, f), n;
                      })).prototype = R),
                      (R.constructor = v)),
                      (C || L) && (_("delete"), _("has"), f && _("get")),
                      (L || O) && _(g),
                      p && R.clear && delete R.clear;
              }
              return (A[t] = v), n({ global: !0, forced: v != T }, A), m(v, t), p || i.setStrong(v, t, f), v;
          };
      },
      function (t, e, i) {
          var n = i(25),
              r = i(7),
              s = i(5),
              o = i(8).f,
              a = i(32),
              c = i(142),
              l = a("meta"),
              h = 0,
              u =
                  Object.isExtensible ||
                  function () {
                      return !0;
                  },
              d = function (t) {
                  o(t, l, { value: { objectID: "O" + ++h, weakData: {} } });
              },
              m = (t.exports = {
                  REQUIRED: !1,
                  fastKey: function (t, e) {
                      if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                      if (!s(t, l)) {
                          if (!u(t)) return "F";
                          if (!e) return "E";
                          d(t);
                      }
                      return t[l].objectID;
                  },
                  getWeakData: function (t, e) {
                      if (!s(t, l)) {
                          if (!u(t)) return !0;
                          if (!e) return !1;
                          d(t);
                      }
                      return t[l].weakData;
                  },
                  onFreeze: function (t) {
                      return c && m.REQUIRED && u(t) && !s(t, l) && d(t), t;
                  },
              });
          n[l] = !0;
      },
      function (t, e, i) {
          var n = i(11),
              r = i(87),
              s = i(16),
              o = i(34),
              a = i(88),
              c = i(86),
              l = function (t, e) {
                  (this.stopped = t), (this.result = e);
              };
          (t.exports = function (t, e, i, h, u) {
              var d,
                  m,
                  E,
                  f,
                  p,
                  g,
                  T,
                  R = o(e, i, h ? 2 : 1);
              if (u) d = t;
              else {
                  if ("function" != typeof (m = a(t))) throw TypeError("Target is not iterable");
                  if (r(m)) {
                      for (E = 0, f = s(t.length); f > E; E++) if ((p = h ? R(n((T = t[E]))[0], T[1]) : R(t[E])) && p instanceof l) return p;
                      return new l(!1);
                  }
                  d = m.call(t);
              }
              for (g = d.next; !(T = g.call(d)).done; ) if ("object" == typeof (p = c(d, R, T.value, h)) && p && p instanceof l) return p;
              return new l(!1);
          }).stop = function (t) {
              return new l(!0, t);
          };
      },
      function (t, e) {
          t.exports = function (t, e, i) {
              if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
              return t;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(8).f,
              r = i(36),
              s = i(144),
              o = i(34),
              a = i(99),
              c = i(98),
              l = i(54),
              h = i(145),
              u = i(6),
              d = i(97).fastKey,
              m = i(24),
              E = m.set,
              f = m.getterFor;
          t.exports = {
              getConstructor: function (t, e, i, l) {
                  var h = t(function (t, n) {
                          a(t, h, e), E(t, { type: e, index: r(null), first: void 0, last: void 0, size: 0 }), u || (t.size = 0), null != n && c(n, t[l], t, i);
                      }),
                      m = f(e),
                      p = function (t, e, i) {
                          var n,
                              r,
                              s = m(t),
                              o = g(t, e);
                          return (
                              o
                                  ? (o.value = i)
                                  : ((s.last = o = { index: (r = d(e, !0)), key: e, value: i, previous: (n = s.last), next: void 0, removed: !1 }),
                                    s.first || (s.first = o),
                                    n && (n.next = o),
                                    u ? s.size++ : t.size++,
                                    "F" !== r && (s.index[r] = o)),
                              t
                          );
                      },
                      g = function (t, e) {
                          var i,
                              n = m(t),
                              r = d(e);
                          if ("F" !== r) return n.index[r];
                          for (i = n.first; i; i = i.next) if (i.key == e) return i;
                      };
                  return (
                      s(h.prototype, {
                          clear: function () {
                              for (var t = m(this), e = t.index, i = t.first; i; ) (i.removed = !0), i.previous && (i.previous = i.previous.next = void 0), delete e[i.index], (i = i.next);
                              (t.first = t.last = void 0), u ? (t.size = 0) : (this.size = 0);
                          },
                          delete: function (t) {
                              var e = m(this),
                                  i = g(this, t);
                              if (i) {
                                  var n = i.next,
                                      r = i.previous;
                                  delete e.index[i.index], (i.removed = !0), r && (r.next = n), n && (n.previous = r), e.first == i && (e.first = n), e.last == i && (e.last = r), u ? e.size-- : this.size--;
                              }
                              return !!i;
                          },
                          forEach: function (t) {
                              for (var e, i = m(this), n = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); (e = e ? e.next : i.first); ) for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
                          },
                          has: function (t) {
                              return !!g(this, t);
                          },
                      }),
                      s(
                          h.prototype,
                          i
                              ? {
                                    get: function (t) {
                                        var e = g(this, t);
                                        return e && e.value;
                                    },
                                    set: function (t, e) {
                                        return p(this, 0 === t ? 0 : t, e);
                                    },
                                }
                              : {
                                    add: function (t) {
                                        return p(this, (t = 0 === t ? 0 : t), t);
                                    },
                                }
                      ),
                      u &&
                          n(h.prototype, "size", {
                              get: function () {
                                  return m(this).size;
                              },
                          }),
                      h
                  );
              },
              setStrong: function (t, e, i) {
                  var n = e + " Iterator",
                      r = f(e),
                      s = f(n);
                  l(
                      t,
                      e,
                      function (t, e) {
                          E(this, { type: n, target: t, state: r(t), kind: e, last: void 0 });
                      },
                      function () {
                          for (var t = s(this), e = t.kind, i = t.last; i && i.removed; ) i = i.previous;
                          return t.target && (t.last = i = i ? i.next : t.state.first)
                              ? "keys" == e
                                  ? { value: i.key, done: !1 }
                                  : "values" == e
                                  ? { value: i.value, done: !1 }
                                  : { value: [i.key, i.value], done: !1 }
                              : ((t.target = void 0), { value: void 0, done: !0 });
                      },
                      i ? "entries" : "values",
                      !i,
                      !0
                  ),
                      h(e);
              },
          };
      },
      function (t, e, i) {
          var n = i(2),
              r = i(20),
              s = i(49);
          n(
              {
                  target: "Object",
                  stat: !0,
                  forced: i(0)(function () {
                      s(1);
                  }),
              },
              {
                  keys: function (t) {
                      return s(r(t));
                  },
              }
          );
      },
      function (t, e, i) {
          "use strict";
          var n = i(11);
          t.exports = function () {
              var t = n(this),
                  e = "";
              return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
          };
      },
      function (t, e, i) {
          var n = i(33),
              r = i(18),
              s = function (t) {
                  return function (e, i) {
                      var s,
                          o,
                          a = String(r(e)),
                          c = n(i),
                          l = a.length;
                      return c < 0 || c >= l
                          ? t
                              ? ""
                              : void 0
                          : (s = a.charCodeAt(c)) < 55296 || s > 56319 || c + 1 === l || (o = a.charCodeAt(c + 1)) < 56320 || o > 57343
                          ? t
                              ? a.charAt(c)
                              : s
                          : t
                          ? a.slice(c, c + 2)
                          : o - 56320 + ((s - 55296) << 10) + 65536;
                  };
              };
          t.exports = { codeAt: s(!1), charAt: s(!0) };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(41);
          n({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
      },
      function (t, e) {
          t.exports = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff";
      },
      function (t, e, i) {
          "use strict";
          var n = i(56),
              r = i(58),
              s = i(59),
              o = s(),
              a = function (t, e) {
                  return o.apply(t, [e]);
              };
          n(a, { getPolyfill: s, implementation: r, shim: i(123) }), (t.exports = a);
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nuniform sampler2D uSamplerA;\r\nuniform sampler2D uSamplerB;\r\n\r\nuniform float uAlpha;\r\nuniform float uMixAB;\r\n\r\nvarying vec3 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\n// ________________________________________________________________________ Main\r\n\r\nvoid main() {\r\n\r\n  // Flip Y\r\n  vec2 texcoord = vec2(vTexcoord.x, 1.0 - vTexcoord.y);\r\n\r\n  // Sample\r\n  vec4 colourA = texture2D(uSamplerA, texcoord);\r\n  vec4 colourB = texture2D(uSamplerB, texcoord);\r\n\r\n  // Mix\r\n  vec4 colour = mix(colourA, colourB, uMixAB);\r\n\r\n  // Apply alpha\r\n  colour.a *= uAlpha;\r\n\r\n  // Out\r\n  gl_FragColor = colour;\r\n}\r\n";
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nuniform float uBlurred;\r\n\r\n// ________________________________________________________________________ Main\r\n\r\nvoid main() {\r\n  // Blurred to R\r\n  gl_FragColor = vec4(uBlurred, 0.0, 0.0, 1.0);\r\n}\r\n";
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nuniform sampler2D uSampler;\r\nuniform vec2 uResolution;\r\n\r\nvarying vec2 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\n/*\r\n  http://dev.theomader.com/gaussian-kernel-calculator/\r\n\r\n  9\r\n  0.000229\t0.005977\t0.060598\t0.241732\t0.382928\t0.241732\t0.060598\t0.005977\t0.000229\r\n\r\n  11\r\n  0.000003\t0.000229\t0.005977\t0.060598\t0.24173\t0.382925\t0.24173\t0.060598\t0.005977\t0.000229\t0.000003\r\n*/\r\n\r\nvoid main() {\r\n\r\n  float pixel = 1.0 / uResolution.x;\r\n  vec4 col = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (5.0 * pixel), vTexcoord.y)) * 0.000003;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (4.0 * pixel), vTexcoord.y)) * 0.000229;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (3.0 * pixel), vTexcoord.y)) * 0.005977;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (2.0 * pixel), vTexcoord.y)) * 0.060598;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (1.0 * pixel), vTexcoord.y)) * 0.24173;\r\n\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y)) * 0.382925;\r\n\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (-1.0 * pixel), vTexcoord.y)) * 0.24173;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (-2.0 * pixel), vTexcoord.y)) * 0.060598;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (-3.0 * pixel), vTexcoord.y)) * 0.005977;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (-4.0 * pixel), vTexcoord.y)) * 0.000229;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x + (-5.0 * pixel), vTexcoord.y)) * 0.000003;\r\n\r\n  gl_FragColor = vec4(col.rgb, 1.0);\r\n}";
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nuniform sampler2D uSampler;\r\nuniform vec2 uResolution;\r\n\r\nvarying vec2 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\n\r\nvoid main() {\r\n\r\n  float pixel = 1.0 / uResolution.y;\r\n  vec4 col = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (5.0 * pixel))) * 0.000003;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (4.0 * pixel))) * 0.000229;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (3.0 * pixel))) * 0.005977;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (2.0 * pixel))) * 0.060598;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (1.0 * pixel))) * 0.24173;\r\n\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y )) * 0.382925;\r\n\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (-1.0 * pixel))) * 0.24173;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (-2.0 * pixel))) * 0.060598;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (-3.0 * pixel))) * 0.005977;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (-4.0 * pixel))) * 0.000229;\r\n  col += texture2D(uSampler, vec2(vTexcoord.x, vTexcoord.y + (-5.0 * pixel))) * 0.000003;\r\n\r\n  gl_FragColor = vec4(col.rgb, 1.0);\r\n}";
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nattribute vec2 aPosition;\r\nattribute vec2 aTexcoord;\r\n\r\nvarying vec2 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\nvoid main() {\r\n\r\n  gl_Position = vec4(aPosition.xy, 0.0, 1.0);\r\n\r\n  vPosition = aPosition;\r\n  vTexcoord = aTexcoord;\r\n}";
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nuniform sampler2D uSamplerColour;\r\nuniform sampler2D uSamplerMask;\r\nuniform sampler2D uSamplerBlur;\r\n\r\nvarying vec2 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\n\r\nvec3 photoshop_desaturate(vec3 color) {\r\n    float bw = (min(color.r, min(color.g, color.b)) + max(color.r, max(color.g, color.b))) * 0.5;\r\n    return vec3(bw, bw, bw);\r\n}\r\n\r\n// ________________________________________________________________________ Main\r\n\r\nvoid main() {\r\n\r\n\t// Sample\r\n\tvec3 colourColour = texture2D(uSamplerColour, vTexcoord).xyz;\r\n  vec3 colourMask = texture2D(uSamplerMask, vTexcoord).xyz;\r\n  vec3 colourBlur = texture2D(uSamplerBlur, vTexcoord).xyz;\r\n\r\n  float blur = colourMask.r;\r\n  float desaturate = 1.0 - (blur * 0.5); // TODO Hardcoded desaturation amount\r\n\r\n  // Desaturate Colour Blur\r\n  vec3 colourBlurDesaturated = photoshop_desaturate(colourBlur);\r\n\r\n  // Mix\r\n  vec3 colour = mix(colourColour, colourBlurDesaturated, blur);\r\n\r\n  // Clamp\r\n  vec3 clamped = clamp(colour, 0.0, 1.0);\r\n\r\n\t// Out\r\n  gl_FragColor = vec4(clamped, 1.0);\r\n\r\n\t// DEV\r\n\t// gl_FragColor = vec4(colourColour.rgb, 1.0);\r\n\t// gl_FragColor = vec4(colourMask.rgb, 1.0);\r\n  // gl_FragColor = vec4(colourBlur.rgb, 1.0);\r\n\r\n  // gl_FragColor = vec4(mix(colourColour, colourMask, 0.5), 1.0);\r\n}\r\n";
      },
      function (t, e) {
          t.exports =
              "precision highp float;\r\n\r\nuniform mat4 uMVP;\r\n\r\nattribute vec3 aPosition;\r\nattribute vec2 aTexcoord;\r\n\r\nvarying vec3 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\nvoid main() {\r\n\r\n  gl_Position = uMVP * vec4(aPosition.xyz, 1.0);\r\n\r\n  vPosition = aPosition;\r\n  vTexcoord = aTexcoord;\r\n}\r\n";
      },
      function (t, e) {
          t.exports =
              "precision lowp float;\r\n\r\nvarying vec3 vPosition;\r\nvarying vec2 vTexcoord;\r\n\r\nuniform sampler2D uSampler;\r\n\r\nvoid main(){\r\n\r\n  // Flip Y\r\n  vec2 texcoord = vec2(vTexcoord.x, 1.0 - vTexcoord.y);\r\n\r\n  // Sample\r\n  vec4 colour = texture2D(uSampler, texcoord);\r\n\r\n\t// Out\r\n\tgl_FragColor = vec4(colour.xyz, 1.0);\r\n}";
      },
      ,
      ,
      ,
      ,
      ,
      ,
      function (t, e, i) {
          "use strict";
          var n = Array.prototype.slice,
              r = i(57),
              s = Object.keys,
              o = s
                  ? function (t) {
                        return s(t);
                    }
                  : i(122),
              a = Object.keys;
          (o.shim = function () {
              Object.keys
                  ? (function () {
                        var t = Object.keys(arguments);
                        return t && t.length === arguments.length;
                    })(1, 2) ||
                    (Object.keys = function (t) {
                        return r(t) ? a(n.call(t)) : a(t);
                    })
                  : (Object.keys = o);
              return Object.keys || o;
          }),
              (t.exports = o);
      },
      function (t, e, i) {
          "use strict";
          var n;
          if (!Object.keys) {
              var r = Object.prototype.hasOwnProperty,
                  s = Object.prototype.toString,
                  o = i(57),
                  a = Object.prototype.propertyIsEnumerable,
                  c = !a.call({ toString: null }, "toString"),
                  l = a.call(function () {}, "prototype"),
                  h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                  u = function (t) {
                      var e = t.constructor;
                      return e && e.prototype === t;
                  },
                  d = {
                      $applicationCache: !0,
                      $console: !0,
                      $external: !0,
                      $frame: !0,
                      $frameElement: !0,
                      $frames: !0,
                      $innerHeight: !0,
                      $innerWidth: !0,
                      $onmozfullscreenchange: !0,
                      $onmozfullscreenerror: !0,
                      $outerHeight: !0,
                      $outerWidth: !0,
                      $pageXOffset: !0,
                      $pageYOffset: !0,
                      $parent: !0,
                      $scrollLeft: !0,
                      $scrollTop: !0,
                      $scrollX: !0,
                      $scrollY: !0,
                      $self: !0,
                      $webkitIndexedDB: !0,
                      $webkitStorageInfo: !0,
                      $window: !0,
                  },
                  m = (function () {
                      if ("undefined" == typeof window) return !1;
                      for (var t in window)
                          try {
                              if (!d["$" + t] && r.call(window, t) && null !== window[t] && "object" == typeof window[t])
                                  try {
                                      u(window[t]);
                                  } catch (t) {
                                      return !0;
                                  }
                          } catch (t) {
                              return !0;
                          }
                      return !1;
                  })();
              n = function (t) {
                  var e = null !== t && "object" == typeof t,
                      i = "[object Function]" === s.call(t),
                      n = o(t),
                      a = e && "[object String]" === s.call(t),
                      d = [];
                  if (!e && !i && !n) throw new TypeError("Object.keys called on a non-object");
                  var E = l && i;
                  if (a && t.length > 0 && !r.call(t, 0)) for (var f = 0; f < t.length; ++f) d.push(String(f));
                  if (n && t.length > 0) for (var p = 0; p < t.length; ++p) d.push(String(p));
                  else for (var g in t) (E && "prototype" === g) || !r.call(t, g) || d.push(String(g));
                  if (c)
                      for (
                          var T = (function (t) {
                                  if ("undefined" == typeof window || !m) return u(t);
                                  try {
                                      return u(t);
                                  } catch (t) {
                                      return !1;
                                  }
                              })(t),
                              R = 0;
                          R < h.length;
                          ++R
                      )
                          (T && "constructor" === h[R]) || !r.call(t, h[R]) || d.push(h[R]);
                  return d;
              };
          }
          t.exports = n;
      },
      function (t, e, i) {
          "use strict";
          var n = i(56),
              r = i(59);
          t.exports = function () {
              var t = r();
              return (
                  "undefined" != typeof document &&
                      (n(
                          document,
                          { contains: t },
                          {
                              contains: function () {
                                  return document.contains !== t;
                              },
                          }
                      ),
                      "undefined" != typeof Element &&
                          n(
                              Element.prototype,
                              { contains: t },
                              {
                                  contains: function () {
                                      return Element.prototype.contains !== t;
                                  },
                              }
                          )),
                  t
              );
          };
      },
      function (t, e, i) {},
      function (t, e) {
          var i;
          i = (function () {
              return this;
          })();
          try {
              i = i || new Function("return this")();
          } catch (t) {
              "object" == typeof window && (i = window);
          }
          t.exports = i;
      },
      function (t, e, i) {
          var n = i(3),
              r = i(64),
              s = n.WeakMap;
          t.exports = "function" == typeof s && /native code/.test(r(s));
      },
      function (t, e, i) {
          var n = i(33),
              r = Math.max,
              s = Math.min;
          t.exports = function (t, e) {
              var i = n(t);
              return i < 0 ? r(i + e, 0) : s(i, e);
          };
      },
      function (t, e, i) {
          var n = i(6),
              r = i(8),
              s = i(11),
              o = i(49);
          t.exports = n
              ? Object.defineProperties
              : function (t, e) {
                    s(t);
                    for (var i, n = o(e), a = n.length, c = 0; a > c; ) r.f(t, (i = n[c++]), e[i]);
                    return t;
                };
      },
      function (t, e, i) {
          var n = i(26);
          t.exports = n("document", "documentElement");
      },
      function (t, e) {
          Math.easeInOutQuad = function (t, e, i, n) {
              return (t /= n / 2) < 1 ? (i / 2) * t * t + e : (-i / 2) * ((t -= 1) * (t - 2) - 1) + e;
          };
      },
      function (t, e, i) {
          var n = i(14),
              r = i(45).f,
              s = {}.toString,
              o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          t.exports.f = function (t) {
              return o && "[object Window]" == s.call(t)
                  ? (function (t) {
                        try {
                            return r(t);
                        } catch (t) {
                            return o.slice();
                        }
                    })(t)
                  : r(n(t));
          };
      },
      function (t, e, i) {
          var n = i(83);
          t.exports = function (t) {
              if (n(t)) throw TypeError("The method doesn't accept regular expressions");
              return t;
          };
      },
      function (t, e, i) {
          var n = i(1)("match");
          t.exports = function (t) {
              var e = /./;
              try {
                  "/./"[t](e);
              } catch (i) {
                  try {
                      return (e[n] = !1), "/./"[t](e);
                  } catch (t) {}
              }
              return !1;
          };
      },
      function (t, e, i) {
          i(80)("iterator");
      },
      function (t, e, i) {
          var n = i(26);
          t.exports = n("navigator", "userAgent") || "";
      },
      function (t, e, i) {
          var n = i(2),
              r = i(137);
          n(
              {
                  target: "Array",
                  stat: !0,
                  forced: !i(90)(function (t) {
                      Array.from(t);
                  }),
              },
              { from: r }
          );
      },
      function (t, e, i) {
          "use strict";
          var n = i(34),
              r = i(20),
              s = i(86),
              o = i(87),
              a = i(16),
              c = i(52),
              l = i(88);
          t.exports = function (t) {
              var e,
                  i,
                  h,
                  u,
                  d,
                  m,
                  E = r(t),
                  f = "function" == typeof this ? this : Array,
                  p = arguments.length,
                  g = p > 1 ? arguments[1] : void 0,
                  T = void 0 !== g,
                  R = l(E),
                  v = 0;
              if ((T && (g = n(g, p > 2 ? arguments[2] : void 0, 2)), null == R || (f == Array && o(R)))) for (i = new f((e = a(E.length))); e > v; v++) (m = T ? g(E[v], v) : E[v]), c(i, v, m);
              else for (d = (u = R.call(E)).next, i = new f(); !(h = d.call(u)).done; v++) (m = T ? s(u, g, [h.value, v], !0) : h.value), c(i, v, m);
              return (i.length = v), i;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(92).IteratorPrototype,
              r = i(36),
              s = i(22),
              o = i(38),
              a = i(27),
              c = function () {
                  return this;
              };
          t.exports = function (t, e, i) {
              var l = e + " Iterator";
              return (t.prototype = r(n, { next: s(1, i) })), o(t, l, !1, !0), (a[l] = c), t;
          };
      },
      function (t, e, i) {
          var n = i(0);
          t.exports = !n(function () {
              function t() {}
              return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
          });
      },
      function (t, e, i) {
          var n = i(7);
          t.exports = function (t) {
              if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
              return t;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(96),
              r = i(100);
          t.exports = n(
              "Map",
              function (t) {
                  return function () {
                      return t(this, arguments.length ? arguments[0] : void 0);
                  };
              },
              r
          );
      },
      function (t, e, i) {
          var n = i(0);
          t.exports = !n(function () {
              return Object.isExtensible(Object.preventExtensions({}));
          });
      },
      function (t, e, i) {
          var n = i(7),
              r = i(94);
          t.exports = function (t, e, i) {
              var s, o;
              return r && "function" == typeof (s = e.constructor) && s !== i && n((o = s.prototype)) && o !== i.prototype && r(t, o), t;
          };
      },
      function (t, e, i) {
          var n = i(15);
          t.exports = function (t, e, i) {
              for (var r in e) n(t, r, e[r], i);
              return t;
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(26),
              r = i(8),
              s = i(1),
              o = i(6),
              a = s("species");
          t.exports = function (t) {
              var e = n(t),
                  i = r.f;
              o &&
                  e &&
                  !e[a] &&
                  i(e, a, {
                      configurable: !0,
                      get: function () {
                          return this;
                      },
                  });
          };
      },
      function (t, e, i) {
          var n = i(2),
              r = i(0),
              s = i(14),
              o = i(21).f,
              a = i(6),
              c = r(function () {
                  o(1);
              });
          n(
              { target: "Object", stat: !0, forced: !a || c, sham: !a },
              {
                  getOwnPropertyDescriptor: function (t, e) {
                      return o(s(t), e);
                  },
              }
          );
      },
      function (t, e, i) {
          var n = i(2),
              r = i(6),
              s = i(67),
              o = i(14),
              a = i(21),
              c = i(52);
          n(
              { target: "Object", stat: !0, sham: !r },
              {
                  getOwnPropertyDescriptors: function (t) {
                      for (var e, i, n = o(t), r = a.f, l = s(n), h = {}, u = 0; l.length > u; ) void 0 !== (i = r(n, (e = l[u++]))) && c(h, e, i);
                      return h;
                  },
              }
          );
      },
      function (t, e, i) {
          var n = i(53),
              r = i(15),
              s = i(149);
          n || r(Object.prototype, "toString", s, { unsafe: !0 });
      },
      function (t, e, i) {
          "use strict";
          var n = i(53),
              r = i(89);
          t.exports = n
              ? {}.toString
              : function () {
                    return "[object " + r(this) + "]";
                };
      },
      function (t, e, i) {
          "use strict";
          var n = i(15),
              r = i(11),
              s = i(0),
              o = i(102),
              a = RegExp.prototype,
              c = a.toString,
              l = s(function () {
                  return "/a/b" != c.call({ source: "a", flags: "b" });
              }),
              h = "toString" != c.name;
          (l || h) &&
              n(
                  RegExp.prototype,
                  "toString",
                  function () {
                      var t = r(this),
                          e = String(t.source),
                          i = t.flags;
                      return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in a) ? o.call(t) : i);
                  },
                  { unsafe: !0 }
              );
      },
      function (t, e, i) {
          "use strict";
          var n = i(96),
              r = i(100);
          t.exports = n(
              "Set",
              function (t) {
                  return function () {
                      return t(this, arguments.length ? arguments[0] : void 0);
                  };
              },
              r
          );
      },
      function (t, e, i) {
          "use strict";
          var n = i(103).charAt,
              r = i(24),
              s = i(54),
              o = r.set,
              a = r.getterFor("String Iterator");
          s(
              String,
              "String",
              function (t) {
                  o(this, { type: "String Iterator", string: String(t), index: 0 });
              },
              function () {
                  var t,
                      e = a(this),
                      i = e.string,
                      r = e.index;
                  return r >= i.length ? { value: void 0, done: !0 } : ((t = n(i, r)), (e.index += t.length), { value: t, done: !1 });
              }
          );
      },
      function (t, e, i) {
          var n = i(3),
              r = i(78),
              s = i(91),
              o = i(12),
              a = i(1),
              c = a("iterator"),
              l = a("toStringTag"),
              h = s.values;
          for (var u in r) {
              var d = n[u],
                  m = d && d.prototype;
              if (m) {
                  if (m[c] !== h)
                      try {
                          o(m, c, h);
                      } catch (t) {
                          m[c] = h;
                      }
                  if ((m[l] || o(m, l, u), r[u]))
                      for (var E in s)
                          if (m[E] !== s[E])
                              try {
                                  o(m, E, s[E]);
                              } catch (t) {
                                  m[E] = s[E];
                              }
              }
          }
      },
      function (t, e, i) {
          var n = i(2),
              r = i(155);
          n({ target: "Array", proto: !0, forced: r !== [].lastIndexOf }, { lastIndexOf: r });
      },
      function (t, e, i) {
          "use strict";
          var n = i(14),
              r = i(33),
              s = i(16),
              o = i(77),
              a = i(17),
              c = Math.min,
              l = [].lastIndexOf,
              h = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
              u = o("lastIndexOf"),
              d = a("indexOf", { ACCESSORS: !0, 1: 0 }),
              m = h || !u || !d;
          t.exports = m
              ? function (t) {
                    if (h) return l.apply(this, arguments) || 0;
                    var e = n(this),
                        i = s(e.length),
                        o = i - 1;
                    for (arguments.length > 1 && (o = c(o, r(arguments[1]))), o < 0 && (o = i + o); o >= 0; o--) if (o in e && e[o] === t) return o || 0;
                    return -1;
                }
              : l;
      },
      function (t, e, i) {
          "use strict";
          var n = i(0);
          function r(t, e) {
              return RegExp(t, e);
          }
          (e.UNSUPPORTED_Y = n(function () {
              var t = r("a", "y");
              return (t.lastIndex = 2), null != t.exec("abcd");
          })),
              (e.BROKEN_CARET = n(function () {
                  var t = r("^r", "gy");
                  return (t.lastIndex = 2), null != t.exec("str");
              }));
      },
      function (t, e, i) {
          "use strict";
          var n = i(158),
              r = i(83),
              s = i(11),
              o = i(18),
              a = i(159),
              c = i(160),
              l = i(16),
              h = i(161),
              u = i(41),
              d = i(0),
              m = [].push,
              E = Math.min,
              f = !d(function () {
                  return !RegExp(4294967295, "y");
              });
          n(
              "split",
              2,
              function (t, e, i) {
                  var n;
                  return (
                      (n =
                          "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
                              ? function (t, i) {
                                    var n = String(o(this)),
                                        s = void 0 === i ? 4294967295 : i >>> 0;
                                    if (0 === s) return [];
                                    if (void 0 === t) return [n];
                                    if (!r(t)) return e.call(n, t, s);
                                    for (
                                        var a, c, l, h = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), E = 0, f = new RegExp(t.source, d + "g");
                                        (a = u.call(f, n)) && !((c = f.lastIndex) > E && (h.push(n.slice(E, a.index)), a.length > 1 && a.index < n.length && m.apply(h, a.slice(1)), (l = a[0].length), (E = c), h.length >= s));

                                    )
                                        f.lastIndex === a.index && f.lastIndex++;
                                    return E === n.length ? (!l && f.test("")) || h.push("") : h.push(n.slice(E)), h.length > s ? h.slice(0, s) : h;
                                }
                              : "0".split(void 0, 0).length
                              ? function (t, i) {
                                    return void 0 === t && 0 === i ? [] : e.call(this, t, i);
                                }
                              : e),
                      [
                          function (e, i) {
                              var r = o(this),
                                  s = null == e ? void 0 : e[t];
                              return void 0 !== s ? s.call(e, r, i) : n.call(String(r), e, i);
                          },
                          function (t, r) {
                              var o = i(n, t, this, r, n !== e);
                              if (o.done) return o.value;
                              var u = s(t),
                                  d = String(this),
                                  m = a(u, RegExp),
                                  p = u.unicode,
                                  g = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (f ? "y" : "g"),
                                  T = new m(f ? u : "^(?:" + u.source + ")", g),
                                  R = void 0 === r ? 4294967295 : r >>> 0;
                              if (0 === R) return [];
                              if (0 === d.length) return null === h(T, d) ? [d] : [];
                              for (var v = 0, A = 0, _ = []; A < d.length; ) {
                                  T.lastIndex = f ? A : 0;
                                  var I,
                                      O = h(T, f ? d : d.slice(A));
                                  if (null === O || (I = E(l(T.lastIndex + (f ? 0 : A)), d.length)) === v) A = c(d, A, p);
                                  else {
                                      if ((_.push(d.slice(v, A)), _.length === R)) return _;
                                      for (var C = 1; C <= O.length - 1; C++) if ((_.push(O[C]), _.length === R)) return _;
                                      A = v = I;
                                  }
                              }
                              return _.push(d.slice(v)), _;
                          },
                      ]
                  );
              },
              !f
          );
      },
      function (t, e, i) {
          "use strict";
          i(104);
          var n = i(15),
              r = i(0),
              s = i(1),
              o = i(41),
              a = i(12),
              c = s("species"),
              l = !r(function () {
                  var t = /./;
                  return (
                      (t.exec = function () {
                          var t = [];
                          return (t.groups = { a: "7" }), t;
                      }),
                      "7" !== "".replace(t, "$<a>")
                  );
              }),
              h = "$0" === "a".replace(/./, "$0"),
              u = s("replace"),
              d = !!/./[u] && "" === /./[u]("a", "$0"),
              m = !r(function () {
                  var t = /(?:)/,
                      e = t.exec;
                  t.exec = function () {
                      return e.apply(this, arguments);
                  };
                  var i = "ab".split(t);
                  return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
              });
          t.exports = function (t, e, i, u) {
              var E = s(t),
                  f = !r(function () {
                      var e = {};
                      return (
                          (e[E] = function () {
                              return 7;
                          }),
                          7 != ""[t](e)
                      );
                  }),
                  p =
                      f &&
                      !r(function () {
                          var e = !1,
                              i = /a/;
                          return (
                              "split" === t &&
                                  (((i = {}).constructor = {}),
                                  (i.constructor[c] = function () {
                                      return i;
                                  }),
                                  (i.flags = ""),
                                  (i[E] = /./[E])),
                              (i.exec = function () {
                                  return (e = !0), null;
                              }),
                              i[E](""),
                              !e
                          );
                      });
              if (!f || !p || ("replace" === t && (!l || !h || d)) || ("split" === t && !m)) {
                  var g = /./[E],
                      T = i(
                          E,
                          ""[t],
                          function (t, e, i, n, r) {
                              return e.exec === o ? (f && !r ? { done: !0, value: g.call(e, i, n) } : { done: !0, value: t.call(i, e, n) }) : { done: !1 };
                          },
                          { REPLACE_KEEPS_$0: h, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d }
                      ),
                      R = T[0],
                      v = T[1];
                  n(String.prototype, t, R),
                      n(
                          RegExp.prototype,
                          E,
                          2 == e
                              ? function (t, e) {
                                    return v.call(t, this, e);
                                }
                              : function (t) {
                                    return v.call(t, this);
                                }
                      );
              }
              u && a(RegExp.prototype[E], "sham", !0);
          };
      },
      function (t, e, i) {
          var n = i(11),
              r = i(73),
              s = i(1)("species");
          t.exports = function (t, e) {
              var i,
                  o = n(t).constructor;
              return void 0 === o || null == (i = n(o)[s]) ? e : r(i);
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(103).charAt;
          t.exports = function (t, e, i) {
              return e + (i ? n(t, e).length : 1);
          };
      },
      function (t, e, i) {
          var n = i(23),
              r = i(41);
          t.exports = function (t, e) {
              var i = t.exec;
              if ("function" == typeof i) {
                  var s = i.call(t, e);
                  if ("object" != typeof s) throw TypeError("RegExp exec method returned something other than an Object or null");
                  return s;
              }
              if ("RegExp" !== n(t)) throw TypeError("RegExp#exec called on incompatible receiver");
              return r.call(t, e);
          };
      },
      function (t, e, i) {
          "use strict";
          var n = i(2),
              r = i(163).trim;
          n(
              { target: "String", proto: !0, forced: i(164)("trim") },
              {
                  trim: function () {
                      return r(this);
                  },
              }
          );
      },
      function (t, e, i) {
          var n = i(18),
              r = "[" + i(105) + "]",
              s = RegExp("^" + r + r + "*"),
              o = RegExp(r + r + "*$"),
              a = function (t) {
                  return function (e) {
                      var i = String(n(e));
                      return 1 & t && (i = i.replace(s, "")), 2 & t && (i = i.replace(o, "")), i;
                  };
              };
          t.exports = { start: a(1), end: a(2), trim: a(3) };
      },
      function (t, e, i) {
          var n = i(0),
              r = i(105);
          t.exports = function (t) {
              return n(function () {
                  return !!r[t]() || "â€‹Â…á Ž" != "â€‹Â…á Ž"[t]() || r[t].name !== t;
              });
          };
      },
      function (t, e, i) {
          "use strict";
          i.r(e),
              i.d(e, "create", function () {
                  return Yn;
              });
          var n = {};
          i.r(n),
              i.d(n, "create", function () {
                  return T;
              }),
              i.d(n, "clone", function () {
                  return R;
              }),
              i.d(n, "copy", function () {
                  return v;
              }),
              i.d(n, "fromValues", function () {
                  return A;
              }),
              i.d(n, "set", function () {
                  return _;
              }),
              i.d(n, "identity", function () {
                  return I;
              }),
              i.d(n, "transpose", function () {
                  return O;
              }),
              i.d(n, "invert", function () {
                  return C;
              }),
              i.d(n, "adjoint", function () {
                  return N;
              }),
              i.d(n, "determinant", function () {
                  return L;
              }),
              i.d(n, "multiply", function () {
                  return y;
              }),
              i.d(n, "translate", function () {
                  return S;
              }),
              i.d(n, "scale", function () {
                  return b;
              }),
              i.d(n, "rotate", function () {
                  return M;
              }),
              i.d(n, "rotateX", function () {
                  return x;
              }),
              i.d(n, "rotateY", function () {
                  return D;
              }),
              i.d(n, "rotateZ", function () {
                  return P;
              }),
              i.d(n, "fromTranslation", function () {
                  return U;
              }),
              i.d(n, "fromScaling", function () {
                  return w;
              }),
              i.d(n, "fromRotation", function () {
                  return F;
              }),
              i.d(n, "fromXRotation", function () {
                  return B;
              }),
              i.d(n, "fromYRotation", function () {
                  return H;
              }),
              i.d(n, "fromZRotation", function () {
                  return G;
              }),
              i.d(n, "fromRotationTranslation", function () {
                  return k;
              }),
              i.d(n, "fromQuat2", function () {
                  return Y;
              }),
              i.d(n, "getTranslation", function () {
                  return X;
              }),
              i.d(n, "getScaling", function () {
                  return V;
              }),
              i.d(n, "getRotation", function () {
                  return j;
              }),
              i.d(n, "fromRotationTranslationScale", function () {
                  return $;
              }),
              i.d(n, "fromRotationTranslationScaleOrigin", function () {
                  return z;
              }),
              i.d(n, "fromQuat", function () {
                  return W;
              }),
              i.d(n, "frustum", function () {
                  return Z;
              }),
              i.d(n, "perspectiveNO", function () {
                  return q;
              }),
              i.d(n, "perspective", function () {
                  return Q;
              }),
              i.d(n, "perspectiveZO", function () {
                  return K;
              }),
              i.d(n, "perspectiveFromFieldOfView", function () {
                  return J;
              }),
              i.d(n, "orthoNO", function () {
                  return tt;
              }),
              i.d(n, "ortho", function () {
                  return et;
              }),
              i.d(n, "orthoZO", function () {
                  return it;
              }),
              i.d(n, "lookAt", function () {
                  return nt;
              }),
              i.d(n, "targetTo", function () {
                  return rt;
              }),
              i.d(n, "str", function () {
                  return st;
              }),
              i.d(n, "frob", function () {
                  return ot;
              }),
              i.d(n, "add", function () {
                  return at;
              }),
              i.d(n, "subtract", function () {
                  return ct;
              }),
              i.d(n, "multiplyScalar", function () {
                  return lt;
              }),
              i.d(n, "multiplyScalarAndAdd", function () {
                  return ht;
              }),
              i.d(n, "exactEquals", function () {
                  return ut;
              }),
              i.d(n, "equals", function () {
                  return dt;
              }),
              i.d(n, "mul", function () {
                  return mt;
              }),
              i.d(n, "sub", function () {
                  return Et;
              });
          var r = {};
          i.r(r),
              i.d(r, "create", function () {
                  return ft;
              }),
              i.d(r, "clone", function () {
                  return pt;
              }),
              i.d(r, "length", function () {
                  return gt;
              }),
              i.d(r, "fromValues", function () {
                  return Tt;
              }),
              i.d(r, "copy", function () {
                  return Rt;
              }),
              i.d(r, "set", function () {
                  return vt;
              }),
              i.d(r, "add", function () {
                  return At;
              }),
              i.d(r, "subtract", function () {
                  return _t;
              }),
              i.d(r, "multiply", function () {
                  return It;
              }),
              i.d(r, "divide", function () {
                  return Ot;
              }),
              i.d(r, "ceil", function () {
                  return Ct;
              }),
              i.d(r, "floor", function () {
                  return Nt;
              }),
              i.d(r, "min", function () {
                  return Lt;
              }),
              i.d(r, "max", function () {
                  return yt;
              }),
              i.d(r, "round", function () {
                  return St;
              }),
              i.d(r, "scale", function () {
                  return bt;
              }),
              i.d(r, "scaleAndAdd", function () {
                  return Mt;
              }),
              i.d(r, "distance", function () {
                  return xt;
              }),
              i.d(r, "squaredDistance", function () {
                  return Dt;
              }),
              i.d(r, "squaredLength", function () {
                  return Pt;
              }),
              i.d(r, "negate", function () {
                  return Ut;
              }),
              i.d(r, "inverse", function () {
                  return wt;
              }),
              i.d(r, "normalize", function () {
                  return Ft;
              }),
              i.d(r, "dot", function () {
                  return Bt;
              }),
              i.d(r, "cross", function () {
                  return Ht;
              }),
              i.d(r, "lerp", function () {
                  return Gt;
              }),
              i.d(r, "hermite", function () {
                  return kt;
              }),
              i.d(r, "bezier", function () {
                  return Yt;
              }),
              i.d(r, "random", function () {
                  return Xt;
              }),
              i.d(r, "transformMat4", function () {
                  return Vt;
              }),
              i.d(r, "transformMat3", function () {
                  return jt;
              }),
              i.d(r, "transformQuat", function () {
                  return $t;
              }),
              i.d(r, "rotateX", function () {
                  return zt;
              }),
              i.d(r, "rotateY", function () {
                  return Wt;
              }),
              i.d(r, "rotateZ", function () {
                  return Zt;
              }),
              i.d(r, "angle", function () {
                  return qt;
              }),
              i.d(r, "zero", function () {
                  return Qt;
              }),
              i.d(r, "str", function () {
                  return Kt;
              }),
              i.d(r, "exactEquals", function () {
                  return Jt;
              }),
              i.d(r, "equals", function () {
                  return te;
              }),
              i.d(r, "sub", function () {
                  return ie;
              }),
              i.d(r, "mul", function () {
                  return ne;
              }),
              i.d(r, "div", function () {
                  return re;
              }),
              i.d(r, "dist", function () {
                  return se;
              }),
              i.d(r, "sqrDist", function () {
                  return oe;
              }),
              i.d(r, "len", function () {
                  return ae;
              }),
              i.d(r, "sqrLen", function () {
                  return ce;
              }),
              i.d(r, "forEach", function () {
                  return le;
              });
          var s = {};
          i.r(s),
              i.d(s, "create", function () {
                  return he;
              }),
              i.d(s, "clone", function () {
                  return ue;
              }),
              i.d(s, "fromValues", function () {
                  return de;
              }),
              i.d(s, "copy", function () {
                  return me;
              }),
              i.d(s, "set", function () {
                  return Ee;
              }),
              i.d(s, "add", function () {
                  return fe;
              }),
              i.d(s, "subtract", function () {
                  return pe;
              }),
              i.d(s, "multiply", function () {
                  return ge;
              }),
              i.d(s, "divide", function () {
                  return Te;
              }),
              i.d(s, "ceil", function () {
                  return Re;
              }),
              i.d(s, "floor", function () {
                  return ve;
              }),
              i.d(s, "min", function () {
                  return Ae;
              }),
              i.d(s, "max", function () {
                  return _e;
              }),
              i.d(s, "round", function () {
                  return Ie;
              }),
              i.d(s, "scale", function () {
                  return Oe;
              }),
              i.d(s, "scaleAndAdd", function () {
                  return Ce;
              }),
              i.d(s, "distance", function () {
                  return Ne;
              }),
              i.d(s, "squaredDistance", function () {
                  return Le;
              }),
              i.d(s, "length", function () {
                  return ye;
              }),
              i.d(s, "squaredLength", function () {
                  return Se;
              }),
              i.d(s, "negate", function () {
                  return be;
              }),
              i.d(s, "inverse", function () {
                  return Me;
              }),
              i.d(s, "normalize", function () {
                  return xe;
              }),
              i.d(s, "dot", function () {
                  return De;
              }),
              i.d(s, "cross", function () {
                  return Pe;
              }),
              i.d(s, "lerp", function () {
                  return Ue;
              }),
              i.d(s, "random", function () {
                  return we;
              }),
              i.d(s, "transformMat4", function () {
                  return Fe;
              }),
              i.d(s, "transformQuat", function () {
                  return Be;
              }),
              i.d(s, "zero", function () {
                  return He;
              }),
              i.d(s, "str", function () {
                  return Ge;
              }),
              i.d(s, "exactEquals", function () {
                  return ke;
              }),
              i.d(s, "equals", function () {
                  return Ye;
              }),
              i.d(s, "sub", function () {
                  return Xe;
              }),
              i.d(s, "mul", function () {
                  return Ve;
              }),
              i.d(s, "div", function () {
                  return je;
              }),
              i.d(s, "dist", function () {
                  return $e;
              }),
              i.d(s, "sqrDist", function () {
                  return ze;
              }),
              i.d(s, "len", function () {
                  return We;
              }),
              i.d(s, "sqrLen", function () {
                  return Ze;
              }),
              i.d(s, "forEach", function () {
                  return qe;
              });
          window.Element.prototype, window.Document.prototype, window.DocumentFragment.prototype;
          var o = window.Element.prototype,
              a = function () {
                  o.closest ||
                      (o.closest = function (t) {
                          for (var e = this; e && 1 === e.nodeType; ) {
                              if (e.matches(t)) return e;
                              e = e.parentNode;
                          }
                          return null;
                      });
              },
              c = (window.Element.prototype, window.Element.prototype, window.Element.prototype),
              l = window.Document.prototype,
              h = window.DocumentFragment.prototype,
              u = function () {
                  (c.prepend && l.prepend && h.prepend) ||
                      (c.prepend = l.prepend = h.prepend = function () {
                          var t = window.Array.prototype.slice.call(arguments),
                              e = window.document.createDocumentFragment();
                          t.forEach(function (t) {
                              var i = t instanceof window.Node;
                              e.appendChild(i ? t : document.createTextNode(window.String(t)));
                          }),
                              this.insertBefore(e, this.firstChild);
                      });
              };
          window.NodeList.prototype,
              window.HTMLCollection.prototype,
              window.CharacterData.prototype,
              window.DocumentType.prototype,
              window.Element.prototype,
              window.Element.prototype,
              window.DocumentType.prototype,
              window.CharacterData.prototype,
              window.NodeList.prototype;
          const d = a,
              m = u;
          var E = i(106),
              f = (i.p, i(124), i(28), i(9), i(13), i(10), 1e-6),
              p = "undefined" != typeof Float32Array ? Float32Array : Array,
              g = Math.random;
          Math.PI;
          function T() {
              var t = new p(16);
              return (
                  p != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0)),
                  (t[0] = 1),
                  (t[5] = 1),
                  (t[10] = 1),
                  (t[15] = 1),
                  t
              );
          }
          function R(t) {
              var e = new p(16);
              return (
                  (e[0] = t[0]),
                  (e[1] = t[1]),
                  (e[2] = t[2]),
                  (e[3] = t[3]),
                  (e[4] = t[4]),
                  (e[5] = t[5]),
                  (e[6] = t[6]),
                  (e[7] = t[7]),
                  (e[8] = t[8]),
                  (e[9] = t[9]),
                  (e[10] = t[10]),
                  (e[11] = t[11]),
                  (e[12] = t[12]),
                  (e[13] = t[13]),
                  (e[14] = t[14]),
                  (e[15] = t[15]),
                  e
              );
          }
          function v(t, e) {
              return (
                  (t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = e[2]),
                  (t[3] = e[3]),
                  (t[4] = e[4]),
                  (t[5] = e[5]),
                  (t[6] = e[6]),
                  (t[7] = e[7]),
                  (t[8] = e[8]),
                  (t[9] = e[9]),
                  (t[10] = e[10]),
                  (t[11] = e[11]),
                  (t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15]),
                  t
              );
          }
          function A(t, e, i, n, r, s, o, a, c, l, h, u, d, m, E, f) {
              var g = new p(16);
              return (g[0] = t), (g[1] = e), (g[2] = i), (g[3] = n), (g[4] = r), (g[5] = s), (g[6] = o), (g[7] = a), (g[8] = c), (g[9] = l), (g[10] = h), (g[11] = u), (g[12] = d), (g[13] = m), (g[14] = E), (g[15] = f), g;
          }
          function _(t, e, i, n, r, s, o, a, c, l, h, u, d, m, E, f, p) {
              return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), (t[4] = s), (t[5] = o), (t[6] = a), (t[7] = c), (t[8] = l), (t[9] = h), (t[10] = u), (t[11] = d), (t[12] = m), (t[13] = E), (t[14] = f), (t[15] = p), t;
          }
          function I(t) {
              return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
          }
          function O(t, e) {
              if (t === e) {
                  var i = e[1],
                      n = e[2],
                      r = e[3],
                      s = e[6],
                      o = e[7],
                      a = e[11];
                  (t[1] = e[4]), (t[2] = e[8]), (t[3] = e[12]), (t[4] = i), (t[6] = e[9]), (t[7] = e[13]), (t[8] = n), (t[9] = s), (t[11] = e[14]), (t[12] = r), (t[13] = o), (t[14] = a);
              } else
                  (t[0] = e[0]),
                      (t[1] = e[4]),
                      (t[2] = e[8]),
                      (t[3] = e[12]),
                      (t[4] = e[1]),
                      (t[5] = e[5]),
                      (t[6] = e[9]),
                      (t[7] = e[13]),
                      (t[8] = e[2]),
                      (t[9] = e[6]),
                      (t[10] = e[10]),
                      (t[11] = e[14]),
                      (t[12] = e[3]),
                      (t[13] = e[7]),
                      (t[14] = e[11]),
                      (t[15] = e[15]);
              return t;
          }
          function C(t, e) {
              var i = e[0],
                  n = e[1],
                  r = e[2],
                  s = e[3],
                  o = e[4],
                  a = e[5],
                  c = e[6],
                  l = e[7],
                  h = e[8],
                  u = e[9],
                  d = e[10],
                  m = e[11],
                  E = e[12],
                  f = e[13],
                  p = e[14],
                  g = e[15],
                  T = i * a - n * o,
                  R = i * c - r * o,
                  v = i * l - s * o,
                  A = n * c - r * a,
                  _ = n * l - s * a,
                  I = r * l - s * c,
                  O = h * f - u * E,
                  C = h * p - d * E,
                  N = h * g - m * E,
                  L = u * p - d * f,
                  y = u * g - m * f,
                  S = d * g - m * p,
                  b = T * S - R * y + v * L + A * N - _ * C + I * O;
              return b
                  ? ((b = 1 / b),
                    (t[0] = (a * S - c * y + l * L) * b),
                    (t[1] = (r * y - n * S - s * L) * b),
                    (t[2] = (f * I - p * _ + g * A) * b),
                    (t[3] = (d * _ - u * I - m * A) * b),
                    (t[4] = (c * N - o * S - l * C) * b),
                    (t[5] = (i * S - r * N + s * C) * b),
                    (t[6] = (p * v - E * I - g * R) * b),
                    (t[7] = (h * I - d * v + m * R) * b),
                    (t[8] = (o * y - a * N + l * O) * b),
                    (t[9] = (n * N - i * y - s * O) * b),
                    (t[10] = (E * _ - f * v + g * T) * b),
                    (t[11] = (u * v - h * _ - m * T) * b),
                    (t[12] = (a * C - o * L - c * O) * b),
                    (t[13] = (i * L - n * C + r * O) * b),
                    (t[14] = (f * R - E * A - p * T) * b),
                    (t[15] = (h * A - u * R + d * T) * b),
                    t)
                  : null;
          }
          function N(t, e) {
              var i = e[0],
                  n = e[1],
                  r = e[2],
                  s = e[3],
                  o = e[4],
                  a = e[5],
                  c = e[6],
                  l = e[7],
                  h = e[8],
                  u = e[9],
                  d = e[10],
                  m = e[11],
                  E = e[12],
                  f = e[13],
                  p = e[14],
                  g = e[15];
              return (
                  (t[0] = a * (d * g - m * p) - u * (c * g - l * p) + f * (c * m - l * d)),
                  (t[1] = -(n * (d * g - m * p) - u * (r * g - s * p) + f * (r * m - s * d))),
                  (t[2] = n * (c * g - l * p) - a * (r * g - s * p) + f * (r * l - s * c)),
                  (t[3] = -(n * (c * m - l * d) - a * (r * m - s * d) + u * (r * l - s * c))),
                  (t[4] = -(o * (d * g - m * p) - h * (c * g - l * p) + E * (c * m - l * d))),
                  (t[5] = i * (d * g - m * p) - h * (r * g - s * p) + E * (r * m - s * d)),
                  (t[6] = -(i * (c * g - l * p) - o * (r * g - s * p) + E * (r * l - s * c))),
                  (t[7] = i * (c * m - l * d) - o * (r * m - s * d) + h * (r * l - s * c)),
                  (t[8] = o * (u * g - m * f) - h * (a * g - l * f) + E * (a * m - l * u)),
                  (t[9] = -(i * (u * g - m * f) - h * (n * g - s * f) + E * (n * m - s * u))),
                  (t[10] = i * (a * g - l * f) - o * (n * g - s * f) + E * (n * l - s * a)),
                  (t[11] = -(i * (a * m - l * u) - o * (n * m - s * u) + h * (n * l - s * a))),
                  (t[12] = -(o * (u * p - d * f) - h * (a * p - c * f) + E * (a * d - c * u))),
                  (t[13] = i * (u * p - d * f) - h * (n * p - r * f) + E * (n * d - r * u)),
                  (t[14] = -(i * (a * p - c * f) - o * (n * p - r * f) + E * (n * c - r * a))),
                  (t[15] = i * (a * d - c * u) - o * (n * d - r * u) + h * (n * c - r * a)),
                  t
              );
          }
          function L(t) {
              var e = t[0],
                  i = t[1],
                  n = t[2],
                  r = t[3],
                  s = t[4],
                  o = t[5],
                  a = t[6],
                  c = t[7],
                  l = t[8],
                  h = t[9],
                  u = t[10],
                  d = t[11],
                  m = t[12],
                  E = t[13],
                  f = t[14],
                  p = t[15];
              return (e * o - i * s) * (u * p - d * f) - (e * a - n * s) * (h * p - d * E) + (e * c - r * s) * (h * f - u * E) + (i * a - n * o) * (l * p - d * m) - (i * c - r * o) * (l * f - u * m) + (n * c - r * a) * (l * E - h * m);
          }
          function y(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2],
                  o = e[3],
                  a = e[4],
                  c = e[5],
                  l = e[6],
                  h = e[7],
                  u = e[8],
                  d = e[9],
                  m = e[10],
                  E = e[11],
                  f = e[12],
                  p = e[13],
                  g = e[14],
                  T = e[15],
                  R = i[0],
                  v = i[1],
                  A = i[2],
                  _ = i[3];
              return (
                  (t[0] = R * n + v * a + A * u + _ * f),
                  (t[1] = R * r + v * c + A * d + _ * p),
                  (t[2] = R * s + v * l + A * m + _ * g),
                  (t[3] = R * o + v * h + A * E + _ * T),
                  (R = i[4]),
                  (v = i[5]),
                  (A = i[6]),
                  (_ = i[7]),
                  (t[4] = R * n + v * a + A * u + _ * f),
                  (t[5] = R * r + v * c + A * d + _ * p),
                  (t[6] = R * s + v * l + A * m + _ * g),
                  (t[7] = R * o + v * h + A * E + _ * T),
                  (R = i[8]),
                  (v = i[9]),
                  (A = i[10]),
                  (_ = i[11]),
                  (t[8] = R * n + v * a + A * u + _ * f),
                  (t[9] = R * r + v * c + A * d + _ * p),
                  (t[10] = R * s + v * l + A * m + _ * g),
                  (t[11] = R * o + v * h + A * E + _ * T),
                  (R = i[12]),
                  (v = i[13]),
                  (A = i[14]),
                  (_ = i[15]),
                  (t[12] = R * n + v * a + A * u + _ * f),
                  (t[13] = R * r + v * c + A * d + _ * p),
                  (t[14] = R * s + v * l + A * m + _ * g),
                  (t[15] = R * o + v * h + A * E + _ * T),
                  t
              );
          }
          function S(t, e, i) {
              var n,
                  r,
                  s,
                  o,
                  a,
                  c,
                  l,
                  h,
                  u,
                  d,
                  m,
                  E,
                  f = i[0],
                  p = i[1],
                  g = i[2];
              return (
                  e === t
                      ? ((t[12] = e[0] * f + e[4] * p + e[8] * g + e[12]), (t[13] = e[1] * f + e[5] * p + e[9] * g + e[13]), (t[14] = e[2] * f + e[6] * p + e[10] * g + e[14]), (t[15] = e[3] * f + e[7] * p + e[11] * g + e[15]))
                      : ((n = e[0]),
                        (r = e[1]),
                        (s = e[2]),
                        (o = e[3]),
                        (a = e[4]),
                        (c = e[5]),
                        (l = e[6]),
                        (h = e[7]),
                        (u = e[8]),
                        (d = e[9]),
                        (m = e[10]),
                        (E = e[11]),
                        (t[0] = n),
                        (t[1] = r),
                        (t[2] = s),
                        (t[3] = o),
                        (t[4] = a),
                        (t[5] = c),
                        (t[6] = l),
                        (t[7] = h),
                        (t[8] = u),
                        (t[9] = d),
                        (t[10] = m),
                        (t[11] = E),
                        (t[12] = n * f + a * p + u * g + e[12]),
                        (t[13] = r * f + c * p + d * g + e[13]),
                        (t[14] = s * f + l * p + m * g + e[14]),
                        (t[15] = o * f + h * p + E * g + e[15])),
                  t
              );
          }
          function b(t, e, i) {
              var n = i[0],
                  r = i[1],
                  s = i[2];
              return (
                  (t[0] = e[0] * n),
                  (t[1] = e[1] * n),
                  (t[2] = e[2] * n),
                  (t[3] = e[3] * n),
                  (t[4] = e[4] * r),
                  (t[5] = e[5] * r),
                  (t[6] = e[6] * r),
                  (t[7] = e[7] * r),
                  (t[8] = e[8] * s),
                  (t[9] = e[9] * s),
                  (t[10] = e[10] * s),
                  (t[11] = e[11] * s),
                  (t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15]),
                  t
              );
          }
          function M(t, e, i, n) {
              var r,
                  s,
                  o,
                  a,
                  c,
                  l,
                  h,
                  u,
                  d,
                  m,
                  E,
                  p,
                  g,
                  T,
                  R,
                  v,
                  A,
                  _,
                  I,
                  O,
                  C,
                  N,
                  L,
                  y,
                  S = n[0],
                  b = n[1],
                  M = n[2],
                  x = Math.hypot(S, b, M);
              return x < f
                  ? null
                  : ((S *= x = 1 / x),
                    (b *= x),
                    (M *= x),
                    (r = Math.sin(i)),
                    (o = 1 - (s = Math.cos(i))),
                    (a = e[0]),
                    (c = e[1]),
                    (l = e[2]),
                    (h = e[3]),
                    (u = e[4]),
                    (d = e[5]),
                    (m = e[6]),
                    (E = e[7]),
                    (p = e[8]),
                    (g = e[9]),
                    (T = e[10]),
                    (R = e[11]),
                    (v = S * S * o + s),
                    (A = b * S * o + M * r),
                    (_ = M * S * o - b * r),
                    (I = S * b * o - M * r),
                    (O = b * b * o + s),
                    (C = M * b * o + S * r),
                    (N = S * M * o + b * r),
                    (L = b * M * o - S * r),
                    (y = M * M * o + s),
                    (t[0] = a * v + u * A + p * _),
                    (t[1] = c * v + d * A + g * _),
                    (t[2] = l * v + m * A + T * _),
                    (t[3] = h * v + E * A + R * _),
                    (t[4] = a * I + u * O + p * C),
                    (t[5] = c * I + d * O + g * C),
                    (t[6] = l * I + m * O + T * C),
                    (t[7] = h * I + E * O + R * C),
                    (t[8] = a * N + u * L + p * y),
                    (t[9] = c * N + d * L + g * y),
                    (t[10] = l * N + m * L + T * y),
                    (t[11] = h * N + E * L + R * y),
                    e !== t && ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
                    t);
          }
          function x(t, e, i) {
              var n = Math.sin(i),
                  r = Math.cos(i),
                  s = e[4],
                  o = e[5],
                  a = e[6],
                  c = e[7],
                  l = e[8],
                  h = e[9],
                  u = e[10],
                  d = e[11];
              return (
                  e !== t && ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
                  (t[4] = s * r + l * n),
                  (t[5] = o * r + h * n),
                  (t[6] = a * r + u * n),
                  (t[7] = c * r + d * n),
                  (t[8] = l * r - s * n),
                  (t[9] = h * r - o * n),
                  (t[10] = u * r - a * n),
                  (t[11] = d * r - c * n),
                  t
              );
          }
          function D(t, e, i) {
              var n = Math.sin(i),
                  r = Math.cos(i),
                  s = e[0],
                  o = e[1],
                  a = e[2],
                  c = e[3],
                  l = e[8],
                  h = e[9],
                  u = e[10],
                  d = e[11];
              return (
                  e !== t && ((t[4] = e[4]), (t[5] = e[5]), (t[6] = e[6]), (t[7] = e[7]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
                  (t[0] = s * r - l * n),
                  (t[1] = o * r - h * n),
                  (t[2] = a * r - u * n),
                  (t[3] = c * r - d * n),
                  (t[8] = s * n + l * r),
                  (t[9] = o * n + h * r),
                  (t[10] = a * n + u * r),
                  (t[11] = c * n + d * r),
                  t
              );
          }
          function P(t, e, i) {
              var n = Math.sin(i),
                  r = Math.cos(i),
                  s = e[0],
                  o = e[1],
                  a = e[2],
                  c = e[3],
                  l = e[4],
                  h = e[5],
                  u = e[6],
                  d = e[7];
              return (
                  e !== t && ((t[8] = e[8]), (t[9] = e[9]), (t[10] = e[10]), (t[11] = e[11]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
                  (t[0] = s * r + l * n),
                  (t[1] = o * r + h * n),
                  (t[2] = a * r + u * n),
                  (t[3] = c * r + d * n),
                  (t[4] = l * r - s * n),
                  (t[5] = h * r - o * n),
                  (t[6] = u * r - a * n),
                  (t[7] = d * r - c * n),
                  t
              );
          }
          function U(t, e) {
              return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = e[0]), (t[13] = e[1]), (t[14] = e[2]), (t[15] = 1), t;
          }
          function w(t, e) {
              return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = e[1]), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = e[2]), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
          }
          function F(t, e, i) {
              var n,
                  r,
                  s,
                  o = i[0],
                  a = i[1],
                  c = i[2],
                  l = Math.hypot(o, a, c);
              return l < f
                  ? null
                  : ((o *= l = 1 / l),
                    (a *= l),
                    (c *= l),
                    (n = Math.sin(e)),
                    (s = 1 - (r = Math.cos(e))),
                    (t[0] = o * o * s + r),
                    (t[1] = a * o * s + c * n),
                    (t[2] = c * o * s - a * n),
                    (t[3] = 0),
                    (t[4] = o * a * s - c * n),
                    (t[5] = a * a * s + r),
                    (t[6] = c * a * s + o * n),
                    (t[7] = 0),
                    (t[8] = o * c * s + a * n),
                    (t[9] = a * c * s - o * n),
                    (t[10] = c * c * s + r),
                    (t[11] = 0),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = 0),
                    (t[15] = 1),
                    t);
          }
          function B(t, e) {
              var i = Math.sin(e),
                  n = Math.cos(e);
              return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = n), (t[6] = i), (t[7] = 0), (t[8] = 0), (t[9] = -i), (t[10] = n), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
          }
          function H(t, e) {
              var i = Math.sin(e),
                  n = Math.cos(e);
              return (t[0] = n), (t[1] = 0), (t[2] = -i), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = i), (t[9] = 0), (t[10] = n), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
          }
          function G(t, e) {
              var i = Math.sin(e),
                  n = Math.cos(e);
              return (t[0] = n), (t[1] = i), (t[2] = 0), (t[3] = 0), (t[4] = -i), (t[5] = n), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
          }
          function k(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2],
                  o = e[3],
                  a = n + n,
                  c = r + r,
                  l = s + s,
                  h = n * a,
                  u = n * c,
                  d = n * l,
                  m = r * c,
                  E = r * l,
                  f = s * l,
                  p = o * a,
                  g = o * c,
                  T = o * l;
              return (
                  (t[0] = 1 - (m + f)),
                  (t[1] = u + T),
                  (t[2] = d - g),
                  (t[3] = 0),
                  (t[4] = u - T),
                  (t[5] = 1 - (h + f)),
                  (t[6] = E + p),
                  (t[7] = 0),
                  (t[8] = d + g),
                  (t[9] = E - p),
                  (t[10] = 1 - (h + m)),
                  (t[11] = 0),
                  (t[12] = i[0]),
                  (t[13] = i[1]),
                  (t[14] = i[2]),
                  (t[15] = 1),
                  t
              );
          }
          function Y(t, e) {
              var i = new p(3),
                  n = -e[0],
                  r = -e[1],
                  s = -e[2],
                  o = e[3],
                  a = e[4],
                  c = e[5],
                  l = e[6],
                  h = e[7],
                  u = n * n + r * r + s * s + o * o;
              return (
                  u > 0
                      ? ((i[0] = (2 * (a * o + h * n + c * s - l * r)) / u), (i[1] = (2 * (c * o + h * r + l * n - a * s)) / u), (i[2] = (2 * (l * o + h * s + a * r - c * n)) / u))
                      : ((i[0] = 2 * (a * o + h * n + c * s - l * r)), (i[1] = 2 * (c * o + h * r + l * n - a * s)), (i[2] = 2 * (l * o + h * s + a * r - c * n))),
                  k(t, e, i),
                  t
              );
          }
          function X(t, e) {
              return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
          }
          function V(t, e) {
              var i = e[0],
                  n = e[1],
                  r = e[2],
                  s = e[4],
                  o = e[5],
                  a = e[6],
                  c = e[8],
                  l = e[9],
                  h = e[10];
              return (t[0] = Math.hypot(i, n, r)), (t[1] = Math.hypot(s, o, a)), (t[2] = Math.hypot(c, l, h)), t;
          }
          function j(t, e) {
              var i = new p(3);
              V(i, e);
              var n = 1 / i[0],
                  r = 1 / i[1],
                  s = 1 / i[2],
                  o = e[0] * n,
                  a = e[1] * r,
                  c = e[2] * s,
                  l = e[4] * n,
                  h = e[5] * r,
                  u = e[6] * s,
                  d = e[8] * n,
                  m = e[9] * r,
                  E = e[10] * s,
                  f = o + h + E,
                  g = 0;
              return (
                  f > 0
                      ? ((g = 2 * Math.sqrt(f + 1)), (t[3] = 0.25 * g), (t[0] = (u - m) / g), (t[1] = (d - c) / g), (t[2] = (a - l) / g))
                      : o > h && o > E
                      ? ((g = 2 * Math.sqrt(1 + o - h - E)), (t[3] = (u - m) / g), (t[0] = 0.25 * g), (t[1] = (a + l) / g), (t[2] = (d + c) / g))
                      : h > E
                      ? ((g = 2 * Math.sqrt(1 + h - o - E)), (t[3] = (d - c) / g), (t[0] = (a + l) / g), (t[1] = 0.25 * g), (t[2] = (u + m) / g))
                      : ((g = 2 * Math.sqrt(1 + E - o - h)), (t[3] = (a - l) / g), (t[0] = (d + c) / g), (t[1] = (u + m) / g), (t[2] = 0.25 * g)),
                  t
              );
          }
          function $(t, e, i, n) {
              var r = e[0],
                  s = e[1],
                  o = e[2],
                  a = e[3],
                  c = r + r,
                  l = s + s,
                  h = o + o,
                  u = r * c,
                  d = r * l,
                  m = r * h,
                  E = s * l,
                  f = s * h,
                  p = o * h,
                  g = a * c,
                  T = a * l,
                  R = a * h,
                  v = n[0],
                  A = n[1],
                  _ = n[2];
              return (
                  (t[0] = (1 - (E + p)) * v),
                  (t[1] = (d + R) * v),
                  (t[2] = (m - T) * v),
                  (t[3] = 0),
                  (t[4] = (d - R) * A),
                  (t[5] = (1 - (u + p)) * A),
                  (t[6] = (f + g) * A),
                  (t[7] = 0),
                  (t[8] = (m + T) * _),
                  (t[9] = (f - g) * _),
                  (t[10] = (1 - (u + E)) * _),
                  (t[11] = 0),
                  (t[12] = i[0]),
                  (t[13] = i[1]),
                  (t[14] = i[2]),
                  (t[15] = 1),
                  t
              );
          }
          function z(t, e, i, n, r) {
              var s = e[0],
                  o = e[1],
                  a = e[2],
                  c = e[3],
                  l = s + s,
                  h = o + o,
                  u = a + a,
                  d = s * l,
                  m = s * h,
                  E = s * u,
                  f = o * h,
                  p = o * u,
                  g = a * u,
                  T = c * l,
                  R = c * h,
                  v = c * u,
                  A = n[0],
                  _ = n[1],
                  I = n[2],
                  O = r[0],
                  C = r[1],
                  N = r[2],
                  L = (1 - (f + g)) * A,
                  y = (m + v) * A,
                  S = (E - R) * A,
                  b = (m - v) * _,
                  M = (1 - (d + g)) * _,
                  x = (p + T) * _,
                  D = (E + R) * I,
                  P = (p - T) * I,
                  U = (1 - (d + f)) * I;
              return (
                  (t[0] = L),
                  (t[1] = y),
                  (t[2] = S),
                  (t[3] = 0),
                  (t[4] = b),
                  (t[5] = M),
                  (t[6] = x),
                  (t[7] = 0),
                  (t[8] = D),
                  (t[9] = P),
                  (t[10] = U),
                  (t[11] = 0),
                  (t[12] = i[0] + O - (L * O + b * C + D * N)),
                  (t[13] = i[1] + C - (y * O + M * C + P * N)),
                  (t[14] = i[2] + N - (S * O + x * C + U * N)),
                  (t[15] = 1),
                  t
              );
          }
          function W(t, e) {
              var i = e[0],
                  n = e[1],
                  r = e[2],
                  s = e[3],
                  o = i + i,
                  a = n + n,
                  c = r + r,
                  l = i * o,
                  h = n * o,
                  u = n * a,
                  d = r * o,
                  m = r * a,
                  E = r * c,
                  f = s * o,
                  p = s * a,
                  g = s * c;
              return (
                  (t[0] = 1 - u - E),
                  (t[1] = h + g),
                  (t[2] = d - p),
                  (t[3] = 0),
                  (t[4] = h - g),
                  (t[5] = 1 - l - E),
                  (t[6] = m + f),
                  (t[7] = 0),
                  (t[8] = d + p),
                  (t[9] = m - f),
                  (t[10] = 1 - l - u),
                  (t[11] = 0),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = 0),
                  (t[15] = 1),
                  t
              );
          }
          function Z(t, e, i, n, r, s, o) {
              var a = 1 / (i - e),
                  c = 1 / (r - n),
                  l = 1 / (s - o);
              return (
                  (t[0] = 2 * s * a),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = 2 * s * c),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = (i + e) * a),
                  (t[9] = (r + n) * c),
                  (t[10] = (o + s) * l),
                  (t[11] = -1),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = o * s * 2 * l),
                  (t[15] = 0),
                  t
              );
          }
          function q(t, e, i, n, r) {
              var s,
                  o = 1 / Math.tan(e / 2);
              return (
                  (t[0] = o / i),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = o),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[11] = -1),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[15] = 0),
                  null != r && r !== 1 / 0 ? ((s = 1 / (n - r)), (t[10] = (r + n) * s), (t[14] = 2 * r * n * s)) : ((t[10] = -1), (t[14] = -2 * n)),
                  t
              );
          }
          Math.hypot ||
              (Math.hypot = function () {
                  for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
                  return Math.sqrt(t);
              });
          var Q = q;
          function K(t, e, i, n, r) {
              var s,
                  o = 1 / Math.tan(e / 2);
              return (
                  (t[0] = o / i),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = o),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[11] = -1),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[15] = 0),
                  null != r && r !== 1 / 0 ? ((s = 1 / (n - r)), (t[10] = r * s), (t[14] = r * n * s)) : ((t[10] = -1), (t[14] = -n)),
                  t
              );
          }
          function J(t, e, i, n) {
              var r = Math.tan((e.upDegrees * Math.PI) / 180),
                  s = Math.tan((e.downDegrees * Math.PI) / 180),
                  o = Math.tan((e.leftDegrees * Math.PI) / 180),
                  a = Math.tan((e.rightDegrees * Math.PI) / 180),
                  c = 2 / (o + a),
                  l = 2 / (r + s);
              return (
                  (t[0] = c),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = l),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = -(o - a) * c * 0.5),
                  (t[9] = (r - s) * l * 0.5),
                  (t[10] = n / (i - n)),
                  (t[11] = -1),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = (n * i) / (i - n)),
                  (t[15] = 0),
                  t
              );
          }
          function tt(t, e, i, n, r, s, o) {
              var a = 1 / (e - i),
                  c = 1 / (n - r),
                  l = 1 / (s - o);
              return (
                  (t[0] = -2 * a),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = -2 * c),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[10] = 2 * l),
                  (t[11] = 0),
                  (t[12] = (e + i) * a),
                  (t[13] = (r + n) * c),
                  (t[14] = (o + s) * l),
                  (t[15] = 1),
                  t
              );
          }
          var et = tt;
          function it(t, e, i, n, r, s, o) {
              var a = 1 / (e - i),
                  c = 1 / (n - r),
                  l = 1 / (s - o);
              return (
                  (t[0] = -2 * a),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = -2 * c),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[10] = l),
                  (t[11] = 0),
                  (t[12] = (e + i) * a),
                  (t[13] = (r + n) * c),
                  (t[14] = s * l),
                  (t[15] = 1),
                  t
              );
          }
          function nt(t, e, i, n) {
              var r,
                  s,
                  o,
                  a,
                  c,
                  l,
                  h,
                  u,
                  d,
                  m,
                  E = e[0],
                  p = e[1],
                  g = e[2],
                  T = n[0],
                  R = n[1],
                  v = n[2],
                  A = i[0],
                  _ = i[1],
                  O = i[2];
              return Math.abs(E - A) < f && Math.abs(p - _) < f && Math.abs(g - O) < f
                  ? I(t)
                  : ((h = E - A),
                    (u = p - _),
                    (d = g - O),
                    (r = R * (d *= m = 1 / Math.hypot(h, u, d)) - v * (u *= m)),
                    (s = v * (h *= m) - T * d),
                    (o = T * u - R * h),
                    (m = Math.hypot(r, s, o)) ? ((r *= m = 1 / m), (s *= m), (o *= m)) : ((r = 0), (s = 0), (o = 0)),
                    (a = u * o - d * s),
                    (c = d * r - h * o),
                    (l = h * s - u * r),
                    (m = Math.hypot(a, c, l)) ? ((a *= m = 1 / m), (c *= m), (l *= m)) : ((a = 0), (c = 0), (l = 0)),
                    (t[0] = r),
                    (t[1] = a),
                    (t[2] = h),
                    (t[3] = 0),
                    (t[4] = s),
                    (t[5] = c),
                    (t[6] = u),
                    (t[7] = 0),
                    (t[8] = o),
                    (t[9] = l),
                    (t[10] = d),
                    (t[11] = 0),
                    (t[12] = -(r * E + s * p + o * g)),
                    (t[13] = -(a * E + c * p + l * g)),
                    (t[14] = -(h * E + u * p + d * g)),
                    (t[15] = 1),
                    t);
          }
          function rt(t, e, i, n) {
              var r = e[0],
                  s = e[1],
                  o = e[2],
                  a = n[0],
                  c = n[1],
                  l = n[2],
                  h = r - i[0],
                  u = s - i[1],
                  d = o - i[2],
                  m = h * h + u * u + d * d;
              m > 0 && ((h *= m = 1 / Math.sqrt(m)), (u *= m), (d *= m));
              var E = c * d - l * u,
                  f = l * h - a * d,
                  p = a * u - c * h;
              return (
                  (m = E * E + f * f + p * p) > 0 && ((E *= m = 1 / Math.sqrt(m)), (f *= m), (p *= m)),
                  (t[0] = E),
                  (t[1] = f),
                  (t[2] = p),
                  (t[3] = 0),
                  (t[4] = u * p - d * f),
                  (t[5] = d * E - h * p),
                  (t[6] = h * f - u * E),
                  (t[7] = 0),
                  (t[8] = h),
                  (t[9] = u),
                  (t[10] = d),
                  (t[11] = 0),
                  (t[12] = r),
                  (t[13] = s),
                  (t[14] = o),
                  (t[15] = 1),
                  t
              );
          }
          function st(t) {
              return (
                  "mat4(" +
                  t[0] +
                  ", " +
                  t[1] +
                  ", " +
                  t[2] +
                  ", " +
                  t[3] +
                  ", " +
                  t[4] +
                  ", " +
                  t[5] +
                  ", " +
                  t[6] +
                  ", " +
                  t[7] +
                  ", " +
                  t[8] +
                  ", " +
                  t[9] +
                  ", " +
                  t[10] +
                  ", " +
                  t[11] +
                  ", " +
                  t[12] +
                  ", " +
                  t[13] +
                  ", " +
                  t[14] +
                  ", " +
                  t[15] +
                  ")"
              );
          }
          function ot(t) {
              return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
          }
          function at(t, e, i) {
              return (
                  (t[0] = e[0] + i[0]),
                  (t[1] = e[1] + i[1]),
                  (t[2] = e[2] + i[2]),
                  (t[3] = e[3] + i[3]),
                  (t[4] = e[4] + i[4]),
                  (t[5] = e[5] + i[5]),
                  (t[6] = e[6] + i[6]),
                  (t[7] = e[7] + i[7]),
                  (t[8] = e[8] + i[8]),
                  (t[9] = e[9] + i[9]),
                  (t[10] = e[10] + i[10]),
                  (t[11] = e[11] + i[11]),
                  (t[12] = e[12] + i[12]),
                  (t[13] = e[13] + i[13]),
                  (t[14] = e[14] + i[14]),
                  (t[15] = e[15] + i[15]),
                  t
              );
          }
          function ct(t, e, i) {
              return (
                  (t[0] = e[0] - i[0]),
                  (t[1] = e[1] - i[1]),
                  (t[2] = e[2] - i[2]),
                  (t[3] = e[3] - i[3]),
                  (t[4] = e[4] - i[4]),
                  (t[5] = e[5] - i[5]),
                  (t[6] = e[6] - i[6]),
                  (t[7] = e[7] - i[7]),
                  (t[8] = e[8] - i[8]),
                  (t[9] = e[9] - i[9]),
                  (t[10] = e[10] - i[10]),
                  (t[11] = e[11] - i[11]),
                  (t[12] = e[12] - i[12]),
                  (t[13] = e[13] - i[13]),
                  (t[14] = e[14] - i[14]),
                  (t[15] = e[15] - i[15]),
                  t
              );
          }
          function lt(t, e, i) {
              return (
                  (t[0] = e[0] * i),
                  (t[1] = e[1] * i),
                  (t[2] = e[2] * i),
                  (t[3] = e[3] * i),
                  (t[4] = e[4] * i),
                  (t[5] = e[5] * i),
                  (t[6] = e[6] * i),
                  (t[7] = e[7] * i),
                  (t[8] = e[8] * i),
                  (t[9] = e[9] * i),
                  (t[10] = e[10] * i),
                  (t[11] = e[11] * i),
                  (t[12] = e[12] * i),
                  (t[13] = e[13] * i),
                  (t[14] = e[14] * i),
                  (t[15] = e[15] * i),
                  t
              );
          }
          function ht(t, e, i, n) {
              return (
                  (t[0] = e[0] + i[0] * n),
                  (t[1] = e[1] + i[1] * n),
                  (t[2] = e[2] + i[2] * n),
                  (t[3] = e[3] + i[3] * n),
                  (t[4] = e[4] + i[4] * n),
                  (t[5] = e[5] + i[5] * n),
                  (t[6] = e[6] + i[6] * n),
                  (t[7] = e[7] + i[7] * n),
                  (t[8] = e[8] + i[8] * n),
                  (t[9] = e[9] + i[9] * n),
                  (t[10] = e[10] + i[10] * n),
                  (t[11] = e[11] + i[11] * n),
                  (t[12] = e[12] + i[12] * n),
                  (t[13] = e[13] + i[13] * n),
                  (t[14] = e[14] + i[14] * n),
                  (t[15] = e[15] + i[15] * n),
                  t
              );
          }
          function ut(t, e) {
              return (
                  t[0] === e[0] &&
                  t[1] === e[1] &&
                  t[2] === e[2] &&
                  t[3] === e[3] &&
                  t[4] === e[4] &&
                  t[5] === e[5] &&
                  t[6] === e[6] &&
                  t[7] === e[7] &&
                  t[8] === e[8] &&
                  t[9] === e[9] &&
                  t[10] === e[10] &&
                  t[11] === e[11] &&
                  t[12] === e[12] &&
                  t[13] === e[13] &&
                  t[14] === e[14] &&
                  t[15] === e[15]
              );
          }
          function dt(t, e) {
              var i = t[0],
                  n = t[1],
                  r = t[2],
                  s = t[3],
                  o = t[4],
                  a = t[5],
                  c = t[6],
                  l = t[7],
                  h = t[8],
                  u = t[9],
                  d = t[10],
                  m = t[11],
                  E = t[12],
                  p = t[13],
                  g = t[14],
                  T = t[15],
                  R = e[0],
                  v = e[1],
                  A = e[2],
                  _ = e[3],
                  I = e[4],
                  O = e[5],
                  C = e[6],
                  N = e[7],
                  L = e[8],
                  y = e[9],
                  S = e[10],
                  b = e[11],
                  M = e[12],
                  x = e[13],
                  D = e[14],
                  P = e[15];
              return (
                  Math.abs(i - R) <= f * Math.max(1, Math.abs(i), Math.abs(R)) &&
                  Math.abs(n - v) <= f * Math.max(1, Math.abs(n), Math.abs(v)) &&
                  Math.abs(r - A) <= f * Math.max(1, Math.abs(r), Math.abs(A)) &&
                  Math.abs(s - _) <= f * Math.max(1, Math.abs(s), Math.abs(_)) &&
                  Math.abs(o - I) <= f * Math.max(1, Math.abs(o), Math.abs(I)) &&
                  Math.abs(a - O) <= f * Math.max(1, Math.abs(a), Math.abs(O)) &&
                  Math.abs(c - C) <= f * Math.max(1, Math.abs(c), Math.abs(C)) &&
                  Math.abs(l - N) <= f * Math.max(1, Math.abs(l), Math.abs(N)) &&
                  Math.abs(h - L) <= f * Math.max(1, Math.abs(h), Math.abs(L)) &&
                  Math.abs(u - y) <= f * Math.max(1, Math.abs(u), Math.abs(y)) &&
                  Math.abs(d - S) <= f * Math.max(1, Math.abs(d), Math.abs(S)) &&
                  Math.abs(m - b) <= f * Math.max(1, Math.abs(m), Math.abs(b)) &&
                  Math.abs(E - M) <= f * Math.max(1, Math.abs(E), Math.abs(M)) &&
                  Math.abs(p - x) <= f * Math.max(1, Math.abs(p), Math.abs(x)) &&
                  Math.abs(g - D) <= f * Math.max(1, Math.abs(g), Math.abs(D)) &&
                  Math.abs(T - P) <= f * Math.max(1, Math.abs(T), Math.abs(P))
              );
          }
          var mt = y,
              Et = ct;
          function ft() {
              var t = new p(3);
              return p != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
          }
          function pt(t) {
              var e = new p(3);
              return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
          }
          function gt(t) {
              var e = t[0],
                  i = t[1],
                  n = t[2];
              return Math.hypot(e, i, n);
          }
          function Tt(t, e, i) {
              var n = new p(3);
              return (n[0] = t), (n[1] = e), (n[2] = i), n;
          }
          function Rt(t, e) {
              return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
          }
          function vt(t, e, i, n) {
              return (t[0] = e), (t[1] = i), (t[2] = n), t;
          }
          function At(t, e, i) {
              return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t;
          }
          function _t(t, e, i) {
              return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t;
          }
          function It(t, e, i) {
              return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), (t[2] = e[2] * i[2]), t;
          }
          function Ot(t, e, i) {
              return (t[0] = e[0] / i[0]), (t[1] = e[1] / i[1]), (t[2] = e[2] / i[2]), t;
          }
          function Ct(t, e) {
              return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), t;
          }
          function Nt(t, e) {
              return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), t;
          }
          function Lt(t, e, i) {
              return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), (t[2] = Math.min(e[2], i[2])), t;
          }
          function yt(t, e, i) {
              return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), (t[2] = Math.max(e[2], i[2])), t;
          }
          function St(t, e) {
              return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), t;
          }
          function bt(t, e, i) {
              return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t;
          }
          function Mt(t, e, i, n) {
              return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), t;
          }
          function xt(t, e) {
              var i = e[0] - t[0],
                  n = e[1] - t[1],
                  r = e[2] - t[2];
              return Math.hypot(i, n, r);
          }
          function Dt(t, e) {
              var i = e[0] - t[0],
                  n = e[1] - t[1],
                  r = e[2] - t[2];
              return i * i + n * n + r * r;
          }
          function Pt(t) {
              var e = t[0],
                  i = t[1],
                  n = t[2];
              return e * e + i * i + n * n;
          }
          function Ut(t, e) {
              return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
          }
          function wt(t, e) {
              return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
          }
          function Ft(t, e) {
              var i = e[0],
                  n = e[1],
                  r = e[2],
                  s = i * i + n * n + r * r;
              return s > 0 && (s = 1 / Math.sqrt(s)), (t[0] = e[0] * s), (t[1] = e[1] * s), (t[2] = e[2] * s), t;
          }
          function Bt(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
          }
          function Ht(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2],
                  o = i[0],
                  a = i[1],
                  c = i[2];
              return (t[0] = r * c - s * a), (t[1] = s * o - n * c), (t[2] = n * a - r * o), t;
          }
          function Gt(t, e, i, n) {
              var r = e[0],
                  s = e[1],
                  o = e[2];
              return (t[0] = r + n * (i[0] - r)), (t[1] = s + n * (i[1] - s)), (t[2] = o + n * (i[2] - o)), t;
          }
          function kt(t, e, i, n, r, s) {
              var o = s * s,
                  a = o * (2 * s - 3) + 1,
                  c = o * (s - 2) + s,
                  l = o * (s - 1),
                  h = o * (3 - 2 * s);
              return (t[0] = e[0] * a + i[0] * c + n[0] * l + r[0] * h), (t[1] = e[1] * a + i[1] * c + n[1] * l + r[1] * h), (t[2] = e[2] * a + i[2] * c + n[2] * l + r[2] * h), t;
          }
          function Yt(t, e, i, n, r, s) {
              var o = 1 - s,
                  a = o * o,
                  c = s * s,
                  l = a * o,
                  h = 3 * s * a,
                  u = 3 * c * o,
                  d = c * s;
              return (t[0] = e[0] * l + i[0] * h + n[0] * u + r[0] * d), (t[1] = e[1] * l + i[1] * h + n[1] * u + r[1] * d), (t[2] = e[2] * l + i[2] * h + n[2] * u + r[2] * d), t;
          }
          function Xt(t, e) {
              e = e || 1;
              var i = 2 * g() * Math.PI,
                  n = 2 * g() - 1,
                  r = Math.sqrt(1 - n * n) * e;
              return (t[0] = Math.cos(i) * r), (t[1] = Math.sin(i) * r), (t[2] = n * e), t;
          }
          function Vt(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2],
                  o = i[3] * n + i[7] * r + i[11] * s + i[15];
              return (o = o || 1), (t[0] = (i[0] * n + i[4] * r + i[8] * s + i[12]) / o), (t[1] = (i[1] * n + i[5] * r + i[9] * s + i[13]) / o), (t[2] = (i[2] * n + i[6] * r + i[10] * s + i[14]) / o), t;
          }
          function jt(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2];
              return (t[0] = n * i[0] + r * i[3] + s * i[6]), (t[1] = n * i[1] + r * i[4] + s * i[7]), (t[2] = n * i[2] + r * i[5] + s * i[8]), t;
          }
          function $t(t, e, i) {
              var n = i[0],
                  r = i[1],
                  s = i[2],
                  o = i[3],
                  a = e[0],
                  c = e[1],
                  l = e[2],
                  h = r * l - s * c,
                  u = s * a - n * l,
                  d = n * c - r * a,
                  m = r * d - s * u,
                  E = s * h - n * d,
                  f = n * u - r * h,
                  p = 2 * o;
              return (h *= p), (u *= p), (d *= p), (m *= 2), (E *= 2), (f *= 2), (t[0] = a + h + m), (t[1] = c + u + E), (t[2] = l + d + f), t;
          }
          function zt(t, e, i, n) {
              var r = [],
                  s = [];
              return (
                  (r[0] = e[0] - i[0]),
                  (r[1] = e[1] - i[1]),
                  (r[2] = e[2] - i[2]),
                  (s[0] = r[0]),
                  (s[1] = r[1] * Math.cos(n) - r[2] * Math.sin(n)),
                  (s[2] = r[1] * Math.sin(n) + r[2] * Math.cos(n)),
                  (t[0] = s[0] + i[0]),
                  (t[1] = s[1] + i[1]),
                  (t[2] = s[2] + i[2]),
                  t
              );
          }
          function Wt(t, e, i, n) {
              var r = [],
                  s = [];
              return (
                  (r[0] = e[0] - i[0]),
                  (r[1] = e[1] - i[1]),
                  (r[2] = e[2] - i[2]),
                  (s[0] = r[2] * Math.sin(n) + r[0] * Math.cos(n)),
                  (s[1] = r[1]),
                  (s[2] = r[2] * Math.cos(n) - r[0] * Math.sin(n)),
                  (t[0] = s[0] + i[0]),
                  (t[1] = s[1] + i[1]),
                  (t[2] = s[2] + i[2]),
                  t
              );
          }
          function Zt(t, e, i, n) {
              var r = [],
                  s = [];
              return (
                  (r[0] = e[0] - i[0]),
                  (r[1] = e[1] - i[1]),
                  (r[2] = e[2] - i[2]),
                  (s[0] = r[0] * Math.cos(n) - r[1] * Math.sin(n)),
                  (s[1] = r[0] * Math.sin(n) + r[1] * Math.cos(n)),
                  (s[2] = r[2]),
                  (t[0] = s[0] + i[0]),
                  (t[1] = s[1] + i[1]),
                  (t[2] = s[2] + i[2]),
                  t
              );
          }
          function qt(t, e) {
              var i = t[0],
                  n = t[1],
                  r = t[2],
                  s = e[0],
                  o = e[1],
                  a = e[2],
                  c = Math.sqrt(i * i + n * n + r * r) * Math.sqrt(s * s + o * o + a * a),
                  l = c && Bt(t, e) / c;
              return Math.acos(Math.min(Math.max(l, -1), 1));
          }
          function Qt(t) {
              return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
          }
          function Kt(t) {
              return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
          }
          function Jt(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
          }
          function te(t, e) {
              var i = t[0],
                  n = t[1],
                  r = t[2],
                  s = e[0],
                  o = e[1],
                  a = e[2];
              return Math.abs(i - s) <= f * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - o) <= f * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - a) <= f * Math.max(1, Math.abs(r), Math.abs(a));
          }
          var ee,
              ie = _t,
              ne = It,
              re = Ot,
              se = xt,
              oe = Dt,
              ae = gt,
              ce = Pt,
              le =
                  ((ee = ft()),
                  function (t, e, i, n, r, s) {
                      var o, a;
                      for (e || (e = 3), i || (i = 0), a = n ? Math.min(n * e + i, t.length) : t.length, o = i; o < a; o += e)
                          (ee[0] = t[o]), (ee[1] = t[o + 1]), (ee[2] = t[o + 2]), r(ee, ee, s), (t[o] = ee[0]), (t[o + 1] = ee[1]), (t[o + 2] = ee[2]);
                      return t;
                  });
          function he() {
              var t = new p(4);
              return p != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t;
          }
          function ue(t) {
              var e = new p(4);
              return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
          }
          function de(t, e, i, n) {
              var r = new p(4);
              return (r[0] = t), (r[1] = e), (r[2] = i), (r[3] = n), r;
          }
          function me(t, e) {
              return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
          }
          function Ee(t, e, i, n, r) {
              return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), t;
          }
          function fe(t, e, i) {
              return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), t;
          }
          function pe(t, e, i) {
              return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), (t[3] = e[3] - i[3]), t;
          }
          function ge(t, e, i) {
              return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), (t[2] = e[2] * i[2]), (t[3] = e[3] * i[3]), t;
          }
          function Te(t, e, i) {
              return (t[0] = e[0] / i[0]), (t[1] = e[1] / i[1]), (t[2] = e[2] / i[2]), (t[3] = e[3] / i[3]), t;
          }
          function Re(t, e) {
              return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), (t[3] = Math.ceil(e[3])), t;
          }
          function ve(t, e) {
              return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), (t[3] = Math.floor(e[3])), t;
          }
          function Ae(t, e, i) {
              return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), (t[2] = Math.min(e[2], i[2])), (t[3] = Math.min(e[3], i[3])), t;
          }
          function _e(t, e, i) {
              return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), (t[2] = Math.max(e[2], i[2])), (t[3] = Math.max(e[3], i[3])), t;
          }
          function Ie(t, e) {
              return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), (t[3] = Math.round(e[3])), t;
          }
          function Oe(t, e, i) {
              return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), t;
          }
          function Ce(t, e, i, n) {
              return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), (t[3] = e[3] + i[3] * n), t;
          }
          function Ne(t, e) {
              var i = e[0] - t[0],
                  n = e[1] - t[1],
                  r = e[2] - t[2],
                  s = e[3] - t[3];
              return Math.hypot(i, n, r, s);
          }
          function Le(t, e) {
              var i = e[0] - t[0],
                  n = e[1] - t[1],
                  r = e[2] - t[2],
                  s = e[3] - t[3];
              return i * i + n * n + r * r + s * s;
          }
          function ye(t) {
              var e = t[0],
                  i = t[1],
                  n = t[2],
                  r = t[3];
              return Math.hypot(e, i, n, r);
          }
          function Se(t) {
              var e = t[0],
                  i = t[1],
                  n = t[2],
                  r = t[3];
              return e * e + i * i + n * n + r * r;
          }
          function be(t, e) {
              return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
          }
          function Me(t, e) {
              return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), (t[3] = 1 / e[3]), t;
          }
          function xe(t, e) {
              var i = e[0],
                  n = e[1],
                  r = e[2],
                  s = e[3],
                  o = i * i + n * n + r * r + s * s;
              return o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = i * o), (t[1] = n * o), (t[2] = r * o), (t[3] = s * o), t;
          }
          function De(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
          }
          function Pe(t, e, i, n) {
              var r = i[0] * n[1] - i[1] * n[0],
                  s = i[0] * n[2] - i[2] * n[0],
                  o = i[0] * n[3] - i[3] * n[0],
                  a = i[1] * n[2] - i[2] * n[1],
                  c = i[1] * n[3] - i[3] * n[1],
                  l = i[2] * n[3] - i[3] * n[2],
                  h = e[0],
                  u = e[1],
                  d = e[2],
                  m = e[3];
              return (t[0] = u * l - d * c + m * a), (t[1] = -h * l + d * o - m * s), (t[2] = h * c - u * o + m * r), (t[3] = -h * a + u * s - d * r), t;
          }
          function Ue(t, e, i, n) {
              var r = e[0],
                  s = e[1],
                  o = e[2],
                  a = e[3];
              return (t[0] = r + n * (i[0] - r)), (t[1] = s + n * (i[1] - s)), (t[2] = o + n * (i[2] - o)), (t[3] = a + n * (i[3] - a)), t;
          }
          function we(t, e) {
              var i, n, r, s, o, a;
              e = e || 1;
              do {
                  o = (i = 2 * g() - 1) * i + (n = 2 * g() - 1) * n;
              } while (o >= 1);
              do {
                  a = (r = 2 * g() - 1) * r + (s = 2 * g() - 1) * s;
              } while (a >= 1);
              var c = Math.sqrt((1 - o) / a);
              return (t[0] = e * i), (t[1] = e * n), (t[2] = e * r * c), (t[3] = e * s * c), t;
          }
          function Fe(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2],
                  o = e[3];
              return (t[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * o), (t[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * o), (t[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * o), (t[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * o), t;
          }
          function Be(t, e, i) {
              var n = e[0],
                  r = e[1],
                  s = e[2],
                  o = i[0],
                  a = i[1],
                  c = i[2],
                  l = i[3],
                  h = l * n + a * s - c * r,
                  u = l * r + c * n - o * s,
                  d = l * s + o * r - a * n,
                  m = -o * n - a * r - c * s;
              return (t[0] = h * l + m * -o + u * -c - d * -a), (t[1] = u * l + m * -a + d * -o - h * -c), (t[2] = d * l + m * -c + h * -a - u * -o), (t[3] = e[3]), t;
          }
          function He(t) {
              return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
          }
          function Ge(t) {
              return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
          }
          function ke(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
          }
          function Ye(t, e) {
              var i = t[0],
                  n = t[1],
                  r = t[2],
                  s = t[3],
                  o = e[0],
                  a = e[1],
                  c = e[2],
                  l = e[3];
              return (
                  Math.abs(i - o) <= f * Math.max(1, Math.abs(i), Math.abs(o)) &&
                  Math.abs(n - a) <= f * Math.max(1, Math.abs(n), Math.abs(a)) &&
                  Math.abs(r - c) <= f * Math.max(1, Math.abs(r), Math.abs(c)) &&
                  Math.abs(s - l) <= f * Math.max(1, Math.abs(s), Math.abs(l))
              );
          }
          var Xe = pe,
              Ve = ge,
              je = Te,
              $e = Ne,
              ze = Le,
              We = ye,
              Ze = Se,
              qe = (function () {
                  var t = he();
                  return function (e, i, n, r, s, o) {
                      var a, c;
                      for (i || (i = 4), n || (n = 0), c = r ? Math.min(r * i + n, e.length) : e.length, a = n; a < c; a += i)
                          (t[0] = e[a]), (t[1] = e[a + 1]), (t[2] = e[a + 2]), (t[3] = e[a + 3]), s(t, t, o), (e[a] = t[0]), (e[a + 1] = t[1]), (e[a + 2] = t[2]), (e[a + 3] = t[3]);
                      return e;
                  };
              })();
          class Qe {
              constructor() {
                  (this.fovY = 45),
                      (this.near = 0.001),
                      (this.far = 10),
                      (this.aspectRatio = 1),
                      (this.positionEye = r.fromValues(0, 0, -2)),
                      (this.positionTarget = r.fromValues(0, 0, 0)),
                      (this.vectorUp = r.fromValues(0, 1, 0)),
                      (this.matrixP = n.create()),
                      (this.matrixMV = n.create()),
                      (this.matrixMVP = n.create()),
                      (this.matrixLookat = n.create()),
                      this.update();
              }
              update() {
                  const t = this.matrixP,
                      e = this.matrixMV,
                      i = this.matrixMVP,
                      r = this.matrixLookat;
                  n.perspective(t, this.fovY, this.aspectRatio, this.near, this.far), n.lookAt(r, this.positionEye, this.positionTarget, this.vectorUp), n.multiply(t, t, r), n.identity(e), n.copy(i, t), n.multiply(i, i, e);
              }
              setPositionEye(t, e, i) {
                  (this.positionEye[0] = t), (this.positionEye[1] = e), (this.positionEye[2] = i);
              }
              setPositionTarget(t, e, i) {
                  (this.positionTarget[0] = t), (this.positionTarget[1] = e), (this.positionTarget[2] = i);
              }
              setFOV(t) {
                  this.fovY = t;
              }
              setAspectRatio(t, e) {
                  this.aspectRatio = t / e;
              }
              getDirectionNormalised() {
                  const t = this.positionEye,
                      e = this.positionTarget,
                      i = r.fromValues(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
                  return r.normalize(i, i), i;
              }
              getMatrixMVP() {
                  return this.matrixMVP;
              }
          }
          class Ke {
              constructor(t) {
                  this.CONTROLLER = t;
              }
              init(t) {
                  (this.CAMERA_PERSPECTIVE = new Qe()),
                      (this.RADIUS_INTERIOR = 1e-4),
                      (this.RADIUS_EXTERIOR = 1.5),
                      (this.RADIUS_LERP = 0.1),
                      (this.radius = this.RADIUS_INTERIOR),
                      (this.radiusTarget = this.radius),
                      (this.ROTATION_LERP = t.rotationLerp ? t.rotationLerp : 0.1),
                      (this.rotationThetaMin = 0),
                      (this.rotationThetaMax = 0),
                      (this.rotationThetaIsLimited = !1),
                      (this.rotationPhiMin = 0.01 * Math.PI),
                      (this.rotationPhiMax = 0.99 * Math.PI),
                      (this.rotationTheta = t.rotationThetaInitial ? t.rotationThetaInitial : 0),
                      (this.rotationPhi = t.rotationPhiInitial ? t.rotationPhiInitial : 0.5 * Math.PI),
                      (this.rotationTargetTheta = this.rotationTheta),
                      (this.rotationTargetPhi = this.rotationPhi),
                      (this.ZOOM_FOV_BASE = 45),
                      (this.ZOOM_MAX = 0.5),
                      (this.ZOOM_DELTA = this.ZOOM_MAX / 5),
                      (this.ZOOM_LERP = 0.1),
                      (this.zoom = 0),
                      (this.zoomTarget = 0),
                      (this.DISTANCE_MOVE_FOR_CHANGE = 1e-5),
                      (this.hasChangedThisFrame = !0),
                      this.tick();
              }
              tick() {
                  const { ROTATION_LERP: t, CAMERA_PERSPECTIVE: e, DISTANCE_MOVE_FOR_CHANGE: i } = this,
                      n = 2 * Math.PI,
                      r = this.radius,
                      s = this.zoom,
                      o = this.rotationTheta,
                      a = this.rotationPhi;
                  (this.radius += (this.radiusTarget - this.radius) * this.RADIUS_LERP),
                      (this.rotationTheta += (this.rotationTargetTheta - this.rotationTheta) * t),
                      this.rotationTheta > n && ((this.rotationTheta -= n), (this.rotationTargetTheta -= n)),
                      this.rotationTheta < -n && ((this.rotationTheta += n), (this.rotationTargetTheta += n)),
                      (this.rotationPhi += (this.rotationTargetPhi - this.rotationPhi) * t);
                  const c = Math.sin(this.rotationTheta),
                      l = Math.cos(this.rotationTheta),
                      h = Math.sin(this.rotationPhi),
                      u = Math.cos(this.rotationPhi);
                  e.setPositionEye(h * c * this.radius, u * this.radius, h * l * this.radius), (this.zoom += (this.zoomTarget - this.zoom) * this.ZOOM_LERP), e.setFOV(this.ZOOM_FOV_BASE + this.zoom), e.update();
                  let d = !1;
                  Math.abs(r - this.radius) > i && (d = !0), Math.abs(s - this.zoom) > i && (d = !0), Math.abs(o - this.rotationTheta) > i && (d = !0), Math.abs(a - this.rotationPhi) > i && (d = !0), (this.hasChangedThisFrame = d);
              }
              getThetaBound(t) {
                  if (!1 === this.rotationThetaIsLimited) return t;
                  let e = t;
                  const { rotationThetaMin: i } = this,
                      { rotationThetaMax: n } = this;
                  return e < i && (e = i), e > n && (e = n), e;
              }
              getPhiBound(t) {
                  const { rotationPhiMin: e } = this,
                      { rotationPhiMax: i } = this;
                  let n = t;
                  return n < e && (n = e), n > i && (n = i), n;
              }
              rotateHorizontal(t) {
                  const e = t * (1 + this.zoom),
                      i = this.rotationTargetTheta - e;
                  this.rotationTargetTheta = this.getThetaBound(i);
              }
              rotateVertical(t) {
                  const e = t * (1 + this.zoom),
                      i = this.rotationTargetPhi - e;
                  this.rotationTargetPhi = this.getPhiBound(i);
              }
              setRotation(t, e) {
                  (this.rotationTheta = this.getThetaBound(t)), (this.rotationTargetTheta = this.rotationTheta), (this.rotationPhi = this.getPhiBound(e)), (this.rotationTargetPhi = this.rotationPhi);
              }
              setRotationTarget(t, e) {
                  const i = 2 * Math.PI;
                  let n = t;
                  for (; n > i; ) n -= i;
                  for (; n < -i; ) n += i;
                  (n = this.getThetaBound(n)), (n = this.closestRotation(n, this.rotationTargetTheta)), (this.rotationTargetTheta = n), (this.rotationTargetPhi = this.getPhiBound(e));
              }
              closestRotation(t, e) {
                  let i = t;
                  for (; i > e + Math.PI; ) i -= 2 * Math.PI;
                  for (; i < e - Math.PI; ) i += 2 * Math.PI;
                  return i;
              }
              setRotationLimitsTheta(t, e) {
                  (this.rotationThetaMin = t), (this.rotationThetaMax = e), (this.rotationThetaIsLimited = !0);
              }
              clearRotationLimitsTheta() {
                  (this.rotationThetaMin = 0), (this.rotationThetaMax = 0), (this.rotationThetaIsLimited = !1);
              }
              setRotationLimitsPhi(t, e) {
                  (this.rotationPhiMin = t), (this.rotationPhiMax = e);
              }
              clearRotationLimitsPhi() {
                  (this.rotationPhiMin = 0.01 * Math.PI), (this.rotationPhiMax = 0.99 * Math.PI);
              }
              zoomIn() {
                  const { ZOOM_MAX: t } = this;
                  let e = this.zoomTarget - this.ZOOM_DELTA;
                  e < -t && (e = -t), (this.zoomTarget = e);
              }
              zoomOut() {
                  let t = this.zoomTarget + this.ZOOM_DELTA;
                  t > 0 && (t = 0), (this.zoomTarget = t);
              }
              setZoom(t) {
                  const { ZOOM_MAX: e } = this;
                  let i = -t;
                  i < -e && (i = -e), i > 0 && (i = 0), (this.zoom = i), (this.zoomTarget = i);
              }
              setZoomTarget(t) {
                  const { ZOOM_MAX: e } = this;
                  let i = -t;
                  i < -e && (i = -e), (this.zoomTarget = i);
              }
              setExternalView(t) {
                  this.radiusTarget = t ? this.RADIUS_EXTERIOR : this.RADIUS_INTERIOR;
              }
              setSize(t, e) {
                  const { CAMERA_PERSPECTIVE: i } = this;
                  i.setAspectRatio(t, e);
              }
              getMatrixMVP() {
                  return this.CAMERA_PERSPECTIVE.getMatrixMVP();
              }
              getDirectionNormalised() {
                  return this.CAMERA_PERSPECTIVE.getDirectionNormalised();
              }
              getDirectionNormalisedInverted() {
                  const t = this.CAMERA_PERSPECTIVE.getDirectionNormalised();
                  return (t[0] = -t[0]), (t[1] = -t[1]), (t[2] = -t[2]), t;
              }
              getRotationPhi() {
                  return this.rotationPhi;
              }
              getRotationTheta() {
                  return this.rotationTheta;
              }
              getHasChangedThisFrame() {
                  return this.hasChangedThisFrame;
              }
          }
          class Je {
              constructor(t, e) {
                  (this.CONTROLLER = t), (this.CANVAS = e), (this.DEVICE_PIXEL_RATIO = window.devicePixelRatio || 1), (this.positionPreviousX = -1), (this.positionPreviousY = -1), (this.isDown = !1);
              }
              enable() {
                  const { CANVAS: t } = this;
                  this.disable(),
                      (t.onmousedown = this.onMouseDown.bind(this)),
                      (t.ontouchstart = this.onTouchStart.bind(this)),
                      (t.onmousemove = this.onMouseMove.bind(this)),
                      (t.ontouchmove = this.onTouchMove.bind(this)),
                      (t.onmouseup = this.onMouseUp.bind(this)),
                      (t.onmouseout = this.onMouseOut.bind(this)),
                      (t.ontouchend = this.onTouchEnd.bind(this)),
                      (t.onwheel = this.onWheel.bind(this));
              }
              disable() {
                  const { CANVAS: t } = this;
                  (t.onmousedown = void 0), (t.ontouchstart = void 0), (t.onmousemove = void 0), (t.ontouchmove = void 0), (t.onmouseup = void 0), (t.onmouseout = void 0), (t.ontouchend = void 0), (t.onwheel = void 0);
              }
              onMouseDown(t) {
                  t.preventDefault();
                  const e = this.CANVAS.getBoundingClientRect();
                  this.onInteractionStart(t.clientX - e.left, t.clientY - e.top);
              }
              onTouchStart(t) {
                  t.preventDefault();
                  const e = t.changedTouches[0],
                      i = this.CANVAS.getBoundingClientRect();
                  this.onInteractionStart(e.clientX - i.left, e.clientY - i.top);
              }
              onInteractionStart(t, e) {
                  (this.positionPreviousX = t), (this.positionPreviousY = e), (this.isDown = !0);
              }
              onMouseMove(t) {
                  t.preventDefault();
                  const e = this.CANVAS.getBoundingClientRect();
                  this.onInteractionMove(t.clientX - e.left, t.clientY - e.top);
              }
              onTouchMove(t) {
                  t.preventDefault();
                  const e = t.changedTouches[0],
                      i = this.CANVAS.getBoundingClientRect();
                  this.onInteractionMove(e.clientX - i.left, e.clientY - i.top);
              }
              onInteractionMove(t, e) {
                  if (!0 === this.isDown) {
                      const { CONTROLLER: i } = this;
                      i.rotateHorizontal(-(t - this.positionPreviousX) / 500 / this.DEVICE_PIXEL_RATIO), i.rotateVertical(-(e - this.positionPreviousY) / 500 / this.DEVICE_PIXEL_RATIO);
                  }
                  (this.positionPreviousX = t), (this.positionPreviousY = e);
              }
              onMouseUp(t) {
                  t.preventDefault();
                  const e = this.CANVAS.getBoundingClientRect();
                  this.onInteractionEnd(t.clientX - e.left, t.clientY - e.top);
              }
              onTouchEnd(t) {
                  t.preventDefault();
                  const e = t.changedTouches[0],
                      i = this.CANVAS.getBoundingClientRect();
                  this.onInteractionEnd(e.clientX - i.left, e.clientY - i.top);
              }
              onMouseOut(t) {
                  t.preventDefault();
                  const e = this.CANVAS.getBoundingClientRect();
                  this.onInteractionEnd(t.clientX - e.left, t.clientY - e.top);
              }
              onInteractionEnd(t, e) {
                  (this.positionPreviousX = t), (this.positionPreviousY = e), (this.isDown = !1);
              }
              onWheel(t) {
                  t.preventDefault(), t.deltaY < 0 ? this.CONTROLLER.onInteractionZoom(-1) : t.deltaY > 0 && this.CONTROLLER.onInteractionZoom(1);
              }
          }
          function ti(t, e, i) {
              const n = t.createShader(t.VERTEX_SHADER);
              t.shaderSource(n, e), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) || console.error("Util. getShaderProgram. Vert. " + t.getShaderInfoLog(n));
              const r = t.createShader(t.FRAGMENT_SHADER);
              t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) || console.error("Util. getShaderProgram. Frag. " + t.getShaderInfoLog(r));
              const s = t.createProgram();
              return t.attachShader(s, n), t.attachShader(s, r), t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || console.error("Util. getShaderProgram. Link. " + t.getProgramInfoLog(s)), null !== s ? s : null;
          }
          function ei() {
              return new Float32Array([0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0]);
          }
          var ii = i(42),
              ni = i.n(ii),
              ri = i(107),
              si = i.n(ri);
          class oi {
              constructor(t, e, i, n, r, s, o) {
                  (this.GL = t),
                      (this.CALLBACK_LOADED = s),
                      (this.IS_TEXTURE_A = o),
                      (this.IS_EXTENSION_ANISOTROPIC = e.getIsExtensionAnisotropic()),
                      !0 === this.IS_EXTENSION_ANISOTROPIC && ((this.EXTENSION_ANISOTROPIC = e.getExtensionAnisotropic()), (this.EXTENSION_ANISOTROPIC_MAX = e.getExtensionAnisotropicMax()));
                  const { GL: a } = this;
                  (this.TEXTURE = a.createTexture()),
                      a.bindTexture(a.TEXTURE_2D, this.TEXTURE),
                      a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, i),
                      a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                      a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                      a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                      a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                      !0 === this.IS_EXTENSION_ANISOTROPIC && a.texParameterf(a.TEXTURE_2D, this.EXTENSION_ANISOTROPIC.TEXTURE_MAX_ANISOTROPY_EXT, this.EXTENSION_ANISOTROPIC_MAX),
                      a.bindTexture(a.TEXTURE_2D, null),
                      (this.IMAGE = new Image()),
                      (this.IMAGE.width = n),
                      (this.IMAGE.height = r),
                      (this.IMAGE.crossOrigin = ""),
                      (this.IMAGE.onload = this.onImageLoaded.bind(this)),
                      (this.IMAGE.onerror = this.onImageLoadError.bind(this)),
                      (this.url = ""),
                      (this.IMAGE_RELOAD_COUNT_MAX = 3),
                      (this.IMAGE_RELOAD_DELAY_MS = 500),
                      (this.imageReloadCount = this.IMAGE_RELOAD_COUNT_MAX),
                      (this.imageReloadTimeout = void 0),
                      (this.isImageLoaded = !1);
              }
              loadImage(t) {
                  void 0 !== this.imageReloadTimeout && (clearTimeout(this.imageReloadTimeout), (this.imageReloadTimeout = void 0)),
                      (this.imageReloadCount = this.IMAGE_RELOAD_COUNT_MAX),
                      (this.isImageLoaded = !1),
                      (this.url = t),
                      (this.IMAGE.src = t);
              }
              onImageLoaded() {
                  this.updateTexture(), (this.isImageLoaded = !0), this.CALLBACK_LOADED(this.IS_TEXTURE_A, this.url);
              }
              onImageLoadError() {
                  this.imageReloadCount > 0 && (this.imageReloadTimeout = setTimeout(this.onDelayedImageReload.bind(this), this.IMAGE_RELOAD_DELAY_MS));
              }
              onDelayedImageReload() {
                  (this.imageReloadTimeout = void 0), !0 !== this.isImageLoaded && ((this.imageReloadCount -= 1), (this.IMAGE.src = this.url));
              }
              updateTexture() {
                  const { GL: t, IMAGE: e, TEXTURE: i } = this;
                  t.bindTexture(t.TEXTURE_2D, i),
                      t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                      t.generateMipmap(t.TEXTURE_2D),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                      !0 === this.IS_EXTENSION_ANISOTROPIC && t.texParameterf(t.TEXTURE_2D, this.EXTENSION_ANISOTROPIC.TEXTURE_MAX_ANISOTROPY_EXT, this.EXTENSION_ANISOTROPIC_MAX),
                      t.bindTexture(t.TEXTURE_2D, null);
              }
              getTexture() {
                  return this.TEXTURE;
              }
          }
          class ai {
              constructor(t, e, i, n) {
                  (this.GL = t), (this.CUBE_FACE = e);
                  const { GL: r } = this;
                  (this.PROGRAM = ti(r, ni.a, si.a)),
                      r.useProgram(this.PROGRAM),
                      (this.U_MATRIX_MVP = r.getUniformLocation(this.PROGRAM, "uMVP")),
                      (this.BUFFER_POSITIONS = r.createBuffer()),
                      (this.A_POSITION = r.getAttribLocation(this.PROGRAM, "aPosition")),
                      r.enableVertexAttribArray(this.A_POSITION),
                      (this.TEXTURE_COORDINATES = ei()),
                      (this.BUFFER_TEXTURE_COORDINATES = r.createBuffer()),
                      (this.A_TEXTURE_COORDINATES = r.getAttribLocation(this.PROGRAM, "aTexcoord")),
                      r.enableVertexAttribArray(this.A_TEXTURE_COORDINATES),
                      r.bindBuffer(r.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      r.bufferData(r.ARRAY_BUFFER, this.TEXTURE_COORDINATES, r.STATIC_DRAW),
                      r.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, r.FLOAT, !1, 0, 0),
                      (this.U_SAMPLER_A = r.getUniformLocation(this.PROGRAM, "uSamplerA")),
                      (this.U_SAMPLER_B = r.getUniformLocation(this.PROGRAM, "uSamplerB")),
                      (this.TEXTURE_A = new oi(r, i, n, 512, 512, this.onTextureLoaded.bind(this), !0)),
                      (this.TEXTURE_B = new oi(r, i, n, 512, 512, this.onTextureLoaded.bind(this), !1)),
                      (this.U_MIX_AB = r.getUniformLocation(this.PROGRAM, "uMixAB")),
                      (this.U_ALPHA = r.getUniformLocation(this.PROGRAM, "uAlpha")),
                      r.useProgram(null);
              }
              render(t, e, i, n, r) {
                  const { GL: s } = this;
                  s.useProgram(this.PROGRAM),
                      s.uniformMatrix4fv(this.U_MATRIX_MVP, !1, t),
                      s.bindBuffer(s.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      s.bufferData(s.ARRAY_BUFFER, i, s.STATIC_DRAW),
                      s.vertexAttribPointer(this.A_POSITION, 3, s.FLOAT, !1, 0, 0),
                      s.bindBuffer(s.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      s.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, s.FLOAT, !1, 0, 0),
                      s.activeTexture(s.TEXTURE0),
                      s.uniform1i(this.U_SAMPLER_A, 0),
                      s.bindTexture(s.TEXTURE_2D, this.TEXTURE_A.getTexture()),
                      s.activeTexture(s.TEXTURE1),
                      s.uniform1i(this.U_SAMPLER_B, 1),
                      s.bindTexture(s.TEXTURE_2D, this.TEXTURE_B.getTexture()),
                      s.uniform1f(this.U_MIX_AB, n),
                      s.uniform1f(this.U_ALPHA, r),
                      s.drawArrays(s.TRIANGLES, 0, e),
                      s.bindBuffer(s.ARRAY_BUFFER, null),
                      s.activeTexture(s.TEXTURE0),
                      s.bindTexture(s.TEXTURE_2D, null),
                      s.activeTexture(s.TEXTURE1),
                      s.bindTexture(s.TEXTURE_2D, null),
                      s.useProgram(null);
              }
              loadTextureA(t) {
                  this.TEXTURE_A.loadImage(t);
              }
              loadTextureB(t) {
                  this.TEXTURE_B.loadImage(t);
              }
              onTextureLoaded(t, e) {
                  this.CUBE_FACE.onTextureLoaded(t, e);
              }
          }
          var ci = i(108),
              li = i.n(ci);
          class hi {
              constructor(t) {
                  this.GL = t;
                  const { GL: e } = this;
                  (this.PROGRAM = ti(e, ni.a, li.a)),
                      e.useProgram(this.PROGRAM),
                      (this.U_MATRIX_MVP = e.getUniformLocation(this.PROGRAM, "uMVP")),
                      (this.BUFFER_POSITIONS = e.createBuffer()),
                      (this.A_POSITION = e.getAttribLocation(this.PROGRAM, "aPosition")),
                      e.enableVertexAttribArray(this.A_POSITION),
                      (this.U_BLURRED = e.getUniformLocation(this.PROGRAM, "uBlurred")),
                      e.useProgram(null);
              }
              render(t, e, i, n) {
                  const { GL: r } = this;
                  r.useProgram(this.PROGRAM),
                      r.uniformMatrix4fv(this.U_MATRIX_MVP, !1, t),
                      r.bindBuffer(r.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      r.bufferData(r.ARRAY_BUFFER, i, r.STATIC_DRAW),
                      r.vertexAttribPointer(this.A_POSITION, 3, r.FLOAT, !1, 0, 0),
                      r.uniform1f(this.U_BLURRED, n),
                      r.drawArrays(r.TRIANGLES, 0, e),
                      r.bindBuffer(r.ARRAY_BUFFER, null),
                      r.activeTexture(r.TEXTURE0),
                      r.bindTexture(r.TEXTURE_2D, null),
                      r.activeTexture(r.TEXTURE1),
                      r.bindTexture(r.TEXTURE_2D, null),
                      r.useProgram(null);
              }
          }
          class ui {
              constructor(t, e, i, n, s, o, a, c, l, h) {
                  (this.GL = t),
                      (this.ID_SURFACE = e),
                      (this.ID_X = i),
                      (this.ID_Y = n),
                      (this.VERTICES = new Float32Array([s[0], s[1], s[2], o[0], o[1], o[2], a[0], a[1], a[2], a[0], a[1], a[2], c[0], c[1], c[2], s[0], s[1], s[2]])),
                      (this.VERTEX_TOTAL = this.VERTICES.length / 3),
                      (this.CENTER_POINT = r.fromValues((s[0] + a[0]) / 2, (s[1] + a[1]) / 2, (s[2] + a[2]) / 2)),
                      (this.RENDERER_COLOUR = new ai(t, this, h, l)),
                      (this.RENDERER_BLUR_MASK = new hi(t)),
                      (this.MIX_AB_LERP = 0.05),
                      (this.mixAB = 0),
                      (this.mixABTarget = 0),
                      (this.ALPHA_LERP = 0.05),
                      (this.alpha = 0),
                      (this.alphaTarget = 1),
                      (this.isTextureA = !1),
                      (this.BLUR_LERP = 0.05),
                      (this.blur = 1),
                      (this.blurTarget = 1),
                      (this.DISTANCE_MOVE_FOR_CHANGE = 1e-4),
                      (this.hasChangedThisFrame = !0),
                      (this.hasDelayedLoad = !1),
                      (this.isActive = !1);
              }
              tick() {
                  const { DISTANCE_MOVE_FOR_CHANGE: t } = this,
                      e = this.alpha,
                      i = this.mixAB,
                      n = this.blur;
                  (this.alpha += (this.alphaTarget - this.alpha) * this.ALPHA_LERP), (this.mixAB += (this.mixABTarget - this.mixAB) * this.MIX_AB_LERP), (this.blur += (this.blurTarget - this.blur) * this.BLUR_LERP);
                  let r = !1;
                  Math.abs(e - this.alpha) > t && (r = !0), Math.abs(i - this.mixAB) > t && (r = !0), Math.abs(n - this.blur) > t && (r = !0), (this.hasChangedThisFrame = r);
              }
              renderColour(t) {
                  !1 !== this.isActive && this.RENDERER_COLOUR.render(t, this.VERTEX_TOTAL, this.VERTICES, this.mixAB, this.alpha);
              }
              renderBlurMask(t) {
                  !1 !== this.isActive && this.RENDERER_BLUR_MASK.render(t, this.VERTEX_TOTAL, this.VERTICES, this.blur);
              }
              setActive() {
                  !0 !== this.isActive && (!0 === this.hasDelayedLoad && this.loadImage(this.latestRequestedUrl), (this.isActive = !0));
              }
              setInactive() {
                  !1 !== this.isActive && (this.isActive = !1);
              }
              setImagePath(t) {
                  const e = `${t}${this.ID_SURFACE}_${this.ID_X}_${this.ID_Y}.jpg`;
                  (this.latestRequestedUrl = e), !1 === this.isActive ? (this.hasDelayedLoad = !0) : this.loadImage(e), (this.blurTarget = 1);
              }
              loadImage(t) {
                  t === this.latestRequestedUrl && (!0 === this.isTextureA ? this.RENDERER_COLOUR.loadTextureA(t) : this.RENDERER_COLOUR.loadTextureB(t), (this.hasDelayedLoad = !1));
              }
              onTextureLoaded(t, e) {
                  e === this.latestRequestedUrl && ((this.alphaTarget = 1), (this.mixABTarget = !0 === t ? 0 : 1), (this.blurTarget = 0), (this.isTextureA = !t));
              }
              getCenterPoint() {
                  return this.CENTER_POINT;
              }
              getHasChangedThisFrame() {
                  return this.hasChangedThisFrame;
              }
          }
          class di {
              constructor(t) {
                  this.CONTROLLER = t;
              }
              init(t, e, i, n, s, o) {
                  (this.RENDER_CONTROLLER = e), (this.CUBE_DETAIL = i), (this.FACE_ANGLE_ACTIVE = n);
                  const a = (function (t, e, i, n) {
                      function r(t) {
                          const e = t.toString(16);
                          return 1 === e.length ? "0" + e : e;
                      }
                      function s(t, e, i) {
                          return `#${r(t)}${r(e)}${r(i)}`;
                      }
                      const o = document.createElement("canvas");
                      (o.width = t), (o.height = e);
                      const a = o.getContext("2d"),
                          c = s(Math.floor(255 * i[0]), Math.floor(255 * i[1]), Math.floor(255 * i[2]));
                      (a.fillStyle = c), a.fillRect(0, 0, t, e);
                      const l = s(Math.floor(255 * n[0]), Math.floor(255 * n[1]), Math.floor(255 * n[2]));
                      return (a.fillStyle = l), a.fillRect(0, 0, 2, 2), a.fillRect(0, e - 2, 2, 2), a.fillRect(t - 2, 0, 2, 2), a.fillRect(t - 2, e - 2, 2, 2), a.fillRect(0.5 * t - 2, 0.5 * e - 2, 4, 4), o;
                  })(256, 256, s, o);
                  (this.FACE_TOTAL = this.CUBE_DETAIL * this.CUBE_DETAIL * 6), (this.FACES = []);
                  const c = 1 / this.CUBE_DETAIL,
                      l = c * (-0.5 * this.CUBE_DETAIL);
                  let h, u, d, m, E, f, p, g, T;
                  for (h = 0; h < this.CUBE_DETAIL; h += 1)
                      for (u = 0; u < this.CUBE_DETAIL; u += 1)
                          (m = l + h * c + 1),
                              (E = l + u * c),
                              (d = this.CUBE_DETAIL - u - 1),
                              (f = [l, E, 1 - m]),
                              (p = [l, E, 1 - (m + c)]),
                              (g = [l, E + c, 1 - (m + c)]),
                              (T = [l, E + c, 1 - m]),
                              this.FACES.push(new ui(t, 0, h, d, f, p, g, T, a, this.RENDER_CONTROLLER));
                  for (h = 0; h < this.CUBE_DETAIL; h += 1)
                      for (u = 0; u < this.CUBE_DETAIL; u += 1)
                          (m = l + h * c),
                              (E = l + u * c),
                              (d = this.CUBE_DETAIL - u - 1),
                              (f = [-l, E, m]),
                              (p = [-l, E, m + c]),
                              (g = [-l, E + c, m + c]),
                              (T = [-l, E + c, m]),
                              this.FACES.push(new ui(t, 1, h, d, f, p, g, T, a, this.RENDER_CONTROLLER));
                  for (h = 0; h < this.CUBE_DETAIL; h += 1)
                      for (u = 0; u < this.CUBE_DETAIL; u += 1)
                          (m = l + h * c + 1),
                              (E = l + u * c + 1),
                              (d = this.CUBE_DETAIL - u - 1),
                              (f = [1 - m, -l, 1 - E]),
                              (p = [1 - (m + c), -l, 1 - E]),
                              (g = [1 - (m + c), -l, 1 - (E + c)]),
                              (T = [1 - m, -l, 1 - (E + c)]),
                              this.FACES.push(new ui(t, 2, h, d, f, p, g, T, a, this.RENDER_CONTROLLER));
                  for (h = 0; h < this.CUBE_DETAIL; h += 1)
                      for (u = 0; u < this.CUBE_DETAIL; u += 1)
                          (m = l + h * c + 1),
                              (E = l + u * c),
                              (d = this.CUBE_DETAIL - u - 1),
                              (f = [1 - m, l, E]),
                              (p = [1 - (m + c), l, E]),
                              (g = [1 - (m + c), l, E + c]),
                              (T = [1 - m, l, E + c]),
                              this.FACES.push(new ui(t, 3, h, d, f, p, g, T, a, this.RENDER_CONTROLLER));
                  for (h = 0; h < this.CUBE_DETAIL; h += 1)
                      for (u = 0; u < this.CUBE_DETAIL; u += 1)
                          (m = l + h * c + 1),
                              (E = l + u * c),
                              (d = this.CUBE_DETAIL - u - 1),
                              (f = [1 - m, E, -l]),
                              (p = [1 - (m + c), E, -l]),
                              (g = [1 - (m + c), E + c, -l]),
                              (T = [1 - m, E + c, -l]),
                              this.FACES.push(new ui(t, 4, h, d, f, p, g, T, a, this.RENDER_CONTROLLER));
                  for (h = 0; h < this.CUBE_DETAIL; h += 1)
                      for (u = 0; u < this.CUBE_DETAIL; u += 1)
                          (m = l + h * c),
                              (E = l + u * c),
                              (d = this.CUBE_DETAIL - u - 1),
                              (f = [m, E, l]),
                              (p = [m + c, E, l]),
                              (g = [m + c, E + c, l]),
                              (T = [m, E + c, l]),
                              this.FACES.push(new ui(t, 5, h, d, f, p, g, T, a, this.RENDER_CONTROLLER));
                  (this.faceDirectionNormalised = r.create()), (this.hasChangedThisFrame = !1);
              }
              tick(t) {
                  const { FACES: e, FACE_ANGLE_ACTIVE: i, faceDirectionNormalised: n } = this;
                  let s = !1;
                  for (let o = 0; o < e.length; o += 1) {
                      const a = e[o];
                      r.normalize(n, a.getCenterPoint());
                      r.angle(t, n) < i ? a.setActive() : a.setInactive(), a.tick(), !0 === a.getHasChangedThisFrame() && (s = !0);
                  }
                  this.hasChangedThisFrame = s;
              }
              setPathTiles(t, e) {
                  const { FACES: i, faceDirectionNormalised: n } = this,
                      s = [];
                  for (let t = 0; t < i.length; t += 1) {
                      const o = i[t];
                      r.normalize(n, o.getCenterPoint());
                      const a = r.angle(e, n);
                      s.push({ id: t, angle: a });
                  }
                  s.sort(this.angleSort);
                  for (let e = 0; e < s.length; e += 1) i[s[e].id].setImagePath(t);
              }
              angleSort(t, e) {
                  return t.angle < e.angle ? 1 : t.angle > e.angle ? -1 : 0;
              }
              getFaces() {
                  return this.FACES;
              }
              getFaceTotal() {
                  return this.FACE_TOTAL;
              }
              getHasChangedThisFrame() {
                  return this.hasChangedThisFrame;
              }
          }
          class mi {
              constructor(t) {
                  (this.GL = t),
                      (this.TEXTURE = t.createTexture()),
                      t.activeTexture(t.TEXTURE0),
                      t.bindTexture(t.TEXTURE_2D, this.TEXTURE),
                      t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                      (this.FRAMEBUFFER = t.createFramebuffer()),
                      t.bindFramebuffer(t.FRAMEBUFFER, this.FRAMEBUFFER),
                      t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.TEXTURE, 0);
                  const e = t.checkFramebufferStatus(t.FRAMEBUFFER);
                  e !== t.FRAMEBUFFER_COMPLETE && console.error("Error. FBOTwo. Status " + e), t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null);
              }
              setSize(t, e) {
                  const { GL: i } = this;
                  i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this.TEXTURE), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.bindTexture(i.TEXTURE_2D, null);
              }
              getTexture() {
                  return this.TEXTURE;
              }
              getFramebuffer() {
                  return this.FRAMEBUFFER;
              }
          }
          class Ei {
              constructor(t, e, i) {
                  (this.GL = t), (this.CUBE_CONTROLLER = e), (this.SPRITE_CONTROLLER = i);
              }
              render(t, e, i) {
                  const { GL: n, CUBE_CONTROLLER: r, SPRITE_CONTROLLER: s } = this;
                  n.clear(n.COLOR_BUFFER_BIT), n.viewport(0, 0, e, i), n.enable(n.CULL_FACE), n.enable(n.BLEND), n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                  const o = r.getFaceTotal(),
                      a = r.getFaces();
                  for (let e = 0; e < o; e += 1) {
                      a[e].renderColour(t);
                  }
                  const c = s.getSpriteTotal(),
                      l = s.getSprites();
                  for (let e = 0; e < c; e += 1) {
                      l[e].render(t);
                  }
                  n.enable(n.CULL_FACE), n.disable(n.BLEND);
              }
          }
          class fi {
              constructor(t, e, i) {
                  (this.GL = t), (this.CUBE_CONTROLLER = e), (this.SPRITE_CONTROLLER = i);
              }
              render(t, e, i) {
                  const { GL: n, CUBE_CONTROLLER: r, SPRITE_CONTROLLER: s } = this;
                  n.clear(n.COLOR_BUFFER_BIT), n.viewport(0, 0, e, i), n.enable(n.CULL_FACE);
                  const o = r.getFaceTotal(),
                      a = r.getFaces();
                  for (let e = 0; e < o; e += 1) {
                      a[e].renderBlurMask(t);
                  }
                  n.enable(n.CULL_FACE);
              }
          }
          function pi() {
              return new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
          }
          function gi() {
              return new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
          }
          var Ti = i(109),
              Ri = i.n(Ti),
              vi = i(110),
              Ai = i.n(vi),
              _i = i(55),
              Ii = i.n(_i);
          class Oi {
              constructor(t, e) {
                  this.GL = t;
                  const { GL: i } = this;
                  (this.PROGRAM = ti(i, Ii.a, !0 === e ? Ri.a : Ai.a)),
                      i.useProgram(this.PROGRAM),
                      (this.BUFFER_POSITIONS = t.createBuffer()),
                      t.bindBuffer(t.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      t.bufferData(t.ARRAY_BUFFER, pi(), t.STATIC_DRAW),
                      (this.A_POSITION = t.getAttribLocation(this.PROGRAM, "aPosition")),
                      t.enableVertexAttribArray(this.A_POSITION),
                      t.vertexAttribPointer(this.A_POSITION, 2, t.FLOAT, !1, 0, 0),
                      (this.BUFFER_TEXTURE_COORDINATES = t.createBuffer()),
                      t.bindBuffer(t.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      t.bufferData(t.ARRAY_BUFFER, gi(), t.STATIC_DRAW),
                      (this.A_TEXTURE_COORDINATES = t.getAttribLocation(this.PROGRAM, "aTexcoord")),
                      t.enableVertexAttribArray(this.A_TEXTURE_COORDINATES),
                      t.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, t.FLOAT, !1, 0, 0),
                      (this.U_RESOLUTION = t.getUniformLocation(this.PROGRAM, "uResolution")),
                      t.uniform2f(this.U_RESOLUTION, 1, 1),
                      (this.U_SAMPLER = t.getUniformLocation(this.PROGRAM, "uSampler")),
                      t.uniform1i(this.U_SAMPLER, 0),
                      i.useProgram(null);
              }
              render(t, e, i) {
                  const { GL: n } = this;
                  n.useProgram(this.PROGRAM),
                      n.clear(n.COLOR_BUFFER_BIT),
                      n.viewport(0, 0, t, e),
                      n.bindBuffer(n.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      n.vertexAttribPointer(this.A_POSITION, 2, n.FLOAT, !1, 0, 0),
                      n.bindBuffer(n.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      n.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, n.FLOAT, !1, 0, 0),
                      n.uniform2f(this.U_RESOLUTION, t, e),
                      n.activeTexture(n.TEXTURE0),
                      n.bindTexture(n.TEXTURE_2D, i),
                      n.uniform1i(this.U_SAMPLER_COLOUR, 0),
                      n.drawArrays(n.TRIANGLES, 0, 6),
                      n.bindBuffer(n.ARRAY_BUFFER, null),
                      n.useProgram(null);
              }
          }
          var Ci = i(111),
              Ni = i.n(Ci),
              Li = i(112),
              yi = i.n(Li);
          class Si {
              constructor(t) {
                  this.GL = t;
                  const { GL: e } = this;
                  (this.PROGRAM = ti(e, Ni.a, yi.a)),
                      e.useProgram(this.PROGRAM),
                      (this.BUFFER_POSITIONS = t.createBuffer()),
                      t.bindBuffer(t.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      t.bufferData(t.ARRAY_BUFFER, pi(), t.STATIC_DRAW),
                      (this.A_POSITION = t.getAttribLocation(this.PROGRAM, "aPosition")),
                      t.enableVertexAttribArray(this.A_POSITION),
                      t.vertexAttribPointer(this.A_POSITION, 2, t.FLOAT, !1, 0, 0),
                      (this.BUFFER_TEXTURE_COORDINATES = t.createBuffer()),
                      t.bindBuffer(t.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      t.bufferData(t.ARRAY_BUFFER, gi(), t.STATIC_DRAW),
                      (this.A_TEXTURE_COORDINATES = t.getAttribLocation(this.PROGRAM, "aTexcoord")),
                      t.enableVertexAttribArray(this.A_TEXTURE_COORDINATES),
                      t.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, t.FLOAT, !1, 0, 0),
                      (this.U_SAMPLER_COLOUR = t.getUniformLocation(this.PROGRAM, "uSamplerColour")),
                      t.uniform1i(this.U_SAMPLER_COLOUR, 0),
                      (this.U_SAMPLER_MASK = t.getUniformLocation(this.PROGRAM, "uSamplerMask")),
                      t.uniform1i(this.U_SAMPLER_MASK, 1),
                      (this.U_SAMPLER_BLUR = t.getUniformLocation(this.PROGRAM, "uSamplerBlur")),
                      t.uniform1i(this.U_SAMPLER_BLUR, 2),
                      e.useProgram(null);
              }
              render(t, e, i, n, r) {
                  const { GL: s } = this;
                  s.useProgram(this.PROGRAM),
                      s.clear(s.COLOR_BUFFER_BIT),
                      s.viewport(0, 0, t, e),
                      s.bindBuffer(s.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      s.vertexAttribPointer(this.A_POSITION, 2, s.FLOAT, !1, 0, 0),
                      s.bindBuffer(s.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      s.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, s.FLOAT, !1, 0, 0),
                      s.activeTexture(s.TEXTURE0),
                      s.bindTexture(s.TEXTURE_2D, i),
                      s.uniform1i(this.U_SAMPLER_COLOUR, 0),
                      s.activeTexture(s.TEXTURE1),
                      s.bindTexture(s.TEXTURE_2D, n),
                      s.uniform1i(this.U_SAMPLER_MASK, 1),
                      s.activeTexture(s.TEXTURE2),
                      s.bindTexture(s.TEXTURE_2D, r),
                      s.uniform1i(this.U_SAMPLER_BLUR, 2),
                      s.drawArrays(s.TRIANGLES, 0, 6),
                      s.bindBuffer(s.ARRAY_BUFFER, null),
                      s.useProgram(null);
              }
          }
          class bi {
              constructor(t) {
                  this.CONTROLLER = t;
              }
              init(t, e, i, n) {
                  (this.GL = t),
                      this.GL.clearColor(n[0], n[1], n[2], 1),
                      (this.isExtensionAnisotropic = !1),
                      (this.extensionAnisotropicMax = -1),
                      (this.EXTENSION_ANISOTROPIC = this.GL.getExtension("EXT_texture_filter_anisotropic") || this.GL.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.GL.getExtension("WEBKIT_EXT_texture_filter_anisotropic")),
                      this.EXTENSION_ANISOTROPIC && ((this.isExtensionAnisotropic = !0), (this.extensionAnisotropicMax = this.GL.getParameter(this.EXTENSION_ANISOTROPIC.MAX_TEXTURE_MAX_ANISOTROPY_EXT))),
                      (this.FBO_COLOUR = new mi(t)),
                      (this.FBO_BLUR_MASK = new mi(t)),
                      (this.FBO_BLURRED_1 = new mi(t)),
                      (this.FBO_BLURRED_2 = new mi(t)),
                      (this.RENDERER_COLOUR = new Ei(t, e, i)),
                      (this.RENDERER_BLUR_MASK = new fi(t, e, i)),
                      (this.RENDERER_BLURRED_1 = new Oi(t, !0)),
                      (this.RENDERER_BLURRED_2 = new Oi(t, !1)),
                      (this.RENDERER_SCREEN = new Si(t));
              }
              render(t) {
                  const { GL: e, FBO_COLOUR: i, FBO_BLUR_MASK: n, FBO_BLURRED_1: r, FBO_BLURRED_2: s, RENDERER_COLOUR: o, RENDERER_BLUR_MASK: a, RENDERER_BLURRED_1: c, RENDERER_BLURRED_2: l, RENDERER_SCREEN: h } = this,
                      u = this.width,
                      d = this.height,
                      m = 0.5 * u,
                      E = 0.5 * d;
                  e.bindFramebuffer(e.FRAMEBUFFER, i.getFramebuffer()),
                      o.render(t, u, d),
                      e.bindFramebuffer(e.FRAMEBUFFER, null),
                      e.bindFramebuffer(e.FRAMEBUFFER, n.getFramebuffer()),
                      a.render(t, u, d),
                      e.bindFramebuffer(e.FRAMEBUFFER, null),
                      e.bindFramebuffer(e.FRAMEBUFFER, r.getFramebuffer()),
                      c.render(m, E, i.getTexture()),
                      e.bindFramebuffer(e.FRAMEBUFFER, null),
                      e.bindFramebuffer(e.FRAMEBUFFER, s.getFramebuffer()),
                      l.render(m, E, r.getTexture()),
                      e.bindFramebuffer(e.FRAMEBUFFER, null),
                      h.render(u, d, i.getTexture(), n.getTexture(), s.getTexture());
              }
              setSize(t, e) {
                  const i = 0.5 * t,
                      n = 0.5 * e;
                  this.FBO_COLOUR.setSize(t, e), this.FBO_BLUR_MASK.setSize(t, e), this.FBO_BLURRED_1.setSize(i, n), this.FBO_BLURRED_2.setSize(i, n), (this.width = t), (this.height = e);
              }
              getIsExtensionAnisotropic() {
                  return this.isExtensionAnisotropic;
              }
              getExtensionAnisotropic() {
                  return this.EXTENSION_ANISOTROPIC;
              }
              getExtensionAnisotropicMax() {
                  return this.extensionAnisotropicMax;
              }
          }
          function Mi(t, e) {
              const i = Math.sin(t),
                  n = Math.cos(t),
                  s = Math.sin(e),
                  o = Math.cos(e);
              return r.fromValues(s * i, o, s * n);
          }
          class xi {
              constructor(t, e, i, n, r, s, o, a) {
                  (this.HOTSPOT_CONTROLLER = t),
                      (this.CONTAINER = e),
                      (this.ID = r),
                      (this.THETA = s),
                      (this.PHI = o),
                      (this.DIRECTION = a),
                      (this.ANGLE_FADE_START = 0.15),
                      (this.ANGLE_FADE_DELTA = 0.1),
                      (this.ANGLE_FADE_END = this.ANGLE_FADE_START + this.ANGLE_FADE_DELTA),
                      (this.HOTSPOT = document.createElement("div")),
                      (this.HOTSPOT.id = "hotspot_" + r),
                      (this.HOTSPOT.className = "pano-hotspot"),
                      (this.HOTSPOT.style.position = "absolute"),
                      (this.HOTSPOT.style.width = "0px"),
                      (this.HOTSPOT.style.height = "0px"),
                      (this.HOTSPOT.style.userDrag = "none"),
                      (this.HOTSPOT.draggable = !1),
                      this.CONTAINER.appendChild(this.HOTSPOT);
                  const c = document.createElement("IMG");
                  (c.className = "pano-hotspot-image"),
                      (c.src = n),
                      (c.style.width = i[0] + "px"),
                      (c.style.height = i[1] + "px"),
                      (c.style.marginLeft = 0.5 * -i[0] + "px"),
                      (c.style.marginTop = 0.5 * -i[1] + "px"),
                      this.HOTSPOT.appendChild(c),
                      (this.HOTSPOT.onclick = this.onClick.bind(this)),
                      (this.HOTSPOT.onmouseenter = this.onOver.bind(this)),
                      (this.HOTSPOT.onmouseleave = this.onOut.bind(this)),
                      this.enableInteraction();
              }
              tick(t, e, i, n) {
                  const { ANGLE_FADE_START: o, ANGLE_FADE_DELTA: a, ANGLE_FADE_END: c, HOTSPOT: l, DIRECTION: h } = this,
                      u = 0.5 * t,
                      d = 0.5 * e;
                  let m = r.angle(i, h);
                  !0 === Number.isNaN(m) && (m = 0), (m /= Math.PI);
                  let E = 0,
                      f = "none";
                  m < o ? ((E = 1), (f = "initial")) : m < c && ((E = 1 - (m - o) / a), (f = "initial"));
                  const p = s.fromValues(0.5 * -h[0], 0.5 * -h[1], 0.5 * -h[2], 1);
                  s.transformMat4(p, p, n);
                  let g = p[3];
                  g < 0.01 && (g = 0.01), (p[0] /= g), (p[1] /= g), (p[2] /= g);
                  const T = u + u * p[0],
                      R = e - (d + d * p[1]);
                  (l.style.opacity = E), (l.style.display = f), (l.style.transform = `translate3d(${T}px, ${R}px, 0px)`);
              }
              highlight() {
                  this.HOTSPOT.classList.add("highlighted");
              }
              lowlight() {
                  this.HOTSPOT.classList.remove("highlighted");
              }
              onClick(t) {
                  t.preventDefault(), this.HOTSPOT_CONTROLLER.onHotspotClick(this.ID, this.THETA, this.PHI);
              }
              enableInteraction() {
                  this.HOTSPOT.style.pointerEvents = "auto";
              }
              disableInteraction() {
                  this.HOTSPOT.style.pointerEvents = "none";
              }
              onOver(t) {
                  t.preventDefault(), this.HOTSPOT.classList.add("over");
              }
              onOut(t) {
                  t.preventDefault(), this.HOTSPOT.classList.remove("over");
              }
              destroy() {
                  this.CONTAINER.removeChild(this.HOTSPOT), (this.HOTSPOT = null);
              }
              getID() {
                  return this.ID;
              }
              getDirection() {
                  return this.DIRECTION;
              }
              getThetaPhi() {
                  return [this.THETA, this.PHI];
              }
          }
          class Di {
              constructor(t) {
                  this.CONTROLLER = t;
              }
              init(t, e, i) {
                  (this.HOLDER = t), (this.DIMENSIONS = e), (this.URL_ASSET_HOTSPOT = i), (this.HOTSPOTS = []);
              }
              tick(t, e, i, n) {
                  const { HOTSPOTS: r } = this;
                  for (let s = 0; s < r.length; s += 1) r[s].tick(t, e, i, n);
              }
              add(t, e, i) {
                  const n = Mi(e, i);
                  r.normalize(n, n);
                  const s = new xi(this, this.HOLDER, this.DIMENSIONS, this.URL_ASSET_HOTSPOT, t, e, i, n);
                  this.HOTSPOTS.push(s);
              }
              remove(t) {
                  const { HOTSPOTS: e } = this;
                  let i = !1;
                  const n = [];
                  for (let r = 0; r < e.length; r += 1) {
                      const s = e[r];
                      s.getID() === t ? (s.destroy(), (i = !0)) : n.push(s);
                  }
                  return (this.HOTSPOTS = n), i;
              }
              highlight(t) {
                  console.log("HotspotController. highlight " + t);
                  const { HOTSPOTS: e } = this;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i];
                      n.getID() === t ? n.highlight() : n.lowlight();
                  }
              }
              lowlightAll() {
                  const { HOTSPOTS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].lowlight();
              }
              clear() {
                  const { HOTSPOTS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].destroy();
                  this.HOTSPOTS = [];
              }
              onHotspotClick(t, e, i) {
                  this.CONTROLLER.onHotspotClick(t, e, i);
              }
              enableHotspots() {
                  const { HOTSPOTS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].enableInteraction();
              }
              disableHotspots() {
                  const { HOTSPOTS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].disableInteraction();
              }
              getHotspotById(t) {
                  const { HOTSPOTS: e } = this;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i];
                      if (n.getID() === t) return n;
                  }
              }
          }
          class Pi {
              constructor(t, e, i, n, r, s) {
                  (this.ELEMENT_HOLDER_CONTROLLER = t),
                      (this.CONTAINER = e),
                      (this.ID = i),
                      (this.THETA = n),
                      (this.PHI = r),
                      (this.DIRECTION = s),
                      (this.ANGLE_HIDE = 0.5),
                      (this.ELEMENT = document.createElement("div")),
                      (this.ELEMENT.id = "element_holder_" + i),
                      (this.ELEMENT.style.position = "absolute"),
                      (this.ELEMENT.style.width = "0px"),
                      (this.ELEMENT.style.height = "0px"),
                      this.CONTAINER.appendChild(this.ELEMENT);
              }
              tick(t, e, i, n) {
                  const { ANGLE_HIDE: o, ELEMENT: a, DIRECTION: c } = this,
                      l = 0.5 * t,
                      h = 0.5 * e;
                  let u = r.angle(i, c);
                  !0 === Number.isNaN(u) && (u = 0), (u /= Math.PI);
                  let d = 0,
                      m = "none";
                  u < o && ((d = 1), (m = "initial"));
                  const E = s.fromValues(0.5 * -c[0], 0.5 * -c[1], 0.5 * -c[2], 1);
                  s.transformMat4(E, E, n);
                  let f = E[3];
                  f < 0.01 && (f = 0.01), (E[0] /= f), (E[1] /= f), (E[2] /= f);
                  const p = l + l * E[0],
                      g = e - (h + h * E[1]);
                  (a.style.opacity = d), (a.style.display = m), (a.style.transform = `translate3d(${p}px, ${g}px, 0px)`);
              }
              enableInteraction() {
                  this.ELEMENT.style.pointerEvents = "auto";
              }
              disableInteraction() {
                  this.ELEMENT.style.pointerEvents = "none";
              }
              destroy() {
                  this.CONTAINER.removeChild(this.ELEMENT), (this.ELEMENT = null);
              }
              getID() {
                  return this.ID;
              }
              getElement() {
                  return this.ELEMENT;
              }
          }
          class Ui {
              constructor(t) {
                  this.CONTROLLER = t;
              }
              init(t) {
                  (this.HOLDER = t), (this.ELEMENT_HOLDERS = []);
              }
              tick(t, e, i, n) {
                  const { ELEMENT_HOLDERS: r } = this;
                  for (let s = 0; s < r.length; s += 1) r[s].tick(t, e, i, n);
              }
              add(t, e, i) {
                  const n = Mi(e, i);
                  r.normalize(n, n);
                  const s = new Pi(this, this.HOLDER, t, e, i, n);
                  return this.ELEMENT_HOLDERS.push(s), s.getElement();
              }
              remove(t) {
                  const { ELEMENT_HOLDERS: e } = this;
                  let i = !1;
                  const n = [];
                  for (let r = 0; r < e.length; r += 1) {
                      const s = e[r];
                      s.getID() === t ? (s.destroy(), (i = !0)) : n.push(s);
                  }
                  return (this.ELEMENT_HOLDERS = n), i;
              }
              clear() {
                  const { ELEMENT_HOLDERS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].destroy();
                  this.ELEMENT_HOLDERS = [];
              }
              enableElementHolders() {
                  const { ELEMENT_HOLDERS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].enableInteraction();
              }
              disableElementHolders() {
                  const { ELEMENT_HOLDERS: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].disableInteraction();
              }
          }
          var wi = i(113),
              Fi = i.n(wi),
              Bi = i(114),
              Hi = i.n(Bi);
          class Gi {
              constructor(t, e, i, n, r, s, o, a) {
                  (this.GL = t),
                      (this.ID = n),
                      (this.VERTICES = (function (t, e, i) {
                          const n = 0.5 * t[0],
                              r = 0.5 * t[1],
                              s = [-n, -r, 0],
                              o = [n, -r, 0],
                              a = [n, r, 0],
                              c = [-n, r, 0],
                              l = new Float32Array([s[0], s[1], s[2], o[0], o[1], o[2], a[0], a[1], a[2], a[0], a[1], a[2], c[0], c[1], c[2], s[0], s[1], s[2]]);
                          let h;
                          for (let t = 0; t < l.length / 3; t += 1) (h = 3 * t), (l[h] += e[0]), (l[h + 1] += e[1]), (l[h + 2] += e[2]);
                          return l;
                      })(r, s)),
                      (this.VERTEX_TOTAL = this.VERTICES.length / 3),
                      (this.TEXTURE_COORDINATES = ei());
                  const { GL: c } = this;
                  (this.PROGRAM = ti(c, Fi.a, Hi.a)),
                      c.useProgram(this.PROGRAM),
                      (this.U_MATRIX_MVP = c.getUniformLocation(this.PROGRAM, "uMVP")),
                      (this.BUFFER_POSITIONS = c.createBuffer()),
                      (this.A_POSITION = c.getAttribLocation(this.PROGRAM, "aPosition")),
                      c.enableVertexAttribArray(this.A_POSITION),
                      (this.BUFFER_TEXTURE_COORDINATES = c.createBuffer()),
                      (this.A_TEXTURE_COORDINATES = c.getAttribLocation(this.PROGRAM, "aTexcoord")),
                      c.enableVertexAttribArray(this.A_TEXTURE_COORDINATES),
                      c.bindBuffer(c.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      c.bufferData(c.ARRAY_BUFFER, this.TEXTURE_COORDINATES, c.STATIC_DRAW),
                      c.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, c.FLOAT, !1, 0, 0),
                      (this.U_SAMPLER = c.getUniformLocation(this.PROGRAM, "uSampler")),
                      (this.TEXTURE = new oi(c, e, i, this.onTextureLoaded.bind(this), !1)),
                      this.TEXTURE.loadImage(a),
                      c.useProgram(null);
              }
              render(t) {
                  const { GL: e } = this;
                  e.useProgram(this.PROGRAM),
                      e.uniformMatrix4fv(this.U_MATRIX_MVP, !1, t),
                      e.bindBuffer(e.ARRAY_BUFFER, this.BUFFER_POSITIONS),
                      e.bufferData(e.ARRAY_BUFFER, this.VERTICES, e.STATIC_DRAW),
                      e.vertexAttribPointer(this.A_POSITION, 3, e.FLOAT, !1, 0, 0),
                      e.bindBuffer(e.ARRAY_BUFFER, this.BUFFER_TEXTURE_COORDINATES),
                      e.vertexAttribPointer(this.A_TEXTURE_COORDINATES, 2, e.FLOAT, !1, 0, 0),
                      e.activeTexture(e.TEXTURE0),
                      e.uniform1i(this.U_SAMPLER, 0),
                      e.bindTexture(e.TEXTURE_2D, this.TEXTURE.getTexture()),
                      e.drawArrays(e.TRIANGLES, 0, this.VERTEX_TOTAL),
                      e.bindBuffer(e.ARRAY_BUFFER, null),
                      e.useProgram(null);
              }
              onTextureLoaded(t, e) {
                  console.log("Sprite. onTextureLoaded. " + e);
              }
              destroy() {}
          }
          class ki {
              constructor(t) {
                  this.CONTROLLER = t;
              }
              init(t, e) {
                  (this.GL = t), (this.RENDER_CONTROLLER = e), (this.COLOUR_BACKGROUND = [1, 1, 1]), (this.SPRITES = []);
              }
              tick() {}
              add(t, e, i, n, r) {
                  this.SPRITES.push(new Gi(this.GL, this.RENDER_CONTROLLER, this.COLOUR_BACKGROUND, t, e, i, n, r));
              }
              clear() {
                  const { SPRITES: t } = this;
                  for (let e = 0; e < t.length; e += 1) t[e].destroy();
                  this.SPRITES = [];
              }
              getSpriteTotal() {
                  return this.SPRITES.length;
              }
              getSprites() {
                  return this.SPRITES;
              }
          }
          class Yi {
              constructor(t) {
                  (this.fps = 0),
                      (this.timeStartPreviousFrame = 0),
                      (this.timeStartPreviousSample = 0),
                      (this.frameCount = 0),
                      (this.FRAME_DURATION_EXPECTED_MS = 1 / 60),
                      (this.HOLDER = document.createElement("div")),
                      (this.HOLDER.id = "debug_performance"),
                      (this.HOLDER.style.position = "absolute"),
                      (this.HOLDER.style.bottom = "10px"),
                      (this.HOLDER.style.left = "10px"),
                      (this.HOLDER.style.fontFamily = "Arial, Helvetica, sans-serif"),
                      (this.HOLDER.style.fontSize = "12px"),
                      t.appendChild(this.HOLDER);
              }
              tick(t, e, i) {
                  (this.frameCount += 1), t > this.timeStartPreviousSample + 1e3 && ((this.fps = this.frameCount), (this.timeStartPreviousSample = t), (this.frameCount = 0));
                  const n = (t - this.timeStartPreviousFrame).toFixed(1),
                      r = (e - t).toFixed(1),
                      s = (i - e).toFixed(1);
                  (this.HOLDER.innerHTML = `${n}ms ${this.fps}Hz.\n\t\t\tTick ${r}ms. Render ${s}ms`), (this.timeStartPreviousFrame = t);
              }
          }
          class Xi {
              constructor(t) {
                  (this.PERFORMANCE = new Yi(t)),
                      (this.QUARTER = document.createElement("div")),
                      (this.QUARTER.id = "debug_quarter"),
                      (this.QUARTER.style.position = "absolute"),
                      (this.QUARTER.style.left = 0),
                      (this.QUARTER.style.top = "50%"),
                      (this.QUARTER.style.width = "50%"),
                      (this.QUARTER.style.height = "50%"),
                      (this.QUARTER.style.background = "#ffffff"),
                      (this.QUARTER.style.opacity = 0.2),
                      (this.QUARTER.style.pointerEvents = "none"),
                      t.appendChild(this.QUARTER);
              }
              tick(t, e, i) {
                  this.PERFORMANCE.tick(t, e, i);
              }
          }
          class Vi {
              constructor(t) {
                  (this.CONTAINER = t.container),
                      (this.CALLBACK_HOTSPOT_CLICK = t.callbackHotspotClick),
                      (this.DEVICE_PIXEL_RATIO = window.devicePixelRatio || 1),
                      (this.IS_DEBUG = !!t.isDebug && t.isDebug),
                      !0 === this.IS_DEBUG && (console.log("PikViewerPano 0.7.0. Created with:"), console.log(t));
                  const e = t.cubeDetail ? t.cubeDetail : 4,
                      i = t.cubeCullAngle ? t.cubeCullAngle : 0.4 * Math.PI,
                      n = t.colourClear ? t.colourClear : [1, 1, 1],
                      r = t.colourBackground ? t.colourBackground : [1, 1, 1],
                      s = t.colourBackgroundInitialDetail ? t.colourBackgroundInitialDetail : [1, 1, 1];
                  (this.CANVAS = document.createElement("canvas")),
                      this.CONTAINER.appendChild(this.CANVAS),
                      (this.GL = this.CANVAS.getContext("webgl", { alpha: !1, depth: !1, antialias: !0 })),
                      this.GL || (this.log("webgl context not found, trying experimental-webgl"), (this.GL = this.CANVAS.getContext("experimental-webgl", { alpha: !1, antialias: !0 }))),
                      (this.CAMERA_CONTROLLER = new Ke()),
                      (this.CUBE_CONTROLLER = new di(this)),
                      (this.RENDER_CONTROLLER = new bi(this)),
                      (this.HOTSPOT_CONTROLLER = new Di(this)),
                      (this.ELEMENT_HOLDER_CONTROLLER = new Ui(this)),
                      (this.SPRITE_CONTROLLER = new ki(this)),
                      this.RENDER_CONTROLLER.init(this.GL, this.CUBE_CONTROLLER, this.SPRITE_CONTROLLER, n),
                      this.CAMERA_CONTROLLER.init({}),
                      this.CUBE_CONTROLLER.init(this.GL, this.RENDER_CONTROLLER, e, i, r, s),
                      this.HOTSPOT_CONTROLLER.init(t.containerHotspot, t.dimensionsHotspot, t.pathAssetHotspot),
                      this.ELEMENT_HOLDER_CONTROLLER.init(t.containerElementHolder),
                      this.SPRITE_CONTROLLER.init(this.GL, this.RENDER_CONTROLLER),
                      (this.INTERACTION_SURFACE = new Je(this, this.CANVAS)),
                      !0 === this.IS_DEBUG && (this.log("isDebug. Debug display is enabled."), (this.DEBUG_CONTROLLER = new Xi(this.CONTAINER)), (this.CANVAS.onclick = this.onCanvasDebugClick.bind(this))),
                      this.log(`EXT_texture_filter_anisotropic. ${this.RENDER_CONTROLLER.getIsExtensionAnisotropic()}. Max ` + this.RENDER_CONTROLLER.getExtensionAnisotropicMax()),
                      (this.clientWidth = -1),
                      (this.clientHeight = -1),
                      (this.width = -1),
                      (this.height = -1),
                      void 0 !== t.pathTilesInitial && (this.tick(), this.setPathTiles(t.pathTilesInitial)),
                      (this.overrideRenderThisFrame = !1);
              }
              tick() {
                  const { CONTAINER: t, CAMERA_CONTROLLER: e, CUBE_CONTROLLER: i } = this;
                  let n = !1;
                  const r = performance.now(),
                      s = t.clientWidth,
                      o = t.clientHeight;
                  (s === this.clientWidth && o === this.clientHeight) || (this.setSize(s, o), (n = !0)), e.tick(), !0 === e.getHasChangedThisFrame() && (n = !0);
                  const a = e.getMatrixMVP(),
                      c = e.getDirectionNormalised(),
                      l = e.getDirectionNormalisedInverted();
                  i.tick(l),
                      !0 === i.getHasChangedThisFrame() && (n = !0),
                      !0 === this.overrideRenderThisFrame && ((n = !0), (this.overrideRenderThisFrame = !1)),
                      !0 === n && (this.HOTSPOT_CONTROLLER.tick(this.clientWidth, this.clientHeight, c, a), this.ELEMENT_HOLDER_CONTROLLER.tick(this.clientWidth, this.clientHeight, c, a), this.SPRITE_CONTROLLER.tick());
                  const h = performance.now();
                  !0 === n && this.RENDER_CONTROLLER.render(a);
                  const u = performance.now();
                  !0 === this.IS_DEBUG && this.DEBUG_CONTROLLER.tick(r, h, u);
              }
              setPathTiles(t) {
                  t !== this.pathTiles
                      ? ((this.pathTiles = t), this.log("setPathTiles:\n" + this.pathTiles), this.CUBE_CONTROLLER.setPathTiles(t, this.CAMERA_CONTROLLER.getDirectionNormalised()))
                      : this.log("setPathTiles. Ignoring as identical to current:\n" + this.pathTiles);
              }
              addHotspot(t, e, i) {
                  this.log(`addHotspot '${t}' at ${e} ${i}`), this.HOTSPOT_CONTROLLER.add(t, e, i), (this.overrideRenderThisFrame = !0);
              }
              removeHotspot(t) {
                  this.log(`removeHotspot '${t}'`);
                  !1 === this.HOTSPOT_CONTROLLER.remove(t) && this.log(` - Hotspot ${t} not found, abandoning`), (this.overrideRenderThisFrame = !0);
              }
              clearHotspots() {
                  this.log("clearHotspots"), this.HOTSPOT_CONTROLLER.clear(), (this.overrideRenderThisFrame = !0);
              }
              focusHotspot(t) {
                  this.log(`focusHotspot '${t}'`);
                  const e = this.HOTSPOT_CONTROLLER.getHotspotById(t);
                  if (void 0 === e) return void this.log(`focusHotspot. Hotspot '${t}' not found, abandoning`);
                  const i = e.getThetaPhi();
                  this.CAMERA_CONTROLLER.setRotationTarget(i[0], i[1]), (this.overrideRenderThisFrame = !0);
              }
              onHotspotClick(t, e, i) {
                  this.log(`onHotspotClick '${t}' ${e},${i}`), this.CALLBACK_HOTSPOT_CLICK(t, e, i);
              }
              highlightHotspot(t) {
                  this.log(`highlightHotspot '${t}'`), this.HOTSPOT_CONTROLLER.highlight(t);
              }
              lowlightHotspots() {
                  this.log("lowlightHotspots"), this.HOTSPOT_CONTROLLER.lowlightAll();
              }
              addElementHolder(t, e, i) {
                  return this.log(`addElementHolder ${t} ${e} ${i}`), (this.overrideRenderThisFrame = !0), this.ELEMENT_HOLDER_CONTROLLER.add(t, e, i);
              }
              removeElementHolder(t) {
                  this.log("removeElementHolder " + t);
                  !1 === this.ELEMENT_HOLDER_CONTROLLER.remove(t) && this.log(` - ElementHolder ${t} not found, abandoning`), (this.overrideRenderThisFrame = !0);
              }
              clearElementHolders() {
                  this.log("clearElementHolders"), this.ELEMENT_HOLDER_CONTROLLER.clear(), (this.overrideRenderThisFrame = !0);
              }
              addSprite(t, e, i, n, r) {
                  this.log(`addSprite [${e}] [${i}] [${n}] ${r}`), this.SPRITE_CONTROLLER.add(t, e, i, n, r), (this.overrideRenderThisFrame = !0);
              }
              clearSprites() {
                  this.log("clearSprites"), this.SPRITE_CONTROLLER.clear(), (this.overrideRenderThisFrame = !0);
              }
              setZoom(t) {
                  this.log("setZoom " + t), this.CAMERA_CONTROLLER.setZoom(t);
              }
              setZoomTarget(t) {
                  this.log("setZoomTarget " + t), this.CAMERA_CONTROLLER.setZoomTarget(t);
              }
              zoomIn() {
                  this.log("zoomIn"), this.CAMERA_CONTROLLER.zoomIn();
              }
              zoomOut() {
                  this.log("zoomOut"), this.CAMERA_CONTROLLER.zoomOut();
              }
              onInteractionZoom(t) {
                  t < 0 ? this.CAMERA_CONTROLLER.zoomIn() : this.CAMERA_CONTROLLER.zoomOut();
              }
              rotateHorizontal(t) {
                  this.CAMERA_CONTROLLER.rotateHorizontal(t);
              }
              rotateVertical(t) {
                  this.CAMERA_CONTROLLER.rotateVertical(t);
              }
              setRotation(t, e) {
                  this.CAMERA_CONTROLLER.setRotation(t, e);
              }
              setRotationTarget(t, e) {
                  this.CAMERA_CONTROLLER.setRotationTarget(t, e);
              }
              getRotation() {
                  const { CAMERA_CONTROLLER: t } = this;
                  return { theta: t.getRotationTheta(), phi: t.getRotationPhi() };
              }
              setRotationLimitsTheta(t, e) {
                  this.log(`setRotationLimitsTheta ${t} ${e}`), this.CAMERA_CONTROLLER.setRotationLimitsTheta(t, e);
              }
              clearRotationLimitsTheta() {
                  this.log("clearRotationLimitsTheta"), this.CAMERA_CONTROLLER.clearRotationLimitsTheta();
              }
              setRotationLimitsPhi(t, e) {
                  this.log(`setRotationLimitsPhi ${t} ${e}`), this.CAMERA_CONTROLLER.setRotationLimitsPhi(t, e);
              }
              clearRotationLimitsPhi() {
                  this.log("clearRotationLimitsPhi"), this.CAMERA_CONTROLLER.clearRotationLimitsPhi();
              }
              getCanvas() {
                  return this.CANVAS;
              }
              enableInteraction() {
                  this.log("enableInteraction"), this.INTERACTION_SURFACE.enable();
              }
              disableInteraction() {
                  this.log("disableInteraction"), this.INTERACTION_SURFACE.disable();
              }
              onInteractionStart() {
                  this.HOTSPOT_CONTROLLER.disableHotspots(), this.ELEMENT_HOLDER_CONTROLLER.disableElementHolders();
              }
              onInteractionEnd() {
                  this.HOTSPOT_CONTROLLER.enableHotspots(), this.ELEMENT_HOLDER_CONTROLLER.enableElementHolders();
              }
              devSetExternalView(t) {
                  this.log("devSetExternalView " + t), this.CAMERA_CONTROLLER.setExternalView(t);
              }
              onCanvasDebugClick(t) {
                  t.preventDefault(), this.logCameraInfo();
              }
              logCameraInfo() {
                  const { CAMERA_CONTROLLER: t } = this,
                      e = t.getRotationTheta(),
                      i = t.getRotationPhi();
                  console.log("PikViewerPano. logCameraInfo:"),
                      console.log(` - Client             ${this.clientWidth} ${this.clientHeight} px`),
                      console.log(" - Device Pixel Ratio " + this.DEVICE_PIXEL_RATIO),
                      console.log(` - Canvas             ${this.width} ${this.height} px`),
                      console.log(` - Camera. Theta, Phi ${e}, ${i}`);
              }
              setSize(t, e) {
                  const { CANVAS: i, CAMERA_CONTROLLER: n, DEVICE_PIXEL_RATIO: r } = this;
                  (this.clientWidth = t),
                      (this.clientHeight = e),
                      (this.width = t * r),
                      (this.height = e * r),
                      (i.style.width = t + "px"),
                      (i.style.height = e + "px"),
                      (i.width = this.width),
                      (i.height = this.height),
                      n.setSize(t, e),
                      this.RENDER_CONTROLLER.setSize(this.width, this.height);
              }
              log(t) {
                  !0 === this.IS_DEBUG && console.log("PikViewerPano. " + t);
              }
              getScreenshot(t, e) {
                  console.log("PikViewerPano. getScreenshot");
                  const i = this.CAMERA_CONTROLLER.getMatrixMVP();
                  this.RENDER_CONTROLLER.render(i);
                  const n = this.CANVAS.toDataURL("image/" + t, e),
                      r = document.createElement("img");
                  return (r.src = n), this.CONTAINER.appendChild(r), n;
              }
          }
          class ji {
              constructor(t) {
                  (this.CONTROLLER = new Vi(t)), this.tick();
              }
              tick() {
                  requestAnimationFrame(this.tick.bind(this)), this.CONTROLLER.tick();
              }
              setPathTiles(t) {
                  this.CONTROLLER.setPathTiles(t);
              }
              addHotspot(t, e, i) {
                  this.CONTROLLER.addHotspot(t, e, i);
              }
              removeHotspot(t) {
                  this.CONTROLLER.removeHotspot(t);
              }
              clearHotspots() {
                  this.CONTROLLER.clearHotspots();
              }
              focusHotspot(t) {
                  this.CONTROLLER.focusHotspot(t);
              }
              highlightHotspot(t) {
                  this.CONTROLLER.highlightHotspot(t);
              }
              lowlightHotspots() {
                  this.CONTROLLER.lowlightHotspots();
              }
              addElementHolder(t, e, i) {
                  return this.CONTROLLER.addElementHolder(t, e, i);
              }
              removeElementHolder(t) {
                  this.CONTROLLER.removeElementHolder(t);
              }
              clearElementHolders() {
                  this.CONTROLLER.clearElementHolders();
              }
              addSprite(t, e, i, n, r) {
                  this.CONTROLLER.addSprite(t, e, i, n, r);
              }
              clearSprites() {
                  this.CONTROLLER.clearSprites();
              }
              rotateHorizontal(t) {
                  this.CONTROLLER.rotateHorizontal(t);
              }
              rotateVertical(t) {
                  this.CONTROLLER.rotateVertical(t);
              }
              setRotation(t, e) {
                  this.CONTROLLER.setRotation(t, e);
              }
              setRotationTarget(t, e) {
                  this.CONTROLLER.setRotationTarget(t, e);
              }
              getRotation() {
                  return this.CONTROLLER.getRotation();
              }
              setZoom(t) {
                  this.CONTROLLER.setZoom(t);
              }
              setZoomTarget(t) {
                  this.CONTROLLER.setZoomTarget(t);
              }
              zoomIn() {
                  this.CONTROLLER.zoomIn();
              }
              zoomOut() {
                  this.CONTROLLER.zoomOut();
              }
              setRotationLimitsTheta(t, e) {
                  this.CONTROLLER.setRotationLimitsTheta(t, e);
              }
              clearRotationLimitsTheta() {
                  this.CONTROLLER.clearRotationLimitsTheta();
              }
              setRotationLimitsPhi(t, e) {
                  this.CONTROLLER.setRotationLimitsPhi(t, e);
              }
              clearRotationLimitsPhi() {
                  this.CONTROLLER.clearRotationLimitsPhi();
              }
              enableInteraction() {
                  this.CONTROLLER.enableInteraction();
              }
              disableInteraction() {
                  this.CONTROLLER.disableInteraction();
              }
              onInteractionStart() {
                  this.CONTROLLER.onInteractionStart();
              }
              onInteractionEnd() {
                  this.CONTROLLER.onInteractionEnd();
              }
              getCanvas() {
                  return this.CONTROLLER.getCanvas();
              }
              devLogCameraInfo(t) {
                  this.CONTROLLER.logCameraInfo(t);
              }
              devSetExternalView(t) {
                  this.CONTROLLER.devSetExternalView(t);
              }
              getScreenshot(t, e) {
                  return this.CONTROLLER.getScreenshot(t, e);
              }
          }
          class $i {
              constructor() {
                  this.IS_AVAILABLE_FULLSCREEN = !0;
                  const t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
                      e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                  !0 === t && !0 === e && (this.IS_AVAILABLE_FULLSCREEN = !1);
              }
              isAvailableFullscreen() {
                  return this.IS_AVAILABLE_FULLSCREEN;
              }
          }
          class zi {
              constructor(t, e, i, n) {
                  (this.CONFIGURATOR = t),
                      (this.CONTAINER_UI = i),
                      (this.ELEMENT_FULLSCREEN = n),
                      (this.HIDE_MENU = e.hideMenu || !1),
                      n || (this.HIDE_MENU = !1),
                      (this.BUTTON_HOLDER = document.createElement("div")),
                      (this.BUTTON_HOLDER.className = "fullscreen-button-holder"),
                      this.CONTAINER_UI.appendChild(this.BUTTON_HOLDER),
                      (this.BUTTON_OPEN = document.createElement("div")),
                      (this.BUTTON_OPEN.className = "fullscreen-button-open"),
                      this.BUTTON_HOLDER.appendChild(this.BUTTON_OPEN),
                      (this.BUTTON_CLOSE = document.createElement("div")),
                      (this.BUTTON_CLOSE.className = "fullscreen-button-close"),
                      this.BUTTON_HOLDER.appendChild(this.BUTTON_CLOSE),
                      (this.BUTTON_HOLDER.onclick = this.toggleFullScreen.bind(this)),
                      document.addEventListener("fullscreenchange", this.onFullScreenChanged.bind(this)),
                      document.addEventListener("mozfullscreenchange", this.onFullScreenChanged.bind(this)),
                      document.addEventListener("webkitfullscreenchange", this.onFullScreenChanged.bind(this)),
                      document.addEventListener("msfullscreenchange", this.onFullScreenChanged.bind(this)),
                      this.showButtonOpen();
              }
              showButtonOpen() {
                  this.BUTTON_OPEN.classList.add("active"), this.BUTTON_CLOSE.classList.remove("active");
              }
              showButtonClose() {
                  this.BUTTON_OPEN.classList.remove("active"), this.BUTTON_CLOSE.classList.add("active");
              }
              onFullScreenChanged(t) {
                  t.preventDefault();
                  document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                      ? (this.showButtonClose(), this.CONFIGURATOR.onEnterFullscreen())
                      : (this.showButtonOpen(), this.CONFIGURATOR.onLeaveFullscreen());
              }
              toggleFullScreen() {
                  const t = window.document,
                      e = this.ELEMENT_FULLSCREEN,
                      i = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement,
                      n = e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen || e.msRequestFullscreen,
                      r = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
                  i ? (!0 === this.HIDE_MENU && this.showMenu(), r.call(t)) : (!0 === this.HIDE_MENU && this.hideMenu(), n.call(e));
              }
              hideMenu() {
                  this.ELEMENT_FULLSCREEN.classList.add("full-screen");
              }
              showMenu() {
                  this.ELEMENT_FULLSCREEN.classList.remove("full-screen");
              }
          }
          class Wi {
              constructor(t, e, i, n) {
                  this.CONFIGURATOR = t;
                  const r = e || {};
                  this.reset(), (this.name = e.safe_name), (this.filterCategoryName = i.name), (this.filterCategory = i), n.registerFilter(e.name, this.name), this.set(r, {});
              }
              activate(t) {
                  if ((this.CONFIGURATOR.log(`Filter. activate. '${this.filterCategoryName}' '${this.name}'`), !0 === t));
                  else {
                      for (const t in this.filterCategory.filters) {
                          if (!this.filterCategory.filters.hasOwnProperty(t)) continue;
                          const e = this.filterCategory.filters[t];
                          e !== this && e.deactivate();
                      }
                      (this.active = !0),
                          (this.filterCategory.currentActive = this),
                          this.updateFilters(),
                          void 0 !== this.el &&
                              (Array.isArray(this.el)
                                  ? this.el.forEach((t) => {
                                        t.classList.add("active");
                                    })
                                  : this.el.classList.add("active"));
                  }
              }
              deactivate() {
                  this.active &&
                      (this.CONFIGURATOR.log(`Filter. '${this.filterCategoryName}' '${this.name}' deactivating`),
                      (this.filterCategory.currentActive = !1),
                      (this.active = !1),
                      this.updateFilters(),
                      void 0 !== this.el &&
                          (Array.isArray(this.el)
                              ? this.el.forEach((t) => {
                                    t.classList.remove("active");
                                })
                              : this.el.classList.remove("active")));
              }
              triggerReactivate() {
                  for (const t in this.filterCategory.filters) {
                      if (!this.filterCategory.filters.hasOwnProperty(t)) continue;
                      this.filterCategory.filters[t].reactive = !1;
                  }
                  (this.filterCategory.isReactiveSet = !0), (this.filterCategory.currentReactive = this), (this.reactive = !0);
              }
              setListener() {}
              removeListener() {}
              addItem() {}
              getOption() {}
              setOption() {}
              updateFilters(t = "reactive") {
                  return (
                      this.hideInvalidatedFilters({ hideMode: "disabled" }),
                      "reactive" === t && this.filterCategory.reactive.length > 0
                          ? (this.CONFIGURATOR.log(`Filter. updateFilter. ${this.filterCategoryName} ${this.name} is reactive. Updating ${this.filterCategory.reactive.length} Items`),
                            this.filterCategory.reactive.forEach((t) => {
                                t.filterUpdate();
                            }))
                          : ("reactive" === t && 0 !== this.filterCategory.reactive.length) ||
                            (this.CONFIGURATOR.log(`Filter. updateFilter. ${this.filterCategoryName} ${this.name} is active. Updating ${this.filterCategory.active.length} Items`),
                            this.filterCategory.active.forEach((t) => {
                                t.filterUpdate();
                            })),
                      this
                  );
              }
              getFiltersWhichMayLoseValidity(t) {
                  const e = [];
                  return (
                      this.filterCategory.active.forEach((t) => {
                          t.filters.map((t) => {
                              -1 === e.indexOf(t) && e.push(t);
                          });
                      }),
                      e
                  );
              }
              hideInvalidatedFilters(t) {
                  (t = t || {}).hideMode && t.hideMode;
                  const e = t.groupsToCheck ? t.groupsToCheck : [],
                      i = t.groupsToExclude ? t.groupsToExclude : [];
                  let n = t.layersToCheck ? t.layersToCheck : [];
                  const r = t.layersToExclude ? t.layersToExclude : [];
                  t.filterMode && t.filterMode;
                  if (e.length);
                  else if (i.length) {
                      this.getFiltersWhichMayLoseValidity().forEach((t) => {
                          e.push(t.filterCategoryName);
                      });
                  }
                  n.length || r.length || (n = ["Feature", "Floors", "Walls", "Worktops", "Handles_Base"]);
              }
              countValidItems() {
                  return this.allNotifiables.reduce((t, e) => t + !e.visibility, 0);
              }
              countValidItemsPerLayer() {
                  const t = {};
                  return (
                      this.allNotifiables.forEach((e) => {
                          const i = e.layer.attributes.file_path,
                              n = Number(e.filterCheck().active);
                          t[i] ? (t[i] += n) : (t[i] = n);
                      }),
                      t
                  );
              }
              updateFilterMatchCount() {
                  const t = this.layers.reduce((t, e) => t + !e.hidden, 0);
                  return (this.itemsMatch = t), t;
              }
              set(t, e, i) {
                  let n;
                  "object" == typeof t ? (n = t) : ((n = {})[t] = e);
                  const r = this.attributes;
                  for (const t in n) r[t] = n[t];
                  this.get("disabled") && (this.disabled = !0);
              }
              get(t) {
                  return this.attributes[t];
              }
              reset() {
                  (this.type = !1),
                      (this.image = new Image()),
                      (this.itemsMatch = 0),
                      (this.active = !1),
                      (this.disabled = !1),
                      (this.currentActive = !1),
                      (this.reactive = !1),
                      (this.options = {}),
                      (this.allNotifiables = []),
                      (this.attributes = {});
              }
          }
          class Zi {
              constructor(t, e) {
                  (this.CONFIGURATOR = t), this.reset();
                  const i = this;
                  e.forEach((t) => {
                      i.registerFilterCategory(t, t.filters);
                  });
              }
              registerFilterCategory(t, e) {
                  const i = this;
                  this.byGroup[t.safe_name] = { name: t.name, filters: {}, items: [], active: [], reactive: [], render_as: t.render_as };
                  const n = this.byGroup[t.safe_name];
                  e.forEach((t) => {
                      (t = new Wi(this.CONFIGURATOR, t, n, i)), i.filters.push(t), (n.filters[t.name] = t);
                  });
              }
              set(t, e, i) {
                  return (i = i || "active"), (e = this.byGroup[t].filters[e]).activate(i), e;
              }
              get(t) {
                  return this.filters[this.byName[t]] || !1;
              }
              getFiltersByCategory(t) {
                  if (!t) return !1;
                  const e = [],
                      i = this.byGroup[t];
                  for (const t in i.filters) e.push(i.filters[t]);
                  return { name: i.name, filters: e, items: [] } || !1;
              }
              registerFilter(t, e) {
                  const i = this.filterByName[t];
                  i ? i.push(e) : (this.filterByName[t] = [e]);
              }
              updateAll() {
                  this.filters.forEach(function (t) {
                      t.itemsMatch < 1 || t.el;
                  });
              }
              on(t, e, i) {
                  const n = this.byGroup[t.group];
                  if (void 0 !== n) {
                      if (t.options.length) {
                          const r = i.filter.indexOf(t);
                          i.filter[r].group = n;
                          for (let s = 0, o = t.options.length; s < o; s += 1) {
                              const o = n.filters[t.options[s].toLowerCase()];
                              o && (o.setListener(e, i), o.allNotifiables.push(i)),
                                  (o.itemsMatch += 1),
                                  i.filters.push(o),
                                  i.filter[r].filters || (i.filter[r].filters = []),
                                  i.filter[r].filters.push(o),
                                  n.visible || (n.visible = 0),
                                  n[t.type].push(i),
                                  n.items.push(i),
                                  (n.visible += 1);
                          }
                      }
                  } else console.log(`Missing Filter Group for ${t.group} on ${i.get("name")}`);
              }
              off(t, e, i) {
                  const n = this.byName[t];
                  void 0 === n || (t = this.filters[n]), t.removeListener(e, i);
              }
              reset() {
                  (this.filters = []), (this.byName = {}), (this.byGroup = {}), (this.filterByName = {});
              }
          }
          class qi {
              constructor(t, e = {}, i = {}) {
                  (this.CONFIGURATOR = t), this.reset();
                  const n = e;
                  i.layer && (this.layer = i.layer), this.set(n, i), this.set("hidden", !1), (this.disabled = !1), (this.hidden = !1);
                  const r = this.CONFIGURATOR.getWebp() ? ".webp" : ".jpg";
                  this.set("thumbnail", this.CONFIGURATOR.getDynamicThumbUrl() + this.get("image_path") + r);
              }
              set(t, e) {
                  let i;
                  "object" == typeof t ? (i = t) : ((i = {})[t] = e), i.filter && i.filter.length && ((this.filter = i.filter), delete i.filter);
                  const n = this.attributes;
                  for (const t in i) n[t] = i[t];
                  this.get("disabled") && (this.disabled = !0);
              }
              get(t) {
                  return this.attributes[t];
              }
              registerFilters() {
                  if (!this.filter || !this.filter.length) return !1;
                  for (let t = this.filter.length, e = 0; e < t; e += 1) {
                      const t = this.filter[e];
                      this.layer.filters.on(t, t.type, this);
                  }
              }
              parseFilters() {
                  if (!this.filters || !this.filters.length) return !1;
                  const t = [];
                  for (let e = this.filters.length, i = 0; i < e; i += 1) {
                      const e = this.filters[i],
                          n = { name: e.filterCategoryName, value: e.attributes.safe_name };
                      e.attributes.thumbnail && ("#" === e.attributes.thumbnail.charAt(0) ? (n.colour = e.attributes.thumbnail) : (n.thumbnail = this.CONFIGURATOR.getStaticImageUrl() + e.attributes.thumbnail)), t.push(n);
                  }
                  return t;
              }
              filterUpdate() {
                  if (this.disabled) return !1;
                  const t = this.filterCheck();
                  return this.checkIfAlternativeNeeded(t.reactive, "reactive"), this.toggleVisible(t.status, t.filter), t.status;
              }
              checkIfAlternativeNeeded(t, e) {
                  if ((this.active && !t) || this.disabled) {
                      this.CONFIGURATOR.log(`Item. Index:${this.attributes.index} Id:${this.attributes.id} checkIfAlternativeNeeded ${t} ${e}`), this.CONFIGURATOR.log(` - Looking for alternative ${this.layer.get("name")} found.`);
                      const i = this.findAlternative(e);
                      i ? i.setActive() : this.CONFIGURATOR.log(` - No valid alternative ${this.layer.get("name")} found.`);
                  }
              }
              findAlternative(t) {
                  this.CONFIGURATOR.log(`Item. Index:${this.index} Id:${this.id} findAlternative ${t}`);
                  const e = t || "reactive";
                  let i, n, r, s;
                  if (((r = this.checkForValidSibling(e)), r)) return r;
                  if (this.layer.previousActive) {
                      const t = this.layer.previousActive;
                      if (t.filterCheck()[e]) return t;
                      if (((r = t.checkForValidSibling(e)), r)) return r;
                  }
                  for (i = 0, n = this.layer.items.length; i < n; i += 1) {
                      const t = this.layer.items[i];
                      if (t.filterCheck()[e] && (void 0 === s && (s = t), t.attributes.name === this.attributes.name)) return t;
                  }
                  return void 0 !== s && s;
              }
              checkForValidSibling(t) {
                  if (this.siblings.length) for (let e = 0, i = this.siblings.length; e < i; e += 1) if (this.siblings[e].filterCheck()[t]) return this.siblings[e];
                  return !1;
              }
              filterCheck() {
                  let t = !0,
                      e = !0,
                      i = !1;
                  return (
                      this.filter.forEach((n) => {
                          "reactive" === n.type && n.group.isReactiveSet
                              ? -1 === n.options.indexOf(n.group.currentReactive.name)
                                  ? (e = !1)
                                  : (i = !0)
                              : n.group.currentActive && -1 === n.options.indexOf(n.group.currentActive.name)
                              ? (t = !1)
                              : (i = !0);
                      }),
                      { active: t, reactive: e, status: t && e, filter: i }
                  );
              }
              registerSibling(t) {
                  (this.sibling = t), t.siblings.push(this);
              }
              layerUpdate() {}
              setActive(t = {}) {
                  const e = t.linked || !1,
                      i = t.resetting || !1;
                  return e && this.layer.events.linked.length && this.layer.events.linked[this.get("index")].setActive(), (this.active && !i) || ((this.active = !0), this.layer.newItemActive(this)), this;
              }
              clearActive() {
                  this.active = !1;
              }
              toggleActive(t) {
                  !0 === t && this.set("active", t);
              }
              toggleVisible(t, e) {
                  this.visibility !== t && this.visible && ((this.visibility = t), !0 === t ? this.show() : this.hide()),
                      e
                          ? this.filters.map((t) => {
                                t.itemsMatch += 1;
                            })
                          : this.filters.map((t) => {
                                t.itemsMatch -= 1;
                            });
              }
              show() {
                  (this.hidden = !1), this.sibling && this.sibling.set("hidden", !1), this.set("hidden", !1);
              }
              hide() {
                  (this.hidden = !0), this.sibling && this.sibling.set("hidden", !0), this.set("hidden", !0);
              }
              getImage() {
                  return this.get("thumbnail");
              }
              reset() {
                  (this.attributes = {}), (this.active = !1), (this.visible = !0), (this.visibility = !0), (this.loadedThumbs = !1), (this.siblings = []), (this.filters = []), (this.menuEl = []);
              }
          }
          function Qi(t) {
              const e = t[0],
                  i = t[1],
                  n = t[2],
                  r = Math.max(e, i, n),
                  s = Math.min(e, i, n);
              let o, a;
              const c = (r + s) / 2;
              if (r === s) (o = 0), (a = 0);
              else {
                  const t = r - s;
                  switch (((a = c > 0.5 ? t / (2 - r - s) : t / (r + s)), r)) {
                      case e:
                          o = (i - n) / t + (i < n ? 6 : 0);
                          break;
                      case i:
                          o = (n - e) / t + 2;
                          break;
                      case n:
                          o = (e - i) / t + 4;
                  }
                  o /= 6;
              }
              return [o, a, c];
          }
          function Ki(t, e) {
              const i = t[0];
              let n = -1,
                  r = 1 / 0;
              for (let t = 0; t < e.length; t += 1) {
                  const s = e[t][0],
                      o = Math.abs(i - s);
                  o < r && ((r = o), (n = t));
              }
              return n;
          }
          function Ji(t) {
              const e = t.split(" ");
              for (let t = 0; t < e.length; t += 1) e[t] /= 256;
              return e;
          }
          class tn {
              constructor(t) {
                  (this.CONFIGURATOR = t), (this.LAYER_TYPE = "LAYER_DEFAULT"), (this.attributes = {}), (this.events = { range: [], events: [], linked: [] }), (this.options = {});
              }
              init() {
                  this.reset();
              }
              get length() {
                  return this.items.length;
              }
              create(t, e) {
                  const i = t;
                  this.init(),
                      "NULL" === i.layer_group && (i.layer_group = null),
                      i.markers && i.markers.length && (i.marker = i.markers[0]),
                      this.set(i, e),
                      (this.type = this.get("type")),
                      (this.filters = this.CONFIGURATOR.getFilters() || !1),
                      this.get("render_into")
                          ? (this.parentComponent = this.CONFIGURATOR.get(this.get("render_into")))
                          : this.get("layer_group") &&
                            ((this.layerGroup = this.CONFIGURATOR.getLayerGroup({ name: this.get("layer_group"), safeName: this.get("layer_group"), order: this.get("order"), container: !!e.menu && e.menu.componentContainer })),
                            (this.parentComponent = this.layerGroup),
                            this.layerGroup.addLayer(this)),
                      (this.panoViewer = this.CONFIGURATOR.panoViewer);
                  const n = this.CONFIGURATOR.getCameraRotationLimits();
                  n.limit_camera_rotation > 0 && this.panoViewer.setRotationLimitsTheta && this.panoViewer.setRotationLimitsTheta(n.camera_rotation_min, n.camera_rotation_max);
                  const { items: r } = i;
                  let s = !1;
                  const o = [];
                  for (let t = 0; t < r.length; t += 1) {
                      const { filterIds: e } = r[t];
                      if (e.length > 0)
                          for (let i = 0; i < e.length; i += 1) {
                              const e = r[t].filterIds[i];
                              -1 === o.indexOf(e) && o.push(e);
                          }
                  }
                  this.renderIntoFilterHolders = !1;
                  for (let t = 0, { length: i } = r; t < i; t += 1) {
                      const i = new qi(this.CONFIGURATOR, r[t], e);
                      i.get("siblings") && i.get("siblings").length && (s = !0);
                      const n = i.get("index") || t;
                      if ((i.set("index", n), this.addReference(i, e), i.registerFilters(), this.items.push(i), i.visible && !i.disabled && !0 === this.renderIntoFilterHolders)) {
                          r[t].filterIds[0];
                      }
                  }
                  if (s)
                      for (let t = 0, e = this.items.length; t < e; t += 1) {
                          const e = this.items[t],
                              i = e.get("siblings");
                          if (i && i.length)
                              for (let t = 0, n = i.length; t < n; t += 1) {
                                  const n = this.getItemById(i[t]);
                                  n && e.siblings.push(n);
                              }
                      }
                  return this;
              }
              chooseReactiveNeighbours() {
                  if ((this.CONFIGURATOR.log("----------------------------------------"), this.CONFIGURATOR.log(`Layer. '${this.get("name")}' chooseReactiveNeighbours:`), !this.activeItem)) return;
                  if (!1 === this.activeItem.get("hidden")) return void this.CONFIGURATOR.log(` - Item ${this.activeItem.get("id")} '${this.activeItem.get("name")}' is still visible, no change`);
                  this.CONFIGURATOR.log(` - Finding neighbour for ${this.activeItem.get("id")} '${this.activeItem.get("name")}'`);
                  const t = this.activeItem.siblings;
                  if ((this.CONFIGURATOR.log(` - Checking ${t.length} siblings`), t && t.length > 0))
                      for (let e = 0; e < t.length; e += 1) {
                          const i = t[e],
                              n = i.get("hidden");
                          if ((this.CONFIGURATOR.log(`Checking sibling ${t[e].get("id")}. '${t[e].get("name")}' hidden ${n} disabled ${i.disabled}`), !n && !i.disabled))
                              return this.CONFIGURATOR.log(`   - Choosing sibling ${t[e].get("id")}. '${t[e].get("name")}'`), void i.setActive();
                      }
                  this.CONFIGURATOR.log(" - Checking RGB " + this.activeItem.get("rgb"));
                  const e = this.activeItem.get("rgb");
                  if (e) {
                      const t = Ji(e),
                          i = Qi(t),
                          n = [],
                          r = [];
                      for (let t = 0; t < this.items.length; t += 1) {
                          const e = this.items[t];
                          if (!e.get("hidden") && !e.disabled) {
                              const i = Qi(Ji(e.attributes.rgb));
                              n.push(t), r.push(i);
                          }
                      }
                      if (
                          (this.CONFIGURATOR.log(`   - Matching RGB ${t[0].toFixed(2)} ${t[1].toFixed(2)} ${t[2].toFixed(2)} HSV ${i[0].toFixed(2)} ${i[1].toFixed(2)} ${i[2].toFixed(2)} Against ${r.length} available neighbours`),
                          r.length > 0)
                      ) {
                          const t = n[Ki(i, r)];
                          return this.CONFIGURATOR.log(`   - Choosing Item ${this.items[t].get("id")} '${this.items[t].get("name")}'`), void this.items[t].setActive();
                      }
                  }
                  for (let t = 0; t < this.items.length; t += 1) {
                      const e = this.items[t];
                      if (!e.get("hidden") && !e.disabled) return this.CONFIGURATOR.log(` - Choosing first available from visible items. ItemId ${e.get("id")} '${e.get("name")}'`), void e.setActive();
                  }
                  this.CONFIGURATOR.log(" - No neighbour found");
              }
              activateFilter(t, e) {
                  this.CONFIGURATOR.log("Layer. activateFilter " + type), this.CONFIGURATOR.log(" - this.itemsVisible: " + this.itemsVisible);
                  const i = this.CONFIGURATOR.getFilters().byGroup[t].filters[e];
                  return i.disabled ? (console.log("filter is disabled abandoning"), !1) : (i.activate(), !0);
              }
              set(t, e, i) {
                  let n;
                  "object" == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e);
                  const r = this.attributes;
                  this.options = i;
                  for (const t in n) "items" !== t && (r[t] = n[t]);
              }
              setActive(t, e) {
                  if (this.active || this.get("layer_type") >= 4) return this;
                  if (
                      (this.configurator.newLayerActive(this, t, e),
                      this.marker && this.marker.el.classList ? this.marker.el.classList.add("active") : this.marker && this.marker.el.setAttribute("class", "active"),
                      (this.active = !0),
                      "function" == typeof this.options.layerActivatedCallback)
                  )
                      this.options.layerActivatedCallback(this);
                  else if (void 0 !== this.options.layerActivatedCallback) throw new Error("layerActivatedCallback is not a function");
                  return this;
              }
              newItemActive(t) {
                  if ((this.activeItem && (this.activeItem.active = !1), (this.activeItem = t), this.configurator.updateNotify(), this.events))
                      for (const t in this.events) for (let e = 0, i = this.events.length; e < i; e += 1) t[e].layerUpdate();
                  if (t.filter) {
                      const e = [];
                      for (let i = 0, n = t.filter.length; i < n; i += 1) {
                          const { group: n } = t.filter[i];
                          if ("reactive" === t.filter[i].type) continue;
                          let r = t.filter[i].options[0];
                          (r = n.filters[r]), e.push(r), r.triggerReactivate();
                      }
                      e.forEach((t) => {
                          t.updateFilters("reactive");
                      });
                  }
                  if ("function" == typeof this.options.itemChangeCallback) this.options.itemChangeCallback(t);
                  else if (null != this.options.itemChangeCallback) throw new Error("layerChangeCallback is not a function");
              }
              clearActive() {
                  this.marker && this.marker.el.classList ? this.marker.el.classList.remove("active") : this.marker && this.marker.el.setAttribute("class", ""),
                      (this.active = !1),
                      this.panoViewer && this.panoViewer.layerDeactivated && this.panoViewer.layerDeactivated();
              }
              filterUpdate() {}
              get validItemCount() {
                  return Number.isInteger(this.itemsVisible) ? this.itemsVisible : "";
              }
              getNextItem() {
                  let t = this.items.indexOf(this.activeItem);
                  const e = t,
                      { length: i } = this.items;
                  for (t += 1, t === i && (t = 0); !this.items[t].visible; ) if (((t += 1), t === i && (t = 0), e === t)) return !1;
                  return this.items[t];
              }
              getItem(t) {
                  if (null === t) return;
                  let e = this.byIndex[t] || this.byIndex[t.id];
                  return !!e && (e.disabled && (e = e.checkForValidSibling()), e);
              }
              getItemById(t) {
                  if (null !== t) return this.byId[t] || this.byId[t.id];
              }
              getFilter(t) {
                  for (let e = 0, i = this.filters.length; e < i; e += 1) if (this.filters[e].name === t) return this.filters[e];
                  return !1;
              }
              find(t, e) {
                  for (let e = 0, i = this.items.length; e < i; e += 1) this.items[e].get(t);
                  return [];
              }
              addReference(t, e) {
                  return (this.byId[t.get("id")] = t), (this.byIndex[t.get("index")] = t), t.layer || (t.layer = this), this.get("parent_layer") && (t.parentLayer = this.CONFIGURATOR.get(this.get("parent_layer"))), this;
              }
              deactive() {}
              reset() {
                  (this.CURRENT_CONFIGURATION = ""),
                      (this.itemsVisible = 0),
                      (this.items = []),
                      (this.byId = {}),
                      (this.byIndex = {}),
                      (this.active = !1),
                      (this.activeItem = !1),
                      (this.activeSubMenuEl = !1),
                      (this.activeSubmenu = !1),
                      (this.filters = []),
                      (this.panoViewer = !1),
                      (this.type = !1),
                      (this.scrollValue = 0),
                      (this.previouslyActive = !1),
                      (this.previousActive = !1);
              }
              getItemTotalFiltered(t) {
                  const e = this.items;
                  let i = 0;
                  for (let n = 0; n < e.length; n += 1) {
                      const r = e[n].filters;
                      for (let e = 0; e < r.length; e += 1) {
                          r[e].name === t && (i += 1);
                      }
                  }
                  return i;
              }
              onHotspotClick(t, e, i) {
                  this.CONFIGURATOR.onHotspotClick(t, e, i);
              }
              destroy() {
                  this.reset();
              }
              get(t) {
                  return this.attributes[t];
              }
          }
          class en {
              constructor(t) {
                  this.reset(), this.init(t);
              }
              init(t) {
                  (this.name = t.name), (this.safeName = t.safeName);
                  const e = (function (t) {
                      t = t || {};
                      const e = document.createElement("a");
                      (e.className = "collection__title list_order_" + t.order), (e.dataset.collection = t.safeName), (e.innerHTML = t.name);
                      const i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                      if (void 0 !== i.innerHTML)
                          i.innerHTML =
                              '<g fill="none" stroke="%2327ae60"><path d="M31.9 19.2h5.8M31 21.2h16.8v23H31v-23z"/><path d="M31 29.2h-7.4v-13H46v5"/><path d="M23.6 27.7l-10.9-4.4v-8.1l11 4"/><path d="M12.7 23.4v-8.5h22.4l3.4 1.4M44.4 24.2v3.7"/></g>';
                      else {
                          const t = new DOMParser().parseFromString(
                              '<svg xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M32.3 16.7h7.2m-8.3 2.5H52v28.5H31.2V19.2z"/><path d="M31.2 29.1H22V13h27.7v6.2"/><path d="M22 27.3L8.5 21.9V11.8l13.6 5"/><path d="M8.5 21.9V11.4h27.7l4.2 1.7m7.4 9.8v4.6"/></g></svg>',
                              "image/svg+xml"
                          );
                          i.appendChild(document.adoptNode(t.documentElement));
                      }
                      e.appendChild(i);
                      const n = document.createElement("li");
                      (n.dataset.collection = t.safeName),
                          (n.className = "js-select-component"),
                          (n.className = "js-select-component-group configuration__elements__components__component configuration__elements__components__component--group"),
                          n.appendChild(e);
                      const r = document.createElement("ul");
                      (r.className = "configuration__elements__components__component__group_menu"), n.appendChild(r);
                      const s = document.createElement("ul");
                      return (s.className = "configuration__elements__components__component__group__container"), n.appendChild(s), { layerGroupContainer: n, layerGroupMenu: r, layerGroupComponentContainer: s };
                  })(t);
                  (this.el.container = e.layerGroupContainer), (this.el.menu = e.layerGroupMenu), (this.el.componentContainer = e.layerGroupComponentContainer);
              }
              addLayer(t) {
                  const e = document.createElement("li");
                  (e.className = "js-select-component js-layer-group"), (e.dataset.collection = t.get("file_path")), (e.innerText = t.get("name")), this.el.menu.appendChild(e), this.layers.push(t);
              }
              newLayerActive(t) {
                  t.options.menu &&
                      (Array.prototype.forEach.call(this.el.menu.getElementsByTagName("li"), (t) => {
                          t.classList.remove("active");
                      }),
                      this.el.menu.querySelectorAll(`[data-collection="${t.get("file_path")}"]`)[0].classList.add("active"),
                      this.el.container.classList.add("active"));
              }
              setActive(t) {
                  t || (t = this.lastActiveLayer || this.layers[0]),
                      (this.lastActiveLayer = this.activeLayer),
                      (this.activeLayer = this.layers.filter((e) => e === t)[0]),
                      this.activeLayer.setActive(!0),
                      (this.active = !0),
                      this.el.container.classList.add("active");
              }
              deactivate() {
                  this.el.container.classList.remove("active"), (this.active = !1);
              }
              reset() {
                  (this.layers = []), (this.activeLayer = !1), (this.lastActiveLayer = !1), (this.el = {}), (this.active = !1);
              }
          }
          class nn {
              constructor(t, e, i) {
                  (this.CONFIGURATOR = t),
                      (this.INTERACTION_SURFACE = e),
                      (this.GESTURE_HANDLE_CONTAINER = i),
                      (this.rotationScalar = 600 * Math.min(window.devicePixelRatio, 2)),
                      (this.touchZoomDelta = 25 * Math.min(window.devicePixelRatio, 2)),
                      (this.touchZoomOutputScalar = 0.01),
                      (this.isTouchToZoom = !1),
                      (this.touchZoomScale = 0),
                      (this.isTouchToRotate = !1),
                      (this.touchRotateTotal = 0),
                      (this.hinterMessageZoom = "Use ctrl + scroll to zoom"),
                      (this.hinterMessageTouch = "Use two fingers to look around"),
                      (this.hinterMessageZoomShown = !1),
                      (this.hinterMessageTouchShown = !1);
                  const n = t.options.gestureHandling;
                  (this.gestureHandlingMode = n.mode),
                      (this.enabledZoom = n.enabledZoom),
                      (this.enabledRotate = n.enabledRotate),
                      (this.enabledZoomFullscreen = n.enabledZoomFullscreen),
                      (this.enabledRotateFullscreen = n.enabledRotateFullscreen),
                      (this.rotationScalar = n.rotationScalar * Math.min(window.devicePixelRatio, 2)),
                      (this.touchZoomDelta = n.touchZoomDelta * Math.min(window.devicePixelRatio, 2)),
                      console.log(n),
                      this.CONFIGURATOR.log(
                          "GestureHandler. " +
                              this.gestureHandlingMode +
                              " zoom/rotate: " +
                              this.enabledZoom +
                              " " +
                              this.enabledRotate +
                              " fullscreen zoom/rotate: " +
                              this.enabledZoomFullscreen +
                              " " +
                              this.enabledRotateFullscreen +
                              " rotationScalar: " +
                              this.rotationScalar +
                              " touchZoomDelta: " +
                              this.touchZoomDelta
                      ),
                      (this.isFullscreen = !1),
                      (this.positionPreviousX = -1),
                      (this.positionPreviousY = -1),
                      (this.isDown = !1),
                      this.enable();
              }
              enable() {
                  const { INTERACTION_SURFACE: t } = this;
                  this.disable(),
                      t.addEventListener("touchstart", this.onTouchStart.bind(this)),
                      t.addEventListener("touchend", this.onTouchEnd.bind(this)),
                      t.addEventListener("touchmove", this.onTouchMove.bind(this)),
                      t.addEventListener("mousedown", this.onMouseDown.bind(this)),
                      t.addEventListener("mousemove", this.onMouseMove.bind(this)),
                      t.addEventListener("mouseup", this.onMouseUp.bind(this)),
                      t.addEventListener("mouseout", this.onMouseOut.bind(this)),
                      t.addEventListener("wheel", this.onWheel.bind(this));
              }
              disable() {
                  const { INTERACTION_SURFACE: t } = this;
                  t.removeEventListener("touchstart", this.onTouchStart.bind(this)),
                      t.removeEventListener("touchend", this.onTouchEnd.bind(this)),
                      t.removeEventListener("touchmove", this.onTouchMove.bind(this)),
                      t.removeEventListener("mousedown", this.onMouseDown.bind(this)),
                      t.removeEventListener("mousemove", this.onMouseMove.bind(this)),
                      t.removeEventListener("mouseup", this.onMouseUp.bind(this)),
                      t.removeEventListener("mouseout", this.onMouseOut.bind(this)),
                      t.removeEventListener("wheel", this.onWheel.bind(this));
              }
              onMouseDown(t) {
                  t.preventDefault();
                  const e = this.INTERACTION_SURFACE.getBoundingClientRect();
                  this.onInteractionStart(t.clientX - e.left, t.clientY - e.top);
              }
              onTouchStart(t) {
                  const e = t.changedTouches[0],
                      i = t.touches.length,
                      n = this.INTERACTION_SURFACE.getBoundingClientRect();
                  if ("cooperative" === this.gestureHandlingMode && i >= 2) {
                      t.preventDefault();
                      let e = !1;
                      if ((this.enabledRotate && !1 === this.isFullscreen && (e = !0), this.enabledRotateFullscreen && !0 === this.isFullscreen && (e = !0), t.touches && t.touches.length < 2 && !0 === e))
                          return void (!1 === this.hinterMessageTouchShown && (this.showHinter(this.hinterMessageTouch), (this.hinterMessageTouchShown = !0)));
                  } else "greedy" === this.gestureHandlingMode && 1 === i && t.preventDefault();
                  this.onInteractionStart(e.clientX - n.left, e.clientY - n.top);
              }
              onInteractionStart(t, e) {
                  (this.positionPreviousX = t), (this.positionPreviousY = e), (this.isDown = !0), this.CONFIGURATOR.onInteractionStart();
              }
              onMouseMove(t) {
                  t.preventDefault();
                  const e = this.INTERACTION_SURFACE.getBoundingClientRect();
                  this.onInteractionMove(t.clientX - e.left, t.clientY - e.top);
              }
              onTouchMove(t) {
                  const e = this.INTERACTION_SURFACE.getBoundingClientRect(),
                      i = t.targetTouches,
                      n = i.length;
                  let r = 0,
                      s = 0;
                  if (n >= 2) {
                      t.preventDefault();
                      let o = !1;
                      const a = this.getTouchScale(t);
                      if (!1 === this.isTouchToZoom) (this.touchZoomScale = a), (this.isTouchToZoom = !0);
                      else {
                          const t = this.touchZoomScale - a;
                          Math.abs(t) > this.touchZoomDelta && (this.CONFIGURATOR.onInteractionZoom(t * this.touchZoomOutputScalar), (this.touchZoomScale = a), (o = !0));
                      }
                      if (!0 === o) return;
                      if ("cooperative" === this.gestureHandlingMode) {
                          for (let t = 0; t < n; t += 1) (r += i[t].clientX - e.left), (s += i[t].clientY - e.top);
                          (r /= n), (s /= n);
                      }
                  } else {
                      if ("greedy" !== this.gestureHandlingMode || 1 !== n) return;
                      t.preventDefault(), (r += i[0].clientX - e.left), (s += i[0].clientY - e.top);
                  }
                  !1 === this.isTouchToRotate || n !== this.touchRotateTotal ? ((this.positionPreviousX = r), (this.positionPreviousY = s), (this.isTouchToRotate = !0), (this.touchRotateTotal = n)) : this.onInteractionMove(r, s);
              }
              onInteractionMove(t, e) {
                  if (!0 === this.isDown) {
                      const { CONFIGURATOR: i, rotationScalar: n } = this;
                      i.rotateHorizontal(-(t - this.positionPreviousX) / n), i.rotateVertical(-(e - this.positionPreviousY) / n);
                  }
                  (this.positionPreviousX = t), (this.positionPreviousY = e);
              }
              onMouseUp(t) {
                  t.preventDefault();
                  const e = this.INTERACTION_SURFACE.getBoundingClientRect();
                  this.onInteractionEnd(t.clientX - e.left, t.clientY - e.top);
              }
              onTouchEnd(t) {
                  t.preventDefault();
                  const e = t.changedTouches[0],
                      i = this.INTERACTION_SURFACE.getBoundingClientRect();
                  this.onInteractionEnd(e.clientX - i.left, e.clientY - i.top);
              }
              onMouseOut(t) {
                  t.preventDefault();
                  const e = this.INTERACTION_SURFACE.getBoundingClientRect();
                  this.onInteractionEnd(t.clientX - e.left, t.clientY - e.top);
              }
              onInteractionEnd(t, e) {
                  (this.positionPreviousX = t), (this.positionPreviousY = e), (this.isDown = !1), (this.isTouchToZoom = !1), (this.isTouchToRotate = !1), this.CONFIGURATOR.onInteractionEnd();
              }
              onWheel(t) {
                  let e = !1;
                  if ("cooperative" === this.gestureHandlingMode) {
                      let i = !1;
                      if ((this.enabledZoom && !1 === this.isFullscreen && (i = !0), this.enabledZoomFullscreen && !0 === this.isFullscreen && (i = !0), i && !0 !== t.ctrlKey))
                          return void (!1 === this.hinterMessageZoomShown && (this.showHinter(this.hinterMessageZoom), (this.hinterMessageZoomShown = !0)));
                      e = !0;
                  } else "greedy" === this.gestureHandlingMode && (e = !0);
                  e && (t.preventDefault(), t.deltaY < 0 ? this.CONFIGURATOR.onInteractionZoom(-1) : t.deltaY > 0 && this.CONFIGURATOR.onInteractionZoom(1));
              }
              startTimer() {
                  this.clearTimer(), (this.timer = setTimeout(this.hideHinter.bind(this), 1500));
              }
              clearTimer() {
                  this.timer && (clearTimeout(this.timer), (this.timer = void 0));
              }
              showHinter(t) {
                  const { GESTURE_HANDLE_CONTAINER: e } = this;
                  (e.innerHTML = `<p>${t}</p>`), e.classList.remove("configurator__gesture-hinter--hidden"), this.startTimer();
              }
              hideHinter() {
                  this.GESTURE_HANDLE_CONTAINER.classList.add("configurator__gesture-hinter--hidden");
              }
              getTouchScale(t) {
                  let e,
                      i,
                      n,
                      r,
                      s,
                      o = 0;
                  for (r = 0; r < t.targetTouches.length; r += 1)
                      for (s = 0; s < t.targetTouches.length; s += 1)
                          (e = t.targetTouches[r].clientX - t.targetTouches[s].clientX), (i = t.targetTouches[r].clientY - t.targetTouches[s].clientY), (n = Math.sqrt(e * e + i * i)), n > o && (o = n);
                  return o;
              }
              onEnterFullscreen() {
                  this.isFullscreen = !0;
              }
              onLeaveFullscreen() {
                  this.isFullscreen = !1;
              }
          }
          class rn {
              constructor() {
                  (this.currentConfigurationString = null), (this.defaultConfigurationString = "defaultConfigString"), (this.LAYER_DETAILS = []), (this.SCENE_LAYER_DETAILS = {});
              }
              setString(t) {
                  this.currentConfigurationString = t;
              }
              getString() {
                  return this.currentConfigurationString;
              }
              setDefaultConfigString(t) {
                  this.defaultConfigurationString = t;
              }
              getDefaultConfigString() {
                  return this.defaultConfigurationString;
              }
              setLayerDetails(t, e) {
                  this.LAYER_DETAILS = [];
                  const { length: i } = t;
                  let n;
                  void 0 === this.SCENE_LAYER_DETAILS[e] && (this.SCENE_LAYER_DETAILS[e] = []);
                  for (let r = 0; r < i; r += 1) {
                      let i, s;
                      (n = t[r]),
                          "LAYER_GROUP_BY" === n.LAYER_TYPE ? ((i = n.LAYERDATA.name), (s = parseInt(n.itemIndexActive))) : ((i = n.attributes.name), (s = n.activeItem.attributes.index)),
                          this.LAYER_DETAILS.push({ name: i, index: s }),
                          this.SCENE_LAYER_DETAILS[e].push({ name: i, index: s });
                  }
              }
              getIndexForLayer(t) {
                  const { LAYER_DETAILS: e } = this;
                  for (let i = 0; i < e.length; i += 1) if (e[i].name === t) return e[i].index;
                  return 0;
              }
              getAreLayerDetailsSet() {
                  return 0 !== this.LAYER_DETAILS.length;
              }
              getAreSceneLayerDetailsSet(t) {
                  return void 0 !== this.SCENE_LAYER_DETAILS[t] && 0 !== this.SCENE_LAYER_DETAILS[t].length;
              }
          }
          class sn {
              constructor(t, e) {
                  (this.CONFIGURATOR = t),
                      (this.HOLDER = document.createElement("div")),
                      (this.HOLDER.className = "zoom-controller-holder"),
                      e.appendChild(this.HOLDER),
                      (this.BUTTON_IN = document.createElement("div")),
                      (this.BUTTON_IN.className = "zoom-controller-in"),
                      this.HOLDER.appendChild(this.BUTTON_IN),
                      (this.BUTTON_OUT = document.createElement("div")),
                      (this.BUTTON_OUT.className = "zoom-controller-out"),
                      this.HOLDER.appendChild(this.BUTTON_OUT),
                      (this.BUTTON_IN.onclick = this.onZoomIn.bind(this)),
                      (this.BUTTON_OUT.onclick = this.onZoomOut.bind(this));
              }
              onZoomIn(t) {
                  t.preventDefault(), this.CONFIGURATOR.onInteractionZoom(-1);
              }
              onZoomOut(t) {
                  t.preventDefault(), this.CONFIGURATOR.onInteractionZoom(1);
              }
          }
          class on {
              constructor(t, e) {
                  (this.CONFIGURATOR = t), (this.options = e), (this.remoteControl = !1);
              }
              setRemoteType(t) {
                  if ("slave" !== t.type && "master" !== t.type) return void (this.remoteControl = !1);
                  window.WebSocket = window.WebSocket || window.MozWebSocket;
                  let e = t.wsURL;
                  t.port && (e += ":" + t.port),
                      (e = new WebSocket(e)),
                      (this.remoteControl = { type: t.type, ws: e, connected: !1 }),
                      (e.onerror = this.webSocketError),
                      (e.onmessage = this.webSocketReceive.bind(this)),
                      (e.onopen = this.webSocketOpened.bind(this)),
                      (e.onclose = this.webSocketClosed.bind(this));
              }
              webSocketOpened() {
                  this.remoteControl.connected = !0;
                  const t = { type: "register", data: this.remoteControl.type, id: !1, date: Date.now() };
                  this.remoteControl.ws.send(JSON.stringify(t));
              }
              webSocketClosed() {
                  if ("master" === this.remoteControl.type) {
                      const t = document.getElementsByClassName("ws-status")[0];
                      t && (t.classList.remove("connected"), t.classList.remove("populated"), (t.innerText = "0"));
                  }
                  this.remoteControl.connected = !1;
              }
              webSocketDisconnect() {
                  this.remoteControl.ws.close(), (this.remoteControl.connected = !1);
                  const t = document.getElementsByClassName("ws-status")[0];
                  t && (t.classList.remove("connected"), (t.innerText = "0"));
              }
              webSocketStatus() {
                  switch (this.remoteControl.ws.readyState) {
                      case this.remoteControl.ws.CLOSED:
                      case this.remoteControl.ws.CLOSING:
                      case this.remoteControl.ws.CONNECTING:
                      case this.remoteControl.ws.OPEN:
                  }
              }
              webSocketError() {
                  this.remoteControl = !1;
              }
              webSocketReceive(t) {
                  const e = JSON.parse(t.data);
                  let i;
                  switch (e.type) {
                      case "message":
                          break;
                      case "connection:created":
                          if (((this.remoteControl.id = e.id), "slave" === this.remoteControl.type)) {
                              const t = document.createElement("div");
                              t.className = "pairing";
                              const i = new Image();
                              (i.src = e.qr), t.appendChild(i), document.body.appendChild(t);
                          } else (i = document.getElementsByClassName("ws-status")[0]), i || ((i = document.createElement("div")), (i.className = "ws-status"), document.body.append(i)), i.classList.add("connected");
                          break;
                      case "connection:destroyed":
                          break;
                      case "room:join":
                          "slave" === this.remoteControl.type && document.getElementsByClassName("pairing")[0] && document.getElementsByClassName("pairing")[0].remove(), void 0 !== e.config && this.setRemoteConfig(e.config);
                          break;
                      case "room:left":
                          "master" === this.remoteControl.type && ((i = document.getElementsByClassName("ws-status")[0]), i && (i.innerText = e.userCount - 1));
                          break;
                      case "room:userJoined":
                          "slave" === this.remoteControl.type ||
                              ((i = document.getElementsByClassName("ws-status")[0]),
                              i || ((i = document.createElement("div")), (i.className = "ws-status"), document.body.append(i)),
                              i.classList.remove("connected"),
                              i.classList.add("populated"),
                              (i.innerText = e.userCount - 1));
                          break;
                      case "room:userLeft":
                          "slave" === this.remoteControl.type ||
                              ((i = document.getElementsByClassName("ws-status")[0]),
                              i || ((i = document.createElement("div")), (i.className = "ws-status"), document.body.append(i)),
                              e.userCount > 1 ? (i.classList.remove("connected"), i.classList.add("populated")) : (i.classList.remove("populated"), i.classList.add("connected")),
                              (i.innerText = e.userCount - 1));
                          break;
                      case "config:update":
                          void 0 !== e.config && this.setRemoteConfig(e.config);
                  }
              }
              webSocketAuthUser(t) {
                  const e = { type: "room:authorise", userId: t, room: this.remoteControl.room };
                  this.remoteControl.ws.send(JSON.stringify(e));
              }
              webSocketSend(t) {
                  const e = { config: t, type: "config" };
                  this.remoteControl.ws.send(JSON.stringify(e));
              }
              close() {}
          }
          class an {
              constructor(t, e, i) {
                  (this.CONFIGURATOR = t), (this.APPLICATION_OPTIONS = e), (this.FILTER_DATA = i), (this.FILTER_GROUP_ID = i.safe_name), (this.items = []), (this.attributes = { name: i.name, layer_type: "pallets" });
                  const n = i.filters;
                  for (let t = 0; t < n.length; t += 1) {
                      const e = n[t];
                      this.items.push({
                          itemIndex: t,
                          filterGroupId: i.safe_name,
                          filterId: e.safe_name,
                          attributes: { thumbnail: `${this.CONFIGURATOR.getDynamicThumbUrl()}${e.thumbnail}`, name: e.safe_name },
                          disabled: e.disabled,
                          active: !1,
                      });
                  }
                  (this.isActive = !1), (this.itemIndexActive = 0), (this.activeItem = { attributes: {} });
              }
              setActive() {
                  this.isActive = !0;
              }
              clearActive() {
                  !1 !== this.isActive && (this.isActive = !1);
              }
              toggleActive() {
                  return !0 === this.isActive ? this.clearActive() : this.setActive(), this.isActive;
              }
              onItemClick(t) {
                  t.preventDefault();
                  const { CONFIGURATOR: e } = this,
                      i = t.target;
                  this.setItemByIndex(i.dataset.itemIndex), e.onItemClick();
              }
              chooseReactiveNeighbours() {
                  !0 !== this.protectFromReactiveUpdates ? console.log(`LayerFilter ${this.FILTER_DATA.name}. chooseReactiveNeighbours`) : console.log(`LayerFilter ${this.FILTER_DATA.name}. chooseReactiveNeighbours PROTECTED`);
              }
              setItemByFilterId(t) {
                  const e = this.getItemIndexByFilterId(t);
                  this.setItemByIndex(e);
              }
              getItemIndexByFilterId(t) {
                  const e = this.FILTER_DATA.filters;
                  let i = 0;
                  for (let n = 0; n < e.length; n += 1) e[n].safe_name === t && (i = n);
                  return i;
              }
              setItemByIndex(t) {
                  const { CONFIGURATOR: e } = this,
                      i = this.FILTER_DATA.filters[t];
                  e.setFilter(this.FILTER_GROUP_ID, i.safe_name), this.highlightItemByIndex(t), (this.itemIndexActive = t), e.chooseReactiveNeighbours(), e.updateNotify(), this.updateActiveItem();
              }
              highlightItemByIndex(t) {
                  const { items: e } = this;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i];
                      i === parseInt(t, 10) ? (n.active = !0) : (n.active = !1);
                  }
              }
              updateActiveItem() {
                  this.activeItem.attributes = this.FILTER_DATA.filters[this.itemIndexActive];
              }
              getIsActive() {
                  return this.isActive;
              }
              getSafeName() {
                  return this.FILTER_DATA.safe_name;
              }
              getName() {
                  return this.FILTER_DATA.name;
              }
          }
          class cn {
              constructor(t, e, i) {
                  (this.LAYERDATA = t),
                      (this.APPLICATION_OPTIONS = e),
                      (this.CONFIGURATOR = i),
                      (this.LAYER_TYPE = "LAYER_GROUP_BY"),
                      (this.FILTER_GROUP_ID = parseInt(t.group_by, 10)),
                      (this.FILTER_SUBGROUP_ID = parseInt(t.sub_group, 10)),
                      (this.FILTER_DATA_GROUP = this.getFilterGroupDataById(this.FILTER_GROUP_ID)),
                      (this.FILTER_GROUP_NAME = this.FILTER_DATA_GROUP.safe_name),
                      isNaN(this.FILTER_SUBGROUP_ID) || ((this.FILTER_DATA_SUBGROUP = this.getFilterGroupDataById(this.FILTER_SUBGROUP_ID)), (this.FILTER_SUBGROUP_NAME = this.FILTER_DATA_SUBGROUP.safe_name)),
                      console.log(`LayerGroupBy. Created '${t.name}' Group ${this.FILTER_GROUP_ID} ${this.FILTER_GROUP_NAME} SubGroup ${this.FILTER_SUBGROUP_ID} ${this.FILTER_SUBGROUP_NAME} _____`),
                      (this.FILTER_ELEMENTS = []),
                      (this.items = []),
                      (this.groupedItems = []);
                  const n = this.LAYERDATA.items;
                  for (let t = 0; t < n.length; t += 1) {
                      const e = n[t];
                      0 === t && (e.active = !0), (e.index = t), this.items.push(e), this.groupItem(e);
                  }
                  (this.itemsVisible = 1), (this.itemIndexActive = 0), (this.isActive = !1), (this.activeItem = { attributes: {} }), (this.AVAILABLE_FILTERED_ITEM_INDEXES = []);
              }
              setActive() {
                  this.applyFiltering(), (this.isActive = !0), this.CONFIGURATOR.newLayerActive(this);
              }
              clearActive() {
                  !1 !== this.isActive && (this.isActive = !1);
              }
              toggleActive() {
                  return !0 === this.isActive ? this.clearActive() : this.setActive(), this.isActive;
              }
              chooseReactiveNeighbours() {
                  const { LAYERDATA: t, items: e } = this,
                      i = this.itemIndexActive;
                  this.CONFIGURATOR.log("----------------------------------------"), this.CONFIGURATOR.log(`LayerGroupBy. '${t.name}' chooseReactiveNeighbours:`), this.applyFiltering(), console.log(e[i]);
                  if (!1 === e[i].hidden) return void this.CONFIGURATOR.log(` - Item ${t.items[i].id} '${t.items[i].name}' is still visible, no change`);
                  this.CONFIGURATOR.log(` - Finding neighbour for ${t.items[i].id} '${t.items[i].name}'`);
                  const n = this.LAYERDATA.items[i].siblings;
                  if ((this.CONFIGURATOR.log(` - Checking ${n.length} siblings ${n}`), n && n.length > 0))
                      for (let i = 0; i < n.length; i += 1) {
                          const r = n[i];
                          for (let i = 0; i < e.length; i += 1) {
                              const n = t.items[i],
                                  s = e[i];
                              if (n.id === r) {
                                  const t = s.hidden;
                                  if ((this.CONFIGURATOR.log(`    - Found sibling ${r} hidden ${t}`), !t)) return this.CONFIGURATOR.log(`   - Choosing sibling ${n.id} ${n.name}.`), void this.setItemByIndex(i);
                              }
                          }
                      }
                  this.CONFIGURATOR.log(` - Checking RGB '${this.activeItem.attributes.rgb}'`);
                  const r = this.activeItem.attributes.rgb;
                  if (r) {
                      const e = Ji(r),
                          i = Qi(e),
                          n = [];
                      for (let e = 0; e < this.AVAILABLE_FILTERED_ITEM_INDEXES.length; e += 1) {
                          const i = Qi(Ji(t.items[this.AVAILABLE_FILTERED_ITEM_INDEXES[e]].rgb));
                          n.push(i);
                      }
                      if (
                          (this.CONFIGURATOR.log(`   - Matching RGB ${e[0].toFixed(2)} ${e[1].toFixed(2)} ${e[2].toFixed(2)} HSV ${i[0].toFixed(2)} ${i[1].toFixed(2)} ${i[2].toFixed(2)} Against ${n.length} available neighbours`),
                          n.length > 0)
                      ) {
                          const e = Ki(i, n),
                              r = this.AVAILABLE_FILTERED_ITEM_INDEXES[e];
                          return this.CONFIGURATOR.log(`   - Choosing Item ${t.items[r].id} '${t.items[r].name}'`), void this.setItemByIndex(r);
                      }
                  }
                  for (let t = 0; t < this.AVAILABLE_FILTERED_ITEM_INDEXES.length; t += 1) {
                      const e = this.AVAILABLE_FILTERED_ITEM_INDEXES[t],
                          i = this.LAYERDATA.items[e];
                      if (this.activeItem.attributes.name === i.name) return this.CONFIGURATOR.log(" - Found neighbour with same name. Index " + e), void this.setItemByIndex(e);
                  }
                  if (this.AVAILABLE_FILTERED_ITEM_INDEXES.length > 0)
                      return this.CONFIGURATOR.log(" - Choosing first available from visible items. Index " + this.AVAILABLE_FILTERED_ITEM_INDEXES[0]), void this.setItemByIndex(this.AVAILABLE_FILTERED_ITEM_INDEXES[0]);
                  this.CONFIGURATOR.log(" - No neighbour found");
              }
              applyFiltering() {
                  const t = this.CONFIGURATOR.filters,
                      e = this.LAYERDATA.items,
                      { items: i } = this;
                  this.AVAILABLE_FILTERED_ITEM_INDEXES = [];
                  let n = 0;
                  this.groupedItems = [];
                  for (let r = 0; r < i.length; r += 1) {
                      const s = e[r],
                          o = s.filter,
                          a = [];
                      for (let t = 0; t < o.length; t += 1) {
                          const e = o[t];
                          e.group !== this.FILTER_SUBGROUP_NAME && e.group !== this.FILTER_GROUP_NAME && a.push({ group: e.group, option: e.options });
                      }
                      let c = 0;
                      for (let e = 0; e < a.length; e += 1) {
                          const i = a[e].group,
                              n = a[e].option;
                          null != t.byGroup[i].currentActive && n.includes(t.byGroup[i].currentActive.name) && (c += 1);
                      }
                      c >= a.length ? "true" !== s.disabled && (this.showItem(r), (n += 1), this.AVAILABLE_FILTERED_ITEM_INDEXES.push(r)) : this.hideItem(r), this.groupItem(i[r]);
                  }
                  this.itemsVisible = n;
              }
              showItem(t) {
                  this.items[t].hidden = !1;
              }
              hideItem(t) {
                  this.items[t].hidden = !0;
              }
              hideEmptyFilterHolders() {
                  const { CONTENT_HOLDER: t } = this,
                      e = t.children;
                  for (let t = 0; t < e.length; t += 1) {
                      const i = e[t];
                      let n,
                          r = 0;
                      n = this.FILTER_SUBGROUP_NAME ? i.getElementsByClassName("filter-holder") : i.getElementsByClassName("filter-items");
                      for (let t = 0; t < n.length; t += 1) {
                          const e = n[t],
                              i = e.getElementsByClassName("js-select-item"),
                              s = e.getElementsByClassName("js-select-item hidden");
                          i.length === s.length ? e.classList.add("hidden") : e.classList.remove("hidden"), (r += i.length - s.length);
                      }
                      r - 1 <= 0 ? i.classList.add("hidden") : i.classList.remove("hidden");
                  }
              }
              onItemClick(t) {
                  t.preventDefault();
                  const e = t.target.dataset.itemIndex;
                  this.setItemByIndex(e), this.CONFIGURATOR.updateNotify(), this.CONFIGURATOR.onItemClick();
              }
              setItemByIndex(t) {
                  (this.itemIndexActive = t), this.highlightItemByIndex(t), this.updateActiveItem(), this.CONFIGURATOR.updateNotify(), this.CONFIGURATOR.onItemClick();
              }
              setItemByItemId(t) {
                  const e = this.LAYERDATA.items;
                  let i = 0;
                  for (let n = 0; n < e.length; n += 1) {
                      e[n].id === t && (i = n);
                  }
                  (this.itemIndexActive = i), this.highlightItemByIndex(i), this.updateActiveItem(), this.CONFIGURATOR.updateNotify();
              }
              highlightItemByIndex(t) {
                  const { items: e } = this;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i];
                      i === parseInt(t, 10) ? (n.active = !0) : (n.active = !1);
                  }
              }
              updateActiveItem() {
                  this.activeItem.attributes = this.LAYERDATA.items[this.itemIndexActive];
              }
              parseFilters() {
                  if (!this.activeItem.attributes.filter || !this.activeItem.attributes.filter.length) return !1;
                  const t = [];
                  for (let e = this.activeItem.attributes.filter.length, i = 0; i < e; i += 1) {
                      const e = this.activeItem.attributes.filter[i],
                          n = { name: e.name, value: e.options[0] };
                      t.push(n);
                  }
                  return t;
              }
              getIsActive() {
                  return this.isActive;
              }
              getItemIndexActive() {
                  return this.itemIndexActive;
              }
              getSafeName() {
                  return this.LAYERDATA.file_path;
              }
              getName() {
                  return this.LAYERDATA.name;
              }
              get(t) {
                  switch (t) {
                      case "build_order":
                          return this.LAYERDATA.build_order;
                      case "file_path":
                          return this.LAYERDATA.file_path;
                      case "name":
                          return this.LAYERDATA.name;
                  }
              }
              getItem(t) {
                  return this.ITEMS[t];
              }
              getElement(t) {
                  switch (t) {
                      case "menuContainer":
                          return this.COMPONENT_ELEMENT;
                  }
              }
              groupItem(t) {
                  let e,
                      i = this.getItemFilter(t, this.FILTER_GROUP_NAME).options[0];
                  if ((i.replace(/_/g, " "), this.FILTER_SUBGROUP_NAME)) {
                      e = this.groupedItems.findIndex((t) => t.group.safe_name === i && t.sub_group.safe_name === n);
                      let n = this.getItemFilter(t, this.FILTER_SUBGROUP_NAME).options[0];
                      e < 0 ? this.groupedItems.push({ group: { name: i.replace(/_/g, " "), safe_name: i }, sub_group: { name: n.replace(/_/g, " "), safe_name: n }, items: [t] }) : this.groupedItems[e].items.push(t);
                  } else (e = this.groupedItems.findIndex((t) => t.group.safe_name === i)), e < 0 ? this.groupedItems.push({ group: { name: i.replace(/_/g, " "), safe_name: i }, items: [t] }) : this.groupedItems[e].items.push(t);
              }
              getOrCreateItemHolder(t) {
                  const { CONTENT_HOLDER: e } = this,
                      i = this.getItemFilter(t, this.FILTER_GROUP_NAME),
                      n = "filter-holder filter-holder-" + i.options[0];
                  let r = e.getElementsByClassName(n)[0];
                  if (!r) {
                      (r = document.createElement("div")), (r.className = n), e.appendChild(r);
                      const t = document.createElement("div");
                      (t.innerHTML = "" + i.options[0].replace(/_/g, " ")), (t.className = "filter-title"), r.appendChild(t);
                  }
                  if (this.FILTER_SUBGROUP_NAME) {
                      const e = this.getItemFilter(t, this.FILTER_SUBGROUP_NAME),
                          i = "filter-holder filter-holder-" + e.options[0];
                      let n = r.getElementsByClassName(i)[0];
                      if (!n) {
                          (n = document.createElement("div")), (n.className = i), r.appendChild(n);
                          const t = document.createElement("div");
                          (t.innerHTML = "" + e.options[0]), (t.className = "subfilter-title"), n.appendChild(t);
                          const s = document.createElement("ul");
                          (s.className = "subfilter-items"), n.appendChild(s);
                      }
                      return n.children[1];
                  }
                  {
                      const t = document.createElement("ul");
                      return (t.className = "filter-items"), r.appendChild(t), r.children[1];
                  }
              }
              sortSubfiltergroupElements(t) {
                  const e = t.children;
                  [].slice
                      .call(e)
                      .sort(this.compareSubfilterElements)
                      .forEach(function (e) {
                          t.appendChild(e);
                      });
              }
              compareSubfilterElements(t, e) {
                  return t.classList < e.classList ? 1 : t.classList > e.classList ? -1 : 0;
              }
              getItemFilter(t, e) {
                  const i = t.filter;
                  for (let t = 0; t < i.length; t += 1) {
                      const n = i[t];
                      if (n.group === e) return n;
                  }
              }
              getFilterGroupDataById(t) {
                  const e = this.LAYERDATA.filter_groups;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i];
                      if (parseInt(n.id, 10) === t) return n;
                  }
              }
              destroy() {}
          }
          class ln {
              constructor(t) {
                  (this.CONFIGURATOR = t), (this.HISTORY = []);
              }
              add(t) {
                  const { HISTORY: e } = this;
                  (0 === e.length || t !== e[e.length - 1]) && e.push(t);
              }
              rewind(t) {
                  const { HISTORY: e, CONFIGURATOR: i } = this;
                  let n;
                  for (let i = 0; i <= t; i += 1) n = e.pop();
                  void 0 !== n && (i.openLayerFilterByName(n), i.openLayerByName(n));
              }
              reset() {
                  this.HISTORY = [];
              }
          }
          i(130);
          function hn(t) {
              return ("0" + Number(t).toString(16)).slice(-2).toUpperCase();
          }
          function un(t) {
              return parseInt(t, 16).toString();
          }
          function dn(t) {
              return ("0" + parseInt(t, 10).toString(36)).slice(-2).toUpperCase();
          }
          function mn(t) {
              return parseInt(t, 36);
          }
          const En = {};
          class fn {
              constructor(t) {
                  (this.INITIALISED = !1),
                      (this.IS_DEBUG = t.isDebug),
                      this.log("Configurator 0.7.0. Created with:"),
                      this.log(t),
                      (this.filters = []),
                      (this.options = t),
                      (this.USER_AGENT_INFO = new $i()),
                      (this.CONFIG_STRING_BASE = t.configStringBase || 16),
                      this.log(" - ConfigStringBase " + this.CONFIG_STRING_BASE),
                      (this.mode = !1),
                      (this.notify = !0),
                      (this.loaded = !1),
                      (this.touchState = !0),
                      (this.attributes = {}),
                      (this.layers = []),
                      (this.layerGroups = []),
                      (this.allLayers = []),
                      (this.el = {}),
                      (this.touchClick = !1),
                      (this.activeLayer = null),
                      (this.byId = []),
                      (this.menu = !1),
                      (this.remoteControl = !1),
                      (this.data = {}),
                      (this.options = t),
                      (this.enableKeyShortcuts = t.enableKeyShortcuts || !1),
                      (this.CONTAINER = {}),
                      (this.CONTAINER.main = t.configuratorElement),
                      (this.CONTAINER.stage = this.createContainer({ type: "section", id: "stage", class: "", container: this.CONTAINER.main })),
                      (this.CONTAINER.stage.style.height = "100%"),
                      (this.CONTAINER.stage.style.width = "100%"),
                      (this.CONTAINER.stage.style.position = "relative"),
                      (this.CONTAINER.stage.style.overflow = "hidden"),
                      (this.CONTAINER.gestureHinter = this.createContainer({ type: "section", id: "gesture-hinter", className: "configurator__gesture-hinter configurator__gesture-hinter--hidden", container: this.CONTAINER.main })),
                      (this.CONTAINER.hotspot = this.createContainer({ type: "section", id: "hotspot-holder", className: "configurator__hotspot-holder", container: this.CONTAINER.main })),
                      (this.CONTAINER.elementHolder = this.createContainer({ type: "section", id: "element-holder", className: "configurator__element-holder", container: this.CONTAINER.main })),
                      (this.CONTAINER.hotspot.style.position = "absolute"),
                      (this.CONTAINER.hotspot.style.top = 0),
                      (this.CONTAINER.hotspot.style.left = 0),
                      (this.CONTAINER.hotspot.style.width = "100%"),
                      (this.CONTAINER.hotspot.style.height = "100%"),
                      (this.CONTAINER.hotspot.style.pointerEvents = "auto"),
                      (this.CONTAINER.hotspot.style.zIndex = 1),
                      (this.CONTAINER.hotspot.style.overflow = 1),
                      t.filters && t.filters.length && (this.postLoadFilters = t.filters),
                      (this.cache = "none"),
                      (this.isMobile = window.matchMedia("only screen and (max-width: 600px)").matches || window.matchMedia("only screen and ( max-height : 640px) and ( orientation: landscape )").matches),
                      t.hideUI && this.hideUI(),
                      !0 === this.USER_AGENT_INFO.isAvailableFullscreen() && t.fullscreen.enabled && (this.FULLSCREEN_CONTROLLER = new zi(this, t.fullscreen, this.CONTAINER.stage, t.configuratorElement)),
                      (this.ZOOM_CONTROLLER = new sn(this, this.CONTAINER.stage)),
                      t.remote && (this.WEBSOCKET_CONTROLLER = new on(this, t)),
                      (this.GESTURE_HANDLER = new nn(this, this.CONTAINER.stage, this.CONTAINER.gestureHinter)),
                      (this.LAYER_HISTORY_CONTROLLER = new ln(this)),
                      this.enableKeyShortcuts &&
                          document.addEventListener("keydown", (t) => {
                              "n" === t.key && this.nextLayer();
                          }),
                      t.mode ? (this.mode = t.mode) : (this.mode = "web"),
                      (this.CACHEABLE = t.settings.CACHEABLE || !1),
                      (this.CONFIGURATION = new rn()),
                      (this.scene = t.scene);
                  const e = t.settings.BASE_PATH || "/";
                  if (
                      (this.setBasePath(e),
                      (En.DYNAMIC_BASE_URL = t.settings.DYNAMIC_BASE_URL),
                      (En.DYNAMIC_DATA_FILENAME = t.settings.DYNAMIC_DATA_FILENAME || "liveDataExport"),
                      (En.DYNAMIC_VERSION = t.settings.DYNAMIC_VERSION),
                      this.generateDynamicUrls(this.scene),
                      (En.STATIC_BASE_URL = t.settings.STATIC_BASE_URL),
                      (En.STATIC_IMAGE_URL = En.STATIC_BASE_URL + "image/"),
                      (En.ASSETURL = "/"),
                      (En.IMAGEPATH = "/"),
                      (En.DATAPATH = "/"),
                      (En.THUMBPATH = "/"),
                      !0 === this.options.updateUrl || "true" === this.options.updateUrl)
                  ) {
                      const t = this.parseUrl();
                      t && (this.options.config = t);
                  }
                  if (((En.WEBP = t.settings.WEBP || !1), t.settings.WEBP)) {
                      const t = document.createElement("canvas");
                      if (t.getContext && t.getContext("2d")) {
                          const e = t.getContext("2d");
                          (e.width = 1), (e.height = 1), (En.WEBP = 0 === t.toDataURL("image/webp").indexOf("data:image/webp"));
                      } else En.WEBP = !1;
                  }
              }
              get(t) {
                  if (this.byId.length) {
                      if (((e = t), !isNaN(parseFloat(e)) && isFinite(e))) return this.allLayers[t];
                      var e;
                      for (let e = 0, { length: i } = this.allLayers; e < i; e += 1) if (this.allLayers[e].get("file_path") === t) return this.allLayers[e];
                  }
              }
              getActiveLayer() {
                  return this.activeLayer;
              }
              get listLayers() {
                  return this.layers.map((t) => {
                      console.log(t);
                      const { order: e, name: i, layer_type: n, marker: r } = t.attributes;
                      return { order: e, name: i, type: n, marker: r };
                  });
              }
              nextLayer() {
                  let t = this.layers.indexOf(this.activeLayer);
                  (t += 1), t === this.layers.length && (t = 0);
                  this.get(t).setActive();
              }
              previousLayer() {
                  let t = this.layers.indexOf(this.activeLayer);
                  (t -= 1), t < 0 && (t = this.layers.length - 1), this.get(t).setActive();
              }
              getLayerGroup(t) {
                  "string" == typeof t && (t = { safeName: t });
                  let e = this.layerGroups.filter((e) => e.safeName === t.safeName)[0];
                  return e || ((e = new en(t)), t.container && t.container.appendChild(e.el.container), this.layerGroups.push(e)), e;
              }
              create(t) {
                  this.log("Create"), !0 === this.isMobile && !1 === this.ENABLE_MOBILE_HOTSPOTS && (this.options.hotspots = !1), 0 == this.INITIALISED && this.initialiseAPI();
                  const { length: e } = t;
                  for (let i = 0; i < e; i += 1)
                      if ("true" !== t[i].disabled)
                          if (null === t[i].group_by) {
                              this.log(" - Creating layer " + t[i].name);
                              const e = new tn(this);
                              e.create(t[i], this.options, this), this.addReference(e), this.allLayers.push(e), ("pallets" !== e.get("layer_type") && "palletoptions" !== e.get("layer_type")) || this.layers.push(e), (this.length += 1);
                          } else {
                              this.log(" - Creating layerGroupBy " + t[i].name);
                              const e = new cn(t[i], this.options, this);
                              this.layerGroupBys.push(e), this.allLayers.push(e);
                          }
                  return (
                      this.postLoadFilters &&
                          this.postLoadFilters.forEach((t) => {
                              this.setFilter(t[0], t[1]);
                          }),
                      !0 === this.CONFIGURATION.getAreLayerDetailsSet() ? this.setConfigurationFromLayerDetails() : this.setConfiguration(this.options.config),
                      this
                  );
              }
              randomise() {
                  this.setting = !0;
                  for (let t = 0, e = this.layers.length; t < e; t += 1) {
                      const e = this.get(t),
                          i = Math.floor(Math.random() * e.items.length);
                      e.byIndex[i].setActive();
                  }
                  (this.setting = !1), this.updateNotify();
              }
              combinationCount() {
                  let t = 1;
                  for (let e = 0, i = this.layers.length; e < i; e += 1) t *= this.get(e).items.length;
                  return t;
              }
              setRemoteConfig(t) {
                  (this.notify = !1), this.setConfiguration(t), (this.notify = !0);
              }
              setConfiguration(t) {
                  this.log("setConfiguration. " + t);
                  const e = t || [];
                  let i;
                  if ("string" == typeof e && e.length === 2 * this.allLayers.length) i = e.match(/.{1,2}/g);
                  else if (Array.isArray(e) && e.length === this.allLayers.length) i = e;
                  else {
                      i = [];
                      const { length: t } = this.allLayers;
                      for (let e = 0; e < t; e += 1) i[e] = 0;
                  }
                  this.setting = !0;
                  for (let t in i)
                      if (i.hasOwnProperty(t)) {
                          const e = this.get(t);
                          if ("LAYER_GROUP_BY" === e.LAYER_TYPE) 16 === this.CONFIG_STRING_BASE ? e.setItemByIndex(un(i[e.get("build_order")])) : e.setItemByIndex(mn(i[e.get("build_order")]));
                          else if (((t = 16 === this.CONFIG_STRING_BASE ? e.getItem(un(i[e.get("build_order")])) : e.getItem(mn(i[e.get("build_order")]))), t || (t = e.getItem(0)), t)) {
                              t.setActive();
                              const e = {};
                              t.filters.forEach((t) => {
                                  e[t.filterCategoryName] || (e[t.filterCategoryName] = []), e[t.filterCategoryName].push(t);
                              });
                              for (let t in e)
                                  if (1 === e[t].length) {
                                      const i = this.layerFilters.find((e) => t === e.FILTER_DATA.name);
                                      i ? i.setItemByFilterId(e[t][0].name) : !1 === e[t].reactive && e[t][0].activate();
                                  }
                          } else this.log(" - Invalid Configuration, defaulting to basic load."), this.setConfiguration();
                      }
                  (this.setting = !1), this.updateNotify();
              }
              setConfigurationFromLayerDetails() {
                  const { length: t } = this.allLayers;
                  let e, i, n;
                  for (let r = 0; r < t; r += 1) {
                      let t;
                      (e = this.allLayers[r]),
                          (t = "LAYER_GROUP_BY" === e.LAYER_TYPE ? e.LAYERDATA.name : e.attributes.name),
                          (i = this.CONFIGURATION.getIndexForLayer(t)),
                          "LAYER_GROUP_BY" === e.LAYER_TYPE ? e.setItemByIndex(i) : ((n = e.getItem(i)), n && n.setActive());
                  }
              }
              setDefaultConfig(t) {
                  this.CONFIGURATION.setDefaultConfigString(t);
              }
              getDefaultConfig() {
                  return this.CONFIGURATION.getDefaultConfigString();
              }
              activateFilter() {}
              setFilter(t, e) {
                  if ((this.log(`setFilter. group:${t} filter:${e}`), !this.filters)) return this.log("setFilter. this.filters not found. Abandoning"), !1;
                  const i = this.filters.byGroup[t];
                  if (!i) return this.log("setFilter. The filter group does not exist. Abandoning"), !1;
                  const n = i.filters[e];
                  return n
                      ? (this.log(" - Activating filter."), n.activate(), this.log(" - Activating filter. Complete"), "layer" === i.render_as && (this.log(" - found Filter render_as ", n), this.setLayerFilterHighlight(t, e)), n)
                      : (this.log("setFilter. The filter group was found but no filter with that name exists."), i);
              }
              activateFiltersInGroup(t) {
                  if ((this.log("activateFiltersInGroup. group:" + t), !this.filters)) return this.log("activateFiltersInGroup. this.filters not found. Abandoning"), !1;
                  const e = this.filters.byGroup[t];
                  if (!e) return this.log(`activateFiltersInGroup. The filter group '${t}' does not exist. Abandoning`), !1;
                  const i = e.filters;
                  return (
                      Object.keys(i).forEach((t) => {
                          const e = i[t];
                          e.activate(!0), e.updateFilters();
                      }),
                      !0
                  );
              }
              getFilters() {
                  return this.filters;
              }
              setFilters(t) {
                  this.filters = t;
              }
              setLayerFilterHighlight(t, e) {
                  const i = this.layerFilters.find((e) => e.FILTER_GROUP_ID === t);
                  if (i) {
                      const t = i.getItemIndexByFilterId(e);
                      i.highlightItemByIndex(t);
                  }
              }
              closeLayerFilters() {
                  const t = this.layerFilters;
                  for (let e = 0; e < t.length; e += 1) t[e].clearActive();
              }
              updateNotify(t = !0) {
                  if (t && this.setting) return;
                  const e = this.CONFIGURATION.getString(),
                      i = this.buildConfigString();
                  if (i === e) return;
                  const n = [];
                  if (e) for (let t = 0, r = i.length / 2; t < r; t += 1) i.charAt(t) + i.charAt(t + 1) !== e.charAt(t) + e.charAt(t + 1) && n.push(t);
                  if ((this.log("Configurator. updateNotify. Setting config to " + i), this.CONFIGURATION.setString(i), i)) {
                      "web" === this.mode && 1 === this.options.urlUpdate
                          ? "true" === this.options.updateUrl && window.history.replaceState({ set: "system" }, "", `${En.BASEPATH}${i}`)
                          : "web" === this.mode && 2 === this.options.urlUpdate && "true" === this.options.updateUrl && window.history.replaceState({ set: "system" }, "", `${En.BASEPATH}${this.scene}/${i}`);
                      const t = `${En.DYNAMIC_TILE_URL}${i}_${this.CONFIG_STRING_BASE}_`;
                      if ((this.panoViewer.setPathTiles(t), i.length / 2 === this.allLayers.length)) {
                          const t = this.getActiveElements();
                          delete t.previewImage;
                          const e = new CustomEvent("config-update", { detail: { config: t } });
                          this.CONTAINER.main.dispatchEvent(e);
                      }
                  }
              }
              buildConfigString() {
                  if (this.setting) return !1;
                  let t;
                  return this.log("buildConfigString. base " + this.CONFIG_STRING_BASE), (t = 16 === this.CONFIG_STRING_BASE ? this.buildConfigStringHex() : this.buildConfigStringBase36()), t || (t = this.options.config), t;
              }
              buildConfigStringHex() {
                  this.log("buildConfigStringHex");
                  let t = [];
                  const e = this.allLayers;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i],
                          r = n.get("build_order");
                      if ("LAYER_GROUP_BY" === n.LAYER_TYPE) t[r] = hn(n.getItemIndexActive());
                      else {
                          if (!n.activeItem) break;
                          t[r] = hn(n.activeItem.get("index"));
                      }
                  }
                  return (t = t.join("")), t;
              }
              buildConfigStringBase36() {
                  this.log("buildConfigStringBase36");
                  let t = [];
                  const e = this.allLayers;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i],
                          r = n.get("build_order");
                      if ("LAYER_GROUP_BY" === n.LAYER_TYPE) {
                          const e = dn(n.getItemIndexActive());
                          t[r] = e;
                      } else {
                          if (!n.activeItem) break;
                          t[r] = dn(n.activeItem.get("index"));
                      }
                  }
                  return (t = t.join("")), t;
              }
              getScreenshot() {
                  const { format: t, quality: e } = this.options.screenshot;
                  this.log("getScreenshot");
                  const i = this.panoViewer.getScreenshot(t, e),
                      n = document.createElement("img");
                  return (n.src = i), this.CONTAINER.main.appendChild(n), this.onInteractionZoom(100), n;
              }
              openLayerByName(t) {
                  this.log(`openLayerByName '${t}'`);
                  const e = this.allLayers;
                  for (let i = 0; i < e.length; i += 1) {
                      const n = e[i];
                      n.get("name") === t && n.setActive();
                  }
              }
              closeLayers() {
                  const t = this.allLayers;
                  for (let e = 0; e < t.length; e += 1) t[e].clearActive();
                  this.activeLayer = !1;
              }
              newLayerActive(t) {
                  if ((this.log("newLayerActive " + t), this.addLayerHistory(t.get("name")), t.get("render_into"))) {
                      const e = this.get(t.get("render_into"));
                      this.activeLayer !== e && e.setActive(), (e.active = !1);
                  } else if (t.get("layer_group")) {
                      const e = this.getLayerGroup(t.get("layer_group"));
                      this.activeLayer
                          ? (this.activeLayer.get("render_into") ? this.get(this.activeLayer.get("render_into")).clearActive() : this.activeLayer.clearActive(),
                            this.activeLayer.get("layer_group") && this.activeLayer.get("layer_group") !== t.get("layer_group") ? this.getLayerGroup(this.activeLayer.get("layer_group")).deactivate() : e.newLayerActive(t))
                          : e.newLayerActive(t);
                  } else
                      this.activeLayer &&
                          (this.activeLayer.get("render_into") &&
                              this.activeLayer.get("render_into") !== t.get("file_path") &&
                              (this.activeLayer.parentComponent.clearActive(), this.activeLayer.parentComponent.get("layer_group") && this.activeLayer.parentComponent.parentComponent.deactivate()),
                          this.activeLayer.get("layer_group") && this.activeLayer.parentComponent && this.activeLayer.parentComponent.deactivate(),
                          this.activeLayer.clearActive());
                  t.get("layer_group") && this.getLayerGroup(t.get("layer_group")).newLayerActive(t),
                      (this.activeLayer = t),
                      "LAYER_GROUP_BY" !== this.activeLayer.LAYER_TYPE && this.options.hotspotFocus && this.panoViewer.focusHotspot(this.activeLayer.attributes.name);
              }
              openMenu() {
                  this.CONTAINER.menu.parentElement.classList.add("active");
              }
              collapseMenu() {
                  this.CONTAINER.menu.parentElement.classList.remove("active");
              }
              menuItemClicked(t) {
                  let e,
                      { target: i } = t;
                  if ("change" === t.type && "itemGroup" === i.name) {
                      const e = t.target.getAttribute("data-item-index");
                      return void this.getActiveLayer().getItem(e).setActive();
                  }
                  if ("BUTTON" === i.tagName) return !0;
                  if ("UL" === i.tagName) return !1;
                  if (i.classList && i.classList.contains("js-hide-config-menu")) return void this.collapseMenu();
                  for (; null !== i && "LI" !== i.tagName; ) i = i.parentNode;
                  if (null === i) return !1;
                  if ((i.classList.contains("js-select-submenu"), i.classList.contains("js-select-component-group"))) {
                      const t = this.getLayerGroup({ safeName: i.dataset.collection });
                      return void (this.menu.accordianMediaQuery.matches && t.active ? (t.deactivate(), this.activeLayer.clearActive(), (this.activeLayer = !1), this.collapseMenu()) : t.setActive());
                  }
                  if (i.classList.contains("js-select-component")) {
                      e = this.get(i.dataset.collection);
                      const t = e.active;
                      if (this.activeLayer === e && t) return e.el.itemContainer.classList.remove("active"), void (e.active = !1);
                      if (i.classList.contains("js-layer-group") && e.layerGroup) return void e.layerGroup.setActive(e);
                      e.setActive(!0);
                      const n = this.menu.accordianMediaQuery.matches;
                      let r, s;
                      return (
                          e.get("layer_group")
                              ? ((r = e.el.itemContainer.offsetTop), n ? ((r += e.parentComponent.el.componentContainer.offsetTop), (s = e.el.menuContainer.parentElement)) : (s = e.parentComponent.el.componentContainer))
                              : ((r = e.el.itemContainer.offsetTop), n ? ((r += e.el.itemMenu.parentElement.offsetTop), (s = e.el.menuContainer.parentElement)) : (s = e.el.itemMenu.parentElement)),
                          void (
                              t ||
                              (function (t, e, i, n) {
                                  const r = t,
                                      s = "horizontal" === n ? "scrollLeft" : "scrollTop",
                                      o = t[s],
                                      a = e - o,
                                      c = Date.now();
                                  !(function t() {
                                      const e = Date.now() - c,
                                          n = Math.easeInOutQuad(e, o, a, i);
                                      e < i ? ((r[s] = n), requestAnimationFrame(t, 20)) : (r[s] = o + a);
                                  })();
                              })(s, r, 500, "vertical")
                          )
                      );
                  }
                  if (i.classList.contains("js-select-filter-group")) return void (i.parentElement.classList.contains("active") && i.parentElement.classList.remove("active"));
                  if (this.activeLayer && i.dataset.collection === this.activeLayer.get("file_path"))
                      return (
                          this.menu.accordianMediaQuery.matches
                              ? (this.activeLayer.clearActive(), this.activeLayer.get("layer_group") && this.getLayerGroup(this.activeLayer.get("layer_group")).deactivate(), (this.activeLayer = !1))
                              : this.CONTAINER.menu.parentElement.classList.add("active"),
                          !1
                      );
                  void 0 !== i.dataset.collection
                      ? ((e = this.get(i.dataset.collection)), e && (this.closeLayerFilters(), e.setActive(!0)))
                      : void 0 !== i.dataset.itemIndex &&
                        ((e = this.get(i.dataset.zone)),
                        (this.setting = !0),
                        e && ("LAYER_GROUP_BY" === e.LAYER_TYPE ? e.setItemByIndex(i.dataset.itemIndex) : (e.getItem(i.dataset.itemIndex).setActive({ scroll: !1, linked: !0, details: !0 }), this.onItemClick())),
                        (this.setting = !1),
                        this.updateNotify());
                  const n = this.layerFilters;
                  let r,
                      s = !1;
                  for (let t = 0; t < n.length; t += 1) {
                      const e = n[t];
                      i.dataset.collection === e.getSafeName() && ((s = e.toggleActive()), (r = e.getName()));
                  }
                  !0 === s && (this.addLayerHistory(r), this.closeLayers());
              }
              getDownloadLink() {
                  return En.ASSETURL + this.buildConfigString() + ".jpg";
              }
              getScaledLink(t) {
                  return `${En.ASSETURL + t}/${this.buildConfigString()}.jpg`;
              }
              getTile(t, e) {
                  return `${En.ASSETURL}tile/1024/${t}/${e}/${this.buildConfigString()}.jpg`;
              }
              getCubicTile(t, e, i, n) {
                  return `${En.DYNAMIC_TILE_URL}${this.buildConfigString()}_${e}_${i}_${n}.jpg`;
              }
              getSocialImage() {
                  return 36 === this.CONFIG_STRING_BASE ? En.DYNAMIC_SOCIAL_URL + this.buildConfigString() + "_36.jpg" : En.DYNAMIC_SOCIAL_URL + this.buildConfigString() + ".jpg";
              }
              addReference(t) {
                  const e = t.get("id");
                  e ? (this.byId[e] = t) : this.byId.push(t), t.layers || (t.configurator = this);
              }
              chooseReactiveNeighbours() {
                  const t = this.allLayers;
                  for (let e = 0; e < t.length; e += 1) t[e].chooseReactiveNeighbours();
              }
              showScene(t) {
                  this.CONFIGURATION.setLayerDetails(this.allLayers, this.scene), this.reset(), this.generateDynamicUrls(t), (this.scene = t), this.loadData();
              }
              setScene(t) {
                  t !== this.scene && (this.clearHotspots(), this.showScene(t));
              }
              reset() {
                  let t;
                  for (t = 0; t < this.allLayers.length; t += 1) this.allLayers[t].destroy();
                  (this.filters = []),
                      (this.attributes = {}),
                      (this.layers = []),
                      (this.layerGroups = []),
                      (this.layerFilters = []),
                      (this.layerGroupBys = []),
                      (this.allLayers = []),
                      (this.el = {}),
                      (this.activeLayer = null),
                      (this.byId = []),
                      (this.postLoadTickboxElements = []);
              }
              resetMenus() {}
              getActiveElements() {
                  const t = { current: this.buildConfigString(), sceneName: this.getCurrentSceneDisplayName(), url: document.location.href, previewImage: this.getSocialImage(), items: [] };
                  for (let e = 0; e < this.allLayers.length; e++) {
                      const i = this.allLayers[e],
                          n = i.activeItem;
                      if (!n) break;
                      let r;
                      if (
                          ((r = i.layerGroup ? i.layerGroup.name : i.parentComponent ? (i.parentComponent.layerGroup ? i.parentComponent.layerGroup.name : i.parentComponent.get("name")) : i.get("name")), "LAYER_GROUP_BY" === i.LAYER_TYPE)
                      ) {
                          let e = {
                              component: i.get("name"),
                              componentGroup: r,
                              componentId: i.get("build_order"),
                              id: n.attributes.id,
                              name: n.attributes.name,
                              thumbnail: En.THUMBPATH + n.attributes.image_path + ".jpg",
                              description: n.attributes.description,
                              productCode: n.attributes.product_code,
                              filters: i.parseFilters(),
                          };
                          (void 0 !== e.productCode && null !== e.productCode) || delete e.productCode, t.items.push(e);
                      } else {
                          let e = {
                              component: i.get("name"),
                              componentGroup: r,
                              componentId: i.get("build_order"),
                              id: n.get("index"),
                              name: n.get("name"),
                              thumbnail: En.THUMBPATH + n.get("image_path") + ".jpg",
                              description: n.get("description"),
                              productCode: n.get("product_code"),
                              filters: n.parseFilters(),
                          };
                          (void 0 !== e.productCode && null !== e.productCode) || delete e.productCode, t.items.push(e);
                      }
                  }
                  return t;
              }
              reload(t) {
                  (this.options.url = t), this.reset(), this.resetMenus(), this.loadData();
              }
              loadData() {
                  const t = new XMLHttpRequest();
                  t.open("GET", En.DYNAMIC_DATA_URL, !0);
                  const e = this;
                  (t.onreadystatechange = function () {
                      if (t.readyState === XMLHttpRequest.DONE && 200 === t.status) {
                          (e.data = JSON.parse(t.responseText)),
                              !0 === e.IS_DEBUG && (console.log("Configurator. loaded data:"), console.log(e.data)),
                              e.reset(),
                              this.panoViewer && this.panoViewer.clearHotspots(),
                              e.LAYER_HISTORY_CONTROLLER.reset();
                          const i = e.data.filter_groups;
                          if (((e.filters = !(!i || !i.length) && new Zi(e, i)), !e.postLoadFilters)) {
                              e.postLoadFilters = [];
                              for (const t in e.filters.byGroup) {
                                  const i = Object.keys(e.filters.byGroup[t].filters)[0];
                                  e.postLoadFilters.push([t, i]);
                              }
                          }
                          for (let t = 0; t < i.length; t += 1) {
                              const n = i[t];
                              ("layer" !== n.render_as && "layerFilter" !== n.menu_type) || e.layerFilters.push(new an(e, e.options, i[t]));
                          }
                          e.options.sceneSelector = e.options.sceneSelector || e.data.project_info.scene_selector;
                          const { layers: n } = e.data;
                          e.create(n), (e.loaded = !0);
                          const r = new CustomEvent("scene-data-loaded", {});
                          e.CONTAINER.main.dispatchEvent(r);
                      } else t.readyState === XMLHttpRequest.DONE && t.status;
                  }),
                      t.send();
              }
              postLoad() {
                  this.filters.filters.forEach((t) => {
                      void 0 !== t.el && t.active
                          ? Array.isArray(t.el)
                              ? t.el.forEach((t) => {
                                    t.classList.add("active");
                                })
                              : t.el.classList.add("active")
                          : t.el &&
                            (Array.isArray(t.el)
                                ? t.el.forEach((t) => {
                                      t.classList.remove("active");
                                  })
                                : t.el.classList.remove("active"));
                  });
              }
              onItemClick() {
                  const t = new CustomEvent("item-click", { detail: {} });
                  this.CONTAINER.main.dispatchEvent(t);
              }
              rotateHorizontal(t) {
                  this.panoViewer.rotateHorizontal && this.panoViewer.rotateHorizontal(t);
              }
              rotateVertical(t) {
                  this.panoViewer.rotateVertical && this.panoViewer.rotateVertical(t);
              }
              onInteractionZoom(t) {
                  t < 0 ? this.panoViewer.zoomIn && this.panoViewer.zoomIn() : this.panoViewer.zoomOut && this.panoViewer.zoomOut();
              }
              onInteractionStart() {
                  this.panoViewer.onInteractionStart && this.panoViewer.onInteractionStart();
              }
              onInteractionEnd() {
                  this.panoViewer.onInteractionEnd && this.panoViewer.onInteractionEnd();
              }
              setRotation(t, e) {
                  this.panoViewer.setRotation(t, e);
              }
              getRotation() {
                  return this.panoViewer.getRotation();
              }
              setZoom(t) {
                  this.onInteractionZoom(t);
              }
              onHotspotClick(t, e, i) {
                  this.log(`onHotspotClick ${t} ${e},${i}`),
                      this.allLayers.forEach((e) => {
                          "LAYER_GROUP_BY" === e.LAYER_TYPE ? e.getName() === t && e.setActive() : e.attributes.name === t && e.setActive();
                      });
                  const n = new CustomEvent("hotspot-click", { detail: { hotspotId: t, hotspotTheta: e, hotspotPhi: i } });
                  this.CONTAINER.main.dispatchEvent(n);
              }
              addLayerHistory(t) {
                  this.LAYER_HISTORY_CONTROLLER.add(t);
              }
              rewindLayerHistory(t) {
                  this.LAYER_HISTORY_CONTROLLER.rewind(t);
              }
              onEnterFullscreen() {
                  this.GESTURE_HANDLER.onEnterFullscreen();
              }
              onLeaveFullscreen() {
                  this.GESTURE_HANDLER.onLeaveFullscreen();
              }
              generateDynamicUrls(t) {
                  "liveDataExport" === En.DYNAMIC_DATA_FILENAME || En.DYNAMIC_VERSION.includes(".")
                      ? ((En.DYNAMIC_DATA_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_VERSION}/${En.DYNAMIC_DATA_FILENAME}.json`),
                        (En.DYNAMIC_THUMB_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_VERSION}/thumb/`),
                        (En.DYNAMIC_SOCIAL_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_VERSION}/social/`),
                        (En.DYNAMIC_SCENE_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_VERSION}/`))
                      : ((En.DYNAMIC_DATA_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_DATA_FILENAME}.json`),
                        (En.DYNAMIC_THUMB_URL = `${En.DYNAMIC_BASE_URL}${t}/thumb/`),
                        (En.DYNAMIC_SOCIAL_URL = `${En.DYNAMIC_BASE_URL}${t}/social/`),
                        (En.DYNAMIC_SCENE_URL = `${En.DYNAMIC_BASE_URL}${t}/`)),
                      (En.DYNAMIC_PREVIEW_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_VERSION}/preview/`),
                      (En.DYNAMIC_TILE_URL = `${En.DYNAMIC_BASE_URL}${t}/${En.DYNAMIC_VERSION}/tiles/`);
              }
              getCacheable() {
                  return this.CACHEABLE;
              }
              getWebp() {
                  return En.WEBP;
              }
              getDynamicBaseUrl() {
                  return En.DYNAMIC_BASE_URL;
              }
              getStaticImageUrl() {
                  return En.STATIC_IMAGE_URL;
              }
              getDynamicThumbUrl() {
                  return En.DYNAMIC_THUMB_URL;
              }
              getDynamicSceneUrl() {
                  return En.DYNAMIC_SCENE_URL;
              }
              getDynamicVersionUrl() {
                  return En.DYNAMIC_VERSION;
              }
              getAssetUrl() {
                  return En.ASSETURL;
              }
              getCurrentSceneId() {
                  return this.scene;
              }
              getCurrentSceneDisplayName() {
                  if (!this.options.sceneSelector || !this.options.sceneSelector.scenes) return this.options.scene;
                  {
                      const { scenes: t } = this.options.sceneSelector;
                      for (let e = 0; e < t.length; e += 1) if (t[e].id === this.scene) return t[e].displayName;
                  }
                  return "";
              }
              getCameraRotationLimits() {
                  return { limit_camera_rotation: this.data.limit_camera_rotation, camera_rotation_min: this.data.camera_rotation_min, camera_rotation_max: this.data.camera_rotation_max };
              }
              devLogCameraInfo() {
                  this.panoViewer.devLogCameraInfo();
              }
              log(t) {
                  !0 === this.IS_DEBUG && console.log("Configurator. " + t);
              }
              createContainer(t) {
                  const e = document.createElement(t.type);
                  return (e.id = t.id), (e.className = t.className), void 0 !== t.container && t.container.appendChild(e), e;
              }
              initialiseAPI() {
                  this.INITIALISED = !0;
                  const { options: t } = this,
                      e = t.dimensionsHotspot || [32, 32];
                  let i;
                  (i =
                      void 0 !== t.pathAssetHotspot
                          ? `${t.settings.STATIC_BASE_URL}${t.pathAssetHotspot}`
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACCCAYAAACO9sDAAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAgKADAAQAAAABAAAAggAAAAARhnUtAAAPLklEQVR4Ae2dWYwcVxWGZ8aT2I63SbAzNnbiGdtJlNXOhi3LgEHigRdeWAQ8AC+AEBIRQgICElGiCFCQEA9ErEJ5AQmBxCIQvBAcObGceHdsjPcZr5lxjMfJeBtv/F9PV890Ty9VXedUV3fXkX5XdXXVufee8997zz11e9zZ0YJy8+bNW9SsOcLsSUeuTSsB15CrwvUScG1UeDc4dnZ2cq2lpLMVWiOHv0ftCIDjpzu164r0QoizQITg2NTSdASQs7tk8TuEwOE9OqdnN0IYNUaEtwXIcE6kuKFj00jTEECOnyWrLsnjtpRa+KLqdVw4KSJcSGkdi6qVagLI6fTsxQKOp8c3kzAiQIZTIgMjRSollQSQ4wnOlgt9QhCo6bQphcBxQDgsIqQuiEwVAeT4GTLUMmGp0C20klxTYwaFIyLC5bQ0LBUEkOOZ0+8RGOoJ8lpZCBKZGg6JCMQMDZWGEiA/x98rC9DrW93xpY6GCEeEA42MERpGADm/V41/WJgptLNcUuPfFAmGGmGExAkgx+NwHA8BMpmwAATYJSKQbEpMEiWAnH+nWvaocGtiLWyugsZU3R0iwXBS1U6EAHI88ztz/QohkTKTMqBDOTel85CwX0Tg3FXcnZEf8h9XK253bUnrKSeRxGhAjOAmrgTIhvzYfnOfEtwIIOf3q/kPCm5lxDZvcyhgGtitkeCYR3VdnCPn43jW9pnYWeC/IsFBO3XjmkwJIMej7xHhbuuKZvpyFhgUCXZb2sKMAHI+kf6TAku9TPwscFKqd4oIZBJjC06zEiL9zPlW1qysh9fj2NpETEYA9f6HVJt+kxr5KSH5RPaR5Sh7Bdlgwkso3kCSfePFDJs42Ad4XnhLSM1bO9WlVI5qFNhTejHq59ivXOV8Ejxpcz7OXiUwJbGvAMfPEaIKpDgj8NLmDWGHwLU0SL9sPyYSHIhTmVgjgCrQp8LJ66dB2DH0hPA+YaUACayFnT30ui3CZiGxlK3KqiTbRQLigrqkbgLI+fQqeljdOuqqcfFDlM2q40PCWoHhPClhgwdEeFnYJvC5EUIwuFUkqOttYl3Ok/N5o7deiD2FSEc9Qr3XC58WFgmNlnOqwB+EfwqNIAJlviISRJ6eIhNAzmflQG9rRG6f+lL2Z4W7hLQJ8cLvhX8JSW8EhYSbRAJGhNBSDwHul3be6iUtBJtfFfqTLriO8k7omV8L2+t4Ns4jbDPbF0VBJAKo98+X8jVCpOeiVKjMvZT5OeGDQpLllqlK5EvEBj8X6pqfI5fW0cF7g80iAT9UCSWhDSrnsz17vZBkoLVa5T0lsG5vViHH8DOBYDEJuaxCNogEobagRyEA6+qk5t1pKutLwkeFVhHigl8KlxJo0HERYGeYckIRQL2/R8reH0ahwT0LpeObQiPiDIPqV1VxSt/+QBisepfNlxtFgpFaqojoq4qcD0mSSvYsVVkvCK3ofOz8XuFHArkLbyE9X1NqEkAa7hYYAbyFKJ/ekURZ3m2ppp8Y6hmBjKWn3K7OW3PKrkoAKbhVNbzPs5Z53fSI54VmDvaimImA+mmBlY2n3C8fdlcroCoB9GCfML2aAoPv7pGO7whJri4Mqh1bBYEuK5yVsTVVVoDv+ip/XeXnWGIOFeyv9rDBdwR8DIe8lm1HoXcyEjD9eUlf3pdl9VcbAZboCaYAL5kjxc8Kc70KaBK9kP97gtc7jZnSjS/LSlkCiDGduntZ2SfsLrLU82q0XS2T0UQnYBqsOl/HqEpFX5YlgArCMZ4B2cek33Pui2Grhj3KEvgLTqXPVqdmup0ilRhXkTFTNES/QND3+eiP2TwxNjbWsWnTprLK1q1b19HdXckkZR+xvkjH2CLsslYsfSuEt0r1MtQXiZjCzpq1RRftPhBTvCj02qmMpmloaKhj4cKynaFjZGSkY968edEU2t99TiqfEmpm8eoo+lVlB9FfkHJTQHnrFB6JdfIZPd0w58eqeXIPs8/ii07FkYkskiIC5IM/th17CK91GeIyqW0B3rt4LA0X531cqEERAXQVJ3klfr4s3WTAMglnAY9RAN/i44KUEsCr9y9Tid6570KjWuTkPrVjtUNbinxcCHk1NJD581qXM/dPCTgdGldTZVdXV8UgUAFSzecTvuFTKu914zIXydf8KZqb6C0QQOcLSj7zvYVAqtT0/gULFnScPn3aol1J6GDJ/Jiw3bAwfM7fWj6LzslTAMs/D4HFqetaHg110vkJB70FX3sTgN6/3qEB7aSSjR2hNndEMEohEMwRQHMC0fncCArC3vqAbiS2yCSeBQgILaVHPs/5PhgBGBI8hmnmr0ziW2BNfBVFGuiUuR/2TCZA0R0GHwg2HjfQk6kYTwoV5m0jg+T0BQTwSIA/ooqmbqPH8PBwR09PT1mcP3/eyLbmahidVxlrzcUBwTLQ49VvKod/zX0dKXZ0NR9jT35bYCU5n3flA0BShNaSDf+2FoUAQYe10Dwd3zMFePR+0o1FKUeLGre5jllqP9Oqpcz0IoB11GrZ6GbWZT2tzoYAbBq0lmXWCjN9OQtY5wNyBPCYAhiuMrG3gLWvcgTwWKrlkgz27W97jdY/m5vBFACsJSOAtUXH9TGyWm6q0ctx+1w9aUbroWq8+dm/WMByes0tAy0ZRQX5xY/lehWdmUxYwHJ0zY0A1lOAJUMnmp2dBRawJMA0jxjAsoJBo7PjhAUs7dtt3fuppmUFJ5qdnQUWMF0JQIAbgWajY9EvT4x0ZmomLGD5i6FrGQEmDNssZ5Yd7DoEuGrcckuGGletJdRZEuCGBwEuOJCqJTxn1AhLAlz1mAJop2UljezWEmquqxXvGLYkR4CLhgoDVRkBAkvYHvkxh2XQfoURwIMAWRxg6/hAm3XHuggBPP52rXVFAwO0+9G6Y13yGgGOtLunnNp/wljvKAQYNVaKui1C7tenDrrbWeVm48aPdulnwlek1DoXQLAyYFzZdlfH8nq/oRGuyve5VQA6PQJBy580G7a7aVVZ2zPnc6YAxHJtOa5x/P/VC86zY3wLWA//OZ8HBMj9sYD4dSzSwHDFsJVJfAsQT22Lr6ZIQ87nAQHeLvrK7oP1sGVXs+bSdEDVtZ6mcz7PEUDBALkA6wIwcUYArBBfrIf/0bzPi3YEe0wDO9X2bDkYnwDWHWk4qFIwBfDZgwDofDUoLDvWZQFiqaN1PVn5oYKvJxNgSPdbvmgIiv+TTrJRILBG9OMfoz9S9Ql8fCa4o0AAzQljulgYGoIbDI6HpGOHgZ52VHFSjbb+O4HD8jWvlXNSIED+8/H80frwV2uF9err7e3t4I9ElEMK/lJ4abOsez/6i3xcSgCmAVLD1kIQQ0CYSXgL8OLnlfC3h7oT3+LjghQRQEMDc/WU/1SgcHe8k1/p8cLQE09VWzzN/z5+zbilJ/M+LqgtIkD+KvOOhzD0/N1DcQvqZN63XvphpqLhnwtTCCCGsETw2tDxW+k+T8GZVLQACblfVPy2/i/OybdT3vlMIUBeP5G7h5BxfNFDcQvp/J3a4pGaL+vTsgQQU4gDPDaK4CfSmqlZFVChFAlDv4dtSP2Wje3KEiBvEM9tXS+pDF5wZDJhAaLzn0x8ND0r2/spoRoBWIZ4bBilXKLb7wuFlCQX21iY958TPF6fX5beinsJKxJAQwZLtgHBS/4nxc8IUwITrwJTqpcM7PPClAjdqL6H5MuKqfiKBMgXPqCj1yhAEceEZwWM0I5CJ/uhsMep8fiuKrGqEkDMYaj2qlzQ5oM6eUFoxyTRj9XurYEhHI578j6sqLoqAXhKCogePV4STa7UG/rwLcFr5TG5rDScMy8/J2x0rAwvfcpG/pPLrEmA/M17dfTuoawKnhasf/2Sb0JqDpD8u4Jnz8dX+KymhCKAmESlj9bUFv+GQan4mtCqS8RTats3BKY9TyHwCzWahiJAvqY4JYmInRHg24JHQiTflIYcXlOpXxdOO5f+rvQfDlsG/xNFaNE79Dm6eZ3QHfqheDeu1eOMCLfFU9PQpwmkfyP8LYFaUNbGsL2f+kQiAA+IBHfpsIrzhGS+yvmK8GRC5VkWs0/KfipUXYoZFrhTzo9UVmQCUFmR4DEdFhtWPIyqJ3QTRFgQ5uYG38Pb1JeEDULFJIy+s5Tjcv7OqArrJcAtKugDQtJD860q8yPCxwVGhrQJ8y+xy18ElnpJCankDSJA5JVaXQSgVRoF5urAHA0ZkpZpKvDDwieFhUkXXqY8evyfhX8ISTqeqlwVXpPzIV9kqZsAlCQSMByvFmLpQVedQrmPCpBhjcAIkZQQcPF3EF4Wtgl8TlpuqMDX5fy69w/EdpxI0K9KPJR0y8uUN1PX1gkEqA8KdwjWQi/7j7Bb+LcwKjRSdsv5g3EqEJsAFC4SYPBlcSri8Owi6YSY1Av0CZAkrIzpxmPCgEDiBsfHMraet5Qjcv7euApNCEAlRAKidIyeZmHKImYgnzFLIIidIVwRCKQuCPTqYcE7YaMi6pbTcr5JKtmSAF1qDiTorbtZ2YNhLDCkm7aKAMz/scWMANREowD6HhaW8jkTcwsMSuObcr5ZbsGUAEFzRYQHdL48+JwdTSxwWI4nDjEVFwJQQ5EAAkCETOJZgN6+T84P/YInSnFuBKASIgFBIcuypF4eUWwrCbkF8vtuAakrAfCESEC0TXBI5jCT8BZ4R7cS7LEycRN3AlBzkYDULcEhbxIzqW2B47qFYC9ybr+26uI7EiFAUKSIAAEgAoTIZKoFcDiOhwCJSKIEoEUiAcmXlcJ8PmdSsAD5/F1yPgmpxCRxAgQtExFIGJGqhRDtLDh8rxxfcwevh5EaRgAak48N7tUpuXoyie0kZPKOCvuTmOsrGbahBAgqlZ8WVugzMUKrEwHHnxAOJj3cq8wpkgoCBLUSEXgxw2hAKrnVcges6Y8JZPSS3jSiYstLqggQVFFEYJfRcqFPaMSOIxVrJuzYGRBwPOepklQSILBQPkYgm7hEYNWQ6voG9daR9C1RPUM9r27d1/Mqpy5pFoMSME5XCyECSGtWcUR1w+mn5HT2GKRemoYAky0pMrCz506BDR6MDI2aJtg1RE8/A+T0Szo2lTQlAUotLEL06BpEAIwOjBYeQq8mR39WwOH0+KaWliBAqQdECEaEOcLsSUeukYKejGDkIDhjnp4Mro0KbATNHeXw1AVxqlss+T+JiCV7XFaNoQAAAABJRU5ErkJggg=="),
                      (t.isDebug = !1),
                      (this.IS_DEBUG = t.isDebug),
                      (this.panoViewer = new ji({
                          container: this.CONTAINER.stage,
                          containerHotspot: this.CONTAINER.hotspot,
                          containerElementHolder: this.CONTAINER.elementHolder,
                          dimensionsHotspot: e,
                          pathAssetHotspot: i,
                          callbackHotspotClick: this.onHotspotClick.bind(this),
                          isDebug: t.isDebug,
                          colourClear: t.colourClear,
                          colourBackground: t.colourBackground,
                          colourBackgroundInitialDetail: t.colourBackgroundInitialDetail,
                      }));
              }
              showUI() {
                  this.CONTAINER.main.classList.remove("hide-ui");
              }
              hideUI() {
                  this.CONTAINER.main.classList.add("hide-ui");
              }
              parseUrl() {
                  if (document.location) {
                      let t = document.location.pathname.replace(En.BASEPATH, "");
                      if (
                          (this.log("Checking document location for config: " + t),
                          (t = t.split("/")),
                          2 === t.length ? (this.log(`Setting scene and config from url ${t[0]} ${t[1]}`), (this.scene = t[0]), (t = t[1])) : 1 === t.length && (this.log("Setting config from url: " + t[0]), (t = t[0])),
                          t.length)
                      )
                          return t;
                  }
              }
              setBasePath(t) {
                  En.BASEPATH = t;
              }
              toggleFullScreen() {
                  this.FULLSCREEN_CONTROLLER.toggleFullScreen();
              }
              addHotspot(t, e, i) {
                  this.panoViewer.addHotspot(t, e, i);
              }
              clearHotspots() {
                  this.panoViewer.clearHotspots();
              }
              addElementHolder(t, e, i) {
                  this.panoViewer.addElementHolder(t, e, i);
              }
              clearElementHolders() {
                  this.panoViewer.clearElementHolders();
              }
              getSkuList() {
                  let t = [];
                  return (
                      this.getActiveElements().items.forEach((e) => {
                          e.productCode && t.push(e.productCode);
                      }),
                      t
                  );
              }
              setSku(t) {
                  let e = null;
                  if (("string" == typeof t ? (e = this.getItemBySku(t)) : "object" == typeof t && (e = this.getItemByZone(t)), !e)) return;
                  const { item: i } = e;
                  i.setActive();
              }
              setSkuList(t) {
                  let e = !1;
                  const i = [];
                  t.forEach((t) => {
                      let n = null;
                      if (("string" == typeof t ? (n = this.getItemBySku(t)) : "object" == typeof t && (n = this.getItemByZone(t)), !n)) return;
                      const { item: r, layerIndex: s, attributes: o } = n;
                      let a = !1;
                      r.filter &&
                          r.filter.forEach((t) => {
                              "reactive" === t.type && (a = !0);
                          }),
                          a ? i.push({ layerIndex: s, item: r, sku: r.attributes.product_code, ...(o && { attributes: o }) }) : (r.setActive(), (e = !0));
                  }),
                      i.forEach((t) => {
                          if (e) {
                              const e = this.getItemFromLayerBySku(t.layerIndex, t.sku, t.attributes);
                              e && e.setActive();
                          } else t.item.setActive();
                      });
              }
              getItemBySku(t, e = !1) {
                  let i = null;
                  return (
                      this.allLayers.forEach((n, r) => {
                          if (i) return;
                          const s = this.getItemFromLayerBySku(r, t, e);
                          s && (i = { item: s, layerIndex: r });
                      }),
                      i
                  );
              }
              getItemFromLayerBySku(t, e, i = !1) {
                  const n = this.allLayers[t];
                  if (!n.items) return !1;
                  return n.items.find((t) => {
                      if (t.attributes.product_code !== e) return !1;
                      if (!0 !== t.visibility) return !1;
                      if (i)
                          for (const [e, n] of Object.entries(i))
                              if (void 0 !== t[e]) {
                                  if (t[e] !== n) return !1;
                              } else if (void 0 !== t.attributes[e]) {
                                  if (t.attributes[e] !== n) return !1;
                              } else {
                                  if (void 0 === t.attributes.description) return !1;
                                  {
                                      let i;
                                      if (((i = "string" == typeof t.attributes.description ? JSON.parse(t.attributes.description) : t.attributes.description), void 0 === i[e])) return !1;
                                      if (i[e] !== n) return !1;
                                  }
                              }
                      return !0;
                  });
              }
              getItemByZone(t) {
                  const { zone: e, sku: i, ...n } = t;
                  let r;
                  if (!i) return;
                  const s = this.allLayers.findIndex((t) => t.attributes.name === e);
                  if (-1 !== s) {
                      const t = 0 !== Object.keys(n).length,
                          o = this.getItemFromLayerBySku(s, i, !!t && n);
                      o && (r = { item: o, zone: e, sku: i, attributes: n });
                  }
                  if (-1 === s) {
                      n.type = e;
                      const t = this.getItemBySku(i, n);
                      t && (r = { item: t.item, zone: e, sku: i, attributes: n });
                  }
                  return r || void 0;
              }
          }
          En.Configurator = fn;
          const pn = {
              updateUrl: !1,
              updateBrowserUrlMode: 2,
              isDebug: !0,
              fullscreen: { hideMenu: !0, enabled: !0 },
              hotspots: !0,
              hotspotFocus: !0,
              configStringBase: 16,
              gestureHandling: {
                  mode: "cooperative",
                  container: document.getElementById("gesture-hinter"),
                  enabledZoom: !0,
                  enabledRotate: !0,
                  enabledZoomFullscreen: !0,
                  enabledRotateFullscreen: !0,
                  enabledZoomRotate: !0,
                  hinterMessageZoom: "Use ctrl + scroll to zoom",
                  hinterMessageTouch: "Use two fingers to look around",
                  rotationScalar: 500,
                  touchZoomDelta: 25,
              },
              remote: !1,
              screenshot: { format: "jpeg", quality: 0.85 },
              colourClear: [1, 1, 1],
              colourBackground: [0.917, 0.914, 0.894],
              colourBackgroundInitialDetail: [0.702, 0.631, 0.415],
          };
          class gn {
              constructor(t = {}) {
                  (this.viewerElName = "onfigr"), this.create(t);
                  const e = new CustomEvent("viewer-loaded", {});
                  this.container.dispatchEvent(e);
              }
              create(t) {
                  const e = document.querySelectorAll(this.viewerElName);
                  if (0 === e.length) throw new Error(`The configurator couldn't locate a DOM element named <${this.viewerElName}>. Stopping initialisation.`);
                  if (e.length > 1) throw new Error(`Multiple <${this.viewerElName}> elements found in page. Stopping initialisation.`);
                  this.container = e[0];
                  let i = gn.updateDefaults(t);
                  (i.configuratorElement = this.container), (i = this.setUserAttributes(i)), (this.Configurator = new fn(i));
                  return (
                      new MutationObserver(this.loadAttributeChange.bind(this)).observe(this.container, { attributes: !0, childList: !1, subtree: !1 }),
                      Object.defineProperty(this.container, "getAttribute", {
                          value: (t) => ("config" === t ? this.Configurator.buildConfigString() : "screenshot" === t ? this.Configurator.getScreenshot() : window.HTMLElement.prototype.getAttribute.call(this.container, t)),
                      }),
                      Object.defineProperty(this.container, "buildConfigString", { value: () => this.Configurator.buildConfigString() }),
                      Object.defineProperty(this.container, "setConfiguration", {
                          value: (t) => {
                              this.Configurator.setConfiguration(t);
                          },
                      }),
                      Object.defineProperty(this.container, "getActiveElements", { value: () => this.Configurator.getActiveElements() }),
                      Object.defineProperty(this.container, "api", { value: this.Configurator }),
                      this.Configurator
                  );
              }
              setUserAttributes(t) {
                  const e = t;
                  (e.settings = {}), (e.configuratorElement = this.container);
                  const i = this.container.getAttribute("config");
                  if ((null !== i && 0 !== i.length && (e.config = i), null === this.container.getAttribute("image-src"))) throw new Error(`Missing 'image-src' attribute of <${this.viewerElName}>.`);
                  if (
                      ((e.settings.DYNAMIC_BASE_URL = this.container.getAttribute("image-src")),
                      null !== this.container.getAttribute("gesture-handling") && (console.log(this.container.getAttribute("gesture-handling")), (e.gestureHandling.mode = this.container.getAttribute("gesture-handling"))),
                      null !== this.container.getAttribute("base-path") && (e.settings.BASE_PATH = this.container.getAttribute("base-path")),
                      null === this.container.getAttribute("asset-src"))
                  )
                      throw new Error(`Missing 'asset-src' attribute of <${this.viewerElName}>.`);
                  if (((e.settings.STATIC_BASE_URL = this.container.getAttribute("asset-src")), null === this.container.getAttribute("scene"))) throw new Error(`Missing 'scene' attribute of <${this.viewerElName}>.`);
                  if (((e.scene = this.container.getAttribute("scene")), null === this.container.getAttribute("version"))) throw new Error(`Missing 'version' attribute of <${this.viewerElName}>.`);
                  return (
                      (e.settings.DYNAMIC_VERSION = this.container.getAttribute("version")),
                      null !== this.container.getAttribute("url-update") && (e.updateBrowserUrl = this.container.getAttribute("url-update")),
                      null !== this.container.getAttribute("data-filename")
                          ? (e.settings.DYNAMIC_DATA_FILENAME = this.container.getAttribute("data-filename"))
                          : void 0 === e.settings.DYNAMIC_DATA_FILENAME && (e.settings.DYNAMIC_DATA_FILENAME = "liveDataExport"),
                      e
                  );
              }
              static updateDefaults(t) {
                  return { ...pn, ...t };
              }
              loadAttributeChange(t) {
                  for (const e of t) {
                      if ("attributes" === e.type && "config" === e.attributeName) {
                          const t = window.HTMLElement.prototype.getAttribute.call(this.container, "config");
                          this.Configurator.setConfiguration(t);
                      }
                      if ("attributes" === e.type && "scene" === e.attributeName) {
                          const t = window.HTMLElement.prototype.getAttribute.call(this.container, "scene");
                          this.Configurator.setScene(t);
                      }
                      if ("attributes" === e.type && "base-path" === e.attributeName) {
                          const t = window.HTMLElement.prototype.getAttribute.call(this.container, "base-path");
                          this.Configurator.setBasePath(t);
                      }
                  }
              }
          }
          var Tn = gn,
              Rn =
                  (i(37),
                  i(39),
                  i(81),
                  i(50),
                  (function () {
                      function t(t, e) {
                          var i = this;
                          (this.HOLDER = t),
                              (this.CONTAINER = document.createElement("div")),
                              (this.CONTAINER.className = "menu-bar__container active"),
                              (this.API = e),
                              (this.BACK_BUTTON = document.createElement("div")),
                              this.BACK_BUTTON.classList.add("back_btn"),
                              (this.BACK_BUTTON.onclick = function (t) {
                                  i.HOLDER.dispatchEvent(new CustomEvent("nav-back"));
                              }),
                              (this.RESET_BUTTON = document.createElement("div")),
                              this.RESET_BUTTON.classList.add("reset_btn"),
                              (this.RESET_BUTTON.onclick = function (t) {
                                  i.HOLDER.dispatchEvent(new CustomEvent("refresh-config"));
                              }),
                              (this.MENU_CONTAINER = document.createElement("div")),
                              this.MENU_CONTAINER.classList.add("menu-container"),
                              this.CONTAINER.appendChild(this.BACK_BUTTON),
                              this.CONTAINER.appendChild(this.RESET_BUTTON),
                              this.CONTAINER.appendChild(this.MENU_CONTAINER),
                              this.HOLDER.appendChild(this.CONTAINER),
                              (this.ITEMS = []);
                      }
                      var e = t.prototype;
                      return (
                          (e.reset = function () {
                              void 0 !== this.MENU_CONTAINER && this.MENU_CONTAINER.replaceChildren();
                          }),
                          (e.updateLayers = function (t) {
                              var e = this,
                                  i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                              this.reset();
                              var n = document.createDocumentFragment();
                              i
                                  ? i.forEach(function (r, s) {
                                        var o;
                                        if (r.nested_layers) (o = e.createMenuItem({ name: r.name, type: "pallets", thumbnail: r.thumbnail, isNested: !0 }, s, !0)), e.ITEMS.push(o), (e.UI_LAYERS = i);
                                        else {
                                            var a = t.findIndex(function (t) {
                                                return r.layer_name === t.name;
                                            });
                                            if (a < 0) return;
                                            (o = e.createMenuItem({ name: r.name, type: t[a].type, thumbnail: r.thumbnail }, a)), e.ITEMS.push(o);
                                        }
                                        n.appendChild(o);
                                    })
                                  : t.forEach(function (t, i) {
                                        var r = e.createMenuItem(t, i);
                                        n.appendChild(r), e.ITEMS.push(r);
                                    }),
                                  this.MENU_CONTAINER.appendChild(n);
                          }),
                          (e.activateLayer = function (t) {
                              this.HOLDER.dispatchEvent(new CustomEvent("activate-layer", { detail: { layerIndex: t, isNested: !1 } }));
                          }),
                          (e.activateNestedLayer = function (t) {
                              this.HOLDER.dispatchEvent(new CustomEvent("activate-layer", { detail: { layerIndex: t, isNested: !0, nestedLayers: this.UI_LAYERS[t].nested_layers } }));
                          }),
                          (e.createMenuItem = function (t, e) {
                              var i = this,
                                  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if ("hidden" !== t.type) {
                                  var r = document.createElement("div");
                                  r.className = "menu-bar__option";
                                  var s = document.createElement("p");
                                  if (((s.innerText = t.name), (r.dataset.name = t.name.toLowerCase()), r.appendChild(s), t.thumbnail)) {
                                      var o = document.createElement("img");
                                      (o.src = "./image/".concat(t.thumbnail)), r.appendChild(o);
                                  }
                                  return (
                                      r.addEventListener("click", function (t) {
                                          i.ITEMS.forEach(function (t) {
                                              t.classList.remove("active"), t.classList.add("add-opacity");
                                          }),
                                              r.classList.add("active"),
                                              r.classList.remove("add-opacity"),
                                              n ? i.activateNestedLayer(e, n) : i.activateLayer(e);
                                      }),
                                      r
                                  );
                              }
                          }),
                          (e.manualClick = function (t) {
                              this.ITEMS.forEach(function (e) {
                                  e.dataset.name === t && (console.log("open panel: ", t), e.click());
                              });
                          }),
                          (e.onMenuClose = function () {
                              this.ITEMS.forEach(function (t) {
                                  t.classList.remove("active"), t.classList.remove("add-opacity");
                              });
                          }),
                          (e.showResetButton = function () {
                              this.RESET_BUTTON.classList.add("active");
                          }),
                          (e.hideResetButton = function () {
                              this.RESET_BUTTON.classList.remove("active");
                          }),
                          (e.setActiveItemAsEdited = function () {
                              this.ITEMS.forEach(function (t) {
                                  t.classList.contains("active") && t.classList.add("edited");
                              });
                          }),
                          (e.clearEdited = function () {
                              this.ITEMS.forEach(function (t) {
                                  t.classList.remove("edited");
                              });
                          }),
                          (e.hide = function () {
                              this.CONTAINER.classList.remove("active");
                          }),
                          (e.show = function () {
                              this.CONTAINER.classList.add("active");
                          }),
                          t
                      );
                  })()),
              vn =
                  (i(82),
                  (function () {
                      function t(t, e, i, n, r) {
                          var s = this;
                          (this.HOLDER = i),
                              (this.PARENT = t),
                              (this.NAME = e),
                              (this.ITEMS = n),
                              (this.CONTAINER = document.createElement("div")),
                              this.CONTAINER.classList.add("drop-down"),
                              (this.SELECTED = document.createElement("div")),
                              this.SELECTED.classList.add("drop-down___selected");
                          var o = document.createElement("p");
                          o.classList.add("drop-down___name"),
                              (o.innerText = e),
                              (this.CURRENT_VALUE = document.createElement("p")),
                              this.CURRENT_VALUE.classList.add("drop-down___value"),
                              this.SELECTED.appendChild(o),
                              this.SELECTED.appendChild(this.CURRENT_VALUE),
                              (this.OPTIONS = document.createElement("div")),
                              this.OPTIONS.classList.add("drop-down___options"),
                              this.CONTAINER.appendChild(this.SELECTED),
                              this.CONTAINER.appendChild(this.OPTIONS),
                              this.HOLDER.appendChild(this.CONTAINER),
                              (this.optionsActive = !1),
                              (this.SELECTED.onclick = function (t) {
                                  t.stopPropagation(), s.optionsActive ? s.hideOptions() : s.showOptions();
                              }),
                              (this.SELECTED_INDEX = r),
                              (this.RADIO_BUTTONS = []),
                              this.buildOptions(),
                              null == r && (r = n[0]),
                              this.setSelected(r),
                              (this.INDEX = null);
                      }
                      var e = t.prototype;
                      return (
                          (e.clearOptions = function () {
                              void 0 !== this.OPTIONS && this.OPTIONS.replaceChildren();
                          }),
                          (e.changeOptions = function (t) {
                              this.OPTIONS_EL.forEach(function (e) {
                                  console.log(t, e.dataset.option), t.includes(e.dataset.option) ? e.classList.remove("disable") : e.classList.add("disable");
                              });
                          }),
                          (e.buildOptions = function () {
                              var t = this;
                              this.clearOptions(), (this.OPTIONS_EL = []);
                              for (
                                  var e = function (e) {
                                          var i = document.createElement("div");
                                          i.classList.add("drop-down___option"), (i.dataset.option = t.ITEMS[e]), (i.dataset.type = t.NAME.toLowerCase());
                                          var n = document.createElement("input");
                                          (n.type = "radio"), (n.dataset.option = t.ITEMS[e]), t.RADIO_BUTTONS.push(n), t.ITEMS[e] == t.SELECTED_INDEX && (n.checked = !0);
                                          var r = document.createElement("p");
                                          (r.innerText = t.ITEMS[e].replaceAll("inch", '"')),
                                              i.appendChild(n),
                                              i.appendChild(r),
                                              t.OPTIONS.appendChild(i),
                                              t.OPTIONS_EL.push(i),
                                              (i.onclick = function (i) {
                                                  i.stopPropagation(),
                                                      t.setSelected(t.ITEMS[e]),
                                                      t.RADIO_BUTTONS.forEach(function (t) {
                                                          t.checked = !1;
                                                      }),
                                                      (n.checked = !0);
                                              });
                                      },
                                      i = 0;
                                  i < this.ITEMS.length;
                                  i++
                              )
                                  e(i);
                          }),
                          (e.changeSelected = function (t) {
                              this.setSelected(t),
                                  this.RADIO_BUTTONS.forEach(function (e) {
                                      e.dataset.option === t ? (e.checked = !0) : (e.checked = !1);
                                  });
                          }),
                          (e.setSelected = function (t) {
                              void 0 !== t ? ((this.SELECTED_INDEX = t), (this.CURRENT_VALUE.innerText = t.replaceAll("inch", '"')), this.hideOptions()) : console.log("selected is undefined");
                          }),
                          (e.setIndex = function (t) {
                              this.INDEX = t;
                          }),
                          (e.showOptions = function () {
                              this.OPTIONS.classList.add("active"), this.CONTAINER.classList.add("active"), (this.optionsActive = !0), null !== this.INDEX && this.PARENT.optionsOpened(this.INDEX);
                          }),
                          (e.hideOptions = function () {
                              this.CONTAINER.classList.remove("active"), this.OPTIONS.classList.remove("active"), (this.optionsActive = !1);
                          }),
                          t
                      );
                  })()),
              An = (function () {
                  function t(t, e, i, n) {
                      (this.HOLDER = t), (this.itemData = e), this.build(e, i, n);
                  }
                  var e = t.prototype;
                  return (
                      (e.build = function (t, e, i) {
                          t.disabled && console.warn("Active item is disabled"),
                              (this.CONTAINER = document.createElement("div")),
                              (this.CONTAINER.className = "menu-item"),
                              (this.CONTAINER.dataset.index = e),
                              t.hidden && this.CONTAINER.classList.add("hidden"),
                              this.HOLDER.appendChild(this.CONTAINER),
                              this.createItemHeader();
                          var n = document.createElement("p");
                          (n.className = "menu-item__name"), (n.innerText = t.attributes.name);
                          var r = document.createElement("p");
                          (r.className = "menu-item__price"), void 0 !== t.attributes.price ? (r.innerText = "$".concat(t.attributes.price)) : (r.innerText = "Missing");
                          var s = document.createElement("img");
                          if (((s.className = "menu-item__thumb"), (s.src = t.attributes.thumbnail), this.CONTAINER.appendChild(s), this.CONTAINER.appendChild(n), this.CONTAINER.appendChild(r), t.get("unavailable"))) {
                              this.CONTAINER.classList.add("unavailable");
                              var o = document.createElement("p");
                              (o.className = "unavailable-text"), (o.innerText = "Currently unavailable"), this.CONTAINER.appendChild(o);
                          }
                          t.active && this.setActive(!0);
                      }),
                      (e.setActive = function () {
                          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                          t ? (this.CONTAINER.classList.add("active"), (this.active = !0)) : (this.CONTAINER.classList.remove("active"), (this.active = !1));
                      }),
                      (e.createItemHeader = function () {
                          var t = document.createElement("div");
                          t.classList.add("item-header__container");
                          var e = document.createElement("div");
                          e.classList.add("selected_indicator"), t.appendChild(e), this.CONTAINER.appendChild(t);
                      }),
                      (e.createColorSelector = function (t) {
                          var e = document.createElement("div");
                          (e.className = "colour-selector__container"), this.CONTAINER.appendChild(e);
                          var i = document.createElement("div");
                          (i.className = "colour-thumb__container"), e.appendChild(i);
                          var n = document.createDocumentFragment();
                          t.forEach(function (t) {
                              var e,
                                  i = document.createElement("div");
                              (i.className = "colour__thumb active"),
                                  t.rgb ? ((e = document.createElement("div")).style.backgroundColor = "".concat(t.rgb)) : ((e = document.createElement("img")).src = t.thumbnail),
                                  i.appendChild(e),
                                  n.appendChild(i);
                          }),
                              i.appendChild(n);
                          var r = document.createElement("p");
                          (r.className = "colour__selected"), (r.innerText = t[0].name), e.appendChild(r);
                      }),
                      (e.getItemData = function () {
                          return this.itemData;
                      }),
                      t
                  );
              })(),
              _n = (function () {
                  function t(t, e, i, n) {
                      (this.MENU = t),
                          (this.ITEM_CONTAINER = document.createElement("div")),
                          (this.ITEM_CONTAINER.className = "item__container"),
                          this.createFilter(e),
                          e.appendChild(this.ITEM_CONTAINER),
                          (this.selectedIndex = 0),
                          (this.selectedItem = null),
                          this.build(i, n);
                  }
                  var e = t.prototype;
                  return (
                      (e.build = function (t, e) {
                          var i,
                              n = this,
                              r = document.createDocumentFragment(),
                              s = [];
                          t.forEach(function (t, o) {
                              if ((!t.disabled || t.active) && "Blank" !== t.attributes.name) {
                                  var a = new An(r, t, o, e);
                                  s.push(a),
                                      a.CONTAINER.addEventListener("click", function (t) {
                                          n.setItemActive(a.CONTAINER.dataset.index), n.selectedIndex != a.CONTAINER.dataset.index && n.MENU.showSelectMenu();
                                      }),
                                      t.active && ((i = a), (n.selectedIndex = o), n.MENU.setPreviousItem(t));
                              }
                          }),
                              this.ITEM_CONTAINER.appendChild(r),
                              (this.ITEMS = s),
                              this.ITEM_CONTAINER.prepend(i.CONTAINER);
                          var o = this.createDecisionPanel();
                          this.ITEM_CONTAINER.appendChild(o);
                      }),
                      (e.createFilter = function (t) {
                          var e = document.createElement("div");
                          (e.className = "filter__container"),
                              (this.itemCount = document.createElement("p")),
                              (this.itemCount.className = "item__count"),
                              (this.filterButton = document.createElement("div")),
                              (this.filterButton.className = "filter__button");
                          var i = document.createElement("div");
                          i.className = "filter__icon";
                          var n = document.createElement("p");
                          (n.className = "filter__text"), (n.innerText = "Filter"), this.filterButton.appendChild(i), this.filterButton.appendChild(n), e.appendChild(this.itemCount), e.appendChild(this.filterButton), t.appendChild(e);
                      }),
                      (e.createDecisionPanel = function () {
                          var t = this,
                              e = document.createElement("div");
                          e.className = "decision_panel__container";
                          var i = document.createElement("div");
                          (i.className = "decision__heaading"), (i.innerText = "Don't see anything you love?");
                          var n = document.createElement("p");
                          (n.className = "decision__text"), (n.innerText = "Work directly with a Made designer to make updates to your chosen Design Package.");
                          var r = document.createElement("button");
                          return (
                              (r.className = "button transparent"),
                              (r.innerText = "Talk to our design Team"),
                              (r.onclick = function () {
                                  t.MENU.HOLDER.dispatchEvent(new CustomEvent("design-team"));
                              }),
                              e.appendChild(i),
                              e.appendChild(n),
                              e.appendChild(r),
                              e
                          );
                      }),
                      (e.setItemActive = function (t) {
                          var e = this;
                          this.ITEMS.forEach(function (i) {
                              i.CONTAINER.dataset.index === t ? (e.setActiveMenuEdit(), i.setActive(!0)) : i.setActive(!1);
                          });
                      }),
                      (e.setActiveMenuEdit = function () {
                          this.MENU.setActiveMenuEdit();
                      }),
                      (e.setProductInfo = function (t) {
                          this.MENU.setProductInfo(t);
                      }),
                      t
                  );
              })(),
              In =
                  (i(134),
                  i(84),
                  i(136),
                  i(91),
                  i(95),
                  i(141),
                  i(146),
                  i(147),
                  i(101),
                  i(148),
                  i(150),
                  i(151),
                  i(152),
                  i(153),
                  i(40),
                  i(154),
                  (function () {
                      function t(t, e, i, n) {
                          (this.HOLDER = t), this.build(e, i, n), (this.COLOUR_EL = []), (this.DROP_DOWN = {}), this.thumbUrl;
                      }
                      var e = t.prototype;
                      return (
                          (e.build = function (t, e, i) {
                              if (!t.disabled && "Blank" !== t.attributes.name) {
                                  (this.CONTAINER = document.createElement("div")),
                                      (this.CONTAINER.className = "menu-item"),
                                      (this.CONTAINER.dataset.index = e),
                                      t.hidden && this.CONTAINER.classList.add("hidden"),
                                      this.HOLDER.appendChild(this.CONTAINER),
                                      this.createItemHeader();
                                  var n = document.createElement("p");
                                  (n.className = "menu-item__name"), (n.innerText = t.attributes.name);
                                  var r = document.createElement("p");
                                  if (
                                      ((r.className = "menu-item__price"),
                                      void 0 !== t.attributes.price ? (r.innerText = "$".concat(t.attributes.price)) : (r.innerText = "$ Missing"),
                                      (this.thumbnail = document.createElement("img")),
                                      (this.thumbnail.className = "menu-item__thumb"),
                                      (this.thumbnail.src = t.attributes.thumbnail),
                                      this.CONTAINER.appendChild(this.thumbnail),
                                      this.CONTAINER.appendChild(n),
                                      this.CONTAINER.appendChild(r),
                                      t.get("unavailable"))
                                  ) {
                                      this.CONTAINER.classList.add("unavailable");
                                      var s = document.createElement("p");
                                      (s.className = "unavailable-text"), (s.innerText = "Unavailable"), this.CONTAINER.appendChild(s);
                                  }
                                  (this.thumbUrl = t.attributes.thumbnail.substr(0, t.attributes.thumbnail.lastIndexOf("/"))), t.active && this.setActive(!0);
                              }
                          }),
                          (e.createDropdown = function (t, e, i, n) {
                              return (
                                  this.dropDownContainer || ((this.dropDownContainer = document.createElement("div")), this.dropDownContainer.classList.add("dropdown-container"), this.CONTAINER.appendChild(this.dropDownContainer)),
                                  (this.DROP_DOWN[i] = {}),
                                  (this.DROP_DOWN[i] = new vn(this, i, this.dropDownContainer, t, e)),
                                  this.DROP_DOWN[i].setIndex(n),
                                  this.DROP_DOWN[i]
                              );
                          }),
                          (e.optionsOpened = function (t) {
                              var e = 0;
                              for (var i in this.DROP_DOWN) e !== t && this.DROP_DOWN[i].hideOptions(), e++;
                          }),
                          (e.setActive = function () {
                              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                              t ? (this.CONTAINER.classList.add("active"), (this.active = !0)) : (this.CONTAINER.classList.remove("active"), (this.active = !1));
                          }),
                          (e.createItemHeader = function () {
                              var t = document.createElement("div");
                              t.classList.add("item-header__container");
                              var e = document.createElement("div");
                              e.classList.add("selected_indicator"), t.appendChild(e), this.CONTAINER.appendChild(t);
                          }),
                          (e.createColorSelector = function (t, e) {
                              var i = this,
                                  n = document.createElement("div");
                              (n.className = "colour-selector__container"), this.CONTAINER.appendChild(n);
                              var r = document.createElement("div");
                              (r.className = "colour-thumb__container"), n.appendChild(r);
                              var s = document.createDocumentFragment(),
                                  o = document.createElement("p");
                              (o.className = "colour__selected"),
                                  (o.innerText = e),
                                  t.forEach(function (t) {
                                      var n,
                                          r = document.createElement("div");
                                      (r.className = "colour__thumb"),
                                          (r.dataset.colour = t.colour),
                                          t.colour === e && r.classList.add("active"),
                                          null !== t.rgb
                                              ? ((n = document.createElement("div")).style.backgroundColor = "rgb(".concat(t.rgb, ")"))
                                              : ((n = document.createElement("img")).src = "".concat(i.thumbUrl, "/").concat(t.colour, ".png")),
                                          r.appendChild(n),
                                          s.appendChild(r),
                                          i.COLOUR_EL.push(r),
                                          (r.onclick = function () {
                                              i.COLOUR_EL.forEach(function (t) {
                                                  t.classList.remove("active");
                                              }),
                                                  r.classList.add("active"),
                                                  (o.innerText = t.colour);
                                          });
                                  }),
                                  r.appendChild(s),
                                  n.appendChild(o);
                          }),
                          t
                      );
                  })());
          function On(t) {
              return (
                  (function (t) {
                      if (Array.isArray(t)) {
                          for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                          return i;
                      }
                  })(t) ||
                  (function (t) {
                      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                  })(t) ||
                  (function () {
                      throw new TypeError("Invalid attempt to spread non-iterable instance");
                  })()
              );
          }
          function Cn(t, e) {
              var i = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                      (n = n.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      i.push.apply(i, n);
              }
              return i;
          }
          function Nn(t, e, i) {
              return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
          }
          var Ln = (function () {
                  function t(t, e, i, n) {
                      var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                      (this.MENU = t),
                          (this.ITEM_CONTAINER = document.createElement("div")),
                          (this.ITEM_CONTAINER.className = "item__container"),
                          (this.parentIndex = r),
                          this.createFilter(e),
                          e.appendChild(this.ITEM_CONTAINER),
                          (this.groupedItems = {}),
                          (this.dropdownSettings = {}),
                          this.build(i, n),
                          this.updateCount();
                  }
                  var e = t.prototype;
                  return (
                      (e.createFilter = function (t) {
                          var e = document.createElement("div");
                          (e.className = "filter__container"),
                              (this.itemCount = document.createElement("p")),
                              (this.itemCount.className = "item__count"),
                              (this.filterButton = document.createElement("div")),
                              (this.filterButton.className = "filter__button");
                          var i = document.createElement("div");
                          i.className = "filter__icon";
                          var n = document.createElement("p");
                          (n.className = "filter__text"), (n.innerText = "Filter"), this.filterButton.appendChild(i), this.filterButton.appendChild(n), e.appendChild(this.itemCount), e.appendChild(this.filterButton), t.appendChild(e);
                      }),
                      (e.updateCount = function () {
                          this.itemCount.innerText = "".concat(this.ITEM_CONTAINER.getElementsByClassName("menu-item").length, " items");
                      }),
                      (e.build = function (t, e) {
                          var i = this,
                              n = document.createDocumentFragment(),
                              r = [],
                              s = this.groupedItems;
                          t.forEach(function (t, i) {
                              null == s[t.attributes.name] && (s[t.attributes.name] = []);
                              var n = JSON.parse(t.attributes.description);
                              t.disabled ||
                                  !1 === t.visibility ||
                                  ("Blank" !== t.attributes.name &&
                                      (("wallpaper" === e.toLowerCase() && "wp" !== n.type) ||
                                          ("tile" === e.toLowerCase() && "fwt" !== n.type && "hwt" !== n.type) ||
                                          ("fwt" === n.type ? (n.type = "Full Wall Tile") : "hwt" === n.type && (n.type = "Half Wall Tile"),
                                          s[t.attributes.name].push(
                                              (function (t) {
                                                  for (var e = 1; e < arguments.length; e++) {
                                                      var i = null != arguments[e] ? arguments[e] : {};
                                                      e % 2
                                                          ? Cn(Object(i), !0).forEach(function (e) {
                                                                Nn(t, e, i[e]);
                                                            })
                                                          : Object.getOwnPropertyDescriptors
                                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                          : Cn(Object(i)).forEach(function (e) {
                                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                                            });
                                                  }
                                                  return t;
                                              })({ item: t }, n, { index: i })
                                          ))));
                          });
                          var o = function (t) {
                              if (0 === s[t].length) return "continue";
                              var o = s[t].find(function (t) {
                                  return !0 === t.item.active;
                              });
                              void 0 === o ? (o = s[t][0]) : ((i.set = o), (i.activeItem = o), i.MENU.setPreviousItem(o.item));
                              var a = On(
                                      new Set(
                                          s[t].map(function (t) {
                                              return { colour: t.colour, rgb: t.item.attributes.rgb };
                                          })
                                      )
                                  ),
                                  c = On(
                                      new Map(
                                          a.map(function (t) {
                                              return [t.colour, t];
                                          })
                                      ).values()
                                  ),
                                  l = {};
                              for (var h in s[t][0])
                                  if ("index" !== h && "item" !== h && "colour" !== h) {
                                      var u = void 0;
                                      "size" === h
                                          ? ((u = On(
                                                new Set(
                                                    s[t].map(function (t) {
                                                        return t.size;
                                                    })
                                                )
                                            )),
                                            i.activeItem && (i.dropdownSettings[h] = i.activeItem.size))
                                          : "type" === h
                                          ? ((u = On(
                                                new Set(
                                                    s[t].map(function (t) {
                                                        return t.type;
                                                    })
                                                )
                                            )),
                                            i.activeItem && (i.dropdownSettings[h] = i.activeItem.type))
                                          : "pattern" === h
                                          ? (u = On(
                                                new Set(
                                                    s[t].map(function (t) {
                                                        return t.pattern;
                                                    })
                                                )
                                            ))
                                          : "placement" === h &&
                                            ((u = On(
                                                new Set(
                                                    s[t].map(function (t) {
                                                        return t.placement;
                                                    })
                                                )
                                            )),
                                            i.activeItem && (i.dropdownSettings[h] = i.activeItem.placement)),
                                          (l[h] = u);
                                  }
                              var d = new In(n, o.item, o.index, e);
                              d.CONTAINER.addEventListener("click", function (e) {
                                  e.stopPropagation(),
                                      i.ITEMS.forEach(function (t) {
                                          return t.setActive(!1);
                                      }),
                                      d.setActive(),
                                      i.MENU.showSelectMenu(),
                                      i.setActiveMenuEdit();
                                  var n = i.findItem(t, d.colourSelected, d);
                                  n.item.setActive(), i.triggerItemSelected(n.item.layer), (d.thumbnail.src = n.item.attributes.thumbnail);
                              }),
                                  r.push(d),
                                  i.set && ((i.set = !1), n.prepend(d.CONTAINER)),
                                  d.createColorSelector(c, o.colour),
                                  (d.colourSelected = o.colour),
                                  d.COLOUR_EL.forEach(function (e) {
                                      e.addEventListener("click", function (n) {
                                          n.stopPropagation();
                                          var r = i.findItem(t, e.dataset.colour, d);
                                          r.item.setActive(), i.MENU.showSelectMenu(), i.triggerItemSelected(r.item.layer), (d.colourSelected = e.dataset.colour), (d.thumbnail.src = r.item.attributes.thumbnail);
                                      });
                                  }),
                                  (d.dropdownSettings = {}),
                                  (d.dropdownOptions = l);
                              var m = 0;
                              for (var E in d.dropdownOptions) {
                                  var f = d.dropdownOptions[E];
                                  if (((d.dropdownSettings[E] = o[E]), i.activeItem && (i.dropdownSettings[E] = i.activeItem[E]), f.length > 1)) {
                                      var p = void 0;
                                      (p = i.activeItem ? d.createDropdown(f, i.activeItem[E], E, m) : d.createDropdown(f, o[E], E, m)),
                                          m++,
                                          p.OPTIONS_EL.forEach(function (e) {
                                              e.addEventListener("click", function (n) {
                                                  n.stopPropagation(), (d.dropdownSettings[e.dataset.type] = e.dataset.option), (i.dropdownSettings[e.dataset.type] = e.dataset.option);
                                                  var r = i.findItem(t, d.colourSelected, d);
                                                  r.item.setActive(), i.MENU.showSelectMenu(), i.triggerItemSelected(r.item.layer), (d.dropdowmSelected = e.dataset.option), (d.thumbnail.src = r.item.attributes.thumbnail);
                                              });
                                          }),
                                          (d.dropdownSettings[E] = o[E]);
                                  }
                              }
                          };
                          for (var a in s) o(a);
                          this.ITEM_CONTAINER.appendChild(n), (this.ITEMS = r);
                          var c = this.createDecisionPanel();
                          this.ITEM_CONTAINER.appendChild(c);
                      }),
                      (e.setNested = function () {
                          this.NESTED = !0;
                      }),
                      (e.createDecisionPanel = function () {
                          var t = this,
                              e = document.createElement("div");
                          e.className = "decision_panel__container";
                          var i = document.createElement("div");
                          (i.className = "decision__heaading"), (i.innerText = "Don't see anything you love?");
                          var n = document.createElement("p");
                          (n.className = "decision__text"), (n.innerText = "Work directly with a Made designer to make updates to your chosen Design Package.");
                          var r = document.createElement("button");
                          return (
                              (r.className = "button transparent"),
                              (r.innerText = "Talk to our design Team"),
                              (r.onclick = function () {
                                  t.NESTED ? t.MENU.MENU.HOLDER.dispatchEvent(new CustomEvent("design-team")) : t.MENU.HOLDER.dispatchEvent(new CustomEvent("design-team"));
                              }),
                              e.appendChild(i),
                              e.appendChild(n),
                              e.appendChild(r),
                              e
                          );
                      }),
                      (e.setItemActive = function (t) {
                          this.ITEMS.forEach(function (e) {
                              e.CONTAINER.dataset.index === t ? e.setActive(!0) : e.setActive(!1);
                          });
                      }),
                      (e.setActiveMenuEdit = function () {
                          this.NESTED ? this.MENU.MENU.setActiveMenuEdit() : this.MENU.setActiveMenuEdit();
                      }),
                      (e.prependSelectedItem = function () {
                          var t = this.ITEMS.find(function (t) {
                              return t.active;
                          });
                          t && this.ITEM_CONTAINER.prepend(t.CONTAINER);
                      }),
                      (e.setProductInfo = function (t) {
                          this.MENU.setProductInfo(t);
                      }),
                      (e.triggerItemSelected = function (t) {
                          document.getElementsByTagName("onfigr")[0].dispatchEvent(new CustomEvent("item-selected", { detail: { itemLayer: t } }));
                      }),
                      (e.findItem = function (t, e, i) {
                          var n,
                              r,
                              s = this,
                              o = this.groupedItems;
                          return (
                              i.dropdownSettings.hasOwnProperty("size") && i.dropdownSettings.hasOwnProperty("pattern")
                                  ? ((n = o[t].find(function (t) {
                                        return t.colour === e && t.size == s.dropdownSettings.size && t.pattern == i.dropdownSettings.pattern;
                                    })),
                                    this.setDropdown(i, "size", this.dropdownSettings.size),
                                    (r = !0),
                                    void 0 === n &&
                                        ((r = !1),
                                        void 0 ===
                                            (n = o[t].find(function (t) {
                                                return t.colour === e && t.size == i.dropdownSettings.size && t.pattern == i.dropdownSettings.pattern;
                                            })) &&
                                            ((n = o[t].find(function (t) {
                                                return t.colour === e && t.size == i.dropdownSettings.size;
                                            })),
                                            (r = !1)),
                                        this.setDropdown(i, "size", i.dropdownSettings.size)),
                                    this.refreshDropdown(i, o[t], r))
                                  : i.dropdownSettings.hasOwnProperty("size")
                                  ? ((n = o[t].find(function (t) {
                                        return t.colour === e && t.size == s.dropdownSettings.size;
                                    })),
                                    this.setDropdown(i, "size", this.dropdownSettings.size),
                                    void 0 === n &&
                                        ((n = o[t].find(function (t) {
                                            return t.colour === e && t.size == i.dropdownSettings.size;
                                        })),
                                        this.setDropdown(i, "size", i.dropdownSettings.size)))
                                  : i.dropdownSettings.hasOwnProperty("placement")
                                  ? ((n = o[t].find(function (t) {
                                        return t.colour === e && t.placement == s.dropdownSettings.placement;
                                    })),
                                    this.setDropdown(i, "placement", this.dropdownSettings.placement),
                                    void 0 === n &&
                                        ((n = o[t].find(function (t) {
                                            return t.colour === e && t.placement == i.dropdownSettings.placement;
                                        })),
                                        this.setDropdown(i, "placement", i.dropdownSettings.placement)))
                                  : (n = o[t].find(function (t) {
                                        return t.colour === e;
                                    })),
                              n
                          );
                      }),
                      (e.setDropdown = function (t, e, i) {
                          t.DROP_DOWN[e] && t.DROP_DOWN[e].changeSelected(i);
                      }),
                      (e.refreshDropdown = function (t, e) {
                          var i = this,
                              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                              r = e.filter(function (e) {
                                  return n ? e.size === i.dropdownSettings.size : e.size === t.dropdownSettings.size;
                              }),
                              s = On(
                                  new Set(
                                      r.map(function (t) {
                                          return t.pattern;
                                      })
                                  )
                              );
                          t.DROP_DOWN.pattern && (t.DROP_DOWN.pattern.changeOptions(s), this.setDropdown(t, "pattern", s.includes(this.dropdownSettings.pattern) ? this.dropdownSettings.pattern : s[0]));
                      }),
                      t
                  );
              })(),
              yn = (function () {
                  function t(t, e, i, n, r) {
                      (this.MENU = t),
                          (this.API = e),
                          (this.NESTED_CONTAINER = document.createElement("div")),
                          (this.NESTED_CONTAINER.className = "nested-menu__container"),
                          i.appendChild(this.NESTED_CONTAINER),
                          (this.tabs = []),
                          (this.tabContainer = document.createElement("div")),
                          (this.tabContainer.className = "tab__container"),
                          this.NESTED_CONTAINER.appendChild(this.tabContainer),
                          this.createFilter(this.NESTED_CONTAINER),
                          (this.itemContainer = document.createElement("div")),
                          (this.itemContainer.className = "item__container"),
                          this.NESTED_CONTAINER.appendChild(this.itemContainer),
                          (this.layerOptions = []),
                          (this.layers = []),
                          (this.groupedLayers = []),
                          (this.selectedNestedItems = []),
                          (this.selectedItem = null),
                          (this.activeItem = null),
                          (this.selectedLayer = r),
                          this.build(n),
                          this.updateCount();
                  }
                  var e = t.prototype;
                  return (
                      (e.createFilter = function (t) {
                          (this.filterContainer = document.createElement("div")),
                              (this.filterContainer.className = "filter__container"),
                              (this.itemCount = document.createElement("p")),
                              (this.itemCount.className = "item__count"),
                              (this.filterButton = document.createElement("div")),
                              (this.filterButton.className = "filter__button");
                          var e = document.createElement("div");
                          e.className = "filter__icon";
                          var i = document.createElement("p");
                          (i.className = "filter__text"),
                              (i.innerText = "Filter"),
                              this.filterButton.appendChild(e),
                              this.filterButton.appendChild(i),
                              this.filterContainer.appendChild(this.itemCount),
                              this.filterContainer.appendChild(this.filterButton),
                              t.appendChild(this.filterContainer);
                      }),
                      (e.updateCount = function () {
                          this.itemCount.innerText = "".concat(this.itemContainer.getElementsByClassName("menu-item").length, " items");
                      }),
                      (e.build = function (t) {
                          var e = this;
                          (this.layers = []),
                              (this.tabs = []),
                              (this.tabContainer.innerHTML = ""),
                              (this.layerOptions = t),
                              this.selectedLayer || (this.selectedLayer = t[0].layerName),
                              t.forEach(function (t, i) {
                                  var n = e.createTab(t.layerName, i);
                                  (e.selectedLayer !== t.name && e.selectedLayer !== t.layerName) || (n.classList.add("active"), (e.activeItem = i), e.buildItems(e.activeItem)), n.addEventListener("click", e.tabClick.bind(e, i));
                              });
                      }),
                      (e.buildItems = function (t) {
                          var e = this,
                              i = this.layerOptions[t];
                          if (((this.layers = []), (this.itemContainer.innerHTML = ""), this.API.panoViewer.setRotationTarget(i.hotspot.x, i.hotspot.y), "grouped" === i.layerType)) {
                              this.hideFilter();
                              var n = new Ln(this, this.itemContainer, i.items, i.layerName, t);
                              return n.setNested(), void this.groupedLayers.push({ id: t, groupedMenu: n });
                          }
                          this.showFilter();
                          var r,
                              s = document.createDocumentFragment(),
                              o = [];
                          i.items.forEach(function (n, a) {
                              if (!n.disabled && "Blank" !== n.attributes.name) {
                                  var c = new An(s, n, a, i.layerName);
                                  c.CONTAINER.addEventListener("click", function (i) {
                                      e.setItemActive(t, c.CONTAINER.dataset.index), n.setActive(!0), e.MENU.showSelectMenu(), (r = c);
                                  }),
                                      c.active && ((r = c), (e.selectedItem = c), e.selectedNestedItems.push({ layerIndex: i.layerIndex, index: a }), e.MENU.setPreviousItem(n)),
                                      o.push(c);
                              }
                          }),
                              this.itemContainer.appendChild(s),
                              r && this.itemContainer.prepend(r.CONTAINER),
                              this.layers.push({ items: o, layerIndex: i.layerIndex });
                          var a = this.createDecisionPanel();
                          this.itemContainer.appendChild(a);
                      }),
                      (e.hideFilter = function () {
                          this.filterContainer.classList.add("hidden");
                      }),
                      (e.showFilter = function () {
                          this.filterContainer.classList.remove("hidden");
                      }),
                      (e.createTab = function (t, e) {
                          var i = document.createElement("div");
                          return (i.className = "tab"), (i.innerText = t), this.tabContainer.appendChild(i), this.tabs.push(i), i;
                      }),
                      (e.createDecisionPanel = function () {
                          var t = this,
                              e = document.createElement("div");
                          e.className = "decision_panel__container";
                          var i = document.createElement("div");
                          (i.className = "decision__heaading"), (i.innerText = "Need help?");
                          var n = document.createElement("p");
                          (n.className = "decision__text"), (n.innerText = "Work directly with a Made designer to make updates to your chosen Design Package.");
                          var r = document.createElement("button");
                          return (
                              (r.className = "button transparent"),
                              (r.innerText = "Talk to our design team"),
                              (r.onclick = function () {
                                  t.MENU.HOLDER.dispatchEvent(new CustomEvent("design-team"));
                              }),
                              e.appendChild(i),
                              e.appendChild(n),
                              e.appendChild(r),
                              e
                          );
                      }),
                      (e.setItemActive = function (t, e) {
                          var i = this;
                          this.layers[t].items.forEach(function (t) {
                              t.CONTAINER.dataset.index === e ? (t.setActive(!0), i.setActiveMenuEdit()) : t.setActive(!1);
                          });
                      }),
                      (e.setActiveMenuEdit = function () {
                          this.MENU.setActiveMenuEdit();
                      }),
                      (e.setProductInfo = function (t) {
                          this.MENU.setProductInfo(t);
                      }),
                      (e.showSelectMenu = function () {
                          this.MENU.showSelectMenu();
                      }),
                      (e.createHeader = function (t, e) {
                          var i = document.createElement("div");
                          i.className = "nested-header__container ".concat(e.toLowerCase());
                          var n = document.createElement("h2");
                          n.innerText = e;
                          var r = document.createElement("p");
                          return t.appendChild(i), i.appendChild(n), i.appendChild(r), { container: i, selected: r };
                      }),
                      (e.tabClick = function (t) {
                          this.buildItems(t),
                              this.tabs.forEach(function (t) {
                                  t.classList.remove("active");
                              }),
                              this.tabs[t].classList.add("active");
                      }),
                      (e.setPreviousItem = function (t) {
                          this.MENU.setPreviousItem(t);
                      }),
                      t
                  );
              })(),
              Sn = (function () {
                  function t(t, e) {
                      (this.HOLDER = t),
                          (this.API = e),
                          (this.CONTAINER = document.createElement("div")),
                          (this.CONTAINER.className = "menu__container"),
                          this.HOLDER.appendChild(this.CONTAINER),
                          (this.prevousItem = null),
                          (this.previousItemIndex = 0),
                          (this.layerIndex = 0),
                          (this.currentPricing = "$0");
                  }
                  var e = t.prototype;
                  return (
                      (e.updatePrice = function (t, e) {
                          (this.currentPricing = t), (this.leadTime = e), void 0 !== this.PRICE && (this.PRICE.innerText = t), void 0 !== this.SUMMARY_LEAD_TIME && (this.SUMMARY_LEAD_TIME.innerText = e);
                      }),
                      (e.reset = function () {
                          void 0 !== this.CONTAINER &&
                              (this.CONTAINER.replaceChildren(),
                              this.CONTAINER.classList.remove("active"),
                              this.createCancelHeader(this.CONTAINER),
                              this.createBody(this.CONTAINER),
                              this.createMenuHeader(this.BODY),
                              this.createBottomBar());
                      }),
                      (e.create = function (t) {
                          var e = this,
                              i = t.layerType,
                              n = t.layerDescription,
                              r = t.layerName,
                              s = t.items,
                              o = t.layerIndex;
                          this.reset(),
                              this.addMenuDetails(r, n),
                              console.log("layerName", r),
                              "grouped" === i
                                  ? (this.MENU = new Ln(this, this.BODY, s, r))
                                  : ((this.MENU = new _n(this, this.BODY, s, r)),
                                    this.MENU.ITEMS.forEach(function (t) {
                                        t.CONTAINER.addEventListener("click", function (i) {
                                            e.setItemActive(t.CONTAINER.dataset.index, o);
                                        });
                                    }),
                                    this.MENU.ITEMS.forEach(function (t) {
                                        t.CONTAINER.addEventListener("click", function (i) {
                                            e.setItemActive(t.CONTAINER.dataset.index, o);
                                        });
                                    })),
                              (this.layerIndex = o),
                              this.show();
                      }),
                      (e.createNested = function (t) {
                          var e = this,
                              i = (t.layerType, t.layerDescription),
                              n = t.layerName,
                              r = (t.items, t.layerIndex),
                              s = t.nestedLayers,
                              o = t.selectedLayer;
                          this.reset(),
                              this.addMenuDetails(n, i),
                              (this.MENU = new yn(this, this.API, this.BODY, s, o)),
                              (this.previousNestedItems = this.MENU.selectedNestedItems),
                              (this.layerIndex = r),
                              this.MENU.layers.forEach(function (t) {
                                  t.items.forEach(function (i) {
                                      i.CONTAINER.addEventListener("click", function (n) {
                                          e.setItemActive(i.CONTAINER.dataset.index, t.layerIndex);
                                      });
                                  });
                              }),
                              this.show();
                      }),
                      (e.createCancelHeader = function (t) {
                          this.SUB_HEADER = document.createElement("p");
                          var e = document.createElement("div");
                          (this.CANCEL_HEADER = document.createElement("div")),
                              (this.CANCEL_HEADER.className = "menu__canel-header"),
                              this.CANCEL_HEADER.appendChild(this.SUB_HEADER),
                              this.CANCEL_HEADER.appendChild(e),
                              (e.onclick = this.hide.bind(this)),
                              t.appendChild(this.CANCEL_HEADER);
                      }),
                      (e.createMenuHeader = function (t) {
                          (this.HEADER = document.createElement("div")), (this.HEADER.className = "menu__header"), t.appendChild(this.HEADER);
                      }),
                      (e.createBody = function (t) {
                          (this.BODY = document.createElement("div")), (this.BODY.className = "menu__body"), this.BODY.addEventListener("scroll", this.scrollAnimation.bind(this)), t.appendChild(this.BODY);
                      }),
                      (e.createBottomBar = function () {
                          var t = this;
                          (this.BOTTOM_BAR = document.createElement("div")), (this.BOTTOM_BAR.className = "menu__bottom-bar");
                          var e = document.createElement("div");
                          (e.className = "info_btn"),
                              (e.onclick = function () {
                                  t.HOLDER.dispatchEvent(new CustomEvent("active-product-info"));
                              });
                          var i = document.createElement("div");
                          i.className = "menu__price-details";
                          var n = document.createElement("p");
                          (n.className = "menu__price_detail"),
                              (n.innerText = "Est. materials total"),
                              (this.PRICE = document.createElement("p")),
                              (this.PRICE.className = "menu__price_value"),
                              (this.PRICE.innerText = this.currentPricing),
                              i.appendChild(n),
                              i.appendChild(this.PRICE);
                          var r = document.createElement("div");
                          r.className = "menu__price-details";
                          var s = document.createElement("p");
                          (s.className = "menu__price_detail"),
                              (s.innerText = "Est. lead time"),
                              (this.SUMMARY_LEAD_TIME = document.createElement("p")),
                              (this.SUMMARY_LEAD_TIME.class = "menu__price_value"),
                              (this.SUMMARY_LEAD_TIME.innerText = this.leadTime),
                              r.appendChild(s),
                              r.appendChild(this.SUMMARY_LEAD_TIME);
                          var o = document.createElement("div");
                          o.className = "menu__buttons-container";
                          var a = document.createElement("button");
                          (a.className = "menu__button"), (a.innerText = "Apply"), (a.onclick = this.onApplyClick.bind(this));
                          var c = document.createElement("button");
                          (c.className = "menu__button transparent"),
                              (c.innerText = "Cancel"),
                              (c.onclick = this.cancel.bind(this)),
                              o.appendChild(a),
                              o.appendChild(c),
                              this.BOTTOM_BAR.appendChild(i),
                              this.BOTTOM_BAR.appendChild(r),
                              this.BOTTOM_BAR.appendChild(o),
                              this.BOTTOM_BAR.appendChild(e),
                              this.BODY.appendChild(this.BOTTOM_BAR);
                      }),
                      (e.addMenuDetails = function (t, e) {
                          var i = document.createElement("h1");
                          (i.className = "menu__heading"), (i.innerText = t), (this.SUB_HEADER.innerText = t);
                          var n = document.createElement("p");
                          (n.className = "menu__description"), (n.innerText = e), this.HEADER.appendChild(i), this.HEADER.appendChild(n);
                      }),
                      (e.setItemActive = function (t, e) {
                          this.API.layers[e].items[t].setActive(), this.HOLDER.dispatchEvent(new CustomEvent("item-selected", { detail: { itemLayer: this.API.layers[e], item: this.API.layers[e].items[t] } }));
                      }),
                      (e.setGroupedItemActive = function (t, e) {}),
                      (e.setProductInfo = function (t) {
                          this.HOLDER.dispatchEvent(new CustomEvent("active-product-info"));
                      }),
                      (e.scrollAnimation = function (t) {
                          t.target.scrollTop > 25 ? this.CANCEL_HEADER.classList.add("scrolled") : this.CANCEL_HEADER.classList.remove("scrolled");
                      }),
                      (e.setActiveMenuEdit = function () {
                          this.HOLDER.dispatchEvent(new CustomEvent("set-menu-edited", {}));
                      }),
                      (e.onApplyClick = function () {
                          (this.previousItem = null), this.hide();
                      }),
                      (e.show = function () {
                          this.CONTAINER.classList.add("active");
                      }),
                      (e.hide = function () {
                          this.CONTAINER.classList.remove("active"),
                              null === this.previousItem || this.isMobile() ? this.HOLDER.dispatchEvent(new CustomEvent("change-applied", {})) : this.previousItem.setActive(!0),
                              (this.previousItem = null),
                              this.HOLDER.dispatchEvent(new CustomEvent("menu-closed", {}));
                      }),
                      (e.isMobile = function () {
                          return window.innerWidth <= 600;
                      }),
                      (e.setActiveItem = function (t) {}),
                      (e.setPreviousItem = function (t) {
                          console.log("setPreviousItem", t), (this.previousItem = t);
                      }),
                      (e.showSelectMenu = function () {
                          this.BOTTOM_BAR.classList.add("active");
                      }),
                      (e.cancel = function () {
                          console.log("cancel", this.previousItem), this.previousItem.setActive(!0), this.hide();
                      }),
                      t
                  );
              })(),
              bn = i(4),
              Mn =
                  (i(104),
                  i(157),
                  i(162),
                  (function () {
                      function t(t, e) {
                          var i = this;
                          (this.HOLDER = t),
                              (this.CONTAINER = document.createElement("div")),
                              this.CONTAINER.classList.add("room-title__container", "active"),
                              (this.ROOM_TITLE = document.createElement("h1")),
                              (this.ROOM_TITLE.innerText = "");
                          var n = document.createElement("div");
                          n.classList.add("room-title__subtitle"), (this.description = document.createElement("p")), (this.type = "Primary bathroom"), (this.price = 24e3);
                          var r = document.createElement("div");
                          r.classList.add("info-btn"),
                              (r.onclick = function () {
                                  i.HOLDER.dispatchEvent(new CustomEvent("activate-summary"));
                              }),
                              n.appendChild(this.description),
                              n.appendChild(r),
                              this.CONTAINER.appendChild(this.ROOM_TITLE),
                              this.CONTAINER.appendChild(n),
                              this.HOLDER.appendChild(this.CONTAINER);
                      }
                      var e = t.prototype;
                      return (
                          (e.setTitle = function (t) {
                              this.ROOM_TITLE.innerText = t;
                          }),
                          (e.updatePrice = function (t) {
                              (this.price = t.split("-")[0].trim()), this.updateDescription();
                          }),
                          (e.updateType = function (t) {
                              (this.type = t), this.updateDescription();
                          }),
                          (e.updateDescription = function () {
                              this.description.innerText = "".concat(this.type, " â€¢ Est ").concat(this.price);
                          }),
                          (e.hide = function () {
                              this.CONTAINER.classList.remove("active");
                          }),
                          (e.show = function () {
                              this.CONTAINER.classList.add("active");
                          }),
                          t
                      );
                  })()),
              xn = (function () {
                  function t(t, e) {
                      (this.HOLDER = t),
                          (this.API = e),
                          (this.CONTAINER = document.createElement("div")),
                          this.CONTAINER.classList.add("summary-panel"),
                          this.HOLDER.appendChild(this.CONTAINER),
                          (this.currentPricing = "$8,200-$12,800"),
                          (this.currentLeadTime = "2-3 weeks");
                  }
                  var e = t.prototype;
                  return (
                      (e.createBody = function (t) {
                          (this.BODY = document.createElement("div")), (this.BODY.className = "summary__body"), this.BODY.addEventListener("scroll", this.scrollAnimation.bind(this)), t.appendChild(this.BODY);
                      }),
                      (e.reset = function () {
                          void 0 !== this.CONTAINER && (this.CONTAINER.replaceChildren(), this.CONTAINER.classList.remove("active"), this.createCancelHeader(this.CONTAINER), this.createBody(this.CONTAINER), this.createHeader(this.BODY));
                      }),
                      (e.create = function (t) {
                          this.reset(), this.show(), this.createRoomDetails(), this.createPrice(), this.createProductDetails(), this.createSaveButton();
                      }),
                      (e.updatePrice = function (t, e) {
                          (this.currentPricing = t), (this.currentLeadTime = e), void 0 !== this.PRICE && (this.PRICE.innerText = t), void 0 !== this.PRICE && (this.PRICE.innerText = e), this.reset();
                      }),
                      (e.createRoomDetails = function () {
                          var t = document.createElement("div");
                          t.classList.add("details-container"),
                              [
                                  { id: 1, item: "Room", description: "Primary bathroom" },
                                  { id: 2, item: "Layout", description: "Separate tub & shower" },
                                  { id: 3, item: "Size", description: "108 sq ft" },
                                  { id: 4, item: "Package", description: "Sausalito" },
                                  { id: 5, item: "Design offering", description: "Design modification" },
                              ].forEach(function (e) {
                                  var i = document.createElement("div");
                                  i.classList.add("item-detail");
                                  var n = document.createElement("p");
                                  n.classList.add("left");
                                  var r = document.createElement("p");
                                  r.classList.add("right"), (n.innerText = e.item), (r.innerText = e.description), i.appendChild(n), i.appendChild(r), t.appendChild(i);
                              }),
                              this.BODY.appendChild(t);
                      }),
                      (e.createPrice = function () {
                          var t = document.createElement("div");
                          t.classList.add("details-container");
                          var e = document.createElement("div");
                          e.classList.add("item-detail"), e.classList.add("price");
                          var i = document.createElement("p");
                          i.classList.add("left");
                          var n = document.createElement("p");
                          n.classList.add("right"), (i.innerText = "Est. materials price"), (n.innerText = this.currentPricing), e.appendChild(i), e.appendChild(n), t.appendChild(e);
                          var r = document.createElement("div");
                          r.classList.add("item-detail"), r.classList.add("price");
                          var s = document.createElement("p");
                          s.classList.add("left");
                          var o = document.createElement("p");
                          o.classList.add("right"), (s.innerText = "Est. lead time"), (o.innerText = this.currentLeadTime), r.appendChild(s), r.appendChild(o), t.appendChild(r), this.BODY.appendChild(t);
                      }),
                      (e.createProductDetails = function () {
                          var t = this.getDataItem();
                          console.log(t);
                          var e = [{ id: 1, name: "Your materials", itemCount: t.length, items: t }],
                              i = document.createElement("div");
                          i.classList.add("products-container"),
                              e.forEach(function (t) {
                                  var e = document.createElement("div");
                                  e.classList.add("product-detail");
                                  var n = document.createElement("div");
                                  n.classList.add("product-detail__header"),
                                      (n.onclick = function () {
                                          e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active");
                                      });
                                  var r = document.createElement("div");
                                  r.classList.add("product-detail__body");
                                  var s = document.createElement("p");
                                  s.classList.add("set-name"), (s.innerText = t.name);
                                  var o = document.createElement("p");
                                  o.classList.add("set-price"),
                                      (o.innerText = "".concat(t.itemCount, " items")),
                                      n.appendChild(s),
                                      n.appendChild(o),
                                      t.items.forEach(function (t) {
                                          var e = document.createElement("div");
                                          e.classList.add("item_list");
                                          var i = document.createElement("div");
                                          i.classList.add("left");
                                          var n = document.createElement("img");
                                          n.classList.add("image"), (n.src = t.imgUrl);
                                          var s = document.createElement("p");
                                          (s.innerText = t.name), i.appendChild(n), i.appendChild(s);
                                          var o = document.createElement("div");
                                          o.classList.add("right");
                                          var a = document.createElement("p");
                                          (a.innerText = "".concat(t.qty, "x")), o.appendChild(a), e.appendChild(i), e.appendChild(o), r.appendChild(e);
                                      }),
                                      e.appendChild(n),
                                      e.appendChild(r),
                                      i.appendChild(e);
                              }),
                              this.BODY.appendChild(i);
                      }),
                      (e.createSaveButton = function () {
                          var t = this,
                              e = document.createElement("button");
                          e.classList.add("save-button"),
                              (e.innerText = "Save your design"),
                              (e.onclick = function () {
                                  t.HOLDER.dispatchEvent(new CustomEvent("save-design"));
                              }),
                              this.BODY.appendChild(e);
                      }),
                      (e.createHeader = function (t) {
                          var e = document.createElement("h1");
                          (e.innerText = "Summary"), t.appendChild(e);
                      }),
                      (e.createCancelHeader = function (t) {
                          var e = this,
                              i = document.createElement("p");
                          i.innerText = "Summary";
                          var n = document.createElement("div");
                          n.classList = "made-logo-dark";
                          var r = document.createElement("div");
                          (r.className = "cancel_icon"),
                              (this.CANCEL_HEADER = document.createElement("div")),
                              (this.CANCEL_HEADER.className = "summary__cancel-header"),
                              this.CANCEL_HEADER.appendChild(i),
                              this.CANCEL_HEADER.appendChild(r),
                              this.CANCEL_HEADER.appendChild(n),
                              (r.onclick = function () {
                                  e.HOLDER.dispatchEvent(new CustomEvent("hide-summary", {}));
                              }),
                              t.appendChild(this.CANCEL_HEADER);
                      }),
                      (e.scrollAnimation = function (t) {
                          t.target.scrollTop > 35 ? this.CANCEL_HEADER.classList.add("scrolled") : this.CANCEL_HEADER.classList.remove("scrolled");
                      }),
                      (e.getDataItem = function () {
                          var t = bn.layerMenus,
                              e = this.API.getSummary().items;
                          return (
                              console.log(this.API.getSummary()),
                              t.map(function (t) {
                                  return {
                                      name: t.name,
                                      qty: t.nested_layers ? t.nested_layers.length : 1,
                                      imgUrl: t.nested_layers
                                          ? e.filter(function (e) {
                                                return e.type === t.nested_layers[0].layer_name;
                                            })[0].thumbnail
                                          : e.filter(function (e) {
                                                return e.type === t.layer_name;
                                            })[0].thumbnail,
                                  };
                              })
                          );
                      }),
                      (e.show = function () {
                          this.CONTAINER.classList.add("active");
                      }),
                      (e.hide = function () {
                          this.CONTAINER.classList.remove("active");
                      }),
                      t
                  );
              })(),
              Dn = (function () {
                  function t(t, e, i, n) {
                      (this.HOLDER = e),
                          (this.PARENT = t),
                          (this.ITEMS = i),
                          (this.CONTAINER = document.createElement("div")),
                          this.CONTAINER.classList.add("radio-menu"),
                          (this.OPTIONS = document.createElement("div")),
                          this.OPTIONS.classList.add("radio-menu___options"),
                          this.CONTAINER.appendChild(this.OPTIONS),
                          this.HOLDER.appendChild(this.CONTAINER),
                          this.setSelected(n);
                  }
                  var e = t.prototype;
                  return (
                      (e.clearOptions = function () {
                          void 0 !== this.OPTIONS && this.OPTIONS.replaceChildren();
                      }),
                      (e.buildOptions = function () {
                          var t = this;
                          this.clearOptions();
                          for (
                              var e = function (e) {
                                      var i = document.createElement("div");
                                      i.classList.add("radio-menu___option"),
                                          t.SELECTED_INDEX === e && i.classList.add("active"),
                                          t.SELECTED_INDEX !== e &&
                                              (i.onclick = function () {
                                                  t.setSelected(e);
                                              });
                                      var n = document.createElement("div");
                                      if ((n.classList.add("selector"), t.ITEMS[e].imgUrl)) {
                                          var r = document.createElement("img");
                                          n.appendChild(r);
                                      } else {
                                          var s = document.createElement("div");
                                          s.classList.add("dot"), n.appendChild(s);
                                      }
                                      var o = document.createElement("p");
                                      o.classList.add("selector-text"), (o.innerText = t.ITEMS[e].value), i.appendChild(n), i.appendChild(o), t.OPTIONS.appendChild(i);
                                  },
                                  i = 0;
                              i < this.ITEMS.length;
                              i++
                          )
                              e(i);
                      }),
                      (e.setSelected = function (t) {
                          (this.SELECTED_INDEX = t), this.buildOptions();
                      }),
                      t
                  );
              })(),
              Pn = (function () {
                  function t(t, e) {
                      (this.HOLDER = t), (this.API = e), (this.CONTAINER = document.createElement("div")), this.CONTAINER.classList.add("product-info-panel"), this.HOLDER.appendChild(this.CONTAINER);
                  }
                  var e = t.prototype;
                  return (
                      (e.reset = function () {
                          void 0 !== this.CONTAINER && (this.CONTAINER.replaceChildren(), this.CONTAINER.classList.remove("active"), this.createCancelHeader(this.CONTAINER));
                      }),
                      (e.create = function (t) {
                          this.reset(), this.show(), this.createInfoContent(), this.createSpecSheet();
                      }),
                      (e.createCancelHeader = function () {
                          var t = document.createElement("div");
                          (this.CANCEL_HEADER = document.createElement("div")),
                              (this.CANCEL_HEADER.className = "product__canel-header"),
                              this.CANCEL_HEADER.appendChild(t),
                              (t.onclick = this.hide.bind(this)),
                              this.CONTAINER.appendChild(this.CANCEL_HEADER);
                      }),
                      (e.createInfoContent = function () {
                          var t = {
                                  title: "Kai",
                                  description:
                                      "This sculptural, contemporary floating vanity features an offset vessel sink and plenty of countertop space for tools, jars, and anything else you need in the bathroom. The cabinet is made from solid maple or chestnut hardwood, with a vast drawer that seamlessly fits into the wave texture of the sides of the unit. Pull out the drawer to reveal an enormous storage space, ready to be organized however you see fit. To top it all off is the luxurious quartz counter in a striking dark shade.",
                                  size: [{ value: '30" double sink' }, { value: '40" double sink', selected: !0 }, { value: '30" double sink' }],
                                  finishes: [
                                      { value: "Natural Teak", selected: !0, imgUrl: "" },
                                      { value: "Brown Reclaimed Wood", imgUrl: "" },
                                  ],
                                  price: 1200,
                                  brand: "Avanity",
                              },
                              e = document.createElement("div");
                          e.classList.add("content");
                          var i = document.createElement("div");
                          i.classList.add("header-container");
                          var n = document.createElement("h2");
                          n.innerText = t.title;
                          var r = document.createElement("p");
                          r.innerText = t.description;
                          var s = document.createElement("p");
                          s.classList.add("read-more"), (s.innerText = "Read More"), i.appendChild(n), i.appendChild(r), i.appendChild(s);
                          var o = document.createElement("div");
                          o.classList.add("image-container");
                          var a = document.createElement("div");
                          o.appendChild(a);
                          var c = document.createElement("div");
                          c.classList.add("details-container"),
                              t.size && c.appendChild(this.buildList("Size", t.size)),
                              t.finishes && c.appendChild(this.buildList("Finishes", t.finishes)),
                              t.price && c.appendChild(this.buildList("Prices", "$".concat(t.price.toLocaleString()))),
                              t.brand && c.appendChild(this.buildList("Brand", t.brand)),
                              e.appendChild(i),
                              e.appendChild(o),
                              e.appendChild(c),
                              this.CONTAINER.appendChild(e);
                      }),
                      (e.buildList = function (t, e) {
                          var i = document.createElement("div");
                          i.classList.add("list");
                          var n = document.createElement("p");
                          if (((n.innerText = t), i.appendChild(n), Array.isArray(e))) {
                              var r = e.findIndex(function (t) {
                                  return t.selected;
                              });
                              new Dn(this, i, e, r);
                          } else {
                              var s = document.createElement("p");
                              s.classList.add("value-text"), (s.innerText = e), i.appendChild(s);
                          }
                          return i;
                      }),
                      (e.createSpecSheet = function () {
                          var t = document.createElement("div");
                          t.classList.add("spec-sheet-container"),
                              (this.SPEC_SHEET = document.createElement("p")),
                              this.SPEC_SHEET.classList.add("spec-sheet"),
                              t.appendChild(this.SPEC_SHEET),
                              (this.SPEC_SHEET.innerText = "Specification Sheet"),
                              t.appendChild(this.SPEC_SHEET),
                              this.CONTAINER.appendChild(t);
                      }),
                      (e.show = function () {
                          this.CONTAINER.classList.add("active");
                      }),
                      (e.hide = function () {
                          this.CONTAINER.classList.remove("active");
                      }),
                      t
                  );
              })(),
              Un = (function () {
                  function t(t, e) {
                      var i = this;
                      (this.HOLDER = t),
                          (this.API = e),
                          (this.roomTitle = "Primary"),
                          (this.CONTAINER = document.createElement("div")),
                          this.CONTAINER.classList.add("info-summary__container"),
                          this.CONTAINER.classList.add("active"),
                          (this.ROOM_TITLE = document.createElement("h1")),
                          (this.ROOM_TITLE.innerText = this.roomTitle);
                      var n = document.createElement("div");
                      n.classList.add("info-btn"),
                          (n.onclick = function () {
                              i.HOLDER.dispatchEvent(new CustomEvent("activate-summary"));
                          }),
                          (this.SUMMARY_LIST_CONTAINER = document.createElement("div")),
                          this.SUMMARY_LIST_CONTAINER.classList.add("summary-list__container");
                      var r = document.createElement("div");
                      r.classList.add("summary-list");
                      var s = document.createElement("p");
                      (s.class = "summary-list__item type"),
                          (s.innerText = "Est. materials price"),
                          (this.SUMMARY_PRICE = document.createElement("p")),
                          (this.SUMMARY_PRICE.class = "summary-list__item"),
                          (this.SUMMARY_PRICE.innerText = ""),
                          r.appendChild(s),
                          r.appendChild(this.SUMMARY_PRICE),
                          this.SUMMARY_LIST_CONTAINER.appendChild(r);
                      var o = document.createElement("div");
                      o.classList.add("summary-list");
                      var a = document.createElement("p");
                      (a.class = "summary-list__item type"),
                          (a.innerText = "Est. lead time"),
                          (this.SUMMARY_LEAD_TIME = document.createElement("p")),
                          (this.SUMMARY_LEAD_TIME.class = "summary-list__item"),
                          (this.SUMMARY_LEAD_TIME.innerText = ""),
                          o.appendChild(a),
                          o.appendChild(this.SUMMARY_LEAD_TIME),
                          this.SUMMARY_LIST_CONTAINER.appendChild(o);
                      var c = document.createElement("button");
                      c.classList.add("info-summary__button"),
                          (c.innerText = "Continue"),
                          (c.onclick = function () {
                              i.HOLDER.dispatchEvent(new CustomEvent("activate-summary"));
                          }),
                          this.CONTAINER.appendChild(this.ROOM_TITLE),
                          this.CONTAINER.appendChild(n),
                          this.CONTAINER.appendChild(this.SUMMARY_LIST_CONTAINER),
                          this.CONTAINER.appendChild(c),
                          this.HOLDER.appendChild(this.CONTAINER);
                  }
                  var e = t.prototype;
                  return (
                      (e.updatePrice = function (t, e) {
                          (this.currentPricing = t), (this.currentLeadTime = e), void 0 !== this.PRICE && (this.PRICE.innerText = t), void 0 !== this.SUMMARY_LEAD_TIME && (this.SUMMARY_LEAD_TIME.innerText = e);
                      }),
                      (e.setRoomTitle = function (t) {
                          (this.roomTitle = t), (this.ROOM_TITLE.innerText = this.roomTitle);
                      }),
                      (e.show = function () {
                          this.CONTAINER.classList.add("active");
                      }),
                      (e.hide = function () {
                          this.CONTAINER.classList.remove("active");
                      }),
                      t
                  );
              })(),
              wn = function (t, e) {
                  var i = this;
                  (this.HOLDER = t),
                      (this.API = e),
                      (this.BACK_ICON = document.createElement("div")),
                      (this.BACK_ICON.className = "screen_back_btn"),
                      (this.BACK_ICON.onclick = function () {
                          i.HOLDER.dispatchEvent(new CustomEvent("hide-summary", {}));
                      }),
                      (this.MADE_LOGO = document.createElement("div")),
                      (this.MADE_LOGO.className = "made-logo"),
                      this.HOLDER.appendChild(this.BACK_ICON),
                      this.HOLDER.appendChild(this.MADE_LOGO);
              },
              Fn = (function () {
                  function t(t, e, i) {
                      var n = this;
                      (this.CONTAINER = t),
                          (this.API = e),
                          (this.UI_CONTROLLER = i),
                          (this.ROOM_SIZE = "medium"),
                          (this.roomSizePricing = {
                              otherMaterials: { small: 4193, medium: 4436, large: 5895 },
                              tiles: {
                                  small: { showerWall: 20, showerFloor: 5, floor: 60, vanityWall: 30 },
                                  medium: { showerWall: 20, showerFloor: 5, floor: 60, vanityWall: 30 },
                                  large: { showerWall: 20, showerFloor: 5, floor: 60, vanityWall: 30 },
                              },
                          }),
                          (this.roundToNearest = 500),
                          (this.leadTime = 0),
                          (this.PRICING = { primaryMaterials: 0, tiles: 0, otherMaterials: 0, buildingMaterials: 0, procurementFees: 0, totalLow: 0, totalHigh: 0, total: 0 }),
                          this.CONTAINER.addEventListener("config-update", function (t) {
                              n.calculateRoomPricing();
                          });
                  }
                  var e = t.prototype;
                  return (
                      (e.getRoundedPricing = function () {
                          var t = this.PRICING.totalLow.toLocaleString("en-US"),
                              e = this.PRICING.totalHigh.toLocaleString("en-US");
                          return "$".concat(t, " - $").concat(e);
                      }),
                      (e.calculateRoomPricing = function () {
                          var t = this.roundToNearest;
                          this.PRICING.otherMaterials = this.roomSizePricing.otherMaterials[this.ROOM_SIZE];
                          var e = this.roomSizePricing.tiles[this.ROOM_SIZE],
                              i = this.API.layers,
                              n = 0,
                              r = 0,
                              s = 0;
                          i.forEach(function (t) {
                              var i = t.activeItem,
                                  o = t.get("file_path");
                              void 0 !== i.get("price") &&
                                  ("Shower_Wall_Tiles" === o || "Shower_Floor_Tiles" === o || "Floors" === o || "Shower_Wall_Tiles" === o ? (r += parseFloat(i.get("price")) * e.showerWall) : (n += parseFloat(i.get("price"))));
                              var a = i.get("leadTimeDays");
                              void 0 !== a && parseInt(a) > s && (s = a);
                          }),
                              (this.leadTime = s),
                              (this.PRICING.primaryMaterials = n),
                              (this.PRICING.tiles = r),
                              (this.PRICING.buildingMaterials = 0.04 * this.PRICING.primaryMaterials),
                              (this.PRICING.procurementFees = 0.02 * this.PRICING.primaryMaterials),
                              (this.PRICING.total = this.PRICING.primaryMaterials + this.PRICING.tiles + this.PRICING.otherMaterials + this.PRICING.buildingMaterials + this.PRICING.procurementFees),
                              (this.PRICING.totalLow = Math.round(this.PRICING.total / t) * t),
                              (this.PRICING.totalHigh = Math.round((1.15 * this.PRICING.total) / t) * t),
                              this.updatePricing();
                      }),
                      (e.updatePricing = function () {
                          var t = this.getRoundedPricing(),
                              e = "".concat(Math.ceil(this.leadTime / 7), "-").concat(Math.ceil(this.leadTime / 7) + 1, " weeks");
                          (this.UI_CONTROLLER.INFO_SUMMARY.SUMMARY_PRICE.innerText = t),
                              (this.UI_CONTROLLER.INFO_SUMMARY.SUMMARY_LEAD_TIME.innerText = e),
                              this.UI_CONTROLLER.ITEM_MENU.updatePrice(t, e),
                              this.UI_CONTROLLER.ROOM_TITLE.updatePrice(t),
                              this.UI_CONTROLLER.INFO_SUMMARY.updatePrice(t, e),
                              this.UI_CONTROLLER.SUMMARY_PANEL.updatePrice(t, e);
                      }),
                      t
                  );
              })(),
              Bn = (function () {
                  function t(t) {
                      (this.API = t),
                          (this.MAIN_CONTAINER = document.querySelector("onfigr")),
                          (this.camera = { "4-piece": [0.810225651880699, 1.5827982974824453] }),
                          (this.hotspots = []),
                          this.addEventListeners(),
                          (this.set = !0),
                          this.preLoadBuild();
                  }
                  var e = t.prototype;
                  return (
                      (e.preLoadBuild = function () {
                          var t = this.API,
                              e = this.MAIN_CONTAINER;
                          (this.INFO_SUMMARY = new Un(e, t)), (this.ROOM_TITLE = new Mn(e, t)), (this.MENU_BAR = new Rn(e, t));
                      }),
                      (e.build = function () {
                          var t = this.API,
                              e = this.MAIN_CONTAINER;
                          (this.PRICING_CONTROLLER = new Fn(e, t, this)),
                              (this.SCREEN_ICONS = new wn(e, t)),
                              (this.ITEM_MENU = new Sn(e, t)),
                              (this.SUMMARY_PANEL = new xn(e, t)),
                              (this.PRODUCT_INFO_PANEL = new Pn(e, t)),
                              this.PRICING_CONTROLLER.calculateRoomPricing(),
                              bn.layerMenus ? this.MENU_BAR.updateLayers(t.listLayers, bn.layerMenus) : this.MENU_BAR.updateLayers(t.listLayers);
                      }),
                      (e.addEventListeners = function () {
                          var t = this;
                          this.MAIN_CONTAINER.addEventListener("hotspot-click", function (e) {
                              var i = e.detail;
                              t.API.panoViewer.setRotationTarget(i.hotspotTheta, i.hotspotPhi);
                              var n =
                                  t.hotspots[
                                      t.hotspots.findIndex(function (t) {
                                          return t.name === e.detail.hotspotId;
                                      })
                                  ].id;
                              t.setActiveHotspot(e.detail.hotspotId),
                                  bn.layerMenus[n].nested_layers
                                      ? t.updateMenu(!0, n, e.detail.hotspotId)
                                      : ((n = t.API.layers.findIndex(function (t) {
                                            return t.attributes.name === e.detail.hotspotId;
                                        })),
                                        t.API.layers[n].setActive(),
                                        t.updateMenu(!1, n)),
                                  t.API.CONTAINER.main.classList.add("menu-open"),
                                  t.ROOM_TITLE.hide(),
                                  t.SUMMARY_PANEL.hide(),
                                  t.INFO_SUMMARY.hide(),
                                  t.MENU_BAR.show();
                          }),
                              this.MAIN_CONTAINER.addEventListener("scene-data-loaded", function () {
                                  t.build(), t.setCameraPosition(), t.addHotspots();
                              }),
                              this.MAIN_CONTAINER.addEventListener("activate-layer", function (e) {
                                  if (
                                      (console.log("Layer Activated.", e),
                                      e.detail.isNested || t.API.layers[e.detail.layerIndex].setActive(),
                                      t.updateMenu(e.detail.isNested, e.detail.layerIndex),
                                      t.ROOM_TITLE.hide(),
                                      t.SUMMARY_PANEL.hide(),
                                      t.INFO_SUMMARY.hide(),
                                      t.API.CONTAINER.main.classList.add("menu-open"),
                                      e.detail.isNested)
                                  ) {
                                      var i = bn.layerMenus[e.detail.layerIndex];
                                      i.hotspot && t.API.panoViewer.setRotationTarget(i.hotspot.x, i.hotspot.y);
                                  }
                              }),
                              this.MAIN_CONTAINER.addEventListener("menu-closed", function (e) {
                                  t.ROOM_TITLE.show(), t.MENU_BAR.onMenuClose(), t.INFO_SUMMARY.show(), t.API.CONTAINER.main.classList.remove("menu-open");
                              }),
                              this.MAIN_CONTAINER.addEventListener("change-applied", function () {
                                  t.MENU_BAR.showResetButton();
                              }),
                              this.MAIN_CONTAINER.addEventListener("set-menu-edited", function () {
                                  t.MENU_BAR.setActiveItemAsEdited();
                              }),
                              this.MAIN_CONTAINER.addEventListener("refresh-config", function () {
                                  t.resetConfig();
                              }),
                              this.MAIN_CONTAINER.addEventListener("hide-summary", function (e) {
                                  t.SUMMARY_PANEL.hide(), t.MENU_BAR.show(), t.ROOM_TITLE.show(), t.SCREEN_ICONS.BACK_ICON.classList.remove("active");
                              }),
                              this.MAIN_CONTAINER.addEventListener("active-product-info", function (e) {
                                  t.PRODUCT_INFO_PANEL.create();
                              }),
                              this.MAIN_CONTAINER.addEventListener("item-selected", function (e) {
                                  console.log("item-selected", e),
                                      (t.ROOM_TITLE.ROOM_TITLE.innerText = ""),
                                      "Wall Lights" === e.detail.itemLayer.attributes.name
                                          ? (t.setForegroundLighting(e.detail.itemLayer.activeItem), (t.lightingItem = e.detail.itemLayer.activeItem))
                                          : "Mirrors" === e.detail.itemLayer.attributes.name
                                          ? (t.forceMirrorLighting(e.detail.itemLayer.activeItem), t.setForegroundLighting(!1))
                                          : "Vanity" === e.detail.itemLayer.attributes.name
                                          ? (t.lightingItem && t.setLightingPlacement(t.lightingItem), t.setFrontTowel(), t.setForegroundLighting(!1))
                                          : "Vanity Faucets" === e.detail.itemLayer.attributes.name && t.setFrontTowel();
                              }),
                              this.API.loadData();
                      }),
                      (e.setLightingPlacement = function (t) {
                          for (
                              var e = this.API.layers.find(function (t) {
                                      return "Wall Lights" === t.attributes.name;
                                  }),
                                  i = 0;
                              i < e.items.length;
                              i++
                          ) {
                              var n = e.items[i],
                                  r = JSON.parse(n.attributes.description),
                                  s = JSON.parse(t.attributes.description);
                              if (!n.disabled && !1 !== n.visibility && "Blank" !== n.attributes.name && n.attributes.name === t.attributes.name && r.placement === s.placement && r.colour === s.colour) {
                                  n.setActive();
                                  break;
                              }
                          }
                          e.items.forEach(function (e, i) {
                              var n = JSON.parse(e.attributes.description),
                                  r = JSON.parse(t.attributes.description);
                              e.disabled || !1 === e.visibility || ("Blank" !== e.attributes.name && e.attributes.name === t.attributes.name && n.placement === r.placement && n.colour === r.colour && e.setActive());
                          });
                      }),
                      (e.setFrontTowel = function () {
                          var t = this.API.layers.find(function (t) {
                              return "Hand Towel" === t.attributes.name;
                          });
                          this.API.layers
                              .find(function (t) {
                                  return "Front Hand Towel" === t.attributes.name;
                              })
                              .items[t.activeItem.attributes.index].setActive();
                      }),
                      (e.setForegroundLighting = function () {
                          var t,
                              e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                              i = this.API.layers.find(function (t) {
                                  return "Foreground Lights" === t.attributes.name;
                              });
                          if (!1 === e) {
                              var n = this.API.layers.find(function (t) {
                                  return "Wall Lights" === t.attributes.name;
                              });
                              t = n.activeItem.attributes.index;
                          } else t = e.attributes.index;
                          console.log(i.items[t]), i.items[t].setActive();
                      }),
                      (e.openMenu = function (t) {
                          this.MENU_BAR.manualClick(t);
                      }),
                      (e.setRoomName = function () {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                          t && (this.roomName = t), this.INFO_SUMMARY.setRoomTitle(this.roomName), this.ROOM_TITLE.updateType(this.roomName);
                      }),
                      (e.setDesignName = function () {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                          t && (this.designName = t), this.ROOM_TITLE.setTitle(this.designName);
                      }),
                      (e.resetConfig = function () {
                          this.setRoomName(), this.setDesignName(), this.API.setConfiguration(this.API.getDefaultConfig()), this.MENU_BAR.clearEdited(), this.MENU_BAR.hideResetButton();
                      }),
                      (e.setActiveHotspot = function (t) {
                          this.activeHotspot && this.activeHotspot.classList.remove("active"),
                              (this.activeHotspot = this.MAIN_CONTAINER.querySelector('[id="hotspot_'.concat(t, '"]'))),
                              this.activeHotspot && this.activeHotspot.classList.add("active");
                      }),
                      (e.updateMenu = function () {
                          var t = this,
                              e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                              i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                          if (e) {
                              var r = [];
                              bn.layerMenus[i].nested_layers.forEach(function (e) {
                                  var i = t.API.layers.findIndex(function (t) {
                                      return e.layer_name === t.attributes.name;
                                  });
                                  r.push({ name: e.layer_name, items: t.API.layers[i].items, layerIndex: i, layerType: e.layer_type, hotspot: e.hotspot, layerName: e.name });
                              }),
                                  this.ITEM_MENU.createNested({ layerType: "nested", layerName: bn.layerMenus[i].name, layerDescription: bn.layerMenus[i].description, nestedLayers: r, selectedLayer: n });
                          } else if (bn.layerMenus) {
                              var s = bn.layerMenus.find(function (e) {
                                  return t.API.layers[i].attributes.name === e.layer_name;
                              });
                              this.ITEM_MENU.create({ layerType: s.layer_type, layerName: s.name, layerDescription: s.description, items: this.API.layers[i].items, layerIndex: i });
                          } else {
                              var o = this.API.activeLayer;
                              this.ITEM_MENU.create({ layerType: o.LAYER_TYPE, layerDescription: o.attributes.description, layerName: o.attributes.name, items: o.items, layerIndex: o.attributes.order });
                          }
                      }),
                      (e.setCameraPosition = function () {
                          this.API.panoViewer.setRotation(this.camera[this.API.scene][0], this.camera[this.API.scene][1]);
                      }),
                      (e.addHotspots = function () {
                          var t = this;
                          (this.hotspots = []),
                              bn.layerMenus.forEach(function (e, i) {
                                  e.nested_layers
                                      ? e.nested_layers.forEach(function (e) {
                                            if (e.hotspot) {
                                                if (void 0 !== e.hotspot.show && !e.hotspot.show) return;
                                                t.API.addHotspot(e.layer_name, e.hotspot.x, e.hotspot.y), t.hotspots.push({ id: i, name: e.layer_name, isNested: !0 });
                                            }
                                        })
                                      : (t.API.addHotspot(e.layer_name, e.hotspot.x, e.hotspot.y), t.hotspots.push({ id: i, name: e.layer_name }));
                              });
                      }),
                      (e.forceMirrorLighting = function (t) {
                          var e = this,
                              i = [4, 5, 6, 24, 34, 35, 36, 37, 39],
                              n = [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
                              r = [340, 406],
                              s = [425, 443],
                              o = [290, 339],
                              a = [406, 424],
                              c = [0, 289],
                              l = this.API.layers.find(function (t) {
                                  return "Wall Lights" == t.attributes.name;
                              });
                          l.items.forEach(function (h) {
                              var u = h.attributes.index;
                              if (n.includes(t.attributes.index))
                                  return (
                                      console.log("above mirror"),
                                      void (u >= c[0] && u <= c[1] ? ((h.visibility = !1), (h.hidden = !1)) : (console.log(h.attributes.index), (h.visibility = !0), (h.hidden = !0), e.setNearestLighting(h, l.activeItem)))
                                  );
                              i.includes(t.attributes.index) &&
                                  (console.log("sconce mirror"),
                                  u >= o[0] && u <= o[1] ? ((h.visibility = !1), (h.hidden = !1)) : u >= r[0] && u <= r[1] && ((h.visibility = !0), (h.hidden = !0), e.setNearestLighting(h, l.activeItem)),
                                  u >= a[0] && u <= a[1] ? ((h.visibility = !1), (h.hidden = !1)) : u >= s[0] && u <= s[1] && ((h.visibility = !0), (h.hidden = !0), e.setNearestLighting(h, l.activeItem)));
                          });
                      }),
                      (e.setNearestLighting = function (t, e) {
                          if (t.attributes.name === e.attributes.name && !0 === t.visibility) {
                              var i = JSON.parse(e.attributes.description),
                                  n = JSON.parse(t.attributes.description);
                              console.log(i, n), ((i.colour == n.colour && "Ceiling" == n.placement && "Ceiling" == i.placement) || (i.colour == n.colour && "Side" == n.placement)) && (t.setActive(), (this.lightingItem = t));
                          }
                      }),
                      t
                  );
              })(),
              Hn = (function () {
                  function t(t, e) {
                      var i = this;
                      (this.data = {}),
                          (this.itemsBySku = {}),
                          (this.configurator = t),
                          (this.controller = e),
                          this.configurator.CONTAINER.main.addEventListener("scene-data-loaded", function () {
                              i.buildLocalLookup(), Object.keys(i.data).length > 0 && i.dataImport(i.data);
                          });
                  }
                  var e = t.prototype;
                  return (
                      (e.buildLocalLookup = function () {
                          for (var t = [], e = 0; e < this.configurator.allLayers.length; e += 1) {
                              var i = this.configurator.allLayers[e];
                              if (i.items)
                                  for (var n = i.items, r = 0; r < n.length; r += 1) {
                                      var s = n[r],
                                          o = s.get("product_code");
                                      void 0 === o ? t.push("name: ".concat(s.get("name"), " | id: ").concat(s.get("id"))) : void 0 !== this.itemsBySku[o] ? this.itemsBySku[o].push(s) : (this.itemsBySku[o] = [s]);
                                  }
                          }
                          t.length > 0 && console.warn(t);
                      }),
                      (e.dataImport = function (t) {
                          var e = this;
                          this.data = t;
                          var i = [];
                          if (
                              (console.log("itemslength", Object.keys(this.itemsBySku).length),
                              Object.keys(this.itemsBySku).length > 0 &&
                                  t.forEach(function (t) {
                                      var n = e.itemsBySku[t.sku];
                                      void 0 === n
                                          ? i.push("name: ".concat(t.name, "} | id: ").concat(t.sku))
                                          : n.forEach(function (e) {
                                                var i = void 0 !== t.price ? t.price : null,
                                                    n = void 0 !== t.leadTimeByDay ? parseInt(t.leadTimeByDay) : null,
                                                    r = void 0 !== t.thumbnail && t.thumbnail;
                                                e.set("price", i),
                                                    e.set("leadTimeDays", n),
                                                    !1 !== r && e.set("thumbnail", thumbnail),
                                                    (!0 !== t.available && !1 !== t.available) || e.set("unavailable", !t.available),
                                                    (!0 !== t.disabled && !1 !== t.disabled) || e.set("disabled", !t.disabled);
                                            });
                                  }),
                              this.controller.UIController.PRICING_CONTROLLER.calculateRoomPricing(),
                              i.length > 0)
                          )
                              return i;
                      }),
                      t
                  );
              })(),
              Gn = (function () {
                  function t(t) {
                      var e = this;
                      (this.IS_DEBUG = t.isDebug),
                          1 == this.IS_DEBUG && (console.log(), console.log(t)),
                          (t.fullscreen = {}),
                          (t.fullscreen.hideMenu = !0),
                          (t.fullscreen.enabled = !0),
                          (t.isDebug = !1),
                          (t.configStringBase = 36),
                          (t.filters = []),
                          (t.gestureHandling = { container: document.getElementById("gesture-hinter"), enabledZoom: !0, enabledRotate: !0, enabledZoomFullscreen: !0, enabledZoomRotate: !0 });
                      var i = document.querySelector("onfigr");
                      new Tn({
                          config: "",
                          configStringBase: 36,
                          isDebug: !0,
                          gestureHandling: {
                              mode: "greedy",
                              container: document.getElementById("gesture-hinter"),
                              enabledZoom: !1,
                              enabledRotate: !0,
                              enabledZoomFullscreen: !1,
                              enabledRotateFullscreen: !0,
                              enabledZoomRotate: !1,
                              hinterMessageZoom: "Use ctrl + scroll to zoom",
                              hinterMessageTouch: "Use two fingers to look around",
                              rotationScalar: 500,
                              touchZoomDelta: 25,
                          },
                          filters: [
                              ["vanity", "double_vanity"],
                              ["faucet_2", "single"],
                          ],
                      }),
                          (this.UIController = new Bn(i.api)),
                          (this.DataController = new Hn(i.api, this)),
                          (i.api.setSkuPricesLeadTime = function (t) {
                              return e.DataController.dataImport(t);
                          }),
                          (i.api.setRoomName = function (t) {
                              e.UIController.setRoomName(t);
                          }),
                          (i.api.setDesignName = function (t) {
                              e.UIController.setDesignName(t);
                          }),
                          (i.api.getSummary = function () {
                              var t = i.api.getActiveElements(),
                                  e = [];
                              return (
                                  i.api.layers.forEach(function (t) {
                                      var i = t.activeItem;
                                      e.push({ type: t.get("name"), name: i.get("name"), sku: i.get("product_code"), thumbnail: i.get("thumbnail"), price: i.get("price") });
                                  }),
                                  { previewImage: t.previewImage, items: e }
                              );
                          }),
                          (i.api.openPanel = function (t) {
                              var i = t.toLowerCase();
                              if (
                                  bn.layerMenus.findIndex(function (t) {
                                      return t.name.toLowerCase() === i;
                                  }) > -1
                              )
                                  return e.UIController.openMenu(i), !0;
                              throw new Error("Panel ".concat(i, " not an available panel"));
                          });
                  }
                  return (
                      (t.prototype.getConfigurator = function () {
                          return this.CONFIGURATOR;
                      }),
                      t
                  );
              })(),
              kn = (function () {
                  function t(t) {
                      this.CONTROLLER = new Gn(t);
                      var e = document.querySelector("onfigr");
                      null !== e.getAttribute("room-name") && e.api.setRoomName(e.getAttribute("room-name")), null !== e.getAttribute("design-name") && e.api.setDesignName(e.getAttribute("design-name"));
                  }
                  return (
                      (t.prototype.getViewer = function () {
                          return this.CONTROLLER.getConfigurator();
                      }),
                      t
                  );
              })();
          function Yn(t) {
              return new kn(t);
          }
          d(), m(), (document.contains = Object(E.getPolyfill)()), Yn({});
      },
  ]);
});