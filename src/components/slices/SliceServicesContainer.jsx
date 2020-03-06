import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import SliceServiceDetail from './SliceServiceDetail';
import { ServicesContainer } from '../../styles/slices/SliceServicesContainer.js';

const SliceServicesContainer = ({ slice, transitionStatus }) => {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  return (
    <motion.div
      animate={transitionStatus === 'entered' ? 'open' : 'closed'}
      variants={variants}
      transition={{
        duration: 0,
        ease: 'easeInOut',
      }}
    >
      <ServicesContainer className="max-container">
        {slice.items.map(item => (
          <SliceServiceDetail key={item.link_service.slug} item={item} />
        ))}
      </ServicesContainer>
    </motion.div>
  );
};

SliceServicesContainer.propTypes = {
  slice: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export default SliceServicesContainer;
