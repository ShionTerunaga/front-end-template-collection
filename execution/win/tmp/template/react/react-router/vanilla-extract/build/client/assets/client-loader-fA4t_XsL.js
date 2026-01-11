import { p as st, x as ys, w as ks } from './chunk-WWGJGFF6-DYiR-IbF.js'
import { C as Ss } from './card-layout-Bvh3wAG5.js'
import { j as zs } from './ja-C0CTg_GC.js'
const Ii = Object.freeze({ status: 'aborted' })
function d(e, t, i) {
    function o(c, l) {
        if (
            (c._zod ||
                Object.defineProperty(c, '_zod', {
                    value: { def: l, constr: a, traits: new Set() },
                    enumerable: !1,
                }),
            c._zod.traits.has(e))
        )
            return
        ;(c._zod.traits.add(e), t(c, l))
        const u = a.prototype,
            s = Object.keys(u)
        for (let m = 0; m < s.length; m++) {
            const v = s[m]
            v in c || (c[v] = u[v].bind(c))
        }
    }
    const n = i?.Parent ?? Object
    class r extends n {}
    Object.defineProperty(r, 'name', { value: e })
    function a(c) {
        var l
        const u = i?.Parent ? new r() : this
        ;(o(u, c), (l = u._zod).deferred ?? (l.deferred = []))
        for (const s of u._zod.deferred) s()
        return u
    }
    return (
        Object.defineProperty(a, 'init', { value: o }),
        Object.defineProperty(a, Symbol.hasInstance, {
            value: (c) =>
                i?.Parent && c instanceof i.Parent
                    ? !0
                    : c?._zod?.traits?.has(e),
        }),
        Object.defineProperty(a, 'name', { value: e }),
        a
    )
}
const wi = Symbol('zod_brand')
class ne extends Error {
    constructor() {
        super(
            'Encountered Promise during synchronous parse. Use .parseAsync() instead.',
        )
    }
}
class sn extends Error {
    constructor(t) {
        ;(super(`Encountered unidirectional transform during encode: ${t}`),
            (this.name = 'ZodEncodeError'))
    }
}
const nn = {}
function N(e) {
    return (e && Object.assign(nn, e), nn)
}
function Is(e) {
    return e
}
function ws(e) {
    return e
}
function xs(e) {}
function Us(e) {
    throw new Error('Unexpected value in exhaustive check')
}
function js(e) {}
function dt(e) {
    const t = Object.values(e).filter((o) => typeof o == 'number')
    return Object.entries(e)
        .filter(([o, n]) => t.indexOf(+o) === -1)
        .map(([o, n]) => n)
}
function p(e, t = '|') {
    return e.map((i) => $(i)).join(t)
}
function tn(e, t) {
    return typeof t == 'bigint' ? t.toString() : t
}
function we(e) {
    return {
        get value() {
            {
                const t = e()
                return (Object.defineProperty(this, 'value', { value: t }), t)
            }
        },
    }
}
function oe(e) {
    return e == null
}
function dn(e) {
    const t = e.startsWith('^') ? 1 : 0,
        i = e.endsWith('$') ? e.length - 1 : e.length
    return e.slice(t, i)
}
function xi(e, t) {
    const i = (e.toString().split('.')[1] || '').length,
        o = t.toString()
    let n = (o.split('.')[1] || '').length
    if (n === 0 && /\d?e-\d?/.test(o)) {
        const l = o.match(/\d?e-(\d?)/)
        l?.[1] && (n = Number.parseInt(l[1]))
    }
    const r = i > n ? i : n,
        a = Number.parseInt(e.toFixed(r).replace('.', '')),
        c = Number.parseInt(t.toFixed(r).replace('.', ''))
    return (a % c) / 10 ** r
}
const ci = Symbol('evaluating')
function k(e, t, i) {
    let o
    Object.defineProperty(e, t, {
        get() {
            if (o !== ci) return (o === void 0 && ((o = ci), (o = i())), o)
        },
        set(n) {
            Object.defineProperty(e, t, { value: n })
        },
        configurable: !0,
    })
}
function Os(e) {
    return Object.create(
        Object.getPrototypeOf(e),
        Object.getOwnPropertyDescriptors(e),
    )
}
function Q(e, t, i) {
    Object.defineProperty(e, t, {
        value: i,
        writable: !0,
        enumerable: !0,
        configurable: !0,
    })
}
function V(...e) {
    const t = {}
    for (const i of e) {
        const o = Object.getOwnPropertyDescriptors(i)
        Object.assign(t, o)
    }
    return Object.defineProperties({}, t)
}
function Ds(e) {
    return V(e._zod.def)
}
function Ns(e, t) {
    return t ? t.reduce((i, o) => i?.[o], e) : e
}
function Ps(e) {
    const t = Object.keys(e),
        i = t.map((o) => e[o])
    return Promise.all(i).then((o) => {
        const n = {}
        for (let r = 0; r < t.length; r++) n[t[r]] = o[r]
        return n
    })
}
function Zs(e = 10) {
    const t = 'abcdefghijklmnopqrstuvwxyz'
    let i = ''
    for (let o = 0; o < e; o++) i += t[Math.floor(Math.random() * t.length)]
    return i
}
function it(e) {
    return JSON.stringify(e)
}
function Ui(e) {
    return e
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}
const mt = 'captureStackTrace' in Error ? Error.captureStackTrace : (...e) => {}
function ue(e) {
    return typeof e == 'object' && e !== null && !Array.isArray(e)
}
const ji = we(() => {
    if (typeof navigator < 'u' && navigator?.userAgent?.includes('Cloudflare'))
        return !1
    try {
        const e = Function
        return (new e(''), !0)
    } catch {
        return !1
    }
})
function te(e) {
    if (ue(e) === !1) return !1
    const t = e.constructor
    if (t === void 0 || typeof t != 'function') return !0
    const i = t.prototype
    return !(
        ue(i) === !1 ||
        Object.prototype.hasOwnProperty.call(i, 'isPrototypeOf') === !1
    )
}
function mn(e) {
    return te(e) ? { ...e } : Array.isArray(e) ? [...e] : e
}
function Ts(e) {
    let t = 0
    for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && t++
    return t
}
const Es = (e) => {
        const t = typeof e
        switch (t) {
            case 'undefined':
                return 'undefined'
            case 'string':
                return 'string'
            case 'number':
                return Number.isNaN(e) ? 'nan' : 'number'
            case 'boolean':
                return 'boolean'
            case 'function':
                return 'function'
            case 'bigint':
                return 'bigint'
            case 'symbol':
                return 'symbol'
            case 'object':
                return Array.isArray(e)
                    ? 'array'
                    : e === null
                      ? 'null'
                      : e.then &&
                          typeof e.then == 'function' &&
                          e.catch &&
                          typeof e.catch == 'function'
                        ? 'promise'
                        : typeof Map < 'u' && e instanceof Map
                          ? 'map'
                          : typeof Set < 'u' && e instanceof Set
                            ? 'set'
                            : typeof Date < 'u' && e instanceof Date
                              ? 'date'
                              : typeof File < 'u' && e instanceof File
                                ? 'file'
                                : 'object'
            default:
                throw new Error(`Unknown data type: ${t}`)
        }
    },
    rn = new Set(['string', 'number', 'symbol']),
    Oi = new Set([
        'string',
        'number',
        'bigint',
        'boolean',
        'symbol',
        'undefined',
    ])
function B(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function J(e, t, i) {
    const o = new e._zod.constr(t ?? e._zod.def)
    return ((!t || i?.parent) && (o._zod.parent = e), o)
}
function f(e) {
    const t = e
    if (!t) return {}
    if (typeof t == 'string') return { error: () => t }
    if (t?.message !== void 0) {
        if (t?.error !== void 0)
            throw new Error('Cannot specify both `message` and `error` params')
        t.error = t.message
    }
    return (
        delete t.message,
        typeof t.error == 'string' ? { ...t, error: () => t.error } : t
    )
}
function As(e) {
    let t
    return new Proxy(
        {},
        {
            get(i, o, n) {
                return (t ?? (t = e()), Reflect.get(t, o, n))
            },
            set(i, o, n, r) {
                return (t ?? (t = e()), Reflect.set(t, o, n, r))
            },
            has(i, o) {
                return (t ?? (t = e()), Reflect.has(t, o))
            },
            deleteProperty(i, o) {
                return (t ?? (t = e()), Reflect.deleteProperty(t, o))
            },
            ownKeys(i) {
                return (t ?? (t = e()), Reflect.ownKeys(t))
            },
            getOwnPropertyDescriptor(i, o) {
                return (t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, o))
            },
            defineProperty(i, o, n) {
                return (t ?? (t = e()), Reflect.defineProperty(t, o, n))
            },
        },
    )
}
function $(e) {
    return typeof e == 'bigint'
        ? e.toString() + 'n'
        : typeof e == 'string'
          ? `"${e}"`
          : `${e}`
}
function Di(e) {
    return Object.keys(e).filter(
        (t) =>
            e[t]._zod.optin === 'optional' && e[t]._zod.optout === 'optional',
    )
}
const Ni = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    Pi = {
        int64: [BigInt('-9223372036854775808'), BigInt('9223372036854775807')],
        uint64: [BigInt(0), BigInt('18446744073709551615')],
    }
function Zi(e, t) {
    const i = e._zod.def,
        o = i.checks
    if (o && o.length > 0)
        throw new Error(
            '.pick() cannot be used on object schemas containing refinements',
        )
    const r = V(e._zod.def, {
        get shape() {
            const a = {}
            for (const c in t) {
                if (!(c in i.shape)) throw new Error(`Unrecognized key: "${c}"`)
                t[c] && (a[c] = i.shape[c])
            }
            return (Q(this, 'shape', a), a)
        },
        checks: [],
    })
    return J(e, r)
}
function Ti(e, t) {
    const i = e._zod.def,
        o = i.checks
    if (o && o.length > 0)
        throw new Error(
            '.omit() cannot be used on object schemas containing refinements',
        )
    const r = V(e._zod.def, {
        get shape() {
            const a = { ...e._zod.def.shape }
            for (const c in t) {
                if (!(c in i.shape)) throw new Error(`Unrecognized key: "${c}"`)
                t[c] && delete a[c]
            }
            return (Q(this, 'shape', a), a)
        },
        checks: [],
    })
    return J(e, r)
}
function Ei(e, t) {
    if (!te(t))
        throw new Error('Invalid input to extend: expected a plain object')
    const i = e._zod.def.checks
    if (i && i.length > 0) {
        const r = e._zod.def.shape
        for (const a in t)
            if (Object.getOwnPropertyDescriptor(r, a) !== void 0)
                throw new Error(
                    'Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.',
                )
    }
    const n = V(e._zod.def, {
        get shape() {
            const r = { ...e._zod.def.shape, ...t }
            return (Q(this, 'shape', r), r)
        },
    })
    return J(e, n)
}
function Ai(e, t) {
    if (!te(t))
        throw new Error('Invalid input to safeExtend: expected a plain object')
    const i = V(e._zod.def, {
        get shape() {
            const o = { ...e._zod.def.shape, ...t }
            return (Q(this, 'shape', o), o)
        },
    })
    return J(e, i)
}
function Ri(e, t) {
    const i = V(e._zod.def, {
        get shape() {
            const o = { ...e._zod.def.shape, ...t._zod.def.shape }
            return (Q(this, 'shape', o), o)
        },
        get catchall() {
            return t._zod.def.catchall
        },
        checks: [],
    })
    return J(e, i)
}
function Fi(e, t, i) {
    const n = t._zod.def.checks
    if (n && n.length > 0)
        throw new Error(
            '.partial() cannot be used on object schemas containing refinements',
        )
    const a = V(t._zod.def, {
        get shape() {
            const c = t._zod.def.shape,
                l = { ...c }
            if (i)
                for (const u in i) {
                    if (!(u in c)) throw new Error(`Unrecognized key: "${u}"`)
                    i[u] &&
                        (l[u] = e
                            ? new e({ type: 'optional', innerType: c[u] })
                            : c[u])
                }
            else
                for (const u in c)
                    l[u] = e
                        ? new e({ type: 'optional', innerType: c[u] })
                        : c[u]
            return (Q(this, 'shape', l), l)
        },
        checks: [],
    })
    return J(t, a)
}
function Li(e, t, i) {
    const o = V(t._zod.def, {
        get shape() {
            const n = t._zod.def.shape,
                r = { ...n }
            if (i)
                for (const a in i) {
                    if (!(a in r)) throw new Error(`Unrecognized key: "${a}"`)
                    i[a] &&
                        (r[a] = new e({ type: 'nonoptional', innerType: n[a] }))
                }
            else
                for (const a in n)
                    r[a] = new e({ type: 'nonoptional', innerType: n[a] })
            return (Q(this, 'shape', r), r)
        },
    })
    return J(t, o)
}
function ee(e, t = 0) {
    if (e.aborted === !0) return !0
    for (let i = t; i < e.issues.length; i++)
        if (e.issues[i]?.continue !== !0) return !0
    return !1
}
function M(e, t) {
    return t.map((i) => {
        var o
        return ((o = i).path ?? (o.path = []), i.path.unshift(e), i)
    })
}
function be(e) {
    return typeof e == 'string' ? e : e?.message
}
function C(e, t, i) {
    const o = { ...e, path: e.path ?? [] }
    if (!e.message) {
        const n =
            be(e.inst?._zod.def?.error?.(e)) ??
            be(t?.error?.(e)) ??
            be(i.customError?.(e)) ??
            be(i.localeError?.(e)) ??
            'Invalid input'
        o.message = n
    }
    return (
        delete o.inst,
        delete o.continue,
        t?.reportInput || delete o.input,
        o
    )
}
function fn(e) {
    return e instanceof Set
        ? 'set'
        : e instanceof Map
          ? 'map'
          : e instanceof File
            ? 'file'
            : 'unknown'
}
function pn(e) {
    return Array.isArray(e)
        ? 'array'
        : typeof e == 'string'
          ? 'string'
          : 'unknown'
}
function _(e) {
    const t = typeof e
    switch (t) {
        case 'number':
            return Number.isNaN(e) ? 'nan' : 'number'
        case 'object': {
            if (e === null) return 'null'
            if (Array.isArray(e)) return 'array'
            const i = e
            if (
                i &&
                Object.getPrototypeOf(i) !== Object.prototype &&
                'constructor' in i &&
                i.constructor
            )
                return i.constructor.name
        }
    }
    return t
}
function le(...e) {
    const [t, i, o] = e
    return typeof t == 'string'
        ? { message: t, code: 'custom', input: i, inst: o }
        : { ...t }
}
function Rs(e) {
    return Object.entries(e)
        .filter(([t, i]) => Number.isNaN(Number.parseInt(t, 10)))
        .map((t) => t[1])
}
function Ci(e) {
    const t = atob(e),
        i = new Uint8Array(t.length)
    for (let o = 0; o < t.length; o++) i[o] = t.charCodeAt(o)
    return i
}
function Ji(e) {
    let t = ''
    for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i])
    return btoa(t)
}
function Fs(e) {
    const t = e.replace(/-/g, '+').replace(/_/g, '/'),
        i = '='.repeat((4 - (t.length % 4)) % 4)
    return Ci(t + i)
}
function Ls(e) {
    return Ji(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}
function Cs(e) {
    const t = e.replace(/^0x/, '')
    if (t.length % 2 !== 0) throw new Error('Invalid hex string length')
    const i = new Uint8Array(t.length / 2)
    for (let o = 0; o < t.length; o += 2)
        i[o / 2] = Number.parseInt(t.slice(o, o + 2), 16)
    return i
}
function Js(e) {
    return Array.from(e)
        .map((t) => t.toString(16).padStart(2, '0'))
        .join('')
}
class Ms {
    constructor(...t) {}
}
const Mi = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                BIGINT_FORMAT_RANGES: Pi,
                Class: Ms,
                NUMBER_FORMAT_RANGES: Ni,
                aborted: ee,
                allowsEval: ji,
                assert: js,
                assertEqual: Is,
                assertIs: xs,
                assertNever: Us,
                assertNotEqual: ws,
                assignProp: Q,
                base64ToUint8Array: Ci,
                base64urlToUint8Array: Fs,
                cached: we,
                captureStackTrace: mt,
                cleanEnum: Rs,
                cleanRegex: dn,
                clone: J,
                cloneDef: Ds,
                createTransparentProxy: As,
                defineLazy: k,
                esc: it,
                escapeRegex: B,
                extend: Ei,
                finalizeIssue: C,
                floatSafeRemainder: xi,
                getElementAtPath: Ns,
                getEnumValues: dt,
                getLengthableOrigin: pn,
                getParsedType: Es,
                getSizableOrigin: fn,
                hexToUint8Array: Cs,
                isObject: ue,
                isPlainObject: te,
                issue: le,
                joinValues: p,
                jsonStringifyReplacer: tn,
                merge: Ri,
                mergeDefs: V,
                normalizeParams: f,
                nullish: oe,
                numKeys: Ts,
                objectClone: Os,
                omit: Ti,
                optionalKeys: Di,
                parsedType: _,
                partial: Fi,
                pick: Zi,
                prefixIssues: M,
                primitiveTypes: Oi,
                promiseAllObject: Ps,
                propertyKeyTypes: rn,
                randomString: Zs,
                required: Li,
                safeExtend: Ai,
                shallowClone: mn,
                slugify: Ui,
                stringifyPrimitive: $,
                uint8ArrayToBase64: Ji,
                uint8ArrayToBase64url: Ls,
                uint8ArrayToHex: Js,
                unwrapMessage: be,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Ki = (e, t) => {
        ;((e.name = '$ZodError'),
            Object.defineProperty(e, '_zod', { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, 'issues', { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, tn, 2)),
            Object.defineProperty(e, 'toString', {
                value: () => e.message,
                enumerable: !1,
            }))
    },
    ft = d('$ZodError', Ki),
    E = d('$ZodError', Ki, { Parent: Error })
function pt(e, t = (i) => i.message) {
    const i = {},
        o = []
    for (const n of e.issues)
        n.path.length > 0
            ? ((i[n.path[0]] = i[n.path[0]] || []), i[n.path[0]].push(t(n)))
            : o.push(t(n))
    return { formErrors: o, fieldErrors: i }
}
function vt(e, t = (i) => i.message) {
    const i = { _errors: [] },
        o = (n) => {
            for (const r of n.issues)
                if (r.code === 'invalid_union' && r.errors.length)
                    r.errors.map((a) => o({ issues: a }))
                else if (r.code === 'invalid_key') o({ issues: r.issues })
                else if (r.code === 'invalid_element') o({ issues: r.issues })
                else if (r.path.length === 0) i._errors.push(t(r))
                else {
                    let a = i,
                        c = 0
                    for (; c < r.path.length; ) {
                        const l = r.path[c]
                        ;(c === r.path.length - 1
                            ? ((a[l] = a[l] || { _errors: [] }),
                              a[l]._errors.push(t(r)))
                            : (a[l] = a[l] || { _errors: [] }),
                            (a = a[l]),
                            c++)
                    }
                }
        }
    return (o(e), i)
}
function Vi(e, t = (i) => i.message) {
    const i = { errors: [] },
        o = (n, r = []) => {
            var a, c
            for (const l of n.issues)
                if (l.code === 'invalid_union' && l.errors.length)
                    l.errors.map((u) => o({ issues: u }, l.path))
                else if (l.code === 'invalid_key')
                    o({ issues: l.issues }, l.path)
                else if (l.code === 'invalid_element')
                    o({ issues: l.issues }, l.path)
                else {
                    const u = [...r, ...l.path]
                    if (u.length === 0) {
                        i.errors.push(t(l))
                        continue
                    }
                    let s = i,
                        m = 0
                    for (; m < u.length; ) {
                        const v = u[m],
                            g = m === u.length - 1
                        ;(typeof v == 'string'
                            ? (s.properties ?? (s.properties = {}),
                              (a = s.properties)[v] ?? (a[v] = { errors: [] }),
                              (s = s.properties[v]))
                            : (s.items ?? (s.items = []),
                              (c = s.items)[v] ?? (c[v] = { errors: [] }),
                              (s = s.items[v])),
                            g && s.errors.push(t(l)),
                            m++)
                    }
                }
        }
    return (o(e), i)
}
function Gi(e) {
    const t = [],
        i = e.map((o) => (typeof o == 'object' ? o.key : o))
    for (const o of i)
        typeof o == 'number'
            ? t.push(`[${o}]`)
            : typeof o == 'symbol'
              ? t.push(`[${JSON.stringify(String(o))}]`)
              : /[^\w$]/.test(o)
                ? t.push(`[${JSON.stringify(o)}]`)
                : (t.length && t.push('.'), t.push(o))
    return t.join('')
}
function Bi(e) {
    const t = [],
        i = [...e.issues].sort(
            (o, n) => (o.path ?? []).length - (n.path ?? []).length,
        )
    for (const o of i)
        (t.push(`✖ ${o.message}`),
            o.path?.length && t.push(`  → at ${Gi(o.path)}`))
    return t.join(`
`)
}
const xe = (e) => (t, i, o, n) => {
        const r = o ? Object.assign(o, { async: !1 }) : { async: !1 },
            a = t._zod.run({ value: i, issues: [] }, r)
        if (a instanceof Promise) throw new ne()
        if (a.issues.length) {
            const c = new (n?.Err ?? e)(a.issues.map((l) => C(l, r, N())))
            throw (mt(c, n?.callee), c)
        }
        return a.value
    },
    ot = xe(E),
    Ue = (e) => async (t, i, o, n) => {
        const r = o ? Object.assign(o, { async: !0 }) : { async: !0 }
        let a = t._zod.run({ value: i, issues: [] }, r)
        if ((a instanceof Promise && (a = await a), a.issues.length)) {
            const c = new (n?.Err ?? e)(a.issues.map((l) => C(l, r, N())))
            throw (mt(c, n?.callee), c)
        }
        return a.value
    },
    at = Ue(E),
    je = (e) => (t, i, o) => {
        const n = o ? { ...o, async: !1 } : { async: !1 },
            r = t._zod.run({ value: i, issues: [] }, n)
        if (r instanceof Promise) throw new ne()
        return r.issues.length
            ? {
                  success: !1,
                  error: new (e ?? ft)(r.issues.map((a) => C(a, n, N()))),
              }
            : { success: !0, data: r.value }
    },
    Wi = je(E),
    Oe = (e) => async (t, i, o) => {
        const n = o ? Object.assign(o, { async: !0 }) : { async: !0 }
        let r = t._zod.run({ value: i, issues: [] }, n)
        return (
            r instanceof Promise && (r = await r),
            r.issues.length
                ? {
                      success: !1,
                      error: new e(r.issues.map((a) => C(a, n, N()))),
                  }
                : { success: !0, data: r.value }
        )
    },
    qi = Oe(E),
    gt = (e) => (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: 'backward' })
            : { direction: 'backward' }
        return xe(e)(t, i, n)
    },
    Ks = gt(E),
    ht = (e) => (t, i, o) => xe(e)(t, i, o),
    Vs = ht(E),
    $t = (e) => async (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: 'backward' })
            : { direction: 'backward' }
        return Ue(e)(t, i, n)
    },
    Gs = $t(E),
    _t = (e) => async (t, i, o) => Ue(e)(t, i, o),
    Bs = _t(E),
    bt = (e) => (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: 'backward' })
            : { direction: 'backward' }
        return je(e)(t, i, n)
    },
    Ws = bt(E),
    yt = (e) => (t, i, o) => je(e)(t, i, o),
    qs = yt(E),
    kt = (e) => async (t, i, o) => {
        const n = o
            ? Object.assign(o, { direction: 'backward' })
            : { direction: 'backward' }
        return Oe(e)(t, i, n)
    },
    Xs = kt(E),
    St = (e) => async (t, i, o) => Oe(e)(t, i, o),
    Ys = St(E),
    Xi = /^[cC][^\s-]{8,}$/,
    Yi = /^[0-9a-z]+$/,
    Hi = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    Qi = /^[0-9a-vA-V]{20}$/,
    eo = /^[A-Za-z0-9]{27}$/,
    no = /^[a-zA-Z0-9_-]{21}$/,
    to =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    Hs =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    ro =
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    se = (e) =>
        e
            ? new RegExp(
                  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    Qs = se(4),
    ed = se(6),
    nd = se(7),
    io =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    td =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    rd =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    oo = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
    id = oo,
    od =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ad = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$'
function ao() {
    return new RegExp(ad, 'u')
}
const co =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    uo =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    lo = (e) => {
        const t = B(e ?? ':')
        return new RegExp(
            `^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`,
        )
    },
    so =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    mo =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    fo =
        /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    zt = /^[A-Za-z0-9_-]*$/,
    po =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    vo = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    go = /^\+[1-9]\d{6,14}$/,
    ho =
        '(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))',
    $o = new RegExp(`^${ho}$`)
function _o(e) {
    const t = '(?:[01]\\d|2[0-3]):[0-5]\\d'
    return typeof e.precision == 'number'
        ? e.precision === -1
            ? `${t}`
            : e.precision === 0
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
}
function bo(e) {
    return new RegExp(`^${_o(e)}$`)
}
function yo(e) {
    const t = _o({ precision: e.precision }),
        i = ['Z']
    ;(e.local && i.push(''),
        e.offset && i.push('([+-](?:[01]\\d|2[0-3]):[0-5]\\d)'))
    const o = `${t}(?:${i.join('|')})`
    return new RegExp(`^${ho}T(?:${o})$`)
}
const ko = (e) => {
        const t = e
            ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ''}}`
            : '[\\s\\S]*'
        return new RegExp(`^${t}$`)
    },
    So = /^-?\d+n?$/,
    zo = /^-?\d+$/,
    It = /^-?\d+(?:\.\d+)?$/,
    Io = /^(?:true|false)$/i,
    wo = /^null$/i,
    xo = /^undefined$/i,
    Uo = /^[^A-Z]*$/,
    jo = /^[^a-z]*$/,
    Oo = /^[0-9a-fA-F]*$/
function De(e, t) {
    return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`)
}
function Ne(e) {
    return new RegExp(`^[A-Za-z0-9_-]{${e}}$`)
}
const cd = /^[0-9a-fA-F]{32}$/,
    ud = De(22, '=='),
    ld = Ne(22),
    sd = /^[0-9a-fA-F]{40}$/,
    dd = De(27, '='),
    md = Ne(27),
    fd = /^[0-9a-fA-F]{64}$/,
    pd = De(43, '='),
    vd = Ne(43),
    gd = /^[0-9a-fA-F]{96}$/,
    hd = De(64, ''),
    $d = Ne(64),
    _d = /^[0-9a-fA-F]{128}$/,
    bd = De(86, '=='),
    yd = Ne(86),
    wt = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                base64: fo,
                base64url: zt,
                bigint: So,
                boolean: Io,
                browserEmail: od,
                cidrv4: so,
                cidrv6: mo,
                cuid: Xi,
                cuid2: Yi,
                date: $o,
                datetime: yo,
                domain: vo,
                duration: to,
                e164: go,
                email: io,
                emoji: ao,
                extendedDuration: Hs,
                guid: ro,
                hex: Oo,
                hostname: po,
                html5Email: td,
                idnEmail: id,
                integer: zo,
                ipv4: co,
                ipv6: uo,
                ksuid: eo,
                lowercase: Uo,
                mac: lo,
                md5_base64: ud,
                md5_base64url: ld,
                md5_hex: cd,
                nanoid: no,
                null: wo,
                number: It,
                rfc5322Email: rd,
                sha1_base64: dd,
                sha1_base64url: md,
                sha1_hex: sd,
                sha256_base64: pd,
                sha256_base64url: vd,
                sha256_hex: fd,
                sha384_base64: hd,
                sha384_base64url: $d,
                sha384_hex: gd,
                sha512_base64: bd,
                sha512_base64url: yd,
                sha512_hex: _d,
                string: ko,
                time: bo,
                ulid: Hi,
                undefined: xo,
                unicodeEmail: oo,
                uppercase: jo,
                uuid: se,
                uuid4: Qs,
                uuid6: ed,
                uuid7: nd,
                xid: Qi,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    j = d('$ZodCheck', (e, t) => {
        var i
        ;(e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (i = e._zod).onattach ?? (i.onattach = []))
    }),
    Do = { number: 'number', bigint: 'bigint', object: 'date' },
    xt = d('$ZodCheckLessThan', (e, t) => {
        j.init(e, t)
        const i = Do[typeof t.value]
        ;(e._zod.onattach.push((o) => {
            const n = o._zod.bag,
                r =
                    (t.inclusive ? n.maximum : n.exclusiveMaximum) ??
                    Number.POSITIVE_INFINITY
            t.value < r &&
                (t.inclusive
                    ? (n.maximum = t.value)
                    : (n.exclusiveMaximum = t.value))
        }),
            (e._zod.check = (o) => {
                ;(t.inclusive ? o.value <= t.value : o.value < t.value) ||
                    o.issues.push({
                        origin: i,
                        code: 'too_big',
                        maximum:
                            typeof t.value == 'object'
                                ? t.value.getTime()
                                : t.value,
                        input: o.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Ut = d('$ZodCheckGreaterThan', (e, t) => {
        j.init(e, t)
        const i = Do[typeof t.value]
        ;(e._zod.onattach.push((o) => {
            const n = o._zod.bag,
                r =
                    (t.inclusive ? n.minimum : n.exclusiveMinimum) ??
                    Number.NEGATIVE_INFINITY
            t.value > r &&
                (t.inclusive
                    ? (n.minimum = t.value)
                    : (n.exclusiveMinimum = t.value))
        }),
            (e._zod.check = (o) => {
                ;(t.inclusive ? o.value >= t.value : o.value > t.value) ||
                    o.issues.push({
                        origin: i,
                        code: 'too_small',
                        minimum:
                            typeof t.value == 'object'
                                ? t.value.getTime()
                                : t.value,
                        input: o.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    No = d('$ZodCheckMultipleOf', (e, t) => {
        ;(j.init(e, t),
            e._zod.onattach.push((i) => {
                var o
                ;(o = i._zod.bag).multipleOf ?? (o.multipleOf = t.value)
            }),
            (e._zod.check = (i) => {
                if (typeof i.value != typeof t.value)
                    throw new Error(
                        'Cannot mix number and bigint in multiple_of check.',
                    )
                ;(typeof i.value == 'bigint'
                    ? i.value % t.value === BigInt(0)
                    : xi(i.value, t.value) === 0) ||
                    i.issues.push({
                        origin: typeof i.value,
                        code: 'not_multiple_of',
                        divisor: t.value,
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Po = d('$ZodCheckNumberFormat', (e, t) => {
        ;(j.init(e, t), (t.format = t.format || 'float64'))
        const i = t.format?.includes('int'),
            o = i ? 'int' : 'number',
            [n, r] = Ni[t.format]
        ;(e._zod.onattach.push((a) => {
            const c = a._zod.bag
            ;((c.format = t.format),
                (c.minimum = n),
                (c.maximum = r),
                i && (c.pattern = zo))
        }),
            (e._zod.check = (a) => {
                const c = a.value
                if (i) {
                    if (!Number.isInteger(c)) {
                        a.issues.push({
                            expected: o,
                            format: t.format,
                            code: 'invalid_type',
                            continue: !1,
                            input: c,
                            inst: e,
                        })
                        return
                    }
                    if (!Number.isSafeInteger(c)) {
                        c > 0
                            ? a.issues.push({
                                  input: c,
                                  code: 'too_big',
                                  maximum: Number.MAX_SAFE_INTEGER,
                                  note: 'Integers must be within the safe integer range.',
                                  inst: e,
                                  origin: o,
                                  inclusive: !0,
                                  continue: !t.abort,
                              })
                            : a.issues.push({
                                  input: c,
                                  code: 'too_small',
                                  minimum: Number.MIN_SAFE_INTEGER,
                                  note: 'Integers must be within the safe integer range.',
                                  inst: e,
                                  origin: o,
                                  inclusive: !0,
                                  continue: !t.abort,
                              })
                        return
                    }
                }
                ;(c < n &&
                    a.issues.push({
                        origin: 'number',
                        input: c,
                        code: 'too_small',
                        minimum: n,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    c > r &&
                        a.issues.push({
                            origin: 'number',
                            input: c,
                            code: 'too_big',
                            maximum: r,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        }))
            }))
    }),
    Zo = d('$ZodCheckBigIntFormat', (e, t) => {
        j.init(e, t)
        const [i, o] = Pi[t.format]
        ;(e._zod.onattach.push((n) => {
            const r = n._zod.bag
            ;((r.format = t.format), (r.minimum = i), (r.maximum = o))
        }),
            (e._zod.check = (n) => {
                const r = n.value
                ;(r < i &&
                    n.issues.push({
                        origin: 'bigint',
                        input: r,
                        code: 'too_small',
                        minimum: i,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    r > o &&
                        n.issues.push({
                            origin: 'bigint',
                            input: r,
                            code: 'too_big',
                            maximum: o,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        }))
            }))
    }),
    To = d('$ZodCheckMaxSize', (e, t) => {
        var i
        ;(j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value
                    return !oe(n) && n.size !== void 0
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY
                t.maximum < n && (o._zod.bag.maximum = t.maximum)
            }),
            (e._zod.check = (o) => {
                const n = o.value
                n.size <= t.maximum ||
                    o.issues.push({
                        origin: fn(n),
                        code: 'too_big',
                        maximum: t.maximum,
                        inclusive: !0,
                        input: n,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Eo = d('$ZodCheckMinSize', (e, t) => {
        var i
        ;(j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value
                    return !oe(n) && n.size !== void 0
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY
                t.minimum > n && (o._zod.bag.minimum = t.minimum)
            }),
            (e._zod.check = (o) => {
                const n = o.value
                n.size >= t.minimum ||
                    o.issues.push({
                        origin: fn(n),
                        code: 'too_small',
                        minimum: t.minimum,
                        inclusive: !0,
                        input: n,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Ao = d('$ZodCheckSizeEquals', (e, t) => {
        var i
        ;(j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value
                    return !oe(n) && n.size !== void 0
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag
                ;((n.minimum = t.size), (n.maximum = t.size), (n.size = t.size))
            }),
            (e._zod.check = (o) => {
                const n = o.value,
                    r = n.size
                if (r === t.size) return
                const a = r > t.size
                o.issues.push({
                    origin: fn(n),
                    ...(a
                        ? { code: 'too_big', maximum: t.size }
                        : { code: 'too_small', minimum: t.size }),
                    inclusive: !0,
                    exact: !0,
                    input: o.value,
                    inst: e,
                    continue: !t.abort,
                })
            }))
    }),
    Ro = d('$ZodCheckMaxLength', (e, t) => {
        var i
        ;(j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value
                    return !oe(n) && n.length !== void 0
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY
                t.maximum < n && (o._zod.bag.maximum = t.maximum)
            }),
            (e._zod.check = (o) => {
                const n = o.value
                if (n.length <= t.maximum) return
                const a = pn(n)
                o.issues.push({
                    origin: a,
                    code: 'too_big',
                    maximum: t.maximum,
                    inclusive: !0,
                    input: n,
                    inst: e,
                    continue: !t.abort,
                })
            }))
    }),
    Fo = d('$ZodCheckMinLength', (e, t) => {
        var i
        ;(j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value
                    return !oe(n) && n.length !== void 0
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY
                t.minimum > n && (o._zod.bag.minimum = t.minimum)
            }),
            (e._zod.check = (o) => {
                const n = o.value
                if (n.length >= t.minimum) return
                const a = pn(n)
                o.issues.push({
                    origin: a,
                    code: 'too_small',
                    minimum: t.minimum,
                    inclusive: !0,
                    input: n,
                    inst: e,
                    continue: !t.abort,
                })
            }))
    }),
    Lo = d('$ZodCheckLengthEquals', (e, t) => {
        var i
        ;(j.init(e, t),
            (i = e._zod.def).when ??
                (i.when = (o) => {
                    const n = o.value
                    return !oe(n) && n.length !== void 0
                }),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag
                ;((n.minimum = t.length),
                    (n.maximum = t.length),
                    (n.length = t.length))
            }),
            (e._zod.check = (o) => {
                const n = o.value,
                    r = n.length
                if (r === t.length) return
                const a = pn(n),
                    c = r > t.length
                o.issues.push({
                    origin: a,
                    ...(c
                        ? { code: 'too_big', maximum: t.length }
                        : { code: 'too_small', minimum: t.length }),
                    inclusive: !0,
                    exact: !0,
                    input: o.value,
                    inst: e,
                    continue: !t.abort,
                })
            }))
    }),
    Pe = d('$ZodCheckStringFormat', (e, t) => {
        var i, o
        ;(j.init(e, t),
            e._zod.onattach.push((n) => {
                const r = n._zod.bag
                ;((r.format = t.format),
                    t.pattern &&
                        (r.patterns ?? (r.patterns = new Set()),
                        r.patterns.add(t.pattern)))
            }),
            t.pattern
                ? ((i = e._zod).check ??
                  (i.check = (n) => {
                      ;((t.pattern.lastIndex = 0),
                          !t.pattern.test(n.value) &&
                              n.issues.push({
                                  origin: 'string',
                                  code: 'invalid_format',
                                  format: t.format,
                                  input: n.value,
                                  ...(t.pattern
                                      ? { pattern: t.pattern.toString() }
                                      : {}),
                                  inst: e,
                                  continue: !t.abort,
                              }))
                  }))
                : ((o = e._zod).check ?? (o.check = () => {})))
    }),
    Co = d('$ZodCheckRegex', (e, t) => {
        ;(Pe.init(e, t),
            (e._zod.check = (i) => {
                ;((t.pattern.lastIndex = 0),
                    !t.pattern.test(i.value) &&
                        i.issues.push({
                            origin: 'string',
                            code: 'invalid_format',
                            format: 'regex',
                            input: i.value,
                            pattern: t.pattern.toString(),
                            inst: e,
                            continue: !t.abort,
                        }))
            }))
    }),
    Jo = d('$ZodCheckLowerCase', (e, t) => {
        ;(t.pattern ?? (t.pattern = Uo), Pe.init(e, t))
    }),
    Mo = d('$ZodCheckUpperCase', (e, t) => {
        ;(t.pattern ?? (t.pattern = jo), Pe.init(e, t))
    }),
    Ko = d('$ZodCheckIncludes', (e, t) => {
        j.init(e, t)
        const i = B(t.includes),
            o = new RegExp(
                typeof t.position == 'number' ? `^.{${t.position}}${i}` : i,
            )
        ;((t.pattern = o),
            e._zod.onattach.push((n) => {
                const r = n._zod.bag
                ;(r.patterns ?? (r.patterns = new Set()), r.patterns.add(o))
            }),
            (e._zod.check = (n) => {
                n.value.includes(t.includes, t.position) ||
                    n.issues.push({
                        origin: 'string',
                        code: 'invalid_format',
                        format: 'includes',
                        includes: t.includes,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Vo = d('$ZodCheckStartsWith', (e, t) => {
        j.init(e, t)
        const i = new RegExp(`^${B(t.prefix)}.*`)
        ;(t.pattern ?? (t.pattern = i),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag
                ;(n.patterns ?? (n.patterns = new Set()), n.patterns.add(i))
            }),
            (e._zod.check = (o) => {
                o.value.startsWith(t.prefix) ||
                    o.issues.push({
                        origin: 'string',
                        code: 'invalid_format',
                        format: 'starts_with',
                        prefix: t.prefix,
                        input: o.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Go = d('$ZodCheckEndsWith', (e, t) => {
        j.init(e, t)
        const i = new RegExp(`.*${B(t.suffix)}$`)
        ;(t.pattern ?? (t.pattern = i),
            e._zod.onattach.push((o) => {
                const n = o._zod.bag
                ;(n.patterns ?? (n.patterns = new Set()), n.patterns.add(i))
            }),
            (e._zod.check = (o) => {
                o.value.endsWith(t.suffix) ||
                    o.issues.push({
                        origin: 'string',
                        code: 'invalid_format',
                        format: 'ends_with',
                        suffix: t.suffix,
                        input: o.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    })
function ui(e, t, i) {
    e.issues.length && t.issues.push(...M(i, e.issues))
}
const Bo = d('$ZodCheckProperty', (e, t) => {
        ;(j.init(e, t),
            (e._zod.check = (i) => {
                const o = t.schema._zod.run(
                    { value: i.value[t.property], issues: [] },
                    {},
                )
                if (o instanceof Promise)
                    return o.then((n) => ui(n, i, t.property))
                ui(o, i, t.property)
            }))
    }),
    Wo = d('$ZodCheckMimeType', (e, t) => {
        j.init(e, t)
        const i = new Set(t.mime)
        ;(e._zod.onattach.push((o) => {
            o._zod.bag.mime = t.mime
        }),
            (e._zod.check = (o) => {
                i.has(o.value.type) ||
                    o.issues.push({
                        code: 'invalid_value',
                        values: t.mime,
                        input: o.value.type,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    qo = d('$ZodCheckOverwrite', (e, t) => {
        ;(j.init(e, t),
            (e._zod.check = (i) => {
                i.value = t.tx(i.value)
            }))
    })
class Xo {
    constructor(t = []) {
        ;((this.content = []), (this.indent = 0), this && (this.args = t))
    }
    indented(t) {
        ;((this.indent += 1), t(this), (this.indent -= 1))
    }
    write(t) {
        if (typeof t == 'function') {
            ;(t(this, { execution: 'sync' }), t(this, { execution: 'async' }))
            return
        }
        const o = t
                .split(
                    `
`,
                )
                .filter((a) => a),
            n = Math.min(...o.map((a) => a.length - a.trimStart().length)),
            r = o
                .map((a) => a.slice(n))
                .map((a) => ' '.repeat(this.indent * 2) + a)
        for (const a of r) this.content.push(a)
    }
    compile() {
        const t = Function,
            i = this?.args,
            n = [...(this?.content ?? ['']).map((r) => `  ${r}`)]
        return new t(
            ...i,
            n.join(`
`),
        )
    }
}
const Yo = { major: 4, minor: 3, patch: 5 },
    b = d('$ZodType', (e, t) => {
        var i
        ;(e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = Yo))
        const o = [...(e._zod.def.checks ?? [])]
        e._zod.traits.has('$ZodCheck') && o.unshift(e)
        for (const n of o) for (const r of n._zod.onattach) r(e)
        if (o.length === 0)
            ((i = e._zod).deferred ?? (i.deferred = []),
                e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse
                }))
        else {
            const n = (a, c, l) => {
                    let u = ee(a),
                        s
                    for (const m of c) {
                        if (m._zod.def.when) {
                            if (!m._zod.def.when(a)) continue
                        } else if (u) continue
                        const v = a.issues.length,
                            g = m._zod.check(a)
                        if (g instanceof Promise && l?.async === !1)
                            throw new ne()
                        if (s || g instanceof Promise)
                            s = (s ?? Promise.resolve()).then(async () => {
                                ;(await g,
                                    a.issues.length !== v &&
                                        (u || (u = ee(a, v))))
                            })
                        else {
                            if (a.issues.length === v) continue
                            u || (u = ee(a, v))
                        }
                    }
                    return s ? s.then(() => a) : a
                },
                r = (a, c, l) => {
                    if (ee(a)) return ((a.aborted = !0), a)
                    const u = n(c, o, l)
                    if (u instanceof Promise) {
                        if (l.async === !1) throw new ne()
                        return u.then((s) => e._zod.parse(s, l))
                    }
                    return e._zod.parse(u, l)
                }
            e._zod.run = (a, c) => {
                if (c.skipChecks) return e._zod.parse(a, c)
                if (c.direction === 'backward') {
                    const u = e._zod.parse(
                        { value: a.value, issues: [] },
                        { ...c, skipChecks: !0 },
                    )
                    return u instanceof Promise
                        ? u.then((s) => r(s, a, c))
                        : r(u, a, c)
                }
                const l = e._zod.parse(a, c)
                if (l instanceof Promise) {
                    if (c.async === !1) throw new ne()
                    return l.then((u) => n(u, o, c))
                }
                return n(l, o, c)
            }
        }
        k(e, '~standard', () => ({
            validate: (n) => {
                try {
                    const r = Wi(e, n)
                    return r.success
                        ? { value: r.data }
                        : { issues: r.error?.issues }
                } catch {
                    return qi(e, n).then((a) =>
                        a.success
                            ? { value: a.data }
                            : { issues: a.error?.issues },
                    )
                }
            },
            vendor: 'zod',
            version: 1,
        }))
    }),
    Ze = d('$ZodString', (e, t) => {
        ;(b.init(e, t),
            (e._zod.pattern =
                [...(e?._zod.bag?.patterns ?? [])].pop() ?? ko(e._zod.bag)),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = String(i.value)
                    } catch {}
                return (
                    typeof i.value == 'string' ||
                        i.issues.push({
                            expected: 'string',
                            code: 'invalid_type',
                            input: i.value,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    x = d('$ZodStringFormat', (e, t) => {
        ;(Pe.init(e, t), Ze.init(e, t))
    }),
    Ho = d('$ZodGUID', (e, t) => {
        ;(t.pattern ?? (t.pattern = ro), x.init(e, t))
    }),
    Qo = d('$ZodUUID', (e, t) => {
        if (t.version) {
            const o = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8,
            }[t.version]
            if (o === void 0)
                throw new Error(`Invalid UUID version: "${t.version}"`)
            t.pattern ?? (t.pattern = se(o))
        } else t.pattern ?? (t.pattern = se())
        x.init(e, t)
    }),
    ea = d('$ZodEmail', (e, t) => {
        ;(t.pattern ?? (t.pattern = io), x.init(e, t))
    }),
    na = d('$ZodURL', (e, t) => {
        ;(x.init(e, t),
            (e._zod.check = (i) => {
                try {
                    const o = i.value.trim(),
                        n = new URL(o)
                    ;(t.hostname &&
                        ((t.hostname.lastIndex = 0),
                        t.hostname.test(n.hostname) ||
                            i.issues.push({
                                code: 'invalid_format',
                                format: 'url',
                                note: 'Invalid hostname',
                                pattern: t.hostname.source,
                                input: i.value,
                                inst: e,
                                continue: !t.abort,
                            })),
                        t.protocol &&
                            ((t.protocol.lastIndex = 0),
                            t.protocol.test(
                                n.protocol.endsWith(':')
                                    ? n.protocol.slice(0, -1)
                                    : n.protocol,
                            ) ||
                                i.issues.push({
                                    code: 'invalid_format',
                                    format: 'url',
                                    note: 'Invalid protocol',
                                    pattern: t.protocol.source,
                                    input: i.value,
                                    inst: e,
                                    continue: !t.abort,
                                })),
                        t.normalize ? (i.value = n.href) : (i.value = o))
                    return
                } catch {
                    i.issues.push({
                        code: 'invalid_format',
                        format: 'url',
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
                }
            }))
    }),
    ta = d('$ZodEmoji', (e, t) => {
        ;(t.pattern ?? (t.pattern = ao()), x.init(e, t))
    }),
    ra = d('$ZodNanoID', (e, t) => {
        ;(t.pattern ?? (t.pattern = no), x.init(e, t))
    }),
    ia = d('$ZodCUID', (e, t) => {
        ;(t.pattern ?? (t.pattern = Xi), x.init(e, t))
    }),
    oa = d('$ZodCUID2', (e, t) => {
        ;(t.pattern ?? (t.pattern = Yi), x.init(e, t))
    }),
    aa = d('$ZodULID', (e, t) => {
        ;(t.pattern ?? (t.pattern = Hi), x.init(e, t))
    }),
    ca = d('$ZodXID', (e, t) => {
        ;(t.pattern ?? (t.pattern = Qi), x.init(e, t))
    }),
    ua = d('$ZodKSUID', (e, t) => {
        ;(t.pattern ?? (t.pattern = eo), x.init(e, t))
    }),
    la = d('$ZodISODateTime', (e, t) => {
        ;(t.pattern ?? (t.pattern = yo(t)), x.init(e, t))
    }),
    sa = d('$ZodISODate', (e, t) => {
        ;(t.pattern ?? (t.pattern = $o), x.init(e, t))
    }),
    da = d('$ZodISOTime', (e, t) => {
        ;(t.pattern ?? (t.pattern = bo(t)), x.init(e, t))
    }),
    ma = d('$ZodISODuration', (e, t) => {
        ;(t.pattern ?? (t.pattern = to), x.init(e, t))
    }),
    fa = d('$ZodIPv4', (e, t) => {
        ;(t.pattern ?? (t.pattern = co),
            x.init(e, t),
            (e._zod.bag.format = 'ipv4'))
    }),
    pa = d('$ZodIPv6', (e, t) => {
        ;(t.pattern ?? (t.pattern = uo),
            x.init(e, t),
            (e._zod.bag.format = 'ipv6'),
            (e._zod.check = (i) => {
                try {
                    new URL(`http://[${i.value}]`)
                } catch {
                    i.issues.push({
                        code: 'invalid_format',
                        format: 'ipv6',
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
                }
            }))
    }),
    va = d('$ZodMAC', (e, t) => {
        ;(t.pattern ?? (t.pattern = lo(t.delimiter)),
            x.init(e, t),
            (e._zod.bag.format = 'mac'))
    }),
    ga = d('$ZodCIDRv4', (e, t) => {
        ;(t.pattern ?? (t.pattern = so), x.init(e, t))
    }),
    ha = d('$ZodCIDRv6', (e, t) => {
        ;(t.pattern ?? (t.pattern = mo),
            x.init(e, t),
            (e._zod.check = (i) => {
                const o = i.value.split('/')
                try {
                    if (o.length !== 2) throw new Error()
                    const [n, r] = o
                    if (!r) throw new Error()
                    const a = Number(r)
                    if (`${a}` !== r) throw new Error()
                    if (a < 0 || a > 128) throw new Error()
                    new URL(`http://[${n}]`)
                } catch {
                    i.issues.push({
                        code: 'invalid_format',
                        format: 'cidrv6',
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
                }
            }))
    })
function jt(e) {
    if (e === '') return !0
    if (e.length % 4 !== 0) return !1
    try {
        return (atob(e), !0)
    } catch {
        return !1
    }
}
const $a = d('$ZodBase64', (e, t) => {
    ;(t.pattern ?? (t.pattern = fo),
        x.init(e, t),
        (e._zod.bag.contentEncoding = 'base64'),
        (e._zod.check = (i) => {
            jt(i.value) ||
                i.issues.push({
                    code: 'invalid_format',
                    format: 'base64',
                    input: i.value,
                    inst: e,
                    continue: !t.abort,
                })
        }))
})
function _a(e) {
    if (!zt.test(e)) return !1
    const t = e.replace(/[-_]/g, (o) => (o === '-' ? '+' : '/')),
        i = t.padEnd(Math.ceil(t.length / 4) * 4, '=')
    return jt(i)
}
const ba = d('$ZodBase64URL', (e, t) => {
        ;(t.pattern ?? (t.pattern = zt),
            x.init(e, t),
            (e._zod.bag.contentEncoding = 'base64url'),
            (e._zod.check = (i) => {
                _a(i.value) ||
                    i.issues.push({
                        code: 'invalid_format',
                        format: 'base64url',
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    ya = d('$ZodE164', (e, t) => {
        ;(t.pattern ?? (t.pattern = go), x.init(e, t))
    })
function ka(e, t = null) {
    try {
        const i = e.split('.')
        if (i.length !== 3) return !1
        const [o] = i
        if (!o) return !1
        const n = JSON.parse(atob(o))
        return !(
            ('typ' in n && n?.typ !== 'JWT') ||
            !n.alg ||
            (t && (!('alg' in n) || n.alg !== t))
        )
    } catch {
        return !1
    }
}
const Sa = d('$ZodJWT', (e, t) => {
        ;(x.init(e, t),
            (e._zod.check = (i) => {
                ka(i.value, t.alg) ||
                    i.issues.push({
                        code: 'invalid_format',
                        format: 'jwt',
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    za = d('$ZodCustomStringFormat', (e, t) => {
        ;(x.init(e, t),
            (e._zod.check = (i) => {
                t.fn(i.value) ||
                    i.issues.push({
                        code: 'invalid_format',
                        format: t.format,
                        input: i.value,
                        inst: e,
                        continue: !t.abort,
                    })
            }))
    }),
    Ot = d('$ZodNumber', (e, t) => {
        ;(b.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? It),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = Number(i.value)
                    } catch {}
                const n = i.value
                if (
                    typeof n == 'number' &&
                    !Number.isNaN(n) &&
                    Number.isFinite(n)
                )
                    return i
                const r =
                    typeof n == 'number'
                        ? Number.isNaN(n)
                            ? 'NaN'
                            : Number.isFinite(n)
                              ? void 0
                              : 'Infinity'
                        : void 0
                return (
                    i.issues.push({
                        expected: 'number',
                        code: 'invalid_type',
                        input: n,
                        inst: e,
                        ...(r ? { received: r } : {}),
                    }),
                    i
                )
            }))
    }),
    Ia = d('$ZodNumberFormat', (e, t) => {
        ;(Po.init(e, t), Ot.init(e, t))
    }),
    Dt = d('$ZodBoolean', (e, t) => {
        ;(b.init(e, t),
            (e._zod.pattern = Io),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = !!i.value
                    } catch {}
                const n = i.value
                return (
                    typeof n == 'boolean' ||
                        i.issues.push({
                            expected: 'boolean',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    Nt = d('$ZodBigInt', (e, t) => {
        ;(b.init(e, t),
            (e._zod.pattern = So),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = BigInt(i.value)
                    } catch {}
                return (
                    typeof i.value == 'bigint' ||
                        i.issues.push({
                            expected: 'bigint',
                            code: 'invalid_type',
                            input: i.value,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    wa = d('$ZodBigIntFormat', (e, t) => {
        ;(Zo.init(e, t), Nt.init(e, t))
    }),
    xa = d('$ZodSymbol', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value
                return (
                    typeof n == 'symbol' ||
                        i.issues.push({
                            expected: 'symbol',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    Ua = d('$ZodUndefined', (e, t) => {
        ;(b.init(e, t),
            (e._zod.pattern = xo),
            (e._zod.values = new Set([void 0])),
            (e._zod.optin = 'optional'),
            (e._zod.optout = 'optional'),
            (e._zod.parse = (i, o) => {
                const n = i.value
                return (
                    typeof n > 'u' ||
                        i.issues.push({
                            expected: 'undefined',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    ja = d('$ZodNull', (e, t) => {
        ;(b.init(e, t),
            (e._zod.pattern = wo),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (i, o) => {
                const n = i.value
                return (
                    n === null ||
                        i.issues.push({
                            expected: 'null',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    Oa = d('$ZodAny', (e, t) => {
        ;(b.init(e, t), (e._zod.parse = (i) => i))
    }),
    Da = d('$ZodUnknown', (e, t) => {
        ;(b.init(e, t), (e._zod.parse = (i) => i))
    }),
    Na = d('$ZodNever', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => (
                i.issues.push({
                    expected: 'never',
                    code: 'invalid_type',
                    input: i.value,
                    inst: e,
                }),
                i
            )))
    }),
    Pa = d('$ZodVoid', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value
                return (
                    typeof n > 'u' ||
                        i.issues.push({
                            expected: 'void',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    Za = d('$ZodDate', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                if (t.coerce)
                    try {
                        i.value = new Date(i.value)
                    } catch {}
                const n = i.value,
                    r = n instanceof Date
                return (
                    (r && !Number.isNaN(n.getTime())) ||
                        i.issues.push({
                            expected: 'date',
                            code: 'invalid_type',
                            input: n,
                            ...(r ? { received: 'Invalid Date' } : {}),
                            inst: e,
                        }),
                    i
                )
            }))
    })
function li(e, t, i) {
    ;(e.issues.length && t.issues.push(...M(i, e.issues)),
        (t.value[i] = e.value))
}
const Ta = d('$ZodArray', (e, t) => {
    ;(b.init(e, t),
        (e._zod.parse = (i, o) => {
            const n = i.value
            if (!Array.isArray(n))
                return (
                    i.issues.push({
                        expected: 'array',
                        code: 'invalid_type',
                        input: n,
                        inst: e,
                    }),
                    i
                )
            i.value = Array(n.length)
            const r = []
            for (let a = 0; a < n.length; a++) {
                const c = n[a],
                    l = t.element._zod.run({ value: c, issues: [] }, o)
                l instanceof Promise
                    ? r.push(l.then((u) => li(u, i, a)))
                    : li(l, i, a)
            }
            return r.length ? Promise.all(r).then(() => i) : i
        }))
})
function on(e, t, i, o, n) {
    if (e.issues.length) {
        if (n && !(i in o)) return
        t.issues.push(...M(i, e.issues))
    }
    e.value === void 0
        ? i in o && (t.value[i] = void 0)
        : (t.value[i] = e.value)
}
function Ea(e) {
    const t = Object.keys(e.shape)
    for (const o of t)
        if (!e.shape?.[o]?._zod?.traits?.has('$ZodType'))
            throw new Error(
                `Invalid element at key "${o}": expected a Zod schema`,
            )
    const i = Di(e.shape)
    return {
        ...e,
        keys: t,
        keySet: new Set(t),
        numKeys: t.length,
        optionalKeys: new Set(i),
    }
}
function Aa(e, t, i, o, n, r) {
    const a = [],
        c = n.keySet,
        l = n.catchall._zod,
        u = l.def.type,
        s = l.optout === 'optional'
    for (const m in t) {
        if (c.has(m)) continue
        if (u === 'never') {
            a.push(m)
            continue
        }
        const v = l.run({ value: t[m], issues: [] }, o)
        v instanceof Promise
            ? e.push(v.then((g) => on(g, i, m, t, s)))
            : on(v, i, m, t, s)
    }
    return (
        a.length &&
            i.issues.push({
                code: 'unrecognized_keys',
                keys: a,
                input: t,
                inst: r,
            }),
        e.length ? Promise.all(e).then(() => i) : i
    )
}
const Ra = d('$ZodObject', (e, t) => {
        if ((b.init(e, t), !Object.getOwnPropertyDescriptor(t, 'shape')?.get)) {
            const c = t.shape
            Object.defineProperty(t, 'shape', {
                get: () => {
                    const l = { ...c }
                    return (Object.defineProperty(t, 'shape', { value: l }), l)
                },
            })
        }
        const o = we(() => Ea(t))
        k(e._zod, 'propValues', () => {
            const c = t.shape,
                l = {}
            for (const u in c) {
                const s = c[u]._zod
                if (s.values) {
                    l[u] ?? (l[u] = new Set())
                    for (const m of s.values) l[u].add(m)
                }
            }
            return l
        })
        const n = ue,
            r = t.catchall
        let a
        e._zod.parse = (c, l) => {
            a ?? (a = o.value)
            const u = c.value
            if (!n(u))
                return (
                    c.issues.push({
                        expected: 'object',
                        code: 'invalid_type',
                        input: u,
                        inst: e,
                    }),
                    c
                )
            c.value = {}
            const s = [],
                m = a.shape
            for (const v of a.keys) {
                const g = m[v],
                    S = g._zod.optout === 'optional',
                    z = g._zod.run({ value: u[v], issues: [] }, l)
                z instanceof Promise
                    ? s.push(z.then((q) => on(q, c, v, u, S)))
                    : on(z, c, v, u, S)
            }
            return r
                ? Aa(s, u, c, l, o.value, e)
                : s.length
                  ? Promise.all(s).then(() => c)
                  : c
        }
    }),
    Fa = d('$ZodObjectJIT', (e, t) => {
        Ra.init(e, t)
        const i = e._zod.parse,
            o = we(() => Ea(t)),
            n = (v) => {
                const g = new Xo(['shape', 'payload', 'ctx']),
                    S = o.value,
                    z = (R) => {
                        const O = it(R)
                        return `shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`
                    }
                g.write('const input = payload.value;')
                const q = Object.create(null)
                let G = 0
                for (const R of S.keys) q[R] = `key_${G++}`
                g.write('const newResult = {};')
                for (const R of S.keys) {
                    const O = q[R],
                        T = it(R),
                        $e = v[R]?._zod?.optout === 'optional'
                    ;(g.write(`const ${O} = ${z(R)};`),
                        $e
                            ? g.write(`
        if (${O}.issues.length) {
          if (${T} in input) {
            payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${T}, ...iss.path] : [${T}]
            })));
          }
        }
        
        if (${O}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${O}.value;
        }
        
      `)
                            : g.write(`
        if (${O}.issues.length) {
          payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        if (${O}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${O}.value;
        }
        
      `))
                }
                ;(g.write('payload.value = newResult;'),
                    g.write('return payload;'))
                const qe = g.compile()
                return (R, O) => qe(v, R, O)
            }
        let r
        const a = ue,
            c = !nn.jitless,
            u = c && ji.value,
            s = t.catchall
        let m
        e._zod.parse = (v, g) => {
            m ?? (m = o.value)
            const S = v.value
            return a(S)
                ? c && u && g?.async === !1 && g.jitless !== !0
                    ? (r || (r = n(t.shape)),
                      (v = r(v, g)),
                      s ? Aa([], S, v, g, m, e) : v)
                    : i(v, g)
                : (v.issues.push({
                      expected: 'object',
                      code: 'invalid_type',
                      input: S,
                      inst: e,
                  }),
                  v)
        }
    })
function si(e, t, i, o) {
    for (const r of e)
        if (r.issues.length === 0) return ((t.value = r.value), t)
    const n = e.filter((r) => !ee(r))
    return n.length === 1
        ? ((t.value = n[0].value), n[0])
        : (t.issues.push({
              code: 'invalid_union',
              input: t.value,
              inst: i,
              errors: e.map((r) => r.issues.map((a) => C(a, o, N()))),
          }),
          t)
}
const vn = d('$ZodUnion', (e, t) => {
    ;(b.init(e, t),
        k(e._zod, 'optin', () =>
            t.options.some((n) => n._zod.optin === 'optional')
                ? 'optional'
                : void 0,
        ),
        k(e._zod, 'optout', () =>
            t.options.some((n) => n._zod.optout === 'optional')
                ? 'optional'
                : void 0,
        ),
        k(e._zod, 'values', () => {
            if (t.options.every((n) => n._zod.values))
                return new Set(
                    t.options.flatMap((n) => Array.from(n._zod.values)),
                )
        }),
        k(e._zod, 'pattern', () => {
            if (t.options.every((n) => n._zod.pattern)) {
                const n = t.options.map((r) => r._zod.pattern)
                return new RegExp(`^(${n.map((r) => dn(r.source)).join('|')})$`)
            }
        }))
    const i = t.options.length === 1,
        o = t.options[0]._zod.run
    e._zod.parse = (n, r) => {
        if (i) return o(n, r)
        let a = !1
        const c = []
        for (const l of t.options) {
            const u = l._zod.run({ value: n.value, issues: [] }, r)
            if (u instanceof Promise) (c.push(u), (a = !0))
            else {
                if (u.issues.length === 0) return u
                c.push(u)
            }
        }
        return a ? Promise.all(c).then((l) => si(l, n, e, r)) : si(c, n, e, r)
    }
})
function di(e, t, i, o) {
    const n = e.filter((r) => r.issues.length === 0)
    return n.length === 1
        ? ((t.value = n[0].value), t)
        : (n.length === 0
              ? t.issues.push({
                    code: 'invalid_union',
                    input: t.value,
                    inst: i,
                    errors: e.map((r) => r.issues.map((a) => C(a, o, N()))),
                })
              : t.issues.push({
                    code: 'invalid_union',
                    input: t.value,
                    inst: i,
                    errors: [],
                    inclusive: !1,
                }),
          t)
}
const La = d('$ZodXor', (e, t) => {
        ;(vn.init(e, t), (t.inclusive = !1))
        const i = t.options.length === 1,
            o = t.options[0]._zod.run
        e._zod.parse = (n, r) => {
            if (i) return o(n, r)
            let a = !1
            const c = []
            for (const l of t.options) {
                const u = l._zod.run({ value: n.value, issues: [] }, r)
                u instanceof Promise ? (c.push(u), (a = !0)) : c.push(u)
            }
            return a
                ? Promise.all(c).then((l) => di(l, n, e, r))
                : di(c, n, e, r)
        }
    }),
    Ca = d('$ZodDiscriminatedUnion', (e, t) => {
        ;((t.inclusive = !1), vn.init(e, t))
        const i = e._zod.parse
        k(e._zod, 'propValues', () => {
            const n = {}
            for (const r of t.options) {
                const a = r._zod.propValues
                if (!a || Object.keys(a).length === 0)
                    throw new Error(
                        `Invalid discriminated union option at index "${t.options.indexOf(r)}"`,
                    )
                for (const [c, l] of Object.entries(a)) {
                    n[c] || (n[c] = new Set())
                    for (const u of l) n[c].add(u)
                }
            }
            return n
        })
        const o = we(() => {
            const n = t.options,
                r = new Map()
            for (const a of n) {
                const c = a._zod.propValues?.[t.discriminator]
                if (!c || c.size === 0)
                    throw new Error(
                        `Invalid discriminated union option at index "${t.options.indexOf(a)}"`,
                    )
                for (const l of c) {
                    if (r.has(l))
                        throw new Error(
                            `Duplicate discriminator value "${String(l)}"`,
                        )
                    r.set(l, a)
                }
            }
            return r
        })
        e._zod.parse = (n, r) => {
            const a = n.value
            if (!ue(a))
                return (
                    n.issues.push({
                        code: 'invalid_type',
                        expected: 'object',
                        input: a,
                        inst: e,
                    }),
                    n
                )
            const c = o.value.get(a?.[t.discriminator])
            return c
                ? c._zod.run(n, r)
                : t.unionFallback
                  ? i(n, r)
                  : (n.issues.push({
                        code: 'invalid_union',
                        errors: [],
                        note: 'No matching discriminator',
                        discriminator: t.discriminator,
                        input: a,
                        path: [t.discriminator],
                        inst: e,
                    }),
                    n)
        }
    }),
    Ja = d('$ZodIntersection', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value,
                    r = t.left._zod.run({ value: n, issues: [] }, o),
                    a = t.right._zod.run({ value: n, issues: [] }, o)
                return r instanceof Promise || a instanceof Promise
                    ? Promise.all([r, a]).then(([l, u]) => mi(i, l, u))
                    : mi(i, r, a)
            }))
    })
function ct(e, t) {
    if (e === t) return { valid: !0, data: e }
    if (e instanceof Date && t instanceof Date && +e == +t)
        return { valid: !0, data: e }
    if (te(e) && te(t)) {
        const i = Object.keys(t),
            o = Object.keys(e).filter((r) => i.indexOf(r) !== -1),
            n = { ...e, ...t }
        for (const r of o) {
            const a = ct(e[r], t[r])
            if (!a.valid)
                return { valid: !1, mergeErrorPath: [r, ...a.mergeErrorPath] }
            n[r] = a.data
        }
        return { valid: !0, data: n }
    }
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] }
        const i = []
        for (let o = 0; o < e.length; o++) {
            const n = e[o],
                r = t[o],
                a = ct(n, r)
            if (!a.valid)
                return { valid: !1, mergeErrorPath: [o, ...a.mergeErrorPath] }
            i.push(a.data)
        }
        return { valid: !0, data: i }
    }
    return { valid: !1, mergeErrorPath: [] }
}
function mi(e, t, i) {
    const o = new Map()
    let n
    for (const c of t.issues)
        if (c.code === 'unrecognized_keys') {
            n ?? (n = c)
            for (const l of c.keys)
                (o.has(l) || o.set(l, {}), (o.get(l).l = !0))
        } else e.issues.push(c)
    for (const c of i.issues)
        if (c.code === 'unrecognized_keys')
            for (const l of c.keys)
                (o.has(l) || o.set(l, {}), (o.get(l).r = !0))
        else e.issues.push(c)
    const r = [...o].filter(([, c]) => c.l && c.r).map(([c]) => c)
    if ((r.length && n && e.issues.push({ ...n, keys: r }), ee(e))) return e
    const a = ct(t.value, i.value)
    if (!a.valid)
        throw new Error(
            `Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`,
        )
    return ((e.value = a.data), e)
}
const Pt = d('$ZodTuple', (e, t) => {
    b.init(e, t)
    const i = t.items
    e._zod.parse = (o, n) => {
        const r = o.value
        if (!Array.isArray(r))
            return (
                o.issues.push({
                    input: r,
                    inst: e,
                    expected: 'tuple',
                    code: 'invalid_type',
                }),
                o
            )
        o.value = []
        const a = [],
            c = [...i].reverse().findIndex((s) => s._zod.optin !== 'optional'),
            l = c === -1 ? 0 : i.length - c
        if (!t.rest) {
            const s = r.length > i.length,
                m = r.length < l - 1
            if (s || m)
                return (
                    o.issues.push({
                        ...(s
                            ? {
                                  code: 'too_big',
                                  maximum: i.length,
                                  inclusive: !0,
                              }
                            : { code: 'too_small', minimum: i.length }),
                        input: r,
                        inst: e,
                        origin: 'array',
                    }),
                    o
                )
        }
        let u = -1
        for (const s of i) {
            if ((u++, u >= r.length && u >= l)) continue
            const m = s._zod.run({ value: r[u], issues: [] }, n)
            m instanceof Promise
                ? a.push(m.then((v) => Xe(v, o, u)))
                : Xe(m, o, u)
        }
        if (t.rest) {
            const s = r.slice(i.length)
            for (const m of s) {
                u++
                const v = t.rest._zod.run({ value: m, issues: [] }, n)
                v instanceof Promise
                    ? a.push(v.then((g) => Xe(g, o, u)))
                    : Xe(v, o, u)
            }
        }
        return a.length ? Promise.all(a).then(() => o) : o
    }
})
function Xe(e, t, i) {
    ;(e.issues.length && t.issues.push(...M(i, e.issues)),
        (t.value[i] = e.value))
}
const Ma = d('$ZodRecord', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value
                if (!te(n))
                    return (
                        i.issues.push({
                            expected: 'record',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                        i
                    )
                const r = [],
                    a = t.keyType._zod.values
                if (a) {
                    i.value = {}
                    const c = new Set()
                    for (const u of a)
                        if (
                            typeof u == 'string' ||
                            typeof u == 'number' ||
                            typeof u == 'symbol'
                        ) {
                            c.add(typeof u == 'number' ? u.toString() : u)
                            const s = t.valueType._zod.run(
                                { value: n[u], issues: [] },
                                o,
                            )
                            s instanceof Promise
                                ? r.push(
                                      s.then((m) => {
                                          ;(m.issues.length &&
                                              i.issues.push(...M(u, m.issues)),
                                              (i.value[u] = m.value))
                                      }),
                                  )
                                : (s.issues.length &&
                                      i.issues.push(...M(u, s.issues)),
                                  (i.value[u] = s.value))
                        }
                    let l
                    for (const u in n) c.has(u) || ((l = l ?? []), l.push(u))
                    l &&
                        l.length > 0 &&
                        i.issues.push({
                            code: 'unrecognized_keys',
                            input: n,
                            inst: e,
                            keys: l,
                        })
                } else {
                    i.value = {}
                    for (const c of Reflect.ownKeys(n)) {
                        if (c === '__proto__') continue
                        let l = t.keyType._zod.run({ value: c, issues: [] }, o)
                        if (l instanceof Promise)
                            throw new Error(
                                'Async schemas not supported in object keys currently',
                            )
                        if (
                            typeof c == 'string' &&
                            It.test(c) &&
                            l.issues.length &&
                            l.issues.some(
                                (m) =>
                                    m.code === 'invalid_type' &&
                                    m.expected === 'number',
                            )
                        ) {
                            const m = t.keyType._zod.run(
                                { value: Number(c), issues: [] },
                                o,
                            )
                            if (m instanceof Promise)
                                throw new Error(
                                    'Async schemas not supported in object keys currently',
                                )
                            m.issues.length === 0 && (l = m)
                        }
                        if (l.issues.length) {
                            t.mode === 'loose'
                                ? (i.value[c] = n[c])
                                : i.issues.push({
                                      code: 'invalid_key',
                                      origin: 'record',
                                      issues: l.issues.map((m) => C(m, o, N())),
                                      input: c,
                                      path: [c],
                                      inst: e,
                                  })
                            continue
                        }
                        const s = t.valueType._zod.run(
                            { value: n[c], issues: [] },
                            o,
                        )
                        s instanceof Promise
                            ? r.push(
                                  s.then((m) => {
                                      ;(m.issues.length &&
                                          i.issues.push(...M(c, m.issues)),
                                          (i.value[l.value] = m.value))
                                  }),
                              )
                            : (s.issues.length &&
                                  i.issues.push(...M(c, s.issues)),
                              (i.value[l.value] = s.value))
                    }
                }
                return r.length ? Promise.all(r).then(() => i) : i
            }))
    }),
    Ka = d('$ZodMap', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value
                if (!(n instanceof Map))
                    return (
                        i.issues.push({
                            expected: 'map',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                        i
                    )
                const r = []
                i.value = new Map()
                for (const [a, c] of n) {
                    const l = t.keyType._zod.run({ value: a, issues: [] }, o),
                        u = t.valueType._zod.run({ value: c, issues: [] }, o)
                    l instanceof Promise || u instanceof Promise
                        ? r.push(
                              Promise.all([l, u]).then(([s, m]) => {
                                  fi(s, m, i, a, n, e, o)
                              }),
                          )
                        : fi(l, u, i, a, n, e, o)
                }
                return r.length ? Promise.all(r).then(() => i) : i
            }))
    })
function fi(e, t, i, o, n, r, a) {
    ;(e.issues.length &&
        (rn.has(typeof o)
            ? i.issues.push(...M(o, e.issues))
            : i.issues.push({
                  code: 'invalid_key',
                  origin: 'map',
                  input: n,
                  inst: r,
                  issues: e.issues.map((c) => C(c, a, N())),
              })),
        t.issues.length &&
            (rn.has(typeof o)
                ? i.issues.push(...M(o, t.issues))
                : i.issues.push({
                      origin: 'map',
                      code: 'invalid_element',
                      input: n,
                      inst: r,
                      key: o,
                      issues: t.issues.map((c) => C(c, a, N())),
                  })),
        i.value.set(e.value, t.value))
}
const Va = d('$ZodSet', (e, t) => {
    ;(b.init(e, t),
        (e._zod.parse = (i, o) => {
            const n = i.value
            if (!(n instanceof Set))
                return (
                    i.issues.push({
                        input: n,
                        inst: e,
                        expected: 'set',
                        code: 'invalid_type',
                    }),
                    i
                )
            const r = []
            i.value = new Set()
            for (const a of n) {
                const c = t.valueType._zod.run({ value: a, issues: [] }, o)
                c instanceof Promise
                    ? r.push(c.then((l) => pi(l, i)))
                    : pi(c, i)
            }
            return r.length ? Promise.all(r).then(() => i) : i
        }))
})
function pi(e, t) {
    ;(e.issues.length && t.issues.push(...e.issues), t.value.add(e.value))
}
const Ga = d('$ZodEnum', (e, t) => {
        b.init(e, t)
        const i = dt(t.entries),
            o = new Set(i)
        ;((e._zod.values = o),
            (e._zod.pattern = new RegExp(
                `^(${i
                    .filter((n) => rn.has(typeof n))
                    .map((n) => (typeof n == 'string' ? B(n) : n.toString()))
                    .join('|')})$`,
            )),
            (e._zod.parse = (n, r) => {
                const a = n.value
                return (
                    o.has(a) ||
                        n.issues.push({
                            code: 'invalid_value',
                            values: i,
                            input: a,
                            inst: e,
                        }),
                    n
                )
            }))
    }),
    Ba = d('$ZodLiteral', (e, t) => {
        if ((b.init(e, t), t.values.length === 0))
            throw new Error('Cannot create literal schema with no valid values')
        const i = new Set(t.values)
        ;((e._zod.values = i),
            (e._zod.pattern = new RegExp(
                `^(${t.values.map((o) => (typeof o == 'string' ? B(o) : o ? B(o.toString()) : String(o))).join('|')})$`,
            )),
            (e._zod.parse = (o, n) => {
                const r = o.value
                return (
                    i.has(r) ||
                        o.issues.push({
                            code: 'invalid_value',
                            values: t.values,
                            input: r,
                            inst: e,
                        }),
                    o
                )
            }))
    }),
    Wa = d('$ZodFile', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                const n = i.value
                return (
                    n instanceof File ||
                        i.issues.push({
                            expected: 'file',
                            code: 'invalid_type',
                            input: n,
                            inst: e,
                        }),
                    i
                )
            }))
    }),
    qa = d('$ZodTransform', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                if (o.direction === 'backward') throw new sn(e.constructor.name)
                const n = t.transform(i.value, i)
                if (o.async)
                    return (n instanceof Promise ? n : Promise.resolve(n)).then(
                        (a) => ((i.value = a), i),
                    )
                if (n instanceof Promise) throw new ne()
                return ((i.value = n), i)
            }))
    })
function vi(e, t) {
    return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e
}
const Zt = d('$ZodOptional', (e, t) => {
        ;(b.init(e, t),
            (e._zod.optin = 'optional'),
            (e._zod.optout = 'optional'),
            k(e._zod, 'values', () =>
                t.innerType._zod.values
                    ? new Set([...t.innerType._zod.values, void 0])
                    : void 0,
            ),
            k(e._zod, 'pattern', () => {
                const i = t.innerType._zod.pattern
                return i ? new RegExp(`^(${dn(i.source)})?$`) : void 0
            }),
            (e._zod.parse = (i, o) => {
                if (t.innerType._zod.optin === 'optional') {
                    const n = t.innerType._zod.run(i, o)
                    return n instanceof Promise
                        ? n.then((r) => vi(r, i.value))
                        : vi(n, i.value)
                }
                return i.value === void 0 ? i : t.innerType._zod.run(i, o)
            }))
    }),
    Xa = d('$ZodExactOptional', (e, t) => {
        ;(Zt.init(e, t),
            k(e._zod, 'values', () => t.innerType._zod.values),
            k(e._zod, 'pattern', () => t.innerType._zod.pattern),
            (e._zod.parse = (i, o) => t.innerType._zod.run(i, o)))
    }),
    Ya = d('$ZodNullable', (e, t) => {
        ;(b.init(e, t),
            k(e._zod, 'optin', () => t.innerType._zod.optin),
            k(e._zod, 'optout', () => t.innerType._zod.optout),
            k(e._zod, 'pattern', () => {
                const i = t.innerType._zod.pattern
                return i ? new RegExp(`^(${dn(i.source)}|null)$`) : void 0
            }),
            k(e._zod, 'values', () =>
                t.innerType._zod.values
                    ? new Set([...t.innerType._zod.values, null])
                    : void 0,
            ),
            (e._zod.parse = (i, o) =>
                i.value === null ? i : t.innerType._zod.run(i, o)))
    }),
    Ha = d('$ZodDefault', (e, t) => {
        ;(b.init(e, t),
            (e._zod.optin = 'optional'),
            k(e._zod, 'values', () => t.innerType._zod.values),
            (e._zod.parse = (i, o) => {
                if (o.direction === 'backward')
                    return t.innerType._zod.run(i, o)
                if (i.value === void 0) return ((i.value = t.defaultValue), i)
                const n = t.innerType._zod.run(i, o)
                return n instanceof Promise ? n.then((r) => gi(r, t)) : gi(n, t)
            }))
    })
function gi(e, t) {
    return (e.value === void 0 && (e.value = t.defaultValue), e)
}
const Qa = d('$ZodPrefault', (e, t) => {
        ;(b.init(e, t),
            (e._zod.optin = 'optional'),
            k(e._zod, 'values', () => t.innerType._zod.values),
            (e._zod.parse = (i, o) => (
                o.direction === 'backward' ||
                    (i.value === void 0 && (i.value = t.defaultValue)),
                t.innerType._zod.run(i, o)
            )))
    }),
    ec = d('$ZodNonOptional', (e, t) => {
        ;(b.init(e, t),
            k(e._zod, 'values', () => {
                const i = t.innerType._zod.values
                return i ? new Set([...i].filter((o) => o !== void 0)) : void 0
            }),
            (e._zod.parse = (i, o) => {
                const n = t.innerType._zod.run(i, o)
                return n instanceof Promise ? n.then((r) => hi(r, e)) : hi(n, e)
            }))
    })
function hi(e, t) {
    return (
        !e.issues.length &&
            e.value === void 0 &&
            e.issues.push({
                code: 'invalid_type',
                expected: 'nonoptional',
                input: e.value,
                inst: t,
            }),
        e
    )
}
const nc = d('$ZodSuccess', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => {
                if (o.direction === 'backward') throw new sn('ZodSuccess')
                const n = t.innerType._zod.run(i, o)
                return n instanceof Promise
                    ? n.then((r) => ((i.value = r.issues.length === 0), i))
                    : ((i.value = n.issues.length === 0), i)
            }))
    }),
    tc = d('$ZodCatch', (e, t) => {
        ;(b.init(e, t),
            k(e._zod, 'optin', () => t.innerType._zod.optin),
            k(e._zod, 'optout', () => t.innerType._zod.optout),
            k(e._zod, 'values', () => t.innerType._zod.values),
            (e._zod.parse = (i, o) => {
                if (o.direction === 'backward')
                    return t.innerType._zod.run(i, o)
                const n = t.innerType._zod.run(i, o)
                return n instanceof Promise
                    ? n.then(
                          (r) => (
                              (i.value = r.value),
                              r.issues.length &&
                                  ((i.value = t.catchValue({
                                      ...i,
                                      error: {
                                          issues: r.issues.map((a) =>
                                              C(a, o, N()),
                                          ),
                                      },
                                      input: i.value,
                                  })),
                                  (i.issues = [])),
                              i
                          ),
                      )
                    : ((i.value = n.value),
                      n.issues.length &&
                          ((i.value = t.catchValue({
                              ...i,
                              error: {
                                  issues: n.issues.map((r) => C(r, o, N())),
                              },
                              input: i.value,
                          })),
                          (i.issues = [])),
                      i)
            }))
    }),
    rc = d('$ZodNaN', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) => (
                (typeof i.value != 'number' || !Number.isNaN(i.value)) &&
                    i.issues.push({
                        input: i.value,
                        inst: e,
                        expected: 'nan',
                        code: 'invalid_type',
                    }),
                i
            )))
    }),
    ic = d('$ZodPipe', (e, t) => {
        ;(b.init(e, t),
            k(e._zod, 'values', () => t.in._zod.values),
            k(e._zod, 'optin', () => t.in._zod.optin),
            k(e._zod, 'optout', () => t.out._zod.optout),
            k(e._zod, 'propValues', () => t.in._zod.propValues),
            (e._zod.parse = (i, o) => {
                if (o.direction === 'backward') {
                    const r = t.out._zod.run(i, o)
                    return r instanceof Promise
                        ? r.then((a) => Ye(a, t.in, o))
                        : Ye(r, t.in, o)
                }
                const n = t.in._zod.run(i, o)
                return n instanceof Promise
                    ? n.then((r) => Ye(r, t.out, o))
                    : Ye(n, t.out, o)
            }))
    })
function Ye(e, t, i) {
    return e.issues.length
        ? ((e.aborted = !0), e)
        : t._zod.run({ value: e.value, issues: e.issues }, i)
}
const Tt = d('$ZodCodec', (e, t) => {
    ;(b.init(e, t),
        k(e._zod, 'values', () => t.in._zod.values),
        k(e._zod, 'optin', () => t.in._zod.optin),
        k(e._zod, 'optout', () => t.out._zod.optout),
        k(e._zod, 'propValues', () => t.in._zod.propValues),
        (e._zod.parse = (i, o) => {
            if ((o.direction || 'forward') === 'forward') {
                const r = t.in._zod.run(i, o)
                return r instanceof Promise
                    ? r.then((a) => He(a, t, o))
                    : He(r, t, o)
            } else {
                const r = t.out._zod.run(i, o)
                return r instanceof Promise
                    ? r.then((a) => He(a, t, o))
                    : He(r, t, o)
            }
        }))
})
function He(e, t, i) {
    if (e.issues.length) return ((e.aborted = !0), e)
    if ((i.direction || 'forward') === 'forward') {
        const n = t.transform(e.value, e)
        return n instanceof Promise
            ? n.then((r) => Qe(e, r, t.out, i))
            : Qe(e, n, t.out, i)
    } else {
        const n = t.reverseTransform(e.value, e)
        return n instanceof Promise
            ? n.then((r) => Qe(e, r, t.in, i))
            : Qe(e, n, t.in, i)
    }
}
function Qe(e, t, i, o) {
    return e.issues.length
        ? ((e.aborted = !0), e)
        : i._zod.run({ value: t, issues: e.issues }, o)
}
const oc = d('$ZodReadonly', (e, t) => {
    ;(b.init(e, t),
        k(e._zod, 'propValues', () => t.innerType._zod.propValues),
        k(e._zod, 'values', () => t.innerType._zod.values),
        k(e._zod, 'optin', () => t.innerType?._zod?.optin),
        k(e._zod, 'optout', () => t.innerType?._zod?.optout),
        (e._zod.parse = (i, o) => {
            if (o.direction === 'backward') return t.innerType._zod.run(i, o)
            const n = t.innerType._zod.run(i, o)
            return n instanceof Promise ? n.then($i) : $i(n)
        }))
})
function $i(e) {
    return ((e.value = Object.freeze(e.value)), e)
}
const ac = d('$ZodTemplateLiteral', (e, t) => {
        b.init(e, t)
        const i = []
        for (const o of t.parts)
            if (typeof o == 'object' && o !== null) {
                if (!o._zod.pattern)
                    throw new Error(
                        `Invalid template literal part, no pattern found: ${[...o._zod.traits].shift()}`,
                    )
                const n =
                    o._zod.pattern instanceof RegExp
                        ? o._zod.pattern.source
                        : o._zod.pattern
                if (!n)
                    throw new Error(
                        `Invalid template literal part: ${o._zod.traits}`,
                    )
                const r = n.startsWith('^') ? 1 : 0,
                    a = n.endsWith('$') ? n.length - 1 : n.length
                i.push(n.slice(r, a))
            } else if (o === null || Oi.has(typeof o)) i.push(B(`${o}`))
            else throw new Error(`Invalid template literal part: ${o}`)
        ;((e._zod.pattern = new RegExp(`^${i.join('')}$`)),
            (e._zod.parse = (o, n) =>
                typeof o.value != 'string'
                    ? (o.issues.push({
                          input: o.value,
                          inst: e,
                          expected: 'string',
                          code: 'invalid_type',
                      }),
                      o)
                    : ((e._zod.pattern.lastIndex = 0),
                      e._zod.pattern.test(o.value) ||
                          o.issues.push({
                              input: o.value,
                              inst: e,
                              code: 'invalid_format',
                              format: t.format ?? 'template_literal',
                              pattern: e._zod.pattern.source,
                          }),
                      o)))
    }),
    cc = d(
        '$ZodFunction',
        (e, t) => (
            b.init(e, t),
            (e._def = t),
            (e._zod.def = t),
            (e.implement = (i) => {
                if (typeof i != 'function')
                    throw new Error(
                        'implement() must be called with a function',
                    )
                return function (...o) {
                    const n = e._def.input ? ot(e._def.input, o) : o,
                        r = Reflect.apply(i, this, n)
                    return e._def.output ? ot(e._def.output, r) : r
                }
            }),
            (e.implementAsync = (i) => {
                if (typeof i != 'function')
                    throw new Error(
                        'implementAsync() must be called with a function',
                    )
                return async function (...o) {
                    const n = e._def.input ? await at(e._def.input, o) : o,
                        r = await Reflect.apply(i, this, n)
                    return e._def.output ? await at(e._def.output, r) : r
                }
            }),
            (e._zod.parse = (i, o) =>
                typeof i.value != 'function'
                    ? (i.issues.push({
                          code: 'invalid_type',
                          expected: 'function',
                          input: i.value,
                          inst: e,
                      }),
                      i)
                    : (e._def.output &&
                      e._def.output._zod.def.type === 'promise'
                          ? (i.value = e.implementAsync(i.value))
                          : (i.value = e.implement(i.value)),
                      i)),
            (e.input = (...i) => {
                const o = e.constructor
                return Array.isArray(i[0])
                    ? new o({
                          type: 'function',
                          input: new Pt({
                              type: 'tuple',
                              items: i[0],
                              rest: i[1],
                          }),
                          output: e._def.output,
                      })
                    : new o({
                          type: 'function',
                          input: i[0],
                          output: e._def.output,
                      })
            }),
            (e.output = (i) => {
                const o = e.constructor
                return new o({
                    type: 'function',
                    input: e._def.input,
                    output: i,
                })
            }),
            e
        ),
    ),
    uc = d('$ZodPromise', (e, t) => {
        ;(b.init(e, t),
            (e._zod.parse = (i, o) =>
                Promise.resolve(i.value).then((n) =>
                    t.innerType._zod.run({ value: n, issues: [] }, o),
                )))
    }),
    lc = d('$ZodLazy', (e, t) => {
        ;(b.init(e, t),
            k(e._zod, 'innerType', () => t.getter()),
            k(e._zod, 'pattern', () => e._zod.innerType?._zod?.pattern),
            k(e._zod, 'propValues', () => e._zod.innerType?._zod?.propValues),
            k(e._zod, 'optin', () => e._zod.innerType?._zod?.optin ?? void 0),
            k(e._zod, 'optout', () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (i, o) => e._zod.innerType._zod.run(i, o)))
    }),
    sc = d('$ZodCustom', (e, t) => {
        ;(j.init(e, t),
            b.init(e, t),
            (e._zod.parse = (i, o) => i),
            (e._zod.check = (i) => {
                const o = i.value,
                    n = t.fn(o)
                if (n instanceof Promise) return n.then((r) => _i(r, i, o, e))
                _i(n, i, o, e)
            }))
    })
function _i(e, t, i, o) {
    if (!e) {
        const n = {
            code: 'custom',
            input: i,
            inst: o,
            path: [...(o._zod.def.path ?? [])],
            continue: !o._zod.def.abort,
        }
        ;(o._zod.def.params && (n.params = o._zod.def.params),
            t.issues.push(le(n)))
    }
}
const kd = () => {
    const e = {
        string: { unit: 'حرف', verb: 'أن يحوي' },
        file: { unit: 'بايت', verb: 'أن يحوي' },
        array: { unit: 'عنصر', verb: 'أن يحوي' },
        set: { unit: 'عنصر', verb: 'أن يحوي' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'مدخل',
            email: 'بريد إلكتروني',
            url: 'رابط',
            emoji: 'إيموجي',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'تاريخ ووقت بمعيار ISO',
            date: 'تاريخ بمعيار ISO',
            time: 'وقت بمعيار ISO',
            duration: 'مدة بمعيار ISO',
            ipv4: 'عنوان IPv4',
            ipv6: 'عنوان IPv6',
            cidrv4: 'مدى عناوين بصيغة IPv4',
            cidrv6: 'مدى عناوين بصيغة IPv6',
            base64: 'نَص بترميز base64-encoded',
            base64url: 'نَص بترميز base64url-encoded',
            json_string: 'نَص على هيئة JSON',
            e164: 'رقم هاتف بمعيار E.164',
            jwt: 'JWT',
            template_literal: 'مدخل',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${n.expected}، ولكن تم إدخال ${c}`
                    : `مدخلات غير مقبولة: يفترض إدخال ${r}، ولكن تم إدخال ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `مدخلات غير مقبولة: يفترض إدخال ${$(n.values[0])}`
                    : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? 'القيمة'} ${r} ${n.maximum.toString()} ${a.unit ?? 'عنصر'}`
                    : `أكبر من اللازم: يفترض أن تكون ${n.origin ?? 'القيمة'} ${r} ${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${r} ${n.minimum.toString()} ${a.unit}`
                    : `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${r} ${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"`
                    : r.format === 'ends_with'
                      ? `نَص غير مقبول: يجب أن ينتهي بـ "${r.suffix}"`
                      : r.format === 'includes'
                        ? `نَص غير مقبول: يجب أن يتضمَّن "${r.includes}"`
                        : r.format === 'regex'
                          ? `نَص غير مقبول: يجب أن يطابق النمط ${r.pattern}`
                          : `${i[r.format] ?? n.format} غير مقبول`
            }
            case 'not_multiple_of':
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`
            case 'unrecognized_keys':
                return `معرف${n.keys.length > 1 ? 'ات' : ''} غريب${n.keys.length > 1 ? 'ة' : ''}: ${p(n.keys, '، ')}`
            case 'invalid_key':
                return `معرف غير مقبول في ${n.origin}`
            case 'invalid_union':
                return 'مدخل غير مقبول'
            case 'invalid_element':
                return `مدخل غير مقبول في ${n.origin}`
            default:
                return 'مدخل غير مقبول'
        }
    }
}
function Sd() {
    return { localeError: kd() }
}
const zd = () => {
    const e = {
        string: { unit: 'simvol', verb: 'olmalıdır' },
        file: { unit: 'bayt', verb: 'olmalıdır' },
        array: { unit: 'element', verb: 'olmalıdır' },
        set: { unit: 'element', verb: 'olmalıdır' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'email address',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO datetime',
            date: 'ISO date',
            time: 'ISO time',
            duration: 'ISO duration',
            ipv4: 'IPv4 address',
            ipv6: 'IPv6 address',
            cidrv4: 'IPv4 range',
            cidrv6: 'IPv6 range',
            base64: 'base64-encoded string',
            base64url: 'base64url-encoded string',
            json_string: 'JSON string',
            e164: 'E.164 number',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Yanlış dəyər: gözlənilən instanceof ${n.expected}, daxil olan ${c}`
                    : `Yanlış dəyər: gözlənilən ${r}, daxil olan ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Yanlış dəyər: gözlənilən ${$(n.values[0])}`
                    : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Çox böyük: gözlənilən ${n.origin ?? 'dəyər'} ${r}${n.maximum.toString()} ${a.unit ?? 'element'}`
                    : `Çox böyük: gözlənilən ${n.origin ?? 'dəyər'} ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Çox kiçik: gözlənilən ${n.origin} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Çox kiçik: gözlənilən ${n.origin} ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Yanlış mətn: "${r.prefix}" ilə başlamalıdır`
                    : r.format === 'ends_with'
                      ? `Yanlış mətn: "${r.suffix}" ilə bitməlidir`
                      : r.format === 'includes'
                        ? `Yanlış mətn: "${r.includes}" daxil olmalıdır`
                        : r.format === 'regex'
                          ? `Yanlış mətn: ${r.pattern} şablonuna uyğun olmalıdır`
                          : `Yanlış ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`
            case 'unrecognized_keys':
                return `Tanınmayan açar${n.keys.length > 1 ? 'lar' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `${n.origin} daxilində yanlış açar`
            case 'invalid_union':
                return 'Yanlış dəyər'
            case 'invalid_element':
                return `${n.origin} daxilində yanlış dəyər`
            default:
                return 'Yanlış dəyər'
        }
    }
}
function Id() {
    return { localeError: zd() }
}
function bi(e, t, i, o) {
    const n = Math.abs(e),
        r = n % 10,
        a = n % 100
    return a >= 11 && a <= 19 ? o : r === 1 ? t : r >= 2 && r <= 4 ? i : o
}
const wd = () => {
    const e = {
        string: {
            unit: { one: 'сімвал', few: 'сімвалы', many: 'сімвалаў' },
            verb: 'мець',
        },
        array: {
            unit: { one: 'элемент', few: 'элементы', many: 'элементаў' },
            verb: 'мець',
        },
        set: {
            unit: { one: 'элемент', few: 'элементы', many: 'элементаў' },
            verb: 'мець',
        },
        file: {
            unit: { one: 'байт', few: 'байты', many: 'байтаў' },
            verb: 'мець',
        },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'увод',
            email: 'email адрас',
            url: 'URL',
            emoji: 'эмодзі',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO дата і час',
            date: 'ISO дата',
            time: 'ISO час',
            duration: 'ISO працягласць',
            ipv4: 'IPv4 адрас',
            ipv6: 'IPv6 адрас',
            cidrv4: 'IPv4 дыяпазон',
            cidrv6: 'IPv6 дыяпазон',
            base64: 'радок у фармаце base64',
            base64url: 'радок у фармаце base64url',
            json_string: 'JSON радок',
            e164: 'нумар E.164',
            jwt: 'JWT',
            template_literal: 'увод',
        },
        o = { nan: 'NaN', number: 'лік', array: 'масіў' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Няправільны ўвод: чакаўся instanceof ${n.expected}, атрымана ${c}`
                    : `Няправільны ўвод: чакаўся ${r}, атрымана ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Няправільны ўвод: чакалася ${$(n.values[0])}`
                    : `Няправільны варыянт: чакаўся адзін з ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                if (a) {
                    const c = Number(n.maximum),
                        l = bi(c, a.unit.one, a.unit.few, a.unit.many)
                    return `Занадта вялікі: чакалася, што ${n.origin ?? 'значэнне'} павінна ${a.verb} ${r}${n.maximum.toString()} ${l}`
                }
                return `Занадта вялікі: чакалася, што ${n.origin ?? 'значэнне'} павінна быць ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                if (a) {
                    const c = Number(n.minimum),
                        l = bi(c, a.unit.one, a.unit.few, a.unit.many)
                    return `Занадта малы: чакалася, што ${n.origin} павінна ${a.verb} ${r}${n.minimum.toString()} ${l}`
                }
                return `Занадта малы: чакалася, што ${n.origin} павінна быць ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Няправільны радок: павінен пачынацца з "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Няправільны радок: павінен заканчвацца на "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Няправільны радок: павінен змяшчаць "${r.includes}"`
                        : r.format === 'regex'
                          ? `Няправільны радок: павінен адпавядаць шаблону ${r.pattern}`
                          : `Няправільны ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Няправільны лік: павінен быць кратным ${n.divisor}`
            case 'unrecognized_keys':
                return `Нераспазнаны ${n.keys.length > 1 ? 'ключы' : 'ключ'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Няправільны ключ у ${n.origin}`
            case 'invalid_union':
                return 'Няправільны ўвод'
            case 'invalid_element':
                return `Няправільнае значэнне ў ${n.origin}`
            default:
                return 'Няправільны ўвод'
        }
    }
}
function xd() {
    return { localeError: wd() }
}
const Ud = () => {
    const e = {
        string: { unit: 'символа', verb: 'да съдържа' },
        file: { unit: 'байта', verb: 'да съдържа' },
        array: { unit: 'елемента', verb: 'да съдържа' },
        set: { unit: 'елемента', verb: 'да съдържа' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'вход',
            email: 'имейл адрес',
            url: 'URL',
            emoji: 'емоджи',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO време',
            date: 'ISO дата',
            time: 'ISO време',
            duration: 'ISO продължителност',
            ipv4: 'IPv4 адрес',
            ipv6: 'IPv6 адрес',
            cidrv4: 'IPv4 диапазон',
            cidrv6: 'IPv6 диапазон',
            base64: 'base64-кодиран низ',
            base64url: 'base64url-кодиран низ',
            json_string: 'JSON низ',
            e164: 'E.164 номер',
            jwt: 'JWT',
            template_literal: 'вход',
        },
        o = { nan: 'NaN', number: 'число', array: 'масив' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Невалиден вход: очакван instanceof ${n.expected}, получен ${c}`
                    : `Невалиден вход: очакван ${r}, получен ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Невалиден вход: очакван ${$(n.values[0])}`
                    : `Невалидна опция: очаквано едно от ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Твърде голямо: очаква се ${n.origin ?? 'стойност'} да съдържа ${r}${n.maximum.toString()} ${a.unit ?? 'елемента'}`
                    : `Твърде голямо: очаква се ${n.origin ?? 'стойност'} да бъде ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Твърде малко: очаква се ${n.origin} да съдържа ${r}${n.minimum.toString()} ${a.unit}`
                    : `Твърде малко: очаква се ${n.origin} да бъде ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                if (r.format === 'starts_with')
                    return `Невалиден низ: трябва да започва с "${r.prefix}"`
                if (r.format === 'ends_with')
                    return `Невалиден низ: трябва да завършва с "${r.suffix}"`
                if (r.format === 'includes')
                    return `Невалиден низ: трябва да включва "${r.includes}"`
                if (r.format === 'regex')
                    return `Невалиден низ: трябва да съвпада с ${r.pattern}`
                let a = 'Невалиден'
                return (
                    r.format === 'emoji' && (a = 'Невалидно'),
                    r.format === 'datetime' && (a = 'Невалидно'),
                    r.format === 'date' && (a = 'Невалидна'),
                    r.format === 'time' && (a = 'Невалидно'),
                    r.format === 'duration' && (a = 'Невалидна'),
                    `${a} ${i[r.format] ?? n.format}`
                )
            }
            case 'not_multiple_of':
                return `Невалидно число: трябва да бъде кратно на ${n.divisor}`
            case 'unrecognized_keys':
                return `Неразпознат${n.keys.length > 1 ? 'и' : ''} ключ${n.keys.length > 1 ? 'ове' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Невалиден ключ в ${n.origin}`
            case 'invalid_union':
                return 'Невалиден вход'
            case 'invalid_element':
                return `Невалидна стойност в ${n.origin}`
            default:
                return 'Невалиден вход'
        }
    }
}
function jd() {
    return { localeError: Ud() }
}
const Od = () => {
    const e = {
        string: { unit: 'caràcters', verb: 'contenir' },
        file: { unit: 'bytes', verb: 'contenir' },
        array: { unit: 'elements', verb: 'contenir' },
        set: { unit: 'elements', verb: 'contenir' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'entrada',
            email: 'adreça electrònica',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'data i hora ISO',
            date: 'data ISO',
            time: 'hora ISO',
            duration: 'durada ISO',
            ipv4: 'adreça IPv4',
            ipv6: 'adreça IPv6',
            cidrv4: 'rang IPv4',
            cidrv6: 'rang IPv6',
            base64: 'cadena codificada en base64',
            base64url: 'cadena codificada en base64url',
            json_string: 'cadena JSON',
            e164: 'número E.164',
            jwt: 'JWT',
            template_literal: 'entrada',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Tipus invàlid: s'esperava instanceof ${n.expected}, s'ha rebut ${c}`
                    : `Tipus invàlid: s'esperava ${r}, s'ha rebut ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Valor invàlid: s'esperava ${$(n.values[0])}`
                    : `Opció invàlida: s'esperava una de ${p(n.values, ' o ')}`
            case 'too_big': {
                const r = n.inclusive ? 'com a màxim' : 'menys de',
                    a = t(n.origin)
                return a
                    ? `Massa gran: s'esperava que ${n.origin ?? 'el valor'} contingués ${r} ${n.maximum.toString()} ${a.unit ?? 'elements'}`
                    : `Massa gran: s'esperava que ${n.origin ?? 'el valor'} fos ${r} ${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? 'com a mínim' : 'més de',
                    a = t(n.origin)
                return a
                    ? `Massa petit: s'esperava que ${n.origin} contingués ${r} ${n.minimum.toString()} ${a.unit}`
                    : `Massa petit: s'esperava que ${n.origin} fos ${r} ${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Format invàlid: ha de començar amb "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Format invàlid: ha d'acabar amb "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Format invàlid: ha d'incloure "${r.includes}"`
                        : r.format === 'regex'
                          ? `Format invàlid: ha de coincidir amb el patró ${r.pattern}`
                          : `Format invàlid per a ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Número invàlid: ha de ser múltiple de ${n.divisor}`
            case 'unrecognized_keys':
                return `Clau${n.keys.length > 1 ? 's' : ''} no reconeguda${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Clau invàlida a ${n.origin}`
            case 'invalid_union':
                return 'Entrada invàlida'
            case 'invalid_element':
                return `Element invàlid a ${n.origin}`
            default:
                return 'Entrada invàlida'
        }
    }
}
function Dd() {
    return { localeError: Od() }
}
const Nd = () => {
    const e = {
        string: { unit: 'znaků', verb: 'mít' },
        file: { unit: 'bajtů', verb: 'mít' },
        array: { unit: 'prvků', verb: 'mít' },
        set: { unit: 'prvků', verb: 'mít' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'regulární výraz',
            email: 'e-mailová adresa',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'datum a čas ve formátu ISO',
            date: 'datum ve formátu ISO',
            time: 'čas ve formátu ISO',
            duration: 'doba trvání ISO',
            ipv4: 'IPv4 adresa',
            ipv6: 'IPv6 adresa',
            cidrv4: 'rozsah IPv4',
            cidrv6: 'rozsah IPv6',
            base64: 'řetězec zakódovaný ve formátu base64',
            base64url: 'řetězec zakódovaný ve formátu base64url',
            json_string: 'řetězec ve formátu JSON',
            e164: 'číslo E.164',
            jwt: 'JWT',
            template_literal: 'vstup',
        },
        o = {
            nan: 'NaN',
            number: 'číslo',
            string: 'řetězec',
            function: 'funkce',
            array: 'pole',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Neplatný vstup: očekáváno instanceof ${n.expected}, obdrženo ${c}`
                    : `Neplatný vstup: očekáváno ${r}, obdrženo ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Neplatný vstup: očekáváno ${$(n.values[0])}`
                    : `Neplatná možnost: očekávána jedna z hodnot ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Hodnota je příliš velká: ${n.origin ?? 'hodnota'} musí mít ${r}${n.maximum.toString()} ${a.unit ?? 'prvků'}`
                    : `Hodnota je příliš velká: ${n.origin ?? 'hodnota'} musí být ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Hodnota je příliš malá: ${n.origin ?? 'hodnota'} musí mít ${r}${n.minimum.toString()} ${a.unit ?? 'prvků'}`
                    : `Hodnota je příliš malá: ${n.origin ?? 'hodnota'} musí být ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Neplatný řetězec: musí začínat na "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Neplatný řetězec: musí končit na "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Neplatný řetězec: musí obsahovat "${r.includes}"`
                        : r.format === 'regex'
                          ? `Neplatný řetězec: musí odpovídat vzoru ${r.pattern}`
                          : `Neplatný formát ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Neplatné číslo: musí být násobkem ${n.divisor}`
            case 'unrecognized_keys':
                return `Neznámé klíče: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Neplatný klíč v ${n.origin}`
            case 'invalid_union':
                return 'Neplatný vstup'
            case 'invalid_element':
                return `Neplatná hodnota v ${n.origin}`
            default:
                return 'Neplatný vstup'
        }
    }
}
function Pd() {
    return { localeError: Nd() }
}
const Zd = () => {
    const e = {
        string: { unit: 'tegn', verb: 'havde' },
        file: { unit: 'bytes', verb: 'havde' },
        array: { unit: 'elementer', verb: 'indeholdt' },
        set: { unit: 'elementer', verb: 'indeholdt' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'e-mailadresse',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO dato- og klokkeslæt',
            date: 'ISO-dato',
            time: 'ISO-klokkeslæt',
            duration: 'ISO-varighed',
            ipv4: 'IPv4-område',
            ipv6: 'IPv6-område',
            cidrv4: 'IPv4-spektrum',
            cidrv6: 'IPv6-spektrum',
            base64: 'base64-kodet streng',
            base64url: 'base64url-kodet streng',
            json_string: 'JSON-streng',
            e164: 'E.164-nummer',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = {
            nan: 'NaN',
            string: 'streng',
            number: 'tal',
            boolean: 'boolean',
            array: 'liste',
            object: 'objekt',
            set: 'sæt',
            file: 'fil',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Ugyldigt input: forventede instanceof ${n.expected}, fik ${c}`
                    : `Ugyldigt input: forventede ${r}, fik ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Ugyldig værdi: forventede ${$(n.values[0])}`
                    : `Ugyldigt valg: forventede en af følgende ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin
                return a
                    ? `For stor: forventede ${c ?? 'value'} ${a.verb} ${r} ${n.maximum.toString()} ${a.unit ?? 'elementer'}`
                    : `For stor: forventede ${c ?? 'value'} havde ${r} ${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin
                return a
                    ? `For lille: forventede ${c} ${a.verb} ${r} ${n.minimum.toString()} ${a.unit}`
                    : `For lille: forventede ${c} havde ${r} ${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ugyldig streng: skal starte med "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Ugyldig streng: skal ende med "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Ugyldig streng: skal indeholde "${r.includes}"`
                        : r.format === 'regex'
                          ? `Ugyldig streng: skal matche mønsteret ${r.pattern}`
                          : `Ugyldig ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Ugyldigt tal: skal være deleligt med ${n.divisor}`
            case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Ukendte nøgler' : 'Ukendt nøgle'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Ugyldig nøgle i ${n.origin}`
            case 'invalid_union':
                return 'Ugyldigt input: matcher ingen af de tilladte typer'
            case 'invalid_element':
                return `Ugyldig værdi i ${n.origin}`
            default:
                return 'Ugyldigt input'
        }
    }
}
function Td() {
    return { localeError: Zd() }
}
const Ed = () => {
    const e = {
        string: { unit: 'Zeichen', verb: 'zu haben' },
        file: { unit: 'Bytes', verb: 'zu haben' },
        array: { unit: 'Elemente', verb: 'zu haben' },
        set: { unit: 'Elemente', verb: 'zu haben' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'Eingabe',
            email: 'E-Mail-Adresse',
            url: 'URL',
            emoji: 'Emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO-Datum und -Uhrzeit',
            date: 'ISO-Datum',
            time: 'ISO-Uhrzeit',
            duration: 'ISO-Dauer',
            ipv4: 'IPv4-Adresse',
            ipv6: 'IPv6-Adresse',
            cidrv4: 'IPv4-Bereich',
            cidrv6: 'IPv6-Bereich',
            base64: 'Base64-codierter String',
            base64url: 'Base64-URL-codierter String',
            json_string: 'JSON-String',
            e164: 'E.164-Nummer',
            jwt: 'JWT',
            template_literal: 'Eingabe',
        },
        o = { nan: 'NaN', number: 'Zahl', array: 'Array' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Ungültige Eingabe: erwartet instanceof ${n.expected}, erhalten ${c}`
                    : `Ungültige Eingabe: erwartet ${r}, erhalten ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Ungültige Eingabe: erwartet ${$(n.values[0])}`
                    : `Ungültige Option: erwartet eine von ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Zu groß: erwartet, dass ${n.origin ?? 'Wert'} ${r}${n.maximum.toString()} ${a.unit ?? 'Elemente'} hat`
                    : `Zu groß: erwartet, dass ${n.origin ?? 'Wert'} ${r}${n.maximum.toString()} ist`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Zu klein: erwartet, dass ${n.origin} ${r}${n.minimum.toString()} ${a.unit} hat`
                    : `Zu klein: erwartet, dass ${n.origin} ${r}${n.minimum.toString()} ist`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ungültiger String: muss mit "${r.prefix}" beginnen`
                    : r.format === 'ends_with'
                      ? `Ungültiger String: muss mit "${r.suffix}" enden`
                      : r.format === 'includes'
                        ? `Ungültiger String: muss "${r.includes}" enthalten`
                        : r.format === 'regex'
                          ? `Ungültiger String: muss dem Muster ${r.pattern} entsprechen`
                          : `Ungültig: ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`
            case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Unbekannte Schlüssel' : 'Unbekannter Schlüssel'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Ungültiger Schlüssel in ${n.origin}`
            case 'invalid_union':
                return 'Ungültige Eingabe'
            case 'invalid_element':
                return `Ungültiger Wert in ${n.origin}`
            default:
                return 'Ungültige Eingabe'
        }
    }
}
function Ad() {
    return { localeError: Ed() }
}
const Rd = () => {
    const e = {
        string: { unit: 'characters', verb: 'to have' },
        file: { unit: 'bytes', verb: 'to have' },
        array: { unit: 'items', verb: 'to have' },
        set: { unit: 'items', verb: 'to have' },
        map: { unit: 'entries', verb: 'to have' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'email address',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO datetime',
            date: 'ISO date',
            time: 'ISO time',
            duration: 'ISO duration',
            ipv4: 'IPv4 address',
            ipv6: 'IPv6 address',
            mac: 'MAC address',
            cidrv4: 'IPv4 range',
            cidrv6: 'IPv6 range',
            base64: 'base64-encoded string',
            base64url: 'base64url-encoded string',
            json_string: 'JSON string',
            e164: 'E.164 number',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return `Invalid input: expected ${r}, received ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Invalid input: expected ${$(n.values[0])}`
                    : `Invalid option: expected one of ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Too big: expected ${n.origin ?? 'value'} to have ${r}${n.maximum.toString()} ${a.unit ?? 'elements'}`
                    : `Too big: expected ${n.origin ?? 'value'} to be ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Too small: expected ${n.origin} to have ${r}${n.minimum.toString()} ${a.unit}`
                    : `Too small: expected ${n.origin} to be ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Invalid string: must start with "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Invalid string: must end with "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Invalid string: must include "${r.includes}"`
                        : r.format === 'regex'
                          ? `Invalid string: must match pattern ${r.pattern}`
                          : `Invalid ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Invalid number: must be a multiple of ${n.divisor}`
            case 'unrecognized_keys':
                return `Unrecognized key${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Invalid key in ${n.origin}`
            case 'invalid_union':
                return 'Invalid input'
            case 'invalid_element':
                return `Invalid value in ${n.origin}`
            default:
                return 'Invalid input'
        }
    }
}
function dc() {
    return { localeError: Rd() }
}
const Fd = () => {
    const e = {
        string: { unit: 'karaktrojn', verb: 'havi' },
        file: { unit: 'bajtojn', verb: 'havi' },
        array: { unit: 'elementojn', verb: 'havi' },
        set: { unit: 'elementojn', verb: 'havi' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'enigo',
            email: 'retadreso',
            url: 'URL',
            emoji: 'emoĝio',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO-datotempo',
            date: 'ISO-dato',
            time: 'ISO-tempo',
            duration: 'ISO-daŭro',
            ipv4: 'IPv4-adreso',
            ipv6: 'IPv6-adreso',
            cidrv4: 'IPv4-rango',
            cidrv6: 'IPv6-rango',
            base64: '64-ume kodita karaktraro',
            base64url: 'URL-64-ume kodita karaktraro',
            json_string: 'JSON-karaktraro',
            e164: 'E.164-nombro',
            jwt: 'JWT',
            template_literal: 'enigo',
        },
        o = { nan: 'NaN', number: 'nombro', array: 'tabelo', null: 'senvalora' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Nevalida enigo: atendiĝis instanceof ${n.expected}, riceviĝis ${c}`
                    : `Nevalida enigo: atendiĝis ${r}, riceviĝis ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Nevalida enigo: atendiĝis ${$(n.values[0])}`
                    : `Nevalida opcio: atendiĝis unu el ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Tro granda: atendiĝis ke ${n.origin ?? 'valoro'} havu ${r}${n.maximum.toString()} ${a.unit ?? 'elementojn'}`
                    : `Tro granda: atendiĝis ke ${n.origin ?? 'valoro'} havu ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Tro malgranda: atendiĝis ke ${n.origin} havu ${r}${n.minimum.toString()} ${a.unit}`
                    : `Tro malgranda: atendiĝis ke ${n.origin} estu ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Nevalida karaktraro: devas komenciĝi per "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Nevalida karaktraro: devas finiĝi per "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Nevalida karaktraro: devas inkluzivi "${r.includes}"`
                        : r.format === 'regex'
                          ? `Nevalida karaktraro: devas kongrui kun la modelo ${r.pattern}`
                          : `Nevalida ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Nevalida nombro: devas esti oblo de ${n.divisor}`
            case 'unrecognized_keys':
                return `Nekonata${n.keys.length > 1 ? 'j' : ''} ŝlosilo${n.keys.length > 1 ? 'j' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Nevalida ŝlosilo en ${n.origin}`
            case 'invalid_union':
                return 'Nevalida enigo'
            case 'invalid_element':
                return `Nevalida valoro en ${n.origin}`
            default:
                return 'Nevalida enigo'
        }
    }
}
function Ld() {
    return { localeError: Fd() }
}
const Cd = () => {
    const e = {
        string: { unit: 'caracteres', verb: 'tener' },
        file: { unit: 'bytes', verb: 'tener' },
        array: { unit: 'elementos', verb: 'tener' },
        set: { unit: 'elementos', verb: 'tener' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'entrada',
            email: 'dirección de correo electrónico',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'fecha y hora ISO',
            date: 'fecha ISO',
            time: 'hora ISO',
            duration: 'duración ISO',
            ipv4: 'dirección IPv4',
            ipv6: 'dirección IPv6',
            cidrv4: 'rango IPv4',
            cidrv6: 'rango IPv6',
            base64: 'cadena codificada en base64',
            base64url: 'URL codificada en base64',
            json_string: 'cadena JSON',
            e164: 'número E.164',
            jwt: 'JWT',
            template_literal: 'entrada',
        },
        o = {
            nan: 'NaN',
            string: 'texto',
            number: 'número',
            boolean: 'booleano',
            array: 'arreglo',
            object: 'objeto',
            set: 'conjunto',
            file: 'archivo',
            date: 'fecha',
            bigint: 'número grande',
            symbol: 'símbolo',
            undefined: 'indefinido',
            null: 'nulo',
            function: 'función',
            map: 'mapa',
            record: 'registro',
            tuple: 'tupla',
            enum: 'enumeración',
            union: 'unión',
            literal: 'literal',
            promise: 'promesa',
            void: 'vacío',
            never: 'nunca',
            unknown: 'desconocido',
            any: 'cualquiera',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Entrada inválida: se esperaba instanceof ${n.expected}, recibido ${c}`
                    : `Entrada inválida: se esperaba ${r}, recibido ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Entrada inválida: se esperaba ${$(n.values[0])}`
                    : `Opción inválida: se esperaba una de ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin
                return a
                    ? `Demasiado grande: se esperaba que ${c ?? 'valor'} tuviera ${r}${n.maximum.toString()} ${a.unit ?? 'elementos'}`
                    : `Demasiado grande: se esperaba que ${c ?? 'valor'} fuera ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin),
                    c = o[n.origin] ?? n.origin
                return a
                    ? `Demasiado pequeño: se esperaba que ${c} tuviera ${r}${n.minimum.toString()} ${a.unit}`
                    : `Demasiado pequeño: se esperaba que ${c} fuera ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Cadena inválida: debe comenzar con "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Cadena inválida: debe terminar en "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Cadena inválida: debe incluir "${r.includes}"`
                        : r.format === 'regex'
                          ? `Cadena inválida: debe coincidir con el patrón ${r.pattern}`
                          : `Inválido ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Número inválido: debe ser múltiplo de ${n.divisor}`
            case 'unrecognized_keys':
                return `Llave${n.keys.length > 1 ? 's' : ''} desconocida${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Llave inválida en ${o[n.origin] ?? n.origin}`
            case 'invalid_union':
                return 'Entrada inválida'
            case 'invalid_element':
                return `Valor inválido en ${o[n.origin] ?? n.origin}`
            default:
                return 'Entrada inválida'
        }
    }
}
function Jd() {
    return { localeError: Cd() }
}
const Md = () => {
    const e = {
        string: { unit: 'کاراکتر', verb: 'داشته باشد' },
        file: { unit: 'بایت', verb: 'داشته باشد' },
        array: { unit: 'آیتم', verb: 'داشته باشد' },
        set: { unit: 'آیتم', verb: 'داشته باشد' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ورودی',
            email: 'آدرس ایمیل',
            url: 'URL',
            emoji: 'ایموجی',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'تاریخ و زمان ایزو',
            date: 'تاریخ ایزو',
            time: 'زمان ایزو',
            duration: 'مدت زمان ایزو',
            ipv4: 'IPv4 آدرس',
            ipv6: 'IPv6 آدرس',
            cidrv4: 'IPv4 دامنه',
            cidrv6: 'IPv6 دامنه',
            base64: 'base64-encoded رشته',
            base64url: 'base64url-encoded رشته',
            json_string: 'JSON رشته',
            e164: 'E.164 عدد',
            jwt: 'JWT',
            template_literal: 'ورودی',
        },
        o = { nan: 'NaN', number: 'عدد', array: 'آرایه' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `ورودی نامعتبر: می‌بایست instanceof ${n.expected} می‌بود، ${c} دریافت شد`
                    : `ورودی نامعتبر: می‌بایست ${r} می‌بود، ${c} دریافت شد`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `ورودی نامعتبر: می‌بایست ${$(n.values[0])} می‌بود`
                    : `گزینه نامعتبر: می‌بایست یکی از ${p(n.values, '|')} می‌بود`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `خیلی بزرگ: ${n.origin ?? 'مقدار'} باید ${r}${n.maximum.toString()} ${a.unit ?? 'عنصر'} باشد`
                    : `خیلی بزرگ: ${n.origin ?? 'مقدار'} باید ${r}${n.maximum.toString()} باشد`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `خیلی کوچک: ${n.origin} باید ${r}${n.minimum.toString()} ${a.unit} باشد`
                    : `خیلی کوچک: ${n.origin} باید ${r}${n.minimum.toString()} باشد`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `رشته نامعتبر: باید با "${r.prefix}" شروع شود`
                    : r.format === 'ends_with'
                      ? `رشته نامعتبر: باید با "${r.suffix}" تمام شود`
                      : r.format === 'includes'
                        ? `رشته نامعتبر: باید شامل "${r.includes}" باشد`
                        : r.format === 'regex'
                          ? `رشته نامعتبر: باید با الگوی ${r.pattern} مطابقت داشته باشد`
                          : `${i[r.format] ?? n.format} نامعتبر`
            }
            case 'not_multiple_of':
                return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`
            case 'unrecognized_keys':
                return `کلید${n.keys.length > 1 ? 'های' : ''} ناشناس: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `کلید ناشناس در ${n.origin}`
            case 'invalid_union':
                return 'ورودی نامعتبر'
            case 'invalid_element':
                return `مقدار نامعتبر در ${n.origin}`
            default:
                return 'ورودی نامعتبر'
        }
    }
}
function Kd() {
    return { localeError: Md() }
}
const Vd = () => {
    const e = {
        string: { unit: 'merkkiä', subject: 'merkkijonon' },
        file: { unit: 'tavua', subject: 'tiedoston' },
        array: { unit: 'alkiota', subject: 'listan' },
        set: { unit: 'alkiota', subject: 'joukon' },
        number: { unit: '', subject: 'luvun' },
        bigint: { unit: '', subject: 'suuren kokonaisluvun' },
        int: { unit: '', subject: 'kokonaisluvun' },
        date: { unit: '', subject: 'päivämäärän' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'säännöllinen lauseke',
            email: 'sähköpostiosoite',
            url: 'URL-osoite',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO-aikaleima',
            date: 'ISO-päivämäärä',
            time: 'ISO-aika',
            duration: 'ISO-kesto',
            ipv4: 'IPv4-osoite',
            ipv6: 'IPv6-osoite',
            cidrv4: 'IPv4-alue',
            cidrv6: 'IPv6-alue',
            base64: 'base64-koodattu merkkijono',
            base64url: 'base64url-koodattu merkkijono',
            json_string: 'JSON-merkkijono',
            e164: 'E.164-luku',
            jwt: 'JWT',
            template_literal: 'templaattimerkkijono',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Virheellinen tyyppi: odotettiin instanceof ${n.expected}, oli ${c}`
                    : `Virheellinen tyyppi: odotettiin ${r}, oli ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Virheellinen syöte: täytyy olla ${$(n.values[0])}`
                    : `Virheellinen valinta: täytyy olla yksi seuraavista: ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Liian suuri: ${a.subject} täytyy olla ${r}${n.maximum.toString()} ${a.unit}`.trim()
                    : `Liian suuri: arvon täytyy olla ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Liian pieni: ${a.subject} täytyy olla ${r}${n.minimum.toString()} ${a.unit}`.trim()
                    : `Liian pieni: arvon täytyy olla ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Virheellinen syöte: täytyy alkaa "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Virheellinen syöte: täytyy loppua "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Virheellinen syöte: täytyy sisältää "${r.includes}"`
                        : r.format === 'regex'
                          ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${r.pattern}`
                          : `Virheellinen ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`
            case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Tuntemattomat avaimet' : 'Tuntematon avain'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return 'Virheellinen avain tietueessa'
            case 'invalid_union':
                return 'Virheellinen unioni'
            case 'invalid_element':
                return 'Virheellinen arvo joukossa'
            default:
                return 'Virheellinen syöte'
        }
    }
}
function Gd() {
    return { localeError: Vd() }
}
const Bd = () => {
    const e = {
        string: { unit: 'caractères', verb: 'avoir' },
        file: { unit: 'octets', verb: 'avoir' },
        array: { unit: 'éléments', verb: 'avoir' },
        set: { unit: 'éléments', verb: 'avoir' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'entrée',
            email: 'adresse e-mail',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'date et heure ISO',
            date: 'date ISO',
            time: 'heure ISO',
            duration: 'durée ISO',
            ipv4: 'adresse IPv4',
            ipv6: 'adresse IPv6',
            cidrv4: 'plage IPv4',
            cidrv6: 'plage IPv6',
            base64: 'chaîne encodée en base64',
            base64url: 'chaîne encodée en base64url',
            json_string: 'chaîne JSON',
            e164: 'numéro E.164',
            jwt: 'JWT',
            template_literal: 'entrée',
        },
        o = { nan: 'NaN', number: 'nombre', array: 'tableau' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Entrée invalide : instanceof ${n.expected} attendu, ${c} reçu`
                    : `Entrée invalide : ${r} attendu, ${c} reçu`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Entrée invalide : ${$(n.values[0])} attendu`
                    : `Option invalide : une valeur parmi ${p(n.values, '|')} attendue`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Trop grand : ${n.origin ?? 'valeur'} doit ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? 'élément(s)'}`
                    : `Trop grand : ${n.origin ?? 'valeur'} doit être ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Trop petit : ${n.origin} doit ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Trop petit : ${n.origin} doit être ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Chaîne invalide : doit commencer par "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Chaîne invalide : doit se terminer par "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Chaîne invalide : doit inclure "${r.includes}"`
                        : r.format === 'regex'
                          ? `Chaîne invalide : doit correspondre au modèle ${r.pattern}`
                          : `${i[r.format] ?? n.format} invalide`
            }
            case 'not_multiple_of':
                return `Nombre invalide : doit être un multiple de ${n.divisor}`
            case 'unrecognized_keys':
                return `Clé${n.keys.length > 1 ? 's' : ''} non reconnue${n.keys.length > 1 ? 's' : ''} : ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Clé invalide dans ${n.origin}`
            case 'invalid_union':
                return 'Entrée invalide'
            case 'invalid_element':
                return `Valeur invalide dans ${n.origin}`
            default:
                return 'Entrée invalide'
        }
    }
}
function Wd() {
    return { localeError: Bd() }
}
const qd = () => {
    const e = {
        string: { unit: 'caractères', verb: 'avoir' },
        file: { unit: 'octets', verb: 'avoir' },
        array: { unit: 'éléments', verb: 'avoir' },
        set: { unit: 'éléments', verb: 'avoir' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'entrée',
            email: 'adresse courriel',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'date-heure ISO',
            date: 'date ISO',
            time: 'heure ISO',
            duration: 'durée ISO',
            ipv4: 'adresse IPv4',
            ipv6: 'adresse IPv6',
            cidrv4: 'plage IPv4',
            cidrv6: 'plage IPv6',
            base64: 'chaîne encodée en base64',
            base64url: 'chaîne encodée en base64url',
            json_string: 'chaîne JSON',
            e164: 'numéro E.164',
            jwt: 'JWT',
            template_literal: 'entrée',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Entrée invalide : attendu instanceof ${n.expected}, reçu ${c}`
                    : `Entrée invalide : attendu ${r}, reçu ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Entrée invalide : attendu ${$(n.values[0])}`
                    : `Option invalide : attendu l'une des valeurs suivantes ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '≤' : '<',
                    a = t(n.origin)
                return a
                    ? `Trop grand : attendu que ${n.origin ?? 'la valeur'} ait ${r}${n.maximum.toString()} ${a.unit}`
                    : `Trop grand : attendu que ${n.origin ?? 'la valeur'} soit ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '≥' : '>',
                    a = t(n.origin)
                return a
                    ? `Trop petit : attendu que ${n.origin} ait ${r}${n.minimum.toString()} ${a.unit}`
                    : `Trop petit : attendu que ${n.origin} soit ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Chaîne invalide : doit commencer par "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Chaîne invalide : doit se terminer par "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Chaîne invalide : doit inclure "${r.includes}"`
                        : r.format === 'regex'
                          ? `Chaîne invalide : doit correspondre au motif ${r.pattern}`
                          : `${i[r.format] ?? n.format} invalide`
            }
            case 'not_multiple_of':
                return `Nombre invalide : doit être un multiple de ${n.divisor}`
            case 'unrecognized_keys':
                return `Clé${n.keys.length > 1 ? 's' : ''} non reconnue${n.keys.length > 1 ? 's' : ''} : ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Clé invalide dans ${n.origin}`
            case 'invalid_union':
                return 'Entrée invalide'
            case 'invalid_element':
                return `Valeur invalide dans ${n.origin}`
            default:
                return 'Entrée invalide'
        }
    }
}
function Xd() {
    return { localeError: qd() }
}
const Yd = () => {
    const e = {
            string: { label: 'מחרוזת', gender: 'f' },
            number: { label: 'מספר', gender: 'm' },
            boolean: { label: 'ערך בוליאני', gender: 'm' },
            bigint: { label: 'BigInt', gender: 'm' },
            date: { label: 'תאריך', gender: 'm' },
            array: { label: 'מערך', gender: 'm' },
            object: { label: 'אובייקט', gender: 'm' },
            null: { label: 'ערך ריק (null)', gender: 'm' },
            undefined: { label: 'ערך לא מוגדר (undefined)', gender: 'm' },
            symbol: { label: 'סימבול (Symbol)', gender: 'm' },
            function: { label: 'פונקציה', gender: 'f' },
            map: { label: 'מפה (Map)', gender: 'f' },
            set: { label: 'קבוצה (Set)', gender: 'f' },
            file: { label: 'קובץ', gender: 'm' },
            promise: { label: 'Promise', gender: 'm' },
            NaN: { label: 'NaN', gender: 'm' },
            unknown: { label: 'ערך לא ידוע', gender: 'm' },
            value: { label: 'ערך', gender: 'm' },
        },
        t = {
            string: { unit: 'תווים', shortLabel: 'קצר', longLabel: 'ארוך' },
            file: { unit: 'בייטים', shortLabel: 'קטן', longLabel: 'גדול' },
            array: { unit: 'פריטים', shortLabel: 'קטן', longLabel: 'גדול' },
            set: { unit: 'פריטים', shortLabel: 'קטן', longLabel: 'גדול' },
            number: { unit: '', shortLabel: 'קטן', longLabel: 'גדול' },
        },
        i = (u) => (u ? e[u] : void 0),
        o = (u) => {
            const s = i(u)
            return s ? s.label : (u ?? e.unknown.label)
        },
        n = (u) => `ה${o(u)}`,
        r = (u) =>
            (i(u)?.gender ?? 'm') === 'f' ? 'צריכה להיות' : 'צריך להיות',
        a = (u) => (u ? (t[u] ?? null) : null),
        c = {
            regex: { label: 'קלט', gender: 'm' },
            email: { label: 'כתובת אימייל', gender: 'f' },
            url: { label: 'כתובת רשת', gender: 'f' },
            emoji: { label: "אימוג'י", gender: 'm' },
            uuid: { label: 'UUID', gender: 'm' },
            nanoid: { label: 'nanoid', gender: 'm' },
            guid: { label: 'GUID', gender: 'm' },
            cuid: { label: 'cuid', gender: 'm' },
            cuid2: { label: 'cuid2', gender: 'm' },
            ulid: { label: 'ULID', gender: 'm' },
            xid: { label: 'XID', gender: 'm' },
            ksuid: { label: 'KSUID', gender: 'm' },
            datetime: { label: 'תאריך וזמן ISO', gender: 'm' },
            date: { label: 'תאריך ISO', gender: 'm' },
            time: { label: 'זמן ISO', gender: 'm' },
            duration: { label: 'משך זמן ISO', gender: 'm' },
            ipv4: { label: 'כתובת IPv4', gender: 'f' },
            ipv6: { label: 'כתובת IPv6', gender: 'f' },
            cidrv4: { label: 'טווח IPv4', gender: 'm' },
            cidrv6: { label: 'טווח IPv6', gender: 'm' },
            base64: { label: 'מחרוזת בבסיס 64', gender: 'f' },
            base64url: { label: 'מחרוזת בבסיס 64 לכתובות רשת', gender: 'f' },
            json_string: { label: 'מחרוזת JSON', gender: 'f' },
            e164: { label: 'מספר E.164', gender: 'm' },
            jwt: { label: 'JWT', gender: 'm' },
            ends_with: { label: 'קלט', gender: 'm' },
            includes: { label: 'קלט', gender: 'm' },
            lowercase: { label: 'קלט', gender: 'm' },
            starts_with: { label: 'קלט', gender: 'm' },
            uppercase: { label: 'קלט', gender: 'm' },
        },
        l = { nan: 'NaN' }
    return (u) => {
        switch (u.code) {
            case 'invalid_type': {
                const s = u.expected,
                    m = l[s ?? ''] ?? o(s),
                    v = _(u.input),
                    g = l[v] ?? e[v]?.label ?? v
                return /^[A-Z]/.test(u.expected)
                    ? `קלט לא תקין: צריך להיות instanceof ${u.expected}, התקבל ${g}`
                    : `קלט לא תקין: צריך להיות ${m}, התקבל ${g}`
            }
            case 'invalid_value': {
                if (u.values.length === 1)
                    return `ערך לא תקין: הערך חייב להיות ${$(u.values[0])}`
                const s = u.values.map((g) => $(g))
                if (u.values.length === 2)
                    return `ערך לא תקין: האפשרויות המתאימות הן ${s[0]} או ${s[1]}`
                const m = s[s.length - 1]
                return `ערך לא תקין: האפשרויות המתאימות הן ${s.slice(0, -1).join(', ')} או ${m}`
            }
            case 'too_big': {
                const s = a(u.origin),
                    m = n(u.origin ?? 'value')
                if (u.origin === 'string')
                    return `${s?.longLabel ?? 'ארוך'} מדי: ${m} צריכה להכיל ${u.maximum.toString()} ${s?.unit ?? ''} ${u.inclusive ? 'או פחות' : 'לכל היותר'}`.trim()
                if (u.origin === 'number') {
                    const S = u.inclusive
                        ? `קטן או שווה ל-${u.maximum}`
                        : `קטן מ-${u.maximum}`
                    return `גדול מדי: ${m} צריך להיות ${S}`
                }
                if (u.origin === 'array' || u.origin === 'set') {
                    const S = u.origin === 'set' ? 'צריכה' : 'צריך',
                        z = u.inclusive
                            ? `${u.maximum} ${s?.unit ?? ''} או פחות`
                            : `פחות מ-${u.maximum} ${s?.unit ?? ''}`
                    return `גדול מדי: ${m} ${S} להכיל ${z}`.trim()
                }
                const v = u.inclusive ? '<=' : '<',
                    g = r(u.origin ?? 'value')
                return s?.unit
                    ? `${s.longLabel} מדי: ${m} ${g} ${v}${u.maximum.toString()} ${s.unit}`
                    : `${s?.longLabel ?? 'גדול'} מדי: ${m} ${g} ${v}${u.maximum.toString()}`
            }
            case 'too_small': {
                const s = a(u.origin),
                    m = n(u.origin ?? 'value')
                if (u.origin === 'string')
                    return `${s?.shortLabel ?? 'קצר'} מדי: ${m} צריכה להכיל ${u.minimum.toString()} ${s?.unit ?? ''} ${u.inclusive ? 'או יותר' : 'לפחות'}`.trim()
                if (u.origin === 'number') {
                    const S = u.inclusive
                        ? `גדול או שווה ל-${u.minimum}`
                        : `גדול מ-${u.minimum}`
                    return `קטן מדי: ${m} צריך להיות ${S}`
                }
                if (u.origin === 'array' || u.origin === 'set') {
                    const S = u.origin === 'set' ? 'צריכה' : 'צריך'
                    if (u.minimum === 1 && u.inclusive) {
                        const q = (u.origin === 'set', 'לפחות פריט אחד')
                        return `קטן מדי: ${m} ${S} להכיל ${q}`
                    }
                    const z = u.inclusive
                        ? `${u.minimum} ${s?.unit ?? ''} או יותר`
                        : `יותר מ-${u.minimum} ${s?.unit ?? ''}`
                    return `קטן מדי: ${m} ${S} להכיל ${z}`.trim()
                }
                const v = u.inclusive ? '>=' : '>',
                    g = r(u.origin ?? 'value')
                return s?.unit
                    ? `${s.shortLabel} מדי: ${m} ${g} ${v}${u.minimum.toString()} ${s.unit}`
                    : `${s?.shortLabel ?? 'קטן'} מדי: ${m} ${g} ${v}${u.minimum.toString()}`
            }
            case 'invalid_format': {
                const s = u
                if (s.format === 'starts_with')
                    return `המחרוזת חייבת להתחיל ב "${s.prefix}"`
                if (s.format === 'ends_with')
                    return `המחרוזת חייבת להסתיים ב "${s.suffix}"`
                if (s.format === 'includes')
                    return `המחרוזת חייבת לכלול "${s.includes}"`
                if (s.format === 'regex')
                    return `המחרוזת חייבת להתאים לתבנית ${s.pattern}`
                const m = c[s.format],
                    v = m?.label ?? s.format,
                    S = (m?.gender ?? 'm') === 'f' ? 'תקינה' : 'תקין'
                return `${v} לא ${S}`
            }
            case 'not_multiple_of':
                return `מספר לא תקין: חייב להיות מכפלה של ${u.divisor}`
            case 'unrecognized_keys':
                return `מפתח${u.keys.length > 1 ? 'ות' : ''} לא מזוה${u.keys.length > 1 ? 'ים' : 'ה'}: ${p(u.keys, ', ')}`
            case 'invalid_key':
                return 'שדה לא תקין באובייקט'
            case 'invalid_union':
                return 'קלט לא תקין'
            case 'invalid_element':
                return `ערך לא תקין ב${n(u.origin ?? 'array')}`
            default:
                return 'קלט לא תקין'
        }
    }
}
function Hd() {
    return { localeError: Yd() }
}
const Qd = () => {
    const e = {
        string: { unit: 'karakter', verb: 'legyen' },
        file: { unit: 'byte', verb: 'legyen' },
        array: { unit: 'elem', verb: 'legyen' },
        set: { unit: 'elem', verb: 'legyen' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'bemenet',
            email: 'email cím',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO időbélyeg',
            date: 'ISO dátum',
            time: 'ISO idő',
            duration: 'ISO időintervallum',
            ipv4: 'IPv4 cím',
            ipv6: 'IPv6 cím',
            cidrv4: 'IPv4 tartomány',
            cidrv6: 'IPv6 tartomány',
            base64: 'base64-kódolt string',
            base64url: 'base64url-kódolt string',
            json_string: 'JSON string',
            e164: 'E.164 szám',
            jwt: 'JWT',
            template_literal: 'bemenet',
        },
        o = { nan: 'NaN', number: 'szám', array: 'tömb' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Érvénytelen bemenet: a várt érték instanceof ${n.expected}, a kapott érték ${c}`
                    : `Érvénytelen bemenet: a várt érték ${r}, a kapott érték ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Érvénytelen bemenet: a várt érték ${$(n.values[0])}`
                    : `Érvénytelen opció: valamelyik érték várt ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Túl nagy: ${n.origin ?? 'érték'} mérete túl nagy ${r}${n.maximum.toString()} ${a.unit ?? 'elem'}`
                    : `Túl nagy: a bemeneti érték ${n.origin ?? 'érték'} túl nagy: ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Túl kicsi: a bemeneti érték ${n.origin} mérete túl kicsi ${r}${n.minimum.toString()} ${a.unit}`
                    : `Túl kicsi: a bemeneti érték ${n.origin} túl kicsi ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Érvénytelen string: "${r.prefix}" értékkel kell kezdődnie`
                    : r.format === 'ends_with'
                      ? `Érvénytelen string: "${r.suffix}" értékkel kell végződnie`
                      : r.format === 'includes'
                        ? `Érvénytelen string: "${r.includes}" értéket kell tartalmaznia`
                        : r.format === 'regex'
                          ? `Érvénytelen string: ${r.pattern} mintának kell megfelelnie`
                          : `Érvénytelen ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`
            case 'unrecognized_keys':
                return `Ismeretlen kulcs${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Érvénytelen kulcs ${n.origin}`
            case 'invalid_union':
                return 'Érvénytelen bemenet'
            case 'invalid_element':
                return `Érvénytelen érték: ${n.origin}`
            default:
                return 'Érvénytelen bemenet'
        }
    }
}
function em() {
    return { localeError: Qd() }
}
function yi(e, t, i) {
    return Math.abs(e) === 1 ? t : i
}
function ce(e) {
    if (!e) return ''
    const t = ['ա', 'ե', 'ը', 'ի', 'ո', 'ու', 'օ'],
        i = e[e.length - 1]
    return e + (t.includes(i) ? 'ն' : 'ը')
}
const nm = () => {
    const e = {
        string: { unit: { one: 'նշան', many: 'նշաններ' }, verb: 'ունենալ' },
        file: { unit: { one: 'բայթ', many: 'բայթեր' }, verb: 'ունենալ' },
        array: { unit: { one: 'տարր', many: 'տարրեր' }, verb: 'ունենալ' },
        set: { unit: { one: 'տարր', many: 'տարրեր' }, verb: 'ունենալ' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'մուտք',
            email: 'էլ. հասցե',
            url: 'URL',
            emoji: 'էմոջի',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO ամսաթիվ և ժամ',
            date: 'ISO ամսաթիվ',
            time: 'ISO ժամ',
            duration: 'ISO տևողություն',
            ipv4: 'IPv4 հասցե',
            ipv6: 'IPv6 հասցե',
            cidrv4: 'IPv4 միջակայք',
            cidrv6: 'IPv6 միջակայք',
            base64: 'base64 ձևաչափով տող',
            base64url: 'base64url ձևաչափով տող',
            json_string: 'JSON տող',
            e164: 'E.164 համար',
            jwt: 'JWT',
            template_literal: 'մուտք',
        },
        o = { nan: 'NaN', number: 'թիվ', array: 'զանգված' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${n.expected}, ստացվել է ${c}`
                    : `Սխալ մուտքագրում․ սպասվում էր ${r}, ստացվել է ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Սխալ մուտքագրում․ սպասվում էր ${$(n.values[1])}`
                    : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                if (a) {
                    const c = Number(n.maximum),
                        l = yi(c, a.unit.one, a.unit.many)
                    return `Չափազանց մեծ արժեք․ սպասվում է, որ ${ce(n.origin ?? 'արժեք')} կունենա ${r}${n.maximum.toString()} ${l}`
                }
                return `Չափազանց մեծ արժեք․ սպասվում է, որ ${ce(n.origin ?? 'արժեք')} լինի ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                if (a) {
                    const c = Number(n.minimum),
                        l = yi(c, a.unit.one, a.unit.many)
                    return `Չափազանց փոքր արժեք․ սպասվում է, որ ${ce(n.origin)} կունենա ${r}${n.minimum.toString()} ${l}`
                }
                return `Չափազանց փոքր արժեք․ սպասվում է, որ ${ce(n.origin)} լինի ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Սխալ տող․ պետք է սկսվի "${r.prefix}"-ով`
                    : r.format === 'ends_with'
                      ? `Սխալ տող․ պետք է ավարտվի "${r.suffix}"-ով`
                      : r.format === 'includes'
                        ? `Սխալ տող․ պետք է պարունակի "${r.includes}"`
                        : r.format === 'regex'
                          ? `Սխալ տող․ պետք է համապատասխանի ${r.pattern} ձևաչափին`
                          : `Սխալ ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${n.divisor}-ի`
            case 'unrecognized_keys':
                return `Չճանաչված բանալի${n.keys.length > 1 ? 'ներ' : ''}. ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Սխալ բանալի ${ce(n.origin)}-ում`
            case 'invalid_union':
                return 'Սխալ մուտքագրում'
            case 'invalid_element':
                return `Սխալ արժեք ${ce(n.origin)}-ում`
            default:
                return 'Սխալ մուտքագրում'
        }
    }
}
function tm() {
    return { localeError: nm() }
}
const rm = () => {
    const e = {
        string: { unit: 'karakter', verb: 'memiliki' },
        file: { unit: 'byte', verb: 'memiliki' },
        array: { unit: 'item', verb: 'memiliki' },
        set: { unit: 'item', verb: 'memiliki' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'alamat email',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'tanggal dan waktu format ISO',
            date: 'tanggal format ISO',
            time: 'jam format ISO',
            duration: 'durasi format ISO',
            ipv4: 'alamat IPv4',
            ipv6: 'alamat IPv6',
            cidrv4: 'rentang alamat IPv4',
            cidrv6: 'rentang alamat IPv6',
            base64: 'string dengan enkode base64',
            base64url: 'string dengan enkode base64url',
            json_string: 'string JSON',
            e164: 'angka E.164',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Input tidak valid: diharapkan instanceof ${n.expected}, diterima ${c}`
                    : `Input tidak valid: diharapkan ${r}, diterima ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Input tidak valid: diharapkan ${$(n.values[0])}`
                    : `Pilihan tidak valid: diharapkan salah satu dari ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Terlalu besar: diharapkan ${n.origin ?? 'value'} memiliki ${r}${n.maximum.toString()} ${a.unit ?? 'elemen'}`
                    : `Terlalu besar: diharapkan ${n.origin ?? 'value'} menjadi ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${r}${n.minimum.toString()} ${a.unit}`
                    : `Terlalu kecil: diharapkan ${n.origin} menjadi ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `String tidak valid: harus dimulai dengan "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `String tidak valid: harus berakhir dengan "${r.suffix}"`
                      : r.format === 'includes'
                        ? `String tidak valid: harus menyertakan "${r.includes}"`
                        : r.format === 'regex'
                          ? `String tidak valid: harus sesuai pola ${r.pattern}`
                          : `${i[r.format] ?? n.format} tidak valid`
            }
            case 'not_multiple_of':
                return `Angka tidak valid: harus kelipatan dari ${n.divisor}`
            case 'unrecognized_keys':
                return `Kunci tidak dikenali ${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Kunci tidak valid di ${n.origin}`
            case 'invalid_union':
                return 'Input tidak valid'
            case 'invalid_element':
                return `Nilai tidak valid di ${n.origin}`
            default:
                return 'Input tidak valid'
        }
    }
}
function im() {
    return { localeError: rm() }
}
const om = () => {
    const e = {
        string: { unit: 'stafi', verb: 'að hafa' },
        file: { unit: 'bæti', verb: 'að hafa' },
        array: { unit: 'hluti', verb: 'að hafa' },
        set: { unit: 'hluti', verb: 'að hafa' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'gildi',
            email: 'netfang',
            url: 'vefslóð',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO dagsetning og tími',
            date: 'ISO dagsetning',
            time: 'ISO tími',
            duration: 'ISO tímalengd',
            ipv4: 'IPv4 address',
            ipv6: 'IPv6 address',
            cidrv4: 'IPv4 range',
            cidrv6: 'IPv6 range',
            base64: 'base64-encoded strengur',
            base64url: 'base64url-encoded strengur',
            json_string: 'JSON strengur',
            e164: 'E.164 tölugildi',
            jwt: 'JWT',
            template_literal: 'gildi',
        },
        o = { nan: 'NaN', number: 'númer', array: 'fylki' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Rangt gildi: Þú slóst inn ${c} þar sem á að vera instanceof ${n.expected}`
                    : `Rangt gildi: Þú slóst inn ${c} þar sem á að vera ${r}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Rangt gildi: gert ráð fyrir ${$(n.values[0])}`
                    : `Ógilt val: má vera eitt af eftirfarandi ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Of stórt: gert er ráð fyrir að ${n.origin ?? 'gildi'} hafi ${r}${n.maximum.toString()} ${a.unit ?? 'hluti'}`
                    : `Of stórt: gert er ráð fyrir að ${n.origin ?? 'gildi'} sé ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Of lítið: gert er ráð fyrir að ${n.origin} hafi ${r}${n.minimum.toString()} ${a.unit}`
                    : `Of lítið: gert er ráð fyrir að ${n.origin} sé ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ógildur strengur: verður að byrja á "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Ógildur strengur: verður að enda á "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Ógildur strengur: verður að innihalda "${r.includes}"`
                        : r.format === 'regex'
                          ? `Ógildur strengur: verður að fylgja mynstri ${r.pattern}`
                          : `Rangt ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Röng tala: verður að vera margfeldi af ${n.divisor}`
            case 'unrecognized_keys':
                return `Óþekkt ${n.keys.length > 1 ? 'ir lyklar' : 'ur lykill'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Rangur lykill í ${n.origin}`
            case 'invalid_union':
                return 'Rangt gildi'
            case 'invalid_element':
                return `Rangt gildi í ${n.origin}`
            default:
                return 'Rangt gildi'
        }
    }
}
function am() {
    return { localeError: om() }
}
const cm = () => {
    const e = {
        string: { unit: 'caratteri', verb: 'avere' },
        file: { unit: 'byte', verb: 'avere' },
        array: { unit: 'elementi', verb: 'avere' },
        set: { unit: 'elementi', verb: 'avere' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'indirizzo email',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'data e ora ISO',
            date: 'data ISO',
            time: 'ora ISO',
            duration: 'durata ISO',
            ipv4: 'indirizzo IPv4',
            ipv6: 'indirizzo IPv6',
            cidrv4: 'intervallo IPv4',
            cidrv6: 'intervallo IPv6',
            base64: 'stringa codificata in base64',
            base64url: 'URL codificata in base64',
            json_string: 'stringa JSON',
            e164: 'numero E.164',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN', number: 'numero', array: 'vettore' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Input non valido: atteso instanceof ${n.expected}, ricevuto ${c}`
                    : `Input non valido: atteso ${r}, ricevuto ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Input non valido: atteso ${$(n.values[0])}`
                    : `Opzione non valida: atteso uno tra ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Troppo grande: ${n.origin ?? 'valore'} deve avere ${r}${n.maximum.toString()} ${a.unit ?? 'elementi'}`
                    : `Troppo grande: ${n.origin ?? 'valore'} deve essere ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Troppo piccolo: ${n.origin} deve avere ${r}${n.minimum.toString()} ${a.unit}`
                    : `Troppo piccolo: ${n.origin} deve essere ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Stringa non valida: deve iniziare con "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Stringa non valida: deve terminare con "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Stringa non valida: deve includere "${r.includes}"`
                        : r.format === 'regex'
                          ? `Stringa non valida: deve corrispondere al pattern ${r.pattern}`
                          : `Invalid ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Numero non valido: deve essere un multiplo di ${n.divisor}`
            case 'unrecognized_keys':
                return `Chiav${n.keys.length > 1 ? 'i' : 'e'} non riconosciut${n.keys.length > 1 ? 'e' : 'a'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Chiave non valida in ${n.origin}`
            case 'invalid_union':
                return 'Input non valido'
            case 'invalid_element':
                return `Valore non valido in ${n.origin}`
            default:
                return 'Input non valido'
        }
    }
}
function um() {
    return { localeError: cm() }
}
const lm = () => {
    const e = {
        string: { unit: '文字', verb: 'である' },
        file: { unit: 'バイト', verb: 'である' },
        array: { unit: '要素', verb: 'である' },
        set: { unit: '要素', verb: 'である' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: '入力値',
            email: 'メールアドレス',
            url: 'URL',
            emoji: '絵文字',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO日時',
            date: 'ISO日付',
            time: 'ISO時刻',
            duration: 'ISO期間',
            ipv4: 'IPv4アドレス',
            ipv6: 'IPv6アドレス',
            cidrv4: 'IPv4範囲',
            cidrv6: 'IPv6範囲',
            base64: 'base64エンコード文字列',
            base64url: 'base64urlエンコード文字列',
            json_string: 'JSON文字列',
            e164: 'E.164番号',
            jwt: 'JWT',
            template_literal: '入力値',
        },
        o = { nan: 'NaN', number: '数値', array: '配列' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `無効な入力: instanceof ${n.expected}が期待されましたが、${c}が入力されました`
                    : `無効な入力: ${r}が期待されましたが、${c}が入力されました`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `無効な入力: ${$(n.values[0])}が期待されました`
                    : `無効な選択: ${p(n.values, '、')}のいずれかである必要があります`
            case 'too_big': {
                const r = n.inclusive ? '以下である' : 'より小さい',
                    a = t(n.origin)
                return a
                    ? `大きすぎる値: ${n.origin ?? '値'}は${n.maximum.toString()}${a.unit ?? '要素'}${r}必要があります`
                    : `大きすぎる値: ${n.origin ?? '値'}は${n.maximum.toString()}${r}必要があります`
            }
            case 'too_small': {
                const r = n.inclusive ? '以上である' : 'より大きい',
                    a = t(n.origin)
                return a
                    ? `小さすぎる値: ${n.origin}は${n.minimum.toString()}${a.unit}${r}必要があります`
                    : `小さすぎる値: ${n.origin}は${n.minimum.toString()}${r}必要があります`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `無効な文字列: "${r.prefix}"で始まる必要があります`
                    : r.format === 'ends_with'
                      ? `無効な文字列: "${r.suffix}"で終わる必要があります`
                      : r.format === 'includes'
                        ? `無効な文字列: "${r.includes}"を含む必要があります`
                        : r.format === 'regex'
                          ? `無効な文字列: パターン${r.pattern}に一致する必要があります`
                          : `無効な${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `無効な数値: ${n.divisor}の倍数である必要があります`
            case 'unrecognized_keys':
                return `認識されていないキー${n.keys.length > 1 ? '群' : ''}: ${p(n.keys, '、')}`
            case 'invalid_key':
                return `${n.origin}内の無効なキー`
            case 'invalid_union':
                return '無効な入力'
            case 'invalid_element':
                return `${n.origin}内の無効な値`
            default:
                return '無効な入力'
        }
    }
}
function sm() {
    return { localeError: lm() }
}
const dm = () => {
    const e = {
        string: { unit: 'სიმბოლო', verb: 'უნდა შეიცავდეს' },
        file: { unit: 'ბაიტი', verb: 'უნდა შეიცავდეს' },
        array: { unit: 'ელემენტი', verb: 'უნდა შეიცავდეს' },
        set: { unit: 'ელემენტი', verb: 'უნდა შეიცავდეს' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'შეყვანა',
            email: 'ელ-ფოსტის მისამართი',
            url: 'URL',
            emoji: 'ემოჯი',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'თარიღი-დრო',
            date: 'თარიღი',
            time: 'დრო',
            duration: 'ხანგრძლივობა',
            ipv4: 'IPv4 მისამართი',
            ipv6: 'IPv6 მისამართი',
            cidrv4: 'IPv4 დიაპაზონი',
            cidrv6: 'IPv6 დიაპაზონი',
            base64: 'base64-კოდირებული სტრინგი',
            base64url: 'base64url-კოდირებული სტრინგი',
            json_string: 'JSON სტრინგი',
            e164: 'E.164 ნომერი',
            jwt: 'JWT',
            template_literal: 'შეყვანა',
        },
        o = {
            nan: 'NaN',
            number: 'რიცხვი',
            string: 'სტრინგი',
            boolean: 'ბულეანი',
            function: 'ფუნქცია',
            array: 'მასივი',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${n.expected}, მიღებული ${c}`
                    : `არასწორი შეყვანა: მოსალოდნელი ${r}, მიღებული ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `არასწორი შეყვანა: მოსალოდნელი ${$(n.values[0])}`
                    : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${p(n.values, '|')}-დან`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? 'მნიშვნელობა'} ${a.verb} ${r}${n.maximum.toString()} ${a.unit}`
                    : `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? 'მნიშვნელობა'} იყოს ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `ზედმეტად პატარა: მოსალოდნელი ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `ზედმეტად პატარა: მოსალოდნელი ${n.origin} იყოს ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `არასწორი სტრინგი: უნდა იწყებოდეს "${r.prefix}"-ით`
                    : r.format === 'ends_with'
                      ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${r.suffix}"-ით`
                      : r.format === 'includes'
                        ? `არასწორი სტრინგი: უნდა შეიცავდეს "${r.includes}"-ს`
                        : r.format === 'regex'
                          ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${r.pattern}`
                          : `არასწორი ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `არასწორი რიცხვი: უნდა იყოს ${n.divisor}-ის ჯერადი`
            case 'unrecognized_keys':
                return `უცნობი გასაღებ${n.keys.length > 1 ? 'ები' : 'ი'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `არასწორი გასაღები ${n.origin}-ში`
            case 'invalid_union':
                return 'არასწორი შეყვანა'
            case 'invalid_element':
                return `არასწორი მნიშვნელობა ${n.origin}-ში`
            default:
                return 'არასწორი შეყვანა'
        }
    }
}
function mm() {
    return { localeError: dm() }
}
const fm = () => {
    const e = {
        string: { unit: 'តួអក្សរ', verb: 'គួរមាន' },
        file: { unit: 'បៃ', verb: 'គួរមាន' },
        array: { unit: 'ធាតុ', verb: 'គួរមាន' },
        set: { unit: 'ធាតុ', verb: 'គួរមាន' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ទិន្នន័យបញ្ចូល',
            email: 'អាសយដ្ឋានអ៊ីមែល',
            url: 'URL',
            emoji: 'សញ្ញាអារម្មណ៍',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'កាលបរិច្ឆេទ និងម៉ោង ISO',
            date: 'កាលបរិច្ឆេទ ISO',
            time: 'ម៉ោង ISO',
            duration: 'រយៈពេល ISO',
            ipv4: 'អាសយដ្ឋាន IPv4',
            ipv6: 'អាសយដ្ឋាន IPv6',
            cidrv4: 'ដែនអាសយដ្ឋាន IPv4',
            cidrv6: 'ដែនអាសយដ្ឋាន IPv6',
            base64: 'ខ្សែអក្សរអ៊ិកូដ base64',
            base64url: 'ខ្សែអក្សរអ៊ិកូដ base64url',
            json_string: 'ខ្សែអក្សរ JSON',
            e164: 'លេខ E.164',
            jwt: 'JWT',
            template_literal: 'ទិន្នន័យបញ្ចូល',
        },
        o = {
            nan: 'NaN',
            number: 'លេខ',
            array: 'អារេ (Array)',
            null: 'គ្មានតម្លៃ (null)',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${n.expected} ប៉ុន្តែទទួលបាន ${c}`
                    : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${r} ប៉ុន្តែទទួលបាន ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${$(n.values[0])}`
                    : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `ធំពេក៖ ត្រូវការ ${n.origin ?? 'តម្លៃ'} ${r} ${n.maximum.toString()} ${a.unit ?? 'ធាតុ'}`
                    : `ធំពេក៖ ត្រូវការ ${n.origin ?? 'តម្លៃ'} ${r} ${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `តូចពេក៖ ត្រូវការ ${n.origin} ${r} ${n.minimum.toString()} ${a.unit}`
                    : `តូចពេក៖ ត្រូវការ ${n.origin} ${r} ${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${r.suffix}"`
                      : r.format === 'includes'
                        ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${r.includes}"`
                        : r.format === 'regex'
                          ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${r.pattern}`
                          : `មិនត្រឹមត្រូវ៖ ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`
            case 'unrecognized_keys':
                return `រកឃើញសោមិនស្គាល់៖ ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`
            case 'invalid_union':
                return 'ទិន្នន័យមិនត្រឹមត្រូវ'
            case 'invalid_element':
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`
            default:
                return 'ទិន្នន័យមិនត្រឹមត្រូវ'
        }
    }
}
function mc() {
    return { localeError: fm() }
}
function pm() {
    return mc()
}
const vm = () => {
    const e = {
        string: { unit: '문자', verb: 'to have' },
        file: { unit: '바이트', verb: 'to have' },
        array: { unit: '개', verb: 'to have' },
        set: { unit: '개', verb: 'to have' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: '입력',
            email: '이메일 주소',
            url: 'URL',
            emoji: '이모지',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO 날짜시간',
            date: 'ISO 날짜',
            time: 'ISO 시간',
            duration: 'ISO 기간',
            ipv4: 'IPv4 주소',
            ipv6: 'IPv6 주소',
            cidrv4: 'IPv4 범위',
            cidrv6: 'IPv6 범위',
            base64: 'base64 인코딩 문자열',
            base64url: 'base64url 인코딩 문자열',
            json_string: 'JSON 문자열',
            e164: 'E.164 번호',
            jwt: 'JWT',
            template_literal: '입력',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `잘못된 입력: 예상 타입은 instanceof ${n.expected}, 받은 타입은 ${c}입니다`
                    : `잘못된 입력: 예상 타입은 ${r}, 받은 타입은 ${c}입니다`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `잘못된 입력: 값은 ${$(n.values[0])} 이어야 합니다`
                    : `잘못된 옵션: ${p(n.values, '또는 ')} 중 하나여야 합니다`
            case 'too_big': {
                const r = n.inclusive ? '이하' : '미만',
                    a = r === '미만' ? '이어야 합니다' : '여야 합니다',
                    c = t(n.origin),
                    l = c?.unit ?? '요소'
                return c
                    ? `${n.origin ?? '값'}이 너무 큽니다: ${n.maximum.toString()}${l} ${r}${a}`
                    : `${n.origin ?? '값'}이 너무 큽니다: ${n.maximum.toString()} ${r}${a}`
            }
            case 'too_small': {
                const r = n.inclusive ? '이상' : '초과',
                    a = r === '이상' ? '이어야 합니다' : '여야 합니다',
                    c = t(n.origin),
                    l = c?.unit ?? '요소'
                return c
                    ? `${n.origin ?? '값'}이 너무 작습니다: ${n.minimum.toString()}${l} ${r}${a}`
                    : `${n.origin ?? '값'}이 너무 작습니다: ${n.minimum.toString()} ${r}${a}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `잘못된 문자열: "${r.prefix}"(으)로 시작해야 합니다`
                    : r.format === 'ends_with'
                      ? `잘못된 문자열: "${r.suffix}"(으)로 끝나야 합니다`
                      : r.format === 'includes'
                        ? `잘못된 문자열: "${r.includes}"을(를) 포함해야 합니다`
                        : r.format === 'regex'
                          ? `잘못된 문자열: 정규식 ${r.pattern} 패턴과 일치해야 합니다`
                          : `잘못된 ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`
            case 'unrecognized_keys':
                return `인식할 수 없는 키: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `잘못된 키: ${n.origin}`
            case 'invalid_union':
                return '잘못된 입력'
            case 'invalid_element':
                return `잘못된 값: ${n.origin}`
            default:
                return '잘못된 입력'
        }
    }
}
function gm() {
    return { localeError: vm() }
}
const _e = (e) => e.charAt(0).toUpperCase() + e.slice(1)
function ki(e) {
    const t = Math.abs(e),
        i = t % 10,
        o = t % 100
    return (o >= 11 && o <= 19) || i === 0 ? 'many' : i === 1 ? 'one' : 'few'
}
const hm = () => {
    const e = {
        string: {
            unit: { one: 'simbolis', few: 'simboliai', many: 'simbolių' },
            verb: {
                smaller: {
                    inclusive: 'turi būti ne ilgesnė kaip',
                    notInclusive: 'turi būti trumpesnė kaip',
                },
                bigger: {
                    inclusive: 'turi būti ne trumpesnė kaip',
                    notInclusive: 'turi būti ilgesnė kaip',
                },
            },
        },
        file: {
            unit: { one: 'baitas', few: 'baitai', many: 'baitų' },
            verb: {
                smaller: {
                    inclusive: 'turi būti ne didesnis kaip',
                    notInclusive: 'turi būti mažesnis kaip',
                },
                bigger: {
                    inclusive: 'turi būti ne mažesnis kaip',
                    notInclusive: 'turi būti didesnis kaip',
                },
            },
        },
        array: {
            unit: { one: 'elementą', few: 'elementus', many: 'elementų' },
            verb: {
                smaller: {
                    inclusive: 'turi turėti ne daugiau kaip',
                    notInclusive: 'turi turėti mažiau kaip',
                },
                bigger: {
                    inclusive: 'turi turėti ne mažiau kaip',
                    notInclusive: 'turi turėti daugiau kaip',
                },
            },
        },
        set: {
            unit: { one: 'elementą', few: 'elementus', many: 'elementų' },
            verb: {
                smaller: {
                    inclusive: 'turi turėti ne daugiau kaip',
                    notInclusive: 'turi turėti mažiau kaip',
                },
                bigger: {
                    inclusive: 'turi turėti ne mažiau kaip',
                    notInclusive: 'turi turėti daugiau kaip',
                },
            },
        },
    }
    function t(n, r, a, c) {
        const l = e[n] ?? null
        return l === null
            ? l
            : {
                  unit: l.unit[r],
                  verb: l.verb[c][a ? 'inclusive' : 'notInclusive'],
              }
    }
    const i = {
            regex: 'įvestis',
            email: 'el. pašto adresas',
            url: 'URL',
            emoji: 'jaustukas',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO data ir laikas',
            date: 'ISO data',
            time: 'ISO laikas',
            duration: 'ISO trukmė',
            ipv4: 'IPv4 adresas',
            ipv6: 'IPv6 adresas',
            cidrv4: 'IPv4 tinklo prefiksas (CIDR)',
            cidrv6: 'IPv6 tinklo prefiksas (CIDR)',
            base64: 'base64 užkoduota eilutė',
            base64url: 'base64url užkoduota eilutė',
            json_string: 'JSON eilutė',
            e164: 'E.164 numeris',
            jwt: 'JWT',
            template_literal: 'įvestis',
        },
        o = {
            nan: 'NaN',
            number: 'skaičius',
            bigint: 'sveikasis skaičius',
            string: 'eilutė',
            boolean: 'loginė reikšmė',
            undefined: 'neapibrėžta reikšmė',
            function: 'funkcija',
            symbol: 'simbolis',
            array: 'masyvas',
            object: 'objektas',
            null: 'nulinė reikšmė',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Gautas tipas ${c}, o tikėtasi - instanceof ${n.expected}`
                    : `Gautas tipas ${c}, o tikėtasi - ${r}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Privalo būti ${$(n.values[0])}`
                    : `Privalo būti vienas iš ${p(n.values, '|')} pasirinkimų`
            case 'too_big': {
                const r = o[n.origin] ?? n.origin,
                    a = t(
                        n.origin,
                        ki(Number(n.maximum)),
                        n.inclusive ?? !1,
                        'smaller',
                    )
                if (a?.verb)
                    return `${_e(r ?? n.origin ?? 'reikšmė')} ${a.verb} ${n.maximum.toString()} ${a.unit ?? 'elementų'}`
                const c = n.inclusive ? 'ne didesnis kaip' : 'mažesnis kaip'
                return `${_e(r ?? n.origin ?? 'reikšmė')} turi būti ${c} ${n.maximum.toString()} ${a?.unit}`
            }
            case 'too_small': {
                const r = o[n.origin] ?? n.origin,
                    a = t(
                        n.origin,
                        ki(Number(n.minimum)),
                        n.inclusive ?? !1,
                        'bigger',
                    )
                if (a?.verb)
                    return `${_e(r ?? n.origin ?? 'reikšmė')} ${a.verb} ${n.minimum.toString()} ${a.unit ?? 'elementų'}`
                const c = n.inclusive ? 'ne mažesnis kaip' : 'didesnis kaip'
                return `${_e(r ?? n.origin ?? 'reikšmė')} turi būti ${c} ${n.minimum.toString()} ${a?.unit}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Eilutė privalo prasidėti "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Eilutė privalo pasibaigti "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Eilutė privalo įtraukti "${r.includes}"`
                        : r.format === 'regex'
                          ? `Eilutė privalo atitikti ${r.pattern}`
                          : `Neteisingas ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Skaičius privalo būti ${n.divisor} kartotinis.`
            case 'unrecognized_keys':
                return `Neatpažint${n.keys.length > 1 ? 'i' : 'as'} rakt${n.keys.length > 1 ? 'ai' : 'as'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return 'Rastas klaidingas raktas'
            case 'invalid_union':
                return 'Klaidinga įvestis'
            case 'invalid_element': {
                const r = o[n.origin] ?? n.origin
                return `${_e(r ?? n.origin ?? 'reikšmė')} turi klaidingą įvestį`
            }
            default:
                return 'Klaidinga įvestis'
        }
    }
}
function $m() {
    return { localeError: hm() }
}
const _m = () => {
    const e = {
        string: { unit: 'знаци', verb: 'да имаат' },
        file: { unit: 'бајти', verb: 'да имаат' },
        array: { unit: 'ставки', verb: 'да имаат' },
        set: { unit: 'ставки', verb: 'да имаат' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'внес',
            email: 'адреса на е-пошта',
            url: 'URL',
            emoji: 'емоџи',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO датум и време',
            date: 'ISO датум',
            time: 'ISO време',
            duration: 'ISO времетраење',
            ipv4: 'IPv4 адреса',
            ipv6: 'IPv6 адреса',
            cidrv4: 'IPv4 опсег',
            cidrv6: 'IPv6 опсег',
            base64: 'base64-енкодирана низа',
            base64url: 'base64url-енкодирана низа',
            json_string: 'JSON низа',
            e164: 'E.164 број',
            jwt: 'JWT',
            template_literal: 'внес',
        },
        o = { nan: 'NaN', number: 'број', array: 'низа' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Грешен внес: се очекува instanceof ${n.expected}, примено ${c}`
                    : `Грешен внес: се очекува ${r}, примено ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Invalid input: expected ${$(n.values[0])}`
                    : `Грешана опција: се очекува една ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Премногу голем: се очекува ${n.origin ?? 'вредноста'} да има ${r}${n.maximum.toString()} ${a.unit ?? 'елементи'}`
                    : `Премногу голем: се очекува ${n.origin ?? 'вредноста'} да биде ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Премногу мал: се очекува ${n.origin} да има ${r}${n.minimum.toString()} ${a.unit}`
                    : `Премногу мал: се очекува ${n.origin} да биде ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Неважечка низа: мора да започнува со "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Неважечка низа: мора да завршува со "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Неважечка низа: мора да вклучува "${r.includes}"`
                        : r.format === 'regex'
                          ? `Неважечка низа: мора да одгоара на патернот ${r.pattern}`
                          : `Invalid ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Грешен број: мора да биде делив со ${n.divisor}`
            case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Непрепознаени клучеви' : 'Непрепознаен клуч'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Грешен клуч во ${n.origin}`
            case 'invalid_union':
                return 'Грешен внес'
            case 'invalid_element':
                return `Грешна вредност во ${n.origin}`
            default:
                return 'Грешен внес'
        }
    }
}
function bm() {
    return { localeError: _m() }
}
const ym = () => {
    const e = {
        string: { unit: 'aksara', verb: 'mempunyai' },
        file: { unit: 'bait', verb: 'mempunyai' },
        array: { unit: 'elemen', verb: 'mempunyai' },
        set: { unit: 'elemen', verb: 'mempunyai' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'alamat e-mel',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'tarikh masa ISO',
            date: 'tarikh ISO',
            time: 'masa ISO',
            duration: 'tempoh ISO',
            ipv4: 'alamat IPv4',
            ipv6: 'alamat IPv6',
            cidrv4: 'julat IPv4',
            cidrv6: 'julat IPv6',
            base64: 'string dikodkan base64',
            base64url: 'string dikodkan base64url',
            json_string: 'string JSON',
            e164: 'nombor E.164',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN', number: 'nombor' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Input tidak sah: dijangka instanceof ${n.expected}, diterima ${c}`
                    : `Input tidak sah: dijangka ${r}, diterima ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Input tidak sah: dijangka ${$(n.values[0])}`
                    : `Pilihan tidak sah: dijangka salah satu daripada ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Terlalu besar: dijangka ${n.origin ?? 'nilai'} ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? 'elemen'}`
                    : `Terlalu besar: dijangka ${n.origin ?? 'nilai'} adalah ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Terlalu kecil: dijangka ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Terlalu kecil: dijangka ${n.origin} adalah ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `String tidak sah: mesti bermula dengan "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `String tidak sah: mesti berakhir dengan "${r.suffix}"`
                      : r.format === 'includes'
                        ? `String tidak sah: mesti mengandungi "${r.includes}"`
                        : r.format === 'regex'
                          ? `String tidak sah: mesti sepadan dengan corak ${r.pattern}`
                          : `${i[r.format] ?? n.format} tidak sah`
            }
            case 'not_multiple_of':
                return `Nombor tidak sah: perlu gandaan ${n.divisor}`
            case 'unrecognized_keys':
                return `Kunci tidak dikenali: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Kunci tidak sah dalam ${n.origin}`
            case 'invalid_union':
                return 'Input tidak sah'
            case 'invalid_element':
                return `Nilai tidak sah dalam ${n.origin}`
            default:
                return 'Input tidak sah'
        }
    }
}
function km() {
    return { localeError: ym() }
}
const Sm = () => {
    const e = {
        string: { unit: 'tekens', verb: 'heeft' },
        file: { unit: 'bytes', verb: 'heeft' },
        array: { unit: 'elementen', verb: 'heeft' },
        set: { unit: 'elementen', verb: 'heeft' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'invoer',
            email: 'emailadres',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO datum en tijd',
            date: 'ISO datum',
            time: 'ISO tijd',
            duration: 'ISO duur',
            ipv4: 'IPv4-adres',
            ipv6: 'IPv6-adres',
            cidrv4: 'IPv4-bereik',
            cidrv6: 'IPv6-bereik',
            base64: 'base64-gecodeerde tekst',
            base64url: 'base64 URL-gecodeerde tekst',
            json_string: 'JSON string',
            e164: 'E.164-nummer',
            jwt: 'JWT',
            template_literal: 'invoer',
        },
        o = { nan: 'NaN', number: 'getal' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Ongeldige invoer: verwacht instanceof ${n.expected}, ontving ${c}`
                    : `Ongeldige invoer: verwacht ${r}, ontving ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Ongeldige invoer: verwacht ${$(n.values[0])}`
                    : `Ongeldige optie: verwacht één van ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin),
                    c =
                        n.origin === 'date'
                            ? 'laat'
                            : n.origin === 'string'
                              ? 'lang'
                              : 'groot'
                return a
                    ? `Te ${c}: verwacht dat ${n.origin ?? 'waarde'} ${r}${n.maximum.toString()} ${a.unit ?? 'elementen'} ${a.verb}`
                    : `Te ${c}: verwacht dat ${n.origin ?? 'waarde'} ${r}${n.maximum.toString()} is`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin),
                    c =
                        n.origin === 'date'
                            ? 'vroeg'
                            : n.origin === 'string'
                              ? 'kort'
                              : 'klein'
                return a
                    ? `Te ${c}: verwacht dat ${n.origin} ${r}${n.minimum.toString()} ${a.unit} ${a.verb}`
                    : `Te ${c}: verwacht dat ${n.origin} ${r}${n.minimum.toString()} is`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ongeldige tekst: moet met "${r.prefix}" beginnen`
                    : r.format === 'ends_with'
                      ? `Ongeldige tekst: moet op "${r.suffix}" eindigen`
                      : r.format === 'includes'
                        ? `Ongeldige tekst: moet "${r.includes}" bevatten`
                        : r.format === 'regex'
                          ? `Ongeldige tekst: moet overeenkomen met patroon ${r.pattern}`
                          : `Ongeldig: ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`
            case 'unrecognized_keys':
                return `Onbekende key${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Ongeldige key in ${n.origin}`
            case 'invalid_union':
                return 'Ongeldige invoer'
            case 'invalid_element':
                return `Ongeldige waarde in ${n.origin}`
            default:
                return 'Ongeldige invoer'
        }
    }
}
function zm() {
    return { localeError: Sm() }
}
const Im = () => {
    const e = {
        string: { unit: 'tegn', verb: 'å ha' },
        file: { unit: 'bytes', verb: 'å ha' },
        array: { unit: 'elementer', verb: 'å inneholde' },
        set: { unit: 'elementer', verb: 'å inneholde' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'input',
            email: 'e-postadresse',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO dato- og klokkeslett',
            date: 'ISO-dato',
            time: 'ISO-klokkeslett',
            duration: 'ISO-varighet',
            ipv4: 'IPv4-område',
            ipv6: 'IPv6-område',
            cidrv4: 'IPv4-spekter',
            cidrv6: 'IPv6-spekter',
            base64: 'base64-enkodet streng',
            base64url: 'base64url-enkodet streng',
            json_string: 'JSON-streng',
            e164: 'E.164-nummer',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN', number: 'tall', array: 'liste' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Ugyldig input: forventet instanceof ${n.expected}, fikk ${c}`
                    : `Ugyldig input: forventet ${r}, fikk ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Ugyldig verdi: forventet ${$(n.values[0])}`
                    : `Ugyldig valg: forventet en av ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `For stor(t): forventet ${n.origin ?? 'value'} til å ha ${r}${n.maximum.toString()} ${a.unit ?? 'elementer'}`
                    : `For stor(t): forventet ${n.origin ?? 'value'} til å ha ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `For lite(n): forventet ${n.origin} til å ha ${r}${n.minimum.toString()} ${a.unit}`
                    : `For lite(n): forventet ${n.origin} til å ha ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ugyldig streng: må starte med "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Ugyldig streng: må ende med "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Ugyldig streng: må inneholde "${r.includes}"`
                        : r.format === 'regex'
                          ? `Ugyldig streng: må matche mønsteret ${r.pattern}`
                          : `Ugyldig ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Ugyldig tall: må være et multiplum av ${n.divisor}`
            case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Ukjente nøkler' : 'Ukjent nøkkel'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Ugyldig nøkkel i ${n.origin}`
            case 'invalid_union':
                return 'Ugyldig input'
            case 'invalid_element':
                return `Ugyldig verdi i ${n.origin}`
            default:
                return 'Ugyldig input'
        }
    }
}
function wm() {
    return { localeError: Im() }
}
const xm = () => {
    const e = {
        string: { unit: 'harf', verb: 'olmalıdır' },
        file: { unit: 'bayt', verb: 'olmalıdır' },
        array: { unit: 'unsur', verb: 'olmalıdır' },
        set: { unit: 'unsur', verb: 'olmalıdır' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'giren',
            email: 'epostagâh',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO hengâmı',
            date: 'ISO tarihi',
            time: 'ISO zamanı',
            duration: 'ISO müddeti',
            ipv4: 'IPv4 nişânı',
            ipv6: 'IPv6 nişânı',
            cidrv4: 'IPv4 menzili',
            cidrv6: 'IPv6 menzili',
            base64: 'base64-şifreli metin',
            base64url: 'base64url-şifreli metin',
            json_string: 'JSON metin',
            e164: 'E.164 sayısı',
            jwt: 'JWT',
            template_literal: 'giren',
        },
        o = { nan: 'NaN', number: 'numara', array: 'saf', null: 'gayb' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Fâsit giren: umulan instanceof ${n.expected}, alınan ${c}`
                    : `Fâsit giren: umulan ${r}, alınan ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Fâsit giren: umulan ${$(n.values[0])}`
                    : `Fâsit tercih: mûteberler ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Fazla büyük: ${n.origin ?? 'value'}, ${r}${n.maximum.toString()} ${a.unit ?? 'elements'} sahip olmalıydı.`
                    : `Fazla büyük: ${n.origin ?? 'value'}, ${r}${n.maximum.toString()} olmalıydı.`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Fazla küçük: ${n.origin}, ${r}${n.minimum.toString()} ${a.unit} sahip olmalıydı.`
                    : `Fazla küçük: ${n.origin}, ${r}${n.minimum.toString()} olmalıydı.`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Fâsit metin: "${r.prefix}" ile başlamalı.`
                    : r.format === 'ends_with'
                      ? `Fâsit metin: "${r.suffix}" ile bitmeli.`
                      : r.format === 'includes'
                        ? `Fâsit metin: "${r.includes}" ihtivâ etmeli.`
                        : r.format === 'regex'
                          ? `Fâsit metin: ${r.pattern} nakşına uymalı.`
                          : `Fâsit ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Fâsit sayı: ${n.divisor} katı olmalıydı.`
            case 'unrecognized_keys':
                return `Tanınmayan anahtar ${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `${n.origin} için tanınmayan anahtar var.`
            case 'invalid_union':
                return 'Giren tanınamadı.'
            case 'invalid_element':
                return `${n.origin} için tanınmayan kıymet var.`
            default:
                return 'Kıymet tanınamadı.'
        }
    }
}
function Um() {
    return { localeError: xm() }
}
const jm = () => {
    const e = {
        string: { unit: 'توکي', verb: 'ولري' },
        file: { unit: 'بایټس', verb: 'ولري' },
        array: { unit: 'توکي', verb: 'ولري' },
        set: { unit: 'توکي', verb: 'ولري' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ورودي',
            email: 'بریښنالیک',
            url: 'یو آر ال',
            emoji: 'ایموجي',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'نیټه او وخت',
            date: 'نېټه',
            time: 'وخت',
            duration: 'موده',
            ipv4: 'د IPv4 پته',
            ipv6: 'د IPv6 پته',
            cidrv4: 'د IPv4 ساحه',
            cidrv6: 'د IPv6 ساحه',
            base64: 'base64-encoded متن',
            base64url: 'base64url-encoded متن',
            json_string: 'JSON متن',
            e164: 'د E.164 شمېره',
            jwt: 'JWT',
            template_literal: 'ورودي',
        },
        o = { nan: 'NaN', number: 'عدد', array: 'ارې' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `ناسم ورودي: باید instanceof ${n.expected} وای, مګر ${c} ترلاسه شو`
                    : `ناسم ورودي: باید ${r} وای, مګر ${c} ترلاسه شو`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `ناسم ورودي: باید ${$(n.values[0])} وای`
                    : `ناسم انتخاب: باید یو له ${p(n.values, '|')} څخه وای`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `ډیر لوی: ${n.origin ?? 'ارزښت'} باید ${r}${n.maximum.toString()} ${a.unit ?? 'عنصرونه'} ولري`
                    : `ډیر لوی: ${n.origin ?? 'ارزښت'} باید ${r}${n.maximum.toString()} وي`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `ډیر کوچنی: ${n.origin} باید ${r}${n.minimum.toString()} ${a.unit} ولري`
                    : `ډیر کوچنی: ${n.origin} باید ${r}${n.minimum.toString()} وي`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `ناسم متن: باید د "${r.prefix}" سره پیل شي`
                    : r.format === 'ends_with'
                      ? `ناسم متن: باید د "${r.suffix}" سره پای ته ورسيږي`
                      : r.format === 'includes'
                        ? `ناسم متن: باید "${r.includes}" ولري`
                        : r.format === 'regex'
                          ? `ناسم متن: باید د ${r.pattern} سره مطابقت ولري`
                          : `${i[r.format] ?? n.format} ناسم دی`
            }
            case 'not_multiple_of':
                return `ناسم عدد: باید د ${n.divisor} مضرب وي`
            case 'unrecognized_keys':
                return `ناسم ${n.keys.length > 1 ? 'کلیډونه' : 'کلیډ'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `ناسم کلیډ په ${n.origin} کې`
            case 'invalid_union':
                return 'ناسمه ورودي'
            case 'invalid_element':
                return `ناسم عنصر په ${n.origin} کې`
            default:
                return 'ناسمه ورودي'
        }
    }
}
function Om() {
    return { localeError: jm() }
}
const Dm = () => {
    const e = {
        string: { unit: 'znaków', verb: 'mieć' },
        file: { unit: 'bajtów', verb: 'mieć' },
        array: { unit: 'elementów', verb: 'mieć' },
        set: { unit: 'elementów', verb: 'mieć' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'wyrażenie',
            email: 'adres email',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'data i godzina w formacie ISO',
            date: 'data w formacie ISO',
            time: 'godzina w formacie ISO',
            duration: 'czas trwania ISO',
            ipv4: 'adres IPv4',
            ipv6: 'adres IPv6',
            cidrv4: 'zakres IPv4',
            cidrv6: 'zakres IPv6',
            base64: 'ciąg znaków zakodowany w formacie base64',
            base64url: 'ciąg znaków zakodowany w formacie base64url',
            json_string: 'ciąg znaków w formacie JSON',
            e164: 'liczba E.164',
            jwt: 'JWT',
            template_literal: 'wejście',
        },
        o = { nan: 'NaN', number: 'liczba', array: 'tablica' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${n.expected}, otrzymano ${c}`
                    : `Nieprawidłowe dane wejściowe: oczekiwano ${r}, otrzymano ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Nieprawidłowe dane wejściowe: oczekiwano ${$(n.values[0])}`
                    : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Za duża wartość: oczekiwano, że ${n.origin ?? 'wartość'} będzie mieć ${r}${n.maximum.toString()} ${a.unit ?? 'elementów'}`
                    : `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? 'wartość'} będzie wynosić ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Za mała wartość: oczekiwano, że ${n.origin ?? 'wartość'} będzie mieć ${r}${n.minimum.toString()} ${a.unit ?? 'elementów'}`
                    : `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? 'wartość'} będzie wynosić ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Nieprawidłowy ciąg znaków: musi zawierać "${r.includes}"`
                        : r.format === 'regex'
                          ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${r.pattern}`
                          : `Nieprawidłow(y/a/e) ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`
            case 'unrecognized_keys':
                return `Nierozpoznane klucze${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Nieprawidłowy klucz w ${n.origin}`
            case 'invalid_union':
                return 'Nieprawidłowe dane wejściowe'
            case 'invalid_element':
                return `Nieprawidłowa wartość w ${n.origin}`
            default:
                return 'Nieprawidłowe dane wejściowe'
        }
    }
}
function Nm() {
    return { localeError: Dm() }
}
const Pm = () => {
    const e = {
        string: { unit: 'caracteres', verb: 'ter' },
        file: { unit: 'bytes', verb: 'ter' },
        array: { unit: 'itens', verb: 'ter' },
        set: { unit: 'itens', verb: 'ter' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'padrão',
            email: 'endereço de e-mail',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'data e hora ISO',
            date: 'data ISO',
            time: 'hora ISO',
            duration: 'duração ISO',
            ipv4: 'endereço IPv4',
            ipv6: 'endereço IPv6',
            cidrv4: 'faixa de IPv4',
            cidrv6: 'faixa de IPv6',
            base64: 'texto codificado em base64',
            base64url: 'URL codificada em base64',
            json_string: 'texto JSON',
            e164: 'número E.164',
            jwt: 'JWT',
            template_literal: 'entrada',
        },
        o = { nan: 'NaN', number: 'número', null: 'nulo' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Tipo inválido: esperado instanceof ${n.expected}, recebido ${c}`
                    : `Tipo inválido: esperado ${r}, recebido ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Entrada inválida: esperado ${$(n.values[0])}`
                    : `Opção inválida: esperada uma das ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Muito grande: esperado que ${n.origin ?? 'valor'} tivesse ${r}${n.maximum.toString()} ${a.unit ?? 'elementos'}`
                    : `Muito grande: esperado que ${n.origin ?? 'valor'} fosse ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Muito pequeno: esperado que ${n.origin} tivesse ${r}${n.minimum.toString()} ${a.unit}`
                    : `Muito pequeno: esperado que ${n.origin} fosse ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Texto inválido: deve começar com "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Texto inválido: deve terminar com "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Texto inválido: deve incluir "${r.includes}"`
                        : r.format === 'regex'
                          ? `Texto inválido: deve corresponder ao padrão ${r.pattern}`
                          : `${i[r.format] ?? n.format} inválido`
            }
            case 'not_multiple_of':
                return `Número inválido: deve ser múltiplo de ${n.divisor}`
            case 'unrecognized_keys':
                return `Chave${n.keys.length > 1 ? 's' : ''} desconhecida${n.keys.length > 1 ? 's' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Chave inválida em ${n.origin}`
            case 'invalid_union':
                return 'Entrada inválida'
            case 'invalid_element':
                return `Valor inválido em ${n.origin}`
            default:
                return 'Campo inválido'
        }
    }
}
function Zm() {
    return { localeError: Pm() }
}
function Si(e, t, i, o) {
    const n = Math.abs(e),
        r = n % 10,
        a = n % 100
    return a >= 11 && a <= 19 ? o : r === 1 ? t : r >= 2 && r <= 4 ? i : o
}
const Tm = () => {
    const e = {
        string: {
            unit: { one: 'символ', few: 'символа', many: 'символов' },
            verb: 'иметь',
        },
        file: {
            unit: { one: 'байт', few: 'байта', many: 'байт' },
            verb: 'иметь',
        },
        array: {
            unit: { one: 'элемент', few: 'элемента', many: 'элементов' },
            verb: 'иметь',
        },
        set: {
            unit: { one: 'элемент', few: 'элемента', many: 'элементов' },
            verb: 'иметь',
        },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ввод',
            email: 'email адрес',
            url: 'URL',
            emoji: 'эмодзи',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO дата и время',
            date: 'ISO дата',
            time: 'ISO время',
            duration: 'ISO длительность',
            ipv4: 'IPv4 адрес',
            ipv6: 'IPv6 адрес',
            cidrv4: 'IPv4 диапазон',
            cidrv6: 'IPv6 диапазон',
            base64: 'строка в формате base64',
            base64url: 'строка в формате base64url',
            json_string: 'JSON строка',
            e164: 'номер E.164',
            jwt: 'JWT',
            template_literal: 'ввод',
        },
        o = { nan: 'NaN', number: 'число', array: 'массив' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Неверный ввод: ожидалось instanceof ${n.expected}, получено ${c}`
                    : `Неверный ввод: ожидалось ${r}, получено ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Неверный ввод: ожидалось ${$(n.values[0])}`
                    : `Неверный вариант: ожидалось одно из ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                if (a) {
                    const c = Number(n.maximum),
                        l = Si(c, a.unit.one, a.unit.few, a.unit.many)
                    return `Слишком большое значение: ожидалось, что ${n.origin ?? 'значение'} будет иметь ${r}${n.maximum.toString()} ${l}`
                }
                return `Слишком большое значение: ожидалось, что ${n.origin ?? 'значение'} будет ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                if (a) {
                    const c = Number(n.minimum),
                        l = Si(c, a.unit.one, a.unit.few, a.unit.many)
                    return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${r}${n.minimum.toString()} ${l}`
                }
                return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Неверная строка: должна начинаться с "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Неверная строка: должна заканчиваться на "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Неверная строка: должна содержать "${r.includes}"`
                        : r.format === 'regex'
                          ? `Неверная строка: должна соответствовать шаблону ${r.pattern}`
                          : `Неверный ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Неверное число: должно быть кратным ${n.divisor}`
            case 'unrecognized_keys':
                return `Нераспознанн${n.keys.length > 1 ? 'ые' : 'ый'} ключ${n.keys.length > 1 ? 'и' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Неверный ключ в ${n.origin}`
            case 'invalid_union':
                return 'Неверные входные данные'
            case 'invalid_element':
                return `Неверное значение в ${n.origin}`
            default:
                return 'Неверные входные данные'
        }
    }
}
function Em() {
    return { localeError: Tm() }
}
const Am = () => {
    const e = {
        string: { unit: 'znakov', verb: 'imeti' },
        file: { unit: 'bajtov', verb: 'imeti' },
        array: { unit: 'elementov', verb: 'imeti' },
        set: { unit: 'elementov', verb: 'imeti' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'vnos',
            email: 'e-poštni naslov',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO datum in čas',
            date: 'ISO datum',
            time: 'ISO čas',
            duration: 'ISO trajanje',
            ipv4: 'IPv4 naslov',
            ipv6: 'IPv6 naslov',
            cidrv4: 'obseg IPv4',
            cidrv6: 'obseg IPv6',
            base64: 'base64 kodiran niz',
            base64url: 'base64url kodiran niz',
            json_string: 'JSON niz',
            e164: 'E.164 številka',
            jwt: 'JWT',
            template_literal: 'vnos',
        },
        o = { nan: 'NaN', number: 'število', array: 'tabela' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Neveljaven vnos: pričakovano instanceof ${n.expected}, prejeto ${c}`
                    : `Neveljaven vnos: pričakovano ${r}, prejeto ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Neveljaven vnos: pričakovano ${$(n.values[0])}`
                    : `Neveljavna možnost: pričakovano eno izmed ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Preveliko: pričakovano, da bo ${n.origin ?? 'vrednost'} imelo ${r}${n.maximum.toString()} ${a.unit ?? 'elementov'}`
                    : `Preveliko: pričakovano, da bo ${n.origin ?? 'vrednost'} ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Premajhno: pričakovano, da bo ${n.origin} imelo ${r}${n.minimum.toString()} ${a.unit}`
                    : `Premajhno: pričakovano, da bo ${n.origin} ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Neveljaven niz: mora se začeti z "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Neveljaven niz: mora se končati z "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Neveljaven niz: mora vsebovati "${r.includes}"`
                        : r.format === 'regex'
                          ? `Neveljaven niz: mora ustrezati vzorcu ${r.pattern}`
                          : `Neveljaven ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Neveljavno število: mora biti večkratnik ${n.divisor}`
            case 'unrecognized_keys':
                return `Neprepoznan${n.keys.length > 1 ? 'i ključi' : ' ključ'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Neveljaven ključ v ${n.origin}`
            case 'invalid_union':
                return 'Neveljaven vnos'
            case 'invalid_element':
                return `Neveljavna vrednost v ${n.origin}`
            default:
                return 'Neveljaven vnos'
        }
    }
}
function Rm() {
    return { localeError: Am() }
}
const Fm = () => {
    const e = {
        string: { unit: 'tecken', verb: 'att ha' },
        file: { unit: 'bytes', verb: 'att ha' },
        array: { unit: 'objekt', verb: 'att innehålla' },
        set: { unit: 'objekt', verb: 'att innehålla' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'reguljärt uttryck',
            email: 'e-postadress',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO-datum och tid',
            date: 'ISO-datum',
            time: 'ISO-tid',
            duration: 'ISO-varaktighet',
            ipv4: 'IPv4-intervall',
            ipv6: 'IPv6-intervall',
            cidrv4: 'IPv4-spektrum',
            cidrv6: 'IPv6-spektrum',
            base64: 'base64-kodad sträng',
            base64url: 'base64url-kodad sträng',
            json_string: 'JSON-sträng',
            e164: 'E.164-nummer',
            jwt: 'JWT',
            template_literal: 'mall-literal',
        },
        o = { nan: 'NaN', number: 'antal', array: 'lista' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Ogiltig inmatning: förväntat instanceof ${n.expected}, fick ${c}`
                    : `Ogiltig inmatning: förväntat ${r}, fick ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Ogiltig inmatning: förväntat ${$(n.values[0])}`
                    : `Ogiltigt val: förväntade en av ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `För stor(t): förväntade ${n.origin ?? 'värdet'} att ha ${r}${n.maximum.toString()} ${a.unit ?? 'element'}`
                    : `För stor(t): förväntat ${n.origin ?? 'värdet'} att ha ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `För lite(t): förväntade ${n.origin ?? 'värdet'} att ha ${r}${n.minimum.toString()} ${a.unit}`
                    : `För lite(t): förväntade ${n.origin ?? 'värdet'} att ha ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ogiltig sträng: måste börja med "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Ogiltig sträng: måste sluta med "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Ogiltig sträng: måste innehålla "${r.includes}"`
                        : r.format === 'regex'
                          ? `Ogiltig sträng: måste matcha mönstret "${r.pattern}"`
                          : `Ogiltig(t) ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`
            case 'unrecognized_keys':
                return `${n.keys.length > 1 ? 'Okända nycklar' : 'Okänd nyckel'}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Ogiltig nyckel i ${n.origin ?? 'värdet'}`
            case 'invalid_union':
                return 'Ogiltig input'
            case 'invalid_element':
                return `Ogiltigt värde i ${n.origin ?? 'värdet'}`
            default:
                return 'Ogiltig input'
        }
    }
}
function Lm() {
    return { localeError: Fm() }
}
const Cm = () => {
    const e = {
        string: { unit: 'எழுத்துக்கள்', verb: 'கொண்டிருக்க வேண்டும்' },
        file: { unit: 'பைட்டுகள்', verb: 'கொண்டிருக்க வேண்டும்' },
        array: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
        set: { unit: 'உறுப்புகள்', verb: 'கொண்டிருக்க வேண்டும்' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'உள்ளீடு',
            email: 'மின்னஞ்சல் முகவரி',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO தேதி நேரம்',
            date: 'ISO தேதி',
            time: 'ISO நேரம்',
            duration: 'ISO கால அளவு',
            ipv4: 'IPv4 முகவரி',
            ipv6: 'IPv6 முகவரி',
            cidrv4: 'IPv4 வரம்பு',
            cidrv6: 'IPv6 வரம்பு',
            base64: 'base64-encoded சரம்',
            base64url: 'base64url-encoded சரம்',
            json_string: 'JSON சரம்',
            e164: 'E.164 எண்',
            jwt: 'JWT',
            template_literal: 'input',
        },
        o = { nan: 'NaN', number: 'எண்', array: 'அணி', null: 'வெறுமை' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${n.expected}, பெறப்பட்டது ${c}`
                    : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${r}, பெறப்பட்டது ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${$(n.values[0])}`
                    : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${p(n.values, '|')} இல் ஒன்று`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? 'மதிப்பு'} ${r}${n.maximum.toString()} ${a.unit ?? 'உறுப்புகள்'} ஆக இருக்க வேண்டும்`
                    : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? 'மதிப்பு'} ${r}${n.maximum.toString()} ஆக இருக்க வேண்டும்`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${r}${n.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்`
                    : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${r}${n.minimum.toString()} ஆக இருக்க வேண்டும்`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `தவறான சரம்: "${r.prefix}" இல் தொடங்க வேண்டும்`
                    : r.format === 'ends_with'
                      ? `தவறான சரம்: "${r.suffix}" இல் முடிவடைய வேண்டும்`
                      : r.format === 'includes'
                        ? `தவறான சரம்: "${r.includes}" ஐ உள்ளடக்க வேண்டும்`
                        : r.format === 'regex'
                          ? `தவறான சரம்: ${r.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                          : `தவறான ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`
            case 'unrecognized_keys':
                return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? 'கள்' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `${n.origin} இல் தவறான விசை`
            case 'invalid_union':
                return 'தவறான உள்ளீடு'
            case 'invalid_element':
                return `${n.origin} இல் தவறான மதிப்பு`
            default:
                return 'தவறான உள்ளீடு'
        }
    }
}
function Jm() {
    return { localeError: Cm() }
}
const Mm = () => {
    const e = {
        string: { unit: 'ตัวอักษร', verb: 'ควรมี' },
        file: { unit: 'ไบต์', verb: 'ควรมี' },
        array: { unit: 'รายการ', verb: 'ควรมี' },
        set: { unit: 'รายการ', verb: 'ควรมี' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ข้อมูลที่ป้อน',
            email: 'ที่อยู่อีเมล',
            url: 'URL',
            emoji: 'อิโมจิ',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'วันที่เวลาแบบ ISO',
            date: 'วันที่แบบ ISO',
            time: 'เวลาแบบ ISO',
            duration: 'ช่วงเวลาแบบ ISO',
            ipv4: 'ที่อยู่ IPv4',
            ipv6: 'ที่อยู่ IPv6',
            cidrv4: 'ช่วง IP แบบ IPv4',
            cidrv6: 'ช่วง IP แบบ IPv6',
            base64: 'ข้อความแบบ Base64',
            base64url: 'ข้อความแบบ Base64 สำหรับ URL',
            json_string: 'ข้อความแบบ JSON',
            e164: 'เบอร์โทรศัพท์ระหว่างประเทศ (E.164)',
            jwt: 'โทเคน JWT',
            template_literal: 'ข้อมูลที่ป้อน',
        },
        o = {
            nan: 'NaN',
            number: 'ตัวเลข',
            array: 'อาร์เรย์ (Array)',
            null: 'ไม่มีค่า (null)',
        }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${n.expected} แต่ได้รับ ${c}`
                    : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${r} แต่ได้รับ ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `ค่าไม่ถูกต้อง: ควรเป็น ${$(n.values[0])}`
                    : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? 'ไม่เกิน' : 'น้อยกว่า',
                    a = t(n.origin)
                return a
                    ? `เกินกำหนด: ${n.origin ?? 'ค่า'} ควรมี${r} ${n.maximum.toString()} ${a.unit ?? 'รายการ'}`
                    : `เกินกำหนด: ${n.origin ?? 'ค่า'} ควรมี${r} ${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? 'อย่างน้อย' : 'มากกว่า',
                    a = t(n.origin)
                return a
                    ? `น้อยกว่ากำหนด: ${n.origin} ควรมี${r} ${n.minimum.toString()} ${a.unit}`
                    : `น้อยกว่ากำหนด: ${n.origin} ควรมี${r} ${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${r.suffix}"`
                      : r.format === 'includes'
                        ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${r.includes}" อยู่ในข้อความ`
                        : r.format === 'regex'
                          ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${r.pattern}`
                          : `รูปแบบไม่ถูกต้อง: ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`
            case 'unrecognized_keys':
                return `พบคีย์ที่ไม่รู้จัก: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `คีย์ไม่ถูกต้องใน ${n.origin}`
            case 'invalid_union':
                return 'ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้'
            case 'invalid_element':
                return `ข้อมูลไม่ถูกต้องใน ${n.origin}`
            default:
                return 'ข้อมูลไม่ถูกต้อง'
        }
    }
}
function Km() {
    return { localeError: Mm() }
}
const Vm = () => {
    const e = {
        string: { unit: 'karakter', verb: 'olmalı' },
        file: { unit: 'bayt', verb: 'olmalı' },
        array: { unit: 'öğe', verb: 'olmalı' },
        set: { unit: 'öğe', verb: 'olmalı' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'girdi',
            email: 'e-posta adresi',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO tarih ve saat',
            date: 'ISO tarih',
            time: 'ISO saat',
            duration: 'ISO süre',
            ipv4: 'IPv4 adresi',
            ipv6: 'IPv6 adresi',
            cidrv4: 'IPv4 aralığı',
            cidrv6: 'IPv6 aralığı',
            base64: 'base64 ile şifrelenmiş metin',
            base64url: 'base64url ile şifrelenmiş metin',
            json_string: 'JSON dizesi',
            e164: 'E.164 sayısı',
            jwt: 'JWT',
            template_literal: 'Şablon dizesi',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Geçersiz değer: beklenen instanceof ${n.expected}, alınan ${c}`
                    : `Geçersiz değer: beklenen ${r}, alınan ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Geçersiz değer: beklenen ${$(n.values[0])}`
                    : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Çok büyük: beklenen ${n.origin ?? 'değer'} ${r}${n.maximum.toString()} ${a.unit ?? 'öğe'}`
                    : `Çok büyük: beklenen ${n.origin ?? 'değer'} ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Çok küçük: beklenen ${n.origin} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Çok küçük: beklenen ${n.origin} ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Geçersiz metin: "${r.prefix}" ile başlamalı`
                    : r.format === 'ends_with'
                      ? `Geçersiz metin: "${r.suffix}" ile bitmeli`
                      : r.format === 'includes'
                        ? `Geçersiz metin: "${r.includes}" içermeli`
                        : r.format === 'regex'
                          ? `Geçersiz metin: ${r.pattern} desenine uymalı`
                          : `Geçersiz ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Geçersiz sayı: ${n.divisor} ile tam bölünebilmeli`
            case 'unrecognized_keys':
                return `Tanınmayan anahtar${n.keys.length > 1 ? 'lar' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `${n.origin} içinde geçersiz anahtar`
            case 'invalid_union':
                return 'Geçersiz değer'
            case 'invalid_element':
                return `${n.origin} içinde geçersiz değer`
            default:
                return 'Geçersiz değer'
        }
    }
}
function Gm() {
    return { localeError: Vm() }
}
const Bm = () => {
    const e = {
        string: { unit: 'символів', verb: 'матиме' },
        file: { unit: 'байтів', verb: 'матиме' },
        array: { unit: 'елементів', verb: 'матиме' },
        set: { unit: 'елементів', verb: 'матиме' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'вхідні дані',
            email: 'адреса електронної пошти',
            url: 'URL',
            emoji: 'емодзі',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'дата та час ISO',
            date: 'дата ISO',
            time: 'час ISO',
            duration: 'тривалість ISO',
            ipv4: 'адреса IPv4',
            ipv6: 'адреса IPv6',
            cidrv4: 'діапазон IPv4',
            cidrv6: 'діапазон IPv6',
            base64: 'рядок у кодуванні base64',
            base64url: 'рядок у кодуванні base64url',
            json_string: 'рядок JSON',
            e164: 'номер E.164',
            jwt: 'JWT',
            template_literal: 'вхідні дані',
        },
        o = { nan: 'NaN', number: 'число', array: 'масив' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Неправильні вхідні дані: очікується instanceof ${n.expected}, отримано ${c}`
                    : `Неправильні вхідні дані: очікується ${r}, отримано ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Неправильні вхідні дані: очікується ${$(n.values[0])}`
                    : `Неправильна опція: очікується одне з ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Занадто велике: очікується, що ${n.origin ?? 'значення'} ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? 'елементів'}`
                    : `Занадто велике: очікується, що ${n.origin ?? 'значення'} буде ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Занадто мале: очікується, що ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Занадто мале: очікується, що ${n.origin} буде ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Неправильний рядок: повинен починатися з "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Неправильний рядок: повинен закінчуватися на "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Неправильний рядок: повинен містити "${r.includes}"`
                        : r.format === 'regex'
                          ? `Неправильний рядок: повинен відповідати шаблону ${r.pattern}`
                          : `Неправильний ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Неправильне число: повинно бути кратним ${n.divisor}`
            case 'unrecognized_keys':
                return `Нерозпізнаний ключ${n.keys.length > 1 ? 'і' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Неправильний ключ у ${n.origin}`
            case 'invalid_union':
                return 'Неправильні вхідні дані'
            case 'invalid_element':
                return `Неправильне значення у ${n.origin}`
            default:
                return 'Неправильні вхідні дані'
        }
    }
}
function fc() {
    return { localeError: Bm() }
}
function Wm() {
    return fc()
}
const qm = () => {
    const e = {
        string: { unit: 'حروف', verb: 'ہونا' },
        file: { unit: 'بائٹس', verb: 'ہونا' },
        array: { unit: 'آئٹمز', verb: 'ہونا' },
        set: { unit: 'آئٹمز', verb: 'ہونا' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ان پٹ',
            email: 'ای میل ایڈریس',
            url: 'یو آر ایل',
            emoji: 'ایموجی',
            uuid: 'یو یو آئی ڈی',
            uuidv4: 'یو یو آئی ڈی وی 4',
            uuidv6: 'یو یو آئی ڈی وی 6',
            nanoid: 'نینو آئی ڈی',
            guid: 'جی یو آئی ڈی',
            cuid: 'سی یو آئی ڈی',
            cuid2: 'سی یو آئی ڈی 2',
            ulid: 'یو ایل آئی ڈی',
            xid: 'ایکس آئی ڈی',
            ksuid: 'کے ایس یو آئی ڈی',
            datetime: 'آئی ایس او ڈیٹ ٹائم',
            date: 'آئی ایس او تاریخ',
            time: 'آئی ایس او وقت',
            duration: 'آئی ایس او مدت',
            ipv4: 'آئی پی وی 4 ایڈریس',
            ipv6: 'آئی پی وی 6 ایڈریس',
            cidrv4: 'آئی پی وی 4 رینج',
            cidrv6: 'آئی پی وی 6 رینج',
            base64: 'بیس 64 ان کوڈڈ سٹرنگ',
            base64url: 'بیس 64 یو آر ایل ان کوڈڈ سٹرنگ',
            json_string: 'جے ایس او این سٹرنگ',
            e164: 'ای 164 نمبر',
            jwt: 'جے ڈبلیو ٹی',
            template_literal: 'ان پٹ',
        },
        o = { nan: 'NaN', number: 'نمبر', array: 'آرے', null: 'نل' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `غلط ان پٹ: instanceof ${n.expected} متوقع تھا، ${c} موصول ہوا`
                    : `غلط ان پٹ: ${r} متوقع تھا، ${c} موصول ہوا`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `غلط ان پٹ: ${$(n.values[0])} متوقع تھا`
                    : `غلط آپشن: ${p(n.values, '|')} میں سے ایک متوقع تھا`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `بہت بڑا: ${n.origin ?? 'ویلیو'} کے ${r}${n.maximum.toString()} ${a.unit ?? 'عناصر'} ہونے متوقع تھے`
                    : `بہت بڑا: ${n.origin ?? 'ویلیو'} کا ${r}${n.maximum.toString()} ہونا متوقع تھا`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `بہت چھوٹا: ${n.origin} کے ${r}${n.minimum.toString()} ${a.unit} ہونے متوقع تھے`
                    : `بہت چھوٹا: ${n.origin} کا ${r}${n.minimum.toString()} ہونا متوقع تھا`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `غلط سٹرنگ: "${r.prefix}" سے شروع ہونا چاہیے`
                    : r.format === 'ends_with'
                      ? `غلط سٹرنگ: "${r.suffix}" پر ختم ہونا چاہیے`
                      : r.format === 'includes'
                        ? `غلط سٹرنگ: "${r.includes}" شامل ہونا چاہیے`
                        : r.format === 'regex'
                          ? `غلط سٹرنگ: پیٹرن ${r.pattern} سے میچ ہونا چاہیے`
                          : `غلط ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`
            case 'unrecognized_keys':
                return `غیر تسلیم شدہ کی${n.keys.length > 1 ? 'ز' : ''}: ${p(n.keys, '، ')}`
            case 'invalid_key':
                return `${n.origin} میں غلط کی`
            case 'invalid_union':
                return 'غلط ان پٹ'
            case 'invalid_element':
                return `${n.origin} میں غلط ویلیو`
            default:
                return 'غلط ان پٹ'
        }
    }
}
function Xm() {
    return { localeError: qm() }
}
const Ym = () => {
    const e = {
        string: { unit: 'belgi', verb: 'bo‘lishi kerak' },
        file: { unit: 'bayt', verb: 'bo‘lishi kerak' },
        array: { unit: 'element', verb: 'bo‘lishi kerak' },
        set: { unit: 'element', verb: 'bo‘lishi kerak' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'kirish',
            email: 'elektron pochta manzili',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO sana va vaqti',
            date: 'ISO sana',
            time: 'ISO vaqt',
            duration: 'ISO davomiylik',
            ipv4: 'IPv4 manzil',
            ipv6: 'IPv6 manzil',
            mac: 'MAC manzil',
            cidrv4: 'IPv4 diapazon',
            cidrv6: 'IPv6 diapazon',
            base64: 'base64 kodlangan satr',
            base64url: 'base64url kodlangan satr',
            json_string: 'JSON satr',
            e164: 'E.164 raqam',
            jwt: 'JWT',
            template_literal: 'kirish',
        },
        o = { nan: 'NaN', number: 'raqam', array: 'massiv' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Noto‘g‘ri kirish: kutilgan instanceof ${n.expected}, qabul qilingan ${c}`
                    : `Noto‘g‘ri kirish: kutilgan ${r}, qabul qilingan ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Noto‘g‘ri kirish: kutilgan ${$(n.values[0])}`
                    : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Juda katta: kutilgan ${n.origin ?? 'qiymat'} ${r}${n.maximum.toString()} ${a.unit} ${a.verb}`
                    : `Juda katta: kutilgan ${n.origin ?? 'qiymat'} ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Juda kichik: kutilgan ${n.origin} ${r}${n.minimum.toString()} ${a.unit} ${a.verb}`
                    : `Juda kichik: kutilgan ${n.origin} ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Noto‘g‘ri satr: "${r.prefix}" bilan boshlanishi kerak`
                    : r.format === 'ends_with'
                      ? `Noto‘g‘ri satr: "${r.suffix}" bilan tugashi kerak`
                      : r.format === 'includes'
                        ? `Noto‘g‘ri satr: "${r.includes}" ni o‘z ichiga olishi kerak`
                        : r.format === 'regex'
                          ? `Noto‘g‘ri satr: ${r.pattern} shabloniga mos kelishi kerak`
                          : `Noto‘g‘ri ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Noto‘g‘ri raqam: ${n.divisor} ning karralisi bo‘lishi kerak`
            case 'unrecognized_keys':
                return `Noma’lum kalit${n.keys.length > 1 ? 'lar' : ''}: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `${n.origin} dagi kalit noto‘g‘ri`
            case 'invalid_union':
                return 'Noto‘g‘ri kirish'
            case 'invalid_element':
                return `${n.origin} da noto‘g‘ri qiymat`
            default:
                return 'Noto‘g‘ri kirish'
        }
    }
}
function Hm() {
    return { localeError: Ym() }
}
const Qm = () => {
    const e = {
        string: { unit: 'ký tự', verb: 'có' },
        file: { unit: 'byte', verb: 'có' },
        array: { unit: 'phần tử', verb: 'có' },
        set: { unit: 'phần tử', verb: 'có' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'đầu vào',
            email: 'địa chỉ email',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ngày giờ ISO',
            date: 'ngày ISO',
            time: 'giờ ISO',
            duration: 'khoảng thời gian ISO',
            ipv4: 'địa chỉ IPv4',
            ipv6: 'địa chỉ IPv6',
            cidrv4: 'dải IPv4',
            cidrv6: 'dải IPv6',
            base64: 'chuỗi mã hóa base64',
            base64url: 'chuỗi mã hóa base64url',
            json_string: 'chuỗi JSON',
            e164: 'số E.164',
            jwt: 'JWT',
            template_literal: 'đầu vào',
        },
        o = { nan: 'NaN', number: 'số', array: 'mảng' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Đầu vào không hợp lệ: mong đợi instanceof ${n.expected}, nhận được ${c}`
                    : `Đầu vào không hợp lệ: mong đợi ${r}, nhận được ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Đầu vào không hợp lệ: mong đợi ${$(n.values[0])}`
                    : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Quá lớn: mong đợi ${n.origin ?? 'giá trị'} ${a.verb} ${r}${n.maximum.toString()} ${a.unit ?? 'phần tử'}`
                    : `Quá lớn: mong đợi ${n.origin ?? 'giá trị'} ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Quá nhỏ: mong đợi ${n.origin} ${a.verb} ${r}${n.minimum.toString()} ${a.unit}`
                    : `Quá nhỏ: mong đợi ${n.origin} ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Chuỗi không hợp lệ: phải kết thúc bằng "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Chuỗi không hợp lệ: phải bao gồm "${r.includes}"`
                        : r.format === 'regex'
                          ? `Chuỗi không hợp lệ: phải khớp với mẫu ${r.pattern}`
                          : `${i[r.format] ?? n.format} không hợp lệ`
            }
            case 'not_multiple_of':
                return `Số không hợp lệ: phải là bội số của ${n.divisor}`
            case 'unrecognized_keys':
                return `Khóa không được nhận dạng: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Khóa không hợp lệ trong ${n.origin}`
            case 'invalid_union':
                return 'Đầu vào không hợp lệ'
            case 'invalid_element':
                return `Giá trị không hợp lệ trong ${n.origin}`
            default:
                return 'Đầu vào không hợp lệ'
        }
    }
}
function ef() {
    return { localeError: Qm() }
}
const nf = () => {
    const e = {
        string: { unit: '字符', verb: '包含' },
        file: { unit: '字节', verb: '包含' },
        array: { unit: '项', verb: '包含' },
        set: { unit: '项', verb: '包含' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: '输入',
            email: '电子邮件',
            url: 'URL',
            emoji: '表情符号',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO日期时间',
            date: 'ISO日期',
            time: 'ISO时间',
            duration: 'ISO时长',
            ipv4: 'IPv4地址',
            ipv6: 'IPv6地址',
            cidrv4: 'IPv4网段',
            cidrv6: 'IPv6网段',
            base64: 'base64编码字符串',
            base64url: 'base64url编码字符串',
            json_string: 'JSON字符串',
            e164: 'E.164号码',
            jwt: 'JWT',
            template_literal: '输入',
        },
        o = { nan: 'NaN', number: '数字', array: '数组', null: '空值(null)' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `无效输入：期望 instanceof ${n.expected}，实际接收 ${c}`
                    : `无效输入：期望 ${r}，实际接收 ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `无效输入：期望 ${$(n.values[0])}`
                    : `无效选项：期望以下之一 ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `数值过大：期望 ${n.origin ?? '值'} ${r}${n.maximum.toString()} ${a.unit ?? '个元素'}`
                    : `数值过大：期望 ${n.origin ?? '值'} ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `数值过小：期望 ${n.origin} ${r}${n.minimum.toString()} ${a.unit}`
                    : `数值过小：期望 ${n.origin} ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `无效字符串：必须以 "${r.prefix}" 开头`
                    : r.format === 'ends_with'
                      ? `无效字符串：必须以 "${r.suffix}" 结尾`
                      : r.format === 'includes'
                        ? `无效字符串：必须包含 "${r.includes}"`
                        : r.format === 'regex'
                          ? `无效字符串：必须满足正则表达式 ${r.pattern}`
                          : `无效${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `无效数字：必须是 ${n.divisor} 的倍数`
            case 'unrecognized_keys':
                return `出现未知的键(key): ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `${n.origin} 中的键(key)无效`
            case 'invalid_union':
                return '无效输入'
            case 'invalid_element':
                return `${n.origin} 中包含无效值(value)`
            default:
                return '无效输入'
        }
    }
}
function tf() {
    return { localeError: nf() }
}
const rf = () => {
    const e = {
        string: { unit: '字元', verb: '擁有' },
        file: { unit: '位元組', verb: '擁有' },
        array: { unit: '項目', verb: '擁有' },
        set: { unit: '項目', verb: '擁有' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: '輸入',
            email: '郵件地址',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'ISO 日期時間',
            date: 'ISO 日期',
            time: 'ISO 時間',
            duration: 'ISO 期間',
            ipv4: 'IPv4 位址',
            ipv6: 'IPv6 位址',
            cidrv4: 'IPv4 範圍',
            cidrv6: 'IPv6 範圍',
            base64: 'base64 編碼字串',
            base64url: 'base64url 編碼字串',
            json_string: 'JSON 字串',
            e164: 'E.164 數值',
            jwt: 'JWT',
            template_literal: '輸入',
        },
        o = { nan: 'NaN' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `無效的輸入值：預期為 instanceof ${n.expected}，但收到 ${c}`
                    : `無效的輸入值：預期為 ${r}，但收到 ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `無效的輸入值：預期為 ${$(n.values[0])}`
                    : `無效的選項：預期為以下其中之一 ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `數值過大：預期 ${n.origin ?? '值'} 應為 ${r}${n.maximum.toString()} ${a.unit ?? '個元素'}`
                    : `數值過大：預期 ${n.origin ?? '值'} 應為 ${r}${n.maximum.toString()}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `數值過小：預期 ${n.origin} 應為 ${r}${n.minimum.toString()} ${a.unit}`
                    : `數值過小：預期 ${n.origin} 應為 ${r}${n.minimum.toString()}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `無效的字串：必須以 "${r.prefix}" 開頭`
                    : r.format === 'ends_with'
                      ? `無效的字串：必須以 "${r.suffix}" 結尾`
                      : r.format === 'includes'
                        ? `無效的字串：必須包含 "${r.includes}"`
                        : r.format === 'regex'
                          ? `無效的字串：必須符合格式 ${r.pattern}`
                          : `無效的 ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `無效的數字：必須為 ${n.divisor} 的倍數`
            case 'unrecognized_keys':
                return `無法識別的鍵值${n.keys.length > 1 ? '們' : ''}：${p(n.keys, '、')}`
            case 'invalid_key':
                return `${n.origin} 中有無效的鍵值`
            case 'invalid_union':
                return '無效的輸入值'
            case 'invalid_element':
                return `${n.origin} 中有無效的值`
            default:
                return '無效的輸入值'
        }
    }
}
function of() {
    return { localeError: rf() }
}
const af = () => {
    const e = {
        string: { unit: 'àmi', verb: 'ní' },
        file: { unit: 'bytes', verb: 'ní' },
        array: { unit: 'nkan', verb: 'ní' },
        set: { unit: 'nkan', verb: 'ní' },
    }
    function t(n) {
        return e[n] ?? null
    }
    const i = {
            regex: 'ẹ̀rọ ìbáwọlé',
            email: 'àdírẹ́sì ìmẹ́lì',
            url: 'URL',
            emoji: 'emoji',
            uuid: 'UUID',
            uuidv4: 'UUIDv4',
            uuidv6: 'UUIDv6',
            nanoid: 'nanoid',
            guid: 'GUID',
            cuid: 'cuid',
            cuid2: 'cuid2',
            ulid: 'ULID',
            xid: 'XID',
            ksuid: 'KSUID',
            datetime: 'àkókò ISO',
            date: 'ọjọ́ ISO',
            time: 'àkókò ISO',
            duration: 'àkókò tó pé ISO',
            ipv4: 'àdírẹ́sì IPv4',
            ipv6: 'àdírẹ́sì IPv6',
            cidrv4: 'àgbègbè IPv4',
            cidrv6: 'àgbègbè IPv6',
            base64: 'ọ̀rọ̀ tí a kọ́ ní base64',
            base64url: 'ọ̀rọ̀ base64url',
            json_string: 'ọ̀rọ̀ JSON',
            e164: 'nọ́mbà E.164',
            jwt: 'JWT',
            template_literal: 'ẹ̀rọ ìbáwọlé',
        },
        o = { nan: 'NaN', number: 'nọ́mbà', array: 'akopọ' }
    return (n) => {
        switch (n.code) {
            case 'invalid_type': {
                const r = o[n.expected] ?? n.expected,
                    a = _(n.input),
                    c = o[a] ?? a
                return /^[A-Z]/.test(n.expected)
                    ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${n.expected}, àmọ̀ a rí ${c}`
                    : `Ìbáwọlé aṣìṣe: a ní láti fi ${r}, àmọ̀ a rí ${c}`
            }
            case 'invalid_value':
                return n.values.length === 1
                    ? `Ìbáwọlé aṣìṣe: a ní láti fi ${$(n.values[0])}`
                    : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${p(n.values, '|')}`
            case 'too_big': {
                const r = n.inclusive ? '<=' : '<',
                    a = t(n.origin)
                return a
                    ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${n.origin ?? 'iye'} ${a.verb} ${r}${n.maximum} ${a.unit}`
                    : `Tó pọ̀ jù: a ní láti jẹ́ ${r}${n.maximum}`
            }
            case 'too_small': {
                const r = n.inclusive ? '>=' : '>',
                    a = t(n.origin)
                return a
                    ? `Kéré ju: a ní láti jẹ́ pé ${n.origin} ${a.verb} ${r}${n.minimum} ${a.unit}`
                    : `Kéré ju: a ní láti jẹ́ ${r}${n.minimum}`
            }
            case 'invalid_format': {
                const r = n
                return r.format === 'starts_with'
                    ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${r.prefix}"`
                    : r.format === 'ends_with'
                      ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${r.suffix}"`
                      : r.format === 'includes'
                        ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${r.includes}"`
                        : r.format === 'regex'
                          ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${r.pattern}`
                          : `Aṣìṣe: ${i[r.format] ?? n.format}`
            }
            case 'not_multiple_of':
                return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`
            case 'unrecognized_keys':
                return `Bọtìnì àìmọ̀: ${p(n.keys, ', ')}`
            case 'invalid_key':
                return `Bọtìnì aṣìṣe nínú ${n.origin}`
            case 'invalid_union':
                return 'Ìbáwọlé aṣìṣe'
            case 'invalid_element':
                return `Iye aṣìṣe nínú ${n.origin}`
            default:
                return 'Ìbáwọlé aṣìṣe'
        }
    }
}
function cf() {
    return { localeError: af() }
}
const pc = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            ar: Sd,
            az: Id,
            be: xd,
            bg: jd,
            ca: Dd,
            cs: Pd,
            da: Td,
            de: Ad,
            en: dc,
            eo: Ld,
            es: Jd,
            fa: Kd,
            fi: Gd,
            fr: Wd,
            frCA: Xd,
            he: Hd,
            hu: em,
            hy: tm,
            id: im,
            is: am,
            it: um,
            ja: sm,
            ka: mm,
            kh: pm,
            km: mc,
            ko: gm,
            lt: $m,
            mk: bm,
            ms: km,
            nl: zm,
            no: wm,
            ota: Um,
            pl: Nm,
            ps: Om,
            pt: Zm,
            ru: Em,
            sl: Rm,
            sv: Lm,
            ta: Jm,
            th: Km,
            tr: Gm,
            ua: Wm,
            uk: fc,
            ur: Xm,
            uz: Hm,
            vi: ef,
            yo: cf,
            zhCN: tf,
            zhTW: of,
        },
        Symbol.toStringTag,
        { value: 'Module' },
    ),
)
var zi
const vc = Symbol('ZodOutput'),
    gc = Symbol('ZodInput')
class hc {
    constructor() {
        ;((this._map = new WeakMap()), (this._idmap = new Map()))
    }
    add(t, ...i) {
        const o = i[0]
        return (
            this._map.set(t, o),
            o && typeof o == 'object' && 'id' in o && this._idmap.set(o.id, t),
            this
        )
    }
    clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this)
    }
    remove(t) {
        const i = this._map.get(t)
        return (
            i && typeof i == 'object' && 'id' in i && this._idmap.delete(i.id),
            this._map.delete(t),
            this
        )
    }
    get(t) {
        const i = t._zod.parent
        if (i) {
            const o = { ...(this.get(i) ?? {}) }
            delete o.id
            const n = { ...o, ...this._map.get(t) }
            return Object.keys(n).length ? n : void 0
        }
        return this._map.get(t)
    }
    has(t) {
        return this._map.has(t)
    }
}
function Et() {
    return new hc()
}
;(zi = globalThis).__zod_globalRegistry ?? (zi.__zod_globalRegistry = Et())
const F = globalThis.__zod_globalRegistry
function $c(e, t) {
    return new e({ type: 'string', ...f(t) })
}
function _c(e, t) {
    return new e({ type: 'string', coerce: !0, ...f(t) })
}
function At(e, t) {
    return new e({
        type: 'string',
        format: 'email',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function an(e, t) {
    return new e({
        type: 'string',
        format: 'guid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Rt(e, t) {
    return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Ft(e, t) {
    return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v4',
        ...f(t),
    })
}
function Lt(e, t) {
    return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v6',
        ...f(t),
    })
}
function Ct(e, t) {
    return new e({
        type: 'string',
        format: 'uuid',
        check: 'string_format',
        abort: !1,
        version: 'v7',
        ...f(t),
    })
}
function gn(e, t) {
    return new e({
        type: 'string',
        format: 'url',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Jt(e, t) {
    return new e({
        type: 'string',
        format: 'emoji',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Mt(e, t) {
    return new e({
        type: 'string',
        format: 'nanoid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Kt(e, t) {
    return new e({
        type: 'string',
        format: 'cuid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Vt(e, t) {
    return new e({
        type: 'string',
        format: 'cuid2',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Gt(e, t) {
    return new e({
        type: 'string',
        format: 'ulid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Bt(e, t) {
    return new e({
        type: 'string',
        format: 'xid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Wt(e, t) {
    return new e({
        type: 'string',
        format: 'ksuid',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function qt(e, t) {
    return new e({
        type: 'string',
        format: 'ipv4',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Xt(e, t) {
    return new e({
        type: 'string',
        format: 'ipv6',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function bc(e, t) {
    return new e({
        type: 'string',
        format: 'mac',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Yt(e, t) {
    return new e({
        type: 'string',
        format: 'cidrv4',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Ht(e, t) {
    return new e({
        type: 'string',
        format: 'cidrv6',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function Qt(e, t) {
    return new e({
        type: 'string',
        format: 'base64',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function er(e, t) {
    return new e({
        type: 'string',
        format: 'base64url',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function nr(e, t) {
    return new e({
        type: 'string',
        format: 'e164',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
function tr(e, t) {
    return new e({
        type: 'string',
        format: 'jwt',
        check: 'string_format',
        abort: !1,
        ...f(t),
    })
}
const yc = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 }
function kc(e, t) {
    return new e({
        type: 'string',
        format: 'datetime',
        check: 'string_format',
        offset: !1,
        local: !1,
        precision: null,
        ...f(t),
    })
}
function Sc(e, t) {
    return new e({
        type: 'string',
        format: 'date',
        check: 'string_format',
        ...f(t),
    })
}
function zc(e, t) {
    return new e({
        type: 'string',
        format: 'time',
        check: 'string_format',
        precision: null,
        ...f(t),
    })
}
function Ic(e, t) {
    return new e({
        type: 'string',
        format: 'duration',
        check: 'string_format',
        ...f(t),
    })
}
function wc(e, t) {
    return new e({ type: 'number', checks: [], ...f(t) })
}
function xc(e, t) {
    return new e({ type: 'number', coerce: !0, checks: [], ...f(t) })
}
function Uc(e, t) {
    return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'safeint',
        ...f(t),
    })
}
function jc(e, t) {
    return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float32',
        ...f(t),
    })
}
function Oc(e, t) {
    return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'float64',
        ...f(t),
    })
}
function Dc(e, t) {
    return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'int32',
        ...f(t),
    })
}
function Nc(e, t) {
    return new e({
        type: 'number',
        check: 'number_format',
        abort: !1,
        format: 'uint32',
        ...f(t),
    })
}
function Pc(e, t) {
    return new e({ type: 'boolean', ...f(t) })
}
function Zc(e, t) {
    return new e({ type: 'boolean', coerce: !0, ...f(t) })
}
function Tc(e, t) {
    return new e({ type: 'bigint', ...f(t) })
}
function Ec(e, t) {
    return new e({ type: 'bigint', coerce: !0, ...f(t) })
}
function Ac(e, t) {
    return new e({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'int64',
        ...f(t),
    })
}
function Rc(e, t) {
    return new e({
        type: 'bigint',
        check: 'bigint_format',
        abort: !1,
        format: 'uint64',
        ...f(t),
    })
}
function Fc(e, t) {
    return new e({ type: 'symbol', ...f(t) })
}
function Lc(e, t) {
    return new e({ type: 'undefined', ...f(t) })
}
function Cc(e, t) {
    return new e({ type: 'null', ...f(t) })
}
function Jc(e) {
    return new e({ type: 'any' })
}
function Mc(e) {
    return new e({ type: 'unknown' })
}
function Kc(e, t) {
    return new e({ type: 'never', ...f(t) })
}
function Vc(e, t) {
    return new e({ type: 'void', ...f(t) })
}
function Gc(e, t) {
    return new e({ type: 'date', ...f(t) })
}
function Bc(e, t) {
    return new e({ type: 'date', coerce: !0, ...f(t) })
}
function Wc(e, t) {
    return new e({ type: 'nan', ...f(t) })
}
function X(e, t) {
    return new xt({ check: 'less_than', ...f(t), value: e, inclusive: !1 })
}
function L(e, t) {
    return new xt({ check: 'less_than', ...f(t), value: e, inclusive: !0 })
}
function Y(e, t) {
    return new Ut({ check: 'greater_than', ...f(t), value: e, inclusive: !1 })
}
function Z(e, t) {
    return new Ut({ check: 'greater_than', ...f(t), value: e, inclusive: !0 })
}
function rr(e) {
    return Y(0, e)
}
function ir(e) {
    return X(0, e)
}
function or(e) {
    return L(0, e)
}
function ar(e) {
    return Z(0, e)
}
function de(e, t) {
    return new No({ check: 'multiple_of', ...f(t), value: e })
}
function ge(e, t) {
    return new To({ check: 'max_size', ...f(t), maximum: e })
}
function H(e, t) {
    return new Eo({ check: 'min_size', ...f(t), minimum: e })
}
function Te(e, t) {
    return new Ao({ check: 'size_equals', ...f(t), size: e })
}
function Ee(e, t) {
    return new Ro({ check: 'max_length', ...f(t), maximum: e })
}
function re(e, t) {
    return new Fo({ check: 'min_length', ...f(t), minimum: e })
}
function Ae(e, t) {
    return new Lo({ check: 'length_equals', ...f(t), length: e })
}
function hn(e, t) {
    return new Co({
        check: 'string_format',
        format: 'regex',
        ...f(t),
        pattern: e,
    })
}
function $n(e) {
    return new Jo({ check: 'string_format', format: 'lowercase', ...f(e) })
}
function _n(e) {
    return new Mo({ check: 'string_format', format: 'uppercase', ...f(e) })
}
function bn(e, t) {
    return new Ko({
        check: 'string_format',
        format: 'includes',
        ...f(t),
        includes: e,
    })
}
function yn(e, t) {
    return new Vo({
        check: 'string_format',
        format: 'starts_with',
        ...f(t),
        prefix: e,
    })
}
function kn(e, t) {
    return new Go({
        check: 'string_format',
        format: 'ends_with',
        ...f(t),
        suffix: e,
    })
}
function cr(e, t, i) {
    return new Bo({ check: 'property', property: e, schema: t, ...f(i) })
}
function Sn(e, t) {
    return new Wo({ check: 'mime_type', mime: e, ...f(t) })
}
function W(e) {
    return new qo({ check: 'overwrite', tx: e })
}
function zn(e) {
    return W((t) => t.normalize(e))
}
function In() {
    return W((e) => e.trim())
}
function wn() {
    return W((e) => e.toLowerCase())
}
function xn() {
    return W((e) => e.toUpperCase())
}
function Un() {
    return W((e) => Ui(e))
}
function qc(e, t, i) {
    return new e({ type: 'array', element: t, ...f(i) })
}
function uf(e, t, i) {
    return new e({ type: 'union', options: t, ...f(i) })
}
function lf(e, t, i) {
    return new e({ type: 'union', options: t, inclusive: !1, ...f(i) })
}
function sf(e, t, i, o) {
    return new e({ type: 'union', options: i, discriminator: t, ...f(o) })
}
function df(e, t, i) {
    return new e({ type: 'intersection', left: t, right: i })
}
function mf(e, t, i, o) {
    const n = i instanceof b,
        r = n ? o : i,
        a = n ? i : null
    return new e({ type: 'tuple', items: t, rest: a, ...f(r) })
}
function ff(e, t, i, o) {
    return new e({ type: 'record', keyType: t, valueType: i, ...f(o) })
}
function pf(e, t, i, o) {
    return new e({ type: 'map', keyType: t, valueType: i, ...f(o) })
}
function vf(e, t, i) {
    return new e({ type: 'set', valueType: t, ...f(i) })
}
function gf(e, t, i) {
    const o = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t
    return new e({ type: 'enum', entries: o, ...f(i) })
}
function hf(e, t, i) {
    return new e({ type: 'enum', entries: t, ...f(i) })
}
function $f(e, t, i) {
    return new e({
        type: 'literal',
        values: Array.isArray(t) ? t : [t],
        ...f(i),
    })
}
function Xc(e, t) {
    return new e({ type: 'file', ...f(t) })
}
function _f(e, t) {
    return new e({ type: 'transform', transform: t })
}
function bf(e, t) {
    return new e({ type: 'optional', innerType: t })
}
function yf(e, t) {
    return new e({ type: 'nullable', innerType: t })
}
function kf(e, t, i) {
    return new e({
        type: 'default',
        innerType: t,
        get defaultValue() {
            return typeof i == 'function' ? i() : mn(i)
        },
    })
}
function Sf(e, t, i) {
    return new e({ type: 'nonoptional', innerType: t, ...f(i) })
}
function zf(e, t) {
    return new e({ type: 'success', innerType: t })
}
function If(e, t, i) {
    return new e({
        type: 'catch',
        innerType: t,
        catchValue: typeof i == 'function' ? i : () => i,
    })
}
function wf(e, t, i) {
    return new e({ type: 'pipe', in: t, out: i })
}
function xf(e, t) {
    return new e({ type: 'readonly', innerType: t })
}
function Uf(e, t, i) {
    return new e({ type: 'template_literal', parts: t, ...f(i) })
}
function jf(e, t) {
    return new e({ type: 'lazy', getter: t })
}
function Of(e, t) {
    return new e({ type: 'promise', innerType: t })
}
function Yc(e, t, i) {
    const o = f(i)
    return (
        o.abort ?? (o.abort = !0),
        new e({ type: 'custom', check: 'custom', fn: t, ...o })
    )
}
function Hc(e, t, i) {
    return new e({ type: 'custom', check: 'custom', fn: t, ...f(i) })
}
function Qc(e) {
    const t = eu(
        (i) => (
            (i.addIssue = (o) => {
                if (typeof o == 'string')
                    i.issues.push(le(o, i.value, t._zod.def))
                else {
                    const n = o
                    ;(n.fatal && (n.continue = !1),
                        n.code ?? (n.code = 'custom'),
                        n.input ?? (n.input = i.value),
                        n.inst ?? (n.inst = t),
                        n.continue ?? (n.continue = !t._zod.def.abort),
                        i.issues.push(le(n)))
                }
            }),
            e(i.value, i)
        ),
    )
    return t
}
function eu(e, t) {
    const i = new j({ check: 'custom', ...f(t) })
    return ((i._zod.check = e), i)
}
function nu(e) {
    const t = new j({ check: 'describe' })
    return (
        (t._zod.onattach = [
            (i) => {
                const o = F.get(i) ?? {}
                F.add(i, { ...o, description: e })
            },
        ]),
        (t._zod.check = () => {}),
        t
    )
}
function tu(e) {
    const t = new j({ check: 'meta' })
    return (
        (t._zod.onattach = [
            (i) => {
                const o = F.get(i) ?? {}
                F.add(i, { ...o, ...e })
            },
        ]),
        (t._zod.check = () => {}),
        t
    )
}
function ru(e, t) {
    const i = f(t)
    let o = i.truthy ?? ['true', '1', 'yes', 'on', 'y', 'enabled'],
        n = i.falsy ?? ['false', '0', 'no', 'off', 'n', 'disabled']
    i.case !== 'sensitive' &&
        ((o = o.map((g) => (typeof g == 'string' ? g.toLowerCase() : g))),
        (n = n.map((g) => (typeof g == 'string' ? g.toLowerCase() : g))))
    const r = new Set(o),
        a = new Set(n),
        c = e.Codec ?? Tt,
        l = e.Boolean ?? Dt,
        u = e.String ?? Ze,
        s = new u({ type: 'string', error: i.error }),
        m = new l({ type: 'boolean', error: i.error }),
        v = new c({
            type: 'pipe',
            in: s,
            out: m,
            transform: (g, S) => {
                let z = g
                return (
                    i.case !== 'sensitive' && (z = z.toLowerCase()),
                    r.has(z)
                        ? !0
                        : a.has(z)
                          ? !1
                          : (S.issues.push({
                                code: 'invalid_value',
                                expected: 'stringbool',
                                values: [...r, ...a],
                                input: S.value,
                                inst: v,
                                continue: !1,
                            }),
                            {})
                )
            },
            reverseTransform: (g, S) =>
                g === !0 ? o[0] || 'true' : n[0] || 'false',
            error: i.error,
        })
    return v
}
function Re(e, t, i, o = {}) {
    const n = f(o),
        r = {
            ...f(o),
            check: 'string_format',
            type: 'string',
            format: t,
            fn: typeof i == 'function' ? i : (c) => i.test(c),
            ...n,
        }
    return (i instanceof RegExp && (r.pattern = i), new e(r))
}
function me(e) {
    let t = e?.target ?? 'draft-2020-12'
    return (
        t === 'draft-4' && (t = 'draft-04'),
        t === 'draft-7' && (t = 'draft-07'),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? F,
            target: t,
            unrepresentable: e?.unrepresentable ?? 'throw',
            override: e?.override ?? (() => {}),
            io: e?.io ?? 'output',
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? 'ref',
            reused: e?.reused ?? 'inline',
            external: e?.external ?? void 0,
        }
    )
}
function I(e, t, i = { path: [], schemaPath: [] }) {
    var o
    const n = e._zod.def,
        r = t.seen.get(e)
    if (r)
        return (
            r.count++,
            i.schemaPath.includes(e) && (r.cycle = i.path),
            r.schema
        )
    const a = { schema: {}, count: 1, cycle: void 0, path: i.path }
    t.seen.set(e, a)
    const c = e._zod.toJSONSchema?.()
    if (c) a.schema = c
    else {
        const s = { ...i, schemaPath: [...i.schemaPath, e], path: i.path }
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, s)
        else {
            const v = a.schema,
                g = t.processors[n.type]
            if (!g)
                throw new Error(
                    `[toJSONSchema]: Non-representable type encountered: ${n.type}`,
                )
            g(e, t, v, s)
        }
        const m = e._zod.parent
        m && (a.ref || (a.ref = m), I(m, t, s), (t.seen.get(m).isParent = !0))
    }
    const l = t.metadataRegistry.get(e)
    return (
        l && Object.assign(a.schema, l),
        t.io === 'input' &&
            P(e) &&
            (delete a.schema.examples, delete a.schema.default),
        t.io === 'input' &&
            a.schema._prefault &&
            ((o = a.schema).default ?? (o.default = a.schema._prefault)),
        delete a.schema._prefault,
        t.seen.get(e).schema
    )
}
function fe(e, t) {
    const i = e.seen.get(t)
    if (!i) throw new Error('Unprocessed schema. This is a bug in Zod.')
    const o = new Map()
    for (const a of e.seen.entries()) {
        const c = e.metadataRegistry.get(a[0])?.id
        if (c) {
            const l = o.get(c)
            if (l && l !== a[0])
                throw new Error(
                    `Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                )
            o.set(c, a[0])
        }
    }
    const n = (a) => {
            const c = e.target === 'draft-2020-12' ? '$defs' : 'definitions'
            if (e.external) {
                const m = e.external.registry.get(a[0])?.id,
                    v = e.external.uri ?? ((S) => S)
                if (m) return { ref: v(m) }
                const g = a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`
                return (
                    (a[1].defId = g),
                    { defId: g, ref: `${v('__shared')}#/${c}/${g}` }
                )
            }
            if (a[1] === i) return { ref: '#' }
            const u = `#/${c}/`,
                s = a[1].schema.id ?? `__schema${e.counter++}`
            return { defId: s, ref: u + s }
        },
        r = (a) => {
            if (a[1].schema.$ref) return
            const c = a[1],
                { ref: l, defId: u } = n(a)
            ;((c.def = { ...c.schema }), u && (c.defId = u))
            const s = c.schema
            for (const m in s) delete s[m]
            s.$ref = l
        }
    if (e.cycles === 'throw')
        for (const a of e.seen.entries()) {
            const c = a[1]
            if (c.cycle)
                throw new Error(`Cycle detected: #/${c.cycle?.join('/')}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
        }
    for (const a of e.seen.entries()) {
        const c = a[1]
        if (t === a[0]) {
            r(a)
            continue
        }
        if (e.external) {
            const u = e.external.registry.get(a[0])?.id
            if (t !== a[0] && u) {
                r(a)
                continue
            }
        }
        if (e.metadataRegistry.get(a[0])?.id) {
            r(a)
            continue
        }
        if (c.cycle) {
            r(a)
            continue
        }
        if (c.count > 1 && e.reused === 'ref') {
            r(a)
            continue
        }
    }
}
function pe(e, t) {
    const i = e.seen.get(t)
    if (!i) throw new Error('Unprocessed schema. This is a bug in Zod.')
    const o = (a) => {
        const c = e.seen.get(a)
        if (c.ref === null) return
        const l = c.def ?? c.schema,
            u = { ...l },
            s = c.ref
        if (((c.ref = null), s)) {
            o(s)
            const v = e.seen.get(s),
                g = v.schema
            if (
                (g.$ref &&
                (e.target === 'draft-07' ||
                    e.target === 'draft-04' ||
                    e.target === 'openapi-3.0')
                    ? ((l.allOf = l.allOf ?? []), l.allOf.push(g))
                    : Object.assign(l, g),
                Object.assign(l, u),
                a._zod.parent === s)
            )
                for (const z in l)
                    z === '$ref' || z === 'allOf' || z in u || delete l[z]
            if (g.$ref)
                for (const z in l)
                    z === '$ref' ||
                        z === 'allOf' ||
                        (z in v.def &&
                            JSON.stringify(l[z]) === JSON.stringify(v.def[z]) &&
                            delete l[z])
        }
        const m = a._zod.parent
        if (m && m !== s) {
            o(m)
            const v = e.seen.get(m)
            if (v?.schema.$ref && ((l.$ref = v.schema.$ref), v.def))
                for (const g in l)
                    g === '$ref' ||
                        g === 'allOf' ||
                        (g in v.def &&
                            JSON.stringify(l[g]) === JSON.stringify(v.def[g]) &&
                            delete l[g])
        }
        e.override({ zodSchema: a, jsonSchema: l, path: c.path ?? [] })
    }
    for (const a of [...e.seen.entries()].reverse()) o(a[0])
    const n = {}
    if (
        (e.target === 'draft-2020-12'
            ? (n.$schema = 'https://json-schema.org/draft/2020-12/schema')
            : e.target === 'draft-07'
              ? (n.$schema = 'http://json-schema.org/draft-07/schema#')
              : e.target === 'draft-04'
                ? (n.$schema = 'http://json-schema.org/draft-04/schema#')
                : e.target,
        e.external?.uri)
    ) {
        const a = e.external.registry.get(t)?.id
        if (!a) throw new Error('Schema is missing an `id` property')
        n.$id = e.external.uri(a)
    }
    Object.assign(n, i.def ?? i.schema)
    const r = e.external?.defs ?? {}
    for (const a of e.seen.entries()) {
        const c = a[1]
        c.def && c.defId && (r[c.defId] = c.def)
    }
    e.external ||
        (Object.keys(r).length > 0 &&
            (e.target === 'draft-2020-12'
                ? (n.$defs = r)
                : (n.definitions = r)))
    try {
        const a = JSON.parse(JSON.stringify(n))
        return (
            Object.defineProperty(a, '~standard', {
                value: {
                    ...t['~standard'],
                    jsonSchema: {
                        input: ye(t, 'input', e.processors),
                        output: ye(t, 'output', e.processors),
                    },
                },
                enumerable: !1,
                writable: !1,
            }),
            a
        )
    } catch {
        throw new Error('Error converting schema to JSON.')
    }
}
function P(e, t) {
    const i = t ?? { seen: new Set() }
    if (i.seen.has(e)) return !1
    i.seen.add(e)
    const o = e._zod.def
    if (o.type === 'transform') return !0
    if (o.type === 'array') return P(o.element, i)
    if (o.type === 'set') return P(o.valueType, i)
    if (o.type === 'lazy') return P(o.getter(), i)
    if (
        o.type === 'promise' ||
        o.type === 'optional' ||
        o.type === 'nonoptional' ||
        o.type === 'nullable' ||
        o.type === 'readonly' ||
        o.type === 'default' ||
        o.type === 'prefault'
    )
        return P(o.innerType, i)
    if (o.type === 'intersection') return P(o.left, i) || P(o.right, i)
    if (o.type === 'record' || o.type === 'map')
        return P(o.keyType, i) || P(o.valueType, i)
    if (o.type === 'pipe') return P(o.in, i) || P(o.out, i)
    if (o.type === 'object') {
        for (const n in o.shape) if (P(o.shape[n], i)) return !0
        return !1
    }
    if (o.type === 'union') {
        for (const n of o.options) if (P(n, i)) return !0
        return !1
    }
    if (o.type === 'tuple') {
        for (const n of o.items) if (P(n, i)) return !0
        return !!(o.rest && P(o.rest, i))
    }
    return !1
}
const iu =
        (e, t = {}) =>
        (i) => {
            const o = me({ ...i, processors: t })
            return (I(e, o), fe(o, e), pe(o, e))
        },
    ye =
        (e, t, i = {}) =>
        (o) => {
            const { libraryOptions: n, target: r } = o ?? {},
                a = me({ ...(n ?? {}), target: r, io: t, processors: i })
            return (I(e, a), fe(a, e), pe(a, e))
        },
    Df = {
        guid: 'uuid',
        url: 'uri',
        datetime: 'date-time',
        json_string: 'json-string',
        regex: '',
    },
    ou = (e, t, i, o) => {
        const n = i
        n.type = 'string'
        const {
            minimum: r,
            maximum: a,
            format: c,
            patterns: l,
            contentEncoding: u,
        } = e._zod.bag
        if (
            (typeof r == 'number' && (n.minLength = r),
            typeof a == 'number' && (n.maxLength = a),
            c &&
                ((n.format = Df[c] ?? c),
                n.format === '' && delete n.format,
                c === 'time' && delete n.format),
            u && (n.contentEncoding = u),
            l && l.size > 0)
        ) {
            const s = [...l]
            s.length === 1
                ? (n.pattern = s[0].source)
                : s.length > 1 &&
                  (n.allOf = [
                      ...s.map((m) => ({
                          ...(t.target === 'draft-07' ||
                          t.target === 'draft-04' ||
                          t.target === 'openapi-3.0'
                              ? { type: 'string' }
                              : {}),
                          pattern: m.source,
                      })),
                  ])
        }
    },
    au = (e, t, i, o) => {
        const n = i,
            {
                minimum: r,
                maximum: a,
                format: c,
                multipleOf: l,
                exclusiveMaximum: u,
                exclusiveMinimum: s,
            } = e._zod.bag
        ;(typeof c == 'string' && c.includes('int')
            ? (n.type = 'integer')
            : (n.type = 'number'),
            typeof s == 'number' &&
                (t.target === 'draft-04' || t.target === 'openapi-3.0'
                    ? ((n.minimum = s), (n.exclusiveMinimum = !0))
                    : (n.exclusiveMinimum = s)),
            typeof r == 'number' &&
                ((n.minimum = r),
                typeof s == 'number' &&
                    t.target !== 'draft-04' &&
                    (s >= r ? delete n.minimum : delete n.exclusiveMinimum)),
            typeof u == 'number' &&
                (t.target === 'draft-04' || t.target === 'openapi-3.0'
                    ? ((n.maximum = u), (n.exclusiveMaximum = !0))
                    : (n.exclusiveMaximum = u)),
            typeof a == 'number' &&
                ((n.maximum = a),
                typeof u == 'number' &&
                    t.target !== 'draft-04' &&
                    (u <= a ? delete n.maximum : delete n.exclusiveMaximum)),
            typeof l == 'number' && (n.multipleOf = l))
    },
    cu = (e, t, i, o) => {
        i.type = 'boolean'
    },
    uu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('BigInt cannot be represented in JSON Schema')
    },
    lu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Symbols cannot be represented in JSON Schema')
    },
    su = (e, t, i, o) => {
        t.target === 'openapi-3.0'
            ? ((i.type = 'string'), (i.nullable = !0), (i.enum = [null]))
            : (i.type = 'null')
    },
    du = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Undefined cannot be represented in JSON Schema')
    },
    mu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Void cannot be represented in JSON Schema')
    },
    fu = (e, t, i, o) => {
        i.not = {}
    },
    pu = (e, t, i, o) => {},
    vu = (e, t, i, o) => {},
    gu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Date cannot be represented in JSON Schema')
    },
    hu = (e, t, i, o) => {
        const n = e._zod.def,
            r = dt(n.entries)
        ;(r.every((a) => typeof a == 'number') && (i.type = 'number'),
            r.every((a) => typeof a == 'string') && (i.type = 'string'),
            (i.enum = r))
    },
    $u = (e, t, i, o) => {
        const n = e._zod.def,
            r = []
        for (const a of n.values)
            if (a === void 0) {
                if (t.unrepresentable === 'throw')
                    throw new Error(
                        'Literal `undefined` cannot be represented in JSON Schema',
                    )
            } else if (typeof a == 'bigint') {
                if (t.unrepresentable === 'throw')
                    throw new Error(
                        'BigInt literals cannot be represented in JSON Schema',
                    )
                r.push(Number(a))
            } else r.push(a)
        if (r.length !== 0)
            if (r.length === 1) {
                const a = r[0]
                ;((i.type = a === null ? 'null' : typeof a),
                    t.target === 'draft-04' || t.target === 'openapi-3.0'
                        ? (i.enum = [a])
                        : (i.const = a))
            } else
                (r.every((a) => typeof a == 'number') && (i.type = 'number'),
                    r.every((a) => typeof a == 'string') && (i.type = 'string'),
                    r.every((a) => typeof a == 'boolean') &&
                        (i.type = 'boolean'),
                    r.every((a) => a === null) && (i.type = 'null'),
                    (i.enum = r))
    },
    _u = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('NaN cannot be represented in JSON Schema')
    },
    bu = (e, t, i, o) => {
        const n = i,
            r = e._zod.pattern
        if (!r) throw new Error('Pattern not found in template literal')
        ;((n.type = 'string'), (n.pattern = r.source))
    },
    yu = (e, t, i, o) => {
        const n = i,
            r = { type: 'string', format: 'binary', contentEncoding: 'binary' },
            { minimum: a, maximum: c, mime: l } = e._zod.bag
        ;(a !== void 0 && (r.minLength = a),
            c !== void 0 && (r.maxLength = c),
            l
                ? l.length === 1
                    ? ((r.contentMediaType = l[0]), Object.assign(n, r))
                    : (Object.assign(n, r),
                      (n.anyOf = l.map((u) => ({ contentMediaType: u }))))
                : Object.assign(n, r))
    },
    ku = (e, t, i, o) => {
        i.type = 'boolean'
    },
    Su = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Custom types cannot be represented in JSON Schema')
    },
    zu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error(
                'Function types cannot be represented in JSON Schema',
            )
    },
    Iu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Transforms cannot be represented in JSON Schema')
    },
    wu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Map cannot be represented in JSON Schema')
    },
    xu = (e, t, i, o) => {
        if (t.unrepresentable === 'throw')
            throw new Error('Set cannot be represented in JSON Schema')
    },
    Uu = (e, t, i, o) => {
        const n = i,
            r = e._zod.def,
            { minimum: a, maximum: c } = e._zod.bag
        ;(typeof a == 'number' && (n.minItems = a),
            typeof c == 'number' && (n.maxItems = c),
            (n.type = 'array'),
            (n.items = I(r.element, t, { ...o, path: [...o.path, 'items'] })))
    },
    ju = (e, t, i, o) => {
        const n = i,
            r = e._zod.def
        ;((n.type = 'object'), (n.properties = {}))
        const a = r.shape
        for (const u in a)
            n.properties[u] = I(a[u], t, {
                ...o,
                path: [...o.path, 'properties', u],
            })
        const c = new Set(Object.keys(a)),
            l = new Set(
                [...c].filter((u) => {
                    const s = r.shape[u]._zod
                    return t.io === 'input'
                        ? s.optin === void 0
                        : s.optout === void 0
                }),
            )
        ;(l.size > 0 && (n.required = Array.from(l)),
            r.catchall?._zod.def.type === 'never'
                ? (n.additionalProperties = !1)
                : r.catchall
                  ? r.catchall &&
                    (n.additionalProperties = I(r.catchall, t, {
                        ...o,
                        path: [...o.path, 'additionalProperties'],
                    }))
                  : t.io === 'output' && (n.additionalProperties = !1))
    },
    ur = (e, t, i, o) => {
        const n = e._zod.def,
            r = n.inclusive === !1,
            a = n.options.map((c, l) =>
                I(c, t, { ...o, path: [...o.path, r ? 'oneOf' : 'anyOf', l] }),
            )
        r ? (i.oneOf = a) : (i.anyOf = a)
    },
    Ou = (e, t, i, o) => {
        const n = e._zod.def,
            r = I(n.left, t, { ...o, path: [...o.path, 'allOf', 0] }),
            a = I(n.right, t, { ...o, path: [...o.path, 'allOf', 1] }),
            c = (u) => 'allOf' in u && Object.keys(u).length === 1,
            l = [...(c(r) ? r.allOf : [r]), ...(c(a) ? a.allOf : [a])]
        i.allOf = l
    },
    Du = (e, t, i, o) => {
        const n = i,
            r = e._zod.def
        n.type = 'array'
        const a = t.target === 'draft-2020-12' ? 'prefixItems' : 'items',
            c =
                t.target === 'draft-2020-12' || t.target === 'openapi-3.0'
                    ? 'items'
                    : 'additionalItems',
            l = r.items.map((v, g) =>
                I(v, t, { ...o, path: [...o.path, a, g] }),
            ),
            u = r.rest
                ? I(r.rest, t, {
                      ...o,
                      path: [
                          ...o.path,
                          c,
                          ...(t.target === 'openapi-3.0'
                              ? [r.items.length]
                              : []),
                      ],
                  })
                : null
        t.target === 'draft-2020-12'
            ? ((n.prefixItems = l), u && (n.items = u))
            : t.target === 'openapi-3.0'
              ? ((n.items = { anyOf: l }),
                u && n.items.anyOf.push(u),
                (n.minItems = l.length),
                u || (n.maxItems = l.length))
              : ((n.items = l), u && (n.additionalItems = u))
        const { minimum: s, maximum: m } = e._zod.bag
        ;(typeof s == 'number' && (n.minItems = s),
            typeof m == 'number' && (n.maxItems = m))
    },
    Nu = (e, t, i, o) => {
        const n = i,
            r = e._zod.def
        n.type = 'object'
        const a = r.keyType,
            l = a._zod.bag?.patterns
        if (r.mode === 'loose' && l && l.size > 0) {
            const s = I(r.valueType, t, {
                ...o,
                path: [...o.path, 'patternProperties', '*'],
            })
            n.patternProperties = {}
            for (const m of l) n.patternProperties[m.source] = s
        } else
            ((t.target === 'draft-07' || t.target === 'draft-2020-12') &&
                (n.propertyNames = I(r.keyType, t, {
                    ...o,
                    path: [...o.path, 'propertyNames'],
                })),
                (n.additionalProperties = I(r.valueType, t, {
                    ...o,
                    path: [...o.path, 'additionalProperties'],
                })))
        const u = a._zod.values
        if (u) {
            const s = [...u].filter(
                (m) => typeof m == 'string' || typeof m == 'number',
            )
            s.length > 0 && (n.required = s)
        }
    },
    Pu = (e, t, i, o) => {
        const n = e._zod.def,
            r = I(n.innerType, t, o),
            a = t.seen.get(e)
        t.target === 'openapi-3.0'
            ? ((a.ref = n.innerType), (i.nullable = !0))
            : (i.anyOf = [r, { type: 'null' }])
    },
    Zu = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        r.ref = n.innerType
    },
    Tu = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        ;((r.ref = n.innerType),
            (i.default = JSON.parse(JSON.stringify(n.defaultValue))))
    },
    Eu = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        ;((r.ref = n.innerType),
            t.io === 'input' &&
                (i._prefault = JSON.parse(JSON.stringify(n.defaultValue))))
    },
    Au = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        r.ref = n.innerType
        let a
        try {
            a = n.catchValue(void 0)
        } catch {
            throw new Error(
                'Dynamic catch values are not supported in JSON Schema',
            )
        }
        i.default = a
    },
    Ru = (e, t, i, o) => {
        const n = e._zod.def,
            r =
                t.io === 'input'
                    ? n.in._zod.def.type === 'transform'
                        ? n.out
                        : n.in
                    : n.out
        I(r, t, o)
        const a = t.seen.get(e)
        a.ref = r
    },
    Fu = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        ;((r.ref = n.innerType), (i.readOnly = !0))
    },
    Lu = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        r.ref = n.innerType
    },
    lr = (e, t, i, o) => {
        const n = e._zod.def
        I(n.innerType, t, o)
        const r = t.seen.get(e)
        r.ref = n.innerType
    },
    Cu = (e, t, i, o) => {
        const n = e._zod.innerType
        I(n, t, o)
        const r = t.seen.get(e)
        r.ref = n
    },
    ut = {
        string: ou,
        number: au,
        boolean: cu,
        bigint: uu,
        symbol: lu,
        null: su,
        undefined: du,
        void: mu,
        never: fu,
        any: pu,
        unknown: vu,
        date: gu,
        enum: hu,
        literal: $u,
        nan: _u,
        template_literal: bu,
        file: yu,
        success: ku,
        custom: Su,
        function: zu,
        transform: Iu,
        map: wu,
        set: xu,
        array: Uu,
        object: ju,
        union: ur,
        intersection: Ou,
        tuple: Du,
        record: Nu,
        nullable: Pu,
        nonoptional: Zu,
        default: Tu,
        prefault: Eu,
        catch: Au,
        pipe: Ru,
        readonly: Fu,
        promise: Lu,
        optional: lr,
        lazy: Cu,
    }
function Ju(e, t) {
    if ('_idmap' in e) {
        const o = e,
            n = me({ ...t, processors: ut }),
            r = {}
        for (const l of o._idmap.entries()) {
            const [u, s] = l
            I(s, n)
        }
        const a = {},
            c = { registry: o, uri: t?.uri, defs: r }
        n.external = c
        for (const l of o._idmap.entries()) {
            const [u, s] = l
            ;(fe(n, s), (a[u] = pe(n, s)))
        }
        if (Object.keys(r).length > 0) {
            const l = n.target === 'draft-2020-12' ? '$defs' : 'definitions'
            a.__shared = { [l]: r }
        }
        return { schemas: a }
    }
    const i = me({ ...t, processors: ut })
    return (I(e, i), fe(i, e), pe(i, e))
}
class Nf {
    get metadataRegistry() {
        return this.ctx.metadataRegistry
    }
    get target() {
        return this.ctx.target
    }
    get unrepresentable() {
        return this.ctx.unrepresentable
    }
    get override() {
        return this.ctx.override
    }
    get io() {
        return this.ctx.io
    }
    get counter() {
        return this.ctx.counter
    }
    set counter(t) {
        this.ctx.counter = t
    }
    get seen() {
        return this.ctx.seen
    }
    constructor(t) {
        let i = t?.target ?? 'draft-2020-12'
        ;(i === 'draft-4' && (i = 'draft-04'),
            i === 'draft-7' && (i = 'draft-07'),
            (this.ctx = me({
                processors: ut,
                target: i,
                ...(t?.metadata && { metadata: t.metadata }),
                ...(t?.unrepresentable && {
                    unrepresentable: t.unrepresentable,
                }),
                ...(t?.override && { override: t.override }),
                ...(t?.io && { io: t.io }),
            })))
    }
    process(t, i = { path: [], schemaPath: [] }) {
        return I(t, this.ctx, i)
    }
    emit(t, i) {
        ;(i &&
            (i.cycles && (this.ctx.cycles = i.cycles),
            i.reused && (this.ctx.reused = i.reused),
            i.external && (this.ctx.external = i.external)),
            fe(this.ctx, t))
        const o = pe(this.ctx, t),
            { '~standard': n, ...r } = o
        return r
    }
}
const Pf = Object.freeze(
        Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
            value: 'Module',
        }),
    ),
    Zf = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                $ZodAny: Oa,
                $ZodArray: Ta,
                $ZodAsyncError: ne,
                $ZodBase64: $a,
                $ZodBase64URL: ba,
                $ZodBigInt: Nt,
                $ZodBigIntFormat: wa,
                $ZodBoolean: Dt,
                $ZodCIDRv4: ga,
                $ZodCIDRv6: ha,
                $ZodCUID: ia,
                $ZodCUID2: oa,
                $ZodCatch: tc,
                $ZodCheck: j,
                $ZodCheckBigIntFormat: Zo,
                $ZodCheckEndsWith: Go,
                $ZodCheckGreaterThan: Ut,
                $ZodCheckIncludes: Ko,
                $ZodCheckLengthEquals: Lo,
                $ZodCheckLessThan: xt,
                $ZodCheckLowerCase: Jo,
                $ZodCheckMaxLength: Ro,
                $ZodCheckMaxSize: To,
                $ZodCheckMimeType: Wo,
                $ZodCheckMinLength: Fo,
                $ZodCheckMinSize: Eo,
                $ZodCheckMultipleOf: No,
                $ZodCheckNumberFormat: Po,
                $ZodCheckOverwrite: qo,
                $ZodCheckProperty: Bo,
                $ZodCheckRegex: Co,
                $ZodCheckSizeEquals: Ao,
                $ZodCheckStartsWith: Vo,
                $ZodCheckStringFormat: Pe,
                $ZodCheckUpperCase: Mo,
                $ZodCodec: Tt,
                $ZodCustom: sc,
                $ZodCustomStringFormat: za,
                $ZodDate: Za,
                $ZodDefault: Ha,
                $ZodDiscriminatedUnion: Ca,
                $ZodE164: ya,
                $ZodEmail: ea,
                $ZodEmoji: ta,
                $ZodEncodeError: sn,
                $ZodEnum: Ga,
                $ZodError: ft,
                $ZodExactOptional: Xa,
                $ZodFile: Wa,
                $ZodFunction: cc,
                $ZodGUID: Ho,
                $ZodIPv4: fa,
                $ZodIPv6: pa,
                $ZodISODate: sa,
                $ZodISODateTime: la,
                $ZodISODuration: ma,
                $ZodISOTime: da,
                $ZodIntersection: Ja,
                $ZodJWT: Sa,
                $ZodKSUID: ua,
                $ZodLazy: lc,
                $ZodLiteral: Ba,
                $ZodMAC: va,
                $ZodMap: Ka,
                $ZodNaN: rc,
                $ZodNanoID: ra,
                $ZodNever: Na,
                $ZodNonOptional: ec,
                $ZodNull: ja,
                $ZodNullable: Ya,
                $ZodNumber: Ot,
                $ZodNumberFormat: Ia,
                $ZodObject: Ra,
                $ZodObjectJIT: Fa,
                $ZodOptional: Zt,
                $ZodPipe: ic,
                $ZodPrefault: Qa,
                $ZodPromise: uc,
                $ZodReadonly: oc,
                $ZodRealError: E,
                $ZodRecord: Ma,
                $ZodRegistry: hc,
                $ZodSet: Va,
                $ZodString: Ze,
                $ZodStringFormat: x,
                $ZodSuccess: nc,
                $ZodSymbol: xa,
                $ZodTemplateLiteral: ac,
                $ZodTransform: qa,
                $ZodTuple: Pt,
                $ZodType: b,
                $ZodULID: aa,
                $ZodURL: na,
                $ZodUUID: Qo,
                $ZodUndefined: Ua,
                $ZodUnion: vn,
                $ZodUnknown: Da,
                $ZodVoid: Pa,
                $ZodXID: ca,
                $ZodXor: La,
                $brand: wi,
                $constructor: d,
                $input: gc,
                $output: vc,
                Doc: Xo,
                JSONSchema: Pf,
                JSONSchemaGenerator: Nf,
                NEVER: Ii,
                TimePrecision: yc,
                _any: Jc,
                _array: qc,
                _base64: Qt,
                _base64url: er,
                _bigint: Tc,
                _boolean: Pc,
                _catch: If,
                _check: eu,
                _cidrv4: Yt,
                _cidrv6: Ht,
                _coercedBigint: Ec,
                _coercedBoolean: Zc,
                _coercedDate: Bc,
                _coercedNumber: xc,
                _coercedString: _c,
                _cuid: Kt,
                _cuid2: Vt,
                _custom: Yc,
                _date: Gc,
                _decode: ht,
                _decodeAsync: _t,
                _default: kf,
                _discriminatedUnion: sf,
                _e164: nr,
                _email: At,
                _emoji: Jt,
                _encode: gt,
                _encodeAsync: $t,
                _endsWith: kn,
                _enum: gf,
                _file: Xc,
                _float32: jc,
                _float64: Oc,
                _gt: Y,
                _gte: Z,
                _guid: an,
                _includes: bn,
                _int: Uc,
                _int32: Dc,
                _int64: Ac,
                _intersection: df,
                _ipv4: qt,
                _ipv6: Xt,
                _isoDate: Sc,
                _isoDateTime: kc,
                _isoDuration: Ic,
                _isoTime: zc,
                _jwt: tr,
                _ksuid: Wt,
                _lazy: jf,
                _length: Ae,
                _literal: $f,
                _lowercase: $n,
                _lt: X,
                _lte: L,
                _mac: bc,
                _map: pf,
                _max: L,
                _maxLength: Ee,
                _maxSize: ge,
                _mime: Sn,
                _min: Z,
                _minLength: re,
                _minSize: H,
                _multipleOf: de,
                _nan: Wc,
                _nanoid: Mt,
                _nativeEnum: hf,
                _negative: ir,
                _never: Kc,
                _nonnegative: ar,
                _nonoptional: Sf,
                _nonpositive: or,
                _normalize: zn,
                _null: Cc,
                _nullable: yf,
                _number: wc,
                _optional: bf,
                _overwrite: W,
                _parse: xe,
                _parseAsync: Ue,
                _pipe: wf,
                _positive: rr,
                _promise: Of,
                _property: cr,
                _readonly: xf,
                _record: ff,
                _refine: Hc,
                _regex: hn,
                _safeDecode: yt,
                _safeDecodeAsync: St,
                _safeEncode: bt,
                _safeEncodeAsync: kt,
                _safeParse: je,
                _safeParseAsync: Oe,
                _set: vf,
                _size: Te,
                _slugify: Un,
                _startsWith: yn,
                _string: $c,
                _stringFormat: Re,
                _stringbool: ru,
                _success: zf,
                _superRefine: Qc,
                _symbol: Fc,
                _templateLiteral: Uf,
                _toLowerCase: wn,
                _toUpperCase: xn,
                _transform: _f,
                _trim: In,
                _tuple: mf,
                _uint32: Nc,
                _uint64: Rc,
                _ulid: Gt,
                _undefined: Lc,
                _union: uf,
                _unknown: Mc,
                _uppercase: _n,
                _url: gn,
                _uuid: Rt,
                _uuidv4: Ft,
                _uuidv6: Lt,
                _uuidv7: Ct,
                _void: Vc,
                _xid: Bt,
                _xor: lf,
                clone: J,
                config: N,
                createStandardJSONSchemaMethod: ye,
                createToJSONSchemaMethod: iu,
                decode: Vs,
                decodeAsync: Bs,
                describe: nu,
                encode: Ks,
                encodeAsync: Gs,
                extractDefs: fe,
                finalize: pe,
                flattenError: pt,
                formatError: vt,
                globalConfig: nn,
                globalRegistry: F,
                initializeContext: me,
                isValidBase64: jt,
                isValidBase64URL: _a,
                isValidJWT: ka,
                locales: pc,
                meta: tu,
                parse: ot,
                parseAsync: at,
                prettifyError: Bi,
                process: I,
                regexes: wt,
                registry: Et,
                safeDecode: qs,
                safeDecodeAsync: Ys,
                safeEncode: Ws,
                safeEncodeAsync: Xs,
                safeParse: Wi,
                safeParseAsync: qi,
                toDotPath: Gi,
                toJSONSchema: Ju,
                treeifyError: Vi,
                util: Mi,
                version: Yo,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Tf = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                endsWith: kn,
                gt: Y,
                gte: Z,
                includes: bn,
                length: Ae,
                lowercase: $n,
                lt: X,
                lte: L,
                maxLength: Ee,
                maxSize: ge,
                mime: Sn,
                minLength: re,
                minSize: H,
                multipleOf: de,
                negative: ir,
                nonnegative: ar,
                nonpositive: or,
                normalize: zn,
                overwrite: W,
                positive: rr,
                property: cr,
                regex: hn,
                size: Te,
                slugify: Un,
                startsWith: yn,
                toLowerCase: wn,
                toUpperCase: xn,
                trim: In,
                uppercase: _n,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    sr = d('ZodISODateTime', (e, t) => {
        ;(la.init(e, t), U.init(e, t))
    })
function Mu(e) {
    return kc(sr, e)
}
const dr = d('ZodISODate', (e, t) => {
    ;(sa.init(e, t), U.init(e, t))
})
function Ku(e) {
    return Sc(dr, e)
}
const mr = d('ZodISOTime', (e, t) => {
    ;(da.init(e, t), U.init(e, t))
})
function Vu(e) {
    return zc(mr, e)
}
const fr = d('ZodISODuration', (e, t) => {
    ;(ma.init(e, t), U.init(e, t))
})
function Gu(e) {
    return Ic(fr, e)
}
const Bu = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                ZodISODate: dr,
                ZodISODateTime: sr,
                ZodISODuration: fr,
                ZodISOTime: mr,
                date: Ku,
                datetime: Mu,
                duration: Gu,
                time: Vu,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Wu = (e, t) => {
        ;(ft.init(e, t),
            (e.name = 'ZodError'),
            Object.defineProperties(e, {
                format: { value: (i) => vt(e, i) },
                flatten: { value: (i) => pt(e, i) },
                addIssue: {
                    value: (i) => {
                        ;(e.issues.push(i),
                            (e.message = JSON.stringify(e.issues, tn, 2)))
                    },
                },
                addIssues: {
                    value: (i) => {
                        ;(e.issues.push(...i),
                            (e.message = JSON.stringify(e.issues, tn, 2)))
                    },
                },
                isEmpty: {
                    get() {
                        return e.issues.length === 0
                    },
                },
            }))
    },
    Ef = d('ZodError', Wu),
    A = d('ZodError', Wu, { Parent: Error }),
    qu = xe(A),
    Xu = Ue(A),
    Yu = je(A),
    Hu = Oe(A),
    Qu = gt(A),
    el = ht(A),
    nl = $t(A),
    tl = _t(A),
    rl = bt(A),
    il = yt(A),
    ol = kt(A),
    al = St(A),
    y = d(
        'ZodType',
        (e, t) => (
            b.init(e, t),
            Object.assign(e['~standard'], {
                jsonSchema: { input: ye(e, 'input'), output: ye(e, 'output') },
            }),
            (e.toJSONSchema = iu(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, '_def', { value: t }),
            (e.check = (...i) =>
                e.clone(
                    V(t, {
                        checks: [
                            ...(t.checks ?? []),
                            ...i.map((o) =>
                                typeof o == 'function'
                                    ? {
                                          _zod: {
                                              check: o,
                                              def: { check: 'custom' },
                                              onattach: [],
                                          },
                                      }
                                    : o,
                            ),
                        ],
                    }),
                    { parent: !0 },
                )),
            (e.with = e.check),
            (e.clone = (i, o) => J(e, i, o)),
            (e.brand = () => e),
            (e.register = (i, o) => (i.add(e, o), e)),
            (e.parse = (i, o) => qu(e, i, o, { callee: e.parse })),
            (e.safeParse = (i, o) => Yu(e, i, o)),
            (e.parseAsync = async (i, o) =>
                Xu(e, i, o, { callee: e.parseAsync })),
            (e.safeParseAsync = async (i, o) => Hu(e, i, o)),
            (e.spa = e.safeParseAsync),
            (e.encode = (i, o) => Qu(e, i, o)),
            (e.decode = (i, o) => el(e, i, o)),
            (e.encodeAsync = async (i, o) => nl(e, i, o)),
            (e.decodeAsync = async (i, o) => tl(e, i, o)),
            (e.safeEncode = (i, o) => rl(e, i, o)),
            (e.safeDecode = (i, o) => il(e, i, o)),
            (e.safeEncodeAsync = async (i, o) => ol(e, i, o)),
            (e.safeDecodeAsync = async (i, o) => al(e, i, o)),
            (e.refine = (i, o) => e.check(ri(i, o))),
            (e.superRefine = (i) => e.check(ii(i))),
            (e.overwrite = (i) => e.check(W(i))),
            (e.optional = () => Se(e)),
            (e.exactOptional = () => Fr(e)),
            (e.nullable = () => ze(e)),
            (e.nullish = () => Se(ze(e))),
            (e.nonoptional = (i) => Vr(e, i)),
            (e.array = () => Ke(e)),
            (e.or = (i) => qn([e, i])),
            (e.and = (i) => jr(e, i)),
            (e.transform = (i) => Ie(e, Yn(i))),
            (e.default = (i) => Jr(e, i)),
            (e.prefault = (i) => Kr(e, i)),
            (e.catch = (i) => Wr(e, i)),
            (e.pipe = (i) => Ie(e, i)),
            (e.readonly = () => Yr(e)),
            (e.describe = (i) => {
                const o = e.clone()
                return (F.add(o, { description: i }), o)
            }),
            Object.defineProperty(e, 'description', {
                get() {
                    return F.get(e)?.description
                },
                configurable: !0,
            }),
            (e.meta = (...i) => {
                if (i.length === 0) return F.get(e)
                const o = e.clone()
                return (F.add(o, i[0]), o)
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (i) => i(e)),
            e
        ),
    ),
    jn = d('_ZodString', (e, t) => {
        ;(Ze.init(e, t),
            y.init(e, t),
            (e._zod.processJSONSchema = (o, n, r) => ou(e, o, n)))
        const i = e._zod.bag
        ;((e.format = i.format ?? null),
            (e.minLength = i.minimum ?? null),
            (e.maxLength = i.maximum ?? null),
            (e.regex = (...o) => e.check(hn(...o))),
            (e.includes = (...o) => e.check(bn(...o))),
            (e.startsWith = (...o) => e.check(yn(...o))),
            (e.endsWith = (...o) => e.check(kn(...o))),
            (e.min = (...o) => e.check(re(...o))),
            (e.max = (...o) => e.check(Ee(...o))),
            (e.length = (...o) => e.check(Ae(...o))),
            (e.nonempty = (...o) => e.check(re(1, ...o))),
            (e.lowercase = (o) => e.check($n(o))),
            (e.uppercase = (o) => e.check(_n(o))),
            (e.trim = () => e.check(In())),
            (e.normalize = (...o) => e.check(zn(...o))),
            (e.toLowerCase = () => e.check(wn())),
            (e.toUpperCase = () => e.check(xn())),
            (e.slugify = () => e.check(Un())))
    }),
    Fe = d('ZodString', (e, t) => {
        ;(Ze.init(e, t),
            jn.init(e, t),
            (e.email = (i) => e.check(At(On, i))),
            (e.url = (i) => e.check(gn(Le, i))),
            (e.jwt = (i) => e.check(tr(Vn, i))),
            (e.emoji = (i) => e.check(Jt(Dn, i))),
            (e.guid = (i) => e.check(an(ke, i))),
            (e.uuid = (i) => e.check(Rt(K, i))),
            (e.uuidv4 = (i) => e.check(Ft(K, i))),
            (e.uuidv6 = (i) => e.check(Lt(K, i))),
            (e.uuidv7 = (i) => e.check(Ct(K, i))),
            (e.nanoid = (i) => e.check(Mt(Nn, i))),
            (e.guid = (i) => e.check(an(ke, i))),
            (e.cuid = (i) => e.check(Kt(Pn, i))),
            (e.cuid2 = (i) => e.check(Vt(Zn, i))),
            (e.ulid = (i) => e.check(Gt(Tn, i))),
            (e.base64 = (i) => e.check(Qt(Jn, i))),
            (e.base64url = (i) => e.check(er(Mn, i))),
            (e.xid = (i) => e.check(Bt(En, i))),
            (e.ksuid = (i) => e.check(Wt(An, i))),
            (e.ipv4 = (i) => e.check(qt(Rn, i))),
            (e.ipv6 = (i) => e.check(Xt(Fn, i))),
            (e.cidrv4 = (i) => e.check(Yt(Ln, i))),
            (e.cidrv6 = (i) => e.check(Ht(Cn, i))),
            (e.e164 = (i) => e.check(nr(Kn, i))),
            (e.datetime = (i) => e.check(Mu(i))),
            (e.date = (i) => e.check(Ku(i))),
            (e.time = (i) => e.check(Vu(i))),
            (e.duration = (i) => e.check(Gu(i))))
    })
function cn(e) {
    return $c(Fe, e)
}
const U = d('ZodStringFormat', (e, t) => {
        ;(x.init(e, t), jn.init(e, t))
    }),
    On = d('ZodEmail', (e, t) => {
        ;(ea.init(e, t), U.init(e, t))
    })
function cl(e) {
    return At(On, e)
}
const ke = d('ZodGUID', (e, t) => {
    ;(Ho.init(e, t), U.init(e, t))
})
function ul(e) {
    return an(ke, e)
}
const K = d('ZodUUID', (e, t) => {
    ;(Qo.init(e, t), U.init(e, t))
})
function ll(e) {
    return Rt(K, e)
}
function sl(e) {
    return Ft(K, e)
}
function dl(e) {
    return Lt(K, e)
}
function ml(e) {
    return Ct(K, e)
}
const Le = d('ZodURL', (e, t) => {
    ;(na.init(e, t), U.init(e, t))
})
function fl(e) {
    return gn(Le, e)
}
function pl(e) {
    return gn(Le, { protocol: /^https?$/, hostname: vo, ...f(e) })
}
const Dn = d('ZodEmoji', (e, t) => {
    ;(ta.init(e, t), U.init(e, t))
})
function vl(e) {
    return Jt(Dn, e)
}
const Nn = d('ZodNanoID', (e, t) => {
    ;(ra.init(e, t), U.init(e, t))
})
function gl(e) {
    return Mt(Nn, e)
}
const Pn = d('ZodCUID', (e, t) => {
    ;(ia.init(e, t), U.init(e, t))
})
function hl(e) {
    return Kt(Pn, e)
}
const Zn = d('ZodCUID2', (e, t) => {
    ;(oa.init(e, t), U.init(e, t))
})
function $l(e) {
    return Vt(Zn, e)
}
const Tn = d('ZodULID', (e, t) => {
    ;(aa.init(e, t), U.init(e, t))
})
function _l(e) {
    return Gt(Tn, e)
}
const En = d('ZodXID', (e, t) => {
    ;(ca.init(e, t), U.init(e, t))
})
function bl(e) {
    return Bt(En, e)
}
const An = d('ZodKSUID', (e, t) => {
    ;(ua.init(e, t), U.init(e, t))
})
function yl(e) {
    return Wt(An, e)
}
const Rn = d('ZodIPv4', (e, t) => {
    ;(fa.init(e, t), U.init(e, t))
})
function kl(e) {
    return qt(Rn, e)
}
const pr = d('ZodMAC', (e, t) => {
    ;(va.init(e, t), U.init(e, t))
})
function Sl(e) {
    return bc(pr, e)
}
const Fn = d('ZodIPv6', (e, t) => {
    ;(pa.init(e, t), U.init(e, t))
})
function zl(e) {
    return Xt(Fn, e)
}
const Ln = d('ZodCIDRv4', (e, t) => {
    ;(ga.init(e, t), U.init(e, t))
})
function Il(e) {
    return Yt(Ln, e)
}
const Cn = d('ZodCIDRv6', (e, t) => {
    ;(ha.init(e, t), U.init(e, t))
})
function wl(e) {
    return Ht(Cn, e)
}
const Jn = d('ZodBase64', (e, t) => {
    ;($a.init(e, t), U.init(e, t))
})
function xl(e) {
    return Qt(Jn, e)
}
const Mn = d('ZodBase64URL', (e, t) => {
    ;(ba.init(e, t), U.init(e, t))
})
function Ul(e) {
    return er(Mn, e)
}
const Kn = d('ZodE164', (e, t) => {
    ;(ya.init(e, t), U.init(e, t))
})
function jl(e) {
    return nr(Kn, e)
}
const Vn = d('ZodJWT', (e, t) => {
    ;(Sa.init(e, t), U.init(e, t))
})
function Ol(e) {
    return tr(Vn, e)
}
const he = d('ZodCustomStringFormat', (e, t) => {
    ;(za.init(e, t), U.init(e, t))
})
function Dl(e, t, i = {}) {
    return Re(he, e, t, i)
}
function Nl(e) {
    return Re(he, 'hostname', po, e)
}
function Pl(e) {
    return Re(he, 'hex', Oo, e)
}
function Zl(e, t) {
    const i = t?.enc ?? 'hex',
        o = `${e}_${i}`,
        n = wt[o]
    if (!n) throw new Error(`Unrecognized hash format: ${o}`)
    return Re(he, o, n, t)
}
const Ce = d('ZodNumber', (e, t) => {
    ;(Ot.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => au(e, o, n)),
        (e.gt = (o, n) => e.check(Y(o, n))),
        (e.gte = (o, n) => e.check(Z(o, n))),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.lt = (o, n) => e.check(X(o, n))),
        (e.lte = (o, n) => e.check(L(o, n))),
        (e.max = (o, n) => e.check(L(o, n))),
        (e.int = (o) => e.check(un(o))),
        (e.safe = (o) => e.check(un(o))),
        (e.positive = (o) => e.check(Y(0, o))),
        (e.nonnegative = (o) => e.check(Z(0, o))),
        (e.negative = (o) => e.check(X(0, o))),
        (e.nonpositive = (o) => e.check(L(0, o))),
        (e.multipleOf = (o, n) => e.check(de(o, n))),
        (e.step = (o, n) => e.check(de(o, n))),
        (e.finite = () => e))
    const i = e._zod.bag
    ;((e.minValue =
        Math.max(
            i.minimum ?? Number.NEGATIVE_INFINITY,
            i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
        ) ?? null),
        (e.maxValue =
            Math.min(
                i.maximum ?? Number.POSITIVE_INFINITY,
                i.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
            ) ?? null),
        (e.isInt =
            (i.format ?? '').includes('int') ||
            Number.isSafeInteger(i.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = i.format ?? null))
})
function vr(e) {
    return wc(Ce, e)
}
const ae = d('ZodNumberFormat', (e, t) => {
    ;(Ia.init(e, t), Ce.init(e, t))
})
function un(e) {
    return Uc(ae, e)
}
function Tl(e) {
    return jc(ae, e)
}
function El(e) {
    return Oc(ae, e)
}
function Al(e) {
    return Dc(ae, e)
}
function Rl(e) {
    return Nc(ae, e)
}
const Je = d('ZodBoolean', (e, t) => {
    ;(Dt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => cu(e, i, o)))
})
function gr(e) {
    return Pc(Je, e)
}
const Me = d('ZodBigInt', (e, t) => {
    ;(Nt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => uu(e, o)),
        (e.gte = (o, n) => e.check(Z(o, n))),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.gt = (o, n) => e.check(Y(o, n))),
        (e.gte = (o, n) => e.check(Z(o, n))),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.lt = (o, n) => e.check(X(o, n))),
        (e.lte = (o, n) => e.check(L(o, n))),
        (e.max = (o, n) => e.check(L(o, n))),
        (e.positive = (o) => e.check(Y(BigInt(0), o))),
        (e.negative = (o) => e.check(X(BigInt(0), o))),
        (e.nonpositive = (o) => e.check(L(BigInt(0), o))),
        (e.nonnegative = (o) => e.check(Z(BigInt(0), o))),
        (e.multipleOf = (o, n) => e.check(de(o, n))))
    const i = e._zod.bag
    ;((e.minValue = i.minimum ?? null),
        (e.maxValue = i.maximum ?? null),
        (e.format = i.format ?? null))
})
function Fl(e) {
    return Tc(Me, e)
}
const Gn = d('ZodBigIntFormat', (e, t) => {
    ;(wa.init(e, t), Me.init(e, t))
})
function Ll(e) {
    return Ac(Gn, e)
}
function Cl(e) {
    return Rc(Gn, e)
}
const hr = d('ZodSymbol', (e, t) => {
    ;(xa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => lu(e, i)))
})
function Jl(e) {
    return Fc(hr, e)
}
const $r = d('ZodUndefined', (e, t) => {
    ;(Ua.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => du(e, i)))
})
function Ml(e) {
    return Lc($r, e)
}
const _r = d('ZodNull', (e, t) => {
    ;(ja.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => su(e, i, o)))
})
function br(e) {
    return Cc(_r, e)
}
const yr = d('ZodAny', (e, t) => {
    ;(Oa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => pu()))
})
function Kl() {
    return Jc(yr)
}
const kr = d('ZodUnknown', (e, t) => {
    ;(Da.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => vu()))
})
function ie() {
    return Mc(kr)
}
const Sr = d('ZodNever', (e, t) => {
    ;(Na.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => fu(e, i, o)))
})
function Bn(e) {
    return Kc(Sr, e)
}
const zr = d('ZodVoid', (e, t) => {
    ;(Pa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => mu(e, i)))
})
function Vl(e) {
    return Vc(zr, e)
}
const Wn = d('ZodDate', (e, t) => {
    ;(Za.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => gu(e, o)),
        (e.min = (o, n) => e.check(Z(o, n))),
        (e.max = (o, n) => e.check(L(o, n))))
    const i = e._zod.bag
    ;((e.minDate = i.minimum ? new Date(i.minimum) : null),
        (e.maxDate = i.maximum ? new Date(i.maximum) : null))
})
function Gl(e) {
    return Gc(Wn, e)
}
const Ir = d('ZodArray', (e, t) => {
    ;(Ta.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Uu(e, i, o, n)),
        (e.element = t.element),
        (e.min = (i, o) => e.check(re(i, o))),
        (e.nonempty = (i) => e.check(re(1, i))),
        (e.max = (i, o) => e.check(Ee(i, o))),
        (e.length = (i, o) => e.check(Ae(i, o))),
        (e.unwrap = () => e.element))
})
function Ke(e, t) {
    return qc(Ir, e, t)
}
function Bl(e) {
    const t = e._zod.def.shape
    return Xn(Object.keys(t))
}
const Ve = d('ZodObject', (e, t) => {
    ;(Fa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => ju(e, i, o, n)),
        k(e, 'shape', () => t.shape),
        (e.keyof = () => Xn(Object.keys(e._zod.def.shape))),
        (e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: ie() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: ie() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: Bn() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (i) => Ei(e, i)),
        (e.safeExtend = (i) => Ai(e, i)),
        (e.merge = (i) => Ri(e, i)),
        (e.pick = (i) => Zi(e, i)),
        (e.omit = (i) => Ti(e, i)),
        (e.partial = (...i) => Fi(Hn, e, i[0])),
        (e.required = (...i) => Li(Qn, e, i[0])))
})
function Wl(e, t) {
    const i = { type: 'object', shape: e ?? {}, ...f(t) }
    return new Ve(i)
}
function ql(e, t) {
    return new Ve({ type: 'object', shape: e, catchall: Bn(), ...f(t) })
}
function Xl(e, t) {
    return new Ve({ type: 'object', shape: e, catchall: ie(), ...f(t) })
}
const Ge = d('ZodUnion', (e, t) => {
    ;(vn.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => ur(e, i, o, n)),
        (e.options = t.options))
})
function qn(e, t) {
    return new Ge({ type: 'union', options: e, ...f(t) })
}
const wr = d('ZodXor', (e, t) => {
    ;(Ge.init(e, t),
        La.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => ur(e, i, o, n)),
        (e.options = t.options))
})
function Yl(e, t) {
    return new wr({ type: 'union', options: e, inclusive: !1, ...f(t) })
}
const xr = d('ZodDiscriminatedUnion', (e, t) => {
    ;(Ge.init(e, t), Ca.init(e, t))
})
function Hl(e, t, i) {
    return new xr({ type: 'union', options: t, discriminator: e, ...f(i) })
}
const Ur = d('ZodIntersection', (e, t) => {
    ;(Ja.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Ou(e, i, o, n)))
})
function jr(e, t) {
    return new Ur({ type: 'intersection', left: e, right: t })
}
const Or = d('ZodTuple', (e, t) => {
    ;(Pt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Du(e, i, o, n)),
        (e.rest = (i) => e.clone({ ...e._zod.def, rest: i })))
})
function Dr(e, t, i) {
    const o = t instanceof b,
        n = o ? i : t,
        r = o ? t : null
    return new Or({ type: 'tuple', items: e, rest: r, ...f(n) })
}
const Be = d('ZodRecord', (e, t) => {
    ;(Ma.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Nu(e, i, o, n)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType))
})
function Nr(e, t, i) {
    return new Be({ type: 'record', keyType: e, valueType: t, ...f(i) })
}
function Ql(e, t, i) {
    const o = J(e)
    return (
        (o._zod.values = void 0),
        new Be({ type: 'record', keyType: o, valueType: t, ...f(i) })
    )
}
function es(e, t, i) {
    return new Be({
        type: 'record',
        keyType: e,
        valueType: t,
        mode: 'loose',
        ...f(i),
    })
}
const Pr = d('ZodMap', (e, t) => {
    ;(Ka.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => wu(e, i)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType),
        (e.min = (...i) => e.check(H(...i))),
        (e.nonempty = (i) => e.check(H(1, i))),
        (e.max = (...i) => e.check(ge(...i))),
        (e.size = (...i) => e.check(Te(...i))))
})
function ns(e, t, i) {
    return new Pr({ type: 'map', keyType: e, valueType: t, ...f(i) })
}
const Zr = d('ZodSet', (e, t) => {
    ;(Va.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => xu(e, i)),
        (e.min = (...i) => e.check(H(...i))),
        (e.nonempty = (i) => e.check(H(1, i))),
        (e.max = (...i) => e.check(ge(...i))),
        (e.size = (...i) => e.check(Te(...i))))
})
function ts(e, t) {
    return new Zr({ type: 'set', valueType: e, ...f(t) })
}
const ve = d('ZodEnum', (e, t) => {
    ;(Ga.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (o, n, r) => hu(e, o, n)),
        (e.enum = t.entries),
        (e.options = Object.values(t.entries)))
    const i = new Set(Object.keys(t.entries))
    ;((e.extract = (o, n) => {
        const r = {}
        for (const a of o)
            if (i.has(a)) r[a] = t.entries[a]
            else throw new Error(`Key ${a} not found in enum`)
        return new ve({ ...t, checks: [], ...f(n), entries: r })
    }),
        (e.exclude = (o, n) => {
            const r = { ...t.entries }
            for (const a of o)
                if (i.has(a)) delete r[a]
                else throw new Error(`Key ${a} not found in enum`)
            return new ve({ ...t, checks: [], ...f(n), entries: r })
        }))
})
function Xn(e, t) {
    const i = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e
    return new ve({ type: 'enum', entries: i, ...f(t) })
}
function rs(e, t) {
    return new ve({ type: 'enum', entries: e, ...f(t) })
}
const Tr = d('ZodLiteral', (e, t) => {
    ;(Ba.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => $u(e, i, o)),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, 'value', {
            get() {
                if (t.values.length > 1)
                    throw new Error(
                        'This schema contains multiple valid literal values. Use `.values` instead.',
                    )
                return t.values[0]
            },
        }))
})
function is(e, t) {
    return new Tr({
        type: 'literal',
        values: Array.isArray(e) ? e : [e],
        ...f(t),
    })
}
const Er = d('ZodFile', (e, t) => {
    ;(Wa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => yu(e, i, o)),
        (e.min = (i, o) => e.check(H(i, o))),
        (e.max = (i, o) => e.check(ge(i, o))),
        (e.mime = (i, o) => e.check(Sn(Array.isArray(i) ? i : [i], o))))
})
function os(e) {
    return Xc(Er, e)
}
const Ar = d('ZodTransform', (e, t) => {
    ;(qa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Iu(e, i)),
        (e._zod.parse = (i, o) => {
            if (o.direction === 'backward') throw new sn(e.constructor.name)
            i.addIssue = (r) => {
                if (typeof r == 'string') i.issues.push(le(r, i.value, t))
                else {
                    const a = r
                    ;(a.fatal && (a.continue = !1),
                        a.code ?? (a.code = 'custom'),
                        a.input ?? (a.input = i.value),
                        a.inst ?? (a.inst = e),
                        i.issues.push(le(a)))
                }
            }
            const n = t.transform(i.value, i)
            return n instanceof Promise
                ? n.then((r) => ((i.value = r), i))
                : ((i.value = n), i)
        }))
})
function Yn(e) {
    return new Ar({ type: 'transform', transform: e })
}
const Hn = d('ZodOptional', (e, t) => {
    ;(Zt.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => lr(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function Se(e) {
    return new Hn({ type: 'optional', innerType: e })
}
const Rr = d('ZodExactOptional', (e, t) => {
    ;(Xa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => lr(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function Fr(e) {
    return new Rr({ type: 'optional', innerType: e })
}
const Lr = d('ZodNullable', (e, t) => {
    ;(Ya.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Pu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function ze(e) {
    return new Lr({ type: 'nullable', innerType: e })
}
function as(e) {
    return Se(ze(e))
}
const Cr = d('ZodDefault', (e, t) => {
    ;(Ha.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Tu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap))
})
function Jr(e, t) {
    return new Cr({
        type: 'default',
        innerType: e,
        get defaultValue() {
            return typeof t == 'function' ? t() : mn(t)
        },
    })
}
const Mr = d('ZodPrefault', (e, t) => {
    ;(Qa.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Eu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function Kr(e, t) {
    return new Mr({
        type: 'prefault',
        innerType: e,
        get defaultValue() {
            return typeof t == 'function' ? t() : mn(t)
        },
    })
}
const Qn = d('ZodNonOptional', (e, t) => {
    ;(ec.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Zu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function Vr(e, t) {
    return new Qn({ type: 'nonoptional', innerType: e, ...f(t) })
}
const Gr = d('ZodSuccess', (e, t) => {
    ;(nc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => ku(e, i, o)),
        (e.unwrap = () => e._zod.def.innerType))
})
function cs(e) {
    return new Gr({ type: 'success', innerType: e })
}
const Br = d('ZodCatch', (e, t) => {
    ;(tc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Au(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap))
})
function Wr(e, t) {
    return new Br({
        type: 'catch',
        innerType: e,
        catchValue: typeof t == 'function' ? t : () => t,
    })
}
const qr = d('ZodNaN', (e, t) => {
    ;(rc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => _u(e, i)))
})
function us(e) {
    return Wc(qr, e)
}
const et = d('ZodPipe', (e, t) => {
    ;(ic.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Ru(e, i, o, n)),
        (e.in = t.in),
        (e.out = t.out))
})
function Ie(e, t) {
    return new et({ type: 'pipe', in: e, out: t })
}
const nt = d('ZodCodec', (e, t) => {
    ;(et.init(e, t), Tt.init(e, t))
})
function ls(e, t, i) {
    return new nt({
        type: 'pipe',
        in: e,
        out: t,
        transform: i.decode,
        reverseTransform: i.encode,
    })
}
const Xr = d('ZodReadonly', (e, t) => {
    ;(oc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Fu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function Yr(e) {
    return new Xr({ type: 'readonly', innerType: e })
}
const Hr = d('ZodTemplateLiteral', (e, t) => {
    ;(ac.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => bu(e, i, o)))
})
function ss(e, t) {
    return new Hr({ type: 'template_literal', parts: e, ...f(t) })
}
const Qr = d('ZodLazy', (e, t) => {
    ;(lc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Cu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.getter()))
})
function ei(e) {
    return new Qr({ type: 'lazy', getter: e })
}
const ni = d('ZodPromise', (e, t) => {
    ;(uc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Lu(e, i, o, n)),
        (e.unwrap = () => e._zod.def.innerType))
})
function ds(e) {
    return new ni({ type: 'promise', innerType: e })
}
const ti = d('ZodFunction', (e, t) => {
    ;(cc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => zu(e, i)))
})
function ln(e) {
    return new ti({
        type: 'function',
        input: Array.isArray(e?.input) ? Dr(e?.input) : (e?.input ?? Ke(ie())),
        output: e?.output ?? ie(),
    })
}
const We = d('ZodCustom', (e, t) => {
    ;(sc.init(e, t),
        y.init(e, t),
        (e._zod.processJSONSchema = (i, o, n) => Su(e, i)))
})
function ms(e) {
    const t = new j({ check: 'custom' })
    return ((t._zod.check = e), t)
}
function fs(e, t) {
    return Yc(We, e ?? (() => !0), t)
}
function ri(e, t = {}) {
    return Hc(We, e, t)
}
function ii(e) {
    return Qc(e)
}
const ps = nu,
    vs = tu
function gs(e, t = {}) {
    const i = new We({
        type: 'custom',
        check: 'custom',
        fn: (o) => o instanceof e,
        abort: !0,
        ...f(t),
    })
    return (
        (i._zod.bag.Class = e),
        (i._zod.check = (o) => {
            o.value instanceof e ||
                o.issues.push({
                    code: 'invalid_type',
                    expected: e.name,
                    input: o.value,
                    inst: i,
                    path: [...(i._zod.def.path ?? [])],
                })
        }),
        i
    )
}
const hs = (...e) => ru({ Codec: nt, Boolean: Je, String: Fe }, ...e)
function $s(e) {
    const t = ei(() => qn([cn(e), vr(), gr(), br(), Ke(t), Nr(cn(), t)]))
    return t
}
function _s(e, t) {
    return Ie(Yn(e), t)
}
const Af = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                ZodAny: yr,
                ZodArray: Ir,
                ZodBase64: Jn,
                ZodBase64URL: Mn,
                ZodBigInt: Me,
                ZodBigIntFormat: Gn,
                ZodBoolean: Je,
                ZodCIDRv4: Ln,
                ZodCIDRv6: Cn,
                ZodCUID: Pn,
                ZodCUID2: Zn,
                ZodCatch: Br,
                ZodCodec: nt,
                ZodCustom: We,
                ZodCustomStringFormat: he,
                ZodDate: Wn,
                ZodDefault: Cr,
                ZodDiscriminatedUnion: xr,
                ZodE164: Kn,
                ZodEmail: On,
                ZodEmoji: Dn,
                ZodEnum: ve,
                ZodExactOptional: Rr,
                ZodFile: Er,
                ZodFunction: ti,
                ZodGUID: ke,
                ZodIPv4: Rn,
                ZodIPv6: Fn,
                ZodIntersection: Ur,
                ZodJWT: Vn,
                ZodKSUID: An,
                ZodLazy: Qr,
                ZodLiteral: Tr,
                ZodMAC: pr,
                ZodMap: Pr,
                ZodNaN: qr,
                ZodNanoID: Nn,
                ZodNever: Sr,
                ZodNonOptional: Qn,
                ZodNull: _r,
                ZodNullable: Lr,
                ZodNumber: Ce,
                ZodNumberFormat: ae,
                ZodObject: Ve,
                ZodOptional: Hn,
                ZodPipe: et,
                ZodPrefault: Mr,
                ZodPromise: ni,
                ZodReadonly: Xr,
                ZodRecord: Be,
                ZodSet: Zr,
                ZodString: Fe,
                ZodStringFormat: U,
                ZodSuccess: Gr,
                ZodSymbol: hr,
                ZodTemplateLiteral: Hr,
                ZodTransform: Ar,
                ZodTuple: Or,
                ZodType: y,
                ZodULID: Tn,
                ZodURL: Le,
                ZodUUID: K,
                ZodUndefined: $r,
                ZodUnion: Ge,
                ZodUnknown: kr,
                ZodVoid: zr,
                ZodXID: En,
                ZodXor: wr,
                _ZodString: jn,
                _default: Jr,
                _function: ln,
                any: Kl,
                array: Ke,
                base64: xl,
                base64url: Ul,
                bigint: Fl,
                boolean: gr,
                catch: Wr,
                check: ms,
                cidrv4: Il,
                cidrv6: wl,
                codec: ls,
                cuid: hl,
                cuid2: $l,
                custom: fs,
                date: Gl,
                describe: ps,
                discriminatedUnion: Hl,
                e164: jl,
                email: cl,
                emoji: vl,
                enum: Xn,
                exactOptional: Fr,
                file: os,
                float32: Tl,
                float64: El,
                function: ln,
                guid: ul,
                hash: Zl,
                hex: Pl,
                hostname: Nl,
                httpUrl: pl,
                instanceof: gs,
                int: un,
                int32: Al,
                int64: Ll,
                intersection: jr,
                ipv4: kl,
                ipv6: zl,
                json: $s,
                jwt: Ol,
                keyof: Bl,
                ksuid: yl,
                lazy: ei,
                literal: is,
                looseObject: Xl,
                looseRecord: es,
                mac: Sl,
                map: ns,
                meta: vs,
                nan: us,
                nanoid: gl,
                nativeEnum: rs,
                never: Bn,
                nonoptional: Vr,
                null: br,
                nullable: ze,
                nullish: as,
                number: vr,
                object: Wl,
                optional: Se,
                partialRecord: Ql,
                pipe: Ie,
                prefault: Kr,
                preprocess: _s,
                promise: ds,
                readonly: Yr,
                record: Nr,
                refine: ri,
                set: ts,
                strictObject: ql,
                string: cn,
                stringFormat: Dl,
                stringbool: hs,
                success: cs,
                superRefine: ii,
                symbol: Jl,
                templateLiteral: ss,
                transform: Yn,
                tuple: Dr,
                uint32: Rl,
                uint64: Cl,
                ulid: _l,
                undefined: Ml,
                union: qn,
                unknown: ie,
                url: fl,
                uuid: ll,
                uuidv4: sl,
                uuidv6: dl,
                uuidv7: ml,
                void: Vl,
                xid: bl,
                xor: Yl,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Rf = {
        invalid_type: 'invalid_type',
        too_big: 'too_big',
        too_small: 'too_small',
        invalid_format: 'invalid_format',
        not_multiple_of: 'not_multiple_of',
        unrecognized_keys: 'unrecognized_keys',
        invalid_union: 'invalid_union',
        invalid_key: 'invalid_key',
        invalid_element: 'invalid_element',
        invalid_value: 'invalid_value',
        custom: 'custom',
    }
function Ff(e) {
    N({ customError: e })
}
function Lf() {
    return N().customError
}
var lt
lt || (lt = {})
const h = { ...Af, ...Tf, iso: Bu },
    Cf = new Set([
        '$schema',
        '$ref',
        '$defs',
        'definitions',
        '$id',
        'id',
        '$comment',
        '$anchor',
        '$vocabulary',
        '$dynamicRef',
        '$dynamicAnchor',
        'type',
        'enum',
        'const',
        'anyOf',
        'oneOf',
        'allOf',
        'not',
        'properties',
        'required',
        'additionalProperties',
        'patternProperties',
        'propertyNames',
        'minProperties',
        'maxProperties',
        'items',
        'prefixItems',
        'additionalItems',
        'minItems',
        'maxItems',
        'uniqueItems',
        'contains',
        'minContains',
        'maxContains',
        'minLength',
        'maxLength',
        'pattern',
        'format',
        'minimum',
        'maximum',
        'exclusiveMinimum',
        'exclusiveMaximum',
        'multipleOf',
        'description',
        'default',
        'contentEncoding',
        'contentMediaType',
        'contentSchema',
        'unevaluatedItems',
        'unevaluatedProperties',
        'if',
        'then',
        'else',
        'dependentSchemas',
        'dependentRequired',
        'nullable',
        'readOnly',
    ])
function Jf(e, t) {
    const i = e.$schema
    return i === 'https://json-schema.org/draft/2020-12/schema'
        ? 'draft-2020-12'
        : i === 'http://json-schema.org/draft-07/schema#'
          ? 'draft-7'
          : i === 'http://json-schema.org/draft-04/schema#'
            ? 'draft-4'
            : (t ?? 'draft-2020-12')
}
function Mf(e, t) {
    if (!e.startsWith('#'))
        throw new Error(
            'External $ref is not supported, only local refs (#/...) are allowed',
        )
    const i = e.slice(1).split('/').filter(Boolean)
    if (i.length === 0) return t.rootSchema
    const o = t.version === 'draft-2020-12' ? '$defs' : 'definitions'
    if (i[0] === o) {
        const n = i[1]
        if (!n || !t.defs[n]) throw new Error(`Reference not found: ${e}`)
        return t.defs[n]
    }
    throw new Error(`Reference not found: ${e}`)
}
function bs(e, t) {
    if (e.not !== void 0) {
        if (typeof e.not == 'object' && Object.keys(e.not).length === 0)
            return h.never()
        throw new Error(
            'not is not supported in Zod (except { not: {} } for never)',
        )
    }
    if (e.unevaluatedItems !== void 0)
        throw new Error('unevaluatedItems is not supported')
    if (e.unevaluatedProperties !== void 0)
        throw new Error('unevaluatedProperties is not supported')
    if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0)
        throw new Error('Conditional schemas (if/then/else) are not supported')
    if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0)
        throw new Error(
            'dependentSchemas and dependentRequired are not supported',
        )
    if (e.$ref) {
        const n = e.$ref
        if (t.refs.has(n)) return t.refs.get(n)
        if (t.processing.has(n))
            return h.lazy(() => {
                if (!t.refs.has(n))
                    throw new Error(`Circular reference not resolved: ${n}`)
                return t.refs.get(n)
            })
        t.processing.add(n)
        const r = Mf(n, t),
            a = D(r, t)
        return (t.refs.set(n, a), t.processing.delete(n), a)
    }
    if (e.enum !== void 0) {
        const n = e.enum
        if (
            t.version === 'openapi-3.0' &&
            e.nullable === !0 &&
            n.length === 1 &&
            n[0] === null
        )
            return h.null()
        if (n.length === 0) return h.never()
        if (n.length === 1) return h.literal(n[0])
        if (n.every((a) => typeof a == 'string')) return h.enum(n)
        const r = n.map((a) => h.literal(a))
        return r.length < 2 ? r[0] : h.union([r[0], r[1], ...r.slice(2)])
    }
    if (e.const !== void 0) return h.literal(e.const)
    const i = e.type
    if (Array.isArray(i)) {
        const n = i.map((r) => {
            const a = { ...e, type: r }
            return bs(a, t)
        })
        return n.length === 0 ? h.never() : n.length === 1 ? n[0] : h.union(n)
    }
    if (!i) return h.any()
    let o
    switch (i) {
        case 'string': {
            let n = h.string()
            if (e.format) {
                const r = e.format
                r === 'email'
                    ? (n = n.check(h.email()))
                    : r === 'uri' || r === 'uri-reference'
                      ? (n = n.check(h.url()))
                      : r === 'uuid' || r === 'guid'
                        ? (n = n.check(h.uuid()))
                        : r === 'date-time'
                          ? (n = n.check(h.iso.datetime()))
                          : r === 'date'
                            ? (n = n.check(h.iso.date()))
                            : r === 'time'
                              ? (n = n.check(h.iso.time()))
                              : r === 'duration'
                                ? (n = n.check(h.iso.duration()))
                                : r === 'ipv4'
                                  ? (n = n.check(h.ipv4()))
                                  : r === 'ipv6'
                                    ? (n = n.check(h.ipv6()))
                                    : r === 'mac'
                                      ? (n = n.check(h.mac()))
                                      : r === 'cidr'
                                        ? (n = n.check(h.cidrv4()))
                                        : r === 'cidr-v6'
                                          ? (n = n.check(h.cidrv6()))
                                          : r === 'base64'
                                            ? (n = n.check(h.base64()))
                                            : r === 'base64url'
                                              ? (n = n.check(h.base64url()))
                                              : r === 'e164'
                                                ? (n = n.check(h.e164()))
                                                : r === 'jwt'
                                                  ? (n = n.check(h.jwt()))
                                                  : r === 'emoji'
                                                    ? (n = n.check(h.emoji()))
                                                    : r === 'nanoid'
                                                      ? (n = n.check(
                                                            h.nanoid(),
                                                        ))
                                                      : r === 'cuid'
                                                        ? (n = n.check(
                                                              h.cuid(),
                                                          ))
                                                        : r === 'cuid2'
                                                          ? (n = n.check(
                                                                h.cuid2(),
                                                            ))
                                                          : r === 'ulid'
                                                            ? (n = n.check(
                                                                  h.ulid(),
                                                              ))
                                                            : r === 'xid'
                                                              ? (n = n.check(
                                                                    h.xid(),
                                                                ))
                                                              : r === 'ksuid' &&
                                                                (n = n.check(
                                                                    h.ksuid(),
                                                                ))
            }
            ;(typeof e.minLength == 'number' && (n = n.min(e.minLength)),
                typeof e.maxLength == 'number' && (n = n.max(e.maxLength)),
                e.pattern && (n = n.regex(new RegExp(e.pattern))),
                (o = n))
            break
        }
        case 'number':
        case 'integer': {
            let n = i === 'integer' ? h.number().int() : h.number()
            ;(typeof e.minimum == 'number' && (n = n.min(e.minimum)),
                typeof e.maximum == 'number' && (n = n.max(e.maximum)),
                typeof e.exclusiveMinimum == 'number'
                    ? (n = n.gt(e.exclusiveMinimum))
                    : e.exclusiveMinimum === !0 &&
                      typeof e.minimum == 'number' &&
                      (n = n.gt(e.minimum)),
                typeof e.exclusiveMaximum == 'number'
                    ? (n = n.lt(e.exclusiveMaximum))
                    : e.exclusiveMaximum === !0 &&
                      typeof e.maximum == 'number' &&
                      (n = n.lt(e.maximum)),
                typeof e.multipleOf == 'number' &&
                    (n = n.multipleOf(e.multipleOf)),
                (o = n))
            break
        }
        case 'boolean': {
            o = h.boolean()
            break
        }
        case 'null': {
            o = h.null()
            break
        }
        case 'object': {
            const n = {},
                r = e.properties || {},
                a = new Set(e.required || [])
            for (const [l, u] of Object.entries(r)) {
                const s = D(u, t)
                n[l] = a.has(l) ? s : s.optional()
            }
            if (e.propertyNames) {
                const l = D(e.propertyNames, t),
                    u =
                        e.additionalProperties &&
                        typeof e.additionalProperties == 'object'
                            ? D(e.additionalProperties, t)
                            : h.any()
                if (Object.keys(n).length === 0) {
                    o = h.record(l, u)
                    break
                }
                const s = h.object(n).passthrough(),
                    m = h.looseRecord(l, u)
                o = h.intersection(s, m)
                break
            }
            if (e.patternProperties) {
                const l = e.patternProperties,
                    u = Object.keys(l),
                    s = []
                for (const v of u) {
                    const g = D(l[v], t),
                        S = h.string().regex(new RegExp(v))
                    s.push(h.looseRecord(S, g))
                }
                const m = []
                if (
                    (Object.keys(n).length > 0 &&
                        m.push(h.object(n).passthrough()),
                    m.push(...s),
                    m.length === 0)
                )
                    o = h.object({}).passthrough()
                else if (m.length === 1) o = m[0]
                else {
                    let v = h.intersection(m[0], m[1])
                    for (let g = 2; g < m.length; g++)
                        v = h.intersection(v, m[g])
                    o = v
                }
                break
            }
            const c = h.object(n)
            e.additionalProperties === !1
                ? (o = c.strict())
                : typeof e.additionalProperties == 'object'
                  ? (o = c.catchall(D(e.additionalProperties, t)))
                  : (o = c.passthrough())
            break
        }
        case 'array': {
            const n = e.prefixItems,
                r = e.items
            if (n && Array.isArray(n)) {
                const a = n.map((l) => D(l, t)),
                    c =
                        r && typeof r == 'object' && !Array.isArray(r)
                            ? D(r, t)
                            : void 0
                ;(c ? (o = h.tuple(a).rest(c)) : (o = h.tuple(a)),
                    typeof e.minItems == 'number' &&
                        (o = o.check(h.minLength(e.minItems))),
                    typeof e.maxItems == 'number' &&
                        (o = o.check(h.maxLength(e.maxItems))))
            } else if (Array.isArray(r)) {
                const a = r.map((l) => D(l, t)),
                    c =
                        e.additionalItems &&
                        typeof e.additionalItems == 'object'
                            ? D(e.additionalItems, t)
                            : void 0
                ;(c ? (o = h.tuple(a).rest(c)) : (o = h.tuple(a)),
                    typeof e.minItems == 'number' &&
                        (o = o.check(h.minLength(e.minItems))),
                    typeof e.maxItems == 'number' &&
                        (o = o.check(h.maxLength(e.maxItems))))
            } else if (r !== void 0) {
                const a = D(r, t)
                let c = h.array(a)
                ;(typeof e.minItems == 'number' && (c = c.min(e.minItems)),
                    typeof e.maxItems == 'number' && (c = c.max(e.maxItems)),
                    (o = c))
            } else o = h.array(h.any())
            break
        }
        default:
            throw new Error(`Unsupported type: ${i}`)
    }
    return (
        e.description && (o = o.describe(e.description)),
        e.default !== void 0 && (o = o.default(e.default)),
        o
    )
}
function D(e, t) {
    if (typeof e == 'boolean') return e ? h.any() : h.never()
    let i = bs(e, t)
    const o = e.type || e.enum !== void 0 || e.const !== void 0
    if (e.anyOf && Array.isArray(e.anyOf)) {
        const c = e.anyOf.map((u) => D(u, t)),
            l = h.union(c)
        i = o ? h.intersection(i, l) : l
    }
    if (e.oneOf && Array.isArray(e.oneOf)) {
        const c = e.oneOf.map((u) => D(u, t)),
            l = h.xor(c)
        i = o ? h.intersection(i, l) : l
    }
    if (e.allOf && Array.isArray(e.allOf))
        if (e.allOf.length === 0) i = o ? i : h.any()
        else {
            let c = o ? i : D(e.allOf[0], t)
            const l = o ? 0 : 1
            for (let u = l; u < e.allOf.length; u++)
                c = h.intersection(c, D(e.allOf[u], t))
            i = c
        }
    ;(e.nullable === !0 && t.version === 'openapi-3.0' && (i = h.nullable(i)),
        e.readOnly === !0 && (i = h.readonly(i)))
    const n = {},
        r = [
            '$id',
            'id',
            '$comment',
            '$anchor',
            '$vocabulary',
            '$dynamicRef',
            '$dynamicAnchor',
        ]
    for (const c of r) c in e && (n[c] = e[c])
    const a = ['contentEncoding', 'contentMediaType', 'contentSchema']
    for (const c of a) c in e && (n[c] = e[c])
    for (const c of Object.keys(e)) Cf.has(c) || (n[c] = e[c])
    return (Object.keys(n).length > 0 && t.registry.add(i, n), i)
}
function Kf(e, t) {
    if (typeof e == 'boolean') return e ? h.any() : h.never()
    const i = Jf(e, t?.defaultTarget),
        o = e.$defs || e.definitions || {},
        n = {
            version: i,
            defs: o,
            refs: new Map(),
            processing: new Set(),
            rootSchema: e,
            registry: t?.registry ?? F,
        }
    return D(e, n)
}
function Vf(e) {
    return _c(Fe, e)
}
function Gf(e) {
    return xc(Ce, e)
}
function Bf(e) {
    return Zc(Je, e)
}
function Wf(e) {
    return Ec(Me, e)
}
function qf(e) {
    return Bc(Wn, e)
}
const Xf = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            bigint: Wf,
            boolean: Bf,
            date: qf,
            number: Gf,
            string: Vf,
        },
        Symbol.toStringTag,
        { value: 'Module' },
    ),
)
N(dc())
const w = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                $brand: wi,
                $input: gc,
                $output: vc,
                NEVER: Ii,
                TimePrecision: yc,
                ZodAny: yr,
                ZodArray: Ir,
                ZodBase64: Jn,
                ZodBase64URL: Mn,
                ZodBigInt: Me,
                ZodBigIntFormat: Gn,
                ZodBoolean: Je,
                ZodCIDRv4: Ln,
                ZodCIDRv6: Cn,
                ZodCUID: Pn,
                ZodCUID2: Zn,
                ZodCatch: Br,
                ZodCodec: nt,
                ZodCustom: We,
                ZodCustomStringFormat: he,
                ZodDate: Wn,
                ZodDefault: Cr,
                ZodDiscriminatedUnion: xr,
                ZodE164: Kn,
                ZodEmail: On,
                ZodEmoji: Dn,
                ZodEnum: ve,
                ZodError: Ef,
                ZodExactOptional: Rr,
                ZodFile: Er,
                get ZodFirstPartyTypeKind() {
                    return lt
                },
                ZodFunction: ti,
                ZodGUID: ke,
                ZodIPv4: Rn,
                ZodIPv6: Fn,
                ZodISODate: dr,
                ZodISODateTime: sr,
                ZodISODuration: fr,
                ZodISOTime: mr,
                ZodIntersection: Ur,
                ZodIssueCode: Rf,
                ZodJWT: Vn,
                ZodKSUID: An,
                ZodLazy: Qr,
                ZodLiteral: Tr,
                ZodMAC: pr,
                ZodMap: Pr,
                ZodNaN: qr,
                ZodNanoID: Nn,
                ZodNever: Sr,
                ZodNonOptional: Qn,
                ZodNull: _r,
                ZodNullable: Lr,
                ZodNumber: Ce,
                ZodNumberFormat: ae,
                ZodObject: Ve,
                ZodOptional: Hn,
                ZodPipe: et,
                ZodPrefault: Mr,
                ZodPromise: ni,
                ZodReadonly: Xr,
                ZodRealError: A,
                ZodRecord: Be,
                ZodSet: Zr,
                ZodString: Fe,
                ZodStringFormat: U,
                ZodSuccess: Gr,
                ZodSymbol: hr,
                ZodTemplateLiteral: Hr,
                ZodTransform: Ar,
                ZodTuple: Or,
                ZodType: y,
                ZodULID: Tn,
                ZodURL: Le,
                ZodUUID: K,
                ZodUndefined: $r,
                ZodUnion: Ge,
                ZodUnknown: kr,
                ZodVoid: zr,
                ZodXID: En,
                ZodXor: wr,
                _ZodString: jn,
                _default: Jr,
                _function: ln,
                any: Kl,
                array: Ke,
                base64: xl,
                base64url: Ul,
                bigint: Fl,
                boolean: gr,
                catch: Wr,
                check: ms,
                cidrv4: Il,
                cidrv6: wl,
                clone: J,
                codec: ls,
                coerce: Xf,
                config: N,
                core: Zf,
                cuid: hl,
                cuid2: $l,
                custom: fs,
                date: Gl,
                decode: el,
                decodeAsync: tl,
                describe: ps,
                discriminatedUnion: Hl,
                e164: jl,
                email: cl,
                emoji: vl,
                encode: Qu,
                encodeAsync: nl,
                endsWith: kn,
                enum: Xn,
                exactOptional: Fr,
                file: os,
                flattenError: pt,
                float32: Tl,
                float64: El,
                formatError: vt,
                fromJSONSchema: Kf,
                function: ln,
                getErrorMap: Lf,
                globalRegistry: F,
                gt: Y,
                gte: Z,
                guid: ul,
                hash: Zl,
                hex: Pl,
                hostname: Nl,
                httpUrl: pl,
                includes: bn,
                instanceof: gs,
                int: un,
                int32: Al,
                int64: Ll,
                intersection: jr,
                ipv4: kl,
                ipv6: zl,
                iso: Bu,
                json: $s,
                jwt: Ol,
                keyof: Bl,
                ksuid: yl,
                lazy: ei,
                length: Ae,
                literal: is,
                locales: pc,
                looseObject: Xl,
                looseRecord: es,
                lowercase: $n,
                lt: X,
                lte: L,
                mac: Sl,
                map: ns,
                maxLength: Ee,
                maxSize: ge,
                meta: vs,
                mime: Sn,
                minLength: re,
                minSize: H,
                multipleOf: de,
                nan: us,
                nanoid: gl,
                nativeEnum: rs,
                negative: ir,
                never: Bn,
                nonnegative: ar,
                nonoptional: Vr,
                nonpositive: or,
                normalize: zn,
                null: br,
                nullable: ze,
                nullish: as,
                number: vr,
                object: Wl,
                optional: Se,
                overwrite: W,
                parse: qu,
                parseAsync: Xu,
                partialRecord: Ql,
                pipe: Ie,
                positive: rr,
                prefault: Kr,
                preprocess: _s,
                prettifyError: Bi,
                promise: ds,
                property: cr,
                readonly: Yr,
                record: Nr,
                refine: ri,
                regex: hn,
                regexes: wt,
                registry: Et,
                safeDecode: il,
                safeDecodeAsync: al,
                safeEncode: rl,
                safeEncodeAsync: ol,
                safeParse: Yu,
                safeParseAsync: Hu,
                set: ts,
                setErrorMap: Ff,
                size: Te,
                slugify: Un,
                startsWith: yn,
                strictObject: ql,
                string: cn,
                stringFormat: Dl,
                stringbool: hs,
                success: cs,
                superRefine: ii,
                symbol: Jl,
                templateLiteral: ss,
                toJSONSchema: Ju,
                toLowerCase: wn,
                toUpperCase: xn,
                transform: Yn,
                treeifyError: Vi,
                trim: In,
                tuple: Dr,
                uint32: Rl,
                uint64: Cl,
                ulid: _l,
                undefined: Ml,
                union: qn,
                unknown: ie,
                uppercase: _n,
                url: fl,
                util: Mi,
                uuid: ll,
                uuidv4: sl,
                uuidv6: dl,
                uuidv7: ml,
                void: Vl,
                xid: bl,
                xor: Yl,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Yf = w.array(
        w
            .object({
                id: w.string(),
                name: w.string(),
                alternate_names: w.array(w.string()),
                species: w.string(),
                gender: w.enum(['male', 'female', '']),
                house: w.string(),
                dateOfBirth: w.string().nullable(),
                yearOfBirth: w.number().nullable(),
                wizard: w.boolean(),
                ancestry: w.string(),
                eyeColour: w.string(),
                hairColour: w.string(),
                wand: w.object({
                    wood: w.string(),
                    core: w.string(),
                    length: w.number().nullable(),
                }),
                patronus: w.string(),
                hogwartsStudent: w.boolean(),
                hogwartsStaff: w.boolean(),
                actor: w.string(),
                alternate_actors: w.array(w.string()),
                alive: w.boolean(),
                image: w.string(),
            })
            .strict(),
    )
function en(e) {
    return e === null
}
function Hf(e) {
    return e === void 0
}
const Qf = { OPTION_SOME: 'some', OPTION_NONE: 'none' },
    tt = (function () {
        const { OPTION_SOME: e, OPTION_NONE: t } = Qf,
            i = (r) =>
                Object.freeze({ kind: e, isSome: !0, isNone: !1, value: r }),
            o = () => Object.freeze({ kind: t, isSome: !1, isNone: !0 })
        return Object.freeze({
            createSome: i,
            createNone: o,
            optionConversion: (r) => (en(r) || Hf(r) ? o() : i(r)),
        })
    })()
function ep(e) {
    const { optionConversion: t } = tt
    return t(e)
}
const np = { apiKey: ep('https://hp-api.onrender.com/api/characters') },
    tp = { RESULT_OK: 'ok', RESULT_NG: 'ng' },
    rp = Symbol('UNIT_SYMBOL'),
    oi = (function () {
        const { RESULT_NG: e, RESULT_OK: t } = tp,
            i = Object.freeze({ _unit: rp }),
            o = async ({ fn: u, err: s }) => {
                try {
                    const m = await u()
                    return c(m)
                } catch {
                    return l(s)
                }
            },
            n = async ({ fn: u, err: s }) => {
                try {
                    return (await u(), c(i))
                } catch {
                    return l(s)
                }
            },
            r = ({ fn: u, err: s }) => {
                try {
                    const m = u()
                    return c(m)
                } catch {
                    return l(s)
                }
            },
            a = ({ fn: u, err: s }) => {
                try {
                    return (u(), c(i))
                } catch {
                    return l(s)
                }
            },
            c = (u) =>
                Object.freeze({ kind: t, isOk: !0, isErr: !1, value: u }),
            l = (u) => Object.freeze({ kind: e, isOk: !1, isErr: !0, err: u })
        return Object.freeze({
            UNIT: i,
            checkResultReturn: r,
            checkResultVoid: a,
            checkPromiseReturn: o,
            checkPromiseVoid: n,
            createOk: c,
            createNg: l,
        })
    })()
function ip(e) {
    const { createOk: t } = oi,
        { createNone: i, createSome: o } = tt,
        n = e
            .filter((r) => r.image !== '')
            .map((r) => {
                const {
                    alternate_names: a,
                    alternate_actors: c,
                    dateOfBirth: l,
                    yearOfBirth: u,
                    wand: s,
                    ...m
                } = r
                return {
                    ...m,
                    alternateNames: a,
                    alternateActors: c,
                    dateOfBirth: en(l) ? i() : o(l),
                    yearOfBirth: en(u) ? i() : o(u),
                    wand: {
                        wood: s.wood,
                        core: s.core,
                        length: en(s.length) ? i() : o(s.length),
                    },
                }
            })
    return t(o(n))
}
const ai = (function () {
        return {
            httpErrorStatusResponse: {
                notFound: 404,
                internalServerError: 500,
                forbidden: 403,
                badRequest: 400,
            },
            httpCustomStatusScheme: {
                returnNotFoundAPIUrl: 4041,
                returnNoPermission: 4031,
                returnBadRequest: 4001,
                returnInternalServerError: 5001,
            },
            httpErrorMessage: {
                returnNotFoundAPIUrl: 'APIのURLが見つかりません',
                returnNoPermission: '権限がありません',
                returnBadRequest: '不正なリクエストです',
                returnInternalServerError: 'サーバーエラーです',
            },
        }
    })(),
    op = (function () {
        const e = ai,
            t = ({ status: a, message: c }) => ({
                type: 'httpError',
                status: a,
                message: c,
            }),
            i = (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnNotFoundAPIUrl,
                    message: e.httpErrorMessage.returnNotFoundAPIUrl,
                })
            })(),
            o = (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnNoPermission,
                    message: e.httpErrorMessage.returnNoPermission,
                })
            })(),
            n = (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnBadRequest,
                    message: e.httpErrorMessage.returnBadRequest,
                })
            })()
        return {
            returnInternalServerError: (function () {
                return t({
                    status: e.httpCustomStatusScheme.returnInternalServerError,
                    message: e.httpErrorMessage.returnInternalServerError,
                })
            })(),
            returnNotFoundAPIUrl: i,
            returnNoPermission: o,
            returnBadRequest: n,
        }
    })(),
    ap = (function () {
        const {
                httpCustomStatusScheme: e,
                httpErrorStatusResponse: t,
                httpErrorMessage: i,
            } = ai,
            o = {
                ...e,
                returnNotSetAPIUrl: 4040,
                returnSchemeError: 5e3,
                returnParseError: 8e3,
                returnFetchFunctionError: 9e3,
                returnUnknownError: 9999,
            },
            n = {
                ...i,
                returnNotSetAPIUrl: 'APIのURLが設定されていません',
                returnSchemeError: 'スキームエラーが発生しました',
                returnParseError: 'データのパースに失敗しました',
                returnFetchFunctionError: 'フェッチ関数でエラーが発生しました',
                returnUnknownError: '不明なエラーが発生しました',
            }
        return {
            httpErrorStatusResponse: t,
            fetcherErrorStatusScheme: o,
            fetchErrorMessage: n,
        }
    })(),
    cp = (function () {
        const {
                returnBadRequest: e,
                returnNoPermission: t,
                returnNotFoundAPIUrl: i,
                returnInternalServerError: o,
            } = op,
            {
                fetchErrorMessage: n,
                fetcherErrorStatusScheme: r,
                httpErrorStatusResponse: a,
            } = ap,
            c = ({ status: g, errorMessage: S }) => ({
                type: 'fetcherError',
                status: g,
                message: S,
            }),
            l = (function () {
                return c({
                    status: r.returnNotSetAPIUrl,
                    errorMessage: n.returnNotSetAPIUrl,
                })
            })(),
            u = (function () {
                return c({
                    status: r.returnSchemeError,
                    errorMessage: n.returnSchemeError,
                })
            })(),
            s = (function () {
                return c({
                    status: r.returnParseError,
                    errorMessage: n.returnParseError,
                })
            })(),
            m = (function () {
                return c({
                    status: r.returnFetchFunctionError,
                    errorMessage: n.returnFetchFunctionError,
                })
            })(),
            v = (function () {
                return c({
                    status: r.returnUnknownError,
                    errorMessage: n.returnUnknownError,
                })
            })()
        return {
            httpErrorStatusResponse: a,
            returnNoPermission: t,
            returnNotFoundAPIUrl: i,
            returnBadRequest: e,
            returnUnknownError: v,
            returnNotSetApiUrl: l,
            returnSchemeError: u,
            returnParseError: s,
            returnFetchFunctionError: m,
            returnInternalServerError: o,
        }
    })()
async function up({ url: e, scheme: t, cache: i }) {
    const {
            notFound: o,
            forbidden: n,
            badRequest: r,
            internalServerError: a,
        } = ai.httpErrorStatusResponse,
        {
            returnNotSetApiUrl: c,
            returnNotFoundAPIUrl: l,
            returnNoPermission: u,
            returnBadRequest: s,
            returnSchemeError: m,
            returnUnknownError: v,
            returnFetchFunctionError: g,
            returnInternalServerError: S,
        } = cp,
        { createNone: z, createSome: q } = tt,
        { createNg: G, createOk: qe, checkPromiseReturn: R } = oi
    if (e.isNone) return G(c)
    const O = await R({ fn: () => fetch(e.value, { cache: i }), err: g })
    if (O.isErr) return O
    if (!O.value.ok)
        switch (O.value.status) {
            case o:
                return G(l)
            case n:
                return G(u)
            case r:
                return G(s)
            case a:
                return G(S)
            default:
                return G(v)
        }
    const T = await O.value.json(),
        rt = t.safeParse(T)
    if (rt.error !== void 0) return G(m)
    const $e = rt.data
    return $e == null ? qe(z()) : qe(q($e))
}
async function lp({ url: e, scheme: t, cache: i, parse: o }) {
    const { createOk: n } = oi,
        { createNone: r } = tt,
        a = await up({ url: e, scheme: t, cache: i })
    return a.isErr ? a : a.value.isNone ? n(r()) : o(a.value.value)
}
async function sp(e) {
    return await lp({ url: np.apiKey, scheme: Yf, cache: e, parse: ip })
}
function dp({ characters: e }) {
    return st.jsx(Ss, { characters: e, title: zs.app.clientLoaderPotter.title })
}
function gp({}) {
    return [
        { title: 'client Loader' },
        { name: 'description', content: 'This is the client loader route.' },
    ]
}
async function hp({}) {
    return await sp()
}
const $p = ys(function () {
        return st.jsx('div', { children: 'Loading...' })
    }),
    _p = ks(function ({ loaderData: t }) {
        const i = t
        return st.jsx(dp, { characters: i })
    })
export { $p as HydrateFallback, hp as clientLoader, _p as default, gp as meta }
