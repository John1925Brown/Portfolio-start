import styled from 'styled-components';

import { StyledLinkBtn } from '../../../../components/linkBtn/LinkBtn';
import { Photo } from '../../../../components/Photo';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type ProjectPropsType = {
  src: string;
  titleValue: string;
};
export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction="column">
        <Photo
          width="500px"
          height="280px"
          radius="24px 8px 8px 8px"
          marginB="40px"
          src={props.src}
          alt="project 1"
        />
        <StyledTitle>{props.titleValue}</StyledTitle>
        <StyledDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledDescription>
        <StyledLinkBtn width="200px">Look It Up</StyledLinkBtn>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.article`
  border: 1px solid #a39d9d;
  border-radius: 50px 0;
  max-width: 550px;
  max-height: 670px;
  background: #0f1624;
  padding: 25px 25px 40px 25px;
`;

const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 0.885;
  color: #fff;
  margin-bottom: 65px;
  position: relative;
  align-self: center;

  &::after {
    content: '';
    border-radius: 83px;
    width: 300px;
    height: 4px;
    position: absolute;
    bottom: -23px;

    left: -50%;
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );
  }
`;

const StyledDescription = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin-bottom: 50px;
`;