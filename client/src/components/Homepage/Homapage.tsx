import React, { useState } from "react";
import SearchInput from "components/Homepage/SearchInput";
import SearchResultList from "components/Homepage/SearchResultList";
import SearchHistory from "components/Homepage/SearchHistory";
import Loader from "common/Loader";
import {
  SEARCH_ERROR_MSG,
  SEARCH_PARAMS,
  SEARCH_URL,
  WIKIPEDIA_LOGO,
} from "constants/index";
import "./Homepage.css";
import useToast from "hooks/useToast";
import useSearch from "hooks/useSearch";
import SEARCH_ACTIONS from "context/constants/searchActions";
import searchWikiPediaArticles from "actions/searchWikiPediaArticles";

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { showToast } = useToast();
  const { dispatch } = useSearch();

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      if (!query) {
        dispatch({ type: SEARCH_ACTIONS.SET_SEARCH_RESULTS, payload: [] });
        return;
      }

      const searchList = await searchWikiPediaArticles({ query });

      dispatch({
        type: SEARCH_ACTIONS.SET_SEARCH_RESULTS,
        payload: searchList,
      });
      dispatch({
        type: SEARCH_ACTIONS.UPDATE_TO_HISTORY,
        payload: query as string,
      });
    } catch (error) {
      showToast(SEARCH_ERROR_MSG);
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
      <SearchHistory />
      <SearchInput onSearchInputChange={handleSearch} />
      {!loading ? <SearchResultList /> : <Loader />}
    </div>
  );
};

export default Homepage;
