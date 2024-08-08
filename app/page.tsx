"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import NMF1 from "@/assets/images/home/NMF1.png";
import ColorBook from "@/assets/images/home/ColorBook.jpg";
import img03 from "@/assets/images/home/img_03.jpg";
import img04 from "@/assets/images/home/img_04.jpg";



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
          Just thinking about <Link href="/faire">New Mune Faire</Link> and all the wonders of the worlds.
        </h1>
        <p className="page-desc">Whats New and Exciting?</p>
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
              <Link href="/books/nmf">
                <img src={NMF1.src} alt="New Mune Faire Book One" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/books/nmf">
                    New Mune Trilogy
                  </Link>
                  <p className="portfolio-category">
                    <Link href="/books">Books</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/books/nmf">
                      <img src={arrow.src} alt="go to books page" />
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
                <img src={ColorBook.src} alt="Coloring Book" />
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
            This can be text linking to something... probably merch or the faire stuff.
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
                  <Link className="portfolio-text" href="/characterpedia">
                    Characters
                  </Link>
                  <p className="portfolio-category">
                    <Link href="/characterpedia">Learn More</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/characterpedia">
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
