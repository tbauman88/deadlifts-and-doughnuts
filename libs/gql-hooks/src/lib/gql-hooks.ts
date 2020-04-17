import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
  numeric: any;
};

/** columns and relationships of "donut" */
export type Donut = {
  __typename?: 'donut';
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['numeric'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "donut" */
export type Donut_Aggregate = {
  __typename?: 'donut_aggregate';
  aggregate?: Maybe<Donut_Aggregate_Fields>;
  nodes: Array<Donut>;
};

/** aggregate fields of "donut" */
export type Donut_Aggregate_Fields = {
  __typename?: 'donut_aggregate_fields';
  avg?: Maybe<Donut_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Donut_Max_Fields>;
  min?: Maybe<Donut_Min_Fields>;
  stddev?: Maybe<Donut_Stddev_Fields>;
  stddev_pop?: Maybe<Donut_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Donut_Stddev_Samp_Fields>;
  sum?: Maybe<Donut_Sum_Fields>;
  var_pop?: Maybe<Donut_Var_Pop_Fields>;
  var_samp?: Maybe<Donut_Var_Samp_Fields>;
  variance?: Maybe<Donut_Variance_Fields>;
};

/** aggregate fields of "donut" */
export type Donut_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Donut_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "donut" */
export type Donut_Aggregate_Order_By = {
  avg?: Maybe<Donut_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Donut_Max_Order_By>;
  min?: Maybe<Donut_Min_Order_By>;
  stddev?: Maybe<Donut_Stddev_Order_By>;
  stddev_pop?: Maybe<Donut_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Donut_Stddev_Samp_Order_By>;
  sum?: Maybe<Donut_Sum_Order_By>;
  var_pop?: Maybe<Donut_Var_Pop_Order_By>;
  var_samp?: Maybe<Donut_Var_Samp_Order_By>;
  variance?: Maybe<Donut_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "donut" */
export type Donut_Arr_Rel_Insert_Input = {
  data: Array<Donut_Insert_Input>;
  on_conflict?: Maybe<Donut_On_Conflict>;
};

/** aggregate avg on columns */
export type Donut_Avg_Fields = {
  __typename?: 'donut_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "donut" */
export type Donut_Avg_Order_By = {
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "donut". All fields are combined with a logical 'AND'. */
export type Donut_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Donut_Bool_Exp>>>;
  _not?: Maybe<Donut_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Donut_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "donut" */
export enum Donut_Constraint {
  /** unique or primary key constraint */
  DonutPkey = 'donut_pkey'
}

/** input type for inserting data into table "donut" */
export type Donut_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Donut_Max_Fields = {
  __typename?: 'donut_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "donut" */
export type Donut_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Donut_Min_Fields = {
  __typename?: 'donut_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "donut" */
export type Donut_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "donut" */
export type Donut_Mutation_Response = {
  __typename?: 'donut_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Donut>;
};

/** input type for inserting object relation for remote table "donut" */
export type Donut_Obj_Rel_Insert_Input = {
  data: Donut_Insert_Input;
  on_conflict?: Maybe<Donut_On_Conflict>;
};

/** on conflict condition type for table "donut" */
export type Donut_On_Conflict = {
  constraint: Donut_Constraint;
  update_columns: Array<Donut_Update_Column>;
  where?: Maybe<Donut_Bool_Exp>;
};

/** ordering options when selecting data from "donut" */
export type Donut_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "donut" */
export enum Donut_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "donut" */
export type Donut_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Donut_Stddev_Fields = {
  __typename?: 'donut_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "donut" */
export type Donut_Stddev_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Donut_Stddev_Pop_Fields = {
  __typename?: 'donut_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "donut" */
export type Donut_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Donut_Stddev_Samp_Fields = {
  __typename?: 'donut_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "donut" */
export type Donut_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Donut_Sum_Fields = {
  __typename?: 'donut_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "donut" */
export type Donut_Sum_Order_By = {
  price?: Maybe<Order_By>;
};

/** update columns of table "donut" */
export enum Donut_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Donut_Var_Pop_Fields = {
  __typename?: 'donut_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "donut" */
export type Donut_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Donut_Var_Samp_Fields = {
  __typename?: 'donut_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "donut" */
export type Donut_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Donut_Variance_Fields = {
  __typename?: 'donut_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "donut" */
export type Donut_Variance_Order_By = {
  price?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "donut" */
  delete_donut?: Maybe<Donut_Mutation_Response>;
  /** insert data into the table: "donut" */
  insert_donut?: Maybe<Donut_Mutation_Response>;
  /** update data of the table: "donut" */
  update_donut?: Maybe<Donut_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_DonutArgs = {
  where: Donut_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_DonutArgs = {
  objects: Array<Donut_Insert_Input>;
  on_conflict?: Maybe<Donut_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_DonutArgs = {
  _set?: Maybe<Donut_Set_Input>;
  where: Donut_Bool_Exp;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "donut" */
  donut: Array<Donut>;
  /** fetch aggregated fields from the table: "donut" */
  donut_aggregate: Donut_Aggregate;
  /** fetch data from the table: "donut" using primary key columns */
  donut_by_pk?: Maybe<Donut>;
};

/** query root */
export type Query_RootDonutArgs = {
  distinct_on?: Maybe<Array<Donut_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donut_Order_By>>;
  where?: Maybe<Donut_Bool_Exp>;
};

/** query root */
export type Query_RootDonut_AggregateArgs = {
  distinct_on?: Maybe<Array<Donut_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donut_Order_By>>;
  where?: Maybe<Donut_Bool_Exp>;
};

/** query root */
export type Query_RootDonut_By_PkArgs = {
  id: Scalars['uuid'];
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

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "donut" */
  donut: Array<Donut>;
  /** fetch aggregated fields from the table: "donut" */
  donut_aggregate: Donut_Aggregate;
  /** fetch data from the table: "donut" using primary key columns */
  donut_by_pk?: Maybe<Donut>;
};

/** subscription root */
export type Subscription_RootDonutArgs = {
  distinct_on?: Maybe<Array<Donut_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donut_Order_By>>;
  where?: Maybe<Donut_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDonut_AggregateArgs = {
  distinct_on?: Maybe<Array<Donut_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donut_Order_By>>;
  where?: Maybe<Donut_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDonut_By_PkArgs = {
  id: Scalars['uuid'];
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

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreateDonutMutationVariables = {
  donut: Array<Donut_Insert_Input>;
};

export type CreateDonutMutation = { __typename?: 'mutation_root' } & {
  insert_donut?: Maybe<
    { __typename?: 'donut_mutation_response' } & {
      returning: Array<
        { __typename?: 'donut' } & Pick<
          Donut,
          | 'id'
          | 'name'
          | 'description'
          | 'price'
          | 'image'
          | 'created_at'
          | 'updated_at'
        >
      >;
    }
  >;
};

export type UpdateDonutMutationVariables = {
  id: Scalars['uuid'];
  donut: Donut_Set_Input;
};

export type UpdateDonutMutation = { __typename?: 'mutation_root' } & {
  update_donut?: Maybe<
    { __typename?: 'donut_mutation_response' } & {
      returning: Array<
        { __typename?: 'donut' } & Pick<
          Donut,
          | 'id'
          | 'name'
          | 'description'
          | 'price'
          | 'image'
          | 'created_at'
          | 'updated_at'
        >
      >;
    }
  >;
};

export type DeleteDonutMutationVariables = {
  id: Scalars['uuid'];
};

export type DeleteDonutMutation = { __typename?: 'mutation_root' } & {
  delete_donut?: Maybe<
    { __typename?: 'donut_mutation_response' } & Pick<
      Donut_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type GetAllDonutsQueryVariables = {};

export type GetAllDonutsQuery = { __typename?: 'query_root' } & {
  donut: Array<
    { __typename?: 'donut' } & Pick<
      Donut,
      'id' | 'name' | 'description' | 'price' | 'image'
    >
  >;
};

export type GetDonutQueryVariables = {
  donut: Scalars['String'];
};

export type GetDonutQuery = { __typename?: 'query_root' } & {
  donut: Array<
    { __typename?: 'donut' } & Pick<
      Donut,
      'name' | 'description' | 'price' | 'image'
    >
  >;
};

export const CreateDonutDocument = gql`
  mutation CreateDonut($donut: [donut_insert_input!]!) {
    insert_donut(objects: $donut) {
      returning {
        id
        name
        description
        price
        image
        created_at
        updated_at
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CreateDonutGQL extends Apollo.Mutation<
  CreateDonutMutation,
  CreateDonutMutationVariables
> {
  document = CreateDonutDocument;
}
export const UpdateDonutDocument = gql`
  mutation UpdateDonut($id: uuid!, $donut: donut_set_input!) {
    update_donut(where: { id: { _eq: $id } }, _set: $donut) {
      returning {
        id
        name
        description
        price
        image
        created_at
        updated_at
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UpdateDonutGQL extends Apollo.Mutation<
  UpdateDonutMutation,
  UpdateDonutMutationVariables
> {
  document = UpdateDonutDocument;
}
export const DeleteDonutDocument = gql`
  mutation DeleteDonut($id: uuid!) {
    delete_donut(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DeleteDonutGQL extends Apollo.Mutation<
  DeleteDonutMutation,
  DeleteDonutMutationVariables
> {
  document = DeleteDonutDocument;
}
export const GetAllDonutsDocument = gql`
  query GetAllDonuts {
    donut(order_by: { name: asc }) {
      id
      name
      description
      price
      image
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetAllDonutsGQL extends Apollo.Query<
  GetAllDonutsQuery,
  GetAllDonutsQueryVariables
> {
  document = GetAllDonutsDocument;
}
export const GetDonutDocument = gql`
  query GetDonut($donut: String!) {
    donut(where: { name: { _eq: $donut } }) {
      name
      description
      price
      image
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetDonutGQL extends Apollo.Query<
  GetDonutQuery,
  GetDonutQueryVariables
> {
  document = GetDonutDocument;
}
