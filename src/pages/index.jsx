import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import Slices from '../components/Slices';

const IndexPage = ({ data }) => {
  console.log(data.allPrismicServices);
  return (
    <Layout>
      {console.log({ data })}
      <SEO title="Home" />

      <Slices key={data.id} slices={data.prismicHomepage.data.body} />
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
          ... on PrismicHomepageBodyTitle {
            id
            primary {
              subtitle
              title {
                html
              }
            }
          }
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
              button_text
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
          ... on PrismicHomepageBodyProjectSlider {
            id
            items {
              project_link {
                document {
                  data {
                    categories {
                      category {
                        slug
                      }
                    }
                    main_title
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
            }
          }
          ... on PrismicHomepageBodyServices {
            items {
              link_service {
                slug
                target
                document {
                  data {
                    icon_class_name
                    title {
                      text
                    }
                  }
                }
              }
            }
          }
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
