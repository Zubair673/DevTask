import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import LogoutModal from "../LogoutModal/LogoutModal";

function DashboardNavbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Add Task",
      path: "/add-task",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  // ===============================
  // Logout
  // ===============================
  const handleLogout = () => {

    // Close Modal
    setShowLogoutModal(false);

    // Clear Local Storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Success Message
    toast.success("Logged out successfully");

    // Prevent Back Navigation
    window.history.pushState(null, "", "/");

    // Redirect to Home Page
    navigate("/", {
      replace: true,
    });

  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/dashboard"
            className="text-2xl font-bold text-blue-600"
          >
            DevTask
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

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

            <button
              onClick={() => setShowLogoutModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition cursor-pointer"
            >
              Logout
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div className="md:hidden border-t bg-white shadow-lg">

            <div className="flex flex-col px-5 py-4 space-y-4">

              {navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium transition ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>

              ))}

              <button
                onClick={() => {

                  setMenuOpen(false);
                  setShowLogoutModal(true);

                }}
                className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition cursor-pointer"
              >
                Logout
              </button>

            </div>

          </div>

        )}

      </nav>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />

    </>
  );

}

export default DashboardNavbar;