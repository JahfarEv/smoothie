import React, { useState } from "react";
import EmailModal from "./EmailModal";

const CTA = () => {
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
    <section className="py-20 bg-gradient-to-br from-green-500 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Body in 21 Days?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join thousands of satisfied customers who have achieved their weight
            loss goals with our delicious smoothie diet
          </p>

          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Instant Access Today
            </h3>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">$27</div>
                <div className="text-gray-600">one-time payment</div>
              </div>

              <div className="text-center">
                <div className="text-xl line-through text-gray-500">$47</div>
                <div className="text-green-600 font-bold">
                  Limited Time Offer
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
              {[
                "Full 21-Day Meal Plan & Recipes",
                "Shopping Lists & Prep Guides",
                "Workout Guide for Faster Results",
                "Maintenance Plan to Keep Weight Off",
                "Private Community Access",
                "24/7 Support & Community Access",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>

            <button
              className="mt-10 w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Start My 21-Day Transformation Now
            </button>

            <div className="mt-6 flex flex-col items-center justify-center">
              {/* Guarantee badge */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-full px-4 py-2 flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <span className="text-yellow-800 font-medium">
                  60-Day Money Back Guarantee
                </span>
              </div>

              {/* Secure payment text */}
              <div className="mt-3 text-sm text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                Secure Payment • SSL Encrypted
              </div>
            </div>
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

export default CTA;
