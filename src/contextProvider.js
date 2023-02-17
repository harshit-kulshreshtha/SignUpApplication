import { myreducer, initialState } from "./reducer";
import { createContext, useReducer, useContext } from "react";
import { addUserName, addEmailId } from "./dispatcher";

const context = createContext(null);
export const useContextProvider = () => useContext(context);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myreducer, initialState);

  const dispatcher = {
    addUserName: addUserName(dispatch),
    addEmailId: addEmailId(dispatch),
  };
  return (
    <context.Provider value={{ state, dispatcher }}>
      {children}
    </context.Provider>
  );
};
