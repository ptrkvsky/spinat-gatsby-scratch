import PropTypes from 'prop-types';
import React from 'react';
import SliceServiceDetail from './SliceServiceDetail';

const SliceServicesContainer = ({ slice }) => (
  <div>
    {slice.items.map(item => (
      <SliceServiceDetail key={item.link_service.slug} item={item} />
    ))}
  </div>
);

SliceServicesContainer.propTypes = {
  slice: PropTypes.object.isRequired,
};

export default SliceServicesContainer;
