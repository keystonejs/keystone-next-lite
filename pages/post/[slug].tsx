import React from "react";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

import { lists } from ".keystone/api";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await lists.Post.findMany({
    resolveFields: false,
  });

  const paths = posts
    .map((post) => post.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => `/post/${slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const [post] = await lists.Post.findMany({
    where: { slug: { equals: params!.slug as string } },
    resolveFields: false,
  });
  return { props: { post } };
}
