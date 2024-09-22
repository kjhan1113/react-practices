import React from "react";
import styles from "./Title.module.css";

export default function Title({ classes, text }) {
  return (
    <h1 className={classes === "title" ? styles.title : styles.subtitle}>
      {!text ? "Title" : text}
    </h1>
  );
}
