import React , {useState} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CreditPage } from './pages/creditspage'; 
import { Header } from './components/header';
import { DarkHeader } from './components/headerdark';
;

function App() {
 
  return (
    <div className="App">
      
     <BrowserRouter>
     <Header />
      <CreditPage/>
      
     
      
  </BrowserRouter> 
    </div>
  );
}

export default App;
