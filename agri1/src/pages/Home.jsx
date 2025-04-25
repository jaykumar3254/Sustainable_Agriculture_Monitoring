import React from 'react';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between text-green-100">

      <main className="flex-grow flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-green-700">
          <h1 className="text-4xl font-extrabold text-center text-green-400 mb-10 tracking-wider">
            Plant & Your Ecosystem Details 
          </h1>

          <div className="mb-8">
            <label className="block text-lg mb-2 text-green-300 font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="w-full bg-black text-green-300 border border-green-600 rounded-lg px-4 py-2
                        file:bg-gradient-to-r file:from-green-400 file:to-green-600 file:text-black
                        file:font-bold file:rounded-md hover:file:from-green-500 hover:file:to-green-700
                        transition duration-300 ease-in-out"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-green-100">
            <div>
              <label className="block mb-1 text-green-300">Plant Name</label>
              <input type="text" placeholder="Enter plant name" className="w-full bg-black border border-green-600 rounded-lg px-4 py-2 placeholder-green-400 hover:bg-green-900 focus:outline-none transition duration-300" />
            </div>
            <div>
              <label className="block mb-1 text-green-300">Growth Stage</label>
              <select className="w-full bg-black border border-green-600 rounded-lg px-4 py-2 text-green-300 hover:bg-green-900 focus:outline-none transition duration-300">
                <option value="">Select stage</option>
                <option>Seedling</option>
                <option>Vegetative</option>
                <option>Flowering</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-green-300">Soil Type</label>
              <select className="w-full bg-black border border-green-600 rounded-lg px-4 py-2 text-green-300 hover:bg-green-900 focus:outline-none transition duration-300">
                <option value="">Select soil type</option>
                <option>Loamy</option>
                <option>Clay</option>
                <option>Sandy</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-green-300">Soil pH</label>
              <input type="text" placeholder="e.g. 6.5" className="w-full bg-black border border-green-600 rounded-lg px-4 py-2 placeholder-green-400 hover:bg-green-900 focus:outline-none transition duration-300" />
            </div>
            <div>
              <label className="block mb-1 text-green-300">Region</label>
              <select className="w-full bg-black border border-green-600 rounded-lg px-4 py-2 text-green-300 hover:bg-green-900 focus:outline-none transition duration-300">
                <option value="">Select region</option>
                <option>Tropical</option>
                <option>Temperate</option>
                <option>Arid</option>
              </select>
            </div>
          </div>

          <div className="pt-8">
            <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-black font-bold rounded-xl transition text-lg tracking-wider shadow-md">
              Submit 🌱
            </button>
          </div>
        </div>
      </main>

      <section className="flex-grow flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-green-700">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8 tracking-wider">
            🌿 Crop Health Analysis Report
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-100">
          <div className="flex justify-center items-center border border-green-600 rounded-lg p-4 bg-black">
          <img src="C:\Users\jpard\agri1\src\assets\image.png" alt="Analyzed Plant" className="rounded-lg max-h-64 object-contain" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-300 mb-2">Crop Overview</h3>
          <p className="text-green-200 text-sm">
            Name: Basil<br />
            Growth Stage: Vegetative<br />
            Soil Type: Loamy<br />
            Region: Temperate<br />
            pH: 6.5
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-300 mb-2">Disease Analysis</h3>
          <p className="text-green-200 text-sm">
            Detected Signs: Leaf spot, Mild yellowing<br />
            Suspected Diseases: Bacterial leaf spot<br />
            Recommendation: Use copper-based fungicide, avoid overhead watering
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-300 mb-2">Yield Projection</h3>
          <p className="text-green-200 text-sm">
            Estimated Yield: 2.5 kg per plant<br />
            Optimal Harvest Time: 3 weeks<br />
            Factors Affecting Yield: Soil fertility, light exposure
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-green-300 mb-2">Management Plan</h3>
          <ul className="list-disc pl-5 text-green-200 text-sm space-y-1">
            <li>Apply compost biweekly to enrich soil.</li>
            <li>Ensure 6 hours of sunlight daily.</li>
            <li>Monitor for pest activity every 3 days.</li>
            <li>Implement drip irrigation to maintain optimal moisture.</li>
          </ul>
        </div>
        <div className="pt-8">
            <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-black font-bold rounded-xl transition text-lg tracking-wider shadow-md">
              Get an PDF report 
            </button>
          </div>
      </div>
    </div>
  </section>


      <footer className="bg-black text-green-400 border-t border-green-700 mt-10 px-4 py-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold mb-2">Go-Green-Aarogya - Sustainable Agriculture Monitoring</p>
          <p className="text-sm text-green-300 mb-4">
          Go-Green-Aarogya is a smart agricultural Monitoring system designed to collect and analyze plant data
            for better farming decisions. Easily submit your plant info and get insights tailored to your crop stage and region.
          </p>
          <hr className="border-green-700 my-4" />
          <p className="text-xs text-green-600">
            &copy; {new Date().getFullYear()} GreenGrow. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
