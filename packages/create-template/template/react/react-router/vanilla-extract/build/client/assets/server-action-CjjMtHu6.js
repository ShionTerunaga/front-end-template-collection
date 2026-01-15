import { p as t, y as i, w as o } from './chunk-EPOLDU6W-CyFp4JB8.js'
import { H as m, j as s } from './ja-BCf0BCoW.js'
import { z as r } from './fetcher-scheme-CNYqZB-D.js'
r.object({ message: r.string(), status: r.string() }).strict()
function a({ title: e }) {
    return t.jsx('button', { type: 'submit', children: e })
}
function u({ action: e }) {
    return t.jsxs('main', {
        children: [
            t.jsx(m, { children: s.app.serverActionPotter.title }),
            t.jsx(i, {
                method: 'post',
                children: t.jsx(a, { title: s.app.serverActionPotter.button }),
            }),
            e &&
                t.jsxs(t.Fragment, {
                    children: [
                        t.jsx('div', {
                            children:
                                e.isOk && e.value.isSome
                                    ? t.jsx('img', {
                                          alt: 'Random dog',
                                          width: 150,
                                          height: 150,
                                          src: e.value.value.message,
                                      })
                                    : null,
                        }),
                        t.jsx('div', {
                            children: e.isErr
                                ? t.jsxs('p', {
                                      children: ['Error: ', e.err.message],
                                  })
                                : null,
                        }),
                    ],
                }),
        ],
    })
}
function p({}) {
    return [
        { title: 'random dog' },
        { name: 'description', content: 'get a random dog image' },
    ]
}
const j = o(function ({ actionData: n }) {
    return t.jsx(u, { action: n })
})
export { j as default, p as meta }
