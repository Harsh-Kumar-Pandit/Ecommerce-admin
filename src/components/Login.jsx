import React from "react";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email, password);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">

      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-50" />

      <div className="relative w-full max-w-md rounded-xl bg-white border border-gray-200 shadow-md">
        
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="text-lg font-semibold text-gray-900">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to manage your store
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">
              Email
            </label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email}
              type="email"
              placeholder="admin@example.com"
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">
              Password
            </label>
            <input onChange={(e)=> setPassword(e.target.value)} value={password}
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 py-2.5 text-sm font-semibold
                       text-white hover:bg-gray-800 active:scale-[0.99] transition"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
