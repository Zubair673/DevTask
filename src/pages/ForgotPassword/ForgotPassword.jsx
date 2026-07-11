import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      toast.success("Password reset link sent successfully");

      setEmail("");

    }, 1500);

  };

  return (

    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            DevTask
          </h1>

          <h2 className="text-2xl font-semibold mt-5">
            Forgot Password
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your registered email address to receive a password reset link.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >

          <div className="mb-6">

            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg transition"
          >

            {loading ? "Sending..." : "Send Reset Link"}

          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Remember your password?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Back to Login
          </Link>

        </p>

      </div>

    </section>

  );

}

export default ForgotPassword;