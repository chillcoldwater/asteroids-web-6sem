import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";

export const AsteroidCard = (props) => {
  
  const {name, date, distance, diameter, isDanger} = props

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
