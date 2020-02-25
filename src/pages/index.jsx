import PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Slices from '../components/Slices'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Slices key={data.id} slices={data.prismicHomepage.data.body} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

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
    prismicProjects {
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
`

export default IndexPage
