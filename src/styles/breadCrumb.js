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
        font-size: 15px;
        padding: 0 6px;
      }
      &:first-child::before {
        content: '';
        padding: 0;
      }
      .item {
        font-family: 'Trade Gothic Bold';
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
