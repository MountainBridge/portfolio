import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SideNav from './components/SideNav';
import ImageList from './components/ImageList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Item><SideNav/></Item>
          </Grid>
          <Grid item xs={10}>
            <Item><ImageList/></Item>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
