import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';
import SliceProjectDetail from './SliceProjectDetail.jsx';
import useWindowWidth from '../../lib/hooks/useWindowWidth.js';

const SliceProjects = ({ slice }) => {
  const windowWidth = useWindowWidth();
  const [nbSlide, setnbSlide] = useState(1);
  useEffect(() => {
    if (windowWidth > 980) {
      setnbSlide(3);
    } else if (windowWidth > 720) {
      setnbSlide(2);
    } else if (windowWidth > 600) {
      setnbSlide(1);
    }
  }, [windowWidth]);

  return (
    <Carousel slidesToShow={nbSlide} cellSpacing={30}>
      {slice.map(item => (
        <SliceProjectDetail
          key={item.project_link.uid}
          item={item.project_link.document[0].data}
          uid={item.project_link.uid}
        />
      ))}
    </Carousel>
  );
};

SliceProjects.propTypes = {
  slice: PropTypes.array.isRequired,
};

export default SliceProjects;
