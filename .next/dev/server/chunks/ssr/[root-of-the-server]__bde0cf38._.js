module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/api.ts
__turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch,
    "fetchCategories",
    ()=>fetchCategories,
    "fetchProduct",
    ()=>fetchProduct,
    "fetchProducts",
    ()=>fetchProducts,
    "validateCartAPI",
    ()=>validateCartAPI
]);
async function apiFetch(endpoint, options = {}, token) {
    const res = await fetch(`${("TURBOPACK compile-time value", "http://petshop-be.test/api")}${endpoint}`, {
        ...options,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {},
            ...options.headers
        }
    });
    let data = null;
    try {
        data = await res.json();
    } catch  {
    // response bukan JSON (misalnya 204)
    }
    if (!res.ok) {
        throw data || {
            message: "Terjadi kesalahan server"
        };
    }
    return data;
}
async function fetchProducts(params) {
    const url = `${("TURBOPACK compile-time value", "http://petshop-be.test/api")}/products${params ? `?${params}` : ""}`;
    const res = await fetch(url, {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}
async function fetchProduct(slug) {
    const res = await fetch(`${("TURBOPACK compile-time value", "http://petshop-be.test/api")}/products/${slug}`, {
        cache: "no-store"
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? null;
}
async function fetchCategories() {
    const res = await fetch(`${("TURBOPACK compile-time value", "http://petshop-be.test/api")}/product-categories`, {
        cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}
async function validateCartAPI(items, token) {
    return apiFetch(`/cart/validate`, {
        method: "POST",
        body: JSON.stringify({
            items: items.map((i)=>({
                    product_id: i.productId,
                    product_variant_id: i.variantId,
                    quantity: i.quantity
                }))
        })
    }, token);
}
}),
"[project]/context/cart-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/* =========================
   CONTEXT
========================= */ const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [viewCart, setViewCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* =========================
     LOAD localStorage
  ========================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem("petshop-cart");
            if (saved) setCart(JSON.parse(saved));
        } catch  {
            localStorage.removeItem("petshop-cart");
        }
        setMounted(true);
    }, []);
    /* =========================
     SAVE localStorage + VALIDATE
  ========================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem("petshop-cart", JSON.stringify(cart));
        if (cart.length > 0) {
            validateCart();
        } else {
            setViewCart([]);
            setTotal(0);
            setLoading(false);
        }
    }, [
        cart,
        mounted
    ]);
    /* =========================
     VALIDATE TO BACKEND
  ========================= */ const validateCart = async ()=>{
        setLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCartAPI"])(cart);
            setViewCart(data.items.map((i)=>({
                    productId: i.product_id,
                    variantId: i.product_variant_id,
                    name: i.name ?? null,
                    image: i.image ?? null,
                    price: i.price ?? 0,
                    quantity: i.quantity,
                    subtotal: i.subtotal ?? 0,
                    available: i.available,
                    reason: i.reason ?? null
                })));
            setTotal(data.total ?? 0);
        } catch (err) {
            console.error("Cart validation error:", err);
        } finally{
            setLoading(false); // 👈 PASTI jalan
        }
    };
    /* =========================
     ACTIONS
  ========================= */ const addToCart = (item)=>{
        setCart((prev)=>{
            const exist = prev.find((i)=>i.productId === item.productId && i.variantId === item.variantId);
            if (exist) {
                return prev.map((i)=>i.productId === item.productId && i.variantId === item.variantId ? {
                        ...i,
                        quantity: i.quantity + item.quantity
                    } : i);
            }
            return [
                ...prev,
                item
            ];
        });
    };
    const updateQuantity = (item)=>{
        setCart((prev)=>prev.map((i)=>i.productId === item.productId && i.variantId === item.variantId ? item : i));
    };
    const removeItem = (productId, variantId)=>{
        setCart((prev)=>prev.filter((i)=>!(i.productId === productId && i.variantId === variantId)));
    };
    const clearCart = ()=>{
        setCart([]);
        setViewCart([]);
        setTotal(0);
        localStorage.removeItem("petshop-cart");
    };
    const refresh = async ()=>{
        if (cart.length) await validateCart();
    };
    /* =========================
     DERIVED STATE
  ========================= */ const hasUnavailable = viewCart.some((item)=>!item.available);
    /* =========================
     PROVIDER
  ========================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            viewCart,
            total,
            hasUnavailable,
            loading,
            addToCart,
            updateQuantity,
            removeItem,
            clearCart,
            refresh
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/cart-context.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
function useCart() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!ctx) {
        throw new Error("useCart must be used within CartProvider");
    }
    return ctx;
}
}),
"[project]/context/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [authLoading, setAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ================= LOAD AUTH ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const u = localStorage.getItem("petshop-user");
        const t = localStorage.getItem("petshop-token");
        if (!u || !t) {
            setAuthLoading(false);
            return;
        }
        try {
            const parsedUser = JSON.parse(u);
            setUser(parsedUser);
            setToken(t);
        } catch  {
            localStorage.removeItem("petshop-user");
            localStorage.removeItem("petshop-token");
        }
        setAuthLoading(false);
    }, []);
    /* ================= MERGE GUEST CART ================= */ const syncGuestCartToDB = async (token)=>{
        const guestCartRaw = localStorage.getItem("petshop-cart");
        if (!guestCartRaw) return;
        let guestCart;
        try {
            guestCart = JSON.parse(guestCartRaw);
        } catch  {
            console.error("Invalid guest cart format");
            return;
        }
        if (!Array.isArray(guestCart) || guestCart.length === 0) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])("/cart", {
                method: "POST",
                body: JSON.stringify({
                    items: guestCart.map((item)=>({
                            product_id: item.productId,
                            product_variant_id: item.variantId,
                            quantity: item.quantity
                        }))
                })
            }, token);
            // ✅ HAPUS SETELAH BERHASIL
            localStorage.removeItem("petshop-cart");
        } catch (err) {
            console.error("Failed to sync guest cart:", err);
        // ❗ jangan hapus localStorage kalau gagal
        }
    };
    /* ================= LOGIN ================= */ const login = async (user, token)=>{
        if (!user || !token) return;
        setUser(user);
        setToken(token);
        localStorage.setItem("petshop-user", JSON.stringify(user));
        localStorage.setItem("petshop-token", token);
        // 🔥 INI TEMPAT YANG BENAR
        await syncGuestCartToDB(token);
    };
    /* ================= LOGOUT ================= */ const logout = async ()=>{
        try {
            if (token) {
                await fetch(`${("TURBOPACK compile-time value", "http://petshop-be.test/api")}/logout`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json"
                    }
                });
            }
        } catch (error) {
            console.error("Logout error:", error);
        } finally{
            setUser(null);
            setToken(null);
            localStorage.removeItem("petshop-user");
            localStorage.removeItem("petshop-token");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            authLoading,
            login,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
}),
"[project]/components/dark-reader-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkReaderProvider",
    ()=>DarkReaderProvider,
    "useDarkReader",
    ()=>useDarkReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DarkReaderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function DarkReaderProvider({ children }) {
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let darkreader;
        const init = async ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
            const saved = undefined;
        };
        init();
        return ()=>{
            if (darkreader?.disable) {
                darkreader.disable();
            }
        };
    }, []);
    const toggle = async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const darkreader = undefined;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkReaderContext.Provider, {
        value: {
            enabled,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/dark-reader-provider.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function useDarkReader() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DarkReaderContext);
    if (!ctx) {
        throw new Error("useDarkReader must be used within DarkReaderProvider");
    }
    return ctx;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bde0cf38._.js.map