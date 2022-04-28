import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SideNav from './components/SideNav';
import CustomImageList from './components/CustomImageList';
import Home from './components/Home';
import Scrollbar from 'smooth-scrollbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" sx = {{background: 'black'}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Item><SideNav/></Item>
          </Grid>
          <Grid item xs={10}>
            <Item><Home/></Item>
            <Item><CustomImageList/></Item>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
