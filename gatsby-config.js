module.exports = {
  siteMetadata: {
    title: `Self taught developer`,
    description: ``,
    author: `@dsod`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans\:300`, `Montserrat\:400`],
        display: "swap",
      },
    },
    `gatsby-alias-imports`,
  ],
}
