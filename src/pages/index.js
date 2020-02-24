import React from 'react'
import { Link, graphql } from 'gatsby'

import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <BackgroundImage
      Tag="section"
      fluid={
        data.prismicHomepage.data.body[0].primary.hero_image1.localFile
          .childImageSharp.fluid
      }
      backgroundColor="#040e18"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicHomepage.data.body[0].primary.title_hero.html,
        }}
      />
      <p>{data.prismicHomepage.data.body[0].primary.button_text}</p>
      <p>{data.prismicHomepage.data.body[0].primary.button_link.slug}</p>
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        body {
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
      }
    }
  }
`

export default IndexPage
