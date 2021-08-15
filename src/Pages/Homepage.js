import React from "react";
import image1 from "../assets/images/Products/p1.jpg";
import image2 from "../assets/images/Products/p2.jpg";
import image3 from "../assets/images/Products/p3.jpg";
import image4 from "../assets/images/Products/p4.jpg";
import image5 from "../assets/images/Products/p5.jpg";
import image6 from "../assets/images/Products/p6.jpg";
import about from "../assets/images/products-heading.jpg";
import tshirt from "../assets/images/tshirt.png";
import hanger from "../assets/images/hanger.png";
import handbag from "../assets/images/handbag.png";
import sneakers from "../assets/images/sneakers.png";
import earring from "../assets/images/Products/earring.jpg";
import earring2 from "../assets/images/Products/earring2.jpg";
import ring from "../assets/images/Products/ring.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sari5 from "../assets/images/Sari/s5.jpg";

import "../assets/css/style.css";
import { Link } from "react-router-dom";

import { sari } from "../jsonFiles/jsonFile";

const Homepage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsiveCard = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        <div className="banner-item-01">
          <div className="text-content text-center">
            <h4>Best Offer</h4>
            <h2 className="display-5">New Arrivals On Sale</h2>
          </div>
        </div>
        <div className="banner-item-02">
          <div className="text-content">
            <h4>Flash Deals</h4>
            <h2>Get your best products</h2>
          </div>
        </div>
        <div className="banner-item-03">
          <div className="text-content">
            <h4>Last Minute</h4>
            <h2>Grab last minute deals</h2>
          </div>
        </div>
      </Carousel>

      {/* <!-- Banner Ends Here --> */}

      <div className="section categories">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0 text-center">
              <h4> OUR CATEGORIES </h4>
              <p>Find all items you want by selectin our featured categories</p>
            </div>
            <div className="col-lg-2  mb-4 mb-lg-0">
              <div className="cat">
                <img src={tshirt} alt="" className="catImg" />
                <p>CLOTHING</p>
              </div>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <div className="cat">
                <img src={sneakers} alt="" className="catImg" />
                <p>SNEAKERS</p>
              </div>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <div className="cat">
                <img src={handbag} alt="" className="catImg" />
                <p>HANGBAGS</p>
              </div>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <div className="cat">
                <img src={hanger} alt="" className="catImg" />
                <p>HANGER</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section advertisement">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 adv">
              <h5 className="text">Everything</h5>
              <Link to="/shop" className="filled-button mt-2">
                Shop Now
              </Link>
            </div>
            <div className="col-lg-6 adv2 tet-center">
              <h5 className="text">Winter Clothes</h5>
              <Link to="/shop" className="filled-button mt-2">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sari-section">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="section-heading">
                <h2>Latest Sari</h2>
                <Link to="/shop">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="sari-image">
                  <img
                    src={sari5}
                    alt=""
                    className="sari-image-ind img-fluid pt-3"
                    style={{
                      width: "100%",
                      height: "100vh",
                      objectFit: "cover",
                    }}
                  />
                  <div className="overlay">
                    <p className="text-black"> Rs. 2500</p>
                    <Link to="/shop" className="filled-button mt-2">
                      Buy
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {sari.map((arg) => (
                    <div className="col-lg-6">
                      <div
                        className="sari-image"
                        style={{
                          width: "100%",
                          height: "50vh",
                        }}
                      >
                        <img
                          src={arg.image}
                          alt={arg.name}
                          className="img-fluid pt-3 sari-image-ind"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div className="overlay">
                          <p className="text-black"> Rs. {arg.Price}</p>
                          <Link to="/shop" className="filled-button mt-2">
                            Buy
                          </Link>{" "}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <Link to="/shop">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-image">
                  <img src={ring} alt="" />
                </div>
                <div className="down-content text-center">
                  <h4>Earring with butterflies.</h4>
                  <h6>$25.75</h6>
                  <Link to="/single" className="filled-button">
                    Shop
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-image">
                  <img src={earring} alt="" />
                </div>
                <div className="down-content text-center">
                  <h4>Earring with butterflies.</h4>
                  <h6>$25.75</h6>
                  <Link to="/single" className="filled-button">
                    Shop
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-image">
                  <img src={ring} alt="" />
                </div>
                <div className="down-content text-center">
                  <h4>Earring with butterflies.</h4>
                  <h6>Rs.125</h6>
                  <Link to="/single" className="filled-button">
                    Shop
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-image">
                  <img src={earring2} alt="" className="img-fluid" />
                </div>
                <div className="down-content text-center">
                  <h4>Earring with butterflies.</h4>
                  <h6>$25.75</h6>
                  <Link to="/single" className="filled-button">
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="delivery text-center">
                <i className="fa fa-scissors scissor" aria-hidden="true"></i>
                <h5>
                  {" "}
                  FREE DELIVERY + RETURN OVER Rs. 1000 (EXCLUDING HOMEWARE)|
                  FREE Consultation.{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <h1 className="text-center"> Shop the Latest Looks.</h1>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsiveCard}
              autoPlay={true}
              infinite={true}
              autoPlaySpeed={2000}
              transitionDuration={500}
              className="banner header-text"
            >
              <div className="sliderImage col-lg-12">
                <img src={image1} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image2} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image3} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image4} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image5} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image6} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image3} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image4} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image5} alt="" className="sliderImageItem" />
              </div>
              <div className="sliderImage col-lg-12">
                <img src={image6} alt="" className="sliderImageItem" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-wrapper"></div>

      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About K & K Collection</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Looking for the best products?</h4>
                <p>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-546-sixteen-clothing"
                    target="_parent"
                  >
                    This template
                  </a>
                  is free to use for your business websites. However, you have
                  no permission to redistribute the downloadable ZIP file on any
                  template collection website.
                  <a rel="nofollow" href="https://templatemo.com/contact">
                    Contact us
                  </a>
                  for more info.
                </p>
                <ul className="featured-list">
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur an adipisicing elit</a>
                  </li>
                  <li>
                    <a href="#">It aquecorporis nulla aspernatur</a>
                  </li>
                  <li>
                    <a href="#">Corporis, omnis doloremque</a>
                  </li>
                  <li>
                    <a href="#">Non cum id reprehenderit</a>
                  </li>
                </ul>
                <a href="about.html" className="filled-button">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>
                      Creative &amp; Unique <em>Sixteen</em> Products
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="filled-button">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
