import styled from '@emotion/styled';
import theme from '../../theme';

const MainNav = styled('nav')`
  ul {
    display: flex;
    justify-content: space-between;
    li {
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export { MainNav };
