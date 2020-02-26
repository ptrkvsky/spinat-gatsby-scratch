import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const SliceServiceDetail = ({ item }) => (
  <div>
    <Link to={`service/${item.link_service.slug}`}>service 1</Link>
  </div>
);

SliceServiceDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceServiceDetail;
