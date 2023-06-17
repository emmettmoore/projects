import { HomePageRoute, ContactRoute, ResumeRoute } from '@site/common/routes';

import {
  Home as HomeIcon,
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
      name: `Home`,
      path: HomePageRoute.getPath({}),
      Icon: HomeIcon,
    },
    {
      name: `Resume`,
      path: ResumeRoute.getPath({}),
      Icon: WorkIcon,
    },
    {
      name: `Contact`,
      path: ContactRoute.getPath({}),
      Icon: MailIcon,
    },
  ];
};
