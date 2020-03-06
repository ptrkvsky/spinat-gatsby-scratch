import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';
import { SectionHero } from '../styles/hero/sectionHero';
import { Grid, Main, AsideContainer } from '../styles/pages/project/project';
import { PrimaryTitle } from '../styles/titles/primaryTitle';
import Aside from '../components/projects/Aside';

const Project = ({ data, transitionStatus, entry, exit }) => {
  const variantsTitle = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div className="project-page">
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
              animate={
                transitionStatus === 'entered' ||
                transitionStatus === 'entering'
                  ? 'open'
                  : 'closed'
              }
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
          <h2 className="title">Summary.</h2>
          <div
            className="long_description"
            dangerouslySetInnerHTML={{
              __html: data.prismicProjects.data.long_description.html,
            }}
          />
        </Main>
        <AsideContainer>
          <Aside
            date={data.prismicProjects.data.date}
            categories={data.prismicProjects.data.categories}
            client={data.prismicProjects.data.client}
          />
        </AsideContainer>
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
        date(formatString: "DD MMMM YYYY", locale: "en-EN")
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
