import { AsteroidsList } from "../components/asteroids-list/AsteroidsList";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import styles from "./AsteroidsPage.module.css";

export const AsteroidPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AsteroidsList />
      <Footer />
    </div>
  );
};
