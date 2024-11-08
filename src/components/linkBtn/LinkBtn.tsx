import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

type LinkBtnType = {
  width?: string;
};

export const StyledLinkBtn = styled.a<LinkBtnType>`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 83px;
  background: ${Theme.colors.gradientBg};
  width: ${(props) => props.width || '200px'};
`;
