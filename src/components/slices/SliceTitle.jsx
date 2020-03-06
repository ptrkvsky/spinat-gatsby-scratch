import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import { SubTitle } from '../../styles/slices/SliceTitle';
import { PrimaryTitle } from '../../styles/titles/primaryTitle';

const SliceTitle = ({ slice, transitionStatus }) => {
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
      }}
    >
      <div className={slice.slice_label}>
        <PrimaryTitle primary className="max-container">
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: slice.primary.title.html }}
          />
          <SubTitle>{slice.primary.subtitle}</SubTitle>
        </PrimaryTitle>
      </div>
    </motion.div>
  );
};

SliceTitle.propTypes = {
  slice: PropTypes.object.isRequired,
  transitionStatus: PropTypes.string.isRequired,
};

export default SliceTitle;
