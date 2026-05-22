import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
    if (expenses.length === 0) {
        return (
            <div className="glass p-3 text-center" style={{ color: "var(--muted)" }}>
                No expenses added yet.
            </div>
        );
    }

    return (
        <div className="glass p-3">
            <h5 className="mb-3" style={{ color: "var(--text)" }}>
                Expense History
            </h5>

            <div className="table-responsive">
                <table className="table mb-0" style={{ color: "var(--text)" }}>
                    <thead>
                        <tr style={{ color: "var(--muted)" }}>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.map((expense) => (
                            <ExpenseItem
                                key={expense.id}
                                expense={expense}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ExpenseList;