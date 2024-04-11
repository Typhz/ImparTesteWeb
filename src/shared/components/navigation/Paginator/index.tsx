import React from 'react';
import "./styles.scss";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className="paginator__container">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <span>Página {page}</span>
      <button onClick={() => setPage(page + 1)}>
        Próximo
      </button>
    </div>
  );
}

export default Pagination;
