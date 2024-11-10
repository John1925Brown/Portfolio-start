import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

type TypeImage = {
  iconId: string;
  width: number;
  height: number;
};

export const AccountsGroup = (props: { svgGroup: Array<TypeImage> }) => {
  return (
    <StyledAccountsGroup>
      {props.svgGroup.map((image, index) => {
        return (
          <a href="#" key={index}>
            <Icon
              iconId={image.iconId}
              width={image.width}
              height={image.height}
            />
          </a>
        );
      })}
    </StyledAccountsGroup>
  );
};

// Поменять гэп!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const StyledAccountsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 1050px) {
    gap: 30px;
  }

  /* @media ${theme.media.tablet} {
    gap: 15px;
  } */
`;
