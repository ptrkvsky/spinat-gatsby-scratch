import styled from '@emotion/styled';
import theme from '../theme';

const SliceTitleContainer = styled('div')`
  padding-top: 140px;
`;

const Title = styled('div')`
  position: relative;
  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    padding: 20px 0 10px;
    color: ${theme.colors.secondary};
  }
  &:before {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.primary};
  }
`;

const SubTitle = styled('div')`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 17px;
  color: ${theme.colors.primary};
`;
export { SliceTitleContainer, Title, SubTitle };
