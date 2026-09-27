function TransactionList({ expenses, onDelete, darkMode }) {

  const categoryIcons = {
    Food: "🍔",
    Shopping: "🛍️",
    Transport: "🚗",
    Education: "📚",
    Other: "📦"
  }

  return (
    <div
      className={`mt-8 p-6 sm:p-8 rounded-2xl shadow-lg border ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-100"
      }`}
    >

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

        <div>
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Recent Transactions
          </h2>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Keep an eye on your spending
          </p>
        </div>

        <div
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            darkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-green-50 text-green-600"
          }`}
        >
          {expenses.length} Transactions
        </div>

      </div>

      {/* Empty State */}
      {expenses.length === 0 ? (
        <div className="text-center py-12">

          <div className="text-5xl mb-4">
            💸
          </div>

          <p
            className={`text-lg font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            No transactions found
          </p>

          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Try adding an expense or changing your search.
          </p>

        </div>
      ) : (

        <div className="space-y-3">

          {expenses.map((expense) => (

            <div
              key={expense.id}
              className={`group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? "bg-gray-700/50 border-gray-700 hover:bg-gray-700"
                  : "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-md"
              }`}
            >

              {/* Left Side */}
              <div className="flex items-center gap-4">

                {/* Category Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    darkMode
                      ? "bg-gray-600"
                      : "bg-white shadow-sm"
                  }`}
                >
                  {categoryIcons[expense.category] || "📦"}
                </div>

                <div>

                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {expense.name}
                  </h3>

                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {expense.category} • {expense.date}
                  </p>

                </div>

              </div>

              {/* Right Side */}
              <div className="flex items-center justify-between sm:justify-end gap-4">

                <span className="font-bold text-red-500">
                  - Rs. {Number(expense.amount).toLocaleString()}
                </span>

                <button
                  onClick={() => onDelete(expense.id)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                >
                  🗑️
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default TransactionList