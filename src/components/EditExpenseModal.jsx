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
        <div
            className="modal d-block"
            tabIndex="-1"
            style={{
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(6px)"
            }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div
                    className="modal-content glass"
                    style={{
                        border: "1px solid var(--glass-border)",
                        background: "rgba(15, 18, 25, 0.85)",
                        color: "var(--text)"
                    }}
                >

                    <div className="modal-header border-0">
                        <h5
                            className="modal-title"
                            style={{ color: "var(--text)" }}
                        >
                            Edit Expense
                        </h5>

                        <button
                            className="btn-close btn-close-white"
                            onClick={onClose}
                        />
                    </div>

                    <div className="modal-body">

                        <input
                            className="form-control mb-2"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Title"
                            style={inputStyle}
                        />

                        <input
                            className="form-control mb-2"
                            name="amount"
                            type="number"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount"
                            style={inputStyle}
                        />

                        <input
                            className="form-control mb-2"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <select
                            className="form-select"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            style={inputStyle}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="modal-footer border-0">

                        <button
                            className="btn"
                            onClick={onClose}
                            style={secondaryBtn}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn"
                            onClick={handleSubmit}
                            style={primaryBtn}
                        >
                            Save Changes
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--text)",
    backdropFilter: "blur(10px)"
};

const primaryBtn = {
    background: "rgba(79,156,255,0.2)",
    border: "1px solid rgba(79,156,255,0.4)",
    color: "#4f9cff",
    backdropFilter: "blur(10px)"
};

const secondaryBtn = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--muted)",
    backdropFilter: "blur(10px)"
};

export default EditExpenseModal;