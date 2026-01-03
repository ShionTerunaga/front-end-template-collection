const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            "./DC5aL6ZO.js",
            "./CRBzsCOQ.js",
            "./BZyC13uY.js",
            "./BKbedNoV.js",
            "./force-cache-characters.CF_SnoQV.css",
            "./D-0PrC_6.js",
            "./error-404.CxYlz0gS.css",
            "./wp0t6UUY.js",
            "./error-500.gX2GqQnb.css"
        ])
) => i.map((i) => d[i]);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver((s) => {
        for (const o of s)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const o = {};
        return (
            s.integrity && (o.integrity = s.integrity),
            s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : s.crossOrigin === "anonymous"
                  ? (o.credentials = "omit")
                  : (o.credentials = "same-origin"),
            o
        );
    }
    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o);
    }
})();
function Js(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
}
const fe = {},
    cn = [],
    it = () => {},
    Qi = () => !1,
    Jn = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ys = (e) => e.startsWith("onUpdate:"),
    Ee = Object.assign,
    zs = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    uc = Object.prototype.hasOwnProperty,
    se = (e, t) => uc.call(e, t),
    Y = Array.isArray,
    un = (e) => Yn(e) === "[object Map]",
    Xi = (e) => Yn(e) === "[object Set]",
    fc = (e) => Yn(e) === "[object RegExp]",
    z = (e) => typeof e == "function",
    pe = (e) => typeof e == "string",
    It = (e) => typeof e == "symbol",
    le = (e) => e !== null && typeof e == "object",
    Nr = (e) => (le(e) || z(e)) && z(e.then) && z(e.catch),
    Zi = Object.prototype.toString,
    Yn = (e) => Zi.call(e),
    dc = (e) => Yn(e).slice(8, -1),
    el = (e) => Yn(e) === "[object Object]",
    Mr = (e) =>
        pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    fn = Js(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    ),
    Ir = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    hc = /-\w/g,
    qe = Ir((e) => e.replace(hc, (t) => t.slice(1).toUpperCase())),
    pc = /\B([A-Z])/g,
    Zt = Ir((e) => e.replace(pc, "-$1").toLowerCase()),
    Lr = Ir((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    zr = Ir((e) => (e ? `on${Lr(e)}` : "")),
    Ot = (e, t) => !Object.is(e, t),
    Mn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
    },
    tl = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        });
    },
    gc = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    },
    nl = (e) => {
        const t = pe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    };
let Po;
const Hr = () =>
    Po ||
    (Po =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : typeof global < "u"
                  ? global
                  : {});
function Dr(e) {
    if (Y(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                s = pe(r) ? vc(r) : Dr(r);
            if (s) for (const o in s) t[o] = s[o];
        }
        return t;
    } else if (pe(e) || le(e)) return e;
}
const mc = /;(?![^(]*\))/g,
    yc = /:([^]+)/,
    _c = /\/\*[^]*?\*\//g;
function vc(e) {
    const t = {};
    return (
        e
            .replace(_c, "")
            .split(mc)
            .forEach((n) => {
                if (n) {
                    const r = n.split(yc);
                    r.length > 1 && (t[r[0].trim()] = r[1].trim());
                }
            }),
        t
    );
}
function jr(e) {
    let t = "";
    if (pe(e)) t = e;
    else if (Y(e))
        for (let n = 0; n < e.length; n++) {
            const r = jr(e[n]);
            r && (t += r + " ");
        }
    else if (le(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
}
function bc(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return (t && !pe(t) && (e.class = jr(t)), n && (e.style = Dr(n)), e);
}
const wc =
        "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Ec = Js(wc);
function rl(e) {
    return !!e || e === "";
}
const sl = (e) => !!(e && e.__v_isRef === !0),
    Rc = (e) =>
        pe(e)
            ? e
            : e == null
              ? ""
              : Y(e) || (le(e) && (e.toString === Zi || !z(e.toString)))
                ? sl(e)
                    ? Rc(e.value)
                    : JSON.stringify(e, ol, 2)
                : String(e),
    ol = (e, t) =>
        sl(t)
            ? ol(e, t.value)
            : un(t)
              ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                        (n, [r, s], o) => ((n[Qr(r, o) + " =>"] = s), n),
                        {}
                    )
                }
              : Xi(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((n) => Qr(n)) }
                : It(t)
                  ? Qr(t)
                  : le(t) && !Y(t) && !el(t)
                    ? String(t)
                    : t,
    Qr = (e, t = "") => {
        var n;
        return It(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
let Se;
class il {
    constructor(t = !1) {
        ((this.detached = t),
            (this._active = !0),
            (this._on = 0),
            (this.effects = []),
            (this.cleanups = []),
            (this._isPaused = !1),
            (this.parent = Se),
            !t &&
                Se &&
                (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1));
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++)
                this.effects[t].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++)
                this.effects[t].resume();
        }
    }
    run(t) {
        if (this._active) {
            const n = Se;
            try {
                return ((Se = this), t());
            } finally {
                Se = n;
            }
        }
    }
    on() {
        ++this._on === 1 && ((this.prevScope = Se), (Se = this));
    }
    off() {
        this._on > 0 &&
            --this._on === 0 &&
            ((Se = this.prevScope), (this.prevScope = void 0));
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (
                this.effects.length = 0, n = 0, r = this.cleanups.length;
                n < r;
                n++
            )
                this.cleanups[n]();
            if (((this.cleanups.length = 0), this.scopes)) {
                for (n = 0, r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s &&
                    s !== this &&
                    ((this.parent.scopes[this.index] = s),
                    (s.index = this.index));
            }
            this.parent = void 0;
        }
    }
}
function Tc(e) {
    return new il(e);
}
function Qs() {
    return Se;
}
function Cc(e, t = !1) {
    Se && Se.cleanups.push(e);
}
let ce;
const Xr = new WeakSet();
class ll {
    constructor(t) {
        ((this.fn = t),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 5),
            (this.next = void 0),
            (this.cleanup = void 0),
            (this.scheduler = void 0),
            Se && Se.active && Se.effects.push(this));
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 &&
            ((this.flags &= -65),
            Xr.has(this) && (Xr.delete(this), this.trigger()));
    }
    notify() {
        (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || cl(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        ((this.flags |= 2), ko(this), ul(this));
        const t = ce,
            n = Qe;
        ((ce = this), (Qe = !0));
        try {
            return this.fn();
        } finally {
            (fl(this), (ce = t), (Qe = n), (this.flags &= -3));
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) eo(t);
            ((this.deps = this.depsTail = void 0),
                ko(this),
                this.onStop && this.onStop(),
                (this.flags &= -2));
        }
    }
    trigger() {
        this.flags & 64
            ? Xr.add(this)
            : this.scheduler
              ? this.scheduler()
              : this.runIfDirty();
    }
    runIfDirty() {
        vs(this) && this.run();
    }
    get dirty() {
        return vs(this);
    }
}
let al = 0,
    In,
    Ln;
function cl(e, t = !1) {
    if (((e.flags |= 8), t)) {
        ((e.next = Ln), (Ln = e));
        return;
    }
    ((e.next = In), (In = e));
}
function Xs() {
    al++;
}
function Zs() {
    if (--al > 0) return;
    if (Ln) {
        let t = Ln;
        for (Ln = void 0; t; ) {
            const n = t.next;
            ((t.next = void 0), (t.flags &= -9), (t = n));
        }
    }
    let e;
    for (; In; ) {
        let t = In;
        for (In = void 0; t; ) {
            const n = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (r) {
                    e || (e = r);
                }
            t = n;
        }
    }
    if (e) throw e;
}
function ul(e) {
    for (let t = e.deps; t; t = t.nextDep)
        ((t.version = -1),
            (t.prevActiveLink = t.dep.activeLink),
            (t.dep.activeLink = t));
}
function fl(e) {
    let t,
        n = e.depsTail,
        r = n;
    for (; r; ) {
        const s = r.prevDep;
        (r.version === -1 ? (r === n && (n = s), eo(r), Ac(r)) : (t = r),
            (r.dep.activeLink = r.prevActiveLink),
            (r.prevActiveLink = void 0),
            (r = s));
    }
    ((e.deps = t), (e.depsTail = n));
}
function vs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (
            t.dep.version !== t.version ||
            (t.dep.computed &&
                (dl(t.dep.computed) || t.dep.version !== t.version))
        )
            return !0;
    return !!e._dirty;
}
function dl(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === Un) ||
        ((e.globalVersion = Un),
        !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !vs(e)))
    )
        return;
    e.flags |= 2;
    const t = e.dep,
        n = ce,
        r = Qe;
    ((ce = e), (Qe = !0));
    try {
        ul(e);
        const s = e.fn(e._value);
        (t.version === 0 || Ot(s, e._value)) &&
            ((e.flags |= 128), (e._value = s), t.version++);
    } catch (s) {
        throw (t.version++, s);
    } finally {
        ((ce = n), (Qe = r), fl(e), (e.flags &= -3));
    }
}
function eo(e, t = !1) {
    const { dep: n, prevSub: r, nextSub: s } = e;
    if (
        (r && ((r.nextSub = s), (e.prevSub = void 0)),
        s && ((s.prevSub = r), (e.nextSub = void 0)),
        n.subs === e && ((n.subs = r), !r && n.computed))
    ) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep) eo(o, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ac(e) {
    const { prevDep: t, nextDep: n } = e;
    (t && ((t.nextDep = n), (e.prevDep = void 0)),
        n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let Qe = !0;
const hl = [];
function mt() {
    (hl.push(Qe), (Qe = !1));
}
function yt() {
    const e = hl.pop();
    Qe = e === void 0 ? !0 : e;
}
function ko(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        const n = ce;
        ce = void 0;
        try {
            t();
        } finally {
            ce = n;
        }
    }
}
let Un = 0;
class Sc {
    constructor(t, n) {
        ((this.sub = t),
            (this.dep = n),
            (this.version = n.version),
            (this.nextDep =
                this.prevDep =
                this.nextSub =
                this.prevSub =
                this.prevActiveLink =
                    void 0));
    }
}
class to {
    constructor(t) {
        ((this.computed = t),
            (this.version = 0),
            (this.activeLink = void 0),
            (this.subs = void 0),
            (this.map = void 0),
            (this.key = void 0),
            (this.sc = 0),
            (this.__v_skip = !0));
    }
    track(t) {
        if (!ce || !Qe || ce === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== ce)
            ((n = this.activeLink = new Sc(ce, this)),
                ce.deps
                    ? ((n.prevDep = ce.depsTail),
                      (ce.depsTail.nextDep = n),
                      (ce.depsTail = n))
                    : (ce.deps = ce.depsTail = n),
                pl(n));
        else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
            const r = n.nextDep;
            ((r.prevDep = n.prevDep),
                n.prevDep && (n.prevDep.nextDep = r),
                (n.prevDep = ce.depsTail),
                (n.nextDep = void 0),
                (ce.depsTail.nextDep = n),
                (ce.depsTail = n),
                ce.deps === n && (ce.deps = r));
        }
        return n;
    }
    trigger(t) {
        (this.version++, Un++, this.notify(t));
    }
    notify(t) {
        Xs();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify();
        } finally {
            Zs();
        }
    }
}
function pl(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) pl(r);
        }
        const n = e.dep.subs;
        (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
    }
}
const pr = new WeakMap(),
    Gt = Symbol(""),
    bs = Symbol(""),
    $n = Symbol("");
function xe(e, t, n) {
    if (Qe && ce) {
        let r = pr.get(e);
        r || pr.set(e, (r = new Map()));
        let s = r.get(n);
        (s || (r.set(n, (s = new to())), (s.map = r), (s.key = n)), s.track());
    }
}
function pt(e, t, n, r, s, o) {
    const i = pr.get(e);
    if (!i) {
        Un++;
        return;
    }
    const l = (c) => {
        c && c.trigger();
    };
    if ((Xs(), t === "clear")) i.forEach(l);
    else {
        const c = Y(e),
            u = c && Mr(n);
        if (c && n === "length") {
            const a = Number(r);
            i.forEach((f, h) => {
                (h === "length" || h === $n || (!It(h) && h >= a)) && l(f);
            });
        } else
            switch (
                ((n !== void 0 || i.has(void 0)) && l(i.get(n)),
                u && l(i.get($n)),
                t)
            ) {
                case "add":
                    c
                        ? u && l(i.get("length"))
                        : (l(i.get(Gt)), un(e) && l(i.get(bs)));
                    break;
                case "delete":
                    c || (l(i.get(Gt)), un(e) && l(i.get(bs)));
                    break;
                case "set":
                    un(e) && l(i.get(Gt));
                    break;
            }
    }
    Zs();
}
function xc(e, t) {
    const n = pr.get(e);
    return n && n.get(t);
}
function rn(e) {
    const t = ne(e);
    return t === e ? t : (xe(t, "iterate", $n), Be(e) ? t : t.map(Xe));
}
function Fr(e) {
    return (xe((e = ne(e)), "iterate", $n), e);
}
function Ct(e, t) {
    return lt(e) ? (Nt(e) ? yn(Xe(t)) : yn(t)) : Xe(t);
}
const Pc = {
    __proto__: null,
    [Symbol.iterator]() {
        return Zr(this, Symbol.iterator, (e) => Ct(this, e));
    },
    concat(...e) {
        return rn(this).concat(...e.map((t) => (Y(t) ? rn(t) : t)));
    },
    entries() {
        return Zr(this, "entries", (e) => ((e[1] = Ct(this, e[1])), e));
    },
    every(e, t) {
        return at(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
        return at(
            this,
            "filter",
            e,
            t,
            (n) => n.map((r) => Ct(this, r)),
            arguments
        );
    },
    find(e, t) {
        return at(this, "find", e, t, (n) => Ct(this, n), arguments);
    },
    findIndex(e, t) {
        return at(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
        return at(this, "findLast", e, t, (n) => Ct(this, n), arguments);
    },
    findLastIndex(e, t) {
        return at(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
        return at(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
        return es(this, "includes", e);
    },
    indexOf(...e) {
        return es(this, "indexOf", e);
    },
    join(e) {
        return rn(this).join(e);
    },
    lastIndexOf(...e) {
        return es(this, "lastIndexOf", e);
    },
    map(e, t) {
        return at(this, "map", e, t, void 0, arguments);
    },
    pop() {
        return Sn(this, "pop");
    },
    push(...e) {
        return Sn(this, "push", e);
    },
    reduce(e, ...t) {
        return Oo(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
        return Oo(this, "reduceRight", e, t);
    },
    shift() {
        return Sn(this, "shift");
    },
    some(e, t) {
        return at(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
        return Sn(this, "splice", e);
    },
    toReversed() {
        return rn(this).toReversed();
    },
    toSorted(e) {
        return rn(this).toSorted(e);
    },
    toSpliced(...e) {
        return rn(this).toSpliced(...e);
    },
    unshift(...e) {
        return Sn(this, "unshift", e);
    },
    values() {
        return Zr(this, "values", (e) => Ct(this, e));
    }
};
function Zr(e, t, n) {
    const r = Fr(e),
        s = r[t]();
    return (
        r !== e &&
            !Be(e) &&
            ((s._next = s.next),
            (s.next = () => {
                const o = s._next();
                return (o.done || (o.value = n(o.value)), o);
            })),
        s
    );
}
const kc = Array.prototype;
function at(e, t, n, r, s, o) {
    const i = Fr(e),
        l = i !== e && !Be(e),
        c = i[t];
    if (c !== kc[t]) {
        const f = c.apply(e, o);
        return l ? Xe(f) : f;
    }
    let u = n;
    i !== e &&
        (l
            ? (u = function (f, h) {
                  return n.call(this, Ct(e, f), h, e);
              })
            : n.length > 2 &&
              (u = function (f, h) {
                  return n.call(this, f, h, e);
              }));
    const a = c.call(i, u, r);
    return l && s ? s(a) : a;
}
function Oo(e, t, n, r) {
    const s = Fr(e);
    let o = n;
    return (
        s !== e &&
            (Be(e)
                ? n.length > 3 &&
                  (o = function (i, l, c) {
                      return n.call(this, i, l, c, e);
                  })
                : (o = function (i, l, c) {
                      return n.call(this, i, Ct(e, l), c, e);
                  })),
        s[t](o, ...r)
    );
}
function es(e, t, n) {
    const r = ne(e);
    xe(r, "iterate", $n);
    const s = r[t](...n);
    return (s === -1 || s === !1) && Br(n[0])
        ? ((n[0] = ne(n[0])), r[t](...n))
        : s;
}
function Sn(e, t, n = []) {
    (mt(), Xs());
    const r = ne(e)[t].apply(e, n);
    return (Zs(), yt(), r);
}
const Oc = Js("__proto__,__v_isRef,__isVue"),
    gl = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== "arguments" && e !== "caller")
            .map((e) => Symbol[e])
            .filter(It)
    );
function Nc(e) {
    It(e) || (e = String(e));
    const t = ne(this);
    return (xe(t, "has", e), t.hasOwnProperty(e));
}
class ml {
    constructor(t = !1, n = !1) {
        ((this._isReadonly = t), (this._isShallow = n));
    }
    get(t, n, r) {
        if (n === "__v_skip") return t.__v_skip;
        const s = this._isReadonly,
            o = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw")
            return r === (s ? (o ? $c : bl) : o ? vl : _l).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
                ? t
                : void 0;
        const i = Y(t);
        if (!s) {
            let c;
            if (i && (c = Pc[n])) return c;
            if (n === "hasOwnProperty") return Nc;
        }
        const l = Reflect.get(t, n, ve(t) ? t : r);
        if ((It(n) ? gl.has(n) : Oc(n)) || (s || xe(t, "get", n), o)) return l;
        if (ve(l)) {
            const c = i && Mr(n) ? l : l.value;
            return s && le(c) ? Es(c) : c;
        }
        return le(l) ? (s ? Es(l) : Lt(l)) : l;
    }
}
class yl extends ml {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, n, r, s) {
        let o = t[n];
        const i = Y(t) && Mr(n);
        if (!this._isShallow) {
            const u = lt(o);
            if (
                (!Be(r) && !lt(r) && ((o = ne(o)), (r = ne(r))),
                !i && ve(o) && !ve(r))
            )
                return (u || (o.value = r), !0);
        }
        const l = i ? Number(n) < t.length : se(t, n),
            c = Reflect.set(t, n, r, ve(t) ? t : s);
        return (
            t === ne(s) &&
                (l ? Ot(r, o) && pt(t, "set", n, r) : pt(t, "add", n, r)),
            c
        );
    }
    deleteProperty(t, n) {
        const r = se(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return (s && r && pt(t, "delete", n, void 0), s);
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return ((!It(n) || !gl.has(n)) && xe(t, "has", n), r);
    }
    ownKeys(t) {
        return (xe(t, "iterate", Y(t) ? "length" : Gt), Reflect.ownKeys(t));
    }
}
class Mc extends ml {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, n) {
        return !0;
    }
    deleteProperty(t, n) {
        return !0;
    }
}
const Ic = new yl(),
    Lc = new Mc(),
    Hc = new yl(!0);
const ws = (e) => e,
    Zn = (e) => Reflect.getPrototypeOf(e);
function Dc(e, t, n) {
    return function (...r) {
        const s = this.__v_raw,
            o = ne(s),
            i = un(o),
            l = e === "entries" || (e === Symbol.iterator && i),
            c = e === "keys" && i,
            u = s[e](...r),
            a = n ? ws : t ? yn : Xe;
        return (
            !t && xe(o, "iterate", c ? bs : Gt),
            {
                next() {
                    const { value: f, done: h } = u.next();
                    return h
                        ? { value: f, done: h }
                        : { value: l ? [a(f[0]), a(f[1])] : a(f), done: h };
                },
                [Symbol.iterator]() {
                    return this;
                }
            }
        );
    };
}
function er(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
}
function jc(e, t) {
    const n = {
        get(s) {
            const o = this.__v_raw,
                i = ne(o),
                l = ne(s);
            e || (Ot(s, l) && xe(i, "get", s), xe(i, "get", l));
            const { has: c } = Zn(i),
                u = t ? ws : e ? yn : Xe;
            if (c.call(i, s)) return u(o.get(s));
            if (c.call(i, l)) return u(o.get(l));
            o !== i && o.get(s);
        },
        get size() {
            const s = this.__v_raw;
            return (!e && xe(ne(s), "iterate", Gt), s.size);
        },
        has(s) {
            const o = this.__v_raw,
                i = ne(o),
                l = ne(s);
            return (
                e || (Ot(s, l) && xe(i, "has", s), xe(i, "has", l)),
                s === l ? o.has(s) : o.has(s) || o.has(l)
            );
        },
        forEach(s, o) {
            const i = this,
                l = i.__v_raw,
                c = ne(l),
                u = t ? ws : e ? yn : Xe;
            return (
                !e && xe(c, "iterate", Gt),
                l.forEach((a, f) => s.call(o, u(a), u(f), i))
            );
        }
    };
    return (
        Ee(
            n,
            e
                ? {
                      add: er("add"),
                      set: er("set"),
                      delete: er("delete"),
                      clear: er("clear")
                  }
                : {
                      add(s) {
                          !t && !Be(s) && !lt(s) && (s = ne(s));
                          const o = ne(this);
                          return (
                              Zn(o).has.call(o, s) ||
                                  (o.add(s), pt(o, "add", s, s)),
                              this
                          );
                      },
                      set(s, o) {
                          !t && !Be(o) && !lt(o) && (o = ne(o));
                          const i = ne(this),
                              { has: l, get: c } = Zn(i);
                          let u = l.call(i, s);
                          u || ((s = ne(s)), (u = l.call(i, s)));
                          const a = c.call(i, s);
                          return (
                              i.set(s, o),
                              u
                                  ? Ot(o, a) && pt(i, "set", s, o)
                                  : pt(i, "add", s, o),
                              this
                          );
                      },
                      delete(s) {
                          const o = ne(this),
                              { has: i, get: l } = Zn(o);
                          let c = i.call(o, s);
                          (c || ((s = ne(s)), (c = i.call(o, s))),
                              l && l.call(o, s));
                          const u = o.delete(s);
                          return (c && pt(o, "delete", s, void 0), u);
                      },
                      clear() {
                          const s = ne(this),
                              o = s.size !== 0,
                              i = s.clear();
                          return (o && pt(s, "clear", void 0, void 0), i);
                      }
                  }
        ),
        ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
            n[s] = Dc(s, e, t);
        }),
        n
    );
}
function no(e, t) {
    const n = jc(e, t);
    return (r, s, o) =>
        s === "__v_isReactive"
            ? !e
            : s === "__v_isReadonly"
              ? e
              : s === "__v_raw"
                ? r
                : Reflect.get(se(n, s) && s in r ? n : r, s, o);
}
const Fc = { get: no(!1, !1) },
    Bc = { get: no(!1, !0) },
    Uc = { get: no(!0, !1) };
const _l = new WeakMap(),
    vl = new WeakMap(),
    bl = new WeakMap(),
    $c = new WeakMap();
function Vc(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function Wc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Vc(dc(e));
}
function Lt(e) {
    return lt(e) ? e : ro(e, !1, Ic, Fc, _l);
}
function ot(e) {
    return ro(e, !1, Hc, Bc, vl);
}
function Es(e) {
    return ro(e, !0, Lc, Uc, bl);
}
function ro(e, t, n, r, s) {
    if (!le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const o = Wc(e);
    if (o === 0) return e;
    const i = s.get(e);
    if (i) return i;
    const l = new Proxy(e, o === 2 ? r : n);
    return (s.set(e, l), l);
}
function Nt(e) {
    return lt(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function lt(e) {
    return !!(e && e.__v_isReadonly);
}
function Be(e) {
    return !!(e && e.__v_isShallow);
}
function Br(e) {
    return e ? !!e.__v_raw : !1;
}
function ne(e) {
    const t = e && e.__v_raw;
    return t ? ne(t) : e;
}
function Kc(e) {
    return (
        !se(e, "__v_skip") && Object.isExtensible(e) && tl(e, "__v_skip", !0),
        e
    );
}
const Xe = (e) => (le(e) ? Lt(e) : e),
    yn = (e) => (le(e) ? Es(e) : e);
function ve(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function gt(e) {
    return wl(e, !1);
}
function _t(e) {
    return wl(e, !0);
}
function wl(e, t) {
    return ve(e) ? e : new Gc(e, t);
}
class Gc {
    constructor(t, n) {
        ((this.dep = new to()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = n ? t : ne(t)),
            (this._value = n ? t : Xe(t)),
            (this.__v_isShallow = n));
    }
    get value() {
        return (this.dep.track(), this._value);
    }
    set value(t) {
        const n = this._rawValue,
            r = this.__v_isShallow || Be(t) || lt(t);
        ((t = r ? t : ne(t)),
            Ot(t, n) &&
                ((this._rawValue = t),
                (this._value = r ? t : Xe(t)),
                this.dep.trigger()));
    }
}
function ue(e) {
    return ve(e) ? e.value : e;
}
function qc(e) {
    return z(e) ? e() : ue(e);
}
const Jc = {
    get: (e, t, n) => (t === "__v_raw" ? e : ue(Reflect.get(e, t, n))),
    set: (e, t, n, r) => {
        const s = e[t];
        return ve(s) && !ve(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
    }
};
function El(e) {
    return Nt(e) ? e : new Proxy(e, Jc);
}
class Yc {
    constructor(t, n, r) {
        ((this._object = t),
            (this._key = n),
            (this._defaultValue = r),
            (this.__v_isRef = !0),
            (this._value = void 0),
            (this._raw = ne(t)));
        let s = !0,
            o = t;
        if (!Y(t) || !Mr(String(n)))
            do s = !Br(o) || Be(o);
            while (s && (o = o.__v_raw));
        this._shallow = s;
    }
    get value() {
        let t = this._object[this._key];
        return (
            this._shallow && (t = ue(t)),
            (this._value = t === void 0 ? this._defaultValue : t)
        );
    }
    set value(t) {
        if (this._shallow && ve(this._raw[this._key])) {
            const n = this._object[this._key];
            if (ve(n)) {
                n.value = t;
                return;
            }
        }
        this._object[this._key] = t;
    }
    get dep() {
        return xc(this._raw, this._key);
    }
}
class zc {
    constructor(t) {
        ((this._getter = t),
            (this.__v_isRef = !0),
            (this.__v_isReadonly = !0),
            (this._value = void 0));
    }
    get value() {
        return (this._value = this._getter());
    }
}
function Qc(e, t, n) {
    return ve(e)
        ? e
        : z(e)
          ? new zc(e)
          : le(e) && arguments.length > 1
            ? Xc(e, t, n)
            : gt(e);
}
function Xc(e, t, n) {
    return new Yc(e, t, n);
}
class Zc {
    constructor(t, n, r) {
        ((this.fn = t),
            (this.setter = n),
            (this._value = void 0),
            (this.dep = new to(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Un - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !n),
            (this.isSSR = r));
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && ce !== this))
            return (cl(this, !0), !0);
    }
    get value() {
        const t = this.dep.track();
        return (dl(this), t && (t.version = this.dep.version), this._value);
    }
    set value(t) {
        this.setter && this.setter(t);
    }
}
function eu(e, t, n = !1) {
    let r, s;
    return (z(e) ? (r = e) : ((r = e.get), (s = e.set)), new Zc(r, s, n));
}
const tr = {},
    gr = new WeakMap();
let $t;
function tu(e, t = !1, n = $t) {
    if (n) {
        let r = gr.get(n);
        (r || gr.set(n, (r = [])), r.push(e));
    }
}
function nu(e, t, n = fe) {
    const {
            immediate: r,
            deep: s,
            once: o,
            scheduler: i,
            augmentJob: l,
            call: c
        } = n,
        u = (y) => (s ? y : Be(y) || s === !1 || s === 0 ? Pt(y, 1) : Pt(y));
    let a,
        f,
        h,
        d,
        _ = !1,
        v = !1;
    if (
        (ve(e)
            ? ((f = () => e.value), (_ = Be(e)))
            : Nt(e)
              ? ((f = () => u(e)), (_ = !0))
              : Y(e)
                ? ((v = !0),
                  (_ = e.some((y) => Nt(y) || Be(y))),
                  (f = () =>
                      e.map((y) => {
                          if (ve(y)) return y.value;
                          if (Nt(y)) return u(y);
                          if (z(y)) return c ? c(y, 2) : y();
                      })))
                : z(e)
                  ? t
                      ? (f = c ? () => c(e, 2) : e)
                      : (f = () => {
                            if (h) {
                                mt();
                                try {
                                    h();
                                } finally {
                                    yt();
                                }
                            }
                            const y = $t;
                            $t = a;
                            try {
                                return c ? c(e, 3, [d]) : e(d);
                            } finally {
                                $t = y;
                            }
                        })
                  : (f = it),
        t && s)
    ) {
        const y = f,
            w = s === !0 ? 1 / 0 : s;
        f = () => Pt(y(), w);
    }
    const T = Qs(),
        R = () => {
            (a.stop(), T && T.active && zs(T.effects, a));
        };
    if (o && t) {
        const y = t;
        t = (...w) => {
            (y(...w), R());
        };
    }
    let b = v ? new Array(e.length).fill(tr) : tr;
    const g = (y) => {
        if (!(!(a.flags & 1) || (!a.dirty && !y)))
            if (t) {
                const w = a.run();
                if (s || _ || (v ? w.some((S, L) => Ot(S, b[L])) : Ot(w, b))) {
                    h && h();
                    const S = $t;
                    $t = a;
                    try {
                        const L = [
                            w,
                            b === tr ? void 0 : v && b[0] === tr ? [] : b,
                            d
                        ];
                        ((b = w), c ? c(t, 3, L) : t(...L));
                    } finally {
                        $t = S;
                    }
                }
            } else a.run();
    };
    return (
        l && l(g),
        (a = new ll(f)),
        (a.scheduler = i ? () => i(g, !1) : g),
        (d = (y) => tu(y, !1, a)),
        (h = a.onStop =
            () => {
                const y = gr.get(a);
                if (y) {
                    if (c) c(y, 4);
                    else for (const w of y) w();
                    gr.delete(a);
                }
            }),
        t ? (r ? g(!0) : (b = a.run())) : i ? i(g.bind(null, !0), !0) : a.run(),
        (R.pause = a.pause.bind(a)),
        (R.resume = a.resume.bind(a)),
        (R.stop = R),
        R
    );
}
function Pt(e, t = 1 / 0, n) {
    if (
        t <= 0 ||
        !le(e) ||
        e.__v_skip ||
        ((n = n || new Map()), (n.get(e) || 0) >= t)
    )
        return e;
    if ((n.set(e, t), t--, ve(e))) Pt(e.value, t, n);
    else if (Y(e)) for (let r = 0; r < e.length; r++) Pt(e[r], t, n);
    else if (Xi(e) || un(e))
        e.forEach((r) => {
            Pt(r, t, n);
        });
    else if (el(e)) {
        for (const r in e) Pt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Pt(e[r], t, n);
    }
    return e;
}
function zn(e, t, n, r) {
    try {
        return r ? e(...r) : e();
    } catch (s) {
        Cn(s, t, n);
    }
}
function Ze(e, t, n, r) {
    if (z(e)) {
        const s = zn(e, t, n, r);
        return (
            s &&
                Nr(s) &&
                s.catch((o) => {
                    Cn(o, t, n);
                }),
            s
        );
    }
    if (Y(e)) {
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Ze(e[o], t, n, r));
        return s;
    }
}
function Cn(e, t, n, r = !0) {
    const s = t ? t.vnode : null,
        { errorHandler: o, throwUnhandledErrorInProduction: i } =
            (t && t.appContext.config) || fe;
    if (t) {
        let l = t.parent;
        const c = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let f = 0; f < a.length; f++)
                    if (a[f](e, c, u) === !1) return;
            }
            l = l.parent;
        }
        if (o) {
            (mt(), zn(o, null, 10, [e, c, u]), yt());
            return;
        }
    }
    ru(e, n, s, r, i);
}
function ru(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e);
}
const Oe = [];
let rt = -1;
const dn = [];
let At = null,
    on = 0;
const Rl = Promise.resolve();
let mr = null;
function _n(e) {
    const t = mr || Rl;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function su(e) {
    let t = rt + 1,
        n = Oe.length;
    for (; t < n; ) {
        const r = (t + n) >>> 1,
            s = Oe[r],
            o = Vn(s);
        o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
    }
    return t;
}
function so(e) {
    if (!(e.flags & 1)) {
        const t = Vn(e),
            n = Oe[Oe.length - 1];
        (!n || (!(e.flags & 2) && t >= Vn(n))
            ? Oe.push(e)
            : Oe.splice(su(t), 0, e),
            (e.flags |= 1),
            Tl());
    }
}
function Tl() {
    mr || (mr = Rl.then(Cl));
}
function Rs(e) {
    (Y(e)
        ? dn.push(...e)
        : At && e.id === -1
          ? At.splice(on + 1, 0, e)
          : e.flags & 1 || (dn.push(e), (e.flags |= 1)),
        Tl());
}
function No(e, t, n = rt + 1) {
    for (; n < Oe.length; n++) {
        const r = Oe[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            (Oe.splice(n, 1),
                n--,
                r.flags & 4 && (r.flags &= -2),
                r(),
                r.flags & 4 || (r.flags &= -2));
        }
    }
}
function yr(e) {
    if (dn.length) {
        const t = [...new Set(dn)].sort((n, r) => Vn(n) - Vn(r));
        if (((dn.length = 0), At)) {
            At.push(...t);
            return;
        }
        for (At = t, on = 0; on < At.length; on++) {
            const n = At[on];
            (n.flags & 4 && (n.flags &= -2),
                n.flags & 8 || n(),
                (n.flags &= -2));
        }
        ((At = null), (on = 0));
    }
}
const Vn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Cl(e) {
    try {
        for (rt = 0; rt < Oe.length; rt++) {
            const t = Oe[rt];
            t &&
                !(t.flags & 8) &&
                (t.flags & 4 && (t.flags &= -2),
                zn(t, t.i, t.i ? 15 : 14),
                t.flags & 4 || (t.flags &= -2));
        }
    } finally {
        for (; rt < Oe.length; rt++) {
            const t = Oe[rt];
            t && (t.flags &= -2);
        }
        ((rt = -1),
            (Oe.length = 0),
            yr(),
            (mr = null),
            (Oe.length || dn.length) && Cl());
    }
}
let ze = null,
    Al = null;
function _r(e) {
    const t = ze;
    return ((ze = e), (Al = (e && e.type.__scopeId) || null), t);
}
function oo(e, t = ze, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && Rr(-1);
        const o = _r(t);
        let i;
        try {
            i = e(...s);
        } finally {
            (_r(o), r._d && Rr(1));
        }
        return i;
    };
    return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function st(e, t, n, r) {
    const s = e.dirs,
        o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const l = s[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[r];
        c && (mt(), Ze(c, n, 8, [e.el, l, e, t]), yt());
    }
}
const ou = Symbol("_vte"),
    Sl = (e) => e.__isTeleport,
    dt = Symbol("_leaveCb"),
    nr = Symbol("_enterCb");
function iu() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map()
    };
    return (
        Wn(() => {
            e.isMounted = !0;
        }),
        Xn(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const Ve = [Function, Array],
    xl = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Ve,
        onEnter: Ve,
        onAfterEnter: Ve,
        onEnterCancelled: Ve,
        onBeforeLeave: Ve,
        onLeave: Ve,
        onAfterLeave: Ve,
        onLeaveCancelled: Ve,
        onBeforeAppear: Ve,
        onAppear: Ve,
        onAfterAppear: Ve,
        onAppearCancelled: Ve
    },
    Pl = (e) => {
        const t = e.subTree;
        return t.component ? Pl(t.component) : t;
    },
    lu = {
        name: "BaseTransition",
        props: xl,
        setup(e, { slots: t }) {
            const n = Ht(),
                r = iu();
            return () => {
                const s = t.default && Nl(t.default(), !0);
                if (!s || !s.length) return;
                const o = kl(s),
                    i = ne(e),
                    { mode: l } = i;
                if (r.isLeaving) return ts(o);
                const c = Mo(o);
                if (!c) return ts(o);
                let u = Ts(c, i, r, n, (f) => (u = f));
                c.type !== Re && vn(c, u);
                let a = n.subTree && Mo(n.subTree);
                if (a && a.type !== Re && !Ye(a, c) && Pl(n).type !== Re) {
                    let f = Ts(a, i, r, n);
                    if ((vn(a, f), l === "out-in" && c.type !== Re))
                        return (
                            (r.isLeaving = !0),
                            (f.afterLeave = () => {
                                ((r.isLeaving = !1),
                                    n.job.flags & 8 || n.update(),
                                    delete f.afterLeave,
                                    (a = void 0));
                            }),
                            ts(o)
                        );
                    l === "in-out" && c.type !== Re
                        ? (f.delayLeave = (h, d, _) => {
                              const v = Ol(r, a);
                              ((v[String(a.key)] = a),
                                  (h[dt] = () => {
                                      (d(),
                                          (h[dt] = void 0),
                                          delete u.delayedLeave,
                                          (a = void 0));
                                  }),
                                  (u.delayedLeave = () => {
                                      (_(),
                                          delete u.delayedLeave,
                                          (a = void 0));
                                  }));
                          })
                        : (a = void 0);
                } else a && (a = void 0);
                return o;
            };
        }
    };
function kl(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Re) {
                t = n;
                break;
            }
    }
    return t;
}
const au = lu;
function Ol(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function Ts(e, t, n, r, s) {
    const {
            appear: o,
            mode: i,
            persisted: l = !1,
            onBeforeEnter: c,
            onEnter: u,
            onAfterEnter: a,
            onEnterCancelled: f,
            onBeforeLeave: h,
            onLeave: d,
            onAfterLeave: _,
            onLeaveCancelled: v,
            onBeforeAppear: T,
            onAppear: R,
            onAfterAppear: b,
            onAppearCancelled: g
        } = t,
        y = String(e.key),
        w = Ol(n, e),
        S = (M, N) => {
            M && Ze(M, r, 9, N);
        },
        L = (M, N) => {
            const W = N[1];
            (S(M, N),
                Y(M)
                    ? M.every((O) => O.length <= 1) && W()
                    : M.length <= 1 && W());
        },
        V = {
            mode: i,
            persisted: l,
            beforeEnter(M) {
                let N = c;
                if (!n.isMounted)
                    if (o) N = T || c;
                    else return;
                M[dt] && M[dt](!0);
                const W = w[y];
                (W && Ye(e, W) && W.el[dt] && W.el[dt](), S(N, [M]));
            },
            enter(M) {
                let N = u,
                    W = a,
                    O = f;
                if (!n.isMounted)
                    if (o) ((N = R || u), (W = b || a), (O = g || f));
                    else return;
                let K = !1;
                const ee = (M[nr] = (ie) => {
                    K ||
                        ((K = !0),
                        ie ? S(O, [M]) : S(W, [M]),
                        V.delayedLeave && V.delayedLeave(),
                        (M[nr] = void 0));
                });
                N ? L(N, [M, ee]) : ee();
            },
            leave(M, N) {
                const W = String(e.key);
                if ((M[nr] && M[nr](!0), n.isUnmounting)) return N();
                S(h, [M]);
                let O = !1;
                const K = (M[dt] = (ee) => {
                    O ||
                        ((O = !0),
                        N(),
                        ee ? S(v, [M]) : S(_, [M]),
                        (M[dt] = void 0),
                        w[W] === e && delete w[W]);
                });
                ((w[W] = e), d ? L(d, [M, K]) : K());
            },
            clone(M) {
                const N = Ts(M, t, n, r, s);
                return (s && s(N), N);
            }
        };
    return V;
}
function ts(e) {
    if (Qn(e)) return ((e = Ge(e)), (e.children = null), e);
}
function Mo(e) {
    if (!Qn(e)) return Sl(e.type) && e.children ? kl(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && z(n.default)) return n.default();
    }
}
function vn(e, t) {
    e.shapeFlag & 6 && e.component
        ? ((e.transition = t), vn(e.component.subTree, t))
        : e.shapeFlag & 128
          ? ((e.ssContent.transition = t.clone(e.ssContent)),
            (e.ssFallback.transition = t.clone(e.ssFallback)))
          : (e.transition = t);
}
function Nl(e, t = !1, n) {
    let r = [],
        s = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const l =
            n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === je
            ? (i.patchFlag & 128 && s++, (r = r.concat(Nl(i.children, t, l))))
            : (t || i.type !== Re) && r.push(l != null ? Ge(i, { key: l }) : i);
    }
    if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r;
}
function vt(e, t) {
    return z(e) ? Ee({ name: e.name }, t, { setup: e }) : e;
}
function io(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const vr = new WeakMap();
function hn(e, t, n, r, s = !1) {
    if (Y(e)) {
        e.forEach((_, v) => hn(_, t && (Y(t) ? t[v] : t), n, r, s));
        return;
    }
    if (qt(r) && !s) {
        r.shapeFlag & 512 &&
            r.type.__asyncResolved &&
            r.component.subTree.component &&
            hn(e, t, n, r.component.subTree);
        return;
    }
    const o = r.shapeFlag & 4 ? ho(r.component) : r.el,
        i = s ? null : o,
        { i: l, r: c } = e,
        u = t && t.r,
        a = l.refs === fe ? (l.refs = {}) : l.refs,
        f = l.setupState,
        h = ne(f),
        d = f === fe ? Qi : (_) => se(h, _);
    if (u != null && u !== c) {
        if ((Io(t), pe(u))) ((a[u] = null), d(u) && (f[u] = null));
        else if (ve(u)) {
            u.value = null;
            const _ = t;
            _.k && (a[_.k] = null);
        }
    }
    if (z(c)) zn(c, l, 12, [i, a]);
    else {
        const _ = pe(c),
            v = ve(c);
        if (_ || v) {
            const T = () => {
                if (e.f) {
                    const R = _ ? (d(c) ? f[c] : a[c]) : c.value;
                    if (s) Y(R) && zs(R, o);
                    else if (Y(R)) R.includes(o) || R.push(o);
                    else if (_) ((a[c] = [o]), d(c) && (f[c] = a[c]));
                    else {
                        const b = [o];
                        ((c.value = b), e.k && (a[e.k] = b));
                    }
                } else
                    _
                        ? ((a[c] = i), d(c) && (f[c] = i))
                        : v && ((c.value = i), e.k && (a[e.k] = i));
            };
            if (i) {
                const R = () => {
                    (T(), vr.delete(e));
                };
                ((R.id = -1), vr.set(e, R), we(R, n));
            } else (Io(e), T());
        }
    }
}
function Io(e) {
    const t = vr.get(e);
    t && ((t.flags |= 8), vr.delete(e));
}
let Lo = !1;
const sn = () => {
        Lo ||
            (console.error("Hydration completed but contains mismatches."),
            (Lo = !0));
    },
    cu = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    uu = (e) => e.namespaceURI.includes("MathML"),
    rr = (e) => {
        if (e.nodeType === 1) {
            if (cu(e)) return "svg";
            if (uu(e)) return "mathml";
        }
    },
    an = (e) => e.nodeType === 8;
function fu(e) {
    const {
            mt: t,
            p: n,
            o: {
                patchProp: r,
                createText: s,
                nextSibling: o,
                parentNode: i,
                remove: l,
                insert: c,
                createComment: u
            }
        } = e,
        a = (g, y) => {
            if (!y.hasChildNodes()) {
                (n(null, g, y), yr(), (y._vnode = g));
                return;
            }
            (f(y.firstChild, g, null, null, null), yr(), (y._vnode = g));
        },
        f = (g, y, w, S, L, V = !1) => {
            V = V || !!y.dynamicChildren;
            const M = an(g) && g.data === "[",
                N = () => v(g, y, w, S, L, M),
                { type: W, ref: O, shapeFlag: K, patchFlag: ee } = y;
            let ie = g.nodeType;
            ((y.el = g), ee === -2 && ((V = !1), (y.dynamicChildren = null)));
            let $ = null;
            switch (W) {
                case Yt:
                    ie !== 3
                        ? y.children === ""
                            ? (c((y.el = s("")), i(g), g), ($ = g))
                            : ($ = N())
                        : (g.data !== y.children &&
                              (sn(), (g.data = y.children)),
                          ($ = o(g)));
                    break;
                case Re:
                    b(g)
                        ? (($ = o(g)), R((y.el = g.content.firstChild), g, w))
                        : ie !== 8 || M
                          ? ($ = N())
                          : ($ = o(g));
                    break;
                case Dn:
                    if (
                        (M && ((g = o(g)), (ie = g.nodeType)),
                        ie === 1 || ie === 3)
                    ) {
                        $ = g;
                        const Q = !y.children.length;
                        for (let B = 0; B < y.staticCount; B++)
                            (Q &&
                                (y.children +=
                                    $.nodeType === 1 ? $.outerHTML : $.data),
                                B === y.staticCount - 1 && (y.anchor = $),
                                ($ = o($)));
                        return M ? o($) : $;
                    } else N();
                    break;
                case je:
                    M ? ($ = _(g, y, w, S, L, V)) : ($ = N());
                    break;
                default:
                    if (K & 1)
                        (ie !== 1 ||
                            y.type.toLowerCase() !== g.tagName.toLowerCase()) &&
                        !b(g)
                            ? ($ = N())
                            : ($ = h(g, y, w, S, L, V));
                    else if (K & 6) {
                        y.slotScopeIds = L;
                        const Q = i(g);
                        if (
                            (M
                                ? ($ = T(g))
                                : an(g) && g.data === "teleport start"
                                  ? ($ = T(g, g.data, "teleport end"))
                                  : ($ = o(g)),
                            t(y, Q, null, w, S, rr(Q), V),
                            qt(y) && !y.type.__asyncResolved)
                        ) {
                            let B;
                            (M
                                ? ((B = _e(je)),
                                  (B.anchor = $
                                      ? $.previousSibling
                                      : Q.lastChild))
                                : (B = g.nodeType === 3 ? da("") : _e("div")),
                                (B.el = g),
                                (y.component.subTree = B));
                        }
                    } else
                        K & 64
                            ? ie !== 8
                                ? ($ = N())
                                : ($ = y.type.hydrate(g, y, w, S, L, V, e, d))
                            : K & 128 &&
                              ($ = y.type.hydrate(
                                  g,
                                  y,
                                  w,
                                  S,
                                  rr(i(g)),
                                  L,
                                  V,
                                  e,
                                  f
                              ));
            }
            return (O != null && hn(O, null, S, y), $);
        },
        h = (g, y, w, S, L, V) => {
            V = V || !!y.dynamicChildren;
            const {
                    type: M,
                    props: N,
                    patchFlag: W,
                    shapeFlag: O,
                    dirs: K,
                    transition: ee
                } = y,
                ie = M === "input" || M === "option";
            if (ie || W !== -1) {
                K && st(y, null, w, "created");
                let $ = !1;
                if (b(g)) {
                    $ =
                        na(null, ee) &&
                        w &&
                        w.vnode.props &&
                        w.vnode.props.appear;
                    const B = g.content.firstChild;
                    if ($) {
                        const de = B.getAttribute("class");
                        (de && (B.$cls = de), ee.beforeEnter(B));
                    }
                    (R(B, g, w), (y.el = g = B));
                }
                if (O & 16 && !(N && (N.innerHTML || N.textContent))) {
                    let B = d(g.firstChild, y, g, w, S, L, V);
                    for (; B; ) {
                        sr(g, 1) || sn();
                        const de = B;
                        ((B = B.nextSibling), l(de));
                    }
                } else if (O & 8) {
                    let B = y.children;
                    B[0] ===
                        `
` &&
                        (g.tagName === "PRE" || g.tagName === "TEXTAREA") &&
                        (B = B.slice(1));
                    const { textContent: de } = g;
                    de !== B &&
                        de !==
                            B.replace(
                                /\r\n|\r/g,
                                `
`
                            ) &&
                        (sr(g, 0) || sn(), (g.textContent = y.children));
                }
                if (N) {
                    if (ie || !V || W & 48) {
                        const B = g.tagName.includes("-");
                        for (const de in N)
                            ((ie &&
                                (de.endsWith("value") ||
                                    de === "indeterminate")) ||
                                (Jn(de) && !fn(de)) ||
                                de[0] === "." ||
                                B) &&
                                r(g, de, null, N[de], void 0, w);
                    } else if (N.onClick)
                        r(g, "onClick", null, N.onClick, void 0, w);
                    else if (W & 4 && Nt(N.style))
                        for (const B in N.style) N.style[B];
                }
                let Q;
                ((Q = N && N.onVnodeBeforeMount) && Ie(Q, w, y),
                    K && st(y, null, w, "beforeMount"),
                    ((Q = N && N.onVnodeMounted) || K || $) &&
                        ia(() => {
                            (Q && Ie(Q, w, y),
                                $ && ee.enter(g),
                                K && st(y, null, w, "mounted"));
                        }, S));
            }
            return g.nextSibling;
        },
        d = (g, y, w, S, L, V, M) => {
            M = M || !!y.dynamicChildren;
            const N = y.children,
                W = N.length;
            for (let O = 0; O < W; O++) {
                const K = M ? N[O] : (N[O] = Fe(N[O])),
                    ee = K.type === Yt;
                g
                    ? (ee &&
                          !M &&
                          O + 1 < W &&
                          Fe(N[O + 1]).type === Yt &&
                          (c(s(g.data.slice(K.children.length)), w, o(g)),
                          (g.data = K.children)),
                      (g = f(g, K, S, L, V, M)))
                    : ee && !K.children
                      ? c((K.el = s("")), w)
                      : (sr(w, 1) || sn(), n(null, K, w, null, S, L, rr(w), V));
            }
            return g;
        },
        _ = (g, y, w, S, L, V) => {
            const { slotScopeIds: M } = y;
            M && (L = L ? L.concat(M) : M);
            const N = i(g),
                W = d(o(g), y, N, w, S, L, V);
            return W && an(W) && W.data === "]"
                ? o((y.anchor = W))
                : (sn(), c((y.anchor = u("]")), N, W), W);
        },
        v = (g, y, w, S, L, V) => {
            if ((sr(g.parentElement, 1) || sn(), (y.el = null), V)) {
                const W = T(g);
                for (;;) {
                    const O = o(g);
                    if (O && O !== W) l(O);
                    else break;
                }
            }
            const M = o(g),
                N = i(g);
            return (
                l(g),
                n(null, y, N, M, w, S, rr(N), L),
                w && ((w.vnode.el = y.el), Wr(w, y.el)),
                M
            );
        },
        T = (g, y = "[", w = "]") => {
            let S = 0;
            for (; g; )
                if (
                    ((g = o(g)),
                    g && an(g) && (g.data === y && S++, g.data === w))
                ) {
                    if (S === 0) return o(g);
                    S--;
                }
            return g;
        },
        R = (g, y, w) => {
            const S = y.parentNode;
            S && S.replaceChild(g, y);
            let L = w;
            for (; L; )
                (L.vnode.el === y && (L.vnode.el = L.subTree.el = g),
                    (L = L.parent));
        },
        b = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [a, f];
}
const Ho = "data-allow-mismatch",
    du = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function sr(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Ho); ) e = e.parentElement;
    const n = e && e.getAttribute(Ho);
    if (n == null) return !1;
    if (n === "") return !0;
    {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(du[t]);
    }
}
Hr().requestIdleCallback;
Hr().cancelIdleCallback;
function hu(e, t) {
    if (an(e) && e.data === "[") {
        let n = 1,
            r = e.nextSibling;
        for (; r; ) {
            if (r.nodeType === 1) {
                if (t(r) === !1) break;
            } else if (an(r))
                if (r.data === "]") {
                    if (--n === 0) break;
                } else r.data === "[" && n++;
            r = r.nextSibling;
        }
    } else t(e);
}
const qt = (e) => !!e.type.__asyncLoader;
function Do(e) {
    z(e) && (e = { loader: e });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: s = 200,
        hydrate: o,
        timeout: i,
        suspensible: l = !0,
        onError: c
    } = e;
    let u = null,
        a,
        f = 0;
    const h = () => (f++, (u = null), d()),
        d = () => {
            let _;
            return (
                u ||
                (_ = u =
                    t()
                        .catch((v) => {
                            if (
                                ((v =
                                    v instanceof Error
                                        ? v
                                        : new Error(String(v))),
                                c)
                            )
                                return new Promise((T, R) => {
                                    c(
                                        v,
                                        () => T(h()),
                                        () => R(v),
                                        f + 1
                                    );
                                });
                            throw v;
                        })
                        .then((v) =>
                            _ !== u && u
                                ? u
                                : (v &&
                                      (v.__esModule ||
                                          v[Symbol.toStringTag] === "Module") &&
                                      (v = v.default),
                                  (a = v),
                                  v)
                        ))
            );
        };
    return vt({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        __asyncHydrate(_, v, T) {
            let R = !1;
            (v.bu || (v.bu = [])).push(() => (R = !0));
            const b = () => {
                    R || T();
                },
                g = o
                    ? () => {
                          const y = o(b, (w) => hu(_, w));
                          y && (v.bum || (v.bum = [])).push(y);
                      }
                    : b;
            a ? g() : d().then(() => !v.isUnmounted && g());
        },
        get __asyncResolved() {
            return a;
        },
        setup() {
            const _ = Te;
            if ((io(_), a)) return () => or(a, _);
            const v = (g) => {
                ((u = null), Cn(g, _, 13, !r));
            };
            if ((l && _.suspense) || En)
                return d()
                    .then((g) => () => or(g, _))
                    .catch(
                        (g) => (v(g), () => (r ? _e(r, { error: g }) : null))
                    );
            const T = gt(!1),
                R = gt(),
                b = gt(!!s);
            return (
                s &&
                    setTimeout(() => {
                        b.value = !1;
                    }, s),
                i != null &&
                    setTimeout(() => {
                        if (!T.value && !R.value) {
                            const g = new Error(
                                `Async component timed out after ${i}ms.`
                            );
                            (v(g), (R.value = g));
                        }
                    }, i),
                d()
                    .then(() => {
                        ((T.value = !0),
                            _.parent &&
                                Qn(_.parent.vnode) &&
                                _.parent.update());
                    })
                    .catch((g) => {
                        (v(g), (R.value = g));
                    }),
                () => {
                    if (T.value && a) return or(a, _);
                    if (R.value && r) return _e(r, { error: R.value });
                    if (n && !b.value) return or(n, _);
                }
            );
        }
    });
}
function or(e, t) {
    const { ref: n, props: r, children: s, ce: o } = t.vnode,
        i = _e(e, r, s);
    return ((i.ref = n), (i.ce = o), delete t.vnode.ce, i);
}
const Qn = (e) => e.type.__isKeepAlive,
    pu = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, { slots: t }) {
            const n = Ht(),
                r = n.ctx;
            if (!r.renderer)
                return () => {
                    const b = t.default && t.default();
                    return b && b.length === 1 ? b[0] : b;
                };
            const s = new Map(),
                o = new Set();
            let i = null;
            const l = n.suspense,
                {
                    renderer: {
                        p: c,
                        m: u,
                        um: a,
                        o: { createElement: f }
                    }
                } = r,
                h = f("div");
            ((r.activate = (b, g, y, w, S) => {
                const L = b.component;
                (u(b, g, y, 0, l),
                    c(L.vnode, b, g, y, L, l, w, b.slotScopeIds, S),
                    we(() => {
                        ((L.isDeactivated = !1), L.a && Mn(L.a));
                        const V = b.props && b.props.onVnodeMounted;
                        V && Ie(V, L.parent, b);
                    }, l));
            }),
                (r.deactivate = (b) => {
                    const g = b.component;
                    (wr(g.m),
                        wr(g.a),
                        u(b, h, null, 1, l),
                        we(() => {
                            g.da && Mn(g.da);
                            const y = b.props && b.props.onVnodeUnmounted;
                            (y && Ie(y, g.parent, b), (g.isDeactivated = !0));
                        }, l));
                }));
            function d(b) {
                (ns(b), a(b, n, l, !0));
            }
            function _(b) {
                s.forEach((g, y) => {
                    const w = Ms(g.type);
                    w && !b(w) && v(y);
                });
            }
            function v(b) {
                const g = s.get(b);
                (g && (!i || !Ye(g, i)) ? d(g) : i && ns(i),
                    s.delete(b),
                    o.delete(b));
            }
            pn(
                () => [e.include, e.exclude],
                ([b, g]) => {
                    (b && _((y) => On(b, y)), g && _((y) => !On(g, y)));
                },
                { flush: "post", deep: !0 }
            );
            let T = null;
            const R = () => {
                T != null &&
                    (Er(n.subTree.type)
                        ? we(() => {
                              s.set(T, ir(n.subTree));
                          }, n.subTree.suspense)
                        : s.set(T, ir(n.subTree)));
            };
            return (
                Wn(R),
                Hl(R),
                Xn(() => {
                    s.forEach((b) => {
                        const { subTree: g, suspense: y } = n,
                            w = ir(g);
                        if (b.type === w.type && b.key === w.key) {
                            ns(w);
                            const S = w.component.da;
                            S && we(S, y);
                            return;
                        }
                        d(b);
                    });
                }),
                () => {
                    if (((T = null), !t.default)) return (i = null);
                    const b = t.default(),
                        g = b[0];
                    if (b.length > 1) return ((i = null), b);
                    if (!wn(g) || (!(g.shapeFlag & 4) && !(g.shapeFlag & 128)))
                        return ((i = null), g);
                    let y = ir(g);
                    if (y.type === Re) return ((i = null), y);
                    const w = y.type,
                        S = Ms(qt(y) ? y.type.__asyncResolved || {} : w),
                        { include: L, exclude: V, max: M } = e;
                    if ((L && (!S || !On(L, S))) || (V && S && On(V, S)))
                        return ((y.shapeFlag &= -257), (i = y), g);
                    const N = y.key == null ? w : y.key,
                        W = s.get(N);
                    return (
                        y.el &&
                            ((y = Ge(y)),
                            g.shapeFlag & 128 && (g.ssContent = y)),
                        (T = N),
                        W
                            ? ((y.el = W.el),
                              (y.component = W.component),
                              y.transition && vn(y, y.transition),
                              (y.shapeFlag |= 512),
                              o.delete(N),
                              o.add(N))
                            : (o.add(N),
                              M &&
                                  o.size > parseInt(M, 10) &&
                                  v(o.values().next().value)),
                        (y.shapeFlag |= 256),
                        (i = y),
                        Er(g.type) ? g : y
                    );
                }
            );
        }
    },
    gu = pu;
function On(e, t) {
    return Y(e)
        ? e.some((n) => On(n, t))
        : pe(e)
          ? e.split(",").includes(t)
          : fc(e)
            ? ((e.lastIndex = 0), e.test(t))
            : !1;
}
function Ml(e, t) {
    Ll(e, "a", t);
}
function Il(e, t) {
    Ll(e, "da", t);
}
function Ll(e, t, n = Te) {
    const r =
        e.__wdc ||
        (e.__wdc = () => {
            let s = n;
            for (; s; ) {
                if (s.isDeactivated) return;
                s = s.parent;
            }
            return e();
        });
    if ((Ur(t, r, n), n)) {
        let s = n.parent;
        for (; s && s.parent; )
            (Qn(s.parent.vnode) && mu(r, t, n, s), (s = s.parent));
    }
}
function mu(e, t, n, r) {
    const s = Ur(t, e, r, !0);
    Dl(() => {
        zs(r[t], s);
    }, n);
}
function ns(e) {
    ((e.shapeFlag &= -257), (e.shapeFlag &= -513));
}
function ir(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ur(e, t, n = Te, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []),
            o =
                t.__weh ||
                (t.__weh = (...i) => {
                    mt();
                    const l = Qt(n),
                        c = Ze(t, n, e, i);
                    return (l(), yt(), c);
                });
        return (r ? s.unshift(o) : s.push(o), o);
    }
}
const bt =
        (e) =>
        (t, n = Te) => {
            (!En || e === "sp") && Ur(e, (...r) => t(...r), n);
        },
    yu = bt("bm"),
    Wn = bt("m"),
    _u = bt("bu"),
    Hl = bt("u"),
    Xn = bt("bum"),
    Dl = bt("um"),
    vu = bt("sp"),
    bu = bt("rtg"),
    wu = bt("rtc");
function jl(e, t = Te) {
    Ur("ec", e, t);
}
const Fl = "components";
function um(e, t) {
    return Ul(Fl, e, !0, t) || e;
}
const Bl = Symbol.for("v-ndc");
function Eu(e) {
    return pe(e) ? Ul(Fl, e, !1) || e : e || Bl;
}
function Ul(e, t, n = !0, r = !1) {
    const s = ze || Te;
    if (s) {
        const o = s.type;
        {
            const l = Ms(o, !1);
            if (l && (l === t || l === qe(t) || l === Lr(qe(t)))) return o;
        }
        const i = jo(s[e] || o[e], t) || jo(s.appContext[e], t);
        return !i && r ? o : i;
    }
}
function jo(e, t) {
    return e && (e[t] || e[qe(t)] || e[Lr(qe(t))]);
}
function fm(e, t, n, r) {
    let s;
    const o = n,
        i = Y(e);
    if (i || pe(e)) {
        const l = i && Nt(e);
        let c = !1,
            u = !1;
        (l && ((c = !Be(e)), (u = lt(e)), (e = Fr(e))),
            (s = new Array(e.length)));
        for (let a = 0, f = e.length; a < f; a++)
            s[a] = t(c ? (u ? yn(Xe(e[a])) : Xe(e[a])) : e[a], a, void 0, o);
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o);
    } else if (le(e))
        if (e[Symbol.iterator]) s = Array.from(e, (l, c) => t(l, c, void 0, o));
        else {
            const l = Object.keys(e);
            s = new Array(l.length);
            for (let c = 0, u = l.length; c < u; c++) {
                const a = l[c];
                s[c] = t(e[a], a, c, o);
            }
        }
    else s = [];
    return s;
}
const Cs = (e) => (e ? (pa(e) ? ho(e) : Cs(e.parent)) : null),
    Hn = Ee(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Cs(e.parent),
        $root: (e) => Cs(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => Vl(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                so(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = _n.bind(e.proxy)),
        $watch: (e) => Iu.bind(e)
    }),
    rs = (e, t) => e !== fe && !e.__isScriptSetup && se(e, t),
    Ru = {
        get({ _: e }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: r,
                data: s,
                props: o,
                accessCache: i,
                type: l,
                appContext: c
            } = e;
            if (t[0] !== "$") {
                const h = i[t];
                if (h !== void 0)
                    switch (h) {
                        case 1:
                            return r[t];
                        case 2:
                            return s[t];
                        case 4:
                            return n[t];
                        case 3:
                            return o[t];
                    }
                else {
                    if (rs(r, t)) return ((i[t] = 1), r[t]);
                    if (s !== fe && se(s, t)) return ((i[t] = 2), s[t]);
                    if (se(o, t)) return ((i[t] = 3), o[t]);
                    if (n !== fe && se(n, t)) return ((i[t] = 4), n[t]);
                    As && (i[t] = 0);
                }
            }
            const u = Hn[t];
            let a, f;
            if (u) return (t === "$attrs" && xe(e.attrs, "get", ""), u(e));
            if ((a = l.__cssModules) && (a = a[t])) return a;
            if (n !== fe && se(n, t)) return ((i[t] = 4), n[t]);
            if (((f = c.config.globalProperties), se(f, t))) return f[t];
        },
        set({ _: e }, t, n) {
            const { data: r, setupState: s, ctx: o } = e;
            return rs(s, t)
                ? ((s[t] = n), !0)
                : r !== fe && se(r, t)
                  ? ((r[t] = n), !0)
                  : se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
                    ? !1
                    : ((o[t] = n), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: r,
                    appContext: s,
                    props: o,
                    type: i
                }
            },
            l
        ) {
            let c;
            return !!(
                n[l] ||
                (e !== fe && l[0] !== "$" && se(e, l)) ||
                rs(t, l) ||
                se(o, l) ||
                se(r, l) ||
                se(Hn, l) ||
                se(s.config.globalProperties, l) ||
                ((c = i.__cssModules) && c[l])
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get != null
                    ? (e._.accessCache[t] = 0)
                    : se(n, "value") && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
            );
        }
    };
function Fo(e) {
    return Y(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function dm(e) {
    const t = Ht();
    let n = e();
    return (
        Os(),
        Nr(n) &&
            (n = n.catch((r) => {
                throw (Qt(t), r);
            })),
        [n, () => Qt(t)]
    );
}
let As = !0;
function Tu(e) {
    const t = Vl(e),
        n = e.proxy,
        r = e.ctx;
    ((As = !1), t.beforeCreate && Bo(t.beforeCreate, e, "bc"));
    const {
        data: s,
        computed: o,
        methods: i,
        watch: l,
        provide: c,
        inject: u,
        created: a,
        beforeMount: f,
        mounted: h,
        beforeUpdate: d,
        updated: _,
        activated: v,
        deactivated: T,
        beforeDestroy: R,
        beforeUnmount: b,
        destroyed: g,
        unmounted: y,
        render: w,
        renderTracked: S,
        renderTriggered: L,
        errorCaptured: V,
        serverPrefetch: M,
        expose: N,
        inheritAttrs: W,
        components: O,
        directives: K,
        filters: ee
    } = t;
    if ((u && Cu(u, r, null), i))
        for (const Q in i) {
            const B = i[Q];
            z(B) && (r[Q] = B.bind(n));
        }
    if (s) {
        const Q = s.call(n, n);
        le(Q) && (e.data = Lt(Q));
    }
    if (((As = !0), o))
        for (const Q in o) {
            const B = o[Q],
                de = z(B) ? B.bind(n, n) : z(B.get) ? B.get.bind(n, n) : it,
                Et = !z(B) && z(B.set) ? B.set.bind(n) : it,
                tt = Ke({ get: de, set: Et });
            Object.defineProperty(r, Q, {
                enumerable: !0,
                configurable: !0,
                get: () => tt.value,
                set: (Ne) => (tt.value = Ne)
            });
        }
    if (l) for (const Q in l) $l(l[Q], r, n, Q);
    if (c) {
        const Q = z(c) ? c.call(n) : c;
        Reflect.ownKeys(Q).forEach((B) => {
            Mt(B, Q[B]);
        });
    }
    a && Bo(a, e, "c");
    function $(Q, B) {
        Y(B) ? B.forEach((de) => Q(de.bind(n))) : B && Q(B.bind(n));
    }
    if (
        ($(yu, f),
        $(Wn, h),
        $(_u, d),
        $(Hl, _),
        $(Ml, v),
        $(Il, T),
        $(jl, V),
        $(wu, S),
        $(bu, L),
        $(Xn, b),
        $(Dl, y),
        $(vu, M),
        Y(N))
    )
        if (N.length) {
            const Q = e.exposed || (e.exposed = {});
            N.forEach((B) => {
                Object.defineProperty(Q, B, {
                    get: () => n[B],
                    set: (de) => (n[B] = de),
                    enumerable: !0
                });
            });
        } else e.exposed || (e.exposed = {});
    (w && e.render === it && (e.render = w),
        W != null && (e.inheritAttrs = W),
        O && (e.components = O),
        K && (e.directives = K),
        M && io(e));
}
function Cu(e, t, n = it) {
    Y(e) && (e = Ss(e));
    for (const r in e) {
        const s = e[r];
        let o;
        (le(s)
            ? "default" in s
                ? (o = Ce(s.from || r, s.default, !0))
                : (o = Ce(s.from || r))
            : (o = Ce(s)),
            ve(o)
                ? Object.defineProperty(t, r, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => o.value,
                      set: (i) => (o.value = i)
                  })
                : (t[r] = o));
    }
}
function Bo(e, t, n) {
    Ze(Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $l(e, t, n, r) {
    let s = r.includes(".") ? Kl(n, r) : () => n[r];
    if (pe(e)) {
        const o = t[e];
        z(o) && pn(s, o);
    } else if (z(e)) pn(s, e.bind(n));
    else if (le(e))
        if (Y(e)) e.forEach((o) => $l(o, t, n, r));
        else {
            const o = z(e.handler) ? e.handler.bind(n) : t[e.handler];
            z(o) && pn(s, o, e);
        }
}
function Vl(e) {
    const t = e.type,
        { mixins: n, extends: r } = t,
        {
            mixins: s,
            optionsCache: o,
            config: { optionMergeStrategies: i }
        } = e.appContext,
        l = o.get(t);
    let c;
    return (
        l
            ? (c = l)
            : !s.length && !n && !r
              ? (c = t)
              : ((c = {}),
                s.length && s.forEach((u) => br(c, u, i, !0)),
                br(c, t, i)),
        le(t) && o.set(t, c),
        c
    );
}
function br(e, t, n, r = !1) {
    const { mixins: s, extends: o } = t;
    (o && br(e, o, n, !0), s && s.forEach((i) => br(e, i, n, !0)));
    for (const i in t)
        if (!(r && i === "expose")) {
            const l = Au[i] || (n && n[i]);
            e[i] = l ? l(e[i], t[i]) : t[i];
        }
    return e;
}
const Au = {
    data: Uo,
    props: $o,
    emits: $o,
    methods: Nn,
    computed: Nn,
    beforeCreate: Pe,
    created: Pe,
    beforeMount: Pe,
    mounted: Pe,
    beforeUpdate: Pe,
    updated: Pe,
    beforeDestroy: Pe,
    beforeUnmount: Pe,
    destroyed: Pe,
    unmounted: Pe,
    activated: Pe,
    deactivated: Pe,
    errorCaptured: Pe,
    serverPrefetch: Pe,
    components: Nn,
    directives: Nn,
    watch: xu,
    provide: Uo,
    inject: Su
};
function Uo(e, t) {
    return t
        ? e
            ? function () {
                  return Ee(
                      z(e) ? e.call(this, this) : e,
                      z(t) ? t.call(this, this) : t
                  );
              }
            : t
        : e;
}
function Su(e, t) {
    return Nn(Ss(e), Ss(t));
}
function Ss(e) {
    if (Y(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function Pe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function Nn(e, t) {
    return e ? Ee(Object.create(null), e, t) : t;
}
function $o(e, t) {
    return e
        ? Y(e) && Y(t)
            ? [...new Set([...e, ...t])]
            : Ee(Object.create(null), Fo(e), Fo(t ?? {}))
        : t;
}
function xu(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ee(Object.create(null), e);
    for (const r in t) n[r] = Pe(e[r], t[r]);
    return n;
}
function Wl() {
    return {
        app: null,
        config: {
            isNativeTag: Qi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let Pu = 0;
function ku(e, t) {
    return function (r, s = null) {
        (z(r) || (r = Ee({}, r)), s != null && !le(s) && (s = null));
        const o = Wl(),
            i = new WeakSet(),
            l = [];
        let c = !1;
        const u = (o.app = {
            _uid: Pu++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: gf,
            get config() {
                return o.config;
            },
            set config(a) {},
            use(a, ...f) {
                return (
                    i.has(a) ||
                        (a && z(a.install)
                            ? (i.add(a), a.install(u, ...f))
                            : z(a) && (i.add(a), a(u, ...f))),
                    u
                );
            },
            mixin(a) {
                return (o.mixins.includes(a) || o.mixins.push(a), u);
            },
            component(a, f) {
                return f ? ((o.components[a] = f), u) : o.components[a];
            },
            directive(a, f) {
                return f ? ((o.directives[a] = f), u) : o.directives[a];
            },
            mount(a, f, h) {
                if (!c) {
                    const d = u._ceVNode || _e(r, s);
                    return (
                        (d.appContext = o),
                        h === !0 ? (h = "svg") : h === !1 && (h = void 0),
                        f && t ? t(d, a) : e(d, a, h),
                        (c = !0),
                        (u._container = a),
                        (a.__vue_app__ = u),
                        ho(d.component)
                    );
                }
            },
            onUnmount(a) {
                l.push(a);
            },
            unmount() {
                c &&
                    (Ze(l, u._instance, 16),
                    e(null, u._container),
                    delete u._container.__vue_app__);
            },
            provide(a, f) {
                return ((o.provides[a] = f), u);
            },
            runWithContext(a) {
                const f = Jt;
                Jt = u;
                try {
                    return a();
                } finally {
                    Jt = f;
                }
            }
        });
        return u;
    };
}
let Jt = null;
function Mt(e, t) {
    if (Te) {
        let n = Te.provides;
        const r = Te.parent && Te.parent.provides;
        (r === n && (n = Te.provides = Object.create(r)), (n[e] = t));
    }
}
function Ce(e, t, n = !1) {
    const r = Ht();
    if (r || Jt) {
        let s = Jt
            ? Jt._context.provides
            : r
              ? r.parent == null || r.ce
                  ? r.vnode.appContext && r.vnode.appContext.provides
                  : r.parent.provides
              : void 0;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && z(t) ? t.call(r && r.proxy) : t;
    }
}
function $r() {
    return !!(Ht() || Jt);
}
const Ou = Symbol.for("v-scx"),
    Nu = () => Ce(Ou);
function Mu(e, t) {
    return lo(e, null, t);
}
function pn(e, t, n) {
    return lo(e, t, n);
}
function lo(e, t, n = fe) {
    const { immediate: r, deep: s, flush: o, once: i } = n,
        l = Ee({}, n),
        c = (t && r) || (!t && o !== "post");
    let u;
    if (En) {
        if (o === "sync") {
            const d = Nu();
            u = d.__watcherHandles || (d.__watcherHandles = []);
        } else if (!c) {
            const d = () => {};
            return ((d.stop = it), (d.resume = it), (d.pause = it), d);
        }
    }
    const a = Te;
    l.call = (d, _, v) => Ze(d, a, _, v);
    let f = !1;
    (o === "post"
        ? (l.scheduler = (d) => {
              we(d, a && a.suspense);
          })
        : o !== "sync" &&
          ((f = !0),
          (l.scheduler = (d, _) => {
              _ ? d() : so(d);
          })),
        (l.augmentJob = (d) => {
            (t && (d.flags |= 4),
                f && ((d.flags |= 2), a && ((d.id = a.uid), (d.i = a))));
        }));
    const h = nu(e, t, l);
    return (En && (u ? u.push(h) : c && h()), h);
}
function Iu(e, t, n) {
    const r = this.proxy,
        s = pe(e) ? (e.includes(".") ? Kl(r, e) : () => r[e]) : e.bind(r, r);
    let o;
    z(t) ? (o = t) : ((o = t.handler), (n = t));
    const i = Qt(this),
        l = lo(s, o.bind(r), n);
    return (i(), l);
}
function Kl(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r;
    };
}
const Lu = (e, t) =>
    t === "modelValue" || t === "model-value"
        ? e.modelModifiers
        : e[`${t}Modifiers`] ||
          e[`${qe(t)}Modifiers`] ||
          e[`${Zt(t)}Modifiers`];
function Hu(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || fe;
    let s = n;
    const o = t.startsWith("update:"),
        i = o && Lu(r, t.slice(7));
    i &&
        (i.trim && (s = n.map((a) => (pe(a) ? a.trim() : a))),
        i.number && (s = n.map(gc)));
    let l,
        c = r[(l = zr(t))] || r[(l = zr(qe(t)))];
    (!c && o && (c = r[(l = zr(Zt(t)))]), c && Ze(c, e, 6, s));
    const u = r[l + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        ((e.emitted[l] = !0), Ze(u, e, 6, s));
    }
}
const Du = new WeakMap();
function Gl(e, t, n = !1) {
    const r = n ? Du : t.emitsCache,
        s = r.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let i = {},
        l = !1;
    if (!z(e)) {
        const c = (u) => {
            const a = Gl(u, t, !0);
            a && ((l = !0), Ee(i, a));
        };
        (!n && t.mixins.length && t.mixins.forEach(c),
            e.extends && c(e.extends),
            e.mixins && e.mixins.forEach(c));
    }
    return !o && !l
        ? (le(e) && r.set(e, null), null)
        : (Y(o) ? o.forEach((c) => (i[c] = null)) : Ee(i, o),
          le(e) && r.set(e, i),
          i);
}
function Vr(e, t) {
    return !e || !Jn(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, "")),
          se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Zt(t)) || se(e, t));
}
function ss(e) {
    const {
            type: t,
            vnode: n,
            proxy: r,
            withProxy: s,
            propsOptions: [o],
            slots: i,
            attrs: l,
            emit: c,
            render: u,
            renderCache: a,
            props: f,
            data: h,
            setupState: d,
            ctx: _,
            inheritAttrs: v
        } = e,
        T = _r(e);
    let R, b;
    try {
        if (n.shapeFlag & 4) {
            const y = s || r,
                w = y;
            ((R = Fe(u.call(w, y, a, f, d, h, _))), (b = l));
        } else {
            const y = t;
            ((R = Fe(
                y.length > 1
                    ? y(f, { attrs: l, slots: i, emit: c })
                    : y(f, null)
            )),
                (b = t.props ? l : Fu(l)));
        }
    } catch (y) {
        ((jn.length = 0), Cn(y, e, 1), (R = _e(Re)));
    }
    let g = R;
    if (b && v !== !1) {
        const y = Object.keys(b),
            { shapeFlag: w } = g;
        y.length &&
            w & 7 &&
            (o && y.some(Ys) && (b = Bu(b, o)), (g = Ge(g, b, !1, !0)));
    }
    return (
        n.dirs &&
            ((g = Ge(g, null, !1, !0)),
            (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
        n.transition && vn(g, n.transition),
        (R = g),
        _r(T),
        R
    );
}
function ju(e, t = !0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (wn(s)) {
            if (s.type !== Re || s.children === "v-if") {
                if (n) return;
                n = s;
            }
        } else return;
    }
    return n;
}
const Fu = (e) => {
        let t;
        for (const n in e)
            (n === "class" || n === "style" || Jn(n)) &&
                ((t || (t = {}))[n] = e[n]);
        return t;
    },
    Bu = (e, t) => {
        const n = {};
        for (const r in e) (!Ys(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n;
    };
function Uu(e, t, n) {
    const { props: r, children: s, component: o } = e,
        { props: i, children: l, patchFlag: c } = t,
        u = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? Vo(r, i, u) : !!i;
        if (c & 8) {
            const a = t.dynamicProps;
            for (let f = 0; f < a.length; f++) {
                const h = a[f];
                if (i[h] !== r[h] && !Vr(u, h)) return !0;
            }
        }
    } else
        return (s || l) && (!l || !l.$stable)
            ? !0
            : r === i
              ? !1
              : r
                ? i
                    ? Vo(r, i, u)
                    : !0
                : !!i;
    return !1;
}
function Vo(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !Vr(n, o)) return !0;
    }
    return !1;
}
function Wr({ vnode: e, parent: t }, n) {
    for (; t; ) {
        const r = t.subTree;
        if (
            (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
            r === e)
        )
            (((e = t.vnode).el = n), (t = t.parent));
        else break;
    }
}
const ql = {},
    Jl = () => Object.create(ql),
    Yl = (e) => Object.getPrototypeOf(e) === ql;
function $u(e, t, n, r = !1) {
    const s = {},
        o = Jl();
    ((e.propsDefaults = Object.create(null)), zl(e, t, s, o));
    for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
    (n
        ? (e.props = r ? s : ot(s))
        : e.type.props
          ? (e.props = s)
          : (e.props = o),
        (e.attrs = o));
}
function Vu(e, t, n, r) {
    const {
            props: s,
            attrs: o,
            vnode: { patchFlag: i }
        } = e,
        l = ne(s),
        [c] = e.propsOptions;
    let u = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const a = e.vnode.dynamicProps;
            for (let f = 0; f < a.length; f++) {
                let h = a[f];
                if (Vr(e.emitsOptions, h)) continue;
                const d = t[h];
                if (c)
                    if (se(o, h)) d !== o[h] && ((o[h] = d), (u = !0));
                    else {
                        const _ = qe(h);
                        s[_] = xs(c, l, _, d, e, !1);
                    }
                else d !== o[h] && ((o[h] = d), (u = !0));
            }
        }
    } else {
        zl(e, t, s, o) && (u = !0);
        let a;
        for (const f in l)
            (!t || (!se(t, f) && ((a = Zt(f)) === f || !se(t, a)))) &&
                (c
                    ? n &&
                      (n[f] !== void 0 || n[a] !== void 0) &&
                      (s[f] = xs(c, l, f, void 0, e, !0))
                    : delete s[f]);
        if (o !== l)
            for (const f in o) (!t || !se(t, f)) && (delete o[f], (u = !0));
    }
    u && pt(e.attrs, "set", "");
}
function zl(e, t, n, r) {
    const [s, o] = e.propsOptions;
    let i = !1,
        l;
    if (t)
        for (let c in t) {
            if (fn(c)) continue;
            const u = t[c];
            let a;
            s && se(s, (a = qe(c)))
                ? !o || !o.includes(a)
                    ? (n[a] = u)
                    : ((l || (l = {}))[a] = u)
                : Vr(e.emitsOptions, c) ||
                  ((!(c in r) || u !== r[c]) && ((r[c] = u), (i = !0)));
        }
    if (o) {
        const c = ne(n),
            u = l || fe;
        for (let a = 0; a < o.length; a++) {
            const f = o[a];
            n[f] = xs(s, c, f, u[f], e, !se(u, f));
        }
    }
    return i;
}
function xs(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const l = se(i, "default");
        if (l && r === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && z(c)) {
                const { propsDefaults: u } = s;
                if (n in u) r = u[n];
                else {
                    const a = Qt(s);
                    ((r = u[n] = c.call(null, t)), a());
                }
            } else r = c;
            s.ce && s.ce._setProp(n, r);
        }
        i[0] &&
            (o && !l
                ? (r = !1)
                : i[1] && (r === "" || r === Zt(n)) && (r = !0));
    }
    return r;
}
const Wu = new WeakMap();
function Ql(e, t, n = !1) {
    const r = n ? Wu : t.propsCache,
        s = r.get(e);
    if (s) return s;
    const o = e.props,
        i = {},
        l = [];
    let c = !1;
    if (!z(e)) {
        const a = (f) => {
            c = !0;
            const [h, d] = Ql(f, t, !0);
            (Ee(i, h), d && l.push(...d));
        };
        (!n && t.mixins.length && t.mixins.forEach(a),
            e.extends && a(e.extends),
            e.mixins && e.mixins.forEach(a));
    }
    if (!o && !c) return (le(e) && r.set(e, cn), cn);
    if (Y(o))
        for (let a = 0; a < o.length; a++) {
            const f = qe(o[a]);
            Wo(f) && (i[f] = fe);
        }
    else if (o)
        for (const a in o) {
            const f = qe(a);
            if (Wo(f)) {
                const h = o[a],
                    d = (i[f] = Y(h) || z(h) ? { type: h } : Ee({}, h)),
                    _ = d.type;
                let v = !1,
                    T = !0;
                if (Y(_))
                    for (let R = 0; R < _.length; ++R) {
                        const b = _[R],
                            g = z(b) && b.name;
                        if (g === "Boolean") {
                            v = !0;
                            break;
                        } else g === "String" && (T = !1);
                    }
                else v = z(_) && _.name === "Boolean";
                ((d[0] = v), (d[1] = T), (v || se(d, "default")) && l.push(f));
            }
        }
    const u = [i, l];
    return (le(e) && r.set(e, u), u);
}
function Wo(e) {
    return e[0] !== "$" && !fn(e);
}
const ao = (e) => e === "_" || e === "_ctx" || e === "$stable",
    co = (e) => (Y(e) ? e.map(Fe) : [Fe(e)]),
    Ku = (e, t, n) => {
        if (t._n) return t;
        const r = oo((...s) => co(t(...s)), n);
        return ((r._c = !1), r);
    },
    Xl = (e, t, n) => {
        const r = e._ctx;
        for (const s in e) {
            if (ao(s)) continue;
            const o = e[s];
            if (z(o)) t[s] = Ku(s, o, r);
            else if (o != null) {
                const i = co(o);
                t[s] = () => i;
            }
        }
    },
    Zl = (e, t) => {
        const n = co(t);
        e.slots.default = () => n;
    },
    ea = (e, t, n) => {
        for (const r in t) (n || !ao(r)) && (e[r] = t[r]);
    },
    Gu = (e, t, n) => {
        const r = (e.slots = Jl());
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (ea(r, t, n), n && tl(r, "_", s, !0)) : Xl(t, r);
        } else t && Zl(e, t);
    },
    qu = (e, t, n) => {
        const { vnode: r, slots: s } = e;
        let o = !0,
            i = fe;
        if (r.shapeFlag & 32) {
            const l = t._;
            (l
                ? n && l === 1
                    ? (o = !1)
                    : ea(s, t, n)
                : ((o = !t.$stable), Xl(t, s)),
                (i = t));
        } else t && (Zl(e, t), (i = { default: 1 }));
        if (o) for (const l in s) !ao(l) && i[l] == null && delete s[l];
    },
    we = ia;
function Ju(e) {
    return ta(e);
}
function Yu(e) {
    return ta(e, fu);
}
function ta(e, t) {
    const n = Hr();
    n.__VUE__ = !0;
    const {
            insert: r,
            remove: s,
            patchProp: o,
            createElement: i,
            createText: l,
            createComment: c,
            setText: u,
            setElementText: a,
            parentNode: f,
            nextSibling: h,
            setScopeId: d = it,
            insertStaticContent: _
        } = e,
        v = (
            p,
            m,
            E,
            x = null,
            C = null,
            P = null,
            D = void 0,
            H = null,
            I = !!m.dynamicChildren
        ) => {
            if (p === m) return;
            (p && !Ye(p, m) && ((x = A(p)), Ne(p, C, P, !0), (p = null)),
                m.patchFlag === -2 && ((I = !1), (m.dynamicChildren = null)));
            const { type: k, ref: J, shapeFlag: F } = m;
            switch (k) {
                case Yt:
                    T(p, m, E, x);
                    break;
                case Re:
                    R(p, m, E, x);
                    break;
                case Dn:
                    p == null && b(m, E, x, D);
                    break;
                case je:
                    O(p, m, E, x, C, P, D, H, I);
                    break;
                default:
                    F & 1
                        ? w(p, m, E, x, C, P, D, H, I)
                        : F & 6
                          ? K(p, m, E, x, C, P, D, H, I)
                          : (F & 64 || F & 128) &&
                            k.process(p, m, E, x, C, P, D, H, I, q);
            }
            J != null && C
                ? hn(J, p && p.ref, P, m || p, !m)
                : J == null && p && p.ref != null && hn(p.ref, null, P, p, !0);
        },
        T = (p, m, E, x) => {
            if (p == null) r((m.el = l(m.children)), E, x);
            else {
                const C = (m.el = p.el);
                m.children !== p.children && u(C, m.children);
            }
        },
        R = (p, m, E, x) => {
            p == null ? r((m.el = c(m.children || "")), E, x) : (m.el = p.el);
        },
        b = (p, m, E, x) => {
            [p.el, p.anchor] = _(p.children, m, E, x, p.el, p.anchor);
        },
        g = ({ el: p, anchor: m }, E, x) => {
            let C;
            for (; p && p !== m; ) ((C = h(p)), r(p, E, x), (p = C));
            r(m, E, x);
        },
        y = ({ el: p, anchor: m }) => {
            let E;
            for (; p && p !== m; ) ((E = h(p)), s(p), (p = E));
            s(m);
        },
        w = (p, m, E, x, C, P, D, H, I) => {
            if (
                (m.type === "svg"
                    ? (D = "svg")
                    : m.type === "math" && (D = "mathml"),
                p == null)
            )
                S(m, E, x, C, P, D, H, I);
            else {
                const k = p.el && p.el._isVueCE ? p.el : null;
                try {
                    (k && k._beginPatch(), M(p, m, C, P, D, H, I));
                } finally {
                    k && k._endPatch();
                }
            }
        },
        S = (p, m, E, x, C, P, D, H) => {
            let I, k;
            const { props: J, shapeFlag: F, transition: G, dirs: X } = p;
            if (
                ((I = p.el = i(p.type, P, J && J.is, J)),
                F & 8
                    ? a(I, p.children)
                    : F & 16 && V(p.children, I, null, x, C, os(p, P), D, H),
                X && st(p, null, x, "created"),
                L(I, p, p.scopeId, D, x),
                J)
            ) {
                for (const ae in J)
                    ae !== "value" && !fn(ae) && o(I, ae, null, J[ae], P, x);
                ("value" in J && o(I, "value", null, J.value, P),
                    (k = J.onVnodeBeforeMount) && Ie(k, x, p));
            }
            X && st(p, null, x, "beforeMount");
            const te = na(C, G);
            (te && G.beforeEnter(I),
                r(I, m, E),
                ((k = J && J.onVnodeMounted) || te || X) &&
                    we(() => {
                        (k && Ie(k, x, p),
                            te && G.enter(I),
                            X && st(p, null, x, "mounted"));
                    }, C));
        },
        L = (p, m, E, x, C) => {
            if ((E && d(p, E), x))
                for (let P = 0; P < x.length; P++) d(p, x[P]);
            if (C) {
                let P = C.subTree;
                if (
                    m === P ||
                    (Er(P.type) && (P.ssContent === m || P.ssFallback === m))
                ) {
                    const D = C.vnode;
                    L(p, D, D.scopeId, D.slotScopeIds, C.parent);
                }
            }
        },
        V = (p, m, E, x, C, P, D, H, I = 0) => {
            for (let k = I; k < p.length; k++) {
                const J = (p[k] = H ? St(p[k]) : Fe(p[k]));
                v(null, J, m, E, x, C, P, D, H);
            }
        },
        M = (p, m, E, x, C, P, D) => {
            const H = (m.el = p.el);
            let { patchFlag: I, dynamicChildren: k, dirs: J } = m;
            I |= p.patchFlag & 16;
            const F = p.props || fe,
                G = m.props || fe;
            let X;
            if (
                (E && jt(E, !1),
                (X = G.onVnodeBeforeUpdate) && Ie(X, E, m, p),
                J && st(m, p, E, "beforeUpdate"),
                E && jt(E, !0),
                ((F.innerHTML && G.innerHTML == null) ||
                    (F.textContent && G.textContent == null)) &&
                    a(H, ""),
                k
                    ? N(p.dynamicChildren, k, H, E, x, os(m, C), P)
                    : D || B(p, m, H, null, E, x, os(m, C), P, !1),
                I > 0)
            ) {
                if (I & 16) W(H, F, G, E, C);
                else if (
                    (I & 2 &&
                        F.class !== G.class &&
                        o(H, "class", null, G.class, C),
                    I & 4 && o(H, "style", F.style, G.style, C),
                    I & 8)
                ) {
                    const te = m.dynamicProps;
                    for (let ae = 0; ae < te.length; ae++) {
                        const oe = te[ae],
                            Me = F[oe],
                            Ae = G[oe];
                        (Ae !== Me || oe === "value") && o(H, oe, Me, Ae, C, E);
                    }
                }
                I & 1 && p.children !== m.children && a(H, m.children);
            } else !D && k == null && W(H, F, G, E, C);
            ((X = G.onVnodeUpdated) || J) &&
                we(() => {
                    (X && Ie(X, E, m, p), J && st(m, p, E, "updated"));
                }, x);
        },
        N = (p, m, E, x, C, P, D) => {
            for (let H = 0; H < m.length; H++) {
                const I = p[H],
                    k = m[H],
                    J =
                        I.el &&
                        (I.type === je || !Ye(I, k) || I.shapeFlag & 198)
                            ? f(I.el)
                            : E;
                v(I, k, J, null, x, C, P, D, !0);
            }
        },
        W = (p, m, E, x, C) => {
            if (m !== E) {
                if (m !== fe)
                    for (const P in m)
                        !fn(P) && !(P in E) && o(p, P, m[P], null, C, x);
                for (const P in E) {
                    if (fn(P)) continue;
                    const D = E[P],
                        H = m[P];
                    D !== H && P !== "value" && o(p, P, H, D, C, x);
                }
                "value" in E && o(p, "value", m.value, E.value, C);
            }
        },
        O = (p, m, E, x, C, P, D, H, I) => {
            const k = (m.el = p ? p.el : l("")),
                J = (m.anchor = p ? p.anchor : l(""));
            let { patchFlag: F, dynamicChildren: G, slotScopeIds: X } = m;
            (X && (H = H ? H.concat(X) : X),
                p == null
                    ? (r(k, E, x),
                      r(J, E, x),
                      V(m.children || [], E, J, C, P, D, H, I))
                    : F > 0 && F & 64 && G && p.dynamicChildren
                      ? (N(p.dynamicChildren, G, E, C, P, D, H),
                        (m.key != null || (C && m === C.subTree)) &&
                            ra(p, m, !0))
                      : B(p, m, E, J, C, P, D, H, I));
        },
        K = (p, m, E, x, C, P, D, H, I) => {
            ((m.slotScopeIds = H),
                p == null
                    ? m.shapeFlag & 512
                        ? C.ctx.activate(m, E, x, D, I)
                        : ee(m, E, x, C, P, D, I)
                    : ie(p, m, I));
        },
        ee = (p, m, E, x, C, P, D) => {
            const H = (p.component = cf(p, x, C));
            if ((Qn(p) && (H.ctx.renderer = q), uf(H, !1, D), H.asyncDep)) {
                if ((C && C.registerDep(H, $, D), !p.el)) {
                    const I = (H.subTree = _e(Re));
                    (R(null, I, m, E), (p.placeholder = I.el));
                }
            } else $(H, p, m, E, C, P, D);
        },
        ie = (p, m, E) => {
            const x = (m.component = p.component);
            if (Uu(p, m, E))
                if (x.asyncDep && !x.asyncResolved) {
                    Q(x, m, E);
                    return;
                } else ((x.next = m), x.update());
            else ((m.el = p.el), (x.vnode = m));
        },
        $ = (p, m, E, x, C, P, D) => {
            const H = () => {
                if (p.isMounted) {
                    let { next: F, bu: G, u: X, parent: te, vnode: ae } = p;
                    {
                        const He = sa(p);
                        if (He) {
                            (F && ((F.el = ae.el), Q(p, F, D)),
                                He.asyncDep.then(() => {
                                    p.isUnmounted || H();
                                }));
                            return;
                        }
                    }
                    let oe = F,
                        Me;
                    (jt(p, !1),
                        F ? ((F.el = ae.el), Q(p, F, D)) : (F = ae),
                        G && Mn(G),
                        (Me = F.props && F.props.onVnodeBeforeUpdate) &&
                            Ie(Me, te, F, ae),
                        jt(p, !0));
                    const Ae = ss(p),
                        Je = p.subTree;
                    ((p.subTree = Ae),
                        v(Je, Ae, f(Je.el), A(Je), p, C, P),
                        (F.el = Ae.el),
                        oe === null && Wr(p, Ae.el),
                        X && we(X, C),
                        (Me = F.props && F.props.onVnodeUpdated) &&
                            we(() => Ie(Me, te, F, ae), C));
                } else {
                    let F;
                    const { el: G, props: X } = m,
                        { bm: te, m: ae, parent: oe, root: Me, type: Ae } = p,
                        Je = qt(m);
                    if (
                        (jt(p, !1),
                        te && Mn(te),
                        !Je && (F = X && X.onVnodeBeforeMount) && Ie(F, oe, m),
                        jt(p, !0),
                        G && he)
                    ) {
                        const He = () => {
                            ((p.subTree = ss(p)), he(G, p.subTree, p, C, null));
                        };
                        Je && Ae.__asyncHydrate
                            ? Ae.__asyncHydrate(G, p, He)
                            : He();
                    } else {
                        Me.ce &&
                            Me.ce._def.shadowRoot !== !1 &&
                            Me.ce._injectChildStyle(Ae);
                        const He = (p.subTree = ss(p));
                        (v(null, He, E, x, p, C, P), (m.el = He.el));
                    }
                    if ((ae && we(ae, C), !Je && (F = X && X.onVnodeMounted))) {
                        const He = m;
                        we(() => Ie(F, oe, He), C);
                    }
                    ((m.shapeFlag & 256 ||
                        (oe && qt(oe.vnode) && oe.vnode.shapeFlag & 256)) &&
                        p.a &&
                        we(p.a, C),
                        (p.isMounted = !0),
                        (m = E = x = null));
                }
            };
            p.scope.on();
            const I = (p.effect = new ll(H));
            p.scope.off();
            const k = (p.update = I.run.bind(I)),
                J = (p.job = I.runIfDirty.bind(I));
            ((J.i = p),
                (J.id = p.uid),
                (I.scheduler = () => so(J)),
                jt(p, !0),
                k());
        },
        Q = (p, m, E) => {
            m.component = p;
            const x = p.vnode.props;
            ((p.vnode = m),
                (p.next = null),
                Vu(p, m.props, x, E),
                qu(p, m.children, E),
                mt(),
                No(p),
                yt());
        },
        B = (p, m, E, x, C, P, D, H, I = !1) => {
            const k = p && p.children,
                J = p ? p.shapeFlag : 0,
                F = m.children,
                { patchFlag: G, shapeFlag: X } = m;
            if (G > 0) {
                if (G & 128) {
                    Et(k, F, E, x, C, P, D, H, I);
                    return;
                } else if (G & 256) {
                    de(k, F, E, x, C, P, D, H, I);
                    return;
                }
            }
            X & 8
                ? (J & 16 && $e(k, C, P), F !== k && a(E, F))
                : J & 16
                  ? X & 16
                      ? Et(k, F, E, x, C, P, D, H, I)
                      : $e(k, C, P, !0)
                  : (J & 8 && a(E, ""), X & 16 && V(F, E, x, C, P, D, H, I));
        },
        de = (p, m, E, x, C, P, D, H, I) => {
            ((p = p || cn), (m = m || cn));
            const k = p.length,
                J = m.length,
                F = Math.min(k, J);
            let G;
            for (G = 0; G < F; G++) {
                const X = (m[G] = I ? St(m[G]) : Fe(m[G]));
                v(p[G], X, E, null, C, P, D, H, I);
            }
            k > J ? $e(p, C, P, !0, !1, F) : V(m, E, x, C, P, D, H, I, F);
        },
        Et = (p, m, E, x, C, P, D, H, I) => {
            let k = 0;
            const J = m.length;
            let F = p.length - 1,
                G = J - 1;
            for (; k <= F && k <= G; ) {
                const X = p[k],
                    te = (m[k] = I ? St(m[k]) : Fe(m[k]));
                if (Ye(X, te)) v(X, te, E, null, C, P, D, H, I);
                else break;
                k++;
            }
            for (; k <= F && k <= G; ) {
                const X = p[F],
                    te = (m[G] = I ? St(m[G]) : Fe(m[G]));
                if (Ye(X, te)) v(X, te, E, null, C, P, D, H, I);
                else break;
                (F--, G--);
            }
            if (k > F) {
                if (k <= G) {
                    const X = G + 1,
                        te = X < J ? m[X].el : x;
                    for (; k <= G; )
                        (v(
                            null,
                            (m[k] = I ? St(m[k]) : Fe(m[k])),
                            E,
                            te,
                            C,
                            P,
                            D,
                            H,
                            I
                        ),
                            k++);
                }
            } else if (k > G) for (; k <= F; ) (Ne(p[k], C, P, !0), k++);
            else {
                const X = k,
                    te = k,
                    ae = new Map();
                for (k = te; k <= G; k++) {
                    const De = (m[k] = I ? St(m[k]) : Fe(m[k]));
                    De.key != null && ae.set(De.key, k);
                }
                let oe,
                    Me = 0;
                const Ae = G - te + 1;
                let Je = !1,
                    He = 0;
                const An = new Array(Ae);
                for (k = 0; k < Ae; k++) An[k] = 0;
                for (k = X; k <= F; k++) {
                    const De = p[k];
                    if (Me >= Ae) {
                        Ne(De, C, P, !0);
                        continue;
                    }
                    let nt;
                    if (De.key != null) nt = ae.get(De.key);
                    else
                        for (oe = te; oe <= G; oe++)
                            if (An[oe - te] === 0 && Ye(De, m[oe])) {
                                nt = oe;
                                break;
                            }
                    nt === void 0
                        ? Ne(De, C, P, !0)
                        : ((An[nt - te] = k + 1),
                          nt >= He ? (He = nt) : (Je = !0),
                          v(De, m[nt], E, null, C, P, D, H, I),
                          Me++);
                }
                const Ao = Je ? zu(An) : cn;
                for (oe = Ao.length - 1, k = Ae - 1; k >= 0; k--) {
                    const De = te + k,
                        nt = m[De],
                        So = m[De + 1],
                        xo = De + 1 < J ? So.el || So.placeholder : x;
                    An[k] === 0
                        ? v(null, nt, E, xo, C, P, D, H, I)
                        : Je &&
                          (oe < 0 || k !== Ao[oe] ? tt(nt, E, xo, 2) : oe--);
                }
            }
        },
        tt = (p, m, E, x, C = null) => {
            const {
                el: P,
                type: D,
                transition: H,
                children: I,
                shapeFlag: k
            } = p;
            if (k & 6) {
                tt(p.component.subTree, m, E, x);
                return;
            }
            if (k & 128) {
                p.suspense.move(m, E, x);
                return;
            }
            if (k & 64) {
                D.move(p, m, E, q);
                return;
            }
            if (D === je) {
                r(P, m, E);
                for (let F = 0; F < I.length; F++) tt(I[F], m, E, x);
                r(p.anchor, m, E);
                return;
            }
            if (D === Dn) {
                g(p, m, E);
                return;
            }
            if (x !== 2 && k & 1 && H)
                if (x === 0)
                    (H.beforeEnter(P), r(P, m, E), we(() => H.enter(P), C));
                else {
                    const { leave: F, delayLeave: G, afterLeave: X } = H,
                        te = () => {
                            p.ctx.isUnmounted ? s(P) : r(P, m, E);
                        },
                        ae = () => {
                            (P._isLeaving && P[dt](!0),
                                F(P, () => {
                                    (te(), X && X());
                                }));
                        };
                    G ? G(P, te, ae) : ae();
                }
            else r(P, m, E);
        },
        Ne = (p, m, E, x = !1, C = !1) => {
            const {
                type: P,
                props: D,
                ref: H,
                children: I,
                dynamicChildren: k,
                shapeFlag: J,
                patchFlag: F,
                dirs: G,
                cacheIndex: X
            } = p;
            if (
                (F === -2 && (C = !1),
                H != null && (mt(), hn(H, null, E, p, !0), yt()),
                X != null && (m.renderCache[X] = void 0),
                J & 256)
            ) {
                m.ctx.deactivate(p);
                return;
            }
            const te = J & 1 && G,
                ae = !qt(p);
            let oe;
            if (
                (ae && (oe = D && D.onVnodeBeforeUnmount) && Ie(oe, m, p),
                J & 6)
            )
                Dt(p.component, E, x);
            else {
                if (J & 128) {
                    p.suspense.unmount(E, x);
                    return;
                }
                (te && st(p, null, m, "beforeUnmount"),
                    J & 64
                        ? p.type.remove(p, m, E, q, x)
                        : k && !k.hasOnce && (P !== je || (F > 0 && F & 64))
                          ? $e(k, m, E, !1, !0)
                          : ((P === je && F & 384) || (!C && J & 16)) &&
                            $e(I, m, E),
                    x && tn(p));
            }
            ((ae && (oe = D && D.onVnodeUnmounted)) || te) &&
                we(() => {
                    (oe && Ie(oe, m, p), te && st(p, null, m, "unmounted"));
                }, E);
        },
        tn = (p) => {
            const { type: m, el: E, anchor: x, transition: C } = p;
            if (m === je) {
                nn(E, x);
                return;
            }
            if (m === Dn) {
                y(p);
                return;
            }
            const P = () => {
                (s(E), C && !C.persisted && C.afterLeave && C.afterLeave());
            };
            if (p.shapeFlag & 1 && C && !C.persisted) {
                const { leave: D, delayLeave: H } = C,
                    I = () => D(E, P);
                H ? H(p.el, P, I) : I();
            } else P();
        },
        nn = (p, m) => {
            let E;
            for (; p !== m; ) ((E = h(p)), s(p), (p = E));
            s(m);
        },
        Dt = (p, m, E) => {
            const {
                bum: x,
                scope: C,
                job: P,
                subTree: D,
                um: H,
                m: I,
                a: k
            } = p;
            (wr(I),
                wr(k),
                x && Mn(x),
                C.stop(),
                P && ((P.flags |= 8), Ne(D, p, m, E)),
                H && we(H, m),
                we(() => {
                    p.isUnmounted = !0;
                }, m));
        },
        $e = (p, m, E, x = !1, C = !1, P = 0) => {
            for (let D = P; D < p.length; D++) Ne(p[D], m, E, x, C);
        },
        A = (p) => {
            if (p.shapeFlag & 6) return A(p.component.subTree);
            if (p.shapeFlag & 128) return p.suspense.next();
            const m = h(p.anchor || p.el),
                E = m && m[ou];
            return E ? h(E) : m;
        };
    let U = !1;
    const j = (p, m, E) => {
            (p == null
                ? m._vnode && Ne(m._vnode, null, null, !0)
                : v(m._vnode || null, p, m, null, null, null, E),
                (m._vnode = p),
                U || ((U = !0), No(), yr(), (U = !1)));
        },
        q = {
            p: v,
            um: Ne,
            m: tt,
            r: tn,
            mt: ee,
            mc: V,
            pc: B,
            pbc: N,
            n: A,
            o: e
        };
    let Z, he;
    return (
        t && ([Z, he] = t(q)),
        { render: j, hydrate: Z, createApp: ku(j, Z) }
    );
}
function os({ type: e, props: t }, n) {
    return (n === "svg" && e === "foreignObject") ||
        (n === "mathml" &&
            e === "annotation-xml" &&
            t &&
            t.encoding &&
            t.encoding.includes("html"))
        ? void 0
        : n;
}
function jt({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function na(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ra(e, t, n = !1) {
    const r = e.children,
        s = t.children;
    if (Y(r) && Y(s))
        for (let o = 0; o < r.length; o++) {
            const i = r[o];
            let l = s[o];
            (l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) &&
                    ((l = s[o] = St(s[o])), (l.el = i.el)),
                !n && l.patchFlag !== -2 && ra(i, l)),
                l.type === Yt && l.patchFlag !== -1 && (l.el = i.el),
                l.type === Re && !l.el && (l.el = i.el));
        }
}
function zu(e) {
    const t = e.slice(),
        n = [0];
    let r, s, o, i, l;
    const c = e.length;
    for (r = 0; r < c; r++) {
        const u = e[r];
        if (u !== 0) {
            if (((s = n[n.length - 1]), e[s] < u)) {
                ((t[r] = s), n.push(r));
                continue;
            }
            for (o = 0, i = n.length - 1; o < i; )
                ((l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l));
            u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0; ) ((n[o] = i), (i = t[i]));
    return n;
}
function sa(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : sa(t);
}
function wr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Er = (e) => e.__isSuspense;
let Ps = 0;
const Qu = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, s, o, i, l, c, u) {
            if (e == null) Xu(t, n, r, s, o, i, l, c, u);
            else {
                if (o && o.deps > 0 && !e.suspense.isInFallback) {
                    ((t.suspense = e.suspense),
                        (t.suspense.vnode = t),
                        (t.el = e.el));
                    return;
                }
                Zu(e, t, n, r, s, i, l, c, u);
            }
        },
        hydrate: ef,
        normalize: tf
    },
    uo = Qu;
function Kn(e, t) {
    const n = e.props && e.props[t];
    z(n) && n();
}
function Xu(e, t, n, r, s, o, i, l, c) {
    const {
            p: u,
            o: { createElement: a }
        } = c,
        f = a("div"),
        h = (e.suspense = oa(e, s, r, t, f, n, o, i, l, c));
    (u(null, (h.pendingBranch = e.ssContent), f, null, r, h, o, i),
        h.deps > 0
            ? (Kn(e, "onPending"),
              Kn(e, "onFallback"),
              u(null, e.ssFallback, t, n, r, null, o, i),
              gn(h, e.ssFallback))
            : h.resolve(!1, !0));
}
function Zu(e, t, n, r, s, o, i, l, { p: c, um: u, o: { createElement: a } }) {
    const f = (t.suspense = e.suspense);
    ((f.vnode = t), (t.el = e.el));
    const h = t.ssContent,
        d = t.ssFallback,
        {
            activeBranch: _,
            pendingBranch: v,
            isInFallback: T,
            isHydrating: R
        } = f;
    if (v)
        ((f.pendingBranch = h),
            Ye(v, h)
                ? (c(v, h, f.hiddenContainer, null, s, f, o, i, l),
                  f.deps <= 0
                      ? f.resolve()
                      : T && (R || (c(_, d, n, r, s, null, o, i, l), gn(f, d))))
                : ((f.pendingId = Ps++),
                  R ? ((f.isHydrating = !1), (f.activeBranch = v)) : u(v, s, f),
                  (f.deps = 0),
                  (f.effects.length = 0),
                  (f.hiddenContainer = a("div")),
                  T
                      ? (c(null, h, f.hiddenContainer, null, s, f, o, i, l),
                        f.deps <= 0
                            ? f.resolve()
                            : (c(_, d, n, r, s, null, o, i, l), gn(f, d)))
                      : _ && Ye(_, h)
                        ? (c(_, h, n, r, s, f, o, i, l), f.resolve(!0))
                        : (c(null, h, f.hiddenContainer, null, s, f, o, i, l),
                          f.deps <= 0 && f.resolve())));
    else if (_ && Ye(_, h)) (c(_, h, n, r, s, f, o, i, l), gn(f, h));
    else if (
        (Kn(t, "onPending"),
        (f.pendingBranch = h),
        h.shapeFlag & 512
            ? (f.pendingId = h.component.suspenseId)
            : (f.pendingId = Ps++),
        c(null, h, f.hiddenContainer, null, s, f, o, i, l),
        f.deps <= 0)
    )
        f.resolve();
    else {
        const { timeout: b, pendingId: g } = f;
        b > 0
            ? setTimeout(() => {
                  f.pendingId === g && f.fallback(d);
              }, b)
            : b === 0 && f.fallback(d);
    }
}
function oa(e, t, n, r, s, o, i, l, c, u, a = !1) {
    const {
        p: f,
        m: h,
        um: d,
        n: _,
        o: { parentNode: v, remove: T }
    } = u;
    let R;
    const b = nf(e);
    b && t && t.pendingBranch && ((R = t.pendingId), t.deps++);
    const g = e.props ? nl(e.props.timeout) : void 0,
        y = o,
        w = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: i,
            container: r,
            hiddenContainer: s,
            deps: 0,
            pendingId: Ps++,
            timeout: typeof g == "number" ? g : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !a,
            isHydrating: a,
            isUnmounted: !1,
            effects: [],
            resolve(S = !1, L = !1) {
                const {
                    vnode: V,
                    activeBranch: M,
                    pendingBranch: N,
                    pendingId: W,
                    effects: O,
                    parentComponent: K,
                    container: ee,
                    isInFallback: ie
                } = w;
                let $ = !1;
                (w.isHydrating
                    ? (w.isHydrating = !1)
                    : S ||
                      (($ =
                          M && N.transition && N.transition.mode === "out-in"),
                      $ &&
                          (M.transition.afterLeave = () => {
                              W === w.pendingId &&
                                  (h(N, ee, o === y ? _(M) : o, 0),
                                  Rs(O),
                                  ie &&
                                      V.ssFallback &&
                                      (V.ssFallback.el = null));
                          }),
                      M &&
                          (v(M.el) === ee && (o = _(M)),
                          d(M, K, w, !0),
                          !$ &&
                              ie &&
                              V.ssFallback &&
                              we(() => (V.ssFallback.el = null), w)),
                      $ || h(N, ee, o, 0)),
                    gn(w, N),
                    (w.pendingBranch = null),
                    (w.isInFallback = !1));
                let Q = w.parent,
                    B = !1;
                for (; Q; ) {
                    if (Q.pendingBranch) {
                        (Q.effects.push(...O), (B = !0));
                        break;
                    }
                    Q = Q.parent;
                }
                (!B && !$ && Rs(O),
                    (w.effects = []),
                    b &&
                        t &&
                        t.pendingBranch &&
                        R === t.pendingId &&
                        (t.deps--, t.deps === 0 && !L && t.resolve()),
                    Kn(V, "onResolve"));
            },
            fallback(S) {
                if (!w.pendingBranch) return;
                const {
                    vnode: L,
                    activeBranch: V,
                    parentComponent: M,
                    container: N,
                    namespace: W
                } = w;
                Kn(L, "onFallback");
                const O = _(V),
                    K = () => {
                        w.isInFallback &&
                            (f(null, S, N, O, M, null, W, l, c), gn(w, S));
                    },
                    ee = S.transition && S.transition.mode === "out-in";
                (ee && (V.transition.afterLeave = K),
                    (w.isInFallback = !0),
                    d(V, M, null, !0),
                    ee || K());
            },
            move(S, L, V) {
                (w.activeBranch && h(w.activeBranch, S, L, V),
                    (w.container = S));
            },
            next() {
                return w.activeBranch && _(w.activeBranch);
            },
            registerDep(S, L, V) {
                const M = !!w.pendingBranch;
                M && w.deps++;
                const N = S.vnode.el;
                S.asyncDep
                    .catch((W) => {
                        Cn(W, S, 0);
                    })
                    .then((W) => {
                        if (
                            S.isUnmounted ||
                            w.isUnmounted ||
                            w.pendingId !== S.suspenseId
                        )
                            return;
                        S.asyncResolved = !0;
                        const { vnode: O } = S;
                        (Ns(S, W), N && (O.el = N));
                        const K = !N && S.subTree.el;
                        (L(
                            S,
                            O,
                            v(N || S.subTree.el),
                            N ? null : _(S.subTree),
                            w,
                            i,
                            V
                        ),
                            K && ((O.placeholder = null), T(K)),
                            Wr(S, O.el),
                            M && --w.deps === 0 && w.resolve());
                    });
            },
            unmount(S, L) {
                ((w.isUnmounted = !0),
                    w.activeBranch && d(w.activeBranch, n, S, L),
                    w.pendingBranch && d(w.pendingBranch, n, S, L));
            }
        };
    return w;
}
function ef(e, t, n, r, s, o, i, l, c) {
    const u = (t.suspense = oa(
            t,
            r,
            n,
            e.parentNode,
            document.createElement("div"),
            null,
            s,
            o,
            i,
            l,
            !0
        )),
        a = c(e, (u.pendingBranch = t.ssContent), n, u, o, i);
    return (u.deps === 0 && u.resolve(!1, !0), a);
}
function tf(e) {
    const { shapeFlag: t, children: n } = e,
        r = t & 32;
    ((e.ssContent = Ko(r ? n.default : n)),
        (e.ssFallback = r ? Ko(n.fallback) : _e(Re)));
}
function Ko(e) {
    let t;
    if (z(e)) {
        const n = bn && e._c;
        (n && ((e._d = !1), ht()),
            (e = e()),
            n && ((e._d = !0), (t = Le), la()));
    }
    return (
        Y(e) && (e = ju(e)),
        (e = Fe(e)),
        t &&
            !e.dynamicChildren &&
            (e.dynamicChildren = t.filter((n) => n !== e)),
        e
    );
}
function ia(e, t) {
    t && t.pendingBranch
        ? Y(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : Rs(e);
}
function gn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let s = t.el;
    for (; !s && t.component; ) ((t = t.component.subTree), (s = t.el));
    ((n.el = s), r && r.subTree === n && ((r.vnode.el = s), Wr(r, s)));
}
function nf(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1;
}
const je = Symbol.for("v-fgt"),
    Yt = Symbol.for("v-txt"),
    Re = Symbol.for("v-cmt"),
    Dn = Symbol.for("v-stc"),
    jn = [];
let Le = null;
function ht(e = !1) {
    jn.push((Le = e ? null : []));
}
function la() {
    (jn.pop(), (Le = jn[jn.length - 1] || null));
}
let bn = 1;
function Rr(e, t = !1) {
    ((bn += e), e < 0 && Le && t && (Le.hasOnce = !0));
}
function aa(e) {
    return (
        (e.dynamicChildren = bn > 0 ? Le || cn : null),
        la(),
        bn > 0 && Le && Le.push(e),
        e
    );
}
function rf(e, t, n, r, s, o) {
    return aa(ua(e, t, n, r, s, o, !0));
}
function Wt(e, t, n, r, s) {
    return aa(_e(e, t, n, r, s, !0));
}
function wn(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function Ye(e, t) {
    return e.type === t.type && e.key === t.key;
}
const ca = ({ key: e }) => e ?? null,
    ur = ({ ref: e, ref_key: t, ref_for: n }) => (
        typeof e == "number" && (e = "" + e),
        e != null
            ? pe(e) || ve(e) || z(e)
                ? { i: ze, r: e, k: t, f: !!n }
                : e
            : null
    );
function ua(
    e,
    t = null,
    n = null,
    r = 0,
    s = null,
    o = e === je ? 0 : 1,
    i = !1,
    l = !1
) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && ca(t),
        ref: t && ur(t),
        scopeId: Al,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: ze
    };
    return (
        l
            ? (fo(c, n), o & 128 && e.normalize(c))
            : n && (c.shapeFlag |= pe(n) ? 8 : 16),
        bn > 0 &&
            !i &&
            Le &&
            (c.patchFlag > 0 || o & 6) &&
            c.patchFlag !== 32 &&
            Le.push(c),
        c
    );
}
const _e = sf;
function sf(e, t = null, n = null, r = 0, s = null, o = !1) {
    if (((!e || e === Bl) && (e = Re), wn(e))) {
        const l = Ge(e, t, !0);
        return (
            n && fo(l, n),
            bn > 0 &&
                !o &&
                Le &&
                (l.shapeFlag & 6 ? (Le[Le.indexOf(e)] = l) : Le.push(l)),
            (l.patchFlag = -2),
            l
        );
    }
    if ((pf(e) && (e = e.__vccOpts), t)) {
        t = fa(t);
        let { class: l, style: c } = t;
        (l && !pe(l) && (t.class = jr(l)),
            le(c) && (Br(c) && !Y(c) && (c = Ee({}, c)), (t.style = Dr(c))));
    }
    const i = pe(e) ? 1 : Er(e) ? 128 : Sl(e) ? 64 : le(e) ? 4 : z(e) ? 2 : 0;
    return ua(e, t, n, r, s, i, o, !0);
}
function fa(e) {
    return e ? (Br(e) || Yl(e) ? Ee({}, e) : e) : null;
}
function Ge(e, t, n = !1, r = !1) {
    const { props: s, ref: o, patchFlag: i, children: l, transition: c } = e,
        u = t ? ha(s || {}, t) : s,
        a = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && ca(u),
            ref:
                t && t.ref
                    ? n && o
                        ? Y(o)
                            ? o.concat(ur(t))
                            : [o, ur(t)]
                        : ur(t)
                    : o,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== je ? (i === -1 ? 16 : i | 16) : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Ge(e.ssContent),
            ssFallback: e.ssFallback && Ge(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        };
    return (c && r && vn(a, c.clone(a)), a);
}
function da(e = " ", t = 0) {
    return _e(Yt, null, e, t);
}
function of(e, t) {
    const n = _e(Dn, null, e);
    return ((n.staticCount = t), n);
}
function Fe(e) {
    return e == null || typeof e == "boolean"
        ? _e(Re)
        : Y(e)
          ? _e(je, null, e.slice())
          : wn(e)
            ? St(e)
            : _e(Yt, null, String(e));
}
function St(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ge(e);
}
function fo(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (Y(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), fo(e, s()), s._c && (s._d = !0));
            return;
        } else {
            n = 32;
            const s = t._;
            !s && !Yl(t)
                ? (t._ctx = ze)
                : s === 3 &&
                  ze &&
                  (ze.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        z(t)
            ? ((t = { default: t, _ctx: ze }), (n = 32))
            : ((t = String(t)), r & 64 ? ((n = 16), (t = [da(t)])) : (n = 8));
    ((e.children = t), (e.shapeFlag |= n));
}
function ha(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class")
                t.class !== r.class && (t.class = jr([t.class, r.class]));
            else if (s === "style") t.style = Dr([t.style, r.style]);
            else if (Jn(s)) {
                const o = t[s],
                    i = r[s];
                i &&
                    o !== i &&
                    !(Y(o) && o.includes(i)) &&
                    (t[s] = o ? [].concat(o, i) : i);
            } else s !== "" && (t[s] = r[s]);
    }
    return t;
}
function Ie(e, t, n, r = null) {
    Ze(e, t, 7, [n, r]);
}
const lf = Wl();
let af = 0;
function cf(e, t, n) {
    const r = e.type,
        s = (t ? t.appContext : e.appContext) || lf,
        o = {
            uid: af++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new il(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ql(r, s),
            emitsOptions: Gl(r, s),
            emit: null,
            emitted: null,
            propsDefaults: fe,
            inheritAttrs: r.inheritAttrs,
            ctx: fe,
            data: fe,
            props: fe,
            attrs: fe,
            slots: fe,
            refs: fe,
            setupState: fe,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return (
        (o.ctx = { _: o }),
        (o.root = t ? t.root : o),
        (o.emit = Hu.bind(null, o)),
        e.ce && e.ce(o),
        o
    );
}
let Te = null;
const Ht = () => Te || ze;
let Tr, ks;
{
    const e = Hr(),
        t = (n, r) => {
            let s;
            return (
                (s = e[n]) || (s = e[n] = []),
                s.push(r),
                (o) => {
                    s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
                }
            );
        };
    ((Tr = t("__VUE_INSTANCE_SETTERS__", (n) => (Te = n))),
        (ks = t("__VUE_SSR_SETTERS__", (n) => (En = n))));
}
const Qt = (e) => {
        const t = Te;
        return (
            Tr(e),
            e.scope.on(),
            () => {
                (e.scope.off(), Tr(t));
            }
        );
    },
    Os = () => {
        (Te && Te.scope.off(), Tr(null));
    };
function pa(e) {
    return e.vnode.shapeFlag & 4;
}
let En = !1;
function uf(e, t = !1, n = !1) {
    t && ks(t);
    const { props: r, children: s } = e.vnode,
        o = pa(e);
    ($u(e, r, o, t), Gu(e, s, n || t));
    const i = o ? ff(e, t) : void 0;
    return (t && ks(!1), i);
}
function ff(e, t) {
    const n = e.type;
    ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ru)));
    const { setup: r } = n;
    if (r) {
        mt();
        const s = (e.setupContext = r.length > 1 ? hf(e) : null),
            o = Qt(e),
            i = zn(r, e, 0, [e.props, s]),
            l = Nr(i);
        if ((yt(), o(), (l || e.sp) && !qt(e) && io(e), l)) {
            if ((i.then(Os, Os), t))
                return i
                    .then((c) => {
                        Ns(e, c);
                    })
                    .catch((c) => {
                        Cn(c, e, 0);
                    });
            e.asyncDep = i;
        } else Ns(e, i);
    } else ga(e);
}
function Ns(e, t, n) {
    (z(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : le(t) && (e.setupState = El(t)),
        ga(e));
}
function ga(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || it);
    {
        const s = Qt(e);
        mt();
        try {
            Tu(e);
        } finally {
            (yt(), s());
        }
    }
}
const df = {
    get(e, t) {
        return (xe(e, "get", ""), e[t]);
    }
};
function hf(e) {
    const t = (n) => {
        e.exposed = n || {};
    };
    return {
        attrs: new Proxy(e.attrs, df),
        slots: e.slots,
        emit: e.emit,
        expose: t
    };
}
function ho(e) {
    return e.exposed
        ? e.exposeProxy ||
              (e.exposeProxy = new Proxy(El(Kc(e.exposed)), {
                  get(t, n) {
                      if (n in t) return t[n];
                      if (n in Hn) return Hn[n](e);
                  },
                  has(t, n) {
                      return n in t || n in Hn;
                  }
              }))
        : e.proxy;
}
function Ms(e, t = !0) {
    return z(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function pf(e) {
    return z(e) && "__vccOpts" in e;
}
const Ke = (e, t) => eu(e, t, En);
function me(e, t, n) {
    try {
        Rr(-1);
        const r = arguments.length;
        return r === 2
            ? le(t) && !Y(t)
                ? wn(t)
                    ? _e(e, null, [t])
                    : _e(e, t)
                : _e(e, null, t)
            : (r > 3
                  ? (n = Array.prototype.slice.call(arguments, 2))
                  : r === 3 && wn(n) && (n = [n]),
              _e(e, t, n));
    } finally {
        Rr(1);
    }
}
const gf = "3.5.25";
let Is;
const Go = typeof window < "u" && window.trustedTypes;
if (Go)
    try {
        Is = Go.createPolicy("vue", { createHTML: (e) => e });
    } catch {}
const ma = Is ? (e) => Is.createHTML(e) : (e) => e,
    mf = "http://www.w3.org/2000/svg",
    yf = "http://www.w3.org/1998/Math/MathML",
    ft = typeof document < "u" ? document : null,
    qo = ft && ft.createElement("template"),
    _f = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, r) => {
            const s =
                t === "svg"
                    ? ft.createElementNS(mf, e)
                    : t === "mathml"
                      ? ft.createElementNS(yf, e)
                      : n
                        ? ft.createElement(e, { is: n })
                        : ft.createElement(e);
            return (
                e === "select" &&
                    r &&
                    r.multiple != null &&
                    s.setAttribute("multiple", r.multiple),
                s
            );
        },
        createText: (e) => ft.createTextNode(e),
        createComment: (e) => ft.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => ft.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, r, s, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (s && (s === o || s.nextSibling))
                for (
                    ;
                    t.insertBefore(s.cloneNode(!0), n),
                        !(s === o || !(s = s.nextSibling));

                );
            else {
                qo.innerHTML = ma(
                    r === "svg"
                        ? `<svg>${e}</svg>`
                        : r === "mathml"
                          ? `<math>${e}</math>`
                          : e
                );
                const l = qo.content;
                if (r === "svg" || r === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild; ) l.appendChild(c.firstChild);
                    l.removeChild(c);
                }
                t.insertBefore(l, n);
            }
            return [
                i ? i.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild
            ];
        }
    },
    Rt = "transition",
    xn = "animation",
    Gn = Symbol("_vtc"),
    ya = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    vf = Ee({}, xl, ya),
    bf = (e) => ((e.displayName = "Transition"), (e.props = vf), e),
    wf = bf((e, { slots: t }) => me(au, Ef(e), t)),
    Ft = (e, t = []) => {
        Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
    },
    Jo = (e) => (e ? (Y(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Ef(e) {
    const t = {};
    for (const O in e) O in ya || (t[O] = e[O]);
    if (e.css === !1) return t;
    const {
            name: n = "v",
            type: r,
            duration: s,
            enterFromClass: o = `${n}-enter-from`,
            enterActiveClass: i = `${n}-enter-active`,
            enterToClass: l = `${n}-enter-to`,
            appearFromClass: c = o,
            appearActiveClass: u = i,
            appearToClass: a = l,
            leaveFromClass: f = `${n}-leave-from`,
            leaveActiveClass: h = `${n}-leave-active`,
            leaveToClass: d = `${n}-leave-to`
        } = e,
        _ = Rf(s),
        v = _ && _[0],
        T = _ && _[1],
        {
            onBeforeEnter: R,
            onEnter: b,
            onEnterCancelled: g,
            onLeave: y,
            onLeaveCancelled: w,
            onBeforeAppear: S = R,
            onAppear: L = b,
            onAppearCancelled: V = g
        } = t,
        M = (O, K, ee, ie) => {
            ((O._enterCancelled = ie),
                Bt(O, K ? a : l),
                Bt(O, K ? u : i),
                ee && ee());
        },
        N = (O, K) => {
            ((O._isLeaving = !1), Bt(O, f), Bt(O, d), Bt(O, h), K && K());
        },
        W = (O) => (K, ee) => {
            const ie = O ? L : b,
                $ = () => M(K, O, ee);
            (Ft(ie, [K, $]),
                Yo(() => {
                    (Bt(K, O ? c : o),
                        ct(K, O ? a : l),
                        Jo(ie) || zo(K, r, v, $));
                }));
        };
    return Ee(t, {
        onBeforeEnter(O) {
            (Ft(R, [O]), ct(O, o), ct(O, i));
        },
        onBeforeAppear(O) {
            (Ft(S, [O]), ct(O, c), ct(O, u));
        },
        onEnter: W(!1),
        onAppear: W(!0),
        onLeave(O, K) {
            O._isLeaving = !0;
            const ee = () => N(O, K);
            (ct(O, f),
                O._enterCancelled ? (ct(O, h), Zo(O)) : (Zo(O), ct(O, h)),
                Yo(() => {
                    O._isLeaving &&
                        (Bt(O, f), ct(O, d), Jo(y) || zo(O, r, T, ee));
                }),
                Ft(y, [O, ee]));
        },
        onEnterCancelled(O) {
            (M(O, !1, void 0, !0), Ft(g, [O]));
        },
        onAppearCancelled(O) {
            (M(O, !0, void 0, !0), Ft(V, [O]));
        },
        onLeaveCancelled(O) {
            (N(O), Ft(w, [O]));
        }
    });
}
function Rf(e) {
    if (e == null) return null;
    if (le(e)) return [is(e.enter), is(e.leave)];
    {
        const t = is(e);
        return [t, t];
    }
}
function is(e) {
    return nl(e);
}
function ct(e, t) {
    (t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
        (e[Gn] || (e[Gn] = new Set())).add(t));
}
function Bt(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Gn];
    n && (n.delete(t), n.size || (e[Gn] = void 0));
}
function Yo(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
let Tf = 0;
function zo(e, t, n, r) {
    const s = (e._endId = ++Tf),
        o = () => {
            s === e._endId && r();
        };
    if (n != null) return setTimeout(o, n);
    const { type: i, timeout: l, propCount: c } = Cf(e, t);
    if (!i) return r();
    const u = i + "end";
    let a = 0;
    const f = () => {
            (e.removeEventListener(u, h), o());
        },
        h = (d) => {
            d.target === e && ++a >= c && f();
        };
    (setTimeout(() => {
        a < c && f();
    }, l + 1),
        e.addEventListener(u, h));
}
function Cf(e, t) {
    const n = window.getComputedStyle(e),
        r = (_) => (n[_] || "").split(", "),
        s = r(`${Rt}Delay`),
        o = r(`${Rt}Duration`),
        i = Qo(s, o),
        l = r(`${xn}Delay`),
        c = r(`${xn}Duration`),
        u = Qo(l, c);
    let a = null,
        f = 0,
        h = 0;
    t === Rt
        ? i > 0 && ((a = Rt), (f = i), (h = o.length))
        : t === xn
          ? u > 0 && ((a = xn), (f = u), (h = c.length))
          : ((f = Math.max(i, u)),
            (a = f > 0 ? (i > u ? Rt : xn) : null),
            (h = a ? (a === Rt ? o.length : c.length) : 0));
    const d =
        a === Rt &&
        /\b(?:transform|all)(?:,|$)/.test(r(`${Rt}Property`).toString());
    return { type: a, timeout: f, propCount: h, hasTransform: d };
}
function Qo(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => Xo(n) + Xo(e[r])));
}
function Xo(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Zo(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Af(e, t, n) {
    const r = e[Gn];
    (r && (t = (t ? [t, ...r] : [...r]).join(" ")),
        t == null
            ? e.removeAttribute("class")
            : n
              ? e.setAttribute("class", t)
              : (e.className = t));
}
const ei = Symbol("_vod"),
    Sf = Symbol("_vsh"),
    xf = Symbol(""),
    Pf = /(?:^|;)\s*display\s*:/;
function kf(e, t, n) {
    const r = e.style,
        s = pe(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if (pe(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && fr(r, l, "");
                }
            else for (const i in t) n[i] == null && fr(r, i, "");
        for (const i in n) (i === "display" && (o = !0), fr(r, i, n[i]));
    } else if (s) {
        if (t !== n) {
            const i = r[xf];
            (i && (n += ";" + i), (r.cssText = n), (o = Pf.test(n)));
        }
    } else t && e.removeAttribute("style");
    ei in e && ((e[ei] = o ? r.display : ""), e[Sf] && (r.display = "none"));
}
const ti = /\s*!important$/;
function fr(e, t, n) {
    if (Y(n)) n.forEach((r) => fr(e, t, r));
    else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
    else {
        const r = Of(e, t);
        ti.test(n)
            ? e.setProperty(Zt(r), n.replace(ti, ""), "important")
            : (e[r] = n);
    }
}
const ni = ["Webkit", "Moz", "ms"],
    ls = {};
function Of(e, t) {
    const n = ls[t];
    if (n) return n;
    let r = qe(t);
    if (r !== "filter" && r in e) return (ls[t] = r);
    r = Lr(r);
    for (let s = 0; s < ni.length; s++) {
        const o = ni[s] + r;
        if (o in e) return (ls[t] = o);
    }
    return t;
}
const ri = "http://www.w3.org/1999/xlink";
function si(e, t, n, r, s, o = Ec(t)) {
    r && t.startsWith("xlink:")
        ? n == null
            ? e.removeAttributeNS(ri, t.slice(6, t.length))
            : e.setAttributeNS(ri, t, n)
        : n == null || (o && !rl(n))
          ? e.removeAttribute(t)
          : e.setAttribute(t, o ? "" : It(n) ? String(n) : n);
}
function oi(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? ma(n) : n);
        return;
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
        ((l !== c || !("_value" in e)) && (e.value = c),
            n == null && e.removeAttribute(t),
            (e._value = n));
        return;
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean"
            ? (n = rl(n))
            : n == null && l === "string"
              ? ((n = ""), (i = !0))
              : l === "number" && ((n = 0), (i = !0));
    }
    try {
        e[t] = n;
    } catch {}
    i && e.removeAttribute(s || t);
}
function Nf(e, t, n, r) {
    e.addEventListener(t, n, r);
}
function Mf(e, t, n, r) {
    e.removeEventListener(t, n, r);
}
const ii = Symbol("_vei");
function If(e, t, n, r, s = null) {
    const o = e[ii] || (e[ii] = {}),
        i = o[t];
    if (r && i) i.value = r;
    else {
        const [l, c] = Lf(t);
        if (r) {
            const u = (o[t] = jf(r, s));
            Nf(e, l, u, c);
        } else i && (Mf(e, l, i, c), (o[t] = void 0));
    }
}
const li = /(?:Once|Passive|Capture)$/;
function Lf(e) {
    let t;
    if (li.test(e)) {
        t = {};
        let r;
        for (; (r = e.match(li)); )
            ((e = e.slice(0, e.length - r[0].length)),
                (t[r[0].toLowerCase()] = !0));
    }
    return [e[2] === ":" ? e.slice(3) : Zt(e.slice(2)), t];
}
let as = 0;
const Hf = Promise.resolve(),
    Df = () => as || (Hf.then(() => (as = 0)), (as = Date.now()));
function jf(e, t) {
    const n = (r) => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        Ze(Ff(r, n.value), t, 5, [r]);
    };
    return ((n.value = e), (n.attached = Df()), n);
}
function Ff(e, t) {
    if (Y(t)) {
        const n = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                (n.call(e), (e._stopped = !0));
            }),
            t.map((r) => (s) => !s._stopped && r && r(s))
        );
    } else return t;
}
const ai = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) > 96 &&
        e.charCodeAt(2) < 123,
    Bf = (e, t, n, r, s, o) => {
        const i = s === "svg";
        t === "class"
            ? Af(e, r, i)
            : t === "style"
              ? kf(e, n, r)
              : Jn(t)
                ? Ys(t) || If(e, t, n, r, o)
                : (
                        t[0] === "."
                            ? ((t = t.slice(1)), !0)
                            : t[0] === "^"
                              ? ((t = t.slice(1)), !1)
                              : Uf(e, t, r, i)
                    )
                  ? (oi(e, t, r),
                    !e.tagName.includes("-") &&
                        (t === "value" ||
                            t === "checked" ||
                            t === "selected") &&
                        si(e, t, r, i, o, t !== "value"))
                  : e._isVueCE && (/[A-Z]/.test(t) || !pe(r))
                    ? oi(e, qe(t), r, o, t)
                    : (t === "true-value"
                          ? (e._trueValue = r)
                          : t === "false-value" && (e._falseValue = r),
                      si(e, t, r, i));
    };
function Uf(e, t, n, r) {
    if (r)
        return !!(
            t === "innerHTML" ||
            t === "textContent" ||
            (t in e && ai(t) && z(n))
        );
    if (
        t === "spellcheck" ||
        t === "draggable" ||
        t === "translate" ||
        t === "autocorrect" ||
        (t === "sandbox" && e.tagName === "IFRAME") ||
        t === "form" ||
        (t === "list" && e.tagName === "INPUT") ||
        (t === "type" && e.tagName === "TEXTAREA")
    )
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1;
    }
    return ai(t) && pe(n) ? !1 : t in e;
}
const _a = Ee({ patchProp: Bf }, _f);
let Fn,
    ci = !1;
function $f() {
    return Fn || (Fn = Ju(_a));
}
function Vf() {
    return ((Fn = ci ? Fn : Yu(_a)), (ci = !0), Fn);
}
const Wf = (...e) => {
        const t = $f().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (r) => {
                const s = ba(r);
                if (!s) return;
                const o = t._component;
                (!z(o) &&
                    !o.render &&
                    !o.template &&
                    (o.template = s.innerHTML),
                    s.nodeType === 1 && (s.textContent = ""));
                const i = n(s, !1, va(s));
                return (
                    s instanceof Element &&
                        (s.removeAttribute("v-cloak"),
                        s.setAttribute("data-v-app", "")),
                    i
                );
            }),
            t
        );
    },
    Kf = (...e) => {
        const t = Vf().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (r) => {
                const s = ba(r);
                if (s) return n(s, !0, va(s));
            }),
            t
        );
    };
function va(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml";
}
function ba(e) {
    return pe(e) ? document.querySelector(e) : e;
}
const Gf =
        /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    qf =
        /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Jf = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Yf(e, t) {
    if (
        e === "__proto__" ||
        (e === "constructor" && t && typeof t == "object" && "prototype" in t)
    ) {
        zf(e);
        return;
    }
    return t;
}
function zf(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Cr(e, t = {}) {
    if (typeof e != "string") return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1)
        return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9)
        switch (n.toLowerCase()) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "undefined":
                return;
            case "null":
                return null;
            case "nan":
                return Number.NaN;
            case "infinity":
                return Number.POSITIVE_INFINITY;
            case "-infinity":
                return Number.NEGATIVE_INFINITY;
        }
    if (!Jf.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e;
    }
    try {
        if (Gf.test(e) || qf.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Yf);
        }
        return JSON.parse(e);
    } catch (r) {
        if (t.strict) throw r;
        return e;
    }
}
const Qf = /#/g,
    Xf = /&/g,
    Zf = /\//g,
    ed = /=/g,
    po = /\+/g,
    td = /%5e/gi,
    nd = /%60/gi,
    rd = /%7c/gi,
    sd = /%20/gi;
function od(e) {
    return encodeURI("" + e).replace(rd, "|");
}
function Ls(e) {
    return od(typeof e == "string" ? e : JSON.stringify(e))
        .replace(po, "%2B")
        .replace(sd, "+")
        .replace(Qf, "%23")
        .replace(Xf, "%26")
        .replace(nd, "`")
        .replace(td, "^")
        .replace(Zf, "%2F");
}
function cs(e) {
    return Ls(e).replace(ed, "%3D");
}
function Ar(e = "") {
    try {
        return decodeURIComponent("" + e);
    } catch {
        return "" + e;
    }
}
function id(e) {
    return Ar(e.replace(po, " "));
}
function ld(e) {
    return Ar(e.replace(po, " "));
}
function wa(e = "") {
    const t = Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const s = id(r[1]);
        if (s === "__proto__" || s === "constructor") continue;
        const o = ld(r[2] || "");
        t[s] === void 0
            ? (t[s] = o)
            : Array.isArray(t[s])
              ? t[s].push(o)
              : (t[s] = [t[s], o]);
    }
    return t;
}
function ad(e, t) {
    return (
        (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
        t
            ? Array.isArray(t)
                ? t.map((n) => `${cs(e)}=${Ls(n)}`).join("&")
                : `${cs(e)}=${Ls(t)}`
            : cs(e)
    );
}
function cd(e) {
    return Object.keys(e)
        .filter((t) => e[t] !== void 0)
        .map((t) => ad(t, e[t]))
        .filter(Boolean)
        .join("&");
}
const ud = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    fd = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    dd = /^([/\\]\s*){2,}[^/\\]/,
    hd = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    pd = /\/$|\/\?|\/#/,
    gd = /^\.?\//;
function en(e, t = {}) {
    return (
        typeof t == "boolean" && (t = { acceptRelative: t }),
        t.strict
            ? ud.test(e)
            : fd.test(e) || (t.acceptRelative ? dd.test(e) : !1)
    );
}
function md(e) {
    return !!e && hd.test(e);
}
function Hs(e = "", t) {
    return t ? pd.test(e) : e.endsWith("/");
}
function Sr(e = "", t) {
    if (!t) return (Hs(e) ? e.slice(0, -1) : e) || "/";
    if (!Hs(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    s !== -1 && ((n = e.slice(0, s)), (r = e.slice(s)));
    const [o, ...i] = n.split("?");
    return (
        ((o.endsWith("/") ? o.slice(0, -1) : o) || "/") +
        (i.length > 0 ? `?${i.join("?")}` : "") +
        r
    );
}
function yd(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Hs(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    if (s !== -1 && ((n = e.slice(0, s)), (r = e.slice(s)), !n)) return r;
    const [o, ...i] = n.split("?");
    return o + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
}
function _d(e, t) {
    if (Ra(t) || en(e)) return e;
    const n = Sr(t);
    return e.startsWith(n) ? e : go(n, e);
}
function ui(e, t) {
    if (Ra(t)) return e;
    const n = Sr(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
}
function Ea(e, t) {
    const n = Aa(e),
        r = { ...wa(n.search), ...t };
    return ((n.search = cd(r)), wd(n));
}
function Ra(e) {
    return !e || e === "/";
}
function vd(e) {
    return e && e !== "/";
}
function go(e, ...t) {
    let n = e || "";
    for (const r of t.filter((s) => vd(s)))
        if (n) {
            const s = r.replace(gd, "");
            n = yd(n) + s;
        } else n = r;
    return n;
}
function Ta(...e) {
    const t = /\/(?!\/)/,
        n = e.filter(Boolean),
        r = [];
    let s = 0;
    for (const i of n)
        if (!(!i || i === "/")) {
            for (const [l, c] of i.split(t).entries())
                if (!(!c || c === ".")) {
                    if (c === "..") {
                        if (r.length === 1 && en(r[0])) continue;
                        (r.pop(), s--);
                        continue;
                    }
                    if (l === 1 && r[r.length - 1]?.endsWith(":/")) {
                        r[r.length - 1] += "/" + c;
                        continue;
                    }
                    (r.push(c), s++);
                }
        }
    let o = r.join("/");
    return (
        s >= 0
            ? n[0]?.startsWith("/") && !o.startsWith("/")
                ? (o = "/" + o)
                : n[0]?.startsWith("./") &&
                  !o.startsWith("./") &&
                  (o = "./" + o)
            : (o = "../".repeat(-1 * s) + o),
        n[n.length - 1]?.endsWith("/") && !o.endsWith("/") && (o += "/"),
        o
    );
}
function bd(e, t) {
    return Ar(Sr(e)) === Ar(Sr(t));
}
const Ca = Symbol.for("ufo:protocolRelative");
function Aa(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, f, h = ""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: h,
            href: f + h,
            auth: "",
            host: "",
            search: "",
            hash: ""
        };
    }
    if (!en(e, { acceptRelative: !0 })) return fi(e);
    const [, r = "", s, o = ""] =
        e
            .replace(/\\/g, "/")
            .match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", l = ""] = o.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (l = l.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: c, search: u, hash: a } = fi(l);
    return {
        protocol: r.toLowerCase(),
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: i,
        pathname: c,
        search: u,
        hash: a,
        [Ca]: !r
    };
}
function fi(e = "") {
    const [t = "", n = "", r = ""] = (
        e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
    ).splice(1);
    return { pathname: t, search: n, hash: r };
}
function wd(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        s = e.auth ? e.auth + "@" : "",
        o = e.host || "";
    return (
        (e.protocol || e[Ca] ? (e.protocol || "") + "//" : "") +
        s +
        o +
        t +
        n +
        r
    );
}
class Ed extends Error {
    constructor(t, n) {
        (super(t, n),
            (this.name = "FetchError"),
            n?.cause && !this.cause && (this.cause = n.cause));
    }
}
function Rd(e) {
    const t = e.error?.message || e.error?.toString() || "",
        n = e.request?.method || e.options?.method || "GET",
        r = e.request?.url || String(e.request) || "/",
        s = `[${n}] ${JSON.stringify(r)}`,
        o = e.response
            ? `${e.response.status} ${e.response.statusText}`
            : "<no response>",
        i = `${s}: ${o}${t ? ` ${t}` : ""}`,
        l = new Ed(i, e.error ? { cause: e.error } : void 0);
    for (const c of ["request", "options", "response"])
        Object.defineProperty(l, c, {
            get() {
                return e[c];
            }
        });
    for (const [c, u] of [
        ["data", "_data"],
        ["status", "status"],
        ["statusCode", "status"],
        ["statusText", "statusText"],
        ["statusMessage", "statusText"]
    ])
        Object.defineProperty(l, c, {
            get() {
                return e.response && e.response[u];
            }
        });
    return l;
}
const Td = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function di(e = "GET") {
    return Td.has(e.toUpperCase());
}
function Cd(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null
        ? !0
        : t !== "object"
          ? !1
          : Array.isArray(e)
            ? !0
            : e.buffer || e instanceof FormData || e instanceof URLSearchParams
              ? !1
              : (e.constructor && e.constructor.name === "Object") ||
                typeof e.toJSON == "function";
}
const Ad = new Set([
        "image/svg",
        "application/xml",
        "application/xhtml",
        "application/html"
    ]),
    Sd = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function xd(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return Sd.test(t)
        ? "json"
        : t === "text/event-stream"
          ? "stream"
          : Ad.has(t) || t.startsWith("text/")
            ? "text"
            : "blob";
}
function Pd(e, t, n, r) {
    const s = kd(t?.headers ?? e?.headers, n?.headers, r);
    let o;
    return (
        (n?.query || n?.params || t?.params || t?.query) &&
            (o = { ...n?.params, ...n?.query, ...t?.params, ...t?.query }),
        { ...n, ...t, query: o, params: o, headers: s }
    );
}
function kd(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e)
        for (const [s, o] of Symbol.iterator in e || Array.isArray(e)
            ? e
            : new n(e))
            r.set(s, o);
    return r;
}
async function lr(e, t) {
    if (t)
        if (Array.isArray(t)) for (const n of t) await n(e);
        else await t(e);
}
const Od = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    Nd = new Set([101, 204, 205, 304]);
function Sa(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: r = globalThis.AbortController
    } = e;
    async function s(l) {
        const c =
            (l.error && l.error.name === "AbortError" && !l.options.timeout) ||
            !1;
        if (l.options.retry !== !1 && !c) {
            let a;
            typeof l.options.retry == "number"
                ? (a = l.options.retry)
                : (a = di(l.options.method) ? 0 : 1);
            const f = (l.response && l.response.status) || 500;
            if (
                a > 0 &&
                (Array.isArray(l.options.retryStatusCodes)
                    ? l.options.retryStatusCodes.includes(f)
                    : Od.has(f))
            ) {
                const h =
                    typeof l.options.retryDelay == "function"
                        ? l.options.retryDelay(l)
                        : l.options.retryDelay || 0;
                return (
                    h > 0 && (await new Promise((d) => setTimeout(d, h))),
                    o(l.request, { ...l.options, retry: a - 1 })
                );
            }
        }
        const u = Rd(l);
        throw (Error.captureStackTrace && Error.captureStackTrace(u, o), u);
    }
    const o = async function (c, u = {}) {
            const a = {
                request: c,
                options: Pd(c, u, e.defaults, n),
                response: void 0,
                error: void 0
            };
            if (
                (a.options.method &&
                    (a.options.method = a.options.method.toUpperCase()),
                a.options.onRequest &&
                    (await lr(a, a.options.onRequest),
                    a.options.headers instanceof n ||
                        (a.options.headers = new n(a.options.headers || {}))),
                typeof a.request == "string" &&
                    (a.options.baseURL &&
                        (a.request = _d(a.request, a.options.baseURL)),
                    a.options.query &&
                        ((a.request = Ea(a.request, a.options.query)),
                        delete a.options.query),
                    "query" in a.options && delete a.options.query,
                    "params" in a.options && delete a.options.params),
                a.options.body && di(a.options.method))
            )
                if (Cd(a.options.body)) {
                    const d = a.options.headers.get("content-type");
                    (typeof a.options.body != "string" &&
                        (a.options.body =
                            d === "application/x-www-form-urlencoded"
                                ? new URLSearchParams(a.options.body).toString()
                                : JSON.stringify(a.options.body)),
                        d ||
                            a.options.headers.set(
                                "content-type",
                                "application/json"
                            ),
                        a.options.headers.has("accept") ||
                            a.options.headers.set(
                                "accept",
                                "application/json"
                            ));
                } else
                    (("pipeTo" in a.options.body &&
                        typeof a.options.body.pipeTo == "function") ||
                        typeof a.options.body.pipe == "function") &&
                        ("duplex" in a.options || (a.options.duplex = "half"));
            let f;
            if (!a.options.signal && a.options.timeout) {
                const d = new r();
                ((f = setTimeout(() => {
                    const _ = new Error(
                        "[TimeoutError]: The operation was aborted due to timeout"
                    );
                    ((_.name = "TimeoutError"), (_.code = 23), d.abort(_));
                }, a.options.timeout)),
                    (a.options.signal = d.signal));
            }
            try {
                a.response = await t(a.request, a.options);
            } catch (d) {
                return (
                    (a.error = d),
                    a.options.onRequestError &&
                        (await lr(a, a.options.onRequestError)),
                    await s(a)
                );
            } finally {
                f && clearTimeout(f);
            }
            if (
                (a.response.body || a.response._bodyInit) &&
                !Nd.has(a.response.status) &&
                a.options.method !== "HEAD"
            ) {
                const d =
                    (a.options.parseResponse
                        ? "json"
                        : a.options.responseType) ||
                    xd(a.response.headers.get("content-type") || "");
                switch (d) {
                    case "json": {
                        const _ = await a.response.text(),
                            v = a.options.parseResponse || Cr;
                        a.response._data = v(_);
                        break;
                    }
                    case "stream": {
                        a.response._data =
                            a.response.body || a.response._bodyInit;
                        break;
                    }
                    default:
                        a.response._data = await a.response[d]();
                }
            }
            return (
                a.options.onResponse && (await lr(a, a.options.onResponse)),
                !a.options.ignoreResponseError &&
                a.response.status >= 400 &&
                a.response.status < 600
                    ? (a.options.onResponseError &&
                          (await lr(a, a.options.onResponseError)),
                      await s(a))
                    : a.response
            );
        },
        i = async function (c, u) {
            return (await o(c, u))._data;
        };
    return (
        (i.raw = o),
        (i.native = (...l) => t(...l)),
        (i.create = (l = {}, c = {}) =>
            Sa({
                ...e,
                ...c,
                defaults: { ...e.defaults, ...c.defaults, ...l }
            })),
        i
    );
}
const xr = (function () {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object");
    })(),
    Md = xr.fetch
        ? (...e) => xr.fetch(...e)
        : () =>
              Promise.reject(
                  new Error("[ofetch] global.fetch is not supported!")
              ),
    Id = xr.Headers,
    Ld = xr.AbortController,
    Hd = Sa({ fetch: Md, Headers: Id, AbortController: Ld }),
    Dd = Hd,
    jd = () =>
        window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config,
    mo = () => jd().app,
    Fd = () => mo().baseURL,
    Bd = () => mo().buildAssetsDir,
    yo = (...e) => Ta(xa(), Bd(), ...e),
    xa = (...e) => {
        const t = mo(),
            n = t.cdnURL || t.baseURL;
        return e.length ? Ta(n, ...e) : n;
    };
((globalThis.__buildAssetsURL = yo), (globalThis.__publicAssetsURL = xa));
globalThis.$fetch || (globalThis.$fetch = Dd.create({ baseURL: Fd() }));
"global" in globalThis || (globalThis.global = globalThis);
function Ds(e, t = {}, n) {
    for (const r in e) {
        const s = e[r],
            o = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null
            ? Ds(s, t, o)
            : typeof s == "function" && (t[o] = s);
    }
    return t;
}
const Ud = { run: (e) => e() },
    $d = () => Ud,
    Pa = typeof console.createTask < "u" ? console.createTask : $d;
function Vd(e, t) {
    const n = t.shift(),
        r = Pa(n);
    return e.reduce(
        (s, o) => s.then(() => r.run(() => o(...t))),
        Promise.resolve()
    );
}
function Wd(e, t) {
    const n = t.shift(),
        r = Pa(n);
    return Promise.all(e.map((s) => r.run(() => s(...t))));
}
function us(e, t) {
    for (const n of [...e]) n(t);
}
class Kd {
    constructor() {
        ((this._hooks = {}),
            (this._before = void 0),
            (this._after = void 0),
            (this._deprecatedMessages = void 0),
            (this._deprecatedHooks = {}),
            (this.hook = this.hook.bind(this)),
            (this.callHook = this.callHook.bind(this)),
            (this.callHookWith = this.callHookWith.bind(this)));
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const s = t;
        let o;
        for (; this._deprecatedHooks[t]; )
            ((o = this._deprecatedHooks[t]), (t = o.to));
        if (o && !r.allowDeprecated) {
            let i = o.message;
            (i ||
                (i =
                    `${s} hook has been deprecated` +
                    (o.to ? `, please use ${o.to}` : "")),
                this._deprecatedMessages ||
                    (this._deprecatedMessages = new Set()),
                this._deprecatedMessages.has(i) ||
                    (console.warn(i), this._deprecatedMessages.add(i)));
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                });
            } catch {}
        return (
            (this._hooks[t] = this._hooks[t] || []),
            this._hooks[t].push(n),
            () => {
                n && (this.removeHook(t, n), (n = void 0));
            }
        );
    }
    hookOnce(t, n) {
        let r,
            s = (...o) => (
                typeof r == "function" && r(),
                (r = void 0),
                (s = void 0),
                n(...o)
            );
        return ((r = this.hook(t, s)), r);
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            (r !== -1 && this._hooks[t].splice(r, 1),
                this._hooks[t].length === 0 && delete this._hooks[t]);
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const s of r) this.hook(t, s);
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n]);
    }
    addHooks(t) {
        const n = Ds(t),
            r = Object.keys(n).map((s) => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length)) s();
        };
    }
    removeHooks(t) {
        const n = Ds(t);
        for (const r in n) this.removeHook(r, n[r]);
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t];
    }
    callHook(t, ...n) {
        return (n.unshift(t), this.callHookWith(Vd, t, ...n));
    }
    callHookParallel(t, ...n) {
        return (n.unshift(t), this.callHookWith(Wd, t, ...n));
    }
    callHookWith(t, n, ...r) {
        const s =
            this._before || this._after
                ? { name: n, args: r, context: {} }
                : void 0;
        this._before && us(this._before, s);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise
            ? o.finally(() => {
                  this._after && s && us(this._after, s);
              })
            : (this._after && s && us(this._after, s), o);
    }
    beforeEach(t) {
        return (
            (this._before = this._before || []),
            this._before.push(t),
            () => {
                if (this._before !== void 0) {
                    const n = this._before.indexOf(t);
                    n !== -1 && this._before.splice(n, 1);
                }
            }
        );
    }
    afterEach(t) {
        return (
            (this._after = this._after || []),
            this._after.push(t),
            () => {
                if (this._after !== void 0) {
                    const n = this._after.indexOf(t);
                    n !== -1 && this._after.splice(n, 1);
                }
            }
        );
    }
}
function ka() {
    return new Kd();
}
function Gd(e = {}) {
    let t,
        n = !1;
    const r = (i) => {
        if (t && t !== i) throw new Error("Context conflict");
    };
    let s;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i
            ? (s = new i())
            : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
    const o = () => {
        if (s) {
            const i = s.getStore();
            if (i !== void 0) return i;
        }
        return t;
    };
    return {
        use: () => {
            const i = o();
            if (i === void 0) throw new Error("Context is not available");
            return i;
        },
        tryUse: () => o(),
        set: (i, l) => {
            (l || r(i), (t = i), (n = !0));
        },
        unset: () => {
            ((t = void 0), (n = !1));
        },
        call: (i, l) => {
            (r(i), (t = i));
            try {
                return s ? s.run(i, l) : l();
            } finally {
                n || (t = void 0);
            }
        },
        async callAsync(i, l) {
            t = i;
            const c = () => {
                    t = i;
                },
                u = () => (t === i ? c : void 0);
            js.add(u);
            try {
                const a = s ? s.run(i, l) : l();
                return (n || (t = void 0), await a);
            } finally {
                js.delete(u);
            }
        }
    };
}
function qd(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return (t[n] || (t[n] = Gd({ ...e, ...r })), t[n]);
        }
    };
}
const Pr =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof global < "u"
                ? global
                : typeof window < "u"
                  ? window
                  : {},
    hi = "__unctx__",
    Jd = Pr[hi] || (Pr[hi] = qd()),
    Yd = (e, t = {}) => Jd.get(e, t),
    pi = "__unctx_async_handlers__",
    js = Pr[pi] || (Pr[pi] = new Set());
function mn(e) {
    const t = [];
    for (const s of js) {
        const o = s();
        o && t.push(o);
    }
    const n = () => {
        for (const s of t) s();
    };
    let r = e();
    return (
        r &&
            typeof r == "object" &&
            "catch" in r &&
            (r = r.catch((s) => {
                throw (n(), s);
            })),
        [r, n]
    );
}
const zd = !1,
    gi = !1,
    Qd = !1,
    mi = { id: "__nuxt-loader" },
    hm = {
        componentName: "NuxtLink",
        prefetch: !0,
        prefetchOn: { visibility: !0 }
    },
    Xd = "#__nuxt",
    Oa = "nuxt-app",
    yi = 36e5,
    Zd = "vite:preloadError";
function Na(e = Oa) {
    return Yd(e, { asyncContext: !1 });
}
const eh = "__nuxt_plugin";
function th(e) {
    let t = 0;
    const n = {
        _id: e.id || Oa || "nuxt-app",
        _scope: Tc(),
        provide: void 0,
        versions: {
            get nuxt() {
                return "4.2.2";
            },
            get vue() {
                return n.vueApp.version;
            }
        },
        payload: ot({
            ...(e.ssrContext?.payload || {}),
            data: ot({}),
            state: Lt({}),
            once: new Set(),
            _errors: ot({})
        }),
        static: { data: {} },
        runWithContext(s) {
            return n._scope.active && !Qs()
                ? n._scope.run(() => _i(n, s))
                : _i(n, s);
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let s = !1;
            return () => {
                if (!s && ((s = !0), t--, t === 0))
                    return (
                        (n.isHydrating = !1),
                        n.callHook("app:suspense:resolve")
                    );
            };
        },
        _asyncDataPromises: {},
        _asyncData: ot({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const s = window.__NUXT__;
        if (s)
            for (const o in s)
                switch (o) {
                    case "data":
                    case "state":
                    case "_errors":
                        Object.assign(n.payload[o], s[o]);
                        break;
                    default:
                        n.payload[o] = s[o];
                }
    }
    ((n.hooks = ka()),
        (n.hook = n.hooks.hook),
        (n.callHook = n.hooks.callHook),
        (n.provide = (s, o) => {
            const i = "$" + s;
            (ar(n, i, o), ar(n.vueApp.config.globalProperties, i, o));
        }),
        ar(n.vueApp, "$nuxt", n),
        ar(n.vueApp.config.globalProperties, "$nuxt", n));
    {
        (window.addEventListener(Zd, (o) => {
            (n.callHook("app:chunkError", { error: o.payload }),
                o.payload.message.includes("Unable to preload CSS") &&
                    o.preventDefault());
        }),
            (window.useNuxtApp ||= ye));
        const s = n.hook("app:error", (...o) => {
            console.error(
                "[nuxt] error caught during app initialization",
                ...o
            );
        });
        n.hook("app:mounted", s);
    }
    const r = n.payload.config;
    return (n.provide("config", r), n);
}
function nh(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
}
async function rh(e, t) {
    if (typeof t == "function") {
        const { provide: n } = (await e.runWithContext(() => t(e))) || {};
        if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
}
async function sh(e, t) {
    const n = new Set(),
        r = [],
        s = [];
    let o,
        i = 0;
    async function l(c) {
        const u =
            c.dependsOn?.filter(
                (a) => t.some((f) => f._name === a) && !n.has(a)
            ) ?? [];
        if (u.length > 0) r.push([new Set(u), c]);
        else {
            const a = rh(e, c)
                .then(async () => {
                    c._name &&
                        (n.add(c._name),
                        await Promise.all(
                            r.map(async ([f, h]) => {
                                f.has(c._name) &&
                                    (f.delete(c._name),
                                    f.size === 0 && (i++, await l(h)));
                            })
                        ));
                })
                .catch((f) => {
                    if (!c.parallel && !e.payload.error) throw f;
                    o ||= f;
                });
            c.parallel ? s.push(a) : await a;
        }
    }
    for (const c of t) nh(e, c);
    for (const c of t) await l(c);
    if ((await Promise.all(s), i))
        for (let c = 0; c < i; c++) await Promise.all(s);
    if (o) throw e.payload.error || o;
}
function wt(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return (
        delete e.name,
        Object.assign(e.setup || (() => {}), e, { [eh]: !0, _name: t })
    );
}
function _i(e, t, n) {
    const r = () => t();
    return (Na(e._id).set(e), e.vueApp.runWithContext(r));
}
function oh(e) {
    let t;
    return (
        $r() && (t = Ht()?.appContext.app.$nuxt),
        (t ||= Na(e).tryUse()),
        t || null
    );
}
function ye(e) {
    const t = oh(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t;
}
function Kr(e) {
    return ye().$config;
}
function ar(e, t, n) {
    Object.defineProperty(e, t, { get: () => n });
}
function ih(e, t) {
    return { ctx: { table: e }, matchAll: (n) => Ia(n, e) };
}
function Ma(e) {
    const t = {};
    for (const n in e)
        t[n] =
            n === "dynamic"
                ? new Map(Object.entries(e[n]).map(([r, s]) => [r, Ma(s)]))
                : new Map(Object.entries(e[n]));
    return t;
}
function lh(e) {
    return ih(Ma(e));
}
function Ia(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [o, i] of vi(t.wildcard))
        (e === o || e.startsWith(o + "/")) && r.push(i);
    for (const [o, i] of vi(t.dynamic))
        if (e.startsWith(o + "/")) {
            const l = "/" + e.slice(o.length).split("/").splice(2).join("/");
            r.push(...Ia(l, i));
        }
    const s = t.static.get(e);
    return (s && r.push(s), r.filter(Boolean));
}
function vi(e) {
    return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function fs(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return (t !== null &&
        t !== Object.prototype &&
        Object.getPrototypeOf(t) !== null) ||
        Symbol.iterator in e
        ? !1
        : Symbol.toStringTag in e
          ? Object.prototype.toString.call(e) === "[object Module]"
          : !0;
}
function Fs(e, t, n = ".", r) {
    if (!fs(t)) return Fs(e, {}, n, r);
    const s = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor") continue;
        const i = e[o];
        i != null &&
            ((r && r(s, o, i, n)) ||
                (Array.isArray(i) && Array.isArray(s[o])
                    ? (s[o] = [...i, ...s[o]])
                    : fs(i) && fs(s[o])
                      ? (s[o] = Fs(
                            i,
                            s[o],
                            (n ? `${n}.` : "") + o.toString(),
                            r
                        ))
                      : (s[o] = i)));
    }
    return s;
}
function ah(e) {
    return (...t) => t.reduce((n, r) => Fs(n, r, "", e), {});
}
const La = ah();
function ch(e, t) {
    try {
        return t in e;
    } catch {
        return !1;
    }
}
class bi extends Error {
    static __h3_error__ = !0;
    statusCode = 500;
    fatal = !1;
    unhandled = !1;
    statusMessage;
    data;
    cause;
    constructor(t, n = {}) {
        (super(t, n), n.cause && !this.cause && (this.cause = n.cause));
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Bs(this.statusCode, 500)
        };
        return (
            this.statusMessage && (t.statusMessage = Ha(this.statusMessage)),
            this.data !== void 0 && (t.data = this.data),
            t
        );
    }
}
function uh(e) {
    if (typeof e == "string") return new bi(e);
    if (fh(e)) return e;
    const t = new bi(e.message ?? e.statusMessage ?? "", {
        cause: e.cause || e
    });
    if (ch(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack;
                }
            });
        } catch {
            try {
                t.stack = e.stack;
            } catch {}
        }
    if (
        (e.data && (t.data = e.data),
        e.statusCode
            ? (t.statusCode = Bs(e.statusCode, t.statusCode))
            : e.status && (t.statusCode = Bs(e.status, t.statusCode)),
        e.statusMessage
            ? (t.statusMessage = e.statusMessage)
            : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage)
    ) {
        const n = t.statusMessage;
        Ha(t.statusMessage) !== n &&
            console.warn(
                "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
            );
    }
    return (
        e.fatal !== void 0 && (t.fatal = e.fatal),
        e.unhandled !== void 0 && (t.unhandled = e.unhandled),
        t
    );
}
function fh(e) {
    return e?.constructor?.__h3_error__ === !0;
}
const dh = /[^\u0009\u0020-\u007E]/g;
function Ha(e = "") {
    return e.replace(dh, "");
}
function Bs(e, t = 200) {
    return !e ||
        (typeof e == "string" && (e = Number.parseInt(e, 10)),
        e < 100 || e > 999)
        ? t
        : e;
}
const Da = Symbol("layout-meta"),
    Xt = Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const Ue = () => ye()?.$router,
    Gr = () => ($r() ? Ce(Xt, ye()._route) : ye()._route);
const hh = () => {
        try {
            if (ye()._processingMiddleware) return !0;
        } catch {
            return !1;
        }
        return !1;
    },
    pm = (e, t) => {
        e ||= "/";
        const n =
            typeof e == "string"
                ? e
                : "path" in e
                  ? ph(e)
                  : Ue().resolve(e).href;
        if (t?.open) {
            const { target: c = "_blank", windowFeatures: u = {} } = t.open,
                a = [];
            for (const [f, h] of Object.entries(u))
                h !== void 0 && a.push(`${f.toLowerCase()}=${h}`);
            return (open(n, c, a.join(", ")), Promise.resolve());
        }
        const r = en(n, { acceptRelative: !0 }),
            s = t?.external || r;
        if (s) {
            if (!t?.external)
                throw new Error(
                    "Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`."
                );
            const { protocol: c } = new URL(n, window.location.href);
            if (c && md(c))
                throw new Error(
                    `Cannot navigate to a URL with '${c}' protocol.`
                );
        }
        const o = hh();
        if (!s && o) {
            if (t?.replace) {
                if (typeof e == "string") {
                    const { pathname: c, search: u, hash: a } = Aa(e);
                    return {
                        path: c,
                        ...(u && { query: wa(u) }),
                        ...(a && { hash: a }),
                        replace: !0
                    };
                }
                return { ...e, replace: !0 };
            }
            return e;
        }
        const i = Ue(),
            l = ye();
        return s
            ? (l._scope.stop(),
              t?.replace ? location.replace(n) : (location.href = n),
              o
                  ? l.isHydrating
                      ? new Promise(() => {})
                      : !1
                  : Promise.resolve())
            : t?.replace
              ? i.replace(e)
              : i.push(e);
    };
function ph(e) {
    return Ea(e.path || "", e.query || {}) + (e.hash || "");
}
const ja = "__nuxt_error",
    qr = () => Qc(ye().payload, "error"),
    Vt = (e) => {
        const t = zt(e);
        try {
            const n = qr();
            (ye().hooks.callHook("app:error", t), (n.value ||= t));
        } catch {
            throw t;
        }
        return t;
    },
    gh = async (e = {}) => {
        const t = ye(),
            n = qr();
        (t.callHook("app:error:cleared", e),
            e.redirect && (await Ue().replace(e.redirect)),
            (n.value = void 0));
    },
    Fa = (e) => !!e && typeof e == "object" && ja in e,
    zt = (e) => {
        const t = uh(e);
        return (
            Object.defineProperty(t, ja, {
                value: !0,
                configurable: !1,
                writable: !1
            }),
            t
        );
    };
function mh(e) {
    const t = _h(e),
        n = new ArrayBuffer(t.length),
        r = new DataView(n);
    for (let s = 0; s < n.byteLength; s++) r.setUint8(s, t.charCodeAt(s));
    return n;
}
const yh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function _h(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "",
        n = 0,
        r = 0;
    for (let s = 0; s < e.length; s++)
        ((n <<= 6),
            (n |= yh.indexOf(e[s])),
            (r += 6),
            r === 24 &&
                ((t += String.fromCharCode((n & 16711680) >> 16)),
                (t += String.fromCharCode((n & 65280) >> 8)),
                (t += String.fromCharCode(n & 255)),
                (n = r = 0)));
    return (
        r === 12
            ? ((n >>= 4), (t += String.fromCharCode(n)))
            : r === 18 &&
              ((n >>= 2),
              (t += String.fromCharCode((n & 65280) >> 8)),
              (t += String.fromCharCode(n & 255))),
        t
    );
}
const vh = -1,
    bh = -2,
    wh = -3,
    Eh = -4,
    Rh = -5,
    Th = -6;
function Ch(e, t) {
    return Ah(JSON.parse(e), t);
}
function Ah(e, t) {
    if (typeof e == "number") return s(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e,
        r = Array(n.length);
    function s(o, i = !1) {
        if (o === vh) return;
        if (o === wh) return NaN;
        if (o === Eh) return 1 / 0;
        if (o === Rh) return -1 / 0;
        if (o === Th) return -0;
        if (i || typeof o != "number") throw new Error("Invalid input");
        if (o in r) return r[o];
        const l = n[o];
        if (!l || typeof l != "object") r[o] = l;
        else if (Array.isArray(l))
            if (typeof l[0] == "string") {
                const c = l[0],
                    u = t && Object.hasOwn(t, c) ? t[c] : void 0;
                if (u) {
                    let a = l[1];
                    return (
                        typeof a != "number" && (a = n.push(l[1]) - 1),
                        (r[o] = u(s(a)))
                    );
                }
                switch (c) {
                    case "Date":
                        r[o] = new Date(l[1]);
                        break;
                    case "Set":
                        const a = new Set();
                        r[o] = a;
                        for (let d = 1; d < l.length; d += 1) a.add(s(l[d]));
                        break;
                    case "Map":
                        const f = new Map();
                        r[o] = f;
                        for (let d = 1; d < l.length; d += 2)
                            f.set(s(l[d]), s(l[d + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(l[1], l[2]);
                        break;
                    case "Object":
                        r[o] = Object(l[1]);
                        break;
                    case "BigInt":
                        r[o] = BigInt(l[1]);
                        break;
                    case "null":
                        const h = Object.create(null);
                        r[o] = h;
                        for (let d = 1; d < l.length; d += 2)
                            h[l[d]] = s(l[d + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array": {
                        const d = globalThis[c],
                            _ = new d(s(l[1]));
                        r[o] = l[2] !== void 0 ? _.subarray(l[2], l[3]) : _;
                        break;
                    }
                    case "ArrayBuffer": {
                        const d = l[1],
                            _ = mh(d);
                        r[o] = _;
                        break;
                    }
                    case "Temporal.Duration":
                    case "Temporal.Instant":
                    case "Temporal.PlainDate":
                    case "Temporal.PlainTime":
                    case "Temporal.PlainDateTime":
                    case "Temporal.PlainMonthDay":
                    case "Temporal.PlainYearMonth":
                    case "Temporal.ZonedDateTime": {
                        const d = c.slice(9);
                        r[o] = Temporal[d].from(l[1]);
                        break;
                    }
                    case "URL": {
                        const d = new URL(l[1]);
                        r[o] = d;
                        break;
                    }
                    case "URLSearchParams": {
                        const d = new URLSearchParams(l[1]);
                        r[o] = d;
                        break;
                    }
                    default:
                        throw new Error(`Unknown type ${c}`);
                }
            } else {
                const c = new Array(l.length);
                r[o] = c;
                for (let u = 0; u < l.length; u += 1) {
                    const a = l[u];
                    a !== bh && (c[u] = s(a));
                }
            }
        else {
            const c = {};
            r[o] = c;
            for (const u in l) {
                if (u === "__proto__")
                    throw new Error(
                        "Cannot parse an object with a `__proto__` property"
                    );
                const a = l[u];
                c[u] = s(a);
            }
        }
        return r[o];
    }
    return s(0);
}
const Sh = new Set(["link", "style", "script", "noscript"]),
    xh = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
    wi = new Set(["base", "meta", "link", "style", "script", "noscript"]),
    Ph = new Set([
        "title",
        "base",
        "htmlAttrs",
        "bodyAttrs",
        "meta",
        "link",
        "style",
        "script",
        "noscript"
    ]),
    kh = new Set([
        "base",
        "title",
        "titleTemplate",
        "bodyAttrs",
        "htmlAttrs",
        "templateParams"
    ]),
    Oh = new Set([
        "key",
        "tagPosition",
        "tagPriority",
        "tagDuplicateStrategy",
        "innerHTML",
        "textContent",
        "processTemplateParams"
    ]),
    Nh = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
    Mh = new Set([
        "theme-color",
        "google-site-verification",
        "og",
        "article",
        "book",
        "profile",
        "twitter",
        "author"
    ]),
    Ih = ["name", "property", "http-equiv"],
    Lh = new Set(["viewport", "description", "keywords", "robots"]);
function Ba(e) {
    const t = e.split(":");
    return t.length ? Mh.has(t[1]) : !1;
}
function Us(e) {
    const { props: t, tag: n } = e;
    if (kh.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
        for (const r of Ih)
            if (t[r] !== void 0) {
                const s = t[r],
                    o = s.includes(":"),
                    i = Lh.has(s),
                    c = !(o || i) && e.key ? `:key:${e.key}` : "";
                return `${n}:${s}${c}`;
            }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (xh.has(n)) {
        const r = e.textContent || e.innerHTML;
        if (r) return `${n}:content:${r}`;
    }
}
function Ei(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return (
        n ||
        `${e.tag}:${Object.entries(e.props)
            .map(([r, s]) => `${r}:${String(s)}`)
            .join(",")}`
    );
}
function kr(e, t, n) {
    typeof e === "function" &&
        (!n || (n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n"))) &&
        (e = e());
    let s;
    if ((t && (s = t(n, e)), Array.isArray(s))) return s.map((o) => kr(o, t));
    if (s?.constructor === Object) {
        const o = {};
        for (const i of Object.keys(s)) o[i] = kr(s[i], t, i);
        return o;
    }
    return s;
}
function Hh(e, t) {
    const n = e === "style" ? new Map() : new Set();
    function r(s) {
        const o = s.trim();
        if (o)
            if (e === "style") {
                const [i, ...l] = o.split(":").map((c) => c.trim());
                i && l.length && n.set(i, l.join(":"));
            } else
                o.split(" ")
                    .filter(Boolean)
                    .forEach((i) => n.add(i));
    }
    return (
        typeof t == "string"
            ? e === "style"
                ? t.split(";").forEach(r)
                : r(t)
            : Array.isArray(t)
              ? t.forEach((s) => r(s))
              : t &&
                typeof t == "object" &&
                Object.entries(t).forEach(([s, o]) => {
                    o &&
                        o !== "false" &&
                        (e === "style" ? n.set(s.trim(), o) : r(s));
                }),
        n
    );
}
function Ua(e, t) {
    return (
        (e.props = e.props || {}),
        t
            ? e.tag === "templateParams"
                ? ((e.props = t), e)
                : (Object.entries(t).forEach(([n, r]) => {
                      if (r === null) {
                          e.props[n] = null;
                          return;
                      }
                      if (n === "class" || n === "style") {
                          e.props[n] = Hh(n, r);
                          return;
                      }
                      if (Oh.has(n)) {
                          if (
                              ["textContent", "innerHTML"].includes(n) &&
                              typeof r == "object"
                          ) {
                              let i = t.type;
                              if (
                                  (t.type || (i = "application/json"),
                                  !i?.endsWith("json") &&
                                      i !== "speculationrules")
                              )
                                  return;
                              ((t.type = i),
                                  (e.props.type = i),
                                  (e[n] = JSON.stringify(r)));
                          } else e[n] = r;
                          return;
                      }
                      const s = String(r),
                          o = n.startsWith("data-");
                      s === "true" || s === ""
                          ? (e.props[n] = o ? s : !0)
                          : !r && o && s === "false"
                            ? (e.props[n] = "false")
                            : r !== void 0 && (e.props[n] = r);
                  }),
                  e)
            : e
    );
}
function Dh(e, t) {
    const n =
            typeof t == "object" && typeof t != "function"
                ? t
                : {
                      [e === "script" || e === "noscript" || e === "style"
                          ? "innerHTML"
                          : "textContent"]: t
                  },
        r = Ua({ tag: e, props: {} }, n);
    return (
        r.key && Sh.has(r.tag) && (r.props["data-hid"] = r._h = r.key),
        r.tag === "script" &&
            typeof r.innerHTML == "object" &&
            ((r.innerHTML = JSON.stringify(r.innerHTML)),
            (r.props.type = r.props.type || "application/json")),
        Array.isArray(r.props.content)
            ? r.props.content.map((s) => ({
                  ...r,
                  props: { ...r.props, content: s }
              }))
            : r
    );
}
function jh(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (s, o) => {
        for (let i = 0; i < t.length; i++) o = t[i](s, o);
        return o;
    };
    e = n(void 0, e);
    const r = [];
    return (
        (e = kr(e, n)),
        Object.entries(e || {}).forEach(([s, o]) => {
            if (o !== void 0)
                for (const i of Array.isArray(o) ? o : [o]) r.push(Dh(s, i));
        }),
        r.flat()
    );
}
const Ri = (e, t) => (e._w === t._w ? e._p - t._p : e._w - t._w),
    Ti = { base: -10, title: 10 },
    Fh = { critical: -8, high: -1, low: 2 },
    Ci = {
        meta: { "content-security-policy": -30, charset: -20, viewport: -15 },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            "dns-prefetch": 90,
            prerender: 90
        },
        script: { async: 30, defer: 80, sync: 50 },
        style: { imported: 40, sync: 60 }
    },
    Bh = /@import/,
    Pn = (e) => e === "" || e === !0;
function Uh(e, t) {
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = Fh[t.tagPriority] || 0,
        s = e.resolvedOptions.disableCapoSorting
            ? { link: {}, script: {}, style: {} }
            : Ci;
    if (t.tag in Ti) n = Ti[t.tag];
    else if (t.tag === "meta") {
        const o =
            t.props["http-equiv"] === "content-security-policy"
                ? "content-security-policy"
                : t.props.charset
                  ? "charset"
                  : t.props.name === "viewport"
                    ? "viewport"
                    : null;
        o && (n = Ci.meta[o]);
    } else
        t.tag === "link" && t.props.rel
            ? (n = s.link[t.props.rel])
            : t.tag === "script"
              ? Pn(t.props.async)
                  ? (n = s.script.async)
                  : t.props.src &&
                      !Pn(t.props.defer) &&
                      !Pn(t.props.async) &&
                      t.props.type !== "module" &&
                      !t.props.type?.endsWith("json")
                    ? (n = s.script.sync)
                    : Pn(t.props.defer) &&
                      t.props.src &&
                      !Pn(t.props.async) &&
                      (n = s.script.defer)
              : t.tag === "style" &&
                (n =
                    t.innerHTML && Bh.test(t.innerHTML)
                        ? s.style.imported
                        : s.style.sync);
    return (n || 100) + r;
}
function Ai(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
}
function $h(e = {}) {
    const t = ka();
    t.addHooks(e.hooks || {});
    const n = !e.document,
        r = new Map(),
        s = new Map(),
        o = new Set(),
        i = {
            _entryCount: 1,
            plugins: s,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            ssr: n,
            entries: r,
            headEntries() {
                return [...r.values()];
            },
            use: (l) => Ai(i, l),
            push(l, c) {
                const u = { ...(c || {}) };
                delete u.head;
                const a = u._index ?? i._entryCount++,
                    f = { _i: a, input: l, options: u },
                    h = {
                        _poll(d = !1) {
                            ((i.dirty = !0),
                                !d && o.add(a),
                                t.callHook("entries:updated", i));
                        },
                        dispose() {
                            r.delete(a) && i.invalidate();
                        },
                        patch(d) {
                            (!u.mode ||
                                (u.mode === "server" && n) ||
                                (u.mode === "client" && !n)) &&
                                ((f.input = d), r.set(a, f), h._poll());
                        }
                    };
                return (h.patch(l), h);
            },
            async resolveTags() {
                const l = {
                    tagMap: new Map(),
                    tags: [],
                    entries: [...i.entries.values()]
                };
                for (await t.callHook("entries:resolve", l); o.size; ) {
                    const h = o.values().next().value;
                    o.delete(h);
                    const d = r.get(h);
                    if (d) {
                        const _ = {
                            tags: jh(d.input, e.propResolvers || []).map((v) =>
                                Object.assign(v, d.options)
                            ),
                            entry: d
                        };
                        (await t.callHook("entries:normalize", _),
                            (d._tags = _.tags.map(
                                (v, T) => (
                                    (v._w = Uh(i, v)),
                                    (v._p = (d._i << 10) + T),
                                    (v._d = Us(v)),
                                    v
                                )
                            )));
                    }
                }
                let c = !1;
                l.entries
                    .flatMap((h) =>
                        (h._tags || []).map((d) => ({
                            ...d,
                            props: { ...d.props }
                        }))
                    )
                    .sort(Ri)
                    .reduce((h, d) => {
                        const _ = String(d._d || d._p);
                        if (!h.has(_)) return h.set(_, d);
                        const v = h.get(_);
                        if (
                            (d?.tagDuplicateStrategy ||
                                (Nh.has(d.tag) ? "merge" : null) ||
                                (d.key && d.key === v.key ? "merge" : null)) ===
                            "merge"
                        ) {
                            const R = { ...v.props };
                            (Object.entries(d.props).forEach(
                                ([b, g]) =>
                                    (R[b] =
                                        b === "style"
                                            ? new Map([
                                                  ...(v.props.style ||
                                                      new Map()),
                                                  ...g
                                              ])
                                            : b === "class"
                                              ? new Set([
                                                    ...(v.props.class ||
                                                        new Set()),
                                                    ...g
                                                ])
                                              : g)
                            ),
                                h.set(_, { ...d, props: R }));
                        } else
                            d._p >> 10 === v._p >> 10 &&
                            d.tag === "meta" &&
                            Ba(_)
                                ? (h.set(
                                      _,
                                      Object.assign(
                                          [...(Array.isArray(v) ? v : [v]), d],
                                          d
                                      )
                                  ),
                                  (c = !0))
                                : (d._w === v._w
                                      ? d._p > v._p
                                      : d?._w < v?._w) && h.set(_, d);
                        return h;
                    }, l.tagMap);
                const u = l.tagMap.get("title"),
                    a = l.tagMap.get("titleTemplate");
                if (((i._title = u?.textContent), a)) {
                    const h = a?.textContent;
                    if (((i._titleTemplate = h), h)) {
                        let d = typeof h == "function" ? h(u?.textContent) : h;
                        (typeof d == "string" &&
                            !i.plugins.has("template-params") &&
                            (d = d.replace("%s", u?.textContent || "")),
                            u
                                ? d === null
                                    ? l.tagMap.delete("title")
                                    : l.tagMap.set("title", {
                                          ...u,
                                          textContent: d
                                      })
                                : ((a.tag = "title"), (a.textContent = d)));
                    }
                }
                ((l.tags = Array.from(l.tagMap.values())),
                    c && (l.tags = l.tags.flat().sort(Ri)),
                    await t.callHook("tags:beforeResolve", l),
                    await t.callHook("tags:resolve", l),
                    await t.callHook("tags:afterResolve", l));
                const f = [];
                for (const h of l.tags) {
                    const { innerHTML: d, tag: _, props: v } = h;
                    if (
                        Ph.has(_) &&
                        !(
                            Object.keys(v).length === 0 &&
                            !h.innerHTML &&
                            !h.textContent
                        ) &&
                        !(
                            _ === "meta" &&
                            !v.content &&
                            !v["http-equiv"] &&
                            !v.charset
                        )
                    ) {
                        if (_ === "script" && d) {
                            if (v.type?.endsWith("json")) {
                                const T =
                                    typeof d == "string"
                                        ? d
                                        : JSON.stringify(d);
                                h.innerHTML = T.replace(/</g, "\\u003C");
                            } else
                                typeof d == "string" &&
                                    (h.innerHTML = d.replace(
                                        new RegExp(`</${_}`, "g"),
                                        `<\\/${_}`
                                    ));
                            h._d = Us(h);
                        }
                        f.push(h);
                    }
                }
                return f;
            },
            invalidate() {
                for (const l of r.values()) o.add(l._i);
                ((i.dirty = !0), t.callHook("entries:updated", i));
            }
        };
    return (
        (e?.plugins || []).forEach((l) => Ai(i, l)),
        i.hooks.callHook("init", i),
        e.init?.forEach((l) => l && i.push(l)),
        i
    );
}
const Vh = (e, t) => (ve(t) ? qc(t) : t),
    _o = "usehead";
function Wh(e) {
    return {
        install(n) {
            ((n.config.globalProperties.$unhead = e),
                (n.config.globalProperties.$head = e),
                n.provide(_o, e));
        }
    }.install;
}
function Kh() {
    if ($r()) {
        const e = Ce(_o);
        if (!e)
            throw new Error(
                "useHead() was called without provide context, ensure you call it through the setup() function."
            );
        return e;
    }
    throw new Error(
        "useHead() was called without provide context, ensure you call it through the setup() function."
    );
}
function Gh(e, t = {}) {
    const n = t.head || Kh();
    return n.ssr ? n.push(e || {}, t) : qh(n, e, t);
}
function qh(e, t, n = {}) {
    const r = gt(!1);
    let s;
    return (
        Mu(() => {
            const i = r.value ? {} : kr(t, Vh);
            s ? s.patch(i) : (s = e.push(i, n));
        }),
        Ht() &&
            (Xn(() => {
                s.dispose();
            }),
            Il(() => {
                r.value = !0;
            }),
            Ml(() => {
                r.value = !1;
            })),
        s
    );
}
function $a(e) {
    const t = e || ye();
    return (
        t.ssrContext?.head ||
        t.runWithContext(() => {
            if ($r()) {
                const n = Ce(_o);
                if (!n)
                    throw new Error("[nuxt] [unhead] Missing Unhead instance.");
                return n;
            }
        })
    );
}
function gm(e, t = {}) {
    const n = t.head || $a(t.nuxt);
    return Gh(e, { head: n, ...t });
}
let dr, hr;
function Jh() {
    return (
        (dr = $fetch(yo(`builds/meta/${Kr().app.buildId}.json`), {
            responseType: "json"
        })),
        dr
            .then((e) => {
                hr = lh(e.matcher);
            })
            .catch((e) => {
                console.error("[nuxt] Error fetching app manifest.", e);
            }),
        dr
    );
}
function Jr() {
    return dr || Jh();
}
async function vo(e) {
    const t = typeof e == "string" ? e : e.path;
    if ((await Jr(), !hr))
        return (
            console.error("[nuxt] Error creating app manifest matcher.", hr),
            {}
        );
    try {
        return La({}, ...hr.matchAll(t).reverse());
    } catch (n) {
        return (console.error("[nuxt] Error matching route rules.", n), {});
    }
}
async function Si(e, t = {}) {
    if (!(await Wa(e))) return null;
    const r = await zh(e, t);
    return (await Va(r)) || null;
}
const Yh = "_payload.json";
async function zh(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || en(n.pathname, { acceptRelative: !0 }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = Kr(),
        s = t.hash || (t.fresh ? Date.now() : r.app.buildId),
        o = r.app.cdnURL,
        i = o && (await Wa(e)) ? o : r.app.baseURL;
    return go(i, n.pathname, Yh + (s ? `?${s}` : ""));
}
async function Va(e) {
    const t = fetch(e, { cache: "force-cache" }).then((n) => n.text().then(Ka));
    try {
        return await t;
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n);
    }
    return null;
}
async function Wa(e = Gr().path) {
    const t = ye();
    return (
        (e = e === "/" ? e : e.replace(/\/$/, "")),
        (await Jr()).prerendered.includes(e)
            ? !0
            : t.runWithContext(async () => {
                  const r = await vo({ path: e });
                  return !!r.prerender && !r.redirect;
              })
    );
}
let Ut = null;
async function Qh() {
    if (Ut) return Ut;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await Ka(e.textContent || ""),
        n = e.dataset.src ? await Va(e.dataset.src) : void 0;
    return (
        (Ut = { ...t, ...n, ...window.__NUXT__ }),
        Ut.config?.public && (Ut.config.public = Lt(Ut.config.public)),
        Ut
    );
}
async function Ka(e) {
    return await Ch(e, ye()._payloadRevivers);
}
function Xh(e, t) {
    ye()._payloadRevivers[e] = t;
}
const Zh = [
        ["NuxtError", (e) => zt(e)],
        [
            "EmptyShallowRef",
            (e) => _t(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Cr(e))
        ],
        [
            "EmptyRef",
            (e) => gt(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Cr(e))
        ],
        ["ShallowRef", (e) => _t(e)],
        ["ShallowReactive", (e) => ot(e)],
        ["Ref", (e) => gt(e)],
        ["Reactive", (e) => Lt(e)]
    ],
    ep = wt({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n;
            for (const [r, s] of Zh) Xh(r, s);
            (Object.assign(
                e.payload,
                (([t, n] = mn(() => e.runWithContext(Qh))),
                (t = await t),
                n(),
                t)
            ),
                delete window.__NUXT__);
        }
    });
async function bo(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = { shouldRender: !0, tags: [] };
    if ((await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender))
        return (
            e._domUpdatePromise ||
                (e._domUpdatePromise = new Promise(async (s) => {
                    const o = new Map(),
                        i = new Promise((d) => {
                            e.resolveTags().then((_) => {
                                d(
                                    _.map((v) => {
                                        const T = o.get(v._d) || 0,
                                            R = {
                                                tag: v,
                                                id:
                                                    (T
                                                        ? `${v._d}:${T}`
                                                        : v._d) || Ei(v),
                                                shouldRender: !0
                                            };
                                        return (
                                            v._d &&
                                                Ba(v._d) &&
                                                o.set(v._d, T + 1),
                                            R
                                        );
                                    })
                                );
                            });
                        });
                    let l = e._dom;
                    if (!l) {
                        l = {
                            title: n.title,
                            elMap: new Map()
                                .set("htmlAttrs", n.documentElement)
                                .set("bodyAttrs", n.body)
                        };
                        for (const d of ["body", "head"]) {
                            const _ = n[d]?.children;
                            for (const v of _) {
                                const T = v.tagName.toLowerCase();
                                if (!wi.has(T)) continue;
                                const R = Ua(
                                    { tag: T, props: {} },
                                    {
                                        innerHTML: v.innerHTML,
                                        ...(v
                                            .getAttributeNames()
                                            .reduce(
                                                (b, g) => (
                                                    (b[g] = v.getAttribute(g)),
                                                    b
                                                ),
                                                {}
                                            ) || {})
                                    }
                                );
                                if (
                                    ((R.key =
                                        v.getAttribute("data-hid") || void 0),
                                    (R._d = Us(R) || Ei(R)),
                                    l.elMap.has(R._d))
                                ) {
                                    let b = 1,
                                        g = R._d;
                                    for (; l.elMap.has(g); )
                                        g = `${R._d}:${b++}`;
                                    l.elMap.set(g, v);
                                } else l.elMap.set(R._d, v);
                            }
                        }
                    }
                    ((l.pendingSideEffects = { ...l.sideEffects }),
                        (l.sideEffects = {}));
                    function c(d, _, v) {
                        const T = `${d}:${_}`;
                        ((l.sideEffects[T] = v),
                            delete l.pendingSideEffects[T]);
                    }
                    function u({ id: d, $el: _, tag: v }) {
                        const T = v.tag.endsWith("Attrs");
                        (l.elMap.set(d, _),
                            T ||
                                (v.textContent &&
                                    v.textContent !== _.textContent &&
                                    (_.textContent = v.textContent),
                                v.innerHTML &&
                                    v.innerHTML !== _.innerHTML &&
                                    (_.innerHTML = v.innerHTML),
                                c(d, "el", () => {
                                    (_?.remove(), l.elMap.delete(d));
                                })));
                        for (const R in v.props) {
                            if (
                                !Object.prototype.hasOwnProperty.call(
                                    v.props,
                                    R
                                )
                            )
                                continue;
                            const b = v.props[R];
                            if (R.startsWith("on") && typeof b == "function") {
                                const y = _?.dataset;
                                if (y && y[`${R}fired`]) {
                                    const w = R.slice(0, -5);
                                    b.call(_, new Event(w.substring(2)));
                                }
                                _.getAttribute(`data-${R}`) !== "" &&
                                    ((v.tag === "bodyAttrs"
                                        ? n.defaultView
                                        : _
                                    ).addEventListener(
                                        R.substring(2),
                                        b.bind(_)
                                    ),
                                    _.setAttribute(`data-${R}`, ""));
                                continue;
                            }
                            const g = `attr:${R}`;
                            if (R === "class") {
                                if (!b) continue;
                                for (const y of b)
                                    (T &&
                                        c(d, `${g}:${y}`, () =>
                                            _.classList.remove(y)
                                        ),
                                        !_.classList.contains(y) &&
                                            _.classList.add(y));
                            } else if (R === "style") {
                                if (!b) continue;
                                for (const [y, w] of b)
                                    (c(d, `${g}:${y}`, () => {
                                        _.style.removeProperty(y);
                                    }),
                                        _.style.setProperty(y, w));
                            } else
                                b !== !1 &&
                                    b !== null &&
                                    (_.getAttribute(R) !== b &&
                                        _.setAttribute(
                                            R,
                                            b === !0 ? "" : String(b)
                                        ),
                                    T && c(d, g, () => _.removeAttribute(R)));
                        }
                    }
                    const a = [],
                        f = {
                            bodyClose: void 0,
                            bodyOpen: void 0,
                            head: void 0
                        },
                        h = await i;
                    for (const d of h) {
                        const { tag: _, shouldRender: v, id: T } = d;
                        if (v) {
                            if (_.tag === "title") {
                                ((n.title = _.textContent),
                                    c("title", "", () => (n.title = l.title)));
                                continue;
                            }
                            ((d.$el = d.$el || l.elMap.get(T)),
                                d.$el ? u(d) : wi.has(_.tag) && a.push(d));
                        }
                    }
                    for (const d of a) {
                        const _ = d.tag.tagPosition || "head";
                        ((d.$el = n.createElement(d.tag.tag)),
                            u(d),
                            (f[_] = f[_] || n.createDocumentFragment()),
                            f[_].appendChild(d.$el));
                    }
                    for (const d of h)
                        await e.hooks.callHook("dom:renderTag", d, n, c);
                    (f.head && n.head.appendChild(f.head),
                        f.bodyOpen &&
                            n.body.insertBefore(f.bodyOpen, n.body.firstChild),
                        f.bodyClose && n.body.appendChild(f.bodyClose));
                    for (const d in l.pendingSideEffects)
                        l.pendingSideEffects[d]();
                    ((e._dom = l),
                        await e.hooks.callHook("dom:rendered", { renders: h }),
                        s());
                }).finally(() => {
                    ((e._domUpdatePromise = void 0), (e.dirty = !1));
                })),
            e._domUpdatePromise
        );
}
function tp(e = {}) {
    const t = e.domOptions?.render || bo;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n =
        e.document?.head.querySelector('script[id="unhead:payload"]')
            ?.innerHTML || !1;
    return $h({
        ...e,
        plugins: [
            ...(e.plugins || []),
            { key: "client", hooks: { "entries:updated": t } }
        ],
        init: [n ? JSON.parse(n) : !1, ...(e.init || [])]
    });
}
function np(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t(() => {
            n === r && e();
        });
    };
}
function rp(e = {}) {
    const t = tp({
        domOptions: {
            render: np(
                () => bo(t),
                (n) => setTimeout(n, 0)
            )
        },
        ...e
    });
    return ((t.install = Wh(t)), t);
}
const sp = { disableDefaults: !0 },
    op = wt({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = rp(sp);
            e.vueApp.use(t);
            {
                let n = !0;
                const r = async () => {
                    ((n = !1), await bo(t));
                };
                (t.hooks.hook("dom:beforeRender", (s) => {
                    s.shouldRender = !n;
                }),
                    e.hooks.hook("page:start", () => {
                        n = !0;
                    }),
                    e.hooks.hook("page:finish", () => {
                        e.isHydrating || r();
                    }),
                    e.hooks.hook("app:error", r),
                    e.hooks.hook("app:suspense:resolve", r));
            }
        }
    });
const ln = typeof document < "u";
function Ga(e) {
    return (
        typeof e == "object" ||
        "displayName" in e ||
        "props" in e ||
        "__vccOpts" in e
    );
}
function ip(e) {
    return (
        e.__esModule ||
        e[Symbol.toStringTag] === "Module" ||
        (e.default && Ga(e.default))
    );
}
const re = Object.assign;
function ds(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = et(s) ? s.map(e) : e(s);
    }
    return n;
}
const Bn = () => {},
    et = Array.isArray;
function xi(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
}
const qa = /#/g,
    lp = /&/g,
    ap = /\//g,
    cp = /=/g,
    up = /\?/g,
    Ja = /\+/g,
    fp = /%5B/g,
    dp = /%5D/g,
    Ya = /%5E/g,
    hp = /%60/g,
    za = /%7B/g,
    pp = /%7C/g,
    Qa = /%7D/g,
    gp = /%20/g;
function wo(e) {
    return e == null
        ? ""
        : encodeURI("" + e)
              .replace(pp, "|")
              .replace(fp, "[")
              .replace(dp, "]");
}
function mp(e) {
    return wo(e).replace(za, "{").replace(Qa, "}").replace(Ya, "^");
}
function $s(e) {
    return wo(e)
        .replace(Ja, "%2B")
        .replace(gp, "+")
        .replace(qa, "%23")
        .replace(lp, "%26")
        .replace(hp, "`")
        .replace(za, "{")
        .replace(Qa, "}")
        .replace(Ya, "^");
}
function yp(e) {
    return $s(e).replace(cp, "%3D");
}
function _p(e) {
    return wo(e).replace(qa, "%23").replace(up, "%3F");
}
function vp(e) {
    return _p(e).replace(ap, "%2F");
}
function qn(e) {
    if (e == null) return null;
    try {
        return decodeURIComponent("" + e);
    } catch {}
    return "" + e;
}
const bp = /\/$/,
    wp = (e) => e.replace(bp, "");
function hs(e, t, n = "/") {
    let r,
        s = {},
        o = "",
        i = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return (
        (c = l >= 0 && c > l ? -1 : c),
        c >= 0 &&
            ((r = t.slice(0, c)),
            (o = t.slice(c, l > 0 ? l : t.length)),
            (s = e(o.slice(1)))),
        l >= 0 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
        (r = Cp(r ?? t, n)),
        { fullPath: r + o + i, path: r, query: s, hash: qn(i) }
    );
}
function Ep(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
}
function Pi(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase())
        ? e
        : e.slice(t.length) || "/";
}
function Rp(e, t, n) {
    const r = t.matched.length - 1,
        s = n.matched.length - 1;
    return (
        r > -1 &&
        r === s &&
        Rn(t.matched[r], n.matched[s]) &&
        Xa(t.params, n.params) &&
        e(t.query) === e(n.query) &&
        t.hash === n.hash
    );
}
function Rn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xa(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var n in e) if (!Tp(e[n], t[n])) return !1;
    return !0;
}
function Tp(e, t) {
    return et(e) ? ki(e, t) : et(t) ? ki(t, e) : e?.valueOf() === t?.valueOf();
}
function ki(e, t) {
    return et(t)
        ? e.length === t.length && e.every((n, r) => n === t[r])
        : e.length === 1 && e[0] === t;
}
function Cp(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1,
        i,
        l;
    for (i = 0; i < r.length; i++)
        if (((l = r[i]), l !== "."))
            if (l === "..") o > 1 && o--;
            else break;
    return n.slice(0, o).join("/") + "/" + r.slice(i).join("/");
}
const We = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
let Vs = (function (e) {
        return ((e.pop = "pop"), (e.push = "push"), e);
    })({}),
    ps = (function (e) {
        return (
            (e.back = "back"),
            (e.forward = "forward"),
            (e.unknown = ""),
            e
        );
    })({});
function Ap(e) {
    if (!e)
        if (ln) {
            const t = document.querySelector("base");
            ((e = (t && t.getAttribute("href")) || "/"),
                (e = e.replace(/^\w+:\/\/[^\/]+/, "")));
        } else e = "/";
    return (e[0] !== "/" && e[0] !== "#" && (e = "/" + e), wp(e));
}
const Sp = /^[^#]+#/;
function xp(e, t) {
    return e.replace(Sp, "#") + t;
}
function Pp(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    };
}
const Yr = () => ({ left: window.scrollX, top: window.scrollY });
function kp(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            s =
                typeof n == "string"
                    ? r
                        ? document.getElementById(n.slice(1))
                        : document.querySelector(n)
                    : n;
        if (!s) return;
        t = Pp(s, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(
              t.left != null ? t.left : window.scrollX,
              t.top != null ? t.top : window.scrollY
          );
}
function Oi(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const Ws = new Map();
function Op(e, t) {
    Ws.set(e, t);
}
function Np(e) {
    const t = Ws.get(e);
    return (Ws.delete(e), t);
}
function Mp(e) {
    return typeof e == "string" || (e && typeof e == "object");
}
function Za(e) {
    return typeof e == "string" || typeof e == "symbol";
}
let ge = (function (e) {
    return (
        (e[(e.MATCHER_NOT_FOUND = 1)] = "MATCHER_NOT_FOUND"),
        (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = "NAVIGATION_GUARD_REDIRECT"),
        (e[(e.NAVIGATION_ABORTED = 4)] = "NAVIGATION_ABORTED"),
        (e[(e.NAVIGATION_CANCELLED = 8)] = "NAVIGATION_CANCELLED"),
        (e[(e.NAVIGATION_DUPLICATED = 16)] = "NAVIGATION_DUPLICATED"),
        e
    );
})({});
const ec = Symbol("");
(ge.MATCHER_NOT_FOUND + "",
    ge.NAVIGATION_GUARD_REDIRECT + "",
    ge.NAVIGATION_ABORTED + "",
    ge.NAVIGATION_CANCELLED + "",
    ge.NAVIGATION_DUPLICATED + "");
function Tn(e, t) {
    return re(new Error(), { type: e, [ec]: !0 }, t);
}
function ut(e, t) {
    return e instanceof Error && ec in e && (t == null || !!(e.type & t));
}
const Ip = ["params", "query", "hash"];
function Lp(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of Ip) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
}
function Hp(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
        const s = n[r].replace(Ja, " "),
            o = s.indexOf("="),
            i = qn(o < 0 ? s : s.slice(0, o)),
            l = o < 0 ? null : qn(s.slice(o + 1));
        if (i in t) {
            let c = t[i];
            (et(c) || (c = t[i] = [c]), c.push(l));
        } else t[i] = l;
    }
    return t;
}
function Ni(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (((n = yp(n)), r == null)) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue;
        }
        (et(r) ? r.map((s) => s && $s(s)) : [r && $s(r)]).forEach((s) => {
            s !== void 0 &&
                ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
        });
    }
    return t;
}
function Dp(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 &&
            (t[n] = et(r)
                ? r.map((s) => (s == null ? null : "" + s))
                : r == null
                  ? r
                  : "" + r);
    }
    return t;
}
const jp = Symbol(""),
    Mi = Symbol(""),
    Eo = Symbol(""),
    Ro = Symbol(""),
    Ks = Symbol("");
function kn() {
    let e = [];
    function t(r) {
        return (
            e.push(r),
            () => {
                const s = e.indexOf(r);
                s > -1 && e.splice(s, 1);
            }
        );
    }
    function n() {
        e = [];
    }
    return { add: t, list: () => e.slice(), reset: n };
}
function xt(e, t, n, r, s, o = (i) => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () =>
        new Promise((l, c) => {
            const u = (h) => {
                    h === !1
                        ? c(Tn(ge.NAVIGATION_ABORTED, { from: n, to: t }))
                        : h instanceof Error
                          ? c(h)
                          : Mp(h)
                            ? c(
                                  Tn(ge.NAVIGATION_GUARD_REDIRECT, {
                                      from: t,
                                      to: h
                                  })
                              )
                            : (i &&
                                  r.enterCallbacks[s] === i &&
                                  typeof h == "function" &&
                                  i.push(h),
                              l());
                },
                a = o(() => e.call(r && r.instances[s], t, n, u));
            let f = Promise.resolve(a);
            (e.length < 3 && (f = f.then(u)), f.catch((h) => c(h)));
        });
}
function gs(e, t, n, r, s = (o) => o()) {
    const o = [];
    for (const i of e)
        for (const l in i.components) {
            let c = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (Ga(c)) {
                    const u = (c.__vccOpts || c)[t];
                    u && o.push(xt(u, n, r, i, l, s));
                } else {
                    let u = c();
                    o.push(() =>
                        u.then((a) => {
                            if (!a)
                                throw new Error(
                                    `Couldn't resolve component "${l}" at "${i.path}"`
                                );
                            const f = ip(a) ? a.default : a;
                            ((i.mods[l] = a), (i.components[l] = f));
                            const h = (f.__vccOpts || f)[t];
                            return h && xt(h, n, r, i, l, s)();
                        })
                    );
                }
        }
    return o;
}
function Fp(e, t) {
    const n = [],
        r = [],
        s = [],
        o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find((u) => Rn(u, l)) ? r.push(l) : n.push(l));
        const c = e.matched[i];
        c && (t.matched.find((u) => Rn(u, c)) || s.push(c));
    }
    return [n, r, s];
}
let Bp = () => location.protocol + "//" + location.host;
function tc(e, t) {
    const { pathname: n, search: r, hash: s } = t,
        o = e.indexOf("#");
    if (o > -1) {
        let i = s.includes(e.slice(o)) ? e.slice(o).length : 1,
            l = s.slice(i);
        return (l[0] !== "/" && (l = "/" + l), Pi(l, ""));
    }
    return Pi(n, e) + r + s;
}
function Up(e, t, n, r) {
    let s = [],
        o = [],
        i = null;
    const l = ({ state: h }) => {
        const d = tc(e, location),
            _ = n.value,
            v = t.value;
        let T = 0;
        if (h) {
            if (((n.value = d), (t.value = h), i && i === _)) {
                i = null;
                return;
            }
            T = v ? h.position - v.position : 0;
        } else r(d);
        s.forEach((R) => {
            R(n.value, _, {
                delta: T,
                type: Vs.pop,
                direction: T ? (T > 0 ? ps.forward : ps.back) : ps.unknown
            });
        });
    };
    function c() {
        i = n.value;
    }
    function u(h) {
        s.push(h);
        const d = () => {
            const _ = s.indexOf(h);
            _ > -1 && s.splice(_, 1);
        };
        return (o.push(d), d);
    }
    function a() {
        if (document.visibilityState === "hidden") {
            const { history: h } = window;
            if (!h.state) return;
            h.replaceState(re({}, h.state, { scroll: Yr() }), "");
        }
    }
    function f() {
        for (const h of o) h();
        ((o = []),
            window.removeEventListener("popstate", l),
            window.removeEventListener("pagehide", a),
            document.removeEventListener("visibilitychange", a));
    }
    return (
        window.addEventListener("popstate", l),
        window.addEventListener("pagehide", a),
        document.addEventListener("visibilitychange", a),
        { pauseListeners: c, listen: u, destroy: f }
    );
}
function Ii(e, t, n, r = !1, s = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? Yr() : null
    };
}
function $p(e) {
    const { history: t, location: n } = window,
        r = { value: tc(e, n) },
        s = { value: t.state };
    s.value ||
        o(
            r.value,
            {
                back: null,
                current: r.value,
                forward: null,
                position: t.length - 1,
                replaced: !0,
                scroll: null
            },
            !0
        );
    function o(c, u, a) {
        const f = e.indexOf("#"),
            h =
                f > -1
                    ? (n.host && document.querySelector("base")
                          ? e
                          : e.slice(f)) + c
                    : Bp() + e + c;
        try {
            (t[a ? "replaceState" : "pushState"](u, "", h), (s.value = u));
        } catch (d) {
            (console.error(d), n[a ? "replace" : "assign"](h));
        }
    }
    function i(c, u) {
        (o(
            c,
            re({}, t.state, Ii(s.value.back, c, s.value.forward, !0), u, {
                position: s.value.position
            }),
            !0
        ),
            (r.value = c));
    }
    function l(c, u) {
        const a = re({}, s.value, t.state, { forward: c, scroll: Yr() });
        (o(a.current, a, !0),
            o(
                c,
                re({}, Ii(r.value, c, null), { position: a.position + 1 }, u),
                !1
            ),
            (r.value = c));
    }
    return { location: r, state: s, push: l, replace: i };
}
function Vp(e) {
    e = Ap(e);
    const t = $p(e),
        n = Up(e, t.state, t.location, t.replace);
    function r(o, i = !0) {
        (i || n.pauseListeners(), history.go(o));
    }
    const s = re(
        { location: "", base: e, go: r, createHref: xp.bind(null, e) },
        t,
        n
    );
    return (
        Object.defineProperty(s, "location", {
            enumerable: !0,
            get: () => t.location.value
        }),
        Object.defineProperty(s, "state", {
            enumerable: !0,
            get: () => t.state.value
        }),
        s
    );
}
let Kt = (function (e) {
    return (
        (e[(e.Static = 0)] = "Static"),
        (e[(e.Param = 1)] = "Param"),
        (e[(e.Group = 2)] = "Group"),
        e
    );
})({});
var be = (function (e) {
    return (
        (e[(e.Static = 0)] = "Static"),
        (e[(e.Param = 1)] = "Param"),
        (e[(e.ParamRegExp = 2)] = "ParamRegExp"),
        (e[(e.ParamRegExpEnd = 3)] = "ParamRegExpEnd"),
        (e[(e.EscapeNext = 4)] = "EscapeNext"),
        e
    );
})(be || {});
const Wp = { type: Kt.Static, value: "" },
    Kp = /[a-zA-Z0-9_]/;
function Gp(e) {
    if (!e) return [[]];
    if (e === "/") return [[Wp]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(d) {
        throw new Error(`ERR (${n})/"${u}": ${d}`);
    }
    let n = be.Static,
        r = n;
    const s = [];
    let o;
    function i() {
        (o && s.push(o), (o = []));
    }
    let l = 0,
        c,
        u = "",
        a = "";
    function f() {
        u &&
            (n === be.Static
                ? o.push({ type: Kt.Static, value: u })
                : n === be.Param ||
                    n === be.ParamRegExp ||
                    n === be.ParamRegExpEnd
                  ? (o.length > 1 &&
                        (c === "*" || c === "+") &&
                        t(
                            `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
                        ),
                    o.push({
                        type: Kt.Param,
                        value: u,
                        regexp: a,
                        repeatable: c === "*" || c === "+",
                        optional: c === "*" || c === "?"
                    }))
                  : t("Invalid state to consume buffer"),
            (u = ""));
    }
    function h() {
        u += c;
    }
    for (; l < e.length; ) {
        if (((c = e[l++]), c === "\\" && n !== be.ParamRegExp)) {
            ((r = n), (n = be.EscapeNext));
            continue;
        }
        switch (n) {
            case be.Static:
                c === "/"
                    ? (u && f(), i())
                    : c === ":"
                      ? (f(), (n = be.Param))
                      : h();
                break;
            case be.EscapeNext:
                (h(), (n = r));
                break;
            case be.Param:
                c === "("
                    ? (n = be.ParamRegExp)
                    : Kp.test(c)
                      ? h()
                      : (f(),
                        (n = be.Static),
                        c !== "*" && c !== "?" && c !== "+" && l--);
                break;
            case be.ParamRegExp:
                c === ")"
                    ? a[a.length - 1] == "\\"
                        ? (a = a.slice(0, -1) + c)
                        : (n = be.ParamRegExpEnd)
                    : (a += c);
                break;
            case be.ParamRegExpEnd:
                (f(),
                    (n = be.Static),
                    c !== "*" && c !== "?" && c !== "+" && l--,
                    (a = ""));
                break;
            default:
                t("Unknown state");
                break;
        }
    }
    return (
        n === be.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`),
        f(),
        i(),
        s
    );
}
const Li = "[^/]+?",
    qp = { sensitive: !1, strict: !1, start: !0, end: !0 };
var ke = (function (e) {
    return (
        (e[(e._multiplier = 10)] = "_multiplier"),
        (e[(e.Root = 90)] = "Root"),
        (e[(e.Segment = 40)] = "Segment"),
        (e[(e.SubSegment = 30)] = "SubSegment"),
        (e[(e.Static = 40)] = "Static"),
        (e[(e.Dynamic = 20)] = "Dynamic"),
        (e[(e.BonusCustomRegExp = 10)] = "BonusCustomRegExp"),
        (e[(e.BonusWildcard = -50)] = "BonusWildcard"),
        (e[(e.BonusRepeatable = -20)] = "BonusRepeatable"),
        (e[(e.BonusOptional = -8)] = "BonusOptional"),
        (e[(e.BonusStrict = 0.7000000000000001)] = "BonusStrict"),
        (e[(e.BonusCaseSensitive = 0.25)] = "BonusCaseSensitive"),
        e
    );
})(ke || {});
const Jp = /[.+*?^${}()[\]/\\]/g;
function Yp(e, t) {
    const n = re({}, qp, t),
        r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const u of e) {
        const a = u.length ? [] : [ke.Root];
        n.strict && !u.length && (s += "/");
        for (let f = 0; f < u.length; f++) {
            const h = u[f];
            let d = ke.Segment + (n.sensitive ? ke.BonusCaseSensitive : 0);
            if (h.type === Kt.Static)
                (f || (s += "/"),
                    (s += h.value.replace(Jp, "\\$&")),
                    (d += ke.Static));
            else if (h.type === Kt.Param) {
                const { value: _, repeatable: v, optional: T, regexp: R } = h;
                o.push({ name: _, repeatable: v, optional: T });
                const b = R || Li;
                if (b !== Li) {
                    d += ke.BonusCustomRegExp;
                    try {
                        `${b}`;
                    } catch (y) {
                        throw new Error(
                            `Invalid custom RegExp for param "${_}" (${b}): ` +
                                y.message
                        );
                    }
                }
                let g = v ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
                (f || (g = T && u.length < 2 ? `(?:/${g})` : "/" + g),
                    T && (g += "?"),
                    (s += g),
                    (d += ke.Dynamic),
                    T && (d += ke.BonusOptional),
                    v && (d += ke.BonusRepeatable),
                    b === ".*" && (d += ke.BonusWildcard));
            }
            a.push(d);
        }
        r.push(a);
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += ke.BonusStrict;
    }
    (n.strict || (s += "/?"),
        n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)"));
    const i = new RegExp(s, n.sensitive ? "" : "i");
    function l(u) {
        const a = u.match(i),
            f = {};
        if (!a) return null;
        for (let h = 1; h < a.length; h++) {
            const d = a[h] || "",
                _ = o[h - 1];
            f[_.name] = d && _.repeatable ? d.split("/") : d;
        }
        return f;
    }
    function c(u) {
        let a = "",
            f = !1;
        for (const h of e) {
            ((!f || !a.endsWith("/")) && (a += "/"), (f = !1));
            for (const d of h)
                if (d.type === Kt.Static) a += d.value;
                else if (d.type === Kt.Param) {
                    const { value: _, repeatable: v, optional: T } = d,
                        R = _ in u ? u[_] : "";
                    if (et(R) && !v)
                        throw new Error(
                            `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`
                        );
                    const b = et(R) ? R.join("/") : R;
                    if (!b)
                        if (T)
                            h.length < 2 &&
                                (a.endsWith("/")
                                    ? (a = a.slice(0, -1))
                                    : (f = !0));
                        else throw new Error(`Missing required param "${_}"`);
                    a += b;
                }
        }
        return a || "/";
    }
    return { re: i, score: r, keys: o, parse: l, stringify: c };
}
function zp(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r) return r;
        n++;
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === ke.Static + ke.Segment
            ? -1
            : 1
        : e.length > t.length
          ? t.length === 1 && t[0] === ke.Static + ke.Segment
              ? 1
              : -1
          : 0;
}
function nc(e, t) {
    let n = 0;
    const r = e.score,
        s = t.score;
    for (; n < r.length && n < s.length; ) {
        const o = zp(r[n], s[n]);
        if (o) return o;
        n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (Hi(r)) return 1;
        if (Hi(s)) return -1;
    }
    return s.length - r.length;
}
function Hi(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
}
const Qp = { strict: !1, end: !0, sensitive: !1 };
function Xp(e, t, n) {
    const r = Yp(Gp(e.path), n),
        s = re(r, { record: e, parent: t, children: [], alias: [] });
    return (
        t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s),
        s
    );
}
function Zp(e, t) {
    const n = [],
        r = new Map();
    t = xi(Qp, t);
    function s(f) {
        return r.get(f);
    }
    function o(f, h, d) {
        const _ = !d,
            v = ji(f);
        v.aliasOf = d && d.record;
        const T = xi(t, f),
            R = [v];
        if ("alias" in f) {
            const y = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const w of y)
                R.push(
                    ji(
                        re({}, v, {
                            components: d ? d.record.components : v.components,
                            path: w,
                            aliasOf: d ? d.record : v
                        })
                    )
                );
        }
        let b, g;
        for (const y of R) {
            const { path: w } = y;
            if (h && w[0] !== "/") {
                const S = h.record.path,
                    L = S[S.length - 1] === "/" ? "" : "/";
                y.path = h.record.path + (w && L + w);
            }
            if (
                ((b = Xp(y, h, T)),
                d
                    ? d.alias.push(b)
                    : ((g = g || b),
                      g !== b && g.alias.push(b),
                      _ && f.name && !Fi(b) && i(f.name)),
                rc(b) && c(b),
                v.children)
            ) {
                const S = v.children;
                for (let L = 0; L < S.length; L++)
                    o(S[L], b, d && d.children[L]);
            }
            d = d || b;
        }
        return g
            ? () => {
                  i(g);
              }
            : Bn;
    }
    function i(f) {
        if (Za(f)) {
            const h = r.get(f);
            h &&
                (r.delete(f),
                n.splice(n.indexOf(h), 1),
                h.children.forEach(i),
                h.alias.forEach(i));
        } else {
            const h = n.indexOf(f);
            h > -1 &&
                (n.splice(h, 1),
                f.record.name && r.delete(f.record.name),
                f.children.forEach(i),
                f.alias.forEach(i));
        }
    }
    function l() {
        return n;
    }
    function c(f) {
        const h = ng(f, n);
        (n.splice(h, 0, f), f.record.name && !Fi(f) && r.set(f.record.name, f));
    }
    function u(f, h) {
        let d,
            _ = {},
            v,
            T;
        if ("name" in f && f.name) {
            if (((d = r.get(f.name)), !d))
                throw Tn(ge.MATCHER_NOT_FOUND, { location: f });
            ((T = d.record.name),
                (_ = re(
                    Di(
                        h.params,
                        d.keys
                            .filter((g) => !g.optional)
                            .concat(
                                d.parent
                                    ? d.parent.keys.filter((g) => g.optional)
                                    : []
                            )
                            .map((g) => g.name)
                    ),
                    f.params &&
                        Di(
                            f.params,
                            d.keys.map((g) => g.name)
                        )
                )),
                (v = d.stringify(_)));
        } else if (f.path != null)
            ((v = f.path),
                (d = n.find((g) => g.re.test(v))),
                d && ((_ = d.parse(v)), (T = d.record.name)));
        else {
            if (
                ((d = h.name
                    ? r.get(h.name)
                    : n.find((g) => g.re.test(h.path))),
                !d)
            )
                throw Tn(ge.MATCHER_NOT_FOUND, {
                    location: f,
                    currentLocation: h
                });
            ((T = d.record.name),
                (_ = re({}, h.params, f.params)),
                (v = d.stringify(_)));
        }
        const R = [];
        let b = d;
        for (; b; ) (R.unshift(b.record), (b = b.parent));
        return { name: T, path: v, params: _, matched: R, meta: tg(R) };
    }
    e.forEach((f) => o(f));
    function a() {
        ((n.length = 0), r.clear());
    }
    return {
        addRoute: o,
        resolve: u,
        removeRoute: i,
        clearRoutes: a,
        getRoutes: l,
        getRecordMatcher: s
    };
}
function Di(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
}
function ji(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: eg(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components:
            "components" in e
                ? e.components || null
                : e.component && { default: e.component }
    };
    return (Object.defineProperty(t, "mods", { value: {} }), t);
}
function eg(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
}
function Fi(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function tg(e) {
    return e.reduce((t, n) => re(t, n.meta), {});
}
function ng(e, t) {
    let n = 0,
        r = t.length;
    for (; n !== r; ) {
        const o = (n + r) >> 1;
        nc(e, t[o]) < 0 ? (r = o) : (n = o + 1);
    }
    const s = rg(e);
    return (s && (r = t.lastIndexOf(s, r - 1)), r);
}
function rg(e) {
    let t = e;
    for (; (t = t.parent); ) if (rc(t) && nc(e, t) === 0) return t;
}
function rc({ record: e }) {
    return !!(
        e.name ||
        (e.components && Object.keys(e.components).length) ||
        e.redirect
    );
}
function Bi(e) {
    const t = Ce(Eo),
        n = Ce(Ro),
        r = Ke(() => {
            const c = ue(e.to);
            return t.resolve(c);
        }),
        s = Ke(() => {
            const { matched: c } = r.value,
                { length: u } = c,
                a = c[u - 1],
                f = n.matched;
            if (!a || !f.length) return -1;
            const h = f.findIndex(Rn.bind(null, a));
            if (h > -1) return h;
            const d = Ui(c[u - 2]);
            return u > 1 && Ui(a) === d && f[f.length - 1].path !== d
                ? f.findIndex(Rn.bind(null, c[u - 2]))
                : h;
        }),
        o = Ke(() => s.value > -1 && ag(n.params, r.value.params)),
        i = Ke(
            () =>
                s.value > -1 &&
                s.value === n.matched.length - 1 &&
                Xa(n.params, r.value.params)
        );
    function l(c = {}) {
        if (lg(c)) {
            const u = t[ue(e.replace) ? "replace" : "push"](ue(e.to)).catch(Bn);
            return (
                e.viewTransition &&
                    typeof document < "u" &&
                    "startViewTransition" in document &&
                    document.startViewTransition(() => u),
                u
            );
        }
        return Promise.resolve();
    }
    return {
        route: r,
        href: Ke(() => r.value.href),
        isActive: o,
        isExactActive: i,
        navigate: l
    };
}
function sg(e) {
    return e.length === 1 ? e[0] : e;
}
const og = vt({
        name: "RouterLink",
        compatConfig: { MODE: 3 },
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: "page" },
            viewTransition: Boolean
        },
        useLink: Bi,
        setup(e, { slots: t }) {
            const n = Lt(Bi(e)),
                { options: r } = Ce(Eo),
                s = Ke(() => ({
                    [$i(
                        e.activeClass,
                        r.linkActiveClass,
                        "router-link-active"
                    )]: n.isActive,
                    [$i(
                        e.exactActiveClass,
                        r.linkExactActiveClass,
                        "router-link-exact-active"
                    )]: n.isExactActive
                }));
            return () => {
                const o = t.default && sg(t.default(n));
                return e.custom
                    ? o
                    : me(
                          "a",
                          {
                              "aria-current": n.isExactActive
                                  ? e.ariaCurrentValue
                                  : null,
                              href: n.href,
                              onClick: n.navigate,
                              class: s.value
                          },
                          o
                      );
            };
        }
    }),
    ig = og;
function lg(e) {
    if (
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        !(e.button !== void 0 && e.button !== 0)
    ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return;
        }
        return (e.preventDefault && e.preventDefault(), !0);
    }
}
function ag(e, t) {
    for (const n in t) {
        const r = t[n],
            s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1;
        } else if (
            !et(s) ||
            s.length !== r.length ||
            r.some((o, i) => o.valueOf() !== s[i].valueOf())
        )
            return !1;
    }
    return !0;
}
function Ui(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const $i = (e, t, n) => e ?? t ?? n,
    cg = vt({
        name: "RouterView",
        inheritAttrs: !1,
        props: { name: { type: String, default: "default" }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: n }) {
            const r = Ce(Ks),
                s = Ke(() => e.route || r.value),
                o = Ce(Mi, 0),
                i = Ke(() => {
                    let u = ue(o);
                    const { matched: a } = s.value;
                    let f;
                    for (; (f = a[u]) && !f.components; ) u++;
                    return u;
                }),
                l = Ke(() => s.value.matched[i.value]);
            (Mt(
                Mi,
                Ke(() => i.value + 1)
            ),
                Mt(jp, l),
                Mt(Ks, s));
            const c = gt();
            return (
                pn(
                    () => [c.value, l.value, e.name],
                    ([u, a, f], [h, d, _]) => {
                        (a &&
                            ((a.instances[f] = u),
                            d &&
                                d !== a &&
                                u &&
                                u === h &&
                                (a.leaveGuards.size ||
                                    (a.leaveGuards = d.leaveGuards),
                                a.updateGuards.size ||
                                    (a.updateGuards = d.updateGuards))),
                            u &&
                                a &&
                                (!d || !Rn(a, d) || !h) &&
                                (a.enterCallbacks[f] || []).forEach((v) =>
                                    v(u)
                                ));
                    },
                    { flush: "post" }
                ),
                () => {
                    const u = s.value,
                        a = e.name,
                        f = l.value,
                        h = f && f.components[a];
                    if (!h) return Vi(n.default, { Component: h, route: u });
                    const d = f.props[a],
                        _ = d
                            ? d === !0
                                ? u.params
                                : typeof d == "function"
                                  ? d(u)
                                  : d
                            : null,
                        T = me(
                            h,
                            re({}, _, t, {
                                onVnodeUnmounted: (R) => {
                                    R.component.isUnmounted &&
                                        (f.instances[a] = null);
                                },
                                ref: c
                            })
                        );
                    return Vi(n.default, { Component: T, route: u }) || T;
                }
            );
        }
    });
function Vi(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
}
const sc = cg;
function ug(e) {
    const t = Zp(e.routes, e),
        n = e.parseQuery || Hp,
        r = e.stringifyQuery || Ni,
        s = e.history,
        o = kn(),
        i = kn(),
        l = kn(),
        c = _t(We);
    let u = We;
    ln &&
        e.scrollBehavior &&
        "scrollRestoration" in history &&
        (history.scrollRestoration = "manual");
    const a = ds.bind(null, (A) => "" + A),
        f = ds.bind(null, vp),
        h = ds.bind(null, qn);
    function d(A, U) {
        let j, q;
        return (
            Za(A) ? ((j = t.getRecordMatcher(A)), (q = U)) : (q = A),
            t.addRoute(q, j)
        );
    }
    function _(A) {
        const U = t.getRecordMatcher(A);
        U && t.removeRoute(U);
    }
    function v() {
        return t.getRoutes().map((A) => A.record);
    }
    function T(A) {
        return !!t.getRecordMatcher(A);
    }
    function R(A, U) {
        if (((U = re({}, U || c.value)), typeof A == "string")) {
            const m = hs(n, A, U.path),
                E = t.resolve({ path: m.path }, U),
                x = s.createHref(m.fullPath);
            return re(m, E, {
                params: h(E.params),
                hash: qn(m.hash),
                redirectedFrom: void 0,
                href: x
            });
        }
        let j;
        if (A.path != null) j = re({}, A, { path: hs(n, A.path, U.path).path });
        else {
            const m = re({}, A.params);
            for (const E in m) m[E] == null && delete m[E];
            ((j = re({}, A, { params: f(m) })), (U.params = f(U.params)));
        }
        const q = t.resolve(j, U),
            Z = A.hash || "";
        q.params = a(h(q.params));
        const he = Ep(r, re({}, A, { hash: mp(Z), path: q.path })),
            p = s.createHref(he);
        return re(
            {
                fullPath: he,
                hash: Z,
                query: r === Ni ? Dp(A.query) : A.query || {}
            },
            q,
            { redirectedFrom: void 0, href: p }
        );
    }
    function b(A) {
        return typeof A == "string" ? hs(n, A, c.value.path) : re({}, A);
    }
    function g(A, U) {
        if (u !== A) return Tn(ge.NAVIGATION_CANCELLED, { from: U, to: A });
    }
    function y(A) {
        return L(A);
    }
    function w(A) {
        return y(re(b(A), { replace: !0 }));
    }
    function S(A, U) {
        const j = A.matched[A.matched.length - 1];
        if (j && j.redirect) {
            const { redirect: q } = j;
            let Z = typeof q == "function" ? q(A, U) : q;
            return (
                typeof Z == "string" &&
                    ((Z =
                        Z.includes("?") || Z.includes("#")
                            ? (Z = b(Z))
                            : { path: Z }),
                    (Z.params = {})),
                re(
                    {
                        query: A.query,
                        hash: A.hash,
                        params: Z.path != null ? {} : A.params
                    },
                    Z
                )
            );
        }
    }
    function L(A, U) {
        const j = (u = R(A)),
            q = c.value,
            Z = A.state,
            he = A.force,
            p = A.replace === !0,
            m = S(j, q);
        if (m)
            return L(
                re(b(m), {
                    state: typeof m == "object" ? re({}, Z, m.state) : Z,
                    force: he,
                    replace: p
                }),
                U || j
            );
        const E = j;
        E.redirectedFrom = U;
        let x;
        return (
            !he &&
                Rp(r, q, j) &&
                ((x = Tn(ge.NAVIGATION_DUPLICATED, { to: E, from: q })),
                tt(q, q, !0, !1)),
            (x ? Promise.resolve(x) : N(E, q))
                .catch((C) =>
                    ut(C)
                        ? ut(C, ge.NAVIGATION_GUARD_REDIRECT)
                            ? C
                            : Et(C)
                        : B(C, E, q)
                )
                .then((C) => {
                    if (C) {
                        if (ut(C, ge.NAVIGATION_GUARD_REDIRECT))
                            return L(
                                re({ replace: p }, b(C.to), {
                                    state:
                                        typeof C.to == "object"
                                            ? re({}, Z, C.to.state)
                                            : Z,
                                    force: he
                                }),
                                U || E
                            );
                    } else C = O(E, q, !0, p, Z);
                    return (W(E, q, C), C);
                })
        );
    }
    function V(A, U) {
        const j = g(A, U);
        return j ? Promise.reject(j) : Promise.resolve();
    }
    function M(A) {
        const U = nn.values().next().value;
        return U && typeof U.runWithContext == "function"
            ? U.runWithContext(A)
            : A();
    }
    function N(A, U) {
        let j;
        const [q, Z, he] = Fp(A, U);
        j = gs(q.reverse(), "beforeRouteLeave", A, U);
        for (const m of q)
            m.leaveGuards.forEach((E) => {
                j.push(xt(E, A, U));
            });
        const p = V.bind(null, A, U);
        return (
            j.push(p),
            $e(j)
                .then(() => {
                    j = [];
                    for (const m of o.list()) j.push(xt(m, A, U));
                    return (j.push(p), $e(j));
                })
                .then(() => {
                    j = gs(Z, "beforeRouteUpdate", A, U);
                    for (const m of Z)
                        m.updateGuards.forEach((E) => {
                            j.push(xt(E, A, U));
                        });
                    return (j.push(p), $e(j));
                })
                .then(() => {
                    j = [];
                    for (const m of he)
                        if (m.beforeEnter)
                            if (et(m.beforeEnter))
                                for (const E of m.beforeEnter)
                                    j.push(xt(E, A, U));
                            else j.push(xt(m.beforeEnter, A, U));
                    return (j.push(p), $e(j));
                })
                .then(
                    () => (
                        A.matched.forEach((m) => (m.enterCallbacks = {})),
                        (j = gs(he, "beforeRouteEnter", A, U, M)),
                        j.push(p),
                        $e(j)
                    )
                )
                .then(() => {
                    j = [];
                    for (const m of i.list()) j.push(xt(m, A, U));
                    return (j.push(p), $e(j));
                })
                .catch((m) =>
                    ut(m, ge.NAVIGATION_CANCELLED) ? m : Promise.reject(m)
                )
        );
    }
    function W(A, U, j) {
        l.list().forEach((q) => M(() => q(A, U, j)));
    }
    function O(A, U, j, q, Z) {
        const he = g(A, U);
        if (he) return he;
        const p = U === We,
            m = ln ? history.state : {};
        (j &&
            (q || p
                ? s.replace(A.fullPath, re({ scroll: p && m && m.scroll }, Z))
                : s.push(A.fullPath, Z)),
            (c.value = A),
            tt(A, U, j, p),
            Et());
    }
    let K;
    function ee() {
        K ||
            (K = s.listen((A, U, j) => {
                if (!Dt.listening) return;
                const q = R(A),
                    Z = S(q, Dt.currentRoute.value);
                if (Z) {
                    L(re(Z, { replace: !0, force: !0 }), q).catch(Bn);
                    return;
                }
                u = q;
                const he = c.value;
                (ln && Op(Oi(he.fullPath, j.delta), Yr()),
                    N(q, he)
                        .catch((p) =>
                            ut(
                                p,
                                ge.NAVIGATION_ABORTED | ge.NAVIGATION_CANCELLED
                            )
                                ? p
                                : ut(p, ge.NAVIGATION_GUARD_REDIRECT)
                                  ? (L(re(b(p.to), { force: !0 }), q)
                                        .then((m) => {
                                            ut(
                                                m,
                                                ge.NAVIGATION_ABORTED |
                                                    ge.NAVIGATION_DUPLICATED
                                            ) &&
                                                !j.delta &&
                                                j.type === Vs.pop &&
                                                s.go(-1, !1);
                                        })
                                        .catch(Bn),
                                    Promise.reject())
                                  : (j.delta && s.go(-j.delta, !1), B(p, q, he))
                        )
                        .then((p) => {
                            ((p = p || O(q, he, !1)),
                                p &&
                                    (j.delta && !ut(p, ge.NAVIGATION_CANCELLED)
                                        ? s.go(-j.delta, !1)
                                        : j.type === Vs.pop &&
                                          ut(
                                              p,
                                              ge.NAVIGATION_ABORTED |
                                                  ge.NAVIGATION_DUPLICATED
                                          ) &&
                                          s.go(-1, !1)),
                                W(q, he, p));
                        })
                        .catch(Bn));
            }));
    }
    let ie = kn(),
        $ = kn(),
        Q;
    function B(A, U, j) {
        Et(A);
        const q = $.list();
        return (
            q.length ? q.forEach((Z) => Z(A, U, j)) : console.error(A),
            Promise.reject(A)
        );
    }
    function de() {
        return Q && c.value !== We
            ? Promise.resolve()
            : new Promise((A, U) => {
                  ie.add([A, U]);
              });
    }
    function Et(A) {
        return (
            Q ||
                ((Q = !A),
                ee(),
                ie.list().forEach(([U, j]) => (A ? j(A) : U())),
                ie.reset()),
            A
        );
    }
    function tt(A, U, j, q) {
        const { scrollBehavior: Z } = e;
        if (!ln || !Z) return Promise.resolve();
        const he =
            (!j && Np(Oi(A.fullPath, 0))) ||
            ((q || !j) && history.state && history.state.scroll) ||
            null;
        return _n()
            .then(() => Z(A, U, he))
            .then((p) => p && kp(p))
            .catch((p) => B(p, A, U));
    }
    const Ne = (A) => s.go(A);
    let tn;
    const nn = new Set(),
        Dt = {
            currentRoute: c,
            listening: !0,
            addRoute: d,
            removeRoute: _,
            clearRoutes: t.clearRoutes,
            hasRoute: T,
            getRoutes: v,
            resolve: R,
            options: e,
            push: y,
            replace: w,
            go: Ne,
            back: () => Ne(-1),
            forward: () => Ne(1),
            beforeEach: o.add,
            beforeResolve: i.add,
            afterEach: l.add,
            onError: $.add,
            isReady: de,
            install(A) {
                (A.component("RouterLink", ig),
                    A.component("RouterView", sc),
                    (A.config.globalProperties.$router = Dt),
                    Object.defineProperty(A.config.globalProperties, "$route", {
                        enumerable: !0,
                        get: () => ue(c)
                    }),
                    ln &&
                        !tn &&
                        c.value === We &&
                        ((tn = !0), y(s.location).catch((q) => {})));
                const U = {};
                for (const q in We)
                    Object.defineProperty(U, q, {
                        get: () => c.value[q],
                        enumerable: !0
                    });
                (A.provide(Eo, Dt), A.provide(Ro, ot(U)), A.provide(Ks, c));
                const j = A.unmount;
                (nn.add(A),
                    (A.unmount = function () {
                        (nn.delete(A),
                            nn.size < 1 &&
                                ((u = We),
                                K && K(),
                                (K = null),
                                (c.value = We),
                                (tn = !1),
                                (Q = !1)),
                            j());
                    }));
            }
        };
    function $e(A) {
        return A.reduce((U, j) => U.then(() => M(j)), Promise.resolve());
    }
    return Dt;
}
function oc(e) {
    return Ce(Ro);
}
const fg = /(:\w+)\([^)]+\)/g,
    dg = /(:\w+)[?+*]/g,
    hg = /:\w+/g,
    pg = (e, t) =>
        t.path
            .replace(fg, "$1")
            .replace(dg, "$1")
            .replace(hg, (n) => e.params[n.slice(1)]?.toString() || ""),
    Gs = (e, t) => {
        const n = e.route.matched.find(
                (s) => s.components?.default === e.Component.type
            ),
            r = t ?? n?.meta.key ?? (n && pg(e.route, n));
        return typeof r == "function" ? r(e.route) : r;
    },
    gg = (e, t) => ({ default: () => (e ? me(gu, e === !0 ? {} : e, t) : t) });
function To(e) {
    return Array.isArray(e) ? e : [e];
}
const mg = "modulepreload",
    yg = function (e, t) {
        return new URL(e, t).href;
    },
    Wi = {},
    Or = function (t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            let u = function (a) {
                return Promise.all(
                    a.map((f) =>
                        Promise.resolve(f).then(
                            (h) => ({ status: "fulfilled", value: h }),
                            (h) => ({ status: "rejected", reason: h })
                        )
                    )
                );
            };
            const i = document.getElementsByTagName("link"),
                l = document.querySelector("meta[property=csp-nonce]"),
                c = l?.nonce || l?.getAttribute("nonce");
            s = u(
                n.map((a) => {
                    if (((a = yg(a, r)), a in Wi)) return;
                    Wi[a] = !0;
                    const f = a.endsWith(".css"),
                        h = f ? '[rel="stylesheet"]' : "";
                    if (r)
                        for (let _ = i.length - 1; _ >= 0; _--) {
                            const v = i[_];
                            if (v.href === a && (!f || v.rel === "stylesheet"))
                                return;
                        }
                    else if (document.querySelector(`link[href="${a}"]${h}`))
                        return;
                    const d = document.createElement("link");
                    if (
                        ((d.rel = f ? "stylesheet" : mg),
                        f || (d.as = "script"),
                        (d.crossOrigin = ""),
                        (d.href = a),
                        c && d.setAttribute("nonce", c),
                        document.head.appendChild(d),
                        f)
                    )
                        return new Promise((_, v) => {
                            (d.addEventListener("load", _),
                                d.addEventListener("error", () =>
                                    v(
                                        new Error(
                                            `Unable to preload CSS for ${a}`
                                        )
                                    )
                                ));
                        });
                })
            );
        }
        function o(i) {
            const l = new Event("vite:preloadError", { cancelable: !0 });
            if (((l.payload = i), window.dispatchEvent(l), !l.defaultPrevented))
                throw i;
        }
        return s.then((i) => {
            for (const l of i || []) l.status === "rejected" && o(l.reason);
            return t().catch(o);
        });
    },
    ms = [
        {
            name: "index",
            path: "/",
            component: () =>
                Or(
                    () => import("./DC5aL6ZO.js"),
                    __vite__mapDeps([0, 1, 2]),
                    import.meta.url
                )
        },
        {
            name: "force-cache-characters",
            path: "/force-cache-characters",
            component: () =>
                Or(
                    () => import("./BKbedNoV.js"),
                    __vite__mapDeps([3, 2, 4]),
                    import.meta.url
                )
        }
    ],
    ic = (e, t) => ({
        default: () => (e ? me(wf, e === !0 ? {} : e, t) : t.default?.())
    }),
    _g = /(:\w+)\([^)]+\)/g,
    vg = /(:\w+)[?+*]/g,
    bg = /:\w+/g;
function Ki(e) {
    const t =
        e?.meta.key ??
        e.path
            .replace(_g, "$1")
            .replace(vg, "$1")
            .replace(bg, (n) => e.params[n.slice(1)]?.toString() || "");
    return typeof t == "function" ? t(e) : t;
}
function wg(e, t) {
    return e === t || t === We
        ? !1
        : Ki(e) !== Ki(t)
          ? !0
          : !e.matched.every(
                (r, s) =>
                    r.components &&
                    r.components.default === t.matched[s]?.components?.default
            );
}
function Eg(e, t = !1) {
    if (e) {
        if (e.nodeName === "#comment" && e.nodeValue === "[")
            return lc(e, [], t);
        if (t) {
            const n = e.cloneNode(!0);
            return (
                n.querySelectorAll("[data-island-slot]").forEach((r) => {
                    r.innerHTML = "";
                }),
                [n.outerHTML]
            );
        }
        return [e.outerHTML];
    }
}
function lc(e, t = [], n = !1) {
    if (e && e.nodeName) {
        if (Tg(e)) return t;
        if (!Rg(e)) {
            const r = e.cloneNode(!0);
            (n &&
                r.querySelectorAll?.("[data-island-slot]").forEach((s) => {
                    s.innerHTML = "";
                }),
                t.push(r.outerHTML));
        }
        lc(e.nextSibling, t, n);
    }
    return t;
}
function ys(e, t) {
    const n = e ? Eg(e) : [t];
    return n ? of(n.join(""), n.length) : me("div");
}
function Rg(e) {
    return e.nodeName === "#comment" && e.nodeValue === "[";
}
function Tg(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]";
}
const Cg = {
    scrollBehavior(e, t, n) {
        const r = ye(),
            s = Ue().options?.scrollBehaviorType ?? "auto";
        if (e.path.replace(/\/$/, "") === t.path.replace(/\/$/, ""))
            return t.hash && !e.hash
                ? { left: 0, top: 0 }
                : e.hash
                  ? { el: e.hash, top: ac(e.hash), behavior: s }
                  : !1;
        if (
            (typeof e.meta.scrollToTop == "function"
                ? e.meta.scrollToTop(e, t)
                : e.meta.scrollToTop) === !1
        )
            return !1;
        const i = r._runningTransition
            ? "page:transition:finish"
            : "page:loading:end";
        return new Promise((l) => {
            if (t === We) {
                l(Gi(e, t, n, s));
                return;
            }
            r.hooks.hookOnce(i, () => {
                requestAnimationFrame(() => l(Gi(e, t, n, s)));
            });
        });
    }
};
function ac(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (
                (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) +
                (Number.parseFloat(
                    getComputedStyle(document.documentElement).scrollPaddingTop
                ) || 0)
            );
    } catch {}
    return 0;
}
function Gi(e, t, n, r) {
    if (n) return n;
    const s = wg(e, t);
    return e.hash
        ? { el: e.hash, top: ac(e.hash), behavior: s ? r : "instant" }
        : { left: 0, top: 0 };
}
const Ag = { hashMode: !1, scrollBehaviorType: "auto" },
    Tt = { ...Ag, ...Cg },
    Sg = async (e, t) => {
        let n, r;
        if (!e.meta?.validate) return;
        const s =
            (([n, r] = mn(() => Promise.resolve(e.meta.validate(e)))),
            (n = await n),
            r(),
            n);
        if (s === !0) return;
        const o = zt({
            fatal: !0,
            statusCode: (s && s.statusCode) || 404,
            statusMessage:
                (s && s.statusMessage) || `Page Not Found: ${e.fullPath}`,
            data: { path: e.fullPath }
        });
        return (
            typeof window < "u" && window.history.pushState({}, "", t.fullPath),
            o
        );
    },
    xg = async (e) => {
        let t, n;
        const r =
            (([t, n] = mn(() => vo({ path: e.path }))), (t = await t), n(), t);
        if (r.redirect) {
            const s = r.redirect.includes("#")
                ? r.redirect
                : r.redirect + e.hash;
            return en(s, { acceptRelative: !0 })
                ? ((window.location.href = s), !1)
                : s;
        }
    },
    Pg = [Sg, xg],
    qs = {};
function kg(e, t, n) {
    const { pathname: r, search: s, hash: o } = t,
        i = e.indexOf("#");
    if (i > -1) {
        const u = o.includes(e.slice(i)) ? e.slice(i).length : 1;
        let a = o.slice(u);
        return (a[0] !== "/" && (a = "/" + a), ui(a, ""));
    }
    const l = ui(r, e),
        c = !n || bd(l, n) ? l : n;
    return c + (c.includes("?") ? "" : s) + o;
}
const Og = wt({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            let t,
                n,
                r = Kr().app.baseURL;
            const s = Tt.history?.(r) ?? Vp(r),
                o = Tt.routes
                    ? (([t, n] = mn(() => Tt.routes(ms))),
                      (t = await t),
                      n(),
                      t ?? ms)
                    : ms;
            let i;
            const l = ug({
                ...Tt,
                scrollBehavior: (T, R, b) => {
                    if (R === We) {
                        i = b;
                        return;
                    }
                    if (Tt.scrollBehavior) {
                        if (
                            ((l.options.scrollBehavior = Tt.scrollBehavior),
                            "scrollRestoration" in window.history)
                        ) {
                            const g = l.beforeEach(() => {
                                (g(),
                                    (window.history.scrollRestoration =
                                        "manual"));
                            });
                        }
                        return Tt.scrollBehavior(T, We, i || b);
                    }
                },
                history: s,
                routes: o
            });
            ("scrollRestoration" in window.history &&
                (window.history.scrollRestoration = "auto"),
                e.vueApp.use(l));
            const c = _t(l.currentRoute.value);
            (l.afterEach((T, R) => {
                c.value = R;
            }),
                Object.defineProperty(
                    e.vueApp.config.globalProperties,
                    "previousRoute",
                    { get: () => c.value }
                ));
            const u = kg(r, window.location, e.payload.path),
                a = _t(l.currentRoute.value),
                f = () => {
                    a.value = l.currentRoute.value;
                };
            l.afterEach((T, R) => {
                T.matched.at(-1)?.components?.default ===
                    R.matched.at(-1)?.components?.default && f();
            });
            const h = { sync: f };
            for (const T in a.value)
                Object.defineProperty(h, T, {
                    get: () => a.value[T],
                    enumerable: !0
                });
            ((e._route = ot(h)), (e._middleware ||= { global: [], named: {} }));
            const d = qr();
            l.afterEach(async (T, R, b) => {
                (delete e._processingMiddleware,
                    !e.isHydrating && d.value && (await e.runWithContext(gh)),
                    b && (await e.callHook("page:loading:end")));
            });
            try {
                (([t, n] = mn(() => l.isReady())), await t, n());
            } catch (T) {
                (([t, n] = mn(() => e.runWithContext(() => Vt(T)))),
                    await t,
                    n());
            }
            const _ =
                u !== l.currentRoute.value.fullPath
                    ? l.resolve(u)
                    : l.currentRoute.value;
            f();
            const v = e.payload.state._layout;
            return (
                l.beforeEach(async (T, R) => {
                    (await e.callHook("page:loading:start"),
                        (T.meta = Lt(T.meta)),
                        e.isHydrating &&
                            v &&
                            !lt(T.meta.layout) &&
                            (T.meta.layout = v),
                        (e._processingMiddleware = !0));
                    {
                        const b = new Set([...Pg, ...e._middleware.global]);
                        for (const g of T.matched) {
                            const y = g.meta.middleware;
                            if (y) for (const w of To(y)) b.add(w);
                        }
                        {
                            const g = await e.runWithContext(() =>
                                vo({ path: T.path })
                            );
                            if (g.appMiddleware)
                                for (const y in g.appMiddleware)
                                    g.appMiddleware[y] ? b.add(y) : b.delete(y);
                        }
                        for (const g of b) {
                            const y =
                                typeof g == "string"
                                    ? e._middleware.named[g] ||
                                      (await qs[g]?.().then(
                                          (w) => w.default || w
                                      ))
                                    : g;
                            if (!y)
                                throw new Error(
                                    `Unknown route middleware: '${g}'.`
                                );
                            try {
                                const w = await e.runWithContext(() => y(T, R));
                                if (
                                    !e.payload.serverRendered &&
                                    e.isHydrating &&
                                    (w === !1 || w instanceof Error)
                                ) {
                                    const S =
                                        w ||
                                        zt({
                                            statusCode: 404,
                                            statusMessage: `Page Not Found: ${u}`
                                        });
                                    return (
                                        await e.runWithContext(() => Vt(S)),
                                        !1
                                    );
                                }
                                if (w === !0) continue;
                                if (w === !1) return w;
                                if (w)
                                    return (
                                        Fa(w) &&
                                            w.fatal &&
                                            (await e.runWithContext(() =>
                                                Vt(w)
                                            )),
                                        w
                                    );
                            } catch (w) {
                                const S = zt(w);
                                return (
                                    S.fatal &&
                                        (await e.runWithContext(() => Vt(S))),
                                    S
                                );
                            }
                        }
                    }
                }),
                l.onError(async () => {
                    (delete e._processingMiddleware,
                        await e.callHook("page:loading:end"));
                }),
                l.afterEach((T) => {
                    if (T.matched.length === 0)
                        return e.runWithContext(() =>
                            Vt(
                                zt({
                                    statusCode: 404,
                                    fatal: !1,
                                    statusMessage: `Page not found: ${T.fullPath}`,
                                    data: { path: T.fullPath }
                                })
                            )
                        );
                }),
                e.hooks.hookOnce("app:created", async () => {
                    try {
                        ("name" in _ && (_.name = void 0),
                            await l.replace({ ..._, force: !0 }),
                            (l.options.scrollBehavior = Tt.scrollBehavior));
                    } catch (T) {
                        await e.runWithContext(() => Vt(T));
                    }
                }),
                { provide: { router: l } }
            );
        }
    }),
    qi =
        globalThis.requestIdleCallback ||
        ((e) => {
            const t = Date.now(),
                n = {
                    didTimeout: !1,
                    timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
                };
            return setTimeout(() => {
                e(n);
            }, 1);
        }),
    mm =
        globalThis.cancelIdleCallback ||
        ((e) => {
            clearTimeout(e);
        }),
    Co = (e) => {
        const t = ye();
        t.isHydrating
            ? t.hooks.hookOnce("app:suspense:resolve", () => {
                  qi(() => e());
              })
            : qi(() => e());
    },
    Ng = wt({
        name: "nuxt:payload",
        setup(e) {
            const t = new Set();
            (Ue().beforeResolve(async (n, r) => {
                if (n.path === r.path) return;
                const s = await Si(n.path);
                if (s) {
                    for (const o of t) delete e.static.data[o];
                    for (const o in s.data)
                        (o in e.static.data || t.add(o),
                            (e.static.data[o] = s.data[o]));
                }
            }),
                Co(() => {
                    (e.hooks.hook("link:prefetch", async (n) => {
                        const { hostname: r } = new URL(
                            n,
                            window.location.href
                        );
                        r === window.location.hostname &&
                            (await Si(n).catch(() => {
                                console.warn(
                                    "[nuxt] Error preloading payload for",
                                    n
                                );
                            }));
                    }),
                        navigator.connection?.effectiveType !== "slow-2g" &&
                            setTimeout(Jr, 1e3));
                }));
        }
    }),
    Mg = wt(() => {
        const e = Ue();
        Co(() => {
            e.beforeResolve(async () => {
                await new Promise((t) => {
                    (setTimeout(t, 100),
                        requestAnimationFrame(() => {
                            setTimeout(t, 0);
                        }));
                });
            });
        });
    }),
    Ig = wt((e) => {
        let t;
        async function n() {
            let r;
            try {
                r = await Jr();
            } catch (s) {
                const o = s;
                if (!("status" in o && (o.status === 404 || o.status === 403)))
                    throw o;
            }
            (t && clearTimeout(t), (t = setTimeout(n, yi)));
            try {
                const s = await $fetch(
                    yo("builds/latest.json") + `?${Date.now()}`
                );
                s.id !== r?.id &&
                    (e.hooks.callHook("app:manifest:update", s),
                    t && clearTimeout(t));
            } catch {}
        }
        Co(() => {
            t = setTimeout(n, yi);
        });
    });
function Lg(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = Cr(sessionStorage.getItem("nuxt:reload") || "{}");
    } catch {}
    if (e.force || n?.path !== t || n?.expires < Date.now()) {
        try {
            sessionStorage.setItem(
                "nuxt:reload",
                JSON.stringify({
                    path: t,
                    expires: Date.now() + (e.ttl ?? 1e4)
                })
            );
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem(
                    "nuxt:reload:state",
                    JSON.stringify({ state: ye().payload.state })
                );
            } catch {}
        window.location.pathname !== t
            ? (window.location.href = t)
            : window.location.reload();
    }
}
const Hg = wt({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = Ue(),
                n = Kr(),
                r = new Set();
            (t.beforeEach(() => {
                r.clear();
            }),
                e.hook("app:chunkError", ({ error: o }) => {
                    r.add(o);
                }));
            function s(o) {
                const i = go(n.app.baseURL, o.fullPath);
                Lg({ path: i, persistState: !0 });
            }
            (e.hook("app:manifest:update", () => {
                t.beforeResolve(s);
            }),
                t.onError((o, i) => {
                    r.has(o) && s(i);
                }));
        }
    }),
    Dg = wt({ name: "nuxt:global-components" }),
    kt = {};
function jg(e) {
    if (e?.__asyncLoader && !e.__asyncResolved) return e.__asyncLoader();
}
async function Fg(e, t = Ue()) {
    const { path: n, matched: r } = t.resolve(e);
    if (
        !r.length ||
        ((t._routePreloaded ||= new Set()), t._routePreloaded.has(n))
    )
        return;
    const s = (t._preloadPromises ||= []);
    if (s.length > 4) return Promise.all(s).then(() => Fg(e, t));
    t._routePreloaded.add(n);
    for (const o of r) {
        const i = o.components?.default;
        if (typeof i != "function") continue;
        const l = Promise.resolve(i())
            .catch(() => {})
            .finally(() => s.splice(s.indexOf(l)));
        s.push(l);
    }
    await Promise.all(s);
}
const Bg = wt({
        name: "nuxt:prefetch",
        setup(e) {
            const t = Ue();
            (e.hooks.hook("app:mounted", () => {
                t.beforeEach(async (n) => {
                    const r = n?.meta?.layout;
                    r && typeof kt[r] == "function" && (await kt[r]());
                });
            }),
                e.hooks.hook("link:prefetch", (n) => {
                    if (en(n)) return;
                    const r = t.resolve(n);
                    if (!r) return;
                    const s = r.meta.layout;
                    let o = To(r.meta.middleware);
                    o = o.filter((i) => typeof i == "string");
                    for (const i of o) typeof qs[i] == "function" && qs[i]();
                    typeof s == "string" && s in kt && jg(kt[s]);
                }));
        }
    }),
    Ug = [ep, op, Og, Ng, Mg, Ig, Hg, Dg, Bg],
    cr = "<div></div>",
    _s = new WeakMap();
function $g(e) {
    if (_s.has(e)) return _s.get(e);
    const t = { ...e };
    return (
        t.render
            ? (t.render = (n, r, s, o, i, l) => {
                  if (o.mounted$ ?? n.mounted$) {
                      const c = e.render?.bind(n)(n, r, s, o, i, l);
                      return c.children === null ||
                          typeof c.children == "string"
                          ? Ge(c)
                          : me(c);
                  }
                  return ys(n._.vnode.el, cr);
              })
            : (t.template &&= `
      <template v-if="mounted$">${e.template}</template>
      <template v-else>${cr}</template>
    `),
        (t.setup = (n, r) => {
            const s = ye(),
                o = _t(s.isHydrating === !1),
                i = Ht();
            if (s.isHydrating) {
                const c = { ...i.attrs },
                    u = Vg(i);
                for (const a in c) delete i.attrs[a];
                Wn(() => {
                    (Object.assign(i.attrs, c), (i.vnode.dirs = u));
                });
            }
            Wn(() => {
                o.value = !0;
            });
            const l = e.setup?.(n, r) || {};
            return Nr(l)
                ? Promise.resolve(l).then((c) =>
                      typeof c != "function"
                          ? ((c ||= {}), (c.mounted$ = o), c)
                          : (...u) => {
                                if (o.value || !s.isHydrating) {
                                    const a = c(...u);
                                    return a.children === null ||
                                        typeof a.children == "string"
                                        ? Ge(a)
                                        : me(a);
                                }
                                return ys(i?.vnode.el, cr);
                            }
                  )
                : typeof l == "function"
                  ? (...c) => {
                        if (o.value) {
                            const u = l(...c),
                                a = t.inheritAttrs !== !1 ? r.attrs : void 0;
                            return u.children === null ||
                                typeof u.children == "string"
                                ? Ge(u, a)
                                : me(u, a);
                        }
                        return ys(i?.vnode.el, cr);
                    }
                  : Object.assign(l, { mounted$: o });
        }),
        _s.set(e, t),
        t
    );
}
function Vg(e) {
    if (!e || !e.vnode.dirs) return null;
    const t = e.vnode.dirs;
    return ((e.vnode.dirs = null), t);
}
function Wg(e = {}) {
    const t = _t(""),
        n = _t(e.politeness || "polite"),
        r = $a();
    function s(u = "", a = "polite") {
        ((t.value = u), (n.value = a));
    }
    function o(u) {
        return s(u, "polite");
    }
    function i(u) {
        return s(u, "assertive");
    }
    function l() {
        s(document?.title?.trim(), n.value);
    }
    function c() {
        r?.hooks?.removeHook("dom:rendered", l);
    }
    return (
        l(),
        r?.hooks?.hook("dom:rendered", () => {
            l();
        }),
        {
            _cleanup: c,
            message: t,
            politeness: n,
            set: s,
            polite: o,
            assertive: i
        }
    );
}
function Kg(e = {}) {
    const t = ye(),
        n = (t._routeAnnouncer ||= Wg(e));
    return (
        e.politeness !== n.politeness.value &&
            (n.politeness.value = e.politeness || "polite"),
        Qs() &&
            ((t._routeAnnouncerDeps ||= 0),
            t._routeAnnouncerDeps++,
            Cc(() => {
                (t._routeAnnouncerDeps--,
                    t._routeAnnouncerDeps === 0 &&
                        (n._cleanup(), delete t._routeAnnouncer));
            })),
        n
    );
}
const Gg = vt({
        name: "NuxtRouteAnnouncer",
        props: {
            atomic: { type: Boolean, default: !1 },
            politeness: { type: String, default: "polite" }
        },
        setup(e, { slots: t, expose: n }) {
            const {
                set: r,
                polite: s,
                assertive: o,
                message: i,
                politeness: l
            } = Kg({ politeness: e.politeness });
            return (
                n({
                    set: r,
                    polite: s,
                    assertive: o,
                    message: i,
                    politeness: l
                }),
                () =>
                    me(
                        "span",
                        {
                            class: "nuxt-route-announcer",
                            style: { position: "absolute" }
                        },
                        me(
                            "span",
                            {
                                role: "alert",
                                "aria-live": l.value,
                                "aria-atomic": e.atomic,
                                style: {
                                    border: "0",
                                    clip: "rect(0 0 0 0)",
                                    "clip-path": "inset(50%)",
                                    height: "1px",
                                    width: "1px",
                                    overflow: "hidden",
                                    position: "absolute",
                                    "white-space": "nowrap",
                                    "word-wrap": "normal",
                                    margin: "-1px",
                                    padding: "0"
                                }
                            },
                            t.default
                                ? t.default({ message: i.value })
                                : i.value
                        )
                    )
            );
        }
    }),
    cc = (e = "RouteProvider") =>
        vt({
            name: e,
            props: {
                route: { type: Object, required: !0 },
                vnode: Object,
                vnodeRef: Object,
                renderKey: String,
                trackRootNodes: Boolean
            },
            setup(t) {
                const n = t.renderKey,
                    r = t.route,
                    s = {};
                for (const o in t.route)
                    Object.defineProperty(s, o, {
                        get: () => (n === t.renderKey ? t.route[o] : r[o]),
                        enumerable: !0
                    });
                return (
                    Mt(Xt, ot(s)),
                    () => (t.vnode ? me(t.vnode, { ref: t.vnodeRef }) : t.vnode)
                );
            }
        }),
    qg = cc(),
    Ji = new WeakMap(),
    Jg = vt({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: { type: String },
            transition: { type: [Boolean, Object], default: void 0 },
            keepalive: { type: [Boolean, Object], default: void 0 },
            route: { type: Object },
            pageKey: { type: [Function, String], default: null }
        },
        setup(e, { attrs: t, slots: n, expose: r }) {
            const s = ye(),
                o = gt(),
                i = Ce(Xt, null);
            let l;
            r({ pageRef: o });
            const c = Ce(Da, null);
            let u;
            const a = s.deferHydration();
            if (s.isHydrating) {
                const h = s.hooks.hookOnce("app:error", a);
                Ue().beforeEach(h);
            }
            e.pageKey &&
                pn(
                    () => e.pageKey,
                    (h, d) => {
                        h !== d && s.callHook("page:loading:start");
                    }
                );
            let f = !1;
            {
                const h = Ue().beforeResolve(() => {
                    f = !1;
                });
                Xn(() => {
                    h();
                });
            }
            return () =>
                me(
                    sc,
                    { name: e.name, route: e.route, ...t },
                    {
                        default: (h) => {
                            const d = zg(i, h.route, h.Component),
                                _ =
                                    i &&
                                    i.matched.length === h.route.matched.length;
                            if (!h.Component) {
                                if (u && !_) return u;
                                a();
                                return;
                            }
                            if (u && c && !c.isCurrent(h.route)) return u;
                            if (d && i && (!c || c?.isCurrent(i)))
                                return _ ? u : null;
                            const v = Gs(h, e.pageKey),
                                T = Qg(i, h.route, h.Component);
                            (!s.isHydrating &&
                                l === v &&
                                !T &&
                                _n(() => {
                                    ((f = !0), s.callHook("page:loading:end"));
                                }),
                                (l = v));
                            const R = !!(
                                    e.transition ??
                                    h.route.meta.pageTransition ??
                                    gi
                                ),
                                b =
                                    R &&
                                    Yg([
                                        e.transition,
                                        h.route.meta.pageTransition,
                                        gi,
                                        {
                                            onAfterLeave() {
                                                (delete s._runningTransition,
                                                    s.callHook(
                                                        "page:transition:finish",
                                                        h.Component
                                                    ));
                                            }
                                        }
                                    ]),
                                g = e.keepalive ?? h.route.meta.keepalive ?? Qd;
                            return (
                                (u = ic(
                                    R && b,
                                    gg(
                                        g,
                                        me(
                                            uo,
                                            {
                                                suspensible: !0,
                                                onPending: () => {
                                                    (R &&
                                                        (s._runningTransition =
                                                            !0),
                                                        s.callHook(
                                                            "page:start",
                                                            h.Component
                                                        ));
                                                },
                                                onResolve: async () => {
                                                    await _n();
                                                    try {
                                                        (s._route.sync?.(),
                                                            await s.callHook(
                                                                "page:finish",
                                                                h.Component
                                                            ),
                                                            delete s._runningTransition,
                                                            !f &&
                                                                !T &&
                                                                ((f = !0),
                                                                await s.callHook(
                                                                    "page:loading:end"
                                                                )));
                                                    } finally {
                                                        a();
                                                    }
                                                }
                                            },
                                            {
                                                default: () => {
                                                    const y = {
                                                        key: v || void 0,
                                                        vnode: n.default
                                                            ? Xg(n.default, h)
                                                            : h.Component,
                                                        route: h.route,
                                                        renderKey: v || void 0,
                                                        trackRootNodes: R,
                                                        vnodeRef: o
                                                    };
                                                    if (!g) return me(qg, y);
                                                    const w = h.Component.type,
                                                        S = w;
                                                    let L = Ji.get(S);
                                                    return (
                                                        L ||
                                                            ((L = cc(
                                                                w.name ||
                                                                    w.__name
                                                            )),
                                                            Ji.set(S, L)),
                                                        me(L, y)
                                                    );
                                                }
                                            }
                                        )
                                    )
                                ).default()),
                                u
                            );
                        }
                    }
                );
        }
    });
function Yg(e) {
    const t = [];
    for (const n of e)
        n &&
            t.push({
                ...n,
                onAfterLeave: n.onAfterLeave ? To(n.onAfterLeave) : void 0
            });
    return La(...t);
}
function zg(e, t, n) {
    if (!e) return !1;
    const r = t.matched.findIndex((s) => s.components?.default === n?.type);
    return !r || r === -1
        ? !1
        : t.matched
              .slice(0, r)
              .some(
                  (s, o) =>
                      s.components?.default !==
                      e.matched[o]?.components?.default
              ) ||
              (n &&
                  Gs({ route: t, Component: n }) !==
                      Gs({ route: e, Component: n }));
}
function Qg(e, t, n) {
    return e
        ? t.matched.findIndex((s) => s.components?.default === n?.type) <
              t.matched.length - 1
        : !1;
}
function Xg(e, t) {
    const n = e(t);
    return n.length === 1 ? me(n[0]) : me(je, void 0, n);
}
const Zg = vt({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: { name: String, layoutProps: Object },
        setup(e, t) {
            return () => me(kt[e.name], e.layoutProps, t.slots);
        }
    }),
    em = {
        name: { type: [String, Boolean, Object], default: null },
        fallback: { type: [String, Object], default: null }
    },
    tm = vt({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: em,
        setup(e, t) {
            const n = ye(),
                r = Ce(Xt),
                o = !r || r === Gr() ? oc() : r,
                i = Ke(() => {
                    let a = ue(e.name) ?? o?.meta.layout ?? "default";
                    return (
                        a && !(a in kt) && e.fallback && (a = ue(e.fallback)),
                        a
                    );
                }),
                l = _t();
            t.expose({ layoutRef: l });
            const c = n.deferHydration();
            if (n.isHydrating) {
                const a = n.hooks.hookOnce("app:error", c);
                Ue().beforeEach(a);
            }
            let u;
            return () => {
                const a = i.value && i.value in kt,
                    f = o?.meta.layoutTransition ?? zd,
                    h = u;
                return (
                    (u = i.value),
                    ic(a && f, {
                        default: () =>
                            me(
                                uo,
                                {
                                    suspensible: !0,
                                    onResolve: () => {
                                        _n(c);
                                    }
                                },
                                {
                                    default: () =>
                                        me(
                                            nm,
                                            {
                                                layoutProps: ha(t.attrs, {
                                                    ref: l
                                                }),
                                                key: i.value || void 0,
                                                name: i.value,
                                                shouldProvide: !e.name,
                                                isRenderingNewLayout: (d) =>
                                                    d !== h && d === i.value,
                                                hasTransition: !!f
                                            },
                                            t.slots
                                        )
                                }
                            )
                    }).default()
                );
            };
        }
    }),
    nm = vt({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: { type: [String, Boolean] },
            layoutProps: { type: Object },
            hasTransition: { type: Boolean },
            shouldProvide: { type: Boolean },
            isRenderingNewLayout: { type: Function, required: !0 }
        },
        setup(e, t) {
            const n = e.name;
            e.shouldProvide &&
                Mt(Da, {
                    isCurrent: (o) => n === (o.meta.layout ?? "default")
                });
            const r = Ce(Xt);
            if (r && r === Gr()) {
                const o = oc(),
                    i = {};
                for (const l in o) {
                    const c = l;
                    Object.defineProperty(i, c, {
                        enumerable: !0,
                        get: () =>
                            e.isRenderingNewLayout(e.name) ? o[c] : r[c]
                    });
                }
                Mt(Xt, ot(i));
            }
            return () =>
                !n || (typeof n == "string" && !(n in kt))
                    ? t.slots.default?.()
                    : me(
                          Zg,
                          { key: n, layoutProps: e.layoutProps, name: n },
                          t.slots
                      );
        }
    }),
    rm = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, s] of t) n[r] = s;
        return n;
    },
    sm = $g(Gg),
    om = {};
function im(e, t) {
    const n = sm,
        r = Jg,
        s = tm;
    return (ht(), Wt(s, null, { default: oo(() => [_e(n), _e(r)]), _: 1 }));
}
const lm = rm(om, [["render", im]]),
    am = {
        __name: "nuxt-error-page",
        props: { error: Object },
        setup(e) {
            const n = e.error,
                r = Number(n.statusCode || 500),
                s = r === 404,
                o =
                    n.statusMessage ??
                    (s ? "Page Not Found" : "Internal Server Error"),
                i = n.message || n.toString(),
                l = void 0,
                a = s
                    ? Do(() =>
                          Or(
                              () => import("./D-0PrC_6.js"),
                              __vite__mapDeps([5, 1, 6]),
                              import.meta.url
                          )
                      )
                    : Do(() =>
                          Or(
                              () => import("./wp0t6UUY.js"),
                              __vite__mapDeps([7, 8]),
                              import.meta.url
                          )
                      );
            return (f, h) => (
                ht(),
                Wt(
                    ue(a),
                    bc(
                        fa({
                            statusCode: ue(r),
                            statusMessage: ue(o),
                            description: ue(i),
                            stack: ue(l)
                        })
                    ),
                    null,
                    16
                )
            );
        }
    },
    cm = { key: 0 },
    Yi = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = ye(),
                r = n.deferHydration();
            if (n.isHydrating) {
                const u = n.hooks.hookOnce("app:error", r);
                Ue().beforeEach(u);
            }
            const s = !1;
            (Mt(Xt, Gr()),
                n.hooks.callHookWith((u) => u.map((a) => a()), "vue:setup"));
            const o = qr(),
                i = !1,
                l = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
            jl((u, a, f) => {
                if (
                    (n.hooks
                        .callHook("vue:error", u, a, f)
                        .catch((h) =>
                            console.error("[nuxt] Error in `vue:error` hook", h)
                        ),
                    l.test(navigator.userAgent))
                )
                    return (
                        n.hooks.callHook("app:error", u),
                        console.error(
                            `[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,
                            u
                        ),
                        !1
                    );
                if (Fa(u) && (u.fatal || u.unhandled))
                    return (n.runWithContext(() => Vt(u)), !1);
            });
            const c = !1;
            return (u, a) => (
                ht(),
                Wt(
                    uo,
                    { onResolve: ue(r) },
                    {
                        default: oo(() => [
                            ue(i)
                                ? (ht(), rf("div", cm))
                                : ue(o)
                                  ? (ht(),
                                    Wt(
                                        ue(am),
                                        { key: 1, error: ue(o) },
                                        null,
                                        8,
                                        ["error"]
                                    ))
                                  : ue(c)
                                    ? (ht(),
                                      Wt(
                                          ue(t),
                                          { key: 2, context: ue(c) },
                                          null,
                                          8,
                                          ["context"]
                                      ))
                                    : ue(s)
                                      ? (ht(), Wt(Eu(ue(s)), { key: 3 }))
                                      : (ht(), Wt(ue(lm), { key: 4 }))
                        ]),
                        _: 1
                    },
                    8,
                    ["onResolve"]
                )
            );
        }
    };
let zi;
{
    let e;
    ((zi = async function () {
        if (e) return e;
        const n = !!(
                window.__NUXT__?.serverRendered ??
                document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true"
            ),
            r = n ? Kf(Yi) : Wf(Yi),
            s = th({ vueApp: r });
        async function o(i) {
            (await s.callHook("app:error", i), (s.payload.error ||= zt(i)));
        }
        ((r.config.errorHandler = o),
            s.hook("app:suspense:resolve", () => {
                r.config.errorHandler === o && (r.config.errorHandler = void 0);
            }),
            !n &&
                mi.id &&
                s.hook("app:suspense:resolve", () => {
                    document.getElementById(mi.id)?.remove();
                }));
        try {
            await sh(s, Ug);
        } catch (i) {
            o(i);
        }
        try {
            (await s.hooks.callHook("app:created", r),
                await s.hooks.callHook("app:beforeMount", r),
                r.mount(Xd),
                await s.hooks.callHook("app:mounted", r),
                await _n());
        } catch (i) {
            o(i);
        }
        return r;
    }),
        (e = zi().catch((t) => {
            throw (console.error("Error while mounting app:", t), t);
        })));
}
export {
    en as A,
    go as B,
    Kr as C,
    pm as D,
    yd as E,
    Sr as F,
    hm as G,
    jr as H,
    je as I,
    fm as J,
    dm as K,
    rm as _,
    ua as a,
    _e as b,
    rf as c,
    da as d,
    vt as e,
    ue as f,
    Wt as g,
    Ue as h,
    ye as i,
    Wn as j,
    Co as k,
    qi as l,
    Xn as m,
    mm as n,
    ht as o,
    me as p,
    um as q,
    gt as r,
    _t as s,
    Rc as t,
    gm as u,
    wa as v,
    oo as w,
    ph as x,
    Fg as y,
    Ke as z
};
