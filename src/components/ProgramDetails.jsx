import React, { useState } from "react";
import EmailModal from "./EmailModal";

const ProgramDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (email) => {
    console.log("Email submitted:", email);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    window.open(
      "https://65edc9bfs953u66e1nqnt5n-wa.hop.clickbank.net",
      "_blank"
    );
  };
  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your <span className="text-green-600">21-Day Transformation</span>{" "}
            Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A day-by-day guide to maximize your weight loss results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Week 1: Detox & Reset
            </h3>
            <ul className="space-y-3">
              {[
                "Kickstart metabolism with nutrient-packed smoothies",
                "Gentle detox to eliminate toxins",
                "Introduce healthy eating habits",
                "Begin light daily activity",
                "Focus on hydration",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-100 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Week 2: Accelerate Fat Loss
            </h3>
            <ul className="space-y-3">
              {[
                "Increase fat-burning ingredients",
                "Introduce new smoothie recipes",
                "Add metabolism-boosting snacks",
                "Incorporate moderate exercise",
                "Track measurements & progress",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold text-white mb-4">
              Week 3: Transform & Maintain
            </h3>
            <ul className="space-y-3">
              {[
                "Focus on long-term habits",
                "Introduce solid meal options",
                "Learn maintenance strategies",
                "Celebrate your transformation!",
                "Plan for continued success",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <p className="ml-3">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl mb-8">
              Join thousands who have successfully lost weight with our program
            </p>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-10 py-4 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Get Instant Access Now
            </button>
            <p className="mt-6 text-green-100">60-Day Money Back Guarantee</p>
          </div>
        </div>
      </div>
      <EmailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default ProgramDetails;
