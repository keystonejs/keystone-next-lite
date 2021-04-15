import React from "react";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { DocumentRenderer } from "@keystone-next/document-renderer";

import { lists } from ".keystone/api";

export default function PostPage({
  post: { title, content, hero },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Image src={hero.src} width={hero.width} height={hero.height} />
      </div>
      <div>
        <DocumentRenderer document={(content as any).document} />
      </div>
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await lists.Post.findMany({
    resolveFields: "slug",
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
    resolveFields: `
      title
      content {
        document
      }
      hero {
        src
        width
        height
      }
    `,
  });
  return { props: { post } };
}
