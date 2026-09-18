import React from 'react';

interface PriceTagProps {
  amount: number;
  currency?: 'THB' | 'USD';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'success' | 'danger';
  showDecimals?: boolean;
  originalPrice?: number;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  amount,
  currency = 'THB',
  size = 'md',
  variant = 'default',
  showDecimals = false,
  originalPrice,
  className = '',
}) => {
  const formatAmount = (value: number) => {
    if (currency === 'THB') {
      return showDecimals
        ? value.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : Math.round(value).toLocaleString('th-TH');
    }
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
    });
  };

  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl',
  };

  const variantStyles = {
    default: 'text-gray-900',
    primary: 'text-brand-600',
    success: 'text-green-600',
    danger: 'text-red-600',
  };

  const discount = originalPrice && originalPrice > amount
    ? Math.round(((originalPrice - amount) / originalPrice) * 100)
    : null;

  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`font-bold ${sizeStyles[size]} ${variantStyles[variant]}`}>
        {currency === 'THB' && '฿'}
        {formatAmount(amount)}
      </span>
      
      {originalPrice && originalPrice > amount && (
        <>
          <span className="text-sm text-gray-400 line-through">
            {currency === 'THB' && '฿'}
            {formatAmount(originalPrice)}
          </span>
          {discount && (
            <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded-full">
              -{discount}%
            </span>
          )}
        </>
      )}
    </div>
  );
};
