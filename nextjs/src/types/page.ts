import { NextPage } from 'next'
import { AppProps } from 'next/app'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (component: JSX.Element) => JSX.Element
}

export type AppPropsWithLayout<P = unknown, IP = P> = AppProps & {
  Component: NextPageWithLayout<P, IP>
}
