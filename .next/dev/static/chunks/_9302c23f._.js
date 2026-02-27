(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load cart from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const savedCart = localStorage.getItem("petshop-cart");
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
            setMounted(true);
        }
    }["CartProvider.useEffect"], []);
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (mounted) {
                localStorage.setItem("petshop-cart", JSON.stringify(cart));
            }
        }
    }["CartProvider.useEffect"], [
        cart,
        mounted
    ]);
    const addToCart = (item)=>{
        setCart((prevCart)=>{
            const variantKey = item.variants ? JSON.stringify(item.variants) : "";
            const existingItem = prevCart.find((i)=>i.id === item.id && JSON.stringify(i.variants || {}) === variantKey);
            if (existingItem) {
                return prevCart.map((i)=>i.id === item.id && JSON.stringify(i.variants || {}) === variantKey ? {
                        ...i,
                        quantity: i.quantity + item.quantity
                    } : i);
            }
            return [
                ...prevCart,
                item
            ];
        });
    };
    const removeFromCart = (id, variants)=>{
        setCart((prevCart)=>{
            const variantKey = variants ? JSON.stringify(variants) : "";
            return prevCart.filter((item)=>!(item.id === id && JSON.stringify(item.variants || {}) === variantKey));
        });
    };
    const updateQuantity = (id, quantity, variants)=>{
        if (quantity <= 0) {
            removeFromCart(id, variants);
        } else {
            setCart((prevCart)=>prevCart.map((item)=>{
                    const variantKey = variants ? JSON.stringify(variants) : "";
                    return item.id === id && JSON.stringify(item.variants || {}) === variantKey ? {
                        ...item,
                        quantity
                    } : item;
                }));
        }
    };
    const clearCart = ()=>{
        setCart([]);
    };
    const total = cart.reduce((sum, item)=>{
        const itemPrice = item.variantPrice || item.price;
        return sum + itemPrice * item.quantity;
    }, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            total
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/cart-context.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "U6yeJswJUQOQOAQkUtoja05ZgsU=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [authLoading, setAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const u = localStorage.getItem("petshop-user");
            const t = localStorage.getItem("petshop-token");
            if (!u || !t) {
                setAuthLoading(false);
                return;
            }
            try {
                const parsedUser = JSON.parse(u);
                if (parsedUser && typeof parsedUser === "object") {
                    setUser(parsedUser);
                    setToken(t);
                } else {
                    localStorage.removeItem("petshop-user");
                    localStorage.removeItem("petshop-token");
                }
            } catch  {
                localStorage.removeItem("petshop-user");
                localStorage.removeItem("petshop-token");
            }
            setAuthLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = (user, token)=>{
        if (!user || !token) return;
        setUser(user);
        setToken(token);
        localStorage.setItem("petshop-user", JSON.stringify(user));
        localStorage.setItem("petshop-token", token);
    };
    // const logout = () => {
    //   setUser(null)
    //   setToken(null)
    //   localStorage.removeItem("petshop-user")
    //   localStorage.removeItem("petshop-token")
    // }
    const logout = async ()=>{
        try {
            if (token) {
                await fetch(`${("TURBOPACK compile-time value", "http://petshop-be.test/api")}/logout`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/json"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "0Pyt2+Doa6yelums4tWEP9rLOjU=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dark-reader-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkReaderProvider",
    ()=>DarkReaderProvider,
    "useDarkReader",
    ()=>useDarkReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const DarkReaderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function DarkReaderProvider({ children }) {
    _s();
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DarkReaderProvider.useEffect": ()=>{
            let darkreader;
            const init = {
                "DarkReaderProvider.useEffect.init": async ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    darkreader = await __turbopack_context__.A("[project]/node_modules/darkreader/darkreader.mjs [app-client] (ecmascript, async loader)");
                    const saved = localStorage.getItem("dark-reader");
                    if (saved === "true") {
                        darkreader.enable({
                            brightness: 100,
                            contrast: 90,
                            sepia: 10
                        });
                        setEnabled(true);
                    }
                }
            }["DarkReaderProvider.useEffect.init"];
            init();
            return ({
                "DarkReaderProvider.useEffect": ()=>{
                    if (darkreader?.disable) {
                        darkreader.disable();
                    }
                }
            })["DarkReaderProvider.useEffect"];
        }
    }["DarkReaderProvider.useEffect"], []);
    const toggle = async ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const darkreader = await __turbopack_context__.A("[project]/node_modules/darkreader/darkreader.mjs [app-client] (ecmascript, async loader)");
        if (enabled) {
            darkreader.disable();
            localStorage.setItem("dark-reader", "false");
            setEnabled(false);
        } else {
            darkreader.enable({
                brightness: 100,
                contrast: 90,
                sepia: 10
            });
            localStorage.setItem("dark-reader", "true");
            setEnabled(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkReaderContext.Provider, {
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
_s(DarkReaderProvider, "KO045EdmUKRrcVNzr+fxbg9aW04=");
_c = DarkReaderProvider;
function useDarkReader() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DarkReaderContext);
    if (!ctx) {
        throw new Error("useDarkReader must be used within DarkReaderProvider");
    }
    return ctx;
}
_s1(useDarkReader, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "DarkReaderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9302c23f._.js.map