(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        l(c);
    new MutationObserver(c => {
        for (const o of c)
            if (o.type === "childList")
                for (const B of o.addedNodes)
                    B.tagName === "LINK" && B.rel === "modulepreload" && l(B)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
        const o = {};
        return c.integrity && (o.integrity = c.integrity),
        c.referrerPolicy && (o.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? o.credentials = "include" : c.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function l(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const o = i(c);
        fetch(c.href, o)
    }
}
)();
function X0(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var yc = {
    exports: {}
}
  , yl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function FC() {
    if (Ld)
        return yl;
    Ld = 1;
    var r = Symbol.for("react.transitional.element")
      , n = Symbol.for("react.fragment");
    function i(l, c, o) {
        var B = null;
        if (o !== void 0 && (B = "" + o),
        c.key !== void 0 && (B = "" + c.key),
        "key"in c) {
            o = {};
            for (var d in c)
                d !== "key" && (o[d] = c[d])
        } else
            o = c;
        return c = o.ref,
        {
            $$typeof: r,
            type: l,
            key: B,
            ref: c !== void 0 ? c : null,
            props: o
        }
    }
    return yl.Fragment = n,
    yl.jsx = i,
    yl.jsxs = i,
    yl
}
var Id;
function yC() {
    return Id || (Id = 1,
    yc.exports = FC()),
    yc.exports
}
var w = yC()
  , Ec = {
    exports: {}
}
  , cA = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function EC() {
    if (Md)
        return cA;
    Md = 1;
    var r = Symbol.for("react.transitional.element")
      , n = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , o = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , Q = Symbol.for("react.memo")
      , U = Symbol.for("react.lazy")
      , C = Symbol.for("react.activity")
      , y = Symbol.iterator;
    function I(v) {
        return v === null || typeof v != "object" ? null : (v = y && v[y] || v["@@iterator"],
        typeof v == "function" ? v : null)
    }
    var D = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , L = Object.assign
      , X = {};
    function _(v, T, j) {
        this.props = v,
        this.context = T,
        this.refs = X,
        this.updater = j || D
    }
    _.prototype.isReactComponent = {},
    _.prototype.setState = function(v, T) {
        if (typeof v != "object" && typeof v != "function" && v != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, v, T, "setState")
    }
    ,
    _.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate")
    }
    ;
    function R() {}
    R.prototype = _.prototype;
    function W(v, T, j) {
        this.props = v,
        this.context = T,
        this.refs = X,
        this.updater = j || D
    }
    var AA = W.prototype = new R;
    AA.constructor = W,
    L(AA, _.prototype),
    AA.isPureReactComponent = !0;
    var P = Array.isArray;
    function N() {}
    var G = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Z = Object.prototype.hasOwnProperty;
    function J(v, T, j) {
        var Y = j.ref;
        return {
            $$typeof: r,
            type: v,
            key: T,
            ref: Y !== void 0 ? Y : null,
            props: j
        }
    }
    function nA(v, T) {
        return J(v.type, T, v.props)
    }
    function sA(v) {
        return typeof v == "object" && v !== null && v.$$typeof === r
    }
    function gA(v) {
        var T = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + v.replace(/[=:]/g, function(j) {
            return T[j]
        })
    }
    var oA = /\/+/g;
    function HA(v, T) {
        return typeof v == "object" && v !== null && v.key != null ? gA("" + v.key) : T.toString(36)
    }
    function GA(v) {
        switch (v.status) {
        case "fulfilled":
            return v.value;
        case "rejected":
            throw v.reason;
        default:
            switch (typeof v.status == "string" ? v.then(N, N) : (v.status = "pending",
            v.then(function(T) {
                v.status === "pending" && (v.status = "fulfilled",
                v.value = T)
            }, function(T) {
                v.status === "pending" && (v.status = "rejected",
                v.reason = T)
            })),
            v.status) {
            case "fulfilled":
                return v.value;
            case "rejected":
                throw v.reason
            }
        }
        throw v
    }
    function S(v, T, j, Y, aA) {
        var uA = typeof v;
        (uA === "undefined" || uA === "boolean") && (v = null);
        var QA = !1;
        if (v === null)
            QA = !0;
        else
            switch (uA) {
            case "bigint":
            case "string":
            case "number":
                QA = !0;
                break;
            case "object":
                switch (v.$$typeof) {
                case r:
                case n:
                    QA = !0;
                    break;
                case U:
                    return QA = v._init,
                    S(QA(v._payload), T, j, Y, aA)
                }
            }
        if (QA)
            return aA = aA(v),
            QA = Y === "" ? "." + HA(v, 0) : Y,
            P(aA) ? (j = "",
            QA != null && (j = QA.replace(oA, "$&/") + "/"),
            S(aA, T, j, "", function(Dn) {
                return Dn
            })) : aA != null && (sA(aA) && (aA = nA(aA, j + (aA.key == null || v && v.key === aA.key ? "" : ("" + aA.key).replace(oA, "$&/") + "/") + QA)),
            T.push(aA)),
            1;
        QA = 0;
        var de = Y === "" ? "." : Y + ":";
        if (P(v))
            for (var jA = 0; jA < v.length; jA++)
                Y = v[jA],
                uA = de + HA(Y, jA),
                QA += S(Y, T, j, uA, aA);
        else if (jA = I(v),
        typeof jA == "function")
            for (v = jA.call(v),
            jA = 0; !(Y = v.next()).done; )
                Y = Y.value,
                uA = de + HA(Y, jA++),
                QA += S(Y, T, j, uA, aA);
        else if (uA === "object") {
            if (typeof v.then == "function")
                return S(GA(v), T, j, Y, aA);
            throw T = String(v),
            Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.")
        }
        return QA
    }
    function z(v, T, j) {
        if (v == null)
            return v;
        var Y = []
          , aA = 0;
        return S(v, Y, "", "", function(uA) {
            return T.call(j, uA, aA++)
        }),
        Y
    }
    function V(v) {
        if (v._status === -1) {
            var T = v._result;
            T = T(),
            T.then(function(j) {
                (v._status === 0 || v._status === -1) && (v._status = 1,
                v._result = j)
            }, function(j) {
                (v._status === 0 || v._status === -1) && (v._status = 2,
                v._result = j)
            }),
            v._status === -1 && (v._status = 0,
            v._result = T)
        }
        if (v._status === 1)
            return v._result.default;
        throw v._result
    }
    var eA = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var T = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
                error: v
            });
            if (!window.dispatchEvent(T))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", v);
            return
        }
        console.error(v)
    }
      , rA = {
        map: z,
        forEach: function(v, T, j) {
            z(v, function() {
                T.apply(this, arguments)
            }, j)
        },
        count: function(v) {
            var T = 0;
            return z(v, function() {
                T++
            }),
            T
        },
        toArray: function(v) {
            return z(v, function(T) {
                return T
            }) || []
        },
        only: function(v) {
            if (!sA(v))
                throw Error("React.Children.only expected to receive a single React element child.");
            return v
        }
    };
    return cA.Activity = C,
    cA.Children = rA,
    cA.Component = _,
    cA.Fragment = i,
    cA.Profiler = c,
    cA.PureComponent = W,
    cA.StrictMode = l,
    cA.Suspense = g,
    cA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G,
    cA.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(v) {
            return G.H.useMemoCache(v)
        }
    },
    cA.cache = function(v) {
        return function() {
            return v.apply(null, arguments)
        }
    }
    ,
    cA.cacheSignal = function() {
        return null
    }
    ,
    cA.cloneElement = function(v, T, j) {
        if (v == null)
            throw Error("The argument must be a React element, but you passed " + v + ".");
        var Y = L({}, v.props)
          , aA = v.key;
        if (T != null)
            for (uA in T.key !== void 0 && (aA = "" + T.key),
            T)
                !Z.call(T, uA) || uA === "key" || uA === "__self" || uA === "__source" || uA === "ref" && T.ref === void 0 || (Y[uA] = T[uA]);
        var uA = arguments.length - 2;
        if (uA === 1)
            Y.children = j;
        else if (1 < uA) {
            for (var QA = Array(uA), de = 0; de < uA; de++)
                QA[de] = arguments[de + 2];
            Y.children = QA
        }
        return J(v.type, aA, Y)
    }
    ,
    cA.createContext = function(v) {
        return v = {
            $$typeof: B,
            _currentValue: v,
            _currentValue2: v,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        v.Provider = v,
        v.Consumer = {
            $$typeof: o,
            _context: v
        },
        v
    }
    ,
    cA.createElement = function(v, T, j) {
        var Y, aA = {}, uA = null;
        if (T != null)
            for (Y in T.key !== void 0 && (uA = "" + T.key),
            T)
                Z.call(T, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (aA[Y] = T[Y]);
        var QA = arguments.length - 2;
        if (QA === 1)
            aA.children = j;
        else if (1 < QA) {
            for (var de = Array(QA), jA = 0; jA < QA; jA++)
                de[jA] = arguments[jA + 2];
            aA.children = de
        }
        if (v && v.defaultProps)
            for (Y in QA = v.defaultProps,
            QA)
                aA[Y] === void 0 && (aA[Y] = QA[Y]);
        return J(v, uA, aA)
    }
    ,
    cA.createRef = function() {
        return {
            current: null
        }
    }
    ,
    cA.forwardRef = function(v) {
        return {
            $$typeof: d,
            render: v
        }
    }
    ,
    cA.isValidElement = sA,
    cA.lazy = function(v) {
        return {
            $$typeof: U,
            _payload: {
                _status: -1,
                _result: v
            },
            _init: V
        }
    }
    ,
    cA.memo = function(v, T) {
        return {
            $$typeof: Q,
            type: v,
            compare: T === void 0 ? null : T
        }
    }
    ,
    cA.startTransition = function(v) {
        var T = G.T
          , j = {};
        G.T = j;
        try {
            var Y = v()
              , aA = G.S;
            aA !== null && aA(j, Y),
            typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(N, eA)
        } catch (uA) {
            eA(uA)
        } finally {
            T !== null && j.types !== null && (T.types = j.types),
            G.T = T
        }
    }
    ,
    cA.unstable_useCacheRefresh = function() {
        return G.H.useCacheRefresh()
    }
    ,
    cA.use = function(v) {
        return G.H.use(v)
    }
    ,
    cA.useActionState = function(v, T, j) {
        return G.H.useActionState(v, T, j)
    }
    ,
    cA.useCallback = function(v, T) {
        return G.H.useCallback(v, T)
    }
    ,
    cA.useContext = function(v) {
        return G.H.useContext(v)
    }
    ,
    cA.useDebugValue = function() {}
    ,
    cA.useDeferredValue = function(v, T) {
        return G.H.useDeferredValue(v, T)
    }
    ,
    cA.useEffect = function(v, T) {
        return G.H.useEffect(v, T)
    }
    ,
    cA.useEffectEvent = function(v) {
        return G.H.useEffectEvent(v)
    }
    ,
    cA.useId = function() {
        return G.H.useId()
    }
    ,
    cA.useImperativeHandle = function(v, T, j) {
        return G.H.useImperativeHandle(v, T, j)
    }
    ,
    cA.useInsertionEffect = function(v, T) {
        return G.H.useInsertionEffect(v, T)
    }
    ,
    cA.useLayoutEffect = function(v, T) {
        return G.H.useLayoutEffect(v, T)
    }
    ,
    cA.useMemo = function(v, T) {
        return G.H.useMemo(v, T)
    }
    ,
    cA.useOptimistic = function(v, T) {
        return G.H.useOptimistic(v, T)
    }
    ,
    cA.useReducer = function(v, T, j) {
        return G.H.useReducer(v, T, j)
    }
    ,
    cA.useRef = function(v) {
        return G.H.useRef(v)
    }
    ,
    cA.useState = function(v) {
        return G.H.useState(v)
    }
    ,
    cA.useSyncExternalStore = function(v, T, j) {
        return G.H.useSyncExternalStore(v, T, j)
    }
    ,
    cA.useTransition = function() {
        return G.H.useTransition()
    }
    ,
    cA.version = "19.2.4",
    cA
}
var Nd;
function po() {
    return Nd || (Nd = 1,
    Ec.exports = EC()),
    Ec.exports
}
var yA = po();
const Pc = X0(yA);
var Hc = {
    exports: {}
}
  , El = {}
  , bc = {
    exports: {}
}
  , xc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function HC() {
    return Od || (Od = 1,
    (function(r) {
        function n(S, z) {
            var V = S.length;
            S.push(z);
            A: for (; 0 < V; ) {
                var eA = V - 1 >>> 1
                  , rA = S[eA];
                if (0 < c(rA, z))
                    S[eA] = z,
                    S[V] = rA,
                    V = eA;
                else
                    break A
            }
        }
        function i(S) {
            return S.length === 0 ? null : S[0]
        }
        function l(S) {
            if (S.length === 0)
                return null;
            var z = S[0]
              , V = S.pop();
            if (V !== z) {
                S[0] = V;
                A: for (var eA = 0, rA = S.length, v = rA >>> 1; eA < v; ) {
                    var T = 2 * (eA + 1) - 1
                      , j = S[T]
                      , Y = T + 1
                      , aA = S[Y];
                    if (0 > c(j, V))
                        Y < rA && 0 > c(aA, j) ? (S[eA] = aA,
                        S[Y] = V,
                        eA = Y) : (S[eA] = j,
                        S[T] = V,
                        eA = T);
                    else if (Y < rA && 0 > c(aA, V))
                        S[eA] = aA,
                        S[Y] = V,
                        eA = Y;
                    else
                        break A
                }
            }
            return z
        }
        function c(S, z) {
            var V = S.sortIndex - z.sortIndex;
            return V !== 0 ? V : S.id - z.id
        }
        if (r.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var o = performance;
            r.unstable_now = function() {
                return o.now()
            }
        } else {
            var B = Date
              , d = B.now();
            r.unstable_now = function() {
                return B.now() - d
            }
        }
        var g = []
          , Q = []
          , U = 1
          , C = null
          , y = 3
          , I = !1
          , D = !1
          , L = !1
          , X = !1
          , _ = typeof setTimeout == "function" ? setTimeout : null
          , R = typeof clearTimeout == "function" ? clearTimeout : null
          , W = typeof setImmediate < "u" ? setImmediate : null;
        function AA(S) {
            for (var z = i(Q); z !== null; ) {
                if (z.callback === null)
                    l(Q);
                else if (z.startTime <= S)
                    l(Q),
                    z.sortIndex = z.expirationTime,
                    n(g, z);
                else
                    break;
                z = i(Q)
            }
        }
        function P(S) {
            if (L = !1,
            AA(S),
            !D)
                if (i(g) !== null)
                    D = !0,
                    N || (N = !0,
                    gA());
                else {
                    var z = i(Q);
                    z !== null && GA(P, z.startTime - S)
                }
        }
        var N = !1
          , G = -1
          , Z = 5
          , J = -1;
        function nA() {
            return X ? !0 : !(r.unstable_now() - J < Z)
        }
        function sA() {
            if (X = !1,
            N) {
                var S = r.unstable_now();
                J = S;
                var z = !0;
                try {
                    A: {
                        D = !1,
                        L && (L = !1,
                        R(G),
                        G = -1),
                        I = !0;
                        var V = y;
                        try {
                            e: {
                                for (AA(S),
                                C = i(g); C !== null && !(C.expirationTime > S && nA()); ) {
                                    var eA = C.callback;
                                    if (typeof eA == "function") {
                                        C.callback = null,
                                        y = C.priorityLevel;
                                        var rA = eA(C.expirationTime <= S);
                                        if (S = r.unstable_now(),
                                        typeof rA == "function") {
                                            C.callback = rA,
                                            AA(S),
                                            z = !0;
                                            break e
                                        }
                                        C === i(g) && l(g),
                                        AA(S)
                                    } else
                                        l(g);
                                    C = i(g)
                                }
                                if (C !== null)
                                    z = !0;
                                else {
                                    var v = i(Q);
                                    v !== null && GA(P, v.startTime - S),
                                    z = !1
                                }
                            }
                            break A
                        } finally {
                            C = null,
                            y = V,
                            I = !1
                        }
                        z = void 0
                    }
                } finally {
                    z ? gA() : N = !1
                }
            }
        }
        var gA;
        if (typeof W == "function")
            gA = function() {
                W(sA)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var oA = new MessageChannel
              , HA = oA.port2;
            oA.port1.onmessage = sA,
            gA = function() {
                HA.postMessage(null)
            }
        } else
            gA = function() {
                _(sA, 0)
            }
            ;
        function GA(S, z) {
            G = _(function() {
                S(r.unstable_now())
            }, z)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(S) {
            S.callback = null
        }
        ,
        r.unstable_forceFrameRate = function(S) {
            0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < S ? Math.floor(1e3 / S) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return y
        }
        ,
        r.unstable_next = function(S) {
            switch (y) {
            case 1:
            case 2:
            case 3:
                var z = 3;
                break;
            default:
                z = y
            }
            var V = y;
            y = z;
            try {
                return S()
            } finally {
                y = V
            }
        }
        ,
        r.unstable_requestPaint = function() {
            X = !0
        }
        ,
        r.unstable_runWithPriority = function(S, z) {
            switch (S) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                S = 3
            }
            var V = y;
            y = S;
            try {
                return z()
            } finally {
                y = V
            }
        }
        ,
        r.unstable_scheduleCallback = function(S, z, V) {
            var eA = r.unstable_now();
            switch (typeof V == "object" && V !== null ? (V = V.delay,
            V = typeof V == "number" && 0 < V ? eA + V : eA) : V = eA,
            S) {
            case 1:
                var rA = -1;
                break;
            case 2:
                rA = 250;
                break;
            case 5:
                rA = 1073741823;
                break;
            case 4:
                rA = 1e4;
                break;
            default:
                rA = 5e3
            }
            return rA = V + rA,
            S = {
                id: U++,
                callback: z,
                priorityLevel: S,
                startTime: V,
                expirationTime: rA,
                sortIndex: -1
            },
            V > eA ? (S.sortIndex = V,
            n(Q, S),
            i(g) === null && S === i(Q) && (L ? (R(G),
            G = -1) : L = !0,
            GA(P, V - eA))) : (S.sortIndex = rA,
            n(g, S),
            D || I || (D = !0,
            N || (N = !0,
            gA()))),
            S
        }
        ,
        r.unstable_shouldYield = nA,
        r.unstable_wrapCallback = function(S) {
            var z = y;
            return function() {
                var V = y;
                y = z;
                try {
                    return S.apply(this, arguments)
                } finally {
                    y = V
                }
            }
        }
    }
    )(xc)),
    xc
}
var Rd;
function bC() {
    return Rd || (Rd = 1,
    bc.exports = HC()),
    bc.exports
}
var Sc = {
    exports: {}
}
  , fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function xC() {
    if (_d)
        return fe;
    _d = 1;
    var r = po();
    function n(g) {
        var Q = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            Q += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var U = 2; U < arguments.length; U++)
                Q += "&args[]=" + encodeURIComponent(arguments[U])
        }
        return "Minified React error #" + g + "; visit " + Q + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function i() {}
    var l = {
        d: {
            f: i,
            r: function() {
                throw Error(n(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function o(g, Q, U) {
        var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: C == null ? null : "" + C,
            children: g,
            containerInfo: Q,
            implementation: U
        }
    }
    var B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(g, Q) {
        if (g === "font")
            return "";
        if (typeof Q == "string")
            return Q === "use-credentials" ? Q : ""
    }
    return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l,
    fe.createPortal = function(g, Q) {
        var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Q || Q.nodeType !== 1 && Q.nodeType !== 9 && Q.nodeType !== 11)
            throw Error(n(299));
        return o(g, Q, null, U)
    }
    ,
    fe.flushSync = function(g) {
        var Q = B.T
          , U = l.p;
        try {
            if (B.T = null,
            l.p = 2,
            g)
                return g()
        } finally {
            B.T = Q,
            l.p = U,
            l.d.f()
        }
    }
    ,
    fe.preconnect = function(g, Q) {
        typeof g == "string" && (Q ? (Q = Q.crossOrigin,
        Q = typeof Q == "string" ? Q === "use-credentials" ? Q : "" : void 0) : Q = null,
        l.d.C(g, Q))
    }
    ,
    fe.prefetchDNS = function(g) {
        typeof g == "string" && l.d.D(g)
    }
    ,
    fe.preinit = function(g, Q) {
        if (typeof g == "string" && Q && typeof Q.as == "string") {
            var U = Q.as
              , C = d(U, Q.crossOrigin)
              , y = typeof Q.integrity == "string" ? Q.integrity : void 0
              , I = typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0;
            U === "style" ? l.d.S(g, typeof Q.precedence == "string" ? Q.precedence : void 0, {
                crossOrigin: C,
                integrity: y,
                fetchPriority: I
            }) : U === "script" && l.d.X(g, {
                crossOrigin: C,
                integrity: y,
                fetchPriority: I,
                nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
            })
        }
    }
    ,
    fe.preinitModule = function(g, Q) {
        if (typeof g == "string")
            if (typeof Q == "object" && Q !== null) {
                if (Q.as == null || Q.as === "script") {
                    var U = d(Q.as, Q.crossOrigin);
                    l.d.M(g, {
                        crossOrigin: U,
                        integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
                        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
                    })
                }
            } else
                Q == null && l.d.M(g)
    }
    ,
    fe.preload = function(g, Q) {
        if (typeof g == "string" && typeof Q == "object" && Q !== null && typeof Q.as == "string") {
            var U = Q.as
              , C = d(U, Q.crossOrigin);
            l.d.L(g, U, {
                crossOrigin: C,
                integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
                nonce: typeof Q.nonce == "string" ? Q.nonce : void 0,
                type: typeof Q.type == "string" ? Q.type : void 0,
                fetchPriority: typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0,
                referrerPolicy: typeof Q.referrerPolicy == "string" ? Q.referrerPolicy : void 0,
                imageSrcSet: typeof Q.imageSrcSet == "string" ? Q.imageSrcSet : void 0,
                imageSizes: typeof Q.imageSizes == "string" ? Q.imageSizes : void 0,
                media: typeof Q.media == "string" ? Q.media : void 0
            })
        }
    }
    ,
    fe.preloadModule = function(g, Q) {
        if (typeof g == "string")
            if (Q) {
                var U = d(Q.as, Q.crossOrigin);
                l.d.m(g, {
                    as: typeof Q.as == "string" && Q.as !== "script" ? Q.as : void 0,
                    crossOrigin: U,
                    integrity: typeof Q.integrity == "string" ? Q.integrity : void 0
                })
            } else
                l.d.m(g)
    }
    ,
    fe.requestFormReset = function(g) {
        l.d.r(g)
    }
    ,
    fe.unstable_batchedUpdates = function(g, Q) {
        return g(Q)
    }
    ,
    fe.useFormState = function(g, Q, U) {
        return B.H.useFormState(g, Q, U)
    }
    ,
    fe.useFormStatus = function() {
        return B.H.useHostTransitionStatus()
    }
    ,
    fe.version = "19.2.4",
    fe
}
var Gd;
function SC() {
    if (Gd)
        return Sc.exports;
    Gd = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (n) {
                console.error(n)
            }
    }
    return r(),
    Sc.exports = xC(),
    Sc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function TC() {
    if (Vd)
        return El;
    Vd = 1;
    var r = bC()
      , n = po()
      , i = SC();
    function l(A) {
        var e = "https://react.dev/errors/" + A;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++)
                e += "&args[]=" + encodeURIComponent(arguments[t])
        }
        return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(A) {
        return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
    }
    function o(A) {
        var e = A
          , t = A;
        if (A.alternate)
            for (; e.return; )
                e = e.return;
        else {
            A = e;
            do
                e = A,
                (e.flags & 4098) !== 0 && (t = e.return),
                A = e.return;
            while (A)
        }
        return e.tag === 3 ? t : null
    }
    function B(A) {
        if (A.tag === 13) {
            var e = A.memoizedState;
            if (e === null && (A = A.alternate,
            A !== null && (e = A.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function d(A) {
        if (A.tag === 31) {
            var e = A.memoizedState;
            if (e === null && (A = A.alternate,
            A !== null && (e = A.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function g(A) {
        if (o(A) !== A)
            throw Error(l(188))
    }
    function Q(A) {
        var e = A.alternate;
        if (!e) {
            if (e = o(A),
            e === null)
                throw Error(l(188));
            return e !== A ? null : A
        }
        for (var t = A, a = e; ; ) {
            var s = t.return;
            if (s === null)
                break;
            var u = s.alternate;
            if (u === null) {
                if (a = s.return,
                a !== null) {
                    t = a;
                    continue
                }
                break
            }
            if (s.child === u.child) {
                for (u = s.child; u; ) {
                    if (u === t)
                        return g(s),
                        A;
                    if (u === a)
                        return g(s),
                        e;
                    u = u.sibling
                }
                throw Error(l(188))
            }
            if (t.return !== a.return)
                t = s,
                a = u;
            else {
                for (var f = !1, h = s.child; h; ) {
                    if (h === t) {
                        f = !0,
                        t = s,
                        a = u;
                        break
                    }
                    if (h === a) {
                        f = !0,
                        a = s,
                        t = u;
                        break
                    }
                    h = h.sibling
                }
                if (!f) {
                    for (h = u.child; h; ) {
                        if (h === t) {
                            f = !0,
                            t = u,
                            a = s;
                            break
                        }
                        if (h === a) {
                            f = !0,
                            a = u,
                            t = s;
                            break
                        }
                        h = h.sibling
                    }
                    if (!f)
                        throw Error(l(189))
                }
            }
            if (t.alternate !== a)
                throw Error(l(190))
        }
        if (t.tag !== 3)
            throw Error(l(188));
        return t.stateNode.current === t ? A : e
    }
    function U(A) {
        var e = A.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return A;
        for (A = A.child; A !== null; ) {
            if (e = U(A),
            e !== null)
                return e;
            A = A.sibling
        }
        return null
    }
    var C = Object.assign
      , y = Symbol.for("react.element")
      , I = Symbol.for("react.transitional.element")
      , D = Symbol.for("react.portal")
      , L = Symbol.for("react.fragment")
      , X = Symbol.for("react.strict_mode")
      , _ = Symbol.for("react.profiler")
      , R = Symbol.for("react.consumer")
      , W = Symbol.for("react.context")
      , AA = Symbol.for("react.forward_ref")
      , P = Symbol.for("react.suspense")
      , N = Symbol.for("react.suspense_list")
      , G = Symbol.for("react.memo")
      , Z = Symbol.for("react.lazy")
      , J = Symbol.for("react.activity")
      , nA = Symbol.for("react.memo_cache_sentinel")
      , sA = Symbol.iterator;
    function gA(A) {
        return A === null || typeof A != "object" ? null : (A = sA && A[sA] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var oA = Symbol.for("react.client.reference");
    function HA(A) {
        if (A == null)
            return null;
        if (typeof A == "function")
            return A.$$typeof === oA ? null : A.displayName || A.name || null;
        if (typeof A == "string")
            return A;
        switch (A) {
        case L:
            return "Fragment";
        case _:
            return "Profiler";
        case X:
            return "StrictMode";
        case P:
            return "Suspense";
        case N:
            return "SuspenseList";
        case J:
            return "Activity"
        }
        if (typeof A == "object")
            switch (A.$$typeof) {
            case D:
                return "Portal";
            case W:
                return A.displayName || "Context";
            case R:
                return (A._context.displayName || "Context") + ".Consumer";
            case AA:
                var e = A.render;
                return A = A.displayName,
                A || (A = e.displayName || e.name || "",
                A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"),
                A;
            case G:
                return e = A.displayName || null,
                e !== null ? e : HA(A.type) || "Memo";
            case Z:
                e = A._payload,
                A = A._init;
                try {
                    return HA(A(e))
                } catch {}
            }
        return null
    }
    var GA = Array.isArray
      , S = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , z = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , V = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , eA = []
      , rA = -1;
    function v(A) {
        return {
            current: A
        }
    }
    function T(A) {
        0 > rA || (A.current = eA[rA],
        eA[rA] = null,
        rA--)
    }
    function j(A, e) {
        rA++,
        eA[rA] = A.current,
        A.current = e
    }
    var Y = v(null)
      , aA = v(null)
      , uA = v(null)
      , QA = v(null);
    function de(A, e) {
        switch (j(uA, e),
        j(aA, A),
        j(Y, null),
        e.nodeType) {
        case 9:
        case 11:
            A = (A = e.documentElement) && (A = A.namespaceURI) ? ad(A) : 0;
            break;
        default:
            if (A = e.tagName,
            e = e.namespaceURI)
                e = ad(e),
                A = nd(e, A);
            else
                switch (A) {
                case "svg":
                    A = 1;
                    break;
                case "math":
                    A = 2;
                    break;
                default:
                    A = 0
                }
        }
        T(Y),
        j(Y, A)
    }
    function jA() {
        T(Y),
        T(aA),
        T(uA)
    }
    function Dn(A) {
        A.memoizedState !== null && j(QA, A);
        var e = Y.current
          , t = nd(e, A.type);
        e !== t && (j(aA, A),
        j(Y, t))
    }
    function kl(A) {
        aA.current === A && (T(Y),
        T(aA)),
        QA.current === A && (T(QA),
        ml._currentValue = V)
    }
    var is, Do;
    function oa(A) {
        if (is === void 0)
            try {
                throw Error()
            } catch (t) {
                var e = t.stack.trim().match(/\n( *(at )?)/);
                is = e && e[1] || "",
                Do = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + is + A + Do
    }
    var ss = !1;
    function us(A, e) {
        if (!A || ss)
            return "";
        ss = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var O = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(O.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(O, [])
                                } catch (x) {
                                    var b = x
                                }
                                Reflect.construct(A, [], O)
                            } else {
                                try {
                                    O.call()
                                } catch (x) {
                                    b = x
                                }
                                A.call(O.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (x) {
                                b = x
                            }
                            (O = A()) && typeof O.catch == "function" && O.catch(function() {})
                        }
                    } catch (x) {
                        if (x && b && typeof x.stack == "string")
                            return [x.stack, b.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , f = u[0]
              , h = u[1];
            if (f && h) {
                var m = f.split(`
`)
                  , H = h.split(`
`);
                for (s = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; s < H.length && !H[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (a === m.length || s === H.length)
                    for (a = m.length - 1,
                    s = H.length - 1; 1 <= a && 0 <= s && m[a] !== H[s]; )
                        s--;
                for (; 1 <= a && 0 <= s; a--,
                s--)
                    if (m[a] !== H[s]) {
                        if (a !== 1 || s !== 1)
                            do
                                if (a--,
                                s--,
                                0 > s || m[a] !== H[s]) {
                                    var K = `
` + m[a].replace(" at new ", " at ");
                                    return A.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", A.displayName)),
                                    K
                                }
                            while (1 <= a && 0 <= s);
                        break
                    }
            }
        } finally {
            ss = !1,
            Error.prepareStackTrace = t
        }
        return (t = A ? A.displayName || A.name : "") ? oa(t) : ""
    }
    function eQ(A, e) {
        switch (A.tag) {
        case 26:
        case 27:
        case 5:
            return oa(A.type);
        case 16:
            return oa("Lazy");
        case 13:
            return A.child !== e && e !== null ? oa("Suspense Fallback") : oa("Suspense");
        case 19:
            return oa("SuspenseList");
        case 0:
        case 15:
            return us(A.type, !1);
        case 11:
            return us(A.type.render, !1);
        case 1:
            return us(A.type, !0);
        case 31:
            return oa("Activity");
        default:
            return ""
        }
    }
    function Ko(A) {
        try {
            var e = ""
              , t = null;
            do
                e += eQ(A, t),
                t = A,
                A = A.return;
            while (A);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var cs = Object.prototype.hasOwnProperty
      , os = r.unstable_scheduleCallback
      , fs = r.unstable_cancelCallback
      , tQ = r.unstable_shouldYield
      , aQ = r.unstable_requestPaint
      , Ee = r.unstable_now
      , nQ = r.unstable_getCurrentPriorityLevel
      , Lo = r.unstable_ImmediatePriority
      , Io = r.unstable_UserBlockingPriority
      , Zl = r.unstable_NormalPriority
      , lQ = r.unstable_LowPriority
      , Mo = r.unstable_IdlePriority
      , rQ = r.log
      , iQ = r.unstable_setDisableYieldValue
      , Kn = null
      , He = null;
    function Tt(A) {
        if (typeof rQ == "function" && iQ(A),
        He && typeof He.setStrictMode == "function")
            try {
                He.setStrictMode(Kn, A)
            } catch {}
    }
    var be = Math.clz32 ? Math.clz32 : cQ
      , sQ = Math.log
      , uQ = Math.LN2;
    function cQ(A) {
        return A >>>= 0,
        A === 0 ? 32 : 31 - (sQ(A) / uQ | 0) | 0
    }
    var ql = 256
      , Wl = 262144
      , Pl = 4194304;
    function fa(A) {
        var e = A & 42;
        if (e !== 0)
            return e;
        switch (A & -A) {
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
            return 128;
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
            return A & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return A & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return A & 62914560;
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
            return A
        }
    }
    function $l(A, e, t) {
        var a = A.pendingLanes;
        if (a === 0)
            return 0;
        var s = 0
          , u = A.suspendedLanes
          , f = A.pingedLanes;
        A = A.warmLanes;
        var h = a & 134217727;
        return h !== 0 ? (a = h & ~u,
        a !== 0 ? s = fa(a) : (f &= h,
        f !== 0 ? s = fa(f) : t || (t = h & ~A,
        t !== 0 && (s = fa(t))))) : (h = a & ~u,
        h !== 0 ? s = fa(h) : f !== 0 ? s = fa(f) : t || (t = a & ~A,
        t !== 0 && (s = fa(t)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s,
        t = e & -e,
        u >= t || u === 32 && (t & 4194048) !== 0) ? e : s
    }
    function Ln(A, e) {
        return (A.pendingLanes & ~(A.suspendedLanes & ~A.pingedLanes) & e) === 0
    }
    function oQ(A, e) {
        switch (A) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
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
            return e + 5e3;
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
            return -1
        }
    }
    function No() {
        var A = Pl;
        return Pl <<= 1,
        (Pl & 62914560) === 0 && (Pl = 4194304),
        A
    }
    function Bs(A) {
        for (var e = [], t = 0; 31 > t; t++)
            e.push(A);
        return e
    }
    function In(A, e) {
        A.pendingLanes |= e,
        e !== 268435456 && (A.suspendedLanes = 0,
        A.pingedLanes = 0,
        A.warmLanes = 0)
    }
    function fQ(A, e, t, a, s, u) {
        var f = A.pendingLanes;
        A.pendingLanes = t,
        A.suspendedLanes = 0,
        A.pingedLanes = 0,
        A.warmLanes = 0,
        A.expiredLanes &= t,
        A.entangledLanes &= t,
        A.errorRecoveryDisabledLanes &= t,
        A.shellSuspendCounter = 0;
        var h = A.entanglements
          , m = A.expirationTimes
          , H = A.hiddenUpdates;
        for (t = f & ~t; 0 < t; ) {
            var K = 31 - be(t)
              , O = 1 << K;
            h[K] = 0,
            m[K] = -1;
            var b = H[K];
            if (b !== null)
                for (H[K] = null,
                K = 0; K < b.length; K++) {
                    var x = b[K];
                    x !== null && (x.lane &= -536870913)
                }
            t &= ~O
        }
        a !== 0 && Oo(A, a, 0),
        u !== 0 && s === 0 && A.tag !== 0 && (A.suspendedLanes |= u & ~(f & ~e))
    }
    function Oo(A, e, t) {
        A.pendingLanes |= e,
        A.suspendedLanes &= ~e;
        var a = 31 - be(e);
        A.entangledLanes |= e,
        A.entanglements[a] = A.entanglements[a] | 1073741824 | t & 261930
    }
    function Ro(A, e) {
        var t = A.entangledLanes |= e;
        for (A = A.entanglements; t; ) {
            var a = 31 - be(t)
              , s = 1 << a;
            s & e | A[a] & e && (A[a] |= e),
            t &= ~s
        }
    }
    function _o(A, e) {
        var t = e & -e;
        return t = (t & 42) !== 0 ? 1 : gs(t),
        (t & (A.suspendedLanes | e)) !== 0 ? 0 : t
    }
    function gs(A) {
        switch (A) {
        case 2:
            A = 1;
            break;
        case 8:
            A = 4;
            break;
        case 32:
            A = 16;
            break;
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
            A = 128;
            break;
        case 268435456:
            A = 134217728;
            break;
        default:
            A = 0
        }
        return A
    }
    function ds(A) {
        return A &= -A,
        2 < A ? 8 < A ? (A & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Go() {
        var A = z.p;
        return A !== 0 ? A : (A = window.event,
        A === void 0 ? 32 : Hd(A.type))
    }
    function Vo(A, e) {
        var t = z.p;
        try {
            return z.p = A,
            e()
        } finally {
            z.p = t
        }
    }
    var Dt = Math.random().toString(36).slice(2)
      , le = "__reactFiber$" + Dt
      , we = "__reactProps$" + Dt
      , Ia = "__reactContainer$" + Dt
      , hs = "__reactEvents$" + Dt
      , BQ = "__reactListeners$" + Dt
      , gQ = "__reactHandles$" + Dt
      , zo = "__reactResources$" + Dt
      , Mn = "__reactMarker$" + Dt;
    function Qs(A) {
        delete A[le],
        delete A[we],
        delete A[hs],
        delete A[BQ],
        delete A[gQ]
    }
    function Ma(A) {
        var e = A[le];
        if (e)
            return e;
        for (var t = A.parentNode; t; ) {
            if (e = t[Ia] || t[le]) {
                if (t = e.alternate,
                e.child !== null || t !== null && t.child !== null)
                    for (A = od(A); A !== null; ) {
                        if (t = A[le])
                            return t;
                        A = od(A)
                    }
                return e
            }
            A = t,
            t = A.parentNode
        }
        return null
    }
    function Na(A) {
        if (A = A[le] || A[Ia]) {
            var e = A.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return A
        }
        return null
    }
    function Nn(A) {
        var e = A.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return A.stateNode;
        throw Error(l(33))
    }
    function Oa(A) {
        var e = A[zo];
        return e || (e = A[zo] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function te(A) {
        A[Mn] = !0
    }
    var jo = new Set
      , Xo = {};
    function Ba(A, e) {
        Ra(A, e),
        Ra(A + "Capture", e)
    }
    function Ra(A, e) {
        for (Xo[A] = e,
        A = 0; A < e.length; A++)
            jo.add(e[A])
    }
    var dQ = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Yo = {}
      , Jo = {};
    function hQ(A) {
        return cs.call(Jo, A) ? !0 : cs.call(Yo, A) ? !1 : dQ.test(A) ? Jo[A] = !0 : (Yo[A] = !0,
        !1)
    }
    function Ar(A, e, t) {
        if (hQ(e))
            if (t === null)
                A.removeAttribute(e);
            else {
                switch (typeof t) {
                case "undefined":
                case "function":
                case "symbol":
                    A.removeAttribute(e);
                    return;
                case "boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        A.removeAttribute(e);
                        return
                    }
                }
                A.setAttribute(e, "" + t)
            }
    }
    function er(A, e, t) {
        if (t === null)
            A.removeAttribute(e);
        else {
            switch (typeof t) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                A.removeAttribute(e);
                return
            }
            A.setAttribute(e, "" + t)
        }
    }
    function ut(A, e, t, a) {
        if (a === null)
            A.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                A.removeAttribute(t);
                return
            }
            A.setAttributeNS(e, t, "" + a)
        }
    }
    function Ne(A) {
        switch (typeof A) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return A;
        case "object":
            return A;
        default:
            return ""
        }
    }
    function ko(A) {
        var e = A.type;
        return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function QQ(A, e, t) {
        var a = Object.getOwnPropertyDescriptor(A.constructor.prototype, e);
        if (!A.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var s = a.get
              , u = a.set;
            return Object.defineProperty(A, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(f) {
                    t = "" + f,
                    u.call(this, f)
                }
            }),
            Object.defineProperty(A, e, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return t
                },
                setValue: function(f) {
                    t = "" + f
                },
                stopTracking: function() {
                    A._valueTracker = null,
                    delete A[e]
                }
            }
        }
    }
    function ws(A) {
        if (!A._valueTracker) {
            var e = ko(A) ? "checked" : "value";
            A._valueTracker = QQ(A, e, "" + A[e])
        }
    }
    function Zo(A) {
        if (!A)
            return !1;
        var e = A._valueTracker;
        if (!e)
            return !0;
        var t = e.getValue()
          , a = "";
        return A && (a = ko(A) ? A.checked ? "true" : "false" : A.value),
        A = a,
        A !== t ? (e.setValue(A),
        !0) : !1
    }
    function tr(A) {
        if (A = A || (typeof document < "u" ? document : void 0),
        typeof A > "u")
            return null;
        try {
            return A.activeElement || A.body
        } catch {
            return A.body
        }
    }
    var wQ = /[\n"\\]/g;
    function Oe(A) {
        return A.replace(wQ, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Cs(A, e, t, a, s, u, f, h) {
        A.name = "",
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? A.type = f : A.removeAttribute("type"),
        e != null ? f === "number" ? (e === 0 && A.value === "" || A.value != e) && (A.value = "" + Ne(e)) : A.value !== "" + Ne(e) && (A.value = "" + Ne(e)) : f !== "submit" && f !== "reset" || A.removeAttribute("value"),
        e != null ? Us(A, f, Ne(e)) : t != null ? Us(A, f, Ne(t)) : a != null && A.removeAttribute("value"),
        s == null && u != null && (A.defaultChecked = !!u),
        s != null && (A.checked = s && typeof s != "function" && typeof s != "symbol"),
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? A.name = "" + Ne(h) : A.removeAttribute("name")
    }
    function qo(A, e, t, a, s, u, f, h) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (A.type = u),
        e != null || t != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                ws(A);
                return
            }
            t = t != null ? "" + Ne(t) : "",
            e = e != null ? "" + Ne(e) : t,
            h || e === A.value || (A.value = e),
            A.defaultValue = e
        }
        a = a ?? s,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        A.checked = h ? A.checked : !!a,
        A.defaultChecked = !!a,
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (A.name = f),
        ws(A)
    }
    function Us(A, e, t) {
        e === "number" && tr(A.ownerDocument) === A || A.defaultValue === "" + t || (A.defaultValue = "" + t)
    }
    function _a(A, e, t, a) {
        if (A = A.options,
        e) {
            e = {};
            for (var s = 0; s < t.length; s++)
                e["$" + t[s]] = !0;
            for (t = 0; t < A.length; t++)
                s = e.hasOwnProperty("$" + A[t].value),
                A[t].selected !== s && (A[t].selected = s),
                s && a && (A[t].defaultSelected = !0)
        } else {
            for (t = "" + Ne(t),
            e = null,
            s = 0; s < A.length; s++) {
                if (A[s].value === t) {
                    A[s].selected = !0,
                    a && (A[s].defaultSelected = !0);
                    return
                }
                e !== null || A[s].disabled || (e = A[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function Wo(A, e, t) {
        if (e != null && (e = "" + Ne(e),
        e !== A.value && (A.value = e),
        t == null)) {
            A.defaultValue !== e && (A.defaultValue = e);
            return
        }
        A.defaultValue = t != null ? "" + Ne(t) : ""
    }
    function Po(A, e, t, a) {
        if (e == null) {
            if (a != null) {
                if (t != null)
                    throw Error(l(92));
                if (GA(a)) {
                    if (1 < a.length)
                        throw Error(l(93));
                    a = a[0]
                }
                t = a
            }
            t == null && (t = ""),
            e = t
        }
        t = Ne(e),
        A.defaultValue = t,
        a = A.textContent,
        a === t && a !== "" && a !== null && (A.value = a),
        ws(A)
    }
    function Ga(A, e) {
        if (e) {
            var t = A.firstChild;
            if (t && t === A.lastChild && t.nodeType === 3) {
                t.nodeValue = e;
                return
            }
        }
        A.textContent = e
    }
    var CQ = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function $o(A, e, t) {
        var a = e.indexOf("--") === 0;
        t == null || typeof t == "boolean" || t === "" ? a ? A.setProperty(e, "") : e === "float" ? A.cssFloat = "" : A[e] = "" : a ? A.setProperty(e, t) : typeof t != "number" || t === 0 || CQ.has(e) ? e === "float" ? A.cssFloat = t : A[e] = ("" + t).trim() : A[e] = t + "px"
    }
    function Af(A, e, t) {
        if (e != null && typeof e != "object")
            throw Error(l(62));
        if (A = A.style,
        t != null) {
            for (var a in t)
                !t.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? A.setProperty(a, "") : a === "float" ? A.cssFloat = "" : A[a] = "");
            for (var s in e)
                a = e[s],
                e.hasOwnProperty(s) && t[s] !== a && $o(A, s, a)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && $o(A, u, e[u])
    }
    function ms(A) {
        if (A.indexOf("-") === -1)
            return !1;
        switch (A) {
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
            return !0
        }
    }
    var UQ = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , mQ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ar(A) {
        return mQ.test("" + A) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : A
    }
    function ct() {}
    var vs = null;
    function ps(A) {
        return A = A.target || A.srcElement || window,
        A.correspondingUseElement && (A = A.correspondingUseElement),
        A.nodeType === 3 ? A.parentNode : A
    }
    var Va = null
      , za = null;
    function ef(A) {
        var e = Na(A);
        if (e && (A = e.stateNode)) {
            var t = A[we] || null;
            A: switch (A = e.stateNode,
            e.type) {
            case "input":
                if (Cs(A, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name),
                e = t.name,
                t.type === "radio" && e != null) {
                    for (t = A; t.parentNode; )
                        t = t.parentNode;
                    for (t = t.querySelectorAll('input[name="' + Oe("" + e) + '"][type="radio"]'),
                    e = 0; e < t.length; e++) {
                        var a = t[e];
                        if (a !== A && a.form === A.form) {
                            var s = a[we] || null;
                            if (!s)
                                throw Error(l(90));
                            Cs(a, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < t.length; e++)
                        a = t[e],
                        a.form === A.form && Zo(a)
                }
                break A;
            case "textarea":
                Wo(A, t.value, t.defaultValue);
                break A;
            case "select":
                e = t.value,
                e != null && _a(A, !!t.multiple, e, !1)
            }
        }
    }
    var Fs = !1;
    function tf(A, e, t) {
        if (Fs)
            return A(e, t);
        Fs = !0;
        try {
            var a = A(e);
            return a
        } finally {
            if (Fs = !1,
            (Va !== null || za !== null) && (jr(),
            Va && (e = Va,
            A = za,
            za = Va = null,
            ef(e),
            A)))
                for (e = 0; e < A.length; e++)
                    ef(A[e])
        }
    }
    function On(A, e) {
        var t = A.stateNode;
        if (t === null)
            return null;
        var a = t[we] || null;
        if (a === null)
            return null;
        t = a[e];
        A: switch (e) {
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
            (a = !a.disabled) || (A = A.type,
            a = !(A === "button" || A === "input" || A === "select" || A === "textarea")),
            A = !a;
            break A;
        default:
            A = !1
        }
        if (A)
            return null;
        if (t && typeof t != "function")
            throw Error(l(231, e, typeof t));
        return t
    }
    var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , ys = !1;
    if (ot)
        try {
            var Rn = {};
            Object.defineProperty(Rn, "passive", {
                get: function() {
                    ys = !0
                }
            }),
            window.addEventListener("test", Rn, Rn),
            window.removeEventListener("test", Rn, Rn)
        } catch {
            ys = !1
        }
    var Kt = null
      , Es = null
      , nr = null;
    function af() {
        if (nr)
            return nr;
        var A, e = Es, t = e.length, a, s = "value"in Kt ? Kt.value : Kt.textContent, u = s.length;
        for (A = 0; A < t && e[A] === s[A]; A++)
            ;
        var f = t - A;
        for (a = 1; a <= f && e[t - a] === s[u - a]; a++)
            ;
        return nr = s.slice(A, 1 < a ? 1 - a : void 0)
    }
    function lr(A) {
        var e = A.keyCode;
        return "charCode"in A ? (A = A.charCode,
        A === 0 && e === 13 && (A = 13)) : A = e,
        A === 10 && (A = 13),
        32 <= A || A === 13 ? A : 0
    }
    function rr() {
        return !0
    }
    function nf() {
        return !1
    }
    function Ce(A) {
        function e(t, a, s, u, f) {
            this._reactName = t,
            this._targetInst = s,
            this.type = a,
            this.nativeEvent = u,
            this.target = f,
            this.currentTarget = null;
            for (var h in A)
                A.hasOwnProperty(h) && (t = A[h],
                this[h] = t ? t(u) : u[h]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? rr : nf,
            this.isPropagationStopped = nf,
            this
        }
        return C(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
                this.isDefaultPrevented = rr)
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
                this.isPropagationStopped = rr)
            },
            persist: function() {},
            isPersistent: rr
        }),
        e
    }
    var ga = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(A) {
            return A.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ir = Ce(ga), _n = C({}, ga, {
        view: 0,
        detail: 0
    }), vQ = Ce(_n), Hs, bs, Gn, sr = C({}, _n, {
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
        getModifierState: Ss,
        button: 0,
        buttons: 0,
        relatedTarget: function(A) {
            return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget
        },
        movementX: function(A) {
            return "movementX"in A ? A.movementX : (A !== Gn && (Gn && A.type === "mousemove" ? (Hs = A.screenX - Gn.screenX,
            bs = A.screenY - Gn.screenY) : bs = Hs = 0,
            Gn = A),
            Hs)
        },
        movementY: function(A) {
            return "movementY"in A ? A.movementY : bs
        }
    }), lf = Ce(sr), pQ = C({}, sr, {
        dataTransfer: 0
    }), FQ = Ce(pQ), yQ = C({}, _n, {
        relatedTarget: 0
    }), xs = Ce(yQ), EQ = C({}, ga, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), HQ = Ce(EQ), bQ = C({}, ga, {
        clipboardData: function(A) {
            return "clipboardData"in A ? A.clipboardData : window.clipboardData
        }
    }), xQ = Ce(bQ), SQ = C({}, ga, {
        data: 0
    }), rf = Ce(SQ), TQ = {
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
        MozPrintableKey: "Unidentified"
    }, DQ = {
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
        224: "Meta"
    }, KQ = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function LQ(A) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(A) : (A = KQ[A]) ? !!e[A] : !1
    }
    function Ss() {
        return LQ
    }
    var IQ = C({}, _n, {
        key: function(A) {
            if (A.key) {
                var e = TQ[A.key] || A.key;
                if (e !== "Unidentified")
                    return e
            }
            return A.type === "keypress" ? (A = lr(A),
            A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? DQ[A.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ss,
        charCode: function(A) {
            return A.type === "keypress" ? lr(A) : 0
        },
        keyCode: function(A) {
            return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0
        },
        which: function(A) {
            return A.type === "keypress" ? lr(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0
        }
    })
      , MQ = Ce(IQ)
      , NQ = C({}, sr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , sf = Ce(NQ)
      , OQ = C({}, _n, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ss
    })
      , RQ = Ce(OQ)
      , _Q = C({}, ga, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , GQ = Ce(_Q)
      , VQ = C({}, sr, {
        deltaX: function(A) {
            return "deltaX"in A ? A.deltaX : "wheelDeltaX"in A ? -A.wheelDeltaX : 0
        },
        deltaY: function(A) {
            return "deltaY"in A ? A.deltaY : "wheelDeltaY"in A ? -A.wheelDeltaY : "wheelDelta"in A ? -A.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , zQ = Ce(VQ)
      , jQ = C({}, ga, {
        newState: 0,
        oldState: 0
    })
      , XQ = Ce(jQ)
      , YQ = [9, 13, 27, 32]
      , Ts = ot && "CompositionEvent"in window
      , Vn = null;
    ot && "documentMode"in document && (Vn = document.documentMode);
    var JQ = ot && "TextEvent"in window && !Vn
      , uf = ot && (!Ts || Vn && 8 < Vn && 11 >= Vn)
      , cf = " "
      , of = !1;
    function ff(A, e) {
        switch (A) {
        case "keyup":
            return YQ.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Bf(A) {
        return A = A.detail,
        typeof A == "object" && "data"in A ? A.data : null
    }
    var ja = !1;
    function kQ(A, e) {
        switch (A) {
        case "compositionend":
            return Bf(e);
        case "keypress":
            return e.which !== 32 ? null : (of = !0,
            cf);
        case "textInput":
            return A = e.data,
            A === cf && of ? null : A;
        default:
            return null
        }
    }
    function ZQ(A, e) {
        if (ja)
            return A === "compositionend" || !Ts && ff(A, e) ? (A = af(),
            nr = Es = Kt = null,
            ja = !1,
            A) : null;
        switch (A) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return uf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var qQ = {
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
        week: !0
    };
    function gf(A) {
        var e = A && A.nodeName && A.nodeName.toLowerCase();
        return e === "input" ? !!qQ[A.type] : e === "textarea"
    }
    function df(A, e, t, a) {
        Va ? za ? za.push(a) : za = [a] : Va = a,
        e = Wr(e, "onChange"),
        0 < e.length && (t = new ir("onChange","change",null,t,a),
        A.push({
            event: t,
            listeners: e
        }))
    }
    var zn = null
      , jn = null;
    function WQ(A) {
        Wg(A, 0)
    }
    function ur(A) {
        var e = Nn(A);
        if (Zo(e))
            return A
    }
    function hf(A, e) {
        if (A === "change")
            return e
    }
    var Qf = !1;
    if (ot) {
        var Ds;
        if (ot) {
            var Ks = "oninput"in document;
            if (!Ks) {
                var wf = document.createElement("div");
                wf.setAttribute("oninput", "return;"),
                Ks = typeof wf.oninput == "function"
            }
            Ds = Ks
        } else
            Ds = !1;
        Qf = Ds && (!document.documentMode || 9 < document.documentMode)
    }
    function Cf() {
        zn && (zn.detachEvent("onpropertychange", Uf),
        jn = zn = null)
    }
    function Uf(A) {
        if (A.propertyName === "value" && ur(jn)) {
            var e = [];
            df(e, jn, A, ps(A)),
            tf(WQ, e)
        }
    }
    function PQ(A, e, t) {
        A === "focusin" ? (Cf(),
        zn = e,
        jn = t,
        zn.attachEvent("onpropertychange", Uf)) : A === "focusout" && Cf()
    }
    function $Q(A) {
        if (A === "selectionchange" || A === "keyup" || A === "keydown")
            return ur(jn)
    }
    function Aw(A, e) {
        if (A === "click")
            return ur(e)
    }
    function ew(A, e) {
        if (A === "input" || A === "change")
            return ur(e)
    }
    function tw(A, e) {
        return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e
    }
    var xe = typeof Object.is == "function" ? Object.is : tw;
    function Xn(A, e) {
        if (xe(A, e))
            return !0;
        if (typeof A != "object" || A === null || typeof e != "object" || e === null)
            return !1;
        var t = Object.keys(A)
          , a = Object.keys(e);
        if (t.length !== a.length)
            return !1;
        for (a = 0; a < t.length; a++) {
            var s = t[a];
            if (!cs.call(e, s) || !xe(A[s], e[s]))
                return !1
        }
        return !0
    }
    function mf(A) {
        for (; A && A.firstChild; )
            A = A.firstChild;
        return A
    }
    function vf(A, e) {
        var t = mf(A);
        A = 0;
        for (var a; t; ) {
            if (t.nodeType === 3) {
                if (a = A + t.textContent.length,
                A <= e && a >= e)
                    return {
                        node: t,
                        offset: e - A
                    };
                A = a
            }
            A: {
                for (; t; ) {
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break A
                    }
                    t = t.parentNode
                }
                t = void 0
            }
            t = mf(t)
        }
    }
    function pf(A, e) {
        return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? pf(A, e.parentNode) : "contains"in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Ff(A) {
        A = A != null && A.ownerDocument != null && A.ownerDocument.defaultView != null ? A.ownerDocument.defaultView : window;
        for (var e = tr(A.document); e instanceof A.HTMLIFrameElement; ) {
            try {
                var t = typeof e.contentWindow.location.href == "string"
            } catch {
                t = !1
            }
            if (t)
                A = e.contentWindow;
            else
                break;
            e = tr(A.document)
        }
        return e
    }
    function Ls(A) {
        var e = A && A.nodeName && A.nodeName.toLowerCase();
        return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true")
    }
    var aw = ot && "documentMode"in document && 11 >= document.documentMode
      , Xa = null
      , Is = null
      , Yn = null
      , Ms = !1;
    function yf(A, e, t) {
        var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        Ms || Xa == null || Xa !== tr(a) || (a = Xa,
        "selectionStart"in a && Ls(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Yn && Xn(Yn, a) || (Yn = a,
        a = Wr(Is, "onSelect"),
        0 < a.length && (e = new ir("onSelect","select",null,e,t),
        A.push({
            event: e,
            listeners: a
        }),
        e.target = Xa)))
    }
    function da(A, e) {
        var t = {};
        return t[A.toLowerCase()] = e.toLowerCase(),
        t["Webkit" + A] = "webkit" + e,
        t["Moz" + A] = "moz" + e,
        t
    }
    var Ya = {
        animationend: da("Animation", "AnimationEnd"),
        animationiteration: da("Animation", "AnimationIteration"),
        animationstart: da("Animation", "AnimationStart"),
        transitionrun: da("Transition", "TransitionRun"),
        transitionstart: da("Transition", "TransitionStart"),
        transitioncancel: da("Transition", "TransitionCancel"),
        transitionend: da("Transition", "TransitionEnd")
    }
      , Ns = {}
      , Ef = {};
    ot && (Ef = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ya.animationend.animation,
    delete Ya.animationiteration.animation,
    delete Ya.animationstart.animation),
    "TransitionEvent"in window || delete Ya.transitionend.transition);
    function ha(A) {
        if (Ns[A])
            return Ns[A];
        if (!Ya[A])
            return A;
        var e = Ya[A], t;
        for (t in e)
            if (e.hasOwnProperty(t) && t in Ef)
                return Ns[A] = e[t];
        return A
    }
    var Hf = ha("animationend")
      , bf = ha("animationiteration")
      , xf = ha("animationstart")
      , nw = ha("transitionrun")
      , lw = ha("transitionstart")
      , rw = ha("transitioncancel")
      , Sf = ha("transitionend")
      , Tf = new Map
      , Os = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Os.push("scrollEnd");
    function We(A, e) {
        Tf.set(A, e),
        Ba(e, [A])
    }
    var cr = typeof reportError == "function" ? reportError : function(A) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                error: A
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", A);
            return
        }
        console.error(A)
    }
      , Re = []
      , Ja = 0
      , Rs = 0;
    function or() {
        for (var A = Ja, e = Rs = Ja = 0; e < A; ) {
            var t = Re[e];
            Re[e++] = null;
            var a = Re[e];
            Re[e++] = null;
            var s = Re[e];
            Re[e++] = null;
            var u = Re[e];
            if (Re[e++] = null,
            a !== null && s !== null) {
                var f = a.pending;
                f === null ? s.next = s : (s.next = f.next,
                f.next = s),
                a.pending = s
            }
            u !== 0 && Df(t, s, u)
        }
    }
    function fr(A, e, t, a) {
        Re[Ja++] = A,
        Re[Ja++] = e,
        Re[Ja++] = t,
        Re[Ja++] = a,
        Rs |= a,
        A.lanes |= a,
        A = A.alternate,
        A !== null && (A.lanes |= a)
    }
    function _s(A, e, t, a) {
        return fr(A, e, t, a),
        Br(A)
    }
    function Qa(A, e) {
        return fr(A, null, null, e),
        Br(A)
    }
    function Df(A, e, t) {
        A.lanes |= t;
        var a = A.alternate;
        a !== null && (a.lanes |= t);
        for (var s = !1, u = A.return; u !== null; )
            u.childLanes |= t,
            a = u.alternate,
            a !== null && (a.childLanes |= t),
            u.tag === 22 && (A = u.stateNode,
            A === null || A._visibility & 1 || (s = !0)),
            A = u,
            u = u.return;
        return A.tag === 3 ? (u = A.stateNode,
        s && e !== null && (s = 31 - be(t),
        A = u.hiddenUpdates,
        a = A[s],
        a === null ? A[s] = [e] : a.push(e),
        e.lane = t | 536870912),
        u) : null
    }
    function Br(A) {
        if (50 < gl)
            throw gl = 0,
            Zu = null,
            Error(l(185));
        for (var e = A.return; e !== null; )
            A = e,
            e = A.return;
        return A.tag === 3 ? A.stateNode : null
    }
    var ka = {};
    function iw(A, e, t, a) {
        this.tag = A,
        this.key = t,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Se(A, e, t, a) {
        return new iw(A,e,t,a)
    }
    function Gs(A) {
        return A = A.prototype,
        !(!A || !A.isReactComponent)
    }
    function ft(A, e) {
        var t = A.alternate;
        return t === null ? (t = Se(A.tag, e, A.key, A.mode),
        t.elementType = A.elementType,
        t.type = A.type,
        t.stateNode = A.stateNode,
        t.alternate = A,
        A.alternate = t) : (t.pendingProps = e,
        t.type = A.type,
        t.flags = 0,
        t.subtreeFlags = 0,
        t.deletions = null),
        t.flags = A.flags & 65011712,
        t.childLanes = A.childLanes,
        t.lanes = A.lanes,
        t.child = A.child,
        t.memoizedProps = A.memoizedProps,
        t.memoizedState = A.memoizedState,
        t.updateQueue = A.updateQueue,
        e = A.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        t.sibling = A.sibling,
        t.index = A.index,
        t.ref = A.ref,
        t.refCleanup = A.refCleanup,
        t
    }
    function Kf(A, e) {
        A.flags &= 65011714;
        var t = A.alternate;
        return t === null ? (A.childLanes = 0,
        A.lanes = e,
        A.child = null,
        A.subtreeFlags = 0,
        A.memoizedProps = null,
        A.memoizedState = null,
        A.updateQueue = null,
        A.dependencies = null,
        A.stateNode = null) : (A.childLanes = t.childLanes,
        A.lanes = t.lanes,
        A.child = t.child,
        A.subtreeFlags = 0,
        A.deletions = null,
        A.memoizedProps = t.memoizedProps,
        A.memoizedState = t.memoizedState,
        A.updateQueue = t.updateQueue,
        A.type = t.type,
        e = t.dependencies,
        A.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        A
    }
    function gr(A, e, t, a, s, u) {
        var f = 0;
        if (a = A,
        typeof A == "function")
            Gs(A) && (f = 1);
        else if (typeof A == "string")
            f = fC(A, t, Y.current) ? 26 : A === "html" || A === "head" || A === "body" ? 27 : 5;
        else
            A: switch (A) {
            case J:
                return A = Se(31, t, e, s),
                A.elementType = J,
                A.lanes = u,
                A;
            case L:
                return wa(t.children, s, u, e);
            case X:
                f = 8,
                s |= 24;
                break;
            case _:
                return A = Se(12, t, e, s | 2),
                A.elementType = _,
                A.lanes = u,
                A;
            case P:
                return A = Se(13, t, e, s),
                A.elementType = P,
                A.lanes = u,
                A;
            case N:
                return A = Se(19, t, e, s),
                A.elementType = N,
                A.lanes = u,
                A;
            default:
                if (typeof A == "object" && A !== null)
                    switch (A.$$typeof) {
                    case W:
                        f = 10;
                        break A;
                    case R:
                        f = 9;
                        break A;
                    case AA:
                        f = 11;
                        break A;
                    case G:
                        f = 14;
                        break A;
                    case Z:
                        f = 16,
                        a = null;
                        break A
                    }
                f = 29,
                t = Error(l(130, A === null ? "null" : typeof A, "")),
                a = null
            }
        return e = Se(f, t, e, s),
        e.elementType = A,
        e.type = a,
        e.lanes = u,
        e
    }
    function wa(A, e, t, a) {
        return A = Se(7, A, a, e),
        A.lanes = t,
        A
    }
    function Vs(A, e, t) {
        return A = Se(6, A, null, e),
        A.lanes = t,
        A
    }
    function Lf(A) {
        var e = Se(18, null, null, 0);
        return e.stateNode = A,
        e
    }
    function zs(A, e, t) {
        return e = Se(4, A.children !== null ? A.children : [], A.key, e),
        e.lanes = t,
        e.stateNode = {
            containerInfo: A.containerInfo,
            pendingChildren: null,
            implementation: A.implementation
        },
        e
    }
    var If = new WeakMap;
    function _e(A, e) {
        if (typeof A == "object" && A !== null) {
            var t = If.get(A);
            return t !== void 0 ? t : (e = {
                value: A,
                source: e,
                stack: Ko(e)
            },
            If.set(A, e),
            e)
        }
        return {
            value: A,
            source: e,
            stack: Ko(e)
        }
    }
    var Za = []
      , qa = 0
      , dr = null
      , Jn = 0
      , Ge = []
      , Ve = 0
      , Lt = null
      , tt = 1
      , at = "";
    function Bt(A, e) {
        Za[qa++] = Jn,
        Za[qa++] = dr,
        dr = A,
        Jn = e
    }
    function Mf(A, e, t) {
        Ge[Ve++] = tt,
        Ge[Ve++] = at,
        Ge[Ve++] = Lt,
        Lt = A;
        var a = tt;
        A = at;
        var s = 32 - be(a) - 1;
        a &= ~(1 << s),
        t += 1;
        var u = 32 - be(e) + s;
        if (30 < u) {
            var f = s - s % 5;
            u = (a & (1 << f) - 1).toString(32),
            a >>= f,
            s -= f,
            tt = 1 << 32 - be(e) + s | t << s | a,
            at = u + A
        } else
            tt = 1 << u | t << s | a,
            at = A
    }
    function js(A) {
        A.return !== null && (Bt(A, 1),
        Mf(A, 1, 0))
    }
    function Xs(A) {
        for (; A === dr; )
            dr = Za[--qa],
            Za[qa] = null,
            Jn = Za[--qa],
            Za[qa] = null;
        for (; A === Lt; )
            Lt = Ge[--Ve],
            Ge[Ve] = null,
            at = Ge[--Ve],
            Ge[Ve] = null,
            tt = Ge[--Ve],
            Ge[Ve] = null
    }
    function Nf(A, e) {
        Ge[Ve++] = tt,
        Ge[Ve++] = at,
        Ge[Ve++] = Lt,
        tt = e.id,
        at = e.overflow,
        Lt = A
    }
    var re = null
      , MA = null
      , mA = !1
      , It = null
      , ze = !1
      , Ys = Error(l(519));
    function Mt(A) {
        var e = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw kn(_e(e, A)),
        Ys
    }
    function Of(A) {
        var e = A.stateNode
          , t = A.type
          , a = A.memoizedProps;
        switch (e[le] = A,
        e[we] = a,
        t) {
        case "dialog":
            hA("cancel", e),
            hA("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            hA("load", e);
            break;
        case "video":
        case "audio":
            for (t = 0; t < hl.length; t++)
                hA(hl[t], e);
            break;
        case "source":
            hA("error", e);
            break;
        case "img":
        case "image":
        case "link":
            hA("error", e),
            hA("load", e);
            break;
        case "details":
            hA("toggle", e);
            break;
        case "input":
            hA("invalid", e),
            qo(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            hA("invalid", e);
            break;
        case "textarea":
            hA("invalid", e),
            Po(e, a.value, a.defaultValue, a.children)
        }
        t = a.children,
        typeof t != "string" && typeof t != "number" && typeof t != "bigint" || e.textContent === "" + t || a.suppressHydrationWarning === !0 || ed(e.textContent, t) ? (a.popover != null && (hA("beforetoggle", e),
        hA("toggle", e)),
        a.onScroll != null && hA("scroll", e),
        a.onScrollEnd != null && hA("scrollend", e),
        a.onClick != null && (e.onclick = ct),
        e = !0) : e = !1,
        e || Mt(A, !0)
    }
    function Rf(A) {
        for (re = A.return; re; )
            switch (re.tag) {
            case 5:
            case 31:
            case 13:
                ze = !1;
                return;
            case 27:
            case 3:
                ze = !0;
                return;
            default:
                re = re.return
            }
    }
    function Wa(A) {
        if (A !== re)
            return !1;
        if (!mA)
            return Rf(A),
            mA = !0,
            !1;
        var e = A.tag, t;
        if ((t = e !== 3 && e !== 27) && ((t = e === 5) && (t = A.type,
        t = !(t !== "form" && t !== "button") || cc(A.type, A.memoizedProps)),
        t = !t),
        t && MA && Mt(A),
        Rf(A),
        e === 13) {
            if (A = A.memoizedState,
            A = A !== null ? A.dehydrated : null,
            !A)
                throw Error(l(317));
            MA = cd(A)
        } else if (e === 31) {
            if (A = A.memoizedState,
            A = A !== null ? A.dehydrated : null,
            !A)
                throw Error(l(317));
            MA = cd(A)
        } else
            e === 27 ? (e = MA,
            qt(A.type) ? (A = dc,
            dc = null,
            MA = A) : MA = e) : MA = re ? Xe(A.stateNode.nextSibling) : null;
        return !0
    }
    function Ca() {
        MA = re = null,
        mA = !1
    }
    function Js() {
        var A = It;
        return A !== null && (pe === null ? pe = A : pe.push.apply(pe, A),
        It = null),
        A
    }
    function kn(A) {
        It === null ? It = [A] : It.push(A)
    }
    var ks = v(null)
      , Ua = null
      , gt = null;
    function Nt(A, e, t) {
        j(ks, e._currentValue),
        e._currentValue = t
    }
    function dt(A) {
        A._currentValue = ks.current,
        T(ks)
    }
    function Zs(A, e, t) {
        for (; A !== null; ) {
            var a = A.alternate;
            if ((A.childLanes & e) !== e ? (A.childLanes |= e,
            a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
            A === t)
                break;
            A = A.return
        }
    }
    function qs(A, e, t, a) {
        var s = A.child;
        for (s !== null && (s.return = A); s !== null; ) {
            var u = s.dependencies;
            if (u !== null) {
                var f = s.child;
                u = u.firstContext;
                A: for (; u !== null; ) {
                    var h = u;
                    u = s;
                    for (var m = 0; m < e.length; m++)
                        if (h.context === e[m]) {
                            u.lanes |= t,
                            h = u.alternate,
                            h !== null && (h.lanes |= t),
                            Zs(u.return, t, A),
                            a || (f = null);
                            break A
                        }
                    u = h.next
                }
            } else if (s.tag === 18) {
                if (f = s.return,
                f === null)
                    throw Error(l(341));
                f.lanes |= t,
                u = f.alternate,
                u !== null && (u.lanes |= t),
                Zs(f, t, A),
                f = null
            } else
                f = s.child;
            if (f !== null)
                f.return = s;
            else
                for (f = s; f !== null; ) {
                    if (f === A) {
                        f = null;
                        break
                    }
                    if (s = f.sibling,
                    s !== null) {
                        s.return = f.return,
                        f = s;
                        break
                    }
                    f = f.return
                }
            s = f
        }
    }
    function Pa(A, e, t, a) {
        A = null;
        for (var s = e, u = !1; s !== null; ) {
            if (!u) {
                if ((s.flags & 524288) !== 0)
                    u = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var f = s.alternate;
                if (f === null)
                    throw Error(l(387));
                if (f = f.memoizedProps,
                f !== null) {
                    var h = s.type;
                    xe(s.pendingProps.value, f.value) || (A !== null ? A.push(h) : A = [h])
                }
            } else if (s === QA.current) {
                if (f = s.alternate,
                f === null)
                    throw Error(l(387));
                f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (A !== null ? A.push(ml) : A = [ml])
            }
            s = s.return
        }
        A !== null && qs(e, A, t, a),
        e.flags |= 262144
    }
    function hr(A) {
        for (A = A.firstContext; A !== null; ) {
            if (!xe(A.context._currentValue, A.memoizedValue))
                return !0;
            A = A.next
        }
        return !1
    }
    function ma(A) {
        Ua = A,
        gt = null,
        A = A.dependencies,
        A !== null && (A.firstContext = null)
    }
    function ie(A) {
        return _f(Ua, A)
    }
    function Qr(A, e) {
        return Ua === null && ma(A),
        _f(A, e)
    }
    function _f(A, e) {
        var t = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        gt === null) {
            if (A === null)
                throw Error(l(308));
            gt = e,
            A.dependencies = {
                lanes: 0,
                firstContext: e
            },
            A.flags |= 524288
        } else
            gt = gt.next = e;
        return t
    }
    var sw = typeof AbortController < "u" ? AbortController : function() {
        var A = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(t, a) {
                A.push(a)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            A.forEach(function(t) {
                return t()
            })
        }
    }
      , uw = r.unstable_scheduleCallback
      , cw = r.unstable_NormalPriority
      , ZA = {
        $$typeof: W,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ws() {
        return {
            controller: new sw,
            data: new Map,
            refCount: 0
        }
    }
    function Zn(A) {
        A.refCount--,
        A.refCount === 0 && uw(cw, function() {
            A.controller.abort()
        })
    }
    var qn = null
      , Ps = 0
      , $a = 0
      , An = null;
    function ow(A, e) {
        if (qn === null) {
            var t = qn = [];
            Ps = 0,
            $a = ec(),
            An = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    t.push(a)
                }
            }
        }
        return Ps++,
        e.then(Gf, Gf),
        e
    }
    function Gf() {
        if (--Ps === 0 && qn !== null) {
            An !== null && (An.status = "fulfilled");
            var A = qn;
            qn = null,
            $a = 0,
            An = null;
            for (var e = 0; e < A.length; e++)
                (0,
                A[e])()
        }
    }
    function fw(A, e) {
        var t = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                t.push(s)
            }
        };
        return A.then(function() {
            a.status = "fulfilled",
            a.value = e;
            for (var s = 0; s < t.length; s++)
                (0,
                t[s])(e)
        }, function(s) {
            for (a.status = "rejected",
            a.reason = s,
            s = 0; s < t.length; s++)
                (0,
                t[s])(void 0)
        }),
        a
    }
    var Vf = S.S;
    S.S = function(A, e) {
        yg = Ee(),
        typeof e == "object" && e !== null && typeof e.then == "function" && ow(A, e),
        Vf !== null && Vf(A, e)
    }
    ;
    var va = v(null);
    function $s() {
        var A = va.current;
        return A !== null ? A : LA.pooledCache
    }
    function wr(A, e) {
        e === null ? j(va, va.current) : j(va, e.pool)
    }
    function zf() {
        var A = $s();
        return A === null ? null : {
            parent: ZA._currentValue,
            pool: A
        }
    }
    var en = Error(l(460))
      , Au = Error(l(474))
      , Cr = Error(l(542))
      , Ur = {
        then: function() {}
    };
    function jf(A) {
        return A = A.status,
        A === "fulfilled" || A === "rejected"
    }
    function Xf(A, e, t) {
        switch (t = A[t],
        t === void 0 ? A.push(e) : t !== e && (e.then(ct, ct),
        e = t),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw A = e.reason,
            Jf(A),
            A;
        default:
            if (typeof e.status == "string")
                e.then(ct, ct);
            else {
                if (A = LA,
                A !== null && 100 < A.shellSuspendCounter)
                    throw Error(l(482));
                A = e,
                A.status = "pending",
                A.then(function(a) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = a
                    }
                }, function(a) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = a
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw A = e.reason,
                Jf(A),
                A
            }
            throw Fa = e,
            en
        }
    }
    function pa(A) {
        try {
            var e = A._init;
            return e(A._payload)
        } catch (t) {
            throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Fa = t,
            en) : t
        }
    }
    var Fa = null;
    function Yf() {
        if (Fa === null)
            throw Error(l(459));
        var A = Fa;
        return Fa = null,
        A
    }
    function Jf(A) {
        if (A === en || A === Cr)
            throw Error(l(483))
    }
    var tn = null
      , Wn = 0;
    function mr(A) {
        var e = Wn;
        return Wn += 1,
        tn === null && (tn = []),
        Xf(tn, A, e)
    }
    function Pn(A, e) {
        e = e.props.ref,
        A.ref = e !== void 0 ? e : null
    }
    function vr(A, e) {
        throw e.$$typeof === y ? Error(l(525)) : (A = Object.prototype.toString.call(e),
        Error(l(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A)))
    }
    function kf(A) {
        function e(F, p) {
            if (A) {
                var E = F.deletions;
                E === null ? (F.deletions = [p],
                F.flags |= 16) : E.push(p)
            }
        }
        function t(F, p) {
            if (!A)
                return null;
            for (; p !== null; )
                e(F, p),
                p = p.sibling;
            return null
        }
        function a(F) {
            for (var p = new Map; F !== null; )
                F.key !== null ? p.set(F.key, F) : p.set(F.index, F),
                F = F.sibling;
            return p
        }
        function s(F, p) {
            return F = ft(F, p),
            F.index = 0,
            F.sibling = null,
            F
        }
        function u(F, p, E) {
            return F.index = E,
            A ? (E = F.alternate,
            E !== null ? (E = E.index,
            E < p ? (F.flags |= 67108866,
            p) : E) : (F.flags |= 67108866,
            p)) : (F.flags |= 1048576,
            p)
        }
        function f(F) {
            return A && F.alternate === null && (F.flags |= 67108866),
            F
        }
        function h(F, p, E, M) {
            return p === null || p.tag !== 6 ? (p = Vs(E, F.mode, M),
            p.return = F,
            p) : (p = s(p, E),
            p.return = F,
            p)
        }
        function m(F, p, E, M) {
            var lA = E.type;
            return lA === L ? K(F, p, E.props.children, M, E.key) : p !== null && (p.elementType === lA || typeof lA == "object" && lA !== null && lA.$$typeof === Z && pa(lA) === p.type) ? (p = s(p, E.props),
            Pn(p, E),
            p.return = F,
            p) : (p = gr(E.type, E.key, E.props, null, F.mode, M),
            Pn(p, E),
            p.return = F,
            p)
        }
        function H(F, p, E, M) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== E.containerInfo || p.stateNode.implementation !== E.implementation ? (p = zs(E, F.mode, M),
            p.return = F,
            p) : (p = s(p, E.children || []),
            p.return = F,
            p)
        }
        function K(F, p, E, M, lA) {
            return p === null || p.tag !== 7 ? (p = wa(E, F.mode, M, lA),
            p.return = F,
            p) : (p = s(p, E),
            p.return = F,
            p)
        }
        function O(F, p, E) {
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return p = Vs("" + p, F.mode, E),
                p.return = F,
                p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case I:
                    return E = gr(p.type, p.key, p.props, null, F.mode, E),
                    Pn(E, p),
                    E.return = F,
                    E;
                case D:
                    return p = zs(p, F.mode, E),
                    p.return = F,
                    p;
                case Z:
                    return p = pa(p),
                    O(F, p, E)
                }
                if (GA(p) || gA(p))
                    return p = wa(p, F.mode, E, null),
                    p.return = F,
                    p;
                if (typeof p.then == "function")
                    return O(F, mr(p), E);
                if (p.$$typeof === W)
                    return O(F, Qr(F, p), E);
                vr(F, p)
            }
            return null
        }
        function b(F, p, E, M) {
            var lA = p !== null ? p.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return lA !== null ? null : h(F, p, "" + E, M);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case I:
                    return E.key === lA ? m(F, p, E, M) : null;
                case D:
                    return E.key === lA ? H(F, p, E, M) : null;
                case Z:
                    return E = pa(E),
                    b(F, p, E, M)
                }
                if (GA(E) || gA(E))
                    return lA !== null ? null : K(F, p, E, M, null);
                if (typeof E.then == "function")
                    return b(F, p, mr(E), M);
                if (E.$$typeof === W)
                    return b(F, p, Qr(F, E), M);
                vr(F, E)
            }
            return null
        }
        function x(F, p, E, M, lA) {
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
                return F = F.get(E) || null,
                h(p, F, "" + M, lA);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case I:
                    return F = F.get(M.key === null ? E : M.key) || null,
                    m(p, F, M, lA);
                case D:
                    return F = F.get(M.key === null ? E : M.key) || null,
                    H(p, F, M, lA);
                case Z:
                    return M = pa(M),
                    x(F, p, E, M, lA)
                }
                if (GA(M) || gA(M))
                    return F = F.get(E) || null,
                    K(p, F, M, lA, null);
                if (typeof M.then == "function")
                    return x(F, p, E, mr(M), lA);
                if (M.$$typeof === W)
                    return x(F, p, E, Qr(p, M), lA);
                vr(p, M)
            }
            return null
        }
        function $(F, p, E, M) {
            for (var lA = null, vA = null, tA = p, BA = p = 0, CA = null; tA !== null && BA < E.length; BA++) {
                tA.index > BA ? (CA = tA,
                tA = null) : CA = tA.sibling;
                var pA = b(F, tA, E[BA], M);
                if (pA === null) {
                    tA === null && (tA = CA);
                    break
                }
                A && tA && pA.alternate === null && e(F, tA),
                p = u(pA, p, BA),
                vA === null ? lA = pA : vA.sibling = pA,
                vA = pA,
                tA = CA
            }
            if (BA === E.length)
                return t(F, tA),
                mA && Bt(F, BA),
                lA;
            if (tA === null) {
                for (; BA < E.length; BA++)
                    tA = O(F, E[BA], M),
                    tA !== null && (p = u(tA, p, BA),
                    vA === null ? lA = tA : vA.sibling = tA,
                    vA = tA);
                return mA && Bt(F, BA),
                lA
            }
            for (tA = a(tA); BA < E.length; BA++)
                CA = x(tA, F, BA, E[BA], M),
                CA !== null && (A && CA.alternate !== null && tA.delete(CA.key === null ? BA : CA.key),
                p = u(CA, p, BA),
                vA === null ? lA = CA : vA.sibling = CA,
                vA = CA);
            return A && tA.forEach(function(ea) {
                return e(F, ea)
            }),
            mA && Bt(F, BA),
            lA
        }
        function iA(F, p, E, M) {
            if (E == null)
                throw Error(l(151));
            for (var lA = null, vA = null, tA = p, BA = p = 0, CA = null, pA = E.next(); tA !== null && !pA.done; BA++,
            pA = E.next()) {
                tA.index > BA ? (CA = tA,
                tA = null) : CA = tA.sibling;
                var ea = b(F, tA, pA.value, M);
                if (ea === null) {
                    tA === null && (tA = CA);
                    break
                }
                A && tA && ea.alternate === null && e(F, tA),
                p = u(ea, p, BA),
                vA === null ? lA = ea : vA.sibling = ea,
                vA = ea,
                tA = CA
            }
            if (pA.done)
                return t(F, tA),
                mA && Bt(F, BA),
                lA;
            if (tA === null) {
                for (; !pA.done; BA++,
                pA = E.next())
                    pA = O(F, pA.value, M),
                    pA !== null && (p = u(pA, p, BA),
                    vA === null ? lA = pA : vA.sibling = pA,
                    vA = pA);
                return mA && Bt(F, BA),
                lA
            }
            for (tA = a(tA); !pA.done; BA++,
            pA = E.next())
                pA = x(tA, F, BA, pA.value, M),
                pA !== null && (A && pA.alternate !== null && tA.delete(pA.key === null ? BA : pA.key),
                p = u(pA, p, BA),
                vA === null ? lA = pA : vA.sibling = pA,
                vA = pA);
            return A && tA.forEach(function(pC) {
                return e(F, pC)
            }),
            mA && Bt(F, BA),
            lA
        }
        function DA(F, p, E, M) {
            if (typeof E == "object" && E !== null && E.type === L && E.key === null && (E = E.props.children),
            typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case I:
                    A: {
                        for (var lA = E.key; p !== null; ) {
                            if (p.key === lA) {
                                if (lA = E.type,
                                lA === L) {
                                    if (p.tag === 7) {
                                        t(F, p.sibling),
                                        M = s(p, E.props.children),
                                        M.return = F,
                                        F = M;
                                        break A
                                    }
                                } else if (p.elementType === lA || typeof lA == "object" && lA !== null && lA.$$typeof === Z && pa(lA) === p.type) {
                                    t(F, p.sibling),
                                    M = s(p, E.props),
                                    Pn(M, E),
                                    M.return = F,
                                    F = M;
                                    break A
                                }
                                t(F, p);
                                break
                            } else
                                e(F, p);
                            p = p.sibling
                        }
                        E.type === L ? (M = wa(E.props.children, F.mode, M, E.key),
                        M.return = F,
                        F = M) : (M = gr(E.type, E.key, E.props, null, F.mode, M),
                        Pn(M, E),
                        M.return = F,
                        F = M)
                    }
                    return f(F);
                case D:
                    A: {
                        for (lA = E.key; p !== null; ) {
                            if (p.key === lA)
                                if (p.tag === 4 && p.stateNode.containerInfo === E.containerInfo && p.stateNode.implementation === E.implementation) {
                                    t(F, p.sibling),
                                    M = s(p, E.children || []),
                                    M.return = F,
                                    F = M;
                                    break A
                                } else {
                                    t(F, p);
                                    break
                                }
                            else
                                e(F, p);
                            p = p.sibling
                        }
                        M = zs(E, F.mode, M),
                        M.return = F,
                        F = M
                    }
                    return f(F);
                case Z:
                    return E = pa(E),
                    DA(F, p, E, M)
                }
                if (GA(E))
                    return $(F, p, E, M);
                if (gA(E)) {
                    if (lA = gA(E),
                    typeof lA != "function")
                        throw Error(l(150));
                    return E = lA.call(E),
                    iA(F, p, E, M)
                }
                if (typeof E.then == "function")
                    return DA(F, p, mr(E), M);
                if (E.$$typeof === W)
                    return DA(F, p, Qr(F, E), M);
                vr(F, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E,
            p !== null && p.tag === 6 ? (t(F, p.sibling),
            M = s(p, E),
            M.return = F,
            F = M) : (t(F, p),
            M = Vs(E, F.mode, M),
            M.return = F,
            F = M),
            f(F)) : t(F, p)
        }
        return function(F, p, E, M) {
            try {
                Wn = 0;
                var lA = DA(F, p, E, M);
                return tn = null,
                lA
            } catch (tA) {
                if (tA === en || tA === Cr)
                    throw tA;
                var vA = Se(29, tA, null, F.mode);
                return vA.lanes = M,
                vA.return = F,
                vA
            } finally {}
        }
    }
    var ya = kf(!0)
      , Zf = kf(!1)
      , Ot = !1;
    function eu(A) {
        A.updateQueue = {
            baseState: A.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function tu(A, e) {
        A = A.updateQueue,
        e.updateQueue === A && (e.updateQueue = {
            baseState: A.baseState,
            firstBaseUpdate: A.firstBaseUpdate,
            lastBaseUpdate: A.lastBaseUpdate,
            shared: A.shared,
            callbacks: null
        })
    }
    function Rt(A) {
        return {
            lane: A,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function _t(A, e, t) {
        var a = A.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (FA & 2) !== 0) {
            var s = a.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            a.pending = e,
            e = Br(A),
            Df(A, null, t),
            e
        }
        return fr(A, a, e, t),
        Br(A)
    }
    function $n(A, e, t) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (t & 4194048) !== 0)) {
            var a = e.lanes;
            a &= A.pendingLanes,
            t |= a,
            e.lanes = t,
            Ro(A, t)
        }
    }
    function au(A, e) {
        var t = A.updateQueue
          , a = A.alternate;
        if (a !== null && (a = a.updateQueue,
        t === a)) {
            var s = null
              , u = null;
            if (t = t.firstBaseUpdate,
            t !== null) {
                do {
                    var f = {
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? s = u = f : u = u.next = f,
                    t = t.next
                } while (t !== null);
                u === null ? s = u = e : u = u.next = e
            } else
                s = u = e;
            t = {
                baseState: a.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            A.updateQueue = t;
            return
        }
        A = t.lastBaseUpdate,
        A === null ? t.firstBaseUpdate = e : A.next = e,
        t.lastBaseUpdate = e
    }
    var nu = !1;
    function Al() {
        if (nu) {
            var A = An;
            if (A !== null)
                throw A
        }
    }
    function el(A, e, t, a) {
        nu = !1;
        var s = A.updateQueue;
        Ot = !1;
        var u = s.firstBaseUpdate
          , f = s.lastBaseUpdate
          , h = s.shared.pending;
        if (h !== null) {
            s.shared.pending = null;
            var m = h
              , H = m.next;
            m.next = null,
            f === null ? u = H : f.next = H,
            f = m;
            var K = A.alternate;
            K !== null && (K = K.updateQueue,
            h = K.lastBaseUpdate,
            h !== f && (h === null ? K.firstBaseUpdate = H : h.next = H,
            K.lastBaseUpdate = m))
        }
        if (u !== null) {
            var O = s.baseState;
            f = 0,
            K = H = m = null,
            h = u;
            do {
                var b = h.lane & -536870913
                  , x = b !== h.lane;
                if (x ? (wA & b) === b : (a & b) === b) {
                    b !== 0 && b === $a && (nu = !0),
                    K !== null && (K = K.next = {
                        lane: 0,
                        tag: h.tag,
                        payload: h.payload,
                        callback: null,
                        next: null
                    });
                    A: {
                        var $ = A
                          , iA = h;
                        b = e;
                        var DA = t;
                        switch (iA.tag) {
                        case 1:
                            if ($ = iA.payload,
                            typeof $ == "function") {
                                O = $.call(DA, O, b);
                                break A
                            }
                            O = $;
                            break A;
                        case 3:
                            $.flags = $.flags & -65537 | 128;
                        case 0:
                            if ($ = iA.payload,
                            b = typeof $ == "function" ? $.call(DA, O, b) : $,
                            b == null)
                                break A;
                            O = C({}, O, b);
                            break A;
                        case 2:
                            Ot = !0
                        }
                    }
                    b = h.callback,
                    b !== null && (A.flags |= 64,
                    x && (A.flags |= 8192),
                    x = s.callbacks,
                    x === null ? s.callbacks = [b] : x.push(b))
                } else
                    x = {
                        lane: b,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    },
                    K === null ? (H = K = x,
                    m = O) : K = K.next = x,
                    f |= b;
                if (h = h.next,
                h === null) {
                    if (h = s.shared.pending,
                    h === null)
                        break;
                    x = h,
                    h = x.next,
                    x.next = null,
                    s.lastBaseUpdate = x,
                    s.shared.pending = null
                }
            } while (!0);
            K === null && (m = O),
            s.baseState = m,
            s.firstBaseUpdate = H,
            s.lastBaseUpdate = K,
            u === null && (s.shared.lanes = 0),
            Xt |= f,
            A.lanes = f,
            A.memoizedState = O
        }
    }
    function qf(A, e) {
        if (typeof A != "function")
            throw Error(l(191, A));
        A.call(e)
    }
    function Wf(A, e) {
        var t = A.callbacks;
        if (t !== null)
            for (A.callbacks = null,
            A = 0; A < t.length; A++)
                qf(t[A], e)
    }
    var an = v(null)
      , pr = v(0);
    function Pf(A, e) {
        A = Ft,
        j(pr, A),
        j(an, e),
        Ft = A | e.baseLanes
    }
    function lu() {
        j(pr, Ft),
        j(an, an.current)
    }
    function ru() {
        Ft = pr.current,
        T(an),
        T(pr)
    }
    var Te = v(null)
      , je = null;
    function Gt(A) {
        var e = A.alternate;
        j(XA, XA.current & 1),
        j(Te, A),
        je === null && (e === null || an.current !== null || e.memoizedState !== null) && (je = A)
    }
    function iu(A) {
        j(XA, XA.current),
        j(Te, A),
        je === null && (je = A)
    }
    function $f(A) {
        A.tag === 22 ? (j(XA, XA.current),
        j(Te, A),
        je === null && (je = A)) : Vt()
    }
    function Vt() {
        j(XA, XA.current),
        j(Te, Te.current)
    }
    function De(A) {
        T(Te),
        je === A && (je = null),
        T(XA)
    }
    var XA = v(0);
    function Fr(A) {
        for (var e = A; e !== null; ) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t !== null && (t = t.dehydrated,
                t === null || Bc(t) || gc(t)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === A)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === A)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var ht = 0
      , fA = null
      , SA = null
      , qA = null
      , yr = !1
      , nn = !1
      , Ea = !1
      , Er = 0
      , tl = 0
      , ln = null
      , Bw = 0;
    function VA() {
        throw Error(l(321))
    }
    function su(A, e) {
        if (e === null)
            return !1;
        for (var t = 0; t < e.length && t < A.length; t++)
            if (!xe(A[t], e[t]))
                return !1;
        return !0
    }
    function uu(A, e, t, a, s, u) {
        return ht = u,
        fA = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        S.H = A === null || A.memoizedState === null ? MB : Fu,
        Ea = !1,
        u = t(a, s),
        Ea = !1,
        nn && (u = eB(e, t, a, s)),
        AB(A),
        u
    }
    function AB(A) {
        S.H = ll;
        var e = SA !== null && SA.next !== null;
        if (ht = 0,
        qA = SA = fA = null,
        yr = !1,
        tl = 0,
        ln = null,
        e)
            throw Error(l(300));
        A === null || WA || (A = A.dependencies,
        A !== null && hr(A) && (WA = !0))
    }
    function eB(A, e, t, a) {
        fA = A;
        var s = 0;
        do {
            if (nn && (ln = null),
            tl = 0,
            nn = !1,
            25 <= s)
                throw Error(l(301));
            if (s += 1,
            qA = SA = null,
            A.updateQueue != null) {
                var u = A.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            S.H = NB,
            u = e(t, a)
        } while (nn);
        return u
    }
    function gw() {
        var A = S.H
          , e = A.useState()[0];
        return e = typeof e.then == "function" ? al(e) : e,
        A = A.useState()[0],
        (SA !== null ? SA.memoizedState : null) !== A && (fA.flags |= 1024),
        e
    }
    function cu() {
        var A = Er !== 0;
        return Er = 0,
        A
    }
    function ou(A, e, t) {
        e.updateQueue = A.updateQueue,
        e.flags &= -2053,
        A.lanes &= ~t
    }
    function fu(A) {
        if (yr) {
            for (A = A.memoizedState; A !== null; ) {
                var e = A.queue;
                e !== null && (e.pending = null),
                A = A.next
            }
            yr = !1
        }
        ht = 0,
        qA = SA = fA = null,
        nn = !1,
        tl = Er = 0,
        ln = null
    }
    function he() {
        var A = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return qA === null ? fA.memoizedState = qA = A : qA = qA.next = A,
        qA
    }
    function YA() {
        if (SA === null) {
            var A = fA.alternate;
            A = A !== null ? A.memoizedState : null
        } else
            A = SA.next;
        var e = qA === null ? fA.memoizedState : qA.next;
        if (e !== null)
            qA = e,
            SA = A;
        else {
            if (A === null)
                throw fA.alternate === null ? Error(l(467)) : Error(l(310));
            SA = A,
            A = {
                memoizedState: SA.memoizedState,
                baseState: SA.baseState,
                baseQueue: SA.baseQueue,
                queue: SA.queue,
                next: null
            },
            qA === null ? fA.memoizedState = qA = A : qA = qA.next = A
        }
        return qA
    }
    function Hr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function al(A) {
        var e = tl;
        return tl += 1,
        ln === null && (ln = []),
        A = Xf(ln, A, e),
        e = fA,
        (qA === null ? e.memoizedState : qA.next) === null && (e = e.alternate,
        S.H = e === null || e.memoizedState === null ? MB : Fu),
        A
    }
    function br(A) {
        if (A !== null && typeof A == "object") {
            if (typeof A.then == "function")
                return al(A);
            if (A.$$typeof === W)
                return ie(A)
        }
        throw Error(l(438, String(A)))
    }
    function Bu(A) {
        var e = null
          , t = fA.updateQueue;
        if (t !== null && (e = t.memoCache),
        e == null) {
            var a = fA.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (e = {
                data: a.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        t === null && (t = Hr(),
        fA.updateQueue = t),
        t.memoCache = e,
        t = e.data[e.index],
        t === void 0)
            for (t = e.data[e.index] = Array(A),
            a = 0; a < A; a++)
                t[a] = nA;
        return e.index++,
        t
    }
    function Qt(A, e) {
        return typeof e == "function" ? e(A) : e
    }
    function xr(A) {
        var e = YA();
        return gu(e, SA, A)
    }
    function gu(A, e, t) {
        var a = A.queue;
        if (a === null)
            throw Error(l(311));
        a.lastRenderedReducer = t;
        var s = A.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (s !== null) {
                var f = s.next;
                s.next = u.next,
                u.next = f
            }
            e.baseQueue = s = u,
            a.pending = null
        }
        if (u = A.baseState,
        s === null)
            A.memoizedState = u;
        else {
            e = s.next;
            var h = f = null
              , m = null
              , H = e
              , K = !1;
            do {
                var O = H.lane & -536870913;
                if (O !== H.lane ? (wA & O) === O : (ht & O) === O) {
                    var b = H.revertLane;
                    if (b === 0)
                        m !== null && (m = m.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: H.action,
                            hasEagerState: H.hasEagerState,
                            eagerState: H.eagerState,
                            next: null
                        }),
                        O === $a && (K = !0);
                    else if ((ht & b) === b) {
                        H = H.next,
                        b === $a && (K = !0);
                        continue
                    } else
                        O = {
                            lane: 0,
                            revertLane: H.revertLane,
                            gesture: null,
                            action: H.action,
                            hasEagerState: H.hasEagerState,
                            eagerState: H.eagerState,
                            next: null
                        },
                        m === null ? (h = m = O,
                        f = u) : m = m.next = O,
                        fA.lanes |= b,
                        Xt |= b;
                    O = H.action,
                    Ea && t(u, O),
                    u = H.hasEagerState ? H.eagerState : t(u, O)
                } else
                    b = {
                        lane: O,
                        revertLane: H.revertLane,
                        gesture: H.gesture,
                        action: H.action,
                        hasEagerState: H.hasEagerState,
                        eagerState: H.eagerState,
                        next: null
                    },
                    m === null ? (h = m = b,
                    f = u) : m = m.next = b,
                    fA.lanes |= O,
                    Xt |= O;
                H = H.next
            } while (H !== null && H !== e);
            if (m === null ? f = u : m.next = h,
            !xe(u, A.memoizedState) && (WA = !0,
            K && (t = An,
            t !== null)))
                throw t;
            A.memoizedState = u,
            A.baseState = f,
            A.baseQueue = m,
            a.lastRenderedState = u
        }
        return s === null && (a.lanes = 0),
        [A.memoizedState, a.dispatch]
    }
    function du(A) {
        var e = YA()
          , t = e.queue;
        if (t === null)
            throw Error(l(311));
        t.lastRenderedReducer = A;
        var a = t.dispatch
          , s = t.pending
          , u = e.memoizedState;
        if (s !== null) {
            t.pending = null;
            var f = s = s.next;
            do
                u = A(u, f.action),
                f = f.next;
            while (f !== s);
            xe(u, e.memoizedState) || (WA = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            t.lastRenderedState = u
        }
        return [u, a]
    }
    function tB(A, e, t) {
        var a = fA
          , s = YA()
          , u = mA;
        if (u) {
            if (t === void 0)
                throw Error(l(407));
            t = t()
        } else
            t = e();
        var f = !xe((SA || s).memoizedState, t);
        if (f && (s.memoizedState = t,
        WA = !0),
        s = s.queue,
        wu(lB.bind(null, a, s, A), [A]),
        s.getSnapshot !== e || f || qA !== null && qA.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            rn(9, {
                destroy: void 0
            }, nB.bind(null, a, s, t, e), null),
            LA === null)
                throw Error(l(349));
            u || (ht & 127) !== 0 || aB(a, e, t)
        }
        return t
    }
    function aB(A, e, t) {
        A.flags |= 16384,
        A = {
            getSnapshot: e,
            value: t
        },
        e = fA.updateQueue,
        e === null ? (e = Hr(),
        fA.updateQueue = e,
        e.stores = [A]) : (t = e.stores,
        t === null ? e.stores = [A] : t.push(A))
    }
    function nB(A, e, t, a) {
        e.value = t,
        e.getSnapshot = a,
        rB(e) && iB(A)
    }
    function lB(A, e, t) {
        return t(function() {
            rB(e) && iB(A)
        })
    }
    function rB(A) {
        var e = A.getSnapshot;
        A = A.value;
        try {
            var t = e();
            return !xe(A, t)
        } catch {
            return !0
        }
    }
    function iB(A) {
        var e = Qa(A, 2);
        e !== null && Fe(e, A, 2)
    }
    function hu(A) {
        var e = he();
        if (typeof A == "function") {
            var t = A;
            if (A = t(),
            Ea) {
                Tt(!0);
                try {
                    t()
                } finally {
                    Tt(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = A,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qt,
            lastRenderedState: A
        },
        e
    }
    function sB(A, e, t, a) {
        return A.baseState = t,
        gu(A, SA, typeof a == "function" ? a : Qt)
    }
    function dw(A, e, t, a, s) {
        if (Dr(A))
            throw Error(l(485));
        if (A = e.action,
        A !== null) {
            var u = {
                payload: s,
                action: A,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    u.listeners.push(f)
                }
            };
            S.T !== null ? t(!0) : u.isTransition = !1,
            a(u),
            t = e.pending,
            t === null ? (u.next = e.pending = u,
            uB(e, u)) : (u.next = t.next,
            e.pending = t.next = u)
        }
    }
    function uB(A, e) {
        var t = e.action
          , a = e.payload
          , s = A.state;
        if (e.isTransition) {
            var u = S.T
              , f = {};
            S.T = f;
            try {
                var h = t(s, a)
                  , m = S.S;
                m !== null && m(f, h),
                cB(A, e, h)
            } catch (H) {
                Qu(A, e, H)
            } finally {
                u !== null && f.types !== null && (u.types = f.types),
                S.T = u
            }
        } else
            try {
                u = t(s, a),
                cB(A, e, u)
            } catch (H) {
                Qu(A, e, H)
            }
    }
    function cB(A, e, t) {
        t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(a) {
            oB(A, e, a)
        }, function(a) {
            return Qu(A, e, a)
        }) : oB(A, e, t)
    }
    function oB(A, e, t) {
        e.status = "fulfilled",
        e.value = t,
        fB(e),
        A.state = t,
        e = A.pending,
        e !== null && (t = e.next,
        t === e ? A.pending = null : (t = t.next,
        e.next = t,
        uB(A, t)))
    }
    function Qu(A, e, t) {
        var a = A.pending;
        if (A.pending = null,
        a !== null) {
            a = a.next;
            do
                e.status = "rejected",
                e.reason = t,
                fB(e),
                e = e.next;
            while (e !== a)
        }
        A.action = null
    }
    function fB(A) {
        A = A.listeners;
        for (var e = 0; e < A.length; e++)
            (0,
            A[e])()
    }
    function BB(A, e) {
        return e
    }
    function gB(A, e) {
        if (mA) {
            var t = LA.formState;
            if (t !== null) {
                A: {
                    var a = fA;
                    if (mA) {
                        if (MA) {
                            e: {
                                for (var s = MA, u = ze; s.nodeType !== 8; ) {
                                    if (!u) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Xe(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                u = s.data,
                                s = u === "F!" || u === "F" ? s : null
                            }
                            if (s) {
                                MA = Xe(s.nextSibling),
                                a = s.data === "F!";
                                break A
                            }
                        }
                        Mt(a)
                    }
                    a = !1
                }
                a && (e = t[0])
            }
        }
        return t = he(),
        t.memoizedState = t.baseState = e,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: BB,
            lastRenderedState: e
        },
        t.queue = a,
        t = KB.bind(null, fA, a),
        a.dispatch = t,
        a = hu(!1),
        u = pu.bind(null, fA, !1, a.queue),
        a = he(),
        s = {
            state: e,
            dispatch: null,
            action: A,
            pending: null
        },
        a.queue = s,
        t = dw.bind(null, fA, s, u, t),
        s.dispatch = t,
        a.memoizedState = A,
        [e, t, !1]
    }
    function dB(A) {
        var e = YA();
        return hB(e, SA, A)
    }
    function hB(A, e, t) {
        if (e = gu(A, e, BB)[0],
        A = xr(Qt)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var a = al(e)
            } catch (f) {
                throw f === en ? Cr : f
            }
        else
            a = e;
        e = YA();
        var s = e.queue
          , u = s.dispatch;
        return t !== e.memoizedState && (fA.flags |= 2048,
        rn(9, {
            destroy: void 0
        }, hw.bind(null, s, t), null)),
        [a, u, A]
    }
    function hw(A, e) {
        A.action = e
    }
    function QB(A) {
        var e = YA()
          , t = SA;
        if (t !== null)
            return hB(e, t, A);
        YA(),
        e = e.memoizedState,
        t = YA();
        var a = t.queue.dispatch;
        return t.memoizedState = A,
        [e, a, !1]
    }
    function rn(A, e, t, a) {
        return A = {
            tag: A,
            create: t,
            deps: a,
            inst: e,
            next: null
        },
        e = fA.updateQueue,
        e === null && (e = Hr(),
        fA.updateQueue = e),
        t = e.lastEffect,
        t === null ? e.lastEffect = A.next = A : (a = t.next,
        t.next = A,
        A.next = a,
        e.lastEffect = A),
        A
    }
    function wB() {
        return YA().memoizedState
    }
    function Sr(A, e, t, a) {
        var s = he();
        fA.flags |= A,
        s.memoizedState = rn(1 | e, {
            destroy: void 0
        }, t, a === void 0 ? null : a)
    }
    function Tr(A, e, t, a) {
        var s = YA();
        a = a === void 0 ? null : a;
        var u = s.memoizedState.inst;
        SA !== null && a !== null && su(a, SA.memoizedState.deps) ? s.memoizedState = rn(e, u, t, a) : (fA.flags |= A,
        s.memoizedState = rn(1 | e, u, t, a))
    }
    function CB(A, e) {
        Sr(8390656, 8, A, e)
    }
    function wu(A, e) {
        Tr(2048, 8, A, e)
    }
    function Qw(A) {
        fA.flags |= 4;
        var e = fA.updateQueue;
        if (e === null)
            e = Hr(),
            fA.updateQueue = e,
            e.events = [A];
        else {
            var t = e.events;
            t === null ? e.events = [A] : t.push(A)
        }
    }
    function UB(A) {
        var e = YA().memoizedState;
        return Qw({
            ref: e,
            nextImpl: A
        }),
        function() {
            if ((FA & 2) !== 0)
                throw Error(l(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function mB(A, e) {
        return Tr(4, 2, A, e)
    }
    function vB(A, e) {
        return Tr(4, 4, A, e)
    }
    function pB(A, e) {
        if (typeof e == "function") {
            A = A();
            var t = e(A);
            return function() {
                typeof t == "function" ? t() : e(null)
            }
        }
        if (e != null)
            return A = A(),
            e.current = A,
            function() {
                e.current = null
            }
    }
    function FB(A, e, t) {
        t = t != null ? t.concat([A]) : null,
        Tr(4, 4, pB.bind(null, e, A), t)
    }
    function Cu() {}
    function yB(A, e) {
        var t = YA();
        e = e === void 0 ? null : e;
        var a = t.memoizedState;
        return e !== null && su(e, a[1]) ? a[0] : (t.memoizedState = [A, e],
        A)
    }
    function EB(A, e) {
        var t = YA();
        e = e === void 0 ? null : e;
        var a = t.memoizedState;
        if (e !== null && su(e, a[1]))
            return a[0];
        if (a = A(),
        Ea) {
            Tt(!0);
            try {
                A()
            } finally {
                Tt(!1)
            }
        }
        return t.memoizedState = [a, e],
        a
    }
    function Uu(A, e, t) {
        return t === void 0 || (ht & 1073741824) !== 0 && (wA & 261930) === 0 ? A.memoizedState = e : (A.memoizedState = t,
        A = Hg(),
        fA.lanes |= A,
        Xt |= A,
        t)
    }
    function HB(A, e, t, a) {
        return xe(t, e) ? t : an.current !== null ? (A = Uu(A, t, a),
        xe(A, e) || (WA = !0),
        A) : (ht & 42) === 0 || (ht & 1073741824) !== 0 && (wA & 261930) === 0 ? (WA = !0,
        A.memoizedState = t) : (A = Hg(),
        fA.lanes |= A,
        Xt |= A,
        e)
    }
    function bB(A, e, t, a, s) {
        var u = z.p;
        z.p = u !== 0 && 8 > u ? u : 8;
        var f = S.T
          , h = {};
        S.T = h,
        pu(A, !1, e, t);
        try {
            var m = s()
              , H = S.S;
            if (H !== null && H(h, m),
            m !== null && typeof m == "object" && typeof m.then == "function") {
                var K = fw(m, a);
                nl(A, e, K, Ie(A))
            } else
                nl(A, e, a, Ie(A))
        } catch (O) {
            nl(A, e, {
                then: function() {},
                status: "rejected",
                reason: O
            }, Ie())
        } finally {
            z.p = u,
            f !== null && h.types !== null && (f.types = h.types),
            S.T = f
        }
    }
    function ww() {}
    function mu(A, e, t, a) {
        if (A.tag !== 5)
            throw Error(l(476));
        var s = xB(A).queue;
        bB(A, s, e, V, t === null ? ww : function() {
            return SB(A),
            t(a)
        }
        )
    }
    function xB(A) {
        var e = A.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: V,
            baseState: V,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: V
            },
            next: null
        };
        var t = {};
        return e.next = {
            memoizedState: t,
            baseState: t,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: t
            },
            next: null
        },
        A.memoizedState = e,
        A = A.alternate,
        A !== null && (A.memoizedState = e),
        e
    }
    function SB(A) {
        var e = xB(A);
        e.next === null && (e = A.alternate.memoizedState),
        nl(A, e.next.queue, {}, Ie())
    }
    function vu() {
        return ie(ml)
    }
    function TB() {
        return YA().memoizedState
    }
    function DB() {
        return YA().memoizedState
    }
    function Cw(A) {
        for (var e = A.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var t = Ie();
                A = Rt(t);
                var a = _t(e, A, t);
                a !== null && (Fe(a, e, t),
                $n(a, e, t)),
                e = {
                    cache: Ws()
                },
                A.payload = e;
                return
            }
            e = e.return
        }
    }
    function Uw(A, e, t) {
        var a = Ie();
        t = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Dr(A) ? LB(e, t) : (t = _s(A, e, t, a),
        t !== null && (Fe(t, A, a),
        IB(t, e, a)))
    }
    function KB(A, e, t) {
        var a = Ie();
        nl(A, e, t, a)
    }
    function nl(A, e, t, a) {
        var s = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Dr(A))
            LB(e, s);
        else {
            var u = A.alternate;
            if (A.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var f = e.lastRenderedState
                      , h = u(f, t);
                    if (s.hasEagerState = !0,
                    s.eagerState = h,
                    xe(h, f))
                        return fr(A, e, s, 0),
                        LA === null && or(),
                        !1
                } catch {} finally {}
            if (t = _s(A, e, s, a),
            t !== null)
                return Fe(t, A, a),
                IB(t, e, a),
                !0
        }
        return !1
    }
    function pu(A, e, t, a) {
        if (a = {
            lane: 2,
            revertLane: ec(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Dr(A)) {
            if (e)
                throw Error(l(479))
        } else
            e = _s(A, t, a, 2),
            e !== null && Fe(e, A, 2)
    }
    function Dr(A) {
        var e = A.alternate;
        return A === fA || e !== null && e === fA
    }
    function LB(A, e) {
        nn = yr = !0;
        var t = A.pending;
        t === null ? e.next = e : (e.next = t.next,
        t.next = e),
        A.pending = e
    }
    function IB(A, e, t) {
        if ((t & 4194048) !== 0) {
            var a = e.lanes;
            a &= A.pendingLanes,
            t |= a,
            e.lanes = t,
            Ro(A, t)
        }
    }
    var ll = {
        readContext: ie,
        use: br,
        useCallback: VA,
        useContext: VA,
        useEffect: VA,
        useImperativeHandle: VA,
        useLayoutEffect: VA,
        useInsertionEffect: VA,
        useMemo: VA,
        useReducer: VA,
        useRef: VA,
        useState: VA,
        useDebugValue: VA,
        useDeferredValue: VA,
        useTransition: VA,
        useSyncExternalStore: VA,
        useId: VA,
        useHostTransitionStatus: VA,
        useFormState: VA,
        useActionState: VA,
        useOptimistic: VA,
        useMemoCache: VA,
        useCacheRefresh: VA
    };
    ll.useEffectEvent = VA;
    var MB = {
        readContext: ie,
        use: br,
        useCallback: function(A, e) {
            return he().memoizedState = [A, e === void 0 ? null : e],
            A
        },
        useContext: ie,
        useEffect: CB,
        useImperativeHandle: function(A, e, t) {
            t = t != null ? t.concat([A]) : null,
            Sr(4194308, 4, pB.bind(null, e, A), t)
        },
        useLayoutEffect: function(A, e) {
            return Sr(4194308, 4, A, e)
        },
        useInsertionEffect: function(A, e) {
            Sr(4, 2, A, e)
        },
        useMemo: function(A, e) {
            var t = he();
            e = e === void 0 ? null : e;
            var a = A();
            if (Ea) {
                Tt(!0);
                try {
                    A()
                } finally {
                    Tt(!1)
                }
            }
            return t.memoizedState = [a, e],
            a
        },
        useReducer: function(A, e, t) {
            var a = he();
            if (t !== void 0) {
                var s = t(e);
                if (Ea) {
                    Tt(!0);
                    try {
                        t(e)
                    } finally {
                        Tt(!1)
                    }
                }
            } else
                s = e;
            return a.memoizedState = a.baseState = s,
            A = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: A,
                lastRenderedState: s
            },
            a.queue = A,
            A = A.dispatch = Uw.bind(null, fA, A),
            [a.memoizedState, A]
        },
        useRef: function(A) {
            var e = he();
            return A = {
                current: A
            },
            e.memoizedState = A
        },
        useState: function(A) {
            A = hu(A);
            var e = A.queue
              , t = KB.bind(null, fA, e);
            return e.dispatch = t,
            [A.memoizedState, t]
        },
        useDebugValue: Cu,
        useDeferredValue: function(A, e) {
            var t = he();
            return Uu(t, A, e)
        },
        useTransition: function() {
            var A = hu(!1);
            return A = bB.bind(null, fA, A.queue, !0, !1),
            he().memoizedState = A,
            [!1, A]
        },
        useSyncExternalStore: function(A, e, t) {
            var a = fA
              , s = he();
            if (mA) {
                if (t === void 0)
                    throw Error(l(407));
                t = t()
            } else {
                if (t = e(),
                LA === null)
                    throw Error(l(349));
                (wA & 127) !== 0 || aB(a, e, t)
            }
            s.memoizedState = t;
            var u = {
                value: t,
                getSnapshot: e
            };
            return s.queue = u,
            CB(lB.bind(null, a, u, A), [A]),
            a.flags |= 2048,
            rn(9, {
                destroy: void 0
            }, nB.bind(null, a, u, t, e), null),
            t
        },
        useId: function() {
            var A = he()
              , e = LA.identifierPrefix;
            if (mA) {
                var t = at
                  , a = tt;
                t = (a & ~(1 << 32 - be(a) - 1)).toString(32) + t,
                e = "_" + e + "R_" + t,
                t = Er++,
                0 < t && (e += "H" + t.toString(32)),
                e += "_"
            } else
                t = Bw++,
                e = "_" + e + "r_" + t.toString(32) + "_";
            return A.memoizedState = e
        },
        useHostTransitionStatus: vu,
        useFormState: gB,
        useActionState: gB,
        useOptimistic: function(A) {
            var e = he();
            e.memoizedState = e.baseState = A;
            var t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = t,
            e = pu.bind(null, fA, !0, t),
            t.dispatch = e,
            [A, e]
        },
        useMemoCache: Bu,
        useCacheRefresh: function() {
            return he().memoizedState = Cw.bind(null, fA)
        },
        useEffectEvent: function(A) {
            var e = he()
              , t = {
                impl: A
            };
            return e.memoizedState = t,
            function() {
                if ((FA & 2) !== 0)
                    throw Error(l(440));
                return t.impl.apply(void 0, arguments)
            }
        }
    }
      , Fu = {
        readContext: ie,
        use: br,
        useCallback: yB,
        useContext: ie,
        useEffect: wu,
        useImperativeHandle: FB,
        useInsertionEffect: mB,
        useLayoutEffect: vB,
        useMemo: EB,
        useReducer: xr,
        useRef: wB,
        useState: function() {
            return xr(Qt)
        },
        useDebugValue: Cu,
        useDeferredValue: function(A, e) {
            var t = YA();
            return HB(t, SA.memoizedState, A, e)
        },
        useTransition: function() {
            var A = xr(Qt)[0]
              , e = YA().memoizedState;
            return [typeof A == "boolean" ? A : al(A), e]
        },
        useSyncExternalStore: tB,
        useId: TB,
        useHostTransitionStatus: vu,
        useFormState: dB,
        useActionState: dB,
        useOptimistic: function(A, e) {
            var t = YA();
            return sB(t, SA, A, e)
        },
        useMemoCache: Bu,
        useCacheRefresh: DB
    };
    Fu.useEffectEvent = UB;
    var NB = {
        readContext: ie,
        use: br,
        useCallback: yB,
        useContext: ie,
        useEffect: wu,
        useImperativeHandle: FB,
        useInsertionEffect: mB,
        useLayoutEffect: vB,
        useMemo: EB,
        useReducer: du,
        useRef: wB,
        useState: function() {
            return du(Qt)
        },
        useDebugValue: Cu,
        useDeferredValue: function(A, e) {
            var t = YA();
            return SA === null ? Uu(t, A, e) : HB(t, SA.memoizedState, A, e)
        },
        useTransition: function() {
            var A = du(Qt)[0]
              , e = YA().memoizedState;
            return [typeof A == "boolean" ? A : al(A), e]
        },
        useSyncExternalStore: tB,
        useId: TB,
        useHostTransitionStatus: vu,
        useFormState: QB,
        useActionState: QB,
        useOptimistic: function(A, e) {
            var t = YA();
            return SA !== null ? sB(t, SA, A, e) : (t.baseState = A,
            [A, t.queue.dispatch])
        },
        useMemoCache: Bu,
        useCacheRefresh: DB
    };
    NB.useEffectEvent = UB;
    function yu(A, e, t, a) {
        e = A.memoizedState,
        t = t(a, e),
        t = t == null ? e : C({}, e, t),
        A.memoizedState = t,
        A.lanes === 0 && (A.updateQueue.baseState = t)
    }
    var Eu = {
        enqueueSetState: function(A, e, t) {
            A = A._reactInternals;
            var a = Ie()
              , s = Rt(a);
            s.payload = e,
            t != null && (s.callback = t),
            e = _t(A, s, a),
            e !== null && (Fe(e, A, a),
            $n(e, A, a))
        },
        enqueueReplaceState: function(A, e, t) {
            A = A._reactInternals;
            var a = Ie()
              , s = Rt(a);
            s.tag = 1,
            s.payload = e,
            t != null && (s.callback = t),
            e = _t(A, s, a),
            e !== null && (Fe(e, A, a),
            $n(e, A, a))
        },
        enqueueForceUpdate: function(A, e) {
            A = A._reactInternals;
            var t = Ie()
              , a = Rt(t);
            a.tag = 2,
            e != null && (a.callback = e),
            e = _t(A, a, t),
            e !== null && (Fe(e, A, t),
            $n(e, A, t))
        }
    };
    function OB(A, e, t, a, s, u, f) {
        return A = A.stateNode,
        typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !Xn(t, a) || !Xn(s, u) : !0
    }
    function RB(A, e, t, a) {
        A = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, a),
        e.state !== A && Eu.enqueueReplaceState(e, e.state, null)
    }
    function Ha(A, e) {
        var t = e;
        if ("ref"in e) {
            t = {};
            for (var a in e)
                a !== "ref" && (t[a] = e[a])
        }
        if (A = A.defaultProps) {
            t === e && (t = C({}, t));
            for (var s in A)
                t[s] === void 0 && (t[s] = A[s])
        }
        return t
    }
    function _B(A) {
        cr(A)
    }
    function GB(A) {
        console.error(A)
    }
    function VB(A) {
        cr(A)
    }
    function Kr(A, e) {
        try {
            var t = A.onUncaughtError;
            t(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function zB(A, e, t) {
        try {
            var a = A.onCaughtError;
            a(t.value, {
                componentStack: t.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function Hu(A, e, t) {
        return t = Rt(t),
        t.tag = 3,
        t.payload = {
            element: null
        },
        t.callback = function() {
            Kr(A, e)
        }
        ,
        t
    }
    function jB(A) {
        return A = Rt(A),
        A.tag = 3,
        A
    }
    function XB(A, e, t, a) {
        var s = t.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var u = a.value;
            A.payload = function() {
                return s(u)
            }
            ,
            A.callback = function() {
                zB(e, t, a)
            }
        }
        var f = t.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (A.callback = function() {
            zB(e, t, a),
            typeof s != "function" && (Yt === null ? Yt = new Set([this]) : Yt.add(this));
            var h = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: h !== null ? h : ""
            })
        }
        )
    }
    function mw(A, e, t, a, s) {
        if (t.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = t.alternate,
            e !== null && Pa(e, t, s, !0),
            t = Te.current,
            t !== null) {
                switch (t.tag) {
                case 31:
                case 13:
                    return je === null ? Xr() : t.alternate === null && zA === 0 && (zA = 3),
                    t.flags &= -257,
                    t.flags |= 65536,
                    t.lanes = s,
                    a === Ur ? t.flags |= 16384 : (e = t.updateQueue,
                    e === null ? t.updateQueue = new Set([a]) : e.add(a),
                    Pu(A, a, s)),
                    !1;
                case 22:
                    return t.flags |= 65536,
                    a === Ur ? t.flags |= 16384 : (e = t.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    t.updateQueue = e) : (t = e.retryQueue,
                    t === null ? e.retryQueue = new Set([a]) : t.add(a)),
                    Pu(A, a, s)),
                    !1
                }
                throw Error(l(435, t.tag))
            }
            return Pu(A, a, s),
            Xr(),
            !1
        }
        if (mA)
            return e = Te.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            a !== Ys && (A = Error(l(422), {
                cause: a
            }),
            kn(_e(A, t)))) : (a !== Ys && (e = Error(l(423), {
                cause: a
            }),
            kn(_e(e, t))),
            A = A.current.alternate,
            A.flags |= 65536,
            s &= -s,
            A.lanes |= s,
            a = _e(a, t),
            s = Hu(A.stateNode, a, s),
            au(A, s),
            zA !== 4 && (zA = 2)),
            !1;
        var u = Error(l(520), {
            cause: a
        });
        if (u = _e(u, t),
        Bl === null ? Bl = [u] : Bl.push(u),
        zA !== 4 && (zA = 2),
        e === null)
            return !0;
        a = _e(a, t),
        t = e;
        do {
            switch (t.tag) {
            case 3:
                return t.flags |= 65536,
                A = s & -s,
                t.lanes |= A,
                A = Hu(t.stateNode, a, A),
                au(t, A),
                !1;
            case 1:
                if (e = t.type,
                u = t.stateNode,
                (t.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Yt === null || !Yt.has(u))))
                    return t.flags |= 65536,
                    s &= -s,
                    t.lanes |= s,
                    s = jB(s),
                    XB(s, A, t, a),
                    au(t, s),
                    !1
            }
            t = t.return
        } while (t !== null);
        return !1
    }
    var bu = Error(l(461))
      , WA = !1;
    function se(A, e, t, a) {
        e.child = A === null ? Zf(e, null, t, a) : ya(e, A.child, t, a)
    }
    function YB(A, e, t, a, s) {
        t = t.render;
        var u = e.ref;
        if ("ref"in a) {
            var f = {};
            for (var h in a)
                h !== "ref" && (f[h] = a[h])
        } else
            f = a;
        return ma(e),
        a = uu(A, e, t, f, u, s),
        h = cu(),
        A !== null && !WA ? (ou(A, e, s),
        wt(A, e, s)) : (mA && h && js(e),
        e.flags |= 1,
        se(A, e, a, s),
        e.child)
    }
    function JB(A, e, t, a, s) {
        if (A === null) {
            var u = t.type;
            return typeof u == "function" && !Gs(u) && u.defaultProps === void 0 && t.compare === null ? (e.tag = 15,
            e.type = u,
            kB(A, e, u, a, s)) : (A = gr(t.type, null, a, e, e.mode, s),
            A.ref = e.ref,
            A.return = e,
            e.child = A)
        }
        if (u = A.child,
        !Mu(A, s)) {
            var f = u.memoizedProps;
            if (t = t.compare,
            t = t !== null ? t : Xn,
            t(f, a) && A.ref === e.ref)
                return wt(A, e, s)
        }
        return e.flags |= 1,
        A = ft(u, a),
        A.ref = e.ref,
        A.return = e,
        e.child = A
    }
    function kB(A, e, t, a, s) {
        if (A !== null) {
            var u = A.memoizedProps;
            if (Xn(u, a) && A.ref === e.ref)
                if (WA = !1,
                e.pendingProps = a = u,
                Mu(A, s))
                    (A.flags & 131072) !== 0 && (WA = !0);
                else
                    return e.lanes = A.lanes,
                    wt(A, e, s)
        }
        return xu(A, e, t, a, s)
    }
    function ZB(A, e, t, a) {
        var s = a.children
          , u = A !== null ? A.memoizedState : null;
        if (A === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | t : t,
                A !== null) {
                    for (a = e.child = A.child,
                    s = 0; a !== null; )
                        s = s | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = s & ~u
                } else
                    a = 0,
                    e.child = null;
                return qB(A, e, u, t, a)
            }
            if ((t & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                A !== null && wr(e, u !== null ? u.cachePool : null),
                u !== null ? Pf(e, u) : lu(),
                $f(e);
            else
                return a = e.lanes = 536870912,
                qB(A, e, u !== null ? u.baseLanes | t : t, t, a)
        } else
            u !== null ? (wr(e, u.cachePool),
            Pf(e, u),
            Vt(),
            e.memoizedState = null) : (A !== null && wr(e, null),
            lu(),
            Vt());
        return se(A, e, s, t),
        e.child
    }
    function rl(A, e) {
        return A !== null && A.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function qB(A, e, t, a, s) {
        var u = $s();
        return u = u === null ? null : {
            parent: ZA._currentValue,
            pool: u
        },
        e.memoizedState = {
            baseLanes: t,
            cachePool: u
        },
        A !== null && wr(e, null),
        lu(),
        $f(e),
        A !== null && Pa(A, e, a, !0),
        e.childLanes = s,
        null
    }
    function Lr(A, e) {
        return e = Mr({
            mode: e.mode,
            children: e.children
        }, A.mode),
        e.ref = A.ref,
        A.child = e,
        e.return = A,
        e
    }
    function WB(A, e, t) {
        return ya(e, A.child, null, t),
        A = Lr(e, e.pendingProps),
        A.flags |= 2,
        De(e),
        e.memoizedState = null,
        A
    }
    function vw(A, e, t) {
        var a = e.pendingProps
          , s = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        A === null) {
            if (mA) {
                if (a.mode === "hidden")
                    return A = Lr(e, a),
                    e.lanes = 536870912,
                    rl(null, A);
                if (iu(e),
                (A = MA) ? (A = ud(A, ze),
                A = A !== null && A.data === "&" ? A : null,
                A !== null && (e.memoizedState = {
                    dehydrated: A,
                    treeContext: Lt !== null ? {
                        id: tt,
                        overflow: at
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                t = Lf(A),
                t.return = e,
                e.child = t,
                re = e,
                MA = null)) : A = null,
                A === null)
                    throw Mt(e);
                return e.lanes = 536870912,
                null
            }
            return Lr(e, a)
        }
        var u = A.memoizedState;
        if (u !== null) {
            var f = u.dehydrated;
            if (iu(e),
            s)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = WB(A, e, t);
                else if (e.memoizedState !== null)
                    e.child = A.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(l(558));
            else if (WA || Pa(A, e, t, !1),
            s = (t & A.childLanes) !== 0,
            WA || s) {
                if (a = LA,
                a !== null && (f = _o(a, t),
                f !== 0 && f !== u.retryLane))
                    throw u.retryLane = f,
                    Qa(A, f),
                    Fe(a, A, f),
                    bu;
                Xr(),
                e = WB(A, e, t)
            } else
                A = u.treeContext,
                MA = Xe(f.nextSibling),
                re = e,
                mA = !0,
                It = null,
                ze = !1,
                A !== null && Nf(e, A),
                e = Lr(e, a),
                e.flags |= 4096;
            return e
        }
        return A = ft(A.child, {
            mode: a.mode,
            children: a.children
        }),
        A.ref = e.ref,
        e.child = A,
        A.return = e,
        A
    }
    function Ir(A, e) {
        var t = e.ref;
        if (t === null)
            A !== null && A.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof t != "function" && typeof t != "object")
                throw Error(l(284));
            (A === null || A.ref !== t) && (e.flags |= 4194816)
        }
    }
    function xu(A, e, t, a, s) {
        return ma(e),
        t = uu(A, e, t, a, void 0, s),
        a = cu(),
        A !== null && !WA ? (ou(A, e, s),
        wt(A, e, s)) : (mA && a && js(e),
        e.flags |= 1,
        se(A, e, t, s),
        e.child)
    }
    function PB(A, e, t, a, s, u) {
        return ma(e),
        e.updateQueue = null,
        t = eB(e, a, t, s),
        AB(A),
        a = cu(),
        A !== null && !WA ? (ou(A, e, u),
        wt(A, e, u)) : (mA && a && js(e),
        e.flags |= 1,
        se(A, e, t, u),
        e.child)
    }
    function $B(A, e, t, a, s) {
        if (ma(e),
        e.stateNode === null) {
            var u = ka
              , f = t.contextType;
            typeof f == "object" && f !== null && (u = ie(f)),
            u = new t(a,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = Eu,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = a,
            u.state = e.memoizedState,
            u.refs = {},
            eu(e),
            f = t.contextType,
            u.context = typeof f == "object" && f !== null ? ie(f) : ka,
            u.state = e.memoizedState,
            f = t.getDerivedStateFromProps,
            typeof f == "function" && (yu(e, t, f, a),
            u.state = e.memoizedState),
            typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            f !== u.state && Eu.enqueueReplaceState(u, u.state, null),
            el(e, a, u, s),
            Al(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !0
        } else if (A === null) {
            u = e.stateNode;
            var h = e.memoizedProps
              , m = Ha(t, h);
            u.props = m;
            var H = u.context
              , K = t.contextType;
            f = ka,
            typeof K == "object" && K !== null && (f = ie(K));
            var O = t.getDerivedStateFromProps;
            K = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            h = e.pendingProps !== h,
            K || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || H !== f) && RB(e, u, a, f),
            Ot = !1;
            var b = e.memoizedState;
            u.state = b,
            el(e, a, u, s),
            Al(),
            H = e.memoizedState,
            h || b !== H || Ot ? (typeof O == "function" && (yu(e, t, O, a),
            H = e.memoizedState),
            (m = Ot || OB(e, t, m, a, b, H, f)) ? (K || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = a,
            e.memoizedState = H),
            u.props = a,
            u.state = H,
            u.context = f,
            a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
        } else {
            u = e.stateNode,
            tu(A, e),
            f = e.memoizedProps,
            K = Ha(t, f),
            u.props = K,
            O = e.pendingProps,
            b = u.context,
            H = t.contextType,
            m = ka,
            typeof H == "object" && H !== null && (m = ie(H)),
            h = t.getDerivedStateFromProps,
            (H = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== O || b !== m) && RB(e, u, a, m),
            Ot = !1,
            b = e.memoizedState,
            u.state = b,
            el(e, a, u, s),
            Al();
            var x = e.memoizedState;
            f !== O || b !== x || Ot || A !== null && A.dependencies !== null && hr(A.dependencies) ? (typeof h == "function" && (yu(e, t, h, a),
            x = e.memoizedState),
            (K = Ot || OB(e, t, K, a, b, x, m) || A !== null && A.dependencies !== null && hr(A.dependencies)) ? (H || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, x, m),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, x, m)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === A.memoizedProps && b === A.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || f === A.memoizedProps && b === A.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = x),
            u.props = a,
            u.state = x,
            u.context = m,
            a = K) : (typeof u.componentDidUpdate != "function" || f === A.memoizedProps && b === A.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || f === A.memoizedProps && b === A.memoizedState || (e.flags |= 1024),
            a = !1)
        }
        return u = a,
        Ir(A, e),
        a = (e.flags & 128) !== 0,
        u || a ? (u = e.stateNode,
        t = a && typeof t.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        A !== null && a ? (e.child = ya(e, A.child, null, s),
        e.child = ya(e, null, t, s)) : se(A, e, t, s),
        e.memoizedState = u.state,
        A = e.child) : A = wt(A, e, s),
        A
    }
    function Ag(A, e, t, a) {
        return Ca(),
        e.flags |= 256,
        se(A, e, t, a),
        e.child
    }
    var Su = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Tu(A) {
        return {
            baseLanes: A,
            cachePool: zf()
        }
    }
    function Du(A, e, t) {
        return A = A !== null ? A.childLanes & ~t : 0,
        e && (A |= Le),
        A
    }
    function eg(A, e, t) {
        var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
        if ((f = u) || (f = A !== null && A.memoizedState === null ? !1 : (XA.current & 2) !== 0),
        f && (s = !0,
        e.flags &= -129),
        f = (e.flags & 32) !== 0,
        e.flags &= -33,
        A === null) {
            if (mA) {
                if (s ? Gt(e) : Vt(),
                (A = MA) ? (A = ud(A, ze),
                A = A !== null && A.data !== "&" ? A : null,
                A !== null && (e.memoizedState = {
                    dehydrated: A,
                    treeContext: Lt !== null ? {
                        id: tt,
                        overflow: at
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                t = Lf(A),
                t.return = e,
                e.child = t,
                re = e,
                MA = null)) : A = null,
                A === null)
                    throw Mt(e);
                return gc(A) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var h = a.children;
            return a = a.fallback,
            s ? (Vt(),
            s = e.mode,
            h = Mr({
                mode: "hidden",
                children: h
            }, s),
            a = wa(a, s, t, null),
            h.return = e,
            a.return = e,
            h.sibling = a,
            e.child = h,
            a = e.child,
            a.memoizedState = Tu(t),
            a.childLanes = Du(A, f, t),
            e.memoizedState = Su,
            rl(null, a)) : (Gt(e),
            Ku(e, h))
        }
        var m = A.memoizedState;
        if (m !== null && (h = m.dehydrated,
        h !== null)) {
            if (u)
                e.flags & 256 ? (Gt(e),
                e.flags &= -257,
                e = Lu(A, e, t)) : e.memoizedState !== null ? (Vt(),
                e.child = A.child,
                e.flags |= 128,
                e = null) : (Vt(),
                h = a.fallback,
                s = e.mode,
                a = Mr({
                    mode: "visible",
                    children: a.children
                }, s),
                h = wa(h, s, t, null),
                h.flags |= 2,
                a.return = e,
                h.return = e,
                a.sibling = h,
                e.child = a,
                ya(e, A.child, null, t),
                a = e.child,
                a.memoizedState = Tu(t),
                a.childLanes = Du(A, f, t),
                e.memoizedState = Su,
                e = rl(null, a));
            else if (Gt(e),
            gc(h)) {
                if (f = h.nextSibling && h.nextSibling.dataset,
                f)
                    var H = f.dgst;
                f = H,
                a = Error(l(419)),
                a.stack = "",
                a.digest = f,
                kn({
                    value: a,
                    source: null,
                    stack: null
                }),
                e = Lu(A, e, t)
            } else if (WA || Pa(A, e, t, !1),
            f = (t & A.childLanes) !== 0,
            WA || f) {
                if (f = LA,
                f !== null && (a = _o(f, t),
                a !== 0 && a !== m.retryLane))
                    throw m.retryLane = a,
                    Qa(A, a),
                    Fe(f, A, a),
                    bu;
                Bc(h) || Xr(),
                e = Lu(A, e, t)
            } else
                Bc(h) ? (e.flags |= 192,
                e.child = A.child,
                e = null) : (A = m.treeContext,
                MA = Xe(h.nextSibling),
                re = e,
                mA = !0,
                It = null,
                ze = !1,
                A !== null && Nf(e, A),
                e = Ku(e, a.children),
                e.flags |= 4096);
            return e
        }
        return s ? (Vt(),
        h = a.fallback,
        s = e.mode,
        m = A.child,
        H = m.sibling,
        a = ft(m, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = m.subtreeFlags & 65011712,
        H !== null ? h = ft(H, h) : (h = wa(h, s, t, null),
        h.flags |= 2),
        h.return = e,
        a.return = e,
        a.sibling = h,
        e.child = a,
        rl(null, a),
        a = e.child,
        h = A.child.memoizedState,
        h === null ? h = Tu(t) : (s = h.cachePool,
        s !== null ? (m = ZA._currentValue,
        s = s.parent !== m ? {
            parent: m,
            pool: m
        } : s) : s = zf(),
        h = {
            baseLanes: h.baseLanes | t,
            cachePool: s
        }),
        a.memoizedState = h,
        a.childLanes = Du(A, f, t),
        e.memoizedState = Su,
        rl(A.child, a)) : (Gt(e),
        t = A.child,
        A = t.sibling,
        t = ft(t, {
            mode: "visible",
            children: a.children
        }),
        t.return = e,
        t.sibling = null,
        A !== null && (f = e.deletions,
        f === null ? (e.deletions = [A],
        e.flags |= 16) : f.push(A)),
        e.child = t,
        e.memoizedState = null,
        t)
    }
    function Ku(A, e) {
        return e = Mr({
            mode: "visible",
            children: e
        }, A.mode),
        e.return = A,
        A.child = e
    }
    function Mr(A, e) {
        return A = Se(22, A, null, e),
        A.lanes = 0,
        A
    }
    function Lu(A, e, t) {
        return ya(e, A.child, null, t),
        A = Ku(e, e.pendingProps.children),
        A.flags |= 2,
        e.memoizedState = null,
        A
    }
    function tg(A, e, t) {
        A.lanes |= e;
        var a = A.alternate;
        a !== null && (a.lanes |= e),
        Zs(A.return, e, t)
    }
    function Iu(A, e, t, a, s, u) {
        var f = A.memoizedState;
        f === null ? A.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: t,
            tailMode: s,
            treeForkCount: u
        } : (f.isBackwards = e,
        f.rendering = null,
        f.renderingStartTime = 0,
        f.last = a,
        f.tail = t,
        f.tailMode = s,
        f.treeForkCount = u)
    }
    function ag(A, e, t) {
        var a = e.pendingProps
          , s = a.revealOrder
          , u = a.tail;
        a = a.children;
        var f = XA.current
          , h = (f & 2) !== 0;
        if (h ? (f = f & 1 | 2,
        e.flags |= 128) : f &= 1,
        j(XA, f),
        se(A, e, a, t),
        a = mA ? Jn : 0,
        !h && A !== null && (A.flags & 128) !== 0)
            A: for (A = e.child; A !== null; ) {
                if (A.tag === 13)
                    A.memoizedState !== null && tg(A, t, e);
                else if (A.tag === 19)
                    tg(A, t, e);
                else if (A.child !== null) {
                    A.child.return = A,
                    A = A.child;
                    continue
                }
                if (A === e)
                    break A;
                for (; A.sibling === null; ) {
                    if (A.return === null || A.return === e)
                        break A;
                    A = A.return
                }
                A.sibling.return = A.return,
                A = A.sibling
            }
        switch (s) {
        case "forwards":
            for (t = e.child,
            s = null; t !== null; )
                A = t.alternate,
                A !== null && Fr(A) === null && (s = t),
                t = t.sibling;
            t = s,
            t === null ? (s = e.child,
            e.child = null) : (s = t.sibling,
            t.sibling = null),
            Iu(e, !1, s, t, u, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (t = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (A = s.alternate,
                A !== null && Fr(A) === null) {
                    e.child = s;
                    break
                }
                A = s.sibling,
                s.sibling = t,
                t = s,
                s = A
            }
            Iu(e, !0, t, null, u, a);
            break;
        case "together":
            Iu(e, !1, null, null, void 0, a);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function wt(A, e, t) {
        if (A !== null && (e.dependencies = A.dependencies),
        Xt |= e.lanes,
        (t & e.childLanes) === 0)
            if (A !== null) {
                if (Pa(A, e, t, !1),
                (t & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (A !== null && e.child !== A.child)
            throw Error(l(153));
        if (e.child !== null) {
            for (A = e.child,
            t = ft(A, A.pendingProps),
            e.child = t,
            t.return = e; A.sibling !== null; )
                A = A.sibling,
                t = t.sibling = ft(A, A.pendingProps),
                t.return = e;
            t.sibling = null
        }
        return e.child
    }
    function Mu(A, e) {
        return (A.lanes & e) !== 0 ? !0 : (A = A.dependencies,
        !!(A !== null && hr(A)))
    }
    function pw(A, e, t) {
        switch (e.tag) {
        case 3:
            de(e, e.stateNode.containerInfo),
            Nt(e, ZA, A.memoizedState.cache),
            Ca();
            break;
        case 27:
        case 5:
            Dn(e);
            break;
        case 4:
            de(e, e.stateNode.containerInfo);
            break;
        case 10:
            Nt(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                iu(e),
                null;
            break;
        case 13:
            var a = e.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (Gt(e),
                e.flags |= 128,
                null) : (t & e.child.childLanes) !== 0 ? eg(A, e, t) : (Gt(e),
                A = wt(A, e, t),
                A !== null ? A.sibling : null);
            Gt(e);
            break;
        case 19:
            var s = (A.flags & 128) !== 0;
            if (a = (t & e.childLanes) !== 0,
            a || (Pa(A, e, t, !1),
            a = (t & e.childLanes) !== 0),
            s) {
                if (a)
                    return ag(A, e, t);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            j(XA, XA.current),
            a)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            ZB(A, e, t, e.pendingProps);
        case 24:
            Nt(e, ZA, A.memoizedState.cache)
        }
        return wt(A, e, t)
    }
    function ng(A, e, t) {
        if (A !== null)
            if (A.memoizedProps !== e.pendingProps)
                WA = !0;
            else {
                if (!Mu(A, t) && (e.flags & 128) === 0)
                    return WA = !1,
                    pw(A, e, t);
                WA = (A.flags & 131072) !== 0
            }
        else
            WA = !1,
            mA && (e.flags & 1048576) !== 0 && Mf(e, Jn, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            A: {
                var a = e.pendingProps;
                if (A = pa(e.elementType),
                e.type = A,
                typeof A == "function")
                    Gs(A) ? (a = Ha(A, a),
                    e.tag = 1,
                    e = $B(null, e, A, a, t)) : (e.tag = 0,
                    e = xu(null, e, A, a, t));
                else {
                    if (A != null) {
                        var s = A.$$typeof;
                        if (s === AA) {
                            e.tag = 11,
                            e = YB(null, e, A, a, t);
                            break A
                        } else if (s === G) {
                            e.tag = 14,
                            e = JB(null, e, A, a, t);
                            break A
                        }
                    }
                    throw e = HA(A) || A,
                    Error(l(306, e, ""))
                }
            }
            return e;
        case 0:
            return xu(A, e, e.type, e.pendingProps, t);
        case 1:
            return a = e.type,
            s = Ha(a, e.pendingProps),
            $B(A, e, a, s, t);
        case 3:
            A: {
                if (de(e, e.stateNode.containerInfo),
                A === null)
                    throw Error(l(387));
                a = e.pendingProps;
                var u = e.memoizedState;
                s = u.element,
                tu(A, e),
                el(e, a, null, t);
                var f = e.memoizedState;
                if (a = f.cache,
                Nt(e, ZA, a),
                a !== u.cache && qs(e, [ZA], t, !0),
                Al(),
                a = f.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: f.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = Ag(A, e, a, t);
                        break A
                    } else if (a !== s) {
                        s = _e(Error(l(424)), e),
                        kn(s),
                        e = Ag(A, e, a, t);
                        break A
                    } else {
                        switch (A = e.stateNode.containerInfo,
                        A.nodeType) {
                        case 9:
                            A = A.body;
                            break;
                        default:
                            A = A.nodeName === "HTML" ? A.ownerDocument.body : A
                        }
                        for (MA = Xe(A.firstChild),
                        re = e,
                        mA = !0,
                        It = null,
                        ze = !0,
                        t = Zf(e, null, a, t),
                        e.child = t; t; )
                            t.flags = t.flags & -3 | 4096,
                            t = t.sibling
                    }
                else {
                    if (Ca(),
                    a === s) {
                        e = wt(A, e, t);
                        break A
                    }
                    se(A, e, a, t)
                }
                e = e.child
            }
            return e;
        case 26:
            return Ir(A, e),
            A === null ? (t = dd(e.type, null, e.pendingProps, null)) ? e.memoizedState = t : mA || (t = e.type,
            A = e.pendingProps,
            a = Pr(uA.current).createElement(t),
            a[le] = e,
            a[we] = A,
            ue(a, t, A),
            te(a),
            e.stateNode = a) : e.memoizedState = dd(e.type, A.memoizedProps, e.pendingProps, A.memoizedState),
            null;
        case 27:
            return Dn(e),
            A === null && mA && (a = e.stateNode = fd(e.type, e.pendingProps, uA.current),
            re = e,
            ze = !0,
            s = MA,
            qt(e.type) ? (dc = s,
            MA = Xe(a.firstChild)) : MA = s),
            se(A, e, e.pendingProps.children, t),
            Ir(A, e),
            A === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return A === null && mA && ((s = a = MA) && (a = $w(a, e.type, e.pendingProps, ze),
            a !== null ? (e.stateNode = a,
            re = e,
            MA = Xe(a.firstChild),
            ze = !1,
            s = !0) : s = !1),
            s || Mt(e)),
            Dn(e),
            s = e.type,
            u = e.pendingProps,
            f = A !== null ? A.memoizedProps : null,
            a = u.children,
            cc(s, u) ? a = null : f !== null && cc(s, f) && (e.flags |= 32),
            e.memoizedState !== null && (s = uu(A, e, gw, null, null, t),
            ml._currentValue = s),
            Ir(A, e),
            se(A, e, a, t),
            e.child;
        case 6:
            return A === null && mA && ((A = t = MA) && (t = AC(t, e.pendingProps, ze),
            t !== null ? (e.stateNode = t,
            re = e,
            MA = null,
            A = !0) : A = !1),
            A || Mt(e)),
            null;
        case 13:
            return eg(A, e, t);
        case 4:
            return de(e, e.stateNode.containerInfo),
            a = e.pendingProps,
            A === null ? e.child = ya(e, null, a, t) : se(A, e, a, t),
            e.child;
        case 11:
            return YB(A, e, e.type, e.pendingProps, t);
        case 7:
            return se(A, e, e.pendingProps, t),
            e.child;
        case 8:
            return se(A, e, e.pendingProps.children, t),
            e.child;
        case 12:
            return se(A, e, e.pendingProps.children, t),
            e.child;
        case 10:
            return a = e.pendingProps,
            Nt(e, e.type, a.value),
            se(A, e, a.children, t),
            e.child;
        case 9:
            return s = e.type._context,
            a = e.pendingProps.children,
            ma(e),
            s = ie(s),
            a = a(s),
            e.flags |= 1,
            se(A, e, a, t),
            e.child;
        case 14:
            return JB(A, e, e.type, e.pendingProps, t);
        case 15:
            return kB(A, e, e.type, e.pendingProps, t);
        case 19:
            return ag(A, e, t);
        case 31:
            return vw(A, e, t);
        case 22:
            return ZB(A, e, t, e.pendingProps);
        case 24:
            return ma(e),
            a = ie(ZA),
            A === null ? (s = $s(),
            s === null && (s = LA,
            u = Ws(),
            s.pooledCache = u,
            u.refCount++,
            u !== null && (s.pooledCacheLanes |= t),
            s = u),
            e.memoizedState = {
                parent: a,
                cache: s
            },
            eu(e),
            Nt(e, ZA, s)) : ((A.lanes & t) !== 0 && (tu(A, e),
            el(e, null, null, t),
            Al()),
            s = A.memoizedState,
            u = e.memoizedState,
            s.parent !== a ? (s = {
                parent: a,
                cache: a
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Nt(e, ZA, a)) : (a = u.cache,
            Nt(e, ZA, a),
            a !== s.cache && qs(e, [ZA], t, !0))),
            se(A, e, e.pendingProps.children, t),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(l(156, e.tag))
    }
    function Ct(A) {
        A.flags |= 4
    }
    function Nu(A, e, t, a, s) {
        if ((e = (A.mode & 32) !== 0) && (e = !1),
        e) {
            if (A.flags |= 16777216,
            (s & 335544128) === s)
                if (A.stateNode.complete)
                    A.flags |= 8192;
                else if (Tg())
                    A.flags |= 8192;
                else
                    throw Fa = Ur,
                    Au
        } else
            A.flags &= -16777217
    }
    function lg(A, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            A.flags &= -16777217;
        else if (A.flags |= 16777216,
        !Ud(e))
            if (Tg())
                A.flags |= 8192;
            else
                throw Fa = Ur,
                Au
    }
    function Nr(A, e) {
        e !== null && (A.flags |= 4),
        A.flags & 16384 && (e = A.tag !== 22 ? No() : 536870912,
        A.lanes |= e,
        on |= e)
    }
    function il(A, e) {
        if (!mA)
            switch (A.tailMode) {
            case "hidden":
                e = A.tail;
                for (var t = null; e !== null; )
                    e.alternate !== null && (t = e),
                    e = e.sibling;
                t === null ? A.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = A.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : a.sibling = null
            }
    }
    function NA(A) {
        var e = A.alternate !== null && A.alternate.child === A.child
          , t = 0
          , a = 0;
        if (e)
            for (var s = A.child; s !== null; )
                t |= s.lanes | s.childLanes,
                a |= s.subtreeFlags & 65011712,
                a |= s.flags & 65011712,
                s.return = A,
                s = s.sibling;
        else
            for (s = A.child; s !== null; )
                t |= s.lanes | s.childLanes,
                a |= s.subtreeFlags,
                a |= s.flags,
                s.return = A,
                s = s.sibling;
        return A.subtreeFlags |= a,
        A.childLanes = t,
        e
    }
    function Fw(A, e, t) {
        var a = e.pendingProps;
        switch (Xs(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return NA(e),
            null;
        case 1:
            return NA(e),
            null;
        case 3:
            return t = e.stateNode,
            a = null,
            A !== null && (a = A.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            dt(ZA),
            jA(),
            t.pendingContext && (t.context = t.pendingContext,
            t.pendingContext = null),
            (A === null || A.child === null) && (Wa(e) ? Ct(e) : A === null || A.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Js())),
            NA(e),
            null;
        case 26:
            var s = e.type
              , u = e.memoizedState;
            return A === null ? (Ct(e),
            u !== null ? (NA(e),
            lg(e, u)) : (NA(e),
            Nu(e, s, null, a, t))) : u ? u !== A.memoizedState ? (Ct(e),
            NA(e),
            lg(e, u)) : (NA(e),
            e.flags &= -16777217) : (A = A.memoizedProps,
            A !== a && Ct(e),
            NA(e),
            Nu(e, s, A, a, t)),
            null;
        case 27:
            if (kl(e),
            t = uA.current,
            s = e.type,
            A !== null && e.stateNode != null)
                A.memoizedProps !== a && Ct(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(l(166));
                    return NA(e),
                    null
                }
                A = Y.current,
                Wa(e) ? Of(e) : (A = fd(s, a, t),
                e.stateNode = A,
                Ct(e))
            }
            return NA(e),
            null;
        case 5:
            if (kl(e),
            s = e.type,
            A !== null && e.stateNode != null)
                A.memoizedProps !== a && Ct(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(l(166));
                    return NA(e),
                    null
                }
                if (u = Y.current,
                Wa(e))
                    Of(e);
                else {
                    var f = Pr(uA.current);
                    switch (u) {
                    case 1:
                        u = f.createElementNS("http://www.w3.org/2000/svg", s);
                        break;
                    case 2:
                        u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                        break;
                    default:
                        switch (s) {
                        case "svg":
                            u = f.createElementNS("http://www.w3.org/2000/svg", s);
                            break;
                        case "math":
                            u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                            break;
                        case "script":
                            u = f.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof a.is == "string" ? f.createElement("select", {
                                is: a.is
                            }) : f.createElement("select"),
                            a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                            break;
                        default:
                            u = typeof a.is == "string" ? f.createElement(s, {
                                is: a.is
                            }) : f.createElement(s)
                        }
                    }
                    u[le] = e,
                    u[we] = a;
                    A: for (f = e.child; f !== null; ) {
                        if (f.tag === 5 || f.tag === 6)
                            u.appendChild(f.stateNode);
                        else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                            f.child.return = f,
                            f = f.child;
                            continue
                        }
                        if (f === e)
                            break A;
                        for (; f.sibling === null; ) {
                            if (f.return === null || f.return === e)
                                break A;
                            f = f.return
                        }
                        f.sibling.return = f.return,
                        f = f.sibling
                    }
                    e.stateNode = u;
                    A: switch (ue(u, s, a),
                    s) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break A;
                    case "img":
                        a = !0;
                        break A;
                    default:
                        a = !1
                    }
                    a && Ct(e)
                }
            }
            return NA(e),
            Nu(e, e.type, A === null ? null : A.memoizedProps, e.pendingProps, t),
            null;
        case 6:
            if (A && e.stateNode != null)
                A.memoizedProps !== a && Ct(e);
            else {
                if (typeof a != "string" && e.stateNode === null)
                    throw Error(l(166));
                if (A = uA.current,
                Wa(e)) {
                    if (A = e.stateNode,
                    t = e.memoizedProps,
                    a = null,
                    s = re,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            a = s.memoizedProps
                        }
                    A[le] = e,
                    A = !!(A.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || ed(A.nodeValue, t)),
                    A || Mt(e, !0)
                } else
                    A = Pr(A).createTextNode(a),
                    A[le] = e,
                    e.stateNode = A
            }
            return NA(e),
            null;
        case 31:
            if (t = e.memoizedState,
            A === null || A.memoizedState !== null) {
                if (a = Wa(e),
                t !== null) {
                    if (A === null) {
                        if (!a)
                            throw Error(l(318));
                        if (A = e.memoizedState,
                        A = A !== null ? A.dehydrated : null,
                        !A)
                            throw Error(l(557));
                        A[le] = e
                    } else
                        Ca(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    NA(e),
                    A = !1
                } else
                    t = Js(),
                    A !== null && A.memoizedState !== null && (A.memoizedState.hydrationErrors = t),
                    A = !0;
                if (!A)
                    return e.flags & 256 ? (De(e),
                    e) : (De(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(l(558))
            }
            return NA(e),
            null;
        case 13:
            if (a = e.memoizedState,
            A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
                if (s = Wa(e),
                a !== null && a.dehydrated !== null) {
                    if (A === null) {
                        if (!s)
                            throw Error(l(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(l(317));
                        s[le] = e
                    } else
                        Ca(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    NA(e),
                    s = !1
                } else
                    s = Js(),
                    A !== null && A.memoizedState !== null && (A.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (De(e),
                    e) : (De(e),
                    null)
            }
            return De(e),
            (e.flags & 128) !== 0 ? (e.lanes = t,
            e) : (t = a !== null,
            A = A !== null && A.memoizedState !== null,
            t && (a = e.child,
            s = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool),
            u = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
            u !== s && (a.flags |= 2048)),
            t !== A && t && (e.child.flags |= 8192),
            Nr(e, e.updateQueue),
            NA(e),
            null);
        case 4:
            return jA(),
            A === null && lc(e.stateNode.containerInfo),
            NA(e),
            null;
        case 10:
            return dt(e.type),
            NA(e),
            null;
        case 19:
            if (T(XA),
            a = e.memoizedState,
            a === null)
                return NA(e),
                null;
            if (s = (e.flags & 128) !== 0,
            u = a.rendering,
            u === null)
                if (s)
                    il(a, !1);
                else {
                    if (zA !== 0 || A !== null && (A.flags & 128) !== 0)
                        for (A = e.child; A !== null; ) {
                            if (u = Fr(A),
                            u !== null) {
                                for (e.flags |= 128,
                                il(a, !1),
                                A = u.updateQueue,
                                e.updateQueue = A,
                                Nr(e, A),
                                e.subtreeFlags = 0,
                                A = t,
                                t = e.child; t !== null; )
                                    Kf(t, A),
                                    t = t.sibling;
                                return j(XA, XA.current & 1 | 2),
                                mA && Bt(e, a.treeForkCount),
                                e.child
                            }
                            A = A.sibling
                        }
                    a.tail !== null && Ee() > Vr && (e.flags |= 128,
                    s = !0,
                    il(a, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (A = Fr(u),
                    A !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        A = A.updateQueue,
                        e.updateQueue = A,
                        Nr(e, A),
                        il(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !u.alternate && !mA)
                            return NA(e),
                            null
                    } else
                        2 * Ee() - a.renderingStartTime > Vr && t !== 536870912 && (e.flags |= 128,
                        s = !0,
                        il(a, !1),
                        e.lanes = 4194304);
                a.isBackwards ? (u.sibling = e.child,
                e.child = u) : (A = a.last,
                A !== null ? A.sibling = u : e.child = u,
                a.last = u)
            }
            return a.tail !== null ? (A = a.tail,
            a.rendering = A,
            a.tail = A.sibling,
            a.renderingStartTime = Ee(),
            A.sibling = null,
            t = XA.current,
            j(XA, s ? t & 1 | 2 : t & 1),
            mA && Bt(e, a.treeForkCount),
            A) : (NA(e),
            null);
        case 22:
        case 23:
            return De(e),
            ru(),
            a = e.memoizedState !== null,
            A !== null ? A.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
            a ? (t & 536870912) !== 0 && (e.flags & 128) === 0 && (NA(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : NA(e),
            t = e.updateQueue,
            t !== null && Nr(e, t.retryQueue),
            t = null,
            A !== null && A.memoizedState !== null && A.memoizedState.cachePool !== null && (t = A.memoizedState.cachePool.pool),
            a = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            a !== t && (e.flags |= 2048),
            A !== null && T(va),
            null;
        case 24:
            return t = null,
            A !== null && (t = A.memoizedState.cache),
            e.memoizedState.cache !== t && (e.flags |= 2048),
            dt(ZA),
            NA(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(l(156, e.tag))
    }
    function yw(A, e) {
        switch (Xs(e),
        e.tag) {
        case 1:
            return A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 3:
            return dt(ZA),
            jA(),
            A = e.flags,
            (A & 65536) !== 0 && (A & 128) === 0 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return kl(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (De(e),
                e.alternate === null)
                    throw Error(l(340));
                Ca()
            }
            return A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 13:
            if (De(e),
            A = e.memoizedState,
            A !== null && A.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(l(340));
                Ca()
            }
            return A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 19:
            return T(XA),
            null;
        case 4:
            return jA(),
            null;
        case 10:
            return dt(e.type),
            null;
        case 22:
        case 23:
            return De(e),
            ru(),
            A !== null && T(va),
            A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 24:
            return dt(ZA),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function rg(A, e) {
        switch (Xs(e),
        e.tag) {
        case 3:
            dt(ZA),
            jA();
            break;
        case 26:
        case 27:
        case 5:
            kl(e);
            break;
        case 4:
            jA();
            break;
        case 31:
            e.memoizedState !== null && De(e);
            break;
        case 13:
            De(e);
            break;
        case 19:
            T(XA);
            break;
        case 10:
            dt(e.type);
            break;
        case 22:
        case 23:
            De(e),
            ru(),
            A !== null && T(va);
            break;
        case 24:
            dt(ZA)
        }
    }
    function sl(A, e) {
        try {
            var t = e.updateQueue
              , a = t !== null ? t.lastEffect : null;
            if (a !== null) {
                var s = a.next;
                t = s;
                do {
                    if ((t.tag & A) === A) {
                        a = void 0;
                        var u = t.create
                          , f = t.inst;
                        a = u(),
                        f.destroy = a
                    }
                    t = t.next
                } while (t !== s)
            }
        } catch (h) {
            xA(e, e.return, h)
        }
    }
    function zt(A, e, t) {
        try {
            var a = e.updateQueue
              , s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var u = s.next;
                a = u;
                do {
                    if ((a.tag & A) === A) {
                        var f = a.inst
                          , h = f.destroy;
                        if (h !== void 0) {
                            f.destroy = void 0,
                            s = e;
                            var m = t
                              , H = h;
                            try {
                                H()
                            } catch (K) {
                                xA(s, m, K)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (K) {
            xA(e, e.return, K)
        }
    }
    function ig(A) {
        var e = A.updateQueue;
        if (e !== null) {
            var t = A.stateNode;
            try {
                Wf(e, t)
            } catch (a) {
                xA(A, A.return, a)
            }
        }
    }
    function sg(A, e, t) {
        t.props = Ha(A.type, A.memoizedProps),
        t.state = A.memoizedState;
        try {
            t.componentWillUnmount()
        } catch (a) {
            xA(A, e, a)
        }
    }
    function ul(A, e) {
        try {
            var t = A.ref;
            if (t !== null) {
                switch (A.tag) {
                case 26:
                case 27:
                case 5:
                    var a = A.stateNode;
                    break;
                case 30:
                    a = A.stateNode;
                    break;
                default:
                    a = A.stateNode
                }
                typeof t == "function" ? A.refCleanup = t(a) : t.current = a
            }
        } catch (s) {
            xA(A, e, s)
        }
    }
    function nt(A, e) {
        var t = A.ref
          , a = A.refCleanup;
        if (t !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (s) {
                    xA(A, e, s)
                } finally {
                    A.refCleanup = null,
                    A = A.alternate,
                    A != null && (A.refCleanup = null)
                }
            else if (typeof t == "function")
                try {
                    t(null)
                } catch (s) {
                    xA(A, e, s)
                }
            else
                t.current = null
    }
    function ug(A) {
        var e = A.type
          , t = A.memoizedProps
          , a = A.stateNode;
        try {
            A: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                t.autoFocus && a.focus();
                break A;
            case "img":
                t.src ? a.src = t.src : t.srcSet && (a.srcset = t.srcSet)
            }
        } catch (s) {
            xA(A, A.return, s)
        }
    }
    function Ou(A, e, t) {
        try {
            var a = A.stateNode;
            Jw(a, A.type, t, e),
            a[we] = e
        } catch (s) {
            xA(A, A.return, s)
        }
    }
    function cg(A) {
        return A.tag === 5 || A.tag === 3 || A.tag === 26 || A.tag === 27 && qt(A.type) || A.tag === 4
    }
    function Ru(A) {
        A: for (; ; ) {
            for (; A.sibling === null; ) {
                if (A.return === null || cg(A.return))
                    return null;
                A = A.return
            }
            for (A.sibling.return = A.return,
            A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
                if (A.tag === 27 && qt(A.type) || A.flags & 2 || A.child === null || A.tag === 4)
                    continue A;
                A.child.return = A,
                A = A.child
            }
            if (!(A.flags & 2))
                return A.stateNode
        }
    }
    function _u(A, e, t) {
        var a = A.tag;
        if (a === 5 || a === 6)
            A = A.stateNode,
            e ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(A, e) : (e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            e.appendChild(A),
            t = t._reactRootContainer,
            t != null || e.onclick !== null || (e.onclick = ct));
        else if (a !== 4 && (a === 27 && qt(A.type) && (t = A.stateNode,
        e = null),
        A = A.child,
        A !== null))
            for (_u(A, e, t),
            A = A.sibling; A !== null; )
                _u(A, e, t),
                A = A.sibling
    }
    function Or(A, e, t) {
        var a = A.tag;
        if (a === 5 || a === 6)
            A = A.stateNode,
            e ? t.insertBefore(A, e) : t.appendChild(A);
        else if (a !== 4 && (a === 27 && qt(A.type) && (t = A.stateNode),
        A = A.child,
        A !== null))
            for (Or(A, e, t),
            A = A.sibling; A !== null; )
                Or(A, e, t),
                A = A.sibling
    }
    function og(A) {
        var e = A.stateNode
          , t = A.memoizedProps;
        try {
            for (var a = A.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            ue(e, a, t),
            e[le] = A,
            e[we] = t
        } catch (u) {
            xA(A, A.return, u)
        }
    }
    var Ut = !1
      , PA = !1
      , Gu = !1
      , fg = typeof WeakSet == "function" ? WeakSet : Set
      , ae = null;
    function Ew(A, e) {
        if (A = A.containerInfo,
        sc = li,
        A = Ff(A),
        Ls(A)) {
            if ("selectionStart"in A)
                var t = {
                    start: A.selectionStart,
                    end: A.selectionEnd
                };
            else
                A: {
                    t = (t = A.ownerDocument) && t.defaultView || window;
                    var a = t.getSelection && t.getSelection();
                    if (a && a.rangeCount !== 0) {
                        t = a.anchorNode;
                        var s = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            t.nodeType,
                            u.nodeType
                        } catch {
                            t = null;
                            break A
                        }
                        var f = 0
                          , h = -1
                          , m = -1
                          , H = 0
                          , K = 0
                          , O = A
                          , b = null;
                        e: for (; ; ) {
                            for (var x; O !== t || s !== 0 && O.nodeType !== 3 || (h = f + s),
                            O !== u || a !== 0 && O.nodeType !== 3 || (m = f + a),
                            O.nodeType === 3 && (f += O.nodeValue.length),
                            (x = O.firstChild) !== null; )
                                b = O,
                                O = x;
                            for (; ; ) {
                                if (O === A)
                                    break e;
                                if (b === t && ++H === s && (h = f),
                                b === u && ++K === a && (m = f),
                                (x = O.nextSibling) !== null)
                                    break;
                                O = b,
                                b = O.parentNode
                            }
                            O = x
                        }
                        t = h === -1 || m === -1 ? null : {
                            start: h,
                            end: m
                        }
                    } else
                        t = null
                }
            t = t || {
                start: 0,
                end: 0
            }
        } else
            t = null;
        for (uc = {
            focusedElem: A,
            selectionRange: t
        },
        li = !1,
        ae = e; ae !== null; )
            if (e = ae,
            A = e.child,
            (e.subtreeFlags & 1028) !== 0 && A !== null)
                A.return = e,
                ae = A;
            else
                for (; ae !== null; ) {
                    switch (e = ae,
                    u = e.alternate,
                    A = e.flags,
                    e.tag) {
                    case 0:
                        if ((A & 4) !== 0 && (A = e.updateQueue,
                        A = A !== null ? A.events : null,
                        A !== null))
                            for (t = 0; t < A.length; t++)
                                s = A[t],
                                s.ref.impl = s.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((A & 1024) !== 0 && u !== null) {
                            A = void 0,
                            t = e,
                            s = u.memoizedProps,
                            u = u.memoizedState,
                            a = t.stateNode;
                            try {
                                var $ = Ha(t.type, s);
                                A = a.getSnapshotBeforeUpdate($, u),
                                a.__reactInternalSnapshotBeforeUpdate = A
                            } catch (iA) {
                                xA(t, t.return, iA)
                            }
                        }
                        break;
                    case 3:
                        if ((A & 1024) !== 0) {
                            if (A = e.stateNode.containerInfo,
                            t = A.nodeType,
                            t === 9)
                                fc(A);
                            else if (t === 1)
                                switch (A.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    fc(A);
                                    break;
                                default:
                                    A.textContent = ""
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
                        if ((A & 1024) !== 0)
                            throw Error(l(163))
                    }
                    if (A = e.sibling,
                    A !== null) {
                        A.return = e.return,
                        ae = A;
                        break
                    }
                    ae = e.return
                }
    }
    function Bg(A, e, t) {
        var a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            vt(A, t),
            a & 4 && sl(5, t);
            break;
        case 1:
            if (vt(A, t),
            a & 4)
                if (A = t.stateNode,
                e === null)
                    try {
                        A.componentDidMount()
                    } catch (f) {
                        xA(t, t.return, f)
                    }
                else {
                    var s = Ha(t.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        A.componentDidUpdate(s, e, A.__reactInternalSnapshotBeforeUpdate)
                    } catch (f) {
                        xA(t, t.return, f)
                    }
                }
            a & 64 && ig(t),
            a & 512 && ul(t, t.return);
            break;
        case 3:
            if (vt(A, t),
            a & 64 && (A = t.updateQueue,
            A !== null)) {
                if (e = null,
                t.child !== null)
                    switch (t.child.tag) {
                    case 27:
                    case 5:
                        e = t.child.stateNode;
                        break;
                    case 1:
                        e = t.child.stateNode
                    }
                try {
                    Wf(A, e)
                } catch (f) {
                    xA(t, t.return, f)
                }
            }
            break;
        case 27:
            e === null && a & 4 && og(t);
        case 26:
        case 5:
            vt(A, t),
            e === null && a & 4 && ug(t),
            a & 512 && ul(t, t.return);
            break;
        case 12:
            vt(A, t);
            break;
        case 31:
            vt(A, t),
            a & 4 && hg(A, t);
            break;
        case 13:
            vt(A, t),
            a & 4 && Qg(A, t),
            a & 64 && (A = t.memoizedState,
            A !== null && (A = A.dehydrated,
            A !== null && (t = Iw.bind(null, t),
            eC(A, t))));
            break;
        case 22:
            if (a = t.memoizedState !== null || Ut,
            !a) {
                e = e !== null && e.memoizedState !== null || PA,
                s = Ut;
                var u = PA;
                Ut = a,
                (PA = e) && !u ? pt(A, t, (t.subtreeFlags & 8772) !== 0) : vt(A, t),
                Ut = s,
                PA = u
            }
            break;
        case 30:
            break;
        default:
            vt(A, t)
        }
    }
    function gg(A) {
        var e = A.alternate;
        e !== null && (A.alternate = null,
        gg(e)),
        A.child = null,
        A.deletions = null,
        A.sibling = null,
        A.tag === 5 && (e = A.stateNode,
        e !== null && Qs(e)),
        A.stateNode = null,
        A.return = null,
        A.dependencies = null,
        A.memoizedProps = null,
        A.memoizedState = null,
        A.pendingProps = null,
        A.stateNode = null,
        A.updateQueue = null
    }
    var RA = null
      , Ue = !1;
    function mt(A, e, t) {
        for (t = t.child; t !== null; )
            dg(A, e, t),
            t = t.sibling
    }
    function dg(A, e, t) {
        if (He && typeof He.onCommitFiberUnmount == "function")
            try {
                He.onCommitFiberUnmount(Kn, t)
            } catch {}
        switch (t.tag) {
        case 26:
            PA || nt(t, e),
            mt(A, e, t),
            t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode,
            t.parentNode.removeChild(t));
            break;
        case 27:
            PA || nt(t, e);
            var a = RA
              , s = Ue;
            qt(t.type) && (RA = t.stateNode,
            Ue = !1),
            mt(A, e, t),
            wl(t.stateNode),
            RA = a,
            Ue = s;
            break;
        case 5:
            PA || nt(t, e);
        case 6:
            if (a = RA,
            s = Ue,
            RA = null,
            mt(A, e, t),
            RA = a,
            Ue = s,
            RA !== null)
                if (Ue)
                    try {
                        (RA.nodeType === 9 ? RA.body : RA.nodeName === "HTML" ? RA.ownerDocument.body : RA).removeChild(t.stateNode)
                    } catch (u) {
                        xA(t, e, u)
                    }
                else
                    try {
                        RA.removeChild(t.stateNode)
                    } catch (u) {
                        xA(t, e, u)
                    }
            break;
        case 18:
            RA !== null && (Ue ? (A = RA,
            id(A.nodeType === 9 ? A.body : A.nodeName === "HTML" ? A.ownerDocument.body : A, t.stateNode),
            Cn(A)) : id(RA, t.stateNode));
            break;
        case 4:
            a = RA,
            s = Ue,
            RA = t.stateNode.containerInfo,
            Ue = !0,
            mt(A, e, t),
            RA = a,
            Ue = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            zt(2, t, e),
            PA || zt(4, t, e),
            mt(A, e, t);
            break;
        case 1:
            PA || (nt(t, e),
            a = t.stateNode,
            typeof a.componentWillUnmount == "function" && sg(t, e, a)),
            mt(A, e, t);
            break;
        case 21:
            mt(A, e, t);
            break;
        case 22:
            PA = (a = PA) || t.memoizedState !== null,
            mt(A, e, t),
            PA = a;
            break;
        default:
            mt(A, e, t)
        }
    }
    function hg(A, e) {
        if (e.memoizedState === null && (A = e.alternate,
        A !== null && (A = A.memoizedState,
        A !== null))) {
            A = A.dehydrated;
            try {
                Cn(A)
            } catch (t) {
                xA(e, e.return, t)
            }
        }
    }
    function Qg(A, e) {
        if (e.memoizedState === null && (A = e.alternate,
        A !== null && (A = A.memoizedState,
        A !== null && (A = A.dehydrated,
        A !== null))))
            try {
                Cn(A)
            } catch (t) {
                xA(e, e.return, t)
            }
    }
    function Hw(A) {
        switch (A.tag) {
        case 31:
        case 13:
        case 19:
            var e = A.stateNode;
            return e === null && (e = A.stateNode = new fg),
            e;
        case 22:
            return A = A.stateNode,
            e = A._retryCache,
            e === null && (e = A._retryCache = new fg),
            e;
        default:
            throw Error(l(435, A.tag))
        }
    }
    function Rr(A, e) {
        var t = Hw(A);
        e.forEach(function(a) {
            if (!t.has(a)) {
                t.add(a);
                var s = Mw.bind(null, A, a);
                a.then(s, s)
            }
        })
    }
    function me(A, e) {
        var t = e.deletions;
        if (t !== null)
            for (var a = 0; a < t.length; a++) {
                var s = t[a]
                  , u = A
                  , f = e
                  , h = f;
                A: for (; h !== null; ) {
                    switch (h.tag) {
                    case 27:
                        if (qt(h.type)) {
                            RA = h.stateNode,
                            Ue = !1;
                            break A
                        }
                        break;
                    case 5:
                        RA = h.stateNode,
                        Ue = !1;
                        break A;
                    case 3:
                    case 4:
                        RA = h.stateNode.containerInfo,
                        Ue = !0;
                        break A
                    }
                    h = h.return
                }
                if (RA === null)
                    throw Error(l(160));
                dg(u, f, s),
                RA = null,
                Ue = !1,
                u = s.alternate,
                u !== null && (u.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                wg(e, A),
                e = e.sibling
    }
    var Pe = null;
    function wg(A, e) {
        var t = A.alternate
          , a = A.flags;
        switch (A.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            me(e, A),
            ve(A),
            a & 4 && (zt(3, A, A.return),
            sl(3, A),
            zt(5, A, A.return));
            break;
        case 1:
            me(e, A),
            ve(A),
            a & 512 && (PA || t === null || nt(t, t.return)),
            a & 64 && Ut && (A = A.updateQueue,
            A !== null && (a = A.callbacks,
            a !== null && (t = A.shared.hiddenCallbacks,
            A.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
            break;
        case 26:
            var s = Pe;
            if (me(e, A),
            ve(A),
            a & 512 && (PA || t === null || nt(t, t.return)),
            a & 4) {
                var u = t !== null ? t.memoizedState : null;
                if (a = A.memoizedState,
                t === null)
                    if (a === null)
                        if (A.stateNode === null) {
                            A: {
                                a = A.type,
                                t = A.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (a) {
                                case "title":
                                    u = s.getElementsByTagName("title")[0],
                                    (!u || u[Mn] || u[le] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(a),
                                    s.head.insertBefore(u, s.querySelector("head > title"))),
                                    ue(u, a, t),
                                    u[le] = A,
                                    te(u),
                                    a = u;
                                    break A;
                                case "link":
                                    var f = wd("link", "href", s).get(a + (t.href || ""));
                                    if (f) {
                                        for (var h = 0; h < f.length; h++)
                                            if (u = f[h],
                                            u.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && u.getAttribute("rel") === (t.rel == null ? null : t.rel) && u.getAttribute("title") === (t.title == null ? null : t.title) && u.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                                                f.splice(h, 1);
                                                break e
                                            }
                                    }
                                    u = s.createElement(a),
                                    ue(u, a, t),
                                    s.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (f = wd("meta", "content", s).get(a + (t.content || ""))) {
                                        for (h = 0; h < f.length; h++)
                                            if (u = f[h],
                                            u.getAttribute("content") === (t.content == null ? null : "" + t.content) && u.getAttribute("name") === (t.name == null ? null : t.name) && u.getAttribute("property") === (t.property == null ? null : t.property) && u.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && u.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                                                f.splice(h, 1);
                                                break e
                                            }
                                    }
                                    u = s.createElement(a),
                                    ue(u, a, t),
                                    s.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(l(468, a))
                                }
                                u[le] = A,
                                te(u),
                                a = u
                            }
                            A.stateNode = a
                        } else
                            Cd(s, A.type, A.stateNode);
                    else
                        A.stateNode = Qd(s, a, A.memoizedProps);
                else
                    u !== a ? (u === null ? t.stateNode !== null && (t = t.stateNode,
                    t.parentNode.removeChild(t)) : u.count--,
                    a === null ? Cd(s, A.type, A.stateNode) : Qd(s, a, A.memoizedProps)) : a === null && A.stateNode !== null && Ou(A, A.memoizedProps, t.memoizedProps)
            }
            break;
        case 27:
            me(e, A),
            ve(A),
            a & 512 && (PA || t === null || nt(t, t.return)),
            t !== null && a & 4 && Ou(A, A.memoizedProps, t.memoizedProps);
            break;
        case 5:
            if (me(e, A),
            ve(A),
            a & 512 && (PA || t === null || nt(t, t.return)),
            A.flags & 32) {
                s = A.stateNode;
                try {
                    Ga(s, "")
                } catch ($) {
                    xA(A, A.return, $)
                }
            }
            a & 4 && A.stateNode != null && (s = A.memoizedProps,
            Ou(A, s, t !== null ? t.memoizedProps : s)),
            a & 1024 && (Gu = !0);
            break;
        case 6:
            if (me(e, A),
            ve(A),
            a & 4) {
                if (A.stateNode === null)
                    throw Error(l(162));
                a = A.memoizedProps,
                t = A.stateNode;
                try {
                    t.nodeValue = a
                } catch ($) {
                    xA(A, A.return, $)
                }
            }
            break;
        case 3:
            if (ei = null,
            s = Pe,
            Pe = $r(e.containerInfo),
            me(e, A),
            Pe = s,
            ve(A),
            a & 4 && t !== null && t.memoizedState.isDehydrated)
                try {
                    Cn(e.containerInfo)
                } catch ($) {
                    xA(A, A.return, $)
                }
            Gu && (Gu = !1,
            Cg(A));
            break;
        case 4:
            a = Pe,
            Pe = $r(A.stateNode.containerInfo),
            me(e, A),
            ve(A),
            Pe = a;
            break;
        case 12:
            me(e, A),
            ve(A);
            break;
        case 31:
            me(e, A),
            ve(A),
            a & 4 && (a = A.updateQueue,
            a !== null && (A.updateQueue = null,
            Rr(A, a)));
            break;
        case 13:
            me(e, A),
            ve(A),
            A.child.flags & 8192 && A.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Gr = Ee()),
            a & 4 && (a = A.updateQueue,
            a !== null && (A.updateQueue = null,
            Rr(A, a)));
            break;
        case 22:
            s = A.memoizedState !== null;
            var m = t !== null && t.memoizedState !== null
              , H = Ut
              , K = PA;
            if (Ut = H || s,
            PA = K || m,
            me(e, A),
            PA = K,
            Ut = H,
            ve(A),
            a & 8192)
                A: for (e = A.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (t === null || m || Ut || PA || ba(A)),
                t = null,
                e = A; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (t === null) {
                            m = t = e;
                            try {
                                if (u = m.stateNode,
                                s)
                                    f = u.style,
                                    typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    h = m.stateNode;
                                    var O = m.memoizedProps.style
                                      , b = O != null && O.hasOwnProperty("display") ? O.display : null;
                                    h.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim()
                                }
                            } catch ($) {
                                xA(m, m.return, $)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (t === null) {
                            m = e;
                            try {
                                m.stateNode.nodeValue = s ? "" : m.memoizedProps
                            } catch ($) {
                                xA(m, m.return, $)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (t === null) {
                            m = e;
                            try {
                                var x = m.stateNode;
                                s ? sd(x, !0) : sd(m.stateNode, !1)
                            } catch ($) {
                                xA(m, m.return, $)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === A) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === A)
                        break A;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === A)
                            break A;
                        t === e && (t = null),
                        e = e.return
                    }
                    t === e && (t = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a & 4 && (a = A.updateQueue,
            a !== null && (t = a.retryQueue,
            t !== null && (a.retryQueue = null,
            Rr(A, t))));
            break;
        case 19:
            me(e, A),
            ve(A),
            a & 4 && (a = A.updateQueue,
            a !== null && (A.updateQueue = null,
            Rr(A, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            me(e, A),
            ve(A)
        }
    }
    function ve(A) {
        var e = A.flags;
        if (e & 2) {
            try {
                for (var t, a = A.return; a !== null; ) {
                    if (cg(a)) {
                        t = a;
                        break
                    }
                    a = a.return
                }
                if (t == null)
                    throw Error(l(160));
                switch (t.tag) {
                case 27:
                    var s = t.stateNode
                      , u = Ru(A);
                    Or(A, u, s);
                    break;
                case 5:
                    var f = t.stateNode;
                    t.flags & 32 && (Ga(f, ""),
                    t.flags &= -33);
                    var h = Ru(A);
                    Or(A, h, f);
                    break;
                case 3:
                case 4:
                    var m = t.stateNode.containerInfo
                      , H = Ru(A);
                    _u(A, H, m);
                    break;
                default:
                    throw Error(l(161))
                }
            } catch (K) {
                xA(A, A.return, K)
            }
            A.flags &= -3
        }
        e & 4096 && (A.flags &= -4097)
    }
    function Cg(A) {
        if (A.subtreeFlags & 1024)
            for (A = A.child; A !== null; ) {
                var e = A;
                Cg(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                A = A.sibling
            }
    }
    function vt(A, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Bg(A, e.alternate, e),
                e = e.sibling
    }
    function ba(A) {
        for (A = A.child; A !== null; ) {
            var e = A;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                zt(4, e, e.return),
                ba(e);
                break;
            case 1:
                nt(e, e.return);
                var t = e.stateNode;
                typeof t.componentWillUnmount == "function" && sg(e, e.return, t),
                ba(e);
                break;
            case 27:
                wl(e.stateNode);
            case 26:
            case 5:
                nt(e, e.return),
                ba(e);
                break;
            case 22:
                e.memoizedState === null && ba(e);
                break;
            case 30:
                ba(e);
                break;
            default:
                ba(e)
            }
            A = A.sibling
        }
    }
    function pt(A, e, t) {
        for (t = t && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var a = e.alternate
              , s = A
              , u = e
              , f = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                pt(s, u, t),
                sl(4, u);
                break;
            case 1:
                if (pt(s, u, t),
                a = u,
                s = a.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (H) {
                        xA(a, a.return, H)
                    }
                if (a = u,
                s = a.updateQueue,
                s !== null) {
                    var h = a.stateNode;
                    try {
                        var m = s.shared.hiddenCallbacks;
                        if (m !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < m.length; s++)
                                qf(m[s], h)
                    } catch (H) {
                        xA(a, a.return, H)
                    }
                }
                t && f & 64 && ig(u),
                ul(u, u.return);
                break;
            case 27:
                og(u);
            case 26:
            case 5:
                pt(s, u, t),
                t && a === null && f & 4 && ug(u),
                ul(u, u.return);
                break;
            case 12:
                pt(s, u, t);
                break;
            case 31:
                pt(s, u, t),
                t && f & 4 && hg(s, u);
                break;
            case 13:
                pt(s, u, t),
                t && f & 4 && Qg(s, u);
                break;
            case 22:
                u.memoizedState === null && pt(s, u, t),
                ul(u, u.return);
                break;
            case 30:
                break;
            default:
                pt(s, u, t)
            }
            e = e.sibling
        }
    }
    function Vu(A, e) {
        var t = null;
        A !== null && A.memoizedState !== null && A.memoizedState.cachePool !== null && (t = A.memoizedState.cachePool.pool),
        A = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (A = e.memoizedState.cachePool.pool),
        A !== t && (A != null && A.refCount++,
        t != null && Zn(t))
    }
    function zu(A, e) {
        A = null,
        e.alternate !== null && (A = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== A && (e.refCount++,
        A != null && Zn(A))
    }
    function $e(A, e, t, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Ug(A, e, t, a),
                e = e.sibling
    }
    function Ug(A, e, t, a) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            $e(A, e, t, a),
            s & 2048 && sl(9, e);
            break;
        case 1:
            $e(A, e, t, a);
            break;
        case 3:
            $e(A, e, t, a),
            s & 2048 && (A = null,
            e.alternate !== null && (A = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== A && (e.refCount++,
            A != null && Zn(A)));
            break;
        case 12:
            if (s & 2048) {
                $e(A, e, t, a),
                A = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , f = u.id
                      , h = u.onPostCommit;
                    typeof h == "function" && h(f, e.alternate === null ? "mount" : "update", A.passiveEffectDuration, -0)
                } catch (m) {
                    xA(e, e.return, m)
                }
            } else
                $e(A, e, t, a);
            break;
        case 31:
            $e(A, e, t, a);
            break;
        case 13:
            $e(A, e, t, a);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            f = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? $e(A, e, t, a) : cl(A, e) : u._visibility & 2 ? $e(A, e, t, a) : (u._visibility |= 2,
            sn(A, e, t, a, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && Vu(f, e);
            break;
        case 24:
            $e(A, e, t, a),
            s & 2048 && zu(e.alternate, e);
            break;
        default:
            $e(A, e, t, a)
        }
    }
    function sn(A, e, t, a, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var u = A
              , f = e
              , h = t
              , m = a
              , H = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                sn(u, f, h, m, s),
                sl(8, f);
                break;
            case 23:
                break;
            case 22:
                var K = f.stateNode;
                f.memoizedState !== null ? K._visibility & 2 ? sn(u, f, h, m, s) : cl(u, f) : (K._visibility |= 2,
                sn(u, f, h, m, s)),
                s && H & 2048 && Vu(f.alternate, f);
                break;
            case 24:
                sn(u, f, h, m, s),
                s && H & 2048 && zu(f.alternate, f);
                break;
            default:
                sn(u, f, h, m, s)
            }
            e = e.sibling
        }
    }
    function cl(A, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var t = A
                  , a = e
                  , s = a.flags;
                switch (a.tag) {
                case 22:
                    cl(t, a),
                    s & 2048 && Vu(a.alternate, a);
                    break;
                case 24:
                    cl(t, a),
                    s & 2048 && zu(a.alternate, a);
                    break;
                default:
                    cl(t, a)
                }
                e = e.sibling
            }
    }
    var ol = 8192;
    function un(A, e, t) {
        if (A.subtreeFlags & ol)
            for (A = A.child; A !== null; )
                mg(A, e, t),
                A = A.sibling
    }
    function mg(A, e, t) {
        switch (A.tag) {
        case 26:
            un(A, e, t),
            A.flags & ol && A.memoizedState !== null && BC(t, Pe, A.memoizedState, A.memoizedProps);
            break;
        case 5:
            un(A, e, t);
            break;
        case 3:
        case 4:
            var a = Pe;
            Pe = $r(A.stateNode.containerInfo),
            un(A, e, t),
            Pe = a;
            break;
        case 22:
            A.memoizedState === null && (a = A.alternate,
            a !== null && a.memoizedState !== null ? (a = ol,
            ol = 16777216,
            un(A, e, t),
            ol = a) : un(A, e, t));
            break;
        default:
            un(A, e, t)
        }
    }
    function vg(A) {
        var e = A.alternate;
        if (e !== null && (A = e.child,
        A !== null)) {
            e.child = null;
            do
                e = A.sibling,
                A.sibling = null,
                A = e;
            while (A !== null)
        }
    }
    function fl(A) {
        var e = A.deletions;
        if ((A.flags & 16) !== 0) {
            if (e !== null)
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    ae = a,
                    Fg(a, A)
                }
            vg(A)
        }
        if (A.subtreeFlags & 10256)
            for (A = A.child; A !== null; )
                pg(A),
                A = A.sibling
    }
    function pg(A) {
        switch (A.tag) {
        case 0:
        case 11:
        case 15:
            fl(A),
            A.flags & 2048 && zt(9, A, A.return);
            break;
        case 3:
            fl(A);
            break;
        case 12:
            fl(A);
            break;
        case 22:
            var e = A.stateNode;
            A.memoizedState !== null && e._visibility & 2 && (A.return === null || A.return.tag !== 13) ? (e._visibility &= -3,
            _r(A)) : fl(A);
            break;
        default:
            fl(A)
        }
    }
    function _r(A) {
        var e = A.deletions;
        if ((A.flags & 16) !== 0) {
            if (e !== null)
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    ae = a,
                    Fg(a, A)
                }
            vg(A)
        }
        for (A = A.child; A !== null; ) {
            switch (e = A,
            e.tag) {
            case 0:
            case 11:
            case 15:
                zt(8, e, e.return),
                _r(e);
                break;
            case 22:
                t = e.stateNode,
                t._visibility & 2 && (t._visibility &= -3,
                _r(e));
                break;
            default:
                _r(e)
            }
            A = A.sibling
        }
    }
    function Fg(A, e) {
        for (; ae !== null; ) {
            var t = ae;
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                zt(8, t, e);
                break;
            case 23:
            case 22:
                if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
                    var a = t.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Zn(t.memoizedState.cache)
            }
            if (a = t.child,
            a !== null)
                a.return = t,
                ae = a;
            else
                A: for (t = A; ae !== null; ) {
                    a = ae;
                    var s = a.sibling
                      , u = a.return;
                    if (gg(a),
                    a === t) {
                        ae = null;
                        break A
                    }
                    if (s !== null) {
                        s.return = u,
                        ae = s;
                        break A
                    }
                    ae = u
                }
        }
    }
    var bw = {
        getCacheForType: function(A) {
            var e = ie(ZA)
              , t = e.data.get(A);
            return t === void 0 && (t = A(),
            e.data.set(A, t)),
            t
        },
        cacheSignal: function() {
            return ie(ZA).controller.signal
        }
    }
      , xw = typeof WeakMap == "function" ? WeakMap : Map
      , FA = 0
      , LA = null
      , dA = null
      , wA = 0
      , bA = 0
      , Ke = null
      , jt = !1
      , cn = !1
      , ju = !1
      , Ft = 0
      , zA = 0
      , Xt = 0
      , xa = 0
      , Xu = 0
      , Le = 0
      , on = 0
      , Bl = null
      , pe = null
      , Yu = !1
      , Gr = 0
      , yg = 0
      , Vr = 1 / 0
      , zr = null
      , Yt = null
      , Ae = 0
      , Jt = null
      , fn = null
      , yt = 0
      , Ju = 0
      , ku = null
      , Eg = null
      , gl = 0
      , Zu = null;
    function Ie() {
        return (FA & 2) !== 0 && wA !== 0 ? wA & -wA : S.T !== null ? ec() : Go()
    }
    function Hg() {
        if (Le === 0)
            if ((wA & 536870912) === 0 || mA) {
                var A = Wl;
                Wl <<= 1,
                (Wl & 3932160) === 0 && (Wl = 262144),
                Le = A
            } else
                Le = 536870912;
        return A = Te.current,
        A !== null && (A.flags |= 32),
        Le
    }
    function Fe(A, e, t) {
        (A === LA && (bA === 2 || bA === 9) || A.cancelPendingCommit !== null) && (Bn(A, 0),
        kt(A, wA, Le, !1)),
        In(A, t),
        ((FA & 2) === 0 || A !== LA) && (A === LA && ((FA & 2) === 0 && (xa |= t),
        zA === 4 && kt(A, wA, Le, !1)),
        lt(A))
    }
    function bg(A, e, t) {
        if ((FA & 6) !== 0)
            throw Error(l(327));
        var a = !t && (e & 127) === 0 && (e & A.expiredLanes) === 0 || Ln(A, e)
          , s = a ? Dw(A, e) : Wu(A, e, !0)
          , u = a;
        do {
            if (s === 0) {
                cn && !a && kt(A, e, 0, !1);
                break
            } else {
                if (t = A.current.alternate,
                u && !Sw(t)) {
                    s = Wu(A, e, !1),
                    u = !1;
                    continue
                }
                if (s === 2) {
                    if (u = e,
                    A.errorRecoveryDisabledLanes & u)
                        var f = 0;
                    else
                        f = A.pendingLanes & -536870913,
                        f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        e = f;
                        A: {
                            var h = A;
                            s = Bl;
                            var m = h.current.memoizedState.isDehydrated;
                            if (m && (Bn(h, f).flags |= 256),
                            f = Wu(h, f, !1),
                            f !== 2) {
                                if (ju && !m) {
                                    h.errorRecoveryDisabledLanes |= u,
                                    xa |= u,
                                    s = 4;
                                    break A
                                }
                                u = pe,
                                pe = s,
                                u !== null && (pe === null ? pe = u : pe.push.apply(pe, u))
                            }
                            s = f
                        }
                        if (u = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Bn(A, 0),
                    kt(A, e, 0, !0);
                    break
                }
                A: {
                    switch (a = A,
                    u = s,
                    u) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        kt(a, e, Le, !jt);
                        break A;
                    case 2:
                        pe = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329))
                    }
                    if ((e & 62914560) === e && (s = Gr + 300 - Ee(),
                    10 < s)) {
                        if (kt(a, e, Le, !jt),
                        $l(a, 0, !0) !== 0)
                            break A;
                        yt = e,
                        a.timeoutHandle = ld(xg.bind(null, a, t, pe, zr, Yu, e, Le, xa, on, jt, u, "Throttled", -0, 0), s);
                        break A
                    }
                    xg(a, t, pe, zr, Yu, e, Le, xa, on, jt, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        lt(A)
    }
    function xg(A, e, t, a, s, u, f, h, m, H, K, O, b, x) {
        if (A.timeoutHandle = -1,
        O = e.subtreeFlags,
        O & 8192 || (O & 16785408) === 16785408) {
            O = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: ct
            },
            mg(e, u, O);
            var $ = (u & 62914560) === u ? Gr - Ee() : (u & 4194048) === u ? yg - Ee() : 0;
            if ($ = gC(O, $),
            $ !== null) {
                yt = u,
                A.cancelPendingCommit = $(Ng.bind(null, A, e, u, t, a, s, f, h, m, K, O, null, b, x)),
                kt(A, u, f, !H);
                return
            }
        }
        Ng(A, e, u, t, a, s, f, h, m)
    }
    function Sw(A) {
        for (var e = A; ; ) {
            var t = e.tag;
            if ((t === 0 || t === 11 || t === 15) && e.flags & 16384 && (t = e.updateQueue,
            t !== null && (t = t.stores,
            t !== null)))
                for (var a = 0; a < t.length; a++) {
                    var s = t[a]
                      , u = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!xe(u(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (t = e.child,
            e.subtreeFlags & 16384 && t !== null)
                t.return = e,
                e = t;
            else {
                if (e === A)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === A)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function kt(A, e, t, a) {
        e &= ~Xu,
        e &= ~xa,
        A.suspendedLanes |= e,
        A.pingedLanes &= ~e,
        a && (A.warmLanes |= e),
        a = A.expirationTimes;
        for (var s = e; 0 < s; ) {
            var u = 31 - be(s)
              , f = 1 << u;
            a[u] = -1,
            s &= ~f
        }
        t !== 0 && Oo(A, t, e)
    }
    function jr() {
        return (FA & 6) === 0 ? (dl(0),
        !1) : !0
    }
    function qu() {
        if (dA !== null) {
            if (bA === 0)
                var A = dA.return;
            else
                A = dA,
                gt = Ua = null,
                fu(A),
                tn = null,
                Wn = 0,
                A = dA;
            for (; A !== null; )
                rg(A.alternate, A),
                A = A.return;
            dA = null
        }
    }
    function Bn(A, e) {
        var t = A.timeoutHandle;
        t !== -1 && (A.timeoutHandle = -1,
        qw(t)),
        t = A.cancelPendingCommit,
        t !== null && (A.cancelPendingCommit = null,
        t()),
        yt = 0,
        qu(),
        LA = A,
        dA = t = ft(A.current, null),
        wA = e,
        bA = 0,
        Ke = null,
        jt = !1,
        cn = Ln(A, e),
        ju = !1,
        on = Le = Xu = xa = Xt = zA = 0,
        pe = Bl = null,
        Yu = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var a = A.entangledLanes;
        if (a !== 0)
            for (A = A.entanglements,
            a &= e; 0 < a; ) {
                var s = 31 - be(a)
                  , u = 1 << s;
                e |= A[s],
                a &= ~u
            }
        return Ft = e,
        or(),
        t
    }
    function Sg(A, e) {
        fA = null,
        S.H = ll,
        e === en || e === Cr ? (e = Yf(),
        bA = 3) : e === Au ? (e = Yf(),
        bA = 4) : bA = e === bu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Ke = e,
        dA === null && (zA = 1,
        Kr(A, _e(e, A.current)))
    }
    function Tg() {
        var A = Te.current;
        return A === null ? !0 : (wA & 4194048) === wA ? je === null : (wA & 62914560) === wA || (wA & 536870912) !== 0 ? A === je : !1
    }
    function Dg() {
        var A = S.H;
        return S.H = ll,
        A === null ? ll : A
    }
    function Kg() {
        var A = S.A;
        return S.A = bw,
        A
    }
    function Xr() {
        zA = 4,
        jt || (wA & 4194048) !== wA && Te.current !== null || (cn = !0),
        (Xt & 134217727) === 0 && (xa & 134217727) === 0 || LA === null || kt(LA, wA, Le, !1)
    }
    function Wu(A, e, t) {
        var a = FA;
        FA |= 2;
        var s = Dg()
          , u = Kg();
        (LA !== A || wA !== e) && (zr = null,
        Bn(A, e)),
        e = !1;
        var f = zA;
        A: do
            try {
                if (bA !== 0 && dA !== null) {
                    var h = dA
                      , m = Ke;
                    switch (bA) {
                    case 8:
                        qu(),
                        f = 6;
                        break A;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Te.current === null && (e = !0);
                        var H = bA;
                        if (bA = 0,
                        Ke = null,
                        gn(A, h, m, H),
                        t && cn) {
                            f = 0;
                            break A
                        }
                        break;
                    default:
                        H = bA,
                        bA = 0,
                        Ke = null,
                        gn(A, h, m, H)
                    }
                }
                Tw(),
                f = zA;
                break
            } catch (K) {
                Sg(A, K)
            }
        while (!0);
        return e && A.shellSuspendCounter++,
        gt = Ua = null,
        FA = a,
        S.H = s,
        S.A = u,
        dA === null && (LA = null,
        wA = 0,
        or()),
        f
    }
    function Tw() {
        for (; dA !== null; )
            Lg(dA)
    }
    function Dw(A, e) {
        var t = FA;
        FA |= 2;
        var a = Dg()
          , s = Kg();
        LA !== A || wA !== e ? (zr = null,
        Vr = Ee() + 500,
        Bn(A, e)) : cn = Ln(A, e);
        A: do
            try {
                if (bA !== 0 && dA !== null) {
                    e = dA;
                    var u = Ke;
                    e: switch (bA) {
                    case 1:
                        bA = 0,
                        Ke = null,
                        gn(A, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (jf(u)) {
                            bA = 0,
                            Ke = null,
                            Ig(e);
                            break
                        }
                        e = function() {
                            bA !== 2 && bA !== 9 || LA !== A || (bA = 7),
                            lt(A)
                        }
                        ,
                        u.then(e, e);
                        break A;
                    case 3:
                        bA = 7;
                        break A;
                    case 4:
                        bA = 5;
                        break A;
                    case 7:
                        jf(u) ? (bA = 0,
                        Ke = null,
                        Ig(e)) : (bA = 0,
                        Ke = null,
                        gn(A, e, u, 7));
                        break;
                    case 5:
                        var f = null;
                        switch (dA.tag) {
                        case 26:
                            f = dA.memoizedState;
                        case 5:
                        case 27:
                            var h = dA;
                            if (f ? Ud(f) : h.stateNode.complete) {
                                bA = 0,
                                Ke = null;
                                var m = h.sibling;
                                if (m !== null)
                                    dA = m;
                                else {
                                    var H = h.return;
                                    H !== null ? (dA = H,
                                    Yr(H)) : dA = null
                                }
                                break e
                            }
                        }
                        bA = 0,
                        Ke = null,
                        gn(A, e, u, 5);
                        break;
                    case 6:
                        bA = 0,
                        Ke = null,
                        gn(A, e, u, 6);
                        break;
                    case 8:
                        qu(),
                        zA = 6;
                        break A;
                    default:
                        throw Error(l(462))
                    }
                }
                Kw();
                break
            } catch (K) {
                Sg(A, K)
            }
        while (!0);
        return gt = Ua = null,
        S.H = a,
        S.A = s,
        FA = t,
        dA !== null ? 0 : (LA = null,
        wA = 0,
        or(),
        zA)
    }
    function Kw() {
        for (; dA !== null && !tQ(); )
            Lg(dA)
    }
    function Lg(A) {
        var e = ng(A.alternate, A, Ft);
        A.memoizedProps = A.pendingProps,
        e === null ? Yr(A) : dA = e
    }
    function Ig(A) {
        var e = A
          , t = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = PB(t, e, e.pendingProps, e.type, void 0, wA);
            break;
        case 11:
            e = PB(t, e, e.pendingProps, e.type.render, e.ref, wA);
            break;
        case 5:
            fu(e);
        default:
            rg(t, e),
            e = dA = Kf(e, Ft),
            e = ng(t, e, Ft)
        }
        A.memoizedProps = A.pendingProps,
        e === null ? Yr(A) : dA = e
    }
    function gn(A, e, t, a) {
        gt = Ua = null,
        fu(e),
        tn = null,
        Wn = 0;
        var s = e.return;
        try {
            if (mw(A, s, e, t, wA)) {
                zA = 1,
                Kr(A, _e(t, A.current)),
                dA = null;
                return
            }
        } catch (u) {
            if (s !== null)
                throw dA = s,
                u;
            zA = 1,
            Kr(A, _e(t, A.current)),
            dA = null;
            return
        }
        e.flags & 32768 ? (mA || a === 1 ? A = !0 : cn || (wA & 536870912) !== 0 ? A = !1 : (jt = A = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = Te.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Mg(e, A)) : Yr(e)
    }
    function Yr(A) {
        var e = A;
        do {
            if ((e.flags & 32768) !== 0) {
                Mg(e, jt);
                return
            }
            A = e.return;
            var t = Fw(e.alternate, e, Ft);
            if (t !== null) {
                dA = t;
                return
            }
            if (e = e.sibling,
            e !== null) {
                dA = e;
                return
            }
            dA = e = A
        } while (e !== null);
        zA === 0 && (zA = 5)
    }
    function Mg(A, e) {
        do {
            var t = yw(A.alternate, A);
            if (t !== null) {
                t.flags &= 32767,
                dA = t;
                return
            }
            if (t = A.return,
            t !== null && (t.flags |= 32768,
            t.subtreeFlags = 0,
            t.deletions = null),
            !e && (A = A.sibling,
            A !== null)) {
                dA = A;
                return
            }
            dA = A = t
        } while (A !== null);
        zA = 6,
        dA = null
    }
    function Ng(A, e, t, a, s, u, f, h, m) {
        A.cancelPendingCommit = null;
        do
            Jr();
        while (Ae !== 0);
        if ((FA & 6) !== 0)
            throw Error(l(327));
        if (e !== null) {
            if (e === A.current)
                throw Error(l(177));
            if (u = e.lanes | e.childLanes,
            u |= Rs,
            fQ(A, t, u, f, h, m),
            A === LA && (dA = LA = null,
            wA = 0),
            fn = e,
            Jt = A,
            yt = t,
            Ju = u,
            ku = s,
            Eg = a,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (A.callbackNode = null,
            A.callbackPriority = 0,
            Nw(Zl, function() {
                return Vg(),
                null
            })) : (A.callbackNode = null,
            A.callbackPriority = 0),
            a = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || a) {
                a = S.T,
                S.T = null,
                s = z.p,
                z.p = 2,
                f = FA,
                FA |= 4;
                try {
                    Ew(A, e, t)
                } finally {
                    FA = f,
                    z.p = s,
                    S.T = a
                }
            }
            Ae = 1,
            Og(),
            Rg(),
            _g()
        }
    }
    function Og() {
        if (Ae === 1) {
            Ae = 0;
            var A = Jt
              , e = fn
              , t = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || t) {
                t = S.T,
                S.T = null;
                var a = z.p;
                z.p = 2;
                var s = FA;
                FA |= 4;
                try {
                    wg(e, A);
                    var u = uc
                      , f = Ff(A.containerInfo)
                      , h = u.focusedElem
                      , m = u.selectionRange;
                    if (f !== h && h && h.ownerDocument && pf(h.ownerDocument.documentElement, h)) {
                        if (m !== null && Ls(h)) {
                            var H = m.start
                              , K = m.end;
                            if (K === void 0 && (K = H),
                            "selectionStart"in h)
                                h.selectionStart = H,
                                h.selectionEnd = Math.min(K, h.value.length);
                            else {
                                var O = h.ownerDocument || document
                                  , b = O && O.defaultView || window;
                                if (b.getSelection) {
                                    var x = b.getSelection()
                                      , $ = h.textContent.length
                                      , iA = Math.min(m.start, $)
                                      , DA = m.end === void 0 ? iA : Math.min(m.end, $);
                                    !x.extend && iA > DA && (f = DA,
                                    DA = iA,
                                    iA = f);
                                    var F = vf(h, iA)
                                      , p = vf(h, DA);
                                    if (F && p && (x.rangeCount !== 1 || x.anchorNode !== F.node || x.anchorOffset !== F.offset || x.focusNode !== p.node || x.focusOffset !== p.offset)) {
                                        var E = O.createRange();
                                        E.setStart(F.node, F.offset),
                                        x.removeAllRanges(),
                                        iA > DA ? (x.addRange(E),
                                        x.extend(p.node, p.offset)) : (E.setEnd(p.node, p.offset),
                                        x.addRange(E))
                                    }
                                }
                            }
                        }
                        for (O = [],
                        x = h; x = x.parentNode; )
                            x.nodeType === 1 && O.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop
                            });
                        for (typeof h.focus == "function" && h.focus(),
                        h = 0; h < O.length; h++) {
                            var M = O[h];
                            M.element.scrollLeft = M.left,
                            M.element.scrollTop = M.top
                        }
                    }
                    li = !!sc,
                    uc = sc = null
                } finally {
                    FA = s,
                    z.p = a,
                    S.T = t
                }
            }
            A.current = e,
            Ae = 2
        }
    }
    function Rg() {
        if (Ae === 2) {
            Ae = 0;
            var A = Jt
              , e = fn
              , t = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || t) {
                t = S.T,
                S.T = null;
                var a = z.p;
                z.p = 2;
                var s = FA;
                FA |= 4;
                try {
                    Bg(A, e.alternate, e)
                } finally {
                    FA = s,
                    z.p = a,
                    S.T = t
                }
            }
            Ae = 3
        }
    }
    function _g() {
        if (Ae === 4 || Ae === 3) {
            Ae = 0,
            aQ();
            var A = Jt
              , e = fn
              , t = yt
              , a = Eg;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ae = 5 : (Ae = 0,
            fn = Jt = null,
            Gg(A, A.pendingLanes));
            var s = A.pendingLanes;
            if (s === 0 && (Yt = null),
            ds(t),
            e = e.stateNode,
            He && typeof He.onCommitFiberRoot == "function")
                try {
                    He.onCommitFiberRoot(Kn, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                e = S.T,
                s = z.p,
                z.p = 2,
                S.T = null;
                try {
                    for (var u = A.onRecoverableError, f = 0; f < a.length; f++) {
                        var h = a[f];
                        u(h.value, {
                            componentStack: h.stack
                        })
                    }
                } finally {
                    S.T = e,
                    z.p = s
                }
            }
            (yt & 3) !== 0 && Jr(),
            lt(A),
            s = A.pendingLanes,
            (t & 261930) !== 0 && (s & 42) !== 0 ? A === Zu ? gl++ : (gl = 0,
            Zu = A) : gl = 0,
            dl(0)
        }
    }
    function Gg(A, e) {
        (A.pooledCacheLanes &= e) === 0 && (e = A.pooledCache,
        e != null && (A.pooledCache = null,
        Zn(e)))
    }
    function Jr() {
        return Og(),
        Rg(),
        _g(),
        Vg()
    }
    function Vg() {
        if (Ae !== 5)
            return !1;
        var A = Jt
          , e = Ju;
        Ju = 0;
        var t = ds(yt)
          , a = S.T
          , s = z.p;
        try {
            z.p = 32 > t ? 32 : t,
            S.T = null,
            t = ku,
            ku = null;
            var u = Jt
              , f = yt;
            if (Ae = 0,
            fn = Jt = null,
            yt = 0,
            (FA & 6) !== 0)
                throw Error(l(331));
            var h = FA;
            if (FA |= 4,
            pg(u.current),
            Ug(u, u.current, f, t),
            FA = h,
            dl(0, !1),
            He && typeof He.onPostCommitFiberRoot == "function")
                try {
                    He.onPostCommitFiberRoot(Kn, u)
                } catch {}
            return !0
        } finally {
            z.p = s,
            S.T = a,
            Gg(A, e)
        }
    }
    function zg(A, e, t) {
        e = _e(t, e),
        e = Hu(A.stateNode, e, 2),
        A = _t(A, e, 2),
        A !== null && (In(A, 2),
        lt(A))
    }
    function xA(A, e, t) {
        if (A.tag === 3)
            zg(A, A, t);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    zg(e, A, t);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Yt === null || !Yt.has(a))) {
                        A = _e(t, A),
                        t = jB(2),
                        a = _t(e, t, 2),
                        a !== null && (XB(t, a, e, A),
                        In(a, 2),
                        lt(a));
                        break
                    }
                }
                e = e.return
            }
    }
    function Pu(A, e, t) {
        var a = A.pingCache;
        if (a === null) {
            a = A.pingCache = new xw;
            var s = new Set;
            a.set(e, s)
        } else
            s = a.get(e),
            s === void 0 && (s = new Set,
            a.set(e, s));
        s.has(t) || (ju = !0,
        s.add(t),
        A = Lw.bind(null, A, e, t),
        e.then(A, A))
    }
    function Lw(A, e, t) {
        var a = A.pingCache;
        a !== null && a.delete(e),
        A.pingedLanes |= A.suspendedLanes & t,
        A.warmLanes &= ~t,
        LA === A && (wA & t) === t && (zA === 4 || zA === 3 && (wA & 62914560) === wA && 300 > Ee() - Gr ? (FA & 2) === 0 && Bn(A, 0) : Xu |= t,
        on === wA && (on = 0)),
        lt(A)
    }
    function jg(A, e) {
        e === 0 && (e = No()),
        A = Qa(A, e),
        A !== null && (In(A, e),
        lt(A))
    }
    function Iw(A) {
        var e = A.memoizedState
          , t = 0;
        e !== null && (t = e.retryLane),
        jg(A, t)
    }
    function Mw(A, e) {
        var t = 0;
        switch (A.tag) {
        case 31:
        case 13:
            var a = A.stateNode
              , s = A.memoizedState;
            s !== null && (t = s.retryLane);
            break;
        case 19:
            a = A.stateNode;
            break;
        case 22:
            a = A.stateNode._retryCache;
            break;
        default:
            throw Error(l(314))
        }
        a !== null && a.delete(e),
        jg(A, t)
    }
    function Nw(A, e) {
        return os(A, e)
    }
    var kr = null
      , dn = null
      , $u = !1
      , Zr = !1
      , Ac = !1
      , Zt = 0;
    function lt(A) {
        A !== dn && A.next === null && (dn === null ? kr = dn = A : dn = dn.next = A),
        Zr = !0,
        $u || ($u = !0,
        Rw())
    }
    function dl(A, e) {
        if (!Ac && Zr) {
            Ac = !0;
            do
                for (var t = !1, a = kr; a !== null; ) {
                    if (A !== 0) {
                        var s = a.pendingLanes;
                        if (s === 0)
                            var u = 0;
                        else {
                            var f = a.suspendedLanes
                              , h = a.pingedLanes;
                            u = (1 << 31 - be(42 | A) + 1) - 1,
                            u &= s & ~(f & ~h),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (t = !0,
                        kg(a, u))
                    } else
                        u = wA,
                        u = $l(a, a === LA ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || Ln(a, u) || (t = !0,
                        kg(a, u));
                    a = a.next
                }
            while (t);
            Ac = !1
        }
    }
    function Ow() {
        Xg()
    }
    function Xg() {
        Zr = $u = !1;
        var A = 0;
        Zt !== 0 && Zw() && (A = Zt);
        for (var e = Ee(), t = null, a = kr; a !== null; ) {
            var s = a.next
              , u = Yg(a, e);
            u === 0 ? (a.next = null,
            t === null ? kr = s : t.next = s,
            s === null && (dn = t)) : (t = a,
            (A !== 0 || (u & 3) !== 0) && (Zr = !0)),
            a = s
        }
        Ae !== 0 && Ae !== 5 || dl(A),
        Zt !== 0 && (Zt = 0)
    }
    function Yg(A, e) {
        for (var t = A.suspendedLanes, a = A.pingedLanes, s = A.expirationTimes, u = A.pendingLanes & -62914561; 0 < u; ) {
            var f = 31 - be(u)
              , h = 1 << f
              , m = s[f];
            m === -1 ? ((h & t) === 0 || (h & a) !== 0) && (s[f] = oQ(h, e)) : m <= e && (A.expiredLanes |= h),
            u &= ~h
        }
        if (e = LA,
        t = wA,
        t = $l(A, A === e ? t : 0, A.cancelPendingCommit !== null || A.timeoutHandle !== -1),
        a = A.callbackNode,
        t === 0 || A === e && (bA === 2 || bA === 9) || A.cancelPendingCommit !== null)
            return a !== null && a !== null && fs(a),
            A.callbackNode = null,
            A.callbackPriority = 0;
        if ((t & 3) === 0 || Ln(A, t)) {
            if (e = t & -t,
            e === A.callbackPriority)
                return e;
            switch (a !== null && fs(a),
            ds(t)) {
            case 2:
            case 8:
                t = Io;
                break;
            case 32:
                t = Zl;
                break;
            case 268435456:
                t = Mo;
                break;
            default:
                t = Zl
            }
            return a = Jg.bind(null, A),
            t = os(t, a),
            A.callbackPriority = e,
            A.callbackNode = t,
            e
        }
        return a !== null && a !== null && fs(a),
        A.callbackPriority = 2,
        A.callbackNode = null,
        2
    }
    function Jg(A, e) {
        if (Ae !== 0 && Ae !== 5)
            return A.callbackNode = null,
            A.callbackPriority = 0,
            null;
        var t = A.callbackNode;
        if (Jr() && A.callbackNode !== t)
            return null;
        var a = wA;
        return a = $l(A, A === LA ? a : 0, A.cancelPendingCommit !== null || A.timeoutHandle !== -1),
        a === 0 ? null : (bg(A, a, e),
        Yg(A, Ee()),
        A.callbackNode != null && A.callbackNode === t ? Jg.bind(null, A) : null)
    }
    function kg(A, e) {
        if (Jr())
            return null;
        bg(A, e, !0)
    }
    function Rw() {
        Ww(function() {
            (FA & 6) !== 0 ? os(Lo, Ow) : Xg()
        })
    }
    function ec() {
        if (Zt === 0) {
            var A = $a;
            A === 0 && (A = ql,
            ql <<= 1,
            (ql & 261888) === 0 && (ql = 256)),
            Zt = A
        }
        return Zt
    }
    function Zg(A) {
        return A == null || typeof A == "symbol" || typeof A == "boolean" ? null : typeof A == "function" ? A : ar("" + A)
    }
    function qg(A, e) {
        var t = e.ownerDocument.createElement("input");
        return t.name = e.name,
        t.value = e.value,
        A.id && t.setAttribute("form", A.id),
        e.parentNode.insertBefore(t, e),
        A = new FormData(A),
        t.parentNode.removeChild(t),
        A
    }
    function _w(A, e, t, a, s) {
        if (e === "submit" && t && t.stateNode === s) {
            var u = Zg((s[we] || null).action)
              , f = a.submitter;
            f && (e = (e = f[we] || null) ? Zg(e.formAction) : f.getAttribute("formAction"),
            e !== null && (u = e,
            f = null));
            var h = new ir("action","action",null,a,s);
            A.push({
                event: h,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Zt !== 0) {
                                var m = f ? qg(s, f) : new FormData(s);
                                mu(t, {
                                    pending: !0,
                                    data: m,
                                    method: s.method,
                                    action: u
                                }, null, m)
                            }
                        } else
                            typeof u == "function" && (h.preventDefault(),
                            m = f ? qg(s, f) : new FormData(s),
                            mu(t, {
                                pending: !0,
                                data: m,
                                method: s.method,
                                action: u
                            }, u, m))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var tc = 0; tc < Os.length; tc++) {
        var ac = Os[tc]
          , Gw = ac.toLowerCase()
          , Vw = ac[0].toUpperCase() + ac.slice(1);
        We(Gw, "on" + Vw)
    }
    We(Hf, "onAnimationEnd"),
    We(bf, "onAnimationIteration"),
    We(xf, "onAnimationStart"),
    We("dblclick", "onDoubleClick"),
    We("focusin", "onFocus"),
    We("focusout", "onBlur"),
    We(nw, "onTransitionRun"),
    We(lw, "onTransitionStart"),
    We(rw, "onTransitionCancel"),
    We(Sf, "onTransitionEnd"),
    Ra("onMouseEnter", ["mouseout", "mouseover"]),
    Ra("onMouseLeave", ["mouseout", "mouseover"]),
    Ra("onPointerEnter", ["pointerout", "pointerover"]),
    Ra("onPointerLeave", ["pointerout", "pointerover"]),
    Ba("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ba("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ba("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ba("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ba("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ba("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var hl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , zw = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));
    function Wg(A, e) {
        e = (e & 4) !== 0;
        for (var t = 0; t < A.length; t++) {
            var a = A[t]
              , s = a.event;
            a = a.listeners;
            A: {
                var u = void 0;
                if (e)
                    for (var f = a.length - 1; 0 <= f; f--) {
                        var h = a[f]
                          , m = h.instance
                          , H = h.currentTarget;
                        if (h = h.listener,
                        m !== u && s.isPropagationStopped())
                            break A;
                        u = h,
                        s.currentTarget = H;
                        try {
                            u(s)
                        } catch (K) {
                            cr(K)
                        }
                        s.currentTarget = null,
                        u = m
                    }
                else
                    for (f = 0; f < a.length; f++) {
                        if (h = a[f],
                        m = h.instance,
                        H = h.currentTarget,
                        h = h.listener,
                        m !== u && s.isPropagationStopped())
                            break A;
                        u = h,
                        s.currentTarget = H;
                        try {
                            u(s)
                        } catch (K) {
                            cr(K)
                        }
                        s.currentTarget = null,
                        u = m
                    }
            }
        }
    }
    function hA(A, e) {
        var t = e[hs];
        t === void 0 && (t = e[hs] = new Set);
        var a = A + "__bubble";
        t.has(a) || (Pg(e, A, 2, !1),
        t.add(a))
    }
    function nc(A, e, t) {
        var a = 0;
        e && (a |= 4),
        Pg(t, A, a, e)
    }
    var qr = "_reactListening" + Math.random().toString(36).slice(2);
    function lc(A) {
        if (!A[qr]) {
            A[qr] = !0,
            jo.forEach(function(t) {
                t !== "selectionchange" && (zw.has(t) || nc(t, !1, A),
                nc(t, !0, A))
            });
            var e = A.nodeType === 9 ? A : A.ownerDocument;
            e === null || e[qr] || (e[qr] = !0,
            nc("selectionchange", !1, e))
        }
    }
    function Pg(A, e, t, a) {
        switch (Hd(e)) {
        case 2:
            var s = QC;
            break;
        case 8:
            s = wC;
            break;
        default:
            s = Uc
        }
        t = s.bind(null, e, t, A),
        s = void 0,
        !ys || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        a ? s !== void 0 ? A.addEventListener(e, t, {
            capture: !0,
            passive: s
        }) : A.addEventListener(e, t, !0) : s !== void 0 ? A.addEventListener(e, t, {
            passive: s
        }) : A.addEventListener(e, t, !1)
    }
    function rc(A, e, t, a, s) {
        var u = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            A: for (; ; ) {
                if (a === null)
                    return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var h = a.stateNode.containerInfo;
                    if (h === s)
                        break;
                    if (f === 4)
                        for (f = a.return; f !== null; ) {
                            var m = f.tag;
                            if ((m === 3 || m === 4) && f.stateNode.containerInfo === s)
                                return;
                            f = f.return
                        }
                    for (; h !== null; ) {
                        if (f = Ma(h),
                        f === null)
                            return;
                        if (m = f.tag,
                        m === 5 || m === 6 || m === 26 || m === 27) {
                            a = u = f;
                            continue A
                        }
                        h = h.parentNode
                    }
                }
                a = a.return
            }
        tf(function() {
            var H = u
              , K = ps(t)
              , O = [];
            A: {
                var b = Tf.get(A);
                if (b !== void 0) {
                    var x = ir
                      , $ = A;
                    switch (A) {
                    case "keypress":
                        if (lr(t) === 0)
                            break A;
                    case "keydown":
                    case "keyup":
                        x = MQ;
                        break;
                    case "focusin":
                        $ = "focus",
                        x = xs;
                        break;
                    case "focusout":
                        $ = "blur",
                        x = xs;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = xs;
                        break;
                    case "click":
                        if (t.button === 2)
                            break A;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = lf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = FQ;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = RQ;
                        break;
                    case Hf:
                    case bf:
                    case xf:
                        x = HQ;
                        break;
                    case Sf:
                        x = GQ;
                        break;
                    case "scroll":
                    case "scrollend":
                        x = vQ;
                        break;
                    case "wheel":
                        x = zQ;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = xQ;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = sf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        x = XQ
                    }
                    var iA = (e & 4) !== 0
                      , DA = !iA && (A === "scroll" || A === "scrollend")
                      , F = iA ? b !== null ? b + "Capture" : null : b;
                    iA = [];
                    for (var p = H, E; p !== null; ) {
                        var M = p;
                        if (E = M.stateNode,
                        M = M.tag,
                        M !== 5 && M !== 26 && M !== 27 || E === null || F === null || (M = On(p, F),
                        M != null && iA.push(Ql(p, M, E))),
                        DA)
                            break;
                        p = p.return
                    }
                    0 < iA.length && (b = new x(b,$,null,t,K),
                    O.push({
                        event: b,
                        listeners: iA
                    }))
                }
            }
            if ((e & 7) === 0) {
                A: {
                    if (b = A === "mouseover" || A === "pointerover",
                    x = A === "mouseout" || A === "pointerout",
                    b && t !== vs && ($ = t.relatedTarget || t.fromElement) && (Ma($) || $[Ia]))
                        break A;
                    if ((x || b) && (b = K.window === K ? K : (b = K.ownerDocument) ? b.defaultView || b.parentWindow : window,
                    x ? ($ = t.relatedTarget || t.toElement,
                    x = H,
                    $ = $ ? Ma($) : null,
                    $ !== null && (DA = o($),
                    iA = $.tag,
                    $ !== DA || iA !== 5 && iA !== 27 && iA !== 6) && ($ = null)) : (x = null,
                    $ = H),
                    x !== $)) {
                        if (iA = lf,
                        M = "onMouseLeave",
                        F = "onMouseEnter",
                        p = "mouse",
                        (A === "pointerout" || A === "pointerover") && (iA = sf,
                        M = "onPointerLeave",
                        F = "onPointerEnter",
                        p = "pointer"),
                        DA = x == null ? b : Nn(x),
                        E = $ == null ? b : Nn($),
                        b = new iA(M,p + "leave",x,t,K),
                        b.target = DA,
                        b.relatedTarget = E,
                        M = null,
                        Ma(K) === H && (iA = new iA(F,p + "enter",$,t,K),
                        iA.target = E,
                        iA.relatedTarget = DA,
                        M = iA),
                        DA = M,
                        x && $)
                            e: {
                                for (iA = jw,
                                F = x,
                                p = $,
                                E = 0,
                                M = F; M; M = iA(M))
                                    E++;
                                M = 0;
                                for (var lA = p; lA; lA = iA(lA))
                                    M++;
                                for (; 0 < E - M; )
                                    F = iA(F),
                                    E--;
                                for (; 0 < M - E; )
                                    p = iA(p),
                                    M--;
                                for (; E--; ) {
                                    if (F === p || p !== null && F === p.alternate) {
                                        iA = F;
                                        break e
                                    }
                                    F = iA(F),
                                    p = iA(p)
                                }
                                iA = null
                            }
                        else
                            iA = null;
                        x !== null && $g(O, b, x, iA, !1),
                        $ !== null && DA !== null && $g(O, DA, $, iA, !0)
                    }
                }
                A: {
                    if (b = H ? Nn(H) : window,
                    x = b.nodeName && b.nodeName.toLowerCase(),
                    x === "select" || x === "input" && b.type === "file")
                        var vA = hf;
                    else if (gf(b))
                        if (Qf)
                            vA = ew;
                        else {
                            vA = $Q;
                            var tA = PQ
                        }
                    else
                        x = b.nodeName,
                        !x || x.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? H && ms(H.elementType) && (vA = hf) : vA = Aw;
                    if (vA && (vA = vA(A, H))) {
                        df(O, vA, t, K);
                        break A
                    }
                    tA && tA(A, b, H),
                    A === "focusout" && H && b.type === "number" && H.memoizedProps.value != null && Us(b, "number", b.value)
                }
                switch (tA = H ? Nn(H) : window,
                A) {
                case "focusin":
                    (gf(tA) || tA.contentEditable === "true") && (Xa = tA,
                    Is = H,
                    Yn = null);
                    break;
                case "focusout":
                    Yn = Is = Xa = null;
                    break;
                case "mousedown":
                    Ms = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ms = !1,
                    yf(O, t, K);
                    break;
                case "selectionchange":
                    if (aw)
                        break;
                case "keydown":
                case "keyup":
                    yf(O, t, K)
                }
                var BA;
                if (Ts)
                    A: {
                        switch (A) {
                        case "compositionstart":
                            var CA = "onCompositionStart";
                            break A;
                        case "compositionend":
                            CA = "onCompositionEnd";
                            break A;
                        case "compositionupdate":
                            CA = "onCompositionUpdate";
                            break A
                        }
                        CA = void 0
                    }
                else
                    ja ? ff(A, t) && (CA = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (CA = "onCompositionStart");
                CA && (uf && t.locale !== "ko" && (ja || CA !== "onCompositionStart" ? CA === "onCompositionEnd" && ja && (BA = af()) : (Kt = K,
                Es = "value"in Kt ? Kt.value : Kt.textContent,
                ja = !0)),
                tA = Wr(H, CA),
                0 < tA.length && (CA = new rf(CA,A,null,t,K),
                O.push({
                    event: CA,
                    listeners: tA
                }),
                BA ? CA.data = BA : (BA = Bf(t),
                BA !== null && (CA.data = BA)))),
                (BA = JQ ? kQ(A, t) : ZQ(A, t)) && (CA = Wr(H, "onBeforeInput"),
                0 < CA.length && (tA = new rf("onBeforeInput","beforeinput",null,t,K),
                O.push({
                    event: tA,
                    listeners: CA
                }),
                tA.data = BA)),
                _w(O, A, H, t, K)
            }
            Wg(O, e)
        })
    }
    function Ql(A, e, t) {
        return {
            instance: A,
            listener: e,
            currentTarget: t
        }
    }
    function Wr(A, e) {
        for (var t = e + "Capture", a = []; A !== null; ) {
            var s = A
              , u = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || u === null || (s = On(A, t),
            s != null && a.unshift(Ql(A, s, u)),
            s = On(A, e),
            s != null && a.push(Ql(A, s, u))),
            A.tag === 3)
                return a;
            A = A.return
        }
        return []
    }
    function jw(A) {
        if (A === null)
            return null;
        do
            A = A.return;
        while (A && A.tag !== 5 && A.tag !== 27);
        return A || null
    }
    function $g(A, e, t, a, s) {
        for (var u = e._reactName, f = []; t !== null && t !== a; ) {
            var h = t
              , m = h.alternate
              , H = h.stateNode;
            if (h = h.tag,
            m !== null && m === a)
                break;
            h !== 5 && h !== 26 && h !== 27 || H === null || (m = H,
            s ? (H = On(t, u),
            H != null && f.unshift(Ql(t, H, m))) : s || (H = On(t, u),
            H != null && f.push(Ql(t, H, m)))),
            t = t.return
        }
        f.length !== 0 && A.push({
            event: e,
            listeners: f
        })
    }
    var Xw = /\r\n?/g
      , Yw = /\u0000|\uFFFD/g;
    function Ad(A) {
        return (typeof A == "string" ? A : "" + A).replace(Xw, `
`).replace(Yw, "")
    }
    function ed(A, e) {
        return e = Ad(e),
        Ad(A) === e
    }
    function TA(A, e, t, a, s, u) {
        switch (t) {
        case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ga(A, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ga(A, "" + a);
            break;
        case "className":
            er(A, "class", a);
            break;
        case "tabIndex":
            er(A, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            er(A, t, a);
            break;
        case "style":
            Af(A, a, u);
            break;
        case "data":
            if (e !== "object") {
                er(A, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (e !== "a" || t !== "href")) {
                A.removeAttribute(t);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                A.removeAttribute(t);
                break
            }
            a = ar("" + a),
            A.setAttribute(t, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                A.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (t === "formAction" ? (e !== "input" && TA(A, e, "name", s.name, s, null),
                TA(A, e, "formEncType", s.formEncType, s, null),
                TA(A, e, "formMethod", s.formMethod, s, null),
                TA(A, e, "formTarget", s.formTarget, s, null)) : (TA(A, e, "encType", s.encType, s, null),
                TA(A, e, "method", s.method, s, null),
                TA(A, e, "target", s.target, s, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                A.removeAttribute(t);
                break
            }
            a = ar("" + a),
            A.setAttribute(t, a);
            break;
        case "onClick":
            a != null && (A.onclick = ct);
            break;
        case "onScroll":
            a != null && hA("scroll", A);
            break;
        case "onScrollEnd":
            a != null && hA("scrollend", A);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(l(61));
                if (t = a.__html,
                t != null) {
                    if (s.children != null)
                        throw Error(l(60));
                    A.innerHTML = t
                }
            }
            break;
        case "multiple":
            A.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            A.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                A.removeAttribute("xlink:href");
                break
            }
            t = ar("" + a),
            A.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? A.setAttribute(t, "" + a) : A.removeAttribute(t);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? A.setAttribute(t, "") : A.removeAttribute(t);
            break;
        case "capture":
        case "download":
            a === !0 ? A.setAttribute(t, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? A.setAttribute(t, a) : A.removeAttribute(t);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? A.setAttribute(t, a) : A.removeAttribute(t);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? A.removeAttribute(t) : A.setAttribute(t, a);
            break;
        case "popover":
            hA("beforetoggle", A),
            hA("toggle", A),
            Ar(A, "popover", a);
            break;
        case "xlinkActuate":
            ut(A, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            ut(A, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            ut(A, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            ut(A, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            ut(A, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            ut(A, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            ut(A, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            ut(A, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            ut(A, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Ar(A, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = UQ.get(t) || t,
            Ar(A, t, a))
        }
    }
    function ic(A, e, t, a, s, u) {
        switch (t) {
        case "style":
            Af(A, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(l(61));
                if (t = a.__html,
                t != null) {
                    if (s.children != null)
                        throw Error(l(60));
                    A.innerHTML = t
                }
            }
            break;
        case "children":
            typeof a == "string" ? Ga(A, a) : (typeof a == "number" || typeof a == "bigint") && Ga(A, "" + a);
            break;
        case "onScroll":
            a != null && hA("scroll", A);
            break;
        case "onScrollEnd":
            a != null && hA("scrollend", A);
            break;
        case "onClick":
            a != null && (A.onclick = ct);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Xo.hasOwnProperty(t))
                A: {
                    if (t[0] === "o" && t[1] === "n" && (s = t.endsWith("Capture"),
                    e = t.slice(2, s ? t.length - 7 : void 0),
                    u = A[we] || null,
                    u = u != null ? u[t] : null,
                    typeof u == "function" && A.removeEventListener(e, u, s),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (t in A ? A[t] = null : A.hasAttribute(t) && A.removeAttribute(t)),
                        A.addEventListener(e, a, s);
                        break A
                    }
                    t in A ? A[t] = a : a === !0 ? A.setAttribute(t, "") : Ar(A, t, a)
                }
        }
    }
    function ue(A, e, t) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            hA("error", A),
            hA("load", A);
            var a = !1, s = !1, u;
            for (u in t)
                if (t.hasOwnProperty(u)) {
                    var f = t[u];
                    if (f != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, e));
                        default:
                            TA(A, e, u, f, t, null)
                        }
                }
            s && TA(A, e, "srcSet", t.srcSet, t, null),
            a && TA(A, e, "src", t.src, t, null);
            return;
        case "input":
            hA("invalid", A);
            var h = u = f = s = null
              , m = null
              , H = null;
            for (a in t)
                if (t.hasOwnProperty(a)) {
                    var K = t[a];
                    if (K != null)
                        switch (a) {
                        case "name":
                            s = K;
                            break;
                        case "type":
                            f = K;
                            break;
                        case "checked":
                            m = K;
                            break;
                        case "defaultChecked":
                            H = K;
                            break;
                        case "value":
                            u = K;
                            break;
                        case "defaultValue":
                            h = K;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (K != null)
                                throw Error(l(137, e));
                            break;
                        default:
                            TA(A, e, a, K, t, null)
                        }
                }
            qo(A, u, h, m, H, f, s, !1);
            return;
        case "select":
            hA("invalid", A),
            a = f = u = null;
            for (s in t)
                if (t.hasOwnProperty(s) && (h = t[s],
                h != null))
                    switch (s) {
                    case "value":
                        u = h;
                        break;
                    case "defaultValue":
                        f = h;
                        break;
                    case "multiple":
                        a = h;
                    default:
                        TA(A, e, s, h, t, null)
                    }
            e = u,
            t = f,
            A.multiple = !!a,
            e != null ? _a(A, !!a, e, !1) : t != null && _a(A, !!a, t, !0);
            return;
        case "textarea":
            hA("invalid", A),
            u = s = a = null;
            for (f in t)
                if (t.hasOwnProperty(f) && (h = t[f],
                h != null))
                    switch (f) {
                    case "value":
                        a = h;
                        break;
                    case "defaultValue":
                        s = h;
                        break;
                    case "children":
                        u = h;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (h != null)
                            throw Error(l(91));
                        break;
                    default:
                        TA(A, e, f, h, t, null)
                    }
            Po(A, a, s, u);
            return;
        case "option":
            for (m in t)
                if (t.hasOwnProperty(m) && (a = t[m],
                a != null))
                    switch (m) {
                    case "selected":
                        A.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        TA(A, e, m, a, t, null)
                    }
            return;
        case "dialog":
            hA("beforetoggle", A),
            hA("toggle", A),
            hA("cancel", A),
            hA("close", A);
            break;
        case "iframe":
        case "object":
            hA("load", A);
            break;
        case "video":
        case "audio":
            for (a = 0; a < hl.length; a++)
                hA(hl[a], A);
            break;
        case "image":
            hA("error", A),
            hA("load", A);
            break;
        case "details":
            hA("toggle", A);
            break;
        case "embed":
        case "source":
        case "link":
            hA("error", A),
            hA("load", A);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (H in t)
                if (t.hasOwnProperty(H) && (a = t[H],
                a != null))
                    switch (H) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(l(137, e));
                    default:
                        TA(A, e, H, a, t, null)
                    }
            return;
        default:
            if (ms(e)) {
                for (K in t)
                    t.hasOwnProperty(K) && (a = t[K],
                    a !== void 0 && ic(A, e, K, a, t, void 0));
                return
            }
        }
        for (h in t)
            t.hasOwnProperty(h) && (a = t[h],
            a != null && TA(A, e, h, a, t, null))
    }
    function Jw(A, e, t, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , u = null
              , f = null
              , h = null
              , m = null
              , H = null
              , K = null;
            for (x in t) {
                var O = t[x];
                if (t.hasOwnProperty(x) && O != null)
                    switch (x) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        m = O;
                    default:
                        a.hasOwnProperty(x) || TA(A, e, x, null, a, O)
                    }
            }
            for (var b in a) {
                var x = a[b];
                if (O = t[b],
                a.hasOwnProperty(b) && (x != null || O != null))
                    switch (b) {
                    case "type":
                        u = x;
                        break;
                    case "name":
                        s = x;
                        break;
                    case "checked":
                        H = x;
                        break;
                    case "defaultChecked":
                        K = x;
                        break;
                    case "value":
                        f = x;
                        break;
                    case "defaultValue":
                        h = x;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(l(137, e));
                        break;
                    default:
                        x !== O && TA(A, e, b, x, a, O)
                    }
            }
            Cs(A, f, h, m, H, K, u, s);
            return;
        case "select":
            x = f = h = b = null;
            for (u in t)
                if (m = t[u],
                t.hasOwnProperty(u) && m != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        x = m;
                    default:
                        a.hasOwnProperty(u) || TA(A, e, u, null, a, m)
                    }
            for (s in a)
                if (u = a[s],
                m = t[s],
                a.hasOwnProperty(s) && (u != null || m != null))
                    switch (s) {
                    case "value":
                        b = u;
                        break;
                    case "defaultValue":
                        h = u;
                        break;
                    case "multiple":
                        f = u;
                    default:
                        u !== m && TA(A, e, s, u, a, m)
                    }
            e = h,
            t = f,
            a = x,
            b != null ? _a(A, !!t, b, !1) : !!a != !!t && (e != null ? _a(A, !!t, e, !0) : _a(A, !!t, t ? [] : "", !1));
            return;
        case "textarea":
            x = b = null;
            for (h in t)
                if (s = t[h],
                t.hasOwnProperty(h) && s != null && !a.hasOwnProperty(h))
                    switch (h) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        TA(A, e, h, null, a, s)
                    }
            for (f in a)
                if (s = a[f],
                u = t[f],
                a.hasOwnProperty(f) && (s != null || u != null))
                    switch (f) {
                    case "value":
                        b = s;
                        break;
                    case "defaultValue":
                        x = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(l(91));
                        break;
                    default:
                        s !== u && TA(A, e, f, s, a, u)
                    }
            Wo(A, b, x);
            return;
        case "option":
            for (var $ in t)
                if (b = t[$],
                t.hasOwnProperty($) && b != null && !a.hasOwnProperty($))
                    switch ($) {
                    case "selected":
                        A.selected = !1;
                        break;
                    default:
                        TA(A, e, $, null, a, b)
                    }
            for (m in a)
                if (b = a[m],
                x = t[m],
                a.hasOwnProperty(m) && b !== x && (b != null || x != null))
                    switch (m) {
                    case "selected":
                        A.selected = b && typeof b != "function" && typeof b != "symbol";
                        break;
                    default:
                        TA(A, e, m, b, a, x)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var iA in t)
                b = t[iA],
                t.hasOwnProperty(iA) && b != null && !a.hasOwnProperty(iA) && TA(A, e, iA, null, a, b);
            for (H in a)
                if (b = a[H],
                x = t[H],
                a.hasOwnProperty(H) && b !== x && (b != null || x != null))
                    switch (H) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(l(137, e));
                        break;
                    default:
                        TA(A, e, H, b, a, x)
                    }
            return;
        default:
            if (ms(e)) {
                for (var DA in t)
                    b = t[DA],
                    t.hasOwnProperty(DA) && b !== void 0 && !a.hasOwnProperty(DA) && ic(A, e, DA, void 0, a, b);
                for (K in a)
                    b = a[K],
                    x = t[K],
                    !a.hasOwnProperty(K) || b === x || b === void 0 && x === void 0 || ic(A, e, K, b, a, x);
                return
            }
        }
        for (var F in t)
            b = t[F],
            t.hasOwnProperty(F) && b != null && !a.hasOwnProperty(F) && TA(A, e, F, null, a, b);
        for (O in a)
            b = a[O],
            x = t[O],
            !a.hasOwnProperty(O) || b === x || b == null && x == null || TA(A, e, O, b, a, x)
    }
    function td(A) {
        switch (A) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function kw() {
        if (typeof performance.getEntriesByType == "function") {
            for (var A = 0, e = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
                var s = t[a]
                  , u = s.transferSize
                  , f = s.initiatorType
                  , h = s.duration;
                if (u && h && td(f)) {
                    for (f = 0,
                    h = s.responseEnd,
                    a += 1; a < t.length; a++) {
                        var m = t[a]
                          , H = m.startTime;
                        if (H > h)
                            break;
                        var K = m.transferSize
                          , O = m.initiatorType;
                        K && td(O) && (m = m.responseEnd,
                        f += K * (m < h ? 1 : (h - H) / (m - H)))
                    }
                    if (--a,
                    e += 8 * (u + f) / (s.duration / 1e3),
                    A++,
                    10 < A)
                        break
                }
            }
            if (0 < A)
                return e / A / 1e6
        }
        return navigator.connection && (A = navigator.connection.downlink,
        typeof A == "number") ? A : 5
    }
    var sc = null
      , uc = null;
    function Pr(A) {
        return A.nodeType === 9 ? A : A.ownerDocument
    }
    function ad(A) {
        switch (A) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function nd(A, e) {
        if (A === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return A === 1 && e === "foreignObject" ? 0 : A
    }
    function cc(A, e) {
        return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var oc = null;
    function Zw() {
        var A = window.event;
        return A && A.type === "popstate" ? A === oc ? !1 : (oc = A,
        !0) : (oc = null,
        !1)
    }
    var ld = typeof setTimeout == "function" ? setTimeout : void 0
      , qw = typeof clearTimeout == "function" ? clearTimeout : void 0
      , rd = typeof Promise == "function" ? Promise : void 0
      , Ww = typeof queueMicrotask == "function" ? queueMicrotask : typeof rd < "u" ? function(A) {
        return rd.resolve(null).then(A).catch(Pw)
    }
    : ld;
    function Pw(A) {
        setTimeout(function() {
            throw A
        })
    }
    function qt(A) {
        return A === "head"
    }
    function id(A, e) {
        var t = e
          , a = 0;
        do {
            var s = t.nextSibling;
            if (A.removeChild(t),
            s && s.nodeType === 8)
                if (t = s.data,
                t === "/$" || t === "/&") {
                    if (a === 0) {
                        A.removeChild(s),
                        Cn(e);
                        return
                    }
                    a--
                } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
                    a++;
                else if (t === "html")
                    wl(A.ownerDocument.documentElement);
                else if (t === "head") {
                    t = A.ownerDocument.head,
                    wl(t);
                    for (var u = t.firstChild; u; ) {
                        var f = u.nextSibling
                          , h = u.nodeName;
                        u[Mn] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u),
                        u = f
                    }
                } else
                    t === "body" && wl(A.ownerDocument.body);
            t = s
        } while (t);
        Cn(e)
    }
    function sd(A, e) {
        var t = A;
        A = 0;
        do {
            var a = t.nextSibling;
            if (t.nodeType === 1 ? e ? (t._stashedDisplay = t.style.display,
            t.style.display = "none") : (t.style.display = t._stashedDisplay || "",
            t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (e ? (t._stashedText = t.nodeValue,
            t.nodeValue = "") : t.nodeValue = t._stashedText || ""),
            a && a.nodeType === 8)
                if (t = a.data,
                t === "/$") {
                    if (A === 0)
                        break;
                    A--
                } else
                    t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || A++;
            t = a
        } while (t)
    }
    function fc(A) {
        var e = A.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var t = e;
            switch (e = e.nextSibling,
            t.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                fc(t),
                Qs(t);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (t.rel.toLowerCase() === "stylesheet")
                    continue
            }
            A.removeChild(t)
        }
    }
    function $w(A, e, t, a) {
        for (; A.nodeType === 1; ) {
            var s = t;
            if (A.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (A.nodeName !== "INPUT" || A.type !== "hidden"))
                    break
            } else if (a) {
                if (!A[Mn])
                    switch (e) {
                    case "meta":
                        if (!A.hasAttribute("itemprop"))
                            break;
                        return A;
                    case "link":
                        if (u = A.getAttribute("rel"),
                        u === "stylesheet" && A.hasAttribute("data-precedence"))
                            break;
                        if (u !== s.rel || A.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || A.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || A.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return A;
                    case "style":
                        if (A.hasAttribute("data-precedence"))
                            break;
                        return A;
                    case "script":
                        if (u = A.getAttribute("src"),
                        (u !== (s.src == null ? null : s.src) || A.getAttribute("type") !== (s.type == null ? null : s.type) || A.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && A.hasAttribute("async") && !A.hasAttribute("itemprop"))
                            break;
                        return A;
                    default:
                        return A
                    }
            } else if (e === "input" && A.type === "hidden") {
                var u = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && A.getAttribute("name") === u)
                    return A
            } else
                return A;
            if (A = Xe(A.nextSibling),
            A === null)
                break
        }
        return null
    }
    function AC(A, e, t) {
        if (e === "")
            return null;
        for (; A.nodeType !== 3; )
            if ((A.nodeType !== 1 || A.nodeName !== "INPUT" || A.type !== "hidden") && !t || (A = Xe(A.nextSibling),
            A === null))
                return null;
        return A
    }
    function ud(A, e) {
        for (; A.nodeType !== 8; )
            if ((A.nodeType !== 1 || A.nodeName !== "INPUT" || A.type !== "hidden") && !e || (A = Xe(A.nextSibling),
            A === null))
                return null;
        return A
    }
    function Bc(A) {
        return A.data === "$?" || A.data === "$~"
    }
    function gc(A) {
        return A.data === "$!" || A.data === "$?" && A.ownerDocument.readyState !== "loading"
    }
    function eC(A, e) {
        var t = A.ownerDocument;
        if (A.data === "$~")
            A._reactRetry = e;
        else if (A.data !== "$?" || t.readyState !== "loading")
            e();
        else {
            var a = function() {
                e(),
                t.removeEventListener("DOMContentLoaded", a)
            };
            t.addEventListener("DOMContentLoaded", a),
            A._reactRetry = a
        }
    }
    function Xe(A) {
        for (; A != null; A = A.nextSibling) {
            var e = A.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = A.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return A
    }
    var dc = null;
    function cd(A) {
        A = A.nextSibling;
        for (var e = 0; A; ) {
            if (A.nodeType === 8) {
                var t = A.data;
                if (t === "/$" || t === "/&") {
                    if (e === 0)
                        return Xe(A.nextSibling);
                    e--
                } else
                    t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || e++
            }
            A = A.nextSibling
        }
        return null
    }
    function od(A) {
        A = A.previousSibling;
        for (var e = 0; A; ) {
            if (A.nodeType === 8) {
                var t = A.data;
                if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
                    if (e === 0)
                        return A;
                    e--
                } else
                    t !== "/$" && t !== "/&" || e++
            }
            A = A.previousSibling
        }
        return null
    }
    function fd(A, e, t) {
        switch (e = Pr(t),
        A) {
        case "html":
            if (A = e.documentElement,
            !A)
                throw Error(l(452));
            return A;
        case "head":
            if (A = e.head,
            !A)
                throw Error(l(453));
            return A;
        case "body":
            if (A = e.body,
            !A)
                throw Error(l(454));
            return A;
        default:
            throw Error(l(451))
        }
    }
    function wl(A) {
        for (var e = A.attributes; e.length; )
            A.removeAttributeNode(e[0]);
        Qs(A)
    }
    var Ye = new Map
      , Bd = new Set;
    function $r(A) {
        return typeof A.getRootNode == "function" ? A.getRootNode() : A.nodeType === 9 ? A : A.ownerDocument
    }
    var Et = z.d;
    z.d = {
        f: tC,
        r: aC,
        D: nC,
        C: lC,
        L: rC,
        m: iC,
        X: uC,
        S: sC,
        M: cC
    };
    function tC() {
        var A = Et.f()
          , e = jr();
        return A || e
    }
    function aC(A) {
        var e = Na(A);
        e !== null && e.tag === 5 && e.type === "form" ? SB(e) : Et.r(A)
    }
    var hn = typeof document > "u" ? null : document;
    function gd(A, e, t) {
        var a = hn;
        if (a && typeof e == "string" && e) {
            var s = Oe(e);
            s = 'link[rel="' + A + '"][href="' + s + '"]',
            typeof t == "string" && (s += '[crossorigin="' + t + '"]'),
            Bd.has(s) || (Bd.add(s),
            A = {
                rel: A,
                crossOrigin: t,
                href: e
            },
            a.querySelector(s) === null && (e = a.createElement("link"),
            ue(e, "link", A),
            te(e),
            a.head.appendChild(e)))
        }
    }
    function nC(A) {
        Et.D(A),
        gd("dns-prefetch", A, null)
    }
    function lC(A, e) {
        Et.C(A, e),
        gd("preconnect", A, e)
    }
    function rC(A, e, t) {
        Et.L(A, e, t);
        var a = hn;
        if (a && A && e) {
            var s = 'link[rel="preload"][as="' + Oe(e) + '"]';
            e === "image" && t && t.imageSrcSet ? (s += '[imagesrcset="' + Oe(t.imageSrcSet) + '"]',
            typeof t.imageSizes == "string" && (s += '[imagesizes="' + Oe(t.imageSizes) + '"]')) : s += '[href="' + Oe(A) + '"]';
            var u = s;
            switch (e) {
            case "style":
                u = Qn(A);
                break;
            case "script":
                u = wn(A)
            }
            Ye.has(u) || (A = C({
                rel: "preload",
                href: e === "image" && t && t.imageSrcSet ? void 0 : A,
                as: e
            }, t),
            Ye.set(u, A),
            a.querySelector(s) !== null || e === "style" && a.querySelector(Cl(u)) || e === "script" && a.querySelector(Ul(u)) || (e = a.createElement("link"),
            ue(e, "link", A),
            te(e),
            a.head.appendChild(e)))
        }
    }
    function iC(A, e) {
        Et.m(A, e);
        var t = hn;
        if (t && A) {
            var a = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + Oe(a) + '"][href="' + Oe(A) + '"]'
              , u = s;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = wn(A)
            }
            if (!Ye.has(u) && (A = C({
                rel: "modulepreload",
                href: A
            }, e),
            Ye.set(u, A),
            t.querySelector(s) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (t.querySelector(Ul(u)))
                        return
                }
                a = t.createElement("link"),
                ue(a, "link", A),
                te(a),
                t.head.appendChild(a)
            }
        }
    }
    function sC(A, e, t) {
        Et.S(A, e, t);
        var a = hn;
        if (a && A) {
            var s = Oa(a).hoistableStyles
              , u = Qn(A);
            e = e || "default";
            var f = s.get(u);
            if (!f) {
                var h = {
                    loading: 0,
                    preload: null
                };
                if (f = a.querySelector(Cl(u)))
                    h.loading = 5;
                else {
                    A = C({
                        rel: "stylesheet",
                        href: A,
                        "data-precedence": e
                    }, t),
                    (t = Ye.get(u)) && hc(A, t);
                    var m = f = a.createElement("link");
                    te(m),
                    ue(m, "link", A),
                    m._p = new Promise(function(H, K) {
                        m.onload = H,
                        m.onerror = K
                    }
                    ),
                    m.addEventListener("load", function() {
                        h.loading |= 1
                    }),
                    m.addEventListener("error", function() {
                        h.loading |= 2
                    }),
                    h.loading |= 4,
                    Ai(f, e, a)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: h
                },
                s.set(u, f)
            }
        }
    }
    function uC(A, e) {
        Et.X(A, e);
        var t = hn;
        if (t && A) {
            var a = Oa(t).hoistableScripts
              , s = wn(A)
              , u = a.get(s);
            u || (u = t.querySelector(Ul(s)),
            u || (A = C({
                src: A,
                async: !0
            }, e),
            (e = Ye.get(s)) && Qc(A, e),
            u = t.createElement("script"),
            te(u),
            ue(u, "link", A),
            t.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(s, u))
        }
    }
    function cC(A, e) {
        Et.M(A, e);
        var t = hn;
        if (t && A) {
            var a = Oa(t).hoistableScripts
              , s = wn(A)
              , u = a.get(s);
            u || (u = t.querySelector(Ul(s)),
            u || (A = C({
                src: A,
                async: !0,
                type: "module"
            }, e),
            (e = Ye.get(s)) && Qc(A, e),
            u = t.createElement("script"),
            te(u),
            ue(u, "link", A),
            t.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(s, u))
        }
    }
    function dd(A, e, t, a) {
        var s = (s = uA.current) ? $r(s) : null;
        if (!s)
            throw Error(l(446));
        switch (A) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof t.precedence == "string" && typeof t.href == "string" ? (e = Qn(t.href),
            t = Oa(s).hoistableStyles,
            a = t.get(e),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            t.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
                A = Qn(t.href);
                var u = Oa(s).hoistableStyles
                  , f = u.get(A);
                if (f || (s = s.ownerDocument || s,
                f = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(A, f),
                (u = s.querySelector(Cl(A))) && !u._p && (f.instance = u,
                f.state.loading = 5),
                Ye.has(A) || (t = {
                    rel: "preload",
                    as: "style",
                    href: t.href,
                    crossOrigin: t.crossOrigin,
                    integrity: t.integrity,
                    media: t.media,
                    hrefLang: t.hrefLang,
                    referrerPolicy: t.referrerPolicy
                },
                Ye.set(A, t),
                u || oC(s, A, t, f.state))),
                e && a === null)
                    throw Error(l(528, ""));
                return f
            }
            if (e && a !== null)
                throw Error(l(529, ""));
            return null;
        case "script":
            return e = t.async,
            t = t.src,
            typeof t == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = wn(t),
            t = Oa(s).hoistableScripts,
            a = t.get(e),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            t.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(l(444, A))
        }
    }
    function Qn(A) {
        return 'href="' + Oe(A) + '"'
    }
    function Cl(A) {
        return 'link[rel="stylesheet"][' + A + "]"
    }
    function hd(A) {
        return C({}, A, {
            "data-precedence": A.precedence,
            precedence: null
        })
    }
    function oC(A, e, t, a) {
        A.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = A.createElement("link"),
        a.preload = e,
        e.addEventListener("load", function() {
            return a.loading |= 1
        }),
        e.addEventListener("error", function() {
            return a.loading |= 2
        }),
        ue(e, "link", t),
        te(e),
        A.head.appendChild(e))
    }
    function wn(A) {
        return '[src="' + Oe(A) + '"]'
    }
    function Ul(A) {
        return "script[async]" + A
    }
    function Qd(A, e, t) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var a = A.querySelector('style[data-href~="' + Oe(t.href) + '"]');
                if (a)
                    return e.instance = a,
                    te(a),
                    a;
                var s = C({}, t, {
                    "data-href": t.href,
                    "data-precedence": t.precedence,
                    href: null,
                    precedence: null
                });
                return a = (A.ownerDocument || A).createElement("style"),
                te(a),
                ue(a, "style", s),
                Ai(a, t.precedence, A),
                e.instance = a;
            case "stylesheet":
                s = Qn(t.href);
                var u = A.querySelector(Cl(s));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    te(u),
                    u;
                a = hd(t),
                (s = Ye.get(s)) && hc(a, s),
                u = (A.ownerDocument || A).createElement("link"),
                te(u);
                var f = u;
                return f._p = new Promise(function(h, m) {
                    f.onload = h,
                    f.onerror = m
                }
                ),
                ue(u, "link", a),
                e.state.loading |= 4,
                Ai(u, t.precedence, A),
                e.instance = u;
            case "script":
                return u = wn(t.src),
                (s = A.querySelector(Ul(u))) ? (e.instance = s,
                te(s),
                s) : (a = t,
                (s = Ye.get(u)) && (a = C({}, t),
                Qc(a, s)),
                A = A.ownerDocument || A,
                s = A.createElement("script"),
                te(s),
                ue(s, "link", a),
                A.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(l(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
            e.state.loading |= 4,
            Ai(a, t.precedence, A));
        return e.instance
    }
    function Ai(A, e, t) {
        for (var a = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
            var h = a[f];
            if (h.dataset.precedence === e)
                u = h;
            else if (u !== s)
                break
        }
        u ? u.parentNode.insertBefore(A, u.nextSibling) : (e = t.nodeType === 9 ? t.head : t,
        e.insertBefore(A, e.firstChild))
    }
    function hc(A, e) {
        A.crossOrigin == null && (A.crossOrigin = e.crossOrigin),
        A.referrerPolicy == null && (A.referrerPolicy = e.referrerPolicy),
        A.title == null && (A.title = e.title)
    }
    function Qc(A, e) {
        A.crossOrigin == null && (A.crossOrigin = e.crossOrigin),
        A.referrerPolicy == null && (A.referrerPolicy = e.referrerPolicy),
        A.integrity == null && (A.integrity = e.integrity)
    }
    var ei = null;
    function wd(A, e, t) {
        if (ei === null) {
            var a = new Map
              , s = ei = new Map;
            s.set(t, a)
        } else
            s = ei,
            a = s.get(t),
            a || (a = new Map,
            s.set(t, a));
        if (a.has(A))
            return a;
        for (a.set(A, null),
        t = t.getElementsByTagName(A),
        s = 0; s < t.length; s++) {
            var u = t[s];
            if (!(u[Mn] || u[le] || A === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = u.getAttribute(e) || "";
                f = A + f;
                var h = a.get(f);
                h ? h.push(u) : a.set(f, [u])
            }
        }
        return a
    }
    function Cd(A, e, t) {
        A = A.ownerDocument || A,
        A.head.insertBefore(t, e === "title" ? A.querySelector("head > title") : null)
    }
    function fC(A, e, t) {
        if (t === 1 || e.itemProp != null)
            return !1;
        switch (A) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return A = e.disabled,
                typeof e.precedence == "string" && A == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Ud(A) {
        return !(A.type === "stylesheet" && (A.state.loading & 3) === 0)
    }
    function BC(A, e, t, a) {
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var s = Qn(a.href)
                  , u = e.querySelector(Cl(s));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (A.count++,
                    A = ti.bind(A),
                    e.then(A, A)),
                    t.state.loading |= 4,
                    t.instance = u,
                    te(u);
                    return
                }
                u = e.ownerDocument || e,
                a = hd(a),
                (s = Ye.get(s)) && hc(a, s),
                u = u.createElement("link"),
                te(u);
                var f = u;
                f._p = new Promise(function(h, m) {
                    f.onload = h,
                    f.onerror = m
                }
                ),
                ue(u, "link", a),
                t.instance = u
            }
            A.stylesheets === null && (A.stylesheets = new Map),
            A.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (A.count++,
            t = ti.bind(A),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    var wc = 0;
    function gC(A, e) {
        return A.stylesheets && A.count === 0 && ni(A, A.stylesheets),
        0 < A.count || 0 < A.imgCount ? function(t) {
            var a = setTimeout(function() {
                if (A.stylesheets && ni(A, A.stylesheets),
                A.unsuspend) {
                    var u = A.unsuspend;
                    A.unsuspend = null,
                    u()
                }
            }, 6e4 + e);
            0 < A.imgBytes && wc === 0 && (wc = 62500 * kw());
            var s = setTimeout(function() {
                if (A.waitingForImages = !1,
                A.count === 0 && (A.stylesheets && ni(A, A.stylesheets),
                A.unsuspend)) {
                    var u = A.unsuspend;
                    A.unsuspend = null,
                    u()
                }
            }, (A.imgBytes > wc ? 50 : 800) + e);
            return A.unsuspend = t,
            function() {
                A.unsuspend = null,
                clearTimeout(a),
                clearTimeout(s)
            }
        }
        : null
    }
    function ti() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                ni(this, this.stylesheets);
            else if (this.unsuspend) {
                var A = this.unsuspend;
                this.unsuspend = null,
                A()
            }
        }
    }
    var ai = null;
    function ni(A, e) {
        A.stylesheets = null,
        A.unsuspend !== null && (A.count++,
        ai = new Map,
        e.forEach(dC, A),
        ai = null,
        ti.call(A))
    }
    function dC(A, e) {
        if (!(e.state.loading & 4)) {
            var t = ai.get(A);
            if (t)
                var a = t.get(null);
            else {
                t = new Map,
                ai.set(A, t);
                for (var s = A.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
                    var f = s[u];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (t.set(f.dataset.precedence, f),
                    a = f)
                }
                a && t.set(null, a)
            }
            s = e.instance,
            f = s.getAttribute("data-precedence"),
            u = t.get(f) || a,
            u === a && t.set(null, s),
            t.set(f, s),
            this.count++,
            a = ti.bind(this),
            s.addEventListener("load", a),
            s.addEventListener("error", a),
            u ? u.parentNode.insertBefore(s, u.nextSibling) : (A = A.nodeType === 9 ? A.head : A,
            A.insertBefore(s, A.firstChild)),
            e.state.loading |= 4
        }
    }
    var ml = {
        $$typeof: W,
        Provider: null,
        Consumer: null,
        _currentValue: V,
        _currentValue2: V,
        _threadCount: 0
    };
    function hC(A, e, t, a, s, u, f, h, m) {
        this.tag = 1,
        this.containerInfo = A,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Bs(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Bs(0),
        this.hiddenUpdates = Bs(null),
        this.identifierPrefix = a,
        this.onUncaughtError = s,
        this.onCaughtError = u,
        this.onRecoverableError = f,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = m,
        this.incompleteTransitions = new Map
    }
    function md(A, e, t, a, s, u, f, h, m, H, K, O) {
        return A = new hC(A,e,t,f,m,H,K,O,h),
        e = 1,
        u === !0 && (e |= 24),
        u = Se(3, null, null, e),
        A.current = u,
        u.stateNode = A,
        e = Ws(),
        e.refCount++,
        A.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: t,
            cache: e
        },
        eu(u),
        A
    }
    function vd(A) {
        return A ? (A = ka,
        A) : ka
    }
    function pd(A, e, t, a, s, u) {
        s = vd(s),
        a.context === null ? a.context = s : a.pendingContext = s,
        a = Rt(e),
        a.payload = {
            element: t
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        t = _t(A, a, e),
        t !== null && (Fe(t, A, e),
        $n(t, A, e))
    }
    function Fd(A, e) {
        if (A = A.memoizedState,
        A !== null && A.dehydrated !== null) {
            var t = A.retryLane;
            A.retryLane = t !== 0 && t < e ? t : e
        }
    }
    function Cc(A, e) {
        Fd(A, e),
        (A = A.alternate) && Fd(A, e)
    }
    function yd(A) {
        if (A.tag === 13 || A.tag === 31) {
            var e = Qa(A, 67108864);
            e !== null && Fe(e, A, 67108864),
            Cc(A, 67108864)
        }
    }
    function Ed(A) {
        if (A.tag === 13 || A.tag === 31) {
            var e = Ie();
            e = gs(e);
            var t = Qa(A, e);
            t !== null && Fe(t, A, e),
            Cc(A, e)
        }
    }
    var li = !0;
    function QC(A, e, t, a) {
        var s = S.T;
        S.T = null;
        var u = z.p;
        try {
            z.p = 2,
            Uc(A, e, t, a)
        } finally {
            z.p = u,
            S.T = s
        }
    }
    function wC(A, e, t, a) {
        var s = S.T;
        S.T = null;
        var u = z.p;
        try {
            z.p = 8,
            Uc(A, e, t, a)
        } finally {
            z.p = u,
            S.T = s
        }
    }
    function Uc(A, e, t, a) {
        if (li) {
            var s = mc(a);
            if (s === null)
                rc(A, e, a, ri, t),
                bd(A, a);
            else if (UC(s, A, e, t, a))
                a.stopPropagation();
            else if (bd(A, a),
            e & 4 && -1 < CC.indexOf(A)) {
                for (; s !== null; ) {
                    var u = Na(s);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var f = fa(u.pendingLanes);
                                if (f !== 0) {
                                    var h = u;
                                    for (h.pendingLanes |= 2,
                                    h.entangledLanes |= 2; f; ) {
                                        var m = 1 << 31 - be(f);
                                        h.entanglements[1] |= m,
                                        f &= ~m
                                    }
                                    lt(u),
                                    (FA & 6) === 0 && (Vr = Ee() + 500,
                                    dl(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            h = Qa(u, 2),
                            h !== null && Fe(h, u, 2),
                            jr(),
                            Cc(u, 2)
                        }
                    if (u = mc(a),
                    u === null && rc(A, e, a, ri, t),
                    u === s)
                        break;
                    s = u
                }
                s !== null && a.stopPropagation()
            } else
                rc(A, e, a, null, t)
        }
    }
    function mc(A) {
        return A = ps(A),
        vc(A)
    }
    var ri = null;
    function vc(A) {
        if (ri = null,
        A = Ma(A),
        A !== null) {
            var e = o(A);
            if (e === null)
                A = null;
            else {
                var t = e.tag;
                if (t === 13) {
                    if (A = B(e),
                    A !== null)
                        return A;
                    A = null
                } else if (t === 31) {
                    if (A = d(e),
                    A !== null)
                        return A;
                    A = null
                } else if (t === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    A = null
                } else
                    e !== A && (A = null)
            }
        }
        return ri = A,
        null
    }
    function Hd(A) {
        switch (A) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (nQ()) {
            case Lo:
                return 2;
            case Io:
                return 8;
            case Zl:
            case lQ:
                return 32;
            case Mo:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var pc = !1
      , Wt = null
      , Pt = null
      , $t = null
      , vl = new Map
      , pl = new Map
      , Aa = []
      , CC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function bd(A, e) {
        switch (A) {
        case "focusin":
        case "focusout":
            Wt = null;
            break;
        case "dragenter":
        case "dragleave":
            Pt = null;
            break;
        case "mouseover":
        case "mouseout":
            $t = null;
            break;
        case "pointerover":
        case "pointerout":
            vl.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            pl.delete(e.pointerId)
        }
    }
    function Fl(A, e, t, a, s, u) {
        return A === null || A.nativeEvent !== u ? (A = {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [s]
        },
        e !== null && (e = Na(e),
        e !== null && yd(e)),
        A) : (A.eventSystemFlags |= a,
        e = A.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        A)
    }
    function UC(A, e, t, a, s) {
        switch (e) {
        case "focusin":
            return Wt = Fl(Wt, A, e, t, a, s),
            !0;
        case "dragenter":
            return Pt = Fl(Pt, A, e, t, a, s),
            !0;
        case "mouseover":
            return $t = Fl($t, A, e, t, a, s),
            !0;
        case "pointerover":
            var u = s.pointerId;
            return vl.set(u, Fl(vl.get(u) || null, A, e, t, a, s)),
            !0;
        case "gotpointercapture":
            return u = s.pointerId,
            pl.set(u, Fl(pl.get(u) || null, A, e, t, a, s)),
            !0
        }
        return !1
    }
    function xd(A) {
        var e = Ma(A.target);
        if (e !== null) {
            var t = o(e);
            if (t !== null) {
                if (e = t.tag,
                e === 13) {
                    if (e = B(t),
                    e !== null) {
                        A.blockedOn = e,
                        Vo(A.priority, function() {
                            Ed(t)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = d(t),
                    e !== null) {
                        A.blockedOn = e,
                        Vo(A.priority, function() {
                            Ed(t)
                        });
                        return
                    }
                } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                    A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return
                }
            }
        }
        A.blockedOn = null
    }
    function ii(A) {
        if (A.blockedOn !== null)
            return !1;
        for (var e = A.targetContainers; 0 < e.length; ) {
            var t = mc(A.nativeEvent);
            if (t === null) {
                t = A.nativeEvent;
                var a = new t.constructor(t.type,t);
                vs = a,
                t.target.dispatchEvent(a),
                vs = null
            } else
                return e = Na(t),
                e !== null && yd(e),
                A.blockedOn = t,
                !1;
            e.shift()
        }
        return !0
    }
    function Sd(A, e, t) {
        ii(A) && t.delete(e)
    }
    function mC() {
        pc = !1,
        Wt !== null && ii(Wt) && (Wt = null),
        Pt !== null && ii(Pt) && (Pt = null),
        $t !== null && ii($t) && ($t = null),
        vl.forEach(Sd),
        pl.forEach(Sd)
    }
    function si(A, e) {
        A.blockedOn === e && (A.blockedOn = null,
        pc || (pc = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, mC)))
    }
    var ui = null;
    function Td(A) {
        ui !== A && (ui = A,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
            ui === A && (ui = null);
            for (var e = 0; e < A.length; e += 3) {
                var t = A[e]
                  , a = A[e + 1]
                  , s = A[e + 2];
                if (typeof a != "function") {
                    if (vc(a || t) === null)
                        continue;
                    break
                }
                var u = Na(t);
                u !== null && (A.splice(e, 3),
                e -= 3,
                mu(u, {
                    pending: !0,
                    data: s,
                    method: t.method,
                    action: a
                }, a, s))
            }
        }))
    }
    function Cn(A) {
        function e(m) {
            return si(m, A)
        }
        Wt !== null && si(Wt, A),
        Pt !== null && si(Pt, A),
        $t !== null && si($t, A),
        vl.forEach(e),
        pl.forEach(e);
        for (var t = 0; t < Aa.length; t++) {
            var a = Aa[t];
            a.blockedOn === A && (a.blockedOn = null)
        }
        for (; 0 < Aa.length && (t = Aa[0],
        t.blockedOn === null); )
            xd(t),
            t.blockedOn === null && Aa.shift();
        if (t = (A.ownerDocument || A).$$reactFormReplay,
        t != null)
            for (a = 0; a < t.length; a += 3) {
                var s = t[a]
                  , u = t[a + 1]
                  , f = s[we] || null;
                if (typeof u == "function")
                    f || Td(t);
                else if (f) {
                    var h = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (s = u,
                        f = u[we] || null)
                            h = f.formAction;
                        else if (vc(s) !== null)
                            continue
                    } else
                        h = f.action;
                    typeof h == "function" ? t[a + 1] = h : (t.splice(a, 3),
                    a -= 3),
                    Td(t)
                }
            }
    }
    function Dd() {
        function A(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(f) {
                        return s = f
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            s !== null && (s(),
            s = null),
            a || setTimeout(t, 20)
        }
        function t() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , s = null;
            return navigation.addEventListener("navigate", A),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(t, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", A),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                s !== null && (s(),
                s = null)
            }
        }
    }
    function Fc(A) {
        this._internalRoot = A
    }
    ci.prototype.render = Fc.prototype.render = function(A) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(l(409));
        var t = e.current
          , a = Ie();
        pd(t, a, A, e, null, null)
    }
    ,
    ci.prototype.unmount = Fc.prototype.unmount = function() {
        var A = this._internalRoot;
        if (A !== null) {
            this._internalRoot = null;
            var e = A.containerInfo;
            pd(A.current, 2, null, A, null, null),
            jr(),
            e[Ia] = null
        }
    }
    ;
    function ci(A) {
        this._internalRoot = A
    }
    ci.prototype.unstable_scheduleHydration = function(A) {
        if (A) {
            var e = Go();
            A = {
                blockedOn: null,
                target: A,
                priority: e
            };
            for (var t = 0; t < Aa.length && e !== 0 && e < Aa[t].priority; t++)
                ;
            Aa.splice(t, 0, A),
            t === 0 && xd(A)
        }
    }
    ;
    var Kd = n.version;
    if (Kd !== "19.2.4")
        throw Error(l(527, Kd, "19.2.4"));
    z.findDOMNode = function(A) {
        var e = A._reactInternals;
        if (e === void 0)
            throw typeof A.render == "function" ? Error(l(188)) : (A = Object.keys(A).join(","),
            Error(l(268, A)));
        return A = Q(e),
        A = A !== null ? U(A) : null,
        A = A === null ? null : A.stateNode,
        A
    }
    ;
    var vC = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: S,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!oi.isDisabled && oi.supportsFiber)
            try {
                Kn = oi.inject(vC),
                He = oi
            } catch {}
    }
    return El.createRoot = function(A, e) {
        if (!c(A))
            throw Error(l(299));
        var t = !1
          , a = ""
          , s = _B
          , u = GB
          , f = VB;
        return e != null && (e.unstable_strictMode === !0 && (t = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        e = md(A, 1, !1, null, null, t, a, null, s, u, f, Dd),
        A[Ia] = e.current,
        lc(A),
        new Fc(e)
    }
    ,
    El.hydrateRoot = function(A, e, t) {
        if (!c(A))
            throw Error(l(299));
        var a = !1
          , s = ""
          , u = _B
          , f = GB
          , h = VB
          , m = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (f = t.onCaughtError),
        t.onRecoverableError !== void 0 && (h = t.onRecoverableError),
        t.formState !== void 0 && (m = t.formState)),
        e = md(A, 1, !0, e, t ?? null, a, s, m, u, f, h, Dd),
        e.context = vd(null),
        t = e.current,
        a = Ie(),
        a = gs(a),
        s = Rt(a),
        s.callback = null,
        _t(t, s, a),
        t = a,
        e.current.lanes = t,
        In(e, t),
        lt(e),
        A[Ia] = e.current,
        lc(A),
        new ci(e)
    }
    ,
    El.version = "19.2.4",
    El
}
var zd;
function DC() {
    if (zd)
        return Hc.exports;
    zd = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (n) {
                console.error(n)
            }
    }
    return r(),
    Hc.exports = TC(),
    Hc.exports
}
var KC = DC();
const LC = X0(KC);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var $c = function(r, n) {
    return $c = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(i, l) {
        i.__proto__ = l
    }
    || function(i, l) {
        for (var c in l)
            Object.prototype.hasOwnProperty.call(l, c) && (i[c] = l[c])
    }
    ,
    $c(r, n)
};
function et(r, n) {
    if (typeof n != "function" && n !== null)
        throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    $c(r, n);
    function i() {
        this.constructor = r
    }
    r.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype,
    new i)
}
var Ao = function() {
    return Ao = Object.assign || function(n) {
        for (var i, l = 1, c = arguments.length; l < c; l++) {
            i = arguments[l];
            for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }
    ,
    Ao.apply(this, arguments)
};
function Qe(r, n, i, l) {
    function c(o) {
        return o instanceof i ? o : new i(function(B) {
            B(o)
        }
        )
    }
    return new (i || (i = Promise))(function(o, B) {
        function d(U) {
            try {
                Q(l.next(U))
            } catch (C) {
                B(C)
            }
        }
        function g(U) {
            try {
                Q(l.throw(U))
            } catch (C) {
                B(C)
            }
        }
        function Q(U) {
            U.done ? o(U.value) : c(U.value).then(d, g)
        }
        Q((l = l.apply(r, [])).next())
    }
    )
}
function Be(r, n) {
    var i = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, l, c, o, B;
    return B = {
        next: d(0),
        throw: d(1),
        return: d(2)
    },
    typeof Symbol == "function" && (B[Symbol.iterator] = function() {
        return this
    }
    ),
    B;
    function d(Q) {
        return function(U) {
            return g([Q, U])
        }
    }
    function g(Q) {
        if (l)
            throw new TypeError("Generator is already executing.");
        for (; i; )
            try {
                if (l = 1,
                c && (o = Q[0] & 2 ? c.return : Q[0] ? c.throw || ((o = c.return) && o.call(c),
                0) : c.next) && !(o = o.call(c, Q[1])).done)
                    return o;
                switch (c = 0,
                o && (Q = [Q[0] & 2, o.value]),
                Q[0]) {
                case 0:
                case 1:
                    o = Q;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: Q[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    c = Q[1],
                    Q = [0];
                    continue;
                case 7:
                    Q = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (o = i.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (Q[0] === 6 || Q[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (Q[0] === 3 && (!o || Q[1] > o[0] && Q[1] < o[3])) {
                        i.label = Q[1];
                        break
                    }
                    if (Q[0] === 6 && i.label < o[1]) {
                        i.label = o[1],
                        o = Q;
                        break
                    }
                    if (o && i.label < o[2]) {
                        i.label = o[2],
                        i.ops.push(Q);
                        break
                    }
                    o[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                Q = n.call(r, i)
            } catch (U) {
                Q = [6, U],
                c = 0
            } finally {
                l = o = 0
            }
        if (Q[0] & 5)
            throw Q[1];
        return {
            value: Q[0] ? Q[1] : void 0,
            done: !0
        }
    }
}
function fi(r, n, i) {
    if (arguments.length === 2)
        for (var l = 0, c = n.length, o; l < c; l++)
            (o || !(l in n)) && (o || (o = Array.prototype.slice.call(n, 0, l)),
            o[l] = n[l]);
    return r.concat(o || n)
}
var St = (function() {
    function r(n, i, l, c) {
        this.left = n,
        this.top = i,
        this.width = l,
        this.height = c
    }
    return r.prototype.add = function(n, i, l, c) {
        return new r(this.left + n,this.top + i,this.width + l,this.height + c)
    }
    ,
    r.fromClientRect = function(n, i) {
        return new r(i.left + n.windowBounds.left,i.top + n.windowBounds.top,i.width,i.height)
    }
    ,
    r.fromDOMRectList = function(n, i) {
        var l = Array.from(i).find(function(c) {
            return c.width !== 0
        });
        return l ? new r(l.left + n.windowBounds.left,l.top + n.windowBounds.top,l.width,l.height) : r.EMPTY
    }
    ,
    r.EMPTY = new r(0,0,0,0),
    r
}
)()
  , Wi = function(r, n) {
    return St.fromClientRect(r, n.getBoundingClientRect())
}
  , IC = function(r) {
    var n = r.body
      , i = r.documentElement;
    if (!n || !i)
        throw new Error("Unable to get document size");
    var l = Math.max(Math.max(n.scrollWidth, i.scrollWidth), Math.max(n.offsetWidth, i.offsetWidth), Math.max(n.clientWidth, i.clientWidth))
      , c = Math.max(Math.max(n.scrollHeight, i.scrollHeight), Math.max(n.offsetHeight, i.offsetHeight), Math.max(n.clientHeight, i.clientHeight));
    return new St(0,0,l,c)
}
  , Pi = function(r) {
    for (var n = [], i = 0, l = r.length; i < l; ) {
        var c = r.charCodeAt(i++);
        if (c >= 55296 && c <= 56319 && i < l) {
            var o = r.charCodeAt(i++);
            (o & 64512) === 56320 ? n.push(((c & 1023) << 10) + (o & 1023) + 65536) : (n.push(c),
            i--)
        } else
            n.push(c)
    }
    return n
}
  , kA = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, r);
    var i = r.length;
    if (!i)
        return "";
    for (var l = [], c = -1, o = ""; ++c < i; ) {
        var B = r[c];
        B <= 65535 ? l.push(B) : (B -= 65536,
        l.push((B >> 10) + 55296, B % 1024 + 56320)),
        (c + 1 === i || l.length > 16384) && (o += String.fromCharCode.apply(String, l),
        l.length = 0)
    }
    return o
}
  , jd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , MC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Bi = 0; Bi < jd.length; Bi++)
    MC[jd.charCodeAt(Bi)] = Bi;
var Xd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Tl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var gi = 0; gi < Xd.length; gi++)
    Tl[Xd.charCodeAt(gi)] = gi;
var NC = function(r) {
    var n = r.length * .75, i = r.length, l, c = 0, o, B, d, g;
    r[r.length - 1] === "=" && (n--,
    r[r.length - 2] === "=" && n--);
    var Q = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(n) : new Array(n)
      , U = Array.isArray(Q) ? Q : new Uint8Array(Q);
    for (l = 0; l < i; l += 4)
        o = Tl[r.charCodeAt(l)],
        B = Tl[r.charCodeAt(l + 1)],
        d = Tl[r.charCodeAt(l + 2)],
        g = Tl[r.charCodeAt(l + 3)],
        U[c++] = o << 2 | B >> 4,
        U[c++] = (B & 15) << 4 | d >> 2,
        U[c++] = (d & 3) << 6 | g & 63;
    return Q
}
  , OC = function(r) {
    for (var n = r.length, i = [], l = 0; l < n; l += 2)
        i.push(r[l + 1] << 8 | r[l]);
    return i
}
  , RC = function(r) {
    for (var n = r.length, i = [], l = 0; l < n; l += 4)
        i.push(r[l + 3] << 24 | r[l + 2] << 16 | r[l + 1] << 8 | r[l]);
    return i
}
  , Ka = 5
  , Fo = 11
  , Tc = 2
  , _C = Fo - Ka
  , Y0 = 65536 >> Ka
  , GC = 1 << Ka
  , Dc = GC - 1
  , VC = 1024 >> Ka
  , zC = Y0 + VC
  , jC = zC
  , XC = 32
  , YC = jC + XC
  , JC = 65536 >> Fo
  , kC = 1 << _C
  , ZC = kC - 1
  , Yd = function(r, n, i) {
    return r.slice ? r.slice(n, i) : new Uint16Array(Array.prototype.slice.call(r, n, i))
}
  , qC = function(r, n, i) {
    return r.slice ? r.slice(n, i) : new Uint32Array(Array.prototype.slice.call(r, n, i))
}
  , WC = function(r, n) {
    var i = NC(r)
      , l = Array.isArray(i) ? RC(i) : new Uint32Array(i)
      , c = Array.isArray(i) ? OC(i) : new Uint16Array(i)
      , o = 24
      , B = Yd(c, o / 2, l[4] / 2)
      , d = l[5] === 2 ? Yd(c, (o + l[4]) / 2) : qC(l, Math.ceil((o + l[4]) / 4));
    return new PC(l[0],l[1],l[2],l[3],B,d)
}
  , PC = (function() {
    function r(n, i, l, c, o, B) {
        this.initialValue = n,
        this.errorValue = i,
        this.highStart = l,
        this.highValueIndex = c,
        this.index = o,
        this.data = B
    }
    return r.prototype.get = function(n) {
        var i;
        if (n >= 0) {
            if (n < 55296 || n > 56319 && n <= 65535)
                return i = this.index[n >> Ka],
                i = (i << Tc) + (n & Dc),
                this.data[i];
            if (n <= 65535)
                return i = this.index[Y0 + (n - 55296 >> Ka)],
                i = (i << Tc) + (n & Dc),
                this.data[i];
            if (n < this.highStart)
                return i = YC - JC + (n >> Fo),
                i = this.index[i],
                i += n >> Ka & ZC,
                i = this.index[i],
                i = (i << Tc) + (n & Dc),
                this.data[i];
            if (n <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    r
}
)()
  , Jd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , $C = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var di = 0; di < Jd.length; di++)
    $C[Jd.charCodeAt(di)] = di;
var AU = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
  , kd = 50
  , eU = 1
  , J0 = 2
  , k0 = 3
  , tU = 4
  , aU = 5
  , Zd = 7
  , Z0 = 8
  , qd = 9
  , la = 10
  , eo = 11
  , Wd = 12
  , to = 13
  , nU = 14
  , Dl = 15
  , ao = 16
  , hi = 17
  , Hl = 18
  , lU = 19
  , Pd = 20
  , no = 21
  , bl = 22
  , Kc = 23
  , Un = 24
  , Me = 25
  , Kl = 26
  , Ll = 27
  , mn = 28
  , rU = 29
  , Ta = 30
  , iU = 31
  , Qi = 32
  , wi = 33
  , lo = 34
  , ro = 35
  , io = 36
  , zl = 37
  , so = 38
  , Mi = 39
  , Ni = 40
  , Lc = 41
  , q0 = 42
  , sU = 43
  , uU = [9001, 65288]
  , W0 = "!"
  , UA = "×"
  , Ci = "÷"
  , uo = WC(AU)
  , Ht = [Ta, io]
  , co = [eU, J0, k0, aU]
  , P0 = [la, Z0]
  , $d = [Ll, Kl]
  , cU = co.concat(P0)
  , A0 = [so, Mi, Ni, lo, ro]
  , oU = [Dl, to]
  , fU = function(r, n) {
    n === void 0 && (n = "strict");
    var i = []
      , l = []
      , c = [];
    return r.forEach(function(o, B) {
        var d = uo.get(o);
        if (d > kd ? (c.push(!0),
        d -= kd) : c.push(!1),
        ["normal", "auto", "loose"].indexOf(n) !== -1 && [8208, 8211, 12316, 12448].indexOf(o) !== -1)
            return l.push(B),
            i.push(ao);
        if (d === tU || d === eo) {
            if (B === 0)
                return l.push(B),
                i.push(Ta);
            var g = i[B - 1];
            return cU.indexOf(g) === -1 ? (l.push(l[B - 1]),
            i.push(g)) : (l.push(B),
            i.push(Ta))
        }
        if (l.push(B),
        d === iU)
            return i.push(n === "strict" ? no : zl);
        if (d === q0 || d === rU)
            return i.push(Ta);
        if (d === sU)
            return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? i.push(zl) : i.push(Ta);
        i.push(d)
    }),
    [l, i, c]
}
  , Ic = function(r, n, i, l) {
    var c = l[i];
    if (Array.isArray(r) ? r.indexOf(c) !== -1 : r === c)
        for (var o = i; o <= l.length; ) {
            o++;
            var B = l[o];
            if (B === n)
                return !0;
            if (B !== la)
                break
        }
    if (c === la)
        for (var o = i; o > 0; ) {
            o--;
            var d = l[o];
            if (Array.isArray(r) ? r.indexOf(d) !== -1 : r === d)
                for (var g = i; g <= l.length; ) {
                    g++;
                    var B = l[g];
                    if (B === n)
                        return !0;
                    if (B !== la)
                        break
                }
            if (d !== la)
                break
        }
    return !1
}
  , e0 = function(r, n) {
    for (var i = r; i >= 0; ) {
        var l = n[i];
        if (l === la)
            i--;
        else
            return l
    }
    return 0
}
  , BU = function(r, n, i, l, c) {
    if (i[l] === 0)
        return UA;
    var o = l - 1;
    if (Array.isArray(c) && c[o] === !0)
        return UA;
    var B = o - 1
      , d = o + 1
      , g = n[o]
      , Q = B >= 0 ? n[B] : 0
      , U = n[d];
    if (g === J0 && U === k0)
        return UA;
    if (co.indexOf(g) !== -1)
        return W0;
    if (co.indexOf(U) !== -1 || P0.indexOf(U) !== -1)
        return UA;
    if (e0(o, n) === Z0)
        return Ci;
    if (uo.get(r[o]) === eo || (g === Qi || g === wi) && uo.get(r[d]) === eo || g === Zd || U === Zd || g === qd || [la, to, Dl].indexOf(g) === -1 && U === qd || [hi, Hl, lU, Un, mn].indexOf(U) !== -1 || e0(o, n) === bl || Ic(Kc, bl, o, n) || Ic([hi, Hl], no, o, n) || Ic(Wd, Wd, o, n))
        return UA;
    if (g === la)
        return Ci;
    if (g === Kc || U === Kc)
        return UA;
    if (U === ao || g === ao)
        return Ci;
    if ([to, Dl, no].indexOf(U) !== -1 || g === nU || Q === io && oU.indexOf(g) !== -1 || g === mn && U === io || U === Pd || Ht.indexOf(U) !== -1 && g === Me || Ht.indexOf(g) !== -1 && U === Me || g === Ll && [zl, Qi, wi].indexOf(U) !== -1 || [zl, Qi, wi].indexOf(g) !== -1 && U === Kl || Ht.indexOf(g) !== -1 && $d.indexOf(U) !== -1 || $d.indexOf(g) !== -1 && Ht.indexOf(U) !== -1 || [Ll, Kl].indexOf(g) !== -1 && (U === Me || [bl, Dl].indexOf(U) !== -1 && n[d + 1] === Me) || [bl, Dl].indexOf(g) !== -1 && U === Me || g === Me && [Me, mn, Un].indexOf(U) !== -1)
        return UA;
    if ([Me, mn, Un, hi, Hl].indexOf(U) !== -1)
        for (var C = o; C >= 0; ) {
            var y = n[C];
            if (y === Me)
                return UA;
            if ([mn, Un].indexOf(y) !== -1)
                C--;
            else
                break
        }
    if ([Ll, Kl].indexOf(U) !== -1)
        for (var C = [hi, Hl].indexOf(g) !== -1 ? B : o; C >= 0; ) {
            var y = n[C];
            if (y === Me)
                return UA;
            if ([mn, Un].indexOf(y) !== -1)
                C--;
            else
                break
        }
    if (so === g && [so, Mi, lo, ro].indexOf(U) !== -1 || [Mi, lo].indexOf(g) !== -1 && [Mi, Ni].indexOf(U) !== -1 || [Ni, ro].indexOf(g) !== -1 && U === Ni || A0.indexOf(g) !== -1 && [Pd, Kl].indexOf(U) !== -1 || A0.indexOf(U) !== -1 && g === Ll || Ht.indexOf(g) !== -1 && Ht.indexOf(U) !== -1 || g === Un && Ht.indexOf(U) !== -1 || Ht.concat(Me).indexOf(g) !== -1 && U === bl && uU.indexOf(r[d]) === -1 || Ht.concat(Me).indexOf(U) !== -1 && g === Hl)
        return UA;
    if (g === Lc && U === Lc) {
        for (var I = i[o], D = 1; I > 0 && (I--,
        n[I] === Lc); )
            D++;
        if (D % 2 !== 0)
            return UA
    }
    return g === Qi && U === wi ? UA : Ci
}
  , gU = function(r, n) {
    n || (n = {
        lineBreak: "normal",
        wordBreak: "normal"
    });
    var i = fU(r, n.lineBreak)
      , l = i[0]
      , c = i[1]
      , o = i[2];
    (n.wordBreak === "break-all" || n.wordBreak === "break-word") && (c = c.map(function(d) {
        return [Me, Ta, q0].indexOf(d) !== -1 ? zl : d
    }));
    var B = n.wordBreak === "keep-all" ? o.map(function(d, g) {
        return d && r[g] >= 19968 && r[g] <= 40959
    }) : void 0;
    return [l, c, B]
}
  , dU = (function() {
    function r(n, i, l, c) {
        this.codePoints = n,
        this.required = i === W0,
        this.start = l,
        this.end = c
    }
    return r.prototype.slice = function() {
        return kA.apply(void 0, this.codePoints.slice(this.start, this.end))
    }
    ,
    r
}
)()
  , hU = function(r, n) {
    var i = Pi(r)
      , l = gU(i, n)
      , c = l[0]
      , o = l[1]
      , B = l[2]
      , d = i.length
      , g = 0
      , Q = 0;
    return {
        next: function() {
            if (Q >= d)
                return {
                    done: !0,
                    value: null
                };
            for (var U = UA; Q < d && (U = BU(i, o, c, ++Q, B)) === UA; )
                ;
            if (U !== UA || Q === d) {
                var C = new dU(i,U,g,Q);
                return g = Q,
                {
                    value: C,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}
  , QU = 1
  , wU = 2
  , Yl = 4
  , t0 = 8
  , _i = 10
  , a0 = 47
  , Ol = 92
  , CU = 9
  , UU = 32
  , Ui = 34
  , xl = 61
  , mU = 35
  , vU = 36
  , pU = 37
  , mi = 39
  , vi = 40
  , Sl = 41
  , FU = 95
  , ye = 45
  , yU = 33
  , EU = 60
  , HU = 62
  , bU = 64
  , xU = 91
  , SU = 93
  , TU = 61
  , DU = 123
  , pi = 63
  , KU = 125
  , n0 = 124
  , LU = 126
  , IU = 128
  , l0 = 65533
  , Mc = 42
  , Da = 43
  , MU = 44
  , NU = 58
  , OU = 59
  , jl = 46
  , RU = 0
  , _U = 8
  , GU = 11
  , VU = 14
  , zU = 31
  , jU = 127
  , rt = -1
  , $0 = 48
  , Ah = 97
  , eh = 101
  , XU = 102
  , YU = 117
  , JU = 122
  , th = 65
  , ah = 69
  , nh = 70
  , kU = 85
  , ZU = 90
  , ge = function(r) {
    return r >= $0 && r <= 57
}
  , qU = function(r) {
    return r >= 55296 && r <= 57343
}
  , vn = function(r) {
    return ge(r) || r >= th && r <= nh || r >= Ah && r <= XU
}
  , WU = function(r) {
    return r >= Ah && r <= JU
}
  , PU = function(r) {
    return r >= th && r <= ZU
}
  , $U = function(r) {
    return WU(r) || PU(r)
}
  , Am = function(r) {
    return r >= IU
}
  , Fi = function(r) {
    return r === _i || r === CU || r === UU
}
  , Gi = function(r) {
    return $U(r) || Am(r) || r === FU
}
  , r0 = function(r) {
    return Gi(r) || ge(r) || r === ye
}
  , em = function(r) {
    return r >= RU && r <= _U || r === GU || r >= VU && r <= zU || r === jU
}
  , na = function(r, n) {
    return r !== Ol ? !1 : n !== _i
}
  , yi = function(r, n, i) {
    return r === ye ? Gi(n) || na(n, i) : Gi(r) ? !0 : !!(r === Ol && na(r, n))
}
  , Nc = function(r, n, i) {
    return r === Da || r === ye ? ge(n) ? !0 : n === jl && ge(i) : ge(r === jl ? n : r)
}
  , tm = function(r) {
    var n = 0
      , i = 1;
    (r[n] === Da || r[n] === ye) && (r[n] === ye && (i = -1),
    n++);
    for (var l = []; ge(r[n]); )
        l.push(r[n++]);
    var c = l.length ? parseInt(kA.apply(void 0, l), 10) : 0;
    r[n] === jl && n++;
    for (var o = []; ge(r[n]); )
        o.push(r[n++]);
    var B = o.length
      , d = B ? parseInt(kA.apply(void 0, o), 10) : 0;
    (r[n] === ah || r[n] === eh) && n++;
    var g = 1;
    (r[n] === Da || r[n] === ye) && (r[n] === ye && (g = -1),
    n++);
    for (var Q = []; ge(r[n]); )
        Q.push(r[n++]);
    var U = Q.length ? parseInt(kA.apply(void 0, Q), 10) : 0;
    return i * (c + d * Math.pow(10, -B)) * Math.pow(10, g * U)
}
  , am = {
    type: 2
}
  , nm = {
    type: 3
}
  , lm = {
    type: 4
}
  , rm = {
    type: 13
}
  , im = {
    type: 8
}
  , sm = {
    type: 21
}
  , um = {
    type: 9
}
  , cm = {
    type: 10
}
  , om = {
    type: 11
}
  , fm = {
    type: 12
}
  , Bm = {
    type: 14
}
  , Ei = {
    type: 23
}
  , gm = {
    type: 1
}
  , dm = {
    type: 25
}
  , hm = {
    type: 24
}
  , Qm = {
    type: 26
}
  , wm = {
    type: 27
}
  , Cm = {
    type: 28
}
  , Um = {
    type: 29
}
  , mm = {
    type: 31
}
  , oo = {
    type: 32
}
  , lh = (function() {
    function r() {
        this._value = []
    }
    return r.prototype.write = function(n) {
        this._value = this._value.concat(Pi(n))
    }
    ,
    r.prototype.read = function() {
        for (var n = [], i = this.consumeToken(); i !== oo; )
            n.push(i),
            i = this.consumeToken();
        return n
    }
    ,
    r.prototype.consumeToken = function() {
        var n = this.consumeCodePoint();
        switch (n) {
        case Ui:
            return this.consumeStringToken(Ui);
        case mU:
            var i = this.peekCodePoint(0)
              , l = this.peekCodePoint(1)
              , c = this.peekCodePoint(2);
            if (r0(i) || na(l, c)) {
                var o = yi(i, l, c) ? wU : QU
                  , B = this.consumeName();
                return {
                    type: 5,
                    value: B,
                    flags: o
                }
            }
            break;
        case vU:
            if (this.peekCodePoint(0) === xl)
                return this.consumeCodePoint(),
                rm;
            break;
        case mi:
            return this.consumeStringToken(mi);
        case vi:
            return am;
        case Sl:
            return nm;
        case Mc:
            if (this.peekCodePoint(0) === xl)
                return this.consumeCodePoint(),
                Bm;
            break;
        case Da:
            if (Nc(n, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(n),
                this.consumeNumericToken();
            break;
        case MU:
            return lm;
        case ye:
            var d = n
              , g = this.peekCodePoint(0)
              , Q = this.peekCodePoint(1);
            if (Nc(d, g, Q))
                return this.reconsumeCodePoint(n),
                this.consumeNumericToken();
            if (yi(d, g, Q))
                return this.reconsumeCodePoint(n),
                this.consumeIdentLikeToken();
            if (g === ye && Q === HU)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                hm;
            break;
        case jl:
            if (Nc(n, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(n),
                this.consumeNumericToken();
            break;
        case a0:
            if (this.peekCodePoint(0) === Mc)
                for (this.consumeCodePoint(); ; ) {
                    var U = this.consumeCodePoint();
                    if (U === Mc && (U = this.consumeCodePoint(),
                    U === a0))
                        return this.consumeToken();
                    if (U === rt)
                        return this.consumeToken()
                }
            break;
        case NU:
            return Qm;
        case OU:
            return wm;
        case EU:
            if (this.peekCodePoint(0) === yU && this.peekCodePoint(1) === ye && this.peekCodePoint(2) === ye)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                dm;
            break;
        case bU:
            var C = this.peekCodePoint(0)
              , y = this.peekCodePoint(1)
              , I = this.peekCodePoint(2);
            if (yi(C, y, I)) {
                var B = this.consumeName();
                return {
                    type: 7,
                    value: B
                }
            }
            break;
        case xU:
            return Cm;
        case Ol:
            if (na(n, this.peekCodePoint(0)))
                return this.reconsumeCodePoint(n),
                this.consumeIdentLikeToken();
            break;
        case SU:
            return Um;
        case TU:
            if (this.peekCodePoint(0) === xl)
                return this.consumeCodePoint(),
                im;
            break;
        case DU:
            return om;
        case KU:
            return fm;
        case YU:
        case kU:
            var D = this.peekCodePoint(0)
              , L = this.peekCodePoint(1);
            return D === Da && (vn(L) || L === pi) && (this.consumeCodePoint(),
            this.consumeUnicodeRangeToken()),
            this.reconsumeCodePoint(n),
            this.consumeIdentLikeToken();
        case n0:
            if (this.peekCodePoint(0) === xl)
                return this.consumeCodePoint(),
                um;
            if (this.peekCodePoint(0) === n0)
                return this.consumeCodePoint(),
                sm;
            break;
        case LU:
            if (this.peekCodePoint(0) === xl)
                return this.consumeCodePoint(),
                cm;
            break;
        case rt:
            return oo
        }
        return Fi(n) ? (this.consumeWhiteSpace(),
        mm) : ge(n) ? (this.reconsumeCodePoint(n),
        this.consumeNumericToken()) : Gi(n) ? (this.reconsumeCodePoint(n),
        this.consumeIdentLikeToken()) : {
            type: 6,
            value: kA(n)
        }
    }
    ,
    r.prototype.consumeCodePoint = function() {
        var n = this._value.shift();
        return typeof n > "u" ? -1 : n
    }
    ,
    r.prototype.reconsumeCodePoint = function(n) {
        this._value.unshift(n)
    }
    ,
    r.prototype.peekCodePoint = function(n) {
        return n >= this._value.length ? -1 : this._value[n]
    }
    ,
    r.prototype.consumeUnicodeRangeToken = function() {
        for (var n = [], i = this.consumeCodePoint(); vn(i) && n.length < 6; )
            n.push(i),
            i = this.consumeCodePoint();
        for (var l = !1; i === pi && n.length < 6; )
            n.push(i),
            i = this.consumeCodePoint(),
            l = !0;
        if (l) {
            var c = parseInt(kA.apply(void 0, n.map(function(g) {
                return g === pi ? $0 : g
            })), 16)
              , o = parseInt(kA.apply(void 0, n.map(function(g) {
                return g === pi ? nh : g
            })), 16);
            return {
                type: 30,
                start: c,
                end: o
            }
        }
        var B = parseInt(kA.apply(void 0, n), 16);
        if (this.peekCodePoint(0) === ye && vn(this.peekCodePoint(1))) {
            this.consumeCodePoint(),
            i = this.consumeCodePoint();
            for (var d = []; vn(i) && d.length < 6; )
                d.push(i),
                i = this.consumeCodePoint();
            var o = parseInt(kA.apply(void 0, d), 16);
            return {
                type: 30,
                start: B,
                end: o
            }
        } else
            return {
                type: 30,
                start: B,
                end: B
            }
    }
    ,
    r.prototype.consumeIdentLikeToken = function() {
        var n = this.consumeName();
        return n.toLowerCase() === "url" && this.peekCodePoint(0) === vi ? (this.consumeCodePoint(),
        this.consumeUrlToken()) : this.peekCodePoint(0) === vi ? (this.consumeCodePoint(),
        {
            type: 19,
            value: n
        }) : {
            type: 20,
            value: n
        }
    }
    ,
    r.prototype.consumeUrlToken = function() {
        var n = [];
        if (this.consumeWhiteSpace(),
        this.peekCodePoint(0) === rt)
            return {
                type: 22,
                value: ""
            };
        var i = this.peekCodePoint(0);
        if (i === mi || i === Ui) {
            var l = this.consumeStringToken(this.consumeCodePoint());
            return l.type === 0 && (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === rt || this.peekCodePoint(0) === Sl) ? (this.consumeCodePoint(),
            {
                type: 22,
                value: l.value
            }) : (this.consumeBadUrlRemnants(),
            Ei)
        }
        for (; ; ) {
            var c = this.consumeCodePoint();
            if (c === rt || c === Sl)
                return {
                    type: 22,
                    value: kA.apply(void 0, n)
                };
            if (Fi(c))
                return this.consumeWhiteSpace(),
                this.peekCodePoint(0) === rt || this.peekCodePoint(0) === Sl ? (this.consumeCodePoint(),
                {
                    type: 22,
                    value: kA.apply(void 0, n)
                }) : (this.consumeBadUrlRemnants(),
                Ei);
            if (c === Ui || c === mi || c === vi || em(c))
                return this.consumeBadUrlRemnants(),
                Ei;
            if (c === Ol)
                if (na(c, this.peekCodePoint(0)))
                    n.push(this.consumeEscapedCodePoint());
                else
                    return this.consumeBadUrlRemnants(),
                    Ei;
            else
                n.push(c)
        }
    }
    ,
    r.prototype.consumeWhiteSpace = function() {
        for (; Fi(this.peekCodePoint(0)); )
            this.consumeCodePoint()
    }
    ,
    r.prototype.consumeBadUrlRemnants = function() {
        for (; ; ) {
            var n = this.consumeCodePoint();
            if (n === Sl || n === rt)
                return;
            na(n, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
        }
    }
    ,
    r.prototype.consumeStringSlice = function(n) {
        for (var i = 5e4, l = ""; n > 0; ) {
            var c = Math.min(i, n);
            l += kA.apply(void 0, this._value.splice(0, c)),
            n -= c
        }
        return this._value.shift(),
        l
    }
    ,
    r.prototype.consumeStringToken = function(n) {
        var i = ""
          , l = 0;
        do {
            var c = this._value[l];
            if (c === rt || c === void 0 || c === n)
                return i += this.consumeStringSlice(l),
                {
                    type: 0,
                    value: i
                };
            if (c === _i)
                return this._value.splice(0, l),
                gm;
            if (c === Ol) {
                var o = this._value[l + 1];
                o !== rt && o !== void 0 && (o === _i ? (i += this.consumeStringSlice(l),
                l = -1,
                this._value.shift()) : na(c, o) && (i += this.consumeStringSlice(l),
                i += kA(this.consumeEscapedCodePoint()),
                l = -1))
            }
            l++
        } while (!0)
    }
    ,
    r.prototype.consumeNumber = function() {
        var n = []
          , i = Yl
          , l = this.peekCodePoint(0);
        for ((l === Da || l === ye) && n.push(this.consumeCodePoint()); ge(this.peekCodePoint(0)); )
            n.push(this.consumeCodePoint());
        l = this.peekCodePoint(0);
        var c = this.peekCodePoint(1);
        if (l === jl && ge(c))
            for (n.push(this.consumeCodePoint(), this.consumeCodePoint()),
            i = t0; ge(this.peekCodePoint(0)); )
                n.push(this.consumeCodePoint());
        l = this.peekCodePoint(0),
        c = this.peekCodePoint(1);
        var o = this.peekCodePoint(2);
        if ((l === ah || l === eh) && ((c === Da || c === ye) && ge(o) || ge(c)))
            for (n.push(this.consumeCodePoint(), this.consumeCodePoint()),
            i = t0; ge(this.peekCodePoint(0)); )
                n.push(this.consumeCodePoint());
        return [tm(n), i]
    }
    ,
    r.prototype.consumeNumericToken = function() {
        var n = this.consumeNumber()
          , i = n[0]
          , l = n[1]
          , c = this.peekCodePoint(0)
          , o = this.peekCodePoint(1)
          , B = this.peekCodePoint(2);
        if (yi(c, o, B)) {
            var d = this.consumeName();
            return {
                type: 15,
                number: i,
                flags: l,
                unit: d
            }
        }
        return c === pU ? (this.consumeCodePoint(),
        {
            type: 16,
            number: i,
            flags: l
        }) : {
            type: 17,
            number: i,
            flags: l
        }
    }
    ,
    r.prototype.consumeEscapedCodePoint = function() {
        var n = this.consumeCodePoint();
        if (vn(n)) {
            for (var i = kA(n); vn(this.peekCodePoint(0)) && i.length < 6; )
                i += kA(this.consumeCodePoint());
            Fi(this.peekCodePoint(0)) && this.consumeCodePoint();
            var l = parseInt(i, 16);
            return l === 0 || qU(l) || l > 1114111 ? l0 : l
        }
        return n === rt ? l0 : n
    }
    ,
    r.prototype.consumeName = function() {
        for (var n = ""; ; ) {
            var i = this.consumeCodePoint();
            if (r0(i))
                n += kA(i);
            else if (na(i, this.peekCodePoint(0)))
                n += kA(this.consumeEscapedCodePoint());
            else
                return this.reconsumeCodePoint(i),
                n
        }
    }
    ,
    r
}
)()
  , rh = (function() {
    function r(n) {
        this._tokens = n
    }
    return r.create = function(n) {
        var i = new lh;
        return i.write(n),
        new r(i.read())
    }
    ,
    r.parseValue = function(n) {
        return r.create(n).parseComponentValue()
    }
    ,
    r.parseValues = function(n) {
        return r.create(n).parseComponentValues()
    }
    ,
    r.prototype.parseComponentValue = function() {
        for (var n = this.consumeToken(); n.type === 31; )
            n = this.consumeToken();
        if (n.type === 32)
            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        this.reconsumeToken(n);
        var i = this.consumeComponentValue();
        do
            n = this.consumeToken();
        while (n.type === 31);
        if (n.type === 32)
            return i;
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }
    ,
    r.prototype.parseComponentValues = function() {
        for (var n = []; ; ) {
            var i = this.consumeComponentValue();
            if (i.type === 32)
                return n;
            n.push(i),
            n.push()
        }
    }
    ,
    r.prototype.consumeComponentValue = function() {
        var n = this.consumeToken();
        switch (n.type) {
        case 11:
        case 28:
        case 2:
            return this.consumeSimpleBlock(n.type);
        case 19:
            return this.consumeFunction(n)
        }
        return n
    }
    ,
    r.prototype.consumeSimpleBlock = function(n) {
        for (var i = {
            type: n,
            values: []
        }, l = this.consumeToken(); ; ) {
            if (l.type === 32 || pm(l, n))
                return i;
            this.reconsumeToken(l),
            i.values.push(this.consumeComponentValue()),
            l = this.consumeToken()
        }
    }
    ,
    r.prototype.consumeFunction = function(n) {
        for (var i = {
            name: n.value,
            values: [],
            type: 18
        }; ; ) {
            var l = this.consumeToken();
            if (l.type === 32 || l.type === 3)
                return i;
            this.reconsumeToken(l),
            i.values.push(this.consumeComponentValue())
        }
    }
    ,
    r.prototype.consumeToken = function() {
        var n = this._tokens.shift();
        return typeof n > "u" ? oo : n
    }
    ,
    r.prototype.reconsumeToken = function(n) {
        this._tokens.unshift(n)
    }
    ,
    r
}
)()
  , Jl = function(r) {
    return r.type === 15
}
  , Tn = function(r) {
    return r.type === 17
}
  , KA = function(r) {
    return r.type === 20
}
  , vm = function(r) {
    return r.type === 0
}
  , fo = function(r, n) {
    return KA(r) && r.value === n
}
  , ih = function(r) {
    return r.type !== 31
}
  , Sn = function(r) {
    return r.type !== 31 && r.type !== 4
}
  , it = function(r) {
    var n = []
      , i = [];
    return r.forEach(function(l) {
        if (l.type === 4) {
            if (i.length === 0)
                throw new Error("Error parsing function args, zero tokens for arg");
            n.push(i),
            i = [];
            return
        }
        l.type !== 31 && i.push(l)
    }),
    i.length && n.push(i),
    n
}
  , pm = function(r, n) {
    return n === 11 && r.type === 12 || n === 28 && r.type === 29 ? !0 : n === 2 && r.type === 3
}
  , ca = function(r) {
    return r.type === 17 || r.type === 15
}
  , $A = function(r) {
    return r.type === 16 || ca(r)
}
  , sh = function(r) {
    return r.length > 1 ? [r[0], r[1]] : [r[0]]
}
  , oe = {
    type: 17,
    number: 0,
    flags: Yl
}
  , yo = {
    type: 16,
    number: 50,
    flags: Yl
}
  , ra = {
    type: 16,
    number: 100,
    flags: Yl
}
  , Il = function(r, n, i) {
    var l = r[0]
      , c = r[1];
    return [IA(l, n), IA(typeof c < "u" ? c : l, i)]
}
  , IA = function(r, n) {
    if (r.type === 16)
        return r.number / 100 * n;
    if (Jl(r))
        switch (r.unit) {
        case "rem":
        case "em":
            return 16 * r.number;
        case "px":
        default:
            return r.number
        }
    return r.number
}
  , uh = "deg"
  , ch = "grad"
  , oh = "rad"
  , fh = "turn"
  , $i = {
    name: "angle",
    parse: function(r, n) {
        if (n.type === 15)
            switch (n.unit) {
            case uh:
                return Math.PI * n.number / 180;
            case ch:
                return Math.PI / 200 * n.number;
            case oh:
                return n.number;
            case fh:
                return Math.PI * 2 * n.number
            }
        throw new Error("Unsupported angle type")
    }
}
  , Bh = function(r) {
    return r.type === 15 && (r.unit === uh || r.unit === ch || r.unit === oh || r.unit === fh)
}
  , gh = function(r) {
    var n = r.filter(KA).map(function(i) {
        return i.value
    }).join(" ");
    switch (n) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
        return [oe, oe];
    case "to top":
    case "bottom":
        return Ze(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
        return [oe, ra];
    case "to right":
    case "left":
        return Ze(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
        return [ra, ra];
    case "to bottom":
    case "top":
        return Ze(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
        return [ra, oe];
    case "to left":
    case "right":
        return Ze(270)
    }
    return 0
}
  , Ze = function(r) {
    return Math.PI * r / 180
}
  , sa = {
    name: "color",
    parse: function(r, n) {
        if (n.type === 18) {
            var i = Fm[n.name];
            if (typeof i > "u")
                throw new Error('Attempting to parse an unsupported color function "' + n.name + '"');
            return i(r, n.values)
        }
        if (n.type === 5) {
            if (n.value.length === 3) {
                var l = n.value.substring(0, 1)
                  , c = n.value.substring(1, 2)
                  , o = n.value.substring(2, 3);
                return ia(parseInt(l + l, 16), parseInt(c + c, 16), parseInt(o + o, 16), 1)
            }
            if (n.value.length === 4) {
                var l = n.value.substring(0, 1)
                  , c = n.value.substring(1, 2)
                  , o = n.value.substring(2, 3)
                  , B = n.value.substring(3, 4);
                return ia(parseInt(l + l, 16), parseInt(c + c, 16), parseInt(o + o, 16), parseInt(B + B, 16) / 255)
            }
            if (n.value.length === 6) {
                var l = n.value.substring(0, 2)
                  , c = n.value.substring(2, 4)
                  , o = n.value.substring(4, 6);
                return ia(parseInt(l, 16), parseInt(c, 16), parseInt(o, 16), 1)
            }
            if (n.value.length === 8) {
                var l = n.value.substring(0, 2)
                  , c = n.value.substring(2, 4)
                  , o = n.value.substring(4, 6)
                  , B = n.value.substring(6, 8);
                return ia(parseInt(l, 16), parseInt(c, 16), parseInt(o, 16), parseInt(B, 16) / 255)
            }
        }
        if (n.type === 20) {
            var d = xt[n.value.toUpperCase()];
            if (typeof d < "u")
                return d
        }
        return xt.TRANSPARENT
    }
}
  , ua = function(r) {
    return (255 & r) === 0
}
  , ne = function(r) {
    var n = 255 & r
      , i = 255 & r >> 8
      , l = 255 & r >> 16
      , c = 255 & r >> 24;
    return n < 255 ? "rgba(" + c + "," + l + "," + i + "," + n / 255 + ")" : "rgb(" + c + "," + l + "," + i + ")"
}
  , ia = function(r, n, i, l) {
    return (r << 24 | n << 16 | i << 8 | Math.round(l * 255) << 0) >>> 0
}
  , i0 = function(r, n) {
    if (r.type === 17)
        return r.number;
    if (r.type === 16) {
        var i = n === 3 ? 1 : 255;
        return n === 3 ? r.number / 100 * i : Math.round(r.number / 100 * i)
    }
    return 0
}
  , s0 = function(r, n) {
    var i = n.filter(Sn);
    if (i.length === 3) {
        var l = i.map(i0)
          , c = l[0]
          , o = l[1]
          , B = l[2];
        return ia(c, o, B, 1)
    }
    if (i.length === 4) {
        var d = i.map(i0)
          , c = d[0]
          , o = d[1]
          , B = d[2]
          , g = d[3];
        return ia(c, o, B, g)
    }
    return 0
};
function Oc(r, n, i) {
    return i < 0 && (i += 1),
    i >= 1 && (i -= 1),
    i < 1 / 6 ? (n - r) * i * 6 + r : i < 1 / 2 ? n : i < 2 / 3 ? (n - r) * 6 * (2 / 3 - i) + r : r
}
var u0 = function(r, n) {
    var i = n.filter(Sn)
      , l = i[0]
      , c = i[1]
      , o = i[2]
      , B = i[3]
      , d = (l.type === 17 ? Ze(l.number) : $i.parse(r, l)) / (Math.PI * 2)
      , g = $A(c) ? c.number / 100 : 0
      , Q = $A(o) ? o.number / 100 : 0
      , U = typeof B < "u" && $A(B) ? IA(B, 1) : 1;
    if (g === 0)
        return ia(Q * 255, Q * 255, Q * 255, 1);
    var C = Q <= .5 ? Q * (g + 1) : Q + g - Q * g
      , y = Q * 2 - C
      , I = Oc(y, C, d + 1 / 3)
      , D = Oc(y, C, d)
      , L = Oc(y, C, d - 1 / 3);
    return ia(I * 255, D * 255, L * 255, U)
}
  , Fm = {
    hsl: u0,
    hsla: u0,
    rgb: s0,
    rgba: s0
}
  , Rl = function(r, n) {
    return sa.parse(r, rh.create(n).parseComponentValue())
}
  , xt = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
}
  , ym = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return n.map(function(i) {
            if (KA(i))
                switch (i.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}
  , Em = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , As = function(r, n) {
    var i = sa.parse(r, n[0])
      , l = n[1];
    return l && $A(l) ? {
        color: i,
        stop: l
    } : {
        color: i,
        stop: null
    }
}
  , c0 = function(r, n) {
    var i = r[0]
      , l = r[r.length - 1];
    i.stop === null && (i.stop = oe),
    l.stop === null && (l.stop = ra);
    for (var c = [], o = 0, B = 0; B < r.length; B++) {
        var d = r[B].stop;
        if (d !== null) {
            var g = IA(d, n);
            g > o ? c.push(g) : c.push(o),
            o = g
        } else
            c.push(null)
    }
    for (var Q = null, B = 0; B < c.length; B++) {
        var U = c[B];
        if (U === null)
            Q === null && (Q = B);
        else if (Q !== null) {
            for (var C = B - Q, y = c[Q - 1], I = (U - y) / (C + 1), D = 1; D <= C; D++)
                c[Q + D - 1] = I * D;
            Q = null
        }
    }
    return r.map(function(L, X) {
        var _ = L.color;
        return {
            color: _,
            stop: Math.max(Math.min(1, c[X] / n), 0)
        }
    })
}
  , Hm = function(r, n, i) {
    var l = n / 2
      , c = i / 2
      , o = IA(r[0], n) - l
      , B = c - IA(r[1], i);
    return (Math.atan2(B, o) + Math.PI * 2) % (Math.PI * 2)
}
  , bm = function(r, n, i) {
    var l = typeof r == "number" ? r : Hm(r, n, i)
      , c = Math.abs(n * Math.sin(l)) + Math.abs(i * Math.cos(l))
      , o = n / 2
      , B = i / 2
      , d = c / 2
      , g = Math.sin(l - Math.PI / 2) * d
      , Q = Math.cos(l - Math.PI / 2) * d;
    return [c, o - Q, o + Q, B - g, B + g]
}
  , At = function(r, n) {
    return Math.sqrt(r * r + n * n)
}
  , o0 = function(r, n, i, l, c) {
    var o = [[0, 0], [0, n], [r, 0], [r, n]];
    return o.reduce(function(B, d) {
        var g = d[0]
          , Q = d[1]
          , U = At(i - g, l - Q);
        return (c ? U < B.optimumDistance : U > B.optimumDistance) ? {
            optimumCorner: d,
            optimumDistance: U
        } : B
    }, {
        optimumDistance: c ? 1 / 0 : -1 / 0,
        optimumCorner: null
    }).optimumCorner
}
  , xm = function(r, n, i, l, c) {
    var o = 0
      , B = 0;
    switch (r.size) {
    case 0:
        r.shape === 0 ? o = B = Math.min(Math.abs(n), Math.abs(n - l), Math.abs(i), Math.abs(i - c)) : r.shape === 1 && (o = Math.min(Math.abs(n), Math.abs(n - l)),
        B = Math.min(Math.abs(i), Math.abs(i - c)));
        break;
    case 2:
        if (r.shape === 0)
            o = B = Math.min(At(n, i), At(n, i - c), At(n - l, i), At(n - l, i - c));
        else if (r.shape === 1) {
            var d = Math.min(Math.abs(i), Math.abs(i - c)) / Math.min(Math.abs(n), Math.abs(n - l))
              , g = o0(l, c, n, i, !0)
              , Q = g[0]
              , U = g[1];
            o = At(Q - n, (U - i) / d),
            B = d * o
        }
        break;
    case 1:
        r.shape === 0 ? o = B = Math.max(Math.abs(n), Math.abs(n - l), Math.abs(i), Math.abs(i - c)) : r.shape === 1 && (o = Math.max(Math.abs(n), Math.abs(n - l)),
        B = Math.max(Math.abs(i), Math.abs(i - c)));
        break;
    case 3:
        if (r.shape === 0)
            o = B = Math.max(At(n, i), At(n, i - c), At(n - l, i), At(n - l, i - c));
        else if (r.shape === 1) {
            var d = Math.max(Math.abs(i), Math.abs(i - c)) / Math.max(Math.abs(n), Math.abs(n - l))
              , C = o0(l, c, n, i, !1)
              , Q = C[0]
              , U = C[1];
            o = At(Q - n, (U - i) / d),
            B = d * o
        }
        break
    }
    return Array.isArray(r.size) && (o = IA(r.size[0], l),
    B = r.size.length === 2 ? IA(r.size[1], c) : o),
    [o, B]
}
  , Sm = function(r, n) {
    var i = Ze(180)
      , l = [];
    return it(n).forEach(function(c, o) {
        if (o === 0) {
            var B = c[0];
            if (B.type === 20 && B.value === "to") {
                i = gh(c);
                return
            } else if (Bh(B)) {
                i = $i.parse(r, B);
                return
            }
        }
        var d = As(r, c);
        l.push(d)
    }),
    {
        angle: i,
        stops: l,
        type: 1
    }
}
  , Hi = function(r, n) {
    var i = Ze(180)
      , l = [];
    return it(n).forEach(function(c, o) {
        if (o === 0) {
            var B = c[0];
            if (B.type === 20 && ["top", "left", "right", "bottom"].indexOf(B.value) !== -1) {
                i = gh(c);
                return
            } else if (Bh(B)) {
                i = ($i.parse(r, B) + Ze(270)) % Ze(360);
                return
            }
        }
        var d = As(r, c);
        l.push(d)
    }),
    {
        angle: i,
        stops: l,
        type: 1
    }
}
  , Tm = function(r, n) {
    var i = Ze(180)
      , l = []
      , c = 1
      , o = 0
      , B = 3
      , d = [];
    return it(n).forEach(function(g, Q) {
        var U = g[0];
        if (Q === 0) {
            if (KA(U) && U.value === "linear") {
                c = 1;
                return
            } else if (KA(U) && U.value === "radial") {
                c = 2;
                return
            }
        }
        if (U.type === 18) {
            if (U.name === "from") {
                var C = sa.parse(r, U.values[0]);
                l.push({
                    stop: oe,
                    color: C
                })
            } else if (U.name === "to") {
                var C = sa.parse(r, U.values[0]);
                l.push({
                    stop: ra,
                    color: C
                })
            } else if (U.name === "color-stop") {
                var y = U.values.filter(Sn);
                if (y.length === 2) {
                    var C = sa.parse(r, y[1])
                      , I = y[0];
                    Tn(I) && l.push({
                        stop: {
                            type: 16,
                            number: I.number * 100,
                            flags: I.flags
                        },
                        color: C
                    })
                }
            }
        }
    }),
    c === 1 ? {
        angle: (i + Ze(180)) % Ze(360),
        stops: l,
        type: c
    } : {
        size: B,
        shape: o,
        stops: l,
        position: d,
        type: c
    }
}
  , dh = "closest-side"
  , hh = "farthest-side"
  , Qh = "closest-corner"
  , wh = "farthest-corner"
  , Ch = "circle"
  , Uh = "ellipse"
  , mh = "cover"
  , vh = "contain"
  , Dm = function(r, n) {
    var i = 0
      , l = 3
      , c = []
      , o = [];
    return it(n).forEach(function(B, d) {
        var g = !0;
        if (d === 0) {
            var Q = !1;
            g = B.reduce(function(C, y) {
                if (Q)
                    if (KA(y))
                        switch (y.value) {
                        case "center":
                            return o.push(yo),
                            C;
                        case "top":
                        case "left":
                            return o.push(oe),
                            C;
                        case "right":
                        case "bottom":
                            return o.push(ra),
                            C
                        }
                    else
                        ($A(y) || ca(y)) && o.push(y);
                else if (KA(y))
                    switch (y.value) {
                    case Ch:
                        return i = 0,
                        !1;
                    case Uh:
                        return i = 1,
                        !1;
                    case "at":
                        return Q = !0,
                        !1;
                    case dh:
                        return l = 0,
                        !1;
                    case mh:
                    case hh:
                        return l = 1,
                        !1;
                    case vh:
                    case Qh:
                        return l = 2,
                        !1;
                    case wh:
                        return l = 3,
                        !1
                    }
                else if (ca(y) || $A(y))
                    return Array.isArray(l) || (l = []),
                    l.push(y),
                    !1;
                return C
            }, g)
        }
        if (g) {
            var U = As(r, B);
            c.push(U)
        }
    }),
    {
        size: l,
        shape: i,
        stops: c,
        position: o,
        type: 2
    }
}
  , bi = function(r, n) {
    var i = 0
      , l = 3
      , c = []
      , o = [];
    return it(n).forEach(function(B, d) {
        var g = !0;
        if (d === 0 ? g = B.reduce(function(U, C) {
            if (KA(C))
                switch (C.value) {
                case "center":
                    return o.push(yo),
                    !1;
                case "top":
                case "left":
                    return o.push(oe),
                    !1;
                case "right":
                case "bottom":
                    return o.push(ra),
                    !1
                }
            else if ($A(C) || ca(C))
                return o.push(C),
                !1;
            return U
        }, g) : d === 1 && (g = B.reduce(function(U, C) {
            if (KA(C))
                switch (C.value) {
                case Ch:
                    return i = 0,
                    !1;
                case Uh:
                    return i = 1,
                    !1;
                case vh:
                case dh:
                    return l = 0,
                    !1;
                case hh:
                    return l = 1,
                    !1;
                case Qh:
                    return l = 2,
                    !1;
                case mh:
                case wh:
                    return l = 3,
                    !1
                }
            else if (ca(C) || $A(C))
                return Array.isArray(l) || (l = []),
                l.push(C),
                !1;
            return U
        }, g)),
        g) {
            var Q = As(r, B);
            c.push(Q)
        }
    }),
    {
        size: l,
        shape: i,
        stops: c,
        position: o,
        type: 2
    }
}
  , Km = function(r) {
    return r.type === 1
}
  , Lm = function(r) {
    return r.type === 2
}
  , Eo = {
    name: "image",
    parse: function(r, n) {
        if (n.type === 22) {
            var i = {
                url: n.value,
                type: 0
            };
            return r.cache.addImage(n.value),
            i
        }
        if (n.type === 18) {
            var l = ph[n.name];
            if (typeof l > "u")
                throw new Error('Attempting to parse an unsupported image function "' + n.name + '"');
            return l(r, n.values)
        }
        throw new Error("Unsupported image type " + n.type)
    }
};
function Im(r) {
    return !(r.type === 20 && r.value === "none") && (r.type !== 18 || !!ph[r.name])
}
var ph = {
    "linear-gradient": Sm,
    "-moz-linear-gradient": Hi,
    "-ms-linear-gradient": Hi,
    "-o-linear-gradient": Hi,
    "-webkit-linear-gradient": Hi,
    "radial-gradient": Dm,
    "-moz-radial-gradient": bi,
    "-ms-radial-gradient": bi,
    "-o-radial-gradient": bi,
    "-webkit-radial-gradient": bi,
    "-webkit-gradient": Tm
}, Mm = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(r, n) {
        if (n.length === 0)
            return [];
        var i = n[0];
        return i.type === 20 && i.value === "none" ? [] : n.filter(function(l) {
            return Sn(l) && Im(l)
        }).map(function(l) {
            return Eo.parse(r, l)
        })
    }
}, Nm = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return n.map(function(i) {
            if (KA(i))
                switch (i.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}, Om = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function(r, n) {
        return it(n).map(function(i) {
            return i.filter($A)
        }).map(sh)
    }
}, Rm = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return it(n).map(function(i) {
            return i.filter(KA).map(function(l) {
                return l.value
            }).join(" ")
        }).map(_m)
    }
}, _m = function(r) {
    switch (r) {
    case "no-repeat":
        return 1;
    case "repeat-x":
    case "repeat no-repeat":
        return 2;
    case "repeat-y":
    case "no-repeat repeat":
        return 3;
    case "repeat":
    default:
        return 0
    }
}, xn;
(function(r) {
    r.AUTO = "auto",
    r.CONTAIN = "contain",
    r.COVER = "cover"
}
)(xn || (xn = {}));
var Gm = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return it(n).map(function(i) {
            return i.filter(Vm)
        })
    }
}, Vm = function(r) {
    return KA(r) || $A(r)
}, es = function(r) {
    return {
        name: "border-" + r + "-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }
}, zm = es("top"), jm = es("right"), Xm = es("bottom"), Ym = es("left"), ts = function(r) {
    return {
        name: "border-radius-" + r,
        initialValue: "0 0",
        prefix: !1,
        type: 1,
        parse: function(n, i) {
            return sh(i.filter($A))
        }
    }
}, Jm = ts("top-left"), km = ts("top-right"), Zm = ts("bottom-right"), qm = ts("bottom-left"), as = function(r) {
    return {
        name: "border-" + r + "-style",
        initialValue: "solid",
        prefix: !1,
        type: 2,
        parse: function(n, i) {
            switch (i) {
            case "none":
                return 0;
            case "dashed":
                return 2;
            case "dotted":
                return 3;
            case "double":
                return 4
            }
            return 1
        }
    }
}, Wm = as("top"), Pm = as("right"), $m = as("bottom"), Av = as("left"), ns = function(r) {
    return {
        name: "border-" + r + "-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(n, i) {
            return Jl(i) ? i.number : 0
        }
    }
}, ev = ns("top"), tv = ns("right"), av = ns("bottom"), nv = ns("left"), lv = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}, rv = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "rtl":
            return 1;
        case "ltr":
        default:
            return 0
        }
    }
}, iv = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return n.filter(KA).reduce(function(i, l) {
            return i | sv(l.value)
        }, 0)
    }
}, sv = function(r) {
    switch (r) {
    case "block":
    case "-webkit-box":
        return 2;
    case "inline":
        return 4;
    case "run-in":
        return 8;
    case "flow":
        return 16;
    case "flow-root":
        return 32;
    case "table":
        return 64;
    case "flex":
    case "-webkit-flex":
        return 128;
    case "grid":
    case "-ms-grid":
        return 256;
    case "ruby":
        return 512;
    case "subgrid":
        return 1024;
    case "list-item":
        return 2048;
    case "table-row-group":
        return 4096;
    case "table-header-group":
        return 8192;
    case "table-footer-group":
        return 16384;
    case "table-row":
        return 32768;
    case "table-cell":
        return 65536;
    case "table-column-group":
        return 131072;
    case "table-column":
        return 262144;
    case "table-caption":
        return 524288;
    case "ruby-base":
        return 1048576;
    case "ruby-text":
        return 2097152;
    case "ruby-base-container":
        return 4194304;
    case "ruby-text-container":
        return 8388608;
    case "contents":
        return 16777216;
    case "inline-block":
        return 33554432;
    case "inline-list-item":
        return 67108864;
    case "inline-table":
        return 134217728;
    case "inline-flex":
        return 268435456;
    case "inline-grid":
        return 536870912
    }
    return 0
}, uv = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "inline-start":
            return 3;
        case "inline-end":
            return 4
        }
        return 0
    }
}, cv = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function(r, n) {
        return n.type === 20 && n.value === "normal" ? 0 : n.type === 17 || n.type === 15 ? n.number : 0
    }
}, Vi;
(function(r) {
    r.NORMAL = "normal",
    r.STRICT = "strict"
}
)(Vi || (Vi = {}));
var ov = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "strict":
            return Vi.STRICT;
        case "normal":
        default:
            return Vi.NORMAL
        }
    }
}, fv = {
    name: "line-height",
    initialValue: "normal",
    prefix: !1,
    type: 4
}, f0 = function(r, n) {
    return KA(r) && r.value === "normal" ? 1.2 * n : r.type === 17 ? n * r.number : $A(r) ? IA(r, n) : n
}, Bv = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function(r, n) {
        return n.type === 20 && n.value === "none" ? null : Eo.parse(r, n)
    }
}, gv = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "inside":
            return 0;
        case "outside":
        default:
            return 1
        }
    }
}, Bo = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "disc":
            return 0;
        case "circle":
            return 1;
        case "square":
            return 2;
        case "decimal":
            return 3;
        case "cjk-decimal":
            return 4;
        case "decimal-leading-zero":
            return 5;
        case "lower-roman":
            return 6;
        case "upper-roman":
            return 7;
        case "lower-greek":
            return 8;
        case "lower-alpha":
            return 9;
        case "upper-alpha":
            return 10;
        case "arabic-indic":
            return 11;
        case "armenian":
            return 12;
        case "bengali":
            return 13;
        case "cambodian":
            return 14;
        case "cjk-earthly-branch":
            return 15;
        case "cjk-heavenly-stem":
            return 16;
        case "cjk-ideographic":
            return 17;
        case "devanagari":
            return 18;
        case "ethiopic-numeric":
            return 19;
        case "georgian":
            return 20;
        case "gujarati":
            return 21;
        case "gurmukhi":
            return 22;
        case "hebrew":
            return 22;
        case "hiragana":
            return 23;
        case "hiragana-iroha":
            return 24;
        case "japanese-formal":
            return 25;
        case "japanese-informal":
            return 26;
        case "kannada":
            return 27;
        case "katakana":
            return 28;
        case "katakana-iroha":
            return 29;
        case "khmer":
            return 30;
        case "korean-hangul-formal":
            return 31;
        case "korean-hanja-formal":
            return 32;
        case "korean-hanja-informal":
            return 33;
        case "lao":
            return 34;
        case "lower-armenian":
            return 35;
        case "malayalam":
            return 36;
        case "mongolian":
            return 37;
        case "myanmar":
            return 38;
        case "oriya":
            return 39;
        case "persian":
            return 40;
        case "simp-chinese-formal":
            return 41;
        case "simp-chinese-informal":
            return 42;
        case "tamil":
            return 43;
        case "telugu":
            return 44;
        case "thai":
            return 45;
        case "tibetan":
            return 46;
        case "trad-chinese-formal":
            return 47;
        case "trad-chinese-informal":
            return 48;
        case "upper-armenian":
            return 49;
        case "disclosure-open":
            return 50;
        case "disclosure-closed":
            return 51;
        case "none":
        default:
            return -1
        }
    }
}, ls = function(r) {
    return {
        name: "margin-" + r,
        initialValue: "0",
        prefix: !1,
        type: 4
    }
}, dv = ls("top"), hv = ls("right"), Qv = ls("bottom"), wv = ls("left"), Cv = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return n.filter(KA).map(function(i) {
            switch (i.value) {
            case "hidden":
                return 1;
            case "scroll":
                return 2;
            case "clip":
                return 3;
            case "auto":
                return 4;
            case "visible":
            default:
                return 0
            }
        })
    }
}, Uv = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "break-word":
            return "break-word";
        case "normal":
        default:
            return "normal"
        }
    }
}, rs = function(r) {
    return {
        name: "padding-" + r,
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length-percentage"
    }
}, mv = rs("top"), vv = rs("right"), pv = rs("bottom"), Fv = rs("left"), yv = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "right":
            return 2;
        case "center":
        case "justify":
            return 1;
        case "left":
        default:
            return 0
        }
    }
}, Ev = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "relative":
            return 1;
        case "absolute":
            return 2;
        case "fixed":
            return 3;
        case "sticky":
            return 4
        }
        return 0
    }
}, Hv = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(r, n) {
        return n.length === 1 && fo(n[0], "none") ? [] : it(n).map(function(i) {
            for (var l = {
                color: xt.TRANSPARENT,
                offsetX: oe,
                offsetY: oe,
                blur: oe
            }, c = 0, o = 0; o < i.length; o++) {
                var B = i[o];
                ca(B) ? (c === 0 ? l.offsetX = B : c === 1 ? l.offsetY = B : l.blur = B,
                c++) : l.color = sa.parse(r, B)
            }
            return l
        })
    }
}, bv = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "uppercase":
            return 2;
        case "lowercase":
            return 1;
        case "capitalize":
            return 3
        }
        return 0
    }
}, xv = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function(r, n) {
        if (n.type === 20 && n.value === "none")
            return null;
        if (n.type === 18) {
            var i = Dv[n.name];
            if (typeof i > "u")
                throw new Error('Attempting to parse an unsupported transform function "' + n.name + '"');
            return i(n.values)
        }
        return null
    }
}, Sv = function(r) {
    var n = r.filter(function(i) {
        return i.type === 17
    }).map(function(i) {
        return i.number
    });
    return n.length === 6 ? n : null
}, Tv = function(r) {
    var n = r.filter(function(g) {
        return g.type === 17
    }).map(function(g) {
        return g.number
    })
      , i = n[0]
      , l = n[1];
    n[2],
    n[3];
    var c = n[4]
      , o = n[5];
    n[6],
    n[7],
    n[8],
    n[9],
    n[10],
    n[11];
    var B = n[12]
      , d = n[13];
    return n[14],
    n[15],
    n.length === 16 ? [i, l, c, o, B, d] : null
}, Dv = {
    matrix: Sv,
    matrix3d: Tv
}, B0 = {
    type: 16,
    number: 50,
    flags: Yl
}, Kv = [B0, B0], Lv = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function(r, n) {
        var i = n.filter($A);
        return i.length !== 2 ? Kv : [i[0], i[1]]
    }
}, Iv = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "hidden":
            return 1;
        case "collapse":
            return 2;
        case "visible":
        default:
            return 0
        }
    }
}, _l;
(function(r) {
    r.NORMAL = "normal",
    r.BREAK_ALL = "break-all",
    r.KEEP_ALL = "keep-all"
}
)(_l || (_l = {}));
var Mv = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "break-all":
            return _l.BREAK_ALL;
        case "keep-all":
            return _l.KEEP_ALL;
        case "normal":
        default:
            return _l.NORMAL
        }
    }
}
  , Nv = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function(r, n) {
        if (n.type === 20)
            return {
                auto: !0,
                order: 0
            };
        if (Tn(n))
            return {
                auto: !1,
                order: n.number
            };
        throw new Error("Invalid z-index number parsed")
    }
}
  , Fh = {
    name: "time",
    parse: function(r, n) {
        if (n.type === 15)
            switch (n.unit.toLowerCase()) {
            case "s":
                return 1e3 * n.number;
            case "ms":
                return n.number
            }
        throw new Error("Unsupported time type")
    }
}
  , Ov = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function(r, n) {
        return Tn(n) ? n.number : 1
    }
}
  , Rv = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , _v = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return n.filter(KA).map(function(i) {
            switch (i.value) {
            case "underline":
                return 1;
            case "overline":
                return 2;
            case "line-through":
                return 3;
            case "none":
                return 4
            }
            return 0
        }).filter(function(i) {
            return i !== 0
        })
    }
}
  , Gv = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        var i = []
          , l = [];
        return n.forEach(function(c) {
            switch (c.type) {
            case 20:
            case 0:
                i.push(c.value);
                break;
            case 17:
                i.push(c.number.toString());
                break;
            case 4:
                l.push(i.join(" ")),
                i.length = 0;
                break
            }
        }),
        i.length && l.push(i.join(" ")),
        l.map(function(c) {
            return c.indexOf(" ") === -1 ? c : "'" + c + "'"
        })
    }
}
  , Vv = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length"
}
  , zv = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function(r, n) {
        if (Tn(n))
            return n.number;
        if (KA(n))
            switch (n.value) {
            case "bold":
                return 700;
            case "normal":
            default:
                return 400
            }
        return 400
    }
}
  , jv = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(r, n) {
        return n.filter(KA).map(function(i) {
            return i.value
        })
    }
}
  , Xv = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
        switch (n) {
        case "oblique":
            return "oblique";
        case "italic":
            return "italic";
        case "normal":
        default:
            return "normal"
        }
    }
}
  , ee = function(r, n) {
    return (r & n) !== 0
}
  , Yv = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(r, n) {
        if (n.length === 0)
            return [];
        var i = n[0];
        return i.type === 20 && i.value === "none" ? [] : n
    }
}
  , Jv = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(r, n) {
        if (n.length === 0)
            return null;
        var i = n[0];
        if (i.type === 20 && i.value === "none")
            return null;
        for (var l = [], c = n.filter(ih), o = 0; o < c.length; o++) {
            var B = c[o]
              , d = c[o + 1];
            if (B.type === 20) {
                var g = d && Tn(d) ? d.number : 1;
                l.push({
                    counter: B.value,
                    increment: g
                })
            }
        }
        return l
    }
}
  , kv = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(r, n) {
        if (n.length === 0)
            return [];
        for (var i = [], l = n.filter(ih), c = 0; c < l.length; c++) {
            var o = l[c]
              , B = l[c + 1];
            if (KA(o) && o.value !== "none") {
                var d = B && Tn(B) ? B.number : 0;
                i.push({
                    counter: o.value,
                    reset: d
                })
            }
        }
        return i
    }
}
  , Zv = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        return n.filter(Jl).map(function(i) {
            return Fh.parse(r, i)
        })
    }
}
  , qv = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(r, n) {
        if (n.length === 0)
            return null;
        var i = n[0];
        if (i.type === 20 && i.value === "none")
            return null;
        var l = []
          , c = n.filter(vm);
        if (c.length % 2 !== 0)
            return null;
        for (var o = 0; o < c.length; o += 2) {
            var B = c[o].value
              , d = c[o + 1].value;
            l.push({
                open: B,
                close: d
            })
        }
        return l
    }
}
  , g0 = function(r, n, i) {
    if (!r)
        return "";
    var l = r[Math.min(n, r.length - 1)];
    return l ? i ? l.open : l.close : ""
}
  , Wv = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(r, n) {
        return n.length === 1 && fo(n[0], "none") ? [] : it(n).map(function(i) {
            for (var l = {
                color: 255,
                offsetX: oe,
                offsetY: oe,
                blur: oe,
                spread: oe,
                inset: !1
            }, c = 0, o = 0; o < i.length; o++) {
                var B = i[o];
                fo(B, "inset") ? l.inset = !0 : ca(B) ? (c === 0 ? l.offsetX = B : c === 1 ? l.offsetY = B : c === 2 ? l.blur = B : l.spread = B,
                c++) : l.color = sa.parse(r, B)
            }
            return l
        })
    }
}
  , Pv = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
        var i = [0, 1, 2]
          , l = [];
        return n.filter(KA).forEach(function(c) {
            switch (c.value) {
            case "stroke":
                l.push(1);
                break;
            case "fill":
                l.push(0);
                break;
            case "markers":
                l.push(2);
                break
            }
        }),
        i.forEach(function(c) {
            l.indexOf(c) === -1 && l.push(c)
        }),
        l
    }
}
  , $v = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color"
}
  , Ap = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(r, n) {
        return Jl(n) ? n.number : 0
    }
}
  , ep = (function() {
    function r(n, i) {
        var l, c;
        this.animationDuration = q(n, Zv, i.animationDuration),
        this.backgroundClip = q(n, ym, i.backgroundClip),
        this.backgroundColor = q(n, Em, i.backgroundColor),
        this.backgroundImage = q(n, Mm, i.backgroundImage),
        this.backgroundOrigin = q(n, Nm, i.backgroundOrigin),
        this.backgroundPosition = q(n, Om, i.backgroundPosition),
        this.backgroundRepeat = q(n, Rm, i.backgroundRepeat),
        this.backgroundSize = q(n, Gm, i.backgroundSize),
        this.borderTopColor = q(n, zm, i.borderTopColor),
        this.borderRightColor = q(n, jm, i.borderRightColor),
        this.borderBottomColor = q(n, Xm, i.borderBottomColor),
        this.borderLeftColor = q(n, Ym, i.borderLeftColor),
        this.borderTopLeftRadius = q(n, Jm, i.borderTopLeftRadius),
        this.borderTopRightRadius = q(n, km, i.borderTopRightRadius),
        this.borderBottomRightRadius = q(n, Zm, i.borderBottomRightRadius),
        this.borderBottomLeftRadius = q(n, qm, i.borderBottomLeftRadius),
        this.borderTopStyle = q(n, Wm, i.borderTopStyle),
        this.borderRightStyle = q(n, Pm, i.borderRightStyle),
        this.borderBottomStyle = q(n, $m, i.borderBottomStyle),
        this.borderLeftStyle = q(n, Av, i.borderLeftStyle),
        this.borderTopWidth = q(n, ev, i.borderTopWidth),
        this.borderRightWidth = q(n, tv, i.borderRightWidth),
        this.borderBottomWidth = q(n, av, i.borderBottomWidth),
        this.borderLeftWidth = q(n, nv, i.borderLeftWidth),
        this.boxShadow = q(n, Wv, i.boxShadow),
        this.color = q(n, lv, i.color),
        this.direction = q(n, rv, i.direction),
        this.display = q(n, iv, i.display),
        this.float = q(n, uv, i.cssFloat),
        this.fontFamily = q(n, Gv, i.fontFamily),
        this.fontSize = q(n, Vv, i.fontSize),
        this.fontStyle = q(n, Xv, i.fontStyle),
        this.fontVariant = q(n, jv, i.fontVariant),
        this.fontWeight = q(n, zv, i.fontWeight),
        this.letterSpacing = q(n, cv, i.letterSpacing),
        this.lineBreak = q(n, ov, i.lineBreak),
        this.lineHeight = q(n, fv, i.lineHeight),
        this.listStyleImage = q(n, Bv, i.listStyleImage),
        this.listStylePosition = q(n, gv, i.listStylePosition),
        this.listStyleType = q(n, Bo, i.listStyleType),
        this.marginTop = q(n, dv, i.marginTop),
        this.marginRight = q(n, hv, i.marginRight),
        this.marginBottom = q(n, Qv, i.marginBottom),
        this.marginLeft = q(n, wv, i.marginLeft),
        this.opacity = q(n, Ov, i.opacity);
        var o = q(n, Cv, i.overflow);
        this.overflowX = o[0],
        this.overflowY = o[o.length > 1 ? 1 : 0],
        this.overflowWrap = q(n, Uv, i.overflowWrap),
        this.paddingTop = q(n, mv, i.paddingTop),
        this.paddingRight = q(n, vv, i.paddingRight),
        this.paddingBottom = q(n, pv, i.paddingBottom),
        this.paddingLeft = q(n, Fv, i.paddingLeft),
        this.paintOrder = q(n, Pv, i.paintOrder),
        this.position = q(n, Ev, i.position),
        this.textAlign = q(n, yv, i.textAlign),
        this.textDecorationColor = q(n, Rv, (l = i.textDecorationColor) !== null && l !== void 0 ? l : i.color),
        this.textDecorationLine = q(n, _v, (c = i.textDecorationLine) !== null && c !== void 0 ? c : i.textDecoration),
        this.textShadow = q(n, Hv, i.textShadow),
        this.textTransform = q(n, bv, i.textTransform),
        this.transform = q(n, xv, i.transform),
        this.transformOrigin = q(n, Lv, i.transformOrigin),
        this.visibility = q(n, Iv, i.visibility),
        this.webkitTextStrokeColor = q(n, $v, i.webkitTextStrokeColor),
        this.webkitTextStrokeWidth = q(n, Ap, i.webkitTextStrokeWidth),
        this.wordBreak = q(n, Mv, i.wordBreak),
        this.zIndex = q(n, Nv, i.zIndex)
    }
    return r.prototype.isVisible = function() {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0
    }
    ,
    r.prototype.isTransparent = function() {
        return ua(this.backgroundColor)
    }
    ,
    r.prototype.isTransformed = function() {
        return this.transform !== null
    }
    ,
    r.prototype.isPositioned = function() {
        return this.position !== 0
    }
    ,
    r.prototype.isPositionedWithZIndex = function() {
        return this.isPositioned() && !this.zIndex.auto
    }
    ,
    r.prototype.isFloating = function() {
        return this.float !== 0
    }
    ,
    r.prototype.isInlineLevel = function() {
        return ee(this.display, 4) || ee(this.display, 33554432) || ee(this.display, 268435456) || ee(this.display, 536870912) || ee(this.display, 67108864) || ee(this.display, 134217728)
    }
    ,
    r
}
)()
  , tp = (function() {
    function r(n, i) {
        this.content = q(n, Yv, i.content),
        this.quotes = q(n, qv, i.quotes)
    }
    return r
}
)()
  , d0 = (function() {
    function r(n, i) {
        this.counterIncrement = q(n, Jv, i.counterIncrement),
        this.counterReset = q(n, kv, i.counterReset)
    }
    return r
}
)()
  , q = function(r, n, i) {
    var l = new lh
      , c = i !== null && typeof i < "u" ? i.toString() : n.initialValue;
    l.write(c);
    var o = new rh(l.read());
    switch (n.type) {
    case 2:
        var B = o.parseComponentValue();
        return n.parse(r, KA(B) ? B.value : n.initialValue);
    case 0:
        return n.parse(r, o.parseComponentValue());
    case 1:
        return n.parse(r, o.parseComponentValues());
    case 4:
        return o.parseComponentValue();
    case 3:
        switch (n.format) {
        case "angle":
            return $i.parse(r, o.parseComponentValue());
        case "color":
            return sa.parse(r, o.parseComponentValue());
        case "image":
            return Eo.parse(r, o.parseComponentValue());
        case "length":
            var d = o.parseComponentValue();
            return ca(d) ? d : oe;
        case "length-percentage":
            var g = o.parseComponentValue();
            return $A(g) ? g : oe;
        case "time":
            return Fh.parse(r, o.parseComponentValue())
        }
        break
    }
}
  , ap = "data-html2canvas-debug"
  , np = function(r) {
    var n = r.getAttribute(ap);
    switch (n) {
    case "all":
        return 1;
    case "clone":
        return 2;
    case "parse":
        return 3;
    case "render":
        return 4;
    default:
        return 0
    }
}
  , go = function(r, n) {
    var i = np(r);
    return i === 1 || n === i
}
  , st = (function() {
    function r(n, i) {
        if (this.context = n,
        this.textNodes = [],
        this.elements = [],
        this.flags = 0,
        go(i, 3))
            debugger ;this.styles = new ep(n,window.getComputedStyle(i, null)),
        wo(i) && (this.styles.animationDuration.some(function(l) {
            return l > 0
        }) && (i.style.animationDuration = "0s"),
        this.styles.transform !== null && (i.style.transform = "none")),
        this.bounds = Wi(this.context, i),
        go(i, 4) && (this.flags |= 16)
    }
    return r
}
)()
  , lp = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="
  , h0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Ml = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var xi = 0; xi < h0.length; xi++)
    Ml[h0.charCodeAt(xi)] = xi;
var rp = function(r) {
    var n = r.length * .75, i = r.length, l, c = 0, o, B, d, g;
    r[r.length - 1] === "=" && (n--,
    r[r.length - 2] === "=" && n--);
    var Q = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(n) : new Array(n)
      , U = Array.isArray(Q) ? Q : new Uint8Array(Q);
    for (l = 0; l < i; l += 4)
        o = Ml[r.charCodeAt(l)],
        B = Ml[r.charCodeAt(l + 1)],
        d = Ml[r.charCodeAt(l + 2)],
        g = Ml[r.charCodeAt(l + 3)],
        U[c++] = o << 2 | B >> 4,
        U[c++] = (B & 15) << 4 | d >> 2,
        U[c++] = (d & 3) << 6 | g & 63;
    return Q
}
  , ip = function(r) {
    for (var n = r.length, i = [], l = 0; l < n; l += 2)
        i.push(r[l + 1] << 8 | r[l]);
    return i
}
  , sp = function(r) {
    for (var n = r.length, i = [], l = 0; l < n; l += 4)
        i.push(r[l + 3] << 24 | r[l + 2] << 16 | r[l + 1] << 8 | r[l]);
    return i
}
  , La = 5
  , Ho = 11
  , Rc = 2
  , up = Ho - La
  , yh = 65536 >> La
  , cp = 1 << La
  , _c = cp - 1
  , op = 1024 >> La
  , fp = yh + op
  , Bp = fp
  , gp = 32
  , dp = Bp + gp
  , hp = 65536 >> Ho
  , Qp = 1 << up
  , wp = Qp - 1
  , Q0 = function(r, n, i) {
    return r.slice ? r.slice(n, i) : new Uint16Array(Array.prototype.slice.call(r, n, i))
}
  , Cp = function(r, n, i) {
    return r.slice ? r.slice(n, i) : new Uint32Array(Array.prototype.slice.call(r, n, i))
}
  , Up = function(r, n) {
    var i = rp(r)
      , l = Array.isArray(i) ? sp(i) : new Uint32Array(i)
      , c = Array.isArray(i) ? ip(i) : new Uint16Array(i)
      , o = 24
      , B = Q0(c, o / 2, l[4] / 2)
      , d = l[5] === 2 ? Q0(c, (o + l[4]) / 2) : Cp(l, Math.ceil((o + l[4]) / 4));
    return new mp(l[0],l[1],l[2],l[3],B,d)
}
  , mp = (function() {
    function r(n, i, l, c, o, B) {
        this.initialValue = n,
        this.errorValue = i,
        this.highStart = l,
        this.highValueIndex = c,
        this.index = o,
        this.data = B
    }
    return r.prototype.get = function(n) {
        var i;
        if (n >= 0) {
            if (n < 55296 || n > 56319 && n <= 65535)
                return i = this.index[n >> La],
                i = (i << Rc) + (n & _c),
                this.data[i];
            if (n <= 65535)
                return i = this.index[yh + (n - 55296 >> La)],
                i = (i << Rc) + (n & _c),
                this.data[i];
            if (n < this.highStart)
                return i = dp - hp + (n >> Ho),
                i = this.index[i],
                i += n >> La & wp,
                i = this.index[i],
                i = (i << Rc) + (n & _c),
                this.data[i];
            if (n <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    r
}
)()
  , w0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , vp = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Si = 0; Si < w0.length; Si++)
    vp[w0.charCodeAt(Si)] = Si;
var pp = 1, Gc = 2, Vc = 3, C0 = 4, U0 = 5, Fp = 7, m0 = 8, zc = 9, jc = 10, v0 = 11, p0 = 12, F0 = 13, y0 = 14, Xc = 15, yp = function(r) {
    for (var n = [], i = 0, l = r.length; i < l; ) {
        var c = r.charCodeAt(i++);
        if (c >= 55296 && c <= 56319 && i < l) {
            var o = r.charCodeAt(i++);
            (o & 64512) === 56320 ? n.push(((c & 1023) << 10) + (o & 1023) + 65536) : (n.push(c),
            i--)
        } else
            n.push(c)
    }
    return n
}, Ep = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, r);
    var i = r.length;
    if (!i)
        return "";
    for (var l = [], c = -1, o = ""; ++c < i; ) {
        var B = r[c];
        B <= 65535 ? l.push(B) : (B -= 65536,
        l.push((B >> 10) + 55296, B % 1024 + 56320)),
        (c + 1 === i || l.length > 16384) && (o += String.fromCharCode.apply(String, l),
        l.length = 0)
    }
    return o
}, Hp = Up(lp), Je = "×", Yc = "÷", bp = function(r) {
    return Hp.get(r)
}, xp = function(r, n, i) {
    var l = i - 2
      , c = n[l]
      , o = n[i - 1]
      , B = n[i];
    if (o === Gc && B === Vc)
        return Je;
    if (o === Gc || o === Vc || o === C0 || B === Gc || B === Vc || B === C0)
        return Yc;
    if (o === m0 && [m0, zc, v0, p0].indexOf(B) !== -1 || (o === v0 || o === zc) && (B === zc || B === jc) || (o === p0 || o === jc) && B === jc || B === F0 || B === U0 || B === Fp || o === pp)
        return Je;
    if (o === F0 && B === y0) {
        for (; c === U0; )
            c = n[--l];
        if (c === y0)
            return Je
    }
    if (o === Xc && B === Xc) {
        for (var d = 0; c === Xc; )
            d++,
            c = n[--l];
        if (d % 2 === 0)
            return Je
    }
    return Yc
}, Sp = function(r) {
    var n = yp(r)
      , i = n.length
      , l = 0
      , c = 0
      , o = n.map(bp);
    return {
        next: function() {
            if (l >= i)
                return {
                    done: !0,
                    value: null
                };
            for (var B = Je; l < i && (B = xp(n, o, ++l)) === Je; )
                ;
            if (B !== Je || l === i) {
                var d = Ep.apply(null, n.slice(c, l));
                return c = l,
                {
                    value: d,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}, Tp = function(r) {
    for (var n = Sp(r), i = [], l; !(l = n.next()).done; )
        l.value && i.push(l.value.slice());
    return i
}, Dp = function(r) {
    var n = 123;
    if (r.createRange) {
        var i = r.createRange();
        if (i.getBoundingClientRect) {
            var l = r.createElement("boundtest");
            l.style.height = n + "px",
            l.style.display = "block",
            r.body.appendChild(l),
            i.selectNode(l);
            var c = i.getBoundingClientRect()
              , o = Math.round(c.height);
            if (r.body.removeChild(l),
            o === n)
                return !0
        }
    }
    return !1
}, Kp = function(r) {
    var n = r.createElement("boundtest");
    n.style.width = "50px",
    n.style.display = "block",
    n.style.fontSize = "12px",
    n.style.letterSpacing = "0px",
    n.style.wordSpacing = "0px",
    r.body.appendChild(n);
    var i = r.createRange();
    n.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var l = n.firstChild
      , c = Pi(l.data).map(function(g) {
        return kA(g)
    })
      , o = 0
      , B = {}
      , d = c.every(function(g, Q) {
        i.setStart(l, o),
        i.setEnd(l, o + g.length);
        var U = i.getBoundingClientRect();
        o += g.length;
        var C = U.x > B.x || U.y > B.y;
        return B = U,
        Q === 0 ? !0 : C
    });
    return r.body.removeChild(n),
    d
}, Lp = function() {
    return typeof new Image().crossOrigin < "u"
}, Ip = function() {
    return typeof new XMLHttpRequest().responseType == "string"
}, Mp = function(r) {
    var n = new Image
      , i = r.createElement("canvas")
      , l = i.getContext("2d");
    if (!l)
        return !1;
    n.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
        l.drawImage(n, 0, 0),
        i.toDataURL()
    } catch {
        return !1
    }
    return !0
}, E0 = function(r) {
    return r[0] === 0 && r[1] === 255 && r[2] === 0 && r[3] === 255
}, Np = function(r) {
    var n = r.createElement("canvas")
      , i = 100;
    n.width = i,
    n.height = i;
    var l = n.getContext("2d");
    if (!l)
        return Promise.reject(!1);
    l.fillStyle = "rgb(0, 255, 0)",
    l.fillRect(0, 0, i, i);
    var c = new Image
      , o = n.toDataURL();
    c.src = o;
    var B = ho(i, i, 0, 0, c);
    return l.fillStyle = "red",
    l.fillRect(0, 0, i, i),
    H0(B).then(function(d) {
        l.drawImage(d, 0, 0);
        var g = l.getImageData(0, 0, i, i).data;
        l.fillStyle = "red",
        l.fillRect(0, 0, i, i);
        var Q = r.createElement("div");
        return Q.style.backgroundImage = "url(" + o + ")",
        Q.style.height = i + "px",
        E0(g) ? H0(ho(i, i, 0, 0, Q)) : Promise.reject(!1)
    }).then(function(d) {
        return l.drawImage(d, 0, 0),
        E0(l.getImageData(0, 0, i, i).data)
    }).catch(function() {
        return !1
    })
}, ho = function(r, n, i, l, c) {
    var o = "http://www.w3.org/2000/svg"
      , B = document.createElementNS(o, "svg")
      , d = document.createElementNS(o, "foreignObject");
    return B.setAttributeNS(null, "width", r.toString()),
    B.setAttributeNS(null, "height", n.toString()),
    d.setAttributeNS(null, "width", "100%"),
    d.setAttributeNS(null, "height", "100%"),
    d.setAttributeNS(null, "x", i.toString()),
    d.setAttributeNS(null, "y", l.toString()),
    d.setAttributeNS(null, "externalResourcesRequired", "true"),
    B.appendChild(d),
    d.appendChild(c),
    B
}, H0 = function(r) {
    return new Promise(function(n, i) {
        var l = new Image;
        l.onload = function() {
            return n(l)
        }
        ,
        l.onerror = i,
        l.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r))
    }
    )
}, ce = {
    get SUPPORT_RANGE_BOUNDS() {
        var r = Dp(document);
        return Object.defineProperty(ce, "SUPPORT_RANGE_BOUNDS", {
            value: r
        }),
        r
    },
    get SUPPORT_WORD_BREAKING() {
        var r = ce.SUPPORT_RANGE_BOUNDS && Kp(document);
        return Object.defineProperty(ce, "SUPPORT_WORD_BREAKING", {
            value: r
        }),
        r
    },
    get SUPPORT_SVG_DRAWING() {
        var r = Mp(document);
        return Object.defineProperty(ce, "SUPPORT_SVG_DRAWING", {
            value: r
        }),
        r
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var r = typeof Array.from == "function" && typeof window.fetch == "function" ? Np(document) : Promise.resolve(!1);
        return Object.defineProperty(ce, "SUPPORT_FOREIGNOBJECT_DRAWING", {
            value: r
        }),
        r
    },
    get SUPPORT_CORS_IMAGES() {
        var r = Lp();
        return Object.defineProperty(ce, "SUPPORT_CORS_IMAGES", {
            value: r
        }),
        r
    },
    get SUPPORT_RESPONSE_TYPE() {
        var r = Ip();
        return Object.defineProperty(ce, "SUPPORT_RESPONSE_TYPE", {
            value: r
        }),
        r
    },
    get SUPPORT_CORS_XHR() {
        var r = "withCredentials"in new XMLHttpRequest;
        return Object.defineProperty(ce, "SUPPORT_CORS_XHR", {
            value: r
        }),
        r
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        var r = !!(typeof Intl < "u" && Intl.Segmenter);
        return Object.defineProperty(ce, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
            value: r
        }),
        r
    }
}, Gl = (function() {
    function r(n, i) {
        this.text = n,
        this.bounds = i
    }
    return r
}
)(), Op = function(r, n, i, l) {
    var c = Gp(n, i)
      , o = []
      , B = 0;
    return c.forEach(function(d) {
        if (i.textDecorationLine.length || d.trim().length > 0)
            if (ce.SUPPORT_RANGE_BOUNDS) {
                var g = b0(l, B, d.length).getClientRects();
                if (g.length > 1) {
                    var Q = bo(d)
                      , U = 0;
                    Q.forEach(function(y) {
                        o.push(new Gl(y,St.fromDOMRectList(r, b0(l, U + B, y.length).getClientRects()))),
                        U += y.length
                    })
                } else
                    o.push(new Gl(d,St.fromDOMRectList(r, g)))
            } else {
                var C = l.splitText(d.length);
                o.push(new Gl(d,Rp(r, l))),
                l = C
            }
        else
            ce.SUPPORT_RANGE_BOUNDS || (l = l.splitText(d.length));
        B += d.length
    }),
    o
}, Rp = function(r, n) {
    var i = n.ownerDocument;
    if (i) {
        var l = i.createElement("html2canvaswrapper");
        l.appendChild(n.cloneNode(!0));
        var c = n.parentNode;
        if (c) {
            c.replaceChild(l, n);
            var o = Wi(r, l);
            return l.firstChild && c.replaceChild(l.firstChild, l),
            o
        }
    }
    return St.EMPTY
}, b0 = function(r, n, i) {
    var l = r.ownerDocument;
    if (!l)
        throw new Error("Node has no owner document");
    var c = l.createRange();
    return c.setStart(r, n),
    c.setEnd(r, n + i),
    c
}, bo = function(r) {
    if (ce.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var n = new Intl.Segmenter(void 0,{
            granularity: "grapheme"
        });
        return Array.from(n.segment(r)).map(function(i) {
            return i.segment
        })
    }
    return Tp(r)
}, _p = function(r, n) {
    if (ce.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var i = new Intl.Segmenter(void 0,{
            granularity: "word"
        });
        return Array.from(i.segment(r)).map(function(l) {
            return l.segment
        })
    }
    return zp(r, n)
}, Gp = function(r, n) {
    return n.letterSpacing !== 0 ? bo(r) : _p(r, n)
}, Vp = [32, 160, 4961, 65792, 65793, 4153, 4241], zp = function(r, n) {
    for (var i = hU(r, {
        lineBreak: n.lineBreak,
        wordBreak: n.overflowWrap === "break-word" ? "break-word" : n.wordBreak
    }), l = [], c, o = function() {
        if (c.value) {
            var B = c.value.slice()
              , d = Pi(B)
              , g = "";
            d.forEach(function(Q) {
                Vp.indexOf(Q) === -1 ? g += kA(Q) : (g.length && l.push(g),
                l.push(kA(Q)),
                g = "")
            }),
            g.length && l.push(g)
        }
    }; !(c = i.next()).done; )
        o();
    return l
}, jp = (function() {
    function r(n, i, l) {
        this.text = Xp(i.data, l.textTransform),
        this.textBounds = Op(n, this.text, l, i)
    }
    return r
}
)(), Xp = function(r, n) {
    switch (n) {
    case 1:
        return r.toLowerCase();
    case 3:
        return r.replace(Yp, Jp);
    case 2:
        return r.toUpperCase();
    default:
        return r
    }
}, Yp = /(^|\s|:|-|\(|\))([a-z])/g, Jp = function(r, n, i) {
    return r.length > 0 ? n + i.toUpperCase() : r
}, Eh = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c.src = l.currentSrc || l.src,
        c.intrinsicWidth = l.naturalWidth,
        c.intrinsicHeight = l.naturalHeight,
        c.context.cache.addImage(c.src),
        c
    }
    return n
}
)(st), Hh = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c.canvas = l,
        c.intrinsicWidth = l.width,
        c.intrinsicHeight = l.height,
        c
    }
    return n
}
)(st), bh = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this
          , o = new XMLSerializer
          , B = Wi(i, l);
        return l.setAttribute("width", B.width + "px"),
        l.setAttribute("height", B.height + "px"),
        c.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(l)),
        c.intrinsicWidth = l.width.baseVal.value,
        c.intrinsicHeight = l.height.baseVal.value,
        c.context.cache.addImage(c.svg),
        c
    }
    return n
}
)(st), xh = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c.value = l.value,
        c
    }
    return n
}
)(st), Qo = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c.start = l.start,
        c.reversed = typeof l.reversed == "boolean" && l.reversed === !0,
        c
    }
    return n
}
)(st), kp = [{
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
}], Zp = [{
    type: 16,
    flags: 0,
    number: 50
}], qp = function(r) {
    return r.width > r.height ? new St(r.left + (r.width - r.height) / 2,r.top,r.height,r.height) : r.width < r.height ? new St(r.left,r.top + (r.height - r.width) / 2,r.width,r.width) : r
}, Wp = function(r) {
    var n = r.type === Pp ? new Array(r.value.length + 1).join("•") : r.value;
    return n.length === 0 ? r.placeholder || "" : n
}, zi = "checkbox", ji = "radio", Pp = "password", x0 = 707406591, xo = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        switch (c.type = l.type.toLowerCase(),
        c.checked = l.checked,
        c.value = Wp(l),
        (c.type === zi || c.type === ji) && (c.styles.backgroundColor = 3739148031,
        c.styles.borderTopColor = c.styles.borderRightColor = c.styles.borderBottomColor = c.styles.borderLeftColor = 2779096575,
        c.styles.borderTopWidth = c.styles.borderRightWidth = c.styles.borderBottomWidth = c.styles.borderLeftWidth = 1,
        c.styles.borderTopStyle = c.styles.borderRightStyle = c.styles.borderBottomStyle = c.styles.borderLeftStyle = 1,
        c.styles.backgroundClip = [0],
        c.styles.backgroundOrigin = [0],
        c.bounds = qp(c.bounds)),
        c.type) {
        case zi:
            c.styles.borderTopRightRadius = c.styles.borderTopLeftRadius = c.styles.borderBottomRightRadius = c.styles.borderBottomLeftRadius = kp;
            break;
        case ji:
            c.styles.borderTopRightRadius = c.styles.borderTopLeftRadius = c.styles.borderBottomRightRadius = c.styles.borderBottomLeftRadius = Zp;
            break
        }
        return c
    }
    return n
}
)(st), Sh = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this
          , o = l.options[l.selectedIndex || 0];
        return c.value = o && o.text || "",
        c
    }
    return n
}
)(st), Th = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c.value = l.value,
        c
    }
    return n
}
)(st), Dh = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        c.src = l.src,
        c.width = parseInt(l.width, 10) || 0,
        c.height = parseInt(l.height, 10) || 0,
        c.backgroundColor = c.styles.backgroundColor;
        try {
            if (l.contentWindow && l.contentWindow.document && l.contentWindow.document.documentElement) {
                c.tree = Lh(i, l.contentWindow.document.documentElement);
                var o = l.contentWindow.document.documentElement ? Rl(i, getComputedStyle(l.contentWindow.document.documentElement).backgroundColor) : xt.TRANSPARENT
                  , B = l.contentWindow.document.body ? Rl(i, getComputedStyle(l.contentWindow.document.body).backgroundColor) : xt.TRANSPARENT;
                c.backgroundColor = ua(o) ? ua(B) ? c.styles.backgroundColor : B : o
            }
        } catch {}
        return c
    }
    return n
}
)(st), $p = ["OL", "UL", "MENU"], Oi = function(r, n, i, l) {
    for (var c = n.firstChild, o = void 0; c; c = o)
        if (o = c.nextSibling,
        Ih(c) && c.data.trim().length > 0)
            i.textNodes.push(new jp(r,c,i.styles));
        else if (bn(c))
            if (Rh(c) && c.assignedNodes)
                c.assignedNodes().forEach(function(d) {
                    return Oi(r, d, i, l)
                });
            else {
                var B = Kh(r, c);
                B.styles.isVisible() && (AF(c, B, l) ? B.flags |= 4 : eF(B.styles) && (B.flags |= 2),
                $p.indexOf(c.tagName) !== -1 && (B.flags |= 8),
                i.elements.push(B),
                c.slot,
                c.shadowRoot ? Oi(r, c.shadowRoot, B, l) : !Xi(c) && !Mh(c) && !Yi(c) && Oi(r, c, B, l))
            }
}, Kh = function(r, n) {
    return Co(n) ? new Eh(r,n) : Nh(n) ? new Hh(r,n) : Mh(n) ? new bh(r,n) : tF(n) ? new xh(r,n) : aF(n) ? new Qo(r,n) : nF(n) ? new xo(r,n) : Yi(n) ? new Sh(r,n) : Xi(n) ? new Th(r,n) : Oh(n) ? new Dh(r,n) : new st(r,n)
}, Lh = function(r, n) {
    var i = Kh(r, n);
    return i.flags |= 4,
    Oi(r, n, i, i),
    i
}, AF = function(r, n, i) {
    return n.styles.isPositionedWithZIndex() || n.styles.opacity < 1 || n.styles.isTransformed() || So(r) && i.styles.isTransparent()
}, eF = function(r) {
    return r.isPositioned() || r.isFloating()
}, Ih = function(r) {
    return r.nodeType === Node.TEXT_NODE
}, bn = function(r) {
    return r.nodeType === Node.ELEMENT_NODE
}, wo = function(r) {
    return bn(r) && typeof r.style < "u" && !Ri(r)
}, Ri = function(r) {
    return typeof r.className == "object"
}, tF = function(r) {
    return r.tagName === "LI"
}, aF = function(r) {
    return r.tagName === "OL"
}, nF = function(r) {
    return r.tagName === "INPUT"
}, lF = function(r) {
    return r.tagName === "HTML"
}, Mh = function(r) {
    return r.tagName === "svg"
}, So = function(r) {
    return r.tagName === "BODY"
}, Nh = function(r) {
    return r.tagName === "CANVAS"
}, S0 = function(r) {
    return r.tagName === "VIDEO"
}, Co = function(r) {
    return r.tagName === "IMG"
}, Oh = function(r) {
    return r.tagName === "IFRAME"
}, T0 = function(r) {
    return r.tagName === "STYLE"
}, rF = function(r) {
    return r.tagName === "SCRIPT"
}, Xi = function(r) {
    return r.tagName === "TEXTAREA"
}, Yi = function(r) {
    return r.tagName === "SELECT"
}, Rh = function(r) {
    return r.tagName === "SLOT"
}, D0 = function(r) {
    return r.tagName.indexOf("-") > 0
}, iF = (function() {
    function r() {
        this.counters = {}
    }
    return r.prototype.getCounterValue = function(n) {
        var i = this.counters[n];
        return i && i.length ? i[i.length - 1] : 1
    }
    ,
    r.prototype.getCounterValues = function(n) {
        var i = this.counters[n];
        return i || []
    }
    ,
    r.prototype.pop = function(n) {
        var i = this;
        n.forEach(function(l) {
            return i.counters[l].pop()
        })
    }
    ,
    r.prototype.parse = function(n) {
        var i = this
          , l = n.counterIncrement
          , c = n.counterReset
          , o = !0;
        l !== null && l.forEach(function(d) {
            var g = i.counters[d.counter];
            g && d.increment !== 0 && (o = !1,
            g.length || g.push(1),
            g[Math.max(0, g.length - 1)] += d.increment)
        });
        var B = [];
        return o && c.forEach(function(d) {
            var g = i.counters[d.counter];
            B.push(d.counter),
            g || (g = i.counters[d.counter] = []),
            g.push(d.reset)
        }),
        B
    }
    ,
    r
}
)(), K0 = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, L0 = {
    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
}, sF = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
}, uF = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
}, pn = function(r, n, i, l, c, o) {
    return r < n || r > i ? Xl(r, c, o.length > 0) : l.integers.reduce(function(B, d, g) {
        for (; r >= d; )
            r -= d,
            B += l.values[g];
        return B
    }, "") + o
}, _h = function(r, n, i, l) {
    var c = "";
    do
        i || r--,
        c = l(r) + c,
        r /= n;
    while (r * n >= n);
    return c
}, JA = function(r, n, i, l, c) {
    var o = i - n + 1;
    return (r < 0 ? "-" : "") + (_h(Math.abs(r), o, l, function(B) {
        return kA(Math.floor(B % o) + n)
    }) + c)
}, Sa = function(r, n, i) {
    i === void 0 && (i = ". ");
    var l = n.length;
    return _h(Math.abs(r), l, !1, function(c) {
        return n[Math.floor(c % l)]
    }) + i
}, En = 1, ta = 2, aa = 4, Nl = 8, bt = function(r, n, i, l, c, o) {
    if (r < -9999 || r > 9999)
        return Xl(r, 4, c.length > 0);
    var B = Math.abs(r)
      , d = c;
    if (B === 0)
        return n[0] + d;
    for (var g = 0; B > 0 && g <= 4; g++) {
        var Q = B % 10;
        Q === 0 && ee(o, En) && d !== "" ? d = n[Q] + d : Q > 1 || Q === 1 && g === 0 || Q === 1 && g === 1 && ee(o, ta) || Q === 1 && g === 1 && ee(o, aa) && r > 100 || Q === 1 && g > 1 && ee(o, Nl) ? d = n[Q] + (g > 0 ? i[g - 1] : "") + d : Q === 1 && g > 0 && (d = i[g - 1] + d),
        B = Math.floor(B / 10)
    }
    return (r < 0 ? l : "") + d
}, I0 = "十百千萬", M0 = "拾佰仟萬", N0 = "マイナス", Jc = "마이너스", Xl = function(r, n, i) {
    var l = i ? ". " : ""
      , c = i ? "、" : ""
      , o = i ? ", " : ""
      , B = i ? " " : "";
    switch (n) {
    case 0:
        return "•" + B;
    case 1:
        return "◦" + B;
    case 2:
        return "◾" + B;
    case 5:
        var d = JA(r, 48, 57, !0, l);
        return d.length < 4 ? "0" + d : d;
    case 4:
        return Sa(r, "〇一二三四五六七八九", c);
    case 6:
        return pn(r, 1, 3999, K0, 3, l).toLowerCase();
    case 7:
        return pn(r, 1, 3999, K0, 3, l);
    case 8:
        return JA(r, 945, 969, !1, l);
    case 9:
        return JA(r, 97, 122, !1, l);
    case 10:
        return JA(r, 65, 90, !1, l);
    case 11:
        return JA(r, 1632, 1641, !0, l);
    case 12:
    case 49:
        return pn(r, 1, 9999, L0, 3, l);
    case 35:
        return pn(r, 1, 9999, L0, 3, l).toLowerCase();
    case 13:
        return JA(r, 2534, 2543, !0, l);
    case 14:
    case 30:
        return JA(r, 6112, 6121, !0, l);
    case 15:
        return Sa(r, "子丑寅卯辰巳午未申酉戌亥", c);
    case 16:
        return Sa(r, "甲乙丙丁戊己庚辛壬癸", c);
    case 17:
    case 48:
        return bt(r, "零一二三四五六七八九", I0, "負", c, ta | aa | Nl);
    case 47:
        return bt(r, "零壹貳參肆伍陸柒捌玖", M0, "負", c, En | ta | aa | Nl);
    case 42:
        return bt(r, "零一二三四五六七八九", I0, "负", c, ta | aa | Nl);
    case 41:
        return bt(r, "零壹贰叁肆伍陆柒捌玖", M0, "负", c, En | ta | aa | Nl);
    case 26:
        return bt(r, "〇一二三四五六七八九", "十百千万", N0, c, 0);
    case 25:
        return bt(r, "零壱弐参四伍六七八九", "拾百千万", N0, c, En | ta | aa);
    case 31:
        return bt(r, "영일이삼사오육칠팔구", "십백천만", Jc, o, En | ta | aa);
    case 33:
        return bt(r, "零一二三四五六七八九", "十百千萬", Jc, o, 0);
    case 32:
        return bt(r, "零壹貳參四五六七八九", "拾百千", Jc, o, En | ta | aa);
    case 18:
        return JA(r, 2406, 2415, !0, l);
    case 20:
        return pn(r, 1, 19999, uF, 3, l);
    case 21:
        return JA(r, 2790, 2799, !0, l);
    case 22:
        return JA(r, 2662, 2671, !0, l);
    case 22:
        return pn(r, 1, 10999, sF, 3, l);
    case 23:
        return Sa(r, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
        return Sa(r, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
        return JA(r, 3302, 3311, !0, l);
    case 28:
        return Sa(r, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", c);
    case 29:
        return Sa(r, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", c);
    case 34:
        return JA(r, 3792, 3801, !0, l);
    case 37:
        return JA(r, 6160, 6169, !0, l);
    case 38:
        return JA(r, 4160, 4169, !0, l);
    case 39:
        return JA(r, 2918, 2927, !0, l);
    case 40:
        return JA(r, 1776, 1785, !0, l);
    case 43:
        return JA(r, 3046, 3055, !0, l);
    case 44:
        return JA(r, 3174, 3183, !0, l);
    case 45:
        return JA(r, 3664, 3673, !0, l);
    case 46:
        return JA(r, 3872, 3881, !0, l);
    case 3:
    default:
        return JA(r, 48, 57, !0, l)
    }
}, Gh = "data-html2canvas-ignore", O0 = (function() {
    function r(n, i, l) {
        if (this.context = n,
        this.options = l,
        this.scrolledElements = [],
        this.referenceElement = i,
        this.counters = new iF,
        this.quoteDepth = 0,
        !i.ownerDocument)
            throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(i.ownerDocument.documentElement, !1)
    }
    return r.prototype.toIFrame = function(n, i) {
        var l = this
          , c = cF(n, i);
        if (!c.contentWindow)
            return Promise.reject("Unable to find iframe window");
        var o = n.defaultView.pageXOffset
          , B = n.defaultView.pageYOffset
          , d = c.contentWindow
          , g = d.document
          , Q = BF(c).then(function() {
            return Qe(l, void 0, void 0, function() {
                var U, C;
                return Be(this, function(y) {
                    switch (y.label) {
                    case 0:
                        return this.scrolledElements.forEach(QF),
                        d && (d.scrollTo(i.left, i.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (d.scrollY !== i.top || d.scrollX !== i.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                        this.context.windowBounds = this.context.windowBounds.add(d.scrollX - i.left, d.scrollY - i.top, 0, 0))),
                        U = this.options.onclone,
                        C = this.clonedReferenceElement,
                        typeof C > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : g.fonts && g.fonts.ready ? [4, g.fonts.ready] : [3, 2];
                    case 1:
                        y.sent(),
                        y.label = 2;
                    case 2:
                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, fF(g)] : [3, 4];
                    case 3:
                        y.sent(),
                        y.label = 4;
                    case 4:
                        return typeof U == "function" ? [2, Promise.resolve().then(function() {
                            return U(g, C)
                        }).then(function() {
                            return c
                        })] : [2, c]
                    }
                })
            })
        });
        return g.open(),
        g.write(dF(document.doctype) + "<html></html>"),
        hF(this.referenceElement.ownerDocument, o, B),
        g.replaceChild(g.adoptNode(this.documentElement), g.documentElement),
        g.close(),
        Q
    }
    ,
    r.prototype.createElementClone = function(n) {
        if (go(n, 2))
            debugger ;if (Nh(n))
            return this.createCanvasClone(n);
        if (S0(n))
            return this.createVideoClone(n);
        if (T0(n))
            return this.createStyleClone(n);
        var i = n.cloneNode(!1);
        return Co(i) && (Co(n) && n.currentSrc && n.currentSrc !== n.src && (i.src = n.currentSrc,
        i.srcset = ""),
        i.loading === "lazy" && (i.loading = "eager")),
        D0(i) ? this.createCustomElementClone(i) : i
    }
    ,
    r.prototype.createCustomElementClone = function(n) {
        var i = document.createElement("html2canvascustomelement");
        return kc(n.style, i),
        i
    }
    ,
    r.prototype.createStyleClone = function(n) {
        try {
            var i = n.sheet;
            if (i && i.cssRules) {
                var l = [].slice.call(i.cssRules, 0).reduce(function(o, B) {
                    return B && typeof B.cssText == "string" ? o + B.cssText : o
                }, "")
                  , c = n.cloneNode(!1);
                return c.textContent = l,
                c
            }
        } catch (o) {
            if (this.context.logger.error("Unable to access cssRules property", o),
            o.name !== "SecurityError")
                throw o
        }
        return n.cloneNode(!1)
    }
    ,
    r.prototype.createCanvasClone = function(n) {
        var i;
        if (this.options.inlineImages && n.ownerDocument) {
            var l = n.ownerDocument.createElement("img");
            try {
                return l.src = n.toDataURL(),
                l
            } catch {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", n)
            }
        }
        var c = n.cloneNode(!1);
        try {
            c.width = n.width,
            c.height = n.height;
            var o = n.getContext("2d")
              , B = c.getContext("2d");
            if (B)
                if (!this.options.allowTaint && o)
                    B.putImageData(o.getImageData(0, 0, n.width, n.height), 0, 0);
                else {
                    var d = (i = n.getContext("webgl2")) !== null && i !== void 0 ? i : n.getContext("webgl");
                    if (d) {
                        var g = d.getContextAttributes();
                        (g == null ? void 0 : g.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", n)
                    }
                    B.drawImage(n, 0, 0)
                }
            return c
        } catch {
            this.context.logger.info("Unable to clone canvas as it is tainted", n)
        }
        return c
    }
    ,
    r.prototype.createVideoClone = function(n) {
        var i = n.ownerDocument.createElement("canvas");
        i.width = n.offsetWidth,
        i.height = n.offsetHeight;
        var l = i.getContext("2d");
        try {
            return l && (l.drawImage(n, 0, 0, i.width, i.height),
            this.options.allowTaint || l.getImageData(0, 0, i.width, i.height)),
            i
        } catch {
            this.context.logger.info("Unable to clone video as it is tainted", n)
        }
        var c = n.ownerDocument.createElement("canvas");
        return c.width = n.offsetWidth,
        c.height = n.offsetHeight,
        c
    }
    ,
    r.prototype.appendChildNode = function(n, i, l) {
        (!bn(i) || !rF(i) && !i.hasAttribute(Gh) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(i))) && (!this.options.copyStyles || !bn(i) || !T0(i)) && n.appendChild(this.cloneNode(i, l))
    }
    ,
    r.prototype.cloneChildNodes = function(n, i, l) {
        for (var c = this, o = n.shadowRoot ? n.shadowRoot.firstChild : n.firstChild; o; o = o.nextSibling)
            if (bn(o) && Rh(o) && typeof o.assignedNodes == "function") {
                var B = o.assignedNodes();
                B.length && B.forEach(function(d) {
                    return c.appendChildNode(i, d, l)
                })
            } else
                this.appendChildNode(i, o, l)
    }
    ,
    r.prototype.cloneNode = function(n, i) {
        if (Ih(n))
            return document.createTextNode(n.data);
        if (!n.ownerDocument)
            return n.cloneNode(!1);
        var l = n.ownerDocument.defaultView;
        if (l && bn(n) && (wo(n) || Ri(n))) {
            var c = this.createElementClone(n);
            c.style.transitionProperty = "none";
            var o = l.getComputedStyle(n)
              , B = l.getComputedStyle(n, ":before")
              , d = l.getComputedStyle(n, ":after");
            this.referenceElement === n && wo(c) && (this.clonedReferenceElement = c),
            So(c) && UF(c);
            var g = this.counters.parse(new d0(this.context,o))
              , Q = this.resolvePseudoContent(n, c, B, Vl.BEFORE);
            D0(n) && (i = !0),
            S0(n) || this.cloneChildNodes(n, c, i),
            Q && c.insertBefore(Q, c.firstChild);
            var U = this.resolvePseudoContent(n, c, d, Vl.AFTER);
            return U && c.appendChild(U),
            this.counters.pop(g),
            (o && (this.options.copyStyles || Ri(n)) && !Oh(n) || i) && kc(o, c),
            (n.scrollTop !== 0 || n.scrollLeft !== 0) && this.scrolledElements.push([c, n.scrollLeft, n.scrollTop]),
            (Xi(n) || Yi(n)) && (Xi(c) || Yi(c)) && (c.value = n.value),
            c
        }
        return n.cloneNode(!1)
    }
    ,
    r.prototype.resolvePseudoContent = function(n, i, l, c) {
        var o = this;
        if (l) {
            var B = l.content
              , d = i.ownerDocument;
            if (!(!d || !B || B === "none" || B === "-moz-alt-content" || l.display === "none")) {
                this.counters.parse(new d0(this.context,l));
                var g = new tp(this.context,l)
                  , Q = d.createElement("html2canvaspseudoelement");
                kc(l, Q),
                g.content.forEach(function(C) {
                    if (C.type === 0)
                        Q.appendChild(d.createTextNode(C.value));
                    else if (C.type === 22) {
                        var y = d.createElement("img");
                        y.src = C.value,
                        y.style.opacity = "1",
                        Q.appendChild(y)
                    } else if (C.type === 18) {
                        if (C.name === "attr") {
                            var I = C.values.filter(KA);
                            I.length && Q.appendChild(d.createTextNode(n.getAttribute(I[0].value) || ""))
                        } else if (C.name === "counter") {
                            var D = C.values.filter(Sn)
                              , L = D[0]
                              , X = D[1];
                            if (L && KA(L)) {
                                var _ = o.counters.getCounterValue(L.value)
                                  , R = X && KA(X) ? Bo.parse(o.context, X.value) : 3;
                                Q.appendChild(d.createTextNode(Xl(_, R, !1)))
                            }
                        } else if (C.name === "counters") {
                            var W = C.values.filter(Sn)
                              , L = W[0]
                              , AA = W[1]
                              , X = W[2];
                            if (L && KA(L)) {
                                var P = o.counters.getCounterValues(L.value)
                                  , N = X && KA(X) ? Bo.parse(o.context, X.value) : 3
                                  , G = AA && AA.type === 0 ? AA.value : ""
                                  , Z = P.map(function(sA) {
                                    return Xl(sA, N, !1)
                                }).join(G);
                                Q.appendChild(d.createTextNode(Z))
                            }
                        }
                    } else if (C.type === 20)
                        switch (C.value) {
                        case "open-quote":
                            Q.appendChild(d.createTextNode(g0(g.quotes, o.quoteDepth++, !0)));
                            break;
                        case "close-quote":
                            Q.appendChild(d.createTextNode(g0(g.quotes, --o.quoteDepth, !1)));
                            break;
                        default:
                            Q.appendChild(d.createTextNode(C.value))
                        }
                }),
                Q.className = Uo + " " + mo;
                var U = c === Vl.BEFORE ? " " + Uo : " " + mo;
                return Ri(i) ? i.className.baseValue += U : i.className += U,
                Q
            }
        }
    }
    ,
    r.destroy = function(n) {
        return n.parentNode ? (n.parentNode.removeChild(n),
        !0) : !1
    }
    ,
    r
}
)(), Vl;
(function(r) {
    r[r.BEFORE = 0] = "BEFORE",
    r[r.AFTER = 1] = "AFTER"
}
)(Vl || (Vl = {}));
var cF = function(r, n) {
    var i = r.createElement("iframe");
    return i.className = "html2canvas-container",
    i.style.visibility = "hidden",
    i.style.position = "fixed",
    i.style.left = "-10000px",
    i.style.top = "0px",
    i.style.border = "0",
    i.width = n.width.toString(),
    i.height = n.height.toString(),
    i.scrolling = "no",
    i.setAttribute(Gh, "true"),
    r.body.appendChild(i),
    i
}, oF = function(r) {
    return new Promise(function(n) {
        if (r.complete) {
            n();
            return
        }
        if (!r.src) {
            n();
            return
        }
        r.onload = n,
        r.onerror = n
    }
    )
}, fF = function(r) {
    return Promise.all([].slice.call(r.images, 0).map(oF))
}, BF = function(r) {
    return new Promise(function(n, i) {
        var l = r.contentWindow;
        if (!l)
            return i("No window assigned for iframe");
        var c = l.document;
        l.onload = r.onload = function() {
            l.onload = r.onload = null;
            var o = setInterval(function() {
                c.body.childNodes.length > 0 && c.readyState === "complete" && (clearInterval(o),
                n(r))
            }, 50)
        }
    }
    )
}, gF = ["all", "d", "content"], kc = function(r, n) {
    for (var i = r.length - 1; i >= 0; i--) {
        var l = r.item(i);
        gF.indexOf(l) === -1 && n.style.setProperty(l, r.getPropertyValue(l))
    }
    return n
}, dF = function(r) {
    var n = "";
    return r && (n += "<!DOCTYPE ",
    r.name && (n += r.name),
    r.internalSubset && (n += r.internalSubset),
    r.publicId && (n += '"' + r.publicId + '"'),
    r.systemId && (n += '"' + r.systemId + '"'),
    n += ">"),
    n
}, hF = function(r, n, i) {
    r && r.defaultView && (n !== r.defaultView.pageXOffset || i !== r.defaultView.pageYOffset) && r.defaultView.scrollTo(n, i)
}, QF = function(r) {
    var n = r[0]
      , i = r[1]
      , l = r[2];
    n.scrollLeft = i,
    n.scrollTop = l
}, wF = ":before", CF = ":after", Uo = "___html2canvas___pseudoelement_before", mo = "___html2canvas___pseudoelement_after", R0 = `{
    content: "" !important;
    display: none !important;
}`, UF = function(r) {
    mF(r, "." + Uo + wF + R0 + `
         .` + mo + CF + R0)
}, mF = function(r, n) {
    var i = r.ownerDocument;
    if (i) {
        var l = i.createElement("style");
        l.textContent = n,
        r.appendChild(l)
    }
}, Vh = (function() {
    function r() {}
    return r.getOrigin = function(n) {
        var i = r._link;
        return i ? (i.href = n,
        i.href = i.href,
        i.protocol + i.hostname + i.port) : "about:blank"
    }
    ,
    r.isSameOrigin = function(n) {
        return r.getOrigin(n) === r._origin
    }
    ,
    r.setContext = function(n) {
        r._link = n.document.createElement("a"),
        r._origin = r.getOrigin(n.location.href)
    }
    ,
    r._origin = "about:blank",
    r
}
)(), vF = (function() {
    function r(n, i) {
        this.context = n,
        this._options = i,
        this._cache = {}
    }
    return r.prototype.addImage = function(n) {
        var i = Promise.resolve();
        return this.has(n) || (qc(n) || EF(n)) && (this._cache[n] = this.loadImage(n)).catch(function() {}),
        i
    }
    ,
    r.prototype.match = function(n) {
        return this._cache[n]
    }
    ,
    r.prototype.loadImage = function(n) {
        return Qe(this, void 0, void 0, function() {
            var i, l, c, o, B = this;
            return Be(this, function(d) {
                switch (d.label) {
                case 0:
                    return i = Vh.isSameOrigin(n),
                    l = !Zc(n) && this._options.useCORS === !0 && ce.SUPPORT_CORS_IMAGES && !i,
                    c = !Zc(n) && !i && !qc(n) && typeof this._options.proxy == "string" && ce.SUPPORT_CORS_XHR && !l,
                    !i && this._options.allowTaint === !1 && !Zc(n) && !qc(n) && !c && !l ? [2] : (o = n,
                    c ? [4, this.proxy(o)] : [3, 2]);
                case 1:
                    o = d.sent(),
                    d.label = 2;
                case 2:
                    return this.context.logger.debug("Added image " + n.substring(0, 256)),
                    [4, new Promise(function(g, Q) {
                        var U = new Image;
                        U.onload = function() {
                            return g(U)
                        }
                        ,
                        U.onerror = Q,
                        (HF(o) || l) && (U.crossOrigin = "anonymous"),
                        U.src = o,
                        U.complete === !0 && setTimeout(function() {
                            return g(U)
                        }, 500),
                        B._options.imageTimeout > 0 && setTimeout(function() {
                            return Q("Timed out (" + B._options.imageTimeout + "ms) loading image")
                        }, B._options.imageTimeout)
                    }
                    )];
                case 3:
                    return [2, d.sent()]
                }
            })
        })
    }
    ,
    r.prototype.has = function(n) {
        return typeof this._cache[n] < "u"
    }
    ,
    r.prototype.keys = function() {
        return Promise.resolve(Object.keys(this._cache))
    }
    ,
    r.prototype.proxy = function(n) {
        var i = this
          , l = this._options.proxy;
        if (!l)
            throw new Error("No proxy defined");
        var c = n.substring(0, 256);
        return new Promise(function(o, B) {
            var d = ce.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
              , g = new XMLHttpRequest;
            g.onload = function() {
                if (g.status === 200)
                    if (d === "text")
                        o(g.response);
                    else {
                        var C = new FileReader;
                        C.addEventListener("load", function() {
                            return o(C.result)
                        }, !1),
                        C.addEventListener("error", function(y) {
                            return B(y)
                        }, !1),
                        C.readAsDataURL(g.response)
                    }
                else
                    B("Failed to proxy resource " + c + " with status code " + g.status)
            }
            ,
            g.onerror = B;
            var Q = l.indexOf("?") > -1 ? "&" : "?";
            if (g.open("GET", "" + l + Q + "url=" + encodeURIComponent(n) + "&responseType=" + d),
            d !== "text" && g instanceof XMLHttpRequest && (g.responseType = d),
            i._options.imageTimeout) {
                var U = i._options.imageTimeout;
                g.timeout = U,
                g.ontimeout = function() {
                    return B("Timed out (" + U + "ms) proxying " + c)
                }
            }
            g.send()
        }
        )
    }
    ,
    r
}
)(), pF = /^data:image\/svg\+xml/i, FF = /^data:image\/.*;base64,/i, yF = /^data:image\/.*/i, EF = function(r) {
    return ce.SUPPORT_SVG_DRAWING || !bF(r)
}, Zc = function(r) {
    return yF.test(r)
}, HF = function(r) {
    return FF.test(r)
}, qc = function(r) {
    return r.substr(0, 4) === "blob"
}, bF = function(r) {
    return r.substr(-3).toLowerCase() === "svg" || pF.test(r)
}, k = (function() {
    function r(n, i) {
        this.type = 0,
        this.x = n,
        this.y = i
    }
    return r.prototype.add = function(n, i) {
        return new r(this.x + n,this.y + i)
    }
    ,
    r
}
)(), Fn = function(r, n, i) {
    return new k(r.x + (n.x - r.x) * i,r.y + (n.y - r.y) * i)
}, Ti = (function() {
    function r(n, i, l, c) {
        this.type = 1,
        this.start = n,
        this.startControl = i,
        this.endControl = l,
        this.end = c
    }
    return r.prototype.subdivide = function(n, i) {
        var l = Fn(this.start, this.startControl, n)
          , c = Fn(this.startControl, this.endControl, n)
          , o = Fn(this.endControl, this.end, n)
          , B = Fn(l, c, n)
          , d = Fn(c, o, n)
          , g = Fn(B, d, n);
        return i ? new r(this.start,l,B,g) : new r(g,d,o,this.end)
    }
    ,
    r.prototype.add = function(n, i) {
        return new r(this.start.add(n, i),this.startControl.add(n, i),this.endControl.add(n, i),this.end.add(n, i))
    }
    ,
    r.prototype.reverse = function() {
        return new r(this.end,this.endControl,this.startControl,this.start)
    }
    ,
    r
}
)(), ke = function(r) {
    return r.type === 1
}, xF = (function() {
    function r(n) {
        var i = n.styles
          , l = n.bounds
          , c = Il(i.borderTopLeftRadius, l.width, l.height)
          , o = c[0]
          , B = c[1]
          , d = Il(i.borderTopRightRadius, l.width, l.height)
          , g = d[0]
          , Q = d[1]
          , U = Il(i.borderBottomRightRadius, l.width, l.height)
          , C = U[0]
          , y = U[1]
          , I = Il(i.borderBottomLeftRadius, l.width, l.height)
          , D = I[0]
          , L = I[1]
          , X = [];
        X.push((o + g) / l.width),
        X.push((D + C) / l.width),
        X.push((B + L) / l.height),
        X.push((Q + y) / l.height);
        var _ = Math.max.apply(Math, X);
        _ > 1 && (o /= _,
        B /= _,
        g /= _,
        Q /= _,
        C /= _,
        y /= _,
        D /= _,
        L /= _);
        var R = l.width - g
          , W = l.height - y
          , AA = l.width - C
          , P = l.height - L
          , N = i.borderTopWidth
          , G = i.borderRightWidth
          , Z = i.borderBottomWidth
          , J = i.borderLeftWidth
          , nA = IA(i.paddingTop, n.bounds.width)
          , sA = IA(i.paddingRight, n.bounds.width)
          , gA = IA(i.paddingBottom, n.bounds.width)
          , oA = IA(i.paddingLeft, n.bounds.width);
        this.topLeftBorderDoubleOuterBox = o > 0 || B > 0 ? _A(l.left + J / 3, l.top + N / 3, o - J / 3, B - N / 3, EA.TOP_LEFT) : new k(l.left + J / 3,l.top + N / 3),
        this.topRightBorderDoubleOuterBox = o > 0 || B > 0 ? _A(l.left + R, l.top + N / 3, g - G / 3, Q - N / 3, EA.TOP_RIGHT) : new k(l.left + l.width - G / 3,l.top + N / 3),
        this.bottomRightBorderDoubleOuterBox = C > 0 || y > 0 ? _A(l.left + AA, l.top + W, C - G / 3, y - Z / 3, EA.BOTTOM_RIGHT) : new k(l.left + l.width - G / 3,l.top + l.height - Z / 3),
        this.bottomLeftBorderDoubleOuterBox = D > 0 || L > 0 ? _A(l.left + J / 3, l.top + P, D - J / 3, L - Z / 3, EA.BOTTOM_LEFT) : new k(l.left + J / 3,l.top + l.height - Z / 3),
        this.topLeftBorderDoubleInnerBox = o > 0 || B > 0 ? _A(l.left + J * 2 / 3, l.top + N * 2 / 3, o - J * 2 / 3, B - N * 2 / 3, EA.TOP_LEFT) : new k(l.left + J * 2 / 3,l.top + N * 2 / 3),
        this.topRightBorderDoubleInnerBox = o > 0 || B > 0 ? _A(l.left + R, l.top + N * 2 / 3, g - G * 2 / 3, Q - N * 2 / 3, EA.TOP_RIGHT) : new k(l.left + l.width - G * 2 / 3,l.top + N * 2 / 3),
        this.bottomRightBorderDoubleInnerBox = C > 0 || y > 0 ? _A(l.left + AA, l.top + W, C - G * 2 / 3, y - Z * 2 / 3, EA.BOTTOM_RIGHT) : new k(l.left + l.width - G * 2 / 3,l.top + l.height - Z * 2 / 3),
        this.bottomLeftBorderDoubleInnerBox = D > 0 || L > 0 ? _A(l.left + J * 2 / 3, l.top + P, D - J * 2 / 3, L - Z * 2 / 3, EA.BOTTOM_LEFT) : new k(l.left + J * 2 / 3,l.top + l.height - Z * 2 / 3),
        this.topLeftBorderStroke = o > 0 || B > 0 ? _A(l.left + J / 2, l.top + N / 2, o - J / 2, B - N / 2, EA.TOP_LEFT) : new k(l.left + J / 2,l.top + N / 2),
        this.topRightBorderStroke = o > 0 || B > 0 ? _A(l.left + R, l.top + N / 2, g - G / 2, Q - N / 2, EA.TOP_RIGHT) : new k(l.left + l.width - G / 2,l.top + N / 2),
        this.bottomRightBorderStroke = C > 0 || y > 0 ? _A(l.left + AA, l.top + W, C - G / 2, y - Z / 2, EA.BOTTOM_RIGHT) : new k(l.left + l.width - G / 2,l.top + l.height - Z / 2),
        this.bottomLeftBorderStroke = D > 0 || L > 0 ? _A(l.left + J / 2, l.top + P, D - J / 2, L - Z / 2, EA.BOTTOM_LEFT) : new k(l.left + J / 2,l.top + l.height - Z / 2),
        this.topLeftBorderBox = o > 0 || B > 0 ? _A(l.left, l.top, o, B, EA.TOP_LEFT) : new k(l.left,l.top),
        this.topRightBorderBox = g > 0 || Q > 0 ? _A(l.left + R, l.top, g, Q, EA.TOP_RIGHT) : new k(l.left + l.width,l.top),
        this.bottomRightBorderBox = C > 0 || y > 0 ? _A(l.left + AA, l.top + W, C, y, EA.BOTTOM_RIGHT) : new k(l.left + l.width,l.top + l.height),
        this.bottomLeftBorderBox = D > 0 || L > 0 ? _A(l.left, l.top + P, D, L, EA.BOTTOM_LEFT) : new k(l.left,l.top + l.height),
        this.topLeftPaddingBox = o > 0 || B > 0 ? _A(l.left + J, l.top + N, Math.max(0, o - J), Math.max(0, B - N), EA.TOP_LEFT) : new k(l.left + J,l.top + N),
        this.topRightPaddingBox = g > 0 || Q > 0 ? _A(l.left + Math.min(R, l.width - G), l.top + N, R > l.width + G ? 0 : Math.max(0, g - G), Math.max(0, Q - N), EA.TOP_RIGHT) : new k(l.left + l.width - G,l.top + N),
        this.bottomRightPaddingBox = C > 0 || y > 0 ? _A(l.left + Math.min(AA, l.width - J), l.top + Math.min(W, l.height - Z), Math.max(0, C - G), Math.max(0, y - Z), EA.BOTTOM_RIGHT) : new k(l.left + l.width - G,l.top + l.height - Z),
        this.bottomLeftPaddingBox = D > 0 || L > 0 ? _A(l.left + J, l.top + Math.min(P, l.height - Z), Math.max(0, D - J), Math.max(0, L - Z), EA.BOTTOM_LEFT) : new k(l.left + J,l.top + l.height - Z),
        this.topLeftContentBox = o > 0 || B > 0 ? _A(l.left + J + oA, l.top + N + nA, Math.max(0, o - (J + oA)), Math.max(0, B - (N + nA)), EA.TOP_LEFT) : new k(l.left + J + oA,l.top + N + nA),
        this.topRightContentBox = g > 0 || Q > 0 ? _A(l.left + Math.min(R, l.width + J + oA), l.top + N + nA, R > l.width + J + oA ? 0 : g - J + oA, Q - (N + nA), EA.TOP_RIGHT) : new k(l.left + l.width - (G + sA),l.top + N + nA),
        this.bottomRightContentBox = C > 0 || y > 0 ? _A(l.left + Math.min(AA, l.width - (J + oA)), l.top + Math.min(W, l.height + N + nA), Math.max(0, C - (G + sA)), y - (Z + gA), EA.BOTTOM_RIGHT) : new k(l.left + l.width - (G + sA),l.top + l.height - (Z + gA)),
        this.bottomLeftContentBox = D > 0 || L > 0 ? _A(l.left + J + oA, l.top + P, Math.max(0, D - (J + oA)), L - (Z + gA), EA.BOTTOM_LEFT) : new k(l.left + J + oA,l.top + l.height - (Z + gA))
    }
    return r
}
)(), EA;
(function(r) {
    r[r.TOP_LEFT = 0] = "TOP_LEFT",
    r[r.TOP_RIGHT = 1] = "TOP_RIGHT",
    r[r.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
    r[r.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
}
)(EA || (EA = {}));
var _A = function(r, n, i, l, c) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3)
      , B = i * o
      , d = l * o
      , g = r + i
      , Q = n + l;
    switch (c) {
    case EA.TOP_LEFT:
        return new Ti(new k(r,Q),new k(r,Q - d),new k(g - B,n),new k(g,n));
    case EA.TOP_RIGHT:
        return new Ti(new k(r,n),new k(r + B,n),new k(g,Q - d),new k(g,Q));
    case EA.BOTTOM_RIGHT:
        return new Ti(new k(g,n),new k(g,n + d),new k(r + B,Q),new k(r,Q));
    case EA.BOTTOM_LEFT:
    default:
        return new Ti(new k(g,Q),new k(g - B,Q),new k(r,n + d),new k(r,n))
    }
}
  , Ji = function(r) {
    return [r.topLeftBorderBox, r.topRightBorderBox, r.bottomRightBorderBox, r.bottomLeftBorderBox]
}
  , SF = function(r) {
    return [r.topLeftContentBox, r.topRightContentBox, r.bottomRightContentBox, r.bottomLeftContentBox]
}
  , ki = function(r) {
    return [r.topLeftPaddingBox, r.topRightPaddingBox, r.bottomRightPaddingBox, r.bottomLeftPaddingBox]
}
  , TF = (function() {
    function r(n, i, l) {
        this.offsetX = n,
        this.offsetY = i,
        this.matrix = l,
        this.type = 0,
        this.target = 6
    }
    return r
}
)()
  , Di = (function() {
    function r(n, i) {
        this.path = n,
        this.target = i,
        this.type = 1
    }
    return r
}
)()
  , DF = (function() {
    function r(n) {
        this.opacity = n,
        this.type = 2,
        this.target = 6
    }
    return r
}
)()
  , KF = function(r) {
    return r.type === 0
}
  , zh = function(r) {
    return r.type === 1
}
  , LF = function(r) {
    return r.type === 2
}
  , _0 = function(r, n) {
    return r.length === n.length ? r.some(function(i, l) {
        return i === n[l]
    }) : !1
}
  , IF = function(r, n, i, l, c) {
    return r.map(function(o, B) {
        switch (B) {
        case 0:
            return o.add(n, i);
        case 1:
            return o.add(n + l, i);
        case 2:
            return o.add(n + l, i + c);
        case 3:
            return o.add(n, i + c)
        }
        return o
    })
}
  , jh = (function() {
    function r(n) {
        this.element = n,
        this.inlineLevel = [],
        this.nonInlineLevel = [],
        this.negativeZIndex = [],
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
        this.positiveZIndex = [],
        this.nonPositionedFloats = [],
        this.nonPositionedInlineLevel = []
    }
    return r
}
)()
  , Xh = (function() {
    function r(n, i) {
        if (this.container = n,
        this.parent = i,
        this.effects = [],
        this.curves = new xF(this.container),
        this.container.styles.opacity < 1 && this.effects.push(new DF(this.container.styles.opacity)),
        this.container.styles.transform !== null) {
            var l = this.container.bounds.left + this.container.styles.transformOrigin[0].number
              , c = this.container.bounds.top + this.container.styles.transformOrigin[1].number
              , o = this.container.styles.transform;
            this.effects.push(new TF(l,c,o))
        }
        if (this.container.styles.overflowX !== 0) {
            var B = Ji(this.curves)
              , d = ki(this.curves);
            _0(B, d) ? this.effects.push(new Di(B,6)) : (this.effects.push(new Di(B,2)),
            this.effects.push(new Di(d,4)))
        }
    }
    return r.prototype.getEffects = function(n) {
        for (var i = [2, 3].indexOf(this.container.styles.position) === -1, l = this.parent, c = this.effects.slice(0); l; ) {
            var o = l.effects.filter(function(g) {
                return !zh(g)
            });
            if (i || l.container.styles.position !== 0 || !l.parent) {
                if (c.unshift.apply(c, o),
                i = [2, 3].indexOf(l.container.styles.position) === -1,
                l.container.styles.overflowX !== 0) {
                    var B = Ji(l.curves)
                      , d = ki(l.curves);
                    _0(B, d) || c.unshift(new Di(d,6))
                }
            } else
                c.unshift.apply(c, o);
            l = l.parent
        }
        return c.filter(function(g) {
            return ee(g.target, n)
        })
    }
    ,
    r
}
)()
  , vo = function(r, n, i, l) {
    r.container.elements.forEach(function(c) {
        var o = ee(c.flags, 4)
          , B = ee(c.flags, 2)
          , d = new Xh(c,r);
        ee(c.styles.display, 2048) && l.push(d);
        var g = ee(c.flags, 8) ? [] : l;
        if (o || B) {
            var Q = o || c.styles.isPositioned() ? i : n
              , U = new jh(d);
            if (c.styles.isPositioned() || c.styles.opacity < 1 || c.styles.isTransformed()) {
                var C = c.styles.zIndex.order;
                if (C < 0) {
                    var y = 0;
                    Q.negativeZIndex.some(function(D, L) {
                        return C > D.element.container.styles.zIndex.order ? (y = L,
                        !1) : y > 0
                    }),
                    Q.negativeZIndex.splice(y, 0, U)
                } else if (C > 0) {
                    var I = 0;
                    Q.positiveZIndex.some(function(D, L) {
                        return C >= D.element.container.styles.zIndex.order ? (I = L + 1,
                        !1) : I > 0
                    }),
                    Q.positiveZIndex.splice(I, 0, U)
                } else
                    Q.zeroOrAutoZIndexOrTransformedOrOpacity.push(U)
            } else
                c.styles.isFloating() ? Q.nonPositionedFloats.push(U) : Q.nonPositionedInlineLevel.push(U);
            vo(d, U, o ? U : i, g)
        } else
            c.styles.isInlineLevel() ? n.inlineLevel.push(d) : n.nonInlineLevel.push(d),
            vo(d, n, i, g);
        ee(c.flags, 8) && Yh(c, g)
    })
}
  , Yh = function(r, n) {
    for (var i = r instanceof Qo ? r.start : 1, l = r instanceof Qo ? r.reversed : !1, c = 0; c < n.length; c++) {
        var o = n[c];
        o.container instanceof xh && typeof o.container.value == "number" && o.container.value !== 0 && (i = o.container.value),
        o.listValue = Xl(i, o.container.styles.listStyleType, !0),
        i += l ? -1 : 1
    }
}
  , MF = function(r) {
    var n = new Xh(r,null)
      , i = new jh(n)
      , l = [];
    return vo(n, i, i, l),
    Yh(n.container, l),
    i
}
  , G0 = function(r, n) {
    switch (n) {
    case 0:
        return qe(r.topLeftBorderBox, r.topLeftPaddingBox, r.topRightBorderBox, r.topRightPaddingBox);
    case 1:
        return qe(r.topRightBorderBox, r.topRightPaddingBox, r.bottomRightBorderBox, r.bottomRightPaddingBox);
    case 2:
        return qe(r.bottomRightBorderBox, r.bottomRightPaddingBox, r.bottomLeftBorderBox, r.bottomLeftPaddingBox);
    case 3:
    default:
        return qe(r.bottomLeftBorderBox, r.bottomLeftPaddingBox, r.topLeftBorderBox, r.topLeftPaddingBox)
    }
}
  , NF = function(r, n) {
    switch (n) {
    case 0:
        return qe(r.topLeftBorderBox, r.topLeftBorderDoubleOuterBox, r.topRightBorderBox, r.topRightBorderDoubleOuterBox);
    case 1:
        return qe(r.topRightBorderBox, r.topRightBorderDoubleOuterBox, r.bottomRightBorderBox, r.bottomRightBorderDoubleOuterBox);
    case 2:
        return qe(r.bottomRightBorderBox, r.bottomRightBorderDoubleOuterBox, r.bottomLeftBorderBox, r.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
        return qe(r.bottomLeftBorderBox, r.bottomLeftBorderDoubleOuterBox, r.topLeftBorderBox, r.topLeftBorderDoubleOuterBox)
    }
}
  , OF = function(r, n) {
    switch (n) {
    case 0:
        return qe(r.topLeftBorderDoubleInnerBox, r.topLeftPaddingBox, r.topRightBorderDoubleInnerBox, r.topRightPaddingBox);
    case 1:
        return qe(r.topRightBorderDoubleInnerBox, r.topRightPaddingBox, r.bottomRightBorderDoubleInnerBox, r.bottomRightPaddingBox);
    case 2:
        return qe(r.bottomRightBorderDoubleInnerBox, r.bottomRightPaddingBox, r.bottomLeftBorderDoubleInnerBox, r.bottomLeftPaddingBox);
    case 3:
    default:
        return qe(r.bottomLeftBorderDoubleInnerBox, r.bottomLeftPaddingBox, r.topLeftBorderDoubleInnerBox, r.topLeftPaddingBox)
    }
}
  , RF = function(r, n) {
    switch (n) {
    case 0:
        return Ki(r.topLeftBorderStroke, r.topRightBorderStroke);
    case 1:
        return Ki(r.topRightBorderStroke, r.bottomRightBorderStroke);
    case 2:
        return Ki(r.bottomRightBorderStroke, r.bottomLeftBorderStroke);
    case 3:
    default:
        return Ki(r.bottomLeftBorderStroke, r.topLeftBorderStroke)
    }
}
  , Ki = function(r, n) {
    var i = [];
    return ke(r) ? i.push(r.subdivide(.5, !1)) : i.push(r),
    ke(n) ? i.push(n.subdivide(.5, !0)) : i.push(n),
    i
}
  , qe = function(r, n, i, l) {
    var c = [];
    return ke(r) ? c.push(r.subdivide(.5, !1)) : c.push(r),
    ke(i) ? c.push(i.subdivide(.5, !0)) : c.push(i),
    ke(l) ? c.push(l.subdivide(.5, !0).reverse()) : c.push(l),
    ke(n) ? c.push(n.subdivide(.5, !1).reverse()) : c.push(n),
    c
}
  , Jh = function(r) {
    var n = r.bounds
      , i = r.styles;
    return n.add(i.borderLeftWidth, i.borderTopWidth, -(i.borderRightWidth + i.borderLeftWidth), -(i.borderTopWidth + i.borderBottomWidth))
}
  , Zi = function(r) {
    var n = r.styles
      , i = r.bounds
      , l = IA(n.paddingLeft, i.width)
      , c = IA(n.paddingRight, i.width)
      , o = IA(n.paddingTop, i.width)
      , B = IA(n.paddingBottom, i.width);
    return i.add(l + n.borderLeftWidth, o + n.borderTopWidth, -(n.borderRightWidth + n.borderLeftWidth + l + c), -(n.borderTopWidth + n.borderBottomWidth + o + B))
}
  , _F = function(r, n) {
    return r === 0 ? n.bounds : r === 2 ? Zi(n) : Jh(n)
}
  , GF = function(r, n) {
    return r === 0 ? n.bounds : r === 2 ? Zi(n) : Jh(n)
}
  , Wc = function(r, n, i) {
    var l = _F(Hn(r.styles.backgroundOrigin, n), r)
      , c = GF(Hn(r.styles.backgroundClip, n), r)
      , o = VF(Hn(r.styles.backgroundSize, n), i, l)
      , B = o[0]
      , d = o[1]
      , g = Il(Hn(r.styles.backgroundPosition, n), l.width - B, l.height - d)
      , Q = zF(Hn(r.styles.backgroundRepeat, n), g, o, l, c)
      , U = Math.round(l.left + g[0])
      , C = Math.round(l.top + g[1]);
    return [Q, U, C, B, d]
}
  , yn = function(r) {
    return KA(r) && r.value === xn.AUTO
}
  , Li = function(r) {
    return typeof r == "number"
}
  , VF = function(r, n, i) {
    var l = n[0]
      , c = n[1]
      , o = n[2]
      , B = r[0]
      , d = r[1];
    if (!B)
        return [0, 0];
    if ($A(B) && d && $A(d))
        return [IA(B, i.width), IA(d, i.height)];
    var g = Li(o);
    if (KA(B) && (B.value === xn.CONTAIN || B.value === xn.COVER)) {
        if (Li(o)) {
            var Q = i.width / i.height;
            return Q < o != (B.value === xn.COVER) ? [i.width, i.width / o] : [i.height * o, i.height]
        }
        return [i.width, i.height]
    }
    var U = Li(l)
      , C = Li(c)
      , y = U || C;
    if (yn(B) && (!d || yn(d))) {
        if (U && C)
            return [l, c];
        if (!g && !y)
            return [i.width, i.height];
        if (y && g) {
            var I = U ? l : c * o
              , D = C ? c : l / o;
            return [I, D]
        }
        var L = U ? l : i.width
          , X = C ? c : i.height;
        return [L, X]
    }
    if (g) {
        var _ = 0
          , R = 0;
        return $A(B) ? _ = IA(B, i.width) : $A(d) && (R = IA(d, i.height)),
        yn(B) ? _ = R * o : (!d || yn(d)) && (R = _ / o),
        [_, R]
    }
    var W = null
      , AA = null;
    if ($A(B) ? W = IA(B, i.width) : d && $A(d) && (AA = IA(d, i.height)),
    W !== null && (!d || yn(d)) && (AA = U && C ? W / l * c : i.height),
    AA !== null && yn(B) && (W = U && C ? AA / c * l : i.width),
    W !== null && AA !== null)
        return [W, AA];
    throw new Error("Unable to calculate background-size for element")
}
  , Hn = function(r, n) {
    var i = r[n];
    return typeof i > "u" ? r[0] : i
}
  , zF = function(r, n, i, l, c) {
    var o = n[0]
      , B = n[1]
      , d = i[0]
      , g = i[1];
    switch (r) {
    case 2:
        return [new k(Math.round(l.left),Math.round(l.top + B)), new k(Math.round(l.left + l.width),Math.round(l.top + B)), new k(Math.round(l.left + l.width),Math.round(g + l.top + B)), new k(Math.round(l.left),Math.round(g + l.top + B))];
    case 3:
        return [new k(Math.round(l.left + o),Math.round(l.top)), new k(Math.round(l.left + o + d),Math.round(l.top)), new k(Math.round(l.left + o + d),Math.round(l.height + l.top)), new k(Math.round(l.left + o),Math.round(l.height + l.top))];
    case 1:
        return [new k(Math.round(l.left + o),Math.round(l.top + B)), new k(Math.round(l.left + o + d),Math.round(l.top + B)), new k(Math.round(l.left + o + d),Math.round(l.top + B + g)), new k(Math.round(l.left + o),Math.round(l.top + B + g))];
    default:
        return [new k(Math.round(c.left),Math.round(c.top)), new k(Math.round(c.left + c.width),Math.round(c.top)), new k(Math.round(c.left + c.width),Math.round(c.height + c.top)), new k(Math.round(c.left),Math.round(c.height + c.top))]
    }
}
  , jF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  , V0 = "Hidden Text"
  , XF = (function() {
    function r(n) {
        this._data = {},
        this._document = n
    }
    return r.prototype.parseMetrics = function(n, i) {
        var l = this._document.createElement("div")
          , c = this._document.createElement("img")
          , o = this._document.createElement("span")
          , B = this._document.body;
        l.style.visibility = "hidden",
        l.style.fontFamily = n,
        l.style.fontSize = i,
        l.style.margin = "0",
        l.style.padding = "0",
        l.style.whiteSpace = "nowrap",
        B.appendChild(l),
        c.src = jF,
        c.width = 1,
        c.height = 1,
        c.style.margin = "0",
        c.style.padding = "0",
        c.style.verticalAlign = "baseline",
        o.style.fontFamily = n,
        o.style.fontSize = i,
        o.style.margin = "0",
        o.style.padding = "0",
        o.appendChild(this._document.createTextNode(V0)),
        l.appendChild(o),
        l.appendChild(c);
        var d = c.offsetTop - o.offsetTop + 2;
        l.removeChild(o),
        l.appendChild(this._document.createTextNode(V0)),
        l.style.lineHeight = "normal",
        c.style.verticalAlign = "super";
        var g = c.offsetTop - l.offsetTop + 2;
        return B.removeChild(l),
        {
            baseline: d,
            middle: g
        }
    }
    ,
    r.prototype.getMetrics = function(n, i) {
        var l = n + " " + i;
        return typeof this._data[l] > "u" && (this._data[l] = this.parseMetrics(n, i)),
        this._data[l]
    }
    ,
    r
}
)()
  , kh = (function() {
    function r(n, i) {
        this.context = n,
        this.options = i
    }
    return r
}
)()
  , YF = 1e4
  , JF = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c._activeEffects = [],
        c.canvas = l.canvas ? l.canvas : document.createElement("canvas"),
        c.ctx = c.canvas.getContext("2d"),
        l.canvas || (c.canvas.width = Math.floor(l.width * l.scale),
        c.canvas.height = Math.floor(l.height * l.scale),
        c.canvas.style.width = l.width + "px",
        c.canvas.style.height = l.height + "px"),
        c.fontMetrics = new XF(document),
        c.ctx.scale(c.options.scale, c.options.scale),
        c.ctx.translate(-l.x, -l.y),
        c.ctx.textBaseline = "bottom",
        c._activeEffects = [],
        c.context.logger.debug("Canvas renderer initialized (" + l.width + "x" + l.height + ") with scale " + l.scale),
        c
    }
    return n.prototype.applyEffects = function(i) {
        for (var l = this; this._activeEffects.length; )
            this.popEffect();
        i.forEach(function(c) {
            return l.applyEffect(c)
        })
    }
    ,
    n.prototype.applyEffect = function(i) {
        this.ctx.save(),
        LF(i) && (this.ctx.globalAlpha = i.opacity),
        KF(i) && (this.ctx.translate(i.offsetX, i.offsetY),
        this.ctx.transform(i.matrix[0], i.matrix[1], i.matrix[2], i.matrix[3], i.matrix[4], i.matrix[5]),
        this.ctx.translate(-i.offsetX, -i.offsetY)),
        zh(i) && (this.path(i.path),
        this.ctx.clip()),
        this._activeEffects.push(i)
    }
    ,
    n.prototype.popEffect = function() {
        this._activeEffects.pop(),
        this.ctx.restore()
    }
    ,
    n.prototype.renderStack = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l;
            return Be(this, function(c) {
                switch (c.label) {
                case 0:
                    return l = i.element.container.styles,
                    l.isVisible() ? [4, this.renderStackContent(i)] : [3, 2];
                case 1:
                    c.sent(),
                    c.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.renderNode = function(i) {
        return Qe(this, void 0, void 0, function() {
            return Be(this, function(l) {
                switch (l.label) {
                case 0:
                    if (ee(i.container.flags, 16))
                        debugger ;return i.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(i)] : [3, 3];
                case 1:
                    return l.sent(),
                    [4, this.renderNodeContent(i)];
                case 2:
                    l.sent(),
                    l.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.renderTextWithLetterSpacing = function(i, l, c) {
        var o = this;
        if (l === 0)
            this.ctx.fillText(i.text, i.bounds.left, i.bounds.top + c);
        else {
            var B = bo(i.text);
            B.reduce(function(d, g) {
                return o.ctx.fillText(g, d, i.bounds.top + c),
                d + o.ctx.measureText(g).width
            }, i.bounds.left)
        }
    }
    ,
    n.prototype.createFontStyle = function(i) {
        var l = i.fontVariant.filter(function(B) {
            return B === "normal" || B === "small-caps"
        }).join("")
          , c = PF(i.fontFamily).join(", ")
          , o = Jl(i.fontSize) ? "" + i.fontSize.number + i.fontSize.unit : i.fontSize.number + "px";
        return [[i.fontStyle, l, i.fontWeight, o, c].join(" "), c, o]
    }
    ,
    n.prototype.renderTextNode = function(i, l) {
        return Qe(this, void 0, void 0, function() {
            var c, o, B, d, g, Q, U, C, y = this;
            return Be(this, function(I) {
                return c = this.createFontStyle(l),
                o = c[0],
                B = c[1],
                d = c[2],
                this.ctx.font = o,
                this.ctx.direction = l.direction === 1 ? "rtl" : "ltr",
                this.ctx.textAlign = "left",
                this.ctx.textBaseline = "alphabetic",
                g = this.fontMetrics.getMetrics(B, d),
                Q = g.baseline,
                U = g.middle,
                C = l.paintOrder,
                i.textBounds.forEach(function(D) {
                    C.forEach(function(L) {
                        switch (L) {
                        case 0:
                            y.ctx.fillStyle = ne(l.color),
                            y.renderTextWithLetterSpacing(D, l.letterSpacing, Q);
                            var X = l.textShadow;
                            X.length && D.text.trim().length && (X.slice(0).reverse().forEach(function(_) {
                                y.ctx.shadowColor = ne(_.color),
                                y.ctx.shadowOffsetX = _.offsetX.number * y.options.scale,
                                y.ctx.shadowOffsetY = _.offsetY.number * y.options.scale,
                                y.ctx.shadowBlur = _.blur.number,
                                y.renderTextWithLetterSpacing(D, l.letterSpacing, Q)
                            }),
                            y.ctx.shadowColor = "",
                            y.ctx.shadowOffsetX = 0,
                            y.ctx.shadowOffsetY = 0,
                            y.ctx.shadowBlur = 0),
                            l.textDecorationLine.length && (y.ctx.fillStyle = ne(l.textDecorationColor || l.color),
                            l.textDecorationLine.forEach(function(_) {
                                switch (_) {
                                case 1:
                                    y.ctx.fillRect(D.bounds.left, Math.round(D.bounds.top + Q), D.bounds.width, 1);
                                    break;
                                case 2:
                                    y.ctx.fillRect(D.bounds.left, Math.round(D.bounds.top), D.bounds.width, 1);
                                    break;
                                case 3:
                                    y.ctx.fillRect(D.bounds.left, Math.ceil(D.bounds.top + U), D.bounds.width, 1);
                                    break
                                }
                            }));
                            break;
                        case 1:
                            l.webkitTextStrokeWidth && D.text.trim().length && (y.ctx.strokeStyle = ne(l.webkitTextStrokeColor),
                            y.ctx.lineWidth = l.webkitTextStrokeWidth,
                            y.ctx.lineJoin = window.chrome ? "miter" : "round",
                            y.ctx.strokeText(D.text, D.bounds.left, D.bounds.top + Q)),
                            y.ctx.strokeStyle = "",
                            y.ctx.lineWidth = 0,
                            y.ctx.lineJoin = "miter";
                            break
                        }
                    })
                }),
                [2]
            })
        })
    }
    ,
    n.prototype.renderReplacedElement = function(i, l, c) {
        if (c && i.intrinsicWidth > 0 && i.intrinsicHeight > 0) {
            var o = Zi(i)
              , B = ki(l);
            this.path(B),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(c, 0, 0, i.intrinsicWidth, i.intrinsicHeight, o.left, o.top, o.width, o.height),
            this.ctx.restore()
        }
    }
    ,
    n.prototype.renderNodeContent = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l, c, o, B, d, g, R, R, Q, U, C, y, AA, I, D, P, L, X, _, R, W, AA, P;
            return Be(this, function(N) {
                switch (N.label) {
                case 0:
                    this.applyEffects(i.getEffects(4)),
                    l = i.container,
                    c = i.curves,
                    o = l.styles,
                    B = 0,
                    d = l.textNodes,
                    N.label = 1;
                case 1:
                    return B < d.length ? (g = d[B],
                    [4, this.renderTextNode(g, o)]) : [3, 4];
                case 2:
                    N.sent(),
                    N.label = 3;
                case 3:
                    return B++,
                    [3, 1];
                case 4:
                    if (!(l instanceof Eh))
                        return [3, 8];
                    N.label = 5;
                case 5:
                    return N.trys.push([5, 7, , 8]),
                    [4, this.context.cache.match(l.src)];
                case 6:
                    return R = N.sent(),
                    this.renderReplacedElement(l, c, R),
                    [3, 8];
                case 7:
                    return N.sent(),
                    this.context.logger.error("Error loading image " + l.src),
                    [3, 8];
                case 8:
                    if (l instanceof Hh && this.renderReplacedElement(l, c, l.canvas),
                    !(l instanceof bh))
                        return [3, 12];
                    N.label = 9;
                case 9:
                    return N.trys.push([9, 11, , 12]),
                    [4, this.context.cache.match(l.svg)];
                case 10:
                    return R = N.sent(),
                    this.renderReplacedElement(l, c, R),
                    [3, 12];
                case 11:
                    return N.sent(),
                    this.context.logger.error("Error loading svg " + l.svg.substring(0, 255)),
                    [3, 12];
                case 12:
                    return l instanceof Dh && l.tree ? (Q = new n(this.context,{
                        scale: this.options.scale,
                        backgroundColor: l.backgroundColor,
                        x: 0,
                        y: 0,
                        width: l.width,
                        height: l.height
                    }),
                    [4, Q.render(l.tree)]) : [3, 14];
                case 13:
                    U = N.sent(),
                    l.width && l.height && this.ctx.drawImage(U, 0, 0, l.width, l.height, l.bounds.left, l.bounds.top, l.bounds.width, l.bounds.height),
                    N.label = 14;
                case 14:
                    if (l instanceof xo && (C = Math.min(l.bounds.width, l.bounds.height),
                    l.type === zi ? l.checked && (this.ctx.save(),
                    this.path([new k(l.bounds.left + C * .39363,l.bounds.top + C * .79), new k(l.bounds.left + C * .16,l.bounds.top + C * .5549), new k(l.bounds.left + C * .27347,l.bounds.top + C * .44071), new k(l.bounds.left + C * .39694,l.bounds.top + C * .5649), new k(l.bounds.left + C * .72983,l.bounds.top + C * .23), new k(l.bounds.left + C * .84,l.bounds.top + C * .34085), new k(l.bounds.left + C * .39363,l.bounds.top + C * .79)]),
                    this.ctx.fillStyle = ne(x0),
                    this.ctx.fill(),
                    this.ctx.restore()) : l.type === ji && l.checked && (this.ctx.save(),
                    this.ctx.beginPath(),
                    this.ctx.arc(l.bounds.left + C / 2, l.bounds.top + C / 2, C / 4, 0, Math.PI * 2, !0),
                    this.ctx.fillStyle = ne(x0),
                    this.ctx.fill(),
                    this.ctx.restore())),
                    kF(l) && l.value.length) {
                        switch (y = this.createFontStyle(o),
                        AA = y[0],
                        I = y[1],
                        D = this.fontMetrics.getMetrics(AA, I).baseline,
                        this.ctx.font = AA,
                        this.ctx.fillStyle = ne(o.color),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = qF(l.styles.textAlign),
                        P = Zi(l),
                        L = 0,
                        l.styles.textAlign) {
                        case 1:
                            L += P.width / 2;
                            break;
                        case 2:
                            L += P.width;
                            break
                        }
                        X = P.add(L, 0, 0, -P.height / 2 + 1),
                        this.ctx.save(),
                        this.path([new k(P.left,P.top), new k(P.left + P.width,P.top), new k(P.left + P.width,P.top + P.height), new k(P.left,P.top + P.height)]),
                        this.ctx.clip(),
                        this.renderTextWithLetterSpacing(new Gl(l.value,X), o.letterSpacing, D),
                        this.ctx.restore(),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = "left"
                    }
                    if (!ee(l.styles.display, 2048))
                        return [3, 20];
                    if (l.styles.listStyleImage === null)
                        return [3, 19];
                    if (_ = l.styles.listStyleImage,
                    _.type !== 0)
                        return [3, 18];
                    R = void 0,
                    W = _.url,
                    N.label = 15;
                case 15:
                    return N.trys.push([15, 17, , 18]),
                    [4, this.context.cache.match(W)];
                case 16:
                    return R = N.sent(),
                    this.ctx.drawImage(R, l.bounds.left - (R.width + 10), l.bounds.top),
                    [3, 18];
                case 17:
                    return N.sent(),
                    this.context.logger.error("Error loading list-style-image " + W),
                    [3, 18];
                case 18:
                    return [3, 20];
                case 19:
                    i.listValue && l.styles.listStyleType !== -1 && (AA = this.createFontStyle(o)[0],
                    this.ctx.font = AA,
                    this.ctx.fillStyle = ne(o.color),
                    this.ctx.textBaseline = "middle",
                    this.ctx.textAlign = "right",
                    P = new St(l.bounds.left,l.bounds.top + IA(l.styles.paddingTop, l.bounds.width),l.bounds.width,f0(o.lineHeight, o.fontSize.number) / 2 + 1),
                    this.renderTextWithLetterSpacing(new Gl(i.listValue,P), o.letterSpacing, f0(o.lineHeight, o.fontSize.number) / 2 + 2),
                    this.ctx.textBaseline = "bottom",
                    this.ctx.textAlign = "left"),
                    N.label = 20;
                case 20:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.renderStackContent = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l, c, _, o, B, _, d, g, _, Q, U, _, C, y, _, I, D, _, L, X, _;
            return Be(this, function(R) {
                switch (R.label) {
                case 0:
                    if (ee(i.element.container.flags, 16))
                        debugger ;return [4, this.renderNodeBackgroundAndBorders(i.element)];
                case 1:
                    R.sent(),
                    l = 0,
                    c = i.negativeZIndex,
                    R.label = 2;
                case 2:
                    return l < c.length ? (_ = c[l],
                    [4, this.renderStack(_)]) : [3, 5];
                case 3:
                    R.sent(),
                    R.label = 4;
                case 4:
                    return l++,
                    [3, 2];
                case 5:
                    return [4, this.renderNodeContent(i.element)];
                case 6:
                    R.sent(),
                    o = 0,
                    B = i.nonInlineLevel,
                    R.label = 7;
                case 7:
                    return o < B.length ? (_ = B[o],
                    [4, this.renderNode(_)]) : [3, 10];
                case 8:
                    R.sent(),
                    R.label = 9;
                case 9:
                    return o++,
                    [3, 7];
                case 10:
                    d = 0,
                    g = i.nonPositionedFloats,
                    R.label = 11;
                case 11:
                    return d < g.length ? (_ = g[d],
                    [4, this.renderStack(_)]) : [3, 14];
                case 12:
                    R.sent(),
                    R.label = 13;
                case 13:
                    return d++,
                    [3, 11];
                case 14:
                    Q = 0,
                    U = i.nonPositionedInlineLevel,
                    R.label = 15;
                case 15:
                    return Q < U.length ? (_ = U[Q],
                    [4, this.renderStack(_)]) : [3, 18];
                case 16:
                    R.sent(),
                    R.label = 17;
                case 17:
                    return Q++,
                    [3, 15];
                case 18:
                    C = 0,
                    y = i.inlineLevel,
                    R.label = 19;
                case 19:
                    return C < y.length ? (_ = y[C],
                    [4, this.renderNode(_)]) : [3, 22];
                case 20:
                    R.sent(),
                    R.label = 21;
                case 21:
                    return C++,
                    [3, 19];
                case 22:
                    I = 0,
                    D = i.zeroOrAutoZIndexOrTransformedOrOpacity,
                    R.label = 23;
                case 23:
                    return I < D.length ? (_ = D[I],
                    [4, this.renderStack(_)]) : [3, 26];
                case 24:
                    R.sent(),
                    R.label = 25;
                case 25:
                    return I++,
                    [3, 23];
                case 26:
                    L = 0,
                    X = i.positiveZIndex,
                    R.label = 27;
                case 27:
                    return L < X.length ? (_ = X[L],
                    [4, this.renderStack(_)]) : [3, 30];
                case 28:
                    R.sent(),
                    R.label = 29;
                case 29:
                    return L++,
                    [3, 27];
                case 30:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.mask = function(i) {
        this.ctx.beginPath(),
        this.ctx.moveTo(0, 0),
        this.ctx.lineTo(this.canvas.width, 0),
        this.ctx.lineTo(this.canvas.width, this.canvas.height),
        this.ctx.lineTo(0, this.canvas.height),
        this.ctx.lineTo(0, 0),
        this.formatPath(i.slice(0).reverse()),
        this.ctx.closePath()
    }
    ,
    n.prototype.path = function(i) {
        this.ctx.beginPath(),
        this.formatPath(i),
        this.ctx.closePath()
    }
    ,
    n.prototype.formatPath = function(i) {
        var l = this;
        i.forEach(function(c, o) {
            var B = ke(c) ? c.start : c;
            o === 0 ? l.ctx.moveTo(B.x, B.y) : l.ctx.lineTo(B.x, B.y),
            ke(c) && l.ctx.bezierCurveTo(c.startControl.x, c.startControl.y, c.endControl.x, c.endControl.y, c.end.x, c.end.y)
        })
    }
    ,
    n.prototype.renderRepeat = function(i, l, c, o) {
        this.path(i),
        this.ctx.fillStyle = l,
        this.ctx.translate(c, o),
        this.ctx.fill(),
        this.ctx.translate(-c, -o)
    }
    ,
    n.prototype.resizeImage = function(i, l, c) {
        var o;
        if (i.width === l && i.height === c)
            return i;
        var B = (o = this.canvas.ownerDocument) !== null && o !== void 0 ? o : document
          , d = B.createElement("canvas");
        d.width = Math.max(1, l),
        d.height = Math.max(1, c);
        var g = d.getContext("2d");
        return g.drawImage(i, 0, 0, i.width, i.height, 0, 0, l, c),
        d
    }
    ,
    n.prototype.renderBackgroundImage = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l, c, o, B, d, g;
            return Be(this, function(Q) {
                switch (Q.label) {
                case 0:
                    l = i.styles.backgroundImage.length - 1,
                    c = function(U) {
                        var C, y, I, nA, S, z, oA, HA, Z, D, nA, S, z, oA, HA, L, X, _, R, W, AA, P, N, G, Z, J, nA, sA, gA, oA, HA, GA, S, z, V, eA, rA, v, T, j, Y, aA;
                        return Be(this, function(uA) {
                            switch (uA.label) {
                            case 0:
                                if (U.type !== 0)
                                    return [3, 5];
                                C = void 0,
                                y = U.url,
                                uA.label = 1;
                            case 1:
                                return uA.trys.push([1, 3, , 4]),
                                [4, o.context.cache.match(y)];
                            case 2:
                                return C = uA.sent(),
                                [3, 4];
                            case 3:
                                return uA.sent(),
                                o.context.logger.error("Error loading background-image " + y),
                                [3, 4];
                            case 4:
                                return C && (I = Wc(i, l, [C.width, C.height, C.width / C.height]),
                                nA = I[0],
                                S = I[1],
                                z = I[2],
                                oA = I[3],
                                HA = I[4],
                                Z = o.ctx.createPattern(o.resizeImage(C, oA, HA), "repeat"),
                                o.renderRepeat(nA, Z, S, z)),
                                [3, 6];
                            case 5:
                                Km(U) ? (D = Wc(i, l, [null, null, null]),
                                nA = D[0],
                                S = D[1],
                                z = D[2],
                                oA = D[3],
                                HA = D[4],
                                L = bm(U.angle, oA, HA),
                                X = L[0],
                                _ = L[1],
                                R = L[2],
                                W = L[3],
                                AA = L[4],
                                P = document.createElement("canvas"),
                                P.width = oA,
                                P.height = HA,
                                N = P.getContext("2d"),
                                G = N.createLinearGradient(_, W, R, AA),
                                c0(U.stops, X).forEach(function(QA) {
                                    return G.addColorStop(QA.stop, ne(QA.color))
                                }),
                                N.fillStyle = G,
                                N.fillRect(0, 0, oA, HA),
                                oA > 0 && HA > 0 && (Z = o.ctx.createPattern(P, "repeat"),
                                o.renderRepeat(nA, Z, S, z))) : Lm(U) && (J = Wc(i, l, [null, null, null]),
                                nA = J[0],
                                sA = J[1],
                                gA = J[2],
                                oA = J[3],
                                HA = J[4],
                                GA = U.position.length === 0 ? [yo] : U.position,
                                S = IA(GA[0], oA),
                                z = IA(GA[GA.length - 1], HA),
                                V = xm(U, S, z, oA, HA),
                                eA = V[0],
                                rA = V[1],
                                eA > 0 && rA > 0 && (v = o.ctx.createRadialGradient(sA + S, gA + z, 0, sA + S, gA + z, eA),
                                c0(U.stops, eA * 2).forEach(function(QA) {
                                    return v.addColorStop(QA.stop, ne(QA.color))
                                }),
                                o.path(nA),
                                o.ctx.fillStyle = v,
                                eA !== rA ? (T = i.bounds.left + .5 * i.bounds.width,
                                j = i.bounds.top + .5 * i.bounds.height,
                                Y = rA / eA,
                                aA = 1 / Y,
                                o.ctx.save(),
                                o.ctx.translate(T, j),
                                o.ctx.transform(1, 0, 0, Y, 0, 0),
                                o.ctx.translate(-T, -j),
                                o.ctx.fillRect(sA, aA * (gA - j) + j, oA, HA * aA),
                                o.ctx.restore()) : o.ctx.fill())),
                                uA.label = 6;
                            case 6:
                                return l--,
                                [2]
                            }
                        })
                    }
                    ,
                    o = this,
                    B = 0,
                    d = i.styles.backgroundImage.slice(0).reverse(),
                    Q.label = 1;
                case 1:
                    return B < d.length ? (g = d[B],
                    [5, c(g)]) : [3, 4];
                case 2:
                    Q.sent(),
                    Q.label = 3;
                case 3:
                    return B++,
                    [3, 1];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.renderSolidBorder = function(i, l, c) {
        return Qe(this, void 0, void 0, function() {
            return Be(this, function(o) {
                return this.path(G0(c, l)),
                this.ctx.fillStyle = ne(i),
                this.ctx.fill(),
                [2]
            })
        })
    }
    ,
    n.prototype.renderDoubleBorder = function(i, l, c, o) {
        return Qe(this, void 0, void 0, function() {
            var B, d;
            return Be(this, function(g) {
                switch (g.label) {
                case 0:
                    return l < 3 ? [4, this.renderSolidBorder(i, c, o)] : [3, 2];
                case 1:
                    return g.sent(),
                    [2];
                case 2:
                    return B = NF(o, c),
                    this.path(B),
                    this.ctx.fillStyle = ne(i),
                    this.ctx.fill(),
                    d = OF(o, c),
                    this.path(d),
                    this.ctx.fill(),
                    [2]
                }
            })
        })
    }
    ,
    n.prototype.renderNodeBackgroundAndBorders = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l, c, o, B, d, g, Q, U, C = this;
            return Be(this, function(y) {
                switch (y.label) {
                case 0:
                    return this.applyEffects(i.getEffects(2)),
                    l = i.container.styles,
                    c = !ua(l.backgroundColor) || l.backgroundImage.length,
                    o = [{
                        style: l.borderTopStyle,
                        color: l.borderTopColor,
                        width: l.borderTopWidth
                    }, {
                        style: l.borderRightStyle,
                        color: l.borderRightColor,
                        width: l.borderRightWidth
                    }, {
                        style: l.borderBottomStyle,
                        color: l.borderBottomColor,
                        width: l.borderBottomWidth
                    }, {
                        style: l.borderLeftStyle,
                        color: l.borderLeftColor,
                        width: l.borderLeftWidth
                    }],
                    B = ZF(Hn(l.backgroundClip, 0), i.curves),
                    c || l.boxShadow.length ? (this.ctx.save(),
                    this.path(B),
                    this.ctx.clip(),
                    ua(l.backgroundColor) || (this.ctx.fillStyle = ne(l.backgroundColor),
                    this.ctx.fill()),
                    [4, this.renderBackgroundImage(i.container)]) : [3, 2];
                case 1:
                    y.sent(),
                    this.ctx.restore(),
                    l.boxShadow.slice(0).reverse().forEach(function(I) {
                        C.ctx.save();
                        var D = Ji(i.curves)
                          , L = I.inset ? 0 : YF
                          , X = IF(D, -L + (I.inset ? 1 : -1) * I.spread.number, (I.inset ? 1 : -1) * I.spread.number, I.spread.number * (I.inset ? -2 : 2), I.spread.number * (I.inset ? -2 : 2));
                        I.inset ? (C.path(D),
                        C.ctx.clip(),
                        C.mask(X)) : (C.mask(D),
                        C.ctx.clip(),
                        C.path(X)),
                        C.ctx.shadowOffsetX = I.offsetX.number + L,
                        C.ctx.shadowOffsetY = I.offsetY.number,
                        C.ctx.shadowColor = ne(I.color),
                        C.ctx.shadowBlur = I.blur.number,
                        C.ctx.fillStyle = I.inset ? ne(I.color) : "rgba(0,0,0,1)",
                        C.ctx.fill(),
                        C.ctx.restore()
                    }),
                    y.label = 2;
                case 2:
                    d = 0,
                    g = 0,
                    Q = o,
                    y.label = 3;
                case 3:
                    return g < Q.length ? (U = Q[g],
                    U.style !== 0 && !ua(U.color) && U.width > 0 ? U.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(U.color, U.width, d, i.curves, 2)] : [3, 11]) : [3, 13];
                case 4:
                    return y.sent(),
                    [3, 11];
                case 5:
                    return U.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(U.color, U.width, d, i.curves, 3)];
                case 6:
                    return y.sent(),
                    [3, 11];
                case 7:
                    return U.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(U.color, U.width, d, i.curves)];
                case 8:
                    return y.sent(),
                    [3, 11];
                case 9:
                    return [4, this.renderSolidBorder(U.color, d, i.curves)];
                case 10:
                    y.sent(),
                    y.label = 11;
                case 11:
                    d++,
                    y.label = 12;
                case 12:
                    return g++,
                    [3, 3];
                case 13:
                    return [2]
                }
            })
        })
    }
    ,
    n.prototype.renderDashedDottedBorder = function(i, l, c, o, B) {
        return Qe(this, void 0, void 0, function() {
            var d, g, Q, U, C, y, I, D, L, X, _, R, W, AA, P, N, P, N;
            return Be(this, function(G) {
                return this.ctx.save(),
                d = RF(o, c),
                g = G0(o, c),
                B === 2 && (this.path(g),
                this.ctx.clip()),
                ke(g[0]) ? (Q = g[0].start.x,
                U = g[0].start.y) : (Q = g[0].x,
                U = g[0].y),
                ke(g[1]) ? (C = g[1].end.x,
                y = g[1].end.y) : (C = g[1].x,
                y = g[1].y),
                c === 0 || c === 2 ? I = Math.abs(Q - C) : I = Math.abs(U - y),
                this.ctx.beginPath(),
                B === 3 ? this.formatPath(d) : this.formatPath(g.slice(0, 2)),
                D = l < 3 ? l * 3 : l * 2,
                L = l < 3 ? l * 2 : l,
                B === 3 && (D = l,
                L = l),
                X = !0,
                I <= D * 2 ? X = !1 : I <= D * 2 + L ? (_ = I / (2 * D + L),
                D *= _,
                L *= _) : (R = Math.floor((I + L) / (D + L)),
                W = (I - R * D) / (R - 1),
                AA = (I - (R + 1) * D) / R,
                L = AA <= 0 || Math.abs(L - W) < Math.abs(L - AA) ? W : AA),
                X && (B === 3 ? this.ctx.setLineDash([0, D + L]) : this.ctx.setLineDash([D, L])),
                B === 3 ? (this.ctx.lineCap = "round",
                this.ctx.lineWidth = l) : this.ctx.lineWidth = l * 2 + 1.1,
                this.ctx.strokeStyle = ne(i),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                B === 2 && (ke(g[0]) && (P = g[3],
                N = g[0],
                this.ctx.beginPath(),
                this.formatPath([new k(P.end.x,P.end.y), new k(N.start.x,N.start.y)]),
                this.ctx.stroke()),
                ke(g[1]) && (P = g[1],
                N = g[2],
                this.ctx.beginPath(),
                this.formatPath([new k(P.end.x,P.end.y), new k(N.start.x,N.start.y)]),
                this.ctx.stroke())),
                this.ctx.restore(),
                [2]
            })
        })
    }
    ,
    n.prototype.render = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l;
            return Be(this, function(c) {
                switch (c.label) {
                case 0:
                    return this.options.backgroundColor && (this.ctx.fillStyle = ne(this.options.backgroundColor),
                    this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                    l = MF(i),
                    [4, this.renderStack(l)];
                case 1:
                    return c.sent(),
                    this.applyEffects([]),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    n
}
)(kh)
  , kF = function(r) {
    return r instanceof Th || r instanceof Sh ? !0 : r instanceof xo && r.type !== ji && r.type !== zi
}
  , ZF = function(r, n) {
    switch (r) {
    case 0:
        return Ji(n);
    case 2:
        return SF(n);
    case 1:
    default:
        return ki(n)
    }
}
  , qF = function(r) {
    switch (r) {
    case 1:
        return "center";
    case 2:
        return "right";
    case 0:
    default:
        return "left"
    }
}
  , WF = ["-apple-system", "system-ui"]
  , PF = function(r) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? r.filter(function(n) {
        return WF.indexOf(n) === -1
    }) : r
}
  , $F = (function(r) {
    et(n, r);
    function n(i, l) {
        var c = r.call(this, i, l) || this;
        return c.canvas = l.canvas ? l.canvas : document.createElement("canvas"),
        c.ctx = c.canvas.getContext("2d"),
        c.options = l,
        c.canvas.width = Math.floor(l.width * l.scale),
        c.canvas.height = Math.floor(l.height * l.scale),
        c.canvas.style.width = l.width + "px",
        c.canvas.style.height = l.height + "px",
        c.ctx.scale(c.options.scale, c.options.scale),
        c.ctx.translate(-l.x, -l.y),
        c.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + l.width + "x" + l.height + " at " + l.x + "," + l.y + ") with scale " + l.scale),
        c
    }
    return n.prototype.render = function(i) {
        return Qe(this, void 0, void 0, function() {
            var l, c;
            return Be(this, function(o) {
                switch (o.label) {
                case 0:
                    return l = ho(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, i),
                    [4, Ay(l)];
                case 1:
                    return c = o.sent(),
                    this.options.backgroundColor && (this.ctx.fillStyle = ne(this.options.backgroundColor),
                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                    this.ctx.drawImage(c, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    n
}
)(kh)
  , Ay = function(r) {
    return new Promise(function(n, i) {
        var l = new Image;
        l.onload = function() {
            n(l)
        }
        ,
        l.onerror = i,
        l.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r))
    }
    )
}
  , ey = (function() {
    function r(n) {
        var i = n.id
          , l = n.enabled;
        this.id = i,
        this.enabled = l,
        this.start = Date.now()
    }
    return r.prototype.debug = function() {
        for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
        this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, fi([this.id, this.getTime() + "ms"], n)) : this.info.apply(this, n))
    }
    ,
    r.prototype.getTime = function() {
        return Date.now() - this.start
    }
    ,
    r.prototype.info = function() {
        for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
        this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, fi([this.id, this.getTime() + "ms"], n))
    }
    ,
    r.prototype.warn = function() {
        for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
        this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, fi([this.id, this.getTime() + "ms"], n)) : this.info.apply(this, n))
    }
    ,
    r.prototype.error = function() {
        for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
        this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, fi([this.id, this.getTime() + "ms"], n)) : this.info.apply(this, n))
    }
    ,
    r.instances = {},
    r
}
)()
  , ty = (function() {
    function r(n, i) {
        var l;
        this.windowBounds = i,
        this.instanceName = "#" + r.instanceCount++,
        this.logger = new ey({
            id: this.instanceName,
            enabled: n.logging
        }),
        this.cache = (l = n.cache) !== null && l !== void 0 ? l : new vF(this,n)
    }
    return r.instanceCount = 1,
    r
}
)()
  , ay = function(r, n) {
    return n === void 0 && (n = {}),
    ny(r, n)
};
typeof window < "u" && Vh.setContext(window);
var ny = function(r, n) {
    return Qe(void 0, void 0, void 0, function() {
        var i, l, c, o, B, d, g, Q, U, C, y, I, D, L, X, _, R, W, AA, P, G, N, G, Z, J, nA, sA, gA, oA, HA, GA, S, z, V, eA, rA, v, T, j, Y;
        return Be(this, function(aA) {
            switch (aA.label) {
            case 0:
                if (!r || typeof r != "object")
                    return [2, Promise.reject("Invalid element provided as first argument")];
                if (i = r.ownerDocument,
                !i)
                    throw new Error("Element is not attached to a Document");
                if (l = i.defaultView,
                !l)
                    throw new Error("Document is not attached to a Window");
                return c = {
                    allowTaint: (Z = n.allowTaint) !== null && Z !== void 0 ? Z : !1,
                    imageTimeout: (J = n.imageTimeout) !== null && J !== void 0 ? J : 15e3,
                    proxy: n.proxy,
                    useCORS: (nA = n.useCORS) !== null && nA !== void 0 ? nA : !1
                },
                o = Ao({
                    logging: (sA = n.logging) !== null && sA !== void 0 ? sA : !0,
                    cache: n.cache
                }, c),
                B = {
                    windowWidth: (gA = n.windowWidth) !== null && gA !== void 0 ? gA : l.innerWidth,
                    windowHeight: (oA = n.windowHeight) !== null && oA !== void 0 ? oA : l.innerHeight,
                    scrollX: (HA = n.scrollX) !== null && HA !== void 0 ? HA : l.pageXOffset,
                    scrollY: (GA = n.scrollY) !== null && GA !== void 0 ? GA : l.pageYOffset
                },
                d = new St(B.scrollX,B.scrollY,B.windowWidth,B.windowHeight),
                g = new ty(o,d),
                Q = (S = n.foreignObjectRendering) !== null && S !== void 0 ? S : !1,
                U = {
                    allowTaint: (z = n.allowTaint) !== null && z !== void 0 ? z : !1,
                    onclone: n.onclone,
                    ignoreElements: n.ignoreElements,
                    inlineImages: Q,
                    copyStyles: Q
                },
                g.logger.debug("Starting document clone with size " + d.width + "x" + d.height + " scrolled to " + -d.left + "," + -d.top),
                C = new O0(g,r,U),
                y = C.clonedReferenceElement,
                y ? [4, C.toIFrame(i, d)] : [2, Promise.reject("Unable to find element in cloned iframe")];
            case 1:
                return I = aA.sent(),
                D = So(y) || lF(y) ? IC(y.ownerDocument) : Wi(g, y),
                L = D.width,
                X = D.height,
                _ = D.left,
                R = D.top,
                W = ly(g, y, n.backgroundColor),
                AA = {
                    canvas: n.canvas,
                    backgroundColor: W,
                    scale: (eA = (V = n.scale) !== null && V !== void 0 ? V : l.devicePixelRatio) !== null && eA !== void 0 ? eA : 1,
                    x: ((rA = n.x) !== null && rA !== void 0 ? rA : 0) + _,
                    y: ((v = n.y) !== null && v !== void 0 ? v : 0) + R,
                    width: (T = n.width) !== null && T !== void 0 ? T : Math.ceil(L),
                    height: (j = n.height) !== null && j !== void 0 ? j : Math.ceil(X)
                },
                Q ? (g.logger.debug("Document cloned, using foreign object rendering"),
                G = new $F(g,AA),
                [4, G.render(y)]) : [3, 3];
            case 2:
                return P = aA.sent(),
                [3, 5];
            case 3:
                return g.logger.debug("Document cloned, element located at " + _ + "," + R + " with size " + L + "x" + X + " using computed rendering"),
                g.logger.debug("Starting DOM parsing"),
                N = Lh(g, y),
                W === N.styles.backgroundColor && (N.styles.backgroundColor = xt.TRANSPARENT),
                g.logger.debug("Starting renderer for element at " + AA.x + "," + AA.y + " with size " + AA.width + "x" + AA.height),
                G = new JF(g,AA),
                [4, G.render(N)];
            case 4:
                P = aA.sent(),
                aA.label = 5;
            case 5:
                return (!((Y = n.removeContainer) !== null && Y !== void 0) || Y) && (O0.destroy(I) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                g.logger.debug("Finished rendering"),
                [2, P]
            }
        })
    })
}
  , ly = function(r, n, i) {
    var l = n.ownerDocument
      , c = l.documentElement ? Rl(r, getComputedStyle(l.documentElement).backgroundColor) : xt.TRANSPARENT
      , o = l.body ? Rl(r, getComputedStyle(l.body).backgroundColor) : xt.TRANSPARENT
      , B = typeof i == "string" ? Rl(r, i) : i === null ? xt.TRANSPARENT : 4294967295;
    return n === l.documentElement ? ua(c) ? ua(o) ? B : o : c : B
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = (...r) => r.filter( (n, i, l) => !!n && n.trim() !== "" && l.indexOf(n) === i).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ry = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = r => r.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, i, l) => l ? l.toUpperCase() : i.toLowerCase());
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = r => {
    const n = iy(r);
    return n.charAt(0).toUpperCase() + n.slice(1)
}
;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = r => {
    for (const n in r)
        if (n.startsWith("aria-") || n === "role" || n === "title")
            return !0;
    return !1
}
;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = yA.forwardRef( ({color: r="currentColor", size: n=24, strokeWidth: i=2, absoluteStrokeWidth: l, className: c="", children: o, iconNode: B, ...d}, g) => yA.createElement("svg", {
    ref: g,
    ...sy,
    width: n,
    height: n,
    stroke: r,
    strokeWidth: l ? Number(i) * 24 / Number(n) : i,
    className: Zh("lucide", c),
    ...!o && !uy(d) && {
        "aria-hidden": "true"
    },
    ...d
}, [...B.map( ([Q,U]) => yA.createElement(Q, U)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OA = (r, n) => {
    const i = yA.forwardRef( ({className: l, ...c}, o) => yA.createElement(cy, {
        ref: o,
        iconNode: n,
        className: Zh(`lucide-${ry(z0(r))}`, `lucide-${r}`, l),
        ...c
    }));
    return i.displayName = z0(r),
    i
}
;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , fy = OA("briefcase", oy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , gy = OA("calendar", By);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]
  , hy = OA("chart-column", dy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , wy = OA("chevron-down", Qy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , Uy = OA("chevron-right", Cy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = [["path", {
    d: "M12 6v6l4 2",
    key: "mmk7yg"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]
  , qh = OA("clock", my);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]
  , py = OA("cloud", vy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M17 20v2",
    key: "1rnc9c"
}], ["path", {
    d: "M17 2v2",
    key: "11trls"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M2 17h2",
    key: "7oei6x"
}], ["path", {
    d: "M2 7h2",
    key: "asdhe0"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "M20 17h2",
    key: "1fpfkl"
}], ["path", {
    d: "M20 7h2",
    key: "1o8tra"
}], ["path", {
    d: "M7 20v2",
    key: "4gnj0m"
}], ["path", {
    d: "M7 2v2",
    key: "1i4yhu"
}], ["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "8",
    y: "8",
    width: "8",
    height: "8",
    rx: "1",
    key: "z9xiuo"
}]]
  , yy = OA("cpu", Fy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]]
  , Hy = OA("database", Ey);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = [["path", {
    d: "M12 15V3",
    key: "m9g1x1"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["path", {
    d: "m7 10 5 5 5-5",
    key: "brsn70"
}]]
  , xy = OA("download", by);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [["circle", {
    cx: "9",
    cy: "12",
    r: "1",
    key: "1vctgf"
}], ["circle", {
    cx: "9",
    cy: "5",
    r: "1",
    key: "hp0tcf"
}], ["circle", {
    cx: "9",
    cy: "19",
    r: "1",
    key: "fkjjf6"
}], ["circle", {
    cx: "15",
    cy: "12",
    r: "1",
    key: "1tmaij"
}], ["circle", {
    cx: "15",
    cy: "5",
    r: "1",
    key: "19l28e"
}], ["circle", {
    cx: "15",
    cy: "19",
    r: "1",
    key: "f4zoj3"
}]]
  , Ty = OA("grip-vertical", Sy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [["line", {
    x1: "4",
    x2: "20",
    y1: "9",
    y2: "9",
    key: "4lhtct"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "15",
    y2: "15",
    key: "vyu0kd"
}], ["line", {
    x1: "10",
    x2: "8",
    y1: "3",
    y2: "21",
    key: "1ggp8o"
}], ["line", {
    x1: "16",
    x2: "14",
    y1: "3",
    y2: "21",
    key: "weycgp"
}]]
  , Ky = OA("hash", Dy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [["path", {
    d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
    key: "12oyoe"
}], ["path", {
    d: "M21 16v2a4 4 0 0 1-4 4h-5",
    key: "1x7m43"
}]]
  , Iy = OA("headset", Ly);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [["path", {
    d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
    key: "zw3jo"
}], ["path", {
    d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
    key: "1wduqc"
}], ["path", {
    d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
    key: "kqbvx6"
}]]
  , Ny = OA("layers", My);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = [["path", {
    d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
    key: "1sd12s"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]
  , Ry = OA("message-circle-question-mark", Oy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]
  , Gy = OA("minus", _y);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [["path", {
    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
    key: "1a8usu"
}], ["path", {
    d: "m15 5 4 4",
    key: "1mk7zo"
}]]
  , zy = OA("pencil", Vy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]
  , Ii = OA("plus", jy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [["path", {
    d: "m21 21-4.34-4.34",
    key: "14j7rj"
}], ["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}]]
  , Yy = OA("search", Xy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [["path", {
    d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
    key: "1i5ecw"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]
  , Wh = OA("settings", Jy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , Zy = OA("sparkles", ky);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = [["path", {
    d: "M10 11v6",
    key: "nco0om"
}], ["path", {
    d: "M14 11v6",
    key: "outv1u"
}], ["path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
    key: "miytrc"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    key: "e791ji"
}]]
  , qi = OA("trash-2", qy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]
  , Ph = OA("triangle-alert", Wy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]
  , $y = OA("user", Py);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AE = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , To = OA("x", AE)
  , eE = ({task: r, legend: n, onSave: i, onDelete: l, onClose: c}) => {
    var _;
    const [o,B] = yA.useState(r.name)
      , [d,g] = yA.useState(r.startWeek)
      , [Q,U] = yA.useState(r.durationWeeks)
      , [C,y] = yA.useState(r.color || ((_ = n[0]) == null ? void 0 : _.color) || "#e2e8f0")
      , [I,D] = yA.useState(!1)
      , L = R => {
        R.preventDefault(),
        i({
            name: o,
            startWeek: Number(d),
            durationWeeks: Number(Q),
            color: C
        }),
        c()
    }
      , X = R => {
        R.preventDefault(),
        R.stopPropagation(),
        I ? l && l() : D(!0)
    }
    ;
    return w.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm",
        onClick: c,
        children: w.jsxs("div", {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-md p-6 border border-gray-100",
            onClick: R => R.stopPropagation(),
            children: [w.jsxs("div", {
                className: "flex justify-between items-center mb-6 border-b pb-4",
                children: [w.jsx("h3", {
                    className: "text-lg font-bold text-gray-800",
                    children: "Edit Task"
                }), w.jsx("button", {
                    onClick: c,
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    children: w.jsx(To, {
                        size: 20
                    })
                })]
            }), w.jsxs("form", {
                onSubmit: L,
                className: "space-y-4",
                children: [w.jsxs("div", {
                    children: [w.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Task Name"
                    }), w.jsx("textarea", {
                        value: o,
                        onChange: R => B(R.target.value),
                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none h-20"
                    })]
                }), w.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [w.jsxs("div", {
                        children: [w.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Start Week"
                        }), w.jsx("input", {
                            type: "number",
                            min: "1",
                            max: "20",
                            value: d,
                            onChange: R => g(Number(R.target.value)),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        })]
                    }), w.jsxs("div", {
                        children: [w.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Duration (Weeks)"
                        }), w.jsx("input", {
                            type: "number",
                            min: "1",
                            max: "10",
                            value: Q,
                            onChange: R => U(Number(R.target.value)),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        })]
                    })]
                }), w.jsxs("div", {
                    children: [w.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Category (Color)"
                    }), w.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: n.map(R => w.jsxs("button", {
                            type: "button",
                            onClick: () => y(R.color),
                            className: `flex items-center gap-2 p-2 rounded border transition-all ${C === R.color ? "border-gray-600 bg-gray-50 ring-1 ring-gray-300" : "border-transparent hover:bg-gray-50"}`,
                            children: [w.jsx("div", {
                                className: "w-6 h-6 rounded-full shadow-sm",
                                style: {
                                    backgroundColor: R.color
                                }
                            }), w.jsx("span", {
                                className: "text-xs text-gray-600 truncate",
                                children: R.label
                            })]
                        }, R.color))
                    })]
                }), w.jsxs("div", {
                    className: "pt-4 flex gap-3",
                    children: [l && w.jsx("button", {
                        type: "button",
                        onClick: X,
                        className: `px-4 py-2 border rounded-lg font-medium transition-colors flex items-center gap-2 ${I ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "border-red-200 text-red-600 bg-red-50 hover:bg-red-100"}`,
                        title: "Delete Task",
                        children: I ? w.jsxs(w.Fragment, {
                            children: [w.jsx(Ph, {
                                size: 18
                            }), " Confirm"]
                        }) : w.jsx(qi, {
                            size: 18
                        })
                    }), w.jsx("button", {
                        type: "button",
                        onClick: c,
                        className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",
                        children: "Cancel"
                    }), w.jsx("button", {
                        type: "submit",
                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-md",
                        children: "Save Changes"
                    })]
                })]
            })]
        })
    })
}
  , tE = ({initialValue: r, title: n, onSave: i, onDelete: l, onClose: c}) => {
    const [o,B] = yA.useState(r)
      , [d,g] = yA.useState(!1)
      , Q = C => {
        C.preventDefault(),
        i(o),
        c()
    }
      , U = C => {
        C.preventDefault(),
        C.stopPropagation(),
        d ? l && (l(),
        c()) : g(!0)
    }
    ;
    return w.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm",
        onClick: c,
        children: w.jsxs("div", {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 border border-gray-100",
            onClick: C => C.stopPropagation(),
            children: [w.jsxs("div", {
                className: "flex justify-between items-center mb-4 border-b pb-3",
                children: [w.jsx("h3", {
                    className: "text-lg font-bold text-gray-800",
                    children: n
                }), w.jsx("button", {
                    onClick: c,
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    children: w.jsx(To, {
                        size: 20
                    })
                })]
            }), w.jsxs("form", {
                onSubmit: Q,
                className: "space-y-4",
                children: [w.jsxs("div", {
                    children: [w.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Name"
                    }), w.jsx("input", {
                        type: "text",
                        value: o,
                        onChange: C => B(C.target.value),
                        autoFocus: !0,
                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    })]
                }), w.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    children: [l && w.jsx("button", {
                        type: "button",
                        onClick: U,
                        className: `px-3 py-2 border rounded-lg font-medium transition-colors flex items-center gap-2 ${d ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "border-red-200 text-red-600 bg-red-50 hover:bg-red-100"}`,
                        title: "Delete Group",
                        children: d ? w.jsxs(w.Fragment, {
                            children: [w.jsx(Ph, {
                                size: 18
                            }), " Confirm"]
                        }) : w.jsx(qi, {
                            size: 18
                        })
                    }), w.jsx("button", {
                        type: "button",
                        onClick: c,
                        className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",
                        children: "Cancel"
                    }), w.jsx("button", {
                        type: "submit",
                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-md",
                        children: "Save"
                    })]
                })]
            })]
        })
    })
}
  , aE = ({color: r, currentLabel: n, onSave: i, onDelete: l, onClose: c}) => {
    const [o,B] = yA.useState(n)
      , [d,g] = yA.useState(!1)
      , Q = C => {
        C.preventDefault(),
        i(o),
        c()
    }
      , U = C => {
        C.preventDefault(),
        C.stopPropagation(),
        d ? l && (l(),
        c()) : g(!0)
    }
    ;
    return w.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm",
        onClick: c,
        children: w.jsxs("div", {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 border border-gray-100",
            onClick: C => C.stopPropagation(),
            children: [w.jsxs("div", {
                className: "flex justify-between items-center mb-4 border-b pb-3",
                children: [w.jsx("h3", {
                    className: "text-lg font-bold text-gray-800",
                    children: "Edit Legend"
                }), w.jsx("button", {
                    onClick: c,
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    children: w.jsx(To, {
                        size: 20
                    })
                })]
            }), w.jsxs("form", {
                onSubmit: Q,
                className: "space-y-4",
                children: [w.jsxs("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [w.jsx("div", {
                        className: "w-8 h-8 rounded-full border border-gray-200 shadow-sm",
                        style: {
                            backgroundColor: r
                        }
                    }), w.jsx("span", {
                        className: "text-sm text-gray-500",
                        children: "Editing label for this color"
                    })]
                }), w.jsxs("div", {
                    children: [w.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Label"
                    }), w.jsx("input", {
                        type: "text",
                        value: o,
                        onChange: C => B(C.target.value),
                        autoFocus: !0,
                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    })]
                }), w.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    children: [l && w.jsx("button", {
                        type: "button",
                        onClick: U,
                        className: `px-3 py-2 border rounded-lg font-medium transition-colors flex items-center gap-2 ${d ? "bg-red-600 text-white border-red-600 hover:bg-red-700" : "border-red-200 text-red-600 bg-red-50 hover:bg-red-100"}`,
                        title: "Delete Category",
                        children: d ? w.jsx(qi, {
                            size: 18
                        }) : w.jsx(qi, {
                            size: 18
                        })
                    }), w.jsx("button", {
                        type: "button",
                        onClick: c,
                        className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",
                        children: "Cancel"
                    }), w.jsx("button", {
                        type: "submit",
                        className: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-md",
                        children: "Save"
                    })]
                }), d && w.jsx("p", {
                    className: "text-xs text-red-500 text-center",
                    children: "Click trash icon again to confirm deletion."
                })]
            })]
        })
    })
}
  , nE = ({data: r, legend: n, months: i, onUpdateTask: l, onAddTask: c, onDeleteTask: o, onUpdateStructure: B, onDeleteGroup: d, onAddWave: g, onDeleteWave: Q, onAddMonth: U, onRemoveMonth: C, onUpdateLegend: y, onDeleteLegend: I, onAddLegend: D}) => {
    const [L,X] = yA.useState(null)
      , [_,R] = yA.useState(null)
      , [W,AA] = yA.useState(null)
      , [P,N] = yA.useState(null)
      , [G,Z] = yA.useState(new Set)
      , nA = i.length * 4
      , sA = {
        display: "grid",
        gridTemplateColumns: `repeat(${nA}, minmax(0, 1fr))`
    }
      , gA = (V, eA) => {
        const rA = `${V}-${eA}`;
        Z(v => {
            const T = new Set(v);
            return T.has(rA) ? T.delete(rA) : T.add(rA),
            T
        }
        )
    }
      , oA = (V, eA, rA, v) => {
        N(eA),
        V.dataTransfer.setData("application/json", JSON.stringify({
            taskId: eA,
            waveId: rA,
            groupId: v
        })),
        V.dataTransfer.effectAllowed = "move"
    }
      , HA = V => {
        V.preventDefault()
    }
      , GA = (V, eA) => {
        V.preventDefault();
        const rA = V.dataTransfer.getData("application/json");
        if (!rA)
            return;
        const {taskId: v, waveId: T, groupId: j} = JSON.parse(rA)
          , Y = eA + 1;
        l && l(T, j, v, {
            startWeek: Y
        }),
        N(null)
    }
      , S = () => {
        if (U) {
            const V = i.length
              , rA = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][V % 12]
              , v = prompt("Enter month name:", rA);
            v && U(v)
        }
    }
    ;
    let z = 0;
    return w.jsxs("div", {
        className: "w-full bg-white p-8 min-w-[1400px] font-sans text-slate-800",
        children: [L && l && w.jsx(eE, {
            task: L.task,
            legend: n,
            onClose: () => X(null),
            onSave: V => l(L.waveId, L.groupId, L.task.id, V),
            onDelete: o ? () => {
                L && (o(L.waveId, L.groupId, L.task.id),
                X(null))
            }
            : void 0
        }), _ && B && w.jsx(tE, {
            initialValue: _.name,
            title: _.groupId ? "Edit Group Name" : "Edit Wave Name",
            onClose: () => R(null),
            onSave: V => B(_.waveId, _.groupId, V),
            onDelete: _.groupId ? d ? () => {
                d(_.waveId, _.groupId),
                R(null)
            }
            : void 0 : Q ? () => {
                Q(_.waveId),
                R(null)
            }
            : void 0
        }), W && y && w.jsx(aE, {
            color: W.color,
            currentLabel: W.label,
            onClose: () => AA(null),
            onSave: V => y(W.color, V),
            onDelete: I ? () => I(W.color) : void 0
        }), w.jsxs("div", {
            className: "max-w-[1800px] mx-auto",
            children: [w.jsxs("div", {
                className: "mb-8 border-b border-gray-100 pb-6 flex justify-between items-end",
                children: [w.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [w.jsx("div", {
                        className: "p-3 bg-white border border-gray-200 shadow-sm rounded-xl",
                        children: w.jsx(gy, {
                            className: "w-6 h-6 text-indigo-600"
                        })
                    }), w.jsxs("div", {
                        children: [w.jsx("h1", {
                            className: "text-2xl font-bold tracking-tight text-gray-900",
                            children: "Project Roadmap"
                        }), w.jsx("p", {
                            className: "text-slate-500 mt-1",
                            children: "Q1 - Q2 2024 Strategic Deployment"
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "flex flex-wrap items-center gap-3 justify-end max-w-2xl",
                    children: [n.map(V => w.jsxs("div", {
                        onClick: () => AA(V),
                        className: "flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm cursor-pointer transition-all",
                        title: "Click to rename or delete",
                        children: [w.jsx("div", {
                            className: "w-3 h-3 rounded-full shadow-sm",
                            style: {
                                backgroundColor: V.color
                            }
                        }), w.jsx("span", {
                            className: "text-xs font-medium text-gray-700",
                            children: V.label
                        })]
                    }, V.color)), D && w.jsxs("button", {
                        onClick: D,
                        className: "flex items-center gap-1 px-3 py-1.5 rounded-full border border-dashed border-gray-300 text-gray-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all text-xs",
                        children: [w.jsx(Ii, {
                            size: 12
                        }), " Add"]
                    })]
                })]
            }), w.jsxs("div", {
                className: "border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col",
                children: [w.jsxs("div", {
                    className: "flex border-b border-gray-200",
                    children: [w.jsxs("div", {
                        className: "w-[400px] min-w-[400px] bg-gray-50 p-4 border-r border-gray-200 flex items-end justify-between",
                        children: [w.jsxs("div", {
                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2",
                            children: [w.jsx(Ky, {
                                size: 14
                            }), " Task Details"]
                        }), w.jsxs("div", {
                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2",
                            children: [w.jsx(qh, {
                                size: 14
                            }), " Period"]
                        })]
                    }), w.jsxs("div", {
                        className: "flex-1 bg-white p-2 overflow-hidden flex",
                        children: [w.jsx("div", {
                            style: sA,
                            className: "flex-1",
                            children: i.map(V => w.jsxs("div", {
                                className: "col-span-4 px-1",
                                children: [w.jsx("div", {
                                    className: "bg-[#0066cc] text-white font-bold py-2 text-center rounded-t-md text-sm shadow-sm truncate",
                                    title: V,
                                    children: V
                                }), w.jsx("div", {
                                    className: "grid grid-cols-4 bg-[#0066cc] text-white text-[10px] pb-1 rounded-b-md shadow-sm",
                                    children: [1, 2, 3, 4].map(eA => w.jsxs("div", {
                                        className: "text-center py-1 border-r border-blue-400/30 last:border-0",
                                        children: [eA, "ª"]
                                    }, eA))
                                })]
                            }, V))
                        }), w.jsxs("div", {
                            className: "flex flex-col gap-1 ml-2 justify-center",
                            children: [U && w.jsx("button", {
                                onClick: S,
                                className: "p-1 bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded text-gray-500 transition-colors",
                                title: "Add Month",
                                children: w.jsx(Ii, {
                                    size: 16
                                })
                            }), C && i.length > 1 && w.jsx("button", {
                                onClick: C,
                                className: "p-1 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded text-gray-500 transition-colors",
                                title: "Remove Last Month",
                                children: w.jsx(Gy, {
                                    size: 16
                                })
                            })]
                        })]
                    })]
                }), w.jsx("div", {
                    className: "flex-1 overflow-y-auto",
                    children: r.map(V => w.jsxs(Pc.Fragment, {
                        children: [w.jsxs("div", {
                            className: "flex border-b border-gray-100 bg-gray-50/50",
                            children: [w.jsxs("div", {
                                className: "w-[400px] min-w-[400px] p-3 border-r border-gray-200 flex items-center gap-2",
                                children: [w.jsx("div", {
                                    className: "w-1.5 h-6 rounded-full bg-indigo-600"
                                }), w.jsxs("h3", {
                                    className: "text-sm font-bold text-indigo-900 uppercase tracking-wide cursor-pointer hover:text-indigo-600 flex items-center gap-2",
                                    onClick: () => R({
                                        waveId: V.id,
                                        groupId: null,
                                        name: V.name
                                    }),
                                    children: [V.name, " ", w.jsx(zy, {
                                        size: 10,
                                        className: "text-gray-300"
                                    })]
                                })]
                            }), w.jsxs("div", {
                                className: "flex-1 relative mr-[32px]",
                                children: [" ", w.jsx("div", {
                                    className: "absolute inset-0 mx-2 pointer-events-none",
                                    style: sA,
                                    children: Array.from({
                                        length: nA
                                    }).map( (eA, rA) => w.jsx("div", {
                                        className: `h-full border-r ${(rA + 1) % 4 === 0 ? "border-gray-200" : "border-gray-100 border-dashed"}`
                                    }, rA))
                                })]
                            })]
                        }), V.groups.map(eA => {
                            const rA = G.has(`${V.id}-${eA.name}`);
                            return w.jsxs(Pc.Fragment, {
                                children: [w.jsxs("div", {
                                    className: "flex border-b border-gray-100 bg-white hover:bg-gray-50 group/row transition-colors",
                                    children: [w.jsxs("div", {
                                        className: "w-[400px] min-w-[400px] p-2 pl-8 border-r border-gray-200 flex items-center justify-between",
                                        children: [w.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [w.jsx("button", {
                                                onClick: () => gA(V.id, eA.name),
                                                className: "p-1 rounded hover:bg-gray-200 text-gray-500 transition-colors",
                                                children: rA ? w.jsx(Uy, {
                                                    size: 14
                                                }) : w.jsx(wy, {
                                                    size: 14
                                                })
                                            }), w.jsx("span", {
                                                className: "text-xs font-bold text-gray-500 uppercase cursor-pointer hover:text-indigo-600 select-none",
                                                onClick: () => R({
                                                    waveId: V.id,
                                                    groupId: eA.name,
                                                    name: eA.name
                                                }),
                                                children: eA.name
                                            })]
                                        }), !rA && w.jsxs("button", {
                                            onClick: () => c(V.id, eA.name),
                                            className: "opacity-0 group-hover/row:opacity-100 p-1 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-all flex items-center gap-1 text-[10px]",
                                            children: [w.jsx(Ii, {
                                                size: 14
                                            }), " Add Task"]
                                        })]
                                    }), w.jsx("div", {
                                        className: "flex-1 relative h-8 mr-[32px]",
                                        children: w.jsx("div", {
                                            className: "absolute inset-0 mx-2 pointer-events-none",
                                            style: sA,
                                            children: Array.from({
                                                length: nA
                                            }).map( (v, T) => w.jsx("div", {
                                                className: `h-full border-r ${(T + 1) % 4 === 0 ? "border-gray-200" : "border-gray-100 border-dashed"}`
                                            }, T))
                                        })
                                    })]
                                }), !rA && eA.tasks.map(v => {
                                    z++;
                                    const T = z
                                      , j = v.color || "#e2e8f0";
                                    return w.jsxs("div", {
                                        className: "flex border-b border-gray-100 hover:bg-blue-50/30 transition-colors group/taskrow",
                                        children: [w.jsxs("div", {
                                            className: "w-[400px] min-w-[400px] p-3 border-r border-gray-200 flex gap-3 items-center",
                                            children: [w.jsx("div", {
                                                className: "flex flex-col items-center justify-center w-8 h-8 rounded bg-gray-100 text-gray-500 text-xs font-bold flex-shrink-0",
                                                children: T
                                            }), w.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                onClick: () => X({
                                                    waveId: V.id,
                                                    groupId: eA.name,
                                                    task: v
                                                }),
                                                children: [w.jsx("div", {
                                                    className: "text-sm font-medium text-gray-800 leading-snug whitespace-normal break-words cursor-pointer hover:text-indigo-600",
                                                    children: v.name
                                                }), w.jsxs("div", {
                                                    className: "text-[10px] text-gray-400 mt-1 flex items-center gap-2",
                                                    children: [w.jsx("div", {
                                                        className: "w-2 h-2 rounded-full",
                                                        style: {
                                                            backgroundColor: j
                                                        }
                                                    }), "Start: W", v.startWeek, " • Dur: ", v.durationWeeks, "w"]
                                                })]
                                            }), w.jsx(Ty, {
                                                className: "w-4 h-4 text-gray-300 opacity-0 group-hover/taskrow:opacity-100 cursor-move"
                                            })]
                                        }), w.jsxs("div", {
                                            className: "flex-1 relative py-2 mr-[32px]",
                                            children: [w.jsx("div", {
                                                className: "absolute inset-0 mx-2 pointer-events-none",
                                                style: sA,
                                                children: Array.from({
                                                    length: nA
                                                }).map( (Y, aA) => w.jsx("div", {
                                                    className: `h-full border-r ${(aA + 1) % 4 === 0 ? "border-gray-200" : "border-gray-100 border-dashed"}`
                                                }, aA))
                                            }), w.jsx("div", {
                                                className: "absolute inset-0 z-0 h-full mx-2",
                                                style: sA,
                                                children: Array.from({
                                                    length: nA
                                                }).map( (Y, aA) => w.jsx("div", {
                                                    className: "h-full z-10",
                                                    onDragOver: HA,
                                                    onDrop: uA => GA(uA, aA)
                                                }, aA))
                                            }), w.jsx("div", {
                                                draggable: !0,
                                                onDragStart: Y => oA(Y, v.id, V.id, eA.name),
                                                onClick: () => X({
                                                    waveId: V.id,
                                                    groupId: eA.name,
                                                    task: v
                                                }),
                                                className: "absolute top-2 bottom-2 rounded-md px-2 flex items-center shadow-sm border border-black/5 hover:shadow-md cursor-pointer z-20 transition-all hover:brightness-95",
                                                style: {
                                                    left: `${(v.startWeek - 1) / nA * 100}%`,
                                                    width: `calc(${v.durationWeeks / nA * 100}% - 4px)`,
                                                    marginLeft: "8px",
                                                    backgroundColor: j
                                                },
                                                title: `Task #${T}: ${v.name}`,
                                                children: w.jsxs("span", {
                                                    className: "text-[10px] font-bold text-slate-800 truncate block w-full",
                                                    children: [w.jsxs("span", {
                                                        className: "opacity-50 mr-1",
                                                        children: ["#", T]
                                                    }), v.name]
                                                })
                                            })]
                                        })]
                                    }, v.id)
                                }
                                )]
                            }, eA.name)
                        }
                        )]
                    }, V.id))
                }), w.jsx("div", {
                    className: "p-4 border-t border-gray-100 bg-gray-50 flex justify-center",
                    children: g && w.jsxs("button", {
                        onClick: g,
                        className: "flex items-center gap-2 px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all font-medium text-sm shadow-sm",
                        children: [w.jsx(Ii, {
                            size: 16
                        }), " Add New Wave"]
                    })
                })]
            }), w.jsx("div", {
                className: "mt-4 text-xs text-gray-400 text-center",
                children: "Tip: Drag tasks on the timeline to move them. Click text to edit. Use +/- at top right to change timeline duration."
            })]
        })]
    })
}
  , lE = () => {
    const r = yA.useRef(null)
      , [n,i] = yA.useState("");
    return yA.useEffect( () => {
        const l = ["Qual impacto na jornada do cliente?", "O que foi o diferencial nesse atendimento?", "Como foi a condução operacional?"];
        let c = 0, o = 0, B = !1, d;
        const g = () => {
            const Q = l[c];
            B ? (i(Q.substring(0, o - 1)),
            o--) : (i(Q.substring(0, o + 1)),
            o++);
            let U = B ? 40 : 80;
            !B && o === Q.length ? (B = !0,
            U = 2500) : B && o === 0 && (B = !1,
            c = (c + 1) % l.length,
            U = 500),
            d = setTimeout(g, U)
        }
        ;
        return g(),
        () => clearTimeout(d)
    }
    , []),
    yA.useEffect( () => {
        const l = r.current;
        if (!l)
            return;
        const c = l.getContext("2d");
        if (!c)
            return;
        let o = [], B, d = {
            x: -1e3,
            y: -1e3,
            radius: 100
        };
        const g = () => {
            l.width = window.innerWidth,
            l.height = window.innerHeight,
            C()
        }
          , Q = I => {
            const D = l.getBoundingClientRect();
            d.x = I.clientX - D.left,
            d.y = I.clientY - D.top
        }
        ;
        class U {
            constructor(D, L, X) {
                this.x = D,
                this.y = L,
                this.baseX = D,
                this.baseY = L,
                this.size = 1.2,
                this.color = X,
                this.density = Math.random() * 30 + 2
            }
            draw() {
                c && (c.fillStyle = this.color,
                c.beginPath(),
                c.arc(this.x, this.y, this.size, 0, Math.PI * 2),
                c.fill())
            }
            update() {
                let D = d.x - this.x
                  , L = d.y - this.y
                  , X = Math.sqrt(D * D + L * L);
                if (X < d.radius) {
                    let _ = D / X
                      , R = L / X
                      , W = d.radius
                      , AA = (W - X) / W
                      , P = _ * AA * this.density
                      , N = R * AA * this.density;
                    this.x -= P,
                    this.y -= N
                } else {
                    if (this.x !== this.baseX) {
                        let _ = this.x - this.baseX;
                        this.x -= _ / 10
                    }
                    if (this.y !== this.baseY) {
                        let _ = this.y - this.baseY;
                        this.y -= _ / 10
                    }
                }
            }
        }
        function C() {
            o = [];
            const I = 8
              , D = "#00d2ff"
              , L = "#9d50bb";
            for (let X = 0; X < l.width; X += I) {
                for (let _ = -30; _ < 30; _ += I) {
                    let R = Math.sin(X * .005) * 60 + Math.sin(X * .01) * 30
                      , W = l.height * .4 + R + _;
                    o.push(new U(X,W,D))
                }
                for (let _ = -30; _ < 30; _ += I) {
                    let R = Math.cos(X * .005) * 60 + Math.cos(X * .008) * 40
                      , W = l.height * .6 + R + _;
                    o.push(new U(X,W,L))
                }
            }
        }
        function y() {
            c.clearRect(0, 0, l.width, l.height),
            o.forEach(I => {
                I.update(),
                I.draw()
            }
            ),
            B = requestAnimationFrame(y)
        }
        return window.addEventListener("resize", g),
        window.addEventListener("mousemove", Q),
        g(),
        y(),
        () => {
            window.removeEventListener("resize", g),
            window.removeEventListener("mousemove", Q),
            cancelAnimationFrame(B)
        }
    }
    , []),
    w.jsxs("section", {
        className: "hero-container",
        children: [w.jsx("canvas", {
            ref: r,
            id: "hero-canvas",
            className: "absolute top-0 left-0 z-[1] w-full h-full"
        }), w.jsx("div", {
            className: "hero-content",
            children: w.jsxs("div", {
                className: "text-side",
                children: [w.jsx("h1", {
                    className: "main-title",
                    children: "MonitorIA"
                }), w.jsx("p", {
                    className: "subtitle text-xl text-slate-400 mb-12 max-w-[600px] leading-relaxed",
                    children: "Análise contextual de atendimentos em larga escala com precisão absoluta."
                }), w.jsxs("div", {
                    className: "search-box",
                    children: [w.jsx("div", {
                        className: "search-icon text-white opacity-50 mr-4",
                        children: w.jsx(Yy, {
                            size: 20
                        })
                    }), w.jsx("input", {
                        type: "text",
                        readOnly: !0,
                        value: n,
                        className: "bg-transparent border-none text-white text-lg w-full outline-none tracking-wide font-sans"
                    }), w.jsx("span", {
                        className: "cursor text-xl",
                        children: "|"
                    })]
                }), w.jsx("p", {
                    className: "hint text-xs text-slate-400 mt-8 uppercase tracking-[3px] font-bold",
                    children: "Processamento Inteligente • Bandas de Frequência de Dados • Insights Operacionais"
                })]
            })
        })]
    })
}
  , rE = ["Estamos aqui para fazer melhor que todos.", "Focamos a inovação constantemente.", "Só acreditamos no simples.", "Somente entramos no mercado em que podemos fazer uma contribuição significativa.", "Temos foco.", "Acreditamos na colaboração mútua dos nossos grupos.", "Não aceitamos nada que esteja abaixo do nível de excelência.", "Somos humildes e honestos para admitir nossos erros.", "Somos corajosos o suficiente para mudarmos quando necessário.", "Somos felizes com o que fazemos."]
  , iE = () => w.jsx("section", {
    className: "bg-black py-32 px-6 md:px-12 relative font-sans border-b border-gray-900",
    children: w.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [w.jsxs("div", {
            className: "mb-16",
            children: [w.jsx("p", {
                className: "text-gray-500 font-bold text-xs tracking-widest uppercase mb-4",
                children: "Manifesto MonitorIA"
            }), w.jsx("h2", {
                className: "text-5xl md:text-6xl font-bold text-white tracking-tighter",
                children: "Nossos Princípios"
            })]
        }), w.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12",
            children: rE.map( (r, n) => w.jsxs("div", {
                className: "group border-l border-gray-800 pl-6 py-2 hover:border-[#00f2ff] transition-colors duration-500 flex flex-col justify-between min-h-[180px]",
                children: [w.jsxs("div", {
                    children: [w.jsx("span", {
                        className: "text-5xl md:text-6xl font-bold text-gray-800 group-hover:text-white transition-colors leading-none block mb-6",
                        children: (n + 1).toString().padStart(2, "0")
                    }), w.jsx("p", {
                        className: "text-gray-400 text-lg font-medium leading-relaxed group-hover:text-[#00f2ff] transition-colors",
                        children: r
                    })]
                }), w.jsx("div", {
                    className: "mt-6",
                    children: w.jsx("span", {
                        className: "inline-block px-3 py-1 border border-gray-800 text-[10px] uppercase tracking-wider text-gray-500 group-hover:border-[#00f2ff]/30 group-hover:text-[#00f2ff]",
                        children: "Fundamental"
                    })
                })]
            }, n))
        })]
    })
})
  , j0 = "/vibra_monitorIA/assets/runner-D6a9wqxr.webp"
  , sE = () => (console.debug("[SolutionSection] runner asset path:", j0),
w.jsxs("section", {
    className: "min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans",
    children: [w.jsxs("div", {
        className: "relative h-[50vh] lg:h-auto order-2 lg:order-1 bg-gray-900 overflow-hidden group",
        children: [w.jsx("img", {
            src: j0,
            alt: "Consultor de Qualidade",
            className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        }), w.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
        }), w.jsx("div", {
            className: "absolute bottom-0 left-0 p-8 md:p-12 w-full",
            children: w.jsxs("div", {
                className: "bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white max-w-md",
                children: [w.jsxs("div", {
                    className: "flex items-center gap-3 mb-2 text-[#00f2ff]",
                    children: [w.jsx($y, {
                        size: 20
                    }), w.jsx("span", {
                        className: "text-xs font-bold tracking-widest uppercase",
                        children: "Consultor de Qualidade"
                    })]
                }), w.jsx("h3", {
                    className: "text-2xl font-bold mb-1",
                    children: "Especialista Humano"
                }), w.jsx("p", {
                    className: "text-sm text-gray-300 mb-4",
                    children: "Rio de Janeiro • BDA e Automações"
                }), w.jsxs("div", {
                    className: "flex items-center justify-between border-t border-white/10 pt-4 mt-2",
                    children: [w.jsxs("div", {
                        children: [w.jsx("span", {
                            className: "block text-2xl font-bold",
                            children: "1 de 1"
                        }), w.jsx("span", {
                            className: "text-[10px] uppercase text-gray-400",
                            children: "Etapa"
                        })]
                    }), w.jsxs("div", {
                        className: "text-right",
                        children: [w.jsx("span", {
                            className: "block text-sm font-bold",
                            children: "Entrada 01/03/2026"
                        }), w.jsx("span", {
                            className: "text-[10px] uppercase text-gray-400",
                            children: "Previsão"
                        })]
                    })]
                })]
            })
        })]
    }), w.jsxs("div", {
        className: "bg-white text-black p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2",
        children: [w.jsxs("p", {
            className: "text-gray-500 font-bold text-xs tracking-widest uppercase mb-6 flex items-center gap-2",
            children: [w.jsx("span", {
                className: "w-8 h-[1px] bg-black"
            }), " Escopo Técnico"]
        }), w.jsxs("h2", {
            className: "text-4xl md:text-5xl font-bold mb-12 tracking-tight text-[#002b5c]",
            children: ["Nossos ", w.jsx("span", {
                className: "text-[#00f2ff]",
                children: "Check Points"
            })]
        }), w.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
            children: [w.jsxs("div", {
                className: "border-l-2 border-[#002b5c] pl-6 py-2",
                children: [w.jsxs("div", {
                    className: "flex justify_between items-start mb-2",
                    children: [w.jsx("h4", {
                        className: "font-bold text-lg text-[#002b5c]",
                        children: "Treinamento do Modelo"
                    }), w.jsx(Wh, {
                        size: 18,
                        className: "text-gray-400"
                    })]
                }), w.jsxs("p", {
                    className: "text-3xl font-bold mb-2",
                    children: ["0 ", w.jsx("span", {
                        className: "text-base font-normal text-gray-500",
                        children: "de 2 etapas"
                    })]
                }), w.jsx("p", {
                    className: "text-sm text-gray-600 font-medium uppercase tracking-wide mb-1",
                    children: "Estruturação de Prompts"
                }), w.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Formulado com contexto de atendimento e processos."
                })]
            }), w.jsxs("div", {
                className: "border-l-2 border-[#002b5c] pl-6 py-2",
                children: [w.jsxs("div", {
                    className: "flex justify_between items-start mb-2",
                    children: [w.jsx("h4", {
                        className: "font-bold text-lg text-[#002b5c]",
                        children: "Calibração das Saídas"
                    }), w.jsx(Hy, {
                        size: 18,
                        className: "text_gray-400"
                    })]
                }), w.jsxs("p", {
                    className: "text-3xl font-bold mb-2",
                    children: ["0 ", w.jsx("span", {
                        className: "text-base font-normal text-gray-500",
                        children: "de 2 etapas"
                    })]
                }), w.jsx("p", {
                    className: "text-sm text-gray-600 font-medium uppercase tracking-wide mb-1",
                    children: "Precisão do Modelo"
                }), w.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Realizados pós treinamento do modelo."
                })]
            }), w.jsxs("div", {
                className: "border-l-2 border-[#002b5c] pl-6 py-2",
                children: [w.jsxs("div", {
                    className: "flex justify_between items-start mb-2",
                    children: [w.jsx("h4", {
                        className: "font-bold text-lg text-[#002b5c]",
                        children: "Desenv. Dashboard"
                    }), w.jsx(hy, {
                        size: 18,
                        className: "text-gray-400"
                    })]
                }), w.jsxs("p", {
                    className: "text-3xl font-bold mb-2",
                    children: ["1 ", w.jsx("span", {
                        className: "text-base font-normal text-gray-500",
                        children: "de 2 etapas"
                    })]
                }), w.jsx("p", {
                    className: "text-sm text-gray-600 font-medium uppercase tracking-wide mb-1",
                    children: "Visualização de Dados"
                }), w.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Ingestão e QA pós calibração do modelo."
                })]
            }), w.jsxs("div", {
                className: "bg-[#002b5c] text-white p-6 rounded-xl shadow-lg transform md:scale-110 md:origin-left",
                children: [w.jsxs("div", {
                    className: "flex items-center gap-2 mb-4 text-[#00f2ff]",
                    children: [w.jsx(qh, {
                        size: 20
                    }), w.jsx("span", {
                        className: "text-xs font-bold uppercase tracking-wider",
                        children: "Tempo Estimado"
                    })]
                }), w.jsxs("div", {
                    className: "text-5xl font-bold mb-2",
                    children: ["30 ", w.jsx("span", {
                        className: "text-2xl",
                        children: "dias"
                    })]
                }), w.jsx("p", {
                    className: "text-xs text-gray-300 leading-relaxed border-t border-white/20 pt-4 mt-2",
                    children: "A etapa de desenvolvimento ocorre logo após o Go Live dos atendimentos."
                })]
            })]
        })]
    })]
}))
  , uE = () => {
    const r = [{
        icon: w.jsx(Zy, {
            size: 32,
            className: "text-[#002b5c]"
        }),
        title: "Imersão operacional",
        desc: "Avaliamos os dados e processos de atendimento, para desenvolver o contexto para a IA",
        id: "MIA",
        position: "bottom"
    }, {
        icon: w.jsx(yy, {
            size: 32,
            className: "text-[#002b5c]"
        }),
        title: "Desenvolvimento de prompts",
        desc: "Estruturação de paper e construção do motor de analise das interações",
        id: "DEV",
        position: "top"
    }, {
        icon: w.jsx(Wh, {
            size: 32,
            className: "text-[#002b5c]"
        }),
        title: "Orquestração",
        desc: "Etapa de desenvolvimento para extração e coleta de interações (voz e e-mail)",
        id: "ORQ",
        position: "bottom"
    }, {
        icon: w.jsx(fy, {
            size: 32,
            className: "text-[#002b5c]"
        }),
        title: "Adequação e QA",
        desc: "Reestruturação de prompts e testes de estresse dos coletores e modelo",
        id: "QA",
        position: "top"
    }, {
        icon: w.jsx(Iy, {
            size: 32,
            className: "text-[#002b5c]"
        }),
        title: "Calibração dos outputs",
        desc: "Validação de acurácia, monitoria humana comparada aos resultados do modelo",
        id: "CAL",
        position: "bottom"
    }, {
        icon: w.jsx(py, {
            size: 32,
            className: "text-[#002b5c]"
        }),
        title: "Ingestão dashboards",
        desc: "Os dados calibrados passam a popular as rotinas dos dashboards",
        id: "DASH",
        position: "top"
    }];
    return w.jsx("section", {
        className: "bg-white text-[#002b5c] py-24 px-8 overflow-hidden font-sans",
        children: w.jsxs("div", {
            className: "max-w-[1600px] mx-auto flex flex-col gap-24",
            children: [w.jsxs("div", {
                className: "relative pt-20 pb-20",
                children: [w.jsx("div", {
                    className: "absolute top-1/2 left-0 w-full h-1 bg-[#002b5c] -translate-y-1/2 hidden md:block z-0"
                }), w.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10",
                    children: r.map( (n, i) => w.jsxs("div", {
                        className: `flex flex-col items-center ${n.position === "top" ? "md:-mt-32" : "md:mt-32"}`,
                        children: [n.position === "top" && w.jsxs("div", {
                            className: "text-center mb-6 px-2",
                            children: [w.jsx("h3", {
                                className: "font-bold text-lg mb-2",
                                children: n.title
                            }), w.jsxs("p", {
                                className: "text-sm text-gray-600 leading-snug",
                                children: [n.desc, n.id === "CAL" && w.jsx("span", {
                                    className: "inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded ml-1 font-bold",
                                    children: "Acurácia 85%"
                                })]
                            })]
                        }), w.jsxs("div", {
                            className: "flow-card group cursor-pointer relative",
                            children: [w.jsx("div", {
                                className: `absolute left-1/2 w-1 h-16 bg-[#002b5c] -translate-x-1/2 hidden md:block transition-all duration-500
                                ${n.position === "top" ? "top-full group-hover:h-24" : "bottom-full group-hover:h-24"}
                             `
                            }), w.jsx("div", {
                                className: "hexagon-wrapper drop-shadow-lg",
                                children: w.jsx("div", {
                                    className: "hexagon-inner border-[3px] border-[#002b5c]",
                                    children: n.id === "MIA" ? w.jsx("h1", {
                                        className: "text-3xl font-black text-[#002b5c]",
                                        children: "MIA"
                                    }) : n.icon
                                })
                            })]
                        }), n.position === "bottom" && w.jsxs("div", {
                            className: "text-center mt-6 px-2",
                            children: [w.jsx("h3", {
                                className: "font-bold text-lg mb-2",
                                children: n.title
                            }), w.jsxs("p", {
                                className: "text-sm text-gray-600 leading-snug",
                                children: [n.desc, n.id === "CAL" && w.jsx("span", {
                                    className: "inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded ml-1 font-bold",
                                    children: "Acurácia 85%"
                                })]
                            })]
                        })]
                    }, i))
                })]
            }), w.jsxs("div", {
                children: [w.jsxs("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [w.jsx(Ry, {
                        size: 32,
                        className: "text-[#002b5c]"
                    }), w.jsx("h2", {
                        className: "text-3xl font-bold",
                        children: "FAQs do produto"
                    })]
                }), w.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [w.jsxs("div", {
                        className: "border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50/50 hover:bg-white",
                        children: [w.jsxs("div", {
                            className: "flex items-center gap-4 mb-6",
                            children: [w.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-[#002b5c] text-white flex items-center justify-center font-bold shrink-0",
                                children: "1"
                            }), w.jsxs("div", {
                                children: [w.jsx("h3", {
                                    className: "font-bold text-lg leading-tight text-gray-900",
                                    children: "Go Live"
                                }), w.jsx("span", {
                                    className: "text-xs text-gray-500 uppercase tracking-wide",
                                    children: "Implementação"
                                })]
                            })]
                        }), w.jsx("h4", {
                            className: "font-bold text-md mb-3 text-[#002b5c]",
                            children: "Porque inicia com o go live?"
                        }), w.jsx("p", {
                            className: "text-gray-600 text-sm leading-relaxed",
                            children: "Todos os prompts são desenvolvidos com a adição de exemplos reais, para impedir alucinação do modelo e está calibrado com o contexto do atendimento."
                        })]
                    }), w.jsxs("div", {
                        className: "border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50/50 hover:bg-white",
                        children: [w.jsxs("div", {
                            className: "flex items-center gap-4 mb-6",
                            children: [w.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-[#002b5c] text-white flex items-center justify-center font-bold shrink-0",
                                children: "2"
                            }), w.jsxs("div", {
                                children: [w.jsx("h3", {
                                    className: "font-bold text-lg leading-tight text-gray-900",
                                    children: "Entregáveis"
                                }), w.jsx("span", {
                                    className: "text-xs text-gray-500 uppercase tracking-wide",
                                    children: "Produto"
                                })]
                            })]
                        }), w.jsx("h4", {
                            className: "font-bold text-md mb-3 text-[#002b5c]",
                            children: "O que é o entregável?"
                        }), w.jsx("p", {
                            className: "text-gray-600 text-sm leading-relaxed",
                            children: "O monitorIA é um fluxo completo de gestão de monitoria, possuindo um analítico de dados, relatórios de acompanhamento e integrações de feedback."
                        })]
                    }), w.jsxs("div", {
                        className: "border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50/50 hover:bg-white",
                        children: [w.jsxs("div", {
                            className: "flex items-center gap-4 mb-6",
                            children: [w.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-[#002b5c] text-white flex items-center justify-center font-bold shrink-0",
                                children: "3"
                            }), w.jsxs("div", {
                                children: [w.jsx("h3", {
                                    className: "font-bold text-lg leading-tight text-gray-900",
                                    children: "Customização"
                                }), w.jsx("span", {
                                    className: "text-xs text-gray-500 uppercase tracking-wide",
                                    children: "Flexibilidade"
                                })]
                            })]
                        }), w.jsx("h4", {
                            className: "font-bold text-md mb-3 text-[#002b5c]",
                            children: "O que pode ser personalizado?"
                        }), w.jsx("p", {
                            className: "text-gray-600 text-sm leading-relaxed",
                            children: "Tudo, toda a estrutura do monitorIA é maleável, permitindo a adição, exclusão ou edição de prompts, relatórios, modelos de feedback e amostras monitoradas."
                        })]
                    })]
                })]
            })]
        })
    })
}
  , cE = () => {
    const r = yA.useRef(null);
    return yA.useEffect( () => {
        const n = r.current;
        if (!n)
            return;
        const i = n.getContext("2d");
        if (!i)
            return;
        let l = [], c, o = {
            x: -1e3,
            y: -1e3,
            radius: 150
        };
        const B = 38
          , d = () => {
            n.width = window.innerWidth,
            n.height = window.innerHeight,
            U()
        }
          , g = y => {
            const I = n.getBoundingClientRect();
            o.x = y.clientX - I.left,
            o.y = y.clientY - I.top
        }
        ;
        class Q {
            constructor(I, D) {
                this.x = I,
                this.y = D,
                this.baseX = I,
                this.baseY = D,
                this.size = 1.2,
                this.density = Math.random() * 25 + 5
            }
            draw() {
                if (!i)
                    return;
                let I = o.x - this.x
                  , D = o.y - this.y
                  , L = Math.sqrt(I * I + D * D);
                if (L < o.radius) {
                    let X = 1 - L / o.radius;
                    i.fillStyle = `rgba(0, 242, 255, ${X + .2})`,
                    i.beginPath(),
                    i.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2),
                    i.fill()
                } else
                    i.fillStyle = "#222",
                    i.beginPath(),
                    i.arc(this.x, this.y, this.size, 0, Math.PI * 2),
                    i.fill()
            }
            update() {
                let I = o.x - this.x
                  , D = o.y - this.y
                  , L = Math.sqrt(I * I + D * D);
                if (L < o.radius) {
                    let X = I / L
                      , _ = D / L
                      , R = o.radius
                      , W = (R - L) / R
                      , AA = X * W * this.density
                      , P = _ * W * this.density;
                    this.x -= AA,
                    this.y -= P
                } else {
                    if (this.x !== this.baseX) {
                        let X = this.x - this.baseX;
                        this.x -= X / 15
                    }
                    if (this.y !== this.baseY) {
                        let X = this.y - this.baseY;
                        this.y -= X / 15
                    }
                }
            }
        }
        function U() {
            l = [];
            for (let y = 0; y < n.height + B; y += B)
                for (let I = 0; I < n.width + B; I += B)
                    l.push(new Q(I,y))
        }
        function C() {
            i.clearRect(0, 0, n.width, n.height),
            l.forEach(y => {
                y.update(),
                y.draw()
            }
            ),
            c = requestAnimationFrame(C)
        }
        return window.addEventListener("resize", d),
        window.addEventListener("mousemove", g),
        d(),
        C(),
        () => {
            window.removeEventListener("resize", d),
            window.removeEventListener("mousemove", g),
            cancelAnimationFrame(c)
        }
    }
    , []),
    w.jsxs("section", {
        id: "scene-thanks",
        className: "relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden",
        children: [w.jsx("canvas", {
            ref: r,
            id: "canvas-grid",
            className: "absolute top-0 left-0 w-full h-full z-[1]"
        }), w.jsxs("div", {
            className: "thanks-content relative z-10 text-center pointer-events-none px-6",
            children: [w.jsxs("div", {
                className: "monitoria-logo text-white/60 text-sm font-bold tracking-[5px] uppercase mb-8",
                children: ["Monitor", w.jsx("span", {
                    className: "text-[#00f2ff]",
                    children: "IA"
                })]
            }), w.jsx("h1", {
                className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-2",
                children: "Insights que antecipam,"
            }), w.jsx("h1", {
                className: "text-4xl md:text-6xl lg:text-7xl font-bold text-gray-500 tracking-tighter leading-tight",
                children: "inteligência que transforma."
            })]
        }), w.jsxs("footer", {
            className: "thanks-footer absolute bottom-12 w-full max-w-[1300px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 z-20",
            children: [w.jsxs("div", {
                className: "footer-item flex flex-col gap-1 text-left items-center md:items-start",
                children: [w.jsx("span", {
                    className: "label text-[0.65rem] uppercase tracking-[2px] text-[#444] font-bold",
                    children: "Diretoria"
                }), w.jsx("span", {
                    className: "value text-sm text-white/80",
                    children: "Qualidade e Dados"
                })]
            }), w.jsxs("div", {
                className: "footer-item flex flex-col gap-1 text-center items-center",
                children: [w.jsx("span", {
                    className: "label text-[0.65rem] uppercase tracking-[2px] text-[#444] font-bold",
                    children: "Responsável"
                }), w.jsx("span", {
                    className: "value text-sm text-white font-bold",
                    children: "Victor Emanoel de Moura Sousa"
                })]
            }), w.jsxs("div", {
                className: "footer-item flex flex-col gap-1 text-right items-center md:items-end",
                children: [w.jsx("span", {
                    className: "label text-[0.65rem] uppercase tracking-[2px] text-[#444] font-bold",
                    children: "Contato"
                }), w.jsx("span", {
                    className: "value text-sm",
                    children: w.jsx("a", {
                        href: "mailto:a.victor.sousa@aec.com.br",
                        className: "text-[#00f2ff] hover:opacity-70 transition-opacity no-underline",
                        children: "a.victor.sousa@aec.com.br"
                    })
                })]
            })]
        })]
    })
}
  , $h = ["Fevereiro", "Março", "Abril", "Maio", "Junho"]
  , oE = 4;
$h.length * oE;
const fE = [{
    color: "#cbd5e1",
    label: "Contratação"
}, {
    color: "#d8b4fe",
    label: "Apresentação"
}, {
    color: "#93c5fd",
    label: "Desenvolvimento"
}, {
    color: "#86efac",
    label: "Produção"
}]
  , BE = [{
    id: "wave-estrutura",
    name: "Estrutura",
    colorClass: "bg-slate-600",
    groups: [{
        name: "Contratação",
        tasks: [{
            id: "est-1",
            name: "Entrevistas externas e internas",
            startWeek: 1,
            durationWeeks: 2,
            type: "planning",
            color: "#cbd5e1",
            label: "Fev 1ª/2ª"
        }, {
            id: "est-2",
            name: "Formalização da admisão",
            startWeek: 2,
            durationWeeks: 1,
            type: "planning",
            color: "#cbd5e1",
            label: "Fev 2ª"
        }, {
            id: "est-3",
            name: "Handover consultor",
            startWeek: 3,
            durationWeeks: 4,
            type: "planning",
            color: "#cbd5e1",
            label: "Fev/Mar"
        }, {
            id: "est-4",
            name: "Apresentação do recurso",
            startWeek: 5,
            durationWeeks: 1,
            type: "execution",
            color: "#d8b4fe",
            label: "Mar 1ª"
        }]
    }]
}, {
    id: "wave-desenvolvimento",
    name: "Desenvolvimento",
    colorClass: "bg-blue-600",
    groups: [{
        name: "Text",
        tasks: [{
            id: "txt-1",
            name: "Imersão e constr. contexto Email",
            startWeek: 5,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Mar 1ª"
        }, {
            id: "txt-2",
            name: "Desenvolvimento de prompts",
            startWeek: 6,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Mar 2ª"
        }, {
            id: "txt-3",
            name: "Desenvolvimento de coletores",
            startWeek: 6,
            durationWeeks: 2,
            type: "execution",
            color: "#93c5fd",
            label: "Mar 2ª/3ª"
        }, {
            id: "txt-4",
            name: "Processamento e calibração",
            startWeek: 7,
            durationWeeks: 2,
            type: "execution",
            color: "#93c5fd",
            label: "Mar 3ª/4ª"
        }, {
            id: "txt-5",
            name: "Estruturação de feedback",
            startWeek: 8,
            durationWeeks: 2,
            type: "execution",
            color: "#93c5fd",
            label: "Mar/Abr"
        }, {
            id: "txt-6",
            name: "Orquestração dos dashboards",
            startWeek: 9,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Abr 1ª"
        }, {
            id: "txt-7",
            name: "Go live MonitorIA Email",
            startWeek: 9,
            durationWeeks: 1,
            type: "go-live",
            color: "#86efac",
            label: "GO LIVE"
        }, {
            id: "txt-8",
            name: "Rollout feedbacks",
            startWeek: 10,
            durationWeeks: 1,
            type: "go-live",
            color: "#86efac",
            label: "Abr 2ª"
        }, {
            id: "txt-9",
            name: "Treinamento gestão",
            startWeek: 9,
            durationWeeks: 2,
            type: "training",
            color: "#d8b4fe",
            label: "Abr 1ª/2ª"
        }, {
            id: "txt-10",
            name: "Calibração de prompts",
            startWeek: 11,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Abr 3ª"
        }, {
            id: "txt-11",
            name: "Imersão e estudos operacionais",
            startWeek: 9,
            durationWeeks: 4,
            type: "execution",
            color: "#93c5fd",
            label: "Abril"
        }, {
            id: "txt-12",
            name: "Apresentação de resultados",
            startWeek: 12,
            durationWeeks: 1,
            type: "execution",
            color: "#d8b4fe",
            label: "Abr 4ª"
        }]
    }, {
        name: "Voz",
        tasks: [{
            id: "voz-1",
            name: "Imersão e constr. contexto Voz",
            startWeek: 13,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Mai 1ª"
        }, {
            id: "voz-2",
            name: "Desenvolvimento de prompts",
            startWeek: 14,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Mai 2ª"
        }, {
            id: "voz-3",
            name: "Desenvolvimento de coletores",
            startWeek: 14,
            durationWeeks: 2,
            type: "execution",
            color: "#93c5fd",
            label: "Mai 2ª/3ª"
        }, {
            id: "voz-4",
            name: "Processamento e calibração",
            startWeek: 15,
            durationWeeks: 2,
            type: "execution",
            color: "#93c5fd",
            label: "Mai 3ª/4ª"
        }, {
            id: "voz-5",
            name: "Estruturação de feedback",
            startWeek: 16,
            durationWeeks: 2,
            type: "execution",
            color: "#93c5fd",
            label: "Mai/Jun"
        }, {
            id: "voz-6",
            name: "Orquestração dos dashboards",
            startWeek: 17,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Jun 1ª"
        }, {
            id: "voz-7",
            name: "Go live MonitorIA Voz",
            startWeek: 17,
            durationWeeks: 1,
            type: "go-live",
            color: "#86efac",
            label: "GO LIVE"
        }, {
            id: "voz-8",
            name: "Rollout feedbacks",
            startWeek: 18,
            durationWeeks: 1,
            type: "go-live",
            color: "#86efac",
            label: "Jun 2ª"
        }, {
            id: "voz-9",
            name: "Treinamento gestão",
            startWeek: 17,
            durationWeeks: 2,
            type: "training",
            color: "#d8b4fe",
            label: "Jun 1ª/2ª"
        }, {
            id: "voz-10",
            name: "Calibração de prompts",
            startWeek: 19,
            durationWeeks: 1,
            type: "execution",
            color: "#93c5fd",
            label: "Jun 3ª"
        }, {
            id: "voz-11",
            name: "Imersão e estudos operacionais",
            startWeek: 17,
            durationWeeks: 4,
            type: "execution",
            color: "#93c5fd",
            label: "Junho"
        }, {
            id: "voz-12",
            name: "Apresentação de resultados",
            startWeek: 20,
            durationWeeks: 1,
            type: "execution",
            color: "#d8b4fe",
            label: "Jun 4ª"
        }]
    }]
}]
  , gE = () => {
    const [r,n] = yA.useState(BE)
      , [i,l] = yA.useState(fE)
      , [c,o] = yA.useState($h)
      , B = yA.useRef(null)
      , [d,g] = yA.useState(!1)
      , Q = (N, G, Z, J) => {
        n(nA => nA.map(sA => sA.id !== N ? sA : {
            ...sA,
            groups: sA.groups.map(gA => gA.name !== G ? gA : {
                ...gA,
                tasks: gA.tasks.map(oA => oA.id !== Z ? oA : {
                    ...oA,
                    ...J
                })
            })
        }))
    }
      , U = (N, G) => {
        const Z = {
            id: `new-${Date.now()}`,
            name: "Nova Tarefa",
            startWeek: 1,
            durationWeeks: 4,
            type: "planning",
            color: i.length > 0 ? i[0].color : "#e2e8f0",
            label: ""
        };
        n(J => J.map(nA => nA.id !== N ? nA : {
            ...nA,
            groups: nA.groups.map(sA => sA.name !== G ? sA : {
                ...sA,
                tasks: [...sA.tasks, Z]
            })
        }))
    }
      , C = (N, G, Z) => {
        n(J => J.map(nA => nA.id !== N ? nA : {
            ...nA,
            groups: nA.groups.map(sA => sA.name !== G ? sA : {
                ...sA,
                tasks: sA.tasks.filter(gA => gA.id !== Z)
            })
        }))
    }
      , y = (N, G, Z) => {
        n(J => J.map(nA => nA.id !== N ? nA : G === null ? {
            ...nA,
            name: Z
        } : {
            ...nA,
            groups: nA.groups.map(sA => sA.name !== G ? sA : {
                ...sA,
                name: Z
            })
        }))
    }
      , I = (N, G) => {
        n(Z => Z.map(J => J.id !== N ? J : {
            ...J,
            groups: J.groups.filter(nA => nA.name !== G)
        }))
    }
      , D = () => {
        const N = {
            id: `wave-${Date.now()}`,
            name: "Nova Onda",
            colorClass: "bg-indigo-600",
            groups: [{
                name: "Novo Grupo",
                tasks: []
            }]
        };
        n(G => [...G, N])
    }
      , L = N => {
        n(G => G.filter(Z => Z.id !== N))
    }
      , X = N => {
        o(G => [...G, N])
    }
      , _ = () => {
        c.length > 1 && o(N => N.slice(0, -1))
    }
      , R = (N, G) => {
        l(Z => Z.map(J => J.color === N ? {
            ...J,
            label: G
        } : J))
    }
      , W = N => {
        l(G => G.filter(Z => Z.color !== N))
    }
      , AA = () => {
        const G = `hsl(${Math.floor(Math.random() * 360)}, 70%, 90%)`;
        l(Z => [...Z, {
            color: G,
            label: "Nova Categoria"
        }])
    }
      , P = async () => {
        if (B.current) {
            g(!0);
            try {
                const N = await ay(B.current, {
                    scale: 2,
                    backgroundColor: "#ffffff",
                    logging: !1,
                    useCORS: !0
                })
                  , G = document.createElement("a");
                G.download = "roadmap-minimalist.png",
                G.href = N.toDataURL("image/png"),
                G.click()
            } catch (N) {
                console.error("Export failed", N),
                alert("Failed to export image.")
            } finally {
                g(!1)
            }
        }
    }
    ;
    return w.jsxs("div", {
        className: "font-sans",
        children: [w.jsx(lE, {}), w.jsx(iE, {}), w.jsx(sE, {}), w.jsx(uE, {}), w.jsx("section", {
            className: "roadmap-container relative bg-slate-50 min-h-screen py-16 px-4 md:px-8",
            children: w.jsxs("div", {
                className: "max-w-screen-2xl mx-auto",
                children: [w.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6",
                    children: [w.jsxs("div", {
                        children: [w.jsx("h2", {
                            className: "text-4xl font-bold text-slate-900 mb-2",
                            children: "Roadmap de Implementação"
                        }), w.jsx("p", {
                            className: "text-slate-500",
                            children: "Cronograma estratégico e acompanhamento de ondas"
                        })]
                    }), w.jsx("div", {
                        className: "flex flex-col md:flex-row items-stretch md:items-center gap-4",
                        children: w.jsxs("button", {
                            onClick: P,
                            disabled: d,
                            className: "flex items-center justify-center gap-2 bg-[#002b5c] hover:bg-[#003d80] text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-blue-900/10 whitespace-nowrap",
                            children: [w.jsx(xy, {
                                size: 20
                            }), d ? "Exportando..." : "Baixar PNG"]
                        })
                    })]
                }), w.jsx("div", {
                    ref: B,
                    className: "rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white",
                    children: w.jsx(nE, {
                        data: r,
                        legend: i,
                        months: c,
                        onUpdateTask: Q,
                        onAddTask: U,
                        onDeleteTask: C,
                        onUpdateStructure: y,
                        onDeleteGroup: I,
                        onAddWave: D,
                        onDeleteWave: L,
                        onAddMonth: X,
                        onRemoveMonth: _,
                        onUpdateLegend: R,
                        onDeleteLegend: W,
                        onAddLegend: AA
                    })
                }), w.jsxs("div", {
                    className: "mt-8 text-center text-gray-500 text-xs flex justify-center items-center gap-2",
                    children: [w.jsx(Ny, {
                        size: 14
                    }), w.jsx("span", {
                        children: "Modo Editor Minimalista"
                    }), w.jsx("span", {
                        className: "mx-2",
                        children: "•"
                    }), w.jsx("span", {
                        children: "Gerado via MonitorIA System"
                    })]
                })]
            })
        }), w.jsx(cE, {})]
    })
}
  , AQ = document.getElementById("root");
if (!AQ)
    throw new Error("Could not find root element to mount to");
const dE = LC.createRoot(AQ);
dE.render(w.jsx(Pc.StrictMode, {
    children: w.jsx(gE, {})
}));
