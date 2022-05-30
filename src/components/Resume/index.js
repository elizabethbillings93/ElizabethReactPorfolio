import React from 'react';

function Resume() {
  return (
    <section className="resumelist">
      <div className="proficiencies">
      <p>
        DOWNLOAD MY <a href="https://www.linkedin.com/in/elizabethcbillings/">RESUME</a>
        </p>
        <h3 id='frontendprof'>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3 id="backendprof">Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
