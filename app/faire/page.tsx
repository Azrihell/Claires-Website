"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import aboutImg from "@/assets/images/about/about_img.jpg";

// ------------

function About() {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="content-1140 header-content center-relative block">
          <h1 className="entry-title">
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
        <div className="box-page-width content-1140 center-relative">
          <img className="aligncenter" src={aboutImg.src} alt="" />
        </div>
        <div className="content-945 center-relative">
          <br />

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
