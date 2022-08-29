import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';

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
        {currentSection.name === 'contact' && (
          <ContactForm />
        )}
        {currentSection.name === 'portfolio' && (
          <ProjectList />
        )}
        {currentSection.name === 'resume' && (
          <Resume />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
