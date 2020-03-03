import PropTypes from 'prop-types';
import React from 'react';
import { SubTitle } from '../../styles/slices/SliceTitle';
import { PrimaryTitle } from '../../styles/titles/primaryTitle';

const SliceTitle = ({ slice }) => (
  <div className={slice.slice_label}>
    <PrimaryTitle primary className="max-container">
      <div
        className="title"
        dangerouslySetInnerHTML={{ __html: slice.primary.title.html }}
      />
      <SubTitle>{slice.primary.subtitle}</SubTitle>
    </PrimaryTitle>
  </div>
);

SliceTitle.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceTitle;
