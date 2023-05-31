import React from "react";
import { Link } from "react-router-dom";
import FooterForHome from "./FooterForHome";

function AboutUs() {
  return (
    <>
      <div className="container">
        <h1>MEET OUR TEAM</h1>
        <h3>
          We are all very different. We were born in different cities, at
          different times, we love different music, food, movies. But we have
          something that unites us all. It is our company. We are its heart. We
          are not just a team, we are a family.
        </h3>
        <div className="container my-5">
          <Link to="/contact" className="btn btn-secondary btn-lg btn-block ">
            CONTACT US
          </Link>
        </div>

        <div className="container shadow bg-warning text-white ">
          <h1>Creativity</h1>
          <h4>
            It's the ability to think outside the <br /> box. We make decisions,
            create <br /> something new and generate a lot of <br /> ideas.
          </h4>
        </div>

        <div className="container shadow bg-success ">
          <h1>Worldwide</h1>
          <h4>
            All sites you make with Mobirise are <br /> mobile-friendly. You
            don't have to <br /> create a special mobile version of <br /> your
            site.
          </h4>
        </div>

        <div className="container shadow bg-danger">
          <h1>Unique Styles</h1>
          <h4>
            Mobirise offers many site blocks in <br /> several themes, and
            though these <br /> blocks are pre-made, they are <br /> flexible.
          </h4>
        </div>

        <FooterForHome />
      </div>
    </>
  );
}

export default AboutUs;
