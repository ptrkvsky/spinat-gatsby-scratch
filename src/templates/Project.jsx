import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';
import { SectionHero, Grid, Main, Aside } from '../styles/pages/project';
import { PrimaryTitle } from '../styles/titles/primaryTitle';

const Project = ({ data, transitionStatus, entry, exit }) => {
  const categoriesList = data.prismicProjects.data.categories.map(item => (
    <p>{item.category.document[0].data.name}</p>
  ));
  return (
    <div className="project-page">
      {console.log(exit, entry)}
      <BackgroundImage
        style={{
          backgroundSize: 'cover',
        }}
        className="bg-project-detail"
        Tag="div"
        fluid={
          data.prismicProjects.data.main_images.localFile.childImageSharp.fluid
        }
      >
        <SectionHero>
          <div className="max-container">
            <PrimaryTitle>
              <motion.div
                animate={{ opacity: transitionStatus === 'entered' ? 1 : 0 }}
              >
                <h1 className="title">
                  {data.prismicProjects.data.main_title}
                </h1>
              </motion.div>
            </PrimaryTitle>
            <Breadcrumb />
          </div>
        </SectionHero>
      </BackgroundImage>
      <Grid className="max-container">
        <Main>
          <p>{data.prismicProjects.data.client}</p>
          <div
            className="long_description"
            dangerouslySetInnerHTML={{
              __html: data.prismicProjects.data.long_description.html,
            }}
          />
        </Main>
        <Aside>
          <p>{data.prismicProjects.data.date}</p>
          {categoriesList}
        </Aside>
      </Grid>
    </div>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
  entry: PropTypes.object.isRequired,
  exit: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export default Project;

export const pageQuery = graphql`
  query projectQuery($uid: String!) {
    prismicProjects(uid: { eq: $uid }) {
      data {
        main_title
        client
        date
        website {
          url
        }
        long_description {
          html
        }
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
