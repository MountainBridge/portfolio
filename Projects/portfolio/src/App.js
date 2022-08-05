import './App.css';
import Gottolove from './components/Gottolove.js';
import Closures from './components/Closures.js';
import IIFE from './components/IIFE.js';
import Scopes from './components/Scopes.js';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <ResponsiveAppBar></ResponsiveAppBar>
      <header className="App-header">
      <span class="circle">
        <img src={require('./assets/girl_remote.gif')}/>
        </span>
        <p class="font"><b>Hello, my name is Nidhi. I am a web developer and designer based out of India.</b></p>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
