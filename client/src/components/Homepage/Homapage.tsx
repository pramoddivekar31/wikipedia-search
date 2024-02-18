import React, { useState } from "react";
import SearchInput from "components/Homepage/SearchInput";
import SearchResultList from "components/Homepage/SearchResultList";
import SearchHistory from "components/Homepage/SearchHistory";
import Loader from "common/Loader";
import { SEARCH_PARAMS, SEARCH_URL, WIKIPEDIA_LOGO } from "constants/index";
import "./Homepage.css";
import useToast from "hooks/useToast";
import { SearchResults } from "types/homepage";

const Homepage = () => {
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      if (!query) {
        setSearchResults([]);
        return;
      }

      const response = await fetch(
        `${SEARCH_URL}?` +
          new URLSearchParams({
            query: query,
            limit: String(SEARCH_PARAMS.LIMIT),
            offset: String(SEARCH_PARAMS.OFFSET),
          })
      );
      const searchResults = await response.json();
      setSearchResults(searchResults);
      setSearchHistory((prevHistory) => [...prevHistory, query]);
    } catch (error) {
      console.log("Errror:");
      showToast("Failed to load the results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-container">
      <section className="title-section">
        <img src={WIKIPEDIA_LOGO} alt="wikipedia" className="logo-image" />
        <div>
          <h1>Wikipedia</h1>
          <h5>The Free Encyclopedia</h5>
        </div>
      </section>
      <SearchHistory searchHistory={searchHistory} />
      <SearchInput onSearchInputChange={handleSearch} />
      {!loading ? (
        <SearchResultList searchResults={searchResults} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Homepage;
