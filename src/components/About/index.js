import React from 'react'
import myImage from "../../assets/aaron.jpeg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <img src={myImage} className="about-img" alt="cover" />
        <p>
            👋 Hi. My name is Aaron Brown. I have been working as a full-stack web developer for the past 12 years.
            I am based out of Indiana where I live with my wife, our two daughters, and our puppy.  I enjoy working with
            and learning about technology.  In my spare time, I enjoy spending time with my family and playing board games.
        </p>
      </div>
    </section>
  )
}

export default About