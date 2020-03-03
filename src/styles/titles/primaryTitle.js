import styled from '@emotion/styled';
import theme from '../theme';

const PrimaryTitle = styled('div')`
  position: relative;
  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    padding: 20px 0 10px;
    /* color: ${theme.colors.secondary}; */
    color: ${props =>
      props.primary ? theme.colors.secondary : theme.colors.opposite}

  }
  &:before {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.primary};
  }

  .withmargin & {
    padding-top: 140px;
  }
`;

export { PrimaryTitle };
