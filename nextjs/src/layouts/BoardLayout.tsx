import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { NextPageWithLayout } from '@/types/page'

// import links from '@/utils/uiLinks'
import Header from './components/Header'
import SidebarMobile from './components/main/SidebarMobile'
// import Sidebar from './components/main/Sidebar'
// import SidebarMobile from './components/SidebarMobile'

interface BoardLayoutProps {
  title: string
}

const BoardLayout: React.FC<BoardLayoutProps> = (props) => {
  const { children, title } = props
  const { query } = useRouter()
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  React.useEffect(() => {
    setIsSideMenuOpen(false)
  }, [query])

  return (
    <React.Fragment>
      <Head>
        <title>{`${title} ${query.boardId}` || 'sondh0127'}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-600 dark:to-cool-gray-600">
        <Header onMenuClick={() => setIsSideMenuOpen(!isSideMenuOpen)} />
        <main className="min-h-full overflow-y-hidden">
          {/* <Sidebar links={links} /> */}
          <SidebarMobile
            isSideMenuOpen={isSideMenuOpen}
            onClose={() => {
              console.log(`onClose`)

              setIsSideMenuOpen(false)
            }}
          />
          <div className={``}>{children}</div>
        </main>
      </div>
    </React.Fragment>
  )
}
export default BoardLayout

export const getBoardLayout = (title: string) => {
  const getLayout: NextPageWithLayout['getLayout'] = (page) => (
    <BoardLayout title={title}>{page}</BoardLayout>
  )
  return getLayout
}
