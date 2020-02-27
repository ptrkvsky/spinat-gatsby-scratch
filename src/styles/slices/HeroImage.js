import styled from '@emotion/styled';
import theme from '../theme';

const SectionHeroImage = styled('section')`
  position: relative;
  display: block;
  padding: 70px 30px 70px 30px;

  h1 {
    font-size: 78px;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 70px;
      height: 3px;
      background-color: ${theme.colors.primary};
    }
  }

  .illu {
    position: absolute !important;
    top: 0;
    right: 0;
    width: 640px;
  }
`;

export { SectionHeroImage };
