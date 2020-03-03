import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Breadcrumb from '../components/Breadcrumb';
import { SectionHero } from '../styles/pages/project';
import { PrimaryTitle } from '../styles/titles/primaryTitle';

const Project = ({ data }) => (
  <div className="project-page">
    <SectionHero>
      <div className="max-container">
        <PrimaryTitle>
          <h1 className="title">{data.prismicProjects.data.main_title}</h1>
        </PrimaryTitle>
        <Breadcrumb />
      </div>
    </SectionHero>
  </div>
);

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const pageQuery = graphql`
  query projectQuery($uid: String!) {
    prismicProjects(uid: { eq: $uid }) {
      data {
        main_title
        client
        categories {
          category {
            slug
            document {
              data {
                name
              }
            }
          }
        }
        main_images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
