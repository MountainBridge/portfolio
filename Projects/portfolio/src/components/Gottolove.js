import './gottolove.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Input = () => <input placeholder = "Add Algorithm here"/>;

const Form = () => [inputList, setInputList] = useState([]);

const onAddButtonClick = event => setInputList(inputList.concat(<Input key = {inputList.length}/>));

function Gottolove() {
return (
  <div class="card" id="Gottolove">
    <h1>Data Structures and Algorithms</h1>
    <React.Fragment>
    <button onClick = {onAddButtonClick}>Add Algorithm</button>
      {inputList}
    </React.Fragment>
  </div>
  );
}

export default Gottolove;
