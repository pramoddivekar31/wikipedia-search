import { SearchHistoryProps } from "types/homepage";
import "./SearchHistory.css";

const SearchHistory = ({ searchHistory }: SearchHistoryProps) => {
  return (
    <aside className="search-history">
      <label className="history-label">Search History:</label>
      {searchHistory.length > 0 ? (
        <ul className="search-history-list">
          {searchHistory.map((query: string) => (
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
