import React from 'react';
import { S } from './Tabs_Styles';

type TypeTabs = {
  tabsItems: Array<{
    title: string;
    status: 'all' | 'landing' | 'react' | 'spa';
  }>;
  changeTabsStatus: (status: 'all' | 'landing' | 'react' | 'spa') => void;
  currentTabsStatus: string;
};

export const Tabs: React.FC<TypeTabs> = (props) => {
  return (
    <S.TabsList>
      {props.tabsItems.map((tab, index) => {
        return (
          <li key={index}>
            <S.Btn
              active={props.currentTabsStatus === tab.status}
              onClick={() => {
                props.changeTabsStatus(tab.status);
              }}
            >
              {tab.title}
            </S.Btn>
          </li>
        );
      })}
    </S.TabsList>
  );
};
