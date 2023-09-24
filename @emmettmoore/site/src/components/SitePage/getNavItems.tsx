import { ContactRoute, MyWorkRoute } from '@site/common/routes';

import {
  Work as WorkIcon,
  Mail as MailIcon,
  SvgIconComponent,
} from '@mui/icons-material';
export interface NavItem {
  name: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Icon: SvgIconComponent;
}

export default (): Array<NavItem> => {
  return [
    {
      name: `My Work`,
      path: MyWorkRoute.getPath({}),
      Icon: WorkIcon,
    },
    {
      name: `Contact`,
      path: ContactRoute.getPath({}),
      Icon: MailIcon,
    },
  ];
};
