import React from 'react'
import { Link, graphql } from 'gatsby'
// import Image from '../components/image'
import Layout from '../components/layout'

export const query = graphql`
query {
  allSitesYaml{
    edges{
      node{
        name
        url
      }
    }
  }

  allAppsYaml {
    edges {
      node {
        name
        url
      }
    }
  }

}
`

const IndexPage = ({ data:
  { 
    allSitesYaml: { edges: sites },
    allAppsYaml: { edges: apps },
 }
}) => (
    <Layout>
      {/* <pre>{console.log(sites)}</pre> */}
      <div className="p-8">
        <p>{"{"}</p>
        <div className="pl-4">

       
        <p>
          {'"Author" : "Matt Bagni",'}
        </p>
        <p>
          {'"Year" : "2019",'}
        </p>
        <p>
          {'"Location" : "Sydney",'}
        </p>
        <p>
          {'"Visual version" :'} <Link to="/visual">"Visit"</Link>,
      </p>

        <p>"Projects":{"{"}</p>

        {/* block start */}
        <div className="pl-4">
          <p>"Sites":{"["}</p>
          <ul className="list-reset ml-4">
            {sites.map(({ node: s }) =>
              <li className="my-2" key={s.url}>
                <span>{"{"}</span>
                <div className="p-2">
                  "url" : <a target="_blank" rel="noopener noreferrer" href={s.url}>{s.url}</a>, <br />
                  "data" : "{s.name}", <br />
                </div>
                <span>{"},"}</span>
              </li>
            )}
          </ul>
          <p>{"],"}</p>
        </div>
        {/* block end */}

        {/* block start */}
        <div className="pl-4">
          <p>"Apps":{"["}</p>
          <ul className="list-reset ml-4">
          {apps.map(({ node: a }) =>
              <li className="my-2" key={a.url}>
                <span>{"{"}</span>
                <div className="p-2">
                  "url" : <a target="_blank" rel="noopener noreferrer" href={a.url}>{a.url}</a>, <br />
                  "data" : "{a.name}", <br />
                </div>
                <span>{"},"}</span>
              </li>
            )}
          </ul>
          <p>{"]"}</p>
        </div>
        {/* block end */}

        <p>{"},"}</p>


        </div>
        <p>{"}"}</p>
      </div>
      <h1 className="mb-4">Hi people</h1>
      <p className="leading-loose">Welcome to your new Gatsby site.</p>
      <p className="leading-loose">Now go build something great.</p>

      <Link to="/page-2/" className="link">
        Go to page 2
    </Link>
    </Layout>
  )

export default IndexPage

