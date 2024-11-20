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
    path: 'https://github.com/john1925brown',
  },
  {
    width: 35,
    height: 30,
    iconId: 'codeLinkedin',
    path: 'https://www.linkedin.com/in/dzmitry-yarasheuski-63714a282/',
  },
  {
    width: 35,
    height: 30,
    iconId: 'codeTelegram',
    path: 'https://t.me/John25Brown',
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
