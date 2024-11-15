import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Icon } from '../../../components/icon/Icon';

type SlydePropsType = {
  iconId: string;
  width: number;
  height: number;
  title: string;
};
const Slide = (props: SlydePropsType) => {
  return (
    <Icon
      iconId={props.iconId}
      width={props.width}
      height={props.height}
      title={props.title}
    />
  );
};

const items = [
  <Slide iconId={'codeFigma'} width={200} height={200} title={'Figma'} />,
  <Slide
    iconId={'codeGitHubColor'}
    width={200}
    height={200}
    title={'Github'}
  />,
  <Slide iconId={'codeNpm'} width={200} height={200} title={'Npm'} />,
];

export const Carousel = () => <AliceCarousel mouseTracking items={items} />;
