// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benifits';
import HowItWorks from './components/HowToWorks';
import ProgramDetails from './components/ProgramDetails';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <ProgramDetails />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;