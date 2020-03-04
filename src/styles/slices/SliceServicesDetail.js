import styled from '@emotion/styled';
import theme from '../theme';

const ServiceContainer = styled('article')`
  display: flex;
  align-items: center;
  padding: 40px 30px 40px 30px;
  background-color: ${theme.bg.oppositeDarker};
  transition: background 0.5s, border 0.5s, border-radius 0.5s, box-shadow 0.5s,
    -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;
  cursor: pointer;
  .icon {
    transform: scale(0);
    transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
  }
  .link-item {
    position: relative;
    transform: translateX(-40px);
    transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    font-family: ${theme.fonts.title};
    text-transform: capitalize;
  }
  &:hover {
    background-color: ${theme.colors.primary};
    .link-item {
      transform: translateX(20px);
      color: #fff;
    }
    svg {
      color: #fff;
    }
    .icon {
      transform: scale(1);
    }
  }
`;

export { ServiceContainer };
