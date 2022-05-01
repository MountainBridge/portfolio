import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ActionAreaCard from './ActionAreaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item xs={{maxHeight:'90%'}}>
            <b style={{fontSize: '40px'}}>Mviews Media</b>
              <p>Manifesting ideas into reality.</p>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item><ActionAreaCard/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
