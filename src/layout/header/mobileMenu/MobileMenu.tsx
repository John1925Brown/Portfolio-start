import { FlexWrapper } from '../../../components/FlexWrapper';
import { Logo } from '../../../components/logo/Logo';
import React, { useState } from 'react';
import { headerItems } from '../Header';
import { S } from './MobileMenu_Styles';

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const burgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <FlexWrapper>
      <Logo />
      <S.BurgerBtn isOpen={menuIsOpen} onClick={burgerBtnClick}>
        <span></span>
      </S.BurgerBtn>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <ul>
          {headerItems.map((item, index) => {
            return (
              <li key={index}>
                <S.NavLink to={item.href} smooth={true}>
                  {item.title}
                </S.NavLink>
              </li>
            );
          })}
        </ul>
      </S.MobileMenuPopup>
    </FlexWrapper>
  );
};
