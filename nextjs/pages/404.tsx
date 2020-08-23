import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Page from '../components/pages/error'

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page statusCode={404} />
    </>
  )
}

export default Custom404Page
