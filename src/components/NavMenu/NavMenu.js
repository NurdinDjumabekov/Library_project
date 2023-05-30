import React, { useEffect, useState } from "react";
import styles from "./NavMenu.module.css";
import navLogo from "../../assests/images/navMenu/navLogo.svg";
import btn_nav from "../../assests/images/navMenu/nav_btn.svg";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const [active, setActive] = useState(
    localStorage.getItem("statePage") ? +localStorage.getItem("statePage") : 0
  );
  localStorage.setItem("statePage", active);

  const pagesArr = [
    {
      page: "Главная",
      to: "/",
    },
    {
      page: "Библиотека",
      to: "/library",
    },
    {
      page: "Читаю сейчас",
      to: "reading_now",
    },
    {
      page: "Профиль",
      to: "/pro",
    },
  ];
  return (
    <div className={styles.parent_navMenu}>
      <div className="container">
        <div className={styles.child_navMenu}>
          <div className={styles.mainLogo}>
            <div>
              <img src={navLogo} alt="" />
            </div>
            <h1>Muras</h1>
          </div>
          <div className={styles.mainMenu}>
            <ul>
              {pagesArr.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    onClick={() => setActive(index)}
                    className={active === index && styles.activeNavMenu}
                  >
                    {item.page}
                  </NavLink>
                </li>
              ))}
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
  );
};

export default NavMenu;
