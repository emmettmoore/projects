import { Container, ContainerProps } from '@mui/material';
import classNames from 'classnames';

import styles from './PageContainer.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  centered?: boolean;
  maxWidth?: ContainerProps['maxWidth'];
}

const PageContainer = ({
  className,
  children,
  centered = false,
  maxWidth,
}: Props): JSX.Element => {
  return (
    <Container
      className={classNames(className, {
        [styles.leftAligned]: !centered,
      })}
      maxWidth={maxWidth}>
      {children}
    </Container>
  );
};

export default PageContainer;
