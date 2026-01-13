import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyNotice from './components/PrivacyNotice';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
      <PrivacyNotice />
    </div>
  );
}

export default App;
