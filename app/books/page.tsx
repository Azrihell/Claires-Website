"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import blogArrow from "@/assets/images/blog/blog_arrow@2x.png";
import NMF1 from "@/assets/images/home/NMF1.png";
import ColorBook1 from "@/assets/images/home/ColorBook1.png"

// ------------

function Blog() {
  return (
    <main className="page">
      <div className="blog-holder block center-relative content-1140">
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
            {/* Article number */}
            <div className="post-num">
              <span className="current-post">New Mune Faire</span>
            </div>
            {/* Blog title */}
            <h2 className="entry-title">
              <a href="https://www.amazon.com/New-Mune-Faire-Trilogy-Book-ebook/dp/B0D8RYH15Q/ref=sr_1_1?crid=2M6PP2I2KISJ5&dib=eyJ2IjoiMSJ9.v3SVCnsJ7qfdk4KD_J_lAw.oke-1t1Ru3z1svPxux1Hj7uw0oLL1IRa2Gborgr5Xn8&dib_tag=se&keywords=new%20mune%20faire&qid=1721590864&sprefix=new%20mune%20fair%2Caps%2C97&sr=8-1" target="_blank" rel="noopener noreferrer">
                Read on Kindle
              </a>
            </h2>
            <p>or</p>
            <h2 className="entry-title">
              <a href="https://www.amazon.com/New-Mune-Faire-Trilogy/dp/B0D8PPHY5N/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.v3SVCnsJ7qfdk4KD_J_lAw.oke-1t1Ru3z1svPxux1Hj7uw0oLL1IRa2Gborgr5Xn8&qid=1721590864&sr=8-1" target="_blank" rel="noopener noreferrer">
                Purchase a Paperback
              </a>
            </h2>
             {/* Some External Links */}
             <div className="entry-info">
              <div className="entry-info-left">
                <div className="cat-links">
                </div>
                <div className="entry-date published">Learn More</div>
              </div>
              </div>
            <p className="read-more-arrow">
              <Link href="/books/nmf">
                <img src={blogArrow.src} alt="Read More" />
              </Link>
            </p>
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
            <Link href="/books/colorbook">
              <img src={ColorBook1.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            {/* Article number */}
            <div className="post-num">
              <span className="current-post">Coloring Book</span>
            </div>
            {/* Blog title */}
            <h2 className="entry-title">
              <a href="" target="_blank" rel="noopener noreferrer">
                Pre-Order September 1st! 
              </a>
            </h2>
             {/* Some External Links */}
             <div className="entry-info">
              <div className="entry-info-left">
                <div className="cat-links">
                </div>
                <div className="entry-date published">Learn More</div>
              </div>
              </div>
            <p className="read-more-arrow">
              <Link href="/books/colorbook">
                <img src={blogArrow.src} alt="Read More" />
              </Link>
            </p>
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
            <Link href="/books/nmf/nmf2">
              <img src={NMF1.src} alt="" />
            </Link>
          </div>
          <div className="entry-holder">
            {/* Article number */}
            <div className="post-num">
              <span className="current-post">Nightmare Moon</span>
            </div>
            {/* Blog title */}
            <h2 className="entry-title">
              <a href="" target="_blank" rel="noopener noreferrer">
                Coming Soon 
              </a>
            </h2>
             {/* Some External Links */}
             <div className="entry-info">
              <div className="entry-info-left">
                <div className="cat-links">
                </div>
                <div className="entry-date published">Learn More</div>
              </div>
              </div>
            <p className="read-more-arrow">
              <Link href="/books/nmf/nmf2">
                <img src={blogArrow.src} alt="Read More" />
              </Link>
            </p>
          </div>
          <div className="clear"></div>
        </motion.article>

        
      </div>
    </main>
  );
}

export default Blog;
