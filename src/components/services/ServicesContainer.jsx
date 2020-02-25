import PropTypes from 'prop-types';
import React from 'react';
import Service from './Service';

const ServicesContainers = ({ services }) =>
  services.map(service => <Service service={service} />);

ServicesContainers.propTypes = {
  services: PropTypes.array.isRequired,
};

export default ServicesContainers;
