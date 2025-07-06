import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Signup logic here
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="text-3xl font-semibold mb-8">
        <span className="italic text-green-500">Neuro</span>
        <span className="italic text-white">Code</span>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSignup}
        className="bg-black flex flex-col w-full max-w-xs space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="p-2 rounded bg-black border border-gray-500 text-white focus:outline-none"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="p-2 rounded bg-black border border-gray-500 text-white focus:outline-none"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
