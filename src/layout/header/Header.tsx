import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { S } from './Header_Styles';

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
      <Container>{width > breakpoint ? <Menu /> : <MobileMenu />}</Container>
    </S.Header>
  );
};
