import classes from "./SingleProduct.module.css";

import { useParams } from "react-router";

import { cardActions } from "../../store";
import { useDispatch } from "react-redux";

import { AiTwotoneStar } from "@react-icons/all-files/ai/AiTwotoneStar";

const SingleProduct = ({ products }) => {
  const dispatch = useDispatch();

  const { productDetails } = useParams();
  const product = products.find((item) => item.title.trim() === productDetails);

  const addToCardHandler = () => {
    dispatch(
      cardActions.addItemToCard({
        id: product.id,
        price: product.price,
        title: product.title,
        image: product.image,
      })
    );
  };

  return (
    <div className={classes.section_wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.image_box}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={classes.product_info}>
            <h1>{product.title}</h1>
            <div className={classes.rate_box}>
              <p>
                {product.rating.rate}
                <i>
                  <AiTwotoneStar />
                </i>
              </p>
              <span>Category : {product.category}</span>
            </div>
            <p>{product.description}</p>
            <div className={classes.price_box}>
              <h4>$ {product.price}</h4>
              <button onClick={addToCardHandler}>Add To Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
