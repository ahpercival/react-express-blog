export const Pagination = ({ currentPage, setCurrentPage, pageCount }) => {
  return (
    <div>
      <ul className="pagination">
        {Array(pageCount)
          .fill(0)
          .map((_, index) => {
            return (
              <li
                key={currentPage + index}
                className={`page-item ${currentPage === index ? "active" : ""}`}
              >
                <button
                  className="page-link"
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
    </div>
  );
};
