import '../styles/tailwind.css'

import ProgressBar from '@badrap/bar-of-progress'
import { Provider as BumbagProvider } from 'bumbag'
import { Provider as NextAuthProvider } from 'next-auth/client'
import NextApp, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import React from 'react'

import { ThemeProvider } from '../contexts/themeContext'
import theme from '../lib/theme'
import WithGraphQL from '../lib/with-graphql'

const progress = new ProgressBar({
  size: 2,
  color: '#7e3af2',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

const App = ({ Component, pageProps, token }: AppProps & { token: string }) => {
  const { session } = pageProps
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NextAuthProvider session={session}>
        <WithGraphQL token={token}>
          <ThemeProvider>
            <BumbagProvider isSSR theme={theme}>
              <Component {...pageProps} />
            </BumbagProvider>
          </ThemeProvider>
        </WithGraphQL>
      </NextAuthProvider>
    </>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(appContext)

  const cookies = parseCookies(appContext.ctx)
  const token = cookies['next-auth.session-token']

  return { ...appProps, token }
}

export default App
