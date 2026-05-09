import { useDestroymentAction } from "../../ActionContext";
import styles from "./AsteroidAction.module.css";

export const AsteroidAction = (props) => {
  const { isDanger, asteroid, typeOfButton } = props;
  const { addToDestroymentBusket, removeFromDestroymentBusket } =
    useDestroymentAction();
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToDestroymentBusket(asteroid);
  };
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromDestroymentBusket(asteroid.id);
  };
  const buttonStyles =
    typeOfButton === "add"
      ? { className: styles.addButton, onClick: handleAdd }
      : { className: styles.removeButton, onClick: handleRemove };
  return (
    <div className={styles.container}>
      <div>Оценка:</div>
      <div>{isDanger ? "Опасен" : "Не опасен"}</div>
      <button {...buttonStyles}>
        {typeOfButton === "add" ? "На уничтожение" : "Отменить уничтожение"}
      </button>
    </div>
  );
};
