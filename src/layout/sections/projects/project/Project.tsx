import { StyledLinkBtn } from '../../../../components/linkBtn/LinkBtn';
import { Photo } from '../../../../components/Photo';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import React from 'react';
import { S } from './Project_Styles';

type ProjectPropsType = {
  src: string;
  titleValue: string;
};
export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <S.Project>
      <FlexWrapper direction="column">
        <Photo
          width="500px"
          height="280px"
          widthMobile="400px"
          heightMobile="180px"
          radius="24px 8px 8px 8px"
          marginB="40px"
          src={props.src}
          alt="project 1"
        />
        <S.Title>{props.titleValue}</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </S.Description>
        <StyledLinkBtn width="200px">Look It Up</StyledLinkBtn>
      </FlexWrapper>
    </S.Project>
  );
};
