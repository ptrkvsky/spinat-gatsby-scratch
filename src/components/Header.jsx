import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { HeaderContainer, HeaderBg } from '../styles/layout/header/header';
import { MainNav } from '../styles/layout/header/mainNav';

const Header = ({ siteTitle }) => (
  <HeaderBg>
    <HeaderContainer>
      <TransitionLink
        to="/"
        exit={{
          delay: 0,
          length: 0.5,
        }}
        entry={{
          delay: 0.5,
          length: 0,
        }}
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </TransitionLink>
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
