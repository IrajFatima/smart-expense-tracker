import { useState } from 'react';
import { toast } from 'react-toastify';
import { getCategories } from '../services/expenseService';

function ExpenseForm({ onAddExpense }) {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: 'Food'
    });

    const categories = getCategories();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.amount || !formData.date) {
            toast.warning("Please fill in all fields");
            return;
        }

        const newExpense = {
            id: Date.now(),
            ...formData,
            amount: parseFloat(formData.amount),
            createdAt: new Date().toISOString()
        };

        onAddExpense(newExpense);

        setFormData({
            title: '',
            amount: '',
            date: new Date().toISOString().split('T')[0],
            category: 'Food'
        });
    };

    return (
        <div className="glass p-3">
            <h5 className="mb-3" style={{ color: "var(--text)" }}>
                Add Expense
            </h5>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="form-control mb-2"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <input
                    type="number"
                    className="form-control mb-2"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                />

                <input
                    type="date"
                    className="form-control mb-2"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <select
                    className="form-control mb-3"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <button type="submit" className="btn w-100">
                    Add Expense
                </button>

            </form>
        </div>
    );
}

export default ExpenseForm;