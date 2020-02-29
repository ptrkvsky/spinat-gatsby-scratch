import styled from '@emotion/styled';
import mediaQueries from '../mediaQueries';

const InfosIconsContainer = styled('div')`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
  }
`;

export { InfosIconsContainer };
