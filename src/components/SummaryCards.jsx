function SummaryCards({ totalExpenses, remainingBudget, totalTransactions }) {
    return (
        <div className="row mb-4">

            <div className="col-md-4 mb-3">
                <div className="glass p-3">
                    <h6 style={{ color: "var(--muted)" }}>Total Expenses</h6>
                    <h3 style={{ color: "var(--text)" }}>
                        Rs. {totalExpenses.toFixed(2)}
                    </h3>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <div className="glass p-3">
                    <h6 style={{ color: "var(--muted)" }}>Remaining Budget</h6>
                    <h3 style={{ color: "var(--text)" }}>
                        Rs. {remainingBudget}
                    </h3>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <div className="glass p-3">
                    <h6 style={{ color: "var(--muted)" }}>Transactions</h6>
                    <h3 style={{ color: "var(--text)" }}>
                        {totalTransactions}
                    </h3>
                </div>
            </div>

        </div>
    );
}

export default SummaryCards;