import iconsSprite from '../../assets/images/items-sprite.svg';

type IconPropsType = {
  iconId: string;
  width?: number;
  height?: number;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
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
};
