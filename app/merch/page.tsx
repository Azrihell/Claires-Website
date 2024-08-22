"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import aboutImg from "@/assets/images/about/about_img.jpg";

// ------------

function Merch() {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="content-1140 header-content center-relative block">
          <h1 className="entry-title">
            Merch
            <br /> </h1>
            <p className="popuptext">
            Look at what's coming soon!
            </p>
        </div>
          <div className="header-content center-relative block">
                <div className="dropdownContent">
                     <Link href="#" className="menuItems">Stickers </Link> <br/>
                     <Link href="#" className="menuItems">Maps </Link> <br/>
                     <Link href="#" className="menuItems">Bookmarks</Link> <br/>
                     <Link href="#" className="menuItems">Treasure Box</Link> <br/>
           </div>
              <br />
            <div className="box-page-width content-1140 center-relative">
          <img className="aligncenter" src={aboutImg.src} alt="" />
        </div>

          {/* Text Slider */}
          <div className="testimonial-slider-holder relative">
            <Swiper
              pagination={{ clickable: true }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              speed={750}
              autoplay
              allowTouchMove={false}
              modules={[EffectFade, Pagination, Autoplay]}
              autoHeight
              id="textslider"
              className="testimonial-slider slider"
            >
              <SwiperSlide className="testimonial-content">
                Fun stuff about the Faire!
              </SwiperSlide>
              <SwiperSlide className="testimonial-content">
                Support the faire here!
                <br />
              </SwiperSlide>
              <SwiperSlide className="testimonial-content">
                Other inspirational informating quote.
                <br />
              </SwiperSlide>
            </Swiper>
          </div>

          </div>
        </div>
    </main>
  );
}

export default Merch;
