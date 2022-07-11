import './App.css';
import Gottolove from './components/Gottolove.js';
import Closures from './components/Closures.js';
import IIFE from './components/IIFE.js';
import Scopes from './components/Scopes.js';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <span class="circle">
        <img src={require('./assets/girl_remote.gif')}/>
        </span>
        <p class="font"><b>Hello, my name is Nidhi. I am a web developer and designer based out of India.</b></p>
        <Link to="#Gottolove" smooth>Got to love</Link>
        <Link to="#Closures" smooth>Closures</Link>
        <Link to="#IIFE" smooth>IIFE</Link>
        <Link to="#Scopes" smooth>Scopes</Link>
      </header>
      <Gottolove />
      <Closures />
      <IIFE />
      <Scopes />
    </div>
    </BrowserRouter>
  );
}

export default App;
