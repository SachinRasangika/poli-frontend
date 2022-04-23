import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Collector from './components/collector';
import Sidebar from './components/sidebar'
import Client from './components/client';
import signaturePad from 'react-signature-canvas';
import Loan from './components/Loan';
import Bond from './components/Bond';

function App() {
  return (
    <div className="App">
      {/* <Contact />
      <Collector /> */}     
      <Sidebar/> 
      {/* <Client /> */}
      {/* <Loan /> */}
      <Bond/>
      
      
    </div>
  );
}

export default App;
