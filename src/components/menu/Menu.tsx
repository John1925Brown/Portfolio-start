import styled from 'styled-components';
export const Menu = () => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 80px;

    & li {
      font-size: 16px;
      list-style: none;

      & a {
        text-decoration: none;
        color: #fff;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
