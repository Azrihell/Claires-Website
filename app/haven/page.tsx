"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AppStoreRedirectButton from "@/components/Redirect";

// Images
import gamecover from "@/assets/images/home/gamecover.png"
// ------------

function haven() {
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
              <img src={gamecover.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            <div className="post-num">
              <span className="current-post">Hazi's Haven</span>
            </div>
            <h2 className="entry-title">
              <a href="https://home.dorian.live/" target="_blank" rel="noopener noreferrer">
                Read on Dorian.Live
              </a>
            </h2>
                </div>
                <div className="info-wrapper info-wrapped">
                  <AppStoreRedirectButton/>
                    </div>
                <div className="clear"></div>
              </motion.article>
      </div>
    </main>
  );
}

export default haven;
