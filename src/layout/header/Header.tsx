import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

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
      <Container>
        <FlexWrapper align="center" content="space-between">
          <Logo />
          <Menu />
          <AccountsGroup svgGroup={headerSvgsGroup} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 25px;
  margin-bottom: 150px;
`;
