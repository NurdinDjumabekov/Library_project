import React from "react";
import styles from "./MainIconMenu.module.css";
import aboutUs from "../../assests/images/MainNavMenu/aboutUs.svg";
import icon_user from "../../assests/images/MainNavMenu/icon_user.svg";
import logout from "../../assests/images/MainNavMenu/logout.svg";
import zakladki from "../../assests/images/MainNavMenu/zakladki.svg";
import support_server from "../../assests/images/MainNavMenu/support_service.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMainIconState } from "../../store/reducers/windowsSlice";

const MainIconMenu = () => {
  const dispatch = useDispatch();
  const pagesArr = [
    {
      page: "Профиль пользователя",
      to: "/profile",
      img: icon_user,
    },
    {
      page: "Служба поддержки",
      to: "/service_support",
      img: support_server,
    },
    {
      page: "Мои закладки",
      to: "/",
      img: zakladki,
    },
    {
      page: "О нас",
      to: "/aboutsite",
      img: aboutUs,
    },
  ];
  return (
    <div onClick={() => dispatch(changeMainIconState(false))}>
      <div className="container">
        <div className={styles.parent_mainIcon}>
          <ul>
            {pagesArr.map((item) => (
              <li onClick={() => dispatch(changeMainIconState(false))}>
                <NavLink to={item.to}>
                  <button>{item.page}</button>
                  <div>
                    <img src={item.img} alt="photo" />
                  </div>
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink>
                <button>Выход</button>
                <div>
                  <img src={logout} alt="icon_user" />
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainIconMenu;
