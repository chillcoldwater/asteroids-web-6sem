import { createContext, useContext, useReducer } from "react";

const initialState = {
  busket: [],
};

const ActionContext = createContext();
const asteroidReducer = (state, action) => {
  switch (action.type) {
    case "add_asteroid_destroyment": {
      if (state.busket.find((asteroid) => asteroid.id === action.payload.id)) {
        return state;
      } else {
        console.log("Добавили на уничтожение:", action.payload)
        return {
          ...state,
          busket: [...state.busket, action.payload],
        };
      }
    }
    case "remove_asteroid_destroyment": {
      return {
        ...state,
        busket: state.busket.filter(
          (asteroid) => asteroid.id !== action.payload,
        ),
      };
    }
    default:
      return state;
  }
};

export const ActionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(asteroidReducer, initialState);
  const addToDestroymentBusket = (asteroid) => {
    dispatch({
      type: "add_asteroid_destroyment",
      payload: asteroid,
    });
  };
  const removeFromDestroymentBusket = (id) => {
    dispatch({ type: "remove_asteroid_destroyment", payload: id });
  };
  return (
    <ActionContext.Provider
      value={{
        busket: state.busket,
        addToDestroymentBusket,
        removeFromDestroymentBusket,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export const useDestroymentAction = () => {
  const context = useContext(ActionContext);
  return context;
};
