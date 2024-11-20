import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import React from 'react';
import { S } from './Footer_Styles';

const footerSvgsGroup = [
  {
    width: 35,
    height: 35,
    iconId: 'codeGithub',
    path: 'https://github.com/john1925brown',
  },
  {
    width: 35,
    height: 35,
    iconId: 'codeLinkedin',
    path: 'https://www.linkedin.com/in/dzmitry-yarasheuski-63714a282/',
  },
  {
    width: 35,
    height: 35,
    iconId: 'codeTelegram',
    path: 'https://t.me/John25Brown',
  },
];

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper align="center" content="space-between">
          <S.ContactsGroup>
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
          </S.ContactsGroup>

          <AccountsGroup svgGroup={footerSvgsGroup} />
        </FlexWrapper>
      </Container>
    </S.StyledFooter>
  );
};
