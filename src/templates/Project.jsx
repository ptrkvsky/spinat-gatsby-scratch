import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
  const variantsContainer = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  const variantsTitle = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <motion.div
      animate={transitionStatus === 'entered' ? 'open' : 'closed'}
      variants={variantsContainer}
      className="project-page"
    >
      <BackgroundImage
        style={{
          backgroundSize: transitionStatus === 'entered' ? 'cover' : '0%',
        }}
        className="bg-project-detail"
        Tag="div"
        fluid={
          data.prismicProjects.data.main_images.localFile.childImageSharp.fluid
        }
      >
        <SectionHero>
          <div className="max-container overflow-hidden">
            <motion.div
              animate={transitionStatus === 'entered' ? 'open' : 'closed'}
              variants={variantsTitle}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              <PrimaryTitle>
                <h1 className="title">
                  {data.prismicProjects.data.main_title}
                </h1>
              </PrimaryTitle>
              <Breadcrumb />
            </motion.div>
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
    </motion.div>
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
