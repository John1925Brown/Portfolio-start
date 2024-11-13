import { StyledLinkBtn } from '../../../../components/linkBtn/LinkBtn';
import { Photo } from '../../../../components/Photo';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import React from 'react';
import { S } from './Project_Styles';

type ProjectPropsType = {
  src: string;
  title: string;
  description: string;
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
          alt={props.title}
        />
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
        <StyledLinkBtn as="button" width="200px">
          Look It Up
        </StyledLinkBtn>
      </FlexWrapper>
    </S.Project>
  );
};
