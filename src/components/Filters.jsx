import { useEffect } from "react";
import { getCategories } from "../services/expenseService";

function Filters({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
}) {
    const categories = getCategories();
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search expenses..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(
                                    e.target.value
                                )
                            }
                        >
                            <option value="All">All</option>
                            {categories.map((category) => (
                                <option
                                    key={category}
                                    value={category}
                                >
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;