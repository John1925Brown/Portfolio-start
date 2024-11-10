import styled from 'styled-components';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { font } from '../../styles/Common';
import { theme } from '../../styles/Theme';

const techsSvgsGroup = [
  {
    width: 35,
    height: 35,
    iconId: 'codeGithub',
  },
  {
    width: 35,
    height: 35,
    iconId: 'codeLinkedin',
  },
  {
    width: 35,
    height: 35,
    iconId: 'codeTelegram',
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper align="center" content="space-between" wrap="wrap">
          <ContactsGroup>
            <ContactsText>
              Call me:
              <br />
              452-622-803
            </ContactsText>
            <ContactsText>
              Email:
              <br />
              materik08082020@gmail.com
            </ContactsText>
          </ContactsGroup>
          <AccountsGroup svgGroup={techsSvgsGroup} />
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-top: 42px;
  padding-bottom: 42px;

  div > ${FlexWrapper} {
    @media screen and (max-width: 1050px) {
      gap: 40px 40px;
      justify-content: center;
      text-align: center;
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
