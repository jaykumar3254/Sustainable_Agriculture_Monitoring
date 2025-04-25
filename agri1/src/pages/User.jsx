import React from "react";

const User = () => {
  return (

    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex flex-col md:flex-row md:space-x-6 mb-10">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="https://via.placeholder.com/200" 
            alt="User Profile"
            className="h-52 w-52 border-2 border-green-500 object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 bg-green-900 p-6 rounded-lg border border-green-500">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">John Doe</h2>
          <p className="text-gray-300"><span className="text-green-400 font-semibold">UID:</span> #123456789</p>
          <p className="text-gray-300"><span className="text-green-400 font-semibold">Date Joined:</span> 2025-01-15</p>
          <p className="text-gray-300"><span className="text-green-400 font-semibold">Passion:</span> Smart gardening and eco-automation</p>
          <p className="text-gray-300 mt-2">
            <span className="text-green-400 font-semibold">Bio:</span> Exploring tech-driven solutions to bring nature and sustainability together.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl text-green-400 mb-2">Daily Updates</h3>
        <div className="w-full h-60 bg-green-900 rounded-lg border border-green-500 text-center flex items-center justify-center text-gray-400">
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl text-green-400">History</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-green-900 border border-green-500 p-5 rounded-lg text-gray-300 flex flex-col">
            <p className="text-sm text-green-400 mb-1">Date: 2025-04-20</p>
            <p className="font-semibold mb-2">Prompt: Analyze soil moisture for tomato plant</p>
            <p className="text-sm mb-4">Result: Moisture level optimal. Next check in 48 hours.</p>
            <a
              href="/report-sample.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-green-700 hover:bg-green-600 text-white text-sm px-4 py-2 rounded text-center"
            >
              View PDF Report
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
