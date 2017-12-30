import React, { Component } from 'react'
import { object } from 'prop-types'

class PostTemplate extends Component {
	render() {
		const post = this.props.data.contentfulPost
		const {
			author,
			body,
			title: { title },
		} = post

		// remove any duplicate author obects by filtering only on existence - cool technique from here:
		// https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript#36744732
		const authors = author.filter((person, i, self) => i === self.findIndex(t => (t.id === person.id)))

		return (
			<main>
				<h4>{title}</h4>
				<h6>by {authors.map((person, i) => `${i !== 0 ? ', ': ''}${person.name}`)}</h6>
				<div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
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
			author {
				id
				name
				profilePhoto {
					title
					file {
						url
					}
				}
			}
			body {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`
