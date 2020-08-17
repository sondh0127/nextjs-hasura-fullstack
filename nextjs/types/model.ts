import {
  BoardsQuery,
  CardFragment,
  FeedsSubscription,
  ListFragment,
} from '../generated/graphql'
export type IFeed = FeedsSubscription['feeds'][number]

export type Board = BoardsQuery['boards'][number]
export type List = ListFragment
export type Card = CardFragment
