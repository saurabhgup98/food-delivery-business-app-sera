// MetricCardPrimary - Displays statistical information with icon, title, subtitle, value, and change

import React from 'react';
import { MetricCardPrimaryProps, MetricCardData, MetricCardStyles } from './types';
import { getSizeConfig, getColorVariant, buildContainerStyles, buildIconStyles } from './utils';
import { baseStyles } from './styles';

const MetricCardPrimary: React.FC<MetricCardPrimaryProps> = (props) => {
  const {
    icon,
    title,
    subtitle,
    value,
    change,
    color,
    size = 'medium',
    className = ''
  } = props;

  // Get configurations
  const sizeConfig = getSizeConfig(size);
  const colorVariant = getColorVariant(color);

  // Prepare data object
  const cardData: MetricCardData = {
    icon,
    title,
    subtitle,
    value,
    change,
    color
  };

  // Prepare styles object
  const styles: MetricCardStyles = {
    container: buildContainerStyles(colorVariant, sizeConfig, className),
    icon: buildIconStyles(colorVariant, sizeConfig),
    title: `${baseStyles.title} ${sizeConfig.titleSize}`,
    subtitle: `${baseStyles.subtitle} ${colorVariant.subtitle} ${sizeConfig.subtitleSize}`,
    value: `${baseStyles.value} ${sizeConfig.valueSize}`,
    change: `${baseStyles.change} ${colorVariant.change} ${sizeConfig.changeSize}`,
    textRight: baseStyles.textRight
  };

  return (
    <div className={`${baseStyles.container} ${styles.container}`}>
      <div className="flex items-center space-x-3">
        <div className={`${baseStyles.iconContainer} ${styles.icon}`}>
          <span>{cardData.icon}</span>
        </div>
        <div>
          <p className={styles.title}>{cardData.title}</p>
          <p className={styles.subtitle}>{cardData.subtitle}</p>
        </div>
      </div>
      <div className={styles.textRight}>
        <p className={styles.value}>{cardData.value}</p>
        <p className={styles.change}>{cardData.change}</p>
      </div>
    </div>
  );
};

export default MetricCardPrimary;