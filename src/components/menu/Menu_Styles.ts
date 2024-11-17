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

const NavLink = styled(Link)``;

export const S = {
  Menu,
  NavLink,
};
