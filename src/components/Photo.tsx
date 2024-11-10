import styled from 'styled-components';
import { theme } from '../styles/Theme';

type PhotoType = {
  width?: string;
  widthTablet?: string;
  widthMobile?: string;
  height?: string;
  heightTablet?: string;
  heightMobile?: string;
  radius?: string;
  marginB?: string;
};

export const Photo = styled.img<PhotoType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius || '100px'};
  margin-bottom: ${(props) => props.marginB || '0'};
  object-fit: cover;

  @media ${theme.media.tablet} {
    height: ${(props) => props.heightTablet || props.height};
    width: ${(props) => props.widthTablet || props.width};
  }

  @media ${theme.media.mobile} {
    height: ${(props) => props.heightMobile || '100px'};
    width: ${(props) => props.widthMobile || '100px'};
  }
`;
