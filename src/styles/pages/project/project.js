import styled from '@emotion/styled';
import theme from '../theme';
import mediaQueries from '../mediaQueries';


const Grid = styled('section')`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-areas: 'main aside';

  padding-top: 70px;

  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      'aside'
      'main';
  }
`;

const Main = styled('main')`
  grid-area: main;
  .long_description {
    line-height: 1.5;
    p {
      margin-bottom: 20px;
    }
  }
`;
const Aside = styled('aside')`
  grid-area: aside;
`;

export { SectionHero, Grid, Aside, Main };
