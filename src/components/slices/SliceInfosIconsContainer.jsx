import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import SliceInfosIconsDetail from './SliceInfosIconsDetail';
import {
  InfosIconsContainer,
  InfosIconsBg,
} from '../../styles/slices/SliceInfosIconsContainer';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const SliceInfosIconsContainer = ({ slice, transitionStatus }) => (
  <motion.div
    animate={transitionStatus === 'entered' ? 'open' : 'closed'}
    variants={variants}
    transition={{
      duration: 0.5,
      ease: 'easeInOut',
    }}
  >
    <InfosIconsBg>
      <InfosIconsContainer className="max-container">
        {slice.items.map(item => (
          <SliceInfosIconsDetail key={item.icon} item={item} />
        ))}
      </InfosIconsContainer>
    </InfosIconsBg>
  </motion.div>
);

SliceInfosIconsContainer.propTypes = {
  slice: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export default SliceInfosIconsContainer;
