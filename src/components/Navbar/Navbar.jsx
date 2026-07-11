import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-blue-600">
            DevTask
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Features
          </a>

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;