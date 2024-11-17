import { Link } from 'react-scroll';
import styled from 'styled-components';

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 80px;

    @media screen and (max-width: 1050px) {
      gap: 40px;
    }
  }

  div > div {
    @media screen and (max-width: 1050px) {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    background-color: #fff;
    transition: 0.2s;
  }

  &:hover::after {
    height: 2px;
  }
`;

export const S = {
  Menu,
  NavLink,
};
