import { useEffect, useState } from "react";
import { AsteroidCard } from "../asteroid-card/AsteroidCard";
import styles from "./AsteroidsList.module.css";
import { AsteroidFilters } from "../asteroid-filters/AsteroidFilters";
import { AsteroidController } from "../../AsteroidController";

export const AsteroidsList = () => {
  const [isOnlyDanger, setIsOnlyDanger] = useState(false);
  const [isKilometers, setIsKilometers] = useState(true);
  const [asteroids, setAsteroids] = useState([])
  useEffect(() => {
    AsteroidController.getAsteroids().then(result=>{setAsteroids(result)})
  }, [])
  return (
    <div className={styles.asteroids}>
      <AsteroidFilters
        isOnlyDanger={isOnlyDanger}
        setIsOnlyDanger={setIsOnlyDanger}
        isKilometers={isKilometers}
        setIsKilometers={setIsKilometers}
      />
      {isOnlyDanger
        ? asteroids
            .filter((it) => it.isDanger)
            .map((it) => <AsteroidCard {...it} isKilometers={isKilometers} typeOfButton="add" />)
        : asteroids.map((it) => (
            <AsteroidCard {...it} isKilometers={isKilometers} typeOfButton="add" />
          ))}
    </div>
  );
};