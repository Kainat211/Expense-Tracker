function SummaryCard({ title, amount, darkMode }) {
  const icons = {
    "Total Balance": "💰",
    "Total Income": "📈",
    "Total Expenses": "💸"
  }

  const icon = icons[title]

  return (
    <div
      className={`relative overflow-hidden p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-100"
      }`}
    >
      {/* Decorative Circle */}
      <div
        className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 ${
          title === "Total Balance"
            ? "bg-green-500"
            : title === "Total Income"
            ? "bg-blue-500"
            : "bg-red-500"
        }`}
      ></div>

      {/* Top Section */}
      <div className="flex items-center justify-between">

        <div>
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {title}
          </p>

          <h3
            className={`text-2xl sm:text-3xl font-bold mt-2 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Rs. {amount}
          </h3>
        </div>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
            title === "Total Balance"
              ? "bg-green-100"
              : title === "Total Income"
              ? "bg-blue-100"
              : "bg-red-100"
          }`}
        >
          {icon}
        </div>

      </div>

      {/* Bottom Text */}
      <div
        className={`mt-5 text-xs ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {title === "Total Balance" && "Available balance"}
        {title === "Total Income" && "Your fixed income"}
        {title === "Total Expenses" && "Total money spent"}
      </div>

    </div>
  )
}

export default SummaryCard