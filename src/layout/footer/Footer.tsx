import styled from 'styled-components';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { FlexWrapper } from '../../components/FlexWrapper';

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
      <FlexWrapper align="center" content="space-between">
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
        <AccountsGroup svgGroup={techsSvgsGroup} />
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 80%;
  margin: 0 auto;
  padding-top: 42px;
  padding-bottom: 42px;
`;

const ContactsText = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: #fff;
`;
