import classes from "./Nav.module.css";

import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";

const Nav = () => {
  const [navClass, setNavClass] = useState("navbar");

  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    if (Math.round(scrollValue) > 150) {
      setNavClass("scrolled");
    } else {
      setNavClass("navbar");
    }
  });

  const totalQuantity = useSelector((state) => state.card.totalQuantity);

  return (
    <div className={navClass}>
      <div className="container">
        <div className={classes.nav_container}>
          <div className={classes.nav_logo}>
            <Link to="/">LOGO</Link>
          </div>
          <div className={classes.nav_links}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/aboutus"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
            <Link to="/soppingCard">
              <i>
                <FiShoppingCart />
              </i>
              <span>Your Cart {totalQuantity}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
