require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Spinat Default Starter`,
    description: `Best web agency EU`,
    author: `@kovskyD`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'spinat',
        accessToken: `MC5Ya19xelJFQUFDVUFncVRC.fl7vv73vv70TJ10uYnw-XWkG77-977-9T--_vW5HWkvvv71F77-9Tj7vv73vv73vv717BA`,
        // Get the correct URLs in blog posts
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
