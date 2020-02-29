import PropTypes from 'prop-types';
import React from 'react';

import SliceHeroImage from './slices/SliceHeroImage';
import SliceInfosIconsContainer from './slices/SliceInfosIconsContainer';
import SliceServicesContainer from './slices/SliceServicesContainer';

const Slices = ({ slices }) =>
  slices.map(slice => {
    switch (slice.__typename) {
      case 'PrismicHomepageBodyHeroImage':
        return <SliceHeroImage key={slice.id} slice={slice} />;
      case 'PrismicHomepageBodyBlocIcon':
        return <SliceInfosIconsContainer key={slice.id} slice={slice} />;
      case 'PrismicHomepageBodyServices':
        return <SliceServicesContainer key={slice.id} slice={slice} />;
      default:
        return true;
    }
  });

Slices.propTypes = {
  slices: PropTypes.array.isRequired,
};

export default Slices;
