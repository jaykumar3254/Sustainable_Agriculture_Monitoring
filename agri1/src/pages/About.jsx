import React from "react";

const About= () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto border-l-4 border-green-500 pl-6">
        <h1 className="text-4xl font-bold mb-6 text-green-400">About Us</h1>
        <p className="text-lg mb-6 leading-relaxed text-gray-300">
          Our Sustainable Plant Monitoring System is designed to promote eco-friendly and efficient gardening practices. By leveraging cutting-edge sensor technology and real-time data analytics, we empower users to maintain optimal plant health with minimal resource consumption.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Mission</h2>
        <p className="text-lg mb-6 text-gray-300">
          We aim to revolutionize plant care through smart monitoring, promoting sustainability and smarter agriculture in both urban and rural settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-green-400">Key Features</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Real-time plant health tracking</li>
          <li>Soil moisture and temperature monitoring</li>
          <li>Environment-friendly alert system</li>
          <li>Mobile and web dashboard integration</li>
        </ul>

        <div className="mt-10 border-t border-green-600 pt-6">
          <h3 className="text-xl text-green-400 font-medium mb-2">Sustainability Through Technology</h3>
          <p className="text-gray-400">
            By utilizing intelligent monitoring solutions, we reduce water waste, prevent over-fertilization, and contribute to a greener planet—one plant at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
