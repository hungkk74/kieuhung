(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = (param)=>{
    let { forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R } = param;
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>H(m, l)
    }["V.useState"]), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>c === "system" ? E() : c
    }["V.useState"]), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[S]": (o)=>{
            let r = o;
            if (!r) return;
            o === "system" && s && (r = E());
            let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = {
                "V.useCallback[S].L": (g)=>{
                    g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
                }
            }["V.useCallback[S].L"];
            if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
                let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
                P.style.colorScheme = D;
            }
            C == null || C();
        }
    }["V.useCallback[S]"], [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[f]": (o)=>{
            let r = typeof o == "function" ? o(c) : o;
            n(r);
            try {
                localStorage.setItem(m, r);
            } catch (v) {}
        }
    }["V.useCallback[f]"], [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[A]": (o)=>{
            let r = E(o);
            y(r), c === "system" && s && !e && S("system");
        }
    }["V.useCallback[A]"], [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = window.matchMedia(I);
            return o.addListener(A), A(o), ({
                "V.useEffect": ()=>o.removeListener(A)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = {
                "V.useEffect.o": (r)=>{
                    r.key === m && (r.newValue ? n(r.newValue) : f(l));
                }
            }["V.useEffect.o"];
            return window.addEventListener("storage", o), ({
                "V.useEffect": ()=>window.removeEventListener("storage", o)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            S(e != null ? e : c);
        }
    }["V.useEffect"], [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "V.useMemo[Q]": ()=>({
                theme: c,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: c === "system" ? T : c,
                themes: s ? [
                    ...a,
                    "system"
                ] : a,
                systemTheme: s ? T : void 0
            })
    }["V.useMemo[Q]"], [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"]((param)=>{
    let { forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w } = param;
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: typeof window == "undefined" ? d : "",
        dangerouslySetInnerHTML: {
            __html: "(".concat(M.toString(), ")(").concat(p, ")")
        }
    });
}), H = (e, i)=>{
    if (O) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || i;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/Documents/CourseDemy/front-end/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Documents/CourseDemy/front-end/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/CourseDemy/front-end/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/react.ts
__turbopack_context__.s([
    "Provider",
    ()=>Provider_default,
    "ReactReduxContext",
    ()=>ReactReduxContext,
    "batch",
    ()=>batch,
    "connect",
    ()=>connect_default,
    "createDispatchHook",
    ()=>createDispatchHook,
    "createSelectorHook",
    ()=>createSelectorHook,
    "createStoreHook",
    ()=>createStoreHook,
    "shallowEqual",
    ()=>shallowEqual,
    "useDispatch",
    ()=>useDispatch,
    "useSelector",
    ()=>useSelector,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/hooks/useSelector.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)");
;
// src/utils/react-is.ts
var IS_REACT_19 = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].startsWith("19");
var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for(IS_REACT_19 ? "react.transitional.element" : "react.element");
var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
    return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) ? true : false;
}
function typeOf(object) {
    if (typeof object === "object" && object !== null) {
        const { $$typeof } = object;
        switch($$typeof){
            case REACT_ELEMENT_TYPE:
                switch(object = object.type, object){
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                        return object;
                    default:
                        switch(object = object && object.$$typeof, object){
                            case REACT_CONTEXT_TYPE:
                            case REACT_FORWARD_REF_TYPE:
                            case REACT_LAZY_TYPE:
                            case REACT_MEMO_TYPE:
                                return object;
                            case REACT_CONSUMER_TYPE:
                                return object;
                            default:
                                return $$typeof;
                        }
                }
            case REACT_PORTAL_TYPE:
                return $$typeof;
        }
    }
}
function isContextConsumer(object) {
    return IS_REACT_19 ? typeOf(object) === REACT_CONSUMER_TYPE : typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
    if (!selector) {
        throw new Error("Unexpected value for ".concat(methodName, " in connect."));
    } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
        if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
            warning("The selector for ".concat(methodName, " of connect did not specify a value for dependsOnOwnProps."));
        }
    }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
    verify(mapStateToProps, "mapStateToProps");
    verify(mapDispatchToProps, "mapDispatchToProps");
    verify(mergeProps, "mergeProps");
}
// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, param) {
    let { areStatesEqual, areOwnPropsEqual, areStatePropsEqual } = param;
    let hasRunAtLeastOnce = false;
    let state;
    let ownProps;
    let stateProps;
    let dispatchProps;
    let mergedProps;
    function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
    }
    function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewState() {
        const nextStateProps = mapStateToProps(state, ownProps);
        const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
        const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
}
function finalPropsSelectorFactory(dispatch, param) {
    let { initMapStateToProps, initMapDispatchToProps, initMergeProps, ...options } = param;
    const mapStateToProps = initMapStateToProps(dispatch, options);
    const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    const mergeProps = initMergeProps(dispatch, options);
    if ("TURBOPACK compile-time truthy", 1) {
        verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
    }
    return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return dispatch(actionCreator(...args));
            };
        }
    }
    return boundActionCreators;
}
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    const proto = Object.getPrototypeOf(obj);
    if (proto === null) return true;
    let baseProto = proto;
    while(Object.getPrototypeOf(baseProto) !== null){
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
    if (!isPlainObject(value)) {
        warning("".concat(methodName, "() in ").concat(displayName, " must return a plain object. Instead received ").concat(value, "."));
    }
}
// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch) {
        const constant = getConstant(dispatch);
        function constantSelector() {
            return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
    };
}
function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, param) {
        let { displayName } = param;
        const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
        };
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
            proxy.mapToProps = mapToProps;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
            let props = proxy(stateOrDispatch, ownProps);
            if (typeof props === "function") {
                proxy.mapToProps = props;
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                props = proxy(stateOrDispatch, ownProps);
            }
            if ("TURBOPACK compile-time truthy", 1) verifyPlainObject(props, displayName, methodName);
            return props;
        };
        return proxy;
    };
}
// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
    return (dispatch, options)=>{
        throw new Error("Invalid value of type ".concat(typeof arg, " for ").concat(name, " argument when connecting component ").concat(options.wrappedComponentName, "."));
    };
}
// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant((dispatch)=>// @ts-ignore
        bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch)=>({
            dispatch
        })) : typeof mapDispatchToProps === "function" ? // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps") : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}
// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(()=>({})) : typeof mapStateToProps === "function" ? // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}
// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps
    };
}
function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, param) {
        let { displayName, areMergedPropsEqual } = param;
        let hasRunOnce = false;
        let mergedProps;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
            if (hasRunOnce) {
                if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
            } else {
                hasRunOnce = true;
                mergedProps = nextMergedProps;
                if ("TURBOPACK compile-time truthy", 1) verifyPlainObject(mergedProps, displayName, "mergeProps");
            }
            return mergedProps;
        };
    };
}
function mergePropsFactory(mergeProps) {
    return !mergeProps ? ()=>defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}
// src/utils/batch.ts
function defaultNoopBatch(callback) {
    callback();
}
// src/utils/Subscription.ts
function createListenerCollection() {
    let first = null;
    let last = null;
    return {
        clear () {
            first = null;
            last = null;
        },
        notify () {
            defaultNoopBatch(()=>{
                let listener = first;
                while(listener){
                    listener.callback();
                    listener = listener.next;
                }
            });
        },
        get () {
            const listeners = [];
            let listener = first;
            while(listener){
                listeners.push(listener);
                listener = listener.next;
            }
            return listeners;
        },
        subscribe (callback) {
            let isSubscribed = true;
            const listener = last = {
                callback,
                next: null,
                prev: last
            };
            if (listener.prev) {
                listener.prev.next = listener;
            } else {
                first = listener;
            }
            return function unsubscribe() {
                if (!isSubscribed || first === null) return;
                isSubscribed = false;
                if (listener.next) {
                    listener.next.prev = listener.prev;
                } else {
                    last = listener.prev;
                }
                if (listener.prev) {
                    listener.prev.next = listener.next;
                } else {
                    first = listener.next;
                }
            };
        }
    };
}
var nullListeners = {
    notify () {},
    get: ()=>[]
};
function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    let subscriptionsAmount = 0;
    let selfSubscribed = false;
    function addNestedSub(listener) {
        trySubscribe();
        const cleanupListener = listeners.subscribe(listener);
        let removed = false;
        return ()=>{
            if (!removed) {
                removed = true;
                cleanupListener();
                tryUnsubscribe();
            }
        };
    }
    function notifyNestedSubs() {
        listeners.notify();
    }
    function handleChangeWrapper() {
        if (subscription.onStateChange) {
            subscription.onStateChange();
        }
    }
    function isSubscribed() {
        return selfSubscribed;
    }
    function trySubscribe() {
        subscriptionsAmount++;
        if (!unsubscribe) {
            unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
            listeners = createListenerCollection();
        }
    }
    function tryUnsubscribe() {
        subscriptionsAmount--;
        if (unsubscribe && subscriptionsAmount === 0) {
            unsubscribe();
            unsubscribe = void 0;
            listeners.clear();
            listeners = nullListeners;
        }
    }
    function trySubscribeSelf() {
        if (!selfSubscribed) {
            selfSubscribed = true;
            trySubscribe();
        }
    }
    function tryUnsubscribeSelf() {
        if (selfSubscribed) {
            selfSubscribed = false;
            tryUnsubscribe();
        }
    }
    const subscription = {
        addNestedSub,
        notifyNestedSubs,
        handleChangeWrapper,
        isSubscribed,
        trySubscribe: trySubscribeSelf,
        tryUnsubscribe: tryUnsubscribeSelf,
        getListeners: ()=>listeners
    };
    return subscription;
}
// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = ()=>!!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = ()=>typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = ()=>isDOM || isReactNative ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
// src/utils/shallowEqual.ts
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
// src/utils/hoistStatics.ts
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {
    [ForwardRef]: FORWARD_REF_STATICS,
    [Memo]: MEMO_STATICS
};
function getStatics(component) {
    if (isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
    if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
            const inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent);
            }
        }
        let keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        const targetStatics = getStatics(targetComponent);
        const sourceStatics = getStatics(sourceComponent);
        for(let i = 0; i < keys.length; ++i){
            const key = keys[i];
            if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
// src/components/Context.ts
var ContextKey = /* @__PURE__ */ Symbol.for("react-redux-context");
var gT = typeof globalThis !== "undefined" ? globalThis : /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */ {};
function getContext() {
    var _gT, _ContextKey;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]) return {};
    var _;
    const contextMap = (_ = (_gT = gT)[_ContextKey = ContextKey]) !== null && _ !== void 0 ? _ : _gT[_ContextKey] = /* @__PURE__ */ new Map();
    let realContext = contextMap.get(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]);
    if (!realContext) {
        realContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
        if ("TURBOPACK compile-time truthy", 1) {
            realContext.displayName = "ReactRedux";
        }
        contextMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"], realContext);
    }
    return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
// src/components/connect.tsx
var NO_SUBSCRIPTION_ARRAY = [
    null,
    null
];
var stringifyComponent = (Comp)=>{
    try {
        return JSON.stringify(Comp);
    } catch (err) {
        return String(Comp);
    }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
    useIsomorphicLayoutEffect({
        "useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect": ()=>effectFunc(...effectArgs)
    }["useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect"], dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
    lastWrapperProps.current = wrapperProps;
    renderIsScheduled.current = false;
    if (childPropsFromStoreUpdate.current) {
        childPropsFromStoreUpdate.current = null;
        notifyNestedSubs();
    }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
    if (!shouldHandleStateChanges) return ()=>{};
    let didUnsubscribe = false;
    let lastThrownError = null;
    const checkForUpdates = ()=>{
        if (didUnsubscribe || !isMounted.current) {
            return;
        }
        const latestStoreState = store.getState();
        let newChildProps, error;
        try {
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
        } catch (e) {
            error = e;
            lastThrownError = e;
        }
        if (!error) {
            lastThrownError = null;
        }
        if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
                notifyNestedSubs();
            }
        } else {
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true;
            additionalSubscribeListener();
        }
    };
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    const unsubscribeWrapper = ()=>{
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
        if (lastThrownError) {
            throw lastThrownError;
        }
    };
    return unsubscribeWrapper;
}
function strictEqual(a, b) {
    return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    let { // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
    // @ts-ignore
    pure, areStatesEqual = strictEqual, areOwnPropsEqual = shallowEqual, areStatePropsEqual = shallowEqual, areMergedPropsEqual = shallowEqual, // use React's forwardRef to expose a ref of the wrapped component
    forwardRef = false, // the context consumer to use
    context = ReactReduxContext } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
            hasWarnedAboutDeprecatedPureOption = true;
            warning('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
        }
    }
    const Context = context;
    const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
    const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
    const initMergeProps = mergePropsFactory(mergeProps);
    const shouldHandleStateChanges = Boolean(mapStateToProps);
    const wrapWithConnect = (WrappedComponent)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
            if (!isValid) throw new Error("You must pass a component to the function returned by connect. Instead received ".concat(stringifyComponent(WrappedComponent)));
        }
        const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
        const displayName = "Connect(".concat(wrappedComponentName, ")");
        const selectorFactoryOptions = {
            shouldHandleStateChanges,
            displayName,
            wrappedComponentName,
            WrappedComponent,
            // @ts-ignore
            initMapStateToProps,
            initMapDispatchToProps,
            initMergeProps,
            areStatesEqual,
            areStatePropsEqual,
            areOwnPropsEqual,
            areMergedPropsEqual
        };
        function ConnectFunction(props) {
            const [propsContext, reactReduxForwardedRef, wrapperProps] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo": ()=>{
                    const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
                    return [
                        props.context,
                        reactReduxForwardedRef2,
                        wrapperProps2
                    ];
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo"], [
                props
            ]);
            const ContextToUse = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]": ()=>{
                    let ResultContext = Context;
                    if (propsContext === null || propsContext === void 0 ? void 0 : propsContext.Consumer) {
                        if ("TURBOPACK compile-time truthy", 1) {
                            const isValid = /* @__PURE__ */ isContextConsumer(// @ts-ignore
                            /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](propsContext.Consumer, null));
                            if (!isValid) {
                                throw new Error("You must pass a valid React context consumer as `props.context`");
                            }
                            ResultContext = propsContext;
                        }
                    }
                    return ResultContext;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]"], [
                propsContext,
                Context
            ]);
            const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ContextToUse);
            const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
            const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
            if (("TURBOPACK compile-time value", "development") !== "production" && !didStoreComeFromProps && !didStoreComeFromContext) {
                throw new Error('Could not find "store" in the context of "'.concat(displayName, '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ').concat(displayName, " in connect options."));
            }
            const store = didStoreComeFromProps ? props.store : contextValue.store;
            const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
            const childPropsSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]": ()=>{
                    return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]"], [
                store
            ]);
            const [subscription, notifyNestedSubs] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo": ()=>{
                    if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
                    const subscription2 = createSubscription(store, didStoreComeFromProps ? void 0 : contextValue.subscription);
                    const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
                    return [
                        subscription2,
                        notifyNestedSubs2
                    ];
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo"], [
                store,
                didStoreComeFromProps,
                contextValue
            ]);
            const overriddenContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]": ()=>{
                    if (didStoreComeFromProps) {
                        return contextValue;
                    }
                    return {
                        ...contextValue,
                        subscription
                    };
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]"], [
                didStoreComeFromProps,
                contextValue,
                subscription
            ]);
            const lastChildProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            const lastWrapperProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](wrapperProps);
            const childPropsFromStoreUpdate = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            const renderIsScheduled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
            const isMounted = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
            const latestSubscriptionCallbackError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            useIsomorphicLayoutEffect({
                "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                    isMounted.current = true;
                    return ({
                        "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                            isMounted.current = false;
                        }
                    })["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"];
                }
            }["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"], []);
            const actualChildPropsSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector]": ()=>{
                    const selector = {
                        "connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector].selector": ()=>{
                            if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
                                return childPropsFromStoreUpdate.current;
                            }
                            return childPropsSelector(store.getState(), wrapperProps);
                        }
                    }["connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector].selector"];
                    return selector;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector]"], [
                store,
                wrapperProps
            ]);
            const subscribeForReact = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact]": ()=>{
                    const subscribe = {
                        "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe": (reactListener)=>{
                            if (!subscription) {
                                return ({
                                    "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe": ()=>{}
                                })["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe"];
                            }
                            return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
                            childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
                        }
                    }["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe"];
                    return subscribe;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact]"], [
                subscription
            ]);
            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
                lastWrapperProps,
                lastChildProps,
                renderIsScheduled,
                wrapperProps,
                childPropsFromStoreUpdate,
                notifyNestedSubs
            ]);
            let actualChildProps;
            try {
                actualChildProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](// TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
                subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
                // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
                actualChildPropsSelector, getServerState ? ({
                    "connect.wrapWithConnect.ConnectFunction.useSyncExternalStore": ()=>childPropsSelector(getServerState(), wrapperProps)
                })["connect.wrapWithConnect.ConnectFunction.useSyncExternalStore"] : actualChildPropsSelector);
            } catch (err) {
                if (latestSubscriptionCallbackError.current) {
                    ;
                    err.message += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\n");
                }
                throw err;
            }
            useIsomorphicLayoutEffect({
                "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                    latestSubscriptionCallbackError.current = void 0;
                    childPropsFromStoreUpdate.current = void 0;
                    lastChildProps.current = actualChildProps;
                }
            }["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"]);
            const renderedWrappedComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]": ()=>{
                    return(// @ts-ignore
                    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](WrappedComponent, {
                        ...actualChildProps,
                        ref: reactReduxForwardedRef
                    }));
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]"], [
                reactReduxForwardedRef,
                WrappedComponent,
                actualChildProps
            ]);
            const renderedChild = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[renderedChild]": ()=>{
                    if (shouldHandleStateChanges) {
                        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ContextToUse.Provider, {
                            value: overriddenContextValue
                        }, renderedWrappedComponent);
                    }
                    return renderedWrappedComponent;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[renderedChild]"], [
                ContextToUse,
                renderedWrappedComponent,
                overriddenContextValue
            ]);
            return renderedChild;
        }
        const _Connect = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](ConnectFunction);
        const Connect = _Connect;
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = ConnectFunction.displayName = displayName;
        if (forwardRef) {
            const _forwarded = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function forwardConnectRef(props, ref) {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Connect, {
                    ...props,
                    reactReduxForwardedRef: ref
                });
            });
            const forwarded = _forwarded;
            forwarded.displayName = displayName;
            forwarded.WrappedComponent = WrappedComponent;
            return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
        }
        return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
    };
    return wrapWithConnect;
}
var connect_default = connect;
// src/components/Provider.tsx
function Provider(providerProps) {
    const { children, context, serverState, store } = providerProps;
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Provider.useMemo[contextValue]": ()=>{
            const subscription = createSubscription(store);
            const baseContextValue = {
                store,
                subscription,
                getServerState: serverState ? ({
                    "Provider.useMemo[contextValue]": ()=>serverState
                })["Provider.useMemo[contextValue]"] : void 0
            };
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                const { identityFunctionCheck = "once", stabilityCheck = "once" } = providerProps;
                return /* @__PURE__ */ Object.assign(baseContextValue, {
                    stabilityCheck,
                    identityFunctionCheck
                });
            }
        }
    }["Provider.useMemo[contextValue]"], [
        store,
        serverState
    ]);
    const previousState = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Provider.useMemo[previousState]": ()=>store.getState()
    }["Provider.useMemo[previousState]"], [
        store
    ]);
    useIsomorphicLayoutEffect({
        "Provider.useIsomorphicLayoutEffect": ()=>{
            const { subscription } = contextValue;
            subscription.onStateChange = subscription.notifyNestedSubs;
            subscription.trySubscribe();
            if (previousState !== store.getState()) {
                subscription.notifyNestedSubs();
            }
            return ({
                "Provider.useIsomorphicLayoutEffect": ()=>{
                    subscription.tryUnsubscribe();
                    subscription.onStateChange = void 0;
                }
            })["Provider.useIsomorphicLayoutEffect"];
        }
    }["Provider.useIsomorphicLayoutEffect"], [
        contextValue,
        previousState
    ]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Context.Provider, {
        value: contextValue
    }, children);
}
var Provider_default = Provider;
// src/hooks/useReduxContext.ts
function createReduxContextHook() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ReactReduxContext;
    return function useReduxContext2() {
        const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
        if (("TURBOPACK compile-time value", "development") !== "production" && !contextValue) {
            throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
        }
        return contextValue;
    };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
// src/hooks/useStore.ts
function createStoreHook() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ReactReduxContext;
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : // @ts-ignore
    createReduxContextHook(context);
    const useStore2 = ()=>{
        const { store } = useReduxContext2();
        return store;
    };
    Object.assign(useStore2, {
        withTypes: ()=>useStore2
    });
    return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();
// src/hooks/useDispatch.ts
function createDispatchHook() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ReactReduxContext;
    const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
    const useDispatch2 = ()=>{
        const store = useStore2();
        return store.dispatch;
    };
    Object.assign(useDispatch2, {
        withTypes: ()=>useDispatch2
    });
    return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();
;
var refEquality = (a, b)=>a === b;
function createSelectorHook() {
    let context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ReactReduxContext;
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
    const useSelector2 = function(selector) {
        let equalityFnOrOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? {
            equalityFn: equalityFnOrOptions
        } : equalityFnOrOptions;
        if ("TURBOPACK compile-time truthy", 1) {
            if (!selector) {
                throw new Error("You must pass a selector to useSelector");
            }
            if (typeof selector !== "function") {
                throw new Error("You must pass a function as a selector to useSelector");
            }
            if (typeof equalityFn !== "function") {
                throw new Error("You must pass a function as an equality function to useSelector");
            }
        }
        const reduxContext = useReduxContext2();
        const { store, subscription, getServerState } = reduxContext;
        const firstRun = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
        const wrappedSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            [selector.name] (state) {
                const selected = selector(state);
                if ("TURBOPACK compile-time truthy", 1) {
                    const { devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? {} : equalityFnOrOptions;
                    const { identityFunctionCheck, stabilityCheck } = reduxContext;
                    const { identityFunctionCheck: finalIdentityFunctionCheck, stabilityCheck: finalStabilityCheck } = {
                        stabilityCheck,
                        identityFunctionCheck,
                        ...devModeChecks
                    };
                    if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
                        const toCompare = selector(state);
                        if (!equalityFn(selected, toCompare)) {
                            let stack = void 0;
                            try {
                                throw new Error();
                            } catch (e) {
                                ;
                                ({ stack } = e);
                            }
                            console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
                                state,
                                selected,
                                selected2: toCompare,
                                stack
                            });
                        }
                    }
                    if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
                        if (selected === state) {
                            let stack = void 0;
                            try {
                                throw new Error();
                            } catch (e) {
                                ;
                                ({ stack } = e);
                            }
                            console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.", {
                                stack
                            });
                        }
                    }
                    if (firstRun.current) firstRun.current = false;
                }
                return selected;
            }
        }[selector.name], [
            selector
        ]);
        const selectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"](selectedState);
        return selectedState;
    };
    Object.assign(useSelector2, {
        withTypes: ()=>useSelector2
    });
    return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();
// src/exports.ts
var batch = defaultNoopBatch;
;
 //# sourceMappingURL=react-redux.mjs.map
}),
"[project]/Documents/CourseDemy/front-end/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Documents/CourseDemy/front-end/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/env.ts
__turbopack_context__.s([
    "Immer",
    ()=>Immer2,
    "applyPatches",
    ()=>applyPatches,
    "castDraft",
    ()=>castDraft,
    "castImmutable",
    ()=>castImmutable,
    "createDraft",
    ()=>createDraft,
    "current",
    ()=>current,
    "enableMapSet",
    ()=>enableMapSet,
    "enablePatches",
    ()=>enablePatches,
    "finishDraft",
    ()=>finishDraft,
    "freeze",
    ()=>freeze,
    "immerable",
    ()=>DRAFTABLE,
    "isDraft",
    ()=>isDraft,
    "isDraftable",
    ()=>isDraftable,
    "nothing",
    ()=>NOTHING,
    "original",
    ()=>original,
    "produce",
    ()=>produce,
    "produceWithPatches",
    ()=>produceWithPatches,
    "setAutoFreeze",
    ()=>setAutoFreeze,
    "setUseStrictShallowCopy",
    ()=>setUseStrictShallowCopy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
// src/utils/errors.ts
var errors = ("TURBOPACK compile-time truthy", 1) ? [
    // All error codes, starting by 0:
    function(plugin) {
        return "The plugin for '".concat(plugin, "' has not been loaded into Immer. To enable the plugin, import and call `enable").concat(plugin, "()` when initializing your application.");
    },
    function(thing) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '".concat(thing, "'");
    },
    "This object has been frozen and should not be mutated",
    function(data) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
        return "'current' expects a draft, got: ".concat(thing);
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
        return "'original' expects a draft, got: ".concat(thing);
    }
] : "TURBOPACK unreachable";
function die(error) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const e = errors[error];
        const msg = typeof e === "function" ? e.apply(null, args) : e;
        throw new Error("[Immer] ".concat(msg));
    }
    throw new Error("[Immer] minified error nr: ".concat(error, ". Full error at: https://bit.ly/3cXEKWf"));
}
// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
    var _value_constructor;
    if (!value) return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_value_constructor = value.constructor) === null || _value_constructor === void 0 ? void 0 : _value_constructor[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
    if (!value || typeof value !== "object") return false;
    const proto = getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object) return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
    if (!isDraft(value)) die(15, value);
    return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
    if (getArchtype(obj) === 0 /* Object */ ) {
        Reflect.ownKeys(obj).forEach((key)=>{
            iter(key, obj[key], obj);
        });
    } else {
        obj.forEach((entry, index)=>iter(index, entry, obj));
    }
}
function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */  : isMap(thing) ? 2 /* Map */  : isSet(thing) ? 3 /* Set */  : 0 /* Object */ ;
}
function has(thing, prop) {
    return getArchtype(thing) === 2 /* Map */  ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
    return getArchtype(thing) === 2 /* Map */  ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2 /* Map */ ) thing.set(propOrOldValue, value);
    else if (t === 3 /* Set */ ) {
        thing.add(value);
    } else thing[propOrOldValue] = value;
}
function is(x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function isMap(target) {
    return target instanceof Map;
}
function isSet(target) {
    return target instanceof Set;
}
function latest(state) {
    return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
    if (isMap(base)) {
        return new Map(base);
    }
    if (isSet(base)) {
        return new Set(base);
    }
    if (Array.isArray(base)) return Array.prototype.slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
        const descriptors = Object.getOwnPropertyDescriptors(base);
        delete descriptors[DRAFT_STATE];
        let keys = Reflect.ownKeys(descriptors);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const desc = descriptors[key];
            if (desc.writable === false) {
                desc.writable = true;
                desc.configurable = true;
            }
            if (desc.get || desc.set) descriptors[key] = {
                configurable: true,
                writable: true,
                // could live with !!desc.set as well here...
                enumerable: desc.enumerable,
                value: base[key]
            };
        }
        return Object.create(getPrototypeOf(base), descriptors);
    } else {
        const proto = getPrototypeOf(base);
        if (proto !== null && isPlain) {
            return {
                ...base
            };
        }
        const obj = Object.create(proto);
        return Object.assign(obj, base);
    }
}
function freeze(obj) {
    let deep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) {
        Object.defineProperties(obj, {
            set: {
                value: dontMutateFrozenCollections
            },
            add: {
                value: dontMutateFrozenCollections
            },
            clear: {
                value: dontMutateFrozenCollections
            },
            delete: {
                value: dontMutateFrozenCollections
            }
        });
    }
    Object.freeze(obj);
    if (deep) Object.values(obj).forEach((value)=>freeze(value, true));
    return obj;
}
function dontMutateFrozenCollections() {
    die(2);
}
function isFrozen(obj) {
    return Object.isFrozen(obj);
}
// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
        die(0, pluginKey);
    }
    return plugin;
}
function loadPlugin(pluginKey, implementation) {
    if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}
// src/core/scope.ts
var currentScope;
function getCurrentScope() {
    return currentScope;
}
function createScope(parent_, immer_) {
    return {
        drafts_: [],
        parent_,
        immer_,
        // Whenever the modified draft contains a draft from another scope, we
        // need to prevent auto-freezing so the unowned draft can be finalized.
        canAutoFreeze_: true,
        unfinalizedDrafts_: 0
    };
}
function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
        getPlugin("Patches");
        scope.patches_ = [];
        scope.inversePatches_ = [];
        scope.patchListener_ = patchListener;
    }
}
function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
}
function leaveScope(scope) {
    if (scope === currentScope) {
        currentScope = scope.parent_;
    }
}
function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 /* Object */  || state.type_ === 1 /* Array */ ) state.revoke_();
    else state.revoked_ = true;
}
// src/core/finalize.ts
function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
        if (baseDraft[DRAFT_STATE].modified_) {
            revokeScope(scope);
            die(4);
        }
        if (isDraftable(result)) {
            result = finalize(scope, result);
            if (!scope.parent_) maybeFreeze(scope, result);
        }
        if (scope.patches_) {
            getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
        }
    } else {
        result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
        scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
    if (isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    if (!state) {
        each(value, (key, childValue)=>finalizeProperty(rootScope, state, value, key, childValue, path));
        return value;
    }
    if (state.scope_ !== rootScope) return value;
    if (!state.modified_) {
        maybeFreeze(rootScope, state.base_, true);
        return state.base_;
    }
    if (!state.finalized_) {
        state.finalized_ = true;
        state.scope_.unfinalizedDrafts_--;
        const result = state.copy_;
        let resultEach = result;
        let isSet2 = false;
        if (state.type_ === 3 /* Set */ ) {
            resultEach = new Set(result);
            result.clear();
            isSet2 = true;
        }
        each(resultEach, (key, childValue)=>finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
        maybeFreeze(rootScope, result, false);
        if (path && rootScope.patches_) {
            getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
        }
    }
    return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (("TURBOPACK compile-time value", "development") !== "production" && childValue === targetObject) die(5);
    if (isDraft(childValue)) {
        const path = rootPath && parentState && parentState.type_ !== 3 /* Set */  && // Set objects are atomic since they have no keys.
        !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
        const res = finalize(rootScope, childValue, path);
        set(targetObject, prop, res);
        if (isDraft(res)) {
            rootScope.canAutoFreeze_ = false;
        } else return;
    } else if (targetIsSet) {
        targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
        if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
            return;
        }
        finalize(rootScope, childValue);
        if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop))) maybeFreeze(rootScope, childValue);
    }
}
function maybeFreeze(scope, value) {
    let deep = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
        freeze(value, deep);
    }
}
// src/core/proxy.ts
function createProxyProxy(base, parent) {
    const isArray = Array.isArray(base);
    const state = {
        type_: isArray ? 1 /* Array */  : 0 /* Object */ ,
        // Track which produce call this is associated with.
        scope_: parent ? parent.scope_ : getCurrentScope(),
        // True for both shallow and deep changes.
        modified_: false,
        // Used during finalization.
        finalized_: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned_: {},
        // The parent draft state.
        parent_: parent,
        // The base state.
        base_: base,
        // The base proxy.
        draft_: null,
        // set below
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray) {
        target = [
            state
        ];
        traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
}
var objectTraps = {
    get (state, prop) {
        if (prop === DRAFT_STATE) return state;
        const source = latest(state);
        if (!has(source, prop)) {
            return readPropFromProto(state, source, prop);
        }
        const value = source[prop];
        if (state.finalized_ || !isDraftable(value)) {
            return value;
        }
        if (value === peek(state.base_, prop)) {
            prepareCopy(state);
            return state.copy_[prop] = createProxy(value, state);
        }
        return value;
    },
    has (state, prop) {
        return prop in latest(state);
    },
    ownKeys (state) {
        return Reflect.ownKeys(latest(state));
    },
    set (state, prop, value) {
        const desc = getDescriptorFromProto(latest(state), prop);
        if (desc === null || desc === void 0 ? void 0 : desc.set) {
            desc.set.call(state.draft_, value);
            return true;
        }
        if (!state.modified_) {
            const current2 = peek(latest(state), prop);
            const currentState = current2 === null || current2 === void 0 ? void 0 : current2[DRAFT_STATE];
            if (currentState && currentState.base_ === value) {
                state.copy_[prop] = value;
                state.assigned_[prop] = false;
                return true;
            }
            if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
            prepareCopy(state);
            markChanged(state);
        }
        if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
        (value !== void 0 || prop in state.copy_) || // special case: NaN
        Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
        state.copy_[prop] = value;
        state.assigned_[prop] = true;
        return true;
    },
    deleteProperty (state, prop) {
        if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
            state.assigned_[prop] = false;
            prepareCopy(state);
            markChanged(state);
        } else {
            delete state.assigned_[prop];
        }
        if (state.copy_) {
            delete state.copy_[prop];
        }
        return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor (state, prop) {
        const owner = latest(state);
        const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
        if (!desc) return desc;
        return {
            writable: true,
            configurable: state.type_ !== 1 /* Array */  || prop !== "length",
            enumerable: desc.enumerable,
            value: owner[prop]
        };
    },
    defineProperty () {
        die(11);
    },
    getPrototypeOf (state) {
        return getPrototypeOf(state.base_);
    },
    setPrototypeOf () {
        die(12);
    }
};
var arrayTraps = {};
each(objectTraps, (key, fn)=>{
    arrayTraps[key] = function() {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function(state, prop) {
    if (("TURBOPACK compile-time value", "development") !== "production" && isNaN(parseInt(prop))) die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
    if (("TURBOPACK compile-time value", "development") !== "production" && prop !== "length" && isNaN(parseInt(prop))) die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
}
function readPropFromProto(state, source, prop) {
    var // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    _desc_get;
    const desc = getDescriptorFromProto(source, prop);
    return desc ? "value" in desc ? desc.value : (_desc_get = desc.get) === null || _desc_get === void 0 ? void 0 : _desc_get.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    let proto = getPrototypeOf(source);
    while(proto){
        const desc = Object.getOwnPropertyDescriptor(proto, prop);
        if (desc) return desc;
        proto = getPrototypeOf(proto);
    }
    return void 0;
}
function markChanged(state) {
    if (!state.modified_) {
        state.modified_ = true;
        if (state.parent_) {
            markChanged(state.parent_);
        }
    }
}
function prepareCopy(state) {
    if (!state.copy_) {
        state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
    }
}
// src/core/immerClass.ts
var Immer2 = class {
    createDraft(base) {
        if (!isDraftable(base)) die(8);
        if (isDraft(base)) base = current(base);
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        proxy[DRAFT_STATE].isManual_ = true;
        leaveScope(scope);
        return proxy;
    }
    finishDraft(draft, patchListener) {
        const state = draft && draft[DRAFT_STATE];
        if (!state || !state.isManual_) die(9);
        const { scope_: scope } = state;
        usePatchesInScope(scope, patchListener);
        return processResult(void 0, scope);
    }
    /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */ setAutoFreeze(value) {
        this.autoFreeze_ = value;
    }
    /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */ setUseStrictShallowCopy(value) {
        this.useStrictShallowCopy_ = value;
    }
    applyPatches(base, patches) {
        let i;
        for(i = patches.length - 1; i >= 0; i--){
            const patch = patches[i];
            if (patch.path.length === 0 && patch.op === "replace") {
                base = patch.value;
                break;
            }
        }
        if (i > -1) {
            patches = patches.slice(i + 1);
        }
        const applyPatchesImpl = getPlugin("Patches").applyPatches_;
        if (isDraft(base)) {
            return applyPatchesImpl(base, patches);
        }
        return this.produce(base, (draft)=>applyPatchesImpl(draft, patches));
    }
    constructor(config){
        this.autoFreeze_ = true;
        this.useStrictShallowCopy_ = false;
        /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */ this.produce = (base, recipe, patchListener)=>{
            if (typeof base === "function" && typeof recipe !== "function") {
                const defaultBase = recipe;
                recipe = base;
                const self = this;
                return function curriedProduce() {
                    let base2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultBase;
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    return self.produce(base2, (draft)=>recipe.call(this, draft, ...args));
                };
            }
            if (typeof recipe !== "function") die(6);
            if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
            let result;
            if (isDraftable(base)) {
                const scope = enterScope(this);
                const proxy = createProxy(base, void 0);
                let hasError = true;
                try {
                    result = recipe(proxy);
                    hasError = false;
                } finally{
                    if (hasError) revokeScope(scope);
                    else leaveScope(scope);
                }
                usePatchesInScope(scope, patchListener);
                return processResult(result, scope);
            } else if (!base || typeof base !== "object") {
                result = recipe(base);
                if (result === void 0) result = base;
                if (result === NOTHING) result = void 0;
                if (this.autoFreeze_) freeze(result, true);
                if (patchListener) {
                    const p = [];
                    const ip = [];
                    getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
                    patchListener(p, ip);
                }
                return result;
            } else die(1, base);
        };
        this.produceWithPatches = (base, recipe)=>{
            if (typeof base === "function") {
                var _this = this;
                return function(state) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    return _this.produceWithPatches(state, (draft)=>base(draft, ...args));
                };
            }
            let patches, inversePatches;
            const result = this.produce(base, recipe, (p, ip)=>{
                patches = p;
                inversePatches = ip;
            });
            return [
                result,
                patches,
                inversePatches
            ];
        };
        if (typeof (config === null || config === void 0 ? void 0 : config.autoFreeze) === "boolean") this.setAutoFreeze(config.autoFreeze);
        if (typeof (config === null || config === void 0 ? void 0 : config.useStrictShallowCopy) === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    }
};
function createProxy(value, parent) {
    const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
}
// src/core/current.ts
function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
}
function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    let copy;
    if (state) {
        if (!state.modified_) return state.base_;
        state.finalized_ = true;
        copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    } else {
        copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue)=>{
        set(copy, key, currentImpl(childValue));
    });
    if (state) {
        state.finalized_ = false;
    }
    return copy;
}
// src/plugins/patches.ts
function enablePatches() {
    const errorOffset = 16;
    if ("TURBOPACK compile-time truthy", 1) {
        errors.push('Sets cannot have "replace" patches.', function(op) {
            return "Unsupported patch operation: " + op;
        }, function(path) {
            return "Cannot apply patch, path doesn't resolve: " + path;
        }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
    }
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";
    function generatePatches_(state, basePath, patches, inversePatches) {
        switch(state.type_){
            case 0 /* Object */ :
            case 2 /* Map */ :
                return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
            case 1 /* Array */ :
                return generateArrayPatches(state, basePath, patches, inversePatches);
            case 3 /* Set */ :
                return generateSetPatches(state, basePath, patches, inversePatches);
        }
    }
    function generateArrayPatches(state, basePath, patches, inversePatches) {
        let { base_, assigned_ } = state;
        let copy_ = state.copy_;
        if (copy_.length < base_.length) {
            ;
            [base_, copy_] = [
                copy_,
                base_
            ];
            [patches, inversePatches] = [
                inversePatches,
                patches
            ];
        }
        for(let i = 0; i < base_.length; i++){
            if (assigned_[i] && copy_[i] !== base_[i]) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REPLACE,
                    path,
                    // Need to maybe clone it, as it can in fact be the original value
                    // due to the base/copy inversion at the start of this function
                    value: clonePatchValueIfNeeded(copy_[i])
                });
                inversePatches.push({
                    op: REPLACE,
                    path,
                    value: clonePatchValueIfNeeded(base_[i])
                });
            }
        }
        for(let i = base_.length; i < copy_.length; i++){
            const path = basePath.concat([
                i
            ]);
            patches.push({
                op: ADD,
                path,
                // Need to maybe clone it, as it can in fact be the original value
                // due to the base/copy inversion at the start of this function
                value: clonePatchValueIfNeeded(copy_[i])
            });
        }
        for(let i = copy_.length - 1; base_.length <= i; --i){
            const path = basePath.concat([
                i
            ]);
            inversePatches.push({
                op: REMOVE,
                path
            });
        }
    }
    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
        const { base_, copy_ } = state;
        each(state.assigned_, (key, assignedValue)=>{
            const origValue = get(base_, key);
            const value = get(copy_, key);
            const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
            if (origValue === value && op === REPLACE) return;
            const path = basePath.concat(key);
            patches.push(op === REMOVE ? {
                op,
                path
            } : {
                op,
                path,
                value
            });
            inversePatches.push(op === ADD ? {
                op: REMOVE,
                path
            } : op === REMOVE ? {
                op: ADD,
                path,
                value: clonePatchValueIfNeeded(origValue)
            } : {
                op: REPLACE,
                path,
                value: clonePatchValueIfNeeded(origValue)
            });
        });
    }
    function generateSetPatches(state, basePath, patches, inversePatches) {
        let { base_, copy_ } = state;
        let i = 0;
        base_.forEach((value)=>{
            if (!copy_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REMOVE,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: ADD,
                    path,
                    value
                });
            }
            i++;
        });
        i = 0;
        copy_.forEach((value)=>{
            if (!base_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: ADD,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: REMOVE,
                    path,
                    value
                });
            }
            i++;
        });
    }
    function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
        patches.push({
            op: REPLACE,
            path: [],
            value: replacement === NOTHING ? void 0 : replacement
        });
        inversePatches.push({
            op: REPLACE,
            path: [],
            value: baseValue
        });
    }
    function applyPatches_(draft, patches) {
        patches.forEach((patch)=>{
            const { path, op } = patch;
            let base = draft;
            for(let i = 0; i < path.length - 1; i++){
                const parentType = getArchtype(base);
                let p = path[i];
                if (typeof p !== "string" && typeof p !== "number") {
                    p = "" + p;
                }
                if ((parentType === 0 /* Object */  || parentType === 1 /* Array */ ) && (p === "__proto__" || p === "constructor")) die(errorOffset + 3);
                if (typeof base === "function" && p === "prototype") die(errorOffset + 3);
                base = get(base, p);
                if (typeof base !== "object") die(errorOffset + 2, path.join("/"));
            }
            const type = getArchtype(base);
            const value = deepClonePatchValue(patch.value);
            const key = path[path.length - 1];
            switch(op){
                case REPLACE:
                    switch(type){
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            die(errorOffset);
                        default:
                            return base[key] = value;
                    }
                case ADD:
                    switch(type){
                        case 1 /* Array */ :
                            return key === "-" ? base.push(value) : base.splice(key, 0, value);
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            return base.add(value);
                        default:
                            return base[key] = value;
                    }
                case REMOVE:
                    switch(type){
                        case 1 /* Array */ :
                            return base.splice(key, 1);
                        case 2 /* Map */ :
                            return base.delete(key);
                        case 3 /* Set */ :
                            return base.delete(patch.value);
                        default:
                            return delete base[key];
                    }
                default:
                    die(errorOffset + 1, op);
            }
        });
        return draft;
    }
    function deepClonePatchValue(obj) {
        if (!isDraftable(obj)) return obj;
        if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
        if (isMap(obj)) return new Map(Array.from(obj.entries()).map((param)=>{
            let [k, v] = param;
            return [
                k,
                deepClonePatchValue(v)
            ];
        }));
        if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
        const cloned = Object.create(getPrototypeOf(obj));
        for(const key in obj)cloned[key] = deepClonePatchValue(obj[key]);
        if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
        return cloned;
    }
    function clonePatchValueIfNeeded(obj) {
        if (isDraft(obj)) {
            return deepClonePatchValue(obj);
        } else return obj;
    }
    loadPlugin("Patches", {
        applyPatches_,
        generatePatches_,
        generateReplacementPatches_
    });
}
// src/plugins/mapset.ts
function enableMapSet() {
    class DraftMap extends Map {
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(key) {
            return latest(this[DRAFT_STATE]).has(key);
        }
        set(key, value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!latest(state).has(key) || latest(state).get(key) !== value) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_.set(key, true);
                state.copy_.set(key, value);
                state.assigned_.set(key, true);
            }
            return this;
        }
        delete(key) {
            if (!this.has(key)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareMapCopy(state);
            markChanged(state);
            if (state.base_.has(key)) {
                state.assigned_.set(key, false);
            } else {
                state.assigned_.delete(key);
            }
            state.copy_.delete(key);
            return true;
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_ = /* @__PURE__ */ new Map();
                each(state.base_, (key)=>{
                    state.assigned_.set(key, false);
                });
                state.copy_.clear();
            }
        }
        forEach(cb, thisArg) {
            const state = this[DRAFT_STATE];
            latest(state).forEach((_value, key, _map)=>{
                cb.call(thisArg, this.get(key), key, this);
            });
        }
        get(key) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            const value = latest(state).get(key);
            if (state.finalized_ || !isDraftable(value)) {
                return value;
            }
            if (value !== state.base_.get(key)) {
                return value;
            }
            const draft = createProxy(value, state);
            prepareMapCopy(state);
            state.copy_.set(key, draft);
            return draft;
        }
        keys() {
            return latest(this[DRAFT_STATE]).keys();
        }
        values() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.values(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value
                    };
                }
            };
        }
        entries() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.entries(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value: [
                            r.value,
                            value
                        ]
                    };
                }
            };
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.entries();
        }
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 2 /* Map */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                assigned_: void 0,
                base_: target,
                draft_: this,
                isManual_: false,
                revoked_: false
            };
        }
    }
    function proxyMap_(target, parent) {
        return new DraftMap(target, parent);
    }
    function prepareMapCopy(state) {
        if (!state.copy_) {
            state.assigned_ = /* @__PURE__ */ new Map();
            state.copy_ = new Map(state.base_);
        }
    }
    class DraftSet extends Set {
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!state.copy_) {
                return state.base_.has(value);
            }
            if (state.copy_.has(value)) return true;
            if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
            return false;
        }
        add(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!this.has(value)) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.add(value);
            }
            return this;
        }
        delete(value) {
            if (!this.has(value)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            markChanged(state);
            return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : /* istanbul ignore next */ false);
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.clear();
            }
        }
        values() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.values();
        }
        entries() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.entries();
        }
        keys() {
            return this.values();
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.values();
        }
        forEach(cb, thisArg) {
            const iterator = this.values();
            let result = iterator.next();
            while(!result.done){
                cb.call(thisArg, result.value, result.value, this);
                result = iterator.next();
            }
        }
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 3 /* Set */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                base_: target,
                draft_: this,
                drafts_: /* @__PURE__ */ new Map(),
                revoked_: false,
                isManual_: false
            };
        }
    }
    function proxySet_(target, parent) {
        return new DraftSet(target, parent);
    }
    function prepareSetCopy(state) {
        if (!state.copy_) {
            state.copy_ = /* @__PURE__ */ new Set();
            state.base_.forEach((value)=>{
                if (isDraftable(value)) {
                    const draft = createProxy(value, state);
                    state.drafts_.set(value, draft);
                    state.copy_.add(draft);
                } else {
                    state.copy_.add(value);
                }
            });
        }
    }
    function assertUnrevoked(state) {
        if (state.revoked_) die(3, JSON.stringify(latest(state)));
    }
    loadPlugin("MapSet", {
        proxyMap_,
        proxySet_
    });
}
// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */ immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
function castDraft(value) {
    return value;
}
function castImmutable(value) {
    return value;
}
;
 //# sourceMappingURL=immer.mjs.map
}),
"[project]/Documents/CourseDemy/front-end/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/devModeChecks/identityFunctionCheck.ts
__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorCreator",
    ()=>createSelectorCreator,
    "createStructuredSelector",
    ()=>createStructuredSelector,
    "lruMemoize",
    ()=>lruMemoize,
    "referenceEqualityCheck",
    ()=>referenceEqualityCheck,
    "setGlobalDevModeChecks",
    ()=>setGlobalDevModeChecks,
    "unstable_autotrackMemoize",
    ()=>autotrackMemoize,
    "weakMapMemoize",
    ()=>weakMapMemoize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult)=>{
    if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
        let isInputSameAsOutput = false;
        try {
            const emptyObject = {};
            if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true;
        } catch (e) {}
        if (isInputSameAsOutput) {
            let stack = void 0;
            try {
                throw new Error();
            } catch (e) {
                ;
                ({ stack } = e);
            }
            console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", {
                stack
            });
        }
    }
};
// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs)=>{
    const { memoize, memoizeOptions } = options;
    const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
    const createAnEmptyObject = memoize(()=>({}), ...memoizeOptions);
    const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
    if (!areInputSelectorResultsEqual) {
        let stack = void 0;
        try {
            throw new Error();
        } catch (e) {
            ;
            ({ stack } = e);
        }
        console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
            arguments: inputSelectorArgs,
            firstInputs: inputSelectorResults,
            secondInputs: inputSelectorResultsCopy,
            stack
        });
    }
};
// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks)=>{
    Object.assign(globalDevModeChecks, devModeChecks);
};
// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func) {
    let errorMessage = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "expected a function, instead received ".concat(typeof func);
    if (typeof func !== "function") {
        throw new TypeError(errorMessage);
    }
}
function assertIsObject(object) {
    let errorMessage = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "expected an object, instead received ".concat(typeof object);
    if (typeof object !== "object") {
        throw new TypeError(errorMessage);
    }
}
function assertIsArrayOfFunctions(array) {
    let errorMessage = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "expected all items to be functions, instead received the following types: ";
    if (!array.every((item)=>typeof item === "function")) {
        const itemTypes = array.map((item)=>typeof item === "function" ? "function ".concat(item.name || "unnamed", "()") : typeof item).join(", ");
        throw new TypeError("".concat(errorMessage, "[").concat(itemTypes, "]"));
    }
}
var ensureIsArray = (item)=>{
    return Array.isArray(item) ? item : [
        item
    ];
};
function getDependencies(createSelectorArgs) {
    const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
    assertIsArrayOfFunctions(dependencies, "createSelector expects all input-selectors to be functions, but received the following types: ");
    return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
    const inputSelectorResults = [];
    const { length } = dependencies;
    for(let i = 0; i < length; i++){
        inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
    }
    return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks)=>{
    const { identityFunctionCheck, inputStabilityCheck } = {
        ...globalDevModeChecks,
        ...devModeChecks
    };
    return {
        identityFunctionCheck: {
            shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
            run: runIdentityFunctionCheck
        },
        inputStabilityCheck: {
            shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
            run: runInputStabilityCheck
        }
    };
};
// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
    // Whenever a storage value is read, it'll add itself to the current tracker if
    // one exists, entangling its state with that cache.
    get value() {
        CURRENT_TRACKER === null || CURRENT_TRACKER === void 0 ? void 0 : CURRENT_TRACKER.add(this);
        return this._value;
    }
    // Whenever a storage value is updated, we bump the global revision clock,
    // assign the revision for this storage to the new value, _and_ we schedule a
    // rerender. This is important, and it's what makes autotracking  _pull_
    // based. We don't actively tell the caches which depend on the storage that
    // anything has happened. Instead, we recompute the caches when needed.
    set value(newValue) {
        if (this.value === newValue) return;
        this._value = newValue;
        this.revision = ++$REVISION;
    }
    constructor(initialValue, isEqual = tripleEq){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "revision", $REVISION);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_value", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_lastValue", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isEqual", tripleEq);
        this._value = this._lastValue = initialValue;
        this._isEqual = isEqual;
    }
};
function tripleEq(a, b) {
    return a === b;
}
var TrackingCache = class {
    clear() {
        this._cachedValue = void 0;
        this._cachedRevision = -1;
        this._deps = [];
        this.hits = 0;
    }
    get value() {
        if (this.revision > this._cachedRevision) {
            const { fn } = this;
            const currentTracker = /* @__PURE__ */ new Set();
            const prevTracker = CURRENT_TRACKER;
            CURRENT_TRACKER = currentTracker;
            this._cachedValue = fn();
            CURRENT_TRACKER = prevTracker;
            this.hits++;
            this._deps = Array.from(currentTracker);
            this._cachedRevision = this.revision;
        }
        CURRENT_TRACKER === null || CURRENT_TRACKER === void 0 ? void 0 : CURRENT_TRACKER.add(this);
        return this._cachedValue;
    }
    get revision() {
        return Math.max(...this._deps.map((d)=>d.revision), 0);
    }
    constructor(fn){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_cachedValue", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_cachedRevision", -1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_deps", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hits", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "fn", void 0);
        this.fn = fn;
    }
};
function getValue(cell) {
    if (!(cell instanceof Cell)) {
        console.warn("Not a valid cell! ", cell);
    }
    return cell.value;
}
function setValue(storage, value) {
    if (!(storage instanceof Cell)) {
        throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");
    }
    storage.value = storage._lastValue = value;
}
function createCell(initialValue) {
    let isEqual = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tripleEq;
    return new Cell(initialValue, isEqual);
}
function createCache(fn) {
    assertIsFunction(fn, "the first parameter to `createCache` must be a function");
    return new TrackingCache(fn);
}
// src/autotrackMemoize/tracking.ts
var neverEq = (a, b)=>false;
function createTag() {
    return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
    setValue(tag, value);
}
var consumeCollection = (node)=>{
    let tag = node.collectionTag;
    if (tag === null) {
        tag = node.collectionTag = createTag();
    }
    getValue(tag);
};
var dirtyCollection = (node)=>{
    const tag = node.collectionTag;
    if (tag !== null) {
        dirtyTag(tag, null);
    }
};
// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
    constructor(value){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "proxy", new Proxy(this, objectProxyHandler));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "tag", createTag());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "tags", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "children", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "collectionTag", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", nextId++);
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
};
var objectProxyHandler = {
    get (node, key) {
        function calculateResult() {
            const { value } = node;
            const childValue = Reflect.get(value, key);
            if (typeof key === "symbol") {
                return childValue;
            }
            if (key in proto) {
                return childValue;
            }
            if (typeof childValue === "object" && childValue !== null) {
                let childNode = node.children[key];
                if (childNode === void 0) {
                    childNode = node.children[key] = createNode(childValue);
                }
                if (childNode.tag) {
                    getValue(childNode.tag);
                }
                return childNode.proxy;
            } else {
                let tag = node.tags[key];
                if (tag === void 0) {
                    tag = node.tags[key] = createTag();
                    tag.value = childValue;
                }
                getValue(tag);
                return childValue;
            }
        }
        const res = calculateResult();
        return res;
    },
    ownKeys (node) {
        consumeCollection(node);
        return Reflect.ownKeys(node.value);
    },
    getOwnPropertyDescriptor (node, prop) {
        return Reflect.getOwnPropertyDescriptor(node.value, prop);
    },
    has (node, prop) {
        return Reflect.has(node.value, prop);
    }
};
var ArrayTreeNode = class {
    constructor(value){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "proxy", new Proxy([
            this
        ], arrayProxyHandler));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "tag", createTag());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "tags", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "children", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "collectionTag", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "id", nextId++);
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
};
var arrayProxyHandler = {
    get (param, key) {
        let [node] = param;
        if (key === "length") {
            consumeCollection(node);
        }
        return objectProxyHandler.get(node, key);
    },
    ownKeys (param) {
        let [node] = param;
        return objectProxyHandler.ownKeys(node);
    },
    getOwnPropertyDescriptor (param, prop) {
        let [node] = param;
        return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
    },
    has (param, prop) {
        let [node] = param;
        return objectProxyHandler.has(node, prop);
    }
};
function createNode(value) {
    if (Array.isArray(value)) {
        return new ArrayTreeNode(value);
    }
    return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
    const { value, tags, children } = node;
    node.value = newValue;
    if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
        dirtyCollection(node);
    } else {
        if (value !== newValue) {
            let oldKeysSize = 0;
            let newKeysSize = 0;
            let anyKeysAdded = false;
            for(const _key in value){
                oldKeysSize++;
            }
            for(const key in newValue){
                newKeysSize++;
                if (!(key in value)) {
                    anyKeysAdded = true;
                    break;
                }
            }
            const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
            if (isDifferent) {
                dirtyCollection(node);
            }
        }
    }
    for(const key in tags){
        const childValue = value[key];
        const newChildValue = newValue[key];
        if (childValue !== newChildValue) {
            dirtyCollection(node);
            dirtyTag(tags[key], newChildValue);
        }
        if (typeof newChildValue === "object" && newChildValue !== null) {
            delete tags[key];
        }
    }
    for(const key in children){
        const childNode = children[key];
        const newChildValue = newValue[key];
        const childValue = childNode.value;
        if (childValue === newChildValue) {
            continue;
        } else if (typeof newChildValue === "object" && newChildValue !== null) {
            updateNode(childNode, newChildValue);
        } else {
            deleteNode(childNode);
            delete children[key];
        }
    }
}
function deleteNode(node) {
    if (node.tag) {
        dirtyTag(node.tag, null);
    }
    dirtyCollection(node);
    for(const key in node.tags){
        dirtyTag(node.tags[key], null);
    }
    for(const key in node.children){
        deleteNode(node.children[key]);
    }
}
// src/lruMemoize.ts
function createSingletonCache(equals) {
    let entry;
    return {
        get (key) {
            if (entry && equals(entry.key, key)) {
                return entry.value;
            }
            return NOT_FOUND;
        },
        put (key, value) {
            entry = {
                key,
                value
            };
        },
        getEntries () {
            return entry ? [
                entry
            ] : [];
        },
        clear () {
            entry = void 0;
        }
    };
}
function createLruCache(maxSize, equals) {
    let entries = [];
    function get(key) {
        const cacheIndex = entries.findIndex((entry)=>equals(key, entry.key));
        if (cacheIndex > -1) {
            const entry = entries[cacheIndex];
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
            }
            return entry.value;
        }
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            entries.unshift({
                key,
                value
            });
            if (entries.length > maxSize) {
                entries.pop();
            }
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get,
        put,
        getEntries,
        clear
    };
}
var referenceEqualityCheck = (a, b)=>a === b;
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        const { length } = prev;
        for(let i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) {
                return false;
            }
        }
        return true;
    };
}
function lruMemoize(func, equalityCheckOrOptions) {
    const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    const { equalityCheck = referenceEqualityCheck, maxSize = 1, resultEqualityCheck } = providedOptions;
    const comparator = createCacheKeyComparator(equalityCheck);
    let resultsCount = 0;
    const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
        let value = cache.get(arguments);
        if (value === NOT_FOUND) {
            value = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const entries = cache.getEntries();
                const matchingEntry = entries.find((entry)=>resultEqualityCheck(entry.value, value));
                if (matchingEntry) {
                    value = matchingEntry.value;
                    resultsCount !== 0 && resultsCount--;
                }
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = ()=>{
        cache.clear();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
    const node = createNode([]);
    let lastArgs = null;
    const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
    const cache = createCache(()=>{
        const res = func.apply(null, node.proxy);
        return res;
    });
    function memoized() {
        if (!shallowEqual(lastArgs, arguments)) {
            updateNode(node, arguments);
            lastArgs = arguments;
        }
        return cache.value;
    }
    memoized.clearCache = ()=>{
        return cache.clear();
    };
    return memoized;
}
// src/weakMapMemoize.ts
var StrongRef = class {
    deref() {
        return this.value;
    }
    constructor(value){
        this.value = value;
    }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
    return {
        s: UNTERMINATED,
        v: void 0,
        o: null,
        p: null
    };
}
function weakMapMemoize(func) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let fnNode = createCacheNode();
    const { resultEqualityCheck } = options;
    let lastResult;
    let resultsCount = 0;
    function memoized() {
        let cacheNode = fnNode;
        const { length } = arguments;
        for(let i = 0, l = length; i < l; i++){
            const arg = arguments[i];
            if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
                let objectCache = cacheNode.o;
                if (objectCache === null) {
                    cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
                }
                const objectNode = objectCache.get(arg);
                if (objectNode === void 0) {
                    cacheNode = createCacheNode();
                    objectCache.set(arg, cacheNode);
                } else {
                    cacheNode = objectNode;
                }
            } else {
                let primitiveCache = cacheNode.p;
                if (primitiveCache === null) {
                    cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
                }
                const primitiveNode = primitiveCache.get(arg);
                if (primitiveNode === void 0) {
                    cacheNode = createCacheNode();
                    primitiveCache.set(arg, cacheNode);
                } else {
                    cacheNode = primitiveNode;
                }
            }
        }
        const terminatedNode = cacheNode;
        let result;
        if (cacheNode.s === TERMINATED) {
            result = cacheNode.v;
        } else {
            result = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                var _lastResult_deref;
                var _lastResult_deref1;
                const lastResultValue = (_lastResult_deref1 = lastResult === null || lastResult === void 0 ? void 0 : (_lastResult_deref = lastResult.deref) === null || _lastResult_deref === void 0 ? void 0 : _lastResult_deref.call(lastResult)) !== null && _lastResult_deref1 !== void 0 ? _lastResult_deref1 : lastResult;
                if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
                    result = lastResultValue;
                    resultsCount !== 0 && resultsCount--;
                }
                const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
                lastResult = needsWeakRef ? new Ref(result) : result;
            }
        }
        terminatedNode.s = TERMINATED;
        terminatedNode.v = result;
        return result;
    }
    memoized.clearCache = ()=>{
        fnNode = createCacheNode();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions) {
    for(var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        memoizeOptionsFromArgs[_key - 1] = arguments[_key];
    }
    const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
        memoize: memoizeOrOptions,
        memoizeOptions: memoizeOptionsFromArgs
    } : memoizeOrOptions;
    const createSelector2 = function() {
        for(var _len = arguments.length, createSelectorArgs = new Array(_len), _key = 0; _key < _len; _key++){
            createSelectorArgs[_key] = arguments[_key];
        }
        let recomputations = 0;
        let dependencyRecomputations = 0;
        let lastResult;
        let directlyPassedOptions = {};
        let resultFunc = createSelectorArgs.pop();
        if (typeof resultFunc === "object") {
            directlyPassedOptions = resultFunc;
            resultFunc = createSelectorArgs.pop();
        }
        assertIsFunction(resultFunc, "createSelector expects an output function after the inputs, but received: [".concat(typeof resultFunc, "]"));
        const combinedOptions = {
            ...createSelectorCreatorOptions,
            ...directlyPassedOptions
        };
        const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = combinedOptions;
        const finalMemoizeOptions = ensureIsArray(memoizeOptions);
        const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
        const dependencies = getDependencies(createSelectorArgs);
        const memoizedResultFunc = memoize(function recomputationWrapper() {
            recomputations++;
            return resultFunc.apply(null, arguments);
        }, ...finalMemoizeOptions);
        let firstRun = true;
        const selector = argsMemoize(function dependenciesChecker() {
            dependencyRecomputations++;
            const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
            lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
            if ("TURBOPACK compile-time truthy", 1) {
                const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
                if (identityFunctionCheck.shouldRun) {
                    identityFunctionCheck.run(resultFunc, inputSelectorResults, lastResult);
                }
                if (inputStabilityCheck.shouldRun) {
                    const inputSelectorResultsCopy = collectInputSelectorResults(dependencies, arguments);
                    inputStabilityCheck.run({
                        inputSelectorResults,
                        inputSelectorResultsCopy
                    }, {
                        memoize,
                        memoizeOptions: finalMemoizeOptions
                    }, arguments);
                }
                if (firstRun) firstRun = false;
            }
            return lastResult;
        }, ...finalArgsMemoizeOptions);
        return Object.assign(selector, {
            resultFunc,
            memoizedResultFunc,
            dependencies,
            dependencyRecomputations: ()=>dependencyRecomputations,
            resetDependencyRecomputations: ()=>{
                dependencyRecomputations = 0;
            },
            lastResult: ()=>lastResult,
            recomputations: ()=>recomputations,
            resetRecomputations: ()=>{
                recomputations = 0;
            },
            memoize,
            argsMemoize
        });
    };
    Object.assign(createSelector2, {
        withTypes: ()=>createSelector2
    });
    return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign(function(inputSelectorsObject) {
    let selectorCreator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : createSelector;
    assertIsObject(inputSelectorsObject, "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof inputSelectorsObject));
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map((key)=>inputSelectorsObject[key]);
    const structuredSelector = selectorCreator(dependencies, function() {
        for(var _len = arguments.length, inputSelectorResults = new Array(_len), _key = 0; _key < _len; _key++){
            inputSelectorResults[_key] = arguments[_key];
        }
        return inputSelectorResults.reduce((composition, value, index)=>{
            composition[inputSelectorKeys[index]] = value;
            return composition;
        }, {});
    });
    return structuredSelector;
}, {
    withTypes: ()=>createStructuredSelector
});
;
 //# sourceMappingURL=reselect.mjs.map
}),
"[project]/Documents/CourseDemy/front-end/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/formatProdErrorMessage.ts
__turbopack_context__.s([
    "__DO_NOT_USE__ActionTypes",
    ()=>actionTypes_default,
    "applyMiddleware",
    ()=>applyMiddleware,
    "bindActionCreators",
    ()=>bindActionCreators,
    "combineReducers",
    ()=>combineReducers,
    "compose",
    ()=>compose,
    "createStore",
    ()=>createStore,
    "isAction",
    ()=>isAction,
    "isPlainObject",
    ()=>isPlainObject,
    "legacy_createStore",
    ()=>legacy_createStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function formatProdErrorMessage(code) {
    return "Minified Redux error #".concat(code, "; visit https://redux.js.org/Errors?code=").concat(code, " for the full message or use the non-minified dev environment for full errors. ");
}
// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (()=>typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
// src/utils/actionTypes.ts
var randomString = ()=>Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
    INIT: "@@redux/INIT".concat(/* @__PURE__ */ randomString()),
    REPLACE: "@@redux/REPLACE".concat(/* @__PURE__ */ randomString()),
    PROBE_UNKNOWN_ACTION: ()=>"@@redux/PROBE_UNKNOWN_ACTION".concat(randomString())
};
var actionTypes_default = ActionTypes;
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
// src/utils/kindOf.ts
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    const type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            {
                return type;
            }
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    const constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    let typeOfVal = typeof val;
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the root reducer to be a function. Instead, received: '".concat(kindOf(reducer), "'"));
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the enhancer to be a function. Instead, received: '".concat(kindOf(enhancer), "'"));
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = /* @__PURE__ */ new Map();
            currentListeners.forEach((listener, key)=>{
                nextListeners.set(key, listener);
            });
        }
    }
    function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        }
        return currentState;
    }
    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the listener to be a function. Instead, received: '".concat(kindOf(listener), "'"));
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        const listenerId = listenerIdCounter++;
        nextListeners.set(listenerId, listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            nextListeners.delete(listenerId);
            currentListeners = null;
        };
    }
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Actions must be plain objects. Instead, the actual type was: '".concat(kindOf(action), "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples."));
        }
        if (typeof action.type === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (typeof action.type !== "string") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Action "type" property must be a string. Instead, the actual type was: \''.concat(kindOf(action.type), "'. Value was: '").concat(action.type, "' (stringified)"));
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Reducers may not dispatch actions.");
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const listeners = currentListeners = nextListeners;
        listeners.forEach((listener)=>{
            listener();
        });
        return action;
    }
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the nextReducer to be a function. Instead, received: '".concat(kindOf(nextReducer)));
        }
        currentReducer = nextReducer;
        dispatch({
            type: actionTypes_default.REPLACE
        });
    }
    function observable() {
        const outerSubscribe = subscribe;
        return {
            /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe (observer) {
                if (typeof observer !== "object" || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Expected the observer to be an object. Instead, received: '".concat(kindOf(observer), "'"));
                }
                function observeState() {
                    const observerAsObserver = observer;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState());
                    }
                }
                observeState();
                const unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe
                };
            },
            [symbol_observable_default] () {
                return this;
            }
        };
    }
    dispatch({
        type: actionTypes_default.INIT
    });
    const store = {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [symbol_observable_default]: observable
    };
    return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
    return createStore(reducer, preloadedState, enhancer);
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    const reducerKeys = Object.keys(reducers);
    const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
        return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject(inputState)) {
        return "The ".concat(argumentName, ' has unexpected type of "').concat(kindOf(inputState), '". Expected argument to be an object with the following keys: "').concat(reducerKeys.join('", "'), '"');
    }
    const unexpectedKeys = Object.keys(inputState).filter((key)=>!reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
    unexpectedKeys.forEach((key)=>{
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === actionTypes_default.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return "Unexpected ".concat(unexpectedKeys.length > 1 ? "keys" : "key", ' "').concat(unexpectedKeys.join('", "'), '" found in ').concat(argumentName, '. Expected to find one of the known reducer keys instead: "').concat(reducerKeys.join('", "'), '". Unexpected keys will be ignored.');
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key)=>{
        const reducer = reducers[key];
        const initialState = reducer(void 0, {
            type: actionTypes_default.INIT
        });
        if (typeof initialState === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'The slice reducer for key "'.concat(key, "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."));
        }
        if (typeof reducer(void 0, {
            type: actionTypes_default.PROBE_UNKNOWN_ACTION()
        }) === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'The slice reducer for key "'.concat(key, "\" returned undefined when probed with a random type. Don't try to handle '").concat(actionTypes_default.INIT, '\' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'));
        }
    });
}
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for(let i = 0; i < reducerKeys.length; i++){
        const key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === "undefined") {
                warning('No reducer provided for key "'.concat(key, '"'));
            }
        }
        if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== "production") {
        unexpectedKeyCache = {};
    }
    let shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination() {
        let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        let hasChanged = false;
        const nextState = {};
        for(let i = 0; i < finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                const actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "When called with an action of type ".concat(actionType ? '"'.concat(String(actionType), '"') : "(unknown type)", ', the slice reducer for key "').concat(key, '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'));
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return dispatch(actionCreator.apply(this, args));
    };
}
function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== "object" || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "bindActionCreators expected an object or a function, but instead received: '".concat(kindOf(actionCreators), '\'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'));
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
// src/compose.ts
function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++){
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return (arg)=>arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b)=>function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return a(b(...args));
        });
}
// src/applyMiddleware.ts
function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
        middlewares[_key] = arguments[_key];
    }
    return (createStore2)=>(reducer, preloadedState)=>{
            const store = createStore2(reducer, preloadedState);
            let dispatch = ()=>{
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: function(action) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    return dispatch(action, ...args);
                }
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}
// src/utils/isAction.ts
function isAction(action) {
    return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
;
 //# sourceMappingURL=redux.mjs.map
}),
"[project]/Documents/CourseDemy/front-end/node_modules/redux-thunk/dist/redux-thunk.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "thunk",
    ()=>thunk,
    "withExtraArgument",
    ()=>withExtraArgument
]);
function createThunkMiddleware(extraArgument) {
    const middleware = (param)=>{
        let { dispatch, getState } = param;
        return (next)=>(action)=>{
                if (typeof action === "function") {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
    };
    return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
;
}),
"[project]/Documents/CourseDemy/front-end/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "ReducerType",
    ()=>ReducerType,
    "SHOULD_AUTOBATCH",
    ()=>SHOULD_AUTOBATCH,
    "TaskAbortError",
    ()=>TaskAbortError,
    "Tuple",
    ()=>Tuple,
    "addListener",
    ()=>addListener,
    "asyncThunkCreator",
    ()=>asyncThunkCreator,
    "autoBatchEnhancer",
    ()=>autoBatchEnhancer,
    "buildCreateSlice",
    ()=>buildCreateSlice,
    "clearAllListeners",
    ()=>clearAllListeners,
    "combineSlices",
    ()=>combineSlices,
    "configureStore",
    ()=>configureStore,
    "createAction",
    ()=>createAction,
    "createActionCreatorInvariantMiddleware",
    ()=>createActionCreatorInvariantMiddleware,
    "createAsyncThunk",
    ()=>createAsyncThunk,
    "createDraftSafeSelector",
    ()=>createDraftSafeSelector,
    "createDraftSafeSelectorCreator",
    ()=>createDraftSafeSelectorCreator,
    "createDynamicMiddleware",
    ()=>createDynamicMiddleware,
    "createEntityAdapter",
    ()=>createEntityAdapter,
    "createImmutableStateInvariantMiddleware",
    ()=>createImmutableStateInvariantMiddleware,
    "createListenerMiddleware",
    ()=>createListenerMiddleware,
    "createReducer",
    ()=>createReducer,
    "createSerializableStateInvariantMiddleware",
    ()=>createSerializableStateInvariantMiddleware,
    "createSlice",
    ()=>createSlice,
    "findNonSerializableValue",
    ()=>findNonSerializableValue,
    "formatProdErrorMessage",
    ()=>formatProdErrorMessage,
    "isActionCreator",
    ()=>isActionCreator,
    "isAllOf",
    ()=>isAllOf,
    "isAnyOf",
    ()=>isAnyOf,
    "isAsyncThunkAction",
    ()=>isAsyncThunkAction,
    "isFluxStandardAction",
    ()=>isFSA,
    "isFulfilled",
    ()=>isFulfilled,
    "isImmutableDefault",
    ()=>isImmutableDefault,
    "isPending",
    ()=>isPending,
    "isPlain",
    ()=>isPlain,
    "isRejected",
    ()=>isRejected,
    "isRejectedWithValue",
    ()=>isRejectedWithValue,
    "miniSerializeError",
    ()=>miniSerializeError,
    "nanoid",
    ()=>nanoid,
    "prepareAutoBatched",
    ()=>prepareAutoBatched,
    "removeListener",
    ()=>removeListener,
    "unwrapResult",
    ()=>unwrapResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
// src/configureStore.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
// src/getDefaultMiddleware.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/redux-thunk/dist/redux-thunk.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var createDraftSafeSelectorCreator = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const createSelector2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorCreator"])(...args);
    const createDraftSafeSelector2 = Object.assign(function() {
        for(var _len = arguments.length, args2 = new Array(_len), _key = 0; _key < _len; _key++){
            args2[_key] = arguments[_key];
        }
        const selector = createSelector2(...args2);
        const wrappedSelector = function(value) {
            for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                rest[_key - 1] = arguments[_key];
            }
            return selector((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["current"])(value) : value, ...rest);
        };
        Object.assign(wrappedSelector, selector);
        return wrappedSelector;
    }, {
        withTypes: ()=>createDraftSafeSelector2
    });
    return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ createDraftSafeSelectorCreator(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weakMapMemoize"]);
;
;
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"].apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
    return function(noop3) {
        return noop3;
    };
};
;
;
// src/tsHelpers.ts
var hasMatchFunction = (v)=>{
    return v && typeof v.match === "function";
};
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (prepareAction) {
            let prepared = prepareAction(...args);
            if (!prepared) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "prepareAction did not return an object");
            }
            return {
                type,
                payload: prepared.payload,
                ..."meta" in prepared && {
                    meta: prepared.meta
                },
                ..."error" in prepared && {
                    error: prepared.error
                }
            };
        }
        return {
            type,
            payload: args[0]
        };
    }
    actionCreator.toString = ()=>"".concat(type);
    actionCreator.type = type;
    actionCreator.match = (action)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action) && action.type === type;
    return actionCreator;
}
function isActionCreator(action) {
    return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
    hasMatchFunction(action);
}
function isFSA(action) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return [
        "type",
        "payload",
        "error",
        "meta"
    ].indexOf(key) > -1;
}
// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
    const splitType = type ? "".concat(type).split("/") : [];
    const actionName = splitType[splitType.length - 1] || "actionCreator";
    return 'Detected an action creator with type "'.concat(type || "unknown", "\" being dispatched. \nMake sure you're calling the action creator before dispatching, i.e. `dispatch(").concat(actionName, "())` instead of `dispatch(").concat(actionName, ")`. This is necessary even if the action has no payload.");
}
function createActionCreatorInvariantMiddleware() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { isActionCreator: isActionCreator2 = isActionCreator } = options;
    return ()=>(next)=>(action)=>{
                if (isActionCreator2(action)) {
                    console.warn(getMessage(action.type));
                }
                return next(action);
            };
}
;
function getTimeMeasureUtils(maxDelay, fnName) {
    let elapsed = 0;
    return {
        measureTime (fn) {
            const started = Date.now();
            try {
                return fn();
            } finally{
                const finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded () {
            if (elapsed > maxDelay) {
                console.warn("".concat(fnName, " took ").concat(elapsed, "ms, which is more than the warning threshold of ").concat(maxDelay, "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that."));
            }
        }
    };
}
var Tuple = class _Tuple extends Array {
    static get [Symbol.species]() {
        return _Tuple;
    }
    concat() {
        for(var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++){
            arr[_key] = arguments[_key];
        }
        return super.concat.apply(this, arr);
    }
    prepend() {
        for(var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++){
            arr[_key] = arguments[_key];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new _Tuple(...arr[0].concat(this));
        }
        return new _Tuple(...arr.concat(this));
    }
    constructor(...items){
        super(...items);
        Object.setPrototypeOf(this, _Tuple.prototype);
    }
};
function freezeDraftable(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftable"])(val) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"])(val, ()=>{}) : val;
}
function getOrInsertComputed(map, key, compute) {
    if (map.has(key)) return map.get(key);
    return map.set(key, compute(key)).get(key);
}
// src/immutableStateInvariantMiddleware.ts
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable) {
    let ignorePaths = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], obj = arguments.length > 2 ? arguments[2] : void 0, path = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", checkedObjects = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : /* @__PURE__ */ new Set();
    const tracked = {
        value: obj
    };
    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
        checkedObjects.add(obj);
        tracked.children = {};
        for(const key in obj){
            const childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable) {
    let ignoredPaths = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], trackedProperty = arguments.length > 2 ? arguments[2] : void 0, obj = arguments.length > 3 ? arguments[3] : void 0, sameParentRef = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, path = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "";
    const prevObj = trackedProperty ? trackedProperty.value : void 0;
    const sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return {
            wasMutated: true,
            path
        };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return {
            wasMutated: false
        };
    }
    const keysToDetect = {};
    for(let key in trackedProperty.children){
        keysToDetect[key] = true;
    }
    for(let key in obj){
        keysToDetect[key] = true;
    }
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for(let key in keysToDetect){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return {
        wasMutated: false
    };
}
function createImmutableStateInvariantMiddleware() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        let stringify2 = function(obj, serializer, indent, decycler) {
            return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
        }, getSerialize2 = function(serializer, decycler) {
            let stack = [], keys = [];
            if (!decycler) decycler = function(_, value) {
                if (stack[0] === value) return "[Circular ~]";
                return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            };
            return function(key, value) {
                if (stack.length > 0) {
                    var thisPos = stack.indexOf(this);
                    ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                    ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                    if (~stack.indexOf(value)) value = decycler.call(this, key, value);
                } else stack.push(value);
                return serializer == null ? value : serializer.call(this, key, value);
            };
        };
        var stringify = stringify2, getSerialize = getSerialize2;
        let { isImmutable = isImmutableDefault, ignoredPaths, warnAfter = 32 } = options;
        const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
        return (param)=>{
            let { getState } = param;
            let state = getState();
            let tracker = track(state);
            let result;
            return (next)=>(action)=>{
                    const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "A state mutation was detected between dispatches, in the path '".concat(result.path || "", "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)"));
                        }
                    });
                    const dispatchedAction = next(action);
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "A state mutation was detected inside a dispatch, in the path: ".concat(result.path || "", ". Take a look at the reducer(s) handling the action ").concat(stringify2(action), ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)"));
                        }
                    });
                    measureUtils.warnIfExceeded();
                    return dispatchedAction;
                };
        };
    }
}
;
function isPlain(val) {
    const type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(val);
}
function findNonSerializableValue(value) {
    let path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", isSerializable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : isPlain, getEntries = arguments.length > 3 ? arguments[3] : void 0, ignoredPaths = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], cache = arguments.length > 5 ? arguments[5] : void 0;
    let foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache === null || cache === void 0 ? void 0 : cache.has(value)) return false;
    const entries = getEntries != null ? getEntries(value) : Object.entries(value);
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (const [key, nestedValue] of entries){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    if (cache && isNestedFrozen(value)) cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value)) return false;
    for (const nestedValue of Object.values(value)){
        if (typeof nestedValue !== "object" || nestedValue === null) continue;
        if (!isNestedFrozen(nestedValue)) return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const { isSerializable = isPlain, getEntries, ignoredActions = [], ignoredActionPaths = [
            "meta.arg",
            "meta.baseQueryMeta"
        ], ignoredPaths = [], warnAfter = 32, ignoreState = false, ignoreActions = false, disableCache = false } = options;
        const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
        return (storeAPI)=>(next)=>(action)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                        return next(action);
                    }
                    const result = next(action);
                    const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
                    if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
                        measureUtils.measureTime(()=>{
                            const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                            if (foundActionNonSerializableValue) {
                                const { keyPath, value } = foundActionNonSerializableValue;
                                console.error("A non-serializable value was detected in an action, in the path: `".concat(keyPath, "`. Value:"), value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                            }
                        });
                    }
                    if (!ignoreState) {
                        measureUtils.measureTime(()=>{
                            const state = storeAPI.getState();
                            const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                            if (foundStateNonSerializableValue) {
                                const { keyPath, value } = foundStateNonSerializableValue;
                                console.error("A non-serializable value was detected in the state, in the path: `".concat(keyPath, "`. Value:"), value, "\nTake a look at the reducer(s) handling this action type: ".concat(action.type, ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)"));
                            }
                        });
                        measureUtils.warnIfExceeded();
                    }
                    return result;
                };
    }
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
var buildGetDefaultMiddleware = ()=>function getDefaultMiddleware(options) {
        const { thunk = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options !== null && options !== void 0 ? options : {};
        let middlewareArray = new Tuple();
        if (thunk) {
            if (isBoolean(thunk)) {
                middlewareArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thunk"]);
            } else {
                middlewareArray.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withExtraArgument"])(thunk.extraArgument));
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (immutableCheck) {
                let immutableOptions = {};
                if (!isBoolean(immutableCheck)) {
                    immutableOptions = immutableCheck;
                }
                middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
            }
            if (serializableCheck) {
                let serializableOptions = {};
                if (!isBoolean(serializableCheck)) {
                    serializableOptions = serializableCheck;
                }
                middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
            }
            if (actionCreatorCheck) {
                let actionCreatorOptions = {};
                if (!isBoolean(actionCreatorCheck)) {
                    actionCreatorOptions = actionCreatorCheck;
                }
                middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
            }
        }
        return middlewareArray;
    };
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = ()=>(payload)=>({
            payload,
            meta: {
                [SHOULD_AUTOBATCH]: true
            }
        });
var createQueueWithTimer = (timeout)=>{
    return (notify)=>{
        setTimeout(notify, timeout);
    };
};
var autoBatchEnhancer = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        type: "raf"
    };
    return (next)=>function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const store = next(...args);
            let notifying = true;
            let shouldNotifyAtEndOfTick = false;
            let notificationQueued = false;
            const listeners = /* @__PURE__ */ new Set();
            const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
            typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
            const notifyListeners = ()=>{
                notificationQueued = false;
                if (shouldNotifyAtEndOfTick) {
                    shouldNotifyAtEndOfTick = false;
                    listeners.forEach((l)=>l());
                }
            };
            return Object.assign({}, store, {
                // Override the base `store.subscribe` method to keep original listeners
                // from running if we're delaying notifications
                subscribe (listener2) {
                    const wrappedListener = ()=>notifying && listener2();
                    const unsubscribe = store.subscribe(wrappedListener);
                    listeners.add(listener2);
                    return ()=>{
                        unsubscribe();
                        listeners.delete(listener2);
                    };
                },
                // Override the base `store.dispatch` method so that we can check actions
                // for the `shouldAutoBatch` flag and determine if batching is active
                dispatch (action) {
                    try {
                        var _action_meta;
                        notifying = !(action === null || action === void 0 ? void 0 : (_action_meta = action.meta) === null || _action_meta === void 0 ? void 0 : _action_meta[SHOULD_AUTOBATCH]);
                        shouldNotifyAtEndOfTick = !notifying;
                        if (shouldNotifyAtEndOfTick) {
                            if (!notificationQueued) {
                                notificationQueued = true;
                                queueCallback(notifyListeners);
                            }
                        }
                        return store.dispatch(action);
                    } finally{
                        notifying = true;
                    }
                }
            });
        };
};
// src/getDefaultEnhancers.ts
var buildGetDefaultEnhancers = (middlewareEnhancer)=>function getDefaultEnhancers(options) {
        const { autoBatch = true } = options !== null && options !== void 0 ? options : {};
        let enhancerArray = new Tuple(middlewareEnhancer);
        if (autoBatch) {
            enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
        }
        return enhancerArray;
    };
// src/configureStore.ts
function configureStore(options) {
    const getDefaultMiddleware = buildGetDefaultMiddleware();
    const { reducer = void 0, middleware, devTools = true, duplicateMiddlewareCheck = true, preloadedState = void 0, enhancers = void 0 } = options || {};
    let rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(reducer)) {
        rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])(reducer);
    } else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && middleware && typeof middleware !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`middleware` field must be a callback");
    }
    let finalMiddleware;
    if (typeof middleware === "function") {
        finalMiddleware = middleware(getDefaultMiddleware);
        if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(finalMiddleware)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "when using a middleware builder function, an array of middleware must be returned");
        }
    } else {
        finalMiddleware = getDefaultMiddleware();
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "each middleware provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && duplicateMiddlewareCheck) {
        let middlewareReferences = /* @__PURE__ */ new Set();
        finalMiddleware.forEach((middleware2)=>{
            if (middlewareReferences.has(middleware2)) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
            }
            middlewareReferences.add(middleware2);
        });
    }
    let finalCompose = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"];
    if (devTools) {
        finalCompose = composeWithDevTools({
            // Enable capture of stack traces for dispatched Redux actions
            trace: ("TURBOPACK compile-time value", "development") !== "production",
            ...typeof devTools === "object" && devTools
        });
    }
    const middlewareEnhancer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyMiddleware"])(...finalMiddleware);
    const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
    if (("TURBOPACK compile-time value", "development") !== "production" && enhancers && typeof enhancers !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`enhancers` field must be a callback");
    }
    let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
    if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(storeEnhancers)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`enhancers` callback must return an array");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && storeEnhancers.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "each enhancer provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
        console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
    }
    const composedEnhancer = finalCompose(...storeEnhancers);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}
;
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
        addCase (typeOrActionCreator, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (actionMatchers.length > 0) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (!type) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` cannot be called with an empty action type");
            }
            if (type in actionsMap) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` cannot be called with two reducers for the same action type '".concat(type, "'"));
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addAsyncThunk (asyncThunk, reducers) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
                }
            }
            if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
            if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
            if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
            if (reducers.settled) actionMatchers.push({
                matcher: asyncThunk.settled,
                reducer: reducers.settled
            });
            return builder;
        },
        addMatcher (matcher, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({
                matcher,
                reducer
            });
            return builder;
        },
        addDefaultCase (reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [
        actionsMap,
        actionMatchers,
        defaultCaseReducer
    ];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof mapOrBuilderCallback === "object") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
        }
    }
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
    let getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = ()=>freezeDraftable(initialState());
    } else {
        const frozenInitialState = freezeDraftable(initialState);
        getInitialState = ()=>frozenInitialState;
    }
    function reducer() {
        let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getInitialState(), action = arguments.length > 1 ? arguments[1] : void 0;
        let caseReducers = [
            actionsMap[action.type],
            ...finalActionMatchers.filter((param)=>{
                let { matcher } = param;
                return matcher(action);
            }).map((param)=>{
                let { reducer: reducer2 } = param;
                return reducer2;
            })
        ];
        if (caseReducers.filter((cr)=>!!cr).length === 0) {
            caseReducers = [
                finalDefaultCaseReducer
            ];
        }
        return caseReducers.reduce((previousState, caseReducer)=>{
            if (caseReducer) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(previousState)) {
                    const draft = previousState;
                    const result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftable"])(previousState)) {
                    const result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                } else {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"])(previousState, (draft)=>{
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/matchers.ts
var matches = (matcher, action)=>{
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    } else {
        return matcher(action);
    }
};
function isAnyOf() {
    for(var _len = arguments.length, matchers = new Array(_len), _key = 0; _key < _len; _key++){
        matchers[_key] = arguments[_key];
    }
    return (action)=>{
        return matchers.some((matcher)=>matches(matcher, action));
    };
}
function isAllOf() {
    for(var _len = arguments.length, matchers = new Array(_len), _key = 0; _key < _len; _key++){
        matchers[_key] = arguments[_key];
    }
    return (action)=>{
        return matchers.every((matcher)=>matches(matcher, action));
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta) return false;
    const hasValidRequestId = typeof action.meta.requestId === "string";
    const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    for(var _len = arguments.length, asyncThunks = new Array(_len), _key = 0; _key < _len; _key++){
        asyncThunks[_key] = arguments[_key];
    }
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.pending));
}
function isRejected() {
    for(var _len = arguments.length, asyncThunks = new Array(_len), _key = 0; _key < _len; _key++){
        asyncThunks[_key] = arguments[_key];
    }
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.rejected));
}
function isRejectedWithValue() {
    for(var _len = arguments.length, asyncThunks = new Array(_len), _key = 0; _key < _len; _key++){
        asyncThunks[_key] = arguments[_key];
    }
    const hasFlag = (action)=>{
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return isAllOf(isRejected(...asyncThunks), hasFlag);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled() {
    for(var _len = arguments.length, asyncThunks = new Array(_len), _key = 0; _key < _len; _key++){
        asyncThunks[_key] = arguments[_key];
    }
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "fulfilled"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.fulfilled));
}
function isAsyncThunkAction() {
    for(var _len = arguments.length, asyncThunks = new Array(_len), _key = 0; _key < _len; _key++){
        asyncThunks[_key] = arguments[_key];
    }
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending",
                "fulfilled",
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.flatMap((asyncThunk)=>[
            asyncThunk.pending,
            asyncThunk.rejected,
            asyncThunk.fulfilled
        ]));
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function() {
    let size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
    let id = "";
    let i = size;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = class {
    constructor(payload, meta){
        /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_type", void 0);
        this.payload = payload;
        this.meta = meta;
    }
};
var FulfillWithMeta = class {
    constructor(payload, meta){
        /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_type", void 0);
        this.payload = payload;
        this.meta = meta;
    }
};
var miniSerializeError = (value)=>{
    if (typeof value === "object" && value !== null) {
        const simpleError = {};
        for (const property of commonProperties){
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return {
        message: String(value)
    };
};
var externalAbortMessage = "External signal was aborted";
var createAsyncThunk = /* @__PURE__ */ (()=>{
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta)=>({
                payload,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "fulfilled"
                }
            }));
        const pending = createAction(typePrefix + "/pending", (requestId, arg, meta)=>({
                payload: void 0,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "pending"
                }
            }));
        const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta)=>({
                payload,
                error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    rejectedWithValue: !!payload,
                    requestStatus: "rejected",
                    aborted: (error === null || error === void 0 ? void 0 : error.name) === "AbortError",
                    condition: (error === null || error === void 0 ? void 0 : error.name) === "ConditionError"
                }
            }));
        function actionCreator(arg) {
            let { signal } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return (dispatch, getState, extra)=>{
                const requestId = (options === null || options === void 0 ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                const abortController = new AbortController();
                let abortHandler;
                let abortReason;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                if (signal) {
                    if (signal.aborted) {
                        abort(externalAbortMessage);
                    } else {
                        signal.addEventListener("abort", ()=>abort(externalAbortMessage), {
                            once: true
                        });
                    }
                }
                const promise = async function() {
                    let finalAction;
                    try {
                        var _options_condition, _options_getPendingMeta;
                        let conditionResult = options === null || options === void 0 ? void 0 : (_options_condition = options.condition) === null || _options_condition === void 0 ? void 0 : _options_condition.call(options, arg, {
                            getState,
                            extra
                        });
                        if (isThenable(conditionResult)) {
                            conditionResult = await conditionResult;
                        }
                        if (conditionResult === false || abortController.signal.aborted) {
                            throw {
                                name: "ConditionError",
                                message: "Aborted due to condition callback returning false."
                            };
                        }
                        const abortedPromise = new Promise((_, reject)=>{
                            abortHandler = ()=>{
                                reject({
                                    name: "AbortError",
                                    message: abortReason || "Aborted"
                                });
                            };
                            abortController.signal.addEventListener("abort", abortHandler);
                        });
                        dispatch(pending(requestId, arg, options === null || options === void 0 ? void 0 : (_options_getPendingMeta = options.getPendingMeta) === null || _options_getPendingMeta === void 0 ? void 0 : _options_getPendingMeta.call(options, {
                            requestId,
                            arg
                        }, {
                            getState,
                            extra
                        })));
                        finalAction = await Promise.race([
                            abortedPromise,
                            Promise.resolve(payloadCreator(arg, {
                                dispatch,
                                getState,
                                extra,
                                requestId,
                                signal: abortController.signal,
                                abort,
                                rejectWithValue: (value, meta)=>{
                                    return new RejectWithValue(value, meta);
                                },
                                fulfillWithValue: (value, meta)=>{
                                    return new FulfillWithMeta(value, meta);
                                }
                            })).then((result)=>{
                                if (result instanceof RejectWithValue) {
                                    throw result;
                                }
                                if (result instanceof FulfillWithMeta) {
                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                }
                                return fulfilled(result, requestId, arg);
                            })
                        ]);
                    } catch (err) {
                        finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                    } finally{
                        if (abortHandler) {
                            abortController.signal.removeEventListener("abort", abortHandler);
                        }
                    }
                    const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                    if (!skipDispatch) {
                        dispatch(finalAction);
                    }
                    return finalAction;
                }();
                return Object.assign(promise, {
                    abort,
                    requestId,
                    arg,
                    unwrap () {
                        return promise.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending,
            rejected,
            fulfilled,
            settled: isAnyOf(rejected, fulfilled),
            typePrefix
        });
    }
    createAsyncThunk2.withTypes = ()=>createAsyncThunk2;
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/createSlice.ts
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
    [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2)=>{
    ReducerType2["reducer"] = "reducer";
    ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
    ReducerType2["asyncThunk"] = "asyncThunk";
    return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
    return "".concat(slice, "/").concat(actionKey);
}
function buildCreateSlice() {
    let { creators } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _creators_asyncThunk;
    const cAT = creators === null || creators === void 0 ? void 0 : (_creators_asyncThunk = creators.asyncThunk) === null || _creators_asyncThunk === void 0 ? void 0 : _creators_asyncThunk[asyncThunkSymbol];
    return function createSlice2(options) {
        const { name, reducerPath = name } = options;
        if (!name) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`name` is a required option for createSlice");
        }
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if (options.initialState === void 0) {
                console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
            }
        }
        const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
        const reducerNames = Object.keys(reducers);
        const context = {
            sliceCaseReducersByName: {},
            sliceCaseReducersByType: {},
            actionCreators: {},
            sliceMatchers: []
        };
        const contextMethods = {
            addCase (typeOrActionCreator, reducer2) {
                const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                if (!type) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`context.addCase` cannot be called with an empty action type");
                }
                if (type in context.sliceCaseReducersByType) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
                }
                context.sliceCaseReducersByType[type] = reducer2;
                return contextMethods;
            },
            addMatcher (matcher, reducer2) {
                context.sliceMatchers.push({
                    matcher,
                    reducer: reducer2
                });
                return contextMethods;
            },
            exposeAction (name2, actionCreator) {
                context.actionCreators[name2] = actionCreator;
                return contextMethods;
            },
            exposeCaseReducer (name2, reducer2) {
                context.sliceCaseReducersByName[name2] = reducer2;
                return contextMethods;
            }
        };
        reducerNames.forEach((reducerName)=>{
            const reducerDefinition = reducers[reducerName];
            const reducerDetails = {
                reducerName,
                type: getType(name, reducerName),
                createNotation: typeof options.reducers === "function"
            };
            if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
                handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
            } else {
                handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
            }
        });
        function buildReducer() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (typeof options.extraReducers === "object") {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
            const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [
                options.extraReducers
            ];
            const finalCaseReducers = {
                ...extraReducers,
                ...context.sliceCaseReducersByType
            };
            return createReducer(options.initialState, (builder)=>{
                for(let key in finalCaseReducers){
                    builder.addCase(key, finalCaseReducers[key]);
                }
                for (let sM of context.sliceMatchers){
                    builder.addMatcher(sM.matcher, sM.reducer);
                }
                for (let m of actionMatchers){
                    builder.addMatcher(m.matcher, m.reducer);
                }
                if (defaultCaseReducer) {
                    builder.addDefaultCase(defaultCaseReducer);
                }
            });
        }
        const selectSelf = (state)=>state;
        const injectedSelectorCache = /* @__PURE__ */ new Map();
        const injectedStateCache = /* @__PURE__ */ new WeakMap();
        let _reducer;
        function reducer(state, action) {
            if (!_reducer) _reducer = buildReducer();
            return _reducer(state, action);
        }
        function getInitialState() {
            if (!_reducer) _reducer = buildReducer();
            return _reducer.getInitialState();
        }
        function makeSelectorProps(reducerPath2) {
            let injected = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            function selectSlice(state) {
                let sliceState = state[reducerPath2];
                if (typeof sliceState === "undefined") {
                    if (injected) {
                        sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "selectSlice returned undefined for an uninjected slice reducer");
                    }
                }
                return sliceState;
            }
            function getSelectors() {
                let selectState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : selectSelf;
                const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, ()=>/* @__PURE__ */ new WeakMap());
                return getOrInsertComputed(selectorCache, selectState, ()=>{
                    const map = {};
                    var _options_selectors;
                    for (const [name2, selector] of Object.entries((_options_selectors = options.selectors) !== null && _options_selectors !== void 0 ? _options_selectors : {})){
                        map[name2] = wrapSelector(selector, selectState, ()=>getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
                    }
                    return map;
                });
            }
            return {
                reducerPath: reducerPath2,
                getSelectors,
                get selectors () {
                    return getSelectors(selectSlice);
                },
                selectSlice
            };
        }
        const slice = {
            name,
            reducer,
            actions: context.actionCreators,
            caseReducers: context.sliceCaseReducersByName,
            getInitialState,
            ...makeSelectorProps(reducerPath),
            injectInto (injectable) {
                let { reducerPath: pathOpt, ...config } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const newReducerPath = pathOpt !== null && pathOpt !== void 0 ? pathOpt : reducerPath;
                injectable.inject({
                    reducerPath: newReducerPath,
                    reducer
                }, config);
                return {
                    ...slice,
                    ...makeSelectorProps(newReducerPath, true)
                };
            }
        };
        return slice;
    };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
    function wrapper(rootState) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        let sliceState = selectState(rootState);
        if (typeof sliceState === "undefined") {
            if (injected) {
                sliceState = getInitialState();
            } else if ("TURBOPACK compile-time truthy", 1) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "selectState returned undefined for an uninjected slice reducer");
            }
        }
        return selector(sliceState, ...args);
    }
    wrapper.unwrapped = selector;
    return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
    function asyncThunk(payloadCreator, config) {
        return {
            _reducerDefinitionType: "asyncThunk" /* asyncThunk */ ,
            payloadCreator,
            ...config
        };
    }
    asyncThunk.withTypes = ()=>asyncThunk;
    return {
        reducer (caseReducer) {
            return Object.assign({
                // hack so the wrapping function has the same name as the original
                // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
                [caseReducer.name] () {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    return caseReducer(...args);
                }
            }[caseReducer.name], {
                _reducerDefinitionType: "reducer" /* reducer */ 
            });
        },
        preparedReducer (prepare, reducer) {
            return {
                _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */ ,
                prepare,
                reducer
            };
        },
        asyncThunk
    };
}
function handleNormalReducerDefinition(param, maybeReducerWithPrepare, context) {
    let { type, reducerName, createNotation } = param;
    let caseReducer;
    let prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
        if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
        }
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
        caseReducer = maybeReducerWithPrepare;
    }
    context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */ ;
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */ ;
}
function handleThunkCaseReducerDefinition(param, reducerDefinition, context, cAT) {
    let { type, reducerName } = param;
    if (!cAT) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
    }
    const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
    const thunk = cAT(type, payloadCreator, options);
    context.exposeAction(reducerName, thunk);
    if (fulfilled) {
        context.addCase(thunk.fulfilled, fulfilled);
    }
    if (pending) {
        context.addCase(thunk.pending, pending);
    }
    if (rejected) {
        context.addCase(thunk.rejected, rejected);
    }
    if (settled) {
        context.addMatcher(thunk.settled, settled);
    }
    context.exposeCaseReducer(reducerName, {
        fulfilled: fulfilled || noop,
        pending: pending || noop,
        rejected: rejected || noop,
        settled: settled || noop
    });
}
function noop() {}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory(stateAdapter) {
    function getInitialState() {
        let additionalState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, entities = arguments.length > 1 ? arguments[1] : void 0;
        const state = Object.assign(getInitialEntityState(), additionalState);
        return entities ? stateAdapter.setAll(state, entities) : state;
    }
    return {
        getInitialState
    };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { createSelector: createSelector2 = createDraftSafeSelector } = options;
        const selectIds = (state)=>state.ids;
        const selectEntities = (state)=>state.entities;
        const selectAll = createSelector2(selectIds, selectEntities, (ids, entities)=>ids.map((id)=>entities[id]));
        const selectId = (_, id)=>id;
        const selectById = (entities, id)=>entities[id];
        const selectTotal = createSelector2(selectIds, (ids)=>ids.length);
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
                selectById: createSelector2(selectEntities, selectId, selectById)
            };
        }
        const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
        return {
            selectIds: createSelector2(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createSelector2(selectState, selectAll),
            selectTotal: createSelector2(selectState, selectTotal),
            selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return {
        getSelectors
    };
}
;
var isDraftTyped = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"];
function createSingleArgumentStateOperator(mutator) {
    const operator = createStateOperator((_, state)=>mutator(state));
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        const runMutator = (draft)=>{
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            } else {
                mutator(arg, draft);
            }
        };
        if (isDraftTyped(state)) {
            runMutator(state);
            return state;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["produce"])(state, runMutator);
    };
}
;
function selectIdValue(entity, selectId) {
    const key = selectId(entity);
    if (("TURBOPACK compile-time value", "development") !== "production" && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function getCurrent(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["current"])(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingIdsArray = getCurrent(state.ids);
    const existingIds = new Set(existingIdsArray);
    const added = [];
    const addedIds = /* @__PURE__ */ new Set([]);
    const updated = [];
    for (const entity of newEntities){
        const id = selectIdValue(entity, selectId);
        if (existingIds.has(id) || addedIds.has(id)) {
            updated.push({
                id,
                changes: entity
            });
        } else {
            addedIds.add(id);
            added.push(entity);
        }
    }
    return [
        added,
        updated,
        existingIdsArray
    ];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        ;
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([
            key
        ], state);
    }
    function removeManyMutably(keys, state) {
        let didMutate = false;
        keys.forEach((key)=>{
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter((id)=>id in state.entities);
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        const original3 = state.entities[update.id];
        if (original3 === void 0) {
            return false;
        }
        const updated = Object.assign({}, original3, update.changes);
        const newKey = selectIdValue(updated, selectId);
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        ;
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        const newKeys = {};
        const updatesPerEntity = {};
        updates.forEach((update)=>{
            if (update.id in state.entities) {
                var _updatesPerEntity_update_id;
                updatesPerEntity[update.id] = {
                    id: update.id,
                    // Spreads ignore falsy values, so this works even if there isn't
                    // an existing update already at this key
                    changes: {
                        ...(_updatesPerEntity_update_id = updatesPerEntity[update.id]) === null || _updatesPerEntity_update_id === void 0 ? void 0 : _updatesPerEntity_update_id.changes,
                        ...update.changes
                    }
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            const didMutateIds = updates.filter((update)=>takeNewKey(newKeys, update, state)).length > 0;
            if (didMutateIds) {
                state.ids = Object.values(state.entities).map((e)=>selectIdValue(e, selectId));
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
        addManyMutably(added, state);
        updateManyMutably(updated, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function findInsertIndex(sortedItems, item, comparisonFunction) {
    let lowIndex = 0;
    let highIndex = sortedItems.length;
    while(lowIndex < highIndex){
        let middleIndex = lowIndex + highIndex >>> 1;
        const currentItem = sortedItems[middleIndex];
        const res = comparisonFunction(item, currentItem);
        if (res >= 0) {
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex;
        }
    }
    return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
    const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
    sortedItems.splice(insertAtIndex, 0, item);
    return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    function addOneMutably(entity, state) {
        return addManyMutably([
            entity
        ], state);
    }
    function addManyMutably(newEntities, state, existingIds) {
        newEntities = ensureEntitiesArray(newEntities);
        const existingKeys = new Set(existingIds !== null && existingIds !== void 0 ? existingIds : getCurrent(state.ids));
        const models = newEntities.filter((model)=>!existingKeys.has(selectIdValue(model, selectId)));
        if (models.length !== 0) {
            mergeFunction(state, models);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([
            entity
        ], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            for (const item of newEntities){
                delete state.entities[selectId(item)];
            }
            mergeFunction(state, newEntities);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state, []);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        let appliedUpdates = false;
        let replacedIds = false;
        for (let update of updates){
            const entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            const newId = selectId(entity);
            if (update.id !== newId) {
                replacedIds = true;
                delete state.entities[update.id];
                const oldIndex = state.ids.indexOf(update.id);
                state.ids[oldIndex] = newId;
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            mergeFunction(state, [], appliedUpdates, replacedIds);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
        if (added.length) {
            addManyMutably(added, state, existingIdsArray);
        }
        if (updated.length) {
            updateManyMutably(updated, state);
        }
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    const mergeFunction = (state, addedItems, appliedUpdates, replacedIds)=>{
        const currentEntities = getCurrent(state.entities);
        const currentIds = getCurrent(state.ids);
        const stateEntities = state.entities;
        let ids = currentIds;
        if (replacedIds) {
            ids = new Set(currentIds);
        }
        let sortedEntities = [];
        for (const id of ids){
            const entity = currentEntities[id];
            if (entity) {
                sortedEntities.push(entity);
            }
        }
        const wasPreviouslyEmpty = sortedEntities.length === 0;
        for (const item of addedItems){
            stateEntities[selectId(item)] = item;
            if (!wasPreviouslyEmpty) {
                insert(sortedEntities, item, comparer);
            }
        }
        if (wasPreviouslyEmpty) {
            sortedEntities = addedItems.slice().sort(comparer);
        } else if (appliedUpdates) {
            sortedEntities.sort(comparer);
        }
        const newSortedIds = sortedEntities.map(selectId);
        if (!areArraysEqual(currentIds, newSortedIds)) {
            state.ids = newSortedIds;
        }
    };
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { selectId, sortComparer } = {
        sortComparer: false,
        selectId: (instance)=>instance.id,
        ...options
    };
    const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    const stateFactory = createInitialStateFactory(stateAdapter);
    const selectorsFactory = createSelectorsFactory();
    return {
        selectId,
        sortComparer,
        ...stateFactory,
        ...selectorsFactory,
        ...stateAdapter
    };
}
;
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-".concat(cancelled);
var taskCompleted = "task-".concat(completed);
var listenerCancelled = "".concat(listener, "-").concat(cancelled);
var listenerCompleted = "".concat(listener, "-").concat(completed);
var TaskAbortError = class {
    constructor(code){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "TaskAbortError");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "message", void 0);
        this.code = code;
        this.message = "".concat(task, " ").concat(cancelled, " (reason: ").concat(code, ")");
    }
};
// src/listenerMiddleware/utils.ts
var assertFunction = (func, expected)=>{
    if (typeof func !== "function") {
        throw new TypeError(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "".concat(expected, " is not a function"));
    }
};
var noop2 = ()=>{};
var catchRejection = function(promise) {
    let onError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop2;
    promise.catch(onError);
    return promise;
};
var addAbortSignalListener = (abortSignal, callback)=>{
    abortSignal.addEventListener("abort", callback, {
        once: true
    });
    return ()=>abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason)=>{
    const signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/task.ts
var validateActive = (signal)=>{
    if (signal.aborted) {
        const { reason } = signal;
        throw new TaskAbortError(reason);
    }
};
function raceWithSignal(signal, promise) {
    let cleanup = noop2;
    return new Promise((resolve, reject)=>{
        const notifyRejection = ()=>reject(new TaskAbortError(signal.reason));
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise.finally(()=>cleanup()).then(resolve, reject);
    }).finally(()=>{
        cleanup = noop2;
    });
}
var runTask = async (task2, cleanUp)=>{
    try {
        await Promise.resolve();
        const value = await task2();
        return {
            status: "ok",
            value
        };
    } catch (error) {
        return {
            status: error instanceof TaskAbortError ? "cancelled" : "rejected",
            error
        };
    } finally{
        cleanUp === null || cleanUp === void 0 ? void 0 : cleanUp();
    }
};
var createPause = (signal)=>{
    return (promise)=>{
        return catchRejection(raceWithSignal(signal, promise).then((output)=>{
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = (signal)=>{
    const pause = createPause(signal);
    return (timeoutMs)=>{
        return pause(new Promise((resolve)=>setTimeout(resolve, timeoutMs)));
    };
};
// src/listenerMiddleware/index.ts
var { assign } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises)=>{
    const linkControllers = (controller)=>addAbortSignalListener(parentAbortSignal, ()=>abortControllerWithReason(controller, parentAbortSignal.reason));
    return (taskExecutor, opts)=>{
        assertFunction(taskExecutor, "taskExecutor");
        const childAbortController = new AbortController();
        linkControllers(childAbortController);
        const result = runTask(async ()=>{
            validateActive(parentAbortSignal);
            validateActive(childAbortController.signal);
            const result2 = await taskExecutor({
                pause: createPause(childAbortController.signal),
                delay: createDelay(childAbortController.signal),
                signal: childAbortController.signal
            });
            validateActive(childAbortController.signal);
            return result2;
        }, ()=>abortControllerWithReason(childAbortController, taskCompleted));
        if (opts === null || opts === void 0 ? void 0 : opts.autoJoin) {
            parentBlockingPromises.push(result.catch(noop2));
        }
        return {
            result: createPause(parentAbortSignal)(result),
            cancel () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = (startListening, signal)=>{
    const take = async (predicate, timeout)=>{
        validateActive(signal);
        let unsubscribe = ()=>{};
        const tuplePromise = new Promise((resolve, reject)=>{
            let stopListening = startListening({
                predicate,
                effect: (action, listenerApi)=>{
                    listenerApi.unsubscribe();
                    resolve([
                        action,
                        listenerApi.getState(),
                        listenerApi.getOriginalState()
                    ]);
                }
            });
            unsubscribe = ()=>{
                stopListening();
                reject();
            };
        });
        const promises = [
            tuplePromise
        ];
        if (timeout != null) {
            promises.push(new Promise((resolve)=>setTimeout(resolve, timeout, null)));
        }
        try {
            const output = await raceWithSignal(signal, Promise.race(promises));
            validateActive(signal);
            return output;
        } finally{
            unsubscribe();
        }
    };
    return (predicate, timeout)=>catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options)=>{
    let { type, actionCreator, matcher, predicate, effect } = options;
    if (type) {
        predicate = createAction(type).match;
    } else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    } else if (matcher) {
        predicate = matcher;
    } else if (predicate) {} else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return {
        predicate,
        type,
        effect
    };
};
var createListenerEntry = /* @__PURE__ */ assign((options)=>{
    const { type, predicate, effect } = getListenerEntryPropsFrom(options);
    const entry = {
        id: nanoid(),
        effect,
        type,
        predicate,
        pending: /* @__PURE__ */ new Set(),
        unsubscribe: ()=>{
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Unsubscribe not initialized");
        }
    };
    return entry;
}, {
    withTypes: ()=>createListenerEntry
});
var findListenerEntry = (listenerMap, options)=>{
    const { type, effect, predicate } = getListenerEntryPropsFrom(options);
    return Array.from(listenerMap.values()).find((entry)=>{
        const matchPredicateOrType = typeof type === "string" ? entry.type === type : entry.predicate === predicate;
        return matchPredicateOrType && entry.effect === effect;
    });
};
var cancelActiveListeners = (entry)=>{
    entry.pending.forEach((controller)=>{
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = (listenerMap)=>{
    return ()=>{
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo)=>{
    try {
        errorHandler(errorToNotify, errorInfo);
    } catch (errorHandlerError) {
        setTimeout(()=>{
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction("".concat(alm, "/add")), {
    withTypes: ()=>addListener
});
var clearAllListeners = /* @__PURE__ */ createAction("".concat(alm, "/removeAll"));
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction("".concat(alm, "/remove")), {
    withTypes: ()=>removeListener
});
var defaultErrorHandler = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    console.error("".concat(alm, "/error"), ...args);
};
var createListenerMiddleware = function() {
    let middlewareOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const listenerMap = /* @__PURE__ */ new Map();
    const { extra, onError = defaultErrorHandler } = middlewareOptions;
    assertFunction(onError, "onError");
    const insertEntry = (entry)=>{
        entry.unsubscribe = ()=>listenerMap.delete(entry.id);
        listenerMap.set(entry.id, entry);
        return (cancelOptions)=>{
            entry.unsubscribe();
            if (cancelOptions === null || cancelOptions === void 0 ? void 0 : cancelOptions.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    const startListening = (options)=>{
        var _findListenerEntry;
        const entry = (_findListenerEntry = findListenerEntry(listenerMap, options)) !== null && _findListenerEntry !== void 0 ? _findListenerEntry : createListenerEntry(options);
        return insertEntry(entry);
    };
    assign(startListening, {
        withTypes: ()=>startListening
    });
    const stopListening = (options)=>{
        const entry = findListenerEntry(listenerMap, options);
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    assign(stopListening, {
        withTypes: ()=>stopListening
    });
    const notifyListener = async (entry, action, api, getOriginalState)=>{
        const internalTaskController = new AbortController();
        const take = createTakePattern(startListening, internalTaskController.signal);
        const autoJoinPromises = [];
        try {
            entry.pending.add(internalTaskController);
            await Promise.resolve(entry.effect(action, // Use assign() rather than ... to avoid extra helper functions added to bundle
            assign({}, api, {
                getOriginalState,
                condition: (predicate, timeout)=>take(predicate, timeout).then(Boolean),
                take,
                delay: createDelay(internalTaskController.signal),
                pause: createPause(internalTaskController.signal),
                extra,
                signal: internalTaskController.signal,
                fork: createFork(internalTaskController.signal, autoJoinPromises),
                unsubscribe: entry.unsubscribe,
                subscribe: ()=>{
                    listenerMap.set(entry.id, entry);
                },
                cancelActiveListeners: ()=>{
                    entry.pending.forEach((controller, _, set)=>{
                        if (controller !== internalTaskController) {
                            abortControllerWithReason(controller, listenerCancelled);
                            set.delete(controller);
                        }
                    });
                },
                cancel: ()=>{
                    abortControllerWithReason(internalTaskController, listenerCancelled);
                    entry.pending.delete(internalTaskController);
                },
                throwIfCancelled: ()=>{
                    validateActive(internalTaskController.signal);
                }
            })));
        } catch (listenerError) {
            if (!(listenerError instanceof TaskAbortError)) {
                safelyNotifyError(onError, listenerError, {
                    raisedBy: "effect"
                });
            }
        } finally{
            await Promise.all(autoJoinPromises);
            abortControllerWithReason(internalTaskController, listenerCompleted);
            entry.pending.delete(internalTaskController);
        }
    };
    const clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    const middleware = (api)=>(next)=>(action)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                    return next(action);
                }
                if (addListener.match(action)) {
                    return startListening(action.payload);
                }
                if (clearAllListeners.match(action)) {
                    clearListenerMiddleware();
                    return;
                }
                if (removeListener.match(action)) {
                    return stopListening(action.payload);
                }
                let originalState = api.getState();
                const getOriginalState = ()=>{
                    if (originalState === INTERNAL_NIL_TOKEN) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "".concat(alm, ": getOriginalState can only be called synchronously"));
                    }
                    return originalState;
                };
                let result;
                try {
                    result = next(action);
                    if (listenerMap.size > 0) {
                        const currentState = api.getState();
                        const listenerEntries = Array.from(listenerMap.values());
                        for (const entry of listenerEntries){
                            let runListener = false;
                            try {
                                runListener = entry.predicate(action, currentState, originalState);
                            } catch (predicateError) {
                                runListener = false;
                                safelyNotifyError(onError, predicateError, {
                                    raisedBy: "predicate"
                                });
                            }
                            if (!runListener) {
                                continue;
                            }
                            notifyListener(entry, action, api, getOriginalState);
                        }
                    }
                } finally{
                    originalState = INTERNAL_NIL_TOKEN;
                }
                return result;
            };
    return {
        middleware,
        startListening,
        stopListening,
        clearListeners: clearListenerMiddleware
    };
};
;
var createMiddlewareEntry = (middleware)=>({
        middleware,
        applied: /* @__PURE__ */ new Map()
    });
var matchInstance = (instanceId)=>(action)=>{
        var _action_meta;
        return (action === null || action === void 0 ? void 0 : (_action_meta = action.meta) === null || _action_meta === void 0 ? void 0 : _action_meta.instanceId) === instanceId;
    };
var createDynamicMiddleware = ()=>{
    const instanceId = nanoid();
    const middlewareMap = /* @__PURE__ */ new Map();
    const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", function() {
        for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
            middlewares[_key] = arguments[_key];
        }
        return {
            payload: middlewares,
            meta: {
                instanceId
            }
        };
    }), {
        withTypes: ()=>withMiddleware
    });
    const addMiddleware = Object.assign(function addMiddleware2() {
        for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++){
            middlewares[_key] = arguments[_key];
        }
        middlewares.forEach((middleware2)=>{
            getOrInsertComputed(middlewareMap, middleware2, createMiddlewareEntry);
        });
    }, {
        withTypes: ()=>addMiddleware
    });
    const getFinalMiddleware = (api)=>{
        const appliedMiddleware = Array.from(middlewareMap.values()).map((entry)=>getOrInsertComputed(entry.applied, api, entry.middleware));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compose"])(...appliedMiddleware);
    };
    const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
    const middleware = (api)=>(next)=>(action)=>{
                if (isWithMiddleware(action)) {
                    addMiddleware(...action.payload);
                    return api.dispatch;
                }
                return getFinalMiddleware(api)(next)(action);
            };
    return {
        middleware,
        addMiddleware,
        withMiddleware,
        instanceId
    };
};
;
var isSliceLike = (maybeSliceLike)=>"reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices)=>slices.flatMap((sliceOrMap)=>isSliceLike(sliceOrMap) ? [
            [
                sliceOrMap.reducerPath,
                sliceOrMap.reducer
            ]
        ] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value)=>!!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap, initialStateCache)=>getOrInsertComputed(stateProxyMap, state, ()=>new Proxy(state, {
            get: (target, prop, receiver)=>{
                if (prop === ORIGINAL_STATE) return target;
                const result = Reflect.get(target, prop, receiver);
                if (typeof result === "undefined") {
                    const cached = initialStateCache[prop];
                    if (typeof cached !== "undefined") return cached;
                    const reducer = reducerMap[prop];
                    if (reducer) {
                        const reducerResult = reducer(void 0, {
                            type: nanoid()
                        });
                        if (typeof reducerResult === "undefined") {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'The slice reducer for key "'.concat(prop.toString(), "\" returned undefined when called for selector(). If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."));
                        }
                        initialStateCache[prop] = reducerResult;
                        return reducerResult;
                    }
                }
                return result;
            }
        }));
var original = (state)=>{
    if (!isStateProxy(state)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "original must be used on state Proxy");
    }
    return state[ORIGINAL_STATE];
};
var emptyObject = {};
var noopReducer = function() {
    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emptyObject;
    return state;
};
function combineSlices() {
    for(var _len = arguments.length, slices = new Array(_len), _key = 0; _key < _len; _key++){
        slices[_key] = arguments[_key];
    }
    const reducerMap = Object.fromEntries(getReducers(slices));
    const getReducer = ()=>Object.keys(reducerMap).length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])(reducerMap) : noopReducer;
    let reducer = getReducer();
    function combinedReducer(state, action) {
        return reducer(state, action);
    }
    combinedReducer.withLazyLoadedSlices = ()=>combinedReducer;
    const initialStateCache = {};
    const inject = function(slice) {
        let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { reducerPath, reducer: reducerToInject } = slice;
        const currentReducer = reducerMap[reducerPath];
        if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                console.error("called `inject` to override already-existing reducer ".concat(reducerPath, " without specifying `overrideExisting: true`"));
            }
            return combinedReducer;
        }
        if (config.overrideExisting && currentReducer !== reducerToInject) {
            delete initialStateCache[reducerPath];
        }
        reducerMap[reducerPath] = reducerToInject;
        reducer = getReducer();
        return combinedReducer;
    };
    const selector = Object.assign(function makeSelector(selectorFn, selectState) {
        return function selector2(state) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap, initialStateCache), ...args);
        };
    }, {
        original
    });
    return Object.assign(combinedReducer, {
        inject,
        selector
    });
}
// src/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
    return "Minified Redux Toolkit error #".concat(code, "; visit https://redux-toolkit.js.org/Errors?code=").concat(code, " for the full message or use the non-minified dev environment for full errors. ");
}
;
 //# sourceMappingURL=redux-toolkit.modern.mjs.map
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// functions
__turbopack_context__.s([
    "BIGINT_FORMAT_RANGES",
    ()=>BIGINT_FORMAT_RANGES,
    "Class",
    ()=>Class,
    "NUMBER_FORMAT_RANGES",
    ()=>NUMBER_FORMAT_RANGES,
    "aborted",
    ()=>aborted,
    "allowsEval",
    ()=>allowsEval,
    "assert",
    ()=>assert,
    "assertEqual",
    ()=>assertEqual,
    "assertIs",
    ()=>assertIs,
    "assertNever",
    ()=>assertNever,
    "assertNotEqual",
    ()=>assertNotEqual,
    "assignProp",
    ()=>assignProp,
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "base64urlToUint8Array",
    ()=>base64urlToUint8Array,
    "cached",
    ()=>cached,
    "captureStackTrace",
    ()=>captureStackTrace,
    "cleanEnum",
    ()=>cleanEnum,
    "cleanRegex",
    ()=>cleanRegex,
    "clone",
    ()=>clone,
    "cloneDef",
    ()=>cloneDef,
    "createTransparentProxy",
    ()=>createTransparentProxy,
    "defineLazy",
    ()=>defineLazy,
    "esc",
    ()=>esc,
    "escapeRegex",
    ()=>escapeRegex,
    "extend",
    ()=>extend,
    "finalizeIssue",
    ()=>finalizeIssue,
    "floatSafeRemainder",
    ()=>floatSafeRemainder,
    "getElementAtPath",
    ()=>getElementAtPath,
    "getEnumValues",
    ()=>getEnumValues,
    "getLengthableOrigin",
    ()=>getLengthableOrigin,
    "getParsedType",
    ()=>getParsedType,
    "getSizableOrigin",
    ()=>getSizableOrigin,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "isObject",
    ()=>isObject,
    "isPlainObject",
    ()=>isPlainObject,
    "issue",
    ()=>issue,
    "joinValues",
    ()=>joinValues,
    "jsonStringifyReplacer",
    ()=>jsonStringifyReplacer,
    "merge",
    ()=>merge,
    "mergeDefs",
    ()=>mergeDefs,
    "normalizeParams",
    ()=>normalizeParams,
    "nullish",
    ()=>nullish,
    "numKeys",
    ()=>numKeys,
    "objectClone",
    ()=>objectClone,
    "omit",
    ()=>omit,
    "optionalKeys",
    ()=>optionalKeys,
    "partial",
    ()=>partial,
    "pick",
    ()=>pick,
    "prefixIssues",
    ()=>prefixIssues,
    "primitiveTypes",
    ()=>primitiveTypes,
    "promiseAllObject",
    ()=>promiseAllObject,
    "propertyKeyTypes",
    ()=>propertyKeyTypes,
    "randomString",
    ()=>randomString,
    "required",
    ()=>required,
    "safeExtend",
    ()=>safeExtend,
    "shallowClone",
    ()=>shallowClone,
    "stringifyPrimitive",
    ()=>stringifyPrimitive,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64,
    "uint8ArrayToBase64url",
    ()=>uint8ArrayToBase64url,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex,
    "unwrapMessage",
    ()=>unwrapMessage
]);
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
    throw new Error();
}
function assert(_) {}
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v)=>typeof v === "number");
    const values = Object.entries(entries).filter((param)=>{
        let [k, _] = param;
        return numericValues.indexOf(+k) === -1;
    }).map((param)=>{
        let [_, v] = param;
        return v;
    });
    return values;
}
function joinValues(array) {
    let separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "|";
    return array.map((val)=>stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                Object.defineProperty(this, "value", {
                    value
                });
                return value;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepString = step.toString();
    let stepDecCount = (stepString.split(".")[1] || "").length;
    if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
        const match = stepString.match(/\d?e-(\d?)/);
        if (match === null || match === void 0 ? void 0 : match[1]) {
            stepDecCount = Number.parseInt(match[1]);
        }
    }
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
const EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get () {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set (v) {
            Object.defineProperty(object, key, {
                value: v
            });
        // object[key] = v;
        },
        configurable: true
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function mergeDefs() {
    for(var _len = arguments.length, defs = new Array(_len), _key = 0; _key < _len; _key++){
        defs[_key] = arguments[_key];
    }
    const mergedDescriptors = {};
    for (const def of defs){
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path) return obj;
    return path.reduce((acc, key)=>acc === null || acc === void 0 ? void 0 : acc[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for(let i = 0; i < length; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : function() {
    for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
        _args[_key] = arguments[_key];
    }
};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = cached(()=>{
    var _navigator_userAgent, _navigator;
    // @ts-ignore
    if (typeof navigator !== "undefined" && ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_userAgent = _navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : _navigator_userAgent.includes("Cloudflare"))) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    } catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false) return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined) return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o)) return {
        ...o
    };
    if (Array.isArray(o)) return [
        ...o
    ];
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error("Unknown data type: ".concat(t));
    }
};
const propertyKeyTypes = new Set([
    "string",
    "number",
    "symbol"
]);
const primitiveTypes = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def !== null && def !== void 0 ? def : inst._zod.def);
    if (!def || (params === null || params === void 0 ? void 0 : params.parent)) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if ((params === null || params === void 0 ? void 0 : params.message) !== undefined) {
        if ((params === null || params === void 0 ? void 0 : params.error) !== undefined) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_, prop, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return '"'.concat(value, '"');
    return "".concat(value);
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k)=>{
        return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
}
const NUMBER_FORMAT_RANGES = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -3.4028234663852886e38,
        3.4028234663852886e38
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};
const BIGINT_FORMAT_RANGES = {
    int64: [
        /* @__PURE__*/ BigInt("-9223372036854775808"),
        /* @__PURE__*/ BigInt("9223372036854775807")
    ],
    uint64: [
        /* @__PURE__*/ BigInt(0),
        /* @__PURE__*/ BigInt("18446744073709551615")
    ]
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const newShape = {};
            for(const key in mask){
                if (!(key in currDef.shape)) {
                    throw new Error('Unrecognized key: "'.concat(key, '"'));
                }
                if (!mask[key]) continue;
                newShape[key] = currDef.shape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: []
    });
    return clone(schema, def);
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const newShape = {
                ...schema._zod.def.shape
            };
            for(const key in mask){
                if (!(key in currDef.shape)) {
                    throw new Error('Unrecognized key: "'.concat(key, '"'));
                }
                if (!mask[key]) continue;
                delete newShape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: []
    });
    return clone(schema, def);
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    const def = {
        ...schema._zod.def,
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        checks: schema._zod.def.checks
    };
    return clone(schema, def);
}
function merge(a, b) {
    const def = mergeDefs(a._zod.def, {
        get shape () {
            const _shape = {
                ...a._zod.def.shape,
                ...b._zod.def.shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        get catchall () {
            return b._zod.def.catchall;
        },
        checks: []
    });
    return clone(a, def);
}
function partial(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const oldShape = schema._zod.def.shape;
            const shape = {
                ...oldShape
            };
            if (mask) {
                for(const key in mask){
                    if (!(key in oldShape)) {
                        throw new Error('Unrecognized key: "'.concat(key, '"'));
                    }
                    if (!mask[key]) continue;
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class ? new Class({
                        type: "optional",
                        innerType: oldShape[key]
                    }) : oldShape[key];
                }
            } else {
                for(const key in oldShape){
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class ? new Class({
                        type: "optional",
                        innerType: oldShape[key]
                    }) : oldShape[key];
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function required(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const oldShape = schema._zod.def.shape;
            const shape = {
                ...oldShape
            };
            if (mask) {
                for(const key in mask){
                    if (!(key in shape)) {
                        throw new Error('Unrecognized key: "'.concat(key, '"'));
                    }
                    if (!mask[key]) continue;
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key]
                    });
                }
            } else {
                for(const key in oldShape){
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key]
                    });
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function aborted(x) {
    let startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (x.aborted === true) return true;
    for(let i = startIndex; i < x.issues.length; i++){
        var _x_issues_i;
        if (((_x_issues_i = x.issues[i]) === null || _x_issues_i === void 0 ? void 0 : _x_issues_i.continue) !== true) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        var _path;
        (_path = (_a = iss).path) !== null && _path !== void 0 ? _path : _a.path = [];
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
}
function finalizeIssue(iss, ctx, config) {
    var _iss_path;
    const full = {
        ...iss,
        path: (_iss_path = iss.path) !== null && _iss_path !== void 0 ? _iss_path : []
    };
    // for backwards compatibility
    if (!iss.message) {
        var _iss_inst__zod_def_error, _iss_inst__zod_def, _iss_inst, _ctx_error, _config_customError, _config_localeError;
        var _unwrapMessage, _ref, _ref1, _ref2;
        const message = (_ref2 = (_ref1 = (_ref = (_unwrapMessage = unwrapMessage((_iss_inst = iss.inst) === null || _iss_inst === void 0 ? void 0 : (_iss_inst__zod_def = _iss_inst._zod.def) === null || _iss_inst__zod_def === void 0 ? void 0 : (_iss_inst__zod_def_error = _iss_inst__zod_def.error) === null || _iss_inst__zod_def_error === void 0 ? void 0 : _iss_inst__zod_def_error.call(_iss_inst__zod_def, iss))) !== null && _unwrapMessage !== void 0 ? _unwrapMessage : unwrapMessage(ctx === null || ctx === void 0 ? void 0 : (_ctx_error = ctx.error) === null || _ctx_error === void 0 ? void 0 : _ctx_error.call(ctx, iss))) !== null && _ref !== void 0 ? _ref : unwrapMessage((_config_customError = config.customError) === null || _config_customError === void 0 ? void 0 : _config_customError.call(config, iss))) !== null && _ref1 !== void 0 ? _ref1 : unwrapMessage((_config_localeError = config.localeError) === null || _config_localeError === void 0 ? void 0 : _config_localeError.call(config, iss))) !== null && _ref2 !== void 0 ? _ref2 : "Invalid input";
        full.message = message;
    }
    // delete (full as any).def;
    delete full.inst;
    delete full.continue;
    if (!(ctx === null || ctx === void 0 ? void 0 : ctx.reportInput)) {
        delete full.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    // @ts-ignore
    if (input instanceof File) return "file";
    return "unknown";
}
function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
function issue() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
function cleanEnum(obj) {
    return Object.entries(obj).filter((param)=>{
        let [k, _] = param;
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    }).map((el)=>el[1]);
}
function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++){
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for(let i = 0; i < bytes.length; i++){
        binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
    const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - base64.length % 4) % 4);
    return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
    const cleanHex = hex.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for(let i = 0; i < cleanHex.length; i += 2){
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
}
function uint8ArrayToHex(bytes) {
    return Array.from(bytes).map((b)=>b.toString(16).padStart(2, "0")).join("");
}
class Class {
    constructor(..._args){}
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "حرف",
            verb: "أن يحوي"
        },
        file: {
            unit: "بايت",
            verb: "أن يحوي"
        },
        array: {
            unit: "عنصر",
            verb: "أن يحوي"
        },
        set: {
            unit: "عنصر",
            verb: "أن يحوي"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "مدخل",
        email: "بريد إلكتروني",
        url: "رابط",
        emoji: "إيموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاريخ ووقت بمعيار ISO",
        date: "تاريخ بمعيار ISO",
        time: "وقت بمعيار ISO",
        duration: "مدة بمعيار ISO",
        ipv4: "عنوان IPv4",
        ipv6: "عنوان IPv6",
        cidrv4: "مدى عناوين بصيغة IPv4",
        cidrv6: "مدى عناوين بصيغة IPv6",
        base64: "نَص بترميز base64-encoded",
        base64url: "نَص بترميز base64url-encoded",
        json_string: "نَص على هيئة JSON",
        e164: "رقم هاتف بمعيار E.164",
        jwt: "JWT",
        template_literal: "مدخل"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "مدخلات غير مقبولة: يفترض إدخال ".concat(issue.expected, "، ولكن تم إدخال ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "مدخلات غير مقبولة: يفترض إدخال ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return " أكبر من اللازم: يفترض أن تكون ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "القيمة", " ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عنصر");
                    var _issue_origin1;
                    return "أكبر من اللازم: يفترض أن تكون ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "القيمة", " ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "أصغر من اللازم: يفترض لـ ".concat(issue.origin, " أن يكون ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "أصغر من اللازم: يفترض لـ ".concat(issue.origin, " أن يكون ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'نَص غير مقبول: يجب أن يبدأ بـ "'.concat(issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'نَص غير مقبول: يجب أن ينتهي بـ "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'نَص غير مقبول: يجب أن يتضمَّن "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "نَص غير مقبول: يجب أن يطابق النمط ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " غير مقبول");
                }
            case "not_multiple_of":
                return "رقم غير مقبول: يجب أن يكون من مضاعفات ".concat(issue.divisor);
            case "unrecognized_keys":
                return "معرف".concat(issue.keys.length > 1 ? "ات" : "", " غريب").concat(issue.keys.length > 1 ? "ة" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "، "));
            case "invalid_key":
                return "معرف غير مقبول في ".concat(issue.origin);
            case "invalid_union":
                return "مدخل غير مقبول";
            case "invalid_element":
                return "مدخل غير مقبول في ".concat(issue.origin);
            default:
                return "مدخل غير مقبول";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/az.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "simvol",
            verb: "olmalıdır"
        },
        file: {
            unit: "bayt",
            verb: "olmalıdır"
        },
        array: {
            unit: "element",
            verb: "olmalıdır"
        },
        set: {
            unit: "element",
            verb: "olmalıdır"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Yanlış dəyər: gözlənilən ".concat(issue.expected, ", daxil olan ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Yanlış dəyər: gözlənilən ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Yanlış seçim: aşağıdakılardan biri olmalıdır: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Çox böyük: gözlənilən ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "dəyər", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "element");
                    var _issue_origin1;
                    return "Çox böyük: gözlənilən ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "dəyər", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "Çox kiçik: gözlənilən ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    return "Çox kiçik: gözlənilən ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Yanlış mətn: "'.concat(_issue.prefix, '" ilə başlamalıdır');
                    if (_issue.format === "ends_with") return 'Yanlış mətn: "'.concat(_issue.suffix, '" ilə bitməlidir');
                    if (_issue.format === "includes") return 'Yanlış mətn: "'.concat(_issue.includes, '" daxil olmalıdır');
                    if (_issue.format === "regex") return "Yanlış mətn: ".concat(_issue.pattern, " şablonuna uyğun olmalıdır");
                    var _Nouns__issue_format;
                    return "Yanlış ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Yanlış ədəd: ".concat(issue.divisor, " ilə bölünə bilən olmalıdır");
            case "unrecognized_keys":
                return "Tanınmayan açar".concat(issue.keys.length > 1 ? "lar" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " daxilində yanlış açar");
            case "invalid_union":
                return "Yanlış dəyər";
            case "invalid_element":
                return "".concat(issue.origin, " daxilində yanlış dəyər");
            default:
                return "Yanlış dəyər";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/be.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
function getBelarusianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error = ()=>{
    const Sizable = {
        string: {
            unit: {
                one: "сімвал",
                few: "сімвалы",
                many: "сімвалаў"
            },
            verb: "мець"
        },
        array: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў"
            },
            verb: "мець"
        },
        set: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў"
            },
            verb: "мець"
        },
        file: {
            unit: {
                one: "байт",
                few: "байты",
                many: "байтаў"
            },
            verb: "мець"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "лік";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "масіў";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "увод",
        email: "email адрас",
        url: "URL",
        emoji: "эмодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата і час",
        date: "ISO дата",
        time: "ISO час",
        duration: "ISO працягласць",
        ipv4: "IPv4 адрас",
        ipv6: "IPv6 адрас",
        cidrv4: "IPv4 дыяпазон",
        cidrv6: "IPv6 дыяпазон",
        base64: "радок у фармаце base64",
        base64url: "радок у фармаце base64url",
        json_string: "JSON радок",
        e164: "нумар E.164",
        jwt: "JWT",
        template_literal: "увод"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Няправільны ўвод: чакаўся ".concat(issue.expected, ", атрымана ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Няправільны ўвод: чакалася ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Няправільны варыянт: чакаўся адзін з ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const maxValue = Number(issue.maximum);
                        const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        var _issue_origin;
                        return "Занадта вялікі: чакалася, што ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "значэнне", " павінна ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat(unit);
                    }
                    var _issue_origin1;
                    return "Занадта вялікі: чакалася, што ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "значэнне", " павінна быць ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const minValue = Number(issue.minimum);
                        const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        return "Занадта малы: чакалася, што ".concat(issue.origin, " павінна ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(unit);
                    }
                    return "Занадта малы: чакалася, што ".concat(issue.origin, " павінна быць ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Няправільны радок: павінен пачынацца з "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Няправільны радок: павінен заканчвацца на "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Няправільны радок: павінен змяшчаць "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Няправільны радок: павінен адпавядаць шаблону ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Няправільны ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Няправільны лік: павінен быць кратным ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Нераспазнаны ".concat(issue.keys.length > 1 ? "ключы" : "ключ", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Няправільны ключ у ".concat(issue.origin);
            case "invalid_union":
                return "Няправільны ўвод";
            case "invalid_element":
                return "Няправільнае значэнне ў ".concat(issue.origin);
            default:
                return "Няправільны ўвод";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ca.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caràcters",
            verb: "contenir"
        },
        file: {
            unit: "bytes",
            verb: "contenir"
        },
        array: {
            unit: "elements",
            verb: "contenir"
        },
        set: {
            unit: "elements",
            verb: "contenir"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "adreça electrònica",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adreça IPv4",
        ipv6: "adreça IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Tipus invàlid: s'esperava ".concat(issue.expected, ", s'ha rebut ").concat(parsedType(issue.input));
            // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Valor invàlid: s'esperava ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opció invàlida: s'esperava una de ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, " o "));
            case "too_big":
                {
                    const adj = issue.inclusive ? "com a màxim" : "menys de";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Massa gran: s'esperava que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "el valor", " contingués ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements");
                    var _issue_origin1;
                    return "Massa gran: s'esperava que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "el valor", " fos ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "com a mínim" : "més de";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Massa petit: s'esperava que ".concat(issue.origin, " contingués ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Massa petit: s'esperava que ".concat(issue.origin, " fos ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Format invàlid: ha de començar amb "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return "Format invàlid: ha d'acabar amb \"".concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return "Format invàlid: ha d'incloure \"".concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Format invàlid: ha de coincidir amb el patró ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Format invàlid per a ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Número invàlid: ha de ser múltiple de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Clau".concat(issue.keys.length > 1 ? "s" : "", " no reconeguda").concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Clau invàlida a ".concat(issue.origin);
            case "invalid_union":
                return "Entrada invàlida"; // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
            case "invalid_element":
                return "Element invàlid a ".concat(issue.origin);
            default:
                return "Entrada invàlida";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/cs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "znaků",
            verb: "mít"
        },
        file: {
            unit: "bajtů",
            verb: "mít"
        },
        array: {
            unit: "prvků",
            verb: "mít"
        },
        set: {
            unit: "prvků",
            verb: "mít"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "číslo";
                }
            case "string":
                {
                    return "řetězec";
                }
            case "boolean":
                {
                    return "boolean";
                }
            case "bigint":
                {
                    return "bigint";
                }
            case "function":
                {
                    return "funkce";
                }
            case "symbol":
                {
                    return "symbol";
                }
            case "undefined":
                {
                    return "undefined";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "pole";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "regulární výraz",
        email: "e-mailová adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a čas ve formátu ISO",
        date: "datum ve formátu ISO",
        time: "čas ve formátu ISO",
        duration: "doba trvání ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "řetězec zakódovaný ve formátu base64",
        base64url: "řetězec zakódovaný ve formátu base64url",
        json_string: "řetězec ve formátu JSON",
        e164: "číslo E.164",
        jwt: "JWT",
        template_literal: "vstup"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Neplatný vstup: očekáváno ".concat(issue.expected, ", obdrženo ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Neplatný vstup: očekáváno ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Neplatná možnost: očekávána jedna z hodnot ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "Hodnota je příliš velká: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "hodnota", " musí mít ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "prvků");
                    }
                    var _issue_origin1;
                    return "Hodnota je příliš velká: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "hodnota", " musí být ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin2, _sizing_unit1;
                        return "Hodnota je příliš malá: ".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "hodnota", " musí mít ").concat(adj).concat(issue.minimum.toString(), " ").concat((_sizing_unit1 = sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "prvků");
                    }
                    var _issue_origin3;
                    return "Hodnota je příliš malá: ".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "hodnota", " musí být ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Neplatný řetězec: musí začínat na "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Neplatný řetězec: musí končit na "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Neplatný řetězec: musí obsahovat "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Neplatný řetězec: musí odpovídat vzoru ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Neplatný formát ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Neplatné číslo: musí být násobkem ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Neznámé klíče: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Neplatný klíč v ".concat(issue.origin);
            case "invalid_union":
                return "Neplatný vstup";
            case "invalid_element":
                return "Neplatná hodnota v ".concat(issue.origin);
            default:
                return "Neplatný vstup";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/da.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tegn",
            verb: "havde"
        },
        file: {
            unit: "bytes",
            verb: "havde"
        },
        array: {
            unit: "elementer",
            verb: "indeholdt"
        },
        set: {
            unit: "elementer",
            verb: "indeholdt"
        }
    };
    const TypeNames = {
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "sæt",
        file: "fil"
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    function getTypeName(type) {
        var _TypeNames_type;
        return (_TypeNames_type = TypeNames[type]) !== null && _TypeNames_type !== void 0 ? _TypeNames_type : type;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "tal";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "liste";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                    return "objekt";
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-mailadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslæt",
        date: "ISO-dato",
        time: "ISO-klokkeslæt",
        duration: "ISO-varighed",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ugyldigt input: forventede ".concat(getTypeName(issue.expected), ", fik ").concat(getTypeName(parsedType(issue.input)));
            case "invalid_value":
                if (issue.values.length === 1) return "Ugyldig værdi: forventede ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ugyldigt valg: forventede en af følgende ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    const origin = getTypeName(issue.origin);
                    var _sizing_unit;
                    if (sizing) return "For stor: forventede ".concat(origin !== null && origin !== void 0 ? origin : "value", " ").concat(sizing.verb, " ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementer");
                    return "For stor: forventede ".concat(origin !== null && origin !== void 0 ? origin : "value", " havde ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    const origin = getTypeName(issue.origin);
                    if (sizing) {
                        return "For lille: forventede ".concat(origin, " ").concat(sizing.verb, " ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "For lille: forventede ".concat(origin, " havde ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ugyldig streng: skal starte med "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Ugyldig streng: skal ende med "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ugyldig streng: skal indeholde "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ugyldig streng: skal matche mønsteret ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Ugyldig ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ugyldigt tal: skal være deleligt med ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ugyldig nøgle i ".concat(issue.origin);
            case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
                return "Ugyldig værdi i ".concat(issue.origin);
            default:
                return "Ugyldigt input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/de.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "Zeichen",
            verb: "zu haben"
        },
        file: {
            unit: "Bytes",
            verb: "zu haben"
        },
        array: {
            unit: "Elemente",
            verb: "zu haben"
        },
        set: {
            unit: "Elemente",
            verb: "zu haben"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "Zahl";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "Array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ungültige Eingabe: erwartet ".concat(issue.expected, ", erhalten ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ungültige Eingabe: erwartet ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ungültige Option: erwartet eine von ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Zu groß: erwartet, dass ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "Wert", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "Elemente", " hat");
                    var _issue_origin1;
                    return "Zu groß: erwartet, dass ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "Wert", " ").concat(adj).concat(issue.maximum.toString(), " ist");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Zu klein: erwartet, dass ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " hat");
                    }
                    return "Zu klein: erwartet, dass ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ist");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ungültiger String: muss mit "'.concat(_issue.prefix, '" beginnen');
                    if (_issue.format === "ends_with") return 'Ungültiger String: muss mit "'.concat(_issue.suffix, '" enden');
                    if (_issue.format === "includes") return 'Ungültiger String: muss "'.concat(_issue.includes, '" enthalten');
                    if (_issue.format === "regex") return "Ungültiger String: muss dem Muster ".concat(_issue.pattern, " entsprechen");
                    var _Nouns__issue_format;
                    return "Ungültig: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ungültige Zahl: muss ein Vielfaches von ".concat(issue.divisor, " sein");
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ungültiger Schlüssel in ".concat(issue.origin);
            case "invalid_union":
                return "Ungültige Eingabe";
            case "invalid_element":
                return "Ungültiger Wert in ".concat(issue.origin);
            default:
                return "Ungültige Eingabe";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/en.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "number";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "characters",
            verb: "to have"
        },
        file: {
            unit: "bytes",
            verb: "to have"
        },
        array: {
            unit: "items",
            verb: "to have"
        },
        set: {
            unit: "items",
            verb: "to have"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Invalid input: expected ".concat(issue.expected, ", received ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Invalid input: expected ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Invalid option: expected one of ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Too big: expected ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " to have ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements");
                    var _issue_origin1;
                    return "Too big: expected ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " to be ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Too small: expected ".concat(issue.origin, " to have ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Too small: expected ".concat(issue.origin, " to be ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Invalid string: must start with "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Invalid string: must end with "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Invalid string: must include "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Invalid string: must match pattern ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Invalid ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Invalid number: must be a multiple of ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Unrecognized key".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Invalid key in ".concat(issue.origin);
            case "invalid_union":
                return "Invalid input";
            case "invalid_element":
                return "Invalid value in ".concat(issue.origin);
            default:
                return "Invalid input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/eo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "nombro";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "tabelo";
                }
                if (data === null) {
                    return "senvalora";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karaktrojn",
            verb: "havi"
        },
        file: {
            unit: "bajtojn",
            verb: "havi"
        },
        array: {
            unit: "elementojn",
            verb: "havi"
        },
        set: {
            unit: "elementojn",
            verb: "havi"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emoĝio",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-daŭro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Nevalida enigo: atendiĝis ".concat(issue.expected, ", riceviĝis ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Nevalida enigo: atendiĝis ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Nevalida opcio: atendiĝis unu el ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Tro granda: atendiĝis ke ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valoro", " havu ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementojn");
                    var _issue_origin1;
                    return "Tro granda: atendiĝis ke ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valoro", " havu ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Tro malgranda: atendiĝis ke ".concat(issue.origin, " havu ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Tro malgranda: atendiĝis ke ".concat(issue.origin, " estu ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Nevalida karaktraro: devas komenciĝi per "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Nevalida karaktraro: devas finiĝi per "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Nevalida karaktraro: devas inkluzivi "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Nevalida karaktraro: devas kongrui kun la modelo ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Nevalida ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Nevalida nombro: devas esti oblo de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Nekonata".concat(issue.keys.length > 1 ? "j" : "", " ŝlosilo").concat(issue.keys.length > 1 ? "j" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Nevalida ŝlosilo en ".concat(issue.origin);
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return "Nevalida valoro en ".concat(issue.origin);
            default:
                return "Nevalida enigo";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caracteres",
            verb: "tener"
        },
        file: {
            unit: "bytes",
            verb: "tener"
        },
        array: {
            unit: "elementos",
            verb: "tener"
        },
        set: {
            unit: "elementos",
            verb: "tener"
        }
    };
    const TypeNames = {
        string: "texto",
        number: "número",
        boolean: "booleano",
        array: "arreglo",
        object: "objeto",
        set: "conjunto",
        file: "archivo",
        date: "fecha",
        bigint: "número grande",
        symbol: "símbolo",
        undefined: "indefinido",
        null: "nulo",
        function: "función",
        map: "mapa",
        record: "registro",
        tuple: "tupla",
        enum: "enumeración",
        union: "unión",
        literal: "literal",
        promise: "promesa",
        void: "vacío",
        never: "nunca",
        unknown: "desconocido",
        any: "cualquiera"
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    function getTypeName(type) {
        var _TypeNames_type;
        return (_TypeNames_type = TypeNames[type]) !== null && _TypeNames_type !== void 0 ? _TypeNames_type : type;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype) {
                        return data.constructor.name;
                    }
                    return "object";
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "dirección de correo electrónico",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duración ISO",
        ipv4: "dirección IPv4",
        ipv6: "dirección IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Entrada inválida: se esperaba ".concat(getTypeName(issue.expected), ", recibido ").concat(getTypeName(parsedType(issue.input)));
            // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Entrada inválida: se esperaba ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opción inválida: se esperaba una de ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    const origin = getTypeName(issue.origin);
                    var _sizing_unit;
                    if (sizing) return "Demasiado grande: se esperaba que ".concat(origin !== null && origin !== void 0 ? origin : "valor", " tuviera ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementos");
                    return "Demasiado grande: se esperaba que ".concat(origin !== null && origin !== void 0 ? origin : "valor", " fuera ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    const origin = getTypeName(issue.origin);
                    if (sizing) {
                        return "Demasiado pequeño: se esperaba que ".concat(origin, " tuviera ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Demasiado pequeño: se esperaba que ".concat(origin, " fuera ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Cadena inválida: debe comenzar con "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Cadena inválida: debe terminar en "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Cadena inválida: debe incluir "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Cadena inválida: debe coincidir con el patrón ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Inválido ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Número inválido: debe ser múltiplo de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Llave".concat(issue.keys.length > 1 ? "s" : "", " desconocida").concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Llave inválida en ".concat(getTypeName(issue.origin));
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return "Valor inválido en ".concat(getTypeName(issue.origin));
            default:
                return "Entrada inválida";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fa.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "کاراکتر",
            verb: "داشته باشد"
        },
        file: {
            unit: "بایت",
            verb: "داشته باشد"
        },
        array: {
            unit: "آیتم",
            verb: "داشته باشد"
        },
        set: {
            unit: "آیتم",
            verb: "داشته باشد"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "عدد";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "آرایه";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودی",
        email: "آدرس ایمیل",
        url: "URL",
        emoji: "ایموجی",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاریخ و زمان ایزو",
        date: "تاریخ ایزو",
        time: "زمان ایزو",
        duration: "مدت زمان ایزو",
        ipv4: "IPv4 آدرس",
        ipv6: "IPv6 آدرس",
        cidrv4: "IPv4 دامنه",
        cidrv6: "IPv6 دامنه",
        base64: "base64-encoded رشته",
        base64url: "base64url-encoded رشته",
        json_string: "JSON رشته",
        e164: "E.164 عدد",
        jwt: "JWT",
        template_literal: "ورودی"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ورودی نامعتبر: می‌بایست ".concat(issue.expected, " می‌بود، ").concat(parsedType(issue.input), " دریافت شد");
            case "invalid_value":
                if (issue.values.length === 1) {
                    return "ورودی نامعتبر: می‌بایست ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " می‌بود");
                }
                return "گزینه نامعتبر: می‌بایست یکی از ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " می‌بود");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "خیلی بزرگ: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "مقدار", " باید ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عنصر", " باشد");
                    }
                    var _issue_origin1;
                    return "خیلی بزرگ: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "مقدار", " باید ").concat(adj).concat(issue.maximum.toString(), " باشد");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "خیلی کوچک: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " باشد");
                    }
                    return "خیلی کوچک: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " باشد");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'رشته نامعتبر: باید با "'.concat(_issue.prefix, '" شروع شود');
                    }
                    if (_issue.format === "ends_with") {
                        return 'رشته نامعتبر: باید با "'.concat(_issue.suffix, '" تمام شود');
                    }
                    if (_issue.format === "includes") {
                        return 'رشته نامعتبر: باید شامل "'.concat(_issue.includes, '" باشد');
                    }
                    if (_issue.format === "regex") {
                        return "رشته نامعتبر: باید با الگوی ".concat(_issue.pattern, " مطابقت داشته باشد");
                    }
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " نامعتبر");
                }
            case "not_multiple_of":
                return "عدد نامعتبر: باید مضرب ".concat(issue.divisor, " باشد");
            case "unrecognized_keys":
                return "کلید".concat(issue.keys.length > 1 ? "های" : "", " ناشناس: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "کلید ناشناس در ".concat(issue.origin);
            case "invalid_union":
                return "ورودی نامعتبر";
            case "invalid_element":
                return "مقدار نامعتبر در ".concat(issue.origin);
            default:
                return "ورودی نامعتبر";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "merkkiä",
            subject: "merkkijonon"
        },
        file: {
            unit: "tavua",
            subject: "tiedoston"
        },
        array: {
            unit: "alkiota",
            subject: "listan"
        },
        set: {
            unit: "alkiota",
            subject: "joukon"
        },
        number: {
            unit: "",
            subject: "luvun"
        },
        bigint: {
            unit: "",
            subject: "suuren kokonaisluvun"
        },
        int: {
            unit: "",
            subject: "kokonaisluvun"
        },
        date: {
            unit: "",
            subject: "päivämäärän"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "säännöllinen lauseke",
        email: "sähköpostiosoite",
        url: "URL-osoite",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-aikaleima",
        date: "ISO-päivämäärä",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Virheellinen tyyppi: odotettiin ".concat(issue.expected, ", oli ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Virheellinen syöte: täytyy olla ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Virheellinen valinta: täytyy olla yksi seuraavista: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Liian suuri: ".concat(sizing.subject, " täytyy olla ").concat(adj).concat(issue.maximum.toString(), " ").concat(sizing.unit).trim();
                    }
                    return "Liian suuri: arvon täytyy olla ".concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Liian pieni: ".concat(sizing.subject, " täytyy olla ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit).trim();
                    }
                    return "Liian pieni: arvon täytyy olla ".concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Virheellinen syöte: täytyy alkaa "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Virheellinen syöte: täytyy loppua "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Virheellinen syöte: täytyy sisältää "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") {
                        return "Virheellinen syöte: täytyy vastata säännöllistä lauseketta ".concat(_issue.pattern);
                    }
                    var _Nouns__issue_format;
                    return "Virheellinen ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Virheellinen luku: täytyy olla luvun ".concat(issue.divisor, " monikerta");
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Virheellinen avain tietueessa";
            case "invalid_union":
                return "Virheellinen unioni";
            case "invalid_element":
                return "Virheellinen arvo joukossa";
            default:
                return "Virheellinen syöte";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caractères",
            verb: "avoir"
        },
        file: {
            unit: "octets",
            verb: "avoir"
        },
        array: {
            unit: "éléments",
            verb: "avoir"
        },
        set: {
            unit: "éléments",
            verb: "avoir"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "nombre";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tableau";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date et heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Entrée invalide : ".concat(issue.expected, " attendu, ").concat(parsedType(issue.input), " reçu");
            case "invalid_value":
                if (issue.values.length === 1) return "Entrée invalide : ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " attendu");
                return "Option invalide : une valeur parmi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " attendue");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Trop grand : ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valeur", " doit ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "élément(s)");
                    var _issue_origin1;
                    return "Trop grand : ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valeur", " doit être ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Trop petit : ".concat(issue.origin, " doit ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Trop petit : ".concat(issue.origin, " doit être ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Chaîne invalide : doit commencer par "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Chaîne invalide : doit se terminer par "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Chaîne invalide : doit inclure "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Chaîne invalide : doit correspondre au modèle ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " invalide");
                }
            case "not_multiple_of":
                return "Nombre invalide : doit être un multiple de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Clé".concat(issue.keys.length > 1 ? "s" : "", " non reconnue").concat(issue.keys.length > 1 ? "s" : "", " : ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Clé invalide dans ".concat(issue.origin);
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return "Valeur invalide dans ".concat(issue.origin);
            default:
                return "Entrée invalide";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fr-CA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caractères",
            verb: "avoir"
        },
        file: {
            unit: "octets",
            verb: "avoir"
        },
        array: {
            unit: "éléments",
            verb: "avoir"
        },
        set: {
            unit: "éléments",
            verb: "avoir"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse courriel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Entrée invalide : attendu ".concat(issue.expected, ", reçu ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Entrée invalide : attendu ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Option invalide : attendu l'une des valeurs suivantes ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "≤" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin;
                    if (sizing) return "Trop grand : attendu que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "la valeur", " ait ").concat(adj).concat(issue.maximum.toString(), " ").concat(sizing.unit);
                    var _issue_origin1;
                    return "Trop grand : attendu que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "la valeur", " soit ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "≥" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Trop petit : attendu que ".concat(issue.origin, " ait ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Trop petit : attendu que ".concat(issue.origin, " soit ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Chaîne invalide : doit commencer par "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Chaîne invalide : doit se terminer par "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Chaîne invalide : doit inclure "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Chaîne invalide : doit correspondre au motif ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " invalide");
                }
            case "not_multiple_of":
                return "Nombre invalide : doit être un multiple de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Clé".concat(issue.keys.length > 1 ? "s" : "", " non reconnue").concat(issue.keys.length > 1 ? "s" : "", " : ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Clé invalide dans ".concat(issue.origin);
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return "Valeur invalide dans ".concat(issue.origin);
            default:
                return "Entrée invalide";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/he.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "אותיות",
            verb: "לכלול"
        },
        file: {
            unit: "בייטים",
            verb: "לכלול"
        },
        array: {
            unit: "פריטים",
            verb: "לכלול"
        },
        set: {
            unit: "פריטים",
            verb: "לכלול"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "קלט",
        email: "כתובת אימייל",
        url: "כתובת רשת",
        emoji: "אימוג'י",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "תאריך וזמן ISO",
        date: "תאריך ISO",
        time: "זמן ISO",
        duration: "משך זמן ISO",
        ipv4: "כתובת IPv4",
        ipv6: "כתובת IPv6",
        cidrv4: "טווח IPv4",
        cidrv6: "טווח IPv6",
        base64: "מחרוזת בבסיס 64",
        base64url: "מחרוזת בבסיס 64 לכתובות רשת",
        json_string: "מחרוזת JSON",
        e164: "מספר E.164",
        jwt: "JWT",
        template_literal: "קלט"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "קלט לא תקין: צריך ".concat(issue.expected, ", התקבל ").concat(parsedType(issue.input));
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "קלט לא תקין: צריך ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "קלט לא תקין: צריך אחת מהאפשרויות  ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "גדול מדי: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " צריך להיות ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements");
                    var _issue_origin1;
                    return "גדול מדי: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " צריך להיות ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "קטן מדי: ".concat(issue.origin, " צריך להיות ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "קטן מדי: ".concat(issue.origin, " צריך להיות ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'מחרוזת לא תקינה: חייבת להתחיל ב"'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'מחרוזת לא תקינה: חייבת להסתיים ב "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'מחרוזת לא תקינה: חייבת לכלול "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "מחרוזת לא תקינה: חייבת להתאים לתבנית ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " לא תקין");
                }
            case "not_multiple_of":
                return "מספר לא תקין: חייב להיות מכפלה של ".concat(issue.divisor);
            case "unrecognized_keys":
                return "מפתח".concat(issue.keys.length > 1 ? "ות" : "", " לא מזוה").concat(issue.keys.length > 1 ? "ים" : "ה", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "מפתח לא תקין ב".concat(issue.origin);
            case "invalid_union":
                return "קלט לא תקין";
            case "invalid_element":
                return "ערך לא תקין ב".concat(issue.origin);
            default:
                return "קלט לא תקין";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/hu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karakter",
            verb: "legyen"
        },
        file: {
            unit: "byte",
            verb: "legyen"
        },
        array: {
            unit: "elem",
            verb: "legyen"
        },
        set: {
            unit: "elem",
            verb: "legyen"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "szám";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tömb";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "bemenet",
        email: "email cím",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO időbélyeg",
        date: "ISO dátum",
        time: "ISO idő",
        duration: "ISO időintervallum",
        ipv4: "IPv4 cím",
        ipv6: "IPv6 cím",
        cidrv4: "IPv4 tartomány",
        cidrv6: "IPv6 tartomány",
        base64: "base64-kódolt string",
        base64url: "base64url-kódolt string",
        json_string: "JSON string",
        e164: "E.164 szám",
        jwt: "JWT",
        template_literal: "bemenet"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Érvénytelen bemenet: a várt érték ".concat(issue.expected, ", a kapott érték ").concat(parsedType(issue.input));
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Érvénytelen bemenet: a várt érték ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Érvénytelen opció: valamelyik érték várt ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Túl nagy: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "érték", " mérete túl nagy ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elem");
                    var _issue_origin1;
                    return "Túl nagy: a bemeneti érték ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "érték", " túl nagy: ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Túl kicsi: a bemeneti érték ".concat(issue.origin, " mérete túl kicsi ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Túl kicsi: a bemeneti érték ".concat(issue.origin, " túl kicsi ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Érvénytelen string: "'.concat(_issue.prefix, '" értékkel kell kezdődnie');
                    if (_issue.format === "ends_with") return 'Érvénytelen string: "'.concat(_issue.suffix, '" értékkel kell végződnie');
                    if (_issue.format === "includes") return 'Érvénytelen string: "'.concat(_issue.includes, '" értéket kell tartalmaznia');
                    if (_issue.format === "regex") return "Érvénytelen string: ".concat(_issue.pattern, " mintának kell megfelelnie");
                    var _Nouns__issue_format;
                    return "Érvénytelen ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Érvénytelen szám: ".concat(issue.divisor, " többszörösének kell lennie");
            case "unrecognized_keys":
                return "Ismeretlen kulcs".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Érvénytelen kulcs ".concat(issue.origin);
            case "invalid_union":
                return "Érvénytelen bemenet";
            case "invalid_element":
                return "Érvénytelen érték: ".concat(issue.origin);
            default:
                return "Érvénytelen bemenet";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/id.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karakter",
            verb: "memiliki"
        },
        file: {
            unit: "byte",
            verb: "memiliki"
        },
        array: {
            unit: "item",
            verb: "memiliki"
        },
        set: {
            unit: "item",
            verb: "memiliki"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Input tidak valid: diharapkan ".concat(issue.expected, ", diterima ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Input tidak valid: diharapkan ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Pilihan tidak valid: diharapkan salah satu dari ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Terlalu besar: diharapkan ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " memiliki ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elemen");
                    var _issue_origin1;
                    return "Terlalu besar: diharapkan ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " menjadi ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Terlalu kecil: diharapkan ".concat(issue.origin, " memiliki ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Terlalu kecil: diharapkan ".concat(issue.origin, " menjadi ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'String tidak valid: harus dimulai dengan "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'String tidak valid: harus berakhir dengan "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'String tidak valid: harus menyertakan "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "String tidak valid: harus sesuai pola ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " tidak valid");
                }
            case "not_multiple_of":
                return "Angka tidak valid: harus kelipatan dari ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Kunci tidak dikenali ".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Kunci tidak valid di ".concat(issue.origin);
            case "invalid_union":
                return "Input tidak valid";
            case "invalid_element":
                return "Nilai tidak valid di ".concat(issue.origin);
            default:
                return "Input tidak valid";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "númer";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "fylki";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "stafi",
            verb: "að hafa"
        },
        file: {
            unit: "bæti",
            verb: "að hafa"
        },
        array: {
            unit: "hluti",
            verb: "að hafa"
        },
        set: {
            unit: "hluti",
            verb: "að hafa"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "gildi",
        email: "netfang",
        url: "vefslóð",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dagsetning og tími",
        date: "ISO dagsetning",
        time: "ISO tími",
        duration: "ISO tímalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 tölugildi",
        jwt: "JWT",
        template_literal: "gildi"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Rangt gildi: Þú slóst inn ".concat(parsedType(issue.input), " þar sem á að vera ").concat(issue.expected);
            case "invalid_value":
                if (issue.values.length === 1) return "Rangt gildi: gert ráð fyrir ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ógilt val: má vera eitt af eftirfarandi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Of stórt: gert er ráð fyrir að ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "gildi", " hafi ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "hluti");
                    var _issue_origin1;
                    return "Of stórt: gert er ráð fyrir að ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "gildi", " sé ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Of lítið: gert er ráð fyrir að ".concat(issue.origin, " hafi ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Of lítið: gert er ráð fyrir að ".concat(issue.origin, " sé ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Ógildur strengur: verður að byrja á "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Ógildur strengur: verður að enda á "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ógildur strengur: verður að innihalda "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ógildur strengur: verður að fylgja mynstri ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Rangt ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Röng tala: verður að vera margfeldi af ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Óþekkt ".concat(issue.keys.length > 1 ? "ir lyklar" : "ur lykill", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Rangur lykill í ".concat(issue.origin);
            case "invalid_union":
                return "Rangt gildi";
            case "invalid_element":
                return "Rangt gildi í ".concat(issue.origin);
            default:
                return "Rangt gildi";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/it.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caratteri",
            verb: "avere"
        },
        file: {
            unit: "byte",
            verb: "avere"
        },
        array: {
            unit: "elementi",
            verb: "avere"
        },
        set: {
            unit: "elementi",
            verb: "avere"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "numero";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "vettore";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "indirizzo email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Input non valido: atteso ".concat(issue.expected, ", ricevuto ").concat(parsedType(issue.input));
            // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Input non valido: atteso ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opzione non valida: atteso uno tra ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Troppo grande: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valore", " deve avere ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementi");
                    var _issue_origin1;
                    return "Troppo grande: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valore", " deve essere ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Troppo piccolo: ".concat(issue.origin, " deve avere ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Troppo piccolo: ".concat(issue.origin, " deve essere ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Stringa non valida: deve iniziare con "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Stringa non valida: deve terminare con "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Stringa non valida: deve includere "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Stringa non valida: deve corrispondere al pattern ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Invalid ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Numero non valido: deve essere un multiplo di ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Chiav".concat(issue.keys.length > 1 ? "i" : "e", " non riconosciut").concat(issue.keys.length > 1 ? "e" : "a", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Chiave non valida in ".concat(issue.origin);
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return "Valore non valido in ".concat(issue.origin);
            default:
                return "Input non valido";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ja.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "文字",
            verb: "である"
        },
        file: {
            unit: "バイト",
            verb: "である"
        },
        array: {
            unit: "要素",
            verb: "である"
        },
        set: {
            unit: "要素",
            verb: "である"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "数値";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "配列";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "入力値",
        email: "メールアドレス",
        url: "URL",
        emoji: "絵文字",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日時",
        date: "ISO日付",
        time: "ISO時刻",
        duration: "ISO期間",
        ipv4: "IPv4アドレス",
        ipv6: "IPv6アドレス",
        cidrv4: "IPv4範囲",
        cidrv6: "IPv6範囲",
        base64: "base64エンコード文字列",
        base64url: "base64urlエンコード文字列",
        json_string: "JSON文字列",
        e164: "E.164番号",
        jwt: "JWT",
        template_literal: "入力値"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "無効な入力: ".concat(issue.expected, "が期待されましたが、").concat(parsedType(issue.input), "が入力されました");
            case "invalid_value":
                if (issue.values.length === 1) return "無効な入力: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), "が期待されました");
                return "無効な選択: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "、"), "のいずれかである必要があります");
            case "too_big":
                {
                    const adj = issue.inclusive ? "以下である" : "より小さい";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "大きすぎる値: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "値", "は").concat(issue.maximum.toString()).concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "要素").concat(adj, "必要があります");
                    var _issue_origin1;
                    return "大きすぎる値: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "値", "は").concat(issue.maximum.toString()).concat(adj, "必要があります");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "以上である" : "より大きい";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "小さすぎる値: ".concat(issue.origin, "は").concat(issue.minimum.toString()).concat(sizing.unit).concat(adj, "必要があります");
                    return "小さすぎる値: ".concat(issue.origin, "は").concat(issue.minimum.toString()).concat(adj, "必要があります");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return '無効な文字列: "'.concat(_issue.prefix, '"で始まる必要があります');
                    if (_issue.format === "ends_with") return '無効な文字列: "'.concat(_issue.suffix, '"で終わる必要があります');
                    if (_issue.format === "includes") return '無効な文字列: "'.concat(_issue.includes, '"を含む必要があります');
                    if (_issue.format === "regex") return "無効な文字列: パターン".concat(_issue.pattern, "に一致する必要があります");
                    var _Nouns__issue_format;
                    return "無効な".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "無効な数値: ".concat(issue.divisor, "の倍数である必要があります");
            case "unrecognized_keys":
                return "認識されていないキー".concat(issue.keys.length > 1 ? "群" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "、"));
            case "invalid_key":
                return "".concat(issue.origin, "内の無効なキー");
            case "invalid_union":
                return "無効な入力";
            case "invalid_element":
                return "".concat(issue.origin, "内の無効な値");
            default:
                return "無効な入力";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ka.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "რიცხვი";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "მასივი";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    const typeMap = {
        string: "სტრინგი",
        boolean: "ბულეანი",
        undefined: "undefined",
        bigint: "bigint",
        symbol: "symbol",
        function: "ფუნქცია"
    };
    var _typeMap_t;
    return (_typeMap_t = typeMap[t]) !== null && _typeMap_t !== void 0 ? _typeMap_t : t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "სიმბოლო",
            verb: "უნდა შეიცავდეს"
        },
        file: {
            unit: "ბაიტი",
            verb: "უნდა შეიცავდეს"
        },
        array: {
            unit: "ელემენტი",
            verb: "უნდა შეიცავდეს"
        },
        set: {
            unit: "ელემენტი",
            verb: "უნდა შეიცავდეს"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "შეყვანა",
        email: "ელ-ფოსტის მისამართი",
        url: "URL",
        emoji: "ემოჯი",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "თარიღი-დრო",
        date: "თარიღი",
        time: "დრო",
        duration: "ხანგრძლივობა",
        ipv4: "IPv4 მისამართი",
        ipv6: "IPv6 მისამართი",
        cidrv4: "IPv4 დიაპაზონი",
        cidrv6: "IPv6 დიაპაზონი",
        base64: "base64-კოდირებული სტრინგი",
        base64url: "base64url-კოდირებული სტრინგი",
        json_string: "JSON სტრინგი",
        e164: "E.164 ნომერი",
        jwt: "JWT",
        template_literal: "შეყვანა"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "არასწორი შეყვანა: მოსალოდნელი ".concat(issue.expected, ", მიღებული ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "არასწორი შეყვანა: მოსალოდნელი ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), "-დან");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin;
                    if (sizing) return "ზედმეტად დიდი: მოსალოდნელი ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "მნიშვნელობა", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat(sizing.unit);
                    var _issue_origin1;
                    return "ზედმეტად დიდი: მოსალოდნელი ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "მნიშვნელობა", " იყოს ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "ზედმეტად პატარა: მოსალოდნელი ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "ზედმეტად პატარა: მოსალოდნელი ".concat(issue.origin, " იყოს ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'არასწორი სტრინგი: უნდა იწყებოდეს "'.concat(_issue.prefix, '"-ით');
                    }
                    if (_issue.format === "ends_with") return 'არასწორი სტრინგი: უნდა მთავრდებოდეს "'.concat(_issue.suffix, '"-ით');
                    if (_issue.format === "includes") return 'არასწორი სტრინგი: უნდა შეიცავდეს "'.concat(_issue.includes, '"-ს');
                    if (_issue.format === "regex") return "არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "არასწორი ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "არასწორი რიცხვი: უნდა იყოს ".concat(issue.divisor, "-ის ჯერადი");
            case "unrecognized_keys":
                return "უცნობი გასაღებ".concat(issue.keys.length > 1 ? "ები" : "ი", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "არასწორი გასაღები ".concat(issue.origin, "-ში");
            case "invalid_union":
                return "არასწორი შეყვანა";
            case "invalid_element":
                return "არასწორი მნიშვნელობა ".concat(issue.origin, "-ში");
            default:
                return "არასწორი შეყვანა";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/km.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "តួអក្សរ",
            verb: "គួរមាន"
        },
        file: {
            unit: "បៃ",
            verb: "គួរមាន"
        },
        array: {
            unit: "ធាតុ",
            verb: "គួរមាន"
        },
        set: {
            unit: "ធាតុ",
            verb: "គួរមាន"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "អារេ (Array)";
                    }
                    if (data === null) {
                        return "គ្មានតម្លៃ (null)";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ទិន្នន័យបញ្ចូល",
        email: "អាសយដ្ឋានអ៊ីមែល",
        url: "URL",
        emoji: "សញ្ញាអារម្មណ៍",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
        date: "កាលបរិច្ឆេទ ISO",
        time: "ម៉ោង ISO",
        duration: "រយៈពេល ISO",
        ipv4: "អាសយដ្ឋាន IPv4",
        ipv6: "អាសយដ្ឋាន IPv6",
        cidrv4: "ដែនអាសយដ្ឋាន IPv4",
        cidrv6: "ដែនអាសយដ្ឋាន IPv6",
        base64: "ខ្សែអក្សរអ៊ិកូដ base64",
        base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
        json_string: "ខ្សែអក្សរ JSON",
        e164: "លេខ E.164",
        jwt: "JWT",
        template_literal: "ទិន្នន័យបញ្ចូល"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ".concat(issue.expected, " ប៉ុន្តែទទួលបាន ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "ធំពេក៖ ត្រូវការ ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "តម្លៃ", " ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "ធាតុ");
                    var _issue_origin1;
                    return "ធំពេក៖ ត្រូវការ ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "តម្លៃ", " ").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "តូចពេក៖ ត្រូវការ ".concat(issue.origin, " ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "តូចពេក៖ ត្រូវការ ".concat(issue.origin, " ").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "មិនត្រឹមត្រូវ៖ ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ".concat(issue.divisor);
            case "unrecognized_keys":
                return "រកឃើញសោមិនស្គាល់៖ ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "សោមិនត្រឹមត្រូវនៅក្នុង ".concat(issue.origin);
            case "invalid_union":
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
            case "invalid_element":
                return "ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ".concat(issue.origin);
            default:
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/kh.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$km$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/km.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$km$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ko.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "문자",
            verb: "to have"
        },
        file: {
            unit: "바이트",
            verb: "to have"
        },
        array: {
            unit: "개",
            verb: "to have"
        },
        set: {
            unit: "개",
            verb: "to have"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "입력",
        email: "이메일 주소",
        url: "URL",
        emoji: "이모지",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 날짜시간",
        date: "ISO 날짜",
        time: "ISO 시간",
        duration: "ISO 기간",
        ipv4: "IPv4 주소",
        ipv6: "IPv6 주소",
        cidrv4: "IPv4 범위",
        cidrv6: "IPv6 범위",
        base64: "base64 인코딩 문자열",
        base64url: "base64url 인코딩 문자열",
        json_string: "JSON 문자열",
        e164: "E.164 번호",
        jwt: "JWT",
        template_literal: "입력"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "잘못된 입력: 예상 타입은 ".concat(issue.expected, ", 받은 타입은 ").concat(parsedType(issue.input), "입니다");
            case "invalid_value":
                if (issue.values.length === 1) return "잘못된 입력: 값은 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " 이어야 합니다");
                return "잘못된 옵션: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "또는 "), " 중 하나여야 합니다");
            case "too_big":
                {
                    const adj = issue.inclusive ? "이하" : "미만";
                    const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
                    const sizing = getSizing(issue.origin);
                    var _sizing_unit;
                    const unit = (_sizing_unit = sizing === null || sizing === void 0 ? void 0 : sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "요소";
                    var _issue_origin;
                    if (sizing) return "".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "값", "이 너무 큽니다: ").concat(issue.maximum.toString()).concat(unit, " ").concat(adj).concat(suffix);
                    var _issue_origin1;
                    return "".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "값", "이 너무 큽니다: ").concat(issue.maximum.toString(), " ").concat(adj).concat(suffix);
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "이상" : "초과";
                    const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
                    const sizing = getSizing(issue.origin);
                    var _sizing_unit1;
                    const unit = (_sizing_unit1 = sizing === null || sizing === void 0 ? void 0 : sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "요소";
                    if (sizing) {
                        var _issue_origin2;
                        return "".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "값", "이 너무 작습니다: ").concat(issue.minimum.toString()).concat(unit, " ").concat(adj).concat(suffix);
                    }
                    var _issue_origin3;
                    return "".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "값", "이 너무 작습니다: ").concat(issue.minimum.toString(), " ").concat(adj).concat(suffix);
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return '잘못된 문자열: "'.concat(_issue.prefix, '"(으)로 시작해야 합니다');
                    }
                    if (_issue.format === "ends_with") return '잘못된 문자열: "'.concat(_issue.suffix, '"(으)로 끝나야 합니다');
                    if (_issue.format === "includes") return '잘못된 문자열: "'.concat(_issue.includes, '"을(를) 포함해야 합니다');
                    if (_issue.format === "regex") return "잘못된 문자열: 정규식 ".concat(_issue.pattern, " 패턴과 일치해야 합니다");
                    var _Nouns__issue_format;
                    return "잘못된 ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "잘못된 숫자: ".concat(issue.divisor, "의 배수여야 합니다");
            case "unrecognized_keys":
                return "인식할 수 없는 키: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "잘못된 키: ".concat(issue.origin);
            case "invalid_union":
                return "잘못된 입력";
            case "invalid_element":
                return "잘못된 값: ".concat(issue.origin);
            default:
                return "잘못된 입력";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/lt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    return parsedTypeFromType(t, data);
};
const parsedTypeFromType = function(t) {
    let data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "skaičius";
            }
        case "bigint":
            {
                return "sveikasis skaičius";
            }
        case "string":
            {
                return "eilutė";
            }
        case "boolean":
            {
                return "loginė reikšmė";
            }
        case "undefined":
        case "void":
            {
                return "neapibrėžta reikšmė";
            }
        case "function":
            {
                return "funkcija";
            }
        case "symbol":
            {
                return "simbolis";
            }
        case "object":
            {
                if (data === undefined) return "nežinomas objektas";
                if (data === null) return "nulinė reikšmė";
                if (Array.isArray(data)) return "masyvas";
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
                return "objektas";
            }
        //Zod types below
        case "null":
            {
                return "nulinė reikšmė";
            }
    }
    return t;
};
const capitalizeFirstCharacter = (text)=>{
    return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number) {
    const abs = Math.abs(number);
    const last = abs % 10;
    const last2 = abs % 100;
    if (last2 >= 11 && last2 <= 19 || last === 0) return "many";
    if (last === 1) return "one";
    return "few";
}
const error = ()=>{
    const Sizable = {
        string: {
            unit: {
                one: "simbolis",
                few: "simboliai",
                many: "simbolių"
            },
            verb: {
                smaller: {
                    inclusive: "turi būti ne ilgesnė kaip",
                    notInclusive: "turi būti trumpesnė kaip"
                },
                bigger: {
                    inclusive: "turi būti ne trumpesnė kaip",
                    notInclusive: "turi būti ilgesnė kaip"
                }
            }
        },
        file: {
            unit: {
                one: "baitas",
                few: "baitai",
                many: "baitų"
            },
            verb: {
                smaller: {
                    inclusive: "turi būti ne didesnis kaip",
                    notInclusive: "turi būti mažesnis kaip"
                },
                bigger: {
                    inclusive: "turi būti ne mažesnis kaip",
                    notInclusive: "turi būti didesnis kaip"
                }
            }
        },
        array: {
            unit: {
                one: "elementą",
                few: "elementus",
                many: "elementų"
            },
            verb: {
                smaller: {
                    inclusive: "turi turėti ne daugiau kaip",
                    notInclusive: "turi turėti mažiau kaip"
                },
                bigger: {
                    inclusive: "turi turėti ne mažiau kaip",
                    notInclusive: "turi turėti daugiau kaip"
                }
            }
        },
        set: {
            unit: {
                one: "elementą",
                few: "elementus",
                many: "elementų"
            },
            verb: {
                smaller: {
                    inclusive: "turi turėti ne daugiau kaip",
                    notInclusive: "turi turėti mažiau kaip"
                },
                bigger: {
                    inclusive: "turi turėti ne mažiau kaip",
                    notInclusive: "turi turėti daugiau kaip"
                }
            }
        }
    };
    function getSizing(origin, unitType, inclusive, targetShouldBe) {
        var _Sizable_origin;
        const result = (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
        if (result === null) return result;
        return {
            unit: result.unit[unitType],
            verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
        };
    }
    const Nouns = {
        regex: "įvestis",
        email: "el. pašto adresas",
        url: "URL",
        emoji: "jaustukas",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO data ir laikas",
        date: "ISO data",
        time: "ISO laikas",
        duration: "ISO trukmė",
        ipv4: "IPv4 adresas",
        ipv6: "IPv6 adresas",
        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
        base64: "base64 užkoduota eilutė",
        base64url: "base64url užkoduota eilutė",
        json_string: "JSON eilutė",
        e164: "E.164 numeris",
        jwt: "JWT",
        template_literal: "įvestis"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Gautas tipas ".concat(parsedType(issue.input), ", o tikėtasi - ").concat(parsedTypeFromType(issue.expected));
            case "invalid_value":
                if (issue.values.length === 1) return "Privalo būti ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Privalo būti vienas iš ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " pasirinkimų");
            case "too_big":
                {
                    const origin = parsedTypeFromType(issue.origin);
                    var _issue_inclusive;
                    const sizing = getSizing(issue.origin, getUnitTypeFromNumber(Number(issue.maximum)), (_issue_inclusive = issue.inclusive) !== null && _issue_inclusive !== void 0 ? _issue_inclusive : false, "smaller");
                    var _ref, _sizing_unit;
                    if (sizing === null || sizing === void 0 ? void 0 : sizing.verb) return "".concat(capitalizeFirstCharacter((_ref = origin !== null && origin !== void 0 ? origin : issue.origin) !== null && _ref !== void 0 ? _ref : "reikšmė"), " ").concat(sizing.verb, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementų");
                    const adj = issue.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
                    var _ref1;
                    return "".concat(capitalizeFirstCharacter((_ref1 = origin !== null && origin !== void 0 ? origin : issue.origin) !== null && _ref1 !== void 0 ? _ref1 : "reikšmė"), " turi būti ").concat(adj, " ").concat(issue.maximum.toString(), " ").concat(sizing === null || sizing === void 0 ? void 0 : sizing.unit);
                }
            case "too_small":
                {
                    const origin = parsedTypeFromType(issue.origin);
                    var _issue_inclusive1;
                    const sizing = getSizing(issue.origin, getUnitTypeFromNumber(Number(issue.minimum)), (_issue_inclusive1 = issue.inclusive) !== null && _issue_inclusive1 !== void 0 ? _issue_inclusive1 : false, "bigger");
                    var _ref2, _sizing_unit1;
                    if (sizing === null || sizing === void 0 ? void 0 : sizing.verb) return "".concat(capitalizeFirstCharacter((_ref2 = origin !== null && origin !== void 0 ? origin : issue.origin) !== null && _ref2 !== void 0 ? _ref2 : "reikšmė"), " ").concat(sizing.verb, " ").concat(issue.minimum.toString(), " ").concat((_sizing_unit1 = sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "elementų");
                    const adj = issue.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
                    var _ref3;
                    return "".concat(capitalizeFirstCharacter((_ref3 = origin !== null && origin !== void 0 ? origin : issue.origin) !== null && _ref3 !== void 0 ? _ref3 : "reikšmė"), " turi būti ").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing === null || sizing === void 0 ? void 0 : sizing.unit);
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Eilutė privalo prasidėti "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Eilutė privalo pasibaigti "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Eilutė privalo įtraukti "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Eilutė privalo atitikti ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Neteisingas ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Skaičius privalo būti ".concat(issue.divisor, " kartotinis.");
            case "unrecognized_keys":
                return "Neatpažint".concat(issue.keys.length > 1 ? "i" : "as", " rakt").concat(issue.keys.length > 1 ? "ai" : "as", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Rastas klaidingas raktas";
            case "invalid_union":
                return "Klaidinga įvestis";
            case "invalid_element":
                {
                    const origin = parsedTypeFromType(issue.origin);
                    var _ref4;
                    return "".concat(capitalizeFirstCharacter((_ref4 = origin !== null && origin !== void 0 ? origin : issue.origin) !== null && _ref4 !== void 0 ? _ref4 : "reikšmė"), " turi klaidingą įvestį");
                }
            default:
                return "Klaidinga įvestis";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/mk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "знаци",
            verb: "да имаат"
        },
        file: {
            unit: "бајти",
            verb: "да имаат"
        },
        array: {
            unit: "ставки",
            verb: "да имаат"
        },
        set: {
            unit: "ставки",
            verb: "да имаат"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "број";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "низа";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "внес",
        email: "адреса на е-пошта",
        url: "URL",
        emoji: "емоџи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO датум и време",
        date: "ISO датум",
        time: "ISO време",
        duration: "ISO времетраење",
        ipv4: "IPv4 адреса",
        ipv6: "IPv6 адреса",
        cidrv4: "IPv4 опсег",
        cidrv6: "IPv6 опсег",
        base64: "base64-енкодирана низа",
        base64url: "base64url-енкодирана низа",
        json_string: "JSON низа",
        e164: "E.164 број",
        jwt: "JWT",
        template_literal: "внес"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Грешен внес: се очекува ".concat(issue.expected, ", примено ").concat(parsedType(issue.input));
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Invalid input: expected ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Грешана опција: се очекува една ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Премногу голем: се очекува ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "вредноста", " да има ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "елементи");
                    var _issue_origin1;
                    return "Премногу голем: се очекува ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "вредноста", " да биде ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Премногу мал: се очекува ".concat(issue.origin, " да има ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Премногу мал: се очекува ".concat(issue.origin, " да биде ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Неважечка низа: мора да започнува со "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Неважечка низа: мора да завршува со "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Неважечка низа: мора да вклучува "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Неважечка низа: мора да одгоара на патернот ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Invalid ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Грешен број: мора да биде делив со ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Грешен клуч во ".concat(issue.origin);
            case "invalid_union":
                return "Грешен внес";
            case "invalid_element":
                return "Грешна вредност во ".concat(issue.origin);
            default:
                return "Грешен внес";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ms.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "aksara",
            verb: "mempunyai"
        },
        file: {
            unit: "bait",
            verb: "mempunyai"
        },
        array: {
            unit: "elemen",
            verb: "mempunyai"
        },
        set: {
            unit: "elemen",
            verb: "mempunyai"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "nombor";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Input tidak sah: dijangka ".concat(issue.expected, ", diterima ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Input tidak sah: dijangka ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Pilihan tidak sah: dijangka salah satu daripada ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Terlalu besar: dijangka ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "nilai", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elemen");
                    var _issue_origin1;
                    return "Terlalu besar: dijangka ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "nilai", " adalah ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Terlalu kecil: dijangka ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Terlalu kecil: dijangka ".concat(issue.origin, " adalah ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'String tidak sah: mesti bermula dengan "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'String tidak sah: mesti berakhir dengan "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'String tidak sah: mesti mengandungi "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "String tidak sah: mesti sepadan dengan corak ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " tidak sah");
                }
            case "not_multiple_of":
                return "Nombor tidak sah: perlu gandaan ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Kunci tidak dikenali: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Kunci tidak sah dalam ".concat(issue.origin);
            case "invalid_union":
                return "Input tidak sah";
            case "invalid_element":
                return "Nilai tidak sah dalam ".concat(issue.origin);
            default:
                return "Input tidak sah";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/nl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tekens"
        },
        file: {
            unit: "bytes"
        },
        array: {
            unit: "elementen"
        },
        set: {
            unit: "elementen"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "getal";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "invoer",
        email: "emailadres",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ongeldige invoer: verwacht ".concat(issue.expected, ", ontving ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ongeldige invoer: verwacht ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ongeldige optie: verwacht één van ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Te lang: verwacht dat ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "waarde", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementen", " bevat");
                    var _issue_origin1;
                    return "Te lang: verwacht dat ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "waarde", " ").concat(adj).concat(issue.maximum.toString(), " is");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Te kort: verwacht dat ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " bevat");
                    }
                    return "Te kort: verwacht dat ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " is");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Ongeldige tekst: moet met "'.concat(_issue.prefix, '" beginnen');
                    }
                    if (_issue.format === "ends_with") return 'Ongeldige tekst: moet op "'.concat(_issue.suffix, '" eindigen');
                    if (_issue.format === "includes") return 'Ongeldige tekst: moet "'.concat(_issue.includes, '" bevatten');
                    if (_issue.format === "regex") return "Ongeldige tekst: moet overeenkomen met patroon ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Ongeldig: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ongeldig getal: moet een veelvoud van ".concat(issue.divisor, " zijn");
            case "unrecognized_keys":
                return "Onbekende key".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ongeldige key in ".concat(issue.origin);
            case "invalid_union":
                return "Ongeldige invoer";
            case "invalid_element":
                return "Ongeldige waarde in ".concat(issue.origin);
            default:
                return "Ongeldige invoer";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/no.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tegn",
            verb: "å ha"
        },
        file: {
            unit: "bytes",
            verb: "å ha"
        },
        array: {
            unit: "elementer",
            verb: "å inneholde"
        },
        set: {
            unit: "elementer",
            verb: "å inneholde"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "tall";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "liste";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ugyldig input: forventet ".concat(issue.expected, ", fikk ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ugyldig verdi: forventet ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ugyldig valg: forventet en av ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "For stor(t): forventet ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", " til å ha ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementer");
                    var _issue_origin1;
                    return "For stor(t): forventet ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", " til å ha ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "For lite(n): forventet ".concat(issue.origin, " til å ha ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "For lite(n): forventet ".concat(issue.origin, " til å ha ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ugyldig streng: må starte med "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Ugyldig streng: må ende med "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ugyldig streng: må inneholde "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ugyldig streng: må matche mønsteret ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Ugyldig ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ugyldig tall: må være et multiplum av ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Ugyldig nøkkel i ".concat(issue.origin);
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return "Ugyldig verdi i ".concat(issue.origin);
            default:
                return "Ugyldig input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ota.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "harf",
            verb: "olmalıdır"
        },
        file: {
            unit: "bayt",
            verb: "olmalıdır"
        },
        array: {
            unit: "unsur",
            verb: "olmalıdır"
        },
        set: {
            unit: "unsur",
            verb: "olmalıdır"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "numara";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "saf";
                    }
                    if (data === null) {
                        return "gayb";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "giren",
        email: "epostagâh",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO hengâmı",
        date: "ISO tarihi",
        time: "ISO zamanı",
        duration: "ISO müddeti",
        ipv4: "IPv4 nişânı",
        ipv6: "IPv6 nişânı",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-şifreli metin",
        base64url: "base64url-şifreli metin",
        json_string: "JSON metin",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "giren"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Fâsit giren: umulan ".concat(issue.expected, ", alınan ").concat(parsedType(issue.input));
            // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Fâsit giren: umulan ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Fâsit tercih: mûteberler ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Fazla büyük: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "value", ", ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elements", " sahip olmalıydı.");
                    var _issue_origin1;
                    return "Fazla büyük: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "value", ", ").concat(adj).concat(issue.maximum.toString(), " olmalıydı.");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Fazla küçük: ".concat(issue.origin, ", ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " sahip olmalıydı.");
                    }
                    return "Fazla küçük: ".concat(issue.origin, ", ").concat(adj).concat(issue.minimum.toString(), " olmalıydı.");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Fâsit metin: "'.concat(_issue.prefix, '" ile başlamalı.');
                    if (_issue.format === "ends_with") return 'Fâsit metin: "'.concat(_issue.suffix, '" ile bitmeli.');
                    if (_issue.format === "includes") return 'Fâsit metin: "'.concat(_issue.includes, '" ihtivâ etmeli.');
                    if (_issue.format === "regex") return "Fâsit metin: ".concat(_issue.pattern, " nakşına uymalı.");
                    var _Nouns__issue_format;
                    return "Fâsit ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Fâsit sayı: ".concat(issue.divisor, " katı olmalıydı.");
            case "unrecognized_keys":
                return "Tanınmayan anahtar ".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " için tanınmayan anahtar var.");
            case "invalid_union":
                return "Giren tanınamadı.";
            case "invalid_element":
                return "".concat(issue.origin, " için tanınmayan kıymet var.");
            default:
                return "Kıymet tanınamadı.";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "توکي",
            verb: "ولري"
        },
        file: {
            unit: "بایټس",
            verb: "ولري"
        },
        array: {
            unit: "توکي",
            verb: "ولري"
        },
        set: {
            unit: "توکي",
            verb: "ولري"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "عدد";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "ارې";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودي",
        email: "بریښنالیک",
        url: "یو آر ال",
        emoji: "ایموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "نیټه او وخت",
        date: "نېټه",
        time: "وخت",
        duration: "موده",
        ipv4: "د IPv4 پته",
        ipv6: "د IPv6 پته",
        cidrv4: "د IPv4 ساحه",
        cidrv6: "د IPv6 ساحه",
        base64: "base64-encoded متن",
        base64url: "base64url-encoded متن",
        json_string: "JSON متن",
        e164: "د E.164 شمېره",
        jwt: "JWT",
        template_literal: "ورودي"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ناسم ورودي: باید ".concat(issue.expected, " وای, مګر ").concat(parsedType(issue.input), " ترلاسه شو");
            case "invalid_value":
                if (issue.values.length === 1) {
                    return "ناسم ورودي: باید ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " وای");
                }
                return "ناسم انتخاب: باید یو له ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " څخه وای");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "ډیر لوی: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "ارزښت", " باید ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عنصرونه", " ولري");
                    }
                    var _issue_origin1;
                    return "ډیر لوی: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "ارزښت", " باید ").concat(adj).concat(issue.maximum.toString(), " وي");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "ډیر کوچنی: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " ولري");
                    }
                    return "ډیر کوچنی: ".concat(issue.origin, " باید ").concat(adj).concat(issue.minimum.toString(), " وي");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'ناسم متن: باید د "'.concat(_issue.prefix, '" سره پیل شي');
                    }
                    if (_issue.format === "ends_with") {
                        return 'ناسم متن: باید د "'.concat(_issue.suffix, '" سره پای ته ورسيږي');
                    }
                    if (_issue.format === "includes") {
                        return 'ناسم متن: باید "'.concat(_issue.includes, '" ولري');
                    }
                    if (_issue.format === "regex") {
                        return "ناسم متن: باید د ".concat(_issue.pattern, " سره مطابقت ولري");
                    }
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " ناسم دی");
                }
            case "not_multiple_of":
                return "ناسم عدد: باید د ".concat(issue.divisor, " مضرب وي");
            case "unrecognized_keys":
                return "ناسم ".concat(issue.keys.length > 1 ? "کلیډونه" : "کلیډ", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "ناسم کلیډ په ".concat(issue.origin, " کې");
            case "invalid_union":
                return "ناسمه ورودي";
            case "invalid_element":
                return "ناسم عنصر په ".concat(issue.origin, " کې");
            default:
                return "ناسمه ورودي";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/pl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "znaków",
            verb: "mieć"
        },
        file: {
            unit: "bajtów",
            verb: "mieć"
        },
        array: {
            unit: "elementów",
            verb: "mieć"
        },
        set: {
            unit: "elementów",
            verb: "mieć"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "liczba";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tablica";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "wyrażenie",
        email: "adres email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ciąg znaków zakodowany w formacie base64",
        base64url: "ciąg znaków zakodowany w formacie base64url",
        json_string: "ciąg znaków w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wejście"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Nieprawidłowe dane wejściowe: oczekiwano ".concat(issue.expected, ", otrzymano ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Nieprawidłowe dane wejściowe: oczekiwano ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Nieprawidłowa opcja: oczekiwano jednej z wartości ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "Za duża wartość: oczekiwano, że ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "wartość", " będzie mieć ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementów");
                    }
                    var _issue_origin1;
                    return "Zbyt duż(y/a/e): oczekiwano, że ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "wartość", " będzie wynosić ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin2, _sizing_unit1;
                        return "Za mała wartość: oczekiwano, że ".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "wartość", " będzie mieć ").concat(adj).concat(issue.minimum.toString(), " ").concat((_sizing_unit1 = sizing.unit) !== null && _sizing_unit1 !== void 0 ? _sizing_unit1 : "elementów");
                    }
                    var _issue_origin3;
                    return "Zbyt mał(y/a/e): oczekiwano, że ".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "wartość", " będzie wynosić ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Nieprawidłowy ciąg znaków: musi zaczynać się od "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Nieprawidłowy ciąg znaków: musi kończyć się na "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Nieprawidłowy ciąg znaków: musi zawierać "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Nieprawidłow(y/a/e) ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Nieprawidłowa liczba: musi być wielokrotnością ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Nierozpoznane klucze".concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Nieprawidłowy klucz w ".concat(issue.origin);
            case "invalid_union":
                return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
                return "Nieprawidłowa wartość w ".concat(issue.origin);
            default:
                return "Nieprawidłowe dane wejściowe";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/pt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "caracteres",
            verb: "ter"
        },
        file: {
            unit: "bytes",
            verb: "ter"
        },
        array: {
            unit: "itens",
            verb: "ter"
        },
        set: {
            unit: "itens",
            verb: "ter"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "número";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "nulo";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "padrão",
        email: "endereço de e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "duração ISO",
        ipv4: "endereço IPv4",
        ipv6: "endereço IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Tipo inválido: esperado ".concat(issue.expected, ", recebido ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Entrada inválida: esperado ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Opção inválida: esperada uma das ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Muito grande: esperado que ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "valor", " tivesse ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementos");
                    var _issue_origin1;
                    return "Muito grande: esperado que ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "valor", " fosse ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Muito pequeno: esperado que ".concat(issue.origin, " tivesse ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Muito pequeno: esperado que ".concat(issue.origin, " fosse ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Texto inválido: deve começar com "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Texto inválido: deve terminar com "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Texto inválido: deve incluir "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Texto inválido: deve corresponder ao padrão ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " inválido");
                }
            case "not_multiple_of":
                return "Número inválido: deve ser múltiplo de ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Chave".concat(issue.keys.length > 1 ? "s" : "", " desconhecida").concat(issue.keys.length > 1 ? "s" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Chave inválida em ".concat(issue.origin);
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return "Valor inválido em ".concat(issue.origin);
            default:
                return "Campo inválido";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ru.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
function getRussianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error = ()=>{
    const Sizable = {
        string: {
            unit: {
                one: "символ",
                few: "символа",
                many: "символов"
            },
            verb: "иметь"
        },
        file: {
            unit: {
                one: "байт",
                few: "байта",
                many: "байт"
            },
            verb: "иметь"
        },
        array: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов"
            },
            verb: "иметь"
        },
        set: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов"
            },
            verb: "иметь"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "число";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "массив";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ввод",
        email: "email адрес",
        url: "URL",
        emoji: "эмодзи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата и время",
        date: "ISO дата",
        time: "ISO время",
        duration: "ISO длительность",
        ipv4: "IPv4 адрес",
        ipv6: "IPv6 адрес",
        cidrv4: "IPv4 диапазон",
        cidrv6: "IPv6 диапазон",
        base64: "строка в формате base64",
        base64url: "строка в формате base64url",
        json_string: "JSON строка",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "ввод"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Неверный ввод: ожидалось ".concat(issue.expected, ", получено ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Неверный ввод: ожидалось ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Неверный вариант: ожидалось одно из ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const maxValue = Number(issue.maximum);
                        const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        var _issue_origin;
                        return "Слишком большое значение: ожидалось, что ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "значение", " будет иметь ").concat(adj).concat(issue.maximum.toString(), " ").concat(unit);
                    }
                    var _issue_origin1;
                    return "Слишком большое значение: ожидалось, что ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "значение", " будет ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        const minValue = Number(issue.minimum);
                        const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                        return "Слишком маленькое значение: ожидалось, что ".concat(issue.origin, " будет иметь ").concat(adj).concat(issue.minimum.toString(), " ").concat(unit);
                    }
                    return "Слишком маленькое значение: ожидалось, что ".concat(issue.origin, " будет ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Неверная строка: должна начинаться с "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Неверная строка: должна заканчиваться на "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Неверная строка: должна содержать "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Неверная строка: должна соответствовать шаблону ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Неверный ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Неверное число: должно быть кратным ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Нераспознанн".concat(issue.keys.length > 1 ? "ые" : "ый", " ключ").concat(issue.keys.length > 1 ? "и" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Неверный ключ в ".concat(issue.origin);
            case "invalid_union":
                return "Неверные входные данные";
            case "invalid_element":
                return "Неверное значение в ".concat(issue.origin);
            default:
                return "Неверные входные данные";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/sl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "znakov",
            verb: "imeti"
        },
        file: {
            unit: "bajtov",
            verb: "imeti"
        },
        array: {
            unit: "elementov",
            verb: "imeti"
        },
        set: {
            unit: "elementov",
            verb: "imeti"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "število";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "tabela";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "vnos",
        email: "e-poštni naslov",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum in čas",
        date: "ISO datum",
        time: "ISO čas",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 številka",
        jwt: "JWT",
        template_literal: "vnos"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Neveljaven vnos: pričakovano ".concat(issue.expected, ", prejeto ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Neveljaven vnos: pričakovano ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Neveljavna možnost: pričakovano eno izmed ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Preveliko: pričakovano, da bo ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "vrednost", " imelo ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "elementov");
                    var _issue_origin1;
                    return "Preveliko: pričakovano, da bo ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "vrednost", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Premajhno: pričakovano, da bo ".concat(issue.origin, " imelo ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Premajhno: pričakovano, da bo ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Neveljaven niz: mora se začeti z "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Neveljaven niz: mora se končati z "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Neveljaven niz: mora vsebovati "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Neveljaven niz: mora ustrezati vzorcu ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Neveljaven ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Neveljavno število: mora biti večkratnik ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Neprepoznan".concat(issue.keys.length > 1 ? "i ključi" : " ključ", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Neveljaven ključ v ".concat(issue.origin);
            case "invalid_union":
                return "Neveljaven vnos";
            case "invalid_element":
                return "Neveljavna vrednost v ".concat(issue.origin);
            default:
                return "Neveljaven vnos";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/sv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "tecken",
            verb: "att ha"
        },
        file: {
            unit: "bytes",
            verb: "att ha"
        },
        array: {
            unit: "objekt",
            verb: "att innehålla"
        },
        set: {
            unit: "objekt",
            verb: "att innehålla"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "antal";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "lista";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "reguljärt uttryck",
        email: "e-postadress",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad sträng",
        base64url: "base64url-kodad sträng",
        json_string: "JSON-sträng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ogiltig inmatning: förväntat ".concat(issue.expected, ", fick ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ogiltig inmatning: förväntat ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Ogiltigt val: förväntade en av ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "För stor(t): förväntade ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "värdet", " att ha ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "element");
                    }
                    var _issue_origin1;
                    return "För stor(t): förväntat ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "värdet", " att ha ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin2;
                        return "För lite(t): förväntade ".concat((_issue_origin2 = issue.origin) !== null && _issue_origin2 !== void 0 ? _issue_origin2 : "värdet", " att ha ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    var _issue_origin3;
                    return "För lite(t): förväntade ".concat((_issue_origin3 = issue.origin) !== null && _issue_origin3 !== void 0 ? _issue_origin3 : "värdet", " att ha ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'Ogiltig sträng: måste börja med "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'Ogiltig sträng: måste sluta med "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ogiltig sträng: måste innehålla "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return 'Ogiltig sträng: måste matcha mönstret "'.concat(_issue.pattern, '"');
                    var _Nouns__issue_format;
                    return "Ogiltig(t) ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Ogiltigt tal: måste vara en multipel av ".concat(issue.divisor);
            case "unrecognized_keys":
                return "".concat(issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                var _issue_origin4;
                return "Ogiltig nyckel i ".concat((_issue_origin4 = issue.origin) !== null && _issue_origin4 !== void 0 ? _issue_origin4 : "värdet");
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                var _issue_origin5;
                return "Ogiltigt värde i ".concat((_issue_origin5 = issue.origin) !== null && _issue_origin5 !== void 0 ? _issue_origin5 : "värdet");
            default:
                return "Ogiltig input";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "எழுத்துக்கள்",
            verb: "கொண்டிருக்க வேண்டும்"
        },
        file: {
            unit: "பைட்டுகள்",
            verb: "கொண்டிருக்க வேண்டும்"
        },
        array: {
            unit: "உறுப்புகள்",
            verb: "கொண்டிருக்க வேண்டும்"
        },
        set: {
            unit: "உறுப்புகள்",
            verb: "கொண்டிருக்க வேண்டும்"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "அணி";
                    }
                    if (data === null) {
                        return "வெறுமை";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "உள்ளீடு",
        email: "மின்னஞ்சல் முகவரி",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO தேதி நேரம்",
        date: "ISO தேதி",
        time: "ISO நேரம்",
        duration: "ISO கால அளவு",
        ipv4: "IPv4 முகவரி",
        ipv6: "IPv6 முகவரி",
        cidrv4: "IPv4 வரம்பு",
        cidrv6: "IPv6 வரம்பு",
        base64: "base64-encoded சரம்",
        base64url: "base64url-encoded சரம்",
        json_string: "JSON சரம்",
        e164: "E.164 எண்",
        jwt: "JWT",
        template_literal: "input"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ".concat(issue.expected, ", பெறப்பட்டது ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " இல் ஒன்று");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        var _issue_origin, _sizing_unit;
                        return "மிக பெரியது: எதிர்பார்க்கப்பட்டது ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "மதிப்பு", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "உறுப்புகள்", " ஆக இருக்க வேண்டும்");
                    }
                    var _issue_origin1;
                    return "மிக பெரியது: எதிர்பார்க்கப்பட்டது ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "மதிப்பு", " ").concat(adj).concat(issue.maximum.toString(), " ஆக இருக்க வேண்டும்");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " ஆக இருக்க வேண்டும்"); //
                    }
                    return "மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ஆக இருக்க வேண்டும்");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'தவறான சரம்: "'.concat(_issue.prefix, '" இல் தொடங்க வேண்டும்');
                    if (_issue.format === "ends_with") return 'தவறான சரம்: "'.concat(_issue.suffix, '" இல் முடிவடைய வேண்டும்');
                    if (_issue.format === "includes") return 'தவறான சரம்: "'.concat(_issue.includes, '" ஐ உள்ளடக்க வேண்டும்');
                    if (_issue.format === "regex") return "தவறான சரம்: ".concat(_issue.pattern, " முறைபாட்டுடன் பொருந்த வேண்டும்");
                    var _Nouns__issue_format;
                    return "தவறான ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "தவறான எண்: ".concat(issue.divisor, " இன் பலமாக இருக்க வேண்டும்");
            case "unrecognized_keys":
                return "அடையாளம் தெரியாத விசை".concat(issue.keys.length > 1 ? "கள்" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " இல் தவறான விசை");
            case "invalid_union":
                return "தவறான உள்ளீடு";
            case "invalid_element":
                return "".concat(issue.origin, " இல் தவறான மதிப்பு");
            default:
                return "தவறான உள்ளீடு";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/th.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "ตัวอักษร",
            verb: "ควรมี"
        },
        file: {
            unit: "ไบต์",
            verb: "ควรมี"
        },
        array: {
            unit: "รายการ",
            verb: "ควรมี"
        },
        set: {
            unit: "รายการ",
            verb: "ควรมี"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "อาร์เรย์ (Array)";
                    }
                    if (data === null) {
                        return "ไม่มีค่า (null)";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ข้อมูลที่ป้อน",
        email: "ที่อยู่อีเมล",
        url: "URL",
        emoji: "อิโมจิ",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "วันที่เวลาแบบ ISO",
        date: "วันที่แบบ ISO",
        time: "เวลาแบบ ISO",
        duration: "ช่วงเวลาแบบ ISO",
        ipv4: "ที่อยู่ IPv4",
        ipv6: "ที่อยู่ IPv6",
        cidrv4: "ช่วง IP แบบ IPv4",
        cidrv6: "ช่วง IP แบบ IPv6",
        base64: "ข้อความแบบ Base64",
        base64url: "ข้อความแบบ Base64 สำหรับ URL",
        json_string: "ข้อความแบบ JSON",
        e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
        jwt: "โทเคน JWT",
        template_literal: "ข้อมูลที่ป้อน"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ".concat(issue.expected, " แต่ได้รับ ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "ค่าไม่ถูกต้อง: ควรเป็น ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "ไม่เกิน" : "น้อยกว่า";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "เกินกำหนด: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "ค่า", " ควรมี").concat(adj, " ").concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "รายการ");
                    var _issue_origin1;
                    return "เกินกำหนด: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "ค่า", " ควรมี").concat(adj, " ").concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? "อย่างน้อย" : "มากกว่า";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "น้อยกว่ากำหนด: ".concat(issue.origin, " ควรมี").concat(adj, " ").concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "น้อยกว่ากำหนด: ".concat(issue.origin, " ควรมี").concat(adj, " ").concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "'.concat(_issue.prefix, '"');
                    }
                    if (_issue.format === "ends_with") return 'รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'รูปแบบไม่ถูกต้อง: ข้อความต้องมี "'.concat(_issue.includes, '" อยู่ในข้อความ');
                    if (_issue.format === "regex") return "รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "รูปแบบไม่ถูกต้อง: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ".concat(issue.divisor, " ได้ลงตัว");
            case "unrecognized_keys":
                return "พบคีย์ที่ไม่รู้จัก: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "คีย์ไม่ถูกต้องใน ".concat(issue.origin);
            case "invalid_union":
                return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
                return "ข้อมูลไม่ถูกต้องใน ".concat(issue.origin);
            default:
                return "ข้อมูลไม่ถูกต้อง";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/tr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parsedType",
    ()=>parsedType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const parsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "NaN" : "number";
            }
        case "object":
            {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
    }
    return t;
};
const error = ()=>{
    const Sizable = {
        string: {
            unit: "karakter",
            verb: "olmalı"
        },
        file: {
            unit: "bayt",
            verb: "olmalı"
        },
        array: {
            unit: "öğe",
            verb: "olmalı"
        },
        set: {
            unit: "öğe",
            verb: "olmalı"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const Nouns = {
        regex: "girdi",
        email: "e-posta adresi",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO süre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aralığı",
        cidrv6: "IPv6 aralığı",
        base64: "base64 ile şifrelenmiş metin",
        base64url: "base64url ile şifrelenmiş metin",
        json_string: "JSON dizesi",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "Şablon dizesi"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Geçersiz değer: beklenen ".concat(issue.expected, ", alınan ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Geçersiz değer: beklenen ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Geçersiz seçenek: aşağıdakilerden biri olmalı: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Çok büyük: beklenen ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "değer", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "öğe");
                    var _issue_origin1;
                    return "Çok büyük: beklenen ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "değer", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "Çok küçük: beklenen ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    return "Çok küçük: beklenen ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Geçersiz metin: "'.concat(_issue.prefix, '" ile başlamalı');
                    if (_issue.format === "ends_with") return 'Geçersiz metin: "'.concat(_issue.suffix, '" ile bitmeli');
                    if (_issue.format === "includes") return 'Geçersiz metin: "'.concat(_issue.includes, '" içermeli');
                    if (_issue.format === "regex") return "Geçersiz metin: ".concat(_issue.pattern, " desenine uymalı");
                    var _Nouns__issue_format;
                    return "Geçersiz ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Geçersiz sayı: ".concat(issue.divisor, " ile tam bölünebilmeli");
            case "unrecognized_keys":
                return "Tanınmayan anahtar".concat(issue.keys.length > 1 ? "lar" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " içinde geçersiz anahtar");
            case "invalid_union":
                return "Geçersiz değer";
            case "invalid_element":
                return "".concat(issue.origin, " içinde geçersiz değer");
            default:
                return "Geçersiz değer";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/uk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "символів",
            verb: "матиме"
        },
        file: {
            unit: "байтів",
            verb: "матиме"
        },
        array: {
            unit: "елементів",
            verb: "матиме"
        },
        set: {
            unit: "елементів",
            verb: "матиме"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "число";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "масив";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "вхідні дані",
        email: "адреса електронної пошти",
        url: "URL",
        emoji: "емодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "дата та час ISO",
        date: "дата ISO",
        time: "час ISO",
        duration: "тривалість ISO",
        ipv4: "адреса IPv4",
        ipv6: "адреса IPv6",
        cidrv4: "діапазон IPv4",
        cidrv6: "діапазон IPv6",
        base64: "рядок у кодуванні base64",
        base64url: "рядок у кодуванні base64url",
        json_string: "рядок JSON",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "вхідні дані"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Неправильні вхідні дані: очікується ".concat(issue.expected, ", отримано ").concat(parsedType(issue.input));
            // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1) return "Неправильні вхідні дані: очікується ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Неправильна опція: очікується одне з ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Занадто велике: очікується, що ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "значення", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "елементів");
                    var _issue_origin1;
                    return "Занадто велике: очікується, що ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "значення", " буде ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Занадто мале: очікується, що ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Занадто мале: очікується, що ".concat(issue.origin, " буде ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Неправильний рядок: повинен починатися з "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Неправильний рядок: повинен закінчуватися на "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Неправильний рядок: повинен містити "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Неправильний рядок: повинен відповідати шаблону ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Неправильний ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Неправильне число: повинно бути кратним ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Нерозпізнаний ключ".concat(issue.keys.length > 1 ? "і" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Неправильний ключ у ".concat(issue.origin);
            case "invalid_union":
                return "Неправильні вхідні дані";
            case "invalid_element":
                return "Неправильне значення у ".concat(issue.origin);
            default:
                return "Неправильні вхідні дані";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ua.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$uk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/uk.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$uk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ur.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "حروف",
            verb: "ہونا"
        },
        file: {
            unit: "بائٹس",
            verb: "ہونا"
        },
        array: {
            unit: "آئٹمز",
            verb: "ہونا"
        },
        set: {
            unit: "آئٹمز",
            verb: "ہونا"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "نمبر";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "آرے";
                    }
                    if (data === null) {
                        return "نل";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ان پٹ",
        email: "ای میل ایڈریس",
        url: "یو آر ایل",
        emoji: "ایموجی",
        uuid: "یو یو آئی ڈی",
        uuidv4: "یو یو آئی ڈی وی 4",
        uuidv6: "یو یو آئی ڈی وی 6",
        nanoid: "نینو آئی ڈی",
        guid: "جی یو آئی ڈی",
        cuid: "سی یو آئی ڈی",
        cuid2: "سی یو آئی ڈی 2",
        ulid: "یو ایل آئی ڈی",
        xid: "ایکس آئی ڈی",
        ksuid: "کے ایس یو آئی ڈی",
        datetime: "آئی ایس او ڈیٹ ٹائم",
        date: "آئی ایس او تاریخ",
        time: "آئی ایس او وقت",
        duration: "آئی ایس او مدت",
        ipv4: "آئی پی وی 4 ایڈریس",
        ipv6: "آئی پی وی 6 ایڈریس",
        cidrv4: "آئی پی وی 4 رینج",
        cidrv6: "آئی پی وی 6 رینج",
        base64: "بیس 64 ان کوڈڈ سٹرنگ",
        base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
        json_string: "جے ایس او این سٹرنگ",
        e164: "ای 164 نمبر",
        jwt: "جے ڈبلیو ٹی",
        template_literal: "ان پٹ"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "غلط ان پٹ: ".concat(issue.expected, " متوقع تھا، ").concat(parsedType(issue.input), " موصول ہوا");
            case "invalid_value":
                if (issue.values.length === 1) return "غلط ان پٹ: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]), " متوقع تھا");
                return "غلط آپشن: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"), " میں سے ایک متوقع تھا");
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "بہت بڑا: ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "ویلیو", " کے ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "عناصر", " ہونے متوقع تھے");
                    var _issue_origin1;
                    return "بہت بڑا: ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "ویلیو", " کا ").concat(adj).concat(issue.maximum.toString(), " ہونا متوقع تھا");
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "بہت چھوٹا: ".concat(issue.origin, " کے ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit, " ہونے متوقع تھے");
                    }
                    return "بہت چھوٹا: ".concat(issue.origin, " کا ").concat(adj).concat(issue.minimum.toString(), " ہونا متوقع تھا");
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return 'غلط سٹرنگ: "'.concat(_issue.prefix, '" سے شروع ہونا چاہیے');
                    }
                    if (_issue.format === "ends_with") return 'غلط سٹرنگ: "'.concat(_issue.suffix, '" پر ختم ہونا چاہیے');
                    if (_issue.format === "includes") return 'غلط سٹرنگ: "'.concat(_issue.includes, '" شامل ہونا چاہیے');
                    if (_issue.format === "regex") return "غلط سٹرنگ: پیٹرن ".concat(_issue.pattern, " سے میچ ہونا چاہیے");
                    var _Nouns__issue_format;
                    return "غلط ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "غلط نمبر: ".concat(issue.divisor, " کا مضاعف ہونا چاہیے");
            case "unrecognized_keys":
                return "غیر تسلیم شدہ کی".concat(issue.keys.length > 1 ? "ز" : "", ": ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "، "));
            case "invalid_key":
                return "".concat(issue.origin, " میں غلط کی");
            case "invalid_union":
                return "غلط ان پٹ";
            case "invalid_element":
                return "".concat(issue.origin, " میں غلط ویلیو");
            default:
                return "غلط ان پٹ";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/vi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "ký tự",
            verb: "có"
        },
        file: {
            unit: "byte",
            verb: "có"
        },
        array: {
            unit: "phần tử",
            verb: "có"
        },
        set: {
            unit: "phần tử",
            verb: "có"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "số";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "mảng";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "đầu vào",
        email: "địa chỉ email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ngày giờ ISO",
        date: "ngày ISO",
        time: "giờ ISO",
        duration: "khoảng thời gian ISO",
        ipv4: "địa chỉ IPv4",
        ipv6: "địa chỉ IPv6",
        cidrv4: "dải IPv4",
        cidrv6: "dải IPv6",
        base64: "chuỗi mã hóa base64",
        base64url: "chuỗi mã hóa base64url",
        json_string: "chuỗi JSON",
        e164: "số E.164",
        jwt: "JWT",
        template_literal: "đầu vào"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Đầu vào không hợp lệ: mong đợi ".concat(issue.expected, ", nhận được ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Đầu vào không hợp lệ: mong đợi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Tùy chọn không hợp lệ: mong đợi một trong các giá trị ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "Quá lớn: mong đợi ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "giá trị", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "phần tử");
                    var _issue_origin1;
                    return "Quá lớn: mong đợi ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "giá trị", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "Quá nhỏ: mong đợi ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "Quá nhỏ: mong đợi ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Chuỗi không hợp lệ: phải bắt đầu bằng "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Chuỗi không hợp lệ: phải kết thúc bằng "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Chuỗi không hợp lệ: phải bao gồm "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Chuỗi không hợp lệ: phải khớp với mẫu ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format, " không hợp lệ");
                }
            case "not_multiple_of":
                return "Số không hợp lệ: phải là bội số của ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Khóa không được nhận dạng: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Khóa không hợp lệ trong ".concat(issue.origin);
            case "invalid_union":
                return "Đầu vào không hợp lệ";
            case "invalid_element":
                return "Giá trị không hợp lệ trong ".concat(issue.origin);
            default:
                return "Đầu vào không hợp lệ";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/zh-CN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "字符",
            verb: "包含"
        },
        file: {
            unit: "字节",
            verb: "包含"
        },
        array: {
            unit: "项",
            verb: "包含"
        },
        set: {
            unit: "项",
            verb: "包含"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "非数字(NaN)" : "数字";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "数组";
                    }
                    if (data === null) {
                        return "空值(null)";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "输入",
        email: "电子邮件",
        url: "URL",
        emoji: "表情符号",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日期时间",
        date: "ISO日期",
        time: "ISO时间",
        duration: "ISO时长",
        ipv4: "IPv4地址",
        ipv6: "IPv6地址",
        cidrv4: "IPv4网段",
        cidrv6: "IPv6网段",
        base64: "base64编码字符串",
        base64url: "base64url编码字符串",
        json_string: "JSON字符串",
        e164: "E.164号码",
        jwt: "JWT",
        template_literal: "输入"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "无效输入：期望 ".concat(issue.expected, "，实际接收 ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "无效输入：期望 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "无效选项：期望以下之一 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "数值过大：期望 ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "值", " ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "个元素");
                    var _issue_origin1;
                    return "数值过大：期望 ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "值", " ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "数值过小：期望 ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "数值过小：期望 ".concat(issue.origin, " ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return '无效字符串：必须以 "'.concat(_issue.prefix, '" 开头');
                    if (_issue.format === "ends_with") return '无效字符串：必须以 "'.concat(_issue.suffix, '" 结尾');
                    if (_issue.format === "includes") return '无效字符串：必须包含 "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "无效字符串：必须满足正则表达式 ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "无效".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "无效数字：必须是 ".concat(issue.divisor, " 的倍数");
            case "unrecognized_keys":
                return "出现未知的键(key): ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "".concat(issue.origin, " 中的键(key)无效");
            case "invalid_union":
                return "无效输入";
            case "invalid_element":
                return "".concat(issue.origin, " 中包含无效值(value)");
            default:
                return "无效输入";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/zh-TW.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "字元",
            verb: "擁有"
        },
        file: {
            unit: "位元組",
            verb: "擁有"
        },
        array: {
            unit: "項目",
            verb: "擁有"
        },
        set: {
            unit: "項目",
            verb: "擁有"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "number";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "array";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "輸入",
        email: "郵件地址",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 日期時間",
        date: "ISO 日期",
        time: "ISO 時間",
        duration: "ISO 期間",
        ipv4: "IPv4 位址",
        ipv6: "IPv6 位址",
        cidrv4: "IPv4 範圍",
        cidrv6: "IPv6 範圍",
        base64: "base64 編碼字串",
        base64url: "base64url 編碼字串",
        json_string: "JSON 字串",
        e164: "E.164 數值",
        jwt: "JWT",
        template_literal: "輸入"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "無效的輸入值：預期為 ".concat(issue.expected, "，但收到 ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "無效的輸入值：預期為 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "無效的選項：預期為以下其中之一 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin, _sizing_unit;
                    if (sizing) return "數值過大：預期 ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "值", " 應為 ").concat(adj).concat(issue.maximum.toString(), " ").concat((_sizing_unit = sizing.unit) !== null && _sizing_unit !== void 0 ? _sizing_unit : "個元素");
                    var _issue_origin1;
                    return "數值過大：預期 ".concat((_issue_origin1 = issue.origin) !== null && _issue_origin1 !== void 0 ? _issue_origin1 : "值", " 應為 ").concat(adj).concat(issue.maximum.toString());
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) {
                        return "數值過小：預期 ".concat(issue.origin, " 應為 ").concat(adj).concat(issue.minimum.toString(), " ").concat(sizing.unit);
                    }
                    return "數值過小：預期 ".concat(issue.origin, " 應為 ").concat(adj).concat(issue.minimum.toString());
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") {
                        return '無效的字串：必須以 "'.concat(_issue.prefix, '" 開頭');
                    }
                    if (_issue.format === "ends_with") return '無效的字串：必須以 "'.concat(_issue.suffix, '" 結尾');
                    if (_issue.format === "includes") return '無效的字串：必須包含 "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "無效的字串：必須符合格式 ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "無效的 ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "無效的數字：必須為 ".concat(issue.divisor, " 的倍數");
            case "unrecognized_keys":
                return "無法識別的鍵值".concat(issue.keys.length > 1 ? "們" : "", "：").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, "、"));
            case "invalid_key":
                return "".concat(issue.origin, " 中有無效的鍵值");
            case "invalid_union":
                return "無效的輸入值";
            case "invalid_element":
                return "".concat(issue.origin, " 中有無效的值");
            default:
                return "無效的輸入值";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/yo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
const error = ()=>{
    const Sizable = {
        string: {
            unit: "àmi",
            verb: "ní"
        },
        file: {
            unit: "bytes",
            verb: "ní"
        },
        array: {
            unit: "nkan",
            verb: "ní"
        },
        set: {
            unit: "nkan",
            verb: "ní"
        }
    };
    function getSizing(origin) {
        var _Sizable_origin;
        return (_Sizable_origin = Sizable[origin]) !== null && _Sizable_origin !== void 0 ? _Sizable_origin : null;
    }
    const parsedType = (data)=>{
        const t = typeof data;
        switch(t){
            case "number":
                {
                    return Number.isNaN(data) ? "NaN" : "nọ́mbà";
                }
            case "object":
                {
                    if (Array.isArray(data)) {
                        return "akopọ";
                    }
                    if (data === null) {
                        return "null";
                    }
                    if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                        return data.constructor.name;
                    }
                }
        }
        return t;
    };
    const Nouns = {
        regex: "ẹ̀rọ ìbáwọlé",
        email: "àdírẹ́sì ìmẹ́lì",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "àkókò ISO",
        date: "ọjọ́ ISO",
        time: "àkókò ISO",
        duration: "àkókò tó pé ISO",
        ipv4: "àdírẹ́sì IPv4",
        ipv6: "àdírẹ́sì IPv6",
        cidrv4: "àgbègbè IPv4",
        cidrv6: "àgbègbè IPv6",
        base64: "ọ̀rọ̀ tí a kọ́ ní base64",
        base64url: "ọ̀rọ̀ base64url",
        json_string: "ọ̀rọ̀ JSON",
        e164: "nọ́mbà E.164",
        jwt: "JWT",
        template_literal: "ẹ̀rọ ìbáwọlé"
    };
    return (issue)=>{
        switch(issue.code){
            case "invalid_type":
                return "Ìbáwọlé aṣìṣe: a ní láti fi ".concat(issue.expected, ", àmọ̀ a rí ").concat(parsedType(issue.input));
            case "invalid_value":
                if (issue.values.length === 1) return "Ìbáwọlé aṣìṣe: a ní láti fi ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPrimitive"](issue.values[0]));
                return "Àṣàyàn aṣìṣe: yan ọ̀kan lára ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.values, "|"));
            case "too_big":
                {
                    const adj = issue.inclusive ? "<=" : "<";
                    const sizing = getSizing(issue.origin);
                    var _issue_origin;
                    if (sizing) return "Tó pọ̀ jù: a ní láti jẹ́ pé ".concat((_issue_origin = issue.origin) !== null && _issue_origin !== void 0 ? _issue_origin : "iye", " ").concat(sizing.verb, " ").concat(adj).concat(issue.maximum, " ").concat(sizing.unit);
                    return "Tó pọ̀ jù: a ní láti jẹ́ ".concat(adj).concat(issue.maximum);
                }
            case "too_small":
                {
                    const adj = issue.inclusive ? ">=" : ">";
                    const sizing = getSizing(issue.origin);
                    if (sizing) return "Kéré ju: a ní láti jẹ́ pé ".concat(issue.origin, " ").concat(sizing.verb, " ").concat(adj).concat(issue.minimum, " ").concat(sizing.unit);
                    return "Kéré ju: a ní láti jẹ́ ".concat(adj).concat(issue.minimum);
                }
            case "invalid_format":
                {
                    const _issue = issue;
                    if (_issue.format === "starts_with") return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "'.concat(_issue.prefix, '"');
                    if (_issue.format === "ends_with") return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "'.concat(_issue.suffix, '"');
                    if (_issue.format === "includes") return 'Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "'.concat(_issue.includes, '"');
                    if (_issue.format === "regex") return "Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ".concat(_issue.pattern);
                    var _Nouns__issue_format;
                    return "Aṣìṣe: ".concat((_Nouns__issue_format = Nouns[_issue.format]) !== null && _Nouns__issue_format !== void 0 ? _Nouns__issue_format : issue.format);
                }
            case "not_multiple_of":
                return "Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ".concat(issue.divisor);
            case "unrecognized_keys":
                return "Bọtìnì àìmọ̀: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinValues"](issue.keys, ", "));
            case "invalid_key":
                return "Bọtìnì aṣìṣe nínú ".concat(issue.origin);
            case "invalid_union":
                return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
                return "Iye aṣìṣe nínú ".concat(issue.origin);
            default:
                return "Ìbáwọlé aṣìṣe";
        }
    };
};
function __TURBOPACK__default__export__() {
    return {
        localeError: error()
    };
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$az$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/az.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$be$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/be.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ca$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ca.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$cs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/cs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$da$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/da.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$de$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/de.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$eo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/eo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fa.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$fr$2d$CA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/fr-CA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$he$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/he.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$hu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/hu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$it$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/it.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ja$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ja.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ka$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ka.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$kh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/kh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$km$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/km.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ko.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$lt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/lt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$mk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/mk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ms.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$nl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/nl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$no$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/no.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ota$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ota.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/pl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$pt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/pt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ru.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$sl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/sl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$sv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/sv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$th$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/th.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$tr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/tr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ua$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ua.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$uk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/uk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$ur$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/ur.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$vi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/vi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$zh$2d$CN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/zh-CN.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$zh$2d$TW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/zh-TW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$yo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/yo.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/da.js [app-client] (ecmascript) <export default as da>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "da",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$da$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$zod$2f$v4$2f$locales$2f$da$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/zod/v4/locales/da.js [app-client] (ecmascript)");
}),
"[project]/Documents/CourseDemy/front-end/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidTokenError",
    ()=>InvalidTokenError,
    "jwtDecode",
    ()=>jwtDecode
]);
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p)=>{
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError("Invalid token specified: missing part #".concat(pos + 1));
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    } catch (e) {
        throw new InvalidTokenError("Invalid token specified: invalid base64 for part #".concat(pos + 1, " (").concat(e.message, ")"));
    }
    try {
        return JSON.parse(decoded);
    } catch (e) {
        throw new InvalidTokenError("Invalid token specified: invalid json for part #".concat(pos + 1, " (").concat(e.message, ")"));
    }
}
}),
"[project]/Documents/CourseDemy/front-end/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Documents/CourseDemy/front-end/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster,
    "toast",
    ()=>toast,
    "useSonner",
    ()=>useSonner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
'use client';
function __insertCSS(code) {
    if (!code || typeof document == 'undefined') return;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
;
;
const getAsset = (type)=>{
    switch(type){
        case 'success':
            return SuccessIcon;
        case 'info':
            return InfoIcon;
        case 'warning':
            return WarningIcon;
        case 'error':
            return ErrorIcon;
        default:
            return null;
    }
};
const bars = Array(12).fill(0);
const Loader = (param)=>{
    let { visible, className } = param;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            'sonner-loading-wrapper',
            className
        ].filter(Boolean).join(' '),
        "data-visible": visible
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, bars.map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: "spinner-bar-".concat(i)
        }))));
};
const SuccessIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}));
const WarningIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}));
const InfoIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}));
const ErrorIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}));
const CloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
const useIsDocumentHidden = ()=>{
    const [isDocumentHidden, setIsDocumentHidden] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useIsDocumentHidden.useEffect": ()=>{
            const callback = {
                "useIsDocumentHidden.useEffect.callback": ()=>{
                    setIsDocumentHidden(document.hidden);
                }
            }["useIsDocumentHidden.useEffect.callback"];
            document.addEventListener('visibilitychange', callback);
            return ({
                "useIsDocumentHidden.useEffect": ()=>window.removeEventListener('visibilitychange', callback)
            })["useIsDocumentHidden.useEffect"];
        }
    }["useIsDocumentHidden.useEffect"], []);
    return isDocumentHidden;
};
let toastsCounter = 1;
class Observer {
    constructor(){
        // We use arrow functions to maintain the correct `this` reference
        this.subscribe = (subscriber)=>{
            this.subscribers.push(subscriber);
            return ()=>{
                const index = this.subscribers.indexOf(subscriber);
                this.subscribers.splice(index, 1);
            };
        };
        this.publish = (data)=>{
            this.subscribers.forEach((subscriber)=>subscriber(data));
        };
        this.addToast = (data)=>{
            this.publish(data);
            this.toasts = [
                ...this.toasts,
                data
            ];
        };
        this.create = (data)=>{
            var _data_id;
            const { message, ...rest } = data;
            const id = typeof (data == null ? void 0 : data.id) === 'number' || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
            const alreadyExists = this.toasts.find((toast)=>{
                return toast.id === id;
            });
            const dismissible = data.dismissible === undefined ? true : data.dismissible;
            if (this.dismissedToasts.has(id)) {
                this.dismissedToasts.delete(id);
            }
            if (alreadyExists) {
                this.toasts = this.toasts.map((toast)=>{
                    if (toast.id === id) {
                        this.publish({
                            ...toast,
                            ...data,
                            id,
                            title: message
                        });
                        return {
                            ...toast,
                            ...data,
                            id,
                            dismissible,
                            title: message
                        };
                    }
                    return toast;
                });
            } else {
                this.addToast({
                    title: message,
                    ...rest,
                    dismissible,
                    id
                });
            }
            return id;
        };
        this.dismiss = (id)=>{
            if (id) {
                this.dismissedToasts.add(id);
                requestAnimationFrame(()=>this.subscribers.forEach((subscriber)=>subscriber({
                            id,
                            dismiss: true
                        })));
            } else {
                this.toasts.forEach((toast)=>{
                    this.subscribers.forEach((subscriber)=>subscriber({
                            id: toast.id,
                            dismiss: true
                        }));
                });
            }
            return id;
        };
        this.message = (message, data)=>{
            return this.create({
                ...data,
                message
            });
        };
        this.error = (message, data)=>{
            return this.create({
                ...data,
                message,
                type: 'error'
            });
        };
        this.success = (message, data)=>{
            return this.create({
                ...data,
                type: 'success',
                message
            });
        };
        this.info = (message, data)=>{
            return this.create({
                ...data,
                type: 'info',
                message
            });
        };
        this.warning = (message, data)=>{
            return this.create({
                ...data,
                type: 'warning',
                message
            });
        };
        this.loading = (message, data)=>{
            return this.create({
                ...data,
                type: 'loading',
                message
            });
        };
        this.promise = (promise, data)=>{
            if (!data) {
                // Nothing to show
                return;
            }
            let id = undefined;
            if (data.loading !== undefined) {
                id = this.create({
                    ...data,
                    promise,
                    type: 'loading',
                    message: data.loading,
                    description: typeof data.description !== 'function' ? data.description : undefined
                });
            }
            const p = Promise.resolve(promise instanceof Function ? promise() : promise);
            let shouldDismiss = id !== undefined;
            let result;
            const originalPromise = p.then(async (response)=>{
                result = [
                    'resolve',
                    response
                ];
                const isReactElementResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(response);
                if (isReactElementResponse) {
                    shouldDismiss = false;
                    this.create({
                        id,
                        type: 'default',
                        message: response
                    });
                } else if (isHttpResponse(response) && !response.ok) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error("HTTP error! status: ".concat(response.status)) : data.error;
                    const description = typeof data.description === 'function' ? await data.description("HTTP error! status: ".concat(response.status)) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (response instanceof Error) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(response) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (data.success !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.success === 'function' ? await data.success(response) : data.success;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'success',
                        description,
                        ...toastSettings
                    });
                }
            }).catch(async (error)=>{
                result = [
                    'reject',
                    error
                ];
                if (data.error !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(error) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(error) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                }
            }).finally(()=>{
                if (shouldDismiss) {
                    // Toast is still in load state (and will be indefinitely — dismiss it)
                    this.dismiss(id);
                    id = undefined;
                }
                data.finally == null ? void 0 : data.finally.call(data);
            });
            const unwrap = ()=>new Promise((resolve, reject)=>originalPromise.then(()=>result[0] === 'reject' ? reject(result[1]) : resolve(result[1])).catch(reject));
            if (typeof id !== 'string' && typeof id !== 'number') {
                // cannot Object.assign on undefined
                return {
                    unwrap
                };
            } else {
                return Object.assign(id, {
                    unwrap
                });
            }
        };
        this.custom = (jsx, data)=>{
            const id = (data == null ? void 0 : data.id) || toastsCounter++;
            this.create({
                jsx: jsx(id),
                id,
                ...data
            });
            return id;
        };
        this.getActiveToasts = ()=>{
            return this.toasts.filter((toast)=>!this.dismissedToasts.has(toast.id));
        };
        this.subscribers = [];
        this.toasts = [];
        this.dismissedToasts = new Set();
    }
}
const ToastState = new Observer();
// bind this to the toast function
const toastFunction = (message, data)=>{
    const id = (data == null ? void 0 : data.id) || toastsCounter++;
    ToastState.addToast({
        title: message,
        ...data,
        id
    });
    return id;
};
const isHttpResponse = (data)=>{
    return data && typeof data === 'object' && 'ok' in data && typeof data.ok === 'boolean' && 'status' in data && typeof data.status === 'number';
};
const basicToast = toastFunction;
const getHistory = ()=>ToastState.toasts;
const getToasts = ()=>ToastState.getActiveToasts();
// We use `Object.assign` to maintain the correct types as we would lose them otherwise
const toast = Object.assign(basicToast, {
    success: ToastState.success,
    info: ToastState.info,
    warning: ToastState.warning,
    error: ToastState.error,
    custom: ToastState.custom,
    message: ToastState.message,
    promise: ToastState.promise,
    dismiss: ToastState.dismiss,
    loading: ToastState.loading
}, {
    getHistory,
    getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
    return action.label !== undefined;
}
// Visible toasts amount
const VISIBLE_TOASTS_AMOUNT = 3;
// Viewport padding
const VIEWPORT_OFFSET = '24px';
// Mobile viewport padding
const MOBILE_VIEWPORT_OFFSET = '16px';
// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000;
// Default toast width
const TOAST_WIDTH = 356;
// Default gap between toasts
const GAP = 14;
// Threshold to dismiss a toast
const SWIPE_THRESHOLD = 45;
// Equal to exit animation duration
const TIME_BEFORE_UNMOUNT = 200;
function cn() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(' ');
}
function getDefaultSwipeDirections(position) {
    const [y, x] = position.split('-');
    const directions = [];
    if (y) {
        directions.push(y);
    }
    if (x) {
        directions.push(x);
    }
    return directions;
}
const Toast = (props)=>{
    var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
    const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = '', descriptionClassName = '', duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = 'Close toast' } = props;
    const [swipeDirection, setSwipeDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [swipeOutDirection, setSwipeOutDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [removed, setRemoved] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swiping, setSwiping] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swipeOut, setSwipeOut] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isSwiped, setIsSwiped] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [offsetBeforeRemove, setOffsetBeforeRemove] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [initialHeight, setInitialHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const remainingTime = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
    const dragStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const toastRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFront = index === 0;
    const isVisible = index + 1 <= visibleToasts;
    const toastType = toast.type;
    const dismissible = toast.dismissible !== false;
    const toastClassname = toast.className || '';
    const toastDescriptionClassname = toast.descriptionClassName || '';
    // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
    const heightIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[heightIndex]": ()=>heights.findIndex({
                "Toast.useMemo[heightIndex]": (height)=>height.toastId === toast.id
            }["Toast.useMemo[heightIndex]"]) || 0
    }["Toast.useMemo[heightIndex]"], [
        heights,
        toast.id
    ]);
    const closeButton = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[closeButton]": ()=>{
            var _toast_closeButton;
            return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
        }
    }["Toast.useMemo[closeButton]"], [
        toast.closeButton,
        closeButtonFromToaster
    ]);
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[duration]": ()=>toast.duration || durationFromToaster || TOAST_LIFETIME
    }["Toast.useMemo[duration]"], [
        toast.duration,
        durationFromToaster
    ]);
    const closeTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const lastCloseTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const pointerStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [y, x] = position.split('-');
    const toastsHeightBefore = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[toastsHeightBefore]": ()=>{
            return heights.reduce({
                "Toast.useMemo[toastsHeightBefore]": (prev, curr, reducerIndex)=>{
                    // Calculate offset up until current toast
                    if (reducerIndex >= heightIndex) {
                        return prev;
                    }
                    return prev + curr.height;
                }
            }["Toast.useMemo[toastsHeightBefore]"], 0);
        }
    }["Toast.useMemo[toastsHeightBefore]"], [
        heights,
        heightIndex
    ]);
    const isDocumentHidden = useIsDocumentHidden();
    const invert = toast.invert || ToasterInvert;
    const disabled = toastType === 'loading';
    offset.current = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo": ()=>heightIndex * gap + toastsHeightBefore
    }["Toast.useMemo"], [
        heightIndex,
        toastsHeightBefore
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            remainingTime.current = duration;
        }
    }["Toast.useEffect"], [
        duration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            // Trigger enter animation without using CSS animation
            setMounted(true);
        }
    }["Toast.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            const toastNode = toastRef.current;
            if (toastNode) {
                const height = toastNode.getBoundingClientRect().height;
                // Add toast height to heights array after the toast is mounted
                setInitialHeight(height);
                setHeights({
                    "Toast.useEffect": (h)=>[
                            {
                                toastId: toast.id,
                                height,
                                position: toast.position
                            },
                            ...h
                        ]
                }["Toast.useEffect"]);
                return ({
                    "Toast.useEffect": ()=>setHeights({
                            "Toast.useEffect": (h)=>h.filter({
                                    "Toast.useEffect": (height)=>height.toastId !== toast.id
                                }["Toast.useEffect"])
                        }["Toast.useEffect"])
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        setHeights,
        toast.id
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
        "Toast.useLayoutEffect": ()=>{
            // Keep height up to date with the content in case it updates
            if (!mounted) return;
            const toastNode = toastRef.current;
            const originalHeight = toastNode.style.height;
            toastNode.style.height = 'auto';
            const newHeight = toastNode.getBoundingClientRect().height;
            toastNode.style.height = originalHeight;
            setInitialHeight(newHeight);
            setHeights({
                "Toast.useLayoutEffect": (heights)=>{
                    const alreadyExists = heights.find({
                        "Toast.useLayoutEffect.alreadyExists": (height)=>height.toastId === toast.id
                    }["Toast.useLayoutEffect.alreadyExists"]);
                    if (!alreadyExists) {
                        return [
                            {
                                toastId: toast.id,
                                height: newHeight,
                                position: toast.position
                            },
                            ...heights
                        ];
                    } else {
                        return heights.map({
                            "Toast.useLayoutEffect": (height)=>height.toastId === toast.id ? {
                                    ...height,
                                    height: newHeight
                                } : height
                        }["Toast.useLayoutEffect"]);
                    }
                }
            }["Toast.useLayoutEffect"]);
        }
    }["Toast.useLayoutEffect"], [
        mounted,
        toast.title,
        toast.description,
        setHeights,
        toast.id,
        toast.jsx,
        toast.action,
        toast.cancel
    ]);
    const deleteToast = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toast.useCallback[deleteToast]": ()=>{
            // Save the offset for the exit swipe animation
            setRemoved(true);
            setOffsetBeforeRemove(offset.current);
            setHeights({
                "Toast.useCallback[deleteToast]": (h)=>h.filter({
                        "Toast.useCallback[deleteToast]": (height)=>height.toastId !== toast.id
                    }["Toast.useCallback[deleteToast]"])
            }["Toast.useCallback[deleteToast]"]);
            setTimeout({
                "Toast.useCallback[deleteToast]": ()=>{
                    removeToast(toast);
                }
            }["Toast.useCallback[deleteToast]"], TIME_BEFORE_UNMOUNT);
        }
    }["Toast.useCallback[deleteToast]"], [
        toast,
        removeToast,
        setHeights,
        offset
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.promise && toastType === 'loading' || toast.duration === Infinity || toast.type === 'loading') return;
            let timeoutId;
            // Pause the timer on each hover
            const pauseTimer = {
                "Toast.useEffect.pauseTimer": ()=>{
                    if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
                        // Get the elapsed time since the timer started
                        const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
                        remainingTime.current = remainingTime.current - elapsedTime;
                    }
                    lastCloseTimerStartTimeRef.current = new Date().getTime();
                }
            }["Toast.useEffect.pauseTimer"];
            const startTimer = {
                "Toast.useEffect.startTimer": ()=>{
                    // setTimeout(, Infinity) behaves as if the delay is 0.
                    // As a result, the toast would be closed immediately, giving the appearance that it was never rendered.
                    // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
                    if (remainingTime.current === Infinity) return;
                    closeTimerStartTimeRef.current = new Date().getTime();
                    // Let the toast know it has started
                    timeoutId = setTimeout({
                        "Toast.useEffect.startTimer": ()=>{
                            toast.onAutoClose == null ? void 0 : toast.onAutoClose.call(toast, toast);
                            deleteToast();
                        }
                    }["Toast.useEffect.startTimer"], remainingTime.current);
                }
            }["Toast.useEffect.startTimer"];
            if (expanded || interacting || isDocumentHidden) {
                pauseTimer();
            } else {
                startTimer();
            }
            return ({
                "Toast.useEffect": ()=>clearTimeout(timeoutId)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        expanded,
        interacting,
        toast,
        toastType,
        isDocumentHidden,
        deleteToast
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.delete) {
                deleteToast();
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
            }
        }
    }["Toast.useEffect"], [
        deleteToast,
        toast.delete
    ]);
    function getLoadingIcon() {
        var _toast_classNames;
        if (icons == null ? void 0 : icons.loading) {
            var _toast_classNames1;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, 'sonner-loader'),
                "data-visible": toastType === 'loading'
            }, icons.loading);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Loader, {
            className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
            visible: toastType === 'loading'
        });
    }
    const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
    var _toast_richColors, _icons_close;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: toastRef,
        className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastType]),
        "data-sonner-toast": "",
        "data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
        "data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
        "data-mounted": mounted,
        "data-promise": Boolean(toast.promise),
        "data-swiped": isSwiped,
        "data-removed": removed,
        "data-visible": isVisible,
        "data-y-position": y,
        "data-x-position": x,
        "data-index": index,
        "data-front": isFront,
        "data-swiping": swiping,
        "data-dismissible": dismissible,
        "data-type": toastType,
        "data-invert": invert,
        "data-swipe-out": swipeOut,
        "data-swipe-direction": swipeOutDirection,
        "data-expanded": Boolean(expanded || expandByDefault && mounted),
        "data-testid": toast.testId,
        style: {
            '--index': index,
            '--toasts-before': index,
            '--z-index': toasts.length - index,
            '--offset': "".concat(removed ? offsetBeforeRemove : offset.current, "px"),
            '--initial-height': expandByDefault ? 'auto' : "".concat(initialHeight, "px"),
            ...style,
            ...toast.style
        },
        onDragEnd: ()=>{
            setSwiping(false);
            setSwipeDirection(null);
            pointerStartRef.current = null;
        },
        onPointerDown: (event)=>{
            if (event.button === 2) return; // Return early on right click
            if (disabled || !dismissible) return;
            dragStartTime.current = new Date();
            setOffsetBeforeRemove(offset.current);
            // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
            event.target.setPointerCapture(event.pointerId);
            if (event.target.tagName === 'BUTTON') return;
            setSwiping(true);
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        },
        onPointerUp: ()=>{
            var _toastRef_current, _toastRef_current1, _dragStartTime_current;
            if (swipeOut || !dismissible) return;
            pointerStartRef.current = null;
            const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0);
            const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0);
            const timeTaken = new Date().getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / timeTaken;
            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
                setOffsetBeforeRemove(offset.current);
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX > 0 ? 'right' : 'left');
                } else {
                    setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
                }
                deleteToast();
                setSwipeOut(true);
                return;
            } else {
                var _toastRef_current2, _toastRef_current3;
                (_toastRef_current2 = toastRef.current) == null ? void 0 : _toastRef_current2.style.setProperty('--swipe-amount-x', "0px");
                (_toastRef_current3 = toastRef.current) == null ? void 0 : _toastRef_current3.style.setProperty('--swipe-amount-y', "0px");
            }
            setIsSwiped(false);
            setSwiping(false);
            setSwipeDirection(null);
        },
        onPointerMove: (event)=>{
            var _window_getSelection, _toastRef_current, _toastRef_current1;
            if (!pointerStartRef.current || !dismissible) return;
            const isHighlighted = ((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0;
            if (isHighlighted) return;
            const yDelta = event.clientY - pointerStartRef.current.y;
            const xDelta = event.clientX - pointerStartRef.current.x;
            var _props_swipeDirections;
            const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
            // Determine swipe direction if not already locked
            if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
                setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
            }
            let swipeAmount = {
                x: 0,
                y: 0
            };
            const getDampening = (delta)=>{
                const factor = Math.abs(delta) / 20;
                return 1 / (1.5 + factor);
            };
            // Only apply swipe in the locked direction
            if (swipeDirection === 'y') {
                // Handle vertical swipes
                if (swipeDirections.includes('top') || swipeDirections.includes('bottom')) {
                    if (swipeDirections.includes('top') && yDelta < 0 || swipeDirections.includes('bottom') && yDelta > 0) {
                        swipeAmount.y = yDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = yDelta * getDampening(yDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
                    }
                }
            } else if (swipeDirection === 'x') {
                // Handle horizontal swipes
                if (swipeDirections.includes('left') || swipeDirections.includes('right')) {
                    if (swipeDirections.includes('left') && xDelta < 0 || swipeDirections.includes('right') && xDelta > 0) {
                        swipeAmount.x = xDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = xDelta * getDampening(xDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
                    }
                }
            }
            if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
                setIsSwiped(true);
            }
            (_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.setProperty('--swipe-amount-x', "".concat(swipeAmount.x, "px"));
            (_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.setProperty('--swipe-amount-y', "".concat(swipeAmount.y, "px"));
        }
    }, closeButton && !toast.jsx && toastType !== 'loading' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": closeButtonAriaLabel,
        "data-disabled": disabled,
        "data-close-button": true,
        onClick: disabled || !dismissible ? ()=>{} : ()=>{
            deleteToast();
            toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
        },
        className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
    }, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
    }, toast.promise || toast.type === 'loading' && !toast.icon ? toast.icon || getLoadingIcon() : null, toast.type !== 'loading' ? icon : null) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
    }, toast.jsx ? toast.jsx : typeof toast.title === 'function' ? toast.title() : toast.title), toast.description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
    }, typeof toast.description === 'function' ? toast.description() : toast.description) : null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-cancel": true,
        style: toast.cancelButtonStyle || cancelButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.cancel)) return;
            if (!dismissible) return;
            toast.cancel.onClick == null ? void 0 : toast.cancel.onClick.call(toast.cancel, event);
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
    }, toast.cancel.label) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-action": true,
        style: toast.actionButtonStyle || actionButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.action)) return;
            toast.action.onClick == null ? void 0 : toast.action.onClick.call(toast.action, event);
            if (event.defaultPrevented) return;
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
    }, toast.action.label) : null);
};
function getDocumentDirection() {
    if (typeof window === 'undefined') return 'ltr';
    if (typeof document === 'undefined') return 'ltr'; // For Fresh purpose
    const dirAttribute = document.documentElement.getAttribute('dir');
    if (dirAttribute === 'auto' || !dirAttribute) {
        return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
    const styles = {};
    [
        defaultOffset,
        mobileOffset
    ].forEach((offset, index)=>{
        const isMobile = index === 1;
        const prefix = isMobile ? '--mobile-offset' : '--offset';
        const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
        function assignAll(offset) {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                styles["".concat(prefix, "-").concat(key)] = typeof offset === 'number' ? "".concat(offset, "px") : offset;
            });
        }
        if (typeof offset === 'number' || typeof offset === 'string') {
            assignAll(offset);
        } else if (typeof offset === 'object') {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                if (offset[key] === undefined) {
                    styles["".concat(prefix, "-").concat(key)] = defaultValue;
                } else {
                    styles["".concat(prefix, "-").concat(key)] = typeof offset[key] === 'number' ? "".concat(offset[key], "px") : offset[key];
                }
            });
        } else {
            assignAll(defaultValue);
        }
    });
    return styles;
}
function useSonner() {
    const [activeToasts, setActiveToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSonner.useEffect": ()=>{
            return ToastState.subscribe({
                "useSonner.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        setTimeout({
                            "useSonner.useEffect": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                    "useSonner.useEffect": ()=>{
                                        setActiveToasts({
                                            "useSonner.useEffect": (toasts)=>toasts.filter({
                                                    "useSonner.useEffect": (t)=>t.id !== toast.id
                                                }["useSonner.useEffect"])
                                        }["useSonner.useEffect"]);
                                    }
                                }["useSonner.useEffect"]);
                            }
                        }["useSonner.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "useSonner.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "useSonner.useEffect": ()=>{
                                    setActiveToasts({
                                        "useSonner.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "useSonner.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["useSonner.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["useSonner.useEffect"]);
                                }
                            }["useSonner.useEffect"]);
                        }
                    }["useSonner.useEffect"]);
                }
            }["useSonner.useEffect"]);
        }
    }["useSonner.useEffect"], []);
    return {
        toasts: activeToasts
    };
}
const Toaster = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function Toaster(props, ref) {
    const { id, invert, position = 'bottom-right', hotkey = [
        'altKey',
        'KeyT'
    ], expand, closeButton, className, offset, mobileOffset, theme = 'light', richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = 'Notifications' } = props;
    const [toasts, setToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const filteredToasts = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[filteredToasts]": ()=>{
            if (id) {
                return toasts.filter({
                    "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>toast.toasterId === id
                }["Toaster.Toaster.useMemo[filteredToasts]"]);
            }
            return toasts.filter({
                "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>!toast.toasterId
            }["Toaster.Toaster.useMemo[filteredToasts]"]);
        }
    }["Toaster.Toaster.useMemo[filteredToasts]"], [
        toasts,
        id
    ]);
    const possiblePositions = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[possiblePositions]": ()=>{
            return Array.from(new Set([
                position
            ].concat(filteredToasts.filter({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]).map({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]))));
        }
    }["Toaster.Toaster.useMemo[possiblePositions]"], [
        filteredToasts,
        position
    ]);
    const [heights, setHeights] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [interacting, setInteracting] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [actualTheme, setActualTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(theme !== 'system' ? theme : typeof window !== 'undefined' ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFocusWithinRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const removeToast = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toaster.Toaster.useCallback[removeToast]": (toastToRemove)=>{
            setToasts({
                "Toaster.Toaster.useCallback[removeToast]": (toasts)=>{
                    var _toasts_find;
                    if (!((_toasts_find = toasts.find({
                        "Toaster.Toaster.useCallback[removeToast]": (toast)=>toast.id === toastToRemove.id
                    }["Toaster.Toaster.useCallback[removeToast]"])) == null ? void 0 : _toasts_find.delete)) {
                        ToastState.dismiss(toastToRemove.id);
                    }
                    return toasts.filter({
                        "Toaster.Toaster.useCallback[removeToast]": (param)=>{
                            let { id } = param;
                            return id !== toastToRemove.id;
                        }
                    }["Toaster.Toaster.useCallback[removeToast]"]);
                }
            }["Toaster.Toaster.useCallback[removeToast]"]);
        }
    }["Toaster.Toaster.useCallback[removeToast]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            return ToastState.subscribe({
                "Toaster.Toaster.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        // Prevent batching of other state updates
                        requestAnimationFrame({
                            "Toaster.Toaster.useEffect": ()=>{
                                setToasts({
                                    "Toaster.Toaster.useEffect": (toasts)=>toasts.map({
                                            "Toaster.Toaster.useEffect": (t)=>t.id === toast.id ? {
                                                    ...t,
                                                    delete: true
                                                } : t
                                        }["Toaster.Toaster.useEffect"])
                                }["Toaster.Toaster.useEffect"]);
                            }
                        }["Toaster.Toaster.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "Toaster.Toaster.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "Toaster.Toaster.useEffect": ()=>{
                                    setToasts({
                                        "Toaster.Toaster.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "Toaster.Toaster.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["Toaster.Toaster.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["Toaster.Toaster.useEffect"]);
                                }
                            }["Toaster.Toaster.useEffect"]);
                        }
                    }["Toaster.Toaster.useEffect"]);
                }
            }["Toaster.Toaster.useEffect"]);
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (theme !== 'system') {
                setActualTheme(theme);
                return;
            }
            if (theme === 'system') {
                // check if current preference is dark
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // it's currently dark
                    setActualTheme('dark');
                } else {
                    // it's not dark
                    setActualTheme('light');
                }
            }
            if (typeof window === 'undefined') return;
            const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            try {
                // Chrome & Firefox
                darkMediaQuery.addEventListener('change', {
                    "Toaster.Toaster.useEffect": (param)=>{
                        let { matches } = param;
                        if (matches) {
                            setActualTheme('dark');
                        } else {
                            setActualTheme('light');
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            } catch (error) {
                // Safari < 14
                darkMediaQuery.addListener({
                    "Toaster.Toaster.useEffect": (param)=>{
                        let { matches } = param;
                        try {
                            if (matches) {
                                setActualTheme('dark');
                            } else {
                                setActualTheme('light');
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        theme
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            // Ensure expanded is always false when no toasts are present / only one left
            if (toasts.length <= 1) {
                setExpanded(false);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            const handleKeyDown = {
                "Toaster.Toaster.useEffect.handleKeyDown": (event)=>{
                    var _listRef_current;
                    const isHotkeyPressed = hotkey.every({
                        "Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed": (key)=>event[key] || event.code === key
                    }["Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed"]);
                    if (isHotkeyPressed) {
                        var _listRef_current1;
                        setExpanded(true);
                        (_listRef_current1 = listRef.current) == null ? void 0 : _listRef_current1.focus();
                    }
                    if (event.code === 'Escape' && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) {
                        setExpanded(false);
                    }
                }
            }["Toaster.Toaster.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "Toaster.Toaster.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["Toaster.Toaster.useEffect"];
        }
    }["Toaster.Toaster.useEffect"], [
        hotkey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (listRef.current) {
                return ({
                    "Toaster.Toaster.useEffect": ()=>{
                        if (lastFocusedElementRef.current) {
                            lastFocusedElementRef.current.focus({
                                preventScroll: true
                            });
                            lastFocusedElementRef.current = null;
                            isFocusWithinRef.current = false;
                        }
                    }
                })["Toaster.Toaster.useEffect"];
            }
        }
    }["Toaster.Toaster.useEffect"], [
        listRef.current
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: ref,
        "aria-label": "".concat(containerAriaLabel, " ").concat(hotkeyLabel),
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: true
    }, possiblePositions.map((position, index)=>{
        var _heights_;
        const [y, x] = position.split('-');
        if (!filteredToasts.length) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: position,
            dir: dir === 'auto' ? getDocumentDirection() : dir,
            tabIndex: -1,
            ref: listRef,
            className: className,
            "data-sonner-toaster": true,
            "data-sonner-theme": actualTheme,
            "data-y-position": y,
            "data-x-position": x,
            style: {
                '--front-toast-height': "".concat(((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0, "px"),
                '--width': "".concat(TOAST_WIDTH, "px"),
                '--gap': "".concat(gap, "px"),
                ...style,
                ...assignOffset(offset, mobileOffset)
            },
            onBlur: (event)=>{
                if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
                    isFocusWithinRef.current = false;
                    if (lastFocusedElementRef.current) {
                        lastFocusedElementRef.current.focus({
                            preventScroll: true
                        });
                        lastFocusedElementRef.current = null;
                    }
                }
            },
            onFocus: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                if (!isFocusWithinRef.current) {
                    isFocusWithinRef.current = true;
                    lastFocusedElementRef.current = event.relatedTarget;
                }
            },
            onMouseEnter: ()=>setExpanded(true),
            onMouseMove: ()=>setExpanded(true),
            onMouseLeave: ()=>{
                // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                if (!interacting) {
                    setExpanded(false);
                }
            },
            onDragEnd: ()=>setExpanded(false),
            onPointerDown: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                setInteracting(true);
            },
            onPointerUp: ()=>setInteracting(false)
        }, filteredToasts.filter((toast)=>!toast.position && index === 0 || toast.position === position).map((toast, index)=>{
            var _toastOptions_duration, _toastOptions_closeButton;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Toast, {
                key: toast.id,
                icons: icons,
                index: index,
                toast: toast,
                defaultRichColors: richColors,
                duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
                className: toastOptions == null ? void 0 : toastOptions.className,
                descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
                invert: invert,
                visibleToasts: visibleToasts,
                closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
                interacting: interacting,
                position: position,
                style: toastOptions == null ? void 0 : toastOptions.style,
                unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
                classNames: toastOptions == null ? void 0 : toastOptions.classNames,
                cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
                actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
                closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
                removeToast: removeToast,
                toasts: filteredToasts.filter((t)=>t.position == toast.position),
                heights: heights.filter((h)=>h.position == toast.position),
                setHeights: setHeights,
                expandByDefault: expand,
                gap: gap,
                expanded: expanded,
                swipeDirections: props.swipeDirections
            });
        }));
    }));
});
;
}),
]);

//# sourceMappingURL=73d67_a3edb16b._.js.map