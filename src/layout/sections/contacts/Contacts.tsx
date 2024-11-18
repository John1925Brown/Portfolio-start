import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import React, { ElementRef, useRef } from 'react';
import { S } from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_hmzhemm', 'template_h5gz0x8', form.current, {
        publicKey: 'nTCkW6lkQpeSLDNcU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id={'contact'}>
      <Container>
        <SectionTitle title="Contacts" />
        <S.Form ref={form} onSubmit={sendEmail}>
          <FlexWrapper direction="column" gap="15px">
            <S.Field required placeholder="Name" name={'user_name'} />
            <S.Field required placeholder="Email" name={'email'} />
            <S.Field
              required
              placeholder="Message"
              as={'textarea'}
              name={'message'}
            ></S.Field>
            <Button type="submit">Send message</Button>
          </FlexWrapper>
        </S.Form>
      </Container>
    </section>
  );
};
