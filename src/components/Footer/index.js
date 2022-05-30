import React from 'react';

function Footer() {
  const icons = [
    {
      name: "github",
      link: "https://github.com/"
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/"
    },
  ]
// Need to work on this
  return (
<footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;