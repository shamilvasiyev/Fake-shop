import classes from "./Card.module.css";

import { cardActions } from "../../store";
import { useDispatch } from "react-redux";
import { Fragment } from "react";

const Card = ({ id, price, title, image, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(
      cardActions.addItemToCard({
        id,
        price,
        title,
        image,
      })
    );
  };

  const removeProductHandler = () => {
    dispatch(cardActions.removeItemFromCard(id));
  };

  return (
    <Fragment>
      <div className={classes.card_img_box}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.card_item_title}>
        <p>{title}</p>
      </div>
      <div className={classes.card_item_price}>
        <span>
          {quantity} product / $ {totalPrice.toFixed(2)}
        </span>
      </div>
      <div className={classes.item_actions}>
        <button onClick={removeProductHandler}>-</button>
        <button onClick={addProductHandler}>+</button>
      </div>
    </Fragment>
  );
};

export default Card;
