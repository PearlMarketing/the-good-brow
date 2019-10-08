module.exports = {
  siteMetadata: {
    title: "The Good Brow | Waxing and Microblading | Concord NH",
    author: "Culver Lau",
    description: "The Good Brow specializes in professional Waxing and Microblading services. Schedule an appointment today by calling 603-260-7406. Located at 48 South Main Street in Concord, New Hampshire.",
    keywords: "Concord, NH, New Hampshire, microblading, waxing, professional, eyebrows, brow, the best, top 10 best, eyebrow tattooing, tattoo, beautiful, natural, thicker, fuller brows, studio salon, beauty, services, wax, hair removal, near me, schedule, appointment, quick, easy, body waxing, specialists, best waxing near me, Emily White, downtown Concord, licensed esthetician, consultation, powder brows, blade and shade, full body, Brazilian, bikini, French, leg, arm, facial, eyebrow shaping, lip, chin, full face, tinting, lash, womens waxing, mens waxing, back, shoulders, chest, stomach, waxing for men",
    siteUrl: `https://www.thegoodbrownh.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap'
  ],
}
