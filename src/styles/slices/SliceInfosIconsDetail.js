import styled from '@emotion/styled';
import theme from '../theme';
import mediaQueries from '../mediaQueries';

const InfosIconsDetailContainer = styled('article')`
  padding: 60px 40px 60px 40px;
  background-color: ${theme.bg.lighter};
  grid-column-gap: 20px;
  transition: background 0.5s, border 0.7s, border-radius 0.7s, box-shadow 0.7s;
  &:first-child,
  &:hover {
    background-color: ${theme.colors.primary};
  }
  .bloc-title {
    position: relative;
    display: block;
    padding: 60px 0 30px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
    margin: 0px 0px 5px 0px;
    &:after {
      content: '';
      display: block;
      position: absolute;
      transform: translateY(10px);
      width: 50px;
      height: 3px;
      background-color: ${theme.colors.main};
    }
  }
  ${mediaQueries.tabletLandscape} {
    padding: 40px 15px 40px;
  }
`;

export { InfosIconsDetailContainer };
