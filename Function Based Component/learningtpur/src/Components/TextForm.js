import React, { useState, useEffect } from "react";
import TextShow from "./TextShow";
import { Link } from "react-router-dom";
import h from "../h.png"
import Footer from "./Footer";
import FooterForHome from "./FooterForHome";

function TextForm(props) {
  const [text, setText] = useState("Enter Text Here.....");

  const [Dark, setDark] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [btntext, setBtnText] = useState("Enable Light Dark Modes ");

  // useEffect(() => {

  //   alert("Welcome To This Application @Developed By TLEHS")

  // })

  const handingDarkMode = () => {
    if (Dark.backgroundColor == "black") {
      setDark({
        backgroundColor: "white",
        color: "black",
      });

      setBtnText("Switch To Dark Mode");
    } else {
      setDark({
        backgroundColor: "black",
        color: "white",
      });

      setBtnText("Switch To Light Mode");
    }
  };

  const handlingUpparCase = () => {
    console.log("Upper Case was Clicked");
    let newTex = text.toUpperCase();
    setText(newTex);
  };

  const handlingLowerCase = () => {
    console.log("Lower was Clicked");
    let newTex = text.toLowerCase();
    setText(newTex);
  };

  const handlingOnChange = (event) => {
    console.log("Typing...");
    setText(event.target.value);
  };

  const handlingClear = () => {
    console.log("Clear Button is cliked");
    setText("");
  };

  const handlingprint = () => {
    console.log("Printing...");
    alert("No Printing Device is Found");
  };

  return (
    <>


      <div className="container" style={Dark}>

        
        <h2 className="mx-5">{props.heading} </h2>

        <Link to="/about" className="btn btn-danger my-4 mx-5 shadow">About Developer</Link>

        <div className="container my-5">
          <div className="border bg-dark text-white">
            <h3 className="mx-5 my-4">
              Total Character: {text.length} & Total Words:{" "}
              {text.split(" ").length - 1}
            </h3>
          </div>

          <textarea
            className="form-control"
            value={text}
            onChange={handlingOnChange}
            rows="12"
            id="myBox"
          ></textarea>

          <button
            className="btn btn-primary my-5 mx-4 shadow"
            onClick={handlingUpparCase}
          >
            Convert To UpparCase
          </button>
          <button
            className="btn btn-primary my-5 mx-4 shadow"
            onClick={handlingLowerCase}
          >
            Convert To LowerCase
          </button>

          <button
            className="btn btn-secondary my-5 mx-4 shadow"
            onClick={handlingClear}
          >
            Clear All Text
          </button>

          <button
            className="btn btn-secondary my-5 mx-3 shadow"
            onClick={handlingprint}
          >
            Print Above Text
          </button>

          <button
            className="btn btn-success my-5 mx-5 shadow"
            onClick={handingDarkMode}
          >
            {btntext}
          </button>
        </div>

        <TextShow about={text} />
        <FooterForHome/>
      </div>
    </>
  );
}

export default TextForm;
