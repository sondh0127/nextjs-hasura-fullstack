import { Card, Set } from 'bumbag'
import gql from 'graphql-tag'
import NextLink from 'next/link'
import React, { useMemo } from 'react'

import { useBoardsQuery } from '../../../generated/graphql'

gql`
  query Boards {
    boards {
      id
      name
    }
  }
`
const BoardPage: React.FC = () => {
  const [{ fetching: boardsFetching, data }] = useBoardsQuery()

  return (
    <Set>
      {(data?.boards || []).map((b) => {
        return (
          <NextLink
            key={b.id}
            href={`/boards/[boardId]`}
            as={`/boards/${b.id}`}
          >
            <Card variant="shadowed" cursor="pointer">
              {b.name}
            </Card>
          </NextLink>
        )
      })}
    </Set>
  )
}

export default BoardPage
