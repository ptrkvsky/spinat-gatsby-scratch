import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { SectionHeroImage } from '../../styles/slices/HeroImage';

const SliceHeroImage = ({ slice }) => (
  <SectionHeroImage>
    <Img
      className="illu"
      fluid={slice.primary.hero_image1.localFile.childImageSharp.fluid}
    />

    <p>{slice.primary.button_text}</p>
    <p>{slice.primary.button_link.slug}</p>
    <h2>gatsby-background-image</h2>
  </SectionHeroImage>
);

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
