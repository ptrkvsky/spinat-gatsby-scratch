import PropTypes from 'prop-types';
import React from 'react';

const Service = ({ service }) => (
  <div>service {service.data.icon_class_name}</div>
);

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
