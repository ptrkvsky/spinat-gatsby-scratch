import PropTypes from 'prop-types';
import React from 'react';
import {
  SliceTitleContainer,
  Title,
  SubTitle,
} from '../../styles/slices/SliceTitle';

const SliceTitle = ({ slice }) => (
  <div className={slice.slice_label}>
    <Title className="max-container">
      <div
        className="title"
        dangerouslySetInnerHTML={{ __html: slice.primary.title.html }}
      />
      <SubTitle>{slice.primary.subtitle}</SubTitle>
    </Title>
  </div>
);

SliceTitle.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceTitle;
