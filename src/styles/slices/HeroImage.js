import styled from '@emotion/styled';
import theme from '../theme';

const SectionHeroImage = styled('section')`
  position: relative;
  display: block;
  padding: 70px 0 70px 0;

  h1 {
    position: relative;
    padding-top: 40px;
    font-size: 78px;
    font-weight: 800;
    text-transform: uppercase;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      height: 3px;
      background-color: ${theme.colors.primary};
    }
  }

  .illu {
    position: absolute !important;
    z-index: -1;
    top: 0;
    right: 0;
    width: 640px;
  }
`;

const ButtonContainer = styled('div')`
  margin-top: 20px;
`;

export { SectionHeroImage, ButtonContainer };
