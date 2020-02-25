import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { HeaderContainer } from '../styles/layout/blocks/header'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div className="max-container">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
