import { NavLink, Outlet } from "react-router-dom";
import styles from "../../CSS/products.module.css";

function Products() {
  return (
    <div>
      <h1>Our Products</h1>
      <nav>
        <NavLink
          to="electronics"
          className={({ isActive }) => 
            isActive ? styles.active : styles.inactive
          }
        >
          Electronics
        </NavLink>
        {" | "}
        <NavLink 
          to="clothing"
          className={({ isActive }) => 
            isActive ? styles.active : styles.inactive
          }
        >
          Clothing
        </NavLink>
        {" | "}
        <NavLink 
          to="accessories"
          className={({ isActive }) => 
            isActive ? styles.active : styles.inactive
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
