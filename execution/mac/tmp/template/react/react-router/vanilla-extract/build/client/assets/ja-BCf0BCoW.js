import { a as c, p as l } from './chunk-EPOLDU6W-CyFp4JB8.js'
var d = {
        firstSmall: '_2xwh130',
        firstMiddle: '_2xwh131',
        firstBig: '_2xwh132',
    },
    f = { textNormal: 'dwzodi0', textWhite: 'dwzodi1' }
function x(o) {
    const e = new Set(),
        r = []
    for (const t of o) t !== '' && (e.has(t) || (e.add(t), r.push(t)))
    return r.join(' ')
}
const m = c.memo(function (o) {
    const {
            as: e = 'h1',
            fontStyle: r = 'firstBig',
            color: t = 'textNormal',
            style: s,
            children: a,
        } = o,
        n = x([d[r], f[t]]),
        i = e
    return l.jsx(i, { className: n, style: s, children: a })
})
m.displayName = 'Heading'
const u = {
    app: {
        home: {
            title: 'こんにちは、react-router！',
            toServerLoaderPotter: 'server-loaderのデータ収集へ移動',
            toClientLoaderPotter: 'client-loaderのデータ収集へ移動',
            toServerActionPotter: 'server-actionでサーバーアクションを実行',
        },
        serverLoaderPotter: { title: 'server-loaderのデータ収集' },
        clientLoaderPotter: { title: 'client-loaderのデータ収集' },
        serverActionPotter: {
            title: 'server-actionのサーバーアクション',
            button: 'ランダムな犬の画像を取得',
        },
    },
}
export { m as H, x as c, u as j }
