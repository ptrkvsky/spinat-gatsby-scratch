import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {
  TitleCategory,
  TitleProject,
} from '../../styles/slices/SliceProjectDetail.js';

const SliceProjectDetail = ({ item, uid }) => (
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
    <TitleCategory>
      {item.categories[0].category.document[0].data.name}
    </TitleCategory>

    <TitleProject>
      <Link to={`/projet/${uid}`}>{item.main_title}</Link>
    </TitleProject>
  </BackgroundImage>
);

SliceProjectDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceProjectDetail;
