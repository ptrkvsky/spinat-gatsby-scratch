import styled from '@emotion/styled';
import theme from '../theme';
import mediaQueries from '../mediaQueries';

const InfosIconsDetailContainer = styled('article')`
  padding: 60px 40px 60px 0;
  background-color: ${theme.bg.lighter};
  grid-column-gap: 20px;
  transition: background 0.5s, border 0.7s, border-radius 0.7s, box-shadow 0.7s;
  &:first-child,
  &:hover {
    background-color: ${theme.colors.primary};
    &:last-child:after {
    }
  }
  .bloc-title {
    position: relative;
    display: block;
    padding: 60px 0 30px 40px;
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
  .bloc-shortdesc,
  svg {
    padding-left: 40px;
  }
  &:last-child:after {
    content: '';
    z-index: -1;
    display: block;
    width: 440px;
    height: 30px;
    position: absolute;
    background-color: ${theme.colors.primary};
    bottom: -15px;
    transition: background 0.5s;
  }
  ${mediaQueries.tabletLandscape} {
    padding: 40px 15px 40px;
  }
`;

export { InfosIconsDetailContainer };
