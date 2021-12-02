import classes from "./Nav.module.css";

import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";

const Nav = () => {
  const [navClass, setNavClass] = useState("navbar");
  const [menu, setMenu] = useState(false);

  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    if (Math.round(scrollValue) > 150) {
      setNavClass("scrolled");
    } else {
      setNavClass("navbar");
    }
  });

  const totalQuantity = useSelector((state) => state.card.totalQuantity);

  const menuVisibleHandler = () => {
    setMenu((prev) => !prev);
  };

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
          <div className={classes.menu_icon_box}>
            <button onClick={menuVisibleHandler}>
              <i>
                <GiHamburgerMenu />
              </i>
            </button>
          </div>
        </div>
      </div>
      {menu && (
        <div className={classes.menu}>
          <button onClick={menuVisibleHandler}>
            <i>
              <ImCancelCircle />
            </i>
          </button>

          <NavLink
            onClick={menuVisibleHandler}
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={menuVisibleHandler}
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            onClick={menuVisibleHandler}
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={menuVisibleHandler}
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <Link onClick={menuVisibleHandler} to="/soppingCard">
            Your Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
