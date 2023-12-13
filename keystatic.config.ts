// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    landing: collection({
      label: "Landing",
      slugField: "title",
      path: "src/content/landing/*",
      format: "json",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        order: fields.integer({
          label: "Order",
          description: "The position/order of the section",
        }),
        data: fields.date({
          label: "Date",
          description: "The date of the post",
        }),
        image: fields.image({
          label: "Image",
          description: "The image of the section",
          directory: "public/images/landing",
          publicPath: "/images/landing",
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
            headingLevels: [1, 2, 3, 4, 5, 6],
            blockTypes: {
              blockquote: true,
              code: true,
            },
            softBreaks: true,
          },
          dividers: true,
          links: true,
          images: {
            directory: "public/images/landing",
            publicPath: "/images/landing",
          },
        }),
      },
    }),
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        data: fields.date({
          label: "Date",
          description: "The date of the post",
        }),
        image: fields.image({
          label: "Image",
          description: "The image of the post",
          directory: "public/images/posts",
          publicPath: "/images/posts",
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
            headingLevels: [1, 2, 3, 4, 5, 6],
            blockTypes: {
              blockquote: true,
              code: true,
            },
            softBreaks: true,
          },
          dividers: true,
          links: true,
          images: {
            directory: "public/images/posts",
            publicPath: "/images/posts",
          },
        }),
      },
    }),
  },
});
