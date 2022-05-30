import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.cohttps://github.com/elizabethbillings93/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/elizabethcbillings/"
    }
  ]

  return (
    <footer>
      {icons.map(icon =>
      (<a href={icon.link} key={icon.name}>
        <i className={icon.name}></i></a>))}
    </footer>
  );
}

export default Footer;