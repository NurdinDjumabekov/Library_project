import React, { useState } from "react";
import styles from "./NavMenu.module.css";
import navLogo from "../../assests/images/navMenu/navLogo.svg";
import btn_nav from "../../assests/images/navMenu/nav_btn.svg";
import { NavLink } from "react-router-dom";
import MainIconMenu from "../MainIconMenu/MainIconMenu";
import { useDispatch, useSelector } from "react-redux";
import { changeMainIconState } from "../../store/reducers/windowsSlice";

const NavMenu = () => {
  const { mainIconState } = useSelector((state) => state.windowsSlice);
  const dispatch = useDispatch();
  // const [active, setActive] = useState(0);
  const [active, setActive] = useState(
    localStorage.getItem("statePage_main")
      ? +localStorage.getItem("statePage_main")
      : 0
  );
  localStorage.setItem("statePage_main", active);

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
      to: "/profile",
    },
  ];

  return (
    <div className={styles.parent_navMenu}>
      <div className="container">
        <div className={styles.child_navMenu}>
          <div className={styles.mainLogo}>
            <div>
              <img src={navLogo} alt="navLogo" />
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
            <button onClick={() => dispatch(changeMainIconState(true))}>
              <img src={btn_nav} alt="logo" />
            </button>
          </div>
        </div>
        {mainIconState && <MainIconMenu />}
      </div>
    </div>
  );
};

export default NavMenu;
