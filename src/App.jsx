import { useEffect, useState, useMemo } from 'react';

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryCards from "./components/SummaryCards";
import BudgetAlert from "./components/BudgetAlert";
import Filters from "./components/Filters";
import EditExpenseModal from "./components/EditExpenseModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import {
  getExpenses,
  saveExpenses,
  clearExpenses
} from './services/expenseService';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget] = useState(50000);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingExpense, setEditingExpense] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setShowModal(true);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses(prev =>
      prev.map(e =>
        e.id === updatedExpense.id ? updatedExpense : e
      )
    );
  };

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
    toast.success("Expense added");
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
    toast.success("Expense deleted");
  };
  const handleClearAll = () => {
    const confirmed = window.confirm(
      "Clear all expenses?"
    );

    if (!confirmed) return;

    setExpenses([]);
    toast.success("All expenses cleared");
  };

  const updateExpenseHandler = (updatedExpense) => {
    setExpenses(prev =>
      prev.map(e =>
        e.id === updatedExpense.id ? updatedExpense : e
      )
    );
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter(expense => {
      const matchesSearch =
        expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || expense.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [expenses, searchTerm, selectedCategory]);

  const totalExpenses = filteredExpenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  const remainingBudget = budget - totalExpenses;

  return (
    <div className="container py-4 min-vh-100">
      <div className="text-center mb-4 glass p-4">
        <h1 className="fw-bold mb-1" style={{ color: "var(--accent)" }}>
          Smart Expense Tracker
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Track spending, control budget, optimize decisions
        </p>
      </div>
      <div className="glass p-3 mb-3">
        <SummaryCards
          totalExpenses={totalExpenses}
          remainingBudget={remainingBudget}
          totalTransactions={filteredExpenses.length}
        />
      </div>

      <BudgetAlert
        totalExpenses={totalExpenses}
        budget={budget}
      />

      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-danger"
          onClick={handleClearAll}
        >
          Clear All Expenses
        </button>
      </div>
      <div className="row">

        <div className="col-md-4">
          <div className="glass p-3">
            <ExpenseForm onAddExpense={addExpense} />
          </div>
        </div>

        <div className="col-md-8">
          <div className="glass p-3 mb-3">
            <Filters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="glass p-3">
            <ExpenseList
              expenses={filteredExpenses}
              onDelete={deleteExpense}
              onEdit={handleEdit}
            />
          </div>
        </div>
      </div>
      <EditExpenseModal
        show={showModal}
        expense={editingExpense}
        onClose={() => setShowModal(false)}
        onSave={handleUpdateExpense}
      />
      <ToastContainer position="top-right" autoClose={2000} theme='dark'/>
    </div>
  );
}

export default App;