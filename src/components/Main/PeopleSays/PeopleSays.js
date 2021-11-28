import classes from "./PeopleSays.module.css";

import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import img from "../../../assets/people/peopleImg.png";

const data = [
  {
    img: img,
    text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    name: "John Smith",
  },
  {
    img: img,
    text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    name: "Robert Aguilar",
  },
  {
    img: img,
    text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    name: "Roger Spears",
  },
  {
    img: img,
    text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    name: "Kyle McDonald",
  },
];

const PeopleSays = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.section_header}>
        <h5>PEOPLE SAYS</h5>
        <h3>Testimonials</h3>
      </div>
      <div className={classes.slider}>
        <Carousel
          className={classes.caro}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={true}
          showIndicators={false}
          interval="3000"
          width="100%"
          emulateTouch={true}
          // renderIndicator={(styles = { backgroundColor: "#dee2e6" })}
        >
          {data.map((item, index) => (
            <div className={classes.slider_content} key={index}>
              <div className={classes.slider_img_box}>
                <img src={item.img} alt="" />
              </div>
              <p>{item.text}</p>
              <span>{item.name}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PeopleSays;
