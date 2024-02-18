import React, { createContext, useReducer } from "react";
import {
  Action,
  ISearchInitialState,
  SearchContextType,
  SearchProviderProps,
} from "types/context";
import reducer from "context/reducer/searchReducer";

const initialState: ISearchInitialState = {
  searchList: [],
  history: [],
};

export const SearchContext = createContext<{
  state: ISearchInitialState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const SearchContextProvider = ({ children }: SearchProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: SearchContextType = {
    state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
