import PropTypes from 'prop-types';
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { TitleCategory } from '../../styles/slices/SliceProjectDetail.js';

const SliceProjectDetail = ({ item }) => (
  <BackgroundImage
    style={{
      minHeight: '450px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    Tag="div"
    fluid={item.main_images.localFile.childImageSharp.fluid}
  >
    {console.log(item)}
    <TitleCategory>{item.main_title}</TitleCategory>
    <TitleCategory>{item.categories[0].slug}</TitleCategory>
  </BackgroundImage>
);

SliceProjectDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceProjectDetail;
