import "./SearchHistory.css";
import useSearch from "hooks/useSearch";

const SearchHistory = () => {
  const {
    state: { history },
  } = useSearch();

  return (
    <aside className="search-history">
      <label className="history-label">Search History:</label>
      {history?.length > 0 ? (
        <ul className="search-history-list">
          {history.map((query: string) => (
            <li key={query} className="search-history-item">
              {query}
            </li>
          ))}
        </ul>
      ) : (
        <p>No search history available.</p>
      )}
    </aside>
  );
};

export default SearchHistory;
