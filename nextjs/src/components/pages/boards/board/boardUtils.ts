import produce from 'immer'

export interface DraggableLocation {
  droppableId: string
  index: number
}
export const reorder = <T extends { position: number }>(
  list: T[],
  sourceIndex: number,
  destinationIndex: number,
) => {
  const result = produce(list, (draftState) => {
    const [removed] = draftState.splice(sourceIndex, 1)
    draftState.splice(destinationIndex, 0, removed)
  })

  return result
}

export const move = <T extends unknown>(
  source: T[],
  destination: T[],
  sourceLocation: DraggableLocation,
  destinationLocation: DraggableLocation,
) => {
  const { source: nextSource, destination: nextDestination } = produce(
    { source, destination },
    (draftState) => {
      const [removed] = draftState.source.splice(sourceLocation.index, 1)
      draftState.destination.splice(destinationLocation.index, 0, removed)
    },
  )
  return [nextSource, nextDestination]
}

interface PositionArray {
  position: number
}

export const getUpdatePositionReorder = <T extends PositionArray>(
  sourceArray: T[],
  sourceIndex: number,
  destinationIndex: number,
) => {
  const sourceItem = sourceArray[sourceIndex]

  const destinationItem = sourceArray[destinationIndex]
  const destinationMinus1Item = sourceArray[destinationIndex - 1]
  const destinationPlus1Item = sourceArray[destinationIndex + 1]

  let updatedPositionOfSourceItem: number = sourceItem.position

  if (sourceItem.position > destinationItem.position) {
    if (destinationMinus1Item) {
      updatedPositionOfSourceItem =
        (destinationItem.position + destinationMinus1Item.position) / 2
    } else {
      updatedPositionOfSourceItem = destinationItem.position / 2
    }
  } else {
    if (destinationPlus1Item) {
      updatedPositionOfSourceItem =
        (destinationItem.position + destinationPlus1Item.position) / 2
    } else {
      updatedPositionOfSourceItem = destinationItem.position + 1024
    }
  }
  return updatedPositionOfSourceItem
}

export const getUpdatePositionMove = <T extends PositionArray>(
  sourceArray: T[],
  destinationArray: T[],
  sourceIndex: number,
  destinationIndex: number,
) => {
  const sourceItem = sourceArray[sourceIndex]
  const destinationItem = destinationArray[destinationIndex]
  const destinationMinus1Item = destinationArray[destinationIndex - 1]

  const lastDestinationItem = destinationArray[destinationArray.length - 1]

  let updatedPositionOfSourceItem: number = sourceItem.position
  if (!destinationItem) {
    /* destinationArray Empty push to end */
    console.log(`🇻🇳 [LOG]: destinationItem`, `Not destinationItem`)
    if (lastDestinationItem) {
      updatedPositionOfSourceItem = lastDestinationItem.position + 1024
    } else {
      updatedPositionOfSourceItem = 1024
    }
  } else if (destinationMinus1Item) {
    updatedPositionOfSourceItem =
      (destinationItem.position + destinationMinus1Item.position) / 2
  } else {
    updatedPositionOfSourceItem = destinationItem.position / 2
  }

  return updatedPositionOfSourceItem
}
