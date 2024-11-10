import styled from 'styled-components';

import { StyledLinkBtn } from '../../../../components/linkBtn/LinkBtn';
import { Photo } from '../../../../components/Photo';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

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
          widthMobile="400px"
          heightMobile="180px"
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
  flex: 1 1 40%;
  background: ${theme.colors.primaryBg};
  padding: 25px 25px 40px 25px;

  @media ${theme.media.tablet} {
    flex: none;
    width: 100%;
  }

  @media ${theme.media.mobile} {
    padding: 20px;
  }
`;

const StyledTitle = styled.h3`
  ${font({ weight: 600, Fmin: 20, Fmax: 30 })}
  line-height: 0.885;
  margin-bottom: 65px;
  position: relative;
  align-self: center;

  &::after {
    content: '';
    position: absolute;
    border-radius: 83px;
    width: 200%;
    height: 4px;
    bottom: -23px;
    left: 0;
    transform: translateX(-25%);
    background: ${theme.colors.gradientBg};

    @media screen and (max-width: 930px) {
      width: 160%;
      transform: translateX(-20%);
    }
  }

  @media ${theme.media.mobile} {
    margin-bottom: 45px;
  }
`;

const StyledDescription = styled.p`
  ${font({ Fmin: 14, Fmax: 18, color: theme.colors.font })}
  margin-bottom: 50px;

  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`;
