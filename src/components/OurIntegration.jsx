import React from "react";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigation } from "./";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function Ourintegration() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <Router>
        <Navigation />
      </Router>
      <Helmet>
        <title>
          Image & Video Editing Company | Our Integration | CutOutWiz
        </title>
        <meta
          name="description"
          keywords="our integration"
          content="By implementing product photo editing, you'll be able to be removing backgrounds, edit a photo and ensure professional retouching. "
        />
      </Helmet>
      <div
        style={{
          backgroundColor: "#c5da9c",
          height: "40vh",
          lineHeight: "40vh",
        }}
      >
        <div class="container">
          <p style={{ fontSize: "204%", fontWeight: "700" }}>
            APPS & INTEGRATIONS
          </p>
        </div>
      </div>
      <div class="container" style={{ marginTop: "12%" }}>
        <div class="row">
          <div class="col-md-6">
            <div class="container reveal fade-bottom">
              <p
                style={{
                  fontSize: "204%",
                  fontWeight: "700",
                  color: "#c5da9c",
                }}
              >
                Cutoutwiz
              </p>
              <p style={{ textAlign: "justify", fontSize: "22px" }}>
                CutOutWiz is a leading high volume technology driven image and
                video post-production company that generates more than 45000
                images and videos daily. We have a team of 650 people who work
                relentlessly to ensure customer satisfaction and offer a 24/7
                round the clock tailored service. No matter the time or the
                volume we are always at your service offering the fastest
                turnaround time of 8-12 hours and one of the best prices in the
                market. While we take care of your images you can increase your
                sales by focusing on other pressing business matters.
              </p>
              <a target="_blank" href="https://cutoutwiz.com">
                <button id="viewbtn">View Project</button>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="assets/images/3924952533.jpg"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        <div class="row" style={{ marginTop: "8%" }}>
          <div class="col-md-6">
            <img
              src="assets/images/2015325170.jpg"
              height="100%"
              width="100%"
            />
          </div>

          <div class="col-md-6">
            <div class="container reveal fade-bottom">
              <p
                style={{
                  fontSize: "204%",
                  fontWeight: "700",
                  color: "#c5da9c",
                }}
              >
                KOW Studios
              </p>
              <p style={{ textAlign: "justify", fontSize: "22px" }}>
                With the vision to move forward and expand our business to tap
                into unexplored markets, we launched “The Kow Studios” in 2019.
                Although globally we’ve worked with 25 studios globally till
                now, with Kow Studios, we are able to conduct photo and video
                shoots with professional brands on our own. Previously we were
                only involved with content post production whereas now we are
                taking over the content production sector as well. This way, we
                plan to be one of the most customer centric visual content
                management companies in Asia.
              </p>
              <a target="_blank" href="#">
                <button id="viewbtn">View Project</button>
              </a>
            </div>
          </div>
        </div>

        <div class="row" style={{ marginTop: "8%" }}>
          <div class="col-md-6">
            <div class="container reveal fade-bottom">
              <p
                style={{
                  fontSize: "204%",
                  fontWeight: "700",
                  color: "#c5da9c",
                }}
              >
                Shopify app
              </p>
              <p style={{ textAlign: "justify", fontSize: "22px" }}>
                Shopify is a Canada-based multi-regional company that creates
                point of sale opportunity for retail and online sellers through
                an e-commerce platform. Using the Shopify platform, sellers are
                able to set up their own stores with the help of different tools
                and apps available on Shopify at relatively lower cost. Our app
                is available on Shopify as well. As Shopify is directed towards
                small and medium size retail sellers and drop shippers, using
                our app they can get image and video editing facilities at a
                reasonable price. We ensure quality and focus heavily on what
                the customer wants and how they want it, through constant
                communication.
              </p>
              <a
                target="_blank"
                href="https://apps.shopify.com/cutoutwiz?surface_detail=cutoutwiz&surface_inter_position=1&surface_intra_position=4&surface_type=search"
              >
                <button id="viewbtn">View Project</button>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="assets/images/1674228817.jpg"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        <div class="row" style={{ marginTop: "8%" }}>
          <div class="col-md-6">
            <img src="assets/images/430014771.jpg" height="100%" width="100%" />
          </div>

          <div class="col-md-6">
            <div class="container reveal fade-bottom">
              <p
                style={{
                  fontSize: "204%",
                  fontWeight: "700",
                  color: "#c5da9c",
                }}
              >
                BigCommerce app
              </p>
              <p style={{ textAlign: "justify", fontSize: "22px" }}>
                BigCommerce is also an e-commerce platform providing store
                building, SEO ad hosting facilities to retail sellers. The main
                purpose behind being featured in these apps is to reach SME
                business owners as they constitute a big part of any economy.
                This platform has already enlisted more than 45000 sellers from
                around the globe and more than 50% of them are from USA. In
                order for them to have smooth selling journey where they won’t
                have to worry about spending hours editing images, we are
                constantly encouraging them to leave their image related worries
                to us. Through constant efficiency and skilled training, we have
                built up a workforce so strong that once a client starts to work
                with us, they are hardly likely to leave us due to
                uncompromising quality we provide
              </p>
              <a
                target="_blank"
                href="https://www.bigcommerce.com/apps/cutoutwiz/"
              >
                <button id="viewbtn">View Project</button>
              </a>
            </div>
          </div>
        </div>

        <div class="row" style={{ marginTop: "8%" }}>
          <div class="col-md-6">
            <div class="container reveal fade-bottom">
              <p
                style={{
                  fontSize: "204%",
                  fontWeight: "700",
                  color: "#c5da9c",
                }}
              >
                Amazon SPN
              </p>
              <p style={{ textAlign: "justify", fontSize: "22px" }}>
                One of the biggest companies of the US tech industry is Amazon
                that provides multiple services to ensure customers all around
                the world have a smoother e-commerce journey. One of these
                services is that they provide merchants with the opportunity are
                to set up their own stores on the Amazon website and sell their
                products. Amazon sellers have been able to create a community of
                their own known as the service provider network (SPN) where they
                help each other overcome their shortcomings. As most sellers
                here don’t take being an Amazon seller as a full-time job,they
                require help from Amazon and different apps to save time and
                energy that can be utilized elsewhere. This is where we come in.
                Through our app, CutOutWiz, we try to take care of all their
                image and video editing worries at an affordable price. With
                better quality pictures, they are able to generate more revenue
                and take their business to the top.
              </p>
              <a
                target="_blank"
                href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US"
              >
                <button id="viewbtn">View Project</button>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <img src="assets/images/971920655.jpg" height="100%" width="100%" />
          </div>
        </div>

        <div class="row" style={{ marginTop: "8%", marginBottom: "4%" }}>
          <div class="col-md-6">
            <img
              src="assets/images/1236267163.jpg"
              height="100%"
              width="100%"
            />
          </div>

          <div class="col-md-6">
            <div class="container reveal fade-bottom">
              <p
                style={{
                  fontSize: "204%",
                  fontWeight: "700",
                  color: "#c5da9c",
                }}
              >
                ShotFlow Integration
              </p>
              <p style={{ textAlign: "justify", fontSize: "22px" }}>
                ShotFlow is a studio production management specialized workflow
                tool that helps studios with planning, managing, capturing and
                posting images being shot. The entire workflow management of a
                studio becomes effortless after signing up to ShotFlow. In 2020,
                we entered into a partnership with ShotFlow. Now the users who
                avail both our services won’t to separately send us the
                photographs for editing. They will get ShotFlow in the same
                package for free, if they edit their images with us. Now just
                with a simple instruction to ShotFlow, the images will come
                directly to us, saving both parties time and effort.
              </p>
              <a target="_blank" href="https://www.shotflow.com/">
                <button id="viewbtn">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row" id="fot-phn">
        <div
          class="footer"
          style={{
            backgroundColor: "#e3e6d8",
            width: "100vw",
            marginTop: "0%",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-3" style={{ marginTop: "4%" }}>
                <Link to="/" target="_blank">
                  <img
                    src="../../assets/images/RM Logo Final 29 dec-01.png"
                    style={{ marginTop: "3%" }}
                    width="210"
                    height="40"
                    alt=""
                  />
                </Link>

                <p
                  style={{
                    textAlign: "justify",
                    color: "#01302b",
                    marginTop: "4%",
                    fontWeight: "500",
                  }}
                >
                  Rayyan Mustaqbil is an ambitious content post-production
                  company that is growing on an accelerated rate due to its
                  strong teamwork, persistency and company culture.
                </p>
                <a
                  href="https://www.facebook.com/cutoutwiz"
                  target="_blank"
                  class="fa fa-facebook"
                ></a>
                <a
                  href="https://twitter.com/cut_wiz?s=09"
                  target="_blank"
                  class="fa fa-twitter"
                ></a>
                <a
                  href="https://www.linkedin.com/company/cutoutwiz-ltd"
                  target="_blank"
                  class="fa fa-linkedin"
                ></a>
                <a
                  href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"
                  target="_blank"
                  class="fa fa-youtube"
                ></a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  class="fa fa-instagram"
                ></a>
              </div>

              <div class="col-6 col-md-2" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>Menu</b>

                <p style={{ color: "#b7b9bb", marginTop: "8%" }}>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Home
                  </a>{" "}
                  <br />
                  <a
                    href="/#apps"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Features
                  </a>
                  <br />
                  <a
                    href="/#image-editing-service"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Services
                  </a>
                  <br />
                  <a
                    href="/#prices"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Pricing
                  </a>
                  <br />
                  <a
                    href="/#blog"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Blogs
                  </a>
                </p>
              </div>

              <div class="col-6 col-md-2" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>Features</b>
                <p style={{ color: "#01302b", marginTop: "8%" }}>
                  <a
                    href="https://apps.shopify.com/cutoutwiz"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    Shoppify App
                  </a>{" "}
                  <br />
                  <a
                    href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    AmazonSPN{" "}
                  </a>
                  <br />
                  <a
                    href="https://app.cutoutwiz.com"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Cutoutwiz
                  </a>
                  <br />
                  <a
                    href="https://www.bigcommerce.com/apps/cutoutwiz"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    BigCommerce App
                  </a>
                  <br />
                  <a
                    href="https://www.shotflow.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Shotflow
                  </a>
                </p>
              </div>

              <div class="col-6 col-md-2" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>
                  Useful Links
                </b>

                <p style={{ color: "#01302b", marginTop: "8%" }}>
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                  <br />
                  <Link
                    to="/terms-and-conditions"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Terms & Condition
                  </Link>
                  <br />
                  <Link
                    to="/contact-us"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    Contact Us
                  </Link>{" "}
                  <br />
                  <a
                    href="https://app.cutoutwiz.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    Sign Up
                  </a>{" "}
                  <br />
                </p>
              </div>

              <div class="col-6 col-md-3" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>
                  Our Address
                </b>{" "}
                <br /> <br />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
                  width="70%"
                  height="50%"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              color: "white",
              padding: "8px",
              backgroundColor: "black",
            }}
          >
            Designed And Developed By{" "}
            <Link
              to="/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              CutOutWiz
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Ourintegration;
