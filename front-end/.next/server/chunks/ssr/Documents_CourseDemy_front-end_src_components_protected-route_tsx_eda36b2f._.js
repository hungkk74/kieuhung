module.exports = [
"[project]/Documents/CourseDemy/front-end/src/components/protected-route.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Phân quyền FE
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/redux/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProtectedRoute({ allowedRoles, children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.auth);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedRole = user?.role;
        if (!storedRole || !allowedRoles.includes(storedRole)) {
            router.push("/login"); // không có quyền thì về login
        } else {
            setRole(storedRole);
        }
    }, [
        allowedRoles,
        router
    ]);
    if (!role) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Đang kiểm tra quyền..."
    }, void 0, false, {
        fileName: "[project]/Documents/CourseDemy/front-end/src/components/protected-route.tsx",
        lineNumber: 31,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=Documents_CourseDemy_front-end_src_components_protected-route_tsx_eda36b2f._.js.map