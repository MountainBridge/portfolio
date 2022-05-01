import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: '100%',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      gap={2}
    >
      {itemData.map((item) => {
        const cols = 1;
        const rows = 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 500, 500, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: './assets/lighthouse.gif',
    featured: true,
  },
  {
    img: './assets/desert.jpeg'
  },
  {
    img: './assets/ApollloFertilityYogaday.png'
  },
  {
    img: './assets/ApolloFertility.png'
  },
  {
    img: './assets/ValleyOfthestars.png',
    featured: true,
  },
  {
    img: './assets/house_sunset.png',
    featured: true,
  },
  {
    img: './assets/aRT1.png',
    featured: true,
  },

  {
    img: './assets/Building.png'
  },
  {
    img: './assets/Donut.png',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: './assets/car_classy.png',
  },
  {
    img: './assets/flamingo1.gif'
  },
  {
    img: './assets/Miami.png'
  },
];
