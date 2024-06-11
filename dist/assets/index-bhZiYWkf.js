var $x = Object.defineProperty;
var kx = (e, t, n) =>
  t in e
    ? $x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Tu = (e, t, n) => (kx(e, typeof t != "symbol" ? t + "" : t, n), n);
function Rx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Dm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lm = { exports: {} },
  qa = {},
  Vm = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = Symbol.for("react.element"),
  jx = Symbol.for("react.portal"),
  Nx = Symbol.for("react.fragment"),
  Px = Symbol.for("react.strict_mode"),
  Tx = Symbol.for("react.profiler"),
  Mx = Symbol.for("react.provider"),
  Ox = Symbol.for("react.context"),
  Ax = Symbol.for("react.forward_ref"),
  Ix = Symbol.for("react.suspense"),
  Fx = Symbol.for("react.memo"),
  Dx = Symbol.for("react.lazy"),
  Cp = Symbol.iterator;
function Lx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cp && e[Cp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bm = Object.assign,
  Um = {};
function Es(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Um),
    (this.updater = n || zm);
}
Es.prototype.isReactComponent = {};
Es.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Es.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hm() {}
Hm.prototype = Es.prototype;
function Wd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Um),
    (this.updater = n || zm);
}
var Zd = (Wd.prototype = new Hm());
Zd.constructor = Wd;
Bm(Zd, Es.prototype);
Zd.isPureReactComponent = !0;
var bp = Array.isArray,
  Wm = Object.prototype.hasOwnProperty,
  Gd = { current: null },
  Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Wm.call(t, r) && !Zm.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ji,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Gd.current,
  };
}
function Vx(e, t) {
  return {
    $$typeof: Ji,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Kd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ji;
}
function zx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ep = /\/+/g;
function Mu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zx("" + e.key)
    : t.toString(36);
}
function Wl(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ji:
          case jx:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Mu(i, 0) : r),
      bp(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ep, "$&/") + "/"),
          Wl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Kd(o) &&
            (o = Vx(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ep, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), bp(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Mu(s, l);
      i += Wl(s, t, n, a, o);
    }
  else if (((a = Lx(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Mu(s, l++)), (i += Wl(s, t, n, a, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function hl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Wl(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Bx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Et = { current: null },
  Zl = { transition: null },
  Ux = {
    ReactCurrentDispatcher: Et,
    ReactCurrentBatchConfig: Zl,
    ReactCurrentOwner: Gd,
  };
function Km() {
  throw Error("act(...) is not supported in production builds of React.");
}
me.Children = {
  map: hl,
  forEach: function (e, t, n) {
    hl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Kd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
me.Component = Es;
me.Fragment = Nx;
me.Profiler = Tx;
me.PureComponent = Wd;
me.StrictMode = Px;
me.Suspense = Ix;
me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ux;
me.act = Km;
me.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bm({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Gd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Wm.call(t, a) &&
        !Zm.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ji, type: e.type, key: o, ref: s, props: r, _owner: i };
};
me.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ox,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mx, _context: e }),
    (e.Consumer = e)
  );
};
me.createElement = Gm;
me.createFactory = function (e) {
  var t = Gm.bind(null, e);
  return (t.type = e), t;
};
me.createRef = function () {
  return { current: null };
};
me.forwardRef = function (e) {
  return { $$typeof: Ax, render: e };
};
me.isValidElement = Kd;
me.lazy = function (e) {
  return { $$typeof: Dx, _payload: { _status: -1, _result: e }, _init: Bx };
};
me.memo = function (e, t) {
  return { $$typeof: Fx, type: e, compare: t === void 0 ? null : t };
};
me.startTransition = function (e) {
  var t = Zl.transition;
  Zl.transition = {};
  try {
    e();
  } finally {
    Zl.transition = t;
  }
};
me.unstable_act = Km;
me.useCallback = function (e, t) {
  return Et.current.useCallback(e, t);
};
me.useContext = function (e) {
  return Et.current.useContext(e);
};
me.useDebugValue = function () {};
me.useDeferredValue = function (e) {
  return Et.current.useDeferredValue(e);
};
me.useEffect = function (e, t) {
  return Et.current.useEffect(e, t);
};
me.useId = function () {
  return Et.current.useId();
};
me.useImperativeHandle = function (e, t, n) {
  return Et.current.useImperativeHandle(e, t, n);
};
me.useInsertionEffect = function (e, t) {
  return Et.current.useInsertionEffect(e, t);
};
me.useLayoutEffect = function (e, t) {
  return Et.current.useLayoutEffect(e, t);
};
me.useMemo = function (e, t) {
  return Et.current.useMemo(e, t);
};
me.useReducer = function (e, t, n) {
  return Et.current.useReducer(e, t, n);
};
me.useRef = function (e) {
  return Et.current.useRef(e);
};
me.useState = function (e) {
  return Et.current.useState(e);
};
me.useSyncExternalStore = function (e, t, n) {
  return Et.current.useSyncExternalStore(e, t, n);
};
me.useTransition = function () {
  return Et.current.useTransition();
};
me.version = "18.3.1";
Vm.exports = me;
var m = Vm.exports;
const D = Dm(m),
  Ym = Rx({ __proto__: null, default: D }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hx = m,
  Wx = Symbol.for("react.element"),
  Zx = Symbol.for("react.fragment"),
  Gx = Object.prototype.hasOwnProperty,
  Kx = Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Gx.call(t, r) && !Yx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Wx,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Kx.current,
  };
}
qa.Fragment = Zx;
qa.jsx = Qm;
qa.jsxs = Qm;
Lm.exports = qa;
var c = Lm.exports,
  Rc = {},
  qm = { exports: {} },
  Zt = {},
  Xm = { exports: {} },
  Jm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, V) {
    var J = R.length;
    R.push(V);
    e: for (; 0 < J; ) {
      var Q = (J - 1) >>> 1,
        X = R[Q];
      if (0 < o(X, V)) (R[Q] = V), (R[J] = X), (J = Q);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var V = R[0],
      J = R.pop();
    if (J !== V) {
      R[0] = J;
      e: for (var Q = 0, X = R.length, he = X >>> 1; Q < he; ) {
        var Pe = 2 * (Q + 1) - 1,
          He = R[Pe],
          ue = Pe + 1,
          te = R[ue];
        if (0 > o(He, J))
          ue < X && 0 > o(te, He)
            ? ((R[Q] = te), (R[ue] = J), (Q = ue))
            : ((R[Q] = He), (R[Pe] = J), (Q = Pe));
        else if (ue < X && 0 > o(te, J)) (R[Q] = te), (R[ue] = J), (Q = ue);
        else break e;
      }
    }
    return V;
  }
  function o(R, V) {
    var J = R.sortIndex - V.sortIndex;
    return J !== 0 ? J : R.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    h = !1,
    x = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(R) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= R)
        r(u), (V.sortIndex = V.expirationTime), t(a, V);
      else break;
      V = n(u);
    }
  }
  function C(R) {
    if (((y = !1), w(R), !x))
      if (n(a) !== null) (x = !0), U(E);
      else {
        var V = n(u);
        V !== null && L(C, V.startTime - R);
      }
  }
  function E(R, V) {
    (x = !1), y && ((y = !1), v(_), (_ = -1)), (h = !0);
    var J = f;
    try {
      for (
        w(V), p = n(a);
        p !== null && (!(p.expirationTime > V) || (R && !A()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var X = Q(p.expirationTime <= V);
          (V = e.unstable_now()),
            typeof X == "function" ? (p.callback = X) : p === n(a) && r(a),
            w(V);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var he = !0;
      else {
        var Pe = n(u);
        Pe !== null && L(C, Pe.startTime - V), (he = !1);
      }
      return he;
    } finally {
      (p = null), (f = J), (h = !1);
    }
  }
  var N = !1,
    P = null,
    _ = -1,
    M = 5,
    j = -1;
  function A() {
    return !(e.unstable_now() - j < M);
  }
  function $() {
    if (P !== null) {
      var R = e.unstable_now();
      j = R;
      var V = !0;
      try {
        V = P(!0, R);
      } finally {
        V ? O() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var O;
  if (typeof g == "function")
    O = function () {
      g($);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      F = I.port2;
    (I.port1.onmessage = $),
      (O = function () {
        F.postMessage(null);
      });
  } else
    O = function () {
      S($, 0);
    };
  function U(R) {
    (P = R), N || ((N = !0), O());
  }
  function L(R, V) {
    _ = S(function () {
      R(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || h || ((x = !0), U(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var J = f;
      f = V;
      try {
        return R();
      } finally {
        f = J;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, V) {
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
      var J = f;
      f = R;
      try {
        return V();
      } finally {
        f = J;
      }
    }),
    (e.unstable_scheduleCallback = function (R, V, J) {
      var Q = e.unstable_now();
      switch (
        (typeof J == "object" && J !== null
          ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? Q + J : Q))
          : (J = Q),
        R)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = J + X),
        (R = {
          id: d++,
          callback: V,
          priorityLevel: R,
          startTime: J,
          expirationTime: X,
          sortIndex: -1,
        }),
        J > Q
          ? ((R.sortIndex = J),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (y ? (v(_), (_ = -1)) : (y = !0), L(C, J - Q)))
          : ((R.sortIndex = X), t(a, R), x || h || ((x = !0), U(E))),
        R
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (R) {
      var V = f;
      return function () {
        var J = f;
        f = V;
        try {
          return R.apply(this, arguments);
        } finally {
          f = J;
        }
      };
    });
})(Jm);
Xm.exports = Jm;
var Qx = Xm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qx = m,
  Ht = Qx;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var eg = new Set(),
  yi = {};
function vo(e, t) {
  cs(e, t), cs(e + "Capture", t);
}
function cs(e, t) {
  for (yi[e] = t, e = 0; e < t.length; e++) eg.add(t[e]);
}
var Yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  jc = Object.prototype.hasOwnProperty,
  Xx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $p = {},
  kp = {};
function Jx(e) {
  return jc.call(kp, e)
    ? !0
    : jc.call($p, e)
    ? !1
    : Xx.test(e)
    ? (kp[e] = !0)
    : (($p[e] = !0), !1);
}
function ew(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tw(e, t, n, r) {
  if (t === null || typeof t > "u" || ew(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $t(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ht[e] = new $t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ht[t] = new $t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ht[e] = new $t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ht[e] = new $t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ht[e] = new $t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ht[e] = new $t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ht[e] = new $t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ht[e] = new $t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ht[e] = new $t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yd = /[\-:]([a-z])/g;
function Qd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yd, Qd);
    ht[t] = new $t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yd, Qd);
    ht[t] = new $t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yd, Qd);
  ht[t] = new $t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ht[e] = new $t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new $t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ht[e] = new $t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qd(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tw(t, n, o, r) && (n = null),
    r || o === null
      ? Jx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var or = qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ml = Symbol.for("react.element"),
  zo = Symbol.for("react.portal"),
  Bo = Symbol.for("react.fragment"),
  Xd = Symbol.for("react.strict_mode"),
  Nc = Symbol.for("react.profiler"),
  tg = Symbol.for("react.provider"),
  ng = Symbol.for("react.context"),
  Jd = Symbol.for("react.forward_ref"),
  Pc = Symbol.for("react.suspense"),
  Tc = Symbol.for("react.suspense_list"),
  ef = Symbol.for("react.memo"),
  mr = Symbol.for("react.lazy"),
  rg = Symbol.for("react.offscreen"),
  Rp = Symbol.iterator;
function Vs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rp && e[Rp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ke = Object.assign,
  Ou;
function ei(e) {
  if (Ou === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ou = (t && t[1]) || "";
    }
  return (
    `
` +
    Ou +
    e
  );
}
var Au = !1;
function Iu(e, t) {
  if (!e || Au) return "";
  Au = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Au = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ei(e) : "";
}
function nw(e) {
  switch (e.tag) {
    case 5:
      return ei(e.type);
    case 16:
      return ei("Lazy");
    case 13:
      return ei("Suspense");
    case 19:
      return ei("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Iu(e.type, !1)), e;
    case 11:
      return (e = Iu(e.type.render, !1)), e;
    case 1:
      return (e = Iu(e.type, !0)), e;
    default:
      return "";
  }
}
function Mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bo:
      return "Fragment";
    case zo:
      return "Portal";
    case Nc:
      return "Profiler";
    case Xd:
      return "StrictMode";
    case Pc:
      return "Suspense";
    case Tc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ng:
        return (e.displayName || "Context") + ".Consumer";
      case tg:
        return (e._context.displayName || "Context") + ".Provider";
      case Jd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ef:
        return (
          (t = e.displayName || null), t !== null ? t : Mc(e.type) || "Memo"
        );
      case mr:
        (t = e._payload), (e = e._init);
        try {
          return Mc(e(t));
        } catch {}
    }
  return null;
}
function rw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mc(t);
    case 8:
      return t === Xd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ar(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function og(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ow(e) {
  var t = og(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gl(e) {
  e._valueTracker || (e._valueTracker = ow(e));
}
function sg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = og(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function aa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oc(e, t) {
  var n = t.checked;
  return Ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ar(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ig(e, t) {
  (t = t.checked), t != null && qd(e, "checked", t, !1);
}
function Ac(e, t) {
  ig(e, t);
  var n = Ar(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ic(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ic(e, t.type, Ar(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Np(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ic(e, t, n) {
  (t !== "number" || aa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ti = Array.isArray;
function ts(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ar(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (ti(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ar(n) };
}
function lg(e, t) {
  var n = Ar(t.value),
    r = Ar(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Tp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ag(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ag(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vl,
  ug = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vl = vl || document.createElement("div"),
          vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ii = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function (e) {
  sw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ii[t] = ii[e]);
  });
});
function cg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ii.hasOwnProperty(e) && ii[e])
    ? ("" + t).trim()
    : t + "px";
}
function dg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = cg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var iw = Ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lc(e, t) {
  if (t) {
    if (iw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Vc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zc = null;
function tf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Bc = null,
  ns = null,
  rs = null;
function Mp(e) {
  if ((e = nl(e))) {
    if (typeof Bc != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = nu(t)), Bc(e.stateNode, e.type, t));
  }
}
function fg(e) {
  ns ? (rs ? rs.push(e) : (rs = [e])) : (ns = e);
}
function pg() {
  if (ns) {
    var e = ns,
      t = rs;
    if (((rs = ns = null), Mp(e), t)) for (e = 0; e < t.length; e++) Mp(t[e]);
  }
}
function hg(e, t) {
  return e(t);
}
function mg() {}
var Fu = !1;
function gg(e, t, n) {
  if (Fu) return e(t, n);
  Fu = !0;
  try {
    return hg(e, t, n);
  } finally {
    (Fu = !1), (ns !== null || rs !== null) && (mg(), pg());
  }
}
function wi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = nu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Uc = !1;
if (Yn)
  try {
    var zs = {};
    Object.defineProperty(zs, "passive", {
      get: function () {
        Uc = !0;
      },
    }),
      window.addEventListener("test", zs, zs),
      window.removeEventListener("test", zs, zs);
  } catch {
    Uc = !1;
  }
function lw(e, t, n, r, o, s, i, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var li = !1,
  ua = null,
  ca = !1,
  Hc = null,
  aw = {
    onError: function (e) {
      (li = !0), (ua = e);
    },
  };
function uw(e, t, n, r, o, s, i, l, a) {
  (li = !1), (ua = null), lw.apply(aw, arguments);
}
function cw(e, t, n, r, o, s, i, l, a) {
  if ((uw.apply(this, arguments), li)) {
    if (li) {
      var u = ua;
      (li = !1), (ua = null);
    } else throw Error(z(198));
    ca || ((ca = !0), (Hc = u));
  }
}
function yo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Op(e) {
  if (yo(e) !== e) throw Error(z(188));
}
function dw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yo(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Op(o), e;
        if (s === r) return Op(o), t;
        s = s.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function yg(e) {
  return (e = dw(e)), e !== null ? xg(e) : null;
}
function xg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wg = Ht.unstable_scheduleCallback,
  Ap = Ht.unstable_cancelCallback,
  fw = Ht.unstable_shouldYield,
  pw = Ht.unstable_requestPaint,
  Je = Ht.unstable_now,
  hw = Ht.unstable_getCurrentPriorityLevel,
  nf = Ht.unstable_ImmediatePriority,
  Sg = Ht.unstable_UserBlockingPriority,
  da = Ht.unstable_NormalPriority,
  mw = Ht.unstable_LowPriority,
  _g = Ht.unstable_IdlePriority,
  Xa = null,
  kn = null;
function gw(e) {
  if (kn && typeof kn.onCommitFiberRoot == "function")
    try {
      kn.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var un = Math.clz32 ? Math.clz32 : xw,
  vw = Math.log,
  yw = Math.LN2;
function xw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vw(e) / yw) | 0)) | 0;
}
var yl = 64,
  xl = 4194304;
function ni(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = ni(l)) : ((s &= i), s !== 0 && (r = ni(s)));
  } else (i = n & ~o), i !== 0 ? (r = ni(i)) : s !== 0 && (r = ni(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - un(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ww(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - un(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = ww(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Wc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cg() {
  var e = yl;
  return (yl <<= 1), !(yl & 4194240) && (yl = 64), e;
}
function Du(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - un(t)),
    (e[t] = n);
}
function _w(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - un(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function rf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - un(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Me = 0;
function bg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Eg,
  of,
  $g,
  kg,
  Rg,
  Zc = !1,
  wl = [],
  $r = null,
  kr = null,
  Rr = null,
  Si = new Map(),
  _i = new Map(),
  yr = [],
  Cw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ip(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $r = null;
      break;
    case "dragenter":
    case "dragleave":
      kr = null;
      break;
    case "mouseover":
    case "mouseout":
      Rr = null;
      break;
    case "pointerover":
    case "pointerout":
      Si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function Bs(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = nl(t)), t !== null && of(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function bw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ($r = Bs($r, e, t, n, r, o)), !0;
    case "dragenter":
      return (kr = Bs(kr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Rr = Bs(Rr, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return Si.set(s, Bs(Si.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), _i.set(s, Bs(_i.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function jg(e) {
  var t = Xr(e.target);
  if (t !== null) {
    var n = yo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = vg(n)), t !== null)) {
          (e.blockedOn = t),
            Rg(e.priority, function () {
              $g(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zc = r), n.target.dispatchEvent(r), (zc = null);
    } else return (t = nl(n)), t !== null && of(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Fp(e, t, n) {
  Gl(e) && n.delete(t);
}
function Ew() {
  (Zc = !1),
    $r !== null && Gl($r) && ($r = null),
    kr !== null && Gl(kr) && (kr = null),
    Rr !== null && Gl(Rr) && (Rr = null),
    Si.forEach(Fp),
    _i.forEach(Fp);
}
function Us(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zc ||
      ((Zc = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, Ew)));
}
function Ci(e) {
  function t(o) {
    return Us(o, e);
  }
  if (0 < wl.length) {
    Us(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $r !== null && Us($r, e),
      kr !== null && Us(kr, e),
      Rr !== null && Us(Rr, e),
      Si.forEach(t),
      _i.forEach(t),
      n = 0;
    n < yr.length;
    n++
  )
    (r = yr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yr.length && ((n = yr[0]), n.blockedOn === null); )
    jg(n), n.blockedOn === null && yr.shift();
}
var os = or.ReactCurrentBatchConfig,
  pa = !0;
function $w(e, t, n, r) {
  var o = Me,
    s = os.transition;
  os.transition = null;
  try {
    (Me = 1), sf(e, t, n, r);
  } finally {
    (Me = o), (os.transition = s);
  }
}
function kw(e, t, n, r) {
  var o = Me,
    s = os.transition;
  os.transition = null;
  try {
    (Me = 4), sf(e, t, n, r);
  } finally {
    (Me = o), (os.transition = s);
  }
}
function sf(e, t, n, r) {
  if (pa) {
    var o = Gc(e, t, n, r);
    if (o === null) Ku(e, t, r, ha, n), Ip(e, r);
    else if (bw(o, e, t, n, r)) r.stopPropagation();
    else if ((Ip(e, r), t & 4 && -1 < Cw.indexOf(e))) {
      for (; o !== null; ) {
        var s = nl(o);
        if (
          (s !== null && Eg(s),
          (s = Gc(e, t, n, r)),
          s === null && Ku(e, t, r, ha, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Ku(e, t, r, null, n);
  }
}
var ha = null;
function Gc(e, t, n, r) {
  if (((ha = null), (e = tf(r)), (e = Xr(e)), e !== null))
    if (((t = yo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = vg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ha = e), null;
}
function Ng(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hw()) {
        case nf:
          return 1;
        case Sg:
          return 4;
        case da:
        case mw:
          return 16;
        case _g:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Sr = null,
  lf = null,
  Kl = null;
function Pg() {
  if (Kl) return Kl;
  var e,
    t = lf,
    n = t.length,
    r,
    o = "value" in Sr ? Sr.value : Sr.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Kl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sl() {
  return !0;
}
function Dp() {
  return !1;
}
function Gt(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Sl
        : Dp),
      (this.isPropagationStopped = Dp),
      this
    );
  }
  return (
    Ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Sl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Sl));
      },
      persist: function () {},
      isPersistent: Sl,
    }),
    t
  );
}
var $s = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  af = Gt($s),
  tl = Ke({}, $s, { view: 0, detail: 0 }),
  Rw = Gt(tl),
  Lu,
  Vu,
  Hs,
  Ja = Ke({}, tl, {
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
    getModifierState: uf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Hs &&
            (Hs && e.type === "mousemove"
              ? ((Lu = e.screenX - Hs.screenX), (Vu = e.screenY - Hs.screenY))
              : (Vu = Lu = 0),
            (Hs = e)),
          Lu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vu;
    },
  }),
  Lp = Gt(Ja),
  jw = Ke({}, Ja, { dataTransfer: 0 }),
  Nw = Gt(jw),
  Pw = Ke({}, tl, { relatedTarget: 0 }),
  zu = Gt(Pw),
  Tw = Ke({}, $s, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mw = Gt(Tw),
  Ow = Ke({}, $s, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Aw = Gt(Ow),
  Iw = Ke({}, $s, { data: 0 }),
  Vp = Gt(Iw),
  Fw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Dw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Lw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Vw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lw[e]) ? !!t[e] : !1;
}
function uf() {
  return Vw;
}
var zw = Ke({}, tl, {
    key: function (e) {
      if (e.key) {
        var t = Fw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uf,
    charCode: function (e) {
      return e.type === "keypress" ? Yl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bw = Gt(zw),
  Uw = Ke({}, Ja, {
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
  zp = Gt(Uw),
  Hw = Ke({}, tl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uf,
  }),
  Ww = Gt(Hw),
  Zw = Ke({}, $s, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gw = Gt(Zw),
  Kw = Ke({}, Ja, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Yw = Gt(Kw),
  Qw = [9, 13, 27, 32],
  cf = Yn && "CompositionEvent" in window,
  ai = null;
Yn && "documentMode" in document && (ai = document.documentMode);
var qw = Yn && "TextEvent" in window && !ai,
  Tg = Yn && (!cf || (ai && 8 < ai && 11 >= ai)),
  Bp = " ",
  Up = !1;
function Mg(e, t) {
  switch (e) {
    case "keyup":
      return Qw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Og(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Uo = !1;
function Xw(e, t) {
  switch (e) {
    case "compositionend":
      return Og(t);
    case "keypress":
      return t.which !== 32 ? null : ((Up = !0), Bp);
    case "textInput":
      return (e = t.data), e === Bp && Up ? null : e;
    default:
      return null;
  }
}
function Jw(e, t) {
  if (Uo)
    return e === "compositionend" || (!cf && Mg(e, t))
      ? ((e = Pg()), (Kl = lf = Sr = null), (Uo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Tg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var e1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Hp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!e1[e.type] : t === "textarea";
}
function Ag(e, t, n, r) {
  fg(r),
    (t = ma(t, "onChange")),
    0 < t.length &&
      ((n = new af("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ui = null,
  bi = null;
function t1(e) {
  Zg(e, 0);
}
function eu(e) {
  var t = Zo(e);
  if (sg(t)) return e;
}
function n1(e, t) {
  if (e === "change") return t;
}
var Ig = !1;
if (Yn) {
  var Bu;
  if (Yn) {
    var Uu = "oninput" in document;
    if (!Uu) {
      var Wp = document.createElement("div");
      Wp.setAttribute("oninput", "return;"),
        (Uu = typeof Wp.oninput == "function");
    }
    Bu = Uu;
  } else Bu = !1;
  Ig = Bu && (!document.documentMode || 9 < document.documentMode);
}
function Zp() {
  ui && (ui.detachEvent("onpropertychange", Fg), (bi = ui = null));
}
function Fg(e) {
  if (e.propertyName === "value" && eu(bi)) {
    var t = [];
    Ag(t, bi, e, tf(e)), gg(t1, t);
  }
}
function r1(e, t, n) {
  e === "focusin"
    ? (Zp(), (ui = t), (bi = n), ui.attachEvent("onpropertychange", Fg))
    : e === "focusout" && Zp();
}
function o1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return eu(bi);
}
function s1(e, t) {
  if (e === "click") return eu(t);
}
function i1(e, t) {
  if (e === "input" || e === "change") return eu(t);
}
function l1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pn = typeof Object.is == "function" ? Object.is : l1;
function Ei(e, t) {
  if (pn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!jc.call(t, o) || !pn(e[o], t[o])) return !1;
  }
  return !0;
}
function Gp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kp(e, t) {
  var n = Gp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gp(n);
  }
}
function Dg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Lg() {
  for (var e = window, t = aa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = aa(e.document);
  }
  return t;
}
function df(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function a1(e) {
  var t = Lg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && df(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Kp(n, s));
        var i = Kp(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var u1 = Yn && "documentMode" in document && 11 >= document.documentMode,
  Ho = null,
  Kc = null,
  ci = null,
  Yc = !1;
function Yp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yc ||
    Ho == null ||
    Ho !== aa(r) ||
    ((r = Ho),
    "selectionStart" in r && df(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ci && Ei(ci, r)) ||
      ((ci = r),
      (r = ma(Kc, "onSelect")),
      0 < r.length &&
        ((t = new af("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ho))));
}
function _l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wo = {
    animationend: _l("Animation", "AnimationEnd"),
    animationiteration: _l("Animation", "AnimationIteration"),
    animationstart: _l("Animation", "AnimationStart"),
    transitionend: _l("Transition", "TransitionEnd"),
  },
  Hu = {},
  Vg = {};
Yn &&
  ((Vg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wo.animationend.animation,
    delete Wo.animationiteration.animation,
    delete Wo.animationstart.animation),
  "TransitionEvent" in window || delete Wo.transitionend.transition);
function tu(e) {
  if (Hu[e]) return Hu[e];
  if (!Wo[e]) return e;
  var t = Wo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vg) return (Hu[e] = t[n]);
  return e;
}
var zg = tu("animationend"),
  Bg = tu("animationiteration"),
  Ug = tu("animationstart"),
  Hg = tu("transitionend"),
  Wg = new Map(),
  Qp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zr(e, t) {
  Wg.set(e, t), vo(t, [e]);
}
for (var Wu = 0; Wu < Qp.length; Wu++) {
  var Zu = Qp[Wu],
    c1 = Zu.toLowerCase(),
    d1 = Zu[0].toUpperCase() + Zu.slice(1);
  Zr(c1, "on" + d1);
}
Zr(zg, "onAnimationEnd");
Zr(Bg, "onAnimationIteration");
Zr(Ug, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(Hg, "onTransitionEnd");
cs("onMouseEnter", ["mouseout", "mouseover"]);
cs("onMouseLeave", ["mouseout", "mouseover"]);
cs("onPointerEnter", ["pointerout", "pointerover"]);
cs("onPointerLeave", ["pointerout", "pointerover"]);
vo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ri =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  f1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
function qp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), cw(r, t, void 0, e), (e.currentTarget = null);
}
function Zg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          qp(o, l, u), (s = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          qp(o, l, u), (s = a);
        }
    }
  }
  if (ca) throw ((e = Hc), (ca = !1), (Hc = null), e);
}
function Le(e, t) {
  var n = t[ed];
  n === void 0 && (n = t[ed] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gg(t, e, 2, !1), n.add(r));
}
function Gu(e, t, n) {
  var r = 0;
  t && (r |= 4), Gg(n, e, r, t);
}
var Cl = "_reactListening" + Math.random().toString(36).slice(2);
function $i(e) {
  if (!e[Cl]) {
    (e[Cl] = !0),
      eg.forEach(function (n) {
        n !== "selectionchange" && (f1.has(n) || Gu(n, !1, e), Gu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cl] || ((t[Cl] = !0), Gu("selectionchange", !1, t));
  }
}
function Gg(e, t, n, r) {
  switch (Ng(t)) {
    case 1:
      var o = $w;
      break;
    case 4:
      o = kw;
      break;
    default:
      o = sf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Uc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ku(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Xr(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  gg(function () {
    var u = s,
      d = tf(n),
      p = [];
    e: {
      var f = Wg.get(e);
      if (f !== void 0) {
        var h = af,
          x = e;
        switch (e) {
          case "keypress":
            if (Yl(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Bw;
            break;
          case "focusin":
            (x = "focus"), (h = zu);
            break;
          case "focusout":
            (x = "blur"), (h = zu);
            break;
          case "beforeblur":
          case "afterblur":
            h = zu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Lp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Nw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ww;
            break;
          case zg:
          case Bg:
          case Ug:
            h = Mw;
            break;
          case Hg:
            h = Gw;
            break;
          case "scroll":
            h = Rw;
            break;
          case "wheel":
            h = Yw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Aw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = zp;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          v = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var g = u, w; g !== null; ) {
          w = g;
          var C = w.stateNode;
          if (
            (w.tag === 5 &&
              C !== null &&
              ((w = C),
              v !== null && ((C = wi(g, v)), C != null && y.push(ki(g, C, w)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((f = new h(f, x, null, n, d)), p.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== zc &&
            (x = n.relatedTarget || n.fromElement) &&
            (Xr(x) || x[Qn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((x = n.relatedTarget || n.toElement),
              (h = u),
              (x = x ? Xr(x) : null),
              x !== null &&
                ((S = yo(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((h = null), (x = u)),
          h !== x)
        ) {
          if (
            ((y = Lp),
            (C = "onMouseLeave"),
            (v = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = zp),
              (C = "onPointerLeave"),
              (v = "onPointerEnter"),
              (g = "pointer")),
            (S = h == null ? f : Zo(h)),
            (w = x == null ? f : Zo(x)),
            (f = new y(C, g + "leave", h, n, d)),
            (f.target = S),
            (f.relatedTarget = w),
            (C = null),
            Xr(d) === u &&
              ((y = new y(v, g + "enter", x, n, d)),
              (y.target = w),
              (y.relatedTarget = S),
              (C = y)),
            (S = C),
            h && x)
          )
            t: {
              for (y = h, v = x, g = 0, w = y; w; w = Oo(w)) g++;
              for (w = 0, C = v; C; C = Oo(C)) w++;
              for (; 0 < g - w; ) (y = Oo(y)), g--;
              for (; 0 < w - g; ) (v = Oo(v)), w--;
              for (; g--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                (y = Oo(y)), (v = Oo(v));
              }
              y = null;
            }
          else y = null;
          h !== null && Xp(p, f, h, y, !1),
            x !== null && S !== null && Xp(p, S, x, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? Zo(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var E = n1;
        else if (Hp(f))
          if (Ig) E = i1;
          else {
            E = o1;
            var N = r1;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = s1);
        if (E && (E = E(e, u))) {
          Ag(p, E, n, d);
          break e;
        }
        N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            Ic(f, "number", f.value);
      }
      switch (((N = u ? Zo(u) : window), e)) {
        case "focusin":
          (Hp(N) || N.contentEditable === "true") &&
            ((Ho = N), (Kc = u), (ci = null));
          break;
        case "focusout":
          ci = Kc = Ho = null;
          break;
        case "mousedown":
          Yc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yc = !1), Yp(p, n, d);
          break;
        case "selectionchange":
          if (u1) break;
        case "keydown":
        case "keyup":
          Yp(p, n, d);
      }
      var P;
      if (cf)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Uo
          ? Mg(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Tg &&
          n.locale !== "ko" &&
          (Uo || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Uo && (P = Pg())
            : ((Sr = d),
              (lf = "value" in Sr ? Sr.value : Sr.textContent),
              (Uo = !0))),
        (N = ma(u, _)),
        0 < N.length &&
          ((_ = new Vp(_, e, null, n, d)),
          p.push({ event: _, listeners: N }),
          P ? (_.data = P) : ((P = Og(n)), P !== null && (_.data = P)))),
        (P = qw ? Xw(e, n) : Jw(e, n)) &&
          ((u = ma(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Vp("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    Zg(p, t);
  });
}
function ki(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = wi(e, n)),
      s != null && r.unshift(ki(e, s, o)),
      (s = wi(e, t)),
      s != null && r.push(ki(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Oo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xp(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = wi(n, s)), a != null && i.unshift(ki(n, a, l)))
        : o || ((a = wi(n, s)), a != null && i.push(ki(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var p1 = /\r\n?/g,
  h1 = /\u0000|\uFFFD/g;
function Jp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      p1,
      `
`
    )
    .replace(h1, "");
}
function bl(e, t, n) {
  if (((t = Jp(t)), Jp(e) !== t && n)) throw Error(z(425));
}
function ga() {}
var Qc = null,
  qc = null;
function Xc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Jc = typeof setTimeout == "function" ? setTimeout : void 0,
  m1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  eh = typeof Promise == "function" ? Promise : void 0,
  g1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof eh < "u"
      ? function (e) {
          return eh.resolve(null).then(e).catch(v1);
        }
      : Jc;
function v1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ci(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ci(t);
}
function jr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function th(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ks = Math.random().toString(36).slice(2),
  Cn = "__reactFiber$" + ks,
  Ri = "__reactProps$" + ks,
  Qn = "__reactContainer$" + ks,
  ed = "__reactEvents$" + ks,
  y1 = "__reactListeners$" + ks,
  x1 = "__reactHandles$" + ks;
function Xr(e) {
  var t = e[Cn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qn] || n[Cn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = th(e); e !== null; ) {
          if ((n = e[Cn])) return n;
          e = th(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function nl(e) {
  return (
    (e = e[Cn] || e[Qn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function nu(e) {
  return e[Ri] || null;
}
var td = [],
  Go = -1;
function Gr(e) {
  return { current: e };
}
function Ve(e) {
  0 > Go || ((e.current = td[Go]), (td[Go] = null), Go--);
}
function Ie(e, t) {
  Go++, (td[Go] = e.current), (e.current = t);
}
var Ir = {},
  xt = Gr(Ir),
  Pt = Gr(!1),
  io = Ir;
function ds(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ir;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Tt(e) {
  return (e = e.childContextTypes), e != null;
}
function va() {
  Ve(Pt), Ve(xt);
}
function nh(e, t, n) {
  if (xt.current !== Ir) throw Error(z(168));
  Ie(xt, t), Ie(Pt, n);
}
function Kg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, rw(e) || "Unknown", o));
  return Ke({}, n, r);
}
function ya(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ir),
    (io = xt.current),
    Ie(xt, e),
    Ie(Pt, Pt.current),
    !0
  );
}
function rh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = Kg(e, t, io)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ve(Pt),
      Ve(xt),
      Ie(xt, e))
    : Ve(Pt),
    Ie(Pt, n);
}
var Hn = null,
  ru = !1,
  Qu = !1;
function Yg(e) {
  Hn === null ? (Hn = [e]) : Hn.push(e);
}
function w1(e) {
  (ru = !0), Yg(e);
}
function Kr() {
  if (!Qu && Hn !== null) {
    Qu = !0;
    var e = 0,
      t = Me;
    try {
      var n = Hn;
      for (Me = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Hn = null), (ru = !1);
    } catch (o) {
      throw (Hn !== null && (Hn = Hn.slice(e + 1)), wg(nf, Kr), o);
    } finally {
      (Me = t), (Qu = !1);
    }
  }
  return null;
}
var Ko = [],
  Yo = 0,
  xa = null,
  wa = 0,
  Kt = [],
  Yt = 0,
  lo = null,
  Wn = 1,
  Zn = "";
function Qr(e, t) {
  (Ko[Yo++] = wa), (Ko[Yo++] = xa), (xa = e), (wa = t);
}
function Qg(e, t, n) {
  (Kt[Yt++] = Wn), (Kt[Yt++] = Zn), (Kt[Yt++] = lo), (lo = e);
  var r = Wn;
  e = Zn;
  var o = 32 - un(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - un(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Wn = (1 << (32 - un(t) + o)) | (n << o) | r),
      (Zn = s + e);
  } else (Wn = (1 << s) | (n << o) | r), (Zn = e);
}
function ff(e) {
  e.return !== null && (Qr(e, 1), Qg(e, 1, 0));
}
function pf(e) {
  for (; e === xa; )
    (xa = Ko[--Yo]), (Ko[Yo] = null), (wa = Ko[--Yo]), (Ko[Yo] = null);
  for (; e === lo; )
    (lo = Kt[--Yt]),
      (Kt[Yt] = null),
      (Zn = Kt[--Yt]),
      (Kt[Yt] = null),
      (Wn = Kt[--Yt]),
      (Kt[Yt] = null);
}
var zt = null,
  Vt = null,
  ze = !1,
  on = null;
function qg(e, t) {
  var n = Qt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function oh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (zt = e), (Vt = jr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (zt = e), (Vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = lo !== null ? { id: Wn, overflow: Zn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (zt = e),
            (Vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rd(e) {
  if (ze) {
    var t = Vt;
    if (t) {
      var n = t;
      if (!oh(e, t)) {
        if (nd(e)) throw Error(z(418));
        t = jr(n.nextSibling);
        var r = zt;
        t && oh(e, t)
          ? qg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (zt = e));
      }
    } else {
      if (nd(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (ze = !1), (zt = e);
    }
  }
}
function sh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  zt = e;
}
function El(e) {
  if (e !== zt) return !1;
  if (!ze) return sh(e), (ze = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xc(e.type, e.memoizedProps))),
    t && (t = Vt))
  ) {
    if (nd(e)) throw (Xg(), Error(z(418)));
    for (; t; ) qg(e, t), (t = jr(t.nextSibling));
  }
  if ((sh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Vt = jr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Vt = null;
    }
  } else Vt = zt ? jr(e.stateNode.nextSibling) : null;
  return !0;
}
function Xg() {
  for (var e = Vt; e; ) e = jr(e.nextSibling);
}
function fs() {
  (Vt = zt = null), (ze = !1);
}
function hf(e) {
  on === null ? (on = [e]) : on.push(e);
}
var S1 = or.ReactCurrentBatchConfig;
function Ws(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function $l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ih(e) {
  var t = e._init;
  return t(e._payload);
}
function Jg(e) {
  function t(v, g) {
    if (e) {
      var w = v.deletions;
      w === null ? ((v.deletions = [g]), (v.flags |= 16)) : w.push(g);
    }
  }
  function n(v, g) {
    if (!e) return null;
    for (; g !== null; ) t(v, g), (g = g.sibling);
    return null;
  }
  function r(v, g) {
    for (v = new Map(); g !== null; )
      g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling);
    return v;
  }
  function o(v, g) {
    return (v = Mr(v, g)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, g, w) {
    return (
      (v.index = w),
      e
        ? ((w = v.alternate),
          w !== null
            ? ((w = w.index), w < g ? ((v.flags |= 2), g) : w)
            : ((v.flags |= 2), g))
        : ((v.flags |= 1048576), g)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, g, w, C) {
    return g === null || g.tag !== 6
      ? ((g = rc(w, v.mode, C)), (g.return = v), g)
      : ((g = o(g, w)), (g.return = v), g);
  }
  function a(v, g, w, C) {
    var E = w.type;
    return E === Bo
      ? d(v, g, w.props.children, C, w.key)
      : g !== null &&
        (g.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === mr &&
            ih(E) === g.type))
      ? ((C = o(g, w.props)), (C.ref = Ws(v, g, w)), (C.return = v), C)
      : ((C = na(w.type, w.key, w.props, null, v.mode, C)),
        (C.ref = Ws(v, g, w)),
        (C.return = v),
        C);
  }
  function u(v, g, w, C) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== w.containerInfo ||
      g.stateNode.implementation !== w.implementation
      ? ((g = oc(w, v.mode, C)), (g.return = v), g)
      : ((g = o(g, w.children || [])), (g.return = v), g);
  }
  function d(v, g, w, C, E) {
    return g === null || g.tag !== 7
      ? ((g = oo(w, v.mode, C, E)), (g.return = v), g)
      : ((g = o(g, w)), (g.return = v), g);
  }
  function p(v, g, w) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = rc("" + g, v.mode, w)), (g.return = v), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ml:
          return (
            (w = na(g.type, g.key, g.props, null, v.mode, w)),
            (w.ref = Ws(v, null, g)),
            (w.return = v),
            w
          );
        case zo:
          return (g = oc(g, v.mode, w)), (g.return = v), g;
        case mr:
          var C = g._init;
          return p(v, C(g._payload), w);
      }
      if (ti(g) || Vs(g))
        return (g = oo(g, v.mode, w, null)), (g.return = v), g;
      $l(v, g);
    }
    return null;
  }
  function f(v, g, w, C) {
    var E = g !== null ? g.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return E !== null ? null : l(v, g, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ml:
          return w.key === E ? a(v, g, w, C) : null;
        case zo:
          return w.key === E ? u(v, g, w, C) : null;
        case mr:
          return (E = w._init), f(v, g, E(w._payload), C);
      }
      if (ti(w) || Vs(w)) return E !== null ? null : d(v, g, w, C, null);
      $l(v, w);
    }
    return null;
  }
  function h(v, g, w, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (v = v.get(w) || null), l(g, v, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ml:
          return (v = v.get(C.key === null ? w : C.key) || null), a(g, v, C, E);
        case zo:
          return (v = v.get(C.key === null ? w : C.key) || null), u(g, v, C, E);
        case mr:
          var N = C._init;
          return h(v, g, w, N(C._payload), E);
      }
      if (ti(C) || Vs(C)) return (v = v.get(w) || null), d(g, v, C, E, null);
      $l(g, C);
    }
    return null;
  }
  function x(v, g, w, C) {
    for (
      var E = null, N = null, P = g, _ = (g = 0), M = null;
      P !== null && _ < w.length;
      _++
    ) {
      P.index > _ ? ((M = P), (P = null)) : (M = P.sibling);
      var j = f(v, P, w[_], C);
      if (j === null) {
        P === null && (P = M);
        break;
      }
      e && P && j.alternate === null && t(v, P),
        (g = s(j, g, _)),
        N === null ? (E = j) : (N.sibling = j),
        (N = j),
        (P = M);
    }
    if (_ === w.length) return n(v, P), ze && Qr(v, _), E;
    if (P === null) {
      for (; _ < w.length; _++)
        (P = p(v, w[_], C)),
          P !== null &&
            ((g = s(P, g, _)), N === null ? (E = P) : (N.sibling = P), (N = P));
      return ze && Qr(v, _), E;
    }
    for (P = r(v, P); _ < w.length; _++)
      (M = h(P, v, _, w[_], C)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? _ : M.key),
          (g = s(M, g, _)),
          N === null ? (E = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        P.forEach(function (A) {
          return t(v, A);
        }),
      ze && Qr(v, _),
      E
    );
  }
  function y(v, g, w, C) {
    var E = Vs(w);
    if (typeof E != "function") throw Error(z(150));
    if (((w = E.call(w)), w == null)) throw Error(z(151));
    for (
      var N = (E = null), P = g, _ = (g = 0), M = null, j = w.next();
      P !== null && !j.done;
      _++, j = w.next()
    ) {
      P.index > _ ? ((M = P), (P = null)) : (M = P.sibling);
      var A = f(v, P, j.value, C);
      if (A === null) {
        P === null && (P = M);
        break;
      }
      e && P && A.alternate === null && t(v, P),
        (g = s(A, g, _)),
        N === null ? (E = A) : (N.sibling = A),
        (N = A),
        (P = M);
    }
    if (j.done) return n(v, P), ze && Qr(v, _), E;
    if (P === null) {
      for (; !j.done; _++, j = w.next())
        (j = p(v, j.value, C)),
          j !== null &&
            ((g = s(j, g, _)), N === null ? (E = j) : (N.sibling = j), (N = j));
      return ze && Qr(v, _), E;
    }
    for (P = r(v, P); !j.done; _++, j = w.next())
      (j = h(P, v, _, j.value, C)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? _ : j.key),
          (g = s(j, g, _)),
          N === null ? (E = j) : (N.sibling = j),
          (N = j));
    return (
      e &&
        P.forEach(function ($) {
          return t(v, $);
        }),
      ze && Qr(v, _),
      E
    );
  }
  function S(v, g, w, C) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Bo &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case ml:
          e: {
            for (var E = w.key, N = g; N !== null; ) {
              if (N.key === E) {
                if (((E = w.type), E === Bo)) {
                  if (N.tag === 7) {
                    n(v, N.sibling),
                      (g = o(N, w.props.children)),
                      (g.return = v),
                      (v = g);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === mr &&
                    ih(E) === N.type)
                ) {
                  n(v, N.sibling),
                    (g = o(N, w.props)),
                    (g.ref = Ws(v, N, w)),
                    (g.return = v),
                    (v = g);
                  break e;
                }
                n(v, N);
                break;
              } else t(v, N);
              N = N.sibling;
            }
            w.type === Bo
              ? ((g = oo(w.props.children, v.mode, C, w.key)),
                (g.return = v),
                (v = g))
              : ((C = na(w.type, w.key, w.props, null, v.mode, C)),
                (C.ref = Ws(v, g, w)),
                (C.return = v),
                (v = C));
          }
          return i(v);
        case zo:
          e: {
            for (N = w.key; g !== null; ) {
              if (g.key === N)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === w.containerInfo &&
                  g.stateNode.implementation === w.implementation
                ) {
                  n(v, g.sibling),
                    (g = o(g, w.children || [])),
                    (g.return = v),
                    (v = g);
                  break e;
                } else {
                  n(v, g);
                  break;
                }
              else t(v, g);
              g = g.sibling;
            }
            (g = oc(w, v.mode, C)), (g.return = v), (v = g);
          }
          return i(v);
        case mr:
          return (N = w._init), S(v, g, N(w._payload), C);
      }
      if (ti(w)) return x(v, g, w, C);
      if (Vs(w)) return y(v, g, w, C);
      $l(v, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        g !== null && g.tag === 6
          ? (n(v, g.sibling), (g = o(g, w)), (g.return = v), (v = g))
          : (n(v, g), (g = rc(w, v.mode, C)), (g.return = v), (v = g)),
        i(v))
      : n(v, g);
  }
  return S;
}
var ps = Jg(!0),
  ev = Jg(!1),
  Sa = Gr(null),
  _a = null,
  Qo = null,
  mf = null;
function gf() {
  mf = Qo = _a = null;
}
function vf(e) {
  var t = Sa.current;
  Ve(Sa), (e._currentValue = t);
}
function od(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ss(e, t) {
  (_a = e),
    (mf = Qo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Nt = !0), (e.firstContext = null));
}
function Xt(e) {
  var t = e._currentValue;
  if (mf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qo === null)) {
      if (_a === null) throw Error(z(308));
      (Qo = e), (_a.dependencies = { lanes: 0, firstContext: e });
    } else Qo = Qo.next = e;
  return t;
}
var Jr = null;
function yf(e) {
  Jr === null ? (Jr = [e]) : Jr.push(e);
}
function tv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), yf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    qn(e, r)
  );
}
function qn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gr = !1;
function xf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Kn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ke & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      qn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), yf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    qn(e, n)
  );
}
function Ql(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rf(e, n);
  }
}
function lh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ca(e, t, n, r) {
  var o = e.updateQueue;
  gr = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), i === null ? (s = u) : (i.next = u), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var p = o.baseState;
    (i = 0), (d = u = a = null), (l = s);
    do {
      var f = l.lane,
        h = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = e,
            y = l;
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                p = x.call(h, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (f = typeof x == "function" ? x.call(h, p, f) : x),
                f == null)
              )
                break e;
              p = Ke({}, p, f);
              break e;
            case 2:
              gr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = h), (a = p)) : (d = d.next = h),
          (i |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (uo |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function ah(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var rl = {},
  Rn = Gr(rl),
  ji = Gr(rl),
  Ni = Gr(rl);
function eo(e) {
  if (e === rl) throw Error(z(174));
  return e;
}
function wf(e, t) {
  switch ((Ie(Ni, t), Ie(ji, e), Ie(Rn, rl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Dc(t, e));
  }
  Ve(Rn), Ie(Rn, t);
}
function hs() {
  Ve(Rn), Ve(ji), Ve(Ni);
}
function rv(e) {
  eo(Ni.current);
  var t = eo(Rn.current),
    n = Dc(t, e.type);
  t !== n && (Ie(ji, e), Ie(Rn, n));
}
function Sf(e) {
  ji.current === e && (Ve(Rn), Ve(ji));
}
var Ze = Gr(0);
function ba(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qu = [];
function _f() {
  for (var e = 0; e < qu.length; e++)
    qu[e]._workInProgressVersionPrimary = null;
  qu.length = 0;
}
var ql = or.ReactCurrentDispatcher,
  Xu = or.ReactCurrentBatchConfig,
  ao = 0,
  Ge = null,
  st = null,
  ct = null,
  Ea = !1,
  di = !1,
  Pi = 0,
  _1 = 0;
function mt() {
  throw Error(z(321));
}
function Cf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pn(e[n], t[n])) return !1;
  return !0;
}
function bf(e, t, n, r, o, s) {
  if (
    ((ao = s),
    (Ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ql.current = e === null || e.memoizedState === null ? $1 : k1),
    (e = n(r, o)),
    di)
  ) {
    s = 0;
    do {
      if (((di = !1), (Pi = 0), 25 <= s)) throw Error(z(301));
      (s += 1),
        (ct = st = null),
        (t.updateQueue = null),
        (ql.current = R1),
        (e = n(r, o));
    } while (di);
  }
  if (
    ((ql.current = $a),
    (t = st !== null && st.next !== null),
    (ao = 0),
    (ct = st = Ge = null),
    (Ea = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function Ef() {
  var e = Pi !== 0;
  return (Pi = 0), e;
}
function Sn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ct === null ? (Ge.memoizedState = ct = e) : (ct = ct.next = e), ct;
}
function Jt() {
  if (st === null) {
    var e = Ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = st.next;
  var t = ct === null ? Ge.memoizedState : ct.next;
  if (t !== null) (ct = t), (st = e);
  else {
    if (e === null) throw Error(z(310));
    (st = e),
      (e = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null,
      }),
      ct === null ? (Ge.memoizedState = ct = e) : (ct = ct.next = e);
  }
  return ct;
}
function Ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ju(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = st,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      a = null,
      u = s;
    do {
      var d = u.lane;
      if ((ao & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (i = r)) : (a = a.next = p),
          (Ge.lanes |= d),
          (uo |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (i = r) : (a.next = l),
      pn(r, t.memoizedState) || (Nt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (Ge.lanes |= s), (uo |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ec(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    pn(s, t.memoizedState) || (Nt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function ov() {}
function sv(e, t) {
  var n = Ge,
    r = Jt(),
    o = t(),
    s = !pn(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Nt = !0)),
    (r = r.queue),
    $f(av.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ct !== null && ct.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Mi(9, lv.bind(null, n, r, o, t), void 0, null),
      dt === null)
    )
      throw Error(z(349));
    ao & 30 || iv(n, t, o);
  }
  return o;
}
function iv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), uv(t) && cv(e);
}
function av(e, t, n) {
  return n(function () {
    uv(t) && cv(e);
  });
}
function uv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pn(e, n);
  } catch {
    return !0;
  }
}
function cv(e) {
  var t = qn(e, 1);
  t !== null && cn(t, e, 1, -1);
}
function uh(e) {
  var t = Sn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ti,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = E1.bind(null, Ge, e)),
    [t.memoizedState, e]
  );
}
function Mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dv() {
  return Jt().memoizedState;
}
function Xl(e, t, n, r) {
  var o = Sn();
  (Ge.flags |= e),
    (o.memoizedState = Mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ou(e, t, n, r) {
  var o = Jt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (st !== null) {
    var i = st.memoizedState;
    if (((s = i.destroy), r !== null && Cf(r, i.deps))) {
      o.memoizedState = Mi(t, n, s, r);
      return;
    }
  }
  (Ge.flags |= e), (o.memoizedState = Mi(1 | t, n, s, r));
}
function ch(e, t) {
  return Xl(8390656, 8, e, t);
}
function $f(e, t) {
  return ou(2048, 8, e, t);
}
function fv(e, t) {
  return ou(4, 2, e, t);
}
function pv(e, t) {
  return ou(4, 4, e, t);
}
function hv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ou(4, 4, hv.bind(null, t, e), n)
  );
}
function kf() {}
function gv(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vv(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yv(e, t, n) {
  return ao & 21
    ? (pn(n, t) || ((n = Cg()), (Ge.lanes |= n), (uo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Nt = !0)), (e.memoizedState = n));
}
function C1(e, t) {
  var n = Me;
  (Me = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xu.transition;
  Xu.transition = {};
  try {
    e(!1), t();
  } finally {
    (Me = n), (Xu.transition = r);
  }
}
function xv() {
  return Jt().memoizedState;
}
function b1(e, t, n) {
  var r = Tr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wv(e))
  )
    Sv(t, n);
  else if (((n = tv(e, t, n, r)), n !== null)) {
    var o = Ct();
    cn(n, e, r, o), _v(n, t, r);
  }
}
function E1(e, t, n) {
  var r = Tr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wv(e)) Sv(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), pn(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), yf(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = tv(e, t, o, r)),
      n !== null && ((o = Ct()), cn(n, e, r, o), _v(n, t, r));
  }
}
function wv(e) {
  var t = e.alternate;
  return e === Ge || (t !== null && t === Ge);
}
function Sv(e, t) {
  di = Ea = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _v(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rf(e, n);
  }
}
var $a = {
    readContext: Xt,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useMutableSource: mt,
    useSyncExternalStore: mt,
    useId: mt,
    unstable_isNewReconciler: !1,
  },
  $1 = {
    readContext: Xt,
    useCallback: function (e, t) {
      return (Sn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xt,
    useEffect: ch,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xl(4194308, 4, hv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Sn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Sn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = b1.bind(null, Ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Sn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uh,
    useDebugValue: kf,
    useDeferredValue: function (e) {
      return (Sn().memoizedState = e);
    },
    useTransition: function () {
      var e = uh(!1),
        t = e[0];
      return (e = C1.bind(null, e[1])), (Sn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ge,
        o = Sn();
      if (ze) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), dt === null)) throw Error(z(349));
        ao & 30 || iv(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        ch(av.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Mi(9, lv.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Sn(),
        t = dt.identifierPrefix;
      if (ze) {
        var n = Zn,
          r = Wn;
        (n = (r & ~(1 << (32 - un(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = _1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  k1 = {
    readContext: Xt,
    useCallback: gv,
    useContext: Xt,
    useEffect: $f,
    useImperativeHandle: mv,
    useInsertionEffect: fv,
    useLayoutEffect: pv,
    useMemo: vv,
    useReducer: Ju,
    useRef: dv,
    useState: function () {
      return Ju(Ti);
    },
    useDebugValue: kf,
    useDeferredValue: function (e) {
      var t = Jt();
      return yv(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = Ju(Ti)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: ov,
    useSyncExternalStore: sv,
    useId: xv,
    unstable_isNewReconciler: !1,
  },
  R1 = {
    readContext: Xt,
    useCallback: gv,
    useContext: Xt,
    useEffect: $f,
    useImperativeHandle: mv,
    useInsertionEffect: fv,
    useLayoutEffect: pv,
    useMemo: vv,
    useReducer: ec,
    useRef: dv,
    useState: function () {
      return ec(Ti);
    },
    useDebugValue: kf,
    useDeferredValue: function (e) {
      var t = Jt();
      return st === null ? (t.memoizedState = e) : yv(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = ec(Ti)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: ov,
    useSyncExternalStore: sv,
    useId: xv,
    unstable_isNewReconciler: !1,
  };
function nn(e, t) {
  if (e && e.defaultProps) {
    (t = Ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function sd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var su = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ct(),
      o = Tr(e),
      s = Kn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Nr(e, s, o)),
      t !== null && (cn(t, e, o, r), Ql(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ct(),
      o = Tr(e),
      s = Kn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Nr(e, s, o)),
      t !== null && (cn(t, e, o, r), Ql(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ct(),
      r = Tr(e),
      o = Kn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Nr(e, o, r)),
      t !== null && (cn(t, e, r, n), Ql(t, e, r));
  },
};
function dh(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ei(n, r) || !Ei(o, s)
      : !0
  );
}
function Cv(e, t, n) {
  var r = !1,
    o = Ir,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Xt(s))
      : ((o = Tt(t) ? io : xt.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ds(e, o) : Ir)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = su),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function fh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && su.enqueueReplaceState(t, t.state, null);
}
function id(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), xf(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = Xt(s))
    : ((s = Tt(t) ? io : xt.current), (o.context = ds(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (sd(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && su.enqueueReplaceState(o, o.state, null),
      Ca(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ms(e, t) {
  try {
    var n = "",
      r = t;
    do (n += nw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function tc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ld(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var j1 = typeof WeakMap == "function" ? WeakMap : Map;
function bv(e, t, n) {
  (n = Kn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ra || ((Ra = !0), (vd = r)), ld(e, t);
    }),
    n
  );
}
function Ev(e, t, n) {
  (n = Kn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ld(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ld(e, t),
          typeof r != "function" &&
            (Pr === null ? (Pr = new Set([this])) : Pr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ph(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new j1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = U1.bind(null, e, t, n)), t.then(e, e));
}
function hh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Kn(-1, 1)), (t.tag = 2), Nr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var N1 = or.ReactCurrentOwner,
  Nt = !1;
function St(e, t, n, r) {
  t.child = e === null ? ev(t, null, n, r) : ps(t, e.child, n, r);
}
function gh(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    ss(t, o),
    (r = bf(e, t, n, r, s, o)),
    (n = Ef()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xn(e, t, o))
      : (ze && n && ff(t), (t.flags |= 1), St(e, t, r, o), t.child)
  );
}
function vh(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Af(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), $v(e, t, s, r, o))
      : ((e = na(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ei), n(i, r) && e.ref === t.ref)
    )
      return Xn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Mr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $v(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ei(s, r) && e.ref === t.ref)
      if (((Nt = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Nt = !0);
      else return (t.lanes = e.lanes), Xn(e, t, o);
  }
  return ad(e, t, n, r, o);
}
function kv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ie(Xo, Dt),
        (Dt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ie(Xo, Dt),
          (Dt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Ie(Xo, Dt),
        (Dt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ie(Xo, Dt),
      (Dt |= r);
  return St(e, t, o, n), t.child;
}
function Rv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ad(e, t, n, r, o) {
  var s = Tt(n) ? io : xt.current;
  return (
    (s = ds(t, s)),
    ss(t, o),
    (n = bf(e, t, n, r, s, o)),
    (r = Ef()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xn(e, t, o))
      : (ze && r && ff(t), (t.flags |= 1), St(e, t, n, o), t.child)
  );
}
function yh(e, t, n, r, o) {
  if (Tt(n)) {
    var s = !0;
    ya(t);
  } else s = !1;
  if ((ss(t, o), t.stateNode === null))
    Jl(e, t), Cv(t, n, r), id(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xt(u))
      : ((u = Tt(n) ? io : xt.current), (u = ds(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && fh(t, i, r, u)),
      (gr = !1);
    var f = t.memoizedState;
    (i.state = f),
      Ca(t, r, i, o),
      (a = t.memoizedState),
      l !== r || f !== a || Pt.current || gr
        ? (typeof d == "function" && (sd(t, n, d, r), (a = t.memoizedState)),
          (l = gr || dh(t, n, l, r, f, a, u))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      nv(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : nn(t.type, l)),
      (i.props = u),
      (p = t.pendingProps),
      (f = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Xt(a))
        : ((a = Tt(n) ? io : xt.current), (a = ds(t, a)));
    var h = n.getDerivedStateFromProps;
    (d =
      typeof h == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== p || f !== a) && fh(t, i, r, a)),
      (gr = !1),
      (f = t.memoizedState),
      (i.state = f),
      Ca(t, r, i, o);
    var x = t.memoizedState;
    l !== p || f !== x || Pt.current || gr
      ? (typeof h == "function" && (sd(t, n, h, r), (x = t.memoizedState)),
        (u = gr || dh(t, n, u, r, f, x, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ud(e, t, n, r, s, o);
}
function ud(e, t, n, r, o, s) {
  Rv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && rh(t, n, !1), Xn(e, t, s);
  (r = t.stateNode), (N1.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ps(t, e.child, null, s)), (t.child = ps(t, null, l, s)))
      : St(e, t, l, s),
    (t.memoizedState = r.state),
    o && rh(t, n, !0),
    t.child
  );
}
function jv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nh(e, t.context, !1),
    wf(e, t.containerInfo);
}
function xh(e, t, n, r, o) {
  return fs(), hf(o), (t.flags |= 256), St(e, t, n, r), t.child;
}
var cd = { dehydrated: null, treeContext: null, retryLane: 0 };
function dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nv(e, t, n) {
  var r = t.pendingProps,
    o = Ze.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ie(Ze, o & 1),
    e === null)
  )
    return (
      rd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = au(i, r, 0, null)),
              (e = oo(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = dd(n)),
              (t.memoizedState = cd),
              e)
            : Rf(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return P1(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Mr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = Mr(l, s)) : ((s = oo(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? dd(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = cd),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Mr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Rf(e, t) {
  return (
    (t = au({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function kl(e, t, n, r) {
  return (
    r !== null && hf(r),
    ps(t, e.child, null, n),
    (e = Rf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function P1(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = tc(Error(z(422)))), kl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = au({ mode: "visible", children: r.children }, o, 0, null)),
        (s = oo(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && ps(t, e.child, null, i),
        (t.child.memoizedState = dd(i)),
        (t.memoizedState = cd),
        s);
  if (!(t.mode & 1)) return kl(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(z(419))), (r = tc(s, r, void 0)), kl(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), Nt || l)) {
    if (((r = dt), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), qn(e, o), cn(r, e, o, -1));
    }
    return Of(), (r = tc(Error(z(421)))), kl(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = H1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Vt = jr(o.nextSibling)),
      (zt = t),
      (ze = !0),
      (on = null),
      e !== null &&
        ((Kt[Yt++] = Wn),
        (Kt[Yt++] = Zn),
        (Kt[Yt++] = lo),
        (Wn = e.id),
        (Zn = e.overflow),
        (lo = t)),
      (t = Rf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), od(e.return, t, n);
}
function nc(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Pv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((St(e, t, r.children, n), (r = Ze.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wh(e, n, t);
        else if (e.tag === 19) wh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ie(Ze, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ba(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          nc(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ba(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        nc(t, !0, n, null, s);
        break;
      case "together":
        nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Jl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (uo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function T1(e, t, n) {
  switch (t.tag) {
    case 3:
      jv(t), fs();
      break;
    case 5:
      rv(t);
      break;
    case 1:
      Tt(t.type) && ya(t);
      break;
    case 4:
      wf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ie(Sa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ie(Ze, Ze.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Nv(e, t, n)
          : (Ie(Ze, Ze.current & 1),
            (e = Xn(e, t, n)),
            e !== null ? e.sibling : null);
      Ie(Ze, Ze.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ie(Ze, Ze.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kv(e, t, n);
  }
  return Xn(e, t, n);
}
var Tv, fd, Mv, Ov;
Tv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
fd = function () {};
Mv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), eo(Rn.current);
    var s = null;
    switch (n) {
      case "input":
        (o = Oc(e, o)), (r = Oc(e, r)), (s = []);
        break;
      case "select":
        (o = Ke({}, o, { value: void 0 })),
          (r = Ke({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = Fc(e, o)), (r = Fc(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ga);
    }
    Lc(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (yi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (yi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Le("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ov = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zs(e, t) {
  if (!ze)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function gt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function M1(e, t, n) {
  var r = t.pendingProps;
  switch ((pf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return gt(t), null;
    case 1:
      return Tt(t.type) && va(), gt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hs(),
        Ve(Pt),
        Ve(xt),
        _f(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (El(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), on !== null && (wd(on), (on = null)))),
        fd(e, t),
        gt(t),
        null
      );
    case 5:
      Sf(t);
      var o = eo(Ni.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return gt(t), null;
        }
        if (((e = eo(Rn.current)), El(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Cn] = t), (r[Ri] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Le("cancel", r), Le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ri.length; o++) Le(ri[o], r);
              break;
            case "source":
              Le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Le("error", r), Le("load", r);
              break;
            case "details":
              Le("toggle", r);
              break;
            case "input":
              jp(r, s), Le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Le("invalid", r);
              break;
            case "textarea":
              Pp(r, s), Le("invalid", r);
          }
          Lc(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : yi.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  Le("scroll", r);
            }
          switch (n) {
            case "input":
              gl(r), Np(r, s, !0);
              break;
            case "textarea":
              gl(r), Tp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ga);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ag(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Cn] = t),
            (e[Ri] = r),
            Tv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Vc(n, r)), n)) {
              case "dialog":
                Le("cancel", e), Le("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ri.length; o++) Le(ri[o], e);
                o = r;
                break;
              case "source":
                Le("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", e), Le("load", e), (o = r);
                break;
              case "details":
                Le("toggle", e), (o = r);
                break;
              case "input":
                jp(e, r), (o = Oc(e, r)), Le("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ke({}, r, { value: void 0 })),
                  Le("invalid", e);
                break;
              case "textarea":
                Pp(e, r), (o = Fc(e, r)), Le("invalid", e);
                break;
              default:
                o = r;
            }
            Lc(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? dg(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ug(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && xi(e, a)
                    : typeof a == "number" && xi(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (yi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && Le("scroll", e)
                      : a != null && qd(e, s, a, i));
              }
            switch (n) {
              case "input":
                gl(e), Np(e, r, !1);
                break;
              case "textarea":
                gl(e), Tp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ar(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ts(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ts(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ga);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return gt(t), null;
    case 6:
      if (e && t.stateNode != null) Ov(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = eo(Ni.current)), eo(Rn.current), El(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Cn] = t),
            (s = r.nodeValue !== n) && ((e = zt), e !== null))
          )
            switch (e.tag) {
              case 3:
                bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Cn] = t),
            (t.stateNode = r);
      }
      return gt(t), null;
    case 13:
      if (
        (Ve(Ze),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ze && Vt !== null && t.mode & 1 && !(t.flags & 128))
          Xg(), fs(), (t.flags |= 98560), (s = !1);
        else if (((s = El(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(z(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(z(317));
            s[Cn] = t;
          } else
            fs(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          gt(t), (s = !1);
        } else on !== null && (wd(on), (on = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ze.current & 1 ? it === 0 && (it = 3) : Of())),
          t.updateQueue !== null && (t.flags |= 4),
          gt(t),
          null);
    case 4:
      return (
        hs(), fd(e, t), e === null && $i(t.stateNode.containerInfo), gt(t), null
      );
    case 10:
      return vf(t.type._context), gt(t), null;
    case 17:
      return Tt(t.type) && va(), gt(t), null;
    case 19:
      if ((Ve(Ze), (s = t.memoizedState), s === null)) return gt(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Zs(s, !1);
        else {
          if (it !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ba(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Zs(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ie(Ze, (Ze.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Je() > gs &&
            ((t.flags |= 128), (r = !0), Zs(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ba(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !ze)
            )
              return gt(t), null;
          } else
            2 * Je() - s.renderingStartTime > gs &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zs(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Je()),
          (t.sibling = null),
          (n = Ze.current),
          Ie(Ze, r ? (n & 1) | 2 : n & 1),
          t)
        : (gt(t), null);
    case 22:
    case 23:
      return (
        Mf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Dt & 1073741824 && (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : gt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function O1(e, t) {
  switch ((pf(t), t.tag)) {
    case 1:
      return (
        Tt(t.type) && va(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hs(),
        Ve(Pt),
        Ve(xt),
        _f(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Sf(t), null;
    case 13:
      if (
        (Ve(Ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        fs();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ve(Ze), null;
    case 4:
      return hs(), null;
    case 10:
      return vf(t.type._context), null;
    case 22:
    case 23:
      return Mf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rl = !1,
  yt = !1,
  A1 = typeof WeakSet == "function" ? WeakSet : Set,
  q = null;
function qo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Qe(e, t, r);
      }
    else n.current = null;
}
function pd(e, t, n) {
  try {
    n();
  } catch (r) {
    Qe(e, t, r);
  }
}
var Sh = !1;
function I1(e, t) {
  if (((Qc = pa), (e = Lg()), df(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = i + o),
                p !== s || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (h = p.firstChild) !== null;

            )
              (f = p), (p = h);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === o && (l = i),
                f === s && ++d === r && (a = i),
                (h = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qc = { focusedElem: e, selectionRange: n }, pa = !1, q = t; q !== null; )
    if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (q = e);
    else
      for (; q !== null; ) {
        t = q;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    S = x.memoizedState,
                    v = t.stateNode,
                    g = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : nn(t.type, y),
                      S
                    );
                  v.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (C) {
          Qe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (q = e);
          break;
        }
        q = t.return;
      }
  return (x = Sh), (Sh = !1), x;
}
function fi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && pd(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function iu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function hd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Av(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Av(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Cn], delete t[Ri], delete t[ed], delete t[y1], delete t[x1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Iv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _h(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Iv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function md(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ga));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (md(e, t, n), e = e.sibling; e !== null; ) md(e, t, n), (e = e.sibling);
}
function gd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gd(e, t, n), e = e.sibling; e !== null; ) gd(e, t, n), (e = e.sibling);
}
var ft = null,
  rn = !1;
function dr(e, t, n) {
  for (n = n.child; n !== null; ) Fv(e, t, n), (n = n.sibling);
}
function Fv(e, t, n) {
  if (kn && typeof kn.onCommitFiberUnmount == "function")
    try {
      kn.onCommitFiberUnmount(Xa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      yt || qo(n, t);
    case 6:
      var r = ft,
        o = rn;
      (ft = null),
        dr(e, t, n),
        (ft = r),
        (rn = o),
        ft !== null &&
          (rn
            ? ((e = ft),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ft.removeChild(n.stateNode));
      break;
    case 18:
      ft !== null &&
        (rn
          ? ((e = ft),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yu(e.parentNode, n)
              : e.nodeType === 1 && Yu(e, n),
            Ci(e))
          : Yu(ft, n.stateNode));
      break;
    case 4:
      (r = ft),
        (o = rn),
        (ft = n.stateNode.containerInfo),
        (rn = !0),
        dr(e, t, n),
        (ft = r),
        (rn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && pd(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      dr(e, t, n);
      break;
    case 1:
      if (
        !yt &&
        (qo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Qe(n, t, l);
        }
      dr(e, t, n);
      break;
    case 21:
      dr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((yt = (r = yt) || n.memoizedState !== null), dr(e, t, n), (yt = r))
        : dr(e, t, n);
      break;
    default:
      dr(e, t, n);
  }
}
function Ch(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new A1()),
      t.forEach(function (r) {
        var o = W1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function en(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ft = l.stateNode), (rn = !1);
              break e;
            case 3:
              (ft = l.stateNode.containerInfo), (rn = !0);
              break e;
            case 4:
              (ft = l.stateNode.containerInfo), (rn = !0);
              break e;
          }
          l = l.return;
        }
        if (ft === null) throw Error(z(160));
        Fv(s, i, o), (ft = null), (rn = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Qe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dv(t, e), (t = t.sibling);
}
function Dv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((en(t, e), wn(e), r & 4)) {
        try {
          fi(3, e, e.return), iu(3, e);
        } catch (y) {
          Qe(e, e.return, y);
        }
        try {
          fi(5, e, e.return);
        } catch (y) {
          Qe(e, e.return, y);
        }
      }
      break;
    case 1:
      en(t, e), wn(e), r & 512 && n !== null && qo(n, n.return);
      break;
    case 5:
      if (
        (en(t, e),
        wn(e),
        r & 512 && n !== null && qo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          xi(o, "");
        } catch (y) {
          Qe(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && ig(o, s),
              Vc(l, i);
            var u = Vc(l, s);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? dg(o, p)
                : d === "dangerouslySetInnerHTML"
                ? ug(o, p)
                : d === "children"
                ? xi(o, p)
                : qd(o, d, p, u);
            }
            switch (l) {
              case "input":
                Ac(o, s);
                break;
              case "textarea":
                lg(o, s);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? ts(o, !!s.multiple, h, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ts(o, !!s.multiple, s.defaultValue, !0)
                      : ts(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Ri] = s;
          } catch (y) {
            Qe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((en(t, e), wn(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (y) {
          Qe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (en(t, e), wn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ci(t.containerInfo);
        } catch (y) {
          Qe(e, e.return, y);
        }
      break;
    case 4:
      en(t, e), wn(e);
      break;
    case 13:
      en(t, e),
        wn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Pf = Je())),
        r & 4 && Ch(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((yt = (u = yt) || d), en(t, e), (yt = u)) : en(t, e),
        wn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (q = e, d = e.child; d !== null; ) {
            for (p = q = d; q !== null; ) {
              switch (((f = q), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fi(4, f, f.return);
                  break;
                case 1:
                  qo(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      Qe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  qo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Eh(p);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (q = h)) : Eh(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = cg("display", i)));
              } catch (y) {
                Qe(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                Qe(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      en(t, e), wn(e), r & 4 && Ch(e);
      break;
    case 21:
      break;
    default:
      en(t, e), wn(e);
  }
}
function wn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Iv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (xi(o, ""), (r.flags &= -33));
          var s = _h(e);
          gd(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = _h(e);
          md(e, l, i);
          break;
        default:
          throw Error(z(161));
      }
    } catch (a) {
      Qe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function F1(e, t, n) {
  (q = e), Lv(e);
}
function Lv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var o = q,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Rl;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || yt;
        l = Rl;
        var u = yt;
        if (((Rl = i), (yt = a) && !u))
          for (q = o; q !== null; )
            (i = q),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? $h(o)
                : a !== null
                ? ((a.return = i), (q = a))
                : $h(o);
        for (; s !== null; ) (q = s), Lv(s), (s = s.sibling);
        (q = o), (Rl = l), (yt = u);
      }
      bh(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (q = s)) : bh(e);
  }
}
function bh(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || iu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ah(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ah(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Ci(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        yt || (t.flags & 512 && hd(t));
      } catch (f) {
        Qe(t, t.return, f);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (q = n);
      break;
    }
    q = t.return;
  }
}
function Eh(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (q = n);
      break;
    }
    q = t.return;
  }
}
function $h(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            iu(4, t);
          } catch (a) {
            Qe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Qe(t, o, a);
            }
          }
          var s = t.return;
          try {
            hd(t);
          } catch (a) {
            Qe(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            hd(t);
          } catch (a) {
            Qe(t, i, a);
          }
      }
    } catch (a) {
      Qe(t, t.return, a);
    }
    if (t === e) {
      q = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (q = l);
      break;
    }
    q = t.return;
  }
}
var D1 = Math.ceil,
  ka = or.ReactCurrentDispatcher,
  jf = or.ReactCurrentOwner,
  qt = or.ReactCurrentBatchConfig,
  ke = 0,
  dt = null,
  tt = null,
  pt = 0,
  Dt = 0,
  Xo = Gr(0),
  it = 0,
  Oi = null,
  uo = 0,
  lu = 0,
  Nf = 0,
  pi = null,
  jt = null,
  Pf = 0,
  gs = 1 / 0,
  zn = null,
  Ra = !1,
  vd = null,
  Pr = null,
  jl = !1,
  _r = null,
  ja = 0,
  hi = 0,
  yd = null,
  ea = -1,
  ta = 0;
function Ct() {
  return ke & 6 ? Je() : ea !== -1 ? ea : (ea = Je());
}
function Tr(e) {
  return e.mode & 1
    ? ke & 2 && pt !== 0
      ? pt & -pt
      : S1.transition !== null
      ? (ta === 0 && (ta = Cg()), ta)
      : ((e = Me),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ng(e.type))),
        e)
    : 1;
}
function cn(e, t, n, r) {
  if (50 < hi) throw ((hi = 0), (yd = null), Error(z(185)));
  el(e, n, r),
    (!(ke & 2) || e !== dt) &&
      (e === dt && (!(ke & 2) && (lu |= n), it === 4 && xr(e, pt)),
      Mt(e, r),
      n === 1 && ke === 0 && !(t.mode & 1) && ((gs = Je() + 500), ru && Kr()));
}
function Mt(e, t) {
  var n = e.callbackNode;
  Sw(e, t);
  var r = fa(e, e === dt ? pt : 0);
  if (r === 0)
    n !== null && Ap(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ap(n), t === 1))
      e.tag === 0 ? w1(kh.bind(null, e)) : Yg(kh.bind(null, e)),
        g1(function () {
          !(ke & 6) && Kr();
        }),
        (n = null);
    else {
      switch (bg(r)) {
        case 1:
          n = nf;
          break;
        case 4:
          n = Sg;
          break;
        case 16:
          n = da;
          break;
        case 536870912:
          n = _g;
          break;
        default:
          n = da;
      }
      n = Gv(n, Vv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vv(e, t) {
  if (((ea = -1), (ta = 0), ke & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (is() && e.callbackNode !== n) return null;
  var r = fa(e, e === dt ? pt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Na(e, r);
  else {
    t = r;
    var o = ke;
    ke |= 2;
    var s = Bv();
    (dt !== e || pt !== t) && ((zn = null), (gs = Je() + 500), ro(e, t));
    do
      try {
        z1();
        break;
      } catch (l) {
        zv(e, l);
      }
    while (!0);
    gf(),
      (ka.current = s),
      (ke = o),
      tt !== null ? (t = 0) : ((dt = null), (pt = 0), (t = it));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Wc(e)), o !== 0 && ((r = o), (t = xd(e, o)))), t === 1)
    )
      throw ((n = Oi), ro(e, 0), xr(e, r), Mt(e, Je()), n);
    if (t === 6) xr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !L1(o) &&
          ((t = Na(e, r)),
          t === 2 && ((s = Wc(e)), s !== 0 && ((r = s), (t = xd(e, s)))),
          t === 1))
      )
        throw ((n = Oi), ro(e, 0), xr(e, r), Mt(e, Je()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          qr(e, jt, zn);
          break;
        case 3:
          if (
            (xr(e, r), (r & 130023424) === r && ((t = Pf + 500 - Je()), 10 < t))
          ) {
            if (fa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ct(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Jc(qr.bind(null, e, jt, zn), t);
            break;
          }
          qr(e, jt, zn);
          break;
        case 4:
          if ((xr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - un(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = Je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * D1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Jc(qr.bind(null, e, jt, zn), r);
            break;
          }
          qr(e, jt, zn);
          break;
        case 5:
          qr(e, jt, zn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Mt(e, Je()), e.callbackNode === n ? Vv.bind(null, e) : null;
}
function xd(e, t) {
  var n = pi;
  return (
    e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256),
    (e = Na(e, t)),
    e !== 2 && ((t = jt), (jt = n), t !== null && wd(t)),
    e
  );
}
function wd(e) {
  jt === null ? (jt = e) : jt.push.apply(jt, e);
}
function L1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!pn(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xr(e, t) {
  for (
    t &= ~Nf,
      t &= ~lu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - un(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kh(e) {
  if (ke & 6) throw Error(z(327));
  is();
  var t = fa(e, 0);
  if (!(t & 1)) return Mt(e, Je()), null;
  var n = Na(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wc(e);
    r !== 0 && ((t = r), (n = xd(e, r)));
  }
  if (n === 1) throw ((n = Oi), ro(e, 0), xr(e, t), Mt(e, Je()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qr(e, jt, zn),
    Mt(e, Je()),
    null
  );
}
function Tf(e, t) {
  var n = ke;
  ke |= 1;
  try {
    return e(t);
  } finally {
    (ke = n), ke === 0 && ((gs = Je() + 500), ru && Kr());
  }
}
function co(e) {
  _r !== null && _r.tag === 0 && !(ke & 6) && is();
  var t = ke;
  ke |= 1;
  var n = qt.transition,
    r = Me;
  try {
    if (((qt.transition = null), (Me = 1), e)) return e();
  } finally {
    (Me = r), (qt.transition = n), (ke = t), !(ke & 6) && Kr();
  }
}
function Mf() {
  (Dt = Xo.current), Ve(Xo);
}
function ro(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), m1(n)), tt !== null))
    for (n = tt.return; n !== null; ) {
      var r = n;
      switch ((pf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && va();
          break;
        case 3:
          hs(), Ve(Pt), Ve(xt), _f();
          break;
        case 5:
          Sf(r);
          break;
        case 4:
          hs();
          break;
        case 13:
          Ve(Ze);
          break;
        case 19:
          Ve(Ze);
          break;
        case 10:
          vf(r.type._context);
          break;
        case 22:
        case 23:
          Mf();
      }
      n = n.return;
    }
  if (
    ((dt = e),
    (tt = e = Mr(e.current, null)),
    (pt = Dt = t),
    (it = 0),
    (Oi = null),
    (Nf = lu = uo = 0),
    (jt = pi = null),
    Jr !== null)
  ) {
    for (t = 0; t < Jr.length; t++)
      if (((n = Jr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Jr = null;
  }
  return e;
}
function zv(e, t) {
  do {
    var n = tt;
    try {
      if ((gf(), (ql.current = $a), Ea)) {
        for (var r = Ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ea = !1;
      }
      if (
        ((ao = 0),
        (ct = st = Ge = null),
        (di = !1),
        (Pi = 0),
        (jf.current = null),
        n === null || n.return === null)
      ) {
        (it = 1), (Oi = t), (tt = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = pt),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var h = hh(i);
          if (h !== null) {
            (h.flags &= -257),
              mh(h, i, l, s, t),
              h.mode & 1 && ph(s, u, t),
              (t = h),
              (a = u);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ph(s, u, t), Of();
              break e;
            }
            a = Error(z(426));
          }
        } else if (ze && l.mode & 1) {
          var S = hh(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              mh(S, i, l, s, t),
              hf(ms(a, l));
            break e;
          }
        }
        (s = a = ms(a, l)),
          it !== 4 && (it = 2),
          pi === null ? (pi = [s]) : pi.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = bv(s, a, t);
              lh(s, v);
              break e;
            case 1:
              l = a;
              var g = s.type,
                w = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Pr === null || !Pr.has(w))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var C = Ev(s, l, t);
                lh(s, C);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Hv(n);
    } catch (E) {
      (t = E), tt === n && n !== null && (tt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bv() {
  var e = ka.current;
  return (ka.current = $a), e === null ? $a : e;
}
function Of() {
  (it === 0 || it === 3 || it === 2) && (it = 4),
    dt === null || (!(uo & 268435455) && !(lu & 268435455)) || xr(dt, pt);
}
function Na(e, t) {
  var n = ke;
  ke |= 2;
  var r = Bv();
  (dt !== e || pt !== t) && ((zn = null), ro(e, t));
  do
    try {
      V1();
      break;
    } catch (o) {
      zv(e, o);
    }
  while (!0);
  if ((gf(), (ke = n), (ka.current = r), tt !== null)) throw Error(z(261));
  return (dt = null), (pt = 0), it;
}
function V1() {
  for (; tt !== null; ) Uv(tt);
}
function z1() {
  for (; tt !== null && !fw(); ) Uv(tt);
}
function Uv(e) {
  var t = Zv(e.alternate, e, Dt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hv(e) : (tt = t),
    (jf.current = null);
}
function Hv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = O1(n, t)), n !== null)) {
        (n.flags &= 32767), (tt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (it = 6), (tt = null);
        return;
      }
    } else if (((n = M1(n, t, Dt)), n !== null)) {
      tt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      tt = t;
      return;
    }
    tt = t = e;
  } while (t !== null);
  it === 0 && (it = 5);
}
function qr(e, t, n) {
  var r = Me,
    o = qt.transition;
  try {
    (qt.transition = null), (Me = 1), B1(e, t, n, r);
  } finally {
    (qt.transition = o), (Me = r);
  }
  return null;
}
function B1(e, t, n, r) {
  do is();
  while (_r !== null);
  if (ke & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (_w(e, s),
    e === dt && ((tt = dt = null), (pt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jl ||
      ((jl = !0),
      Gv(da, function () {
        return is(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = qt.transition), (qt.transition = null);
    var i = Me;
    Me = 1;
    var l = ke;
    (ke |= 4),
      (jf.current = null),
      I1(e, n),
      Dv(n, e),
      a1(qc),
      (pa = !!Qc),
      (qc = Qc = null),
      (e.current = n),
      F1(n),
      pw(),
      (ke = l),
      (Me = i),
      (qt.transition = s);
  } else e.current = n;
  if (
    (jl && ((jl = !1), (_r = e), (ja = o)),
    (s = e.pendingLanes),
    s === 0 && (Pr = null),
    gw(n.stateNode),
    Mt(e, Je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ra) throw ((Ra = !1), (e = vd), (vd = null), e);
  return (
    ja & 1 && e.tag !== 0 && is(),
    (s = e.pendingLanes),
    s & 1 ? (e === yd ? hi++ : ((hi = 0), (yd = e))) : (hi = 0),
    Kr(),
    null
  );
}
function is() {
  if (_r !== null) {
    var e = bg(ja),
      t = qt.transition,
      n = Me;
    try {
      if (((qt.transition = null), (Me = 16 > e ? 16 : e), _r === null))
        var r = !1;
      else {
        if (((e = _r), (_r = null), (ja = 0), ke & 6)) throw Error(z(331));
        var o = ke;
        for (ke |= 4, q = e.current; q !== null; ) {
          var s = q,
            i = s.child;
          if (q.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (q = u; q !== null; ) {
                  var d = q;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fi(8, d, s);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (q = p);
                  else
                    for (; q !== null; ) {
                      d = q;
                      var f = d.sibling,
                        h = d.return;
                      if ((Av(d), d === u)) {
                        q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (q = f);
                        break;
                      }
                      q = h;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              q = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (q = i);
          else
            e: for (; q !== null; ) {
              if (((s = q), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fi(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (q = v);
                break e;
              }
              q = s.return;
            }
        }
        var g = e.current;
        for (q = g; q !== null; ) {
          i = q;
          var w = i.child;
          if (i.subtreeFlags & 2064 && w !== null) (w.return = i), (q = w);
          else
            e: for (i = g; q !== null; ) {
              if (((l = q), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      iu(9, l);
                  }
                } catch (E) {
                  Qe(l, l.return, E);
                }
              if (l === i) {
                q = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (q = C);
                break e;
              }
              q = l.return;
            }
        }
        if (
          ((ke = o), Kr(), kn && typeof kn.onPostCommitFiberRoot == "function")
        )
          try {
            kn.onPostCommitFiberRoot(Xa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Me = n), (qt.transition = t);
    }
  }
  return !1;
}
function Rh(e, t, n) {
  (t = ms(n, t)),
    (t = bv(e, t, 1)),
    (e = Nr(e, t, 1)),
    (t = Ct()),
    e !== null && (el(e, 1, t), Mt(e, t));
}
function Qe(e, t, n) {
  if (e.tag === 3) Rh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pr === null || !Pr.has(r)))
        ) {
          (e = ms(n, e)),
            (e = Ev(t, e, 1)),
            (t = Nr(t, e, 1)),
            (e = Ct()),
            t !== null && (el(t, 1, e), Mt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function U1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ct()),
    (e.pingedLanes |= e.suspendedLanes & n),
    dt === e &&
      (pt & n) === n &&
      (it === 4 || (it === 3 && (pt & 130023424) === pt && 500 > Je() - Pf)
        ? ro(e, 0)
        : (Nf |= n)),
    Mt(e, t);
}
function Wv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xl), (xl <<= 1), !(xl & 130023424) && (xl = 4194304))
      : (t = 1));
  var n = Ct();
  (e = qn(e, t)), e !== null && (el(e, t, n), Mt(e, n));
}
function H1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wv(e, n);
}
function W1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), Wv(e, n);
}
var Zv;
Zv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current) Nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Nt = !1), T1(e, t, n);
      Nt = !!(e.flags & 131072);
    }
  else (Nt = !1), ze && t.flags & 1048576 && Qg(t, wa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Jl(e, t), (e = t.pendingProps);
      var o = ds(t, xt.current);
      ss(t, n), (o = bf(null, t, r, e, o, n));
      var s = Ef();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Tt(r) ? ((s = !0), ya(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            xf(t),
            (o.updater = su),
            (t.stateNode = o),
            (o._reactInternals = t),
            id(t, r, e, n),
            (t = ud(null, t, r, !0, s, n)))
          : ((t.tag = 0), ze && s && ff(t), St(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Jl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = G1(r)),
          (e = nn(r, e)),
          o)
        ) {
          case 0:
            t = ad(null, t, r, e, n);
            break e;
          case 1:
            t = yh(null, t, r, e, n);
            break e;
          case 11:
            t = gh(null, t, r, e, n);
            break e;
          case 14:
            t = vh(null, t, r, nn(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        ad(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        yh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((jv(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          nv(e, t),
          Ca(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = ms(Error(z(423)), t)), (t = xh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ms(Error(z(424)), t)), (t = xh(e, t, r, n, o));
            break e;
          } else
            for (
              Vt = jr(t.stateNode.containerInfo.firstChild),
                zt = t,
                ze = !0,
                on = null,
                n = ev(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fs(), r === o)) {
            t = Xn(e, t, n);
            break e;
          }
          St(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rv(t),
        e === null && rd(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Xc(r, o) ? (i = null) : s !== null && Xc(r, s) && (t.flags |= 32),
        Rv(e, t),
        St(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && rd(t), null;
    case 13:
      return Nv(e, t, n);
    case 4:
      return (
        wf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ps(t, null, r, n)) : St(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        gh(e, t, r, o, n)
      );
    case 7:
      return St(e, t, t.pendingProps, n), t.child;
    case 8:
      return St(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return St(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          Ie(Sa, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (pn(s.value, i)) {
            if (s.children === o.children && !Pt.current) {
              t = Xn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Kn(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      od(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(z(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  od(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        St(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ss(t, n),
        (o = Xt(o)),
        (r = r(o)),
        (t.flags |= 1),
        St(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = nn(r, t.pendingProps)),
        (o = nn(r.type, o)),
        vh(e, t, r, o, n)
      );
    case 15:
      return $v(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        Jl(e, t),
        (t.tag = 1),
        Tt(r) ? ((e = !0), ya(t)) : (e = !1),
        ss(t, n),
        Cv(t, r, o),
        id(t, r, o, n),
        ud(null, t, r, !0, e, n)
      );
    case 19:
      return Pv(e, t, n);
    case 22:
      return kv(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Gv(e, t) {
  return wg(e, t);
}
function Z1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qt(e, t, n, r) {
  return new Z1(e, t, n, r);
}
function Af(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function G1(e) {
  if (typeof e == "function") return Af(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jd)) return 11;
    if (e === ef) return 14;
  }
  return 2;
}
function Mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function na(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Af(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Bo:
        return oo(n.children, o, s, t);
      case Xd:
        (i = 8), (o |= 8);
        break;
      case Nc:
        return (
          (e = Qt(12, n, t, o | 2)), (e.elementType = Nc), (e.lanes = s), e
        );
      case Pc:
        return (e = Qt(13, n, t, o)), (e.elementType = Pc), (e.lanes = s), e;
      case Tc:
        return (e = Qt(19, n, t, o)), (e.elementType = Tc), (e.lanes = s), e;
      case rg:
        return au(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case tg:
              i = 10;
              break e;
            case ng:
              i = 9;
              break e;
            case Jd:
              i = 11;
              break e;
            case ef:
              i = 14;
              break e;
            case mr:
              (i = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function oo(e, t, n, r) {
  return (e = Qt(7, e, r, t)), (e.lanes = n), e;
}
function au(e, t, n, r) {
  return (
    (e = Qt(22, e, r, t)),
    (e.elementType = rg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function rc(e, t, n) {
  return (e = Qt(6, e, null, t)), (e.lanes = n), e;
}
function oc(e, t, n) {
  return (
    (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function K1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Du(0)),
    (this.expirationTimes = Du(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Du(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function If(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new K1(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Qt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xf(s),
    e
  );
}
function Y1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kv(e) {
  if (!e) return Ir;
  e = e._reactInternals;
  e: {
    if (yo(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Tt(n)) return Kg(e, n, t);
  }
  return t;
}
function Yv(e, t, n, r, o, s, i, l, a) {
  return (
    (e = If(n, r, !0, e, o, s, i, l, a)),
    (e.context = Kv(null)),
    (n = e.current),
    (r = Ct()),
    (o = Tr(n)),
    (s = Kn(r, o)),
    (s.callback = t ?? null),
    Nr(n, s, o),
    (e.current.lanes = o),
    el(e, o, r),
    Mt(e, r),
    e
  );
}
function uu(e, t, n, r) {
  var o = t.current,
    s = Ct(),
    i = Tr(o);
  return (
    (n = Kv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Kn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nr(o, t, i)),
    e !== null && (cn(e, o, i, s), Ql(e, o, i)),
    i
  );
}
function Pa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ff(e, t) {
  jh(e, t), (e = e.alternate) && jh(e, t);
}
function Q1() {
  return null;
}
var Qv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Df(e) {
  this._internalRoot = e;
}
cu.prototype.render = Df.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  uu(e, t, null, null);
};
cu.prototype.unmount = Df.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    co(function () {
      uu(null, e, null, null);
    }),
      (t[Qn] = null);
  }
};
function cu(e) {
  this._internalRoot = e;
}
cu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yr.length && t !== 0 && t < yr[n].priority; n++);
    yr.splice(n, 0, e), n === 0 && jg(e);
  }
};
function Lf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function du(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nh() {}
function q1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Pa(i);
        s.call(u);
      };
    }
    var i = Yv(t, r, e, 0, null, !1, !1, "", Nh);
    return (
      (e._reactRootContainer = i),
      (e[Qn] = i.current),
      $i(e.nodeType === 8 ? e.parentNode : e),
      co(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Pa(a);
      l.call(u);
    };
  }
  var a = If(e, 0, !1, null, null, !1, !1, "", Nh);
  return (
    (e._reactRootContainer = a),
    (e[Qn] = a.current),
    $i(e.nodeType === 8 ? e.parentNode : e),
    co(function () {
      uu(t, a, n, r);
    }),
    a
  );
}
function fu(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Pa(i);
        l.call(a);
      };
    }
    uu(t, i, e, o);
  } else i = q1(n, t, e, o, r);
  return Pa(i);
}
Eg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ni(t.pendingLanes);
        n !== 0 &&
          (rf(t, n | 1), Mt(t, Je()), !(ke & 6) && ((gs = Je() + 500), Kr()));
      }
      break;
    case 13:
      co(function () {
        var r = qn(e, 1);
        if (r !== null) {
          var o = Ct();
          cn(r, e, 1, o);
        }
      }),
        Ff(e, 1);
  }
};
of = function (e) {
  if (e.tag === 13) {
    var t = qn(e, 134217728);
    if (t !== null) {
      var n = Ct();
      cn(t, e, 134217728, n);
    }
    Ff(e, 134217728);
  }
};
$g = function (e) {
  if (e.tag === 13) {
    var t = Tr(e),
      n = qn(e, t);
    if (n !== null) {
      var r = Ct();
      cn(n, e, t, r);
    }
    Ff(e, t);
  }
};
kg = function () {
  return Me;
};
Rg = function (e, t) {
  var n = Me;
  try {
    return (Me = e), t();
  } finally {
    Me = n;
  }
};
Bc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ac(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = nu(r);
            if (!o) throw Error(z(90));
            sg(r), Ac(r, o);
          }
        }
      }
      break;
    case "textarea":
      lg(e, n);
      break;
    case "select":
      (t = n.value), t != null && ts(e, !!n.multiple, t, !1);
  }
};
hg = Tf;
mg = co;
var X1 = { usingClientEntryPoint: !1, Events: [nl, Zo, nu, fg, pg, Tf] },
  Gs = {
    findFiberByHostInstance: Xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  J1 = {
    bundleType: Gs.bundleType,
    version: Gs.version,
    rendererPackageName: Gs.rendererPackageName,
    rendererConfig: Gs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: or.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gs.findFiberByHostInstance || Q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nl.isDisabled && Nl.supportsFiber)
    try {
      (Xa = Nl.inject(J1)), (kn = Nl);
    } catch {}
}
Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1;
Zt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lf(t)) throw Error(z(200));
  return Y1(e, t, null, n);
};
Zt.createRoot = function (e, t) {
  if (!Lf(e)) throw Error(z(299));
  var n = !1,
    r = "",
    o = Qv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = If(e, 1, !1, null, null, n, !1, r, o)),
    (e[Qn] = t.current),
    $i(e.nodeType === 8 ? e.parentNode : e),
    new Df(t)
  );
};
Zt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = yg(t)), (e = e === null ? null : e.stateNode), e;
};
Zt.flushSync = function (e) {
  return co(e);
};
Zt.hydrate = function (e, t, n) {
  if (!du(t)) throw Error(z(200));
  return fu(null, e, t, !0, n);
};
Zt.hydrateRoot = function (e, t, n) {
  if (!Lf(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Qv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Yv(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Qn] = t.current),
    $i(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new cu(t);
};
Zt.render = function (e, t, n) {
  if (!du(t)) throw Error(z(200));
  return fu(null, e, t, !1, n);
};
Zt.unmountComponentAtNode = function (e) {
  if (!du(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (co(function () {
        fu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qn] = null);
        });
      }),
      !0)
    : !1;
};
Zt.unstable_batchedUpdates = Tf;
Zt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!du(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return fu(e, t, n, !1, r);
};
Zt.version = "18.3.1-next-f1338f8080-20240426";
function qv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv);
    } catch (e) {
      console.error(e);
    }
}
qv(), (qm.exports = Zt);
var xo = qm.exports;
const Xv = Dm(xo);
var Ph = xo;
(Rc.createRoot = Ph.createRoot), (Rc.hydrateRoot = Ph.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ai() {
  return (
    (Ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ai.apply(this, arguments)
  );
}
var Cr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Cr || (Cr = {}));
const Th = "popstate";
function eS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return Sd(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Ta(o);
  }
  return nS(t, n, null, e);
}
function nt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Jv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function tS() {
  return Math.random().toString(36).substr(2, 8);
}
function Mh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Sd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ai(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Rs(t) : t,
      { state: n, key: (t && t.key) || r || tS() }
    )
  );
}
function Ta(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Rs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function nS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Cr.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), i.replaceState(Ai({}, i.state, { idx: u }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    l = Cr.Pop;
    let S = d(),
      v = S == null ? null : S - u;
    (u = S), a && a({ action: l, location: y.location, delta: v });
  }
  function f(S, v) {
    l = Cr.Push;
    let g = Sd(y.location, S, v);
    u = d() + 1;
    let w = Mh(g, u),
      C = y.createHref(g);
    try {
      i.pushState(w, "", C);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(C);
    }
    s && a && a({ action: l, location: y.location, delta: 1 });
  }
  function h(S, v) {
    l = Cr.Replace;
    let g = Sd(y.location, S, v);
    u = d();
    let w = Mh(g, u),
      C = y.createHref(g);
    i.replaceState(w, "", C),
      s && a && a({ action: l, location: y.location, delta: 0 });
  }
  function x(S) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      g = typeof S == "string" ? S : Ta(S);
    return (
      (g = g.replace(/ $/, "%20")),
      nt(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, v)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Th, p),
        (a = S),
        () => {
          o.removeEventListener(Th, p), (a = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: x,
    encodeLocation(S) {
      let v = x(S);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: f,
    replace: h,
    go(S) {
      return i.go(S);
    },
  };
  return y;
}
var Oh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Oh || (Oh = {}));
function rS(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Rs(t) : t,
    o = Vf(r.pathname || "/", n);
  if (o == null) return null;
  let s = e0(e);
  oS(s);
  let i = null;
  for (let l = 0; i == null && l < s.length; ++l) {
    let a = gS(o);
    i = pS(s[l], a);
  }
  return i;
}
function e0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (nt(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Or([r, a.relativePath]),
      d = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (nt(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      e0(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: dS(u, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of t0(s.path)) o(s, i, a);
    }),
    t
  );
}
function t0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = t0(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function oS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : fS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const sS = /^:[\w-]+$/,
  iS = 3,
  lS = 2,
  aS = 1,
  uS = 10,
  cS = -2,
  Ah = (e) => e === "*";
function dS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ah) && (r += cS),
    t && (r += lS),
    n
      .filter((o) => !Ah(o))
      .reduce((o, s) => o + (sS.test(s) ? iS : s === "" ? aS : uS), r)
  );
}
function fS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function pS(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    s = [];
  for (let i = 0; i < n.length; ++i) {
    let l = n[i],
      a = i === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = hS(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let p = l.route;
    s.push({
      params: r,
      pathname: Or([o, d.pathname]),
      pathnameBase: wS(Or([o, d.pathnameBase])),
      route: p,
    }),
      d.pathnameBase !== "/" && (o = Or([o, d.pathnameBase]));
  }
  return s;
}
function hS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let { paramName: f, isOptional: h } = d;
      if (f === "*") {
        let y = l[p] || "";
        i = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const x = l[p];
      return (
        h && !x ? (u[f] = void 0) : (u[f] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function mS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function gS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Jv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Vf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function vS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Rs(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : yS(n, t)) : t,
    search: SS(r),
    hash: _S(o),
  };
}
function yS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function sc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function n0(e, t) {
  let n = xS(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function r0(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Rs(e))
    : ((o = Ai({}, e)),
      nt(
        !o.pathname || !o.pathname.includes("?"),
        sc("?", "pathname", "search", o)
      ),
      nt(
        !o.pathname || !o.pathname.includes("#"),
        sc("#", "pathname", "hash", o)
      ),
      nt(!o.search || !o.search.includes("#"), sc("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    l;
  if (i == null) l = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let f = i.split("/");
      for (; f[0] === ".."; ) f.shift(), (p -= 1);
      o.pathname = f.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let a = vS(o, l),
    u = i && i !== "/" && i.endsWith("/"),
    d = (s || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const Or = (e) => e.join("/").replace(/\/\/+/g, "/"),
  wS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  SS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  _S = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function CS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const o0 = ["post", "put", "patch", "delete"];
new Set(o0);
const bS = ["get", ...o0];
new Set(bS);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ii() {
  return (
    (Ii = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ii.apply(this, arguments)
  );
}
const zf = m.createContext(null),
  ES = m.createContext(null),
  wo = m.createContext(null),
  pu = m.createContext(null),
  Yr = m.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  s0 = m.createContext(null);
function $S(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ol() || nt(!1);
  let { basename: r, navigator: o } = m.useContext(wo),
    { hash: s, pathname: i, search: l } = l0(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Or([r, i])),
    o.createHref({ pathname: a, search: l, hash: s })
  );
}
function ol() {
  return m.useContext(pu) != null;
}
function js() {
  return ol() || nt(!1), m.useContext(pu).location;
}
function i0(e) {
  m.useContext(wo).static || m.useLayoutEffect(e);
}
function hu() {
  let { isDataRoute: e } = m.useContext(Yr);
  return e ? VS() : kS();
}
function kS() {
  ol() || nt(!1);
  let e = m.useContext(zf),
    { basename: t, future: n, navigator: r } = m.useContext(wo),
    { matches: o } = m.useContext(Yr),
    { pathname: s } = js(),
    i = JSON.stringify(n0(o, n.v7_relativeSplatPath)),
    l = m.useRef(!1);
  return (
    i0(() => {
      l.current = !0;
    }),
    m.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let p = r0(u, JSON.parse(i), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Or([t, p.pathname])),
          (d.replace ? r.replace : r.push)(p, d.state, d);
      },
      [t, r, i, s, e]
    )
  );
}
function RS() {
  let { matches: e } = m.useContext(Yr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function l0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = m.useContext(wo),
    { matches: o } = m.useContext(Yr),
    { pathname: s } = js(),
    i = JSON.stringify(n0(o, r.v7_relativeSplatPath));
  return m.useMemo(() => r0(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function jS(e, t) {
  return NS(e, t);
}
function NS(e, t, n, r) {
  ol() || nt(!1);
  let { navigator: o } = m.useContext(wo),
    { matches: s } = m.useContext(Yr),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = js(),
    d;
  if (t) {
    var p;
    let S = typeof t == "string" ? Rs(t) : t;
    a === "/" || ((p = S.pathname) != null && p.startsWith(a)) || nt(!1),
      (d = S);
  } else d = u;
  let f = d.pathname || "/",
    h = f;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let x = rS(e, { pathname: h }),
    y = AS(
      x &&
        x.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Or([
              a,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : Or([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && y
    ? m.createElement(
        pu.Provider,
        {
          value: {
            location: Ii(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Cr.Pop,
          },
        },
        y
      )
    : y;
}
function PS() {
  let e = LS(),
    t = CS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return m.createElement(
    m.Fragment,
    null,
    m.createElement("h2", null, "Unexpected Application Error!"),
    m.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? m.createElement("pre", { style: o }, n) : null,
    null
  );
}
const TS = m.createElement(PS, null);
class MS extends m.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? m.createElement(
          Yr.Provider,
          { value: this.props.routeContext },
          m.createElement(s0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function OS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = m.useContext(zf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(Yr.Provider, { value: t }, r)
  );
}
function AS(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = i.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0
    );
    d >= 0 || nt(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let p = i[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d),
        p.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          x =
            p.route.loader &&
            f[p.route.id] === void 0 &&
            (!h || h[p.route.id] === void 0);
        if (p.route.lazy || x) {
          (a = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, p, f) => {
    let h,
      x = !1,
      y = null,
      S = null;
    n &&
      ((h = l && p.route.id ? l[p.route.id] : void 0),
      (y = p.route.errorElement || TS),
      a &&
        (u < 0 && f === 0
          ? ((x = !0), (S = null))
          : u === f &&
            ((x = !0), (S = p.route.hydrateFallbackElement || null))));
    let v = t.concat(i.slice(0, f + 1)),
      g = () => {
        let w;
        return (
          h
            ? (w = y)
            : x
            ? (w = S)
            : p.route.Component
            ? (w = m.createElement(p.route.Component, null))
            : p.route.element
            ? (w = p.route.element)
            : (w = d),
          m.createElement(OS, {
            match: p,
            routeContext: { outlet: d, matches: v, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || f === 0)
      ? m.createElement(MS, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var a0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(a0 || {}),
  Ma = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ma || {});
function IS(e) {
  let t = m.useContext(zf);
  return t || nt(!1), t;
}
function FS(e) {
  let t = m.useContext(ES);
  return t || nt(!1), t;
}
function DS(e) {
  let t = m.useContext(Yr);
  return t || nt(!1), t;
}
function u0(e) {
  let t = DS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || nt(!1), n.route.id;
}
function LS() {
  var e;
  let t = m.useContext(s0),
    n = FS(Ma.UseRouteError),
    r = u0(Ma.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function VS() {
  let { router: e } = IS(a0.UseNavigateStable),
    t = u0(Ma.UseNavigateStable),
    n = m.useRef(!1);
  return (
    i0(() => {
      n.current = !0;
    }),
    m.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ii({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function tn(e) {
  nt(!1);
}
function zS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Cr.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  ol() && nt(!1);
  let a = t.replace(/^\/*/, "/"),
    u = m.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: Ii({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = Rs(r));
  let {
      pathname: d = "/",
      search: p = "",
      hash: f = "",
      state: h = null,
      key: x = "default",
    } = r,
    y = m.useMemo(() => {
      let S = Vf(d, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: p, hash: f, state: h, key: x },
            navigationType: o,
          };
    }, [a, d, p, f, h, x, o]);
  return y == null
    ? null
    : m.createElement(
        wo.Provider,
        { value: u },
        m.createElement(pu.Provider, { children: n, value: y })
      );
}
function BS(e) {
  let { children: t, location: n } = e;
  return jS(_d(t), n);
}
new Promise(() => {});
function _d(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    m.Children.forEach(e, (r, o) => {
      if (!m.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === m.Fragment) {
        n.push.apply(n, _d(r.props.children, s));
        return;
      }
      r.type !== tn && nt(!1), !r.props.index || !r.props.children || nt(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = _d(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cd() {
  return (
    (Cd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cd.apply(this, arguments)
  );
}
function US(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function HS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function WS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !HS(e);
}
const ZS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  GS = "6";
try {
  window.__reactRouterVersion = GS;
} catch {}
const KS = "startTransition",
  Ih = Ym[KS];
function YS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = m.useRef();
  s.current == null && (s.current = eS({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = m.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    d = m.useCallback(
      (p) => {
        u && Ih ? Ih(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    m.useLayoutEffect(() => i.listen(d), [i, d]),
    m.createElement(zS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
const QS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  qS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fr = m.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: l,
        target: a,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: p,
      } = t,
      f = US(t, ZS),
      { basename: h } = m.useContext(wo),
      x,
      y = !1;
    if (typeof u == "string" && qS.test(u) && ((x = u), QS))
      try {
        let w = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          E = Vf(C.pathname, h);
        C.origin === w.origin && E != null
          ? (u = E + C.search + C.hash)
          : (y = !0);
      } catch {}
    let S = $S(u, { relative: o }),
      v = XS(u, {
        replace: i,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: o,
        unstable_viewTransition: p,
      });
    function g(w) {
      r && r(w), w.defaultPrevented || v(w);
    }
    return m.createElement(
      "a",
      Cd({}, f, { href: x || S, onClick: y || s ? r : g, ref: n, target: a })
    );
  });
var Fh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Fh || (Fh = {}));
var Dh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Dh || (Dh = {}));
function XS(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = hu(),
    u = js(),
    d = l0(e, { relative: i });
  return m.useCallback(
    (p) => {
      if (WS(p, n)) {
        p.preventDefault();
        let f = r !== void 0 ? r : Ta(u) === Ta(d);
        a(e, {
          replace: f,
          state: o,
          preventScrollReset: s,
          relative: i,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, d, r, o, n, e, s, i, l]
  );
}
const JS = "_container_1fjwc_1",
  e_ = { container: JS };
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  c0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var n_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r_ = m.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    a
  ) =>
    m.createElement(
      "svg",
      {
        ref: a,
        ...n_,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: c0("lucide", o),
        ...l,
      },
      [
        ...i.map(([u, d]) => m.createElement(u, d)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sr = (e, t) => {
  const n = m.forwardRef(({ className: r, ...o }, s) =>
    m.createElement(r_, {
      ref: s,
      iconNode: t,
      className: c0(`lucide-${t_(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = sr("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o_ = sr("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d0 = sr("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ns = sr("PackageSearch", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h",
    },
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = sr("Pencil", [
  [
    "path",
    { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s_ = sr("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f0 = sr("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = sr("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i_ = sr("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
function re() {
  return (
    (re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    re.apply(this, arguments)
  );
}
function l_(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function p0(...e) {
  return (t) => e.forEach((n) => l_(n, t));
}
function Xe(...e) {
  return m.useCallback(p0(...e), e);
}
const Dr = m.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = m.Children.toArray(n),
    s = o.find(a_);
  if (s) {
    const i = s.props.children,
      l = o.map((a) =>
        a === s
          ? m.Children.count(i) > 1
            ? m.Children.only(null)
            : m.isValidElement(i)
            ? i.props.children
            : null
          : a
      );
    return m.createElement(
      bd,
      re({}, r, { ref: t }),
      m.isValidElement(i) ? m.cloneElement(i, void 0, l) : null
    );
  }
  return m.createElement(bd, re({}, r, { ref: t }), n);
});
Dr.displayName = "Slot";
const bd = m.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return m.isValidElement(n)
    ? m.cloneElement(n, { ...u_(r, n.props), ref: t ? p0(t, n.ref) : n.ref })
    : m.Children.count(n) > 1
    ? m.Children.only(null)
    : null;
});
bd.displayName = "SlotClone";
const h0 = ({ children: e }) => m.createElement(m.Fragment, null, e);
function a_(e) {
  return m.isValidElement(e) && e.type === h0;
}
function u_(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            s(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function m0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = m0(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function c_() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = m0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Lh = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Vh = c_,
  g0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Vh(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          p = s == null ? void 0 : s[u];
        if (d === null) return null;
        const f = Lh(d) || Lh(p);
        return o[u][f];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [p, f] = d;
          return f === void 0 || (u[p] = f), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: p, className: f, ...h } = d;
              return Object.entries(h).every((x) => {
                let [y, S] = x;
                return Array.isArray(S)
                  ? S.includes({ ...s, ...l }[y])
                  : { ...s, ...l }[y] === S;
              })
                ? [...u, p, f]
                : u;
            }, []);
    return Vh(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function v0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = v0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function d_() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = v0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Wf = "-";
function f_(e) {
  const t = h_(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const l = i.split(Wf);
    return l[0] === "" && l.length !== 1 && l.shift(), y0(l, t) || p_(i);
  }
  function s(i, l) {
    const a = n[i] || [];
    return l && r[i] ? [...a, ...r[i]] : a;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: s };
}
function y0(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? y0(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e.join(Wf);
  return (i = t.validators.find(({ validator: l }) => l(s))) == null
    ? void 0
    : i.classGroupId;
}
const zh = /^\[(.+)\]$/;
function p_(e) {
  if (zh.test(e)) {
    const t = zh.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function h_(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    g_(Object.entries(e.classGroups), n).forEach(([s, i]) => {
      Ed(i, r, s, t);
    }),
    r
  );
}
function Ed(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Bh(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (m_(o)) {
        Ed(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Ed(i, Bh(t, s), n, r);
    });
  });
}
function Bh(e, t) {
  let n = e;
  return (
    t.split(Wf).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function m_(e) {
  return e.isThemeGetter;
}
function g_(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((s) =>
          typeof s == "string"
            ? t + s
            : typeof s == "object"
            ? Object.fromEntries(Object.entries(s).map(([i, l]) => [t + i, l]))
            : s
        );
        return [n, o];
      })
    : e;
}
function v_(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(s, i) {
    n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0) return i;
      if ((i = r.get(s)) !== void 0) return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    },
  };
}
const x0 = "!";
function y_(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (i) {
    const l = [];
    let a = 0,
      u = 0,
      d;
    for (let y = 0; y < i.length; y++) {
      let S = i[y];
      if (a === 0) {
        if (S === r && (n || i.slice(y, y + o) === t)) {
          l.push(i.slice(u, y)), (u = y + o);
          continue;
        }
        if (S === "/") {
          d = y;
          continue;
        }
      }
      S === "[" ? a++ : S === "]" && a--;
    }
    const p = l.length === 0 ? i : i.substring(u),
      f = p.startsWith(x0),
      h = f ? p.substring(1) : p,
      x = d && d > u ? d - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: x,
    };
  };
}
function x_(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function w_(e) {
  return { cache: v_(e.cacheSize), splitModifiers: y_(e), ...f_(e) };
}
const S_ = /\s+/;
function __(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    s = new Set();
  return e
    .trim()
    .split(S_)
    .map((i) => {
      const {
        modifiers: l,
        hasImportantModifier: a,
        baseClassName: u,
        maybePostfixModifierPosition: d,
      } = n(i);
      let p = r(d ? u.substring(0, d) : u),
        f = !!d;
      if (!p) {
        if (!d) return { isTailwindClass: !1, originalClassName: i };
        if (((p = r(u)), !p))
          return { isTailwindClass: !1, originalClassName: i };
        f = !1;
      }
      const h = x_(l).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? h + x0 : h,
        classGroupId: p,
        originalClassName: i,
        hasPostfixModifier: f,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: l, classGroupId: a, hasPostfixModifier: u } = i,
        d = l + a;
      return s.has(d)
        ? !1
        : (s.add(d), o(a, u).forEach((p) => s.add(l + p)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function C_() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = w0(t)) && (r && (r += " "), (r += n));
  return r;
}
function w0(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = w0(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function b_(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = w_(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = __(a, n);
    return o(a, d), d;
  }
  return function () {
    return s(C_.apply(null, arguments));
  };
}
function De(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const S0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  E_ = /^\d+\/\d+$/,
  $_ = new Set(["px", "full", "screen"]),
  k_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  R_ =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  j_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  N_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  P_ =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Fn(e) {
  return to(e) || $_.has(e) || E_.test(e);
}
function fr(e) {
  return Ps(e, "length", L_);
}
function to(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Pl(e) {
  return Ps(e, "number", to);
}
function Ks(e) {
  return !!e && Number.isInteger(Number(e));
}
function T_(e) {
  return e.endsWith("%") && to(e.slice(0, -1));
}
function fe(e) {
  return S0.test(e);
}
function pr(e) {
  return k_.test(e);
}
const M_ = new Set(["length", "size", "percentage"]);
function O_(e) {
  return Ps(e, M_, _0);
}
function A_(e) {
  return Ps(e, "position", _0);
}
const I_ = new Set(["image", "url"]);
function F_(e) {
  return Ps(e, I_, z_);
}
function D_(e) {
  return Ps(e, "", V_);
}
function Ys() {
  return !0;
}
function Ps(e, t, n) {
  const r = S0.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function L_(e) {
  return R_.test(e) && !j_.test(e);
}
function _0() {
  return !1;
}
function V_(e) {
  return N_.test(e);
}
function z_(e) {
  return P_.test(e);
}
function B_() {
  const e = De("colors"),
    t = De("spacing"),
    n = De("blur"),
    r = De("brightness"),
    o = De("borderColor"),
    s = De("borderRadius"),
    i = De("borderSpacing"),
    l = De("borderWidth"),
    a = De("contrast"),
    u = De("grayscale"),
    d = De("hueRotate"),
    p = De("invert"),
    f = De("gap"),
    h = De("gradientColorStops"),
    x = De("gradientColorStopPositions"),
    y = De("inset"),
    S = De("margin"),
    v = De("opacity"),
    g = De("padding"),
    w = De("saturate"),
    C = De("scale"),
    E = De("sepia"),
    N = De("skew"),
    P = De("space"),
    _ = De("translate"),
    M = () => ["auto", "contain", "none"],
    j = () => ["auto", "hidden", "clip", "visible", "scroll"],
    A = () => ["auto", fe, t],
    $ = () => [fe, t],
    O = () => ["", Fn, fr],
    I = () => ["auto", to, fe],
    F = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    U = () => ["solid", "dashed", "dotted", "double", "none"],
    L = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    R = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    V = () => ["", "0", fe],
    J = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    Q = () => [to, Pl],
    X = () => [to, fe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ys],
      spacing: [Fn, fr],
      blur: ["none", "", pr, fe],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", pr, fe],
      borderSpacing: $(),
      borderWidth: O(),
      contrast: Q(),
      grayscale: V(),
      hueRotate: X(),
      invert: V(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [T_, fr],
      inset: A(),
      margin: A(),
      opacity: Q(),
      padding: $(),
      saturate: Q(),
      scale: Q(),
      sepia: V(),
      skew: X(),
      space: $(),
      translate: $(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", fe] }],
      container: ["container"],
      columns: [{ columns: [pr] }],
      "break-after": [{ "break-after": J() }],
      "break-before": [{ "break-before": J() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...F(), fe] }],
      overflow: [{ overflow: j() }],
      "overflow-x": [{ "overflow-x": j() }],
      "overflow-y": [{ "overflow-y": j() }],
      overscroll: [{ overscroll: M() }],
      "overscroll-x": [{ "overscroll-x": M() }],
      "overscroll-y": [{ "overscroll-y": M() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Ks, fe] }],
      basis: [{ basis: A() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", fe] }],
      grow: [{ grow: V() }],
      shrink: [{ shrink: V() }],
      order: [{ order: ["first", "last", "none", Ks, fe] }],
      "grid-cols": [{ "grid-cols": [Ys] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Ks, fe] }, fe] }],
      "col-start": [{ "col-start": I() }],
      "col-end": [{ "col-end": I() }],
      "grid-rows": [{ "grid-rows": [Ys] }],
      "row-start-end": [{ row: ["auto", { span: [Ks, fe] }, fe] }],
      "row-start": [{ "row-start": I() }],
      "row-end": [{ "row-end": I() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", fe] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", fe] }],
      gap: [{ gap: [f] }],
      "gap-x": [{ "gap-x": [f] }],
      "gap-y": [{ "gap-y": [f] }],
      "justify-content": [{ justify: ["normal", ...R()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...R(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...R(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [g] }],
      px: [{ px: [g] }],
      py: [{ py: [g] }],
      ps: [{ ps: [g] }],
      pe: [{ pe: [g] }],
      pt: [{ pt: [g] }],
      pr: [{ pr: [g] }],
      pb: [{ pb: [g] }],
      pl: [{ pl: [g] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [P] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [P] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", fe, t] }],
      "min-w": [{ "min-w": [fe, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            fe,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [pr] },
            pr,
          ],
        },
      ],
      h: [{ h: [fe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [fe, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [fe, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [fe, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", pr, fr] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Pl,
          ],
        },
      ],
      "font-family": [{ font: [Ys] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            fe,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", to, Pl] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Fn,
            fe,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", fe] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", fe] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [v] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [v] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Fn, fr] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Fn, fe] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: $() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            fe,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", fe] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [v] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...F(), A_] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", O_] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            F_,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [x] }],
      "gradient-via-pos": [{ via: [x] }],
      "gradient-to-pos": [{ to: [x] }],
      "gradient-from": [{ from: [h] }],
      "gradient-via": [{ via: [h] }],
      "gradient-to": [{ to: [h] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [l] }],
      "border-w-x": [{ "border-x": [l] }],
      "border-w-y": [{ "border-y": [l] }],
      "border-w-s": [{ "border-s": [l] }],
      "border-w-e": [{ "border-e": [l] }],
      "border-w-t": [{ "border-t": [l] }],
      "border-w-r": [{ "border-r": [l] }],
      "border-w-b": [{ "border-b": [l] }],
      "border-w-l": [{ "border-l": [l] }],
      "border-opacity": [{ "border-opacity": [v] }],
      "border-style": [{ border: [...U(), "hidden"] }],
      "divide-x": [{ "divide-x": [l] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [l] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [v] }],
      "divide-style": [{ divide: U() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...U()] }],
      "outline-offset": [{ "outline-offset": [Fn, fe] }],
      "outline-w": [{ outline: [Fn, fr] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: O() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [v] }],
      "ring-offset-w": [{ "ring-offset": [Fn, fr] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", pr, D_] }],
      "shadow-color": [{ shadow: [Ys] }],
      opacity: [{ opacity: [v] }],
      "mix-blend": [{ "mix-blend": [...L(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": L() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", pr, fe] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [d] }],
      invert: [{ invert: [p] }],
      saturate: [{ saturate: [w] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
      "backdrop-invert": [{ "backdrop-invert": [p] }],
      "backdrop-opacity": [{ "backdrop-opacity": [v] }],
      "backdrop-saturate": [{ "backdrop-saturate": [w] }],
      "backdrop-sepia": [{ "backdrop-sepia": [E] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            fe,
          ],
        },
      ],
      duration: [{ duration: X() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", fe] }],
      delay: [{ delay: X() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", fe] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [Ks, fe] }],
      "translate-x": [{ "translate-x": [_] }],
      "translate-y": [{ "translate-y": [_] }],
      "skew-x": [{ "skew-x": [N] }],
      "skew-y": [{ "skew-y": [N] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            fe,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            fe,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": $() }],
      "scroll-mx": [{ "scroll-mx": $() }],
      "scroll-my": [{ "scroll-my": $() }],
      "scroll-ms": [{ "scroll-ms": $() }],
      "scroll-me": [{ "scroll-me": $() }],
      "scroll-mt": [{ "scroll-mt": $() }],
      "scroll-mr": [{ "scroll-mr": $() }],
      "scroll-mb": [{ "scroll-mb": $() }],
      "scroll-ml": [{ "scroll-ml": $() }],
      "scroll-p": [{ "scroll-p": $() }],
      "scroll-px": [{ "scroll-px": $() }],
      "scroll-py": [{ "scroll-py": $() }],
      "scroll-ps": [{ "scroll-ps": $() }],
      "scroll-pe": [{ "scroll-pe": $() }],
      "scroll-pt": [{ "scroll-pt": $() }],
      "scroll-pr": [{ "scroll-pr": $() }],
      "scroll-pb": [{ "scroll-pb": $() }],
      "scroll-pl": [{ "scroll-pl": $() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", fe] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Fn, fr, Pl] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const U_ = b_(B_);
function je(...e) {
  return U_(d_(e));
}
const Zf = g0(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-[#A3C55A]",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-12 px-5 py-5",
          sm: "h-10 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Ne = m.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? Dr : "button";
      return c.jsx(i, {
        className: je(Zf({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    }
  );
Ne.displayName = "Button";
const H_ = () =>
    c.jsx("footer", {
      className: "footer",
      children: c.jsx("div", {
        className: "container",
        children: c.jsxs("div", {
          className: "footer__inner",
          children: [
            c.jsx("div", {
              className: "footer__logo",
              children: "Markirowka.ru",
            }),
            c.jsxs("div", {
              className: "label",
              children: [
                c.jsxs("a", {
                  className: "footer__label flex gap-2 items-center",
                  children: [c.jsx(s_, {}), "+9 999 999 99-99"],
                }),
                c.jsxs("a", {
                  className: "footer__label flex gap-2 items-center",
                  children: [c.jsx(d0, {}), "office@markirowka.ru"],
                }),
                c.jsxs("a", {
                  href: "#",
                  className: "footer__label flex gap-2 items-center",
                  children: [c.jsx(f0, {}), "@markirowka"],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "marking",
              children: [
                c.jsx("a", {
                  className: "footer__marking",
                  href: "#",
                  children: "Что такое маркировка?",
                }),
                c.jsx("a", {
                  className: "footer__marking",
                  href: "#",
                  children: "Список маркировок",
                }),
                c.jsx("a", {
                  className: "footer__marking",
                  href: "#",
                  children: "Проверка маркировки",
                }),
                c.jsx("a", {
                  className: "footer__marking",
                  href: "#",
                  children: "Контакты",
                }),
                c.jsx("a", {
                  className: "footer__marking",
                  href: "#",
                  children: "База знаний",
                }),
              ],
            }),
            c.jsx("div", {
              className: "footer__button",
              children: c.jsx(Ne, {
                className: "mt-5",
                children: "Подключиться к платформе",
              }),
            }),
            c.jsx("div", {
              className: "copyright",
              children: "Copyright 2024 Markirowka.ru все права защищены",
            }),
          ],
        }),
      }),
    }),
  W_ = () =>
    c.jsx("header", {
      className: "header",
      children: c.jsx("div", {
        className: "container",
        children: c.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            c.jsx(Fr, {
              to: "/",
              className: "logo",
              children: c.jsx("img", {
                className: "header__logo",
                src: "/logo.svg",
                alt: "",
              }),
            }),
            c.jsx("div", {
              className: "header__burger",
              children: c.jsx("span", {}),
            }),
            c.jsx("div", {
              className: "header__menu",
              children: c.jsxs("ul", {
                className: "flex gap-4",
                children: [
                  c.jsx("li", {
                    children: c.jsx("a", {
                      className: "nav__link",
                      href: "#",
                      children: "Что такое маркировка?",
                    }),
                  }),
                  c.jsx("li", {
                    children: c.jsx("a", {
                      className: "nav__link",
                      href: "#",
                      children: "Список маркировок",
                    }),
                  }),
                  c.jsx("li", {
                    children: c.jsx("a", {
                      className: "nav__link",
                      href: "#",
                      children: "Проверка маркировки",
                    }),
                  }),
                  c.jsx("li", {
                    children: c.jsx("a", {
                      className: "nav__link",
                      href: "#",
                      children: "Контакты",
                    }),
                  }),
                  c.jsx("li", {
                    children: c.jsx("a", {
                      className: "nav__link",
                      href: "#",
                      children: "База знаний",
                    }),
                  }),
                ],
              }),
            }),
            c.jsx(Fr, {
              to: "/auth",
              children: c.jsxs(Ne, {
                className: "flex gap-2 items-center",
                children: ["Войти", c.jsx(o_, {})],
              }),
            }),
          ],
        }),
      }),
    });
var Uh = ["light", "dark"],
  Z_ = "(prefers-color-scheme: dark)",
  G_ = m.createContext(void 0),
  K_ = { setTheme: (e) => {}, themes: [] },
  Y_ = () => {
    var e;
    return (e = m.useContext(G_)) != null ? e : K_;
  };
m.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: a,
  }) => {
    let u = s === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((x) => `'${x}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      p = o
        ? Uh.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (x, y = !1, S = !0) => {
        let v = i ? i[x] : x,
          g = y ? x + "|| ''" : `'${v}'`,
          w = "";
        return (
          o &&
            S &&
            !y &&
            Uh.includes(x) &&
            (w += `d.style.colorScheme = '${x}';`),
          n === "class"
            ? y || v
              ? (w += `c.add(${g})`)
              : (w += "null")
            : v && (w += `d[s](n,${g})`),
          w
        );
      },
      h = e
        ? `!function(){${d}${f(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Z_}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${f(i ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(s, !1, !1) + "}"
          }${p}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${f(i ? "x[e]" : "e", !0)}}else{${f(
            s,
            !1,
            !1
          )};}${p}}catch(t){}}();`;
    return m.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: h },
    });
  }
);
var Q_ = (e) => {
    switch (e) {
      case "success":
        return J_;
      case "info":
        return tC;
      case "warning":
        return eC;
      case "error":
        return nC;
      default:
        return null;
    }
  },
  q_ = Array(12).fill(0),
  X_ = ({ visible: e }) =>
    D.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      D.createElement(
        "div",
        { className: "sonner-spinner" },
        q_.map((t, n) =>
          D.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  J_ = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  eC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  tC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  nC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  rC = () => {
    let [e, t] = D.useState(document.hidden);
    return (
      D.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  $d = 1,
  oC = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : $d++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: i, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (s) => {
                if (iC(s) && !s.ok) {
                  o = !1;
                  let i =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${s.status}`)
                        : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${s.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: l,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let i =
                      typeof t.success == "function"
                        ? await t.success(s)
                        : t.success,
                    l =
                      typeof t.description == "function"
                        ? await t.description(s)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: i,
                    description: l,
                  });
                }
              })
              .catch(async (s) => {
                if (t.error !== void 0) {
                  o = !1;
                  let i =
                      typeof t.error == "function" ? await t.error(s) : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(s)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: l,
                  });
                }
              })
              .finally(() => {
                var s;
                o && (this.dismiss(n), (n = void 0)),
                  (s = t.finally) == null || s.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || $d++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  It = new oC(),
  sC = (e, t) => {
    let n = (t == null ? void 0 : t.id) || $d++;
    return It.addToast({ title: e, ...t, id: n }), n;
  },
  iC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  lC = sC,
  aC = () => It.toasts,
  Jn = Object.assign(
    lC,
    {
      success: It.success,
      info: It.info,
      warning: It.warning,
      error: It.error,
      custom: It.custom,
      message: It.message,
      promise: It.promise,
      dismiss: It.dismiss,
      loading: It.loading,
    },
    { getHistory: aC }
  );
function uC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
uC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Tl(e) {
  return e.label !== void 0;
}
var cC = 3,
  dC = "32px",
  fC = 4e3,
  pC = 356,
  hC = 14,
  mC = 20,
  gC = 200;
function vC(...e) {
  return e.filter(Boolean).join(" ");
}
var yC = (e) => {
  var t, n, r, o, s, i, l, a, u, d;
  let {
      invert: p,
      toast: f,
      unstyled: h,
      interacting: x,
      setHeights: y,
      visibleToasts: S,
      heights: v,
      index: g,
      toasts: w,
      expanded: C,
      removeToast: E,
      defaultRichColors: N,
      closeButton: P,
      style: _,
      cancelButtonStyle: M,
      actionButtonStyle: j,
      className: A = "",
      descriptionClassName: $ = "",
      duration: O,
      position: I,
      gap: F,
      loadingIcon: U,
      expandByDefault: L,
      classNames: R,
      icons: V,
      closeButtonAriaLabel: J = "Close toast",
      pauseWhenPageIsHidden: Q,
      cn: X,
    } = e,
    [he, Pe] = D.useState(!1),
    [He, ue] = D.useState(!1),
    [te, ve] = D.useState(!1),
    [Oe, be] = D.useState(!1),
    [Ee, ye] = D.useState(0),
    [at, rt] = D.useState(0),
    At = D.useRef(null),
    kt = D.useRef(null),
    ar = g === 0,
    b = g + 1 <= S,
    k = f.type,
    T = f.dismissible !== !1,
    G = f.className || "",
    Z = f.descriptionClassName || "",
    H = D.useMemo(
      () => v.findIndex((de) => de.toastId === f.id) || 0,
      [v, f.id]
    ),
    ne = D.useMemo(() => {
      var de;
      return (de = f.closeButton) != null ? de : P;
    }, [f.closeButton, P]),
    Re = D.useMemo(() => f.duration || O || fC, [f.duration, O]),
    Ye = D.useRef(0),
    et = D.useRef(0),
    In = D.useRef(0),
    ur = D.useRef(null),
    [To, Ds] = I.split("-"),
    fl = D.useMemo(
      () => v.reduce((de, Fe, Ae) => (Ae >= H ? de : de + Fe.height), 0),
      [v, H]
    ),
    Ls = rC(),
    Pu = f.invert || p,
    Mo = k === "loading";
  (et.current = D.useMemo(() => H * F + fl, [H, fl])),
    D.useEffect(() => {
      Pe(!0);
    }, []),
    D.useLayoutEffect(() => {
      if (!he) return;
      let de = kt.current,
        Fe = de.style.height;
      de.style.height = "auto";
      let Ae = de.getBoundingClientRect().height;
      (de.style.height = Fe),
        rt(Ae),
        y((yn) =>
          yn.find((xn) => xn.toastId === f.id)
            ? yn.map((xn) => (xn.toastId === f.id ? { ...xn, height: Ae } : xn))
            : [{ toastId: f.id, height: Ae, position: f.position }, ...yn]
        );
    }, [he, f.title, f.description, y, f.id]);
  let cr = D.useCallback(() => {
    ue(!0),
      ye(et.current),
      y((de) => de.filter((Fe) => Fe.toastId !== f.id)),
      setTimeout(() => {
        E(f);
      }, gC);
  }, [f, E, y, et]);
  D.useEffect(() => {
    if (
      (f.promise && k === "loading") ||
      f.duration === 1 / 0 ||
      f.type === "loading"
    )
      return;
    let de,
      Fe = Re;
    return (
      C || x || (Q && Ls)
        ? (() => {
            if (In.current < Ye.current) {
              let Ae = new Date().getTime() - Ye.current;
              Fe = Fe - Ae;
            }
            In.current = new Date().getTime();
          })()
        : Fe !== 1 / 0 &&
          ((Ye.current = new Date().getTime()),
          (de = setTimeout(() => {
            var Ae;
            (Ae = f.onAutoClose) == null || Ae.call(f, f), cr();
          }, Fe))),
      () => clearTimeout(de)
    );
  }, [C, x, L, f, Re, cr, f.promise, k, Q, Ls]),
    D.useEffect(() => {
      let de = kt.current;
      if (de) {
        let Fe = de.getBoundingClientRect().height;
        return (
          rt(Fe),
          y((Ae) => [
            { toastId: f.id, height: Fe, position: f.position },
            ...Ae,
          ]),
          () => y((Ae) => Ae.filter((yn) => yn.toastId !== f.id))
        );
      }
    }, [y, f.id]),
    D.useEffect(() => {
      f.delete && cr();
    }, [cr, f.delete]);
  function bx() {
    return V != null && V.loading
      ? D.createElement(
          "div",
          { className: "sonner-loader", "data-visible": k === "loading" },
          V.loading
        )
      : U
      ? D.createElement(
          "div",
          { className: "sonner-loader", "data-visible": k === "loading" },
          U
        )
      : D.createElement(X_, { visible: k === "loading" });
  }
  return D.createElement(
    "li",
    {
      "aria-live": f.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: kt,
      className: X(
        A,
        G,
        R == null ? void 0 : R.toast,
        (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[k],
        (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[k]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = f.richColors) != null ? r : N,
      "data-styled": !(f.jsx || f.unstyled || h),
      "data-mounted": he,
      "data-promise": !!f.promise,
      "data-removed": He,
      "data-visible": b,
      "data-y-position": To,
      "data-x-position": Ds,
      "data-index": g,
      "data-front": ar,
      "data-swiping": te,
      "data-dismissible": T,
      "data-type": k,
      "data-invert": Pu,
      "data-swipe-out": Oe,
      "data-expanded": !!(C || (L && he)),
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": w.length - g,
        "--offset": `${He ? Ee : et.current}px`,
        "--initial-height": L ? "auto" : `${at}px`,
        ..._,
        ...f.style,
      },
      onPointerDown: (de) => {
        Mo ||
          !T ||
          ((At.current = new Date()),
          ye(et.current),
          de.target.setPointerCapture(de.pointerId),
          de.target.tagName !== "BUTTON" &&
            (ve(!0), (ur.current = { x: de.clientX, y: de.clientY })));
      },
      onPointerUp: () => {
        var de, Fe, Ae, yn;
        if (Oe || !T) return;
        ur.current = null;
        let xn = Number(
            ((de = kt.current) == null
              ? void 0
              : de.style
                  .getPropertyValue("--swipe-amount")
                  .replace("px", "")) || 0
          ),
          pl =
            new Date().getTime() -
            ((Fe = At.current) == null ? void 0 : Fe.getTime()),
          Ex = Math.abs(xn) / pl;
        if (Math.abs(xn) >= mC || Ex > 0.11) {
          ye(et.current),
            (Ae = f.onDismiss) == null || Ae.call(f, f),
            cr(),
            be(!0);
          return;
        }
        (yn = kt.current) == null ||
          yn.style.setProperty("--swipe-amount", "0px"),
          ve(!1);
      },
      onPointerMove: (de) => {
        var Fe;
        if (!ur.current || !T) return;
        let Ae = de.clientY - ur.current.y,
          yn = de.clientX - ur.current.x,
          xn = (To === "top" ? Math.min : Math.max)(0, Ae),
          pl = de.pointerType === "touch" ? 10 : 2;
        Math.abs(xn) > pl
          ? (Fe = kt.current) == null ||
            Fe.style.setProperty("--swipe-amount", `${Ae}px`)
          : Math.abs(yn) > pl && (ur.current = null);
      },
    },
    ne && !f.jsx
      ? D.createElement(
          "button",
          {
            "aria-label": J,
            "data-disabled": Mo,
            "data-close-button": !0,
            onClick:
              Mo || !T
                ? () => {}
                : () => {
                    var de;
                    cr(), (de = f.onDismiss) == null || de.call(f, f);
                  },
            className: X(
              R == null ? void 0 : R.closeButton,
              (o = f == null ? void 0 : f.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          D.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            D.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            D.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    f.jsx || D.isValidElement(f.title)
      ? f.jsx || f.title
      : D.createElement(
          D.Fragment,
          null,
          k || f.icon || f.promise
            ? D.createElement(
                "div",
                {
                  "data-icon": "",
                  className: X(
                    R == null ? void 0 : R.icon,
                    (s = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                f.promise || (f.type === "loading" && !f.icon)
                  ? f.icon || bx()
                  : null,
                f.type !== "loading"
                  ? f.icon || (V == null ? void 0 : V[k]) || Q_(k)
                  : null
              )
            : null,
          D.createElement(
            "div",
            {
              "data-content": "",
              className: X(
                R == null ? void 0 : R.content,
                (i = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            D.createElement(
              "div",
              {
                "data-title": "",
                className: X(
                  R == null ? void 0 : R.title,
                  (l = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              f.title
            ),
            f.description
              ? D.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: X(
                      $,
                      Z,
                      R == null ? void 0 : R.description,
                      (a = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : a.description
                    ),
                  },
                  f.description
                )
              : null
          ),
          D.isValidElement(f.cancel)
            ? f.cancel
            : f.cancel && Tl(f.cancel)
            ? D.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: f.cancelButtonStyle || M,
                  onClick: (de) => {
                    var Fe, Ae;
                    Tl(f.cancel) &&
                      T &&
                      ((Ae = (Fe = f.cancel).onClick) == null ||
                        Ae.call(Fe, de),
                      cr());
                  },
                  className: X(
                    R == null ? void 0 : R.cancelButton,
                    (u = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                f.cancel.label
              )
            : null,
          D.isValidElement(f.action)
            ? f.action
            : f.action && Tl(f.action)
            ? D.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: f.actionButtonStyle || j,
                  onClick: (de) => {
                    var Fe, Ae;
                    Tl(f.action) &&
                      (de.defaultPrevented ||
                        ((Ae = (Fe = f.action).onClick) == null ||
                          Ae.call(Fe, de),
                        cr()));
                  },
                  className: X(
                    R == null ? void 0 : R.actionButton,
                    (d = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : d.actionButton
                  ),
                },
                f.action.label
              )
            : null
        )
  );
};
function Hh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var xC = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: s,
      className: i,
      offset: l,
      theme: a = "light",
      richColors: u,
      duration: d,
      style: p,
      visibleToasts: f = cC,
      toastOptions: h,
      dir: x = Hh(),
      gap: y = hC,
      loadingIcon: S,
      icons: v,
      containerAriaLabel: g = "Notifications",
      pauseWhenPageIsHidden: w,
      cn: C = vC,
    } = e,
    [E, N] = D.useState([]),
    P = D.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(E.filter((Q) => Q.position).map((Q) => Q.position))
          )
        ),
      [E, n]
    ),
    [_, M] = D.useState([]),
    [j, A] = D.useState(!1),
    [$, O] = D.useState(!1),
    [I, F] = D.useState(
      a !== "system"
        ? a
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    U = D.useRef(null),
    L = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = D.useRef(null),
    V = D.useRef(!1),
    J = D.useCallback(
      (Q) => {
        var X;
        ((X = E.find((he) => he.id === Q.id)) != null && X.delete) ||
          It.dismiss(Q.id),
          N((he) => he.filter(({ id: Pe }) => Pe !== Q.id));
      },
      [E]
    );
  return (
    D.useEffect(
      () =>
        It.subscribe((Q) => {
          if (Q.dismiss) {
            N((X) =>
              X.map((he) => (he.id === Q.id ? { ...he, delete: !0 } : he))
            );
            return;
          }
          setTimeout(() => {
            Xv.flushSync(() => {
              N((X) => {
                let he = X.findIndex((Pe) => Pe.id === Q.id);
                return he !== -1
                  ? [...X.slice(0, he), { ...X[he], ...Q }, ...X.slice(he + 1)]
                  : [Q, ...X];
              });
            });
          });
        }),
      []
    ),
    D.useEffect(() => {
      if (a !== "system") {
        F(a);
        return;
      }
      a === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? F("dark")
          : F("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: Q }) => {
              F(Q ? "dark" : "light");
            });
    }, [a]),
    D.useEffect(() => {
      E.length <= 1 && A(!1);
    }, [E]),
    D.useEffect(() => {
      let Q = (X) => {
        var he, Pe;
        r.every((He) => X[He] || X.code === He) &&
          (A(!0), (he = U.current) == null || he.focus()),
          X.code === "Escape" &&
            (document.activeElement === U.current ||
              ((Pe = U.current) != null &&
                Pe.contains(document.activeElement))) &&
            A(!1);
      };
      return (
        document.addEventListener("keydown", Q),
        () => document.removeEventListener("keydown", Q)
      );
    }, [r]),
    D.useEffect(() => {
      if (U.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (V.current = !1));
        };
    }, [U.current]),
    E.length
      ? D.createElement(
          "section",
          { "aria-label": `${g} ${L}`, tabIndex: -1 },
          P.map((Q, X) => {
            var he;
            let [Pe, He] = Q.split("-");
            return D.createElement(
              "ol",
              {
                key: Q,
                dir: x === "auto" ? Hh() : x,
                tabIndex: -1,
                ref: U,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": I,
                "data-y-position": Pe,
                "data-x-position": He,
                style: {
                  "--front-toast-height": `${
                    ((he = _[0]) == null ? void 0 : he.height) || 0
                  }px`,
                  "--offset": typeof l == "number" ? `${l}px` : l || dC,
                  "--width": `${pC}px`,
                  "--gap": `${y}px`,
                  ...p,
                },
                onBlur: (ue) => {
                  V.current &&
                    !ue.currentTarget.contains(ue.relatedTarget) &&
                    ((V.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (ue) => {
                  (ue.target instanceof HTMLElement &&
                    ue.target.dataset.dismissible === "false") ||
                    V.current ||
                    ((V.current = !0), (R.current = ue.relatedTarget));
                },
                onMouseEnter: () => A(!0),
                onMouseMove: () => A(!0),
                onMouseLeave: () => {
                  $ || A(!1);
                },
                onPointerDown: (ue) => {
                  (ue.target instanceof HTMLElement &&
                    ue.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              E.filter(
                (ue) => (!ue.position && X === 0) || ue.position === Q
              ).map((ue, te) => {
                var ve, Oe;
                return D.createElement(yC, {
                  key: ue.id,
                  icons: v,
                  index: te,
                  toast: ue,
                  defaultRichColors: u,
                  duration:
                    (ve = h == null ? void 0 : h.duration) != null ? ve : d,
                  className: h == null ? void 0 : h.className,
                  descriptionClassName:
                    h == null ? void 0 : h.descriptionClassName,
                  invert: t,
                  visibleToasts: f,
                  closeButton:
                    (Oe = h == null ? void 0 : h.closeButton) != null ? Oe : s,
                  interacting: $,
                  position: Q,
                  style: h == null ? void 0 : h.style,
                  unstyled: h == null ? void 0 : h.unstyled,
                  classNames: h == null ? void 0 : h.classNames,
                  cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
                  actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
                  removeToast: J,
                  toasts: E.filter((be) => be.position == ue.position),
                  heights: _.filter((be) => be.position == ue.position),
                  setHeights: M,
                  expandByDefault: o,
                  gap: y,
                  loadingIcon: S,
                  expanded: j,
                  pauseWhenPageIsHidden: w,
                  cn: C,
                });
              })
            );
          })
        )
      : null
  );
};
const wC = ({ ...e }) => {
    const { theme: t = "system" } = Y_();
    return c.jsx(xC, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  Dn = ({ children: e }) => {
    const t = RS();
    return (
      m.useEffect(() => {
        window.scrollTo(0, 0);
      }, [t]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(W_, {}),
          c.jsx("div", { className: e_.container, children: e }),
          c.jsx(H_, {}),
          c.jsx(wC, {}),
        ],
      })
    );
  };
var Ce;
(function (e) {
  e.assertEqual = (o) => o;
  function t(o) {}
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (o) => {
      const s = {};
      for (const i of o) s[i] = i;
      return s;
    }),
    (e.getValidEnumValues = (o) => {
      const s = e.objectKeys(o).filter((l) => typeof o[o[l]] != "number"),
        i = {};
      for (const l of s) i[l] = o[l];
      return e.objectValues(i);
    }),
    (e.objectValues = (o) =>
      e.objectKeys(o).map(function (s) {
        return o[s];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (o) => Object.keys(o)
        : (o) => {
            const s = [];
            for (const i in o)
              Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
            return s;
          }),
    (e.find = (o, s) => {
      for (const i of o) if (s(i)) return i;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o);
  function r(o, s = " | ") {
    return o.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(s);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (o, s) =>
      typeof s == "bigint" ? s.toString() : s);
})(Ce || (Ce = {}));
var kd;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(kd || (kd = {}));
const Y = Ce.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  wr = (e) => {
    switch (typeof e) {
      case "undefined":
        return Y.undefined;
      case "string":
        return Y.string;
      case "number":
        return isNaN(e) ? Y.nan : Y.number;
      case "boolean":
        return Y.boolean;
      case "function":
        return Y.function;
      case "bigint":
        return Y.bigint;
      case "symbol":
        return Y.symbol;
      case "object":
        return Array.isArray(e)
          ? Y.array
          : e === null
          ? Y.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? Y.promise
          : typeof Map < "u" && e instanceof Map
          ? Y.map
          : typeof Set < "u" && e instanceof Set
          ? Y.set
          : typeof Date < "u" && e instanceof Date
          ? Y.date
          : Y.object;
      default:
        return Y.unknown;
    }
  },
  B = Ce.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  SC = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Bt extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (s) {
          return s.message;
        },
      r = { _errors: [] },
      o = (s) => {
        for (const i of s.issues)
          if (i.code === "invalid_union") i.unionErrors.map(o);
          else if (i.code === "invalid_return_type") o(i.returnTypeError);
          else if (i.code === "invalid_arguments") o(i.argumentsError);
          else if (i.path.length === 0) r._errors.push(n(i));
          else {
            let l = r,
              a = 0;
            for (; a < i.path.length; ) {
              const u = i.path[a];
              a === i.path.length - 1
                ? ((l[u] = l[u] || { _errors: [] }), l[u]._errors.push(n(i)))
                : (l[u] = l[u] || { _errors: [] }),
                (l = l[u]),
                a++;
            }
          }
      };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Bt)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ce.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o)))
        : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Bt.create = (e) => new Bt(e);
const vs = (e, t) => {
  let n;
  switch (e.code) {
    case B.invalid_type:
      e.received === Y.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case B.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        Ce.jsonStringifyReplacer
      )}`;
      break;
    case B.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ce.joinValues(e.keys, ", ")}`;
      break;
    case B.invalid_union:
      n = "Invalid input";
      break;
    case B.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ce.joinValues(e.options)}`;
      break;
    case B.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ce.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case B.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case B.invalid_return_type:
      n = "Invalid function return type";
      break;
    case B.invalid_date:
      n = "Invalid date";
      break;
    case B.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : Ce.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case B.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case B.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case B.custom:
      n = "Invalid input";
      break;
    case B.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case B.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case B.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), Ce.assertNever(e);
  }
  return { message: n };
};
let C0 = vs;
function _C(e) {
  C0 = e;
}
function Oa() {
  return C0;
}
const Aa = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: o } = e,
      s = [...n, ...(o.path || [])],
      i = { ...o, path: s };
    if (o.message !== void 0) return { ...o, path: s, message: o.message };
    let l = "";
    const a = r
      .filter((u) => !!u)
      .slice()
      .reverse();
    for (const u of a) l = u(i, { data: t, defaultError: l }).message;
    return { ...o, path: s, message: l };
  },
  CC = [];
function K(e, t) {
  const n = Oa(),
    r = Aa({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === vs ? void 0 : vs,
      ].filter((o) => !!o),
    });
  e.common.issues.push(r);
}
class wt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted") return ae;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const s = await o.key,
        i = await o.value;
      r.push({ key: s, value: i });
    }
    return wt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: s, value: i } = o;
      if (s.status === "aborted" || i.status === "aborted") return ae;
      s.status === "dirty" && t.dirty(),
        i.status === "dirty" && t.dirty(),
        s.value !== "__proto__" &&
          (typeof i.value < "u" || o.alwaysSet) &&
          (r[s.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const ae = Object.freeze({ status: "aborted" }),
  Jo = (e) => ({ status: "dirty", value: e }),
  bt = (e) => ({ status: "valid", value: e }),
  Rd = (e) => e.status === "aborted",
  jd = (e) => e.status === "dirty",
  Fi = (e) => e.status === "valid",
  Di = (e) => typeof Promise < "u" && e instanceof Promise;
function Ia(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function b0(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var ee;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(ee || (ee = {}));
var oi, si;
class Pn {
  constructor(t, n, r, o) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = o);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Wh = (e, t) => {
  if (Fi(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new Bt(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function ce(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: o,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: o }
    : {
        errorMap: (i, l) => {
          var a, u;
          const { message: d } = e;
          return i.code === "invalid_enum_value"
            ? { message: d ?? l.defaultError }
            : typeof l.data > "u"
            ? {
                message:
                  (a = d ?? r) !== null && a !== void 0 ? a : l.defaultError,
              }
            : i.code !== "invalid_type"
            ? { message: l.defaultError }
            : {
                message:
                  (u = d ?? n) !== null && u !== void 0 ? u : l.defaultError,
              };
        },
        description: o,
      };
}
class pe {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return wr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: wr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new wt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: wr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Di(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: wr(t),
      },
      s = this._parseSync({ data: t, path: o.path, parent: o });
    return Wh(o, s);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: wr(t),
      },
      o = this._parse({ data: t, path: r.path, parent: r }),
      s = await (Di(o) ? o : Promise.resolve(o));
    return Wh(r, s);
  }
  refine(t, n) {
    const r = (o) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(o)
        : n;
    return this._refinement((o, s) => {
      const i = t(o),
        l = () => s.addIssue({ code: B.custom, ...r(o) });
      return typeof Promise < "u" && i instanceof Promise
        ? i.then((a) => (a ? !0 : (l(), !1)))
        : i
        ? !0
        : (l(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) =>
      t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1)
    );
  }
  _refinement(t) {
    return new hn({
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return jn.create(this, this._def);
  }
  nullable() {
    return Br.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return dn.create(this, this._def);
  }
  promise() {
    return xs.create(this, this._def);
  }
  or(t) {
    return Bi.create([this, t], this._def);
  }
  and(t) {
    return Ui.create(this, t, this._def);
  }
  transform(t) {
    return new hn({
      ...ce(this._def),
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ki({
      ...ce(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ie.ZodDefault,
    });
  }
  brand() {
    return new Gf({ typeName: ie.ZodBranded, type: this, ...ce(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Yi({
      ...ce(this._def),
      innerType: this,
      catchValue: n,
      typeName: ie.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return sl.create(this, t);
  }
  readonly() {
    return Qi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const bC = /^c[^\s-]{8,}$/i,
  EC = /^[0-9a-z]+$/,
  $C = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  kC =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  RC = /^[a-z0-9_-]{21}$/i,
  jC =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  NC =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  PC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ic;
const TC =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  MC =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  OC = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  E0 =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  AC = new RegExp(`^${E0}$`);
function $0(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function IC(e) {
  return new RegExp(`^${$0(e)}$`);
}
function k0(e) {
  let t = `${E0}T${$0(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function FC(e, t) {
  return !!(
    ((t === "v4" || !t) && TC.test(e)) ||
    ((t === "v6" || !t) && MC.test(e))
  );
}
class an extends pe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== Y.string)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: B.invalid_type,
          expected: Y.string,
          received: s.parsedType,
        }),
        ae
      );
    }
    const r = new wt();
    let o;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            code: B.too_small,
            minimum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "max")
        t.data.length > s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            code: B.too_big,
            maximum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "length") {
        const i = t.data.length > s.value,
          l = t.data.length < s.value;
        (i || l) &&
          ((o = this._getOrReturnCtx(t, o)),
          i
            ? K(o, {
                code: B.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : l &&
              K(o, {
                code: B.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          r.dirty());
      } else if (s.kind === "email")
        NC.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            validation: "email",
            code: B.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "emoji")
        ic || (ic = new RegExp(PC, "u")),
          ic.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              validation: "emoji",
              code: B.invalid_string,
              message: s.message,
            }),
            r.dirty());
      else if (s.kind === "uuid")
        kC.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            validation: "uuid",
            code: B.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "nanoid")
        RC.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            validation: "nanoid",
            code: B.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "cuid")
        bC.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            validation: "cuid",
            code: B.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "cuid2")
        EC.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            validation: "cuid2",
            code: B.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "ulid")
        $C.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            validation: "ulid",
            code: B.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (o = this._getOrReturnCtx(t, o)),
            K(o, {
              validation: "url",
              code: B.invalid_string,
              message: s.message,
            }),
            r.dirty();
        }
      else
        s.kind === "regex"
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((o = this._getOrReturnCtx(t, o)),
              K(o, {
                validation: "regex",
                code: B.invalid_string,
                message: s.message,
              }),
              r.dirty()))
          : s.kind === "trim"
          ? (t.data = t.data.trim())
          : s.kind === "includes"
          ? t.data.includes(s.value, s.position) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              code: B.invalid_string,
              validation: { includes: s.value, position: s.position },
              message: s.message,
            }),
            r.dirty())
          : s.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : s.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : s.kind === "startsWith"
          ? t.data.startsWith(s.value) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              code: B.invalid_string,
              validation: { startsWith: s.value },
              message: s.message,
            }),
            r.dirty())
          : s.kind === "endsWith"
          ? t.data.endsWith(s.value) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              code: B.invalid_string,
              validation: { endsWith: s.value },
              message: s.message,
            }),
            r.dirty())
          : s.kind === "datetime"
          ? k0(s).test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              code: B.invalid_string,
              validation: "datetime",
              message: s.message,
            }),
            r.dirty())
          : s.kind === "date"
          ? AC.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              code: B.invalid_string,
              validation: "date",
              message: s.message,
            }),
            r.dirty())
          : s.kind === "time"
          ? IC(s).test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              code: B.invalid_string,
              validation: "time",
              message: s.message,
            }),
            r.dirty())
          : s.kind === "duration"
          ? jC.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              validation: "duration",
              code: B.invalid_string,
              message: s.message,
            }),
            r.dirty())
          : s.kind === "ip"
          ? FC(t.data, s.version) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              validation: "ip",
              code: B.invalid_string,
              message: s.message,
            }),
            r.dirty())
          : s.kind === "base64"
          ? OC.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            K(o, {
              validation: "base64",
              code: B.invalid_string,
              message: s.message,
            }),
            r.dirty())
          : Ce.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: B.invalid_string,
      ...ee.errToObj(r),
    });
  }
  _addCheck(t) {
    return new an({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...ee.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...ee.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...ee.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...ee.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...ee.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...ee.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...ee.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...ee.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...ee.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...ee.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...ee.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...ee.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...ee.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...ee.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...ee.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...ee.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...ee.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...ee.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...ee.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...ee.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, ee.errToObj(t));
  }
  trim() {
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new an({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
an.create = (e) => {
  var t;
  return new an({
    checks: [],
    typeName: ie.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ce(e),
  });
};
function DC(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    o = n > r ? n : r,
    s = parseInt(e.toFixed(o).replace(".", "")),
    i = parseInt(t.toFixed(o).replace(".", ""));
  return (s % i) / Math.pow(10, o);
}
class Lr extends pe {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== Y.number)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: B.invalid_type,
          expected: Y.number,
          received: s.parsedType,
        }),
        ae
      );
    }
    let r;
    const o = new wt();
    for (const s of this._def.checks)
      s.kind === "int"
        ? Ce.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.invalid_type,
            expected: "integer",
            received: "float",
            message: s.message,
          }),
          o.dirty())
        : s.kind === "min"
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.too_small,
            minimum: s.value,
            type: "number",
            inclusive: s.inclusive,
            exact: !1,
            message: s.message,
          }),
          o.dirty())
        : s.kind === "max"
        ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.too_big,
            maximum: s.value,
            type: "number",
            inclusive: s.inclusive,
            exact: !1,
            message: s.message,
          }),
          o.dirty())
        : s.kind === "multipleOf"
        ? DC(t.data, s.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.not_multiple_of,
            multipleOf: s.value,
            message: s.message,
          }),
          o.dirty())
        : s.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          K(r, { code: B.not_finite, message: s.message }),
          o.dirty())
        : Ce.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, ee.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, ee.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, ee.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, ee.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Lr({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: ee.toString(o) },
      ],
    });
  }
  _addCheck(t) {
    return new Lr({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: ee.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ee.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: ee.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ee.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ee.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && Ce.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Lr.create = (e) =>
  new Lr({
    checks: [],
    typeName: ie.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ce(e),
  });
class Vr extends pe {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = BigInt(t.data)),
      this._getType(t) !== Y.bigint)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: B.invalid_type,
          expected: Y.bigint,
          received: s.parsedType,
        }),
        ae
      );
    }
    let r;
    const o = new wt();
    for (const s of this._def.checks)
      s.kind === "min"
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.too_small,
            type: "bigint",
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          o.dirty())
        : s.kind === "max"
        ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.too_big,
            type: "bigint",
            maximum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          o.dirty())
        : s.kind === "multipleOf"
        ? t.data % s.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: B.not_multiple_of,
            multipleOf: s.value,
            message: s.message,
          }),
          o.dirty())
        : Ce.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, ee.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, ee.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, ee.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, ee.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Vr({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: ee.toString(o) },
      ],
    });
  }
  _addCheck(t) {
    return new Vr({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ee.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Vr.create = (e) => {
  var t;
  return new Vr({
    checks: [],
    typeName: ie.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ce(e),
  });
};
class Li extends pe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Y.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.boolean,
          received: r.parsedType,
        }),
        ae
      );
    }
    return bt(t.data);
  }
}
Li.create = (e) =>
  new Li({
    typeName: ie.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ce(e),
  });
class fo extends pe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== Y.date)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: B.invalid_type,
          expected: Y.date,
          received: s.parsedType,
        }),
        ae
      );
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return K(s, { code: B.invalid_date }), ae;
    }
    const r = new wt();
    let o;
    for (const s of this._def.checks)
      s.kind === "min"
        ? t.data.getTime() < s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            code: B.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: "date",
          }),
          r.dirty())
        : s.kind === "max"
        ? t.data.getTime() > s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          K(o, {
            code: B.too_big,
            message: s.message,
            inclusive: !0,
            exact: !1,
            maximum: s.value,
            type: "date",
          }),
          r.dirty())
        : Ce.assertNever(s);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new fo({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: ee.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: ee.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
fo.create = (e) =>
  new fo({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: ie.ZodDate,
    ...ce(e),
  });
class Fa extends pe {
  _parse(t) {
    if (this._getType(t) !== Y.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.symbol,
          received: r.parsedType,
        }),
        ae
      );
    }
    return bt(t.data);
  }
}
Fa.create = (e) => new Fa({ typeName: ie.ZodSymbol, ...ce(e) });
class Vi extends pe {
  _parse(t) {
    if (this._getType(t) !== Y.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.undefined,
          received: r.parsedType,
        }),
        ae
      );
    }
    return bt(t.data);
  }
}
Vi.create = (e) => new Vi({ typeName: ie.ZodUndefined, ...ce(e) });
class zi extends pe {
  _parse(t) {
    if (this._getType(t) !== Y.null) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.null,
          received: r.parsedType,
        }),
        ae
      );
    }
    return bt(t.data);
  }
}
zi.create = (e) => new zi({ typeName: ie.ZodNull, ...ce(e) });
class ys extends pe {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return bt(t.data);
  }
}
ys.create = (e) => new ys({ typeName: ie.ZodAny, ...ce(e) });
class so extends pe {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return bt(t.data);
  }
}
so.create = (e) => new so({ typeName: ie.ZodUnknown, ...ce(e) });
class er extends pe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      K(n, { code: B.invalid_type, expected: Y.never, received: n.parsedType }),
      ae
    );
  }
}
er.create = (e) => new er({ typeName: ie.ZodNever, ...ce(e) });
class Da extends pe {
  _parse(t) {
    if (this._getType(t) !== Y.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.void,
          received: r.parsedType,
        }),
        ae
      );
    }
    return bt(t.data);
  }
}
Da.create = (e) => new Da({ typeName: ie.ZodVoid, ...ce(e) });
class dn extends pe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      o = this._def;
    if (n.parsedType !== Y.array)
      return (
        K(n, {
          code: B.invalid_type,
          expected: Y.array,
          received: n.parsedType,
        }),
        ae
      );
    if (o.exactLength !== null) {
      const i = n.data.length > o.exactLength.value,
        l = n.data.length < o.exactLength.value;
      (i || l) &&
        (K(n, {
          code: i ? B.too_big : B.too_small,
          minimum: l ? o.exactLength.value : void 0,
          maximum: i ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (o.minLength !== null &&
        n.data.length < o.minLength.value &&
        (K(n, {
          code: B.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        r.dirty()),
      o.maxLength !== null &&
        n.data.length > o.maxLength.value &&
        (K(n, {
          code: B.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((i, l) => o.type._parseAsync(new Pn(n, i, n.path, l)))
      ).then((i) => wt.mergeArray(r, i));
    const s = [...n.data].map((i, l) =>
      o.type._parseSync(new Pn(n, i, n.path, l))
    );
    return wt.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new dn({
      ...this._def,
      minLength: { value: t, message: ee.toString(n) },
    });
  }
  max(t, n) {
    return new dn({
      ...this._def,
      maxLength: { value: t, message: ee.toString(n) },
    });
  }
  length(t, n) {
    return new dn({
      ...this._def,
      exactLength: { value: t, message: ee.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
dn.create = (e, t) =>
  new dn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ie.ZodArray,
    ...ce(t),
  });
function Vo(e) {
  if (e instanceof We) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = jn.create(Vo(r));
    }
    return new We({ ...e._def, shape: () => t });
  } else
    return e instanceof dn
      ? new dn({ ...e._def, type: Vo(e.element) })
      : e instanceof jn
      ? jn.create(Vo(e.unwrap()))
      : e instanceof Br
      ? Br.create(Vo(e.unwrap()))
      : e instanceof Tn
      ? Tn.create(e.items.map((t) => Vo(t)))
      : e;
}
class We extends pe {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = Ce.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== Y.object) {
      const u = this._getOrReturnCtx(t);
      return (
        K(u, {
          code: B.invalid_type,
          expected: Y.object,
          received: u.parsedType,
        }),
        ae
      );
    }
    const { status: r, ctx: o } = this._processInputParams(t),
      { shape: s, keys: i } = this._getCached(),
      l = [];
    if (
      !(this._def.catchall instanceof er && this._def.unknownKeys === "strip")
    )
      for (const u in o.data) i.includes(u) || l.push(u);
    const a = [];
    for (const u of i) {
      const d = s[u],
        p = o.data[u];
      a.push({
        key: { status: "valid", value: u },
        value: d._parse(new Pn(o, p, o.path, u)),
        alwaysSet: u in o.data,
      });
    }
    if (this._def.catchall instanceof er) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of l)
          a.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: o.data[d] },
          });
      else if (u === "strict")
        l.length > 0 &&
          (K(o, { code: B.unrecognized_keys, keys: l }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of l) {
        const p = o.data[d];
        a.push({
          key: { status: "valid", value: d },
          value: u._parse(new Pn(o, p, o.path, d)),
          alwaysSet: d in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const d of a) {
              const p = await d.key,
                f = await d.value;
              u.push({ key: p, value: f, alwaysSet: d.alwaysSet });
            }
            return u;
          })
          .then((u) => wt.mergeObjectSync(r, u))
      : wt.mergeObjectSync(r, a);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      ee.errToObj,
      new We({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var o, s, i, l;
                const a =
                  (i =
                    (s = (o = this._def).errorMap) === null || s === void 0
                      ? void 0
                      : s.call(o, n, r).message) !== null && i !== void 0
                    ? i
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (l = ee.errToObj(t).message) !== null && l !== void 0
                          ? l
                          : a,
                    }
                  : { message: a };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new We({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new We({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new We({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new We({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: ie.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new We({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      Ce.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new We({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      Ce.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new We({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Vo(this);
  }
  partial(t) {
    const n = {};
    return (
      Ce.objectKeys(this.shape).forEach((r) => {
        const o = this.shape[r];
        t && !t[r] ? (n[r] = o) : (n[r] = o.optional());
      }),
      new We({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      Ce.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let s = this.shape[r];
          for (; s instanceof jn; ) s = s._def.innerType;
          n[r] = s;
        }
      }),
      new We({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return R0(Ce.objectKeys(this.shape));
  }
}
We.create = (e, t) =>
  new We({
    shape: () => e,
    unknownKeys: "strip",
    catchall: er.create(),
    typeName: ie.ZodObject,
    ...ce(t),
  });
We.strictCreate = (e, t) =>
  new We({
    shape: () => e,
    unknownKeys: "strict",
    catchall: er.create(),
    typeName: ie.ZodObject,
    ...ce(t),
  });
We.lazycreate = (e, t) =>
  new We({
    shape: e,
    unknownKeys: "strip",
    catchall: er.create(),
    typeName: ie.ZodObject,
    ...ce(t),
  });
class Bi extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function o(s) {
      for (const l of s) if (l.result.status === "valid") return l.result;
      for (const l of s)
        if (l.result.status === "dirty")
          return n.common.issues.push(...l.ctx.common.issues), l.result;
      const i = s.map((l) => new Bt(l.ctx.common.issues));
      return K(n, { code: B.invalid_union, unionErrors: i }), ae;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (s) => {
          const i = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await s._parseAsync({
              data: n.data,
              path: n.path,
              parent: i,
            }),
            ctx: i,
          };
        })
      ).then(o);
    {
      let s;
      const i = [];
      for (const a of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          d = a._parseSync({ data: n.data, path: n.path, parent: u });
        if (d.status === "valid") return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: u }),
          u.common.issues.length && i.push(u.common.issues);
      }
      if (s) return n.common.issues.push(...s.ctx.common.issues), s.result;
      const l = i.map((a) => new Bt(a));
      return K(n, { code: B.invalid_union, unionErrors: l }), ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
Bi.create = (e, t) => new Bi({ options: e, typeName: ie.ZodUnion, ...ce(t) });
const Vn = (e) =>
  e instanceof Wi
    ? Vn(e.schema)
    : e instanceof hn
    ? Vn(e.innerType())
    : e instanceof Zi
    ? [e.value]
    : e instanceof zr
    ? e.options
    : e instanceof Gi
    ? Ce.objectValues(e.enum)
    : e instanceof Ki
    ? Vn(e._def.innerType)
    : e instanceof Vi
    ? [void 0]
    : e instanceof zi
    ? [null]
    : e instanceof jn
    ? [void 0, ...Vn(e.unwrap())]
    : e instanceof Br
    ? [null, ...Vn(e.unwrap())]
    : e instanceof Gf || e instanceof Qi
    ? Vn(e.unwrap())
    : e instanceof Yi
    ? Vn(e._def.innerType)
    : [];
class mu extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Y.object)
      return (
        K(n, {
          code: B.invalid_type,
          expected: Y.object,
          received: n.parsedType,
        }),
        ae
      );
    const r = this.discriminator,
      o = n.data[r],
      s = this.optionsMap.get(o);
    return s
      ? n.common.async
        ? s._parseAsync({ data: n.data, path: n.path, parent: n })
        : s._parseSync({ data: n.data, path: n.path, parent: n })
      : (K(n, {
          code: B.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        ae);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const o = new Map();
    for (const s of n) {
      const i = Vn(s.shape[t]);
      if (!i.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const l of i) {
        if (o.has(l))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              l
            )}`
          );
        o.set(l, s);
      }
    }
    return new mu({
      typeName: ie.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...ce(r),
    });
  }
}
function Nd(e, t) {
  const n = wr(e),
    r = wr(t);
  if (e === t) return { valid: !0, data: e };
  if (n === Y.object && r === Y.object) {
    const o = Ce.objectKeys(t),
      s = Ce.objectKeys(e).filter((l) => o.indexOf(l) !== -1),
      i = { ...e, ...t };
    for (const l of s) {
      const a = Nd(e[l], t[l]);
      if (!a.valid) return { valid: !1 };
      i[l] = a.data;
    }
    return { valid: !0, data: i };
  } else if (n === Y.array && r === Y.array) {
    if (e.length !== t.length) return { valid: !1 };
    const o = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s],
        l = t[s],
        a = Nd(i, l);
      if (!a.valid) return { valid: !1 };
      o.push(a.data);
    }
    return { valid: !0, data: o };
  } else
    return n === Y.date && r === Y.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Ui extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      o = (s, i) => {
        if (Rd(s) || Rd(i)) return ae;
        const l = Nd(s.value, i.value);
        return l.valid
          ? ((jd(s) || jd(i)) && n.dirty(), { status: n.value, value: l.data })
          : (K(r, { code: B.invalid_intersection_types }), ae);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([s, i]) => o(s, i))
      : o(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
Ui.create = (e, t, n) =>
  new Ui({ left: e, right: t, typeName: ie.ZodIntersection, ...ce(n) });
class Tn extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Y.array)
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.array,
          received: r.parsedType,
        }),
        ae
      );
    if (r.data.length < this._def.items.length)
      return (
        K(r, {
          code: B.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        ae
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (K(r, {
        code: B.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const s = [...r.data]
      .map((i, l) => {
        const a = this._def.items[l] || this._def.rest;
        return a ? a._parse(new Pn(r, i, r.path, l)) : null;
      })
      .filter((i) => !!i);
    return r.common.async
      ? Promise.all(s).then((i) => wt.mergeArray(n, i))
      : wt.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Tn({ ...this._def, rest: t });
  }
}
Tn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Tn({ items: e, typeName: ie.ZodTuple, rest: null, ...ce(t) });
};
class Hi extends pe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Y.object)
      return (
        K(r, {
          code: B.invalid_type,
          expected: Y.object,
          received: r.parsedType,
        }),
        ae
      );
    const o = [],
      s = this._def.keyType,
      i = this._def.valueType;
    for (const l in r.data)
      o.push({
        key: s._parse(new Pn(r, l, r.path, l)),
        value: i._parse(new Pn(r, r.data[l], r.path, l)),
        alwaysSet: l in r.data,
      });
    return r.common.async
      ? wt.mergeObjectAsync(n, o)
      : wt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof pe
      ? new Hi({ keyType: t, valueType: n, typeName: ie.ZodRecord, ...ce(r) })
      : new Hi({
          keyType: an.create(),
          valueType: t,
          typeName: ie.ZodRecord,
          ...ce(n),
        });
  }
}
class La extends pe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Y.map)
      return (
        K(r, { code: B.invalid_type, expected: Y.map, received: r.parsedType }),
        ae
      );
    const o = this._def.keyType,
      s = this._def.valueType,
      i = [...r.data.entries()].map(([l, a], u) => ({
        key: o._parse(new Pn(r, l, r.path, [u, "key"])),
        value: s._parse(new Pn(r, a, r.path, [u, "value"])),
      }));
    if (r.common.async) {
      const l = new Map();
      return Promise.resolve().then(async () => {
        for (const a of i) {
          const u = await a.key,
            d = await a.value;
          if (u.status === "aborted" || d.status === "aborted") return ae;
          (u.status === "dirty" || d.status === "dirty") && n.dirty(),
            l.set(u.value, d.value);
        }
        return { status: n.value, value: l };
      });
    } else {
      const l = new Map();
      for (const a of i) {
        const u = a.key,
          d = a.value;
        if (u.status === "aborted" || d.status === "aborted") return ae;
        (u.status === "dirty" || d.status === "dirty") && n.dirty(),
          l.set(u.value, d.value);
      }
      return { status: n.value, value: l };
    }
  }
}
La.create = (e, t, n) =>
  new La({ valueType: t, keyType: e, typeName: ie.ZodMap, ...ce(n) });
class po extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Y.set)
      return (
        K(r, { code: B.invalid_type, expected: Y.set, received: r.parsedType }),
        ae
      );
    const o = this._def;
    o.minSize !== null &&
      r.data.size < o.minSize.value &&
      (K(r, {
        code: B.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      n.dirty()),
      o.maxSize !== null &&
        r.data.size > o.maxSize.value &&
        (K(r, {
          code: B.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        n.dirty());
    const s = this._def.valueType;
    function i(a) {
      const u = new Set();
      for (const d of a) {
        if (d.status === "aborted") return ae;
        d.status === "dirty" && n.dirty(), u.add(d.value);
      }
      return { status: n.value, value: u };
    }
    const l = [...r.data.values()].map((a, u) =>
      s._parse(new Pn(r, a, r.path, u))
    );
    return r.common.async ? Promise.all(l).then((a) => i(a)) : i(l);
  }
  min(t, n) {
    return new po({
      ...this._def,
      minSize: { value: t, message: ee.toString(n) },
    });
  }
  max(t, n) {
    return new po({
      ...this._def,
      maxSize: { value: t, message: ee.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
po.create = (e, t) =>
  new po({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: ie.ZodSet,
    ...ce(t),
  });
class ls extends pe {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Y.function)
      return (
        K(n, {
          code: B.invalid_type,
          expected: Y.function,
          received: n.parsedType,
        }),
        ae
      );
    function r(l, a) {
      return Aa({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Oa(),
          vs,
        ].filter((u) => !!u),
        issueData: { code: B.invalid_arguments, argumentsError: a },
      });
    }
    function o(l, a) {
      return Aa({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Oa(),
          vs,
        ].filter((u) => !!u),
        issueData: { code: B.invalid_return_type, returnTypeError: a },
      });
    }
    const s = { errorMap: n.common.contextualErrorMap },
      i = n.data;
    if (this._def.returns instanceof xs) {
      const l = this;
      return bt(async function (...a) {
        const u = new Bt([]),
          d = await l._def.args.parseAsync(a, s).catch((h) => {
            throw (u.addIssue(r(a, h)), u);
          }),
          p = await Reflect.apply(i, this, d);
        return await l._def.returns._def.type.parseAsync(p, s).catch((h) => {
          throw (u.addIssue(o(p, h)), u);
        });
      });
    } else {
      const l = this;
      return bt(function (...a) {
        const u = l._def.args.safeParse(a, s);
        if (!u.success) throw new Bt([r(a, u.error)]);
        const d = Reflect.apply(i, this, u.data),
          p = l._def.returns.safeParse(d, s);
        if (!p.success) throw new Bt([o(d, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new ls({ ...this._def, args: Tn.create(t).rest(so.create()) });
  }
  returns(t) {
    return new ls({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new ls({
      args: t || Tn.create([]).rest(so.create()),
      returns: n || so.create(),
      typeName: ie.ZodFunction,
      ...ce(r),
    });
  }
}
class Wi extends pe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Wi.create = (e, t) => new Wi({ getter: e, typeName: ie.ZodLazy, ...ce(t) });
class Zi extends pe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        K(n, {
          received: n.data,
          code: B.invalid_literal,
          expected: this._def.value,
        }),
        ae
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Zi.create = (e, t) => new Zi({ value: e, typeName: ie.ZodLiteral, ...ce(t) });
function R0(e, t) {
  return new zr({ values: e, typeName: ie.ZodEnum, ...ce(t) });
}
class zr extends pe {
  constructor() {
    super(...arguments), oi.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        K(n, {
          expected: Ce.joinValues(r),
          received: n.parsedType,
          code: B.invalid_type,
        }),
        ae
      );
    }
    if (
      (Ia(this, oi) || b0(this, oi, new Set(this._def.values)),
      !Ia(this, oi).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        K(n, { received: n.data, code: B.invalid_enum_value, options: r }), ae
      );
    }
    return bt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return zr.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return zr.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
oi = new WeakMap();
zr.create = R0;
class Gi extends pe {
  constructor() {
    super(...arguments), si.set(this, void 0);
  }
  _parse(t) {
    const n = Ce.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== Y.string && r.parsedType !== Y.number) {
      const o = Ce.objectValues(n);
      return (
        K(r, {
          expected: Ce.joinValues(o),
          received: r.parsedType,
          code: B.invalid_type,
        }),
        ae
      );
    }
    if (
      (Ia(this, si) ||
        b0(this, si, new Set(Ce.getValidEnumValues(this._def.values))),
      !Ia(this, si).has(t.data))
    ) {
      const o = Ce.objectValues(n);
      return (
        K(r, { received: r.data, code: B.invalid_enum_value, options: o }), ae
      );
    }
    return bt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
si = new WeakMap();
Gi.create = (e, t) =>
  new Gi({ values: e, typeName: ie.ZodNativeEnum, ...ce(t) });
class xs extends pe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Y.promise && n.common.async === !1)
      return (
        K(n, {
          code: B.invalid_type,
          expected: Y.promise,
          received: n.parsedType,
        }),
        ae
      );
    const r = n.parsedType === Y.promise ? n.data : Promise.resolve(n.data);
    return bt(
      r.then((o) =>
        this._def.type.parseAsync(o, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
xs.create = (e, t) => new xs({ type: e, typeName: ie.ZodPromise, ...ce(t) });
class hn extends pe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ie.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      o = this._def.effect || null,
      s = {
        addIssue: (i) => {
          K(r, i), i.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), o.type === "preprocess")) {
      const i = o.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(i).then(async (l) => {
          if (n.value === "aborted") return ae;
          const a = await this._def.schema._parseAsync({
            data: l,
            path: r.path,
            parent: r,
          });
          return a.status === "aborted"
            ? ae
            : a.status === "dirty" || n.value === "dirty"
            ? Jo(a.value)
            : a;
        });
      {
        if (n.value === "aborted") return ae;
        const l = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r,
        });
        return l.status === "aborted"
          ? ae
          : l.status === "dirty" || n.value === "dirty"
          ? Jo(l.value)
          : l;
      }
    }
    if (o.type === "refinement") {
      const i = (l) => {
        const a = o.refinement(l, s);
        if (r.common.async) return Promise.resolve(a);
        if (a instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return l;
      };
      if (r.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return l.status === "aborted"
          ? ae
          : (l.status === "dirty" && n.dirty(),
            i(l.value),
            { status: n.value, value: l.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((l) =>
            l.status === "aborted"
              ? ae
              : (l.status === "dirty" && n.dirty(),
                i(l.value).then(() => ({ status: n.value, value: l.value })))
          );
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!Fi(i)) return i;
        const l = o.transform(i.value, s);
        if (l instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: l };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((i) =>
            Fi(i)
              ? Promise.resolve(o.transform(i.value, s)).then((l) => ({
                  status: n.value,
                  value: l,
                }))
              : i
          );
    Ce.assertNever(o);
  }
}
hn.create = (e, t, n) =>
  new hn({ schema: e, typeName: ie.ZodEffects, effect: t, ...ce(n) });
hn.createWithPreprocess = (e, t, n) =>
  new hn({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: ie.ZodEffects,
    ...ce(n),
  });
class jn extends pe {
  _parse(t) {
    return this._getType(t) === Y.undefined
      ? bt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
jn.create = (e, t) =>
  new jn({ innerType: e, typeName: ie.ZodOptional, ...ce(t) });
class Br extends pe {
  _parse(t) {
    return this._getType(t) === Y.null
      ? bt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Br.create = (e, t) =>
  new Br({ innerType: e, typeName: ie.ZodNullable, ...ce(t) });
class Ki extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === Y.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ki.create = (e, t) =>
  new Ki({
    innerType: e,
    typeName: ie.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ce(t),
  });
class Yi extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      o = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Di(o)
      ? o.then((s) => ({
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Bt(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Bt(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Yi.create = (e, t) =>
  new Yi({
    innerType: e,
    typeName: ie.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ce(t),
  });
class Va extends pe {
  _parse(t) {
    if (this._getType(t) !== Y.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, { code: B.invalid_type, expected: Y.nan, received: r.parsedType }),
        ae
      );
    }
    return { status: "valid", value: t.data };
  }
}
Va.create = (e) => new Va({ typeName: ie.ZodNaN, ...ce(e) });
const LC = Symbol("zod_brand");
class Gf extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class sl extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return s.status === "aborted"
          ? ae
          : s.status === "dirty"
          ? (n.dirty(), Jo(s.value))
          : this._def.out._parseAsync({
              data: s.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return o.status === "aborted"
        ? ae
        : o.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: o.value })
        : this._def.out._parseSync({ data: o.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new sl({ in: t, out: n, typeName: ie.ZodPipeline });
  }
}
class Qi extends pe {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (o) => (Fi(o) && (o.value = Object.freeze(o.value)), o);
    return Di(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Qi.create = (e, t) =>
  new Qi({ innerType: e, typeName: ie.ZodReadonly, ...ce(t) });
function j0(e, t = {}, n) {
  return e
    ? ys.create().superRefine((r, o) => {
        var s, i;
        if (!e(r)) {
          const l =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            a =
              (i = (s = l.fatal) !== null && s !== void 0 ? s : n) !== null &&
              i !== void 0
                ? i
                : !0,
            u = typeof l == "string" ? { message: l } : l;
          o.addIssue({ code: "custom", ...u, fatal: a });
        }
      })
    : ys.create();
}
const VC = { object: We.lazycreate };
var ie;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(ie || (ie = {}));
const zC = (e, t = { message: `Input not instance of ${e.name}` }) =>
    j0((n) => n instanceof e, t),
  N0 = an.create,
  P0 = Lr.create,
  BC = Va.create,
  UC = Vr.create,
  T0 = Li.create,
  HC = fo.create,
  WC = Fa.create,
  ZC = Vi.create,
  GC = zi.create,
  KC = ys.create,
  YC = so.create,
  QC = er.create,
  qC = Da.create,
  XC = dn.create,
  JC = We.create,
  eb = We.strictCreate,
  tb = Bi.create,
  nb = mu.create,
  rb = Ui.create,
  ob = Tn.create,
  sb = Hi.create,
  ib = La.create,
  lb = po.create,
  ab = ls.create,
  ub = Wi.create,
  cb = Zi.create,
  db = zr.create,
  fb = Gi.create,
  pb = xs.create,
  Zh = hn.create,
  hb = jn.create,
  mb = Br.create,
  gb = hn.createWithPreprocess,
  vb = sl.create,
  yb = () => N0().optional(),
  xb = () => P0().optional(),
  wb = () => T0().optional(),
  Sb = {
    string: (e) => an.create({ ...e, coerce: !0 }),
    number: (e) => Lr.create({ ...e, coerce: !0 }),
    boolean: (e) => Li.create({ ...e, coerce: !0 }),
    bigint: (e) => Vr.create({ ...e, coerce: !0 }),
    date: (e) => fo.create({ ...e, coerce: !0 }),
  },
  _b = ae;
var le = Object.freeze({
  __proto__: null,
  defaultErrorMap: vs,
  setErrorMap: _C,
  getErrorMap: Oa,
  makeIssue: Aa,
  EMPTY_PATH: CC,
  addIssueToContext: K,
  ParseStatus: wt,
  INVALID: ae,
  DIRTY: Jo,
  OK: bt,
  isAborted: Rd,
  isDirty: jd,
  isValid: Fi,
  isAsync: Di,
  get util() {
    return Ce;
  },
  get objectUtil() {
    return kd;
  },
  ZodParsedType: Y,
  getParsedType: wr,
  ZodType: pe,
  datetimeRegex: k0,
  ZodString: an,
  ZodNumber: Lr,
  ZodBigInt: Vr,
  ZodBoolean: Li,
  ZodDate: fo,
  ZodSymbol: Fa,
  ZodUndefined: Vi,
  ZodNull: zi,
  ZodAny: ys,
  ZodUnknown: so,
  ZodNever: er,
  ZodVoid: Da,
  ZodArray: dn,
  ZodObject: We,
  ZodUnion: Bi,
  ZodDiscriminatedUnion: mu,
  ZodIntersection: Ui,
  ZodTuple: Tn,
  ZodRecord: Hi,
  ZodMap: La,
  ZodSet: po,
  ZodFunction: ls,
  ZodLazy: Wi,
  ZodLiteral: Zi,
  ZodEnum: zr,
  ZodNativeEnum: Gi,
  ZodPromise: xs,
  ZodEffects: hn,
  ZodTransformer: hn,
  ZodOptional: jn,
  ZodNullable: Br,
  ZodDefault: Ki,
  ZodCatch: Yi,
  ZodNaN: Va,
  BRAND: LC,
  ZodBranded: Gf,
  ZodPipeline: sl,
  ZodReadonly: Qi,
  custom: j0,
  Schema: pe,
  ZodSchema: pe,
  late: VC,
  get ZodFirstPartyTypeKind() {
    return ie;
  },
  coerce: Sb,
  any: KC,
  array: XC,
  bigint: UC,
  boolean: T0,
  date: HC,
  discriminatedUnion: nb,
  effect: Zh,
  enum: db,
  function: ab,
  instanceof: zC,
  intersection: rb,
  lazy: ub,
  literal: cb,
  map: ib,
  nan: BC,
  nativeEnum: fb,
  never: QC,
  null: GC,
  nullable: mb,
  number: P0,
  object: JC,
  oboolean: wb,
  onumber: xb,
  optional: hb,
  ostring: yb,
  pipeline: vb,
  preprocess: gb,
  promise: pb,
  record: sb,
  set: lb,
  strictObject: eb,
  string: N0,
  symbol: WC,
  transformer: Zh,
  tuple: ob,
  undefined: ZC,
  union: tb,
  unknown: YC,
  void: qC,
  NEVER: _b,
  ZodIssueCode: B,
  quotelessJson: SC,
  ZodError: Bt,
});
const Cb = le.object({
  email: le
    .string()
    .min(2, {
      message: "Имя пользователя должно содержать не менее 2-х символов.",
    }),
  password: le
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6-ти символов." }),
});
var il = (e) => e.type === "checkbox",
  es = (e) => e instanceof Date,
  _t = (e) => e == null;
const M0 = (e) => typeof e == "object";
var lt = (e) => !_t(e) && !Array.isArray(e) && M0(e) && !es(e),
  O0 = (e) =>
    lt(e) && e.target ? (il(e.target) ? e.target.checked : e.target.value) : e,
  bb = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  A0 = (e, t) => e.has(bb(t)),
  Eb = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return lt(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Kf =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Rt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Kf && (e instanceof Blob || e instanceof FileList)) &&
    (n || lt(e))
  )
    if (((t = n ? [] : {}), !n && !Eb(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Rt(e[r]));
  else return e;
  return t;
}
var ll = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  qe = (e) => e === void 0,
  W = (e, t, n) => {
    if (!t || !lt(e)) return n;
    const r = ll(t.split(/[,[\].]+?/)).reduce((o, s) => (_t(o) ? o : o[s]), e);
    return qe(r) || r === e ? (qe(e[t]) ? n : e[t]) : r;
  },
  sn = (e) => typeof e == "boolean";
const za = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ln = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Ln = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  I0 = D.createContext(null),
  gu = () => D.useContext(I0),
  $b = (e) => {
    const { children: t, ...n } = e;
    return D.createElement(I0.Provider, { value: n }, t);
  };
var F0 = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(o, s, {
        get: () => {
          const i = s;
          return (
            t._proxyFormState[i] !== ln.all &&
              (t._proxyFormState[i] = !r || ln.all),
            n && (n[i] = !0),
            e[i]
          );
        },
      });
    return o;
  },
  Ft = (e) => lt(e) && !Object.keys(e).length,
  D0 = (e, t, n, r) => {
    n(e);
    const { name: o, ...s } = e;
    return (
      Ft(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((i) => t[i] === (!r || ln.all))
    );
  },
  ra = (e) => (Array.isArray(e) ? e : [e]),
  L0 = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    ra(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Yf(e) {
  const t = D.useRef(e);
  (t.current = e),
    D.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function kb(e) {
  const t = gu(),
    { control: n = t.control, disabled: r, name: o, exact: s } = e || {},
    [i, l] = D.useState(n._formState),
    a = D.useRef(!0),
    u = D.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    d = D.useRef(o);
  return (
    (d.current = o),
    Yf({
      disabled: r,
      next: (p) =>
        a.current &&
        L0(d.current, p.name, s) &&
        D0(p, u.current, n._updateFormState) &&
        l({ ...n._formState, ...p }),
      subject: n._subjects.state,
    }),
    D.useEffect(
      () => (
        (a.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          a.current = !1;
        }
      ),
      [n]
    ),
    F0(i, n, u.current, !1)
  );
}
var En = (e) => typeof e == "string",
  V0 = (e, t, n, r, o) =>
    En(e)
      ? (r && t.watch.add(e), W(n, e, o))
      : Array.isArray(e)
      ? e.map((s) => (r && t.watch.add(s), W(n, s)))
      : (r && (t.watchAll = !0), n);
function Rb(e) {
  const t = gu(),
    {
      control: n = t.control,
      name: r,
      defaultValue: o,
      disabled: s,
      exact: i,
    } = e || {},
    l = D.useRef(r);
  (l.current = r),
    Yf({
      disabled: s,
      subject: n._subjects.values,
      next: (d) => {
        L0(l.current, d.name, i) &&
          u(Rt(V0(l.current, n._names, d.values || n._formValues, !1, o)));
      },
    });
  const [a, u] = D.useState(n._getWatch(r, o));
  return D.useEffect(() => n._removeUnmounted()), a;
}
var Qf = (e) => /^\w*$/.test(e),
  z0 = (e) => ll(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Te = (e, t, n) => {
    let r = -1;
    const o = Qf(t) ? [t] : z0(t),
      s = o.length,
      i = s - 1;
    for (; ++r < s; ) {
      const l = o[r];
      let a = n;
      if (r !== i) {
        const u = e[l];
        a = lt(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
      }
      (e[l] = a), (e = e[l]);
    }
    return e;
  };
function jb(e) {
  const t = gu(),
    { name: n, disabled: r, control: o = t.control, shouldUnregister: s } = e,
    i = A0(o._names.array, n),
    l = Rb({
      control: o,
      name: n,
      defaultValue: W(o._formValues, n, W(o._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    a = kb({ control: o, name: n }),
    u = D.useRef(
      o.register(n, {
        ...e.rules,
        value: l,
        ...(sn(e.disabled) ? { disabled: e.disabled } : {}),
      })
    );
  return (
    D.useEffect(() => {
      const d = o._options.shouldUnregister || s,
        p = (f, h) => {
          const x = W(o._fields, f);
          x && (x._f.mount = h);
        };
      if ((p(n, !0), d)) {
        const f = Rt(W(o._options.defaultValues, n));
        Te(o._defaultValues, n, f),
          qe(W(o._formValues, n)) && Te(o._formValues, n, f);
      }
      return () => {
        (i ? d && !o._state.action : d) ? o.unregister(n) : p(n, !1);
      };
    }, [n, o, i, s]),
    D.useEffect(() => {
      W(o._fields, n) &&
        o._updateDisabledField({
          disabled: r,
          fields: o._fields,
          name: n,
          value: W(o._fields, n)._f.value,
        });
    }, [r, n, o]),
    {
      field: {
        name: n,
        value: l,
        ...(sn(r) || a.disabled ? { disabled: a.disabled || r } : {}),
        onChange: D.useCallback(
          (d) =>
            u.current.onChange({
              target: { value: O0(d), name: n },
              type: za.CHANGE,
            }),
          [n]
        ),
        onBlur: D.useCallback(
          () =>
            u.current.onBlur({
              target: { value: W(o._formValues, n), name: n },
              type: za.BLUR,
            }),
          [n, o]
        ),
        ref: (d) => {
          const p = W(o._fields, n);
          p &&
            d &&
            (p._f.ref = {
              focus: () => d.focus(),
              select: () => d.select(),
              setCustomValidity: (f) => d.setCustomValidity(f),
              reportValidity: () => d.reportValidity(),
            });
        },
      },
      formState: a,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!W(a.errors, n) },
          isDirty: { enumerable: !0, get: () => !!W(a.dirtyFields, n) },
          isTouched: { enumerable: !0, get: () => !!W(a.touchedFields, n) },
          isValidating: {
            enumerable: !0,
            get: () => !!W(a.validatingFields, n),
          },
          error: { enumerable: !0, get: () => W(a.errors, n) },
        }
      ),
    }
  );
}
const Nb = (e) => e.render(jb(e));
var B0 = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  Gh = (e) => ({
    isOnSubmit: !e || e === ln.onSubmit,
    isOnBlur: e === ln.onBlur,
    isOnChange: e === ln.onChange,
    isOnAll: e === ln.all,
    isOnTouch: e === ln.onTouched,
  }),
  Kh = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const mi = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const s = W(e, o);
    if (s) {
      const { _f: i, ...l } = s;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], o) && !r) break;
        if (i.ref && t(i.ref, i.name) && !r) break;
        mi(l, t);
      } else lt(l) && mi(l, t);
    }
  }
};
var Pb = (e, t, n) => {
    const r = ll(W(e, n));
    return Te(r, "root", t[n]), Te(e, n, r), e;
  },
  qf = (e) => e.type === "file",
  br = (e) => typeof e == "function",
  Ba = (e) => {
    if (!Kf) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  oa = (e) => En(e),
  Xf = (e) => e.type === "radio",
  Ua = (e) => e instanceof RegExp;
const Yh = { value: !1, isValid: !1 },
  Qh = { value: !0, isValid: !0 };
var U0 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !qe(e[0].attributes.value)
        ? qe(e[0].value) || e[0].value === ""
          ? Qh
          : { value: e[0].value, isValid: !0 }
        : Qh
      : Yh;
  }
  return Yh;
};
const qh = { isValid: !1, value: null };
var H0 = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        qh
      )
    : qh;
function Xh(e, t, n = "validate") {
  if (oa(e) || (Array.isArray(e) && e.every(oa)) || (sn(e) && !e))
    return { type: n, message: oa(e) ? e : "", ref: t };
}
var Ao = (e) => (lt(e) && !Ua(e) ? e : { value: e, message: "" }),
  Jh = async (e, t, n, r, o) => {
    const {
        ref: s,
        refs: i,
        required: l,
        maxLength: a,
        minLength: u,
        min: d,
        max: p,
        pattern: f,
        validate: h,
        name: x,
        valueAsNumber: y,
        mount: S,
        disabled: v,
      } = e._f,
      g = W(t, x);
    if (!S || v) return {};
    const w = i ? i[0] : s,
      C = ($) => {
        r &&
          w.reportValidity &&
          (w.setCustomValidity(sn($) ? "" : $ || ""), w.reportValidity());
      },
      E = {},
      N = Xf(s),
      P = il(s),
      _ = N || P,
      M =
        ((y || qf(s)) && qe(s.value) && qe(g)) ||
        (Ba(s) && s.value === "") ||
        g === "" ||
        (Array.isArray(g) && !g.length),
      j = B0.bind(null, x, n, E),
      A = ($, O, I, F = Ln.maxLength, U = Ln.minLength) => {
        const L = $ ? O : I;
        E[x] = { type: $ ? F : U, message: L, ref: s, ...j($ ? F : U, L) };
      };
    if (
      o
        ? !Array.isArray(g) || !g.length
        : l &&
          ((!_ && (M || _t(g))) ||
            (sn(g) && !g) ||
            (P && !U0(i).isValid) ||
            (N && !H0(i).isValid))
    ) {
      const { value: $, message: O } = oa(l)
        ? { value: !!l, message: l }
        : Ao(l);
      if (
        $ &&
        ((E[x] = {
          type: Ln.required,
          message: O,
          ref: w,
          ...j(Ln.required, O),
        }),
        !n)
      )
        return C(O), E;
    }
    if (!M && (!_t(d) || !_t(p))) {
      let $, O;
      const I = Ao(p),
        F = Ao(d);
      if (!_t(g) && !isNaN(g)) {
        const U = s.valueAsNumber || (g && +g);
        _t(I.value) || ($ = U > I.value), _t(F.value) || (O = U < F.value);
      } else {
        const U = s.valueAsDate || new Date(g),
          L = (J) => new Date(new Date().toDateString() + " " + J),
          R = s.type == "time",
          V = s.type == "week";
        En(I.value) &&
          g &&
          ($ = R ? L(g) > L(I.value) : V ? g > I.value : U > new Date(I.value)),
          En(F.value) &&
            g &&
            (O = R
              ? L(g) < L(F.value)
              : V
              ? g < F.value
              : U < new Date(F.value));
      }
      if (($ || O) && (A(!!$, I.message, F.message, Ln.max, Ln.min), !n))
        return C(E[x].message), E;
    }
    if ((a || u) && !M && (En(g) || (o && Array.isArray(g)))) {
      const $ = Ao(a),
        O = Ao(u),
        I = !_t($.value) && g.length > +$.value,
        F = !_t(O.value) && g.length < +O.value;
      if ((I || F) && (A(I, $.message, O.message), !n))
        return C(E[x].message), E;
    }
    if (f && !M && En(g)) {
      const { value: $, message: O } = Ao(f);
      if (
        Ua($) &&
        !g.match($) &&
        ((E[x] = { type: Ln.pattern, message: O, ref: s, ...j(Ln.pattern, O) }),
        !n)
      )
        return C(O), E;
    }
    if (h) {
      if (br(h)) {
        const $ = await h(g, t),
          O = Xh($, w);
        if (O && ((E[x] = { ...O, ...j(Ln.validate, O.message) }), !n))
          return C(O.message), E;
      } else if (lt(h)) {
        let $ = {};
        for (const O in h) {
          if (!Ft($) && !n) break;
          const I = Xh(await h[O](g, t), w, O);
          I &&
            (($ = { ...I, ...j(O, I.message) }), C(I.message), n && (E[x] = $));
        }
        if (!Ft($) && ((E[x] = { ref: w, ...$ }), !n)) return E;
      }
    }
    return C(!0), E;
  };
function Tb(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = qe(e) ? r++ : e[t[r++]];
  return e;
}
function Mb(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !qe(e[t])) return !1;
  return !0;
}
function ot(e, t) {
  const n = Array.isArray(t) ? t : Qf(t) ? [t] : z0(t),
    r = n.length === 1 ? e : Tb(e, n),
    o = n.length - 1,
    s = n[o];
  return (
    r && delete r[s],
    o !== 0 &&
      ((lt(r) && Ft(r)) || (Array.isArray(r) && Mb(r))) &&
      ot(e, n.slice(0, -1)),
    e
  );
}
var lc = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const s of e) s.next && s.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Ha = (e) => _t(e) || !M0(e);
function no(e, t) {
  if (Ha(e) || Ha(t)) return e === t;
  if (es(e) && es(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const s = e[o];
    if (!r.includes(o)) return !1;
    if (o !== "ref") {
      const i = t[o];
      if (
        (es(s) && es(i)) ||
        (lt(s) && lt(i)) ||
        (Array.isArray(s) && Array.isArray(i))
          ? !no(s, i)
          : s !== i
      )
        return !1;
    }
  }
  return !0;
}
var W0 = (e) => e.type === "select-multiple",
  Ob = (e) => Xf(e) || il(e),
  ac = (e) => Ba(e) && e.isConnected,
  Z0 = (e) => {
    for (const t in e) if (br(e[t])) return !0;
    return !1;
  };
function Wa(e, t = {}) {
  const n = Array.isArray(e);
  if (lt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (lt(e[r]) && !Z0(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Wa(e[r], t[r]))
        : _t(e[r]) || (t[r] = !0);
  return t;
}
function G0(e, t, n) {
  const r = Array.isArray(e);
  if (lt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (lt(e[o]) && !Z0(e[o]))
        ? qe(t) || Ha(n[o])
          ? (n[o] = Array.isArray(e[o]) ? Wa(e[o], []) : { ...Wa(e[o]) })
          : G0(e[o], _t(t) ? {} : t[o], n[o])
        : (n[o] = !no(e[o], t[o]));
  return n;
}
var Ml = (e, t) => G0(e, t, Wa(t)),
  K0 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    qe(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && En(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function uc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return qf(t)
      ? t.files
      : Xf(t)
      ? H0(e.refs).value
      : W0(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : il(t)
      ? U0(e.refs).value
      : K0(qe(t.value) ? e.ref.value : t.value, e);
}
var Ab = (e, t, n, r) => {
    const o = {};
    for (const s of e) {
      const i = W(t, s);
      i && Te(o, s, i._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  Qs = (e) =>
    qe(e)
      ? e
      : Ua(e)
      ? e.source
      : lt(e)
      ? Ua(e.value)
        ? e.value.source
        : e.value
      : e,
  Ib = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function em(e, t, n) {
  const r = W(e, n);
  if (r || Qf(n)) return { error: r, name: n };
  const o = n.split(".");
  for (; o.length; ) {
    const s = o.join("."),
      i = W(t, s),
      l = W(e, s);
    if (i && !Array.isArray(i) && n !== s) return { name: n };
    if (l && l.type) return { name: s, error: l };
    o.pop();
  }
  return { name: n };
}
var Fb = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : o.isOnBlur)
      ? !e
      : (n ? r.isOnChange : o.isOnChange)
      ? e
      : !0,
  Db = (e, t) => !ll(W(e, t)).length && ot(e, t);
const Lb = {
  mode: ln.onSubmit,
  reValidateMode: ln.onChange,
  shouldFocusError: !0,
};
function Vb(e = {}) {
  let t = { ...Lb, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: br(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    o =
      lt(t.defaultValues) || lt(t.values)
        ? Rt(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : Rt(o),
    i = { action: !1, mount: !1, watch: !1 },
    l = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    a,
    u = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    p = { values: lc(), array: lc(), state: lc() },
    f = Gh(t.mode),
    h = Gh(t.reValidateMode),
    x = t.criteriaMode === ln.all,
    y = (b) => (k) => {
      clearTimeout(u), (u = setTimeout(b, k));
    },
    S = async (b) => {
      if (d.isValid || b) {
        const k = t.resolver ? Ft((await _()).errors) : await j(r, !0);
        k !== n.isValid && p.state.next({ isValid: k });
      }
    },
    v = (b, k) => {
      (d.isValidating || d.validatingFields) &&
        ((b || Array.from(l.mount)).forEach((T) => {
          T && (k ? Te(n.validatingFields, T, k) : ot(n.validatingFields, T));
        }),
        p.state.next({
          validatingFields: n.validatingFields,
          isValidating: !Ft(n.validatingFields),
        }));
    },
    g = (b, k = [], T, G, Z = !0, H = !0) => {
      if (G && T) {
        if (((i.action = !0), H && Array.isArray(W(r, b)))) {
          const ne = T(W(r, b), G.argA, G.argB);
          Z && Te(r, b, ne);
        }
        if (H && Array.isArray(W(n.errors, b))) {
          const ne = T(W(n.errors, b), G.argA, G.argB);
          Z && Te(n.errors, b, ne), Db(n.errors, b);
        }
        if (d.touchedFields && H && Array.isArray(W(n.touchedFields, b))) {
          const ne = T(W(n.touchedFields, b), G.argA, G.argB);
          Z && Te(n.touchedFields, b, ne);
        }
        d.dirtyFields && (n.dirtyFields = Ml(o, s)),
          p.state.next({
            name: b,
            isDirty: $(b, k),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else Te(s, b, k);
    },
    w = (b, k) => {
      Te(n.errors, b, k), p.state.next({ errors: n.errors });
    },
    C = (b) => {
      (n.errors = b), p.state.next({ errors: n.errors, isValid: !1 });
    },
    E = (b, k, T, G) => {
      const Z = W(r, b);
      if (Z) {
        const H = W(s, b, qe(T) ? W(o, b) : T);
        qe(H) || (G && G.defaultChecked) || k
          ? Te(s, b, k ? H : uc(Z._f))
          : F(b, H),
          i.mount && S();
      }
    },
    N = (b, k, T, G, Z) => {
      let H = !1,
        ne = !1;
      const Re = { name: b },
        Ye = !!(W(r, b) && W(r, b)._f.disabled);
      if (!T || G) {
        d.isDirty &&
          ((ne = n.isDirty),
          (n.isDirty = Re.isDirty = $()),
          (H = ne !== Re.isDirty));
        const et = Ye || no(W(o, b), k);
        (ne = !!(!Ye && W(n.dirtyFields, b))),
          et || Ye ? ot(n.dirtyFields, b) : Te(n.dirtyFields, b, !0),
          (Re.dirtyFields = n.dirtyFields),
          (H = H || (d.dirtyFields && ne !== !et));
      }
      if (T) {
        const et = W(n.touchedFields, b);
        et ||
          (Te(n.touchedFields, b, T),
          (Re.touchedFields = n.touchedFields),
          (H = H || (d.touchedFields && et !== T)));
      }
      return H && Z && p.state.next(Re), H ? Re : {};
    },
    P = (b, k, T, G) => {
      const Z = W(n.errors, b),
        H = d.isValid && sn(k) && n.isValid !== k;
      if (
        (e.delayError && T
          ? ((a = y(() => w(b, T))), a(e.delayError))
          : (clearTimeout(u),
            (a = null),
            T ? Te(n.errors, b, T) : ot(n.errors, b)),
        (T ? !no(Z, T) : Z) || !Ft(G) || H)
      ) {
        const ne = {
          ...G,
          ...(H && sn(k) ? { isValid: k } : {}),
          errors: n.errors,
          name: b,
        };
        (n = { ...n, ...ne }), p.state.next(ne);
      }
    },
    _ = async (b) => {
      v(b, !0);
      const k = await t.resolver(
        s,
        t.context,
        Ab(b || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return v(b), k;
    },
    M = async (b) => {
      const { errors: k } = await _(b);
      if (b)
        for (const T of b) {
          const G = W(k, T);
          G ? Te(n.errors, T, G) : ot(n.errors, T);
        }
      else n.errors = k;
      return k;
    },
    j = async (b, k, T = { valid: !0 }) => {
      for (const G in b) {
        const Z = b[G];
        if (Z) {
          const { _f: H, ...ne } = Z;
          if (H) {
            const Re = l.array.has(H.name);
            v([G], !0);
            const Ye = await Jh(Z, s, x, t.shouldUseNativeValidation && !k, Re);
            if ((v([G]), Ye[H.name] && ((T.valid = !1), k))) break;
            !k &&
              (W(Ye, H.name)
                ? Re
                  ? Pb(n.errors, Ye, H.name)
                  : Te(n.errors, H.name, Ye[H.name])
                : ot(n.errors, H.name));
          }
          ne && (await j(ne, k, T));
        }
      }
      return T.valid;
    },
    A = () => {
      for (const b of l.unMount) {
        const k = W(r, b);
        k &&
          (k._f.refs ? k._f.refs.every((T) => !ac(T)) : !ac(k._f.ref)) &&
          ue(b);
      }
      l.unMount = new Set();
    },
    $ = (b, k) => (b && k && Te(s, b, k), !no(Q(), o)),
    O = (b, k, T) =>
      V0(b, l, { ...(i.mount ? s : qe(k) ? o : En(b) ? { [b]: k } : k) }, T, k),
    I = (b) => ll(W(i.mount ? s : o, b, e.shouldUnregister ? W(o, b, []) : [])),
    F = (b, k, T = {}) => {
      const G = W(r, b);
      let Z = k;
      if (G) {
        const H = G._f;
        H &&
          (!H.disabled && Te(s, b, K0(k, H)),
          (Z = Ba(H.ref) && _t(k) ? "" : k),
          W0(H.ref)
            ? [...H.ref.options].forEach(
                (ne) => (ne.selected = Z.includes(ne.value))
              )
            : H.refs
            ? il(H.ref)
              ? H.refs.length > 1
                ? H.refs.forEach(
                    (ne) =>
                      (!ne.defaultChecked || !ne.disabled) &&
                      (ne.checked = Array.isArray(Z)
                        ? !!Z.find((Re) => Re === ne.value)
                        : Z === ne.value)
                  )
                : H.refs[0] && (H.refs[0].checked = !!Z)
              : H.refs.forEach((ne) => (ne.checked = ne.value === Z))
            : qf(H.ref)
            ? (H.ref.value = "")
            : ((H.ref.value = Z),
              H.ref.type || p.values.next({ name: b, values: { ...s } })));
      }
      (T.shouldDirty || T.shouldTouch) &&
        N(b, Z, T.shouldTouch, T.shouldDirty, !0),
        T.shouldValidate && J(b);
    },
    U = (b, k, T) => {
      for (const G in k) {
        const Z = k[G],
          H = `${b}.${G}`,
          ne = W(r, H);
        (l.array.has(b) || !Ha(Z) || (ne && !ne._f)) && !es(Z)
          ? U(H, Z, T)
          : F(H, Z, T);
      }
    },
    L = (b, k, T = {}) => {
      const G = W(r, b),
        Z = l.array.has(b),
        H = Rt(k);
      Te(s, b, H),
        Z
          ? (p.array.next({ name: b, values: { ...s } }),
            (d.isDirty || d.dirtyFields) &&
              T.shouldDirty &&
              p.state.next({
                name: b,
                dirtyFields: Ml(o, s),
                isDirty: $(b, H),
              }))
          : G && !G._f && !_t(H)
          ? U(b, H, T)
          : F(b, H, T),
        Kh(b, l) && p.state.next({ ...n }),
        p.values.next({ name: i.mount ? b : void 0, values: { ...s } });
    },
    R = async (b) => {
      i.mount = !0;
      const k = b.target;
      let T = k.name,
        G = !0;
      const Z = W(r, T),
        H = () => (k.type ? uc(Z._f) : O0(b)),
        ne = (Re) => {
          G = Number.isNaN(Re) || Re === W(s, T, Re);
        };
      if (Z) {
        let Re, Ye;
        const et = H(),
          In = b.type === za.BLUR || b.type === za.FOCUS_OUT,
          ur =
            (!Ib(Z._f) && !t.resolver && !W(n.errors, T) && !Z._f.deps) ||
            Fb(In, W(n.touchedFields, T), n.isSubmitted, h, f),
          To = Kh(T, l, In);
        Te(s, T, et),
          In
            ? (Z._f.onBlur && Z._f.onBlur(b), a && a(0))
            : Z._f.onChange && Z._f.onChange(b);
        const Ds = N(T, et, In, !1),
          fl = !Ft(Ds) || To;
        if (
          (!In && p.values.next({ name: T, type: b.type, values: { ...s } }),
          ur)
        )
          return (
            d.isValid && S(), fl && p.state.next({ name: T, ...(To ? {} : Ds) })
          );
        if ((!In && To && p.state.next({ ...n }), t.resolver)) {
          const { errors: Ls } = await _([T]);
          if ((ne(et), G)) {
            const Pu = em(n.errors, r, T),
              Mo = em(Ls, r, Pu.name || T);
            (Re = Mo.error), (T = Mo.name), (Ye = Ft(Ls));
          }
        } else
          v([T], !0),
            (Re = (await Jh(Z, s, x, t.shouldUseNativeValidation))[T]),
            v([T]),
            ne(et),
            G && (Re ? (Ye = !1) : d.isValid && (Ye = await j(r, !0)));
        G && (Z._f.deps && J(Z._f.deps), P(T, Ye, Re, Ds));
      }
    },
    V = (b, k) => {
      if (W(n.errors, k) && b.focus) return b.focus(), 1;
    },
    J = async (b, k = {}) => {
      let T, G;
      const Z = ra(b);
      if (t.resolver) {
        const H = await M(qe(b) ? b : Z);
        (T = Ft(H)), (G = b ? !Z.some((ne) => W(H, ne)) : T);
      } else
        b
          ? ((G = (
              await Promise.all(
                Z.map(async (H) => {
                  const ne = W(r, H);
                  return await j(ne && ne._f ? { [H]: ne } : ne);
                })
              )
            ).every(Boolean)),
            !(!G && !n.isValid) && S())
          : (G = T = await j(r));
      return (
        p.state.next({
          ...(!En(b) || (d.isValid && T !== n.isValid) ? {} : { name: b }),
          ...(t.resolver || !b ? { isValid: T } : {}),
          errors: n.errors,
        }),
        k.shouldFocus && !G && mi(r, V, b ? Z : l.mount),
        G
      );
    },
    Q = (b) => {
      const k = { ...(i.mount ? s : o) };
      return qe(b) ? k : En(b) ? W(k, b) : b.map((T) => W(k, T));
    },
    X = (b, k) => ({
      invalid: !!W((k || n).errors, b),
      isDirty: !!W((k || n).dirtyFields, b),
      isTouched: !!W((k || n).touchedFields, b),
      isValidating: !!W((k || n).validatingFields, b),
      error: W((k || n).errors, b),
    }),
    he = (b) => {
      b && ra(b).forEach((k) => ot(n.errors, k)),
        p.state.next({ errors: b ? n.errors : {} });
    },
    Pe = (b, k, T) => {
      const G = (W(r, b, { _f: {} })._f || {}).ref;
      Te(n.errors, b, { ...k, ref: G }),
        p.state.next({ name: b, errors: n.errors, isValid: !1 }),
        T && T.shouldFocus && G && G.focus && G.focus();
    },
    He = (b, k) =>
      br(b)
        ? p.values.subscribe({ next: (T) => b(O(void 0, k), T) })
        : O(b, k, !0),
    ue = (b, k = {}) => {
      for (const T of b ? ra(b) : l.mount)
        l.mount.delete(T),
          l.array.delete(T),
          k.keepValue || (ot(r, T), ot(s, T)),
          !k.keepError && ot(n.errors, T),
          !k.keepDirty && ot(n.dirtyFields, T),
          !k.keepTouched && ot(n.touchedFields, T),
          !k.keepIsValidating && ot(n.validatingFields, T),
          !t.shouldUnregister && !k.keepDefaultValue && ot(o, T);
      p.values.next({ values: { ...s } }),
        p.state.next({ ...n, ...(k.keepDirty ? { isDirty: $() } : {}) }),
        !k.keepIsValid && S();
    },
    te = ({ disabled: b, name: k, field: T, fields: G, value: Z }) => {
      if (sn(b)) {
        const H = b ? void 0 : qe(Z) ? uc(T ? T._f : W(G, k)._f) : Z;
        Te(s, k, H), N(k, H, !1, !1, !0);
      }
    },
    ve = (b, k = {}) => {
      let T = W(r, b);
      const G = sn(k.disabled);
      return (
        Te(r, b, {
          ...(T || {}),
          _f: {
            ...(T && T._f ? T._f : { ref: { name: b } }),
            name: b,
            mount: !0,
            ...k,
          },
        }),
        l.mount.add(b),
        T
          ? te({ field: T, disabled: k.disabled, name: b, value: k.value })
          : E(b, !0, k.value),
        {
          ...(G ? { disabled: k.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!k.required,
                min: Qs(k.min),
                max: Qs(k.max),
                minLength: Qs(k.minLength),
                maxLength: Qs(k.maxLength),
                pattern: Qs(k.pattern),
              }
            : {}),
          name: b,
          onChange: R,
          onBlur: R,
          ref: (Z) => {
            if (Z) {
              ve(b, k), (T = W(r, b));
              const H =
                  (qe(Z.value) &&
                    Z.querySelectorAll &&
                    Z.querySelectorAll("input,select,textarea")[0]) ||
                  Z,
                ne = Ob(H),
                Re = T._f.refs || [];
              if (ne ? Re.find((Ye) => Ye === H) : H === T._f.ref) return;
              Te(r, b, {
                _f: {
                  ...T._f,
                  ...(ne
                    ? {
                        refs: [
                          ...Re.filter(ac),
                          H,
                          ...(Array.isArray(W(o, b)) ? [{}] : []),
                        ],
                        ref: { type: H.type, name: b },
                      }
                    : { ref: H }),
                },
              }),
                E(b, !1, void 0, H);
            } else
              (T = W(r, b, {})),
                T._f && (T._f.mount = !1),
                (t.shouldUnregister || k.shouldUnregister) &&
                  !(A0(l.array, b) && i.action) &&
                  l.unMount.add(b);
          },
        }
      );
    },
    Oe = () => t.shouldFocusError && mi(r, V, l.mount),
    be = (b) => {
      sn(b) &&
        (p.state.next({ disabled: b }),
        mi(
          r,
          (k, T) => {
            let G = b;
            const Z = W(r, T);
            Z && sn(Z._f.disabled) && (G || (G = Z._f.disabled)),
              (k.disabled = G);
          },
          0,
          !1
        ));
    },
    Ee = (b, k) => async (T) => {
      let G;
      T && (T.preventDefault && T.preventDefault(), T.persist && T.persist());
      let Z = Rt(s);
      if ((p.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: H, values: ne } = await _();
        (n.errors = H), (Z = ne);
      } else await j(r);
      if ((ot(n.errors, "root"), Ft(n.errors))) {
        p.state.next({ errors: {} });
        try {
          await b(Z, T);
        } catch (H) {
          G = H;
        }
      } else k && (await k({ ...n.errors }, T)), Oe(), setTimeout(Oe);
      if (
        (p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ft(n.errors) && !G,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        G)
      )
        throw G;
    },
    ye = (b, k = {}) => {
      W(r, b) &&
        (qe(k.defaultValue)
          ? L(b, Rt(W(o, b)))
          : (L(b, k.defaultValue), Te(o, b, Rt(k.defaultValue))),
        k.keepTouched || ot(n.touchedFields, b),
        k.keepDirty ||
          (ot(n.dirtyFields, b),
          (n.isDirty = k.defaultValue ? $(b, Rt(W(o, b))) : $())),
        k.keepError || (ot(n.errors, b), d.isValid && S()),
        p.state.next({ ...n }));
    },
    at = (b, k = {}) => {
      const T = b ? Rt(b) : o,
        G = Rt(T),
        Z = Ft(b),
        H = Z ? o : G;
      if ((k.keepDefaultValues || (o = T), !k.keepValues)) {
        if (k.keepDirtyValues)
          for (const ne of l.mount)
            W(n.dirtyFields, ne) ? Te(H, ne, W(s, ne)) : L(ne, W(H, ne));
        else {
          if (Kf && qe(b))
            for (const ne of l.mount) {
              const Re = W(r, ne);
              if (Re && Re._f) {
                const Ye = Array.isArray(Re._f.refs)
                  ? Re._f.refs[0]
                  : Re._f.ref;
                if (Ba(Ye)) {
                  const et = Ye.closest("form");
                  if (et) {
                    et.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (s = e.shouldUnregister ? (k.keepDefaultValues ? Rt(o) : {}) : Rt(H)),
          p.array.next({ values: { ...H } }),
          p.values.next({ values: { ...H } });
      }
      (l = {
        mount: k.keepDirtyValues ? l.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (i.mount = !d.isValid || !!k.keepIsValid || !!k.keepDirtyValues),
        (i.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: k.keepSubmitCount ? n.submitCount : 0,
          isDirty: Z
            ? !1
            : k.keepDirty
            ? n.isDirty
            : !!(k.keepDefaultValues && !no(b, o)),
          isSubmitted: k.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: Z
            ? []
            : k.keepDirtyValues
            ? k.keepDefaultValues && s
              ? Ml(o, s)
              : n.dirtyFields
            : k.keepDefaultValues && b
            ? Ml(o, b)
            : {},
          touchedFields: k.keepTouched ? n.touchedFields : {},
          errors: k.keepErrors ? n.errors : {},
          isSubmitSuccessful: k.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    rt = (b, k) => at(br(b) ? b(s) : b, k);
  return {
    control: {
      register: ve,
      unregister: ue,
      getFieldState: X,
      handleSubmit: Ee,
      setError: Pe,
      _executeSchema: _,
      _getWatch: O,
      _getDirty: $,
      _updateValid: S,
      _removeUnmounted: A,
      _updateFieldArray: g,
      _updateDisabledField: te,
      _getFieldArray: I,
      _reset: at,
      _resetDefaultValues: () =>
        br(t.defaultValues) &&
        t.defaultValues().then((b) => {
          rt(b, t.resetOptions), p.state.next({ isLoading: !1 });
        }),
      _updateFormState: (b) => {
        n = { ...n, ...b };
      },
      _disableForm: be,
      _subjects: p,
      _proxyFormState: d,
      _setErrors: C,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return i;
      },
      set _state(b) {
        i = b;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(b) {
        l = b;
      },
      get _formState() {
        return n;
      },
      set _formState(b) {
        n = b;
      },
      get _options() {
        return t;
      },
      set _options(b) {
        t = { ...t, ...b };
      },
    },
    trigger: J,
    register: ve,
    handleSubmit: Ee,
    watch: He,
    setValue: L,
    getValues: Q,
    reset: rt,
    resetField: ye,
    clearErrors: he,
    unregister: ue,
    setError: Pe,
    setFocus: (b, k = {}) => {
      const T = W(r, b),
        G = T && T._f;
      if (G) {
        const Z = G.refs ? G.refs[0] : G.ref;
        Z.focus && (Z.focus(), k.shouldSelect && Z.select());
      }
    },
    getFieldState: X,
  };
}
function So(e = {}) {
  const t = D.useRef(),
    n = D.useRef(),
    [r, o] = D.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: br(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: br(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Vb(e), formState: r });
  const s = t.current.control;
  return (
    (s._options = e),
    Yf({
      subject: s._subjects.state,
      next: (i) => {
        D0(i, s._proxyFormState, s._updateFormState, !0) &&
          o({ ...s._formState });
      },
    }),
    D.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    D.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const i = s._getDirty();
        i !== r.isDirty && s._subjects.state.next({ isDirty: i });
      }
    }, [s, r.isDirty]),
    D.useEffect(() => {
      e.values && !no(e.values, n.current)
        ? (s._reset(e.values, s._options.resetOptions),
          (n.current = e.values),
          o((i) => ({ ...i })))
        : s._resetDefaultValues();
    }, [e.values, s]),
    D.useEffect(() => {
      e.errors && s._setErrors(e.errors);
    }, [e.errors, s]),
    D.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    D.useEffect(() => {
      e.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
    }, [e.shouldUnregister, s]),
    (t.current.formState = F0(r, s)),
    t.current
  );
}
var tm = function (e, t, n) {
    if (e && "reportValidity" in e) {
      var r = W(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  Y0 = function (e, t) {
    var n = function (o) {
      var s = t.fields[o];
      s && s.ref && "reportValidity" in s.ref
        ? tm(s.ref, o, e)
        : s.refs &&
          s.refs.forEach(function (i) {
            return tm(i, o, e);
          });
    };
    for (var r in t.fields) n(r);
  },
  zb = function (e, t) {
    t.shouldUseNativeValidation && Y0(e, t);
    var n = {};
    for (var r in e) {
      var o = W(t.fields, r),
        s = Object.assign(e[r] || {}, { ref: o && o.ref });
      if (Bb(t.names || Object.keys(e), r)) {
        var i = Object.assign({}, W(n, r));
        Te(i, "root", s), Te(n, r, i);
      } else Te(n, r, s);
    }
    return n;
  },
  Bb = function (e, t) {
    return e.some(function (n) {
      return n.startsWith(t + ".");
    });
  },
  Ub = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        o = r.code,
        s = r.message,
        i = r.path.join(".");
      if (!n[i])
        if ("unionErrors" in r) {
          var l = r.unionErrors[0].errors[0];
          n[i] = { message: l.message, type: l.code };
        } else n[i] = { message: s, type: o };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (d) {
            return d.errors.forEach(function (p) {
              return e.push(p);
            });
          }),
        t)
      ) {
        var a = n[i].types,
          u = a && a[r.code];
        n[i] = B0(i, t, n, o, u ? [].concat(u, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  _o = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, o, s) {
        try {
          return Promise.resolve(
            (function (i, l) {
              try {
                var a = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (u) {
                  return (
                    s.shouldUseNativeValidation && Y0({}, s),
                    { errors: {}, values: n.raw ? r : u }
                  );
                });
              } catch (u) {
                return l(u);
              }
              return a && a.then ? a.then(void 0, l) : a;
            })(0, function (i) {
              if (
                (function (l) {
                  return l.errors != null;
                })(i)
              )
                return {
                  values: {},
                  errors: zb(
                    Ub(
                      i.errors,
                      !s.shouldUseNativeValidation && s.criteriaMode === "all"
                    ),
                    s
                  ),
                };
              throw i;
            })
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }
    );
  };
const Hb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ue = Hb.reduce((e, t) => {
    const n = m.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        l = s ? Dr : t;
      return (
        m.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        m.createElement(l, re({}, i, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Wb(e, t) {
  e && xo.flushSync(() => e.dispatchEvent(t));
}
const Zb = m.forwardRef((e, t) =>
    m.createElement(
      Ue.label,
      re({}, e, {
        ref: t,
        onMouseDown: (n) => {
          var r;
          (r = e.onMouseDown) === null || r === void 0 || r.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault();
        },
      })
    )
  ),
  Q0 = Zb,
  Gb = g0(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  q0 = m.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Q0, { ref: n, className: je(Gb(), e), ...t })
  );
q0.displayName = Q0.displayName;
const Co = $b,
  X0 = m.createContext({}),
  $e = ({ ...e }) =>
    c.jsx(X0.Provider, {
      value: { name: e.name },
      children: c.jsx(Nb, { ...e }),
    }),
  vu = () => {
    const e = m.useContext(X0),
      t = m.useContext(J0),
      { getFieldState: n, formState: r } = gu(),
      o = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: s } = t;
    return {
      id: s,
      name: e.name,
      formItemId: `${s}-form-item`,
      formDescriptionId: `${s}-form-item-description`,
      formMessageId: `${s}-form-item-message`,
      ...o,
    };
  },
  J0 = m.createContext({}),
  xe = m.forwardRef(({ className: e, ...t }, n) => {
    const r = m.useId();
    return c.jsx(J0.Provider, {
      value: { id: r },
      children: c.jsx("div", { ref: n, className: je("space-y-2", e), ...t }),
    });
  });
xe.displayName = "FormItem";
const we = m.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = vu();
  return c.jsx(q0, {
    ref: n,
    className: je(r && "text-destructive", e),
    htmlFor: o,
    ...t,
  });
});
we.displayName = "FormLabel";
const Se = m.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: o,
    formMessageId: s,
  } = vu();
  return c.jsx(Dr, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${o} ${s}` : `${o}`,
    "aria-invalid": !!n,
    ...e,
  });
});
Se.displayName = "FormControl";
const _n = m.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = vu();
  return c.jsx("p", {
    ref: n,
    id: r,
    className: je("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
_n.displayName = "FormDescription";
const _e = m.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: s } = vu(),
    i = o ? String(o == null ? void 0 : o.message) : t;
  return i
    ? c.jsx("p", {
        ref: r,
        id: s,
        className: je("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: i,
      })
    : null;
});
_e.displayName = "FormMessage";
const al = ({ children: e }) =>
    c.jsx("h1", {
      className:
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      children: e,
    }),
  ge = m.forwardRef(({ className: e, type: t, ...n }, r) =>
    c.jsx("input", {
      type: t,
      className: je(
        "flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
    })
  );
ge.displayName = "Input";
var ut = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let Kb = 0;
function ul(e, t) {
  const n = `atom${++Kb}`,
    r = { toString: () => n };
  return (
    typeof e == "function"
      ? (r.read = e)
      : ((r.init = e), (r.read = Yb), (r.write = Qb)),
    r
  );
}
function Yb(e) {
  return e(this);
}
function Qb(e, t, n) {
  return t(this, typeof n == "function" ? n(e(this)) : n);
}
const cc = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
  dc = (e) => "init" in e,
  fc = (e) => !!e.write,
  Za = new WeakMap(),
  qb = (e, t) => {
    Za.set(e, t), e.catch(() => {}).finally(() => Za.delete(e));
  },
  nm = (e, t) => {
    const n = Za.get(e);
    n && (Za.delete(e), n(t));
  },
  rm = (e, t) => {
    (e.status = "fulfilled"), (e.value = t);
  },
  om = (e, t) => {
    (e.status = "rejected"), (e.reason = t);
  },
  Xb = (e) => typeof (e == null ? void 0 : e.then) == "function",
  qs = (e, t) => !!e && "v" in e && "v" in t && Object.is(e.v, t.v),
  sm = (e, t) => !!e && "e" in e && "e" in t && Object.is(e.e, t.e),
  Io = (e) => !!e && "v" in e && e.v instanceof Promise,
  Jb = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig,
  Ol = (e) => {
    if ("e" in e) throw e.e;
    return e.v;
  },
  eE = () => {
    const e = new WeakMap(),
      t = new WeakMap(),
      n = [],
      r = new WeakMap();
    let o, s;
    (ut ? "production" : void 0) !== "production" &&
      ((o = new Set()), (s = new Set()));
    const i = (_) => e.get(_),
      l = (_, M) => {
        M.d.forEach((j, A) => {
          if (!r.has(A)) {
            const $ = i(A);
            r.set(A, [$, new Set()]), $ && l(A, $);
          }
          r.get(A)[1].add(_);
        });
      },
      a = (_, M) => {
        var j;
        (ut ? "production" : void 0) !== "production" && Object.freeze(M);
        const A = i(_);
        if (
          (e.set(_, M),
          (j = n[n.length - 1]) == null || j.add(_),
          r.has(_) || (r.set(_, [A, new Set()]), l(_, M)),
          Io(A))
        ) {
          const $ =
            "v" in M
              ? M.v instanceof Promise
                ? M.v
                : Promise.resolve(M.v)
              : Promise.reject(M.e);
          A.v !== $ && nm(A.v, $);
        }
      },
      u = (_, M, j, A) => {
        const $ = new Map(A ? M.d : null);
        let O = !1;
        j.forEach((I, F) => {
          !I && cc(_, F) && (I = M),
            I
              ? ($.set(F, I), M.d.get(F) !== I && (O = !0))
              : (ut ? "production" : void 0) !== "production" &&
                console.warn("[Bug] atom state not found");
        }),
          (O || M.d.size !== $.size) && (M.d = $);
      },
      d = (_, M, j, A) => {
        const $ = i(_),
          O = { d: ($ == null ? void 0 : $.d) || new Map(), v: M };
        if ((j && u(_, O, j, A), qs($, O) && $.d === O.d)) return $;
        if (Io($) && Io(O) && Jb($, O)) {
          if ($.d === O.d) return $;
          O.v = $.v;
        }
        return a(_, O), O;
      },
      p = (_, M, j, A) => {
        if (Xb(M)) {
          let $;
          const O = () => {
              const F = i(_);
              if (!Io(F) || F.v !== I) return;
              const U = d(_, I, j);
              t.has(_) && F.d !== U.d && E(_, U, F.d);
            },
            I = new Promise((F, U) => {
              let L = !1;
              M.then(
                (R) => {
                  L || ((L = !0), rm(I, R), F(R), O());
                },
                (R) => {
                  L || ((L = !0), om(I, R), U(R), O());
                }
              ),
                ($ = (R) => {
                  L ||
                    ((L = !0),
                    R.then(
                      (V) => rm(I, V),
                      (V) => om(I, V)
                    ),
                    F(R));
                });
            });
          return (
            (I.orig = M),
            (I.status = "pending"),
            qb(I, (F) => {
              F && $(F), A == null || A();
            }),
            d(_, I, j, !0)
          );
        }
        return d(_, M, j);
      },
      f = (_, M, j) => {
        const A = i(_),
          $ = { d: (A == null ? void 0 : A.d) || new Map(), e: M };
        return j && u(_, $, j), sm(A, $) && A.d === $.d ? A : (a(_, $), $);
      },
      h = (_, M) => {
        const j = i(_);
        if (
          !(M != null && M(_)) &&
          j &&
          (t.has(_) ||
            Array.from(j.d).every(([L, R]) => {
              if (L === _) return !0;
              const V = h(L, M);
              return V === R || qs(V, R);
            }))
        )
          return j;
        const A = new Map();
        let $ = !0;
        const O = (L) => {
          if (cc(_, L)) {
            const V = i(L);
            if (V) return A.set(L, V), Ol(V);
            if (dc(L)) return A.set(L, void 0), L.init;
            throw new Error("no atom init");
          }
          const R = h(L, M);
          return A.set(L, R), Ol(R);
        };
        let I, F;
        const U = {
          get signal() {
            return I || (I = new AbortController()), I.signal;
          },
          get setSelf() {
            return (
              (ut ? "production" : void 0) !== "production" &&
                !fc(_) &&
                console.warn(
                  "setSelf function cannot be used with read-only atom"
                ),
              !F &&
                fc(_) &&
                (F = (...L) => {
                  if (
                    ((ut ? "production" : void 0) !== "production" &&
                      $ &&
                      console.warn("setSelf function cannot be called in sync"),
                    !$)
                  )
                    return v(_, ...L);
                }),
              F
            );
          },
        };
        try {
          const L = _.read(O, U);
          return p(_, L, A, () => (I == null ? void 0 : I.abort()));
        } catch (L) {
          return f(_, L, A);
        } finally {
          $ = !1;
        }
      },
      x = (_) => Ol(h(_)),
      y = (_) => {
        const M = (F) => {
            var U, L;
            const R = new Set((U = t.get(F)) == null ? void 0 : U.t);
            return (
              (L = r.get(F)) == null ||
                L[1].forEach((V) => {
                  R.add(V);
                }),
              R
            );
          },
          j = new Array(),
          A = new Set(),
          $ = (F) => {
            if (!A.has(F)) {
              A.add(F);
              for (const U of M(F)) F !== U && $(U);
              j.push(F);
            }
          };
        $(_);
        const O = new Set([_]),
          I = (F) => A.has(F);
        for (let F = j.length - 1; F >= 0; --F) {
          const U = j[F],
            L = i(U);
          if (!L) continue;
          let R = !1;
          for (const V of L.d.keys())
            if (V !== U && O.has(V)) {
              R = !0;
              break;
            }
          if (R) {
            const V = h(U, I);
            l(U, V), qs(L, V) || O.add(U);
          }
          A.delete(U);
        }
      },
      S = (_, ...M) => {
        const j = (O) => Ol(h(O)),
          A = (O, ...I) => {
            const F = n.length > 0;
            F || n.push(new Set([O]));
            let U;
            if (cc(_, O)) {
              if (!dc(O)) throw new Error("atom not writable");
              const L = i(O),
                R = p(O, I[0]);
              qs(L, R) || y(O);
            } else U = S(O, ...I);
            if (!F) {
              const L = N(n.pop());
              (ut ? "production" : void 0) !== "production" &&
                o.forEach((R) => R({ type: "async-write", flushed: L }));
            }
            return U;
          };
        return _.write(j, A, ...M);
      },
      v = (_, ...M) => {
        n.push(new Set([_]));
        const j = S(_, ...M),
          A = N(n.pop());
        return (
          (ut ? "production" : void 0) !== "production" &&
            o.forEach(($) => $({ type: "write", flushed: A })),
          j
        );
      },
      g = (_, M, j) => {
        var A;
        const $ = t.get(_);
        if ($) return M && $.t.add(M), $;
        const O = j || [];
        (A = i(_)) == null ||
          A.d.forEach((F, U) => {
            U !== _ && g(U, _, O);
          }),
          h(_);
        const I = { t: new Set(M && [M]), l: new Set() };
        if (
          (t.set(_, I),
          (ut ? "production" : void 0) !== "production" && s.add(_),
          fc(_) && _.onMount)
        ) {
          const { onMount: F } = _;
          O.push(() => {
            const U = F((...L) => v(_, ...L));
            U && (I.u = U);
          });
        }
        return j || O.forEach((F) => F()), I;
      },
      w = (_, M) => !M.l.size && (!M.t.size || (M.t.size === 1 && M.t.has(_))),
      C = (_, M) => {
        if (!w(_, M)) return;
        const j = M.u;
        j && j(),
          t.delete(_),
          (ut ? "production" : void 0) !== "production" && s.delete(_);
        const A = i(_);
        A
          ? (Io(A) && nm(A.v),
            A.d.forEach(($, O) => {
              if (O !== _) {
                const I = t.get(O);
                I && (I.t.delete(_), C(O, I));
              }
            }))
          : (ut ? "production" : void 0) !== "production" &&
            console.warn("[Bug] could not find atom state to unmount", _);
      },
      E = (_, M, j) => {
        const A = new Set(M.d.keys()),
          $ = new Set();
        j == null ||
          j.forEach((O, I) => {
            if (A.has(I)) {
              A.delete(I);
              return;
            }
            $.add(I);
            const F = t.get(I);
            F && F.t.delete(_);
          }),
          A.forEach((O) => {
            g(O, _);
          }),
          $.forEach((O) => {
            const I = t.get(O);
            I && C(O, I);
          });
      },
      N = (_) => {
        let M;
        (ut ? "production" : void 0) !== "production" && (M = new Set());
        const j = [],
          A = ($) => {
            var O;
            if (!r.has($)) return;
            const [I, F] = r.get($);
            r.delete($),
              j.push([$, I]),
              F.forEach(A),
              (O = i($)) == null || O.d.forEach((U, L) => A(L));
          };
        if (
          (_.forEach(A),
          j.forEach(([$, O]) => {
            const I = i($);
            if (!I) {
              (ut ? "production" : void 0) !== "production" &&
                console.warn("[Bug] no atom state to flush");
              return;
            }
            if (I !== O) {
              const F = t.get($);
              F &&
                I.d !== (O == null ? void 0 : O.d) &&
                E($, I, O == null ? void 0 : O.d),
                F &&
                  !(!Io(O) && (qs(O, I) || sm(O, I))) &&
                  (F.l.forEach((U) => U()),
                  (ut ? "production" : void 0) !== "production" && M.add($));
            }
          }),
          (ut ? "production" : void 0) !== "production")
        )
          return M;
      },
      P = (_, M) => {
        const j = g(_),
          A = N([_]),
          $ = j.l;
        return (
          $.add(M),
          (ut ? "production" : void 0) !== "production" &&
            o.forEach((O) => O({ type: "sub", flushed: A })),
          () => {
            $.delete(M),
              C(_, j),
              (ut ? "production" : void 0) !== "production" &&
                o.forEach((O) => O({ type: "unsub" }));
          }
        );
      };
    return (ut ? "production" : void 0) !== "production"
      ? {
          get: x,
          set: v,
          sub: P,
          dev_subscribe_store: (_) => (
            o.add(_),
            () => {
              o.delete(_);
            }
          ),
          dev_get_mounted_atoms: () => s.values(),
          dev_get_atom_state: (_) => e.get(_),
          dev_get_mounted: (_) => t.get(_),
          dev_restore_atoms: (_) => {
            n.push(new Set());
            for (const [j, A] of _) dc(j) && (p(j, A), y(j));
            const M = N(n.pop());
            o.forEach((j) => j({ type: "restore", flushed: M }));
          },
        }
      : { get: x, set: v, sub: P };
  };
let Xs;
const tE = () => (
    Xs ||
      ((Xs = eE()),
      (ut ? "production" : void 0) !== "production" &&
        (globalThis.__JOTAI_DEFAULT_STORE__ ||
          (globalThis.__JOTAI_DEFAULT_STORE__ = Xs),
        globalThis.__JOTAI_DEFAULT_STORE__ !== Xs &&
          console.warn(
            "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
          ))),
    Xs
  ),
  nE = tE;
var rE = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const oE = m.createContext(void 0),
  ey = (e) => m.useContext(oE) || nE(),
  sE = (e) => typeof (e == null ? void 0 : e.then) == "function",
  iE =
    D.use ||
    ((e) => {
      if (e.status === "pending") throw e;
      if (e.status === "fulfilled") return e.value;
      throw e.status === "rejected"
        ? e.reason
        : ((e.status = "pending"),
          e.then(
            (t) => {
              (e.status = "fulfilled"), (e.value = t);
            },
            (t) => {
              (e.status = "rejected"), (e.reason = t);
            }
          ),
          e);
    });
function lE(e, t) {
  const n = ey(),
    [[r, o, s], i] = m.useReducer(
      (u) => {
        const d = n.get(e);
        return Object.is(u[0], d) && u[1] === n && u[2] === e ? u : [d, n, e];
      },
      void 0,
      () => [n.get(e), n, e]
    );
  let l = r;
  return (
    (o !== n || s !== e) && (i(), (l = n.get(e))),
    m.useEffect(() => {
      const u = n.sub(e, () => {
        i();
      });
      return i(), u;
    }, [n, e, void 0]),
    m.useDebugValue(l),
    sE(l) ? iE(l) : l
  );
}
function aE(e, t) {
  const n = ey();
  return m.useCallback(
    (...o) => {
      if ((rE ? "production" : void 0) !== "production" && !("write" in e))
        throw new Error("not writable atom");
      return n.set(e, ...o);
    },
    [n, e]
  );
}
function An(e, t) {
  return [lE(e), aE(e)];
}
ul("");
const Pd = "horizontal",
  uE = ["horizontal", "vertical"],
  ty = m.forwardRef((e, t) => {
    const { decorative: n, orientation: r = Pd, ...o } = e,
      s = ny(r) ? r : Pd,
      l = n
        ? { role: "none" }
        : {
            "aria-orientation": s === "vertical" ? s : void 0,
            role: "separator",
          };
    return m.createElement(
      Ue.div,
      re({ "data-orientation": s }, l, o, { ref: t })
    );
  });
ty.propTypes = {
  orientation(e, t, n) {
    const r = e[t],
      o = String(r);
    return r && !ny(r) ? new Error(cE(o, n)) : null;
  },
};
function cE(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Pd}\`.`;
}
function ny(e) {
  return uE.includes(e);
}
const ry = ty,
  ho = m.forwardRef(
    (
      { className: e, orientation: t = "horizontal", decorative: n = !0, ...r },
      o
    ) =>
      c.jsx(ry, {
        ref: o,
        decorative: n,
        orientation: t,
        className: je(
          "shrink-0 bg-border",
          t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          e
        ),
        ...r,
      })
  );
ho.displayName = ry.displayName;
const im = "https://api.markirowka.ru",
  vr = class vr {
    constructor(t) {
      Tu(this, "headers", {});
      this.headers = t;
    }
    async signUp(t) {
      return await this.post("/api/signup", t, "POST");
    }
    async signIn(t) {
      return await this.post("/api/signin", t, "POST");
    }
    async getUser() {
      return await this.get("/api/userdata");
    }
    async sendEmailConfirm(t) {
      return await this.post("/api/signupconfirm", { token: t }, "POST");
    }
    async logout() {
      return await this.get("/api/logout");
    }
    async sendResetPasswordRequest(t) {
      return await this.post("/api/resetpassword", t, "POST");
    }
    async sendNewPassword(t, n) {
      return await this.post(
        "/api/resetpassword",
        { token: t, newPassword: n.password },
        "POST"
      );
    }
    static getInstance() {
      if (!vr.instance) {
        vr.instance = new vr({});
        const t = localStorage.getItem("bearerToken");
        t && vr.instance.setAccessToken(t);
      }
      return vr.instance;
    }
    setAccessToken(t) {
      this.headers.Authorization = `${t}`;
    }
    async get(t) {
      try {
        const n = `${im}${t}`;
        return await (
          await fetch(n, {
            method: "GET",
            credentials: "include",
            mode: "cors",
          })
        ).json();
      } catch (n) {
        throw new Error(n);
      }
    }
    async post(t, n, r) {
      try {
        const o = `${im}${t}`,
          s = await fetch(o, {
            method: r,
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(n),
            headers: new Headers({
              Accept: "application/json",
              "Content-Type": "application/json",
            }),
          });
        if (!s.ok) {
          const i = await s.json();
          throw new Error(i == null ? void 0 : i.error);
        }
        return await s.json();
      } catch (o) {
        throw new Error(o);
      }
    }
  };
Tu(vr, "instance");
let Td = vr;
const ws = Td.getInstance(),
  mn = ({ children: e }) =>
    c.jsx("h1", {
      className: "scroll-m-20 text-2xl font-semibold tracking-tight",
      children: e,
    }),
  Jf = ({ children: e }) => c.jsx("p", { className: "leading-7", children: e }),
  dE = ({ children: e }) =>
    c.jsx("p", { className: "text-sm text-muted-foreground", children: e }),
  fE = () => {
    const e = hu(),
      t = So({
        resolver: _o(mE),
        defaultValues: {
          email: "",
          password: "",
          full_name: "",
          ceo: "",
          ceo_full: "",
          ceo_genitive: "",
          law_address: "",
          cargo_recevier: "",
          cargo_city: "",
        },
      }),
      n = async (r) => {
        try {
          const o = await ws.signUp(r);
          Jn("Пользователь создан!", {
            description: `Почта для входа: ${o.email}`,
            action: { label: "Скрыть", onClick: () => {} },
          }),
            setTimeout(() => {
              e("/auth");
            });
        } catch (o) {
          console.log(o),
            Jn("Что-то пошло не так", {
              description:
                o != null && o.message
                  ? o == null
                    ? void 0
                    : o.message
                  : "Попробуйте позже",
              action: { label: "Скрыть", onClick: () => console.error(o) },
            });
        }
      };
    return c.jsx("div", {
      className: "max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg",
      children: c.jsxs(Co, {
        ...t,
        children: [
          c.jsxs("div", {
            className: "flex gap-2 items-center",
            children: [c.jsx(i_, {}), c.jsx(mn, { children: "Регистрация" })],
          }),
          c.jsx(ho, { className: "mt-2" }),
          c.jsxs("form", {
            onSubmit: t.handleSubmit(n),
            className: "space-y-4 mt-4",
            children: [
              c.jsx($e, {
                control: t.control,
                name: "email",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "E-mail" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "Введите ваш E-mail",
                          ...r,
                        }),
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "password",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "Пароль" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          type: "password",
                          placeholder: "Введите пароль",
                          ...r,
                        }),
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx(ho, { className: "mt-2" }),
              c.jsx($e, {
                control: t.control,
                name: "full_name",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, {
                        children: "Введите полное наименование (ИП)",
                      }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "ИП Ромашкин Роман Романович",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Это наименование будет использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "ceo",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "Введите ФИО директора ИП" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "Ромашкин Р.Р.",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Это наименование будет использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "ceo_full",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "Введите Полное ФИО" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "Ромашкин Роман Романович",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Это наименование будет использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "ceo_genitive",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, {
                        children: "Введите ФИО в родительном падеже",
                      }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "Ромашкину Роману Романовичу",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Это наименование будет использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "law_address",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "Юридический адрес" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder:
                            "Введите юридический адресс вашей компании",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Юр. адрес будет использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "inn",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "ИНН" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          type: "number",
                          placeholder: "Введите ИНН",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Эти данные будут использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "cargo_recevier",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, {
                        children:
                          "Грузополучатель (Полный адрес получателя товаров)",
                      }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder:
                            "Введите полный адрес получателя товаров",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Эти данные будут использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: t.control,
                name: "cargo_city",
                render: ({ field: r }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, {
                        children:
                          "Город получатель товаров (например: г. Гомель)",
                      }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "Введите город получателя товаров",
                          ...r,
                        }),
                      }),
                      c.jsx(_n, {
                        children:
                          "Эти данные будут использоваться для заполнения документов",
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsxs("div", {
                className: "flex justify-between",
                children: [
                  c.jsxs(Ne, {
                    type: "submit",
                    className: "gap-2",
                    children: [c.jsx(f0, {}), "Зарегистрироваться"],
                  }),
                  c.jsx(Fr, {
                    to: "/auth",
                    children: c.jsx(Ne, {
                      variant: "ghost",
                      children: "Уже есть аккаунт? Войти",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  pE = () =>
    c.jsxs("div", {
      className: "max-w-lg m-auto mt-3 p-12 bg-white rounded-xl shadow-lg",
      children: [
        c.jsx(mn, { children: "Еще нет аккаунта?" }),
        c.jsx(dE, { children: "Пройдите регистрацию" }),
        c.jsx(Fr, {
          to: "/registration",
          children: c.jsx(Ne, {
            className: "mt-4",
            children: "Зарегистрироваться",
          }),
        }),
      ],
    }),
  hE = () => {
    const { search: e } = js(),
      t = hu();
    return (
      m.useEffect(() => {
        e &&
          (async () => {
            const r = e.slice(7),
              { message: o } = await ws.sendEmailConfirm(r);
            Jn(o, {
              description: "Почта успешно подтверждена",
              action: { label: "Скрыть", onClick: () => {} },
            }),
              setTimeout(() => {
                t("/auth");
              }, 1500);
          })();
      }, [t, e]),
      c.jsxs("div", {
        className: "max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg",
        children: [
          c.jsxs("div", {
            className: "flex flex-row items-center gap-2 mb-4",
            children: [
              c.jsx(d0, {}),
              c.jsx(mn, { children: "Подтвердите регистрацию" }),
            ],
          }),
          c.jsx(ho, { className: "mt-2" }),
          c.jsx("p", {
            className: "mt-4 leading-6 font-normal text-base",
            children:
              "Мы отправили письмо на ваш E-mail, пожалуйста перейдите по ссылке в нем и подтвердите регистрацию",
          }),
        ],
      })
    );
  },
  mE = le.object({
    email: le
      .string()
      .min(1, { message: "Это поле должно быть заполнено" })
      .email("Данный E-mail некорретный."),
    password: le
      .string()
      .min(6, { message: "Пароль должен содержать не менее 6-ти символов" }),
    full_name: le
      .string()
      .min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
    ceo: le
      .string()
      .min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
    ceo_full: le
      .string()
      .min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
    ceo_genitive: le
      .string()
      .min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
    law_address: le
      .string()
      .min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
    inn: le.coerce
      .number()
      .min(1e11, { message: "ИНН должен содержать 12 символов" })
      .max(999999999999, { message: "ИНН должен содержать 12 символов" }),
    cargo_recevier: le.string().optional(),
    cargo_city: le.string().optional(),
  }),
  gE = ul({}),
  vE = () => {
    const [e, t] = An(gE),
      n = So({ resolver: _o(Cb), defaultValues: { email: "", password: "" } }),
      r = async (o) => {
        try {
          const s = await ws.signIn(o);
          localStorage.setItem("bearerToken", s.token),
            t({ ...e, id: s.userId, bearerToken: s.token });
          const i = await ws.getUser();
          console.log(i),
            Jn("Вы вошли в аккаунт!", {
              action: { label: "Скрыть", onClick: () => {} },
            });
        } catch (s) {
          console.log(s),
            Jn("Что-то пошло не так", {
              description:
                s != null && s.message
                  ? s == null
                    ? void 0
                    : s.message
                  : "Попробуйте позже",
              action: { label: "Скрыть", onClick: () => console.error(s) },
            });
        }
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("div", {
          className: "max-w-lg m-auto mt-3 p-12 bg-white rounded-xl shadow-lg",
          children: c.jsxs(Co, {
            ...n,
            children: [
              c.jsx(al, { children: "Вход" }),
              c.jsxs("form", {
                onSubmit: n.handleSubmit(r),
                className: "space-y-4 mt-8",
                children: [
                  c.jsx($e, {
                    control: n.control,
                    name: "email",
                    render: ({ field: o }) =>
                      c.jsxs(xe, {
                        children: [
                          c.jsx(we, { children: "Введите E-mail" }),
                          c.jsx(Se, {
                            children: c.jsx(ge, {
                              placeholder: "example@gmail.com",
                              ...o,
                            }),
                          }),
                          c.jsx(_n, {
                            children:
                              "На этот E-mail придет письмо о подтверждении пользователя",
                          }),
                          c.jsx(_e, {}),
                        ],
                      }),
                  }),
                  c.jsx($e, {
                    control: n.control,
                    name: "password",
                    render: ({ field: o }) =>
                      c.jsxs(xe, {
                        children: [
                          c.jsx(we, { children: "Введите пароль" }),
                          c.jsx(Se, {
                            children: c.jsx(ge, {
                              type: "password",
                              placeholder: "**************",
                              ...o,
                            }),
                          }),
                          c.jsx(_e, {}),
                        ],
                      }),
                  }),
                  c.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      c.jsx(Ne, {
                        type: "submit",
                        children: "Войти в аккаунт",
                      }),
                      c.jsx(Fr, {
                        to: "/password-recovery",
                        children: c.jsx(Ne, {
                          variant: "ghost",
                          children: "Забыл пароль? Восстановить",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx(pE, {}),
      ],
    });
  },
  yE = () => c.jsx(vE, {}),
  xE = le.object({
    fullName: le.string(),
    tradeMark: le.string(),
    articleType: le.string(),
    articleName: le.string(),
    shoesType: le.string(),
    color: le.string(),
    size: le.string(),
    upperMaterial: le.string(),
    liningMaterial: le.string(),
    bottomMaterial: le.string(),
    tnved: le.string(),
  });
function yu(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var wE = ["color"],
  SE = m.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = yu(e, wE);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      m.createElement("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  _E = ["color"],
  CE = m.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = yu(e, _E);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      m.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  bE = ["color"],
  EE = m.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = yu(e, bE);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      m.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  $E = ["color"],
  kE = m.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = yu(e, $E);
    return m.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      m.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  });
function lm(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Be(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function RE(e, t) {
  const n = m.createContext(t);
  function r(s) {
    const { children: i, ...l } = s,
      a = m.useMemo(() => l, Object.values(l));
    return m.createElement(n.Provider, { value: a }, i);
  }
  function o(s) {
    const i = m.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function cl(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = m.createContext(i),
      a = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: f, children: h, ...x } = p,
        y = (f == null ? void 0 : f[e][a]) || l,
        S = m.useMemo(() => x, Object.values(x));
      return m.createElement(y.Provider, { value: S }, h);
    }
    function d(p, f) {
      const h = (f == null ? void 0 : f[e][a]) || l,
        x = m.useContext(h);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, d];
  }
  const o = () => {
    const s = n.map((i) => m.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return m.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, jE(o, ...t)];
}
function jE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(s)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function NE(e) {
  const t = e + "CollectionProvider",
    [n, r] = cl(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (h) => {
      const { scope: x, children: y } = h,
        S = D.useRef(null),
        v = D.useRef(new Map()).current;
      return D.createElement(o, { scope: x, itemMap: v, collectionRef: S }, y);
    },
    l = e + "CollectionSlot",
    a = D.forwardRef((h, x) => {
      const { scope: y, children: S } = h,
        v = s(l, y),
        g = Xe(x, v.collectionRef);
      return D.createElement(Dr, { ref: g }, S);
    }),
    u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    p = D.forwardRef((h, x) => {
      const { scope: y, children: S, ...v } = h,
        g = D.useRef(null),
        w = Xe(x, g),
        C = s(u, y);
      return (
        D.useEffect(
          () => (
            C.itemMap.set(g, { ref: g, ...v }), () => void C.itemMap.delete(g)
          )
        ),
        D.createElement(Dr, { [d]: "", ref: w }, S)
      );
    });
  function f(h) {
    const x = s(e + "CollectionConsumer", h);
    return D.useCallback(() => {
      const S = x.collectionRef.current;
      if (!S) return [];
      const v = Array.from(S.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (C, E) => v.indexOf(C.ref.current) - v.indexOf(E.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: i, Slot: a, ItemSlot: p }, f, r];
}
const PE = m.createContext(void 0);
function TE(e) {
  const t = m.useContext(PE);
  return e || t || "ltr";
}
function tr(e) {
  const t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }),
    m.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function ME(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tr(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Md = "dismissableLayer.update",
  OE = "dismissableLayer.pointerDownOutside",
  AE = "dismissableLayer.focusOutside";
let am;
const IE = m.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  oy = m.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: a,
        ...u
      } = e,
      d = m.useContext(IE),
      [p, f] = m.useState(null),
      h =
        (n = p == null ? void 0 : p.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, x] = m.useState({}),
      y = Xe(t, (_) => f(_)),
      S = Array.from(d.layers),
      [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = S.indexOf(v),
      w = p ? S.indexOf(p) : -1,
      C = d.layersWithOutsidePointerEventsDisabled.size > 0,
      E = w >= g,
      N = FE((_) => {
        const M = _.target,
          j = [...d.branches].some((A) => A.contains(M));
        !E ||
          j ||
          (s == null || s(_),
          l == null || l(_),
          _.defaultPrevented || a == null || a());
      }, h),
      P = DE((_) => {
        const M = _.target;
        [...d.branches].some((A) => A.contains(M)) ||
          (i == null || i(_),
          l == null || l(_),
          _.defaultPrevented || a == null || a());
      }, h);
    return (
      ME((_) => {
        w === d.layers.size - 1 &&
          (o == null || o(_),
          !_.defaultPrevented && a && (_.preventDefault(), a()));
      }, h),
      m.useEffect(() => {
        if (p)
          return (
            r &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((am = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(p)),
            d.layers.add(p),
            um(),
            () => {
              r &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = am);
            }
          );
      }, [p, h, r, d]),
      m.useEffect(
        () => () => {
          p &&
            (d.layers.delete(p),
            d.layersWithOutsidePointerEventsDisabled.delete(p),
            um());
        },
        [p, d]
      ),
      m.useEffect(() => {
        const _ = () => x({});
        return (
          document.addEventListener(Md, _),
          () => document.removeEventListener(Md, _)
        );
      }, []),
      m.createElement(
        Ue.div,
        re({}, u, {
          ref: y,
          style: {
            pointerEvents: C ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: Be(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: Be(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: Be(
            e.onPointerDownCapture,
            N.onPointerDownCapture
          ),
        })
      )
    );
  });
function FE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tr(e),
    r = m.useRef(!1),
    o = m.useRef(() => {});
  return (
    m.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let d = function () {
              sy(OE, n, u, { discrete: !0 });
            };
            var a = d;
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = d),
                t.addEventListener("click", o.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function DE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tr(e),
    r = m.useRef(!1);
  return (
    m.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          sy(AE, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function um() {
  const e = new CustomEvent(Md);
  document.dispatchEvent(e);
}
function sy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Wb(o, s) : o.dispatchEvent(s);
}
let pc = 0;
function iy() {
  m.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : cm()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : cm()
      ),
      pc++,
      () => {
        pc === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          pc--;
      }
    );
  }, []);
}
function cm() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const hc = "focusScope.autoFocusOnMount",
  mc = "focusScope.autoFocusOnUnmount",
  dm = { bubbles: !1, cancelable: !0 },
  ly = m.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [l, a] = m.useState(null),
      u = tr(o),
      d = tr(s),
      p = m.useRef(null),
      f = Xe(t, (y) => a(y)),
      h = m.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    m.useEffect(() => {
      if (r) {
        let g = function (N) {
            if (h.paused || !l) return;
            const P = N.target;
            l.contains(P) ? (p.current = P) : hr(p.current, { select: !0 });
          },
          w = function (N) {
            if (h.paused || !l) return;
            const P = N.relatedTarget;
            P !== null && (l.contains(P) || hr(p.current, { select: !0 }));
          },
          C = function (N) {
            if (document.activeElement === document.body)
              for (const _ of N) _.removedNodes.length > 0 && hr(l);
          };
        var y = g,
          S = w,
          v = C;
        document.addEventListener("focusin", g),
          document.addEventListener("focusout", w);
        const E = new MutationObserver(C);
        return (
          l && E.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", w),
              E.disconnect();
          }
        );
      }
    }, [r, l, h.paused]),
      m.useEffect(() => {
        if (l) {
          pm.add(h);
          const y = document.activeElement;
          if (!l.contains(y)) {
            const v = new CustomEvent(hc, dm);
            l.addEventListener(hc, u),
              l.dispatchEvent(v),
              v.defaultPrevented ||
                (LE(HE(ay(l)), { select: !0 }),
                document.activeElement === y && hr(l));
          }
          return () => {
            l.removeEventListener(hc, u),
              setTimeout(() => {
                const v = new CustomEvent(mc, dm);
                l.addEventListener(mc, d),
                  l.dispatchEvent(v),
                  v.defaultPrevented || hr(y ?? document.body, { select: !0 }),
                  l.removeEventListener(mc, d),
                  pm.remove(h);
              }, 0);
          };
        }
      }, [l, u, d, h]);
    const x = m.useCallback(
      (y) => {
        if ((!n && !r) || h.paused) return;
        const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey,
          v = document.activeElement;
        if (S && v) {
          const g = y.currentTarget,
            [w, C] = VE(g);
          w && C
            ? !y.shiftKey && v === C
              ? (y.preventDefault(), n && hr(w, { select: !0 }))
              : y.shiftKey &&
                v === w &&
                (y.preventDefault(), n && hr(C, { select: !0 }))
            : v === g && y.preventDefault();
        }
      },
      [n, r, h.paused]
    );
    return m.createElement(
      Ue.div,
      re({ tabIndex: -1 }, i, { ref: f, onKeyDown: x })
    );
  });
function LE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((hr(r, { select: t }), document.activeElement !== n)) return;
}
function VE(e) {
  const t = ay(e),
    n = fm(t, e),
    r = fm(t.reverse(), e);
  return [n, r];
}
function ay(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function fm(e, t) {
  for (const n of e) if (!zE(n, { upTo: t })) return n;
}
function zE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function BE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function hr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && BE(e) && t && e.select();
  }
}
const pm = UE();
function UE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = hm(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = hm(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function hm(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function HE(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ot =
    globalThis != null && globalThis.document ? m.useLayoutEffect : () => {},
  WE = Ym.useId || (() => {});
let ZE = 0;
function gi(e) {
  const [t, n] = m.useState(WE());
  return (
    Ot(() => {
      n((r) => r ?? String(ZE++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const GE = ["top", "right", "bottom", "left"],
  $n = Math.min,
  Lt = Math.max,
  Ga = Math.round,
  Al = Math.floor,
  Ur = (e) => ({ x: e, y: e }),
  KE = { left: "right", right: "left", bottom: "top", top: "bottom" },
  YE = { start: "end", end: "start" };
function Od(e, t, n) {
  return Lt(e, $n(t, n));
}
function nr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rr(e) {
  return e.split("-")[0];
}
function Ts(e) {
  return e.split("-")[1];
}
function ep(e) {
  return e === "x" ? "y" : "x";
}
function tp(e) {
  return e === "y" ? "height" : "width";
}
function Ms(e) {
  return ["top", "bottom"].includes(rr(e)) ? "y" : "x";
}
function np(e) {
  return ep(Ms(e));
}
function QE(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ts(e),
    o = np(e),
    s = tp(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Ka(i)), [i, Ka(i)];
}
function qE(e) {
  const t = Ka(e);
  return [Ad(e), t, Ad(t)];
}
function Ad(e) {
  return e.replace(/start|end/g, (t) => YE[t]);
}
function XE(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function JE(e, t, n, r) {
  const o = Ts(e);
  let s = XE(rr(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Ad)))), s
  );
}
function Ka(e) {
  return e.replace(/left|right|bottom|top/g, (t) => KE[t]);
}
function e$(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function uy(e) {
  return typeof e != "number"
    ? e$(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ya(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function mm(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Ms(t),
    i = np(t),
    l = tp(i),
    a = rr(t),
    u = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    f = r[l] / 2 - o[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: d, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: p };
      break;
    case "left":
      h = { x: r.x - o.width, y: p };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Ts(t)) {
    case "start":
      h[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const t$ = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: p } = mm(u, r, a),
    f = r,
    h = {},
    x = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: S, fn: v } = l[y],
      {
        x: g,
        y: w,
        data: C,
        reset: E,
      } = await v({
        x: d,
        y: p,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: h,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (d = g ?? d),
      (p = w ?? p),
      (h = { ...h, [S]: { ...h[S], ...C } }),
      E &&
        x <= 50 &&
        (x++,
        typeof E == "object" &&
          (E.placement && (f = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: p } = mm(u, f, a))),
        (y = -1));
  }
  return { x: d, y: p, placement: f, strategy: o, middlewareData: h };
};
async function qi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = nr(t, e),
    x = uy(h),
    S = l[f ? (p === "floating" ? "reference" : "floating") : p],
    v = Ya(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    g =
      p === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    w = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    C = (await (s.isElement == null ? void 0 : s.isElement(w)))
      ? (await (s.getScale == null ? void 0 : s.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Ya(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: g,
            offsetParent: w,
            strategy: a,
          })
        : g
    );
  return {
    top: (v.top - E.top + x.top) / C.y,
    bottom: (E.bottom - v.bottom + x.bottom) / C.y,
    left: (v.left - E.left + x.left) / C.x,
    right: (E.right - v.right + x.right) / C.x,
  };
}
const n$ = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = nr(e, t) || {};
      if (u == null) return {};
      const p = uy(d),
        f = { x: n, y: r },
        h = np(o),
        x = tp(h),
        y = await i.getDimensions(u),
        S = h === "y",
        v = S ? "top" : "left",
        g = S ? "bottom" : "right",
        w = S ? "clientHeight" : "clientWidth",
        C = s.reference[x] + s.reference[h] - f[h] - s.floating[x],
        E = f[h] - s.reference[h],
        N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let P = N ? N[w] : 0;
      (!P || !(await (i.isElement == null ? void 0 : i.isElement(N)))) &&
        (P = l.floating[w] || s.floating[x]);
      const _ = C / 2 - E / 2,
        M = P / 2 - y[x] / 2 - 1,
        j = $n(p[v], M),
        A = $n(p[g], M),
        $ = j,
        O = P - y[x] - A,
        I = P / 2 - y[x] / 2 + _,
        F = Od($, I, O),
        U =
          !a.arrow &&
          Ts(o) != null &&
          I !== F &&
          s.reference[x] / 2 - (I < $ ? j : A) - y[x] / 2 < 0,
        L = U ? (I < $ ? I - $ : I - O) : 0;
      return {
        [h]: f[h] + L,
        data: {
          [h]: F,
          centerOffset: I - F - L,
          ...(U && { alignmentOffset: L }),
        },
        reset: U,
      };
    },
  }),
  r$ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: y = !0,
              ...S
            } = nr(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const v = rr(o),
            g = rr(l) === l,
            w = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = f || (g || !y ? [Ka(l)] : qE(l));
          !f && x !== "none" && C.push(...JE(l, y, x, w));
          const E = [l, ...C],
            N = await qi(t, S),
            P = [];
          let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && P.push(N[v]), p)) {
            const $ = QE(o, i, w);
            P.push(N[$[0]], N[$[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: P }]),
            !P.every(($) => $ <= 0))
          ) {
            var M, j;
            const $ = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1,
              O = E[$];
            if (O)
              return {
                data: { index: $, overflows: _ },
                reset: { placement: O },
              };
            let I =
              (j = _.filter((F) => F.overflows[0] <= 0).sort(
                (F, U) => F.overflows[1] - U.overflows[1]
              )[0]) == null
                ? void 0
                : j.placement;
            if (!I)
              switch (h) {
                case "bestFit": {
                  var A;
                  const F =
                    (A = _.map((U) => [
                      U.placement,
                      U.overflows
                        .filter((L) => L > 0)
                        .reduce((L, R) => L + R, 0),
                    ]).sort((U, L) => U[1] - L[1])[0]) == null
                      ? void 0
                      : A[0];
                  F && (I = F);
                  break;
                }
                case "initialPlacement":
                  I = l;
                  break;
              }
            if (o !== I) return { reset: { placement: I } };
          }
          return {};
        },
      }
    );
  };
function gm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function vm(e) {
  return GE.some((t) => e[t] >= 0);
}
const o$ = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = nr(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await qi(t, { ...o, elementContext: "reference" }),
              i = gm(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: vm(i) },
            };
          }
          case "escaped": {
            const s = await qi(t, { ...o, altBoundary: !0 }),
              i = gm(s, n.floating);
            return { data: { escapedOffsets: i, escaped: vm(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function s$(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = rr(n),
    l = Ts(n),
    a = Ms(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    d = s && a ? -1 : 1,
    p = nr(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: x,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
  return (
    l && typeof x == "number" && (h = l === "end" ? x * -1 : x),
    a ? { x: h * d, y: f * u } : { x: f * u, y: h * d }
  );
}
const i$ = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await s$(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  l$ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (S) => {
                  let { x: v, y: g } = S;
                  return { x: v, y: g };
                },
              },
              ...a
            } = nr(e, t),
            u = { x: n, y: r },
            d = await qi(t, a),
            p = Ms(rr(o)),
            f = ep(p);
          let h = u[f],
            x = u[p];
          if (s) {
            const S = f === "y" ? "top" : "left",
              v = f === "y" ? "bottom" : "right",
              g = h + d[S],
              w = h - d[v];
            h = Od(g, h, w);
          }
          if (i) {
            const S = p === "y" ? "top" : "left",
              v = p === "y" ? "bottom" : "right",
              g = x + d[S],
              w = x - d[v];
            x = Od(g, x, w);
          }
          const y = l.fn({ ...t, [f]: h, [p]: x });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  a$ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = nr(e, t),
            d = { x: n, y: r },
            p = Ms(o),
            f = ep(p);
          let h = d[f],
            x = d[p];
          const y = nr(l, t),
            S =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const w = f === "y" ? "height" : "width",
              C = s.reference[f] - s.floating[w] + S.mainAxis,
              E = s.reference[f] + s.reference[w] - S.mainAxis;
            h < C ? (h = C) : h > E && (h = E);
          }
          if (u) {
            var v, g;
            const w = f === "y" ? "width" : "height",
              C = ["top", "left"].includes(rr(o)),
              E =
                s.reference[p] -
                s.floating[w] +
                ((C && ((v = i.offset) == null ? void 0 : v[p])) || 0) +
                (C ? 0 : S.crossAxis),
              N =
                s.reference[p] +
                s.reference[w] +
                (C ? 0 : ((g = i.offset) == null ? void 0 : g[p]) || 0) -
                (C ? S.crossAxis : 0);
            x < E ? (x = E) : x > N && (x = N);
          }
          return { [f]: h, [p]: x };
        },
      }
    );
  },
  u$ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...l } = nr(e, t),
            a = await qi(t, l),
            u = rr(n),
            d = Ts(n),
            p = Ms(n) === "y",
            { width: f, height: h } = r.floating;
          let x, y;
          u === "top" || u === "bottom"
            ? ((x = u),
              (y =
                d ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (x = d === "end" ? "top" : "bottom"));
          const S = h - a.top - a.bottom,
            v = f - a.left - a.right,
            g = $n(h - a[x], S),
            w = $n(f - a[y], v),
            C = !t.middlewareData.shift;
          let E = g,
            N = w;
          if (
            (p ? (N = d || C ? $n(w, v) : v) : (E = d || C ? $n(g, S) : S),
            C && !d)
          ) {
            const _ = Lt(a.left, 0),
              M = Lt(a.right, 0),
              j = Lt(a.top, 0),
              A = Lt(a.bottom, 0);
            p
              ? (N = f - 2 * (_ !== 0 || M !== 0 ? _ + M : Lt(a.left, a.right)))
              : (E =
                  h - 2 * (j !== 0 || A !== 0 ? j + A : Lt(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: N, availableHeight: E });
          const P = await o.getDimensions(s.floating);
          return f !== P.width || h !== P.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Os(e) {
  return cy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ir(e) {
  var t;
  return (t = (cy(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function cy(e) {
  return e instanceof Node || e instanceof Ut(e).Node;
}
function Mn(e) {
  return e instanceof Element || e instanceof Ut(e).Element;
}
function On(e) {
  return e instanceof HTMLElement || e instanceof Ut(e).HTMLElement;
}
function ym(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ut(e).ShadowRoot;
}
function dl(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = gn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function c$(e) {
  return ["table", "td", "th"].includes(Os(e));
}
function rp(e) {
  const t = op(),
    n = gn(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function d$(e) {
  let t = Hr(e);
  for (; On(t) && !Ss(t); ) {
    if (rp(t)) return t;
    t = Hr(t);
  }
  return null;
}
function op() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ss(e) {
  return ["html", "body", "#document"].includes(Os(e));
}
function gn(e) {
  return Ut(e).getComputedStyle(e);
}
function xu(e) {
  return Mn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Hr(e) {
  if (Os(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (ym(e) && e.host) || ir(e);
  return ym(t) ? t.host : t;
}
function dy(e) {
  const t = Hr(e);
  return Ss(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : On(t) && dl(t)
    ? t
    : dy(t);
}
function Xi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = dy(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ut(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        dl(o) ? o : [],
        i.frameElement && n ? Xi(i.frameElement) : []
      )
    : t.concat(o, Xi(o, [], n));
}
function fy(e) {
  const t = gn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = On(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Ga(n) !== s || Ga(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function sp(e) {
  return Mn(e) ? e : e.contextElement;
}
function as(e) {
  const t = sp(e);
  if (!On(t)) return Ur(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = fy(t);
  let i = (s ? Ga(n.width) : n.width) / r,
    l = (s ? Ga(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const f$ = Ur(0);
function py(e) {
  const t = Ut(e);
  return !op() || !t.visualViewport
    ? f$
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function p$(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ut(e)) ? !1 : t;
}
function mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = sp(e);
  let i = Ur(1);
  t && (r ? Mn(r) && (i = as(r)) : (i = as(e)));
  const l = p$(s, n, r) ? py(s) : Ur(0);
  let a = (o.left + l.x) / i.x,
    u = (o.top + l.y) / i.y,
    d = o.width / i.x,
    p = o.height / i.y;
  if (s) {
    const f = Ut(s),
      h = r && Mn(r) ? Ut(r) : r;
    let x = f,
      y = x.frameElement;
    for (; y && r && h !== x; ) {
      const S = as(y),
        v = y.getBoundingClientRect(),
        g = gn(y),
        w = v.left + (y.clientLeft + parseFloat(g.paddingLeft)) * S.x,
        C = v.top + (y.clientTop + parseFloat(g.paddingTop)) * S.y;
      (a *= S.x),
        (u *= S.y),
        (d *= S.x),
        (p *= S.y),
        (a += w),
        (u += C),
        (x = Ut(y)),
        (y = x.frameElement);
    }
  }
  return Ya({ width: d, height: p, x: a, y: u });
}
const h$ = [":popover-open", ":modal"];
function ip(e) {
  return h$.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function m$(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = ir(r),
    l = t ? ip(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Ur(1);
  const d = Ur(0),
    p = On(r);
  if (
    (p || (!p && !s)) &&
    ((Os(r) !== "body" || dl(i)) && (a = xu(r)), On(r))
  ) {
    const f = mo(r);
    (u = as(r)), (d.x = f.x + r.clientLeft), (d.y = f.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y,
  };
}
function g$(e) {
  return Array.from(e.getClientRects());
}
function hy(e) {
  return mo(ir(e)).left + xu(e).scrollLeft;
}
function v$(e) {
  const t = ir(e),
    n = xu(e),
    r = e.ownerDocument.body,
    o = Lt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Lt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + hy(e);
  const l = -n.scrollTop;
  return (
    gn(r).direction === "rtl" && (i += Lt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function y$(e, t) {
  const n = Ut(e),
    r = ir(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const u = op();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
function x$(e, t) {
  const n = mo(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = On(e) ? as(e) : Ur(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    u = r * s.y;
  return { width: i, height: l, x: a, y: u };
}
function xm(e, t, n) {
  let r;
  if (t === "viewport") r = y$(e, n);
  else if (t === "document") r = v$(ir(e));
  else if (Mn(t)) r = x$(t, n);
  else {
    const o = py(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ya(r);
}
function my(e, t) {
  const n = Hr(e);
  return n === t || !Mn(n) || Ss(n)
    ? !1
    : gn(n).position === "fixed" || my(n, t);
}
function w$(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Xi(e, [], !1).filter((l) => Mn(l) && Os(l) !== "body"),
    o = null;
  const s = gn(e).position === "fixed";
  let i = s ? Hr(e) : e;
  for (; Mn(i) && !Ss(i); ) {
    const l = gn(i),
      a = rp(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (dl(i) && !a && my(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = l),
      (i = Hr(i));
  }
  return t.set(e, r), r;
}
function S$(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? ip(t)
          ? []
          : w$(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((u, d) => {
      const p = xm(t, d, o);
      return (
        (u.top = Lt(p.top, u.top)),
        (u.right = $n(p.right, u.right)),
        (u.bottom = $n(p.bottom, u.bottom)),
        (u.left = Lt(p.left, u.left)),
        u
      );
    }, xm(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function _$(e) {
  const { width: t, height: n } = fy(e);
  return { width: t, height: n };
}
function C$(e, t, n) {
  const r = On(t),
    o = ir(t),
    s = n === "fixed",
    i = mo(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Ur(0);
  if (r || (!r && !s))
    if (((Os(t) !== "body" || dl(o)) && (l = xu(t)), r)) {
      const p = mo(t, !0, s, t);
      (a.x = p.x + t.clientLeft), (a.y = p.y + t.clientTop);
    } else o && (a.x = hy(o));
  const u = i.left + l.scrollLeft - a.x,
    d = i.top + l.scrollTop - a.y;
  return { x: u, y: d, width: i.width, height: i.height };
}
function gc(e) {
  return gn(e).position === "static";
}
function wm(e, t) {
  return !On(e) || gn(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function gy(e, t) {
  const n = Ut(e);
  if (ip(e)) return n;
  if (!On(e)) {
    let o = Hr(e);
    for (; o && !Ss(o); ) {
      if (Mn(o) && !gc(o)) return o;
      o = Hr(o);
    }
    return n;
  }
  let r = wm(e, t);
  for (; r && c$(r) && gc(r); ) r = wm(r, t);
  return r && Ss(r) && gc(r) && !rp(r) ? n : r || d$(e) || n;
}
const b$ = async function (e) {
  const t = this.getOffsetParent || gy,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: C$(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function E$(e) {
  return gn(e).direction === "rtl";
}
const $$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m$,
  getDocumentElement: ir,
  getClippingRect: S$,
  getOffsetParent: gy,
  getElementRects: b$,
  getClientRects: g$,
  getDimensions: _$,
  getScale: as,
  isElement: Mn,
  isRTL: E$,
};
function k$(e, t) {
  let n = null,
    r;
  const o = ir(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const { left: u, top: d, width: p, height: f } = e.getBoundingClientRect();
    if ((l || t(), !p || !f)) return;
    const h = Al(d),
      x = Al(o.clientWidth - (u + p)),
      y = Al(o.clientHeight - (d + f)),
      S = Al(u),
      g = {
        rootMargin: -h + "px " + -x + "px " + -y + "px " + -S + "px",
        threshold: Lt(0, $n(1, a)) || 1,
      };
    let w = !0;
    function C(E) {
      const N = E[0].intersectionRatio;
      if (N !== a) {
        if (!w) return i();
        N
          ? i(!1, N)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...g, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, g);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function R$(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = sp(e),
    d = o || s ? [...(u ? Xi(u) : []), ...Xi(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, { passive: !0 }),
      s && v.addEventListener("resize", n);
  });
  const p = u && l ? k$(u, n) : null;
  let f = -1,
    h = null;
  i &&
    ((h = new ResizeObserver((v) => {
      let [g] = v;
      g &&
        g.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var w;
          (w = h) == null || w.observe(t);
        }))),
        n();
    })),
    u && !a && h.observe(u),
    h.observe(t));
  let x,
    y = a ? mo(e) : null;
  a && S();
  function S() {
    const v = mo(e);
    y &&
      (v.x !== y.x ||
        v.y !== y.y ||
        v.width !== y.width ||
        v.height !== y.height) &&
      n(),
      (y = v),
      (x = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var v;
      d.forEach((g) => {
        o && g.removeEventListener("scroll", n),
          s && g.removeEventListener("resize", n);
      }),
        p == null || p(),
        (v = h) == null || v.disconnect(),
        (h = null),
        a && cancelAnimationFrame(x);
    }
  );
}
const j$ = i$,
  N$ = l$,
  P$ = r$,
  T$ = u$,
  M$ = o$,
  Sm = n$,
  O$ = a$,
  A$ = (e, t, n) => {
    const r = new Map(),
      o = { platform: $$, ...n },
      s = { ...o.platform, _c: r };
    return t$(e, t, { ...o, platform: s });
  };
var sa = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
function Qa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Qa(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Qa(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vy(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _m(e, t) {
  const n = vy(e);
  return Math.round(t * n) / n;
}
function Cm(e) {
  const t = m.useRef(e);
  return (
    sa(() => {
      t.current = e;
    }),
    t
  );
}
function I$(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, p] = m.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = m.useState(r);
  Qa(f, r) || h(r);
  const [x, y] = m.useState(null),
    [S, v] = m.useState(null),
    g = m.useCallback((L) => {
      L !== N.current && ((N.current = L), y(L));
    }, []),
    w = m.useCallback((L) => {
      L !== P.current && ((P.current = L), v(L));
    }, []),
    C = s || x,
    E = i || S,
    N = m.useRef(null),
    P = m.useRef(null),
    _ = m.useRef(d),
    M = a != null,
    j = Cm(a),
    A = Cm(o),
    $ = m.useCallback(() => {
      if (!N.current || !P.current) return;
      const L = { placement: t, strategy: n, middleware: f };
      A.current && (L.platform = A.current),
        A$(N.current, P.current, L).then((R) => {
          const V = { ...R, isPositioned: !0 };
          O.current &&
            !Qa(_.current, V) &&
            ((_.current = V),
            xo.flushSync(() => {
              p(V);
            }));
        });
    }, [f, t, n, A]);
  sa(() => {
    u === !1 &&
      _.current.isPositioned &&
      ((_.current.isPositioned = !1), p((L) => ({ ...L, isPositioned: !1 })));
  }, [u]);
  const O = m.useRef(!1);
  sa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    sa(() => {
      if ((C && (N.current = C), E && (P.current = E), C && E)) {
        if (j.current) return j.current(C, E, $);
        $();
      }
    }, [C, E, $, j, M]);
  const I = m.useMemo(
      () => ({ reference: N, floating: P, setReference: g, setFloating: w }),
      [g, w]
    ),
    F = m.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    U = m.useMemo(() => {
      const L = { position: n, left: 0, top: 0 };
      if (!F.floating) return L;
      const R = _m(F.floating, d.x),
        V = _m(F.floating, d.y);
      return l
        ? {
            ...L,
            transform: "translate(" + R + "px, " + V + "px)",
            ...(vy(F.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: V };
    }, [n, l, F.floating, d.x, d.y]);
  return m.useMemo(
    () => ({ ...d, update: $, refs: I, elements: F, floatingStyles: U }),
    [d, $, I, F, U]
  );
}
const F$ = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Sm({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Sm({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  D$ = (e, t) => ({ ...j$(e), options: [e, t] }),
  L$ = (e, t) => ({ ...N$(e), options: [e, t] }),
  V$ = (e, t) => ({ ...O$(e), options: [e, t] }),
  z$ = (e, t) => ({ ...P$(e), options: [e, t] }),
  B$ = (e, t) => ({ ...T$(e), options: [e, t] }),
  U$ = (e, t) => ({ ...M$(e), options: [e, t] }),
  H$ = (e, t) => ({ ...F$(e), options: [e, t] });
function W$(e) {
  const [t, n] = m.useState(void 0);
  return (
    Ot(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const a = s.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (i = u.inlineSize), (l = u.blockSize);
          } else (i = e.offsetWidth), (l = e.offsetHeight);
          n({ width: i, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const yy = "Popper",
  [xy, wy] = cl(yy),
  [Z$, Sy] = xy(yy),
  G$ = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = m.useState(null);
    return m.createElement(Z$, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  K$ = "PopperAnchor",
  Y$ = m.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Sy(K$, n),
      i = m.useRef(null),
      l = Xe(t, i);
    return (
      m.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : m.createElement(Ue.div, re({}, o, { ref: l }))
    );
  }),
  _y = "PopperContent",
  [Q$, X5] = xy(_y),
  q$ = m.forwardRef((e, t) => {
    var n, r, o, s, i, l, a, u;
    const {
        __scopePopper: d,
        side: p = "bottom",
        sideOffset: f = 0,
        align: h = "center",
        alignOffset: x = 0,
        arrowPadding: y = 0,
        avoidCollisions: S = !0,
        collisionBoundary: v = [],
        collisionPadding: g = 0,
        sticky: w = "partial",
        hideWhenDetached: C = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: N,
        ...P
      } = e,
      _ = Sy(_y, d),
      [M, j] = m.useState(null),
      A = Xe(t, (At) => j(At)),
      [$, O] = m.useState(null),
      I = W$($),
      F = (n = I == null ? void 0 : I.width) !== null && n !== void 0 ? n : 0,
      U = (r = I == null ? void 0 : I.height) !== null && r !== void 0 ? r : 0,
      L = p + (h !== "center" ? "-" + h : ""),
      R =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      V = Array.isArray(v) ? v : [v],
      J = V.length > 0,
      Q = { padding: R, boundary: V.filter(X$), altBoundary: J },
      {
        refs: X,
        floatingStyles: he,
        placement: Pe,
        isPositioned: He,
        middlewareData: ue,
      } = I$({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...At) =>
          R$(...At, { animationFrame: E === "always" }),
        elements: { reference: _.anchor },
        middleware: [
          D$({ mainAxis: f + U, alignmentAxis: x }),
          S &&
            L$({
              mainAxis: !0,
              crossAxis: !1,
              limiter: w === "partial" ? V$() : void 0,
              ...Q,
            }),
          S && z$({ ...Q }),
          B$({
            ...Q,
            apply: ({
              elements: At,
              rects: kt,
              availableWidth: ar,
              availableHeight: b,
            }) => {
              const { width: k, height: T } = kt.reference,
                G = At.floating.style;
              G.setProperty("--radix-popper-available-width", `${ar}px`),
                G.setProperty("--radix-popper-available-height", `${b}px`),
                G.setProperty("--radix-popper-anchor-width", `${k}px`),
                G.setProperty("--radix-popper-anchor-height", `${T}px`);
            },
          }),
          $ && H$({ element: $, padding: y }),
          J$({ arrowWidth: F, arrowHeight: U }),
          C && U$({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [te, ve] = Cy(Pe),
      Oe = tr(N);
    Ot(() => {
      He && (Oe == null || Oe());
    }, [He, Oe]);
    const be = (o = ue.arrow) === null || o === void 0 ? void 0 : o.x,
      Ee = (s = ue.arrow) === null || s === void 0 ? void 0 : s.y,
      ye =
        ((i = ue.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !==
        0,
      [at, rt] = m.useState();
    return (
      Ot(() => {
        M && rt(window.getComputedStyle(M).zIndex);
      }, [M]),
      m.createElement(
        "div",
        {
          ref: X.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...he,
            transform: He ? he.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: at,
            "--radix-popper-transform-origin": [
              (l = ue.transformOrigin) === null || l === void 0 ? void 0 : l.x,
              (a = ue.transformOrigin) === null || a === void 0 ? void 0 : a.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        m.createElement(
          Q$,
          {
            scope: d,
            placedSide: te,
            onArrowChange: O,
            arrowX: be,
            arrowY: Ee,
            shouldHideArrow: ye,
          },
          m.createElement(
            Ue.div,
            re({ "data-side": te, "data-align": ve }, P, {
              ref: A,
              style: {
                ...P.style,
                animation: He ? void 0 : "none",
                opacity:
                  (u = ue.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function X$(e) {
  return e !== null;
}
const J$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, s, i;
    const { placement: l, rects: a, middlewareData: u } = t,
      p =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      f = p ? 0 : e.arrowWidth,
      h = p ? 0 : e.arrowHeight,
      [x, y] = Cy(l),
      S = { start: "0%", center: "50%", end: "100%" }[y],
      v =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        f / 2,
      g =
        ((s = (i = u.arrow) === null || i === void 0 ? void 0 : i.y) !== null &&
        s !== void 0
          ? s
          : 0) +
        h / 2;
    let w = "",
      C = "";
    return (
      x === "bottom"
        ? ((w = p ? S : `${v}px`), (C = `${-h}px`))
        : x === "top"
        ? ((w = p ? S : `${v}px`), (C = `${a.floating.height + h}px`))
        : x === "right"
        ? ((w = `${-h}px`), (C = p ? S : `${g}px`))
        : x === "left" &&
          ((w = `${a.floating.width + h}px`), (C = p ? S : `${g}px`)),
      { data: { x: w, y: C } }
    );
  },
});
function Cy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const e2 = G$,
  t2 = Y$,
  n2 = q$,
  by = m.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...o
    } = e;
    return r
      ? Xv.createPortal(m.createElement(Ue.div, re({}, o, { ref: t })), r)
      : null;
  });
function Id({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = r2({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    l = tr(n),
    a = m.useCallback(
      (u) => {
        if (s) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && l(p);
        } else o(u);
      },
      [s, e, o, l]
    );
  return [i, a];
}
function r2({ defaultProp: e, onChange: t }) {
  const n = m.useState(e),
    [r] = n,
    o = m.useRef(r),
    s = tr(t);
  return (
    m.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
function o2(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const s2 = m.forwardRef((e, t) =>
  m.createElement(
    Ue.span,
    re({}, e, {
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  )
);
var i2 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Fo = new WeakMap(),
  Il = new WeakMap(),
  Fl = {},
  vc = 0,
  Ey = function (e) {
    return e && (e.host || Ey(e.parentNode));
  },
  l2 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Ey(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  a2 = function (e, t, n, r) {
    var o = l2(t, Array.isArray(e) ? e : [e]);
    Fl[n] || (Fl[n] = new WeakMap());
    var s = Fl[n],
      i = [],
      l = new Set(),
      a = new Set(o),
      u = function (p) {
        !p || l.has(p) || (l.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var d = function (p) {
      !p ||
        a.has(p) ||
        Array.prototype.forEach.call(p.children, function (f) {
          if (l.has(f)) d(f);
          else
            try {
              var h = f.getAttribute(r),
                x = h !== null && h !== "false",
                y = (Fo.get(f) || 0) + 1,
                S = (s.get(f) || 0) + 1;
              Fo.set(f, y),
                s.set(f, S),
                i.push(f),
                y === 1 && x && Il.set(f, !0),
                S === 1 && f.setAttribute(n, "true"),
                x || f.setAttribute(r, "true");
            } catch (v) {
              console.error("aria-hidden: cannot operate on ", f, v);
            }
        });
    };
    return (
      d(t),
      l.clear(),
      vc++,
      function () {
        i.forEach(function (p) {
          var f = Fo.get(p) - 1,
            h = s.get(p) - 1;
          Fo.set(p, f),
            s.set(p, h),
            f || (Il.has(p) || p.removeAttribute(r), Il.delete(p)),
            h || p.removeAttribute(n);
        }),
          vc--,
          vc ||
            ((Fo = new WeakMap()),
            (Fo = new WeakMap()),
            (Il = new WeakMap()),
            (Fl = {}));
      }
    );
  },
  $y = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = i2(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        a2(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  bn = function () {
    return (
      (bn =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      bn.apply(this, arguments)
    );
  };
function ky(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function u2(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var ia = "right-scroll-bar-position",
  la = "width-before-scroll-bar",
  c2 = "with-scroll-bars-hidden",
  d2 = "--removed-body-scroll-bar-size";
function yc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function f2(e, t) {
  var n = m.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var p2 = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  bm = new WeakMap();
function h2(e, t) {
  var n = f2(null, function (r) {
    return e.forEach(function (o) {
      return yc(o, r);
    });
  });
  return (
    p2(
      function () {
        var r = bm.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (l) {
            s.has(l) || yc(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || yc(l, i);
            });
        }
        bm.set(n, e);
      },
      [e]
    ),
    n
  );
}
function m2(e) {
  return e;
}
function g2(e, t) {
  t === void 0 && (t = m2);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (l) {
              return l !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (l) {
            return s(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(s), (i = n);
        }
        var a = function () {
            var d = i;
            (i = []), d.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (d) {
              i.push(d), u();
            },
            filter: function (d) {
              return (i = i.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function v2(e) {
  e === void 0 && (e = {});
  var t = g2(null);
  return (t.options = bn({ async: !0, ssr: !1 }, e)), t;
}
var Ry = function (e) {
  var t = e.sideCar,
    n = ky(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return m.createElement(r, bn({}, n));
};
Ry.isSideCarExport = !0;
function y2(e, t) {
  return e.useMedium(t), Ry;
}
var jy = v2(),
  xc = function () {},
  wu = m.forwardRef(function (e, t) {
    var n = m.useRef(null),
      r = m.useState({
        onScrollCapture: xc,
        onWheelCapture: xc,
        onTouchMoveCapture: xc,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      p = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      x = e.inert,
      y = e.allowPinchZoom,
      S = e.as,
      v = S === void 0 ? "div" : S,
      g = ky(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      w = f,
      C = h2([n, t]),
      E = bn(bn({}, g), o);
    return m.createElement(
      m.Fragment,
      null,
      d &&
        m.createElement(w, {
          sideCar: jy,
          removeScrollBar: u,
          shards: p,
          noIsolation: h,
          inert: x,
          setCallbacks: s,
          allowPinchZoom: !!y,
          lockRef: n,
        }),
      i
        ? m.cloneElement(m.Children.only(l), bn(bn({}, E), { ref: C }))
        : m.createElement(v, bn({}, E, { className: a, ref: C }), l)
    );
  });
wu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
wu.classNames = { fullWidth: la, zeroRight: ia };
var x2 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function w2() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = x2();
  return t && e.setAttribute("nonce", t), e;
}
function S2(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function _2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var C2 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = w2()) && (S2(t, n), _2(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  b2 = function () {
    var e = C2();
    return function (t, n) {
      m.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Ny = function () {
    var e = b2(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  E2 = { left: 0, top: 0, right: 0, gap: 0 },
  wc = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  $2 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [wc(n), wc(r), wc(o)];
  },
  k2 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return E2;
    var t = $2(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  R2 = Ny(),
  us = "data-scroll-locked",
  j2 = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          c2,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          us,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ia,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          la,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ia, " .")
        .concat(
          ia,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(la, " .")
        .concat(
          la,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          us,
          `] {
    `
        )
        .concat(d2, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Em = function () {
    var e = parseInt(document.body.getAttribute(us) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  N2 = function () {
    m.useEffect(function () {
      return (
        document.body.setAttribute(us, (Em() + 1).toString()),
        function () {
          var e = Em() - 1;
          e <= 0
            ? document.body.removeAttribute(us)
            : document.body.setAttribute(us, e.toString());
        }
      );
    }, []);
  },
  P2 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    N2();
    var s = m.useMemo(
      function () {
        return k2(o);
      },
      [o]
    );
    return m.createElement(R2, { styles: j2(s, !t, o, n ? "" : "!important") });
  },
  Fd = !1;
if (typeof window < "u")
  try {
    var Dl = Object.defineProperty({}, "passive", {
      get: function () {
        return (Fd = !0), !0;
      },
    });
    window.addEventListener("test", Dl, Dl),
      window.removeEventListener("test", Dl, Dl);
  } catch {
    Fd = !1;
  }
var Do = Fd ? { passive: !1 } : !1,
  T2 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Py = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !T2(e) && n[t] === "visible")
    );
  },
  M2 = function (e) {
    return Py(e, "overflowY");
  },
  O2 = function (e) {
    return Py(e, "overflowX");
  },
  $m = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = Ty(e, n);
      if (r) {
        var o = My(e, n),
          s = o[1],
          i = o[2];
        if (s > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  A2 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  I2 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Ty = function (e, t) {
    return e === "v" ? M2(t) : O2(t);
  },
  My = function (e, t) {
    return e === "v" ? A2(t) : I2(t);
  },
  F2 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  D2 = function (e, t, n, r, o) {
    var s = F2(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      d = i > 0,
      p = 0,
      f = 0;
    do {
      var h = My(e, l),
        x = h[0],
        y = h[1],
        S = h[2],
        v = y - S - s * x;
      (x || v) && Ty(e, l) && ((p += v), (f += x)), (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return ((d && (p === 0 || !o)) || (!d && (f === 0 || !o))) && (u = !0), u;
  },
  Ll = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  km = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Rm = function (e) {
    return e && "current" in e ? e.current : e;
  },
  L2 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  V2 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  z2 = 0,
  Lo = [];
function B2(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    o = m.useState(z2++)[0],
    s = m.useState(function () {
      return Ny();
    })[0],
    i = m.useRef(e);
  m.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    m.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = u2([e.lockRef.current], (e.shards || []).map(Rm), !0).filter(
            Boolean
          );
          return (
            y.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = m.useCallback(function (y, S) {
      if ("touches" in y && y.touches.length === 2)
        return !i.current.allowPinchZoom;
      var v = Ll(y),
        g = n.current,
        w = "deltaX" in y ? y.deltaX : g[0] - v[0],
        C = "deltaY" in y ? y.deltaY : g[1] - v[1],
        E,
        N = y.target,
        P = Math.abs(w) > Math.abs(C) ? "h" : "v";
      if ("touches" in y && P === "h" && N.type === "range") return !1;
      var _ = $m(P, N);
      if (!_) return !0;
      if ((_ ? (E = P) : ((E = P === "v" ? "h" : "v"), (_ = $m(P, N))), !_))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (w || C) && (r.current = E), !E)
      )
        return !0;
      var M = r.current || E;
      return D2(M, S, y, M === "h" ? w : C, !0);
    }, []),
    a = m.useCallback(function (y) {
      var S = y;
      if (!(!Lo.length || Lo[Lo.length - 1] !== s)) {
        var v = "deltaY" in S ? km(S) : Ll(S),
          g = t.current.filter(function (E) {
            return E.name === S.type && E.target === S.target && L2(E.delta, v);
          })[0];
        if (g && g.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!g) {
          var w = (i.current.shards || [])
              .map(Rm)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(S.target);
              }),
            C = w.length > 0 ? l(S, w[0]) : !i.current.noIsolation;
          C && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = m.useCallback(function (y, S, v, g) {
      var w = { name: y, delta: S, target: v, should: g };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== w;
          });
        }, 1);
    }, []),
    d = m.useCallback(function (y) {
      (n.current = Ll(y)), (r.current = void 0);
    }, []),
    p = m.useCallback(function (y) {
      u(y.type, km(y), y.target, l(y, e.lockRef.current));
    }, []),
    f = m.useCallback(function (y) {
      u(y.type, Ll(y), y.target, l(y, e.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      Lo.push(s),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, Do),
      document.addEventListener("touchmove", a, Do),
      document.addEventListener("touchstart", d, Do),
      function () {
        (Lo = Lo.filter(function (y) {
          return y !== s;
        })),
          document.removeEventListener("wheel", a, Do),
          document.removeEventListener("touchmove", a, Do),
          document.removeEventListener("touchstart", d, Do);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(s, { styles: V2(o) }) : null,
    h ? m.createElement(P2, { gapMode: "margin" }) : null
  );
}
const U2 = y2(jy, B2);
var lp = m.forwardRef(function (e, t) {
  return m.createElement(wu, bn({}, e, { ref: t, sideCar: U2 }));
});
lp.classNames = wu.classNames;
const H2 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  W2 = [" ", "Enter"],
  Su = "Select",
  [_u, Cu, Z2] = NE(Su),
  [As, J5] = cl(Su, [Z2, wy]),
  ap = wy(),
  [G2, bo] = As(Su),
  [K2, Y2] = As(Su),
  Q2 = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        value: i,
        defaultValue: l,
        onValueChange: a,
        dir: u,
        name: d,
        autoComplete: p,
        disabled: f,
        required: h,
      } = e,
      x = ap(t),
      [y, S] = m.useState(null),
      [v, g] = m.useState(null),
      [w, C] = m.useState(!1),
      E = TE(u),
      [N = !1, P] = Id({ prop: r, defaultProp: o, onChange: s }),
      [_, M] = Id({ prop: i, defaultProp: l, onChange: a }),
      j = m.useRef(null),
      A = y ? !!y.closest("form") : !0,
      [$, O] = m.useState(new Set()),
      I = Array.from($)
        .map((F) => F.props.value)
        .join(";");
    return m.createElement(
      e2,
      x,
      m.createElement(
        G2,
        {
          required: h,
          scope: t,
          trigger: y,
          onTriggerChange: S,
          valueNode: v,
          onValueNodeChange: g,
          valueNodeHasChildren: w,
          onValueNodeHasChildrenChange: C,
          contentId: gi(),
          value: _,
          onValueChange: M,
          open: N,
          onOpenChange: P,
          dir: E,
          triggerPointerDownPosRef: j,
          disabled: f,
        },
        m.createElement(
          _u.Provider,
          { scope: t },
          m.createElement(
            K2,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: m.useCallback((F) => {
                O((U) => new Set(U).add(F));
              }, []),
              onNativeOptionRemove: m.useCallback((F) => {
                O((U) => {
                  const L = new Set(U);
                  return L.delete(F), L;
                });
              }, []),
            },
            n
          )
        ),
        A
          ? m.createElement(
              Dy,
              {
                key: I,
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: d,
                autoComplete: p,
                value: _,
                onChange: (F) => M(F.target.value),
                disabled: f,
              },
              _ === void 0 ? m.createElement("option", { value: "" }) : null,
              Array.from($)
            )
          : null
      )
    );
  },
  q2 = "SelectTrigger",
  X2 = m.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      s = ap(n),
      i = bo(q2, n),
      l = i.disabled || r,
      a = Xe(t, i.onTriggerChange),
      u = Cu(n),
      [d, p, f] = Ly((x) => {
        const y = u().filter((g) => !g.disabled),
          S = y.find((g) => g.value === i.value),
          v = Vy(y, x, S);
        v !== void 0 && i.onValueChange(v.value);
      }),
      h = () => {
        l || (i.onOpenChange(!0), f());
      };
    return m.createElement(
      t2,
      re({ asChild: !0 }, s),
      m.createElement(
        Ue.button,
        re(
          {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: l,
            "data-disabled": l ? "" : void 0,
            "data-placeholder": Fy(i.value) ? "" : void 0,
          },
          o,
          {
            ref: a,
            onClick: Be(o.onClick, (x) => {
              x.currentTarget.focus();
            }),
            onPointerDown: Be(o.onPointerDown, (x) => {
              const y = x.target;
              y.hasPointerCapture(x.pointerId) &&
                y.releasePointerCapture(x.pointerId),
                x.button === 0 &&
                  x.ctrlKey === !1 &&
                  (h(),
                  (i.triggerPointerDownPosRef.current = {
                    x: Math.round(x.pageX),
                    y: Math.round(x.pageY),
                  }),
                  x.preventDefault());
            }),
            onKeyDown: Be(o.onKeyDown, (x) => {
              const y = d.current !== "";
              !(x.ctrlKey || x.altKey || x.metaKey) &&
                x.key.length === 1 &&
                p(x.key),
                !(y && x.key === " ") &&
                  H2.includes(x.key) &&
                  (h(), x.preventDefault());
            }),
          }
        )
      )
    );
  }),
  J2 = "SelectValue",
  ek = m.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: s,
        placeholder: i = "",
        ...l
      } = e,
      a = bo(J2, n),
      { onValueNodeHasChildrenChange: u } = a,
      d = s !== void 0,
      p = Xe(t, a.onValueNodeChange);
    return (
      Ot(() => {
        u(d);
      }, [u, d]),
      m.createElement(
        Ue.span,
        re({}, l, { ref: p, style: { pointerEvents: "none" } }),
        Fy(a.value) ? m.createElement(m.Fragment, null, i) : s
      )
    );
  }),
  tk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return m.createElement(
      Ue.span,
      re({ "aria-hidden": !0 }, o, { ref: t }),
      r || "▼"
    );
  }),
  nk = (e) => m.createElement(by, re({ asChild: !0 }, e)),
  _s = "SelectContent",
  rk = m.forwardRef((e, t) => {
    const n = bo(_s, e.__scopeSelect),
      [r, o] = m.useState();
    if (
      (Ot(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? xo.createPortal(
            m.createElement(
              Oy,
              { scope: e.__scopeSelect },
              m.createElement(
                _u.Slot,
                { scope: e.__scopeSelect },
                m.createElement("div", null, e.children)
              )
            ),
            s
          )
        : null;
    }
    return m.createElement(ok, re({}, e, { ref: t }));
  }),
  Bn = 10,
  [Oy, Eo] = As(_s),
  ok = m.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        side: l,
        sideOffset: a,
        align: u,
        alignOffset: d,
        arrowPadding: p,
        collisionBoundary: f,
        collisionPadding: h,
        sticky: x,
        hideWhenDetached: y,
        avoidCollisions: S,
        ...v
      } = e,
      g = bo(_s, n),
      [w, C] = m.useState(null),
      [E, N] = m.useState(null),
      P = Xe(t, (te) => C(te)),
      [_, M] = m.useState(null),
      [j, A] = m.useState(null),
      $ = Cu(n),
      [O, I] = m.useState(!1),
      F = m.useRef(!1);
    m.useEffect(() => {
      if (w) return $y(w);
    }, [w]),
      iy();
    const U = m.useCallback(
        (te) => {
          const [ve, ...Oe] = $().map((ye) => ye.ref.current),
            [be] = Oe.slice(-1),
            Ee = document.activeElement;
          for (const ye of te)
            if (
              ye === Ee ||
              (ye == null || ye.scrollIntoView({ block: "nearest" }),
              ye === ve && E && (E.scrollTop = 0),
              ye === be && E && (E.scrollTop = E.scrollHeight),
              ye == null || ye.focus(),
              document.activeElement !== Ee)
            )
              return;
        },
        [$, E]
      ),
      L = m.useCallback(() => U([_, w]), [U, _, w]);
    m.useEffect(() => {
      O && L();
    }, [O, L]);
    const { onOpenChange: R, triggerPointerDownPosRef: V } = g;
    m.useEffect(() => {
      if (w) {
        let te = { x: 0, y: 0 };
        const ve = (be) => {
            var Ee, ye, at, rt;
            te = {
              x: Math.abs(
                Math.round(be.pageX) -
                  ((Ee =
                    (ye = V.current) === null || ye === void 0
                      ? void 0
                      : ye.x) !== null && Ee !== void 0
                    ? Ee
                    : 0)
              ),
              y: Math.abs(
                Math.round(be.pageY) -
                  ((at =
                    (rt = V.current) === null || rt === void 0
                      ? void 0
                      : rt.y) !== null && at !== void 0
                    ? at
                    : 0)
              ),
            };
          },
          Oe = (be) => {
            te.x <= 10 && te.y <= 10
              ? be.preventDefault()
              : w.contains(be.target) || R(!1),
              document.removeEventListener("pointermove", ve),
              (V.current = null);
          };
        return (
          V.current !== null &&
            (document.addEventListener("pointermove", ve),
            document.addEventListener("pointerup", Oe, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ve),
              document.removeEventListener("pointerup", Oe, { capture: !0 });
          }
        );
      }
    }, [w, R, V]),
      m.useEffect(() => {
        const te = () => R(!1);
        return (
          window.addEventListener("blur", te),
          window.addEventListener("resize", te),
          () => {
            window.removeEventListener("blur", te),
              window.removeEventListener("resize", te);
          }
        );
      }, [R]);
    const [J, Q] = Ly((te) => {
        const ve = $().filter((Ee) => !Ee.disabled),
          Oe = ve.find((Ee) => Ee.ref.current === document.activeElement),
          be = Vy(ve, te, Oe);
        be && setTimeout(() => be.ref.current.focus());
      }),
      X = m.useCallback(
        (te, ve, Oe) => {
          const be = !F.current && !Oe;
          ((g.value !== void 0 && g.value === ve) || be) &&
            (M(te), be && (F.current = !0));
        },
        [g.value]
      ),
      he = m.useCallback(() => (w == null ? void 0 : w.focus()), [w]),
      Pe = m.useCallback(
        (te, ve, Oe) => {
          const be = !F.current && !Oe;
          ((g.value !== void 0 && g.value === ve) || be) && A(te);
        },
        [g.value]
      ),
      He = r === "popper" ? jm : sk,
      ue =
        He === jm
          ? {
              side: l,
              sideOffset: a,
              align: u,
              alignOffset: d,
              arrowPadding: p,
              collisionBoundary: f,
              collisionPadding: h,
              sticky: x,
              hideWhenDetached: y,
              avoidCollisions: S,
            }
          : {};
    return m.createElement(
      Oy,
      {
        scope: n,
        content: w,
        viewport: E,
        onViewportChange: N,
        itemRefCallback: X,
        selectedItem: _,
        onItemLeave: he,
        itemTextRefCallback: Pe,
        focusSelectedItem: L,
        selectedItemText: j,
        position: r,
        isPositioned: O,
        searchRef: J,
      },
      m.createElement(
        lp,
        { as: Dr, allowPinchZoom: !0 },
        m.createElement(
          ly,
          {
            asChild: !0,
            trapped: g.open,
            onMountAutoFocus: (te) => {
              te.preventDefault();
            },
            onUnmountAutoFocus: Be(o, (te) => {
              var ve;
              (ve = g.trigger) === null ||
                ve === void 0 ||
                ve.focus({ preventScroll: !0 }),
                te.preventDefault();
            }),
          },
          m.createElement(
            oy,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: s,
              onPointerDownOutside: i,
              onFocusOutside: (te) => te.preventDefault(),
              onDismiss: () => g.onOpenChange(!1),
            },
            m.createElement(
              He,
              re(
                {
                  role: "listbox",
                  id: g.contentId,
                  "data-state": g.open ? "open" : "closed",
                  dir: g.dir,
                  onContextMenu: (te) => te.preventDefault(),
                },
                v,
                ue,
                {
                  onPlaced: () => I(!0),
                  ref: P,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...v.style,
                  },
                  onKeyDown: Be(v.onKeyDown, (te) => {
                    const ve = te.ctrlKey || te.altKey || te.metaKey;
                    if (
                      (te.key === "Tab" && te.preventDefault(),
                      !ve && te.key.length === 1 && Q(te.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(te.key))
                    ) {
                      let be = $()
                        .filter((Ee) => !Ee.disabled)
                        .map((Ee) => Ee.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(te.key) &&
                          (be = be.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(te.key))
                      ) {
                        const Ee = te.target,
                          ye = be.indexOf(Ee);
                        be = be.slice(ye + 1);
                      }
                      setTimeout(() => U(be)), te.preventDefault();
                    }
                  }),
                }
              )
            )
          )
        )
      )
    );
  }),
  sk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      s = bo(_s, n),
      i = Eo(_s, n),
      [l, a] = m.useState(null),
      [u, d] = m.useState(null),
      p = Xe(t, (P) => d(P)),
      f = Cu(n),
      h = m.useRef(!1),
      x = m.useRef(!0),
      {
        viewport: y,
        selectedItem: S,
        selectedItemText: v,
        focusSelectedItem: g,
      } = i,
      w = m.useCallback(() => {
        if (s.trigger && s.valueNode && l && u && y && S && v) {
          const P = s.trigger.getBoundingClientRect(),
            _ = u.getBoundingClientRect(),
            M = s.valueNode.getBoundingClientRect(),
            j = v.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const Ee = j.left - _.left,
              ye = M.left - Ee,
              at = P.left - ye,
              rt = P.width + at,
              At = Math.max(rt, _.width),
              kt = window.innerWidth - Bn,
              ar = lm(ye, [Bn, kt - At]);
            (l.style.minWidth = rt + "px"), (l.style.left = ar + "px");
          } else {
            const Ee = _.right - j.right,
              ye = window.innerWidth - M.right - Ee,
              at = window.innerWidth - P.right - ye,
              rt = P.width + at,
              At = Math.max(rt, _.width),
              kt = window.innerWidth - Bn,
              ar = lm(ye, [Bn, kt - At]);
            (l.style.minWidth = rt + "px"), (l.style.right = ar + "px");
          }
          const A = f(),
            $ = window.innerHeight - Bn * 2,
            O = y.scrollHeight,
            I = window.getComputedStyle(u),
            F = parseInt(I.borderTopWidth, 10),
            U = parseInt(I.paddingTop, 10),
            L = parseInt(I.borderBottomWidth, 10),
            R = parseInt(I.paddingBottom, 10),
            V = F + U + O + R + L,
            J = Math.min(S.offsetHeight * 5, V),
            Q = window.getComputedStyle(y),
            X = parseInt(Q.paddingTop, 10),
            he = parseInt(Q.paddingBottom, 10),
            Pe = P.top + P.height / 2 - Bn,
            He = $ - Pe,
            ue = S.offsetHeight / 2,
            te = S.offsetTop + ue,
            ve = F + U + te,
            Oe = V - ve;
          if (ve <= Pe) {
            const Ee = S === A[A.length - 1].ref.current;
            l.style.bottom = "0px";
            const ye = u.clientHeight - y.offsetTop - y.offsetHeight,
              at = Math.max(He, ue + (Ee ? he : 0) + ye + L),
              rt = ve + at;
            l.style.height = rt + "px";
          } else {
            const Ee = S === A[0].ref.current;
            l.style.top = "0px";
            const at = Math.max(Pe, F + y.offsetTop + (Ee ? X : 0) + ue) + Oe;
            (l.style.height = at + "px"), (y.scrollTop = ve - Pe + y.offsetTop);
          }
          (l.style.margin = `${Bn}px 0`),
            (l.style.minHeight = J + "px"),
            (l.style.maxHeight = $ + "px"),
            r == null || r(),
            requestAnimationFrame(() => (h.current = !0));
        }
      }, [f, s.trigger, s.valueNode, l, u, y, S, v, s.dir, r]);
    Ot(() => w(), [w]);
    const [C, E] = m.useState();
    Ot(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const N = m.useCallback(
      (P) => {
        P && x.current === !0 && (w(), g == null || g(), (x.current = !1));
      },
      [w, g]
    );
    return m.createElement(
      ik,
      {
        scope: n,
        contentWrapper: l,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: N,
      },
      m.createElement(
        "div",
        {
          ref: a,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C,
          },
        },
        m.createElement(
          Ue.div,
          re({}, o, {
            ref: p,
            style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
          })
        )
      )
    );
  }),
  jm = m.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Bn,
        ...s
      } = e,
      i = ap(n);
    return m.createElement(
      n2,
      re({}, i, s, {
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
          boxSizing: "border-box",
          ...s.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  [ik, up] = As(_s, {}),
  Nm = "SelectViewport",
  lk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Eo(Nm, n),
      s = up(Nm, n),
      i = Xe(t, o.onViewportChange),
      l = m.useRef(0);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      m.createElement(
        _u.Slot,
        { scope: n },
        m.createElement(
          Ue.div,
          re({ "data-radix-select-viewport": "", role: "presentation" }, r, {
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...r.style,
            },
            onScroll: Be(r.onScroll, (a) => {
              const u = a.currentTarget,
                { contentWrapper: d, shouldExpandOnScrollRef: p } = s;
              if (p != null && p.current && d) {
                const f = Math.abs(l.current - u.scrollTop);
                if (f > 0) {
                  const h = window.innerHeight - Bn * 2,
                    x = parseFloat(d.style.minHeight),
                    y = parseFloat(d.style.height),
                    S = Math.max(x, y);
                  if (S < h) {
                    const v = S + f,
                      g = Math.min(h, v),
                      w = v - g;
                    (d.style.height = g + "px"),
                      d.style.bottom === "0px" &&
                        ((u.scrollTop = w > 0 ? w : 0),
                        (d.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = u.scrollTop;
            }),
          })
        )
      )
    );
  }),
  ak = "SelectGroup",
  [ej, uk] = As(ak),
  ck = "SelectLabel",
  dk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = uk(ck, n);
    return m.createElement(Ue.div, re({ id: o.id }, r, { ref: t }));
  }),
  Dd = "SelectItem",
  [fk, Ay] = As(Dd),
  pk = m.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: s,
        ...i
      } = e,
      l = bo(Dd, n),
      a = Eo(Dd, n),
      u = l.value === r,
      [d, p] = m.useState(s ?? ""),
      [f, h] = m.useState(!1),
      x = Xe(t, (v) => {
        var g;
        return (g = a.itemRefCallback) === null || g === void 0
          ? void 0
          : g.call(a, v, r, o);
      }),
      y = gi(),
      S = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return m.createElement(
      fk,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: u,
        onItemTextChange: m.useCallback((v) => {
          p((g) => {
            var w;
            return (
              g ||
              ((w = v == null ? void 0 : v.textContent) !== null && w !== void 0
                ? w
                : ""
              ).trim()
            );
          });
        }, []),
      },
      m.createElement(
        _u.ItemSlot,
        { scope: n, value: r, disabled: o, textValue: d },
        m.createElement(
          Ue.div,
          re(
            {
              role: "option",
              "aria-labelledby": y,
              "data-highlighted": f ? "" : void 0,
              "aria-selected": u && f,
              "data-state": u ? "checked" : "unchecked",
              "aria-disabled": o || void 0,
              "data-disabled": o ? "" : void 0,
              tabIndex: o ? void 0 : -1,
            },
            i,
            {
              ref: x,
              onFocus: Be(i.onFocus, () => h(!0)),
              onBlur: Be(i.onBlur, () => h(!1)),
              onPointerUp: Be(i.onPointerUp, S),
              onPointerMove: Be(i.onPointerMove, (v) => {
                if (o) {
                  var g;
                  (g = a.onItemLeave) === null || g === void 0 || g.call(a);
                } else v.currentTarget.focus({ preventScroll: !0 });
              }),
              onPointerLeave: Be(i.onPointerLeave, (v) => {
                if (v.currentTarget === document.activeElement) {
                  var g;
                  (g = a.onItemLeave) === null || g === void 0 || g.call(a);
                }
              }),
              onKeyDown: Be(i.onKeyDown, (v) => {
                var g;
                (((g = a.searchRef) === null || g === void 0
                  ? void 0
                  : g.current) !== "" &&
                  v.key === " ") ||
                  (W2.includes(v.key) && S(),
                  v.key === " " && v.preventDefault());
              }),
            }
          )
        )
      )
    );
  }),
  Vl = "SelectItemText",
  hk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e,
      i = bo(Vl, n),
      l = Eo(Vl, n),
      a = Ay(Vl, n),
      u = Y2(Vl, n),
      [d, p] = m.useState(null),
      f = Xe(
        t,
        (v) => p(v),
        a.onItemTextChange,
        (v) => {
          var g;
          return (g = l.itemTextRefCallback) === null || g === void 0
            ? void 0
            : g.call(l, v, a.value, a.disabled);
        }
      ),
      h = d == null ? void 0 : d.textContent,
      x = m.useMemo(
        () =>
          m.createElement(
            "option",
            { key: a.value, value: a.value, disabled: a.disabled },
            h
          ),
        [a.disabled, a.value, h]
      ),
      { onNativeOptionAdd: y, onNativeOptionRemove: S } = u;
    return (
      Ot(() => (y(x), () => S(x)), [y, S, x]),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(Ue.span, re({ id: a.textId }, s, { ref: f })),
        a.isSelected && i.valueNode && !i.valueNodeHasChildren
          ? xo.createPortal(s.children, i.valueNode)
          : null
      )
    );
  }),
  mk = "SelectItemIndicator",
  gk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ay(mk, n).isSelected
      ? m.createElement(Ue.span, re({ "aria-hidden": !0 }, r, { ref: t }))
      : null;
  }),
  Pm = "SelectScrollUpButton",
  vk = m.forwardRef((e, t) => {
    const n = Eo(Pm, e.__scopeSelect),
      r = up(Pm, e.__scopeSelect),
      [o, s] = m.useState(!1),
      i = Xe(t, r.onScrollButtonChange);
    return (
      Ot(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const d = a.scrollTop > 0;
            s(d);
          };
          var l = u;
          const a = n.viewport;
          return (
            u(),
            a.addEventListener("scroll", u),
            () => a.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? m.createElement(
            Iy,
            re({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: l, selectedItem: a } = n;
                l && a && (l.scrollTop = l.scrollTop - a.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  Tm = "SelectScrollDownButton",
  yk = m.forwardRef((e, t) => {
    const n = Eo(Tm, e.__scopeSelect),
      r = up(Tm, e.__scopeSelect),
      [o, s] = m.useState(!1),
      i = Xe(t, r.onScrollButtonChange);
    return (
      Ot(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const d = a.scrollHeight - a.clientHeight,
              p = Math.ceil(a.scrollTop) < d;
            s(p);
          };
          var l = u;
          const a = n.viewport;
          return (
            u(),
            a.addEventListener("scroll", u),
            () => a.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? m.createElement(
            Iy,
            re({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: l, selectedItem: a } = n;
                l && a && (l.scrollTop = l.scrollTop + a.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  Iy = m.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      s = Eo("SelectScrollButton", n),
      i = m.useRef(null),
      l = Cu(n),
      a = m.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      m.useEffect(() => () => a(), [a]),
      Ot(() => {
        var u;
        const d = l().find((p) => p.ref.current === document.activeElement);
        d == null ||
          (u = d.ref.current) === null ||
          u === void 0 ||
          u.scrollIntoView({ block: "nearest" });
      }, [l]),
      m.createElement(
        Ue.div,
        re({ "aria-hidden": !0 }, o, {
          ref: t,
          style: { flexShrink: 0, ...o.style },
          onPointerDown: Be(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerMove: Be(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) === null || u === void 0 || u.call(s),
              i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerLeave: Be(o.onPointerLeave, () => {
            a();
          }),
        })
      )
    );
  }),
  xk = m.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return m.createElement(Ue.div, re({ "aria-hidden": !0 }, r, { ref: t }));
  });
function Fy(e) {
  return e === "" || e === void 0;
}
const Dy = m.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = m.useRef(null),
    s = Xe(t, o),
    i = o2(n);
  return (
    m.useEffect(() => {
      const l = o.current,
        a = window.HTMLSelectElement.prototype,
        d = Object.getOwnPropertyDescriptor(a, "value").set;
      if (i !== n && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(l, n), l.dispatchEvent(p);
      }
    }, [i, n]),
    m.createElement(
      s2,
      { asChild: !0 },
      m.createElement("select", re({}, r, { ref: s, defaultValue: n }))
    )
  );
});
Dy.displayName = "BubbleSelect";
function Ly(e) {
  const t = tr(e),
    n = m.useRef(""),
    r = m.useRef(0),
    o = m.useCallback(
      (i) => {
        const l = n.current + i;
        t(l),
          (function a(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
          })(l);
      },
      [t]
    ),
    s = m.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Vy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = wk(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const a = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function wk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const Sk = Q2,
  zy = X2,
  _k = ek,
  Ck = tk,
  bk = nk,
  By = rk,
  Ek = lk,
  Uy = dk,
  Hy = pk,
  $k = hk,
  kk = gk,
  Wy = vk,
  Zy = yk,
  Gy = xk,
  Rk = Sk,
  jk = _k,
  Ky = m.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(zy, {
      ref: r,
      className: je(
        "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        c.jsx(Ck, {
          asChild: !0,
          children: c.jsx(SE, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
Ky.displayName = zy.displayName;
const Yy = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Wy, {
    ref: n,
    className: je("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(kE, {}),
  })
);
Yy.displayName = Wy.displayName;
const Qy = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Zy, {
    ref: n,
    className: je("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(EE, {}),
  })
);
Qy.displayName = Zy.displayName;
const qy = m.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    c.jsx(bk, {
      children: c.jsxs(By, {
        ref: o,
        className: je(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          c.jsx(Yy, {}),
          c.jsx(Ek, {
            className: je(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          c.jsx(Qy, {}),
        ],
      }),
    })
);
qy.displayName = By.displayName;
const Nk = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Uy, {
    ref: n,
    className: je("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  })
);
Nk.displayName = Uy.displayName;
const Xy = m.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(Hy, {
    ref: r,
    className: je(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(kk, { children: c.jsx(CE, { className: "h-4 w-4" }) }),
      }),
      c.jsx($k, { children: t }),
    ],
  })
);
Xy.displayName = Hy.displayName;
const Pk = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Gy, { ref: n, className: je("-mx-1 my-1 h-px bg-muted", e), ...t })
);
Pk.displayName = Gy.displayName;
const Gn = ({
    className: e = "",
    form: t,
    name: n,
    label: r,
    placeholder: o,
    options: s,
  }) =>
    c.jsx($e, {
      control: t.control,
      name: n,
      render: ({ field: i }) =>
        c.jsxs(xe, {
          className: e,
          children: [
            c.jsx(we, { children: r }),
            c.jsxs(Rk, {
              onValueChange: i.onChange,
              defaultValue: i.value,
              children: [
                c.jsx(Se, {
                  children: c.jsx(Ky, {
                    children: c.jsx(jk, { placeholder: o }),
                  }),
                }),
                c.jsx(qy, {
                  children: s.map((l, a) =>
                    c.jsx(Xy, { value: l, children: l }, a)
                  ),
                }),
              ],
            }),
            c.jsx(_e, {}),
          ],
        }),
    }),
  Tk = [
    "АБАРКАСЫ",
    "БАБУШИ",
    "БАЛЕТКИ",
    "БАХИЛЫ",
    "БЕРЦЫ",
    "БОКСЕРКИ",
    "БОРЦОВКИ",
    "БОСОНОЖКИ",
    "БОТИЛЬОНЫ",
    "БОТИЛЬОНЫ ВЫСОКИЕ",
    "БОТИНКИ",
    "БОТИНКИ ВЫСОКИЕ",
    "БОТИНКИ ДЛЯ БАСКЕТБОЛА",
    "БОТИНКИ ДЛЯ БЕГОВЫХ ЛЫЖ",
    "БОТИНКИ ДЛЯ ГОРНЫХ ЛЫЖ",
    "БОТИНКИ ДЛЯ ДАЙВИНГА",
    "БОТИНКИ ДЛЯ ПАРУСНОГО СПОРТА",
    "БОТИНКИ ДЛЯ ПРЫЖКОВ НА ЛЫЖАХ С ТРАМПЛИНА",
    "БОТИНКИ ПЛАВАТЕЛЬНЫЕ",
    "БОТИНКИ ПРОИЗВОДСТВЕННЫЕ",
    "БОТИНКИ СНОУБОРДИЧЕСКИЕ",
    "БОТИНКИ СПЕЦИАЛЬНЫЕ",
    "БОТЫ",
    "БОТЫ СПЕЦИАЛЬНЫЕ",
    "БРОГИ",
    "БУРКИ",
    "БУТСЫ",
    "ВАЛЕНКИ",
    "ВАЛЕНКИ СПЕЦИАЛЬНЫЕ",
    "ВАЛЕШИ",
    "ВЕЛОТУФЛИ",
    "ВЬЕТНАМКИ",
    "ГАЛОШИ",
    "ГАЛОШИ СПЕЦИАЛЬНЫЕ",
    "ГИМНАСТИЧЕСКИЕ ПОЛУТАПОЧКИ",
    "ГЛАДИАТОРЫ",
    "ДЕЗЕРТЫ",
    "ДЕЛЁНКИ",
    "ДЕРБИ",
    "ДЖИБИТСЫ",
    "ДОМАШНЯЯ ОБУВЬ",
    "ДУТИКИ",
    "КАЗАКИ",
    "КЕДЫ",
    "КЕДЫ ВЫСОКИЕ",
    "КЛОГИ",
    "КРОКСЫ",
    "КРОССОВКИ",
    "КРОССОВКИ ВЫСОКИЕ",
    "КРОССОВКИ РОЛИКОВЫЕ",
    "ЛОФЕРЫ",
    "ЛУНОХОДЫ",
    "МОКАСИНЫ",
    "МОНГОЛКИ",
    "МОНКИ",
    "МОТОБОТИНКИ",
    "МУНБУТЫ",
    "МЮЛИ",
    "ОБУВЬ ДЛЯ ЕДИНОБОРСТВ",
    "ОБУВЬ ДЛЯ ТЯЖЕЛОЙ АТЛЕТИКИ И СИЛОВЫХ ВИДОВ СПОРТА",
    "ОБУВЬ ПЛЯЖНАЯ",
    "ОБУВЬ ТРЕНИРОВОЧНАЯ ДЛЯ ЗАНЯТИЙ СПОРТОМ",
    "ОКСФОРДЫ",
    "ПАНТОЛЕТЫ (ШЛЕПАНЦЫ)",
    "ПИНЕТКИ",
    "ПОЛУБОТИНКИ",
    "ПОЛУБОТИНКИ ДОМАШНИЕ",
    "ПОЛУБОТИНКИ КРОССОВЫЕ",
    "ПОЛУБОТИНКИ СПЕЦИАЛЬНЫЕ",
    "ПОЛУКЕДЫ",
    "ПОЛУСАПОГИ",
    "ПОЛУСАПОГИ СПЕЦИАЛЬНЫЕ",
    "ПОЛУСАПОЖКИ",
    "ПОЛУЧЕШКИ",
    "ПУАНТЫ",
    "РЕЗИНОВЫЕ САПОГИ",
    "САБО",
    "САМБОВКИ",
    "САНДАЛЕТЫ",
    "САНДАЛИИ",
    "САПОГИ",
    "САПОГИ ПРОИЗВОДСТВЕННЫЕ",
    "САПОГИ С УДЛИНЕННЫМИ ГОЛЕНИЩАМИ (БОТФОРТЫ)",
    "САПОГИ СПЕЦИАЛЬНЫЕ",
    "САПОЖКИ",
    "СКАЛЬНЫЕ ТУФЛИ",
    "СЛАЙДЕРЫ",
    "СЛАНЦЫ",
    "СЛИПЕРЫ",
    "СЛИПОНЫ",
    "СНИКЕРЫ",
    "СНОУБУТСЫ",
    "СРЕДСТВА ДОПОЛНИТЕЛЬНОЙ ЗАЩИТЫ НОГ ОТ УДАРОВ В НОСОЧНОЙ ЧАСТИ",
    "ТАПОЧКИ",
    "ТАПОЧКИ (САНДАЛИИ) СПЕЦИАЛЬНЫЕ",
    "ТАПОЧКИ-НОСКИ",
    "ТАПОЧКИ-СЛЕДКИ",
    "ТАПОЧКИ-УГГИ",
    "ТОПСАЙДЕРЫ",
    "ТУФЛИ",
    "ТУФЛИ ДЛЯ ХОЖДЕНИЯ ПО КОРАЛЛАМ",
    "ТУФЛИ ДОМАШНИЕ/КОМНАТНЫЕ",
    "ТУФЛИ КУПАЛЬНЫЕ",
    "ТУФЛИ ЛЕТНИЕ",
    "ТУФЛИ ПЛЯЖНЫЕ",
    "ТУФЛИ ПРОИЗВОДСТВЕННЫЕ",
    "ТУФЛИ СПЕЦИАЛЬНЫЕ",
    "ТУФЛИ ТАНЦЕВАЛЬНЫЕ",
    "УГГИ",
    "УНТЫ",
    "ЧЕЛСИ",
    "ЧЕШКИ",
    "ЧУВЯКИ",
    "ЧУНИ",
    "ШИПОВКИ",
    "ШЛЕПАНЦЫ",
    "ЭСПАДРИЛЬИ",
  ],
  Mk = [
    "БЕЖЕВЫЙ",
    "БЕЖЕВЫЙ МЕЛАНЖ",
    "БЕЛО-РОЗОВЫЙ",
    "БЕЛЫЙ",
    "БЕЛЫЙ/СЕРЫЙ",
    "БИРЮЗОВЫЙ",
    "БОРДОВЫЙ",
    "БРОНЗОВЫЙ",
    "ВАНИЛЬ",
    "ВИШНЯ",
    "ГОЛУБОЙ",
    "ЖЁЛТЫЙ",
    "ЗЕЛЁНЫЙ",
    "ЗОЛОТИСТЫЙ",
    "ЗОЛОТОЙ",
    "ИЗУМРУДНЫЙ",
    "КАПУЧИНО",
    "КИРПИЧНЫЙ",
    "КОРАЛЛОВЫЙ",
    "КОРИЧНЕВЫЙ",
    "КРАСНЫЙ",
    "ЛАЙМ",
    "ЛЕОПАРД",
    "МАЛИНОВЫЙ",
    "МЕДНЫЙ",
    "МОЛОЧНЫЙ",
    "МЯТНЫЙ",
    "НАТУРАЛЬНЫЙ",
    "НИКЕЛЬ",
    "ОЛИВКОВЫЙ",
    "ОРАНЖЕВЫЙ",
    "ПЕСОЧНЫЙ",
    "ПЕРСИКОВЫЙ",
    "ПРОЗРАЧНЫЙ",
    "ПУРПУРНЫЙ",
    "РАЗНОЦВЕТНЫЙ",
    "РОЗОВО-БЕЖЕВЫЙ",
    "РОЗОВЫЙ",
    "РЫЖИЙ",
    "СВЕТЛО-БЕЖЕВЫЙ",
    "СВЕТЛО-ЗЕЛЕНЫЙ",
    "СВЕТЛО-КОРИЧНЕВЫЙ",
    "СВЕТЛО-РОЗОВЫЙ",
    "СВЕТЛО-СЕРЫЙ",
    "СВЕТЛО-СЕРЫЙ МЕЛАНЖ",
    "СВЕТЛО-СИНИЙ",
    "СВЕТЛО-ФИОЛЕТОВЫЙ",
    "СЕРЕБРЯНЫЙ",
    "СЕРО-ЖЕЛТЫЙ",
    "СЕРО-ГОЛУБОЙ",
    "СЕРЫЙ",
    "СЕРЫЙ МЕЛАНЖ",
    "СИНИЙ",
    "СИРЕНЕВЫЙ/ЛИЛОВЫЙ",
    "СЛИВОВЫЙ",
    "СЛОНОВАЯ КОСТЬ",
    "ТЕМНО-БЕЖЕВЫЙ",
    "ТЕМНО-ЗЕЛЕНЫЙ",
    "ТЕМНО-КОРИЧНЕВЫЙ",
    "ТЕМНО-РОЗОВЫЙ",
    "ТЕМНО-СЕРЫЙ",
    "ТЕМНО-СЕРЫЙ МЕЛАНЖ",
    "ТЕМНО-СИНИЙ",
    "ТЕМНО-ФИОЛЕТОВЫЙ",
    "ТЕРРАКОТОВЫЙ",
    "ФИОЛЕТОВЫЙ",
    "ФУКСИЯ",
    "ХАКИ",
    "ХАКИ/ОЛИВКОВЫЙ",
    "ЧЕРНЫЙ",
    "ЧЕРНЫЙ/БЕЛЫЙ",
    "ЧЕРНЫЙ/ЗОЛОТИСТЫЙ",
    "ЧЕРНЫЙ/СЕРЫЙ",
    "ШОКОЛАДНЫЙ",
  ],
  Ok = [
    "16",
    "16,5",
    "16-17",
    "17",
    "17,5",
    "17-18",
    "18",
    "18,5",
    "18-19",
    "19",
    "19,5",
    "19-20",
    "20",
    "20,5",
    "20-21",
    "21",
    "21,5",
    "21-22",
    "22",
    "22,5",
    "22-23",
    "23",
    "23,5",
    "23-24",
    "24",
    "24,5",
    "24-25",
    "25",
    "25,5",
    "25-26",
    "26",
    "26,5",
    "26-27",
    "27",
    "27,5",
    "27-28",
    "28",
    "28,5",
    "28-29",
    "29",
    "29,5",
    "29-30",
    "30",
    "30,5",
    "30-31",
    "31",
    "31,5",
    "31-32",
    "32",
    "32,5",
    "32-33",
    "33",
    "33,5",
    "33-34",
    "34",
    "34,5",
    "34-35",
    "35",
    "35,5",
    "35-36",
    "36",
    "36,5",
    "36-37",
    "37",
    "37-37,5",
    "37,5",
    "37-38",
    "38",
    "38,5",
    "38-39",
    "39",
    "39,5",
    "39-40",
    "40",
    "40,5",
    "40-41",
    "41",
    "41,5",
    "41-42",
    "42",
    "42,5",
    "42-43",
    "43",
    "43,5",
    "43-44",
    "44",
    "44,5",
    "44-45",
    "45",
    "45,5",
    "45-46",
    "46",
    "46,5",
    "46-47",
    "47",
    "47,5",
    "47-48",
    "48",
    "48,5",
    "48-49",
    "49",
    "49,5",
    "49-50",
    "50",
    "50,5",
    "50-51",
    "51",
    "51,5",
    "51-52",
    "52",
    "52,5",
    "53",
    "53,5",
    "54",
    "54,5",
    "55",
    "55,5",
    "56",
    "56,5",
  ],
  cp = ul([]),
  Ak = () => {
    const [e, t] = An(cp),
      n = So({
        resolver: _o(xE),
        defaultValues: {
          fullName: "",
          tradeMark: "",
          articleType: "",
          articleName: "",
          shoesType: "",
          color: "",
          size: "",
          upperMaterial: "",
          liningMaterial: "",
          bottomMaterial: "",
          tnved: "",
        },
      }),
      r = (u) => {
        t([...e, u]);
      },
      o = n.watch("shoesType"),
      s = n.watch("tradeMark"),
      i = n.watch("articleName"),
      l = n.watch("color"),
      a = n.watch("size");
    return (
      m.useEffect(() => {
        const u = `${o} ${s} арт. ${i} Цвет: ${l} Размер: ${a}`;
        n.setValue("fullName", u);
      }, [n, o, s, i, l, a]),
      c.jsx("div", {
        className: "m-auto my-12 p-12 bg-white rounded-xl shadow-lg",
        children: c.jsxs(Co, {
          ...n,
          children: [
            c.jsxs("div", {
              className: "flex gap-2 items-center",
              children: [
                c.jsx(Ns, {}),
                c.jsx(mn, { children: "Добавить новый товар" }),
              ],
            }),
            c.jsx(ho, { className: "mt-2" }),
            c.jsxs("form", {
              onSubmit: n.handleSubmit(r),
              className: "space-y-4 mt-3",
              children: [
                c.jsx($e, {
                  control: n.control,
                  name: "fullName",
                  render: ({ field: u }) =>
                    c.jsxs(xe, {
                      children: [
                        c.jsx(we, {
                          children:
                            "Введите полное наименование товара (Формируется автоматически)",
                        }),
                        c.jsx(Se, {
                          children: c.jsx(ge, {
                            disabled: !0,
                            placeholder: "Полное наименование товара",
                            ...u,
                          }),
                        }),
                        c.jsx(_e, {}),
                      ],
                    }),
                }),
                c.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    c.jsx($e, {
                      control: n.control,
                      name: "tradeMark",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Товарный знак" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите товарный знак",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "articleType",
                      label: "Артикул/Модель",
                      placeholder: "Артикул/Модель",
                      options: ["Артикул", "Модель"],
                    }),
                    c.jsx($e, {
                      control: n.control,
                      name: "articleName",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, {
                              children: "Артикул/Модель (Значение)",
                            }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Артикул/Модель",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "shoesType",
                      label: "Вид обуви",
                      placeholder: "Выберите вид обуви",
                      options: Tk,
                    }),
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "color",
                      label: "Цвет",
                      placeholder: "Выберите цвет обуви",
                      options: Mk,
                    }),
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "size",
                      label: "Размер в штихмассовой системе",
                      placeholder: "Размер в штихмассовой системе",
                      options: Ok,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    c.jsx($e, {
                      control: n.control,
                      name: "upperMaterial",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Материал верха" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите материал верха",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx($e, {
                      control: n.control,
                      name: "liningMaterial",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Материал подкладки" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите материал подкладки",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx($e, {
                      control: n.control,
                      name: "bottomMaterial",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Материал низа/подошвы" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите материал низа/подошвы",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex justify-between gap-6 items-end",
                  children: [
                    c.jsx($e, {
                      control: n.control,
                      name: "tnved",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Код ТНВЭД" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder:
                                  "Введите код ТНВЭД (Оставьте пустой если не знаете код)",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx(Ne, { type: "submit", children: "Добавить товар" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  };
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Er(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wt(e, t) {
  return (n) => {
    t.setState((r) => ({ ...r, [e]: Er(n, r[e]) }));
  };
}
function bu(e) {
  return e instanceof Function;
}
function Ik(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Fk(e, t) {
  const n = [],
    r = (o) => {
      o.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && r(i);
      });
    };
  return r(e), n;
}
function oe(e, t, n) {
  let r = [],
    o;
  return (s) => {
    let i;
    n.key && n.debug && (i = Date.now());
    const l = e(s);
    if (!(l.length !== r.length || l.some((d, p) => r[p] !== d))) return o;
    r = l;
    let u;
    if (
      (n.key && n.debug && (u = Date.now()),
      (o = t(...l)),
      n == null || n.onChange == null || n.onChange(o),
      n.key && n.debug && n != null && n.debug())
    ) {
      const d = Math.round((Date.now() - i) * 100) / 100,
        p = Math.round((Date.now() - u) * 100) / 100,
        f = p / 16,
        h = (x, y) => {
          for (x = String(x); x.length < y; ) x = " " + x;
          return x;
        };
      console.info(
        `%c⏱ ${h(p, 5)} /${h(d, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * f, 120)
            )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return o;
  };
}
function se(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: !1,
    onChange: r,
  };
}
function Dk(e, t, n, r) {
  const o = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    },
    s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: oe(
        () => [e, n, t, s],
        (i, l, a, u) => ({
          table: i,
          column: l,
          row: a,
          cell: u,
          getValue: u.getValue,
          renderValue: u.renderValue,
        }),
        se(e.options, "debugCells")
      ),
    };
  return (
    e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}),
    s
  );
}
function Lk(e, t, n, r) {
  var o, s;
  const l = { ...e._getDefaultColumnDef(), ...t },
    a = l.accessorKey;
  let u =
      (o = (s = l.id) != null ? s : a ? a.replace(".", "_") : void 0) != null
        ? o
        : typeof l.header == "string"
        ? l.header
        : void 0,
    d;
  if (
    (l.accessorFn
      ? (d = l.accessorFn)
      : a &&
        (a.includes(".")
          ? (d = (f) => {
              let h = f;
              for (const y of a.split(".")) {
                var x;
                h = (x = h) == null ? void 0 : x[y];
              }
              return h;
            })
          : (d = (f) => f[l.accessorKey])),
    !u)
  )
    throw new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: d,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: oe(
      () => [!0],
      () => {
        var f;
        return [
          p,
          ...((f = p.columns) == null
            ? void 0
            : f.flatMap((h) => h.getFlatColumns())),
        ];
      },
      se(e.options, "debugColumns")
    ),
    getLeafColumns: oe(
      () => [e._getOrderColumnsFn()],
      (f) => {
        var h;
        if ((h = p.columns) != null && h.length) {
          let x = p.columns.flatMap((y) => y.getLeafColumns());
          return f(x);
        }
        return [p];
      },
      se(e.options, "debugColumns")
    ),
  };
  for (const f of e._features) f.createColumn == null || f.createColumn(p, e);
  return p;
}
const vt = "debugHeaders";
function Mm(e, t, n) {
  var r;
  let s = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const i = [],
        l = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), i.push(a);
        };
      return l(s), i;
    },
    getContext: () => ({ table: e, header: s, column: t }),
  };
  return (
    e._features.forEach((i) => {
      i.createHeader == null || i.createHeader(s, e);
    }),
    s
  );
}
const Vk = {
  createTable: (e) => {
    (e.getHeaderGroups = oe(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, n, r, o) => {
        var s, i;
        const l =
            (s =
              r == null
                ? void 0
                : r.map((p) => n.find((f) => f.id === p)).filter(Boolean)) !=
            null
              ? s
              : [],
          a =
            (i =
              o == null
                ? void 0
                : o.map((p) => n.find((f) => f.id === p)).filter(Boolean)) !=
            null
              ? i
              : [],
          u = n.filter(
            (p) =>
              !(r != null && r.includes(p.id)) &&
              !(o != null && o.includes(p.id))
          );
        return zl(t, [...l, ...u, ...a], e);
      },
      se(e.options, vt)
    )),
      (e.getCenterHeaderGroups = oe(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, n, r, o) => (
          (n = n.filter(
            (s) =>
              !(r != null && r.includes(s.id)) &&
              !(o != null && o.includes(s.id))
          )),
          zl(t, n, e, "center")
        ),
        se(e.options, vt)
      )),
      (e.getLeftHeaderGroups = oe(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, n, r) => {
          var o;
          const s =
            (o =
              r == null
                ? void 0
                : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) !=
            null
              ? o
              : [];
          return zl(t, s, e, "left");
        },
        se(e.options, vt)
      )),
      (e.getRightHeaderGroups = oe(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, n, r) => {
          var o;
          const s =
            (o =
              r == null
                ? void 0
                : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) !=
            null
              ? o
              : [];
          return zl(t, s, e, "right");
        },
        se(e.options, vt)
      )),
      (e.getFooterGroups = oe(
        () => [e.getHeaderGroups()],
        (t) => [...t].reverse(),
        se(e.options, vt)
      )),
      (e.getLeftFooterGroups = oe(
        () => [e.getLeftHeaderGroups()],
        (t) => [...t].reverse(),
        se(e.options, vt)
      )),
      (e.getCenterFooterGroups = oe(
        () => [e.getCenterHeaderGroups()],
        (t) => [...t].reverse(),
        se(e.options, vt)
      )),
      (e.getRightFooterGroups = oe(
        () => [e.getRightHeaderGroups()],
        (t) => [...t].reverse(),
        se(e.options, vt)
      )),
      (e.getFlatHeaders = oe(
        () => [e.getHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        se(e.options, vt)
      )),
      (e.getLeftFlatHeaders = oe(
        () => [e.getLeftHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        se(e.options, vt)
      )),
      (e.getCenterFlatHeaders = oe(
        () => [e.getCenterHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        se(e.options, vt)
      )),
      (e.getRightFlatHeaders = oe(
        () => [e.getRightHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        se(e.options, vt)
      )),
      (e.getCenterLeafHeaders = oe(
        () => [e.getCenterFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        se(e.options, vt)
      )),
      (e.getLeftLeafHeaders = oe(
        () => [e.getLeftFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        se(e.options, vt)
      )),
      (e.getRightLeafHeaders = oe(
        () => [e.getRightFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        se(e.options, vt)
      )),
      (e.getLeafHeaders = oe(
        () => [
          e.getLeftHeaderGroups(),
          e.getCenterHeaderGroups(),
          e.getRightHeaderGroups(),
        ],
        (t, n, r) => {
          var o, s, i, l, a, u;
          return [
            ...((o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : []),
            ...((i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : []),
            ...((a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []),
          ]
            .map((d) => d.getLeafHeaders())
            .flat();
        },
        se(e.options, vt)
      ));
  },
};
function zl(e, t, n, r) {
  var o, s;
  let i = 0;
  const l = function (f, h) {
    h === void 0 && (h = 1),
      (i = Math.max(i, h)),
      f
        .filter((x) => x.getIsVisible())
        .forEach((x) => {
          var y;
          (y = x.columns) != null && y.length && l(x.columns, h + 1);
        }, 0);
  };
  l(e);
  let a = [];
  const u = (f, h) => {
      const x = {
          depth: h,
          id: [r, `${h}`].filter(Boolean).join("_"),
          headers: [],
        },
        y = [];
      f.forEach((S) => {
        const v = [...y].reverse()[0],
          g = S.column.depth === x.depth;
        let w,
          C = !1;
        if (
          (g && S.column.parent
            ? (w = S.column.parent)
            : ((w = S.column), (C = !0)),
          v && (v == null ? void 0 : v.column) === w)
        )
          v.subHeaders.push(S);
        else {
          const E = Mm(n, w, {
            id: [r, h, w.id, S == null ? void 0 : S.id]
              .filter(Boolean)
              .join("_"),
            isPlaceholder: C,
            placeholderId: C
              ? `${y.filter((N) => N.column === w).length}`
              : void 0,
            depth: h,
            index: y.length,
          });
          E.subHeaders.push(S), y.push(E);
        }
        x.headers.push(S), (S.headerGroup = x);
      }),
        a.push(x),
        h > 0 && u(y, h - 1);
    },
    d = t.map((f, h) => Mm(n, f, { depth: i, index: h }));
  u(d, i - 1), a.reverse();
  const p = (f) =>
    f
      .filter((x) => x.column.getIsVisible())
      .map((x) => {
        let y = 0,
          S = 0,
          v = [0];
        x.subHeaders && x.subHeaders.length
          ? ((v = []),
            p(x.subHeaders).forEach((w) => {
              let { colSpan: C, rowSpan: E } = w;
              (y += C), v.push(E);
            }))
          : (y = 1);
        const g = Math.min(...v);
        return (
          (S = S + g),
          (x.colSpan = y),
          (x.rowSpan = S),
          { colSpan: y, rowSpan: S }
        );
      });
  return p((o = (s = a[0]) == null ? void 0 : s.headers) != null ? o : []), a;
}
const dp = (e, t, n, r, o, s, i) => {
    let l = {
      id: t,
      index: r,
      original: n,
      depth: o,
      parentId: i,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (a) => {
        if (l._valuesCache.hasOwnProperty(a)) return l._valuesCache[a];
        const u = e.getColumn(a);
        if (u != null && u.accessorFn)
          return (
            (l._valuesCache[a] = u.accessorFn(l.original, r)), l._valuesCache[a]
          );
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a))
          return l._uniqueValuesCache[a];
        const u = e.getColumn(a);
        if (u != null && u.accessorFn)
          return u.columnDef.getUniqueValues
            ? ((l._uniqueValuesCache[a] = u.columnDef.getUniqueValues(
                l.original,
                r
              )),
              l._uniqueValuesCache[a])
            : ((l._uniqueValuesCache[a] = [l.getValue(a)]),
              l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var u;
        return (u = l.getValue(a)) != null ? u : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Fk(l.subRows, (a) => a.subRows),
      getParentRow: () => (l.parentId ? e.getRow(l.parentId, !0) : void 0),
      getParentRows: () => {
        let a = [],
          u = l;
        for (;;) {
          const d = u.getParentRow();
          if (!d) break;
          a.push(d), (u = d);
        }
        return a.reverse();
      },
      getAllCells: oe(
        () => [e.getAllLeafColumns()],
        (a) => a.map((u) => Dk(e, l, u, u.id)),
        se(e.options, "debugRows")
      ),
      _getAllCellsByColumnId: oe(
        () => [l.getAllCells()],
        (a) => a.reduce((u, d) => ((u[d.column.id] = d), u), {}),
        se(e.options, "debugRows")
      ),
    };
    for (let a = 0; a < e._features.length; a++) {
      const u = e._features[a];
      u == null || u.createRow == null || u.createRow(l, e);
    }
    return l;
  },
  zk = {
    createColumn: (e, t) => {
      (e._getFacetedRowModel =
        t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
        (e.getFacetedRowModel = () =>
          e._getFacetedRowModel
            ? e._getFacetedRowModel()
            : t.getPreFilteredRowModel()),
        (e._getFacetedUniqueValues =
          t.options.getFacetedUniqueValues &&
          t.options.getFacetedUniqueValues(t, e.id)),
        (e.getFacetedUniqueValues = () =>
          e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
        (e._getFacetedMinMaxValues =
          t.options.getFacetedMinMaxValues &&
          t.options.getFacetedMinMaxValues(t, e.id)),
        (e.getFacetedMinMaxValues = () => {
          if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
        });
    },
  },
  Jy = (e, t, n) => {
    var r;
    const o = n.toLowerCase();
    return !!(
      !(
        (r = e.getValue(t)) == null ||
        (r = r.toString()) == null ||
        (r = r.toLowerCase()) == null
      ) && r.includes(o)
    );
  };
Jy.autoRemove = (e) => fn(e);
const ex = (e, t, n) => {
  var r;
  return !!(
    !((r = e.getValue(t)) == null || (r = r.toString()) == null) &&
    r.includes(n)
  );
};
ex.autoRemove = (e) => fn(e);
const tx = (e, t, n) => {
  var r;
  return (
    ((r = e.getValue(t)) == null || (r = r.toString()) == null
      ? void 0
      : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase())
  );
};
tx.autoRemove = (e) => fn(e);
const nx = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
nx.autoRemove = (e) => fn(e) || !(e != null && e.length);
const rx = (e, t, n) =>
  !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
rx.autoRemove = (e) => fn(e) || !(e != null && e.length);
const ox = (e, t, n) =>
  n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
ox.autoRemove = (e) => fn(e) || !(e != null && e.length);
const sx = (e, t, n) => e.getValue(t) === n;
sx.autoRemove = (e) => fn(e);
const ix = (e, t, n) => e.getValue(t) == n;
ix.autoRemove = (e) => fn(e);
const fp = (e, t, n) => {
  let [r, o] = n;
  const s = e.getValue(t);
  return s >= r && s <= o;
};
fp.resolveFilterValue = (e) => {
  let [t, n] = e,
    r = typeof t != "number" ? parseFloat(t) : t,
    o = typeof n != "number" ? parseFloat(n) : n,
    s = t === null || Number.isNaN(r) ? -1 / 0 : r,
    i = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (s > i) {
    const l = s;
    (s = i), (i = l);
  }
  return [s, i];
};
fp.autoRemove = (e) => fn(e) || (fn(e[0]) && fn(e[1]));
const Un = {
  includesString: Jy,
  includesStringSensitive: ex,
  equalsString: tx,
  arrIncludes: nx,
  arrIncludesAll: rx,
  arrIncludesSome: ox,
  equals: sx,
  weakEquals: ix,
  inNumberRange: fp,
};
function fn(e) {
  return e == null || e === "";
}
const Bk = {
  getDefaultColumnDef: () => ({ filterFn: "auto" }),
  getInitialState: (e) => ({ columnFilters: [], ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Wt("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    (e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0],
        r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string"
        ? Un.includesString
        : typeof r == "number"
        ? Un.inNumberRange
        : typeof r == "boolean" || (r !== null && typeof r == "object")
        ? Un.equals
        : Array.isArray(r)
        ? Un.arrIncludes
        : Un.weakEquals;
    }),
      (e.getFilterFn = () => {
        var n, r;
        return bu(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : e.columnDef.filterFn === "auto"
          ? e.getAutoFilterFn()
          : (n =
              (r = t.options.filterFns) == null
                ? void 0
                : r[e.columnDef.filterFn]) != null
          ? n
          : Un[e.columnDef.filterFn];
      }),
      (e.getCanFilter = () => {
        var n, r, o;
        return (
          ((n = e.columnDef.enableColumnFilter) != null ? n : !0) &&
          ((r = t.options.enableColumnFilters) != null ? r : !0) &&
          ((o = t.options.enableFilters) != null ? o : !0) &&
          !!e.accessorFn
        );
      }),
      (e.getIsFiltered = () => e.getFilterIndex() > -1),
      (e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null ||
          (n = n.find((r) => r.id === e.id)) == null
          ? void 0
          : n.value;
      }),
      (e.getFilterIndex = () => {
        var n, r;
        return (n =
          (r = t.getState().columnFilters) == null
            ? void 0
            : r.findIndex((o) => o.id === e.id)) != null
          ? n
          : -1;
      }),
      (e.setFilterValue = (n) => {
        t.setColumnFilters((r) => {
          const o = e.getFilterFn(),
            s = r == null ? void 0 : r.find((d) => d.id === e.id),
            i = Er(n, s ? s.value : void 0);
          if (Om(o, i, e)) {
            var l;
            return (l = r == null ? void 0 : r.filter((d) => d.id !== e.id)) !=
              null
              ? l
              : [];
          }
          const a = { id: e.id, value: i };
          if (s) {
            var u;
            return (u =
              r == null ? void 0 : r.map((d) => (d.id === e.id ? a : d))) !=
              null
              ? u
              : [];
          }
          return r != null && r.length ? [...r, a] : [a];
        });
      });
  },
  createRow: (e, t) => {
    (e.columnFilters = {}), (e.columnFiltersMeta = {});
  },
  createTable: (e) => {
    (e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(),
        r = (o) => {
          var s;
          return (s = Er(t, o)) == null
            ? void 0
            : s.filter((i) => {
                const l = n.find((a) => a.id === i.id);
                if (l) {
                  const a = l.getFilterFn();
                  if (Om(a, i.value, l)) return !1;
                }
                return !0;
              });
        };
      e.options.onColumnFiltersChange == null ||
        e.options.onColumnFiltersChange(r);
    }),
      (e.resetColumnFilters = (t) => {
        var n, r;
        e.setColumnFilters(
          t
            ? []
            : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) !=
              null
            ? n
            : []
        );
      }),
      (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
      (e.getFilteredRowModel = () => (
        !e._getFilteredRowModel &&
          e.options.getFilteredRowModel &&
          (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
        e.options.manualFiltering || !e._getFilteredRowModel
          ? e.getPreFilteredRowModel()
          : e._getFilteredRowModel()
      ));
  },
};
function Om(e, t, n) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, n) : !1) ||
    typeof t > "u" ||
    (typeof t == "string" && !t)
  );
}
const Uk = (e, t, n) =>
    n.reduce((r, o) => {
      const s = o.getValue(e);
      return r + (typeof s == "number" ? s : 0);
    }, 0),
  Hk = (e, t, n) => {
    let r;
    return (
      n.forEach((o) => {
        const s = o.getValue(e);
        s != null && (r > s || (r === void 0 && s >= s)) && (r = s);
      }),
      r
    );
  },
  Wk = (e, t, n) => {
    let r;
    return (
      n.forEach((o) => {
        const s = o.getValue(e);
        s != null && (r < s || (r === void 0 && s >= s)) && (r = s);
      }),
      r
    );
  },
  Zk = (e, t, n) => {
    let r, o;
    return (
      n.forEach((s) => {
        const i = s.getValue(e);
        i != null &&
          (r === void 0
            ? i >= i && (r = o = i)
            : (r > i && (r = i), o < i && (o = i)));
      }),
      [r, o]
    );
  },
  Gk = (e, t) => {
    let n = 0,
      r = 0;
    if (
      (t.forEach((o) => {
        let s = o.getValue(e);
        s != null && (s = +s) >= s && (++n, (r += s));
      }),
      n)
    )
      return r / n;
  },
  Kk = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!Ik(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2),
      o = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  },
  Yk = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()),
  Qk = (e, t) => new Set(t.map((n) => n.getValue(e))).size,
  qk = (e, t) => t.length,
  Sc = {
    sum: Uk,
    min: Hk,
    max: Wk,
    extent: Zk,
    mean: Gk,
    median: Kk,
    unique: Yk,
    uniqueCount: Qk,
    count: qk,
  },
  Xk = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return (t =
          (n = e.getValue()) == null || n.toString == null
            ? void 0
            : n.toString()) != null
          ? t
          : null;
      },
      aggregationFn: "auto",
    }),
    getInitialState: (e) => ({ grouping: [], ...e }),
    getDefaultOptions: (e) => ({
      onGroupingChange: Wt("grouping", e),
      groupedColumnMode: "reorder",
    }),
    createColumn: (e, t) => {
      (e.toggleGrouping = () => {
        t.setGrouping((n) =>
          n != null && n.includes(e.id)
            ? n.filter((r) => r !== e.id)
            : [...(n ?? []), e.id]
        );
      }),
        (e.getCanGroup = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableGrouping) != null ? n : !0) &&
            ((r = t.options.enableGrouping) != null ? r : !0) &&
            (!!e.accessorFn || !!e.columnDef.getGroupingValue)
          );
        }),
        (e.getIsGrouped = () => {
          var n;
          return (n = t.getState().grouping) == null
            ? void 0
            : n.includes(e.id);
        }),
        (e.getGroupedIndex = () => {
          var n;
          return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
        }),
        (e.getToggleGroupingHandler = () => {
          const n = e.getCanGroup();
          return () => {
            n && e.toggleGrouping();
          };
        }),
        (e.getAutoAggregationFn = () => {
          const n = t.getCoreRowModel().flatRows[0],
            r = n == null ? void 0 : n.getValue(e.id);
          if (typeof r == "number") return Sc.sum;
          if (Object.prototype.toString.call(r) === "[object Date]")
            return Sc.extent;
        }),
        (e.getAggregationFn = () => {
          var n, r;
          if (!e) throw new Error();
          return bu(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : e.columnDef.aggregationFn === "auto"
            ? e.getAutoAggregationFn()
            : (n =
                (r = t.options.aggregationFns) == null
                  ? void 0
                  : r[e.columnDef.aggregationFn]) != null
            ? n
            : Sc[e.columnDef.aggregationFn];
        });
    },
    createTable: (e) => {
      (e.setGrouping = (t) =>
        e.options.onGroupingChange == null
          ? void 0
          : e.options.onGroupingChange(t)),
        (e.resetGrouping = (t) => {
          var n, r;
          e.setGrouping(
            t
              ? []
              : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null
              ? n
              : []
          );
        }),
        (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
        (e.getGroupedRowModel = () => (
          !e._getGroupedRowModel &&
            e.options.getGroupedRowModel &&
            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
          e.options.manualGrouping || !e._getGroupedRowModel
            ? e.getPreGroupedRowModel()
            : e._getGroupedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.getIsGrouped = () => !!e.groupingColumnId),
        (e.getGroupingValue = (n) => {
          if (e._groupingValuesCache.hasOwnProperty(n))
            return e._groupingValuesCache[n];
          const r = t.getColumn(n);
          return r != null && r.columnDef.getGroupingValue
            ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(
                e.original
              )),
              e._groupingValuesCache[n])
            : e.getValue(n);
        }),
        (e._groupingValuesCache = {});
    },
    createCell: (e, t, n, r) => {
      (e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
        (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
        (e.getIsAggregated = () => {
          var o;
          return (
            !e.getIsGrouped() &&
            !e.getIsPlaceholder() &&
            !!((o = n.subRows) != null && o.length)
          );
        });
    },
  };
function Jk(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  const r = e.filter((s) => !t.includes(s.id));
  return n === "remove"
    ? r
    : [...t.map((s) => e.find((i) => i.id === s)).filter(Boolean), ...r];
}
const eR = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: Wt("columnOrder", e) }),
    createColumn: (e, t) => {
      (e.getIndex = oe(
        (n) => [vi(t, n)],
        (n) => n.findIndex((r) => r.id === e.id),
        se(t.options, "debugColumns")
      )),
        (e.getIsFirstColumn = (n) => {
          var r;
          return ((r = vi(t, n)[0]) == null ? void 0 : r.id) === e.id;
        }),
        (e.getIsLastColumn = (n) => {
          var r;
          const o = vi(t, n);
          return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
        });
    },
    createTable: (e) => {
      (e.setColumnOrder = (t) =>
        e.options.onColumnOrderChange == null
          ? void 0
          : e.options.onColumnOrderChange(t)),
        (e.resetColumnOrder = (t) => {
          var n;
          e.setColumnOrder(
            t ? [] : (n = e.initialState.columnOrder) != null ? n : []
          );
        }),
        (e._getOrderColumnsFn = oe(
          () => [
            e.getState().columnOrder,
            e.getState().grouping,
            e.options.groupedColumnMode,
          ],
          (t, n, r) => (o) => {
            let s = [];
            if (!(t != null && t.length)) s = o;
            else {
              const i = [...t],
                l = [...o];
              for (; l.length && i.length; ) {
                const a = i.shift(),
                  u = l.findIndex((d) => d.id === a);
                u > -1 && s.push(l.splice(u, 1)[0]);
              }
              s = [...s, ...l];
            }
            return Jk(s, n, r);
          },
          se(e.options, "debugTable")
        ));
    },
  },
  _c = () => ({ left: [], right: [] }),
  tR = {
    getInitialState: (e) => ({ columnPinning: _c(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Wt("columnPinning", e),
    }),
    createColumn: (e, t) => {
      (e.pin = (n) => {
        const r = e
          .getLeafColumns()
          .map((o) => o.id)
          .filter(Boolean);
        t.setColumnPinning((o) => {
          var s, i;
          if (n === "right") {
            var l, a;
            return {
              left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter(
                (p) => !(r != null && r.includes(p))
              ),
              right: [
                ...((a = o == null ? void 0 : o.right) != null ? a : []).filter(
                  (p) => !(r != null && r.includes(p))
                ),
                ...r,
              ],
            };
          }
          if (n === "left") {
            var u, d;
            return {
              left: [
                ...((u = o == null ? void 0 : o.left) != null ? u : []).filter(
                  (p) => !(r != null && r.includes(p))
                ),
                ...r,
              ],
              right: ((d = o == null ? void 0 : o.right) != null
                ? d
                : []
              ).filter((p) => !(r != null && r.includes(p))),
            };
          }
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter(
              (p) => !(r != null && r.includes(p))
            ),
            right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter(
              (p) => !(r != null && r.includes(p))
            ),
          };
        });
      }),
        (e.getCanPin = () =>
          e.getLeafColumns().some((r) => {
            var o, s, i;
            return (
              ((o = r.columnDef.enablePinning) != null ? o : !0) &&
              ((s =
                (i = t.options.enableColumnPinning) != null
                  ? i
                  : t.options.enablePinning) != null
                ? s
                : !0)
            );
          })),
        (e.getIsPinned = () => {
          const n = e.getLeafColumns().map((l) => l.id),
            { left: r, right: o } = t.getState().columnPinning,
            s = n.some((l) => (r == null ? void 0 : r.includes(l))),
            i = n.some((l) => (o == null ? void 0 : o.includes(l)));
          return s ? "left" : i ? "right" : !1;
        }),
        (e.getPinnedIndex = () => {
          var n, r;
          const o = e.getIsPinned();
          return o
            ? (n =
                (r = t.getState().columnPinning) == null || (r = r[o]) == null
                  ? void 0
                  : r.indexOf(e.id)) != null
              ? n
              : -1
            : 0;
        });
    },
    createRow: (e, t) => {
      (e.getCenterVisibleCells = oe(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (n, r, o) => {
          const s = [...(r ?? []), ...(o ?? [])];
          return n.filter((i) => !s.includes(i.column.id));
        },
        se(t.options, "debugRows")
      )),
        (e.getLeftVisibleCells = oe(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (n, r) =>
            (r ?? [])
              .map((s) => n.find((i) => i.column.id === s))
              .filter(Boolean)
              .map((s) => ({ ...s, position: "left" })),
          se(t.options, "debugRows")
        )),
        (e.getRightVisibleCells = oe(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (n, r) =>
            (r ?? [])
              .map((s) => n.find((i) => i.column.id === s))
              .filter(Boolean)
              .map((s) => ({ ...s, position: "right" })),
          se(t.options, "debugRows")
        ));
    },
    createTable: (e) => {
      (e.setColumnPinning = (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) => {
          var n, r;
          return e.setColumnPinning(
            t
              ? _c()
              : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) !=
                null
              ? n
              : _c()
          );
        }),
        (e.getIsSomeColumnsPinned = (t) => {
          var n;
          const r = e.getState().columnPinning;
          if (!t) {
            var o, s;
            return !!(
              ((o = r.left) != null && o.length) ||
              ((s = r.right) != null && s.length)
            );
          }
          return !!((n = r[t]) != null && n.length);
        }),
        (e.getLeftLeafColumns = oe(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (t, n) =>
            (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean),
          se(e.options, "debugColumns")
        )),
        (e.getRightLeafColumns = oe(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (t, n) =>
            (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean),
          se(e.options, "debugColumns")
        )),
        (e.getCenterLeafColumns = oe(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (t, n, r) => {
            const o = [...(n ?? []), ...(r ?? [])];
            return t.filter((s) => !o.includes(s.id));
          },
          se(e.options, "debugColumns")
        ));
    },
  },
  Bl = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
  Cc = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  nR = {
    getDefaultColumnDef: () => Bl,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: Cc(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Wt("columnSizing", e),
      onColumnSizingInfoChange: Wt("columnSizingInfo", e),
    }),
    createColumn: (e, t) => {
      (e.getSize = () => {
        var n, r, o;
        const s = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            (n = e.columnDef.minSize) != null ? n : Bl.minSize,
            (r = s ?? e.columnDef.size) != null ? r : Bl.size
          ),
          (o = e.columnDef.maxSize) != null ? o : Bl.maxSize
        );
      }),
        (e.getStart = oe(
          (n) => [n, vi(t, n), t.getState().columnSizing],
          (n, r) =>
            r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0),
          se(t.options, "debugColumns")
        )),
        (e.getAfter = oe(
          (n) => [n, vi(t, n), t.getState().columnSizing],
          (n, r) =>
            r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0),
          se(t.options, "debugColumns")
        )),
        (e.resetSize = () => {
          t.setColumnSizing((n) => {
            let { [e.id]: r, ...o } = n;
            return o;
          });
        }),
        (e.getCanResize = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableResizing) != null ? n : !0) &&
            ((r = t.options.enableColumnResizing) != null ? r : !0)
          );
        }),
        (e.getIsResizing = () =>
          t.getState().columnSizingInfo.isResizingColumn === e.id);
    },
    createHeader: (e, t) => {
      (e.getSize = () => {
        let n = 0;
        const r = (o) => {
          if (o.subHeaders.length) o.subHeaders.forEach(r);
          else {
            var s;
            n += (s = o.column.getSize()) != null ? s : 0;
          }
        };
        return r(e), n;
      }),
        (e.getStart = () => {
          if (e.index > 0) {
            const n = e.headerGroup.headers[e.index - 1];
            return n.getStart() + n.getSize();
          }
          return 0;
        }),
        (e.getResizeHandler = (n) => {
          const r = t.getColumn(e.column.id),
            o = r == null ? void 0 : r.getCanResize();
          return (s) => {
            if (
              !r ||
              !o ||
              (s.persist == null || s.persist(),
              bc(s) && s.touches && s.touches.length > 1)
            )
              return;
            const i = e.getSize(),
              l = e
                ? e
                    .getLeafHeaders()
                    .map((v) => [v.column.id, v.column.getSize()])
                : [[r.id, r.getSize()]],
              a = bc(s) ? Math.round(s.touches[0].clientX) : s.clientX,
              u = {},
              d = (v, g) => {
                typeof g == "number" &&
                  (t.setColumnSizingInfo((w) => {
                    var C, E;
                    const N =
                        t.options.columnResizeDirection === "rtl" ? -1 : 1,
                      P =
                        (g -
                          ((C = w == null ? void 0 : w.startOffset) != null
                            ? C
                            : 0)) *
                        N,
                      _ = Math.max(
                        P /
                          ((E = w == null ? void 0 : w.startSize) != null
                            ? E
                            : 0),
                        -0.999999
                      );
                    return (
                      w.columnSizingStart.forEach((M) => {
                        let [j, A] = M;
                        u[j] = Math.round(Math.max(A + A * _, 0) * 100) / 100;
                      }),
                      { ...w, deltaOffset: P, deltaPercentage: _ }
                    );
                  }),
                  (t.options.columnResizeMode === "onChange" || v === "end") &&
                    t.setColumnSizing((w) => ({ ...w, ...u })));
              },
              p = (v) => d("move", v),
              f = (v) => {
                d("end", v),
                  t.setColumnSizingInfo((g) => ({
                    ...g,
                    isResizingColumn: !1,
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    columnSizingStart: [],
                  }));
              },
              h = n || typeof document < "u" ? document : null,
              x = {
                moveHandler: (v) => p(v.clientX),
                upHandler: (v) => {
                  h == null ||
                    h.removeEventListener("mousemove", x.moveHandler),
                    h == null || h.removeEventListener("mouseup", x.upHandler),
                    f(v.clientX);
                },
              },
              y = {
                moveHandler: (v) => (
                  v.cancelable && (v.preventDefault(), v.stopPropagation()),
                  p(v.touches[0].clientX),
                  !1
                ),
                upHandler: (v) => {
                  var g;
                  h == null ||
                    h.removeEventListener("touchmove", y.moveHandler),
                    h == null || h.removeEventListener("touchend", y.upHandler),
                    v.cancelable && (v.preventDefault(), v.stopPropagation()),
                    f((g = v.touches[0]) == null ? void 0 : g.clientX);
                },
              },
              S = rR() ? { passive: !1 } : !1;
            bc(s)
              ? (h == null || h.addEventListener("touchmove", y.moveHandler, S),
                h == null || h.addEventListener("touchend", y.upHandler, S))
              : (h == null || h.addEventListener("mousemove", x.moveHandler, S),
                h == null || h.addEventListener("mouseup", x.upHandler, S)),
              t.setColumnSizingInfo((v) => ({
                ...v,
                startOffset: a,
                startSize: i,
                deltaOffset: 0,
                deltaPercentage: 0,
                columnSizingStart: l,
                isResizingColumn: r.id,
              }));
          };
        });
    },
    createTable: (e) => {
      (e.setColumnSizing = (t) =>
        e.options.onColumnSizingChange == null
          ? void 0
          : e.options.onColumnSizingChange(t)),
        (e.setColumnSizingInfo = (t) =>
          e.options.onColumnSizingInfoChange == null
            ? void 0
            : e.options.onColumnSizingInfoChange(t)),
        (e.resetColumnSizing = (t) => {
          var n;
          e.setColumnSizing(
            t ? {} : (n = e.initialState.columnSizing) != null ? n : {}
          );
        }),
        (e.resetHeaderSizeInfo = (t) => {
          var n;
          e.setColumnSizingInfo(
            t ? Cc() : (n = e.initialState.columnSizingInfo) != null ? n : Cc()
          );
        }),
        (e.getTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getLeftTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getLeftHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getCenterTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getCenterHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getRightTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getRightHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        });
    },
  };
let Ul = null;
function rR() {
  if (typeof Ul == "boolean") return Ul;
  let e = !1;
  try {
    const t = {
        get passive() {
          return (e = !0), !1;
        },
      },
      n = () => {};
    window.addEventListener("test", n, t),
      window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return (Ul = e), Ul;
}
function bc(e) {
  return e.type === "touchstart";
}
const oR = {
  getInitialState: (e) => ({ columnVisibility: {}, ...e }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Wt("columnVisibility", e),
  }),
  createColumn: (e, t) => {
    (e.toggleVisibility = (n) => {
      e.getCanHide() &&
        t.setColumnVisibility((r) => ({
          ...r,
          [e.id]: n ?? !e.getIsVisible(),
        }));
    }),
      (e.getIsVisible = () => {
        var n, r;
        const o = e.columns;
        return (n = o.length
          ? o.some((s) => s.getIsVisible())
          : (r = t.getState().columnVisibility) == null
          ? void 0
          : r[e.id]) != null
          ? n
          : !0;
      }),
      (e.getCanHide = () => {
        var n, r;
        return (
          ((n = e.columnDef.enableHiding) != null ? n : !0) &&
          ((r = t.options.enableHiding) != null ? r : !0)
        );
      }),
      (e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      });
  },
  createRow: (e, t) => {
    (e._getAllVisibleCells = oe(
      () => [e.getAllCells(), t.getState().columnVisibility],
      (n) => n.filter((r) => r.column.getIsVisible()),
      se(t.options, "debugRows")
    )),
      (e.getVisibleCells = oe(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (n, r, o) => [...n, ...r, ...o],
        se(t.options, "debugRows")
      ));
  },
  createTable: (e) => {
    const t = (n, r) =>
      oe(
        () => [
          r(),
          r()
            .filter((o) => o.getIsVisible())
            .map((o) => o.id)
            .join("_"),
        ],
        (o) =>
          o.filter((s) => (s.getIsVisible == null ? void 0 : s.getIsVisible())),
        se(e.options, "debugColumns")
      );
    (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () =>
      e.getAllFlatColumns()
    )),
      (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () =>
        e.getAllLeafColumns()
      )),
      (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () =>
        e.getLeftLeafColumns()
      )),
      (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () =>
        e.getRightLeafColumns()
      )),
      (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () =>
        e.getCenterLeafColumns()
      )),
      (e.setColumnVisibility = (n) =>
        e.options.onColumnVisibilityChange == null
          ? void 0
          : e.options.onColumnVisibilityChange(n)),
      (e.resetColumnVisibility = (n) => {
        var r;
        e.setColumnVisibility(
          n ? {} : (r = e.initialState.columnVisibility) != null ? r : {}
        );
      }),
      (e.toggleAllColumnsVisible = (n) => {
        var r;
        (n = (r = n) != null ? r : !e.getIsAllColumnsVisible()),
          e.setColumnVisibility(
            e
              .getAllLeafColumns()
              .reduce(
                (o, s) => ({
                  ...o,
                  [s.id]: n || !(s.getCanHide != null && s.getCanHide()),
                }),
                {}
              )
          );
      }),
      (e.getIsAllColumnsVisible = () =>
        !e
          .getAllLeafColumns()
          .some((n) => !(n.getIsVisible != null && n.getIsVisible()))),
      (e.getIsSomeColumnsVisible = () =>
        e
          .getAllLeafColumns()
          .some((n) => (n.getIsVisible == null ? void 0 : n.getIsVisible()))),
      (e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var r;
        e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
      });
  },
};
function vi(e, t) {
  return t
    ? t === "center"
      ? e.getCenterVisibleLeafColumns()
      : t === "left"
      ? e.getLeftVisibleLeafColumns()
      : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
const sR = {
    createTable: (e) => {
      (e._getGlobalFacetedRowModel =
        e.options.getFacetedRowModel &&
        e.options.getFacetedRowModel(e, "__global__")),
        (e.getGlobalFacetedRowModel = () =>
          e.options.manualFiltering || !e._getGlobalFacetedRowModel
            ? e.getPreFilteredRowModel()
            : e._getGlobalFacetedRowModel()),
        (e._getGlobalFacetedUniqueValues =
          e.options.getFacetedUniqueValues &&
          e.options.getFacetedUniqueValues(e, "__global__")),
        (e.getGlobalFacetedUniqueValues = () =>
          e._getGlobalFacetedUniqueValues
            ? e._getGlobalFacetedUniqueValues()
            : new Map()),
        (e._getGlobalFacetedMinMaxValues =
          e.options.getFacetedMinMaxValues &&
          e.options.getFacetedMinMaxValues(e, "__global__")),
        (e.getGlobalFacetedMinMaxValues = () => {
          if (e._getGlobalFacetedMinMaxValues)
            return e._getGlobalFacetedMinMaxValues();
        });
    },
  },
  iR = {
    getInitialState: (e) => ({ globalFilter: void 0, ...e }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Wt("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const r =
          (n = e.getCoreRowModel().flatRows[0]) == null ||
          (n = n._getAllCellsByColumnId()[t.id]) == null
            ? void 0
            : n.getValue();
        return typeof r == "string" || typeof r == "number";
      },
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, r, o, s;
        return (
          ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) &&
          ((r = t.options.enableGlobalFilter) != null ? r : !0) &&
          ((o = t.options.enableFilters) != null ? o : !0) &&
          ((s =
            t.options.getColumnCanGlobalFilter == null
              ? void 0
              : t.options.getColumnCanGlobalFilter(e)) != null
            ? s
            : !0) &&
          !!e.accessorFn
        );
      };
    },
    createTable: (e) => {
      (e.getGlobalAutoFilterFn = () => Un.includesString),
        (e.getGlobalFilterFn = () => {
          var t, n;
          const { globalFilterFn: r } = e.options;
          return bu(r)
            ? r
            : r === "auto"
            ? e.getGlobalAutoFilterFn()
            : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null
            ? t
            : Un[r];
        }),
        (e.setGlobalFilter = (t) => {
          e.options.onGlobalFilterChange == null ||
            e.options.onGlobalFilterChange(t);
        }),
        (e.resetGlobalFilter = (t) => {
          e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
        });
    },
  },
  lR = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Wt("expanded", e),
      paginateExpandedRows: !0,
    }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      (e._autoResetExpanded = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (r =
            (o = e.options.autoResetAll) != null
              ? o
              : e.options.autoResetExpanded) != null
            ? r
            : !e.options.manualExpanding
        ) {
          if (n) return;
          (n = !0),
            e._queue(() => {
              e.resetExpanded(), (n = !1);
            });
        }
      }),
        (e.setExpanded = (r) =>
          e.options.onExpandedChange == null
            ? void 0
            : e.options.onExpandedChange(r)),
        (e.toggleAllRowsExpanded = (r) => {
          r ?? !e.getIsAllRowsExpanded()
            ? e.setExpanded(!0)
            : e.setExpanded({});
        }),
        (e.resetExpanded = (r) => {
          var o, s;
          e.setExpanded(
            r
              ? {}
              : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null
              ? o
              : {}
          );
        }),
        (e.getCanSomeRowsExpand = () =>
          e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand())),
        (e.getToggleAllRowsExpandedHandler = () => (r) => {
          r.persist == null || r.persist(), e.toggleAllRowsExpanded();
        }),
        (e.getIsSomeRowsExpanded = () => {
          const r = e.getState().expanded;
          return r === !0 || Object.values(r).some(Boolean);
        }),
        (e.getIsAllRowsExpanded = () => {
          const r = e.getState().expanded;
          return typeof r == "boolean"
            ? r === !0
            : !(
                !Object.keys(r).length ||
                e.getRowModel().flatRows.some((o) => !o.getIsExpanded())
              );
        }),
        (e.getExpandedDepth = () => {
          let r = 0;
          return (
            (e.getState().expanded === !0
              ? Object.keys(e.getRowModel().rowsById)
              : Object.keys(e.getState().expanded)
            ).forEach((s) => {
              const i = s.split(".");
              r = Math.max(r, i.length);
            }),
            r
          );
        }),
        (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
        (e.getExpandedRowModel = () => (
          !e._getExpandedRowModel &&
            e.options.getExpandedRowModel &&
            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
          e.options.manualExpanding || !e._getExpandedRowModel
            ? e.getPreExpandedRowModel()
            : e._getExpandedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          var o;
          const s = r === !0 ? !0 : !!(r != null && r[e.id]);
          let i = {};
          if (
            (r === !0
              ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
                  i[l] = !0;
                })
              : (i = r),
            (n = (o = n) != null ? o : !s),
            !s && n)
          )
            return { ...i, [e.id]: !0 };
          if (s && !n) {
            const { [e.id]: l, ...a } = i;
            return a;
          }
          return r;
        });
      }),
        (e.getIsExpanded = () => {
          var n;
          const r = t.getState().expanded;
          return !!((n =
            t.options.getIsRowExpanded == null
              ? void 0
              : t.options.getIsRowExpanded(e)) != null
            ? n
            : r === !0 || (r != null && r[e.id]));
        }),
        (e.getCanExpand = () => {
          var n, r, o;
          return (n =
            t.options.getRowCanExpand == null
              ? void 0
              : t.options.getRowCanExpand(e)) != null
            ? n
            : ((r = t.options.enableExpanding) != null ? r : !0) &&
                !!((o = e.subRows) != null && o.length);
        }),
        (e.getIsAllParentsExpanded = () => {
          let n = !0,
            r = e;
          for (; n && r.parentId; )
            (r = t.getRow(r.parentId, !0)), (n = r.getIsExpanded());
          return n;
        }),
        (e.getToggleExpandedHandler = () => {
          const n = e.getCanExpand();
          return () => {
            n && e.toggleExpanded();
          };
        });
    },
  },
  Ld = 0,
  Vd = 10,
  Ec = () => ({ pageIndex: Ld, pageSize: Vd }),
  aR = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...Ec(), ...(e == null ? void 0 : e.pagination) },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: Wt("pagination", e) }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      (e._autoResetPageIndex = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (r =
            (o = e.options.autoResetAll) != null
              ? o
              : e.options.autoResetPageIndex) != null
            ? r
            : !e.options.manualPagination
        ) {
          if (n) return;
          (n = !0),
            e._queue(() => {
              e.resetPageIndex(), (n = !1);
            });
        }
      }),
        (e.setPagination = (r) => {
          const o = (s) => Er(r, s);
          return e.options.onPaginationChange == null
            ? void 0
            : e.options.onPaginationChange(o);
        }),
        (e.resetPagination = (r) => {
          var o;
          e.setPagination(
            r ? Ec() : (o = e.initialState.pagination) != null ? o : Ec()
          );
        }),
        (e.setPageIndex = (r) => {
          e.setPagination((o) => {
            let s = Er(r, o.pageIndex);
            const i =
              typeof e.options.pageCount > "u" || e.options.pageCount === -1
                ? Number.MAX_SAFE_INTEGER
                : e.options.pageCount - 1;
            return (s = Math.max(0, Math.min(s, i))), { ...o, pageIndex: s };
          });
        }),
        (e.resetPageIndex = (r) => {
          var o, s;
          e.setPageIndex(
            r
              ? Ld
              : (o =
                  (s = e.initialState) == null || (s = s.pagination) == null
                    ? void 0
                    : s.pageIndex) != null
              ? o
              : Ld
          );
        }),
        (e.resetPageSize = (r) => {
          var o, s;
          e.setPageSize(
            r
              ? Vd
              : (o =
                  (s = e.initialState) == null || (s = s.pagination) == null
                    ? void 0
                    : s.pageSize) != null
              ? o
              : Vd
          );
        }),
        (e.setPageSize = (r) => {
          e.setPagination((o) => {
            const s = Math.max(1, Er(r, o.pageSize)),
              i = o.pageSize * o.pageIndex,
              l = Math.floor(i / s);
            return { ...o, pageIndex: l, pageSize: s };
          });
        }),
        (e.setPageCount = (r) =>
          e.setPagination((o) => {
            var s;
            let i = Er(r, (s = e.options.pageCount) != null ? s : -1);
            return (
              typeof i == "number" && (i = Math.max(-1, i)),
              { ...o, pageCount: i }
            );
          })),
        (e.getPageOptions = oe(
          () => [e.getPageCount()],
          (r) => {
            let o = [];
            return (
              r && r > 0 && (o = [...new Array(r)].fill(null).map((s, i) => i)),
              o
            );
          },
          se(e.options, "debugTable")
        )),
        (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
        (e.getCanNextPage = () => {
          const { pageIndex: r } = e.getState().pagination,
            o = e.getPageCount();
          return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
        }),
        (e.previousPage = () => e.setPageIndex((r) => r - 1)),
        (e.nextPage = () => e.setPageIndex((r) => r + 1)),
        (e.firstPage = () => e.setPageIndex(0)),
        (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
        (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
        (e.getPaginationRowModel = () => (
          !e._getPaginationRowModel &&
            e.options.getPaginationRowModel &&
            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
          e.options.manualPagination || !e._getPaginationRowModel
            ? e.getPrePaginationRowModel()
            : e._getPaginationRowModel()
        )),
        (e.getPageCount = () => {
          var r;
          return (r = e.options.pageCount) != null
            ? r
            : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
        }),
        (e.getRowCount = () => {
          var r;
          return (r = e.options.rowCount) != null
            ? r
            : e.getPrePaginationRowModel().rows.length;
        });
    },
  },
  $c = () => ({ top: [], bottom: [] }),
  uR = {
    getInitialState: (e) => ({ rowPinning: $c(), ...e }),
    getDefaultOptions: (e) => ({ onRowPinningChange: Wt("rowPinning", e) }),
    createRow: (e, t) => {
      (e.pin = (n, r, o) => {
        const s = r
            ? e.getLeafRows().map((a) => {
                let { id: u } = a;
                return u;
              })
            : [],
          i = o
            ? e.getParentRows().map((a) => {
                let { id: u } = a;
                return u;
              })
            : [],
          l = new Set([...i, e.id, ...s]);
        t.setRowPinning((a) => {
          var u, d;
          if (n === "bottom") {
            var p, f;
            return {
              top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter(
                (y) => !(l != null && l.has(y))
              ),
              bottom: [
                ...((f = a == null ? void 0 : a.bottom) != null
                  ? f
                  : []
                ).filter((y) => !(l != null && l.has(y))),
                ...Array.from(l),
              ],
            };
          }
          if (n === "top") {
            var h, x;
            return {
              top: [
                ...((h = a == null ? void 0 : a.top) != null ? h : []).filter(
                  (y) => !(l != null && l.has(y))
                ),
                ...Array.from(l),
              ],
              bottom: ((x = a == null ? void 0 : a.bottom) != null
                ? x
                : []
              ).filter((y) => !(l != null && l.has(y))),
            };
          }
          return {
            top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter(
              (y) => !(l != null && l.has(y))
            ),
            bottom: ((d = a == null ? void 0 : a.bottom) != null
              ? d
              : []
            ).filter((y) => !(l != null && l.has(y))),
          };
        });
      }),
        (e.getCanPin = () => {
          var n;
          const { enableRowPinning: r, enablePinning: o } = t.options;
          return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
        }),
        (e.getIsPinned = () => {
          const n = [e.id],
            { top: r, bottom: o } = t.getState().rowPinning,
            s = n.some((l) => (r == null ? void 0 : r.includes(l))),
            i = n.some((l) => (o == null ? void 0 : o.includes(l)));
          return s ? "top" : i ? "bottom" : !1;
        }),
        (e.getPinnedIndex = () => {
          var n, r;
          const o = e.getIsPinned();
          if (!o) return -1;
          const s =
            (n = t._getPinnedRows(o)) == null
              ? void 0
              : n.map((i) => {
                  let { id: l } = i;
                  return l;
                });
          return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
        });
    },
    createTable: (e) => {
      (e.setRowPinning = (t) =>
        e.options.onRowPinningChange == null
          ? void 0
          : e.options.onRowPinningChange(t)),
        (e.resetRowPinning = (t) => {
          var n, r;
          return e.setRowPinning(
            t
              ? $c()
              : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) !=
                null
              ? n
              : $c()
          );
        }),
        (e.getIsSomeRowsPinned = (t) => {
          var n;
          const r = e.getState().rowPinning;
          if (!t) {
            var o, s;
            return !!(
              ((o = r.top) != null && o.length) ||
              ((s = r.bottom) != null && s.length)
            );
          }
          return !!((n = r[t]) != null && n.length);
        }),
        (e._getPinnedRows = oe(
          (t) => [e.getRowModel().rows, e.getState().rowPinning[t], t],
          (t, n, r) => {
            var o;
            return (
              (o = e.options.keepPinnedRows) == null || o
                ? (n ?? []).map((i) => {
                    const l = e.getRow(i, !0);
                    return l.getIsAllParentsExpanded() ? l : null;
                  })
                : (n ?? []).map((i) => t.find((l) => l.id === i))
            )
              .filter(Boolean)
              .map((i) => ({ ...i, position: r }));
          },
          se(e.options, "debugRows")
        )),
        (e.getTopRows = () => e._getPinnedRows("top")),
        (e.getBottomRows = () => e._getPinnedRows("bottom")),
        (e.getCenterRows = oe(
          () => [
            e.getRowModel().rows,
            e.getState().rowPinning.top,
            e.getState().rowPinning.bottom,
          ],
          (t, n, r) => {
            const o = new Set([...(n ?? []), ...(r ?? [])]);
            return t.filter((s) => !o.has(s.id));
          },
          se(e.options, "debugRows")
        ));
    },
  },
  cR = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Wt("rowSelection", e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => {
      (e.setRowSelection = (t) =>
        e.options.onRowSelectionChange == null
          ? void 0
          : e.options.onRowSelectionChange(t)),
        (e.resetRowSelection = (t) => {
          var n;
          return e.setRowSelection(
            t ? {} : (n = e.initialState.rowSelection) != null ? n : {}
          );
        }),
        (e.toggleAllRowsSelected = (t) => {
          e.setRowSelection((n) => {
            t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
            const r = { ...n },
              o = e.getPreGroupedRowModel().flatRows;
            return (
              t
                ? o.forEach((s) => {
                    s.getCanSelect() && (r[s.id] = !0);
                  })
                : o.forEach((s) => {
                    delete r[s.id];
                  }),
              r
            );
          });
        }),
        (e.toggleAllPageRowsSelected = (t) =>
          e.setRowSelection((n) => {
            const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(),
              o = { ...n };
            return (
              e.getRowModel().rows.forEach((s) => {
                zd(o, s.id, r, !0, e);
              }),
              o
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = oe(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? kc(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          se(e.options, "debugTable")
        )),
        (e.getFilteredSelectedRowModel = oe(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? kc(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          se(e.options, "debugTable")
        )),
        (e.getGroupedSelectedRowModel = oe(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? kc(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          se(e.options, "debugTable")
        )),
        (e.getIsAllRowsSelected = () => {
          const t = e.getFilteredRowModel().flatRows,
            { rowSelection: n } = e.getState();
          let r = !!(t.length && Object.keys(n).length);
          return (
            r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r
          );
        }),
        (e.getIsAllPageRowsSelected = () => {
          const t = e
              .getPaginationRowModel()
              .flatRows.filter((o) => o.getCanSelect()),
            { rowSelection: n } = e.getState();
          let r = !!t.length;
          return r && t.some((o) => !n[o.id]) && (r = !1), r;
        }),
        (e.getIsSomeRowsSelected = () => {
          var t;
          const n = Object.keys(
            (t = e.getState().rowSelection) != null ? t : {}
          ).length;
          return n > 0 && n < e.getFilteredRowModel().flatRows.length;
        }),
        (e.getIsSomePageRowsSelected = () => {
          const t = e.getPaginationRowModel().flatRows;
          return e.getIsAllPageRowsSelected()
            ? !1
            : t
                .filter((n) => n.getCanSelect())
                .some((n) => n.getIsSelected() || n.getIsSomeSelected());
        }),
        (e.getToggleAllRowsSelectedHandler = () => (t) => {
          e.toggleAllRowsSelected(t.target.checked);
        }),
        (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
          e.toggleAllPageRowsSelected(t.target.checked);
        });
    },
    createRow: (e, t) => {
      (e.toggleSelected = (n, r) => {
        const o = e.getIsSelected();
        t.setRowSelection((s) => {
          var i;
          if (((n = typeof n < "u" ? n : !o), e.getCanSelect() && o === n))
            return s;
          const l = { ...s };
          return (
            zd(
              l,
              e.id,
              n,
              (i = r == null ? void 0 : r.selectChildren) != null ? i : !0,
              t
            ),
            l
          );
        });
      }),
        (e.getIsSelected = () => {
          const { rowSelection: n } = t.getState();
          return pp(e, n);
        }),
        (e.getIsSomeSelected = () => {
          const { rowSelection: n } = t.getState();
          return Bd(e, n) === "some";
        }),
        (e.getIsAllSubRowsSelected = () => {
          const { rowSelection: n } = t.getState();
          return Bd(e, n) === "all";
        }),
        (e.getCanSelect = () => {
          var n;
          return typeof t.options.enableRowSelection == "function"
            ? t.options.enableRowSelection(e)
            : (n = t.options.enableRowSelection) != null
            ? n
            : !0;
        }),
        (e.getCanSelectSubRows = () => {
          var n;
          return typeof t.options.enableSubRowSelection == "function"
            ? t.options.enableSubRowSelection(e)
            : (n = t.options.enableSubRowSelection) != null
            ? n
            : !0;
        }),
        (e.getCanMultiSelect = () => {
          var n;
          return typeof t.options.enableMultiRowSelection == "function"
            ? t.options.enableMultiRowSelection(e)
            : (n = t.options.enableMultiRowSelection) != null
            ? n
            : !0;
        }),
        (e.getToggleSelectedHandler = () => {
          const n = e.getCanSelect();
          return (r) => {
            var o;
            n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
          };
        });
    },
  },
  zd = (e, t, n, r, o) => {
    var s;
    const i = o.getRow(t, !0);
    n
      ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]),
        i.getCanSelect() && (e[t] = !0))
      : delete e[t],
      r &&
        (s = i.subRows) != null &&
        s.length &&
        i.getCanSelectSubRows() &&
        i.subRows.forEach((l) => zd(e, l.id, n, r, o));
  };
function kc(e, t) {
  const n = e.getState().rowSelection,
    r = [],
    o = {},
    s = function (i, l) {
      return i
        .map((a) => {
          var u;
          const d = pp(a, n);
          if (
            (d && (r.push(a), (o[a.id] = a)),
            (u = a.subRows) != null &&
              u.length &&
              (a = { ...a, subRows: s(a.subRows) }),
            d)
          )
            return a;
        })
        .filter(Boolean);
    };
  return { rows: s(t.rows), flatRows: r, rowsById: o };
}
function pp(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Bd(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0,
    s = !1;
  return (
    e.subRows.forEach((i) => {
      if (
        !(s && !o) &&
        (i.getCanSelect() && (pp(i, t) ? (s = !0) : (o = !1)),
        i.subRows && i.subRows.length)
      ) {
        const l = Bd(i, t);
        l === "all" ? (s = !0) : (l === "some" && (s = !0), (o = !1));
      }
    }),
    o ? "all" : s ? "some" : !1
  );
}
const Ud = /([0-9]+)/gm,
  dR = (e, t, n) =>
    lx(Wr(e.getValue(n)).toLowerCase(), Wr(t.getValue(n)).toLowerCase()),
  fR = (e, t, n) => lx(Wr(e.getValue(n)), Wr(t.getValue(n))),
  pR = (e, t, n) =>
    hp(Wr(e.getValue(n)).toLowerCase(), Wr(t.getValue(n)).toLowerCase()),
  hR = (e, t, n) => hp(Wr(e.getValue(n)), Wr(t.getValue(n))),
  mR = (e, t, n) => {
    const r = e.getValue(n),
      o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  },
  gR = (e, t, n) => hp(e.getValue(n), t.getValue(n));
function hp(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Wr(e) {
  return typeof e == "number"
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ""
      : String(e)
    : typeof e == "string"
    ? e
    : "";
}
function lx(e, t) {
  const n = e.split(Ud).filter(Boolean),
    r = t.split(Ud).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(),
      s = r.shift(),
      i = parseInt(o, 10),
      l = parseInt(s, 10),
      a = [i, l].sort();
    if (isNaN(a[0])) {
      if (o > s) return 1;
      if (s > o) return -1;
      continue;
    }
    if (isNaN(a[1])) return isNaN(i) ? -1 : 1;
    if (i > l) return 1;
    if (l > i) return -1;
  }
  return n.length - r.length;
}
const Js = {
    alphanumeric: dR,
    alphanumericCaseSensitive: fR,
    text: pR,
    textCaseSensitive: hR,
    datetime: mR,
    basic: gR,
  },
  vR = {
    getInitialState: (e) => ({ sorting: [], ...e }),
    getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
    getDefaultOptions: (e) => ({
      onSortingChange: Wt("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey,
    }),
    createColumn: (e, t) => {
      (e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let r = !1;
        for (const o of n) {
          const s = o == null ? void 0 : o.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]")
            return Js.datetime;
          if (typeof s == "string" && ((r = !0), s.split(Ud).length > 1))
            return Js.alphanumeric;
        }
        return r ? Js.text : Js.basic;
      }),
        (e.getAutoSortDir = () => {
          const n = t.getFilteredRowModel().flatRows[0];
          return typeof (n == null ? void 0 : n.getValue(e.id)) == "string"
            ? "asc"
            : "desc";
        }),
        (e.getSortingFn = () => {
          var n, r;
          if (!e) throw new Error();
          return bu(e.columnDef.sortingFn)
            ? e.columnDef.sortingFn
            : e.columnDef.sortingFn === "auto"
            ? e.getAutoSortingFn()
            : (n =
                (r = t.options.sortingFns) == null
                  ? void 0
                  : r[e.columnDef.sortingFn]) != null
            ? n
            : Js[e.columnDef.sortingFn];
        }),
        (e.toggleSorting = (n, r) => {
          const o = e.getNextSortingOrder(),
            s = typeof n < "u" && n !== null;
          t.setSorting((i) => {
            const l = i == null ? void 0 : i.find((h) => h.id === e.id),
              a = i == null ? void 0 : i.findIndex((h) => h.id === e.id);
            let u = [],
              d,
              p = s ? n : o === "desc";
            if (
              (i != null && i.length && e.getCanMultiSort() && r
                ? l
                  ? (d = "toggle")
                  : (d = "add")
                : i != null && i.length && a !== i.length - 1
                ? (d = "replace")
                : l
                ? (d = "toggle")
                : (d = "replace"),
              d === "toggle" && (s || o || (d = "remove")),
              d === "add")
            ) {
              var f;
              (u = [...i, { id: e.id, desc: p }]),
                u.splice(
                  0,
                  u.length -
                    ((f = t.options.maxMultiSortColCount) != null
                      ? f
                      : Number.MAX_SAFE_INTEGER)
                );
            } else
              d === "toggle"
                ? (u = i.map((h) => (h.id === e.id ? { ...h, desc: p } : h)))
                : d === "remove"
                ? (u = i.filter((h) => h.id !== e.id))
                : (u = [{ id: e.id, desc: p }]);
            return u;
          });
        }),
        (e.getFirstSortDir = () => {
          var n, r;
          return (
            (n =
              (r = e.columnDef.sortDescFirst) != null
                ? r
                : t.options.sortDescFirst) != null
              ? n
              : e.getAutoSortDir() === "desc"
          )
            ? "desc"
            : "asc";
        }),
        (e.getNextSortingOrder = (n) => {
          var r, o;
          const s = e.getFirstSortDir(),
            i = e.getIsSorted();
          return i
            ? i !== s &&
              ((r = t.options.enableSortingRemoval) == null || r) &&
              (!(n && (o = t.options.enableMultiRemove) != null) || o)
              ? !1
              : i === "desc"
              ? "asc"
              : "desc"
            : s;
        }),
        (e.getCanSort = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableSorting) != null ? n : !0) &&
            ((r = t.options.enableSorting) != null ? r : !0) &&
            !!e.accessorFn
          );
        }),
        (e.getCanMultiSort = () => {
          var n, r;
          return (n =
            (r = e.columnDef.enableMultiSort) != null
              ? r
              : t.options.enableMultiSort) != null
            ? n
            : !!e.accessorFn;
        }),
        (e.getIsSorted = () => {
          var n;
          const r =
            (n = t.getState().sorting) == null
              ? void 0
              : n.find((o) => o.id === e.id);
          return r ? (r.desc ? "desc" : "asc") : !1;
        }),
        (e.getSortIndex = () => {
          var n, r;
          return (n =
            (r = t.getState().sorting) == null
              ? void 0
              : r.findIndex((o) => o.id === e.id)) != null
            ? n
            : -1;
        }),
        (e.clearSorting = () => {
          t.setSorting((n) =>
            n != null && n.length ? n.filter((r) => r.id !== e.id) : []
          );
        }),
        (e.getToggleSortingHandler = () => {
          const n = e.getCanSort();
          return (r) => {
            n &&
              (r.persist == null || r.persist(),
              e.toggleSorting == null ||
                e.toggleSorting(
                  void 0,
                  e.getCanMultiSort()
                    ? t.options.isMultiSortEvent == null
                      ? void 0
                      : t.options.isMultiSortEvent(r)
                    : !1
                ));
          };
        });
    },
    createTable: (e) => {
      (e.setSorting = (t) =>
        e.options.onSortingChange == null
          ? void 0
          : e.options.onSortingChange(t)),
        (e.resetSorting = (t) => {
          var n, r;
          e.setSorting(
            t
              ? []
              : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null
              ? n
              : []
          );
        }),
        (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
        (e.getSortedRowModel = () => (
          !e._getSortedRowModel &&
            e.options.getSortedRowModel &&
            (e._getSortedRowModel = e.options.getSortedRowModel(e)),
          e.options.manualSorting || !e._getSortedRowModel
            ? e.getPreSortedRowModel()
            : e._getSortedRowModel()
        ));
    },
  },
  yR = [Vk, oR, eR, tR, zk, Bk, sR, iR, vR, Xk, lR, aR, uR, cR, nR];
function xR(e) {
  var t, n;
  const r = [...yR, ...((t = e._features) != null ? t : [])];
  let o = { _features: r };
  const s = o._features.reduce(
      (f, h) =>
        Object.assign(
          f,
          h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(o)
        ),
      {}
    ),
    i = (f) =>
      o.options.mergeOptions ? o.options.mergeOptions(s, f) : { ...s, ...f };
  let a = { ...{}, ...((n = e.initialState) != null ? n : {}) };
  o._features.forEach((f) => {
    var h;
    a =
      (h = f.getInitialState == null ? void 0 : f.getInitialState(a)) != null
        ? h
        : a;
  });
  const u = [];
  let d = !1;
  const p = {
    _features: r,
    options: { ...s, ...e },
    initialState: a,
    _queue: (f) => {
      u.push(f),
        d ||
          ((d = !0),
          Promise.resolve()
            .then(() => {
              for (; u.length; ) u.shift()();
              d = !1;
            })
            .catch((h) =>
              setTimeout(() => {
                throw h;
              })
            ));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (f) => {
      const h = Er(f, o.options);
      o.options = i(h);
    },
    getState: () => o.options.state,
    setState: (f) => {
      o.options.onStateChange == null || o.options.onStateChange(f);
    },
    _getRowId: (f, h, x) => {
      var y;
      return (y =
        o.options.getRowId == null ? void 0 : o.options.getRowId(f, h, x)) !=
        null
        ? y
        : `${x ? [x.id, h].join(".") : h}`;
    },
    getCoreRowModel: () => (
      o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)),
      o._getCoreRowModel()
    ),
    getRowModel: () => o.getPaginationRowModel(),
    getRow: (f, h) => {
      let x = (h ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[f];
      if (!x && ((x = o.getCoreRowModel().rowsById[f]), !x)) throw new Error();
      return x;
    },
    _getDefaultColumnDef: oe(
      () => [o.options.defaultColumn],
      (f) => {
        var h;
        return (
          (f = (h = f) != null ? h : {}),
          {
            header: (x) => {
              const y = x.header.column.columnDef;
              return y.accessorKey ? y.accessorKey : y.accessorFn ? y.id : null;
            },
            cell: (x) => {
              var y, S;
              return (y =
                (S = x.renderValue()) == null || S.toString == null
                  ? void 0
                  : S.toString()) != null
                ? y
                : null;
            },
            ...o._features.reduce(
              (x, y) =>
                Object.assign(
                  x,
                  y.getDefaultColumnDef == null
                    ? void 0
                    : y.getDefaultColumnDef()
                ),
              {}
            ),
            ...f,
          }
        );
      },
      se(e, "debugColumns")
    ),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: oe(
      () => [o._getColumnDefs()],
      (f) => {
        const h = function (x, y, S) {
          return (
            S === void 0 && (S = 0),
            x.map((v) => {
              const g = Lk(o, v, S, y),
                w = v;
              return (g.columns = w.columns ? h(w.columns, g, S + 1) : []), g;
            })
          );
        };
        return h(f);
      },
      se(e, "debugColumns")
    ),
    getAllFlatColumns: oe(
      () => [o.getAllColumns()],
      (f) => f.flatMap((h) => h.getFlatColumns()),
      se(e, "debugColumns")
    ),
    _getAllFlatColumnsById: oe(
      () => [o.getAllFlatColumns()],
      (f) => f.reduce((h, x) => ((h[x.id] = x), h), {}),
      se(e, "debugColumns")
    ),
    getAllLeafColumns: oe(
      () => [o.getAllColumns(), o._getOrderColumnsFn()],
      (f, h) => {
        let x = f.flatMap((y) => y.getLeafColumns());
        return h(x);
      },
      se(e, "debugColumns")
    ),
    getColumn: (f) => o._getAllFlatColumnsById()[f],
  };
  Object.assign(o, p);
  for (let f = 0; f < o._features.length; f++) {
    const h = o._features[f];
    h == null || h.createTable == null || h.createTable(o);
  }
  return o;
}
function mp() {
  return (e) =>
    oe(
      () => [e.options.data],
      (t) => {
        const n = { rows: [], flatRows: [], rowsById: {} },
          r = function (o, s, i) {
            s === void 0 && (s = 0);
            const l = [];
            for (let u = 0; u < o.length; u++) {
              const d = dp(
                e,
                e._getRowId(o[u], u, i),
                o[u],
                u,
                s,
                void 0,
                i == null ? void 0 : i.id
              );
              if (
                (n.flatRows.push(d),
                (n.rowsById[d.id] = d),
                l.push(d),
                e.options.getSubRows)
              ) {
                var a;
                (d.originalSubRows = e.options.getSubRows(o[u], u)),
                  (a = d.originalSubRows) != null &&
                    a.length &&
                    (d.subRows = r(d.originalSubRows, s + 1, d));
              }
            }
            return l;
          };
        return (n.rows = r(t)), n;
      },
      se(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex())
    );
}
function wR(e) {
  const t = [],
    n = (r) => {
      var o;
      t.push(r),
        (o = r.subRows) != null &&
          o.length &&
          r.getIsExpanded() &&
          r.subRows.forEach(n);
    };
  return (
    e.rows.forEach(n), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById }
  );
}
function SR(e, t, n) {
  return n.options.filterFromLeafRows ? _R(e, t, n) : CR(e, t, n);
}
function _R(e, t, n) {
  var r;
  const o = [],
    s = {},
    i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100,
    l = function (a, u) {
      u === void 0 && (u = 0);
      const d = [];
      for (let f = 0; f < a.length; f++) {
        var p;
        let h = a[f];
        const x = dp(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
        if (
          ((x.columnFilters = h.columnFilters),
          (p = h.subRows) != null && p.length && u < i)
        ) {
          if (
            ((x.subRows = l(h.subRows, u + 1)),
            (h = x),
            t(h) && !x.subRows.length)
          ) {
            d.push(h), (s[h.id] = h), o.push(h);
            continue;
          }
          if (t(h) || x.subRows.length) {
            d.push(h), (s[h.id] = h), o.push(h);
            continue;
          }
        } else (h = x), t(h) && (d.push(h), (s[h.id] = h), o.push(h));
      }
      return d;
    };
  return { rows: l(e), flatRows: o, rowsById: s };
}
function CR(e, t, n) {
  var r;
  const o = [],
    s = {},
    i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100,
    l = function (a, u) {
      u === void 0 && (u = 0);
      const d = [];
      for (let f = 0; f < a.length; f++) {
        let h = a[f];
        if (t(h)) {
          var p;
          if ((p = h.subRows) != null && p.length && u < i) {
            const y = dp(
              n,
              h.id,
              h.original,
              h.index,
              h.depth,
              void 0,
              h.parentId
            );
            (y.subRows = l(h.subRows, u + 1)), (h = y);
          }
          d.push(h), o.push(h), (s[h.id] = h);
        }
      }
      return d;
    };
  return { rows: l(e), flatRows: o, rowsById: s };
}
function gp() {
  return (e) =>
    oe(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
      ],
      (t, n, r) => {
        if (!t.rows.length || (!(n != null && n.length) && !r)) {
          for (let f = 0; f < t.flatRows.length; f++)
            (t.flatRows[f].columnFilters = {}),
              (t.flatRows[f].columnFiltersMeta = {});
          return t;
        }
        const o = [],
          s = [];
        (n ?? []).forEach((f) => {
          var h;
          const x = e.getColumn(f.id);
          if (!x) return;
          const y = x.getFilterFn();
          y &&
            o.push({
              id: f.id,
              filterFn: y,
              resolvedValue:
                (h =
                  y.resolveFilterValue == null
                    ? void 0
                    : y.resolveFilterValue(f.value)) != null
                  ? h
                  : f.value,
            });
        });
        const i = (n ?? []).map((f) => f.id),
          l = e.getGlobalFilterFn(),
          a = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
        r &&
          l &&
          a.length &&
          (i.push("__global__"),
          a.forEach((f) => {
            var h;
            s.push({
              id: f.id,
              filterFn: l,
              resolvedValue:
                (h =
                  l.resolveFilterValue == null
                    ? void 0
                    : l.resolveFilterValue(r)) != null
                  ? h
                  : r,
            });
          }));
        let u, d;
        for (let f = 0; f < t.flatRows.length; f++) {
          const h = t.flatRows[f];
          if (((h.columnFilters = {}), o.length))
            for (let x = 0; x < o.length; x++) {
              u = o[x];
              const y = u.id;
              h.columnFilters[y] = u.filterFn(h, y, u.resolvedValue, (S) => {
                h.columnFiltersMeta[y] = S;
              });
            }
          if (s.length) {
            for (let x = 0; x < s.length; x++) {
              d = s[x];
              const y = d.id;
              if (
                d.filterFn(h, y, d.resolvedValue, (S) => {
                  h.columnFiltersMeta[y] = S;
                })
              ) {
                h.columnFilters.__global__ = !0;
                break;
              }
            }
            h.columnFilters.__global__ !== !0 &&
              (h.columnFilters.__global__ = !1);
          }
        }
        const p = (f) => {
          for (let h = 0; h < i.length; h++)
            if (f.columnFilters[i[h]] === !1) return !1;
          return !0;
        };
        return SR(t.rows, p, e);
      },
      se(e.options, "debugTable", "getFilteredRowModel", () =>
        e._autoResetPageIndex()
      )
    );
}
function vp(e) {
  return (t) =>
    oe(
      () => [
        t.getState().pagination,
        t.getPrePaginationRowModel(),
        t.options.paginateExpandedRows ? void 0 : t.getState().expanded,
      ],
      (n, r) => {
        if (!r.rows.length) return r;
        const { pageSize: o, pageIndex: s } = n;
        let { rows: i, flatRows: l, rowsById: a } = r;
        const u = o * s,
          d = u + o;
        i = i.slice(u, d);
        let p;
        t.options.paginateExpandedRows
          ? (p = { rows: i, flatRows: l, rowsById: a })
          : (p = wR({ rows: i, flatRows: l, rowsById: a })),
          (p.flatRows = []);
        const f = (h) => {
          p.flatRows.push(h), h.subRows.length && h.subRows.forEach(f);
        };
        return p.rows.forEach(f), p;
      },
      se(t.options, "debugTable")
    );
}
function yp() {
  return (e) =>
    oe(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, n) => {
        if (!n.rows.length || !(t != null && t.length)) return n;
        const r = e.getState().sorting,
          o = [],
          s = r.filter((a) => {
            var u;
            return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
          }),
          i = {};
        s.forEach((a) => {
          const u = e.getColumn(a.id);
          u &&
            (i[a.id] = {
              sortUndefined: u.columnDef.sortUndefined,
              invertSorting: u.columnDef.invertSorting,
              sortingFn: u.getSortingFn(),
            });
        });
        const l = (a) => {
          const u = a.map((d) => ({ ...d }));
          return (
            u.sort((d, p) => {
              for (let h = 0; h < s.length; h += 1) {
                var f;
                const x = s[h],
                  y = i[x.id],
                  S = y.sortUndefined,
                  v = (f = x == null ? void 0 : x.desc) != null ? f : !1;
                let g = 0;
                if (S) {
                  const w = d.getValue(x.id),
                    C = p.getValue(x.id),
                    E = w === void 0,
                    N = C === void 0;
                  if (E || N) {
                    if (S === "first") return E ? -1 : 1;
                    if (S === "last") return E ? 1 : -1;
                    g = E && N ? 0 : E ? S : -S;
                  }
                }
                if ((g === 0 && (g = y.sortingFn(d, p, x.id)), g !== 0))
                  return v && (g *= -1), y.invertSorting && (g *= -1), g;
              }
              return d.index - p.index;
            }),
            u.forEach((d) => {
              var p;
              o.push(d),
                (p = d.subRows) != null &&
                  p.length &&
                  (d.subRows = l(d.subRows));
            }),
            u
          );
        };
        return { rows: l(n.rows), flatRows: o, rowsById: n.rowsById };
      },
      se(e.options, "debugTable", "getSortedRowModel", () =>
        e._autoResetPageIndex()
      )
    );
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cs(e, t) {
  return e ? (bR(e) ? m.createElement(e, t) : e) : null;
}
function bR(e) {
  return ER(e) || typeof e == "function" || $R(e);
}
function ER(e) {
  return (
    typeof e == "function" &&
    (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function $R(e) {
  return (
    typeof e == "object" &&
    typeof e.$$typeof == "symbol" &&
    ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
  );
}
function xp(e) {
  const t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [n] = m.useState(() => ({ current: xR(t) })),
    [r, o] = m.useState(() => n.current.initialState);
  return (
    n.current.setOptions((s) => ({
      ...s,
      ...e,
      state: { ...r, ...e.state },
      onStateChange: (i) => {
        o(i), e.onStateChange == null || e.onStateChange(i);
      },
    })),
    n.current
  );
}
const Eu = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    className: "relative w-full overflow-auto",
    children: c.jsx("table", {
      ref: n,
      className: je("w-full caption-bottom text-sm", e),
      ...t,
    }),
  })
);
Eu.displayName = "Table";
const $u = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("thead", { ref: n, className: je("[&_tr]:border-b", e), ...t })
);
$u.displayName = "TableHeader";
const ku = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("tbody", {
    ref: n,
    className: je("[&_tr:last-child]:border-0", e),
    ...t,
  })
);
ku.displayName = "TableBody";
const kR = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("tfoot", {
    ref: n,
    className: je("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
    ...t,
  })
);
kR.displayName = "TableFooter";
const Nn = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("tr", {
    ref: n,
    className: je(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t,
  })
);
Nn.displayName = "TableRow";
const Ru = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("th", {
    ref: n,
    className: je(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t,
  })
);
Ru.displayName = "TableHead";
const go = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("td", {
    ref: n,
    className: je(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t,
  })
);
go.displayName = "TableCell";
const RR = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("caption", {
    ref: n,
    className: je("mt-4 text-sm text-muted-foreground", e),
    ...t,
  })
);
RR.displayName = "TableCaption";
function jR(e, t) {
  return m.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ju = (e) => {
  const { present: t, children: n } = e,
    r = NR(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n),
    s = Xe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? m.cloneElement(o, { ref: s })
    : null;
};
ju.displayName = "Presence";
function NR(e) {
  const [t, n] = m.useState(),
    r = m.useRef({}),
    o = m.useRef(e),
    s = m.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, a] = jR(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.useEffect(() => {
      const u = Hl(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    Ot(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const f = s.current,
          h = Hl(u);
        e
          ? a("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Ot(() => {
      if (t) {
        const u = (p) => {
            const h = Hl(r.current).includes(p.animationName);
            p.target === t && h && xo.flushSync(() => a("ANIMATION_END"));
          },
          d = (p) => {
            p.target === t && (s.current = Hl(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: m.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Hl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const ax = "Dialog",
  [ux, cx] = cl(ax),
  [PR, vn] = ux(ax),
  TR = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      l = m.useRef(null),
      a = m.useRef(null),
      [u = !1, d] = Id({ prop: r, defaultProp: o, onChange: s });
    return m.createElement(
      PR,
      {
        scope: t,
        triggerRef: l,
        contentRef: a,
        contentId: gi(),
        titleId: gi(),
        descriptionId: gi(),
        open: u,
        onOpenChange: d,
        onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
        modal: i,
      },
      n
    );
  },
  MR = "DialogTrigger",
  OR = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = vn(MR, n),
      s = Xe(t, o.triggerRef);
    return m.createElement(
      Ue.button,
      re(
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": o.open,
          "aria-controls": o.contentId,
          "data-state": wp(o.open),
        },
        r,
        { ref: s, onClick: Be(e.onClick, o.onOpenToggle) }
      )
    );
  }),
  dx = "DialogPortal",
  [AR, fx] = ux(dx, { forceMount: void 0 }),
  IR = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      s = vn(dx, t);
    return m.createElement(
      AR,
      { scope: t, forceMount: n },
      m.Children.map(r, (i) =>
        m.createElement(
          ju,
          { present: n || s.open },
          m.createElement(by, { asChild: !0, container: o }, i)
        )
      )
    );
  },
  Hd = "DialogOverlay",
  FR = m.forwardRef((e, t) => {
    const n = fx(Hd, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = vn(Hd, e.__scopeDialog);
    return s.modal
      ? m.createElement(
          ju,
          { present: r || s.open },
          m.createElement(DR, re({}, o, { ref: t }))
        )
      : null;
  }),
  DR = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = vn(Hd, n);
    return m.createElement(
      lp,
      { as: Dr, allowPinchZoom: !0, shards: [o.contentRef] },
      m.createElement(
        Ue.div,
        re({ "data-state": wp(o.open) }, r, {
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        })
      )
    );
  }),
  bs = "DialogContent",
  LR = m.forwardRef((e, t) => {
    const n = fx(bs, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = vn(bs, e.__scopeDialog);
    return m.createElement(
      ju,
      { present: r || s.open },
      s.modal
        ? m.createElement(VR, re({}, o, { ref: t }))
        : m.createElement(zR, re({}, o, { ref: t }))
    );
  }),
  VR = m.forwardRef((e, t) => {
    const n = vn(bs, e.__scopeDialog),
      r = m.useRef(null),
      o = Xe(t, n.contentRef, r);
    return (
      m.useEffect(() => {
        const s = r.current;
        if (s) return $y(s);
      }, []),
      m.createElement(
        px,
        re({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Be(e.onCloseAutoFocus, (s) => {
            var i;
            s.preventDefault(),
              (i = n.triggerRef.current) === null || i === void 0 || i.focus();
          }),
          onPointerDownOutside: Be(e.onPointerDownOutside, (s) => {
            const i = s.detail.originalEvent,
              l = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || l) && s.preventDefault();
          }),
          onFocusOutside: Be(e.onFocusOutside, (s) => s.preventDefault()),
        })
      )
    );
  }),
  zR = m.forwardRef((e, t) => {
    const n = vn(bs, e.__scopeDialog),
      r = m.useRef(!1),
      o = m.useRef(!1);
    return m.createElement(
      px,
      re({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i;
          if (
            ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, s),
            !s.defaultPrevented)
          ) {
            var l;
            r.current ||
              (l = n.triggerRef.current) === null ||
              l === void 0 ||
              l.focus(),
              s.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (s) => {
          var i, l;
          (i = e.onInteractOutside) === null || i === void 0 || i.call(e, s),
            s.defaultPrevented ||
              ((r.current = !0),
              s.detail.originalEvent.type === "pointerdown" &&
                (o.current = !0));
          const a = s.target;
          ((l = n.triggerRef.current) === null || l === void 0
            ? void 0
            : l.contains(a)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" &&
              o.current &&
              s.preventDefault();
        },
      })
    );
  }),
  px = m.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        ...i
      } = e,
      l = vn(bs, n),
      a = m.useRef(null),
      u = Xe(t, a);
    return (
      iy(),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(
          ly,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
          },
          m.createElement(
            oy,
            re(
              {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": wp(l.open),
              },
              i,
              { ref: u, onDismiss: () => l.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  hx = "DialogTitle",
  BR = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = vn(hx, n);
    return m.createElement(Ue.h2, re({ id: o.titleId }, r, { ref: t }));
  }),
  UR = "DialogDescription",
  HR = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = vn(UR, n);
    return m.createElement(Ue.p, re({ id: o.descriptionId }, r, { ref: t }));
  }),
  WR = "DialogClose",
  ZR = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = vn(WR, n);
    return m.createElement(
      Ue.button,
      re({ type: "button" }, r, {
        ref: t,
        onClick: Be(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  });
function wp(e) {
  return e ? "open" : "closed";
}
const GR = "DialogTitleWarning",
  [KR, tj] = RE(GR, { contentName: bs, titleName: hx, docsSlug: "dialog" }),
  YR = TR,
  QR = OR,
  qR = IR,
  XR = FR,
  JR = LR,
  e5 = BR,
  t5 = HR,
  mx = ZR,
  n5 = "AlertDialog",
  [r5, nj] = cl(n5, [cx]),
  lr = cx(),
  o5 = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = lr(t);
    return m.createElement(YR, re({}, r, n, { modal: !0 }));
  },
  s5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = lr(n);
    return m.createElement(QR, re({}, o, r, { ref: t }));
  }),
  i5 = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = lr(t);
    return m.createElement(qR, re({}, r, n));
  },
  l5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = lr(n);
    return m.createElement(XR, re({}, o, r, { ref: t }));
  }),
  gx = "AlertDialogContent",
  [a5, u5] = r5(gx),
  c5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e,
      s = lr(n),
      i = m.useRef(null),
      l = Xe(t, i),
      a = m.useRef(null);
    return m.createElement(
      KR,
      { contentName: gx, titleName: d5, docsSlug: "alert-dialog" },
      m.createElement(
        a5,
        { scope: n, cancelRef: a },
        m.createElement(
          JR,
          re({ role: "alertdialog" }, s, o, {
            ref: l,
            onOpenAutoFocus: Be(o.onOpenAutoFocus, (u) => {
              var d;
              u.preventDefault(),
                (d = a.current) === null ||
                  d === void 0 ||
                  d.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
          }),
          m.createElement(h0, null, r),
          !1
        )
      )
    );
  }),
  d5 = "AlertDialogTitle",
  f5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = lr(n);
    return m.createElement(e5, re({}, o, r, { ref: t }));
  }),
  p5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = lr(n);
    return m.createElement(t5, re({}, o, r, { ref: t }));
  }),
  h5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = lr(n);
    return m.createElement(mx, re({}, o, r, { ref: t }));
  }),
  m5 = "AlertDialogCancel",
  g5 = m.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: o } = u5(m5, n),
      s = lr(n),
      i = Xe(t, o);
    return m.createElement(mx, re({}, s, r, { ref: i }));
  }),
  v5 = o5,
  y5 = s5,
  x5 = i5,
  vx = l5,
  yx = c5,
  xx = h5,
  wx = g5,
  Sx = f5,
  _x = p5,
  Is = v5,
  Fs = y5,
  w5 = x5,
  Cx = m.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(vx, {
      className: je(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
Cx.displayName = vx.displayName;
const $o = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsxs(w5, {
    children: [
      c.jsx(Cx, {}),
      c.jsx(yx, {
        ref: n,
        className: je(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...t,
      }),
    ],
  })
);
$o.displayName = yx.displayName;
const ko = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: je("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
ko.displayName = "AlertDialogHeader";
const Ro = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: je(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
Ro.displayName = "AlertDialogFooter";
const jo = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Sx, { ref: n, className: je("text-lg font-semibold", e), ...t })
);
jo.displayName = Sx.displayName;
const No = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(_x, { ref: n, className: je("text-sm text-muted-foreground", e), ...t })
);
No.displayName = _x.displayName;
const Nu = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(xx, { ref: n, className: je(Zf(), e), ...t })
);
Nu.displayName = xx.displayName;
const Po = m.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(wx, {
    ref: n,
    className: je(Zf({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t,
  })
);
Po.displayName = wx.displayName;
const S5 = ({ id: e, product: t }) =>
    c.jsxs(Is, {
      children: [
        c.jsx(Fs, {
          asChild: !0,
          children: c.jsx(Ne, { variant: "ghost", children: "Смотреть" }),
        }),
        c.jsxs($o, {
          children: [
            c.jsxs(ko, {
              children: [
                c.jsxs(jo, {
                  className: "p-1",
                  children: ["Продукт №", e + 1],
                }),
                c.jsxs(No, {
                  children: [
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Товарный знак",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.tradeMark,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Артикул/Модель",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.articleType,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Артикул/Модель (Значение)",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.articleName,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Вид обуви",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.shoesType,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Цвет",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.color,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Размер в штихмассовой системе",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.size,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Материал верха",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.upperMaterial,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Материал подкладки",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.liningMaterial,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Материал низа/подошвы",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.bottomMaterial,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Код ТНВЭД",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.tnved,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(Ro, { children: c.jsx(Po, { children: "Закрыть" }) }),
          ],
        }),
      ],
    }),
  _5 = ({ id: e }) => {
    const [t, n] = An(cp),
      r = (o) => {
        n([...t.slice(0, o), ...t.slice(o + 1)]);
      };
    return c.jsxs(Is, {
      children: [
        c.jsx(Fs, {
          asChild: !0,
          children: c.jsx(Ne, {
            variant: "outline",
            size: "icon",
            children: c.jsx(Hf, { className: "w-4" }),
          }),
        }),
        c.jsxs($o, {
          children: [
            c.jsxs(ko, {
              children: [
                c.jsxs(jo, { children: ["Удалить: Продукт №", e + 1] }),
                c.jsx(No, {
                  children: c.jsx(Jf, {
                    children:
                      "Вы уверены что хотите удалить продукт из списка?",
                  }),
                }),
              ],
            }),
            c.jsxs(Ro, {
              children: [
                c.jsx(Po, { children: "Отмена" }),
                c.jsx(Nu, {
                  onClick: () => {
                    r(e);
                  },
                  children: "Подтвердить",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Am = [
    {
      id: "id",
      header: "#",
      cell: ({ row: e }) => (
        console.log(e),
        c.jsx("div", {
          className: "capitalize font-medium",
          children: e.index + 1,
        })
      ),
      enableSorting: !1,
      enableHiding: !1,
    },
    {
      accessorKey: "articleName",
      header: "Артикул/Модель",
      cell: ({ row: e }) =>
        c.jsx("div", {
          className: "capitalize font-medium",
          children: e.getValue("articleName"),
        }),
    },
    {
      accessorKey: "tradeMark",
      header: "Товарный знак",
      cell: ({ row: e }) =>
        c.jsx("div", {
          className: "capitalize",
          children: e.getValue("tradeMark"),
        }),
    },
    {
      accessorKey: "action",
      header: () => c.jsx("div", { className: "text-right" }),
      cell: ({ row: e }) =>
        c.jsxs("div", {
          className: "flex flex-row gap-2 items-center justify-end",
          children: [
            c.jsx(S5, { product: e.original, id: e.index }),
            c.jsx(Ne, {
              variant: "outline",
              size: "icon",
              children: c.jsx(Uf, { className: "w-4" }),
            }),
            c.jsx(_5, { id: e.index }),
            c.jsx(Ne, {
              variant: "outline",
              size: "icon",
              children: c.jsx(Bf, { className: "w-4" }),
            }),
          ],
        }),
    },
  ];
function C5() {
  var d, p;
  const [e] = An(cp),
    [t, n] = m.useState([]),
    [r, o] = m.useState([]),
    [s, i] = m.useState({}),
    [l, a] = m.useState({}),
    u = xp({
      data: e,
      columns: Am,
      onSortingChange: n,
      onColumnFiltersChange: o,
      getCoreRowModel: mp(),
      getPaginationRowModel: vp(),
      getSortedRowModel: yp(),
      getFilteredRowModel: gp(),
      onColumnVisibilityChange: i,
      onRowSelectionChange: a,
      state: {
        sorting: t,
        columnFilters: r,
        columnVisibility: s,
        rowSelection: l,
      },
    });
  return c.jsxs("div", {
    className: "w-full m-auto my-12 p-12 bg-white rounded-xl shadow-lg",
    children: [
      c.jsxs("div", {
        className: "flex gap-2 items-center",
        children: [c.jsx(Ns, {}), c.jsx(mn, { children: "Список товаров" })],
      }),
      c.jsxs("div", {
        className: "flex items-center py-4 justify-between",
        children: [
          c.jsx(ge, {
            placeholder: "Поиск по артикулу",
            value:
              ((d = u.getColumn("articleName")) == null
                ? void 0
                : d.getFilterValue()) ?? "",
            onChange: (f) => {
              var h;
              return (h = u.getColumn("articleName")) == null
                ? void 0
                : h.setFilterValue(f.target.value);
            },
            className: "max-w-sm",
          }),
          c.jsxs("div", { children: ["Добавлено ", e.length, " шт"] }),
        ],
      }),
      c.jsx("div", {
        className: "rounded-md border",
        children: c.jsxs(Eu, {
          children: [
            c.jsx($u, {
              children: u
                .getHeaderGroups()
                .map((f) =>
                  c.jsx(
                    Nn,
                    {
                      children: f.headers.map((h) =>
                        c.jsx(
                          Ru,
                          {
                            children: h.isPlaceholder
                              ? null
                              : Cs(h.column.columnDef.header, h.getContext()),
                          },
                          h.id
                        )
                      ),
                    },
                    f.id
                  )
                ),
            }),
            c.jsx(ku, {
              children:
                (p = u.getRowModel().rows) != null && p.length
                  ? u
                      .getRowModel()
                      .rows.map((f) =>
                        c.jsx(
                          Nn,
                          {
                            "data-state": f.getIsSelected() && "selected",
                            children: f
                              .getVisibleCells()
                              .map((h) =>
                                c.jsx(
                                  go,
                                  {
                                    children: Cs(
                                      h.column.columnDef.cell,
                                      h.getContext()
                                    ),
                                  },
                                  h.id
                                )
                              ),
                          },
                          f.id
                        )
                      )
                  : c.jsx(Nn, {
                      children: c.jsx(go, {
                        colSpan: Am.length,
                        className: "h-24 text-center",
                        children: "Товаров не найдено.",
                      }),
                    }),
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        className: "flex items-center justify-end space-x-2 py-4",
        children: [
          c.jsxs("div", {
            className: "flex-1 text-sm text-muted-foreground",
            children: [
              u.getFilteredSelectedRowModel().rows.length,
              " из",
              " ",
              u.getFilteredRowModel().rows.length,
              " строк выделено.",
            ],
          }),
          c.jsxs("div", {
            className: "space-x-2",
            children: [
              c.jsx(Ne, {
                variant: "outline",
                size: "sm",
                onClick: () => u.previousPage(),
                disabled: !u.getCanPreviousPage(),
                children: "Прошлая страница",
              }),
              c.jsx(Ne, {
                variant: "outline",
                size: "sm",
                onClick: () => u.nextPage(),
                disabled: !u.getCanNextPage(),
                children: "Следующая страница",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const b5 = () =>
    c.jsxs(c.Fragment, {
      children: [
        c.jsx(al, { children: "Новая накладная «Одежда»" }),
        c.jsx(Ak, {}),
        c.jsx(C5, {}),
      ],
    }),
  E5 = () =>
    c.jsxs("div", {
      className: "m-w-lg flex flex-col",
      children: [
        c.jsx(mn, {
          children: c.jsx(Fr, {
            to: "/category/shoes",
            children: "Форма обувь",
          }),
        }),
        c.jsx(mn, {
          children: c.jsx(Fr, {
            to: "/category/clothes",
            children: "Форма одежда",
          }),
        }),
      ],
    }),
  $5 = () => c.jsx(fE, {}),
  k5 = le.object({
    fullName: le.string(),
    tradeMark: le.string(),
    articleType: le.string(),
    articleName: le.string(),
    shoesType: le.string(),
    color: le.string(),
    size: le.string(),
    upperMaterial: le.string(),
    liningMaterial: le.string(),
    bottomMaterial: le.string(),
    tnved: le.string(),
  }),
  R5 = [
    "АБАРКАСЫ",
    "БАБУШИ",
    "БАЛЕТКИ",
    "БАХИЛЫ",
    "БЕРЦЫ",
    "БОКСЕРКИ",
    "БОРЦОВКИ",
    "БОСОНОЖКИ",
    "БОТИЛЬОНЫ",
    "БОТИЛЬОНЫ ВЫСОКИЕ",
    "БОТИНКИ",
    "БОТИНКИ ВЫСОКИЕ",
    "БОТИНКИ ДЛЯ БАСКЕТБОЛА",
    "БОТИНКИ ДЛЯ БЕГОВЫХ ЛЫЖ",
    "БОТИНКИ ДЛЯ ГОРНЫХ ЛЫЖ",
    "БОТИНКИ ДЛЯ ДАЙВИНГА",
    "БОТИНКИ ДЛЯ ПАРУСНОГО СПОРТА",
    "БОТИНКИ ДЛЯ ПРЫЖКОВ НА ЛЫЖАХ С ТРАМПЛИНА",
    "БОТИНКИ ПЛАВАТЕЛЬНЫЕ",
    "БОТИНКИ ПРОИЗВОДСТВЕННЫЕ",
    "БОТИНКИ СНОУБОРДИЧЕСКИЕ",
    "БОТИНКИ СПЕЦИАЛЬНЫЕ",
    "БОТЫ",
    "БОТЫ СПЕЦИАЛЬНЫЕ",
    "БРОГИ",
    "БУРКИ",
    "БУТСЫ",
    "ВАЛЕНКИ",
    "ВАЛЕНКИ СПЕЦИАЛЬНЫЕ",
    "ВАЛЕШИ",
    "ВЕЛОТУФЛИ",
    "ВЬЕТНАМКИ",
    "ГАЛОШИ",
    "ГАЛОШИ СПЕЦИАЛЬНЫЕ",
    "ГИМНАСТИЧЕСКИЕ ПОЛУТАПОЧКИ",
    "ГЛАДИАТОРЫ",
    "ДЕЗЕРТЫ",
    "ДЕЛЁНКИ",
    "ДЕРБИ",
    "ДЖИБИТСЫ",
    "ДОМАШНЯЯ ОБУВЬ",
    "ДУТИКИ",
    "КАЗАКИ",
    "КЕДЫ",
    "КЕДЫ ВЫСОКИЕ",
    "КЛОГИ",
    "КРОКСЫ",
    "КРОССОВКИ",
    "КРОССОВКИ ВЫСОКИЕ",
    "КРОССОВКИ РОЛИКОВЫЕ",
    "ЛОФЕРЫ",
    "ЛУНОХОДЫ",
    "МОКАСИНЫ",
    "МОНГОЛКИ",
    "МОНКИ",
    "МОТОБОТИНКИ",
    "МУНБУТЫ",
    "МЮЛИ",
    "ОБУВЬ ДЛЯ ЕДИНОБОРСТВ",
    "ОБУВЬ ДЛЯ ТЯЖЕЛОЙ АТЛЕТИКИ И СИЛОВЫХ ВИДОВ СПОРТА",
    "ОБУВЬ ПЛЯЖНАЯ",
    "ОБУВЬ ТРЕНИРОВОЧНАЯ ДЛЯ ЗАНЯТИЙ СПОРТОМ",
    "ОКСФОРДЫ",
    "ПАНТОЛЕТЫ (ШЛЕПАНЦЫ)",
    "ПИНЕТКИ",
    "ПОЛУБОТИНКИ",
    "ПОЛУБОТИНКИ ДОМАШНИЕ",
    "ПОЛУБОТИНКИ КРОССОВЫЕ",
    "ПОЛУБОТИНКИ СПЕЦИАЛЬНЫЕ",
    "ПОЛУКЕДЫ",
    "ПОЛУСАПОГИ",
    "ПОЛУСАПОГИ СПЕЦИАЛЬНЫЕ",
    "ПОЛУСАПОЖКИ",
    "ПОЛУЧЕШКИ",
    "ПУАНТЫ",
    "РЕЗИНОВЫЕ САПОГИ",
    "САБО",
    "САМБОВКИ",
    "САНДАЛЕТЫ",
    "САНДАЛИИ",
    "САПОГИ",
    "САПОГИ ПРОИЗВОДСТВЕННЫЕ",
    "САПОГИ С УДЛИНЕННЫМИ ГОЛЕНИЩАМИ (БОТФОРТЫ)",
    "САПОГИ СПЕЦИАЛЬНЫЕ",
    "САПОЖКИ",
    "СКАЛЬНЫЕ ТУФЛИ",
    "СЛАЙДЕРЫ",
    "СЛАНЦЫ",
    "СЛИПЕРЫ",
    "СЛИПОНЫ",
    "СНИКЕРЫ",
    "СНОУБУТСЫ",
    "СРЕДСТВА ДОПОЛНИТЕЛЬНОЙ ЗАЩИТЫ НОГ ОТ УДАРОВ В НОСОЧНОЙ ЧАСТИ",
    "ТАПОЧКИ",
    "ТАПОЧКИ (САНДАЛИИ) СПЕЦИАЛЬНЫЕ",
    "ТАПОЧКИ-НОСКИ",
    "ТАПОЧКИ-СЛЕДКИ",
    "ТАПОЧКИ-УГГИ",
    "ТОПСАЙДЕРЫ",
    "ТУФЛИ",
    "ТУФЛИ ДЛЯ ХОЖДЕНИЯ ПО КОРАЛЛАМ",
    "ТУФЛИ ДОМАШНИЕ/КОМНАТНЫЕ",
    "ТУФЛИ КУПАЛЬНЫЕ",
    "ТУФЛИ ЛЕТНИЕ",
    "ТУФЛИ ПЛЯЖНЫЕ",
    "ТУФЛИ ПРОИЗВОДСТВЕННЫЕ",
    "ТУФЛИ СПЕЦИАЛЬНЫЕ",
    "ТУФЛИ ТАНЦЕВАЛЬНЫЕ",
    "УГГИ",
    "УНТЫ",
    "ЧЕЛСИ",
    "ЧЕШКИ",
    "ЧУВЯКИ",
    "ЧУНИ",
    "ШИПОВКИ",
    "ШЛЕПАНЦЫ",
    "ЭСПАДРИЛЬИ",
  ],
  j5 = [
    "БЕЖЕВЫЙ",
    "БЕЖЕВЫЙ МЕЛАНЖ",
    "БЕЛО-РОЗОВЫЙ",
    "БЕЛЫЙ",
    "БЕЛЫЙ/СЕРЫЙ",
    "БИРЮЗОВЫЙ",
    "БОРДОВЫЙ",
    "БРОНЗОВЫЙ",
    "ВАНИЛЬ",
    "ВИШНЯ",
    "ГОЛУБОЙ",
    "ЖЁЛТЫЙ",
    "ЗЕЛЁНЫЙ",
    "ЗОЛОТИСТЫЙ",
    "ЗОЛОТОЙ",
    "ИЗУМРУДНЫЙ",
    "КАПУЧИНО",
    "КИРПИЧНЫЙ",
    "КОРАЛЛОВЫЙ",
    "КОРИЧНЕВЫЙ",
    "КРАСНЫЙ",
    "ЛАЙМ",
    "ЛЕОПАРД",
    "МАЛИНОВЫЙ",
    "МЕДНЫЙ",
    "МОЛОЧНЫЙ",
    "МЯТНЫЙ",
    "НАТУРАЛЬНЫЙ",
    "НИКЕЛЬ",
    "ОЛИВКОВЫЙ",
    "ОРАНЖЕВЫЙ",
    "ПЕСОЧНЫЙ",
    "ПЕРСИКОВЫЙ",
    "ПРОЗРАЧНЫЙ",
    "ПУРПУРНЫЙ",
    "РАЗНОЦВЕТНЫЙ",
    "РОЗОВО-БЕЖЕВЫЙ",
    "РОЗОВЫЙ",
    "РЫЖИЙ",
    "СВЕТЛО-БЕЖЕВЫЙ",
    "СВЕТЛО-ЗЕЛЕНЫЙ",
    "СВЕТЛО-КОРИЧНЕВЫЙ",
    "СВЕТЛО-РОЗОВЫЙ",
    "СВЕТЛО-СЕРЫЙ",
    "СВЕТЛО-СЕРЫЙ МЕЛАНЖ",
    "СВЕТЛО-СИНИЙ",
    "СВЕТЛО-ФИОЛЕТОВЫЙ",
    "СЕРЕБРЯНЫЙ",
    "СЕРО-ЖЕЛТЫЙ",
    "СЕРО-ГОЛУБОЙ",
    "СЕРЫЙ",
    "СЕРЫЙ МЕЛАНЖ",
    "СИНИЙ",
    "СИРЕНЕВЫЙ/ЛИЛОВЫЙ",
    "СЛИВОВЫЙ",
    "СЛОНОВАЯ КОСТЬ",
    "ТЕМНО-БЕЖЕВЫЙ",
    "ТЕМНО-ЗЕЛЕНЫЙ",
    "ТЕМНО-КОРИЧНЕВЫЙ",
    "ТЕМНО-РОЗОВЫЙ",
    "ТЕМНО-СЕРЫЙ",
    "ТЕМНО-СЕРЫЙ МЕЛАНЖ",
    "ТЕМНО-СИНИЙ",
    "ТЕМНО-ФИОЛЕТОВЫЙ",
    "ТЕРРАКОТОВЫЙ",
    "ФИОЛЕТОВЫЙ",
    "ФУКСИЯ",
    "ХАКИ",
    "ХАКИ/ОЛИВКОВЫЙ",
    "ЧЕРНЫЙ",
    "ЧЕРНЫЙ/БЕЛЫЙ",
    "ЧЕРНЫЙ/ЗОЛОТИСТЫЙ",
    "ЧЕРНЫЙ/СЕРЫЙ",
    "ШОКОЛАДНЫЙ",
  ],
  N5 = [
    "16",
    "16,5",
    "16-17",
    "17",
    "17,5",
    "17-18",
    "18",
    "18,5",
    "18-19",
    "19",
    "19,5",
    "19-20",
    "20",
    "20,5",
    "20-21",
    "21",
    "21,5",
    "21-22",
    "22",
    "22,5",
    "22-23",
    "23",
    "23,5",
    "23-24",
    "24",
    "24,5",
    "24-25",
    "25",
    "25,5",
    "25-26",
    "26",
    "26,5",
    "26-27",
    "27",
    "27,5",
    "27-28",
    "28",
    "28,5",
    "28-29",
    "29",
    "29,5",
    "29-30",
    "30",
    "30,5",
    "30-31",
    "31",
    "31,5",
    "31-32",
    "32",
    "32,5",
    "32-33",
    "33",
    "33,5",
    "33-34",
    "34",
    "34,5",
    "34-35",
    "35",
    "35,5",
    "35-36",
    "36",
    "36,5",
    "36-37",
    "37",
    "37-37,5",
    "37,5",
    "37-38",
    "38",
    "38,5",
    "38-39",
    "39",
    "39,5",
    "39-40",
    "40",
    "40,5",
    "40-41",
    "41",
    "41,5",
    "41-42",
    "42",
    "42,5",
    "42-43",
    "43",
    "43,5",
    "43-44",
    "44",
    "44,5",
    "44-45",
    "45",
    "45,5",
    "45-46",
    "46",
    "46,5",
    "46-47",
    "47",
    "47,5",
    "47-48",
    "48",
    "48,5",
    "48-49",
    "49",
    "49,5",
    "49-50",
    "50",
    "50,5",
    "50-51",
    "51",
    "51,5",
    "51-52",
    "52",
    "52,5",
    "53",
    "53,5",
    "54",
    "54,5",
    "55",
    "55,5",
    "56",
    "56,5",
  ],
  Sp = ul([]),
  P5 = () => {
    const [e, t] = An(Sp),
      n = So({
        resolver: _o(k5),
        defaultValues: {
          fullName: "",
          tradeMark: "",
          articleType: "",
          articleName: "",
          shoesType: "",
          color: "",
          size: "",
          upperMaterial: "",
          liningMaterial: "",
          bottomMaterial: "",
          tnved: "",
        },
      }),
      r = (u) => {
        t([...e, u]);
      },
      o = n.watch("shoesType"),
      s = n.watch("tradeMark"),
      i = n.watch("articleName"),
      l = n.watch("color"),
      a = n.watch("size");
    return (
      m.useEffect(() => {
        const u = `${o} ${s} арт. ${i} Цвет: ${l} Размер: ${a}`;
        n.setValue("fullName", u);
      }, [n, o, s, i, l, a]),
      c.jsx("div", {
        className: "m-auto my-12 p-12 bg-white rounded-xl shadow-lg",
        children: c.jsxs(Co, {
          ...n,
          children: [
            c.jsxs("div", {
              className: "flex gap-2 items-center",
              children: [
                c.jsx(Ns, {}),
                c.jsx(mn, { children: "Добавить новый товар" }),
              ],
            }),
            c.jsx(ho, { className: "mt-2" }),
            c.jsxs("form", {
              onSubmit: n.handleSubmit(r),
              className: "space-y-4 mt-3",
              children: [
                c.jsx($e, {
                  control: n.control,
                  name: "fullName",
                  render: ({ field: u }) =>
                    c.jsxs(xe, {
                      children: [
                        c.jsx(we, {
                          children:
                            "Введите полное наименование товара (Формируется автоматически)",
                        }),
                        c.jsx(Se, {
                          children: c.jsx(ge, {
                            disabled: !0,
                            placeholder: "Полное наименование товара",
                            ...u,
                          }),
                        }),
                        c.jsx(_e, {}),
                      ],
                    }),
                }),
                c.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    c.jsx($e, {
                      control: n.control,
                      name: "tradeMark",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Товарный знак" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите товарный знак",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "articleType",
                      label: "Артикул/Модель",
                      placeholder: "Артикул/Модель",
                      options: ["Артикул", "Модель"],
                    }),
                    c.jsx($e, {
                      control: n.control,
                      name: "articleName",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, {
                              children: "Артикул/Модель (Значение)",
                            }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Артикул/Модель",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "shoesType",
                      label: "Вид обуви",
                      placeholder: "Выберите вид обуви",
                      options: R5,
                    }),
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "color",
                      label: "Цвет",
                      placeholder: "Выберите цвет обуви",
                      options: j5,
                    }),
                    c.jsx(Gn, {
                      className: "flex-1",
                      form: n,
                      name: "size",
                      label: "Размер в штихмассовой системе",
                      placeholder: "Размер в штихмассовой системе",
                      options: N5,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    c.jsx($e, {
                      control: n.control,
                      name: "upperMaterial",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Материал верха" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите материал верха",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx($e, {
                      control: n.control,
                      name: "liningMaterial",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Материал подкладки" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите материал подкладки",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx($e, {
                      control: n.control,
                      name: "bottomMaterial",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Материал низа/подошвы" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder: "Введите материал низа/подошвы",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex justify-between gap-6 items-end",
                  children: [
                    c.jsx($e, {
                      control: n.control,
                      name: "tnved",
                      render: ({ field: u }) =>
                        c.jsxs(xe, {
                          className: "flex-1",
                          children: [
                            c.jsx(we, { children: "Код ТНВЭД" }),
                            c.jsx(Se, {
                              children: c.jsx(ge, {
                                placeholder:
                                  "Введите код ТНВЭД (Оставьте пустой если не знаете код)",
                                ...u,
                              }),
                            }),
                            c.jsx(_e, {}),
                          ],
                        }),
                    }),
                    c.jsx(Ne, { type: "submit", children: "Добавить товар" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  T5 = ({ id: e, product: t }) =>
    c.jsxs(Is, {
      children: [
        c.jsx(Fs, {
          asChild: !0,
          children: c.jsx(Ne, { variant: "ghost", children: "Смотреть" }),
        }),
        c.jsxs($o, {
          children: [
            c.jsxs(ko, {
              children: [
                c.jsxs(jo, {
                  className: "p-1",
                  children: ["Продукт №", e + 1],
                }),
                c.jsxs(No, {
                  children: [
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Товарный знак",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.tradeMark,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Артикул/Модель",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.articleType,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Артикул/Модель (Значение)",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.articleName,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Вид обуви",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.shoesType,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Цвет",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.color,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Размер в штихмассовой системе",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.size,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Материал верха",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.upperMaterial,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Материал подкладки",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.liningMaterial,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Материал низа/подошвы",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.bottomMaterial,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Код ТНВЭД",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.tnved,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(Ro, { children: c.jsx(Po, { children: "Закрыть" }) }),
          ],
        }),
      ],
    }),
  M5 = ({ id: e }) => {
    const [t, n] = An(Sp),
      r = (o) => {
        n([...t.slice(0, o), ...t.slice(o + 1)]);
      };
    return c.jsxs(Is, {
      children: [
        c.jsx(Fs, {
          asChild: !0,
          children: c.jsx(Ne, {
            variant: "outline",
            size: "icon",
            children: c.jsx(Hf, { className: "w-4" }),
          }),
        }),
        c.jsxs($o, {
          children: [
            c.jsxs(ko, {
              children: [
                c.jsxs(jo, { children: ["Удалить: Продукт №", e + 1] }),
                c.jsx(No, {
                  children: c.jsx(Jf, {
                    children:
                      "Вы уверены что хотите удалить продукт из списка?",
                  }),
                }),
              ],
            }),
            c.jsxs(Ro, {
              children: [
                c.jsx(Po, { children: "Отмена" }),
                c.jsx(Nu, {
                  onClick: () => {
                    r(e);
                  },
                  children: "Подтвердить",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Im = [
    {
      id: "id",
      header: "#",
      cell: ({ row: e }) => (
        console.log(e),
        c.jsx("div", {
          className: "capitalize font-medium",
          children: e.index + 1,
        })
      ),
      enableSorting: !1,
      enableHiding: !1,
    },
    {
      accessorKey: "articleName",
      header: "Артикул/Модель",
      cell: ({ row: e }) =>
        c.jsx("div", {
          className: "capitalize font-medium",
          children: e.getValue("articleName"),
        }),
    },
    {
      accessorKey: "tradeMark",
      header: "Товарный знак",
      cell: ({ row: e }) =>
        c.jsx("div", {
          className: "capitalize",
          children: e.getValue("tradeMark"),
        }),
    },
    {
      accessorKey: "action",
      header: () => c.jsx("div", { className: "text-right" }),
      cell: ({ row: e }) =>
        c.jsxs("div", {
          className: "flex flex-row gap-2 items-center justify-end",
          children: [
            c.jsx(T5, { product: e.original, id: e.index }),
            c.jsx(Ne, {
              variant: "outline",
              size: "icon",
              children: c.jsx(Uf, { className: "w-4" }),
            }),
            c.jsx(M5, { id: e.index }),
            c.jsx(Ne, {
              variant: "outline",
              size: "icon",
              children: c.jsx(Bf, { className: "w-4" }),
            }),
          ],
        }),
    },
  ];
function O5() {
  var d, p;
  const [e] = An(Sp),
    [t, n] = m.useState([]),
    [r, o] = m.useState([]),
    [s, i] = m.useState({}),
    [l, a] = m.useState({}),
    u = xp({
      data: e,
      columns: Im,
      onSortingChange: n,
      onColumnFiltersChange: o,
      getCoreRowModel: mp(),
      getPaginationRowModel: vp(),
      getSortedRowModel: yp(),
      getFilteredRowModel: gp(),
      onColumnVisibilityChange: i,
      onRowSelectionChange: a,
      state: {
        sorting: t,
        columnFilters: r,
        columnVisibility: s,
        rowSelection: l,
      },
    });
  return c.jsxs("div", {
    className: "w-full m-auto my-12 p-12 bg-white rounded-xl shadow-lg",
    children: [
      c.jsxs("div", {
        className: "flex gap-2 items-center",
        children: [c.jsx(Ns, {}), c.jsx(mn, { children: "Список товаров" })],
      }),
      c.jsxs("div", {
        className: "flex items-center py-4 justify-between",
        children: [
          c.jsx(ge, {
            placeholder: "Поиск по артикулу",
            value:
              ((d = u.getColumn("articleName")) == null
                ? void 0
                : d.getFilterValue()) ?? "",
            onChange: (f) => {
              var h;
              return (h = u.getColumn("articleName")) == null
                ? void 0
                : h.setFilterValue(f.target.value);
            },
            className: "max-w-sm",
          }),
          c.jsxs("div", { children: ["Добавлено ", e.length, " шт"] }),
        ],
      }),
      c.jsx("div", {
        className: "rounded-md border",
        children: c.jsxs(Eu, {
          children: [
            c.jsx($u, {
              children: u
                .getHeaderGroups()
                .map((f) =>
                  c.jsx(
                    Nn,
                    {
                      children: f.headers.map((h) =>
                        c.jsx(
                          Ru,
                          {
                            children: h.isPlaceholder
                              ? null
                              : Cs(h.column.columnDef.header, h.getContext()),
                          },
                          h.id
                        )
                      ),
                    },
                    f.id
                  )
                ),
            }),
            c.jsx(ku, {
              children:
                (p = u.getRowModel().rows) != null && p.length
                  ? u
                      .getRowModel()
                      .rows.map((f) =>
                        c.jsx(
                          Nn,
                          {
                            "data-state": f.getIsSelected() && "selected",
                            children: f
                              .getVisibleCells()
                              .map((h) =>
                                c.jsx(
                                  go,
                                  {
                                    children: Cs(
                                      h.column.columnDef.cell,
                                      h.getContext()
                                    ),
                                  },
                                  h.id
                                )
                              ),
                          },
                          f.id
                        )
                      )
                  : c.jsx(Nn, {
                      children: c.jsx(go, {
                        colSpan: Im.length,
                        className: "h-24 text-center",
                        children: "Товаров не найдено.",
                      }),
                    }),
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        className: "flex items-center justify-end space-x-2 py-4",
        children: [
          c.jsxs("div", {
            className: "flex-1 text-sm text-muted-foreground",
            children: [
              u.getFilteredSelectedRowModel().rows.length,
              " из",
              " ",
              u.getFilteredRowModel().rows.length,
              " строк выделено.",
            ],
          }),
          c.jsxs("div", {
            className: "space-x-2",
            children: [
              c.jsx(Ne, {
                variant: "outline",
                size: "sm",
                onClick: () => u.previousPage(),
                disabled: !u.getCanPreviousPage(),
                children: "Прошлая страница",
              }),
              c.jsx(Ne, {
                variant: "outline",
                size: "sm",
                onClick: () => u.nextPage(),
                disabled: !u.getCanNextPage(),
                children: "Следующая страница",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const A5 = () =>
    c.jsxs(c.Fragment, {
      children: [
        c.jsx(al, { children: "Новая накладная «Обувь»" }),
        c.jsx(P5, {}),
        c.jsx(O5, {}),
      ],
    }),
  I5 = () => c.jsx(hE, {}),
  F5 = le.object({
    email: le
      .string()
      .min(1, { message: "Это поле должно быть заполнено" })
      .email("Данный E-mail некорретный."),
  }),
  D5 = le.object({
    password: le
      .string()
      .min(6, "Пароль должен содержать не менее 6-ти символов"),
    confirmPassword: le
      .string()
      .min(6, "Пароль должен содержать не менее 6-ти символов"),
  }),
  L5 = () => {
    const e = So({ resolver: _o(F5), defaultValues: { email: "" } }),
      t = async (n) => {
        try {
          await ws.sendResetPasswordRequest(n),
            Jn("Запрос был отправлен вам на E-mail", {
              description: "Перейдите по ссылке отправленной в письме",
              action: { label: "Скрыть", onClick: () => {} },
            });
        } catch (r) {
          console.log(r),
            Jn("Что-то пошло не так", {
              description:
                r != null && r.message
                  ? r == null
                    ? void 0
                    : r.message
                  : "Попробуйте позже",
              action: { label: "Скрыть", onClick: () => console.error(r) },
            });
        }
      };
    return c.jsx("div", {
      className: "max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg",
      children: c.jsxs(Co, {
        ...e,
        children: [
          c.jsx(al, { children: "Восстановить пароль" }),
          c.jsxs("form", {
            onSubmit: e.handleSubmit(t),
            className: "space-y-4 mt-4",
            children: [
              c.jsx($e, {
                control: e.control,
                name: "email",
                render: ({ field: n }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "E-mail" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          placeholder: "Введите ваш E-mail",
                          ...n,
                        }),
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsxs("div", {
                className: "flex justify-between",
                children: [
                  c.jsx(Ne, { type: "submit", children: "Отправить пароль" }),
                  c.jsx(Fr, {
                    to: "/auth",
                    children: c.jsx(Ne, {
                      variant: "ghost",
                      children: "Уже есть аккаунт? Войти",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  V5 = () => {
    const { search: e } = js(),
      t = hu();
    m.useEffect(() => {}, [t, e]);
    const n = So({
        resolver: _o(D5),
        defaultValues: { password: "", confirmPassword: "" },
      }),
      r = n.watch("password"),
      o = n.watch("confirmPassword");
    m.useEffect(() => {
      r !== o
        ? n.setError("confirmPassword", {
            type: "custom",
            message: "Подтверждающий пароль не совпадает с исходным",
          })
        : n.clearErrors();
    }, [r, o]);
    const s = async (i) => {
      try {
        const l = e.slice(7);
        await ws.sendNewPassword(l, i),
          Jn("Пароль успешно изменен!", {
            description: "Вы можете войти в свой аккаунт",
            action: {
              label: "Войти",
              onClick: () => {
                t("/auth");
              },
            },
          });
      } catch (l) {
        console.log(l),
          Jn("Что-то пошло не так", {
            description:
              l != null && l.message
                ? l == null
                  ? void 0
                  : l.message
                : "Попробуйте позже",
            action: { label: "Скрыть", onClick: () => console.error(l) },
          });
      }
    };
    return c.jsx("div", {
      className: "max-w-lg m-auto p-12 bg-white rounded-xl shadow-lg",
      children: c.jsxs(Co, {
        ...n,
        children: [
          c.jsx(al, { children: "Введите новый пароль" }),
          c.jsxs("form", {
            onSubmit: n.handleSubmit(s),
            className: "space-y-4 mt-4	",
            children: [
              c.jsx($e, {
                control: n.control,
                name: "password",
                render: ({ field: i }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "Новый пароль" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          type: "password",
                          placeholder: "Введите новый пароль",
                          ...i,
                        }),
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx($e, {
                control: n.control,
                name: "confirmPassword",
                render: ({ field: i }) =>
                  c.jsxs(xe, {
                    children: [
                      c.jsx(we, { children: "Подтвердите новый пароль" }),
                      c.jsx(Se, {
                        children: c.jsx(ge, {
                          type: "password",
                          placeholder: "Подтвердите новый пароль",
                          ...i,
                        }),
                      }),
                      c.jsx(_e, {}),
                    ],
                  }),
              }),
              c.jsx("div", {
                className: "flex justify-between",
                children: c.jsx(Ne, {
                  className: "flex w-[100%]",
                  type: "submit",
                  children: "Сохранить пароль",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  z5 = () => c.jsx(V5, {}),
  B5 = () => c.jsx(L5, {}),
  U5 = le.object({
    category: le.string(),
    name: le
      .string()
      .min(3, { message: "Название должно содержать не менее 6-ти символов" }),
    quantity: le.coerce.number(),
    price: le.coerce.number(),
  }),
  H5 = [
    "Одежда",
    "Обувь",
    "Косметика",
    "Головные уборы",
    "Изделия-штучные",
    "Ткани",
    "Духи",
    "Автозапчасти",
    "Сумки",
  ],
  _p = ul([]),
  W5 = () => {
    const [e, t] = An(_p),
      n = So({ resolver: _o(U5) }),
      r = (o) => {
        t([...e, o]);
      };
    return c.jsx("div", {
      className: "m-auto my-12 p-12 bg-white rounded-xl shadow-lg",
      children: c.jsxs(Co, {
        ...n,
        children: [
          c.jsxs("div", {
            className: "flex gap-2 items-center",
            children: [
              c.jsx(Ns, {}),
              c.jsx(mn, { children: "Добавить новый товар" }),
            ],
          }),
          c.jsx(ho, { className: "mt-2" }),
          c.jsxs("form", {
            onSubmit: n.handleSubmit(r),
            className: "space-y-4 mt-3",
            children: [
              c.jsxs("div", {
                className: "flex gap-6",
                children: [
                  c.jsx(Gn, {
                    className: "flex-1",
                    form: n,
                    name: "category",
                    label: "Категория товара",
                    placeholder: "Выберите категорию товара",
                    options: H5,
                  }),
                  c.jsx($e, {
                    control: n.control,
                    name: "name",
                    render: ({ field: o }) =>
                      c.jsxs(xe, {
                        className: "flex-1",
                        children: [
                          c.jsx(we, { children: "Наименование" }),
                          c.jsx(Se, {
                            children: c.jsx(ge, {
                              placeholder: "Введите наименование товара",
                              ...o,
                            }),
                          }),
                          c.jsx(_e, {}),
                        ],
                      }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex gap-6 items-end",
                children: [
                  c.jsx($e, {
                    control: n.control,
                    name: "quantity",
                    render: ({ field: o }) =>
                      c.jsxs(xe, {
                        className: "flex-1",
                        children: [
                          c.jsx(we, { children: "Кол-во, шт" }),
                          c.jsx(Se, {
                            children: c.jsx(ge, {
                              type: "number",
                              placeholder: "Введите количество товаров",
                              ...o,
                            }),
                          }),
                          c.jsx(_e, {}),
                        ],
                      }),
                  }),
                  c.jsx($e, {
                    control: n.control,
                    name: "price",
                    render: ({ field: o }) =>
                      c.jsxs(xe, {
                        className: "flex-1",
                        children: [
                          c.jsx(we, { children: "Цена, ₽" }),
                          c.jsx(Se, {
                            children: c.jsx(ge, {
                              type: "number",
                              placeholder: "Введите цену товаров",
                              ...o,
                            }),
                          }),
                          c.jsx(_e, {}),
                        ],
                      }),
                  }),
                  c.jsx(Ne, { type: "submit", children: "Добавить товар" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Z5 = ({ id: e, product: t }) =>
    c.jsxs(Is, {
      children: [
        c.jsx(Fs, {
          asChild: !0,
          children: c.jsx(Ne, { variant: "ghost", children: "Смотреть" }),
        }),
        c.jsxs($o, {
          children: [
            c.jsxs(ko, {
              children: [
                c.jsxs(jo, {
                  className: "p-1",
                  children: ["Продукт №", e + 1],
                }),
                c.jsxs(No, {
                  children: [
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Категория товаров",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.category,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Наименование",
                        }),
                        c.jsx("span", {
                          className: "text-base",
                          children: t.name,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Кол-во товаров",
                        }),
                        c.jsxs("span", {
                          className: "text-base",
                          children: [t.quantity, " шт."],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "flex justify-between mb-2 p-1 border-b border-gray-200",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold text-base",
                          children: "Цена",
                        }),
                        c.jsxs("span", {
                          className: "text-base",
                          children: [t.price, " ₽"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(Ro, { children: c.jsx(Po, { children: "Закрыть" }) }),
          ],
        }),
      ],
    }),
  G5 = ({ id: e }) => {
    const [t, n] = An(_p),
      r = (o) => {
        n([...t.slice(0, o), ...t.slice(o + 1)]);
      };
    return c.jsxs(Is, {
      children: [
        c.jsx(Fs, {
          asChild: !0,
          children: c.jsx(Ne, {
            variant: "outline",
            size: "icon",
            children: c.jsx(Hf, { className: "w-4" }),
          }),
        }),
        c.jsxs($o, {
          children: [
            c.jsxs(ko, {
              children: [
                c.jsxs(jo, { children: ["Удалить: Продукт №", e + 1] }),
                c.jsx(No, {
                  children: c.jsx(Jf, {
                    children:
                      "Вы уверены что хотите удалить продукт из списка?",
                  }),
                }),
              ],
            }),
            c.jsxs(Ro, {
              children: [
                c.jsx(Po, { children: "Отмена" }),
                c.jsx(Nu, {
                  onClick: () => {
                    r(e);
                  },
                  children: "Подтвердить",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Fm = [
    {
      id: "id",
      header: "#",
      cell: ({ row: e }) =>
        c.jsxs("div", {
          className: "capitalize font-medium",
          children: ["#", e.index + 1],
        }),
      enableSorting: !1,
      enableHiding: !1,
    },
    {
      accessorKey: "name",
      header: "Наименование",
      cell: ({ row: e }) =>
        c.jsx("div", {
          className: "capitalize font-medium",
          children: e.getValue("name"),
        }),
    },
    {
      accessorKey: "category",
      header: "Категория",
      cell: ({ row: e }) =>
        c.jsx("div", {
          className: "capitalize",
          children: e.getValue("category"),
        }),
    },
    {
      accessorKey: "quantity",
      header: "Кол-во",
      cell: ({ row: e }) =>
        c.jsxs("div", {
          className: "capitalize",
          children: [e.getValue("quantity"), " шт."],
        }),
    },
    {
      accessorKey: "price",
      header: "Цена",
      cell: ({ row: e }) =>
        c.jsxs("div", {
          className: "capitalize",
          children: [e.getValue("price"), " ₽"],
        }),
    },
    {
      accessorKey: "action",
      header: () => c.jsx("div", { className: "text-right" }),
      cell: ({ row: e }) =>
        c.jsxs("div", {
          className: "flex flex-row gap-2 items-center justify-end",
          children: [
            c.jsx(Z5, { product: e.original, id: e.index }),
            c.jsx(Ne, {
              variant: "outline",
              size: "icon",
              children: c.jsx(Uf, { className: "w-4" }),
            }),
            c.jsx(G5, { id: e.index }),
            c.jsx(Ne, {
              variant: "outline",
              size: "icon",
              children: c.jsx(Bf, { className: "w-4" }),
            }),
          ],
        }),
    },
  ];
function K5() {
  var d, p;
  const [e] = An(_p),
    [t, n] = m.useState([]),
    [r, o] = m.useState([]),
    [s, i] = m.useState({}),
    [l, a] = m.useState({}),
    u = xp({
      data: e,
      columns: Fm,
      onSortingChange: n,
      onColumnFiltersChange: o,
      getCoreRowModel: mp(),
      getPaginationRowModel: vp(),
      getSortedRowModel: yp(),
      getFilteredRowModel: gp(),
      onColumnVisibilityChange: i,
      onRowSelectionChange: a,
      state: {
        sorting: t,
        columnFilters: r,
        columnVisibility: s,
        rowSelection: l,
      },
    });
  return c.jsxs("div", {
    className: "w-full m-auto my-12 p-12 bg-white rounded-xl shadow-lg",
    children: [
      c.jsxs("div", {
        className: "flex gap-2 items-center",
        children: [
          c.jsx(Ns, {}),
          c.jsx(mn, { children: "Список товаров для поставки" }),
        ],
      }),
      c.jsxs("div", {
        className: "flex items-center py-4 justify-between",
        children: [
          c.jsx(ge, {
            placeholder: "Поиск по названию",
            value:
              ((d = u.getColumn("name")) == null
                ? void 0
                : d.getFilterValue()) ?? "",
            onChange: (f) => {
              var h;
              return (h = u.getColumn("name")) == null
                ? void 0
                : h.setFilterValue(f.target.value);
            },
            className: "max-w-sm",
          }),
          c.jsxs("div", { children: ["Добавлено ", e.length, " шт"] }),
        ],
      }),
      c.jsx("div", {
        className: "rounded-md border",
        children: c.jsxs(Eu, {
          children: [
            c.jsx($u, {
              children: u
                .getHeaderGroups()
                .map((f) =>
                  c.jsx(
                    Nn,
                    {
                      children: f.headers.map((h) =>
                        c.jsx(
                          Ru,
                          {
                            children: h.isPlaceholder
                              ? null
                              : Cs(h.column.columnDef.header, h.getContext()),
                          },
                          h.id
                        )
                      ),
                    },
                    f.id
                  )
                ),
            }),
            c.jsx(ku, {
              children:
                (p = u.getRowModel().rows) != null && p.length
                  ? u
                      .getRowModel()
                      .rows.map((f) =>
                        c.jsx(
                          Nn,
                          {
                            "data-state": f.getIsSelected() && "selected",
                            children: f
                              .getVisibleCells()
                              .map((h) =>
                                c.jsx(
                                  go,
                                  {
                                    children: Cs(
                                      h.column.columnDef.cell,
                                      h.getContext()
                                    ),
                                  },
                                  h.id
                                )
                              ),
                          },
                          f.id
                        )
                      )
                  : c.jsx(Nn, {
                      children: c.jsx(go, {
                        colSpan: Fm.length,
                        className: "h-24 text-center",
                        children: "Товаров не найдено.",
                      }),
                    }),
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        className: "flex items-center justify-end space-x-2 py-4",
        children: [
          c.jsxs("div", {
            className: "flex-1 text-sm text-muted-foreground",
            children: [
              u.getFilteredSelectedRowModel().rows.length,
              " из",
              " ",
              u.getFilteredRowModel().rows.length,
              " строк выделено.",
            ],
          }),
          c.jsxs("div", {
            className: "space-x-2",
            children: [
              c.jsx(Ne, {
                variant: "outline",
                size: "sm",
                onClick: () => u.previousPage(),
                disabled: !u.getCanPreviousPage(),
                children: "Прошлая страница",
              }),
              c.jsx(Ne, {
                variant: "outline",
                size: "sm",
                onClick: () => u.nextPage(),
                disabled: !u.getCanNextPage(),
                children: "Следующая страница",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Y5 = () =>
  c.jsxs(c.Fragment, { children: [c.jsx(W5, {}), c.jsx(K5, {})] });
function Q5() {
  return c.jsxs(BS, {
    children: [
      c.jsx(tn, { path: "/", element: c.jsx(Dn, { children: c.jsx(E5, {}) }) }),
      c.jsx(tn, {
        path: "/auth",
        element: c.jsx(Dn, { children: c.jsx(yE, {}) }),
      }),
      c.jsx(tn, {
        path: "/registration",
        element: c.jsxs(Dn, { children: [" ", c.jsx($5, {})] }),
      }),
      c.jsx(tn, {
        path: "/category/shoes",
        element: c.jsx(Dn, { children: c.jsx(A5, {}) }),
      }),
      c.jsx(tn, {
        path: "/category/clothes",
        element: c.jsx(Dn, { children: c.jsx(b5, {}) }),
      }),
      c.jsx(tn, {
        path: "/signupconfirm",
        element: c.jsx(Dn, { children: c.jsx(I5, {}) }),
      }),
      c.jsx(tn, {
        path: "/password-recovery",
        element: c.jsx(Dn, { children: c.jsx(B5, {}) }),
      }),
      c.jsx(tn, {
        path: "/recoverpassword",
        element: c.jsx(Dn, { children: c.jsx(z5, {}) }),
      }),
      c.jsx(tn, {
        path: "/new-order",
        element: c.jsx(Dn, { children: c.jsx(Y5, {}) }),
      }),
      c.jsx(tn, { path: "*", element: c.jsx(c.Fragment, {}) }),
    ],
  });
}
Rc.createRoot(document.getElementById("root")).render(
  c.jsx(D.StrictMode, { children: c.jsx(YS, { children: c.jsx(Q5, {}) }) })
);