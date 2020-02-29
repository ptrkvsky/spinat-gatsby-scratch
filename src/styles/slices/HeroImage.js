import styled from '@emotion/styled';
import theme from '../theme';
import mediaQueries from '../mediaQueries';

const SectionHeroImage = styled('section')`
  position: relative;
  display: block;
  padding: 150px 0 120px 0;
  ${mediaQueries.tabletLandscape} {
    padding: 100px 10px 80px 10px;
  }

  h1 {
    position: relative;
    padding-top: 40px;
    font-size: 78px;
    font-weight: 800;
    text-transform: uppercase;

    ${mediaQueries.mobile} {
      font-size: 40px;
    }

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
