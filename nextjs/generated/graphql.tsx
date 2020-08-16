import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  provider_account_id: Scalars['String'];
  provider_id: Scalars['String'];
  provider_type: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: Maybe<Accounts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
  stddev?: Maybe<Accounts_Stddev_Order_By>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Order_By>;
  sum?: Maybe<Accounts_Sum_Order_By>;
  var_pop?: Maybe<Accounts_Var_Pop_Order_By>;
  var_samp?: Maybe<Accounts_Var_Samp_Order_By>;
  variance?: Maybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
}

/** input type for incrementing integer column in table "accounts" */
export type Accounts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "boards" */
export type Boards = {
  __typename?: 'boards';
  /** An array relationship */
  boards_users: Array<Boards_Users>;
  /** An aggregated array relationship */
  boards_users_aggregate: Boards_Users_Aggregate;
  /** An array relationship */
  cards: Array<Cards>;
  /** An aggregated array relationship */
  cards_aggregate: Cards_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  lists: Array<Lists>;
  /** An aggregated array relationship */
  lists_aggregate: Lists_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** columns and relationships of "boards" */
export type BoardsBoards_UsersArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsBoards_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsCards_AggregateArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsLists_AggregateArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: 'boards_aggregate';
  aggregate?: Maybe<Boards_Aggregate_Fields>;
  nodes: Array<Boards>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: 'boards_aggregate_fields';
  avg?: Maybe<Boards_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Boards_Max_Fields>;
  min?: Maybe<Boards_Min_Fields>;
  stddev?: Maybe<Boards_Stddev_Fields>;
  stddev_pop?: Maybe<Boards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boards_Stddev_Samp_Fields>;
  sum?: Maybe<Boards_Sum_Fields>;
  var_pop?: Maybe<Boards_Var_Pop_Fields>;
  var_samp?: Maybe<Boards_Var_Samp_Fields>;
  variance?: Maybe<Boards_Variance_Fields>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Boards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "boards" */
export type Boards_Aggregate_Order_By = {
  avg?: Maybe<Boards_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Boards_Max_Order_By>;
  min?: Maybe<Boards_Min_Order_By>;
  stddev?: Maybe<Boards_Stddev_Order_By>;
  stddev_pop?: Maybe<Boards_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Boards_Stddev_Samp_Order_By>;
  sum?: Maybe<Boards_Sum_Order_By>;
  var_pop?: Maybe<Boards_Var_Pop_Order_By>;
  var_samp?: Maybe<Boards_Var_Samp_Order_By>;
  variance?: Maybe<Boards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "boards" */
export type Boards_Arr_Rel_Insert_Input = {
  data: Array<Boards_Insert_Input>;
  on_conflict?: Maybe<Boards_On_Conflict>;
};

/** aggregate avg on columns */
export type Boards_Avg_Fields = {
  __typename?: 'boards_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "boards" */
export type Boards_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Boards_Bool_Exp>>>;
  _not?: Maybe<Boards_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Boards_Bool_Exp>>>;
  boards_users?: Maybe<Boards_Users_Bool_Exp>;
  cards?: Maybe<Cards_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lists?: Maybe<Lists_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint */
  BoardsPkey = 'boards_pkey',
}

/** input type for incrementing integer column in table "boards" */
export type Boards_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  boards_users?: Maybe<Boards_Users_Arr_Rel_Insert_Input>;
  cards?: Maybe<Cards_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lists?: Maybe<Lists_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: 'boards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "boards" */
export type Boards_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: 'boards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "boards" */
export type Boards_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: 'boards_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Boards>;
};

/** input type for inserting object relation for remote table "boards" */
export type Boards_Obj_Rel_Insert_Input = {
  data: Boards_Insert_Input;
  on_conflict?: Maybe<Boards_On_Conflict>;
};

/** on conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint;
  update_columns: Array<Boards_Update_Column>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** ordering options when selecting data from "boards" */
export type Boards_Order_By = {
  boards_users_aggregate?: Maybe<Boards_Users_Aggregate_Order_By>;
  cards_aggregate?: Maybe<Cards_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lists_aggregate?: Maybe<Lists_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "boards" */
export type Boards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Boards_Stddev_Fields = {
  __typename?: 'boards_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "boards" */
export type Boards_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Boards_Stddev_Pop_Fields = {
  __typename?: 'boards_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "boards" */
export type Boards_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Boards_Stddev_Samp_Fields = {
  __typename?: 'boards_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "boards" */
export type Boards_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Boards_Sum_Fields = {
  __typename?: 'boards_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "boards" */
export type Boards_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "boards_users" */
export type Boards_Users = {
  __typename?: 'boards_users';
  /** An object relationship */
  board: Boards;
  board_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "boards_users" */
export type Boards_Users_Aggregate = {
  __typename?: 'boards_users_aggregate';
  aggregate?: Maybe<Boards_Users_Aggregate_Fields>;
  nodes: Array<Boards_Users>;
};

/** aggregate fields of "boards_users" */
export type Boards_Users_Aggregate_Fields = {
  __typename?: 'boards_users_aggregate_fields';
  avg?: Maybe<Boards_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Boards_Users_Max_Fields>;
  min?: Maybe<Boards_Users_Min_Fields>;
  stddev?: Maybe<Boards_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Boards_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boards_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Boards_Users_Sum_Fields>;
  var_pop?: Maybe<Boards_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Boards_Users_Var_Samp_Fields>;
  variance?: Maybe<Boards_Users_Variance_Fields>;
};

/** aggregate fields of "boards_users" */
export type Boards_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Boards_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "boards_users" */
export type Boards_Users_Aggregate_Order_By = {
  avg?: Maybe<Boards_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Boards_Users_Max_Order_By>;
  min?: Maybe<Boards_Users_Min_Order_By>;
  stddev?: Maybe<Boards_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Boards_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Boards_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Boards_Users_Sum_Order_By>;
  var_pop?: Maybe<Boards_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Boards_Users_Var_Samp_Order_By>;
  variance?: Maybe<Boards_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "boards_users" */
export type Boards_Users_Arr_Rel_Insert_Input = {
  data: Array<Boards_Users_Insert_Input>;
  on_conflict?: Maybe<Boards_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Boards_Users_Avg_Fields = {
  __typename?: 'boards_users_avg_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "boards_users" */
export type Boards_Users_Avg_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "boards_users". All fields are combined with a logical 'AND'. */
export type Boards_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Boards_Users_Bool_Exp>>>;
  _not?: Maybe<Boards_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Boards_Users_Bool_Exp>>>;
  board?: Maybe<Boards_Bool_Exp>;
  board_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards_users" */
export enum Boards_Users_Constraint {
  /** unique or primary key constraint */
  BoardsUsersPkey = 'boards_users_pkey',
}

/** input type for incrementing integer column in table "boards_users" */
export type Boards_Users_Inc_Input = {
  board_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "boards_users" */
export type Boards_Users_Insert_Input = {
  board?: Maybe<Boards_Obj_Rel_Insert_Input>;
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Boards_Users_Max_Fields = {
  __typename?: 'boards_users_max_fields';
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "boards_users" */
export type Boards_Users_Max_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Boards_Users_Min_Fields = {
  __typename?: 'boards_users_min_fields';
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "boards_users" */
export type Boards_Users_Min_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "boards_users" */
export type Boards_Users_Mutation_Response = {
  __typename?: 'boards_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Boards_Users>;
};

/** input type for inserting object relation for remote table "boards_users" */
export type Boards_Users_Obj_Rel_Insert_Input = {
  data: Boards_Users_Insert_Input;
  on_conflict?: Maybe<Boards_Users_On_Conflict>;
};

/** on conflict condition type for table "boards_users" */
export type Boards_Users_On_Conflict = {
  constraint: Boards_Users_Constraint;
  update_columns: Array<Boards_Users_Update_Column>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** ordering options when selecting data from "boards_users" */
export type Boards_Users_Order_By = {
  board?: Maybe<Boards_Order_By>;
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "boards_users" */
export type Boards_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "boards_users" */
export enum Boards_Users_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "boards_users" */
export type Boards_Users_Set_Input = {
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Boards_Users_Stddev_Fields = {
  __typename?: 'boards_users_stddev_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "boards_users" */
export type Boards_Users_Stddev_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Boards_Users_Stddev_Pop_Fields = {
  __typename?: 'boards_users_stddev_pop_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "boards_users" */
export type Boards_Users_Stddev_Pop_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Boards_Users_Stddev_Samp_Fields = {
  __typename?: 'boards_users_stddev_samp_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "boards_users" */
export type Boards_Users_Stddev_Samp_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Boards_Users_Sum_Fields = {
  __typename?: 'boards_users_sum_fields';
  board_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "boards_users" */
export type Boards_Users_Sum_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "boards_users" */
export enum Boards_Users_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Boards_Users_Var_Pop_Fields = {
  __typename?: 'boards_users_var_pop_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "boards_users" */
export type Boards_Users_Var_Pop_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Boards_Users_Var_Samp_Fields = {
  __typename?: 'boards_users_var_samp_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "boards_users" */
export type Boards_Users_Var_Samp_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Boards_Users_Variance_Fields = {
  __typename?: 'boards_users_variance_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "boards_users" */
export type Boards_Users_Variance_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Boards_Var_Pop_Fields = {
  __typename?: 'boards_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "boards" */
export type Boards_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Boards_Var_Samp_Fields = {
  __typename?: 'boards_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "boards" */
export type Boards_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Boards_Variance_Fields = {
  __typename?: 'boards_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "boards" */
export type Boards_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "cards" */
export type Cards = {
  __typename?: 'cards';
  /** An object relationship */
  board: Boards;
  board_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  list: Lists;
  list_id: Scalars['Int'];
  position: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "cards" */
export type Cards_Aggregate = {
  __typename?: 'cards_aggregate';
  aggregate?: Maybe<Cards_Aggregate_Fields>;
  nodes: Array<Cards>;
};

/** aggregate fields of "cards" */
export type Cards_Aggregate_Fields = {
  __typename?: 'cards_aggregate_fields';
  avg?: Maybe<Cards_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Cards_Max_Fields>;
  min?: Maybe<Cards_Min_Fields>;
  stddev?: Maybe<Cards_Stddev_Fields>;
  stddev_pop?: Maybe<Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cards_Stddev_Samp_Fields>;
  sum?: Maybe<Cards_Sum_Fields>;
  var_pop?: Maybe<Cards_Var_Pop_Fields>;
  var_samp?: Maybe<Cards_Var_Samp_Fields>;
  variance?: Maybe<Cards_Variance_Fields>;
};

/** aggregate fields of "cards" */
export type Cards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cards" */
export type Cards_Aggregate_Order_By = {
  avg?: Maybe<Cards_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cards_Max_Order_By>;
  min?: Maybe<Cards_Min_Order_By>;
  stddev?: Maybe<Cards_Stddev_Order_By>;
  stddev_pop?: Maybe<Cards_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cards_Stddev_Samp_Order_By>;
  sum?: Maybe<Cards_Sum_Order_By>;
  var_pop?: Maybe<Cards_Var_Pop_Order_By>;
  var_samp?: Maybe<Cards_Var_Samp_Order_By>;
  variance?: Maybe<Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cards" */
export type Cards_Arr_Rel_Insert_Input = {
  data: Array<Cards_Insert_Input>;
  on_conflict?: Maybe<Cards_On_Conflict>;
};

/** aggregate avg on columns */
export type Cards_Avg_Fields = {
  __typename?: 'cards_avg_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cards" */
export type Cards_Avg_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type Cards_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cards_Bool_Exp>>>;
  _not?: Maybe<Cards_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cards_Bool_Exp>>>;
  board?: Maybe<Boards_Bool_Exp>;
  board_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  list?: Maybe<Lists_Bool_Exp>;
  list_id?: Maybe<Int_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cards" */
export enum Cards_Constraint {
  /** unique or primary key constraint */
  CardsPkey = 'cards_pkey',
  /** unique or primary key constraint */
  CardsPositionKey = 'cards_position_key',
}

/** input type for incrementing integer column in table "cards" */
export type Cards_Inc_Input = {
  board_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "cards" */
export type Cards_Insert_Input = {
  board?: Maybe<Boards_Obj_Rel_Insert_Input>;
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  list?: Maybe<Lists_Obj_Rel_Insert_Input>;
  list_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cards_Max_Fields = {
  __typename?: 'cards_max_fields';
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "cards" */
export type Cards_Max_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cards_Min_Fields = {
  __typename?: 'cards_min_fields';
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "cards" */
export type Cards_Min_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "cards" */
export type Cards_Mutation_Response = {
  __typename?: 'cards_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cards>;
};

/** input type for inserting object relation for remote table "cards" */
export type Cards_Obj_Rel_Insert_Input = {
  data: Cards_Insert_Input;
  on_conflict?: Maybe<Cards_On_Conflict>;
};

/** on conflict condition type for table "cards" */
export type Cards_On_Conflict = {
  constraint: Cards_Constraint;
  update_columns: Array<Cards_Update_Column>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** ordering options when selecting data from "cards" */
export type Cards_Order_By = {
  board?: Maybe<Boards_Order_By>;
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list?: Maybe<Lists_Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "cards" */
export type Cards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cards" */
export enum Cards_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  Position = 'position',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "cards" */
export type Cards_Set_Input = {
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Cards_Stddev_Fields = {
  __typename?: 'cards_stddev_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cards" */
export type Cards_Stddev_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cards_Stddev_Pop_Fields = {
  __typename?: 'cards_stddev_pop_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cards" */
export type Cards_Stddev_Pop_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cards_Stddev_Samp_Fields = {
  __typename?: 'cards_stddev_samp_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cards" */
export type Cards_Stddev_Samp_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Cards_Sum_Fields = {
  __typename?: 'cards_sum_fields';
  board_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cards" */
export type Cards_Sum_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** update columns of table "cards" */
export enum Cards_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  Position = 'position',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Cards_Var_Pop_Fields = {
  __typename?: 'cards_var_pop_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cards" */
export type Cards_Var_Pop_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cards_Var_Samp_Fields = {
  __typename?: 'cards_var_samp_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cards" */
export type Cards_Var_Samp_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Cards_Variance_Fields = {
  __typename?: 'cards_variance_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  list_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cards" */
export type Cards_Variance_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** columns and relationships of "feeds" */
export type Feeds = {
  __typename?: 'feeds';
  body: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "feeds" */
export type Feeds_Aggregate = {
  __typename?: 'feeds_aggregate';
  aggregate?: Maybe<Feeds_Aggregate_Fields>;
  nodes: Array<Feeds>;
};

/** aggregate fields of "feeds" */
export type Feeds_Aggregate_Fields = {
  __typename?: 'feeds_aggregate_fields';
  avg?: Maybe<Feeds_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Feeds_Max_Fields>;
  min?: Maybe<Feeds_Min_Fields>;
  stddev?: Maybe<Feeds_Stddev_Fields>;
  stddev_pop?: Maybe<Feeds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feeds_Stddev_Samp_Fields>;
  sum?: Maybe<Feeds_Sum_Fields>;
  var_pop?: Maybe<Feeds_Var_Pop_Fields>;
  var_samp?: Maybe<Feeds_Var_Samp_Fields>;
  variance?: Maybe<Feeds_Variance_Fields>;
};

/** aggregate fields of "feeds" */
export type Feeds_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feeds_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "feeds" */
export type Feeds_Aggregate_Order_By = {
  avg?: Maybe<Feeds_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Feeds_Max_Order_By>;
  min?: Maybe<Feeds_Min_Order_By>;
  stddev?: Maybe<Feeds_Stddev_Order_By>;
  stddev_pop?: Maybe<Feeds_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Feeds_Stddev_Samp_Order_By>;
  sum?: Maybe<Feeds_Sum_Order_By>;
  var_pop?: Maybe<Feeds_Var_Pop_Order_By>;
  var_samp?: Maybe<Feeds_Var_Samp_Order_By>;
  variance?: Maybe<Feeds_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "feeds" */
export type Feeds_Arr_Rel_Insert_Input = {
  data: Array<Feeds_Insert_Input>;
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** aggregate avg on columns */
export type Feeds_Avg_Fields = {
  __typename?: 'feeds_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "feeds" */
export type Feeds_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "feeds". All fields are combined with a logical 'AND'. */
export type Feeds_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feeds_Bool_Exp>>>;
  _not?: Maybe<Feeds_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feeds_Bool_Exp>>>;
  body?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "feeds" */
export enum Feeds_Constraint {
  /** unique or primary key constraint */
  FeedsPkey = 'feeds_pkey',
}

/** input type for incrementing integer column in table "feeds" */
export type Feeds_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "feeds" */
export type Feeds_Insert_Input = {
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Feeds_Max_Fields = {
  __typename?: 'feeds_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "feeds" */
export type Feeds_Max_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Feeds_Min_Fields = {
  __typename?: 'feeds_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "feeds" */
export type Feeds_Min_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "feeds" */
export type Feeds_Mutation_Response = {
  __typename?: 'feeds_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Feeds>;
};

/** input type for inserting object relation for remote table "feeds" */
export type Feeds_Obj_Rel_Insert_Input = {
  data: Feeds_Insert_Input;
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** on conflict condition type for table "feeds" */
export type Feeds_On_Conflict = {
  constraint: Feeds_Constraint;
  update_columns: Array<Feeds_Update_Column>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** ordering options when selecting data from "feeds" */
export type Feeds_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "feeds" */
export type Feeds_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "feeds" */
export enum Feeds_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "feeds" */
export type Feeds_Set_Input = {
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Feeds_Stddev_Fields = {
  __typename?: 'feeds_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "feeds" */
export type Feeds_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Feeds_Stddev_Pop_Fields = {
  __typename?: 'feeds_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "feeds" */
export type Feeds_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Feeds_Stddev_Samp_Fields = {
  __typename?: 'feeds_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "feeds" */
export type Feeds_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Feeds_Sum_Fields = {
  __typename?: 'feeds_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "feeds" */
export type Feeds_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "feeds" */
export enum Feeds_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Feeds_Var_Pop_Fields = {
  __typename?: 'feeds_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "feeds" */
export type Feeds_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Feeds_Var_Samp_Fields = {
  __typename?: 'feeds_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "feeds" */
export type Feeds_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Feeds_Variance_Fields = {
  __typename?: 'feeds_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "feeds" */
export type Feeds_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "lists" */
export type Lists = {
  __typename?: 'lists';
  /** An object relationship */
  board: Boards;
  board_id: Scalars['Int'];
  /** An array relationship */
  cards: Array<Cards>;
  /** An aggregated array relationship */
  cards_aggregate: Cards_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  position: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "lists" */
export type ListsCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** columns and relationships of "lists" */
export type ListsCards_AggregateArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** aggregated selection of "lists" */
export type Lists_Aggregate = {
  __typename?: 'lists_aggregate';
  aggregate?: Maybe<Lists_Aggregate_Fields>;
  nodes: Array<Lists>;
};

/** aggregate fields of "lists" */
export type Lists_Aggregate_Fields = {
  __typename?: 'lists_aggregate_fields';
  avg?: Maybe<Lists_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Lists_Max_Fields>;
  min?: Maybe<Lists_Min_Fields>;
  stddev?: Maybe<Lists_Stddev_Fields>;
  stddev_pop?: Maybe<Lists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lists_Stddev_Samp_Fields>;
  sum?: Maybe<Lists_Sum_Fields>;
  var_pop?: Maybe<Lists_Var_Pop_Fields>;
  var_samp?: Maybe<Lists_Var_Samp_Fields>;
  variance?: Maybe<Lists_Variance_Fields>;
};

/** aggregate fields of "lists" */
export type Lists_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lists_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lists" */
export type Lists_Aggregate_Order_By = {
  avg?: Maybe<Lists_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lists_Max_Order_By>;
  min?: Maybe<Lists_Min_Order_By>;
  stddev?: Maybe<Lists_Stddev_Order_By>;
  stddev_pop?: Maybe<Lists_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lists_Stddev_Samp_Order_By>;
  sum?: Maybe<Lists_Sum_Order_By>;
  var_pop?: Maybe<Lists_Var_Pop_Order_By>;
  var_samp?: Maybe<Lists_Var_Samp_Order_By>;
  variance?: Maybe<Lists_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lists" */
export type Lists_Arr_Rel_Insert_Input = {
  data: Array<Lists_Insert_Input>;
  on_conflict?: Maybe<Lists_On_Conflict>;
};

/** aggregate avg on columns */
export type Lists_Avg_Fields = {
  __typename?: 'lists_avg_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "lists" */
export type Lists_Avg_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lists_Bool_Exp>>>;
  _not?: Maybe<Lists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Lists_Bool_Exp>>>;
  board?: Maybe<Boards_Bool_Exp>;
  board_id?: Maybe<Int_Comparison_Exp>;
  cards?: Maybe<Cards_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lists" */
export enum Lists_Constraint {
  /** unique or primary key constraint */
  ListsBoardIdPositionKey = 'lists_board_id_position_key',
  /** unique or primary key constraint */
  ListsPkey = 'lists_pkey',
}

/** input type for incrementing integer column in table "lists" */
export type Lists_Inc_Input = {
  board_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "lists" */
export type Lists_Insert_Input = {
  board?: Maybe<Boards_Obj_Rel_Insert_Input>;
  board_id?: Maybe<Scalars['Int']>;
  cards?: Maybe<Cards_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lists_Max_Fields = {
  __typename?: 'lists_max_fields';
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "lists" */
export type Lists_Max_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lists_Min_Fields = {
  __typename?: 'lists_min_fields';
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "lists" */
export type Lists_Min_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lists" */
export type Lists_Mutation_Response = {
  __typename?: 'lists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Lists>;
};

/** input type for inserting object relation for remote table "lists" */
export type Lists_Obj_Rel_Insert_Input = {
  data: Lists_Insert_Input;
  on_conflict?: Maybe<Lists_On_Conflict>;
};

/** on conflict condition type for table "lists" */
export type Lists_On_Conflict = {
  constraint: Lists_Constraint;
  update_columns: Array<Lists_Update_Column>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** ordering options when selecting data from "lists" */
export type Lists_Order_By = {
  board?: Maybe<Boards_Order_By>;
  board_id?: Maybe<Order_By>;
  cards_aggregate?: Maybe<Cards_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "lists" */
export type Lists_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "lists" */
export type Lists_Set_Input = {
  board_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Lists_Stddev_Fields = {
  __typename?: 'lists_stddev_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "lists" */
export type Lists_Stddev_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lists_Stddev_Pop_Fields = {
  __typename?: 'lists_stddev_pop_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "lists" */
export type Lists_Stddev_Pop_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lists_Stddev_Samp_Fields = {
  __typename?: 'lists_stddev_samp_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "lists" */
export type Lists_Stddev_Samp_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lists_Sum_Fields = {
  __typename?: 'lists_sum_fields';
  board_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "lists" */
export type Lists_Sum_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** update columns of table "lists" */
export enum Lists_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Lists_Var_Pop_Fields = {
  __typename?: 'lists_var_pop_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "lists" */
export type Lists_Var_Pop_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lists_Var_Samp_Fields = {
  __typename?: 'lists_var_samp_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "lists" */
export type Lists_Var_Samp_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lists_Variance_Fields = {
  __typename?: 'lists_variance_fields';
  board_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "lists" */
export type Lists_Variance_Order_By = {
  board_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>;
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>;
  /** delete data from the table: "boards_users" */
  delete_boards_users?: Maybe<Boards_Users_Mutation_Response>;
  /** delete single row from the table: "boards_users" */
  delete_boards_users_by_pk?: Maybe<Boards_Users>;
  /** delete data from the table: "cards" */
  delete_cards?: Maybe<Cards_Mutation_Response>;
  /** delete single row from the table: "cards" */
  delete_cards_by_pk?: Maybe<Cards>;
  /** delete data from the table: "feeds" */
  delete_feeds?: Maybe<Feeds_Mutation_Response>;
  /** delete single row from the table: "feeds" */
  delete_feeds_by_pk?: Maybe<Feeds>;
  /** delete data from the table: "lists" */
  delete_lists?: Maybe<Lists_Mutation_Response>;
  /** delete single row from the table: "lists" */
  delete_lists_by_pk?: Maybe<Lists>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>;
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>;
  /** insert data into the table: "boards_users" */
  insert_boards_users?: Maybe<Boards_Users_Mutation_Response>;
  /** insert a single row into the table: "boards_users" */
  insert_boards_users_one?: Maybe<Boards_Users>;
  /** insert data into the table: "cards" */
  insert_cards?: Maybe<Cards_Mutation_Response>;
  /** insert a single row into the table: "cards" */
  insert_cards_one?: Maybe<Cards>;
  /** insert data into the table: "feeds" */
  insert_feeds?: Maybe<Feeds_Mutation_Response>;
  /** insert a single row into the table: "feeds" */
  insert_feeds_one?: Maybe<Feeds>;
  /** insert data into the table: "lists" */
  insert_lists?: Maybe<Lists_Mutation_Response>;
  /** insert a single row into the table: "lists" */
  insert_lists_one?: Maybe<Lists>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>;
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>;
  /** update data of the table: "boards_users" */
  update_boards_users?: Maybe<Boards_Users_Mutation_Response>;
  /** update single row of the table: "boards_users" */
  update_boards_users_by_pk?: Maybe<Boards_Users>;
  /** update data of the table: "cards" */
  update_cards?: Maybe<Cards_Mutation_Response>;
  /** update single row of the table: "cards" */
  update_cards_by_pk?: Maybe<Cards>;
  /** update data of the table: "feeds" */
  update_feeds?: Maybe<Feeds_Mutation_Response>;
  /** update single row of the table: "feeds" */
  update_feeds_by_pk?: Maybe<Feeds>;
  /** update data of the table: "lists" */
  update_lists?: Maybe<Lists_Mutation_Response>;
  /** update single row of the table: "lists" */
  update_lists_by_pk?: Maybe<Lists>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Boards_UsersArgs = {
  where: Boards_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Boards_Users_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_CardsArgs = {
  where: Cards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cards_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_FeedsArgs = {
  where: Feeds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Feeds_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ListsArgs = {
  where: Lists_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lists_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>;
  on_conflict?: Maybe<Boards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input;
  on_conflict?: Maybe<Boards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Boards_UsersArgs = {
  objects: Array<Boards_Users_Insert_Input>;
  on_conflict?: Maybe<Boards_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Boards_Users_OneArgs = {
  object: Boards_Users_Insert_Input;
  on_conflict?: Maybe<Boards_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CardsArgs = {
  objects: Array<Cards_Insert_Input>;
  on_conflict?: Maybe<Cards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cards_OneArgs = {
  object: Cards_Insert_Input;
  on_conflict?: Maybe<Cards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FeedsArgs = {
  objects: Array<Feeds_Insert_Input>;
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Feeds_OneArgs = {
  object: Feeds_Insert_Input;
  on_conflict?: Maybe<Feeds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ListsArgs = {
  objects: Array<Lists_Insert_Input>;
  on_conflict?: Maybe<Lists_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lists_OneArgs = {
  object: Lists_Insert_Input;
  on_conflict?: Maybe<Lists_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: Maybe<Accounts_Inc_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: Maybe<Accounts_Inc_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_BoardsArgs = {
  _inc?: Maybe<Boards_Inc_Input>;
  _set?: Maybe<Boards_Set_Input>;
  where: Boards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _inc?: Maybe<Boards_Inc_Input>;
  _set?: Maybe<Boards_Set_Input>;
  pk_columns: Boards_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_UsersArgs = {
  _inc?: Maybe<Boards_Users_Inc_Input>;
  _set?: Maybe<Boards_Users_Set_Input>;
  where: Boards_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_Users_By_PkArgs = {
  _inc?: Maybe<Boards_Users_Inc_Input>;
  _set?: Maybe<Boards_Users_Set_Input>;
  pk_columns: Boards_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CardsArgs = {
  _inc?: Maybe<Cards_Inc_Input>;
  _set?: Maybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cards_By_PkArgs = {
  _inc?: Maybe<Cards_Inc_Input>;
  _set?: Maybe<Cards_Set_Input>;
  pk_columns: Cards_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_FeedsArgs = {
  _inc?: Maybe<Feeds_Inc_Input>;
  _set?: Maybe<Feeds_Set_Input>;
  where: Feeds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Feeds_By_PkArgs = {
  _inc?: Maybe<Feeds_Inc_Input>;
  _set?: Maybe<Feeds_Set_Input>;
  pk_columns: Feeds_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ListsArgs = {
  _inc?: Maybe<Lists_Inc_Input>;
  _set?: Maybe<Lists_Set_Input>;
  where: Lists_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lists_By_PkArgs = {
  _inc?: Maybe<Lists_Inc_Input>;
  _set?: Maybe<Lists_Set_Input>;
  pk_columns: Lists_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _inc?: Maybe<Verification_Requests_Inc_Input>;
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _inc?: Maybe<Verification_Requests_Inc_Input>;
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table: "boards_users" */
  boards_users: Array<Boards_Users>;
  /** fetch aggregated fields from the table: "boards_users" */
  boards_users_aggregate: Boards_Users_Aggregate;
  /** fetch data from the table: "boards_users" using primary key columns */
  boards_users_by_pk?: Maybe<Boards_Users>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "feeds" */
  feeds: Array<Feeds>;
  /** fetch aggregated fields from the table: "feeds" */
  feeds_aggregate: Feeds_Aggregate;
  /** fetch data from the table: "feeds" using primary key columns */
  feeds_by_pk?: Maybe<Feeds>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** query root */
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** query root */
export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** query root */
export type Query_RootBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** query root */
export type Query_RootBoards_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootBoards_UsersArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** query root */
export type Query_RootBoards_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** query root */
export type Query_RootBoards_Users_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** query root */
export type Query_RootCards_AggregateArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** query root */
export type Query_RootCards_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** query root */
export type Query_RootFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** query root */
export type Query_RootFeeds_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** query root */
export type Query_RootLists_AggregateArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** query root */
export type Query_RootLists_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** query root */
export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** query root */
export type Query_RootSessions_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  access_token: Scalars['String'];
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['Int'];
  session_token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  avg?: Maybe<Sessions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
  stddev?: Maybe<Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Sum_Fields>;
  var_pop?: Maybe<Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Variance_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  avg?: Maybe<Sessions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sessions_Max_Order_By>;
  min?: Maybe<Sessions_Min_Order_By>;
  stddev?: Maybe<Sessions_Stddev_Order_By>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Order_By>;
  sum?: Maybe<Sessions_Sum_Order_By>;
  var_pop?: Maybe<Sessions_Var_Pop_Order_By>;
  var_samp?: Maybe<Sessions_Var_Samp_Order_By>;
  variance?: Maybe<Sessions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** aggregate avg on columns */
export type Sessions_Avg_Fields = {
  __typename?: 'sessions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sessions" */
export type Sessions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sessions_Bool_Exp>>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sessions_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  session_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey',
}

/** input type for incrementing integer column in table "sessions" */
export type Sessions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Sessions>;
};

/** input type for inserting object relation for remote table "sessions" */
export type Sessions_Obj_Rel_Insert_Input = {
  data: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** ordering options when selecting data from "sessions" */
export type Sessions_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "sessions" */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sessions_Stddev_Fields = {
  __typename?: 'sessions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sessions" */
export type Sessions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Stddev_Pop_Fields = {
  __typename?: 'sessions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sessions" */
export type Sessions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Stddev_Samp_Fields = {
  __typename?: 'sessions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sessions" */
export type Sessions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sessions_Sum_Fields = {
  __typename?: 'sessions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sessions" */
export type Sessions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Sessions_Var_Pop_Fields = {
  __typename?: 'sessions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sessions" */
export type Sessions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sessions_Var_Samp_Fields = {
  __typename?: 'sessions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sessions" */
export type Sessions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sessions_Variance_Fields = {
  __typename?: 'sessions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sessions" */
export type Sessions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table: "boards_users" */
  boards_users: Array<Boards_Users>;
  /** fetch aggregated fields from the table: "boards_users" */
  boards_users_aggregate: Boards_Users_Aggregate;
  /** fetch data from the table: "boards_users" using primary key columns */
  boards_users_by_pk?: Maybe<Boards_Users>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "feeds" */
  feeds: Array<Feeds>;
  /** fetch aggregated fields from the table: "feeds" */
  feeds_aggregate: Feeds_Aggregate;
  /** fetch data from the table: "feeds" using primary key columns */
  feeds_by_pk?: Maybe<Feeds>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** subscription root */
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootBoards_UsersArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBoards_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBoards_Users_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCards_AggregateArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCards_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFeeds_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLists_AggregateArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLists_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregated array relationship */
  boards_aggregate: Boards_Aggregate;
  /** An array relationship */
  boards_users: Array<Boards_Users>;
  /** An aggregated array relationship */
  boards_users_aggregate: Boards_Users_Aggregate;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  feeds: Array<Feeds>;
  /** An aggregated array relationship */
  feeds_aggregate: Feeds_Aggregate;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "users" */
export type UsersBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBoards_UsersArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBoards_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  boards?: Maybe<Boards_Bool_Exp>;
  boards_users?: Maybe<Boards_Users_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  feeds?: Maybe<Feeds_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  boards?: Maybe<Boards_Arr_Rel_Insert_Input>;
  boards_users?: Maybe<Boards_Users_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  feeds?: Maybe<Feeds_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  boards_aggregate?: Maybe<Boards_Aggregate_Order_By>;
  boards_users_aggregate?: Maybe<Boards_Users_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  feeds_aggregate?: Maybe<Feeds_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['Int'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  avg?: Maybe<Verification_Requests_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
  stddev?: Maybe<Verification_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<Verification_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Verification_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<Verification_Requests_Sum_Fields>;
  var_pop?: Maybe<Verification_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<Verification_Requests_Var_Samp_Fields>;
  variance?: Maybe<Verification_Requests_Variance_Fields>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verification_requests" */
export type Verification_Requests_Aggregate_Order_By = {
  avg?: Maybe<Verification_Requests_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Verification_Requests_Max_Order_By>;
  min?: Maybe<Verification_Requests_Min_Order_By>;
  stddev?: Maybe<Verification_Requests_Stddev_Order_By>;
  stddev_pop?: Maybe<Verification_Requests_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Verification_Requests_Stddev_Samp_Order_By>;
  sum?: Maybe<Verification_Requests_Sum_Order_By>;
  var_pop?: Maybe<Verification_Requests_Var_Pop_Order_By>;
  var_samp?: Maybe<Verification_Requests_Var_Samp_Order_By>;
  variance?: Maybe<Verification_Requests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "verification_requests" */
export type Verification_Requests_Arr_Rel_Insert_Input = {
  data: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** aggregate avg on columns */
export type Verification_Requests_Avg_Fields = {
  __typename?: 'verification_requests_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "verification_requests" */
export type Verification_Requests_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey',
}

/** input type for incrementing integer column in table "verification_requests" */
export type Verification_Requests_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "verification_requests" */
export type Verification_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "verification_requests" */
export type Verification_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verification_Requests>;
};

/** input type for inserting object relation for remote table "verification_requests" */
export type Verification_Requests_Obj_Rel_Insert_Input = {
  data: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "verification_requests" */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "verification_requests" */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Verification_Requests_Stddev_Fields = {
  __typename?: 'verification_requests_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "verification_requests" */
export type Verification_Requests_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Verification_Requests_Stddev_Pop_Fields = {
  __typename?: 'verification_requests_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "verification_requests" */
export type Verification_Requests_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Verification_Requests_Stddev_Samp_Fields = {
  __typename?: 'verification_requests_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "verification_requests" */
export type Verification_Requests_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Verification_Requests_Sum_Fields = {
  __typename?: 'verification_requests_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "verification_requests" */
export type Verification_Requests_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Verification_Requests_Var_Pop_Fields = {
  __typename?: 'verification_requests_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "verification_requests" */
export type Verification_Requests_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Verification_Requests_Var_Samp_Fields = {
  __typename?: 'verification_requests_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "verification_requests" */
export type Verification_Requests_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Verification_Requests_Variance_Fields = {
  __typename?: 'verification_requests_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "verification_requests" */
export type Verification_Requests_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type InsertBoardMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;

export type InsertBoardMutation = { __typename?: 'mutation_root' } & {
  insert_boards_one?: Maybe<
    { __typename?: 'boards' } & Pick<Boards, 'name' | 'id'>
  >;
};

export type BoardsQueryVariables = Exact<{ [key: string]: never }>;

export type BoardsQuery = { __typename?: 'query_root' } & {
  boards: Array<{ __typename?: 'boards' } & Pick<Boards, 'id' | 'name'>>;
};

export type ListsQueryVariables = Exact<{
  board_id: Scalars['Int'];
}>;

export type ListsQuery = { __typename?: 'query_root' } & {
  lists: Array<
    { __typename?: 'lists' } & Pick<Lists, 'id' | 'position' | 'name'> & {
        cards: Array<
          { __typename?: 'cards' } & Pick<
            Cards,
            'id' | 'title' | 'description' | 'position'
          >
        >;
      }
  >;
};

export type UpdateListMutationVariables = Exact<{
  id: Scalars['Int'];
  position: Scalars['Int'];
  name: Scalars['String'];
}>;

export type UpdateListMutation = { __typename?: 'mutation_root' } & {
  update_lists_by_pk?: Maybe<
    { __typename?: 'lists' } & Pick<Lists, 'id' | 'position' | 'name'> & {
        cards: Array<
          { __typename?: 'cards' } & Pick<
            Cards,
            'id' | 'title' | 'description' | 'position'
          >
        >;
      }
  >;
};

export type InsertListMutationVariables = Exact<{
  name: Scalars['String'];
  position: Scalars['Int'];
  board_id: Scalars['Int'];
}>;

export type InsertListMutation = { __typename?: 'mutation_root' } & {
  insert_lists_one?: Maybe<
    { __typename?: 'lists' } & Pick<Lists, 'id' | 'position' | 'name'> & {
        cards: Array<
          { __typename?: 'cards' } & Pick<
            Cards,
            'id' | 'title' | 'description' | 'position'
          >
        >;
      }
  >;
};

export type InsertFeedMutationVariables = Exact<{
  body?: Maybe<Scalars['String']>;
}>;

export type InsertFeedMutation = { __typename?: 'mutation_root' } & {
  insert_feeds_one?: Maybe<{ __typename?: 'feeds' } & Pick<Feeds, 'id'>>;
};

export type FeedsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type FeedsSubscription = { __typename?: 'subscription_root' } & {
  feeds: Array<
    { __typename?: 'feeds' } & Pick<Feeds, 'id' | 'created_at' | 'body'> & {
        user: { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'image'>;
      }
  >;
};

export type FetchUserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;

export type FetchUserQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id' | 'name'>>;
};

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
}>;

export type UpdateUserMutation = { __typename?: 'mutation_root' } & {
  update_users?: Maybe<
    { __typename?: 'users_mutation_response' } & {
      returning: Array<{ __typename?: 'users' } & Pick<Users, 'id' | 'name'>>;
    }
  >;
};

export const InsertBoardDocument = gql`
  mutation insertBoard($name: String) {
    insert_boards_one(object: { name: $name }) {
      name
      id
    }
  }
`;

export function useInsertBoardMutation() {
  return Urql.useMutation<InsertBoardMutation, InsertBoardMutationVariables>(
    InsertBoardDocument
  );
}
export const BoardsDocument = gql`
  query Boards {
    boards {
      id
      name
    }
  }
`;

export function useBoardsQuery(
  options: Omit<Urql.UseQueryArgs<BoardsQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<BoardsQuery>({ query: BoardsDocument, ...options });
}
export const ListsDocument = gql`
  query Lists($board_id: Int!) {
    lists(
      order_by: { position: asc }
      where: { board_id: { _eq: $board_id } }
    ) {
      id
      position
      name
      cards {
        id
        title
        description
        position
      }
    }
  }
`;

export function useListsQuery(
  options: Omit<Urql.UseQueryArgs<ListsQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<ListsQuery>({ query: ListsDocument, ...options });
}
export const UpdateListDocument = gql`
  mutation UpdateList($id: Int!, $position: Int!, $name: String!) {
    update_lists_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, position: $position }
    ) {
      id
      position
      name
      cards {
        id
        title
        description
        position
      }
    }
  }
`;

export function useUpdateListMutation() {
  return Urql.useMutation<UpdateListMutation, UpdateListMutationVariables>(
    UpdateListDocument
  );
}
export const InsertListDocument = gql`
  mutation insertList($name: String!, $position: Int!, $board_id: Int!) {
    insert_lists_one(
      object: { name: $name, position: $position, board_id: $board_id }
    ) {
      id
      position
      name
      cards {
        id
        title
        description
        position
      }
    }
  }
`;

export function useInsertListMutation() {
  return Urql.useMutation<InsertListMutation, InsertListMutationVariables>(
    InsertListDocument
  );
}
export const InsertFeedDocument = gql`
  mutation insertFeed($body: String) {
    insert_feeds_one(object: { body: $body }) {
      id
    }
  }
`;

export function useInsertFeedMutation() {
  return Urql.useMutation<InsertFeedMutation, InsertFeedMutationVariables>(
    InsertFeedDocument
  );
}
export const FeedsDocument = gql`
  subscription feeds {
    feeds(order_by: { created_at: desc }) {
      id
      created_at
      body
      user {
        id
        name
        image
      }
    }
  }
`;

export function useFeedsSubscription<TData = FeedsSubscription>(
  options: Omit<
    Urql.UseSubscriptionArgs<FeedsSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<FeedsSubscription, TData>
) {
  return Urql.useSubscription<
    FeedsSubscription,
    TData,
    FeedsSubscriptionVariables
  >({ query: FeedsDocument, ...options }, handler);
}
export const FetchUserDocument = gql`
  query fetchUser($userId: Int!) {
    users_by_pk(id: $userId) {
      id
      name
    }
  }
`;

export function useFetchUserQuery(
  options: Omit<Urql.UseQueryArgs<FetchUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<FetchUserQuery>({
    query: FetchUserDocument,
    ...options,
  });
}
export const UpdateUserDocument = gql`
  mutation updateUser($userId: Int!, $name: String) {
    update_users(where: { id: { _eq: $userId } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument
  );
}
