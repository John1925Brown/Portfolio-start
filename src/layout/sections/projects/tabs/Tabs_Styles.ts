import styled, { css } from 'styled-components';
import { font } from '../../../../styles/Common';

const TabsList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const Btn = styled.button<{ active: boolean }>`
  ${font({ Fmax: 22, Fmin: 16, weight: 600 })}
  position: relative;

  &::after {
    content: '';
    height: 0px;
    width: 100%;
    position: absolute;
    background-color: #fff;
    bottom: -3px;
    left: 0;
    transition: 0.2s;
  }

  &:hover::after {
    height: 4px;
  }

  ${(props) => {
    return (
      props.active &&
      css<{ active: boolean }>`
        &::after {
          content: '';
          height: 4px;
          width: 100%;
          position: absolute;
          background-color: #fff;
          bottom: -3px;
          left: 0;
        }
      `
    );
  }}
`;

export const S = {
  TabsList,
  Btn,
};
