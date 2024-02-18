import "./SearchResultList.css";
import { FixedSizeList as VirtulizedList } from "react-window";
import { VIRTULIZED_LIST } from "constants/index";
import { VirtulizedListItemProps, SearchResultListProps } from "types/homepage";

const VirtulizedListItem = ({
  searchResults,
  index,
  style,
}: VirtulizedListItemProps) => {
  const { pageid, title } = searchResults[index];

  return (
    <div style={{ ...style, padding: "10px" }} key={pageid}>
      {title}
    </div>
  );
};

const SearchResultList = ({ searchResults }: SearchResultListProps) => {
  return searchResults.length > 0 ? (
    <div className="suggestions-list">
      <VirtulizedList
        height={VIRTULIZED_LIST.HEIGHT}
        width={VIRTULIZED_LIST.WIDTH}
        itemSize={VIRTULIZED_LIST.ITEM_SIZE}
        itemCount={searchResults.length}
      >
        {({ index, style }) => (
          <VirtulizedListItem
            searchResults={searchResults}
            index={index}
            style={style}
            key={searchResults[index].pageid}
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
