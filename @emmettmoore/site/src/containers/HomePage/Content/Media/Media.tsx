import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import List from './List';
import MediaChip from './MediaChip';

type BookType = `love` | `reading`;

interface Item {
  title: string;
  author?: string;
}

interface MediaContent {
  title: string;
  items: Array<Item>;
}

const getBooks = (selectedMedia: BookType): MediaContent => {
  const mapping: { [key in BookType]: MediaContent } = {
    love: {
      title: `Books I Love`,
      items: [
        { title: `Why Zebras Don’t Get Ulcers`, author: `Robert Sapolsky` },
        { title: `The Hard Thing about Hard Things`, author: `Ben Horowitz` },
      ],
    },
    reading: {
      title: `Books I'm Reading`,
      items: [
        { title: `A World on the Wing`, author: `Scott Weidensaul` },
        { title: `The Weather Machine`, author: `Andrew Blum` },
        {
          title: `Designing Data Intensive Applications`,
          author: `Martin Kleppmann`,
        },
      ],
    },
  };

  return mapping[selectedMedia];
};

const getPodcasts = (): MediaContent => {
  return {
    title: `Podcasts`,
    items: [
      { title: `Odd Lots` },
      { title: `Good One` },
      { title: `Minds Behind Maps` },
      { title: `Upswing Level Up Podcast` },
    ],
  };
};

const getNewsletters = (): MediaContent => {
  return {
    title: `Newsletters`,
    items: [
      { title: `Axios Pro Rata` },
      { title: `Money Stuff` },
      { title: `Serious Eats` },
      { title: `Typescript Weekly` },
    ],
  };
};

const Media = (): JSX.Element => {
  const [selectedBookType, setSelectedBookType] = useState<BookType>(`love`);
  const [weeklyMedia, setWeeklyMedia] = useState<`podcasts` | `newsletters`>(
    `podcasts`
  );
  const books = getBooks(selectedBookType);
  const podcasts = getPodcasts();
  const newsletters = getNewsletters();
  return (
    <>
      <Typography variant="h4">Books</Typography>
      <Box sx={{ display: 'flex', gap: 1, mt: 2, mb: 2 }}>
        <MediaChip
          active={selectedBookType === `love`}
          label="Ones I Love"
          onClick={(): void => {
            setSelectedBookType(`love`);
          }}
        />
        <MediaChip
          active={selectedBookType === `reading`}
          label="Ones I’m Reading"
          onClick={(): void => {
            setSelectedBookType(`reading`);
          }}
        />
      </Box>
      <List items={books.items} />
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">How I Stay Informed</Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2, mb: 2 }}>
          <MediaChip
            active={weeklyMedia === `podcasts`}
            label="Podcasts"
            onClick={(): void => {
              setWeeklyMedia(`podcasts`);
            }}
          />
          <MediaChip
            active={weeklyMedia === `newsletters`}
            label="Newsletters"
            onClick={(): void => {
              setWeeklyMedia(`newsletters`);
            }}
          />
        </Box>
        <List
          items={
            weeklyMedia === `podcasts` ? podcasts.items : newsletters.items
          }
        />
      </Box>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Inspiration for this site</Typography>
        <List
          items={[
            {
              title: `Worry Dream (Bret Victor)`,
              absoluteUrl: `http://www.worrydream.com`,
            },
            {
              title: `Jonathan Tushman`,
              absoluteUrl: `http://www.tushman.com`,
            },
          ]}
        />
      </Box>
    </>
  );
};

export default Media;
