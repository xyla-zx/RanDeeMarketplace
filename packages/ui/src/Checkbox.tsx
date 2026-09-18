import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      <label 
        htmlFor={checkboxId}
        className={`flex items-center gap-2 cursor-pointer ${error ? 'text-red-600' : 'text-gray-700'}`}
      >
        <input
          type="checkbox"
          id={checkboxId}
          className={`
            w-4 h-4 rounded border-gray-300 text-brand-600
            focus:ring-2 focus:ring-brand-500 focus:ring-offset-0
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${className}
          `}
          {...props}
        />
        {label && (
          <span className="text-sm">{label}</span>
        )}
      </label>
      {error && (
        <span className="text-xs text-red-600">{error}</span>
      )}
    </div>
  );
};
