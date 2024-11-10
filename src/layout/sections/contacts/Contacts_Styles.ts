import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Form = styled.form`
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

export const S = {
  Field,
  Form,
};
