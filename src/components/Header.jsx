import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { HeaderContainer } from '../styles/layout/header/header';
import { MainNav } from '../styles/layout/header/mainNav';

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <MainNav>
      <ul>
        <li>
          <a href="./index.html">test</a>
        </li>
        <li>
          <a href="./index.html">test</a>
        </li>
        <li>
          <a href="./index.html">test</a>
        </li>
        <li>
          <a href="./index.html">test</a>
        </li>
        <li>
          <a href="./index.html">test</a>
        </li>
      </ul>
    </MainNav>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
