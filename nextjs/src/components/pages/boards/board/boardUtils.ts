import produce from 'immer'
import { DraggableLocation } from 'react-beautiful-dnd'

export const reorder = <T extends { position: number }>(
  list: T[],
  startIndex: number,
  endIndex: number,
) => {
  const result = produce(list, (draftState) => {
    const [removed] = draftState.splice(startIndex, 1)
    draftState.splice(endIndex, 0, removed)
  })

  return result
}

export const move = <T extends unknown>(
  source: T[],
  destination: T[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: Record<string, T[]> = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}
