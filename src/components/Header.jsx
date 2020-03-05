import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { HeaderContainer, HeaderBg } from '../styles/layout/header/header';
import { MainNav } from '../styles/layout/header/mainNav';

const Header = ({ siteTitle }) => (
  <HeaderBg>
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
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <Link to="/projets/">Projets</Link>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Client</a>
          </li>
        </ul>
      </MainNav>
    </HeaderContainer>
  </HeaderBg>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
