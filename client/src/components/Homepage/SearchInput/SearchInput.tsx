import { DEBOUNCE_DELAY } from "constants/index";
import useDebounce from "hooks/useDebounce";
import React, { useEffect, useState } from "react";
import "./SearchInput.css";
import { SearchBarProps } from "types/homepage";

const SearchInput = ({ onSearchInputChange }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const searchQuery = useDebounce(query, DEBOUNCE_DELAY);

  useEffect(() => {
    onSearchInputChange(searchQuery || "");
  }, [searchQuery]);

  return (
    <div className="input-container">
      <label className="input-label" htmlFor="searchInput">
        Search Keyword:
      </label>
      <input
        id="searchInput"
        className="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
