import styled from 'styled-components';
import { theme } from '../styles/theme';

type ButtonType = {
  width?: string;
};

export const Button = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  color: ${theme.colors.font};
  margin: 0 auto;
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 83px;
  background: ${theme.colors.gradientBg};
  width: ${(props) => props.width || '200px'};
`;
