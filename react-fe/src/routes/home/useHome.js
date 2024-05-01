import { usePagination } from "../../components/Pagination";
import { usePosts } from "../../hooks/usePosts";

export const useHome = () => {
  const $posts = usePosts();

  const pagination = usePagination({
    postsPerPage: 8,
    postCount: $posts.data?.articles.length,
  });

  const currentPosts =
    $posts.data?.articles.slice(pagination.currentIndex, pagination.endIndex) ??
    [];

  return {
    pagination,
    currentPosts,
    $posts,
  };
};
