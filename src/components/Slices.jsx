import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SliceHeroImage from './slices/SliceHeroImage';
import SliceInfosIconsContainer from './slices/SliceInfosIconsContainer';
import SliceServicesContainer from './slices/SliceServicesContainer';
import SliceTitle from './slices/SliceTitle';
import SliceProjects from './slices/SliceProjectsContainer';

const Slices = ({ slices, transitionStatus }) =>
  slices.map(slice => {
    switch (slice.__typename) {
      case 'PrismicHomepageBodyHeroImage':
        return (
          <SliceHeroImage
            key={slice.id}
            slice={slice}
            transitionStatus={transitionStatus}
          />
        );
      case 'PrismicHomepageBodyBlocIcon':
        return (
          <SliceInfosIconsContainer
            transitionStatus={transitionStatus}
            key={slice.id}
            slice={slice}
          />
        );
      case 'PrismicHomepageBodyServices':
        return (
          <SliceServicesContainer
            transitionStatus={transitionStatus}
            key={slice.id}
            slice={slice}
          />
        );
      case 'PrismicHomepageBodyTitle':
        return (
          <SliceTitle
            transitionStatus={transitionStatus}
            key={slice.id}
            slice={slice}
          />
        );
      case 'PrismicHomepageBodyProjectSlider':
        return (
          <SliceProjects
            transitionStatus={transitionStatus}
            key={slice.id}
            slice={slice.items}
          />
        );
      default:
        return true;
    }
  });

Slices.propTypes = {
  slices: PropTypes.array.isRequired,
};

export default Slices;
