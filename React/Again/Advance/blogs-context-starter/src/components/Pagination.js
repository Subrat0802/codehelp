import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="border border-black flex  w-full">
      <div>
        {page > 1 && (
          <button
            className="bg-gray-400"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}
      
        {page < totalPages && (
          <button
            className="bg-gray-400"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
