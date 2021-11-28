import classes from "./Header.module.css";

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

import { HiPhone } from "@react-icons/all-files/hi/HiPhone";
import { GrMail } from "@react-icons/all-files/gr/GrMail";

const headerSocialIcons = [
  <FaFacebookF />,
  <GrTwitter />,
  <GrInstagram />,
  <FaLinkedinIn />,
];

const contactData = [
  { icon: <HiPhone />, text: "(+1) 234 5678 9101" },
  { icon: <GrMail />, text: "shop@yourdomain.com" },
];

const Header = () => {
  return (
    <div className={classes.header_contact_box}>
      <div className="container">
        <div className={classes.header_content}>
          <div className={classes.header_contact_icons}>
            {headerSocialIcons.map((icon, index) => (
              <div key={index} className={classes.header_social_icon_box}>
                <i>{icon}</i>
              </div>
            ))}
          </div>
          <div className={classes.header_contact_text}>
            {contactData.map((data, index) => (
              <div key={index} className={classes.header_contact_content}>
                <i>{data.icon}</i>
                <span>{data.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
