(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/CourseDemy/front-end/src/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider(param) {
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/CourseDemy/front-end/src/components/theme-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/api/axiosClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/api/axiosClient.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosClient = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:8081"),
    withCredentials: true
});
// Interceptor request
axiosClient.interceptors.request.use((config)=>{
    // Gắn token nếu có
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") : "TURBOPACK unreachable";
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    // Nếu body là FormData => để axios tự set multipart/form-data
    if (config.data instanceof FormData) {
    // KHÔNG set Content-Type ở đây,
    // để axios tự thêm boundary phù hợp
    } else {
        // Nếu không phải FormData => gửi JSON
        config.headers["Content-Type"] = "application/json";
    }
    return config;
}, (error)=>Promise.reject(error));
// Interceptor response
axiosClient.interceptors.response.use((response)=>response, (error)=>{
    var _error_response;
    const status = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status;
    if (status === 401) {
        console.warn("Unauthorized - Có thể token hết hạn");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/hooks/useApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApi",
    ()=>useApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$api$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/api/axiosClient.ts [app-client] (ecmascript)");
;
function useApi() {
    async function get(url) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$api$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url);
        return res.data;
    }
    async function post(url, data) {
        const res = data ? await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$api$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url, data) : await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$api$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url);
        return res.data;
    }
    async function put(url, data) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$api$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(url, data);
        return res.data;
    }
    async function remove(url) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$api$2f$axiosClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(url);
        return res.data;
    }
    return {
        get,
        post,
        put,
        remove
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/features/auth/authThunks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginUserThunk",
    ()=>loginUserThunk,
    "logoutThunk",
    ()=>logoutThunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/hooks/useApi.ts [app-client] (ecmascript)");
;
;
const { post } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"])();
const loginUserThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/login", async (credentials, param)=>{
    let { rejectWithValue } = param;
    try {
        const res = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:8081"), "/login"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });
        if (!res.ok) {
            const error = await res.json().catch(()=>({}));
            return rejectWithValue(error.message || "Sai tài khoản hoặc mật khẩu");
        }
        const data = await res.json();
        return data.token;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});
const logoutThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/logout", async ()=>{
    localStorage.removeItem("token");
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/features/auth/authSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearError",
    ()=>clearError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCredentials",
    ()=>setCredentials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authThunks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/features/auth/authThunks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
;
;
;
//  State khởi tạo
const initialState = {
    token: null,
    user: null,
    loading: false,
    error: null
};
//  Tạo Slice
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        // Dùng khi reload trang (ReduxProvider khôi phục)
        setCredentials: (state, action)=>{
            state.token = action.payload.token;
            state.user = action.payload.user;
        }
    },
    extraReducers: (builder)=>{
        //  LOGIN
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authThunks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUserThunk"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authThunks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUserThunk"].fulfilled, (state, action)=>{
            state.loading = false;
            state.token = action.payload;
            try {
                // Giải mã token lấy thông tin user
                const decodedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(action.payload);
                state.user = decodedUser;
                // Lưu localStorage
                localStorage.setItem("token", action.payload);
                localStorage.setItem("user", JSON.stringify(decodedUser));
            } catch (e) {
                console.error("Token không hợp lệ");
            }
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authThunks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUserThunk"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || "Đăng nhập thất bại";
        });
        //  LOGOUT
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authThunks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutThunk"].fulfilled, (state)=>{
            state.token = null;
            state.user = null;
            state.error = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        });
    }
});
const { clearError, setCredentials } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/features/course/courseSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCourse",
    ()=>clearCourse,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCourse",
    ()=>setCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    courseId: null,
    courseTitle: ""
};
const courseSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "course",
    initialState,
    reducers: {
        setCourse: (state, action)=>{
            state.courseId = action.payload.courseId;
            state.courseTitle = action.payload.courseTitle;
            // Lưu vào localStorage
            localStorage.setItem("course", JSON.stringify(action.payload));
        },
        clearCourse: (state)=>{
            state.courseId = null;
            state.courseTitle = "";
            localStorage.removeItem("course");
        }
    }
});
const { setCourse, clearCourse } = courseSlice.actions;
const __TURBOPACK__default__export__ = courseSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/redux/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// redux/store.ts
__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
// Import các slice
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/features/auth/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$course$2f$courseSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/features/course/courseSlice.ts [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        course: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$course$2f$courseSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        cart: cartReducer
    },
    devTools: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CourseDemy/front-end/src/redux/provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/redux/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/features/auth/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$course$2f$courseSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CourseDemy/front-end/src/features/course/courseSlice.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ReduxProvider(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(); // Lấy đường dẫn hiện tại
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReduxProvider.useEffect": ()=>{
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");
            // Chỉ redirect nếu đang ở trang root hoặc login
            const isAtRootOrLogin = pathname === "/" || pathname === "/login";
            if (token && user) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCredentials"])({
                    token,
                    user: JSON.parse(user)
                }));
                if (isAtRootOrLogin) {
                    router.push("/home");
                }
            }
        }
    }["ReduxProvider.useEffect"], [
        pathname,
        router
    ]);
    // Set lại course redux khi load trang
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReduxProvider.useEffect": ()=>{
            const courseData = localStorage.getItem("course");
            if (courseData) {
                const parsed = JSON.parse(courseData);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$features$2f$course$2f$courseSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCourse"])(parsed));
            }
        }
    }["ReduxProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/CourseDemy/front-end/src/redux/provider.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_s(ReduxProvider, "XUemiwTtrXE7KsB9rwseGqqgusE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CourseDemy$2f$front$2d$end$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_CourseDemy_front-end_src_b5495394._.js.map