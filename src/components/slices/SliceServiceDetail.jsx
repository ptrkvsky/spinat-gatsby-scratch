import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const SliceServiceDetail = ({ item }) => (
  <div>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    Favorite beverage: <FontAwesomeIcon icon={faCoffee} />
    <Link to={`service/${item.link_service.slug}`}>service 1</Link>
  </div>
);

SliceServiceDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceServiceDetail;
