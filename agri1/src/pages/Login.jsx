import React from "react";
import { Route } from "react-router-dom";
import Signup from './Signup'; 

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-green-900 p-8 rounded-lg shadow-lg border border-green-500">
        <h2 className="text-2xl text-green-400 font-semibold mb-6 text-center">Welcome Back !</h2>
        <form>
          <div className="mb-4">
            <label className="block text-green-300 mb-2">Email</label>
            <input type="email" className="w-full p-2 rounded bg-black border border-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div className="mb-6">
            <label className="block text-green-300 mb-2">Password</label>
            <input type="password" className="w-full p-2 rounded bg-black border border-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-black font-semibold py-2 rounded hover:bg-green-400">
            Login
          </button>
        </form>
        <p className="text-green-300 mt-4 text-sm text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-400 hover:underline">Sign up </a>
        </p>
        
      </div>
    </div>
  );
};

export default Login;
