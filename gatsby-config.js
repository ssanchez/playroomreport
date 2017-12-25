module.exports = {
	siteMetadata: {
		title: `Playroom Report`,
		siteUrl: `https://www.playroomreport.com`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
		},
	],
}
