import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//adind state to our component using React hooks

function App(){
  console.log(useState);
  //below const destructures to get the state variable = 'status' and function used to change the status = 'setStatus'
  const [status, setStatus] = useState("Not delivered");
 return(
   <div>
   <h1>The package is: {status}</h1>
   <button onClick = {() => setStatus('Delivered')}>
   Deliver
   </button>
   </div>
 )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
