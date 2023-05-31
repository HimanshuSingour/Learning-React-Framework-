import React, { Component } from "react";

export class SocialMediaHandlers extends Component {


    
  render() {
 
      
    const handlingingLinkedin = () =>{

        alert("https://www.linkedin.com/in/himanshu-singour-95627b222/")

    }

    const handlingInstagram = () => {

        alert("https://www.instagram.com/endless_success___/")
    }
     
     

    return (
        
      <div className="text-center my-5">
        <br />
        <div className="jumbotron">
          <h1 className="display-4">Social Handlers...</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
         
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead mx-5">

            <button className="btn btn-danger btn-lg mx-4"  role="button" onClick={handlingInstagram}>
             Instagram
            </button>

            <button className="btn btn-success btn-lg mx-4"  role="button" onClick={handlingingLinkedin}>
              Linkedin
            </button>

            <button className="btn btn-primary btn-lg mx-4" role="button" >
              Facebook
            </button>

            <button className="btn btn-dark btn-lg mx-4" role="button">
               Twitterrr
            </button>

          </p>
        </div>
      </div>
    );
  }
}

export default SocialMediaHandlers;
