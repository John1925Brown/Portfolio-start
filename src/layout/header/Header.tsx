import React, { useEffect, useState } from 'react';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { S } from './Header_Styles';

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

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper align="center" content="space-between">
          <Logo />
          {width > breakpoint ? <Menu /> : <MobileMenu />}
          <AccountsGroup svgGroup={headerSvgsGroup} />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
