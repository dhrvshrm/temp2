import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../library/constants";

/*
This hook is used to handle the debounce search on the basis of query string params
and respective search text in a dynamic manner
*/

export const useDynamicDebouncedSearch = (
  searchText,
  locations,
  queryParams = {},
  delay = 500,
) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    try {
      setLoading(true);
      let response;

      if (locations) {
        response = await axios.get(
          `${API_URL.LOCATIONS}?searchText=${searchText}`,
        );
        setSearchResults(response.data.cities);
      } else {
        const queryString = new URLSearchParams(queryParams).toString();
        response = await axios.get(
          `${API_URL.EDUCATION}?${queryString}&searchText=${searchText}`,
        );
        setSearchResults(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchText) {
        search();
      }
    }, delay);

    return () => clearTimeout(debounceTimer);
  }, [searchText]);

  return { searchResults, loading, setSearchResults };
};
