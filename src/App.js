import classes from "./App.module.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./paces/ProductsPage/ProductsPage";
import SingleProduct from "./paces/SingleProduct/SingleProduct";
import Card from "./paces/Card/Card";
import NoContentFound from "./paces/NoContentFound/NoContentFound";

import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import AboutUs from "./paces/AboutUs/AboutUs";

function App() {
  const [products, setProducts] = useState([]);

  const cardItems = useSelector((state) => state.card.items);
  const totalPrices = cardItems?.map((p) => p.totalPrice);
  const total = totalPrices.reduce((a, b) => a + b, 0);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route
          path="/products/:productDetails"
          element={<SingleProduct products={products} />}
        />
        <Route
          path="/soppingCard"
          element={
            <div className={classes.card_wrapper}>
              <h2>Your shopping card</h2>
              {cardItems.map((item) => (
                <div className={classes.card_simple_product}>
                  <Card
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                  />
                </div>
              ))}
              <div className={classes.summary}>
                <p className={classes.totalPrice}>
                  <span>Total price :</span>$ {total.toFixed(2)}
                </p>
                <button>BUY NOW</button>
              </div>
            </div>
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NoContentFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
