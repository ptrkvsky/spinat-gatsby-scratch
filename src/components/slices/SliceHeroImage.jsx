import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  SectionHeroImage,
  ButtonContainer,
} from '../../styles/slices/HeroImage';
import { ButtonPrimary } from '../../styles/buttons/buttonPrimary';
import theme from '../../styles/theme';

const SliceHeroImage = ({ slice }) => (
  <div style={{ backgroundColor: theme.bg.opposite }}>
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
      <ButtonContainer>
        <Link
          css={ButtonPrimary}
          to={`/projet/${slice.primary.button_link.url}`}
        >
          <span>Contactez l'élite</span>
        </Link>
      </ButtonContainer>
    </SectionHeroImage>
  </div>
);

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
