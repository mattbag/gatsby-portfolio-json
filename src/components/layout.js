import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Nav from "./nav";
import Socials from "./socials";
import Image from "./image";

function Layout({ children }) {
  return (
    <>
      <div className="bg py-1"></div>
      <Header />

      <Nav />
      <main
        className="container mx-auto py-8 pr-6 md:pr-0"
        style={{ maxWidth: "90%" }}
      >
        {children}
      </main>

      <footer className="mt-10">
        <Socials />

        <div className="p-4 text-center">
          <a
            className="inline-block"
            href="https://www.gatsbyjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {`> Powered By <`}
            <div
              className="my-4 mx-auto float"
              style={{
                maxWidth: "100px",
                borderRadius: 500,
                overflow: "hidden",
              }}
            >
              {/* <Image /> */}
            </div>
          </a>
        </div>
        <div className="bg py-1"></div>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
