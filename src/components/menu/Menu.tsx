import React from 'react';
import { S } from './Menu_Styles';
import { AccountsGroup } from '../accountsGroup/AccountsGroup';
import { Logo } from '../logo/Logo';
import { FlexWrapper } from '../FlexWrapper';

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
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
        </ul>
        <AccountsGroup svgGroup={headerSvgsGroup} />
      </FlexWrapper>
    </S.Menu>
  );
};
