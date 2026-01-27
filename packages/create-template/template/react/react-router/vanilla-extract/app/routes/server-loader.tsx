import { getCharacter, type APIView } from '@/features/harry-potter'
import type { Route } from '../+types/root'
import type { Result } from '@/utils/result'
import type { Option } from '@/utils/option'
import type { FetcherError } from '@/utils/error/fetcher'
import ServerLoaderView from '@/screen/server-loader/server-loader'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Server Loader' },
        { name: 'description', content: 'This is the server loader route.' },
    ]
}

export async function loader({}: Route.LoaderArgs): Promise<
    Result<Option<Array<APIView>>, FetcherError>
> {
    const characters = await getCharacter()

    return characters
}

export type LoaderData = Awaited<ReturnType<typeof loader>>

export default function ServerLoaderRoute({
    loaderData,
}: {
    loaderData: LoaderData
}) {
    const character = loaderData

    return <ServerLoaderView characters={character} />
}
