import PropTypes from 'prop-types';
import React from 'react';
import SliceInfosIconsDetail from './SliceInfosIconsDetail';
import {
  InfosIconsContainer,
  InfosIconsBg,
} from '../../styles/slices/SliceInfosIconsContainer';

const SliceInfosIconsContainer = ({ slice }) => (
  <InfosIconsBg>
    <InfosIconsContainer className="max-container">
      {slice.items.map(item => (
        <SliceInfosIconsDetail key={item.icon} item={item} />
      ))}
    </InfosIconsContainer>
  </InfosIconsBg>
);

SliceInfosIconsContainer.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceInfosIconsContainer;
