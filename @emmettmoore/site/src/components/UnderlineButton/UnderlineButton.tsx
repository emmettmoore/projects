/* eslint-disable react/jsx-sort-props */
import { Button, ButtonProps } from '@mui/material';

import styles from './UnderlineButton.module.scss';

const UnderlineButton = (props: ButtonProps): JSX.Element => {
  return <Button className={styles.underlineButton} {...props} />;
};

export default UnderlineButton;
