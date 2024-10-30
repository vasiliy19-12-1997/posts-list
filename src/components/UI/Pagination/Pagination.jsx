import { usePagination } from "../../hooks/usePagination";

export default function Pagination({ page, changePage, totalPages }) {
  const pages = usePagination(totalPages);

  return (
    <div className="page-wrapper">
      {pages.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page-current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
