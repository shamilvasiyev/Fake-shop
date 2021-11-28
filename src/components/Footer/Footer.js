import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={classes.footer_wrapper}>
          <div className={classes.aboutUs}>
            <h6>ABOUT US</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className={classes.quick_links}>
            <h6>QUICK LINKS</h6>
            <Link to="/aboutus">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div className={classes.social_links}>
            <h6>FOLLOW US</h6>
            <div className={classes.social_links_wrapper}>
              <Link to="">
                <FaFacebookF />
              </Link>
              <Link to="">
                <GrTwitter />
              </Link>
              <Link to="">
                <GrInstagram />
              </Link>
              <Link to="">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div className={classes.footer_connect}>
            <h6>ASK A QUESTION</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <input type="email" placeholder="ASK A QUESTION" />
            <button>SEND</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
