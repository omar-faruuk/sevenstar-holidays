import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import train from "../../image/review1.jpeg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, // add the fade property
    cssEase: "linear",
  };

  return (
    <div className="testimonial">
      <div className="container text-center">
        <h4 className="title">Testimonial</h4>
        <p className="fs-4 mb-4 text-white">What our clients saying</p>
        <Slider className="" {...settings}>
          <div className="review">
            <p>
              <i className="fas fa-coffee"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              blanditiis ea libero ad temporibus illo, aperiam illum omnis
              architecto esse? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quia, dolore.
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={train} alt="" />
              <h4 className="text-white">Jhonson</h4>
              <h6 className="text-white">Ceo Of Axiata Ltd</h6>
            </div>
          </div>

          <div className="review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              blanditiis ea libero ad temporibus illo, aperiam illum omnis
              architecto esse? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quia, dolore.
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={train} alt="" />
              <h4>Jhonson</h4>
              <h6>Ceo Of Axiata Ltd</h6>
            </div>
          </div>

          <div className="review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              blanditiis ea libero ad temporibus illo, aperiam illum omnis
              architecto esse? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quia, dolore.
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={train} alt="" />
              <h4>Jhonson</h4>
              <h6>Ceo Of Axiata Ltd</h6>
            </div>
          </div>

          <div className="review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              blanditiis ea libero ad temporibus illo, aperiam illum omnis
              architecto esse? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quia, dolore.
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={train} alt="" />
              <h4>Jhonson</h4>
              <h6>Ceo Of Axiata Ltd</h6>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
