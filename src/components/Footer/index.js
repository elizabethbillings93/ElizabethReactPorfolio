import React from 'react';

function Footer() {
  const footerlinks = [
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
    <footer>
     {footerlinks[0]}
     {footerlinks[1]}
    </footer>
  );
}

export default Footer;