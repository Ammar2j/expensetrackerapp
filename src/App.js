import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/Globalstate';


import './App.css';

function App() {
  return (
    <GlobalProvider> 
      <Header />
      <div className = "container">
        <Balance />
        <IncomeExpenses />
        <History />
        <AddTransaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
