import styled from '@emotion/styled';
import { css } from '@emotion/core';

import theme from '../theme';

const ButtonPrimary = css`
  position: relative;
  display: inline-block;
  font-size: ${theme.fontSize.button};
  font-weight: 700;
  line-height: ${theme.fontSize.button};
  letter-spacing: -0.2px;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: ${theme.colors.primary};
  padding: 20px 40px 20px 40px;
  background: rgba(51, 51, 51, 0);
  color: ${theme.colors.opposite};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  span {
    position: relative;
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: 0 50%;
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0, 1.01);
    background-color: ${theme.colors.primary};
  }
  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }
`;

export { ButtonPrimary };
