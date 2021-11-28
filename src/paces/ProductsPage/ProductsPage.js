import classes from "./ProductsPage.module.css";

import { useState } from "react";

import ProductsContainer from "../ProductsContainer/ProductsContainer";

const ProductsPage = ({ products }) => {
  const [inputValue, setInputValue] = useState("");

  const searchProductHandler = (e) => {
    setInputValue(e.target.value);
  };

  let searchedProduct = [];

  const searchedValue = products.forEach((item) => {
    if (item.title.toLocaleLowerCase().includes(inputValue)) {
      searchedProduct.push(item);
    }
  });

  return (
    <section className={classes.products_page}>
      <div className="container">
        <div className={classes.content_wrapper}>
          <div className={classes.product_search_box}>
            <div className={classes.search_box}>
              <input
                type="text"
                placeholder="Search product"
                onChange={searchProductHandler}
              />
            </div>
          </div>

          <div className={classes.products_wrapper}>
            {searchedProduct
              ? searchedProduct.map((item) => (
                  <ProductsContainer
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    key={item.id}
                  />
                ))
              : products.map((item) => (
                  <ProductsContainer
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    key={item.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
// {products.map((p) => (
//   <option>{p.category}</option>
// ))}

// {
//   products.map((item) => (
//     <ProductsContainer
//       id={item.id}
//       image={item.image}
//       title={item.title}
//       price={item.price}
//       key={item.id}
//     />
//   ));
// }
