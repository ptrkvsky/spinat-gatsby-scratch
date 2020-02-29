import styled from '@emotion/styled';
import theme from '../../theme';
import mediaQueries from '../../mediaQueries';

const HeaderContainer = styled('header')`
  position: sticky;
  top: 0;
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.bg.main};
  z-index: 900;
  ${mediaQueries.tabletLandscape} {
    padding: 0 10px;
  }
`;

export { HeaderContainer };
