import React, { ReactNode } from 'react';
import styles from './Typography.module.css';

export type TypographyProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  type: 'header' | 'text';
  children: ReactNode;
};

const Typography = ({ size, type, children }: TypographyProps): JSX.Element => {
  const sizeTextMap = {
    xs: <p className={`${styles.text} ${styles.textXS}`}>{children}</p>,
    s: <p className={`${styles.text} ${styles.textS}`}>{children}</p>,
    m: <p className={`${styles.text} ${styles.textM}`}>{children}</p>,
    l: <p className={`${styles.text} ${styles.textL}`}>{children}</p>,
    xl: <p className={`${styles.text} ${styles.textXL}`}>{children}</p>,
  };

  const sizeHeaderMap = {
    xs: <h5 className={`${styles.header} ${styles.headerXS}`}>{children}</h5>,
    s: <h4 className={`${styles.header} ${styles.headerS}`}>{children}</h4>,
    m: <h3 className={`${styles.header} ${styles.headerM}`}>{children}</h3>,
    l: <h2 className={`${styles.header} ${styles.headerL}`}>{children}</h2>,
    xl: <h1 className={`${styles.header} ${styles.headerXL}`}>{children}</h1>,
  };

  if (type === 'header') {
    return sizeHeaderMap[size];
  } else {
    return sizeTextMap[size];
  }
};

export default Typography;
