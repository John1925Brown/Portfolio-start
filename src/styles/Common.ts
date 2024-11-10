import { theme } from './Theme';

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({ family, weight, color, Fmin, Fmax }: FontPropsType) => `
font-weight: ${weight || 500};
  font-family: ${family || 'Poppins'};
  color: ${color || theme.colors.font};
  font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
  `;
