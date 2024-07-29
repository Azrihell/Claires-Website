"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import img01 from "@/assets/images/home/img_01.jpg";
import img02 from "@/assets/images/home/img_02.jpg";
import img03 from "@/assets/images/home/img_03.jpg";
import img04 from "@/assets/images/home/img_04.jpg";
import img05 from "@/assets/images/home/img_05.jpg";
import img06 from "@/assets/images/home/img_06.jpg";
import img07 from "@/assets/images/home/img_07.jpg";
import img08 from "@/assets/images/home/img_08.jpg";
import img09 from "@/assets/images/home/img_09.jpg";
import img10 from "@/assets/images/home/img_10.jpg";
import img11 from "@/assets/images/home/img_11.jpg";

/**
 *
 * TODO:
 *  -- start in the documentation structure
 *  -- build documentation using docusource
 */

// ------------

function Home() {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page">
      {/* Page intro text */}
      <div className="content-1140 header-content center-relative block">
        <h1 className="entry-title">
          Just thinking about <Link href="/about">New Mune Faire</Link> and all the wonders of the worlds.
        </h1>
        <p className="page-desc">What's New and Exciting?</p>
      </div>

      <div id="content" className="site-content">
        {/* Portfolio items */}
        <ul className="grid" id="portfolio">
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img01.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Trilogy
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Books</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img02.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Coloring Book
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Books</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img03.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Amazon Kindle
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Read it Here</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          {/* Quote Item */}
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item quote-item "
          >
            Mysterious Quote from amazing book.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img04.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Bracelet
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Jewelry</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
         </ul>
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Home;
