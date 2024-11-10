import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

export const MobileMenu = () => {
  return (
    <div>
      <BurgerBtn isOpen={false}>
        <span></span>
      </BurgerBtn>

      <MobileMenuPopup isOpen={false}>
        <ul>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
        </ul>
      </MobileMenuPopup>
    </div>
  );
};

const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 47px;
  right: 80px;
  z-index: 11;

  ${(props) =>
    props.isOpen &&
    css`
      display: block;
    `}

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #fff;
    position: absolute;

    ${(props) =>
      props.isOpen &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      position: absolute;
      transform: translateY(-12px);
      left: 0;
      background-color: #fff;
      width: 36px;
      height: 2px;

      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(45deg) translateY(0);
        `}
    }

    &::after {
      content: '';
      width: 36px;
      height: 2px;
      position: absolute;
      transform: translateY(12px);
      left: 0;
      background-color: #fff;

      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(-45deg) translateY(0);
        `}
    }
  }
`;

const MobileMenuPopup = styled.nav<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: ${theme.colors.primaryBg};

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;
