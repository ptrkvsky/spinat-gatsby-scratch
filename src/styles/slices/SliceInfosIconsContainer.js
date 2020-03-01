import styled from '@emotion/styled';
import mediaQueries from '../mediaQueries';
import theme from '../theme';

const InfosIconsContainer = styled('div')`
  position: relative;
  z-index: 10;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${theme.columnGap};
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
  }
`;

export { InfosIconsContainer };
