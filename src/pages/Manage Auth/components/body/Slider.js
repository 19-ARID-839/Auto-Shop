import React from "react";
import "./slider.css";
import car1 from "../../../../assets/car1.png";

const Slider = () => {
  return (
    <div className="main-cntainer" id="contact">
      <div className="first-half">
        <div className="heading">Open Hours</div>
        <div class="day">
          <div className="sub-heading">Monday</div>
          <div className="text">7.30 am to 6.00 pm</div>
        </div>
        <div class="day">
          <div className="sub-heading">Tuesday</div>
          <div className="text">7.30 am to 6.00 pm</div>
        </div>
        <div class="day">
          <div className="sub-heading">Wdnesday</div>
          <div className="text">7.30 am to 6.00 pm</div>
        </div>
        <div class="day">
          <div className="sub-heading">Thrusday</div>
          <div className="text">7.30 am to 6.00 pm</div>
        </div>
        <div class="day">
          <div className="sub-heading">Friday</div>
          <div className="text">7.30 am to 6.00 pm</div>
        </div>
        <div class="day">
          <div className="sub-heading">Saturday</div>
          <div className="text">7.30 am to 9.00 pm</div>
        </div>
        <div class="day">
          <div className="sub-heading">Sunday</div>
          <div className="text">9.30 am to 6.00 pm</div>
        </div>
      </div>
      <div className="second-half">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 slidpic" src={car1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 slidpic"
                src={car1}
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 slidpic" src={car1} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
