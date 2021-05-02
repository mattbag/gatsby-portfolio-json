import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query {
    allSitesYaml {
      edges {
        node {
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
`;

function IndexPage({
  data: {
    allSitesYaml: { edges: sites },
    allAppsYaml: { edges: apps },
  },
}) {
  // console.log("====");
  // console.log(sites);
  // console.log("====");

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="p-2 md:p-8 overflow-auto">
        <p>{"{"}</p>
        <div className="pl-4" style={{ whiteSpace: "nowrap" }}>
          <p>{'"Author" : "Matt Bagni",'}</p>
          <p>{'"Version" : "2020",'}</p>
          <p>
            {'"Location" : '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//atlasagency.com.au"
            >
              "Sydney"
            </a>
          </p>
          <p>{'"hobbies" : ["Board Games", "mtg", "Stock Market", "Cryptocurrency", "dogs"],'}</p>
          <p>
            {'"Visual version" :'} <Link to="/visual">"/visual"</Link>,
          </p>

          <p>"Projects":{"{"}</p>

          {/* block start */}
          <div className="pl-4" id="sites">
            <p>"Sites":{"["}</p>
            <ul className="list-reset ml-4">
              {sites.map(({ node: s }) => (
                <li className="my-2" key={s.url}>
                  <span>{"{"}</span>
                  <div className="p-2">
                    "url" :{" "}
                    <a target="_blank" rel="noopener noreferrer" href={s.url}>
                      {s.url.replace("http://", "").replace("https://", "")}
                    </a>
                    , <br />
                    "data" : "{s.name}", <br />
                  </div>
                  <span>{"},"}</span>
                </li>
              ))}
            </ul>
            <p>{"],"}</p>
          </div>
          {/* block end */}

          {/* block start */}
          <div className="pl-4" id="apps">
            <p>"Apps":{"["}</p>
            <ul className="list-reset ml-4">
              {apps.map(({ node: a }) => (
                <li className="my-2" key={a.url}>
                  <span>{"{"}</span>
                  <div className="p-2">
                    "url" :{" "}
                    <a target="_blank" rel="noopener noreferrer" href={a.url}>
                      {a.url.replace("https://", "")}
                    </a>
                    , <br />
                    "data" : "{a.name}", <br />
                  </div>
                  <span>{"},"}</span>
                </li>
              ))}
            </ul>
            <p>{"]"}</p>
          </div>
          {/* block end */}

          <p>{"},"}</p>
        </div>
        <p>{"}"}</p>
      </div>
    </Layout>
  );
}

IndexPage.propTypes = {
  // children: PropTypes.node.isRequired,
};

export default IndexPage;
