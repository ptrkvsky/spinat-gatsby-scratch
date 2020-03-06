import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import SEO from '../components/seo';
import { SectionHero } from '../styles/hero/sectionHero';
import { PrimaryTitle } from '../styles/titles/primaryTitle';
import { Grid } from '../styles/pages/project/listingProject';
import Breadcrumb from '../components/Breadcrumb';

const Projets = ({ data, transitionStatus }) => (
  <>
    <SEO title="Projets - Spinat Agence Web" />
    <SectionHero>
      <div className="max-container">
        <PrimaryTitle>
          <h1 className="title">Projets</h1>
        </PrimaryTitle>
        <Breadcrumb />
      </div>
    </SectionHero>
    <Grid className="max-container">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda cum
      esse repellat sed. Mollitia error iure quod unde asperiores, aspernatur
      recusandae neque minima veritatis quisquam deleniti et libero, pariatur
      perferendis.
      <div className="className">test</div>
      <div className="className">test</div>
      <div className="className">test</div>
    </Grid>
    {console.log(data)}
  </>
);

Projets.propTypes = {
  data: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export const pageQuery = graphql`
  query ProjetsQuery {
    allPrismicProjects {
      edges {
        node {
          data {
            date(formatString: "DD MMMM YYYY", locale: "fr-FR")
            main_title
          }
        }
      }
    }
  }
`;

export default Projets;
