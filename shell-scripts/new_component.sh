function newc() {
  COMPONENT_NAME=$1
  TS_FILE="$1.tsx"
  SCSS_FILE="$1.module.scss"
  INDEX_FILE="index.ts"

  mkdir $COMPONENT_NAME
  cd $COMPONENT_NAME

  touch $INDEX_FILE
  echo "import $COMPONENT_NAME from './$COMPONENT_NAME';

export default $COMPONENT_NAME;" >> $INDEX_FILE

  touch $TS_FILE
  echo "import styles from './$SCSS_FILE';

const $COMPONENT_NAME = (): JSX.Element => {
  return (
    <>

    </>
  );

};

export default $COMPONENT_NAME;" >> $TS_FILE

  touch $SCSS_FILE

  cd ..

}
