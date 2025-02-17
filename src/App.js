import React from 'react';
import Navbar from './components/Navbar.tsx';
import Banner from './components/Banner.tsx';
import HackathonDescription from './components/HackathonDescription.tsx';
import ProblemStatements from './components/ProblemStatements.tsx';
import Timeline from './components/Timeline.tsx';
import FAQ from './components/FAQ.tsx';
import ContactDetails from './components/ContactDetails.tsx';
import Footer from './components/Footer.tsx';
import Prizes from './components/Prizes.tsx'
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <HackathonDescription/>
      <ProblemStatements />
      <Timeline />
      <Prizes/>
      <FAQ />
      <ContactDetails/>
      <Footer />
    </div>
  );
}

export default App;