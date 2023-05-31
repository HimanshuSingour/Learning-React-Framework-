import React from "react";

function FooterForHome() {
  return (
    <body class="d-flex flex-column fixed-bottom">
      <div id="page-content">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <h1 class="fw-light mt-4 text-white"></h1>
              <p class="lead text-white-50"></p>
            </div>
          </div>
        </div>
      </div>
      <footer
        id="sticky-footer"
        class="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div class="container text-center">
          <small>
            Copyright &copy; All Right Reserved 2022 By @TLEHS
          </small>
        </div>
      </footer>
    </body>
  );
}

export default FooterForHome;
