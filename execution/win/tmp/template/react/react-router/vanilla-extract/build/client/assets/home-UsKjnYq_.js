import { p as e, v as o, w as r } from './chunk-EPOLDU6W-CyFp4JB8.js'
import { H as n, j as t } from './ja-BCf0BCoW.js'
import { B as a } from './box-C4eT95C-.js'
function i() {
    return e.jsxs(a, {
        as: 'main',
        children: [
            e.jsx(n, { children: t.app.home.title }),
            e.jsx(o, {
                to: '/server-loader',
                children: t.app.home.toServerLoaderPotter,
            }),
            e.jsx('br', {}),
            e.jsx(o, {
                to: '/client-loader',
                children: t.app.home.toClientLoaderPotter,
            }),
            e.jsx('br', {}),
            e.jsx(o, {
                to: '/server-action',
                children: t.app.home.toServerActionPotter,
            }),
        ],
    })
}
function l({}) {
    return [
        { title: 'New React Router App' },
        { name: 'description', content: 'Welcome to React Router!' },
    ]
}
const d = r(function () {
    return e.jsx(i, {})
})
export { d as default, l as meta }
