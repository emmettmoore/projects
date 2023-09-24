import { Typography } from '@mui/material';

interface Props {
  items: Array<{
    absoluteUrl?: string;
    title: string;
  }>;
}

const List = ({ items }: Props): JSX.Element => {
  return (
    <ul>
      {items.map(({ absoluteUrl, title }) => {
        return (
          <li key={title}>
            <Typography variant="body2">
              {absoluteUrl ? <a href={absoluteUrl}>{title}</a> : title}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
