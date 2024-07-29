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
        <div className="content-945 center-relative">
          {/* Person Information */}
          <div className="one_third">
            <div className="info-code">
              <p className="info-code-title">Placeholder</p>
              <p className="info-code-content">PH</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">Placeholder</p>
              <p className="info-code-content">PH</p>
            </div>
            <div className="info-code">
              <p className="info-code-title">Placeholder</p>
              <p className="info-code-content">PH</p>
            </div>
          </div>
          {/* Description text */}
          <div className="two_third last">
            FAIRE STUFF!
            <br />
          </div>
          <div className="clear"></div>
          <br />
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

          {/* Description text */}
          <div className="two_third">
           Hi this will describe why how and what the faire will be.
            <br />
          </div>
          {/* Progress bars */}
          {/* <div className="one_third last">
            <div className="progress_bar">
              <div className="progress_bar_title">PHOTOSHOP</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "70%" }}
                ></div>
              </div> */}
            {/* </div>
            <div className="progress_bar">
              <div className="progress_bar_title">HTML/CSS</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">WORDPRESS</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">JS</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="clear"></div> */}
        </div>
      </div>
    </main>
  );
}

export default About;
