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
    const lunarDistance = 384400;
  const distanceInLunar = (asteroid.distance / lunarDistance).toFixed(2);

  return (
    <>
      <Header />
      <div style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "16px",
        color: "white"
      }}>
        <h1 style={{ textAlign: "center", marginTop: 0, marginBottom: "1.5rem" }}>
          {asteroid.name}
        </h1>
        
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.2)"
        }}>
          <strong>Опасность:</strong>
          <span>{asteroid.isDanger ? "Опасен" : "Безопасен"}</span>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.2)"
        }}>
          <strong>Диаметр:</strong>
          <span>{asteroid.diameter} м</span>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.2)"
        }}>
          <strong>Расстояние:</strong>
          <span>{Number(asteroid.distance).toLocaleString()} км</span>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px"
        }}>
          <strong>До Луны:</strong>
          <span>{distanceInLunar} LD</span>
        </div>
      </div>
      <Footer />
    </>
  );
};
