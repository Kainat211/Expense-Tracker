import { useState } from "react"

function ExpenseForm({ onAddExpense, darkMode }) {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("Food")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newExpense = {
      name,
      amount,
      category,
      date
    }

    onAddExpense(newExpense)

    setName("")
    setAmount("")
    setCategory("Food")
    setDate("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg border transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-100"
      }`}
    >

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl shadow-md">
          ➕
        </div>

        <div>
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Add New Expense
          </h2>

          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Keep track of where your money goes
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Expense Name */}
        <div>
          <label
            className={`block mb-2 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Expense Name
          </label>

          <div className="relative">
            <span className="absolute left-3 top-3.5 text-lg">
              📝
            </span>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Lunch"
              className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition focus:ring-2 focus:ring-green-500 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                  : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
              required
            />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label
            className={`block mb-2 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Amount
          </label>

          <div className="relative">
            <span className="absolute left-3 top-3.5 text-lg">
              💵
            </span>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition focus:ring-2 focus:ring-green-500 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                  : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
              required
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label
            className={`block mb-2 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Category
          </label>

          <div className="relative">
            <span className="absolute left-3 top-3.5 text-lg">
              🏷️
            </span>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition focus:ring-2 focus:ring-green-500 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
            >
              <option>Food</option>
              <option>Shopping</option>
              <option>Transport</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div>
          <label
            className={`block mb-2 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Date
          </label>

          <div className="relative">
            <span className="absolute left-3 top-3.5 text-lg">
              📅
            </span>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition focus:ring-2 focus:ring-green-500 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
              required
            />
          </div>
        </div>

      </div>

      {/* Add Button */}
      <button
        type="submit"
        className="mt-7 w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        ➕ Add Expense
      </button>

    </form>
  )
}

export default ExpenseForm