import React from 'react'
import { Link, graphql } from 'gatsby'
// import Image from '../components/image'
import Layout from '../components/layout'
// import Nav from '../components/nav'

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
      {/* <Nav/> */}
      {/* <pre>{console.log(sites)}</pre> */}
      <div className="p-8">
        <p>{"{"}</p>
        <div className="pl-4">

        <p>
          {'"Author" : "Matt Bagni",'}
        </p>
        <p>
          {'"Version" : "2019",'}
        </p>
        <p>
          {'"Location" : "Sydney",'}
        </p>
        <p>
          {'"Visual version" :'} <Link to="/visual">"Visit"</Link>,
      </p>

        <p>"Projects":{"{"}</p>

        {/* block start */}
        <div className="pl-4" id="sites">
          <p>"Sites":{"["}</p>
          <ul className="list-reset ml-4">
            {sites.map(({ node: s }) =>
              <li className="my-2" key={s.url}>
                <span>{"{"}</span>
                <div className="p-2">
                  "url" : <a target="_blank" rel="noopener noreferrer" href={s.url}>{s.url.replace('http://','').replace('https://','')}</a>, <br />
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
        <div className="pl-4" id="apps">
          <p>"Apps":{"["}</p>
          <ul className="list-reset ml-4">
          {apps.map(({ node: a }) =>
              <li className="my-2" key={a.url}>
                <span>{"{"}</span>
                <div className="p-2">
                  "url" : <a target="_blank" rel="noopener noreferrer" href={a.url}>{a.url.replace('https://','')}</a>, <br />
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

    </Layout>
  )

export default IndexPage

