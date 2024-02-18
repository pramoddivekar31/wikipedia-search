export interface SearchResults {
  title?: string;
  pageid?: number;
}

export interface VirtulizedListItemProps {
  index: number;
  style: object;
}

export interface SearchInputProps {
  onSearchInputChange: (query: string) => void;
}
