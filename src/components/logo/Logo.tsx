import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon iconId={'codeLogo'} width={50} height={50} viewBox="0 0 50 50" />
      <h3>Portfolio</h3>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  text-decoration: none;
  & h3 {
    font-weight: 500;
    font-size: 30px;
    margin: 0;
  }
`;
