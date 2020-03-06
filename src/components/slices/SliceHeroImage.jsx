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

const SliceHeroImage = ({ slice, isVisible, setVisible, transitionStatus }) => {
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
          <TransitionLink
            to={`/projet/${slice.primary.button_link.url}`}
            exit={{
              trigger: ({ exit, node }) => setVisible(false),
              delay: 0,
              length: 2.5,
            }}
            entry={{
              trigger: ({ exit, node }) => console.log('ok'),
              appearAfter: 0.75,
              delay: 0,
              length: 0.5,
            }}
            trigger={async pages => {
              // wait until we have access to both pages
              const exit = await pages.exit;
              const entry = await pages.entry;
              // here we can access both pages

              // You could measure the entry element here

              // start exit animation based on measurements if you want
              // wait for the entering page to become visible
              await entry.visible;
              console.log({ entry });
              // the entering page is visible here.
              // if you want you can animate it now!
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
};

SliceHeroImage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  slice: PropTypes.object.isRequired,
};

export default SliceHeroImage;
