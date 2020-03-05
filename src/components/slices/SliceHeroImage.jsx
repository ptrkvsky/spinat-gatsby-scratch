import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import TransitionLink from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';
import {
  SectionHeroImage,
  ButtonContainer,
} from '../../styles/slices/HeroImage';
import { ButtonPrimary } from '../../styles/buttons/buttonPrimary';
import theme from '../../styles/theme';

const SliceHeroImage = ({ slice, isVisible, setVisible }) => (
  <div style={{ backgroundColor: theme.bg.opposite }}>
    <SectionHeroImage className="max-container">
      <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
        <Img
          className="illu"
          fluid={slice.primary.hero_image1.localFile.childImageSharp.fluid}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: slice.primary.title_hero.html,
          }}
        />
        {console.log(TransitionLink)}
        <TransitionLink
          to={`/projet/${slice.primary.button_link.url}`}
          exit={{
            trigger: ({ exit, node }) => setVisible(false),
            delay: 1.5,
            length: 1.5,
            state: {
              thisIs: 'exit passed to the exiting page',
            },
          }}
          entry={{
            trigger: ({ exit, node }) => console.log('ok'),
            delay: 0.5,
            length: 1.5,
            state: {
              thisIs: 'entry passed to the exiting page',
            },
          }}
        >
          Go to page 2
        </TransitionLink>

        <ButtonContainer>
          <Link
            css={ButtonPrimary}
            to={`/projet/${slice.primary.button_link.url}`}
          >
            <span>Contactez l'élite</span>
          </Link>
        </ButtonContainer>
      </motion.div>
    </SectionHeroImage>
  </div>
);

SliceHeroImage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
