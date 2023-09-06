import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import logo from "./icons/logo.svg";
import bag from "./icons/bag.svg";
import bars from "./icons/bars.svg";

export const Navbar = ({ size }) => {

    function openCard() {
        let shopping = document.querySelector(".shopping");
        shopping.classList.add("opened");
    }

    function openLinks() {
        let visibleLinks = document.querySelector(".links");
        visibleLinks.classList.toggle("opened");
    }

    return (
        <div className="navbar">
            <div className="container">
                <img src={bars} alt="logo" className="bars" onClick={openLinks} />
                <img src={logo} alt="logo" className="logo" />
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="products">Products</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
                <div onClick={openCard} className="bagContainer"><img src={bag} alt="bag" className="bag" /><span className="quantity">{size}</span></div>
            </div>
        </div>
    )
}