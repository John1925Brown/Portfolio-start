import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { S } from './Header_Styles';

export const headerItems = [
  { title: 'Projects', href: 'projects' },
  { title: 'Technologies', href: 'technologies' },
  { title: 'Contact', href: 'contact' },
];

export const Header: React.FC = (props: any) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (window.scrollY > 130) {
        setIsShow(false);
      }

      if (window.scrollY < 130 || lastScroll > currentScroll) {
        setIsShow(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <S.Header
      style={{ transform: isShow ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <Container>{width > breakpoint ? <Menu /> : <MobileMenu />}</Container>
    </S.Header>
  );
};
