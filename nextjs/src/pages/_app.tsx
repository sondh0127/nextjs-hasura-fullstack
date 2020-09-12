import '@/styles/tailwind.css'

import { ApolloProvider } from '@apollo/client'
import ProgressBar from '@badrap/bar-of-progress'
import { ThemeProvider } from '@retail-ui/core'
import { Provider as NextAuthProvider } from 'next-auth/client'
import Router from 'next/router'
import React from 'react'

import { useApollo } from '@/lib/apolloClient'
import { AppPropsWithLayout } from '@/types/page'

const progress = new ProgressBar({
  size: 2,
  color: '#7e3af2',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { session } = pageProps
  const apolloClient = useApollo(pageProps.initialApolloState, session?.token)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <NextAuthProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </ApolloProvider>
      </NextAuthProvider>
    </>
  )
}

export default App
