import React, { useEffect } from 'react';

function Navigation(props) {
  const {
    sections = [],
    setCurrentSection,
    currentSection,
  } = props;

  useEffect(() => {
    document.title = currentSection.label;
  }, [currentSection]);

  return (
    <nav>
        <ul className="flex-row">
        {sections.map((section) => (
            <li
              className={`mx-1 ${
                currentSection.name === section.name && 'navActive'
                }`}
              key={section.name}
            >
              <span
                onClick={() => {
                  setCurrentSection(section);
                }}
              >
                {section.label}
              </span>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default Navigation;
