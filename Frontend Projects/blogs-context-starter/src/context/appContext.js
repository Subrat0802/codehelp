import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchBlogPosts = async (page) => {

    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      setPage(json.page);
      setPosts(json.posts);
      setTotalPages(json.totalPages)
    } catch (error) {
        console.log(error);
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogPosts(page);
  }


  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
