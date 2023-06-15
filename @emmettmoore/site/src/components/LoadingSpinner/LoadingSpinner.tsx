import { CircularProgress } from '@mui/material';
import classNames from 'classnames';

import styles from './LoadingSpinner.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  disablePadding?: boolean;
}

const LoadingSpinner = ({
  className,
  disablePadding,
  ...otherProps
}: Props): JSX.Element => {
  return (
    <div
      className={classNames(styles.container, className, {
        [styles.disablePadding]: disablePadding,
      })}
      {...otherProps}>
      <CircularProgress color="primary" size={40} />
    </div>
  );
};

export default LoadingSpinner;
