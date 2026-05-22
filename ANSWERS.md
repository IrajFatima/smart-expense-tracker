# ANSWERS.md — Technical Assessment

---

## 1. How to Run

**Requirements:**
- Node.js v18+ ([download here](https://nodejs.org/))
- npm (bundled with Node.js)

**Steps on a fresh machine:**

```bash
git clone https://github.com/IrajFatima/smart-expense-tracker.git
cd smart-expense-tracker
npm install
npm run dev
```

Open **http://localhost:5173** in your browser. That's it — no database setup, no environment variables, no additional services.

To run the production build instead:

```bash
npm run build
npm run preview
```

---

## 2. Stack Choice

**Why React + Vite + Bootstrap?**

React's component model is the natural fit here because the same expense data drives multiple parts of the UI simultaneously — the summary cards, the budget alert, the filtered list, and the form all need to stay in sync. Using `useMemo` for the filtered expense list means the filter computation only re-runs when `expenses`, `searchTerm`, or `selectedCategory` actually change, not on every render.

Vite was chosen over Create React App because it starts in under a second and reloads instantly on save. Bootstrap 5 provided a responsive grid and pre-styled components (cards, modals, selects) out of the box, keeping the focus on app logic rather than writing CSS from scratch.

**What would have been a worse choice?**

Plain HTML/CSS/vanilla JS would have been worse here. Managing a dynamic list of expenses — with real-time search, category filtering, inline editing via a modal, and a live budget summary — requires keeping many parts of the UI in sync with the same data. Without a reactive state system, that means writing brittle manual DOM update logic (`innerHTML`, `querySelector`, event delegation) that becomes hard to maintain as features grow. It would have taken significantly more code to achieve the same reliability.

---

## 3. One Real Edge Case

**Edge case: Submitting the form with missing required fields**

**Location:** `src/components/ExpenseForm.jsx` — the `handleSubmit` function, lines 20–23.

```js
if (!formData.title || !formData.amount || !formData.date) {
    toast.warning("Please fill in all fields");
    return;
}
```

The form checks all three required fields — `title`, `amount`, and `date` — before constructing and dispatching a new expense entry. If any of them is empty or falsy, submission is blocked and the user gets an immediate warning toast.

Without this guard, a user could submit with a blank title and zero amount, which would create a silent, invisible-looking entry that still gets persisted to `localStorage` and counted in the total and budget calculations. Particularly problematic is an empty `amount`: `parseFloat("")` returns `NaN`, which would corrupt the `totalExpenses` sum to `NaN` and break the entire summary display. The validation prevents this entirely.

---

## 4. AI Usage

| Where | Tool | What I Asked | What It Gave |
|---|---|---|---|
| Initial scaffold | Claude AI | "Set up a React + Vite project with Bootstrap 5 and localStorage persistence for a CRUD expense tracker" | A working project structure with `App.jsx` managing state, a form component, and localStorage read/write in a service file |
| Filter logic | Claude AI | "Filter the expense list by category and search term without mutating state" | Used `useMemo` wrapping a `.filter()` on the expenses array derived from state, not the state itself |
| Edit modal | Claude AI | "How do I open a modal to edit an existing expense and save changes back to the list?" | `editingExpense` state + `showModal` boolean pattern, passing the selected expense to `EditExpenseModal` and mapping over state on save |
| README.md | Claude AI | "Generate a professional README for my smart expense tracker repo" | A full README with feature table, quick start steps, project structure tree, tech stack table, and persistence explanation |
| ANSWERS.md | Claude AI | "Generate the ANSWERS.md for my technical assessment based on my actual code" | Draft answers for all 5 questions; I corrected Q3 (wrong field referenced), removed the toastify row from Q4 since I implemented that myself, and fixed the "one thing I changed" example to match what's actually in my code |

**One thing I changed:**

For the edit flow, the AI generated a single `handleUpdate` function defined inline inside the `App` component that both updated state and closed the modal in one call. I split this into two separate handlers — `handleUpdateExpense` (updates the list) and `onClose` (closes the modal) — because combining them made the modal impossible to close without saving. Keeping them separate means the close button and the save button are independently controlled, which is the correct UX.

---

## 5. Honest Gap

**What isn't good enough:** The budget is hardcoded.

The monthly budget is set as `const [budget] = useState(50000)` in `App.jsx` with no setter and no UI to change it. Every user is stuck with the same fixed limit of ₹50,000, which makes the budget tracking feature largely cosmetic — it looks functional but isn't actually useful for anyone whose spending doesn't happen to match that number.

**What I'd do with another day:**

I'd make the budget editable via an input in the summary area, and persist it to `localStorage` alongside expenses (in the same service layer already in place via `expenseService.js`). That one change would make the budget alert and remaining balance genuinely meaningful for any user.