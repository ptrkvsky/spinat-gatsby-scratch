import PropTypes from 'prop-types';
import React from 'react';
import { AsideTitle, InfoBox } from '../../styles/components/projets/aside';

const Aside = ({ date, categories, client }) => {
  console.log(client);
  const categoriesList = categories.map(item => (
    <span>{item.category.document[0].data.name}</span>
  ));

  return (
    <>
      <AsideTitle>Project detail</AsideTitle>
      <InfoBox>
        <h3 className="title">Date</h3>
        <p>{date}</p>
      </InfoBox>

      <InfoBox>
        <h3 className="title">Client</h3>
        {client}
      </InfoBox>

      <InfoBox>
        <h3 className="title">Category</h3>
        {categoriesList}
      </InfoBox>
    </>
  );
};

Aside.propTypes = {
  categories: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
};

export default Aside;
