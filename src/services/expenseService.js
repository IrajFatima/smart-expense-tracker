const STORAGE_KEY = 'expenses';

export const getExpenses = () => {
    try{
        const expenses = localStorage.getItem(STORAGE_KEY);
        return expenses ? JSON.parse(expenses) : [];
    } catch (error) {
        console.error('Error fetching expenses:', error);
        return [];
    }
}

export const saveExpense = (expense) => {
    try {
        const expenses = getExpenses();
        expenses.push(expense);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
        console.error('Error saving expense:', error);
    }
}

export const clearExpenses = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);       
    } catch (error) {
        console.error('Error clearing expenses:', error);
    }   
}

export const deleteExpense = (id) => {
    try {
        const expenses = getExpenses();
        const updatedExpenses = expenses.filter(expense => expense.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedExpenses));
    } catch (error) {
        console.error('Error deleting expense:', error);
    }
}

export const updateExpense = (updatedExpense) => {
    try {
        const expenses = getExpenses(); 
        const index = expenses.findIndex(expense => expense.id === updatedExpense.id);
        if (index !== -1) {
            expenses[index] = updatedExpense;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
        }
    } catch (error) {
        console.error('Error updating expense:', error);
    }
}