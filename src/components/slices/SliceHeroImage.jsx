import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  SectionHeroImage,
  ButtonContainer,
} from '../../styles/slices/HeroImage';
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
    <ButtonContainer>
      <Link css={ButtonPrimary} to="/home/">
        test
      </Link>
    </ButtonContainer>
  </SectionHeroImage>
);

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
