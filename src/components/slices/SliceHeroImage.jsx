import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import Img from 'gatsby-image';
import TransitionLink from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import {
  SectionHeroImage,
  ButtonContainer,
} from '../../styles/slices/HeroImage';
import { ButtonPrimary } from '../../styles/buttons/buttonPrimary';
import theme from '../../styles/theme';

const SliceHeroImage = ({ slice, transitionStatus }) => {
  const variants = {
    visible: { opacity: 1 },
    notVisible: { opacity: 0 },
  };

  const [phase, setPhase] = useState('');
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.addLabel('startPoint');

    tl.current.to('#illuHeroHome .illu', {
      duration: 0.5,
      x: '10%',
      opacity: 0,
    });
    tl.current.to('.InfosIconsDetailContainer', {
      duration: 0.5,
      Y: '10%',
      opacity: 0,
    });
    tl.current.to(
      '#titleAndButton',
      {
        duration: 0.5,
        x: '-10%',
        opacity: 0,
      },
      '-=0.75'
    );
  }, []);

  const handeClick = () => {
    tl.current.resume();
  };

  return (
    <div style={{ backgroundColor: theme.bg.opposite }}>
      <SectionHeroImage className="max-container overflow-hidden">
        <div id="illuHeroHome">
          <Img
            className="illu"
            fluid={slice.primary.hero_image1.localFile.childImageSharp.fluid}
          />
        </div>

        <div id="titleAndButton">
          <div
            dangerouslySetInnerHTML={{
              __html: slice.primary.title_hero.html,
            }}
          />
          <ButtonContainer>
            <TransitionLink
              css={ButtonPrimary}
              to={`/projet/${slice.primary.button_link.url}`}
              onClick={() => handeClick()}
              exit={{
                delay: 0.5,
                length: 0.5,
              }}
              entry={{
                delay: 0.5,
                length: 0,
              }}
            >
              <span>Contactez l'élite</span>
            </TransitionLink>
          </ButtonContainer>
        </div>
      </SectionHeroImage>
    </div>
  );
};

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export default SliceHeroImage;
