import React from 'react';
import { Link } from 'gatsby';
import { BreadCrumb } from '../styles/breadCrumb';

const Breadcrumb = () => (
  <BreadCrumb aria-label="Fil d'arianne" className="breadcrumb">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Category</Link>
      </li>
      <li>
        <Link to="/">Sub-Category</Link>
      </li>
      <li>
        <span aria-current="page">Product</span>
      </li>
    </ul>
  </BreadCrumb>
);

export default Breadcrumb;
