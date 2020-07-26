import React from 'react';
import './App.css';
import ElemComp from './components/ElemComp';
import Comp from './components/Comp';
import CompFunc from './components/CompFunc';
import PureComp from './components/PureComp';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="App-container">
        <p>Difference type of create React component: </p>
        <ElemComp />
        <Comp />
        <CompFunc />
        <PureComp compName={'React Pure Component'} />
      </div>
    </div>
  );
}

export default App;
