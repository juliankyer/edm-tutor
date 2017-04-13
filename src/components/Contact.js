import React from 'react';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>Contact</h1>
      <p>Think we messed up somewhere?</p>
      <p>Want to see something included?</p>
      <p>Send us a note!</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input className="email-body" type="text" placeholder="Message" />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  )
}

export default Contact;