import React from 'react';
import { S } from './Menu_Styles';

export const Menu: React.FC = () => {
  return (
    <S.Menu>
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
    </S.Menu>
  );
};
