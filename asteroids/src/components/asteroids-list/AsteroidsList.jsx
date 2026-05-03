import { useState } from "react";
import { AsteroidCard } from "../asteroid-card/AsteroidCard";
import styles from "./AsteroidsList.module.css";
import { AsteroidFilters } from "../asteroid-filters/AsteroidFilters";

export const AsteroidsList = () => {
  const [isOnlyDanger, setIsOnlyDanger] = useState(false)
  return (
    <div className={styles.asteroids}>
      <AsteroidFilters isOnlyDanger={isOnlyDanger} setIsOnlyDanger={setIsOnlyDanger}/>
      {asteroids.map(({ name, distance, diameter, date, isDanger }) => (
        <AsteroidCard
          name={name}
          distance={distance}
          diameter={diameter}
          date={date}
          isDanger={isDanger}
        />
      ))}
    </div>
  );
};

const asteroids = [
  {
    name: "арбуз",
    distance: 5145,
    diameter: 500,
    date: "30-05-2023",
    isDanger: false,
  },
  {
    name: "дыня",
    distance: 1000,
    diameter: 100,
    date: "25-05-2020",
    isDanger: true,
  },
  {
    name: "вкусный фрукт",
    distance: 3000,
    diameter: 300,
    date: "24-05-2020",
    isDanger: false,
  },
  {
    name: "яблоко",
    distance: 70000,
    diameter: 700,
    date: "23-05-2020",
    isDanger: false,
  },
];
