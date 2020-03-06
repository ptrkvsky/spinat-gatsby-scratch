import styled from '@emotion/styled';
import mediaQueries from '../../mediaQueries';
import theme from '../../theme';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-areas: 'main aside';
  grid-gap: 50px;

  padding-top: 70px;

  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      'aside'
      'main';
    grid-gap: 0px;
  }
`;

const Main = styled('main')`
  grid-area: main;
  .title {
    margin-bottom: 40px;
    letter-spacing: -2px;
    font-weight: 800;
    font-family: ${theme.fonts.title};
    font-size: 34px;
    text-transform: uppercase;
    color: ${theme.colors.primary};
  }
  .long_description {
    line-height: 1.5;
    p {
      margin-bottom: 20px;
    }
  }
`;

const AsideContainer = styled('aside')`
  grid-area: aside;
`;

export { Grid, AsideContainer, Main };
