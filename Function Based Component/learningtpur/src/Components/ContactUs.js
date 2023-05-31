import React, { useEffect } from "react";
import FooterForHome from "./FooterForHome";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  const handingOnclickSend = () => {
    alert("Email Send Successfullly..");
    navigate("/home");
  };

  const hadnlingOnClickCancel = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="container bg-dark text-white my-5">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            CONTACT US
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row my-3 my-3">
                  <div className="col-md-6">
                    <div className="md-form mb-0 ">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label for="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label for="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label for="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left ">
                <button
                  onClick={handingOnclickSend}
                  className="btn btn-primary"
                >
                  Send
                </button>

                <button
                  onClick={hadnlingOnClickCancel}
                  className="btn btn-danger mx-5"
                >
                  Cancel
                </button>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Jabalpur, SDE 94126, India</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+91 6266769479</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>singourhimanshu3@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FooterForHome />
      </div>

      <div className="container font-weight-bold text-muted">
        The information provided in this app is for general informational
        purposes only and should not be considered as professional advice. We
        strive to ensure the accuracy and timeliness of the information
        presented, but we make no warranties or representations of any kind,
        express or implied, about the completeness, accuracy, reliability,
        suitability, or availability of the app or the information, products,
        services, or related graphics contained within the app for any purpose.
        Any reliance you place on such information is strictly at your own risk.{" "}
        <br /> <br />
        The app may contain links to external websites or resources that are not
        controlled or maintained by us. We do not endorse or assume
        responsibility for the content, privacy policies, or practices of any
        third-party websites or resources. Accessing and using such links are at
        your own discretion and risk. <br /> <br />
        We do not endorse or warrant the suitability, effectiveness, or safety
        of any products, services, or recommendations mentioned or advertised
        within the app. Users should exercise their own judgment and conduct
        appropriate research before making any decisions or taking any actions
        based on the information provided. <br /> <br />
        We strive to keep the app accessible and operational at all times.
        However, we do not guarantee uninterrupted or error-free functionality
        of the app. We shall not be held liable for any technical issues,
        interruptions, or errors that may arise in the app or any loss or damage
        caused by such issues. <br /> 
        <h1 >Developed By TLEHS Community</h1>
      </div>
    </>
  );
}

export default ContactUs;
