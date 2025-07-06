import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="text-3xl font-semibold mb-8">
        <span className="italic text-green-500">Neuro</span>
        <span className="italic text-white">Code</span>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-black flex flex-col w-full max-w-xs space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Log In</h2>

        <input
          type="email"
          placeholder="sql@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded bg-slate-100 text-black focus:outline-none"
        />

        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded bg-slate-100 text-black focus:outline-none"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
