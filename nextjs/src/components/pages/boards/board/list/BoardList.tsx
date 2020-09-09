import { Card, CardBody, CardFooter, CardHeader } from '@retail-ui/core'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { List } from '@/types/model'

import TaskCard from '../card/TaskCard'
import ActionDropdown from './ActionDropdown'
import ListHeader from './ListHeader'

interface BoardListProps {
  list: List
  index: number
}

const BoardList: React.FC<BoardListProps> = ({ list, index }) => {
  return (
    <Draggable draggableId={`${list.id}`} index={index} key={list.id}>
      {({ innerRef, dragHandleProps, draggableProps }, snapshot) => {
        return (
          <div ref={innerRef} {...draggableProps}>
            <Card>
              <CardHeader
                action={<ActionDropdown list={list} />}
                {...dragHandleProps}
              >
                <ListHeader list={list} />
              </CardHeader>
              My body
              {/* <Droppable key={list.id} droppableId={`${list.position}`}>
              {(provided, snapshot) => (
                <CardBody>
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    Body
                    <div>
                      {list.cards.map((card, index) => (
                        <Draggable
                          key={card.id}
                          draggableId={`${card.id}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <TaskCard
                              card={card}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </div>
                </CardBody>
              )}
            </Droppable> */}
              <CardFooter>
                {/* <Draggable draggableId={`${Infinity}`} index={list.cards.length}>
                                  {(provided, snapshot) => (
                                    <NewCard text="New" provided={provided} snapshot={snapshot} />
                                  )}
                                </Draggable> */}
              </CardFooter>
            </Card>
          </div>
        )
      }}
    </Draggable>
  )
}

export default BoardList
