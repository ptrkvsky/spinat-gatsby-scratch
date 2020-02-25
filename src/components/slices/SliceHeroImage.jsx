import PropTypes from 'prop-types'
import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const SliceHeroImage = ({ slice }) => (
  <BackgroundImage
    Tag="section"
    fluid={slice.primary.hero_image1.localFile.childImageSharp.fluid}
    backgroundColor="#040e18"
  >
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.title_hero.html,
      }}
    />
    <p>{slice.primary.button_text}</p>
    <p>{slice.primary.button_link.slug}</p>
    <h2>gatsby-background-image</h2>
  </BackgroundImage>
)

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
}

export default SliceHeroImage
