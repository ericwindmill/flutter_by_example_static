module.exports = {
  siteMetadata: {
    // edit below
    title: `Flutter by Example`,
    author: `Eric Windmill`,
    description: `Tutorials about Dart and Flutter.`,
    siteUrl: `https://flutterbyexample.com`,
    social: {
      twitter: `ericwindmill`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [`tutorial`, `lesson`, `user`, `tag`, `blog-post`],
        singleTypes: [`table-of-contents`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-156056355-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: "https://dartpad.dev/experimental/inject_embed.dart.js"
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `flutterbyexample`
      }
    }
  ],
}
