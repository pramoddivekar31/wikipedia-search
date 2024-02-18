export interface SearchResults {
  title: string;
  pageid: number;
}

export interface SearchResultListProps {
  searchResults: SearchResults[];
}

export interface VirtulizedListItemProps {
  searchResults: SearchResults[];
  index: number;
  style: object;
}

export interface SearchBarProps {
  onSearchInputChange: (query: string) => void;
}

export interface SearchHistoryProps {
  searchHistory: string[];
}
