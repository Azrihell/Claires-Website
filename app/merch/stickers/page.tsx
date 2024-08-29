"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

// Images
import sticker1 from "@/assets/images/stickers/Sticker1.png";
import img02 from "@/assets/images/gallery/img_06_large.jpg";
import img03 from "@/assets/images/gallery/img_01_large.jpg";

// ------------------

const Stickers = () => {
  return (
    <main className="single single-gallery">
      <div id="content" className="site-content">
        <div className="gallery">
          {/* Title */}
          <h1 className="entry-title center-relative center-text">
            Stickers
          </h1>
          <div className="center-relative clear">
            <div className="entry-content">
              {/* Description text */}
              <div className="content-750 center-relative">
                <p>
                  Pick your favorite, or get them all!
                </p>
              </div>
              <div className="content-1140 center-relative">
                <br />
                {/* Gallery items images */}
                <div>
                <ImageGrid />
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        {/* Gallery items navigation */}
        <div className="nav-links content-750 center-relative">
          <div className="nav-previous">
            <p>MORE MERCH!</p>
            <Link href="">Map</Link>
            <div className="clear"></div>
          </div>

          <div className="nav-next">
            <p>LOOK HERE!</p>
            <Link href="">Bookmarks</Link>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default Stickers;
