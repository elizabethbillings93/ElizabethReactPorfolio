import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';


function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
    
      <div className="project-text">
        <h3>
          <a href={link} id='projectname'>{removeHyphensAndCapitalize(name)}</a>{' '}
          <br></br>
          <a href={repo} id='reponame'>-Repository-</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
