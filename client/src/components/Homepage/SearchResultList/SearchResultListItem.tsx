import useSearch from "hooks/useSearch";
import { VirtulizedListItemProps } from "types/homepage";

const SearchResultListItem = ({ index, style }: VirtulizedListItemProps) => {
  const {
    state: { searchList },
  } = useSearch();

  const { pageid, title } = searchList[index];

  return (
    <div style={{ ...style, padding: "10px" }} key={pageid}>
      {title}
    </div>
  );
};

export default SearchResultListItem;
