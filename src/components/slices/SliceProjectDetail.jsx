import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {
  TitleCategory,
  TitleProject,
  Container,
} from '../../styles/slices/SliceProjectDetail.js';

const SliceProjectDetail = ({ item, uid }) => (
  <Container>
    <Link to={`/projet/${uid}`}>
      <BackgroundImage
        style={{
          minHeight: '450px',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="bg-project-detail"
        Tag="div"
        fluid={item.main_images.localFile.childImageSharp.fluid}
      >
        <TitleCategory className="TitleCategory">
          {item.categories[0].category.document[0].data.name}
        </TitleCategory>

        <TitleProject className="TitleProject">{item.main_title}</TitleProject>
      </BackgroundImage>
    </Link>
  </Container>
);

SliceProjectDetail.propTypes = {
  item: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
};

export default SliceProjectDetail;
