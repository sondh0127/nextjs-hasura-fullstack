import React from 'react'

import { useFeedsSubscription } from '@/generated/graphql'

import AddNewFeedForm from './AddNewFeedForm'
import Feed from './feed'

const FeedsPage = () => {
  const { data, loading } = useFeedsSubscription()
  console.log(`🇻🇳 [LOG]: FeedsPage -> data`, data)

  return (
    <div className={`py-6`}>
      <div className={`max-w-2xl mx-auto`}>
        <AddNewFeedForm />
      </div>
      <div className={`flex flex-col space-y-4 mt-4`}>
        {(data?.feeds || []).map((feed) => {
          return (
            <div className={``} key={feed.id}>
              <Feed feed={feed} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeedsPage
