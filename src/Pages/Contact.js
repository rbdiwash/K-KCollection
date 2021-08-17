import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="page-heading contact-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>contact us</h4>
                <h2>let’s get in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.437961221336!2d85.31383551443508!3d27.734634530900408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19272b18cc63%3A0x8bc34ddd106b62f2!2sGongabu%20Town%20Planning!5e0!3m2!1sen!2snp!4v1628947653791!5m2!1sen!2snp"
                  width="100%"
                  height="400px"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content text-justify">
                <h4>About our Shop</h4>
                <p>
                  We provide you the best and fresh items available in the
                  market.
                  <br />
                  <br />
                  Latest designs and trending fashions are available in our shop
                  at very reasonable price. Be the first one today to order and
                  get exciting offers and discounts
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

      <div className="send-message">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Send us a Message</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box rounded shadow px-4 py-5 text-center">
                <h5 className="my-2 text">
                  <u> Contact our Sales</u>
                </h5>
                <p>Miss Sabita Ranabhat</p>
                <p>
                  <i className="fa fa-phone"></i> 081-540965
                </p>
                <p>
                  <i className="fa fa-map-marker"></i> Samakhusi Town Planning{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box rounded shadow px-4 py-5 text-center">
                <h5 className="my-2 text">
                  <u> Contact Shop</u>
                </h5>
                <p>
                  {" "}
                  <i className="fa fa-shopping-cart"></i> We deliver in time.
                </p>
                <p>
                  <i className="fa fa-phone"></i> 081-540965
                </p>
                <p>
                  <i className="fa fa-map-marker"></i> Samakhusi Town Planning{" "}
                </p>
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
                <h2>Our Happy Customers</h2>
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
      </div>*/}
    </div>
  );
};

export default Contact;
