import React, { useState } from "react";
import styles from "./NavMenu.module.css";
import navLogo from "../../assests/images/navMenu/navLogo.svg";
import btn_nav from "../../assests/images/navMenu/nav_btn.svg";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={styles.parent_NavMenu}>
        <div className="container">
          <div className={styles.child_NavMenu}>
            <div className={styles.mainLogo}>
              <div>
                <img src={navLogo} alt="" />
              </div>
              <h1>Muras</h1>
            </div>
            <div className={styles.mainMenu}>
              <ul>
                <li>
                  <NavLink to="/">Главная</NavLink>
                </li>
                <li>
                  <NavLink to="/library">Библиотека</NavLink>
                </li>
                <li>
                  <NavLink to="/readNow">Читаю сейчас</NavLink>
                </li>
                <li>
                  <NavLink to="/">Профиль</NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.otherMenu_btn}>
              <button>
                <img src={btn_nav} alt="logo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
