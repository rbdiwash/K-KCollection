import React from "react";
import about from "../assets/images/product_06.jpg";
import owner from "../assets/images/owner.jpg";

import { employee } from "../jsonFiles/employee";

const About = () => {
  return (
    <div>
      <div className="page-heading about-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>about us</h4>
                <h2>our company</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Background</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Who we are &amp; What we do?</h4>
                <p>
                  <span className="text"> K&K Collection </span> is new to this
                  market and we want to serve the best products to the people
                  around this globe.
                  <br />
                  <br />
                  We care about customers, trending fashion and the need of the
                  peoples. So we bring you the latest products available and
                  trending in the market at very reasonable price.
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Hardworking Team</h2>
              </div>
            </div>
            {employee.map((arg) => {
              return (
                <div className="col-md-4">
                  <div className="team-member">
                    <div className="thumb-container">
                      <img src={arg.image} alt="" />
                      <div className="hover-effect">
                        <div className="hover-content">
                          <ul className="social-icons">
                            <li>
                              <a href={arg.facebook}>
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href={arg.instagram}>
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>

                            <li>
                              <a href={arg.facebook}>
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <h4>{arg.name}</h4>
                      <span>{arg.post}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="down-content">
                  <h4>Customer Relations</h4>
                  <p>
                    We tend to make our relation with customer to be in harmony
                    as much as possible.
                  </p>
                  <a href="#" className="filled-button">
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Global Collection</h4>
                  <p>
                    We have collection of every brands and good quality
                    products. So feel free to order.
                  </p>
                  <a href="#" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </div>
                <div className="down-content">
                  <h4>Product Management</h4>
                  <p>
                    We are branding our products in all social media and
                    managing our products to be fine.
                  </p>
                  <a href="#" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="happy-clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Happy Partners</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-clients owl-carousel">
                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="1" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="2" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="3" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="4" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="5" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    */}
    </div>
  );
};

export default About;
