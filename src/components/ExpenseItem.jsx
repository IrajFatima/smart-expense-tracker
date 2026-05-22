function ExpenseItem({ expense, onDelete, onEdit }) {
    return (
        <tr style={{ color: "var(--text)" }}>
            <td>{expense.title}</td>
            <td>Rs. {expense.amount}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>
                <button className="btn btn-sm me-2" style={editBtn} onClick={() => onEdit(expense)}>
                    Edit
                </button>

                <button className="btn btn-sm" style={deleteBtn} onClick={() => onDelete(expense.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

const editBtn = {
    background: "rgba(79,156,255,0.15)",
    border: "1px solid rgba(79,156,255,0.35)",
    color: "var(--accent)"
};

const deleteBtn = {
    background: "rgba(255,77,77,0.12)",
    border: "1px solid rgba(255,77,77,0.3)",
    color: "#ff6b6b"
};

export default ExpenseItem;