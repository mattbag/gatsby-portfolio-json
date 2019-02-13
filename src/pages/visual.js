import React from 'react'
import {  graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styles from '../styles/master.module.css'
// import appSstyles from '../styles/apps.module.css'

const VisualPage = ({ data }) => (
  <Layout>
    
    <div className={styles.grid}>

      {data.allSitesYaml &&
        data.allSitesYaml.edges.map(({ node: { childScreenshot, name, url } }, index) => (
          <div className={styles.site} key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div className={styles.pic}>
                {childScreenshot &&
                  <Img
                    fluid={childScreenshot.screenshotFile.childImageSharp.fluid}
                    alt={name}
                    className={styles.shadow}
                  />
                }
              </div>
              <div className={styles.label}>
                <div className={styles.label__in}>{name}</div>
              </div>
            </a>
          </div>
        ))}
    </div>

    <div style={{maxWidth:"300px", bottom:10,left:10}} className={styles.blocker + " fixed p-4 bg-blue-light"}>
    You might want an updated browser to see this correctly!
    </div>

  </Layout>
)

export default VisualPage

export const query = graphql`
  query SitesQuery {
    allSitesYaml {
      edges {
        node {
          url
          name
          childScreenshot {
            screenshotFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  `
