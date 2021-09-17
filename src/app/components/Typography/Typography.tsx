import React, { ReactNode } from 'react';
import styles from './Typography.module.css';

export type TypographyProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  type: 'header' | 'text';
  children: ReactNode;
  className?: string;
};

const Typography = ({
  size = 'm',
  type = 'text',
  children,
  className,
}: TypographyProps): JSX.Element => {
  const sizeTextMap = {
    xs: (
      <p className={`${styles.text} ${styles.textXS} ${className}`}>
        {children}
      </p>
    ),
    s: (
      <p className={`${styles.text} ${styles.textS} ${className}`}>
        {children}
      </p>
    ),
    m: (
      <p className={`${styles.text} ${styles.textM} ${className}`}>
        {children}
      </p>
    ),
    l: (
      <p className={`${styles.text} ${styles.textL} ${className}`}>
        {children}
      </p>
    ),
    xl: (
      <p className={`${styles.text} ${styles.textXL} ${className}`}>
        {children}
      </p>
    ),
  };

  const sizeHeaderMap = {
    xs: (
      <h5 className={`${styles.header} ${styles.headerXS} ${className}`}>
        {children}
      </h5>
    ),
    s: (
      <h4 className={`${styles.header} ${styles.headerS} ${className}`}>
        {children}
      </h4>
    ),
    m: (
      <h3 className={`${styles.header} ${styles.headerM} ${className}`}>
        {children}
      </h3>
    ),
    l: (
      <h2 className={`${styles.header} ${styles.headerL} ${className}`}>
        {children}
      </h2>
    ),
    xl: (
      <h1 className={`${styles.header} ${styles.headerXL} ${className}`}>
        {children}
      </h1>
    ),
  };

  if (type === 'header') {
    return sizeHeaderMap[size];
  } else {
    return sizeTextMap[size];
  }
};

export default Typography;
