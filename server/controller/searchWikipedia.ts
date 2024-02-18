import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { SEARCH_BASE_URL } from "../constants/apiUrl";
import memoryCache from "../utils/memoryCache";

interface SearchResultItem {
  title: string;
  pageid: number;
}

const searchWikipedia = async (req: Request, res: Response) => {
  try {
    const { query, limit, offset } = req.query;

    // Define a unique key for caching based on the request parameters
    const cacheKey = `search:${query}-${limit}-${offset}`;

    // Try to get data from the cache
    const cachedResult = memoryCache.get<SearchResultItem[]>(cacheKey);

    if (cachedResult) {
      console.log(`Data retrieved from cache for key: ${cacheKey}`);
      res.json(cachedResult);
      return;
    }

    // If data is not in the cache, fetch it using the API/Database
    const searchUrl: string = `${SEARCH_BASE_URL}&srsearch=${query}&srlimit=${limit}&sroffset=${offset}`;
    const response = await axios.get(searchUrl);

    if (response.data.error) throw response.data.error;

    const searchResult = response.data?.query?.search || [];

    const searchResultList: SearchResultItem[] = searchResult.map(
      ({ title, pageid }: SearchResultItem) => ({ title, pageid })
    );

    // Store the fetched data in the cache
    memoryCache.set(cacheKey, searchResultList, 30 * 60);

    res.json(searchResultList);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      res
        .status(axiosError.response?.status || 500)
        .json(axiosError.response?.data || "Internal Server Error");
    } else {
      res.status(500).json({
        error:
          error?.info || (error as Error)?.message || "Internal Server Error",
      });
    }
  }
};

export default searchWikipedia;
