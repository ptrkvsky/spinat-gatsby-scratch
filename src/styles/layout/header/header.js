import styled from '@emotion/styled';
import theme from '../../theme';

const HeaderContainer = styled('header')`
  display: flex;
  justify-content: space-between;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

export { HeaderContainer };
