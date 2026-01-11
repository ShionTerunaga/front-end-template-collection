import { p as s } from './chunk-WWGJGFF6-DYiR-IbF.js'
var b = {
        firstSmall: '_2xwh130',
        firstMiddle: '_2xwh131',
        firstBig: '_2xwh132',
    },
    m = { textNormal: 'dwzodi0', textWhite: 'dwzodi1' }
function d(r) {
    const t = new Set(),
        o = []
    for (const e of r) e !== '' && (t.has(e) || (t.add(e), o.push(e)))
    return o.join(' ')
}
function f(r) {
    const {
            as: t = 'h1',
            fontStyle: o = 'firstBig',
            color: e = 'textNormal',
            style: l,
            children: a,
        } = r,
        i = d([b[o], m[e]]),
        x = t
    return s.jsx(x, { className: i, style: l, children: a })
}
var n = {
    boxWidthStyle: {
        small: '_1q166nx0',
        middle: '_1q166nx1',
        big: '_1q166nx2',
        auto: '_1q166nx3',
        full: '_1q166nx4',
    },
    boxHeightStyle: {
        small: '_1q166nx5',
        middle: '_1q166nx6',
        big: '_1q166nx7',
        auto: '_1q166nx8',
        full: '_1q166nx9',
    },
    boxBorderRadiusStyle: {
        none: '_1q166nxa',
        small: '_1q166nxb',
        middle: '_1q166nxc',
        big: '_1q166nxd',
        full: '_1q166nxe',
    },
    border: {
        none: '_1q166nxf',
        thin: '_1q166nxg',
        middle: '_1q166nxh',
        thick: '_1q166nxi',
    },
    boxShadowStyle: {
        none: '_1q166nxj',
        small: '_1q166nxk',
        middle: '_1q166nxl',
        big: '_1q166nxm',
    },
    colorStyle: {
        white: '_1q166nxn',
        lightGray: '_1q166nxo',
        gray: '_1q166nxp',
        darkGray: '_1q166nxq',
        black: '_1q166nxr',
        red: '_1q166nxs',
        blue: '_1q166nxt',
        green: '_1q166nxu',
    },
}
function y(r) {
    const {
            as: t = 'div',
            width: o = 'auto',
            height: e = 'auto',
            boxShadow: l = 'none',
            color: a = 'white',
            border: i = 'none',
            borderRadius: x = 'none',
            className: c = '',
            style: _,
            children: q,
        } = r,
        h = d([
            n.boxWidthStyle[o],
            n.boxHeightStyle[e],
            n.boxShadowStyle[l],
            n.colorStyle[a],
            n.border[i],
            n.boxBorderRadiusStyle[x],
            c,
        ]),
        u = t
    return s.jsx(u, { className: h, style: _, children: q })
}
const g = {
    app: {
        home: {
            title: 'こんにちは、react-router！',
            toServerLoaderPotter: 'server-loaderのデータ収集へ移動',
            toClientLoaderPotter: 'client-loaderのデータ収集へ移動',
        },
        serverLoaderPotter: { title: 'server-loaderのデータ収集' },
        clientLoaderPotter: { title: 'client-loaderのデータ収集' },
    },
}
export { y as B, f as H, d as c, g as j }
