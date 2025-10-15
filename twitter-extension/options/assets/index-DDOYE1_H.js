var k0 = Object.defineProperty;
var $0 = (r, b, g) => (b in r ? k0(r, b, { enumerable: !0, configurable: !0, writable: !0, value: g }) : (r[b] = g));
var ed = (r, b, g) => $0(r, typeof b != 'symbol' ? b + '' : b, g);
(function () {
  const b = document.createElement('link').relList;
  if (b && b.supports && b.supports('modulepreload')) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) s(M);
  new MutationObserver(M => {
    for (const _ of M)
      if (_.type === 'childList')
        for (const x of _.addedNodes) x.tagName === 'LINK' && x.rel === 'modulepreload' && s(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function g(M) {
    const _ = {};
    return (
      M.integrity && (_.integrity = M.integrity),
      M.referrerPolicy && (_.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === 'use-credentials'
        ? (_.credentials = 'include')
        : M.crossOrigin === 'anonymous'
          ? (_.credentials = 'omit')
          : (_.credentials = 'same-origin'),
      _
    );
  }
  function s(M) {
    if (M.ep) return;
    M.ep = !0;
    const _ = g(M);
    fetch(M.href, _);
  }
})();
var cf = { exports: {} },
  Du = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function F0() {
  if (ad) return Du;
  ad = 1;
  var r = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.fragment');
  function g(s, M, _) {
    var x = null;
    if ((_ !== void 0 && (x = '' + _), M.key !== void 0 && (x = '' + M.key), 'key' in M)) {
      _ = {};
      for (var U in M) U !== 'key' && (_[U] = M[U]);
    } else _ = M;
    return (M = _.ref), { $$typeof: r, type: s, key: x, ref: M !== void 0 ? M : null, props: _ };
  }
  return (Du.Fragment = b), (Du.jsx = g), (Du.jsxs = g), Du;
}
var ud;
function P0() {
  return ud || ((ud = 1), (cf.exports = F0())), cf.exports;
}
var tt = P0(),
  ff = { exports: {} },
  Ru = {},
  rf = { exports: {} },
  sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function I0() {
  return (
    nd ||
      ((nd = 1),
      (function (r) {
        function b(R, L) {
          var X = R.length;
          R.push(L);
          l: for (; 0 < X; ) {
            var rl = (X - 1) >>> 1,
              o = R[rl];
            if (0 < M(o, L)) (R[rl] = L), (R[X] = o), (X = rl);
            else break l;
          }
        }
        function g(R) {
          return R.length === 0 ? null : R[0];
        }
        function s(R) {
          if (R.length === 0) return null;
          var L = R[0],
            X = R.pop();
          if (X !== L) {
            R[0] = X;
            l: for (var rl = 0, o = R.length, z = o >>> 1; rl < z; ) {
              var V = 2 * (rl + 1) - 1,
                Q = R[V],
                N = V + 1,
                cl = R[N];
              if (0 > M(Q, X))
                N < o && 0 > M(cl, Q) ? ((R[rl] = cl), (R[N] = X), (rl = N)) : ((R[rl] = Q), (R[V] = X), (rl = V));
              else if (N < o && 0 > M(cl, X)) (R[rl] = cl), (R[N] = X), (rl = N);
              else break l;
            }
          }
          return L;
        }
        function M(R, L) {
          var X = R.sortIndex - L.sortIndex;
          return X !== 0 ? X : R.id - L.id;
        }
        if (((r.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var _ = performance;
          r.unstable_now = function () {
            return _.now();
          };
        } else {
          var x = Date,
            U = x.now();
          r.unstable_now = function () {
            return x.now() - U;
          };
        }
        var D = [],
          p = [],
          B = 1,
          J = null,
          W = 3,
          nl = !1,
          hl = !1,
          F = !1,
          P = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          H = typeof setImmediate < 'u' ? setImmediate : null;
        function w(R) {
          for (var L = g(p); L !== null; ) {
            if (L.callback === null) s(p);
            else if (L.startTime <= R) s(p), (L.sortIndex = L.expirationTime), b(D, L);
            else break;
            L = g(p);
          }
        }
        function yl(R) {
          if (((F = !1), w(R), !hl))
            if (g(D) !== null) (hl = !0), $l();
            else {
              var L = g(p);
              L !== null && jl(yl, L.startTime - R);
            }
        }
        var G = !1,
          Hl = -1,
          Tt = 5,
          zt = -1;
        function j() {
          return !(r.unstable_now() - zt < Tt);
        }
        function al() {
          if (G) {
            var R = r.unstable_now();
            zt = R;
            var L = !0;
            try {
              l: {
                (hl = !1), F && ((F = !1), O(Hl), (Hl = -1)), (nl = !0);
                var X = W;
                try {
                  t: {
                    for (w(R), J = g(D); J !== null && !(J.expirationTime > R && j()); ) {
                      var rl = J.callback;
                      if (typeof rl == 'function') {
                        (J.callback = null), (W = J.priorityLevel);
                        var o = rl(J.expirationTime <= R);
                        if (((R = r.unstable_now()), typeof o == 'function')) {
                          (J.callback = o), w(R), (L = !0);
                          break t;
                        }
                        J === g(D) && s(D), w(R);
                      } else s(D);
                      J = g(D);
                    }
                    if (J !== null) L = !0;
                    else {
                      var z = g(p);
                      z !== null && jl(yl, z.startTime - R), (L = !1);
                    }
                  }
                  break l;
                } finally {
                  (J = null), (W = X), (nl = !1);
                }
                L = void 0;
              }
            } finally {
              L ? Vl() : (G = !1);
            }
          }
        }
        var Vl;
        if (typeof H == 'function')
          Vl = function () {
            H(al);
          };
        else if (typeof MessageChannel < 'u') {
          var il = new MessageChannel(),
            et = il.port2;
          (il.port1.onmessage = al),
            (Vl = function () {
              et.postMessage(null);
            });
        } else
          Vl = function () {
            P(al, 0);
          };
        function $l() {
          G || ((G = !0), Vl());
        }
        function jl(R, L) {
          Hl = P(function () {
            R(r.unstable_now());
          }, L);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            hl || nl || ((hl = !0), $l());
          }),
          (r.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Tt = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return W;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return g(D);
          }),
          (r.unstable_next = function (R) {
            switch (W) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = W;
            }
            var X = W;
            W = L;
            try {
              return R();
            } finally {
              W = X;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (R, L) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var X = W;
            W = R;
            try {
              return L();
            } finally {
              W = X;
            }
          }),
          (r.unstable_scheduleCallback = function (R, L, X) {
            var rl = r.unstable_now();
            switch (
              (typeof X == 'object' && X !== null
                ? ((X = X.delay), (X = typeof X == 'number' && 0 < X ? rl + X : rl))
                : (X = rl),
              R)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (o = X + o),
              (R = { id: B++, callback: L, priorityLevel: R, startTime: X, expirationTime: o, sortIndex: -1 }),
              X > rl
                ? ((R.sortIndex = X),
                  b(p, R),
                  g(D) === null && R === g(p) && (F ? (O(Hl), (Hl = -1)) : (F = !0), jl(yl, X - rl)))
                : ((R.sortIndex = o), b(D, R), hl || nl || ((hl = !0), $l())),
              R
            );
          }),
          (r.unstable_shouldYield = j),
          (r.unstable_wrapCallback = function (R) {
            var L = W;
            return function () {
              var X = W;
              W = L;
              try {
                return R.apply(this, arguments);
              } finally {
                W = X;
              }
            };
          });
      })(sf)),
    sf
  );
}
var id;
function ly() {
  return id || ((id = 1), (rf.exports = I0())), rf.exports;
}
var of = { exports: {} },
  k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function ty() {
  if (cd) return k;
  cd = 1;
  var r = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    g = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    M = Symbol.for('react.profiler'),
    _ = Symbol.for('react.consumer'),
    x = Symbol.for('react.context'),
    U = Symbol.for('react.forward_ref'),
    D = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    B = Symbol.for('react.lazy'),
    J = Symbol.iterator;
  function W(o) {
    return o === null || typeof o != 'object'
      ? null
      : ((o = (J && o[J]) || o['@@iterator']), typeof o == 'function' ? o : null);
  }
  var nl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    hl = Object.assign,
    F = {};
  function P(o, z, V) {
    (this.props = o), (this.context = z), (this.refs = F), (this.updater = V || nl);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (o, z) {
      if (typeof o != 'object' && typeof o != 'function' && o != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, o, z, 'setState');
    }),
    (P.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, 'forceUpdate');
    });
  function O() {}
  O.prototype = P.prototype;
  function H(o, z, V) {
    (this.props = o), (this.context = z), (this.refs = F), (this.updater = V || nl);
  }
  var w = (H.prototype = new O());
  (w.constructor = H), hl(w, P.prototype), (w.isPureReactComponent = !0);
  var yl = Array.isArray,
    G = { H: null, A: null, T: null, S: null },
    Hl = Object.prototype.hasOwnProperty;
  function Tt(o, z, V, Q, N, cl) {
    return (V = cl.ref), { $$typeof: r, type: o, key: z, ref: V !== void 0 ? V : null, props: cl };
  }
  function zt(o, z) {
    return Tt(o.type, z, void 0, void 0, void 0, o.props);
  }
  function j(o) {
    return typeof o == 'object' && o !== null && o.$$typeof === r;
  }
  function al(o) {
    var z = { '=': '=0', ':': '=2' };
    return (
      '$' +
      o.replace(/[=:]/g, function (V) {
        return z[V];
      })
    );
  }
  var Vl = /\/+/g;
  function il(o, z) {
    return typeof o == 'object' && o !== null && o.key != null ? al('' + o.key) : z.toString(36);
  }
  function et() {}
  function $l(o) {
    switch (o.status) {
      case 'fulfilled':
        return o.value;
      case 'rejected':
        throw o.reason;
      default:
        switch (
          (typeof o.status == 'string'
            ? o.then(et, et)
            : ((o.status = 'pending'),
              o.then(
                function (z) {
                  o.status === 'pending' && ((o.status = 'fulfilled'), (o.value = z));
                },
                function (z) {
                  o.status === 'pending' && ((o.status = 'rejected'), (o.reason = z));
                },
              )),
          o.status)
        ) {
          case 'fulfilled':
            return o.value;
          case 'rejected':
            throw o.reason;
        }
    }
    throw o;
  }
  function jl(o, z, V, Q, N) {
    var cl = typeof o;
    (cl === 'undefined' || cl === 'boolean') && (o = null);
    var I = !1;
    if (o === null) I = !0;
    else
      switch (cl) {
        case 'bigint':
        case 'string':
        case 'number':
          I = !0;
          break;
        case 'object':
          switch (o.$$typeof) {
            case r:
            case b:
              I = !0;
              break;
            case B:
              return (I = o._init), jl(I(o._payload), z, V, Q, N);
          }
      }
    if (I)
      return (
        (N = N(o)),
        (I = Q === '' ? '.' + il(o, 0) : Q),
        yl(N)
          ? ((V = ''),
            I != null && (V = I.replace(Vl, '$&/') + '/'),
            jl(N, z, V, '', function (Dl) {
              return Dl;
            }))
          : N != null &&
            (j(N) &&
              (N = zt(
                N,
                V + (N.key == null || (o && o.key === N.key) ? '' : ('' + N.key).replace(Vl, '$&/') + '/') + I,
              )),
            z.push(N)),
        1
      );
    I = 0;
    var Jl = Q === '' ? '.' : Q + ':';
    if (yl(o)) for (var dl = 0; dl < o.length; dl++) (Q = o[dl]), (cl = Jl + il(Q, dl)), (I += jl(Q, z, V, cl, N));
    else if (((dl = W(o)), typeof dl == 'function'))
      for (o = dl.call(o), dl = 0; !(Q = o.next()).done; )
        (Q = Q.value), (cl = Jl + il(Q, dl++)), (I += jl(Q, z, V, cl, N));
    else if (cl === 'object') {
      if (typeof o.then == 'function') return jl($l(o), z, V, Q, N);
      throw (
        ((z = String(o)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (z === '[object Object]' ? 'object with keys {' + Object.keys(o).join(', ') + '}' : z) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return I;
  }
  function R(o, z, V) {
    if (o == null) return o;
    var Q = [],
      N = 0;
    return (
      jl(o, Q, '', '', function (cl) {
        return z.call(V, cl, N++);
      }),
      Q
    );
  }
  function L(o) {
    if (o._status === -1) {
      var z = o._result;
      (z = z()),
        z.then(
          function (V) {
            (o._status === 0 || o._status === -1) && ((o._status = 1), (o._result = V));
          },
          function (V) {
            (o._status === 0 || o._status === -1) && ((o._status = 2), (o._result = V));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = z));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var X =
    typeof reportError == 'function'
      ? reportError
      : function (o) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var z = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof o == 'object' && o !== null && typeof o.message == 'string' ? String(o.message) : String(o),
              error: o,
            });
            if (!window.dispatchEvent(z)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', o);
            return;
          }
          console.error(o);
        };
  function rl() {}
  return (
    (k.Children = {
      map: R,
      forEach: function (o, z, V) {
        R(
          o,
          function () {
            z.apply(this, arguments);
          },
          V,
        );
      },
      count: function (o) {
        var z = 0;
        return (
          R(o, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (o) {
        return (
          R(o, function (z) {
            return z;
          }) || []
        );
      },
      only: function (o) {
        if (!j(o)) throw Error('React.Children.only expected to receive a single React element child.');
        return o;
      },
    }),
    (k.Component = P),
    (k.Fragment = g),
    (k.Profiler = M),
    (k.PureComponent = H),
    (k.StrictMode = s),
    (k.Suspense = D),
    (k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (k.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (k.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (k.cloneElement = function (o, z, V) {
      if (o == null) throw Error('The argument must be a React element, but you passed ' + o + '.');
      var Q = hl({}, o.props),
        N = o.key,
        cl = void 0;
      if (z != null)
        for (I in (z.ref !== void 0 && (cl = void 0), z.key !== void 0 && (N = '' + z.key), z))
          !Hl.call(z, I) ||
            I === 'key' ||
            I === '__self' ||
            I === '__source' ||
            (I === 'ref' && z.ref === void 0) ||
            (Q[I] = z[I]);
      var I = arguments.length - 2;
      if (I === 1) Q.children = V;
      else if (1 < I) {
        for (var Jl = Array(I), dl = 0; dl < I; dl++) Jl[dl] = arguments[dl + 2];
        Q.children = Jl;
      }
      return Tt(o.type, N, void 0, void 0, cl, Q);
    }),
    (k.createContext = function (o) {
      return (
        (o = { $$typeof: x, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: _, _context: o }),
        o
      );
    }),
    (k.createElement = function (o, z, V) {
      var Q,
        N = {},
        cl = null;
      if (z != null)
        for (Q in (z.key !== void 0 && (cl = '' + z.key), z))
          Hl.call(z, Q) && Q !== 'key' && Q !== '__self' && Q !== '__source' && (N[Q] = z[Q]);
      var I = arguments.length - 2;
      if (I === 1) N.children = V;
      else if (1 < I) {
        for (var Jl = Array(I), dl = 0; dl < I; dl++) Jl[dl] = arguments[dl + 2];
        N.children = Jl;
      }
      if (o && o.defaultProps) for (Q in ((I = o.defaultProps), I)) N[Q] === void 0 && (N[Q] = I[Q]);
      return Tt(o, cl, void 0, void 0, null, N);
    }),
    (k.createRef = function () {
      return { current: null };
    }),
    (k.forwardRef = function (o) {
      return { $$typeof: U, render: o };
    }),
    (k.isValidElement = j),
    (k.lazy = function (o) {
      return { $$typeof: B, _payload: { _status: -1, _result: o }, _init: L };
    }),
    (k.memo = function (o, z) {
      return { $$typeof: p, type: o, compare: z === void 0 ? null : z };
    }),
    (k.startTransition = function (o) {
      var z = G.T,
        V = {};
      G.T = V;
      try {
        var Q = o(),
          N = G.S;
        N !== null && N(V, Q), typeof Q == 'object' && Q !== null && typeof Q.then == 'function' && Q.then(rl, X);
      } catch (cl) {
        X(cl);
      } finally {
        G.T = z;
      }
    }),
    (k.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (k.use = function (o) {
      return G.H.use(o);
    }),
    (k.useActionState = function (o, z, V) {
      return G.H.useActionState(o, z, V);
    }),
    (k.useCallback = function (o, z) {
      return G.H.useCallback(o, z);
    }),
    (k.useContext = function (o) {
      return G.H.useContext(o);
    }),
    (k.useDebugValue = function () {}),
    (k.useDeferredValue = function (o, z) {
      return G.H.useDeferredValue(o, z);
    }),
    (k.useEffect = function (o, z) {
      return G.H.useEffect(o, z);
    }),
    (k.useId = function () {
      return G.H.useId();
    }),
    (k.useImperativeHandle = function (o, z, V) {
      return G.H.useImperativeHandle(o, z, V);
    }),
    (k.useInsertionEffect = function (o, z) {
      return G.H.useInsertionEffect(o, z);
    }),
    (k.useLayoutEffect = function (o, z) {
      return G.H.useLayoutEffect(o, z);
    }),
    (k.useMemo = function (o, z) {
      return G.H.useMemo(o, z);
    }),
    (k.useOptimistic = function (o, z) {
      return G.H.useOptimistic(o, z);
    }),
    (k.useReducer = function (o, z, V) {
      return G.H.useReducer(o, z, V);
    }),
    (k.useRef = function (o) {
      return G.H.useRef(o);
    }),
    (k.useState = function (o) {
      return G.H.useState(o);
    }),
    (k.useSyncExternalStore = function (o, z, V) {
      return G.H.useSyncExternalStore(o, z, V);
    }),
    (k.useTransition = function () {
      return G.H.useTransition();
    }),
    (k.version = '19.0.0'),
    k
  );
}
var fd;
function gf() {
  return fd || ((fd = 1), (of.exports = ty())), of.exports;
}
var df = { exports: {} },
  Kl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd;
function ey() {
  if (rd) return Kl;
  rd = 1;
  var r = gf();
  function b(D) {
    var p = 'https://react.dev/errors/' + D;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++) p += '&args[]=' + encodeURIComponent(arguments[B]);
    }
    return (
      'Minified React error #' +
      D +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function g() {}
  var s = {
      d: {
        f: g,
        r: function () {
          throw Error(b(522));
        },
        D: g,
        C: g,
        L: g,
        m: g,
        X: g,
        S: g,
        M: g,
      },
      p: 0,
      findDOMNode: null,
    },
    M = Symbol.for('react.portal');
  function _(D, p, B) {
    var J = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: M, key: J == null ? null : '' + J, children: D, containerInfo: p, implementation: B };
  }
  var x = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function U(D, p) {
    if (D === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Kl.createPortal = function (D, p) {
      var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(b(299));
      return _(D, p, null, B);
    }),
    (Kl.flushSync = function (D) {
      var p = x.T,
        B = s.p;
      try {
        if (((x.T = null), (s.p = 2), D)) return D();
      } finally {
        (x.T = p), (s.p = B), s.d.f();
      }
    }),
    (Kl.preconnect = function (D, p) {
      typeof D == 'string' &&
        (p
          ? ((p = p.crossOrigin), (p = typeof p == 'string' ? (p === 'use-credentials' ? p : '') : void 0))
          : (p = null),
        s.d.C(D, p));
    }),
    (Kl.prefetchDNS = function (D) {
      typeof D == 'string' && s.d.D(D);
    }),
    (Kl.preinit = function (D, p) {
      if (typeof D == 'string' && p && typeof p.as == 'string') {
        var B = p.as,
          J = U(B, p.crossOrigin),
          W = typeof p.integrity == 'string' ? p.integrity : void 0,
          nl = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        B === 'style'
          ? s.d.S(D, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: J,
              integrity: W,
              fetchPriority: nl,
            })
          : B === 'script' &&
            s.d.X(D, {
              crossOrigin: J,
              integrity: W,
              fetchPriority: nl,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (Kl.preinitModule = function (D, p) {
      if (typeof D == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var B = U(p.as, p.crossOrigin);
            s.d.M(D, {
              crossOrigin: B,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && s.d.M(D);
    }),
    (Kl.preload = function (D, p) {
      if (typeof D == 'string' && typeof p == 'object' && p !== null && typeof p.as == 'string') {
        var B = p.as,
          J = U(B, p.crossOrigin);
        s.d.L(D, B, {
          crossOrigin: J,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (Kl.preloadModule = function (D, p) {
      if (typeof D == 'string')
        if (p) {
          var B = U(p.as, p.crossOrigin);
          s.d.m(D, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: B,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else s.d.m(D);
    }),
    (Kl.requestFormReset = function (D) {
      s.d.r(D);
    }),
    (Kl.unstable_batchedUpdates = function (D, p) {
      return D(p);
    }),
    (Kl.useFormState = function (D, p, B) {
      return x.H.useFormState(D, p, B);
    }),
    (Kl.useFormStatus = function () {
      return x.H.useHostTransitionStatus();
    }),
    (Kl.version = '19.0.0'),
    Kl
  );
}
var sd;
function ay() {
  if (sd) return df.exports;
  sd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (b) {
        console.error(b);
      }
  }
  return r(), (df.exports = ey()), df.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function uy() {
  if (od) return Ru;
  od = 1;
  var r = ly(),
    b = gf(),
    g = ay();
  function s(l) {
    var t = 'https://react.dev/errors/' + l;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) t += '&args[]=' + encodeURIComponent(arguments[e]);
    }
    return (
      'Minified React error #' +
      l +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function M(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  var _ = Symbol.for('react.element'),
    x = Symbol.for('react.transitional.element'),
    U = Symbol.for('react.portal'),
    D = Symbol.for('react.fragment'),
    p = Symbol.for('react.strict_mode'),
    B = Symbol.for('react.profiler'),
    J = Symbol.for('react.provider'),
    W = Symbol.for('react.consumer'),
    nl = Symbol.for('react.context'),
    hl = Symbol.for('react.forward_ref'),
    F = Symbol.for('react.suspense'),
    P = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    H = Symbol.for('react.lazy'),
    w = Symbol.for('react.offscreen'),
    yl = Symbol.for('react.memo_cache_sentinel'),
    G = Symbol.iterator;
  function Hl(l) {
    return l === null || typeof l != 'object'
      ? null
      : ((l = (G && l[G]) || l['@@iterator']), typeof l == 'function' ? l : null);
  }
  var Tt = Symbol.for('react.client.reference');
  function zt(l) {
    if (l == null) return null;
    if (typeof l == 'function') return l.$$typeof === Tt ? null : l.displayName || l.name || null;
    if (typeof l == 'string') return l;
    switch (l) {
      case D:
        return 'Fragment';
      case U:
        return 'Portal';
      case B:
        return 'Profiler';
      case p:
        return 'StrictMode';
      case F:
        return 'Suspense';
      case P:
        return 'SuspenseList';
    }
    if (typeof l == 'object')
      switch (l.$$typeof) {
        case nl:
          return (l.displayName || 'Context') + '.Provider';
        case W:
          return (l._context.displayName || 'Context') + '.Consumer';
        case hl:
          var t = l.render;
          return (
            (l = l.displayName),
            l || ((l = t.displayName || t.name || ''), (l = l !== '' ? 'ForwardRef(' + l + ')' : 'ForwardRef')),
            l
          );
        case O:
          return (t = l.displayName || null), t !== null ? t : zt(l.type) || 'Memo';
        case H:
          (t = l._payload), (l = l._init);
          try {
            return zt(l(t));
          } catch {}
      }
    return null;
  }
  var j = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    al = Object.assign,
    Vl,
    il;
  function et(l) {
    if (Vl === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (Vl = (t && t[1]) || ''),
          (il =
            -1 <
            e.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < e.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Vl +
      l +
      il
    );
  }
  var $l = !1;
  function jl(l, t) {
    if (!l || $l) return '';
    $l = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (S) {
                  var m = S;
                }
                Reflect.construct(l, [], A);
              } else {
                try {
                  A.call();
                } catch (S) {
                  m = S;
                }
                l.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                m = S;
              }
              (A = l()) && typeof A.catch == 'function' && A.catch(function () {});
            }
          } catch (S) {
            if (S && m && typeof S.stack == 'string') return [S.stack, m.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          h = c.split(`
`);
        for (u = a = 0; a < f.length && !f[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; u < h.length && !h[u].includes('DetermineComponentFrameRoot'); ) u++;
        if (a === f.length || u === h.length)
          for (a = f.length - 1, u = h.length - 1; 1 <= a && 0 <= u && f[a] !== h[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== h[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || f[a] !== h[u])) {
                  var E =
                    `
` + f[a].replace(' at new ', ' at ');
                  return l.displayName && E.includes('<anonymous>') && (E = E.replace('<anonymous>', l.displayName)), E;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ($l = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : '') ? et(e) : '';
  }
  function R(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return et(l.type);
      case 16:
        return et('Lazy');
      case 13:
        return et('Suspense');
      case 19:
        return et('SuspenseList');
      case 0:
      case 15:
        return (l = jl(l.type, !1)), l;
      case 11:
        return (l = jl(l.type.render, !1)), l;
      case 1:
        return (l = jl(l.type, !0)), l;
      default:
        return '';
    }
  }
  function L(l) {
    try {
      var t = '';
      do (t += R(l)), (l = l.return);
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function X(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), t.flags & 4098 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function rl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function o(l) {
    if (X(l) !== l) throw Error(s(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = X(l)), t === null)) throw Error(s(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return o(u), l;
          if (n === a) return o(u), t;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            (i = !0), (e = u), (a = n);
            break;
          }
          if (c === a) {
            (i = !0), (a = u), (e = n);
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              (i = !0), (e = n), (a = u);
              break;
            }
            if (c === a) {
              (i = !0), (a = n), (e = u);
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t;
  }
  function V(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = V(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var Q = Array.isArray,
    N = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    cl = { pending: !1, data: null, method: null, action: null },
    I = [],
    Jl = -1;
  function dl(l) {
    return { current: l };
  }
  function Dl(l) {
    0 > Jl || ((l.current = I[Jl]), (I[Jl] = null), Jl--);
  }
  function El(l, t) {
    Jl++, (I[Jl] = l.current), (l.current = t);
  }
  var Dt = dl(null),
    xa = dl(null),
    It = dl(null),
    Nu = dl(null);
  function qu(l, t) {
    switch ((El(It, t), El(xa, l), El(Dt, null), (l = t.nodeType), l)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? xo(t) : 0;
        break;
      default:
        if (((l = l === 8 ? t.parentNode : t), (t = l.tagName), (l = l.namespaceURI))) (l = xo(l)), (t = Ho(l, t));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Dl(Dt), El(Dt, t);
  }
  function Je() {
    Dl(Dt), Dl(xa), Dl(It);
  }
  function Fn(l) {
    l.memoizedState !== null && El(Nu, l);
    var t = Dt.current,
      e = Ho(t, l.type);
    t !== e && (El(xa, l), El(Dt, e));
  }
  function Cu(l) {
    xa.current === l && (Dl(Dt), Dl(xa)), Nu.current === l && (Dl(Nu), (zu._currentValue = cl));
  }
  var Pn = Object.prototype.hasOwnProperty,
    In = r.unstable_scheduleCallback,
    li = r.unstable_cancelCallback,
    _d = r.unstable_shouldYield,
    Dd = r.unstable_requestPaint,
    Rt = r.unstable_now,
    Rd = r.unstable_getCurrentPriorityLevel,
    Sf = r.unstable_ImmediatePriority,
    pf = r.unstable_UserBlockingPriority,
    Yu = r.unstable_NormalPriority,
    Ud = r.unstable_LowPriority,
    Ef = r.unstable_IdlePriority,
    xd = r.log,
    Hd = r.unstable_setDisableYieldValue,
    Ha = null,
    at = null;
  function Nd(l) {
    if (at && typeof at.onCommitFiberRoot == 'function')
      try {
        at.onCommitFiberRoot(Ha, l, void 0, (l.current.flags & 128) === 128);
      } catch {}
  }
  function le(l) {
    if ((typeof xd == 'function' && Hd(l), at && typeof at.setStrictMode == 'function'))
      try {
        at.setStrictMode(Ha, l);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Yd,
    qd = Math.log,
    Cd = Math.LN2;
  function Yd(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((qd(l) / Cd) | 0)) | 0;
  }
  var Bu = 128,
    Gu = 4194304;
  function Oe(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ju(l, t) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var a = 0,
      u = l.suspendedLanes,
      n = l.pingedLanes,
      i = l.warmLanes;
    l = l.finishedLanes !== 0;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~u),
          e !== 0 ? (a = Oe(e)) : ((n &= c), n !== 0 ? (a = Oe(n)) : l || ((i = c & ~i), i !== 0 && (a = Oe(i)))))
        : ((c = e & ~u), c !== 0 ? (a = Oe(c)) : n !== 0 ? (a = Oe(n)) : l || ((i = e & ~i), i !== 0 && (a = Oe(i)))),
      a === 0
        ? 0
        : t !== 0 && t !== a && !(t & u) && ((u = a & -a), (i = t & -t), u >= i || (u === 32 && (i & 4194176) !== 0))
          ? t
          : a
    );
  }
  function Na(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tf() {
    var l = Bu;
    return (Bu <<= 1), !(Bu & 4194176) && (Bu = 128), l;
  }
  function zf() {
    var l = Gu;
    return (Gu <<= 1), !(Gu & 62914560) && (Gu = 4194304), l;
  }
  function ti(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function qa(l, t) {
    (l.pendingLanes |= t), t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Gd(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      f = l.expirationTimes,
      h = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var E = 31 - ut(e),
        A = 1 << E;
      (c[E] = 0), (f[E] = -1);
      var m = h[E];
      if (m !== null)
        for (h[E] = null, E = 0; E < m.length; E++) {
          var S = m[E];
          S !== null && (S.lane &= -536870913);
        }
      e &= ~A;
    }
    a !== 0 && Af(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Af(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - ut(t);
    (l.entangledLanes |= t), (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 4194218));
  }
  function Of(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ut(e),
        u = 1 << a;
      (u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
    }
  }
  function Mf(l) {
    return (l &= -l), 2 < l ? (8 < l ? (l & 134217727 ? 32 : 268435456) : 8) : 2;
  }
  function _f() {
    var l = N.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : $o(l.type));
  }
  function jd(l, t) {
    var e = N.p;
    try {
      return (N.p = l), t();
    } finally {
      N.p = e;
    }
  }
  var te = Math.random().toString(36).slice(2),
    Ll = '__reactFiber$' + te,
    Fl = '__reactProps$' + te,
    We = '__reactContainer$' + te,
    ei = '__reactEvents$' + te,
    Xd = '__reactListeners$' + te,
    Qd = '__reactHandles$' + te,
    Df = '__reactResources$' + te,
    Ca = '__reactMarker$' + te;
  function ai(l) {
    delete l[Ll], delete l[Fl], delete l[ei], delete l[Xd], delete l[Qd];
  }
  function Me(l) {
    var t = l[Ll];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[We] || e[Ll])) {
        if (((e = t.alternate), t.child !== null || (e !== null && e.child !== null)))
          for (l = Co(l); l !== null; ) {
            if ((e = l[Ll])) return e;
            l = Co(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function ke(l) {
    if ((l = l[Ll] || l[We])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Ya(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33));
  }
  function $e(l) {
    var t = l[Df];
    return t || (t = l[Df] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function Cl(l) {
    l[Ca] = !0;
  }
  var Rf = new Set(),
    Uf = {};
  function _e(l, t) {
    Fe(l, t), Fe(l + 'Capture', t);
  }
  function Fe(l, t) {
    for (Uf[l] = t, l = 0; l < t.length; l++) Rf.add(t[l]);
  }
  var Ct = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    Zd = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    xf = {},
    Hf = {};
  function Vd(l) {
    return Pn.call(Hf, l) ? !0 : Pn.call(xf, l) ? !1 : Zd.test(l) ? (Hf[l] = !0) : ((xf[l] = !0), !1);
  }
  function Xu(l, t, e) {
    if (Vd(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case 'undefined':
          case 'function':
          case 'symbol':
            l.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, '' + e);
      }
  }
  function Qu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, '' + e);
    }
  }
  function Yt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, '' + a);
    }
  }
  function st(l) {
    switch (typeof l) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return l;
      case 'object':
        return l;
      default:
        return '';
    }
  }
  function Nf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ld(l) {
    var t = Nf(l) ? 'checked' : 'value',
      e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = '' + l[t];
    if (!l.hasOwnProperty(t) && typeof e < 'u' && typeof e.get == 'function' && typeof e.set == 'function') {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (a = '' + i), n.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = '' + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Zu(l) {
    l._valueTracker || (l._valueTracker = Ld(l));
  }
  function qf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = '';
    return l && (a = Nf(l) ? (l.checked ? 'true' : 'false') : l.value), (l = a), l !== e ? (t.setValue(l), !0) : !1;
  }
  function Vu(l) {
    if (((l = l || (typeof document < 'u' ? document : void 0)), typeof l > 'u')) return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var wd = /[\n"\\]/g;
  function ot(l) {
    return l.replace(wd, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function ui(l, t, e, a, u, n, i, c) {
    (l.name = ''),
      i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean'
        ? (l.type = i)
        : l.removeAttribute('type'),
      t != null
        ? i === 'number'
          ? ((t === 0 && l.value === '') || l.value != t) && (l.value = '' + st(t))
          : l.value !== '' + st(t) && (l.value = '' + st(t))
        : (i !== 'submit' && i !== 'reset') || l.removeAttribute('value'),
      t != null ? ni(l, i, st(t)) : e != null ? ni(l, i, st(e)) : a != null && l.removeAttribute('value'),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null && (l.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      c != null && typeof c != 'function' && typeof c != 'symbol' && typeof c != 'boolean'
        ? (l.name = '' + st(c))
        : l.removeAttribute('name');
  }
  function Cf(l, t, e, a, u, n, i, c) {
    if (
      (n != null && typeof n != 'function' && typeof n != 'symbol' && typeof n != 'boolean' && (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== 'submit' && n !== 'reset') || t != null)) return;
      (e = e != null ? '' + st(e) : ''),
        (t = t != null ? '' + st(t) : e),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? u),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' && (l.name = i);
  }
  function ni(l, t, e) {
    (t === 'number' && Vu(l.ownerDocument) === l) || l.defaultValue === '' + e || (l.defaultValue = '' + e);
  }
  function Pe(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t['$' + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        (u = t.hasOwnProperty('$' + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = '' + st(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          (l[u].selected = !0), a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yf(l, t, e) {
    if (t != null && ((t = '' + st(t)), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? '' + st(e) : '';
  }
  function Bf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Q(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ''), (t = e);
    }
    (e = st(t)), (l.defaultValue = e), (a = l.textContent), a === e && a !== '' && a !== null && (l.value = a);
  }
  function Ie(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Kd = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Gf(l, t, e) {
    var a = t.indexOf('--') === 0;
    e == null || typeof e == 'boolean' || e === ''
      ? a
        ? l.setProperty(t, '')
        : t === 'float'
          ? (l.cssFloat = '')
          : (l[t] = '')
      : a
        ? l.setProperty(t, e)
        : typeof e != 'number' || e === 0 || Kd.has(t)
          ? t === 'float'
            ? (l.cssFloat = e)
            : (l[t] = ('' + e).trim())
          : (l[t] = e + 'px');
  }
  function jf(l, t, e) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0 ? l.setProperty(a, '') : a === 'float' ? (l.cssFloat = '') : (l[a] = ''));
      for (var u in t) (a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Gf(l, u, a);
    } else for (var n in t) t.hasOwnProperty(n) && Gf(l, n, t[n]);
  }
  function ii(l) {
    if (l.indexOf('-') === -1) return !1;
    switch (l) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Jd = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Wd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lu(l) {
    return Wd.test('' + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var ci = null;
  function fi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var la = null,
    ta = null;
  function Xf(l) {
    var t = ke(l);
    if (t && (l = t.stateNode)) {
      var e = l[Fl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case 'input':
          if (
            (ui(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
            (t = e.name),
            e.type === 'radio' && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + ot('' + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Fl] || null;
                if (!u) throw Error(s(90));
                ui(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (t = 0; t < e.length; t++) (a = e[t]), a.form === l.form && qf(a);
          }
          break l;
        case 'textarea':
          Yf(l, e.value, e.defaultValue);
          break l;
        case 'select':
          (t = e.value), t != null && Pe(l, !!e.multiple, t, !1);
      }
    }
  }
  var ri = !1;
  function Qf(l, t, e) {
    if (ri) return l(t, e);
    ri = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (((ri = !1), (la !== null || ta !== null) && (Dn(), la && ((t = la), (l = ta), (ta = la = null), Xf(t), l))))
        for (t = 0; t < l.length; t++) Xf(l[t]);
    }
  }
  function Ba(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Fl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (a = !a.disabled) ||
          ((l = l.type), (a = !(l === 'button' || l === 'input' || l === 'select' || l === 'textarea'))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != 'function') throw Error(s(231, t, typeof e));
    return e;
  }
  var si = !1;
  if (Ct)
    try {
      var Ga = {};
      Object.defineProperty(Ga, 'passive', {
        get: function () {
          si = !0;
        },
      }),
        window.addEventListener('test', Ga, Ga),
        window.removeEventListener('test', Ga, Ga);
    } catch {
      si = !1;
    }
  var ee = null,
    oi = null,
    wu = null;
  function Zf() {
    if (wu) return wu;
    var l,
      t = oi,
      e = t.length,
      a,
      u = 'value' in ee ? ee.value : ee.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return (wu = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Ku(l) {
    var t = l.keyCode;
    return (
      'charCode' in l ? ((l = l.charCode), l === 0 && t === 13 && (l = 13)) : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ju() {
    return !0;
  }
  function Vf() {
    return !1;
  }
  function Pl(l) {
    function t(e, a, u, n, i) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var c in l) l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
      return (
        (this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ju : Vf),
        (this.isPropagationStopped = Vf),
        this
      );
    }
    return (
      al(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault ? e.preventDefault() : typeof e.returnValue != 'unknown' && (e.returnValue = !1),
            (this.isDefaultPrevented = Ju));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != 'unknown' && (e.cancelBubble = !0),
            (this.isPropagationStopped = Ju));
        },
        persist: function () {},
        isPersistent: Ju,
      }),
      t
    );
  }
  var De = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wu = Pl(De),
    ja = al({}, De, { view: 0, detail: 0 }),
    kd = Pl(ja),
    di,
    hi,
    Xa,
    ku = al({}, ja, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return 'movementX' in l
          ? l.movementX
          : (l !== Xa &&
              (Xa && l.type === 'mousemove'
                ? ((di = l.screenX - Xa.screenX), (hi = l.screenY - Xa.screenY))
                : (hi = di = 0),
              (Xa = l)),
            di);
      },
      movementY: function (l) {
        return 'movementY' in l ? l.movementY : hi;
      },
    }),
    Lf = Pl(ku),
    $d = al({}, ku, { dataTransfer: 0 }),
    Fd = Pl($d),
    Pd = al({}, ja, { relatedTarget: 0 }),
    yi = Pl(Pd),
    Id = al({}, De, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lh = Pl(Id),
    th = al({}, De, {
      clipboardData: function (l) {
        return 'clipboardData' in l ? l.clipboardData : window.clipboardData;
      },
    }),
    eh = Pl(th),
    ah = al({}, De, { data: 0 }),
    wf = Pl(ah),
    uh = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    nh = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    ih = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function ch(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ih[l]) ? !!t[l] : !1;
  }
  function vi() {
    return ch;
  }
  var fh = al({}, ja, {
      key: function (l) {
        if (l.key) {
          var t = uh[l.key] || l.key;
          if (t !== 'Unidentified') return t;
        }
        return l.type === 'keypress'
          ? ((l = Ku(l)), l === 13 ? 'Enter' : String.fromCharCode(l))
          : l.type === 'keydown' || l.type === 'keyup'
            ? nh[l.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vi,
      charCode: function (l) {
        return l.type === 'keypress' ? Ku(l) : 0;
      },
      keyCode: function (l) {
        return l.type === 'keydown' || l.type === 'keyup' ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === 'keypress' ? Ku(l) : l.type === 'keydown' || l.type === 'keyup' ? l.keyCode : 0;
      },
    }),
    rh = Pl(fh),
    sh = al({}, ku, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kf = Pl(sh),
    oh = al({}, ja, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vi,
    }),
    dh = Pl(oh),
    hh = al({}, De, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yh = Pl(hh),
    vh = al({}, ku, {
      deltaX: function (l) {
        return 'deltaX' in l ? l.deltaX : 'wheelDeltaX' in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function (l) {
        return 'deltaY' in l ? l.deltaY : 'wheelDeltaY' in l ? -l.wheelDeltaY : 'wheelDelta' in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mh = Pl(vh),
    gh = al({}, De, { newState: 0, oldState: 0 }),
    bh = Pl(gh),
    Sh = [9, 13, 27, 32],
    mi = Ct && 'CompositionEvent' in window,
    Qa = null;
  Ct && 'documentMode' in document && (Qa = document.documentMode);
  var ph = Ct && 'TextEvent' in window && !Qa,
    Jf = Ct && (!mi || (Qa && 8 < Qa && 11 >= Qa)),
    Wf = ' ',
    kf = !1;
  function $f(l, t) {
    switch (l) {
      case 'keyup':
        return Sh.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ff(l) {
    return (l = l.detail), typeof l == 'object' && 'data' in l ? l.data : null;
  }
  var ea = !1;
  function Eh(l, t) {
    switch (l) {
      case 'compositionend':
        return Ff(t);
      case 'keypress':
        return t.which !== 32 ? null : ((kf = !0), Wf);
      case 'textInput':
        return (l = t.data), l === Wf && kf ? null : l;
      default:
        return null;
    }
  }
  function Th(l, t) {
    if (ea)
      return l === 'compositionend' || (!mi && $f(l, t)) ? ((l = Zf()), (wu = oi = ee = null), (ea = !1), l) : null;
    switch (l) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Jf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var zh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Pf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === 'input' ? !!zh[l.type] : t === 'textarea';
  }
  function If(l, t, e, a) {
    la ? (ta ? ta.push(a) : (ta = [a])) : (la = a),
      (t = Nn(t, 'onChange')),
      0 < t.length && ((e = new Wu('onChange', 'change', null, e, a)), l.push({ event: e, listeners: t }));
  }
  var Za = null,
    Va = null;
  function Ah(l) {
    Mo(l, 0);
  }
  function $u(l) {
    var t = Ya(l);
    if (qf(t)) return l;
  }
  function lr(l, t) {
    if (l === 'change') return t;
  }
  var tr = !1;
  if (Ct) {
    var gi;
    if (Ct) {
      var bi = 'oninput' in document;
      if (!bi) {
        var er = document.createElement('div');
        er.setAttribute('oninput', 'return;'), (bi = typeof er.oninput == 'function');
      }
      gi = bi;
    } else gi = !1;
    tr = gi && (!document.documentMode || 9 < document.documentMode);
  }
  function ar() {
    Za && (Za.detachEvent('onpropertychange', ur), (Va = Za = null));
  }
  function ur(l) {
    if (l.propertyName === 'value' && $u(Va)) {
      var t = [];
      If(t, Va, l, fi(l)), Qf(Ah, t);
    }
  }
  function Oh(l, t, e) {
    l === 'focusin' ? (ar(), (Za = t), (Va = e), Za.attachEvent('onpropertychange', ur)) : l === 'focusout' && ar();
  }
  function Mh(l) {
    if (l === 'selectionchange' || l === 'keyup' || l === 'keydown') return $u(Va);
  }
  function _h(l, t) {
    if (l === 'click') return $u(t);
  }
  function Dh(l, t) {
    if (l === 'input' || l === 'change') return $u(t);
  }
  function Rh(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == 'function' ? Object.is : Rh;
  function La(l, t) {
    if (nt(l, t)) return !0;
    if (typeof l != 'object' || l === null || typeof t != 'object' || t === null) return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Pn.call(t, u) || !nt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function nr(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ir(l, t) {
    var e = nr(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t)) return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = nr(e);
    }
  }
  function cr(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? cr(l, t.parentNode)
            : 'contains' in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function fr(l) {
    l =
      l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Vu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == 'string';
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Vu(l.document);
    }
    return t;
  }
  function Si(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (l.type === 'text' || l.type === 'search' || l.type === 'tel' || l.type === 'url' || l.type === 'password')) ||
        t === 'textarea' ||
        l.contentEditable === 'true')
    );
  }
  function Uh(l, t) {
    var e = fr(t);
    t = l.focusedElem;
    var a = l.selectionRange;
    if (e !== t && t && t.ownerDocument && cr(t.ownerDocument.documentElement, t)) {
      if (a !== null && Si(t)) {
        if (((l = a.start), (e = a.end), e === void 0 && (e = l), 'selectionStart' in t))
          (t.selectionStart = l), (t.selectionEnd = Math.min(e, t.value.length));
        else if (((e = ((l = t.ownerDocument || document) && l.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var u = t.textContent.length,
            n = Math.min(a.start, u);
          (a = a.end === void 0 ? n : Math.min(a.end, u)),
            !e.extend && n > a && ((u = a), (a = n), (n = u)),
            (u = ir(t, n));
          var i = ir(t, a);
          u &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((l = l.createRange()),
            l.setStart(u.node, u.offset),
            e.removeAllRanges(),
            n > a ? (e.addRange(l), e.extend(i.node, i.offset)) : (l.setEnd(i.node, i.offset), e.addRange(l)));
        }
      }
      for (l = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 && l.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < l.length; t++)
        (e = l[t]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var xh = Ct && 'documentMode' in document && 11 >= document.documentMode,
    aa = null,
    pi = null,
    wa = null,
    Ei = !1;
  function rr(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ei ||
      aa == null ||
      aa !== Vu(a) ||
      ((a = aa),
      'selectionStart' in a && Si(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (wa && La(wa, a)) ||
        ((wa = a),
        (a = Nn(pi, 'onSelect')),
        0 < a.length &&
          ((t = new Wu('onSelect', 'select', null, t, e)), l.push({ event: t, listeners: a }), (t.target = aa))));
  }
  function Re(l, t) {
    var e = {};
    return (e[l.toLowerCase()] = t.toLowerCase()), (e['Webkit' + l] = 'webkit' + t), (e['Moz' + l] = 'moz' + t), e;
  }
  var ua = {
      animationend: Re('Animation', 'AnimationEnd'),
      animationiteration: Re('Animation', 'AnimationIteration'),
      animationstart: Re('Animation', 'AnimationStart'),
      transitionrun: Re('Transition', 'TransitionRun'),
      transitionstart: Re('Transition', 'TransitionStart'),
      transitioncancel: Re('Transition', 'TransitionCancel'),
      transitionend: Re('Transition', 'TransitionEnd'),
    },
    Ti = {},
    sr = {};
  Ct &&
    ((sr = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation),
    'TransitionEvent' in window || delete ua.transitionend.transition);
  function Ue(l) {
    if (Ti[l]) return Ti[l];
    if (!ua[l]) return l;
    var t = ua[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in sr) return (Ti[l] = t[e]);
    return l;
  }
  var or = Ue('animationend'),
    dr = Ue('animationiteration'),
    hr = Ue('animationstart'),
    Hh = Ue('transitionrun'),
    Nh = Ue('transitionstart'),
    qh = Ue('transitioncancel'),
    yr = Ue('transitionend'),
    vr = new Map(),
    mr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' ',
      );
  function At(l, t) {
    vr.set(l, t), _e(t, [l]);
  }
  var dt = [],
    na = 0,
    zi = 0;
  function Fu() {
    for (var l = na, t = (zi = na = 0); t < l; ) {
      var e = dt[t];
      dt[t++] = null;
      var a = dt[t];
      dt[t++] = null;
      var u = dt[t];
      dt[t++] = null;
      var n = dt[t];
      if (((dt[t++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (a.pending = u);
      }
      n !== 0 && gr(e, u, n);
    }
  }
  function Pu(l, t, e, a) {
    (dt[na++] = l),
      (dt[na++] = t),
      (dt[na++] = e),
      (dt[na++] = a),
      (zi |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Ai(l, t, e, a) {
    return Pu(l, t, e, a), Iu(l);
  }
  function ae(l, t) {
    return Pu(l, null, null, t), Iu(l);
  }
  function gr(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 && ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    u &&
      t !== null &&
      l.tag === 3 &&
      ((n = l.stateNode),
      (u = 31 - ut(e)),
      (n = n.hiddenUpdates),
      (l = n[u]),
      l === null ? (n[u] = [t]) : l.push(t),
      (t.lane = e | 536870912));
  }
  function Iu(l) {
    if (50 < mu) throw ((mu = 0), (Uc = null), Error(s(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {},
    br = new WeakMap();
  function ht(l, t) {
    if (typeof l == 'object' && l !== null) {
      var e = br.get(l);
      return e !== void 0 ? e : ((t = { value: l, source: t, stack: L(t) }), br.set(l, t), t);
    }
    return { value: l, source: t, stack: L(t) };
  }
  var ca = [],
    fa = 0,
    ln = null,
    tn = 0,
    yt = [],
    vt = 0,
    xe = null,
    Bt = 1,
    Gt = '';
  function He(l, t) {
    (ca[fa++] = tn), (ca[fa++] = ln), (ln = l), (tn = t);
  }
  function Sr(l, t, e) {
    (yt[vt++] = Bt), (yt[vt++] = Gt), (yt[vt++] = xe), (xe = l);
    var a = Bt;
    l = Gt;
    var u = 32 - ut(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - ut(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Bt = (1 << (32 - ut(t) + u)) | (e << u) | a),
        (Gt = n + l);
    } else (Bt = (1 << n) | (e << u) | a), (Gt = l);
  }
  function Oi(l) {
    l.return !== null && (He(l, 1), Sr(l, 1, 0));
  }
  function Mi(l) {
    for (; l === ln; ) (ln = ca[--fa]), (ca[fa] = null), (tn = ca[--fa]), (ca[fa] = null);
    for (; l === xe; )
      (xe = yt[--vt]), (yt[vt] = null), (Gt = yt[--vt]), (yt[vt] = null), (Bt = yt[--vt]), (yt[vt] = null);
  }
  var Wl = null,
    Xl = null,
    sl = !1,
    Ot = null,
    Ut = !1,
    _i = Error(s(519));
  function Ne(l) {
    var t = Error(s(418, ''));
    throw (Wa(ht(t, l)), _i);
  }
  function pr(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ll] = l), (t[Fl] = a), e)) {
      case 'dialog':
        ul('cancel', t), ul('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        ul('load', t);
        break;
      case 'video':
      case 'audio':
        for (e = 0; e < bu.length; e++) ul(bu[e], t);
        break;
      case 'source':
        ul('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        ul('error', t), ul('load', t);
        break;
      case 'details':
        ul('toggle', t);
        break;
      case 'input':
        ul('invalid', t), Cf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Zu(t);
        break;
      case 'select':
        ul('invalid', t);
        break;
      case 'textarea':
        ul('invalid', t), Bf(t, a.value, a.defaultValue, a.children), Zu(t);
    }
    (e = a.children),
      (typeof e != 'string' && typeof e != 'number' && typeof e != 'bigint') ||
      t.textContent === '' + e ||
      a.suppressHydrationWarning === !0 ||
      Uo(t.textContent, e)
        ? (a.popover != null && (ul('beforetoggle', t), ul('toggle', t)),
          a.onScroll != null && ul('scroll', t),
          a.onScrollEnd != null && ul('scrollend', t),
          a.onClick != null && (t.onclick = qn),
          (t = !0))
        : (t = !1),
      t || Ne(l);
  }
  function Er(l) {
    for (Wl = l.return; Wl; )
      switch (Wl.tag) {
        case 3:
        case 27:
          Ut = !0;
          return;
        case 5:
        case 13:
          Ut = !1;
          return;
        default:
          Wl = Wl.return;
      }
  }
  function Ka(l) {
    if (l !== Wl) return !1;
    if (!sl) return Er(l), (sl = !0), !1;
    var t = !1,
      e;
    if (
      ((e = l.tag !== 3 && l.tag !== 27) &&
        ((e = l.tag === 5) && ((e = l.type), (e = !(e !== 'form' && e !== 'button') || Jc(l.type, l.memoizedProps))),
        (e = !e)),
      e && (t = !0),
      t && Xl && Ne(l),
      Er(l),
      l.tag === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(s(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((e = l.data), e === '/$')) {
              if (t === 0) {
                Xl = _t(l.nextSibling);
                break l;
              }
              t--;
            } else (e !== '$' && e !== '$!' && e !== '$?') || t++;
          l = l.nextSibling;
        }
        Xl = null;
      }
    } else Xl = Wl ? _t(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ja() {
    (Xl = Wl = null), (sl = !1);
  }
  function Wa(l) {
    Ot === null ? (Ot = [l]) : Ot.push(l);
  }
  var ka = Error(s(460)),
    Tr = Error(s(474)),
    Di = { then: function () {} };
  function zr(l) {
    return (l = l.status), l === 'fulfilled' || l === 'rejected';
  }
  function en() {}
  function Ar(l, t, e) {
    switch (((e = l[e]), e === void 0 ? l.push(t) : e !== t && (t.then(en, en), (t = e)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((l = t.reason), l === ka ? Error(s(483)) : l);
      default:
        if (typeof t.status == 'string') t.then(en, en);
        else {
          if (((l = bl), l !== null && 100 < l.shellSuspendCounter)) throw Error(s(482));
          (l = t),
            (l.status = 'pending'),
            l.then(
              function (a) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'fulfilled'), (u.value = a);
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'rejected'), (u.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((l = t.reason), l === ka ? Error(s(483)) : l);
        }
        throw (($a = t), ka);
    }
  }
  var $a = null;
  function Or() {
    if ($a === null) throw Error(s(459));
    var l = $a;
    return ($a = null), l;
  }
  var ra = null,
    Fa = 0;
  function an(l) {
    var t = Fa;
    return (Fa += 1), ra === null && (ra = []), Ar(ra, l, t);
  }
  function Pa(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function un(l, t) {
    throw t.$$typeof === _
      ? Error(s(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(s(31, l === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : l)));
  }
  function Mr(l) {
    var t = l._init;
    return t(l._payload);
  }
  function _r(l) {
    function t(y, d) {
      if (l) {
        var v = y.deletions;
        v === null ? ((y.deletions = [d]), (y.flags |= 16)) : v.push(d);
      }
    }
    function e(y, d) {
      if (!l) return null;
      for (; d !== null; ) t(y, d), (d = d.sibling);
      return null;
    }
    function a(y) {
      for (var d = new Map(); y !== null; ) y.key !== null ? d.set(y.key, y) : d.set(y.index, y), (y = y.sibling);
      return d;
    }
    function u(y, d) {
      return (y = ve(y, d)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, d, v) {
      return (
        (y.index = v),
        l
          ? ((v = y.alternate),
            v !== null ? ((v = v.index), v < d ? ((y.flags |= 33554434), d) : v) : ((y.flags |= 33554434), d))
          : ((y.flags |= 1048576), d)
      );
    }
    function i(y) {
      return l && y.alternate === null && (y.flags |= 33554434), y;
    }
    function c(y, d, v, T) {
      return d === null || d.tag !== 6
        ? ((d = Tc(v, y.mode, T)), (d.return = y), d)
        : ((d = u(d, v)), (d.return = y), d);
    }
    function f(y, d, v, T) {
      var q = v.type;
      return q === D
        ? E(y, d, v.props.children, T, v.key)
        : d !== null &&
            (d.elementType === q || (typeof q == 'object' && q !== null && q.$$typeof === H && Mr(q) === d.type))
          ? ((d = u(d, v.props)), Pa(d, v), (d.return = y), d)
          : ((d = zn(v.type, v.key, v.props, null, y.mode, T)), Pa(d, v), (d.return = y), d);
    }
    function h(y, d, v, T) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = zc(v, y.mode, T)), (d.return = y), d)
        : ((d = u(d, v.children || [])), (d.return = y), d);
    }
    function E(y, d, v, T, q) {
      return d === null || d.tag !== 7
        ? ((d = Ve(v, y.mode, T, q)), (d.return = y), d)
        : ((d = u(d, v)), (d.return = y), d);
    }
    function A(y, d, v) {
      if ((typeof d == 'string' && d !== '') || typeof d == 'number' || typeof d == 'bigint')
        return (d = Tc('' + d, y.mode, v)), (d.return = y), d;
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case x:
            return (v = zn(d.type, d.key, d.props, null, y.mode, v)), Pa(v, d), (v.return = y), v;
          case U:
            return (d = zc(d, y.mode, v)), (d.return = y), d;
          case H:
            var T = d._init;
            return (d = T(d._payload)), A(y, d, v);
        }
        if (Q(d) || Hl(d)) return (d = Ve(d, y.mode, v, null)), (d.return = y), d;
        if (typeof d.then == 'function') return A(y, an(d), v);
        if (d.$$typeof === nl) return A(y, pn(y, d), v);
        un(y, d);
      }
      return null;
    }
    function m(y, d, v, T) {
      var q = d !== null ? d.key : null;
      if ((typeof v == 'string' && v !== '') || typeof v == 'number' || typeof v == 'bigint')
        return q !== null ? null : c(y, d, '' + v, T);
      if (typeof v == 'object' && v !== null) {
        switch (v.$$typeof) {
          case x:
            return v.key === q ? f(y, d, v, T) : null;
          case U:
            return v.key === q ? h(y, d, v, T) : null;
          case H:
            return (q = v._init), (v = q(v._payload)), m(y, d, v, T);
        }
        if (Q(v) || Hl(v)) return q !== null ? null : E(y, d, v, T, null);
        if (typeof v.then == 'function') return m(y, d, an(v), T);
        if (v.$$typeof === nl) return m(y, d, pn(y, v), T);
        un(y, v);
      }
      return null;
    }
    function S(y, d, v, T, q) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return (y = y.get(v) || null), c(d, y, '' + T, q);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case x:
            return (y = y.get(T.key === null ? v : T.key) || null), f(d, y, T, q);
          case U:
            return (y = y.get(T.key === null ? v : T.key) || null), h(d, y, T, q);
          case H:
            var tl = T._init;
            return (T = tl(T._payload)), S(y, d, v, T, q);
        }
        if (Q(T) || Hl(T)) return (y = y.get(v) || null), E(d, y, T, q, null);
        if (typeof T.then == 'function') return S(y, d, v, an(T), q);
        if (T.$$typeof === nl) return S(y, d, v, pn(d, T), q);
        un(d, T);
      }
      return null;
    }
    function C(y, d, v, T) {
      for (var q = null, tl = null, Y = d, Z = (d = 0), Gl = null; Y !== null && Z < v.length; Z++) {
        Y.index > Z ? ((Gl = Y), (Y = null)) : (Gl = Y.sibling);
        var ol = m(y, Y, v[Z], T);
        if (ol === null) {
          Y === null && (Y = Gl);
          break;
        }
        l && Y && ol.alternate === null && t(y, Y),
          (d = n(ol, d, Z)),
          tl === null ? (q = ol) : (tl.sibling = ol),
          (tl = ol),
          (Y = Gl);
      }
      if (Z === v.length) return e(y, Y), sl && He(y, Z), q;
      if (Y === null) {
        for (; Z < v.length; Z++)
          (Y = A(y, v[Z], T)), Y !== null && ((d = n(Y, d, Z)), tl === null ? (q = Y) : (tl.sibling = Y), (tl = Y));
        return sl && He(y, Z), q;
      }
      for (Y = a(Y); Z < v.length; Z++)
        (Gl = S(Y, y, Z, v[Z], T)),
          Gl !== null &&
            (l && Gl.alternate !== null && Y.delete(Gl.key === null ? Z : Gl.key),
            (d = n(Gl, d, Z)),
            tl === null ? (q = Gl) : (tl.sibling = Gl),
            (tl = Gl));
      return (
        l &&
          Y.forEach(function (Te) {
            return t(y, Te);
          }),
        sl && He(y, Z),
        q
      );
    }
    function K(y, d, v, T) {
      if (v == null) throw Error(s(151));
      for (
        var q = null, tl = null, Y = d, Z = (d = 0), Gl = null, ol = v.next();
        Y !== null && !ol.done;
        Z++, ol = v.next()
      ) {
        Y.index > Z ? ((Gl = Y), (Y = null)) : (Gl = Y.sibling);
        var Te = m(y, Y, ol.value, T);
        if (Te === null) {
          Y === null && (Y = Gl);
          break;
        }
        l && Y && Te.alternate === null && t(y, Y),
          (d = n(Te, d, Z)),
          tl === null ? (q = Te) : (tl.sibling = Te),
          (tl = Te),
          (Y = Gl);
      }
      if (ol.done) return e(y, Y), sl && He(y, Z), q;
      if (Y === null) {
        for (; !ol.done; Z++, ol = v.next())
          (ol = A(y, ol.value, T)),
            ol !== null && ((d = n(ol, d, Z)), tl === null ? (q = ol) : (tl.sibling = ol), (tl = ol));
        return sl && He(y, Z), q;
      }
      for (Y = a(Y); !ol.done; Z++, ol = v.next())
        (ol = S(Y, y, Z, ol.value, T)),
          ol !== null &&
            (l && ol.alternate !== null && Y.delete(ol.key === null ? Z : ol.key),
            (d = n(ol, d, Z)),
            tl === null ? (q = ol) : (tl.sibling = ol),
            (tl = ol));
      return (
        l &&
          Y.forEach(function (W0) {
            return t(y, W0);
          }),
        sl && He(y, Z),
        q
      );
    }
    function Ml(y, d, v, T) {
      if (
        (typeof v == 'object' && v !== null && v.type === D && v.key === null && (v = v.props.children),
        typeof v == 'object' && v !== null)
      ) {
        switch (v.$$typeof) {
          case x:
            l: {
              for (var q = v.key; d !== null; ) {
                if (d.key === q) {
                  if (((q = v.type), q === D)) {
                    if (d.tag === 7) {
                      e(y, d.sibling), (T = u(d, v.props.children)), (T.return = y), (y = T);
                      break l;
                    }
                  } else if (
                    d.elementType === q ||
                    (typeof q == 'object' && q !== null && q.$$typeof === H && Mr(q) === d.type)
                  ) {
                    e(y, d.sibling), (T = u(d, v.props)), Pa(T, v), (T.return = y), (y = T);
                    break l;
                  }
                  e(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              v.type === D
                ? ((T = Ve(v.props.children, y.mode, T, v.key)), (T.return = y), (y = T))
                : ((T = zn(v.type, v.key, v.props, null, y.mode, T)), Pa(T, v), (T.return = y), (y = T));
            }
            return i(y);
          case U:
            l: {
              for (q = v.key; d !== null; ) {
                if (d.key === q)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    e(y, d.sibling), (T = u(d, v.children || [])), (T.return = y), (y = T);
                    break l;
                  } else {
                    e(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              (T = zc(v, y.mode, T)), (T.return = y), (y = T);
            }
            return i(y);
          case H:
            return (q = v._init), (v = q(v._payload)), Ml(y, d, v, T);
        }
        if (Q(v)) return C(y, d, v, T);
        if (Hl(v)) {
          if (((q = Hl(v)), typeof q != 'function')) throw Error(s(150));
          return (v = q.call(v)), K(y, d, v, T);
        }
        if (typeof v.then == 'function') return Ml(y, d, an(v), T);
        if (v.$$typeof === nl) return Ml(y, d, pn(y, v), T);
        un(y, v);
      }
      return (typeof v == 'string' && v !== '') || typeof v == 'number' || typeof v == 'bigint'
        ? ((v = '' + v),
          d !== null && d.tag === 6
            ? (e(y, d.sibling), (T = u(d, v)), (T.return = y), (y = T))
            : (e(y, d), (T = Tc(v, y.mode, T)), (T.return = y), (y = T)),
          i(y))
        : e(y, d);
    }
    return function (y, d, v, T) {
      try {
        Fa = 0;
        var q = Ml(y, d, v, T);
        return (ra = null), q;
      } catch (Y) {
        if (Y === ka) throw Y;
        var tl = St(29, Y, null, y.mode);
        return (tl.lanes = T), (tl.return = y), tl;
      } finally {
      }
    };
  }
  var qe = _r(!0),
    Dr = _r(!1),
    sa = dl(null),
    nn = dl(0);
  function Rr(l, t) {
    (l = kt), El(nn, l), El(sa, t), (kt = l | t.baseLanes);
  }
  function Ri() {
    El(nn, kt), El(sa, sa.current);
  }
  function Ui() {
    (kt = nn.current), Dl(sa), Dl(nn);
  }
  var mt = dl(null),
    xt = null;
  function ue(l) {
    var t = l.alternate;
    El(Nl, Nl.current & 1),
      El(mt, l),
      xt === null && (t === null || sa.current !== null || t.memoizedState !== null) && (xt = l);
  }
  function Ur(l) {
    if (l.tag === 22) {
      if ((El(Nl, Nl.current), El(mt, l), xt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (xt = l);
      }
    } else ne();
  }
  function ne() {
    El(Nl, Nl.current), El(mt, mt.current);
  }
  function jt(l) {
    Dl(mt), xt === l && (xt = null), Dl(Nl);
  }
  var Nl = dl(0);
  function cn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || e.data === '$?' || e.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ch =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    Yh = r.unstable_scheduleCallback,
    Bh = r.unstable_NormalPriority,
    ql = { $$typeof: nl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function xi() {
    return { controller: new Ch(), data: new Map(), refCount: 0 };
  }
  function Ia(l) {
    l.refCount--,
      l.refCount === 0 &&
        Yh(Bh, function () {
          l.controller.abort();
        });
  }
  var lu = null,
    Hi = 0,
    oa = 0,
    da = null;
  function Gh(l, t) {
    if (lu === null) {
      var e = (lu = []);
      (Hi = 0),
        (oa = Gc()),
        (da = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Hi++, t.then(xr, xr), t;
  }
  function xr() {
    if (--Hi === 0 && lu !== null) {
      da !== null && (da.status = 'fulfilled');
      var l = lu;
      (lu = null), (oa = 0), (da = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function jh(l, t) {
    var e = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          (a.status = 'fulfilled'), (a.value = t);
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = 'rejected', a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
        },
      ),
      a
    );
  }
  var Hr = j.S;
  j.S = function (l, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && Gh(l, t), Hr !== null && Hr(l, t);
  };
  var Ce = dl(null);
  function Ni() {
    var l = Ce.current;
    return l !== null ? l : bl.pooledCache;
  }
  function fn(l, t) {
    t === null ? El(Ce, Ce.current) : El(Ce, t.pool);
  }
  function Nr() {
    var l = Ni();
    return l === null ? null : { parent: ql._currentValue, pool: l };
  }
  var ie = 0,
    ll = null,
    vl = null,
    Rl = null,
    rn = !1,
    ha = !1,
    Ye = !1,
    sn = 0,
    tu = 0,
    ya = null,
    Xh = 0;
  function _l() {
    throw Error(s(321));
  }
  function qi(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++) if (!nt(l[e], t[e])) return !1;
    return !0;
  }
  function Ci(l, t, e, a, u, n) {
    return (
      (ie = n),
      (ll = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (j.H = l === null || l.memoizedState === null ? Be : ce),
      (Ye = !1),
      (n = e(a, u)),
      (Ye = !1),
      ha && (n = Cr(t, e, a, u)),
      qr(l),
      n
    );
  }
  function qr(l) {
    j.H = Ht;
    var t = vl !== null && vl.next !== null;
    if (((ie = 0), (Rl = vl = ll = null), (rn = !1), (tu = 0), (ya = null), t)) throw Error(s(300));
    l === null || Yl || ((l = l.dependencies), l !== null && Sn(l) && (Yl = !0));
  }
  function Cr(l, t, e, a) {
    ll = l;
    var u = 0;
    do {
      if ((ha && (ya = null), (tu = 0), (ha = !1), 25 <= u)) throw Error(s(301));
      if (((u += 1), (Rl = vl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null), (n.events = null), (n.stores = null), n.memoCache != null && (n.memoCache.index = 0);
      }
      (j.H = Ge), (n = t(e, a));
    } while (ha);
    return n;
  }
  function Qh() {
    var l = j.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == 'function' ? eu(t) : t),
      (l = l.useState()[0]),
      (vl !== null ? vl.memoizedState : null) !== l && (ll.flags |= 1024),
      t
    );
  }
  function Yi() {
    var l = sn !== 0;
    return (sn = 0), l;
  }
  function Bi(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function Gi(l) {
    if (rn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      rn = !1;
    }
    (ie = 0), (Rl = vl = ll = null), (ha = !1), (tu = sn = 0), (ya = null);
  }
  function Il() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Rl === null ? (ll.memoizedState = Rl = l) : (Rl = Rl.next = l), Rl;
  }
  function Ul() {
    if (vl === null) {
      var l = ll.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = vl.next;
    var t = Rl === null ? ll.memoizedState : Rl.next;
    if (t !== null) (Rl = t), (vl = l);
    else {
      if (l === null) throw ll.alternate === null ? Error(s(467)) : Error(s(310));
      (vl = l),
        (l = {
          memoizedState: vl.memoizedState,
          baseState: vl.baseState,
          baseQueue: vl.baseQueue,
          queue: vl.queue,
          next: null,
        }),
        Rl === null ? (ll.memoizedState = Rl = l) : (Rl = Rl.next = l);
    }
    return Rl;
  }
  var on;
  on = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function eu(l) {
    var t = tu;
    return (
      (tu += 1),
      ya === null && (ya = []),
      (l = Ar(ya, l, t)),
      (t = ll),
      (Rl === null ? t.memoizedState : Rl.next) === null &&
        ((t = t.alternate), (j.H = t === null || t.memoizedState === null ? Be : ce)),
      l
    );
  }
  function dn(l) {
    if (l !== null && typeof l == 'object') {
      if (typeof l.then == 'function') return eu(l);
      if (l.$$typeof === nl) return wl(l);
    }
    throw Error(s(438, String(l)));
  }
  function ji(l) {
    var t = null,
      e = ll.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = ll.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = on()), (ll.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = yl;
    return t.index++, e;
  }
  function Xt(l, t) {
    return typeof t == 'function' ? t(l) : t;
  }
  function hn(l) {
    var t = Ul();
    return Xi(t, vl, l);
  }
  function Xi(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (t.baseQueue = u = n), (a.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        h = t,
        E = !1;
      do {
        var A = h.lane & -536870913;
        if (A !== h.lane ? (fl & A) === A : (ie & A) === A) {
          var m = h.revertLane;
          if (m === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              A === oa && (E = !0);
          else if ((ie & m) === m) {
            (h = h.next), m === oa && (E = !0);
            continue;
          } else
            (A = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              f === null ? ((c = f = A), (i = n)) : (f = f.next = A),
              (ll.lanes |= m),
              (me |= m);
          (A = h.action), Ye && e(n, A), (n = h.hasEagerState ? h.eagerState : e(n, A));
        } else
          (m = {
            lane: A,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            f === null ? ((c = f = m), (i = n)) : (f = f.next = m),
            (ll.lanes |= A),
            (me |= A);
        h = h.next;
      } while (h !== null && h !== t);
      if ((f === null ? (i = n) : (f.next = c), !nt(n, l.memoizedState) && ((Yl = !0), E && ((e = da), e !== null))))
        throw e;
      (l.memoizedState = n), (l.baseState = i), (l.baseQueue = f), (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Qi(l) {
    var t = Ul(),
      e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do (n = l(n, i.action)), (i = i.next);
      while (i !== u);
      nt(n, t.memoizedState) || (Yl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function Yr(l, t, e) {
    var a = ll,
      u = Ul(),
      n = sl;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = t();
    var i = !nt((vl || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (Yl = !0)),
      (u = u.queue),
      Li(jr.bind(null, a, u, l), [l]),
      u.getSnapshot !== t || i || (Rl !== null && Rl.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), va(9, Gr.bind(null, a, u, e, t), { destroy: void 0 }, null), bl === null))
        throw Error(s(349));
      n || ie & 60 || Br(a, t, e);
    }
    return e;
  }
  function Br(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = ll.updateQueue),
      t === null
        ? ((t = on()), (ll.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function Gr(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), Xr(t) && Qr(l);
  }
  function jr(l, t, e) {
    return e(function () {
      Xr(t) && Qr(l);
    });
  }
  function Xr(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !nt(l, e);
    } catch {
      return !0;
    }
  }
  function Qr(l) {
    var t = ae(l, 2);
    t !== null && kl(t, l, 2);
  }
  function Zi(l) {
    var t = Il();
    if (typeof l == 'function') {
      var e = l;
      if (((l = e()), Ye)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: l }),
      t
    );
  }
  function Zr(l, t, e, a) {
    return (l.baseState = e), Xi(l, vl, typeof a == 'function' ? a : Xt);
  }
  function Zh(l, t, e, a, u) {
    if (mn(l)) throw Error(s(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      j.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null ? ((n.next = t.pending = n), Vr(t, n)) : ((n.next = e.next), (t.pending = e.next = n));
    }
  }
  function Vr(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = j.T,
        i = {};
      j.T = i;
      try {
        var c = e(u, a),
          f = j.S;
        f !== null && f(i, c), Lr(l, t, c);
      } catch (h) {
        Vi(l, t, h);
      } finally {
        j.T = n;
      }
    } else
      try {
        (n = e(u, a)), Lr(l, t, n);
      } catch (h) {
        Vi(l, t, h);
      }
  }
  function Lr(l, t, e) {
    e !== null && typeof e == 'object' && typeof e.then == 'function'
      ? e.then(
          function (a) {
            wr(l, t, a);
          },
          function (a) {
            return Vi(l, t, a);
          },
        )
      : wr(l, t, e);
  }
  function wr(l, t, e) {
    (t.status = 'fulfilled'),
      (t.value = e),
      Kr(t),
      (l.state = e),
      (t = l.pending),
      t !== null && ((e = t.next), e === t ? (l.pending = null) : ((e = e.next), (t.next = e), Vr(l, e)));
  }
  function Vi(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = 'rejected'), (t.reason = e), Kr(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Kr(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Jr(l, t) {
    return t;
  }
  function Wr(l, t) {
    if (sl) {
      var e = bl.formState;
      if (e !== null) {
        l: {
          var a = ll;
          if (sl) {
            if (Xl) {
              t: {
                for (var u = Xl, n = Ut; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = _t(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (n = u.data), (u = n === 'F!' || n === 'F' ? u : null);
              }
              if (u) {
                (Xl = _t(u.nextSibling)), (a = u.data === 'F!');
                break l;
              }
            }
            Ne(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Il()),
      (e.memoizedState = e.baseState = t),
      (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Jr, lastRenderedState: t }),
      (e.queue = a),
      (e = ds.bind(null, ll, a)),
      (a.dispatch = e),
      (a = Zi(!1)),
      (n = ki.bind(null, ll, !1, a.queue)),
      (a = Il()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = Zh.bind(null, ll, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function kr(l) {
    var t = Ul();
    return $r(t, vl, l);
  }
  function $r(l, t, e) {
    (t = Xi(l, t, Jr)[0]),
      (l = hn(Xt)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? eu(t) : t);
    var a = Ul(),
      u = a.queue,
      n = u.dispatch;
    return (
      e !== a.memoizedState && ((ll.flags |= 2048), va(9, Vh.bind(null, u, e), { destroy: void 0 }, null)), [t, n, l]
    );
  }
  function Vh(l, t) {
    l.action = t;
  }
  function Fr(l) {
    var t = Ul(),
      e = vl;
    if (e !== null) return $r(t, e, l);
    Ul(), (t = t.memoizedState), (e = Ul());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function va(l, t, e, a) {
    return (
      (l = { tag: l, create: t, inst: e, deps: a, next: null }),
      (t = ll.updateQueue),
      t === null && ((t = on()), (ll.updateQueue = t)),
      (e = t.lastEffect),
      e === null ? (t.lastEffect = l.next = l) : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Pr() {
    return Ul().memoizedState;
  }
  function yn(l, t, e, a) {
    var u = Il();
    (ll.flags |= l), (u.memoizedState = va(1 | t, e, { destroy: void 0 }, a === void 0 ? null : a));
  }
  function vn(l, t, e, a) {
    var u = Ul();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    vl !== null && a !== null && qi(a, vl.memoizedState.deps)
      ? (u.memoizedState = va(t, e, n, a))
      : ((ll.flags |= l), (u.memoizedState = va(1 | t, e, n, a)));
  }
  function Ir(l, t) {
    yn(8390656, 8, l, t);
  }
  function Li(l, t) {
    vn(2048, 8, l, t);
  }
  function ls(l, t) {
    return vn(4, 2, l, t);
  }
  function ts(l, t) {
    return vn(4, 4, l, t);
  }
  function es(l, t) {
    if (typeof t == 'function') {
      l = l();
      var e = t(l);
      return function () {
        typeof e == 'function' ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function as(l, t, e) {
    (e = e != null ? e.concat([l]) : null), vn(4, 4, es.bind(null, t, l), e);
  }
  function wi() {}
  function us(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && qi(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function ns(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && qi(t, a[1])) return a[0];
    if (((a = l()), Ye)) {
      le(!0);
      try {
        l();
      } finally {
        le(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function Ki(l, t, e) {
    return e === void 0 || ie & 1073741824
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = co()), (ll.lanes |= l), (me |= l), e);
  }
  function is(l, t, e, a) {
    return nt(e, t)
      ? e
      : sa.current !== null
        ? ((l = Ki(l, e, a)), nt(l, t) || (Yl = !0), l)
        : ie & 42
          ? ((l = co()), (ll.lanes |= l), (me |= l), t)
          : ((Yl = !0), (l.memoizedState = e));
  }
  function cs(l, t, e, a, u) {
    var n = N.p;
    N.p = n !== 0 && 8 > n ? n : 8;
    var i = j.T,
      c = {};
    (j.T = c), ki(l, !1, t, e);
    try {
      var f = u(),
        h = j.S;
      if ((h !== null && h(c, f), f !== null && typeof f == 'object' && typeof f.then == 'function')) {
        var E = jh(f, a);
        au(l, t, E, rt(l));
      } else au(l, t, a, rt(l));
    } catch (A) {
      au(l, t, { then: function () {}, status: 'rejected', reason: A }, rt());
    } finally {
      (N.p = n), (j.T = i);
    }
  }
  function Lh() {}
  function Ji(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var u = fs(l).queue;
    cs(
      l,
      u,
      t,
      cl,
      e === null
        ? Lh
        : function () {
            return rs(l), e(a);
          },
    );
  }
  function fs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: cl,
      baseState: cl,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: cl },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: e },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function rs(l) {
    var t = fs(l).next.queue;
    au(l, t, {}, rt());
  }
  function Wi() {
    return wl(zu);
  }
  function ss() {
    return Ul().memoizedState;
  }
  function os() {
    return Ul().memoizedState;
  }
  function wh(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = rt();
          l = se(e);
          var a = oe(t, l, e);
          a !== null && (kl(a, t, e), iu(a, t, e)), (t = { cache: xi() }), (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Kh(l, t, e) {
    var a = rt();
    (e = { lane: a, revertLane: 0, action: e, hasEagerState: !1, eagerState: null, next: null }),
      mn(l) ? hs(t, e) : ((e = Ai(l, t, e, a)), e !== null && (kl(e, l, a), ys(e, t, a)));
  }
  function ds(l, t, e) {
    var a = rt();
    au(l, t, e, a);
  }
  function au(l, t, e, a) {
    var u = { lane: a, revertLane: 0, action: e, hasEagerState: !1, eagerState: null, next: null };
    if (mn(l)) hs(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && ((n = t.lastRenderedReducer), n !== null))
        try {
          var i = t.lastRenderedState,
            c = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = c), nt(c, i))) return Pu(l, t, u, 0), bl === null && Fu(), !1;
        } catch {
        } finally {
        }
      if (((e = Ai(l, t, u, a)), e !== null)) return kl(e, l, a), ys(e, t, a), !0;
    }
    return !1;
  }
  function ki(l, t, e, a) {
    if (((a = { lane: 2, revertLane: Gc(), action: a, hasEagerState: !1, eagerState: null, next: null }), mn(l))) {
      if (t) throw Error(s(479));
    } else (t = Ai(l, e, a, 2)), t !== null && kl(t, l, 2);
  }
  function mn(l) {
    var t = l.alternate;
    return l === ll || (t !== null && t === ll);
  }
  function hs(l, t) {
    ha = rn = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)), (l.pending = t);
  }
  function ys(l, t, e) {
    if (e & 4194176) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Of(l, e);
    }
  }
  var Ht = {
    readContext: wl,
    use: dn,
    useCallback: _l,
    useContext: _l,
    useEffect: _l,
    useImperativeHandle: _l,
    useLayoutEffect: _l,
    useInsertionEffect: _l,
    useMemo: _l,
    useReducer: _l,
    useRef: _l,
    useState: _l,
    useDebugValue: _l,
    useDeferredValue: _l,
    useTransition: _l,
    useSyncExternalStore: _l,
    useId: _l,
  };
  (Ht.useCacheRefresh = _l),
    (Ht.useMemoCache = _l),
    (Ht.useHostTransitionStatus = _l),
    (Ht.useFormState = _l),
    (Ht.useActionState = _l),
    (Ht.useOptimistic = _l);
  var Be = {
    readContext: wl,
    use: dn,
    useCallback: function (l, t) {
      return (Il().memoizedState = [l, t === void 0 ? null : t]), l;
    },
    useContext: wl,
    useEffect: Ir,
    useImperativeHandle: function (l, t, e) {
      (e = e != null ? e.concat([l]) : null), yn(4194308, 4, es.bind(null, t, l), e);
    },
    useLayoutEffect: function (l, t) {
      return yn(4194308, 4, l, t);
    },
    useInsertionEffect: function (l, t) {
      yn(4, 2, l, t);
    },
    useMemo: function (l, t) {
      var e = Il();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ye) {
        le(!0);
        try {
          l();
        } finally {
          le(!1);
        }
      }
      return (e.memoizedState = [a, t]), a;
    },
    useReducer: function (l, t, e) {
      var a = Il();
      if (e !== void 0) {
        var u = e(t);
        if (Ye) {
          le(!0);
          try {
            e(t);
          } finally {
            le(!1);
          }
        }
      } else u = t;
      return (
        (a.memoizedState = a.baseState = u),
        (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }),
        (a.queue = l),
        (l = l.dispatch = Kh.bind(null, ll, l)),
        [a.memoizedState, l]
      );
    },
    useRef: function (l) {
      var t = Il();
      return (l = { current: l }), (t.memoizedState = l);
    },
    useState: function (l) {
      l = Zi(l);
      var t = l.queue,
        e = ds.bind(null, ll, t);
      return (t.dispatch = e), [l.memoizedState, e];
    },
    useDebugValue: wi,
    useDeferredValue: function (l, t) {
      var e = Il();
      return Ki(e, l, t);
    },
    useTransition: function () {
      var l = Zi(!1);
      return (l = cs.bind(null, ll, l.queue, !0, !1)), (Il().memoizedState = l), [!1, l];
    },
    useSyncExternalStore: function (l, t, e) {
      var a = ll,
        u = Il();
      if (sl) {
        if (e === void 0) throw Error(s(407));
        e = e();
      } else {
        if (((e = t()), bl === null)) throw Error(s(349));
        fl & 60 || Br(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return (
        (u.queue = n),
        Ir(jr.bind(null, a, n, l), [l]),
        (a.flags |= 2048),
        va(9, Gr.bind(null, a, n, e, t), { destroy: void 0 }, null),
        e
      );
    },
    useId: function () {
      var l = Il(),
        t = bl.identifierPrefix;
      if (sl) {
        var e = Gt,
          a = Bt;
        (e = (a & ~(1 << (32 - ut(a) - 1))).toString(32) + e),
          (t = ':' + t + 'R' + e),
          (e = sn++),
          0 < e && (t += 'H' + e.toString(32)),
          (t += ':');
      } else (e = Xh++), (t = ':' + t + 'r' + e.toString(32) + ':');
      return (l.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Il().memoizedState = wh.bind(null, ll));
    },
  };
  (Be.useMemoCache = ji),
    (Be.useHostTransitionStatus = Wi),
    (Be.useFormState = Wr),
    (Be.useActionState = Wr),
    (Be.useOptimistic = function (l) {
      var t = Il();
      t.memoizedState = t.baseState = l;
      var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = e), (t = ki.bind(null, ll, !0, e)), (e.dispatch = t), [l, t];
    });
  var ce = {
    readContext: wl,
    use: dn,
    useCallback: us,
    useContext: wl,
    useEffect: Li,
    useImperativeHandle: as,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: ns,
    useReducer: hn,
    useRef: Pr,
    useState: function () {
      return hn(Xt);
    },
    useDebugValue: wi,
    useDeferredValue: function (l, t) {
      var e = Ul();
      return is(e, vl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = hn(Xt)[0],
        t = Ul().memoizedState;
      return [typeof l == 'boolean' ? l : eu(l), t];
    },
    useSyncExternalStore: Yr,
    useId: ss,
  };
  (ce.useCacheRefresh = os),
    (ce.useMemoCache = ji),
    (ce.useHostTransitionStatus = Wi),
    (ce.useFormState = kr),
    (ce.useActionState = kr),
    (ce.useOptimistic = function (l, t) {
      var e = Ul();
      return Zr(e, vl, l, t);
    });
  var Ge = {
    readContext: wl,
    use: dn,
    useCallback: us,
    useContext: wl,
    useEffect: Li,
    useImperativeHandle: as,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: ns,
    useReducer: Qi,
    useRef: Pr,
    useState: function () {
      return Qi(Xt);
    },
    useDebugValue: wi,
    useDeferredValue: function (l, t) {
      var e = Ul();
      return vl === null ? Ki(e, l, t) : is(e, vl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Qi(Xt)[0],
        t = Ul().memoizedState;
      return [typeof l == 'boolean' ? l : eu(l), t];
    },
    useSyncExternalStore: Yr,
    useId: ss,
  };
  (Ge.useCacheRefresh = os),
    (Ge.useMemoCache = ji),
    (Ge.useHostTransitionStatus = Wi),
    (Ge.useFormState = Fr),
    (Ge.useActionState = Fr),
    (Ge.useOptimistic = function (l, t) {
      var e = Ul();
      return vl !== null ? Zr(e, vl, l, t) : ((e.baseState = l), [l, e.queue.dispatch]);
    });
  function $i(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : al({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Fi = {
    isMounted: function (l) {
      return (l = l._reactInternals) ? X(l) === l : !1;
    },
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        u = se(a);
      (u.payload = t), e != null && (u.callback = e), (t = oe(l, u, a)), t !== null && (kl(t, l, a), iu(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        u = se(a);
      (u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = oe(l, u, a)),
        t !== null && (kl(t, l, a), iu(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = rt(),
        a = se(e);
      (a.tag = 2), t != null && (a.callback = t), (t = oe(l, a, e)), t !== null && (kl(t, l, e), iu(t, l, e));
    },
  };
  function vs(l, t, e, a, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == 'function'
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !La(e, a) || !La(u, n)
          : !0
    );
  }
  function ms(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && Fi.enqueueReplaceState(t, t.state, null);
  }
  function je(l, t) {
    var e = t;
    if ('ref' in t) {
      e = {};
      for (var a in t) a !== 'ref' && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = al({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  var gn =
    typeof reportError == 'function'
      ? reportError
      : function (l) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == 'object' && l !== null && typeof l.message == 'string' ? String(l.message) : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', l);
            return;
          }
          console.error(l);
        };
  function gs(l) {
    gn(l);
  }
  function bs(l) {
    console.error(l);
  }
  function Ss(l) {
    gn(l);
  }
  function bn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ps(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Pi(l, t, e) {
    return (
      (e = se(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        bn(l, t);
      }),
      e
    );
  }
  function Es(l) {
    return (l = se(l)), (l.tag = 3), l;
  }
  function Ts(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var n = a.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          ps(t, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (l.callback = function () {
        ps(t, e, a), typeof u != 'function' && (ge === null ? (ge = new Set([this])) : ge.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, { componentStack: c !== null ? c : '' });
      });
  }
  function Jh(l, t, e, a, u) {
    if (((e.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = e.alternate), t !== null && nu(t, e, u, !0), (e = mt.current), e !== null)) {
        switch (e.tag) {
          case 13:
            return (
              xt === null ? Nc() : e.alternate === null && Ol === 0 && (Ol = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Di
                ? (e.flags |= 16384)
                : ((t = e.updateQueue), t === null ? (e.updateQueue = new Set([a])) : t.add(a), Cc(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Di
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue), e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Cc(l, a, u)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return Cc(l, a, u), Nc(), !1;
    }
    if (sl)
      return (
        (t = mt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== _i && ((l = Error(s(422), { cause: a })), Wa(ht(l, e))))
          : (a !== _i && ((t = Error(s(423), { cause: a })), Wa(ht(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = ht(a, e)),
            (u = Pi(l.stateNode, a, u)),
            hc(l, u),
            Ol !== 4 && (Ol = 2)),
        !1
      );
    var n = Error(s(520), { cause: a });
    if (((n = ht(n, e)), yu === null ? (yu = [n]) : yu.push(n), Ol !== 4 && (Ol = 2), t === null)) return !0;
    (a = ht(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (e.flags |= 65536), (l = u & -u), (e.lanes |= l), (l = Pi(e.stateNode, a, l)), hc(e, l), !1;
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (n !== null && typeof n.componentDidCatch == 'function' && (ge === null || !ge.has(n)))))
          )
            return (e.flags |= 65536), (u &= -u), (e.lanes |= u), (u = Es(u)), Ts(u, l, e, a), hc(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var zs = Error(s(461)),
    Yl = !1;
  function Ql(l, t, e, a) {
    t.child = l === null ? Dr(t, null, e, a) : qe(t, l.child, e, a);
  }
  function As(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ('ref' in a) {
      var i = {};
      for (var c in a) c !== 'ref' && (i[c] = a[c]);
    } else i = a;
    return (
      Qe(t),
      (a = Ci(l, t, e, i, n, u)),
      (c = Yi()),
      l !== null && !Yl ? (Bi(l, t, u), Qt(l, t, u)) : (sl && c && Oi(t), (t.flags |= 1), Ql(l, t, a, u), t.child)
    );
  }
  function Os(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == 'function' && !Ec(n) && n.defaultProps === void 0 && e.compare === null
        ? ((t.tag = 15), (t.type = n), Ms(l, t, n, a, u))
        : ((l = zn(e.type, null, a, t, t.mode, u)), (l.ref = t.ref), (l.return = t), (t.child = l));
    }
    if (((n = l.child), !cc(l, u))) {
      var i = n.memoizedProps;
      if (((e = e.compare), (e = e !== null ? e : La), e(i, a) && l.ref === t.ref)) return Qt(l, t, u);
    }
    return (t.flags |= 1), (l = ve(n, a)), (l.ref = t.ref), (l.return = t), (t.child = l);
  }
  function Ms(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (La(n, a) && l.ref === t.ref)
        if (((Yl = !1), (t.pendingProps = a = n), cc(l, u))) l.flags & 131072 && (Yl = !0);
        else return (t.lanes = l.lanes), Qt(l, t, u);
    }
    return Ii(l, t, e, a, u);
  }
  function _s(l, t, e) {
    var a = t.pendingProps,
      u = a.children,
      n = (t.stateNode._pendingVisibility & 2) !== 0,
      i = l !== null ? l.memoizedState : null;
    if ((uu(l, t), a.mode === 'hidden' || n)) {
      if (t.flags & 128) {
        if (((a = i !== null ? i.baseLanes | e : e), l !== null)) {
          for (u = t.child = l.child, n = 0; u !== null; ) (n = n | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = n & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return Ds(l, t, a, e);
      }
      if (e & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && fn(t, i !== null ? i.cachePool : null),
          i !== null ? Rr(t, i) : Ri(),
          Ur(t);
      else return (t.lanes = t.childLanes = 536870912), Ds(l, t, i !== null ? i.baseLanes | e : e, e);
    } else
      i !== null
        ? (fn(t, i.cachePool), Rr(t, i), ne(), (t.memoizedState = null))
        : (l !== null && fn(t, null), Ri(), ne());
    return Ql(l, t, u, e), t.child;
  }
  function Ds(l, t, e, a) {
    var u = Ni();
    return (
      (u = u === null ? null : { parent: ql._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: e, cachePool: u }),
      l !== null && fn(t, null),
      Ri(),
      Ur(t),
      l !== null && nu(l, t, a, !0),
      null
    );
  }
  function uu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof e != 'function' && typeof e != 'object') throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 2097664);
    }
  }
  function Ii(l, t, e, a, u) {
    return (
      Qe(t),
      (e = Ci(l, t, e, a, void 0, u)),
      (a = Yi()),
      l !== null && !Yl ? (Bi(l, t, u), Qt(l, t, u)) : (sl && a && Oi(t), (t.flags |= 1), Ql(l, t, e, u), t.child)
    );
  }
  function Rs(l, t, e, a, u, n) {
    return (
      Qe(t),
      (t.updateQueue = null),
      (e = Cr(t, a, e, u)),
      qr(l),
      (a = Yi()),
      l !== null && !Yl ? (Bi(l, t, n), Qt(l, t, n)) : (sl && a && Oi(t), (t.flags |= 1), Ql(l, t, e, n), t.child)
    );
  }
  function Us(l, t, e, a, u) {
    if ((Qe(t), t.stateNode === null)) {
      var n = ia,
        i = e.contextType;
      typeof i == 'object' && i !== null && (n = wl(i)),
        (n = new e(a, n)),
        (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Fi),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        oc(t),
        (i = e.contextType),
        (n.context = typeof i == 'object' && i !== null ? wl(i) : ia),
        (n.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == 'function' && ($i(t, e, i, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function' ||
          (typeof n.UNSAFE_componentWillMount != 'function' && typeof n.componentWillMount != 'function') ||
          ((i = n.state),
          typeof n.componentWillMount == 'function' && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == 'function' && n.UNSAFE_componentWillMount(),
          i !== n.state && Fi.enqueueReplaceState(n, n.state, null),
          fu(t, a, n, u),
          cu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = je(e, c);
      n.props = f;
      var h = n.context,
        E = e.contextType;
      (i = ia), typeof E == 'object' && E !== null && (i = wl(E));
      var A = e.getDerivedStateFromProps;
      (E = typeof A == 'function' || typeof n.getSnapshotBeforeUpdate == 'function'),
        (c = t.pendingProps !== c),
        E ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((c || h !== i) && ms(t, n, a, i)),
        (re = !1);
      var m = t.memoizedState;
      (n.state = m),
        fu(t, a, n, u),
        cu(),
        (h = t.memoizedState),
        c || m !== h || re
          ? (typeof A == 'function' && ($i(t, e, A, a), (h = t.memoizedState)),
            (f = re || vs(t, e, f, a, m, h, i))
              ? (E ||
                  (typeof n.UNSAFE_componentWillMount != 'function' && typeof n.componentWillMount != 'function') ||
                  (typeof n.componentWillMount == 'function' && n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == 'function' && n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = h)),
            (n.props = a),
            (n.state = h),
            (n.context = i),
            (a = f))
          : (typeof n.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1));
    } else {
      (n = t.stateNode),
        dc(l, t),
        (i = t.memoizedProps),
        (E = je(e, i)),
        (n.props = E),
        (A = t.pendingProps),
        (m = n.context),
        (h = e.contextType),
        (f = ia),
        typeof h == 'object' && h !== null && (f = wl(h)),
        (c = e.getDerivedStateFromProps),
        (h = typeof c == 'function' || typeof n.getSnapshotBeforeUpdate == 'function') ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((i !== A || m !== f) && ms(t, n, a, f)),
        (re = !1),
        (m = t.memoizedState),
        (n.state = m),
        fu(t, a, n, u),
        cu();
      var S = t.memoizedState;
      i !== A || m !== S || re || (l !== null && l.dependencies !== null && Sn(l.dependencies))
        ? (typeof c == 'function' && ($i(t, e, c, a), (S = t.memoizedState)),
          (E = re || vs(t, e, E, a, m, S, f) || (l !== null && l.dependencies !== null && Sn(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != 'function' && typeof n.componentWillUpdate != 'function') ||
                (typeof n.componentWillUpdate == 'function' && n.componentWillUpdate(a, S, f),
                typeof n.UNSAFE_componentWillUpdate == 'function' && n.UNSAFE_componentWillUpdate(a, S, f)),
              typeof n.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof n.componentDidUpdate != 'function' ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != 'function' ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = S)),
          (n.props = a),
          (n.state = S),
          (n.context = f),
          (a = E))
        : (typeof n.componentDidUpdate != 'function' ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != 'function' ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      uu(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e = a && typeof e.getDerivedStateFromError != 'function' ? null : n.render()),
          (t.flags |= 1),
          l !== null && a ? ((t.child = qe(t, l.child, null, u)), (t.child = qe(t, null, e, u))) : Ql(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Qt(l, t, u)),
      l
    );
  }
  function xs(l, t, e, a) {
    return Ja(), (t.flags |= 256), Ql(l, t, e, a), t.child;
  }
  var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function tc(l) {
    return { baseLanes: l, cachePool: Nr() };
  }
  function ec(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= pt), l;
  }
  function Hs(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Nl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (sl) {
        if ((u ? ue(t) : ne(), sl)) {
          var c = Xl,
            f;
          if ((f = c)) {
            l: {
              for (f = c, c = Ut; f.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((f = _t(f.nextSibling)), f === null)) {
                  c = null;
                  break l;
                }
              }
              c = f;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: xe !== null ? { id: Bt, overflow: Gt } : null,
                  retryLane: 536870912,
                }),
                (f = St(18, null, null, 0)),
                (f.stateNode = c),
                (f.return = t),
                (t.child = f),
                (Wl = t),
                (Xl = null),
                (f = !0))
              : (f = !1);
          }
          f || Ne(t);
        }
        if (((c = t.memoizedState), c !== null && ((c = c.dehydrated), c !== null)))
          return c.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        jt(t);
      }
      return (
        (c = a.children),
        (a = a.fallback),
        u
          ? (ne(),
            (u = t.mode),
            (c = uc({ mode: 'hidden', children: c }, u)),
            (a = Ve(a, u, e, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (u = t.child),
            (u.memoizedState = tc(e)),
            (u.childLanes = ec(l, i, e)),
            (t.memoizedState = lc),
            a)
          : (ue(t), ac(t, c))
      );
    }
    if (((f = l.memoizedState), f !== null && ((c = f.dehydrated), c !== null))) {
      if (n)
        t.flags & 256
          ? (ue(t), (t.flags &= -257), (t = nc(l, t, e)))
          : t.memoizedState !== null
            ? (ne(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ne(),
              (u = a.fallback),
              (c = t.mode),
              (a = uc({ mode: 'visible', children: a.children }, c)),
              (u = Ve(u, c, e, null)),
              (u.flags |= 2),
              (a.return = t),
              (u.return = t),
              (a.sibling = u),
              (t.child = a),
              qe(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = tc(e)),
              (a.childLanes = ec(l, i, e)),
              (t.memoizedState = lc),
              (t = u));
      else if ((ue(t), c.data === '$!')) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var h = i.dgst;
        (i = h),
          (a = Error(s(419))),
          (a.stack = ''),
          (a.digest = i),
          Wa({ value: a, source: null, stack: null }),
          (t = nc(l, t, e));
      } else if ((Yl || nu(l, t, e, !1), (i = (e & l.childLanes) !== 0), Yl || i)) {
        if (((i = bl), i !== null)) {
          if (((a = e & -e), a & 42)) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (((a = a & (i.suspendedLanes | e) ? 0 : a), a !== 0 && a !== f.retryLane))
            throw ((f.retryLane = a), ae(l, a), kl(i, l, a), zs);
        }
        c.data === '$?' || Nc(), (t = nc(l, t, e));
      } else
        c.data === '$?'
          ? ((t.flags |= 128), (t.child = l.child), (t = f0.bind(null, l)), (c._reactRetry = t), (t = null))
          : ((l = f.treeContext),
            (Xl = _t(c.nextSibling)),
            (Wl = t),
            (sl = !0),
            (Ot = null),
            (Ut = !1),
            l !== null && ((yt[vt++] = Bt), (yt[vt++] = Gt), (yt[vt++] = xe), (Bt = l.id), (Gt = l.overflow), (xe = t)),
            (t = ac(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ne(),
        (u = a.fallback),
        (c = t.mode),
        (f = l.child),
        (h = f.sibling),
        (a = ve(f, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 31457280),
        h !== null ? (u = ve(h, u)) : ((u = Ve(u, c, e, null)), (u.flags |= 2)),
        (u.return = t),
        (a.return = t),
        (a.sibling = u),
        (t.child = a),
        (a = u),
        (u = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = tc(e))
          : ((f = c.cachePool),
            f !== null ? ((h = ql._currentValue), (f = f.parent !== h ? { parent: h, pool: h } : f)) : (f = Nr()),
            (c = { baseLanes: c.baseLanes | e, cachePool: f })),
        (u.memoizedState = c),
        (u.childLanes = ec(l, i, e)),
        (t.memoizedState = lc),
        a)
      : (ue(t),
        (e = l.child),
        (l = e.sibling),
        (e = ve(e, { mode: 'visible', children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null && ((i = t.deletions), i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function ac(l, t) {
    return (t = uc({ mode: 'visible', children: t }, l.mode)), (t.return = l), (l.child = t);
  }
  function uc(l, t) {
    return uo(l, t, 0, null);
  }
  function nc(l, t, e) {
    return qe(t, l.child, null, e), (l = ac(t, t.pendingProps.children)), (l.flags |= 2), (t.memoizedState = null), l;
  }
  function Ns(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), rc(l.return, t, e);
  }
  function ic(l, t, e, a, u) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u));
  }
  function qs(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Ql(l, t, a.children, e), (a = Nl.current), a & 2)) (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && l.flags & 128)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Ns(l, e, t);
          else if (l.tag === 19) Ns(l, e, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((El(Nl, a), u)) {
      case 'forwards':
        for (e = t.child, u = null; e !== null; )
          (l = e.alternate), l !== null && cn(l) === null && (u = e), (e = e.sibling);
        (e = u),
          e === null ? ((u = t.child), (t.child = null)) : ((u = e.sibling), (e.sibling = null)),
          ic(t, !1, u, e, n);
        break;
      case 'backwards':
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && cn(l) === null)) {
            t.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = e), (e = u), (u = l);
        }
        ic(t, !0, e, null, n);
        break;
      case 'together':
        ic(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, e) {
    if ((l !== null && (t.dependencies = l.dependencies), (me |= t.lanes), !(e & t.childLanes)))
      if (l !== null) {
        if ((nu(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(s(153));
    if (t.child !== null) {
      for (l = t.child, e = ve(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        (l = l.sibling), (e = e.sibling = ve(l, l.pendingProps)), (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function cc(l, t) {
    return l.lanes & t ? !0 : ((l = l.dependencies), !!(l !== null && Sn(l)));
  }
  function Wh(l, t, e) {
    switch (t.tag) {
      case 3:
        qu(t, t.stateNode.containerInfo), fe(t, ql, l.memoizedState.cache), Ja();
        break;
      case 27:
      case 5:
        Fn(t);
        break;
      case 4:
        qu(t, t.stateNode.containerInfo);
        break;
      case 10:
        fe(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ue(t), (t.flags |= 128), null)
            : e & t.child.childLanes
              ? Hs(l, t, e)
              : (ue(t), (l = Qt(l, t, e)), l !== null ? l.sibling : null);
        ue(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (((a = (e & t.childLanes) !== 0), a || (nu(l, t, e, !1), (a = (e & t.childLanes) !== 0)), u)) {
          if (a) return qs(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          El(Nl, Nl.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), _s(l, t, e);
      case 24:
        fe(t, ql, l.memoizedState.cache);
    }
    return Qt(l, t, e);
  }
  function Cs(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Yl = !0;
      else {
        if (!cc(l, e) && !(t.flags & 128)) return (Yl = !1), Wh(l, t, e);
        Yl = !!(l.flags & 131072);
      }
    else (Yl = !1), sl && t.flags & 1048576 && Sr(t, tn, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            u = a._init;
          if (((a = u(a._payload)), (t.type = a), typeof a == 'function'))
            Ec(a)
              ? ((l = je(a, l)), (t.tag = 1), (t = Us(null, t, a, l, e)))
              : ((t.tag = 0), (t = Ii(null, t, a, l, e)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === hl)) {
                (t.tag = 11), (t = As(null, t, a, l, e));
                break l;
              } else if (u === O) {
                (t.tag = 14), (t = Os(null, t, a, l, e));
                break l;
              }
            }
            throw ((t = zt(a) || a), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return Ii(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (u = je(a, t.pendingProps)), Us(l, t, a, u, e);
      case 3:
        l: {
          if ((qu(t, t.stateNode.containerInfo), l === null)) throw Error(s(387));
          var n = t.pendingProps;
          (u = t.memoizedState), (a = u.element), dc(l, t), fu(t, n, null, e);
          var i = t.memoizedState;
          if (((n = i.cache), fe(t, ql, n), n !== u.cache && sc(t, [ql], e, !0), cu(), (n = i.element), u.isDehydrated))
            if (
              ((u = { element: n, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = xs(l, t, n, e);
              break l;
            } else if (n !== a) {
              (a = ht(Error(s(424)), t)), Wa(a), (t = xs(l, t, n, e));
              break l;
            } else
              for (
                Xl = _t(t.stateNode.containerInfo.firstChild),
                  Wl = t,
                  sl = !0,
                  Ot = null,
                  Ut = !0,
                  e = Dr(t, null, n, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
          else {
            if ((Ja(), n === a)) {
              t = Qt(l, t, e);
              break l;
            }
            Ql(l, t, n, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          uu(l, t),
          l === null
            ? (e = jo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : sl ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Cn(It.current).createElement(e)),
                (a[Ll] = t),
                (a[Fl] = l),
                Zl(a, e, l),
                Cl(a),
                (t.stateNode = a))
            : (t.memoizedState = jo(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)),
          null
        );
      case 27:
        return (
          Fn(t),
          l === null &&
            sl &&
            ((a = t.stateNode = Yo(t.type, t.pendingProps, It.current)), (Wl = t), (Ut = !0), (Xl = _t(a.firstChild))),
          (a = t.pendingProps.children),
          l !== null || sl ? Ql(l, t, a, e) : (t.child = qe(t, null, a, e)),
          uu(l, t),
          t.child
        );
      case 5:
        return (
          l === null &&
            sl &&
            ((u = a = Xl) &&
              ((a = A0(a, t.type, t.pendingProps, Ut)),
              a !== null ? ((t.stateNode = a), (Wl = t), (Xl = _t(a.firstChild)), (Ut = !1), (u = !0)) : (u = !1)),
            u || Ne(t)),
          Fn(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Jc(u, n) ? (a = null) : i !== null && Jc(u, i) && (t.flags |= 32),
          t.memoizedState !== null && ((u = Ci(l, t, Qh, null, null, e)), (zu._currentValue = u)),
          uu(l, t),
          Ql(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            sl &&
            ((l = e = Xl) &&
              ((e = O0(e, t.pendingProps, Ut)),
              e !== null ? ((t.stateNode = e), (Wl = t), (Xl = null), (l = !0)) : (l = !1)),
            l || Ne(t)),
          null
        );
      case 13:
        return Hs(l, t, e);
      case 4:
        return (
          qu(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = qe(t, null, a, e)) : Ql(l, t, a, e),
          t.child
        );
      case 11:
        return As(l, t, t.type, t.pendingProps, e);
      case 7:
        return Ql(l, t, t.pendingProps, e), t.child;
      case 8:
        return Ql(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Ql(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (a = t.pendingProps), fe(t, t.type, a.value), Ql(l, t, a.children, e), t.child;
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          Qe(t),
          (u = wl(u)),
          (a = a(u)),
          (t.flags |= 1),
          Ql(l, t, a, e),
          t.child
        );
      case 14:
        return Os(l, t, t.type, t.pendingProps, e);
      case 15:
        return Ms(l, t, t.type, t.pendingProps, e);
      case 19:
        return qs(l, t, e);
      case 22:
        return _s(l, t, e);
      case 24:
        return (
          Qe(t),
          (a = wl(ql)),
          l === null
            ? ((u = Ni()),
              u === null &&
                ((u = bl),
                (n = xi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              oc(t),
              fe(t, ql, u))
            : (l.lanes & e && (dc(l, t), fu(t, null, null, e), cu()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  fe(t, ql, a))
                : ((a = n.cache), fe(t, ql, a), a !== u.cache && sc(t, [ql], e, !0))),
          Ql(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var fc = dl(null),
    Xe = null,
    Zt = null;
  function fe(l, t, e) {
    El(fc, t._currentValue), (t._currentValue = e);
  }
  function Vt(l) {
    (l._currentValue = fc.current), Dl(fc);
  }
  function rc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function sc(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              (n.lanes |= e), (c = n.alternate), c !== null && (c.lanes |= e), rc(n.return, e, l), a || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341));
        (i.lanes |= e), (n = i.alternate), n !== null && (n.lanes |= e), rc(i, e, l), (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function nu(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if (u.flags & 524288) n = !0;
        else if (u.flags & 262144) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          nt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === Nu.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(zu) : (l = [zu]));
      }
      u = u.return;
    }
    l !== null && sc(t, l, e, a), (t.flags |= 262144);
  }
  function Sn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Qe(l) {
    (Xe = l), (Zt = null), (l = l.dependencies), l !== null && (l.firstContext = null);
  }
  function wl(l) {
    return Ys(Xe, l);
  }
  function pn(l, t) {
    return Xe === null && Qe(l), Ys(l, t);
  }
  function Ys(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Zt === null)) {
      if (l === null) throw Error(s(308));
      (Zt = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288);
    } else Zt = Zt.next = t;
    return e;
  }
  var re = !1;
  function oc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function dc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function se(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function oe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), zl & 2)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (a.pending = t), (t = Iu(l)), gr(l, null, e), t
      );
    }
    return Pu(l, a, t, e), Iu(l);
  }
  function iu(l, t, e) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194176) !== 0))) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Of(l, e);
    }
  }
  function hc(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      (e = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate), l === null ? (e.firstBaseUpdate = t) : (l.next = t), (e.lastBaseUpdate = t);
  }
  var yc = !1;
  function cu() {
    if (yc) {
      var l = da;
      if (l !== null) throw l;
    }
  }
  function fu(l, t, e, a) {
    yc = !1;
    var u = l.updateQueue;
    re = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        h = f.next;
      (f.next = null), i === null ? (n = h) : (i.next = h), (i = f);
      var E = l.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (c = E.lastBaseUpdate),
        c !== i && (c === null ? (E.firstBaseUpdate = h) : (c.next = h), (E.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var A = u.baseState;
      (i = 0), (E = h = f = null), (c = n);
      do {
        var m = c.lane & -536870913,
          S = m !== c.lane;
        if (S ? (fl & m) === m : (a & m) === m) {
          m !== 0 && m === oa && (yc = !0),
            E !== null && (E = E.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var C = l,
              K = c;
            m = t;
            var Ml = e;
            switch (K.tag) {
              case 1:
                if (((C = K.payload), typeof C == 'function')) {
                  A = C.call(Ml, A, m);
                  break l;
                }
                A = C;
                break l;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (((C = K.payload), (m = typeof C == 'function' ? C.call(Ml, A, m) : C), m == null)) break l;
                A = al({}, A, m);
                break l;
              case 2:
                re = !0;
            }
          }
          (m = c.callback),
            m !== null &&
              ((l.flags |= 64),
              S && (l.flags |= 8192),
              (S = u.callbacks),
              S === null ? (u.callbacks = [m]) : S.push(m));
        } else
          (S = { lane: m, tag: c.tag, payload: c.payload, callback: c.callback, next: null }),
            E === null ? ((h = E = S), (f = A)) : (E = E.next = S),
            (i |= m);
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          (S = c), (c = S.next), (S.next = null), (u.lastBaseUpdate = S), (u.shared.pending = null);
        }
      } while (!0);
      E === null && (f = A),
        (u.baseState = f),
        (u.firstBaseUpdate = h),
        (u.lastBaseUpdate = E),
        n === null && (u.shared.lanes = 0),
        (me |= i),
        (l.lanes = i),
        (l.memoizedState = A);
    }
  }
  function Bs(l, t) {
    if (typeof l != 'function') throw Error(s(191, l));
    l.call(t);
  }
  function Gs(l, t) {
    var e = l.callbacks;
    if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) Bs(e[l], t);
  }
  function ru(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            (a = n()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      gl(t, t.return, c);
    }
  }
  function de(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              (i.destroy = void 0), (u = t);
              var f = e;
              try {
                c();
              } catch (h) {
                gl(u, f, h);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (h) {
      gl(t, t.return, h);
    }
  }
  function js(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Gs(t, e);
      } catch (a) {
        gl(l, l.return, a);
      }
    }
  }
  function Xs(l, t, e) {
    (e.props = je(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      gl(l, t, a);
    }
  }
  function Ze(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        var a = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = a;
            break;
          default:
            u = a;
        }
        typeof e == 'function' ? (l.refCleanup = e(u)) : (e.current = u);
      }
    } catch (n) {
      gl(l, t, n);
    }
  }
  function it(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (u) {
          gl(l, t, u);
        } finally {
          (l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null);
        }
      else if (typeof e == 'function')
        try {
          e(null);
        } catch (u) {
          gl(l, t, u);
        }
      else e.current = null;
  }
  function Qs(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          e.autoFocus && a.focus();
          break l;
        case 'img':
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      gl(l, l.return, u);
    }
  }
  function Zs(l, t, e) {
    try {
      var a = l.stateNode;
      S0(a, l.type, e, t), (a[Fl] = t);
    } catch (u) {
      gl(l, l.return, u);
    }
  }
  function Vs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function vc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? e.nodeType === 8
            ? e.parentNode.insertBefore(l, t)
            : e.insertBefore(l, t)
          : (e.nodeType === 8 ? ((t = e.parentNode), t.insertBefore(l, e)) : ((t = e), t.appendChild(l)),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = qn));
    else if (a !== 4 && a !== 27 && ((l = l.child), l !== null))
      for (mc(l, t, e), l = l.sibling; l !== null; ) mc(l, t, e), (l = l.sibling);
  }
  function En(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && a !== 27 && ((l = l.child), l !== null))
      for (En(l, t, e), l = l.sibling; l !== null; ) En(l, t, e), (l = l.sibling);
  }
  var Lt = !1,
    Al = !1,
    gc = !1,
    Ls = typeof WeakSet == 'function' ? WeakSet : Set,
    Bl = null,
    ws = !1;
  function kh(l, t) {
    if (((l = l.containerInfo), (wc = Qn), (l = fr(l)), Si(l))) {
      if ('selectionStart' in l) var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              h = 0,
              E = 0,
              A = l,
              m = null;
            t: for (;;) {
              for (
                var S;
                A !== e || (u !== 0 && A.nodeType !== 3) || (c = i + u),
                  A !== n || (a !== 0 && A.nodeType !== 3) || (f = i + a),
                  A.nodeType === 3 && (i += A.nodeValue.length),
                  (S = A.firstChild) !== null;

              )
                (m = A), (A = S);
              for (;;) {
                if (A === l) break t;
                if ((m === e && ++h === u && (c = i), m === n && ++E === a && (f = i), (S = A.nextSibling) !== null))
                  break;
                (A = m), (m = A.parentNode);
              }
              A = S;
            }
            e = c === -1 || f === -1 ? null : { start: c, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Kc = { focusedElem: l, selectionRange: e }, Qn = !1, Bl = t; Bl !== null; )
      if (((t = Bl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)) (l.return = t), (Bl = l);
      else
        for (; Bl !== null; ) {
          switch (((t = Bl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && n !== null) {
                (l = void 0), (e = t), (u = n.memoizedProps), (n = n.memoizedState), (a = e.stateNode);
                try {
                  var C = je(e.type, u, e.elementType === e.type);
                  (l = a.getSnapshotBeforeUpdate(C, n)), (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (K) {
                  gl(e, e.return, K);
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)) $c(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      $c(l);
                      break;
                    default:
                      l.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (l & 1024) throw Error(s(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Bl = l);
            break;
          }
          Bl = t.return;
        }
    return (C = ws), (ws = !1), C;
  }
  function Ks(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, e), a & 4 && ru(5, e);
        break;
      case 1:
        if ((Kt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              gl(e, e.return, c);
            }
          else {
            var u = je(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              gl(e, e.return, c);
            }
          }
        a & 64 && js(e), a & 512 && Ze(e, e.return);
        break;
      case 3:
        if ((Kt(l, e), a & 64 && ((a = e.updateQueue), a !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Gs(a, l);
          } catch (c) {
            gl(e, e.return, c);
          }
        }
        break;
      case 26:
        Kt(l, e), a & 512 && Ze(e, e.return);
        break;
      case 27:
      case 5:
        Kt(l, e), t === null && a & 4 && Qs(e), a & 512 && Ze(e, e.return);
        break;
      case 12:
        Kt(l, e);
        break;
      case 13:
        Kt(l, e), a & 4 && ks(l, e);
        break;
      case 22:
        if (((u = e.memoizedState !== null || Lt), !u)) {
          t = (t !== null && t.memoizedState !== null) || Al;
          var n = Lt,
            i = Al;
          (Lt = u), (Al = t) && !i ? he(l, e, (e.subtreeFlags & 8772) !== 0) : Kt(l, e), (Lt = n), (Al = i);
        }
        a & 512 && (e.memoizedProps.mode === 'manual' ? Ze(e, e.return) : it(e, e.return));
        break;
      default:
        Kt(l, e);
    }
  }
  function Js(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Js(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ai(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var xl = null,
    ct = !1;
  function wt(l, t, e) {
    for (e = e.child; e !== null; ) Ws(l, t, e), (e = e.sibling);
  }
  function Ws(l, t, e) {
    if (at && typeof at.onCommitFiberUnmount == 'function')
      try {
        at.onCommitFiberUnmount(Ha, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Al || it(e, t),
          wt(l, t, e),
          e.memoizedState ? e.memoizedState.count-- : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Al || it(e, t);
        var a = xl,
          u = ct;
        for (xl = e.stateNode, wt(l, t, e), e = e.stateNode, t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        ai(e), (xl = a), (ct = u);
        break;
      case 5:
        Al || it(e, t);
      case 6:
        u = xl;
        var n = ct;
        if (((xl = null), wt(l, t, e), (xl = u), (ct = n), xl !== null))
          if (ct)
            try {
              (l = xl), (a = e.stateNode), l.nodeType === 8 ? l.parentNode.removeChild(a) : l.removeChild(a);
            } catch (i) {
              gl(e, t, i);
            }
          else
            try {
              xl.removeChild(e.stateNode);
            } catch (i) {
              gl(e, t, i);
            }
        break;
      case 18:
        xl !== null &&
          (ct
            ? ((t = xl),
              (e = e.stateNode),
              t.nodeType === 8 ? kc(t.parentNode, e) : t.nodeType === 1 && kc(t, e),
              _u(t))
            : kc(xl, e.stateNode));
        break;
      case 4:
        (a = xl), (u = ct), (xl = e.stateNode.containerInfo), (ct = !0), wt(l, t, e), (xl = a), (ct = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Al || de(2, e, t), Al || de(4, e, t), wt(l, t, e);
        break;
      case 1:
        Al || (it(e, t), (a = e.stateNode), typeof a.componentWillUnmount == 'function' && Xs(e, t, a)), wt(l, t, e);
        break;
      case 21:
        wt(l, t, e);
        break;
      case 22:
        Al || it(e, t), (Al = (a = Al) || e.memoizedState !== null), wt(l, t, e), (Al = a);
        break;
      default:
        wt(l, t, e);
    }
  }
  function ks(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _u(l);
      } catch (e) {
        gl(t, t.return, e);
      }
  }
  function $h(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ls()), t;
      case 22:
        return (l = l.stateNode), (t = l._retryCache), t === null && (t = l._retryCache = new Ls()), t;
      default:
        throw Error(s(435, l.tag));
    }
  }
  function bc(l, t) {
    var e = $h(l);
    t.forEach(function (a) {
      var u = r0.bind(null, l, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function gt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
            case 5:
              (xl = c.stateNode), (ct = !1);
              break l;
            case 3:
              (xl = c.stateNode.containerInfo), (ct = !0);
              break l;
            case 4:
              (xl = c.stateNode.containerInfo), (ct = !0);
              break l;
          }
          c = c.return;
        }
        if (xl === null) throw Error(s(160));
        Ws(n, i, u), (xl = null), (ct = !1), (n = u.alternate), n !== null && (n.return = null), (u.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) $s(t, l), (t = t.sibling);
  }
  var Mt = null;
  function $s(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gt(t, l), bt(l), a & 4 && (de(3, l, l.return), ru(3, l), de(5, l, l.return));
        break;
      case 1:
        gt(t, l),
          bt(l),
          a & 512 && (Al || e === null || it(e, e.return)),
          a & 64 &&
            Lt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks), (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = Mt;
        if ((gt(t, l), bt(l), a & 512 && (Al || e === null || it(e, e.return)), a & 4)) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type), (e = l.memoizedProps), (u = u.ownerDocument || u);
                  t: switch (a) {
                    case 'title':
                      (n = u.getElementsByTagName('title')[0]),
                        (!n ||
                          n[Ca] ||
                          n[Ll] ||
                          n.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          n.hasAttribute('itemprop')) &&
                          ((n = u.createElement(a)), u.head.insertBefore(n, u.querySelector('head > title'))),
                        Zl(n, a, e),
                        (n[Ll] = l),
                        Cl(n),
                        (a = n);
                      break l;
                    case 'link':
                      var i = Zo('link', 'href', u).get(a + (e.href || ''));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute('href') === (e.href == null ? null : e.href) &&
                              n.getAttribute('rel') === (e.rel == null ? null : e.rel) &&
                              n.getAttribute('title') === (e.title == null ? null : e.title) &&
                              n.getAttribute('crossorigin') === (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)), Zl(n, a, e), u.head.appendChild(n);
                      break;
                    case 'meta':
                      if ((i = Zo('meta', 'content', u).get(a + (e.content || '')))) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute('content') === (e.content == null ? null : '' + e.content) &&
                              n.getAttribute('name') === (e.name == null ? null : e.name) &&
                              n.getAttribute('property') === (e.property == null ? null : e.property) &&
                              n.getAttribute('http-equiv') === (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute('charset') === (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)), Zl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (n[Ll] = l), Cl(n), (a = n);
                }
                l.stateNode = a;
              } else Vo(u, l.type, l.stateNode);
            else l.stateNode = Qo(u, a, l.memoizedProps);
          else
            n !== a
              ? (n === null ? e.stateNode !== null && ((e = e.stateNode), e.parentNode.removeChild(e)) : n.count--,
                a === null ? Vo(u, l.type, l.stateNode) : Qo(u, a, l.memoizedProps))
              : a === null && l.stateNode !== null && Zs(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        if (a & 4 && l.alternate === null) {
          (u = l.stateNode), (n = l.memoizedProps);
          try {
            for (var f = u.firstChild; f; ) {
              var h = f.nextSibling,
                E = f.nodeName;
              f[Ca] ||
                E === 'HEAD' ||
                E === 'BODY' ||
                E === 'SCRIPT' ||
                E === 'STYLE' ||
                (E === 'LINK' && f.rel.toLowerCase() === 'stylesheet') ||
                u.removeChild(f),
                (f = h);
            }
            for (var A = l.type, m = u.attributes; m.length; ) u.removeAttributeNode(m[0]);
            Zl(u, A, n), (u[Ll] = l), (u[Fl] = n);
          } catch (C) {
            gl(l, l.return, C);
          }
        }
      case 5:
        if ((gt(t, l), bt(l), a & 512 && (Al || e === null || it(e, e.return)), l.flags & 32)) {
          u = l.stateNode;
          try {
            Ie(u, '');
          } catch (C) {
            gl(l, l.return, C);
          }
        }
        a & 4 && l.stateNode != null && ((u = l.memoizedProps), Zs(l, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (gc = !0);
        break;
      case 6:
        if ((gt(t, l), bt(l), a & 4)) {
          if (l.stateNode === null) throw Error(s(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (C) {
            gl(l, l.return, C);
          }
        }
        break;
      case 3:
        if (
          ((Gn = null),
          (u = Mt),
          (Mt = Yn(t.containerInfo)),
          gt(t, l),
          (Mt = u),
          bt(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            _u(t.containerInfo);
          } catch (C) {
            gl(l, l.return, C);
          }
        gc && ((gc = !1), Fs(l));
        break;
      case 4:
        (a = Mt), (Mt = Yn(l.stateNode.containerInfo)), gt(t, l), bt(l), (Mt = a);
        break;
      case 12:
        gt(t, l), bt(l);
        break;
      case 13:
        gt(t, l),
          bt(l),
          l.child.flags & 8192 && (l.memoizedState !== null) != (e !== null && e.memoizedState !== null) && (_c = Rt()),
          a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), bc(l, a)));
        break;
      case 22:
        if (
          (a & 512 && (Al || e === null || it(e, e.return)),
          (f = l.memoizedState !== null),
          (h = e !== null && e.memoizedState !== null),
          (E = Lt),
          (A = Al),
          (Lt = E || f),
          (Al = A || h),
          gt(t, l),
          (Al = A),
          (Lt = E),
          bt(l),
          (t = l.stateNode),
          (t._current = l),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          a & 8192 &&
            ((t._visibility = f ? t._visibility & -2 : t._visibility | 1),
            f && ((t = Lt || Al), e === null || h || t || ma(l)),
            l.memoizedProps === null || l.memoizedProps.mode !== 'manual'))
        )
          l: for (e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (e === null) {
                h = e = t;
                try {
                  if (((u = h.stateNode), f))
                    (n = u.style),
                      typeof n.setProperty == 'function'
                        ? n.setProperty('display', 'none', 'important')
                        : (n.display = 'none');
                  else {
                    (i = h.stateNode), (c = h.memoizedProps.style);
                    var S = c != null && c.hasOwnProperty('display') ? c.display : null;
                    i.style.display = S == null || typeof S == 'boolean' ? '' : ('' + S).trim();
                  }
                } catch (C) {
                  gl(h, h.return, C);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = f ? '' : h.memoizedProps;
                } catch (C) {
                  gl(h, h.return, C);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === l) && t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue), a !== null && ((e = a.retryQueue), e !== null && ((a.retryQueue = null), bc(l, e))));
        break;
      case 19:
        gt(t, l), bt(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), bc(l, a)));
        break;
      case 21:
        break;
      default:
        gt(t, l), bt(l);
    }
  }
  function bt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var e = l.return; e !== null; ) {
              if (Vs(e)) {
                var a = e;
                break l;
              }
              e = e.return;
            }
            throw Error(s(160));
          }
          switch (a.tag) {
            case 27:
              var u = a.stateNode,
                n = vc(l);
              En(l, n, u);
              break;
            case 5:
              var i = a.stateNode;
              a.flags & 32 && (Ie(i, ''), (a.flags &= -33));
              var c = vc(l);
              En(l, c, i);
              break;
            case 3:
            case 4:
              var f = a.stateNode.containerInfo,
                h = vc(l);
              mc(l, h, f);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (E) {
        gl(l, l.return, E);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Fs(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Fs(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (l = l.sibling);
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Ks(l, t.alternate, t), (t = t.sibling);
  }
  function ma(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          de(4, t, t.return), ma(t);
          break;
        case 1:
          it(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == 'function' && Xs(t, t.return, e), ma(t);
          break;
        case 26:
        case 27:
        case 5:
          it(t, t.return), ma(t);
          break;
        case 22:
          it(t, t.return), t.memoizedState === null && ma(t);
          break;
        default:
          ma(t);
      }
      l = l.sibling;
    }
  }
  function he(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          he(u, n, e), ru(4, n);
          break;
        case 1:
          if ((he(u, n, e), (a = n), (u = a.stateNode), typeof u.componentDidMount == 'function'))
            try {
              u.componentDidMount();
            } catch (h) {
              gl(a, a.return, h);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) Bs(f[u], c);
            } catch (h) {
              gl(a, a.return, h);
            }
          }
          e && i & 64 && js(n), Ze(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          he(u, n, e), e && a === null && i & 4 && Qs(n), Ze(n, n.return);
          break;
        case 12:
          he(u, n, e);
          break;
        case 13:
          he(u, n, e), e && i & 4 && ks(u, n);
          break;
        case 22:
          n.memoizedState === null && he(u, n, e), Ze(n, n.return);
          break;
        default:
          he(u, n, e);
      }
      t = t.sibling;
    }
  }
  function Sc(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Ia(e));
  }
  function pc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ia(l));
  }
  function ye(l, t, e, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Ps(l, t, e, a), (t = t.sibling);
  }
  function Ps(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ye(l, t, e, a), u & 2048 && ru(9, t);
        break;
      case 3:
        ye(l, t, e, a),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ia(l)));
        break;
      case 12:
        if (u & 2048) {
          ye(l, t, e, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == 'function' && c(i, t.alternate === null ? 'mount' : 'update', l.passiveEffectDuration, -0);
          } catch (f) {
            gl(t, t.return, f);
          }
        } else ye(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          t.memoizedState !== null
            ? n._visibility & 4
              ? ye(l, t, e, a)
              : su(l, t)
            : n._visibility & 4
              ? ye(l, t, e, a)
              : ((n._visibility |= 4), ga(l, t, e, a, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Sc(t.alternate, t);
        break;
      case 24:
        ye(l, t, e, a), u & 2048 && pc(t.alternate, t);
        break;
      default:
        ye(l, t, e, a);
    }
  }
  function ga(l, t, e, a, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        i = t,
        c = e,
        f = a,
        h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ga(n, i, c, f, u), ru(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null
            ? E._visibility & 4
              ? ga(n, i, c, f, u)
              : su(n, i)
            : ((E._visibility |= 4), ga(n, i, c, f, u)),
            u && h & 2048 && Sc(i.alternate, i);
          break;
        case 24:
          ga(n, i, c, f, u), u && h & 2048 && pc(i.alternate, i);
          break;
        default:
          ga(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function su(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            su(e, a), u & 2048 && Sc(a.alternate, a);
            break;
          case 24:
            su(e, a), u & 2048 && pc(a.alternate, a);
            break;
          default:
            su(e, a);
        }
        t = t.sibling;
      }
  }
  var ou = 8192;
  function ba(l) {
    if (l.subtreeFlags & ou) for (l = l.child; l !== null; ) Is(l), (l = l.sibling);
  }
  function Is(l) {
    switch (l.tag) {
      case 26:
        ba(l), l.flags & ou && l.memoizedState !== null && G0(Mt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ba(l);
        break;
      case 3:
      case 4:
        var t = Mt;
        (Mt = Yn(l.stateNode.containerInfo)), ba(l), (Mt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null ? ((t = ou), (ou = 16777216), ba(l), (ou = t)) : ba(l));
        break;
      default:
        ba(l);
    }
  }
  function lo(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function du(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Bl = a), eo(a, l);
        }
      lo(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) to(l), (l = l.sibling);
  }
  function to(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        du(l), l.flags & 2048 && de(9, l, l.return);
        break;
      case 3:
        du(l);
        break;
      case 12:
        du(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 4 && (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -5), Tn(l))
          : du(l);
        break;
      default:
        du(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Bl = a), eo(a, l);
        }
      lo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          de(8, t, t.return), Tn(t);
          break;
        case 22:
          (e = t.stateNode), e._visibility & 4 && ((e._visibility &= -5), Tn(t));
          break;
        default:
          Tn(t);
      }
      l = l.sibling;
    }
  }
  function eo(l, t) {
    for (; Bl !== null; ) {
      var e = Bl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          de(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Bl = a);
      else
        l: for (e = l; Bl !== null; ) {
          a = Bl;
          var u = a.sibling,
            n = a.return;
          if ((Js(a), a === e)) {
            Bl = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Bl = u);
            break l;
          }
          Bl = n;
        }
    }
  }
  function Fh(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function St(l, t, e, a) {
    return new Fh(l, t, e, a);
  }
  function Ec(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function ve(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = St(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t), (e.type = l.type), (e.flags = 0), (e.subtreeFlags = 0), (e.deletions = null)),
      (e.flags = l.flags & 31457280),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function ao(l, t) {
    l.flags &= 31457282;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function zn(l, t, e, a, u, n) {
    var i = 0;
    if (((a = l), typeof l == 'function')) Ec(l) && (i = 1);
    else if (typeof l == 'string')
      i = Y0(l, e, Dt.current) ? 26 : l === 'html' || l === 'head' || l === 'body' ? 27 : 5;
    else
      l: switch (l) {
        case D:
          return Ve(e.children, u, n, t);
        case p:
          (i = 8), (u |= 24);
          break;
        case B:
          return (l = St(12, e, t, u | 2)), (l.elementType = B), (l.lanes = n), l;
        case F:
          return (l = St(13, e, t, u)), (l.elementType = F), (l.lanes = n), l;
        case P:
          return (l = St(19, e, t, u)), (l.elementType = P), (l.lanes = n), l;
        case w:
          return uo(e, u, n, t);
        default:
          if (typeof l == 'object' && l !== null)
            switch (l.$$typeof) {
              case J:
              case nl:
                i = 10;
                break l;
              case W:
                i = 9;
                break l;
              case hl:
                i = 11;
                break l;
              case O:
                i = 14;
                break l;
              case H:
                (i = 16), (a = null);
                break l;
            }
          (i = 29), (e = Error(s(130, l === null ? 'null' : typeof l, ''))), (a = null);
      }
    return (t = St(i, e, t, u)), (t.elementType = l), (t.type = a), (t.lanes = n), t;
  }
  function Ve(l, t, e, a) {
    return (l = St(7, l, a, t)), (l.lanes = e), l;
  }
  function uo(l, t, e, a) {
    (l = St(22, l, a, t)), (l.elementType = w), (l.lanes = e);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = u._current;
        if (n === null) throw Error(s(456));
        if (!(u._pendingVisibility & 2)) {
          var i = ae(n, 2);
          i !== null && ((u._pendingVisibility |= 2), kl(i, n, 2));
        }
      },
      attach: function () {
        var n = u._current;
        if (n === null) throw Error(s(456));
        if (u._pendingVisibility & 2) {
          var i = ae(n, 2);
          i !== null && ((u._pendingVisibility &= -3), kl(i, n, 2));
        }
      },
    };
    return (l.stateNode = u), l;
  }
  function Tc(l, t, e) {
    return (l = St(6, l, null, t)), (l.lanes = e), l;
  }
  function zc(l, t, e) {
    return (
      (t = St(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }),
      t
    );
  }
  function Jt(l) {
    l.flags |= 4;
  }
  function no(l, t) {
    if (t.type !== 'stylesheet' || t.state.loading & 4) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Lo(t))) {
      if (
        ((t = mt.current),
        t !== null && ((fl & 4194176) === fl ? xt !== null : ((fl & 62914560) !== fl && !(fl & 536870912)) || t !== xt))
      )
        throw (($a = Di), Tr);
      l.flags |= 8192;
    }
  }
  function An(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && ((t = l.tag !== 22 ? zf() : 536870912), (l.lanes |= t), (pa |= t));
  }
  function hu(l, t) {
    if (!sl)
      switch (l.tailMode) {
        case 'hidden':
          t = l.tail;
          for (var e = null; t !== null; ) t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case 'collapsed':
          e = l.tail;
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), (e = e.sibling);
          a === null ? (t || l.tail === null ? (l.tail = null) : (l.tail.sibling = null)) : (a.sibling = null);
      }
  }
  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 31457280),
          (a |= u.flags & 31457280),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes), (a |= u.subtreeFlags), (a |= u.flags), (u.return = l), (u = u.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function Ph(l, t, e) {
    var a = t.pendingProps;
    switch ((Mi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Vt(ql),
          Je(),
          e.pendingContext && ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (Ka(t)
              ? Jt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ot !== null && (xc(Ot), (Ot = null)))),
          Tl(t),
          null
        );
      case 26:
        return (
          (e = t.memoizedState),
          l === null
            ? (Jt(t), e !== null ? (Tl(t), no(t, e)) : (Tl(t), (t.flags &= -16777217)))
            : e
              ? e !== l.memoizedState
                ? (Jt(t), Tl(t), no(t, e))
                : (Tl(t), (t.flags &= -16777217))
              : (l.memoizedProps !== a && Jt(t), Tl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Cu(t), (e = It.current);
        var u = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Jt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Tl(t), null;
          }
          (l = Dt.current), Ka(t) ? pr(t) : ((l = Yo(u, a, e)), (t.stateNode = l), Jt(t));
        }
        return Tl(t), null;
      case 5:
        if ((Cu(t), (e = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && Jt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Tl(t), null;
          }
          if (((l = Dt.current), Ka(t))) pr(t);
          else {
            switch (((u = Cn(It.current)), l)) {
              case 1:
                l = u.createElementNS('http://www.w3.org/2000/svg', e);
                break;
              case 2:
                l = u.createElementNS('http://www.w3.org/1998/Math/MathML', e);
                break;
              default:
                switch (e) {
                  case 'svg':
                    l = u.createElementNS('http://www.w3.org/2000/svg', e);
                    break;
                  case 'math':
                    l = u.createElementNS('http://www.w3.org/1998/Math/MathML', e);
                    break;
                  case 'script':
                    (l = u.createElement('div')),
                      (l.innerHTML = '<script></script>'),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case 'select':
                    (l = typeof a.is == 'string' ? u.createElement('select', { is: a.is }) : u.createElement('select')),
                      a.multiple ? (l.multiple = !0) : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == 'string' ? u.createElement(e, { is: a.is }) : u.createElement(e);
                }
            }
            (l[Ll] = t), (l[Fl] = a);
            l: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break l;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break l;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = l;
            l: switch ((Zl(l, e, a), e)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!a.autoFocus;
                break l;
              case 'img':
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Jt(t);
          }
        }
        return Tl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Jt(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(s(166));
          if (((l = It.current), Ka(t))) {
            if (((l = t.stateNode), (e = t.memoizedProps), (a = null), (u = Wl), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (l[Ll] = t),
              (l = !!(l.nodeValue === e || (a !== null && a.suppressHydrationWarning === !0) || Uo(l.nodeValue, e))),
              l || Ne(t);
          } else (l = Cn(l).createTextNode(a)), (l[Ll] = t), (t.stateNode = l);
        }
        return Tl(t), null;
      case 13:
        if (((a = t.memoizedState), l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))) {
          if (((u = Ka(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(s(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u)) throw Error(s(317));
              u[Ll] = t;
            } else Ja(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
            Tl(t), (u = !1);
          } else Ot !== null && (xc(Ot), (Ot = null)), (u = !0);
          if (!u) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if ((jt(t), t.flags & 128)) return (t.lanes = e), t;
        if (((e = a !== null), (l = l !== null && l.memoizedState !== null), e)) {
          (a = t.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return e !== l && e && (t.child.flags |= 8192), An(t, t.updateQueue), Tl(t), null;
      case 4:
        return Je(), l === null && Zc(t.stateNode.containerInfo), Tl(t), null;
      case 10:
        return Vt(t.type), Tl(t), null;
      case 19:
        if ((Dl(Nl), (u = t.memoizedState), u === null)) return Tl(t), null;
        if (((a = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) hu(u, !1);
          else {
            if (Ol !== 0 || (l !== null && l.flags & 128))
              for (l = t.child; l !== null; ) {
                if (((n = cn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      hu(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      An(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    ao(e, l), (e = e.sibling);
                  return El(Nl, (Nl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && Rt() > On && ((t.flags |= 128), (a = !0), hu(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = cn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                An(t, l),
                hu(u, !0),
                u.tail === null && u.tailMode === 'hidden' && !n.alternate && !sl)
              )
                return Tl(t), null;
            } else
              2 * Rt() - u.renderingStartTime > On &&
                e !== 536870912 &&
                ((t.flags |= 128), (a = !0), hu(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last), l !== null ? (l.sibling = n) : (t.child = n), (u.last = n));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Rt()),
            (t.sibling = null),
            (l = Nl.current),
            El(Nl, a ? (l & 1) | 2 : l & 1),
            t)
          : (Tl(t), null);
      case 22:
      case 23:
        return (
          jt(t),
          Ui(),
          (a = t.memoizedState !== null),
          l !== null ? (l.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
          a ? e & 536870912 && !(t.flags & 128) && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t),
          (e = t.updateQueue),
          e !== null && An(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && Dl(Ce),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Vt(ql),
          Tl(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ih(l, t) {
    switch ((Mi(t), t.tag)) {
      case 1:
        return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
      case 3:
        return Vt(ql), Je(), (l = t.flags), l & 65536 && !(l & 128) ? ((t.flags = (l & -65537) | 128), t) : null;
      case 26:
      case 27:
      case 5:
        return Cu(t), null;
      case 13:
        if ((jt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Ja();
        }
        return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
      case 19:
        return Dl(Nl), null;
      case 4:
        return Je(), null;
      case 10:
        return Vt(t.type), null;
      case 22:
      case 23:
        return jt(t), Ui(), l !== null && Dl(Ce), (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
      case 24:
        return Vt(ql), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function io(l, t) {
    switch ((Mi(t), t.tag)) {
      case 3:
        Vt(ql), Je();
        break;
      case 26:
      case 27:
      case 5:
        Cu(t);
        break;
      case 4:
        Je();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        Dl(Nl);
        break;
      case 10:
        Vt(t.type);
        break;
      case 22:
      case 23:
        jt(t), Ui(), l !== null && Dl(Ce);
        break;
      case 24:
        Vt(ql);
    }
  }
  var l0 = {
      getCacheForType: function (l) {
        var t = wl(ql),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
    },
    t0 = typeof WeakMap == 'function' ? WeakMap : Map,
    zl = 0,
    bl = null,
    el = null,
    fl = 0,
    Sl = 0,
    ft = null,
    Wt = !1,
    Sa = !1,
    Ac = !1,
    kt = 0,
    Ol = 0,
    me = 0,
    Le = 0,
    Oc = 0,
    pt = 0,
    pa = 0,
    yu = null,
    Nt = null,
    Mc = !1,
    _c = 0,
    On = 1 / 0,
    Mn = null,
    ge = null,
    _n = !1,
    we = null,
    vu = 0,
    Dc = 0,
    Rc = null,
    mu = 0,
    Uc = null;
  function rt() {
    if (zl & 2 && fl !== 0) return fl & -fl;
    if (j.T !== null) {
      var l = oa;
      return l !== 0 ? l : Gc();
    }
    return _f();
  }
  function co() {
    pt === 0 && (pt = !(fl & 536870912) || sl ? Tf() : 536870912);
    var l = mt.current;
    return l !== null && (l.flags |= 32), pt;
  }
  function kl(l, t, e) {
    ((l === bl && Sl === 2) || l.cancelPendingCommit !== null) && (Ea(l, 0), $t(l, fl, pt, !1)),
      qa(l, e),
      (!(zl & 2) || l !== bl) && (l === bl && (!(zl & 2) && (Le |= e), Ol === 4 && $t(l, fl, pt, !1)), qt(l));
  }
  function fo(l, t, e) {
    if (zl & 6) throw Error(s(327));
    var a = (!e && (t & 60) === 0 && (t & l.expiredLanes) === 0) || Na(l, t),
      u = a ? u0(l, t) : qc(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        Sa && !a && $t(l, t, 0, !1);
        break;
      } else if (u === 6) $t(l, t, 0, !Wt);
      else {
        if (((e = l.current.alternate), n && !e0(e))) {
          (u = qc(l, t, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else (i = l.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = yu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (Ea(c, i).flags |= 256), (i = qc(c, i, !1)), i !== 2)) {
                if (Ac && !f) {
                  (c.errorRecoveryDisabledLanes |= n), (Le |= n), (u = 4);
                  break l;
                }
                (n = Nt), (Nt = u), n !== null && xc(n);
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ea(l, 0), $t(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                $t(a, t, pt, !Wt);
                break l;
              }
              break;
            case 2:
              Nt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (((a.finishedWork = e), (a.finishedLanes = t), (t & 62914560) === t && ((n = _c + 300 - Rt()), 10 < n))) {
            if (($t(a, t, pt, !Wt), ju(a, 0) !== 0)) break l;
            a.timeoutHandle = No(ro.bind(null, a, e, Nt, Mn, Mc, t, pt, Le, pa, Wt, 2, -0, 0), n);
            break l;
          }
          ro(a, e, Nt, Mn, Mc, t, pt, Le, pa, Wt, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    qt(l);
  }
  function xc(l) {
    Nt === null ? (Nt = l) : Nt.push.apply(Nt, l);
  }
  function ro(l, t, e, a, u, n, i, c, f, h, E, A, m) {
    var S = t.subtreeFlags;
    if (
      (S & 8192 || (S & 16785408) === 16785408) &&
      ((Tu = { stylesheets: null, count: 0, unsuspend: B0 }), Is(t), (t = j0()), t !== null)
    ) {
      (l.cancelPendingCommit = t(go.bind(null, l, e, a, u, i, c, f, 1, A, m))), $t(l, n, i, !h);
      return;
    }
    go(l, e, a, u, i, c, f, E, A, m);
  }
  function e0(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!nt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null)) (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function $t(l, t, e, a) {
    (t &= ~Oc),
      (t &= ~Le),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var u = t; 0 < u; ) {
      var n = 31 - ut(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    e !== 0 && Af(l, e, t);
  }
  function Dn() {
    return zl & 6 ? !0 : (gu(0), !1);
  }
  function Hc() {
    if (el !== null) {
      if (Sl === 0) var l = el.return;
      else (l = el), (Zt = Xe = null), Gi(l), (ra = null), (Fa = 0), (l = el);
      for (; l !== null; ) io(l.alternate, l), (l = l.return);
      el = null;
    }
  }
  function Ea(l, t) {
    (l.finishedWork = null), (l.finishedLanes = 0);
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), E0(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      Hc(),
      (bl = l),
      (el = e = ve(l.current, null)),
      (fl = t),
      (Sl = 0),
      (ft = null),
      (Wt = !1),
      (Sa = Na(l, t)),
      (Ac = !1),
      (pa = pt = Oc = Le = me = Ol = 0),
      (Nt = yu = null),
      (Mc = !1),
      t & 8 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ut(a),
          n = 1 << u;
        (t |= l[u]), (a &= ~n);
      }
    return (kt = t), Fu(), e;
  }
  function so(l, t) {
    (ll = null),
      (j.H = Ht),
      t === ka
        ? ((t = Or()), (Sl = 3))
        : t === Tr
          ? ((t = Or()), (Sl = 4))
          : (Sl = t === zs ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (ft = t),
      el === null && ((Ol = 1), bn(l, ht(t, l.current)));
  }
  function oo() {
    var l = j.H;
    return (j.H = Ht), l === null ? Ht : l;
  }
  function ho() {
    var l = j.A;
    return (j.A = l0), l;
  }
  function Nc() {
    (Ol = 4),
      Wt || ((fl & 4194176) !== fl && mt.current !== null) || (Sa = !0),
      (!(me & 134217727) && !(Le & 134217727)) || bl === null || $t(bl, fl, pt, !1);
  }
  function qc(l, t, e) {
    var a = zl;
    zl |= 2;
    var u = oo(),
      n = ho();
    (bl !== l || fl !== t) && ((Mn = null), Ea(l, t)), (t = !1);
    var i = Ol;
    l: do
      try {
        if (Sl !== 0 && el !== null) {
          var c = el,
            f = ft;
          switch (Sl) {
            case 8:
              Hc(), (i = 6);
              break l;
            case 3:
            case 2:
            case 6:
              mt.current === null && (t = !0);
              var h = Sl;
              if (((Sl = 0), (ft = null), Ta(l, c, f, h), e && Sa)) {
                i = 0;
                break l;
              }
              break;
            default:
              (h = Sl), (Sl = 0), (ft = null), Ta(l, c, f, h);
          }
        }
        a0(), (i = Ol);
        break;
      } catch (E) {
        so(l, E);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Zt = Xe = null),
      (zl = a),
      (j.H = u),
      (j.A = n),
      el === null && ((bl = null), (fl = 0), Fu()),
      i
    );
  }
  function a0() {
    for (; el !== null; ) yo(el);
  }
  function u0(l, t) {
    var e = zl;
    zl |= 2;
    var a = oo(),
      u = ho();
    bl !== l || fl !== t ? ((Mn = null), (On = Rt() + 500), Ea(l, t)) : (Sa = Na(l, t));
    l: do
      try {
        if (Sl !== 0 && el !== null) {
          t = el;
          var n = ft;
          t: switch (Sl) {
            case 1:
              (Sl = 0), (ft = null), Ta(l, t, n, 1);
              break;
            case 2:
              if (zr(n)) {
                (Sl = 0), (ft = null), vo(t);
                break;
              }
              (t = function () {
                Sl === 2 && bl === l && (Sl = 7), qt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              Sl = 7;
              break l;
            case 4:
              Sl = 5;
              break l;
            case 7:
              zr(n) ? ((Sl = 0), (ft = null), vo(t)) : ((Sl = 0), (ft = null), Ta(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (el.tag) {
                case 26:
                  i = el.memoizedState;
                case 5:
                case 27:
                  var c = el;
                  if (!i || Lo(i)) {
                    (Sl = 0), (ft = null);
                    var f = c.sibling;
                    if (f !== null) el = f;
                    else {
                      var h = c.return;
                      h !== null ? ((el = h), Rn(h)) : (el = null);
                    }
                    break t;
                  }
              }
              (Sl = 0), (ft = null), Ta(l, t, n, 5);
              break;
            case 6:
              (Sl = 0), (ft = null), Ta(l, t, n, 6);
              break;
            case 8:
              Hc(), (Ol = 6);
              break l;
            default:
              throw Error(s(462));
          }
        }
        n0();
        break;
      } catch (E) {
        so(l, E);
      }
    while (!0);
    return (Zt = Xe = null), (j.H = a), (j.A = u), (zl = e), el !== null ? 0 : ((bl = null), (fl = 0), Fu(), Ol);
  }
  function n0() {
    for (; el !== null && !_d(); ) yo(el);
  }
  function yo(l) {
    var t = Cs(l.alternate, l, kt);
    (l.memoizedProps = l.pendingProps), t === null ? Rn(l) : (el = t);
  }
  function vo(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rs(e, t, t.pendingProps, t.type, void 0, fl);
        break;
      case 11:
        t = Rs(e, t, t.pendingProps, t.type.render, t.ref, fl);
        break;
      case 5:
        Gi(t);
      default:
        io(e, t), (t = el = ao(t, kt)), (t = Cs(e, t, kt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Rn(l) : (el = t);
  }
  function Ta(l, t, e, a) {
    (Zt = Xe = null), Gi(t), (ra = null), (Fa = 0);
    var u = t.return;
    try {
      if (Jh(l, u, t, e, fl)) {
        (Ol = 1), bn(l, ht(e, l.current)), (el = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((el = u), n);
      (Ol = 1), bn(l, ht(e, l.current)), (el = null);
      return;
    }
    t.flags & 32768
      ? (sl || a === 1
          ? (l = !0)
          : Sa || fl & 536870912
            ? (l = !1)
            : ((Wt = l = !0),
              (a === 2 || a === 3 || a === 6) && ((a = mt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        mo(t, l))
      : Rn(t);
  }
  function Rn(l) {
    var t = l;
    do {
      if (t.flags & 32768) {
        mo(t, Wt);
        return;
      }
      l = t.return;
      var e = Ph(t.alternate, t, kt);
      if (e !== null) {
        el = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        el = t;
        return;
      }
      el = t = l;
    } while (t !== null);
    Ol === 0 && (Ol = 5);
  }
  function mo(l, t) {
    do {
      var e = Ih(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), (el = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null && ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        el = l;
        return;
      }
      el = l = e;
    } while (l !== null);
    (Ol = 6), (el = null);
  }
  function go(l, t, e, a, u, n, i, c, f, h) {
    var E = j.T,
      A = N.p;
    try {
      (N.p = 2), (j.T = null), i0(l, t, e, a, A, u, n, i, c, f, h);
    } finally {
      (j.T = E), (N.p = A);
    }
  }
  function i0(l, t, e, a, u, n, i, c) {
    do za();
    while (we !== null);
    if (zl & 6) throw Error(s(327));
    var f = l.finishedWork;
    if (((a = l.finishedLanes), f === null)) return null;
    if (((l.finishedWork = null), (l.finishedLanes = 0), f === l.current)) throw Error(s(177));
    (l.callbackNode = null), (l.callbackPriority = 0), (l.cancelPendingCommit = null);
    var h = f.lanes | f.childLanes;
    if (
      ((h |= zi),
      Gd(l, a, h, n, i, c),
      l === bl && ((el = bl = null), (fl = 0)),
      (!(f.subtreeFlags & 10256) && !(f.flags & 10256)) ||
        _n ||
        ((_n = !0),
        (Dc = h),
        (Rc = e),
        s0(Yu, function () {
          return za(), null;
        })),
      (e = (f.flags & 15990) !== 0),
      f.subtreeFlags & 15990 || e
        ? ((e = j.T),
          (j.T = null),
          (n = N.p),
          (N.p = 2),
          (i = zl),
          (zl |= 4),
          kh(l, f),
          $s(f, l),
          Uh(Kc, l.containerInfo),
          (Qn = !!wc),
          (Kc = wc = null),
          (l.current = f),
          Ks(l, f.alternate, f),
          Dd(),
          (zl = i),
          (N.p = n),
          (j.T = e))
        : (l.current = f),
      _n ? ((_n = !1), (we = l), (vu = a)) : bo(l, h),
      (h = l.pendingLanes),
      h === 0 && (ge = null),
      Nd(f.stateNode),
      qt(l),
      t !== null)
    )
      for (u = l.onRecoverableError, f = 0; f < t.length; f++) (h = t[f]), u(h.value, { componentStack: h.stack });
    return (
      vu & 3 && za(),
      (h = l.pendingLanes),
      a & 4194218 && h & 42 ? (l === Uc ? mu++ : ((mu = 0), (Uc = l))) : (mu = 0),
      gu(0),
      null
    );
  }
  function bo(l, t) {
    (l.pooledCacheLanes &= t) === 0 && ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ia(t)));
  }
  function za() {
    if (we !== null) {
      var l = we,
        t = Dc;
      Dc = 0;
      var e = Mf(vu),
        a = j.T,
        u = N.p;
      try {
        if (((N.p = 32 > e ? 32 : e), (j.T = null), we === null)) var n = !1;
        else {
          (e = Rc), (Rc = null);
          var i = we,
            c = vu;
          if (((we = null), (vu = 0), zl & 6)) throw Error(s(331));
          var f = zl;
          if (
            ((zl |= 4),
            to(i.current),
            Ps(i, i.current, c, e),
            (zl = f),
            gu(0, !1),
            at && typeof at.onPostCommitFiberRoot == 'function')
          )
            try {
              at.onPostCommitFiberRoot(Ha, i);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (N.p = u), (j.T = a), bo(l, t);
      }
    }
    return !1;
  }
  function So(l, t, e) {
    (t = ht(e, t)), (t = Pi(l.stateNode, t, 2)), (l = oe(l, t, 2)), l !== null && (qa(l, 2), qt(l));
  }
  function gl(l, t, e) {
    if (l.tag === 3) So(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          So(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (ge === null || !ge.has(a)))
          ) {
            (l = ht(e, l)), (e = Es(2)), (a = oe(t, e, 2)), a !== null && (Ts(e, a, t, l), qa(a, 2), qt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new t0();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(e) || ((Ac = !0), u.add(e), (l = c0.bind(null, l, t, e)), t.then(l, l));
  }
  function c0(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      bl === l &&
        (fl & e) === e &&
        (Ol === 4 || (Ol === 3 && (fl & 62914560) === fl && 300 > Rt() - _c) ? !(zl & 2) && Ea(l, 0) : (Oc |= e),
        pa === fl && (pa = 0)),
      qt(l);
  }
  function po(l, t) {
    t === 0 && (t = zf()), (l = ae(l, t)), l !== null && (qa(l, t), qt(l));
  }
  function f0(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), po(l, e);
  }
  function r0(l, t) {
    var e = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), po(l, e);
  }
  function s0(l, t) {
    return In(l, t);
  }
  var Un = null,
    Aa = null,
    Yc = !1,
    xn = !1,
    Bc = !1,
    Ke = 0;
  function qt(l) {
    l !== Aa && l.next === null && (Aa === null ? (Un = Aa = l) : (Aa = Aa.next = l)),
      (xn = !0),
      Yc || ((Yc = !0), d0(o0));
  }
  function gu(l, t) {
    if (!Bc && xn) {
      Bc = !0;
      do
        for (var e = !1, a = Un; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              (n = (1 << (31 - ut(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), zo(a, n));
          } else (n = fl), (n = ju(a, a === bl ? n : 0)), !(n & 3) || Na(a, n) || ((e = !0), zo(a, n));
          a = a.next;
        }
      while (e);
      Bc = !1;
    }
  }
  function o0() {
    xn = Yc = !1;
    var l = 0;
    Ke !== 0 && (p0() && (l = Ke), (Ke = 0));
    for (var t = Rt(), e = null, a = Un; a !== null; ) {
      var u = a.next,
        n = Eo(a, t);
      n === 0
        ? ((a.next = null), e === null ? (Un = u) : (e.next = u), u === null && (Aa = e))
        : ((e = a), (l !== 0 || n & 3) && (xn = !0)),
        (a = u);
    }
    gu(l);
  }
  function Eo(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - ut(n),
        c = 1 << i,
        f = u[i];
      f === -1 ? (!(c & e) || c & a) && (u[i] = Bd(c, t)) : f <= t && (l.expiredLanes |= c), (n &= ~c);
    }
    if (
      ((t = bl),
      (e = fl),
      (e = ju(l, l === t ? e : 0)),
      (a = l.callbackNode),
      e === 0 || (l === t && Sl === 2) || l.cancelPendingCommit !== null)
    )
      return a !== null && a !== null && li(a), (l.callbackNode = null), (l.callbackPriority = 0);
    if (!(e & 3) || Na(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && li(a), Mf(e))) {
        case 2:
        case 8:
          e = pf;
          break;
        case 32:
          e = Yu;
          break;
        case 268435456:
          e = Ef;
          break;
        default:
          e = Yu;
      }
      return (a = To.bind(null, l)), (e = In(e, a)), (l.callbackPriority = t), (l.callbackNode = e), t;
    }
    return a !== null && a !== null && li(a), (l.callbackPriority = 2), (l.callbackNode = null), 2;
  }
  function To(l, t) {
    var e = l.callbackNode;
    if (za() && l.callbackNode !== e) return null;
    var a = fl;
    return (
      (a = ju(l, l === bl ? a : 0)),
      a === 0
        ? null
        : (fo(l, a, t), Eo(l, Rt()), l.callbackNode != null && l.callbackNode === e ? To.bind(null, l) : null)
    );
  }
  function zo(l, t) {
    if (za()) return null;
    fo(l, t, !0);
  }
  function d0(l) {
    T0(function () {
      zl & 6 ? In(Sf, l) : l();
    });
  }
  function Gc() {
    return Ke === 0 && (Ke = Tf()), Ke;
  }
  function Ao(l) {
    return l == null || typeof l == 'symbol' || typeof l == 'boolean' ? null : typeof l == 'function' ? l : Lu('' + l);
  }
  function Oo(l, t) {
    var e = t.ownerDocument.createElement('input');
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute('form', l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function h0(l, t, e, a, u) {
    if (t === 'submit' && e && e.stateNode === u) {
      var n = Ao((u[Fl] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[Fl] || null) ? Ao(t.formAction) : i.getAttribute('formAction')),
        t !== null && ((n = t), (i = null)));
      var c = new Wu('action', 'action', null, a, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ke !== 0) {
                  var f = i ? Oo(u, i) : new FormData(u);
                  Ji(e, { pending: !0, data: f, method: u.method, action: n }, null, f);
                }
              } else
                typeof n == 'function' &&
                  (c.preventDefault(),
                  (f = i ? Oo(u, i) : new FormData(u)),
                  Ji(e, { pending: !0, data: f, method: u.method, action: n }, n, f));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var jc = 0; jc < mr.length; jc++) {
    var Xc = mr[jc],
      y0 = Xc.toLowerCase(),
      v0 = Xc[0].toUpperCase() + Xc.slice(1);
    At(y0, 'on' + v0);
  }
  At(or, 'onAnimationEnd'),
    At(dr, 'onAnimationIteration'),
    At(hr, 'onAnimationStart'),
    At('dblclick', 'onDoubleClick'),
    At('focusin', 'onFocus'),
    At('focusout', 'onBlur'),
    At(Hh, 'onTransitionRun'),
    At(Nh, 'onTransitionStart'),
    At(qh, 'onTransitionCancel'),
    At(yr, 'onTransitionEnd'),
    Fe('onMouseEnter', ['mouseout', 'mouseover']),
    Fe('onMouseLeave', ['mouseout', 'mouseover']),
    Fe('onPointerEnter', ['pointerout', 'pointerover']),
    Fe('onPointerLeave', ['pointerout', 'pointerover']),
    _e('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    _e('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    _e('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    _e('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    _e('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    _e('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var bu =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    m0 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(bu));
  function Mo(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              f = c.instance,
              h = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped())) break l;
            (n = c), (u.currentTarget = h);
            try {
              n(u);
            } catch (E) {
              gn(E);
            }
            (u.currentTarget = null), (n = f);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (f = c.instance),
              (h = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            (n = c), (u.currentTarget = h);
            try {
              n(u);
            } catch (E) {
              gn(E);
            }
            (u.currentTarget = null), (n = f);
          }
      }
    }
  }
  function ul(l, t) {
    var e = t[ei];
    e === void 0 && (e = t[ei] = new Set());
    var a = l + '__bubble';
    e.has(a) || (_o(t, l, 2, !1), e.add(a));
  }
  function Qc(l, t, e) {
    var a = 0;
    t && (a |= 4), _o(e, l, a, t);
  }
  var Hn = '_reactListening' + Math.random().toString(36).slice(2);
  function Zc(l) {
    if (!l[Hn]) {
      (l[Hn] = !0),
        Rf.forEach(function (e) {
          e !== 'selectionchange' && (m0.has(e) || Qc(e, !1, l), Qc(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hn] || ((t[Hn] = !0), Qc('selectionchange', !1, t));
    }
  }
  function _o(l, t, e, a) {
    switch ($o(t)) {
      case 2:
        var u = Z0;
        break;
      case 8:
        u = V0;
        break;
      default:
        u = tf;
    }
    (e = u.bind(null, t, e, l)),
      (u = void 0),
      !si || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
          ? l.addEventListener(t, e, { passive: u })
          : l.addEventListener(t, e, !1);
  }
  function Vc(l, t, e, a, u) {
    var n = a;
    if (!(t & 1) && !(t & 2) && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u || (c.nodeType === 8 && c.parentNode === u)) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var f = i.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = i.stateNode.containerInfo), f === u || (f.nodeType === 8 && f.parentNode === u))
              )
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Me(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Qf(function () {
      var h = n,
        E = fi(e),
        A = [];
      l: {
        var m = vr.get(l);
        if (m !== void 0) {
          var S = Wu,
            C = l;
          switch (l) {
            case 'keypress':
              if (Ku(e) === 0) break l;
            case 'keydown':
            case 'keyup':
              S = rh;
              break;
            case 'focusin':
              (C = 'focus'), (S = yi);
              break;
            case 'focusout':
              (C = 'blur'), (S = yi);
              break;
            case 'beforeblur':
            case 'afterblur':
              S = yi;
              break;
            case 'click':
              if (e.button === 2) break l;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              S = Lf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              S = Fd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              S = dh;
              break;
            case or:
            case dr:
            case hr:
              S = lh;
              break;
            case yr:
              S = yh;
              break;
            case 'scroll':
            case 'scrollend':
              S = kd;
              break;
            case 'wheel':
              S = mh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              S = eh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              S = Kf;
              break;
            case 'toggle':
            case 'beforetoggle':
              S = bh;
          }
          var K = (t & 4) !== 0,
            Ml = !K && (l === 'scroll' || l === 'scrollend'),
            y = K ? (m !== null ? m + 'Capture' : null) : m;
          K = [];
          for (var d = h, v; d !== null; ) {
            var T = d;
            if (
              ((v = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                v === null ||
                y === null ||
                ((T = Ba(d, y)), T != null && K.push(Su(d, T, v))),
              Ml)
            )
              break;
            d = d.return;
          }
          0 < K.length && ((m = new S(m, C, null, e, E)), A.push({ event: m, listeners: K }));
        }
      }
      if (!(t & 7)) {
        l: {
          if (
            ((m = l === 'mouseover' || l === 'pointerover'),
            (S = l === 'mouseout' || l === 'pointerout'),
            m && e !== ci && (C = e.relatedTarget || e.fromElement) && (Me(C) || C[We]))
          )
            break l;
          if (
            (S || m) &&
            ((m = E.window === E ? E : (m = E.ownerDocument) ? m.defaultView || m.parentWindow : window),
            S
              ? ((C = e.relatedTarget || e.toElement),
                (S = h),
                (C = C ? Me(C) : null),
                C !== null && ((Ml = X(C)), (K = C.tag), C !== Ml || (K !== 5 && K !== 27 && K !== 6)) && (C = null))
              : ((S = null), (C = h)),
            S !== C)
          ) {
            if (
              ((K = Lf),
              (T = 'onMouseLeave'),
              (y = 'onMouseEnter'),
              (d = 'mouse'),
              (l === 'pointerout' || l === 'pointerover') &&
                ((K = Kf), (T = 'onPointerLeave'), (y = 'onPointerEnter'), (d = 'pointer')),
              (Ml = S == null ? m : Ya(S)),
              (v = C == null ? m : Ya(C)),
              (m = new K(T, d + 'leave', S, e, E)),
              (m.target = Ml),
              (m.relatedTarget = v),
              (T = null),
              Me(E) === h && ((K = new K(y, d + 'enter', C, e, E)), (K.target = v), (K.relatedTarget = Ml), (T = K)),
              (Ml = T),
              S && C)
            )
              t: {
                for (K = S, y = C, d = 0, v = K; v; v = Oa(v)) d++;
                for (v = 0, T = y; T; T = Oa(T)) v++;
                for (; 0 < d - v; ) (K = Oa(K)), d--;
                for (; 0 < v - d; ) (y = Oa(y)), v--;
                for (; d--; ) {
                  if (K === y || (y !== null && K === y.alternate)) break t;
                  (K = Oa(K)), (y = Oa(y));
                }
                K = null;
              }
            else K = null;
            S !== null && Do(A, m, S, K, !1), C !== null && Ml !== null && Do(A, Ml, C, K, !0);
          }
        }
        l: {
          if (
            ((m = h ? Ya(h) : window),
            (S = m.nodeName && m.nodeName.toLowerCase()),
            S === 'select' || (S === 'input' && m.type === 'file'))
          )
            var q = lr;
          else if (Pf(m))
            if (tr) q = Dh;
            else {
              q = Mh;
              var tl = Oh;
            }
          else
            (S = m.nodeName),
              !S || S.toLowerCase() !== 'input' || (m.type !== 'checkbox' && m.type !== 'radio')
                ? h && ii(h.elementType) && (q = lr)
                : (q = _h);
          if (q && (q = q(l, h))) {
            If(A, q, e, E);
            break l;
          }
          tl && tl(l, m, h),
            l === 'focusout' && h && m.type === 'number' && h.memoizedProps.value != null && ni(m, 'number', m.value);
        }
        switch (((tl = h ? Ya(h) : window), l)) {
          case 'focusin':
            (Pf(tl) || tl.contentEditable === 'true') && ((aa = tl), (pi = h), (wa = null));
            break;
          case 'focusout':
            wa = pi = aa = null;
            break;
          case 'mousedown':
            Ei = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Ei = !1), rr(A, e, E);
            break;
          case 'selectionchange':
            if (xh) break;
          case 'keydown':
          case 'keyup':
            rr(A, e, E);
        }
        var Y;
        if (mi)
          l: {
            switch (l) {
              case 'compositionstart':
                var Z = 'onCompositionStart';
                break l;
              case 'compositionend':
                Z = 'onCompositionEnd';
                break l;
              case 'compositionupdate':
                Z = 'onCompositionUpdate';
                break l;
            }
            Z = void 0;
          }
        else
          ea
            ? $f(l, e) && (Z = 'onCompositionEnd')
            : l === 'keydown' && e.keyCode === 229 && (Z = 'onCompositionStart');
        Z &&
          (Jf &&
            e.locale !== 'ko' &&
            (ea || Z !== 'onCompositionStart'
              ? Z === 'onCompositionEnd' && ea && (Y = Zf())
              : ((ee = E), (oi = 'value' in ee ? ee.value : ee.textContent), (ea = !0))),
          (tl = Nn(h, Z)),
          0 < tl.length &&
            ((Z = new wf(Z, l, null, e, E)),
            A.push({ event: Z, listeners: tl }),
            Y ? (Z.data = Y) : ((Y = Ff(e)), Y !== null && (Z.data = Y)))),
          (Y = ph ? Eh(l, e) : Th(l, e)) &&
            ((Z = Nn(h, 'onBeforeInput')),
            0 < Z.length &&
              ((tl = new wf('onBeforeInput', 'beforeinput', null, e, E)),
              A.push({ event: tl, listeners: Z }),
              (tl.data = Y))),
          h0(A, l, h, e, E);
      }
      Mo(A, t);
    });
  }
  function Su(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Nn(l, t) {
    for (var e = t + 'Capture', a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ba(l, e)), u != null && a.unshift(Su(l, u, n)), (u = Ba(l, t)), u != null && a.push(Su(l, u, n))),
        (l = l.return);
    }
    return a;
  }
  function Oa(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Do(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        f = c.alternate,
        h = c.stateNode;
      if (((c = c.tag), f !== null && f === a)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        h === null ||
        ((f = h),
        u
          ? ((h = Ba(e, n)), h != null && i.unshift(Su(e, h, f)))
          : u || ((h = Ba(e, n)), h != null && i.push(Su(e, h, f)))),
        (e = e.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var g0 = /\r\n?/g,
    b0 = /\u0000|\uFFFD/g;
  function Ro(l) {
    return (typeof l == 'string' ? l : '' + l)
      .replace(
        g0,
        `
`,
      )
      .replace(b0, '');
  }
  function Uo(l, t) {
    return (t = Ro(t)), Ro(l) === t;
  }
  function qn() {}
  function ml(l, t, e, a, u, n) {
    switch (e) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || Ie(l, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && Ie(l, '' + a);
        break;
      case 'className':
        Qu(l, 'class', a);
        break;
      case 'tabIndex':
        Qu(l, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Qu(l, e, a);
        break;
      case 'style':
        jf(l, a, n);
        break;
      case 'data':
        if (t !== 'object') {
          Qu(l, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || e !== 'href')) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          l.removeAttribute(e);
          break;
        }
        (a = Lu('' + a)), l.setAttribute(e, a);
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == 'function' &&
            (e === 'formAction'
              ? (t !== 'input' && ml(l, t, 'name', u.name, u, null),
                ml(l, t, 'formEncType', u.formEncType, u, null),
                ml(l, t, 'formMethod', u.formMethod, u, null),
                ml(l, t, 'formTarget', u.formTarget, u, null))
              : (ml(l, t, 'encType', u.encType, u, null),
                ml(l, t, 'method', u.method, u, null),
                ml(l, t, 'target', u.target, u, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          l.removeAttribute(e);
          break;
        }
        (a = Lu('' + a)), l.setAttribute(e, a);
        break;
      case 'onClick':
        a != null && (l.onclick = qn);
        break;
      case 'onScroll':
        a != null && ul('scroll', l);
        break;
      case 'onScrollEnd':
        a != null && ul('scrollend', l);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case 'multiple':
        l.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        l.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          l.removeAttribute('xlink:href');
          break;
        }
        (e = Lu('' + a)), l.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol' ? l.setAttribute(e, '' + a) : l.removeAttribute(e);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol' ? l.setAttribute(e, '') : l.removeAttribute(e);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? l.setAttribute(e, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case 'popover':
        ul('beforetoggle', l), ul('toggle', l), Xu(l, 'popover', a);
        break;
      case 'xlinkActuate':
        Yt(l, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Yt(l, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Yt(l, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Yt(l, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Yt(l, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Yt(l, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Yt(l, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Yt(l, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Yt(l, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Xu(l, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
          ((e = Jd.get(e) || e), Xu(l, e, a));
    }
  }
  function Lc(l, t, e, a, u, n) {
    switch (e) {
      case 'style':
        jf(l, a, n);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case 'children':
        typeof a == 'string' ? Ie(l, a) : (typeof a == 'number' || typeof a == 'bigint') && Ie(l, '' + a);
        break;
      case 'onScroll':
        a != null && ul('scroll', l);
        break;
      case 'onScrollEnd':
        a != null && ul('scrollend', l);
        break;
      case 'onClick':
        a != null && (l.onclick = qn);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Uf.hasOwnProperty(e))
          l: {
            if (
              e[0] === 'o' &&
              e[1] === 'n' &&
              ((u = e.endsWith('Capture')),
              (t = e.slice(2, u ? e.length - 7 : void 0)),
              (n = l[Fl] || null),
              (n = n != null ? n[e] : null),
              typeof n == 'function' && l.removeEventListener(t, n, u),
              typeof a == 'function')
            ) {
              typeof n != 'function' &&
                n !== null &&
                (e in l ? (l[e] = null) : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, u);
              break l;
            }
            e in l ? (l[e] = a) : a === !0 ? l.setAttribute(e, '') : Xu(l, e, a);
          }
    }
  }
  function Zl(l, t, e) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        ul('error', l), ul('load', l);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t));
                default:
                  ml(l, t, n, i, e, null);
              }
          }
        u && ml(l, t, 'srcSet', e.srcSet, e, null), a && ml(l, t, 'src', e.src, e, null);
        return;
      case 'input':
        ul('invalid', l);
        var c = (n = i = u = null),
          f = null,
          h = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null)
              switch (a) {
                case 'name':
                  u = E;
                  break;
                case 'type':
                  i = E;
                  break;
                case 'checked':
                  f = E;
                  break;
                case 'defaultChecked':
                  h = E;
                  break;
                case 'value':
                  n = E;
                  break;
                case 'defaultValue':
                  c = E;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (E != null) throw Error(s(137, t));
                  break;
                default:
                  ml(l, t, a, E, e, null);
              }
          }
        Cf(l, n, c, f, h, i, u, !1), Zu(l);
        return;
      case 'select':
        ul('invalid', l), (a = i = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
            switch (u) {
              case 'value':
                n = c;
                break;
              case 'defaultValue':
                i = c;
                break;
              case 'multiple':
                a = c;
              default:
                ml(l, t, u, c, e, null);
            }
        (t = n), (e = i), (l.multiple = !!a), t != null ? Pe(l, !!a, t, !1) : e != null && Pe(l, !!a, e, !0);
        return;
      case 'textarea':
        ul('invalid', l), (n = u = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case 'value':
                a = c;
                break;
              case 'defaultValue':
                u = c;
                break;
              case 'children':
                n = c;
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(s(91));
                break;
              default:
                ml(l, t, i, c, e, null);
            }
        Bf(l, a, u, n), Zu(l);
        return;
      case 'option':
        for (f in e)
          if (e.hasOwnProperty(f) && ((a = e[f]), a != null))
            switch (f) {
              case 'selected':
                l.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                ml(l, t, f, a, e, null);
            }
        return;
      case 'dialog':
        ul('cancel', l), ul('close', l);
        break;
      case 'iframe':
      case 'object':
        ul('load', l);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < bu.length; a++) ul(bu[a], l);
        break;
      case 'image':
        ul('error', l), ul('load', l);
        break;
      case 'details':
        ul('toggle', l);
        break;
      case 'embed':
      case 'source':
      case 'link':
        ul('error', l), ul('load', l);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (h in e)
          if (e.hasOwnProperty(h) && ((a = e[h]), a != null))
            switch (h) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                ml(l, t, h, a, e, null);
            }
        return;
      default:
        if (ii(t)) {
          for (E in e) e.hasOwnProperty(E) && ((a = e[E]), a !== void 0 && Lc(l, t, E, a, e, void 0));
          return;
        }
    }
    for (c in e) e.hasOwnProperty(c) && ((a = e[c]), a != null && ml(l, t, c, a, e, null));
  }
  function S0(l, t, e, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          h = null,
          E = null;
        for (S in e) {
          var A = e[S];
          if (e.hasOwnProperty(S) && A != null)
            switch (S) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                f = A;
              default:
                a.hasOwnProperty(S) || ml(l, t, S, null, a, A);
            }
        }
        for (var m in a) {
          var S = a[m];
          if (((A = e[m]), a.hasOwnProperty(m) && (S != null || A != null)))
            switch (m) {
              case 'type':
                n = S;
                break;
              case 'name':
                u = S;
                break;
              case 'checked':
                h = S;
                break;
              case 'defaultChecked':
                E = S;
                break;
              case 'value':
                i = S;
                break;
              case 'defaultValue':
                c = S;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (S != null) throw Error(s(137, t));
                break;
              default:
                S !== A && ml(l, t, m, S, a, A);
            }
        }
        ui(l, i, c, f, h, E, n, u);
        return;
      case 'select':
        S = i = c = m = null;
        for (n in e)
          if (((f = e[n]), e.hasOwnProperty(n) && f != null))
            switch (n) {
              case 'value':
                break;
              case 'multiple':
                S = f;
              default:
                a.hasOwnProperty(n) || ml(l, t, n, null, a, f);
            }
        for (u in a)
          if (((n = a[u]), (f = e[u]), a.hasOwnProperty(u) && (n != null || f != null)))
            switch (u) {
              case 'value':
                m = n;
                break;
              case 'defaultValue':
                c = n;
                break;
              case 'multiple':
                i = n;
              default:
                n !== f && ml(l, t, u, n, a, f);
            }
        (t = c),
          (e = i),
          (a = S),
          m != null ? Pe(l, !!e, m, !1) : !!a != !!e && (t != null ? Pe(l, !!e, t, !0) : Pe(l, !!e, e ? [] : '', !1));
        return;
      case 'textarea':
        S = m = null;
        for (c in e)
          if (((u = e[c]), e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)))
            switch (c) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ml(l, t, c, null, a, u);
            }
        for (i in a)
          if (((u = a[i]), (n = e[i]), a.hasOwnProperty(i) && (u != null || n != null)))
            switch (i) {
              case 'value':
                m = u;
                break;
              case 'defaultValue':
                S = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && ml(l, t, i, u, a, n);
            }
        Yf(l, m, S);
        return;
      case 'option':
        for (var C in e)
          if (((m = e[C]), e.hasOwnProperty(C) && m != null && !a.hasOwnProperty(C)))
            switch (C) {
              case 'selected':
                l.selected = !1;
                break;
              default:
                ml(l, t, C, null, a, m);
            }
        for (f in a)
          if (((m = a[f]), (S = e[f]), a.hasOwnProperty(f) && m !== S && (m != null || S != null)))
            switch (f) {
              case 'selected':
                l.selected = m && typeof m != 'function' && typeof m != 'symbol';
                break;
              default:
                ml(l, t, f, m, a, S);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var K in e)
          (m = e[K]), e.hasOwnProperty(K) && m != null && !a.hasOwnProperty(K) && ml(l, t, K, null, a, m);
        for (h in a)
          if (((m = a[h]), (S = e[h]), a.hasOwnProperty(h) && m !== S && (m != null || S != null)))
            switch (h) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (m != null) throw Error(s(137, t));
                break;
              default:
                ml(l, t, h, m, a, S);
            }
        return;
      default:
        if (ii(t)) {
          for (var Ml in e)
            (m = e[Ml]), e.hasOwnProperty(Ml) && m !== void 0 && !a.hasOwnProperty(Ml) && Lc(l, t, Ml, void 0, a, m);
          for (E in a)
            (m = a[E]),
              (S = e[E]),
              !a.hasOwnProperty(E) || m === S || (m === void 0 && S === void 0) || Lc(l, t, E, m, a, S);
          return;
        }
    }
    for (var y in e) (m = e[y]), e.hasOwnProperty(y) && m != null && !a.hasOwnProperty(y) && ml(l, t, y, null, a, m);
    for (A in a)
      (m = a[A]), (S = e[A]), !a.hasOwnProperty(A) || m === S || (m == null && S == null) || ml(l, t, A, m, a, S);
  }
  var wc = null,
    Kc = null;
  function Cn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function xo(l) {
    switch (l) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Ho(l, t) {
    if (l === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === 'foreignObject' ? 0 : l;
  }
  function Jc(l, t) {
    return (
      l === 'textarea' ||
      l === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wc = null;
  function p0() {
    var l = window.event;
    return l && l.type === 'popstate' ? (l === Wc ? !1 : ((Wc = l), !0)) : ((Wc = null), !1);
  }
  var No = typeof setTimeout == 'function' ? setTimeout : void 0,
    E0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    qo = typeof Promise == 'function' ? Promise : void 0,
    T0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof qo < 'u'
          ? function (l) {
              return qo.resolve(null).then(l).catch(z0);
            }
          : No;
  function z0(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function kc(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === '/$')) {
          if (a === 0) {
            l.removeChild(u), _u(t);
            return;
          }
          a--;
        } else (e !== '$' && e !== '$?' && e !== '$!') || a++;
      e = u;
    } while (e);
    _u(t);
  }
  function $c(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          $c(e), ai(e);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (e.rel.toLowerCase() === 'stylesheet') continue;
      }
      l.removeChild(e);
    }
  }
  function A0(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== 'INPUT' || l.type !== 'hidden')) break;
      } else if (a) {
        if (!l[Ca])
          switch (t) {
            case 'meta':
              if (!l.hasAttribute('itemprop')) break;
              return l;
            case 'link':
              if (((n = l.getAttribute('rel')), n === 'stylesheet' && l.hasAttribute('data-precedence'))) break;
              if (
                n !== u.rel ||
                l.getAttribute('href') !== (u.href == null ? null : u.href) ||
                l.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case 'style':
              if (l.hasAttribute('data-precedence')) break;
              return l;
            case 'script':
              if (
                ((n = l.getAttribute('src')),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  l.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute('async') &&
                  !l.hasAttribute('itemprop'))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === 'input' && l.type === 'hidden') {
        var n = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && l.getAttribute('name') === n) return l;
      } else return l;
      if (((l = _t(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function O0(l, t, e) {
    if (t === '') return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== 'INPUT' || l.type !== 'hidden') && !e) ||
        ((l = _t(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function _t(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = l.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return l;
  }
  function Co(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === '$' || e === '$!' || e === '$?') {
          if (t === 0) return l;
          t--;
        } else e === '/$' && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Yo(l, t, e) {
    switch (((t = Cn(e)), l)) {
      case 'html':
        if (((l = t.documentElement), !l)) throw Error(s(452));
        return l;
      case 'head':
        if (((l = t.head), !l)) throw Error(s(453));
        return l;
      case 'body':
        if (((l = t.body), !l)) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  var Et = new Map(),
    Bo = new Set();
  function Yn(l) {
    return typeof l.getRootNode == 'function' ? l.getRootNode() : l.ownerDocument;
  }
  var Ft = N.d;
  N.d = { f: M0, r: _0, D: D0, C: R0, L: U0, m: x0, X: N0, S: H0, M: q0 };
  function M0() {
    var l = Ft.f(),
      t = Dn();
    return l || t;
  }
  function _0(l) {
    var t = ke(l);
    t !== null && t.tag === 5 && t.type === 'form' ? rs(t) : Ft.r(l);
  }
  var Ma = typeof document > 'u' ? null : document;
  function Go(l, t, e) {
    var a = Ma;
    if (a && typeof t == 'string' && t) {
      var u = ot(t);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == 'string' && (u += '[crossorigin="' + e + '"]'),
        Bo.has(u) ||
          (Bo.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement('link')), Zl(t, 'link', l), Cl(t), a.head.appendChild(t)));
    }
  }
  function D0(l) {
    Ft.D(l), Go('dns-prefetch', l, null);
  }
  function R0(l, t) {
    Ft.C(l, t), Go('preconnect', l, t);
  }
  function U0(l, t, e) {
    Ft.L(l, t, e);
    var a = Ma;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === 'image' && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + ot(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == 'string' && (u += '[imagesizes="' + ot(e.imageSizes) + '"]'))
        : (u += '[href="' + ot(l) + '"]');
      var n = u;
      switch (t) {
        case 'style':
          n = _a(l);
          break;
        case 'script':
          n = Da(l);
      }
      Et.has(n) ||
        ((l = al({ rel: 'preload', href: t === 'image' && e && e.imageSrcSet ? void 0 : l, as: t }, e)),
        Et.set(n, l),
        a.querySelector(u) !== null ||
          (t === 'style' && a.querySelector(pu(n))) ||
          (t === 'script' && a.querySelector(Eu(n))) ||
          ((t = a.createElement('link')), Zl(t, 'link', l), Cl(t), a.head.appendChild(t)));
    }
  }
  function x0(l, t) {
    Ft.m(l, t);
    var e = Ma;
    if (e && l) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        u = 'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]',
        n = u;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          n = Da(l);
      }
      if (!Et.has(n) && ((l = al({ rel: 'modulepreload', href: l }, t)), Et.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (e.querySelector(Eu(n))) return;
        }
        (a = e.createElement('link')), Zl(a, 'link', l), Cl(a), e.head.appendChild(a);
      }
    }
  }
  function H0(l, t, e) {
    Ft.S(l, t, e);
    var a = Ma;
    if (a && l) {
      var u = $e(a).hoistableStyles,
        n = _a(l);
      t = t || 'default';
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(pu(n)))) c.loading = 5;
        else {
          (l = al({ rel: 'stylesheet', href: l, 'data-precedence': t }, e)), (e = Et.get(n)) && Fc(l, e);
          var f = (i = a.createElement('link'));
          Cl(f),
            Zl(f, 'link', l),
            (f._p = new Promise(function (h, E) {
              (f.onload = h), (f.onerror = E);
            })),
            f.addEventListener('load', function () {
              c.loading |= 1;
            }),
            f.addEventListener('error', function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Bn(i, t, a);
        }
        (i = { type: 'stylesheet', instance: i, count: 1, state: c }), u.set(n, i);
      }
    }
  }
  function N0(l, t) {
    Ft.X(l, t);
    var e = Ma;
    if (e && l) {
      var a = $e(e).hoistableScripts,
        u = Da(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(Eu(u))),
        n ||
          ((l = al({ src: l, async: !0 }, t)),
          (t = Et.get(u)) && Pc(l, t),
          (n = e.createElement('script')),
          Cl(n),
          Zl(n, 'link', l),
          e.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function q0(l, t) {
    Ft.M(l, t);
    var e = Ma;
    if (e && l) {
      var a = $e(e).hoistableScripts,
        u = Da(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(Eu(u))),
        n ||
          ((l = al({ src: l, async: !0, type: 'module' }, t)),
          (t = Et.get(u)) && Pc(l, t),
          (n = e.createElement('script')),
          Cl(n),
          Zl(n, 'link', l),
          e.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function jo(l, t, e, a) {
    var u = (u = It.current) ? Yn(u) : null;
    if (!u) throw Error(s(446));
    switch (l) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof e.precedence == 'string' && typeof e.href == 'string'
          ? ((t = _a(e.href)),
            (e = $e(u).hoistableStyles),
            (a = e.get(t)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), e.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (e.rel === 'stylesheet' && typeof e.href == 'string' && typeof e.precedence == 'string') {
          l = _a(e.href);
          var n = $e(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              n.set(l, i),
              (n = u.querySelector(pu(l))) && !n._p && ((i.instance = n), (i.state.loading = 5)),
              Et.has(l) ||
                ((e = {
                  rel: 'preload',
                  as: 'style',
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Et.set(l, e),
                n || C0(u, l, e, i.state))),
            t && a === null)
          )
            throw Error(s(528, ''));
          return i;
        }
        if (t && a !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (t = e.async),
          (e = e.src),
          typeof e == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Da(e)),
              (e = $e(u).hoistableScripts),
              (a = e.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), e.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, l));
    }
  }
  function _a(l) {
    return 'href="' + ot(l) + '"';
  }
  function pu(l) {
    return 'link[rel="stylesheet"][' + l + ']';
  }
  function Xo(l) {
    return al({}, l, { 'data-precedence': l.precedence, precedence: null });
  }
  function C0(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = l.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        Zl(t, 'link', e),
        Cl(t),
        l.head.appendChild(t));
  }
  function Da(l) {
    return '[src="' + ot(l) + '"]';
  }
  function Eu(l) {
    return 'script[async]' + l;
  }
  function Qo(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = l.querySelector('style[data-href~="' + ot(e.href) + '"]');
          if (a) return (t.instance = a), Cl(a), a;
          var u = al({}, e, { 'data-href': e.href, 'data-precedence': e.precedence, href: null, precedence: null });
          return (
            (a = (l.ownerDocument || l).createElement('style')),
            Cl(a),
            Zl(a, 'style', u),
            Bn(a, e.precedence, l),
            (t.instance = a)
          );
        case 'stylesheet':
          u = _a(e.href);
          var n = l.querySelector(pu(u));
          if (n) return (t.state.loading |= 4), (t.instance = n), Cl(n), n;
          (a = Xo(e)), (u = Et.get(u)) && Fc(a, u), (n = (l.ownerDocument || l).createElement('link')), Cl(n);
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              (i.onload = c), (i.onerror = f);
            })),
            Zl(n, 'link', a),
            (t.state.loading |= 4),
            Bn(n, e.precedence, l),
            (t.instance = n)
          );
        case 'script':
          return (
            (n = Da(e.src)),
            (u = l.querySelector(Eu(n)))
              ? ((t.instance = u), Cl(u), u)
              : ((a = e),
                (u = Et.get(n)) && ((a = al({}, e)), Pc(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement('script')),
                Cl(u),
                Zl(u, 'link', a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        !(t.state.loading & 4) &&
        ((a = t.instance), (t.state.loading |= 4), Bn(a, e.precedence, l));
    return t.instance;
  }
  function Bn(l, t, e) {
    for (
      var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Pc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Gn = null;
  function Zo(l, t, e) {
    if (Gn === null) {
      var a = new Map(),
        u = (Gn = new Map());
      u.set(e, a);
    } else (u = Gn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (
        !(n[Ca] || n[Ll] || (l === 'link' && n.getAttribute('rel') === 'stylesheet')) &&
        n.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = n.getAttribute(t) || '';
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function Vo(l, t, e) {
    (l = l.ownerDocument || l), l.head.insertBefore(e, t === 'title' ? l.querySelector('head > title') : null);
  }
  function Y0(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (typeof t.rel != 'string' || typeof t.href != 'string' || t.href === '' || t.onLoad || t.onError) break;
        switch (t.rel) {
          case 'stylesheet':
            return (l = t.disabled), typeof t.precedence == 'string' && l == null;
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Lo(l) {
    return !(l.type === 'stylesheet' && !(l.state.loading & 3));
  }
  var Tu = null;
  function B0() {}
  function G0(l, t, e) {
    if (Tu === null) throw Error(s(475));
    var a = Tu;
    if (
      t.type === 'stylesheet' &&
      (typeof e.media != 'string' || matchMedia(e.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var u = _a(e.href),
          n = l.querySelector(pu(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == 'object' &&
              typeof l.then == 'function' &&
              (a.count++, (a = jn.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = n),
            Cl(n);
          return;
        }
        (n = l.ownerDocument || l), (e = Xo(e)), (u = Et.get(u)) && Fc(e, u), (n = n.createElement('link')), Cl(n);
        var i = n;
        (i._p = new Promise(function (c, f) {
          (i.onload = c), (i.onerror = f);
        })),
          Zl(n, 'link', e),
          (t.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          !(t.state.loading & 3) &&
          (a.count++, (t = jn.bind(a)), l.addEventListener('load', t), l.addEventListener('error', t));
    }
  }
  function j0() {
    if (Tu === null) throw Error(s(475));
    var l = Tu;
    return (
      l.stylesheets && l.count === 0 && Ic(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var e = setTimeout(function () {
              if ((l.stylesheets && Ic(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function jn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ic(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Xn = null;
  function Ic(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null && (l.count++, (Xn = new Map()), t.forEach(X0, l), (Xn = null), jn.call(l));
  }
  function X0(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Xn.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Xn.set(l, e);
        for (var u = l.querySelectorAll('link[data-precedence],style[data-precedence]'), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') && (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (u = t.instance),
        (i = u.getAttribute('data-precedence')),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = jn.bind(this)),
        u.addEventListener('load', a),
        u.addEventListener('error', a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l), l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var zu = { $$typeof: nl, Provider: null, Consumer: null, _currentValue: cl, _currentValue2: cl, _threadCount: 0 };
  function Q0(l, t, e, a, u, n, i, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ti(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ti(0)),
      (this.hiddenUpdates = ti(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function wo(l, t, e, a, u, n, i, c, f, h, E, A) {
    return (
      (l = new Q0(l, t, e, i, c, f, h, A)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = St(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = xi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      oc(n),
      l
    );
  }
  function Ko(l) {
    return l ? ((l = ia), l) : ia;
  }
  function Jo(l, t, e, a, u, n) {
    (u = Ko(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = se(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = oe(l, a, t)),
      e !== null && (kl(e, l, t), iu(e, l, t));
  }
  function Wo(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function lf(l, t) {
    Wo(l, t), (l = l.alternate) && Wo(l, t);
  }
  function ko(l) {
    if (l.tag === 13) {
      var t = ae(l, 67108864);
      t !== null && kl(t, l, 67108864), lf(l, 67108864);
    }
  }
  var Qn = !0;
  function Z0(l, t, e, a) {
    var u = j.T;
    j.T = null;
    var n = N.p;
    try {
      (N.p = 2), tf(l, t, e, a);
    } finally {
      (N.p = n), (j.T = u);
    }
  }
  function V0(l, t, e, a) {
    var u = j.T;
    j.T = null;
    var n = N.p;
    try {
      (N.p = 8), tf(l, t, e, a);
    } finally {
      (N.p = n), (j.T = u);
    }
  }
  function tf(l, t, e, a) {
    if (Qn) {
      var u = ef(a);
      if (u === null) Vc(l, t, a, Zn, e), Fo(l, a);
      else if (w0(u, l, t, e, a)) a.stopPropagation();
      else if ((Fo(l, a), t & 4 && -1 < L0.indexOf(l))) {
        for (; u !== null; ) {
          var n = ke(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Oe(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - ut(i));
                      (c.entanglements[1] |= f), (i &= ~f);
                    }
                    qt(n), !(zl & 6) && ((On = Rt() + 500), gu(0));
                  }
                }
                break;
              case 13:
                (c = ae(n, 2)), c !== null && kl(c, n, 2), Dn(), lf(n, 2);
            }
          if (((n = ef(a)), n === null && Vc(l, t, a, Zn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Vc(l, t, a, null, e);
    }
  }
  function ef(l) {
    return (l = fi(l)), af(l);
  }
  var Zn = null;
  function af(l) {
    if (((Zn = null), (l = Me(l)), l !== null)) {
      var t = X(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = rl(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Zn = l), null;
  }
  function $o(l) {
    switch (l) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Rd()) {
          case Sf:
            return 2;
          case pf:
            return 8;
          case Yu:
          case Ud:
            return 32;
          case Ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = !1,
    be = null,
    Se = null,
    pe = null,
    Au = new Map(),
    Ou = new Map(),
    Ee = [],
    L0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Fo(l, t) {
    switch (l) {
      case 'focusin':
      case 'focusout':
        be = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Se = null;
        break;
      case 'mouseover':
      case 'mouseout':
        pe = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Au.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ou.delete(t.pointerId);
    }
  }
  function Mu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }),
        t !== null && ((t = ke(t)), t !== null && ko(t)),
        l)
      : ((l.eventSystemFlags |= a), (t = l.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function w0(l, t, e, a, u) {
    switch (t) {
      case 'focusin':
        return (be = Mu(be, l, t, e, a, u)), !0;
      case 'dragenter':
        return (Se = Mu(Se, l, t, e, a, u)), !0;
      case 'mouseover':
        return (pe = Mu(pe, l, t, e, a, u)), !0;
      case 'pointerover':
        var n = u.pointerId;
        return Au.set(n, Mu(Au.get(n) || null, l, t, e, a, u)), !0;
      case 'gotpointercapture':
        return (n = u.pointerId), Ou.set(n, Mu(Ou.get(n) || null, l, t, e, a, u)), !0;
    }
    return !1;
  }
  function Po(l) {
    var t = Me(l.target);
    if (t !== null) {
      var e = X(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = rl(e)), t !== null)) {
            (l.blockedOn = t),
              jd(l.priority, function () {
                if (e.tag === 13) {
                  var a = rt(),
                    u = ae(e, a);
                  u !== null && kl(u, e, a), lf(e, a);
                }
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Vn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = ef(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (ci = a), e.target.dispatchEvent(a), (ci = null);
      } else return (t = ke(e)), t !== null && ko(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function Io(l, t, e) {
    Vn(l) && e.delete(t);
  }
  function K0() {
    (uf = !1),
      be !== null && Vn(be) && (be = null),
      Se !== null && Vn(Se) && (Se = null),
      pe !== null && Vn(pe) && (pe = null),
      Au.forEach(Io),
      Ou.forEach(Io);
  }
  function Ln(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null), uf || ((uf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, K0)));
  }
  var wn = null;
  function ld(l) {
    wn !== l &&
      ((wn = l),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        wn === l && (wn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != 'function') {
            if (af(a || e) === null) continue;
            break;
          }
          var n = ke(e);
          n !== null && (l.splice(t, 3), (t -= 3), Ji(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function _u(l) {
    function t(f) {
      return Ln(f, l);
    }
    be !== null && Ln(be, l), Se !== null && Ln(Se, l), pe !== null && Ln(pe, l), Au.forEach(t), Ou.forEach(t);
    for (var e = 0; e < Ee.length; e++) {
      var a = Ee[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ee.length && ((e = Ee[0]), e.blockedOn === null); ) Po(e), e.blockedOn === null && Ee.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Fl] || null;
        if (typeof n == 'function') i || ld(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute('formAction')) {
            if (((u = n), (i = n[Fl] || null))) c = i.formAction;
            else if (af(u) !== null) continue;
          } else c = i.action;
          typeof c == 'function' ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)), ld(e);
        }
      }
  }
  function nf(l) {
    this._internalRoot = l;
  }
  (Kn.prototype.render = nf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var e = t.current,
        a = rt();
      Jo(e, a, l, t, null, null);
    }),
    (Kn.prototype.unmount = nf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          l.tag === 0 && za(), Jo(l.current, 2, null, l, null, null), Dn(), (t[We] = null);
        }
      });
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = _f();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Ee.length && t !== 0 && t < Ee[e].priority; e++);
      Ee.splice(e, 0, l), e === 0 && Po(l);
    }
  };
  var td = b.version;
  if (td !== '19.0.0') throw Error(s(527, td, '19.0.0'));
  N.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == 'function' ? Error(s(188)) : ((l = Object.keys(l).join(',')), Error(s(268, l)));
    return (l = z(t)), (l = l !== null ? V(l) : null), (l = l === null ? null : l.stateNode), l;
  };
  var J0 = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: j,
    findFiberByHostInstance: Me,
    reconcilerVersion: '19.0.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (Ha = Jn.inject(J0)), (at = Jn);
      } catch {}
  }
  return (
    (Ru.createRoot = function (l, t) {
      if (!M(l)) throw Error(s(299));
      var e = !1,
        a = '',
        u = gs,
        n = bs,
        i = Ss,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)),
        (t = wo(l, 1, !1, null, null, e, a, u, n, i, c, null)),
        (l[We] = t.current),
        Zc(l.nodeType === 8 ? l.parentNode : l),
        new nf(t)
      );
    }),
    (Ru.hydrateRoot = function (l, t, e) {
      if (!M(l)) throw Error(s(299));
      var a = !1,
        u = '',
        n = gs,
        i = bs,
        c = Ss,
        f = null,
        h = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (h = e.formState)),
        (t = wo(l, 1, !0, t, e ?? null, a, u, n, i, c, f, h)),
        (t.context = Ko(null)),
        (e = t.current),
        (a = rt()),
        (u = se(a)),
        (u.callback = null),
        oe(e, u, a),
        (t.current.lanes = a),
        qa(t, a),
        qt(t),
        (l[We] = t.current),
        Zc(l),
        new Kn(t)
      );
    }),
    (Ru.version = '19.0.0'),
    Ru
  );
}
var dd;
function ny() {
  if (dd) return ff.exports;
  dd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (b) {
        console.error(b);
      }
  }
  return r(), (ff.exports = uy()), ff.exports;
}
var iy = ny(),
  kn = gf();
const Wn = new Map(),
  pd = r => {
    const b = kn.useRef(!1),
      g = kn.useSyncExternalStore(r.subscribe, r.getSnapshot);
    return (
      Wn.has(r) || Wn.set(r, cy(r.get())),
      (g !== null || b.current) && (Wn.set(r, { read: () => g }), (b.current = !0)),
      g ?? Wn.get(r).read()
    );
  },
  cy = r => {
    let b = 'pending',
      g;
    const s = r.then(
      M => {
        (b = 'success'), (g = M);
      },
      M => {
        (b = 'error'), (g = M);
      },
    );
    return {
      read() {
        switch (b) {
          case 'pending':
            throw s;
          case 'error':
            throw g;
          default:
            return g;
        }
      },
    };
  };
function fy(r, b) {
  return function (s) {
    return tt.jsx(kn.Suspense, { fallback: b, children: tt.jsx(r, { ...s }) });
  };
}
class ry extends kn.Component {
  constructor() {
    super(...arguments);
    ed(this, 'state', { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(g, s) {
    console.error(g, s);
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
function sy(r, b) {
  return function (s) {
    return tt.jsx(ry, { fallback: b, children: tt.jsx(r, { ...s }) });
  };
}
var Hu;
(function (r) {
  (r.Local = 'local'), (r.Sync = 'sync'), (r.Managed = 'managed'), (r.Session = 'session');
})(Hu || (Hu = {}));
var vf;
(function (r) {
  (r.ExtensionPagesOnly = 'TRUSTED_CONTEXTS'), (r.ExtensionPagesAndContentScripts = 'TRUSTED_AND_UNTRUSTED_CONTEXTS');
})(vf || (vf = {}));
const lt = globalThis.chrome,
  hd = async (r, b) => {
    const g = M => typeof M == 'function',
      s = M => M instanceof Promise;
    return g(r) ? (s(r), r(b)) : r;
  };
let yd = !1;
function vd(r) {
  if (lt && lt.storage[r] === void 0)
    throw new Error(`Check your storage permission in manifest.json: ${r} is not defined`);
}
function oy(r, b, g) {
  var F, P;
  let s = null,
    M = !1,
    _ = [];
  const x = (g == null ? void 0 : g.storageEnum) ?? Hu.Local,
    U = ((F = g == null ? void 0 : g.serialization) == null ? void 0 : F.serialize) ?? (O => O),
    D = ((P = g == null ? void 0 : g.serialization) == null ? void 0 : P.deserialize) ?? (O => O);
  yd === !1 &&
    x === Hu.Session &&
    (g == null ? void 0 : g.sessionAccessForContentScripts) === !0 &&
    (vd(x),
    lt == null ||
      lt.storage[x].setAccessLevel({ accessLevel: vf.ExtensionPagesAndContentScripts }).catch(O => {
        console.warn(O), console.warn('Please call setAccessLevel into different context, like a background script.');
      }),
    (yd = !0));
  const p = async () => {
      vd(x);
      const O = await (lt == null ? void 0 : lt.storage[x].get([r]));
      return O ? (D(O[r]) ?? b) : b;
    },
    B = () => {
      _.forEach(O => O());
    },
    J = async O => {
      M || (s = await p()), (s = await hd(O, s)), await (lt == null ? void 0 : lt.storage[x].set({ [r]: U(s) })), B();
    },
    W = O => (
      (_ = [..._, O]),
      () => {
        _ = _.filter(H => H !== O);
      }
    ),
    nl = () => s;
  p().then(O => {
    (s = O), (M = !0), B();
  });
  async function hl(O) {
    if (O[r] === void 0) return;
    const H = D(O[r].newValue);
    s !== H && ((s = await hd(H, s)), B());
  }
  return lt == null || lt.storage[x].onChanged.addListener(hl), { get: p, set: J, getSnapshot: nl, subscribe: W };
}
const md = oy('theme-storage-key', 'light', { storageEnum: Hu.Local }),
  $n = {
    ...md,
    toggle: async () => {
      await md.set(r => (r === 'light' ? 'dark' : 'light'));
    },
  };
function Ed(r) {
  var b,
    g,
    s = '';
  if (typeof r == 'string' || typeof r == 'number') s += r;
  else if (typeof r == 'object')
    if (Array.isArray(r)) {
      var M = r.length;
      for (b = 0; b < M; b++) r[b] && (g = Ed(r[b])) && (s && (s += ' '), (s += g));
    } else for (g in r) r[g] && (s && (s += ' '), (s += g));
  return s;
}
function dy() {
  for (var r, b, g = 0, s = '', M = arguments.length; g < M; g++)
    (r = arguments[g]) && (b = Ed(r)) && (s && (s += ' '), (s += b));
  return s;
}
const bf = '-',
  hy = r => {
    const b = vy(r),
      { conflictingClassGroups: g, conflictingClassGroupModifiers: s } = r;
    return {
      getClassGroupId: x => {
        const U = x.split(bf);
        return U[0] === '' && U.length !== 1 && U.shift(), Td(U, b) || yy(x);
      },
      getConflictingClassGroupIds: (x, U) => {
        const D = g[x] || [];
        return U && s[x] ? [...D, ...s[x]] : D;
      },
    };
  },
  Td = (r, b) => {
    var x;
    if (r.length === 0) return b.classGroupId;
    const g = r[0],
      s = b.nextPart.get(g),
      M = s ? Td(r.slice(1), s) : void 0;
    if (M) return M;
    if (b.validators.length === 0) return;
    const _ = r.join(bf);
    return (x = b.validators.find(({ validator: U }) => U(_))) == null ? void 0 : x.classGroupId;
  },
  gd = /^\[(.+)\]$/,
  yy = r => {
    if (gd.test(r)) {
      const b = gd.exec(r)[1],
        g = b == null ? void 0 : b.substring(0, b.indexOf(':'));
      if (g) return 'arbitrary..' + g;
    }
  },
  vy = r => {
    const { theme: b, prefix: g } = r,
      s = { nextPart: new Map(), validators: [] };
    return (
      gy(Object.entries(r.classGroups), g).forEach(([_, x]) => {
        mf(x, s, _, b);
      }),
      s
    );
  },
  mf = (r, b, g, s) => {
    r.forEach(M => {
      if (typeof M == 'string') {
        const _ = M === '' ? b : bd(b, M);
        _.classGroupId = g;
        return;
      }
      if (typeof M == 'function') {
        if (my(M)) {
          mf(M(s), b, g, s);
          return;
        }
        b.validators.push({ validator: M, classGroupId: g });
        return;
      }
      Object.entries(M).forEach(([_, x]) => {
        mf(x, bd(b, _), g, s);
      });
    });
  },
  bd = (r, b) => {
    let g = r;
    return (
      b.split(bf).forEach(s => {
        g.nextPart.has(s) || g.nextPart.set(s, { nextPart: new Map(), validators: [] }), (g = g.nextPart.get(s));
      }),
      g
    );
  },
  my = r => r.isThemeGetter,
  gy = (r, b) =>
    b
      ? r.map(([g, s]) => {
          const M = s.map(_ =>
            typeof _ == 'string'
              ? b + _
              : typeof _ == 'object'
                ? Object.fromEntries(Object.entries(_).map(([x, U]) => [b + x, U]))
                : _,
          );
          return [g, M];
        })
      : r,
  by = r => {
    if (r < 1) return { get: () => {}, set: () => {} };
    let b = 0,
      g = new Map(),
      s = new Map();
    const M = (_, x) => {
      g.set(_, x), b++, b > r && ((b = 0), (s = g), (g = new Map()));
    };
    return {
      get(_) {
        let x = g.get(_);
        if (x !== void 0) return x;
        if ((x = s.get(_)) !== void 0) return M(_, x), x;
      },
      set(_, x) {
        g.has(_) ? g.set(_, x) : M(_, x);
      },
    };
  },
  zd = '!',
  Sy = r => {
    const { separator: b, experimentalParseClassName: g } = r,
      s = b.length === 1,
      M = b[0],
      _ = b.length,
      x = U => {
        const D = [];
        let p = 0,
          B = 0,
          J;
        for (let P = 0; P < U.length; P++) {
          let O = U[P];
          if (p === 0) {
            if (O === M && (s || U.slice(P, P + _) === b)) {
              D.push(U.slice(B, P)), (B = P + _);
              continue;
            }
            if (O === '/') {
              J = P;
              continue;
            }
          }
          O === '[' ? p++ : O === ']' && p--;
        }
        const W = D.length === 0 ? U : U.substring(B),
          nl = W.startsWith(zd),
          hl = nl ? W.substring(1) : W,
          F = J && J > B ? J - B : void 0;
        return { modifiers: D, hasImportantModifier: nl, baseClassName: hl, maybePostfixModifierPosition: F };
      };
    return g ? U => g({ className: U, parseClassName: x }) : x;
  },
  py = r => {
    if (r.length <= 1) return r;
    const b = [];
    let g = [];
    return (
      r.forEach(s => {
        s[0] === '[' ? (b.push(...g.sort(), s), (g = [])) : g.push(s);
      }),
      b.push(...g.sort()),
      b
    );
  },
  Ey = r => ({ cache: by(r.cacheSize), parseClassName: Sy(r), ...hy(r) }),
  Ty = /\s+/,
  zy = (r, b) => {
    const { parseClassName: g, getClassGroupId: s, getConflictingClassGroupIds: M } = b,
      _ = [],
      x = r.trim().split(Ty);
    let U = '';
    for (let D = x.length - 1; D >= 0; D -= 1) {
      const p = x[D],
        { modifiers: B, hasImportantModifier: J, baseClassName: W, maybePostfixModifierPosition: nl } = g(p);
      let hl = !!nl,
        F = s(hl ? W.substring(0, nl) : W);
      if (!F) {
        if (!hl) {
          U = p + (U.length > 0 ? ' ' + U : U);
          continue;
        }
        if (((F = s(W)), !F)) {
          U = p + (U.length > 0 ? ' ' + U : U);
          continue;
        }
        hl = !1;
      }
      const P = py(B).join(':'),
        O = J ? P + zd : P,
        H = O + F;
      if (_.includes(H)) continue;
      _.push(H);
      const w = M(F, hl);
      for (let yl = 0; yl < w.length; ++yl) {
        const G = w[yl];
        _.push(O + G);
      }
      U = p + (U.length > 0 ? ' ' + U : U);
    }
    return U;
  };
function Ay() {
  let r = 0,
    b,
    g,
    s = '';
  for (; r < arguments.length; ) (b = arguments[r++]) && (g = Ad(b)) && (s && (s += ' '), (s += g));
  return s;
}
const Ad = r => {
  if (typeof r == 'string') return r;
  let b,
    g = '';
  for (let s = 0; s < r.length; s++) r[s] && (b = Ad(r[s])) && (g && (g += ' '), (g += b));
  return g;
};
function Oy(r, ...b) {
  let g,
    s,
    M,
    _ = x;
  function x(D) {
    const p = b.reduce((B, J) => J(B), r());
    return (g = Ey(p)), (s = g.cache.get), (M = g.cache.set), (_ = U), U(D);
  }
  function U(D) {
    const p = s(D);
    if (p) return p;
    const B = zy(D, g);
    return M(D, B), B;
  }
  return function () {
    return _(Ay.apply(null, arguments));
  };
}
const pl = r => {
    const b = g => g[r] || [];
    return (b.isThemeGetter = !0), b;
  },
  Od = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  My = /^\d+\/\d+$/,
  _y = new Set(['px', 'full', 'screen']),
  Dy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ry =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Uy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  xy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Hy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Pt = r => Ra(r) || _y.has(r) || My.test(r),
  ze = r => Ua(r, 'length', Xy),
  Ra = r => !!r && !Number.isNaN(Number(r)),
  hf = r => Ua(r, 'number', Ra),
  Uu = r => !!r && Number.isInteger(Number(r)),
  Ny = r => r.endsWith('%') && Ra(r.slice(0, -1)),
  $ = r => Od.test(r),
  Ae = r => Dy.test(r),
  qy = new Set(['length', 'size', 'percentage']),
  Cy = r => Ua(r, qy, Md),
  Yy = r => Ua(r, 'position', Md),
  By = new Set(['image', 'url']),
  Gy = r => Ua(r, By, Zy),
  jy = r => Ua(r, '', Qy),
  xu = () => !0,
  Ua = (r, b, g) => {
    const s = Od.exec(r);
    return s ? (s[1] ? (typeof b == 'string' ? s[1] === b : b.has(s[1])) : g(s[2])) : !1;
  },
  Xy = r => Ry.test(r) && !Uy.test(r),
  Md = () => !1,
  Qy = r => xy.test(r),
  Zy = r => Hy.test(r),
  Vy = () => {
    const r = pl('colors'),
      b = pl('spacing'),
      g = pl('blur'),
      s = pl('brightness'),
      M = pl('borderColor'),
      _ = pl('borderRadius'),
      x = pl('borderSpacing'),
      U = pl('borderWidth'),
      D = pl('contrast'),
      p = pl('grayscale'),
      B = pl('hueRotate'),
      J = pl('invert'),
      W = pl('gap'),
      nl = pl('gradientColorStops'),
      hl = pl('gradientColorStopPositions'),
      F = pl('inset'),
      P = pl('margin'),
      O = pl('opacity'),
      H = pl('padding'),
      w = pl('saturate'),
      yl = pl('scale'),
      G = pl('sepia'),
      Hl = pl('skew'),
      Tt = pl('space'),
      zt = pl('translate'),
      j = () => ['auto', 'contain', 'none'],
      al = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      Vl = () => ['auto', $, b],
      il = () => [$, b],
      et = () => ['', Pt, ze],
      $l = () => ['auto', Ra, $],
      jl = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
      R = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      L = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      X = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      rl = () => ['', '0', $],
      o = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      z = () => [Ra, $];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [xu],
        spacing: [Pt, ze],
        blur: ['none', '', Ae, $],
        brightness: z(),
        borderColor: [r],
        borderRadius: ['none', '', 'full', Ae, $],
        borderSpacing: il(),
        borderWidth: et(),
        contrast: z(),
        grayscale: rl(),
        hueRotate: z(),
        invert: rl(),
        gap: il(),
        gradientColorStops: [r],
        gradientColorStopPositions: [Ny, ze],
        inset: Vl(),
        margin: Vl(),
        opacity: z(),
        padding: il(),
        saturate: z(),
        scale: z(),
        sepia: rl(),
        skew: z(),
        space: il(),
        translate: il(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', $] }],
        container: ['container'],
        columns: [{ columns: [Ae] }],
        'break-after': [{ 'break-after': o() }],
        'break-before': [{ 'break-before': o() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: [...jl(), $] }],
        overflow: [{ overflow: al() }],
        'overflow-x': [{ 'overflow-x': al() }],
        'overflow-y': [{ 'overflow-y': al() }],
        overscroll: [{ overscroll: j() }],
        'overscroll-x': [{ 'overscroll-x': j() }],
        'overscroll-y': [{ 'overscroll-y': j() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [F] }],
        'inset-x': [{ 'inset-x': [F] }],
        'inset-y': [{ 'inset-y': [F] }],
        start: [{ start: [F] }],
        end: [{ end: [F] }],
        top: [{ top: [F] }],
        right: [{ right: [F] }],
        bottom: [{ bottom: [F] }],
        left: [{ left: [F] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', Uu, $] }],
        basis: [{ basis: Vl() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', $] }],
        grow: [{ grow: rl() }],
        shrink: [{ shrink: rl() }],
        order: [{ order: ['first', 'last', 'none', Uu, $] }],
        'grid-cols': [{ 'grid-cols': [xu] }],
        'col-start-end': [{ col: ['auto', { span: ['full', Uu, $] }, $] }],
        'col-start': [{ 'col-start': $l() }],
        'col-end': [{ 'col-end': $l() }],
        'grid-rows': [{ 'grid-rows': [xu] }],
        'row-start-end': [{ row: ['auto', { span: [Uu, $] }, $] }],
        'row-start': [{ 'row-start': $l() }],
        'row-end': [{ 'row-end': $l() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', $] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', $] }],
        gap: [{ gap: [W] }],
        'gap-x': [{ 'gap-x': [W] }],
        'gap-y': [{ 'gap-y': [W] }],
        'justify-content': [{ justify: ['normal', ...X()] }],
        'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
        'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        'align-content': [{ content: ['normal', ...X(), 'baseline'] }],
        'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
        'place-content': [{ 'place-content': [...X(), 'baseline'] }],
        'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        p: [{ p: [H] }],
        px: [{ px: [H] }],
        py: [{ py: [H] }],
        ps: [{ ps: [H] }],
        pe: [{ pe: [H] }],
        pt: [{ pt: [H] }],
        pr: [{ pr: [H] }],
        pb: [{ pb: [H] }],
        pl: [{ pl: [H] }],
        m: [{ m: [P] }],
        mx: [{ mx: [P] }],
        my: [{ my: [P] }],
        ms: [{ ms: [P] }],
        me: [{ me: [P] }],
        mt: [{ mt: [P] }],
        mr: [{ mr: [P] }],
        mb: [{ mb: [P] }],
        ml: [{ ml: [P] }],
        'space-x': [{ 'space-x': [Tt] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [Tt] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', $, b] }],
        'min-w': [{ 'min-w': [$, b, 'min', 'max', 'fit'] }],
        'max-w': [{ 'max-w': [$, b, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Ae] }, Ae] }],
        h: [{ h: [$, b, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [$, b, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [$, b, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [$, b, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', Ae, ze] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          { font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', hf] },
        ],
        'font-family': [{ font: [xu] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
        tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', $] }],
        'line-clamp': [{ 'line-clamp': ['none', Ra, hf] }],
        leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', Pt, $] }],
        'list-image': [{ 'list-image': ['none', $] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', $] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [r] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [O] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'text-color': [{ text: [r] }],
        'text-opacity': [{ 'text-opacity': [O] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...R(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', Pt, ze] }],
        'underline-offset': [{ 'underline-offset': ['auto', Pt, $] }],
        'text-decoration-color': [{ decoration: [r] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: il() }],
        'vertical-align': [
          { align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', $] },
        ],
        whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', $] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [O] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...jl(), Yy] }],
        'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', Cy] }],
        'bg-image': [{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Gy] }],
        'bg-color': [{ bg: [r] }],
        'gradient-from-pos': [{ from: [hl] }],
        'gradient-via-pos': [{ via: [hl] }],
        'gradient-to-pos': [{ to: [hl] }],
        'gradient-from': [{ from: [nl] }],
        'gradient-via': [{ via: [nl] }],
        'gradient-to': [{ to: [nl] }],
        rounded: [{ rounded: [_] }],
        'rounded-s': [{ 'rounded-s': [_] }],
        'rounded-e': [{ 'rounded-e': [_] }],
        'rounded-t': [{ 'rounded-t': [_] }],
        'rounded-r': [{ 'rounded-r': [_] }],
        'rounded-b': [{ 'rounded-b': [_] }],
        'rounded-l': [{ 'rounded-l': [_] }],
        'rounded-ss': [{ 'rounded-ss': [_] }],
        'rounded-se': [{ 'rounded-se': [_] }],
        'rounded-ee': [{ 'rounded-ee': [_] }],
        'rounded-es': [{ 'rounded-es': [_] }],
        'rounded-tl': [{ 'rounded-tl': [_] }],
        'rounded-tr': [{ 'rounded-tr': [_] }],
        'rounded-br': [{ 'rounded-br': [_] }],
        'rounded-bl': [{ 'rounded-bl': [_] }],
        'border-w': [{ border: [U] }],
        'border-w-x': [{ 'border-x': [U] }],
        'border-w-y': [{ 'border-y': [U] }],
        'border-w-s': [{ 'border-s': [U] }],
        'border-w-e': [{ 'border-e': [U] }],
        'border-w-t': [{ 'border-t': [U] }],
        'border-w-r': [{ 'border-r': [U] }],
        'border-w-b': [{ 'border-b': [U] }],
        'border-w-l': [{ 'border-l': [U] }],
        'border-opacity': [{ 'border-opacity': [O] }],
        'border-style': [{ border: [...R(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [U] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [U] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [O] }],
        'divide-style': [{ divide: R() }],
        'border-color': [{ border: [M] }],
        'border-color-x': [{ 'border-x': [M] }],
        'border-color-y': [{ 'border-y': [M] }],
        'border-color-t': [{ 'border-t': [M] }],
        'border-color-r': [{ 'border-r': [M] }],
        'border-color-b': [{ 'border-b': [M] }],
        'border-color-l': [{ 'border-l': [M] }],
        'divide-color': [{ divide: [M] }],
        'outline-style': [{ outline: ['', ...R()] }],
        'outline-offset': [{ 'outline-offset': [Pt, $] }],
        'outline-w': [{ outline: [Pt, ze] }],
        'outline-color': [{ outline: [r] }],
        'ring-w': [{ ring: et() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [r] }],
        'ring-opacity': [{ 'ring-opacity': [O] }],
        'ring-offset-w': [{ 'ring-offset': [Pt, ze] }],
        'ring-offset-color': [{ 'ring-offset': [r] }],
        shadow: [{ shadow: ['', 'inner', 'none', Ae, jy] }],
        'shadow-color': [{ shadow: [xu] }],
        opacity: [{ opacity: [O] }],
        'mix-blend': [{ 'mix-blend': [...L(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': L() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [g] }],
        brightness: [{ brightness: [s] }],
        contrast: [{ contrast: [D] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', Ae, $] }],
        grayscale: [{ grayscale: [p] }],
        'hue-rotate': [{ 'hue-rotate': [B] }],
        invert: [{ invert: [J] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [G] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [g] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [s] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [D] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [p] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [B] }],
        'backdrop-invert': [{ 'backdrop-invert': [J] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [O] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [w] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [G] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [x] }],
        'border-spacing-x': [{ 'border-spacing-x': [x] }],
        'border-spacing-y': [{ 'border-spacing-y': [x] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', $] }],
        duration: [{ duration: z() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', $] }],
        delay: [{ delay: z() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', $] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [yl] }],
        'scale-x': [{ 'scale-x': [yl] }],
        'scale-y': [{ 'scale-y': [yl] }],
        rotate: [{ rotate: [Uu, $] }],
        'translate-x': [{ 'translate-x': [zt] }],
        'translate-y': [{ 'translate-y': [zt] }],
        'skew-x': [{ 'skew-x': [Hl] }],
        'skew-y': [{ 'skew-y': [Hl] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              $,
            ],
          },
        ],
        accent: [{ accent: ['auto', r] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              $,
            ],
          },
        ],
        'caret-color': [{ caret: [r] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': il() }],
        'scroll-mx': [{ 'scroll-mx': il() }],
        'scroll-my': [{ 'scroll-my': il() }],
        'scroll-ms': [{ 'scroll-ms': il() }],
        'scroll-me': [{ 'scroll-me': il() }],
        'scroll-mt': [{ 'scroll-mt': il() }],
        'scroll-mr': [{ 'scroll-mr': il() }],
        'scroll-mb': [{ 'scroll-mb': il() }],
        'scroll-ml': [{ 'scroll-ml': il() }],
        'scroll-p': [{ 'scroll-p': il() }],
        'scroll-px': [{ 'scroll-px': il() }],
        'scroll-py': [{ 'scroll-py': il() }],
        'scroll-ps': [{ 'scroll-ps': il() }],
        'scroll-pe': [{ 'scroll-pe': il() }],
        'scroll-pt': [{ 'scroll-pt': il() }],
        'scroll-pr': [{ 'scroll-pr': il() }],
        'scroll-pb': [{ 'scroll-pb': il() }],
        'scroll-pl': [{ 'scroll-pl': il() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', $] }],
        fill: [{ fill: [r, 'none'] }],
        'stroke-w': [{ stroke: [Pt, ze, hf] }],
        stroke: [{ stroke: [r, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    };
  },
  Ly = Oy(Vy),
  wy = (...r) => Ly(dy(r)),
  Ky = ({ className: r, children: b, ...g }) => {
    const s = pd($n);
    return tt.jsx('button', {
      className: wy(
        r,
        'py-1 px-4 rounded shadow hover:scale-105',
        s === 'light' ? 'bg-white text-black' : 'bg-black text-white',
        s === 'light' ? 'border-black' : 'border-white',
        'mt-4 border-2 font-bold',
      ),
      onClick: $n.toggle,
      ...g,
      children: b,
    });
  };
var yf, Sd;
function Jy() {
  if (Sd) return yf;
  Sd = 1;
  var r = function (H) {
    return b(H) && !g(H);
  };
  function b(O) {
    return !!O && typeof O == 'object';
  }
  function g(O) {
    var H = Object.prototype.toString.call(O);
    return H === '[object RegExp]' || H === '[object Date]' || _(O);
  }
  var s = typeof Symbol == 'function' && Symbol.for,
    M = s ? Symbol.for('react.element') : 60103;
  function _(O) {
    return O.$$typeof === M;
  }
  function x(O) {
    return Array.isArray(O) ? [] : {};
  }
  function U(O, H) {
    return H.clone !== !1 && H.isMergeableObject(O) ? F(x(O), O, H) : O;
  }
  function D(O, H, w) {
    return O.concat(H).map(function (yl) {
      return U(yl, w);
    });
  }
  function p(O, H) {
    if (!H.customMerge) return F;
    var w = H.customMerge(O);
    return typeof w == 'function' ? w : F;
  }
  function B(O) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(O).filter(function (H) {
          return Object.propertyIsEnumerable.call(O, H);
        })
      : [];
  }
  function J(O) {
    return Object.keys(O).concat(B(O));
  }
  function W(O, H) {
    try {
      return H in O;
    } catch {
      return !1;
    }
  }
  function nl(O, H) {
    return W(O, H) && !(Object.hasOwnProperty.call(O, H) && Object.propertyIsEnumerable.call(O, H));
  }
  function hl(O, H, w) {
    var yl = {};
    return (
      w.isMergeableObject(O) &&
        J(O).forEach(function (G) {
          yl[G] = U(O[G], w);
        }),
      J(H).forEach(function (G) {
        nl(O, G) || (W(O, G) && w.isMergeableObject(H[G]) ? (yl[G] = p(G, w)(O[G], H[G], w)) : (yl[G] = U(H[G], w)));
      }),
      yl
    );
  }
  function F(O, H, w) {
    (w = w || {}),
      (w.arrayMerge = w.arrayMerge || D),
      (w.isMergeableObject = w.isMergeableObject || r),
      (w.cloneUnlessOtherwiseSpecified = U);
    var yl = Array.isArray(H),
      G = Array.isArray(O),
      Hl = yl === G;
    return Hl ? (yl ? w.arrayMerge(O, H, w) : hl(O, H, w)) : U(H, w);
  }
  F.all = function (H, w) {
    if (!Array.isArray(H)) throw new Error('first argument should be an array');
    return H.reduce(function (yl, G) {
      return F(yl, G, w);
    }, {});
  };
  var P = F;
  return (yf = P), yf;
}
Jy();
const Wy = (r, b) => chrome.i18n.getMessage(r, b),
  ky = Wy,
  $y = () => {
    const b = pd($n) === 'light',
      g = b ? 'options/logo_horizontal.svg' : 'options/logo_horizontal_dark.svg',
      s = () => chrome.tabs.create({ url: 'https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite' });
    return tt.jsxs('div', {
      className: `App ${b ? 'bg-slate-50 text-gray-900' : 'bg-gray-800 text-gray-100'}`,
      children: [
        tt.jsx('button', {
          onClick: s,
          children: tt.jsx('img', { src: chrome.runtime.getURL(g), className: 'App-logo', alt: 'logo' }),
        }),
        tt.jsxs('p', { children: ['Edit ', tt.jsx('code', { children: 'pages/options/src/Options.tsx' })] }),
        tt.jsx(Ky, { onClick: $n.toggle, children: ky('toggleTheme') }),
      ],
    });
  },
  Fy = sy(fy($y, tt.jsx('div', { children: ' Loading ... ' })), tt.jsx('div', { children: ' Error Occur ' }));
function Py() {
  const r = document.querySelector('#app-container');
  if (!r) throw new Error('Can not find #app-container');
  iy.createRoot(r).render(tt.jsx(Fy, {}));
}
Py();
