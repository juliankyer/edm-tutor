import React from 'react';

const About = () => {
  return (
    <div className="about-wrapper">
      <h1>About</h1>
      <p className="about-paragraph">EDMTut.r is designed to be a quick introduction to Electronic Dance Music. EDM is like wine, there are a lot of variables to deal with,
         and the best way to decide what you like is to absorb variety. We want to expose you to a range of sounds with brief descriptions,
         and let you fill in the rest.
      </p>
      <p className="about-paragraph">
        This collection is by no means the be-all, end-all... There are way more subgenres than those listed,
        and it's completely possible we got some things wrong. Shoot us a note if you think we messed up,
        or send us a genre with some examples that you'd like to see included. 
      </p> 
      <p className="about-paragraph">
        Finally, a note on listening: we highly recommend listening to EDM through decent headphones or speakers...
        EDM is naturally bass-heavy, and much of audio range is washed out by your laptop's speakers. And once you find
        your styles, go see a show in person. Nothing compares.
      </p>
      <p className="about-paragraph">
        Thanks for listening.
      </p>   
    </div>
  )
}

export default About;