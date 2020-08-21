// Required for @emotion/css
import { extractCritical } from '@emotion/server'
import { InitializeColorMode } from 'bumbag'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
import { resetServerContext } from 'react-beautiful-dnd'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    resetServerContext()

    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: styles.css }}
            data-emotion-css={styles.ids.join(' ')}
          />
        </>
      ),
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
