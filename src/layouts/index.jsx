import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
	<header
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
	</header>
)

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			meta={[
				{ name: 'description', content: 'A weekly overview of toys, games, and kid gizmos.' },
				{ name: 'keywords', content: 'playroom, report' },
				{ name: 'robots', content: 'noindex, nofollow' },
			]}
			title='Playroom Report'
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
		<footer>
			<a
				href='https://www.contentful.com/'
				rel='nofollow noopener noreferrer'
				target='_blank'
			>
				<img
					alt='Powered by Contentful'
					src='https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg' // eslint-disable-line max-len
					style={{
						maxWidth: 100,
						width: '100%',
					}}
				/>
			</a>
		</footer>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
