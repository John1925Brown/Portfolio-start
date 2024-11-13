import React from 'react';
import styled from 'styled-components';
import { font } from '../../../../styles/Common';

type TypeTabs = {
  tabsItems: Array<string>;
};

export const Tabs: React.FC<TypeTabs> = (props) => {
  return (
    <TabsList>
      {props.tabsItems.map((tab, index) => {
        return (
          <li key={index}>
            <a href="#">{tab}</a>
          </li>
        );
      })}
    </TabsList>
  );
};

const TabsList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
  ${font({ Fmax: 22, Fmin: 16, weight: 600 })}
`;
