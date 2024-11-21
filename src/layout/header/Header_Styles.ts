import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 100px;
  transition: 0.3s;
  
  @media ${theme.media.tablet} {
    margin-bottom: 0;
  }
`;

export const S = {
  Header,
};
