import styled from 'styled-components';

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 80px;

    @media screen and (max-width: 1050px) {
      gap: 40px;
    }
  }
`;

export const S = {
  Menu,
};
