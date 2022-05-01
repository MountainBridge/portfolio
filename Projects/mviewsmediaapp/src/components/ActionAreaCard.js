import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image="./assets/lady_sunset.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            Lady at Sunset
          </Typography>
          <Typography variant="body2" color="text.secondary">
            'Lady at Sunset' is an inspiring art.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
