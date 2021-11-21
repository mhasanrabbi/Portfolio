/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Mahmud Hasan Rabbi",
    description:
      "Headless cms portfolio website of Mahmud Hasan Rabbi, self-taught developer.",
    author: "@mahmudhasanrabbi",
    image: "/twitter-img.PNG",
    siteUrl: "https://www.mahmudrabbi.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "process.env.API_URL"
          : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        collectionTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["100", "300", "400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
}
