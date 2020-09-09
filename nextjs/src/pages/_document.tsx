import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
import { resetServerContext } from 'react-beautiful-dnd'

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    resetServerContext()
    try {
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      }
      // eslint-disable-next-line no-empty
    } finally {
    }
  }
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
