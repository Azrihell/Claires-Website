"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// Images
import blogArrow from "@/assets/images/blog/blog_arrow@2x.png";
import NMF1 from "@/assets/images/home/NMF1.png";
import NMF3Cover from "@/assets/images/nmf/NMF3Cover.jpg";
import NMF2Cover from "@/assets/images/nmf/NMF2Cover.png";

// Main Component (Previously named nmf)
const NMF = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 568); // Define the screen width limit
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  return (
    <main className="page flex-center">
      <div className="blog-holder block center-relative content-1140 item-wrapped">
        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0, transform: `translateY(50px)` }}
          whileInView={{ opacity: 1, transform: `translateY(0px)` }}
          viewport={{ once: true }}
          className="animate relative blog-item-holder center-relative has-post-thumbnail"
        >
          <div className="post-thumbnail">
            {/* Article Image */}
            <Link href="/books/nmf">
              <img src={NMF1.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            <div className="post-num">
              <span className="current-post">New Mune Faire </span>
            </div>
            <h2 className="entry-title">
              <a
                href="https://www.amazon.com/New-Mune-Faire-Trilogy-Book-ebook/dp/B0D8RYH15Q/ref=sr_1_1?crid=2M6PP2I2KISJ5&dib=eyJ2IjoiMSJ9.v3SVCnsJ7qfdk4KD_J_lAw.oke-1t1Ru3z1svPxux1Hj7uw0oLL1IRa2Gborgr5Xn8&dib_tag=se&keywords=new%20mune%20faire&qid=1721590864&sprefix=new%20mune%20fair%2Caps%2C97&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Kindle
              </a>
            </h2>
            <p>or</p>
            <h2 className="entry-title">
              <a
                href="https://www.amazon.com/New-Mune-Faire-Trilogy/dp/B0D8PPHY5N/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.v3SVCnsJ7qfdk4KD_J_lAw.oke-1t1Ru3z1svPxux1Hj7uw0oLL1IRa2Gborgr5Xn8&qid=1721590864&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase a Paperback
              </a>
            </h2>
          </div>
          <div className="info-wrapper info-wrapped">
            {/* Article Content */}
            AFTER THE DISAPPEARANCE OF THE DRAGONS, the planet Mune has fallen to war. Two unlikely enemies discover there may be
            more to the vanishing of the Dragons than meets the eye, and together try to solve the mystery in hopes to put a stop to
            the senseless battles between the warring factions: The Swarm, and The Siege. Can a Harpy and an Angel put aside their
            differences to solve this dark plot? Can the war ever truly end? <br />
            <br />
            New Mune Faire is a slow burn high fantasy romance, mystery, and action book. It is the first book in its trilogy. The
            world of Mune homes more than 20 fictional races and has a magic class system similar to the popular Tabletop Role Play
            Game, "Dungeons and Dragons". Escape within these pages to a realm of hope, despair, love, and hate. Who is right in this
            war? Pick a side as you follow each faction's perspective. Envision yourself as one of the many races who must fight to
            survive.
          </div>
          <div className="clear"></div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, transform: `translateY(50px)` }}
          whileInView={{ opacity: 1, transform: `translateY(0px)` }}
          viewport={{ once: true }}
          className="animate relative blog-item-holder center-relative has-post-thumbnail"
        >
          <div className="post-thumbnail">
            {/* Article Image */}
            <img src={NMF2Cover.src} alt="" />
          </div>
          <div className="entry-holder">
            <div className="post-num">
              <span className="current-post">Nightmare Moon</span>
            </div>
            <h2 className="entry-title">
              <a target="_blank" rel="noopener noreferrer">
                Coming Soon!
              </a>
            </h2>
          </div>
          <div
        
            className="info-wrapper info-wrapped"
            style={
              isSmallScreen
                ? { height: "400px", width: "90%" } // Styles for small screens
                : { height: "300px", width: "700px" } // Styles for larger screens
            }
          >
            THE RESURGENCE OF THE DRAGONS. As things come to light, everything is cast into the dark. Traitors around every corner,
            monsters raining from the sky. <br /> The beloved Second Moon was a shell that harbored the lost Dragons, and after all this
            time, the nightmares they endured are falling forth onto the planet Mune. <br />
            <br />
            Can the Heroes find a way to heal the weak dragons while fighting off the abominations across the world?
          </div>
          <div className="clear"></div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, transform: `translateY(50px)` }}
          whileInView={{ opacity: 1, transform: `translateY(0px)` }}
          viewport={{ once: true }}
          className="animate relative blog-item-holder center-relative has-post-thumbnail"
        >
          <div className="post-thumbnail">
            <img src={NMF3Cover.src} alt="" />
          </div>
          <div className="entry-holder">
            <div className="post-num">
              <span className="current-post">Mune's Ascension</span>
            </div>
            <h2 className="entry-title">
              <a target="_blank" rel="noopener noreferrer">
                Release TBD
              </a>
            </h2>
          </div>
          <div className="clear"></div>
        </motion.article>
      </div>
    </main>
  );
};

export default NMF;