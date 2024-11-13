import React from 'react';
import styled, { css } from 'styled-components';
import { font } from '../../../../styles/Common';

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
    <TabsList>
      {props.tabsItems.map((tab, index) => {
        return (
          <li key={index}>
            <Btn
              active={props.currentTabsStatus === tab.status}
              onClick={() => {
                props.changeTabsStatus(tab.status);
              }}
            >
              {tab.title}
            </Btn>
          </li>
        );
      })}
    </TabsList>
  );
};

const TabsList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const Btn = styled.button<{ active: boolean }>`
  ${font({ Fmax: 22, Fmin: 16, weight: 600 })}
  position: relative;

  ${(props) => {
    return (
      props.active &&
      css`
        &::after {
          content: '';
          height: 4px;
          width: 100%;
          position: absolute;
          background-color: #fff;
          bottom: -3px;
          left: 0;
        }
      `
    );
  }}

  &:hover::after {
    content: '';
    height: 4px;
    width: 100%;
    position: absolute;
    background-color: #fff;
    bottom: -3px;
    left: 0;
  }
`;
