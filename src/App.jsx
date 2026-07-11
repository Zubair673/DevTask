import { Routes, Route } from "react-router-dom";

// Home
import Home from "./pages/Home/Home";

// Authentication
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Tasks
import AddTask from "./pages/AddTask/AddTask";
import EditTask from "./pages/EditTask/EditTask";

// Profile
import Profile from "./pages/Profile/Profile";

// Not Found
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Tasks */}
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/edit-task" element={<EditTask />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;