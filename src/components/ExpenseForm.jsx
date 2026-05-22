import {useState} from 'react';
import {toast} from 'react-toastify';
const categories = [
    "Food",
    "Transportation",
    "Entertainment",
    "Utilities",
    "Healthcare",
    "Education",
    "Personal Care",
    "Miscellaneous",
    "Other"
]
function ExpenseForm({onAddExpense}) {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
        category: 'Food'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

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
            date: '',
            category: 'Food'
        });
    }

    return (
        <div className='card shadow-sm'>
            <div className='card-body'>
                <h4 className='mb-3'>Add Expense</h4>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input type='text' className='form-control' name='title' value={formData.title} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Amount</label>
                        <input type='number' className='form-control' name='amount' value={formData.amount} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Date</label>
                        <input type='date' className='form-control' name='date' value={formData.date} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Category</label>
                        <select className='form-control' name='category' value={formData.category} onChange={handleChange}>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>
                        Add Expense
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ExpenseForm;