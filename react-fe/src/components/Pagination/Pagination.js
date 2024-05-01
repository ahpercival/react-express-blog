export const Pagination = ({ currentPage, setCurrentPage, pageCount }) => {
  return (
    <ul className="text-center">
      {Array(pageCount)
        .fill(0)
        .map((_, index) => {
          return (
            <li
              key={currentPage + index}
              className={`page-item ${currentPage === index ? "active" : ""} inline-block min-w-6 m-1`}
            >
              <button
                className="p-2 hover:bg-slate-400"
                onClick={() => {
                  setCurrentPage(index);
                }}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
