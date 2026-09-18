import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className = '',
  label,
}) => {
  if (label) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="flex-grow border-t border-gray-300" />
        <span className="flex-shrink mx-4 text-sm text-gray-500">{label}</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>
    );
  }

  return (
    <div
      className={`
        bg-gray-300
        ${orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'}
        ${className}
      `}
      role="separator"
      aria-orientation={orientation}
    />
  );
};
