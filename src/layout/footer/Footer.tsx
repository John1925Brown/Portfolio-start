import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import React from 'react';
import { S } from './Footer_Styles';

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

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper align="center" content="space-between">
          <S.ContactsText>
            Call me:
            <br />
            452-622-803
          </S.ContactsText>
          <S.ContactsText>
            Email:
            <br />
            materik08082020@gmail.com
          </S.ContactsText>
          <AccountsGroup svgGroup={techsSvgsGroup} />
        </FlexWrapper>
      </Container>
    </S.StyledFooter>
  );
};
