import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import SliceInfosIconsDetail from './SliceInfosIconsDetail';
import {
  InfosIconsContainer,
  InfosIconsBg,
} from '../../styles/slices/SliceInfosIconsContainer';

const SliceInfosIconsContainer = ({ slice, isVisible, setVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
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
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  slice: PropTypes.object.isRequired,
};

export default SliceInfosIconsContainer;
