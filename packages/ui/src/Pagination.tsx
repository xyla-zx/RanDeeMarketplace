import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showFirstLast?: boolean;
  showPreviousNext?: boolean;
  maxVisiblePages?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  showFirstLast = false,
  showPreviousNext = true,
  maxVisiblePages = 5,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    // Adjust if we're near the edges
    if (currentPage <= halfVisible) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }
    if (currentPage > totalPages - halfVisible) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className={className}>
      <ul className="flex items-center gap-1">
        {/* First page */}
        {showFirstLast && currentPage > 2 && (
          <li>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Go to first page"
            >
              1
            </button>
          </li>
        )}

        {/* Previous button */}
        {showPreviousNext && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Go to previous page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </li>
        )}

        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          const isActive = page === currentPage;
          
          return (
            <li key={index}>
              {typeof page === 'number' ? (
                <button
                  onClick={() => onPageChange(page)}
                  className={`
                    px-3 py-2 text-sm rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-brand-600 text-white font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {page}
                </button>
              ) : (
                <span className="px-2 text-gray-400">...</span>
              )}
            </li>
          );
        })}

        {/* Next button */}
        {showPreviousNext && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Go to next page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </li>
        )}

        {/* Last page */}
        {showFirstLast && currentPage < totalPages - 1 && (
          <li>
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Go to last page"
            >
              {totalPages}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
