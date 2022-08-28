import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    sections,
    currentSection,
    setCurrentSection
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 💼</span> My Portfolio
        </a>
      </h2>
      <Navigation sections={sections} currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
}

export default Header;