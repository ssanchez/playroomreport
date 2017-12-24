import React, { Component } from 'react'
import { object } from 'prop-types'
import Link from 'gatsby-link'

class IndexPage extends Component {
	render() {
		const { edges: posts } = this.props.data.allContentfulPost
		return (
			<main>
				{posts.map(({ node: post }) => (
					<div key={post.id}>
						<Link to={`${post.slug}/`}>
							{post.title.title}
						</Link>
					</div>
				))}
			</main>
		)
	}
}

IndexPage.propTypes = {
	data: object,
}

export default IndexPage

export const pageQuery = graphql`
	query PageQuery {
		allContentfulPost {
			edges {
				node {
					id
					title {
						title
					}
					slug
				}
			}
		}
	}
`
