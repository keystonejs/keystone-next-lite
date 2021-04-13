import { list } from "@keystone-next/keystone/schema";
import { text, image } from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

export const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text(),
    content: document(),
    hero: image(),
  },
});
