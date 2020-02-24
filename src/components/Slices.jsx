import PropTypes from 'prop-types'
import React from 'react'

import SliceHeroImage from './slices/SliceHeroImage'

const Slices = ({ slices }) =>
  slices.map(slice => {
    switch (slice.__typename) {
      case 'PrismicHomepageBodyHeroImage':
        return <SliceHeroImage slice={slice} />
      case 'PrismicHomepageBodyBlocIcon':
        return true
      default:
        return true
    }
  })

Slices.propTypes = {
  slices: PropTypes.array.isRequired,
}

export default Slices
