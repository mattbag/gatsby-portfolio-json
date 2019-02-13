import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Image from './image'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './nav'
import Socials from './socials'

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
        <Nav />
        <div className="container mx-auto py-8" style={{maxWidth:'90%'}}>{children}</div>

        <footer className="mt-10">
          <Socials />

          <div className="p-4 text-center">
            <a className="inline-block" href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">
              {`> Powered By <`}
              <div className="my-4 mx-auto float" style={{ maxWidth: '100px', borderRadius: 500, overflow: 'hidden' }}>
                <Image />
              </div>
            </a>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
