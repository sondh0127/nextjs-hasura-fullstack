import { Card, CardBody, CardFooter, CardHeader } from '@retail-ui/core'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { ListFragment } from '@/generated/graphql'

import CardTask from '../card'
import NewCard from '../card/NewCard'
import ActionDropdown from './ActionDropdown'
import ListHeader from './ListHeader'

interface ListBoardProps {
  list: ListFragment
  index: number
}

const ListBoard: React.FC<ListBoardProps> = ({ list, index }) => {
  return (
    <Draggable draggableId={`${list.id}`} index={index} key={list.id}>
      {({ innerRef, dragHandleProps, draggableProps }, { isDragging }) => {
        return (
          <div
            ref={innerRef}
            {...draggableProps}
            className={`flex flex-col mx-4`}
          >
            <Card
              className={`w-72 bg-white flex flex-col ${
                isDragging && `border-purple-600`
              }`}
            >
              <CardHeader
                action={<ActionDropdown list={list} />}
                {...dragHandleProps}
                className={`hover:bg-purple-50`}
              >
                <ListHeader list={list} />
              </CardHeader>
              <Droppable
                type="CARD"
                direction="vertical"
                key={list.id}
                droppableId={`${list.id}`}
              >
                {(
                  { innerRef, droppableProps, placeholder },
                  { isDraggingOver },
                ) => (
                  <CardBody
                    ref={innerRef}
                    {...droppableProps}
                    className={`${isDraggingOver && `bg-purple-400 border-2`}`}
                  >
                    {list.cards.map((card, index) => (
                      <CardTask key={card.id} card={card} index={index} />
                    ))}
                    {placeholder}
                  </CardBody>
                )}
              </Droppable>

              <CardFooter className={`h-14`}>
                <NewCard
                  lastCard={list.cards[list.cards.length - 1]}
                  list={list}
                />
              </CardFooter>
            </Card>
          </div>
        )
      }}
    </Draggable>
  )
}

export default ListBoard
