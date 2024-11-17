import React from 'react';
import { S } from './Menu_Styles';
import { AccountsGroup } from '../accountsGroup/AccountsGroup';
import { Logo } from '../logo/Logo';
import { FlexWrapper } from '../FlexWrapper';
import { headerItems } from '../../layout/header/Header';

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

export const Menu: React.FC = () => {
  return (
    <S.Menu>
      <FlexWrapper align="center" content="space-between">
        <Logo />
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
        <AccountsGroup svgGroup={headerSvgsGroup} />
      </FlexWrapper>
    </S.Menu>
  );
};

// Сделать активные ссылки. Прикрепить хедер