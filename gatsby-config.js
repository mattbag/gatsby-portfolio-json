module.exports = {
  siteMetadata: {
    title: '🎩 Matt__Bagni--2019',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.js')],
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // screenshot stuff
    'gatsby-transformer-screenshot',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    //images stuff
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Matt Bagni - 2019',
        short_name: 'gatstail',
        start_url: '/',
        background_color: '#4dc0b5',
        theme_color: '#4dc0b5',
        display: 'fullscreen',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
