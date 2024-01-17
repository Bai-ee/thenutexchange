import Link from "next/link";
import { useState } from "react";
import CheckoutFuntion from "../components/CheckoutFuntion";
import MobileMenu from "./MobileMenu";

const Header = ({ extraClass }) => {
  const onClick = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("active");
    e.preventDefault();
  };
  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <header className={extraClass}>
    
    </header>
  );
};
export default Header;
