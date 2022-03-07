import React, { useState, VFC } from "react";
import styles from "./style.module.css";

export interface ImageProps {
  images: { id: number; imageName: string; name: string }[];
}

const Image: VFC<ImageProps> = ({ images }) => {
  const [activeId, setActiveId] = useState<number>();

  return (
    <div className={styles.subjectOptions}>
      <ul className={styles.list}>
        {images.map((item) => {
          return (
            <>
              <li key={item.id}>
                <div className={styles.area}>
                  <div className={styles.container}>
                    <svg className={styles.outline} viewBox="0 0 140 140">
                      <circle
                        className={
                          styles.circle +
                          " " +
                          (item.id === activeId ? styles["_fixed"] : styles["_right"])
                        }
                        onClick={() => setActiveId(item.id)}
                      ></circle>
                    </svg>
                  </div>
                </div>
              </li>
              <a
                className={styles.image}
                style={{ backgroundImage: `url('${item.imageName}')` }}
              >
                <svg className={styles.svg}></svg>
                <span>{item.name}</span>
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Image;
