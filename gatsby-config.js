module.exports = {
  siteMetadata: {
    title: `react-css-3d`,
    description: `A React library for creating 3D objects and scenes without WebGL.`,
    author: `@steveeeie`
  },
  pathPrefix: `/react-css-3d`,
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/docs/pages`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/docs/components/layout.js`)
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`
  ]
};
