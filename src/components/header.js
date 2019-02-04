import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './logo'


const Header = ({ siteTitle }) => (
  <div className="bg-blackest text-white py-4 sticky pin-t">
    <div className="container mx-auto flex justify-between">
      <h1>
        <Link to="/" className="no-underline">
          /MattBag/2019/portfolio
        </Link>
      </h1>
      <div style={{width:80, flexShrink: 1, marginBottom: -100, marginTop:-2}}>
       <Link to="/" className="no-underline">
        <Logo />
       </Link>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
