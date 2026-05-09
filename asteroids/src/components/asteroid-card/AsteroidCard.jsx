import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";
import { Link } from "react-router";

export const AsteroidCard = (props) => {
  const { id, name, date, distance, diameter, isDanger, typeOfButton } = props;
  const { isKilometers } = props;

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
          isKilometers={isKilometers}
        />
        <AsteroidAction isDanger={isDanger} asteroid={props} typeOfButton={typeOfButton} />
      </div>
    </Link>
  );
};
