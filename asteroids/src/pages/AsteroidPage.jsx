import { useParams } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const AsteroidPage = () => {
  const { asteroidId } = useParams();
  return (
    <>
      <Header />
      Asteroid Page {asteroidId}
      <Footer />
    </>
  );
};
