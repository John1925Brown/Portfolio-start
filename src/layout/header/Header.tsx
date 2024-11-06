import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';

const headerSvgsGroup = [
  {
    width: 35,
    height: 30,
    iconId: 'codeGithub',
  },
  {
    width: 35,
    height: 30,
    iconId: 'codeLinkedin',
  },
  {
    width: 35,
    height: 30,
    iconId: 'codeTelegram',
  },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <AccountsGroup svgGroup={headerSvgsGroup} />
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
