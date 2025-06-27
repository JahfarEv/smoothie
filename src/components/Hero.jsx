// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-400 to-green-600">
      <div className="absolute inset-0 opacity-10">
        <div
          className="bg-pattern bg-repeat w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Lose <span className="text-yellow-300">Weight</span> in 21 Days
              with Delicious Smoothies
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-xl">
              Our Rapid Weight Loss Program is Easy, Tasty, and Effective.
              Transform your body without starving yourself!
            </p>

            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://65edc9bfs953u66e1nqnt5n-wa.hop.clickbank.net"
                  )
                }
              >
                Start Your Transformation
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black font-medium px-8 py-4 rounded-full text-lg border border-white border-opacity-30 transition duration-300 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://65edc9bfs953u66e1nqnt5n-wa.hop.clickbank.net"
                  )
                }
              >
                Watch Video
              </button>
            </div>

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
              <p className="ml-4 text-green-100">
                <span className="font-bold">12,584+</span> people transformed
                this month
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-1 transform rotate-3">
              <img
                src="/smoothie.jpg"
                alt="Green Smoothie"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-lg px-4 py-2 shadow-lg">
              <p className="font-bold text-green-900">
                Average Weight Loss: <span className="text-2xl">12.5 lbs</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-600 to-transparent"></div>
    </section>
  );
};

export default Hero;
