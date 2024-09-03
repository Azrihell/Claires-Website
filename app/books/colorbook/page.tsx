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
import ColorPg1 from "@/assets/images/home/ColorPg1.jpg"
import ColorPg2 from "@/assets/images/home/ColorPg2.jpg"
import ColorPg3 from "@/assets/images/home/ColorPg3.jpg"
import img04 from "@/assets/images/gallery/img_01_large-1024x539.jpg";
import ColorBook from "@/assets/images/home/ColorBook.jpg";

// ------------------

const Colorbook = () => {
  return (
    <main className="page">
      <div id="content" className="site-content">
        {/* Description text */}
        <div className="content-945 center-relative">
        <h1 className="entry-title">
          New Mune's Coloring Book
        </h1>
          <img className="one_third" src={ColorBook.src} alt="New Mune Faire Book One"/>
          <div className="two_fourth last">
            Description of amazing coloring book!
          </div>
          <div className="clear"></div>
          <br />
          <br />
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
            spaceBetween={100}
            autoplay={false}
            speed={1250}
            pagination={{ clickable: true}}
            modules={[Navigation, Autoplay, Pagination]}
            className="gallery-slider slider"
          >
            <SwiperSlide className="gallery-item">
              <img src={ColorPg1.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">One More Time</Link>
              </p>
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={ColorPg2.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">Reminiscences from Paris</Link>
              </p>
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={ColorPg3.src} alt="" />
              <p className="item-text">
                <Link href="./single-gallery">Bottle of Life</Link>
              </p>
            </SwiperSlide>
            <div className="swiper-button-prev">
              <img src={leftArrow.src} />
            </div>
            <div className="swiper-button-next">
              <img src={rightArrow.src} />
            </div>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Colorbook;
