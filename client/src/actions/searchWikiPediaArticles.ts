import { SEARCH_URL, SEARCH_PARAMS } from "constants/index";
import { SearchResults } from "types/homepage";

const searchWikiPediaArticles = async ({
  query,
}: {
  query: string;
}): Promise<SearchResults[]> => {
  try {
    const response = await fetch(
      `${SEARCH_URL}?` +
        new URLSearchParams({
          query,
          limit: String(SEARCH_PARAMS.LIMIT),
          offset: String(SEARCH_PARAMS.OFFSET),
        }),
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export default searchWikiPediaArticles;
