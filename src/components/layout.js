import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Image from './image'
import { StaticQuery, graphql } from 'gatsby'

import '../sass/layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="container mx-auto py-8">{children}</div>

        <footer>
          <a className="text-center" href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">
            <div className="p-2">
              Powered By
              <div className="my-4 mx-auto" style={{ maxWidth: '120px', borderRadius: 500, overflow: 'hidden' }}>
                <Image />
              </div>
            </div>
          </a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
