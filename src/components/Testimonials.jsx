import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Danielle J.",
    loss: "8 Pounds",
    text: "I've tried countless diets but nothing worked like the Smoothie Diet. I lost 8 pounds in 21 days and have kept it off for 6 months! The recipes are delicious and easy to make.",
    image: "testimonial1.png"
  },
  {
    name: "Sarah",
    loss: "3 Pounds",
    text: "As a busy dad, I needed something simple. This program fit perfectly into my routine. Not only did I lose weight, but my energy levels skyrocketed. Highly recommend!",
    image: "testimonial.png"
  },
  {
    name: "Jade.",
    loss: "12 Pounds",
    text: "I was skeptical at first, but the results blew me away. My cravings disappeared, and I felt amazing throughout the program. It's more than a diet—it's a lifestyle change!",
    image: "testimonial3.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real <span className="text-green-600">Success Stories</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            See what our participants have achieved with the 21-Day Smoothie Diet
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-8 left-8 text-green-100 text-5xl">
              <FaQuoteLeft />
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              {/* Increased image size */}
              <div className="mb-8 md:mb-0 md:mr-10">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-100 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20"></div>
                  <img 
                    src={`/${testimonials[currentIndex].image}`} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</p>
                    <p className="text-green-600 font-semibold mt-1">Lost {testimonials[currentIndex].loss}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                      Before & After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-6">
            <button 
              onClick={prevTestimonial}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors transform hover:scale-110"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors transform hover:scale-110"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Participants", value: "28,500+", desc: "Satisfied customers" },
            { label: "Avg Weight Loss", value: "12.5 lbs", desc: "In just 21 days" },
            { label: "Success Rate", value: "94%", desc: "Achieved their goals" }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-center text-white shadow-lg">
              <div className="text-5xl font-bold">{stat.value}</div>
              <div className="mt-2 text-xl font-medium">{stat.label}</div>
              <div className="mt-2 text-green-100">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;