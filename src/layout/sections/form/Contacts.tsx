import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle title="Contacts" />
        <StyledForm action="#">
          <FlexWrapper direction="column" gap="15px">
            <Field placeholder="Name" />
            <Field placeholder="Email" />
            <Field placeholder="Message" as={'textarea'}></Field>
            <Button type="submit">Send message</Button>
          </FlexWrapper>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  max-width: 540px;
  margin: 0 auto;

  textarea {
    resize: none;
    min-height: 160px;
  }
`;

const Field = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  padding: 5px 0 5px 10px;
  font-size: 16px;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid #4a4a4a;
  color: ${theme.colors.font};

  &:focus-visible {
    outline: 1px solid gray;
  }
`;
