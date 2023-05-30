import React from "react";
import styles from "./ResentlyRead.module.css";

const ResentlyRead = () => {
  return (
    <div className={styles.parent_resently}>
      <div className="standart_headers">
        <h4 className="standart_headers_h4">В</h4>
        <span className="standart_headers_span">ы недавно читали</span>
      </div>
      <div className={styles.child_resently}>
        <div className={styles.inner_resently}>
          <div className={styles.inner_resently_author}>
            <div>
              <img src="" alt="" />
            </div>
            <section>
              <p>Maximillian Antonov</p>
              <p>Писатель, Художник</p>
            </section>
          </div>
          <div className={styles.inner_resently_infoBook}>
            <h5>“Эпос Манас”</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResentlyRead;
