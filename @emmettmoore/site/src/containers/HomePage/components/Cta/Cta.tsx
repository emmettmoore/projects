import Link from 'next/link';
import { MyWorkRoute } from '@site/common/routes';
import { Button } from '@mui/material';

const Cta = (): JSX.Element => {
  return (
    <Link href={MyWorkRoute.getPath({})}>
      <Button color="secondary" variant="contained">
        My Work
      </Button>
    </Link>
  );
};

export default Cta;
