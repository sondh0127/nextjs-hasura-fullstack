import Head from 'next/head'
import React from 'react'

import { NextPageWithLayout } from '@/types/page'

import Header from './components/Header'

interface MainLayoutProps {
  title: string
  footer?: () => React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { title, children } = props

  return (
    <React.Fragment>
      <Head>
        <title>{title || 'sondh0127'}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-600 dark:to-cool-gray-600">
        <Header />
        <main className="min-h-full overflow-y-hidden">
          <div className="container px-6 mx-auto">{children}</div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default MainLayout

export const getMainLayout = (title: string) => {
  const getLayout: NextPageWithLayout['getLayout'] = (page) => (
    <MainLayout title={title}>{page}</MainLayout>
  )
  return getLayout
}
