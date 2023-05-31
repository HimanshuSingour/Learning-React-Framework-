import React, { Component } from "react";


export class Welcome extends Component {
  render() {
    return (
      <div className="className bg-dark text-white">
        <div className="container my-5 ">
          <div className="container my-5 ">
            <div className="container my-5  ">
              <h1 style={{ fontSize: "70px" }}>Welcome To NewsCyber</h1>
              <h1>Powdered By TLEHS Community...</h1>
              <h4 className="text-muted my-5">
                The cybersecurity news web application delivers real-time
                updates, articles, and insights on the latest cyber threats,
                breaches, and security trends. It keeps users informed about
                emerging vulnerabilities, hacking incidents, data breaches, and
                best practices for maintaining online safety. By aggregating and
                curating news from reliable sources, the application aims to
                educate and empower individuals and businesses to stay ahead of
                cyber risks and make informed decisions regarding their digital
                security strategies.
              </h4>
            </div>

            <div className="container">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
