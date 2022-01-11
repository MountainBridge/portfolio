import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
function App({name}) {
  return (
    <div className="App">
    <Button variant="contained">Hello {name} !</Button>
    </div>
  );
}

export default App;
