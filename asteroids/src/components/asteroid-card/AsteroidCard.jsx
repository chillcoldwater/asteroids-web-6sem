import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";
import { Link } from "react-router";
import {memo, useMemo } from "react"

export const AsteroidCard = memo((props) => {
  const { id, name, date, distance, diameter, isDanger, typeOfButton } = props;
  const asteroid = useMemo(() => {
    console.log("AAA asteroid пересоздан")
    return {
    id: id,
    name: name,
    date: date,
    distance: distance,
    diameter: diameter,
    isDanger: isDanger}
  }, [id, name, date, distance, diameter, isDanger])
    const actionProps = useMemo(() => ({
    isDanger,
    asteroid,
    typeOfButton
  }), [isDanger, asteroid, typeOfButton]);
  return (
    <Link className={styles.link} to={`asteroids/${id}`}>
      <div
        className={
          isDanger
            ? `${styles.container} ${styles.danger}`
            : `${styles.container} ${styles.safe}`
        }
      >
        <AsteroidData
          name={name}
          date={date}
          distance={distance}
          diameter={diameter}
        />
        <AsteroidAction {...actionProps}/>
      </div>
    </Link>
  );
});

AsteroidCard.displayName="AsteroidCard"