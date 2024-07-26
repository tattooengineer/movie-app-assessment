import React from 'react';
import '../styling/Pagination.css'

function Pagination({ page, setPage }) {
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className='pagination'>
      <button onClick={handlePrevious} disabled={page === 1} className='pagination-btn'>
      {"<"}
      </button>
      <span className='center'>Page {page}</span>
      <button onClick={handleNext} className='pagination-btn'>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
