import { Link } from "react-scroll";
import styled, { css } from "styled-components";

const BurgerBtn = styled.button<{ isOpen: boolean }>`
  width: 36px;
  height: 25px;
  position: fixed;
  top: 35px;
  right: 60px;
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
      transition: 0.2s;
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
      transition: 0.2s;
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(15, 22, 36, 0.9);
  display: flex;
  justify-content: center;
  transform: translateY(-100%);
  transition: 0.5s;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(0);
    `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const NavLink = styled(Link)`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    transition: 0.2s;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    background-color: #fff;
  }

  &:hover::after {
    height: 2px;
  }
`;

export const S = { NavLink, BurgerBtn, MobileMenuPopup };
