import styled from 'styled-components';
import iconsSprite from '../../assets/images/items-sprite.svg';
import { font } from '../../styles/Common';

type IconPropsType = {
  iconId: string;
  width?: number;
  height?: number;
  viewBox?: string;
  title?: string;
};

export const Icon = (props: IconPropsType) => {
  if (props.title) {
    return (
      <div>
        <svg
          width={props.width || 35}
          height={props.height || 30}
          viewBox={props.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>

        <Title>{props.title}</Title>
      </div>
    );
  } else {
    return (
      <svg
        width={props.width || 35}
        height={props.height || 30}
        viewBox={props.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
    );
  }
};

const Title = styled.h3`
  margin: 0 auto;
  ${font({ weight: 600, Fmax: 34, Fmin: 24 })}
`;
