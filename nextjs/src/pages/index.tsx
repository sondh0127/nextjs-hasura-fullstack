import { useApolloClient } from '@apollo/client'
import { Button } from '@retail-ui/core'
import { GetServerSideProps } from 'next'
import { getSession, signIn, signOut } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'

import { ItemLink } from '@/components/ItemLink'
import Book from '@/components/pages/index/Book'
import { getMainLayout } from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/page'
import Session, { SessionProp } from '@/types/session'

interface IndexPageProps extends SessionProp {
  session: Session | null
}

const IndexPage: NextPageWithLayout<IndexPageProps> = ({ session }) => {
  const apolloClient = useApolloClient()

  const authButtonNode = () => {
    if (session) {
      apolloClient.resetStore()
      return (
        <Link href="/api/auth/signout">
          <Button
            variant="light"
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign Out
          </Button>
        </Link>
      )
    }

    return (
      <Link href="/api/auth/signin">
        <Button
          variant="light"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Create an account
        </Button>
      </Link>
    )
  }

  return (
    <div className="py-6 mx-auto">
      <article className="mx-auto prose text-white lg:prose-xl">
        <h1 className={`!text-gray-100 text-center`}>
          Nextjs Hasura Fullstack
        </h1>
        <p className={`break-words`}>
          A boilerplate that uses{' '}
          <ItemLink href="https://hasura.io/">Hasura</ItemLink> and{' '}
          <ItemLink href="https://nextjs.org/">Next.js</ItemLink> to develop web
          applications This demo has been built using{' '}
          <ItemLink href="https://tailwindcss.com/">Tailwindcss</ItemLink>,{' '}
          <ItemLink href="https://next-auth.js.org/">NextAuth.js</ItemLink> and{' '}
          <ItemLink href="https://www.apollographql.com/docs/react/">
            ApolloClient
          </ItemLink>
        </p>
      </article>
      <div className={`mt-12`}>
        <Book />
      </div>
      <div className="mt-6 text-center">{authButtonNode()}</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx,
) => {
  const session = await getSession(ctx)

  return {
    props: {
      session,
    },
  }
}

IndexPage.getLayout = getMainLayout('Homepage')

export default IndexPage
