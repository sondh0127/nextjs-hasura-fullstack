import '../styles/tailwind.css'

import { Provider as BumbagProvider } from 'bumbag'
import { Provider as NextAuthProvider } from 'next-auth/client'
import NextApp, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import React from 'react'

import { ThemeProvider } from '../contexts/themeContext'
import theme from '../lib/theme'
import WithGraphQL from '../lib/with-graphql'

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
