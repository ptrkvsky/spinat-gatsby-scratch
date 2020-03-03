import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartBar } from '@fortawesome/free-solid-svg-icons';
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
    <Link to={`service/${item.link_service.slug}`}>
      <ServiceContainer>
        <FontAwesomeIcon className="icon" size="3x" icon={icon} />
        <span className="link-item">
          {item.link_service.document[0].data.title.text}
        </span>
      </ServiceContainer>
    </Link>
  );
};

SliceServiceDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceServiceDetail;
