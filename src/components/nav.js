import React from 'react'
import {Link} from 'gatsby'

const vertical = {
  writingMode: 'vertical-rl'
}
const Nav = () => (
  <div className="py-6 fixed pin-r pin-t-10">

      <ul style={vertical} className="list-reset flex">
        <li className="m-2 md:m-4"><Link to="/">/json</Link></li>
        <li className="m-2 md:m-4"><a href="#sites">/sites</a></li>
        <li className="m-2 md:m-4"><a href="#apps">/apps</a></li>
        {/* <li className="m-2 md:m-4"><a href="#about">/about</a></li> */}
        <li className="m-2 md:m-4"><a href="#channels">/channels</a></li>
        <li className="m-2 md:m-4"><Link to="/visual">/visual</Link></li>
      </ul>

  </div>
)

export default Nav
