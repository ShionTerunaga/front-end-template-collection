import { Link } from '@tanstack/react-router'
import homeStyles from './home.css'
import { Box, Heading, PopupOpenButton } from '@/components/ui'
import { ExplainPopup } from '@/features/about'
import { ja } from '@/shared/lang/ja'

function HomeLayout() {
  return (
    <Box as="main">
      <Heading>{ja.app.home.title}</Heading>
      <PopupOpenButton
        popupChildren={<ExplainPopup />}
        className={homeStyles.button}
      >
        {ja.app.home.openPopup}
      </PopupOpenButton>

      <Box>
        <Link to="/single-dynamic-fetch">{ja.app.home.toCachePotter}</Link>
      </Box>
    </Box>
  )
}

export default HomeLayout
