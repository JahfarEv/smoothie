// components/Benefits.js
import React from 'react';
import { FaLeaf, FaClock, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
      <div className="text-green-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "Natural Ingredients",
      description: "All recipes use 100% natural, whole food ingredients with no artificial additives."
    },
    {
      icon: <FaClock />,
      title: "Quick & Easy",
      description: "Prepare delicious smoothies in under 5 minutes. Perfect for busy lifestyles."
    },
    {
      icon: <FaHeartbeat />,
      title: "Boost Metabolism",
      description: "Scientifically formulated to increase your metabolism and fat burning."
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrient-Rich",
      description: "Packed with essential vitamins, minerals, and antioxidants for optimal health."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why The <span className="text-green-600">Smoothie Diet</span> Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our program combines delicious nutrition with science-backed strategies for rapid weight loss
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">What You'll Achieve in 21 Days</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { value: "8-12", label: "Pounds Lost" },
                { value: "2-4", label: "Inches Waist" },
                { value: "25%", label: "More Energy" },
                { value: "100%", label: "Satisfaction" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;