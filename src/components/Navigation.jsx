import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
const $ = window.$;

function Navigation(props) {
  function refreshPage() {
    window.location.reload("/");
  }

  function refreshPagees() {
    window.location.href = "./es";
  }

  function refreshPagefr() {
    window.location.href = "./fr";
  }

  function refreshPagenl() {
    window.location.href = "./nl";
  }

  function refreshPageth() {
    window.location.href = "./th";
  }

  function refreshPagede() {
    window.location.href = "./de";
  }
  return (
    <Navbar collapseOnSelect sticky="top" expand="sm" bg="light" variant="dark">
      <Container>
        <div class="" onClick={refreshPage}>
          <Link class="navbar-brand" to="/">
            <img
              id="logowiz"
              src="../../assets/images/RM Logo Final 29 dec-01.png"
              width="210"
              height="40"
              alt=""
            />
          </Link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          style={{ height: "49px", width: "70px" }}
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon-updated"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            {/* <li class="nav-item active" onClick={refreshPage}>
                <Link class="nav-link"  to="/">
                  HOME
                  <span class="sr-only">(current)</span>
                </Link>
        </li> */}

            {/* <li class="nav-item">
                <Link class="nav-link" to="/services">
                  Tools & API
                </Link>
              </li> */}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICE
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/#image-editing-service">
                    IMAGES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#video-editing-service">
                    VIDEOS
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#apps">
                APPS
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#prices">
                PRICE
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#how-it-works">
                HOW IT WORKS
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#blog">
                BLOGS
              </a>
            </li>

            {/* <li class="nav-item">
                <a class="nav-link" href="#contactus">
                  
                  CONTACT
                </a>
              </li> */}

            <li class="nav-item">
              <a class="nav-link" href="/our-integration">
                OUR INTEGRATION
              </a>
            </li>

            <li class="nav-item">
              <Link class="nav-link" target="_blank" to="/contact-us">
                CONTACT
              </Link>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="https://app.cutoutwiz.com/"
                target="_blank"
              >
                <button id="button9">SIGN UP</button>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default withRouter(Navigation);
