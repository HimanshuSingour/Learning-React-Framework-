import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="card text-center fixed-bottom bg-primary text-white">
        <div className="card-body">
          <h5 className="card-title">
            Fortifying Digital Fortresses: Latest Innovations in Cyber Security
          </h5>
          <p className="card-text">
            Advancements in machine learning pave the way for stronger cyber
            defenses against evolving threats.
          </p>
          <a href="/home" className="btn btn-dark">
            Explore News
          </a>
        </div>

        
      </div>
    );
  }
}

export default Footer;
