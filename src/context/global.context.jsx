import { createContext, useReducer, useMemo } from "react";

const initialState = {
  isLoggedIn: false,
  user: null,
  pendingGameForm: null,
  isSearching: false,
};

const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case "PENDING_GAME_FORM":
      return {
        ...state,
        pendingGameForm: action.payload,
      };
    case "SET_IS_SEARCHING":
      return {
        ...state,
        isSearching: true,
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
