import {
    e as De,
    c as Se,
    o as V,
    H as Ie,
    f as M,
    a as dt,
    t as $t,
    g as ze,
    I as Os,
    J as Ds,
    C as Ns,
    K as Ps
} from "./Bj09C4Z5.js";
import { j as Zs } from "./BZyC13uY.js";
const Es = { RESULT_OK: "ok", RESULT_NG: "ng" },
    Ts = Symbol("UNIT_SYMBOL"),
    _t = (function () {
        const { RESULT_NG: e, RESULT_OK: t } = Es,
            i = Object.freeze({ _unit: Ts }),
            o = async ({ fn: u, err: d }) => {
                try {
                    const m = await u();
                    return c(m);
                } catch {
                    return l(d);
                }
            },
            n = async ({ fn: u, err: d }) => {
                try {
                    return (await u(), c(i));
                } catch {
                    return l(d);
                }
            },
            r = ({ fn: u, err: d }) => {
                try {
                    const m = u();
                    return c(m);
                } catch {
                    return l(d);
                }
            },
            a = ({ fn: u, err: d }) => {
                try {
                    return (u(), c(i));
                } catch {
                    return l(d);
                }
            },
            c = (u) =>
                Object.freeze({ kind: t, isOk: !0, isErr: !1, value: u }),
            l = (u) => Object.freeze({ kind: e, isOk: !1, isErr: !0, err: u });
        return Object.freeze({
            UNIT: i,
            checkResultReturn: r,
            checkResultVoid: a,
            checkPromiseReturn: o,
            checkPromiseVoid: n,
            createOk: c,
            createNg: l
        });
    })();
function As(e) {
    return e === null;
}
function Rs(e) {
    return e === void 0;
}
const Ls = { OPTION_SOME: "some", OPTION_NONE: "none" },
    vn = (function () {
        const { OPTION_SOME: e, OPTION_NONE: t } = Ls,
            i = (r) =>
                Object.freeze({ kind: e, isSome: !0, isNone: !1, value: r }),
            o = () => Object.freeze({ kind: t, isSome: !1, isNone: !0 });
        return Object.freeze({
            createSome: i,
            createNone: o,
            optionConversion: (r) => (As(r) || Rs(r) ? o() : i(r))
        });
    })();
var st = { cardContainer: "fk0it80", image: "fk0it81", title: "fk0it82" };
const Fs = ["src", "alt", "width", "height"],
    Cs = De({
        __name: "card",
        props: {
            title: {},
            src: {},
            alt: {},
            boxHeight: {},
            srcWidth: {},
            srcHeight: {}
        },
        setup(e) {
            const t = { height: `${e.boxHeight}px`, width: `${e.srcWidth}px` };
            return (i, o) => (
                V(),
                Se(
                    "div",
                    { class: Ie(M(st).cardContainer), style: t },
                    [
                        dt(
                            "img",
                            {
                                class: Ie(M(st).image),
                                src: e.src,
                                alt: e.alt,
                                width: e.srcWidth,
                                height: e.srcHeight
                            },
                            null,
                            10,
                            Fs
                        ),
                        dt("p", { class: Ie(M(st).title) }, $t(e.title), 3)
                    ],
                    2
                )
            );
        }
    }),
    pi = De({
        __name: "error",
        props: { errorMessage: {} },
        setup(e) {
            const t = e;
            return (i, o) => (
                V(),
                Se("p", null, "Error:" + $t(t.errorMessage), 1)
            );
        }
    });
var vi = { gridBoxBaseStyles: "i2mzpj0", titleStyles: "i2mzpj1" };
const Js = De({
        __name: "character-list",
        props: { characterList: {}, title: {} },
        setup(e) {
            const t = e;
            return (i, o) => (
                V(),
                Se("main", null, [
                    dt("h1", { class: Ie(M(vi).titleStyles) }, $t(t.title), 3),
                    t.characterList.isErr
                        ? (V(),
                          ze(
                              M(pi),
                              {
                                  key: 0,
                                  errorMessage: t.characterList.err.message
                              },
                              null,
                              8,
                              ["errorMessage"]
                          ))
                        : t.characterList.value.isNone
                          ? (V(),
                            ze(M(pi), {
                                key: 1,
                                "error-message": "データがありません"
                            }))
                          : (V(),
                            Se(
                                "div",
                                { key: 2, class: Ie(M(vi).gridBoxBaseStyles) },
                                [
                                    (V(!0),
                                    Se(
                                        Os,
                                        null,
                                        Ds(
                                            t.characterList.value.value,
                                            (n) => (
                                                V(),
                                                ze(
                                                    M(Cs),
                                                    {
                                                        key: n.id,
                                                        title: n.name,
                                                        src: n.image,
                                                        alt: n.name,
                                                        boxHeight: 300,
                                                        srcWidth: 150,
                                                        srcHeight: 200
                                                    },
                                                    null,
                                                    8,
                                                    ["title", "src", "alt"]
                                                )
                                            )
                                        ),
                                        128
                                    ))
                                ],
                                2
                            ))
                ])
            );
        }
    }),
    Zi = Object.freeze({ status: "aborted" });
function s(e, t, i) {
    function o(c, l) {
        if (
            (c._zod ||
                Object.defineProperty(c, "_zod", {
                    value: { def: l, constr: a, traits: new Set() },
                    enumerable: !1
                }),
            c._zod.traits.has(e))
        )
            return;
        (c._zod.traits.add(e), t(c, l));
        const u = a.prototype,
            d = Object.keys(u);
        for (let m = 0; m < d.length; m++) {
            const v = d[m];
            v in c || (c[v] = u[v].bind(c));
        }
    }
    const n = i?.Parent ?? Object;
    class r extends n {}
    Object.defineProperty(r, "name", { value: e });
    function a(c) {
        var l;
        const u = i?.Parent ? new r() : this;
        (o(u, c), (l = u._zod).deferred ?? (l.deferred = []));
        for (const d of u._zod.deferred) d();
        return u;
    }
    return (
        Object.defineProperty(a, "init", { value: o }),
        Object.defineProperty(a, Symbol.hasInstance, {
            value: (c) =>
                i?.Parent && c instanceof i.Parent
                    ? !0
                    : c?._zod?.traits?.has(e)
        }),
        Object.defineProperty(a, "name", { value: e }),
        a
    );
}
const Ei = Symbol("zod_brand");
class re extends Error {
    constructor() {
        super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead."
        );
    }
}
class gn extends Error {
    constructor(t) {
        (super(`Encountered unidirectional transform during encode: ${t}`),
            (this.name = "ZodEncodeError"));
    }
}
const cn = {};
function N(e) {
    return (e && Object.assign(cn, e), cn);
}
function Ms(e) {
    return e;
}
function Ks(e) {
    return e;
}
function Vs(e) {}
function Bs(e) {
    throw new Error("Unexpected value in exhaustive check");
}
function Gs(e) {}
function hn(e) {
    const t = Object.values(e).filter((o) => typeof o == "number");
    return Object.entries(e)
        .filter(([o, n]) => t.indexOf(+o) === -1)
        .map(([o, n]) => n);
}
function p(e, t = "|") {
    return e.map((i) => $(i)).join(t);
}
function un(e, t) {
    return typeof t == "bigint" ? t.toString() : t;
}
function Ne(e) {
    return {
        get value() {
            {
                const t = e();
                return (Object.defineProperty(this, "value", { value: t }), t);
            }
        }
    };
}
function ce(e) {
    return e == null;
}
function $n(e) {
    const t = e.startsWith("^") ? 1 : 0,
        i = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, i);
}
function Ti(e, t) {
    const i = (e.toString().split(".")[1] || "").length,
        o = t.toString();
    let n = (o.split(".")[1] || "").length;
    if (n === 0 && /\d?e-\d?/.test(o)) {
        const l = o.match(/\d?e-(\d?)/);
        l?.[1] && (n = Number.parseInt(l[1]));
    }
    const r = i > n ? i : n,
        a = Number.parseInt(e.toFixed(r).replace(".", "")),
        c = Number.parseInt(t.toFixed(r).replace(".", ""));
    return (a % c) / 10 ** r;
}
const gi = Symbol("evaluating");
function k(e, t, i) {
    let o;
    Object.defineProperty(e, t, {
        get() {
            if (o !== gi) return (o === void 0 && ((o = gi), (o = i())), o);
        },
        set(n) {
            Object.defineProperty(e, t, { value: n });
        },
        configurable: !0
    });
}
function Ws(e) {
    return Object.create(
        Object.getPrototypeOf(e),
        Object.getOwnPropertyDescriptors(e)
    );
}
function ne(e, t, i) {
    Object.defineProperty(e, t, {
        value: i,
        writable: !0,
        enumerable: !0,
        configurable: !0
    });
}
function G(...e) {
    const t = {};
    for (const i of e) {
        const o = Object.getOwnPropertyDescriptors(i);
        Object.assign(t, o);
    }
    return Object.defineProperties({}, t);
}
function qs(e) {
    return G(e._zod.def);
}
function Xs(e, t) {
    return t ? t.reduce((i, o) => i?.[o], e) : e;
}
function Ys(e) {
    const t = Object.keys(e),
        i = t.map((o) => e[o]);
    return Promise.all(i).then((o) => {
        const n = {};
        for (let r = 0; r < t.length; r++) n[t[r]] = o[r];
        return n;
    });
}
function Hs(e = 10) {
    const t = "abcdefghijklmnopqrstuvwxyz";
    let i = "";
    for (let o = 0; o < e; o++) i += t[Math.floor(Math.random() * t.length)];
    return i;
}
function mt(e) {
    return JSON.stringify(e);
}
function Ai(e) {
    return e
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
const bt =
    "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function se(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ri = Ne(() => {
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
        return !1;
    try {
        const e = Function;
        return (new e(""), !0);
    } catch {
        return !1;
    }
});
function ie(e) {
    if (se(e) === !1) return !1;
    const t = e.constructor;
    if (t === void 0 || typeof t != "function") return !0;
    const i = t.prototype;
    return !(
        se(i) === !1 ||
        Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1
    );
}
function _n(e) {
    return ie(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function Qs(e) {
    let t = 0;
    for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && t++;
    return t;
}
const ed = (e) => {
        const t = typeof e;
        switch (t) {
            case "undefined":
                return "undefined";
            case "string":
                return "string";
            case "number":
                return Number.isNaN(e) ? "nan" : "number";
            case "boolean":
                return "boolean";
            case "function":
                return "function";
            case "bigint":
                return "bigint";
            case "symbol":
                return "symbol";
            case "object":
                return Array.isArray(e)
                    ? "array"
                    : e === null
                      ? "null"
                      : e.then &&
                          typeof e.then == "function" &&
                          e.catch &&
                          typeof e.catch == "function"
                        ? "promise"
                        : typeof Map < "u" && e instanceof Map
                          ? "map"
                          : typeof Set < "u" && e instanceof Set
                            ? "set"
                            : typeof Date < "u" && e instanceof Date
                              ? "date"
                              : typeof File < "u" && e instanceof File
                                ? "file"
                                : "object";
            default:
                throw new Error(`Unknown data type: ${t}`);
        }
    },
    ln = new Set(["string", "number", "symbol"]),
    Li = new Set([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined"
    ]);
function q(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function J(e, t, i) {
    const o = new e._zod.constr(t ?? e._zod.def);
    return ((!t || i?.parent) && (o._zod.parent = e), o);
}
function f(e) {
    const t = e;
    if (!t) return {};
    if (typeof t == "string") return { error: () => t };
    if (t?.message !== void 0) {
        if (t?.error !== void 0)
            throw new Error("Cannot specify both `message` and `error` params");
        t.error = t.message;
    }
    return (
        delete t.message,
        typeof t.error == "string" ? { ...t, error: () => t.error } : t
    );
}
function nd(e) {
    let t;
    return new Proxy(
        {},
        {
            get(i, o, n) {
                return (t ?? (t = e()), Reflect.get(t, o, n));
            },
            set(i, o, n, r) {
                return (t ?? (t = e()), Reflect.set(t, o, n, r));
            },
            has(i, o) {
                return (t ?? (t = e()), Reflect.has(t, o));
            },
            deleteProperty(i, o) {
                return (t ?? (t = e()), Reflect.deleteProperty(t, o));
            },
            ownKeys(i) {
                return (t ?? (t = e()), Reflect.ownKeys(t));
            },
            getOwnPropertyDescriptor(i, o) {
                return (t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, o));
            },
            defineProperty(i, o, n) {
                return (t ?? (t = e()), Reflect.defineProperty(t, o, n));
            }
        }
    );
}
function $(e) {
    return typeof e == "bigint"
        ? e.toString() + "n"
        : typeof e == "string"
          ? `"${e}"`
          : `${e}`;
}
function Fi(e) {
    return Object.keys(e).filter(
        (t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional"
    );
}
const Ci = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
    },
    Ji = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")]
    };
function Mi(e, t) {
    const i = e._zod.def,
        o = i.checks;
    if (o && o.length > 0)
        throw new Error(
            ".pick() cannot be used on object schemas containing refinements"
        );
    const r = G(e._zod.def, {
        get shape() {
            const a = {};
            for (const c in t) {
                if (!(c in i.shape))
                    throw new Error(`Unrecognized key: "${c}"`);
                t[c] && (a[c] = i.shape[c]);
            }
            return (ne(this, "shape", a), a);
        },
        checks: []
    });
    return J(e, r);
}
function Ki(e, t) {
    const i = e._zod.def,
        o = i.checks;
    if (o && o.length > 0)
        throw new Error(
            ".omit() cannot be used on object schemas containing refinements"
        );
    const r = G(e._zod.def, {
        get shape() {
            const a = { ...e._zod.def.shape };
            for (const c in t) {
                if (!(c in i.shape))
                    throw new Error(`Unrecognized key: "${c}"`);
                t[c] && delete a[c];
            }
            return (ne(this, "shape", a), a);
        },
        checks: []
    });
    return J(e, r);
}
function Vi(e, t) {
    if (!ie(t))
        throw new Error("Invalid input to extend: expected a plain object");
    const i = e._zod.def.checks;
    if (i && i.length > 0) {
        const r = e._zod.def.shape;
        for (const a in t)
            if (Object.getOwnPropertyDescriptor(r, a) !== void 0)
                throw new Error(
                    "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead."
                );
    }
    const n = G(e._zod.def, {
        get shape() {
            const r = { ...e._zod.def.shape, ...t };
            return (ne(this, "shape", r), r);
        }
    });
    return J(e, n);
}
function Bi(e, t) {
    if (!ie(t))
        throw new Error("Invalid input to safeExtend: expected a plain object");
    const i = G(e._zod.def, {
        get shape() {
            const o = { ...e._zod.def.shape, ...t };
            return (ne(this, "shape", o), o);
        }
    });
    return J(e, i);
}
function Gi(e, t) {
    const i = G(e._zod.def, {
        get shape() {
            const o = { ...e._zod.def.shape, ...t._zod.def.shape };
            return (ne(this, "shape", o), o);
        },
        get catchall() {
            return t._zod.def.catchall;
        },
        checks: []
    });
    return J(e, i);
}
function Wi(e, t, i) {
    const n = t._zod.def.checks;
    if (n && n.length > 0)
        throw new Error(
            ".partial() cannot be used on object schemas containing refinements"
        );
    const a = G(t._zod.def, {
        get shape() {
            const c = t._zod.def.shape,
                l = { ...c };
            if (i)
                for (const u in i) {
                    if (!(u in c)) throw new Error(`Unrecognized key: "${u}"`);
                    i[u] &&
                        (l[u] = e
                            ? new e({ type: "optional", innerType: c[u] })
                            : c[u]);
                }
            else
                for (const u in c)
                    l[u] = e
                        ? new e({ type: "optional", innerType: c[u] })
                        : c[u];
            return (ne(this, "shape", l), l);
        },
        checks: []
    });
    return J(t, a);
}
function qi(e, t, i) {
    const o = G(t._zod.def, {
        get shape() {
            const n = t._zod.def.shape,
                r = { ...n };
            if (i)
                for (const a in i) {
                    if (!(a in r)) throw new Error(`Unrecognized key: "${a}"`);
                    i[a] &&
                        (r[a] = new e({
                            type: "nonoptional",
                            innerType: n[a]
                        }));
                }
            else
                for (const a in n)
                    r[a] = new e({ type: "nonoptional", innerType: n[a] });
            return (ne(this, "shape", r), r);
        }
    });
    return J(t, o);
}
function te(e, t = 0) {
    if (e.aborted === !0) return !0;
    for (let i = t; i < e.issues.length; i++)
        if (e.issues[i]?.continue !== !0) return !0;
    return !1;
}
function K(e, t) {
    return t.map((i) => {
        var o;
        return ((o = i).path ?? (o.path = []), i.path.unshift(e), i);
    });
}
function ke(e) {
    return typeof e == "string" ? e : e?.message;
}
function C(e, t, i) {
    const o = { ...e, path: e.path ?? [] };
    if (!e.message) {
        const n =
            ke(e.inst?._zod.def?.error?.(e)) ??
            ke(t?.error?.(e)) ??
            ke(i.customError?.(e)) ??
            ke(i.localeError?.(e)) ??
            "Invalid input";
        o.message = n;
    }
    return (
        delete o.inst,
        delete o.continue,
        t?.reportInput || delete o.input,
        o
    );
}
function bn(e) {
    return e instanceof Set
        ? "set"
        : e instanceof Map
          ? "map"
          : e instanceof File
            ? "file"
            : "unknown";
}
function yn(e) {
    return Array.isArray(e)
        ? "array"
        : typeof e == "string"
          ? "string"
          : "unknown";
}
function _(e) {
    const t = typeof e;
    switch (t) {
        case "number":
            return Number.isNaN(e) ? "nan" : "number";
        case "object": {
            if (e === null) return "null";
            if (Array.isArray(e)) return "array";
            const i = e;
            if (
                i &&
                Object.getPrototypeOf(i) !== Object.prototype &&
                "constructor" in i &&
                i.constructor
            )
                return i.constructor.name;
        }
    }
    return t;
}
function de(...e) {
    const [t, i, o] = e;
    return typeof t == "string"
        ? { message: t, code: "custom", input: i, inst: o }
        : { ...t };
}
function td(e) {
    return Object.entries(e)
        .filter(([t, i]) => Number.isNaN(Number.parseInt(t, 10)))
        .map((t) => t[1]);
}
function Xi(e) {
    const t = atob(e),
        i = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) i[o] = t.charCodeAt(o);
    return i;
}
function Yi(e) {
    let t = "";
    for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
    return btoa(t);
}
function rd(e) {
    const t = e.replace(/-/g, "+").replace(/_/g, "/"),
        i = "=".repeat((4 - (t.length % 4)) % 4);
    return Xi(t + i);
}
function id(e) {
    return Yi(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function od(e) {
    const t = e.replace(/^0x/, "");
    if (t.length % 2 !== 0) throw new Error("Invalid hex string length");
    const i = new Uint8Array(t.length / 2);
    for (let o = 0; o < t.length; o += 2)
        i[o / 2] = Number.parseInt(t.slice(o, o + 2), 16);
    return i;
}
function ad(e) {
    return Array.from(e)
        .map((t) => t.toString(16).padStart(2, "0"))
        .join("");
}
class cd {
    constructor(...t) {}
}
const Hi = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                BIGINT_FORMAT_RANGES: Ji,
                Class: cd,
                NUMBER_FORMAT_RANGES: Ci,
                aborted: te,
                allowsEval: Ri,
                assert: Gs,
                assertEqual: Ms,
                assertIs: Vs,
                assertNever: Bs,
                assertNotEqual: Ks,
                assignProp: ne,
                base64ToUint8Array: Xi,
                base64urlToUint8Array: rd,
                cached: Ne,
                captureStackTrace: bt,
                cleanEnum: td,
                cleanRegex: $n,
                clone: J,
                cloneDef: qs,
                createTransparentProxy: nd,
                defineLazy: k,
                esc: mt,
                escapeRegex: q,
                extend: Vi,
                finalizeIssue: C,
                floatSafeRemainder: Ti,
                getElementAtPath: Xs,
                getEnumValues: hn,
                getLengthableOrigin: yn,
                getParsedType: ed,
                getSizableOrigin: bn,
                hexToUint8Array: od,
                isObject: se,
                isPlainObject: ie,
                issue: de,
                joinValues: p,
                jsonStringifyReplacer: un,
                merge: Gi,
                mergeDefs: G,
                normalizeParams: f,
                nullish: ce,
                numKeys: Qs,
                objectClone: Ws,
                omit: Ki,
                optionalKeys: Fi,
                parsedType: _,
                partial: Wi,
                pick: Mi,
                prefixIssues: K,
                primitiveTypes: Li,
                promiseAllObject: Ys,
                propertyKeyTypes: ln,
                randomString: Hs,
                required: qi,
                safeExtend: Bi,
                shallowClone: _n,
                slugify: Ai,
                stringifyPrimitive: $,
                uint8ArrayToBase64: Yi,
                uint8ArrayToBase64url: id,
                uint8ArrayToHex: ad,
                unwrapMessage: ke
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    Qi = (e, t) => {
        ((e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, un, 2)),
            Object.defineProperty(e, "toString", {
                value: () => e.message,
                enumerable: !1
            }));
    },
    yt = s("$ZodError", Qi),
    T = s("$ZodError", Qi, { Parent: Error });
function kt(e, t = (i) => i.message) {
    const i = {},
        o = [];
    for (const n of e.issues)
        n.path.length > 0
            ? ((i[n.path[0]] = i[n.path[0]] || []), i[n.path[0]].push(t(n)))
            : o.push(t(n));
    return { formErrors: o, fieldErrors: i };
}
function St(e, t = (i) => i.message) {
    const i = { _errors: [] },
        o = (n) => {
            for (const r of n.issues)
                if (r.code === "invalid_union" && r.errors.length)
                    r.errors.map((a) => o({ issues: a }));
                else if (r.code === "invalid_key") o({ issues: r.issues });
                else if (r.code === "invalid_element") o({ issues: r.issues });
                else if (r.path.length === 0) i._errors.push(t(r));
                else {
                    let a = i,
                        c = 0;
                    for (; c < r.path.length; ) {
                        const l = r.path[c];
                        (c === r.path.length - 1
                            ? ((a[l] = a[l] || { _errors: [] }),
                              a[l]._errors.push(t(r)))
                            : (a[l] = a[l] || { _errors: [] }),
                            (a = a[l]),
                            c++);
                    }
                }
        };
    return (o(e), i);
}
function eo(e, t = (i) => i.message) {
    const i = { errors: [] },
        o = (n, r = []) => {
            var a, c;
            for (const l of n.issues)
                if (l.code === "invalid_union" && l.errors.length)
                    l.errors.map((u) => o({ issues: u }, l.path));
                else if (l.code === "invalid_key")
                    o({ issues: l.issues }, l.path);
                else if (l.code === "invalid_element")
                    o({ issues: l.issues }, l.path);
                else {
                    const u = [...r, ...l.path];
                    if (u.length === 0) {
                        i.errors.push(t(l));
                        continue;
                    }
                    let d = i,
                        m = 0;
                    for (; m < u.length; ) {
                        const v = u[m],
                            g = m === u.length - 1;
                        (typeof v == "string"
                            ? (d.properties ?? (d.properties = {}),
                              (a = d.properties)[v] ?? (a[v] = { errors: [] }),
                              (d = d.properties[v]))
                            : (d.items ?? (d.items = []),
                              (c = d.items)[v] ?? (c[v] = { errors: [] }),
                              (d = d.items[v])),
                            g && d.errors.push(t(l)),
                            m++);
                    }
                }
        };
    return (o(e), i);
}
function no(e) {
    const t = [],
        i = e.map((o) => (typeof o == "object" ? o.key : o));
    for (const o of i)
        typeof o == "number"
            ? t.push(`[${o}]`)
            : typeof o == "symbol"
              ? t.push(`[${JSON.stringify(String(o))}]`)
              : /[^\w$]/.test(o)
                ? t.push(`[${JSON.stringify(o)}]`)
                : (t.length && t.push("."), t.push(o));
    return t.join("");
}
function to(e) {
    const t = [],
        i = [...e.issues].sort(
            (o, n) => (o.path ?? []).length - (n.path ?? []).length
        );
    for (const o of i)
        (t.push(`✖ ${o.message}`),
            o.path?.length && t.push(`  → at ${no(o.path)}`));
    return t.join(`
`);
}
const Pe = (e) => (t, i, o, n) => {
        const r = o ? Object.assign(o, { async: !1 }) : { async: !1 },
            a = t._zod.run({ value: i, issues: [] }, r);
        if (a instanceof Promise) throw new re();
        if (a.issues.length) {
            const c = new (n?.Err ?? e)(a.issues.map((l) => C(l, r, N())));
            throw (bt(c, n?.callee), c);
        }
        return a.value;
    },
    ft = Pe(T),
    Ze = (e) => async (t, i, o, n) => {
        const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
        let a = t._zod.run({ value: i, issues: [] }, r);
        if ((a instanceof Promise && (a = await a), a.issues.length)) {
            const c = new (n?.Err ?? e)(a.issues.map((l) => C(l, r, N())));
            throw (bt(c, n?.callee), c);
        }
        return a.value;
    },
    pt = Ze(T),
    Ee = (e) => (t, i, o) => {
        const n = o ? { ...o, async: !1 } : { async: !1 },
            r = t._zod.run({ value: i, issues: [] }, n);
        if (r instanceof Promise) throw new re();
        return r.issues.length
            ? {
                  success: !1,
                  error: new (e ?? yt)(r.issues.map((a) => C(a, n, N())))
              }
            : { success: !0, data: r.value };
    },
    ro = Ee(T),
    Te = (e) => async (t, i, o) => {
        const n = o ? Object.assign(o, { async: !0 }) : { async: !0 };
        let r = t._zod.run({ value: i, issues: [] }, n);
        return (
            r instanceof Promise && (r = await r),
            r.issues.length
                ? {
                      success: !1,
                      error: new e(r.issues.map((a) => C(a, n, N())))
                  }
                : { success: !0, data: r.value }
        );
    },
    io = Te(T),
    It = (e) => (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: "backward" })
            : { direction: "backward" };
        return Pe(e)(t, i, n);
    },
    ud = It(T),
    zt = (e) => (t, i, o) => Pe(e)(t, i, o),
    ld = zt(T),
    wt = (e) => async (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: "backward" })
            : { direction: "backward" };
        return Ze(e)(t, i, n);
    },
    sd = wt(T),
    xt = (e) => async (t, i, o) => Ze(e)(t, i, o),
    dd = xt(T),
    Ut = (e) => (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: "backward" })
            : { direction: "backward" };
        return Ee(e)(t, i, n);
    },
    md = Ut(T),
    jt = (e) => (t, i, o) => Ee(e)(t, i, o),
    fd = jt(T),
    Ot = (e) => async (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: "backward" })
            : { direction: "backward" };
        return Te(e)(t, i, n);
    },
    pd = Ot(T),
    Dt = (e) => async (t, i, o) => Te(e)(t, i, o),
    vd = Dt(T),
    oo = /^[cC][^\s-]{8,}$/,
    ao = /^[0-9a-z]+$/,
    co = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    uo = /^[0-9a-vA-V]{20}$/,
    lo = /^[A-Za-z0-9]{27}$/,
    so = /^[a-zA-Z0-9_-]{21}$/,
    mo =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    gd =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    fo =
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    me = (e) =>
        e
            ? new RegExp(
                  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    hd = me(4),
    $d = me(6),
    _d = me(7),
    po =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    bd =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    yd =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    vo = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
    kd = vo,
    Sd =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    Id = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function go() {
    return new RegExp(Id, "u");
}
const ho =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    $o =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    _o = (e) => {
        const t = q(e ?? ":");
        return new RegExp(
            `^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`
        );
    },
    bo =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    yo =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    ko =
        /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    Nt = /^[A-Za-z0-9_-]*$/,
    So =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    Io = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    zo = /^\+[1-9]\d{6,14}$/,
    wo =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    xo = new RegExp(`^${wo}$`);
function Uo(e) {
    const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number"
        ? e.precision === -1
            ? `${t}`
            : e.precision === 0
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function jo(e) {
    return new RegExp(`^${Uo(e)}$`);
}
function Oo(e) {
    const t = Uo({ precision: e.precision }),
        i = ["Z"];
    (e.local && i.push(""),
        e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"));
    const o = `${t}(?:${i.join("|")})`;
    return new RegExp(`^${wo}T(?:${o})$`);
}
const Do = (e) => {
        const t = e
            ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
            : "[\\s\\S]*";
        return new RegExp(`^${t}$`);
    },
    No = /^-?\d+n?$/,
    Po = /^-?\d+$/,
    Pt = /^-?\d+(?:\.\d+)?$/,
    Zo = /^(?:true|false)$/i,
    Eo = /^null$/i,
    To = /^undefined$/i,
    Ao = /^[^A-Z]*$/,
    Ro = /^[^a-z]*$/,
    Lo = /^[0-9a-fA-F]*$/;
function Ae(e, t) {
    return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function Re(e) {
    return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const zd = /^[0-9a-fA-F]{32}$/,
    wd = Ae(22, "=="),
    xd = Re(22),
    Ud = /^[0-9a-fA-F]{40}$/,
    jd = Ae(27, "="),
    Od = Re(27),
    Dd = /^[0-9a-fA-F]{64}$/,
    Nd = Ae(43, "="),
    Pd = Re(43),
    Zd = /^[0-9a-fA-F]{96}$/,
    Ed = Ae(64, ""),
    Td = Re(64),
    Ad = /^[0-9a-fA-F]{128}$/,
    Rd = Ae(86, "=="),
    Ld = Re(86),
    Zt = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                base64: ko,
                base64url: Nt,
                bigint: No,
                boolean: Zo,
                browserEmail: Sd,
                cidrv4: bo,
                cidrv6: yo,
                cuid: oo,
                cuid2: ao,
                date: xo,
                datetime: Oo,
                domain: Io,
                duration: mo,
                e164: zo,
                email: po,
                emoji: go,
                extendedDuration: gd,
                guid: fo,
                hex: Lo,
                hostname: So,
                html5Email: bd,
                idnEmail: kd,
                integer: Po,
                ipv4: ho,
                ipv6: $o,
                ksuid: lo,
                lowercase: Ao,
                mac: _o,
                md5_base64: wd,
                md5_base64url: xd,
                md5_hex: zd,
                nanoid: so,
                null: Eo,
                number: Pt,
                rfc5322Email: yd,
                sha1_base64: jd,
                sha1_base64url: Od,
                sha1_hex: Ud,
                sha256_base64: Nd,
                sha256_base64url: Pd,
                sha256_hex: Dd,
                sha384_base64: Ed,
                sha384_base64url: Td,
                sha384_hex: Zd,
                sha512_base64: Rd,
                sha512_base64url: Ld,
                sha512_hex: Ad,
                string: Do,
                time: jo,
                ulid: co,
                undefined: To,
                unicodeEmail: vo,
                uppercase: Ro,
                uuid: me,
                uuid4: hd,
                uuid6: $d,
                uuid7: _d,
                xid: uo
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    j = s("$ZodCheck", (e, t) => {
        var i;
        (e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (i = e._zod).onattach ?? (i.onattach = []));
    }),
    Fo = { number: "number", bigint: "bigint", object: "date" },
    Et = s("$ZodCheckLessThan", (e, t) => {
        j.init(e, t);
        const i = Fo[typeof t.value];
        (e._zod.onattach.push((o) => {
            const n = o._zod.bag,
                r =
                    (t.inclusive ? n.maximum : n.exclusiveMaximum) ??
                    Number.POSITIVE_INFINITY;
            t.value < r &&
                (t.inclusive
                    ? (n.maximum = t.value)
                    : (n.exclusiveMaximum = t.value));
        }),
            (e._zod.check = (o) => {
                (t.inclusive ? o.value <= t.value : o.value < t.value) ||
                    o.issues.push({
                        origin: i,
                        code: "too_big",
                        maximum:
                            typeof t.value == "object"
                                ? t.value.getTime()
                                : t.value,
                        input: o.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Tt = s("$ZodCheckGreaterThan", (e, t) => {
        j.init(e, t);
        const i = Fo[typeof t.value];
        (e._zod.onattach.push((o) => {
            const n = o._zod.bag,
                r =
                    (t.inclusive ? n.minimum : n.exclusiveMinimum) ??
                    Number.NEGATIVE_INFINITY;
            t.value > r &&
                (t.inclusive
                    ? (n.minimum = t.value)
                    : (n.exclusiveMinimum = t.value));
        }),
            (e._zod.check = (o) => {
                (t.inclusive ? o.value >= t.value : o.value > t.value) ||
                    o.issues.push({
                        origin: i,
                        code: "too_small",
                        minimum:
                            typeof t.value == "object"
                                ? t.value.getTime()
                                : t.value,
                        input: o.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Co = s("$ZodCheckMultipleOf", (e, t) => {
        (j.init(e, t),
            e._zod.onattach.push((i) => {
                var o;
                (o = i._zod.bag).multipleOf ?? (o.multipleOf = t.value);
            }),
            (e._zod.check = (i) => {
                if (typeof i.value != typeof t.value)
                    throw new Error(
                        "Cannot mix number and bigint in multiple_of check."
                    );
                (typeof i.value == "bigint"
                    ? i.value % t.value === BigInt(0)
                    : Ti(i.value, t.value) === 0) ||
                    i.issues.push({
                        origin: typeof i.value,
                        code: "not_multiple_of",
                        divisor: t.value,
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Jo = s("$ZodCheckNumberFormat", (e, t) => {
        (j.init(e, t), (t.format = t.format || "float64"));
        const i = t.format?.includes("int"),
            o = i ? "int" : "number",
            [n, r] = Ci[t.format];
        (e._zod.onattach.push((a) => {
            const c = a._zod.bag;
            ((c.format = t.format),
                (c.minimum = n),
                (c.maximum = r),
                i && (c.pattern = Po));
        }),
            (e._zod.check = (a) => {
                const c = a.value;
                if (i) {
                    if (!Number.isInteger(c)) {
                        a.issues.push({
                            expected: o,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: c,
                            inst: e
                        });
                        return;
                    }
                    if (!Number.isSafeInteger(c)) {
                        c > 0
                            ? a.issues.push({
                                  input: c,
                                  code: "too_big",
                                  maximum: Number.MAX_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: o,
                                  inclusive: !0,
                                  continue: !t.abort
                              })
                            : a.issues.push({
                                  input: c,
                                  code: "too_small",
                                  minimum: Number.MIN_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: o,
                                  inclusive: !0,
                                  continue: !t.abort
                              });
                        return;
                    }
                }
                (c < n &&
                    a.issues.push({
                        origin: "number",
                        input: c,
                        code: "too_small",
                        minimum: n,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort
                    }),
                    c > r &&
                        a.issues.push({
                            origin: "number",
                            input: c,
                            code: "too_big",
                            maximum: r,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort
                        }));
            }));
    }),
    Mo = s("$ZodCheckBigIntFormat", (e, t) => {
        j.init(e, t);
        const [i, o] = Ji[t.format];
        (e._zod.onattach.push((n) => {
            const r = n._zod.bag;
            ((r.format = t.format), (r.minimum = i), (r.maximum = o));
        }),
            (e._zod.check = (n) => {
                const r = n.value;
                (r < i &&
                    n.issues.push({
                        origin: "bigint",
                        input: r,
                        code: "too_small",
                        minimum: i,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort
                    }),
                    r > o &&
                        n.issues.push({
                            origin: "bigint",
                            input: r,
                            code: "too_big",
                            maximum: o,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort
                        }));
            }));
    }),
    Ko = s("$ZodCheckMaxSize", (e, t) => {
        var i;
        (j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value;
                    return !ce(n) && n.size !== void 0;
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
                t.maximum < n && (o._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (o) => {
                const n = o.value;
                n.size <= t.maximum ||
                    o.issues.push({
                        origin: bn(n),
                        code: "too_big",
                        maximum: t.maximum,
                        inclusive: !0,
                        input: n,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Vo = s("$ZodCheckMinSize", (e, t) => {
        var i;
        (j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value;
                    return !ce(n) && n.size !== void 0;
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
                t.minimum > n && (o._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (o) => {
                const n = o.value;
                n.size >= t.minimum ||
                    o.issues.push({
                        origin: bn(n),
                        code: "too_small",
                        minimum: t.minimum,
                        inclusive: !0,
                        input: n,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Bo = s("$ZodCheckSizeEquals", (e, t) => {
        var i;
        (j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value;
                    return !ce(n) && n.size !== void 0;
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag;
                ((n.minimum = t.size), (n.maximum = t.size), (n.size = t.size));
            }),
            (e._zod.check = (o) => {
                const n = o.value,
                    r = n.size;
                if (r === t.size) return;
                const a = r > t.size;
                o.issues.push({
                    origin: bn(n),
                    ...(a
                        ? { code: "too_big", maximum: t.size }
                        : { code: "too_small", minimum: t.size }),
                    inclusive: !0,
                    exact: !0,
                    input: o.value,
                    inst: e,
                    continue: !t.abort
                });
            }));
    }),
    Go = s("$ZodCheckMaxLength", (e, t) => {
        var i;
        (j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value;
                    return !ce(n) && n.length !== void 0;
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
                t.maximum < n && (o._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (o) => {
                const n = o.value;
                if (n.length <= t.maximum) return;
                const a = yn(n);
                o.issues.push({
                    origin: a,
                    code: "too_big",
                    maximum: t.maximum,
                    inclusive: !0,
                    input: n,
                    inst: e,
                    continue: !t.abort
                });
            }));
    }),
    Wo = s("$ZodCheckMinLength", (e, t) => {
        var i;
        (j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value;
                    return !ce(n) && n.length !== void 0;
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
                t.minimum > n && (o._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (o) => {
                const n = o.value;
                if (n.length >= t.minimum) return;
                const a = yn(n);
                o.issues.push({
                    origin: a,
                    code: "too_small",
                    minimum: t.minimum,
                    inclusive: !0,
                    input: n,
                    inst: e,
                    continue: !t.abort
                });
            }));
    }),
    qo = s("$ZodCheckLengthEquals", (e, t) => {
        var i;
        (j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value;
                    return !ce(n) && n.length !== void 0;
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag;
                ((n.minimum = t.length),
                    (n.maximum = t.length),
                    (n.length = t.length));
            }),
            (e._zod.check = (o) => {
                const n = o.value,
                    r = n.length;
                if (r === t.length) return;
                const a = yn(n),
                    c = r > t.length;
                o.issues.push({
                    origin: a,
                    ...(c
                        ? { code: "too_big", maximum: t.length }
                        : { code: "too_small", minimum: t.length }),
                    inclusive: !0,
                    exact: !0,
                    input: o.value,
                    inst: e,
                    continue: !t.abort
                });
            }));
    }),
    Le = s("$ZodCheckStringFormat", (e, t) => {
        var i, o;
        (j.init(e, t),
            e._zod.onattach.push((n) => {
                const r = n._zod.bag;
                ((r.format = t.format),
                    t.pattern &&
                        (r.patterns ?? (r.patterns = new Set()),
                        r.patterns.add(t.pattern)));
            }),
            t.pattern
                ? ((i = e._zod).check ??
                  (i.check = (n) => {
                      ((t.pattern.lastIndex = 0),
                          !t.pattern.test(n.value) &&
                              n.issues.push({
                                  origin: "string",
                                  code: "invalid_format",
                                  format: t.format,
                                  input: n.value,
                                  ...(t.pattern
                                      ? { pattern: t.pattern.toString() }
                                      : {}),
                                  inst: e,
                                  continue: !t.abort
                              }));
                  }))
                : ((o = e._zod).check ?? (o.check = () => {})));
    }),
    Xo = s("$ZodCheckRegex", (e, t) => {
        (Le.init(e, t),
            (e._zod.check = (i) => {
                ((t.pattern.lastIndex = 0),
                    !t.pattern.test(i.value) &&
                        i.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: "regex",
                            input: i.value,
                            pattern: t.pattern.toString(),
                            inst: e,
                            continue: !t.abort
                        }));
            }));
    }),
    Yo = s("$ZodCheckLowerCase", (e, t) => {
        (t.pattern ?? (t.pattern = Ao), Le.init(e, t));
    }),
    Ho = s("$ZodCheckUpperCase", (e, t) => {
        (t.pattern ?? (t.pattern = Ro), Le.init(e, t));
    }),
    Qo = s("$ZodCheckIncludes", (e, t) => {
        j.init(e, t);
        const i = q(t.includes),
            o = new RegExp(
                typeof t.position == "number" ? `^.{${t.position}}${i}` : i
            );
        ((t.pattern = o),
            e._zod.onattach.push((n) => {
                const r = n._zod.bag;
                (r.patterns ?? (r.patterns = new Set()), r.patterns.add(o));
            }),
            (e._zod.check = (n) => {
                n.value.includes(t.includes, t.position) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: t.includes,
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    ea = s("$ZodCheckStartsWith", (e, t) => {
        j.init(e, t);
        const i = new RegExp(`^${q(t.prefix)}.*`);
        (t.pattern ?? (t.pattern = i),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag;
                (n.patterns ?? (n.patterns = new Set()), n.patterns.add(i));
            }),
            (e._zod.check = (o) => {
                o.value.startsWith(t.prefix) ||
                    o.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: t.prefix,
                        input: o.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    na = s("$ZodCheckEndsWith", (e, t) => {
        j.init(e, t);
        const i = new RegExp(`.*${q(t.suffix)}$`);
        (t.pattern ?? (t.pattern = i),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag;
                (n.patterns ?? (n.patterns = new Set()), n.patterns.add(i));
            }),
            (e._zod.check = (o) => {
                o.value.endsWith(t.suffix) ||
                    o.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: t.suffix,
                        input: o.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    });
function hi(e, t, i) {
    e.issues.length && t.issues.push(...K(i, e.issues));
}
const ta = s("$ZodCheckProperty", (e, t) => {
        (j.init(e, t),
            (e._zod.check = (i) => {
                const o = t.schema._zod.run(
                    { value: i.value[t.property], issues: [] },
                    {}
                );
                if (o instanceof Promise)
                    return o.then((n) => hi(n, i, t.property));
                hi(o, i, t.property);
            }));
    }),
    ra = s("$ZodCheckMimeType", (e, t) => {
        j.init(e, t);
        const i = new Set(t.mime);
        (e._zod.onattach.push((o) => {
            o._zod.bag.mime = t.mime;
        }),
            (e._zod.check = (o) => {
                i.has(o.value.type) ||
                    o.issues.push({
                        code: "invalid_value",
                        values: t.mime,
                        input: o.value.type,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    ia = s("$ZodCheckOverwrite", (e, t) => {
        (j.init(e, t),
            (e._zod.check = (i) => {
                i.value = t.tx(i.value);
            }));
    });
class oa {
    constructor(t = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = t));
    }
    indented(t) {
        ((this.indent += 1), t(this), (this.indent -= 1));
    }
    write(t) {
        if (typeof t == "function") {
            (t(this, { execution: "sync" }), t(this, { execution: "async" }));
            return;
        }
        const o = t
                .split(
                    `
`
                )
                .filter((a) => a),
            n = Math.min(...o.map((a) => a.length - a.trimStart().length)),
            r = o
                .map((a) => a.slice(n))
                .map((a) => " ".repeat(this.indent * 2) + a);
        for (const a of r) this.content.push(a);
    }
    compile() {
        const t = Function,
            i = this?.args,
            n = [...(this?.content ?? [""]).map((r) => `  ${r}`)];
        return new t(
            ...i,
            n.join(`
`)
        );
    }
}
const aa = { major: 4, minor: 3, patch: 2 },
    b = s("$ZodType", (e, t) => {
        var i;
        (e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = aa));
        const o = [...(e._zod.def.checks ?? [])];
        e._zod.traits.has("$ZodCheck") && o.unshift(e);
        for (const n of o) for (const r of n._zod.onattach) r(e);
        if (o.length === 0)
            ((i = e._zod).deferred ?? (i.deferred = []),
                e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse;
                }));
        else {
            const n = (a, c, l) => {
                    let u = te(a),
                        d;
                    for (const m of c) {
                        if (m._zod.def.when) {
                            if (!m._zod.def.when(a)) continue;
                        } else if (u) continue;
                        const v = a.issues.length,
                            g = m._zod.check(a);
                        if (g instanceof Promise && l?.async === !1)
                            throw new re();
                        if (d || g instanceof Promise)
                            d = (d ?? Promise.resolve()).then(async () => {
                                (await g,
                                    a.issues.length !== v &&
                                        (u || (u = te(a, v))));
                            });
                        else {
                            if (a.issues.length === v) continue;
                            u || (u = te(a, v));
                        }
                    }
                    return d ? d.then(() => a) : a;
                },
                r = (a, c, l) => {
                    if (te(a)) return ((a.aborted = !0), a);
                    const u = n(c, o, l);
                    if (u instanceof Promise) {
                        if (l.async === !1) throw new re();
                        return u.then((d) => e._zod.parse(d, l));
                    }
                    return e._zod.parse(u, l);
                };
            e._zod.run = (a, c) => {
                if (c.skipChecks) return e._zod.parse(a, c);
                if (c.direction === "backward") {
                    const u = e._zod.parse(
                        { value: a.value, issues: [] },
                        { ...c, skipChecks: !0 }
                    );
                    return u instanceof Promise
                        ? u.then((d) => r(d, a, c))
                        : r(u, a, c);
                }
                const l = e._zod.parse(a, c);
                if (l instanceof Promise) {
                    if (c.async === !1) throw new re();
                    return l.then((u) => n(u, o, c));
                }
                return n(l, o, c);
            };
        }
        k(e, "~standard", () => ({
            validate: (n) => {
                try {
                    const r = ro(e, n);
                    return r.success
                        ? { value: r.data }
                        : { issues: r.error?.issues };
                } catch {
                    return io(e, n).then((a) =>
                        a.success
                            ? { value: a.data }
                            : { issues: a.error?.issues }
                    );
                }
            },
            vendor: "zod",
            version: 1
        }));
    }),
    Fe = s("$ZodString", (e, t) => {
        (b.init(e, t),
            (e._zod.pattern =
                [...(e?._zod.bag?.patterns ?? [])].pop() ?? Do(e._zod.bag)),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = String(i.value);
                    } catch {}
                return (
                    typeof i.value == "string" ||
                        i.issues.push({
                            expected: "string",
                            code: "invalid_type",
                            input: i.value,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    x = s("$ZodStringFormat", (e, t) => {
        (Le.init(e, t), Fe.init(e, t));
    }),
    ca = s("$ZodGUID", (e, t) => {
        (t.pattern ?? (t.pattern = fo), x.init(e, t));
    }),
    ua = s("$ZodUUID", (e, t) => {
        if (t.version) {
            const o = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8
            }[t.version];
            if (o === void 0)
                throw new Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = me(o));
        } else t.pattern ?? (t.pattern = me());
        x.init(e, t);
    }),
    la = s("$ZodEmail", (e, t) => {
        (t.pattern ?? (t.pattern = po), x.init(e, t));
    }),
    sa = s("$ZodURL", (e, t) => {
        (x.init(e, t),
            (e._zod.check = (i) => {
                try {
                    const o = i.value.trim(),
                        n = new URL(o);
                    (t.hostname &&
                        ((t.hostname.lastIndex = 0),
                        t.hostname.test(n.hostname) ||
                            i.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid hostname",
                                pattern: t.hostname.source,
                                input: i.value,
                                inst: e,
                                continue: !t.abort
                            })),
                        t.protocol &&
                            ((t.protocol.lastIndex = 0),
                            t.protocol.test(
                                n.protocol.endsWith(":")
                                    ? n.protocol.slice(0, -1)
                                    : n.protocol
                            ) ||
                                i.issues.push({
                                    code: "invalid_format",
                                    format: "url",
                                    note: "Invalid protocol",
                                    pattern: t.protocol.source,
                                    input: i.value,
                                    inst: e,
                                    continue: !t.abort
                                })),
                        t.normalize ? (i.value = n.href) : (i.value = o));
                    return;
                } catch {
                    i.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
                }
            }));
    }),
    da = s("$ZodEmoji", (e, t) => {
        (t.pattern ?? (t.pattern = go()), x.init(e, t));
    }),
    ma = s("$ZodNanoID", (e, t) => {
        (t.pattern ?? (t.pattern = so), x.init(e, t));
    }),
    fa = s("$ZodCUID", (e, t) => {
        (t.pattern ?? (t.pattern = oo), x.init(e, t));
    }),
    pa = s("$ZodCUID2", (e, t) => {
        (t.pattern ?? (t.pattern = ao), x.init(e, t));
    }),
    va = s("$ZodULID", (e, t) => {
        (t.pattern ?? (t.pattern = co), x.init(e, t));
    }),
    ga = s("$ZodXID", (e, t) => {
        (t.pattern ?? (t.pattern = uo), x.init(e, t));
    }),
    ha = s("$ZodKSUID", (e, t) => {
        (t.pattern ?? (t.pattern = lo), x.init(e, t));
    }),
    $a = s("$ZodISODateTime", (e, t) => {
        (t.pattern ?? (t.pattern = Oo(t)), x.init(e, t));
    }),
    _a = s("$ZodISODate", (e, t) => {
        (t.pattern ?? (t.pattern = xo), x.init(e, t));
    }),
    ba = s("$ZodISOTime", (e, t) => {
        (t.pattern ?? (t.pattern = jo(t)), x.init(e, t));
    }),
    ya = s("$ZodISODuration", (e, t) => {
        (t.pattern ?? (t.pattern = mo), x.init(e, t));
    }),
    ka = s("$ZodIPv4", (e, t) => {
        (t.pattern ?? (t.pattern = ho),
            x.init(e, t),
            (e._zod.bag.format = "ipv4"));
    }),
    Sa = s("$ZodIPv6", (e, t) => {
        (t.pattern ?? (t.pattern = $o),
            x.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (i) => {
                try {
                    new URL(`http://[${i.value}]`);
                } catch {
                    i.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
                }
            }));
    }),
    Ia = s("$ZodMAC", (e, t) => {
        (t.pattern ?? (t.pattern = _o(t.delimiter)),
            x.init(e, t),
            (e._zod.bag.format = "mac"));
    }),
    za = s("$ZodCIDRv4", (e, t) => {
        (t.pattern ?? (t.pattern = bo), x.init(e, t));
    }),
    wa = s("$ZodCIDRv6", (e, t) => {
        (t.pattern ?? (t.pattern = yo),
            x.init(e, t),
            (e._zod.check = (i) => {
                const o = i.value.split("/");
                try {
                    if (o.length !== 2) throw new Error();
                    const [n, r] = o;
                    if (!r) throw new Error();
                    const a = Number(r);
                    if (`${a}` !== r) throw new Error();
                    if (a < 0 || a > 128) throw new Error();
                    new URL(`http://[${n}]`);
                } catch {
                    i.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
                }
            }));
    });
function At(e) {
    if (e === "") return !0;
    if (e.length % 4 !== 0) return !1;
    try {
        return (atob(e), !0);
    } catch {
        return !1;
    }
}
const xa = s("$ZodBase64", (e, t) => {
    (t.pattern ?? (t.pattern = ko),
        x.init(e, t),
        (e._zod.bag.contentEncoding = "base64"),
        (e._zod.check = (i) => {
            At(i.value) ||
                i.issues.push({
                    code: "invalid_format",
                    format: "base64",
                    input: i.value,
                    inst: e,
                    continue: !t.abort
                });
        }));
});
function Ua(e) {
    if (!Nt.test(e)) return !1;
    const t = e.replace(/[-_]/g, (o) => (o === "-" ? "+" : "/")),
        i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return At(i);
}
const ja = s("$ZodBase64URL", (e, t) => {
        (t.pattern ?? (t.pattern = Nt),
            x.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (i) => {
                Ua(i.value) ||
                    i.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Oa = s("$ZodE164", (e, t) => {
        (t.pattern ?? (t.pattern = zo), x.init(e, t));
    });
function Da(e, t = null) {
    try {
        const i = e.split(".");
        if (i.length !== 3) return !1;
        const [o] = i;
        if (!o) return !1;
        const n = JSON.parse(atob(o));
        return !(
            ("typ" in n && n?.typ !== "JWT") ||
            !n.alg ||
            (t && (!("alg" in n) || n.alg !== t))
        );
    } catch {
        return !1;
    }
}
const Na = s("$ZodJWT", (e, t) => {
        (x.init(e, t),
            (e._zod.check = (i) => {
                Da(i.value, t.alg) ||
                    i.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Pa = s("$ZodCustomStringFormat", (e, t) => {
        (x.init(e, t),
            (e._zod.check = (i) => {
                t.fn(i.value) ||
                    i.issues.push({
                        code: "invalid_format",
                        format: t.format,
                        input: i.value,
                        inst: e,
                        continue: !t.abort
                    });
            }));
    }),
    Rt = s("$ZodNumber", (e, t) => {
        (b.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? Pt),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = Number(i.value);
                    } catch {}
                const n = i.value;
                if (
                    typeof n == "number" &&
                    !Number.isNaN(n) &&
                    Number.isFinite(n)
                )
                    return i;
                const r =
                    typeof n == "number"
                        ? Number.isNaN(n)
                            ? "NaN"
                            : Number.isFinite(n)
                              ? void 0
                              : "Infinity"
                        : void 0;
                return (
                    i.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: n,
                        inst: e,
                        ...(r ? { received: r } : {})
                    }),
                    i
                );
            }));
    }),
    Za = s("$ZodNumberFormat", (e, t) => {
        (Jo.init(e, t), Rt.init(e, t));
    }),
    Lt = s("$ZodBoolean", (e, t) => {
        (b.init(e, t),
            (e._zod.pattern = Zo),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = !!i.value;
                    } catch {}
                const n = i.value;
                return (
                    typeof n == "boolean" ||
                        i.issues.push({
                            expected: "boolean",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    Ft = s("$ZodBigInt", (e, t) => {
        (b.init(e, t),
            (e._zod.pattern = No),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = BigInt(i.value);
                    } catch {}
                return (
                    typeof i.value == "bigint" ||
                        i.issues.push({
                            expected: "bigint",
                            code: "invalid_type",
                            input: i.value,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    Ea = s("$ZodBigIntFormat", (e, t) => {
        (Mo.init(e, t), Ft.init(e, t));
    }),
    Ta = s("$ZodSymbol", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                return (
                    typeof n == "symbol" ||
                        i.issues.push({
                            expected: "symbol",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    Aa = s("$ZodUndefined", (e, t) => {
        (b.init(e, t),
            (e._zod.pattern = To),
            (e._zod.values = new Set([void 0])),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                return (
                    typeof n > "u" ||
                        i.issues.push({
                            expected: "undefined",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    Ra = s("$ZodNull", (e, t) => {
        (b.init(e, t),
            (e._zod.pattern = Eo),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                return (
                    n === null ||
                        i.issues.push({
                            expected: "null",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    La = s("$ZodAny", (e, t) => {
        (b.init(e, t), (e._zod.parse = (i) => i));
    }),
    Fa = s("$ZodUnknown", (e, t) => {
        (b.init(e, t), (e._zod.parse = (i) => i));
    }),
    Ca = s("$ZodNever", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => (
                i.issues.push({
                    expected: "never",
                    code: "invalid_type",
                    input: i.value,
                    inst: e
                }),
                i
            )));
    }),
    Ja = s("$ZodVoid", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                return (
                    typeof n > "u" ||
                        i.issues.push({
                            expected: "void",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    Ma = s("$ZodDate", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = new Date(i.value);
                    } catch {}
                const n = i.value,
                    r = n instanceof Date;
                return (
                    (r && !Number.isNaN(n.getTime())) ||
                        i.issues.push({
                            expected: "date",
                            code: "invalid_type",
                            input: n,
                            ...(r ? { received: "Invalid Date" } : {}),
                            inst: e
                        }),
                    i
                );
            }));
    });
function $i(e, t, i) {
    (e.issues.length && t.issues.push(...K(i, e.issues)),
        (t.value[i] = e.value));
}
const Ka = s("$ZodArray", (e, t) => {
    (b.init(e, t),
        (e._zod.parse = (i, o) => {
            const n = i.value;
            if (!Array.isArray(n))
                return (
                    i.issues.push({
                        expected: "array",
                        code: "invalid_type",
                        input: n,
                        inst: e
                    }),
                    i
                );
            i.value = Array(n.length);
            const r = [];
            for (let a = 0; a < n.length; a++) {
                const c = n[a],
                    l = t.element._zod.run({ value: c, issues: [] }, o);
                l instanceof Promise
                    ? r.push(l.then((u) => $i(u, i, a)))
                    : $i(l, i, a);
            }
            return r.length ? Promise.all(r).then(() => i) : i;
        }));
});
function sn(e, t, i, o, n) {
    if (e.issues.length) {
        if (n && !(i in o)) return;
        t.issues.push(...K(i, e.issues));
    }
    e.value === void 0
        ? i in o && (t.value[i] = void 0)
        : (t.value[i] = e.value);
}
function Va(e) {
    const t = Object.keys(e.shape);
    for (const o of t)
        if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
            throw new Error(
                `Invalid element at key "${o}": expected a Zod schema`
            );
    const i = Fi(e.shape);
    return {
        ...e,
        keys: t,
        keySet: new Set(t),
        numKeys: t.length,
        optionalKeys: new Set(i)
    };
}
function Ba(e, t, i, o, n, r) {
    const a = [],
        c = n.keySet,
        l = n.catchall._zod,
        u = l.def.type,
        d = l.optout === "optional";
    for (const m in t) {
        if (c.has(m)) continue;
        if (u === "never") {
            a.push(m);
            continue;
        }
        const v = l.run({ value: t[m], issues: [] }, o);
        v instanceof Promise
            ? e.push(v.then((g) => sn(g, i, m, t, d)))
            : sn(v, i, m, t, d);
    }
    return (
        a.length &&
            i.issues.push({
                code: "unrecognized_keys",
                keys: a,
                input: t,
                inst: r
            }),
        e.length ? Promise.all(e).then(() => i) : i
    );
}
const Ga = s("$ZodObject", (e, t) => {
        if ((b.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get)) {
            const c = t.shape;
            Object.defineProperty(t, "shape", {
                get: () => {
                    const l = { ...c };
                    return (Object.defineProperty(t, "shape", { value: l }), l);
                }
            });
        }
        const o = Ne(() => Va(t));
        k(e._zod, "propValues", () => {
            const c = t.shape,
                l = {};
            for (const u in c) {
                const d = c[u]._zod;
                if (d.values) {
                    l[u] ?? (l[u] = new Set());
                    for (const m of d.values) l[u].add(m);
                }
            }
            return l;
        });
        const n = se,
            r = t.catchall;
        let a;
        e._zod.parse = (c, l) => {
            a ?? (a = o.value);
            const u = c.value;
            if (!n(u))
                return (
                    c.issues.push({
                        expected: "object",
                        code: "invalid_type",
                        input: u,
                        inst: e
                    }),
                    c
                );
            c.value = {};
            const d = [],
                m = a.shape;
            for (const v of a.keys) {
                const g = m[v],
                    S = g._zod.optout === "optional",
                    I = g._zod.run({ value: u[v], issues: [] }, l);
                I instanceof Promise
                    ? d.push(I.then((Y) => sn(Y, c, v, u, S)))
                    : sn(I, c, v, u, S);
            }
            return r
                ? Ba(d, u, c, l, o.value, e)
                : d.length
                  ? Promise.all(d).then(() => c)
                  : c;
        };
    }),
    Wa = s("$ZodObjectJIT", (e, t) => {
        Ga.init(e, t);
        const i = e._zod.parse,
            o = Ne(() => Va(t)),
            n = (v) => {
                const g = new oa(["shape", "payload", "ctx"]),
                    S = o.value,
                    I = (R) => {
                        const O = mt(R);
                        return `shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`;
                    };
                g.write("const input = payload.value;");
                const Y = Object.create(null);
                let W = 0;
                for (const R of S.keys) Y[R] = `key_${W++}`;
                g.write("const newResult = {};");
                for (const R of S.keys) {
                    const O = Y[R],
                        E = mt(R),
                        be = v[R]?._zod?.optout === "optional";
                    (g.write(`const ${O} = ${I(R)};`),
                        be
                            ? g.write(`
        if (${O}.issues.length) {
          if (${E} in input) {
            payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${E}, ...iss.path] : [${E}]
            })));
          }
        }
        
        if (${O}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${O}.value;
        }
        
      `)
                            : g.write(`
        if (${O}.issues.length) {
          payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        if (${O}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${O}.value;
        }
        
      `));
                }
                (g.write("payload.value = newResult;"),
                    g.write("return payload;"));
                const nn = g.compile();
                return (R, O) => nn(v, R, O);
            };
        let r;
        const a = se,
            c = !cn.jitless,
            u = c && Ri.value,
            d = t.catchall;
        let m;
        e._zod.parse = (v, g) => {
            m ?? (m = o.value);
            const S = v.value;
            return a(S)
                ? c && u && g?.async === !1 && g.jitless !== !0
                    ? (r || (r = n(t.shape)),
                      (v = r(v, g)),
                      d ? Ba([], S, v, g, m, e) : v)
                    : i(v, g)
                : (v.issues.push({
                      expected: "object",
                      code: "invalid_type",
                      input: S,
                      inst: e
                  }),
                  v);
        };
    });
function _i(e, t, i, o) {
    for (const r of e)
        if (r.issues.length === 0) return ((t.value = r.value), t);
    const n = e.filter((r) => !te(r));
    return n.length === 1
        ? ((t.value = n[0].value), n[0])
        : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: i,
              errors: e.map((r) => r.issues.map((a) => C(a, o, N())))
          }),
          t);
}
const kn = s("$ZodUnion", (e, t) => {
    (b.init(e, t),
        k(e._zod, "optin", () =>
            t.options.some((n) => n._zod.optin === "optional")
                ? "optional"
                : void 0
        ),
        k(e._zod, "optout", () =>
            t.options.some((n) => n._zod.optout === "optional")
                ? "optional"
                : void 0
        ),
        k(e._zod, "values", () => {
            if (t.options.every((n) => n._zod.values))
                return new Set(
                    t.options.flatMap((n) => Array.from(n._zod.values))
                );
        }),
        k(e._zod, "pattern", () => {
            if (t.options.every((n) => n._zod.pattern)) {
                const n = t.options.map((r) => r._zod.pattern);
                return new RegExp(
                    `^(${n.map((r) => $n(r.source)).join("|")})$`
                );
            }
        }));
    const i = t.options.length === 1,
        o = t.options[0]._zod.run;
    e._zod.parse = (n, r) => {
        if (i) return o(n, r);
        let a = !1;
        const c = [];
        for (const l of t.options) {
            const u = l._zod.run({ value: n.value, issues: [] }, r);
            if (u instanceof Promise) (c.push(u), (a = !0));
            else {
                if (u.issues.length === 0) return u;
                c.push(u);
            }
        }
        return a ? Promise.all(c).then((l) => _i(l, n, e, r)) : _i(c, n, e, r);
    };
});
function bi(e, t, i, o) {
    const n = e.filter((r) => r.issues.length === 0);
    return n.length === 1
        ? ((t.value = n[0].value), t)
        : (n.length === 0
              ? t.issues.push({
                    code: "invalid_union",
                    input: t.value,
                    inst: i,
                    errors: e.map((r) => r.issues.map((a) => C(a, o, N())))
                })
              : t.issues.push({
                    code: "invalid_union",
                    input: t.value,
                    inst: i,
                    errors: [],
                    inclusive: !1
                }),
          t);
}
const qa = s("$ZodXor", (e, t) => {
        (kn.init(e, t), (t.inclusive = !1));
        const i = t.options.length === 1,
            o = t.options[0]._zod.run;
        e._zod.parse = (n, r) => {
            if (i) return o(n, r);
            let a = !1;
            const c = [];
            for (const l of t.options) {
                const u = l._zod.run({ value: n.value, issues: [] }, r);
                u instanceof Promise ? (c.push(u), (a = !0)) : c.push(u);
            }
            return a
                ? Promise.all(c).then((l) => bi(l, n, e, r))
                : bi(c, n, e, r);
        };
    }),
    Xa = s("$ZodDiscriminatedUnion", (e, t) => {
        ((t.inclusive = !1), kn.init(e, t));
        const i = e._zod.parse;
        k(e._zod, "propValues", () => {
            const n = {};
            for (const r of t.options) {
                const a = r._zod.propValues;
                if (!a || Object.keys(a).length === 0)
                    throw new Error(
                        `Invalid discriminated union option at index "${t.options.indexOf(r)}"`
                    );
                for (const [c, l] of Object.entries(a)) {
                    n[c] || (n[c] = new Set());
                    for (const u of l) n[c].add(u);
                }
            }
            return n;
        });
        const o = Ne(() => {
            const n = t.options,
                r = new Map();
            for (const a of n) {
                const c = a._zod.propValues?.[t.discriminator];
                if (!c || c.size === 0)
                    throw new Error(
                        `Invalid discriminated union option at index "${t.options.indexOf(a)}"`
                    );
                for (const l of c) {
                    if (r.has(l))
                        throw new Error(
                            `Duplicate discriminator value "${String(l)}"`
                        );
                    r.set(l, a);
                }
            }
            return r;
        });
        e._zod.parse = (n, r) => {
            const a = n.value;
            if (!se(a))
                return (
                    n.issues.push({
                        code: "invalid_type",
                        expected: "object",
                        input: a,
                        inst: e
                    }),
                    n
                );
            const c = o.value.get(a?.[t.discriminator]);
            return c
                ? c._zod.run(n, r)
                : t.unionFallback
                  ? i(n, r)
                  : (n.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: t.discriminator,
                        input: a,
                        path: [t.discriminator],
                        inst: e
                    }),
                    n);
        };
    }),
    Ya = s("$ZodIntersection", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value,
                    r = t.left._zod.run({ value: n, issues: [] }, o),
                    a = t.right._zod.run({ value: n, issues: [] }, o);
                return r instanceof Promise || a instanceof Promise
                    ? Promise.all([r, a]).then(([l, u]) => yi(i, l, u))
                    : yi(i, r, a);
            }));
    });
function vt(e, t) {
    if (e === t) return { valid: !0, data: e };
    if (e instanceof Date && t instanceof Date && +e == +t)
        return { valid: !0, data: e };
    if (ie(e) && ie(t)) {
        const i = Object.keys(t),
            o = Object.keys(e).filter((r) => i.indexOf(r) !== -1),
            n = { ...e, ...t };
        for (const r of o) {
            const a = vt(e[r], t[r]);
            if (!a.valid)
                return { valid: !1, mergeErrorPath: [r, ...a.mergeErrorPath] };
            n[r] = a.data;
        }
        return { valid: !0, data: n };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
        const i = [];
        for (let o = 0; o < e.length; o++) {
            const n = e[o],
                r = t[o],
                a = vt(n, r);
            if (!a.valid)
                return { valid: !1, mergeErrorPath: [o, ...a.mergeErrorPath] };
            i.push(a.data);
        }
        return { valid: !0, data: i };
    }
    return { valid: !1, mergeErrorPath: [] };
}
function yi(e, t, i) {
    const o = new Map();
    let n;
    for (const c of t.issues)
        if (c.code === "unrecognized_keys") {
            n ?? (n = c);
            for (const l of c.keys)
                (o.has(l) || o.set(l, {}), (o.get(l).l = !0));
        } else e.issues.push(c);
    for (const c of i.issues)
        if (c.code === "unrecognized_keys")
            for (const l of c.keys)
                (o.has(l) || o.set(l, {}), (o.get(l).r = !0));
        else e.issues.push(c);
    const r = [...o].filter(([, c]) => c.l && c.r).map(([c]) => c);
    if ((r.length && n && e.issues.push({ ...n, keys: r }), te(e))) return e;
    const a = vt(t.value, i.value);
    if (!a.valid)
        throw new Error(
            `Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`
        );
    return ((e.value = a.data), e);
}
const Ct = s("$ZodTuple", (e, t) => {
    b.init(e, t);
    const i = t.items;
    e._zod.parse = (o, n) => {
        const r = o.value;
        if (!Array.isArray(r))
            return (
                o.issues.push({
                    input: r,
                    inst: e,
                    expected: "tuple",
                    code: "invalid_type"
                }),
                o
            );
        o.value = [];
        const a = [],
            c = [...i].reverse().findIndex((d) => d._zod.optin !== "optional"),
            l = c === -1 ? 0 : i.length - c;
        if (!t.rest) {
            const d = r.length > i.length,
                m = r.length < l - 1;
            if (d || m)
                return (
                    o.issues.push({
                        ...(d
                            ? {
                                  code: "too_big",
                                  maximum: i.length,
                                  inclusive: !0
                              }
                            : { code: "too_small", minimum: i.length }),
                        input: r,
                        inst: e,
                        origin: "array"
                    }),
                    o
                );
        }
        let u = -1;
        for (const d of i) {
            if ((u++, u >= r.length && u >= l)) continue;
            const m = d._zod.run({ value: r[u], issues: [] }, n);
            m instanceof Promise
                ? a.push(m.then((v) => tn(v, o, u)))
                : tn(m, o, u);
        }
        if (t.rest) {
            const d = r.slice(i.length);
            for (const m of d) {
                u++;
                const v = t.rest._zod.run({ value: m, issues: [] }, n);
                v instanceof Promise
                    ? a.push(v.then((g) => tn(g, o, u)))
                    : tn(v, o, u);
            }
        }
        return a.length ? Promise.all(a).then(() => o) : o;
    };
});
function tn(e, t, i) {
    (e.issues.length && t.issues.push(...K(i, e.issues)),
        (t.value[i] = e.value));
}
const Ha = s("$ZodRecord", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                if (!ie(n))
                    return (
                        i.issues.push({
                            expected: "record",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                        i
                    );
                const r = [],
                    a = t.keyType._zod.values;
                if (a) {
                    i.value = {};
                    const c = new Set();
                    for (const u of a)
                        if (
                            typeof u == "string" ||
                            typeof u == "number" ||
                            typeof u == "symbol"
                        ) {
                            c.add(typeof u == "number" ? u.toString() : u);
                            const d = t.valueType._zod.run(
                                { value: n[u], issues: [] },
                                o
                            );
                            d instanceof Promise
                                ? r.push(
                                      d.then((m) => {
                                          (m.issues.length &&
                                              i.issues.push(...K(u, m.issues)),
                                              (i.value[u] = m.value));
                                      })
                                  )
                                : (d.issues.length &&
                                      i.issues.push(...K(u, d.issues)),
                                  (i.value[u] = d.value));
                        }
                    let l;
                    for (const u in n) c.has(u) || ((l = l ?? []), l.push(u));
                    l &&
                        l.length > 0 &&
                        i.issues.push({
                            code: "unrecognized_keys",
                            input: n,
                            inst: e,
                            keys: l
                        });
                } else {
                    i.value = {};
                    for (const c of Reflect.ownKeys(n)) {
                        if (c === "__proto__") continue;
                        let l = t.keyType._zod.run({ value: c, issues: [] }, o);
                        if (l instanceof Promise)
                            throw new Error(
                                "Async schemas not supported in object keys currently"
                            );
                        if (
                            typeof c == "string" &&
                            Pt.test(c) &&
                            l.issues.length &&
                            l.issues.some(
                                (m) =>
                                    m.code === "invalid_type" &&
                                    m.expected === "number"
                            )
                        ) {
                            const m = t.keyType._zod.run(
                                { value: Number(c), issues: [] },
                                o
                            );
                            if (m instanceof Promise)
                                throw new Error(
                                    "Async schemas not supported in object keys currently"
                                );
                            m.issues.length === 0 && (l = m);
                        }
                        if (l.issues.length) {
                            t.mode === "loose"
                                ? (i.value[c] = n[c])
                                : i.issues.push({
                                      code: "invalid_key",
                                      origin: "record",
                                      issues: l.issues.map((m) => C(m, o, N())),
                                      input: c,
                                      path: [c],
                                      inst: e
                                  });
                            continue;
                        }
                        const d = t.valueType._zod.run(
                            { value: n[c], issues: [] },
                            o
                        );
                        d instanceof Promise
                            ? r.push(
                                  d.then((m) => {
                                      (m.issues.length &&
                                          i.issues.push(...K(c, m.issues)),
                                          (i.value[l.value] = m.value));
                                  })
                              )
                            : (d.issues.length &&
                                  i.issues.push(...K(c, d.issues)),
                              (i.value[l.value] = d.value));
                    }
                }
                return r.length ? Promise.all(r).then(() => i) : i;
            }));
    }),
    Qa = s("$ZodMap", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                if (!(n instanceof Map))
                    return (
                        i.issues.push({
                            expected: "map",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                        i
                    );
                const r = [];
                i.value = new Map();
                for (const [a, c] of n) {
                    const l = t.keyType._zod.run({ value: a, issues: [] }, o),
                        u = t.valueType._zod.run({ value: c, issues: [] }, o);
                    l instanceof Promise || u instanceof Promise
                        ? r.push(
                              Promise.all([l, u]).then(([d, m]) => {
                                  ki(d, m, i, a, n, e, o);
                              })
                          )
                        : ki(l, u, i, a, n, e, o);
                }
                return r.length ? Promise.all(r).then(() => i) : i;
            }));
    });
function ki(e, t, i, o, n, r, a) {
    (e.issues.length &&
        (ln.has(typeof o)
            ? i.issues.push(...K(o, e.issues))
            : i.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: n,
                  inst: r,
                  issues: e.issues.map((c) => C(c, a, N()))
              })),
        t.issues.length &&
            (ln.has(typeof o)
                ? i.issues.push(...K(o, t.issues))
                : i.issues.push({
                      origin: "map",
                      code: "invalid_element",
                      input: n,
                      inst: r,
                      key: o,
                      issues: t.issues.map((c) => C(c, a, N()))
                  })),
        i.value.set(e.value, t.value));
}
const ec = s("$ZodSet", (e, t) => {
    (b.init(e, t),
        (e._zod.parse = (i, o) => {
            const n = i.value;
            if (!(n instanceof Set))
                return (
                    i.issues.push({
                        input: n,
                        inst: e,
                        expected: "set",
                        code: "invalid_type"
                    }),
                    i
                );
            const r = [];
            i.value = new Set();
            for (const a of n) {
                const c = t.valueType._zod.run({ value: a, issues: [] }, o);
                c instanceof Promise
                    ? r.push(c.then((l) => Si(l, i)))
                    : Si(c, i);
            }
            return r.length ? Promise.all(r).then(() => i) : i;
        }));
});
function Si(e, t) {
    (e.issues.length && t.issues.push(...e.issues), t.value.add(e.value));
}
const nc = s("$ZodEnum", (e, t) => {
        b.init(e, t);
        const i = hn(t.entries),
            o = new Set(i);
        ((e._zod.values = o),
            (e._zod.pattern = new RegExp(
                `^(${i
                    .filter((n) => ln.has(typeof n))
                    .map((n) => (typeof n == "string" ? q(n) : n.toString()))
                    .join("|")})$`
            )),
            (e._zod.parse = (n, r) => {
                const a = n.value;
                return (
                    o.has(a) ||
                        n.issues.push({
                            code: "invalid_value",
                            values: i,
                            input: a,
                            inst: e
                        }),
                    n
                );
            }));
    }),
    tc = s("$ZodLiteral", (e, t) => {
        if ((b.init(e, t), t.values.length === 0))
            throw new Error(
                "Cannot create literal schema with no valid values"
            );
        const i = new Set(t.values);
        ((e._zod.values = i),
            (e._zod.pattern = new RegExp(
                `^(${t.values.map((o) => (typeof o == "string" ? q(o) : o ? q(o.toString()) : String(o))).join("|")})$`
            )),
            (e._zod.parse = (o, n) => {
                const r = o.value;
                return (
                    i.has(r) ||
                        o.issues.push({
                            code: "invalid_value",
                            values: t.values,
                            input: r,
                            inst: e
                        }),
                    o
                );
            }));
    }),
    rc = s("$ZodFile", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value;
                return (
                    n instanceof File ||
                        i.issues.push({
                            expected: "file",
                            code: "invalid_type",
                            input: n,
                            inst: e
                        }),
                    i
                );
            }));
    }),
    ic = s("$ZodTransform", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                if (o.direction === "backward")
                    throw new gn(e.constructor.name);
                const n = t.transform(i.value, i);
                if (o.async)
                    return (n instanceof Promise ? n : Promise.resolve(n)).then(
                        (a) => ((i.value = a), i)
                    );
                if (n instanceof Promise) throw new re();
                return ((i.value = n), i);
            }));
    });
function Ii(e, t) {
    return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Jt = s("$ZodOptional", (e, t) => {
        (b.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            k(e._zod, "values", () =>
                t.innerType._zod.values
                    ? new Set([...t.innerType._zod.values, void 0])
                    : void 0
            ),
            k(e._zod, "pattern", () => {
                const i = t.innerType._zod.pattern;
                return i ? new RegExp(`^(${$n(i.source)})?$`) : void 0;
            }),
            (e._zod.parse = (i, o) => {
                if (t.innerType._zod.optin === "optional") {
                    const n = t.innerType._zod.run(i, o);
                    return n instanceof Promise
                        ? n.then((r) => Ii(r, i.value))
                        : Ii(n, i.value);
                }
                return i.value === void 0 ? i : t.innerType._zod.run(i, o);
            }));
    }),
    oc = s("$ZodExactOptional", (e, t) => {
        (Jt.init(e, t),
            k(e._zod, "values", () => t.innerType._zod.values),
            k(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (i, o) => t.innerType._zod.run(i, o)));
    }),
    ac = s("$ZodNullable", (e, t) => {
        (b.init(e, t),
            k(e._zod, "optin", () => t.innerType._zod.optin),
            k(e._zod, "optout", () => t.innerType._zod.optout),
            k(e._zod, "pattern", () => {
                const i = t.innerType._zod.pattern;
                return i ? new RegExp(`^(${$n(i.source)}|null)$`) : void 0;
            }),
            k(e._zod, "values", () =>
                t.innerType._zod.values
                    ? new Set([...t.innerType._zod.values, null])
                    : void 0
            ),
            (e._zod.parse = (i, o) =>
                i.value === null ? i : t.innerType._zod.run(i, o)));
    }),
    cc = s("$ZodDefault", (e, t) => {
        (b.init(e, t),
            (e._zod.optin = "optional"),
            k(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (i, o) => {
                if (o.direction === "backward")
                    return t.innerType._zod.run(i, o);
                if (i.value === void 0) return ((i.value = t.defaultValue), i);
                const n = t.innerType._zod.run(i, o);
                return n instanceof Promise
                    ? n.then((r) => zi(r, t))
                    : zi(n, t);
            }));
    });
function zi(e, t) {
    return (e.value === void 0 && (e.value = t.defaultValue), e);
}
const uc = s("$ZodPrefault", (e, t) => {
        (b.init(e, t),
            (e._zod.optin = "optional"),
            k(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (i, o) => (
                o.direction === "backward" ||
                    (i.value === void 0 && (i.value = t.defaultValue)),
                t.innerType._zod.run(i, o)
            )));
    }),
    lc = s("$ZodNonOptional", (e, t) => {
        (b.init(e, t),
            k(e._zod, "values", () => {
                const i = t.innerType._zod.values;
                return i ? new Set([...i].filter((o) => o !== void 0)) : void 0;
            }),
            (e._zod.parse = (i, o) => {
                const n = t.innerType._zod.run(i, o);
                return n instanceof Promise
                    ? n.then((r) => wi(r, e))
                    : wi(n, e);
            }));
    });
function wi(e, t) {
    return (
        !e.issues.length &&
            e.value === void 0 &&
            e.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: e.value,
                inst: t
            }),
        e
    );
}
const sc = s("$ZodSuccess", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => {
                if (o.direction === "backward") throw new gn("ZodSuccess");
                const n = t.innerType._zod.run(i, o);
                return n instanceof Promise
                    ? n.then((r) => ((i.value = r.issues.length === 0), i))
                    : ((i.value = n.issues.length === 0), i);
            }));
    }),
    dc = s("$ZodCatch", (e, t) => {
        (b.init(e, t),
            k(e._zod, "optin", () => t.innerType._zod.optin),
            k(e._zod, "optout", () => t.innerType._zod.optout),
            k(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (i, o) => {
                if (o.direction === "backward")
                    return t.innerType._zod.run(i, o);
                const n = t.innerType._zod.run(i, o);
                return n instanceof Promise
                    ? n.then(
                          (r) => (
                              (i.value = r.value),
                              r.issues.length &&
                                  ((i.value = t.catchValue({
                                      ...i,
                                      error: {
                                          issues: r.issues.map((a) =>
                                              C(a, o, N())
                                          )
                                      },
                                      input: i.value
                                  })),
                                  (i.issues = [])),
                              i
                          )
                      )
                    : ((i.value = n.value),
                      n.issues.length &&
                          ((i.value = t.catchValue({
                              ...i,
                              error: {
                                  issues: n.issues.map((r) => C(r, o, N()))
                              },
                              input: i.value
                          })),
                          (i.issues = [])),
                      i);
            }));
    }),
    mc = s("$ZodNaN", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) => (
                (typeof i.value != "number" || !Number.isNaN(i.value)) &&
                    i.issues.push({
                        input: i.value,
                        inst: e,
                        expected: "nan",
                        code: "invalid_type"
                    }),
                i
            )));
    }),
    fc = s("$ZodPipe", (e, t) => {
        (b.init(e, t),
            k(e._zod, "values", () => t.in._zod.values),
            k(e._zod, "optin", () => t.in._zod.optin),
            k(e._zod, "optout", () => t.out._zod.optout),
            k(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (i, o) => {
                if (o.direction === "backward") {
                    const r = t.out._zod.run(i, o);
                    return r instanceof Promise
                        ? r.then((a) => rn(a, t.in, o))
                        : rn(r, t.in, o);
                }
                const n = t.in._zod.run(i, o);
                return n instanceof Promise
                    ? n.then((r) => rn(r, t.out, o))
                    : rn(n, t.out, o);
            }));
    });
function rn(e, t, i) {
    return e.issues.length
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, i);
}
const Mt = s("$ZodCodec", (e, t) => {
    (b.init(e, t),
        k(e._zod, "values", () => t.in._zod.values),
        k(e._zod, "optin", () => t.in._zod.optin),
        k(e._zod, "optout", () => t.out._zod.optout),
        k(e._zod, "propValues", () => t.in._zod.propValues),
        (e._zod.parse = (i, o) => {
            if ((o.direction || "forward") === "forward") {
                const r = t.in._zod.run(i, o);
                return r instanceof Promise
                    ? r.then((a) => on(a, t, o))
                    : on(r, t, o);
            } else {
                const r = t.out._zod.run(i, o);
                return r instanceof Promise
                    ? r.then((a) => on(a, t, o))
                    : on(r, t, o);
            }
        }));
});
function on(e, t, i) {
    if (e.issues.length) return ((e.aborted = !0), e);
    if ((i.direction || "forward") === "forward") {
        const n = t.transform(e.value, e);
        return n instanceof Promise
            ? n.then((r) => an(e, r, t.out, i))
            : an(e, n, t.out, i);
    } else {
        const n = t.reverseTransform(e.value, e);
        return n instanceof Promise
            ? n.then((r) => an(e, r, t.in, i))
            : an(e, n, t.in, i);
    }
}
function an(e, t, i, o) {
    return e.issues.length
        ? ((e.aborted = !0), e)
        : i._zod.run({ value: t, issues: e.issues }, o);
}
const pc = s("$ZodReadonly", (e, t) => {
    (b.init(e, t),
        k(e._zod, "propValues", () => t.innerType._zod.propValues),
        k(e._zod, "values", () => t.innerType._zod.values),
        k(e._zod, "optin", () => t.innerType?._zod?.optin),
        k(e._zod, "optout", () => t.innerType?._zod?.optout),
        (e._zod.parse = (i, o) => {
            if (o.direction === "backward") return t.innerType._zod.run(i, o);
            const n = t.innerType._zod.run(i, o);
            return n instanceof Promise ? n.then(xi) : xi(n);
        }));
});
function xi(e) {
    return ((e.value = Object.freeze(e.value)), e);
}
const vc = s("$ZodTemplateLiteral", (e, t) => {
        b.init(e, t);
        const i = [];
        for (const o of t.parts)
            if (typeof o == "object" && o !== null) {
                if (!o._zod.pattern)
                    throw new Error(
                        `Invalid template literal part, no pattern found: ${[...o._zod.traits].shift()}`
                    );
                const n =
                    o._zod.pattern instanceof RegExp
                        ? o._zod.pattern.source
                        : o._zod.pattern;
                if (!n)
                    throw new Error(
                        `Invalid template literal part: ${o._zod.traits}`
                    );
                const r = n.startsWith("^") ? 1 : 0,
                    a = n.endsWith("$") ? n.length - 1 : n.length;
                i.push(n.slice(r, a));
            } else if (o === null || Li.has(typeof o)) i.push(q(`${o}`));
            else throw new Error(`Invalid template literal part: ${o}`);
        ((e._zod.pattern = new RegExp(`^${i.join("")}$`)),
            (e._zod.parse = (o, n) =>
                typeof o.value != "string"
                    ? (o.issues.push({
                          input: o.value,
                          inst: e,
                          expected: "string",
                          code: "invalid_type"
                      }),
                      o)
                    : ((e._zod.pattern.lastIndex = 0),
                      e._zod.pattern.test(o.value) ||
                          o.issues.push({
                              input: o.value,
                              inst: e,
                              code: "invalid_format",
                              format: t.format ?? "template_literal",
                              pattern: e._zod.pattern.source
                          }),
                      o)));
    }),
    gc = s(
        "$ZodFunction",
        (e, t) => (
            b.init(e, t),
            (e._def = t),
            (e._zod.def = t),
            (e.implement = (i) => {
                if (typeof i != "function")
                    throw new Error(
                        "implement() must be called with a function"
                    );
                return function (...o) {
                    const n = e._def.input ? ft(e._def.input, o) : o,
                        r = Reflect.apply(i, this, n);
                    return e._def.output ? ft(e._def.output, r) : r;
                };
            }),
            (e.implementAsync = (i) => {
                if (typeof i != "function")
                    throw new Error(
                        "implementAsync() must be called with a function"
                    );
                return async function (...o) {
                    const n = e._def.input ? await pt(e._def.input, o) : o,
                        r = await Reflect.apply(i, this, n);
                    return e._def.output ? await pt(e._def.output, r) : r;
                };
            }),
            (e._zod.parse = (i, o) =>
                typeof i.value != "function"
                    ? (i.issues.push({
                          code: "invalid_type",
                          expected: "function",
                          input: i.value,
                          inst: e
                      }),
                      i)
                    : (e._def.output &&
                      e._def.output._zod.def.type === "promise"
                          ? (i.value = e.implementAsync(i.value))
                          : (i.value = e.implement(i.value)),
                      i)),
            (e.input = (...i) => {
                const o = e.constructor;
                return Array.isArray(i[0])
                    ? new o({
                          type: "function",
                          input: new Ct({
                              type: "tuple",
                              items: i[0],
                              rest: i[1]
                          }),
                          output: e._def.output
                      })
                    : new o({
                          type: "function",
                          input: i[0],
                          output: e._def.output
                      });
            }),
            (e.output = (i) => {
                const o = e.constructor;
                return new o({
                    type: "function",
                    input: e._def.input,
                    output: i
                });
            }),
            e
        )
    ),
    hc = s("$ZodPromise", (e, t) => {
        (b.init(e, t),
            (e._zod.parse = (i, o) =>
                Promise.resolve(i.value).then((n) =>
                    t.innerType._zod.run({ value: n, issues: [] }, o)
                )));
    }),
    $c = s("$ZodLazy", (e, t) => {
        (b.init(e, t),
            k(e._zod, "innerType", () => t.getter()),
            k(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
            k(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
            k(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
            k(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (i, o) => e._zod.innerType._zod.run(i, o)));
    }),
    _c = s("$ZodCustom", (e, t) => {
        (j.init(e, t),
            b.init(e, t),
            (e._zod.parse = (i, o) => i),
            (e._zod.check = (i) => {
                const o = i.value,
                    n = t.fn(o);
                if (n instanceof Promise) return n.then((r) => Ui(r, i, o, e));
                Ui(n, i, o, e);
            }));
    });
function Ui(e, t, i, o) {
    if (!e) {
        const n = {
            code: "custom",
            input: i,
            inst: o,
            path: [...(o._zod.def.path ?? [])],
            continue: !o._zod.def.abort
        };
        (o._zod.def.params && (n.params = o._zod.def.params),
            t.issues.push(de(n)));
    }
}
const Fd = () => {
    const e = {
        string: { unit: "حرف", verb: "أن يحوي" },
        file: { unit: "بايت", verb: "أن يحوي" },
        array: { unit: "عنصر", verb: "أن يحوي" },
        set: { unit: "عنصر", verb: "أن يحوي" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${n.expected}، ولكن تم إدخال ${c}`
                    : `مدخلات غير مقبولة: يفترض إدخال ${r}، ولكن تم إدخال ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `مدخلات غير مقبولة: يفترض إدخال ${$(n.values[0])}`
                    : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${r} ${n.maximum.toString()} ${a.unit ?? "عنصر"}`
                    : `أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${r} ${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${r} ${n.minimum.toString()} ${a.unit}`
                    : `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${r} ${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"`
                    : r.format === "ends_with"
                      ? `نَص غير مقبول: يجب أن ينتهي بـ "${r.suffix}"`
                      : r.format === "includes"
                        ? `نَص غير مقبول: يجب أن يتضمَّن "${r.includes}"`
                        : r.format === "regex"
                          ? `نَص غير مقبول: يجب أن يطابق النمط ${r.pattern}`
                          : `${i[r.format] ?? n.format} غير مقبول`;
            }
            case "not_multiple_of":
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
            case "unrecognized_keys":
                return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${p(n.keys, "، ")}`;
            case "invalid_key":
                return `معرف غير مقبول في ${n.origin}`;
            case "invalid_union":
                return "مدخل غير مقبول";
            case "invalid_element":
                return `مدخل غير مقبول في ${n.origin}`;
            default:
                return "مدخل غير مقبول";
        }
    };
};
function Cd() {
    return { localeError: Fd() };
}
const Jd = () => {
    const e = {
        string: { unit: "simvol", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "element", verb: "olmalıdır" },
        set: { unit: "element", verb: "olmalıdır" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Yanlış dəyər: gözlənilən instanceof ${n.expected}, daxil olan ${c}`
                    : `Yanlış dəyər: gözlənilən ${r}, daxil olan ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Yanlış dəyər: gözlənilən ${$(n.values[0])}`
                    : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${r}${n.maximum.toString()} ${a.unit ?? "element"}`
                    : `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Çox kiçik: gözlənilən ${n.origin} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Çox kiçik: gözlənilən ${n.origin} ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Yanlış mətn: "${r.prefix}" ilə başlamalıdır`
                    : r.format === "ends_with"
                      ? `Yanlış mətn: "${r.suffix}" ilə bitməlidir`
                      : r.format === "includes"
                        ? `Yanlış mətn: "${r.includes}" daxil olmalıdır`
                        : r.format === "regex"
                          ? `Yanlış mətn: ${r.pattern} şablonuna uyğun olmalıdır`
                          : `Yanlış ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`;
            case "unrecognized_keys":
                return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `${n.origin} daxilində yanlış açar`;
            case "invalid_union":
                return "Yanlış dəyər";
            case "invalid_element":
                return `${n.origin} daxilində yanlış dəyər`;
            default:
                return "Yanlış dəyər";
        }
    };
};
function Md() {
    return { localeError: Jd() };
}
function ji(e, t, i, o) {
    const n = Math.abs(e),
        r = n % 10,
        a = n % 100;
    return a >= 11 && a <= 19 ? o : r === 1 ? t : r >= 2 && r <= 4 ? i : o;
}
const Kd = () => {
    const e = {
        string: {
            unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" },
            verb: "мець"
        },
        array: {
            unit: { one: "элемент", few: "элементы", many: "элементаў" },
            verb: "мець"
        },
        set: {
            unit: { one: "элемент", few: "элементы", many: "элементаў" },
            verb: "мець"
        },
        file: {
            unit: { one: "байт", few: "байты", many: "байтаў" },
            verb: "мець"
        }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "лік", array: "масіў" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Няправільны ўвод: чакаўся instanceof ${n.expected}, атрымана ${c}`
                    : `Няправільны ўвод: чакаўся ${r}, атрымана ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Няправільны ўвод: чакалася ${$(n.values[0])}`
                    : `Няправільны варыянт: чакаўся адзін з ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                if (a) {
                    const c = Number(n.maximum),
                        l = ji(c, a.unit.one, a.unit.few, a.unit.many);
                    return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${a.verb} ${r}${n.maximum.toString()} ${l}`;
                }
                return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                if (a) {
                    const c = Number(n.minimum),
                        l = ji(c, a.unit.one, a.unit.few, a.unit.many);
                    return `Занадта малы: чакалася, што ${n.origin} павінна ${a.verb} ${r}${n.minimum.toString()} ${l}`;
                }
                return `Занадта малы: чакалася, што ${n.origin} павінна быць ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Няправільны радок: павінен пачынацца з "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Няправільны радок: павінен заканчвацца на "${r.suffix}"`
                      : r.format === "includes"
                        ? `Няправільны радок: павінен змяшчаць "${r.includes}"`
                        : r.format === "regex"
                          ? `Няправільны радок: павінен адпавядаць шаблону ${r.pattern}`
                          : `Няправільны ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Няправільны лік: павінен быць кратным ${n.divisor}`;
            case "unrecognized_keys":
                return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Няправільны ключ у ${n.origin}`;
            case "invalid_union":
                return "Няправільны ўвод";
            case "invalid_element":
                return `Няправільнае значэнне ў ${n.origin}`;
            default:
                return "Няправільны ўвод";
        }
    };
};
function Vd() {
    return { localeError: Kd() };
}
const Bd = () => {
    const e = {
        string: { unit: "символа", verb: "да съдържа" },
        file: { unit: "байта", verb: "да съдържа" },
        array: { unit: "елемента", verb: "да съдържа" },
        set: { unit: "елемента", verb: "да съдържа" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
            regex: "вход",
            email: "имейл адрес",
            url: "URL",
            emoji: "емоджи",
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
            datetime: "ISO време",
            date: "ISO дата",
            time: "ISO време",
            duration: "ISO продължителност",
            ipv4: "IPv4 адрес",
            ipv6: "IPv6 адрес",
            cidrv4: "IPv4 диапазон",
            cidrv6: "IPv6 диапазон",
            base64: "base64-кодиран низ",
            base64url: "base64url-кодиран низ",
            json_string: "JSON низ",
            e164: "E.164 номер",
            jwt: "JWT",
            template_literal: "вход"
        },
        o = { nan: "NaN", number: "число", array: "масив" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Невалиден вход: очакван instanceof ${n.expected}, получен ${c}`
                    : `Невалиден вход: очакван ${r}, получен ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Невалиден вход: очакван ${$(n.values[0])}`
                    : `Невалидна опция: очаквано едно от ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Твърде голямо: очаква се ${n.origin ?? "стойност"} да съдържа ${r}${n.maximum.toString()} ${a.unit ?? "елемента"}`
                    : `Твърде голямо: очаква се ${n.origin ?? "стойност"} да бъде ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Твърде малко: очаква се ${n.origin} да съдържа ${r}${n.minimum.toString()} ${a.unit}`
                    : `Твърде малко: очаква се ${n.origin} да бъде ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                if (r.format === "starts_with")
                    return `Невалиден низ: трябва да започва с "${r.prefix}"`;
                if (r.format === "ends_with")
                    return `Невалиден низ: трябва да завършва с "${r.suffix}"`;
                if (r.format === "includes")
                    return `Невалиден низ: трябва да включва "${r.includes}"`;
                if (r.format === "regex")
                    return `Невалиден низ: трябва да съвпада с ${r.pattern}`;
                let a = "Невалиден";
                return (
                    r.format === "emoji" && (a = "Невалидно"),
                    r.format === "datetime" && (a = "Невалидно"),
                    r.format === "date" && (a = "Невалидна"),
                    r.format === "time" && (a = "Невалидно"),
                    r.format === "duration" && (a = "Невалидна"),
                    `${a} ${i[r.format] ?? n.format}`
                );
            }
            case "not_multiple_of":
                return `Невалидно число: трябва да бъде кратно на ${n.divisor}`;
            case "unrecognized_keys":
                return `Неразпознат${n.keys.length > 1 ? "и" : ""} ключ${n.keys.length > 1 ? "ове" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Невалиден ключ в ${n.origin}`;
            case "invalid_union":
                return "Невалиден вход";
            case "invalid_element":
                return `Невалидна стойност в ${n.origin}`;
            default:
                return "Невалиден вход";
        }
    };
};
function Gd() {
    return { localeError: Bd() };
}
const Wd = () => {
    const e = {
        string: { unit: "caràcters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Tipus invàlid: s'esperava instanceof ${n.expected}, s'ha rebut ${c}`
                    : `Tipus invàlid: s'esperava ${r}, s'ha rebut ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Valor invàlid: s'esperava ${$(n.values[0])}`
                    : `Opció invàlida: s'esperava una de ${p(n.values, " o ")}`;
            case "too_big": {
                const r = n.inclusive ? "com a màxim" : "menys de",
                    a = t(n.origin);
                return a
                    ? `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingués ${r} ${n.maximum.toString()} ${a.unit ?? "elements"}`
                    : `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${r} ${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? "com a mínim" : "més de",
                    a = t(n.origin);
                return a
                    ? `Massa petit: s'esperava que ${n.origin} contingués ${r} ${n.minimum.toString()} ${a.unit}`
                    : `Massa petit: s'esperava que ${n.origin} fos ${r} ${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Format invàlid: ha de començar amb "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Format invàlid: ha d'acabar amb "${r.suffix}"`
                      : r.format === "includes"
                        ? `Format invàlid: ha d'incloure "${r.includes}"`
                        : r.format === "regex"
                          ? `Format invàlid: ha de coincidir amb el patró ${r.pattern}`
                          : `Format invàlid per a ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Número invàlid: ha de ser múltiple de ${n.divisor}`;
            case "unrecognized_keys":
                return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Clau invàlida a ${n.origin}`;
            case "invalid_union":
                return "Entrada invàlida";
            case "invalid_element":
                return `Element invàlid a ${n.origin}`;
            default:
                return "Entrada invàlida";
        }
    };
};
function qd() {
    return { localeError: Wd() };
}
const Xd = () => {
    const e = {
        string: { unit: "znaků", verb: "mít" },
        file: { unit: "bajtů", verb: "mít" },
        array: { unit: "prvků", verb: "mít" },
        set: { unit: "prvků", verb: "mít" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            number: "číslo",
            string: "řetězec",
            function: "funkce",
            array: "pole"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Neplatný vstup: očekáváno instanceof ${n.expected}, obdrženo ${c}`
                    : `Neplatný vstup: očekáváno ${r}, obdrženo ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Neplatný vstup: očekáváno ${$(n.values[0])}`
                    : `Neplatná možnost: očekávána jedna z hodnot ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí mít ${r}${n.maximum.toString()} ${a.unit ?? "prvků"}`
                    : `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí být ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí mít ${r}${n.minimum.toString()} ${a.unit ?? "prvků"}`
                    : `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí být ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Neplatný řetězec: musí začínat na "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Neplatný řetězec: musí končit na "${r.suffix}"`
                      : r.format === "includes"
                        ? `Neplatný řetězec: musí obsahovat "${r.includes}"`
                        : r.format === "regex"
                          ? `Neplatný řetězec: musí odpovídat vzoru ${r.pattern}`
                          : `Neplatný formát ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Neplatné číslo: musí být násobkem ${n.divisor}`;
            case "unrecognized_keys":
                return `Neznámé klíče: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Neplatný klíč v ${n.origin}`;
            case "invalid_union":
                return "Neplatný vstup";
            case "invalid_element":
                return `Neplatná hodnota v ${n.origin}`;
            default:
                return "Neplatný vstup";
        }
    };
};
function Yd() {
    return { localeError: Xd() };
}
const Hd = () => {
    const e = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            string: "streng",
            number: "tal",
            boolean: "boolean",
            array: "liste",
            object: "objekt",
            set: "sæt",
            file: "fil"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Ugyldigt input: forventede instanceof ${n.expected}, fik ${c}`
                    : `Ugyldigt input: forventede ${r}, fik ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Ugyldig værdi: forventede ${$(n.values[0])}`
                    : `Ugyldigt valg: forventede en af følgende ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin;
                return a
                    ? `For stor: forventede ${c ?? "value"} ${a.verb} ${r} ${n.maximum.toString()} ${a.unit ?? "elementer"}`
                    : `For stor: forventede ${c ?? "value"} havde ${r} ${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin;
                return a
                    ? `For lille: forventede ${c} ${a.verb} ${r} ${n.minimum.toString()} ${a.unit}`
                    : `For lille: forventede ${c} havde ${r} ${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ugyldig streng: skal starte med "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Ugyldig streng: skal ende med "${r.suffix}"`
                      : r.format === "includes"
                        ? `Ugyldig streng: skal indeholde "${r.includes}"`
                        : r.format === "regex"
                          ? `Ugyldig streng: skal matche mønsteret ${r.pattern}`
                          : `Ugyldig ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Ugyldigt tal: skal være deleligt med ${n.divisor}`;
            case "unrecognized_keys":
                return `${n.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøgle i ${n.origin}`;
            case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
                return `Ugyldig værdi i ${n.origin}`;
            default:
                return "Ugyldigt input";
        }
    };
};
function Qd() {
    return { localeError: Hd() };
}
const em = () => {
    const e = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "Zahl", array: "Array" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Ungültige Eingabe: erwartet instanceof ${n.expected}, erhalten ${c}`
                    : `Ungültige Eingabe: erwartet ${r}, erhalten ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Ungültige Eingabe: erwartet ${$(n.values[0])}`
                    : `Ungültige Option: erwartet eine von ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${r}${n.maximum.toString()} ${a.unit ?? "Elemente"} hat`
                    : `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${r}${n.maximum.toString()} ist`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Zu klein: erwartet, dass ${n.origin} ${r}${n.minimum.toString()} ${a.unit} hat`
                    : `Zu klein: erwartet, dass ${n.origin} ${r}${n.minimum.toString()} ist`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ungültiger String: muss mit "${r.prefix}" beginnen`
                    : r.format === "ends_with"
                      ? `Ungültiger String: muss mit "${r.suffix}" enden`
                      : r.format === "includes"
                        ? `Ungültiger String: muss "${r.includes}" enthalten`
                        : r.format === "regex"
                          ? `Ungültiger String: muss dem Muster ${r.pattern} entsprechen`
                          : `Ungültig: ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
            case "unrecognized_keys":
                return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Ungültiger Schlüssel in ${n.origin}`;
            case "invalid_union":
                return "Ungültige Eingabe";
            case "invalid_element":
                return `Ungültiger Wert in ${n.origin}`;
            default:
                return "Ungültige Eingabe";
        }
    };
};
function nm() {
    return { localeError: em() };
}
const tm = () => {
    const e = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
        map: { unit: "entries", verb: "to have" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
            mac: "MAC address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input"
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return `Invalid input: expected ${r}, received ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Invalid input: expected ${$(n.values[0])}`
                    : `Invalid option: expected one of ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Too big: expected ${n.origin ?? "value"} to have ${r}${n.maximum.toString()} ${a.unit ?? "elements"}`
                    : `Too big: expected ${n.origin ?? "value"} to be ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Too small: expected ${n.origin} to have ${r}${n.minimum.toString()} ${a.unit}`
                    : `Too small: expected ${n.origin} to be ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Invalid string: must start with "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Invalid string: must end with "${r.suffix}"`
                      : r.format === "includes"
                        ? `Invalid string: must include "${r.includes}"`
                        : r.format === "regex"
                          ? `Invalid string: must match pattern ${r.pattern}`
                          : `Invalid ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${n.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${n.origin}`;
            case "invalid_union":
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${n.origin}`;
            default:
                return "Invalid input";
        }
    };
};
function bc() {
    return { localeError: tm() };
}
const rm = () => {
    const e = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            number: "nombro",
            array: "tabelo",
            null: "senvalora"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Nevalida enigo: atendiĝis instanceof ${n.expected}, riceviĝis ${c}`
                    : `Nevalida enigo: atendiĝis ${r}, riceviĝis ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Nevalida enigo: atendiĝis ${$(n.values[0])}`
                    : `Nevalida opcio: atendiĝis unu el ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Tro granda: atendiĝis ke ${n.origin ?? "valoro"} havu ${r}${n.maximum.toString()} ${a.unit ?? "elementojn"}`
                    : `Tro granda: atendiĝis ke ${n.origin ?? "valoro"} havu ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Tro malgranda: atendiĝis ke ${n.origin} havu ${r}${n.minimum.toString()} ${a.unit}`
                    : `Tro malgranda: atendiĝis ke ${n.origin} estu ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Nevalida karaktraro: devas komenciĝi per "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Nevalida karaktraro: devas finiĝi per "${r.suffix}"`
                      : r.format === "includes"
                        ? `Nevalida karaktraro: devas inkluzivi "${r.includes}"`
                        : r.format === "regex"
                          ? `Nevalida karaktraro: devas kongrui kun la modelo ${r.pattern}`
                          : `Nevalida ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${n.divisor}`;
            case "unrecognized_keys":
                return `Nekonata${n.keys.length > 1 ? "j" : ""} ŝlosilo${n.keys.length > 1 ? "j" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Nevalida ŝlosilo en ${n.origin}`;
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return `Nevalida valoro en ${n.origin}`;
            default:
                return "Nevalida enigo";
        }
    };
};
function im() {
    return { localeError: rm() };
}
const om = () => {
    const e = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
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
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Entrada inválida: se esperaba instanceof ${n.expected}, recibido ${c}`
                    : `Entrada inválida: se esperaba ${r}, recibido ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Entrada inválida: se esperaba ${$(n.values[0])}`
                    : `Opción inválida: se esperaba una de ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin;
                return a
                    ? `Demasiado grande: se esperaba que ${c ?? "valor"} tuviera ${r}${n.maximum.toString()} ${a.unit ?? "elementos"}`
                    : `Demasiado grande: se esperaba que ${c ?? "valor"} fuera ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin;
                return a
                    ? `Demasiado pequeño: se esperaba que ${c} tuviera ${r}${n.minimum.toString()} ${a.unit}`
                    : `Demasiado pequeño: se esperaba que ${c} fuera ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Cadena inválida: debe comenzar con "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Cadena inválida: debe terminar en "${r.suffix}"`
                      : r.format === "includes"
                        ? `Cadena inválida: debe incluir "${r.includes}"`
                        : r.format === "regex"
                          ? `Cadena inválida: debe coincidir con el patrón ${r.pattern}`
                          : `Inválido ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Número inválido: debe ser múltiplo de ${n.divisor}`;
            case "unrecognized_keys":
                return `Llave${n.keys.length > 1 ? "s" : ""} desconocida${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Llave inválida en ${o[n.origin] ?? n.origin}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido en ${o[n.origin] ?? n.origin}`;
            default:
                return "Entrada inválida";
        }
    };
};
function am() {
    return { localeError: om() };
}
const cm = () => {
    const e = {
        string: { unit: "کاراکتر", verb: "داشته باشد" },
        file: { unit: "بایت", verb: "داشته باشد" },
        array: { unit: "آیتم", verb: "داشته باشد" },
        set: { unit: "آیتم", verb: "داشته باشد" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "عدد", array: "آرایه" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `ورودی نامعتبر: می‌بایست instanceof ${n.expected} می‌بود، ${c} دریافت شد`
                    : `ورودی نامعتبر: می‌بایست ${r} می‌بود، ${c} دریافت شد`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `ورودی نامعتبر: می‌بایست ${$(n.values[0])} می‌بود`
                    : `گزینه نامعتبر: می‌بایست یکی از ${p(n.values, "|")} می‌بود`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${r}${n.maximum.toString()} ${a.unit ?? "عنصر"} باشد`
                    : `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${r}${n.maximum.toString()} باشد`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `خیلی کوچک: ${n.origin} باید ${r}${n.minimum.toString()} ${a.unit} باشد`
                    : `خیلی کوچک: ${n.origin} باید ${r}${n.minimum.toString()} باشد`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `رشته نامعتبر: باید با "${r.prefix}" شروع شود`
                    : r.format === "ends_with"
                      ? `رشته نامعتبر: باید با "${r.suffix}" تمام شود`
                      : r.format === "includes"
                        ? `رشته نامعتبر: باید شامل "${r.includes}" باشد`
                        : r.format === "regex"
                          ? `رشته نامعتبر: باید با الگوی ${r.pattern} مطابقت داشته باشد`
                          : `${i[r.format] ?? n.format} نامعتبر`;
            }
            case "not_multiple_of":
                return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
            case "unrecognized_keys":
                return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `کلید ناشناس در ${n.origin}`;
            case "invalid_union":
                return "ورودی نامعتبر";
            case "invalid_element":
                return `مقدار نامعتبر در ${n.origin}`;
            default:
                return "ورودی نامعتبر";
        }
    };
};
function um() {
    return { localeError: cm() };
}
const lm = () => {
    const e = {
        string: { unit: "merkkiä", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "päivämäärän" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Virheellinen tyyppi: odotettiin instanceof ${n.expected}, oli ${c}`
                    : `Virheellinen tyyppi: odotettiin ${r}, oli ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Virheellinen syöte: täytyy olla ${$(n.values[0])}`
                    : `Virheellinen valinta: täytyy olla yksi seuraavista: ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Liian suuri: ${a.subject} täytyy olla ${r}${n.maximum.toString()} ${a.unit}`.trim()
                    : `Liian suuri: arvon täytyy olla ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Liian pieni: ${a.subject} täytyy olla ${r}${n.minimum.toString()} ${a.unit}`.trim()
                    : `Liian pieni: arvon täytyy olla ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Virheellinen syöte: täytyy alkaa "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Virheellinen syöte: täytyy loppua "${r.suffix}"`
                      : r.format === "includes"
                        ? `Virheellinen syöte: täytyy sisältää "${r.includes}"`
                        : r.format === "regex"
                          ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${r.pattern}`
                          : `Virheellinen ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`;
            case "unrecognized_keys":
                return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${p(n.keys, ", ")}`;
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
function sm() {
    return { localeError: lm() };
}
const dm = () => {
    const e = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "nombre", array: "tableau" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Entrée invalide : instanceof ${n.expected} attendu, ${c} reçu`
                    : `Entrée invalide : ${r} attendu, ${c} reçu`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Entrée invalide : ${$(n.values[0])} attendu`
                    : `Option invalide : une valeur parmi ${p(n.values, "|")} attendue`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Trop grand : ${n.origin ?? "valeur"} doit ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? "élément(s)"}`
                    : `Trop grand : ${n.origin ?? "valeur"} doit être ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Trop petit : ${n.origin} doit ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Trop petit : ${n.origin} doit être ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Chaîne invalide : doit commencer par "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Chaîne invalide : doit se terminer par "${r.suffix}"`
                      : r.format === "includes"
                        ? `Chaîne invalide : doit inclure "${r.includes}"`
                        : r.format === "regex"
                          ? `Chaîne invalide : doit correspondre au modèle ${r.pattern}`
                          : `${i[r.format] ?? n.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${n.divisor}`;
            case "unrecognized_keys":
                return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${n.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${n.origin}`;
            default:
                return "Entrée invalide";
        }
    };
};
function mm() {
    return { localeError: dm() };
}
const fm = () => {
    const e = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Entrée invalide : attendu instanceof ${n.expected}, reçu ${c}`
                    : `Entrée invalide : attendu ${r}, reçu ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Entrée invalide : attendu ${$(n.values[0])}`
                    : `Option invalide : attendu l'une des valeurs suivantes ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "≤" : "<",
                    a = t(n.origin);
                return a
                    ? `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${r}${n.maximum.toString()} ${a.unit}`
                    : `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? "≥" : ">",
                    a = t(n.origin);
                return a
                    ? `Trop petit : attendu que ${n.origin} ait ${r}${n.minimum.toString()} ${a.unit}`
                    : `Trop petit : attendu que ${n.origin} soit ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Chaîne invalide : doit commencer par "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Chaîne invalide : doit se terminer par "${r.suffix}"`
                      : r.format === "includes"
                        ? `Chaîne invalide : doit inclure "${r.includes}"`
                        : r.format === "regex"
                          ? `Chaîne invalide : doit correspondre au motif ${r.pattern}`
                          : `${i[r.format] ?? n.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${n.divisor}`;
            case "unrecognized_keys":
                return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${n.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${n.origin}`;
            default:
                return "Entrée invalide";
        }
    };
};
function pm() {
    return { localeError: fm() };
}
const vm = () => {
    const e = {
            string: { label: "מחרוזת", gender: "f" },
            number: { label: "מספר", gender: "m" },
            boolean: { label: "ערך בוליאני", gender: "m" },
            bigint: { label: "BigInt", gender: "m" },
            date: { label: "תאריך", gender: "m" },
            array: { label: "מערך", gender: "m" },
            object: { label: "אובייקט", gender: "m" },
            null: { label: "ערך ריק (null)", gender: "m" },
            undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
            symbol: { label: "סימבול (Symbol)", gender: "m" },
            function: { label: "פונקציה", gender: "f" },
            map: { label: "מפה (Map)", gender: "f" },
            set: { label: "קבוצה (Set)", gender: "f" },
            file: { label: "קובץ", gender: "m" },
            promise: { label: "Promise", gender: "m" },
            NaN: { label: "NaN", gender: "m" },
            unknown: { label: "ערך לא ידוע", gender: "m" },
            value: { label: "ערך", gender: "m" }
        },
        t = {
            string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
            file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
            array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
            set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
            number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
        },
        i = (u) => (u ? e[u] : void 0),
        o = (u) => {
            const d = i(u);
            return d ? d.label : (u ?? e.unknown.label);
        },
        n = (u) => `ה${o(u)}`,
        r = (u) =>
            (i(u)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות",
        a = (u) => (u ? (t[u] ?? null) : null),
        c = {
            regex: { label: "קלט", gender: "m" },
            email: { label: "כתובת אימייל", gender: "f" },
            url: { label: "כתובת רשת", gender: "f" },
            emoji: { label: "אימוג'י", gender: "m" },
            uuid: { label: "UUID", gender: "m" },
            nanoid: { label: "nanoid", gender: "m" },
            guid: { label: "GUID", gender: "m" },
            cuid: { label: "cuid", gender: "m" },
            cuid2: { label: "cuid2", gender: "m" },
            ulid: { label: "ULID", gender: "m" },
            xid: { label: "XID", gender: "m" },
            ksuid: { label: "KSUID", gender: "m" },
            datetime: { label: "תאריך וזמן ISO", gender: "m" },
            date: { label: "תאריך ISO", gender: "m" },
            time: { label: "זמן ISO", gender: "m" },
            duration: { label: "משך זמן ISO", gender: "m" },
            ipv4: { label: "כתובת IPv4", gender: "f" },
            ipv6: { label: "כתובת IPv6", gender: "f" },
            cidrv4: { label: "טווח IPv4", gender: "m" },
            cidrv6: { label: "טווח IPv6", gender: "m" },
            base64: { label: "מחרוזת בבסיס 64", gender: "f" },
            base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
            json_string: { label: "מחרוזת JSON", gender: "f" },
            e164: { label: "מספר E.164", gender: "m" },
            jwt: { label: "JWT", gender: "m" },
            ends_with: { label: "קלט", gender: "m" },
            includes: { label: "קלט", gender: "m" },
            lowercase: { label: "קלט", gender: "m" },
            starts_with: { label: "קלט", gender: "m" },
            uppercase: { label: "קלט", gender: "m" }
        },
        l = { nan: "NaN" };
    return (u) => {
        switch (u.code) {
            case "invalid_type": {
                const d = u.expected,
                    m = l[d ?? ""] ?? o(d),
                    v = _(u.input),
                    g = l[v] ?? e[v]?.label ?? v;
                return /^[A-Z]/.test(u.expected)
                    ? `קלט לא תקין: צריך להיות instanceof ${u.expected}, התקבל ${g}`
                    : `קלט לא תקין: צריך להיות ${m}, התקבל ${g}`;
            }
            case "invalid_value": {
                if (u.values.length === 1)
                    return `ערך לא תקין: הערך חייב להיות ${$(u.values[0])}`;
                const d = u.values.map((g) => $(g));
                if (u.values.length === 2)
                    return `ערך לא תקין: האפשרויות המתאימות הן ${d[0]} או ${d[1]}`;
                const m = d[d.length - 1];
                return `ערך לא תקין: האפשרויות המתאימות הן ${d.slice(0, -1).join(", ")} או ${m}`;
            }
            case "too_big": {
                const d = a(u.origin),
                    m = n(u.origin ?? "value");
                if (u.origin === "string")
                    return `${d?.longLabel ?? "ארוך"} מדי: ${m} צריכה להכיל ${u.maximum.toString()} ${d?.unit ?? ""} ${u.inclusive ? "או פחות" : "לכל היותר"}`.trim();
                if (u.origin === "number") {
                    const S = u.inclusive
                        ? `קטן או שווה ל-${u.maximum}`
                        : `קטן מ-${u.maximum}`;
                    return `גדול מדי: ${m} צריך להיות ${S}`;
                }
                if (u.origin === "array" || u.origin === "set") {
                    const S = u.origin === "set" ? "צריכה" : "צריך",
                        I = u.inclusive
                            ? `${u.maximum} ${d?.unit ?? ""} או פחות`
                            : `פחות מ-${u.maximum} ${d?.unit ?? ""}`;
                    return `גדול מדי: ${m} ${S} להכיל ${I}`.trim();
                }
                const v = u.inclusive ? "<=" : "<",
                    g = r(u.origin ?? "value");
                return d?.unit
                    ? `${d.longLabel} מדי: ${m} ${g} ${v}${u.maximum.toString()} ${d.unit}`
                    : `${d?.longLabel ?? "גדול"} מדי: ${m} ${g} ${v}${u.maximum.toString()}`;
            }
            case "too_small": {
                const d = a(u.origin),
                    m = n(u.origin ?? "value");
                if (u.origin === "string")
                    return `${d?.shortLabel ?? "קצר"} מדי: ${m} צריכה להכיל ${u.minimum.toString()} ${d?.unit ?? ""} ${u.inclusive ? "או יותר" : "לפחות"}`.trim();
                if (u.origin === "number") {
                    const S = u.inclusive
                        ? `גדול או שווה ל-${u.minimum}`
                        : `גדול מ-${u.minimum}`;
                    return `קטן מדי: ${m} צריך להיות ${S}`;
                }
                if (u.origin === "array" || u.origin === "set") {
                    const S = u.origin === "set" ? "צריכה" : "צריך";
                    if (u.minimum === 1 && u.inclusive) {
                        const Y = (u.origin === "set", "לפחות פריט אחד");
                        return `קטן מדי: ${m} ${S} להכיל ${Y}`;
                    }
                    const I = u.inclusive
                        ? `${u.minimum} ${d?.unit ?? ""} או יותר`
                        : `יותר מ-${u.minimum} ${d?.unit ?? ""}`;
                    return `קטן מדי: ${m} ${S} להכיל ${I}`.trim();
                }
                const v = u.inclusive ? ">=" : ">",
                    g = r(u.origin ?? "value");
                return d?.unit
                    ? `${d.shortLabel} מדי: ${m} ${g} ${v}${u.minimum.toString()} ${d.unit}`
                    : `${d?.shortLabel ?? "קטן"} מדי: ${m} ${g} ${v}${u.minimum.toString()}`;
            }
            case "invalid_format": {
                const d = u;
                if (d.format === "starts_with")
                    return `המחרוזת חייבת להתחיל ב "${d.prefix}"`;
                if (d.format === "ends_with")
                    return `המחרוזת חייבת להסתיים ב "${d.suffix}"`;
                if (d.format === "includes")
                    return `המחרוזת חייבת לכלול "${d.includes}"`;
                if (d.format === "regex")
                    return `המחרוזת חייבת להתאים לתבנית ${d.pattern}`;
                const m = c[d.format],
                    v = m?.label ?? d.format,
                    S = (m?.gender ?? "m") === "f" ? "תקינה" : "תקין";
                return `${v} לא ${S}`;
            }
            case "not_multiple_of":
                return `מספר לא תקין: חייב להיות מכפלה של ${u.divisor}`;
            case "unrecognized_keys":
                return `מפתח${u.keys.length > 1 ? "ות" : ""} לא מזוה${u.keys.length > 1 ? "ים" : "ה"}: ${p(u.keys, ", ")}`;
            case "invalid_key":
                return "שדה לא תקין באובייקט";
            case "invalid_union":
                return "קלט לא תקין";
            case "invalid_element":
                return `ערך לא תקין ב${n(u.origin ?? "array")}`;
            default:
                return "קלט לא תקין";
        }
    };
};
function gm() {
    return { localeError: vm() };
}
const hm = () => {
    const e = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "szám", array: "tömb" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Érvénytelen bemenet: a várt érték instanceof ${n.expected}, a kapott érték ${c}`
                    : `Érvénytelen bemenet: a várt érték ${r}, a kapott érték ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Érvénytelen bemenet: a várt érték ${$(n.values[0])}`
                    : `Érvénytelen opció: valamelyik érték várt ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Túl nagy: ${n.origin ?? "érték"} mérete túl nagy ${r}${n.maximum.toString()} ${a.unit ?? "elem"}`
                    : `Túl nagy: a bemeneti érték ${n.origin ?? "érték"} túl nagy: ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Túl kicsi: a bemeneti érték ${n.origin} mérete túl kicsi ${r}${n.minimum.toString()} ${a.unit}`
                    : `Túl kicsi: a bemeneti érték ${n.origin} túl kicsi ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Érvénytelen string: "${r.prefix}" értékkel kell kezdődnie`
                    : r.format === "ends_with"
                      ? `Érvénytelen string: "${r.suffix}" értékkel kell végződnie`
                      : r.format === "includes"
                        ? `Érvénytelen string: "${r.includes}" értéket kell tartalmaznia`
                        : r.format === "regex"
                          ? `Érvénytelen string: ${r.pattern} mintának kell megfelelnie`
                          : `Érvénytelen ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`;
            case "unrecognized_keys":
                return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Érvénytelen kulcs ${n.origin}`;
            case "invalid_union":
                return "Érvénytelen bemenet";
            case "invalid_element":
                return `Érvénytelen érték: ${n.origin}`;
            default:
                return "Érvénytelen bemenet";
        }
    };
};
function $m() {
    return { localeError: hm() };
}
function Oi(e, t, i) {
    return Math.abs(e) === 1 ? t : i;
}
function le(e) {
    if (!e) return "";
    const t = ["ա", "ե", "ը", "ի", "ո", "ու", "օ"],
        i = e[e.length - 1];
    return e + (t.includes(i) ? "ն" : "ը");
}
const _m = () => {
    const e = {
        string: { unit: { one: "նշան", many: "նշաններ" }, verb: "ունենալ" },
        file: { unit: { one: "բայթ", many: "բայթեր" }, verb: "ունենալ" },
        array: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
        set: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
            regex: "մուտք",
            email: "էլ. հասցե",
            url: "URL",
            emoji: "էմոջի",
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
            datetime: "ISO ամսաթիվ և ժամ",
            date: "ISO ամսաթիվ",
            time: "ISO ժամ",
            duration: "ISO տևողություն",
            ipv4: "IPv4 հասցե",
            ipv6: "IPv6 հասցե",
            cidrv4: "IPv4 միջակայք",
            cidrv6: "IPv6 միջակայք",
            base64: "base64 ձևաչափով տող",
            base64url: "base64url ձևաչափով տող",
            json_string: "JSON տող",
            e164: "E.164 համար",
            jwt: "JWT",
            template_literal: "մուտք"
        },
        o = { nan: "NaN", number: "թիվ", array: "զանգված" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${n.expected}, ստացվել է ${c}`
                    : `Սխալ մուտքագրում․ սպասվում էր ${r}, ստացվել է ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Սխալ մուտքագրում․ սպասվում էր ${$(n.values[1])}`
                    : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                if (a) {
                    const c = Number(n.maximum),
                        l = Oi(c, a.unit.one, a.unit.many);
                    return `Չափազանց մեծ արժեք․ սպասվում է, որ ${le(n.origin ?? "արժեք")} կունենա ${r}${n.maximum.toString()} ${l}`;
                }
                return `Չափազանց մեծ արժեք․ սպասվում է, որ ${le(n.origin ?? "արժեք")} լինի ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                if (a) {
                    const c = Number(n.minimum),
                        l = Oi(c, a.unit.one, a.unit.many);
                    return `Չափազանց փոքր արժեք․ սպասվում է, որ ${le(n.origin)} կունենա ${r}${n.minimum.toString()} ${l}`;
                }
                return `Չափազանց փոքր արժեք․ սպասվում է, որ ${le(n.origin)} լինի ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Սխալ տող․ պետք է սկսվի "${r.prefix}"-ով`
                    : r.format === "ends_with"
                      ? `Սխալ տող․ պետք է ավարտվի "${r.suffix}"-ով`
                      : r.format === "includes"
                        ? `Սխալ տող․ պետք է պարունակի "${r.includes}"`
                        : r.format === "regex"
                          ? `Սխալ տող․ պետք է համապատասխանի ${r.pattern} ձևաչափին`
                          : `Սխալ ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${n.divisor}-ի`;
            case "unrecognized_keys":
                return `Չճանաչված բանալի${n.keys.length > 1 ? "ներ" : ""}. ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Սխալ բանալի ${le(n.origin)}-ում`;
            case "invalid_union":
                return "Սխալ մուտքագրում";
            case "invalid_element":
                return `Սխալ արժեք ${le(n.origin)}-ում`;
            default:
                return "Սխալ մուտքագրում";
        }
    };
};
function bm() {
    return { localeError: _m() };
}
const ym = () => {
    const e = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Input tidak valid: diharapkan instanceof ${n.expected}, diterima ${c}`
                    : `Input tidak valid: diharapkan ${r}, diterima ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Input tidak valid: diharapkan ${$(n.values[0])}`
                    : `Pilihan tidak valid: diharapkan salah satu dari ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${r}${n.maximum.toString()} ${a.unit ?? "elemen"}`
                    : `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${r}${n.minimum.toString()} ${a.unit}`
                    : `Terlalu kecil: diharapkan ${n.origin} menjadi ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `String tidak valid: harus dimulai dengan "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `String tidak valid: harus berakhir dengan "${r.suffix}"`
                      : r.format === "includes"
                        ? `String tidak valid: harus menyertakan "${r.includes}"`
                        : r.format === "regex"
                          ? `String tidak valid: harus sesuai pola ${r.pattern}`
                          : `${i[r.format] ?? n.format} tidak valid`;
            }
            case "not_multiple_of":
                return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak valid di ${n.origin}`;
            case "invalid_union":
                return "Input tidak valid";
            case "invalid_element":
                return `Nilai tidak valid di ${n.origin}`;
            default:
                return "Input tidak valid";
        }
    };
};
function km() {
    return { localeError: ym() };
}
const Sm = () => {
    const e = {
        string: { unit: "stafi", verb: "að hafa" },
        file: { unit: "bæti", verb: "að hafa" },
        array: { unit: "hluti", verb: "að hafa" },
        set: { unit: "hluti", verb: "að hafa" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "númer", array: "fylki" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Rangt gildi: Þú slóst inn ${c} þar sem á að vera instanceof ${n.expected}`
                    : `Rangt gildi: Þú slóst inn ${c} þar sem á að vera ${r}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Rangt gildi: gert ráð fyrir ${$(n.values[0])}`
                    : `Ógilt val: má vera eitt af eftirfarandi ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Of stórt: gert er ráð fyrir að ${n.origin ?? "gildi"} hafi ${r}${n.maximum.toString()} ${a.unit ?? "hluti"}`
                    : `Of stórt: gert er ráð fyrir að ${n.origin ?? "gildi"} sé ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Of lítið: gert er ráð fyrir að ${n.origin} hafi ${r}${n.minimum.toString()} ${a.unit}`
                    : `Of lítið: gert er ráð fyrir að ${n.origin} sé ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ógildur strengur: verður að byrja á "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Ógildur strengur: verður að enda á "${r.suffix}"`
                      : r.format === "includes"
                        ? `Ógildur strengur: verður að innihalda "${r.includes}"`
                        : r.format === "regex"
                          ? `Ógildur strengur: verður að fylgja mynstri ${r.pattern}`
                          : `Rangt ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Röng tala: verður að vera margfeldi af ${n.divisor}`;
            case "unrecognized_keys":
                return `Óþekkt ${n.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Rangur lykill í ${n.origin}`;
            case "invalid_union":
                return "Rangt gildi";
            case "invalid_element":
                return `Rangt gildi í ${n.origin}`;
            default:
                return "Rangt gildi";
        }
    };
};
function Im() {
    return { localeError: Sm() };
}
const zm = () => {
    const e = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "numero", array: "vettore" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Input non valido: atteso instanceof ${n.expected}, ricevuto ${c}`
                    : `Input non valido: atteso ${r}, ricevuto ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Input non valido: atteso ${$(n.values[0])}`
                    : `Opzione non valida: atteso uno tra ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Troppo grande: ${n.origin ?? "valore"} deve avere ${r}${n.maximum.toString()} ${a.unit ?? "elementi"}`
                    : `Troppo grande: ${n.origin ?? "valore"} deve essere ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Troppo piccolo: ${n.origin} deve avere ${r}${n.minimum.toString()} ${a.unit}`
                    : `Troppo piccolo: ${n.origin} deve essere ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Stringa non valida: deve iniziare con "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Stringa non valida: deve terminare con "${r.suffix}"`
                      : r.format === "includes"
                        ? `Stringa non valida: deve includere "${r.includes}"`
                        : r.format === "regex"
                          ? `Stringa non valida: deve corrispondere al pattern ${r.pattern}`
                          : `Invalid ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
            case "unrecognized_keys":
                return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Chiave non valida in ${n.origin}`;
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return `Valore non valido in ${n.origin}`;
            default:
                return "Input non valido";
        }
    };
};
function wm() {
    return { localeError: zm() };
}
const xm = () => {
    const e = {
        string: { unit: "文字", verb: "である" },
        file: { unit: "バイト", verb: "である" },
        array: { unit: "要素", verb: "である" },
        set: { unit: "要素", verb: "である" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "数値", array: "配列" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `無効な入力: instanceof ${n.expected}が期待されましたが、${c}が入力されました`
                    : `無効な入力: ${r}が期待されましたが、${c}が入力されました`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `無効な入力: ${$(n.values[0])}が期待されました`
                    : `無効な選択: ${p(n.values, "、")}のいずれかである必要があります`;
            case "too_big": {
                const r = n.inclusive ? "以下である" : "より小さい",
                    a = t(n.origin);
                return a
                    ? `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${a.unit ?? "要素"}${r}必要があります`
                    : `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${r}必要があります`;
            }
            case "too_small": {
                const r = n.inclusive ? "以上である" : "より大きい",
                    a = t(n.origin);
                return a
                    ? `小さすぎる値: ${n.origin}は${n.minimum.toString()}${a.unit}${r}必要があります`
                    : `小さすぎる値: ${n.origin}は${n.minimum.toString()}${r}必要があります`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `無効な文字列: "${r.prefix}"で始まる必要があります`
                    : r.format === "ends_with"
                      ? `無効な文字列: "${r.suffix}"で終わる必要があります`
                      : r.format === "includes"
                        ? `無効な文字列: "${r.includes}"を含む必要があります`
                        : r.format === "regex"
                          ? `無効な文字列: パターン${r.pattern}に一致する必要があります`
                          : `無効な${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `無効な数値: ${n.divisor}の倍数である必要があります`;
            case "unrecognized_keys":
                return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${p(n.keys, "、")}`;
            case "invalid_key":
                return `${n.origin}内の無効なキー`;
            case "invalid_union":
                return "無効な入力";
            case "invalid_element":
                return `${n.origin}内の無効な値`;
            default:
                return "無効な入力";
        }
    };
};
function Um() {
    return { localeError: xm() };
}
const jm = () => {
    const e = {
        string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
        file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
        array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
        set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            number: "რიცხვი",
            string: "სტრინგი",
            boolean: "ბულეანი",
            function: "ფუნქცია",
            array: "მასივი"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${n.expected}, მიღებული ${c}`
                    : `არასწორი შეყვანა: მოსალოდნელი ${r}, მიღებული ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `არასწორი შეყვანა: მოსალოდნელი ${$(n.values[0])}`
                    : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${p(n.values, "|")}-დან`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? "მნიშვნელობა"} ${a.verb} ${r}${n.maximum.toString()} ${a.unit}`
                    : `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? "მნიშვნელობა"} იყოს ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `ზედმეტად პატარა: მოსალოდნელი ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `ზედმეტად პატარა: მოსალოდნელი ${n.origin} იყოს ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `არასწორი სტრინგი: უნდა იწყებოდეს "${r.prefix}"-ით`
                    : r.format === "ends_with"
                      ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${r.suffix}"-ით`
                      : r.format === "includes"
                        ? `არასწორი სტრინგი: უნდა შეიცავდეს "${r.includes}"-ს`
                        : r.format === "regex"
                          ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${r.pattern}`
                          : `არასწორი ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `არასწორი რიცხვი: უნდა იყოს ${n.divisor}-ის ჯერადი`;
            case "unrecognized_keys":
                return `უცნობი გასაღებ${n.keys.length > 1 ? "ები" : "ი"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `არასწორი გასაღები ${n.origin}-ში`;
            case "invalid_union":
                return "არასწორი შეყვანა";
            case "invalid_element":
                return `არასწორი მნიშვნელობა ${n.origin}-ში`;
            default:
                return "არასწორი შეყვანა";
        }
    };
};
function Om() {
    return { localeError: jm() };
}
const Dm = () => {
    const e = {
        string: { unit: "តួអក្សរ", verb: "គួរមាន" },
        file: { unit: "បៃ", verb: "គួរមាន" },
        array: { unit: "ធាតុ", verb: "គួរមាន" },
        set: { unit: "ធាតុ", verb: "គួរមាន" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            number: "លេខ",
            array: "អារេ (Array)",
            null: "គ្មានតម្លៃ (null)"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${n.expected} ប៉ុន្តែទទួលបាន ${c}`
                    : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${r} ប៉ុន្តែទទួលបាន ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${$(n.values[0])}`
                    : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${r} ${n.maximum.toString()} ${a.unit ?? "ធាតុ"}`
                    : `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${r} ${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `តូចពេក៖ ត្រូវការ ${n.origin} ${r} ${n.minimum.toString()} ${a.unit}`
                    : `តូចពេក៖ ត្រូវការ ${n.origin} ${r} ${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${r.suffix}"`
                      : r.format === "includes"
                        ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${r.includes}"`
                        : r.format === "regex"
                          ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${r.pattern}`
                          : `មិនត្រឹមត្រូវ៖ ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
            case "unrecognized_keys":
                return `រកឃើញសោមិនស្គាល់៖ ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
            case "invalid_union":
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
            case "invalid_element":
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
            default:
                return "ទិន្នន័យមិនត្រឹមត្រូវ";
        }
    };
};
function yc() {
    return { localeError: Dm() };
}
function Nm() {
    return yc();
}
const Pm = () => {
    const e = {
        string: { unit: "문자", verb: "to have" },
        file: { unit: "바이트", verb: "to have" },
        array: { unit: "개", verb: "to have" },
        set: { unit: "개", verb: "to have" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `잘못된 입력: 예상 타입은 instanceof ${n.expected}, 받은 타입은 ${c}입니다`
                    : `잘못된 입력: 예상 타입은 ${r}, 받은 타입은 ${c}입니다`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `잘못된 입력: 값은 ${$(n.values[0])} 이어야 합니다`
                    : `잘못된 옵션: ${p(n.values, "또는 ")} 중 하나여야 합니다`;
            case "too_big": {
                const r = n.inclusive ? "이하" : "미만",
                    a = r === "미만" ? "이어야 합니다" : "여야 합니다",
                    c = t(n.origin),
                    l = c?.unit ?? "요소";
                return c
                    ? `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${l} ${r}${a}`
                    : `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${r}${a}`;
            }
            case "too_small": {
                const r = n.inclusive ? "이상" : "초과",
                    a = r === "이상" ? "이어야 합니다" : "여야 합니다",
                    c = t(n.origin),
                    l = c?.unit ?? "요소";
                return c
                    ? `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${l} ${r}${a}`
                    : `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${r}${a}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `잘못된 문자열: "${r.prefix}"(으)로 시작해야 합니다`
                    : r.format === "ends_with"
                      ? `잘못된 문자열: "${r.suffix}"(으)로 끝나야 합니다`
                      : r.format === "includes"
                        ? `잘못된 문자열: "${r.includes}"을(를) 포함해야 합니다`
                        : r.format === "regex"
                          ? `잘못된 문자열: 정규식 ${r.pattern} 패턴과 일치해야 합니다`
                          : `잘못된 ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
            case "unrecognized_keys":
                return `인식할 수 없는 키: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `잘못된 키: ${n.origin}`;
            case "invalid_union":
                return "잘못된 입력";
            case "invalid_element":
                return `잘못된 값: ${n.origin}`;
            default:
                return "잘못된 입력";
        }
    };
};
function Zm() {
    return { localeError: Pm() };
}
const ye = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Di(e) {
    const t = Math.abs(e),
        i = t % 10,
        o = t % 100;
    return (o >= 11 && o <= 19) || i === 0 ? "many" : i === 1 ? "one" : "few";
}
const Em = () => {
    const e = {
        string: {
            unit: { one: "simbolis", few: "simboliai", many: "simbolių" },
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
            unit: { one: "baitas", few: "baitai", many: "baitų" },
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
            unit: { one: "elementą", few: "elementus", many: "elementų" },
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
            unit: { one: "elementą", few: "elementus", many: "elementų" },
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
    function t(n, r, a, c) {
        const l = e[n] ?? null;
        return l === null
            ? l
            : {
                  unit: l.unit[r],
                  verb: l.verb[c][a ? "inclusive" : "notInclusive"]
              };
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            number: "skaičius",
            bigint: "sveikasis skaičius",
            string: "eilutė",
            boolean: "loginė reikšmė",
            undefined: "neapibrėžta reikšmė",
            function: "funkcija",
            symbol: "simbolis",
            array: "masyvas",
            object: "objektas",
            null: "nulinė reikšmė"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Gautas tipas ${c}, o tikėtasi - instanceof ${n.expected}`
                    : `Gautas tipas ${c}, o tikėtasi - ${r}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Privalo būti ${$(n.values[0])}`
                    : `Privalo būti vienas iš ${p(n.values, "|")} pasirinkimų`;
            case "too_big": {
                const r = o[n.origin] ?? n.origin,
                    a = t(
                        n.origin,
                        Di(Number(n.maximum)),
                        n.inclusive ?? !1,
                        "smaller"
                    );
                if (a?.verb)
                    return `${ye(r ?? n.origin ?? "reikšmė")} ${a.verb} ${n.maximum.toString()} ${a.unit ?? "elementų"}`;
                const c = n.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
                return `${ye(r ?? n.origin ?? "reikšmė")} turi būti ${c} ${n.maximum.toString()} ${a?.unit}`;
            }
            case "too_small": {
                const r = o[n.origin] ?? n.origin,
                    a = t(
                        n.origin,
                        Di(Number(n.minimum)),
                        n.inclusive ?? !1,
                        "bigger"
                    );
                if (a?.verb)
                    return `${ye(r ?? n.origin ?? "reikšmė")} ${a.verb} ${n.minimum.toString()} ${a.unit ?? "elementų"}`;
                const c = n.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
                return `${ye(r ?? n.origin ?? "reikšmė")} turi būti ${c} ${n.minimum.toString()} ${a?.unit}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Eilutė privalo prasidėti "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Eilutė privalo pasibaigti "${r.suffix}"`
                      : r.format === "includes"
                        ? `Eilutė privalo įtraukti "${r.includes}"`
                        : r.format === "regex"
                          ? `Eilutė privalo atitikti ${r.pattern}`
                          : `Neteisingas ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Skaičius privalo būti ${n.divisor} kartotinis.`;
            case "unrecognized_keys":
                return `Neatpažint${n.keys.length > 1 ? "i" : "as"} rakt${n.keys.length > 1 ? "ai" : "as"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return "Rastas klaidingas raktas";
            case "invalid_union":
                return "Klaidinga įvestis";
            case "invalid_element": {
                const r = o[n.origin] ?? n.origin;
                return `${ye(r ?? n.origin ?? "reikšmė")} turi klaidingą įvestį`;
            }
            default:
                return "Klaidinga įvestis";
        }
    };
};
function Tm() {
    return { localeError: Em() };
}
const Am = () => {
    const e = {
        string: { unit: "знаци", verb: "да имаат" },
        file: { unit: "бајти", verb: "да имаат" },
        array: { unit: "ставки", verb: "да имаат" },
        set: { unit: "ставки", verb: "да имаат" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "број", array: "низа" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Грешен внес: се очекува instanceof ${n.expected}, примено ${c}`
                    : `Грешен внес: се очекува ${r}, примено ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Invalid input: expected ${$(n.values[0])}`
                    : `Грешана опција: се очекува една ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Премногу голем: се очекува ${n.origin ?? "вредноста"} да има ${r}${n.maximum.toString()} ${a.unit ?? "елементи"}`
                    : `Премногу голем: се очекува ${n.origin ?? "вредноста"} да биде ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Премногу мал: се очекува ${n.origin} да има ${r}${n.minimum.toString()} ${a.unit}`
                    : `Премногу мал: се очекува ${n.origin} да биде ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Неважечка низа: мора да започнува со "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Неважечка низа: мора да завршува со "${r.suffix}"`
                      : r.format === "includes"
                        ? `Неважечка низа: мора да вклучува "${r.includes}"`
                        : r.format === "regex"
                          ? `Неважечка низа: мора да одгоара на патернот ${r.pattern}`
                          : `Invalid ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Грешен број: мора да биде делив со ${n.divisor}`;
            case "unrecognized_keys":
                return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Грешен клуч во ${n.origin}`;
            case "invalid_union":
                return "Грешен внес";
            case "invalid_element":
                return `Грешна вредност во ${n.origin}`;
            default:
                return "Грешен внес";
        }
    };
};
function Rm() {
    return { localeError: Am() };
}
const Lm = () => {
    const e = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "nombor" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Input tidak sah: dijangka instanceof ${n.expected}, diterima ${c}`
                    : `Input tidak sah: dijangka ${r}, diterima ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Input tidak sah: dijangka ${$(n.values[0])}`
                    : `Pilihan tidak sah: dijangka salah satu daripada ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? "elemen"}`
                    : `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Terlalu kecil: dijangka ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Terlalu kecil: dijangka ${n.origin} adalah ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `String tidak sah: mesti bermula dengan "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `String tidak sah: mesti berakhir dengan "${r.suffix}"`
                      : r.format === "includes"
                        ? `String tidak sah: mesti mengandungi "${r.includes}"`
                        : r.format === "regex"
                          ? `String tidak sah: mesti sepadan dengan corak ${r.pattern}`
                          : `${i[r.format] ?? n.format} tidak sah`;
            }
            case "not_multiple_of":
                return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak sah dalam ${n.origin}`;
            case "invalid_union":
                return "Input tidak sah";
            case "invalid_element":
                return `Nilai tidak sah dalam ${n.origin}`;
            default:
                return "Input tidak sah";
        }
    };
};
function Fm() {
    return { localeError: Lm() };
}
const Cm = () => {
    const e = {
        string: { unit: "tekens", verb: "heeft" },
        file: { unit: "bytes", verb: "heeft" },
        array: { unit: "elementen", verb: "heeft" },
        set: { unit: "elementen", verb: "heeft" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "getal" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Ongeldige invoer: verwacht instanceof ${n.expected}, ontving ${c}`
                    : `Ongeldige invoer: verwacht ${r}, ontving ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Ongeldige invoer: verwacht ${$(n.values[0])}`
                    : `Ongeldige optie: verwacht één van ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin),
                    c =
                        n.origin === "date"
                            ? "laat"
                            : n.origin === "string"
                              ? "lang"
                              : "groot";
                return a
                    ? `Te ${c}: verwacht dat ${n.origin ?? "waarde"} ${r}${n.maximum.toString()} ${a.unit ?? "elementen"} ${a.verb}`
                    : `Te ${c}: verwacht dat ${n.origin ?? "waarde"} ${r}${n.maximum.toString()} is`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin),
                    c =
                        n.origin === "date"
                            ? "vroeg"
                            : n.origin === "string"
                              ? "kort"
                              : "klein";
                return a
                    ? `Te ${c}: verwacht dat ${n.origin} ${r}${n.minimum.toString()} ${a.unit} ${a.verb}`
                    : `Te ${c}: verwacht dat ${n.origin} ${r}${n.minimum.toString()} is`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ongeldige tekst: moet met "${r.prefix}" beginnen`
                    : r.format === "ends_with"
                      ? `Ongeldige tekst: moet op "${r.suffix}" eindigen`
                      : r.format === "includes"
                        ? `Ongeldige tekst: moet "${r.includes}" bevatten`
                        : r.format === "regex"
                          ? `Ongeldige tekst: moet overeenkomen met patroon ${r.pattern}`
                          : `Ongeldig: ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
            case "unrecognized_keys":
                return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Ongeldige key in ${n.origin}`;
            case "invalid_union":
                return "Ongeldige invoer";
            case "invalid_element":
                return `Ongeldige waarde in ${n.origin}`;
            default:
                return "Ongeldige invoer";
        }
    };
};
function Jm() {
    return { localeError: Cm() };
}
const Mm = () => {
    const e = {
        string: { unit: "tegn", verb: "å ha" },
        file: { unit: "bytes", verb: "å ha" },
        array: { unit: "elementer", verb: "å inneholde" },
        set: { unit: "elementer", verb: "å inneholde" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "tall", array: "liste" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Ugyldig input: forventet instanceof ${n.expected}, fikk ${c}`
                    : `Ugyldig input: forventet ${r}, fikk ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Ugyldig verdi: forventet ${$(n.values[0])}`
                    : `Ugyldig valg: forventet en av ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `For stor(t): forventet ${n.origin ?? "value"} til å ha ${r}${n.maximum.toString()} ${a.unit ?? "elementer"}`
                    : `For stor(t): forventet ${n.origin ?? "value"} til å ha ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `For lite(n): forventet ${n.origin} til å ha ${r}${n.minimum.toString()} ${a.unit}`
                    : `For lite(n): forventet ${n.origin} til å ha ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ugyldig streng: må starte med "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Ugyldig streng: må ende med "${r.suffix}"`
                      : r.format === "includes"
                        ? `Ugyldig streng: må inneholde "${r.includes}"`
                        : r.format === "regex"
                          ? `Ugyldig streng: må matche mønsteret ${r.pattern}`
                          : `Ugyldig ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Ugyldig tall: må være et multiplum av ${n.divisor}`;
            case "unrecognized_keys":
                return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøkkel i ${n.origin}`;
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return `Ugyldig verdi i ${n.origin}`;
            default:
                return "Ugyldig input";
        }
    };
};
function Km() {
    return { localeError: Mm() };
}
const Vm = () => {
    const e = {
        string: { unit: "harf", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "unsur", verb: "olmalıdır" },
        set: { unit: "unsur", verb: "olmalıdır" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Fâsit giren: umulan instanceof ${n.expected}, alınan ${c}`
                    : `Fâsit giren: umulan ${r}, alınan ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Fâsit giren: umulan ${$(n.values[0])}`
                    : `Fâsit tercih: mûteberler ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Fazla büyük: ${n.origin ?? "value"}, ${r}${n.maximum.toString()} ${a.unit ?? "elements"} sahip olmalıydı.`
                    : `Fazla büyük: ${n.origin ?? "value"}, ${r}${n.maximum.toString()} olmalıydı.`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Fazla küçük: ${n.origin}, ${r}${n.minimum.toString()} ${a.unit} sahip olmalıydı.`
                    : `Fazla küçük: ${n.origin}, ${r}${n.minimum.toString()} olmalıydı.`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Fâsit metin: "${r.prefix}" ile başlamalı.`
                    : r.format === "ends_with"
                      ? `Fâsit metin: "${r.suffix}" ile bitmeli.`
                      : r.format === "includes"
                        ? `Fâsit metin: "${r.includes}" ihtivâ etmeli.`
                        : r.format === "regex"
                          ? `Fâsit metin: ${r.pattern} nakşına uymalı.`
                          : `Fâsit ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Fâsit sayı: ${n.divisor} katı olmalıydı.`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `${n.origin} için tanınmayan anahtar var.`;
            case "invalid_union":
                return "Giren tanınamadı.";
            case "invalid_element":
                return `${n.origin} için tanınmayan kıymet var.`;
            default:
                return "Kıymet tanınamadı.";
        }
    };
};
function Bm() {
    return { localeError: Vm() };
}
const Gm = () => {
    const e = {
        string: { unit: "توکي", verb: "ولري" },
        file: { unit: "بایټس", verb: "ولري" },
        array: { unit: "توکي", verb: "ولري" },
        set: { unit: "توکي", verb: "ولري" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "عدد", array: "ارې" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `ناسم ورودي: باید instanceof ${n.expected} وای, مګر ${c} ترلاسه شو`
                    : `ناسم ورودي: باید ${r} وای, مګر ${c} ترلاسه شو`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `ناسم ورودي: باید ${$(n.values[0])} وای`
                    : `ناسم انتخاب: باید یو له ${p(n.values, "|")} څخه وای`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${r}${n.maximum.toString()} ${a.unit ?? "عنصرونه"} ولري`
                    : `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${r}${n.maximum.toString()} وي`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `ډیر کوچنی: ${n.origin} باید ${r}${n.minimum.toString()} ${a.unit} ولري`
                    : `ډیر کوچنی: ${n.origin} باید ${r}${n.minimum.toString()} وي`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `ناسم متن: باید د "${r.prefix}" سره پیل شي`
                    : r.format === "ends_with"
                      ? `ناسم متن: باید د "${r.suffix}" سره پای ته ورسيږي`
                      : r.format === "includes"
                        ? `ناسم متن: باید "${r.includes}" ولري`
                        : r.format === "regex"
                          ? `ناسم متن: باید د ${r.pattern} سره مطابقت ولري`
                          : `${i[r.format] ?? n.format} ناسم دی`;
            }
            case "not_multiple_of":
                return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
            case "unrecognized_keys":
                return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `ناسم کلیډ په ${n.origin} کې`;
            case "invalid_union":
                return "ناسمه ورودي";
            case "invalid_element":
                return `ناسم عنصر په ${n.origin} کې`;
            default:
                return "ناسمه ورودي";
        }
    };
};
function Wm() {
    return { localeError: Gm() };
}
const qm = () => {
    const e = {
        string: { unit: "znaków", verb: "mieć" },
        file: { unit: "bajtów", verb: "mieć" },
        array: { unit: "elementów", verb: "mieć" },
        set: { unit: "elementów", verb: "mieć" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "liczba", array: "tablica" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${n.expected}, otrzymano ${c}`
                    : `Nieprawidłowe dane wejściowe: oczekiwano ${r}, otrzymano ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Nieprawidłowe dane wejściowe: oczekiwano ${$(n.values[0])}`
                    : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Za duża wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${r}${n.maximum.toString()} ${a.unit ?? "elementów"}`
                    : `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Za mała wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${r}${n.minimum.toString()} ${a.unit ?? "elementów"}`
                    : `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${r.suffix}"`
                      : r.format === "includes"
                        ? `Nieprawidłowy ciąg znaków: musi zawierać "${r.includes}"`
                        : r.format === "regex"
                          ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${r.pattern}`
                          : `Nieprawidłow(y/a/e) ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
            case "unrecognized_keys":
                return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Nieprawidłowy klucz w ${n.origin}`;
            case "invalid_union":
                return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
                return `Nieprawidłowa wartość w ${n.origin}`;
            default:
                return "Nieprawidłowe dane wejściowe";
        }
    };
};
function Xm() {
    return { localeError: qm() };
}
const Ym = () => {
    const e = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "número", null: "nulo" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Tipo inválido: esperado instanceof ${n.expected}, recebido ${c}`
                    : `Tipo inválido: esperado ${r}, recebido ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Entrada inválida: esperado ${$(n.values[0])}`
                    : `Opção inválida: esperada uma das ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Muito grande: esperado que ${n.origin ?? "valor"} tivesse ${r}${n.maximum.toString()} ${a.unit ?? "elementos"}`
                    : `Muito grande: esperado que ${n.origin ?? "valor"} fosse ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Muito pequeno: esperado que ${n.origin} tivesse ${r}${n.minimum.toString()} ${a.unit}`
                    : `Muito pequeno: esperado que ${n.origin} fosse ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Texto inválido: deve começar com "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Texto inválido: deve terminar com "${r.suffix}"`
                      : r.format === "includes"
                        ? `Texto inválido: deve incluir "${r.includes}"`
                        : r.format === "regex"
                          ? `Texto inválido: deve corresponder ao padrão ${r.pattern}`
                          : `${i[r.format] ?? n.format} inválido`;
            }
            case "not_multiple_of":
                return `Número inválido: deve ser múltiplo de ${n.divisor}`;
            case "unrecognized_keys":
                return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Chave inválida em ${n.origin}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido em ${n.origin}`;
            default:
                return "Campo inválido";
        }
    };
};
function Hm() {
    return { localeError: Ym() };
}
function Ni(e, t, i, o) {
    const n = Math.abs(e),
        r = n % 10,
        a = n % 100;
    return a >= 11 && a <= 19 ? o : r === 1 ? t : r >= 2 && r <= 4 ? i : o;
}
const Qm = () => {
    const e = {
        string: {
            unit: { one: "символ", few: "символа", many: "символов" },
            verb: "иметь"
        },
        file: {
            unit: { one: "байт", few: "байта", many: "байт" },
            verb: "иметь"
        },
        array: {
            unit: { one: "элемент", few: "элемента", many: "элементов" },
            verb: "иметь"
        },
        set: {
            unit: { one: "элемент", few: "элемента", many: "элементов" },
            verb: "иметь"
        }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "число", array: "массив" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Неверный ввод: ожидалось instanceof ${n.expected}, получено ${c}`
                    : `Неверный ввод: ожидалось ${r}, получено ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Неверный ввод: ожидалось ${$(n.values[0])}`
                    : `Неверный вариант: ожидалось одно из ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                if (a) {
                    const c = Number(n.maximum),
                        l = Ni(c, a.unit.one, a.unit.few, a.unit.many);
                    return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${r}${n.maximum.toString()} ${l}`;
                }
                return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                if (a) {
                    const c = Number(n.minimum),
                        l = Ni(c, a.unit.one, a.unit.few, a.unit.many);
                    return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${r}${n.minimum.toString()} ${l}`;
                }
                return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Неверная строка: должна начинаться с "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Неверная строка: должна заканчиваться на "${r.suffix}"`
                      : r.format === "includes"
                        ? `Неверная строка: должна содержать "${r.includes}"`
                        : r.format === "regex"
                          ? `Неверная строка: должна соответствовать шаблону ${r.pattern}`
                          : `Неверный ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Неверное число: должно быть кратным ${n.divisor}`;
            case "unrecognized_keys":
                return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Неверный ключ в ${n.origin}`;
            case "invalid_union":
                return "Неверные входные данные";
            case "invalid_element":
                return `Неверное значение в ${n.origin}`;
            default:
                return "Неверные входные данные";
        }
    };
};
function ef() {
    return { localeError: Qm() };
}
const nf = () => {
    const e = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "število", array: "tabela" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Neveljaven vnos: pričakovano instanceof ${n.expected}, prejeto ${c}`
                    : `Neveljaven vnos: pričakovano ${r}, prejeto ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Neveljaven vnos: pričakovano ${$(n.values[0])}`
                    : `Neveljavna možnost: pričakovano eno izmed ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} imelo ${r}${n.maximum.toString()} ${a.unit ?? "elementov"}`
                    : `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Premajhno: pričakovano, da bo ${n.origin} imelo ${r}${n.minimum.toString()} ${a.unit}`
                    : `Premajhno: pričakovano, da bo ${n.origin} ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Neveljaven niz: mora se začeti z "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Neveljaven niz: mora se končati z "${r.suffix}"`
                      : r.format === "includes"
                        ? `Neveljaven niz: mora vsebovati "${r.includes}"`
                        : r.format === "regex"
                          ? `Neveljaven niz: mora ustrezati vzorcu ${r.pattern}`
                          : `Neveljaven ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
            case "unrecognized_keys":
                return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Neveljaven ključ v ${n.origin}`;
            case "invalid_union":
                return "Neveljaven vnos";
            case "invalid_element":
                return `Neveljavna vrednost v ${n.origin}`;
            default:
                return "Neveljaven vnos";
        }
    };
};
function tf() {
    return { localeError: nf() };
}
const rf = () => {
    const e = {
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att innehålla" },
        set: { unit: "objekt", verb: "att innehålla" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "antal", array: "lista" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Ogiltig inmatning: förväntat instanceof ${n.expected}, fick ${c}`
                    : `Ogiltig inmatning: förväntat ${r}, fick ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Ogiltig inmatning: förväntat ${$(n.values[0])}`
                    : `Ogiltigt val: förväntade en av ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `För stor(t): förväntade ${n.origin ?? "värdet"} att ha ${r}${n.maximum.toString()} ${a.unit ?? "element"}`
                    : `För stor(t): förväntat ${n.origin ?? "värdet"} att ha ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${r}${n.minimum.toString()} ${a.unit}`
                    : `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ogiltig sträng: måste börja med "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Ogiltig sträng: måste sluta med "${r.suffix}"`
                      : r.format === "includes"
                        ? `Ogiltig sträng: måste innehålla "${r.includes}"`
                        : r.format === "regex"
                          ? `Ogiltig sträng: måste matcha mönstret "${r.pattern}"`
                          : `Ogiltig(t) ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`;
            case "unrecognized_keys":
                return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                return `Ogiltigt värde i ${n.origin ?? "värdet"}`;
            default:
                return "Ogiltig input";
        }
    };
};
function of() {
    return { localeError: rf() };
}
const af = () => {
    const e = {
        string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
        file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
        array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
        set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "எண்", array: "அணி", null: "வெறுமை" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${n.expected}, பெறப்பட்டது ${c}`
                    : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${r}, பெறப்பட்டது ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${$(n.values[0])}`
                    : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${p(n.values, "|")} இல் ஒன்று`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${r}${n.maximum.toString()} ${a.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
                    : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${r}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${r}${n.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்`
                    : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${r}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `தவறான சரம்: "${r.prefix}" இல் தொடங்க வேண்டும்`
                    : r.format === "ends_with"
                      ? `தவறான சரம்: "${r.suffix}" இல் முடிவடைய வேண்டும்`
                      : r.format === "includes"
                        ? `தவறான சரம்: "${r.includes}" ஐ உள்ளடக்க வேண்டும்`
                        : r.format === "regex"
                          ? `தவறான சரம்: ${r.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                          : `தவறான ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
            case "unrecognized_keys":
                return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `${n.origin} இல் தவறான விசை`;
            case "invalid_union":
                return "தவறான உள்ளீடு";
            case "invalid_element":
                return `${n.origin} இல் தவறான மதிப்பு`;
            default:
                return "தவறான உள்ளீடு";
        }
    };
};
function cf() {
    return { localeError: af() };
}
const uf = () => {
    const e = {
        string: { unit: "ตัวอักษร", verb: "ควรมี" },
        file: { unit: "ไบต์", verb: "ควรมี" },
        array: { unit: "รายการ", verb: "ควรมี" },
        set: { unit: "รายการ", verb: "ควรมี" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = {
            nan: "NaN",
            number: "ตัวเลข",
            array: "อาร์เรย์ (Array)",
            null: "ไม่มีค่า (null)"
        };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${n.expected} แต่ได้รับ ${c}`
                    : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${r} แต่ได้รับ ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `ค่าไม่ถูกต้อง: ควรเป็น ${$(n.values[0])}`
                    : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                    a = t(n.origin);
                return a
                    ? `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${r} ${n.maximum.toString()} ${a.unit ?? "รายการ"}`
                    : `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${r} ${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? "อย่างน้อย" : "มากกว่า",
                    a = t(n.origin);
                return a
                    ? `น้อยกว่ากำหนด: ${n.origin} ควรมี${r} ${n.minimum.toString()} ${a.unit}`
                    : `น้อยกว่ากำหนด: ${n.origin} ควรมี${r} ${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${r.suffix}"`
                      : r.format === "includes"
                        ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${r.includes}" อยู่ในข้อความ`
                        : r.format === "regex"
                          ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${r.pattern}`
                          : `รูปแบบไม่ถูกต้อง: ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
            case "unrecognized_keys":
                return `พบคีย์ที่ไม่รู้จัก: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `คีย์ไม่ถูกต้องใน ${n.origin}`;
            case "invalid_union":
                return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
                return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
            default:
                return "ข้อมูลไม่ถูกต้อง";
        }
    };
};
function lf() {
    return { localeError: uf() };
}
const sf = () => {
    const e = {
        string: { unit: "karakter", verb: "olmalı" },
        file: { unit: "bayt", verb: "olmalı" },
        array: { unit: "öğe", verb: "olmalı" },
        set: { unit: "öğe", verb: "olmalı" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Geçersiz değer: beklenen instanceof ${n.expected}, alınan ${c}`
                    : `Geçersiz değer: beklenen ${r}, alınan ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Geçersiz değer: beklenen ${$(n.values[0])}`
                    : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Çok büyük: beklenen ${n.origin ?? "değer"} ${r}${n.maximum.toString()} ${a.unit ?? "öğe"}`
                    : `Çok büyük: beklenen ${n.origin ?? "değer"} ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Çok küçük: beklenen ${n.origin} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Çok küçük: beklenen ${n.origin} ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Geçersiz metin: "${r.prefix}" ile başlamalı`
                    : r.format === "ends_with"
                      ? `Geçersiz metin: "${r.suffix}" ile bitmeli`
                      : r.format === "includes"
                        ? `Geçersiz metin: "${r.includes}" içermeli`
                        : r.format === "regex"
                          ? `Geçersiz metin: ${r.pattern} desenine uymalı`
                          : `Geçersiz ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Geçersiz sayı: ${n.divisor} ile tam bölünebilmeli`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar${n.keys.length > 1 ? "lar" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `${n.origin} içinde geçersiz anahtar`;
            case "invalid_union":
                return "Geçersiz değer";
            case "invalid_element":
                return `${n.origin} içinde geçersiz değer`;
            default:
                return "Geçersiz değer";
        }
    };
};
function df() {
    return { localeError: sf() };
}
const mf = () => {
    const e = {
        string: { unit: "символів", verb: "матиме" },
        file: { unit: "байтів", verb: "матиме" },
        array: { unit: "елементів", verb: "матиме" },
        set: { unit: "елементів", verb: "матиме" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "число", array: "масив" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Неправильні вхідні дані: очікується instanceof ${n.expected}, отримано ${c}`
                    : `Неправильні вхідні дані: очікується ${r}, отримано ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Неправильні вхідні дані: очікується ${$(n.values[0])}`
                    : `Неправильна опція: очікується одне з ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Занадто велике: очікується, що ${n.origin ?? "значення"} ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? "елементів"}`
                    : `Занадто велике: очікується, що ${n.origin ?? "значення"} буде ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Занадто мале: очікується, що ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Занадто мале: очікується, що ${n.origin} буде ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Неправильний рядок: повинен починатися з "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Неправильний рядок: повинен закінчуватися на "${r.suffix}"`
                      : r.format === "includes"
                        ? `Неправильний рядок: повинен містити "${r.includes}"`
                        : r.format === "regex"
                          ? `Неправильний рядок: повинен відповідати шаблону ${r.pattern}`
                          : `Неправильний ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Неправильне число: повинно бути кратним ${n.divisor}`;
            case "unrecognized_keys":
                return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Неправильний ключ у ${n.origin}`;
            case "invalid_union":
                return "Неправильні вхідні дані";
            case "invalid_element":
                return `Неправильне значення у ${n.origin}`;
            default:
                return "Неправильні вхідні дані";
        }
    };
};
function kc() {
    return { localeError: mf() };
}
function ff() {
    return kc();
}
const pf = () => {
    const e = {
        string: { unit: "حروف", verb: "ہونا" },
        file: { unit: "بائٹس", verb: "ہونا" },
        array: { unit: "آئٹمز", verb: "ہونا" },
        set: { unit: "آئٹمز", verb: "ہونا" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `غلط ان پٹ: instanceof ${n.expected} متوقع تھا، ${c} موصول ہوا`
                    : `غلط ان پٹ: ${r} متوقع تھا، ${c} موصول ہوا`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `غلط ان پٹ: ${$(n.values[0])} متوقع تھا`
                    : `غلط آپشن: ${p(n.values, "|")} میں سے ایک متوقع تھا`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `بہت بڑا: ${n.origin ?? "ویلیو"} کے ${r}${n.maximum.toString()} ${a.unit ?? "عناصر"} ہونے متوقع تھے`
                    : `بہت بڑا: ${n.origin ?? "ویلیو"} کا ${r}${n.maximum.toString()} ہونا متوقع تھا`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `بہت چھوٹا: ${n.origin} کے ${r}${n.minimum.toString()} ${a.unit} ہونے متوقع تھے`
                    : `بہت چھوٹا: ${n.origin} کا ${r}${n.minimum.toString()} ہونا متوقع تھا`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `غلط سٹرنگ: "${r.prefix}" سے شروع ہونا چاہیے`
                    : r.format === "ends_with"
                      ? `غلط سٹرنگ: "${r.suffix}" پر ختم ہونا چاہیے`
                      : r.format === "includes"
                        ? `غلط سٹرنگ: "${r.includes}" شامل ہونا چاہیے`
                        : r.format === "regex"
                          ? `غلط سٹرنگ: پیٹرن ${r.pattern} سے میچ ہونا چاہیے`
                          : `غلط ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
            case "unrecognized_keys":
                return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${p(n.keys, "، ")}`;
            case "invalid_key":
                return `${n.origin} میں غلط کی`;
            case "invalid_union":
                return "غلط ان پٹ";
            case "invalid_element":
                return `${n.origin} میں غلط ویلیو`;
            default:
                return "غلط ان پٹ";
        }
    };
};
function vf() {
    return { localeError: pf() };
}
const gf = () => {
    const e = {
        string: { unit: "belgi", verb: "bo‘lishi kerak" },
        file: { unit: "bayt", verb: "bo‘lishi kerak" },
        array: { unit: "element", verb: "bo‘lishi kerak" },
        set: { unit: "element", verb: "bo‘lishi kerak" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
            regex: "kirish",
            email: "elektron pochta manzili",
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
            datetime: "ISO sana va vaqti",
            date: "ISO sana",
            time: "ISO vaqt",
            duration: "ISO davomiylik",
            ipv4: "IPv4 manzil",
            ipv6: "IPv6 manzil",
            mac: "MAC manzil",
            cidrv4: "IPv4 diapazon",
            cidrv6: "IPv6 diapazon",
            base64: "base64 kodlangan satr",
            base64url: "base64url kodlangan satr",
            json_string: "JSON satr",
            e164: "E.164 raqam",
            jwt: "JWT",
            template_literal: "kirish"
        },
        o = { nan: "NaN", number: "raqam", array: "massiv" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Noto‘g‘ri kirish: kutilgan instanceof ${n.expected}, qabul qilingan ${c}`
                    : `Noto‘g‘ri kirish: kutilgan ${r}, qabul qilingan ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Noto‘g‘ri kirish: kutilgan ${$(n.values[0])}`
                    : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${r}${n.maximum.toString()} ${a.unit} ${a.verb}`
                    : `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Juda kichik: kutilgan ${n.origin} ${r}${n.minimum.toString()} ${a.unit} ${a.verb}`
                    : `Juda kichik: kutilgan ${n.origin} ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Noto‘g‘ri satr: "${r.prefix}" bilan boshlanishi kerak`
                    : r.format === "ends_with"
                      ? `Noto‘g‘ri satr: "${r.suffix}" bilan tugashi kerak`
                      : r.format === "includes"
                        ? `Noto‘g‘ri satr: "${r.includes}" ni o‘z ichiga olishi kerak`
                        : r.format === "regex"
                          ? `Noto‘g‘ri satr: ${r.pattern} shabloniga mos kelishi kerak`
                          : `Noto‘g‘ri ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Noto‘g‘ri raqam: ${n.divisor} ning karralisi bo‘lishi kerak`;
            case "unrecognized_keys":
                return `Noma’lum kalit${n.keys.length > 1 ? "lar" : ""}: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `${n.origin} dagi kalit noto‘g‘ri`;
            case "invalid_union":
                return "Noto‘g‘ri kirish";
            case "invalid_element":
                return `${n.origin} da noto‘g‘ri qiymat`;
            default:
                return "Noto‘g‘ri kirish";
        }
    };
};
function hf() {
    return { localeError: gf() };
}
const $f = () => {
    const e = {
        string: { unit: "ký tự", verb: "có" },
        file: { unit: "byte", verb: "có" },
        array: { unit: "phần tử", verb: "có" },
        set: { unit: "phần tử", verb: "có" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "số", array: "mảng" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Đầu vào không hợp lệ: mong đợi instanceof ${n.expected}, nhận được ${c}`
                    : `Đầu vào không hợp lệ: mong đợi ${r}, nhận được ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Đầu vào không hợp lệ: mong đợi ${$(n.values[0])}`
                    : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? "phần tử"}`
                    : `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Quá nhỏ: mong đợi ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Quá nhỏ: mong đợi ${n.origin} ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Chuỗi không hợp lệ: phải kết thúc bằng "${r.suffix}"`
                      : r.format === "includes"
                        ? `Chuỗi không hợp lệ: phải bao gồm "${r.includes}"`
                        : r.format === "regex"
                          ? `Chuỗi không hợp lệ: phải khớp với mẫu ${r.pattern}`
                          : `${i[r.format] ?? n.format} không hợp lệ`;
            }
            case "not_multiple_of":
                return `Số không hợp lệ: phải là bội số của ${n.divisor}`;
            case "unrecognized_keys":
                return `Khóa không được nhận dạng: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Khóa không hợp lệ trong ${n.origin}`;
            case "invalid_union":
                return "Đầu vào không hợp lệ";
            case "invalid_element":
                return `Giá trị không hợp lệ trong ${n.origin}`;
            default:
                return "Đầu vào không hợp lệ";
        }
    };
};
function _f() {
    return { localeError: $f() };
}
const bf = () => {
    const e = {
        string: { unit: "字符", verb: "包含" },
        file: { unit: "字节", verb: "包含" },
        array: { unit: "项", verb: "包含" },
        set: { unit: "项", verb: "包含" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "数字", array: "数组", null: "空值(null)" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `无效输入：期望 instanceof ${n.expected}，实际接收 ${c}`
                    : `无效输入：期望 ${r}，实际接收 ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `无效输入：期望 ${$(n.values[0])}`
                    : `无效选项：期望以下之一 ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `数值过大：期望 ${n.origin ?? "值"} ${r}${n.maximum.toString()} ${a.unit ?? "个元素"}`
                    : `数值过大：期望 ${n.origin ?? "值"} ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `数值过小：期望 ${n.origin} ${r}${n.minimum.toString()} ${a.unit}`
                    : `数值过小：期望 ${n.origin} ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `无效字符串：必须以 "${r.prefix}" 开头`
                    : r.format === "ends_with"
                      ? `无效字符串：必须以 "${r.suffix}" 结尾`
                      : r.format === "includes"
                        ? `无效字符串：必须包含 "${r.includes}"`
                        : r.format === "regex"
                          ? `无效字符串：必须满足正则表达式 ${r.pattern}`
                          : `无效${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `无效数字：必须是 ${n.divisor} 的倍数`;
            case "unrecognized_keys":
                return `出现未知的键(key): ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `${n.origin} 中的键(key)无效`;
            case "invalid_union":
                return "无效输入";
            case "invalid_element":
                return `${n.origin} 中包含无效值(value)`;
            default:
                return "无效输入";
        }
    };
};
function yf() {
    return { localeError: bf() };
}
const kf = () => {
    const e = {
        string: { unit: "字元", verb: "擁有" },
        file: { unit: "位元組", verb: "擁有" },
        array: { unit: "項目", verb: "擁有" },
        set: { unit: "項目", verb: "擁有" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `無效的輸入值：預期為 instanceof ${n.expected}，但收到 ${c}`
                    : `無效的輸入值：預期為 ${r}，但收到 ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `無效的輸入值：預期為 ${$(n.values[0])}`
                    : `無效的選項：預期為以下其中之一 ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `數值過大：預期 ${n.origin ?? "值"} 應為 ${r}${n.maximum.toString()} ${a.unit ?? "個元素"}`
                    : `數值過大：預期 ${n.origin ?? "值"} 應為 ${r}${n.maximum.toString()}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `數值過小：預期 ${n.origin} 應為 ${r}${n.minimum.toString()} ${a.unit}`
                    : `數值過小：預期 ${n.origin} 應為 ${r}${n.minimum.toString()}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `無效的字串：必須以 "${r.prefix}" 開頭`
                    : r.format === "ends_with"
                      ? `無效的字串：必須以 "${r.suffix}" 結尾`
                      : r.format === "includes"
                        ? `無效的字串：必須包含 "${r.includes}"`
                        : r.format === "regex"
                          ? `無效的字串：必須符合格式 ${r.pattern}`
                          : `無效的 ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `無效的數字：必須為 ${n.divisor} 的倍數`;
            case "unrecognized_keys":
                return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${p(n.keys, "、")}`;
            case "invalid_key":
                return `${n.origin} 中有無效的鍵值`;
            case "invalid_union":
                return "無效的輸入值";
            case "invalid_element":
                return `${n.origin} 中有無效的值`;
            default:
                return "無效的輸入值";
        }
    };
};
function Sf() {
    return { localeError: kf() };
}
const If = () => {
    const e = {
        string: { unit: "àmi", verb: "ní" },
        file: { unit: "bytes", verb: "ní" },
        array: { unit: "nkan", verb: "ní" },
        set: { unit: "nkan", verb: "ní" }
    };
    function t(n) {
        return e[n] ?? null;
    }
    const i = {
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
        },
        o = { nan: "NaN", number: "nọ́mbà", array: "akopọ" };
    return (n) => {
        switch (n.code) {
            case "invalid_type": {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a;
                return /^[A-Z]/.test(n.expected)
                    ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${n.expected}, àmọ̀ a rí ${c}`
                    : `Ìbáwọlé aṣìṣe: a ní láti fi ${r}, àmọ̀ a rí ${c}`;
            }
            case "invalid_value":
                return n.values.length === 1
                    ? `Ìbáwọlé aṣìṣe: a ní láti fi ${$(n.values[0])}`
                    : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${p(n.values, "|")}`;
            case "too_big": {
                const r = n.inclusive ? "<=" : "<",
                    a = t(n.origin);
                return a
                    ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${n.origin ?? "iye"} ${a.verb} ${r}${n.maximum} ${a.unit}`
                    : `Tó pọ̀ jù: a ní láti jẹ́ ${r}${n.maximum}`;
            }
            case "too_small": {
                const r = n.inclusive ? ">=" : ">",
                    a = t(n.origin);
                return a
                    ? `Kéré ju: a ní láti jẹ́ pé ${n.origin} ${a.verb} ${r}${n.minimum} ${a.unit}`
                    : `Kéré ju: a ní láti jẹ́ ${r}${n.minimum}`;
            }
            case "invalid_format": {
                const r = n;
                return r.format === "starts_with"
                    ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${r.prefix}"`
                    : r.format === "ends_with"
                      ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${r.suffix}"`
                      : r.format === "includes"
                        ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${r.includes}"`
                        : r.format === "regex"
                          ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${r.pattern}`
                          : `Aṣìṣe: ${i[r.format] ?? n.format}`;
            }
            case "not_multiple_of":
                return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`;
            case "unrecognized_keys":
                return `Bọtìnì àìmọ̀: ${p(n.keys, ", ")}`;
            case "invalid_key":
                return `Bọtìnì aṣìṣe nínú ${n.origin}`;
            case "invalid_union":
                return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
                return `Iye aṣìṣe nínú ${n.origin}`;
            default:
                return "Ìbáwọlé aṣìṣe";
        }
    };
};
function zf() {
    return { localeError: If() };
}
const Sc = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            ar: Cd,
            az: Md,
            be: Vd,
            bg: Gd,
            ca: qd,
            cs: Yd,
            da: Qd,
            de: nm,
            en: bc,
            eo: im,
            es: am,
            fa: um,
            fi: sm,
            fr: mm,
            frCA: pm,
            he: gm,
            hu: $m,
            hy: bm,
            id: km,
            is: Im,
            it: wm,
            ja: Um,
            ka: Om,
            kh: Nm,
            km: yc,
            ko: Zm,
            lt: Tm,
            mk: Rm,
            ms: Fm,
            nl: Jm,
            no: Km,
            ota: Bm,
            pl: Xm,
            ps: Wm,
            pt: Hm,
            ru: ef,
            sl: tf,
            sv: of,
            ta: cf,
            th: lf,
            tr: df,
            ua: ff,
            uk: kc,
            ur: vf,
            uz: hf,
            vi: _f,
            yo: zf,
            zhCN: yf,
            zhTW: Sf
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
var Pi;
const Ic = Symbol("ZodOutput"),
    zc = Symbol("ZodInput");
class wc {
    constructor() {
        ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(t, ...i) {
        const o = i[0];
        return (
            this._map.set(t, o),
            o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t),
            this
        );
    }
    clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(t) {
        const i = this._map.get(t);
        return (
            i && typeof i == "object" && "id" in i && this._idmap.delete(i.id),
            this._map.delete(t),
            this
        );
    }
    get(t) {
        const i = t._zod.parent;
        if (i) {
            const o = { ...(this.get(i) ?? {}) };
            delete o.id;
            const n = { ...o, ...this._map.get(t) };
            return Object.keys(n).length ? n : void 0;
        }
        return this._map.get(t);
    }
    has(t) {
        return this._map.has(t);
    }
}
function Kt() {
    return new wc();
}
(Pi = globalThis).__zod_globalRegistry ?? (Pi.__zod_globalRegistry = Kt());
const L = globalThis.__zod_globalRegistry;
function xc(e, t) {
    return new e({ type: "string", ...f(t) });
}
function Uc(e, t) {
    return new e({ type: "string", coerce: !0, ...f(t) });
}
function Vt(e, t) {
    return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function dn(e, t) {
    return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function Bt(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function Gt(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...f(t)
    });
}
function Wt(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...f(t)
    });
}
function qt(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...f(t)
    });
}
function Sn(e, t) {
    return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function Xt(e, t) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function Yt(e, t) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function Ht(e, t) {
    return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function Qt(e, t) {
    return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function er(e, t) {
    return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function nr(e, t) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function tr(e, t) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function rr(e, t) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function ir(e, t) {
    return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function jc(e, t) {
    return new e({
        type: "string",
        format: "mac",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function or(e, t) {
    return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function ar(e, t) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function cr(e, t) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function ur(e, t) {
    return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function lr(e, t) {
    return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
function sr(e, t) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...f(t)
    });
}
const Oc = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function Dc(e, t) {
    return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...f(t)
    });
}
function Nc(e, t) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...f(t)
    });
}
function Pc(e, t) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...f(t)
    });
}
function Zc(e, t) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...f(t)
    });
}
function Ec(e, t) {
    return new e({ type: "number", checks: [], ...f(t) });
}
function Tc(e, t) {
    return new e({ type: "number", coerce: !0, checks: [], ...f(t) });
}
function Ac(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...f(t)
    });
}
function Rc(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "float32",
        ...f(t)
    });
}
function Lc(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "float64",
        ...f(t)
    });
}
function Fc(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "int32",
        ...f(t)
    });
}
function Cc(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "uint32",
        ...f(t)
    });
}
function Jc(e, t) {
    return new e({ type: "boolean", ...f(t) });
}
function Mc(e, t) {
    return new e({ type: "boolean", coerce: !0, ...f(t) });
}
function Kc(e, t) {
    return new e({ type: "bigint", ...f(t) });
}
function Vc(e, t) {
    return new e({ type: "bigint", coerce: !0, ...f(t) });
}
function Bc(e, t) {
    return new e({
        type: "bigint",
        check: "bigint_format",
        abort: !1,
        format: "int64",
        ...f(t)
    });
}
function Gc(e, t) {
    return new e({
        type: "bigint",
        check: "bigint_format",
        abort: !1,
        format: "uint64",
        ...f(t)
    });
}
function Wc(e, t) {
    return new e({ type: "symbol", ...f(t) });
}
function qc(e, t) {
    return new e({ type: "undefined", ...f(t) });
}
function Xc(e, t) {
    return new e({ type: "null", ...f(t) });
}
function Yc(e) {
    return new e({ type: "any" });
}
function Hc(e) {
    return new e({ type: "unknown" });
}
function Qc(e, t) {
    return new e({ type: "never", ...f(t) });
}
function eu(e, t) {
    return new e({ type: "void", ...f(t) });
}
function nu(e, t) {
    return new e({ type: "date", ...f(t) });
}
function tu(e, t) {
    return new e({ type: "date", coerce: !0, ...f(t) });
}
function ru(e, t) {
    return new e({ type: "nan", ...f(t) });
}
function H(e, t) {
    return new Et({ check: "less_than", ...f(t), value: e, inclusive: !1 });
}
function F(e, t) {
    return new Et({ check: "less_than", ...f(t), value: e, inclusive: !0 });
}
function Q(e, t) {
    return new Tt({ check: "greater_than", ...f(t), value: e, inclusive: !1 });
}
function Z(e, t) {
    return new Tt({ check: "greater_than", ...f(t), value: e, inclusive: !0 });
}
function dr(e) {
    return Q(0, e);
}
function mr(e) {
    return H(0, e);
}
function fr(e) {
    return F(0, e);
}
function pr(e) {
    return Z(0, e);
}
function fe(e, t) {
    return new Co({ check: "multiple_of", ...f(t), value: e });
}
function $e(e, t) {
    return new Ko({ check: "max_size", ...f(t), maximum: e });
}
function ee(e, t) {
    return new Vo({ check: "min_size", ...f(t), minimum: e });
}
function Ce(e, t) {
    return new Bo({ check: "size_equals", ...f(t), size: e });
}
function Je(e, t) {
    return new Go({ check: "max_length", ...f(t), maximum: e });
}
function oe(e, t) {
    return new Wo({ check: "min_length", ...f(t), minimum: e });
}
function Me(e, t) {
    return new qo({ check: "length_equals", ...f(t), length: e });
}
function In(e, t) {
    return new Xo({
        check: "string_format",
        format: "regex",
        ...f(t),
        pattern: e
    });
}
function zn(e) {
    return new Yo({ check: "string_format", format: "lowercase", ...f(e) });
}
function wn(e) {
    return new Ho({ check: "string_format", format: "uppercase", ...f(e) });
}
function xn(e, t) {
    return new Qo({
        check: "string_format",
        format: "includes",
        ...f(t),
        includes: e
    });
}
function Un(e, t) {
    return new ea({
        check: "string_format",
        format: "starts_with",
        ...f(t),
        prefix: e
    });
}
function jn(e, t) {
    return new na({
        check: "string_format",
        format: "ends_with",
        ...f(t),
        suffix: e
    });
}
function vr(e, t, i) {
    return new ta({ check: "property", property: e, schema: t, ...f(i) });
}
function On(e, t) {
    return new ra({ check: "mime_type", mime: e, ...f(t) });
}
function X(e) {
    return new ia({ check: "overwrite", tx: e });
}
function Dn(e) {
    return X((t) => t.normalize(e));
}
function Nn() {
    return X((e) => e.trim());
}
function Pn() {
    return X((e) => e.toLowerCase());
}
function Zn() {
    return X((e) => e.toUpperCase());
}
function En() {
    return X((e) => Ai(e));
}
function iu(e, t, i) {
    return new e({ type: "array", element: t, ...f(i) });
}
function wf(e, t, i) {
    return new e({ type: "union", options: t, ...f(i) });
}
function xf(e, t, i) {
    return new e({ type: "union", options: t, inclusive: !1, ...f(i) });
}
function Uf(e, t, i, o) {
    return new e({ type: "union", options: i, discriminator: t, ...f(o) });
}
function jf(e, t, i) {
    return new e({ type: "intersection", left: t, right: i });
}
function Of(e, t, i, o) {
    const n = i instanceof b,
        r = n ? o : i,
        a = n ? i : null;
    return new e({ type: "tuple", items: t, rest: a, ...f(r) });
}
function Df(e, t, i, o) {
    return new e({ type: "record", keyType: t, valueType: i, ...f(o) });
}
function Nf(e, t, i, o) {
    return new e({ type: "map", keyType: t, valueType: i, ...f(o) });
}
function Pf(e, t, i) {
    return new e({ type: "set", valueType: t, ...f(i) });
}
function Zf(e, t, i) {
    const o = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
    return new e({ type: "enum", entries: o, ...f(i) });
}
function Ef(e, t, i) {
    return new e({ type: "enum", entries: t, ...f(i) });
}
function Tf(e, t, i) {
    return new e({
        type: "literal",
        values: Array.isArray(t) ? t : [t],
        ...f(i)
    });
}
function ou(e, t) {
    return new e({ type: "file", ...f(t) });
}
function Af(e, t) {
    return new e({ type: "transform", transform: t });
}
function Rf(e, t) {
    return new e({ type: "optional", innerType: t });
}
function Lf(e, t) {
    return new e({ type: "nullable", innerType: t });
}
function Ff(e, t, i) {
    return new e({
        type: "default",
        innerType: t,
        get defaultValue() {
            return typeof i == "function" ? i() : _n(i);
        }
    });
}
function Cf(e, t, i) {
    return new e({ type: "nonoptional", innerType: t, ...f(i) });
}
function Jf(e, t) {
    return new e({ type: "success", innerType: t });
}
function Mf(e, t, i) {
    return new e({
        type: "catch",
        innerType: t,
        catchValue: typeof i == "function" ? i : () => i
    });
}
function Kf(e, t, i) {
    return new e({ type: "pipe", in: t, out: i });
}
function Vf(e, t) {
    return new e({ type: "readonly", innerType: t });
}
function Bf(e, t, i) {
    return new e({ type: "template_literal", parts: t, ...f(i) });
}
function Gf(e, t) {
    return new e({ type: "lazy", getter: t });
}
function Wf(e, t) {
    return new e({ type: "promise", innerType: t });
}
function au(e, t, i) {
    const o = f(i);
    return (
        o.abort ?? (o.abort = !0),
        new e({ type: "custom", check: "custom", fn: t, ...o })
    );
}
function cu(e, t, i) {
    return new e({ type: "custom", check: "custom", fn: t, ...f(i) });
}
function uu(e) {
    const t = lu(
        (i) => (
            (i.addIssue = (o) => {
                if (typeof o == "string")
                    i.issues.push(de(o, i.value, t._zod.def));
                else {
                    const n = o;
                    (n.fatal && (n.continue = !1),
                        n.code ?? (n.code = "custom"),
                        n.input ?? (n.input = i.value),
                        n.inst ?? (n.inst = t),
                        n.continue ?? (n.continue = !t._zod.def.abort),
                        i.issues.push(de(n)));
                }
            }),
            e(i.value, i)
        )
    );
    return t;
}
function lu(e, t) {
    const i = new j({ check: "custom", ...f(t) });
    return ((i._zod.check = e), i);
}
function su(e) {
    const t = new j({ check: "describe" });
    return (
        (t._zod.onattach = [
            (i) => {
                const o = L.get(i) ?? {};
                L.add(i, { ...o, description: e });
            }
        ]),
        (t._zod.check = () => {}),
        t
    );
}
function du(e) {
    const t = new j({ check: "meta" });
    return (
        (t._zod.onattach = [
            (i) => {
                const o = L.get(i) ?? {};
                L.add(i, { ...o, ...e });
            }
        ]),
        (t._zod.check = () => {}),
        t
    );
}
function mu(e, t) {
    const i = f(t);
    let o = i.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
        n = i.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    i.case !== "sensitive" &&
        ((o = o.map((g) => (typeof g == "string" ? g.toLowerCase() : g))),
        (n = n.map((g) => (typeof g == "string" ? g.toLowerCase() : g))));
    const r = new Set(o),
        a = new Set(n),
        c = e.Codec ?? Mt,
        l = e.Boolean ?? Lt,
        u = e.String ?? Fe,
        d = new u({ type: "string", error: i.error }),
        m = new l({ type: "boolean", error: i.error }),
        v = new c({
            type: "pipe",
            in: d,
            out: m,
            transform: (g, S) => {
                let I = g;
                return (
                    i.case !== "sensitive" && (I = I.toLowerCase()),
                    r.has(I)
                        ? !0
                        : a.has(I)
                          ? !1
                          : (S.issues.push({
                                code: "invalid_value",
                                expected: "stringbool",
                                values: [...r, ...a],
                                input: S.value,
                                inst: v,
                                continue: !1
                            }),
                            {})
                );
            },
            reverseTransform: (g, S) =>
                g === !0 ? o[0] || "true" : n[0] || "false",
            error: i.error
        });
    return v;
}
function Ke(e, t, i, o = {}) {
    const n = f(o),
        r = {
            ...f(o),
            check: "string_format",
            type: "string",
            format: t,
            fn: typeof i == "function" ? i : (c) => i.test(c),
            ...n
        };
    return (i instanceof RegExp && (r.pattern = i), new e(r));
}
function pe(e) {
    let t = e?.target ?? "draft-2020-12";
    return (
        t === "draft-4" && (t = "draft-04"),
        t === "draft-7" && (t = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? L,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0
        }
    );
}
function w(e, t, i = { path: [], schemaPath: [] }) {
    var o;
    const n = e._zod.def,
        r = t.seen.get(e);
    if (r)
        return (
            r.count++,
            i.schemaPath.includes(e) && (r.cycle = i.path),
            r.schema
        );
    const a = { schema: {}, count: 1, cycle: void 0, path: i.path };
    t.seen.set(e, a);
    const c = e._zod.toJSONSchema?.();
    if (c) a.schema = c;
    else {
        const d = { ...i, schemaPath: [...i.schemaPath, e], path: i.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, d);
        else {
            const v = a.schema,
                g = t.processors[n.type];
            if (!g)
                throw new Error(
                    `[toJSONSchema]: Non-representable type encountered: ${n.type}`
                );
            g(e, t, v, d);
        }
        const m = e._zod.parent;
        m && (a.ref || (a.ref = m), w(m, t, d), (t.seen.get(m).isParent = !0));
    }
    const l = t.metadataRegistry.get(e);
    return (
        l && Object.assign(a.schema, l),
        t.io === "input" &&
            P(e) &&
            (delete a.schema.examples, delete a.schema.default),
        t.io === "input" &&
            a.schema._prefault &&
            ((o = a.schema).default ?? (o.default = a.schema._prefault)),
        delete a.schema._prefault,
        t.seen.get(e).schema
    );
}
function ve(e, t) {
    const i = e.seen.get(t);
    if (!i) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const o = new Map();
    for (const a of e.seen.entries()) {
        const c = e.metadataRegistry.get(a[0])?.id;
        if (c) {
            const l = o.get(c);
            if (l && l !== a[0])
                throw new Error(
                    `Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
                );
            o.set(c, a[0]);
        }
    }
    const n = (a) => {
            const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
            if (e.external) {
                const m = e.external.registry.get(a[0])?.id,
                    v = e.external.uri ?? ((S) => S);
                if (m) return { ref: v(m) };
                const g =
                    a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`;
                return (
                    (a[1].defId = g),
                    { defId: g, ref: `${v("__shared")}#/${c}/${g}` }
                );
            }
            if (a[1] === i) return { ref: "#" };
            const u = `#/${c}/`,
                d = a[1].schema.id ?? `__schema${e.counter++}`;
            return { defId: d, ref: u + d };
        },
        r = (a) => {
            if (a[1].schema.$ref) return;
            const c = a[1],
                { ref: l, defId: u } = n(a);
            ((c.def = { ...c.schema }), u && (c.defId = u));
            const d = c.schema;
            for (const m in d) delete d[m];
            d.$ref = l;
        };
    if (e.cycles === "throw")
        for (const a of e.seen.entries()) {
            const c = a[1];
            if (c.cycle)
                throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (const a of e.seen.entries()) {
        const c = a[1];
        if (t === a[0]) {
            r(a);
            continue;
        }
        if (e.external) {
            const u = e.external.registry.get(a[0])?.id;
            if (t !== a[0] && u) {
                r(a);
                continue;
            }
        }
        if (e.metadataRegistry.get(a[0])?.id) {
            r(a);
            continue;
        }
        if (c.cycle) {
            r(a);
            continue;
        }
        if (c.count > 1 && e.reused === "ref") {
            r(a);
            continue;
        }
    }
}
function ge(e, t) {
    const i = e.seen.get(t);
    if (!i) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const o = (a) => {
        const c = e.seen.get(a);
        if (c.ref === null) return;
        const l = c.def ?? c.schema,
            u = { ...l },
            d = c.ref;
        if (((c.ref = null), d)) {
            o(d);
            const v = e.seen.get(d),
                g = v.schema;
            if (
                (g.$ref &&
                (e.target === "draft-07" ||
                    e.target === "draft-04" ||
                    e.target === "openapi-3.0")
                    ? ((l.allOf = l.allOf ?? []), l.allOf.push(g))
                    : Object.assign(l, g),
                Object.assign(l, u),
                a._zod.parent === d)
            )
                for (const I in l)
                    I === "$ref" || I === "allOf" || I in u || delete l[I];
            if (g.$ref)
                for (const I in l)
                    I === "$ref" ||
                        I === "allOf" ||
                        (I in v.def &&
                            JSON.stringify(l[I]) === JSON.stringify(v.def[I]) &&
                            delete l[I]);
        }
        const m = a._zod.parent;
        if (m && m !== d) {
            o(m);
            const v = e.seen.get(m);
            if (v?.schema.$ref && ((l.$ref = v.schema.$ref), v.def))
                for (const g in l)
                    g === "$ref" ||
                        g === "allOf" ||
                        (g in v.def &&
                            JSON.stringify(l[g]) === JSON.stringify(v.def[g]) &&
                            delete l[g]);
        }
        e.override({ zodSchema: a, jsonSchema: l, path: c.path ?? [] });
    };
    for (const a of [...e.seen.entries()].reverse()) o(a[0]);
    const n = {};
    if (
        (e.target === "draft-2020-12"
            ? (n.$schema = "https://json-schema.org/draft/2020-12/schema")
            : e.target === "draft-07"
              ? (n.$schema = "http://json-schema.org/draft-07/schema#")
              : e.target === "draft-04"
                ? (n.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
        e.external?.uri)
    ) {
        const a = e.external.registry.get(t)?.id;
        if (!a) throw new Error("Schema is missing an `id` property");
        n.$id = e.external.uri(a);
    }
    Object.assign(n, i.def ?? i.schema);
    const r = e.external?.defs ?? {};
    for (const a of e.seen.entries()) {
        const c = a[1];
        c.def && c.defId && (r[c.defId] = c.def);
    }
    e.external ||
        (Object.keys(r).length > 0 &&
            (e.target === "draft-2020-12"
                ? (n.$defs = r)
                : (n.definitions = r)));
    try {
        const a = JSON.parse(JSON.stringify(n));
        return (
            Object.defineProperty(a, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: {
                        input: we(t, "input", e.processors),
                        output: we(t, "output", e.processors)
                    }
                },
                enumerable: !1,
                writable: !1
            }),
            a
        );
    } catch {
        throw new Error("Error converting schema to JSON.");
    }
}
function P(e, t) {
    const i = t ?? { seen: new Set() };
    if (i.seen.has(e)) return !1;
    i.seen.add(e);
    const o = e._zod.def;
    if (o.type === "transform") return !0;
    if (o.type === "array") return P(o.element, i);
    if (o.type === "set") return P(o.valueType, i);
    if (o.type === "lazy") return P(o.getter(), i);
    if (
        o.type === "promise" ||
        o.type === "optional" ||
        o.type === "nonoptional" ||
        o.type === "nullable" ||
        o.type === "readonly" ||
        o.type === "default" ||
        o.type === "prefault"
    )
        return P(o.innerType, i);
    if (o.type === "intersection") return P(o.left, i) || P(o.right, i);
    if (o.type === "record" || o.type === "map")
        return P(o.keyType, i) || P(o.valueType, i);
    if (o.type === "pipe") return P(o.in, i) || P(o.out, i);
    if (o.type === "object") {
        for (const n in o.shape) if (P(o.shape[n], i)) return !0;
        return !1;
    }
    if (o.type === "union") {
        for (const n of o.options) if (P(n, i)) return !0;
        return !1;
    }
    if (o.type === "tuple") {
        for (const n of o.items) if (P(n, i)) return !0;
        return !!(o.rest && P(o.rest, i));
    }
    return !1;
}
const fu =
        (e, t = {}) =>
        (i) => {
            const o = pe({ ...i, processors: t });
            return (w(e, o), ve(o, e), ge(o, e));
        },
    we =
        (e, t, i = {}) =>
        (o) => {
            const { libraryOptions: n, target: r } = o ?? {},
                a = pe({ ...(n ?? {}), target: r, io: t, processors: i });
            return (w(e, a), ve(a, e), ge(a, e));
        },
    qf = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
    },
    pu = (e, t, i, o) => {
        const n = i;
        n.type = "string";
        const {
            minimum: r,
            maximum: a,
            format: c,
            patterns: l,
            contentEncoding: u
        } = e._zod.bag;
        if (
            (typeof r == "number" && (n.minLength = r),
            typeof a == "number" && (n.maxLength = a),
            c &&
                ((n.format = qf[c] ?? c),
                n.format === "" && delete n.format,
                c === "time" && delete n.format),
            u && (n.contentEncoding = u),
            l && l.size > 0)
        ) {
            const d = [...l];
            d.length === 1
                ? (n.pattern = d[0].source)
                : d.length > 1 &&
                  (n.allOf = [
                      ...d.map((m) => ({
                          ...(t.target === "draft-07" ||
                          t.target === "draft-04" ||
                          t.target === "openapi-3.0"
                              ? { type: "string" }
                              : {}),
                          pattern: m.source
                      }))
                  ]);
        }
    },
    vu = (e, t, i, o) => {
        const n = i,
            {
                minimum: r,
                maximum: a,
                format: c,
                multipleOf: l,
                exclusiveMaximum: u,
                exclusiveMinimum: d
            } = e._zod.bag;
        (typeof c == "string" && c.includes("int")
            ? (n.type = "integer")
            : (n.type = "number"),
            typeof d == "number" &&
                (t.target === "draft-04" || t.target === "openapi-3.0"
                    ? ((n.minimum = d), (n.exclusiveMinimum = !0))
                    : (n.exclusiveMinimum = d)),
            typeof r == "number" &&
                ((n.minimum = r),
                typeof d == "number" &&
                    t.target !== "draft-04" &&
                    (d >= r ? delete n.minimum : delete n.exclusiveMinimum)),
            typeof u == "number" &&
                (t.target === "draft-04" || t.target === "openapi-3.0"
                    ? ((n.maximum = u), (n.exclusiveMaximum = !0))
                    : (n.exclusiveMaximum = u)),
            typeof a == "number" &&
                ((n.maximum = a),
                typeof u == "number" &&
                    t.target !== "draft-04" &&
                    (u <= a ? delete n.maximum : delete n.exclusiveMaximum)),
            typeof l == "number" && (n.multipleOf = l));
    },
    gu = (e, t, i, o) => {
        i.type = "boolean";
    },
    hu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("BigInt cannot be represented in JSON Schema");
    },
    $u = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Symbols cannot be represented in JSON Schema");
    },
    _u = (e, t, i, o) => {
        t.target === "openapi-3.0"
            ? ((i.type = "string"), (i.nullable = !0), (i.enum = [null]))
            : (i.type = "null");
    },
    bu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Undefined cannot be represented in JSON Schema");
    },
    yu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Void cannot be represented in JSON Schema");
    },
    ku = (e, t, i, o) => {
        i.not = {};
    },
    Su = (e, t, i, o) => {},
    Iu = (e, t, i, o) => {},
    zu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Date cannot be represented in JSON Schema");
    },
    wu = (e, t, i, o) => {
        const n = e._zod.def,
            r = hn(n.entries);
        (r.every((a) => typeof a == "number") && (i.type = "number"),
            r.every((a) => typeof a == "string") && (i.type = "string"),
            (i.enum = r));
    },
    xu = (e, t, i, o) => {
        const n = e._zod.def,
            r = [];
        for (const a of n.values)
            if (a === void 0) {
                if (t.unrepresentable === "throw")
                    throw new Error(
                        "Literal `undefined` cannot be represented in JSON Schema"
                    );
            } else if (typeof a == "bigint") {
                if (t.unrepresentable === "throw")
                    throw new Error(
                        "BigInt literals cannot be represented in JSON Schema"
                    );
                r.push(Number(a));
            } else r.push(a);
        if (r.length !== 0)
            if (r.length === 1) {
                const a = r[0];
                ((i.type = a === null ? "null" : typeof a),
                    t.target === "draft-04" || t.target === "openapi-3.0"
                        ? (i.enum = [a])
                        : (i.const = a));
            } else
                (r.every((a) => typeof a == "number") && (i.type = "number"),
                    r.every((a) => typeof a == "string") && (i.type = "string"),
                    r.every((a) => typeof a == "boolean") &&
                        (i.type = "boolean"),
                    r.every((a) => a === null) && (i.type = "null"),
                    (i.enum = r));
    },
    Uu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
    },
    ju = (e, t, i, o) => {
        const n = i,
            r = e._zod.pattern;
        if (!r) throw new Error("Pattern not found in template literal");
        ((n.type = "string"), (n.pattern = r.source));
    },
    Ou = (e, t, i, o) => {
        const n = i,
            r = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: a, maximum: c, mime: l } = e._zod.bag;
        (a !== void 0 && (r.minLength = a),
            c !== void 0 && (r.maxLength = c),
            l
                ? l.length === 1
                    ? ((r.contentMediaType = l[0]), Object.assign(n, r))
                    : (Object.assign(n, r),
                      (n.anyOf = l.map((u) => ({ contentMediaType: u }))))
                : Object.assign(n, r));
    },
    Du = (e, t, i, o) => {
        i.type = "boolean";
    },
    Nu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error(
                "Custom types cannot be represented in JSON Schema"
            );
    },
    Pu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error(
                "Function types cannot be represented in JSON Schema"
            );
    },
    Zu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
    },
    Eu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Map cannot be represented in JSON Schema");
    },
    Tu = (e, t, i, o) => {
        if (t.unrepresentable === "throw")
            throw new Error("Set cannot be represented in JSON Schema");
    },
    Au = (e, t, i, o) => {
        const n = i,
            r = e._zod.def,
            { minimum: a, maximum: c } = e._zod.bag;
        (typeof a == "number" && (n.minItems = a),
            typeof c == "number" && (n.maxItems = c),
            (n.type = "array"),
            (n.items = w(r.element, t, { ...o, path: [...o.path, "items"] })));
    },
    Ru = (e, t, i, o) => {
        const n = i,
            r = e._zod.def;
        ((n.type = "object"), (n.properties = {}));
        const a = r.shape;
        for (const u in a)
            n.properties[u] = w(a[u], t, {
                ...o,
                path: [...o.path, "properties", u]
            });
        const c = new Set(Object.keys(a)),
            l = new Set(
                [...c].filter((u) => {
                    const d = r.shape[u]._zod;
                    return t.io === "input"
                        ? d.optin === void 0
                        : d.optout === void 0;
                })
            );
        (l.size > 0 && (n.required = Array.from(l)),
            r.catchall?._zod.def.type === "never"
                ? (n.additionalProperties = !1)
                : r.catchall
                  ? r.catchall &&
                    (n.additionalProperties = w(r.catchall, t, {
                        ...o,
                        path: [...o.path, "additionalProperties"]
                    }))
                  : t.io === "output" && (n.additionalProperties = !1));
    },
    gr = (e, t, i, o) => {
        const n = e._zod.def,
            r = n.inclusive === !1,
            a = n.options.map((c, l) =>
                w(c, t, { ...o, path: [...o.path, r ? "oneOf" : "anyOf", l] })
            );
        r ? (i.oneOf = a) : (i.anyOf = a);
    },
    Lu = (e, t, i, o) => {
        const n = e._zod.def,
            r = w(n.left, t, { ...o, path: [...o.path, "allOf", 0] }),
            a = w(n.right, t, { ...o, path: [...o.path, "allOf", 1] }),
            c = (u) => "allOf" in u && Object.keys(u).length === 1,
            l = [...(c(r) ? r.allOf : [r]), ...(c(a) ? a.allOf : [a])];
        i.allOf = l;
    },
    Fu = (e, t, i, o) => {
        const n = i,
            r = e._zod.def;
        n.type = "array";
        const a = t.target === "draft-2020-12" ? "prefixItems" : "items",
            c =
                t.target === "draft-2020-12" || t.target === "openapi-3.0"
                    ? "items"
                    : "additionalItems",
            l = r.items.map((v, g) =>
                w(v, t, { ...o, path: [...o.path, a, g] })
            ),
            u = r.rest
                ? w(r.rest, t, {
                      ...o,
                      path: [
                          ...o.path,
                          c,
                          ...(t.target === "openapi-3.0"
                              ? [r.items.length]
                              : [])
                      ]
                  })
                : null;
        t.target === "draft-2020-12"
            ? ((n.prefixItems = l), u && (n.items = u))
            : t.target === "openapi-3.0"
              ? ((n.items = { anyOf: l }),
                u && n.items.anyOf.push(u),
                (n.minItems = l.length),
                u || (n.maxItems = l.length))
              : ((n.items = l), u && (n.additionalItems = u));
        const { minimum: d, maximum: m } = e._zod.bag;
        (typeof d == "number" && (n.minItems = d),
            typeof m == "number" && (n.maxItems = m));
    },
    Cu = (e, t, i, o) => {
        const n = i,
            r = e._zod.def;
        ((n.type = "object"),
            (t.target === "draft-07" || t.target === "draft-2020-12") &&
                (n.propertyNames = w(r.keyType, t, {
                    ...o,
                    path: [...o.path, "propertyNames"]
                })),
            (n.additionalProperties = w(r.valueType, t, {
                ...o,
                path: [...o.path, "additionalProperties"]
            })));
        const a = r.keyType._zod.def;
        if (a.type === "enum") {
            const l = hn(a.entries).filter(
                (u) => typeof u == "string" || typeof u == "number"
            );
            l.length > 0 && (n.required = l);
        }
    },
    Ju = (e, t, i, o) => {
        const n = e._zod.def,
            r = w(n.innerType, t, o),
            a = t.seen.get(e);
        t.target === "openapi-3.0"
            ? ((a.ref = n.innerType), (i.nullable = !0))
            : (i.anyOf = [r, { type: "null" }]);
    },
    Mu = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        r.ref = n.innerType;
    },
    Ku = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        ((r.ref = n.innerType),
            (i.default = JSON.parse(JSON.stringify(n.defaultValue))));
    },
    Vu = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        ((r.ref = n.innerType),
            t.io === "input" &&
                (i._prefault = JSON.parse(JSON.stringify(n.defaultValue))));
    },
    Bu = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        r.ref = n.innerType;
        let a;
        try {
            a = n.catchValue(void 0);
        } catch {
            throw new Error(
                "Dynamic catch values are not supported in JSON Schema"
            );
        }
        i.default = a;
    },
    Gu = (e, t, i, o) => {
        const n = e._zod.def,
            r =
                t.io === "input"
                    ? n.in._zod.def.type === "transform"
                        ? n.out
                        : n.in
                    : n.out;
        w(r, t, o);
        const a = t.seen.get(e);
        a.ref = r;
    },
    Wu = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        ((r.ref = n.innerType), (i.readOnly = !0));
    },
    qu = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        r.ref = n.innerType;
    },
    hr = (e, t, i, o) => {
        const n = e._zod.def;
        w(n.innerType, t, o);
        const r = t.seen.get(e);
        r.ref = n.innerType;
    },
    Xu = (e, t, i, o) => {
        const n = e._zod.innerType;
        w(n, t, o);
        const r = t.seen.get(e);
        r.ref = n;
    },
    gt = {
        string: pu,
        number: vu,
        boolean: gu,
        bigint: hu,
        symbol: $u,
        null: _u,
        undefined: bu,
        void: yu,
        never: ku,
        any: Su,
        unknown: Iu,
        date: zu,
        enum: wu,
        literal: xu,
        nan: Uu,
        template_literal: ju,
        file: Ou,
        success: Du,
        custom: Nu,
        function: Pu,
        transform: Zu,
        map: Eu,
        set: Tu,
        array: Au,
        object: Ru,
        union: gr,
        intersection: Lu,
        tuple: Fu,
        record: Cu,
        nullable: Ju,
        nonoptional: Mu,
        default: Ku,
        prefault: Vu,
        catch: Bu,
        pipe: Gu,
        readonly: Wu,
        promise: qu,
        optional: hr,
        lazy: Xu
    };
function Yu(e, t) {
    if ("_idmap" in e) {
        const o = e,
            n = pe({ ...t, processors: gt }),
            r = {};
        for (const l of o._idmap.entries()) {
            const [u, d] = l;
            w(d, n);
        }
        const a = {},
            c = { registry: o, uri: t?.uri, defs: r };
        n.external = c;
        for (const l of o._idmap.entries()) {
            const [u, d] = l;
            (ve(n, d), (a[u] = ge(n, d)));
        }
        if (Object.keys(r).length > 0) {
            const l = n.target === "draft-2020-12" ? "$defs" : "definitions";
            a.__shared = { [l]: r };
        }
        return { schemas: a };
    }
    const i = pe({ ...t, processors: gt });
    return (w(e, i), ve(i, e), ge(i, e));
}
class Xf {
    get metadataRegistry() {
        return this.ctx.metadataRegistry;
    }
    get target() {
        return this.ctx.target;
    }
    get unrepresentable() {
        return this.ctx.unrepresentable;
    }
    get override() {
        return this.ctx.override;
    }
    get io() {
        return this.ctx.io;
    }
    get counter() {
        return this.ctx.counter;
    }
    set counter(t) {
        this.ctx.counter = t;
    }
    get seen() {
        return this.ctx.seen;
    }
    constructor(t) {
        let i = t?.target ?? "draft-2020-12";
        (i === "draft-4" && (i = "draft-04"),
            i === "draft-7" && (i = "draft-07"),
            (this.ctx = pe({
                processors: gt,
                target: i,
                ...(t?.metadata && { metadata: t.metadata }),
                ...(t?.unrepresentable && {
                    unrepresentable: t.unrepresentable
                }),
                ...(t?.override && { override: t.override }),
                ...(t?.io && { io: t.io })
            })));
    }
    process(t, i = { path: [], schemaPath: [] }) {
        return w(t, this.ctx, i);
    }
    emit(t, i) {
        (i &&
            (i.cycles && (this.ctx.cycles = i.cycles),
            i.reused && (this.ctx.reused = i.reused),
            i.external && (this.ctx.external = i.external)),
            ve(this.ctx, t));
        const o = ge(this.ctx, t),
            { "~standard": n, ...r } = o;
        return r;
    }
}
const Yf = Object.freeze(
        Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
            value: "Module"
        })
    ),
    Hf = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                $ZodAny: La,
                $ZodArray: Ka,
                $ZodAsyncError: re,
                $ZodBase64: xa,
                $ZodBase64URL: ja,
                $ZodBigInt: Ft,
                $ZodBigIntFormat: Ea,
                $ZodBoolean: Lt,
                $ZodCIDRv4: za,
                $ZodCIDRv6: wa,
                $ZodCUID: fa,
                $ZodCUID2: pa,
                $ZodCatch: dc,
                $ZodCheck: j,
                $ZodCheckBigIntFormat: Mo,
                $ZodCheckEndsWith: na,
                $ZodCheckGreaterThan: Tt,
                $ZodCheckIncludes: Qo,
                $ZodCheckLengthEquals: qo,
                $ZodCheckLessThan: Et,
                $ZodCheckLowerCase: Yo,
                $ZodCheckMaxLength: Go,
                $ZodCheckMaxSize: Ko,
                $ZodCheckMimeType: ra,
                $ZodCheckMinLength: Wo,
                $ZodCheckMinSize: Vo,
                $ZodCheckMultipleOf: Co,
                $ZodCheckNumberFormat: Jo,
                $ZodCheckOverwrite: ia,
                $ZodCheckProperty: ta,
                $ZodCheckRegex: Xo,
                $ZodCheckSizeEquals: Bo,
                $ZodCheckStartsWith: ea,
                $ZodCheckStringFormat: Le,
                $ZodCheckUpperCase: Ho,
                $ZodCodec: Mt,
                $ZodCustom: _c,
                $ZodCustomStringFormat: Pa,
                $ZodDate: Ma,
                $ZodDefault: cc,
                $ZodDiscriminatedUnion: Xa,
                $ZodE164: Oa,
                $ZodEmail: la,
                $ZodEmoji: da,
                $ZodEncodeError: gn,
                $ZodEnum: nc,
                $ZodError: yt,
                $ZodExactOptional: oc,
                $ZodFile: rc,
                $ZodFunction: gc,
                $ZodGUID: ca,
                $ZodIPv4: ka,
                $ZodIPv6: Sa,
                $ZodISODate: _a,
                $ZodISODateTime: $a,
                $ZodISODuration: ya,
                $ZodISOTime: ba,
                $ZodIntersection: Ya,
                $ZodJWT: Na,
                $ZodKSUID: ha,
                $ZodLazy: $c,
                $ZodLiteral: tc,
                $ZodMAC: Ia,
                $ZodMap: Qa,
                $ZodNaN: mc,
                $ZodNanoID: ma,
                $ZodNever: Ca,
                $ZodNonOptional: lc,
                $ZodNull: Ra,
                $ZodNullable: ac,
                $ZodNumber: Rt,
                $ZodNumberFormat: Za,
                $ZodObject: Ga,
                $ZodObjectJIT: Wa,
                $ZodOptional: Jt,
                $ZodPipe: fc,
                $ZodPrefault: uc,
                $ZodPromise: hc,
                $ZodReadonly: pc,
                $ZodRealError: T,
                $ZodRecord: Ha,
                $ZodRegistry: wc,
                $ZodSet: ec,
                $ZodString: Fe,
                $ZodStringFormat: x,
                $ZodSuccess: sc,
                $ZodSymbol: Ta,
                $ZodTemplateLiteral: vc,
                $ZodTransform: ic,
                $ZodTuple: Ct,
                $ZodType: b,
                $ZodULID: va,
                $ZodURL: sa,
                $ZodUUID: ua,
                $ZodUndefined: Aa,
                $ZodUnion: kn,
                $ZodUnknown: Fa,
                $ZodVoid: Ja,
                $ZodXID: ga,
                $ZodXor: qa,
                $brand: Ei,
                $constructor: s,
                $input: zc,
                $output: Ic,
                Doc: oa,
                JSONSchema: Yf,
                JSONSchemaGenerator: Xf,
                NEVER: Zi,
                TimePrecision: Oc,
                _any: Yc,
                _array: iu,
                _base64: cr,
                _base64url: ur,
                _bigint: Kc,
                _boolean: Jc,
                _catch: Mf,
                _check: lu,
                _cidrv4: or,
                _cidrv6: ar,
                _coercedBigint: Vc,
                _coercedBoolean: Mc,
                _coercedDate: tu,
                _coercedNumber: Tc,
                _coercedString: Uc,
                _cuid: Ht,
                _cuid2: Qt,
                _custom: au,
                _date: nu,
                _decode: zt,
                _decodeAsync: xt,
                _default: Ff,
                _discriminatedUnion: Uf,
                _e164: lr,
                _email: Vt,
                _emoji: Xt,
                _encode: It,
                _encodeAsync: wt,
                _endsWith: jn,
                _enum: Zf,
                _file: ou,
                _float32: Rc,
                _float64: Lc,
                _gt: Q,
                _gte: Z,
                _guid: dn,
                _includes: xn,
                _int: Ac,
                _int32: Fc,
                _int64: Bc,
                _intersection: jf,
                _ipv4: rr,
                _ipv6: ir,
                _isoDate: Nc,
                _isoDateTime: Dc,
                _isoDuration: Zc,
                _isoTime: Pc,
                _jwt: sr,
                _ksuid: tr,
                _lazy: Gf,
                _length: Me,
                _literal: Tf,
                _lowercase: zn,
                _lt: H,
                _lte: F,
                _mac: jc,
                _map: Nf,
                _max: F,
                _maxLength: Je,
                _maxSize: $e,
                _mime: On,
                _min: Z,
                _minLength: oe,
                _minSize: ee,
                _multipleOf: fe,
                _nan: ru,
                _nanoid: Yt,
                _nativeEnum: Ef,
                _negative: mr,
                _never: Qc,
                _nonnegative: pr,
                _nonoptional: Cf,
                _nonpositive: fr,
                _normalize: Dn,
                _null: Xc,
                _nullable: Lf,
                _number: Ec,
                _optional: Rf,
                _overwrite: X,
                _parse: Pe,
                _parseAsync: Ze,
                _pipe: Kf,
                _positive: dr,
                _promise: Wf,
                _property: vr,
                _readonly: Vf,
                _record: Df,
                _refine: cu,
                _regex: In,
                _safeDecode: jt,
                _safeDecodeAsync: Dt,
                _safeEncode: Ut,
                _safeEncodeAsync: Ot,
                _safeParse: Ee,
                _safeParseAsync: Te,
                _set: Pf,
                _size: Ce,
                _slugify: En,
                _startsWith: Un,
                _string: xc,
                _stringFormat: Ke,
                _stringbool: mu,
                _success: Jf,
                _superRefine: uu,
                _symbol: Wc,
                _templateLiteral: Bf,
                _toLowerCase: Pn,
                _toUpperCase: Zn,
                _transform: Af,
                _trim: Nn,
                _tuple: Of,
                _uint32: Cc,
                _uint64: Gc,
                _ulid: er,
                _undefined: qc,
                _union: wf,
                _unknown: Hc,
                _uppercase: wn,
                _url: Sn,
                _uuid: Bt,
                _uuidv4: Gt,
                _uuidv6: Wt,
                _uuidv7: qt,
                _void: eu,
                _xid: nr,
                _xor: xf,
                clone: J,
                config: N,
                createStandardJSONSchemaMethod: we,
                createToJSONSchemaMethod: fu,
                decode: ld,
                decodeAsync: dd,
                describe: su,
                encode: ud,
                encodeAsync: sd,
                extractDefs: ve,
                finalize: ge,
                flattenError: kt,
                formatError: St,
                globalConfig: cn,
                globalRegistry: L,
                initializeContext: pe,
                isValidBase64: At,
                isValidBase64URL: Ua,
                isValidJWT: Da,
                locales: Sc,
                meta: du,
                parse: ft,
                parseAsync: pt,
                prettifyError: to,
                process: w,
                regexes: Zt,
                registry: Kt,
                safeDecode: fd,
                safeDecodeAsync: vd,
                safeEncode: md,
                safeEncodeAsync: pd,
                safeParse: ro,
                safeParseAsync: io,
                toDotPath: no,
                toJSONSchema: Yu,
                treeifyError: eo,
                util: Hi,
                version: aa
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    Qf = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                endsWith: jn,
                gt: Q,
                gte: Z,
                includes: xn,
                length: Me,
                lowercase: zn,
                lt: H,
                lte: F,
                maxLength: Je,
                maxSize: $e,
                mime: On,
                minLength: oe,
                minSize: ee,
                multipleOf: fe,
                negative: mr,
                nonnegative: pr,
                nonpositive: fr,
                normalize: Dn,
                overwrite: X,
                positive: dr,
                property: vr,
                regex: In,
                size: Ce,
                slugify: En,
                startsWith: Un,
                toLowerCase: Pn,
                toUpperCase: Zn,
                trim: Nn,
                uppercase: wn
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    $r = s("ZodISODateTime", (e, t) => {
        ($a.init(e, t), U.init(e, t));
    });
function Hu(e) {
    return Dc($r, e);
}
const _r = s("ZodISODate", (e, t) => {
    (_a.init(e, t), U.init(e, t));
});
function Qu(e) {
    return Nc(_r, e);
}
const br = s("ZodISOTime", (e, t) => {
    (ba.init(e, t), U.init(e, t));
});
function el(e) {
    return Pc(br, e);
}
const yr = s("ZodISODuration", (e, t) => {
    (ya.init(e, t), U.init(e, t));
});
function nl(e) {
    return Zc(yr, e);
}
const tl = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                ZodISODate: _r,
                ZodISODateTime: $r,
                ZodISODuration: yr,
                ZodISOTime: br,
                date: Qu,
                datetime: Hu,
                duration: nl,
                time: el
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    rl = (e, t) => {
        (yt.init(e, t),
            (e.name = "ZodError"),
            Object.defineProperties(e, {
                format: { value: (i) => St(e, i) },
                flatten: { value: (i) => kt(e, i) },
                addIssue: {
                    value: (i) => {
                        (e.issues.push(i),
                            (e.message = JSON.stringify(e.issues, un, 2)));
                    }
                },
                addIssues: {
                    value: (i) => {
                        (e.issues.push(...i),
                            (e.message = JSON.stringify(e.issues, un, 2)));
                    }
                },
                isEmpty: {
                    get() {
                        return e.issues.length === 0;
                    }
                }
            }));
    },
    ep = s("ZodError", rl),
    A = s("ZodError", rl, { Parent: Error }),
    il = Pe(A),
    ol = Ze(A),
    al = Ee(A),
    cl = Te(A),
    ul = It(A),
    ll = zt(A),
    sl = wt(A),
    dl = xt(A),
    ml = Ut(A),
    fl = jt(A),
    pl = Ot(A),
    vl = Dt(A),
    y = s(
        "ZodType",
        (e, t) => (
            b.init(e, t),
            Object.assign(e["~standard"], {
                jsonSchema: { input: we(e, "input"), output: we(e, "output") }
            }),
            (e.toJSONSchema = fu(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.check = (...i) =>
                e.clone(
                    G(t, {
                        checks: [
                            ...(t.checks ?? []),
                            ...i.map((o) =>
                                typeof o == "function"
                                    ? {
                                          _zod: {
                                              check: o,
                                              def: { check: "custom" },
                                              onattach: []
                                          }
                                      }
                                    : o
                            )
                        ]
                    }),
                    { parent: !0 }
                )),
            (e.with = e.check),
            (e.clone = (i, o) => J(e, i, o)),
            (e.brand = () => e),
            (e.register = (i, o) => (i.add(e, o), e)),
            (e.parse = (i, o) => il(e, i, o, { callee: e.parse })),
            (e.safeParse = (i, o) => al(e, i, o)),
            (e.parseAsync = async (i, o) =>
                ol(e, i, o, { callee: e.parseAsync })),
            (e.safeParseAsync = async (i, o) => cl(e, i, o)),
            (e.spa = e.safeParseAsync),
            (e.encode = (i, o) => ul(e, i, o)),
            (e.decode = (i, o) => ll(e, i, o)),
            (e.encodeAsync = async (i, o) => sl(e, i, o)),
            (e.decodeAsync = async (i, o) => dl(e, i, o)),
            (e.safeEncode = (i, o) => ml(e, i, o)),
            (e.safeDecode = (i, o) => fl(e, i, o)),
            (e.safeEncodeAsync = async (i, o) => pl(e, i, o)),
            (e.safeDecodeAsync = async (i, o) => vl(e, i, o)),
            (e.refine = (i, o) => e.check(di(i, o))),
            (e.superRefine = (i) => e.check(mi(i))),
            (e.overwrite = (i) => e.check(X(i))),
            (e.optional = () => Ue(e)),
            (e.exactOptional = () => Gr(e)),
            (e.nullable = () => je(e)),
            (e.nullish = () => Ue(je(e))),
            (e.nonoptional = (i) => Qr(e, i)),
            (e.array = () => Xe(e)),
            (e.or = (i) => tt([e, i])),
            (e.and = (i) => Ar(e, i)),
            (e.transform = (i) => Oe(e, it(i))),
            (e.default = (i) => Xr(e, i)),
            (e.prefault = (i) => Hr(e, i)),
            (e.catch = (i) => ti(e, i)),
            (e.pipe = (i) => Oe(e, i)),
            (e.readonly = () => oi(e)),
            (e.describe = (i) => {
                const o = e.clone();
                return (L.add(o, { description: i }), o);
            }),
            Object.defineProperty(e, "description", {
                get() {
                    return L.get(e)?.description;
                },
                configurable: !0
            }),
            (e.meta = (...i) => {
                if (i.length === 0) return L.get(e);
                const o = e.clone();
                return (L.add(o, i[0]), o);
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (i) => i(e)),
            e
        )
    ),
    Tn = s("_ZodString", (e, t) => {
        (Fe.init(e, t),
            y.init(e, t),
            (e._zod.processJSONSchema = (o, n, r) => pu(e, o, n)));
        const i = e._zod.bag;
        ((e.format = i.format ?? null),
            (e.minLength = i.minimum ?? null),
            (e.maxLength = i.maximum ?? null),
            (e.regex = (...o) => e.check(In(...o))),
            (e.includes = (...o) => e.check(xn(...o))),
            (e.startsWith = (...o) => e.check(Un(...o))),
            (e.endsWith = (...o) => e.check(jn(...o))),
            (e.min = (...o) => e.check(oe(...o))),
            (e.max = (...o) => e.check(Je(...o))),
            (e.length = (...o) => e.check(Me(...o))),
            (e.nonempty = (...o) => e.check(oe(1, ...o))),
            (e.lowercase = (o) => e.check(zn(o))),
            (e.uppercase = (o) => e.check(wn(o))),
            (e.trim = () => e.check(Nn())),
            (e.normalize = (...o) => e.check(Dn(...o))),
            (e.toLowerCase = () => e.check(Pn())),
            (e.toUpperCase = () => e.check(Zn())),
            (e.slugify = () => e.check(En())));
    }),
    Ve = s("ZodString", (e, t) => {
        (Fe.init(e, t),
            Tn.init(e, t),
            (e.email = (i) => e.check(Vt(An, i))),
            (e.url = (i) => e.check(Sn(Be, i))),
            (e.jwt = (i) => e.check(sr(Hn, i))),
            (e.emoji = (i) => e.check(Xt(Rn, i))),
            (e.guid = (i) => e.check(dn(xe, i))),
            (e.uuid = (i) => e.check(Bt(B, i))),
            (e.uuidv4 = (i) => e.check(Gt(B, i))),
            (e.uuidv6 = (i) => e.check(Wt(B, i))),
            (e.uuidv7 = (i) => e.check(qt(B, i))),
            (e.nanoid = (i) => e.check(Yt(Ln, i))),
            (e.guid = (i) => e.check(dn(xe, i))),
            (e.cuid = (i) => e.check(Ht(Fn, i))),
            (e.cuid2 = (i) => e.check(Qt(Cn, i))),
            (e.ulid = (i) => e.check(er(Jn, i))),
            (e.base64 = (i) => e.check(cr(qn, i))),
            (e.base64url = (i) => e.check(ur(Xn, i))),
            (e.xid = (i) => e.check(nr(Mn, i))),
            (e.ksuid = (i) => e.check(tr(Kn, i))),
            (e.ipv4 = (i) => e.check(rr(Vn, i))),
            (e.ipv6 = (i) => e.check(ir(Bn, i))),
            (e.cidrv4 = (i) => e.check(or(Gn, i))),
            (e.cidrv6 = (i) => e.check(ar(Wn, i))),
            (e.e164 = (i) => e.check(lr(Yn, i))),
            (e.datetime = (i) => e.check(Hu(i))),
            (e.date = (i) => e.check(Qu(i))),
            (e.time = (i) => e.check(el(i))),
            (e.duration = (i) => e.check(nl(i))));
    });
function mn(e) {
    return xc(Ve, e);
}
const U = s("ZodStringFormat", (e, t) => {
        (x.init(e, t), Tn.init(e, t));
    }),
    An = s("ZodEmail", (e, t) => {
        (la.init(e, t), U.init(e, t));
    });
function gl(e) {
    return Vt(An, e);
}
const xe = s("ZodGUID", (e, t) => {
    (ca.init(e, t), U.init(e, t));
});
function hl(e) {
    return dn(xe, e);
}
const B = s("ZodUUID", (e, t) => {
    (ua.init(e, t), U.init(e, t));
});
function $l(e) {
    return Bt(B, e);
}
function _l(e) {
    return Gt(B, e);
}
function bl(e) {
    return Wt(B, e);
}
function yl(e) {
    return qt(B, e);
}
const Be = s("ZodURL", (e, t) => {
    (sa.init(e, t), U.init(e, t));
});
function kl(e) {
    return Sn(Be, e);
}
function Sl(e) {
    return Sn(Be, { protocol: /^https?$/, hostname: Io, ...f(e) });
}
const Rn = s("ZodEmoji", (e, t) => {
    (da.init(e, t), U.init(e, t));
});
function Il(e) {
    return Xt(Rn, e);
}
const Ln = s("ZodNanoID", (e, t) => {
    (ma.init(e, t), U.init(e, t));
});
function zl(e) {
    return Yt(Ln, e);
}
const Fn = s("ZodCUID", (e, t) => {
    (fa.init(e, t), U.init(e, t));
});
function wl(e) {
    return Ht(Fn, e);
}
const Cn = s("ZodCUID2", (e, t) => {
    (pa.init(e, t), U.init(e, t));
});
function xl(e) {
    return Qt(Cn, e);
}
const Jn = s("ZodULID", (e, t) => {
    (va.init(e, t), U.init(e, t));
});
function Ul(e) {
    return er(Jn, e);
}
const Mn = s("ZodXID", (e, t) => {
    (ga.init(e, t), U.init(e, t));
});
function jl(e) {
    return nr(Mn, e);
}
const Kn = s("ZodKSUID", (e, t) => {
    (ha.init(e, t), U.init(e, t));
});
function Ol(e) {
    return tr(Kn, e);
}
const Vn = s("ZodIPv4", (e, t) => {
    (ka.init(e, t), U.init(e, t));
});
function Dl(e) {
    return rr(Vn, e);
}
const kr = s("ZodMAC", (e, t) => {
    (Ia.init(e, t), U.init(e, t));
});
function Nl(e) {
    return jc(kr, e);
}
const Bn = s("ZodIPv6", (e, t) => {
    (Sa.init(e, t), U.init(e, t));
});
function Pl(e) {
    return ir(Bn, e);
}
const Gn = s("ZodCIDRv4", (e, t) => {
    (za.init(e, t), U.init(e, t));
});
function Zl(e) {
    return or(Gn, e);
}
const Wn = s("ZodCIDRv6", (e, t) => {
    (wa.init(e, t), U.init(e, t));
});
function El(e) {
    return ar(Wn, e);
}
const qn = s("ZodBase64", (e, t) => {
    (xa.init(e, t), U.init(e, t));
});
function Tl(e) {
    return cr(qn, e);
}
const Xn = s("ZodBase64URL", (e, t) => {
    (ja.init(e, t), U.init(e, t));
});
function Al(e) {
    return ur(Xn, e);
}
const Yn = s("ZodE164", (e, t) => {
    (Oa.init(e, t), U.init(e, t));
});
function Rl(e) {
    return lr(Yn, e);
}
const Hn = s("ZodJWT", (e, t) => {
    (Na.init(e, t), U.init(e, t));
});
function Ll(e) {
    return sr(Hn, e);
}
const _e = s("ZodCustomStringFormat", (e, t) => {
    (Pa.init(e, t), U.init(e, t));
});
function Fl(e, t, i = {}) {
    return Ke(_e, e, t, i);
}
function Cl(e) {
    return Ke(_e, "hostname", So, e);
}
function Jl(e) {
    return Ke(_e, "hex", Lo, e);
}
function Ml(e, t) {
    const i = t?.enc ?? "hex",
        o = `${e}_${i}`,
        n = Zt[o];
    if (!n) throw new Error(`Unrecognized hash format: ${o}`);
    return Ke(_e, o, n, t);
}
const Ge = s("ZodNumber", (e, t) => {
    (Rt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => vu(e, o, n)),
        (e.gt = (o, n) => e.check(Q(o, n))),
        (e.gte = (o, n) => e.check(Z(o, n))),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.lt = (o, n) => e.check(H(o, n))),
        (e.lte = (o, n) => e.check(F(o, n))),
        (e.max = (o, n) => e.check(F(o, n))),
        (e.int = (o) => e.check(fn(o))),
        (e.safe = (o) => e.check(fn(o))),
        (e.positive = (o) => e.check(Q(0, o))),
        (e.nonnegative = (o) => e.check(Z(0, o))),
        (e.negative = (o) => e.check(H(0, o))),
        (e.nonpositive = (o) => e.check(F(0, o))),
        (e.multipleOf = (o, n) => e.check(fe(o, n))),
        (e.step = (o, n) => e.check(fe(o, n))),
        (e.finite = () => e));
    const i = e._zod.bag;
    ((e.minValue =
        Math.max(
            i.minimum ?? Number.NEGATIVE_INFINITY,
            i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY
        ) ?? null),
        (e.maxValue =
            Math.min(
                i.maximum ?? Number.POSITIVE_INFINITY,
                i.exclusiveMaximum ?? Number.POSITIVE_INFINITY
            ) ?? null),
        (e.isInt =
            (i.format ?? "").includes("int") ||
            Number.isSafeInteger(i.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = i.format ?? null));
});
function Sr(e) {
    return Ec(Ge, e);
}
const ue = s("ZodNumberFormat", (e, t) => {
    (Za.init(e, t), Ge.init(e, t));
});
function fn(e) {
    return Ac(ue, e);
}
function Kl(e) {
    return Rc(ue, e);
}
function Vl(e) {
    return Lc(ue, e);
}
function Bl(e) {
    return Fc(ue, e);
}
function Gl(e) {
    return Cc(ue, e);
}
const We = s("ZodBoolean", (e, t) => {
    (Lt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => gu(e, i, o)));
});
function Ir(e) {
    return Jc(We, e);
}
const qe = s("ZodBigInt", (e, t) => {
    (Ft.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => hu(e, o)),
        (e.gte = (o, n) => e.check(Z(o, n))),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.gt = (o, n) => e.check(Q(o, n))),
        (e.gte = (o, n) => e.check(Z(o, n))),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.lt = (o, n) => e.check(H(o, n))),
        (e.lte = (o, n) => e.check(F(o, n))),
        (e.max = (o, n) => e.check(F(o, n))),
        (e.positive = (o) => e.check(Q(BigInt(0), o))),
        (e.negative = (o) => e.check(H(BigInt(0), o))),
        (e.nonpositive = (o) => e.check(F(BigInt(0), o))),
        (e.nonnegative = (o) => e.check(Z(BigInt(0), o))),
        (e.multipleOf = (o, n) => e.check(fe(o, n))));
    const i = e._zod.bag;
    ((e.minValue = i.minimum ?? null),
        (e.maxValue = i.maximum ?? null),
        (e.format = i.format ?? null));
});
function Wl(e) {
    return Kc(qe, e);
}
const Qn = s("ZodBigIntFormat", (e, t) => {
    (Ea.init(e, t), qe.init(e, t));
});
function ql(e) {
    return Bc(Qn, e);
}
function Xl(e) {
    return Gc(Qn, e);
}
const zr = s("ZodSymbol", (e, t) => {
    (Ta.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => $u(e, i)));
});
function Yl(e) {
    return Wc(zr, e);
}
const wr = s("ZodUndefined", (e, t) => {
    (Aa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => bu(e, i)));
});
function Hl(e) {
    return qc(wr, e);
}
const xr = s("ZodNull", (e, t) => {
    (Ra.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => _u(e, i, o)));
});
function Ur(e) {
    return Xc(xr, e);
}
const jr = s("ZodAny", (e, t) => {
    (La.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Su()));
});
function Ql() {
    return Yc(jr);
}
const Or = s("ZodUnknown", (e, t) => {
    (Fa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Iu()));
});
function ae() {
    return Hc(Or);
}
const Dr = s("ZodNever", (e, t) => {
    (Ca.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => ku(e, i, o)));
});
function et(e) {
    return Qc(Dr, e);
}
const Nr = s("ZodVoid", (e, t) => {
    (Ja.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => yu(e, i)));
});
function es(e) {
    return eu(Nr, e);
}
const nt = s("ZodDate", (e, t) => {
    (Ma.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => zu(e, o)),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.max = (o, n) => e.check(F(o, n))));
    const i = e._zod.bag;
    ((e.minDate = i.minimum ? new Date(i.minimum) : null),
        (e.maxDate = i.maximum ? new Date(i.maximum) : null));
});
function ns(e) {
    return nu(nt, e);
}
const Pr = s("ZodArray", (e, t) => {
    (Ka.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Au(e, i, o, n)),
        (e.element = t.element),
        (e.min = (i, o) => e.check(oe(i, o))),
        (e.nonempty = (i) => e.check(oe(1, i))),
        (e.max = (i, o) => e.check(Je(i, o))),
        (e.length = (i, o) => e.check(Me(i, o))),
        (e.unwrap = () => e.element));
});
function Xe(e, t) {
    return iu(Pr, e, t);
}
function ts(e) {
    const t = e._zod.def.shape;
    return rt(Object.keys(t));
}
const Ye = s("ZodObject", (e, t) => {
    (Wa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Ru(e, i, o, n)),
        k(e, "shape", () => t.shape),
        (e.keyof = () => rt(Object.keys(e._zod.def.shape))),
        (e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: ae() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: ae() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: et() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (i) => Vi(e, i)),
        (e.safeExtend = (i) => Bi(e, i)),
        (e.merge = (i) => Gi(e, i)),
        (e.pick = (i) => Mi(e, i)),
        (e.omit = (i) => Ki(e, i)),
        (e.partial = (...i) => Wi(ot, e, i[0])),
        (e.required = (...i) => qi(at, e, i[0])));
});
function rs(e, t) {
    const i = { type: "object", shape: e ?? {}, ...f(t) };
    return new Ye(i);
}
function is(e, t) {
    return new Ye({ type: "object", shape: e, catchall: et(), ...f(t) });
}
function os(e, t) {
    return new Ye({ type: "object", shape: e, catchall: ae(), ...f(t) });
}
const He = s("ZodUnion", (e, t) => {
    (kn.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => gr(e, i, o, n)),
        (e.options = t.options));
});
function tt(e, t) {
    return new He({ type: "union", options: e, ...f(t) });
}
const Zr = s("ZodXor", (e, t) => {
    (He.init(e, t),
        qa.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => gr(e, i, o, n)),
        (e.options = t.options));
});
function as(e, t) {
    return new Zr({ type: "union", options: e, inclusive: !1, ...f(t) });
}
const Er = s("ZodDiscriminatedUnion", (e, t) => {
    (He.init(e, t), Xa.init(e, t));
});
function cs(e, t, i) {
    return new Er({ type: "union", options: t, discriminator: e, ...f(i) });
}
const Tr = s("ZodIntersection", (e, t) => {
    (Ya.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Lu(e, i, o, n)));
});
function Ar(e, t) {
    return new Tr({ type: "intersection", left: e, right: t });
}
const Rr = s("ZodTuple", (e, t) => {
    (Ct.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Fu(e, i, o, n)),
        (e.rest = (i) => e.clone({ ...e._zod.def, rest: i })));
});
function Lr(e, t, i) {
    const o = t instanceof b,
        n = o ? i : t,
        r = o ? t : null;
    return new Rr({ type: "tuple", items: e, rest: r, ...f(n) });
}
const Qe = s("ZodRecord", (e, t) => {
    (Ha.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Cu(e, i, o, n)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType));
});
function Fr(e, t, i) {
    return new Qe({ type: "record", keyType: e, valueType: t, ...f(i) });
}
function us(e, t, i) {
    const o = J(e);
    return (
        (o._zod.values = void 0),
        new Qe({ type: "record", keyType: o, valueType: t, ...f(i) })
    );
}
function ls(e, t, i) {
    return new Qe({
        type: "record",
        keyType: e,
        valueType: t,
        mode: "loose",
        ...f(i)
    });
}
const Cr = s("ZodMap", (e, t) => {
    (Qa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Eu(e, i)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType),
        (e.min = (...i) => e.check(ee(...i))),
        (e.nonempty = (i) => e.check(ee(1, i))),
        (e.max = (...i) => e.check($e(...i))),
        (e.size = (...i) => e.check(Ce(...i))));
});
function ss(e, t, i) {
    return new Cr({ type: "map", keyType: e, valueType: t, ...f(i) });
}
const Jr = s("ZodSet", (e, t) => {
    (ec.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Tu(e, i)),
        (e.min = (...i) => e.check(ee(...i))),
        (e.nonempty = (i) => e.check(ee(1, i))),
        (e.max = (...i) => e.check($e(...i))),
        (e.size = (...i) => e.check(Ce(...i))));
});
function ds(e, t) {
    return new Jr({ type: "set", valueType: e, ...f(t) });
}
const he = s("ZodEnum", (e, t) => {
    (nc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => wu(e, o, n)),
        (e.enum = t.entries),
        (e.options = Object.values(t.entries)));
    const i = new Set(Object.keys(t.entries));
    ((e.extract = (o, n) => {
        const r = {};
        for (const a of o)
            if (i.has(a)) r[a] = t.entries[a];
            else throw new Error(`Key ${a} not found in enum`);
        return new he({ ...t, checks: [], ...f(n), entries: r });
    }),
        (e.exclude = (o, n) => {
            const r = { ...t.entries };
            for (const a of o)
                if (i.has(a)) delete r[a];
                else throw new Error(`Key ${a} not found in enum`);
            return new he({ ...t, checks: [], ...f(n), entries: r });
        }));
});
function rt(e, t) {
    const i = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
    return new he({ type: "enum", entries: i, ...f(t) });
}
function ms(e, t) {
    return new he({ type: "enum", entries: e, ...f(t) });
}
const Mr = s("ZodLiteral", (e, t) => {
    (tc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => xu(e, i, o)),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, "value", {
            get() {
                if (t.values.length > 1)
                    throw new Error(
                        "This schema contains multiple valid literal values. Use `.values` instead."
                    );
                return t.values[0];
            }
        }));
});
function fs(e, t) {
    return new Mr({
        type: "literal",
        values: Array.isArray(e) ? e : [e],
        ...f(t)
    });
}
const Kr = s("ZodFile", (e, t) => {
    (rc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Ou(e, i, o)),
        (e.min = (i, o) => e.check(ee(i, o))),
        (e.max = (i, o) => e.check($e(i, o))),
        (e.mime = (i, o) => e.check(On(Array.isArray(i) ? i : [i], o))));
});
function ps(e) {
    return ou(Kr, e);
}
const Vr = s("ZodTransform", (e, t) => {
    (ic.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Zu(e, i)),
        (e._zod.parse = (i, o) => {
            if (o.direction === "backward") throw new gn(e.constructor.name);
            i.addIssue = (r) => {
                if (typeof r == "string") i.issues.push(de(r, i.value, t));
                else {
                    const a = r;
                    (a.fatal && (a.continue = !1),
                        a.code ?? (a.code = "custom"),
                        a.input ?? (a.input = i.value),
                        a.inst ?? (a.inst = e),
                        i.issues.push(de(a)));
                }
            };
            const n = t.transform(i.value, i);
            return n instanceof Promise
                ? n.then((r) => ((i.value = r), i))
                : ((i.value = n), i);
        }));
});
function it(e) {
    return new Vr({ type: "transform", transform: e });
}
const ot = s("ZodOptional", (e, t) => {
    (Jt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => hr(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function Ue(e) {
    return new ot({ type: "optional", innerType: e });
}
const Br = s("ZodExactOptional", (e, t) => {
    (oc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => hr(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function Gr(e) {
    return new Br({ type: "optional", innerType: e });
}
const Wr = s("ZodNullable", (e, t) => {
    (ac.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Ju(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function je(e) {
    return new Wr({ type: "nullable", innerType: e });
}
function vs(e) {
    return Ue(je(e));
}
const qr = s("ZodDefault", (e, t) => {
    (cc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Ku(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap));
});
function Xr(e, t) {
    return new qr({
        type: "default",
        innerType: e,
        get defaultValue() {
            return typeof t == "function" ? t() : _n(t);
        }
    });
}
const Yr = s("ZodPrefault", (e, t) => {
    (uc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Vu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function Hr(e, t) {
    return new Yr({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return typeof t == "function" ? t() : _n(t);
        }
    });
}
const at = s("ZodNonOptional", (e, t) => {
    (lc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Mu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function Qr(e, t) {
    return new at({ type: "nonoptional", innerType: e, ...f(t) });
}
const ei = s("ZodSuccess", (e, t) => {
    (sc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Du(e, i, o)),
        (e.unwrap = () => e._zod.def.innerType));
});
function gs(e) {
    return new ei({ type: "success", innerType: e });
}
const ni = s("ZodCatch", (e, t) => {
    (dc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Bu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap));
});
function ti(e, t) {
    return new ni({
        type: "catch",
        innerType: e,
        catchValue: typeof t == "function" ? t : () => t
    });
}
const ri = s("ZodNaN", (e, t) => {
    (mc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Uu(e, i)));
});
function hs(e) {
    return ru(ri, e);
}
const ct = s("ZodPipe", (e, t) => {
    (fc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Gu(e, i, o, n)),
        (e.in = t.in),
        (e.out = t.out));
});
function Oe(e, t) {
    return new ct({ type: "pipe", in: e, out: t });
}
const ut = s("ZodCodec", (e, t) => {
    (ct.init(e, t), Mt.init(e, t));
});
function $s(e, t, i) {
    return new ut({
        type: "pipe",
        in: e,
        out: t,
        transform: i.decode,
        reverseTransform: i.encode
    });
}
const ii = s("ZodReadonly", (e, t) => {
    (pc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Wu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function oi(e) {
    return new ii({ type: "readonly", innerType: e });
}
const ai = s("ZodTemplateLiteral", (e, t) => {
    (vc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => ju(e, i, o)));
});
function _s(e, t) {
    return new ai({ type: "template_literal", parts: e, ...f(t) });
}
const ci = s("ZodLazy", (e, t) => {
    ($c.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Xu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.getter()));
});
function ui(e) {
    return new ci({ type: "lazy", getter: e });
}
const li = s("ZodPromise", (e, t) => {
    (hc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => qu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType));
});
function bs(e) {
    return new li({ type: "promise", innerType: e });
}
const si = s("ZodFunction", (e, t) => {
    (gc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Pu(e, i)));
});
function pn(e) {
    return new si({
        type: "function",
        input: Array.isArray(e?.input) ? Lr(e?.input) : (e?.input ?? Xe(ae())),
        output: e?.output ?? ae()
    });
}
const en = s("ZodCustom", (e, t) => {
    (_c.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Nu(e, i)));
});
function ys(e) {
    const t = new j({ check: "custom" });
    return ((t._zod.check = e), t);
}
function ks(e, t) {
    return au(en, e ?? (() => !0), t);
}
function di(e, t = {}) {
    return cu(en, e, t);
}
function mi(e) {
    return uu(e);
}
const Ss = su,
    Is = du;
function zs(e, t = {}) {
    const i = new en({
        type: "custom",
        check: "custom",
        fn: (o) => o instanceof e,
        abort: !0,
        ...f(t)
    });
    return (
        (i._zod.bag.Class = e),
        (i._zod.check = (o) => {
            o.value instanceof e ||
                o.issues.push({
                    code: "invalid_type",
                    expected: e.name,
                    input: o.value,
                    inst: i,
                    path: [...(i._zod.def.path ?? [])]
                });
        }),
        i
    );
}
const ws = (...e) => mu({ Codec: ut, Boolean: We, String: Ve }, ...e);
function xs(e) {
    const t = ui(() => tt([mn(e), Sr(), Ir(), Ur(), Xe(t), Fr(mn(), t)]));
    return t;
}
function Us(e, t) {
    return Oe(it(e), t);
}
const np = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                ZodAny: jr,
                ZodArray: Pr,
                ZodBase64: qn,
                ZodBase64URL: Xn,
                ZodBigInt: qe,
                ZodBigIntFormat: Qn,
                ZodBoolean: We,
                ZodCIDRv4: Gn,
                ZodCIDRv6: Wn,
                ZodCUID: Fn,
                ZodCUID2: Cn,
                ZodCatch: ni,
                ZodCodec: ut,
                ZodCustom: en,
                ZodCustomStringFormat: _e,
                ZodDate: nt,
                ZodDefault: qr,
                ZodDiscriminatedUnion: Er,
                ZodE164: Yn,
                ZodEmail: An,
                ZodEmoji: Rn,
                ZodEnum: he,
                ZodExactOptional: Br,
                ZodFile: Kr,
                ZodFunction: si,
                ZodGUID: xe,
                ZodIPv4: Vn,
                ZodIPv6: Bn,
                ZodIntersection: Tr,
                ZodJWT: Hn,
                ZodKSUID: Kn,
                ZodLazy: ci,
                ZodLiteral: Mr,
                ZodMAC: kr,
                ZodMap: Cr,
                ZodNaN: ri,
                ZodNanoID: Ln,
                ZodNever: Dr,
                ZodNonOptional: at,
                ZodNull: xr,
                ZodNullable: Wr,
                ZodNumber: Ge,
                ZodNumberFormat: ue,
                ZodObject: Ye,
                ZodOptional: ot,
                ZodPipe: ct,
                ZodPrefault: Yr,
                ZodPromise: li,
                ZodReadonly: ii,
                ZodRecord: Qe,
                ZodSet: Jr,
                ZodString: Ve,
                ZodStringFormat: U,
                ZodSuccess: ei,
                ZodSymbol: zr,
                ZodTemplateLiteral: ai,
                ZodTransform: Vr,
                ZodTuple: Rr,
                ZodType: y,
                ZodULID: Jn,
                ZodURL: Be,
                ZodUUID: B,
                ZodUndefined: wr,
                ZodUnion: He,
                ZodUnknown: Or,
                ZodVoid: Nr,
                ZodXID: Mn,
                ZodXor: Zr,
                _ZodString: Tn,
                _default: Xr,
                _function: pn,
                any: Ql,
                array: Xe,
                base64: Tl,
                base64url: Al,
                bigint: Wl,
                boolean: Ir,
                catch: ti,
                check: ys,
                cidrv4: Zl,
                cidrv6: El,
                codec: $s,
                cuid: wl,
                cuid2: xl,
                custom: ks,
                date: ns,
                describe: Ss,
                discriminatedUnion: cs,
                e164: Rl,
                email: gl,
                emoji: Il,
                enum: rt,
                exactOptional: Gr,
                file: ps,
                float32: Kl,
                float64: Vl,
                function: pn,
                guid: hl,
                hash: Ml,
                hex: Jl,
                hostname: Cl,
                httpUrl: Sl,
                instanceof: zs,
                int: fn,
                int32: Bl,
                int64: ql,
                intersection: Ar,
                ipv4: Dl,
                ipv6: Pl,
                json: xs,
                jwt: Ll,
                keyof: ts,
                ksuid: Ol,
                lazy: ui,
                literal: fs,
                looseObject: os,
                looseRecord: ls,
                mac: Nl,
                map: ss,
                meta: Is,
                nan: hs,
                nanoid: zl,
                nativeEnum: ms,
                never: et,
                nonoptional: Qr,
                null: Ur,
                nullable: je,
                nullish: vs,
                number: Sr,
                object: rs,
                optional: Ue,
                partialRecord: us,
                pipe: Oe,
                prefault: Hr,
                preprocess: Us,
                promise: bs,
                readonly: oi,
                record: Fr,
                refine: di,
                set: ds,
                strictObject: is,
                string: mn,
                stringFormat: Fl,
                stringbool: ws,
                success: gs,
                superRefine: mi,
                symbol: Yl,
                templateLiteral: _s,
                transform: it,
                tuple: Lr,
                uint32: Gl,
                uint64: Xl,
                ulid: Ul,
                undefined: Hl,
                union: tt,
                unknown: ae,
                url: kl,
                uuid: $l,
                uuidv4: _l,
                uuidv6: bl,
                uuidv7: yl,
                void: es,
                xid: jl,
                xor: as
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    tp = {
        invalid_type: "invalid_type",
        too_big: "too_big",
        too_small: "too_small",
        invalid_format: "invalid_format",
        not_multiple_of: "not_multiple_of",
        unrecognized_keys: "unrecognized_keys",
        invalid_union: "invalid_union",
        invalid_key: "invalid_key",
        invalid_element: "invalid_element",
        invalid_value: "invalid_value",
        custom: "custom"
    };
function rp(e) {
    N({ customError: e });
}
function ip() {
    return N().customError;
}
var ht;
ht || (ht = {});
const h = { ...np, ...Qf, iso: tl },
    op = new Set([
        "$schema",
        "$ref",
        "$defs",
        "definitions",
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
        "type",
        "enum",
        "const",
        "anyOf",
        "oneOf",
        "allOf",
        "not",
        "properties",
        "required",
        "additionalProperties",
        "patternProperties",
        "propertyNames",
        "minProperties",
        "maxProperties",
        "items",
        "prefixItems",
        "additionalItems",
        "minItems",
        "maxItems",
        "uniqueItems",
        "contains",
        "minContains",
        "maxContains",
        "minLength",
        "maxLength",
        "pattern",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "description",
        "default",
        "contentEncoding",
        "contentMediaType",
        "contentSchema",
        "unevaluatedItems",
        "unevaluatedProperties",
        "if",
        "then",
        "else",
        "dependentSchemas",
        "dependentRequired",
        "nullable",
        "readOnly"
    ]);
function ap(e, t) {
    const i = e.$schema;
    return i === "https://json-schema.org/draft/2020-12/schema"
        ? "draft-2020-12"
        : i === "http://json-schema.org/draft-07/schema#"
          ? "draft-7"
          : i === "http://json-schema.org/draft-04/schema#"
            ? "draft-4"
            : (t ?? "draft-2020-12");
}
function cp(e, t) {
    if (!e.startsWith("#"))
        throw new Error(
            "External $ref is not supported, only local refs (#/...) are allowed"
        );
    const i = e.slice(1).split("/").filter(Boolean);
    if (i.length === 0) return t.rootSchema;
    const o = t.version === "draft-2020-12" ? "$defs" : "definitions";
    if (i[0] === o) {
        const n = i[1];
        if (!n || !t.defs[n]) throw new Error(`Reference not found: ${e}`);
        return t.defs[n];
    }
    throw new Error(`Reference not found: ${e}`);
}
function js(e, t) {
    if (e.not !== void 0) {
        if (typeof e.not == "object" && Object.keys(e.not).length === 0)
            return h.never();
        throw new Error(
            "not is not supported in Zod (except { not: {} } for never)"
        );
    }
    if (e.unevaluatedItems !== void 0)
        throw new Error("unevaluatedItems is not supported");
    if (e.unevaluatedProperties !== void 0)
        throw new Error("unevaluatedProperties is not supported");
    if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0)
        throw new Error("Conditional schemas (if/then/else) are not supported");
    if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0)
        throw new Error(
            "dependentSchemas and dependentRequired are not supported"
        );
    if (e.$ref) {
        const n = e.$ref;
        if (t.refs.has(n)) return t.refs.get(n);
        if (t.processing.has(n))
            return h.lazy(() => {
                if (!t.refs.has(n))
                    throw new Error(`Circular reference not resolved: ${n}`);
                return t.refs.get(n);
            });
        t.processing.add(n);
        const r = cp(n, t),
            a = D(r, t);
        return (t.refs.set(n, a), t.processing.delete(n), a);
    }
    if (e.enum !== void 0) {
        const n = e.enum;
        if (
            t.version === "openapi-3.0" &&
            e.nullable === !0 &&
            n.length === 1 &&
            n[0] === null
        )
            return h.null();
        if (n.length === 0) return h.never();
        if (n.length === 1) return h.literal(n[0]);
        if (n.every((a) => typeof a == "string")) return h.enum(n);
        const r = n.map((a) => h.literal(a));
        return r.length < 2 ? r[0] : h.union([r[0], r[1], ...r.slice(2)]);
    }
    if (e.const !== void 0) return h.literal(e.const);
    const i = e.type;
    if (Array.isArray(i)) {
        const n = i.map((r) => {
            const a = { ...e, type: r };
            return js(a, t);
        });
        return n.length === 0 ? h.never() : n.length === 1 ? n[0] : h.union(n);
    }
    if (!i) return h.any();
    let o;
    switch (i) {
        case "string": {
            let n = h.string();
            if (e.format) {
                const r = e.format;
                r === "email"
                    ? (n = n.check(h.email()))
                    : r === "uri" || r === "uri-reference"
                      ? (n = n.check(h.url()))
                      : r === "uuid" || r === "guid"
                        ? (n = n.check(h.uuid()))
                        : r === "date-time"
                          ? (n = n.check(h.iso.datetime()))
                          : r === "date"
                            ? (n = n.check(h.iso.date()))
                            : r === "time"
                              ? (n = n.check(h.iso.time()))
                              : r === "duration"
                                ? (n = n.check(h.iso.duration()))
                                : r === "ipv4"
                                  ? (n = n.check(h.ipv4()))
                                  : r === "ipv6"
                                    ? (n = n.check(h.ipv6()))
                                    : r === "mac"
                                      ? (n = n.check(h.mac()))
                                      : r === "cidr"
                                        ? (n = n.check(h.cidrv4()))
                                        : r === "cidr-v6"
                                          ? (n = n.check(h.cidrv6()))
                                          : r === "base64"
                                            ? (n = n.check(h.base64()))
                                            : r === "base64url"
                                              ? (n = n.check(h.base64url()))
                                              : r === "e164"
                                                ? (n = n.check(h.e164()))
                                                : r === "jwt"
                                                  ? (n = n.check(h.jwt()))
                                                  : r === "emoji"
                                                    ? (n = n.check(h.emoji()))
                                                    : r === "nanoid"
                                                      ? (n = n.check(
                                                            h.nanoid()
                                                        ))
                                                      : r === "cuid"
                                                        ? (n = n.check(
                                                              h.cuid()
                                                          ))
                                                        : r === "cuid2"
                                                          ? (n = n.check(
                                                                h.cuid2()
                                                            ))
                                                          : r === "ulid"
                                                            ? (n = n.check(
                                                                  h.ulid()
                                                              ))
                                                            : r === "xid"
                                                              ? (n = n.check(
                                                                    h.xid()
                                                                ))
                                                              : r === "ksuid" &&
                                                                (n = n.check(
                                                                    h.ksuid()
                                                                ));
            }
            (typeof e.minLength == "number" && (n = n.min(e.minLength)),
                typeof e.maxLength == "number" && (n = n.max(e.maxLength)),
                e.pattern && (n = n.regex(new RegExp(e.pattern))),
                (o = n));
            break;
        }
        case "number":
        case "integer": {
            let n = i === "integer" ? h.number().int() : h.number();
            (typeof e.minimum == "number" && (n = n.min(e.minimum)),
                typeof e.maximum == "number" && (n = n.max(e.maximum)),
                typeof e.exclusiveMinimum == "number"
                    ? (n = n.gt(e.exclusiveMinimum))
                    : e.exclusiveMinimum === !0 &&
                      typeof e.minimum == "number" &&
                      (n = n.gt(e.minimum)),
                typeof e.exclusiveMaximum == "number"
                    ? (n = n.lt(e.exclusiveMaximum))
                    : e.exclusiveMaximum === !0 &&
                      typeof e.maximum == "number" &&
                      (n = n.lt(e.maximum)),
                typeof e.multipleOf == "number" &&
                    (n = n.multipleOf(e.multipleOf)),
                (o = n));
            break;
        }
        case "boolean": {
            o = h.boolean();
            break;
        }
        case "null": {
            o = h.null();
            break;
        }
        case "object": {
            const n = {},
                r = e.properties || {},
                a = new Set(e.required || []);
            for (const [l, u] of Object.entries(r)) {
                const d = D(u, t);
                n[l] = a.has(l) ? d : d.optional();
            }
            if (e.propertyNames) {
                const l = D(e.propertyNames, t),
                    u =
                        e.additionalProperties &&
                        typeof e.additionalProperties == "object"
                            ? D(e.additionalProperties, t)
                            : h.any();
                if (Object.keys(n).length === 0) {
                    o = h.record(l, u);
                    break;
                }
                const d = h.object(n).passthrough(),
                    m = h.looseRecord(l, u);
                o = h.intersection(d, m);
                break;
            }
            if (e.patternProperties) {
                const l = e.patternProperties,
                    u = Object.keys(l),
                    d = [];
                for (const v of u) {
                    const g = D(l[v], t),
                        S = h.string().regex(new RegExp(v));
                    d.push(h.looseRecord(S, g));
                }
                const m = [];
                if (
                    (Object.keys(n).length > 0 &&
                        m.push(h.object(n).passthrough()),
                    m.push(...d),
                    m.length === 0)
                )
                    o = h.object({}).passthrough();
                else if (m.length === 1) o = m[0];
                else {
                    let v = h.intersection(m[0], m[1]);
                    for (let g = 2; g < m.length; g++)
                        v = h.intersection(v, m[g]);
                    o = v;
                }
                break;
            }
            const c = h.object(n);
            e.additionalProperties === !1
                ? (o = c.strict())
                : typeof e.additionalProperties == "object"
                  ? (o = c.catchall(D(e.additionalProperties, t)))
                  : (o = c.passthrough());
            break;
        }
        case "array": {
            const n = e.prefixItems,
                r = e.items;
            if (n && Array.isArray(n)) {
                const a = n.map((l) => D(l, t)),
                    c =
                        r && typeof r == "object" && !Array.isArray(r)
                            ? D(r, t)
                            : void 0;
                (c ? (o = h.tuple(a).rest(c)) : (o = h.tuple(a)),
                    typeof e.minItems == "number" &&
                        (o = o.check(h.minLength(e.minItems))),
                    typeof e.maxItems == "number" &&
                        (o = o.check(h.maxLength(e.maxItems))));
            } else if (Array.isArray(r)) {
                const a = r.map((l) => D(l, t)),
                    c =
                        e.additionalItems &&
                        typeof e.additionalItems == "object"
                            ? D(e.additionalItems, t)
                            : void 0;
                (c ? (o = h.tuple(a).rest(c)) : (o = h.tuple(a)),
                    typeof e.minItems == "number" &&
                        (o = o.check(h.minLength(e.minItems))),
                    typeof e.maxItems == "number" &&
                        (o = o.check(h.maxLength(e.maxItems))));
            } else if (r !== void 0) {
                const a = D(r, t);
                let c = h.array(a);
                (typeof e.minItems == "number" && (c = c.min(e.minItems)),
                    typeof e.maxItems == "number" && (c = c.max(e.maxItems)),
                    (o = c));
            } else o = h.array(h.any());
            break;
        }
        default:
            throw new Error(`Unsupported type: ${i}`);
    }
    return (
        e.description && (o = o.describe(e.description)),
        e.default !== void 0 && (o = o.default(e.default)),
        o
    );
}
function D(e, t) {
    if (typeof e == "boolean") return e ? h.any() : h.never();
    let i = js(e, t);
    const o = e.type || e.enum !== void 0 || e.const !== void 0;
    if (e.anyOf && Array.isArray(e.anyOf)) {
        const c = e.anyOf.map((u) => D(u, t)),
            l = h.union(c);
        i = o ? h.intersection(i, l) : l;
    }
    if (e.oneOf && Array.isArray(e.oneOf)) {
        const c = e.oneOf.map((u) => D(u, t)),
            l = h.xor(c);
        i = o ? h.intersection(i, l) : l;
    }
    if (e.allOf && Array.isArray(e.allOf))
        if (e.allOf.length === 0) i = o ? i : h.any();
        else {
            let c = o ? i : D(e.allOf[0], t);
            const l = o ? 0 : 1;
            for (let u = l; u < e.allOf.length; u++)
                c = h.intersection(c, D(e.allOf[u], t));
            i = c;
        }
    (e.nullable === !0 && t.version === "openapi-3.0" && (i = h.nullable(i)),
        e.readOnly === !0 && (i = h.readonly(i)));
    const n = {},
        r = [
            "$id",
            "id",
            "$comment",
            "$anchor",
            "$vocabulary",
            "$dynamicRef",
            "$dynamicAnchor"
        ];
    for (const c of r) c in e && (n[c] = e[c]);
    const a = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (const c of a) c in e && (n[c] = e[c]);
    for (const c of Object.keys(e)) op.has(c) || (n[c] = e[c]);
    return (Object.keys(n).length > 0 && t.registry.add(i, n), i);
}
function up(e, t) {
    if (typeof e == "boolean") return e ? h.any() : h.never();
    const i = ap(e, t?.defaultTarget),
        o = e.$defs || e.definitions || {},
        n = {
            version: i,
            defs: o,
            refs: new Map(),
            processing: new Set(),
            rootSchema: e,
            registry: t?.registry ?? L
        };
    return D(e, n);
}
function lp(e) {
    return Uc(Ve, e);
}
function sp(e) {
    return Tc(Ge, e);
}
function dp(e) {
    return Mc(We, e);
}
function mp(e) {
    return Vc(qe, e);
}
function fp(e) {
    return tu(nt, e);
}
const pp = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            bigint: mp,
            boolean: dp,
            date: fp,
            number: sp,
            string: lp
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
N(bc());
const z = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                $brand: Ei,
                $input: zc,
                $output: Ic,
                NEVER: Zi,
                TimePrecision: Oc,
                ZodAny: jr,
                ZodArray: Pr,
                ZodBase64: qn,
                ZodBase64URL: Xn,
                ZodBigInt: qe,
                ZodBigIntFormat: Qn,
                ZodBoolean: We,
                ZodCIDRv4: Gn,
                ZodCIDRv6: Wn,
                ZodCUID: Fn,
                ZodCUID2: Cn,
                ZodCatch: ni,
                ZodCodec: ut,
                ZodCustom: en,
                ZodCustomStringFormat: _e,
                ZodDate: nt,
                ZodDefault: qr,
                ZodDiscriminatedUnion: Er,
                ZodE164: Yn,
                ZodEmail: An,
                ZodEmoji: Rn,
                ZodEnum: he,
                ZodError: ep,
                ZodExactOptional: Br,
                ZodFile: Kr,
                get ZodFirstPartyTypeKind() {
                    return ht;
                },
                ZodFunction: si,
                ZodGUID: xe,
                ZodIPv4: Vn,
                ZodIPv6: Bn,
                ZodISODate: _r,
                ZodISODateTime: $r,
                ZodISODuration: yr,
                ZodISOTime: br,
                ZodIntersection: Tr,
                ZodIssueCode: tp,
                ZodJWT: Hn,
                ZodKSUID: Kn,
                ZodLazy: ci,
                ZodLiteral: Mr,
                ZodMAC: kr,
                ZodMap: Cr,
                ZodNaN: ri,
                ZodNanoID: Ln,
                ZodNever: Dr,
                ZodNonOptional: at,
                ZodNull: xr,
                ZodNullable: Wr,
                ZodNumber: Ge,
                ZodNumberFormat: ue,
                ZodObject: Ye,
                ZodOptional: ot,
                ZodPipe: ct,
                ZodPrefault: Yr,
                ZodPromise: li,
                ZodReadonly: ii,
                ZodRealError: A,
                ZodRecord: Qe,
                ZodSet: Jr,
                ZodString: Ve,
                ZodStringFormat: U,
                ZodSuccess: ei,
                ZodSymbol: zr,
                ZodTemplateLiteral: ai,
                ZodTransform: Vr,
                ZodTuple: Rr,
                ZodType: y,
                ZodULID: Jn,
                ZodURL: Be,
                ZodUUID: B,
                ZodUndefined: wr,
                ZodUnion: He,
                ZodUnknown: Or,
                ZodVoid: Nr,
                ZodXID: Mn,
                ZodXor: Zr,
                _ZodString: Tn,
                _default: Xr,
                _function: pn,
                any: Ql,
                array: Xe,
                base64: Tl,
                base64url: Al,
                bigint: Wl,
                boolean: Ir,
                catch: ti,
                check: ys,
                cidrv4: Zl,
                cidrv6: El,
                clone: J,
                codec: $s,
                coerce: pp,
                config: N,
                core: Hf,
                cuid: wl,
                cuid2: xl,
                custom: ks,
                date: ns,
                decode: ll,
                decodeAsync: dl,
                describe: Ss,
                discriminatedUnion: cs,
                e164: Rl,
                email: gl,
                emoji: Il,
                encode: ul,
                encodeAsync: sl,
                endsWith: jn,
                enum: rt,
                exactOptional: Gr,
                file: ps,
                flattenError: kt,
                float32: Kl,
                float64: Vl,
                formatError: St,
                fromJSONSchema: up,
                function: pn,
                getErrorMap: ip,
                globalRegistry: L,
                gt: Q,
                gte: Z,
                guid: hl,
                hash: Ml,
                hex: Jl,
                hostname: Cl,
                httpUrl: Sl,
                includes: xn,
                instanceof: zs,
                int: fn,
                int32: Bl,
                int64: ql,
                intersection: Ar,
                ipv4: Dl,
                ipv6: Pl,
                iso: tl,
                json: xs,
                jwt: Ll,
                keyof: ts,
                ksuid: Ol,
                lazy: ui,
                length: Me,
                literal: fs,
                locales: Sc,
                looseObject: os,
                looseRecord: ls,
                lowercase: zn,
                lt: H,
                lte: F,
                mac: Nl,
                map: ss,
                maxLength: Je,
                maxSize: $e,
                meta: Is,
                mime: On,
                minLength: oe,
                minSize: ee,
                multipleOf: fe,
                nan: hs,
                nanoid: zl,
                nativeEnum: ms,
                negative: mr,
                never: et,
                nonnegative: pr,
                nonoptional: Qr,
                nonpositive: fr,
                normalize: Dn,
                null: Ur,
                nullable: je,
                nullish: vs,
                number: Sr,
                object: rs,
                optional: Ue,
                overwrite: X,
                parse: il,
                parseAsync: ol,
                partialRecord: us,
                pipe: Oe,
                positive: dr,
                prefault: Hr,
                preprocess: Us,
                prettifyError: to,
                promise: bs,
                property: vr,
                readonly: oi,
                record: Fr,
                refine: di,
                regex: In,
                regexes: Zt,
                registry: Kt,
                safeDecode: fl,
                safeDecodeAsync: vl,
                safeEncode: ml,
                safeEncodeAsync: pl,
                safeParse: al,
                safeParseAsync: cl,
                set: ds,
                setErrorMap: rp,
                size: Ce,
                slugify: En,
                startsWith: Un,
                strictObject: is,
                string: mn,
                stringFormat: Fl,
                stringbool: ws,
                success: gs,
                superRefine: mi,
                symbol: Yl,
                templateLiteral: _s,
                toJSONSchema: Yu,
                toLowerCase: Pn,
                toUpperCase: Zn,
                transform: it,
                treeifyError: eo,
                trim: Nn,
                tuple: Lr,
                uint32: Gl,
                uint64: Xl,
                ulid: Ul,
                undefined: Hl,
                union: tt,
                unknown: ae,
                uppercase: wn,
                url: kl,
                util: Hi,
                uuid: $l,
                uuidv4: _l,
                uuidv6: bl,
                uuidv7: yl,
                void: es,
                xid: jl,
                xor: as
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    vp = z.array(
        z
            .object({
                id: z.string(),
                name: z.string(),
                alternate_names: z.array(z.string()),
                species: z.string(),
                gender: z.enum(["male", "female", ""]),
                house: z.string(),
                dateOfBirth: z.string().nullable(),
                yearOfBirth: z.number().nullable(),
                wizard: z.boolean(),
                ancestry: z.string(),
                eyeColour: z.string(),
                hairColour: z.string(),
                wand: z.object({
                    wood: z.string(),
                    core: z.string(),
                    length: z.number().nullable()
                }),
                patronus: z.string(),
                hogwartsStudent: z.boolean(),
                hogwartsStaff: z.boolean(),
                actor: z.string(),
                alternate_actors: z.array(z.string()),
                alive: z.boolean(),
                image: z.string()
            })
            .strict()
    );
function gp(e) {
    const { optionConversion: t } = vn;
    return t(e);
}
const hp = function () {
    const e = Ns();
    return { apiKey: gp(e.public.NUXT_PUBLIC_API_KEY) };
};
function $p(e) {
    const { createOk: t } = _t,
        { optionConversion: i, createSome: o } = vn,
        n = e
            .filter((r) => r.image !== "")
            .map((r) => {
                const {
                    alternate_names: a,
                    alternate_actors: c,
                    dateOfBirth: l,
                    yearOfBirth: u,
                    wand: d,
                    ...m
                } = r;
                return {
                    ...m,
                    alternateNames: a,
                    alternateActors: c,
                    dateOfBirth: i(l),
                    yearOfBirth: i(u),
                    wand: { wood: d.wood, core: d.core, length: i(d.length) }
                };
            });
    return t(o(n));
}
const fi = (function () {
        return {
            httpErrorStatusResponse: {
                notFound: 404,
                internalServerError: 500,
                forbidden: 403,
                badRequest: 400
            },
            httpCustomStatusScheme: {
                returnNotFoundAPIUrl: 4041,
                returnNoPermission: 4031,
                returnBadRequest: 4001,
                returnInternalServerError: 5001
            },
            httpErrorMessage: {
                returnNotFoundAPIUrl: "APIのURLが見つかりません",
                returnNoPermission: "権限がありません",
                returnBadRequest: "不正なリクエストです",
                returnInternalServerError: "サーバーエラーです"
            }
        };
    })(),
    _p = (function () {
        const e = fi,
            t = ({ status: a, message: c }) => ({
                type: "httpError",
                status: a,
                message: c
            }),
            i = (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnNotFoundAPIUrl,
                    message: e.httpErrorMessage.returnNotFoundAPIUrl
                });
            })(),
            o = (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnNoPermission,
                    message: e.httpErrorMessage.returnNoPermission
                });
            })(),
            n = (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnBadRequest,
                    message: e.httpErrorMessage.returnBadRequest
                });
            })();
        return {
            returnInternalServerError: (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnInternalServerError,
                    message: e.httpErrorMessage.returnInternalServerError
                });
            })(),
            returnNotFoundAPIUrl: i,
            returnNoPermission: o,
            returnBadRequest: n
        };
    })(),
    bp = (function () {
        const {
                httpCustomStatusScheme: e,
                httpErrorStatusResponse: t,
                httpErrorMessage: i
            } = fi,
            o = {
                ...e,
                returnNotSetAPIUrl: 4040,
                returnSchemeError: 5e3,
                returnParseError: 8e3,
                returnFetchFunctionError: 9e3,
                returnUnknownError: 9999
            },
            n = {
                ...i,
                returnNotSetAPIUrl: "APIのURLが設定されていません",
                returnSchemeError: "スキームエラーが発生しました",
                returnParseError: "データのパースに失敗しました",
                returnFetchFunctionError: "フェッチ関数でエラーが発生しました",
                returnUnknownError: "不明なエラーが発生しました"
            };
        return {
            httpErrorStatusResponse: t,
            fetcherErrorStatusScheme: o,
            fetchErrorMessage: n
        };
    })(),
    yp = (function () {
        const {
                returnBadRequest: e,
                returnNoPermission: t,
                returnNotFoundAPIUrl: i,
                returnInternalServerError: o
            } = _p,
            {
                fetchErrorMessage: n,
                fetcherErrorStatusScheme: r,
                httpErrorStatusResponse: a
            } = bp,
            c = ({ status: g, errorMessage: S }) => ({
                type: "fetcherError",
                status: g,
                message: S
            }),
            l = (function () {
                return c({
                    status: r.returnNotSetAPIUrl,
                    errorMessage: n.returnNotSetAPIUrl
                });
            })(),
            u = (function () {
                return c({
                    status: r.returnSchemeError,
                    errorMessage: n.returnSchemeError
                });
            })(),
            d = (function () {
                return c({
                    status: r.returnParseError,
                    errorMessage: n.returnParseError
                });
            })(),
            m = (function () {
                return c({
                    status: r.returnFetchFunctionError,
                    errorMessage: n.returnFetchFunctionError
                });
            })(),
            v = (function () {
                return c({
                    status: r.returnUnknownError,
                    errorMessage: n.returnUnknownError
                });
            })();
        return {
            httpErrorStatusResponse: a,
            returnNoPermission: t,
            returnNotFoundAPIUrl: i,
            returnBadRequest: e,
            returnUnknownError: v,
            returnNotSetApiUrl: l,
            returnSchemeError: u,
            returnParseError: d,
            returnFetchFunctionError: m,
            returnInternalServerError: o
        };
    })();
async function kp({ url: e, scheme: t, cache: i }) {
    const {
            notFound: o,
            forbidden: n,
            badRequest: r,
            internalServerError: a
        } = fi.httpErrorStatusResponse,
        {
            returnNotSetApiUrl: c,
            returnNotFoundAPIUrl: l,
            returnNoPermission: u,
            returnBadRequest: d,
            returnSchemeError: m,
            returnUnknownError: v,
            returnFetchFunctionError: g,
            returnInternalServerError: S
        } = yp,
        { createNone: I, createSome: Y } = vn,
        { createNg: W, createOk: nn, checkPromiseReturn: R } = _t;
    if (e.isNone) return W(c);
    const O = await R({ fn: () => fetch(e.value, { cache: i }), err: g });
    if (O.isErr) return O;
    if (!O.value.ok)
        switch (O.value.status) {
            case o:
                return W(l);
            case n:
                return W(u);
            case r:
                return W(d);
            case a:
                return W(S);
            default:
                return W(v);
        }
    const E = await O.value.json(),
        lt = t.safeParse(E);
    if (lt.error !== void 0) return W(m);
    const be = lt.data;
    return be == null ? nn(I()) : nn(Y(be));
}
async function Sp({ url: e, scheme: t, cache: i, parse: o }) {
    const { createOk: n } = _t,
        { createNone: r } = vn,
        a = await kp({ url: e, scheme: t, cache: i });
    return a.isErr ? a : a.value.isNone ? n(r()) : o(a.value.value);
}
async function Ip(e) {
    return await Sp({ url: hp().apiKey, scheme: vp, cache: e, parse: $p });
}
const zp = De({
        __name: "force-cache-characters",
        async setup(e) {
            let t, i;
            const o =
                (([t, i] = Ps(() => Ip("force-cache"))), (t = await t), i(), t);
            return (n, r) => (
                V(),
                ze(
                    M(Js),
                    {
                        title: M(Zs).app.noStoreCharacter.title,
                        characterList: M(o)
                    },
                    null,
                    8,
                    ["title", "characterList"]
                )
            );
        }
    }),
    jp = De({
        __name: "force-cache-characters",
        setup(e) {
            return (t, i) => (V(), ze(zp));
        }
    });
export { jp as default };
