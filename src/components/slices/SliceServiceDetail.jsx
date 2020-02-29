import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faRocket,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { ServiceContainer } from '../../styles/slices/SliceServicesDetail';

const SliceServiceDetail = ({ item }) => {
  let icon;
  switch (item.link_service.document[0].data.icon_class_name) {
    case 'icon-design':
      icon = faChartBar;
      break;
    case 'icon-class':
      icon = faRocket;
      break;
    default:
      return false;
  }
  return (
    <ServiceContainer>
      <FontAwesomeIcon size="3x" icon={icon} />
      <Link to={`service/${item.link_service.slug}`}>service 1</Link>
    </ServiceContainer>
  );
};

SliceServiceDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceServiceDetail;
