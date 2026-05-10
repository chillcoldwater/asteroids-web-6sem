import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useCallback,
} from "react";

const initialState = {
  busket: [],
  isKilometers: true,
};

const ActionContext = createContext();
const asteroidReducer = (state, action) => {
  switch (action.type) {
    case "add_asteroid_destroyment": {
      if (state.busket.find((asteroid) => asteroid.id === action.payload.id)) {
        return state;
      } else {
        console.log("Добавили на уничтожение:", action.payload);
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
    case "toggle_kilometers": {
      return {
        ...state,
        isKilometers: action.payload ? true : false,
      };
    }
    default:
      return state;
  }
};

export const ActionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(asteroidReducer, initialState);
  const addToDestroymentBusket = useCallback((asteroid) => {
    console.log("addTodestr вызвана");
    dispatch({
      type: "add_asteroid_destroyment",
      payload: asteroid,
    });
  }, []);
  const removeFromDestroymentBusket = useCallback((id) => {
    console.log("remove вызвана");
    dispatch({ type: "remove_asteroid_destroyment", payload: id });
  }, []);
  const toggleKilometers = useCallback((value) => {
    console.log("toggle вызвана");
    dispatch({ type: "toggle_kilometers", payload: value });
  }, []);
  const basketValue = useMemo(() => {
    console.log("баскет пересоздан!");
    return {
      busket: state.busket,
      addToDestroymentBusket,
      removeFromDestroymentBusket,
    };
  }, [state.busket, addToDestroymentBusket, removeFromDestroymentBusket]);

  const settingsValue = useMemo(
    () => ({
      isKilometers: state.isKilometers,
      toggleKilometers,
    }),
    [state.isKilometers, toggleKilometers],
  );

  const value = useMemo(
    () => ({
      basket: basketValue,
      settings: settingsValue,
    }),
    [basketValue, settingsValue],
  );
  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(ActionContext);
  console.log("useBasket вернул:", context?.basket);
  return context?.basket;
};

export const useSettings = () => {
  const context = useContext(ActionContext);
  return context?.settings;
};
