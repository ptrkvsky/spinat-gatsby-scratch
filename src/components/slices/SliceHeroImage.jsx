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
  <SectionHeroImage className="max-container">
    <Img
      className="illu"
      fluid={slice.primary.hero_image1.localFile.childImageSharp.fluid}
    />
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.title_hero.html,
      }}
    />
<<<<<<< HEAD
    <Link css={ButtonPrimary} to={slice.primarty.button_link.url}>
      test
    </Link>
=======
    <ButtonContainer>
      <Link css={ButtonPrimary} to="/home/">
        test
      </Link>
    </ButtonContainer>
>>>>>>> 1311d1367ec7d1ba025de13a67ec7e5644435621
  </SectionHeroImage>
);

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
