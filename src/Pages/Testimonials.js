
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Testimonials.css'
import React from "react";
import Slider from "react-slick";
import { TestimonaisJson } from "./TestimonialsJson";


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
          ]
      };
    return (
        
        <section className="container slider-container pt-5 pb-5 mt-5 mb-5 ">
            <Slider {...settings}>
            
            {TestimonaisJson.map((data) =>
                <div key={data.id} className="slider">
                    <div className="row align-items-center">
                        <div className="col-sm-4">
                            <img src={data.img} alt={data.name}/>
                        </div>
                        <div className="col-sm-8 ">
                            <h3>{data.name}</h3>
                            <h5>{data.Role}</h5>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <p>{data.About}</p>
                    </div>
                </div>

            )}

</Slider>
        </section>
        
    );
}

export default Testimonials;