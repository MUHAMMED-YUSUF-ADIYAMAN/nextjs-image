import React from "react";
import styles from "./Card.module.css";


export default function Card({img}) {
  console.log(img.download_url);
  return (
    <div
      className={styles.card}
      data-testid="pet-card"
      onClick={() => {
      }}
    >
      {/* 
      <div className={styles["card-header"]}>
        <img src={url} alt={alt} className={styles["card-img"]} />
      </div>
      */} 
      
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front card-size">
             <img src={img.download_url} width="100%"  height="300px" alt="Avatar"/> 
          </div>
          </div>
      </div>
    </div>
  );
}