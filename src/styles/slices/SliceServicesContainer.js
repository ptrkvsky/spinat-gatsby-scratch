import styled from '@emotion/styled';
import theme from '../theme';

const ServicesBackground = styled('section')`
  background-color: ${theme.bg.opposite};
`;
const ServicesContainer = styled('div')`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 80px 0px 140px 0px;
  grid-column-gap: ${theme.columnGap};
`;

export { ServicesBackground, ServicesContainer };
