import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import DestinationsPage from './pages/Destinations';
import DealsPage from './pages/Deals';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    
      <DestinationsPage />
      <DealsPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;