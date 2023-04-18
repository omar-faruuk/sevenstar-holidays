import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import ashiq from "../../image/ashiq.jpg";
import akram from "../../image/akramul.jpeg";
import sabbir from "../../image/sabbir.jpeg";
import rasel from "../../image/rasel.jpeg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, // add the fade property
    cssEase: "linear",
  };

  return (
    <div id="testimonial" className="testimonial">
      <div className="container text-center">
        <h4 className="title">Testimonial</h4>
        <p className="fs-4 mb-4 text-white">What our clients saying</p>
        <Slider className="" {...settings}>
          <div className="review">
            <p>
              "Efficient and knowledgeable visa consultancy. Provided excellent
              guidance and support throughout the entire application process.
              Highly recommend their services to anyone in need of visa
              assistance."
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star  checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={akram} alt="" />
              <h4 className="text-white">Akramul karim</h4>
              <h6></h6>
            </div>
          </div>

          <div className="review">
            <p>
              "This visa consultancy service was professional and thorough. They
              made the visa application process stress-free and my visa was
              approved without any issues. Highly recommended!"
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={ashiq} alt="" />
              <h4 className="text-white">Ashikul Haque</h4>
              <h6 className="text-white">Madrid, Spain</h6>
            </div>
          </div>

          <div className="review">
            <p>
              "I was impressed with this visa consultancy service. They made the
              complicated visa application process and provided excellent
              customer service. I felt well taken confident in their expertise.
              Highly recommend!"
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={sabbir} alt="" />
              <h4 className="text-white">Sabbir Rahman</h4>
            </div>
          </div>

          <div className="review">
            <p>
              "I was lost in the labyrinth of visa applications, but this
              service came to my rescue. Their professionalism helped me
              navigate through the process and get my visa approved hassle-free.
              I couldn't have done it without them!"
            </p>
            <div className="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="review-img">
              <img className="" src={rasel} alt="" />
              <h4 className="text-white">Rasel ahmed</h4>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
