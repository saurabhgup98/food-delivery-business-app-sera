import React from 'react';

interface ListPrimaryFooterProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  filteredItems: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (page: number) => void;
  className?: string;
}

const ListPrimaryFooter: React.FC<ListPrimaryFooterProps> = ({
  currentPage,
  totalPages,
  totalItems,
  filteredItems,
  onPreviousPage,
  onNextPage,
  onPageChange,
  className = ''
}) => {
  return (
    <div className={`bg-dark-700/30 border-t border-dark-600 px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Left Side - Item Count */}
        <div className="text-gray-400 text-sm">
          Showing {filteredItems} of {totalItems} users
        </div>

        {/* Right Side - Pagination */}
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button 
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded transition-colors duration-200 ${
              currentPage === 1 
                ? 'bg-dark-600 border-dark-500 text-gray-500 cursor-not-allowed' 
                : 'bg-dark-600 border-dark-500 text-gray-300 hover:bg-dark-500'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 border rounded transition-colors duration-200 ${
                  page === currentPage
                    ? 'bg-sera-pink/20 border-sera-pink/40 text-sera-pink'
                    : 'bg-dark-600 border-dark-500 text-gray-300 hover:bg-dark-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded transition-colors duration-200 ${
              currentPage === totalPages 
                ? 'bg-dark-600 border-dark-500 text-gray-500 cursor-not-allowed' 
                : 'bg-dark-600 border-dark-500 text-gray-300 hover:bg-dark-500'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListPrimaryFooter;
