import { Avatar, Card, CardBody } from '@retail-ui/core'
import React from 'react'

import { FeedFragment } from '@/generated/graphql'
import { timeFromNow } from '@/utils'

interface FeedPageProps {
  feed: FeedFragment
}

const FeedPage: React.FC<FeedPageProps> = ({ feed }) => {
  return (
    <Card>
      <CardBody>
        <div className={`flex items-center`}>
          <div className={`mr-2`}>
            {feed.user && <Avatar alt={feed.user.name} src={feed.user.image} />}
          </div>
          <div>
            <div>
              <p className={`font-bold`}>{feed.user.name}</p>
            </div>
            <div>
              <p>{timeFromNow(feed.created_at)}</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={`mt-2`}>
          <p className={`text-gray-800`}>{feed.body}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default FeedPage
