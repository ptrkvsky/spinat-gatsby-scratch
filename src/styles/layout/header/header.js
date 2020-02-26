import styled from '@emotion/styled';
import theme from '../../theme';

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
`;

export { HeaderContainer };
