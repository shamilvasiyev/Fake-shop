import classes from "./Main.module.css";

import Products from "./Products/Products";
import ShopWithUs from "./ShopWithUs/ShopWithUs";
import Notification from "./Notification/Notification";

// import { useCallback, useEffect, useState } from "react";
import PeopleSays from "./PeopleSays/PeopleSays";

const Main = ({ products }) => {
  // const [products, setProducts] = useState([]);

  // const fetchProductsHandler = useCallback(async () => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //     console.log(data);
  //   } catch (error) {}
  // }, []);

  // useEffect(() => {
  //   fetchProductsHandler();
  // }, [fetchProductsHandler]);

  let pageProduct = [];

  products.map((item) =>
    item.id === 1 || item.id === 6 || item.id === 20
      ? pageProduct.push(item)
      : null
  );

  return (
    <section className={classes.main_content_wrapper}>
      <ShopWithUs />
      <Products mainContent={pageProduct} />
      <Notification />
      <PeopleSays />
    </section>
  );
};
export default Main;
