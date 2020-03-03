import styled from '@emotion/styled';
import theme from '../theme';

const Container = styled('div')`
  transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
  &:hover {
    transform: scale(0.9);
    .TitleCategory,
    .TitleProject {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .bg-project-detail:hover {
    filter: none !important;
  }
`;

const TitleCategory = styled('h3')`
  opacity: 0;
  transform: translateX(-40px);
  margin: 0px 0px 10px 0px;
  font-family: ${theme.fonts.primary};
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;
  transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
`;

const TitleProject = styled('h4')`
  opacity: 0;
  transform: translateX(-40px);
  margin: 0px 0px 10px 0px;
  font-family: ${theme.fonts.primary};
  font-size: 34px;
  font-weight: 700;
  text-transform: capitalize;
  transition: 1s cubic-bezier(0.17, 0.67, 0, 1.01);
`;

export { TitleCategory, TitleProject, Container };
