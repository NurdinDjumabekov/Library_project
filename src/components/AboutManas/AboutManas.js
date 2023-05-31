import React from "react";
import styles from "./AboutManas.module.css";

export const AboutManas = () => {
  const manasInfo = [
    "Саякбай Каралаев; Эпос Манаса",
    "Тоголок Молдо; Эпос Манаса",
    "Эпос Манаса для детей",
    "Жусуп Мамай; Эпос Манаса",
    "Шабай Азизов; Эпос Манаса",
  ];
  const photoManas =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKk7gSz-yfyFWxceraG_6H13T3Hm2zU7gszw&usqp=CAU";

  return (
    <div className="container">
      <div className={styles.parent_bestWork}>
        <div className="standart_headers">
          <h4 className="standart_headers_h4">М</h4>
          <span className="standart_headers_span">анас</span>
        </div>
        <p className="standart_headers_p_text">
          Lorem ipsum dolor sit amet consectetur. Turpis etiam elit rhoncus
          lorem pretium. Cras gravida odio urna urna quam scelerisque neque.
          Vestibulum habitant faucibus hac facilisis tortor tellus. Sit commodo
          nibh dui scelerisque eu vitae. A amet viverra amet ipsum nullam
          placerat non adipiscing quisque. Id orci blandit nec odio.
        </p>
        <div className={styles.child_bestWork}>
          <div>
            <img src={photoManas} alt="photoManas" />
          </div>
          <section>
            <h4>Варианты Эпоса</h4>
            <ul>
              {manasInfo.map((item, i) => (
                <li key={i}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
