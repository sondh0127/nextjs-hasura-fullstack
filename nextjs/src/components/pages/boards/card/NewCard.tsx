import React from 'react'

import AddInput from '@/components/AddInput'
import {
  CardFragment,
  ListFragment,
  useInsertCardMutation,
} from '@/generated/graphql'

interface NewCardProps {
  lastCard?: CardFragment
  list: ListFragment
}
const NewCard: React.FC<NewCardProps> = (props) => {
  const { lastCard, list } = props
  const [isCreating, setIsCreating] = React.useState(false)

  const [insertCard, { loading }] = useInsertCardMutation()

  const handleAddCard = React.useCallback(
    async (value: string) => {
      try {
        const lastPosition = lastCard?.position || 0
        const getNewPosition = (): number => {
          const bufferPosition = 1024
          return lastPosition + bufferPosition
        }

        await insertCard({
          variables: {
            list_id: list.id,
            board_id: list.board_id,
            title: value,
            description: ``,
            position: getNewPosition(),
          },
          update: (cache, { data }) => {
            if (data?.insert_cards_one) {
              const cacheId = cache.identify(data?.insert_cards_one)
              if (cacheId) {
                cache.modify({
                  id: cache.identify({
                    __typename: 'lists',
                    id: list.id,
                  }),
                  fields: {
                    cards: (existingCards = [], { toReference }) => {
                      return [...existingCards, toReference(cacheId)]
                    },
                  },
                })
              }
            }
          },
          optimisticResponse: (variables) => {
            return {
              __typename: 'mutation_root',
              insert_cards_one: {
                __typename: 'cards',
                ...variables,
                id: (lastCard?.id || 0) + 1,
                created_at: Date.now().toString(),
                updated_at: Date.now().toString(),
              },
            }
          },
        })
      } catch (err) {
        console.log(`🇻🇳 [LOG]: onSubmit -> err`, Object.values(err))
      }
    },
    [lastCard, list],
  )

  const handleClickAway = (value: string) => {
    if (value) {
      handleAddCard(value)
    } else {
      setIsCreating(false)
    }
  }

  return (
    <AddInput
      label="New card"
      placeholder="Enter card name"
      isCreating={isCreating}
      setIsCreating={setIsCreating}
      loading={loading}
      onSubmit={handleAddCard}
      onClickAway={handleClickAway}
    />
  )
}

export default NewCard
