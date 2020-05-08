import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from "./logo";

const Header = ({ siteTitle }) => (
  <header className="bg-blackest p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-base md:text-xl">
        <Link to="/" className="no-underline text-blue-light">
          /MattBagni/2020/portfolio
        </Link>
      </h1>
      <div
        style={{ width: 80, flexShrink: 1, marginBottom: -100, marginTop: -2 }}
      >
        <Link to="/" className="float no-underline">
          <Logo />
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
