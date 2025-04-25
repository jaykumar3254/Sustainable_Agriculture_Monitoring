import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-lg bg-green-900 p-8 rounded-lg shadow-lg border border-green-500">
        <h2 className="text-2xl text-green-400 font-semibold mb-6 text-center">Have an Relation with us !</h2>
        
        <form>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-green-300 mb-1">Name</label>
              <input type="text" placeholder="Your Name"
                className="w-full p-2 rounded bg-black border border-green-500 text-white"
                required />
            </div>

            <div>
              <label className="block text-green-300 mb-1">Email</label>
              <input type="email" placeholder="you@example.com"
                className="w-full p-2 rounded bg-black border border-green-500 text-white"
                required />
            </div>

            <div>
              <label className="block text-green-300 mb-1">Password</label>
              <input type="password" placeholder="Enter Password"
                className="w-full p-2 rounded bg-black border border-green-500 text-white"
                required />
            </div>

            <div>
              <label className="block text-green-300 mb-1">Confirm Password</label>
              <input type="password" placeholder="Confirm Password"
                className="w-full p-2 rounded bg-black border border-green-500 text-white"
                required />
            </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black font-semibold py-2 rounded hover:bg-green-400 transition"
          >
            Sign Up
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
