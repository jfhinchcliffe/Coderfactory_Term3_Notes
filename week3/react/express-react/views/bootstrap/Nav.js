import React, { PropTypes } from 'react'

export default function Nav({ children }){
  return (
    <ul className="nav nav-tabs">
      { children }
    </ul>
  )
}

function NavItem({ url= '#', active = false, children, onClick }) {
  return (
    <li role="presentation" className={ active ? "active" : null } >
      <a href={ url } onClick={ onClick }>{ children }</a>
    </li>
  )
}

NavItem.propTypes = {
  url: PropTypes.string, 
  active: PropTypes.bool,
  onClick: PropTypes.func
}
 Nav.Item = NavItem;

// <Nav>
//   <Nav.Item active_url="https://www.google.com">Google</Nav.Item>
//   <Nav.Item active_url="https://www.facebook.com">Facebook</Nav.Item>
// </Nav>
