import React from 'react'

const vertical = {
  writingMode: 'vertical-rl'
}
const Nav = () => (
  <div className="py-4 fixed pin-r pin-t">

      <ul style={vertical} className="list-reset flex">
        <li className="m-4"><a href="#about">about</a></li>
        <li className="m-4"><a href="#sites">sites</a></li>
        <li className="m-4"><a href="#apps">apps</a></li>
      </ul>

  </div>
)

export default Nav
