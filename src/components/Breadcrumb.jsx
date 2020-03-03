import React from 'react';
import { Link } from 'gatsby';
import { BreadCrumb } from '../styles/breadCrumb';

const Breadcrumb = () => (
  <BreadCrumb aria-label="Fil d'arianne" className="breadcrumb">
    <ul>
      <li>
        <Link className="item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item" to="/">
          Category
        </Link>
      </li>
      <li>
        <Link className="item" to="/">
          Sub-Category
        </Link>
      </li>
      <li>
        <span className="item" aria-current="page">
          Product
        </span>
      </li>
    </ul>
  </BreadCrumb>
);

export default Breadcrumb;
