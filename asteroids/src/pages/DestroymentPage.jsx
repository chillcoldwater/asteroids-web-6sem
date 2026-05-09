import { useDestroymentAction } from "../ActionContext";
import { AsteroidCard } from "../components/asteroid-card/AsteroidCard";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import styles from "../components/asteroids-list/AsteroidsList.module.css"

export const DestroymentPage = () => {
  const { busket } = useDestroymentAction();
  return (
    <>
      <Header />
      <div className={styles.asteroids}>
        {busket.map((asteroid) => {
          return <AsteroidCard key={asteroid.id} {...asteroid} typeOfButton="remove" />;
        })}
      </div>
      <Footer />
    </>
  );
};
