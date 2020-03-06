/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Transition from '../lib/animations/Transition';

import Header from './Header';
import GlobalStyle from '../styles/Global';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [loading, setLoading] = useState(true);
  const [myLocation, setLocation] = useState(true);
  useEffect(() => {
    // avoid build error on netlify;
    setLocation(location);
    setLoading(false);
  }, []);

  return (
    <>
      <GlobalStyle />

      <div
        className={loading ? 'main-container loading' : 'main-container loaded'}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* <main>
          {loading ? (
            <div>Loading</div>
          ) : (
            <Transition location={myLocation}>{children}</Transition>
          )}
          <footer className="max-container">
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </main> */}
        <main>
          {children}
          <footer className="max-container">
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
