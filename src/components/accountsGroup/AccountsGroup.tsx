import styled from 'styled-components';
import { Icon } from '../icon/Icon';

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
  gap: 25px;
`;
