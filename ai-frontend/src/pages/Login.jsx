import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed");
      }

      // Save JWT token
      localStorage.setItem("token", data.access_token);

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center
        bg-gradient-to-r from-indigo-600 to-violet-600
        bg-clip-text text-transparent tracking-tight"
      >
        Welcome back
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-sm text-center text-slate-500 mt-3"
      >
        Continue preparing at your own pace
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleLogin}
        className="mt-10 space-y-6"
      >
        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl
          bg-white/80
          border border-slate-200
          text-slate-700
          placeholder:text-slate-400
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500/40
          focus:border-indigo-500
          transition-all duration-300"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl
          bg-white/80
          border border-slate-200
          text-slate-700
          placeholder:text-slate-400
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500/40
          focus:border-indigo-500
          transition-all duration-300"
        />

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200
          text-red-600 text-sm
          p-3 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl
          bg-gradient-to-r from-indigo-600 to-violet-600
          hover:from-indigo-700 hover:to-violet-700
          text-white font-semibold
          shadow-lg shadow-indigo-500/30
          hover:shadow-indigo-500/40
          transition-all duration-300
          active:scale-[0.98]
          disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Continue"}
        </button>
      </motion.form>

      {/* Footer Text */}
      <p className="mt-8 text-xs text-center text-slate-400">
        Your progress is saved • Take your time
      </p>
    </AuthLayout>
  );
}
