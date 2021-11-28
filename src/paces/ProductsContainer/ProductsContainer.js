import { Link } from "react-router-dom";

import classes from "./ProductsContainer.module.css";

import { useDispatch } from "react-redux";
import { cardActions } from "../../store";

const ProductsContainer = ({ title, id, price, image }) => {
  const dispatch = useDispatch();

  const addToCardHandler = () => {
    dispatch(
      cardActions.addItemToCard({
        id,
        price,
        title,
        image,
      })
    );
  };

  return (
    <Link to={`/products/${title}`} className={classes.product} key={id}>
      <div className={classes.product_img_box}>
        <div className={classes.img_box_border} />
        <img src={image} alt={title} />
      </div>
      <div className={classes.product_info}>
        <h4>{title}</h4>
        <div className={classes.adToCard}>
          <span>$ {price}</span>
          <Link to="" onClick={addToCardHandler}>
            add
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductsContainer;

/* {content.map((item) => (
        <Link
          to={`/products/${item.title}`}
          className={classes.product}
          key={item.id}
        >
          <div className={classes.product_img_box}>
            <div className={classes.img_box_border} />
            <img src={item.image} alt={item.title} />
          </div>
          <div className={classes.product_info}>
            <h4>{item.title}</h4>
            <div className={classes.adToCard}>
              <span>$ {item.price}</span>
              <Link to="" onClick={""}>
                add
              </Link>
            </div>
          </div>
        </Link>
      ))} */
