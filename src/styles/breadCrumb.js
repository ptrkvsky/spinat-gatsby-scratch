import styled from '@emotion/styled';
import theme from './theme';

const BreadCrumb = styled('nav')`
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    li {
      &:before {
        content: '/';
        font-size: 10px;
      }
      &:first-child::before {
        content: '';
      }
      a {
        display: inline-block;
        font-family: 'Trade Gothic Bold';
        padding: 0 20px;
        font-weight: 700;
        text-transform: uppercase;
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
`;
export { BreadCrumb };
