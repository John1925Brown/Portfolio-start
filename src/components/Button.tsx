import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

type ButtonType = {
  width?: string;
  tabletWidth?: string;
  mobileWidth?: string;
};

export const Button = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  ${font({ weight: 600, Fmax: 20, Fmin: 12, color: theme.colors.font })}
  margin: 0 auto;
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 83px;
  background: ${theme.colors.gradientBg};
  width: ${(props) => props.width || '200px'};

  @media ${theme.media.tablet} {
    width: ${(props) => props.tabletWidth || '180px'};
  }

  @media ${theme.media.mobile} {
    width: ${(props) => props.mobileWidth || '150px'};
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
