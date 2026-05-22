const STORAGE_KEY = 'expenses';

export const getExpenses = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        console.log("Loaded expenses:", data);
        if (!data) return [];

        const parsed = JSON.parse(data);

        return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
        console.error("Failed to parse expenses:", err);
        return [];
    }
};

export const saveExpenses = (expenses) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
        console.error('Save failed:', error);
    }
};

export const clearExpenses = () => {
    localStorage.removeItem(STORAGE_KEY);
};

// export const deleteExpenseFromStorage = (id) => {
//     const expenses = getExpenses();
//     console.log("deete called : ",expenses);
//     const updated = expenses.filter(e => e.id !== id);
//     saveExpenses(updated);
// };

// export const updateExpenseInStorage = (updatedExpense) => {
//     const expenses = getExpenses();

//     const index = expenses.findIndex(e => e.id === updatedExpense.id);

//     if (index !== -1) {
//         expenses[index] = updatedExpense;
//         saveExpenses(expenses);
//     }
// };

export const getCategories = () => [
    "Food",
    "Transportation",
    "Entertainment",
    "Utilities",
    "Healthcare",
    "Education",
    "Personal Care",
    "Miscellaneous",
    "Other"
];