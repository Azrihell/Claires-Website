"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import StickyPopup from "@/components/Popup";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import NMF1 from "@/assets/images/home/NMF1.png";
import ColorBook from "@/assets/images/colorbook/ColorBook.jpg";
import Map from "@/assets/images/home/Map.jpg";
import merchpre from "@/assets/images/home/merchpre.png";
import gamecover from "@/assets/images/home/gamecover.jpg";



/**
 *
 * TODO:
 *  -- start in the documentation structure
 *  -- build documentation using docusource
 */

// ------------

function Hearth() {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    
    <main className="page">
      {/* Page intro text */}
      <div className="content-1140 header-content center-relative block">
        <h1 className="post-num">
          Just thinking about <Link href="/faire">New Mune Faire</Link> and all the wonders of the worlds.
        </h1>
        <p className="entry-title">Whats New and Exciting?</p>
      </div>

      {/* <div> <StickyPopup /> </div> */}

      <div id="content" className="site-content">
        {/* Portfolio items */}
        <ul className="item-wrapped" id="portfolio">
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item">
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
              <Link href="/books/colorbook">
                <img src={ColorBook.src} alt="Coloring Book" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/books/colorbook">
                    Coloring Book
                  </Link>
                  <p className="portfolio-category">
                    <Link href="/books">Books</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/books/colorbook">
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
            <div className="">
              <Link href="/merch">
                <img src={merchpre.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/merch">
                    Merch
                  </Link>
                  <p className="portfolio-category">
                    <Link href="/merch">See More</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/merch">
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
              <Link href="/merch">
                <img src={gamecover.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/merch">
                    Merch
                  </Link>
                  <p className="portfolio-category">
                    <Link href="/merch">See More</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/merch">
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
              <Link href="/characterpedia">
                <img src={Map.src} alt="Go to CharacterPedias" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/characterpedia">
                    Characters
                  </Link>
                  <p className="portfolio-category">
                    <Link href="/characterpedia">Explore</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/characterpedia">
                      <img src={arrow.src} alt="Go to CharacterPedias" />
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
            <Link className="portfolio-text" href="/faire">
                    See what started it all
                  </Link>
          </motion.li>
          
         </ul>
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Hearth;
