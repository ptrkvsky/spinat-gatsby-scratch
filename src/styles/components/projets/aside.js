import styled from '@emotion/styled';
import theme from '../../theme';

const AsideTitle = styled('h2')`
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 20px;

  letter-spacing: 1px;
  font-family: ${theme.fonts.primary};
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.colors.primary};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 40px;
    background-color: ${theme.colors.primary};
  }
`;

const InfoBox = styled('div')`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #d0d0d0;

  .title {
    text-transform: uppercase;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: -1px;
    font-family: ${theme.fonts.primary};
    font-weight: 800;
    margin-bottom: 10px;
  }
`;

export { AsideTitle, InfoBox };
