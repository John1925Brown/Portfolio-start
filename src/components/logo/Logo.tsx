import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <FlexWrapper align="center" gap="15px">
        <Icon iconId={'codeLogo'} width={50} height={50} viewBox="0 0 50 50" />
        <h3>Portfolio</h3>
      </FlexWrapper>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  text-decoration: none;
  & h3 {
    font-size: 30px;
    margin: 0;
  }
`;
