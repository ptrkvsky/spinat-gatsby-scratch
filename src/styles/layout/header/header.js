import styled from '@emotion/styled';
import theme from '../../theme';
import mediaQueries from '../../mediaQueries';

const HeaderBg = styled('header')`
  position: sticky;
  top: 0;
  z-index: 900;
  background-color: ${theme.bg.opposite};
`;
const HeaderContainer = styled('div')`
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.bg.opposite};

  ${mediaQueries.tabletLandscape} {
    padding: 0 10px;
  }
`;

export { HeaderContainer, HeaderBg };
