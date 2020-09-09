import {
  ButtonIcon,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  StarSolid,
} from '@retail-ui/core'
import NextLink from 'next/link'
import React from 'react'

import { useBoardsQuery } from '@/generated/graphql'

const BoardsPage: React.FC = () => {
  const { data, loading } = useBoardsQuery()

  return (
    <div className={`flex flex-col items-stretch py-6`}>
      <article className="prose text-white lg:prose-xl">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </article>
      <div
        className={`grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8`}
      >
        {(data?.boards || []).map((b) => {
          return (
            <Card key={b.id} color="success">
              <CardHeader
                title={b.name}
                action={
                  <NextLink
                    key={b.id}
                    href={`/boards/[boardId]`}
                    as={`/boards/${b.id}`}
                  >
                    <ButtonIcon
                      variant="light"
                      color="success"
                      icon={<StarSolid />}
                    />
                  </NextLink>
                }
              ></CardHeader>
              <CardBody></CardBody>
              <CardFooter></CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default BoardsPage
