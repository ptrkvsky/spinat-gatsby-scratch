import PropTypes from 'prop-types';
import React from 'react';
import SliceInfosIconsDetail from './SliceInfosIconsDetail';
import { InfosIconsContainer } from '../../styles/slices/SliceInfosIconsContainer';

const SliceInfosIconsContainer = ({ slice }) => (
  <InfosIconsContainer className="max-container">
    {slice.items.map(item => (
      <SliceInfosIconsDetail item={item} />
    ))}
  </InfosIconsContainer>
);

SliceInfosIconsContainer.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceInfosIconsContainer;
