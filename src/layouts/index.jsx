import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
	<div
		style={{
			background: 'rebeccapurple',
			marginBottom: '1.45rem',
		}}
	>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
					to='/'
				>
					Playroom Report
				</Link>
			</h1>
		</div>
	</div>
)

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			meta={[
				{ name: 'description', content: 'A weekly overview of toys, games, and kid gizmos.' },
				{ name: 'keywords', content: 'playroom, report' },
				{ name: 'robots', content: 'noindex, nofollow' },
			]}
			title='🎈 Playroom Report'
		/>
		<Header />
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
		>
			{children()}
		</div>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
