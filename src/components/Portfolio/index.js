import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Family Calendar',
      description: 'HTML/CSS/JavaScript',
      link: "https://elizabethbillings93.github.io/familycalendar/",
      repo: "https://github.com/elizabethbillings93/familycalendar"
    },
    {
      name: 'LEND Inventory Management',
      description: 'JavaScript/Handlebars/CSS',
      link: " https://lend-database.herokuapp.com/login",
      repo: "https://github.com/elizabethbillings93/LEND_Inventory_Management"
    },
    {
      name: 'Coding Quiz',
      description: 'HTML/CSS/JavaScript',
      link: "https://elizabethbillings93.github.io/Coding-Quiz/",
      repo: "https://github.com/elizabethbillings93/Coding-Quiz"
    },
    
  ]);

  return (
    <div class='projectlist'>
      <div class="row align-items-center justify-content-center">
        {/* map through projects (idx is a utility function for traversing properties on objects and arrays) */}
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
