import ServerActionView from '@/screen/server-action/server-action'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'random dog' },
        { name: 'description', content: 'get a random dog image' },
    ]
}

export default function ServerActionRoute() {
    return <ServerActionView />
}
