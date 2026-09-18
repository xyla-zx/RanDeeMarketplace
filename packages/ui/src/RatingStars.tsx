import React from 'react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  showCount?: boolean;
  count?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showNumber = false,
  showCount = false,
  count,
  interactive = false,
  onRate,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const renderStars = () => {
    return Array.from({ length: maxRating }, (_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= Math.floor(rating);
      const isHalf = !isFilled && starValue - 0.5 <= rating;

      return (
        <button
          key={index}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onRate?.(starValue)}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          aria-label={`Rate ${starValue} out of ${maxRating}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={sizeStyles[size]}
            fill={isFilled ? '#fbbf24' : 'none'}
            stroke={isFilled || isHalf ? '#fbbf24' : '#d1d5db'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      );
    });
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">{renderStars()}</div>
      {showNumber && (
        <span className="text-sm font-medium text-gray-700 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
      {showCount && count !== undefined && (
        <span className="text-sm text-gray-500 ml-1">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
};
