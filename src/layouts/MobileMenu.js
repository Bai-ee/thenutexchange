import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/">HOME</Link>
      </li>
      <li>
        <Link href="restaurants">PROFILE</Link>
      </li>
      <li>
        <Link href="checkout">CART</Link>
      </li>
      <li>
        <Link href="restaurant-card">COLLECTION PAGE</Link>
      </li>
      <li>
        <Link href="blog">EDITION PAGE</Link>
      </li>
      {/* <li className={`menu-item-has-children ${activeLi("Restaurants")}`}>

        <a href="#" onClick={() => activeMenuSet("Restaurants")}>
          Profile
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="restaurants">Restaurants</Link>
          </li>
          <li>
            <Link href="restaurant-card">Restaurant Card</Link>
          </li>
          <li>
            <Link href="checkout">Checkout</Link>
          </li>
        </ul>
      </li> */}
      {/* <li className={`menu-item-has-children ${activeLi("Pages")}`}>
        <a href="#" onClick={() => activeMenuSet("Pages")}>
          Contact
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="single-blog">Single Blog</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="faq">FAQ</Link>
          </li>
          <li>
            <Link href="pricing-table">Pricing Table</Link>
          </li>
          <li>
            <Link href="become-partner">Become A Partner</Link>
          </li>
          <li>
            <Link href="404">404</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="contact">About</Link>
      </li> */}
    </ul>
  );
};
export default MobileMenu;
