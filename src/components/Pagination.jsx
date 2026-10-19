import { Pagination as BootstrapPagination } from "react-bootstrap";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="pagination-bar">
      <span className="pagination-label">
        Trang <strong>{currentPage}</strong> / {totalPages}
      </span>
      <BootstrapPagination
        className="catalog-pagination"
        aria-label="Phân trang sản phẩm"
      >
        <BootstrapPagination.Prev
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Trang trước"
        >
          Trước
        </BootstrapPagination.Prev>
        {pageNumbers.map((page) => (
          <BootstrapPagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
            aria-label={`Trang ${page}`}
          >
            {page}
          </BootstrapPagination.Item>
        ))}
        <BootstrapPagination.Next
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Trang tiếp theo"
        >
          Tiếp
        </BootstrapPagination.Next>
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;
