import styled from 'styled-components';
import { theme } from '../../styles/Theme';
export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Technologies</Link>
        </li>
        <li>
          <Link href="#">About me</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {

    display: flex;
    gap: 80px;

    @media screen and (max-width: 1050px) {
      gap: 40px;
    }
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
