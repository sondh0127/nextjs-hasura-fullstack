import {
  BoardsQuery,
  FeedsSubscription,
  ListsQuery,
} from '../generated/graphql';
export type IFeed = FeedsSubscription['feeds'][number];

export type Board = BoardsQuery['boards'][number];
export type List = ListsQuery['lists'][number];
export type Card = ListsQuery['lists'][number]['cards'][number];
