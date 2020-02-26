import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Service = ({ data }) => (
  <div>
    {console.log(data)}
    <Layout>
      Big service inst it
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
  query ServiceQuery {
    prismicServices(uid: { eq: "product-design" }) {
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
