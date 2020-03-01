import PropTypes from 'prop-types';
import React from 'react';
import SliceServiceDetail from './SliceServiceDetail';
import {
  ServicesContainer,
  ServicesBackground,
} from '../../styles/slices/SliceServicesContainer.js';

const SliceServicesContainer = ({ slice }) => (
  <ServicesBackground>
    <ServicesContainer className="max-container">
      {slice.items.map(item => (
        <SliceServiceDetail key={item.link_service.slug} item={item} />
      ))}
    </ServicesContainer>
  </ServicesBackground>
);

SliceServicesContainer.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceServicesContainer;
