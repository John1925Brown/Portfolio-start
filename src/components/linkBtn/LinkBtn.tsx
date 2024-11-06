import styled from 'styled-components';

type LinkBtnType = {
  width?: string;
};

export const StyledLinkBtn = styled.a<LinkBtnType>`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  width: ${(props) => props.width || '200px'};
`;
