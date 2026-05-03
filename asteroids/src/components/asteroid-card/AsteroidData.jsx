import styles from "./AsteroidData.module.css";

const getAsteroidStyle = (diameter) => {
  if (diameter > 100 && diameter < 500) {
    return {
      backgroundImage: "url(/medium-asteroid.png)",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "15%",
    };
  }

  if (diameter >= 500) {
    return {
      backgroundImage: "url(/big-asteroid.png)",
      backgroundRepeat: "no-repeat",
    };
  }

  if (diameter <= 100) {
    return {
      backgroundImage: "url(/small-asteroid.png)",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "25%",
      backgroundPositionY: "5%",
    };
  }
};

const InfoRow = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "1em",
      gap: "1px",
    }}
  >
    <span style={{ whiteSpace: "nowrap" }}>{label}</span>
    <div
      style={{ flex: 1, borderBottom: "0.2em dotted #000", height: "1px" }}
    ></div>
    <span style={{ whiteSpace: "nowrap" }}>{value}</span>
  </div>
);

export const AsteroidData = (props) => {
  const { name, date, distance, diameter} = props;
  return (
    <div className={styles.container} style={getAsteroidStyle(diameter)}>
      <div className={styles.dino}>
        <img src="/dino.png" alt="Dino" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 2fr",
        }}
      >
        <div className={styles.asteroidName}>{name}</div>
        <div>
          <InfoRow label="Дата" value={date} />
          <InfoRow label="Расстояние" value={distance} />
          <InfoRow label="Размер" value={diameter} />
        </div>
      </div>
    </div>
  );
};
