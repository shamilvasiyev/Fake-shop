import classes from "./ShopWithUs.module.css";

import { Link } from "react-router-dom";

const ShopWithUs = () => {
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <h1>Shop With Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <Link to="/products">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopWithUs;
