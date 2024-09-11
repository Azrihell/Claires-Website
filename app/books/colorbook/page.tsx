"use client";

import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Images
import rightArrow from "@/assets/images/opta_arrow@2x.png";
import leftArrow from "@/assets/images/opta_arrow@2x_left.png";
import ColorPg1 from "@/assets/images/colorbook/ColorPg1.jpg"
import ColorPg2 from "@/assets/images/colorbook/ColorPg2.jpg"
import ColorPg3 from "@/assets/images/colorbook/ColorPg3.jpg"
import ColorBookBack from "@/assets/images/colorbook/ColorBookBack.jpg"
import ColorBookSM from "@/assets/images/colorbook/ColorBookSM.jpg";

// ------------------

const Colorbook = () => {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="flex-center" style={{ marginBottom: "48px"}}>

          <div className="header-content block item-wrapped">
            <h1 className="post-num">
              New Munes' Coloring Book
              <br />
            </h1> <br />
            <div>
              <p className="abouttext">
                 Mune is a colorful planet, teeming with magic, creations, and creatures beyond the reach of our world. But you can bring it to life within these pages.
                  The New Mune Faire Coloring Book contains races and notable characters from the books “New Mune Faire”, “Tale of the Kitsune”, “Erowid the Diviner” and game “Hazi’s Haven”. <br/>
                   Enjoy the getaway of bright colors and creativity as you please, whether you love the books, or just love filling up pages with splashes of art and flare!
              </p>
            </div>
          </div>
        </div>
        {/* Gallery Items Slider */}
        <div className="full-page-width center-relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={50}
            autoplay={true}
            speed={1250}
            pagination={{ clickable: true}}
            modules={[Navigation, Autoplay, Pagination]}
            className="gallery-slider slider"
          >
            <SwiperSlide className="gallery-item">
              <img src={ColorBookBack.src} alt="" />
            </SwiperSlide>
            
            <SwiperSlide className="gallery-item">
              <img src={ColorBookSM.src} alt="" />
            </SwiperSlide>

            <SwiperSlide className="gallery-item">
              <img src={ColorPg1.src} alt="" />
            </SwiperSlide>

            <SwiperSlide className="gallery-item">
              <img src={ColorPg2.src} alt="" />
            </SwiperSlide>
            
            <SwiperSlide className="gallery-item">
              <img src={ColorPg3.src} alt="" />
            </SwiperSlide>

            <div className="swiper-button-prev">
              <img src={leftArrow.src} />
            </div>
            <div className="swiper-button-next">
              <img src={rightArrow.src} />
            </div>
          </Swiper>

          <br/>
            
          <div className="content-945 center-relative">
          <h1 className="entry-title">
          Pre-Order soon!
        </h1>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Colorbook;
