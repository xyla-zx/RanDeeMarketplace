import React from 'react';
import Image from 'next/image';

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  imageAlt?: string;
  condition?: 'new' | 'like_new' | 'good' | 'fair' | 'poor';
  location?: string;
  postedAt?: Date;
  isLiked?: boolean;
  onLike?: () => void;
  onClick?: () => void;
  className?: string;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  imageUrl,
  imageAlt = title,
  condition,
  location,
  postedAt,
  isLiked = false,
  onLike,
  onClick,
  className = '',
}) => {
  const formatPrice = (amount: number) => {
    return Math.round(amount).toLocaleString('th-TH');
  };

  const timeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'เพิ่งลง';
    if (diffMins < 60) return `${diffMins} นาทีที่แล้ว`;
    if (diffHours < 24) return `${diffHours} ชั่วโมงที่แล้ว`;
    return `${diffDays} วันที่แล้ว`;
  };

  const conditionLabels = {
    new: 'ใหม่',
    like_new: 'เหมือนใหม่',
    good: 'ดี',
    fair: 'พอใช้',
    poor: 'ทรุดโทรม',
  };

  return (
    <div
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        
        {/* Like button */}
        {onLike && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
            className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={isLiked ? '#ef4444' : 'none'}
              stroke={isLiked ? '#ef4444' : 'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isLiked ? 'text-red-500' : 'text-gray-600'}
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        )}

        {/* Condition badge */}
        {condition && (
          <span className="absolute bottom-2 left-2 px-2 py-1 text-xs font-medium bg-black/70 text-white rounded-md">
            {conditionLabels[condition]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">฿{formatPrice(price)}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-400 line-through">
              ฿{formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm text-gray-900 line-clamp-2">{title}</h3>

        {/* Location and time */}
        {(location || postedAt) && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {location && (
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {location}
              </span>
            )}
            {postedAt && <span>{timeAgo(postedAt)}</span>}
          </div>
        )}
      </div>
    </div>
  );
};
