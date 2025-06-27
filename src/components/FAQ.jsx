// components/FAQ.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "Do I need any special equipment?",
      answer: "You'll need a good quality blender to prepare your smoothies. Any standard blender will work, but a high-speed blender like a Vitamix or Ninja will give you the smoothest results."
    },
    {
      question: "Will I feel hungry on this diet?",
      answer: "Our smoothies are specifically designed to be filling and satisfying. They're packed with fiber, protein, and healthy fats to keep you full between meals. Most participants report feeling satisfied throughout the program."
    },
    {
      question: "Can I do this program if I have dietary restrictions?",
      answer: "Absolutely! The program includes modifications for common dietary needs including gluten-free, dairy-free, vegan, and nut-free options. All recipes are adaptable to fit your specific requirements."
    },
    {
      question: "What if I don't like the results?",
      answer: "We stand behind our program with a 30-day money-back guarantee. If you follow the program for 21 days and don't see results, simply contact us for a full refund."
    },
    {
      question: "How much time does it take to prepare the smoothies?",
      answer: "Most smoothies take less than 5 minutes to prepare. We provide preparation tips and time-saving strategies to make the program fit even the busiest schedules."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently <span className="text-green-600">Asked Questions</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about the Smoothie Diet
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-green-50 hover:bg-green-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-green-600" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="p-6 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;