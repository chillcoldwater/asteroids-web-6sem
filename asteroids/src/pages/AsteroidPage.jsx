import { useParams } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { AsteroidController } from "../AsteroidController";

export const AsteroidPage = () => {
  const { asteroidId } = useParams();
  const [asteroid, setAsteroid] = useState([]);
  useEffect(() => {
    AsteroidController.getAsteroid(asteroidId).then((result) => {
      setAsteroid(result);
    });
  }, []);
  console.log(asteroid)
  return (
    <>
      <Header />
      <div>
        {Object.entries(asteroid).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {String(value)}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
