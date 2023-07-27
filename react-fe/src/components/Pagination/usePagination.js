import { useState } from "react";

export const usePagination = ({ postsPerPage, postCount }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const currentIndex = currentPage * postsPerPage;

  const pageCount = Math.ceil(postCount / postsPerPage);

  return {
    currentPage,
    setCurrentPage,
    pageCount,
    currentIndex,
    endIndex: currentIndex + postsPerPage,
  };
};
