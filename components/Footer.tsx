import Link from "next/link";

// Images
import logo from "@/assets/images/logo_@x2.png";
// ----------

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content content-1140 center-relative">
        {/* Your Contact links */}
        <div className="footer-logo">
          <Link href="/">
            <img src={logo.src} alt="Opta" />
          </Link>
        </div>
        <div className="footer-text">
          <p className="footer-first-line">
            <Link href="mailto:hello@yoursite.com">hello@yoursite.com</Link>
          </p>
          <p className="footer-second-line">
            or can use our <Link href="/contact">contact form</Link> as well
          </p>
        </div>

        <ul id="footer-sidebar">
          <li className="widget widget_text">
            <h4 className="widgettitle">Writing From</h4>
            {/* Contact Info */}
            <div className="textwidget">
              <p>Dallas TX, USA</p>
              <p>Phone: +123.456.789</p>
              <p>Email: hello@yoursite.com</p>
            </div>
          </li>
          {/* Recent Blog Articles */}
          <li className="widget widget_recent_entries">
            <h4 className="widgettitle">Check It Out!</h4>
            <ul>
              <li>
                <Link href="/books/nmf">
                  Hazi's Haven
                </Link>
              </li>
              <li>
                <Link href="/books/coloringbook">
                  Coloring Book
                </Link>
              </li>
              <li>
                <Link href="/books/comingsoon">
                  Whats Coming Soon?
                </Link>
              </li>
            </ul>
          </li>
          {/* Articles tags */}
          <li className="widget widget_tag_cloud">
            <h4 className="widgettitle">Category</h4>
            <div className="tagcloud">
              <Link href="/books">Books</Link>
              <Link href="/merch">Merch</Link>
              <Link href="/faire">Faire</Link>
              <Link href="characterpedia">CharacterPedia</Link>
              <Link href="contact">Contact</Link>
            </div>
          </li>
        </ul>

        {/* Coptright and social links */}
        <ul className="copyright-holder">
          <li className="copyright-footer">
            © {new Date(Date.now()).getFullYear()} - AzCraftsCode
          </li>
          <li className="social-footer">
            <Link href="https://www.patreon.com/newmunefaire">PATREON</Link>
            <Link href="https://www.facebook.com/">FACEBOOK</Link>
            <Link href="https://www.instagram.com/">INSTAGRAM</Link>
            <Link href="https://home.dorian.live/">DORIAN.LIVE</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
