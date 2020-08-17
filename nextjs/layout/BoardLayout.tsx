import {
  Button,
  PageContent,
  PageWithHeader,
  PageWithSidebar,
  useColorMode,
} from 'bumbag'
import React, { FC } from 'react'

import BoardSideBar from '../components/pages/boards/board/BoardSideBar'
import Footer from './components/Footer'
import Header from './components/Header'

interface BoardLayoutProps {
  footer?: () => React.ReactNode
}

const BoardLayout: FC<BoardLayoutProps> = ({ children, footer }) => {
  const { colorMode, setColorMode } = useColorMode()
  const bgColor = { default: 'secondary400', dark: 'black200' }

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'default' : 'dark')
  }

  const heightOfNavbar = '60px'

  return (
    <PageWithHeader sticky header={<Header />}>
      <PageWithSidebar
        sidebar={<BoardSideBar />}
        sidebarPlacement="left"
        sidebarWidth="270px"
        minHeight={`calc(100vh - ${heightOfNavbar})`}
      >
        <PageContent
          // isLayout
          isFluid
          wrapperProps={{
            backgroundColor: bgColor[colorMode],
          }}
        >
          {children}
          {footer ? footer() : <Footer />}
        </PageContent>
      </PageWithSidebar>
    </PageWithHeader>
  )
}

export default BoardLayout
