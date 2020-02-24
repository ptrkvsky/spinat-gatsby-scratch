import PropTypes from 'prop-types'
import React from 'react'

const SliceHeroImage = ({ slice }) =>
  slice.items.map(item => (
    <div>
      {item.icon_class}
      <div
        className="bloc-shortdesc"
        dangerouslySetInnerHTML={{
          __html: item.short_description.html,
        }}
      />
      <div
        className="bloc-title"
        dangerouslySetInnerHTML={{
          __html: item.bloc_title.html,
        }}
      />
    </div>
  ))

SliceHeroImage.propTypes = {
  slice: PropTypes.object.isRequired,
}

export default SliceHeroImage
