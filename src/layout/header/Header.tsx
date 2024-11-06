import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <AccountsGroup />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 150px;
`;
