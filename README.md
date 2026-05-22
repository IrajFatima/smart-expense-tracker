# 💸 Smart Expense Tracker

> A persistent, full-featured expense management web app built with **React 19 + Vite + Bootstrap 5**. Track spending, set budgets, filter by category, and keep all your data between sessions — no backend required.

---

## 🌐 Live Demo

🔗 https://IrajFatima.github.io/smart-expense-tracker

---


## ✨ Features

| Feature | Description |
|---|---|
| ➕ Add / Edit / Delete Expenses | Full CRUD on expense entries |
| 🗂️ Category Filtering | Filter expenses by category in real time |
| 📊 Budget Tracking | Set a monthly budget and see live remaining balance |
| 💾 Local Storage Persistence | Data survives page refreshes and browser restarts |
| 🔔 Toast Notifications | Instant feedback on every action via `react-toastify` |
| 📱 Responsive UI | Bootstrap 5 grid — works on mobile, tablet, and desktop |

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) **v18 or higher**
- **npm** (comes bundled with Node.js)

### Run in 3 steps

```bash
# 1. Clone the repository
git clone https://github.com/IrajFatima/smart-expense-tracker.git
cd smart-expense-tracker

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser and visit **http://localhost:5173**

---

## 🏗️ Build for Production

```bash
npm run build       # Outputs optimised files to /dist
npm run preview     # Preview the production build locally
```

---

## 🗂️ Project Structure

```
smart-expense-tracker/
├── index.html          # App entry point
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint rules
└── src/
    ├── main.jsx        # React root mount
    ├── App.jsx         # Root component & state
    ├── components/     # UI components
    └── assets/         # Static assets
```

---

## 🛠️ Tech Stack

| Layer | Choice | Why |
|---|---|---|
| UI Library | React 19 | Component model, hooks, fast rendering |
| Build Tool | Vite 8 | Instant HMR, zero-config, ESM-first |
| Styling | Bootstrap 5 + Bootstrap Icons | Responsive grid, pre-built components |
| Notifications | react-toastify | Non-intrusive, accessible alerts |
| Persistence | Browser `localStorage` | Zero-dependency, survives restarts |

---

## 📦 Available Scripts

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 💡 How Persistence Works

All expense entries and the monthly budget are serialised to **`localStorage`** on every state change. When the app loads, it reads from `localStorage` first — so your data is always there when you come back, even after closing the browser.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push and open a Pull Request

---

## 📄 License

This project is open source. Feel free to fork and adapt it.
