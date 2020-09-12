import { ButtonIcon, Card, CardBody, XSolid } from '@retail-ui/core'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardFragment, useDeleteCardMutation } from '@/generated/graphql'

interface CardTaskProps {
  card: CardFragment
  index: number
}

const CardTask: React.FC<CardTaskProps> = (props) => {
  const { card, index } = props

  const [deleteCard, { loading }] = useDeleteCardMutation()

  const handleDeleteCard = React.useCallback(async () => {
    try {
      await deleteCard({
        variables: { id: card.id },
        update: (cache, { data }) => {
          if (data?.delete_cards_by_pk) {
            const cacheId = cache.identify(data?.delete_cards_by_pk)
            if (cacheId) {
              cache.modify({
                id: cache.identify({ __typename: 'lists', id: card.list_id }),
                fields: {
                  cards(existingCardRefs = [], { readField, toReference }) {
                    return existingCardRefs.filter(
                      //@ts-ignore
                      (ref) => ref.__ref !== cacheId,
                    )
                  },
                },
              })
              cache.evict({ id: cacheId })
            }
          }
        },
        optimisticResponse: {
          __typename: 'mutation_root',
          delete_cards_by_pk: {
            ...card,
          },
        },
      })
    } catch (err) {
      console.log(`🇻🇳 [LOG]: removeAction -> err`, err)
    }
  }, [])

  return (
    <Draggable key={card.id} draggableId={`${card.id}`} index={index}>
      {(
        { draggableProps, dragHandleProps, innerRef },
        { isDragging, isDropAnimating },
      ) => (
        <Card
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          className={`CardTask group ${
            isDragging && `border-purple-600`
          } px-2 py-3 mb-4`}
        >
          <CardBody>
            <div className={`flex items-center justify-between h-16`}>
              <div>{card.title}</div>
              <div className={`hidden group-hover:block`}>
                <ButtonIcon
                  size="sm"
                  color="danger"
                  variant="light"
                  icon={<XSolid />}
                  onClick={(e) => {
                    e.preventDefault()
                    handleDeleteCard()
                  }}
                />
              </div>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </CardBody>
        </Card>
      )}
    </Draggable>
  )
}

export default CardTask
