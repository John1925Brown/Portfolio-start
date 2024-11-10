import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const AccountsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 1050px) {
    gap: 30px;
  }
  @media ${theme.media.tablet} {
    gap: 15px;
  }
`;

export const S = {
  AccountsGroup,
};
