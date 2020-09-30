module.exports = {
  siteMetadata: {
    title: `My Website Portfolio`,
    description: `Contains information about me, my professional experience, and showcase some of my software development projects.`,
    author: `Daniel Söderling`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Söderling - Portfolio`,
        short_name: `dsod - Portfolio`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#0082D8`,
        display: `standalone`,
        icon: `src/icons/favicon.svg`
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans\:300,400`, `Montserrat\:400`],
        display: "swap",
      },
    },
    `gatsby-alias-imports`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: [`${__dirname}/src/icons`],
        },
      },
    },
  ],
}
