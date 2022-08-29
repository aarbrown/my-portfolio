import React from 'react';
import github from "super-tiny-icons/images/svg/github.svg";
import linkedin from "super-tiny-icons/images/svg/linkedin.svg";
import twitter from "super-tiny-icons/images/svg/twitter.svg";

function Footer() {
  return (
    <footer className="flex-row px-1 flex-center">
        <span>Find me on the internet:</span>
        <div>
            <a href="https://www.github.com/aarbrown/" target="_blank" rel="noreferrer">
                <img className="mx-2" height="32" width="32" alt="aarbrown github" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/aarbrown109/" target="_blank" rel="noreferrer">
                <img className="mx-2" height="32" width="32" alt="aarbrown linkedin" src={linkedin} />
            </a>
            <a href="https://twitter.com/aarbrown109" target="_blank" rel="noreferrer">
                <img className="mx-2" height="32" width="32" alt="aarbrown twitter" src={twitter} />
            </a>
        </div>
    </footer>
  );
}

export default Footer;