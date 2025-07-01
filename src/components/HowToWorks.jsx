import React, { useState } from "react";
import {
  FaBlender,
  FaCalendarCheck,
  FaChartLine,
  FaBook,
  FaList,
  FaUsers,
  FaDumbbell,
  FaHeadset,
} from "react-icons/fa";
import EmailModal from "./EmailModal";

const Step = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl font-bold mb-4">
        {number}
      </div>
      <div className="text-3xl text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How The <span className="text-green-600">21-Day Program</span> Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Simple, effective steps to transform your body and health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step
            number="1"
            icon={<FaBlender />}
            title="Prepare Your Smoothies"
            description="Follow our easy recipes to make delicious, nutrient-packed smoothies every day"
          />
          <Step
            number="2"
            icon={<FaCalendarCheck />}
            title="Follow The Plan"
            description="Replace 1-2 meals daily with smoothies and enjoy healthy snacks"
          />
          <Step
            number="3"
            icon={<FaChartLine />}
            title="Track Your Progress"
            description="Watch the pounds melt away as you feel more energetic each day"
          />
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What's Included In Your Program
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaBook className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      21-Day Meal Plan & Shopping Lists
                    </p>
                    <p className="text-gray-600 mt-1">
                      Daily guides with exact ingredients and portions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaList className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      36+ Delicious Smoothie Recipes
                    </p>
                    <p className="text-gray-600 mt-1">
                      Variety to keep your taste buds excited all program long
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaDumbbell className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Workout Guide for Faster Results
                    </p>
                    <p className="text-gray-600 mt-1">
                      15-minute daily routines to accelerate fat loss
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Private Community Access
                    </p>
                    <p className="text-gray-600 mt-1">
                      Connect with others on the same journey
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaHeadset className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      24/7 Support & Coaching
                    </p>
                    <p className="text-gray-600 mt-1">
                      Get answers to all your questions
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-green-400 to-green-600 min-h-80 flex items-center justify-center p-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
                <div className="text-4xl font-bold mb-2">$27</div>
                <p className="mb-6">One-time payment (normally $47)</p>
                <button
                  className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  Start Today
                </button>
                <div className="mt-6 flex items-center justify-center">
                  <div className="mt-8 flex items-center">
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4].map((item) => (
                        <img
                          key={item}
                          src={`https://randomuser.me/api/portraits/${
                            item % 2 === 0 ? "women" : "men"
                          }/${item * 7}.jpg`}
                          alt="User"
                          className="w-12 h-12 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-sm">Join 12,584+ members</span>
                  </div>
                </div>
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

export default HowItWorks;
