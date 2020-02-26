import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby';
import Img from 'gatsby-image';
import { SectionHeroImage } from '../../styles/slices/HeroImage';

const SliceHeroImage = ({ slice }) => (
  <SectionHeroImage>
    <Img
      className="illu"
      fluid={slice.primary.hero_image1.localFile.childImageSharp.fluid}
    />
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.title_hero.html,
      }}
    />
    buton url : {slice.primary.button_link.url}
    button link: {slice.primary.button_text}
  </SectionHeroImage>
);

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
