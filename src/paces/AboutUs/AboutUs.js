import classes from "./AboutUs.module.css";
import image from "../../assets/aboutUs.jpg";

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.image_box}>
            <img src={image} alt="" />
          </div>
          <div className={classes.text_box}>
            <span className="section_header_span">MERCHANT COMPANY</span>
            <h1 className="section_header_h1">About Us</h1>
            <p className="section_header_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
              ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
              inventore, rem maxime, nisi excepturi ipsam libero ratione
              adipisci alias eius vero vel! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis
              nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi
              excepturi ipsam libero ratione adipisci alias eius vero vel! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa,
              repellat blanditiis nihil, consectetur. Consequuntur eum
              inventore, rem maxime, nisi excepturi ipsam libero ratione
              adipisci alias eius vero vel!
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
