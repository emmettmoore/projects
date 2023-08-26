import styles from './PageContent.module.scss';
import classNames from 'classnames';

interface Props {
  bottomPadding?: `normal` | `none`;
  children: React.ReactNode;
  topPadding?: `normal` | `none`;
  className?: string;
}

const PageContent = ({
  bottomPadding = `normal`,
  children,
  className,
  topPadding = `normal`,
}: Props): JSX.Element => {
  const bottomPaddingClasses: { [key in typeof bottomPadding]: string } = {
    normal: styles.normalBottomPadding,
    none: styles.noBottomPadding,
  };

  const topPaddingClasses: { [key in typeof topPadding]: string } = {
    normal: styles.normalTopPadding,
    none: styles.noTopPadding,
  };

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

export default PageContent;
