import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  padding-top: 25px;
  margin-bottom: 150px;

  @media ${theme.media.tablet} {
    margin-bottom: 0;
  }

  nav + div {
    @media screen and (max-width: 1050px) {
      display: none;
    }
  }
`;

export const S = {
  Header,
};
