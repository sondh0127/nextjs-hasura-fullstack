import { GetServerSideProps, NextPage } from 'next'
import { getSession, signIn, signOut } from 'next-auth/client'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import Book from '../components/pages/index/Book'
import {
  CONTAINER_PADDING,
  HEIGHT_OF_FOOTER,
  HEIGHT_OF_NAVBAR,
} from '../constants/layout'
import MainLayout from '../layouts/MainLayout'
import ISession from '../types/session'

interface IndexPageProps {
  session: ISession
}

const IndexPage: NextPage<IndexPageProps> = ({ session }) => {
  const authButtonNode = () => {
    if (session) {
      return (
        <Link href="/api/auth/signout">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign Out
          </button>
        </Link>
      )
    }

    return (
      <Link href="/api/auth/signin">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Create an account
        </button>
      </Link>
    )
  }

  return (
    <>
      <MainLayout>
        <Head>
          <title>Home Page</title>
        </Head>
        <div className="flex flex-col items-center p-10">
          <article className="prose text-white lg:prose-xl">
            <h1>Nextjs Hasura Fullstack</h1>
            <p>
              A boilerplate that uses Hasura and Next.js to develop web
              applications
            </p>
            <p>
              This demo has been built using tailwindcss, NextAuth.js and urql.
            </p>
          </article>
          <Book />
          <div className="mt-6 ">{authButtonNode()}</div>
        </div>
      </MainLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({
  req,
}) => {
  const session = await getSession({ req })

  return {
    props: {
      session,
    },
  }
}

export default IndexPage
