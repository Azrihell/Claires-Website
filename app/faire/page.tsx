"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Images
import faire1 from "@/assets/images/faire/faire1.jpg"
import faire2 from "@/assets/images/faire/faire2.jpg"
import faire3 from "@/assets/images/faire/faire3.jpg"
import faire4 from "@/assets/images/faire/faire4.jpg"
import faire5 from "@/assets/images/faire/faire5.jpg"
import rightArrow from "@/assets/images/opta_arrow@2x.png";
import leftArrow from "@/assets/images/opta_arrow@2x_left.png";


// ------------

function About() {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="content-1140 header-content center-relative block">
          <h1 className="post-num">
            The Faire Ground
            <br />
          </h1>
          <div className="clear"></div>
          <br />
          <div>
            <p className="abouttext">
            The Faire Ground came first. Claire K. Zada wanted to bring a fantasy world
             to life, as Disney, Orlando, or Renaissance Faires would do. She wanted 
             something that was hers, though. Something new, that could usher in communities 
             to experience exhilarating things that no one else could offer. <br />
              <div> <br /> But how to do that? </div>
            </p>
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
              <img src={faire1.src} alt="" />
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={faire2.src} alt="" />
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={faire3.src} alt="" />
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={faire4.src} alt="" />
            </SwiperSlide>
            <SwiperSlide className="gallery-item">
              <img src={faire5.src} alt="" />
            </SwiperSlide>

            <div className="swiper-button-prev">
              <img src={leftArrow.src} />
            </div>
            <div className="swiper-button-next">
              <img src={rightArrow.src} />
            </div>
          </Swiper>

          <br />
          <div className="header-content center-relative block">
          <p className="abouttext">
          She needed to come up with a history and iconic characters that people would want
           to be a part of and greet. So, Claire K. Zada set out to do just that. She wrote,
            illustrated, and scrapped, and studied. She did all these things to invent a world
             that fantasy lovers could be invested in.  <br />
              <br />  The intent was for the Faire Ground attendees to dress up, or cosplay,
               characters from the stories. To create original designs for themselves and arrive
                in intricate costumes that they’re proud of. A community for bookworms, nerds, cosplayers, and rennies alike. <br />
                <br />  Claire K. Zada intends to put all her earnings from the
                 New Mune Faire Franchise into savings, so that one day, this Faire Ground may be a reality. 
             </p>
            </div>
          </div>
        </div>
    </main>
  );
}

export default About;
