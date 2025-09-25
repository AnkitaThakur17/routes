
import {NavLink } from "react-router-dom";
import styles from "../CSS/products.module.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <ul className="nav-links">

        <li><NavLink to="/" className={({isActive})=>isActive ? styles.active : styles.inactive }>Home</NavLink></li>

        <li><NavLink to="/products" className={({isActive})=>isActive ? styles.active: styles.inactive}>Products</NavLink></li>

        <li><NavLink to="/about" className={({isActive})=>isActive ? styles.active : styles.inactive}>About</NavLink></li>

        <li><NavLink to="/contact" className={({isActive})=>isActive ? styles.active : styles.inactive}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
