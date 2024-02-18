import "./SearchResultList.css";
import { FixedSizeList as VirtulizedList } from "react-window";
import { VIRTULIZED_LIST } from "constants/index";
import SearchResultListItem from "./SearchResultListItem";
import useSearch from "hooks/useSearch";

const SearchResultList = () => {
  const {
    state: { searchList },
  } = useSearch();

  return searchList.length > 0 ? (
    <div className="suggestions-list">
      <VirtulizedList
        height={VIRTULIZED_LIST.HEIGHT}
        width={VIRTULIZED_LIST.WIDTH}
        itemSize={VIRTULIZED_LIST.ITEM_SIZE}
        itemCount={searchList.length}
      >
        {({ index, style }) => (
          <SearchResultListItem
            index={index}
            style={style}
            key={searchList[index].pageid}
          />
        )}
      </VirtulizedList>
    </div>
  ) : (
    <div className="no-result-container">
      <p className="no-result-message">
        Please enter a keyword to discover relevant information..!
      </p>
    </div>
  );
};

export default SearchResultList;
