import React from 'react'
import {  graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import Phone from './../components/phone'

import styles from '../styles/master.module.css'
import appSstyles from '../styles/apps.module.css'

const VisualPage = ({ data }) => (
  <Layout>
    <div className="my-8" id="sites"></div>
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

<div className="my-8 py-8" id="apps"></div>


    <div className={appSstyles.rx}>
      {data.allAppsYaml &&
        data.allAppsYaml.edges.map(({ node }, i) => (
          <React.Fragment key={`app_${i}`}>
            <div className={`${appSstyles.app} ${styles.show__dk}`}>
              <Phone url={node.url} />
            </div>
            {i === 0 && (
              <div className={appSstyles.empty}>
                <h2 style={{ fontSize: `calc(2rem + 4vw)` }}>Apps</h2>
              </div>
            )}
            <div
              className={appSstyles.apptext}
              style={{
                textAlign: i % 2 === 0 ? '' : 'right',
              }}
            >
              <h2 className="mt-0" style={{ fontSize: `var(--h-size)` }}>{node.name}</h2>
              <p className="my-8">{node.copy}</p>
              <a
                href={node.url}
                target="_blank"
                
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  borderLeft: `2px dotted var(--blue)`,
                  padding: `.5rem`,
                  textDecoration: 'none',
                }}
              >
                open in browser
              </a>
            </div>
          </React.Fragment>
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
    allAppsYaml {
      edges {
        node {
          url
          name
          copy
        }
      }
    }
  }
  `
