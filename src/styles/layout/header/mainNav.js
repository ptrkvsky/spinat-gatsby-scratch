import styled from '@emotion/styled';
import theme from '../../theme';

const MainNav = styled('nav')`
  ul {
    display: flex;
    justify-content: space-between;
    li {
      margin-left: 10px;
      font-family: ${theme.fonts.title};
      a {
        display: inline-block;
        margin-right: 40px;
        color: ${theme.colors.opposite};
        overflow: hidden;
        background: linear-gradient(to right, #2ca838, green 50%, white 50%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
        text-decoration: none;
        &:hover {
          background-position: 0 100%;
        }
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export { MainNav };
