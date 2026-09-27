function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/90 border-gray-700"
          : "bg-white/90 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">💰</span>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                ExpenseTracker
              </h1>

              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Manage your money
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#"
              className={`font-medium transition ${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Dashboard
            </a>

            <a
              href="#"
              className={`font-medium transition ${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Transactions
            </a>

            <a
              href="#"
              className={`font-medium transition ${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Add Expense
            </a>

          </div>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-sm ${
              darkMode
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar