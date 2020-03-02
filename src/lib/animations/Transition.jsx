// Import necessary dependencies

import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

const Transition = ({ children, location }) => {
  // Using TransitionGroup and ReactTransition which are both
  // coming from  'react-transition-group' and are required for transitions to work
  // This variable will be responsible for our animation duration
  const timeout = 200;

  // This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
  const getTransitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0,
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      top: '50px',
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      top: 0,
    },
  };
  const { pathname } = location;
  return (
    <TransitionGroup>
      <ReactTransition
        // the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
        key={pathname}
        // duration of transition
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {// Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
        status => (
          <div
            className="transition"
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
