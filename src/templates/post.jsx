import React, { Component } from 'react'
import { object } from 'prop-types'

class PostTemplate extends Component {
	render() {
		const post = this.props.data.contentfulPost
		const {
			title: { title },
		} = post
		return (
			<main>
				<h4>{title}</h4>
			</main>
		)
	}
}

PostTemplate.propTypes = {
	data: object,
}

export default PostTemplate

export const pageQuery = graphql`
	query postQuery($id: String!) {
		contentfulPost(id: { eq: $id }) {
			title {
				title
			}
		}
	}
`
