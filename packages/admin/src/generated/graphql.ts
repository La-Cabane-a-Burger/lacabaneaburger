import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Allergen {
  Celery = 'CELERY',
  Chicken = 'CHICKEN',
  Corn = 'CORN',
  Eggs = 'EGGS',
  Fish = 'FISH',
  Gluten = 'GLUTEN',
  Lupin = 'LUPIN',
  Milk = 'MILK',
  Molluscs = 'MOLLUSCS',
  Mushrooms = 'MUSHROOMS',
  Mustard = 'MUSTARD',
  Nuts = 'NUTS',
  Peanuts = 'PEANUTS',
  Pork = 'PORK',
  Sesame = 'SESAME',
  Shellfish = 'SHELLFISH',
  Soy = 'SOY',
  Sulfur = 'SULFUR',
  Turkey = 'TURKEY',
  Wheat = 'WHEAT'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type CreateIngredientInput = {
  allergens?: InputMaybe<Array<InputMaybe<Allergen>>>;
  category?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateItemInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type CreateMenuInput = {
  MenuItems?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type CreateOpeningInput = {
  end?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  weekday?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Float'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateStoreInput = {
  address?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  latitude?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  allergens?: Maybe<Array<Maybe<Allergen>>>;
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Item = {
  __typename?: 'Item';
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ingredients?: Maybe<Array<Maybe<Recipe>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  MenuItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient?: Maybe<Ingredient>;
  createItem?: Maybe<Item>;
  createMenu?: Maybe<Menu>;
  createOpening?: Maybe<Opening>;
  createOrder?: Maybe<Order>;
  createStore?: Maybe<Store>;
  deleteAccount: Scalars['String'];
  deleteIngredient?: Maybe<Ingredient>;
  deleteItem?: Maybe<Item>;
  deleteMenu?: Maybe<Menu>;
  deleteOpening?: Maybe<Opening>;
  deleteStore?: Maybe<Store>;
  signIn: AuthPayload;
  signUp: AuthPayload;
  updateIngredient?: Maybe<Ingredient>;
  updateItem?: Maybe<Item>;
  updateMenu?: Maybe<Menu>;
  updateOpening?: Maybe<Opening>;
  updateStore?: Maybe<Store>;
  updateUser?: Maybe<User>;
};


export type MutationCreateIngredientArgs = {
  input?: InputMaybe<CreateIngredientInput>;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateMenuArgs = {
  input?: InputMaybe<CreateMenuInput>;
};


export type MutationCreateOpeningArgs = {
  input: CreateOpeningInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationDeleteAccountArgs = {
  input: SignInInput;
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOpeningArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<UpdateIngredientInput>;
};


export type MutationUpdateItemArgs = {
  id: Scalars['ID'];
  input: UpdateItemInput;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<UpdateMenuInput>;
};


export type MutationUpdateOpeningArgs = {
  id: Scalars['ID'];
  input: UpdateOpeningInput;
};


export type MutationUpdateStoreArgs = {
  id: Scalars['ID'];
  input: UpdateStoreInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Opening = {
  __typename?: 'Opening';
  end?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  start?: Maybe<Scalars['String']>;
  store?: Maybe<Store>;
  weekday?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  date: Scalars['String'];
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<Item>>>;
  price: Scalars['Int'];
  store?: Maybe<Store>;
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  getIngredient?: Maybe<Ingredient>;
  getIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  getItem?: Maybe<Item>;
  getItems?: Maybe<Array<Maybe<Item>>>;
  getMenu?: Maybe<Menu>;
  getMenus?: Maybe<Array<Maybe<Menu>>>;
  getOpening?: Maybe<Opening>;
  getOpenings?: Maybe<Array<Maybe<Opening>>>;
  getOrder?: Maybe<Order>;
  getOrders?: Maybe<Array<Maybe<Order>>>;
  getStore?: Maybe<Store>;
  getStores?: Maybe<Array<Maybe<Store>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetIngredientArgs = {
  id: Scalars['String'];
};


export type QueryGetItemArgs = {
  id: Scalars['ID'];
};


export type QueryGetMenuArgs = {
  id: Scalars['ID'];
};


export type QueryGetOpeningArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrderArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type Recipe = {
  __typename?: 'Recipe';
  ingredient?: Maybe<Ingredient>;
  itemId: Scalars['ID'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Store = {
  __typename?: 'Store';
  address?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  openings?: Maybe<Array<Maybe<Opening>>>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['Int']>;
};

export type UpdateIngredientInput = {
  allergens?: InputMaybe<Array<InputMaybe<Allergen>>>;
  category?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type UpdateItemInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type UpdateMenuInput = {
  MenuItems?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type UpdateOpeningInput = {
  end?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  weekday?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  orders?: Maybe<Array<Maybe<Order>>>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type GetIngredientQueryVariables = Exact<{
  getIngredientId: Scalars['String'];
}>;


export type GetIngredientQuery = { __typename?: 'Query', getIngredient?: { __typename?: 'Ingredient', id: string, name: string, price: number, allergens?: Array<Allergen | null | undefined> | null | undefined } | null | undefined };

export type GetIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIngredientsQuery = { __typename?: 'Query', getIngredients?: Array<{ __typename?: 'Ingredient', id: string, name: string, price: number, allergens?: Array<Allergen | null | undefined> | null | undefined, category?: string | null | undefined } | null | undefined> | null | undefined };

export type UpdateIngredientMutationVariables = Exact<{
  id: Scalars['ID'];
  input?: InputMaybe<UpdateIngredientInput>;
}>;


export type UpdateIngredientMutation = { __typename?: 'Mutation', updateIngredient?: { __typename?: 'Ingredient', id: string } | null | undefined };


export const GetIngredientDocument = gql`
    query GetIngredient($getIngredientId: String!) {
  getIngredient(id: $getIngredientId) {
    id
    name
    price
    allergens
  }
}
    `;

/**
 * __useGetIngredientQuery__
 *
 * To run a query within a Vue component, call `useGetIngredientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetIngredientQuery({
 *   getIngredientId: // value for 'getIngredientId'
 * });
 */
export function useGetIngredientQuery(variables: GetIngredientQueryVariables | VueCompositionApi.Ref<GetIngredientQueryVariables> | ReactiveFunction<GetIngredientQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetIngredientQuery, GetIngredientQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetIngredientQuery, GetIngredientQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetIngredientQuery, GetIngredientQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetIngredientQuery, GetIngredientQueryVariables>(GetIngredientDocument, variables, options);
}
export type GetIngredientQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetIngredientQuery, GetIngredientQueryVariables>;
export const GetIngredientsDocument = gql`
    query GetIngredients {
  getIngredients {
    id
    name
    price
    allergens
    category
  }
}
    `;

/**
 * __useGetIngredientsQuery__
 *
 * To run a query within a Vue component, call `useGetIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetIngredientsQuery();
 */
export function useGetIngredientsQuery(options: VueApolloComposable.UseQueryOptions<GetIngredientsQuery, GetIngredientsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetIngredientsQuery, GetIngredientsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetIngredientsQuery, GetIngredientsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetIngredientsQuery, GetIngredientsQueryVariables>(GetIngredientsDocument, {}, options);
}
export type GetIngredientsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetIngredientsQuery, GetIngredientsQueryVariables>;
export const UpdateIngredientDocument = gql`
    mutation UpdateIngredient($id: ID!, $input: UpdateIngredientInput) {
  updateIngredient(id: $id, input: $input) {
    id
  }
}
    `;

/**
 * __useUpdateIngredientMutation__
 *
 * To run a mutation, you first call `useUpdateIngredientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIngredientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateIngredientMutation({
 *   variables: {
 *     id: // value for 'id'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIngredientMutation(options: VueApolloComposable.UseMutationOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateIngredientMutation, UpdateIngredientMutationVariables>(UpdateIngredientDocument, options);
}
export type UpdateIngredientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateIngredientMutation, UpdateIngredientMutationVariables>;