import { Link, useLocation } from "react-router-dom";

function DashboardNavbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Task", path: "/add-task" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          DevTask
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          {navLinks.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>

          ))}

          {/* Logout */}
          <button
            onClick={() => alert("Logout functionality will be added with backend.")}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition cursor-pointer"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default DashboardNavbar;