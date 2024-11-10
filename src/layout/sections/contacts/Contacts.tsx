import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import React from 'react';
import { S } from './Contacts_Styles';

export const Contacts: React.FC = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Contacts" />
        <S.Form action="#">
          <FlexWrapper direction="column" gap="15px">
            <S.Field placeholder="Name" />
            <S.Field placeholder="Email" />
            <S.Field placeholder="Message" as={'textarea'}></S.Field>
            <Button type="submit">Send message</Button>
          </FlexWrapper>
        </S.Form>
      </Container>
    </section>
  );
};
