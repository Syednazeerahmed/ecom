import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from "react-router-dom";

import "./Banner.css";
import BannerImg from "../../../assets/home-images/banner-img-1.png"
import BannerImg2 from "../../../assets/home-images/banner-img-2.png"
import BannerImg3 from "../../../assets/home-images/banner-img-3.png"
import BannerImg4 from "../../../assets/home-images/banner-img-4.png"

export const Banner = () => {
    const navigate = useNavigate();
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000
                }}
                loop={true}
                >
                <SwiperSlide>
                <div className="hero-banner red">
                    <div className="content">
                        <div className="text-content">
                            <h1>OFFER</h1>
                            <p>
                                ALL ITEMS GET IT TODAY AT RUPEES  500 ONLY 
                                ONE DAY OFFER 
                            </p>
                            <div className="ctas">
                                <div className="banner-cta" onClick={() => navigate("/product/4")}>
                                    Read More
                                </div>

                                <div 
                                    className="banner-cta v2"
                                    onClick={() => navigate("/product/4")}
                                > 
                                    Shop Now
                                </div>
                            </div>
                        </div>
                        <img className="banner-img" src={BannerImg} />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-banner orange">
                        <div className="content">
                            <div className="text-content">
                                <h1>OFFER</h1>
                                <p>
                                    ALL ITEMS GET IT TODAY AT RUPEES  500 ONLY 
                                    ONE DAY OFFER 
                                </p>
                                <div className="ctas">
                                    <div className="banner-cta">Read More</div>
                                    <div 
                                        className="banner-cta v2" 
                                        onClick={() => navigate("/product/4")} 
                                    >
                                        Shop Now
                                    </div>
                                </div>
                            </div>
                            <img className="banner-img two" src={BannerImg2} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero-banner grey">
                    <div className="content">
                        <div className="text-content">
                            <h1>OFFER</h1>
                            <p>
                                ALL ITEMS GET IT TODAY AT RUPEES  500 ONLY 
                                ONE DAY OFFER 
                            </p>
                            <div className="ctas">
                                <div className="banner-cta">Read More</div>
                                <div className="banner-cta v2">Shop Now</div>
                            </div>
                        </div>
                        <img className="banner-img three" src={BannerImg3} />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero-banner blue">
                    <div className="content">
                        <div className="text-content">
                            <h1>OFFER</h1>
                            <p>
                                ALL ITEMS GET IT TODAY AT RUPEES  500 ONLY 
                                ONE DAY OFFER 
                            </p>
                            <div className="ctas">
                                <div className="banner-cta">Read More</div>
                                <div className="banner-cta v2">Shop Now</div>
                            </div>
                        </div>
                        <img className="banner-img four" src={BannerImg4} />
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

// export default Banner;
