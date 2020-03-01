import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';
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
      {console.log(slice)}
      {slice.map(item => (
        <div>
          {item.project_link.document[0].data.categories[0].category.slug}
          {item.project_link.document[0].data.main_title}
          {}
          <Img
            fluid={
              item.project_link.document[0].data.main_images.localFile
                .childImageSharp.fluid
            }
          />
        </div>
      ))}
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide7"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide8"
      />
      <img
        alt="test"
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide9"
      />
    </Carousel>
  );
};

SliceProjects.propTypes = {
  slice: PropTypes.array.isRequired,
};

export default SliceProjects;
