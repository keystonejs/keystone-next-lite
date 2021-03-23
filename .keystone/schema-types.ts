type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type PostWhereInput = {
  readonly AND?: ReadonlyArray<PostWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PostWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly slug?: Scalars['String'] | null;
  readonly slug_not?: Scalars['String'] | null;
  readonly slug_contains?: Scalars['String'] | null;
  readonly slug_not_contains?: Scalars['String'] | null;
  readonly slug_starts_with?: Scalars['String'] | null;
  readonly slug_not_starts_with?: Scalars['String'] | null;
  readonly slug_ends_with?: Scalars['String'] | null;
  readonly slug_not_ends_with?: Scalars['String'] | null;
  readonly slug_i?: Scalars['String'] | null;
  readonly slug_not_i?: Scalars['String'] | null;
  readonly slug_contains_i?: Scalars['String'] | null;
  readonly slug_not_contains_i?: Scalars['String'] | null;
  readonly slug_starts_with_i?: Scalars['String'] | null;
  readonly slug_not_starts_with_i?: Scalars['String'] | null;
  readonly slug_ends_with_i?: Scalars['String'] | null;
  readonly slug_not_ends_with_i?: Scalars['String'] | null;
  readonly slug_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly slug_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly content?: Scalars['String'] | null;
  readonly content_not?: Scalars['String'] | null;
  readonly content_contains?: Scalars['String'] | null;
  readonly content_not_contains?: Scalars['String'] | null;
  readonly content_starts_with?: Scalars['String'] | null;
  readonly content_not_starts_with?: Scalars['String'] | null;
  readonly content_ends_with?: Scalars['String'] | null;
  readonly content_not_ends_with?: Scalars['String'] | null;
  readonly content_i?: Scalars['String'] | null;
  readonly content_not_i?: Scalars['String'] | null;
  readonly content_contains_i?: Scalars['String'] | null;
  readonly content_not_contains_i?: Scalars['String'] | null;
  readonly content_starts_with_i?: Scalars['String'] | null;
  readonly content_not_starts_with_i?: Scalars['String'] | null;
  readonly content_ends_with_i?: Scalars['String'] | null;
  readonly content_not_ends_with_i?: Scalars['String'] | null;
  readonly content_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly content_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type PostWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPostsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'content_ASC'
  | 'content_DESC';

export type PostUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly slug?: Scalars['String'] | null;
  readonly content?: Scalars['String'] | null;
};

export type PostsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PostUpdateInput | null;
};

export type PostCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly slug?: Scalars['String'] | null;
  readonly content?: Scalars['String'] | null;
};

export type PostsCreateInput = {
  readonly data?: PostCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type PostListTypeInfo = {
  key: 'Post';
  fields: 'id' | 'title' | 'slug' | 'content';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly slug?: string | null;
    readonly content?: string | null;
  };
  inputs: {
    where: PostWhereInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PostWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPostsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PostListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PostListTypeInfo,
    PostListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PostListTypeInfo,
  PostListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly Post: PostListTypeInfo;
};
