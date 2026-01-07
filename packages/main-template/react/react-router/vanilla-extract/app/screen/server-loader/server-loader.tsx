import type { Result } from '@/utils/result'
import type { Option } from '@/utils/option'
import type { FetcherError } from '@/utils/error/fetcher'
import type { APIView } from '@/features/harry-potter'
import type { CheckerProps } from '@/shared/types/object'
import { Box } from '@/components/ui'
import { CardListView } from '@/components/view'

interface Props {
    characters: Result<Option<Array<APIView>>, FetcherError>
}

export default function ServerLoaderView<T extends Props>({
    characters,
}: CheckerProps<T, Props, 'Invalid props'>) {
    if (characters.isErr) {
        return <Box>Error: {characters.err.message}</Box>
    }

    if (characters.value.isNone) {
        return <Box>No characters found.</Box>
    }

    return (
        <CardListView
            potters={characters.value.value}
            title="Harry Potter Characters"
        />
    )
}
