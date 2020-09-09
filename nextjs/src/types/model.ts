import {
  BoardsQuery,
  CardFragment,
  Exact,
  FeedsSubscription,
  ListFragment,
} from '@/generated/graphql'
export type Feed = Exact<FeedsSubscription['feeds'][number]>

export type Board = BoardsQuery['boards'][number]
export type List = ListFragment
export type Card = CardFragment
