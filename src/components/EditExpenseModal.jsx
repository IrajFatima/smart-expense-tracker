import { useEffect, useState } from "react";
import { getCategories } from "../services/expenseService";

function EditExpenseModal({ show, onClose, expense, onSave }) {
    const [formData, setFormData] = useState({
        id: null,
        title: "",
        amount: "",
        date: "",
        category: "Food",
    });

    const categories = getCategories();

    useEffect(() => {
        if (expense) {
            setFormData({
                id: expense.id,
                title: expense.title,
                amount: expense.amount,
                date: expense.date,
                category: expense.category,
            });
        }
    }, [expense]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.amount || !formData.date) return;

        onSave({
            ...formData,
            amount: parseFloat(formData.amount),
        });

        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Edit Expense</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">

                        <input
                            className="form-control mb-2"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Title"
                        />

                        <input
                            className="form-control mb-2"
                            name="amount"
                            type="number"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount"
                        />

                        <input
                            className="form-control mb-2"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                        <select
                            className="form-select"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditExpenseModal;