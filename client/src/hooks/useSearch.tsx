import { SearchContext } from "context/SearchContextProvider";
import { useContext } from "react";
import { SearchContextType } from "types/context";

const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchContextProvider");
  }

  return context;
};

export default useSearch;
