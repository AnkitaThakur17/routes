import { NavLink, Outlet } from "react-router-dom";
import styles from "../../CSS/products.module.css"; // module import

function Products() {
  return (
    <div>
      <h1>Our Products</h1>
      <nav>
        <NavLink
          to="electronics"
          className={({ isActive }) => 
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Electronics
        </NavLink>
        {" | "}
        <NavLink 
          to="clothing"
          className={({ isActive }) => 
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Clothing
        </NavLink>
        {" | "}
        <NavLink 
          to="accessories"
          className={({ isActive }) => 
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Accessories
        </NavLink>
      </nav>

      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
