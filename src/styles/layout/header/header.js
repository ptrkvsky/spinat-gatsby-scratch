import styled from '@emotion/styled';
import theme from '../../theme';
import mediaQueries from '../../mediaQueries';

const HeaderBg = styled('header')`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  background-color: rgba(0, 0, 0, 0.9);
`;

const HeaderContainer = styled('div')`
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;

  ${mediaQueries.tabletLandscape} {
    padding: 0 10px;
  }
`;

export { HeaderContainer, HeaderBg };
