module.exports = {
  pathPrefix: "/new-site",
  siteMetadata: {
    title: "Joshua Tanner",
    titleTemplate: "%s · Joshua Tanner",
    description: "Personal site and blog of developer & translator Joshua Tanner",
    url: "https://www.joshuatanner.dev", // No trailing slash allowed!
    image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@mindful_jt",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "265473971",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true, //github flavored markdown
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              footnoteBackRefInnerText: "^",
              useFootnoteMarkerText: true, // Defaults to false
            }
          }
        ],
      },
    },
  ],
};
