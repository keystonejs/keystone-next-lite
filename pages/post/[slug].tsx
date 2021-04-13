import React from "react";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";

import { lists } from ".keystone/api";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, content, hero } = post;

  console.log(hero);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {hero}
        {/* <Image
          src={`/images/${post.hero.id}.${post.hero.extension}`}
          width={post.hero.width}
          height={post.hero.height}
        /> */}
      </div>
      <div>{content}</div>
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

export async function getStaticProps({
  params: { slug },
}: GetStaticPropsContext) {
  const [post] = await lists.Post.findMany({
    where: { slug: slug as string },
    resolveFields: `title
    content
    hero {
      id
      extension
      width
      height
    }`,
  });
  return { props: { post } };
}
