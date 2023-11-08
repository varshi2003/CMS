import React from 'react';
import Slider from 'react-slick';
import ava01 from  '../../assets/images/ava-1.jpg';
import ava02 from  '../../assets/images/ava-2.jpg';
import ava03 from  '../../assets/images/ava-3.jpg';
const Testimonials = () => {
          const settings  = {
                    dots:true,
                    infinite:true,
                    autoplay:true,
                    speed:1000,
                    swipeToSlide:true,
                    autoplaySpeed:2000,
                    slidesToShow:3,
                    responsive:[
                              {
                                        breakpoint:992,
                                        settings:{
                                                  slidesToShow: 2,
                                                  slidesToScroll: 1,
                                                  infinite: true,
                                                  dots : true,

                                        },
                              },
                              {
                                        breakpoint:576,
                                        settings:{
                                                  slidesToShow: 2,
                                                  slidesToScroll: 1,
                                                 

                                        },
                              },

                    ]
          }
  return <Slider {...settings}>
          <div className="testimonial py-4 px-3" >
                    <p>
                  This fishes are very taste
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3 ">
                              <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                              <div className="">
                              <h6 className="mb-0 mt-3" >Ram kumar</h6>
                              <p> Customer</p>
                              </div>
                    </div>
          </div>

          <div className="testimonial py-4 px-3" >
                    <p>
                      taste fishes
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3 ">
                              <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                              <div className="">
                              <h6 className="mb-0 mt-3" >samyuktha</h6>
                              <p> Customer</p>
                              </div>
                    </div>
          </div>

          <div className="testimonial py-4 px-3" >
                    <p>
         This fishes are very fresh 
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3 ">
                              <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                              <div className="">
                              <h6 className="mb-0 mt-3" >Mohan kumar</h6>
                              <p> Customer</p>
                              </div>
                    </div>
          </div>
          <div className="testimonial py-4 px-3" >
                    <p>
                   it was wonderful Aroma
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3 ">
                              <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                              <div className="">
                              <h6 className="mb-0 mt-3" >Bosco</h6>
                              <p> Customer</p>
                              </div>
                    </div>
          </div>
  </Slider>
}

export default Testimonials