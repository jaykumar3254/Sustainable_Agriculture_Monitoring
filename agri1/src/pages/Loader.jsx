// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid"></div>
        <p className="mt-4 text-green-400 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
