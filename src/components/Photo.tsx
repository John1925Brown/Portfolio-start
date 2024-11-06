import styled from 'styled-components';

type PhotoType = {
  width?: string;
  height?: string;
  radius?: string;
  marginB?: string;
};

export const Photo = styled.img<PhotoType>`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  border-radius: ${(props) => props.radius || '100px'};
  margin-bottom: ${(props) => props.marginB || '0'};
  object-fit: cover;
`;
