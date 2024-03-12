/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "vKciShXPjx7iE61d4f8zu3",
        token: "l3ptU65hwncuZwRORPeRCWqu7SAXSB9gIghMvYEuR9uNQvzbzg9dsd3YqIHbxrBOFET1JvRGVAiBxQSbAg",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
