import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "../assets/images/Sari/s1.jpg";

const SingleProduct = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="portfolio-details" className="portfolio-details mb-5">
      <div className="section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7 ">
              <div className="portfolio-details-slider swiper-container">
                <div className="swiper-wrapper align-items-center shadow">
                  <div className="swiper-slide">
                    <Carousel
                      autoPlay={true}
                      autoPlaySpeed={3000}
                      infiniteLoop={true}
                      autoFocus={true}
                      showArrows={true}
                      showIndicators={true}
                      showThumbs={true}
                      useKeyboardArrows={true}
                      verticalSwipe="natural"
                    >
                      {/* {single?.image?.map((img) => ( */}
                      <a href={img} data-lightbox="photos" data-title="Photos">
                        <img alt="" src={img} className="rounded img-fluid" />
                      </a>
                      {/* ))} */}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 ">
              <div className="portfolio-info">
                <div className="d-flex justify-content-between">
                  <h3>Red Beautiful Sari</h3>
                  <i
                    className="fa fa-heart"
                    style={{ color: "#f33f3f", fontSize: "24px" }}
                  ></i>
                </div>
                <span>
                  Color : Red, Blue
                  <div className="d-flex justify-content-start align-items-center my-3">
                    <div className="red"></div>
                    <div className="blue"></div>
                  </div>
                </span>
                <p>Size: Medium, Large</p>
                <h5>Price: Rs 1500</h5>
                <button
                  type="button"
                  className="filled-button mt-3"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  style={{ width: "100%", fontSize: "18px" }}
                >
                  <i
                    className="fa fa-shopping-cart pr-2"
                    aria-hidden="true"
                  ></i>
                  Add to Bag
                </button>
              </div>
              <div className="portfolio-description">
                <h2>Description</h2>
                <p>
                  मखमले सारी एकदमै सस्तों अनि सुपथ मूल्यमा Thanks to you, this
                  sari has a chance to shine! This blouse is going to look
                  amazing with so many different bottoms and accessories! You
                  can tuck it into a skirt, pair it with skinny or flare jeans
                  and styling it is going to be even easier! We love those
                  dramatic bloused sleeves too! This blouse features a v
                  neckline, bubble sleeves, and a flowy fit. Material has no
                  amount of stretch. Cam is wearing the small. Actual product
                  colors may vary from images shown due to different viewing
                  devices and lighting. Unlined. Imported.
                </p>
              </div>
            </div>
          </div>
        </div>
        {openModal === true ? <Modal dataTarget={"exampleModal"} /> : null}
      </div>
    </section>
  );
};

export default SingleProduct;
