import { useMemo } from "react";

export function usePagination(totalPages) {
  const pages = useMemo(() => {
    const tempPages = [];
    for (let i = 1; i <= totalPages; i++) {
      tempPages.push(i);
    }
    return tempPages;
  }, [totalPages]);
  return pages;
}
