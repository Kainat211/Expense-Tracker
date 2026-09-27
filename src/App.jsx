import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import SummaryCard from "./components/SummaryCard"
import ExpenseForm from "./components/ExpenseForm"
import TransactionList from "./components/TransactionList"

function App() {

  // Expenses
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses")
    return savedExpenses ? JSON.parse(savedExpenses) : []
  })

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false)

  // Search
  const [search, setSearch] = useState("")

  // Category Filter
  const [filterCategory, setFilterCategory] = useState("All")

  // Fixed Income
  const income = 70000

  // Total Expenses
  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  )

  // Balance
  const balance = income - totalExpenses

  // Save expenses in LocalStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  // Add Expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        ...expense,
        id: Date.now()
      }
    ])
  }

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    )
  }

  // Search + Category Filter
  const filteredExpenses = expenses.filter((expense) => {

    const searchText = search.toLowerCase().trim()

    // Search by Expense Name OR Category
    const matchesSearch =
      expense.name.toLowerCase().includes(searchText) ||
      expense.category.toLowerCase().includes(searchText)

    // Category Filter
    const matchesCategory =
      filterCategory === "All" ||
      expense.category === filterCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-7xl mx-auto p-4 sm:p-6">

        {/* Dashboard Heading */}
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Dashboard
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          <SummaryCard
            title="Total Balance"
            amount={balance.toLocaleString()}
            darkMode={darkMode}
          />

          <SummaryCard
            title="Total Income"
            amount={income.toLocaleString()}
            darkMode={darkMode}
          />

          <SummaryCard
            title="Total Expenses"
            amount={totalExpenses.toLocaleString()}
            darkMode={darkMode}
          />

        </div>

        {/* Expense Form */}
        <ExpenseForm
          onAddExpense={addExpense}
          darkMode={darkMode}
        />

        {/* Search + Category Filter */}
    {/* Search + Category Filter */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

  {/* Search */}
  <div className="relative">
    <span className="absolute left-4 top-3.5 text-lg">
      🔍
    </span>

    <input
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition focus:ring-2 focus:ring-green-500 ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    />
  </div>

  {/* Category Filter */}
  <div className="relative">
    <span className="absolute left-4 top-3.5 text-lg">
      🏷️
    </span>

    <select
      value={filterCategory}
      onChange={(e) => setFilterCategory(e.target.value)}
      className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition focus:ring-2 focus:ring-green-500 ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <option value="All">All Categories</option>
      <option value="Food">Food</option>
      <option value="Shopping">Shopping</option>
      <option value="Transport">Transport</option>
      <option value="Education">Education</option>
      <option value="Other">Other</option>
    </select>
  </div>



          {/* Search */}
          <input
            type="text"
            placeholder="Search expense..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`p-3 rounded-lg border outline-none ${
              darkMode
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          />

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className={`p-3 rounded-lg border outline-none ${
              darkMode
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            <option value="All">All Categories</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Transport">Transport</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>

        </div>

        {/* Transaction List */}
        <TransactionList
          expenses={filteredExpenses}
          onDelete={deleteExpense}
          darkMode={darkMode}
        />

      </main>

    </div>
  )
}

export default App