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
  ingredients?: InputMaybe<Array<InputMaybe<IngredientItemInput>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type CreateMenuInput = {
  MenuItems?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
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
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  phone?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
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
  capacity?: Maybe<Scalars['Float']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ingredients?: Maybe<Array<Maybe<Recipe>>>;
  menu?: Maybe<Menu>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  MenuItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
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
  getKidMenuByStore?: Maybe<Menu>;
  getMenu?: Maybe<Menu>;
  getMenus?: Maybe<Array<Maybe<Menu>>>;
  getOpening?: Maybe<Opening>;
  getOpenings?: Maybe<Array<Maybe<Opening>>>;
  getOrder?: Maybe<Order>;
  getOrders?: Maybe<Array<Maybe<Order>>>;
  getStore?: Maybe<Store>;
  getStoreBySlug?: Maybe<Store>;
  getStores?: Maybe<Array<Maybe<Store>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  landingItems?: Maybe<Array<Maybe<Item>>>;
  storeItemsByType?: Maybe<Array<Maybe<Item>>>;
};


export type QueryGetIngredientArgs = {
  id: Scalars['String'];
};


export type QueryGetItemArgs = {
  id: Scalars['ID'];
};


export type QueryGetKidMenuByStoreArgs = {
  storeId: Scalars['ID'];
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


export type QueryGetStoreBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryStoreItemsByTypeArgs = {
  storeId: Scalars['ID'];
  type: Scalars['String'];
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
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  openings?: Maybe<Array<Maybe<Opening>>>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
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
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
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
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  phone?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
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

export type IngredientItemInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthPayload', token: string } };

export type LandingItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingItemsQuery = { __typename?: 'Query', landingItems?: Array<{ __typename?: 'Item', id: string, name?: string | null | undefined, category?: string | null | undefined, description?: string | null | undefined, capacity?: number | null | undefined, ingredients?: Array<{ __typename?: 'Recipe', ingredient?: { __typename?: 'Ingredient', name: string, id: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type GetKidMenuByStoreQueryVariables = Exact<{
  storeId: Scalars['ID'];
}>;


export type GetKidMenuByStoreQuery = { __typename?: 'Query', getKidMenuByStore?: { __typename?: 'Menu', id: string, name?: string | null | undefined, price?: number | null | undefined } | null | undefined };

export type StoreItemsByTypeQueryVariables = Exact<{
  storeId: Scalars['ID'];
  type: Scalars['String'];
}>;


export type StoreItemsByTypeQuery = { __typename?: 'Query', storeItemsByType?: Array<{ __typename?: 'Item', id: string, name?: string | null | undefined, price?: string | null | undefined, category?: string | null | undefined, type?: string | null | undefined, description?: string | null | undefined, capacity?: number | null | undefined, ingredients?: Array<{ __typename?: 'Recipe', ingredient?: { __typename?: 'Ingredient', name: string, id: string } | null | undefined } | null | undefined> | null | undefined, menu?: { __typename?: 'Menu', id: string, name?: string | null | undefined, price?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type GetStoreBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetStoreBySlugQuery = { __typename?: 'Query', getStoreBySlug?: { __typename?: 'Store', id: string, city: string, slug: string, phone?: string | null | undefined, postal_code?: number | null | undefined, address?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined, openings?: Array<{ __typename?: 'Opening', weekday?: string | null | undefined, start?: string | null | undefined, end?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoresQuery = { __typename?: 'Query', getStores?: Array<{ __typename?: 'Store', id: string, city: string, slug: string, phone?: string | null | undefined, postal_code?: number | null | undefined, address?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined } | null | undefined> | null | undefined };


export const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    token
  }
}
    `;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSignInMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(options: VueApolloComposable.UseMutationOptions<SignInMutation, SignInMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SignInMutation, SignInMutationVariables>>) {
  return VueApolloComposable.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SignInMutation, SignInMutationVariables>;
export const LandingItemsDocument = gql`
    query LandingItems {
  landingItems {
    id
    name
    category
    description
    capacity
    ingredients {
      ingredient {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useLandingItemsQuery__
 *
 * To run a query within a Vue component, call `useLandingItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingItemsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLandingItemsQuery();
 */
export function useLandingItemsQuery(options: VueApolloComposable.UseQueryOptions<LandingItemsQuery, LandingItemsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LandingItemsQuery, LandingItemsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LandingItemsQuery, LandingItemsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LandingItemsQuery, LandingItemsQueryVariables>(LandingItemsDocument, {}, options);
}
export function useLandingItemsLazyQuery(options: VueApolloComposable.UseQueryOptions<LandingItemsQuery, LandingItemsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LandingItemsQuery, LandingItemsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LandingItemsQuery, LandingItemsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LandingItemsQuery, LandingItemsQueryVariables>(LandingItemsDocument, {}, options);
}
export type LandingItemsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LandingItemsQuery, LandingItemsQueryVariables>;
export const GetKidMenuByStoreDocument = gql`
    query GetKidMenuByStore($storeId: ID!) {
  getKidMenuByStore(storeId: $storeId) {
    id
    name
    price
  }
}
    `;

/**
 * __useGetKidMenuByStoreQuery__
 *
 * To run a query within a Vue component, call `useGetKidMenuByStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKidMenuByStoreQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetKidMenuByStoreQuery({
 *   storeId: // value for 'storeId'
 * });
 */
export function useGetKidMenuByStoreQuery(variables: GetKidMenuByStoreQueryVariables | VueCompositionApi.Ref<GetKidMenuByStoreQueryVariables> | ReactiveFunction<GetKidMenuByStoreQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>(GetKidMenuByStoreDocument, variables, options);
}
export function useGetKidMenuByStoreLazyQuery(variables: GetKidMenuByStoreQueryVariables | VueCompositionApi.Ref<GetKidMenuByStoreQueryVariables> | ReactiveFunction<GetKidMenuByStoreQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>(GetKidMenuByStoreDocument, variables, options);
}
export type GetKidMenuByStoreQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetKidMenuByStoreQuery, GetKidMenuByStoreQueryVariables>;
export const StoreItemsByTypeDocument = gql`
    query StoreItemsByType($storeId: ID!, $type: String!) {
  storeItemsByType(storeId: $storeId, type: $type) {
    id
    name
    price
    category
    type
    description
    capacity
    ingredients {
      ingredient {
        name
        id
      }
    }
    menu {
      id
      name
      price
    }
  }
}
    `;

/**
 * __useStoreItemsByTypeQuery__
 *
 * To run a query within a Vue component, call `useStoreItemsByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreItemsByTypeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useStoreItemsByTypeQuery({
 *   storeId: // value for 'storeId'
 *   type: // value for 'type'
 * });
 */
export function useStoreItemsByTypeQuery(variables: StoreItemsByTypeQueryVariables | VueCompositionApi.Ref<StoreItemsByTypeQueryVariables> | ReactiveFunction<StoreItemsByTypeQueryVariables>, options: VueApolloComposable.UseQueryOptions<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>(StoreItemsByTypeDocument, variables, options);
}
export function useStoreItemsByTypeLazyQuery(variables: StoreItemsByTypeQueryVariables | VueCompositionApi.Ref<StoreItemsByTypeQueryVariables> | ReactiveFunction<StoreItemsByTypeQueryVariables>, options: VueApolloComposable.UseQueryOptions<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>(StoreItemsByTypeDocument, variables, options);
}
export type StoreItemsByTypeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<StoreItemsByTypeQuery, StoreItemsByTypeQueryVariables>;
export const GetStoreBySlugDocument = gql`
    query GetStoreBySlug($slug: String!) {
  getStoreBySlug(slug: $slug) {
    id
    city
    slug
    phone
    postal_code
    address
    latitude
    longitude
    openings {
      weekday
      start
      end
    }
  }
}
    `;

/**
 * __useGetStoreBySlugQuery__
 *
 * To run a query within a Vue component, call `useGetStoreBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreBySlugQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStoreBySlugQuery({
 *   slug: // value for 'slug'
 * });
 */
export function useGetStoreBySlugQuery(variables: GetStoreBySlugQueryVariables | VueCompositionApi.Ref<GetStoreBySlugQueryVariables> | ReactiveFunction<GetStoreBySlugQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetStoreBySlugQuery, GetStoreBySlugQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>(GetStoreBySlugDocument, variables, options);
}
export function useGetStoreBySlugLazyQuery(variables: GetStoreBySlugQueryVariables | VueCompositionApi.Ref<GetStoreBySlugQueryVariables> | ReactiveFunction<GetStoreBySlugQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetStoreBySlugQuery, GetStoreBySlugQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>(GetStoreBySlugDocument, variables, options);
}
export type GetStoreBySlugQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetStoreBySlugQuery, GetStoreBySlugQueryVariables>;
export const GetStoresDocument = gql`
    query GetStores {
  getStores {
    id
    city
    slug
    phone
    postal_code
    address
    latitude
    longitude
  }
}
    `;

/**
 * __useGetStoresQuery__
 *
 * To run a query within a Vue component, call `useGetStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoresQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStoresQuery();
 */
export function useGetStoresQuery(options: VueApolloComposable.UseQueryOptions<GetStoresQuery, GetStoresQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStoresQuery, GetStoresQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStoresQuery, GetStoresQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetStoresQuery, GetStoresQueryVariables>(GetStoresDocument, {}, options);
}
export function useGetStoresLazyQuery(options: VueApolloComposable.UseQueryOptions<GetStoresQuery, GetStoresQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStoresQuery, GetStoresQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStoresQuery, GetStoresQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetStoresQuery, GetStoresQueryVariables>(GetStoresDocument, {}, options);
}
export type GetStoresQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetStoresQuery, GetStoresQueryVariables>;