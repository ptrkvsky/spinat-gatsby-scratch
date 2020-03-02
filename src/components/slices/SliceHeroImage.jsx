import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { SectionHeroImage } from '../../styles/slices/HeroImage';
import { ButtonPrimary } from '../../styles/buttons/buttonPrimary';

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
    <Link css={ButtonPrimary} to={slice.primarty.button_link.url}>
      test
    </Link>
  </SectionHeroImage>
);

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
