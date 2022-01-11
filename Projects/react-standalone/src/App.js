import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
function App(props) {
  return (
    <div className="App">
    <Button variant="contained">Hello {props.name} !</Button>
    </div>
  );
}

export default App;
