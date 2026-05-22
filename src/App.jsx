import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './App.css'

import { getExpenses,saveExpense } from './services/expenseService';

function App() {
  const [expenses, setExpenses] = useState(getExpenses());
  
  useEffect(()=>{
    const storedExpenses = getExpenses();
    setExpenses(storedExpenses);
  },[]);

  useEffect(()=>{
    saveExpense(expenses);
  },[expenses]);

  const addExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  }

  return (
    <>
      <div className="container py-4">
        <h1 className="text-center mb-4">
          Smart Expense Tracker
        </h1>
        <div className="row">
          <div className="col-md-4">
            <ExpenseForm onAddExpense={addExpense} />
          </div>
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>Expenses</h4>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
