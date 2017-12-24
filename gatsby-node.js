/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators

	return new Promise((resolve, reject) => {
		graphql(`
			{
				allContentfulPost(limit: 1000) {
					edges {
						node {
							id
							slug
						}
					}
				}
			}
		`)
			.then((result) => {
				if (result.errors) {
					reject(result.errors)
				}

				// Create Post pages
				const postTemplate = path.resolve(`./src/templates/post.jsx`)
				_.each(result.data.allContentfulPost.edges, (edge) => {
					createPage({
						path: `/${edge.node.slug}/`,
						component: slash(postTemplate),
						context: {
							id: edge.node.id,
						},
					})
				})
				resolve()
			})
	})
}
