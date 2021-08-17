import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget text-left">
                  <h4>About K & K Collection</h4>
                  <p>
                    <span className="text"> K&K Collection </span> is new to
                    this market and we want to serve the best products to the
                    people to make their time memorable.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mt-md-0">
                <div className="footer-link text-left">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Products</a>
                    </li>

                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 mt-4 mt-lg-0">
                <div className="footer-link-contact text-left">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fa fa-map-marker"></i>Address: Samakhusi,
                        Town Planning,
                        <br /> Kathmandu{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-phone-square"></i>Phone:{" "}
                        <a href="tel:+1-888705770">+977-1-4215421</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-envelope"></i>Email:{" "}
                        <a href="mailto:knkcollection@gmail.com">
                          knkcollection@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <p>
                  Copyright &copy; 2021 K & K Collection Co. Ltd. - Design:{" "}
                  <a
                    rel="nofollow noopener"
                    href="http://divashranabhat.com.np"
                    target="_blank"
                  >
                    Divash Ranabhat
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
