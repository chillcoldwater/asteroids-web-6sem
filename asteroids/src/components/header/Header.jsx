export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        borderBottom: "solid",
        marginBottom: "2em",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <span style={{ font: "2.5em Helvetica" }}>ARMAGGEDON V</span>
        <span>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          земле
        </span>
      </div>
      <div style={{ flex: 1 }}></div>
      <div>Астероиды/Уничтожение</div>
    </div>
  );
};
