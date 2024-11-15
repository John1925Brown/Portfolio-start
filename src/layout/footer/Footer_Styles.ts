import styled from 'styled-components';
import { font } from '../../styles/Common';
import { FlexWrapper } from '../../components/FlexWrapper';

const StyledFooter = styled.footer`
  position: relative;
  padding-top: 42px;
  padding-bottom: 42px;
  div > ${FlexWrapper} {
    @media screen and (max-width: 1050px) {
      gap: 40px 40px;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
    }
  }
`;

const ContactsGroup = styled.div`
  display: flex;
  gap: 160px;

  @media screen and (max-width: 1050px) {
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContactsText = styled.p`
  ${font({ weight: 600, Fmax: 22, Fmin: 16 })}
`;

export const S = {
  ContactsText,
  StyledFooter,
  ContactsGroup,
};
