import React, { Component } from 'react';
import Navigation from './Navigation';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div className="contact-wrapper">
        <Navigation />
        <h1 className="contact-header">Contact</h1>
        <p>Think we messed up somewhere?</p>
        <p>Want to see something included?</p>
        <a className="contact" href="mailto:julian.kyer@gmail.com?subject=EDM%20Tut.r"><p>Send us a note!</p></a>
      </div>
    )
  }
}

export default Contact;