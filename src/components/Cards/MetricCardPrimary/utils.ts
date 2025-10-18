// MetricCardPrimary Utility Functions

import { sizeConfigurations, colorVariants } from './styles';

export const getSizeConfig = (size: 'small' | 'medium' | 'large') => {
  return sizeConfigurations[size];
};

export const getColorVariant = (color: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple') => {
  return colorVariants[color];
};

export const buildContainerStyles = (colorVariant: any, sizeConfig: any, className: string) => {
  return `${colorVariant.background} ${colorVariant.border} border ${sizeConfig.container} ${className}`;
};

export const buildIconStyles = (colorVariant: any, sizeConfig: any) => {
  return `${sizeConfig.iconSize} ${colorVariant.iconBg} ${colorVariant.iconText} ${sizeConfig.iconTextSize}`;
};

