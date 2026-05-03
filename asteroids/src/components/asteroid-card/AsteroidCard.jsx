import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";

export const AsteroidCard = ({ name, date, distance, diameter }) => {
  const isDanger = true;

  return (
    <div className={isDanger ? styles.containerDanger : styles.container}>
      <AsteroidData
        name={name}
        date={date}
        distance={distance}
        diameter={diameter}
      />
      <AsteroidAction />
    </div>
  );
};
