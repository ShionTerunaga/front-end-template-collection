import { Link } from 'react-router'
import { Box, Heading } from '@/components/ui'
import { ja } from '@/shared/lang/ja'

export default function HomeView() {
    return (
        <Box as="main">
            <Heading>{ja.app.home.title}</Heading>
            <Link to="/server-loader">{ja.app.home.toServerLoaderPotter}</Link>
        </Box>
    )
}
