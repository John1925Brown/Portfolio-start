import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const AccountsGroup = () => {
  return (
    <StyledAccountsGroup>
      <a href="#">
        <Icon iconId={'codeGithub'} width={35} height={30} />
      </a>
      <a href="#">
        <Icon iconId={'codeLinkedin'} width={35} height={30} />
      </a>
      <a href="#">
        <Icon iconId={'codeTelegram'} width={35} height={30} />
      </a>
    </StyledAccountsGroup>
  );
};

const StyledAccountsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
