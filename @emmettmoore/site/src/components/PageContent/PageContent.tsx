import styles from './PageContent.module.scss';
import classNames from 'classnames';

import { Box } from '@mui/material';

interface Props {
  bottomPadding?: `normal` | `none`;
  children: React.ReactNode;
  topPadding?: `normal` | `none`;
  className?: string;
  align?: `left` | `center`;
}

const PageContent = ({
  bottomPadding = `normal`,
  children,
  className,
  topPadding = `normal`,
  align = `center`,
}: Props): JSX.Element => {
  const bottomPaddingClasses: { [key in typeof bottomPadding]: string } = {
    normal: styles.normalBottomPadding,
    none: styles.noBottomPadding,
  };

  const topPaddingClasses: { [key in typeof topPadding]: string } = {
    normal: styles.normalTopPadding,
    none: styles.noTopPadding,
  };

  const renderContent = (): JSX.Element => {
    return (
      <div
        className={classNames(
          styles.pageContent,
          className,
          bottomPaddingClasses[bottomPadding],
          topPaddingClasses[bottomPadding]
        )}>
        {children}
      </div>
    );
  };

  if (align === `center`) {
    return (
      <Box sx={{ margin: `0 auto`, maxWidth: 750 }}>{renderContent()}</Box>
    );
  }

  if (align === `left`) {
    return renderContent();
  }

  const exhaustiveCheck: never = align;

  return exhaustiveCheck;
};

export default PageContent;
