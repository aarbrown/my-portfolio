import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [sections] = useState([
    {
      name: 'about',
      label: 'About Me',
    },
    {
      name: 'portfolio',
      label: 'Portfolio',
    },
    {
      name: 'contact',
      label: 'Contact',
    },
    {
      name: 'resume',
      label: `Resum${String.fromCharCode(233)}`,
    },
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header sections={sections} currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {currentSection.name === 'about' && (
          <About />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
