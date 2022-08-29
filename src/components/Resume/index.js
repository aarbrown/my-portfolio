import React from 'react'

function Resume() {

  return (
    <section className="my-5" >
      <h1 id="resume">{`Resum${String.fromCharCode(233)}`}</h1>
      <div className="my-2">
        <p>
            Here is an up to date copy of my <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1eCsmpQp9B-6gefTm1gTYqXz3kPdOfitrWptcjVLxj44/edit?usp=sharing">{`resum${String.fromCharCode(233)}`}</a>
        </p>
        <p>
            These are some of the technologies that I have worked with:
        </p>
        <ul>
            <li>
                Frontend
                <ul>
                    <li>React</li>
                    <li>LWC</li>
                    <li>jQuery</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </li>
            <li>
                Backend
                <ul>
                    <li>NodeJS</li>
                    <li>PHP</li>
                    <li>GraphQL</li>
                </ul>
            </li>
            <li>
                Databases
                <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                    <li>DynamoDb</li>
                    <li>MongoDb</li>
                </ul>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Resume