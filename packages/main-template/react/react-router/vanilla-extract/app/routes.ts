import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('routes/home.tsx'),
    route('/server-loader', 'routes/server-loader.tsx'),
] satisfies RouteConfig
