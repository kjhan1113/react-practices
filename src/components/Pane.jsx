import React from "react";
import styles from "./Pane.module.css";

export default function Pane({ classes, title, text }) {
  return (
    <div className={classes === "left" ? styles.left : styles.right}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
