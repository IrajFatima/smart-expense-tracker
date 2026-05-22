function BudgetAlert({ totalExpenses, budget }) {
    if (totalExpenses <= budget) return null;

    const exceeded = totalExpenses - budget;

    return (
        <div
            className="glass p-3 mb-3"
            style={{
                borderLeft: "4px solid rgba(255, 77, 77, 0.8)"
            }}
        >
            <div className="d-flex align-items-center justify-content-between">

                <div>
                    <div style={{ color: "#ff6b6b", fontWeight: 600 }}>
                        Budget Exceeded
                    </div>

                    <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                        You have crossed your planned limit.
                    </div>
                </div>

                <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#ff6b6b", fontWeight: 700 }}>
                        Rs. {exceeded}
                    </div>

                    <div style={{ color: "var(--muted)", fontSize: "0.75rem" }}>
                        over budget
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetAlert;