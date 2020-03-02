import React from 'react';
import img from '../../fixtures/fireshot.png';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <img src={img} alt="test" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;
