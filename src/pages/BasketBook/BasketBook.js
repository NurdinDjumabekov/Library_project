import React from "react";
import styles from "./BasketBook.module.css";
import NavMenuUsers from "../../components/NavMenuUsers/NavMenuUsers";
import Footer from "../../components/Footer/Footer";

const BasketBook = () => {
  return (
    <div className={styles.parent_aboutSite}>
      <NavMenuUsers />
      <div className="container">
        <div className={styles.child_aboutSite}>
          <p>корзина error</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasketBook;
