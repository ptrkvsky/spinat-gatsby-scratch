import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Project = ({ data }) => <div>{console.log(data)} Project</div>;

export default Project;

export const pageQuery = graphql`
  query projectQuery($uid: String!) {
    prismicProjects(uid: { eq: $uid }) {
      id
      data {
        body {
          primary {
            label {
              html
            }
          }
        }
      }
    }
  }
`;
