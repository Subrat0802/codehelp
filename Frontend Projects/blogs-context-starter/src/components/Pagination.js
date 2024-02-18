import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const Pagination = () => {
  const { page, totalPages, setTotalPages, setPage, handlePageChange } =
    useContext(AppContext);

  return (
    <div>

      <p>Page {page} of {totalPages}</p>
      {page<totalPages && <button
        className="bg-gray-400"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>}

      { page>1 && <button
        className="bg-gray-400"
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>}
    </div>
  );
};

export default Pagination;
