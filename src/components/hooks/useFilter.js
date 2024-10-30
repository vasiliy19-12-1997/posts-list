import { useMemo } from "react";
function useSorted(sort, posts) {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort]?.localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [sort, posts]);
  return sortedPosts;
}
export function useFilter(sort, query, posts) {
  const sortedPosts = useSorted(sort, posts);
  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post[sort]?.toLowerCase().includes(query?.toLowerCase())
    );
  }, [sortedPosts, query]);
  return sortedAndSearchPosts;
}
