import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const LinkAnimation = props => (
  <TransitionLink
    exit={{
      trigger: ({ exit, node }) => console.log('here'),
    }}
    entry={{
      length: 0,
      trigger: ({ exit, node }) => console.log('there'),
    }}
    {...props}
  >
    {props.children}
  </TransitionLink>
);

export default LinkAnimation;
