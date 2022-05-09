export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type ICreateUserInput = {
  address: Scalars['String'];
  password: Scalars['String'];
  user_email: Scalars['String'];
  user_name: Scalars['String'];
  user_nickname: Scalars['String'];
  user_phone: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createUser: IUser;
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  updatePassword: IUser;
  updateUser: IUser;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteUserArgs = {
  user_email: Scalars['String'];
};


export type IMutationLoginArgs = {
  password: Scalars['String'];
  user_email: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  user_email: Scalars['String'];
};


export type IMutationUpdatePasswordArgs = {
  password: Scalars['String'];
  user_email: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  user_email: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
};


export type IQueryFetchUserArgs = {
  user_email: Scalars['String'];
};

export type IUpdateUserInput = {
  address: Scalars['String'];
  password: Scalars['String'];
  user_email: Scalars['String'];
  user_phone: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  point: Scalars['Int'];
  state: Scalars['Boolean'];
  user_createAt: Scalars['DateTime'];
  user_email: Scalars['String'];
  user_id: Scalars['String'];
  user_name: Scalars['String'];
  user_nickname: Scalars['String'];
  user_phone: Scalars['String'];
  user_updateAt: Scalars['DateTime'];
};
