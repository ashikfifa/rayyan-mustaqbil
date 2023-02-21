import React from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./";
const $ = window.$;
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contact() {
  return (
    <div className="containe">
      <Router>
        <Navigation />
      </Router>
      <Helmet>
        <style>{"body { background-color: #c5da9c; }"}</style>
      </Helmet>

      <div class="container">
        <div class="row">
          <div style={{ marginTop: "4%" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "Branch",
                fontWeight: "700",
              }}
            >
              GET IN TOUCH WITH US
            </p>

            <p
              style={{
                marginBottom: "-1%",
                textAlign: "center",
                color: "#ff9900",
                fontWeight: "700",
                marginTop: "-1%",
              }}
            >
              Contact us
            </p>
            <form onSubmit={sendEmail}>
              {/* {renderAlert()} */}

              <div className="row pt-5 mx-auto">
                <div id="nameid" className="col-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div class="col-8 form-group mx-auto">
                  <select id="inputState" class="form-control" name="option">
                    <option selected> --Select Option-- </option>
                    <option>Image Editing Service</option>
                    <option>Video Editing Service</option>
                  </select>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>

                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="col-8 form-group pt-2 mx-auto" hidden>
                  <textarea
                    cols="30"
                    rows="3"
                    type="number"
                    className="form-control"
                    name="uniqueid"
                    id="hello"
                  />
                </div>

                <div className="col-8 pt-3 mx-auto">
                  <div class="text-center">
                    <input
                      type="submit"
                      id="button-19"
                      className="btn btn-info"
                      value="SUBMIT"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

function randomDate(end) {
  return new Number(end + Math.random());
}
var p = randomDate(new Number()) * 10000000000000000;
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_bb7k48w",
      "template_3wy2y2c",
      e.target,
      "8KzfnKI7zpiWXHnv8"
    )
    .then(
      (result) => {
        console.log(result.text);
        window.location.href = "./thank-you/" + p;
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function whatis() {
  document.getElementById("hello").innerHTML = p;
}
$(document).ready(function () {
  whatis();
});
