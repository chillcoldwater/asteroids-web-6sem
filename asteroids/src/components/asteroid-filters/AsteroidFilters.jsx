import { useState } from "react";
import styles from "./AsteroidFilters.module.css";
export const AsteroidFilters = (props) => {
    const {isOnlyDanger, setIsOnlyDanger} = props
  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" id="dangerous-filter" checked={isOnlyDanger} onClick={()=> (
            setIsOnlyDanger(!isOnlyDanger)
        )}/>
        <label htmlFor="dangerous-filter">Показать только опасные</label>
      </div>
      <div>
        Расстояние <span>в километрах</span>, <span>в дистанциях до Луны</span>
      </div>
    </div>
  );
};
