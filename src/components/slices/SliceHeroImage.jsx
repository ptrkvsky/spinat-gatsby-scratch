import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import TransitionLink from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';
import {
  SectionHeroImage,
  ButtonContainer,
} from '../../styles/slices/HeroImage';
import { ButtonPrimary } from '../../styles/buttons/buttonPrimary';
import theme from '../../styles/theme';

const SliceHeroImage = ({ slice, transitionStatus }) => {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div style={{ backgroundColor: theme.bg.opposite }}>
      <SectionHeroImage className="max-container overflow-hidden">
        <motion.div
          animate={transitionStatus === 'entered' ? 'open' : 'closed'}
          variants={variants}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
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
            <TransitionLink
              css={ButtonPrimary}
              to={`/projet/${slice.primary.button_link.url}`}
              exit={{
                delay: 0,
                length: 2.5,
              }}
              entry={{
                trigger: ({ exit, node }) => console.log('ok'),
                delay: 0.5,
                length: 0,
              }}
            >
              <span>Contactez l'élite</span>
            </TransitionLink>
          </ButtonContainer>
        </motion.div>
      </SectionHeroImage>
    </div>
  );
};

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export default SliceHeroImage;
