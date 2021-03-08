module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "0vafsxnk",
        dataset: "production",
        watchMode: true, // Updates your pages when you create or update documents
        token:
          "skrGRDDnihxkEHTC3PzckGMlgi679doqAiFOR9ZQvbHWws9w9uzrWAYP5EuwK0zDrlDSVlPdZkBAYMvY3s4CpkGGTitJ6bLJOf5FKWrx4vbNJNHH2iyqwocmqtrPVjAG1PXo8Hyaz93pxNTcYOoInfndzE2G137qeV9mTp1LT3H5WXlSoi9O",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
