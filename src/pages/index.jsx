import PropTypes from 'prop-types';
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Slices from '../components/Slices';
import ServicesContainers from '../components/services/ServicesContainer';

const IndexPage = ({ data }) => {
  console.log(data.allPrismicServices);
  return (
    <Layout>
      {console.log(data)}
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Slices key={data.id} slices={data.prismicHomepage.data.body} />
      <ServicesContainers services={data.allPrismicServices.nodes} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageBodyHeroImage {
            primary {
              title_hero {
                html
                text
              }
              button_link {
                url
                target
              }
              hero_image1 {
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
          ... on PrismicHomepageBodyBlocIcon {
            id
            items {
              bloc_title {
                html
              }
              short_description {
                html
              }
              icon_class
            }
          }
        }
      }
    }
    allPrismicServices {
      nodes {
        data {
          title {
            html
          }
          page_content {
            html
          }
          icon_class_name
        }
      }
    }
    prismicProjects {
      data {
        body {
          primary {
            label {
              html
            }
          }
        }
        categories {
          category {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
