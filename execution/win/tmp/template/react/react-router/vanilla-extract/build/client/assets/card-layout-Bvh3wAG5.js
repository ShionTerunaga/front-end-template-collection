import { p as r } from './chunk-WWGJGFF6-DYiR-IbF.js'
import { c as h, B as l, H as u } from './ja-C0CTg_GC.js'
var x = 'qvv26x0'
function m(e) {
    if (typeof e != 'object') throw Error('runtime error')
    const { className: t, style: i, children: s } = e
    return r.jsx('p', { className: `${x} ${t}`, style: i, children: s })
}
var g = { smallGap: '_5d3yp40', medium: '_5d3yp41', large: '_5d3yp42' },
    p = { three: '_5d3yp43', four: '_5d3yp44', five: '_5d3yp45' },
    f = '_5d3yp46'
function j(e) {
    const {
            children: t,
            gap: i = 'large',
            gridTemplateColumns: s = 'three',
        } = e,
        a = h([g[i], p[s], f])
    return r.jsx(l, { className: a, children: t })
}
var o = { cardContainer: 'thzb2g0', image: 'thzb2g1', title: 'thzb2g2' }
function _(e) {
    const {
            title: t,
            src: i,
            alt: s,
            srcWidth: a,
            srcHeight: n,
            boxHeight: d,
        } = e,
        c = { width: a, height: d }
    return r.jsxs('div', {
        className: o.cardContainer,
        style: c,
        children: [
            r.jsx('img', {
                src: i,
                alt: s,
                className: o.image,
                width: a,
                height: n,
            }),
            r.jsx('p', { className: o.title, children: t }),
        ],
    })
}
function y(e) {
    const { potters: t, title: i } = e
    return r.jsxs('section', {
        children: [
            r.jsx(u, { children: r.jsx(m, { children: i }) }),
            r.jsx(j, {
                children: t.map(({ id: s, image: a, name: n }) =>
                    r.jsx(
                        _,
                        {
                            src: a,
                            alt: s,
                            title: n,
                            srcWidth: 150,
                            boxHeight: 300,
                            srcHeight: 200,
                        },
                        s,
                    ),
                ),
            }),
        ],
    })
}
function N({ characters: e, title: t }) {
    return e.isErr
        ? r.jsxs(l, { children: ['Error: ', e.err.message] })
        : e.value.isNone
          ? r.jsx(l, { children: 'No characters found.' })
          : r.jsx(y, { potters: e.value.value, title: t })
}
export { N as C }
