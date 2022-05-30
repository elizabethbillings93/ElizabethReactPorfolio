import React from 'react';
import headshot from  '../../assets/headshot/headshot.jpeg';

function About() {
  return (
    <section className="my-5">
   <div className="my-2">
        <div className="profile-img my-5">
          <img src={headshot} className='headshot' alt=''></img>
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        <div className="aboutparagraph">
        <p>
        Originally arrived in the world in Atlanta, Georgia. Years later I moved to Jacksonville State University to achieve a Bachelor of Arts in Communications.
                I used Adobe Premiere Pro to edit travel videos and found an interest in using programs to create.
        </p>
        <p>
        Following graduation, I moved back to Atlanta and worked in the Film Industry. Life brought me to Fort Worth, Texas where I started to coordinate power for large events around Dallas-Fort Worth.
        Finding that I enjoyed more creating, I decided to change career paths to Software Development. 
        I am currently attending Georgia Tech Coding Bootcamp and will be certified by June. 
        </p>
      </div>
      </div>
</div>  
    </section>

  );
}

export default About;
