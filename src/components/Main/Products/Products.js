import classes from "./Products.module.css";

import ProductsContainer from "../../../paces/ProductsContainer/ProductsContainer";

const Products = ({ mainContent }) => {
  return (
    <div className="container">
      <div className={classes.products_container}>
        <div className={classes.product_header}>
          <h3>POPULAR PRODUCTS</h3>
          <h2>Some Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>

        <div className={classes.products_wrapper}>
          {mainContent.map((item) => (
            <ProductsContainer
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
