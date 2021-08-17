import React from "react";
import { Link } from "react-router-dom";
import ring from "../assets/images/Products/ring.jpg";
import { sari } from "../jsonFiles/jsonFile";

const Shop = () => {
  return (
    <div>
      <div className="page-heading products-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>new arrivals</h4>
                <h2>K & K products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div class="accordion accordion-flush" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Categories
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <a href="">Sari</a>
                        </li>
                        <li>
                          <a href="">Lehenga</a>
                        </li>
                        <li>
                          <a href="">One Piece</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Size
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Extra Large (XL)</li>
                        <li>Extra Large (XL)</li>
                        <li>Large (L)</li>
                        <li>Medium (M)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Color
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Red</li>
                        <li>Black</li>
                        <li>Pink</li>
                        <li>White</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="section-heading">
                <h2>Latest Sari</h2>
              </div>
              <div className="row">
                {sari.map((arg) => (
                  <div className="col-lg-4 col-md-6">
                    <div className="product-item">
                      <div className="product-image">
                        <img src={arg.image} alt="" />
                      </div>
                      <div className="down-content text-left">
                        <Link to="/shop/single">
                          <h4>{arg.name}</h4>
                        </Link>
                        <h6>Rs. {arg.Price}</h6>
                      </div>
                    </div>
                  </div>
                ))}{" "}
                {sari.map((arg) => (
                  <div className="col-lg-4 col-md-6">
                    <div className="product-item">
                      <div className="product-image">
                        <img src={arg.image} alt="" />
                      </div>
                      <div className="down-content text-left">
                        <Link to="/shop/single">
                          <h4>{arg.name}</h4>
                        </Link>
                        <h6>Rs. {arg.Price}</h6>
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
  );
};

export default Shop;
