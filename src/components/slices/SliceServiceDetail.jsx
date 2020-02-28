import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SliceServiceDetail = ({ item }) => (
  <div>
    Favorite beverage: <FontAwesomeIcon icon={faCoffee} />
    <Link to={`service/${item.link_service.slug}`}>service 1</Link>
  </div>
);

SliceServiceDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceServiceDetail;
