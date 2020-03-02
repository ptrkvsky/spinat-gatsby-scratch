import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Service = ({ data }) => (
  <div>
    <Layout>
      <h2>Services</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicServices.data.title.html,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicServices.data.page_content.html,
        }}
      />
    </Layout>
  </div>
);
Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Service;

export const pageQuery = graphql`
  query ServiceQuery($uid: String!) {
    prismicServices(uid: { eq: $uid }) {
      uid
      data {
        title {
          html
        }
        page_content {
          html
        }
      }
    }
  }
`;
